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
  const currPage = content.children[0];
  if (e.target.classList[0] == currPage.classList[0]) {
    return;
  } else {
    addTransition(content);
  }
  removeBtnClass();
  e.target.classList.add("active");

  const btnTxt = e.target.textContent.toLowerCase();
  content.addEventListener("transitionend", () => {
    for (const key in pages) {
      if (key.includes(btnTxt)) {
        removePage();
        addPage(pages, key);
        content.classList.remove("leave");
        break;
      }
    }
  });
}

function removePage() {
  content.removeChild(content.children[0]);
}

function addPage(list, page) {
  content.appendChild(list[page]);
}

function removeBtnClass() {
  const btn = document.body.querySelectorAll(".tab");
  btn.forEach((btn) => {
    btn.classList.remove("active");
  });
}

function addTransition(container) {
  console.log("hello");
  container.classList.add("leave");
}

function removeTransition(container) {
  console.log("inside");
  container.classList.add("enter");
}

function initPage() {
  const header = headerBanner();
  // content.appendChild(header);
  document.body.appendChild(header);
  const btn = document.body.querySelector(".homePage");
  content.appendChild(pages.homePage);
  // content.appendChild(pages.contactPage);
  btn.classList.add("active");
}

initPage();
document.body.addEventListener("click", changePage);
