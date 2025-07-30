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
      border-radius: 37.5px !important;
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
      width: 242px !important;
      height: 558px !important;
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
      box-shadow: -10px 10px 100px 0 #00000030, inset 0 0 0 3px #f28e00;
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
      width: 230px !important;
      height: 203px !important;
      background-color: #fff;
      margin-bottom: 45px;
      text-align: center;
      margin: 0 auto 45px auto;
    }

    .custom-card-image {
      position: relative;
      display: block;
      width: 230px !important;
      height: 203px !important;
      background-color: #fff;
      margin-bottom: 45px;
      text-align: center;
      margin: 0 auto 45px auto;
    }

    .custom-card-image img {
      display: inline-block;
      width: 230px !important;
      height: 203px !important;
      object-fit: cover;
    }

    .custom-card-badge {
      position: absolute !important;
      top: 10px !important;
      left: 10px !important;
      z-index: 10 !important;
      width: 56px !important;
      height: 56px !important;
    }

    .custom-card-badge svg {
      width: 100% !important;
      height: 100% !important;
    }

    .custom-favorite-btn {
      position: absolute !important;
      top: 10px !important;
      right: 10px !important;
      z-index: 10 !important;
      width: 26px !important;
      height: 23px !important;
      background: none !important;
      border: none !important;
      cursor: pointer !important;
      padding: 0 !important;
      transition: all 0.3s ease !important;
    }

    .custom-favorite-btn:hover {
      cursor: pointer !important;
    }

    .custom-favorite-btn svg {
      width: 100% !important;
      height: 100% !important;
    }

    .custom-favorite-btn .normal-heart {
      display: block !important;
    }

    .custom-favorite-btn .hover-heart {
      display: none !important;
    }

    .custom-favorite-btn:hover .normal-heart {
      display: none !important;
    }

    .custom-favorite-btn:hover .hover-heart {
      display: block !important;
    }

    .custom-favorite-btn.is-favorite .normal-heart {
      display: none !important;
    }

    .custom-favorite-btn.is-favorite .hover-heart {
      display: block !important;
    }

    .custom-favorite-btn.is-favorite:hover .hover-heart {
      display: block !important;
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

    .custom-card-rating {
      width: 196px !important;
      height: 40px !important;
      display: flex !important;
      flex-direction: row !important;
      justify-content: start !important;
      align-items: center !important;
      margin-bottom: 12px !important;
    }

    .custom-stars {
      width: 116px !important;
      height: 20px !important;
      display: flex !important;
      align-items: center !important;
      margin-right: 10px !important;
    }

    .custom-stars .star {
      width: 15px !important;
      height: 14px !important;
      color: #ffc107 !important;
      font-size: 14px !important;
      line-height: 1 !important;
      margin-right: 10px !important;
    }

    .custom-rating-count {
      font-size: 12px !important;
      color: #666 !important;
      font-family: Poppins, "cursive" !important;
    }

    .custom-card-pricing {
      margin-bottom: 16px;
    }

    .custom-card-price {
      position: relative;
      display: flex;
      justify-content: flex-end;
      flex-direction: column;
      height: 43px;
    }

    .custom-card-old-price {
      font-size: 1.4rem;
      font-weight: 500;
      text-decoration: line-through;
      color: #666;
    }

    .custom-card-new-price {
      color: #00a365;
      font-size: 2.2rem;
      font-weight: 700;

    }

    .custom-card-percent {
      color: #00a365;
      font-size: 18px;
      font-weight: 700;
      display: inline-flex;
      justify-content: center;
      margin-left: 10px;
    }

    .custom-card-percent .icon {
      display: inline-block;
      height: 22px;
      font-size: 22px;
      margin-left: 3px;
    }

    .d-flex {
      display: flex !important;
    }

    .align-items-center {
      align-items: center !important;
    }

    .ml-2 {
      margin-left: 0.5rem !important;
    }



    .custom-current-price {
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }



    .custom-card-add-to-cart {
      width: 100%;
      padding: 15px 20px;
      border-radius: 37.5px;
      background-color: #fff7ec;
      color: #f28e00;
      font-family: Poppins, "cursive";
      font-size: 1.4rem;
      font-weight: 700;
      margin-top: 25px;
      border: none;
      cursor: pointer;
      transition: all 0.3s;
      outline: none;
    }

    .custom-card-add-to-cart:hover {
      background-color: #fdeed9;
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
                <button class="custom-favorite-btn" data-product-id="${p.id}">
                  <svg class="normal-heart" width="26" height="23" viewBox="0 0 26 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="Group 3">
                      <g id="heart">
                        <path id="Shape" fill-rule="evenodd" clip-rule="evenodd" d="M22.6339 2.97449C21.4902 1.83033 19.9388 1.1875 18.3211 1.1875C16.7034 1.1875 15.152 1.83033 14.0084 2.97449L12.8332 4.14968L11.658 2.97449C9.27612 0.592628 5.41435 0.592627 3.03249 2.97449C0.650628 5.35635 0.650628 9.21811 3.03249 11.6L4.20769 12.7752L12.8332 21.4007L21.4587 12.7752L22.6339 11.6C23.778 10.4564 24.4208 8.90494 24.4208 7.28723C24.4208 5.66952 23.778 4.11811 22.6339 2.97449Z" stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                      </g>
                    </g>
                  </svg>
                  <svg class="hover-heart" width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M30 30.5H37" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                    <path d="M33.5 27L33.5 34" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                    <circle cx="26" cy="26" r="25" stroke="#FF8A00"/>
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M36.6339 17.9745C35.4902 16.8303 33.9388 16.1875 32.3211 16.1875C30.7034 16.1875 29.152 16.8303 28.0084 17.9745L26.8332 19.1497L25.658 17.9745C23.2761 15.5926 19.4144 15.5926 17.0325 17.9745C14.6506 20.3564 14.6506 24.2181 17.0325 26.6L18.2077 27.7752L26.8332 36.4007L35.4587 27.7752L36.6339 26.6C37.778 25.4564 38.4208 23.9049 38.4208 22.2872C38.4208 20.6695 37.778 19.1181 36.6339 17.9745Z" stroke="#FF8A00" stroke-width="2.17391" stroke-linecap="round" stroke-linejoin="round"/>
                    <circle cx="33.5" cy="30.5" r="5.5" fill="#FFF7EC"/>
                    <path d="M30 30.5H37" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                    <path d="M33.5 27L33.5 34" stroke="#FF8A00" stroke-width="2" stroke-linecap="round"/>
                  </svg>
                </button>
                ${
                  idx % 3 === 0 && idx != 0
                    ? `
                <div class="custom-card-badge">
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="56" height="57">
                    <path d="M0 0 C1.34135259 0.29943634 2.67317318 0.64164336 4 1 C7.34013474 0.99166009 10.66638632 0.87099077 14.00390625 0.7421875 C17 1 17 1 18.90234375 2.3203125 C20 4 20 4 20 7 C20.53625 7.061875 21.0725 7.12375 21.625 7.1875 C26.49362009 8.85308056 29.81626906 12.20721329 32.375 16.5625 C34.81651093 21.81881071 34.33997151 27.33380822 34 33 C35.32 33.33 36.64 33.66 38 34 C38.93619813 37.15506142 39.1057123 39.96586502 39.0625 43.25 C39.05347656 44.14203125 39.04445312 45.0340625 39.03515625 45.953125 C39.02355469 46.62859375 39.01195312 47.3040625 39 48 C37.140625 49.0546875 37.140625 49.0546875 35 50 C32.75 49.125 32.75 49.125 31 48 C31 48.66 31 49.32 31 50 C25.58461538 51.23076923 25.58461538 51.23076923 22.625 50.0625 C22.08875 49.711875 21.5525 49.36125 21 49 C20.505 49.99 20.505 49.99 20 51 C15.38258715 52.01724613 10.65703394 52.26279715 6 51.4375 C5.01 51.293125 4.02 51.14875 3 51 C2.34 51.66 1.68 52.32 1 53 C-1.53125 53.265625 -1.53125 53.265625 -4.5 53.25 C-5.4796875 53.25515625 -6.459375 53.2603125 -7.46875 53.265625 C-10 53 -10 53 -12 51 C-12.0450286 49.33394172 -12.03874921 47.66621616 -12 46 C-12.309375 44.700625 -12.309375 44.700625 -12.625 43.375 C-13 41 -13 41 -11 38 C-10.34 38 -9.68 38 -9 38 C-9.15726563 37.47921875 -9.31453125 36.9584375 -9.4765625 36.421875 C-10.95235917 29.59356206 -11.50902289 21.48629488 -7.75 15.375 C-6.16372699 13.23579754 -4.62462477 11.66413795 -2.625 9.875 C-1.820625 8.946875 -1.820625 8.946875 -1 8 C-1.32198966 4.90073181 -1.32198966 4.90073181 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#FF8B08" transform="translate(16,2)"/>
                    <path d="M0 0 C3.1875 0.171875 3.1875 0.171875 7 0.75 C8.8871875 1.02070312 8.8871875 1.02070312 10.8125 1.296875 C14 2 14 2 16 4 C16.125 7.625 16.125 7.625 16 11 C14.02 11.66 12.04 12.32 10 13 C11.32 13.66 12.64 14.32 14 15 C13.9071875 16.6396875 13.9071875 16.6396875 13.8125 18.3125 C13.57440657 21.9343601 13.57440657 21.9343601 15.5625 23.5 C16.036875 23.995 16.51125 24.49 17 25 C16.55555556 31.44444444 16.55555556 31.44444444 15 33 C9.72434608 33.45875252 9.72434608 33.45875252 7.125 31.8125 C5.65218861 29.43963721 5.77776806 27.74086056 6 25 C4.02 25.33 2.04 25.66 0 26 C0 27.65 0 29.3 0 31 C1.98 31.33 3.96 31.66 6 32 C5.67 32.66 5.34 33.32 5 34 C4.34 34 3.68 34 3 34 C3.79513336 37.78111288 5.39188139 40.7454145 7.2578125 44.09765625 C8 46 8 46 7 49 C5.02 48.34 3.04 47.68 1 47 C1 47.99 1 48.98 1 50 C-3.95 50.495 -3.95 50.495 -9 51 C-9.495 49.515 -9.495 49.515 -10 48 C-8.02 48.33 -6.04 48.66 -4 49 C-4 48.01 -4 47.02 -4 46 C-5.1446875 46.1546875 -5.1446875 46.1546875 -6.3125 46.3125 C-9 46 -9 46 -10.875 43.6875 C-12 41 -12 41 -11 38 C-10.34 38 -9.68 38 -9 38 C-9.15726563 37.47921875 -9.31453125 36.9584375 -9.4765625 36.421875 C-10.95235917 29.59356206 -11.50902289 21.48629488 -7.75 15.375 C-6.16372699 13.23579754 -4.62462477 11.66413795 -2.625 9.875 C-1.820625 8.946875 -1.820625 8.946875 -1 8 C-1.32198966 4.90073181 -1.32198966 4.90073181 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#FF8F0F" transform="translate(16,2)"/>
                    <path d="M0 0 C0.66 0 1.32 0 2 0 C2 0.99 2 1.98 2 3 C2.99 2.67 3.98 2.34 5 2 C5 5.3 5 8.6 5 12 C3.02 12.99 3.02 12.99 1 14 C-1.25 13.125 -1.25 13.125 -3 12 C-3 12.66 -3 13.32 -3 14 C-5.375 14.1875 -5.375 14.1875 -8 14 C-8.66 13.01 -9.32 12.02 -10 11 C-12.5 10.58333333 -12.5 10.58333333 -15 11 C-15.66 11.66 -16.32 12.32 -17 13 C-16.49202991 8.6822542 -15.80317221 4.96697886 -14 1 C-11.33264727 3.48952921 -9.44253657 5.63408134 -8 9 C-7.67 6.36 -7.34 3.72 -7 1 C-4.53199953 2.15173355 -2.95216435 3.04783565 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z " fill="#FF9014" transform="translate(50,38)"/>
                    <path d="M0 0 C2.5625 0.3125 2.5625 0.3125 4.4375 1.375 C6.22560335 4.45451133 5.30842606 6.95583273 4.5625 10.3125 C3.5625 11.3125 3.5625 11.3125 0.6875 11.5625 C-2.4375 11.3125 -2.4375 11.3125 -4.375 10.1875 C-5.4375 8.3125 -5.4375 8.3125 -5.25 5.25 C-4.27786515 1.7353586 -3.70860904 0.4754627 0 0 Z " fill="#FFF2E5" transform="translate(27.4375,23.6875)"/>
                    <path d="M0 0 C4.95 0.33 9.9 0.66 15 1 C15 3.31 15 5.62 15 8 C13.02 8.66 11.04 9.32 9 10 C10.32 10.66 11.64 11.32 13 12 C10.03 12 7.06 12 4 12 C3.67 10.68 3.34 9.36 3 8 C6.3 7.67 9.6 7.34 13 7 C13.33 5.68 13.66 4.36 14 3 C10.37 3 6.74 3 3 3 C2.67 4.32 2.34 5.64 2 7 C1.34 4.69 0.68 2.38 0 0 Z " fill="#FFEFDE" transform="translate(17,5)"/>
                    <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2.33 1.99 2.66 2.98 3 4 C4.65 4.33 6.3 4.66 8 5 C8 5.99 8 6.98 8 8 C5.03 7.505 5.03 7.505 2 7 C2.33 7.66 2.66 8.32 3 9 C3.763125 9 4.52625 9 5.3125 9 C7.20833333 9 9.10416667 9 11 9 C10.01 10.485 10.01 10.485 9 12 C5.5 12.3125 5.5 12.3125 2 12 C0 10 0 10 -0.0625 7.625 C-0.041875 6.75875 -0.02125 5.8925 0 5 C-0.185625 4.2575 -0.37125 3.515 -0.5625 2.75 C-0.706875 2.1725 -0.85125 1.595 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#FF8D0A" transform="translate(4,43)"/>
                    <path d="M0 0 C0.66 0 1.32 0 2 0 C2 3.63 2 7.26 2 11 C0.02 9.35 -1.96 7.7 -4 6 C-4.33 7.98 -4.66 9.96 -5 12 C-5.66 11.67 -6.32 11.34 -7 11 C-7 7.7 -7 4.4 -7 1 C-3 3 -3 3 -1 5 C-0.67 3.35 -0.34 1.7 0 0 Z " fill="#FFEEDB" transform="translate(50,38)"/>
                    <path d="M0 0 C0.66 0 1.32 0 2 0 C2 1.65 2 3.3 2 5 C2.66 5 3.32 5 4 5 C4.66 3.68 5.32 2.36 6 1 C6.99 1 7.98 1 9 1 C8.34 2.65 7.68 4.3 7 6 C7.495 6.45375 7.99 6.9075 8.5 7.375 C10 9 10 9 10 11 C7.50638429 9.79618552 5.31856917 8.54571278 3 7 C3 8.32 3 9.64 3 11 C2.34 11 1.68 11 1 11 C-0.28317892 7.15046324 -0.06643637 4.05261865 0 0 Z " fill="#FFEBD5" transform="translate(34,23)"/>
                    <path d="M0 0 C2.63249349 2.45699392 4.78137264 4.56568654 6 8 C5.67 8.99 5.34 9.98 5 11 C4.67 10.67 4.34 10.34 4 10 C1.54190002 9.7499227 1.54190002 9.7499227 -1 10 C-1.66 10.66 -2.32 11.32 -3 12 C-2.49202991 7.6822542 -1.80317221 3.96697886 0 0 Z " fill="#FFF1E3" transform="translate(36,39)"/>
                    <path d="M0 0 C3.63 0 7.26 0 11 0 C10.67 1.65 10.34 3.3 10 5 C7.03 5 4.06 5 1 5 C0.67 3.35 0.34 1.7 0 0 Z " fill="#FF8A04" transform="translate(20,8)"/>
                    <path d="M0 0 C3 1 3 1 4.75 3.875 C6 7 6 7 5 10 C3.02 9.34 1.04 8.68 -1 8 C-1 8.99 -1 9.98 -1 11 C-1.66 11 -2.32 11 -3 11 C-2.69217504 9.35328588 -2.37860766 7.70764424 -2.0625 6.0625 C-1.88847656 5.14597656 -1.71445312 4.22945312 -1.53515625 3.28515625 C-1 1 -1 1 0 0 Z " fill="#FFF5EB" transform="translate(18,41)"/>
                    <path d="M0 0 C1.4540625 0.0309375 1.4540625 0.0309375 2.9375 0.0625 C3.2675 2.0425 3.5975 4.0225 3.9375 6.0625 C1.6114143 6.44313221 -0.72305264 6.77519945 -3.0625 7.0625 C-4.0625 6.0625 -4.0625 6.0625 -4.1875 3.5625 C-4.00295237 -0.12845252 -3.76342282 0.07680455 0 0 Z " fill="#FF8A04" transform="translate(19.0625,26.9375)"/>
                    <path d="M0 0 C0.94875 0.04125 1.8975 0.0825 2.875 0.125 C2.875 0.785 2.875 1.445 2.875 2.125 C1.225 2.455 -0.425 2.785 -2.125 3.125 C-2.125 4.775 -2.125 6.425 -2.125 8.125 C0.845 8.62 0.845 8.62 3.875 9.125 C3.545 9.785 3.215 10.445 2.875 11.125 C2.215 11.125 1.555 11.125 0.875 11.125 C0.875 11.785 0.875 12.445 0.875 13.125 C-1.125 13.125 -1.125 13.125 -3.25 11.5625 C-5.77696289 8.27744824 -5.57459697 6.17137274 -5.125 2.125 C-3.125 0.125 -3.125 0.125 0 0 Z " fill="#FFF0DF" transform="translate(18.125,24.875)"/>
                    <path d="M0 0 C1.4540625 0.0309375 1.4540625 0.0309375 2.9375 0.0625 C2.6075 0.7225 2.2775 1.3825 1.9375 2.0625 C0.6175 1.7325 -0.7025 1.4025 -2.0625 1.0625 C-2.0625 2.0525 -2.0625 3.0425 -2.0625 4.0625 C-0.4125 4.3925 1.2375 4.7225 2.9375 5.0625 C3.5625 6.9375 3.5625 6.9375 3.9375 9.0625 C1.9375 11.0625 1.9375 11.0625 -0.6875 11.1875 C-1.47125 11.14625 -2.255 11.105 -3.0625 11.0625 C-3.3925 10.0725 -3.7225 9.0825 -4.0625 8.0625 C-1.0925 8.5575 -1.0925 8.5575 1.9375 9.0625 C1.9375 8.0725 1.9375 7.0825 1.9375 6.0625 C0.2875 6.0625 -1.3625 6.0625 -3.0625 6.0625 C-3.44468767 4.40635343 -3.77645102 2.73792976 -4.0625 1.0625 C-3.0625 0.0625 -3.0625 0.0625 0 0 Z " fill="#FFF1E2" transform="translate(10.0625,41.9375)"/>
                    <path d="M0 0 C2.625 0.375 2.625 0.375 5 1 C5.042721 2.66611905 5.04063832 4.33382885 5 6 C4 7 4 7 1.4375 7.0625 C0.2309375 7.0315625 0.2309375 7.0315625 -1 7 C-1.625 4.625 -1.625 4.625 -2 2 C-1.34 1.34 -0.68 0.68 0 0 Z " fill="#FF9113" transform="translate(26,26)"/>
                    <path d="M0 0 C2.05078125 0.03255208 4.1015625 0.06510417 6.15234375 0.09765625 C6.15234375 0.75765625 6.15234375 1.41765625 6.15234375 2.09765625 C5.16234375 2.09765625 4.17234375 2.09765625 3.15234375 2.09765625 C3.48234375 5.06765625 3.81234375 8.03765625 4.15234375 11.09765625 C3.16234375 11.09765625 2.17234375 11.09765625 1.15234375 11.09765625 C1.15234375 8.12765625 1.15234375 5.15765625 1.15234375 2.09765625 C-0.16765625 1.76765625 -1.48765625 1.43765625 -2.84765625 1.09765625 C-1.84765625 0.09765625 -1.84765625 0.09765625 0 0 Z " fill="#FFE7CD" transform="translate(25.84765625,39.90234375)"/>
                    <path d="M0 0 C4.62 0.66 9.24 1.32 14 2 C14 2.33 14 2.66 14 3 C10.37 3 6.74 3 3 3 C2.67 4.32 2.34 5.64 2 7 C1.34 4.69 0.68 2.38 0 0 Z " fill="#FFDBB3" transform="translate(17,5)"/>
                    <path d="M0 0 C1.32 1.32 2.64 2.64 4 4 C3.67 4.99 3.34 5.98 3 7 C1.35 6.67 -0.3 6.34 -2 6 C-1.34 4.02 -0.68 2.04 0 0 Z " fill="#FFD8AD" transform="translate(36,39)"/>
                    <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3.75 2.9375 3.75 2.9375 4 5 C3.67 5.66 3.34 6.32 3 7 C2.01 7 1.02 7 0 7 C-0.38133299 5.0085944 -0.71325582 3.00720923 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#FFD6A8" transform="translate(18,41)"/>
                  </svg>

                </div>
                `
                    : ""
                }
                ${
                  idx % 4 === 0
                    ? `
                <div class="custom-card-badge">
                   <?xml version="1.0" encoding="UTF-8"?>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="56" height="56">
                  <path d="M0 0 C2.375 0.3125 2.375 0.3125 5 1 C5.66 1.99 6.32 2.98 7 4 C8.98755275 4.65088771 8.98755275 4.65088771 11.25 4.9375 C15.58703989 5.7839223 18.57540383 7.08909325 22 10 C22.8125 12.0625 22.8125 12.0625 23 14 C23.495 15.485 23.495 15.485 24 17 C24.94875 16.95875 25.8975 16.9175 26.875 16.875 C30 17 30 17 32 19 C31.64700993 22.44165321 30.95418308 24.06872538 29 27 C29.99 27.33 30.98 27.66 32 28 C32.08226668 31.04386724 31.97608217 33.07175348 31 36 C31.24803853 39.07909903 31.64115947 42.12439743 32.0390625 45.1875 C32 48 32 48 30.5234375 49.875 C30.02070312 50.24625 29.51796875 50.6175 29 51 C27.35 50.34 25.7 49.68 24 49 C23.505 49.99 23.505 49.99 23 51 C22.05125 50.979375 21.1025 50.95875 20.125 50.9375 C17.09333717 50.77448174 17.09333717 50.77448174 15 52 C12.66666667 52 10.33333333 52 8 52 C6.515 52.495 6.515 52.495 5 53 C4.071875 52.7525 4.071875 52.7525 3.125 52.5 C0.41704613 51.86283438 -1.27666332 52.39481407 -4 53 C-12.01920719 54.46587658 -12.01920719 54.46587658 -15.5 52.8125 C-18.84210119 48.77412772 -18.16164324 44.01094035 -18 39 C-17.67 38.34 -17.34 37.68 -17 37 C-17.46723899 35.05845552 -17.46723899 35.05845552 -18.3125 33 C-18.57675781 32.29875 -18.84101563 31.5975 -19.11328125 30.875 C-19.9570995 28.81828259 -19.9570995 28.81828259 -22 27 C-21.625 24.375 -21.625 24.375 -21 22 C-19.68 21.67 -18.36 21.34 -17 21 C-17.103125 19.783125 -17.20625 18.56625 -17.3125 17.3125 C-17.29427237 13.87962999 -17.06382336 13.09174608 -15 10.125 C-11.78410833 7.84707673 -9.63622274 7.38683081 -5.87109375 6.66796875 C-2.54836927 5.48177692 -1.58060792 3.02949851 0 0 Z " fill="#FAC500" transform="translate(22,1)"/>
                  <path d="M0 0 C2.375 0.3125 2.375 0.3125 5 1 C5.66 1.99 6.32 2.98 7 4 C9.05408289 4.68654424 9.05408289 4.68654424 11.375 5 C18.14551625 6.38686381 18.14551625 6.38686381 20 9 C20.01092742 12.07060543 19.58057742 14.98983228 19 18 C16.69 18.33 14.38 18.66 12 19 C11.34 17.35 10.68 15.7 10 14 C8.55245745 15.44754255 8.44266439 17.03962913 8 19 C7.113125 18.814375 6.22625 18.62875 5.3125 18.4375 C2.14821189 18.01957516 0.05160358 18.19222258 -3 19 C-3.33 17.68 -3.66 16.36 -4 15 C-4.99 17.475 -4.99 17.475 -6 20 C-8.31 20.33 -10.62 20.66 -13 21 C-13.103125 20.38125 -13.20625 19.7625 -13.3125 19.125 C-13.87525373 16.63473516 -13.87525373 16.63473516 -17 15 C-17 13 -17 13 -15 10.5 C-12.11173201 8.09311001 -11.37381673 7.68553313 -7.9375 7.0625 C-5.50791244 6.5986279 -4.33321853 6.34435675 -2.59765625 4.55078125 C-1.35830351 2.71890157 -1.35830351 2.71890157 0 0 Z " fill="#FFCD0D" transform="translate(22,1)"/>
                  <path d="M0 0 C2 1.25 2 1.25 4 3 C4 4.32 4 5.64 4 7 C7.465 6.505 7.465 6.505 11 6 C10.67 6.66 10.34 7.32 10 8 C9.34 8 8.68 8 8 8 C8 11.3 8 14.6 8 18 C7.67 18 7.34 18 7 18 C6.71125 16.865625 6.4225 15.73125 6.125 14.5625 C5.75375 13.386875 5.3825 12.21125 5 11 C2.29120665 9.64560332 -0.00933268 9.93498549 -3 10 C-3 13.3 -3 16.6 -3 20 C-5.31 20 -7.62 20 -10 20 C-10.33 17.03 -10.66 14.06 -11 11 C-11.99 11.66 -12.98 12.32 -14 13 C-14.66 11.35 -15.32 9.7 -16 8 C-15.34 8 -14.68 8 -14 8 C-13.87625 7.21625 -13.7525 6.4325 -13.625 5.625 C-13 3 -13 3 -11 1 C-11 2.98 -11 4.96 -11 7 C-9.9275 6.649375 -8.855 6.29875 -7.75 5.9375 C-3.07692308 4.76923077 -3.07692308 4.76923077 0 6 C0 4.02 0 2.04 0 0 Z " fill="#FECB07" transform="translate(30,13)"/>
                  <path d="M0 0 C0.66 0 1.32 0 2 0 C2.144375 0.598125 2.28875 1.19625 2.4375 1.8125 C2.8872439 3.56150404 3.42892341 5.28677023 4 7 C5.423125 6.938125 5.423125 6.938125 6.875 6.875 C10 7 10 7 12 9 C12 9.99 12 10.98 12 12 C11.236875 12.45375 10.47375 12.9075 9.6875 13.375 C6.64444726 15.21498538 5.602824 16.87871115 4 20 C5.98 20 7.96 20 10 20 C6.86501708 21.85776765 4.62528568 22.20140476 1 22 C1.64544429 18.51460083 3.10134397 15.97180943 5 13 C2.03 12.505 2.03 12.505 -1 12 C-1 15.3 -1 18.6 -1 22 C-1.66 22 -2.32 22 -3 22 C-3.33 18.04 -3.66 14.08 -4 10 C-3.34 9.67 -2.68 9.34 -2 9 C-1.31270746 6.88153715 -1.31270746 6.88153715 -0.875 4.4375 C-0.70742188 3.61121094 -0.53984375 2.78492188 -0.3671875 1.93359375 C-0.24601562 1.29550781 -0.12484375 0.65742188 0 0 Z " fill="#EEB803" transform="translate(42,11)"/>
                  <path d="M0 0 C3.1875 0.3125 3.1875 0.3125 5.5625 2 C7.1875 4.3125 7.1875 4.3125 7.625 6.875 C7.1875 9.3125 7.1875 9.3125 6.125 11.125 C3.19481249 12.92092137 0.5402047 12.50227574 -2.8125 12.3125 C-3.00651633 10.50068595 -3.19254375 8.68801468 -3.375 6.875 C-3.47941406 5.86566406 -3.58382813 4.85632813 -3.69140625 3.81640625 C-3.73136719 2.99011719 -3.77132813 2.16382812 -3.8125 1.3125 C-2.8125 0.3125 -2.8125 0.3125 0 0 Z " fill="#BF8102" transform="translate(29.8125,21.6875)"/>
                  <path d="M0 0 C0.66 0 1.32 0 2 0 C2.66 0.99 3.32 1.98 4 3 C5.32 3.33 6.64 3.66 8 4 C7.34 6.97 6.68 9.94 6 13 C4.6078125 12.9690625 4.6078125 12.9690625 3.1875 12.9375 C-0.02286011 12.84230396 -0.02286011 12.84230396 -3 14 C-3.66 11.03 -4.32 8.06 -5 5 C-4.01 4.67 -3.02 4.34 -2 4 C-0.79117904 1.99983534 -0.79117904 1.99983534 0 0 Z " fill="#FFCC09" transform="translate(23,5)"/>
                  <path d="M0 0 C3 1 3 1 5 4 C7.55183404 5.20450304 7.55183404 5.20450304 10 6 C10 6.66 10 7.32 10 8 C10.66 8.66 11.32 9.32 12 10 C11.34 10 10.68 10 10 10 C9.67 10.66 9.34 11.32 9 12 C8.67 12.33 8.34 12.66 8 13 C7.63837971 14.32594105 7.30271961 15.65938457 7 17 C6.113125 16.814375 5.22625 16.62875 4.3125 16.4375 C1.14821189 16.01957516 -0.94839642 16.19222258 -4 17 C-5.19287411 13.12315913 -6 10.08378077 -6 6 C-5.01 5.67 -4.02 5.34 -3 5 C-1.30117552 2.50240018 -1.30117552 2.50240018 0 0 Z M0 2 C-0.268125 2.639375 -0.53625 3.27875 -0.8125 3.9375 C-2 6 -2 6 -5 7 C-4.34 9.97 -3.68 12.94 -3 16 C1.455 15.505 1.455 15.505 6 15 C6.66 12.03 7.32 9.06 8 6 C7.195625 5.71125 6.39125 5.4225 5.5625 5.125 C3 4 3 4 2 2 C1.34 2 0.68 2 0 2 Z " fill="#FFF4C9" transform="translate(23,3)"/>
                  <path d="M0 0 C0.99 0.33 1.98 0.66 3 1 C3 1.66 3 2.32 3 3 C3.99 3 4.98 3 6 3 C5.67 5.31 5.34 7.62 5 10 C2.69 10.33 0.38 10.66 -2 11 C-2.66 8.69 -3.32 6.38 -4 4 C-3.01 3.67 -2.02 3.34 -1 3 C-0.67 2.01 -0.34 1.02 0 0 Z " fill="#FFF1BE" transform="translate(11,11)"/>
                  <path d="M0 0 C1.98 0.66 3.96 1.32 6 2 C5.67 4.64 5.34 7.28 5 10 C2.69 10.33 0.38 10.66 -2 11 C-2.33 8.69 -2.66 6.38 -3 4 C-2.34 4 -1.68 4 -1 4 C-0.67 2.68 -0.34 1.36 0 0 Z " fill="#FFEDAB" transform="translate(36,9)"/>
                  <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 4.63 2 8.26 2 12 C-1.56311466 10.21844267 -3.35645475 8.83236991 -6 6 C-6 8.31 -6 10.62 -6 13 C-6.66 12.67 -7.32 12.34 -8 12 C-8 8.37 -8 4.74 -8 1 C-7.34 1 -6.68 1 -6 1 C-4.2856382 2.95927063 -2.61594832 4.95880212 -1 7 C-0.67 4.69 -0.34 2.38 0 0 Z " fill="#C28502" transform="translate(49,37)"/>
                  <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2.05399736 2.45792884 2.09279177 3.91642712 2.125 5.375 C2.14820313 6.18710937 2.17140625 6.99921875 2.1953125 7.8359375 C2 10 2 10 0 12 C-3.125 12.125 -3.125 12.125 -6 12 C-7.19287411 8.12315913 -8 5.08378077 -8 1 C-7.34 1 -6.68 1 -6 1 C-5.67 3.97 -5.34 6.94 -5 10 C-3.68 9.67 -2.36 9.34 -1 9 C-0.67 6.03 -0.34 3.06 0 0 Z " fill="#C58802" transform="translate(37,38)"/>
                  <path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 2.64 2.66 5.28 3 8 C4.32 8.33 5.64 8.66 7 9 C7 6.03 7 3.06 7 0 C7.66 0 8.32 0 9 0 C9.0270043 1.45823212 9.04639787 2.91660675 9.0625 4.375 C9.07410156 5.18710937 9.08570313 5.99921875 9.09765625 6.8359375 C9 9 9 9 8 11 C5.125 11.125 5.125 11.125 2 11 C0 9 0 9 -0.1953125 6.8359375 C-0.17210937 6.02382813 -0.14890625 5.21171875 -0.125 4.375 C-0.10695313 3.55773438 -0.08890625 2.74046875 -0.0703125 1.8984375 C-0.04710937 1.27195313 -0.02390625 0.64546875 0 0 Z " fill="#C18402" transform="translate(7,41)"/>
                  <path d="M0 0 C1.65 0 3.3 0 5 0 C5 3.3 5 6.6 5 10 C3.35 9.67 1.7 9.34 0 9 C0 6.03 0 3.06 0 0 Z " fill="#FEC900" transform="translate(9,40)"/>
                  <path d="M0 0 C2.64 0 5.28 0 8 0 C6.66511872 3.59391114 5.03977277 6.75490696 3 10 C4.98 10 6.96 10 9 10 C5.86501708 11.85776765 3.62528568 12.20140476 0 12 C0.64544429 8.51460083 2.10134397 5.97180943 4 3 C2.68 2.67 1.36 2.34 0 2 C0 1.34 0 0.68 0 0 Z " fill="#C08202" transform="translate(43,21)"/>
                  <path d="M0 0 C2.64 0 5.28 0 8 0 C8.33 1.65 8.66 3.3 9 5 C8.34 4.34 7.68 3.68 7 3 C4.42938689 2.35232207 4.42938689 2.35232207 2 2 C2 3.32 2 4.64 2 6 C3.32 6.33 4.64 6.66 6 7 C5.01 7 4.02 7 3 7 C3 8.32 3 9.64 3 11 C2.34 11 1.68 11 1 11 C-0.17571451 7.32589215 -0.07366746 3.83070817 0 0 Z " fill="#C08202" transform="translate(18,40)"/>
                  <path d="M0 0 C2.31 0 4.62 0 7 0 C5.35 3.3 3.7 6.6 2 10 C0 8 0 8 -0.1953125 6.0546875 C-0.13020833 4.03645833 -0.06510417 2.01822917 0 0 Z " fill="#FBC700" transform="translate(41,23)"/>
                  <path d="M0 0 C2.475 0.495 2.475 0.495 5 1 C5 2.98 5 4.96 5 7 C3.35 7.33 1.7 7.66 0 8 C0 5.36 0 2.72 0 0 Z " fill="#FBC700" transform="translate(29,24)"/>
                  <path d="M0 0 C0.66 0 1.32 0 2 0 C1.690625 0.680625 1.38125 1.36125 1.0625 2.0625 C-0.13370649 5.36965912 -0.59005397 8.51545878 -1 12 C-1.66 12 -2.32 12 -3 12 C-3.28875 11.113125 -3.5775 10.22625 -3.875 9.3125 C-4.83148748 6.49617576 -5.86798946 3.74916844 -7 1 C-4.525 1.99 -4.525 1.99 -2 3 C-1.34 2.01 -0.68 1.02 0 0 Z " fill="#C38602" transform="translate(10,24)"/>
                  <path d="M0 0 C1.65 0 3.3 0 5 0 C8 6.75 8 6.75 8 9 C7.01 8.67 6.02 8.34 5 8 C4.67 7.01 4.34 6.02 4 5 C1.98491642 4.26676204 1.98491642 4.26676204 0 4 C0 2.68 0 1.36 0 0 Z " fill="#DDA401" transform="translate(20,42)"/>
                  <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 3.97 2 6.94 2 10 C3.65 10 5.3 10 7 10 C7 10.66 7 11.32 7 12 C4.69 12 2.38 12 0 12 C-0.19401633 10.18818595 -0.38004375 8.37551468 -0.5625 6.5625 C-0.66691406 5.55316406 -0.77132813 4.54382813 -0.87890625 3.50390625 C-0.91886719 2.67761719 -0.95882813 1.85132812 -1 1 C-0.67 0.67 -0.34 0.34 0 0 Z " fill="#C48702" transform="translate(18,23)"/>
                  <path d="M0 0 C1.32 0.99 2.64 1.98 4 3 C3.34 4.32 2.68 5.64 2 7 C0.68 7 -0.64 7 -2 7 C-2 6.01 -2 5.02 -2 4 C-2.66 4 -3.32 4 -4 4 C-4 3.34 -4 2.68 -4 2 C-2.68 1.34 -1.36 0.68 0 0 Z " fill="#FFCE0F" transform="translate(37,11)"/>
                  <path d="M0 0 C2.475 0.99 2.475 0.99 5 2 C4.67 3.65 4.34 5.3 4 7 C2.35 7 0.7 7 -1 7 C-1.33 5.35 -1.66 3.7 -2 2 C-1.34 2 -0.68 2 0 2 C0 1.34 0 0.68 0 0 Z " fill="#FFCC08" transform="translate(11,13)"/>
                  <path d="M0 0 C3.125 0.25 3.125 0.25 5.0625 1.4375 C6.125 3.25 6.125 3.25 5.8125 5.9375 C5.585625 6.700625 5.35875 7.46375 5.125 8.25 C4.795 8.25 4.465 8.25 4.125 8.25 C3.795 6.6 3.465 4.95 3.125 3.25 C1.805 2.92 0.485 2.59 -0.875 2.25 C-1.205 3.24 -1.535 4.23 -1.875 5.25 C-2.865 5.745 -2.865 5.745 -3.875 6.25 C-3.917721 4.58388095 -3.91563832 2.91617115 -3.875 1.25 C-2.875 0.25 -2.875 0.25 0 0 Z " fill="#CE9301" transform="translate(29.875,21.75)"/>
                  <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C2 1.66 2 2.32 2 3 C2.66 3.66 3.32 4.32 4 5 C3.34 5 2.68 5 2 5 C1.67 5.66 1.34 6.32 1 7 C0.67 7.33 0.34 7.66 0 8 C-0.36162029 9.32594105 -0.69728039 10.65938457 -1 12 C-1.66 12 -2.32 12 -3 12 C-2.14285714 3.42857143 -2.14285714 3.42857143 0 0 Z " fill="#FFEFB1" transform="translate(31,8)"/>
                  <path d="M0 0 C0.66 0 1.32 0 2 0 C2.33 3.63 2.66 7.26 3 11 C2.34 11 1.68 11 1 11 C-0.20272819 8.59454362 -0.10071472 7.05003047 -0.0625 4.375 C-0.05347656 3.55773437 -0.04445313 2.74046875 -0.03515625 1.8984375 C-0.02355469 1.27195312 -0.01195312 0.64546875 0 0 Z " fill="#C48602" transform="translate(13,24)"/>
                  </svg>

                </div>
                `
                    : ""
                }
              </div>
              <div class="custom-card-content">
                <div class="custom-card-rating">
                  <div class="custom-stars">
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                    <span class="star">★</span>
                  </div>
                  <span class="custom-rating-count">(333)</span>
                </div>
                <h3 class="custom-card-title">
                  <b>${p.brand}</b> - ${p.name}
                </h3>
                <div class="custom-card-pricing">
                  ${
                    idx % 3 === 0
                      ? `
                  <div class="custom-card-price">
                    <div class="d-flex align-items-center">
                      <span class="custom-card-old-price">${(
                        p.price * 1.25
                      ).toLocaleString("tr-TR", {
                        minimumFractionDigits: 2,
                      })} TL</span>
                      <span class="custom-card-percent ml-2">%25 <i class="icon icon-decrease"></i></span>
                    </div>
                    <span class="custom-card-new-price discount-product">${p.price.toLocaleString(
                      "tr-TR",
                      { minimumFractionDigits: 2 }
                    )} TL</span>
                  </div>
                  `
                      : `
                  <div class="custom-current-price">${p.price.toLocaleString(
                    "tr-TR",
                    { minimumFractionDigits: 2 }
                  )} TL</div>
                  `
                  }
                </div>
              </div>
            </a>
            <button class="custom-card-add-to-cart">Sepete Ekle</button>
          </div>
        `;
      })
      .join("");

    wrapper.innerHTML = html;

    self.products.forEach((product) => {
      const button = wrapper.querySelector(`[data-product-id="${product.id}"]`);
      if (button) {
        self.updateFavoriteButton(button, product.id);
      }
    });
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

    document.addEventListener("click", (e) => {
      if (e.target.closest(".custom-favorite-btn")) {
        e.preventDefault();
        e.stopPropagation();

        const button = e.target.closest(".custom-favorite-btn");
        const productId = button.dataset.productId;

        if (productId) {
          self.toggleFavorite(productId);
          self.updateFavoriteButton(button, productId);
        }
      }
    });
  };

  self.getFavorites = () => {
    try {
      const favorites = localStorage.getItem("custom-favorites");
      return favorites ? JSON.parse(favorites) : [];
    } catch (e) {
      console.warn("Error reading favorites from localStorage:", e);
      return [];
    }
  };

  self.saveFavorites = (favorites) => {
    try {
      localStorage.setItem("custom-favorites", JSON.stringify(favorites));
    } catch (e) {
      console.warn("Error saving favorites to localStorage:", e);
    }
  };

  self.toggleFavorite = (productId) => {
    const favorites = self.getFavorites();
    const index = favorites.indexOf(productId);

    if (index > -1) {
      favorites.splice(index, 1);
    } else {
      favorites.push(productId);
    }

    self.saveFavorites(favorites);
  };

  self.isFavorite = (productId) => {
    const favorites = self.getFavorites();
    return favorites.includes(productId);
  };

  self.updateFavoriteButton = (button, productId) => {
    const isFav = self.isFavorite(productId);
    const normalHeart = button.querySelector(".normal-heart");
    const hoverHeart = button.querySelector(".hover-heart");

    if (isFav) {
      if (normalHeart) normalHeart.style.display = "none";
      if (hoverHeart) hoverHeart.style.display = "block";
      button.classList.add("is-favorite");
    } else {
      if (normalHeart) normalHeart.style.display = "block";
      if (hoverHeart) hoverHeart.style.display = "none";
      button.classList.remove("is-favorite");
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
