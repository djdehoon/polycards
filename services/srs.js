// ════════════════════════════════════════
// SRS - Spaced Repetition System (SM-2)
// ════════════════════════════════════════

const SRS = {
  // SM-2 Algorithm - Rate a card
  rateCard(card, rating) {
    // rating: 'again' (0), 'hard' (1), 'good' (2), 'easy' (3)
    if (!card) return card;

    // Initialize if needed
    if (!card.interval) card.interval = 0;
    if (!card.ease) card.ease = 2.5;
    if (!card.lapses) card.lapses = 0;

    const now = Date.now();
    const day = 86400000; // 24 hours in ms

    if (rating === 'again') {
      // Complete blackout
      card.interval = 0;
      card.state = 'learn';
      card.due = now + 60000; // 1 minute
      card.lapses++;
    } else if (rating === 'hard') {
      // Correct but difficult
      card.interval = Math.max(1, card.interval * 1.2);
      card.ease = Math.max(1.3, card.ease - 0.15);
      card.state = 'review';
      card.due = now + card.interval * day;
    } else if (rating === 'good') {
      // Correct response
      if (card.interval === 0) {
        card.interval = 1;
      } else {
        card.interval = Math.round(card.interval * card.ease);
      }
      card.state = 'review';
      card.due = now + card.interval * day;
    } else if (rating === 'easy') {
      // Perfect response
      if (card.interval === 0) {
        card.interval = 4;
      } else {
        card.interval = Math.round(card.interval * card.ease * 1.3);
      }
      card.ease = Math.min(3.0, card.ease + 0.15);
      card.state = 'review';
      card.due = now + card.interval * day;
    }

    return card;
  },

  // Get cards due for study
  getDueCards(cards, deckName = null) {
    const now = Date.now();
    let dueCards = cards.filter(card => {
      const isDue = !card.due || card.due <= now;
      const isInDeck = !deckName || card.deck === deckName;
      return isDue && isInDeck;
    });

    return dueCards;
  },

  // Get all cards for a deck
  getCardsByDeck(cards, deckName) {
    return cards.filter(card => card.deck === deckName);
  },

  // Calculate statistics
  getStats(cards, deckName = null) {
    const now = Date.now();
    let filtered = cards;
    
    if (deckName) {
      filtered = filtered.filter(c => c.deck === deckName);
    }

    const stats = {
      total: filtered.length,
      new: filtered.filter(c => c.state === 'new').length,
      learning: filtered.filter(c => c.state === 'learn').length,
      review: filtered.filter(c => c.state === 'review').length,
      due: filtered.filter(c => c.state === 'review' && c.due <= now).length,
      mature: filtered.filter(c => c.interval >= 21).length
    };

    return stats;
  },

  // Shuffle array
  shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
};

// Make SRS available globally
window.SRS = SRS;
