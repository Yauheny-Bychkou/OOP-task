"use strict";

function DomElement(selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
}

let element = new DomElement("#best", "100px", "100px", "red", "25px");

DomElement.prototype.method = function () {
  if (this.selector.charAt(0) === ".") {
    let newDiv = document.createElement("div");
    newDiv.className = this.selector.slice(1);
    newDiv.innerHTML = "Привет мир";
    newDiv.style.cssText = `selector: ${this.selector}; height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    document.body.appendChild(newDiv);
  } else if (this.selector.charAt(0) === "#") {
    let newDiv = document.createElement("div");
    newDiv.id = this.selector.slice(1);
    newDiv.innerHTML = "Привет друзья";
    newDiv.style.cssText = `selector: ${this.selector}; height: ${this.height}; width: ${this.width}; background: ${this.bg}; font-size: ${this.fontSize};`;
    document.body.appendChild(newDiv);
  }
};
element.method();
