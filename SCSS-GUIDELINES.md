# SCSS Architecture Guidelines

## File Organization

The SCSS architecture follows a modular, scalable approach organized into folders by concern:

### 1. **Base Folder** - Foundation
Low-level styling that applies globally.

- `_variables.scss` - Colors, typography, spacing, breakpoints
- `_mixins.scss` - Reusable SCSS utilities
- `_reset.scss` - Element resets and normalization
- `_typography.scss` - Heading, text, and font styles
- `_utilities.scss` - Common utility classes

### 2. **Layout Folder** - Structure
Page structure and layout components.

- `_header.scss` - Navigation and header styles
- `_footer.scss` - Footer styles
- `_grid.scss` - Grid system extensions
- `_sections.scss` - Section containers and themes

### 3. **Components Folder** - Reusable UI
Self-contained, reusable components that don't depend on page context.

- `_buttons.scss` - All button styles and variants
- `_cards.scss` - Card components
- `_forms.scss` - Form inputs, labels, validation
- `_modals.scss` - Modal dialogs and overlays

### 4. **Pages Folder** - Page-Specific
Styles unique to specific pages that don't belong in components.

- `_home.scss` - Home page unique styles
- `_contact.scss` - Contact page styles
- `_services.scss` - Services page styles

### 5. **Vendors Folder** - Third-Party
Overrides for third-party frameworks (Bootstrap only).

- `_bootstrap.scss` - Bootstrap customizations and overrides

## Naming Conventions

### Classes
Use kebab-case for all class names:
```scss
.btn-primary          // Good
.button-primary       // Avoid
.ButtonPrimary        // Avoid
```

### SCSS Variables
Use kebab-case in variable names:
```scss
$primary-color        // Good
$primaryColor         // Avoid
$primary_color        // Avoid
```

### SCSS Mixins
Use verb-based names:
```scss
@mixin flex-center {}
@mixin button-variant() {}
@mixin breakpoint() {}
```

### File Names
Use underscore prefix for partial files:
```
_buttons.scss         // Good
buttons.scss          // Avoid
```

## SCSS Best Practices

### 1. Variable Usage
Never hardcode values. Use variables for consistency.

**Good:**
```scss
.element {
    color: $primary;
    padding: $space-lg;
}
```

**Avoid:**
```scss
.element {
    color: #0d6efd;
    padding: 1.5rem;
}
```

### 2. Nesting Depth
Keep nesting to 3-4 levels maximum to maintain readability.

**Good:**
```scss
.card {
    .card-header {
        h5 {
            color: $dark;
        }
    }
}
```

**Avoid:**
```scss
.card {
    .card-header {
        .title-wrapper {
            h5 {
                span {
                    color: $dark;
                }
            }
        }
    }
}
```

### 3. Media Queries
Use mixins for media queries, not hardcoded breakpoints.

**Good:**
```scss
.element {
    font-size: 1rem;
    
    @include breakpoint(md) {
        font-size: 1.25rem;
    }
}
```

**Avoid:**
```scss
.element {
    font-size: 1rem;
}

@media (min-width: 768px) {
    .element {
        font-size: 1.25rem;
    }
}
```

### 4. Mobile-First Approach
Write base styles for mobile first, then enhance for larger screens.

**Good:**
```scss
.element {
    display: block;           // Mobile
    
    @include breakpoint(md) {
        display: flex;        // Tablet+
    }
}
```

**Avoid:**
```scss
@media (max-width: 767px) {
    .element {
        display: block;
    }
}
```

### 5. Use Mixins for Common Patterns
Create and use mixins to reduce code duplication.

**Good:**
```scss
.element {
    @include flex-center;
    @include transition;
}
```

**Avoid:**
```scss
.element {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s ease-in-out;
}
```

### 6. Component Modular Structure
Each component file should be self-contained.

**Good:**
```scss
// _buttons.scss
.btn { /* base button */ }
.btn-primary { /* variant */ }
.btn-secondary { /* variant */ }
.btn-lg { /* size */ }
```

**Avoid:**
```scss
// Split across multiple files
// Component folder: partial .btn styles
// Utilities folder: .btn-lg
// Other folder: .btn-primary
```

## Import Order in main.scss

Follow this specific order:
1. Variables & Functions
2. Mixins
3. Bootstrap Overrides
4. Reset & Normalize
5. Typography
6. Utilities
7. Layout Components
8. Reusable Components
9. Page-Specific Styles

This order ensures correct cascading and no conflicts.

## Creating New Components

### Step 1: Create SCSS File
Create `src/scss/components/_new-component.scss`

### Step 2: Write Component Styles
```scss
// ==========================================================================
// New Component
// ==========================================================================

.new-component {
    padding: $space-md;
    border-radius: $border-radius-base;
    
    &:hover {
        box-shadow: $shadow-md;
    }
}

.new-component-title {
    font-size: $font-size-lg;
    font-weight: $font-weight-bold;
}
```

### Step 3: Import in main.scss
Add to appropriate section:
```scss
@import 'components/new-component';
```

## Extending Bootstrap Components

Never modify Bootstrap source. Instead:

1. Use Bootstrap classes as base
2. Create custom classes for extensions
3. Put overrides in `vendors/_bootstrap.scss`

**Example:**
```scss
<!-- In HTML -->
<button class="btn btn-primary btn-custom">Button</button>

<!-- In _bootstrap.scss (overrides) -->
.btn {
    border-radius: $border-radius-base;
}

<!-- In _buttons.scss (extensions) -->
.btn-custom {
    text-transform: uppercase;
    letter-spacing: 0.05em;
}
```

## Color System

All colors should come from variables:

```scss
// Primary actions and highlights
$primary: #0d6efd;

// Secondary elements
$secondary: #6c757d;

// Status colors
$success: #198754;    // Success/positive
$danger: #dc3545;     // Error/negative
$warning: #ffc107;    // Warning/caution
$info: #0dcaf0;       // Information
```

## Typography Scale

Predefined font sizes for consistency:

```scss
$font-size-sm: 0.875rem;      // 14px
$font-size-base: 1rem;        // 16px (body)
$font-size-lg: 1.25rem;       // 20px
$font-size-xl: 1.5rem;        // 24px
$font-size-2xl: 2rem;         // 32px
```

## Spacing Scale

Consistent spacing for layout:

```scss
$space-xs: 0.25rem;   // 4px
$space-sm: 0.5rem;    // 8px
$space-md: 1rem;      // 16px (base unit)
$space-lg: 1.5rem;    // 24px
$space-xl: 2rem;      // 32px
$space-2xl: 3rem;     // 48px
```

## Common Mixins Reference

```scss
// Responsive breakpoint
@include breakpoint(md) { /* styles */ }

// Flexbox centered
@include flex-center;

// Flexbox space-between
@include flex-between;

// Text truncation
@include truncate;

// Line clamp (2-3 lines)
@include line-clamp(2);

// Smooth transitions
@include transition;

// Background cover
@include bg-cover;

// Button variant
@include button-variant($bg, $border, $color);

// Input focus state
@include input-focus;
```

## Performance Tips

1. **Avoid Deep Nesting** - Improves CSS specificity and file size
2. **Use Variables** - Makes file size smaller after compilation
3. **Minimize Commenting** - Remove comments before production
4. **Compress Output** - Use `--style=compressed` for production builds
5. **Don't Duplicate Styles** - Use mixins and extends to reuse code
6. **Organize Logically** - Improves maintainability and navigation

## Compilation

### Development Mode
```bash
sass --watch src/scss:dist/css
```

### Production Mode
```bash
sass src/scss/main.scss dist/css/main.css --style=compressed
```

## Troubleshooting

**Colors not applying?**
- Check variable is defined in `_variables.scss`
- Verify import order in `main.scss`
- Check CSS specificity isn't being overridden

**Styles not updating?**
- Ensure SCSS watcher is running
- Clear browser cache
- Check for compilation errors

**File too large?**
- Review nesting depth
- Check for duplicate code
- Consider splitting large component files

## Resources

- [Sass Official Documentation](https://sass-lang.com/)
- [Sass Guidelines](https://sass-guidelin.es/)
- [SMACSS Methodology](https://smacss.com/)
- [CSS Architecture](https://www.smashingmagazine.com/2011/12/an-introduction-to-object-oriented-css-oocss/)
