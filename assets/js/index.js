(function (doc, win, pwidth, prem) {
  var docEl = doc.documentElement,
    resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
    recalc = function () {
      var clientWidth = docEl.clientWidth > 500 ? 500 : docEl.clientWidth;
      if (!clientWidth) return;
      docEl.style.fontSize = (clientWidth / pwidth) * prem + "px";
    };
  if (!doc.addEventListener) return;
  win.addEventListener(resizeEvt, recalc, false);
  doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window, 750, 100);


