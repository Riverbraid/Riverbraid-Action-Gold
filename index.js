'use strict';
const ACTION_GATE = Object.freeze({
  signal: 'ACTION_GATE',
  braid: 'CLOSED-LOOP',
  invariant: 'INTENT_VERIFIED',
  evaluate(action) {
    if (!action || typeof action.type !== 'string') {
      return { allowed: false, code: 'INVALID_ACTION_SCHEMA' };
    }
    const FORBIDDEN = ['OVERRIDE_GOVERNANCE', 'BYPASS_JUDICIAL', 'DISABLE_CRYPTO'];
    if (FORBIDDEN.includes(action.type)) {
      return { allowed: false, code: 'ACTION_FORBIDDEN' };
    }
    return { allowed: true, code: 'ACTION_PERMITTED' };
  },
  getStatus() { return '[Signal: ACTION_GATE | Braid: CLOSED-LOOP]'; }
});
module.exports = ACTION_GATE;
