type MarinerThreadProps = {
  label: string;
  nodes?: number;
  tone?: "mariner" | "project";
};

export function MarinerThread({ label, nodes = 3, tone = "mariner" }: MarinerThreadProps) {
  return (
    <div aria-hidden="true" className="mn-mariner-thread" data-thread-tone={tone} title={label}>
      <span className="mn-thread-line" />
      {Array.from({ length: nodes }, (_, index) => <span className="mn-thread-node" key={index} />)}
    </div>
  );
}
