#!/usr/bin/env node
import path from "node:path";
import { checkBootstrap, compileBootstrap } from "./bootstrap.mjs";

const [, , command, source, target] = process.argv;
if (!["bootstrap", "check"].includes(command) || !source || !target) {
  console.error("Usage: node tools/wds/bootstrap-cli.mjs <bootstrap|check> <validated-project-directory> <target-directory>");
  process.exit(2);
}

try {
  if (command === "bootstrap") {
    const result = await compileBootstrap(path.resolve(source), path.resolve(target));
    console.log(`WDS bootstrap: PASS (${result.kernel.project.identity.projectId})`);
    console.log(`Created: ${result.created.length}; regenerated: ${result.regenerated.length}; preserved: ${result.preserved.length}`);
    console.log(`Required Input: ${Object.values(result.requiredInput).flat().length}`);
    console.log(`Protected actions: ${result.protectedActions.length}`);
  } else {
    const result = await checkBootstrap(path.resolve(source), path.resolve(target));
    if (!result.valid) {
      for (const item of result.errors) console.error(`[BOOTSTRAP_DRIFT] ${item}`);
      process.exit(1);
    }
    console.log("WDS bootstrap drift: PASS");
  }
} catch (caught) {
  console.error(caught instanceof Error ? caught.message : String(caught));
  process.exit(1);
}
