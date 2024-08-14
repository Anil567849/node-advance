



import {parentPort, workerData } from 'worker_threads';

/*
// 1
const data = () => {
  let num = 0;
  for (let index = 0; index < workerData.n; index++) {
        num += 2;
  }
  return num;
}
parentPort.postMessage(data())
*/


/*
// 2
parentPort.on("message", (data) => {
  // console.log('msg', data);
  let num = 0;
  for (let index = 0; index < data; index++) {
        num += 2;
  }
  parentPort.postMessage(num);
})
*/


/*
// 4
parentPort.on("message", (data) => {
  // console.log('msg', data);
  data.port1.postMessage('hello from port 1');
})
*/
