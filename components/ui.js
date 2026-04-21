// components/ui.js - UI Management
const UI = {
  showPage(page) {
    document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
    const pageEl = document.getElementById('page-' + page);
    if (pageEl) pageEl.classList.add('active');
    
    document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
    const tabEl = document.querySelector(`[data-page="${page}"]`);
    if (tabEl) tabEl.classList.add('active');
  },

  renderDecks(cards) {
    const decks = [...new Set(cards.map(c => c.deck))];
    const html = decks.map(deck => {
      const deckCards = cards.filter(c => c.deck === deck);
      const dueCards = SRS.getDueCards(deckCards).length;
      return `
        <div class="deck-card" onclick="Study.selectDeck('${deck}')">
          <div style="font-size: 2rem; margin-bottom: 10px;">🎴</div>
          <div style="font-weight: bold;">${deck}</div>
          <div style="color: var(--text2); font-size: 0.9rem;">${deckCards.length} woorden</div>
          <div style="color: var(--green); font-size: 0.85rem; margin-top: 5px;">${dueCards} due</div>
        </div>
      `;
    }).join('');
    document.getElementById('deck-list').innerHTML = html;
  },

  renderStats(cards) {
    const total = cards.length;
    const learned = cards.filter(c => c.stats?.repetitions >= 5).length;
    const html = `
      <div class="card">
        <div style="font-size: 1.2rem; margin-bottom: 10px;">📊 Voortgang</div>
        <div style="margin: 10px 0;">Totaal woorden: <strong>${total}</strong></div>
        <div style="margin: 10px 0;">Geleerd: <strong>${learned}</strong></div>
        <div style="margin: 10px 0;">Percentage: <strong>${Math.round(learned/total*100)}%</strong></div>
      </div>
    `;
    document.getElementById('stats-display').innerHTML = html;
  },

  showWelcome() {
    this.showPage('welcome');
  },

  hideWelcome() {
    const welcomeEl = document.getElementById('page-welcome');
    if (welcomeEl) welcomeEl.style.display = 'none';
  }
};

window.UI = UI;
