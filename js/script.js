const themeButton = document.querySelector("#theme-toggle");
const sun = document.querySelector(".sun");
const moon = document.querySelector(".moon");
const slider = document.querySelector(".theme-slider");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("light-theme");

  if (document.body.classList.contains("light-theme")) {
    sun.classList.add("active");
    moon.classList.remove("active");
    slider.style.transform = "translateX(0)";
  } else {
    moon.classList.add("active");
    sun.classList.remove("active");
    slider.style.transform = "translateX(2.5rem)";
  }
});
