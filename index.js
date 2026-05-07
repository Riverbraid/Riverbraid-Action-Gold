export const PETAL = "Action-Gold";
export const INVARIANT = "ACTION_STATIONARY";
export function verify(input) {
  if (!input || typeof input !== "object") {
    return {
      pass: false,
      stationary: false,
      signal: "action-gold:INVALID_INPUT",
      reason: "input must be an object"
    };
  }
  const stationary =
    input.repo === "Riverbraid-Action-Gold" &&
    input.petal === "Action-Gold" &&
    input.ring === 1 &&
    input.invariant === "ACTION_STATIONARY";
  return {
    pass: true,
    stationary,
    signal: stationary ? "action-gold:STATIONARY" : "action-gold:DRIFT",
    reason: stationary
      ? "Stationary fields match declared petal identity"
      : "One or more stationary fields drift from declaration"
  };
}
