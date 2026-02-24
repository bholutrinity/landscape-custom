# Project Setup Guide

## Overview
This is a production-ready Bootstrap 5 + SCSS website project with a scalable architecture.

## Technologies Used
- **HTML5**: Semantic markup
- **Bootstrap 5**: Responsive framework via CDN
- **SCSS/Sass**: Custom styling with modular organization
- **JavaScript**: Vanilla JS for interactivity

## Folder Structure

```
landscape/
├── src/
│   ├── html/
│   │   └── index.html          # Main HTML file
│   ├── scss/
│   │   ├── base/
│   │   │   ├── _variables.scss # Colors, fonts, spacing
│   │   │   ├── _mixins.scss    # Reusable SCSS mixins
│   │   │   ├── _reset.scss     # Base element resets
│   │   │   ├── _typography.scss # Heading and text styles
│   │   │   └── _utilities.scss  # Utility classes
│   │   ├── layout/
│   │   │   ├── _header.scss    # Navigation header
│   │   │   ├── _footer.scss    # Footer layout
│   │   │   ├── _grid.scss      # Grid extensions
│   │   │   └── _sections.scss  # Section components
│   │   ├── components/
│   │   │   ├── _buttons.scss   # Button styles
│   │   │   ├── _cards.scss     # Card styles
│   │   │   ├── _forms.scss     # Form elements
│   │   │   └── _modals.scss    # Modal dialogs
│   │   ├── pages/
│   │   │   └── _home.scss      # Home page styles
│   │   ├── vendors/
│   │   │   └── _bootstrap.scss # Bootstrap overrides only
│   │   └── main.scss           # Main entry point
│   ├── js/
│   │   └── main.js             # Custom JavaScript
│   └── assets/
│       ├── images/             # Image files
│       ├── icons/              # Icon files
│       └── fonts/              # Custom fonts
└── dist/
    ├── css/
    │   └── main.css            # Compiled CSS output
    └── js/
        └── main.js             # Compiled JS output
```

## Getting Started

### 1. SCSS Compilation
You need a SCSS compiler to generate CSS from SCSS files.

**Option A: Using Node Sass**
```bash
npm install -g sass
sass src/scss/main.scss dist/css/main.css

# Watch mode for development
sass --watch src/scss:dist/css
```

**Option B: Using VS Code Extension**
Install "Live Sass Compiler" extension and use the watch feature.

**Option C: Using Command Line Tools**
```bash
npx sass src/scss/main.scss dist/css/main.css --watch
```

### 2. File Structure
All HTML files go in `src/html/`
All SCSS files organized in `src/scss/` by category
Compiled CSS outputs to `dist/css/main.css`

### 3. Creating New Pages
1. Create new HTML file in `src/html/`
2. Create corresponding SCSS file in `src/scss/pages/` if needed
3. Import in `main.scss` if page-specific styles are added

### 4. Creating New Components
1. Create component SCSS file in `src/scss/components/`
2. Import in `main.scss`
3. Use consistent naming: `_component-name.scss`

## Styling Guidelines

### Variable Usage
All colors, sizes, and spacing use variables defined in `_variables.scss`:
- Never hardcode values
- Update values in one place to affect entire project

### Mixins
Use provided mixins for:
- Media queries: `@include breakpoint(md)`
- Flexbox: `@include flex-center`
- Transitions: `@include transition`
- Button variants: `@include button-variant()`

### Bootstrap Integration
- Bootstrap CSS loaded via CDN in HTML
- Custom SCSS sits on top of Bootstrap
- Only override Bootstrap in `vendors/_bootstrap.scss`
- Extend Bootstrap classes with custom classes

### Mobile-First Approach
- Write base (mobile) styles first
- Use breakpoint mixin for larger screens
- Example:
```scss
.element {
    font-size: 1rem;
    
    @include breakpoint(md) {
        font-size: 1.25rem;
    }
}
```

## Breakpoints
- `xs`: 0px (default)
- `sm`: 576px
- `md`: 768px
- `lg`: 992px
- `xl`: 1200px
- `2xl`: 1400px

## Color System
Primary colors are defined in `_variables.scss`:
- Primary: Blue
- Secondary: Gray
- Success: Green
- Danger: Red
- Warning: Yellow
- Info: Cyan

## Best Practices

1. **No Inline Styles**: All styling via CSS classes
2. **DRY Principle**: Use variables and mixins, don't repeat code
3. **Single Responsibility**: One purpose per file/component
4. **Naming Conventions**: Use kebab-case for classes
5. **Nesting Limit**: Keep nesting to 3-4 levels maximum
6. **Comments**: Add comments for complex logic only
7. **Performance**: Minimize selectors, avoid over-nesting

## Adding Custom Fonts

1. Place font files in `src/assets/fonts/`
2. Create font-face rules in `base/_typography.scss`:
```scss
@font-face {
    font-family: 'CustomFont';
    src: url('../../assets/fonts/custom.woff2') format('woff2');
    font-weight: normal;
    font-style: normal;
}
```

## Adding Images
Place images in `src/assets/images/` and reference in HTML:
```html
<img src="../assets/images/hero.jpg" alt="Description">
```

## Production Ready
This setup is ready for production deployment:
- Minify CSS for production
- Optimize images before deployment
- Use CDN for Bootstrap and jQuery
- Enable gzip compression on server
- Implement caching strategies

## Common Tasks

### Update Primary Color
Edit `src/scss/base/_variables.scss`:
```scss
$primary: #your-color;
```

### Add New Breakpoint
Add to `_variables.scss`:
```scss
@media (min-width: 1600px) {
    // Styles for 1600px+
}
```

### Create New Button Variant
Add to `src/scss/components/_buttons.scss`:
```scss
.btn-custom {
    @include button-variant($bg-color, $border-color, $text-color);
}
```

## Troubleshooting

**CSS not updating?**
- Check SCSS compilation is running
- Clear browser cache (Ctrl+Shift+Delete)
- Verify file paths are correct

**Bootstrap styles not applying?**
- Confirm Bootstrap CSS is loaded in HTML
- Check custom SCSS doesn't have conflicting rules
- Verify specificity of selectors

**Responsive design not working?**
- Check viewport meta tag is present in HTML
- Use breakpoint mixin correctly
- Test in browser dev tools device emulation

## Support Resources
- [Bootstrap Documentation](https://getbootstrap.com/docs/5.0/)
- [Sass Documentation](https://sass-lang.com/documentation)
- [CSS Tricks](https://css-tricks.com/)
- [MDN Web Docs](https://developer.mozilla.org/)
