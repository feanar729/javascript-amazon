export default class HiddenContentsHandler {
  scrollEventHandler() {
    let hiddenLayer = document.querySelector(".hidden-plans");
    document.addEventListener("scroll", () => {
      const yPos = window.pageYOffset;
      const displayStandard = 300;
      const openStandard = 400;

      (yPos > displayStandard) ? hiddenLayer.style.display = "block": hiddenLayer.style.display = "none";
      if (yPos > openStandard) {
        // hiddenLayer.classList.add("trans-display");
        // hiddenLayer.setAttribute("class", "trans-display");
        // => setAttribute 시 css Selector가 다른 이름이어서 잘 안먹히는 것 같음

        hiddenLayer.style.height = "70px";
        hiddenLayer.style.overflow = "visible";
      } else {
        // hiddenLayer.classList.remove("trans-display");
        // hiddenLayer.setAttribute("class", "hidden-plans");

        hiddenLayer.style.height = "0px";
        hiddenLayer.style.overflow = "hidden";
      }
    });
  }

  clickEventHandler() {
    let expandLayer = document.querySelector(".expand-membership-card");
    let hiddenContents = document.querySelector(".hidden-inner-contents");

    // 2개의 element를 전체적으로 탐색? / querySelectorAll로 탐색? => 생성자 함수로 refactoring 시도.
    let closeButton = document.querySelector(".close-button");
    let otherCloseButton = document.querySelector(".comparison-close-button");

    expandLayer.addEventListener("click", () => {
      if (hiddenContents) {
        hiddenContents.classList.add("trans-show-click");
      }
    });

    otherCloseButton.addEventListener("click", this.closerButtonHandler);
    closeButton.addEventListener("click", this.closerButtonHandler);
  }

  closerButtonHandler() {
    let hiddenContents = document.querySelector(".hidden-inner-contents");
    hiddenContents.classList.remove("trans-show-click");
  }
}