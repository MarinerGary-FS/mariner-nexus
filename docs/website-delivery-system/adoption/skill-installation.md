# Controlled Skill Installation

## Installed baseline

Install only owner-approved repository sources from `docs/website-delivery-system/skills/`. Standard global Skill discovery contains one active directory for each Skill; machine-specific absolute paths are not doctrine.

## Update procedure

1. Develop proposed source in the repository.
2. Validate frontmatter, references, policy scenarios, leakage, secrets, and portability.
3. Obtain owner approval for the exact source.
4. Snapshot the installed version and record SHA-256 hashes and inventory.
5. Verify the snapshot, then replace directories as one reversible operation.
6. Compare installed output byte-for-byte with approved source.
7. Start a fresh Codex session and verify discovery, versions, reference resolution, and precedence.
8. Run the bounded scenario smoke matrix.
9. Retain rollback material and record the installed version.

Do not edit globally installed copies ad hoc. If packaging requires a transformation, make it in reviewed repository source and document it before installation.

WDS-05 required one packaging correction before installation: Skill-specific version and compatibility keys were moved from unsupported top-level YAML fields into the supported `metadata` map. This added one structural frontmatter line to each 45-line WDS-04 entry source without expanding its 45-line instruction body or changing its orchestration doctrine. A second pre-pilot correction made `references.md` portable by replacing a repository-relative parent link with explicit project-root discovery. Both corrections were applied to repository source first, validated, then installed exactly.

## Helper and Kernel location

Option A is adopted: deterministic helpers remain project-local. Installed Skills locate the repository root, inspect `.wds/bootstrap-manifest.json`, validate project-local Kernel/bootstrap state, and use the project's generated operating artifacts. No Kernel data or WDS engine is duplicated globally.

## Session behavior

Skill discovery is session-bound. Installation verification therefore requires a fresh session; cached state in the installing session is not evidence of failure or success.
