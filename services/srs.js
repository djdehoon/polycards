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
