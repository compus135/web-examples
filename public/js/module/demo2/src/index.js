import {foo} from './lib';
console.log("index")
console.log(foo);
setTimeout(() => {
  console.log(foo);
}, 500);
