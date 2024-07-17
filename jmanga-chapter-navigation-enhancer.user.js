// ==UserScript==
// @name                JManga Chapter Navigation Enhancer
// @description         左右矢印キーを使用してページチャプターを前後させる
// @version             1.0.0
// @author              Yos_sy17
// @match               https://jmanga.org/*
// @namespace           http://tampermonkey.net/
// @icon                https://www.google.com/s2/favicons?sz=64&domain=jmanga.org
// @license             MIT
// @grant               none
// ==/UserScript==

(function () {
  "use strict";

  // UIを非表示
  const mrtBottomElements = document.querySelectorAll(".mr-tools.mrt-bottom");
  mrtBottomElements.forEach((element) => {
    element.style.display = "none";
  });

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

// メモ
// @name:en             JManga Chapter Navigation Enhancer
// @name:zh-CN          JManga 章节导航增强器
// @name:ko             JManga 챕터 네비게이션 향상기
// @name:ru             JManga Навигатор по главам
// @name:de             JManga Kapitel-Navigation Enhancer
// @description:en      Use the left and right arrow keys to navigate between chapters
// @description:zh-CN   使用左右箭头键在章节之间导航
// @description:ko      좌우 화살표 키를 사용하여 챕터 간 이동
// @description:ru      Используйте клавиши со стрелками влево и вправо для навигации между главами
// @description:de      Verwenden Sie die Pfeiltasten nach links und rechts, um zwischen Kapiteln zu navigieren
