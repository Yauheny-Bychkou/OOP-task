"use strict";

function DomElement(selector, height, width, bg, fontSize, position) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;
  this.position = position;
}

let element = new DomElement(".block'", "100px", "100px", "red", "25px", "absolute");

DomElement.prototype.method = function () {
  const _this = this;

  let ready = function () {
    let newDiv = document.createElement("div");
    newDiv.className = "block";
    newDiv.innerHTML = "Привет мир";
    newDiv.style.cssText = ` height: ${_this.height}; width: ${_this.width}; background: ${_this.bg}; font-size: ${_this.fontSize}; position: ${_this.position};`;
    document.body.appendChild(newDiv);
    let eventFunc = function (e) {
      console.log(e.code);
      if (e.code === "ArrowDown") {
        newDiv.style.marginTop = "10px";
      } else if (e.code === "ArrowUp") {
        newDiv.style.marginTop = "-10px";
      }
      if (e.code === "ArrowLeft") {
        newDiv.style.marginLeft = "-10px";
      } else if (e.code === "ArrowRight") {
        newDiv.style.marginLeft = "10px";
      }
    };
    document.addEventListener("keydown", eventFunc);
  };

  document.addEventListener("DOMContentLoaded", ready);
};
element.method();
