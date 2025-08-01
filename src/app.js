import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// window.onload = function() {
//   //write your code here
//   console.log("Hello Rigo from the console!");
// };

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying']

const genRandom = array => {
  const index = Math.floor(Math.random()*array.length)
  return index
};  
const generateExcuse = () => {
  let GenExcuse = `${who[genRandom(who)]} ${action[genRandom(action)]} ${what[genRandom(what)]} ${when[genRandom(when)]}.`;
  return GenExcuse;
};
console.log(generateExcuse());

