const menu = document.getElementById("menu");
const aboutPage = document.getElementById("aboutPage");

function openPage(page) {
  menu.classList.add("hidden");
  if (page === "about") {
    aboutPage.classList.remove("hidden");
  }
}

function closePage() {
  aboutPage.classList.add("hidden");
  menu.classList.remove("hidden");
}
