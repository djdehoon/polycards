// ════════════════════════════════════════
// AUDIO - Text-to-Speech Service
// ════════════════════════════════════════

const Audio = {
  // Speak text in specified language
  speak(text, lang = 'uk-UA') {
    try {
      // Stop any ongoing speech
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }

      // Create utterance
      const utterance = new SpeechSynthesisUtterance(text);
      
      // Set language
      if (lang === 'uk' || lang === 'uk-UA') {
        utterance.lang = 'uk-UA';
      } else if (lang === 'nl' || lang === 'nl-NL') {
        utterance.lang = 'nl-NL';
      } else if (lang === 'es' || lang === 'es-ES') {
        utterance.lang = 'es-ES';
      } else if (lang === 'pt' || lang === 'pt-PT') {
        utterance.lang = 'pt-PT';
      } else if (lang === 'pl' || lang === 'pl-PL') {
        utterance.lang = 'pl-PL';
      } else if (lang === 'zh' || lang === 'zh-CN') {
        utterance.lang = 'zh-CN';
      } else if (lang === 'ar' || lang === 'ar-SA') {
        utterance.lang = 'ar-SA';
      } else if (lang === 'fi' || lang === 'fi-FI') {
        utterance.lang = 'fi-FI';
      } else {
        utterance.lang = 'en-US';
      }

      // Set voice properties
      utterance.rate = 0.9;
      utterance.pitch = 1;
      utterance.volume = 1;

      // Error handling
      utterance.onerror = (event) => {
        console.error('Speech synthesis error:', event.error);
      };

      // Speak
      if (window.speechSynthesis) {
        window.speechSynthesis.speak(utterance);
      }

      return true;
    } catch (error) {
      console.error('Audio speak error:', error);
      return false;
    }
  },

  // Speak word in Ukrainian
  speakUkrainian(word) {
    return this.speak(word, 'uk-UA');
  },

  // Speak word in Dutch
  speakDutch(word) {
    return this.speak(word, 'nl-NL');
  },

  // Speak word in Spanish
  speakSpanish(word) {
    return this.speak(word, 'es-ES');
  },

  // Speak word in English (fallback)
  speakEnglish(word) {
    return this.speak(word, 'en-US');
  },

  // Stop current speech
  stop() {
    try {
      if (window.speechSynthesis) {
        window.speechSynthesis.cancel();
      }
      return true;
    } catch (error) {
      console.error('Audio stop error:', error);
      return false;
    }
  },

  // Check if speech synthesis is available
  isAvailable() {
    return 'speechSynthesis' in window;
  },

  // Get available voices
  getVoices() {
    if (window.speechSynthesis) {
      return window.speechSynthesis.getVoices();
    }
    return [];
  }
};

// Make Audio available globally
window.Audio = Audio;
