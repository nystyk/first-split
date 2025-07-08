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
            title: 'Pactul Molotov-Ribbentrop',
            lat: 55.7558,
            lng: 37.6173,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Molotov-Ribbentrop_pact_signing.jpg/800px-Molotov-Ribbentrop_pact_signing.jpg',
            description: 'Germania Nazistă și Uniunea Sovietică semnează un pact de neagresiune, șocând lumea. Un protocol adițional secret împărțea Europa de Est în sfere de influență, permițând celor două puteri să anexeze teritorii fără opoziție reciprocă.',
            context: 'Hitler dorea să evite un război pe două fronturi prin neutralizarea URSS înainte de a ataca Polonia. Stalin, neîncrezător în Marea Britanie și Franța după München și dorind să câștige timp pentru a-și reînarma armata, a acceptat pactul pentru a-și extinde teritoriul spre vest.',
            figures: [
                { name: 'Joachim von Ribbentrop', role: 'Ministrul de Externe al Germaniei' },
                { name: 'Viaceslav Molotov', role: 'Ministrul de Externe al URSS' },
                { name: 'Iosif Stalin', role: 'Liderul Uniunii Sovietice' }
            ],
            impact: 'Pactul i-a dat lui Hitler "lumina verde" pentru a invada Polonia, declanșând direct Al Doilea Război Mondial. A dus la ocuparea și împărțirea Poloniei, la anexarea statelor baltice de către URSS și la cedarea Basarabiei de către România în 1940.'
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
            title: 'Bătălia Angliei',
            lat: 51.3037,
            lng: -0.0903,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Battle_of_Britain_Air_Observer.jpg/800px-Battle_of_Britain_Air_Observer.jpg',
            description: 'O campanie aeriană crucială în care Royal Air Force (RAF) a apărat cu succes Marea Britanie împotriva atacurilor pe scară largă ale Luftwaffe. A fost prima bătălie majoră din istorie purtată integral în aer.',
            context: 'După căderea Franței, Hitler se pregătea să invadeze Marea Britanie (Operațiunea Leul de Mare), dar pentru aceasta avea nevoie de superioritate aeriană. Bătălia a fost o încercare a Germaniei de a distruge RAF și de a demoraliza populația britanică.',
            figures: [
                { name: 'Winston Churchill', role: 'Prim-ministrul britanic' },
                { name: 'Hugh Dowding', role: 'Comandantul RAF Fighter Command, arhitectul victoriei' },
                { name: 'Hermann Göring', role: 'Comandantul Luftwaffe' }
            ],
            impact: 'Victoria RAF a fost un punct de cotitură fundamental. A fost prima înfrângere majoră a Germaniei Naziste şi a anulat pe termen nelimitat planurile de invazie, asigurând supraviețuirea Marii Britanii ca bastion aliat și viitoare bază pentru eliberarea Europei.'
        },
        {
            type: 'major',
            year: 1940,
            title: 'Dictatul de la Viena',
            lat: 48.2082,
            lng: 16.3738,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Second_Vienna_Award_map-ro.svg/800px-Second_Vienna_Award_map-ro.svg.png',
            description: 'Un arbitraj teritorial impus de Germania Nazistă şi Italia Fascistă, prin care România a fost forţată să cedeze Ungariei partea de nord-vest a Transilvaniei.',
            context: 'După cedarea Basarabiei către URSS în iunie 1940, România a rămas complet izolată diplomatic. Ungaria, un aliat al Axei, a profitat de slăbiciunea României pentru a-și revendica teritoriul. Hitler a mediat conflictul pentru a menţine stabilitatea în regiune și a asigura loialitatea ambelor state.',
            figures: [
                { name: 'Ion Gigurtu & Mihail Manoilescu', role: 'Reprezentanții României' },
                { name: 'Joachim von Ribbentrop & Galeazzo Ciano', role: 'Miniştri de externe german şi italian, arbitrii' }
            ],
            impact: 'Pierderea Transilvaniei de Nord a fost o traumă națională și mai mare decât cea a Basarabiei, ducând la prăbuşirea finală a autorității Regelui Carol al II-lea, la abdicarea sa și la preluarea puterii de către Generalul Ion Antonescu și Garda de Fier.'
        }
    ],
    '1941': [
        {
            type: 'major',
            year: 1941,
            title: 'Operațiunea Barbarossa',
            lat: 52.0825,
            lng: 23.6536,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Bundesarchiv_Bild_101I-209-0013-05%2C_Russland%2C_Panzer_IV_mit_Infanterie.jpg/800px-Bundesarchiv_Bild_101I-209-0013-05%2C_Russland%2C_Panzer_IV_mit_Infanterie.jpg',
            description: 'Pe 22 iunie, Germania lansează cea mai mare invazie terestră din istorie, atacând Uniunea Sovietică pe un front de mii de kilometri cu peste 3 milioane de soldați. Acţiunea a anulat Pactul Molotov-Ribbentrop şi a deschis Frontul de Est, cel mai mare și mai sângeros teatru de război din istorie.',
            context: 'Motivat de ideologia sa anti-comunistă şi rasistă (planul de a cuceri "spațiul vital" - Lebensraum), Hitler dorea să distrugă Uniunea Sovietică într-o campanie rapidă. El a subestimat grav resursele URSS, adâncimea strategică a teritoriului și dificultățile climatice.',
            figures: [
                { name: 'Adolf Hitler', role: 'A ordonat şi a micro-gestionat invazia' },
                { name: 'Iosif Stalin', role: 'Liderul sovietic, inițial surprins, a mobilizat rezistența totală' }
            ],
            impact: 'Deşi a avut succese inițiale spectaculoase, cu milioane de prizonieri sovietici, operaţiunea a eşuat în a atinge obiectivul unei victorii rapide. Eşecul în faţa Moscovei în iarna 1941-1942 a blocat Germania într-un război de uzură pe care nu-l putea câştiga.'
        },
        {
            type: 'atrocity',
            year: 1941,
            title: 'Pogromul de la Iași',
            lat: 47.1585,
            lng: 27.6014,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Ia%C8%99i_pogrom_-_Jews_being_led_to_the_police_station.jpg',
            description: 'Un masacru de o brutalitate extremă, în care autoritățile române, cu participare germană şi civilă, au ucis peste 13.000 de evrei. Evenimentul a inclus execuții în masă în curtea Chesturii de Poliție și deportări în "trenurile morţii", unde mii au murit sufocați și de sete.',
            context: 'Pogromul a avut loc la doar câteva zile după intrarea României în război alături de Germania. Autoritățile, în frunte cu Antonescu, au cultivat mitul "amenințării iudeo-bolșevice", folosind două bombardamente sovietice minore ca pretext pentru a dezlănțui o isterie colectivă și a da ordinul de "curățare a terenului".',
            figures: [
                { name: 'Ion Antonescu', role: 'Conducătorul statului, a aprobat și încurajat acțiunea' },
                { name: 'Ofiţeri SSI şi Abwehr', role: 'Responsabili de planificare și instigare' },
                { name: 'Poliţia, jandarmeria, armata română', role: 'Principalii executanți' }
            ],
            impact: 'A fost unul dintre cele mai violente pogromuri din timpul Holocaustului, un act de genocid premeditat şi organizat de stat. Masacrul a demonstrat că regimul Antonescu era un perpetrator activ şi zelos al Holocaustului, capabil să organizeze pe cont propriu masacre de o amploare terifiantă.'
        },
        {
            type: 'major',
            year: 1941,
            title: 'Bătălia de la Moscova',
            lat: 55.7512,
            lng: 37.6184,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/RIAN_archive_858_T-34_tanks_in_ambush.jpg/800px-RIAN_archive_858_T-34_tanks_in_ambush.jpg',
            description: 'Ofensiva finală germană pentru capturarea Moscovei (Operațiunea Taifun) eșuează din cauza rezistenței sovietice acerbe, a noroiului de toamnă ("rasputitsa") și a gerului extrem. Contraofensiva sovietică din decembrie, cu trupe siberiene proaspete, a respins Wehrmacht-ul de la porțile capitalei.',
            context: 'Moscova era principalul obiectiv politic, economic și de transport al URSS. Căderea sa ar fi putut duce la colapsul sovietic. Germanii au ajuns la doar câțiva kilometri de Kremlin, dar liniile lor de aprovizionare erau suprasolicitate, iar trupele epuizate.',
            figures: [
                { name: 'Gheorghi Jukov', role: 'General sovietic, a organizat apărarea Moscovei' },
                { name: 'Fedor von Bock', role: 'Mareșal german, comandantul Grupului de Armate Centru' }
            ],
            impact: 'A fost prima înfrângere strategică majoră a Wehrmacht-ului. A spulberat mitul invincibilității germane și a demonstrat că războiul din est va fi unul lung și de uzură. A marcat eșecul strategic al Operațiunii Barbarossa.'
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
        }
    ],
    '1942': [
        {
            type: 'atrocity',
            year: 1942,
            title: 'Conferința de la Wannsee',
            lat: 52.4286,
            lng: 13.1594,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wannsee_Villa.jpg/800px-Wannsee_Villa.jpg',
            description: 'Pe 20 ianuarie, o întâlnire a 15 înalți oficiali naziști (majoritatea de rang secund) pentru a coordona și birocratiza implementarea "Soluției Finale la problema evreiască", planul de exterminare sistematică a evreilor europeni.',
            context: 'Decizia de a extermina evreii fusese deja luată la nivel înalt. Conferința nu a fost pentru a decide, ci pentru a asigura cooperarea diferitelor ministere și agenții ale statului în organizarea logistică a genocidului (transport, identificare, confiscare etc.).',
            figures: [
                { name: 'Reinhard Heydrich', role: 'Șeful RSHA, a prezidat conferința' },
                { name: 'Adolf Eichmann', role: 'Șeful secției pentru afaceri evreiești, a redactat protocolul' }
            ],
            impact: 'Întâlnirea a marcat trecerea la o fază industrializată și sistematică a Holocaustului. A demonstrat natura birocratică și rece a genocidului, în care uciderea în masă a fost planificată ca o problemă administrativă.'
        },
        {
            type: 'major',
            year: 1942,
            title: 'Bătălia de la Midway',
            lat: 28.2076,
            lng: -177.3725,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/USS_Yorktown_%28CV-5%29_is_hit_on_4_June_1942.jpg/800px-USS_Yorktown_%28CV-5%29_is_hit_on_4_June_1942.jpg',
            description: 'O bătălie navală și aeriană decisivă și punctul de cotitură al războiului din Pacific. Flota americană a înfrânt în mod categoric flota japoneză, scufundând patru dintre portavioanele sale de elită (Akagi, Kaga, Soryu, Hiryu) care participaseră și la Pearl Harbor.',
            context: 'Marina japoneză a încercat să atragă flota americană într-o bătălie finală distrugătoare la atolul Midway. Datorită decriptării codurilor navale japoneze (JN-25), amiralul Nimitz cunoştea în detaliu planul de atac japonez și a putut pregăti o ambuscadă.',
            figures: [
                { name: 'Amiralul Chester W. Nimitz', role: 'Comandantul forţelor americane din Pacific' },
                { name: 'Amiralul Chuichi Nagumo', role: 'Comandantul forţei de atac japoneze' }
            ],
            impact: 'Pierderea celor patru portavioane și a piloților experimentați a fost o lovitură de la care Japonia nu şi-a mai revenit niciodată. Bătălia a oprit definitiv expansiunea japoneză în Pacific şi a transferat inițiativa strategică Aliaților.'
        },
        {
            type: 'major',
            year: 1942,
            title: 'Bătălia de la Stalingrad',
            lat: 48.7080,
            lng: 44.5133,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Romanian_soldiers_at_Stalingrad_1942.jpg/800px-Romanian_soldiers_at_Stalingrad_1942.jpg',
            description: 'O bătălie de uzură brutală pentru controlul orașului Stalingrad. După lupte de stradă sângeroase, contraofensiva sovietică (Operațiunea Uranus) a lovit flancurile germane slab apărate de trupe române și italiene, încercuind complet Armata a 6-a germană.',
            context: 'După succesele din vara anului 1942 (Operațiunea Albastru), Hitler a deviat forțe pentru a captura orașul care purta numele lui Stalin, transformându-l într-un obiectiv de prestigiu. Armatele române, slab echipate, au fost însărcinate cu protejarea flancurilor extinse.',
            figures: [
                { name: 'Generalul Friedrich Paulus', role: 'Comandantul Armatei a 6-a germane' },
                { name: 'Generalul Vasili Ciuikov', role: 'Comandantul Armatei 62 sovietice, a apărat orașul' },
                { name: 'Generalul Gheorghi Jukov', role: 'Arhitectul contraofensivei sovietice' }
            ],
            impact: 'Capitularea Armatei a 6-a în februarie 1943 a fost un dezastru militar și psihologic colosal pentru Germania. A marcat punctul de cotitură pe Frontul de Est, de la care Germania nu a mai putut decât să se retragă. Pentru România, a fost cea mai mare înfrângere din istoria sa.'
        },
        {
            type: 'major',
            year: 1942,
            title: 'A Doua Bătălie de la El Alamein',
            lat: 30.8222,
            lng: 28.9543,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Australian_25-pounder_gun_at_El_Alamein_1942.jpg/800px-Australian_25-pounder_gun_at_El_Alamein_1942.jpg',
            description: 'Armata a 8-a britanică, sub noua comandă a Generalului Bernard Montgomery, obține o victorie decisivă împotriva forțelor germano-italiene (Afrika Korps) conduse de Erwin Rommel. Bătălia a oprit definitiv avansul Axei spre Egipt și Canalul Suez.',
            context: 'După o serie de victorii, Rommel a ajuns periculos de aproape de Alexandria. Montgomery a refuzat să atace până când nu a acumulat o superioritate copleșitoare în oameni și materiale, în special tancuri Sherman americane.',
            figures: [
                { name: 'Generalul Bernard Montgomery', role: 'Comandantul Armatei a 8-a britanice' },
                { name: 'Mareșalul Erwin Rommel', role: 'Comandantul Afrika Korps' }
            ],
            impact: 'A fost prima victorie terestră majoră a Aliaților occidentali și un punct de cotitură în Campania din Africa de Nord. Churchill a spus faimos: "Înainte de Alamein nu am avut nicio victorie. După Alamein nu am avut nicio înfrângere."'
        }
    ],
    '1943': [
        {
            type: 'atrocity',
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
            title: 'Bătălia de la Kursk',
            lat: 51.7301,
            lng: 36.1911,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bundesarchiv_Bild_101I-221-0616-24%2C_Russland%2C_Schlacht_um_Kursk%2C_Panzer_VI_%28Tiger_I%29.jpg/800px-Bundesarchiv_Bild_101I-221-0616-24%2C_Russland%2C_Schlacht_um_Kursk%2C_Panzer_VI_%28Tiger_I%29.jpg',
            description: 'Cea mai mare bătălie de tancuri din istorie. O ofensivă masivă germană (Operațiunea Citadela) este oprită de o apărare sovietică în adâncime, bine pregătită, marcând sfârșitul definitiv al ofensivei strategice germane pe Frontul de Est.',
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
            type: 'major',
            year: 1943,
            title: 'Conferința de la Teheran',
            lat: 35.6892,
            lng: 51.3890,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tehran_Conference%2C_1943.jpg/800px-Tehran_Conference%2C_1943.jpg',
            description: 'Prima întâlnire a "Celor Trei Mari" (Roosevelt, Churchill și Stalin). Se ia decizia finală pentru deschiderea unui al doilea front în vestul Europei (Operațiunea Overlord) în mai/iunie 1944, pentru a slăbi presiunea asupra Frontului de Est.',
            context: 'Conferința a avut loc după victorii aliate decisive (Stalingrad, Kursk, Africa de Nord). Stalin a presat puternic pentru deschiderea celui de-al doilea front, promis încă din 1942.',
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
            description: 'O ofensivă masivă sovietică în Belarus care a distrus complet Grupul de Armate Centru german, provocând cele mai mari pierderi Germaniei într-o singură operațiune și accelerând colapsul Frontului de Est.',
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
            title: 'Bătălia de la Bulge (Ofensiva din Ardeni)',
            lat: 50.17,
            lng: 6.05,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/American_soldiers_of_the_289th_Infantry_Regiment_march_through_a_snow-covered_forest_in_the_vicinity_of_Amonines%2C_Belgium_-_NARA_-_531201.jpg/800px-American_soldiers_of_the_289th_Infantry_Regiment_march_through_a_snow-covered_forest_in_the_vicinity_of_Amonines%2C_Belgium_-_NARA_-_531201.jpg',
            description: 'Ultima ofensivă majoră a Germaniei pe Frontul de Vest. Un atac surpriză prin Ardeni a creat o "pungă" în liniile aliate, dar a eșuat din cauza rezistenței americane tenace (ex. la Bastogne) și a intervenției aviației aliate odată ce vremea s-a îmbunătățit, epuizând ultimele rezerve germane.',
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
            title: 'Conferința de la Ialta',
            lat: 44.4994,
            lng: 34.1697,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg/800px-Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg',
            description: 'A doua întâlnire a "Celor Trei Mari" (Roosevelt, Churchill și Stalin) pentru a discuta despre reorganizarea postbelică a Europei, inclusiv împărțirea Germaniei în zone de ocupație, frontierele Poloniei și intrarea URSS în războiul împotriva Japoniei.',
            context: 'Conferința a avut loc într-un moment în care victoria asupra Germaniei era iminentă. Armata Roșie controla deja o mare parte din Europa de Est, oferindu-i lui Stalin o poziție de negociere extrem de puternică.',
            figures: [
                { name: 'Franklin D. Roosevelt', role: 'Președintele SUA (în ultima sa conferință)' },
                { name: 'Winston Churchill', role: 'Prim-ministrul Marii Britanii' },
                { name: 'Iosif Stalin', role: 'Liderul Uniunii Sovietice' }
            ],
            impact: 'Acordurile de la Ialta au modelat harta Europei postbelice. Deși s-a convenit asupra unor "alegeri libere", conferința a fost ulterior criticată pentru că a consfințit controlul sovietic asupra Europei de Est, devenind o sursă majoră de tensiuni în Războiul Rece.'
        },
        {
            type: 'major',
            year: 1945,
            title: 'Bătălia Berlinului',
            lat: 52.5200,
            lng: 13.4050,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Soviet_soldiers_raising_the_Soviet_flag_over_the_Reichstag_in_Berlin%2C_Germany%2C_on_May_2%2C_1945.jpg/800px-Soviet_soldiers_raising_the_Soviet_flag_over_the_Reichstag_in_Berlin%2C_Germany%2C_on_May_2%2C_1945.jpg',
            description: 'Ofensiva finală sovietică pentru capturarea capitalei celui de-al Treilea Reich. După lupte de o violență extremă, casă cu casă, Armata Roșie cucerește orașul, culminând cu ridicarea steagului sovietic pe clădirea Reichstagului.',
            context: 'Stalin dorea cu ardoare să captureze Berlinul înaintea Aliaților occidentali, atât din motive de prestigiu, cât și pentru a asigura controlul asupra tehnologiei și programului nuclear german. Apărarea orașului era formată din unități disparate, inclusiv Tineretul Hitlerist și bătrâni.',
            figures: [
                { name: 'Mareșalul Gheorghi Jukov', role: 'Comandantul principal al asaltului sovietic' },
                { name: 'Generalul Helmuth Weidling', role: 'Comandantul apărării Berlinului, care a predat orașul' }
            ],
            impact: 'Căderea Berlinului a dus la sinuciderea lui Hitler pe 30 aprilie și la capitularea necondiționată a Germaniei câteva zile mai târziu, punând capăt războiului în Europa. Bătălia a lăsat orașul în ruine și a ucis sute de mii de oameni.'
        },
        {
            type: 'major',
            year: 1945,
            title: 'Capitularea Germaniei (Ziua Victoriei în Europa)',
            lat: 49.2583,
            lng: 4.0317,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_German_Surrender_at_Reims%2C_7_May_1945.jpg/800px-The_German_Surrender_at_Reims%2C_7_May_1945.jpg',
            description: 'Pe 7 mai, la Reims, Franța, Generalul Alfred Jodl semnează capitularea necondiționată a tuturor forțelor germane în fața Aliaților occidentali. Ceremonia este repetată a doua zi la Berlin, la cererea sovieticilor. Războiul în Europa se încheie oficial la 8 mai 1945.',
            context: 'După sinuciderea lui Hitler, succesorul său, Marele Amiral Karl Dönitz, a autorizat capitularea pentru a pune capăt vărsării de sânge și a încerca să salveze cât mai mulți soldați și civili de la capturarea de către sovietici.',
            figures: [
                { name: 'Generalul Alfred Jodl', role: 'A semnat capitularea la Reims' },
                { name: 'Mareșalul Wilhelm Keitel', role: 'A semnat capitularea la Berlin' },
                { name: 'Marele Amiral Karl Dönitz', role: 'Ultimul președinte al Germaniei Naziste' }
            ],
            impact: 'A pus capăt celui mai distructiv conflict din istoria europeană. A lăsat în urmă un continent devastat, zeci de milioane de morți și a deschis calea pentru ocupația și divizarea Germaniei.'
        },
        {
            type: 'atrocity',
            year: 1945,
            title: 'Bombardamentul Atomic de la Hiroshima',
            lat: 34.3853,
            lng: 132.4553,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Atomic_bombing_of_Japan.jpg/800px-Atomic_bombing_of_Japan.jpg',
            description: 'Pe 6 august, bombardierul B-29 "Enola Gay" lansează prima bombă atomică, "Little Boy", asupra orașului Hiroshima. Explozia ucide instantaneu între 70.000 și 80.000 de oameni și distruge complet orașul. Mii de alții vor muri ulterior din cauza rănilor și a radiațiilor.',
            context: 'După înfrângerea Germaniei, Aliații se pregăteau pentru o invazie costisitoare a Japoniei. Președintele Truman a autorizat folosirea bombei atomice, dezvoltată în secret în cadrul Proiectului Manhattan, pentru a forța o capitulare rapidă și a evita pierderi masive de vieți americane.',
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
            description: 'Pe 2 septembrie, la bordul cuirasatului USS Missouri, în Golful Tokyo, reprezentanții Japoniei semnează actul de capitulare necondiționată în fața Generalului Douglas MacArthur și a reprezentanților națiunilor aliate. Al Doilea Război Mondial se încheie oficial.',
            context: 'După anunțul împăratului din 15 august, a urmat o perioadă de tranziție pentru a asigura capitularea tuturor forțelor japoneze dispersate în Asia și Pacific și pentru a organiza ceremonia oficială.',
            figures: [
                { name: 'Generalul Douglas MacArthur', role: 'Comandantul Suprem al Puterilor Aliate' },
                { name: 'Mamoru Shigemitsu', role: 'Ministrul de Externe japonez, a semnat actul' }
            ],
            impact: 'A pus capăt celui mai sângeros conflict din istoria umanității. A început ocupația americană a Japoniei, care a dus la democratizarea și reconstrucția țării. A marcat începutul unei noi ordini mondiale, dominată de SUA și URSS.'
        }
    ],
    'post-war': [
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
            title: 'Blocada Berlinului și Podul Aerian',
            lat: 52.5200,
            lng: 13.4050,
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/C-54_over_the_ruins_of_Berlin_1948.jpg/800px-C-54_over_the_ruins_of_Berlin_1948.jpg',
            description: 'Pe 24 iunie, Uniunea Sovietică blochează toate căile terestre și feroviare către sectoarele occidentale ale Berlinului, aflate adânc în zona de ocupație sovietică. Aliații Occidentali răspund cu un pod aerian masiv pentru a aproviziona orașul, o primă confruntare majoră a Războiului Rece.',
            context: 'Blocada a fost răspunsul lui Stalin la introducerea unei noi monede (Deutsche Mark) de către Aliații occidentali în zonele lor de ocupație, o mișcare pe care a văzut-o ca un pas spre crearea unui stat vest-german separat.',
            figures: [
                { name: 'Iosif Stalin', role: 'A ordonat blocada' },
                { name: 'Harry S. Truman', role: 'A ordonat podul aerian' },
                { name: 'Generalul Lucius D. Clay', role: 'Comandant american în Germania, a organizat podul aerian' }
            ],
            impact: 'Timp de aproape un an, avioanele aliate au transportat alimente, combustibil și alte provizii. Succesul podului aerian a fost o victorie politică și de propagandă uriașă pentru Occident. Criza a dus la crearea a două state germane separate (RFG și RDG) și la formarea alianței NATO.'
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
