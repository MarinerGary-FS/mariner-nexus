# Installed Skill Rollback

Rollback state is stored privately under `~/.codex/skill-rollbacks/<release-id>/` and is never committed. Each release package contains the original directory inventory, files, reference files, SHA-256 integrity record, and restoration instructions.

## Restore procedure

1. Identify the installed release and matching verified snapshot.
2. Record hashes of the version being displaced.
3. Move the current Skill directories into the rollback package; do not delete them.
4. Restore both original directories from the snapshot.
5. Compare restored files and hashes with the integrity record.
6. Start a fresh session and verify both restored Skills are discoverable.

## Return to the approved version

1. Retain the drill-restored former version.
2. Copy the exact approved repository source into the standard discovery directories.
3. Compare source and installed trees and hashes.
4. Start another fresh session and verify version, compatibility, routing, and precedence.

WDS-05 completed this entire cycle. Former Skills restored with their recorded hashes and legacy structure; the approved `1.0.0` Skills were then reinstalled and rediscovered successfully.
