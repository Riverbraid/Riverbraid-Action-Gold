#!/usr/bin/env node

(async () => {
    try {
        const { braidVectors } = await import('../Riverbraid-Core/src/vector-synthesis/engine.js');
        const invariantsModule = await import('../Riverbraid-Core/src/invariants.js');
        const invariants = invariantsModule.default;

        const inputRaw = process.argv[2] || '[]';
        const inputs = JSON.parse(inputRaw);

        const result = braidVectors(inputs, invariants);
        console.log(JSON.stringify(result, null, 2));
    } catch (e) {
        console.error("❌ Refusal Error:", e.message);
        process.exit(1);
    }
})();
