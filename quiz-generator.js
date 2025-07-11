// Quiz Generator - Automatically creates questions from event data
const quizGenerator = {
    // Generate questions for a specific event
    generateEventQuestions(event) {
        const questions = [];
        
        // Easy questions
        questions.push({
            question: `În ce an a avut loc "${event.title}"?`,
            options: [
                event.year.toString(),
                (event.year - 1).toString(),
                (event.year + 1).toString(),
                (event.year + 2).toString()
            ],
            correct: 0,
            explanation: `${event.title} a avut loc în anul ${event.year}.`,
            difficulty: 'easy'
        });
        
        questions.push({
            question: `Care a fost tipul evenimentului "${event.title}"?`,
            options: [
                this.getEventTypeLabel('major'),
                this.getEventTypeLabel('minor'),
                this.getEventTypeLabel('atrocity'),
                'Altele'
            ],
            correct: this.getEventTypeIndex(event.type),
            explanation: `${event.title} a fost un eveniment de tip ${this.getEventTypeLabel(event.type)}.`,
            difficulty: 'easy'
        });
        
        // Medium questions
        if (event.figures && event.figures.length > 0) {
            const randomFigure = event.figures[Math.floor(Math.random() * event.figures.length)];
            const otherFigures = event.figures.filter(f => f.name !== randomFigure.name);
            const options = [randomFigure.name];
            
            // Add other figures from the same event or random ones
            if (otherFigures.length > 0) {
                options.push(otherFigures[0].name);
            }
            
            // Add some random names to complete 4 options
            const randomNames = ['Adolf Hitler', 'Winston Churchill', 'Franklin Roosevelt', 'Iosif Stalin', 'Ion Antonescu', 'Mihai I', 'Carol al II-lea'];
            while (options.length < 4) {
                const randomName = randomNames[Math.floor(Math.random() * randomNames.length)];
                if (!options.includes(randomName)) {
                    options.push(randomName);
                }
            }
            
            // Shuffle options
            const shuffledOptions = this.shuffleArray(options);
            const correctIndex = shuffledOptions.indexOf(randomFigure.name);
            
            questions.push({
                question: `Cine a fost ${randomFigure.role.toLowerCase()} în timpul evenimentului "${event.title}"?`,
                options: shuffledOptions,
                correct: correctIndex,
                explanation: `${randomFigure.name} a fost ${randomFigure.role.toLowerCase()} în timpul evenimentului "${event.title}".`,
                difficulty: 'medium'
            });
        }
        
        // Additional medium question about event location
        if (event.location) {
            const locationOptions = [event.location];
            const otherLocations = ['Berlin', 'Moscova', 'Londra', 'Paris', 'Roma', 'Varșovia', 'București'];
            while (locationOptions.length < 4) {
                const randomLocation = otherLocations[Math.floor(Math.random() * otherLocations.length)];
                if (!locationOptions.includes(randomLocation)) {
                    locationOptions.push(randomLocation);
                }
            }
            
            const shuffledLocationOptions = this.shuffleArray(locationOptions);
            const correctLocationIndex = shuffledLocationOptions.indexOf(event.location);
            
            questions.push({
                question: `Unde a avut loc evenimentul "${event.title}"?`,
                options: shuffledLocationOptions,
                correct: correctLocationIndex,
                explanation: `Evenimentul "${event.title}" a avut loc în ${event.location}.`,
                difficulty: 'medium'
            });
        }
        
        // Hard questions - about specific details
        if (event.context && event.context.length > 100) {
            const contextSentences = event.context.split('. ').filter(s => s.length > 20);
            if (contextSentences.length > 0) {
                const randomSentence = contextSentences[Math.floor(Math.random() * contextSentences.length)];
                const words = randomSentence.split(' ').filter(word => word.length > 3 && !['este', 'a fost', 'au fost', 'sunt', 'era', 'erau', 'din', 'pentru', 'către', 'spre', 'prin', 'peste', 'sub', 'lângă', 'între', 'dintre', 'asupra', 'contra', 'fără', 'cu', 'de', 'la', 'pe', 'în', 'și', 'sau', 'dar', 'însă', 'că', 'să', 'a', 'o', 'un', 'o'].includes(word.toLowerCase()));
                
                if (words.length > 0) {
                    const keyWord = words[Math.floor(Math.random() * words.length)];
                    
                    const options = [keyWord];
                    const alternatives = ['instabilitate', 'conflict', 'criză', 'tensiune', 'acord', 'tratat', 'operațiune', 'bătălie', 'invazie', 'capitulare'];
                    while (options.length < 4) {
                        const alt = alternatives[Math.floor(Math.random() * alternatives.length)];
                        if (!options.includes(alt)) {
                            options.push(alt);
                        }
                    }
                    
                    const shuffledOptions = this.shuffleArray(options);
                    const correctIndex = shuffledOptions.indexOf(keyWord);
                    
                    questions.push({
                        question: `Care cuvânt cheie descrie cel mai bine contextul evenimentului "${event.title}"?`,
                        options: shuffledOptions,
                        correct: correctIndex,
                        explanation: `Contextul evenimentului "${event.title}" a fost marcat de ${keyWord}.`,
                        difficulty: 'hard'
                    });
                }
            }
        }
        
        return questions;
    },
    
    // Generate questions for a specific year/period
    generatePeriodQuestions(period, difficulty = 'medium') {
        const events = allEventsData[period] || [];
        const questions = [];
        
        // Filter events by difficulty
        let filteredEvents = events;
        if (difficulty === 'easy') {
            filteredEvents = events.filter(e => e.type === 'major');
        } else if (difficulty === 'hard') {
            filteredEvents = events.filter(e => e.type === 'atrocity' || e.type === 'major');
        }
        
        // Generate questions for each event
        filteredEvents.forEach(event => {
            const eventQuestions = this.generateEventQuestions(event);
            questions.push(...eventQuestions.filter(q => q.difficulty === difficulty));
        });
        
        // Add period-specific questions
        questions.push(...this.generatePeriodSpecificQuestions(period, difficulty));
        
        return this.shuffleArray(questions).slice(0, this.getQuestionCount(difficulty));
    },
    
    // Generate period-specific questions
    generatePeriodSpecificQuestions(period, difficulty) {
        const questions = [];
        const events = allEventsData[period] || [];
        
        if (difficulty === 'easy') {
            questions.push({
                question: `Câte evenimente majore au avut loc în perioada ${this.getPeriodLabel(period)}?`,
                options: [
                    events.filter(e => e.type === 'major').length.toString(),
                    (events.filter(e => e.type === 'major').length + 1).toString(),
                    (events.filter(e => e.type === 'major').length - 1).toString(),
                    events.length.toString()
                ],
                correct: 0,
                explanation: `În perioada ${this.getPeriodLabel(period)} au avut loc ${events.filter(e => e.type === 'major').length} evenimente majore.`,
                difficulty: 'easy'
            });
        }
        
        if (difficulty === 'medium') {
            const years = [...new Set(events.map(e => e.year))];
            questions.push({
                question: `În ce ani au avut loc evenimentele din perioada ${this.getPeriodLabel(period)}?`,
                options: [
                    years.join(', '),
                    years.map(y => y + 1).join(', '),
                    years.map(y => y - 1).join(', '),
                    'Toate în același an'
                ],
                correct: 0,
                explanation: `Evenimentele din perioada ${this.getPeriodLabel(period)} au avut loc în anii: ${years.join(', ')}.`,
                difficulty: 'medium'
            });
        }
        
        if (difficulty === 'hard') {
            const eventTypes = [...new Set(events.map(e => e.type))];
            questions.push({
                question: `Ce tipuri de evenimente au predominat în perioada ${this.getPeriodLabel(period)}?`,
                options: [
                    eventTypes.map(t => this.getEventTypeLabel(t)).join(', '),
                    'Doar evenimente majore',
                    'Doar atrocități',
                    'Doar evenimente minore'
                ],
                correct: 0,
                explanation: `În perioada ${this.getPeriodLabel(period)} au predominat: ${eventTypes.map(t => this.getEventTypeLabel(t)).join(', ')}.`,
                difficulty: 'hard'
            });
        }
        
        return questions;
    },
    
    // Helper functions
    getEventTypeLabel(type) {
        const labels = {
            'major': 'Major',
            'minor': 'Minor',
            'atrocity': 'Atrocitate'
        };
        return labels[type] || type;
    },
    
    getEventTypeIndex(type) {
        const types = ['major', 'minor', 'atrocity'];
        return types.indexOf(type);
    },
    
    getPeriodLabel(period) {
        const labels = {
            'pre-war': 'Pre-război',
            '1939': '1939',
            '1940': '1940',
            '1941': '1941',
            '1942': '1942',
            '1943': '1943',
            '1944': '1944',
            '1945': '1945',
            'post-war': 'Post-război'
        };
        return labels[period] || period;
    },
    
    getQuestionCount(difficulty) {
        const counts = {
            'easy': 5,
            'medium': 10,
            'hard': 15
        };
        return counts[difficulty] || 10;
    },
    
    shuffleArray(array) {
        const shuffled = [...array];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizGenerator;
} else {
    window.quizGenerator = quizGenerator;
} 