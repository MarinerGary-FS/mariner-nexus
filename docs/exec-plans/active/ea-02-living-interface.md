# Experience Amplification 02 — Living Interface

## Objective

Make a controlled fragment of the actual Undugu digital experience run inside the authorized transformation record. The work becomes semantic, responsive, interactive evidence rather than another screenshot.

## Selected fragment

Reconstruct the current production Undugu homepage hero:

- Undugu identity and navigation;
- “You have been carrying too much alone. Step into the room.”;
- the current supporting statement;
- real gathering photography;
- Experience the Movement and Support the Movement actions;
- desktop, tablet, and mobile relationships.

## Architecture

- `UnduguLivingExperience` is a project-specific Server Component owning content, imagery, layout, and containment.
- `UnduguExperienceHeader` is a bounded Client Component owning only the mobile menu state.
- Internal client-site destinations are explicit external links opening the real Undugu site in a new tab.
- The reconstructed interface does not own Mariner navigation, project identity, record content, Systems, Nexus, or acquisition.
- The existing opening screenshot remains the familiar static proof. The Experience-section screenshot selector is replaced, avoiding simultaneous redundant responsive screenshots.

## Asset provenance

Acquire the current production `/logos/undugu-logo-horizontal.png` and `/images/chop-it-up-full-room.jpg` from `undugu.org`, optimize locally, and remove runtime dependence on the external site. Record dimensions, optimization, and fidelity in the completion report.

## Boundaries

- No iframe, remote runtime/CSS/JS, screenshot hotspots, browser chrome, canvas, 3D, page builder, generic living-interface renderer, Systems deconstruction, Nexus change, or EA-03 responsive performance.
- No production deployment.

## Acceptance

- Engineering, Meaning, and Impact gates pass.
- Text is selectable DOM text; navigation and actions are semantic; responsive changes are true CSS composition changes.
- Mobile menu, keyboard focus, and external navigation behavior are deliberate and accessible.
- Static/server rendering is visually complete without JavaScript; reduced motion retains all capability.
- Performance deltas, duplication, LCP, asset provenance, fidelity, comparative evidence, and a short recording are documented.
