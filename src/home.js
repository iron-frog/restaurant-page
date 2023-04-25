function home() {
  const section = document.createElement("section");
  section.classList.add("container");
  const h2 = document.createElement("h1");
  h2.textContent = "Hellllloooooo";
  section.appendChild(h2);
  return section;
}

export { home };
