'use strict';
const PETAL = 'ACTION_GATE';
const MERKLE_ROOT = 'de2062';
const SIGNAL = 'ACTION-GATE';
const PERMITTED_ACTIONS = new Set(['READ', 'WRITE', 'EXECUTE', 'DELEGATE']);

function accept(payload) {
  if (!payload || typeof payload.action !== 'string')
    throw new Error('ACTION_GATE:REJECT — payload.action missing');
  if (!PERMITTED_ACTIONS.has(payload.action.toUpperCase()))
    throw new Error(`ACTION_GATE:REJECT — unknown action: ${payload.action}`);
  return { status: 'ACCEPTED', action: payload.action, merkle_root: MERKLE_ROOT };
}

function getStatus() {
  return { petal: PETAL, merkle_root: MERKLE_ROOT,
    invariant_status: `[Signal: ${SIGNAL} | Braid: CLOSED-LOOP]` };
}

module.exports = { accept, getStatus, PETAL, MERKLE_ROOT };
