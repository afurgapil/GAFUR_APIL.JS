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
    self.loadData();
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

  self.loadData = () => {
    const url =
      "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
    const localKey = "carousel-products";

    const cached = localStorage.getItem(localKey);

    if (cached) {
      self.products = JSON.parse(cached);
      console.log("[ProductCarousel] Loaded products from localStorage");
      console.log("[ProductCarousel] Product count:", self.products.length);
      self.products = JSON.parse(cached);
      if (!Array.isArray(self.products) || self.products.length === 0) {
        console.error("[ProductCarousel] No products found in localStorage");
        return;
      }
      return;
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log("[ProductCarousel] Fetched products from remote");
        console.log("[ProductCarousel] Product count:", data.length);
        if (!Array.isArray(data) || data.length === 0) {
          console.error("[ProductCarousel] No products fetched from remote");
          return;
        }
        self.products = data;
        localStorage.setItem(localKey, JSON.stringify(data));
      })
      .catch((err) => console.error("Fetch error:", err));
  };
  init();
})();
