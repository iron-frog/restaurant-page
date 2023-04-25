import "./style.css";
import { headerBanner } from "./headerBanner";
import { home } from "./home";

const content = document.getElementById("content");
const header = headerBanner();
content.appendChild(header);
content.appendChild(home());
