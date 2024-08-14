
/*
NodeJS is a single threaded in nature but there could be a case where we need a multi processes especially for running synchronous, cpu-intensive tasks in isolation. This is where child processes come into play. The node:child_process module allows us to create sub-processes and establish a communication channel, known as Inter Process Communication (IPC), between the main process and the child process.
In addition to handling lengthy tasks, this module has the capability to interact with the operating system and execute shell commands. To put it simply, it enables us to execute not just JavaScript, but also other programming languages like Git, Python, PHP, or any other language.


why we need child processes when we already have worker threads for handling CPU-intensive tasks. After all, worker threads have their own heap, V8 instance, and event loop.
1. Child processes allow you to run external programs or scripts as separate processes.
2. Unlike worker threads, child processes provide a separate instance of the entire Node.js runtime.
3. Child processes distribute tasks among multiple processes, enabling you to leverage the power of multi-core systems.
4. If a child process crashes for any reason, it will not bring down your main process along with it.
*/



/*
The child_process module enables us to access Operating System functionalities by running any system command inside a child process. These child-processes can be created both synchronously and asynchronously.

Each of the methods returns a ChildProcess instance async.
1. child_process.spawn(), 
2. child_process.fork(), 
3. child_process.exec(),
4. child_process.execFile(),

Each of the methods returns a ChildProcess instance sync.
1. child_process.spawnSync, 
2. child_process.execSync, 
3. child_process.execFileSync
*/