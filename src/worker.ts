import { createRequire } from 'module';

import { Worker } from '@temporalio/worker';

import * as activities from './activities.js';

const require = createRequire(import.meta.url);
const workflowsPath = require.resolve('./workflows');
