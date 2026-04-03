# Mariner Nexus Design System
## Logo Usage
### Variants
- Full 3D logo: hero, about, major brand moments
- Simplified icon: nav, cards, feature markers, mobile contexts
- Micro mark: favicon, minimal system marks
- Light mode logo: documents, light surfaces, select sections

### Minimum Sizes
- Full 3D logo: 120px wide minimum
- Simplified icon: 32px minimum
- Micro mark: 16px minimum

### Clear Space
Use at least 50% of logo width as clear space around the mark.

## Motion Principles
Motion must feel:
- controlled
- intelligent
- premium
- slightly mysterious

Avoid:
- bouncy consumer-app motion
- flashy cyberpunk effects
- noisy transitions

### Motion Recommendations
- slow fades
- directional reveals
- soft parallax
- light pulsing
- subtle rotation only in premium brand moments

## Hero Animation Guidance
Use a static WebP or PNG logo fallback for initial render.
After load, optionally hydrate a premium animated layer using:
- CSS + blur/glow effects for light pulse
- video loop for hero background moment
- WebGL / Three.js only if performance remains strong

## Surfaces
- dark glass cards
- subtle borders
- soft glows beneath premium elements
- occasional polished metallic highlights

## Layout Principles
- spacious
- grid-based
- asymmetrical where helpful
- visually rich but not cluttered
- every section must have a reason to exist

## Responsive Logic
- Desktop: full lockup and layered hero experience
- Tablet: stacked lockups and slightly reduced motion
- Mobile: simplified icon in nav and lighter animation load

## Advanced Rendering Layer (Future-Ready)

The Mariner Nexus experience may incorporate WebGL or Three.js-based rendering for premium interactive elements.

Guidelines:
- Use WebGL selectively (hero sections or special components only)
- Never block initial page load with heavy rendering
- Always provide a static fallback (image or video)
- Prioritize performance over visual complexity

Potential use cases:
- Interactive logo (3D rotation, glow pulse)
- Background particle fields or light systems
- Depth-based scene transitions

Implementation options:
- React Three Fiber (Three.js for React)
- Lightweight canvas effects
- Video-based fallback for mobile
