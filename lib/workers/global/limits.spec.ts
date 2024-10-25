import {
  incCommitCount,
  isCommitLimitReached,
  resetAllLimits,
  setCommitLimit,
} from './limits';

describe('workers/global/limits', () => {
  beforeEach(() => {
    resetAllLimits();
  });

  beforeEach(() => {
    resetAllLimits();
  });

  it('increments limited value', () => {
    setCommitLimit(3);

    expect(isCommitLimitReached()).toBeFalse();

    incCommitCount();
    incCommitCount();
    expect(isCommitLimitReached()).toBeFalse();

    incCommitCount();
    expect(isCommitLimitReached()).toBeTrue();

    incCommitCount();
    expect(isCommitLimitReached()).toBeTrue();
  });

  it('defaults to unlimited', () => {
    expect(isCommitLimitReached()).toBeFalse();
  });

  it('increments undefined', () => {
    incCommitCount();
    expect(isCommitLimitReached()).toBeFalse();
  });

  it('resets limit', () => {
    setCommitLimit(1);
    incCommitCount();
    expect(isCommitLimitReached()).toBeTrue();
    setCommitLimit(0);
    expect(isCommitLimitReached()).toBeFalse();
  });

  it('sets non-positive limit as reached', () => {
    setCommitLimit(0);
    expect(isCommitLimitReached()).toBeFalse();
    setCommitLimit(-1000);
    expect(isCommitLimitReached()).toBeFalse();
  });
});
