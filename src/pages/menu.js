import makeHeader from '../functions/header.js';
import makeBackground from '../functions/background.js';

const menu = () => {
  const content = document.getElementById('content');

  const header = makeHeader();
  content.appendChild(header);

  const background = makeBackground();
  content.appendChild(background);

  const checkMenu = document.createElement('div');
  checkMenu.textContent = "inside menu page!";
  content.appendChild(checkMenu);
};

export default menu;