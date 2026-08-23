# Generated and Human-Owned Files

Each Markdown artifact declares ownership in its first line; the manifest records ownership and initial/current hashes.

- `GENERATED`: canonical view derived from Kernel data. Safe to regenerate only while its current hash matches the preceding manifest. Manual modification causes `OWNERSHIP_CONFLICT`.
- `HUMAN-AUTHORED`: created once as a neutral working record and never overwritten.
- `GENERATED-THEN-HUMAN`: seeded once, then ownership transfers to the project team; reruns preserve it.

Generated register views never replace YAML authority. Human-owned decisions and transferred execution/launch/rollback/Content Integrity records are deliberately protected.

Rerunning unchanged input preserves the initial generation timestamp and produces no content change. Changed canonical inputs may regenerate untouched generated views. The compiler never deletes unrecognized files.
