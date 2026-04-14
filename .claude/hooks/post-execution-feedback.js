// Post-execution hook: captures results for feedback loop
export async function postExecutionHook(result) {
  console.log(`[EXECUTION RESULT] Success: ${result.success}`);
  if (result.error) console.error(`[ERROR] ${result.error}`);
  return { logged: true, result };
}
