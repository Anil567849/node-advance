// Using execFile() for process creation
// If you need to execute a file without using a shell, the execFile function is what you need. It behaves exactly like the exec function, but does not use a shell, which makes it a bit more efficient.

import { execFile }  from 'node:child_process';
const child0 = execFile('node', ['--version'], (error, stdout, stderr) => { // This command runs  a separate Node.js process.
  if (error) {
    throw error;
  }
  console.log(stdout);
});

const child1 = execFile('node', ['child-processes/execFile/index.js'], (error, stdout, stderr) => { // This command runs  a separate Node.js process.
    if (error) {
        console.error(`Error: ${error.message}`);
        return;
    }
    if (stderr) {
        console.error(`Standard Error: ${stderr}`);
        return;
    }
    console.log(`Standard Output: ${stdout}`);
});


