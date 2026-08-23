# Compatibility

- Installed Skill version: `1.0.0`
- Compatible Kernel schema: `1.0.0`
- Compatible bootstrap: `1.0.0`

The manifest and normalized project ID must agree. Missing or mismatched versions produce **WDS STATE INVALID** and block WDS-dependent execution. Installed Skills discover state and deterministic helpers from the project repository; they do not carry a global Kernel or helper copy. WDS does not migrate versions automatically.
