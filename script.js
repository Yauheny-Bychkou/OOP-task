"use strict";
let one = document.querySelector(".one");

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

let element = new DomElement(".block'", "100px", "100px", "red", "25px");

DomElement.prototype.method = function () {
  if (this.selector.charAt(0) === ".") {
    let newDiv = document.createElement("div");
    newDiv.className = "block";
    newDiv.innerHTML = "Привет мир";
    newDiv.style.cssText = ` height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    document.body.appendChild(newDiv);

    //one.innerHTML = '<div class=block">class</div>';
  } else if (this.selector.charAt(0) === "#") {
    let newDiv = document.createElement("div");
    newDiv.id = "best";
    newDiv.innerHTML = "Привет друзья";
    newDiv.style.cssText = ` height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    document.body.appendChild(newDiv);
  }
};
element.method();
