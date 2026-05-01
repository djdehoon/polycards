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

