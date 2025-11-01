# Sports Team Management Design System

A comprehensive, sports-themed design system for managing amateur teams. Includes multiple color palettes and an easy-to-use theme switching mechanism.

## Features

- **6 Beautiful Themes**: Classic Sports, Ocean Blue, Sunset Orange, Night Mode, Purple Victory, and Fire Red
- **Easy Theme Switching**: JavaScript utility with localStorage persistence
- **Comprehensive Components**: Buttons, cards, forms, tables, badges, alerts, and more
- **Sports-Specific Components**: Team roster cards, stat cards, and athletic styling
- **Fully Responsive**: Mobile-first design approach
- **Accessible**: WCAG 2.1 compliant color contrasts
- **Modern CSS**: Uses CSS custom properties for easy customization

## Quick Start

### 1. Include the CSS files

```html
<!-- Core tokens -->
<link rel="stylesheet" href="css/tokens.css">

<!-- Theme colors -->
<link rel="stylesheet" href="css/themes.css">

<!-- Component styles -->
<link rel="stylesheet" href="css/components.css">
```

### 2. Include the theme switcher JavaScript

```html
<script src="js/theme-switcher.js"></script>
```

### 3. Start using components

```html
<button class="btn btn-primary">Click Me</button>

<div class="card">
  <div class="card-header">
    <h3 class="card-title">Team Stats</h3>
  </div>
  <div class="card-body">
    Your content here
  </div>
</div>
```

## Available Themes

### Classic Sports (default)
Traditional green field colors with athletic energy. Perfect for soccer, football, and field sports.

### Ocean Blue
Professional, clean, corporate sports aesthetic. Great for swimming, water polo, or modern corporate teams.

### Sunset Orange
Energetic, warm, competitive sports theme. Ideal for basketball, tennis, and high-energy sports.

### Night Mode
Dark theme optimized for low-light environments. Perfect for evening games or late-night team management.

### Purple Victory
Modern, unique championship vibes. Stand out with this contemporary palette.

### Fire Red
Intense, passionate, high-energy sports theme. Perfect for competitive, aggressive sports.

## Theme Switching

### Using JavaScript

```javascript
// The theme switcher is automatically initialized
const themeSwitcher = window.themeSwitcher;

// Apply a specific theme
themeSwitcher.applyTheme('ocean');

// Cycle to next theme
themeSwitcher.nextTheme();

// Get current theme
const current = themeSwitcher.getCurrentTheme();

// Get all available themes
const themes = themeSwitcher.getAvailableThemes();
```

### Creating a Theme Selector Dropdown

```javascript
// Create and append a dropdown selector
const selector = themeSwitcher.createThemeSelector({
  className: 'theme-selector',
  showLabel: true,
  labelText: 'Choose Theme:'
});

document.getElementById('container').appendChild(selector);
```

### Creating Theme Toggle Buttons

```javascript
// Create and append theme buttons
const buttons = themeSwitcher.createThemeButtons({
  className: 'theme-buttons',
  buttonClassName: 'theme-button',
  showDescription: true
});

document.getElementById('container').appendChild(buttons);
```

### Listening to Theme Changes

```javascript
themeSwitcher.onThemeChange((detail) => {
  console.log('New theme:', detail.theme);
  console.log('Theme info:', detail.themeInfo);
  // Update your app based on theme change
});
```

### Manual Theme Switching (HTML only)

```html
<!-- Change the data-theme attribute on the root element -->
<html data-theme="ocean">
```

## Design Tokens

### Spacing

```css
--space-xs: 4px
--space-sm: 8px
--space-md: 16px
--space-lg: 24px
--space-xl: 32px
--space-2xl: 48px
--space-3xl: 64px
```

### Typography

```css
/* Font Sizes */
--text-xs: 12px
--text-sm: 14px
--text-md: 16px
--text-lg: 18px
--text-xl: 20px
--text-2xl: 24px
--text-3xl: 30px
--text-4xl: 36px
--text-5xl: 48px

/* Font Weights */
--font-light: 300
--font-normal: 400
--font-medium: 500
--font-semibold: 600
--font-bold: 700
--font-extrabold: 800
```

### Border Radius

```css
--radius-sm: 4px
--radius-md: 8px
--radius-lg: 12px
--radius-xl: 16px
--radius-full: 9999px
```

### Shadows

```css
--shadow-sm: subtle shadow
--shadow-md: medium shadow
--shadow-lg: large shadow
--shadow-xl: extra large shadow
--shadow-2xl: dramatic shadow
```

## Components

### Buttons

```html
<!-- Variants -->
<button class="btn btn-primary">Primary</button>
<button class="btn btn-secondary">Secondary</button>
<button class="btn btn-outline">Outline</button>
<button class="btn btn-ghost">Ghost</button>

<!-- Sizes -->
<button class="btn btn-primary btn-sm">Small</button>
<button class="btn btn-primary">Default</button>
<button class="btn btn-primary btn-lg">Large</button>

<!-- States -->
<button class="btn btn-primary" disabled>Disabled</button>
```

### Cards

```html
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Card Title</h3>
    <p class="card-subtitle">Optional subtitle</p>
  </div>
  <div class="card-body">
    Card content goes here
  </div>
  <div class="card-footer">
    <button class="btn btn-primary">Action</button>
  </div>
</div>
```

### Stat Cards (Sports-Specific)

```html
<div class="stat-card">
  <div class="stat-label">Total Players</div>
  <div class="stat-value">248</div>
  <div class="stat-change">↑ 12% from last month</div>
</div>
```

### Team Roster Cards

```html
<div class="roster-card">
  <div class="roster-avatar">JD</div>
  <div class="roster-info">
    <div class="roster-name">John Doe</div>
    <div class="roster-position">Forward</div>
  </div>
  <div class="roster-number">#10</div>
</div>
```

### Forms

```html
<div class="form-group">
  <label class="form-label" for="input-id">Label</label>
  <input type="text" id="input-id" class="form-input" placeholder="Placeholder">
  <span class="form-help">Help text</span>
</div>

<div class="form-group">
  <label class="form-label" for="select-id">Select</label>
  <select id="select-id" class="form-select">
    <option>Option 1</option>
    <option>Option 2</option>
  </select>
</div>

<div class="form-group">
  <label class="form-label" for="textarea-id">Textarea</label>
  <textarea id="textarea-id" class="form-textarea"></textarea>
</div>
```

### Badges

```html
<span class="badge badge-primary">Primary</span>
<span class="badge badge-success">Success</span>
<span class="badge badge-warning">Warning</span>
<span class="badge badge-error">Error</span>
```

### Alerts

```html
<div class="alert alert-success">
  <div class="alert-title">Success!</div>
  <div>Your action was successful.</div>
</div>

<div class="alert alert-warning">
  <div class="alert-title">Warning</div>
  <div>Please review this information.</div>
</div>

<div class="alert alert-error">
  <div class="alert-title">Error</div>
  <div>Something went wrong.</div>
</div>

<div class="alert alert-info">
  <div class="alert-title">Info</div>
  <div>Here's some information.</div>
</div>
```

### Tables

```html
<div class="table-container">
  <table class="table">
    <thead>
      <tr>
        <th>Header 1</th>
        <th>Header 2</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Data 1</td>
        <td>Data 2</td>
      </tr>
    </tbody>
  </table>
</div>
```

### Navigation

```html
<nav class="navbar">
  <a href="#" class="navbar-brand">Brand</a>
  <ul class="navbar-menu">
    <li><a href="#" class="navbar-link active">Dashboard</a></li>
    <li><a href="#" class="navbar-link">Teams</a></li>
    <li><a href="#" class="navbar-link">Players</a></li>
  </ul>
</nav>
```

## Utility Classes

### Layout

```html
<div class="container">Centered container with max-width</div>

<div class="flex">Flexbox container</div>
<div class="flex flex-col">Flex column</div>
<div class="flex items-center">Center items vertically</div>
<div class="flex justify-between">Space between items</div>

<div class="grid grid-cols-2">2 column grid</div>
<div class="grid grid-cols-3">3 column grid</div>
<div class="grid grid-cols-4">4 column grid</div>
```

### Spacing

```html
<div class="mt-md">Margin top medium</div>
<div class="mb-lg">Margin bottom large</div>
<div class="p-md">Padding medium</div>

<div class="gap-sm">Gap small (for flex/grid)</div>
<div class="gap-md">Gap medium</div>
<div class="gap-lg">Gap large</div>
```

### Text Alignment

```html
<div class="text-left">Left aligned text</div>
<div class="text-center">Center aligned text</div>
<div class="text-right">Right aligned text</div>
```

## Customization

### Creating Custom Themes

You can create your own theme by defining color variables in a new data-theme selector:

```css
[data-theme="my-custom-theme"] {
  --color-primary-500: #your-color;
  --color-secondary-500: #your-color;
  /* ... define all color variables ... */
}
```

Then add your theme to the ThemeSwitcher:

```javascript
// Extend the themes array
themeSwitcher.themes.push({
  id: 'my-custom-theme',
  name: 'My Custom Theme',
  description: 'Your custom description'
});
```

### Overriding Design Tokens

You can override any design token by redefining it:

```css
:root {
  --space-md: 20px; /* Override default 16px */
  --radius-md: 12px; /* Override default 8px */
}
```

## Browser Support

- Chrome (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Edge (last 2 versions)

## Best Practices

1. **Always use design tokens** instead of hardcoded values
2. **Use semantic color variables** (--color-primary-500) rather than specific colors
3. **Test all themes** to ensure your custom components work across all palettes
4. **Maintain accessibility** - ensure proper color contrast ratios
5. **Use the component classes** as building blocks rather than creating custom styles

## License

This design system is open source and free to use for any project.

## Demo

Open `examples/demo.html` in your browser to see all components and themes in action.
