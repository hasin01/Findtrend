const closeMobBtn = document.querySelector(".mob-menu-close-btn");
const mobMenu = document.querySelector(".mob-menu ");
const openMobBtn = document.querySelector(".mob-menu-open-btn");

closeMobBtn.addEventListener("click", () => {
  mobMenu.classList.add("is-hidden");
});

openMobBtn.addEventListener("click", () => {
  mobMenu.classList.remove("is-hidden");
});



