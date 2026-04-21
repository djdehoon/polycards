const App = {
  // Initialize application
  init() {
    console.log('🚀 PolyCards initializing...');

    // Load data from decks.json
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

  // Load data from decks.json
  loadDefaultData() {
    let cards = Storage.get('polycards_ukraine_cards');
    
    if (!cards || cards.length === 0) {
      // Fetch from data/decks.json
      fetch('data/decks.json')
        .then(res => res.json())
        .then(data => {
          Storage.set('polycards_ukraine_cards', data.cards);
          UI.renderDecks();
          UI.renderStats();
        })
        .catch(err => {
          console.error('Failed to load decks.json:', err);
          // Fallback (lege array)
          Storage.set('polycards_ukraine_cards', []);
        });
    }
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
