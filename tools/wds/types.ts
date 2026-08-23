export type DeliveryTier =
  | "ESSENTIAL_PRESENCE"
  | "STRATEGIC_EXPERIENCE"
  | "CONNECTED_EXPERIENCE"
  | "SIGNATURE_SYSTEM";
export type RiskLevel = "LOW" | "MODERATE" | "HIGH" | "CRITICAL";
export type Amplification = "A0" | "A1" | "A2" | "A3" | "A4";
export type TruthState =
  | "VERIFIED"
  | "CLIENT-PROVIDED"
  | "INFERRED"
  | "RECOMMENDED"
  | "REQUIRED INPUT"
  | "PROHIBITED CLAIM";
export type ApprovalClass = "A" | "B" | "C" | "D";
export type GateState =
  | "PASS"
  | "FAIL"
  | "PENDING"
  | "NOT_APPLICABLE"
  | "DOCUMENTED_NON_BLOCKER";

export interface NormalizedProjectKernel {
  project: Record<string, unknown>;
  truth: { records: Array<Record<string, unknown>> };
  authorizations: { records: Array<Record<string, unknown>> };
  approvals: { records: Array<Record<string, unknown>> };
  changes: { records: Array<Record<string, unknown>> };
  qa: Record<string, unknown>;
  integrations: { records: Array<Record<string, unknown>> };
}
