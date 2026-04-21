// ════════════════════════════════════════
// CONFIG - Configuratie
// ════════════════════════════════════════

const CONFIG = {
  APP_NAME: 'PolyCards',
  VERSION: '0.18',
  STORAGE_KEY: 'polycards_data',
  CEFR_LEVEL: 'A1'
};

// Export voor modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = CONFIG;
}
