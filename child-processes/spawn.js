
// 1
// Using .spawn() for process creation
// .spawn() method can be used to create a child process where we pass the command which we want to run
// What makes .spawn() method different from other process creation method is that it spawns an external application in a new process and returns a streaming interface for I/O.

// Try this example in Linux/Unix System:
import { spawn } from 'node:child_process';
const ls = spawn('ls', ['-lh', '/usr']);
/*
ls: is the Unix command for listing directory contents.
'-lh': These are options for the ls command.
-l: Lists in long format, showing detailed information like permissions, number of links, owner, group, size, and timestamp.
-h: Stands for "human-readable", and it formats file sizes in a more readable format (e.g., KB, MB).
'/usr': This is the directory whose contents are to be listed by the ls command.
*/
ls.stdout.on('data', (data) => {
  console.log(`stdout: ${data}`);
});

ls.stderr.on('data', (data) => {
  console.error(`stderr: ${data}`);
});

ls.on('close', (code) => {
  console.log(`child process exited with code ${code}`);
});

const sub = spawn('bad_command');
sub.on('error', (err) => {
    console.error('Failed to start subprocess.')
})
