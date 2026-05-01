// ════════════════════════════════════════
// 📊 STATS
// ════════════════════════════════════════
function renderStats() {
  const total = cards.length;
  const mature = cards.filter(c => c.interval >= 21).length;
  const young = cards.filter(c => c.state === 'review' && c.interval < 21).length;
  const newC = cards.filter(c => c.state === 'new').length;

  document.getElementById('st-total').textContent = total;
  document.getElementById('st-mature').textContent = mature;
  document.getElementById('st-young').textContent = young;
  document.getElementById('st-new').textContent = newC;

  const bars = document.getElementById('deck-stat-bars');
  bars.innerHTML = decks.map(d => {
    const dc = cards.filter(c => c.deck === d.name);
    const pct = total > 0 ? Math.round((dc.length / total) * 100) : 0;
    const colors = ['#4a9eff','#4caf50','#ff9800','#f44336','#9c27b0','#00bcd4','#ff5722','#8bc34a','#ffc107','#e91e63'];
    const color = colors[decks.indexOf(d) % colors.length];
    return `<div class="bar-row">
      <div class="bar-label"><span>${d.name}</span><span>${dc.length} kaarten</span></div>
      <div class="bar-track"><div class="bar-fill" style="width:${pct}%;background:${color}"></div></div>
    </div>`;
  }).join('');
}
