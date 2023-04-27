function contact() {
  console.log("contact");
  const section = document.createElement("section");
  section.classList.add("contactPage");

  const hero = document.createElement("div");
  hero.classList.add("contact");

  const contact = document.createElement("h2");
  contact.textContent = "Contact";

  const aLabel = document.createElement("p");
  aLabel.textContent = "Address:";

  const address = document.createElement("p");
  address.textContent = "10 High St, London, E14 6BP";

  const nLabel = document.createElement("p");
  nLabel.textContent = "Number:";

  const number = document.createElement("p");
  number.textContent = "+44 (0) 9876543210";

  const eLabel = document.createElement("p");
  eLabel.textContent = "Email:";
  const email = document.createElement("p");
  email.textContent = "+44(0)9876543210";

  aLabel.classList.add("contactLabel");
  nLabel.classList.add("contactLabel");
  eLabel.classList.add("contactLabel");

  const addressGroup = document.createElement("div");
  const numberGroup = document.createElement("div");
  const emailGroup = document.createElement("div");

  hero.appendChild(contact);
  addressGroup.appendChild(aLabel);
  addressGroup.appendChild(address);
  numberGroup.appendChild(nLabel);
  numberGroup.appendChild(number);
  emailGroup.appendChild(eLabel);
  emailGroup.appendChild(email);

  hero.appendChild(addressGroup);
  hero.appendChild(numberGroup);
  hero.appendChild(emailGroup);

  section.appendChild(hero);
  section.appendChild(openHrs());
  return section;
}

function openHrs() {
  const hours = document.createElement("div");
  hours.classList.add("hours");
  hours.innerHTML =
    "<h2>Opening Times</h2><p class='days'><span>Mon - Sat</span><span>5:00pm - 11:00pm</span></p><p class='days'><span>Sun:</span><span>CLOSED</span></p>";
  return hours;
}

export { contact };
