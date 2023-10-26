import { Client } from '@temporalio/client';

import { humanVerificationWorkflow, verifySignal } from './workflows';
import { wait, randomId } from './utilities';

const client = new Client();

const handle = await client.workflow.start(humanVerificationWorkflow, {
  args: ['some-verification-id'],
  taskQueue: 'debugger-demo',
  workflowId: 'workflow-' + randomId(),
});

await wait(1000);

await handle.signal(verifySignal);
