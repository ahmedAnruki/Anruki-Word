const section = document.querySelectorAll("section");

function display(parameter) {
  section.forEach((section) => (section.style.display = "none"));
  parameter.style.display = "block";
}

const links = document.querySelectorAll("nav ul li");

links.forEach(function (ele) {
  ele.onclick = function () {
    links.forEach(function (e) {
      e.classList.remove("active");
    });
    this.classList.add("active");
  };
});

const weather = document.querySelector(".weather");
const weatherIcons = document.querySelector(".weather i");

weather.addEventListener("click", function () {
  weatherIcons.classList.toggle("fa-moon");
  weatherIcons.classList.toggle("fa-sun");
  if (weatherIcons.classList.contains("fa-moon")) {
    document.body.style.cssText = "background-color: var(--Light--); color: var(--Dark--);";
    document.querySelector(".home .waving").style.backgroundColor = "var(--Primary--)";
  } else {
    document.body.style.cssText = " background-color: var(--Dark--); color: var(--Light--);";
    document.querySelector(".home .waving").style.backgroundColor = "var(--Secondary--)";
  }
});

const upBtn = document.getElementById("up-btn");

window.onscroll = () =>
  window.scrollY >= 500
    ? (upBtn.style.display = "block")
    : (upBtn.style.display = "none");