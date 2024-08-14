
/*
Using .fork() for process creation
.fork() is particularly useful when executing a Node.js script in a new process and want an IPC communication channel between the two processes.

The fork method will open an IPC channel allowing message passing between Node processes:
1. On the child process, process.on(‘message’) and process.send(‘message to parent’) can be used to receive and send data
2. On the parent process, child.on(‘message’) and child.send(‘message to child’) are used
*/

import { fork } from 'node:child_process';

const forked = fork('./child-processes/fork/child_program.js');

forked.on('message', (msg) => {
  console.log('Message from child', msg);
});

forked.send('hello child');












