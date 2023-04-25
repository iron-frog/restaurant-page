import "./style.css";
import { headerBanner } from "./headerBanner";
import { home } from "./home";
import { menu } from "./menu";
import { contact } from "./contact";

const content = document.getElementById("content");

const pages = {
  homePage: home(),
  menuPage: menu(),
  contactPage: contact(),
};

function changePage(e) {
  if (!e.target.matches("button")) {
    return;
  }
  removeClass();
  const btnTxt = e.target.textContent.toLowerCase();
  for (const key in pages) {
    if (key.includes(btnTxt)) {
      removePage();
      addPage(pages, key);
      if (e.target.classList[0] === key) {
        e.target.classList.add("active");
      }
      break;
    }
  }
}

function removePage() {
  content.removeChild(content.children[1]);
}

function addPage(list, page) {
  content.appendChild(list[page]);
}

function removeClass() {
  const btn = content.querySelectorAll(".tab");
  btn.forEach((btn) => {
    btn.classList.remove("active");
  });
  console.log("hhh");
}

function initPage() {
  const header = headerBanner();
  content.appendChild(header);
  const btn = content.querySelector(".homePage");
  content.appendChild(pages.homePage);
  btn.classList.add("active");
}

initPage();
content.addEventListener("click", changePage);
