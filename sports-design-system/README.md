# 🏆 Sports Team Management Design System

A comprehensive, modern design system specifically crafted for amateur sports team management applications. Features 6 beautiful themes with an intuitive switching mechanism.

![Design System Preview](https://img.shields.io/badge/Status-Ready-success)
![Themes](https://img.shields.io/badge/Themes-6-blue)
![Components](https://img.shields.io/badge/Components-15%2B-brightgreen)

## ✨ Features

- 🎨 **6 Pre-built Themes** - Classic Sports, Ocean Blue, Sunset Orange, Night Mode, Purple Victory, Fire Red
- 🔄 **Easy Theme Switching** - JavaScript utility with automatic localStorage persistence
- 🧩 **Rich Component Library** - 15+ ready-to-use components
- ⚽ **Sports-Specific Components** - Team rosters, stat cards, and athletic styling
- 📱 **Fully Responsive** - Mobile-first design approach
- ♿ **Accessible** - WCAG 2.1 AA compliant
- 🚀 **Modern CSS** - CSS custom properties for maximum flexibility
- 📦 **Zero Dependencies** - Pure CSS and vanilla JavaScript

## 🚀 Quick Start

### 1. Copy the design system files to your project

```
your-project/
├── css/
│   ├── tokens.css
│   ├── themes.css
│   └── components.css
└── js/
    └── theme-switcher.js
```

### 2. Include in your HTML

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <!-- Design System CSS -->
  <link rel="stylesheet" href="css/tokens.css">
  <link rel="stylesheet" href="css/themes.css">
  <link rel="stylesheet" href="css/components.css">
</head>
<body>
  <!-- Your content -->

  <!-- Theme Switcher JS -->
  <script src="js/theme-switcher.js"></script>
</body>
</html>
```

### 3. Start building

```html
<!-- Add a button -->
<button class="btn btn-primary">Get Started</button>

<!-- Add a card -->
<div class="card">
  <div class="card-header">
    <h3 class="card-title">Welcome</h3>
  </div>
  <div class="card-body">
    Start managing your team!
  </div>
</div>

<!-- Add a theme switcher -->
<script>
  // Add theme buttons to your page
  const buttons = window.themeSwitcher.createThemeButtons();
  document.body.appendChild(buttons);
</script>
```

## 🎨 Available Themes

| Theme | Description | Best For |
|-------|-------------|----------|
| **Classic Sports** | Traditional green field colors | Soccer, football, field sports |
| **Ocean Blue** | Professional and clean | Swimming, corporate teams |
| **Sunset Orange** | Energetic and warm | Basketball, tennis |
| **Night Mode** | Dark theme for low-light | Evening games, late-night work |
| **Purple Victory** | Modern championship vibes | Unique, contemporary teams |
| **Fire Red** | Intense and passionate | Competitive, aggressive sports |

## 📦 What's Included

```
sports-design-system/
├── css/
│   ├── tokens.css          # Design tokens (spacing, typography, etc.)
│   ├── themes.css          # 6 color themes
│   └── components.css      # UI components
├── js/
│   └── theme-switcher.js   # Theme switching utility
├── examples/
│   └── demo.html           # Live demo with all components
└── docs/
    └── README.md           # Complete documentation
```

## 🧩 Components

- **Buttons** (4 variants, 3 sizes)
- **Cards** (with header, body, footer)
- **Forms** (inputs, selects, textareas)
- **Badges** (6 color variants)
- **Alerts** (success, warning, error, info)
- **Tables** (responsive, striped)
- **Navigation** (navbar with links)
- **Stat Cards** (sports-specific)
- **Roster Cards** (team member display)
- **Typography** (headings, paragraphs)
- **Utility Classes** (layout, spacing, alignment)

## 💡 Usage Examples

### Theme Switching

```javascript
// Apply a specific theme
window.themeSwitcher.applyTheme('ocean');

// Cycle through themes
window.themeSwitcher.nextTheme();

// Create a dropdown selector
const selector = window.themeSwitcher.createThemeSelector();
document.getElementById('header').appendChild(selector);

// Listen to theme changes
window.themeSwitcher.onThemeChange((detail) => {
  console.log('Theme changed to:', detail.theme);
});
```

### Stat Card (Sports-Specific)

```html
<div class="stat-card">
  <div class="stat-label">Total Players</div>
  <div class="stat-value">248</div>
  <div class="stat-change">↑ 12% from last month</div>
</div>
```

### Team Roster Card

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

## 📚 Documentation

For complete documentation, see [docs/README.md](docs/README.md)

Topics covered:
- Complete component reference
- All design tokens
- Theme customization guide
- JavaScript API reference
- Best practices
- Accessibility guidelines

## 🎯 Demo

Open `examples/demo.html` in your browser to see:
- All 6 themes in action
- Every component styled and interactive
- Live theme switching
- Responsive layouts

## 🎨 Design Tokens

The system uses CSS custom properties for easy customization:

```css
/* Spacing */
--space-xs to --space-3xl

/* Typography */
--text-xs to --text-5xl
--font-light to --font-extrabold

/* Colors */
--color-primary-50 to --color-primary-900
--color-secondary-50 to --color-secondary-900

/* Border Radius */
--radius-sm to --radius-full

/* Shadows */
--shadow-sm to --shadow-2xl
```

## 🔧 Customization

### Override Tokens

```css
:root {
  --space-md: 20px;  /* Change default spacing */
  --radius-lg: 16px; /* Make corners rounder */
}
```

### Create Custom Theme

```css
[data-theme="my-theme"] {
  --color-primary-500: #your-color;
  --color-secondary-500: #your-color;
  /* ... */
}
```

```javascript
themeSwitcher.themes.push({
  id: 'my-theme',
  name: 'My Custom Theme',
  description: 'Your description'
});
```

## 🌐 Browser Support

- ✅ Chrome (last 2 versions)
- ✅ Firefox (last 2 versions)
- ✅ Safari (last 2 versions)
- ✅ Edge (last 2 versions)

## 📝 Best Practices

1. Always use design tokens instead of hardcoded values
2. Test your application with all themes
3. Maintain WCAG AA color contrast ratios
4. Use semantic HTML elements
5. Leverage utility classes for layouts

## 🤝 Contributing

This is an open-source design system. Feel free to:
- Report issues
- Suggest new components
- Submit theme ideas
- Improve documentation

## 📄 License

Free to use for any project, personal or commercial.

## 🚀 Getting Started

1. **Download** the design system files
2. **Open** `examples/demo.html` to explore
3. **Read** `docs/README.md` for detailed documentation
4. **Integrate** into your sports team management app
5. **Customize** to match your brand

---

**Made with ❤️ for amateur sports teams everywhere**
