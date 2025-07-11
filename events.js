// --- EVENT DATA (Fact-Checked and Expanded) ---
const allEventsData = {
    'pre-war': [
    {
        type: 'major',
        year: 1919,
        title: 'Tratatul de la Versailles',
        lat: 48.8049,
        lng: 2.1204,
        imageUrl: 'https://images.unsplash.com/photo-1562095398-e7bf9fcf6292?q=80&w=800&auto=format&fit=crop',
        description: 'Tratatul care a încheiat oficial Primul Război Mondial, impunând condiţii extrem de dure Germaniei şi redesenând harta Europei. Semnat in Sala Oglinzilor, același loc unde fusese proclamat Imperiul German, tratatul a fost perceput ca un "Diktat" (pace dictată) de către germani, care au fost excluşi de la negocieri.',
        context: 'Lumea ieşea din cel mai devastator conflict de până atunci, iar puterile victorioase, în special Franța, doreau garanții că Germania nu va mai putea niciodată să amenințe pacea europeană. Atmosfera era încărcată de dorința de răzbunare, dar şi de idealurile wilsoniene de autodeterminare şi securitate colectivă, care s-au ciocnit în timpul negocierilor tensionate.',
        figures: [
            { name: 'Georges Clemenceau', role: 'Prim-ministrul Franței' },
            { name: 'Woodrow Wilson', role: 'Preşedintele SUA' },
            { name: 'David Lloyd George', role: 'Prim-ministrul Marii Britanii' }
        ],
        impact: 'Clauza vinovăţiei de război şi reparațiile masive au creat un resentiment național profund, alimentând mitul "înjunghierii pe la spate" şi oferind un teren fertil pentru ascensiunea mişcărilor extremiste. Tratatul a slăbit Germania, dar nu a anihilat-o, lăsând-o suficient de puternică pentru a căuta revanşa, dar suficient de umilită pentru a dori acest lucru cu ardoare.'
    },
    {
        type: 'major',
        year: 1922,
        title: 'Marșul asupra Romei',
        lat: 41.9028,
        lng: 12.4964,
        imageUrl: 'https://images.unsplash.com/photo-1629631614981-d4b8f5835694?q=80&w=800&auto=format&fit=crop',
        description: 'O manevră politică de intimidare prin care Benito Mussolini şi Partidul sâu Naţional Fascist au preluat puterea în Italia. A fost mai mult o demonstrație de forță decât o cucerire militară, exploatând frica de un război civil.',
        context: 'Italia postbelică era marcată de criză economică, şomaj şi o profundă nemulțumire faţă de rezultatele Conferinţei de Pace de la Paris, numită "victoria mutilată". Această instabilitate, combinată cu teama de o revoluție comunistă, a creat condițiile perfecte pentru ca mişcarea fascistă a lui Mussolini să câștige sprijinul elitelor.',
        figures: [
            { name: 'Benito Mussolini', role: 'Liderul Partidului Naţional Fascist' },
            { name: 'Vittorio Emanuele III', role: 'Regele Italiei' }
        ],
        impact: 'Refuzul regelui de a declara legea marţială a dus la numirea lui Mussolini ca prim-ministru, marcând începutul dictaturii fasciste. Evenimentul a creat un precedent periculos, demonstrând că un regim democratic poate fi subminat din interior prin intimidare şi complicitatea elitelor conservatoare.'
    },
    {
        type: 'minor',
        year: 1923,
        title: 'Promulgarea Constituţiei Unirii',
        lat: 44.4268,
        lng: 26.1025,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Constitu%C5%A3ia_Rom%C3%A2niei_din_1923_-_Monitorul_Oficial.jpg',
        description: 'Promulgarea unei noi constituții menite să unifice cadrul legislativ şi administrativ al României Mari după unirea din 1918. Cunoscută drept "Constituţia Unirii", aceasta a fost una dintre cele mai democratice din Europa contemporană, dar a conţinut vicii structurale care au contribuit ulterior la subminarea democrației.',
        context: 'După Marea Unire din 1918, România se confrunta cu provocarea majoră de a integra noile provincii - Transilvania, Basarabia şi Bucovina - care aveau tradiţii juridice şi administrative diferite. Elaborarea unei noi legi fundamentale a devenit o prioritate națională pentru a consolida statul unitar.',
        figures: [
            { name: 'Regele Ferdinand I', role: 'Monarhul care a promulgat constituţia' },
            { name: 'Ion I. C. Brătianu', role: 'Liderul PNL şi prim-ministru, principalul arhitect politic' }
        ],
        impact: 'Constituția din 1923 a pus bazele juridice ale României interbelice, consacrând principii democratice avansate, dar a permis Regelui să numească prim-ministrul, care ulterior organiza alegerile, un mecanism ce a inversat logica democratică și a fost exploatat de Regele Carol al II-lea pentru a instaura propria dictatură.'
    },
    {
        type: 'minor',
        year: 1927,
        title: 'Înfiinţarea Legiunii Arhanghelului Mihail',
        lat: 47.1585,
        lng: 27.6014,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Corneliu_Zelea_Codreanu_propaganda.jpg',
        description: 'Corneliu Zelea Codreanu înființează la Iași Legiunea Arhanghelului Mihail, o mişcare ultranaționalistă, fascistă şi antisemită, care va deveni cunoscută sub numele de Garda de Fier.',
        context: 'Societatea românească de după Primul Război Mondial era marcată de instabilitate economică, corupție politică endemică și un sentiment de criză spirituală. Legiunea s-a prezentat ca o alternativă pură, o mişcare de "renaştere naţională şi creștină", atrăgând în special tineretul frustrat.',
        figures: [
            { name: 'Corneliu Zelea Codreanu', role: 'Fondatorul şi liderul carismatic ("Căpitanul")' }
        ],
        impact: 'Apariția Gărzii de Fier a introdus un nivel de violenţă politică (asasinatul politic) şi fanatism ideologic fără precedent în România, destabilizând profund viața politică și contribuind la erodarea democrației, culminând cu instaurarea dictaturii regale în 1938.'
    },
    {
        type: 'minor',
        year: 1929,
        title: 'Crahul de pe Wall Street',
        lat: 40.7069,
        lng: -74.0113,
        imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop',
        description: 'O prăbuşire catastrofală a bursei de valori din New York, care a şters miliarde de dolari din valoarea acțiunilor şi a aruncat Statele Unite și lumea într-o criză economică fără precedent, cunoscută ca Marea Depresiune.',
        context: 'Anii \'20, cunoscuți ca "Roaring Twenties", au fost o perioadă de speculații financiare intense şi necontrolate, alimentate de credit ieftin. Această bulă speculativă a dus prețurile acțiunilor la niveluri nesustenabile, pregătind terenul pentru un colaps inevitabil.',
        figures: [
            { name: 'Herbert Hoover', role: 'Preşedintele SUA în timpul crahului' }
        ],
        impact: 'Criza s-a extins rapid la nivel global prin intermediul legăturilor financiare, ducând la colaps economic, şomaj masiv şi sărăcie. Această instabilitate a discreditat democraţia şi capitalismul, alimentând direct ascensiunea regimurilor totalitare în Germania și Japonia.'
    },
    {
        type: 'major',
        year: 1931,
        title: 'Incidentul Mukden',
        lat: 41.8057,
        lng: 123.4315,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mukden_incident_aftermath.jpg/800px-Mukden_incident_aftermath.jpg',
        description: 'O operaţiune sub steag fals orchestrată de ofiţeri ai armatei japoneze, care au detonat o mică încărcătură explozibilă lângă o cale ferată japoneză din Manciuria. Incidentul minor a fost folosit ca pretext pentru a invada şi ocupa întreaga regiune.',
        context: 'Japonia imperialistă, în plină expansiune industrială și militaristă, căuta cu disperare resurse naturale (cărbune, fier) şi pieţe de desfacere, considerând Manciuria, bogată în resurse, esențială pentru interesele sale strategice și economice.',
        figures: [
            { name: 'Kanji Ishiwara', role: 'Ofiţer japonez, principalul arhitect al complotului' },
            { name: 'Chiang Kai-shek', role: 'Liderul Republicii Chineze' }
        ],
        impact: 'Japonia a cucerit Manciuria și a creat statul-marionetă Manchukuo. Răspunsul slab al Ligii Națiunilor, care s-a limitat la o condamnare verbală, a demonstrat totala sa ineficiență și a încurajat alte puteri agresoare, precum Italia și Germania, să urmeze exemple similare.'
    },
    {
        type: 'major',
        year: 1933,
        title: 'Hitler devine Cancelar',
        lat: 52.5163,
        lng: 13.3777,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hitler_und_Hindenburg_am_Tag_von_Potsdam_21._M%C3%A4rz_1933.jpg/800px-Hitler_und_Hindenburg_am_Tag_von_Potsdam_21._M%C3%A4rz_1933.jpg',
        description: 'Adolf Hitler, liderul Partidului Nazist, este numit legal Cancelar al Germaniei de către Preşedintele Paul von Hindenburg. Numirea a fost rezultatul unui compromis politic al elitelor conservatoare, care credeau în mod eronat că îl pot controla.',
        context: 'Republica de la Weimar era profund slăbită de instabilitatea politică cronică şi de efectele devastatoare ale Marii Crize Economice. Exploatând furia populară și nemulțumirea față de Tratatul de la Versailles, Partidul Nazist a devenit cea mai mare forță politică din Reichstag.',
        figures: [
            { name: 'Adolf Hitler', role: 'Liderul Partidului Nazist (NSDAP)' },
            { name: 'Paul von Hindenburg', role: 'Preşedintele Germaniei' },
            { name: 'Franz von Papen', role: 'Fost cancelar, a jucat un rol cheie în convingerea lui Hindenburg' }
        ],
        impact: 'Odată ajuns la putere, Hitler a acţionat rapid pentru a distruge democrația, folosind Incendierea Reichstagului ca pretext pentru a suspenda libertățile civile și a trece Legea de Abilitare, care i-a acordat puteri dictatoriale, transformând Germania într-un stat totalitar.'
    },
    {
        type: 'atrocity',
        year: 1933,
        title: 'Deschiderea Lagărului Dachau',
        lat: 48.2700,
        lng: 11.4675,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dachau_gate.jpg/800px-Dachau_gate.jpg',
        description: 'Primul lagăr de concentrare nazist este deschis lângă München, inițial pentru a încarcera oponenţii politici ai regimului (comuniști, social-democrați). A devenit prototipul pentru întregul sistem de lagăre naziste.',
        context: 'După numirea sa ca şi cancelar, Hitler a avut nevoie de un instrument pentru a teroriza şi elimina orice opoziție politică. Lagărele au fost create ca spații extrajudiciare unde inamicii regimului puteau fi închişi pe termen nelimitat, fără proces, și supuși muncii forțate și torturii.',
        figures: [
            { name: 'Heinrich Himmler', role: 'Şeful SS, a anunțat deschiderea lagărului' },
            { name: 'Theodor Eicke', role: 'Primul comandant, a creat sistemul de brutalitate organizată' }
        ],
        impact: 'Dachau a servit ca model de organizare, cruzime şi dehumanizare pentru toate lagărele ulterioare, inclusiv Auschwitz. A fost un instrument esențial în consolidarea puterii naziste și primul pas în crearea "universului concentraționar".'
    },
    {
        type: 'atrocity',
        year: 1934,
        title: 'Noaptea Cuțitelor Lungi',
        lat: 52.5163,
        lng: 13.3777,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bundesarchiv_Bild_102-16196%2C_Berlin%2C_Leibstandarte_SS_Adolf_Hitler.jpg/800px-Bundesarchiv_Bild_102-16196%2C_Berlin%2C_Leibstandarte_SS_Adolf_Hitler.jpg',
        description: 'O epurare politică sângeroasă în care Hitler a ordonat SS-ului să execute sute de oponenți politici și rivali interni pentru a-şi consolida puterea. Principala ţintă a fost conducerea SA (Batalioanele de Asalt) şi liderul acesteia, Ernst Röhm.',
        context: 'Ernst Röhm şi facţiunea radicală a SA, care număra milioane de membri, doreau o "a doua revoluţie" care să preia controlul asupra armatei (Reichswehr), amenințând astfel atât elita militară tradițională, cât și puterea absolută a lui Hitler.',
        figures: [
            { name: 'Adolf Hitler', role: 'A ordonat şi supervizat epurarea' },
            { name: 'Ernst Röhm', role: 'Liderul SA, asasinat' },
            { name: 'Heinrich Himmler & Hermann Göring', role: 'Au orchestrat epurarea' }
        ],
        impact: 'Epurarea a eliminat orice ameninţare internă la adresa puterii lui Hitler, a asigurat loialitatea armatei (care a depus un jurământ personal lui Hitler după moartea lui Hindenburg) și a marcat ascensiunea SS-ului ca principal instrument de teroare al regimului.'
    },
    {
        type: 'minor',
        year: 1934,
        title: 'Incidentul de la Walwal',
        lat: 8.0667,
        lng: 45.4167,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Italo-Ethiopian_War_map_1935.svg',
        description: 'O ciocnire la un punct de frontieră disputat între trupele italiene și etiopiene în Ogaden. Italia a folosit acest incident ca pretext pentru a cere scuze și compensații, escaladând tensiunile și pregătind invazia din anul următor.',
        context: 'Italia fascistă, sub conducerea lui Mussolini, căuta să-și extindă imperiul colonial și să răzbune înfrângerea de la Adwa din 1896. Orice incident de frontieră putea fi exploatat pentru a justifica o agresiune.',
        figures: [
            { name: 'Benito Mussolini', role: 'Liderul Italiei Fasciste' },
            { name: 'Haile Selassie', role: 'Împăratul Etiopiei, a apelat la Liga Națiunilor' }
        ],
        impact: 'Eșecul Ligii Națiunilor de a media eficient disputa a demonstrat din nou slăbiciunea sa. Incidentul a oferit Italiei pretextul diplomatic necesar pentru a-și masa trupele și a lansa invazia pe scară largă a Etiopiei în 1935.'
    },
    {
        type: 'minor',
        year: 1935,
        title: 'Plebiscitul din Saarland',
        lat: 49.3833,
        lng: 6.9667,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Saar_Plebiscite_Propaganda_Poster_1934.jpg/800px-Saar_Plebiscite_Propaganda_Poster_1934.jpg',
        description: 'Locuitorii din regiunea Saar, administrată de Liga Națiunilor după WWI, votează cu o majoritate de peste 90% pentru reunificarea cu Germania. Acesta a fost un succes uriaș de propagandă pentru regimul nazist.',
        context: 'Conform Tratatului de la Versailles, regiunea bogată în cărbune Saar a fost plasată sub administrarea Ligii Națiunilor pentru 15 ani, după care locuitorii săi puteau decide viitorul prin plebiscit. Regimul nazist a desfășurat o campanie intensă de propagandă pentru a asigura rezultatul.',
        figures: [
            { name: 'Adolf Hitler', role: 'Liderul Germaniei' },
            { name: 'Joseph Goebbels', role: 'Ministrul Propagandei Naziste' }
        ],
        impact: 'A fost prima realipire teritorială pașnică a lui Hitler, consolidându-i imaginea pe plan intern și extern. A demonstrat eficiența propagandei naziste și a încurajat Germania să continue politica revizionistă împotriva ordinii de la Versailles.'
    },
    {
        type: 'atrocity',
        year: 1935,
        title: 'Legile de la Nürnberg',
        lat: 49.4539,
        lng: 11.0775,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nuremberg_laws_chart.jpg/800px-Nuremberg_laws_chart.jpg',
        description: 'La mitingul anual al Partidului Nazist de la Nürnberg, sunt adoptate două legi antisemite care instituționalizează persecuția evreilor, privându-i de cetățenie germană și interzicând căsătoriile sau relațiile între evrei și "arieni".',
        context: 'Aceste legi au fost punctul culminant al unei politici antisemite tot mai agresive de la preluarea puterii de către naziști. Ele au transformat ideologia rasială nazistă într-o realitate juridică, definind cine este evreu pe baza arborelui genealogic.',
        figures: [
            { name: 'Adolf Hitler', role: 'A anunțat legile' },
            { name: 'Wilhelm Frick', role: 'Ministrul de Interne, responsabil pentru redactare' }
        ],
        impact: 'Legile de la Nürnberg au creat fundamentul legal pentru excluderea totală a evreilor din societatea germană. Au separat legal evreii de restul populației, au facilitat confiscarea proprietăților lor și au fost un pas esențial pe calea către Holocaust.'
    },
    {
        type: 'major',
        year: 1935,
        title: 'Invazia Italiană a Etiopiei',
        lat: 9.0250,
        lng: 38.7469,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethiopian_soldiers%2C_ca._1935.jpg/800px-Ethiopian_soldiers%2C_ca._1935.jpg',
        description: 'Forțele italiene invadează Etiopia (cunoscută și ca Abisinia), într-un act de agresiune colonială care a expus încă o dată slăbiciunea Ligii Națiunilor.',
        context: 'Benito Mussolini dorea să creeze un nou Imperiu Roman și să răzbune înfrângerea umilitoare a Italiei în Etiopia la Adwa în 1896. Incidentul de la Walwal din 1934 a fost folosit ca pretext pentru a justifica invazia.',
        figures: [
            { name: 'Benito Mussolini', role: 'Liderul Italiei Fasciste' },
            { name: 'Haile Selassie', role: 'Împăratul Etiopiei' }
        ],
        impact: 'Liga Națiunilor a impus sancțiuni economice ineficiente Italiei, care au fost rapid abandonate. Succesul invaziei (care a inclus folosirea armelor chimice) a apropiat Italia de Germania Nazistă și a discreditat și mai mult securitatea colectivă.'
    },
    {
        type: 'major',
        year: 1936,
        title: 'Remilitarizarea Renaniei',
        lat: 50.9375,
        lng: 6.9603,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/German_troops_march_into_the_Rhineland_-_1936.jpg/800px-German_troops_march_into_the_Rhineland_-_1936.jpg',
        description: 'Trupele germane intră în zona demilitarizată a Renaniei, încălcând în mod direct şi flagrant Tratatul de la Versailles şi Tratatele de la Locarno. A fost primul pariu major al lui Hitler pe scena internaţională.',
        context: 'Hitler a folosit ratificarea pactului franco-sovietic ca pretext, susţinând că acesta amenință securitatea Germaniei. El a mizat corect pe faptul că Franța și Marea Britanie, paralizate de opinia publică pacifistă și de probleme interne, nu vor risca un război.',
        figures: [
            { name: 'Adolf Hitler', role: 'A ordonat personal remilitarizarea' }
        ],
        impact: 'Succesul a fost o victorie politică imensă pentru Hitler, crescându-i popularitatea în Germania. A schimbat dramatic echilibrul strategic, permițând Germaniei să construiască Linia Siegfried. Acesta a fost, după cum a recunoscut Hitler, ultimul moment în care ar fi putut fi oprit fără un război major.'
    },
    {
        type: 'major',
        year: 1936,
        title: 'Începutul Războiului Civil Spaniol',
        lat: 40.4168,
        lng: -3.7038,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Spanish_Civil_War_montage.jpg/800px-Spanish_Civil_War_montage.jpg',
        description: 'O lovitură de stat militară a naționaliștilor conduși de Generalul Francisco Franco împotriva Republicii Spaniole declanșează un conflict sângeros ce va dura aproape trei ani și va deveni un teren de testare pentru armele și tacticile Axei și ale Uniunii Sovietice.',
        context: 'Spania era profund divizată între forțele de stânga (republicani, socialiști, comuniști, anarhiști) și cele de dreapta (naționaliști, monarhiști, fasciști). Alegerea unui guvern de Front Popular în 1936 a polarizat și mai mult societatea, ducând la lovitura de stat.',
        figures: [
            { name: 'Francisco Franco', role: 'Liderul facțiunii Naționaliste' },
            { name: 'Manuel Azaña', role: 'Președintele Republicii Spaniole' }
        ],
        impact: 'Conflictul a servit ca un "preambul" al WWII. Germania și Italia au sprijinit activ naționaliștii, testând noi avioane (ex. bombardarea Guernicăi), în timp ce Uniunea Sovietică a sprijinit Republica. Victoria lui Franco a instaurat o dictatură care a durat până în 1975.'
    },
    {
        type: 'major',
        year: 1936,
        title: 'Pactul Anti-Comintern',
        lat: 52.5200,
        lng: 13.4050,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bundesarchiv_Bild_183-H28598%2C_Berlin%2C_Unterzeichnung_des_Antikominternpaktes.jpg/800px-Bundesarchiv_Bild_183-H28598%2C_Berlin%2C_Unterzeichnung_des_Antikominternpaktes.jpg',
        description: 'Germania Nazistă și Japonia Imperială semnează un pact direcționat împotriva Internaționalei Comuniste (Comintern), formând nucleul viitoarei alianțe a Axei. Italia se va alătura în 1937.',
        context: 'Atât Germania, cât și Japonia, vedeau Uniunea Sovietică și comunismul ca pe o amenințare ideologică și geopolitică majoră. Pactul a fost o formalizare a ostilității lor comune și un prim pas spre o alianță militară mai largă.',
        figures: [
            { name: 'Joachim von Ribbentrop', role: 'Reprezentantul Germaniei' },
            { name: 'Kintomo Mushanokōji', role: 'Ambasadorul Japoniei în Germania' }
        ],
        impact: 'Deși aparent defensiv și ideologic, pactul a aliniat două dintre cele mai agresive puteri expansioniste ale vremii. A creat o axă Berlin-Tokyo care a amenințat stabilitatea atât în Europa, cât și în Asia, și a pus bazele Pactului Tripartit din 1940.'
    },
    {
        type: 'atrocity',
        year: 1937,
        title: 'Bombardarea Guernicăi',
        lat: 43.3174,
        lng: -2.6725,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bundesarchiv_Bild_183-H25224%2C_Guernica%2C_zerst%C3%B6rte_H%C3%A4user.jpg/800px-Bundesarchiv_Bild_183-H25224%2C_Guernica%2C_zerst%C3%B6rte_H%C3%A4user.jpg',
        description: 'Un bombardament aerian devastator asupra orașului basc Guernica de către Legiunea Condor a Germaniei naziste, la cererea naționaliștilor spanioli. A fost unul dintre primele bombardamente de teroare împotriva unei populații civile lipsite de apărare.',
        context: 'În timpul Războiului Civil Spaniol, Legiunea Condor a oferit sprijin aerian forțelor lui Franco. Atacul asupra Guernicăi, un centru cultural basc, a avut loc într-o zi de târg, pentru a maximiza victimele civile și a teroriza populația.',
        figures: [
            { name: 'Wolfram von Richthofen', role: 'Comandantul Legiunii Condor' },
            { name: 'Francisco Franco', role: 'Liderul naționalist care a aprobat atacul' }
        ],
        impact: 'Atacul a șocat opinia publică internațională și a fost imortalizat în celebra pictură a lui Pablo Picasso. A demonstrat noua și terifianta putere a aviației militare și a prefigurat bombardamentele strategice pe scară largă din Al Doilea Război Mondial.'
    },
    {
        type: 'major',
        year: 1937,
        title: 'Al Doilea Război Sino-Japonez',
        lat: 39.9042,
        lng: 116.4074,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Second_Sino-Japanese_War_montage.jpg/800px-Second_Sino-Japanese_War_montage.jpg',
        description: 'O ciocnire între trupele japoneze și chineze la Podul Marco Polo, lângă Beijing, duce la o invazie pe scară largă a Chinei de către Japonia, marcând începutul războiului în Asia, considerat de mulți istorici adevăratul început al WWII.',
        context: 'După ocuparea Manciuriei în 1931, Japonia a continuat să-și extindă influența în nordul Chinei. Incidentul de la Podul Marco Polo a fost pretextul folosit de armata japoneză pentru a lansa o campanie de cucerire totală.',
        figures: [
            { name: 'Chiang Kai-shek', role: 'Liderul naționalist al Chinei' },
            { name: 'Prințul Fumimaro Konoe', role: 'Prim-ministrul Japoniei' }
        ],
        impact: 'Războiul a fost extrem de brutal și a dus la zeci de milioane de morți. A forțat o alianță incomodă între naționaliștii chinezi și comuniști împotriva Japoniei și a consumat resurse japoneze masive, influențând deciziile strategice ulterioare, inclusiv atacul de la Pearl Harbor.'
    },
    {
        type: 'atrocity',
        year: 1937,
        title: 'Masacrul de la Nanking',
        lat: 32.0603,
        lng: 118.7969,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Nanking_refugees_in_1937.jpg/800px-Nanking_refugees_in_1937.jpg',
        description: 'O perioadă de șase săptămâni de atrocități în masă comise de trupele japoneze după capturarea orașului Nanking, capitala de atunci a Chinei. Evenimentele includ execuții în masă, violuri pe scară largă, jafuri și incendieri.',
        context: 'După o luptă acerbă pentru Shanghai, trupele japoneze au avansat spre Nanking. Disciplina s-a prăbușit, iar soldații, încurajați de comandanți, au dezlănțuit o campanie de teroare împotriva prizonierilor de război și a populației civile.',
        figures: [
            { name: 'Generalul Iwane Matsui', role: 'Comandantul forțelor japoneze, executat ulterior pentru crime de război' },
            { name: 'John Rabe', role: 'Om de afaceri german (nazist) care a creat o zonă de siguranță și a salvat mii de chinezi' }
        ],
        impact: 'Se estimează că între 200.000 și 300.000 de chinezi au fost uciși. Masacrul a devenit un simbol al brutalității agresiunii japoneze și continuă să fie un punct sensibil în relațiile sino-japoneze.'
    },
    {
        type: 'major',
        year: 1938,
        title: 'Instaurarea dictaturii regale a lui Carol al II-lea',
        lat: 44.4396,
        lng: 26.0963,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Regele_Carol_al_II-lea.jpg',
        description: 'Printr-o lovitură de stat, Regele Carol al II-lea suspendă Constituția din 1923, dizolvă partidele politice şi instaurează un regim de autoritate personală, punând capăt democraţiei parlamentare interbelice din România.',
        context: 'Scena politică românească la sfârşitul anilor \'30 era extrem de fragmentată și violentă. Ascensiunea Gărzii de Fier, care a obținut un scor mare în alegeri, reprezenta o amenințare directă. Ambițios şi autoritar, Carol al II-lea a exploatat această criză pentru a-şi atinge un obiectiv mai vechi: concentrarea puterii în propriile mâini.',
        figures: [
            { name: 'Regele Carol al II-lea', role: 'Arhitectul şi beneficiarul principal al dictaturii' },
            { name: 'Armand Călinescu', role: 'Omul forte al regimului, ministru de interne' },
            { name: 'Patriarhul Miron Cristea', role: 'Prim-ministru, a oferit o faţadă de legitimitate' }
        ],
        impact: 'A transformat fundamental structura statului, înlocuind constituția democratică cu una autoritară. Partidele au fost dizolvate și înlocuite cu un partid unic, Frontul Renaşterii Naţionale. Deși a suprimat temporar Garda de Fier (asasinându-l pe Codreanu), regimul nu a avut sprijin popular real şi s-a prăbuşit în 1940.'
    },
    {
        type: 'major',
        year: 1938,
        title: 'Anschluss (Anexarea Austriei)',
        lat: 48.2082,
        lng: 16.3738,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bundesarchiv_Bild_183-1987-0922-500%2C_Wien%2C_Einmarsch_deutscher_Truppen.jpg/800px-Bundesarchiv_Bild_183-1987-0922-500%2C_Wien%2C_Einmarsch_deutscher_Truppen.jpg',
        description: 'Germania Nazistă anexează Austria într-o uniune politică (Anschluss), realizând visul lui Hitler de a uni toate popoarele germanofone. Anexarea a fost realizată prin presiune politică, amenințarea cu invazia militară și a fost primită cu entuziasm de mulți austrieci.',
        context: 'Hitler, austriac de origine, considera unirea celor două naţiuni un pas esențial în crearea unei "Germanii Mari". Exploatând mişcarea nazistă locală, el l-a forțat pe cancelarul austriac Kurt Schuschnigg să demisioneze și să anuleze un referendum privind independența.',
        figures: [
            { name: 'Adolf Hitler', role: 'A orchestrat anexarea' },
            { name: 'Kurt Schuschnigg', role: 'Cancelarul Austriei, forţat să demisioneze' },
            { name: 'Arthur Seyss-Inquart', role: 'Nazist austriac, instalat cancelar pentru a legitima anexarea' }
        ],
        impact: 'Anexarea a întărit masiv poziția strategică şi resursele (umane, industriale, financiare) ale Germaniei. Pasivitatea puterilor occidentale, care au protestat doar formal, l-a încurajat pe Hitler să îşi continue agenda expansionistă, următoarea țintă fiind Cehoslovacia.'
    },
    {
        type: 'minor',
        year: 1938,
        title: 'Conferința de la Évian',
        lat: 46.4015,
        lng: 6.5909,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C3%89vian_Conference.jpg/800px-%C3%89vian_Conference.jpg',
        description: 'O conferință internațională convocată de președintele american Franklin D. Roosevelt pentru a discuta criza refugiaților evrei din Germania și Austria. Eșecul majorității țărilor de a-și deschide granițele a avut consecințe tragice.',
        context: 'După Anschluss, persecuția evreilor s-a intensificat, creând un număr mare de refugiați. Roosevelt a convocat conferința pentru a găsi o soluție colectivă, dar majoritatea delegaților și-au exprimat simpatia, invocând apoi criza economică pentru a refuza primirea refugiaților.',
        figures: [
            { name: 'Franklin D. Roosevelt', role: 'Inițiatorul conferinței' },
            { name: 'Myron C. Taylor', role: 'Reprezentantul SUA' }
        ],
        impact: 'Eșecul conferinței a trimis un semnal clar lui Hitler: lumea nu dorea evreii. Propaganda nazistă a exploatat acest eșec, susținând că nimeni nu îi va apăra. A închis căile de scăpare pentru mii de evrei și a întărit determinarea naziștilor de a trece la soluții mai "radicale".'
    },
    {
        type: 'major',
        year: 1938,
        title: 'Acordul de la München',
        lat: 48.1371,
        lng: 11.5754,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bundesarchiv_Bild_183-R69173%2C_M%C3%BCnchener_Abkommen%2C_Unterzeichnung.jpg/800px-Bundesarchiv_Bild_183-R69173%2C_M%C3%BCnchener_Abkommen%2C_Unterzeichnung.jpg',
        description: 'Un acord încheiat între Germania, Marea Britanie, Franţa şi Italia, care a permis Germaniei să anexeze Regiunea Sudetă a Cehoslovaciei, locuită majoritar de germani. Acordul este considerat apogeul politicii de conciliere ("appeasement").',
        context: 'Hitler a fabricat o criză, pretinzând că etnicii germani din Sudeți sunt persecutați și ameninţând cu războiul. Liderii britanici şi francezi, disperați să evite un conflict pentru care nu erau pregătiți, au sacrificat integritatea teritorială a Cehoslovaciei, care nu a fost invitată la conferință.',
        figures: [
            { name: 'Adolf Hitler', role: 'Cancelarul Germaniei' },
            { name: 'Neville Chamberlain', role: 'Prim-ministrul Marii Britanii' },
            { name: 'Édouard Daladier', role: 'Prim-ministrul Franţei' },
            { name: 'Benito Mussolini', role: 'Liderul Italiei, a jucat rol de mediator' }
        ],
        impact: 'Departe de a asigura "pacea pentru timpurile noastre", acordul l-a convins pe Hitler că democraţiile occidentale sunt slabe și indecise. A distrus credibilitatea alianțelor franceze în Europa de Est şi a lăsat Cehoslovacia fără apărare, fiind complet ocupată în martie 1939.'
    },
    {
        type: 'minor',
        year: 1938,
        title: 'Primul Dictat de la Viena',
        lat: 48.2082,
        lng: 16.3738,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/First_Vienna_Award_ethnic_map.svg/800px-First_Vienna_Award_ethnic_map.svg.png',
        description: 'Un arbitraj teritorial condus de Germania și Italia, care a forțat Cehoslovacia, deja slăbită după Acordul de la München, să cedeze Ungariei sudul Slovaciei și Rutenia Subcarpatică, teritorii locuite majoritar de maghiari.',
        context: 'După succesul de la München, Ungaria, condusă de regentul Miklós Horthy, a revendicat teritorii de la Cehoslovacia. Germania și Italia au mediat pentru a recompensa Ungaria pentru alinierea sa la Axă și pentru a continua dezmembrarea Cehoslovaciei.',
        figures: [
            { name: 'Joachim von Ribbentrop', role: 'Ministrul de Externe german' },
            { name: 'Galeazzo Ciano', role: 'Ministrul de Externe italian' },
            { name: 'Miklós Horthy', role: 'Regentul Ungariei' }
        ],
        impact: 'A continuat procesul de dezintegrare a Cehoslovaciei, demonstrând că revizionismul teritorial era încurajat de Axă. A întărit alianța dintre Ungaria și Germania și a prefigurat al doilea Dictat de la Viena, care va viza România în 1940.'
    },
    {
        type: 'atrocity',
        year: 1938,
        title: 'Kristallnacht (Noaptea de Cristal)',
        lat: 50.1109,
        lng: 8.6821,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Synagogue_of_Siegen_burned_down_on_Kristallnacht_-_1938.jpg/800px-Synagogue_of_Siegen_burned_down_on_Kristallnacht_-_1938.jpg',
        description: 'Un pogrom masiv și organizat împotriva evreilor din Germania Nazistă și Austria. În noaptea de 9-10 noiembrie, sinagogi, afaceri și case au fost arse și distruse, iar aproximativ 30.000 de bărbați evrei au fost arestați și trimiși în lagăre de concentrare.',
        context: 'Pretextul oficial a fost asasinarea diplomatului german Ernst vom Rath la Paris de către Herschel Grynszpan, un tânăr evreu polonez. În realitate, a fost o explozie de violență orchestrată de ministrul propagandei, Joseph Goebbels, și executată de trupele SA și Tineretul Hitlerist.',
        figures: [
            { name: 'Joseph Goebbels', role: 'A instigat pogromul printr-un discurs înflăcărat' },
            { name: 'Reinhard Heydrich', role: 'A coordonat acțiunile poliției și arestările' }
        ],
        impact: 'Kristallnacht a marcat o escaladare dramatică a persecuției naziste, trecând de la discriminare legislativă la violență fizică pe scară largă și încarcerare în masă. A accelerat emigrarea forțată a evreilor și a prefigurat violența genocidară a Holocaustului.'
    }
],

   '1939': [
    {
        type: 'major',
        year: 1939,
        title: 'Pactul de Oțel',
        lat: 52.5200,
        lng: 13.4050,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Pact_of_Steel_signing.jpg',
        description: 'Pe 22 mai, Germania Nazistă și Italia Fascistă semnează la Berlin "Pactul de Oțel", o alianță militară și politică care formalizează legăturile dintre cele două regimuri totalitare. Pactul obliga oricare dintre părți să o ajute pe cealaltă în cazul unui război.',
        context: 'După ce ambele țări au încălcat în mod repetat ordinea internațională, această alianță a fost menită să intimideze democrațiile occidentale. Mussolini a fost inițial reticent, dar a fost convins de succesele diplomatice ale lui Hitler, creând o axă formală Berlin-Roma.',
        figures: [
            { name: 'Galeazzo Ciano', role: 'Ministrul de Externe al Italiei' },
            { name: 'Joachim von Ribbentrop', role: 'Ministrul de Externe al Germaniei' }
        ],
        impact: 'A solidificat alianța Axei și a eliminat orice îndoială cu privire la intențiile agresive comune ale celor două dictaturi. A fost un pas diplomatic crucial care a pregătit terenul pentru declanșarea războiului câteva luni mai târziu.'
    },
    {
        type: 'minor',
        year: 1939,
        title: 'Operațiunea Himmler - Gleiwitz',
        lat: 50.3115,
        lng: 18.6761,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bundesarchiv_Bild_183-S55480%2C_Gleiwitz%2C_Sender.jpg/800px-Bundesarchiv_Bild_183-S55480%2C_Gleiwitz%2C_Sender.jpg',
        description: 'Pe 31 august, o serie de incidente sub steag fals înscenate de SS pentru a crea un pretext de agresiune poloneză. Cel mai faimos a fost atacul simulat asupra postului de radio din Gleiwitz, folosit de Hitler pentru a justifica invazia Poloniei.',
        context: 'Hitler avea nevoie de o justificare publică pentru a lansa invazia Poloniei. Operațiunea, planificată de Reinhard Heydrich, a fost concepută pentru a prezenta Germania ca victimă, nu ca agresor, în fața poporului german și a comunității internaționale.',
        figures: [
            { name: 'Reinhard Heydrich', role: 'Planificatorul operațiunii' },
            { name: 'Alfred Naujocks', role: 'Comandantul SS care a condus atacul de la Gleiwitz' }
        ],
        impact: 'A oferit pretextul imediat pentru invazia Poloniei. În discursul său din 1 septembrie, Hitler a invocat aceste "atacuri" de frontieră pentru a-și lansa "contraatacul", începând astfel Al Doilea Război Mondial în Europa.'
    },
    {
        type: 'major',
        year: 1939,
        title: 'Invazia Poloniei (Fall Weiss)',
        lat: 54.4075,
        lng: 18.6708,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bundesarchiv_Bild_183-52033-0016%2C_Polen%2C_K%C3%A4mpfe_in_Gdingen.jpg/800px-Bundesarchiv_Bild_183-52033-0016%2C_Polen%2C_K%C3%A4mpfe_in_Gdingen.jpg',
        description: 'Pe 1 septembrie, Germania lansează o invazie masivă a Poloniei fără o declarație de război, folosind tactica "Blitzkrieg" (război fulger). Acest act de agresiune a marcat începutul celui de-al Doilea Război Mondial în Europa.',
        context: 'Asigurându-şi flancul estic prin Pactul Molotov-Ribbentrop, Hitler a putut să atace fără teama unui război pe două fronturi. A folosit incidentul înscenat de la Gleiwitz ca pretext public pentru invazie.',
        figures: [
            { name: 'Adolf Hitler', role: 'A ordonat invazia' },
            { name: 'Heinz Guderian', role: 'General german, pionier al războiului cu tancuri' },
            { name: 'Edward Rydz-Śmigły', role: 'Mareșal al Poloniei' }
        ],
        impact: 'Pe 3 septembrie, Marea Britanie şi Franţa au declarat război Germaniei, dar nu au oferit un ajutor militar semnificativ (perioada "Războiului Ciudat"). Invazia a dus la înfrângerea şi împărțirea rapidă a Poloniei între Germania şi Uniunea Sovietică.'
    },
    {
        type: 'minor',
        year: 1939,
        title: 'Ofensiva din Saar',
        lat: 49.2333,
        lng: 7.0000,
        imageUrl: 'images/Ofensiva din Saar.png',
        description: 'Între 7-16 septembrie, într-o încercare simbolică de a ajuta Polonia, armata franceză avansează aproximativ 8 km în teritoriul german Saarland. Ofensiva este oprită rapid, iar forțele se retrag în spatele Liniei Maginot.',
        context: 'Conform alianței militare franco-poloneze, Franța era obligată să lanseze o ofensivă majoră la 15 zile după mobilizare. Ofensiva din Saar a fost o acțiune limitată și lipsită de convingere, reflectând strategia defensivă a Comandamentului Francez.',
        figures: [
            { name: 'Maurice Gamelin', role: 'Comandantul Suprem Francez' }
        ],
        impact: 'Impactul militar a fost nul. A demonstrat Poloniei că nu poate conta pe un ajutor real din partea aliaților săi occidentali. L-a convins pe Hitler că Franța și Marea Britanie nu erau pregătite pentru un război ofensiv, permițându-i să se concentreze pe zdrobirea Poloniei.'
    },
    {
        type: 'major',
        year: 1939,
        title: 'Invazia Sovietică a Poloniei',
        lat: 52.0976,
        lng: 23.7341,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Soviet_and_German_soldiers_in_Poland_1939.jpg/800px-Soviet_and_German_soldiers_in_Poland_1939.jpg',
        description: 'Pe 17 septembrie, conform protocolului secret al Pactului Molotov-Ribbentrop, Armata Roșie invadează Polonia dinspre est, întâmpinând o rezistență redusă și pecetluind soarta națiunii poloneze.',
        context: 'Guvernul sovietic a pretins că statul polonez a încetat să mai existe și că intervenția era necesară pentru a proteja populațiile ucrainene și belaruse. În realitate, a fost o agresiune coordonată cu Germania Nazistă.',
        figures: [
            { name: 'Iosif Stalin', role: 'Liderul URSS' },
            { name: 'Semion Timoșenko', role: 'Comandantul frontului ucrainean sovietic' }
        ],
        impact: 'Invazia a grăbit înfrângerea Poloniei și a dus la masacrul de la Katyn, unde mii de ofițeri polonezi au fost executați de NKVD. A confirmat alinierea temporară a celor două regimuri totalitare.'
    },
    {
        type: 'major',
        year: 1939,
        title: 'Asasinarea lui Armand Călinescu',
        lat: 44.4410,
        lng: 26.0881,
        imageUrl: 'images/Asasinarea lui Armand Călinescu.jpg',
        description: 'Pe 21 septembrie, prim-ministrul României, Armand Călinescu, este asasinat la București de un comando al Gărzii de Fier. Călinescu era un adversar ferm al Germaniei Naziste și al mișcării legionare, susținând o politică de neutralitate pro-aliată.',
        context: 'Asasinatul a fost un act de răzbunare pentru executarea liderului legionar Corneliu Zelea Codreanu în 1938 și o încercare de a destabiliza statul. Acțiunea a fost susținută de serviciile secrete germane, care doreau înlăturarea unui obstacol din calea influenței lor în România.',
        figures: [
            { name: 'Armand Călinescu', role: 'Prim-ministrul României' },
            { name: 'Horia Sima', role: 'Noul lider al Gărzii de Fier, a orchestrat asasinatul din exil' }
        ],
        impact: 'Asasinatul a declanșat o represiune brutală din partea statului: asasinii au fost executați public la locul crimei, iar sute de alți legionari au fost uciși în lagăre. Evenimentul a adâncit criza politică din România și a demonstrat violența extremă a Gărzii de Fier.'
    },
    {
        type: 'major',
        year: 1939,
        title: 'Capitularea Varșoviei',
        lat: 52.2297,
        lng: 21.0122,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Varsovie_bombardement_1939.jpg/800px-Varsovie_bombardement_1939.jpg',
        description: 'Pe 27 septembrie, după aproape trei săptămâni de asediu și bombardamente aeriene și de artilerie devastatoare, care au ucis zeci de mii de civili, garnizoana Varșoviei se predă forțelor germane.',
        context: 'Varșovia a fost apărată cu înverșunare de armata poloneză și de voluntari civili. Luftwaffe a efectuat bombardamente de teroare pentru a frânge voința de a lupta a apărătorilor și a populației.',
        figures: [
            { name: 'Juliusz Rómmel', role: 'Comandantul polonez al Armatei Varșovia' },
            { name: 'Johannes Blaskowitz', role: 'Generalul german care a acceptat capitularea' }
        ],
        impact: 'Căderea capitalei a fost o lovitură morală devastatoare pentru Polonia. A marcat începutul unei ocupații brutale care a durat peste cinci ani.'
    },
    {
        type: 'major',
        year: 1939,
        title: 'Sfârșitul Campaniei din Polonia',
        lat: 51.6394,
        lng: 22.4419,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Polish_soldiers_in_1939.jpg/800px-Polish_soldiers_in_1939.jpg',
        description: 'Pe 6 octombrie, după Bătălia de la Kock, ultimele unități operaționale poloneze capitulează. Polonia este complet ocupată și împărțită între Germania și Uniunea Sovietică, conform prevederilor Pactului Molotov-Ribbentrop.',
        context: 'Deși campania organizată s-a încheiat, rezistența a continuat prin mișcări de partizani și prin formarea unui guvern în exil și a unei armate poloneze care a luptat alături de Aliați pe tot parcursul războiului.',
        figures: [
            { name: 'Franciszek Kleeberg', role: 'General polonez, a condus ultima bătălie' }
        ],
        impact: 'A demonstrat eficiența teribilă a tacticii Blitzkrieg. A eliminat un front, permițând Germaniei să-și îndrepte atenția spre vest. A început o perioadă de ocupație extrem de brutală, în special pentru populația civilă poloneză și evreiască.'
    },
    {
        type: 'atrocity',
        year: 1939,
        title: 'Înființarea primului ghetou',
        lat: 51.4071,
        lng: 19.6953,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Piotrkow_Trybunalski_ghetto_memorial.jpg/800px-Piotrkow_Trybunalski_ghetto_memorial.jpg',
        description: 'Pe 8 octombrie, la Piotrków Trybunalski, autoritățile germane de ocupație stabilesc primul ghetou evreiesc din Polonia, inițiind politica de segregare forțată a populației evreiești.',
        context: 'Ghetourile erau parte a politicii naziste de a izola, controla și exploata evreii. Ele serveau ca zone de concentrare, unde evreii erau înghesuiți în condiții inumane, înfometați și folosiți pentru muncă forțată, înainte de deportarea finală spre lagărele de exterminare.',
        figures: [
            { name: 'Hans Frank', role: 'Guvernatorul General al Poloniei ocupate' }
        ],
        impact: 'A fost modelul pentru crearea a sute de alte ghetouri în Europa de Est. A marcat un pas crucial în procesul de dezumanizare și a facilitat logistic Holocaustul, ducând la moartea a sute de mii de oameni din cauza bolilor și a înfometării, chiar înainte de începerea exterminării în masă.'
    },
    {
        type: 'minor',
        year: 1939,
        title: 'Scufundarea HMS Royal Oak',
        lat: 58.9850,
        lng: -2.9340,
        imageUrl: 'images/Scufundarea HMS Royal Oak.png',
        description: 'Pe 14 octombrie, submarinul german U-47, comandat de Günther Prien, pătrunde în baza navală britanică de la Scapa Flow și scufundă cuirasatul HMS Royal Oak, ucigând peste 800 de membri ai echipajului.',
        context: 'Scapa Flow era considerată cea mai sigură bază a Marinei Regale Britanice. Prien a reușit să navigheze printr-un canal îngust și să evite plasele anti-submarin pentru a lansa un atac surpriză în inima flotei britanice.',
        figures: [
            { name: 'Günther Prien', role: 'Comandantul submarinului U-47' },
            { name: 'Karl Dönitz', role: 'Comandantul flotei de submarine germane' }
        ],
        impact: 'A fost o victorie de propagandă uriașă pentru Germania și o lovitură devastatoare pentru moralul britanic. A demonstrat vulnerabilitatea navelor de suprafață și a forțat Marina Regală să implementeze îmbunătățiri majore ale apărării bazelor sale navale.'
    },
    {
        type: 'minor',
        year: 1939,
        title: 'Războiul Ciudat (Phoney War)',
        lat: 49.4,
        lng: 6.3,
        imageUrl: 'images/Phoney War.jpg',
        description: 'O perioadă de aproape opt luni (septembrie 1939 - mai 1940) de inactivitate militară pe Frontul de Vest, după declarațiile de război ale Franței și Marii Britanii. În ciuda stării de război, au avut loc doar lupte minore și sporadice.',
        context: 'După invazia Poloniei, Aliații au adoptat o strategie defensivă, bazându-se pe Linia Maginot și pe o blocadă economică a Germaniei. Această pasivitate a permis Germaniei să-și consolideze forțele și să se pregătească pentru ofensiva din 1940.',
        figures: [
            { name: 'Maurice Gamelin', role: 'Comandantul suprem francez' },
            { name: 'Lord Gort', role: 'Comandantul Forței Expediționare Britanice' }
        ],
        impact: 'A creat un fals sentiment de securitate în rândul Aliaților și a permis Germaniei să aleagă momentul și locul ofensivei din vest. Perioada s-a încheiat brusc pe 10 mai 1940, odată cu invazia germană a Franței și a Țărilor de Jos.'
    },
    {
        type: 'major',
        year: 1939,
        title: 'Începutul Războiului de Iarnă',
        lat: 60.5333,
        lng: 29.9167,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Antti_Vorho_ja_tuntematon_sotilas_t%C3%A4hyilev%C3%A4t_vihollista_korsusta_konekiv%C3%A4%C3%A4rin_kanssa_Summassa_1939-12-21.jpg/800px-Antti_Vorho_ja_tuntematon_sotilas_t%C3%A4hyilev%C3%A4t_vihollista_korsusta_konekiv%C3%A4%C3%A4rin_kanssa_Summassa_1939-12-21.jpg',
        description: 'Pe 30 noiembrie, Uniunea Sovietică invadează Finlanda după ce aceasta a refuzat să cedeze teritorii strategice. Deși mult inferioară numeric, armata finlandeză opune o rezistență neașteptat de eficientă, profitând de teren și de condițiile de iarnă.',
        context: 'După anexarea estului Poloniei, Stalin a dorit să-și îmbunătățească poziția strategică în jurul Leningradului, cerând Finlandei baze militare și teritorii în Istmul Karelia. Refuzul finlandez a dus la invazie.',
        figures: [
            { name: 'Carl Gustaf Emil Mannerheim', role: 'Comandantul suprem al armatei finlandeze' },
            { name: 'Kliment Voroșilov', role: 'Comandantul inițial al Armatei Roșii' }
        ],
        impact: 'Deși Finlanda a fost în cele din urmă forțată să cedeze teritorii, rezistența sa eroică a umilit Armata Roșie, expunând slăbiciunile acesteia după epurările staliniste. Acest lucru l-a încurajat pe Hitler în decizia sa de a invada URSS în 1941.'
    }
],


    '1940': [
    {
        type: 'major',
        year: 1940,
        title: 'Invazia Danemarcei și Norvegiei (Weserübung)',
        lat: 59.9139,
        lng: 10.7522,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bundesarchiv_Bild_101I-040-3642-10A%2C_Norwegen%2C_Narvik%2C_deutsche_Gebirgsj%C3%A4ger.jpg/800px-Bundesarchiv_Bild_101I-040-3642-10A%2C_Norwegen%2C_Narvik%2C_deutsche_Gebirgsj%C3%A4ger.jpg',
        description: 'Pe 9 aprilie, Germania lansează Operațiunea Weserübung, invadând simultan Danemarca (care capitulează în câteva ore) și Norvegia, pentru a-și asigura rutele de minereu de fier din Suedia și a obține baze navale și aeriene strategice cu acces la Atlantic.',
        context: 'Germania era dependentă de minereul de fier suedez, transportat prin portul norvegian Narvik. Hitler se temea că Aliații ar putea ocupa Norvegia pentru a tăia această rută vitală, așa că a lansat o invazie preventivă.',
        figures: [
            { name: 'Nikolaus von Falkenhorst', role: 'General german, a planificat operațiunea' },
            { name: 'Regele Haakon VII al Norvegiei', role: 'A refuzat să se predea și a condus rezistența' }
        ],
        impact: 'Campania a asigurat resursele Germaniei, dar a costat scump marina germană (Kriegsmarine). Eșecul campaniei aliate de a apăra Norvegia a dus la căderea guvernului lui Neville Chamberlain și la numirea lui Winston Churchill ca prim-ministru al Marii Britanii.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Bătălia Franței (Fall Gelb)',
        lat: 49.7020,
        lng: 4.9476,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bundesarchiv_Bild_101I-123-0213-06%2C_Westfeldzug%2C_Panzer_IV.jpg/800px-Bundesarchiv_Bild_101I-123-0213-06%2C_Westfeldzug%2C_Panzer_IV.jpg',
        description: 'Pe 10 mai, Germania lansează o ofensivă fulgerătoare în vest, ocolind Linia Maginot printr-o mişcare surpriză cu tancuri prin Pădurea Ardeni. Tactica a dus la încercuirea forţelor aliate în Belgia și la o înfrângere catastrofală şi rapidă a Franţei.',
        context: 'După o perioadă de acalmie cunoscută ca "Războiul Ciudat", Germania a pus în aplicare Planul Manstein, un plan îndrăzneţ care miza pe viteză şi surpriză. Aliații au căzut în capcană, avansând în Belgia pentru a întâlni un atac de diversiune, lăsându-și flancul expus.',
        figures: [
            { name: 'Erich von Manstein', role: 'Strategul german care a conceput planul' },
            { name: 'Heinz Guderian', role: 'A condus atacul blindat prin Ardeni' },
            { name: 'Maurice Gamelin', role: 'Comandantul suprem francez, a cărui strategie a eșuat' }
        ],
        impact: 'Înfrângerea a dus la evacuarea de la Dunkerque, la căderea Parisului şi la semnarea armistițiului umilitor de către Franţa. Succesul a creat mitul invincibilităţii Wehrmacht-ului şi a lăsat Marea Britanie singură în faţa Germaniei.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Evacuarea de la Dunkerque (Dynamo)',
        lat: 51.0344,
        lng: 2.3768,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/The_evacuation_of_the_BEF_from_Dunkirk%2C_June_1940_F4826.jpg/800px-The_evacuation_of_the_BEF_from_Dunkirk%2C_June_1940_F4826.jpg',
        description: 'O operaţiune de evacuare maritimă de o amploare fără precedent, prin care peste 338.000 de soldaţi aliaţi (britanici şi francezi) au fost salvați de pe plajele și din portul Dunkerque, după ce au fost încercuiți de armata germană.',
        context: 'Înaintarea rapidă a tancurilor germane a izolat Forța Expediţionară Britanică (BEF) și unități franceze. Un ordin controversat de oprire a tancurilor germane, dat de Hitler, a oferit o fereastră crucială de câteva zile pentru organizarea evacuării.',
        figures: [
            { name: 'Winston Churchill', role: 'Prim-ministrul britanic' },
            { name: 'Amiralul Bertram Ramsay', role: 'A coordonat complexa operațiune navală' }
        ],
        impact: 'Deşi o înfrângere militară, evacuarea a fost prezentată ca o victorie morală extraordinară. "Miracolul de la Dunkerque", realizat cu ajutorul a sute de ambarcațiuni civile, a salvat nucleul armatei britanice, permițând Marii Britanii să continue lupta.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Cedarea Basarabiei și a Bucovinei de Nord',
        lat: 47.0105,
        lng: 28.8638,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Cedarea_Basarabiei_si_a_Bucovinei_de_Nord_in_1940.jpg',
        description: 'În urma unui ultimatum sovietic din 26-27 iunie, România a fost forțată să cedeze Uniunii Sovietice teritoriile Basarabiei, Bucovinei de Nord şi ţinutului Herţa. Armata română s-a retras fără luptă pentru a evita un război.',
        context: 'Cedarea a fost o consecință directă a protocolului secret al Pactului Molotov-Ribbentrop. După căderea Franţei, principalul aliat al României, şi cu Germania concentrată în vest, Stalin a văzut oportunitatea de a-şi pune în aplicare pretențiile teritoriale.',
        figures: [
            { name: 'Regele Carol al II-lea', role: 'Monarhul României, care a acceptat ultimatumul' },
            { name: 'Viaceslav Molotov', role: 'Ministrul de externe sovietic' }
        ],
        impact: 'Pierderea teritorială a fost un şoc național devastator, a discreditat complet regimul Regelui Carol al II-lea şi a aruncat România într-o criză politică profundă, împingând țara spre o alianță cu Germania Nazistă în speranța recuperării teritoriilor.'
    },
    {
        type: 'atrocity',
        year: 1940,
        title: 'Promulgarea legilor rasiale în România',
        lat: 44.4396,
        lng: 26.0963,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Legile_rasiale_din_Romania_1940.jpg',
        description: 'În august, sub autoritatea Regelui Carol al II-lea, guvernul Ion Gigurtu a promulgat un pachet de legi rasiale care au definit juridic statutul evreilor pe criterii de sânge, interzicându-le accesul la viața publică şi economică.',
        context: 'Aceste legi au reprezentat culminarea unui proces îndelungat de antisemitism de stat. Prăbuşirea frontului de vest şi pierderea Basarabiei au creat un climat de panică, iar regimul a canalizat furia publică împotriva evreilor, prezentați drept țapi ispăşitori.',
        figures: [
            { name: 'Regele Carol al II-lea', role: 'Monarhul sub a cărui dictatură au fost promulgate legile' },
            { name: 'Ion Gigurtu', role: 'Prim-ministru al României' }
        ],
        impact: 'Au marcat trecerea oficială a României la un antisemitism rasial, de tip nazist. Au creat fundamentul legal pentru "românizarea" economiei și au reprezentat un act de premeditare juridică a genocidului, legitimând violenţele fizice care au urmat.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Dictatul de la Viena',
        lat: 48.2082,
        lng: 16.3738,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Second_Vienna_Award_map-ro.svg/800px-Second_Vienna_Award_map-ro.svg.png',
        description: 'Pe 30 august, un arbitraj teritorial impus de Germania Nazistă şi Italia Fascistă, prin care România a fost forţată să cedeze Ungariei partea de nord-vest a Transilvaniei.',
        context: 'După pierderea Basarabiei, România a rămas complet izolată diplomatic. Ungaria, un aliat al Axei, a profitat de slăbiciunea României. Hitler a mediat conflictul pentru a menţine stabilitatea în regiune şi a asigura loialitatea ambelor state.',
        figures: [
            { name: 'Ion Gigurtu & Mihail Manoilescu', role: 'Reprezentanții României' },
            { name: 'Joachim von Ribbentrop & Galeazzo Ciano', role: 'Miniştri de externe german şi italian, arbitrii' }
        ],
        impact: 'Pierderea Transilvaniei de Nord a fost o traumă națională și mai mare decât cea a Basarabiei, ducând la prăbuşirea finală a autorității Regelui Carol al II-lea, la abdicarea sa și la preluarea puterii de către Generalul Ion Antonescu și Garda de Fier.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Instaurarea Statului Naţional-Legionar',
        lat: 44.4396,
        lng: 26.0963,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Antonescu_%26_Sima_1940.jpg',
        description: 'În urma protestelor masive cauzate de pierderile teritoriale, Regele Carol al II-lea a fost forțat să abdice pe 6 septembrie în favoarea fiului său, Mihai I. Puterea reală a fost preluată de Generalul Ion Antonescu, care s-a autoproclamat "Conducător" şi a format un guvern împreună cu Garda de Fier.',
        context: 'Regimul autoritar al lui Carol al II-lea s-a prăbuşit sub greutatea umilinţelor teritoriale. Antonescu, o figură militară populară, a fost văzut ca singura persoană capabilă să stabilizeze ţara, în timp ce Garda de Fier era la apogeul popularităţii sale.',
        figures: [
            { name: 'Regele Carol al II-lea', role: 'Monarhul care a abdicat' },
            { name: 'Ion Antonescu', role: 'General, a devenit Conducătorul statului' },
            { name: 'Horia Sima', role: 'Liderul Gărzii de Fier' }
        ],
        impact: 'A marcat sfârşitul monarhiei autoritare şi începutul unei dictaturi militare-fasciste. Statul Naţional-Legionar a aliniat oficial România cu Puterile Axei şi a pregătit terenul pentru participarea României la război şi pentru Holocaust.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Bătălia Angliei',
        lat: 51.3037,
        lng: -0.0903,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Battle_of_Britain_Air_Observer.jpg/800px-Battle_of_Britain_Air_Observer.jpg',
        description: 'O campanie aeriană crucială (iulie-octombrie) în care Royal Air Force (RAF) a apărat cu succes Marea Britanie împotriva atacurilor pe scară largă ale Luftwaffe. A fost prima bătălie majoră din istorie purtată integral în aer.',
        context: 'După căderea Franței, Hitler se pregătea să invadeze Marea Britanie (Operațiunea Leul de Mare), dar pentru aceasta avea nevoie de superioritate aeriană. Bătălia a fost o încercare a Germaniei de a distruge RAF.',
        figures: [
            { name: 'Winston Churchill', role: 'Prim-ministrul britanic' },
            { name: 'Hugh Dowding', role: 'Comandantul RAF Fighter Command, arhitectul victoriei' },
            { name: 'Hermann Göring', role: 'Comandantul Luftwaffe' }
        ],
        impact: 'Victoria RAF a fost un punct de cotitură fundamental. A fost prima înfrângere majoră a Germaniei Naziste şi a anulat pe termen nelimitat planurile de invazie, asigurând supraviețuirea Marii Britanii ca bastion aliat.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Intrarea Italiei în război',
        lat: 41.9028,
        lng: 12.4964,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Benito_Mussolini_e_Adolf_Hitler.jpg/800px-Benito_Mussolini_e_Adolf_Hitler.jpg',
        description: 'Pe 10 iunie, văzând prăbușirea iminentă a Franței, Benito Mussolini declară război Franței și Marii Britanii, sperând la câștiguri teritoriale ușoare și la un loc la masa negocierilor de pace.',
        context: 'Deși aliată cu Germania prin "Pactul de Oțel", Italia a rămas inițial neutră. Mussolini, invidios pe succesele lui Hitler și temându-se că va fi marginalizat, a decis să intre în război când a crezut că victoria Axei este sigură și iminentă.',
        figures: [
            { name: 'Benito Mussolini', role: 'Liderul Italiei Fasciste' }
        ],
        impact: 'A deschis noi teatre de război în Mediterana și Africa de Nord. Armata italiană, slab pregătită și echipată, a suferit înfrângeri umilitoare, forțând Germania să devieze trupe prețioase pentru a-și salva aliatul.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Căderea Parisului',
        lat: 48.8566,
        lng: 2.3522,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bundesarchiv_Bild_146-1975-042-13%2C_Paris%2C_deutsche_Truppen_am_Arc_de_Triomphe.jpg/800px-Bundesarchiv_Bild_146-1975-042-13%2C_Paris%2C_deutsche_Truppen_am_Arc_de_Triomphe.jpg',
        description: 'Pe 14 iunie, trupele germane intră în capitala franceză, care fusese declarată oraș deschis pentru a evita distrugerea. Guvernul francez se refugiase la Bordeaux.',
        context: 'După străpungerea frontului la Sedan și încercuirea armatelor aliate, apărarea franceză s-a prăbușit. Pentru a salva orașul de la distrugeri, guvernul a decis să nu lupte pentru capitală.',
        figures: [
            { name: 'Paul Reynaud', role: 'Prim-ministrul Franței, a demisionat ulterior' }
        ],
        impact: 'Căderea Parisului a fost un șoc psihologic imens pentru Franța și pentru întreaga lume, simbolizând înfrângerea rapidă și totală a uneia dintre cele mai mari puteri militare ale vremii. A accelerat decizia de a cere un armistițiu.'
    },
    {
        type: 'minor',
        year: 1940,
        title: 'Armistițiul de la Compiègne',
        lat: 49.4275,
        lng: 2.8444,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Bundesarchiv_Bild_183-H28708%2C_Waffenstillstand_von_Compi%C3%A8gne%2C_Verhandlungen.jpg/800px-Bundesarchiv_Bild_183-H28708%2C_Waffenstillstand_von_Compi%C3%A8gne%2C_Verhandlungen.jpg',
        description: 'Pe 22 iunie, guvernul francez condus de Mareșalul Pétain semnează un armistițiu umilitor. Franța este împărțită într-o zonă ocupată în nord și vest și o zonă "liberă" în sud, guvernată de un regim colaboraționist la Vichy.',
        context: 'Hitler a insistat ca armistițiul să fie semnat în același vagon de tren în care Germania fusese forțată să semneze armistițiul din 1918, pentru a maximiza umilirea Franței.',
        figures: [
            { name: 'Philippe Pétain', role: 'Noul șef al statului francez' },
            { name: 'Wilhelm Keitel', role: 'Mareșal german, a reprezentat Germania' }
        ],
        impact: 'A pus capăt oficial Bătăliei Franței. A dus la crearea regimului de la Vichy, care a colaborat activ cu Germania Nazistă, inclusiv în persecutarea evreilor. A marcat și începutul Rezistenței Franceze, condusă din exil de Charles de Gaulle.'
    },
    {
        type: 'atrocity',
        year: 1940,
        title: 'Începutul "The Blitz"',
        lat: 51.5072,
        lng: -0.1276,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/London_in_the_Blitz_1940_HU36113.jpg/800px-London_in_the_Blitz_1940_HU36113.jpg',
        description: 'Pe 7 septembrie, Luftwaffe își schimbă strategia și începe o campanie de bombardamente strategice susținute asupra Londrei și a altor orașe britanice. Campania a durat 8 luni și a ucis zeci de mii de civili.',
        context: 'După ce nu a reușit să distrugă RAF, Hitler a ordonat bombardarea orașelor pentru a teroriza populația civilă și a forța Marea Britanie să ceară pace. Această schimbare de tactică a oferit RAF un răgaz crucial pentru a-și reface forțele.',
        figures: [
            { name: 'Hermann Göring', role: 'Comandantul Luftwaffe' },
            { name: 'Winston Churchill', role: 'Prim-ministru, a inspirat rezistența britanică' }
        ],
        impact: 'Deși a cauzat distrugeri imense și suferință, "The Blitz" nu a reușit să frângă moralul britanic. Dimpotrivă, a întărit determinarea de a lupta. Eșecul de a supune Marea Britanie a fost o altă înfrângere strategică pentru Germania.'
    },
    {
        type: 'major',
        year: 1940,
        title: 'Semnarea Pactului Tripartit',
        lat: 52.5200,
        lng: 13.4050,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Bundesarchiv_Bild_183-B02547%2C_Berlin%2C_Unterzeichnung_Dreim%C3%A4chtepakt.jpg/800px-Bundesarchiv_Bild_183-B02547%2C_Berlin%2C_Unterzeichnung_Dreim%C3%A4chtepakt.jpg',
        description: 'Pe 27 septembrie, Germania, Italia și Japonia semnează Pactul Tripartit la Berlin, formând alianța militară cunoscută ca Puterile Axei. Ulterior, Ungaria, România, Slovacia și altele se vor alătura.',
        context: 'Pactul a formalizat alianța dintre cele trei puteri expansioniste. Acestea și-au recunoscut reciproc sferele de influență (Germania și Italia în Europa, Japonia în Asia de Est) și s-au angajat să se ajute reciproc dacă una dintre ele era atacată de o putere care nu era încă în război.',
        figures: [
            { name: 'Joachim von Ribbentrop', role: 'Ministrul de Externe german' },
            { name: 'Galeazzo Ciano', role: 'Ministrul de Externe italian' },
            { name: 'Saburō Kurusu', role: 'Ambasadorul Japoniei' }
        ],
        impact: 'A fost menit în principal să descurajeze Statele Unite să intre în război. În practică, a avut efectul opus, întărind percepția în SUA că agresiunea Axei era o amenințare globală care trebuia oprită. A solidificat alianța care va lupta împotriva Aliaților.'
    },
    {
        type: 'minor',
        year: 1940,
        title: 'Bătălia de la Taranto',
        lat: 40.4710,
        lng: 17.2398,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/The_Italian_battleship_Giulio_Cesare_under_attack_by_British_aircraft_at_the_Battle_of_Taranto_on_11_November_1940.jpg/800px-The_Italian_battleship_Giulio_Cesare_under_attack_by_British_aircraft_at_the_Battle_of_Taranto_on_11_November_1940.jpg',
        description: 'În noaptea de 11-12 noiembrie, un atac aerian surpriză, lansat de pe portavionul HMS Illustrious cu biplane învechite (Fairey Swordfish), neutralizează o mare parte a flotei de luptă italiene în portul Taranto.',
        context: 'Marina Regală Britanică dorea să schimbe echilibrul de putere navală în Mediterana. Atacul a fost planificat cu atenție pentru a demonstra că o flotă ancorată într-un port considerat sigur era vulnerabilă la un atac aerian.',
        figures: [
            { name: 'Andrew Cunningham', role: 'Amiral britanic, comandantul Flotei Mediteraneene' }
        ],
        impact: 'A fost o victorie strategică majoră pentru britanici, asigurându-le temporar supremația navală în Mediterana. Atacul a fost studiat cu atenție de japonezi, care s-au inspirat din el pentru planificarea atacului de la Pearl Harbor.'
    },
    {
        type: 'minor',
        year: 1940,
        title: 'Operațiunea Compass',
        lat: 28.5,
        lng: 27.0,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Italian_prisoners_captured_during_Operation_Compass.jpg/800px-Italian_prisoners_captured_during_Operation_Compass.jpg',
        description: 'Între decembrie 1940 și februarie 1941, o contraofensivă aliată masivă în deșertul vestic (Egipt și Libia) distruge Armata a 10-a italiană, capturând 138.000 de prizonieri și avansând adânc în Libia.',
        context: 'După o invazie italiană anemică a Egiptului, forțele britanice, deși mult inferioare numeric, au lansat un raid la scară largă care s-a transformat într-o ofensivă totală datorită colapsului rapid al rezistenței italiene.',
        figures: [
            { name: 'Richard O\'Connor', role: 'General britanic, a condus ofensiva' },
            { name: 'Rodolfo Graziani', role: 'Mareșal italian, comandantul forțelor din Africa de Nord' }
        ],
        impact: 'A fost o victorie aliată spectaculoasă și o înfrângere umilitoare pentru Italia. Dezastrul l-a forțat pe Hitler să intervină, trimițând în Africa un corp expediționar de elită, Afrika Korps, sub comanda lui Erwin Rommel, schimbând complet cursul războiului din deșert.'
    },
    {
        type: 'atrocity',
        year: 1940,
        title: 'Înființarea Lagărului Auschwitz',
        lat: 50.0264,
        lng: 19.2094,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bundesarchiv_Bild_183-N0827-318%2C_KZ_Auschwitz%2C_Ankunft_ungarischer_Juden.jpg/800px-Bundesarchiv_Bild_183-N0827-318%2C_KZ_Auschwitz%2C_Ankunft_ungarischer_Juden.jpg',
        description: 'Pe 20 mai, SS înființează lagărul de concentrare de la Auschwitz I, inițial pentru prizonieri politici polonezi. Acesta se va extinde și va deveni cel mai mare și mai letal complex de lagăre de concentrare și exterminare nazist, unde au fost uciși peste 1.1 milioane de oameni.',
        context: 'După ocuparea Poloniei, naziștii aveau nevoie de noi lagăre pentru a încarcera numărul mare de prizonieri. O fostă cazarmă militară poloneză de la Oświęcim (germanizat Auschwitz) a fost aleasă pentru locația sa strategică.',
        figures: [
            { name: 'Heinrich Himmler', role: 'Șeful SS, a ordonat înființarea' },
            { name: 'Rudolf Höss', role: 'Primul și cel mai longeviv comandant al lagărului' }
        ],
        impact: 'Auschwitz a devenit simbolul Holocaustului și al genocidului industrializat. Complexul (Auschwitz I, Auschwitz II-Birkenau, Auschwitz III-Monowitz) a servit ca centru de muncă forțată, experimente medicale și, mai ales, exterminare în masă a evreilor europeni.'
    },
    {
        type: 'atrocity',
        year: 1940,
        title: 'Sigilarea Ghetoului din Varșovia',
        lat: 52.2461,
        lng: 20.9922,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bundesarchiv_Bild_101I-134-0791-20%2C_Polen%2C_Warschauer_Ghetto%2C_Mauerbau.jpg/800px-Bundesarchiv_Bild_101I-134-0791-20%2C_Polen%2C_Warschauer_Ghetto%2C_Mauerbau.jpg',
        description: 'Pe 16 noiembrie, cel mai mare ghetou din Europa este închis ermetic cu ziduri, sârmă ghimpată și paznici. Aproximativ 400.000 de evrei sunt înghesuiți într-o suprafață de 3,4 km², supuși înfometării, bolilor și violenței arbitrare.',
        context: 'Crearea ghetoului a fost un pas intermediar în "Soluția Finală". Scopul era izolarea completă a evreilor de restul populației, confiscarea proprietăților lor și concentrarea lor într-un singur loc pentru a facilita viitoarele deportări.',
        figures: [
            { name: 'Ludwig Fischer', role: 'Guvernatorul nazist al districtului Varșovia' },
            { name: 'Adam Czerniaków', role: 'Șeful Judenrat-ului (consiliului evreiesc) din ghetou' }
        ],
        impact: 'Condițiile din ghetou au fost catastrofale. Peste 80.000 de oameni au murit de foame și boli înainte ca deportările în masă către lagărul de exterminare Treblinka să înceapă în 1942. A fost scena celei mai mari revolte armate evreiești din 1943.'
    }
],

   '1941': [
    {
        type: 'atrocity',
        year: 1941,
        title: 'Rebeliunea Legionară şi Pogromul de la Bucureşti',
        lat: 44.4396,
        lng: 26.0963,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Bucharest_Pogrom_1941.jpg',
        description: 'Între 21-23 ianuarie, o tentativă violentă a Gărzii de Fier de a prelua puterea totală în stat prin înlăturarea lui Ion Antonescu. Rebeliunea a fost însoțită de un pogrom brutal împotriva evreilor din Bucureşti, în special în cartierele Dudești și Văcărești.',
        context: 'Coabitarea dintre Antonescu şi Garda de Fier a fost extrem de tensionată. Legionarii doreau o revoluţie totală, în timp ce Antonescu dorea ordine şi disciplină, bazându-se pe sprijinul armatei. Conflictul a escaladat după ce Antonescu a început să înlăture prefecţii legionari.',
        figures: [
            { name: 'Ion Antonescu', role: 'Conducătorul statului' },
            { name: 'Horia Sima', role: 'Liderul Gărzii de Fier' }
        ],
        impact: 'Antonescu, cu acordul tacit al lui Hitler (care prefera ordinea garantată de armată), a folosit armata pentru a înăbuşi sângeros rebeliunea. Garda de Fier a fost scoasă în afara legii. Evenimentul a consolidat dictatura militară personală a lui Antonescu.'
    },
    {
        type: 'major',
        year: 1941,
        title: 'Intrarea României în război',
        lat: 47.0105,
        lng: 28.8638,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Propaganda_poster_for_the_war_against_the_Soviet_Union_in_Romania.jpg',
        description: 'Pe 22 iunie, Armata Română, sub comanda lui Ion Antonescu, s-a alăturat Germaniei Naziste în invazia Uniunii Sovietice (Operațiunea Barbarossa). Obiectivul principal declarat a fost eliberarea Basarabiei şi a Bucovinei de Nord.',
        context: 'După pierderile teritoriale din 1940, opinia publică şi clasa politică românească erau dominate de un puternic sentiment revanşard. Alianța cu Germania era văzută ca singura cale de a recupera teritoriile pierdute în fața URSS.',
        figures: [
            { name: 'Ion Antonescu', role: 'Conducătorul României şi comandantul suprem' },
            { name: 'Adolf Hitler', role: 'Liderul Germaniei Naziste' }
        ],
        impact: 'Trupele române au eliberat rapid teritoriile pierdute, dar Antonescu a făcut greşeala fatală de a continua războiul dincolo de Nistru, până la Stalingrad, transformând un război de eliberare într-unul de agresiune și aliniind complet România cu obiectivele Axei.'
    },
    {
        type: 'atrocity',
        year: 1941,
        title: 'Pogromul de la Iași',
        lat: 47.1585,
        lng: 27.6014,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Ia%C8%99i_pogrom_-_Jews_being_led_to_the_police_station.jpg',
        description: 'Un masacru de o brutalitate extremă (29 iunie - 6 iulie), în care autoritățile române, cu participare germană şi civilă, au ucis peste 13.000 de evrei. Evenimentul a inclus execuții în masă și deportări în "trenurile morţii".',
        context: 'Pogromul a avut loc la doar câteva zile după intrarea României în război. Autoritățile, în frunte cu Antonescu, au cultivat mitul "amenințării iudeo-bolșevice", folosind două bombardamente sovietice minore ca pretext pentru a dezlănțui o isterie colectivă și a da ordinul de "curățare a Iaşiului".',
        figures: [
            { name: 'Ion Antonescu', role: 'Conducătorul statului, a dat ordinul de "curățare a terenului"' },
            { name: 'Ofiţeri SSI şi Abwehr', role: 'Responsabili de planificare și instigare' },
            { name: 'Poliţia, jandarmeria, armata română', role: 'Principalii executanți' }
        ],
        impact: 'A fost unul dintre cele mai violente pogromuri din timpul Holocaustului, un act de genocid premeditat şi organizat de stat. Masacrul a demonstrat că regimul Antonescu era un perpetrator activ şi zelos al Holocaustului, capabil să organizeze pe cont propriu masacre de o amploare terifiantă.'
    },
    {
        type: 'major',
        year: 1941,
        title: 'Asediul Odesei și masacrele subsecvente',
        lat: 46.4825,
        lng: 30.7233,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Romanian_soldiers_in_Odessa_1941.jpg',
        description: 'O campanie militară majoră a Armatei a 4-a Române (august-octombrie) pentru cucerirea portului strategic Odesa, urmată de un masacru de proporţii împotriva populaţiei evreiești a oraşului.',
        context: 'După eliberarea Basarabiei, decizia lui Antonescu de a continua războiul dincolo de Nistru a transformat campania într-una de cucerire. Odesa, un important port la Marea Neagră, a devenit un obiectiv strategic principal.',
        figures: [
            { name: 'Ion Antonescu', role: 'A ordonat asediul şi represaliile' },
            { name: 'Generalii Nicolae Ciupercă şi Iosif Iacobici', role: 'Comandanți ai Armatei a 4-a Române' }
        ],
        impact: 'Pe 22 octombrie, o explozie la comandamentul român a servit drept pretext pentru un masacru. Între 25.000 şi 30.000 de evrei au fost executați. Odesa a devenit capitala Transnistriei, un "cimitir al evreilor", unde sute de mii au fost deportați și au pierit.'
    },
    {
        type: 'major',
        year: 1941,
        title: 'Operațiunea Barbarossa',
        lat: 52.0825,
        lng: 23.6536,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Bundesarchiv_Bild_101I-209-0013-05%2C_Russland%2C_Panzer_IV_mit_Infanterie.jpg/800px-Bundesarchiv_Bild_101I-209-0013-05%2C_Russland%2C_Panzer_IV_mit_Infanterie.jpg',
        description: 'Pe 22 iunie, Germania lansează cea mai mare invazie terestră din istorie, atacând Uniunea Sovietică pe un front de mii de kilometri. Acţiunea a anulat Pactul Molotov-Ribbentrop şi a deschis Frontul de Est.',
        context: 'Motivat de ideologia sa anti-comunistă şi rasistă (planul de a cuceri "spațiul vital" - Lebensraum), Hitler dorea să distrugă Uniunea Sovietică într-o campanie rapidă. El a subestimat grav resursele URSS, adâncimea strategică a teritoriului și dificultățile climatice.',
        figures: [
            { name: 'Adolf Hitler', role: 'A ordonat şi a micro-gestionat invazia' },
            { name: 'Iosif Stalin', role: 'Liderul sovietic, inițial surprins, a mobilizat rezistența totală' }
        ],
        impact: 'Deşi a avut succese inițiale spectaculoase, cu milioane de prizonieri sovietici, operaţiunea a eşuat în a atinge obiectivul unei victorii rapide. Eşecul în faţa Moscovei în iarna 1941-1942 a blocat Germania într-un război de uzură pe care nu-l putea câştiga.'
    },
    {
        type: 'major',
        year: 1941,
        title: 'Atacul de la Pearl Harbor',
        lat: 21.3686,
        lng: -157.9497,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/USS_Shaw_exploding_in_Pearl_Harbor.jpg/800px-USS_Shaw_exploding_in_Pearl_Harbor.jpg',
        description: 'Pe 7 decembrie, un atac aerian surpriză devastator, lansat de marina imperială japoneză asupra bazei navale americane din Hawaii. Atacul a fost menit să neutralizeze flota americană din Pacific pentru a permite Japoniei să-și extindă imperiul în Asia de Sud-Est.',
        context: 'Tensiunile dintre SUA şi Japonia au escaladat din cauza expansiunii japoneze în China şi a embargoului american asupra petrolului și a altor materiale strategice. Conducerea militară japoneză a optat pentru o lovitură preventivă decisivă.',
        figures: [
            { name: 'Amiralul Isoroku Yamamoto', role: 'Strategul principal al atacului' },
            { name: 'Franklin D. Roosevelt', role: 'Preşedintele SUA, a numit ziua "o dată care va trăi în infamie"' }
        ],
        impact: 'Deşi un succes tactic, a fost un dezastru strategic pentru Japonia. A unit o Americă anterior izolaționistă, aducând imensa sa putere industrială şi militară în război. Crucial, portavioanele americane, care erau pe mare, au scăpat nevătămate.'
    },
    {
        type: 'major',
        year: 1941,
        title: 'Legea Lend-Lease',
        lat: 38.8951,
        lng: -77.0364,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Signing_the_Lend-Lease_Bill.jpg/800px-Signing_the_Lend-Lease_Bill.jpg',
        description: 'Pe 11 martie, SUA adoptă Legea Lend-Lease, permițând transferul de materiale de război (fără plată imediată) către națiunile a căror apărare era considerată vitală pentru SUA, un pas decisiv care transformă SUA în "arsenalul democrației".',
        context: 'Marea Britanie era aproape de colaps financiar și nu mai putea plăti pentru armele necesare. Roosevelt a propus legea pentru a ocoli legile de neutralitate și a oferi un ajutor crucial Marii Britanii, și ulterior Chinei și Uniunii Sovietice.',
        figures: [
            { name: 'Franklin D. Roosevelt', role: 'Președintele SUA, a promovat legea' }
        ],
        impact: 'A fost un pas esențial care a permis Marii Britanii și URSS să continue lupta. A marcat sfârșitul de facto al neutralității americane și a pus bazele mobilizării industriale care va câștiga războiul.'
    },
    {
        type: 'major',
        year: 1941,
        title: 'Invazia Iugoslaviei și Greciei',
        lat: 44.7866,
        lng: 20.4489,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bundesarchiv_Bild_101I-169-1588-12%2C_Griechenland%2C_Soldaten_auf_Panzer_IV.jpg/800px-Bundesarchiv_Bild_101I-169-1588-12%2C_Griechenland%2C_Soldaten_auf_Panzer_IV.jpg',
        description: 'Pe 6 aprilie, Germania invadează Iugoslavia și Grecia pentru a securiza flancul sudic înainte de invazia URSS. Campania rapidă culminează cu Bătălia din Creta, prima invazie majoră aeropurtată din istorie.',
        context: 'Invazia a fost declanșată de o lovitură de stat pro-britanică la Belgrad, care a răsturnat un guvern pro-Axă. În același timp, Germania trebuia să salveze forțele italiene, care eșuaseră în încercarea de a invada Grecia.',
        figures: [
            { name: 'Regele Petru al II-lea al Iugoslaviei', role: 'A fugit în exil' },
            { name: 'Generalul Alexander Löhr', role: 'Comandantul forțelor aeriene germane în Balcani' }
        ],
        impact: 'A dus la o ocupație brutală și la apariția unor mișcări de partizani extrem de puternice, în special în Iugoslavia (conduse de Tito). Unii istorici susțin că invazia a întârziat Operațiunea Barbarossa cu câteva săptămâni cruciale.'
    },
    {
        type: 'minor',
        year: 1941,
        title: 'Asediul Tobrukului',
        lat: 32.0763,
        lng: 23.9598,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Australian_25-pounder_gun_at_El_Alamein_1942.jpg/800px-Australian_25-pounder_gun_at_El_Alamein_1942.jpg',
        description: 'Timp de 241 de zile (aprilie-noiembrie), garnizoana aliată din portul strategic Tobruk, majoritatea australieni ("Șobolanii din Tobruk"), rezistă atacurilor germano-italiene, blocând înaintarea Axei spre Egipt.',
        context: 'După succesele inițiale ale lui Rommel, Tobruk a rămas o enclavă aliată în spatele liniilor Axei, amenințându-i constant flancul și liniile de aprovizionare. Portul era esențial pentru orice avansare ulterioară spre Canalul Suez.',
        figures: [
            { name: 'Generalul Leslie Morshead', role: 'Comandantul australian al garnizoanei' },
            { name: 'Erwin Rommel', role: 'Comandantul Afrika Korps' }
        ],
        impact: 'Rezistența tenace a apărătorilor a fost o victorie morală importantă și a împiedicat o victorie rapidă a Axei în Africa de Nord. A demonstrat că forțele lui Rommel nu erau invincibile.'
    },
    {
        type: 'atrocity',
        year: 1941,
        title: '"Holocaustul prin gloanțe"',
        lat: 50.4719,
        lng: 30.4494,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_massacre_of_Jews_in_Ivangorod%2C_Ukraine%2C_in_1942.jpg/800px-The_massacre_of_Jews_in_Ivangorod%2C_Ukraine%2C_in_1942.jpg',
        description: 'Începând cu iunie 1941, odată cu invazia URSS, unitățile mobile de ucidere (Einsatzgruppen) încep masacrarea sistematică prin împușcare a evreilor, oficialilor comuniști și romilor, ducând la moartea a peste 1,5 milioane de oameni.',
        context: 'Acesta a fost primul stadiu al "Soluției Finale", precedând uciderea industrializată în lagărele de exterminare. Einsatzgruppen operau în spatele armatei, adunând și executând victimele la marginea orașelor, în râpe sau în șanțuri antitanc.',
        figures: [
            { name: 'Otto Ohlendorf', role: 'Comandantul Einsatzgruppe D' },
            { name: 'Paul Blobel', role: 'Comandantul Sonderkommando 4a, responsabil pentru Babi Yar' }
        ],
        impact: 'A reprezentat o escaladare fără precedent a violenței genocidare. A fost o fază a Holocaustului mai puțin cunoscută publicului larg, dar la fel de letală și brutală ca lagărele de exterminare.'
    },
    {
        type: 'major',
        year: 1941,
        title: 'Asediul Leningradului',
        lat: 59.9343,
        lng: 30.3351,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/RIAN_archive_359_Leningrad_under_siege.jpg/800px-RIAN_archive_359_Leningrad_under_siege.jpg',
        description: 'Pe 8 septembrie, forțele germane și finlandeze încercuiesc complet Leningradul. Asediul de 872 de zile devine unul dintre cele mai lungi și mai brutale din istorie, ducând la moartea a peste un milion de civili, majoritatea prin înfometare.',
        context: 'Leningradul era un obiectiv major pentru Hitler datorită importanței sale industriale și simbolice (leagănul Revoluției Bolșevice). Planul german era de a încercui orașul și de a-l lăsa să moară de foame, fără a lansa un asalt costisitor.',
        figures: [
            { name: 'Andrei Zhdanov', role: 'Liderul politic al apărării orașului' },
            { name: 'Kliment Voroșilov & Gheorghi Jukov', role: 'Comandanți militari sovietici succesivi' }
        ],
        impact: 'Rezistența eroică a orașului a devenit un simbol al suferinței și determinării sovietice. Asediul a imobilizat un număr mare de trupe germane care ar fi putut fi folosite pe alte fronturi.'
    },
    {
        type: 'atrocity',
        year: 1941,
        title: 'Masacrul de la Babi Yar',
        lat: 50.4719,
        lng: 30.4494,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bundesarchiv_Bild_101I-218-0511-09%2C_Russland%2C_Babi_Jar%2C_Leichen.jpg/800px-Bundesarchiv_Bild_101I-218-0511-09%2C_Russland%2C_Babi_Jar%2C_Leichen.jpg',
        description: 'Pe 29-30 septembrie, la o râpă de la periferia Kievului, unități ale Einsatzgruppe C, împreună cu auxiliari locali, ucid prin împușcare 33.771 de evrei în decurs de două zile. Acesta rămâne unul dintre cele mai mari masacre individuale ale Holocaustului.',
        context: 'După capturarea Kievului, autoritățile naziste au ordonat populației evreiești să se adune pentru "relocare". În schimb, au fost duși la râpa Babi Yar, forțați să se dezbrace și împușcați în grupuri.',
        figures: [
            { name: 'Friedrich Jeckeln', role: 'Înalt lider SS și de poliție, a supervizat masacrul' },
            { name: 'Paul Blobel', role: 'Comandantul unității responsabile de execuții' }
        ],
        impact: 'Babi Yar a devenit un simbol al "Holocaustului prin gloanțe". A demonstrat eficiența brutală a unităților Einsatzgruppen și intenția nazistă de a anihila complet populația evreiască de pe teritoriile ocupate.'
    },
    {
        type: 'major',
        year: 1941,
        title: 'Bătălia de la Moscova',
        lat: 55.7512,
        lng: 37.6184,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/RIAN_archive_858_T-34_tanks_in_ambush.jpg/800px-RIAN_archive_858_T-34_tanks_in_ambush.jpg',
        description: 'Ofensiva finală germană pentru capturarea Moscovei (Operațiunea Taifun) eșuează din cauza rezistenței sovietice acerbe, a noroiului și a gerului. Contraofensiva sovietică din decembrie marchează eșecul strategic al Operațiunii Barbarossa.',
        context: 'Moscova era principalul obiectiv politic, economic și de transport al URSS. Căderea sa ar fi putut duce la colapsul sovietic. Germanii au ajuns la doar câțiva kilometri de Kremlin, dar liniile lor de aprovizionare erau suprasolicitate, iar trupele epuizate.',
        figures: [
            { name: 'Gheorghi Jukov', role: 'General sovietic, a organizat apărarea Moscovei' },
            { name: 'Fedor von Bock', role: 'Mareșal german, comandantul Grupului de Armate Centru' }
        ],
        impact: 'A fost prima înfrângere strategică majoră a Wehrmacht-ului. A spulberat mitul invincibilității germane și a demonstrat că războiul din est va fi unul lung și de uzură.'
    },
    {
        type: 'minor',
        year: 1941,
        title: 'Germania și Italia declară război SUA',
        lat: 52.5200,
        lng: 13.4050,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bundesarchiv_Bild_183-B20320%2C_Berlin%2C_Reichstagssitzung%2C_Rede_Adolf_Hitler.jpg/800px-Bundesarchiv_Bild_183-B20320%2C_Berlin%2C_Reichstagssitzung%2C_Rede_Adolf_Hitler.jpg',
        description: 'Pe 11 decembrie, la patru zile după Pearl Harbor, Hitler și Mussolini declară război Statelor Unite. A fost una dintre cele mai mari erori strategice ale lui Hitler.',
        context: 'Hitler nu era obligat de Pactul Tripartit să declare război, deoarece Japonia fusese agresorul. El a luat decizia din dispreț față de SUA, subestimându-i potențialul militar și industrial, și în speranța că Japonia va ataca URSS în Extremul Orient.',
        figures: [
            { name: 'Adolf Hitler', role: 'A anunțat declarația de război în Reichstag' },
            { name: 'Benito Mussolini', role: 'A urmat exemplul lui Hitler' }
        ],
        impact: 'A eliminat orice posibilitate ca SUA să se concentreze exclusiv pe Pacific și a permis administrației Roosevelt să implementeze strategia "Germany First". A solidificat Marea Alianță și a garantat că imensa putere industrială americană va fi folosită pentru a învinge Germania.'
    }
],

    '1942': [
    {
        type: 'major',
        year: 1942,
        title: 'Participarea României la Campania din Crimeea',
        lat: 44.9535,
        lng: 34.1024,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Romanian_mountain_troops_in_Crimea_1941.jpg/800px-Romanian_mountain_troops_in_Crimea_1941.jpg',
        description: 'Unități semnificative ale armatei române, în special Corpul Vânătorilor de Munte, au participat alături de Armata a 11-a germană la campania de cucerire a Peninsulei Crimeea, culminând cu asediul brutal şi căderea Sevastopolului în iulie 1942.',
        context: 'Cucerirea Crimeei a devenit o prioritate strategică pentru Axă, deoarece peninsula servea drept bază aeriană sovietică de unde se lansau raiduri asupra câmpurilor petrolifere vitale de la Ploieşti. Asigurarea Crimeei era esențială pentru protejarea resurselor de petrol ale României.',
        figures: [
            { name: 'Mareşalul Erich von Manstein', role: 'Comandantul german al campaniei' },
            { name: 'General Petre Dumitrescu', role: 'Comandantul Armatei a 3-a Române' },
            { name: 'General Gheorghe Avramescu', role: 'Comandantul Corpului Vânătorilor de Munte' }
        ],
        impact: 'Trupele române au avut o contribuție substanțială şi sângeroasă la succesul campaniei, dar cu pierderi grele. Deși a demonstrat calitatea de luptă a unităților de elită, campania a contribuit la uzura armatei şi la adâncirea implicării României într-un război de agresiune.'
    },
    {
        type: 'major',
        year: 1942,
        title: 'Bătălia de la Stalingrad (Participarea României)',
        lat: 48.7080,
        lng: 44.5133,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Romanian_soldiers_at_Stalingrad_1942.jpg/800px-Romanian_soldiers_at_Stalingrad_1942.jpg',
        description: 'Armatele a 3-a şi a 4-a Române, slab echipate şi întinse pe un front mult prea larg, au fost însărcinate cu protejarea flancurilor Armatei a 6-a germane. Contraofensiva sovietică (Operațiunea Uranus) din noiembrie a lovit exact în aceste sectoare, spulberând trupele române.',
        context: 'După succesele din 1941, Antonescu a angajat un număr tot mai mare de trupe române pe Frontul de Est. Armatele române erau dotate cu armament antitanc inadecvat şi nu au primit sprijinul promis de la comandamentul german.',
        figures: [
            { name: 'Generalul Petre Dumitrescu', role: 'Comandantul Armatei a 3-a Române' },
            { name: 'Generalul Constantin Constantinescu-Claps', role: 'Comandantul Armatei a 4-a Române' }
        ],
        impact: 'Dezastrul de la Cotul Donului a fost cea mai mare înfrângere militară din istoria României, cu pierderi de peste 150.000 de soldaţi. A distrus capacitatea ofensivă a armatei şi a generat un puternic curent anti-război în ţară, subminând încrederea în Antonescu.'
    },
    {
        type: 'major',
        year: 1942,
        title: 'Bătălia de la Midway',
        lat: 28.2076,
        lng: -177.3725,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/USS_Yorktown_%28CV-5%29_is_hit_on_4_June_1942.jpg/800px-USS_Yorktown_%28CV-5%29_is_hit_on_4_June_1942.jpg',
        description: 'O bătălie navală și aeriană decisivă (4-7 iunie) și punctul de cotitură al războiului din Pacific. Flota americană a înfrânt în mod categoric flota japoneză, scufundând patru dintre portavioanele sale de elită (Akagi, Kaga, Soryu, Hiryu).',
        context: 'Marina japoneză a încercat să atragă flota americană într-o bătălie finală distrugătoare la atolul Midway. Datorită decriptării codurilor navale japoneze (JN-25), amiralul Nimitz cunoştea în detaliu planul de atac japonez și a putut pregăti o ambuscadă.',
        figures: [
            { name: 'Amiralul Chester W. Nimitz', role: 'Comandantul forţelor americane din Pacific' },
            { name: 'Amiralul Chuichi Nagumo', role: 'Comandantul forţei de atac japoneze' }
        ],
        impact: 'Pierderea celor patru portavioane și a piloților experimentați a fost o lovitură de la care Japonia nu şi-a mai revenit niciodată. Bătălia a oprit definitiv expansiunea japoneză în Pacific şi a transferat inițiativa strategică Aliaților.'
    },
    {
        type: 'atrocity',
        year: 1942,
        title: 'Conferința de la Wannsee',
        lat: 52.4286,
        lng: 13.1594,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wannsee_Villa.jpg/800px-Wannsee_Villa.jpg',
        description: 'Pe 20 ianuarie, o întâlnire a 15 înalți oficiali naziști pentru a coordona și birocratiza implementarea "Soluției Finale la problema evreiască", planul de exterminare sistematică a evreilor europeni.',
        context: 'Decizia de a extermina evreii fusese deja luată la nivel înalt. Conferința nu a fost pentru a decide, ci pentru a asigura cooperarea diferitelor ministere și agenții ale statului în organizarea logistică a genocidului.',
        figures: [
            { name: 'Reinhard Heydrich', role: 'Șeful RSHA, a prezidat conferința' },
            { name: 'Adolf Eichmann', role: 'Șeful secției pentru afaceri evreiești, a redactat protocolul' }
        ],
        impact: 'Întâlnirea a marcat trecerea la o fază industrializată și sistematică a Holocaustului. A demonstrat natura birocratică și rece a genocidului, în care uciderea în masă a fost planificată ca o problemă administrativă.'
    },
    {
        type: 'major',
        year: 1942,
        title: 'Căderea Singaporelui',
        lat: 1.3521,
        lng: 103.8198,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/The_surrender_of_Singapore%2C_15_February_1942.jpg/800px-The_surrender_of_Singapore%2C_15_February_1942.jpg',
        description: 'Pe 15 februarie, căderea "fortăreței" Singapore în fața forțelor japoneze a fost una dintre cele mai mari înfrângeri militare britanice, Churchill numind-o "cel mai mare dezastru" din istoria militară britanică.',
        context: 'Japonezii au lansat un atac surpriză prin jungla malaeziană, considerată impenetrabilă, ocolind apărarea principală a orașului, care era orientată spre mare. Forțele aliate, slab pregătite, au fost rapid copleșite.',
        figures: [
            { name: 'Generalul Arthur Percival', role: 'Comandantul britanic care s-a predat' },
            { name: 'Generalul Tomoyuki Yamashita', role: 'Comandantul japonez, supranumit "Tigrul Malaeziei"' }
        ],
        impact: 'A dus la capturarea a peste 80.000 de soldați aliați. A distrus mitul supremației occidentale în Asia și a deschis calea japonezilor spre Indiile de Est Olandeze, bogate în petrol.'
    },
    {
        type: 'atrocity',
        year: 1942,
        title: 'Începutul Operațiunii Reinhard',
        lat: 50.3758,
        lng: 23.4589,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Belzec_camp_memorial.jpg/800px-Belzec_camp_memorial.jpg',
        description: 'În martie, lagărul de exterminare de la Bełżec devine operațional, marcând începutul fazei celei mai letale a Holocaustului în Polonia ocupată. Împreună cu Sobibór și Treblinka, aceste lagăre vor duce la moartea a 1,7 milioane de evrei.',
        context: 'Operațiunea Reinhard a fost numele de cod dat planului de a ucide evreii din Guvernământul General (Polonia ocupată). Aceste lagăre erau "fabrici ale morții", proiectate exclusiv pentru exterminare rapidă prin gazare.',
        figures: [
            { name: 'Odilo Globočnik', role: 'Lider SS, șeful operațiunii' },
            { name: 'Christian Wirth', role: 'Inspectorul lagărelor Operațiunii Reinhard' }
        ],
        impact: 'A reprezentat apogeul eficienței ucigașe a regimului nazist. Majoritatea comunităților evreiești din Polonia au fost complet anihilate în aceste trei lagăre în decurs de aproximativ un an și jumătate.'
    },
    {
        type: 'atrocity',
        year: 1942,
        title: 'Marșul Morții din Bataan',
        lat: 14.65,
        lng: 120.5,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bataan_Death_March_memorial_in_Capas.jpg/800px-Bataan_Death_March_memorial_in_Capas.jpg',
        description: 'În aprilie, după capitularea forțelor americane și filipineze în Peninsula Bataan, aproximativ 75.000 de prizonieri sunt forțați să mărșăluiască peste 100 km spre un lagăr de prizonieri. Mii mor pe drum din cauza brutalității, înfometării și bolilor.',
        context: 'Forțele aliate din Filipine, conduse de Generalul Douglas MacArthur (care a fost evacuat), au rezistat eroic timp de câteva luni. După capitulare, japonezii nu erau pregătiți să gestioneze un număr atât de mare de prizonieri.',
        figures: [
            { name: 'Generalul Masaharu Homma', role: 'Comandantul japonez, executat ulterior pentru crime de război' }
        ],
        impact: 'A devenit un simbol al cruzimii japoneze față de prizonierii de război și a alimentat determinarea americană de a învinge Japonia. A fost una dintre cele mai cunoscute crime de război japoneze din Pacific.'
    },
    {
        type: 'minor',
        year: 1942,
        title: 'Raidul Doolittle',
        lat: 35.6895,
        lng: 139.6917,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Doolittle_Raid_-_USS_Hornet.jpg/800px-Doolittle_Raid_-_USS_Hornet.jpg',
        description: 'Pe 18 aprilie, 16 bombardiere B-25, lansate de pe portavionul USS Hornet, efectuează primul raid aerian american care a lovit insulele natale japoneze. Deși cu impact militar redus, a fost o victorie morală majoră pentru SUA.',
        context: 'După Pearl Harbor și o serie de înfrângeri, moralul american era la pământ. Raidul a fost conceput ca o acțiune îndrăzneață pentru a demonstra că Japonia nu era invulnerabilă și pentru a ridica moralul pe frontul intern.',
        figures: [
            { name: 'Locotenent-colonelul James "Jimmy" Doolittle', role: 'A planificat și condus raidul' }
        ],
        impact: 'A avut un efect psihologic disproporționat de mare. I-a forțat pe japonezi să-și retragă unități de luptă pentru a apăra teritoriul național și a fost unul dintre factorii care i-au convins să atace Midway, ducând la înfrângerea lor decisivă.'
    },
    {
        type: 'major',
        year: 1942,
        title: 'Bătălia din Marea Coralilor',
        lat: -15.0,
        lng: 150.0,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/USS_Lexington_explodes.jpg/800px-USS_Lexington_explodes.jpg',
        description: 'În mai, prima bătălie navală din istorie purtată exclusiv de avioane de pe portavioane; navele inamice nu s-au văzut niciodată. A fost o victorie strategică aliată, deoarece a oprit invazia japoneză a Port Moresby, Noua Guinee.',
        context: 'Japonezii încercau să izoleze Australia prin capturarea Port Moresby. Datorită interceptării comunicațiilor, forțele americane au putut trimite o flotă de portavioane pentru a contracara forța de invazie japoneză.',
        figures: [
            { name: 'Amiralul Frank Jack Fletcher', role: 'Comandantul forței operative americane' }
        ],
        impact: 'Deși americanii au pierdut portavionul USS Lexington, bătălia a oprit pentru prima dată o ofensivă japoneză. Pierderea a două portavioane japoneze (unul scufundat, unul avariat) le-a împiedicat să participe la Bătălia de la Midway luna următoare, contribuind la victoria americană.'
    },
    {
        type: 'major',
        year: 1942,
        title: 'Campania din Guadalcanal',
        lat: -9.5843,
        lng: 160.1562,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Guadalcanal_Marines.jpg/800px-Guadalcanal_Marines.jpg',
        description: 'Începând cu 7 august, prima ofensivă terestră majoră a Aliaților în Pacific. Șase luni de lupte brutale pe uscat, pe mare și în aer se încheie cu o victorie aliată care asigură o bază strategică vitală.',
        context: 'Pușcașii marini americani au debarcat pentru a captura un aerodrom în construcție de către japonezi, care ar fi amenințat liniile de comunicație dintre SUA și Australia. Bătălia s-a transformat într-o campanie de uzură sângeroasă.',
        figures: [
            { name: 'Generalul Alexander Vandegrift', role: 'Comandantul Diviziei 1 de Pușcași Marini' }
        ],
        impact: 'A fost un punct de cotitură în războiul terestru din Pacific. A oprit expansiunea japoneză în sud și a marcat începutul lungii campanii de "island hopping" (salturi din insulă în insulă) a Aliaților spre Japonia.'
    },
    {
        type: 'minor',
        year: 1942,
        title: 'Raidul de la Dieppe',
        lat: 49.9229,
        lng: 1.0774,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Landing_craft_at_Dieppe_1942.jpg/800px-Landing_craft_at_Dieppe_1942.jpg',
        description: 'Pe 19 august, un raid amfibiu dezastruos al forțelor canadiene, menit să testeze apărarea germană și să adune informații. Lecțiile dureroase, dar esențiale, învățate aici au fost cruciale pentru succesul debarcării din Normandia.',
        context: 'Aliații erau presați de Stalin să deschidă un al doilea front. Raidul a fost un compromis, o operațiune la scară mai mică pentru a testa fezabilitatea unei invazii pe scară largă. Planificarea a fost deficitară, iar apărarea germană subestimată.',
        figures: [
            { name: 'Louis Mountbatten', role: 'Șeful Operațiunilor Combinate, a susținut raidul' }
        ],
        impact: 'Raidul a fost un eșec total, cu pierderi uriașe (peste 60% din forța de debarcare). Cu toate acestea, a oferit lecții vitale despre necesitatea unui sprijin de foc copleșitor, a unor vehicule specializate și a unei planificări meticuloase, lecții aplicate în 1944.'
    },
    {
        type: 'major',
        year: 1942,
        title: 'A Doua Bătălie de la El Alamein',
        lat: 30.8222,
        lng: 28.9543,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Australian_25-pounder_gun_at_El_Alamein_1942.jpg/800px-Australian_25-pounder_gun_at_El_Alamein_1942.jpg',
        description: 'Între 23 octombrie - 11 noiembrie, Armata a 8-a britanică, sub comanda lui Montgomery, obține o victorie decisivă care oprește avansul Axei spre Egipt și marchează un punct de cotitură în Africa de Nord.',
        context: 'După o serie de victorii, Rommel a ajuns periculos de aproape de Alexandria. Montgomery a refuzat să atace până când nu a acumulat o superioritate copleșitoare în oameni și materiale, în special tancuri Sherman americane.',
        figures: [
            { name: 'Generalul Bernard Montgomery', role: 'Comandantul Armatei a 8-a britanice' },
            { name: 'Mareșalul Erwin Rommel', role: 'Comandantul Afrika Korps' }
        ],
        impact: 'A fost prima victorie terestră majoră a Aliaților occidentali și un punct de cotitură în Campania din Africa de Nord. Churchill a spus faimos: "Înainte de Alamein nu am avut nicio victorie. După Alamein nu am avut nicio înfrângere."'
    },
    {
        type: 'major',
        year: 1942,
        title: 'Operațiunea Torța',
        lat: 36.7783,
        lng: 3.0588,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Operation_Torch_-_landings_at_Algiers_-_November_1942.jpg/800px-Operation_Torch_-_landings_at_Algiers_-_November_1942.jpg',
        description: 'Pe 8 noiembrie, debarcări amfibii masive anglo-americane în Algeria și Maroc. După o scurtă rezistență, forțele franceze de la Vichy se alătură Aliaților, deschizând un nou front în spatele forțelor Axei din Tunisia.',
        context: 'A fost prima operațiune amfibie majoră a SUA în teatrul european. Scopul era de a prinde forțele lui Rommel într-un clește, între armata lui Montgomery din est și noile forțe din vest.',
        figures: [
            { name: 'Generalul Dwight D. Eisenhower', role: 'Comandantul suprem al operațiunii' },
            { name: 'Amiralul François Darlan', role: 'Comandantul forțelor de la Vichy, a ordonat încetarea focului' }
        ],
        impact: 'Operațiunea a fost un succes, ducând la capitularea finală a forțelor Axei în Africa de Nord în mai 1943. A oferit trupelor americane o experiență de luptă valoroasă și a deschis calea pentru invazia Siciliei.'
    }
],

    '1943': [
    {
        type: 'major',
        year: 1943,
        title: 'Revolta din Ghetoul din Varșovia',
        lat: 52.2497,
        lng: 20.9944,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Warsaw_Ghetto_Uprising_-_Stroop_Report_-_cover.jpg/800px-Warsaw_Ghetto_Uprising_-_Stroop_Report_-_cover.jpg',
        description: 'Un act de rezistență armată eroic, dar sortit eșecului, al luptătorilor evrei din ghetoul din Varşovia împotriva deportărilor finale către lagărul de exterminare Treblinka. A fost cel mai mare şi mai important act de rezistență armată evreiască din timpul Holocaustului.',
        context: 'După ce majoritatea locuitorilor ghetoului fuseseră deja deportați în 1942, luptătorii rămaşi, organizați în ŻOB și ŻZW, au decis să lupte până la moarte în loc să se supună pasiv deportării, folosind arme de contrabandă și cocktailuri Molotov.',
        figures: [
            { name: 'Mordechai Anielewicz', role: 'Comandantul Organizației Evreiești de Luptă (ŻOB)' },
            { name: 'Jürgen Stroop', role: 'General SS care a condus suprimarea brutală a revoltei' }
        ],
        impact: 'Deşi înfrânţi militar, luptătorii au rezistat aproape o lună, mai mult decât unele state naționale. Revolta a devenit un simbol universal al curajului și al luptei pentru demnitate în fața anihilării. Ca represalii, Stroop a ordonat distrugerea sistematică a ghetoului, clădire cu clădire.'
    },
    {
        type: 'major',
        year: 1943,
        title: 'Bombardamentele Aliate asupra României (Operațiunea Tidal Wave)',
        lat: 44.9333,
        lng: 26.0167,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Operation_Tidal_Wave_bombing_of_Ploesti_Romania.jpg',
        description: 'Pe 1 august, un raid aerian masiv şi îndrăzneţ lansat de forțele aeriene americane (USAAF) împotriva rafinăriilor de petrol de la Ploieşti. A fost unul dintre cele mai faimoase şi costisitoare raiduri aeriene ale războiului.',
        context: 'Rafinăriile de la Ploieşti erau o țintă strategică vitală, furnizând aproximativ o treime din necesarul de petrol al maşinii de război naziste. Aliații sperau că distrugerea acestora va paraliza mobilitatea armatei germane.',
        figures: [
            { name: 'Colonelul Jacob E. Smart', role: 'Unul dintre principalii planificatori ai raidului' }
        ],
        impact: 'Deşi unele rafinării au fost avariate, raidul a fost un eşec tactic costisitor, cu pierderi mari de avioane și personal. Apărarea antiaeriană germano-română s-a dovedit extrem de eficientă. Cu toate acestea, campania de bombardamente a continuat în 1944, contribuind la decizia României de a părăsi Axa.'
    },
    {
        type: 'minor',
        year: 1943,
        title: 'Conferința de la Casablanca',
        lat: 33.5731,
        lng: -7.5898,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Casablanca_Conference_1943.jpg/800px-Casablanca_Conference_1943.jpg',
        description: 'În ianuarie, o întâlnire strategică între Roosevelt și Churchill unde a fost stabilită strategia aliată pentru anul următor și anunțată politica de "capitulare necondiționată" a Axei.',
        context: 'Conferința a avut loc după succesele din Africa de Nord (Operațiunea Torța) și Stalingrad. Aliații trebuiau să decidă următorul pas. S-a hotărât invadarea Siciliei și intensificarea bombardamentelor strategice asupra Germaniei.',
        figures: [
            { name: 'Franklin D. Roosevelt', role: 'Președintele SUA' },
            { name: 'Winston Churchill', role: 'Prim-ministrul Marii Britanii' }
        ],
        impact: 'Politica de "capitulare necondiționată" a avut un impact major. A întărit coeziunea Marii Alianțe, dar a fost folosită și de propaganda nazistă pentru a convinge poporul german să lupte până la capăt.'
    },
    {
        type: 'major',
        year: 1943,
        title: 'Capitularea Germană la Stalingrad',
        lat: 48.7080,
        lng: 44.5133,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bundesarchiv_Bild_183-J0128-0502-003%2C_Russland%2C_Kapitulation_Stalingrad%2C_Paulus.jpg/800px-Bundesarchiv_Bild_183-J0128-0502-003%2C_Russland%2C_Kapitulation_Stalingrad%2C_Paulus.jpg',
        description: 'Pe 2 februarie, ultimele unități ale Armatei a 6-a germane, conduse de Mareșalul Paulus, se predau. Peste 91.000 de soldați sunt luați prizonieri. Victoria sovietică este un punct de cotitură psihologic și strategic major.',
        context: 'După ce au fost încercuiți în noiembrie 1942, soldații germani au fost lăsați de Hitler să moară de foame și de frig, interzicându-le să încerce să spargă încercuirea. Podul aerian promis de Göring a fost un eșec total.',
        figures: [
            { name: 'Friedrich Paulus', role: 'Mareșal german, primul din istorie care s-a predat' },
            { name: 'Generalul Vasili Ciuikov', role: 'Comandantul Armatei 62 sovietice' }
        ],
        impact: 'A fost un dezastru militar și psihologic colosal pentru Germania. A marcat punctul de cotitură pe Frontul de Est, de la care Germania nu a mai putut decât să se retragă. A spulberat mitul invincibilității Wehrmacht-ului.'
    },
    {
        type: 'atrocity',
        year: 1943,
        title: 'Lichidarea Ghetoului din Cracovia',
        lat: 50.0497,
        lng: 19.9445,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Krakow_Ghetto_liquidation.jpg/800px-Krakow_Ghetto_liquidation.jpg',
        description: 'Pe 13-14 martie, SS și poliția germană lichidează ghetoul. Mii de evrei considerați inapți pentru muncă sunt uciși în timpul operațiunii, iar restul sunt deportați în lagărele Płaszów și Auschwitz.',
        context: 'Ghetoul din Cracovia a fost unul dintre cele cinci ghetouri majore din Polonia. Lichidarea sa a făcut parte din Operațiunea Reinhard, planul de exterminare a evreilor polonezi.',
        figures: [
            { name: 'Amon Göth', role: 'Comandantul lagărului Płaszów, a supervizat lichidarea' }
        ],
        impact: 'A dus la anihilarea aproape completă a uneia dintre cele mai vechi și mai importante comunități evreiești din Polonia. Evenimentele au fost documentate în filmul "Lista lui Schindler".'
    },
    {
        type: 'major',
        year: 1943,
        title: 'Capitularea Axei în Tunisia',
        lat: 36.8065,
        lng: 10.1815,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/German_and_Italian_prisoners_in_Tunisia_1943.jpg/800px-German_and_Italian_prisoners_in_Tunisia_1943.jpg',
        description: 'Pe 13 mai, forțele Axei din Africa de Nord, prinse între două armate aliate, capitulează. Aproximativ 275.000 de soldați germani și italieni sunt luați prizonieri, deschizând calea pentru invazia Siciliei.',
        context: 'După debarcările din Operațiunea Torța și victoria de la El Alamein, forțele germano-italiene au fost prinse într-un clește în Tunisia. În ciuda unei rezistențe inițiale puternice, au fost copleșite numeric și au rămas fără provizii.',
        figures: [
            { name: 'Generalul Hans-Jürgen von Arnim', role: 'Comandantul german care s-a predat' }
        ],
        impact: 'A pus capăt Campaniei din Africa de Nord. A eliberat coasta nord-africană și a asigurat controlul aliat asupra Mediteranei, permițând lansarea invaziei Italiei.'
    },
    {
        type: 'major',
        year: 1943,
        title: 'Bătălia de la Kursk',
        lat: 51.7301,
        lng: 36.1911,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bundesarchiv_Bild_101I-221-0616-24%2C_Russland%2C_Schlacht_um_Kursk%2C_Panzer_VI_%28Tiger_I%29.jpg/800px-Bundesarchiv_Bild_101I-221-0616-24%2C_Russland%2C_Schlacht_um_Kursk%2C_Panzer_VI_%28Tiger_I%29.jpg',
        description: 'În iulie-august, cea mai mare bătălie de tancuri din istorie. O ofensivă masivă germană (Operațiunea Citadela) este oprită de o apărare sovietică în adâncime, bine pregătită, marcând sfârșitul definitiv al ofensivei strategice germane pe Frontul de Est.',
        context: 'După înfrângerea de la Stalingrad, germanii au încercat să recâștige inițiativa printr-un atac masiv asupra proeminenței de la Kursk. Sovieticii, însă, cunoșteau planurile germane prin spionaj și au construit fortificații defensive formidabile.',
        figures: [
            { name: 'Mareșalul Erich von Manstein', role: 'Comandant german al Grupului de Armate Sud' },
            { name: 'Mareșalul Gheorghi Jukov', role: 'A coordonat apărarea și contraofensiva sovietică' }
        ],
        impact: 'Victoria sovietică a fost decisivă. Wehrmacht-ul a suferit pierderi irecuperabile în unitățile de tancuri de elită și nu a mai putut lansa nicio ofensivă strategică majoră în est. Inițiativa a trecut definitiv și irevocabil de partea Armatei Roșii.'
    },
    {
        type: 'major',
        year: 1943,
        title: 'Invazia Aliată a Siciliei (Husky)',
        lat: 37.0696,
        lng: 15.2052,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Operation_Husky_-_Landing_craft_approach_the_Sicilian_coast_in_July_1943.jpg/800px-Operation_Husky_-_Landing_craft_approach_the_Sicilian_coast_in_July_1943.jpg',
        description: 'Pe 10 iulie, forțele aliate anglo-americane debarcă în Sicilia. Campania se încheie cu succes, deschizând "pântecele moale" al Europei și accelerând prăbușirea regimului fascist din Italia.',
        context: 'După victoria din Africa de Nord, Aliații au decis să invadeze Italia prin Sicilia pentru a elimina Italia din război, a securiza Mediterana și a forța Germania să devieze trupe de pe alte fronturi.',
        figures: [
            { name: 'Generalul Dwight D. Eisenhower', role: 'Comandantul suprem aliat' },
            { name: 'Generalul George S. Patton', role: 'Comandantul Armatei a 7-a americane' },
            { name: 'Generalul Bernard Montgomery', role: 'Comandantul Armatei a 8-a britanice' }
        ],
        impact: 'Succesul invaziei a dus direct la demiterea și arestarea lui Benito Mussolini de către Marele Consiliu Fascist pe 25 iulie. Noul guvern italian a început negocieri secrete de armistițiu cu Aliații.'
    },
    {
        type: 'minor',
        year: 1943,
        title: 'Armistițiul cu Italia',
        lat: 37.0696,
        lng: 15.2052,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Signature_of_the_Italian_armistice_at_Cassibile.jpg/800px-Signature_of_the_Italian_armistice_at_Cassibile.jpg',
        description: 'Pe 3 septembrie, noul guvern italian condus de Pietro Badoglio semnează un armistițiu cu Aliații. Germania reacționează imediat prin Operațiunea Achse, ocupând nordul și centrul Italiei și dezarmând armata italiană.',
        context: 'După demiterea lui Mussolini, guvernul Badoglio a pretins public că va continua lupta alături de Germania, în timp ce negocia în secret cu Aliații. Anunțul public al armistițiului pe 8 septembrie a aruncat armata italiană în haos.',
        figures: [
            { name: 'Pietro Badoglio', role: 'Prim-ministrul Italiei' }
        ],
        impact: 'A dus la scoaterea Italiei din Axă, dar și la un război civil de facto între forțele loiale noului guvern și fasciștii loiali lui Mussolini (eliberat de germani). A început o campanie aliată lungă și sângeroasă pentru eliberarea Italiei.'
    },
    {
        type: 'atrocity',
        year: 1943,
        title: 'Revolta de la Sobibor',
        lat: 51.4469,
        lng: 23.5931,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sobibor_uprising_memorial.jpg/800px-Sobibor_uprising_memorial.jpg',
        description: 'Pe 14 octombrie, o revoltă organizată în lagărul de exterminare Sobibór, condusă de ofițerul sovietic Alexander Pechersky. Prizonierii ucid mai mulți ofițeri SS și paznici ucraineni. Aproximativ 300 de prizonieri reușesc să evadeze.',
        context: 'Prizonierii știau că, odată ce transporturile de evrei se vor opri, vor fi și ei uciși. Revolta a fost planificată meticulos pentru a atrage și ucide ofițerii SS unul câte unul, înainte de a lansa un asalt asupra porților.',
        figures: [
            { name: 'Alexander Pechersky', role: 'Ofițer sovietic, liderul revoltei' },
            { name: 'Leon Feldhendler', role: 'Lider al rezistenței subterane din lagăr' }
        ],
        impact: 'A fost una dintre cele mai de succes revolte dintr-un lagăr de exterminare. Ca urmare a revoltei, naziștii au decis să închidă și să demoleze lagărul pentru a șterge orice urmă a crimelor comise acolo.'
    },
    {
        type: 'major',
        year: 1943,
        title: 'Conferința de la Teheran',
        lat: 35.6892,
        lng: 51.3890,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tehran_Conference%2C_1943.jpg/800px-Tehran_Conference%2C_1943.jpg',
        description: 'În noiembrie-decembrie, prima întâlnire a "Celor Trei Mari" (Roosevelt, Churchill și Stalin). Se ia decizia finală pentru deschiderea unui al doilea front în vestul Europei (Operațiunea Overlord) în mai/iunie 1944.',
        context: 'Conferința a avut loc după victorii aliate decisive (Stalingrad, Kursk, Africa de Nord). Stalin a presat puternic pentru deschiderea celui de-al doilea front, promis încă din 1942, pentru a slăbi presiunea asupra Frontului de Est.',
        figures: [
            { name: 'Franklin D. Roosevelt', role: 'Președintele SUA' },
            { name: 'Winston Churchill', role: 'Prim-ministrul Marii Britanii' },
            { name: 'Iosif Stalin', role: 'Liderul Uniunii Sovietice' }
        ],
        impact: 'A fost un moment crucial în coordonarea strategiei aliate. Decizia de a lansa Overlord a stabilit cursul final al războiului în Europa. S-au discutat și planuri postbelice, inclusiv soarta Germaniei și crearea Națiunilor Unite, prefigurând divizarea Europei.'
    }
],

    '1944': [
    {
        type: 'major',
        year: 1944,
        title: 'Lovitura de stat de la 23 august',
        lat: 44.4396,
        lng: 26.0963,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/King_Michael_of_Romania_in_1940s.jpg/800px-King_Michael_of_Romania_in_1940s.jpg',
        description: 'Regele Mihai I, sprijinit de liderii partidelor politice istorice şi de ofiţeri superiori ai armatei, l-a arestat pe mareşalul Ion Antonescu şi a anunţat ieşirea României din alianța cu Axa şi alăturarea sa la Coaliția Națiunilor Unite.',
        context: 'În vara anului 1944, cu frontul prăbuşindu-se sub ofensiva sovietică masivă Iași-Chișinău și cu ţara devastată de bombardamente, devenise clar că alianța cu Germania ducea la un dezastru total. Regele şi opoziția democratică au decis să acționeze.',
        figures: [
            { name: 'Regele Mihai I', role: 'Monarhul României, a condus lovitura de stat' },
            { name: 'Ion Antonescu', role: 'Conducătorul statului, a fost arestat' },
            { name: 'Iuliu Maniu, Dinu Brătianu', role: 'Liderii partidelor istorice care au sprijinit actul' }
        ],
        impact: 'Actul de la 23 august a scurtat războiul cu aproximativ şase luni, salvând sute de mii de vieți. A deschis porțile Balcanilor pentru Armata Roşie, dar a însemnat pentru România şi începutul ocupației sovietice, care va duce la instaurarea comunismului.'
    },
    {
        type: 'major',
        year: 1944,
        title: 'Bătălia de la Monte Cassino',
        lat: 41.4906,
        lng: 13.8136,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Monte_Cassino_bombing_15_February_1944.jpg/800px-Monte_Cassino_bombing_15_February_1944.jpg',
        description: 'O serie de patru asalturi aliate sângeroase (ianuarie-mai) asupra Liniei Gustav. Linia este în cele din urmă străpunsă de Corpul Polonez II și forțele coloniale franceze, deschizând drumul spre Roma.',
        context: 'Mănăstirea istorică de la Monte Cassino domina strategic valea Liri, o rută cheie spre Roma. Deși germanii nu o ocupaseră inițial, Aliații au bombardat-o controversat, crezând că este folosită ca post de observație. După bombardament, parașutiștii germani au ocupat ruinele, transformându-le într-o fortăreață formidabilă.',
        figures: [
            { name: 'Generalul Władysław Anders', role: 'Comandantul Corpului Polonez II' },
            { name: 'Generalul Mark Clark', role: 'Comandantul Armatei a 5-a americane' }
        ],
        impact: 'A fost una dintre cele mai costisitoare bătălii ale campaniei din Italia, cu pierderi grele de ambele părți. Străpungerea Liniei Gustav a permis în cele din urmă eliberarea Romei în iunie 1944.'
    },
    {
        type: 'atrocity',
        year: 1944,
        title: 'Deportarea evreilor maghiari',
        lat: 47.4979,
        lng: 19.0402,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_May_1944.jpg/800px-Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_May_1944.jpg',
        description: 'Între mai și iulie, după ocuparea Ungariei de către Germania, aproximativ 440.000 de evrei sunt deportați, majoritatea la Auschwitz. Aceasta este una dintre cele mai rapide și mai mari operațiuni de exterminare din timpul Holocaustului.',
        context: 'Deși Ungaria era aliată a Germaniei, regentul Horthy a refuzat mult timp să predea populația evreiască. După ce Germania a ocupat Ungaria în martie 1944 pentru a preveni ieșirea acesteia din război, Adolf Eichmann a fost trimis la Budapesta pentru a organiza deportările cu o eficiență brutală, cu sprijinul autorităților maghiare.',
        figures: [
            { name: 'Adolf Eichmann', role: 'A organizat și supervizat deportările' },
            { name: 'Miklós Horthy', role: 'Regentul Ungariei, a oprit deportările în iulie sub presiune internațională' }
        ],
        impact: 'A dus la anihilarea aproape totală a comunității evreiești din Ungaria rurală. A fost ultima mare comunitate evreiască distrusă în Holocaust, într-un moment în care soarta războiului era deja decisă.'
    },
    {
        type: 'major',
        year: 1944,
        title: 'Eliberarea Romei',
        lat: 41.9028,
        lng: 12.4964,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/American_troops_pass_the_Colosseum_in_Rome_1944.jpg/800px-American_troops_pass_the_Colosseum_in_Rome_1944.jpg',
        description: 'Pe 4 iunie, forțele Armatei a 5-a americane intră în Roma, prima capitală a Axei care este eliberată. Evenimentul este însă umbrit de iminenta debarcare din Normandia, care are loc două zile mai târziu.',
        context: 'După străpungerea Liniei Gustav la Monte Cassino, drumul spre Roma era deschis. Generalul american Mark Clark a ales să intre triumfal în Roma, în loc să încerce să încercuiască Armata a 10-a germană, permițându-i acesteia să se retragă spre nord.',
        figures: [
            { name: 'Generalul Mark Clark', role: 'Comandantul Armatei a 5-a americane' }
        ],
        impact: 'A fost o victorie simbolică și morală importantă pentru Aliați. Cu toate acestea, decizia lui Clark a prelungit campania din Italia, care a continuat să fie sângeroasă până la sfârșitul războiului.'
    },
    {
        type: 'major',
        year: 1944,
        title: 'Ziua Z: Debarcarea din Normandia (Overlord)',
        lat: 49.3400,
        lng: -0.5500,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Into_the_Jaws_of_Death_23-0455M_edit.jpg/800px-Into_the_Jaws_of_Death_23-0455M_edit.jpg',
        description: 'Pe 6 iunie, în cea mai mare invazie amfibie din istorie, peste 156.000 de soldați aliați debarcă pe cinci plaje din Normandia (Utah, Omaha, Gold, Juno, Sword), deschizând un al doilea front major în Europa de Vest și începând eliberarea Franței.',
        context: 'După luni de planificare și o operațiune masivă de dezinformare (Operațiunea Fortitude), Aliații au lansat atacul promis lui Stalin la Teheran. Succesul depindea de obținerea unui cap de pod sigur în prima zi.',
        figures: [
            { name: 'Generalul Dwight D. Eisenhower', role: 'Comandantul Suprem Aliat' },
            { name: 'Mareșalul Erwin Rommel', role: 'Comandant german responsabil de apărarea Zidului Atlanticului' }
        ],
        impact: 'Debarcarea a fost un succes, deși cu pierderi grele (în special pe plaja Omaha). A marcat începutul sfârșitului pentru Germania Nazistă, forțând-o să lupte un război major pe două fronturi, pe care nu-l putea susține.'
    },
    {
        type: 'major',
        year: 1944,
        title: 'Operațiunea Bagration',
        lat: 53.9000,
        lng: 27.5667,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/RIAN_archive_40166_Minsk_Offensive_Operation.jpg/800px-RIAN_archive_40166_Minsk_Offensive_Operation.jpg',
        description: 'O ofensivă masivă sovietică în Belarus (iunie-august) care a distrus complet Grupul de Armate Centru german, provocând cele mai mari pierderi Germaniei într-o singură operațiune și accelerând colapsul Frontului de Est.',
        context: 'Lansată la 22 iunie, exact la trei ani de la începutul Operațiunii Barbarossa, ofensiva sovietică a folosit tactici de dezinformare (maskirovka) pentru a ascunde amploarea și direcția principală a atacului.',
        figures: [
            { name: 'Mareșalul Konstantin Rokossovsky', role: 'Unul dintre principalii comandanți sovietici' },
            { name: 'Mareșalul Ernst Busch', role: 'Comandantul Grupului de Armate Centru' }
        ],
        impact: 'A fost o înfrângere catastrofală pentru Wehrmacht, mai mare decât cea de la Stalingrad. A deschis calea Armatei Roșii spre Polonia și granițele Germaniei, distrugând orice speranță a Germaniei de a stabiliza frontul.'
    },
    {
        type: 'major',
        year: 1944,
        title: 'Eliberarea Parisului',
        lat: 48.8566,
        lng: 2.3522,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Leclerc_in_Paris_1944.jpg/800px-Leclerc_in_Paris_1944.jpg',
        description: 'Pe 25 august, după o insurecție a Rezistenței Franceze, Divizia a 2-a Blindată franceză a generalului Leclerc și forțele americane intră în Paris. Comandantul german sfidează ordinele lui Hitler de a distruge orașul și se predă.',
        context: 'Pe măsură ce forțele aliate se apropiau, Rezistența Franceză a declanșat o insurecție în oraș. Pentru a preveni o baie de sânge și distrugerea orașului, Eisenhower a fost convins de Charles de Gaulle să trimită trupe pentru a elibera capitala.',
        figures: [
            { name: 'Generalul Charles de Gaulle', role: 'Liderul Franței Libere' },
            { name: 'Generalul Philippe Leclerc', role: 'Comandantul Diviziei a 2-a Blindate franceze' },
            { name: 'Generalul Dietrich von Choltitz', role: 'Comandantul german al Parisului' }
        ],
        impact: 'A fost o victorie simbolică uriașă, marcând eliberarea Franței de sub ocupația nazistă. A restabilit onoarea națională franceză și l-a consolidat pe de Gaulle ca lider al Franței postbelice.'
    },
    {
        type: 'major',
        year: 1944,
        title: 'Revolta din Varșovia',
        lat: 52.2297,
        lng: 21.0122,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Warsaw_Uprising_by_Polski_Zolnierz.jpg/800px-Warsaw_Uprising_by_Polski_Zolnierz.jpg',
        description: 'Pe 1 august, Rezistența poloneză (Armata Teritorială) lansează o insurecție pentru a elibera Varșovia. Stalin oprește înaintarea sovietică la porțile orașului, permițând germanilor să zdrobească revolta după 63 de zile de lupte, distrugând sistematic orașul.',
        context: 'Armata Teritorială (Armia Krajowa), loială guvernului polonez în exil de la Londra, a dorit să elibereze capitala pentru a preveni instaurarea unui regim comunist de către sovietici. Ei se așteptau la ajutor din partea Armatei Roșii, care se apropia.',
        figures: [
            { name: 'Generalul Tadeusz Bór-Komorowski', role: 'Comandantul Armatei Teritoriale' },
            { name: 'Iosif Stalin', role: 'A oprit deliberat ofensiva sovietică' }
        ],
        impact: 'A fost o tragedie națională poloneză. Peste 200.000 de civili au fost uciși, iar orașul a fost distrus. Eșecul revoltei a permis comuniștilor, susținuți de sovietici, să preia controlul Poloniei după război.'
    },
    {
        type: 'minor',
        year: 1944,
        title: 'Operațiunea Market Garden',
        lat: 51.8126,
        lng: 5.8372,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/British_paratroopers_at_Arnhem_1944.jpg/800px-British_paratroopers_at_Arnhem_1944.jpg',
        description: 'În septembrie, un plan aliat îndrăzneț de a cuceri o serie de poduri în Olanda cu forțe aeropurtate pentru a pătrunde în Germania și a termina războiul până la Crăciun. Operațiunea eșuează la ultimul pod, cel de la Arnhem ("un pod prea îndepărtat").',
        context: 'Concepută de Mareșalul Montgomery, operațiunea a fost un pariu riscant care combina cea mai mare operațiune aeropurtată din istorie (Market) cu un avans rapid al forțelor terestre (Garden).',
        figures: [
            { name: 'Mareșalul Bernard Montgomery', role: 'Arhitectul operațiunii' },
            { name: 'Generalul-locotenent Frederick Browning', role: 'Comandantul Corpului I Aeropurtat Aliat' }
        ],
        impact: 'Eșecul a spulberat speranțele unei victorii rapide în 1944. A dus la pierderi grele, în special pentru Divizia 1 Aeropurtată Britanică la Arnhem, și a lăsat nordul Olandei sub ocupație nazistă, ducând la o iarnă a foametei.'
    },
    {
        type: 'major',
        year: 1944,
        title: 'Bătălia din Golful Leyte',
        lat: 10.8700,
        lng: 125.4550,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/USS_St._Lo_%28CVE-63%29_is_hit_by_a_kamikaze_off_Samar_on_25_October_1944.jpg/800px-USS_St._Lo_%28CVE-63%29_is_hit_by_a_kamikaze_off_Samar_on_25_October_1944.jpg',
        description: 'În octombrie, considerată cea mai mare bătălie navală din istorie, a fost o victorie decisivă a Aliaților care a paralizat marina imperială japoneză și a deschis calea pentru eliberarea Filipinelor. Aici au fost folosite pentru prima dată pe scară largă atacurile kamikaze.',
        context: 'Marina japoneză a lansat un plan complex și disperat pentru a distruge flota americană care sprijinea debarcările din Filipine. Planul a eșuat din cauza complexității sale și a superiorității copleșitoare a forțelor americane.',
        figures: [
            { name: 'Amiralul William "Bull" Halsey', role: 'Comandantul Flotei a 3-a americane' },
            { name: 'Amiralul Jisaburō Ozawa', role: 'Comandantul forței de portavioane japoneze (folosită ca momeală)' }
        ],
        impact: 'După această bătălie, Marina Imperială Japoneză a încetat să mai fie o forță de luptă eficientă. Eliberarea Filipinelor a devenit inevitabilă, tăind Japonia de resursele vitale din Asia de Sud-Est.'
    },
    {
        type: 'major',
        year: 1944,
        title: 'Bătălia de la Bulge (Ofensiva din Ardeni)',
        lat: 50.17,
        lng: 6.05,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/American_soldiers_of_the_289th_Infantry_Regiment_march_through_a_snow-covered_forest_in_the_vicinity_of_Amonines%2C_Belgium_-_NARA_-_531201.jpg/800px-American_soldiers_of_the_289th_Infantry_Regiment_march_through_a_snow-covered_forest_in_the_vicinity_of_Amonines%2C_Belgium_-_NARA_-_531201.jpg',
        description: 'În decembrie, ultima ofensivă majoră a Germaniei pe Frontul de Vest. Un atac surpriză prin Ardeni a creat o "pungă" în liniile aliate, dar a eșuat din cauza rezistenței americane tenace (ex. la Bastogne) și a intervenției aviației aliate.',
        context: 'Hitler a mizat pe un atac surpriză în timpul iernii pentru a diviza forțele aliate, a captura portul Anvers și a forța o pace negociată. Ofensiva a surprins total forțele americane, care erau slab pregătite în acest sector considerat "liniștit".',
        figures: [
            { name: 'Generalul Anthony McAuliffe', role: 'Comandant american la Bastogne, faimos pentru răspunsul "Nuts!"' },
            { name: 'Mareșalul Gerd von Rundstedt', role: 'Comandantul nominal al ofensivei germane' }
        ],
        impact: 'Eșecul ofensivei a fost devastator pentru Germania. A epuizat ultimele rezerve de oameni și echipament, lăsând frontul de vest vulnerabil și accelerând înfrângerea finală a Germaniei.'
    }
],
'1945': [
    {
        type: 'major',
        year: 1945,
        title: 'Lupta Armatei Române pe Frontul de Vest',
        lat: 47.4979,
        lng: 19.0402,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Romanian_soldiers_in_Budapest_1945.jpg/800px-Romanian_soldiers_in_Budapest_1945.jpg',
        description: 'După 23 august 1944, Armata Română a luptat alături de Armata Sovietică împotriva forţelor germane şi maghiare, participând la eliberarea Transilvaniei de Nord şi continuând lupta în Ungaria (Bătălia pentru Budapesta), Cehoslovacia și Austria, până la sfârșitul războiului.',
        context: 'Conform convenţiei de armistițiu, România era obligată să participe la efortul de război aliat. Armata română, deşi epuizată şi prost tratată de către "aliaţii" sovietici (care au luat sute de mii de prizonieri după 23 august), a luptat cu determinare.',
        figures: [
            { name: 'Generalul Gheorghe Avramescu', role: 'Unul dintre comandanții români de pe acest front, arestat ulterior de sovietici' }
        ],
        impact: 'Contribuția militară a României a fost semnificativă, fiind a patra putere aliată ca număr de trupe angajate în luptă. Cu toate acestea, la Conferința de Pace, României nu i s-a acordat statutul de co-beligerant, ci a fost tratată ca un stat învins, rămânând sub ocupație sovietică.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Impunerea guvernului Petru Groza',
        lat: 44.4396,
        lng: 26.0963,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Petru_Groza_government.jpg/800px-Petru_Groza_government.jpg',
        description: 'Pe 6 martie, sub presiunea directă a Uniunii Sovietice, reprezentată de Andrei Vişinski, Regele Mihai I a fost forțat să numească un guvern pro-comunist condus de Petru Groza.',
        context: 'Profitând de prezenţa Armatei Roşii, Partidul Comunist Român, mic, dar sprijinit de Moscova, a orchestrat o campanie de destabilizare. Vişinski i-a dat un ultimatum Regelui, ameninţând cu dispariţia României ca stat independent.',
        figures: [
            { name: 'Regele Mihai I', role: 'A fost forțat să accepte numirea' },
            { name: 'Petru Groza', role: 'Liderul Frontului Plugarilor, o figură de faţadă' },
            { name: 'Andrei Vişinski', role: 'Comisar adjunct sovietic pentru afaceri externe' }
        ],
        impact: 'Acest eveniment a marcat începutul preluării puterii de către comunişti în România. Comuniştii au controlat ministerele cheie (Interne, Justiție), pe care le-au folosit pentru a elimina opoziția politică, a falsifica alegerile din 1946 şi a instaura un regim totalitar.'
    },
    {
        type: 'atrocity',
        year: 1945,
        title: 'Eliberarea Lagărului Auschwitz',
        lat: 50.0264,
        lng: 19.2094,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Liberation_of_Auschwitz.jpg/800px-Liberation_of_Auschwitz.jpg',
        description: 'Pe 27 ianuarie, trupele sovietice eliberează Auschwitz, găsind aproximativ 7.000 de prizonieri bolnavi și muribunzi. Eliberarea expune lumii, la scară largă, realitatea industrializată a genocidului nazist.',
        context: 'Cu câteva zile înainte de sosirea sovieticilor, SS-ul a evacuat forțat aproape 60.000 de prizonieri în "marșurile morții" spre alte lagăre din Germania, ucigând mii de oameni pe drum. Au încercat să distrugă camerele de gazare și crematoriile pentru a ascunde crimele.',
        figures: [
            { name: 'Primo Levi, Elie Wiesel', role: 'Supraviețuitori faimoși care au scris despre experiențele lor' }
        ],
        impact: 'Imaginile și mărturiile de la Auschwitz au devenit dovezi incontestabile ale Holocaustului și un simbol universal al răului absolut. Data de 27 ianuarie este acum Ziua Internațională de Comemorare a Victimelor Holocaustului.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Conferința de la Ialta',
        lat: 44.4994,
        lng: 34.1697,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg/800px-Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg',
        description: 'În februarie, a doua întâlnire a "Celor Trei Mari" (Roosevelt, Churchill și Stalin) pentru a discuta despre reorganizarea postbelică a Europei, inclusiv împărțirea Germaniei în zone de ocupație, frontierele Poloniei și intrarea URSS în războiul împotriva Japoniei.',
        context: 'Conferința a avut loc într-un moment în care victoria asupra Germaniei era iminentă. Armata Roșie controla deja o mare parte din Europa de Est, oferindu-i lui Stalin o poziție de negociere extrem de puternică.',
        figures: [
            { name: 'Franklin D. Roosevelt', role: 'Președintele SUA (în ultima sa conferință)' },
            { name: 'Winston Churchill', role: 'Prim-ministrul Marii Britanii' },
            { name: 'Iosif Stalin', role: 'Liderul Uniunii Sovietice' }
        ],
        impact: 'Acordurile de la Ialta au modelat harta Europei postbelice. Deși s-a convenit asupra unor "alegeri libere", conferința a fost ulterior criticată pentru că a consfințit controlul sovietic asupra Europei de Est, devenind o sursă majoră de tensiuni în Războiul Rece.'
    },
    {
        type: 'atrocity',
        year: 1945,
        title: 'Bombardarea Dresdei',
        lat: 51.0504,
        lng: 13.7373,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dresden-bombing-1945-aftermath-02.jpg/800px-Dresden-bombing-1945-aftermath-02.jpg',
        description: 'În februarie, într-una dintre cele mai controversate acțiuni ale războiului, raiduri aeriene masive aliate (britanice și americane) creează o furtună de foc care distruge centrul istoric al Dresdei și ucide zeci de mii de civili.',
        context: 'Justificarea militară a raidului este încă dezbătută. Aliații au susținut că Dresda era un important centru industrial și de transport. Criticii susțin că a fost un act de teroare disproporționat, orașul fiind plin de refugiați.',
        figures: [
            { name: 'Arthur "Bomber" Harris', role: 'Șeful Comandamentului de Bombardiere al RAF' }
        ],
        impact: 'A devenit un simbol al distrugerii războiului aerian și a ridicat întrebări morale despre bombardamentele strategice care vizau zone civile. Controversa privind numărul victimelor și necesitatea militară a raidului continuă și astăzi.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Bătălia de la Iwo Jima',
        lat: 24.7800,
        lng: 141.3200,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Raising_the_Flag_on_Iwo_Jima_by_Joe_Rosenthal_color_photo.jpg/800px-Raising_the_Flag_on_Iwo_Jima_by_Joe_Rosenthal_color_photo.jpg',
        description: 'În februarie-martie, pușcașii marini americani invadează mica insulă vulcanică. Bătălia este extrem de sângeroasă, dar aerodromurile de pe insulă se dovedesc vitale. Imaginea ridicării steagului pe Muntele Suribachi devine un simbol iconic.',
        context: 'Iwo Jima era importantă strategic deoarece aerodromurile sale puteau fi folosite ca baze pentru avioanele de vânătoare care escortau bombardierele B-29 în raidurile asupra Japoniei. Apărătorii japonezi, conduși de Generalul Kuribayashi, au construit o rețea vastă de buncăre și tuneluri.',
        figures: [
            { name: 'Generalul Tadamichi Kuribayashi', role: 'Comandantul apărării japoneze' }
        ],
        impact: 'A fost una dintre cele mai sângeroase bătălii din Pacific. A demonstrat determinarea fanatică a japonezilor de a lupta până la moarte, influențând calculele americane privind costul unei invazii a insulelor principale japoneze.'
    },
    {
        type: 'minor',
        year: 1945,
        title: 'Capturarea Podului de la Remagen',
        lat: 50.5786,
        lng: 7.2361,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Crossing_the_Rhine_at_the_Remagen_bridge.jpg/800px-Crossing_the_Rhine_at_the_Remagen_bridge.jpg',
        description: 'Pe 7 martie, trupele americane capturează intact Podul Ludendorff de peste Rin, după ce încercările germanilor de a-l distruge au eșuat. Această lovitură de noroc permite Aliaților să stabilească rapid un cap de pod.',
        context: 'Rinul era ultima barieră naturală majoră în calea spre inima Germaniei. Capturarea unui pod intact a fost o surpriză totală și un bonus strategic imens pentru Aliați.',
        figures: [
            { name: 'Generalul Courtney Hodges', role: 'Comandantul Armatei 1 americane' }
        ],
        impact: 'Generalul Eisenhower a numit podul "valorând greutatea sa în aur". A permis unui număr mare de trupe și echipamente să traverseze Rinul mult mai devreme decât se planificase, accelerând prăbușirea apărării germane în vest.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Bătălia de la Okinawa',
        lat: 26.2123,
        lng: 127.6792,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Okinawa_Marines_in_action.jpg/800px-Okinawa_Marines_in_action.jpg',
        description: 'În aprilie-iunie, ultima și cea mai mare bătălie din Pacific. Invazia americană întâmpină o rezistență japoneză fanatică, inclusiv atacuri kamikaze masive. Costul uman uriaș influențează decizia de a folosi bomba atomică.',
        context: 'Okinawa era ultima oprire înainte de o invazie a Japoniei. Capturarea sa ar fi oferit o bază aeriană și navală crucială pentru asaltul final. Bătălia a implicat și un număr mare de victime civile.',
        figures: [
            { name: 'Generalul Simon Bolivar Buckner Jr.', role: 'Comandant american, ucis în luptă' },
            { name: 'Generalul Mitsuru Ushijima', role: 'Comandantul japonez, s-a sinucis la finalul bătăliei' }
        ],
        impact: 'Numărul uriaș de pierderi americane (peste 50.000) și ferocitatea apărării japoneze i-au convins pe mulți lideri americani că o invazie a Japoniei ar costa un milion de vieți. Acest calcul a fost un factor major în decizia de a lansa bombele atomice.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Bătălia Berlinului',
        lat: 52.5200,
        lng: 13.4050,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Soviet_soldiers_raising_the_Soviet_flag_over_the_Reichstag_in_Berlin%2C_Germany%2C_on_May_2%2C_1945.jpg/800px-Soviet_soldiers_raising_the_Soviet_flag_over_the_Reichstag_in_Berlin%2C_Germany%2C_on_May_2%2C_1945.jpg',
        description: 'În aprilie-mai, ofensiva finală sovietică pentru capturarea capitalei Reich-ului. După lupte de o violență extremă, Armata Roșie cucerește orașul.',
        context: 'Stalin dorea cu ardoare să captureze Berlinul înaintea Aliaților occidentali, atât din motive de prestigiu, cât și pentru a asigura controlul asupra tehnologiei și programului nuclear german. Apărarea orașului era formată din unități disparate, inclusiv Tineretul Hitlerist și bătrâni.',
        figures: [
            { name: 'Mareșalul Gheorghi Jukov', role: 'Comandantul principal al asaltului sovietic' },
            { name: 'Generalul Helmuth Weidling', role: 'Comandantul apărării Berlinului, care a predat orașul' }
        ],
        impact: 'Căderea Berlinului a dus la sinuciderea lui Hitler pe 30 aprilie și la capitularea necondiționată a Germaniei câteva zile mai târziu, punând capăt războiului în Europa. Bătălia a lăsat orașul în ruine și a ucis sute de mii de oameni.'
    },
    {
        type: 'minor',
        year: 1945,
        title: 'Execuția lui Benito Mussolini',
        lat: 45.9818,
        lng: 9.2709,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mussolini_e_Petacci_a_Piazzale_Loreto%2C_1945.jpg/800px-Mussolini_e_Petacci_a_Piazzale_Loreto%2C_1945.jpg',
        description: 'Pe 28 aprilie, Mussolini și amanta sa, Clara Petacci, sunt capturați și executați de partizanii italieni în timp ce încercau să fugă în Elveția. Corpurile lor sunt expuse public în Piazzale Loreto din Milano.',
        context: 'După ce a fost înlăturat în 1943, Mussolini a fost instalat de germani ca lider al unui stat-marionetă în nordul Italiei (Republica de la Salò). Pe măsură ce forțele aliate și partizanii avansau, regimul său s-a prăbușit.',
        figures: [
            { name: 'Benito Mussolini', role: 'Fostul dictator al Italiei' },
            { name: 'Walter Audisio', role: 'Partizan comunist care a condus execuția' }
        ],
        impact: 'A marcat sfârșitul simbolic și ignominios al fascismului în Italia. Expunerea publică a cadavrelor a fost un act de furie populară împotriva a două decenii de dictatură și a dezastrului războiului.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Sinuciderea lui Adolf Hitler',
        lat: 52.5162,
        lng: 13.3777,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Reichskanzlei_after_the_war.jpg/800px-Reichskanzlei_after_the_war.jpg',
        description: 'Pe 30 aprilie, în buncărul său de sub Cancelaria Reich-ului (Führerbunker), înconjurat de forțele sovietice, Adolf Hitler se sinucide împreună cu soția sa, Eva Braun. Moartea sa marchează sfârșitul simbolic al celui de-al Treilea Reich.',
        context: 'Cu Berlinul pe punctul de a cădea și fiind informat de execuția lui Mussolini, Hitler a refuzat să fie capturat viu. Și-a dictat testamentul politic și s-a căsătorit cu Eva Braun înainte de a se sinucide.',
        figures: [
            { name: 'Adolf Hitler', role: 'Dictatorul Germaniei Naziste' },
            { name: 'Eva Braun', role: 'Partenera sa de lungă durată' }
        ],
        impact: 'A dus la capitularea forțelor germane din Berlin două zile mai târziu și la capitularea necondiționată a Germaniei pe 7-8 mai. A lăsat în urmă un continent în ruine și moștenirea Holocaustului.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Capitularea Germaniei (Ziua Victoriei în Europa)',
        lat: 49.2583,
        lng: 4.0317,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_German_Surrender_at_Reims%2C_7_May_1945.jpg/800px-The_German_Surrender_at_Reims%2C_7_May_1945.jpg',
        description: 'Pe 7 mai, la Reims, Franța, Generalul Alfred Jodl semnează capitularea necondiționată a tuturor forțelor germane. Ceremonia este repetată a doua zi la Berlin, la cererea sovieticilor. Războiul în Europa se încheie oficial la 8 mai.',
        context: 'După sinuciderea lui Hitler, succesorul său, Marele Amiral Karl Dönitz, a autorizat capitularea pentru a pune capăt vărsării de sânge și a încerca să salveze cât mai mulți soldați și civili de la capturarea de către sovietici.',
        figures: [
            { name: 'Generalul Alfred Jodl', role: 'A semnat capitularea la Reims' },
            { name: 'Mareșalul Wilhelm Keitel', role: 'A semnat capitularea la Berlin' },
            { name: 'Marele Amiral Karl Dönitz', role: 'Ultimul președinte al Germaniei Naziste' }
        ],
        impact: 'A pus capăt celui mai distructiv conflict din istoria europeană. A lăsat în urmă un continent devastat, zeci de milioane de morți și a deschis calea pentru ocupația și divizarea Germaniei.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Conferința de la Potsdam',
        lat: 52.3918,
        lng: 13.0636,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Potsdam_Conference_%281945%29.jpg/800px-Potsdam_Conference_%281945%29.jpg',
        description: 'În iulie-august, Truman, Churchill (înlocuit de Attlee) și Stalin se întâlnesc pentru a stabili detaliile ocupației Germaniei și pentru a emite un ultimatum Japoniei, cerând capitularea necondiționată.',
        context: 'A fost ultima conferință a Celor Trei Mari. Tensiunile erau deja mari, în special după ce Truman l-a informat pe Stalin despre existența unei noi "arme de o forță distructivă neobișnuită" (bomba atomică).',
        figures: [
            { name: 'Harry S. Truman', role: 'Președintele SUA' },
            { name: 'Clement Attlee', role: 'Noul Prim-ministru britanic' },
            { name: 'Iosif Stalin', role: 'Liderul Uniunii Sovietice' }
        ],
        impact: 'A finalizat planurile pentru denazificarea, demilitarizarea și divizarea Germaniei. Eșecul de a ajunge la un acord privind viitorul Europei de Est a adâncit diviziunea care va duce la Războiul Rece.'
    },
    {
        type: 'atrocity',
        year: 1945,
        title: 'Bombardamentul Atomic de la Hiroshima',
        lat: 34.3853,
        lng: 132.4553,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Atomic_bombing_of_Japan.jpg/800px-Atomic_bombing_of_Japan.jpg',
        description: 'Pe 6 august, bombardierul B-29 "Enola Gay" lansează prima bombă atomică, "Little Boy", asupra orașului Hiroshima. Explozia ucide instantaneu între 70.000 și 80.000 de oameni și distruge complet orașul.',
        context: 'După ce ultimatumul de la Potsdam a fost ignorat de Japonia, președintele Truman a autorizat folosirea bombei atomice, dezvoltată în secret în cadrul Proiectului Manhattan, pentru a forța o capitulare rapidă și a evita pierderi masive de vieți americane într-o invazie.',
        figures: [
            { name: 'Harry S. Truman', role: 'Președintele SUA, a autorizat atacul' },
            { name: 'Paul Tibbets', role: 'Pilotul avionului Enola Gay' }
        ],
        impact: 'A inaugurat Era Atomică și a schimbat pentru totdeauna natura războiului. A demonstrat o putere distructivă fără precedent, dar nu a dus la capitularea imediată a Japoniei.'
    },
    {
        type: 'atrocity',
        year: 1945,
        title: 'Bombardamentul Atomic de la Nagasaki',
        lat: 32.7642,
        lng: 129.8727,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Nagasakibomb.jpg/800px-Nagasakibomb.jpg',
        description: 'Pe 9 august, deoarece Japonia nu a capitulat, un al doilea bombardier B-29, "Bockscar", lansează a doua bombă atomică, "Fat Man", asupra orașului Nagasaki, provocând din nou distrugeri masive și ucigând aproximativ 40.000 de oameni instantaneu.',
        context: 'În aceeași zi, Uniunea Sovietică a invadat Manciuria, conform acordului de la Ialta, adăugând o presiune imensă asupra conducerii japoneze. Combinația celor două bombe atomice și a invaziei sovietice a fost decisivă.',
        figures: [
            { name: 'Harry S. Truman', role: 'Președintele SUA' },
            { name: 'Împăratul Hirohito', role: 'Împăratul Japoniei' }
        ],
        impact: 'Atacul a convins consiliul de război japonez și pe Împăratul Hirohito că rezistența este futilă. Pe 15 august, Hirohito a anunțat capitularea necondiționată a Japoniei, punând capăt celui de-al Doilea Război Mondial.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Capitularea Japoniei (Ziua Victoriei asupra Japoniei)',
        lat: 35.5504,
        lng: 139.7845,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/MacArthur_signs_surrender_instrument.jpg/800px-MacArthur_signs_surrender_instrument.jpg',
        description: 'Pe 2 septembrie, la bordul cuirasatului USS Missouri, în Golful Tokyo, reprezentanții Japoniei semnează actul de capitulare necondiționată. Al Doilea Război Mondial se încheie oficial.',
        context: 'După anunțul împăratului din 15 august, a urmat o perioadă de tranziție pentru a asigura capitularea tuturor forțelor japoneze dispersate în Asia și Pacific și pentru a organiza ceremonia oficială.',
        figures: [
            { name: 'Generalul Douglas MacArthur', role: 'Comandantul Suprem al Puterilor Aliate' },
            { name: 'Mamoru Shigemitsu', role: 'Ministrul de Externe japonez, a semnat actul' }
        ],
        impact: 'A pus capăt celui mai sângeros conflict din istoria umanității. A început ocupația americană a Japoniei, care a dus la democratizarea și reconstrucția țării. A marcat începutul unei noi ordini mondiale, dominată de SUA și URSS.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Fondarea Națiunilor Unite',
        lat: 40.7489,
        lng: -73.9680,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/United_Nations_Headquarters_in_New_York_City_aerial_view.jpg/800px-United_Nations_Headquarters_in_New_York_City_aerial_view.jpg',
        description: 'Pe 24 octombrie, Carta Națiunilor Unite intră în vigoare, fondând oficial organizația menită să prevină viitoare conflicte mondiale și să promoveze cooperarea internațională. Sediul său va fi stabilit la New York.',
        context: 'Ideea unei noi organizații internaționale, care să înlocuiască eșuata Ligă a Națiunilor, a fost discutată pe parcursul războiului. Carta a fost semnată la San Francisco în iunie 1945 de 50 de state.',
        figures: [
            { name: 'Franklin D. Roosevelt', role: 'Unul dintre principalii arhitecți ai ideii' }
        ],
        impact: 'A creat un nou cadru pentru diplomația internațională. Deși nu a putut preveni Războiul Rece, a oferit un forum pentru dialog și a avut succese majore în domenii precum decolonizarea, drepturile omului și ajutorul umanitar.'
    },
    {
        type: 'major',
        year: 1945,
        title: 'Începutul Proceselor de la Nürnberg',
        lat: 49.4542,
        lng: 11.0475,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nuremberg_trials_defendants.jpg/800px-Nuremberg_trials_defendants.jpg',
        description: 'Pe 20 noiembrie, la Palatul de Justiție din Nürnberg, Tribunalul Militar Internațional începe procesul a 22 de lideri naziști de rang înalt pentru crime de război, crime împotriva păcii și, pentru prima dată, crime împotriva umanității.',
        context: 'Aliații au decis că liderii naziști trebuie să fie trași la răspundere pentru crimele lor într-un proces public, nu executați sumar. Nürnberg a fost ales simbolic, deoarece era locul mitingurilor anuale ale Partidului Nazist.',
        figures: [
            { name: 'Robert H. Jackson', role: 'Procurorul șef din partea SUA' },
            { name: 'Hermann Göring', role: 'Cel mai înalt oficial nazist judecat' }
        ],
        impact: 'A stabilit precedente cruciale în dreptul internațional, afirmând că indivizii pot fi trași la răspundere pentru crime de stat și că "am urmat ordine" nu este o apărare validă. A pus bazele pentru Curtea Penală Internațională.'
    }
],

'post-war': [
    {
        type: 'major',
        year: 1946,
        title: 'Alegerile generale fraudate în România',
        lat: 44.4396,
        lng: 26.0963,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alegeri_1946_Romania_buletin_vot.jpg/800px-Alegeri_1946_Romania_buletin_vot.jpg',
        description: 'Pe 19 noiembrie, primele alegeri parlamentare postbelice, care au fost masiv fraudate de către Blocul Partidelor Democrate, controlat de comuniști, pentru a asigura o victorie zdrobitoare și a legitima preluarea puterii.',
        context: 'După impunerea guvernului Groza, Partidul Comunist a început acapararea puterii. Partidele istorice (PNȚ și PNL) se bucurau încă de popularitate masivă. Alegerile au fost un moment crucial, iar comuniștii au folosit intimidarea, violența și frauda pentru a câștiga.',
        figures: [
            { name: 'Petru Groza', role: 'Prim-ministru, fațada electorală a comuniștilor' },
            { name: 'Gheorghe Gheorghiu-Dej, Ana Pauker', role: 'Lideri comunişti care au orchestrat frauda' },
            { name: 'Iuliu Maniu şi Dinu Brătianu', role: 'Liderii opoziției (PNȚ şi PNL)' }
        ],
        impact: 'Rezultatele reale, care arătau o victorie zdrobitoare a PNȚ, au fost inversate. Frauda a anihilat orice speranţă de opoziție parlamentară şi a oferit regimului comunist o faţadă de legitimitate, deschizând calea pentru sovietizarea completă a României.'
    },
    {
        type: 'major',
        year: 1947,
        title: 'Înscenarea de la Tămădău',
        lat: 44.435,
        lng: 26.538,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/ro/c/c5/T%C4%83m%C4%83d%C4%83u.jpg',
        description: 'Pe 14 iulie, o operațiune de tip "steag fals" orchestrată de autorităţile comuniste, prin care lideri marcanți ai Partidului Național Țărănesc (PNȚ) au fost arestați pe aerodromul din Tămădău în timp ce încercau să părăsească ţara.',
        context: 'După fraudarea alegerilor din 1946, PNȚ rămăsese cea mai importantă forţă de opoziție. Pentru a instaura un control total, comuniştii trebuiau să elimine acest ultim obstacol, acuzându-l de trădare naţională.',
        figures: [
            { name: 'Ion Mihalache, Nicolae Penescu', role: 'Lideri ai PNȚ arestați la Tămădău' },
            { name: 'Iuliu Maniu', role: 'Preşedintele PNȚ, arestat şi judecat ulterior' },
            { name: 'Teohari Georgescu', role: 'Ministrul de Interne comunist' }
        ],
        impact: 'A fost o capcană perfect executată. Incidentul a fost folosit ca pretext pentru scoaterea în afara legii a PNȚ şi pentru condamnarea liderilor săi la închisoare pe viaţă. A reprezentat lovitura de grație dată opoziției democratice din România.'
    },
    {
        type: 'major',
        year: 1947,
        title: 'Abdicarea forţată a Regelui Mihai I',
        lat: 44.4396,
        lng: 26.0963,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Act_of_abdication_of_King_Michael_I_of_Romania.jpg/800px-Act_of_abdication_of_King_Michael_I_of_Romania.jpg',
        description: 'Pe 30 decembrie, Regele Mihai I a fost chemat la palat de către liderii comunişti Petru Groza şi Gheorghe Gheorghiu-Dej, care l-au ameninţat cu un război civil și executarea a 1.000 de studenți arestați, forțându-l să semneze actul de abdicare. În aceeaşi zi, a fost proclamată Republica Populară Română.',
        context: 'După fraudarea alegerilor şi eliminarea partidelor istorice, monarhia rămăsese ultimul simbol al democrației și al legăturii cu Occidentul. Comuniştii, la ordinul lui Stalin, au decis să elimine acest ultim obstacol.',
        figures: [
            { name: 'Regele Mihai I', role: 'Ultimul monarh al României' },
            { name: 'Petru Groza', role: 'Prim-ministru' },
            { name: 'Gheorghe Gheorghiu-Dej', role: 'Liderul Partidului Comunist' }
        ],
        impact: 'A marcat sfârşitul monarhiei în România şi instaurarea completă a regimului comunist totalitar, subordonat Uniunii Sovietice. România a intrat într-o lungă perioadă de izolare, represiune politică şi dificultăți economice.'
    },
    {
        type: 'major',
        year: 1946,
        title: 'Discursul "Cortina de Fier"',
        lat: 38.8467,
        lng: -91.9481,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Winston_Churchill_delivers_his_%22Iron_Curtain%22_speech_at_Westminster_College_in_Fulton%2C_Missouri.jpg/800px-Winston_Churchill_delivers_his_%22Iron_Curtain%22_speech_at_Westminster_College_in_Fulton%2C_Missouri.jpg',
        description: 'Pe 5 martie, la Fulton, Missouri, fostul prim-ministru britanic Winston Churchill rostește faimosul său discurs în care declară că "de la Stettin, la Marea Baltică, până la Trieste, la Marea Adriatică, o cortină de fier a coborât de-a curmezișul continentului".',
        context: 'Discursul a fost rostit într-un moment de tensiuni crescânde între foștii aliați. Uniunea Sovietică își consolida controlul asupra statelor din Europa de Est, încălcând promisiunile de la Ialta privind alegerile libere.',
        figures: [
            { name: 'Winston Churchill', role: 'Autorul discursului' },
            { name: 'Harry S. Truman', role: 'Președintele SUA, prezent la discurs' }
        ],
        impact: 'Discursul a popularizat termenul "Cortina de Fier" și a articulat clar realitatea divizării Europei. Este considerat un moment definitoriu în începutul Războiului Rece, semnalând trecerea de la alianța din timpul războiului la o confruntare ideologică și geopolitică.'
    },
    {
        type: 'atrocity',
        year: 1946,
        title: 'Pogromul de la Kielce',
        lat: 50.8661,
        lng: 20.6286,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kielce_pogrom_-_survivors.jpg/800px-Kielce_pogrom_-_survivors.jpg',
        description: 'Pe 4 iulie, un masacru violent al supraviețuitorilor evrei ai Holocaustului în orașul polonez Kielce, cel mai sângeros atac antisemit din Polonia postbelică, care a determinat un exod masiv al evreilor polonezi.',
        context: 'Pogromul a fost declanșat de un zvon fals de omor ritual, conform căruia evreii ar fi răpit un băiat creștin. O mulțime furioasă, cu participarea unor polițiști și soldați, a atacat clădirea comitetului evreiesc, ucigând 42 de oameni.',
        figures: [],
        impact: 'A demonstrat că antisemitismul virulent nu a dispărut odată cu înfrângerea Germaniei Naziste. A spulberat speranțele multor supraviețuitori evrei de a-și putea reconstrui viața în Polonia și a accelerat emigrarea către Palestina și alte țări.'
    },
    {
        type: 'minor',
        year: 1946,
        title: 'Primul Război din Indochina',
        lat: 21.0285,
        lng: 105.8542,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/French_Union_forces_in_Indochina_1953.jpg/800px-French_Union_forces_in_Indochina_1953.jpg',
        description: 'Pe 19 decembrie, începe un conflict armat între forțele coloniale franceze și Việt Minh-ul lui Ho Chi Minh pentru controlul Vietnamului, marcând începutul a decenii de război în regiune.',
        context: 'După capitularea Japoniei, Ho Chi Minh a proclamat independența Vietnamului. Franța, însă, a încercat să-și restabilească imperiul colonial, ceea ce a dus la un conflict de gherilă de lungă durată.',
        figures: [
            { name: 'Ho Chi Minh', role: 'Liderul Việt Minh' },
            { name: 'Võ Nguyên Giáp', role: 'Comandantul militar al Việt Minh' }
        ],
        impact: 'Războiul s-a încheiat cu înfrângerea Franței la Dien Bien Phu în 1954 și cu divizarea Vietnamului. A pregătit terenul pentru implicarea americană și pentru Al Doilea Război din Indochina (Războiul din Vietnam).'
    },
    {
        type: 'major',
        year: 1947,
        title: 'Doctrina Truman',
        lat: 38.8951,
        lng: -77.0364,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Harry_S_Truman_addresses_Congress.jpg/800px-Harry_S_Truman_addresses_Congress.jpg',
        description: 'Pe 12 martie, Președintele Truman anunță într-un discurs în fața Congresului o nouă politică externă a SUA: politica de "containment" (stăvilire) a expansiunii sovietice, oferind sprijin economic și militar națiunilor amenințate de comunism.',
        context: 'Marea Britanie, epuizată financiar, a anunțat că nu mai poate sprijini guvernele pro-occidentale din Grecia (aflată în război civil cu comuniștii) și Turcia (supusă presiunilor sovietice). SUA au decis să preia acest rol pentru a preveni căderea acestor țări sub influența sovietică.',
        figures: [
            { name: 'Harry S. Truman', role: 'Președintele SUA' },
            { name: 'George F. Kennan', role: 'Diplomat american, a formulat teoria "containment"-ului' }
        ],
        impact: 'Doctrina Truman a marcat o schimbare fundamentală în politica externă americană, de la izolaționism la intervenționism global. A pus bazele Războiului Rece și a justificat implicarea americană în conflicte din întreaga lume pentru următoarele decenii, inclusiv Planul Marshall.'
    },
    {
        type: 'major',
        year: 1947,
        title: 'Partiția Indiei',
        lat: 28.6139,
        lng: 77.2090,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Train_to_Pakistan.jpg/800px-Train_to_Pakistan.jpg',
        description: 'Pe 15 august, Imperiul Britanic al Indiei este împărțit în două state independente, India (cu majoritate hindusă) și Pakistan (cu majoritate musulmană). Partiția a declanșat violențe inter-comunitare masive și una dintre cele mai mari migrații umane din istorie.',
        context: 'După decenii de luptă pentru independență, britanicii au decis să se retragă. Tensiunile dintre Liga Musulmană (care cerea un stat separat) și Congresul Național Indian (care dorea o Indie unită) au făcut partiția inevitabilă.',
        figures: [
            { name: 'Jawaharlal Nehru', role: 'Primul prim-ministru al Indiei' },
            { name: 'Muhammad Ali Jinnah', role: 'Fondatorul Pakistanului' },
            { name: 'Lordul Mountbatten', role: 'Ultimul vicerege al Indiei' }
        ],
        impact: 'A dus la moartea a peste un milion de oameni în violențe și la migrația a peste 15 milioane. A creat o animozitate de durată între India și Pakistan, care a dus la mai multe războaie și la o cursă a înarmării nucleare.'
    },
    {
        type: 'major',
        year: 1948,
        title: 'Planul Marshall',
        lat: 48.8566,
        lng: 2.3522,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Marshall_Plan_poster.JPG/800px-Marshall_Plan_poster.JPG',
        description: 'Un program masiv de ajutor economic american (oficial "Programul de Reconstrucție Europeană") pentru refacerea economiilor din Europa de Vest devastate de război. A oferit peste 13 miliarde de dolari în asistență.',
        context: 'După război, Europa se confrunta cu distrugeri masive, foamete și instabilitate politică, condiții considerate fertile pentru expansiunea comunismului. Planul a fost conceput pentru a combate aceste probleme.',
        figures: [
            { name: 'George C. Marshall', role: 'Secretar de Stat al SUA, a propus planul' },
            { name: 'Harry S. Truman', role: 'Președintele SUA' }
        ],
        impact: 'Planul Marshall a fost un succes răsunător. A contribuit la reconstrucția rapidă a Europei de Vest, a stabilizat economiile, a stopat avansul partidelor comuniste (în special în Franța și Italia) și a consolidat alianța transatlantică. URSS a respins planul și a interzis țărilor satelit să participe.'
    },
    {
        type: 'major',
        year: 1948,
        title: 'Proclamarea Statului Israel',
        lat: 32.1093,
        lng: 34.8555,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ben-Gurion_proclaims_Israel%27s_independence.jpg/800px-Ben-Gurion_proclaims_Israel%27s_independence.jpg',
        description: 'Pe 14 mai, David Ben-Gurion proclamă independența statului Israel. A doua zi, statele arabe vecine (Egipt, Iordania, Siria, Liban, Irak) invadează, declanșând Războiul Arabo-Israelian din 1948.',
        context: 'După Holocaust, presiunea pentru crearea unui stat evreiesc a crescut. În 1947, ONU a votat un plan de partiție a Palestinei Mandatare într-un stat evreiesc și unul arab. Planul a fost acceptat de liderii evrei și respins de liderii arabi.',
        figures: [
            { name: 'David Ben-Gurion', role: 'Primul prim-ministru al Israelului' }
        ],
        impact: 'A dus la nașterea statului Israel, dar și la exodul a peste 700.000 de arabi palestinieni (Nakba). A declanșat un conflict regional care continuă să modeleze politica din Orientul Mijlociu până în prezent.'
    },
    {
        type: 'major',
        year: 1948,
        title: 'Blocada Berlinului și Podul Aerian',
        lat: 52.5200,
        lng: 13.4050,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/C-54_over_the_ruins_of_Berlin_1948.jpg/800px-C-54_over_the_ruins_of_Berlin_1948.jpg',
        description: 'Pe 24 iunie, Uniunea Sovietică blochează toate căile terestre și feroviare către sectoarele occidentale ale Berlinului. Aliații Occidentali răspund cu un pod aerian masiv pentru a aproviziona orașul, o primă confruntare majoră a Războiului Rece.',
        context: 'Blocada a fost răspunsul lui Stalin la introducerea unei noi monede (Deutsche Mark) de către Aliații occidentali în zonele lor de ocupație, o mișcare pe care a văzut-o ca un pas spre crearea unui stat vest-german separat.',
        figures: [
            { name: 'Iosif Stalin', role: 'A ordonat blocada' },
            { name: 'Harry S. Truman', role: 'A ordonat podul aerian' },
            { name: 'Generalul Lucius D. Clay', role: 'Comandant american în Germania, a organizat podul aerian' }
        ],
        impact: 'Timp de aproape un an, avioanele aliate au transportat provizii. Succesul podului aerian a fost o victorie politică și de propagandă uriașă pentru Occident. Criza a dus la crearea a două state germane separate (RFG și RDG) și la formarea alianței NATO.'
    },
    {
        type: 'major',
        year: 1949,
        title: 'Înființarea NATO',
        lat: 38.8951,
        lng: -77.0364,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Signing_of_the_North_Atlantic_Treaty.jpg/800px-Signing_of_the_North_Atlantic_Treaty.jpg',
        description: 'Pe 4 aprilie, la Washington D.C., Statele Unite, Canada și zece țări europene semnează Tratatul Atlanticului de Nord, creând o alianță militară defensivă pentru a contracara amenințarea sovietică. Principiul de bază este Articolul 5: un atac asupra unui membru este considerat un atac asupra tuturor.',
        context: 'Blocada Berlinului a demonstrat necesitatea unei alianțe militare formale pentru a descuraja o agresiune sovietică în Europa. A marcat sfârșitul politicii tradiționale americane de a evita "alianțele încurcate".',
        figures: [
            { name: 'Harry S. Truman', role: 'Președintele SUA' },
            { name: 'Ernest Bevin', role: 'Ministrul de Externe britanic, un promotor cheie' }
        ],
        impact: 'NATO a devenit piatra de temelie a securității occidentale pe parcursul Războiului Rece. A dus la o cursă a înarmărilor și la crearea unei alianțe rivale, Pactul de la Varșovia, în 1955, solidificând divizarea bipolară a lumii.'
    },
    {
        type: 'major',
        year: 1949,
        title: 'Proclamarea Republicii Populare Chineze',
        lat: 39.9042,
        lng: 116.4074,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Founding_of_the_People%27s_Republic_of_China_in_1949.jpg/800px-Founding_of_the_People%27s_Republic_of_China_in_1949.jpg',
        description: 'Pe 1 octombrie, după victoria în Războiul Civil Chinez împotriva naționaliștilor (Kuomintang), Mao Zedong proclamă Republica Populară Chineză în Piața Tiananmen din Beijing.',
        context: 'După înfrângerea Japoniei, războiul civil dintre comuniștii lui Mao și naționaliștii lui Chiang Kai-shek, sprijiniți de SUA, a reizbucnit. Comuniștii, cu sprijin popular larg și tactici militare superioare, au obținut o victorie rapidă.',
        figures: [
            { name: 'Mao Zedong', role: 'Liderul Partidului Comunist Chinez' },
            { name: 'Chiang Kai-shek', role: 'Liderul naționalist, s-a retras în Taiwan' }
        ],
        impact: '"Căderea" Chinei în mâinile comuniștilor a fost un șoc major pentru SUA și a intensificat temerile legate de expansiunea comunismului global. A schimbat fundamental echilibrul de putere în Asia, ducând la Războiul din Coreea și la Războiul din Vietnam.'
    }
]
};

// Add allEventsData to the window object
window.allEventsData = allEventsData;