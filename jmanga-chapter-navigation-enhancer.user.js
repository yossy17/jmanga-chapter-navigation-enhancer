// ==UserScript==
// @name                JManga Chapter Navigation Enhancer
// @description         左右矢印キーを使用してページチャプターを前後させる
// @version             1.1
// @author              Yos_sy
// @match               *://*.jmanga.org/*
// @match               *://*.jmanga.to/*
// @namespace           http://tampermonkey.net/
// @icon                https://www.google.com/s2/favicons?sz=64&domain=jmanga.org
// @license             MIT
// @grant               GM_addStyle
// ==/UserScript==

(function () {
  "use strict";

  // UIを非表示
  GM_addStyle(`
    .mr-tools.mrt-bottom {
      display: none !important;
    }
  `);

  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      // 前のチャプターへ移動
      const prevButton = document.querySelector("#ver-prev-cv button");
      if (prevButton) {
        prevButton.click();
      }
    } else if (e.key === "ArrowRight") {
      // 次のチャプターへ移動
      const nextButton = document.querySelector("#ver-next-cv button");
      if (nextButton) {
        nextButton.click();
      }
    }
  });
})();
