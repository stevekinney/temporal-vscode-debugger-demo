import { startDebugReplayer } from '@temporalio/worker';
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

startDebugReplayer({
  workflowsPath: require.resolve('./workflows'),
});
