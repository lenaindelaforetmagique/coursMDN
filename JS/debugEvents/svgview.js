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

  this.prevPos = null;
  this.prevSize = null;

  this.input.touchMsg = function(e) {
    let curPos = thiz.input.getTouchPos(e.touches);
    let size = thiz.input.getTouchSize(e.touches);
    str = `{x: ${curPos.x}, y: ${curPos.y}}`;
    str += ` {l: ${size}}`;
    return str;
  }

  this.input.spyEvent = function(e, msg = "") {
    let str = `${e.type}`;
    if (msg !== "") {
      str += " - " + msg;
    }
    thiz.putMsg(str);
  };

  this.input.savePos = function(x, y) {
    thiz.prevPos = {
      x: x,
      y: y
    };
  };

  this.input.resetPos = function() {
    thiz.prevPos = null;
  };

  this.input.saveTouchSize = function(size) {
    thiz.prevSize = size;
  };

  this.input.resetTouchSize = function() {
    thiz.prevSize = null;
  };

  this.input.getTouchPos = function(l_touches) {
    let x = 0;
    let y = 0;
    let n = l_touches.length;
    for (let i = 0; i < n; i++) {
      x += l_touches[i].clientX / n;
      y += l_touches[i].clientY / n;
    }
    return {
      x: x,
      y: y
    };
  };

  this.input.getTouchSize = function(l_touches) {
    let lMax = 0;
    let n = l_touches.length;
    for (let i = 0; i < n; i++) {
      for (let j = 0; j < n; j++) {
        let l = Math.pow(l_touches[i].clientX - l_touches[j].clientX, 2);
        l += Math.pow(l_touches[i].clientY - l_touches[j].clientY, 2);
        lMax = Math.max(lMax, l);
      }
    }
    lMax = Math.pow(lMax, 0.5);
    return lMax;
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
    thiz.input.spyEvent(e, thiz.input.touchMsg(e));
    let curPos = thiz.input.getTouchPos(e.touches);
    thiz.input.savePos(curPos.x, curPos.y);
    let size = thiz.input.getTouchSize(e.touches);
    thiz.input.saveTouchSize(size);
  };

  this.input.handle_touchmove = function(e) {
    thiz.input.spyEvent(e, thiz.input.touchMsg(e));
    let curPos = thiz.input.getTouchPos(e.touches);
    thiz.input.savePos(curPos.x, curPos.y);
    let size = thiz.input.getTouchSize(e.touches);
    thiz.input.saveTouchSize(size);
  };

  this.input.handle_touchend = function(e) {
    thiz.input.spyEvent(e, thiz.input.touchMsg(e));
    thiz.input.resetPos();
    thiz.input.resetTouchSize();

  };
};