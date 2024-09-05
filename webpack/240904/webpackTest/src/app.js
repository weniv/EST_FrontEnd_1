import plus from "./plus.js";
import './styles.css';
// const style = require('./styles.css');
import rabbit from './images.png';

// document.addEventListener('DOMContentLoaded', () => {
//     document.body.innerHTML = `<img src=${rabbit}>`;
// });

let env;
console.log(process.env.NODE_ENV);
if (process.env.NODE_ENV === 'development') {
    env = dev;
} else {
    env = pro;
}
console.log(env);

function minus(a, b) {
    return a - b;
}