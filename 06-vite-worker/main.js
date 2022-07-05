

/**
 * 纯js进行调用
 */
// const worker = new Worker('./worker.js')
// worker.onmessage = (event)=>{
//   console.log(event.data)
// }

// 参数调用
import myWorker from './worker?worker'
const worker = new myWorker
worker.onmessage = (event) => {
  console.log(event.data)
}