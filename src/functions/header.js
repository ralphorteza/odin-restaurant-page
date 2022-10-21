













const makeHeader = () => {
  const header = document.createElement('div');
  header.classList.add("header");

  const nav = document.createElement('div');
  nav.classList.add("nav");
  header.appendChild(nav);

  const homeBtn = document.createElement('button');
  nav.appendChild(homeBtn);

  const hoursBtn = document.createElement('button');
  nav.appendChild(hoursBtn);

  const contactBtn = document.createElement('button');
  nav.appendChild(contactBtn);

  return header;
};

export default  makeHeader;