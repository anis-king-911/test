import { sleep } from './log.js';
const arr = ['one', 'two', 'thr', 'for', 'fiv'];

async function wite() {

  for (const iterator of arr) {
    await sleep(2000);
    console.log(iterator);
  }

  arr.map(async (item) => {
    await sleep(2000)
    console.log(item);
  })
  
}

window.addEventListener('DOMContentLoaded', () => wite());