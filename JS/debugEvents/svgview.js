// global variables
var svgNS = "http://www.w3.org/2000/svg";

removeDOMChildren = function(dom) {
  //removes all children of dom
  while (dom.firstChild) {
    dom.removeChild(dom.firstChild);
  };
};


SVGView = function() {
  this.container = document.getElementById("container");

  this.setupInput();
}

SVGView.prototype.putMsg = function(string) {
  var thiz = this;
  let domObj = document.createElement("p");
  domObj.textContent = `${string}`;
  removeDOMChildren(thiz.container);
  thiz.container.appendChild(domObj);
}


SVGView.prototype.setupInput = function() {
  var thiz = this;

  document.onkeydown = function(e) {
    thiz.putMsg(e.which);
  }

  window.onresize = function(e) {
    thiz.putMsg(e.type);
  }

  thiz.touchInput();
}


SVGView.prototype.touchInput = function() {
  var thiz = this;
  var dom = thiz.container;

  this.input = new Input(dom);

  this.input.spyEvent = function(e) {
    thiz.putMsg(e.type);
  };

  this.input.handle_mousedown = function(e) {
    thiz.input.spyEvent(e);
  };

  this.input.handle_mousemove = function(e) {
    thiz.input.spyEvent(e);
  };

  this.input.handle_mouseup = function(e) {
    thiz.input.spyEvent(e);
  };

  this.input.handle_wheel = function(e) {
    thiz.input.spyEvent(e);
  };

  this.input.handle_touchstart = function(e) {
    thiz.input.spyEvent(e);
  };

  this.input.handle_touchmove = function(e) {
    thiz.input.spyEvent(e);
  };

  this.input.handle_touchend = function(e) {
    thiz.input.spyEvent(e);
  };
};