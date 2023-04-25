function home() {
  const section = document.createElement("section");
  section.classList.add("homeContainer");

  const hero = document.createElement("div");
  hero.classList.add("hero");

  const logo = document.createElement("img");

  const h2 = document.createElement("h2");
  h2.innerHTML = "<span>JAPANESE</span> RESTAURANT AND BAR";

  const description = document.createElement("p");
  description.textContent =
    "We are dedicated to authentic Japanese cuisine, and our restaurant is a haven for those seeking an exquisite dining experience that celebrates the beauty and precision of Japanese culinary arts. Our team of expert chefs take pride in crafting every dish with the finest and freshest ingredients available. \n\nWhether you're a sushi aficionado or a lover of classic Japanese dishes like ramen and tempura, our menu is sure to satisfy your cravings.";
  hero.appendChild(h2);
  hero.appendChild(description);
  hero.appendChild(logo);
  section.appendChild(hero);

  return section;
}

export { home };
