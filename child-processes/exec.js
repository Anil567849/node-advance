
/*
Using exec() for process creation
The exec function is a good choice if you need to use the shell syntax and if the size of the data expected from the command is small. It buffers the command’s generated output and passes the whole output value to a callback function (instead of using streams, which is what spawn does).
*/

// Node.js is using the exec function from the child_process module to execute a shell command.
import { exec } from 'node:child_process';


// The cat command reads the contents of the file exec.js and outputs it to the standard output (usually the terminal).
// wc -l: The wc command stands for "word count". The -l option tells wc to count the number of lines in the input.
exec('cat exec.js | wc -l', (error, stdout, stderr) => {
 if (error) {
  console.error(`exec error: ${error}`)
  return
 }
 console.log(`stdout: ${stdout}`)
 console.error(`stderr: ${stderr}`)
})







