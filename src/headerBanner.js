function headerBanner() {
  const header = document.createElement("section");
  header.classList.add("header");

  const logoGroup = document.createElement("div");
  logoGroup.classList.add("logoGroup");
  const logoName = document.createElement("h1");
  logoName.classList.add("logoName");
  logoName.textContent = "The Best";
  const logoImg = document.createElement("img");

  const navLinks = document.createElement("ul");
  navLinks.classList.add("navLinks");
  const homeTab = document.createElement("li");
  const homeTabLink = document.createElement("button");
  homeTabLink.textContent = "Home";
  homeTab.appendChild(homeTabLink);
  const menuTab = document.createElement("li");
  const menuTabLink = document.createElement("button");
  menuTabLink.textContent = "Menu";
  menuTab.appendChild(menuTabLink);
  const contactTab = document.createElement("li");
  const contactTabLink = document.createElement("button");
  contactTabLink.textContent = "Contact";

  homeTabLink.classList.add("homePage");
  menuTabLink.classList.add("menuPage");
  contactTabLink.classList.add("contactPage");

  homeTabLink.classList.add("tab");
  menuTabLink.classList.add("tab");
  contactTabLink.classList.add("tab");

  contactTab.appendChild(contactTabLink);
  navLinks.appendChild(homeTab);
  navLinks.appendChild(menuTab);
  navLinks.appendChild(contactTab);
  logoGroup.appendChild(logoImg);
  logoGroup.appendChild(logoName);
  header.appendChild(logoGroup);
  header.appendChild(navLinks);
  return header;
}

export { headerBanner };
