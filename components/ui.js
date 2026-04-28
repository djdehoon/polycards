// ════════════════════════════════════════
// UI - Shared UI Functions
// ════════════════════════════════════════

const UI = {
  // Show/hide pages
  showPage(pageId) {
    try {
      // Hide all pages
      document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
      });

      // Hide all nav tabs
      document.querySelectorAll('.nav-tab').forEach(t => {
        t.classList.remove('active');
      });

      // Show selected page
      const page = document.getElementById('page-' + pageId);
      if (page) {
        page.classList.add('active');
      }

      // Highlight nav tab
      const tabIndex = { decks: 0, instructions: 1, browse: 2, stats: 3 };
      if (tabIndex[pageId] !== undefined) {
        const tabs = document.querySelectorAll('.nav-tab');
        if (tabs[tabIndex[pageId]]) {
          tabs[tabIndex[pageId]].classList.add('active');
        }
      }

      return true;
    } catch (error) {
      console.error('UI showPage error:', error);
      return false;
    }
  },

  // Show/hide modal
  openModal(modalId) {
    try {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.add('open');
      }
      return true;
    } catch (error) {
      console.error('UI openModal error:', error);
      return false;
    }
  },

  closeModal(modalId) {
    try {
      const modal = document.getElementById(modalId);
      if (modal) {
        modal.classList.remove('open');
      }
      return true;
    } catch (error) {
      console.error('UI closeModal error:', error);
      return false;
    }
  },

  // Show toast notification
  showToast(message, duration = 2500) {
    try {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        
        setTimeout(() => {
          toast.classList.remove('show');
        }, duration);
      }
      return true;
    } catch (error) {
      console.error('UI showToast error:', error);
      return false;
    }
  },

  // Update element text
  setText(elementId, text) {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        element.textContent = text;
      }
      return true;
    } catch (error) {
      console.error('UI setText error:', error);
      return false;
    }
  },

  // Update element HTML
  setHTML(elementId, html) {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        element.innerHTML = html;
      }
      return true;
    } catch (error) {
      console.error('UI setHTML error:', error);
      return false;
    }
  },

  // Show/hide element
  show(elementId) {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.display = 'block';
      }
      return true;
    } catch (error) {
      console.error('UI show error:', error);
      return false;
    }
  },

  hide(elementId) {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        element.style.display = 'none';
      }
      return true;
    } catch (error) {
      console.error('UI hide error:', error);
      return false;
    }
  },

  // Add/remove CSS class
  addClass(elementId, className) {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        element.classList.add(className);
      }
      return true;
    } catch (error) {
      console.error('UI addClass error:', error);
      return false;
    }
  },

  removeClass(elementId, className) {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        element.classList.remove(className);
      }
      return true;
    } catch (error) {
      console.error('UI removeClass error:', error);
      return false;
    }
  },

  // Toggle CSS class
  toggleClass(elementId, className) {
    try {
      const element = document.getElementById(elementId);
      if (element) {
        element.classList.toggle(className);
      }
      return true;
    } catch (error) {
      console.error('UI toggleClass error:', error);
      return false;
    }
  },

  // Disable/enable button
  disableButton(buttonId) {
    try {
      const button = document.getElementById(buttonId);
      if (button) {
        button.disabled = true;
      }
      return true;
    } catch (error) {
      console.error('UI disableButton error:', error);
      return false;
    }
  },

  enableButton(buttonId) {
    try {
      const button = document.getElementById(buttonId);
      if (button) {
        button.disabled = false;
      }
      return true;
    } catch (error) {
      console.error('UI enableButton error:', error);
      return false;
    }
  }
};

// Make UI available globally
window.UI = UI;
