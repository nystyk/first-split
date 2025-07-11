// Quiz data for WWII Romanian history
const quizData = {
    easy: [
        {
            question: "În ce an a început cel de-al Doilea Război Mondial?",
            options: ["1939", "1940", "1941", "1942"],
            correct: 0,
            explanation: "Cel de-al Doilea Război Mondial a început pe 1 septembrie 1939 cu invazia Germaniei în Polonia."
        },
        {
            question: "Care a fost primul eveniment major care a implicat România în război?",
            options: ["Invazia URSS", "Dictatul de la Viena", "Căderea Parisului", "Bătălia de la Stalingrad"],
            correct: 1,
            explanation: "Dictatul de la Viena din 30 august 1940 a forțat România să cedeze Transilvania de Nord Ungariei."
        },
        {
            question: "Cine a fost conducătorul României în perioada 1940-1944?",
            options: ["Carol al II-lea", "Mihai I", "Ion Antonescu", "Nicolae Ceaușescu"],
            correct: 2,
            explanation: "Ion Antonescu a fost conducătorul României ca mareșal și prim-ministru între 1940-1944."
        },
        {
            question: "În ce an a avut loc Lovitura de stat de la 23 august?",
            options: ["1943", "1944", "1945", "1946"],
            correct: 1,
            explanation: "Lovitura de stat de la 23 august 1944 a dus la înlăturarea lui Ion Antonescu și schimbarea alianțelor României."
        },
        {
            question: "Care a fost ultimul an al celui de-al Doilea Război Mondial?",
            options: ["1944", "1945", "1946", "1947"],
            correct: 1,
            explanation: "Cel de-al Doilea Război Mondial s-a încheiat în 1945 cu capitularea Germaniei (mai) și a Japoniei (septembrie)."
        }
    ],
    medium: [
        {
            question: "Ce teritorii a pierdut România în 1940 prin dictatul de la Viena?",
            options: ["Basarabia și Bucovina", "Transilvania de Nord", "Dobrogea de Sud", "Toate cele de mai sus"],
            correct: 1,
            explanation: "Prin dictatul de la Viena, România a cedat Transilvania de Nord Ungariei."
        },
        {
            question: "Care a fost operațiunea militară germană de invazie a URSS din 1941?",
            options: ["Fall Gelb", "Barbarossa", "Weserübung", "Fall Weiss"],
            correct: 1,
            explanation: "Operațiunea Barbarossa a fost invazia Germaniei în Uniunea Sovietică din 22 iunie 1941."
        },
        {
            question: "În ce bătălie majoră a participat România alături de Germania în 1942?",
            options: ["Bătălia de la Moscova", "Bătălia de la Stalingrad", "Bătălia de la Kursk", "Bătălia Berlinului"],
            correct: 1,
            explanation: "România a participat la Bătălia de la Stalingrad cu Armata a 3-a și a 4-a."
        },
        {
            question: "Care a fost scopul principal al Operațiunii Tidal Wave din 1943?",
            options: ["Bombardarea Berlinului", "Bombardarea rafinăriilor din Ploiești", "Invazia Siciliei", "Bătălia din Atlantic"],
            correct: 1,
            explanation: "Operațiunea Tidal Wave a fost un raid aerian aliat asupra rafinăriilor de petrol din Ploiești."
        },
        {
            question: "Ce a însemnat 'Cortina de Fier' în contextul postbelic?",
            options: ["Diviziunea Europei între Est și Vest", "Un zid de apărare", "O alianță militară", "Un tratat de pace"],
            correct: 0,
            explanation: "Termenul 'Cortina de Fier' a fost folosit pentru a descrie diviziunea Europei între blocul sovietic și Occident."
        },
        {
            question: "Care a fost primul lagăr de concentrare nazist?",
            options: ["Auschwitz", "Dachau", "Buchenwald", "Sachsenhausen"],
            correct: 1,
            explanation: "Lagărul Dachau a fost primul lagăr de concentrare nazist, înființat în 1933."
        },
        {
            question: "În ce an a fost înființat lagărul Auschwitz?",
            options: ["1939", "1940", "1941", "1942"],
            correct: 1,
            explanation: "Lagărul Auschwitz a fost înființat în 1940 ca lagăr de concentrare și exterminare."
        },
        {
            question: "Care a fost operațiunea de debarcare aliată din Normandia?",
            options: ["Overlord", "Market Garden", "Torch", "Husky"],
            correct: 0,
            explanation: "Operațiunea Overlord a fost numele de cod pentru debarcarea aliată din Normandia din 6 iunie 1944."
        },
        {
            question: "Ce a însemnat 'Blitz' în contextul războiului?",
            options: ["Bombardamentele germane asupra Londrei", "Tactica de război rapidă", "Un tip de avion", "O operațiune navală"],
            correct: 0,
            explanation: "The Blitz se referă la bombardamentele aeriene germane asupra Londrei și altor orașe britanice."
        },
        {
            question: "Care a fost scopul principal al Pactului Tripartit din 1940?",
            options: ["Alianța între Germania, Italia și Japonia", "Pacea cu URSS", "Încheierea războiului", "Diviziunea Poloniei"],
            correct: 0,
            explanation: "Pactul Tripartit a creat alianța între Germania, Italia și Japonia în 1940."
        }
    ],
    hard: [
        {
            question: "Care a fost numele de cod al invaziei germane în Polonia din 1939?",
            options: ["Fall Weiss", "Fall Gelb", "Weserübung", "Barbarossa"],
            correct: 0,
            explanation: "Fall Weiss (Cazul Alb) a fost numele de cod pentru invazia Germaniei în Polonia."
        },
        {
            question: "În ce zi exactă a început Operațiunea Barbarossa?",
            options: ["20 iunie 1941", "22 iunie 1941", "24 iunie 1941", "26 iunie 1941"],
            correct: 1,
            explanation: "Operațiunea Barbarossa a început pe 22 iunie 1941 la 3:15 dimineața."
        },
        {
            question: "Care a fost numele de cod al invaziei aliate din Sicilia din 1943?",
            options: ["Husky", "Torch", "Overlord", "Market Garden"],
            correct: 0,
            explanation: "Operațiunea Husky a fost invazia aliată a Siciliei din iulie 1943."
        },
        {
            question: "Câte victime civile au fost în timpul Pogromului de la Iași din 1941?",
            options: ["Aproximativ 5.000", "Aproximativ 8.000", "Aproximativ 13.000", "Aproximativ 20.000"],
            correct: 2,
            explanation: "În timpul Pogromului de la Iași au fost uciși aproximativ 13.000 de evrei."
        },
        {
            question: "Care a fost primul oraș european eliberat de Aliați în 1944?",
            options: ["Paris", "Roma", "Bruxelles", "Amsterdam"],
            correct: 1,
            explanation: "Roma a fost primul oraș european eliberat de Aliați, pe 4 iunie 1944."
        },
        {
            question: "În ce an a fost înființat primul ghetou din Varșovia?",
            options: ["1939", "1940", "1941", "1942"],
            correct: 1,
            explanation: "Primul ghetou din Varșovia a fost înființat în 1940."
        },
        {
            question: "Care a fost numele de cod al invaziei germane în Norvegia?",
            options: ["Weserübung", "Fall Gelb", "Fall Weiss", "Barbarossa"],
            correct: 0,
            explanation: "Weserübung a fost numele de cod pentru invazia Germaniei în Norvegia și Danemarca."
        },
        {
            question: "În ce an a fost promulgată prima lege antisemită în România?",
            options: ["1938", "1940", "1941", "1942"],
            correct: 0,
            explanation: "Primele legi antisemite în România au fost promulgate în 1938."
        },
        {
            question: "Care a fost numele de cod al invaziei germane în Franța din 1940?",
            options: ["Fall Gelb", "Fall Weiss", "Weserübung", "Barbarossa"],
            correct: 0,
            explanation: "Fall Gelb (Cazul Galben) a fost numele de cod pentru invazia Germaniei în Franța."
        },
        {
            question: "În ce zi a fost lansat primul atac atomic din istorie?",
            options: ["6 august 1945", "9 august 1945", "12 august 1945", "15 august 1945"],
            correct: 0,
            explanation: "Primul atac atomic din istorie a fost lansat asupra Hiroshimei pe 6 august 1945."
        },
        {
            question: "Care a fost numele de cod al operațiunii de debarcare din Normandia?",
            options: ["Overlord", "Neptune", "Utah", "Omaha"],
            correct: 0,
            explanation: "Overlord a fost numele de cod general pentru invazia din Normandia, Neptune fiind partea navală."
        },
        {
            question: "În ce an a fost înființat primul lagăr de exterminare?",
            options: ["1940", "1941", "1942", "1943"],
            correct: 1,
            explanation: "Primul lagăr de exterminare, Chelmno, a fost înființat în 1941."
        },
        {
            question: "Care a fost numele de cod al invaziei aliate din sudul Franței din 1944?",
            options: ["Overlord", "Dragoon", "Market Garden", "Liberation"],
            correct: 1,
            explanation: "Operațiunea Dragoon a fost invazia aliată din sudul Franței din august 1944."
        },
        {
            question: "În ce an a fost înființat primul ghetou din Cracovia?",
            options: ["1939", "1940", "1941", "1942"],
            correct: 1,
            explanation: "Primul ghetou din Cracovia a fost înființat în 1940."
        },
        {
            question: "Care a fost numele de cod al operațiunii de bombardare a Dresdei?",
            options: ["Thunderclap", "Gomorrah", "Millennium", "Chastise"],
            correct: 0,
            explanation: "Thunderclap a fost numele de cod pentru bombardarea Dresdei din februarie 1945."
        }
    ]
};

// Export for use in other files
if (typeof module !== 'undefined' && module.exports) {
    module.exports = quizData;
} else {
    window.quizData = quizData;
} 