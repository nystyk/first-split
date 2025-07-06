// --- UI CONTROLLER ---

/**
 * REVISED: Renders the legend, handles default states, and cleans up irrelevant overlays.
 */
function renderLegend(period) {
    const legendPanel = state.dom.legendPanel;
    
    // --- Event Toggles ---
    const eventTypes = [
        { type: 'major', label: 'Eveniment Major', symbolHtml: '<div class="legend-symbol-label"></div>' },
        { type: 'atrocity', label: 'Locul Atrocității', symbolHtml: '<div class="atrocity-dot visible"></div>' },
        { type: 'minor', label: 'Eveniment Minor', symbolHtml: '<div class="minor-event-dot visible"></div>' }
    ];
    let eventTypesHTML = `<div class="legend-section"><h4>Legenda Evenimente</h4>`;
    eventTypes.forEach(item => {
        const isChecked = state.eventFilters[item.type];
        eventTypesHTML += `
            <label class="legend-toggle" for="toggle-event-${item.type}">
                <input type="checkbox" id="toggle-event-${item.type}" data-type="${item.type}" data-filter-type="event" ${isChecked ? 'checked' : ''}>
                <span class="checkbox-visual"><span class="checkmark"></span></span>
                <span>${item.label}</span>
                <div class="legend-symbol">${item.symbolHtml}</div>
            </label>
        `;
    });
    

    
    eventTypesHTML += `</div>`;
    
    // --- Thematic Overlays Toggles (Context-Sensitive) ---
    let thematicHTML = '';
    const relevantOverlays = Object.keys(thematicData).filter(key => thematicData[key].relevantYears.includes(period));
    
    // FIX: Set relevant overlays to be ON by default. We check if the state is undefined
    // to only set it the first time the user enters a relevant year for that session.
    relevantOverlays.forEach(key => {
        if (state.overlayFilters[key] === undefined) {
             state.overlayFilters[key] = true;
        }
    });

    if (relevantOverlays.length > 0) {
        thematicHTML = `<div class="legend-section"><h4>Suprapuneri Tematice</h4>`;
        relevantOverlays.forEach(key => {
            const item = thematicData[key];
            const isChecked = state.overlayFilters[key]; // This will now be true by default
            thematicHTML += `
                <label class="legend-toggle" for="toggle-overlay-${key}">
                    <input type="checkbox" id="toggle-overlay-${key}" data-type="${key}" data-filter-type="overlay" ${isChecked ? 'checked' : ''}>
                    <span class="checkbox-visual"><span class="checkmark"></span></span>
                    <span>${item.label}</span>
                </label>
            `;
        });
        thematicHTML += `</div>`;
    }


    // --- Territorial Control Section ---
    let allegianceHTML = '';
    if (period !== 'pre-war' && period !== 'post-war') {
        allegianceHTML = `<div class="legend-section"><h4>Control Teritorial (${period})</h4>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color allied-color"></div><span>Control Aliat</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color axis-color"></div><span>Controlul Axei</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color occupied-color"></div><span>Ocupație de către Axă</span></div>`;
        allegianceHTML += `<div class="legend-item"><div class="legend-color neutral-color"></div><span>Zone Neutre</span></div></div>`;
    }

    legendPanel.innerHTML = eventTypesHTML + thematicHTML + allegianceHTML;
    legendPanel.classList.remove('hidden');

    // --- Add Event Listeners ---
    document.querySelectorAll('.legend-toggle input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const filterType = e.target.dataset.filterType;
            const type = e.target.dataset.type;
            const isVisible = e.target.checked;

            if (filterType === 'event') {
                state.eventFilters[type] = isVisible;
                renderMapEvents(state.currentPeriod); 
            } else if (filterType === 'overlay') {
                state.overlayFilters[type] = isVisible;
                renderThematicOverlays();
            }
        });
    });

    // FIX: Automatically hide overlays that are no longer relevant for the current year
    for (const key in state.thematicLayers) {
        if (!relevantOverlays.includes(key) || !state.overlayFilters[key]) {
             renderThematicOverlays();
        }
    }
}

/**
 * Updates the visual state of the timeline slider and its tooltip.
 */
function updateSliderVisuals(periodIndex) {
    const slider = state.dom.timelineSlider;
    const tooltip = state.dom.sliderTooltip;
    const progressBar = document.getElementById('slider-progress-bar');

    const min = parseFloat(slider.min);
    const max = parseFloat(slider.max);
    const val = parseFloat(slider.value);
    const progressPercent = (val - min) / (max - min) * 100;
    // Remove blue background from slider, only use progress bar
    slider.style.setProperty('--fill-percent', `${progressPercent}%`);
    if (progressBar) {
        progressBar.style.setProperty('--fill-percent', `${progressPercent}%`);
    }

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
function positionSliderLabels() {} // No longer needed

/**
 * Sets up the timeline slider with labels and event listeners.
 */
function renderFilterBar() {
    const labelsContainer = document.getElementById('slider-labels');
    state.dom.timelineSlider.max = config.periods.length - 1;
    labelsContainer.innerHTML = config.periods.map(p => `<span class='slider-label'>${p === 'pre-war' ? 'Pre' : (p === 'post-war' ? 'Post' : p)}</span>`).join('');
    labelsContainer.style.display = 'flex';
    labelsContainer.style.justifyContent = 'space-between';
    labelsContainer.style.alignItems = 'center';
    labelsContainer.style.width = '100%';
    labelsContainer.style.position = 'static';
    labelsContainer.style.marginTop = '4px';
    labelsContainer.style.pointerEvents = 'none';
    Array.from(labelsContainer.children).forEach(label => {
        label.className = 'slider-label';
        label.style.flex = '0 0 auto';
        label.style.textAlign = 'center';
        label.style.width = '40px';
        label.style.pointerEvents = 'none';
        label.style.position = 'static';
        label.style.left = '';
        label.style.transform = '';
        label.style.top = '';
        label.style.whiteSpace = 'nowrap';
    });

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

// Also call positionSliderLabels on window resize
window.addEventListener('resize', () => setTimeout(positionSliderLabels, 0));

// --- MODAL MANAGEMENT ---
function showModal(event) {
    state.currentEvent = event;
    const modal = state.dom.modal;
    
    // Basic event information
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDescription').textContent = event.description;
    document.getElementById('modalImage').src = event.imageUrl;
    document.getElementById('modalYear').textContent = event.year;
    
    // Event type badge
    const eventTypeElement = document.getElementById('modalEventType');
    eventTypeElement.textContent = getEventTypeLabel(event.type);
    eventTypeElement.className = `px-3 py-1 text-xs font-semibold rounded-full ${event.type}`;
    
    // Location information
    const locationText = getLocationName(event.lat, event.lng);
    document.getElementById('modalLocationText').textContent = locationText;
    
    // Historical context
    const contextElement = document.getElementById('modalContext');
    contextElement.innerHTML = generateHistoricalContext(event);
    
    // Key figures
    const figuresElement = document.getElementById('modalFigures');
    figuresElement.innerHTML = generateKeyFigures(event);
    
    // Impact and consequences
    const impactElement = document.getElementById('modalImpact');
    impactElement.innerHTML = generateImpactAnalysis(event);
    
    // Progress indicator
    updateModalProgress(event);
    
    // Show modal
    modal.classList.remove('hidden');
    
    // Add event listeners for interactive buttons
    setupModalInteractions(event);
}

function getEventTypeLabel(type) {
    const labels = {
        'major': 'Eveniment Major',
        'minor': 'Eveniment Minor', 
        'atrocity': 'Atrocitate'
    };
    return labels[type] || type;
}

function getLocationName(lat, lng) {
    // This is a simplified version - in a real app you'd use a geocoding service
    const locations = {
        '48.8049,2.1204': 'Versailles, Franța',
        '41.9028,12.4964': 'Roma, Italia',
        '40.7069,-74.0113': 'New York, SUA',
        '41.8057,123.4315': 'Mukden, China',
        '52.5117,13.3819': 'Berlin, Germania',
        '48.2486,11.4322': 'Dachau, Germania',
        '52.5200,13.4050': 'Berlin, Germania',
        '8.0667,45.4167': 'Walwal, Etiopia',
        '49.2333,7.0000': 'Saarland, Germania',
        '49.4539,11.0775': 'Nürnberg, Germania',
        '9.0250,38.7469': 'Addis Ababa, Etiopia',
        '50.9375,6.9603': 'Renania, Germania',
        '35.2922,-2.9408': 'Spania',
        '43.3140,-2.6780': 'Guernica, Spania',
        '39.9042,116.4074': 'Beijing, China',
        '32.0603,118.7969': 'Nanking, China',
        '48.2082,16.3738': 'Viena, Austria',
        '46.4015,6.5909': 'Évian, Elveția',
        '48.1380,11.5752': 'München, Germania',
        '50.11,8.68': 'Germania',
        '50.3115,18.6761': 'Gleiwitz, Polonia',
        '54.4075,18.6708': 'Gdansk, Polonia',
        '52.0976,23.7341': 'Polonia',
        '52.2297,21.0122': 'Varșovia, Polonia',
        '51.6394,22.4419': 'Polonia',
        '51.4071,19.6953': 'Piotrków Trybunalski, Polonia',
        '58.8970,-3.0449': 'Scapa Flow, Scoția',
        '60.5333,29.9167': 'Finlanda',
        '-35.0,-56.0': 'Río de la Plata, Uruguay',
        '59.9139,10.7522': 'Oslo, Norvegia',
        '49.7020,4.9476': 'Franța',
        '51.0344,2.3768': 'Dunkerque, Franța',
        '48.8566,2.3522': 'Paris, Franța',
        '49.4275,2.8444': 'Compiègne, Franța',
        '51.3037,-0.0903': 'Anglia',
        '51.5072,-0.1276': 'Londra, Anglia',
        '40.4710,17.2398': 'Taranto, Italia',
        '28.5,27.0': 'Deșertul Libian',
        '50.0264,19.2094': 'Auschwitz, Polonia',
        '52.2461,20.9922': 'Varșovia, Polonia',
        '38.8951,-77.0364': 'Washington D.C., SUA',
        '44.7866,20.4489': 'Belgrad, Iugoslavia',
        '32.0763,23.9598': 'Tobruk, Libia',
        '52.0825,23.6536': 'Belarus',
        '50.4719,30.4494': 'Kiev, Ucraina',
        '59.9343,30.3351': 'Leningrad, URSS',
        '55.7512,37.6184': 'Moscova, URSS',
        '21.3512,-157.9802': 'Pearl Harbor, Hawaii',
        '52.4286,13.1594': 'Berlin, Germania',
        '1.3521,103.8198': 'Singapore',
        '50.3758,23.4589': 'Bełżec, Polonia',
        '14.65,120.5': 'Bataan, Filipine',
        '35.6895,139.6917': 'Tokyo, Japonia',
        '-15.0,150.0': 'Marea Coralilor',
        '28.2076,-177.3725': 'Midway',
        '-9.5843,160.1562': 'Guadalcanal',
        '49.9229,1.0774': 'Dieppe, Franța',
        '48.7080,44.5133': 'Stalingrad, URSS',
        '30.8222,28.9543': 'El Alamein, Egipt',
        '36.7783,3.0588': 'Algeria',
        '33.5731,-7.5898': 'Casablanca, Maroc',
        '37.5,14.5': 'Sicilia, Italia',
        '37.0696,15.2052': 'Cassibile, Italia',
        '51.4469,23.5931': 'Sobibór, Polonia',
        '35.6892,51.3890': 'Teheran, Iran',
        '41.4906,13.8136': 'Monte Cassino, Italia',
        '47.4979,19.0402': 'Budapest, Ungaria',
        '49.3400,-0.5500': 'Normandia, Franța',
        '53.9000,27.5667': 'Minsk, Belarus',
        '52.2297,21.0122': 'Varșovia, Polonia',
        '51.8126,5.8372': 'Arnhem, Olanda',
        '10.8700,125.4550': 'Golful Leyte, Filipine',
        '50.17,6.05': 'Ardeni, Belgia',
        '34.3853,132.4553': 'Hiroshima, Japonia',
        '32.7642,129.8727': 'Nagasaki, Japonia',
        '35.5504,139.7845': 'Tokyo, Japonia',
        '40.7489,-73.9680': 'New York, SUA',
        '49.4542,11.0475': 'Nürnberg, Germania',
        '38.8467,-91.9481': 'Fulton, Missouri, SUA',
        '50.8661,20.6286': 'Kielce, Polonia',
        '21.0285,105.8542': 'Hanoi, Vietnam',
        '28.6139,77.2090': 'New Delhi, India',
        '32.1093,34.8555': 'Tel Aviv, Israel',
        '39.9042,116.4074': 'Beijing, China'
    };
    
    const key = `${lat},${lng}`;
    return locations[key] || `Coordonate: ${lat.toFixed(4)}, ${lng.toFixed(4)}`;
}

function generateHistoricalContext(event) {
    const contexts = {
        'pre-war': 'În perioada interbelică, Europa se confrunta cu consecințele devastatoare ale Primului Război Mondial. Criza economică, revanșardismul german și ascensiunea regimurilor totalitare au creat condițiile pentru un nou conflict global.',
        '1939': 'Anul 1939 marchează începutul oficial al celui de-al Doilea Război Mondial. Germania nazistă, condusă de Adolf Hitler, își începe expansiunea teritorială prin invazia Poloniei.',
        '1940': 'Anul 1940 este marcat de victoriile spectaculoase ale Germaniei în Europa de Vest. Blitzkrieg-ul german copleșește rapid Danemarca, Norvegia, Olanda, Belgia și Franța.',
        '1941': 'Anul 1941 reprezintă un punct de cotitură major în război. Germania invadează Uniunea Sovietică, iar Japonia atacă Pearl Harbor, determinând intrarea SUA în conflict.',
        '1942': 'Anul 1942 marchează apogeul expansiunii Axei. Germania ajunge la Stalingrad, iar Japonia controlează o mare parte din Asia de Sud-Est. Totuși, semnele de întoarcere încep să apară.',
        '1943': 'Anul 1943 reprezintă punctul de cotitură decisiv. Înfrângerea de la Stalingrad și capitularea din Tunisia marchează începutul declinului Germaniei.',
        '1944': 'Anul 1944 este marcat de contraofensivele majore ale Aliaților. Debarcarea din Normandia și Operațiunea Bagration marchează începutul eliberării Europei.',
        '1945': 'Anul 1945 marchează sfârșitul războiului în Europa și Asia. Capitularea Germaniei și a Japoniei, precum și folosirea bombelor atomice, încheie cel mai sângeros conflict din istorie.',
        'post-war': 'Perioada postbelică este marcată de începutul Războiului Rece și reorganizarea politică a Europei. Noi alianțe și organizații internaționale se formează pentru a preveni viitoare conflicte.'
    };
    
    const period = getEventPeriod(event);
    return `<p>${contexts[period] || 'Acest eveniment a avut loc într-o perioadă de tensiuni internaționale crescânde și a contribuit la escaladarea conflictului global.'}</p>`;
}

function getEventPeriod(event) {
    for (const [period, events] of Object.entries(allEventsData)) {
        if (events.some(e => e.title === event.title)) {
            return period;
        }
    }
    return 'pre-war';
}

function generateKeyFigures(event) {
    // This would be populated with actual historical figures based on the event
    const figures = {
        'Tratatul de la Versailles': [
            { name: 'Woodrow Wilson', role: 'Președintele SUA' },
            { name: 'Georges Clemenceau', role: 'Prim-ministrul Franței' },
            { name: 'David Lloyd George', role: 'Prim-ministrul Marii Britanii' }
        ],
        'Marșul asupra Romei': [
            { name: 'Benito Mussolini', role: 'Liderul Partidului Național Fascist' },
            { name: 'Vittorio Emanuele III', role: 'Regele Italiei' }
        ],
        'Hitler devine Cancelar': [
            { name: 'Adolf Hitler', role: 'Liderul Partidului Nazist' },
            { name: 'Paul von Hindenburg', role: 'Președintele Germaniei' }
        ],
        'Invazia Poloniei (Fall Weiss)': [
            { name: 'Adolf Hitler', role: 'Führer al Germaniei' },
            { name: 'Edward Rydz-Śmigły', role: 'Comandantul Armatei Poloneze' },
            { name: 'Gerd von Rundstedt', role: 'Comandantul Grupului de Armate Sud' }
        ],
        'Bătălia Angliei': [
            { name: 'Hermann Göring', role: 'Comandantul Luftwaffe' },
            { name: 'Hugh Dowding', role: 'Comandantul RAF Fighter Command' },
            { name: 'Winston Churchill', role: 'Prim-ministrul Marii Britanii' }
        ],
        'Operațiunea Barbarossa': [
            { name: 'Adolf Hitler', role: 'Führer al Germaniei' },
            { name: 'Joseph Stalin', role: 'Liderul URSS' },
            { name: 'Fedor von Bock', role: 'Comandantul Grupului de Armate Centru' }
        ],
        'Atacul de la Pearl Harbor': [
            { name: 'Isoroku Yamamoto', role: 'Comandantul Flotei Combinată Japoneză' },
            { name: 'Franklin D. Roosevelt', role: 'Președintele SUA' },
            { name: 'Husband E. Kimmel', role: 'Comandantul Flotei Pacific SUA' }
        ],
        'Bătălia de la Stalingrad': [
            { name: 'Friedrich Paulus', role: 'Comandantul Armatei a 6-a Germane' },
            { name: 'Vasily Chuikov', role: 'Comandantul Armatei a 62-a Sovietică' },
            { name: 'Georgy Zhukov', role: 'Comandantul Frontului de Stalingrad' }
        ],
        'Ziua Z: Debarcarea din Normandia': [
            { name: 'Dwight D. Eisenhower', role: 'Comandantul Suprem Aliat' },
            { name: 'Bernard Montgomery', role: 'Comandantul Forțelor Terestre' },
            { name: 'Erwin Rommel', role: 'Comandantul Grupului de Armate B' }
        ],
        'Bătălia Berlinului': [
            { name: 'Georgy Zhukov', role: 'Comandantul Frontului 1 Belarus' },
            { name: 'Helmuth Weidling', role: 'Comandantul Apărării Berlinului' },
            { name: 'Adolf Hitler', role: 'Führer al Germaniei' }
        ],
        'Capitularea Germaniei': [
            { name: 'Alfred Jodl', role: 'Șeful Statului Major al Wehrmacht' },
            { name: 'Wilhelm Keitel', role: 'Șeful Comandamentului Suprem al Wehrmacht' },
            { name: 'Georgy Zhukov', role: 'Reprezentantul URSS' }
        ],
        'Bombardamentul Atomic de la Hiroshima': [
            { name: 'Harry S. Truman', role: 'Președintele SUA' },
            { name: 'Paul Tibbets', role: 'Pilotul Enola Gay' },
            { name: 'Hirohito', role: 'Împăratul Japoniei' }
        ],
        'Capitularea Japoniei': [
            { name: 'Douglas MacArthur', role: 'Comandantul Suprem Aliat' },
            { name: 'Mamoru Shigemitsu', role: 'Ministrul de Externe al Japoniei' },
            { name: 'Yoshijirō Umezu', role: 'Șeful Statului Major Imperial' }
        ]
    };
    
    const eventFigures = figures[event.title] || [
        { name: 'Lideri politici', role: 'Figuri cheie ale perioadei' },
        { name: 'Comandanți militari', role: 'Strategi ai conflictului' }
    ];
    
    return eventFigures.map(figure => `
        <div class="figure-card">
            <div class="figure-name">${figure.name}</div>
            <div class="figure-role">${figure.role}</div>
        </div>
    `).join('');
}

function generateImpactAnalysis(event) {
    const impacts = {
        'major': 'Acest eveniment major a avut repercusiuni profunde asupra cursului războiului, influențând deciziile strategice ale tuturor puterilor implicate și schimbând fundamental echilibrul de forțe.',
        'minor': 'Deși mai puțin cunoscut, acest eveniment a contribuit la contextul general al conflictului și a avut impact asupra evoluției ulterioare a evenimentelor.',
        'atrocity': 'Această atrocitate reprezintă una dintre cele mai întunecate pagini ale războiului, demonstrând brutalitatea conflictului și consecințele devastatoare ale ideologiilor extremiste.'
    };
    
    return `<p>${impacts[event.type] || 'Acest eveniment a avut repercusiuni semnificative asupra cursului războiului și a influențat deciziile strategice ale puterilor implicate.'}</p>`;
}

function updateModalProgress(event) {
    const currentPeriod = getEventPeriod(event);
    const eventsInPeriod = allEventsData[currentPeriod] || [];
    const currentIndex = eventsInPeriod.findIndex(e => e.title === event.title);
    
    if (currentIndex !== -1) {
        const progress = ((currentIndex + 1) / eventsInPeriod.length) * 100;
        document.getElementById('modalProgress').textContent = currentIndex + 1;
        document.getElementById('modalTotal').textContent = eventsInPeriod.length;
        document.getElementById('modalProgressBar').style.width = `${progress}%`;
    }
}

function setupModalInteractions(event) {
    // View on Map button
    document.getElementById('viewOnMapBtn').onclick = () => {
        hideModal();
        state.map.flyTo([event.lat, event.lng], 8, {
            duration: 2,
            easeLinearity: 0.25
        });
    };
    
    // Navigation buttons
    const currentPeriod = getEventPeriod(event);
    const eventsInPeriod = allEventsData[currentPeriod] || [];
    const currentIndex = eventsInPeriod.findIndex(e => e.title === event.title);
    
    const prevBtn = document.getElementById('prevEventBtn');
    const nextBtn = document.getElementById('nextEventBtn');
    
    prevBtn.onclick = () => {
        if (currentIndex > 0) {
            showModal(eventsInPeriod[currentIndex - 1]);
        }
    };
    
    nextBtn.onclick = () => {
        if (currentIndex < eventsInPeriod.length - 1) {
            showModal(eventsInPeriod[currentIndex + 1]);
        }
    };
    
    // Update button states
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= eventsInPeriod.length - 1;
    
    // Keyboard navigation
    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            hideModal();
        } else if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            prevBtn.click();
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            nextBtn.click();
        }
    };
    
    document.addEventListener('keydown', handleKeyPress);
    
    // Store the handler to remove it later
    state.currentModalKeyHandler = handleKeyPress;
}

function hideModal() {
    state.dom.modal.classList.add('hidden');
    state.currentEvent = null;
    
    // Remove keyboard event listener
    if (state.currentModalKeyHandler) {
        document.removeEventListener('keydown', state.currentModalKeyHandler);
        state.currentModalKeyHandler = null;
    }
}

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

// === RESET BUTTON FUNCTIONALITY ===

/**
 * Helper function to add aesthetic tile layer during map animations
 */
function addAestheticTileLayer() {
    const aestheticTileLayer = L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors, © CARTO',
        subdomains: 'abcd',
        maxZoom: 19
    });
    
    aestheticTileLayer.addTo(state.map);
    
    // Remove the aesthetic layer after animation
    setTimeout(() => {
        if (aestheticTileLayer._map) {
            aestheticTileLayer.remove();
        }
    }, 2500); // Slightly longer than typical animation duration
    
    return aestheticTileLayer;
}

function resetMapView() {
    // Get the current period from state or slider
    const currentPeriod = state.currentPeriod || config.periods[state.dom.timelineSlider.value];
    // Call handlePeriodChange with force=true to trigger the animation and map view logic
    if (typeof handlePeriodChange === 'function') {
        handlePeriodChange(currentPeriod, true);
    } else if (window.handlePeriodChange) {
        window.handlePeriodChange(currentPeriod, true);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Attach reset button listener
    document.getElementById('story-play').addEventListener('click', resetMapView);
    
    // Remove story mode navigation buttons functionality
    const backBtn = document.getElementById('story-back');
    const forwardBtn = document.getElementById('story-forward');
    
    // Disable navigation buttons permanently
    backBtn.disabled = true;
    forwardBtn.disabled = true;
    backBtn.classList.add('disabled');
    forwardBtn.classList.add('disabled');
});
