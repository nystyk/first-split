// --- UI CONTROLLER ---

/**
 * Renders the legend, handles default states, and cleans up irrelevant overlays.
 */
function renderLegend(period) {
    const legendPanel = state.dom.legendPanel;
    
    // --- Event Toggles ---
    const eventTypes = [
        { type: 'major', label: 'Eveniment Major', symbolHtml: `<svg class="legend-marker-svg major-svg" width="16" height="16" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="11" r="10" fill="#4a6d8a" stroke="#000" stroke-width="2"/><polygon points="11,5 12.9,9.1 17.4,9.3 13.8,12.2 15,16.5 11,13.9 7,16.5 8.2,12.2 4.6,9.3 9.1,9.1" fill="#fff"/></svg>` },
        { type: 'atrocity', label: 'Locul Atrocității', symbolHtml: `<svg class="legend-marker-svg atrocity-svg" width="16" height="16" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="2" y="2" width="16" height="16" rx="3" fill="#e74c3c" stroke="#fff" stroke-width="2"/><text x="10" y="15" text-anchor="middle" font-size="13" fill="#fff" font-family="Arial" font-weight="bold">!</text></svg>` },
        { type: 'minor', label: 'Eveniment Minor', symbolHtml: `<svg class="legend-marker-svg minor-svg" width="14" height="14" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg"><circle cx="9" cy="9" r="8" fill="#f1c40f" stroke="#333" stroke-width="2"/><circle cx="9" cy="9" r="3" fill="#fff"/></svg>` }
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
    
    relevantOverlays.forEach(key => {
        if (state.overlayFilters[key] === undefined) {
             state.overlayFilters[key] = true;
        }
    });

    if (relevantOverlays.length > 0) {
        thematicHTML = `<div class="legend-section"><h4>Suprapuneri Tematice</h4>`;
        relevantOverlays.forEach(key => {
            const item = thematicData[key];
            const isChecked = state.overlayFilters[key];
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
    legendPanel.classList.add('visible');

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

    for (const key in state.thematicLayers) {
        if (!relevantOverlays.includes(key) || !state.overlayFilters[key]) {
             renderThematicOverlays();
        }
    }

    renderThematicOverlays();
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
function positionSliderLabels() {
    const labelsContainer = document.getElementById('slider-labels');
    if (!labelsContainer || !state.dom.timelineSlider) return;
    
    Array.from(labelsContainer.children).forEach((label, index) => {
        const slider = state.dom.timelineSlider;
        const sliderWidth = slider.clientWidth;
        const thumbWidth = 25;
        const travelDistance = sliderWidth - thumbWidth;
        const stepPosition = (index / (config.periods.length - 1)) * travelDistance + (thumbWidth / 2);
        const percentage = (stepPosition / sliderWidth) * 100;
        
        label.style.left = `${percentage}%`;
    });
}

/**
 * Sets up the timeline slider with labels and event listeners.
 */
function renderFilterBar() {
    const labelsContainer = document.getElementById('slider-labels');
    state.dom.timelineSlider.max = config.periods.length - 1;
    labelsContainer.innerHTML = config.periods.map(p => `<span class='slider-label'>${p === 'pre-war' ? 'Pre' : (p === 'post-war' ? 'Post' : p)}</span>`).join('');
    labelsContainer.style.display = 'block';
    labelsContainer.style.position = 'relative';
    labelsContainer.style.width = '100%';
    labelsContainer.style.marginTop = '4px';
    labelsContainer.style.pointerEvents = 'none';
    labelsContainer.style.height = '20px';
    
    Array.from(labelsContainer.children).forEach((label, index) => {
        label.className = 'slider-label';
        label.style.position = 'absolute';
        label.style.textAlign = 'center';
        label.style.pointerEvents = 'none';
        label.style.whiteSpace = 'nowrap';
        label.style.transform = 'translateX(-50%)';
        label.style.top = '0';
        
        const slider = state.dom.timelineSlider;
        const sliderWidth = slider.clientWidth;
        const thumbWidth = 25;
        const travelDistance = sliderWidth - thumbWidth;
        const stepPosition = (index / (config.periods.length - 1)) * travelDistance + (thumbWidth / 2);
        const percentage = (stepPosition / sliderWidth) * 100;
        
        label.style.left = `${percentage}%`;
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

window.addEventListener('resize', () => setTimeout(positionSliderLabels, 0));

// --- MODAL MANAGEMENT ---
function showModal(event) {
    state.currentEvent = event;
    const modal = state.dom.modal;
    
    document.getElementById('modalTitle').textContent = event.title;
    document.getElementById('modalDescription').textContent = event.description;
    document.getElementById('modalImage').src = event.imageUrl;
    document.getElementById('modalYear').textContent = event.year;
    
    const eventTypeElement = document.getElementById('modalEventType');
    eventTypeElement.textContent = getEventTypeLabel(event.type);
    eventTypeElement.className = `px-3 py-1 text-xs font-semibold rounded-full ${event.type}`;
    
    // Apply event type styling to year badge
    const yearElement = document.getElementById('modalYear');
    yearElement.className = `px-3 py-1 text-lg font-bold rounded-lg shadow-lg backdrop-blur-sm ${event.type}`;
    
    // Update modal image overlay color based on event type
    const modalImageOverlay = document.getElementById('modalImageOverlay');
    const overlayColors = {
        'major': 'from-blue-900/60 via-blue-800/40 to-blue-900/60',
        'minor': 'from-yellow-700/60 via-yellow-600/40 to-yellow-700/60',
        'atrocity': 'from-red-900/60 via-red-800/40 to-red-900/60'
    };
    modalImageOverlay.className = `absolute inset-0 bg-gradient-to-br ${overlayColors[event.type] || overlayColors.major}`;
    
    let locationText = `Coordonate: ${event.lat.toFixed(4)}, ${event.lng.toFixed(4)}`;
    document.getElementById('modalLocationText').textContent = locationText;
    
    document.getElementById('modalContext').innerHTML = `<p>${event.context || 'Context istoric nu este disponibil.'}</p>`;
    document.getElementById('modalFigures').innerHTML = generateKeyFiguresHTML(event.figures);
    document.getElementById('modalImpact').innerHTML = `<p>${event.impact || 'Impactul și consecințele nu sunt disponibile.'}</p>`;
    
    updateModalProgress(event);
    
    modal.classList.add('visible');
    
    setupModalInteractions(event);

    function handleOutsideClick(e) {
        const content = modal.querySelector('.modal-content');
        if (content && !content.contains(e.target)) {
            hideModal();
        }
    }
    state.modalOutsideClickHandler = handleOutsideClick;
    setTimeout(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
    }, 0);
}

function getEventTypeLabel(type) {
    const labels = {
        'major': 'Eveniment Major',
        'minor': 'Eveniment Minor', 
        'atrocity': 'Atrocitate'
    };
    return labels[type] || type;
}

function generateKeyFiguresHTML(figures) {
    if (!figures || figures.length === 0) {
        return '<p>Nu sunt disponibile figuri cheie.</p>';
    }
    
    return figures.map(figure => `
        <div class="figure-card">
            <div class="figure-name">${figure.name}</div>
            <div class="figure-role">${figure.role}</div>
        </div>
    `).join('');
}


function getEventPeriod(event) {
    for (const [period, events] of Object.entries(allEventsData)) {
        if (events.some(e => e.title === event.title)) {
            return period;
        }
    }
    return 'pre-war';
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
    document.getElementById('viewOnMapBtn').onclick = () => {
        hideModal();
        state.map.flyTo([event.lat, event.lng], 6, {
            duration: 2,
            easeLinearity: 0.25
        });
    };
    
    const currentPeriod = getEventPeriod(event);
    const eventsInPeriod = allEventsData[currentPeriod] || [];
    const currentIndex = eventsInPeriod.findIndex(e => e.title === event.title);
    
    const prevBtn = document.getElementById('prevEventBtn');
    const nextBtn = document.getElementById('nextEventBtn');
    
    // Store navigation data in state for arrow key handling
    state.currentModalNavigation = {
        currentPeriod,
        eventsInPeriod,
        currentIndex
    };
    
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
    
    prevBtn.disabled = currentIndex <= 0;
    nextBtn.disabled = currentIndex >= eventsInPeriod.length - 1;
    
    const handleKeyPress = (e) => {
        if (e.key === 'Escape') {
            hideModal();
        } else if (e.key === 'ArrowLeft' && !prevBtn.disabled) {
            e.preventDefault(); // Prevent default browser behavior
            if (state.currentModalNavigation && state.currentModalNavigation.currentIndex > 0) {
                const newIndex = state.currentModalNavigation.currentIndex - 1;
                showModal(state.currentModalNavigation.eventsInPeriod[newIndex]);
            }
        } else if (e.key === 'ArrowRight' && !nextBtn.disabled) {
            e.preventDefault(); // Prevent default browser behavior
            if (state.currentModalNavigation && state.currentModalNavigation.currentIndex < state.currentModalNavigation.eventsInPeriod.length - 1) {
                const newIndex = state.currentModalNavigation.currentIndex + 1;
                showModal(state.currentModalNavigation.eventsInPeriod[newIndex]);
            }
        }
    };
    
    // Remove any existing key handler before adding new one
    if (state.currentModalKeyHandler) {
        document.removeEventListener('keydown', state.currentModalKeyHandler);
    }
    
    document.addEventListener('keydown', handleKeyPress);
    state.currentModalKeyHandler = handleKeyPress;
}

function hideModal() {
    state.dom.modal.classList.remove('visible');
    state.currentEvent = null;
    
    // Clean up navigation data
    state.currentModalNavigation = null;
    
    if (state.currentModalKeyHandler) {
        document.removeEventListener('keydown', state.currentModalKeyHandler);
        state.currentModalKeyHandler = null;
    }
    if (state.modalOutsideClickHandler) {
        document.removeEventListener('mousedown', state.modalOutsideClickHandler);
        document.removeEventListener('touchstart', state.modalOutsideClickHandler);
        state.modalOutsideClickHandler = null;
    }
}

/**
 * FIX: Show or hide the context modal with animations.
 * @param {string} key - The period key (e.g., 'pre-war').
 */
function showContextModal(key) {
    const data = contextData[key];
    // Only show for pre-war and post-war
    if (!data || (key !== 'pre-war' && key !== 'post-war')) {
        hideContextModal();
        return;
    }
    state.dom.contextModal.querySelector('#contextModalTitle').textContent = data.title;
    state.dom.contextModal.querySelector('#contextModalDescription').textContent = data.description;
    state.dom.contextModal.classList.add('visible');

    function handleOutsideClick(e) {
        const content = state.dom.contextModal.querySelector('.context-modal-content');
        if (content && !content.contains(e.target)) {
            hideContextModal();
        }
    }
    state.contextModalOutsideClickHandler = handleOutsideClick;
    setTimeout(() => {
        document.addEventListener('mousedown', handleOutsideClick);
        document.addEventListener('touchstart', handleOutsideClick);
    }, 0);
}

function hideContextModal() {
    state.dom.contextModal.classList.remove('visible');
    if (state.contextModalOutsideClickHandler) {
        document.removeEventListener('mousedown', state.contextModalOutsideClickHandler);
        document.removeEventListener('touchstart', state.contextModalOutsideClickHandler);
        state.contextModalOutsideClickHandler = null;
    }
}

// === HELP MODAL FUNCTIONS ===
function showHelpModal() {
    document.getElementById('helpModal').classList.add('visible');
}

function hideHelpModal() {
    document.getElementById('helpModal').classList.remove('visible');
}

// === CREDITS MODAL FUNCTIONS ===
function showCreditsModal() {
    document.getElementById('creditsModal').classList.add('visible');
}

function hideCreditsModal() {
    document.getElementById('creditsModal').classList.remove('visible');
}

// === QUIZ MODAL FUNCTIONS ===
let quizState = {
    currentDifficulty: null,
    currentQuestions: [],
    currentQuestionIndex: 0,
    userAnswers: [],
    correctAnswers: 0,
    quizType: null, // 'general', 'period'
    quizTarget: null // period name
};

function showQuizModal(quizType = 'general', target = null) {
    quizState.quizType = quizType;
    quizState.quizTarget = target;
    
    document.getElementById('quizModal').classList.add('visible');
    showQuizWelcome();
}

function hideQuizModal() {
    document.getElementById('quizModal').classList.remove('visible');
    resetQuizState();
}

function resetQuizState() {
    quizState = {
        currentDifficulty: null,
        currentQuestions: [],
        currentQuestionIndex: 0,
        userAnswers: [],
        correctAnswers: 0,
        quizType: null,
        quizTarget: null
    };
}

function showQuizWelcome() {
    document.getElementById('quizWelcome').classList.remove('hidden');
    document.getElementById('quizDifficulty').classList.add('hidden');
    document.getElementById('quizQuestions').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    
    // Reset quiz state
    quizState.quizType = null;
    quizState.quizTarget = null;
}

function showQuizDifficultySelection(quizType) {
    quizState.quizType = quizType;
    
    if (quizType === 'period') {
        quizState.quizTarget = state.currentPeriod || config.periods[state.dom.timelineSlider.value];
    }
    
    document.getElementById('quizWelcome').classList.add('hidden');
    document.getElementById('quizDifficulty').classList.remove('hidden');
    document.getElementById('quizQuestions').classList.add('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    
    // Update difficulty screen content
    const titleElement = document.getElementById('difficultyTitle');
    const descriptionElement = document.getElementById('difficultyDescription');
    
    if (quizType === 'period') {
        const periodLabel = quizGenerator.getPeriodLabel(quizState.quizTarget);
        titleElement.textContent = `Test - Perioada ${periodLabel}`;
        descriptionElement.textContent = `Selectează nivelul de dificultate pentru testul despre perioada ${periodLabel}.`;
    } else {
        titleElement.textContent = 'Test General - Al Doilea Război Mondial';
        descriptionElement.textContent = 'Selectează nivelul de dificultate pentru testul general.';
    }
}

function startQuiz(difficulty) {
    quizState.currentDifficulty = difficulty;
    
    // Generate questions based on quiz type
    switch (quizState.quizType) {
        case 'period':
            quizState.currentQuestions = quizGenerator.generatePeriodQuestions(quizState.quizTarget, difficulty);
            break;
        default:
            quizState.currentQuestions = [...quizData[difficulty]];
    }
    
    quizState.currentQuestionIndex = 0;
    quizState.userAnswers = new Array(quizState.currentQuestions.length).fill(null);
    quizState.correctAnswers = 0;
    
    document.getElementById('quizWelcome').classList.add('hidden');
    document.getElementById('quizDifficulty').classList.add('hidden');
    document.getElementById('quizQuestions').classList.remove('hidden');
    document.getElementById('quizResults').classList.add('hidden');
    
    showCurrentQuestion();
}

function showCurrentQuestion() {
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];
    const questionNumber = quizState.currentQuestionIndex + 1;
    const totalQuestions = quizState.currentQuestions.length;
    
    document.getElementById('currentQuestion').textContent = questionNumber;
    document.getElementById('totalQuestions').textContent = totalQuestions;
    document.getElementById('questionText').textContent = question.question;
    
    // Update progress bar
    const progress = (questionNumber / totalQuestions) * 100;
    document.getElementById('quizProgressBar').style.width = `${progress}%`;
    
    // Generate answer options
    const answerOptionsContainer = document.getElementById('answerOptions');
    answerOptionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'answer-option p-3 border border-gray-600 rounded-lg cursor-pointer hover:bg-gray-700 transition-colors';
        optionDiv.innerHTML = `
            <input type="radio" name="answer" value="${index}" id="answer${index}" class="mr-3">
            <label for="answer${index}" class="cursor-pointer w-full block">${option}</label>
        `;
        
        // Make the entire div clickable
        optionDiv.addEventListener('click', () => {
            const radio = optionDiv.querySelector('input[type="radio"]');
            radio.checked = true;
        });
        
        answerOptionsContainer.appendChild(optionDiv);
    });
    
    // Update navigation buttons
    document.getElementById('prevQuestionBtn').disabled = quizState.currentQuestionIndex === 0;
    document.getElementById('checkAnswerBtn').classList.remove('hidden');
    document.getElementById('nextQuestionBtn').classList.add('hidden');
    
    // Clear previous selections
    const radioButtons = document.querySelectorAll('input[name="answer"]');
    radioButtons.forEach(radio => radio.checked = false);
    
    // Remove previous feedback
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach(option => {
        option.classList.remove('correct', 'incorrect', 'selected');
    });
}

function checkAnswer() {
    const selectedAnswer = document.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) {
        alert('Te rugăm să selectezi un răspuns!');
        return;
    }
    
    const selectedIndex = parseInt(selectedAnswer.value);
    const question = quizState.currentQuestions[quizState.currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    // Store user answer
    quizState.userAnswers[quizState.currentQuestionIndex] = selectedIndex;
    if (isCorrect) {
        quizState.correctAnswers++;
    }
    
    // Show feedback
    const answerOptions = document.querySelectorAll('.answer-option');
    answerOptions.forEach((option, index) => {
        if (index === selectedIndex) {
            option.classList.add('selected');
        }
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedIndex && !isCorrect) {
            option.classList.add('incorrect');
        }
    });
    
    // Show explanation
    const explanationDiv = document.createElement('div');
    explanationDiv.className = 'mt-4 p-3 bg-blue-900 rounded-lg';
    explanationDiv.innerHTML = `<strong>Explicație:</strong> ${question.explanation}`;
    document.getElementById('answerOptions').appendChild(explanationDiv);
    
    // Update buttons
    document.getElementById('checkAnswerBtn').classList.add('hidden');
    if (quizState.currentQuestionIndex < quizState.currentQuestions.length - 1) {
        document.getElementById('nextQuestionBtn').classList.remove('hidden');
    } else {
        // Show finish button for last question
        const finishBtn = document.getElementById('nextQuestionBtn');
        finishBtn.textContent = 'Vezi Rezultatele';
        finishBtn.classList.remove('hidden');
    }
}

function nextQuestion() {
    if (quizState.currentQuestionIndex < quizState.currentQuestions.length - 1) {
        quizState.currentQuestionIndex++;
        showCurrentQuestion();
    } else {
        showQuizResults();
    }
}

function previousQuestion() {
    if (quizState.currentQuestionIndex > 0) {
        quizState.currentQuestionIndex--;
        showCurrentQuestion();
        
        // Restore previous answer if exists
        const previousAnswer = quizState.userAnswers[quizState.currentQuestionIndex];
        if (previousAnswer !== null) {
            const radioButton = document.querySelector(`input[name="answer"][value="${previousAnswer}"]`);
            if (radioButton) {
                radioButton.checked = true;
            }
        }
    }
}

function quitTest() {
    // Calculate current score based on answered questions
    const answeredQuestions = quizState.userAnswers.filter(answer => answer !== null).length;
    const currentCorrect = quizState.correctAnswers;
    
    // Show confirmation dialog
    const confirmed = confirm(`Ești sigur că vrei să termini testul? Ai răspuns la ${answeredQuestions} din ${quizState.currentQuestions.length} întrebări și ai ${currentCorrect} răspunsuri corecte.`);
    
    if (confirmed) {
        showQuizResults();
    }
}

function showQuizResults() {
    document.getElementById('quizWelcome').classList.add('hidden');
    document.getElementById('quizQuestions').classList.add('hidden');
    document.getElementById('quizResults').classList.remove('hidden');
    
    const totalQuestions = quizState.currentQuestions.length;
    const answeredQuestions = quizState.userAnswers.filter(answer => answer !== null).length;
    const percentage = Math.round((quizState.correctAnswers / totalQuestions) * 100);
    
    // Check if test was completed or quit early
    const wasCompleted = answeredQuestions === totalQuestions;
    
    document.getElementById('finalScore').textContent = `${quizState.correctAnswers}/${totalQuestions}`;
    document.getElementById('scorePercentage').textContent = `${percentage}%`;
    
    // Set score message
    let scoreMessage = '';
    if (!wasCompleted) {
        scoreMessage = `Test terminat înainte de final. Ai răspuns la ${answeredQuestions} din ${totalQuestions} întrebări.`;
    } else if (percentage >= 90) {
        scoreMessage = 'Excelent! Ai cunoștințe excepționale despre istoria celui de-al Doilea Război Mondial!';
    } else if (percentage >= 70) {
        scoreMessage = 'Foarte bine! Ai o înțelegere solidă a evenimentelor din această perioadă.';
    } else if (percentage >= 50) {
        scoreMessage = 'Bun! Ai cunoștințe de bază, dar mai ai de învățat.';
    } else {
        scoreMessage = 'Încearcă să studiezi mai mult evenimentele din această perioadă istorică.';
    }
    document.getElementById('scoreMessage').textContent = scoreMessage;
    
    // Generate results summary
    const answersReview = document.getElementById('answersReview');
    answersReview.innerHTML = '';
    
    quizState.currentQuestions.forEach((question, index) => {
        const userAnswer = quizState.userAnswers[index];
        
        // Only show answered questions if test was quit early
        if (!wasCompleted && userAnswer === null) {
            return;
        }
        
        const isCorrect = userAnswer === question.correct;
        
        const resultDiv = document.createElement('div');
        resultDiv.className = `p-3 rounded-lg ${isCorrect ? 'bg-green-900' : 'bg-red-900'}`;
        resultDiv.innerHTML = `
            <div class="flex items-center gap-2 mb-2">
                <span class="font-semibold">Întrebarea ${index + 1}:</span>
                <span class="${isCorrect ? 'text-green-400' : 'text-red-400'}">
                    ${isCorrect ? '✓ Corect' : '✗ Greșit'}
                </span>
            </div>
            <p class="text-sm mb-1"><strong>Întrebare:</strong> ${question.question}</p>
            <p class="text-sm mb-1"><strong>Răspunsul tău:</strong> ${userAnswer !== null ? question.options[userAnswer] : 'Nu ai răspuns'}</p>
            <p class="text-sm mb-1"><strong>Răspunsul corect:</strong> ${question.options[question.correct]}</p>
            <p class="text-sm"><strong>Explicație:</strong> ${question.explanation}</p>
        `;
        answersReview.appendChild(resultDiv);
    });
}

// === RESET BUTTON FUNCTIONALITY ===
function resetMapView() {
    const currentPeriod = state.currentPeriod || config.periods[state.dom.timelineSlider.value];
    if (typeof handlePeriodChange === 'function') {
        handlePeriodChange(currentPeriod, true);
    } else if (window.handlePeriodChange) {
        window.handlePeriodChange(currentPeriod, true);
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('story-play').addEventListener('click', resetMapView);
    
    // Start button functionality
    document.getElementById('start-btn').addEventListener('click', function() {
        location.reload();
    });
    
    // Help button functionality
    document.getElementById('help-btn').addEventListener('click', function() {
        showHelpModal();
    });
    
    // Credits button functionality
    document.getElementById('credits-btn').addEventListener('click', function() {
        showCreditsModal();
    });
    
    // Quiz button functionality
    document.getElementById('quiz-btn').addEventListener('click', function() {
        showQuizModal();
    });
    
    // Close button event listeners
    document.getElementById('closeHelpModal').addEventListener('click', hideHelpModal);
    document.getElementById('closeCreditsModal').addEventListener('click', hideCreditsModal);
    document.getElementById('closeQuizModal').addEventListener('click', hideQuizModal);
    
    // Close modals when clicking outside
    document.getElementById('helpModal').addEventListener('click', function(e) {
        if (e.target === this) {
            hideHelpModal();
        }
    });
    
    document.getElementById('creditsModal').addEventListener('click', function(e) {
        if (e.target === this) {
            hideCreditsModal();
        }
    });
    
    document.getElementById('quizModal').addEventListener('click', function(e) {
        if (e.target === this) {
            hideQuizModal();
        }
    });
    
    // Quiz event listeners
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('quiz-type-btn')) {
            const quizType = e.target.getAttribute('data-type');
            showQuizDifficultySelection(quizType);
        }
        if (e.target.classList.contains('quiz-difficulty-btn')) {
            const difficulty = e.target.getAttribute('data-difficulty');
            startQuiz(difficulty);
        }
    });
    
    document.getElementById('checkAnswerBtn').addEventListener('click', checkAnswer);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    document.getElementById('prevQuestionBtn').addEventListener('click', previousQuestion);
    document.getElementById('quitTestBtn').addEventListener('click', quitTest);
    document.getElementById('restartQuizBtn').addEventListener('click', function() {
        showQuizWelcome();
    });
    document.getElementById('closeQuizBtn').addEventListener('click', hideQuizModal);
    document.getElementById('backToQuizType').addEventListener('click', function() {
        showQuizWelcome();
    });
    
    const backBtn = document.getElementById('story-back');
    const forwardBtn = document.getElementById('story-forward');
    
    if(backBtn) backBtn.style.display = 'none';
    if(forwardBtn) forwardBtn.style.display = 'none';
});
