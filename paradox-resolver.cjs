#!/usr/bin/env node
(async () => {
  try {
    const { braidVectors } = await import('../Riverbraid-Core/src/vector-synthesis/engine.js');
    const invariants = require('../Riverbraid-Core/src/invariants.js');
    const inputs = JSON.parse(process.argv[2] || '[]');
    const result = braidVectors(inputs, invariants);
    console.log(JSON.stringify(result, null, 2));
  } catch (e) {
    console.error("❌ Refusal Error:", e.message);
    process.exit(1);
  }
})();
