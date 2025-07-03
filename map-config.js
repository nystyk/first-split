// --- MAP CONFIGURATION DATA ---
const contextData = {
    'pre-war': {
        title: 'Perioada Prebelică',
        description: 'Președintele Statelor Unite, Woodrow Wilson, și alții au vorbit despre Primul Război Mondial ca fiind "războiul care va pune capăt tuturor războaielor". În cei douăzeci de ani care au urmat, aceste idealuri înalte s-au lovit de un tratat de pace defectuos și punitiv, de ascensiunea dictaturilor, de ambiții naționale și de colapsul economic mondial. Oricât de îngrozitor a fost Primul Război Mondial, acesta s-a dovedit a fi preludiul și fundamentul unui conflict și mai înfiorător, o luptă mondială care avea să curme viețile a peste 60 de milioane de oameni... Al Doilea Război Mondial.'
    },
    'post-war': {
        title: 'Anii de după Război',
        description: 'După încheierea celui de-al Doilea Război Mondial, lumea a intrat într-o nouă eră de tensiuni geopolitice cunoscută sub numele de Războiul Rece, dominată de rivalitatea dintre Statele Unite și Uniunea Sovietică. Această perioadă a fost marcată de cursa înarmărilor nucleare, conflicte prin interpuși și divizarea lumii în două blocuri ideologice. În același timp, au fost create organizații precum Națiunile Unite (ONU) pentru a promova pacea și cooperarea internațională.'
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
