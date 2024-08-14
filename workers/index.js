
import { Worker, MessageChannel  } from 'node:worker_threads';

// console.log('start');
// let num = 0;
// for(let i = 0; i < 10000; i++){ // block main thread
//     num += 1;
// }
// console.log('end', num);






/*
// 1
const worker = new Worker('./workers/worker.js', {workerData: {n: 10000}});

worker.on('message', (result) => {
    console.log('Num is:', result);
})

worker.on("error", (msg) => {
    console.log("error", msg);
});
*/



/*
// 2
const worker = new Worker('./workers/worker.js');

worker.postMessage(10000)

worker.on('message', (result) => {
    console.log('Num is:', result);
})

worker.on("error", (msg) => {
    console.log("error", msg);
});
*/

/*
// 3
// One port is used for sending the message and other for receiving the message. Basically port1 and port2 are just two ends of a channel. You can use port1 and port2 for send or rec || rec or send.

const { port1, port2 } = new MessageChannel();

// Send msg
port1.postMessage("Hello from port 1");
port1.close();


// Receive msg 
port2.on('message', (message) => console.log("port 2 received msg", message));
port2.on('close', () => console.log('closed! port2'));
*/



/*
// 4
// You can use port1 and port2 for send or rec || rec or send.
const { port1, port2 } = new MessageChannel()
const worker = new Worker('./workers/worker.js')

// port 2 for receiving msg 
port2.on("message", msg => {
    console.log(`Message from worker----> ${msg}`)
})
// send port1 to worker 
worker.postMessage({ port1: port1}, [port1])
*/