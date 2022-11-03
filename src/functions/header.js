const makeHeader = () => {
  const header = document.createElement('div');
  header.classList.add("header");

  const nav = document.createElement('div');
  nav.classList.add("nav");
  header.appendChild(nav);

  const homeBtn = document.createElement('button');
  homeBtn.setAttribute('id', 'home');
  homeBtn.textContent = "Home";
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('button');
  menuBtn.setAttribute('id', 'menu');
  menuBtn.textContent = "Menu";
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('button');
  contactBtn.setAttribute('id', 'contact');
  contactBtn.textContent = "Contact";
  nav.appendChild(contactBtn);

  return header;
};

export default  makeHeader;