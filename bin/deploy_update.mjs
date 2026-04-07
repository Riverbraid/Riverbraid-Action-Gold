import { execSync } from 'child_process';

const executeTask = () => {
  const taskName = "SWARM_UPDATE_DEPLOY";
  try {
    console.log("ACTION: Requesting Shield Clearance...");
    
    // 1. Physical Gate Check
    execSync('node /workspaces/Riverbraid-Refusal-Gold/bin/shield.mjs', { stdio: 'inherit' });

    // 2. Perform the Work
    console.log("ACTION: Clearance Granted. Executing...");
    
    // 3. Log Success Judicially
    execSync(`node /workspaces/Riverbraid-Judicial-Gold/bin/audit_event.mjs "${taskName}" "SUCCESS"`);

  } catch (e) {
    console.error("ACTION_ABORTED: Shield refused entry.");
    // 4. Log Refusal Judicially
    execSync(`node /workspaces/Riverbraid-Judicial-Gold/bin/audit_event.mjs "${taskName}" "REFUSED"`);
    process.exit(1);
  }
};

executeTask();
