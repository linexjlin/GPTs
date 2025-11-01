# Integration Guide

This guide will help you integrate the Sports Team Management Design System into your application.

## Table of Contents

1. [Installation](#installation)
2. [Basic Setup](#basic-setup)
3. [Framework Integration](#framework-integration)
4. [Theme Management](#theme-management)
5. [Common Patterns](#common-patterns)
6. [Migration Guide](#migration-guide)

## Installation

### Option 1: Manual Download

1. Copy the entire `sports-design-system` folder to your project
2. Link to the CSS and JS files in your HTML

### Option 2: Individual Files

Copy only the files you need:
- `css/tokens.css` (required)
- `css/themes.css` (required)
- `css/components.css` (optional, but recommended)
- `js/theme-switcher.js` (optional, for theme switching)

## Basic Setup

### Minimal Setup (CSS Only)

```html
<!DOCTYPE html>
<html lang="en" data-theme="classic">
<head>
  <link rel="stylesheet" href="path/to/tokens.css">
  <link rel="stylesheet" href="path/to/themes.css">
  <link rel="stylesheet" href="path/to/components.css">
</head>
<body>
  <!-- Your content -->
</body>
</html>
```

### Full Setup (With Theme Switching)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <link rel="stylesheet" href="path/to/tokens.css">
  <link rel="stylesheet" href="path/to/themes.css">
  <link rel="stylesheet" href="path/to/components.css">

  <!-- Optional: Google Fonts for better typography -->
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Montserrat:wght@700;800&display=swap" rel="stylesheet">
</head>
<body>
  <!-- Your content -->

  <!-- Theme switcher (place before closing body tag) -->
  <script src="path/to/theme-switcher.js"></script>
</body>
</html>
```

## Framework Integration

### React

#### 1. Import CSS in your main file

```jsx
// index.js or App.js
import './assets/css/tokens.css';
import './assets/css/themes.css';
import './assets/css/components.css';
```

#### 2. Create a Theme Context

```jsx
// ThemeContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    localStorage.getItem('sports-app-theme') || 'classic'
  );

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sports-app-theme', theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
```

#### 3. Create a Theme Switcher Component

```jsx
// ThemeSwitcher.jsx
import React from 'react';
import { useTheme } from './ThemeContext';

const themes = [
  { id: 'classic', name: 'Classic Sports' },
  { id: 'ocean', name: 'Ocean Blue' },
  { id: 'sunset', name: 'Sunset Orange' },
  { id: 'night', name: 'Night Mode' },
  { id: 'victory', name: 'Purple Victory' },
  { id: 'fire', name: 'Fire Red' }
];

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="theme-selector">
      <label htmlFor="theme-select">Theme:</label>
      <select
        id="theme-select"
        className="form-select"
        value={theme}
        onChange={(e) => setTheme(e.target.value)}
      >
        {themes.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>
    </div>
  );
}
```

#### 4. Use in Your App

```jsx
// App.js
import { ThemeProvider } from './ThemeContext';
import { ThemeSwitcher } from './ThemeSwitcher';

function App() {
  return (
    <ThemeProvider>
      <div className="container">
        <ThemeSwitcher />
        {/* Your app content */}
      </div>
    </ThemeProvider>
  );
}
```

### Vue.js

#### 1. Import CSS in main.js

```javascript
// main.js
import './assets/css/tokens.css';
import './assets/css/themes.css';
import './assets/css/components.css';
```

#### 2. Create a Theme Composable

```javascript
// useTheme.js
import { ref, watch, onMounted } from 'vue';

const theme = ref('classic');

export function useTheme() {
  const applyTheme = (newTheme) => {
    theme.value = newTheme;
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('sports-app-theme', newTheme);
  };

  const loadTheme = () => {
    const saved = localStorage.getItem('sports-app-theme');
    if (saved) {
      applyTheme(saved);
    }
  };

  onMounted(() => {
    loadTheme();
  });

  return {
    theme,
    applyTheme,
    loadTheme
  };
}
```

#### 3. Create Theme Switcher Component

```vue
<!-- ThemeSwitcher.vue -->
<template>
  <div class="theme-selector">
    <label for="theme-select">Theme:</label>
    <select
      id="theme-select"
      class="form-select"
      v-model="theme"
      @change="applyTheme(theme)"
    >
      <option v-for="t in themes" :key="t.id" :value="t.id">
        {{ t.name }}
      </option>
    </select>
  </div>
</template>

<script setup>
import { useTheme } from './useTheme';

const themes = [
  { id: 'classic', name: 'Classic Sports' },
  { id: 'ocean', name: 'Ocean Blue' },
  { id: 'sunset', name: 'Sunset Orange' },
  { id: 'night', name: 'Night Mode' },
  { id: 'victory', name: 'Purple Victory' },
  { id: 'fire', name: 'Fire Red' }
];

const { theme, applyTheme } = useTheme();
</script>
```

### Angular

#### 1. Add CSS to angular.json

```json
{
  "styles": [
    "src/assets/css/tokens.css",
    "src/assets/css/themes.css",
    "src/assets/css/components.css"
  ]
}
```

#### 2. Create a Theme Service

```typescript
// theme.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private currentTheme = new BehaviorSubject<string>(
    localStorage.getItem('sports-app-theme') || 'classic'
  );

  theme$ = this.currentTheme.asObservable();

  constructor() {
    this.applyTheme(this.currentTheme.value);
  }

  applyTheme(theme: string): void {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('sports-app-theme', theme);
    this.currentTheme.next(theme);
  }

  getCurrentTheme(): string {
    return this.currentTheme.value;
  }
}
```

#### 3. Create Theme Switcher Component

```typescript
// theme-switcher.component.ts
import { Component } from '@angular/core';
import { ThemeService } from './theme.service';

@Component({
  selector: 'app-theme-switcher',
  template: `
    <div class="theme-selector">
      <label for="theme-select">Theme:</label>
      <select
        id="theme-select"
        class="form-select"
        [value]="themeService.getCurrentTheme()"
        (change)="onThemeChange($event)"
      >
        <option *ngFor="let theme of themes" [value]="theme.id">
          {{ theme.name }}
        </option>
      </select>
    </div>
  `
})
export class ThemeSwitcherComponent {
  themes = [
    { id: 'classic', name: 'Classic Sports' },
    { id: 'ocean', name: 'Ocean Blue' },
    { id: 'sunset', name: 'Sunset Orange' },
    { id: 'night', name: 'Night Mode' },
    { id: 'victory', name: 'Purple Victory' },
    { id: 'fire', name: 'Fire Red' }
  ];

  constructor(public themeService: ThemeService) {}

  onThemeChange(event: Event): void {
    const target = event.target as HTMLSelectElement;
    this.themeService.applyTheme(target.value);
  }
}
```

## Theme Management

### User Preference Detection

Detect user's system theme preference:

```javascript
// Detect system theme preference
function detectSystemTheme() {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'night';
  }
  return 'classic';
}

// Apply system theme if no saved preference
const savedTheme = localStorage.getItem('sports-app-theme');
const theme = savedTheme || detectSystemTheme();
themeSwitcher.applyTheme(theme);

// Listen for system theme changes
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
  if (!localStorage.getItem('sports-app-theme')) {
    themeSwitcher.applyTheme(e.matches ? 'night' : 'classic');
  }
});
```

### Team-Based Theme

Set theme based on team configuration:

```javascript
// Example: Set theme based on team colors
function setTeamTheme(teamId) {
  const teamThemes = {
    'eagles': 'classic',
    'dolphins': 'ocean',
    'suns': 'sunset',
    'tigers': 'fire'
  };

  const theme = teamThemes[teamId] || 'classic';
  themeSwitcher.applyTheme(theme);
}
```

## Common Patterns

### Dashboard Layout

```html
<div class="container">
  <!-- Stats Overview -->
  <div class="grid grid-cols-4 gap-lg mb-lg">
    <div class="stat-card">
      <div class="stat-label">Total Players</div>
      <div class="stat-value">248</div>
      <div class="stat-change">↑ 12%</div>
    </div>
    <!-- More stat cards -->
  </div>

  <!-- Content Cards -->
  <div class="grid grid-cols-2 gap-lg">
    <div class="card">
      <div class="card-header">
        <h3 class="card-title">Recent Matches</h3>
      </div>
      <div class="card-body">
        <!-- Match list -->
      </div>
    </div>
    <!-- More cards -->
  </div>
</div>
```

### Player Profile

```html
<div class="card">
  <div class="card-header">
    <h2 class="card-title">Player Profile</h2>
  </div>
  <div class="card-body">
    <div class="roster-card">
      <div class="roster-avatar">JD</div>
      <div class="roster-info">
        <div class="roster-name">John Doe</div>
        <div class="roster-position">Forward</div>
      </div>
      <div class="roster-number">#10</div>
    </div>

    <div class="mt-lg">
      <div class="grid grid-cols-3 gap-md">
        <div>
          <div class="text-sm" style="color: var(--color-text-secondary)">Goals</div>
          <div class="text-2xl font-bold">15</div>
        </div>
        <div>
          <div class="text-sm" style="color: var(--color-text-secondary)">Assists</div>
          <div class="text-2xl font-bold">8</div>
        </div>
        <div>
          <div class="text-sm" style="color: var(--color-text-secondary)">Matches</div>
          <div class="text-2xl font-bold">22</div>
        </div>
      </div>
    </div>
  </div>
</div>
```

### Form with Validation

```html
<form class="card">
  <div class="card-header">
    <h3 class="card-title">Add Player</h3>
  </div>
  <div class="card-body">
    <div class="form-group">
      <label class="form-label" for="name">Player Name</label>
      <input type="text" id="name" class="form-input error" required>
      <span class="form-error">Name is required</span>
    </div>

    <div class="form-group">
      <label class="form-label" for="position">Position</label>
      <select id="position" class="form-select" required>
        <option value="">Select position</option>
        <option>Forward</option>
        <option>Midfielder</option>
        <option>Defender</option>
        <option>Goalkeeper</option>
      </select>
    </div>
  </div>
  <div class="card-footer">
    <button type="button" class="btn btn-ghost">Cancel</button>
    <button type="submit" class="btn btn-primary">Add Player</button>
  </div>
</form>
```

## Migration Guide

### Migrating from Bootstrap

```html
<!-- Bootstrap -->
<button class="btn btn-primary">Button</button>
<div class="card">
  <div class="card-body">Content</div>
</div>

<!-- Sports Design System (same structure!) -->
<button class="btn btn-primary">Button</button>
<div class="card">
  <div class="card-body">Content</div>
</div>
```

Many component names are similar, but check the documentation for exact class names.

### Migrating from Tailwind

Map Tailwind utilities to design system classes:

```html
<!-- Tailwind -->
<div class="flex items-center justify-between gap-4 p-4">

<!-- Sports Design System -->
<div class="flex items-center justify-between gap-md p-md">
```

For more complex Tailwind compositions, use component classes instead.

### Migrating Custom CSS

Replace hardcoded values with design tokens:

```css
/* Before */
.my-component {
  padding: 16px;
  border-radius: 8px;
  color: #333;
  background: #fff;
}

/* After */
.my-component {
  padding: var(--space-md);
  border-radius: var(--radius-md);
  color: var(--color-text-primary);
  background: var(--color-background);
}
```

## Performance Tips

1. **Load only what you need**: If you don't need theme switching, skip the JS file
2. **Combine CSS files**: Merge tokens.css, themes.css, and components.css for production
3. **Minify for production**: Use a build tool to minify CSS and JS
4. **Cache assets**: Set appropriate cache headers for CSS/JS files
5. **Use CDN**: Consider hosting fonts on a CDN

## Troubleshooting

### Themes not switching

- Ensure `theme-switcher.js` is loaded
- Check browser console for errors
- Verify localStorage is enabled

### Styles not applying

- Check CSS file paths are correct
- Ensure CSS files are loaded in the correct order (tokens → themes → components)
- Verify no CSS conflicts with existing styles

### Colors look wrong

- Make sure you're using the correct CSS custom properties
- Check that the theme is applied (`data-theme` attribute on `<html>`)
- Verify no hardcoded colors are overriding theme colors

## Support

For issues, questions, or contributions, please refer to the main documentation in `docs/README.md`.
