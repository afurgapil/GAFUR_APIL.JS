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
    self.loadData();
  };

  self.buildHTML = () => {
    const storiesContainer = document.querySelector(
      ".ins-stories.ins-sortable-container"
    );

    if (!storiesContainer) {
      console.log("Stories not loaded yet, will try again in 500ms...");
      setTimeout(() => {
        self.buildHTML();
      }, 500);
      return;
    }

    if (document.querySelector(".custom-carousel-container")) {
      console.log("Carousel created already");
      return;
    }

    const html = `
    <div class="custom-carousel-outer-container">
      <div class="custom-carousel-container">
        <div class="custom-banner__titles">
          <h2 class="custom-title-primary">Beğenebileceğinizi Düşündüklerimiz</h2>
        </div>
        <div class="custom-carousel-wrapper-container">
          <div class="custom-carousel-wrapper">
            <div class="custom-carousel-content"></div>
          </div>
        </div>
      </div>
      <button aria-label="back" class="custom-swiper-prev">
          <svg width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
    <path d="M10.06.94A1.5 1.5 0 0 0 8.054.835L7.94.94l-7 7a1.5 1.5 0 0 0-.103 2.008l.103.114 7 7a1.5 1.5 0 0 0 2.225-2.008l-.103-.114L4.12 9l5.94-5.94a1.5 1.5 0 0 0 .103-2.007L10.06.94z" fill="#F28E00" fill-rule="nonzero"/>
</svg>  
      </button>
      <button aria-label="next" class="custom-swiper-next">
        <svg width="11" height="18" viewBox="0 0 11 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M.94.94A1.5 1.5 0 0 1 2.946.835L3.06.94l7 7a1.5 1.5 0 0 1 .103 2.008l-.103.114-7 7a1.5 1.5 0 0 1-2.225-2.008l.103-.114L6.88 9 .939 3.06a1.5 1.5 0 0 1-.103-2.007L.94.94z" fill="#F28E00" fill-rule="nonzero"/>
</svg>
      </button> 
    </div>
  `;

    if (storiesContainer && storiesContainer.parentNode) {
      storiesContainer.insertAdjacentHTML("afterend", html);
      console.log("Carousel created and added after stories");
    } else {
      document.body.insertAdjacentHTML("beforeend", html);
      console.log("Carousel added to body");
    }

    self.setEvents();
  };

  self.buildCSS = () => {
    const css = `
    .custom-carousel-outer-container {
      position: relative !important;
      width: 1450px !important;
      max-width: 100% !important;
      margin: 0 auto !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
    }

    .custom-carousel-container {
      font-family: 'Quicksand-Medium', sans-serif !important;
      width: 1320px !important;
      max-width: 1320px !important;
      margin: 0 auto !important;
      padding: 0 15px !important;
      box-sizing: border-box !important;
      display: block !important;
      height: 679.938px !important;
      position: relative !important;
      overflow: visible !important;
    }

    .custom-carousel-container *,
    .custom-carousel-container *::before,
    .custom-carousel-container *::after {
      box-sizing: border-box !important;
      font-family: inherit !important;
    }

    .ins-preview-wrapper .custom-carousel-container,
    .ins-preview-wrapper .custom-carousel-container.custom-carousel-container,
    .ins-preview-wrapper .custom-banner__titles,
    .ins-preview-wrapper .custom-banner__titles.custom-banner__titles,
    .ins-preview-wrapper .custom-carousel-wrapper-container,
    .ins-preview-wrapper .custom-carousel-wrapper-container.custom-carousel-wrapper-container {
      border-radius: inherit !important;
    }

    .ins-preview-wrapper .custom-banner__titles.custom-banner__titles {
      border-top-left-radius: 35px !important;
      border-top-right-radius: 35px !important;
      border-bottom-left-radius: 0 !important;
      border-bottom-right-radius: 0 !important;
    }

    .ins-preview-wrapper .custom-carousel-wrapper-container.custom-carousel-wrapper-container {
      border-top-left-radius: 0 !important;
      border-top-right-radius: 0 !important;
      border-bottom-left-radius: 35px !important;
      border-bottom-right-radius: 35px !important;
    }

    .custom-carousel-container .custom-carousel-card {
      border-radius: 10px !important;
    }

    .custom-carousel-container .custom-card-add-to-cart {
      border-radius: 8px !important;
    }

    .custom-banner__titles {
      align-items: center !important;
      background-color: rgb(254, 246, 235) !important;
      border-top-left-radius: 35px !important;
      border-top-right-radius: 35px !important;
      box-sizing: border-box !important;
      color: rgb(33, 39, 56) !important;
      display: flex !important;
      font-family: 'Quicksand-Bold', sans-serif !important;
      font-weight: 700 !important;
      height: 81.9531px !important;
      justify-content: space-between !important;
      padding: 25px 67px !important;
      width: 1290px !important;
    }

    .custom-title-primary {
      font-family: Quicksand-Bold;
      font-size: 3rem;
      font-weight: 700;
      line-height: 1.11;
      color: #f28e00;
      margin: 0;
    }
    @media (max-width: 480px) {
      .custom-title-primary {
        font-size: 2.2rem;
        line-height: 1.5;
      }
    }

    .custom-carousel-wrapper-container {
      background-color: rgb(255, 255, 255) !important;
      border-bottom-left-radius: 35px !important;
      border-bottom-right-radius: 35px !important;
      box-sizing: border-box !important;
      display: block !important;
      font-family: 'Quicksand-Medium', sans-serif !important;
      height: 597.984px !important;
      position: relative !important;
      width: 1290px !important;
      padding: 20px !important;
    }

    .custom-carousel-wrapper {
      display: flex !important;
      align-items: center !important;
      position: relative;
      width: 100% !important;
      height: calc(597.984px - 40px) !important;
      overflow: visible !important;
    }

    .custom-carousel-content {
      display: block !important;
      overflow-x: auto !important;
      overflow-y: hidden !important;
      scroll-behavior: smooth;
      padding: 20px 0;
      flex: 1;
      white-space: nowrap !important;
      font-size: 0 !important;
    }

    .custom-carousel-card {
      width: 262px !important;
      background: #fff;
      border: 1px solid #ededed;
      border-radius: 10px;
      overflow: hidden;
      position: relative;
      transition: all 0.5s;
      margin-right: 20px !important;
      margin-bottom: 20px;
      padding: 5px;
      display: inline-block !important;
      vertical-align: top !important;
      font-size: 12px !important;
      font-family: Poppins, "cursive" !important;
      color: #7d7d7d;
      box-sizing: border-box !important;
      text-decoration: none;
      z-index: 1;
    }

    .custom-carousel-card:hover {
      color: #7d7d7d;
      cursor: pointer;
      z-index: 2;
    }



    .custom-card-link {
      display: block;
      text-decoration: none;
      color: inherit;
    }

    .custom-card-image {
      position: relative;
      display: block;
      width: 100%;
      background-color: #fff;
      margin-bottom: 45px;
      text-align: center;
    }

    .custom-card-image img {
      display: inline-block;
      max-width: 100%;
      max-height: 100%;
    }



    .custom-carousel-outer-container .custom-swiper-prev,
    .custom-carousel-outer-container .custom-swiper-next {
      width: 50px !important;
      height: 50px !important;
      border-radius: 50% !important;
      position: absolute !important;
      bottom: 50% !important;
      top: auto !important;
      border: 1px solid transparent !important;
      cursor: pointer !important;
      z-index: 999 !important;
      background-color: #fef6eb !important;
      outline: none !important;
      display: flex !important;
      align-items: center !important;
      justify-content: center !important;
      font-size: 20px !important;
      font-weight: normal !important;
      color: #212738 !important;
      line-height: 1 !important;
      box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1) !important;
      opacity: 1 !important;
      visibility: visible !important;
      pointer-events: auto !important;
    }

    .custom-carousel-outer-container .custom-swiper-prev {
      left: 15px !important;
    }

    .custom-carousel-outer-container .custom-swiper-next {
      right: 15px !important;
    }

    .custom-carousel-outer-container .custom-swiper-prev:hover,
    .custom-carousel-outer-container .custom-swiper-next:hover {
      background-color: #fff !important;
      border: 1px solid #f28e00 !important;
    }

    .custom-carousel-content::-webkit-scrollbar {
      display: none;
    }

    .custom-card-content {
      padding: 0 17px 17px;
      width: 100%;
      box-sizing: border-box;
    }

    .custom-card-title {
      font-size: 14px;
      font-weight: 400;
      line-height: 1.3;
      margin: 0 0 12px 0;
      color: #333;
      height: 50px;
      overflow: hidden;
    }

    .custom-card-title b {
      font-weight: 600;
    }



    .custom-card-pricing {
      margin-bottom: 16px;
    }



    .custom-current-price {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }



    .custom-card-add-to-cart {
      border-radius: 8px;
      transition: all 0.3s;
      padding: 8px 12px;
      outline: none;
      color: white;
      background-color: #f28e00;
      border: none;
      cursor: pointer;
      font-size: 12px;
      font-family: Poppins, "cursive";
      font-weight: 500;
      width: calc(100% - 20px);
      margin: 10px;
      text-transform: uppercase;
    }

    .custom-card-add-to-cart:hover {
      background: #f28e00;
      color: white;
    }

    @media (max-width: 768px) {
      .custom-carousel-container {
        padding: 0 8px;
      }

      .custom-carousel-outer-container .custom-swiper-prev,
      .custom-carousel-outer-container .custom-swiper-next {
        width: 35px;
        height: 35px;
        font-size: 16px;
      }

    
    }

    @media (max-width: 480px) {
      .custom-carousel-outer-container .custom-swiper-prev,
      .custom-carousel-outer-container .custom-swiper-next {
        display: none !important;
      }
    }
    `;

    const styleTag = document.createElement("style");
    styleTag.className = "custom-carousel-style";
    styleTag.innerHTML = css;
    document.head.appendChild(styleTag);
  };

  self.renderProducts = () => {
    const wrapper = document.querySelector(".custom-carousel-content");
    if (!wrapper || !Array.isArray(self.products)) return;

    const html = self.products
      .map((p, idx) => {
        return `
          <div class="custom-carousel-card">
            <a class="custom-card-link" href="${p.url}" target="_blank">
              <div class="custom-card-image">
                <img src="${p.img}" alt="${p.name}" />
              </div>
              <div class="custom-card-content">
                <h3 class="custom-card-title">
                  <b>${p.brand}</b> - ${p.name}
                </h3>
                <div class="custom-card-pricing">
                  <div class="custom-current-price">${p.price.toLocaleString(
                    "tr-TR",
                    {
                      minimumFractionDigits: 2,
                    }
                  )} TL</div>
                </div>
              </div>
            </a>
            <button class="custom-card-add-to-cart">Sepete Ekle</button>
          </div>
        `;
      })
      .join("");

    wrapper.innerHTML = html;
  };

  self.setEvents = () => {
    const prevButton = document.querySelector(
      ".custom-carousel-outer-container .custom-swiper-prev"
    );
    const nextButton = document.querySelector(
      ".custom-carousel-outer-container .custom-swiper-next"
    );

    if (prevButton) {
      prevButton.addEventListener("click", () => {
        document
          .querySelector(".custom-carousel-content")
          ?.scrollBy({ left: -300, behavior: "smooth" });
      });
    }

    if (nextButton) {
      nextButton.addEventListener("click", () => {
        document
          .querySelector(".custom-carousel-content")
          ?.scrollBy({ left: 300, behavior: "smooth" });
      });
    }
  };

  self.loadData = () => {
    const url =
      "https://gist.githubusercontent.com/sevindi/8bcbde9f02c1d4abe112809c974e1f49/raw/9bf93b58df623a9b16f1db721cd0a7a539296cf0/products.json";
    const localKey = "carousel-products";

    const cached = localStorage.getItem(localKey);

    const process = (data) => {
      if (!Array.isArray(data) || data.length === 0) {
        console.error("[ProductCarousel] No valid products");
        return;
      }
      self.products = data;
      self.renderProducts();
    };

    if (cached) {
      try {
        process(JSON.parse(cached));
        return;
      } catch (e) {
        console.warn("Invalid localStorage, clearing...");
        localStorage.removeItem(localKey);
      }
    }

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        localStorage.setItem(localKey, JSON.stringify(data));
        process(data);
      })
      .catch((err) => {
        console.error("Fetch error:", err);
      });
  };

  init();
})();
