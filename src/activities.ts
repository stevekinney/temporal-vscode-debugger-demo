import { Context } from '@temporalio/activity';

export async function notifyHumanForVerification(task: string): Promise<void> {
  Context.current().log.info(`🤖 Dear human, please verify that this is correct: ${task}`);
}

export async function runCreditReport(task: string): Promise<void> {
  Context.current().log.info(`🤖 Running a credit report… ${task}`);
}

export async function runBackgroundCheck(task: string): Promise<void> {
  Context.current().log.info(`🤖 Running a background check… ${task}`);
}

export async function snoopOnSocialMedia(task: string): Promise<void> {
  Context.current().log.info(`🤖 Checking out their Instagram feed… ${task}`);
}

export async function collectFeedback(): Promise<void> {
  Context.current().log.info('🤖 Dear human, how was your experience with this verification workflow?');
}
