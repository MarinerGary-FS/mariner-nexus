# Mariner Nexus — Build System Instructions

## Tech Stack
- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion
- shadcn/ui where useful
- Vercel deployment target

## Design Influence
Take inspiration from the polish and restraint of brands like Vercel, Stripe, Linear, Arc, and premium AI infrastructure companies.
Do not copy any brand directly.

## Visual Direction
- Dark-first premium interface with light-mode support where appropriate
- Strong contrast
- Glass / metal / blue energy cues inspired by the Mariner Nexus logo system
- Motion should feel controlled, intelligent, and expensive
- Avoid gimmicky cyberpunk effects, overloaded gradients, or cheesy AI visuals

## Logo System Usage
Use these rules:
- Full 3D logo for hero and major brand moments
- Simplified icon for interface areas and mobile contexts
- Micro mark for favicon and very small uses
- Respect minimum sizes and spacing from the design system

## Performance Standards
- Prioritize fast initial load
- Use static hero fallback image before advanced animation loads
- Animate only where it adds value
- Avoid excessive GPU-heavy effects on mobile
- Use Intersection Observer or equivalent for any heavy animated elements

## Core Pages
- Home
- Case Studies
- Individual Case Study Pages
- Services
- About
- Contact / Book

## Conversion Goals
Primary CTA:
- Book a Strategy Call

Secondary CTA:
- View Case Studies

## CRM / Automation Goal
The site must be architected to connect with:
- GoHighLevel forms or webhook endpoints
- Cal.com embedded scheduling
- future email/SMS automation
- future lead scoring / segmentation

## Homepage Intent
The homepage should feel like:
- first impression: executive, mysterious, premium
- second impression: highly capable systems company
- third impression: clear offer, clear proof, clear next step

## Writing Style
- crisp
- high-trust
- strategic
- not fluffy
- not overhyped
- short paragraphs
- strong headlines
- premium tone

## Important Constraints
- No generic stock AI imagery
- No cliché robots, circuits, or floating dashboards everywhere
- No overcrowded layouts
- No template-like agency sections without purpose

## Success Criteria
A visitor should think:
- this company is different
- this feels expensive
- these people understand systems
- I want to know more

## Advanced Experience Layer

The site should simulate the feeling of high-end WebGL experiences (like Active Theory) using performant methods first.

If advanced rendering is introduced:
- It must be isolated to specific components
- It must not degrade performance
- It must gracefully degrade on mobile

Prefer:
- Framer Motion
- CSS transforms
- layered depth effects

Before:
- full WebGL scenes
