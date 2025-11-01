/**
 * Sports Team Management Design System
 * Theme Switcher Utility
 *
 * Provides easy theme switching with localStorage persistence
 */

class ThemeSwitcher {
  constructor() {
    this.themes = [
      { id: 'classic', name: 'Classic Sports', description: 'Traditional green field colors' },
      { id: 'ocean', name: 'Ocean Blue', description: 'Professional and clean' },
      { id: 'sunset', name: 'Sunset Orange', description: 'Energetic and warm' },
      { id: 'night', name: 'Night Mode', description: 'Dark theme for low-light' },
      { id: 'victory', name: 'Purple Victory', description: 'Modern championship vibes' },
      { id: 'fire', name: 'Fire Red', description: 'Intense and passionate' }
    ];

    this.currentTheme = this.getStoredTheme() || 'classic';
    this.storageKey = 'sports-app-theme';

    // Initialize
    this.applyTheme(this.currentTheme);
  }

  /**
   * Get the currently active theme
   * @returns {string} Current theme ID
   */
  getCurrentTheme() {
    return this.currentTheme;
  }

  /**
   * Get all available themes
   * @returns {Array} Array of theme objects
   */
  getAvailableThemes() {
    return this.themes;
  }

  /**
   * Apply a theme to the document
   * @param {string} themeId - The ID of the theme to apply
   * @returns {boolean} Success status
   */
  applyTheme(themeId) {
    // Validate theme exists
    const themeExists = this.themes.some(theme => theme.id === themeId);
    if (!themeExists) {
      console.warn(`Theme "${themeId}" not found. Available themes:`, this.themes.map(t => t.id));
      return false;
    }

    // Apply theme to document
    document.documentElement.setAttribute('data-theme', themeId);
    this.currentTheme = themeId;

    // Store preference
    this.storeTheme(themeId);

    // Emit custom event for listeners
    this.emitThemeChangeEvent(themeId);

    return true;
  }

  /**
   * Switch to next theme in the list
   */
  nextTheme() {
    const currentIndex = this.themes.findIndex(theme => theme.id === this.currentTheme);
    const nextIndex = (currentIndex + 1) % this.themes.length;
    this.applyTheme(this.themes[nextIndex].id);
  }

  /**
   * Switch to previous theme in the list
   */
  previousTheme() {
    const currentIndex = this.themes.findIndex(theme => theme.id === this.currentTheme);
    const previousIndex = currentIndex === 0 ? this.themes.length - 1 : currentIndex - 1;
    this.applyTheme(this.themes[previousIndex].id);
  }

  /**
   * Store theme preference in localStorage
   * @param {string} themeId - Theme ID to store
   */
  storeTheme(themeId) {
    try {
      localStorage.setItem(this.storageKey, themeId);
    } catch (error) {
      console.warn('Failed to store theme preference:', error);
    }
  }

  /**
   * Get stored theme preference from localStorage
   * @returns {string|null} Stored theme ID or null
   */
  getStoredTheme() {
    try {
      return localStorage.getItem(this.storageKey);
    } catch (error) {
      console.warn('Failed to retrieve stored theme:', error);
      return null;
    }
  }

  /**
   * Emit custom event when theme changes
   * @param {string} themeId - The new theme ID
   */
  emitThemeChangeEvent(themeId) {
    const event = new CustomEvent('themechange', {
      detail: {
        theme: themeId,
        themeInfo: this.themes.find(t => t.id === themeId)
      }
    });
    document.dispatchEvent(event);
  }

  /**
   * Create a theme selector dropdown element
   * @param {Object} options - Configuration options
   * @returns {HTMLElement} The theme selector element
   */
  createThemeSelector(options = {}) {
    const {
      className = 'theme-selector',
      showLabel = true,
      labelText = 'Theme:'
    } = options;

    const container = document.createElement('div');
    container.className = className;

    if (showLabel) {
      const label = document.createElement('label');
      label.textContent = labelText;
      label.setAttribute('for', 'theme-select');
      container.appendChild(label);
    }

    const select = document.createElement('select');
    select.id = 'theme-select';
    select.className = 'theme-select';

    this.themes.forEach(theme => {
      const option = document.createElement('option');
      option.value = theme.id;
      option.textContent = theme.name;
      option.selected = theme.id === this.currentTheme;
      select.appendChild(option);
    });

    select.addEventListener('change', (e) => {
      this.applyTheme(e.target.value);
    });

    container.appendChild(select);
    return container;
  }

  /**
   * Create theme toggle buttons
   * @param {Object} options - Configuration options
   * @returns {HTMLElement} Container with theme buttons
   */
  createThemeButtons(options = {}) {
    const {
      className = 'theme-buttons',
      buttonClassName = 'theme-button',
      showDescription = false
    } = options;

    const container = document.createElement('div');
    container.className = className;

    this.themes.forEach(theme => {
      const button = document.createElement('button');
      button.className = buttonClassName;
      button.setAttribute('data-theme', theme.id);
      button.textContent = theme.name;

      if (theme.id === this.currentTheme) {
        button.classList.add('active');
      }

      if (showDescription) {
        button.title = theme.description;
      }

      button.addEventListener('click', () => {
        // Remove active class from all buttons
        container.querySelectorAll('button').forEach(btn => {
          btn.classList.remove('active');
        });

        // Add active class to clicked button
        button.classList.add('active');

        // Apply theme
        this.applyTheme(theme.id);
      });

      container.appendChild(button);
    });

    return container;
  }

  /**
   * Listen to theme changes
   * @param {Function} callback - Callback function to execute on theme change
   */
  onThemeChange(callback) {
    document.addEventListener('themechange', (e) => {
      callback(e.detail);
    });
  }
}

// Export for module usage
if (typeof module !== 'undefined' && module.exports) {
  module.exports = ThemeSwitcher;
}

// Auto-initialize if not using modules
if (typeof window !== 'undefined') {
  window.ThemeSwitcher = ThemeSwitcher;

  // Create global instance
  window.themeSwitcher = new ThemeSwitcher();
}
