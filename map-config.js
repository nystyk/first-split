// --- MAP CONFIGURATION DATA (Fact-Checked & Improved) ---
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
     'pre-war': { allied: [], axis: [], occupied_by_axis: [], co_aggressor: [], co_belligerent: [], neutral: [] },
     '1939': {
         allied: [ 'United Kingdom', 'France', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'Poland', 'China' ],
         axis: [ 'Germany', 'Japan', 'Slovakia' ],
         occupied_by_axis: [ 'Poland', 'Czech Rep.', 'Austria' ],
         co_aggressor: ['Russia'],
         co_belligerent: [],
         neutral: [ 'United States', 'Russia', 'Italy', 'Spain', 'Portugal', 'Ireland', 'Sweden', 'Switzerland', 'Finland', 'Denmark', 'Norway', 'Belgium', 'Netherlands', 'Luxembourg', 'Romania', 'Hungary', 'Bulgaria', 'Yugoslavia', 'Greece', 'Turkey', 'Egypt', 'Brazil', 'Argentina', 'Mexico', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Iran', 'Saudi Arabia', 'Afghanistan', 'Thailand' ]
     },
     '1940': {
         allied: [ 'United Kingdom', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'China', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Greece' ],
         axis: [ 'Germany', 'Japan', 'Italy', 'Hungary', 'Romania', 'Slovakia' ],
         occupied_by_axis: [ 'Poland', 'Denmark', 'Norway', 'Belgium', 'Netherlands', 'Luxembourg', 'France', 'Czech Rep.', 'Austria' ],
         co_aggressor: ['Russia'],
         co_belligerent: [],
         neutral: [ 'United States', 'Russia', 'Spain', 'Portugal', 'Ireland', 'Sweden', 'Switzerland', 'Finland', 'Bulgaria', 'Yugoslavia', 'Turkey', 'Egypt', 'Brazil', 'Argentina', 'Mexico', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Iran', 'Saudi Arabia', 'Afghanistan', 'Thailand' ]
     },
     '1941': {
         allied: [ 'United Kingdom', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'China', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Greece', 'Yugoslavia', 'Russia', 'United States', 'Poland' ],
         axis: [ 'Germany', 'Japan', 'Italy', 'Hungary', 'Romania', 'Bulgaria', 'Slovakia', 'Croatia', 'Thailand' ],
         occupied_by_axis: [ 'Denmark', 'France', 'Czech Rep.', 'Austria', 'Yugoslavia', 'Greece', 'Poland', 'Belgium', 'Netherlands', 'Luxembourg', 'Vietnam', 'Laos', 'Cambodia', 'Philippines', 'Malaysia', 'Myanmar' ],
         co_aggressor: [],
         co_belligerent: [ 'Finland' ],
         neutral: [ 'Spain', 'Portugal', 'Ireland', 'Sweden', 'Switzerland', 'Turkey', 'Egypt', 'Brazil', 'Argentina', 'Mexico', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Iran', 'Saudi Arabia', 'Afghanistan' ]
     },
     '1942': {
         allied: [ 'United Kingdom', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'China', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Greece', 'Yugoslavia', 'Russia', 'United States', 'Poland', 'Brazil', 'Mexico', 'Ethiopia' ],
         axis: [ 'Germany', 'Japan', 'Italy', 'Hungary', 'Romania', 'Bulgaria', 'Slovakia', 'Croatia', 'Thailand' ],
         occupied_by_axis: [ 'Denmark', 'France', 'Czech Rep.', 'Austria', 'Yugoslavia', 'Greece', 'Poland', 'Belgium', 'Netherlands', 'Luxembourg', 'Philippines', 'Myanmar', 'Malaysia', 'Indonesia', 'Vietnam', 'Laos', 'Cambodia' ],
         co_aggressor: [],
         co_belligerent: [ 'Finland' ],
         neutral: [ 'Spain', 'Portugal', 'Ireland', 'Sweden', 'Switzerland', 'Turkey', 'Egypt', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Iran', 'Saudi Arabia', 'Afghanistan' ]
     },
     '1943': {
         allied: [ 'United Kingdom', 'Australia', 'New Zealand', 'South Africa', 'Canada', 'India', 'Nepal', 'China', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Greece', 'Yugoslavia', 'Russia', 'United States', 'Poland', 'Brazil', 'Mexico', 'Ethiopia', 'Italy', 'Iran' ],
         axis: [ 'Germany', 'Japan', 'Hungary', 'Romania', 'Bulgaria', 'Slovakia', 'Croatia', 'Thailand' ],
         occupied_by_axis: [ 'Denmark', 'France', 'Czech Rep.', 'Austria', 'Yugoslavia', 'Greece', 'Poland', 'Belgium', 'Netherlands', 'Luxembourg', 'Philippines', 'Myanmar', 'Malaysia', 'Indonesia', 'Vietnam', 'Laos', 'Cambodia', 'Italy' ],
         co_aggressor: [],
         co_belligerent: [ 'Finland' ],
         neutral: [ 'Spain', 'Portugal', 'Ireland', 'Sweden', 'Switzerland', 'Turkey', 'Egypt', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Saudi Arabia', 'Afghanistan' ]
     },
     '1944': {
         allied: [ 'United Kingdom', 'France', 'Canada', 'Australia', 'New Zealand', 'South Africa', 'India', 'Nepal', 'China', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Greece', 'Yugoslavia', 'Russia', 'United States', 'Poland', 'Brazil', 'Mexico', 'Ethiopia', 'Italy', 'Iran', 'Romania', 'Bulgaria', 'Finland', 'Liberia' ],
         axis: [ 'Germany', 'Japan', 'Hungary', 'Slovakia', 'Croatia' ],
         occupied_by_axis: [ 'Denmark', 'Austria', 'Czech Rep.', 'Poland', 'Yugoslavia', 'Greece', 'Netherlands', 'Philippines', 'Myanmar', 'Malaysia', 'Indonesia', 'Vietnam', 'Laos', 'Cambodia' ],
         co_aggressor: [],
         co_belligerent: [],
         neutral: [ 'Spain', 'Portugal', 'Ireland', 'Sweden', 'Switzerland', 'Turkey', 'Egypt', 'Argentina', 'Chile', 'Colombia', 'Peru', 'Venezuela', 'Saudi Arabia', 'Afghanistan' ]
     },
     '1945': {
         allied: [ 'United Kingdom', 'France', 'Canada', 'Australia', 'New Zealand', 'South Africa', 'India', 'Nepal', 'China', 'Norway', 'Netherlands', 'Belgium', 'Luxembourg', 'Greece', 'Yugoslavia', 'Russia', 'United States', 'Poland', 'Brazil', 'Mexico', 'Ethiopia', 'Italy', 'Iran', 'Romania', 'Bulgaria', 'Finland', 'Liberia', 'Turkey', 'Egypt', 'Saudi Arabia', 'Syria', 'Lebanon', 'Peru', 'Chile', 'Paraguay', 'Ecuador', 'Venezuela', 'Uruguay', 'Argentina' ],
         axis: [],
         occupied_by_axis: [ 'Germany', 'Japan', 'Austria' ],
         co_aggressor: [],
         co_belligerent: [],
         neutral: [ 'Spain', 'Portugal', 'Ireland', 'Sweden', 'Switzerland', 'Afghanistan' ]
     },
     'post-war': { allied: [], axis: [], occupied_by_axis: [], co_aggressor: [], co_belligerent: [], neutral: [] }
};
