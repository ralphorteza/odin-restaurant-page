import './style.css';
import home from "./pages/home";
import menu from './pages/menu';
import contact from './pages/contact';
import init from './functions/init';
import wipe from './functions/wipe';
import createHeader from './functions/header';
import createBackGround from './functions/background';


const navigate = () => {
  const homeButton = document.querySelector('#home');
  const menuButton = document.querySelector('#menu');
  const contactButton = document.querySelector('#contact');
  homeButton.addEventListener('click', () => {
    wipe();
    home();
  });
  menuButton.addEventListener('click', () => {
    wipe();
    menu();
  });
  contactButton.addEventListener('click', () => {
    wipe();
    contact();
  });
};

const page = () => {
  const content = document.querySelector('#content');
  const main = document.createElement('div');

  const background = createBackGround();
  content.appendChild(background);

  const header = createHeader();
  content.appendChild(header)

  main.setAttribute('id', 'main');
  content.appendChild(main);
  
  const nav = navigate();
  init();
}

page();