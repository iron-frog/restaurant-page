function menu() {
  const section = document.createElement("section");
  section.classList.add("menuPage");

  const menu = document.createElement("div");
  menu.classList.add("menu");
  const h2 = document.createElement("h2");
  h2.textContent = "MENU";
  const menuImg = document.createElement("img");
  menuImg.classList.add("menuImg");

  const menuItem = document.createElement("p");
  menuItem.classList.add("menuItem");

  menuItem.appendChild(createItem("Edamame", "£4.00"));
  menuItem.appendChild(createItem("Takoyaki", "£7.00"));
  menuItem.appendChild(createItem("Pork Gyoza", "£7.00"));
  menuItem.appendChild(createItem("Salmon Sashimi (3pcs)", "£4.00"));
  menuItem.appendChild(createItem("Tuna Sashimi (3pcs)", "£4.00"));
  menuItem.appendChild(createItem("Chicken Katsu Curry", "£8.50"));
  menuItem.appendChild(createItem("Tonkotsu Ramen", "£11.00"));
  menuItem.appendChild(createItem("Tsukemen", "£11.00"));

  menu.appendChild(h2);
  menu.appendChild(menuImg);
  menu.appendChild(menuItem);
  section.appendChild(menu);

  return section;
}

function createItem(name, price) {
  const item = document.createElement("p");
  const itemPrice = document.createElement("p");
  item.textContent = name;
  itemPrice.textContent = price;
  const itemGroup = document.createElement("div");
  itemGroup.appendChild(item);
  itemGroup.appendChild(itemPrice);

  return itemGroup;
}
export { menu };
