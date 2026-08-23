# WDS State Detection

- **WDS MODE:** compatible manifest and normalized Kernel are present; drift/validation is acceptable.
- **PRE-KERNEL MODE:** no Kernel exists and the current authorized activity is legitimate intake/discovery.
- **LEGACY MODE:** repository has no WDS adoption signal; follow its authority without pretending WDS facts exist.
- **INVALID WDS STATE:** partial artifacts, missing normalized state/manifest, incompatible versions, invalid Kernel, or blocking drift.

Invalid state must report **WDS STATE INVALID**, identify the defect, blocked work, and safe unrelated work. It never silently becomes Legacy Mode. Skills do not regenerate bootstrap automatically; they invoke the check tooling when drift is suspected.
