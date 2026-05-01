// ════════════════════════════════════════
// 💾 STORAGE
// ════════════════════════════════════════
function save() {
  localStorage.setItem('ukr_decks', JSON.stringify(decks));
  localStorage.setItem('ukr_cards', JSON.stringify(cards));
}
function load() {
  try {
    const d = localStorage.getItem('ukr_decks');
    const c = localStorage.getItem('ukr_cards');
    decks = d ? JSON.parse(d) : [];
    cards = c ? JSON.parse(c) : [];
  } catch {
    decks = [];
    cards = [];
  }
  if (!Array.isArray(decks)) decks = [];
  if (!Array.isArray(cards)) cards = [];

  if (cards.length > 0 && decks.length === 0) {
    const deckNames = [...new Set(cards.map(card => card.deck).filter(Boolean))];
    deckNames.forEach(name => decks.push({ name }));
    save();
  }

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
// 🎉 WELCOME SCREEN
// ════════════════════════════════════════
function closeWelcome() {
  localStorage.setItem('polycards_ukraine_welcome', 'true');
  document.getElementById('welcome-screen').style.display = 'none';
  //showPage('decks');  // Show the decks page
}

  
// ════════════════════════════════════════
// 🚀 INITIALIZATION
// ════════════════════════════════════════
function init() {
  load();

  const welcomeEl = document.getElementById('welcome-screen');
  const hasSeenWelcome = localStorage.getItem('polycards_ukraine_welcome');
  if (welcomeEl) {
    welcomeEl.style.display = hasSeenWelcome ? 'none' : 'flex';
  }

  showPage('decks');
  populateDeckSelect();
}

