import {parentPort} from 'worker_threads'

let i = 0 ;
for (let index = 0; index <= 6000000; index++) {
    i+=1
}

parentPort.postMessage(i);