function changeName() {
  if (username.value !== "") {
    localStorage.setItem("UserName", username.value);
    username.value = "";
  }

  if (localStorage.getItem("UserName")) {
    document.querySelector(
      ".settings .user-name"
    ).innerHTML = `User Name Is: ' ${localStorage.getItem("UserName")} '`;
    document.querySelector(".home .user-name").innerHTML =
      localStorage.getItem("UserName");
  }
}

if (localStorage.getItem("UserName")) {
  document.querySelector(
    ".settings .user-name"
  ).innerHTML = `User Name Is: ' ${localStorage.getItem("UserName")} '`;
  document.querySelector(".home .user-name").innerHTML =
    localStorage.getItem("UserName");
}

let preview = document.querySelector(".settings .user-image");
let homeImg = document.querySelector(".my-img-box img");

function changeImg(event) {
  if (event.target.files.length > 0) {
    var src = URL.createObjectURL(event.target.files[0]);
    preview.src = src;
    console.log(src);
    localStorage.setItem("User image", src);
  }

  if (localStorage.getItem("User image")) {
    preview.src = localStorage.getItem("User image");
    homeImg.src = localStorage.getItem("User image");
  }
}

if (localStorage.getItem("User image")) {
  preview.src = localStorage.getItem("User image");
  homeImg.src = localStorage.getItem("User image");
}

let primary
let color = document.querySelectorAll(".settings .color");
let primaryColor = document.querySelector(".settings .primary-color div");

color.forEach((box) =>
  box.addEventListener("click", (ele) => {
    color.forEach((box) => box.classList.remove("active"));
    ele.currentTarget.classList.add("active");
    localStorage.setItem("Primary Color", ele.currentTarget.dataset.color);
    primaryColor.style.backgroundColor = ele.currentTarget.dataset.color;
    document.querySelector("style").innerText = `:root { --Primary--: ${localStorage.getItem("Primary Color")};}`;
    // document.styleSheets[0].cssRules[0].style.removeProperty("--Primary--");
    // document.styleSheets[0].cssRules[0].style.setProperty(
    //   "--Primary--",
    //   localStorage.getItem("Primary Color")
    // );
  })
);

if (localStorage.getItem("Primary Color")) {
  primaryColor.style.backgroundColor = localStorage.getItem("Primary Color");
  document.querySelector("style").innerText = `:root { --Primary--: ${localStorage.getItem("Primary Color")};}`;
}

// if (localStorage.getItem("Primary Color")) {
//   primaryColor.style.backgroundColor = localStorage.getItem("Primary Color");
//   document.styleSheets[0].cssRules[0].style.removeProperty("--Primary--");
//   document.styleSheets[0].cssRules[0].style.setProperty("--Primary--", localStorage.getItem("Primary Color"));
// }
