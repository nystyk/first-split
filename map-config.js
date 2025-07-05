// --- MAP CONFIGURATION DATA ---
const contextData = {
    'pre-war': {
        title: 'Perioada Prebelică: Prăbușirea Ordinii Mondiale',
        description: 'La sfârșitul anilor 1930, ordinea mondială stabilită după Primul Război Mondial se afla în pragul colapsului. Tratatul de la Versailles, deși menit să asigure o pace durabilă, a impus Germaniei condiții considerate umilitoare, alimentând resentimente naționale. Eșecul Ligii Națiunilor de a gestiona crizele a demonstrat ineficiența sa. În acest climat, ideologiile totalitare au câștigat teren: fascismul în Italia, nazismul în Germania și militarismul expansionist în Japonia. O serie de agresiuni — remilitarizarea Renaniei, Războiul Civil Spaniol, Anexarea Austriei și Acordul de la München — au subminat voința puterilor occidentale de a interveni. Când Hitler a invadat restul Cehoslovaciei în martie 1939, a devenit clar că ambițiile sale nu puteau fi temperate prin concesii. Pactul Molotov-Ribbentrop din august 1939 a asigurat flancul estic al lui Hitler, permițând invazia Poloniei și declanșarea conflictului.'
    },
    'post-war': {
        title: 'Anii de după Război: O Lume Remodelată',
        description: 'La 2 septembrie 1945, lumea a ieșit dintr-un coșmar, dar a intrat într-o nouă eră de anxietate. Costul uman, estimat la peste 70 de milioane de vieți, și distrugerile materiale au lăsat o amprentă profundă. Războiul a accelerat inovații tehnologice precum radarul, avioanele cu reacție și, în final, arma atomică, care a inaugurat Era Atomică. Eliberarea lagărelor de exterminare a confruntat lumea cu grozăvia Holocaustului, ducând la crearea unor noi concepte de justiție internațională prin Procesele de la Nürnberg. Deși a fost creată Organizația Națiunilor Unite pentru a menține pacea, bazele unei noi confruntări, Războiul Rece, erau deja puse. Deciziile luate la Ialta și Potsdam au reflectat tensiunile crescânde dintre SUA și URSS, iar noua ordine mondială s-a născut sub umbra bombei atomice și a unei Europe divizate de o "Cortină de Fier".'
    }
};
const territorialData = {
     'pre-war': { allied: [], axis: [], occupied_by_axis: [], co_aggressor: [], co_belligerent: [] },
     '1939': {
         allied: [ 'United Kingdom', 'France', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'China', 'Egypt', 'Lebanon', 'Syria', 'Ethiopia', 'Poland' ],
         axis: [ 'Germany', 'Japan' ],
         occupied_by_axis: [],
         co_aggressor: ['Russia'],
         co_belligerent: ['Finland']
     },
     '1940': {
         allied: [ 'United Kingdom', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'China', 'Egypt', 'Lebanon', 'Syria', 'Ethiopia', 'Greece' ],
         axis: [ 'Germany', 'Japan', 'Italy', 'Hungary', 'Romania' ],
         occupied_by_axis: [ 'Poland', 'Denmark', 'Norway', 'Belgium', 'Netherlands', 'Luxembourg', 'France', 'Czech Rep.', 'Slovakia', 'Austria' ],
         co_aggressor: [ 'Russia' ],
         co_belligerent: [ 'Finland' ]
     },
     '1941': {
         allied: [ 'United Kingdom', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'Poland', 'China', 'Egypt', 'Lebanon', 'Syria', 'Ethiopia', 'Russia', 'United States', 'Yugoslavia', 'Greece' ],
         axis: [ 'Germany', 'Japan', 'Italy', 'Hungary', 'Romania', 'Bulgaria' ],
         occupied_by_axis: [ 'Denmark', 'Norway', 'Belgium', 'Netherlands', 'Luxembourg', 'France', 'Czech Rep.', 'Slovakia', 'Austria' ],
         co_aggressor: [],
         co_belligerent: [ 'Finland' ]
     },
     '1942': {
         allied: [ 'United Kingdom', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'Poland', 'China', 'Egypt', 'Lebanon', 'Syria', 'Ethiopia', 'Russia', 'United States', 'Greece', 'Yugoslavia', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg' ],
         axis: [ 'Germany', 'Japan', 'Italy', 'Hungary', 'Romania', 'Bulgaria', 'Slovakia', 'Croatia' ],
         occupied_by_axis: [ 'Denmark', 'France', 'Czech Rep.', 'Austria', 'Philippines', 'Myanmar', 'Malaysia', 'Indonesia', 'Vietnam', 'Laos', 'Cambodia' ],
         co_aggressor: [],
         co_belligerent: [ 'Finland' ]
     },
     '1943': {
         allied: [ 'United Kingdom', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'Poland', 'China', 'Egypt', 'Lebanon', 'Syria', 'Ethiopia', 'Russia', 'United States', 'Greece', 'Yugoslavia', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Italy', 'Tunisia' ],
         axis: [ 'Germany', 'Japan', 'Hungary', 'Romania', 'Bulgaria', 'Slovakia', 'Croatia' ],
         occupied_by_axis: [ 'Denmark', 'France', 'Czech Rep.', 'Austria', 'Philippines', 'Myanmar', 'Malaysia', 'Indonesia' ],
         co_aggressor: [],
         co_belligerent: [ 'Finland' ]
     },
     '1944': {
         allied: [ 'United Kingdom', 'France', 'Canada', 'Australia', 'New Zealand', 'South Africa', 'India', 'Nepal', 'Poland', 'China', 'Egypt', 'Lebanon', 'Syria', 'Ethiopia', 'Russia', 'United States', 'Greece', 'Yugoslavia', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Italy', 'Tunisia', 'Philippines', 'Myanmar' ],
         axis: [ 'Germany', 'Japan', 'Hungary', 'Croatia' ],
         occupied_by_axis: [ 'Denmark', 'Austria', 'Czech Rep.', 'Slovakia' ],
         co_aggressor: [],
         co_belligerent: [],
     },
     '1945': {
         allied: [ 'United Kingdom', 'France', 'Canada', 'Australia', 'New Zealand', 'South Africa', 'India', 'Nepal', 'Poland', 'China', 'Egypt', 'Lebanon', 'Syria', 'Ethiopia', 'Russia', 'United States', 'Greece', 'Yugoslavia', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Italy', 'Tunisia', 'Philippines', 'Myanmar' ],
         axis: [],
         occupied_by_axis: [ 'Germany', 'Japan', 'Austria' ],
         co_aggressor: [],
         co_belligerent: [],
     },
     'post-war': { allied: [], axis: [], occupied_by_axis: [], co_aggressor: [], co_belligerent: [] }
};
