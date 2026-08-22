const capabilityGroups = [
  { name: "Capture", items: "Forms · Content · Registration" },
  { name: "Connect", items: "Scheduling · Payments · Scoped APIs" },
  { name: "Understand", items: "Analytics · Structured records" },
  { name: "Operate", items: "Notifications · Scoped workflow automation" },
];

export function CapabilitySystemsMap() {
  return (
    <details className="mn-capability-systems-map">
      <summary><span>Explore the connected systems model</span><span aria-hidden="true">+</span></summary>
      <div>
        <p>Possible relationships are selected around the organization and objective. They are not a fixed package.</p>
        <ol>
          {capabilityGroups.map((group, index) => <li key={group.name}><span>0{index + 1}</span><strong>{group.name}</strong><p>{group.items}</p></li>)}
        </ol>
      </div>
    </details>
  );
}
