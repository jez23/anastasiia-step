// ################ SERVICES ###############

$(".menu-services").on("click", "button", function () {
  $(this).addClass("active").siblings().removeClass("active");
  let id = this.innerText.replace(/ /, "-").toLowerCase();
  $(`#${id}`).addClass("active").siblings().removeClass("active");
});
// ###########PEOPLE####################

const nextBtn = document.querySelector(".arrow.right");
const prevBtn = document.querySelector(".arrow.left");
let clientItems = document.querySelectorAll(".img-people");
let anna = document.querySelector("#anna");
let artem = document.querySelector("#artem");
let hasan = document.querySelector("#hasan");
let olga = document.querySelector("#olga");

let startIndex = 0;

prevBtn.addEventListener("click", () => {
  if (startIndex > 0) {
    leftOrRight("left");
  }
});

nextBtn.addEventListener("click", () => {
  if (startIndex < clientItems.length - 1) {
    leftOrRight("right");
  }
});

const leftOrRight = (direction) => {
  direction === "left" ? startIndex-- : startIndex++;

  let imageArray = Array.from(clientItems);

  imageArray.forEach((photo, index) => {
    index === startIndex
      ? photo.classList.add("active")
      : photo.classList.remove("active");
  });

  const peopleArray = { anna, artem, hasan, olga };

  for (const person in peopleArray) {
    peopleArray[person].classList.remove("active");
  }

  const active = peopleArray[imageArray[startIndex].classList[1]];
  active.classList.add("active");
};

// ##############OUR AMAZING WORK####################
// const ourWorkTab = document.querySelector(".work-menu-wrap");
// ourWorkTab.addEventListener("click", (event) => {
//   if (event.target.tagName === "BUTTON") {
//     changeOurWork(event);
//   }
// });

// const changeOurWork = (event) => {
//   let workContent = document.querySelector(".work-content");
//   let contentItems = document.querySelectorAll(".work-content .item");
//   let className = event.target.innerText.replace(/ /, "_").toLowerCase();
//   for (const item of contentItems) {
//     if (!item.classList.contains(`${className}`)) {
//       item.classList.remove("active");
//       workContent.style.width = "900px";
//     }
//     if (item.classList.contains(`${className}`)) {
//       item.classList.add("active");
//     }
//     if (className === "all") {
//       item.classList.add("active");
//       workContent.style.width = "";
//     }
//   }
//   let tabMenu = document.querySelectorAll(".work-menu-wrap>button");
//   for (const item of tabMenu) {
//     if (item.classList.contains("active")) {
//       item.classList.remove("active");
//     }
//   }
//   if (!event.target.classList.contains("active")) {
//     event.target.classList.add("active");
//   }
// };

// const loadMore = document.querySelector(".button-load");
// loadMore.addEventListener("click", () => {
//   let activeBtn = document.querySelector("#all");
//   activeBtn.click();
//   let workContent = document.querySelector(".our-amazing-work");
//   workContent.insertAdjacentHTML(
//     "beforeend",
//     `<div class="item web_design active">
//  <div class="hover-menu">
//  <div class="hover-buttons">
//    <button class="small-button1">
//      <img src="./images/Combined-shape-7431.svg" alt="">
//    </button>
//    <button class="small-button2">
//      <div class="cube">
//      </div>
//    </button>
//  </div>
//  <p class="hover-title">Creative design</p>
//  <p class="hover-text">Web Design</p>
//  </div>
// <img src="./images/work/Layer 24.png" alt="">
// </div>

// <div class="item graphic_design active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 25.png" alt="">
// </div>

// <div class="item graphic_design active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 26.png" alt="">
// </div>

// <div class="item landing_pages active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 27.png" alt="">
// </div>

// <div class="item wordpress active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 28.png" alt="">
// </div>

// <div class="item graphic_design active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 29.png" alt="">
// </div>

// <div class="item web_design active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 30.png" alt="">
// </div>

// <div class="item landing_pages active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 31.png" alt="">
// </div>

// <div class="item wordpress active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 32.png" alt="">
// </div>

// <div class="item wordpress active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 33.png" alt="">
// </div>

// <div class="item web_design active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 34.png" alt="">
// </div>

// <div class="item landing_pages active">
//  <div class="hover-menu">
//    <div class="hover-buttons">
//      <button class="small-button1">
//          <img src="./images/Combined-shape-7431.svg" alt="">
//        </button>
//        <button class="small-button2">
//          <div class="cube">
//        </div>
//      </button>
//    </div>
//    <p class="hover-title">Creative design</p>
//    <p class="hover-text">Web Design</p>
//    </div>
// <img src="./images/work/Layer 24.png" alt="">
// </div>`
//   );
//   let contentItems = document.querySelectorAll(".work-content .item");
//   for (const item of contentItems) {
//     console.log(item.classList.contains("active"));
//   }
//   loadMore.remove();
// });
