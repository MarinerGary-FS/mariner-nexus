#!/usr/bin/env node
import path from "node:path";
import { checkArtifacts, loadKernel, writeArtifacts } from "./io.mjs";
import { validateKernel } from "./validate.mjs";

const [, , command, input = "."] = process.argv;
if (!["validate", "generate", "check-generated"].includes(command)) {
  console.error("Usage: node tools/wds/cli.mjs <validate|generate|check-generated> <project-directory>");
  process.exit(2);
}

try {
  const directory = path.resolve(input);
  const kernel = await loadKernel(directory);
  const result = validateKernel(kernel);
  if (!result.valid) {
    for (const item of result.errors) console.error(`[${item.code}] ${item.message}`);
    process.exit(1);
  }
  if (command === "generate") await writeArtifacts(directory, kernel);
  if (command === "check-generated" && !(await checkArtifacts(directory, kernel))) {
    console.error("[GENERATED_DRIFT] Derived artifacts do not match canonical YAML.");
    process.exit(1);
  }
  console.log(`WDS ${command}: PASS (${kernel.project.identity.projectId})`);
} catch (caught) {
  console.error(`[KERNEL_IO] ${caught instanceof Error ? caught.message : String(caught)}`);
  process.exit(1);
}
