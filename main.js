(() => {
  const currentURL = window.location.href;
  const isHomepage =
    currentURL === "https://www.e-bebek.com/" ||
    currentURL === "https://www.e-bebek.com" ||
    currentURL === "http://www.e-bebek.com/" ||
    currentURL === "http://www.e-bebek.com";

  if (!isHomepage) {
    console.log("wrong page");
    return;
  }

  const self = {};

  const init = () => {
    self.buildHTML();
    self.buildCSS();
    self.setEvents();
  };

  self.buildHTML = () => {
    const html = `
      <div class="custom-carousel-container">
        <div class="custom-carousel-title">Beğenebileceğinizi düşündüklerimiz</div>
        <div class="custom-carousel"></div>
      </div>
    `;

    const storiesContainer = document.querySelector(
      ".ins-stories.ins-sortable-container"
    );
    if (storiesContainer && storiesContainer.parentNode) {
      storiesContainer.insertAdjacentHTML("afterend", html);
    } else {
      document.body.insertAdjacentHTML("beforeend", html);
    }
  };

  self.buildCSS = () => {
    const css = `
      .custom-carousel-title {
        color: red;
        font-size: 20px;
      }
    `;

    const styleTag = document.createElement("style");
    styleTag.className = "carousel-style";
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);
  };

  self.setEvents = () => {
    document
      .querySelector(".custom-carousel-title")
      ?.addEventListener("click", () => {
        console.log("Carousel title clicked");
      });
  };

  init();
})();
