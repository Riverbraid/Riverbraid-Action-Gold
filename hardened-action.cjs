const { execSync } = require('child_process');
const fs = require('fs');

/**
 * Hardened Action Logic:
 * Acts as a filtered conduit that only allows 
 * structurally aligned commands to touch the shell.
 */

const evaluateCommand = (cmd) => {
    const isAscii = /^[\x00-\x7F]*$/.test(cmd);
    const hardenedPulseExists = fs.existsSync('../Riverbraid-Temporal-Gold/swarm.pulse.json.asc');
    
    if (!isAscii) {
        console.error("[REFUSAL] Non-ASCII entropy detected. Execution blocked.");
        return false;
    }
    if (!hardenedPulseExists) {
        console.error("[REFUSAL] Temporal Sync missing. Execution blocked.");
        return false;
    }
    return true;
};

const runCommand = (cmd) => {
    if (evaluateCommand(cmd)) {
        console.log(`[ACTION] Executing: ${cmd}`);
        try {
            const output = execSync(cmd, { encoding: 'utf-8' });
            console.log(output);
        } catch (err) {
            console.error(`[RUNTIME ERROR] ${err.message}`);
        }
    } else {
        execSync(`node ../Riverbraid-Memory-Gold/append-log.cjs 'COMMAND_REFUSAL' 'BLOCKED' '${cmd}'`); console.error("[REFUSAL] Command failed autonomous safety audit.");
    }
};

// Execute if argument is provided, else default to swarm list
const targetCmd = process.argv[2] || "ls -d ../*-Gold";
runCommand(targetCmd);
