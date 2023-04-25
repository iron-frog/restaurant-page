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
// const homePage = home();
// const menuPage = menu();
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
  //   if (btnTxt.includes(homePage.classList.value)) {
  //     removePage();
  //     console.log("match");
  //     content.
  //   }

  //   console.log(e.target);
  //   console.log(homePage);
  //   content.removeChild(homePage);
  //   content.appendChild(menu());
}

function removePage() {
  content.removeChild(content.children[1]);
}

function addPage(list, page) {
  content.appendChild(list[page]);
}

content.addEventListener("click", hello);