// ════════════════════════════════════════
// APP - Main Application Logic
// ════════════════════════════════════════

const App = {
  // Initialize application
  init() {
    console.log('🚀 PolyCards initializing...');

    // Load data
    this.loadDefaultData();

    // Check if first time user
    const hasVisited = Storage.get('polycards_ukraine_welcome');
    if (!hasVisited) {
      UI.showWelcome();
    } else {
      UI.hideWelcome();
      UI.showPage('decks');
      UI.renderDecks();
      UI.renderStats();
    }

    // Setup event listeners
    this.setupEventListeners();

    console.log('✅ PolyCards ready!');
  },

  // Load default data if empty
  loadDefaultData() {
    let cards = Storage.get('polycards_ukraine_cards');
    
    if (!cards || cards.length === 0) {
      // Load from data/decks.json or use inline data
      cards = this.getDefaultCards();
      Storage.set('polycards_ukraine_cards', cards);
    }
  },

  // Get default cards (100 words)
  getDefaultCards() {
    return [
      { wordUk: 'привіт', wordNl: 'hallo', deck: 'Begroetingen', translit: 'pryvit', sentence: 'Привіт! Як дела?', stats: {} },
      { wordUk: 'спасибі', wordNl: 'dank je', deck: 'Begroetingen', translit: 'spasybi', sentence: 'Спасибі за допомогу!', stats: {} },
      { wordUk: 'будь ласка', wordNl: 'alsjeblieft', deck: 'Begroetingen', translit: 'bud laska', sentence: 'Будь ласка, допоможи мені.', stats: {} },
      { wordUk: 'до побачення', wordNl: 'tot ziens', deck: 'Begroetingen', translit: 'do pobachennya', sentence: 'До побачення!', stats: {} },
      { wordUk: 'кіт', wordNl: 'kat', deck: 'Dieren', translit: 'kit', sentence: 'Це чорний кіт.', stats: {} },
      { wordUk: 'собака', wordNl: 'hond', deck: 'Dieren', translit: 'sobaka', sentence: 'Моя собака дуже розумна.', stats: {} },
      { wordUk: 'птиця', wordNl: 'vogel', deck: 'Dieren', translit: 'ptycya', sentence: 'Птиця летить в небі.', stats: {} },
      { wordUk: 'риба', wordNl: 'vis', deck: 'Dieren', translit: 'ryba', sentence: 'Риба плаває у воді.', stats: {} },
      // ... (voeg hier meer woorden toe - totaal 100)
    ];
  },

  // Setup event listeners
  setupEventListeners() {
    // Navigation tabs
    document.querySelectorAll('.nav-tab').forEach(tab => {
      tab.addEventListener('click', (e) => {
        const page = e.target.dataset.page;
        if (page) {
          UI.showPage(page);
          if (page === 'browse') UI.renderBrowse();
          if (page === 'stats') UI.renderStats();
        }
      });
    });

    // Welcome screen
    const startBtn = document.getElementById('start-learning-btn');
    if (startBtn) {
      startBtn.addEventListener('click', () => {
        UI.hideWelcome();
        UI.showPage('decks');
        UI.renderDecks();
      });
    }

    // Flashcard flip
    const flashcard = document.getElementById('flashcard');
    if (flashcard) {
      flashcard.addEventListener('click', () => UI.flipCard());
    }

    // Rating buttons
    [1, 2, 3, 4].forEach(rating => {
      const btn = document.getElementById(`rate-${rating}`);
      if (btn) {
        btn.addEventListener('click', () => Study.rateCard(rating));
      }
    });

    console.log('✅ Event listeners setup');
  }
};

// Start app when DOM is ready
document.addEventListener('DOMContentLoaded', () => App.init());

// Make App available globally
window.App = App;
