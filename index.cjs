'use strict';
const SIGNAL = 'ACTION_GATE';
const ANCHOR = 'de2062';

exports.getStatus = () => ({
  petal: 'Action-Gold',
  signal: SIGNAL,
  anchor: ANCHOR,
  status: 'STATIONARY'
});
