# Mariner Nexus — Build System Instructions

## Project Overview
Mariner Nexus is a high-end digital experience platform and strategic execution brand.

The site must communicate:
- authority
- systems intelligence
- premium execution
- conversion readiness

It should not feel like a generic agency site.
It should feel like a controlled, cinematic, high-trust experience built for serious operators, brands, founders, and organizations.

---

## Core Outcome
A visitor should quickly understand:

- this company is different
- this feels expensive
- these people understand systems
- these builds are not just websites
- I want to know more
- I want this level of execution for my business

---

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui where useful
- Vercel deployment target

Use scalable, production-minded patterns.
Favor composable components, maintainable architecture, and performance-aware implementation.

---

## Design Influence
Take inspiration from the polish and restraint of brands like:
- Vercel
- Stripe
- Linear
- Arc
- premium AI infrastructure companies

For immersive and cinematic interaction references, take inspiration from:
- Active Theory
- RESN
- Apple product storytelling

Do not copy any brand directly.

---

## Experience Positioning
The experience should feel like a fusion of:

- executive clarity
- premium product design
- cinematic digital storytelling
- strategic systems thinking

The first impression should be:
- executive
- mysterious
- premium

The second impression should be:
- highly capable systems company

The third impression should be:
- clear offer
- clear proof
- clear next step

---

## Visual Direction
- Dark-first premium interface with light-mode support where appropriate
- Strong contrast
- Glass / metal / blue energy cues inspired by the Mariner Nexus logo system
- Motion should feel controlled, intelligent, and expensive
- Avoid gimmicky cyberpunk effects, overloaded gradients, or cheesy AI visuals
- Use breathing room, scale, typography, and compositional discipline to create perceived value

### Important Visual Rules
- No generic stock AI imagery
- No cliché robots, circuits, or floating dashboards everywhere
- No overcrowded layouts
- No template-like agency sections without purpose
- No visual noise that weakens trust

---

## Logo System Usage
Use these rules:

- Full 3D logo for hero and major brand moments
- Simplified icon for interface areas and mobile contexts
- Micro mark for favicon and very small uses
- Respect minimum sizes and spacing from the design system

The logo system should feel premium and restrained, never overused.

---

## Core Pages
- Home
- Case Studies
- Individual Case Study Pages
- Services
- About
- Contact / Book

Additional supporting flows may include:
- embedded scheduling
- selective lead capture
- service-specific inquiry flows
- future lead qualification paths

---

## Conversion Goals

### Primary CTA
- Book a Strategy Call

### Secondary CTA
- View Case Studies

### Conversion Intent
Every major page should move the user toward one of the following:
- belief
- trust
- curiosity
- qualification
- action

Do not treat conversion as only button placement.
Treat conversion as the cumulative result of narrative, positioning, clarity, and friction reduction.

---

## CRM / Automation Goal
The site must be architected to connect with:
- GoHighLevel forms or webhook endpoints
- Cal.com embedded scheduling
- future email/SMS automation
- future lead scoring / segmentation

Structure the experience so future automation can be integrated cleanly without redesigning the site architecture.

---

## Homepage Intent
The homepage should function as:

1. a premium first impression
2. a positioning engine
3. a proof engine
4. a routing mechanism into outcomes, services, and case studies
5. a high-end conversion path

The homepage should not feel like a stack of standard sections.
It should feel like a guided experience with intentional pacing.

---

## Case Study Intent
Case studies are not portfolio entries.
They are cinematic, strategic walkthroughs of business transformation.

Each case study should communicate:
- the problem
- the strategic thinking
- the system that was built
- the outcome
- the perceived value of working with Mariner Nexus

Users should stay inside the Mariner Nexus ecosystem first.
External site links should be optional validation at the end, not the primary experience.

---

## Writing Style
- crisp
- high-trust
- strategic
- not fluffy
- not overhyped
- short paragraphs
- strong headlines
- premium tone

### Prefer
- strong declarative statements
- business-focused language
- language that emphasizes outcomes, systems, and execution
- concise language with high signal

### Avoid
- buzzwords
- filler language
- generic agency copy
- over-explaining
- hype without substance

### Example
❌ “We created a beautiful website”

✅ “We engineered a system designed to increase trust, clarify the offer, and improve conversion.”

---

## Cognitive Skill Stack

Apply these skills in order of priority across the project.

### 1. Cinematic Storytelling
- Structure major pages as narrative experiences
- Make each section feel like a scene
- Use pacing, sequencing, and reveal logic intentionally
- Avoid generic stacked-block design

### 2. First-Principles Thinking
- Break every page, section, and component down to its core purpose
- Ask: what is this doing for clarity, trust, conversion, or perception?
- Remove anything that does not serve a meaningful role

### 3. Conversion Engineering
- Every section should move the user toward belief or action
- Use CTA hierarchy, trust cues, and friction reduction intentionally
- Design the site like a conversion system, not a brochure

### 4. Premium UI/UX Design Thinking
- Use high-discipline layouts
- Keep interfaces minimal, intentional, and readable
- Avoid visual clutter and template repetition

### 5. Systems Thinking
- Treat the site as an interconnected business system
- Ensure UX, messaging, automation intent, and page architecture support one another
- Design for future evolution, not just current presentation

### 6. Brand Positioning
- Present Mariner Nexus as a premium execution and systems partner
- Emphasize outcomes, intelligence, and authority
- Avoid sounding like a commodity web studio

### 7. Attention Engineering
- Control where the eye goes
- Use spacing, scale, contrast, hierarchy, and motion to guide attention
- Keep the experience easy to scan but difficult to ignore

### 8. Perception Design
- Make the site feel expensive, intentional, and differentiated
- Use polish, restraint, and compositional control
- Favor premium presentation over novelty

### 9. Performance Awareness
- Keep immersive experiences performant
- Prioritize load speed, device compatibility, and graceful degradation
- Never let effects overpower usability

### 10. Modular Build Thinking
- Build reusable patterns and scalable sections
- Avoid one-off components that make the system harder to maintain
- Ensure case studies and service pages can evolve without breaking the design language

---

## Performance Standards
- Prioritize fast initial load
- Use static hero fallback image before advanced animation loads
- Animate only where it adds value
- Avoid excessive GPU-heavy effects on mobile
- Use Intersection Observer or equivalent for any heavy animated elements

The experience should feel premium because it is controlled, not because it is overloaded.

---

## Advanced Experience Layer
The site should simulate the feeling of high-end immersive digital experiences using performant methods first.

Prefer:
- Framer Motion
- CSS transforms
- layered depth effects
- lighting, blur, scale, and parallax cues
- cinematic transitions
- restrained interaction design

Before:
- full-time heavy WebGL scenes everywhere

---

## WebGL Usage Guidelines
WebGL is allowed and encouraged selectively where it meaningfully increases immersion and perceived value.

### Primary Use Cases
- homepage hero
- isolated brand moments
- key cinematic moments inside case studies
- subtle transition environments between major scenes

### Acceptable Implementations
- Three.js / React Three Fiber
- lightweight canvas-based visual systems
- particle fields
- subtle spatial depth environments
- restrained reactive motion tied to cursor or scroll

### Rules
- it must never block page load
- it must always have a static or CSS fallback
- it must degrade gracefully on mobile and lower-performance devices
- it must not interfere with readability or CTA clarity
- it must be isolated to specific components or moments
- it must enhance perception, not become the product

### Do Not Use WebGL For
- forms
- dense text sections
- repeated UI modules
- every section of the site
- decorative overkill

### Principle
WebGL should be a premium accent layer, not the foundation of the whole experience.

---

## Layout Principles
- spacious
- grid-aware
- intentional
- layered
- narrative-driven

Each section must have a purpose.
Every page must feel composed, not assembled.

---

## Responsive Experience
### Desktop
- full cinematic experience
- layered motion and depth
- premium pacing

### Tablet
- reduce heavy effects
- preserve structure and narrative clarity

### Mobile
- prioritize readability, speed, and usability
- simplify motion
- use fallback versions of advanced visuals where needed

---

## Important Constraints
- No generic sections without purpose
- No decorative effects without business function
- No bloated interfaces
- No over-animated experiences that weaken clarity
- No stock-looking AI visuals
- No shallow futurism
- No design choices that reduce trust

---

## Success Criteria
A visitor should think:

- this company is different
- this feels expensive
- these people understand systems
- this is strategic, not superficial
- I want to know more
- I want to work with them

---

## Final Objective
The goal is to create a digital experience that makes users feel:

“This is high-end, intentional, and built by people who know how to engineer outcomes.”
