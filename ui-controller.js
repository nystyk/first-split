// --- UI CONTROLLER ---

/**
 * NEW: Renders the legend with interactive toggles for event types.
 * @param {string} period - The current period.
 */
function renderLegend(period) {
    const legendPanel = state.dom.legendPanel;
    
    // Define the event types to be displayed in the legend
    const eventTypes = [
        { type: 'major', label: 'Eveniment Major', symbolHtml: '<div class="legend-symbol-label"></div>' },
        { type: 'atrocity', label: 'Locul Atrocității', symbolHtml: '<div class="atrocity-dot visible"></div>' },
        { type: 'minor', label: 'Eveniment Minor', symbolHtml: '<div class="minor-event-dot visible"></div>' }
    ];

    let eventTypesHTML = `<div class="legend-section"><h4>Legenda Evenimente</h4>`;
    
    // Create a toggle for each event type
    eventTypes.forEach(item => {
        const isChecked = state.eventFilters[item.type];
        eventTypesHTML += `
            <label class="legend-toggle" for="toggle-${item.type}">
                <input type="checkbox" id="toggle-${item.type}" data-type="${item.type}" ${isChecked ? 'checked' : ''}>
                <span class="checkbox-visual"><span class="checkmark"></span></span>
                <span>${item.label}</span>
                <div class="legend-symbol">${item.symbolHtml}</div>
            </label>
        `;
    });
    eventTypesHTML += `</div>`;
    
    // Generate HTML for territorial control based on the period
    let allegianceHTML = '';
    if (period !== 'pre-war' && period !== 'post-war') {
        allegianceHTML = `<div class="legend-section"><h4>Control Teritorial (${period})</h4>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color allied-color"></div><span>Control Aliat</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color axis-color"></div><span>Controlul Axei</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color occupied-color"></div><span>Ocupație de către Axă</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color neutral-color"></div><span>Zone Neutre</span></div></div>`;
    }

    legendPanel.innerHTML = eventTypesHTML + allegianceHTML;
    legendPanel.classList.remove('hidden');

    // Add event listeners to the new checkboxes
    document.querySelectorAll('.legend-toggle input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const eventType = e.target.dataset.type;
            const isVisible = e.target.checked;
            state.eventFilters[eventType] = isVisible;
            // Re-render the map events to reflect the new filter state
            renderMapEvents(state.currentPeriod); 
        });
    });
}


/**
 * Updates the visual state of the timeline slider and its tooltip.
 * @param {string} periodIndex - The index of the current period.
 */
function updateSliderVisuals(periodIndex) {
    const slider = state.dom.timelineSlider;
    const tooltip = state.dom.sliderTooltip;
    
    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const progressPercent = (val - min) / (max - min) * 100;
    slider.style.setProperty('--fill-percent', `${progressPercent}%`);
    
    const periodKey = config.periods[parseInt(periodIndex, 10)];
    tooltip.textContent = periodKey === 'pre-war' ? 'Pre-Război' : (periodKey === 'post-war' ? 'Post-Război' : periodKey);
    
    const sliderWidth = slider.clientWidth;
    const thumbWidth = 25;
    const travelDistance = sliderWidth - thumbWidth;
    const progress = (val - min) / (max - min);
    const thumbLeft = progress * travelDistance + (thumbWidth / 2);
    tooltip.style.left = `${slider.offsetLeft + thumbLeft}px`;
}

/**
 * Positions the year labels beneath the timeline slider.
 */
function positionSliderLabels() {
    const labelsContainer = document.getElementById('slider-labels');
    const labels = labelsContainer.getElementsByTagName('span');
    const slider = state.dom.timelineSlider;
    if (!slider || !labelsContainer || labels.length === 0) return;

    const sliderWidth = slider.clientWidth;
    const thumbWidth = 25;
    const travelableWidth = sliderWidth - thumbWidth;
    const numSteps = labels.length - 1;

    for (let i = 0; i < labels.length; i++) {
        const progress = i / numSteps;
        const labelCenterPos = (progress * travelableWidth) + (thumbWidth / 2);
        labels[i].style.left = `${labelCenterPos}px`;
        labels[i].style.transform = 'translateX(-50%)';
    }
}

/**
 * Sets up the timeline slider with labels and event listeners.
 */
function renderFilterBar() {
    const labelsContainer = document.getElementById('slider-labels');
    state.dom.timelineSlider.max = config.periods.length - 1;
    labelsContainer.innerHTML = config.periods.map(p => `<span>${p === 'pre-war' ? 'Pre' : (p === 'post-war' ? 'Post' : p)}</span>`).join('');

    state.dom.timelineSlider.addEventListener('input', () => updateSliderVisuals(state.dom.timelineSlider.value));
    state.dom.timelineSlider.addEventListener('change', () => handlePeriodChange(config.periods[state.dom.timelineSlider.value]));

    const toggleTooltip = (visible) => {
        if (visible) {
            updateSliderVisuals(state.dom.timelineSlider.value);
            state.dom.sliderTooltip.classList.add('visible');
        } else {
            state.dom.sliderTooltip.classList.remove('visible');
        }
    };
    
    state.dom.timelineSlider.addEventListener('mousedown', () => toggleTooltip(true));
    state.dom.timelineSlider.addEventListener('touchstart', () => toggleTooltip(true));
    state.dom.timelineSlider.addEventListener('mouseup', () => toggleTooltip(false));
    state.dom.timelineSlider.addEventListener('touchend', () => toggleTooltip(false));
}

// --- MODAL MANAGEMENT ---

/**
 * Shows the main event modal with details.
 * @param {object} event - The event object to display.
 */
function showModal(event) {
    state.currentEvent = event;
    const modal = state.dom.modal;
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDescription').textContent = event.description;
    document.getElementById('modalImage').src = event.imageUrl;
    
    document.getElementById('aiContent').style.display = 'none';
    document.getElementById('aiResult').textContent = '';
    document.getElementById('deeperDiveBtn').disabled = false;
    document.getElementById('personalStoryBtn').disabled = false;

    modal.classList.remove('hidden');
}

function hideModal() {
    state.dom.modal.classList.add('hidden');
    state.currentEvent = null;
}


/**
 * Shows the context modal for pre-war or post-war periods.
 * @param {string} key - The period key ('pre-war' or 'post-war').
 */
function showContextModal(key) {
    const data = contextData[key];
    if (!data) {
        state.dom.contextModal.classList.add('hidden');
        return;
    }
    state.dom.contextModal.querySelector('#contextModalTitle').textContent = data.title;
    state.dom.contextModal.querySelector('#contextModalDescription').textContent = data.description;
    state.dom.contextModal.classList.remove('hidden');
}

function hideContextModal() {
    state.dom.contextModal.classList.add('hidden');
}

// --- AI Interaction Logic ---
async function getAiResponse(prompt) {
    console.log("Sending prompt to AI:", prompt);
    await new Promise(resolve => setTimeout(resolve, 1500)); 
    
    if (prompt.includes("personală")) {
        return "Într-un sat mic de lângă Varșovia, în 1944, tânăra Elżbieta asculta cu teamă zgomotul luptelor. Fratele ei, un membru al Armatei Teritoriale, plecase să lupte în Revoltă. Zilele treceau încet, marcate de speranță și frică. Într-o seară, un soldat rănit i-a bătut la ușă, aducând vestea că fratele ei a căzut eroic. Deși zdrobită de durere, Elżbieta a găsit puterea de a-l îngriji pe soldat, devenind un simbol al rezistenței tăcute a poporului polonez.";
    }
    return "Analiza AI indică faptul că acest eveniment a fost un punct de cotitură strategic, modificând echilibrul de putere în regiune. Consecințele pe termen lung au inclus realinieri geopolitice și un impact economic semnificativ, care a influențat deciziile ulterioare ale ambelor tabere. Factorii cheie au fost logistica superioară și utilizarea inovatoare a noilor tehnologii militare.";
}

document.getElementById('deeperDiveBtn').addEventListener('click', async () => {
    if (!state.currentEvent) return;
    const prompt = `Oferă o analiză aprofundată a evenimentului: ${state.currentEvent.title}.`;
    handleAiRequest(prompt);
});

document.getElementById('personalStoryBtn').addEventListener('click', async () => {
    if (!state.currentEvent) return;
    const prompt = `Creează o poveste personală, emoționantă, din perspectiva unui civil afectat de evenimentul: ${state.currentEvent.title}.`;
    handleAiRequest(prompt);
});

async function handleAiRequest(prompt) {
    const aiContent = document.getElementById('aiContent');
    const loader = document.getElementById('loader');
    const resultP = document.getElementById('aiResult');
    const diveBtn = document.getElementById('deeperDiveBtn');
    const storyBtn = document.getElementById('personalStoryBtn');

    aiContent.style.display = 'block';
    loader.style.display = 'flex';
    resultP.textContent = '';
    diveBtn.disabled = true;
    storyBtn.disabled = true;

    try {
        const response = await getAiResponse(prompt);
        resultP.textContent = response;
    } catch (error) {
        console.error("AI Error:", error);
        resultP.textContent = "Ne pare rău, a apărut o eroare la generarea răspunsului.";
    } finally {
        loader.style.display = 'none';
        diveBtn.disabled = false;
        storyBtn.disabled = false;
    }
}
