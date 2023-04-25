function headerBanner() {
  const header = document.createElement("section");
  header.classList.add("header");

  const logoName = document.createElement("h1");
  logoName.classList.add("logoName");
  logoName.textContent = "The Best Restaurant";
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
  contactTab.appendChild(contactTabLink);
  navLinks.appendChild(homeTab);
  navLinks.appendChild(menuTab);
  navLinks.appendChild(contactTab);
  header.appendChild(logoName);
  header.appendChild(navLinks);
  return header;
}

export { headerBanner };
