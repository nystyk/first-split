// --- EVENT DATA ---
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
            description: 'Corneliu Zelea Codreanu înființează Legiunea Arhanghelului Mihail, o mişcare ultranaționalistă, fascistă şi antisemită, care va deveni cunoscută sub numele de Garda de Fier.',
            context: 'Societatea românească de după Primul Război Mondial era marcată de instabilitate economică, corupție politică endemică și un sentiment de criză spirituală. Legiunea s-a prezentat ca o alternativă pură, o mişcare de "renaştere naţională şi creștină".',
            figures: [
                { name: 'Corneliu Zelea Codreanu', role: 'Fondatorul şi liderul carismatic ("Căpitanul")' }
            ],
            impact: 'Apariția Gărzii de Fier a introdus un nivel de violenţă politică şi fanatism ideologic fără precedent în România, destabilizând profund viața politică și contribuind la instaurarea dictaturii regale în 1938.'
        },
        { 
            type: 'minor', 
            year: 1929, 
            title: 'Crahul de pe Wall Street', 
            lat: 40.7069, 
            lng: -74.0113, 
            imageUrl: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=800&auto=format&fit=crop', 
            description: 'O prăbuşire catastrofală a bursei de valori din New York, care a şters miliarde de dolari din valoarea acțiunilor şi a aruncat Statele Unite în Marea Criză Economică.',
            context: 'Anii \'20, cunoscuți ca "Roaring Twenties", au fost o perioadă de speculații financiare intense şi necontrolate. Această bulă speculativă a dus prețurile la niveluri nesustenabile, pregătind terenul pentru un colaps inevitabil.',
            figures: [
                { name: 'Herbert Hoover', role: 'Preşedintele SUA în timpul crahului' }
            ],
            impact: 'Criza s-a extins rapid la nivel global, ducând la colaps economic, şomaj masiv şi sărăcie. Această instabilitate a discreditat democraţia şi capitalismul, alimentând direct ascensiunea regimurilor totalitare.'
        },
        { 
            type: 'major', 
            year: 1931, 
            title: 'Incidentul Mukden', 
            lat: 41.8057, 
            lng: 123.4315, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Mukden_incident_aftermath.jpg/800px-Mukden_incident_aftermath.jpg', 
            description: 'O operaţiune sub steag fals orchestrată de ofiţeri ai armatei japoneze, care au detonat o mică încărcătură explozibilă lângă o cale ferată japoneză. Incidentul minor a fost folosit ca pretext pentru a invada şi ocupa Manciuria.',
            context: 'Japonia imperialistă, în plină expansiune industrială, căuta cu disperare resurse naturale şi pieţe de desfacere, considerând Manciuria esențială pentru interesele sale.',
            figures: [
                { name: 'Kanji Ishiwara', role: 'Ofiţer japonez, arhitect al complotului' },
                { name: 'Chiang Kai-shek', role: 'Liderul Chinei' }
            ],
            impact: 'Japonia a cucerit Manciuria și a creat statul-marionetă Manchukuo. Răspunsul slab al Ligii Națiunilor a demonstrat totala sa ineficiență și a încurajat alte puteri agresoare.'
        },
        { 
            type: 'major', 
            year: 1933, 
            title: 'Hitler devine Cancelar', 
            lat: 52.5117, 
            lng: 13.3819, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Hitler_und_Hindenburg_am_Tag_von_Potsdam_21._M%C3%A4rz_1933.jpg/800px-Hitler_und_Hindenburg_am_Tag_von_Potsdam_21._M%C3%A4rz_1933.jpg', 
            description: 'Adolf Hitler, liderul Partidului Nazist, este numit legal Cancelar al Germaniei de către Preşedintele Paul von Hindenburg. Numirea a fost rezultatul unui compromis politic al elitelor conservatoare, care credeau în mod eronat că îl pot controla.',
            context: 'Republica de la Weimar era profund slăbită de instabilitatea politică cronică şi de efectele devastatoare ale Marii Crize Economice. Exploatând furia populară, Partidul Nazist a devenit cea mai mare forță politică din Reichstag.',
            figures: [
                { name: 'Adolf Hitler', role: 'Liderul Partidului Nazist (NSDAP)' },
                { name: 'Paul von Hindenburg', role: 'Preşedintele Germaniei' },
                { name: 'Franz von Papen', role: 'Fost cancelar, a jucat un rol cheie în convingerea lui Hindenburg' }
            ],
            impact: 'Odată ajuns la putere, Hitler a acţionat rapid pentru a distruge democrația, folosind Incendierea Reichstagului ca pretext pentru a suspenda libertățile civile și a trece Legea de Abilitare, care i-a acordat puteri dictatoriale.'
        },
        { 
            type: 'atrocity', 
            year: 1933, 
            title: 'Deschiderea Lagărului Dachau', 
            lat: 48.2486, 
            lng: 11.4322, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Dachau_gate.jpg/800px-Dachau_gate.jpg', 
            description: 'Primul lagăr de concentrare nazist este deschis, inițial pentru a încarcera oponenţii politici ai regimului. A devenit prototipul pentru întregul sistem de lagăre naziste.',
            context: 'După numirea sa ca şi cancelar, Hitler a avut nevoie de un instrument pentru a teroriza şi elimina orice opoziție politică. Lagărele au fost create ca spații extrajudiciare unde inamicii regimului puteau fi închişi pe termen nelimitat, fără proces.',
            figures: [
                { name: 'Heinrich Himmler', role: 'Şeful SS, a anunțat deschiderea lagărului' },
                { name: 'Theodor Eicke', role: 'Primul comandant, a creat sistemul de brutalitate organizată' }
            ],
            impact: 'Dachau a servit ca model de organizare, cruzime şi dehumanizare pentru toate lagărele ulterioare, inclusiv Auschwitz, fiind primul pas în crearea "universului concentraționar".'
        },
        { 
            type: 'atrocity', 
            year: 1934, 
            title: 'Noaptea Cuțitelor Lungi', 
            lat: 52.5200, 
            lng: 13.4050, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Bundesarchiv_Bild_102-16196%2C_Berlin%2C_Leibstandarte_SS_Adolf_Hitler.jpg/800px-Bundesarchiv_Bild_102-16196%2C_Berlin%2C_Leibstandarte_SS_Adolf_Hitler.jpg', 
            description: 'O epurare politică sângeroasă în care Hitler a ordonat SS-ului să execute sute de oponenți pentru a-şi consolida puterea. Principala ţintă a fost conducerea SA (Batalioanele de Asalt) şi liderul acesteia, Ernst Röhm.',
            context: 'Ernst Röhm şi facţiunea radicală a SA doreau o "a doua revoluţie" care să preia controlul asupra armatei, ameninţând astfel atât elita militară tradițională, cât și puterea absolută a lui Hitler.',
            figures: [
                { name: 'Adolf Hitler', role: 'A ordonat şi supervizat epurarea' },
                { name: 'Ernst Röhm', role: 'Liderul SA, asasinat' },
                { name: 'Heinrich Himmler & Hermann Göring', role: 'Au orchestrat epurarea' }
            ],
            impact: 'Epurarea a eliminat orice ameninţare internă la adresa puterii lui Hitler, a asigurat loialitatea armatei şi a marcat ascensiunea SS-ului ca principal instrument de teroare al regimului.'
        },
        { type: 'minor', year: 1934, title: 'Incidentul de la Walwal', lat: 8.0667, lng: 45.4167, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e0/Italo-Ethiopian_War_map_1935.svg', description: 'O ciocnire la granița dintre Etiopia și Somalia italiană, folosită de Italia ca pretext pentru a invada Etiopia în anul următor.' },
        { type: 'minor', year: 1935, title: 'Plebiscitul din Saarland', lat: 49.2333, lng: 7.0000, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Saar_Plebiscite_Propaganda_Poster_1934.jpg/800px-Saar_Plebiscite_Propaganda_Poster_1934.jpg', description: 'Locuitorii din regiunea Saar votează pentru reunificarea cu Germania, un succes de propagandă pentru regimul nazist. Procesul a fost supervizat de Liga Națiunilor.' },
        { type: 'atrocity', year: 1935, title: 'Legile de la Nürnberg', lat: 49.4539, lng: 11.0775, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Nuremberg_laws_chart.jpg/800px-Nuremberg_laws_chart.jpg', description: 'Legi antisemite adoptate în Germania Nazistă care au instituționalizat persecuția evreilor, privându-i de cetățenie și de drepturi fundamentale.' },
        { type: 'major', year: 1935, title: 'Invazia Italiană a Etiopiei', lat: 9.0250, lng: 38.7469, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6f/Ethiopian_soldiers%2C_ca._1935.jpg/800px-Ethiopian_soldiers%2C_ca._1935.jpg', description: 'Forțele italiene invadează Etiopia (cunoscută și ca Abisinia), într-un act de agresiune colonială care a expus slăbiciunea Ligii Națiunilor.' },
        { 
            type: 'major', 
            year: 1936, 
            title: 'Remilitarizarea Renaniei', 
            lat: 50.9375, 
            lng: 6.9603, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/German_troops_march_into_the_Rhineland_-_1936.jpg/800px-German_troops_march_into_the_Rhineland_-_1936.jpg', 
            description: 'Trupele germane intră în zona demilitarizată a Renaniei, încălcând în mod direct şi flagrant Tratatul de la Versailles şi Tratatele de la Locarno. A fost primul pariu major al lui Hitler pe scena internaţională.',
            context: 'Hitler a folosit ratificarea pactului franco-sovietic ca pretext, susţinând că acesta amenință securitatea Germaniei. El a mizat corect pe faptul că Franța și Marea Britanie nu vor risca un război pentru a impune respectarea tratatelor.',
            figures: [
                { name: 'Adolf Hitler', role: 'A ordonat personal remilitarizarea' }
            ],
            impact: 'Succesul a fost o victorie politică imensă pentru Hitler. A schimbat dramatic echilibrul strategic, permițând Germaniei să construiască Linia Siegfried. Acesta a fost ultimul moment în care Hitler ar fi putut fi oprit fără un război major.'
        },
        { type: 'major', year: 1936, title: 'Începutul Războiului Civil Spaniol', lat: 35.2922, lng: -2.9408, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Spanish_Civil_War_montage.jpg/800px-Spanish_Civil_War_montage.jpg', description: 'O lovitură de stat militară a naționaliștilor împotriva Republicii Spaniole declanșează un conflict sângeros ce va deveni un teren de testare pentru armele și tacticile Axei și ale Uniunii Sovietice.' },
        { type: 'major', year: 1936, title: 'Pactul Anti-Comintern', lat: 52.5200, lng: 13.4050, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Bundesarchiv_Bild_183-H28598%2C_Berlin%2C_Unterzeichnung_des_Antikominternpaktes.jpg/800px-Bundesarchiv_Bild_183-H28598%2C_Berlin%2C_Unterzeichnung_des_Antikominternpaktes.jpg', description: 'Germania Nazistă și Japonia Imperială semnează un pact direcționat împotriva Internaționalei Comuniste (Comintern), formând nucleul viitoarei alianțe a Axei.' },
        { type: 'atrocity', year: 1937, title: 'Bombardarea Guernicăi', lat: 43.3140, lng: -2.6780, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Bundesarchiv_Bild_183-H25224%2C_Guernica%2C_zerst%C3%B6rte_H%C3%A4user.jpg/800px-Bundesarchiv_Bild_183-H25224%2C_Guernica%2C_zerst%C3%B6rte_H%C3%A4user.jpg', description: 'Un bombardament aerian devastator asupra orașului basc Guernica de către Legiunea Condor a Germaniei naziste, un act de teroare împotriva civililor în timpul Războiului Civil Spaniol.' },
        { type: 'major', year: 1937, title: 'Războiul Sino-Japonez', lat: 39.9042, lng: 116.4074, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Second_Sino-Japanese_War_montage.jpg/800px-Second_Sino-Japanese_War_montage.jpg', description: 'O ciocnire între trupele japoneze și chineze la Podul Marco Polo duce la o invazie pe scară largă a Chinei de către Japonia, marcând începutul războiului în Asia.' },
        { type: 'atrocity', year: 1937, title: 'Masacrul de la Nanking', lat: 32.0603, lng: 118.7969, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Nanking_refugees_in_1937.jpg/800px-Nanking_refugees_in_1937.jpg', description: 'O perioadă de atrocități în masă comise de trupele japoneze după capturarea orașului Nanking, capitala Chinei. Evenimentele includ execuții, violuri și jafuri pe scară largă.' },
        { 
            type: 'major', 
            year: 1938, 
            title: 'Instaurarea dictaturii regale a lui Carol al II-lea', 
            lat: 44.4396, 
            lng: 26.0963, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/83/Regele_Carol_al_II-lea.jpg', 
            description: 'Printr-o lovitură de stat, Regele Carol al II-lea suspendă Constituția din 1923, dizolvă partidele politice şi instaurează un regim de autoritate personală, punând capăt democraţiei parlamentare interbelice din România.',
            context: 'Scena politică românească la sfârşitul anilor \'30 era extrem de fragmentată. Ascensiunea Gărzii de Fier reprezenta o amenințare directă. Ambițios şi autoritar, Carol al II-lea a exploatat această criză pentru a-şi atinge un obiectiv mai vechi: concentrarea puterii în propriile mâini.',
            figures: [
                { name: 'Regele Carol al II-lea', role: 'Arhitectul şi beneficiarul principal al dictaturii' },
                { name: 'Armand Călinescu', role: 'Omul forte al regimului, ministru de interne' },
                { name: 'Patriarhul Miron Cristea', role: 'Prim-ministru, a oferit o faţadă de legitimitate' }
            ],
            impact: 'A transformat fundamental structura statului, înlocuind constituția democratică cu una autoritară. Partidele au fost dizolvate și înlocuite cu un partid unic, Frontul Renaşterii Naţionale. Deși a suprimat temporar Garda de Fier, regimul nu a avut sprijin popular real şi s-a prăbuşit în 1940.'
        },
        { 
            type: 'major', 
            year: 1938, 
            title: 'Anschluss (Anexarea Austriei)', 
            lat: 48.2082, 
            lng: 16.3738, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Bundesarchiv_Bild_183-1987-0922-500%2C_Wien%2C_Einmarsch_deutscher_Truppen.jpg/800px-Bundesarchiv_Bild_183-1987-0922-500%2C_Wien%2C_Einmarsch_deutscher_Truppen.jpg', 
            description: 'Germania Nazistă anexează Austria într-o uniune politică (Anschluss), realizând visul lui Hitler de a uni toate popoarele germanofone. Anexarea a fost realizată prin presiune politică şi ameninţarea cu invazia militară.',
            context: 'Hitler, austriac de origine, considera unirea celor două naţiuni un pas esențial în crearea unei "Germanii Mari". Exploatând mişcarea nazistă locală, el l-a forțat pe cancelarul austriac Kurt Schuschnigg să demisioneze.',
            figures: [
                { name: 'Adolf Hitler', role: 'A orchestrat anexarea' },
                { name: 'Kurt Schuschnigg', role: 'Cancelarul Austriei, forţat să demisioneze' },
                { name: 'Arthur Seyss-Inquart', role: 'Nazist austriac, instalat cancelar' }
            ],
            impact: 'Anexarea a întărit masiv poziția strategică şi resursele Germaniei. Pasivitatea puterilor occidentale l-a încurajat pe Hitler să îşi continue agenda expansionistă, următoarea țintă fiind Cehoslovacia.'
        },
        { type: 'minor', year: 1938, title: 'Conferința de la Évian', lat: 46.4015, lng: 6.5909, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/%C3%89vian_Conference.jpg/800px-%C3%89vian_Conference.jpg', description: 'O conferință internațională convocată pentru a discuta criza refugiaților evrei. Eșecul majorității țărilor de a accepta mai mulți refugiați a avut consecințe tragice.' },
        { 
            type: 'major', 
            year: 1938, 
            title: 'Acordul de la München', 
            lat: 48.1380, 
            lng: 11.5752, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Bundesarchiv_Bild_183-R69173%2C_M%C3%BCnchener_Abkommen%2C_Unterzeichnung.jpg/800px-Bundesarchiv_Bild_183-R69173%2C_M%C3%BCnchener_Abkommen%2C_Unterzeichnung.jpg', 
            description: 'Un acord încheiat între Germania, Marea Britanie, Franţa şi Italia, care a permis Germaniei să anexeze Regiunea Sudetă a Cehoslovaciei. Acordul este considerat apogeul politicii de conciliere ("appeasement").',
            context: 'Hitler a fabricat o criză, pretinzând că etnicii germani din Sudeți sunt persecutați și ameninţând cu războiul. Liderii britanici şi francezi, disperați să evite un conflict, au sacrificat integritatea teritorială a Cehoslovaciei.',
            figures: [
                { name: 'Adolf Hitler', role: 'Cancelarul Germaniei' },
                { name: 'Neville Chamberlain', role: 'Prim-ministrul Marii Britanii' },
                { name: 'Édouard Daladier', role: 'Prim-ministrul Franţei' }
            ],
            impact: 'Departe de a asigura "pacea pentru timpurile noastre", acordul l-a convins pe Hitler că democraţiile occidentale sunt slabe, a distrus credibilitatea alianțelor franceze în Europa de Est şi a lăsat Cehoslovacia fără apărare.'
        },
        { type: 'minor', year: 1938, title: 'Primul Dictat de la Viena', lat: 48.2082, lng: 16.3738, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/First_Vienna_Award_ethnic_map.svg/800px-First_Vienna_Award_ethnic_map.svg.png', description: 'Un arbitraj teritorial condus de Germania și Italia, care a forțat Cehoslovacia să cedeze Ungariei teritorii locuite majoritar de maghiari.' },
        { type: 'atrocity', year: 1938, title: 'Kristallnacht', lat: 50.11, lng: 8.68, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Synagogue_of_Siegen_burned_down_on_Kristallnacht_-_1938.jpg/800px-Synagogue_of_Siegen_burned_down_on_Kristallnacht_-_1938.jpg', description: 'Un pogrom masiv împotriva evreilor din Germania Nazistă și Austria, în care sinagogi, afaceri și case au fost distruse, marcând o escaladare violentă a persecuției.' }
    ],
    '1939': [
        { type: 'minor', year: 1939, title: 'Operațiunea Himmler - Gleiwitz', lat: 50.3115, lng: 18.6761, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Bundesarchiv_Bild_183-S55480%2C_Gleiwitz%2C_Sender.jpg/800px-Bundesarchiv_Bild_183-S55480%2C_Gleiwitz%2C_Sender.jpg', description: '31 august 1939. O serie de incidente sub steag fals înscenate de SS pentru a crea un pretext de agresiune poloneză. Cel mai faimos a fost atacul simulat asupra postului de radio din Gleiwitz, folosit de Hitler pentru a justifica invazia Poloniei.' },
        { 
            type: 'major', 
            year: 1939, 
            title: 'Invazia Poloniei (Fall Weiss)', 
            lat: 54.4075, 
            lng: 18.6708, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Bundesarchiv_Bild_183-52033-0016%2C_Polen%2C_K%C3%A4mpfe_in_Gdingen.jpg/800px-Bundesarchiv_Bild_183-52033-0016%2C_Polen%2C_K%C3%A4mpfe_in_Gdingen.jpg', 
            description: 'Germania lansează o invazie masivă a Poloniei fără o declarație de război, folosind tactica "Blitzkrieg" (război fulger). Acest act de agresiune a marcat începutul celui de-al Doilea Război Mondial în Europa.',
            context: 'Asigurându-şi flancul estic prin Pactul Molotov-Ribbentrop cu URSS, care conținea un protocol secret pentru împărţirea Poloniei, Hitler a putut să atace fără teama unui război pe două fronturi.',
            figures: [
                { name: 'Adolf Hitler', role: 'A ordonat invazia' },
                { name: 'Heinz Guderian', role: 'General german, pionier al războiului cu tancuri' }
            ],
            impact: 'Pe 3 septembrie, Marea Britanie şi Franţa au declarat război Germaniei, dar nu au oferit un ajutor militar semnificativ. Invazia a dus la înfrângerea şi împărţirea rapidă a Poloniei între Germania şi Uniunea Sovietică.'
        },
        { type: 'minor', year: 1939, title: 'Ofensiva din Saar', lat: 49.2333, lng: 7.0000, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Saar_Offensive_1939.svg/800px-Saar_Offensive_1939.svg.png', description: '7-16 septembrie 1939. Într-o încercare simbolică de a ajuta Polonia, armata franceză avansează aproximativ 8 km în teritoriul german Saarland. Ofensiva este oprită rapid, iar forțele se retrag în spatele Liniei Maginot.' },
        { type: 'major', year: 1939, title: 'Invazia Sovietică a Poloniei', lat: 52.0976, lng: 23.7341, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Soviet_and_German_soldiers_in_Poland_1939.jpg/800px-Soviet_and_German_soldiers_in_Poland_1939.jpg', description: '17 septembrie 1939. Conform protocolului secret al Pactului Molotov-Ribbentrop, Armata Roșie invadează Polonia dinspre est, întâmpinând o rezistență redusă și pecetluind soarta națiunii poloneze.' },
        { type: 'major', year: 1939, title: 'Capitularea Varșoviei', lat: 52.2297, lng: 21.0122, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Varsovie_bombardement_1939.jpg/800px-Varsovie_bombardement_1939.jpg', description: '27 septembrie 1939. După aproape trei săptămâni de asediu și bombardamente devastatoare, care au ucis zeci de mii de civili, garnizoana Varșoviei se predă forțelor germane.' },
        { type: 'major', year: 1939, title: 'Sfârșitul Campaniei din Polonia', lat: 51.6394, lng: 22.4419, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Polish_soldiers_in_1939.jpg/800px-Polish_soldiers_in_1939.jpg', description: '6 octombrie 1939. După Bătălia de la Kock, ultimele unități operaționale poloneze capitulează. Polonia este complet ocupată și împărțită între Germania și Uniunea Sovietică.' },
        { type: 'atrocity', year: 1939, title: 'Înființarea primului ghetou', lat: 51.4071, lng: 19.6953, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Piotrkow_Trybunalski_ghetto_memorial.jpg/800px-Piotrkow_Trybunalski_ghetto_memorial.jpg', description: '8 octombrie 1939. La Piotrków Trybunalski, autoritățile germane stabilesc primul ghetou evreiesc, inițiind politica de segregare forțată a populației evreiești.' },
        { type: 'minor', year: 1939, title: 'Scufundarea HMS Royal Oak', lat: 58.8970, lng: -3.0449, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/HMS_Royal_Oak_sinking_in_Scapa_Flow.jpg/800px-HMS_Royal_Oak_sinking_in_Scapa_Flow.jpg', description: '14 octombrie 1939. Submarinul german U-47 pătrunde în baza navală britanică de la Scapa Flow și scufundă cuirasatul HMS Royal Oak, o lovitură semnificativă pentru moralul britanic.' },
        { type: 'major', year: 1939, title: 'Începutul Războiului de Iarnă', lat: 60.5333, lng: 29.9167, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Antti_Vorho_ja_tuntematon_sotilas_t%C3%A4hyilev%C3%A4t_vihollista_korsusta_konekiv%C3%A4%C3%A4rin_kanssa_Summassa_1939-12-21.jpg/800px-Antti_Vorho_ja_tuntematon_sotilas_t%C3%A4hyilev%C3%A4t_vihollista_korsusta_konekiv%C3%A4%C3%A4rin_kanssa_Summassa_1939-12-21.jpg', description: '30 noiembrie 1939. Uniunea Sovietică invadează Finlanda. Deși mult inferioară numeric, armata finlandeză opune o rezistență neașteptat de eficientă, profitând de teren și de condițiile de iarnă.' },
        { type: 'minor', year: 1939, title: 'Bătălia de la Río de la Plata', lat: -35.0, lng: -56.0, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/GrafSpeeInFlames.jpg/800px-GrafSpeeInFlames.jpg', description: '13 decembrie 1939. O escadră de crucișătoare britanice avariază cuirasatul de buzunar german Admiral Graf Spee, care se refugiază în Montevideo și este ulterior sabordat de propriul comandant. Prima victorie navală majoră a Aliaților.' },
    ],
    '1940': [
        { type: 'major', year: 1940, title: 'Invazia Danemarcei și Norvegiei', lat: 59.9139, lng: 10.7522, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Bundesarchiv_Bild_101I-040-3642-10A%2C_Norwegen%2C_Narvik%2C_deutsche_Gebirgsj%C3%A4ger.jpg/800px-Bundesarchiv_Bild_101I-040-3642-10A%2C_Norwegen%2C_Narvik%2C_deutsche_Gebirgsj%C3%A4ger.jpg', description: '9 aprilie 1940. Germania lansează Operațiunea Weserübung, invadând Danemarca (care capitulează în câteva ore) și Norvegia, pentru a-și asigura rutele de minereu de fier și a obține baze strategice.' },
        { 
            type: 'major', 
            year: 1940, 
            title: 'Bătălia Franței (Blitzkrieg)', 
            lat: 49.7020, 
            lng: 4.9476, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Bundesarchiv_Bild_101I-123-0213-06%2C_Westfeldzug%2C_Panzer_IV.jpg/800px-Bundesarchiv_Bild_101I-123-0213-06%2C_Westfeldzug%2C_Panzer_IV.jpg', 
            description: 'Germania lansează o ofensivă fulgerătoare în vest, ocolind Linia Maginot printr-o mişcare surpriză prin Pădurea Ardeni. Tactica a dus la încercuirea forţelor aliate și la o înfrângere catastrofală şi rapidă a Franţei.',
            context: 'După o perioadă de acalmie cunoscută ca "Războiul Ciudat", Germania a pus în aplicare Planul Manstein, un plan îndrăzneţ care miza pe viteză şi surpriză. Aliații au căzut în capcană, avansând în Belgia pentru a întâlni un atac de diversiune.',
            figures: [
                { name: 'Erich von Manstein', role: 'Strategul german care a conceput planul' },
                { name: 'Heinz Guderian', role: 'A condus atacul blindat prin Ardeni' },
                { name: 'Maurice Gamelin', role: 'Comandantul suprem francez' }
            ],
            impact: 'Înfrângerea a dus la evacuarea de la Dunkerque, la căderea Parisului şi la semnarea armistițiului umilitor de către Franţa. Succesul a creat mitul invincibilităţii Wehrmacht-ului şi a lăsat Marea Britanie singură în faţa Germaniei.'
        },
        { 
            type: 'major', 
            year: 1940, 
            title: 'Evacuarea de la Dunkerque', 
            lat: 51.0344, 
            lng: 2.3768, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/The_evacuation_of_the_BEF_from_Dunkirk%2C_June_1940_F4826.jpg/800px-The_evacuation_of_the_BEF_from_Dunkirk%2C_June_1940_F4826.jpg', 
            description: 'O operaţiune de evacuare maritimă de o amploare fără precedent, prin care peste 338.000 de soldaţi aliaţi (britanici şi francezi) au fost salvați de pe plaje, după ce au fost încercuiți de armata germană.',
            context: 'Înaintarea rapidă a tancurilor germane a izolat Forța Expediţionară Britanică. Un ordin controversat de oprire a tancurilor germane, dat de Hitler, a oferit o fereastră crucială pentru organizarea evacuării.',
            figures: [
                { name: 'Winston Churchill', role: 'Prim-ministrul britanic' },
                { name: 'Amiralul Bertram Ramsay', role: 'A coordonat complexa operațiune navală' }
            ],
            impact: 'Deşi o înfrângere militară, evacuarea a fost o victorie morală extraordinară. "Miracolul de la Dunkerque" a salvat nucleul armatei britanice, permițând Marii Britanii să continue lupta.'
        },
        { 
            type: 'major', 
            year: 1940, 
            title: 'Cedarea Basarabiei și a Bucovinei de Nord', 
            lat: 47.0105, 
            lng: 28.8638, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/Cedarea_Basarabiei_si_a_Bucovinei_de_Nord_in_1940.jpg', 
            description: 'În urma unui ultimatum sovietic, România a fost forțată să cedeze Uniunii Sovietice teritoriile Basarabiei, Bucovinei de Nord şi ţinutului Herţa. Armata română s-a retras fără luptă.',
            context: 'Cedarea a fost o consecință directă a Pactului Molotov-Ribbentrop. După căderea Franţei, principalul aliat al României, şi cu Germania concentrată în vest, Stalin a văzut oportunitatea de a-şi pune în aplicare pretențiile teritoriale.',
            figures: [
                { name: 'Regele Carol al II-lea', role: 'Monarhul României, care a acceptat ultimatumul' },
                { name: 'Viaceslav Molotov', role: 'Ministrul de externe sovietic' }
            ],
            impact: 'Pierderea teritorială a fost un şoc național devastator, a discreditat complet regimul Regelui Carol al II-lea şi a aruncat România într-o criză politică profundă, împingând țara spre o alianță cu Germania Nazistă.'
        },
        { 
            type: 'atrocity', 
            year: 1940, 
            title: 'Promulgarea legilor rasiale în România', 
            lat: 44.4396, 
            lng: 26.0963, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7c/Legile_rasiale_din_Romania_1940.jpg', 
            description: 'Sub autoritatea Regelui Carol al II-lea, guvernul Ion Gigurtu a promulgat un pachet de legi rasiale care au definit juridic statutul evreilor pe criterii de sânge, interzicându-le accesul la viața publică şi economică.',
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
            description: 'Un arbitraj teritorial impus de Germania Nazistă şi Italia Fascistă, prin care România a fost forţată să cedeze Ungariei partea de nord-vest a Transilvaniei.',
            context: 'După pierderea Basarabiei, România a rămas complet izolată diplomatic. Ungaria, un aliat al Axei, a profitat de slăbiciunea României. Hitler a mediat conflictul pentru a menţine stabilitatea în regiune şi a asigura loialitatea ambelor state.',
            figures: [
                { name: 'Ion Gigurtu', role: 'Prim-ministrul României' },
                { name: 'Joachim von Ribbentrop & Galeazzo Ciano', role: 'Miniştri de externe german şi italian' }
            ],
            impact: 'Pierderea Transilvaniei de Nord a fost o traumă națională și mai mare decât cea a Basarabiei, ducând la prăbuşirea finală a autorității Regelui Carol al II-lea şi la preluarea puterii de către Generalul Ion Antonescu.'
        },
        { 
            type: 'major', 
            year: 1940, 
            title: 'Instaurarea Statului Naţional-Legionar', 
            lat: 44.4396, 
            lng: 26.0963, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Antonescu_%26_Sima_1940.jpg', 
            description: 'În urma protestelor masive cauzate de pierderile teritoriale, Regele Carol al II-lea a fost forțat să abdice în favoarea fiului său, Mihai I. Puterea reală a fost preluată de Generalul Ion Antonescu, care s-a autoproclamat "Conducător" şi a format un guvern împreună cu Garda de Fier.',
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
            description: 'O campanie aeriană crucială în care Royal Air Force (RAF) a apărat cu succes Marea Britanie împotriva atacurilor pe scară largă ale Luftwaffe. A fost prima bătălie majoră din istorie purtată integral în aer.',
            context: 'După căderea Franței, Hitler se pregătea să invadeze Marea Britanie (Operațiunea Leul de Mare), dar pentru aceasta avea nevoie de superioritate aeriană. Bătălia a fost o încercare a Germaniei de a distruge RAF.',
            figures: [
                { name: 'Winston Churchill', role: 'Prim-ministrul britanic' },
                { name: 'Hugh Dowding', role: 'Comandantul RAF Fighter Command' },
                { name: 'Hermann Göring', role: 'Comandantul Luftwaffe' }
            ],
            impact: 'Victoria RAF a fost un punct de cotitură fundamental. A fost prima înfrângere majoră a Germaniei Naziste şi a anulat planurile de invazie, asigurând supraviețuirea Marii Britanii ca bastion aliat.'
        },
        { type: 'major', year: 1940, title: 'Intrarea Italiei în război', lat: 41.9028, lng: 12.4964, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Benito_Mussolini_e_Adolf_Hitler.jpg/800px-Benito_Mussolini_e_Adolf_Hitler.jpg', description: '10 iunie 1940. Văzând prăbușirea iminentă a Franței, Benito Mussolini declară război Franței și Marii Britanii, sperând la câștiguri teritoriale.' },
        { type: 'major', year: 1940, title: 'Căderea Parisului', lat: 48.8566, lng: 2.3522, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Bundesarchiv_Bild_146-1975-042-13%2C_Paris%2C_deutsche_Truppen_am_Arc_de_Triomphe.jpg/800px-Bundesarchiv_Bild_146-1975-042-13%2C_Paris%2C_deutsche_Truppen_am_Arc_de_Triomphe.jpg', description: '14 iunie 1940. Trupele germane intră în capitala franceză, care fusese declarată oraș deschis pentru a evita distrugerea. Guvernul francez se refugiase la Bordeaux.' },
        { type: 'minor', year: 1940, title: 'Armistițiul de la Compiègne', lat: 49.4275, lng: 2.8444, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/92/Bundesarchiv_Bild_183-H28708%2C_Waffenstillstand_von_Compi%C3%A8gne%2C_Verhandlungen.jpg/800px-Bundesarchiv_Bild_183-H28708%2C_Waffenstillstand_von_Compi%C3%A8gne%2C_Verhandlungen.jpg', description: '22 iunie 1940. Guvernul francez condus de Mareșalul Pétain semnează un armistițiu umilitor. Franța este împărțită într-o zonă ocupată și o zonă "liberă" guvernată de un regim colaboraționist la Vichy.' },
        { type: 'atrocity', year: 1940, title: 'Începutul "The Blitz"', lat: 51.5072, lng: -0.1276, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/London_in_the_Blitz_1940_HU36113.jpg/800px-London_in_the_Blitz_1940_HU36113.jpg', description: '7 septembrie 1940. O campanie de bombardamente strategice susținute ale Luftwaffe asupra Londrei și a altor orașe britanice, care a durat 8 luni și a ucis zeci de mii de civili, dar nu a reușit să frângă moralul britanic.' },
        { type: 'major', year: 1940, title: 'Semnarea Pactului Tripartit', lat: 52.5200, lng: 13.4050, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Bundesarchiv_Bild_183-B02547%2C_Berlin%2C_Unterzeichnung_Dreim%C3%A4chtepakt.jpg/800px-Bundesarchiv_Bild_183-B02547%2C_Berlin%2C_Unterzeichnung_Dreim%C3%A4chtepakt.jpg', description: '27 septembrie 1940. Germania, Italia și Japonia semnează Pactul Tripartit la Berlin, formând alianța militară cunoscută ca Puterile Axei, menită să descurajeze SUA să intre în război.' },
        { type: 'minor', year: 1940, title: 'Bătălia de la Taranto', lat: 40.4710, lng: 17.2398, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/The_Italian_battleship_Giulio_Cesare_under_attack_by_British_aircraft_at_the_Battle_of_Taranto_on_11_November_1940.jpg/800px-The_Italian_battleship_Giulio_Cesare_under_attack_by_British_aircraft_at_the_Battle_of_Taranto_on_11_November_1940.jpg', description: '11-12 noiembrie 1940. Un atac aerian surpriză, lansat de pe portavionul HMS Illustrious cu biplane învechite, neutralizează o mare parte a flotei de luptă italiene, demonstrând vulnerabilitatea navelor în porturi.' },
        { type: 'minor', year: 1940, title: 'Operațiunea Compass', lat: 28.5, lng: 27.0, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Italian_prisoners_captured_during_Operation_Compass.jpg/800px-Italian_prisoners_captured_during_Operation_Compass.jpg', description: '9 decembrie 1940 - 9 februarie 1941. O contraofensivă aliată masivă în deșertul vestic care distruge Armata a 10-a italiană, capturând 138.000 de prizonieri și avansând adânc în Libia.' },
        { type: 'atrocity', year: 1940, title: 'Înființarea Lagărului Auschwitz', lat: 50.0264, lng: 19.2094, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Bundesarchiv_Bild_183-N0827-318%2C_KZ_Auschwitz%2C_Ankunft_ungarischer_Juden.jpg/800px-Bundesarchiv_Bild_183-N0827-318%2C_KZ_Auschwitz%2C_Ankunft_ungarischer_Juden.jpg', description: '20 mai 1940. SS înființează lagărul de concentrare și exterminare de la Auschwitz-Birkenau. Acesta a devenit cel mai mare lagăr nazist, unde au fost uciși peste 1.1 milioane de oameni.' },
        { type: 'atrocity', year: 1940, title: 'Sigilarea Ghetoului din Varșovia', lat: 52.2461, lng: 20.9922, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Bundesarchiv_Bild_101I-134-0791-20%2C_Polen%2C_Warschauer_Ghetto%2C_Mauerbau.jpg/800px-Bundesarchiv_Bild_101I-134-0791-20%2C_Polen%2C_Warschauer_Ghetto%2C_Mauerbau.jpg', description: '16 noiembrie 1940. Cel mai mare ghetou din Europa este închis ermetic. Aproximativ 400.000 de evrei sunt înghesuiți într-o suprafață de 3,4 km², supuși înfometării și bolilor.' }
    ],
    '1941': [
        { 
            type: 'atrocity', 
            year: 1941, 
            title: 'Rebeliunea Legionară şi Pogromul de la Bucureşti', 
            lat: 44.4396, 
            lng: 26.0963, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/52/Bucharest_Pogrom_1941.jpg', 
            description: 'O tentativă violentă a Gărzii de Fier de a prelua puterea totală în stat prin înlăturarea lui Ion Antonescu. Rebeliunea a fost însoțită de un pogrom brutal împotriva evreilor din Bucureşti.',
            context: 'Coabitarea dintre Antonescu şi Garda de Fier a fost extrem de tensionată. Legionarii doreau o revoluţie totală, în timp ce Antonescu dorea ordine şi disciplină, bazându-se pe sprijinul armatei. Conflictul a escaladat după ce Antonescu a început să înlăture prefecţii legionari.',
            figures: [
                { name: 'Ion Antonescu', role: 'Conducătorul statului' },
                { name: 'Horia Sima', role: 'Liderul Gărzii de Fier' }
            ],
            impact: 'Antonescu, cu acordul tacit al lui Hitler, a folosit armata pentru a înăbuşi sângeros rebeliunea. Garda de Fier a fost scoasă în afara legii. Evenimentul a consolidat dictatura militară personală a lui Antonescu.'
        },
        { 
            type: 'major', 
            year: 1941, 
            title: 'Intrarea României în război', 
            lat: 47.0105, 
            lng: 28.8638, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/a/a3/Propaganda_poster_for_the_war_against_the_Soviet_Union_in_Romania.jpg', 
            description: 'Armata Română, sub comanda lui Ion Antonescu, s-a alăturat Germaniei Naziste în invazia Uniunii Sovietice (Operațiunea Barbarossa). Obiectivul principal declarat a fost eliberarea Basarabiei şi a Bucovinei de Nord.',
            context: 'După pierderile teritoriale din 1940, opinia publică şi clasa politică românească erau dominate de un puternic sentiment revanşard. Alianța cu Germania era văzută ca singura cale de a recupera teritoriile pierdute.',
            figures: [
                { name: 'Ion Antonescu', role: 'Conducătorul României şi comandantul suprem' },
                { name: 'Adolf Hitler', role: 'Liderul Germaniei Naziste' }
            ],
            impact: 'Trupele române au eliberat rapid teritoriile pierdute, dar Antonescu a făcut greşeala fatală de a continua războiul dincolo de Nistru, până la Stalingrad, transformând un război de eliberare într-unul de agresiune.'
        },
        { 
            type: 'atrocity', 
            year: 1941, 
            title: 'Pogromul de la Iași', 
            lat: 47.1585, 
            lng: 27.6014, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Ia%C8%99i_pogrom_-_Jews_being_led_to_the_police_station.jpg', 
            description: 'Un masacru de o brutalitate extremă, în care autoritățile române, cu participare germană şi civilă, au ucis peste 13.000 de evrei. Evenimentul a inclus execuții în masă și deportări în "trenurile morţii".',
            context: 'Pogromul a avut loc la doar câteva zile după intrarea României în război. Autoritățile, în frunte cu Antonescu, au cultivat mitul "amenințării iudeo-bolșevice", folosind două bombardamente sovietice minore ca pretext pentru a dezlănțui o isterie colectivă.',
            figures: [
                { name: 'Ion Antonescu', role: 'Conducătorul statului, a dat ordinul de "curățare a Iaşiului"' },
                { name: 'Ofiţeri SSI şi Abwehr', role: 'Responsabili de planificare' },
                { name: 'Poliţia, jandarmeria, armata română', role: 'Principalii executanți' }
            ],
            impact: 'Un act de genocid premeditat şi organizat de stat. Peste 13.266 de evrei au fost ucişi. Masacrul a demonstrat că regimul Antonescu era un perpetrator activ şi zelos al Holocaustului, capabil să organizeze pe cont propriu masacre de o amploare terifiantă.'
        },
        { 
            type: 'major', 
            year: 1941, 
            title: 'Asediul Odesei și masacrele subsecvente', 
            lat: 46.4825, 
            lng: 30.7233, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/e1/Romanian_soldiers_in_Odessa_1941.jpg', 
            description: 'O campanie militară majoră a Armatei a 4-a Române pentru cucerirea portului strategic Odesa, urmată de un masacru de proporţii împotriva populaţiei evreiești a oraşului.',
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
            description: 'Germania lansează cea mai mare invazie terestră din istorie, atacând Uniunea Sovietică pe un front de mii de kilometri. Acţiunea a anulat Pactul Molotov-Ribbentrop şi a deschis Frontul de Est.',
            context: 'Motivat de ideologia sa anti-comunistă şi rasistă, Hitler dorea să cucerească "spațiul vital" (Lebensraum) în est. El a subestimat grav resursele URSS şi dificultățile logistice şi climatice.',
            figures: [
                { name: 'Adolf Hitler', role: 'A ordonat şi a micro-gestionat invazia' },
                { name: 'Iosif Stalin', role: 'Liderul sovietic, a mobilizat rezistența totală' }
            ],
            impact: 'Deşi a avut succese inițiale spectaculoase, operaţiunea a eşuat în a atinge obiectivul unei victorii rapide. Eşecul în faţa Moscovei a blocat Germania într-un război de uzură pe care nu-l putea câştiga.'
        },
        { 
            type: 'major', 
            year: 1941, 
            title: 'Atacul de la Pearl Harbor', 
            lat: 21.3512, 
            lng: -157.9802, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/USS_Shaw_exploding_in_Pearl_Harbor.jpg/800px-USS_Shaw_exploding_in_Pearl_Harbor.jpg', 
            description: 'Un atac aerian surpriză devastator, lansat de marina imperială japoneză asupra bazei navale americane. Atacul a fost menit să neutralizeze flota americană din Pacific.',
            context: 'Tensiunile dintre SUA şi Japonia au escaladat din cauza expansiunii japoneze în China şi a embargoului american asupra petrolului. Conducerea militară japoneză a optat pentru o lovitură preventivă.',
            figures: [
                { name: 'Amiralul Isoroku Yamamoto', role: 'Strategul principal al atacului' },
                { name: 'Franklin D. Roosevelt', role: 'Preşedintele SUA' }
            ],
            impact: 'Deşi un succes tactic, a fost un dezastru strategic. A unit o Americă anterior izolaționistă, aducând imensa sa putere industrială şi militară în război. Crucial, portavioanele americane au scăpat nevătămate.'
        },
        { type: 'major', year: 1941, title: 'Legea Lend-Lease', lat: 38.8951, lng: -77.0364, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Signing_the_Lend-Lease_Bill.jpg/800px-Signing_the_Lend-Lease_Bill.jpg', description: '11 martie 1941. SUA adoptă Legea Lend-Lease, permițând transferul de materiale de război către națiunile Aliate, un pas decisiv care transformă SUA în "arsenalul democrației".' },
        { type: 'major', year: 1941, title: 'Invazia Iugoslaviei și Greciei', lat: 44.7866, lng: 20.4489, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bundesarchiv_Bild_101I-169-1588-12%2C_Griechenland%2C_Soldaten_auf_Panzer_IV.jpg/800px-Bundesarchiv_Bild_101I-169-1588-12%2C_Griechenland%2C_Soldaten_auf_Panzer_IV.jpg', description: '6 aprilie 1941. Germania invadează Iugoslavia și Grecia pentru a securiza flancul sudic înainte de invazia URSS. Campania culminează cu Bătălia din Creta, prima invazie majoră aeropurtată din istorie.' },
        { type: 'minor', year: 1941, title: 'Asediul Tobrukului', lat: 32.0763, lng: 23.9598, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Australian_25-pounder_gun_at_El_Alamein_1942.jpg/800px-Australian_25-pounder_gun_at_El_Alamein_1942.jpg', description: '10 aprilie - 27 noiembrie 1941. Timp de 241 de zile, garnizoana aliată din portul strategic Tobruk, majoritatea australieni ("Șobolanii din Tobruk"), rezistă atacurilor germano-italiene, blocând înaintarea Axei spre Egipt.' },
        { type: 'atrocity', year: 1941, title: '"Holocaustul prin gloanțe"', lat: 50.4719, lng: 30.4494, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/The_massacre_of_Jews_in_Ivangorod%2C_Ukraine%2C_in_1942.jpg/800px-The_massacre_of_Jews_in_Ivangorod%2C_Ukraine%2C_in_1942.jpg', description: 'Începând cu iunie 1941. Odată cu invazia URSS, unitățile mobile de ucidere (Einsatzgruppen) încep masacrarea sistematică a evreilor, oficialilor comuniști și romilor, ducând la moartea a peste 1,5 milioane de oameni.' },
        { type: 'major', year: 1941, title: 'Asediul Leningradului', lat: 59.9343, lng: 30.3351, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/RIAN_archive_359_Leningrad_under_siege.jpg/800px-RIAN_archive_359_Leningrad_under_siege.jpg', description: '8 septembrie 1941 - 27 ianuarie 1944. Forțele germane și finlandeze încercuiesc complet Leningradul. Asediul de 872 de zile devine unul dintre cele mai brutale din istorie, ducând la moartea a peste un milion de civili, majoritatea prin înfometare.' },
        { type: 'atrocity', year: 1941, title: 'Masacrul de la Babi Yar', lat: 50.4719, lng: 30.4494, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Bundesarchiv_Bild_101I-218-0511-09%2C_Russland%2C_Babi_Jar%2C_Leichen.jpg/800px-Bundesarchiv_Bild_101I-218-0511-09%2C_Russland%2C_Babi_Jar%2C_Leichen.jpg', description: '29-30 septembrie 1941. La o râpă de la periferia Kievului, unități ale Einsatzgruppe C, împreună cu auxiliari locali, ucid prin împușcare 33.771 de evrei în decurs de două zile. Acesta rămâne unul dintre cele mai mari masacre individuale ale Holocaustului.' },
        { type: 'major', year: 1941, title: 'Bătălia de la Moscova', lat: 55.7512, lng: 37.6184, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/RIAN_archive_858_T-34_tanks_in_ambush.jpg/800px-RIAN_archive_858_T-34_tanks_in_ambush.jpg', description: '30 septembrie 1941 - 7 ianuarie 1942. Ofensiva finală germană pentru capturarea Moscovei eșuează din cauza rezistenței acerbe, a noroiului și a gerului. Contraofensiva sovietică din decembrie marchează eșecul strategic al Operațiunii Barbarossa.' },
        { type: 'minor', year: 1941, title: 'Germania și Italia declară război SUA', lat: 52.5200, lng: 13.4050, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Bundesarchiv_Bild_183-B20320%2C_Berlin%2C_Reichstagssitzung%2C_Rede_Adolf_Hitler.jpg/800px-Bundesarchiv_Bild_183-B20320%2C_Berlin%2C_Reichstagssitzung%2C_Rede_Adolf_Hitler.jpg', description: '11 decembrie 1941. Într-o eroare strategică majoră, Hitler și Mussolini declară război Statelor Unite, eliminând orice posibilitate ca SUA să se concentreze exclusiv pe Pacific și solidificând Marea Alianță.' }
    ],
    '1942': [
        { 
            type: 'major', 
            year: 1942, 
            title: 'Participarea României la Campania din Crimeea', 
            lat: 45.3453, 
            lng: 34.4997, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Romanian_mountain_troops_in_Crimea_1941.jpg/800px-Romanian_mountain_troops_in_Crimea_1941.jpg', 
            description: 'Unități semnificative ale armatei române, în special Corpul Vânătorilor de Munte, au participat alături de Armata a 11-a germană la campania de cucerire a Peninsulei Crimeea, culminând cu asediul brutal şi căderea Sevastopolului.',
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
            description: 'Armatele a 3-a şi a 4-a Române, slab echipate şi întinse pe un front mult prea larg, au fost însărcinate cu protejarea flancurilor Armatei a 6-a germane. Contraofensiva sovietică (Operațiunea Uranus) a lovit exact în aceste sectoare, spulberând trupele române.',
            context: 'După succesele din 1941, Antonescu a angajat un număr tot mai mare de trupe române pe Frontul de Est. Armatele române erau dotate cu armament antitanc inadecvat şi nu au primit sprijinul promis de la comandamentul german.',
            figures: [
                { name: 'Generalul Petre Dumitrescu', role: 'Comandantul Armatei a 3-a Române' },
                { name: 'Generalul Constantin Constantinescu-Claps', role: 'Comandantul Armatei a 4-a Române' }
            ],
            impact: 'Dezastrul de la Cotul Donului a fost cea mai mare înfrângere militară din istoria României, cu pierderi de peste 150.000 de soldaţi. A distrus capacitatea ofensivă a armatei şi a generat un puternic curent anti-război în ţară.'
        },
        { 
            type: 'major', 
            year: 1942, 
            title: 'Bătălia de la Midway', 
            lat: 28.2076, 
            lng: -177.3725, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/USS_Yorktown_%28CV-5%29_is_hit_on_4_June_1942.jpg/800px-USS_Yorktown_%28CV-5%29_is_hit_on_4_June_1942.jpg', 
            description: 'O bătălie navală decisivă şi punctul de cotitură al războiului din Pacific. Flota americană a înfrânt în mod categoric flota japoneză, scufundând patru dintre portavioanele sale de elită.',
            context: 'Marina japoneză a încercat să atragă flota americană într-o bătălie finală la Midway. Datorită decriptării codurilor navale japoneze, amiralul Nimitz cunoştea în detaliu planul de atac japonez.',
            figures: [
                { name: 'Amiralul Chester W. Nimitz', role: 'Comandantul forţelor americane din Pacific' },
                { name: 'Amiralul Chuichi Nagumo', role: 'Comandantul forţei de atac japoneze' }
            ],
            impact: 'Pierderea celor patru portavioane a fost o lovitură de la care Japonia nu şi-a mai revenit. Bătălia a oprit definitiv expansiunea japoneză şi a transferat iniţiativa strategică Aliaților.'
        },
        { type: 'atrocity', year: 1942, title: 'Conferința de la Wannsee', lat: 52.4286, lng: 13.1594, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Wannsee_Villa.jpg/800px-Wannsee_Villa.jpg', description: '20 ianuarie 1942. O întâlnire a înalților oficiali naziști pentru a coordona și birocratiza implementarea "Soluției Finale la problema evreiască", planul de exterminare sistematică a evreilor europeni.' },
        { type: 'major', year: 1942, title: 'Căderea Singaporelui', lat: 1.3521, lng: 103.8198, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/The_surrender_of_Singapore%2C_15_February_1942.jpg/800px-The_surrender_of_Singapore%2C_15_February_1942.jpg', description: '15 februarie 1942. Căderea "fortăreței" Singapore în fața forțelor japoneze a fost una dintre cele mai mari înfrângeri militare britanice, Churchill numind-o "cel mai mare dezastru" din istoria militară britanică.' },
        { type: 'atrocity', year: 1942, title: 'Începutul Operațiunii Reinhard', lat: 50.3758, lng: 23.4589, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Belzec_camp_memorial.jpg/800px-Belzec_camp_memorial.jpg', description: 'Martie 1942. Lagărul de exterminare de la Bełżec devine operațional, marcând începutul fazei celei mai letale a Holocaustului. Împreună cu Sobibór și Treblinka, aceste lagăre vor duce la moartea a 1,7 milioane de evrei.' },
        { type: 'atrocity', year: 1942, title: 'Marșul Morții din Bataan', lat: 14.65, lng: 120.5, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Bataan_Death_March_memorial_in_Capas.jpg/800px-Bataan_Death_March_memorial_in_Capas.jpg', description: '9 aprilie 1942. După capitularea forțelor americane și filipineze, aproximativ 75.000 de prizonieri sunt forțați să mărșăluiască peste 100 km. Mii mor pe drum din cauza brutalității, înfometării și bolilor.' },
        { type: 'minor', year: 1942, title: 'Raidul Doolittle', lat: 35.6895, lng: 139.6917, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/Doolittle_Raid_-_USS_Hornet.jpg/800px-Doolittle_Raid_-_USS_Hornet.jpg', description: '18 aprilie 1942. Primul raid aerian american care a lovit insulele natale japoneze. Deși cu impact militar redus, a fost o victorie morală majoră pentru SUA și a demonstrat vulnerabilitatea teritoriului japonez.' },
        { type: 'major', year: 1942, title: 'Bătălia din Marea Coralilor', lat: -15.0, lng: 150.0, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/USS_Lexington_explodes.jpg/800px-USS_Lexington_explodes.jpg', description: '4-8 mai 1942. Prima bătălie navală purtată exclusiv de avioane de pe portavioane. O victorie strategică aliată, deoarece oprește invazia japoneză a Port Moresby, Noua Guinee.' },
        { type: 'major', year: 1942, title: 'Campania din Guadalcanal', lat: -9.5843, lng: 160.1562, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Guadalcanal_Marines.jpg/800px-Guadalcanal_Marines.jpg', description: '7 august 1942 - 9 februarie 1943. Prima ofensivă terestră majoră a Aliaților în Pacific. Șase luni de lupte brutale pe uscat, pe mare și în aer se încheie cu o victorie aliată care asigură o bază strategică vitală.' },
        { type: 'minor', year: 1942, title: 'Raidul de la Dieppe', lat: 49.9229, lng: 1.0774, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Landing_craft_at_Dieppe_1942.jpg/800px-Landing_craft_at_Dieppe_1942.jpg', description: '19 august 1942. Un raid amfibiu dezastruos al forțelor canadiene. Lecțiile dureroase, dar esențiale, învățate aici au fost cruciale pentru succesul debarcării din Normandia.' },
        { type: 'major', year: 1942, title: 'A Doua Bătălie de la El Alamein', lat: 30.8222, lng: 28.9543, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Australian_25-pounder_gun_at_El_Alamein_1942.jpg/800px-Australian_25-pounder_gun_at_El_Alamein_1942.jpg', description: '23 octombrie - 11 noiembrie 1942. Armata a 8-a britanică, sub comanda lui Montgomery, obține o victorie decisivă care oprește avansul Axei spre Egipt și marchează un punct de cotitură în Africa de Nord.' },
        { type: 'major', year: 1942, title: 'Operațiunea Torța', lat: 36.7783, lng: 3.0588, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Operation_Torch_-_landings_at_Algiers_-_November_1942.jpg/800px-Operation_Torch_-_landings_at_Algiers_-_November_1942.jpg', description: '8 noiembrie 1942. Debarcări amfibii masive anglo-americane în Algeria și Maroc. După o scurtă rezistență, forțele franceze de la Vichy se alătură Aliaților, deschizând un nou front în spatele forțelor Axei.' }
    ],
    '1943': [
        { 
            type: 'major', 
            year: 1943, 
            title: 'Revolta din Ghetoul din Varșovia', 
            lat: 52.2497, 
            lng: 20.9944, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Warsaw_Ghetto_Uprising_-_Stroop_Report_-_cover.jpg/800px-Warsaw_Ghetto_Uprising_-_Stroop_Report_-_cover.jpg', 
            description: 'Un act de rezistență armată eroic, dar sortit eșecului, al luptătorilor evrei din ghetoul din Varşovia. A fost cel mai mare şi mai important act de rezistență armată evreiască din timpul Holocaustului.',
            context: 'După ce majoritatea locuitorilor ghetoului fuseseră deja deportați la Treblinka, luptătorii rămaşi au decis să lupte până la moarte în loc să se supună pasiv deportării.',
            figures: [
                { name: 'Mordechai Anielewicz', role: 'Comandantul Organizației Evreiești de Luptă (ŻOB)' },
                { name: 'Jürgen Stroop', role: 'General SS care a condus suprimarea brutală a revoltei' }
            ],
            impact: 'Deşi înfrânţi militar, luptătorii au rezistat aproape o lună. Revolta a devenit un simbol universal al curajului. Ca represalii, Stroop a ordonat distrugerea sistematică a ghetoului, clădire cu clădire.'
        },
        { 
            type: 'major', 
            year: 1943, 
            title: 'Bombardamentele Aliate asupra României (Operațiunea Tidal Wave)', 
            lat: 44.9333, 
            lng: 26.0167, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/d/d7/Operation_Tidal_Wave_bombing_of_Ploesti_Romania.jpg', 
            description: 'Un raid aerian masiv şi îndrăzneţ lansat de forțele aeriene americane (USAAF) împotriva rafinăriilor de petrol de la Ploieşti. A fost unul dintre cele mai faimoase şi costisitoare raiduri aeriene ale războiului.',
            context: 'Rafinăriile de la Ploieşti erau o țintă strategică vitală, furnizând aproximativ o treime din necesarul de petrol al maşinii de război naziste. Aliații sperau că distrugerea acestora va paraliza mobilitatea armatei germane.',
            figures: [
                { name: 'Colonelul Jacob E. Smart', role: 'Unul dintre principalii planificatori ai raidului' }
            ],
            impact: 'Deşi unele rafinării au fost avariate, raidul a fost un eşec tactic costisitor, cu pierderi mari. Apărarea antiaeriană germano-română s-a dovedit extrem de eficientă. Cu toate acestea, campania de bombardamente a continuat în 1944, contribuind la decizia României de a părăsi Axa.'
        },
        { type: 'minor', year: 1943, title: 'Conferința de la Casablanca', lat: 33.5731, lng: -7.5898, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Casablanca_Conference_1943.jpg/800px-Casablanca_Conference_1943.jpg', description: '14-24 ianuarie 1943. O întâlnire strategică între Roosevelt și Churchill unde a fost stabilită strategia aliată și anunțată politica de "capitulare necondiționată" a Axei.' },
        { type: 'major', year: 1943, title: 'Capitularea Germană la Stalingrad', lat: 48.7080, lng: 44.5133, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Bundesarchiv_Bild_183-J0128-0502-003%2C_Russland%2C_Kapitulation_Stalingrad%2C_Paulus.jpg/800px-Bundesarchiv_Bild_183-J0128-0502-003%2C_Russland%2C_Kapitulation_Stalingrad%2C_Paulus.jpg', description: '2 februarie 1943. Ultimele unități ale Armatei a 6-a germane se predau. Peste 91.000 de soldați sunt luați prizonieri. Victoria sovietică este un punct de cotitură psihologic și strategic major.' },
        { type: 'atrocity', year: 1943, title: 'Lichidarea Ghetoului din Cracovia', lat: 50.0497, lng: 19.9445, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Krakow_Ghetto_liquidation.jpg/800px-Krakow_Ghetto_liquidation.jpg', description: '13 martie 1943. SS și poliția germană lichidează ghetoul. Mii de evrei sunt uciși în timpul operațiunii, iar restul sunt deportați în lagărele Płaszów și Auschwitz.' },
        { type: 'major', year: 1943, title: 'Capitularea Axei în Tunisia', lat: 36.8065, lng: 10.1815, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/German_and_Italian_prisoners_in_Tunisia_1943.jpg/800px-German_and_Italian_prisoners_in_Tunisia_1943.jpg', description: '13 mai 1943. Forțele Axei din Africa de Nord, prinse între două armate aliate, capitulează. Aproximativ 275.000 de soldați germani și italieni sunt luați prizonieri, deschizând calea pentru invazia Siciliei.' },
        { type: 'major', year: 1943, title: 'Bătălia de la Kursk', lat: 51.7301, lng: 36.1911, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Bundesarchiv_Bild_101I-221-0616-24%2C_Russland%2C_Schlacht_um_Kursk%2C_Panzer_VI_%28Tiger_I%29.jpg/800px-Bundesarchiv_Bild_101I-221-0616-24%2C_Russland%2C_Schlacht_um_Kursk%2C_Panzer_VI_%28Tiger_I%29.jpg', description: '5 iulie - 23 august 1943. Cea mai mare bătălie de tancuri din istorie. O ofensivă masivă germană este oprită de o apărare sovietică bine pregătită, marcând sfârșitul ofensivei germane pe Frontul de Est.' },
        { type: 'major', year: 1943, title: 'Invazia Aliată a Siciliei', lat: 37.5, lng: 14.5, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Operation_Husky_-_Landing_craft_approach_the_Sicilian_coast_in_July_1943.jpg/800px-Operation_Husky_-_Landing_craft_approach_the_Sicilian_coast_in_July_1943.jpg', description: '9 iulie - 17 august 1943. Forțele aliate debarcă în Sicilia. Campania se încheie cu succes, dar majoritatea forțelor germane se retrag pe continent. Invazia accelerează prăbușirea regimului fascist; Mussolini este demis la 25 iulie.' },
        { type: 'minor', year: 1943, title: 'Armistițiul cu Italia', lat: 37.0696, lng: 15.2052, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Signature_of_the_Italian_armistice_at_Cassibile.jpg/800px-Signature_of_the_Italian_armistice_at_Cassibile.jpg', description: '3 septembrie 1943. Noul guvern italian semnează un armistițiu cu Aliații. Germania reacționează imediat prin Operațiunea Achse, ocupând nordul și centrul Italiei și dezarmând armata italiană.' },
        { type: 'atrocity', year: 1943, title: 'Revolta de la Sobibor', lat: 51.4469, lng: 23.5931, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Sobibor_uprising_memorial.jpg/800px-Sobibor_uprising_memorial.jpg', description: '14 octombrie 1943. O revoltă organizată în lagărul de exterminare Sobibór, condusă de ofițerul sovietic Alexander Pechersky. Prizonierii ucid mai mulți ofițeri SS. Aproximativ 300 de prizonieri reușesc să evadeze.' },
        { type: 'major', year: 1943, title: 'Conferința de la Teheran', lat: 35.6892, lng: 51.3890, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Tehran_Conference%2C_1943.jpg/800px-Tehran_Conference%2C_1943.jpg', description: '28 noiembrie - 1 decembrie 1943. Prima întâlnire a "Celor Trei Mari" (Roosevelt, Churchill și Stalin). Se ia decizia finală pentru deschiderea unui al doilea front în vestul Europei (Operațiunea Overlord) în 1944.' }
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
        { type: 'major', year: 1944, title: 'Bătălia de la Monte Cassino', lat: 41.4906, lng: 13.8136, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Monte_Cassino_bombing_15_February_1944.jpg/800px-Monte_Cassino_bombing_15_February_1944.jpg', description: '17 ianuarie - 18 mai 1944. O serie de patru asalturi aliate sângeroase asupra Liniei Gustav. Linia este în cele din urmă străpunsă de Corpul Polonez II și forțele coloniale franceze, deschizând drumul spre Roma.' },
        { type: 'atrocity', year: 1944, title: 'Deportarea evreilor maghiari', lat: 47.4979, lng: 19.0402, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_May_1944.jpg/800px-Selection_on_the_ramp_at_Auschwitz-Birkenau%2C_May_1944.jpg', description: 'Mai - iulie 1944. După ocuparea Ungariei de către Germania, aproximativ 440.000 de evrei sunt deportați, majoritatea la Auschwitz. Aceasta este una dintre cele mai rapide și mai mari operațiuni de exterminare din timpul Holocaustului.' },
        { type: 'major', year: 1944, title: 'Eliberarea Romei', lat: 41.9028, lng: 12.4964, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/American_troops_pass_the_Colosseum_in_Rome_1944.jpg/800px-American_troops_pass_the_Colosseum_in_Rome_1944.jpg', description: '4 iunie 1944. Forțele Armatei a 5-a americane intră în Roma, prima capitală a Axei care este eliberată. Evenimentul este însă umbrit de iminenta debarcare din Normandia.' },
        { type: 'major', year: 1944, title: 'Ziua Z: Debarcarea din Normandia', lat: 49.3400, lng: -0.5500, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/Into_the_Jaws_of_Death_23-0455M_edit.jpg/800px-Into_the_Jaws_of_Death_23-0455M_edit.jpg', description: '6 iunie 1944. Cea mai mare invazie amfibie din istorie. Forțele Aliate debarcă pe plajele din Normandia, deschizând un al doilea front major în Europa de Vest și începând eliberarea Franței.' },
        { type: 'major', year: 1944, title: 'Operațiunea Bagration', lat: 53.9000, lng: 27.5667, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/RIAN_archive_40166_Minsk_Offensive_Operation.jpg/800px-RIAN_archive_40166_Minsk_Offensive_Operation.jpg', description: '22 iunie - 19 august 1944. O ofensivă masivă sovietică în Belarus care distruge Grupul de Armate Centru german, provocând cele mai mari pierderi Germaniei într-o singură operațiune și accelerând colapsul Frontului de Est.' },
        { type: 'major', year: 1944, title: 'Eliberarea Parisului', lat: 48.8566, lng: 2.3522, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Leclerc_in_Paris_1944.jpg/800px-Leclerc_in_Paris_1944.jpg', description: '25 august 1944. După o insurecție a Rezistenței, Divizia a 2-a Blindată franceză a generalului Leclerc și forțele americane intră în Paris. Comandantul german sfidează ordinele lui Hitler de a distruge orașul și se predă.' },
        { type: 'major', year: 1944, 'title': 'Revolta din Varșovia', 'lat': 52.2297, 'lng': 21.0122, 'imageUrl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Warsaw_Uprising_by_Polski_Zolnierz.jpg/800px-Warsaw_Uprising_by_Polski_Zolnierz.jpg', 'description': '1 august - 2 octombrie 1944. Rezistența poloneză (Armata Teritorială) lansează o insurecție pentru a elibera Varșovia. Stalin oprește înaintarea sovietică, permițând germanilor să zdrobească revolta după 63 de zile de lupte, distrugând sistematic orașul.' },
        { type: 'minor', year: 1944, title: 'Operațiunea Market Garden', lat: 51.8126, lng: 5.8372, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/British_paratroopers_at_Arnhem_1944.jpg/800px-British_paratroopers_at_Arnhem_1944.jpg', description: '17-25 septembrie 1944. Un plan aliat îndrăzneț de a cuceri o serie de poduri în Olanda cu forțe aeropurtate pentru a pătrunde în Germania. Operațiunea eșuează la ultimul pod, cel de la Arnhem ("un pod prea îndepărtat").' },
        { type: 'major', year: 1944, title: 'Bătălia din Golful Leyte', lat: 10.8700, lng: 125.4550, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/USS_St._Lo_%28CVE-63%29_is_hit_by_a_kamikaze_off_Samar_on_25_October_1944.jpg/800px-USS_St._Lo_%28CVE-63%29_is_hit_by_a_kamikaze_off_Samar_on_25_October_1944.jpg', description: '23-26 octombrie 1944. Considerată cea mai mare bătălie navală din istorie, a fost o victorie decisivă a Aliaților care a paralizat marina japoneză și a deschis calea pentru eliberarea Filipinelor. Aici au fost folosite pentru prima dată atacurile kamikaze.' },
        { type: 'major', year: 1944, title: 'Bătălia de la Bulge', lat: 50.17, lng: 6.05, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/American_soldiers_of_the_289th_Infantry_Regiment_march_through_a_snow-covered_forest_in_the_vicinity_of_Amonines%2C_Belgium_-_NARA_-_531201.jpg/800px-American_soldiers_of_the_289th_Infantry_Regiment_march_through_a_snow-covered_forest_in_the_vicinity_of_Amonines%2C_Belgium_-_NARA_-_531201.jpg', description: '16 decembrie 1944 - 25 ianuarie 1945. Ultima ofensivă majoră a Germaniei pe Frontul de Vest. Atacul surpriză prin Ardeni eșuează din cauza rezistenței americane tenace (ex. la Bastogne) și a intervenției aviației aliate, epuizând ultimele rezerve germane.' }
    ],
    '1945': [
        { 
            type: 'major', 
            year: 1945, 
            title: 'Lupta Armatei Române pe Frontul de Vest', 
            lat: 47.4979, 
            lng: 19.0402, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Romanian_soldiers_in_Budapest_1945.jpg/800px-Romanian_soldiers_in_Budapest_1945.jpg', 
            description: 'După 23 august 1944, Armata Română a luptat alături de Armata Sovietică împotriva forţelor germane şi maghiare, participând la eliberarea Transilvaniei de Nord şi continuând lupta în Ungaria, Cehoslovacia și Austria.',
            context: 'Conform convenţiei de armistițiu, România era obligată să participe la efortul de război aliat. Armata română, deşi epuizată şi prost tratată de către "aliaţii" sovietici, a luptat cu determinare.',
            figures: [
                { name: 'Generalul Gheorghe Avramescu', role: 'Unul dintre comandanții români de pe acest front' }
            ],
            impact: 'Contribuția militară a României a fost semnificativă, fiind a patra putere aliată ca număr de trupe. Cu toate acestea, la Conferința de Pace, României nu i s-a acordat statutul de co-beligerant, ci a fost tratată ca un stat învins.'
        },
        { 
            type: 'major', 
            year: 1945, 
            title: 'Impunerea guvernului Petru Groza', 
            lat: 44.4396, 
            lng: 26.0963, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Petru_Groza_government.jpg/800px-Petru_Groza_government.jpg', 
            description: 'Sub presiunea directă a Uniunii Sovietice, reprezentată de Andrei Vişinski, Regele Mihai I a fost forțat să numească un guvern pro-comunist condus de Petru Groza.',
            context: 'Profitând de prezenţa Armatei Roşii, Partidul Comunist Român, mic, dar sprijinit de Moscova, a orchestrat o campanie de destabilizare. Vişinski i-a dat un ultimatum Regelui, ameninţând cu dispariţia României ca stat independent.',
            figures: [
                { name: 'Regele Mihai I', role: 'A fost forțat să accepte numirea' },
                { name: 'Petru Groza', role: 'Liderul Frontului Plugarilor, o figură de faţadă' },
                { name: 'Andrei Vişinski', role: 'Comisar adjunct sovietic pentru afaceri externe' }
            ],
            impact: 'Acest eveniment a marcat începutul preluării puterii de către comunişti în România. Comuniştii au controlat ministerele cheie, pe care le-au folosit pentru a elimina opoziția politică, a falsifica alegerile din 1946 şi a instaura un regim totalitar.'
        },
        { type: 'atrocity', year: 1945, title: 'Eliberarea Lagărului Auschwitz', lat: 50.0264, lng: 19.2094, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/Liberation_of_Auschwitz.jpg/800px-Liberation_of_Auschwitz.jpg', description: '27 ianuarie 1945. Trupele sovietice eliberează Auschwitz, găsind aproximativ 7.000 de prizonieri bolnavi și muribunzi. Eliberarea expune lumii, la scară largă, realitatea industrializată a genocidului nazist.' },
        { type: 'major', year: 1945, title: 'Conferința de la Ialta', lat: 44.4994, lng: 34.1697, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg/800px-Yalta_Conference_%28Churchill%2C_Roosevelt%2C_Stalin%29_%28B%26W%29.jpg', description: '4-11 februarie 1945. Roosevelt, Churchill și Stalin se întâlnesc pentru a discuta despre reorganizarea postbelică a Europei, inclusiv împărțirea Germaniei și frontierele Poloniei. Acordurile vor deveni o sursă de tensiuni în Războiul Rece.' },
        { type: 'atrocity', year: 1945, title: 'Bombardarea Dresdei', lat: 51.0504, lng: 13.7373, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/45/Dresden-bombing-1945-aftermath-02.jpg/800px-Dresden-bombing-1945-aftermath-02.jpg', description: '13-15 februarie 1945. Într-una dintre cele mai controversate acțiuni ale războiului, raiduri aeriene masive aliate creează o furtună de foc care distruge centrul istoric al Dresdei și ucide zeci de mii de civili.' },
        { type: 'major', year: 1945, title: 'Bătălia de la Iwo Jima', lat: 24.7800, lng: 141.3200, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Raising_the_Flag_on_Iwo_Jima_by_Joe_Rosenthal_color_photo.jpg/800px-Raising_the_Flag_on_Iwo_Jima_by_Joe_Rosenthal_color_photo.jpg', description: '19 februarie - 26 martie 1945. Pușcașii marini americani invadează mica insulă vulcanică. Bătălia este extrem de sângeroasă, dar aerodromurile de pe insulă se dovedesc vitale. Imaginea ridicării steagului pe Muntele Suribachi devine un simbol iconic.' },
        { type: 'minor', year: 1945, title: 'Capturarea Podului de la Remagen', lat: 50.5786, lng: 7.2361, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Crossing_the_Rhine_at_the_Remagen_bridge.jpg/800px-Crossing_the_Rhine_at_the_Remagen_bridge.jpg', description: '7 martie 1945. Trupele americane capturează intact Podul Ludendorff de peste Rin. Această lovitură de noroc permite Aliaților să stabilească rapid un cap de pod, accelerând prăbușirea apărării germane în vest.' },
        { type: 'major', year: 1945, title: 'Bătălia de la Okinawa', lat: 26.2123, lng: 127.6792, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Okinawa_Marines_in_action.jpg/800px-Okinawa_Marines_in_action.jpg', description: '1 aprilie - 22 iunie 1945. Ultima și cea mai mare bătălie din Pacific. Invazia americană întâmpină o rezistență japoneză fanatică. Costul uman uriaș influențează decizia de a folosi bomba atomică.' },
        { type: 'major', year: 1945, title: 'Bătălia Berlinului', lat: 52.5200, lng: 13.4050, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Soviet_soldiers_raising_the_Soviet_flag_over_the_Reichstag_in_Berlin%2C_Germany%2C_on_May_2%2C_1945.jpg/800px-Soviet_soldiers_raising_the_Soviet_flag_over_the_Reichstag_in_Berlin%2C_Germany%2C_on_May_2%2C_1945.jpg', description: '16 aprilie - 2 mai 1945. Ofensiva finală sovietică pentru capturarea capitalei Reich-ului. După lupte de o violență extremă, Armata Roșie cucerește orașul.' },
        { type: 'minor', year: 1945, title: 'Execuția lui Benito Mussolini', lat: 45.9818, lng: 9.2709, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Mussolini_e_Petacci_a_Piazzale_Loreto%2C_1945.jpg/800px-Mussolini_e_Petacci_a_Piazzale_Loreto%2C_1945.jpg', description: '28 aprilie 1945. Mussolini și amanta sa, Clara Petacci, sunt capturați și executați de partizanii italieni. Corpurile lor sunt expuse public în Piazzale Loreto din Milano.' },
        { type: 'major', year: 1945, title: 'Sinuciderea lui Adolf Hitler', lat: 52.5162, lng: 13.3777, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Reichskanzlei_after_the_war.jpg/800px-Reichskanzlei_after_the_war.jpg', description: '30 aprilie 1945. În buncărul său de sub Cancelaria Reich-ului, înconjurat de forțele sovietice, Adolf Hitler se sinucide împreună cu soția sa, Eva Braun. Moartea sa marchează sfârșitul simbolic al celui de-al Treilea Reich.' },
        { type: 'major', year: 1945, title: 'Capitularea Germaniei', lat: 49.2583, lng: 4.0317, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/The_German_Surrender_at_Reims%2C_7_May_1945.jpg/800px-The_German_Surrender_at_Reims%2C_7_May_1945.jpg', description: '7-8 mai 1945. Generalul Alfred Jodl semnează capitularea necondiționată a tuturor forțelor germane la Reims. Ceremonia este repetată a doua zi la Berlin. Războiul în Europa se încheie oficial la 8 mai.' },
        { type: 'major', year: 1945, title: 'Conferința de la Potsdam', lat: 52.3918, lng: 13.0636, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Potsdam_Conference_%281945%29.jpg/800px-Potsdam_Conference_%281945%29.jpg', description: '17 iulie - 2 august 1945. Truman, Churchill (înlocuit de Attlee) și Stalin se întâlnesc pentru a stabili detaliile ocupației Germaniei și pentru a emite un ultimatum Japoniei, cerând capitularea necondiționată.' },
        { type: 'atrocity', year: 1945, title: 'Bombardamentul Atomic de la Hiroshima', lat: 34.3853, lng: 132.4553, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Atomic_bombing_of_Japan.jpg/800px-Atomic_bombing_of_Japan.jpg', description: '6 august 1945. Bombardiereul B-29 "Enola Gay" lansează prima bombă atomică, "Little Boy", asupra orașului Hiroshima. Explozia ucide instantaneu zeci de mii de oameni și distruge orașul.' },
        { type: 'atrocity', year: 1945, title: 'Bombardamentul Atomic de la Nagasaki', lat: 32.7642, lng: 129.8727, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Nagasakibomb.jpg/800px-Nagasakibomb.jpg', description: '9 august 1945. Deoarece Japonia nu a capitulat, un al doilea bombardier B-29, "Bockscar", lansează a doua bombă atomică, "Fat Man", asupra orașului Nagasaki, provocând din nou distrugeri masive.' },
        { type: 'major', year: 1945, title: 'Capitularea Japoniei', lat: 35.5504, lng: 139.7845, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/MacArthur_signs_surrender_instrument.jpg/800px-MacArthur_signs_surrender_instrument.jpg', description: '2 septembrie 1945. La bordul cuirasatului USS Missouri, în Golful Tokyo, reprezentanții Japoniei semnează actul de capitulare necondiționată. Al Doilea Război Mondial se încheie oficial.' },
        { type: 'major', year: 1945, title: 'Fondarea Națiunilor Unite', lat: 40.7489, lng: -73.9680, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/United_Nations_Headquarters_in_New_York_City_aerial_view.jpg/800px-United_Nations_Headquarters_in_New_York_City_aerial_view.jpg', description: '24 octombrie 1945. Carta Națiunilor Unite intră în vigoare, fondând oficial organizația menită să prevină viitoare conflicte mondiale și să promoveze cooperarea internațională. Sediul său va fi stabilit la New York.'},
        { type: 'major', year: 1945, title: 'Începutul Proceselor de la Nürnberg', lat: 49.4542, lng: 11.0475, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Nuremberg_trials_defendants.jpg/800px-Nuremberg_trials_defendants.jpg', description: '20 noiembrie 1945. La Palatul de Justiție din Nürnberg, Tribunalul Militar Internațional începe procesul a 22 de lideri naziști de rang înalt pentru crime de război, crime împotriva păcii și crime împotriva umanității.' }
    ],
    'post-war': [
        { 
            type: 'major', 
            year: 1946, 
            title: 'Alegerile generale fraudate în România', 
            lat: 44.4396, 
            lng: 26.0963, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Alegeri_1946_Romania_buletin_vot.jpg/800px-Alegeri_1946_Romania_buletin_vot.jpg', 
            description: 'Primele alegeri parlamentare postbelice, care au fost masiv fraudate de către guvernul pro-comunist Petru Groza pentru a asigura o victorie zdrobitoare și a legitima preluarea puterii.',
            context: 'După impunerea guvernului Groza, Partidul Comunist a început acapararea puterii. Partidele istorice (PNȚ și PNL) se bucurau încă de popularitate masivă, reprezentând principalul obstacol. Alegerile au fost un moment crucial.',
            figures: [
                { name: 'Petru Groza', role: 'Prim-ministru, fațada electorală a comuniștilor' },
                { name: 'Gheorghe Gheorghiu-Dej, Ana Pauker', role: 'Lideri comunişti care au orchestrat frauda' },
                { name: 'Iuliu Maniu şi Dinu Brătianu', role: 'Liderii opoziției (PNȚ şi PNL)' }
            ],
            impact: 'Rezultatele oficiale au fost inversate; PNȚ-Maniu a câştigat de fapt alegerile. Frauda a anihilat orice speranţă de opoziție parlamentară şi a oferit regimului comunist o faţadă de legitimitate, deschizând calea pentru sovietizarea României.'
        },
        { 
            type: 'major', 
            year: 1947, 
            title: 'Înscenarea de la Tămădău', 
            lat: 44.435, 
            lng: 26.538, 
            imageUrl: 'https://upload.wikimedia.org/wikipedia/ro/c/c5/T%C4%83m%C4%83d%C4%83u.jpg', 
            description: 'O operațiune de tip "steag fals" orchestrată de autorităţile comuniste, prin care lideri marcanți ai Partidului Național Țărănesc (PNȚ) au fost arestați în timp ce încercau să părăsească ţara.',
            context: 'După fraudarea alegerilor din 1946, PNȚ rămăsese cea mai importantă forţă de opoziție. Pentru a instaura un control total, comuniştii trebuiau să elimine acest ultim obstacol, acuzându-l de trădare naţională.',
            figures: [
                { name: 'Ion Mihalache, Nicolae Penescu', role: 'Lideri ai PNȚ arestați la Tămădău' },
                { name: 'Iuliu Maniu', role: 'Preşedintele PNȚ, arestat şi judecat' },
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
            description: 'Regele Mihai I a fost chemat la palat de către liderii comunişti Petru Groza şi Gheorghe Gheorghiu-Dej, care l-au ameninţat cu un război civil şi l-au forțat să semneze actul de abdicare. În aceeaşi zi, a fost proclamată Republica Populară Română.',
            context: 'După fraudarea alegerilor şi eliminarea partidelor istorice, monarhia rămăsese ultimul simbol al democrației. Comuniştii, la ordinul lui Stalin, au decis să elimine acest ultim obstacol.',
            figures: [
                { name: 'Regele Mihai I', role: 'Ultimul monarh al României' },
                { name: 'Petru Groza', role: 'Prim-ministru' },
                { name: 'Gheorghe Gheorghiu-Dej', role: 'Liderul Partidului Comunist' }
            ],
            impact: 'A marcat sfârşitul monarhiei în România şi instaurarea completă a regimului comunist totalitar, subordonat Uniunii Sovietice. România a intrat într-o lungă perioadă de izolare, represiune politică şi dificultăți economice.'
        },
        { type: 'major', year: 1946, title: 'Discursul "Cortina de Fier"', lat: 38.8467, lng: -91.9481, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Winston_Churchill_delivers_his_%22Iron_Curtain%22_speech_at_Westminster_College_in_Fulton%2C_Missouri.jpg/800px-Winston_Churchill_delivers_his_%22Iron_Curtain%22_speech_at_Westminster_College_in_Fulton%2C_Missouri.jpg', description: '5 martie 1946. La Fulton, Missouri, Winston Churchill rostește faimosul său discurs în care declară că "o cortină de fier a coborât de-a curmezișul continentului", un moment definitoriu în începutul Războiului Rece.' },
        { type: 'atrocity', year: 1946, title: 'Pogromul de la Kielce', lat: 50.8661, lng: 20.6286, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Kielce_pogrom_-_survivors.jpg/800px-Kielce_pogrom_-_survivors.jpg', description: '4 iulie 1946. Un masacru violent al supraviețuitorilor evrei ai Holocaustului în orașul polonez Kielce, cel mai sângeros atac antisemit din Polonia postbelică, care a determinat un exod masiv al evreilor polonezi.' },
        { type: 'minor', year: 1946, title: 'Primul Război din Indochina', lat: 21.0285, lng: 105.8542, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/French_Union_forces_in_Indochina_1953.jpg/800px-French_Union_forces_in_Indochina_1953.jpg', description: '19 decembrie 1946. Începe un conflict armat între forțele coloniale franceze și Việt Minh-ul lui Ho Chi Minh pentru controlul Vietnamului, marcând începutul a decenii de război în regiune.' },
        { type: 'major', year: 1947, title: 'Doctrina Truman', lat: 38.8951, lng: -77.0364, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Harry_S_Truman_addresses_Congress.jpg/800px-Harry_S_Truman_addresses_Congress.jpg', description: '12 martie 1947. Președintele Truman anunță o politică de "containment" a expansiunii sovietice, oferind sprijin economic și militar națiunilor amenințate de comunism, începând cu Grecia și Turcia.' },
        { type: 'major', year: 1947, title: 'Partiția Indiei', lat: 28.6139, lng: 77.2090, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Train_to_Pakistan.jpg/800px-Train_to_Pakistan.jpg', description: '15 august 1947. Imperiul Britanic al Indiei este împărțit în două state independente, India și Pakistan. Partiția a declanșat violențe inter-comunitare masive și una dintre cele mai mari migrații umane din istorie.' },
        { type: 'major', year: 1948, title: 'Planul Marshall', lat: 38.8951, lng: -77.0364, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Marshall_Plan_poster.JPG/800px-Marshall_Plan_poster.JPG', description: '3 aprilie 1948. Un program masiv de ajutor economic american pentru reconstrucția Europei de Vest, menit să stabilizeze economiile, să prevină răspândirea comunismului și să creeze piețe pentru bunurile americane.' },
        { type: 'major', year: 1948, title: 'Proclamarea Statului Israel', lat: 32.1093, lng: 34.8555, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Ben-Gurion_proclaims_Israel%27s_independence.jpg/800px-Ben-Gurion_proclaims_Israel%27s_independence.jpg', description: '14 mai 1948. David Ben-Gurion proclamă independența statului Israel. A doua zi, statele arabe vecine invadează, declanșând Războiul Arabo-Israelian din 1948.' },
        { type: 'major', year: 1948, title: 'Blocada Berlinului', lat: 52.5200, lng: 13.4050, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/C-54_over_the_ruins_of_Berlin_1948.jpg/800px-C-54_over_the_ruins_of_Berlin_1948.jpg', description: '24 iunie 1948. Uniunea Sovietică blochează toate căile terestre și feroviare către Berlinul de Vest. Aliații Occidentali răspund cu un pod aerian masiv pentru a aproviziona orașul, o primă confruntare majoră a Războiului Rece.' },
        { type: 'major', year: 1949, title: 'Înființarea NATO', lat: 38.8951, lng: -77.0364, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/Signing_of_the_North_Atlantic_Treaty.jpg/800px-Signing_of_the_North_Atlantic_Treaty.jpg', description: '4 aprilie 1949. Statele Unite, Canada și zece țări europene semnează Tratatul Atlanticului de Nord, creând o alianță militară defensivă pentru a contracara amenințarea sovietică.' },
        { type: 'major', year: 1949, title: 'Proclamarea Republicii Populare Chineze', lat: 39.9042, lng: 116.4074, imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Founding_of_the_People%27s_Republic_of_China_in_1949.jpg/800px-Founding_of_the_People%27s_Republic_of_China_in_1949.jpg', description: '1 octombrie 1949. După victoria în Războiul Civil Chinez, Mao Zedong proclamă Republica Populară Chineză la Beijing, un eveniment care a schimbat fundamental echilibrul de putere în Asia și în lume.' }
    ]
};
