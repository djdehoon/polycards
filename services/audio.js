function speakWord(e) {
e.stopPropagation();
const dir = getEffectiveDirection();
const text = dir === 'uk-nl' ? currentCard.word : currentCard.translation;
const lang = dir === 'uk-nl' ? 'uk-UA' : 'nl-NL';




// Check of stemmen beschikbaar zijn
const voices = speechSynthesis.getVoices();
const hasVoice = voices.some(v => v.lang.startsWith(lang.split('-')[0]));




const utter = new SpeechSynthesisUtterance(text);




if (hasVoice) {
// Perfecte stem gevonden
utter.lang = lang;
const voice = voices.find(v => v.lang.startsWith(lang.split('-')[0]));
if (voice) utter.voice = voice;
} else if (dir === 'uk-nl') {
// Fallback voor Oekraïens: probeer Russisch, dan Engels
const fallbackVoice = voices.find(v => v.lang.startsWith('ru')) ||
voices.find(v => v.lang.startsWith('en'));
if (fallbackVoice) {
utter.voice = fallbackVoice;
showToast('⚠️ Geen Oekraïense stem, gebruikt fallback');
}
} else {
// Fallback voor Nederlands: gebruik Engels
utter.lang = 'en-US';
showToast('⚠️ Geen Nederlandse stem gevonden');
}




utter.onerror = () => showToast('❌ Uitspraak niet beschikbaar');
speechSynthesis.speak(utter);
}
