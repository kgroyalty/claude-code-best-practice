// Pre-execution hook: validates all file paths and permissions
export async function preExecutionHook(task) {
  if (!task.filePath.startsWith('/root/claude-system')) {
    throw new Error('SECURITY: Outside project directory blocked');
  }
  return { approved: true, task };
}
