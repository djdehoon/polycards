// ════════════════════════════════════════
// 📦 DATA — 100 woorden, 10 thema's
// ════════════════════════════════════════
const WORDS = [
  // 🐾 animals (10)
  {w:'кіт',t:'kit',tr:'kat',sUk:'Mijn <b>кіт</b> slaapt de hele dag.',sNl:'Mijn <b>kat</b> slaapt de hele dag.',deck:'animals 🐾',e:'🐱'},
  {w:'собака',t:'sobaka',tr:'hond',sUk:'De <b>собака</b> rent in het park.',sNl:'De <b>hond</b> rent in het park.',deck:'animals 🐾',e:'🐶'},
  {w:'кінь',t:'kin',tr:'paard',sUk:'Het <b>кінь</b> is sterk en snel.',sNl:'Het <b>paard</b> is sterk en snel.',deck:'animals 🐾',e:'🐴'},
  {w:'птах',t:'ptakh',tr:'vogel',sUk:'De <b>птах</b> zingt elke ochtend.',sNl:'De <b>vogel</b> zingt elke ochtend.',deck:'animals 🐾',e:'🐦'},
  {w:'риба',t:'ryba',tr:'vis',sUk:'De <b>риба</b> zwemt in de rivier.',sNl:'De <b>vis</b> zwemt in de rivier.',deck:'animals 🐾',e:'🐟'},
  {w:'ведмідь',t:'vedmid',tr:'beer',sUk:'De <b>ведмідь</b> slaapt in de winter.',sNl:'De <b>beer</b> slaapt in de winter.',deck:'animals 🐾',e:'🐻'},
  {w:'лев',t:'lev',tr:'leeuw',sUk:'De <b>лев</b> is de koning van de jungle.',sNl:'De <b>leeuw</b> is de koning van de jungle.',deck:'animals 🐾',e:'🦁'},
  {w:'слон',t:'slon',tr:'olifant',sUk:'De <b>слон</b> heeft een lange slurf.',sNl:'De <b>olifant</b> heeft een lange slurf.',deck:'animals 🐾',e:'🐘'},
  {w:'жаба',t:'zhaba',tr:'kikker',sUk:'De <b>жаба</b> springt in het water.',sNl:'De <b>kikker</b> springt in het water.',deck:'animals 🐾',e:'🐸'},
  {w:'метелик',t:'metелyk',tr:'vlinder',sUk:'De <b>метелик</b> vliegt over de bloemen.',sNl:'De <b>vlinder</b> vliegt over de bloemen.',deck:'animals 🐾',e:'🦋'},

  // 🍎 Eten & Drinken (10)
  {w:'хліб',t:'khlib',tr:'brood',sUk:'Ik koop elke dag vers <b>хліб</b>.',sNl:'Ik koop elke dag vers <b>brood</b>.',deck:'Eten & Drinken 🍎',e:'🍞'},
  {w:'вода',t:'voda',tr:'water',sUk:'Ik drink elke ochtend <b>воду</b>.',sNl:'Ik drink elke ochtend <b>water</b>.',deck:'Eten & Drinken 🍎',e:'💧'},
  {w:'молоко',t:'moloko',tr:'melk',sUk:'<b>Молоко</b> is goed voor je botten.',sNl:'<b>Melk</b> is goed voor je botten.',deck:'Eten & Drinken 🍎',e:'🥛'},
  {w:'яблуко',t:'yabluko',tr:'appel',sUk:'Ik eet elke dag een <b>яблуко</b>.',sNl:'Ik eet elke dag een <b>appel</b>.',deck:'Eten & Drinken 🍎',e:'🍎'},
  {w:'кава',t:'kava',tr:'koffie',sUk:'<b>Кава</b> helpt me wakker te worden.',sNl:'<b>Koffie</b> helpt me wakker te worden.',deck:'Eten & Drinken 🍎',e:'☕'},
  {w:'чай',t:'chay',tr:'thee',sUk:'Ik drink elke avond <b>чай</b>.',sNl:'Ik drink elke avond <b>thee</b>.',deck:'Eten & Drinken 🍎',e:'🍵'},
  {w:'суп',t:'sup',tr:'soep',sUk:'Ik eet warme <b>суп</b> in de winter.',sNl:'Ik eet warme <b>soep</b> in de winter.',deck:'Eten & Drinken 🍎',e:'🍲'},
  {w:'сир',t:'syr',tr:'kaas',sUk:'Ik hou van <b>сир</b> op mijn brood.',sNl:'Ik hou van <b>kaas</b> op mijn brood.',deck:'Eten & Drinken 🍎',e:'🧀'},
  {w:'яйце',t:'yaytse',tr:'ei',sUk:'Ik eet elke ochtend een <b>яйце</b>.',sNl:'Ik eet elke ochtend een <b>ei</b>.',deck:'Eten & Drinken 🍎',e:'🥚'},
  {w:'торт',t:'tort',tr:'taart',sUk:'We eten <b>торт</b> op verjaardagen.',sNl:'We eten <b>taart</b> op verjaardagen.',deck:'Eten & Drinken 🍎',e:'🎂'},

  // 👨‍👩‍👧 Familie (10)
  {w:'мати',t:'maty',tr:'moeder',sUk:'Mijn <b>мати</b> kookt heerlijk.',sNl:'Mijn <b>moeder</b> kookt heerlijk.',deck:'Familie 👨‍👩‍👧',e:'👩'},
  {w:'батько',t:'batko',tr:'vader',sUk:'Mijn <b>батько</b> werkt hard.',sNl:'Mijn <b>vader</b> werkt hard.',deck:'Familie 👨‍👩‍👧',e:'👨'},
  {w:'сестра',t:'sestra',tr:'zus',sUk:'Mijn <b>сестра</b> is jonger dan ik.',sNl:'Mijn <b>zus</b> is jonger dan ik.',deck:'Familie 👨‍👩‍👧',e:'👧'},
  {w:'брат',t:'brat',tr:'broer',sUk:'Mijn <b>брат</b> speelt voetbal.',sNl:'Mijn <b>broer</b> speelt voetbal.',deck:'Familie 👨‍👩‍👧',e:'👦'},
  {w:'бабуся',t:'babusya',tr:'oma',sUk:'Mijn <b>бабуся</b> vertelt mooie verhalen.',sNl:'Mijn <b>oma</b> vertelt mooie verhalen.',deck:'Familie 👨‍👩‍👧',e:'👵'},
  {w:'дідусь',t:'didus',tr:'opa',sUk:'Mijn <b>дідусь</b> is oud en wijs.',sNl:'Mijn <b>opa</b> is oud en wijs.',deck:'Familie 👨‍👩‍👧',e:'👴'},
  {w:'дитина',t:'dytyna',tr:'kind',sUk:'Het <b>дитина</b> speelt in de tuin.',sNl:'Het <b>kind</b> speelt in de tuin.',deck:'Familie 👨‍👩‍👧',e:'👶'},
  {w:'чоловік',t:'cholovik',tr:'man / echtgenoot',sUk:'Haar <b>чоловік</b> is erg aardig.',sNl:'Haar <b>man</b> is erg aardig.',deck:'Familie 👨‍👩‍👧',e:'💑'},
  {w:'дружина',t:'druzhyna',tr:'vrouw / echtgenote',sUk:'Zijn <b>дружина</b> is een dokter.',sNl:'Zijn <b>vrouw</b> is een dokter.',deck:'Familie 👨‍👩‍👧',e:'💑'},
  {w:'сім\'я',t:'simya',tr:'familie',sUk:'Mijn <b>сім\'я</b> is heel belangrijk.',sNl:'Mijn <b>familie</b> is heel belangrijk.',deck:'Familie 👨‍👩‍👧',e:'👨‍👩‍👧'},

  // 🎨 Kleuren (10)
  {w:'червоний',t:'chervony',tr:'rood',sUk:'De roos is <b>червоний</b>.',sNl:'De roos is <b>rood</b>.',deck:'Kleuren 🎨',e:'🔴'},
  {w:'синій',t:'syniy',tr:'blauw',sUk:'De lucht is <b>синій</b>.',sNl:'De lucht is <b>blauw</b>.',deck:'Kleuren 🎨',e:'🔵'},
  {w:'зелений',t:'zeleny',tr:'groen',sUk:'Het gras is <b>зелений</b>.',sNl:'Het gras is <b>groen</b>.',deck:'Kleuren 🎨',e:'🟢'},
  {w:'жовтий',t:'zhovty',tr:'geel',sUk:'De zon is <b>жовтий</b>.',sNl:'De zon is <b>geel</b>.',deck:'Kleuren 🎨',e:'🟡'},
  {w:'чорний',t:'chorny',tr:'zwart',sUk:'De nacht is <b>чорний</b>.',sNl:'De nacht is <b>zwart</b>.',deck:'Kleuren 🎨',e:'⚫'},
  {w:'білий',t:'bily',tr:'wit',sUk:'De sneeuw is <b>білий</b>.',sNl:'De sneeuw is <b>wit</b>.',deck:'Kleuren 🎨',e:'⚪'},
  {w:'помаранчевий',t:'pomaranchevyy',tr:'oranje',sUk:'De pompoen is <b>помаранчевий</b>.',sNl:'De pompoen is <b>oranje</b>.',deck:'Kleuren 🎨',e:'🟠'},
  {w:'рожевий',t:'rozhevy',tr:'roze',sUk:'De bloem is <b>рожевий</b>.',sNl:'De bloem is <b>roze</b>.',deck:'Kleuren 🎨',e:'🌸'},
  {w:'коричневий',t:'korychnevy',tr:'bruin',sUk:'De boom is <b>коричневий</b>.',sNl:'De boom is <b>bruin</b>.',deck:'Kleuren 🎨',e:'🟤'},
  {w:'сірий',t:'siry',tr:'grijs',sUk:'De muur is <b>сірий</b>.',sNl:'De muur is <b>grijs</b>.',deck:'Kleuren 🎨',e:'🩶'},

  // 🔢 Cijfers (10)
  {w:'один',t:'odyn',tr:'één',sUk:'Ik heb <b>один</b> broer.',sNl:'Ik heb <b>één</b> broer.',deck:'Cijfers 🔢',e:'1️⃣'},
  {w:'два',t:'dva',tr:'twee',sUk:'Ik heb <b>два</b> katten.',sNl:'Ik heb <b>twee</b> katten.',deck:'Cijfers 🔢',e:'2️⃣'},
  {w:'три',t:'try',tr:'drie',sUk:'Er zijn <b>три</b> appels op tafel.',sNl:'Er zijn <b>drie</b> appels op tafel.',deck:'Cijfers 🔢',e:'3️⃣'},
  {w:'чотири',t:'chotyry',tr:'vier',sUk:'Een hond heeft <b>чотири</b> poten.',sNl:'Een hond heeft <b>vier</b> poten.',deck:'Cijfers 🔢',e:'4️⃣'},
  {w:'п\'ять',t:'pyat',tr:'vijf',sUk:'Ik heb <b>п\'ять</b> vingers aan elke hand.',sNl:'Ik heb <b>vijf</b> vingers aan elke hand.',deck:'Cijfers 🔢',e:'5️⃣'},
  {w:'шість',t:'shist',tr:'zes',sUk:'Er zijn <b>шість</b> eieren in de doos.',sNl:'Er zijn <b>zes</b> eieren in de doos.',deck:'Cijfers 🔢',e:'6️⃣'},
  {w:'сім',t:'sim',tr:'zeven',sUk:'Een week heeft <b>сім</b> dagen.',sNl:'Een week heeft <b>zeven</b> dagen.',deck:'Cijfers 🔢',e:'7️⃣'},
  {w:'вісім',t:'visim',tr:'acht',sUk:'Een spin heeft <b>вісім</b> poten.',sNl:'Een spin heeft <b>acht</b> poten.',deck:'Cijfers 🔢',e:'8️⃣'},
  {w:'дев\'ять',t:'devyat',tr:'negen',sUk:'Er zijn <b>дев\'ять</b> planeten.',sNl:'Er zijn <b>negen</b> planeten.',deck:'Cijfers 🔢',e:'9️⃣'},
  {w:'десять',t:'desyat',tr:'tien',sUk:'Ik heb <b>десять</b> vingers.',sNl:'Ik heb <b>tien</b> vingers.',deck:'Cijfers 🔢',e:'🔟'},

  // 🗣️ Begroetingen (10)
  {w:'привіт',t:'pryvit',tr:'hallo',sUk:'<b>Привіт</b>! Hoe gaat het?',sNl:'<b>Hallo</b>! Hoe gaat het?',deck:'Begroetingen 🗣️',e:'👋'},
  {w:'добрий день',t:'dobry den',tr:'goedendag',sUk:'<b>Добрий день</b>, meneer!',sNl:'<b>Goedendag</b>, meneer!',deck:'Begroetingen 🗣️',e:'☀️'},
  {w:'добрий ранок',t:'dobry ranok',tr:'goedemorgen',sUk:'<b>Добрий ранок</b>! Sliep je goed?',sNl:'<b>Goedemorgen</b>! Sliep je goed?',deck:'Begroetingen 🗣️',e:'🌅'},
  {w:'добрий вечір',t:'dobry vechir',tr:'goedenavond',sUk:'<b>Добрий вечір</b>! Welkom thuis.',sNl:'<b>Goedenavond</b>! Welkom thuis.',deck:'Begroetingen 🗣️',e:'🌙'},
  {w:'до побачення',t:'do pobachennya',tr:'tot ziens',sUk:'<b>До побачення</b>! Tot morgen.',sNl:'<b>Tot ziens</b>! Tot morgen.',deck:'Begroetingen 🗣️',e:'👋'},
  {w:'дякую',t:'dyakuyu',tr:'dank je',sUk:'<b>Дякую</b> voor je hulp!',sNl:'<b>Dank je</b> voor je hulp!',deck:'Begroetingen 🗣️',e:'🙏'},
  {w:'будь ласка',t:'bud laska',tr:'alsjeblieft',sUk:'Geef mij water, <b>будь ласка</b>.',sNl:'Geef mij water, <b>alsjeblieft</b>.',deck:'Begroetingen 🗣️',e:'🙏'},
  {w:'вибачте',t:'vybachte',tr:'sorry / excuseer',sUk:'<b>Вибачте</b>, ik ben te laat.',sNl:'<b>Sorry</b>, ik ben te laat.',deck:'Begroetingen 🗣️',e:'😅'},
  {w:'так',t:'tak',tr:'ja',sUk:'<b>Так</b>, ik begrijp het.',sNl:'<b>Ja</b>, ik begrijp het.',deck:'Begroetingen 🗣️',e:'✅'},
  {w:'ні',t:'ni',tr:'nee',sUk:'<b>Ні</b>, dat wil ik niet.',sNl:'<b>Nee</b>, dat wil ik niet.',deck:'Begroetingen 🗣️',e:'❌'},

  // 🏠 Thuis (10)
  {w:'будинок',t:'budynok',tr:'huis',sUk:'Mijn <b>будинок</b> is groot.',sNl:'Mijn <b>huis</b> is groot.',deck:'Thuis 🏠',e:'🏠'},
  {w:'кімната',t:'kimnata',tr:'kamer',sUk:'Mijn <b>кімната</b> is opgeruimd.',sNl:'Mijn <b>kamer</b> is opgeruimd.',deck:'Thuis 🏠',e:'🚪'},
  {w:'стіл',t:'stil',tr:'tafel',sUk:'Het eten staat op de <b>стіл</b>.',sNl:'Het eten staat op de <b>tafel</b>.',deck:'Thuis 🏠',e:'🪑'},
  {w:'стілець',t:'stilets',tr:'stoel',sUk:'Ik zit op een comfortabele <b>стілець</b>.',sNl:'Ik zit op een comfortabele <b>stoel</b>.',deck:'Thuis 🏠',e:'🪑'},
  {w:'ліжко',t:'lizhko',tr:'bed',sUk:'Mijn <b>ліжко</b> is zacht en warm.',sNl:'Mijn <b>bed</b> is zacht en warm.',deck:'Thuis 🏠',e:'🛏️'},
  {w:'вікно',t:'vikno',tr:'raam',sUk:'Ik kijk door het <b>вікно</b>.',sNl:'Ik kijk door het <b>raam</b>.',deck:'Thuis 🏠',e:'🪟'},
  {w:'двері',t:'dveri',tr:'deur',sUk:'De <b>двері</b> is open.',sNl:'De <b>deur</b> is open.',deck:'Thuis 🏠',e:'🚪'},
  {w:'кухня',t:'kukhnya',tr:'keuken',sUk:'Ik kook in de <b>кухня</b>.',sNl:'Ik kook in de <b>keuken</b>.',deck:'Thuis 🏠',e:'🍳'},
  {w:'ванна',t:'vanna',tr:'badkamer',sUk:'De <b>ванна</b> is schoon.',sNl:'De <b>badkamer</b> is schoon.',deck:'Thuis 🏠',e:'🛁'},
  {w:'сад',t:'sad',tr:'tuin',sUk:'Ik werk in de <b>сад</b>.',sNl:'Ik werk in de <b>tuin</b>.',deck:'Thuis 🏠',e:'🌿'},

  // 🚗 Transport (10)
  {w:'автомобіль',t:'avtomobil',tr:'auto',sUk:'Mijn <b>автомобіль</b> is rood.',sNl:'Mijn <b>auto</b> is rood.',deck:'Transport 🚗',e:'🚗'},
  {w:'потяг',t:'potyah',tr:'trein',sUk:'De <b>потяг</b> rijdt snel.',sNl:'De <b>trein</b> rijdt snel.',deck:'Transport 🚗',e:'🚂'},
  {w:'літак',t:'litak',tr:'vliegtuig',sUk:'Het <b>літак</b> vliegt hoog.',sNl:'Het <b>vliegtuig</b> vliegt hoog.',deck:'Transport 🚗',e:'✈️'},
  {w:'автобус',t:'avtobus',tr:'bus',sUk:'Ik neem de <b>автобус</b> naar school.',sNl:'Ik neem de <b>bus</b> naar school.',deck:'Transport 🚗',e:'🚌'},
  {w:'велосипед',t:'velosyped',tr:'fiets',sUk:'Ik rijd elke dag op mijn <b>велосипед</b>.',sNl:'Ik rijd elke dag op mijn <b>fiets</b>.',deck:'Transport 🚗',e:'🚲'},
  {w:'корабель',t:'korabel',tr:'schip',sUk:'Het <b>корабель</b> vaart op zee.',sNl:'Het <b>schip</b> vaart op zee.',deck:'Transport 🚗',e:'🚢'},
  {w:'метро',t:'metro',tr:'metro',sUk:'Ik neem de <b>метро</b> in de stad.',sNl:'Ik neem de <b>metro</b> in de stad.',deck:'Transport 🚗',e:'🚇'},
  {w:'таксі',t:'taksi',tr:'taxi',sUk:'Ik neem een <b>таксі</b> naar het vliegveld.',sNl:'Ik neem een <b>taxi</b> naar het vliegveld.',deck:'Transport 🚗',e:'🚕'},
  {w:'мотоцикл',t:'motosykl',tr:'motor',sUk:'Hij rijdt op een <b>мотоцикл</b>.',sNl:'Hij rijdt op een <b>motor</b>.',deck:'Transport 🚗',e:'🏍️'},
  {w:'вертоліт',t:'vertolit',tr:'helikopter',sUk:'De <b>вертоліт</b> landt op het dak.',sNl:'De <b>helikopter</b> landt op het dak.',deck:'Transport 🚗',e:'🚁'},

  // 🌤️ Weer (10)
  {w:'сонце',t:'sontse',tr:'zon',sUk:'De <b>сонце</b> schijnt vandaag.',sNl:'De <b>zon</b> schijnt vandaag.',deck:'Weer 🌤️',e:'☀️'},
  {w:'дощ',t:'doshch',tr:'regen',sUk:'Er valt <b>дощ</b> buiten.',sNl:'Er valt <b>regen</b> buiten.',deck:'Weer 🌤️',e:'🌧️'},
  {w:'сніг',t:'snig',tr:'sneeuw',sUk:'Er ligt <b>сніг</b> in de tuin.',sNl:'Er ligt <b>sneeuw</b> in de tuin.',deck:'Weer 🌤️',e:'❄️'},
  {w:'вітер',t:'viter',tr:'wind',sUk:'De <b>вітер</b> blaast hard vandaag.',sNl:'De <b>wind</b> blaast hard vandaag.',deck:'Weer 🌤️',e:'💨'},
  {w:'хмара',t:'khmara',tr:'wolk',sUk:'Er zijn veel <b>хмара</b> in de lucht.',sNl:'Er zijn veel <b>wolken</b> in de lucht.',deck:'Weer 🌤️',e:'☁️'},
  {w:'гроза',t:'hroza',tr:'onweer',sUk:'Vanavond komt er een <b>гроза</b>.',sNl:'Vanavond komt er een <b>onweer</b>.',deck:'Weer 🌤️',e:'⛈️'},
  {w:'веселка',t:'veselka',tr:'regenboog',sUk:'Na de regen zag ik een <b>веселка</b>.',sNl:'Na de regen zag ik een <b>regenboog</b>.',deck:'Weer 🌤️',e:'🌈'},
  {w:'туман',t:'tuman',tr:'mist',sUk:'Er is veel <b>туман</b> in de ochtend.',sNl:'Er is veel <b>mist</b> in de ochtend.',deck:'Weer 🌤️',e:'🌫️'},
  {w:'лід',t:'lid',tr:'ijs',sUk:'Het meer is bedekt met <b>лід</b>.',sNl:'Het meer is bedekt met <b>ijs</b>.',deck:'Weer 🌤️',e:'🧊'},
  {w:'спека',t:'speka',tr:'hitte',sUk:'De <b>спека</b> is ondraaglijk vandaag.',sNl:'De <b>hitte</b> is ondraaglijk vandaag.',deck:'Weer 🌤️',e:'🌡️'},

  // ❤️ Emoties (10)
  {w:'щасливий',t:'shchaslyvyy',tr:'blij / gelukkig',sUk:'Ik ben <b>щасливий</b> vandaag.',sNl:'Ik ben <b>blij</b> vandaag.',deck:'Emoties ❤️',e:'😊'},
  {w:'сумний',t:'sumnyy',tr:'verdrietig',sUk:'Hij is <b>сумний</b> na het nieuws.',sNl:'Hij is <b>verdrietig</b> na het nieuws.',deck:'Emoties ❤️',e:'😢'},
  {w:'злий',t:'zlyy',tr:'boos',sUk:'Ze is <b>злий</b> op hem.',sNl:'Ze is <b>boos</b> op hem.',deck:'Emoties ❤️',e:'😠'},
  {w:'наляканий',t:'nalyakanyy',tr:'bang',sUk:'Het kind is <b>наляканий</b> van de hond.',sNl:'Het kind is <b>bang</b> voor de hond.',deck:'Emoties ❤️',e:'😨'},
  {w:'здивований',t:'zdyvovanyy',tr:'verrast',sUk:'Ik ben <b>здивований</b> door het cadeau.',sNl:'Ik ben <b>verrast</b> door het cadeau.',deck:'Emoties ❤️',e:'😲'},
  {w:'втомлений',t:'vtomlenыy',tr:'moe',sUk:'Ik ben <b>втомлений</b> na het werk.',sNl:'Ik ben <b>moe</b> na het werk.',deck:'Emoties ❤️',e:'😴'},
  {w:'закоханий',t:'zakohanyy',tr:'verliefd',sUk:'Hij is <b>закоханий</b> op haar.',sNl:'Hij is <b>verliefd</b> op haar.',deck:'Emoties ❤️',e:'😍'},
  {w:'спокійний',t:'spokiynyy',tr:'rustig / kalm',sUk:'Ze is altijd <b>спокійний</b>.',sNl:'Ze is altijd <b>rustig</b>.',deck:'Emoties ❤️',e:'😌'},
  {w:'гордий',t:'hordyy',tr:'trots',sUk:'Ik ben <b>гордий</b> op jou.',sNl:'Ik ben <b>trots</b> op jou.',deck:'Emoties ❤️',e:'🦁'},
  {w:'самотній',t:'samotniy',tr:'eenzaam',sUk:'Hij voelt zich <b>самотній</b>.',sNl:'Hij voelt zich <b>eenzaam</b>.',deck:'Emoties ❤️',e:'😔'},
];

// ════════════════════════════════════════
// 🗄️ STATE
// ════════════════════════════════════════
let decks = [];
let cards = [];
let studyQueue = [];
let currentCard = null;
let currentDeckName = '';
let studyMode = 'flip';
let direction = 'uk-nl';
let cardFlipped = false;
let typeChecked = false;
let totalInSession = 0;

// ════════════════════════════════════════
// 💾 STORAGE
// ════════════════════════════════════════
function save() {
  localStorage.setItem('ukr_decks', JSON.stringify(decks));
  localStorage.setItem('ukr_cards', JSON.stringify(cards));
}
function load() {
  const d = localStorage.getItem('ukr_decks');
  const c = localStorage.getItem('ukr_cards');
  decks = d ? JSON.parse(d) : [];
  cards = c ? JSON.parse(c) : [];

  // Eerste keer: laad standaard woorden + decks
  if (cards.length === 0) {
    const deckNames = [...new Set(WORDS.map(w => w.deck))];
    deckNames.forEach(name => {
      if (!decks.find(d => d.name === name)) {
        decks.push({ name });
      }
    });
    WORDS.forEach(w => {
      cards.push({
        id: Date.now() + Math.random(),
        word: w.w,
        translit: w.t,
        translation: w.tr,
        sentenceUk: w.sUk,
        sentenceNl: w.sNl,
        deck: w.deck,
        emoji: w.e,
        interval: 0,
        ease: 2.5,
        due: 0,
        lapses: 0,
        state: 'new'
      });
    });
    save();
  }
}

// ════════════════════════════════════════
// 🧭 NAVIGATIE
// ════════════════════════════════════════
function showPage(id) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  document.getElementById('page-' + id).classList.add('active');
  const tabs = { decks: 0, instructions: 1, browse: 2, stats: 3 };
  if (tabs[id] !== undefined) {
    document.querySelectorAll('.nav-tab')[tabs[id]].classList.add('active');
  }
  if (id === 'decks') renderDecks();
  if (id === 'browse') renderBrowse();
  if (id === 'stats') renderStats();
}

// ════════════════════════════════════════
// 📚 DECKS
// ════════════════════════════════════════
function renderDecks() {
  const now = Date.now();
  const container = document.getElementById('deck-rows');
  container.innerHTML = '';
  decks.forEach(deck => {
    const dc = cards.filter(c => c.deck === deck.name);
    const newC = dc.filter(c => c.state === 'new').length;
    const learnC = dc.filter(c => c.state === 'learn').length;
    const dueC = dc.filter(c => c.state === 'review' && c.due <= now).length;
    const row = document.createElement('div');
    row.className = 'deck-row';
    row.innerHTML = `
      <span class="deck-name">${deck.name}</span>
      <span class="deck-count c-new">${newC}</span>
      <span class="deck-count c-learn">${learnC}</span>
      <span class="deck-count c-due">${dueC}</span>
      <button class="study-btn" onclick="startStudy('${deck.name}')">Studeren →</button>
    `;
    container.appendChild(row);
  });
}

function openDeckModal() {
  document.getElementById('deck-modal').classList.add('open');
}
function closeDeckModal() {
  document.getElementById('deck-modal').classList.remove('open');
  document.getElementById('new-deck-name').value = '';
}
function createDeck() {
  const name = document.getElementById('new-deck-name').value.trim();
  if (!name) return;
  if (decks.find(d => d.name === name)) { showToast('Deck bestaat al!'); return; }
  decks.push({ name });
  save();
  closeDeckModal();
  renderDecks();
  populateDeckSelect();
  showToast('✅ Deck aangemaakt!');
}

// ════════════════════════════════════════
// 🎓 STUDEREN
// ════════════════════════════════════════
function startStudy(deckName) {
  currentDeckName = deckName;
  const now = Date.now();
  const dc = cards.filter(c => c.deck === deckName);
  studyQueue = [
    ...dc.filter(c => c.state === 'new').slice(0, 20),
    ...dc.filter(c => c.state === 'learn'),
    ...dc.filter(c => c.state === 'review' && c.due <= now)
  ];
  shuffle(studyQueue);
  totalInSession = studyQueue.length;

  if (studyQueue.length === 0) {
    showToast('🎉 Geen kaarten te studeren!');
    return;
  }
  showPage('study');
  updateStudyCounts();
  nextCard();
}

function setStudyMode(mode) {
  studyMode = mode;
  document.querySelectorAll('[id^="mode-"]').forEach(b => b.classList.remove('active'));
  document.getElementById('mode-' + mode).classList.add('active');
  if (currentCard) renderCard();
}

function setDirection(dir) {
  direction = dir;
  document.querySelectorAll('[id^="dir-"]').forEach(b => b.classList.remove('active'));
  document.getElementById('dir-' + dir).classList.add('active');
  if (currentCard) renderCard();
}

function getEffectiveDirection() {
  if (direction === 'mix') return Math.random() > 0.5 ? 'uk-nl' : 'nl-uk';
  return direction;
}

function nextCard() {
  cardFlipped = false;
  typeChecked = false;

  document.getElementById('study-area').style.display = 'block';
  document.getElementById('study-done').style.display = 'none';

  if (studyQueue.length === 0) {
    document.getElementById('study-area').style.display = 'none';
    document.getElementById('study-done').style.display = 'block';
    return;
  }

  currentCard = studyQueue[0];
  updateStudyCounts();
  renderCard();
}

function renderCard() {
  const dir = getEffectiveDirection();
  const c = currentCard;

  // Reset flip
  const flashcard = document.getElementById('flashcard');
  if (flashcard) flashcard.classList.remove('flipped');

  // Progress bar
  const done = totalInSession - studyQueue.length;
  const pct = totalInSession > 0 ? (done / totalInSession) * 100 : 0;
  document.getElementById('s-prog').style.width = pct + '%';

  if (studyMode === 'flip') {
    document.getElementById('flip-mode').style.display = 'block';
    document.getElementById('type-mode').style.display = 'none';
    document.getElementById('show-ans-btn').style.display = 'block';
    document.getElementById('rating-btns').style.display = 'none';

    if (dir === 'uk-nl') {
      // Voorkant: Oekraïens
      document.getElementById('flashcard-tag').textContent = c.deck;
      //document.getElementById('flashcard-emoji').textContent = c.emoji;
      document.getElementById('flashcard-word').textContent = c.word;
      document.getElementById('flashcard-translit').textContent = '[' + c.translit + ']';
      document.getElementById('flashcard-sentence').innerHTML = c.sentenceUk;
      // Achterkant: Nederlands
      document.getElementById('flashcard-back-tag').textContent = '🇳🇱 Vertaling';
      document.getElementById('flashcard-back-emoji').textContent = c.emoji;
      document.getElementById('flashcard-answer').textContent = c.translation;
      document.getElementById('flashcard-answer-translit').textContent = '';
      document.getElementById('flashcard-word2').textContent = c.word;
      document.getElementById('flashcard-translit2').textContent = '[' + c.translit + ']';
      document.getElementById('flashcard-back-sentence').innerHTML = c.sentenceNl;
    } else {
      // Voorkant: Nederlands
      document.getElementById('flashcard-tag').textContent = c.deck;
      //document.getElementById('flashcard-emoji').textContent = c.emoji;
      document.getElementById('flashcard-word').textContent = c.translation;
      document.getElementById('flashcard-translit').textContent = '';
      document.getElementById('flashcard-sentence').innerHTML = c.sentenceNl;
      // Achterkant: Oekraïens
      document.getElementById('flashcard-back-tag').textContent = '🇺🇦 Oekraïens';
      document.getElementById('flashcard-back-emoji').textContent = c.emoji;
      document.getElementById('flashcard-answer').textContent = c.word;
      document.getElementById('flashcard-answer-translit').textContent = '[' + c.translit + ']';
      document.getElementById('flashcard-word2').textContent = c.translation;
      document.getElementById('flashcard-translit2').textContent = '';
      document.getElementById('flashcard-back-sentence').innerHTML = c.sentenceUk;
    }

  } else {
    // TYPE MODE
    document.getElementById('flip-mode').style.display = 'none';
    document.getElementById('type-mode').style.display = 'block';
    document.getElementById('check-btn').style.display = 'block';
    document.getElementById('type-rating-btns').style.display = 'none';
    document.getElementById('type-feedback').textContent = '';
    document.getElementById('type-input').value = '';
    document.getElementById('type-input').className = 'type-input';
    document.getElementById('type-input').disabled = false;

    if (dir === 'uk-nl') {
      document.getElementById('t-tag').textContent = c.deck;
      document.getElementById('t-emoji').textContent = c.emoji;
      document.getElementById('t-word').textContent = c.word;
      document.getElementById('t-translit').textContent = '[' + c.translit + ']';
    } else {
      document.getElementById('t-tag').textContent = c.deck;
      document.getElementById('t-emoji').textContent = c.emoji;
      document.getElementById('t-word').textContent = c.translation;
      document.getElementById('t-translit').textContent = '';
    }
    setTimeout(() => document.getElementById('type-input').focus(), 100);
  }
}

function flipCard() {
  if (studyMode !== 'flip') return;
  const flashcard = document.getElementById('flashcard');
  cardFlipped = !cardFlipped;
  flashcard.classList.toggle('flipped', cardFlipped);
  document.getElementById('show-ans-btn').style.display = cardFlipped ? 'none' : 'block';
  document.getElementById('rating-btns').style.display = cardFlipped ? 'grid' : 'none';
}




function speakWord(e) {
e.stopPropagation();
const dir = getEffectiveDirection();
const text = dir === 'uk-nl' ? currentCard.word : currentCard.translation;
const lang = dir === 'uk-nl' ? 'uk-UA' : 'nl-NL';




// Check of stemmen beschikbaar zijn
const voices = speechSynthesis.getVoices();
const hasVoice = voices.some(v => v.lang.startsWith(lang.split('-')[0]));




const utter = new SpeechSynthesisUtterance(text);




if (hasVoice) {
// Perfecte stem gevonden
utter.lang = lang;
const voice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
if (voice) utter.voice = voice;
} else if (dir === 'uk-nl') {
// Fallback voor Oekraïens: probeer Russisch, dan Engels
const fallbackVoice = voices.find(v => v.lang.startsWith('ru')) ||
voices.find(v => v.lang.startsWith('en'));
if (fallbackVoice) {
utter.voice = fallbackVoice;
showToast('⚠️ Geen Oekraïense stem, gebruikt fallback');
}
} else {
// Fallback voor Nederlands: gebruik Engels
utter.lang = 'en-US';
showToast('⚠️ Geen Nederlandse stem gevonden');
}




utter.onerror = () => showToast('❌ Uitspraak niet beschikbaar');
speechSynthesis.speak(utter);
}






function typeKeydown(e) {
  if (e.key === 'Enter') {
    if (!typeChecked) checkType();
    else if (typeChecked) rate('good');
  }
}

function checkType() {
  const dir = getEffectiveDirection();
  const input = document.getElementById('type-input').value.trim().toLowerCase();
  const correct = (dir === 'uk-nl' ? currentCard.translation : currentCard.word).toLowerCase();
  const feedback = document.getElementById('type-feedback');
  typeChecked = true;

  // Fuzzy check: allow 1 typo
  const isCorrect = input === correct || levenshtein(input, correct) <= 1;

  // Toon beide talen in feedback
  const ukWord = currentCard.word;
  const nlWord = currentCard.translation;
  const bothLanguages = dir === 'uk-nl' 
    ? `${nlWord} (🇺🇦 ${ukWord})`
    : `${ukWord} (🇳🇱 ${nlWord})`;

  if (isCorrect) {
    document.getElementById('type-input').className = 'type-input correct';
    feedback.className = 'type-feedback ok';
    feedback.textContent = '✅ Correct! ' + (input !== correct ? `(bijna: ${bothLanguages})` : bothLanguages);
  } else {
    document.getElementById('type-input').className = 'type-input wrong';
    feedback.className = 'type-feedback nope';
    feedback.textContent = '❌ Fout — het juiste antwoord: ' + bothLanguages;
  }

  document.getElementById('type-input').disabled = true;
  document.getElementById('check-btn').style.display = 'none';
  document.getElementById('type-rating-btns').style.display = 'grid';
}


// Levenshtein voor fuzzy matching
function levenshtein(a, b) {
  const m = a.length, n = b.length;
  const dp = Array.from({length: m+1}, (_, i) => Array.from({length: n+1}, (_, j) => i === 0 ? j : j === 0 ? i : 0));
  for (let i = 1; i <= m; i++)
    for (let j = 1; j <= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] : 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
  return dp[m][n];
}

// ════════════════════════════════════════
// 🃏 SRS RATING
// ════════════════════════════════════════
function rate(rating) {
  const c = currentCard;
  const now = Date.now();
  const day = 86400000;

  if (rating === 'again') {
    c.interval = 0;
    c.state = 'learn';
    c.due = now + 60000;
    c.lapses++;
    studyQueue.push(studyQueue.shift());
  } else if (rating === 'hard') {
    c.interval = Math.max(1, c.interval * 1.2);
    c.ease = Math.max(1.3, c.ease - 0.15);
    c.state = 'review';
    c.due = now + c.interval * day;
    studyQueue.shift();
  } else if (rating === 'good') {
    c.interval = c.interval === 0 ? 1 : Math.round(c.interval * c.ease);
    c.state = 'review';
    c.due = now + c.interval * day;
    studyQueue.shift();
  } else if (rating === 'easy') {
    c.interval = c.interval === 0 ? 4 : Math.round(c.interval * c.ease * 1.3);
    c.ease = Math.min(3.0, c.ease + 0.15);
    c.state = 'review';
    c.due = now + c.interval * day;
    studyQueue.shift();
  }

  save();
  updateStudyCounts();
  nextCard();
}

function updateStudyCounts() {
  const now = Date.now();
  const dc = cards.filter(c => c.deck === currentDeckName);
  document.getElementById('s-new').textContent = dc.filter(c => c.state === 'new').length + ' new';
  document.getElementById('s-learn').textContent = dc.filter(c => c.state === 'learn').length + ' lrn';
  document.getElementById('s-due').textContent = dc.filter(c => c.state === 'review' && c.due <= now).length + ' due';
}

// ════════════════════════════════════════
// ➕ KAART TOEVOEGEN
// ════════════════════════════════════════
function populateDeckSelect() {
  const sel = document.getElementById('a-deck');
  if (!sel) return;
  sel.innerHTML = decks.map(d => `<option value="${d.name}">${d.name}</option>`).join('');
}

function saveCard() {
  const word = document.getElementById('a-word').value.trim();
  const trans = document.getElementById('a-trans').value.trim();
  if (!word || !trans) { showToast('⚠️ Vul minstens het woord en de vertaling in!'); return; }
  cards.push({
    id: Date.now() + Math.random(),
    word,
    translit: document.getElementById('a-translit').value.trim(),
    translation: trans,
    sentenceUk: document.getElementById('a-suk').value.trim(),
    sentenceNl: document.getElementById('a-snl').value.trim(),
    deck: document.getElementById('a-deck').value,
    emoji: document.getElementById('a-emoji').value.trim() || '📝',
    interval: 0, ease: 2.5, due: 0, lapses: 0, state: 'new'
  });
  save();
  clearAdd();
  showToast('✅ Kaart opgeslagen!');
}

function clearAdd() {
  ['a-word','a-translit','a-trans','a-suk','a-snl','a-emoji'].forEach(id => {
    document.getElementById(id).value = '';
  });
}

// ════════════════════════════════════════
// 🔍 BROWSE
// ════════════════════════════════════════
function renderBrowse() {
  const query = (document.getElementById('browse-search').value || '').toLowerCase();
  const activeFilter = document.querySelector('.f-btn.active');
  const filterDeck = activeFilter ? activeFilter.dataset.deck : 'all';

  // Filters
  const filterRow = document.getElementById('browse-filters');
  filterRow.innerHTML = `<button class="f-btn ${filterDeck === 'all' ? 'active' : ''}" data-deck="all" onclick="setBrowseFilter('all')">Alle</button>` +
    decks.map(d => `<button class="f-btn ${filterDeck === d.name ? 'active' : ''}" data-deck="${d.name}" onclick="setBrowseFilter('${d.name}')">${d.name}</button>`).join('');

  let filtered = cards;
  if (filterDeck !== 'all') filtered = filtered.filter(c => c.deck === filterDeck);
  if (query) filtered = filtered.filter(c =>
    c.word.toLowerCase().includes(query) ||
    c.translation.toLowerCase().includes(query) ||
    c.translit.toLowerCase().includes(query)
  );

  document.getElementById('browse-count').textContent = filtered.length + ' kaarten';
  const list = document.getElementById('browse-list');
  list.innerHTML = filtered.length === 0
    ? '<div style="text-align:center;color:var(--text2);padding:40px">Geen kaarten gevonden</div>'
    : filtered.map(c => `
      <div class="browse-item">
        <span style="font-size:1.6rem">${c.emoji}</span>
        <div>
          <div class="bi-word">${c.word}</div>
          <div class="bi-sub">${c.translation} · <i>${c.translit}</i></div>
        </div>
        <span class="bi-tag">${c.deck}</span>
      </div>`).join('');
}

let _browseFilter = 'all';
function setBrowseFilter(deck) {
  _browseFilter = deck;
  document.querySelectorAll('.f-btn').forEach(b => {
    b.classList.toggle('active', b.dataset.deck === deck);
  });
  renderBrowse();
}

// ════════════════════════════════════════
// 📊 STATS
// ════════════════════════════════════════
function renderStats() {
  const total = cards.length;
  const mature = cards.filter(c => c.interval >= 21).length;
  const young = cards.filter(c => c.state === 'review' && c.interval < 21).length;
  const newC = cards.filter(c => c.state === 'new').length;

  document.getElementById('st-total').textContent = total;
  document.getElementById('st-mature').textContent = mature;
  document.getElementById('st-young').textContent = young;
  document.getElementById('st-new').textContent = newC;

  const bars = document.getElementById('deck-stat-bars');
  bars.innerHTML = decks.map(d => {
    const dc = cards.filter(c => c.deck === d.name);
    const pct = total > 0 ? Math.round((dc.length / total) * 100) : 0;
    const colors = ['#4a9eff','#4caf50','#ff9800','#f44336','#9c27b0','#00bcd4','#ff5722','#8bc34a','#fflashcard107','#e91e63'];
    const color = colors[decks.indexOf(d) % colors.length];
    return `<div class="bar-row">
      <div class="bar-label"><span>${d.name}</span><span>${dc.length} kaarten</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>
    </div>`;
  }).join('');
}

// ════════════════════════════════════════
// 🛠️ HELPERS
// ════════════════════════════════════════
function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
}

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2500);
}

// ════════════════════════════════════════
// 🎉 WELCOME SCREEN
// ════════════════════════════════════════
function closeWelcome() {
  localStorage.setItem('polycards_ukraine_welcome', 'true');
  document.getElementById('welcome-screen').style.display = 'none';
  //showPage('decks');  // Show the decks page
}

function showWelcome() {
  document.getElementById('welcome-screen').style.display = 'flex';
}

  
// ════════════════════════════════════════
// 🚀 INITIALIZATION
// ════════════════════════════════════════
function init() {
  load();
  // In je init() function:
  initA1Motivation(); // Toon pop-up bij eerste bezoek

  
  // Check if first time user (NEW in v0.17)
  //const hasSeenWelcome = localStorage.getItem('polycards_ukraine_welcome');
  //if (!hasSeenWelcome) {
  //  document.getElementById('welcome-screen').style.display = 'flex';
  //}

  // Always show welcome
  document.getElementById('welcome-screen').style.display = 'flex';
  
  showPage('decks');
  populateDeckSelect();
}

// Start app
init();

// ═══════════════════════════════════════════════════════════════
// A1 MODULE MOTIVATION MODAL
// ═══════════════════════════════════════════════════════════════

// Show A1 Motivation Modal
function showA1Motivation() {
  const modal = document.getElementById('a1-motivation-modal');
  if (modal) {
    modal.classList.add('open');
  }
}

// Close A1 Motivation Modal
function closeA1Motivation() {
  const modal = document.getElementById('a1-motivation-modal');
  if (modal) {
    modal.classList.remove('open');
  }
  // Optioneel: Start study mode
  // startStudy('A1 Module');
}

// Show on first visit (optional)
function initA1Motivation() {
  if (!localStorage.getItem('a1-motivation-shown')) {
    showA1Motivation();
    localStorage.setItem('a1-motivation-shown', 'true');
  }
}

// NEW: Show A1 Motivation on first visit
  initA1Motivation();

