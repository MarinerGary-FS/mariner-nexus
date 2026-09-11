const capabilityGroups = [
  { name: "Input", statement: "Information enters.", items: "Forms · Documents · Media · Feeds · Human input" },
  { name: "Structure", statement: "Information becomes usable.", items: "Records · Taxonomies · Retrieval · Connected data" },
  { name: "Context", statement: "Relationships and provenance are preserved.", items: "Sources · History · Evidence · Operational state" },
  { name: "Intelligence", statement: "The system surfaces what matters.", items: "Interpretation · Decision support · Assisted workflows" },
  { name: "Action", statement: "Humans or approved workflows respond.", items: "Review · Notify · Route · Decide · Act" },
];

export function CapabilitySystemsMap() {
  return (
    <details className="mn-capability-systems-map">
      <summary><span>Follow information from input to useful action</span><span aria-hidden="true">+</span></summary>
      <div>
        <p>Intelligence is a layer within a real operation—not a fixed package and not a replacement for human judgment.</p>
        <ol>
          {capabilityGroups.map((group, index) => <li key={group.name}><span>0{index + 1}</span><strong>{group.name}</strong><p>{group.statement}</p><small>{group.items}</small></li>)}
        </ol>
      </div>
    </details>
  );
}
