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
    String(c.word || '').toLowerCase().includes(query) ||
    String(c.translation || '').toLowerCase().includes(query) ||
    String(c.translit || '').toLowerCase().includes(query)
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

