/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = () => {
  //write your code here

  console.log("Hello Jason");

  let generateExcuse = () => {
    let who = ["My dog", "My grandma", "His turtle", "My bird"];
    let action = ["ate", "peed on", "crushed", "destroyed"];
    let what = ["my homework", "the keys", "the car"];
    let when = [
      "before the class",
      "right on time",
      "when i finished",
      "during my lunch",
      "while i was praying"
    ];

    let whoIndex = Math.floor(Math.random() * who.length);
    let actionIndex = Math.floor(Math.random() * action.length);
    let whatIndex = Math.floor(Math.random() * what.length);
    let whenIndex = Math.floor(Math.random() * when.length);

    return (
      who[whoIndex] +
      " " +
      action[actionIndex] +
      " " +
      what[whatIndex] +
      " " +
      when[whenIndex]
    );
  };
  document.querySelector("#excuse").innerHTML = generateExcuse();
};
