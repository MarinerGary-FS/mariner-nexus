# EA-05 Graphics Architecture Evaluation

## Decision

Use **semantic DOM + advanced SVG + CSS spatial composition**. Existing repository capabilities are sufficient; EA-05 does not require a new dependency or an approval pause.

## Comparison

| Option | Communication and impact | Access and fallback | Runtime / maintenance | Decision |
| --- | --- | --- | --- | --- |
| DOM + basic SVG | Strong semantics, but the current boxes and straight lines cannot carry the required crescendo alone | Excellent | Lowest | Insufficient without amplification |
| DOM + advanced SVG + CSS depth | Curved relationship paths, convergence geometry, spatial planes, and topology-specific compositions materially clarify reorganization | Excellent; SVG remains hidden and DOM remains authoritative | Low, deterministic, current stack only | **Selected** |
| Canvas / WebGL / Three.js | Highest raw spatial freedom, but does not materially improve the four-objective explanation over advanced SVG for this bounded graph | Requires a parallel semantic tree and capable fallback | Higher bundle/runtime/QA cost; new dependency likely | Rejected for EA-05 |

## Why 3D is not justified

The intended effect is architectural reconfiguration, not free navigation through a volumetric scene. Ten bounded nodes, named relationships, and four known topologies can be expressed more precisely with DOM controls and scalable vector paths. CSS perspective supplies perceptual depth without making comprehension or accessibility depend on a renderer. WebGL would increase failure modes, battery/GPU work, responsive complexity, and duplicated semantic maintenance without solving a demonstrated limitation.

## Reconstruction architecture

- HTML buttons and ordered flows own every label, selection, relationship, and outcome.
- One decorative SVG layer draws objective-specific cubic paths, active connection signals, convergence planes, and the Mariner identity axis.
- Stable DOM nodes move through typed x/y/depth coordinates; node priority controls scale and surface authority.
- A small local React controller manages deliberate selection, rapid-switch cancellation, and polite state announcements.
- Mobile replaces the spatial field with an independently composed vertical sequence while retaining the same data and controls.
- A complete static four-objective fallback remains server-rendered when JavaScript is unavailable.

## Performance boundary

No package, image, canvas, shader, animation loop, layout measurement, or new request is introduced. Motion is transform/opacity/path styling only and stops after the transition. The graphics layer is non-blocking and non-authoritative.

