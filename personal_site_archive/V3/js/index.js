// All Javascript for index.html
import {
  annotate,
  annotationGroup,
} from "https://unpkg.com/rough-notation?module";

var delayInMilliseconds = 500; // Time Delay in (ms)
function hello(dispaly_element) {
  setTimeout(function () {
    dispaly_element.show();
  }, delayInMilliseconds);
}
// Header
const a0 = annotate(document.querySelector("#header"), {
  type: "bracket",
  color: "orange",
  strokeWidth: 3,
  brackets: ["left", "right"]
});
// Intro
const a1 = annotate(document.querySelector("#e1"), {
  type: "highlight",
  color: "yellow",
  multiline: "true",
  animationDuration: 1000
});
const a2 = annotate(document.querySelector("#e2"), {
  type: "underline",
  color: "red",
  multiline: "true",
  animationDuration: 1000
});
// Contact Info
const a3 = annotate(document.querySelector("#a3"), {
  type: "bracket",
  color: "orange",
  strokeWidth: 2,
  iterations: 5,
  brackets: ["left", "right"],
  animationDuration: 3000
});
// SHOW ANIMATION
const ag = annotationGroup([a1, a2]);
hello(ag);
