import ACTION_GATE from './index.js';
const status = ACTION_GATE.getStatus();
if (!/\[Signal: ACTION_GATE \| Braid: CLOSED-LOOP\]/.test(status)) {
  console.error('ACTION-GOLD INVARIANT BREACH');
  process.exit(1);
}
console.log('ACTION-GOLD VERIFIED:', status);
