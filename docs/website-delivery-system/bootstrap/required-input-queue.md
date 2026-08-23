# Required Input Queue

Bootstrap consolidates unresolved obligations into one generated view:

- **Client Input Required:** canonical Truth records in `REQUIRED INPUT`.
- **Owner Input Required:** pending Owner-Protected approvals and authorizations.
- **Technical Input Required:** unresolved integration verification/environment information.

The queue is a view, not an editing surface. Resolution updates canonical YAML and evidence; regeneration then removes the resolved item. The compiler never answers questions or changes truth state itself.
