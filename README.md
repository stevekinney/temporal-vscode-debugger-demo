# Developing Temporal Workflows with Visual Studio Code and the TypeScript SDK

Use our [Visual Studio Code extension][extension] to debug a running or completed Workflow Execution.

[blog]: https://temporal.io/blog/temporal-for-vs-code
[extension]: https://marketplace.visualstudio.com/items?itemName=temporal-technologies.temporalio

In this demonstration, we're going to:

1. Write a simple workflow using the TypeScript SDK.
2. Point out some quick tips when using ES Modules.
3. Take a look at replaying a workflow history using the [extension][extension].
4. Explore some of the new features of the UI.

### Running This Example

1. `temporal server start-dev` to start [Temporal Server](https://github.com/temporalio/cli/#installation).
1. `npm install` to install dependencies.
1. `npm start` to start the Worker and run the Workflow.

With the Worker running you can run `npm run start:workflow` to start another workflow.
