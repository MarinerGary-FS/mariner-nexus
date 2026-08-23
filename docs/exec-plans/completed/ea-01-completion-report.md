# Experience Amplification 01 — Completion Report

## Status

Approved by Gary. Complete and ready for independent archival commit. No production deployment or Experience Amplification 02 implementation is included in this phase.

## Outcome

The Work middle act now performs a real client takeover. Mariner introduces the record and remains the trusted shell; Undugu progressively changes the internal canvas through typography, spacing, composition, media dominance, surfaces, motion character, borders, CTA shape, alignment, hierarchy, and density. The experience reaches full Undugu authority through the proof and transformation sequence, then stages a controlled release into the unchanged Mariner continuation.

## Architecture

- `ProjectExperienceProfile` is a typed project-level contract, separate from palette identity.
- The profile controls display character, weight/tracking, section rhythm, radius, CTA geometry, media dominance, timing, and intensity.
- `ProjectIdentityBoundary` exposes six deterministic states: `mariner`, `introduction`, `influence`, `takeover`, `release`, and `return`.
- One Intersection Observer limits measurement to the relevant boundary; passive scroll/resize listeners schedule one animation-frame measurement.
- The server-rendered record remains complete and strongly client-specific without JavaScript. State changes enhance the handoff; they do not reveal required content.
- The system is reusable without assuming projects share preset style categories. A future authorized project must author its own profile.

## Undugu expression

- Source Serif 4 becomes the expressive display voice only inside Undugu; Geist Sans retains body and interface authority.
- The existing real Undugu desktop, tablet, mobile, and card captures become dominant environmental media rather than framed portfolio thumbnails.
- Deep purple, warm off-white, and soft lavender organize the client canvas; the approved Undugu palette is unchanged.
- Editorial asymmetry, enlarged identity type, rounded gathering-like surfaces, stepped content placement, and centered transformation language establish a client-native rhythm.
- Work entry and live-project actions become restrained pill invitations appropriate to Undugu. Global Mariner actions and focus remain unchanged.

## Journey

1. **Corporate / Mariner:** header, route context, Work introduction, and continuation retain the production system.
2. **Introduction:** the client boundary appears with a moderated Undugu surface and serif voice.
3. **Influence:** client structure, signal, image dominance, and spacing gain authority.
4. **Takeover:** the record canvas becomes fully Undugu through its proof, strategy, experience, and systems sequence.
5. **Release:** the live-experience surface lightens and reduces client pressure.
6. **Return:** the boundary yields into the unchanged Mariner continuation and global CTA system.

## Responsive behavior

- **Desktop 1440:** wide editorial splits, dominant media, asymmetric story fields, and deep transformation scale.
- **Tablet 1024:** the same identity with intentional single-span regrouping and preserved media authority.
- **Mobile 390×844:** direct vertical rhythm, full available image dominance, large but controlled serif type, touch-safe actions, no horizontal overflow, and an explicit release/return.
- **Reduced motion:** transition durations collapse and scale interpolation is removed; identity, hierarchy, content, and all six logical states remain intact.

## Accessibility and progressive enhancement

- Semantic heading, list, figure, link, and article structure is unchanged.
- The global 2px Mineral Teal focus outline/4px offset remains authoritative and is not masked by client surfaces.
- Text/background pairings use the already approved project identity tokens; no information depends on color alone.
- Client media retains approved descriptive alternative text and known dimensions.
- Static HTML includes the complete transformation record. Motion is neither required for meaning nor continuously animated.
- Automated checks found zero horizontal overflow at 1440, 1024, and 390 widths and no browser runtime errors.

## Performance impact

- No dependency, font request, media file, image variant, data request, or route was added.
- Existing Source Serif 4 infrastructure is reused; font payload impact is zero.
- Existing authorized Undugu assets remain 880 KB total on disk; media payload impact is zero.
- The opening/LCP image asset, `priority`, dimensions, and responsive `sizes` are unchanged; explicit eager loading now formalizes the existing early-request intent and clears the Next.js 16 LCP advisory. LCP asset-weight impact is zero.
- Global CSS gzip changed from 16,114 to 17,731 bytes: **+1,617 bytes gzip**.
- Takeover controller source gzip changed from 964 to 1,219 bytes: **+255 bytes gzip**.
- State motion is event/scroll-bounded CSS transform, color, and shadow interpolation. There is no timer loop, canvas, SVG field, WebGL, or third-party runtime.

## Validation

Passed:

```text
npm run typegen
npm run typecheck
npm run lint
npm test                 12/12
npm run build            19 pages; /work/undugu statically generated
npm audit --audit-level=high
git diff --check
```

Automated Chromium review passed Introduction, Influence, Takeover, Release, and Return states; responsive presentation at 1440×900, 1024×900, and 390×844; reduced motion; zero horizontal overflow; static content structure; and browser console/runtime inspection.

## Review evidence

The evidence set is in `docs/exec-plans/review-assets/ea-01/` and includes:

- Work desktop Mariner and full client-pressure states;
- Work mobile client-pressure state;
- Undugu desktop opening, influence, takeover, deepest client state, release, and return;
- Undugu tablet takeover and release;
- Undugu mobile opening, takeover, deepest state, release, and return;
- desktop reduced-motion state;
- `undugu-takeover-scroll.mov`, an eight-second local review recording of the complete progressive takeover and return journey;
- `before-after.md`, direct Phase 04A versus EA-01 comparisons.

## Files changed

- `content/projects/types.ts`
- `content/projects/undugu.ts`
- `components/work/ProjectIdentityBoundary.tsx`
- `app/work/page.tsx`
- `app/work/[project]/page.tsx`
- `app/globals.css`
- `docs/mariner-nexus-redesign/decisions.md`
- EA-01 plan, completion report, and review evidence

## Scope protection

Unchanged: global information architecture, routes, publication authorization, inquiry/Google Workspace/Resend systems, Nexus and Systems behavior, SEO, analytics, redirects, navigation, Vercel model, production configuration, and all unauthorized client records.

## Deviations

None.

## Recommendation

EA-01 is approved as the reusable client-takeover baseline. Experience Amplification 02 may begin only after this plan and report are archived, committed independently, pushed, and remote divergence is confirmed at `0/0`.

## Approved experience principles

- The client owns the canvas while Mariner Nexus owns the trusted frame.
- Client takeover alters design behavior, not merely color.
- Client identity gains visual authority as project depth increases.
- Client authority decays progressively during release rather than disappearing abruptly.
- The takeover is the first major escalation of the middle-act crescendo.
