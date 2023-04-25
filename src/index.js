import "./style.css";
import { headerBanner } from "./headerBanner";
import { home } from "./home";
import { menu } from "./menu";

const content = document.getElementById("content");

const pages = {
  homePage: home(),
  menuPage: menu(),
};
const header = headerBanner();
content.appendChild(header);
content.appendChild(pages.homePage);

function hello(e) {
  if (!e.target.matches("button")) {
    return;
  }
  const btnTxt = e.target.textContent.toLowerCase();
  for (const key in pages) {
    if (key.includes(btnTxt)) {
      removePage();
      addPage(pages, key);
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

content.addEventListener("click", hello);
