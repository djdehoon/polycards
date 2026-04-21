// -----------------------------------------------------------------
// POLYCARDS v0.2 - COMPLETE JAVASCRIPT
// -----------------------------------------------------------------

const DECKS = [
  { name: 'Dieren ??', id: 1 },
  { name: 'Eten & Drinken ??', id: 2 },
  { name: 'Familie ????????', id: 3 },
  { name: 'Kleuren ??', id: 4 },
  { name: 'Cijfers ??', id: 5 },
  { name: 'Begroetingen ???', id: 6 },
  { name: 'Thuis ??', id: 7 },
  { name: 'Transport ??', id: 8 },
  { name: 'Weer ???', id: 9 },
  { name: 'Emoties ??', id: 10 }
];

const WORDS = [
  { word: '???', translation: 'kat', deck: 1 },
  { word: '??????', translation: 'hond', deck: 1 },
  { word: '????', translation: 'brood', deck: 2 },
  { word: '??????', translation: 'melk', deck: 2 },
  { word: '????', translation: 'moeder', deck: 3 },
  { word: '????', translation: 'vader', deck: 3 },
  { word: '????????', translation: 'rood', deck: 4 },
  { word: '?????', translation: 'blauw', deck: 4 },
  { word: '????', translation: 'een', deck: 5 },
  { word: '???', translation: 'twee', deck: 5 },
  { word: '??????', translation: 'hallo', deck: 6 },
  { word: '???????', translation: 'dank je', deck: 6 },
  { word: '???', translation: 'huis', deck: 7 },
  { word: '???????', translation: 'kamer', deck: 7 },
  { word: '??????', translation: 'auto', deck: 8 },
  { word: '?????', translation: 'trein', deck: 8 },
  { word: '???????', translation: 'zonnig', deck: 9 },
  { word: '???', translation: 'regen', deck: 9 },
  { word: '?????', translation: 'geluk', deck: 10 },
  { word: '?????', translation: 'liefde', deck: 10 }
];

let cards = [];

function initCards() {
  const saved = localStorage.getItem('polycards_cards');
  if (saved) {
    cards = JSON.parse(saved);
  } else {
    cards = WORDS.map((w, i) => ({
      id: i,
      word: w.word,
      translation: w.translation,
      deck: w.deck,
      reviews: 0,
      interval: 1,
      easeFactor: 2.5,
      dueDate: Date.now()
    }));
    save();
  }
}

function save() {
  localStorage.setItem('polycards_cards', JSON.stringify(cards));
}

function rateCard(card, rating) {
  card.reviews++;
  if (rating === 1) {
    card.interval = 1;
    card.easeFactor = Math.max(1.3, card.easeFactor - 0.2);
  } else if (rating === 2) {
    card.interval = Math.max(1, card.interval * 1.2);
    card.easeFactor = Math.max(1.3, card.easeFactor - 0.1);
  } else if (rating === 3) {
    card.interval = card.interval * card.easeFactor;
  } else if (rating === 4) {
    card.interval = card.interval * card.easeFactor * 1.3;
    card.easeFactor = Math.min(2.5, card.easeFactor + 0.1);
  }
  card.dueDate = Date.now() + (card.interval * 86400000);
  save();
}

function showPage(page) {
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.getElementById(page + '-page').classList.add('active');
  document.querySelectorAll('.nav-tab').forEach(t => t.classList.remove('active'));
  if (event && event.target) event.target.classList.add('active');
  if (page === 'decks') renderDecks();
  if (page === 'study') startStudy();
  if (page === 'browse') renderBrowse();
  if (page === 'help') renderHelp();
  if (page === 'stats') renderStats();
}

function hideWelcome() {
  document.getElementById('welcome-screen').style.display = 'none';
  localStorage.setItem('polycards_welcome_seen', 'true');
}

function showWelcome() {
  document.getElementById('welcome-screen').style.display = 'flex';
}

function renderDecks() {
  const list = document.getElementById('decks-list');
  list.innerHTML = DECKS.map(deck => {
    const deckCards = cards.filter(c => c.deck === deck.id);
    const newCount = deckCards.filter(c => c.reviews === 0).length;
    const reviewCount = deckCards.filter(c => c.dueDate <= Date.now()).length;
    const totalCount = deckCards.length;
    return '<div class="card"><div class="card-title">' + deck.name + '</div><div style="display: flex; gap: 10px; margin-top: 10px;"><span>?? ' + totalCount + '</span><span>? ' + newCount + '</span><span>?? ' + reviewCount + '</span></div><button onclick="startStudyDeck(' + deck.id + ')" style="margin-top: 10px; width: 100%; padding: 8px; background: var(--blue); color: white; border: none; border-radius: 8px; cursor: pointer;">Studeren</button></div>';
  }).join('');
}

function startStudyDeck(deckId) {
  window.currentDeckId = deckId;
  showPage('study');
}

let studyQueue = [];
let currentCardIndex = 0;

function startStudy() {
  const deckId = window.currentDeckId || 1;
  studyQueue = cards.filter(c => c.deck === deckId && c.dueDate <= Date.now());
  if (studyQueue.length === 0) {
    document.getElementById('study-subtitle').textContent = 'Geen kaarten te studeren!';
    document.getElementById('flashcard').innerHTML = '<p style="text-align: center; padding: 40px;">Goed gedaan! ??</p>';
    document.getElementById('study-buttons').innerHTML = '';
    return;
  }
  currentCardIndex = 0;
  renderCard();
}

function renderCard() {
  if (currentCardIndex >= studyQueue.length) {
    document.getElementById('study-subtitle').textContent = 'Sessie voltooid!';
    document.getElementById('flashcard').innerHTML = '<p style="text-align: center; padding: 40px;">Goed gedaan! ??</p>';
    document.getElementById('study-buttons').innerHTML = '';
    return;
  }
  const card = studyQueue[currentCardIndex];
  const progress = (currentCardIndex + 1) + '/' + studyQueue.length;
  document.getElementById('study-subtitle').textContent = progress;
  document.getElementById('flashcard').innerHTML = '<div style="text-align: center; padding: 40px;"><div style="font-size: 2rem; margin-bottom: 20px;">' + card.word + '</div><div style="font-size: 0.9rem; color: var(--text2);">Klik om te flippen</div></div>';
  document.getElementById('flashcard').dataset.flipped = 'false';
  document.getElementById('study-buttons').innerHTML = '<button onclick="flipCard()" style="width: 100%; padding: 10px; margin-bottom: 10px; background: var(--surface2); border: 1px solid var(--border); border-radius: 8px; cursor: pointer;">Flip</button>';
}

function flipCard() {
  const card = studyQueue[currentCardIndex];
  const flipped = document.getElementById('flashcard').dataset.flipped === 'true';
  if (!flipped) {
    document.getElementById('flashcard').innerHTML = '<div style="text-align: center; padding: 40px;"><div style="font-size: 1.5rem; color: var(--green); margin-bottom: 20px;">' + card.translation + '</div><div style="font-size: 0.9rem; color: var(--text2);">Hoe goed kende je dit?</div></div>';
    document.getElementById('flashcard').dataset.flipped = 'true';
    document.getElementById('study-buttons').innerHTML = '<button onclick="nextCard(1)" style="flex: 1; padding: 10px; background: var(--red); color: white; border: none; border-radius: 8px; cursor: pointer;">Again</button><button onclick="nextCard(2)" style="flex: 1; padding: 10px; background: var(--orange); color: white; border: none; border-radius: 8px; cursor: pointer; margin: 0 5px;">Hard</button><button onclick="nextCard(3)" style="flex: 1; padding: 10px; background: var(--blue); color: white; border: none; border-radius: 8px; cursor: pointer; margin: 0 5px;">Good</button><button onclick="nextCard(4)" style="flex: 1; padding: 10px; background: var(--green); color: white; border: none; border-radius: 8px; cursor: pointer;">Easy</button>';
  } else {
    renderCard();
  }
}

function nextCard(rating) {
  const card = studyQueue[currentCardIndex];
  rateCard(card, rating);
  currentCardIndex++;
  renderCard();
}

function renderBrowse() {
  const list = document.getElementById('browse-list');
  list.innerHTML = cards.map(c => '<div class="card" style="display: flex; justify-content: space-between; align-items: center;"><div><div style="font-weight: bold;">' + c.word + '</div><div style="font-size: 0.9rem; color: var(--text2);">' + c.translation + '</div></div><div style="font-size: 0.8rem; color: var(--text2);">' + c.reviews + ' reviews</div></div>').join('');
}

function renderHelp() {
  const help = document.getElementById('help-content');
  help.innerHTML = '<div class="card"><h3>?? Wat is PolyCards?</h3><p>PolyCards is een app om Oekraïens te leren met flashcards en spaced repetition.</p></div><div class="card"><h3>?? Hoe werkt het?</h3><p>1. Kies een deck<br>2. Studeren: flip de kaart en zeg hoe goed je het kende<br>3. PolyCards berekent wanneer je het weer moet oefenen</p></div><div class="card"><h3>?? Mijn data?</h3><p>Alles wordt opgeslagen in je browser. Geen account nodig!</p></div><div class="card"><h3>?? Kosten?</h3><p>PolyCards is volledig gratis!</p></div>';
}

function renderStats() {
  const stats = document.getElementById('stats-display');
  const totalReviews = cards.reduce((sum, c) => sum + c.reviews, 0);
  const newCards = cards.filter(c => c.reviews === 0).length;
  const learningCards = cards.filter(c => c.reviews > 0 && c.reviews < 5).length;
  const masteredCards = cards.filter(c => c.reviews >= 5).length;
  stats.innerHTML = '<div class="card"><div style="font-size: 2rem; font-weight: bold; color: var(--blue);">' + totalReviews + '</div><div style="color: var(--text2);">Totale reviews</div></div><div class="card"><div style="font-size: 1.5rem; font-weight: bold;">?? ' + newCards + '</div><div style="color: var(--text2);">Nieuwe kaarten</div></div><div class="card"><div style="font-size: 1.5rem; font-weight: bold;">?? ' + learningCards + '</div><div style="color: var(--text2);">Aan het leren</div></div><div class="card"><div style="font-size: 1.5rem; font-weight: bold;">? ' + masteredCards + '</div><div style="color: var(--text2);">Beheerst</div></div>';
}

function speak(text, lang) {
  try {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang || 'uk-UA';
    synth.speak(utterance);
  } catch (e) {
    console.error('Speech error:', e);
  }
}

function init() {
  initCards();
  if (!localStorage.getItem('polycards_welcome_seen')) {
    showWelcome();
  } else {
    hideWelcome();
  }
  renderDecks();
}

document.addEventListener('DOMContentLoaded', init);
