import { logger } from '../../logger';

let commitCount = 0;
let commitLimit = 0;

export function setCommitLimit(limit: number): void {
  commitLimit = limit;
}

export function incCommitCount(): void {
  commitCount += 1;
}

export function isCommitLimitReached(): boolean {
  return commitLimit > 0 && commitCount >= commitLimit;
}

export function resetAllLimits(): void {
  commitCount = 0;
  commitLimit = 0;
}
