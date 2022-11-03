import './style.css';
import home from "./pages/home";
import menu from './pages/menu';
import contact from './pages/contact';
import init from './functions/init';
import wipe from './functions/wipe';

//home();
//hours();
//contact();

init();

const homeButton = document.querySelector('#home');
const menuButton = document.querySelector('#menu');
const contactButton = document.querySelector('#contact');

/* homeButton.addEventListener('click', function(){
  wipe();
  home();
});

menuButton.addEventListener('click', function(){
  wipe();
  menu();
});

contactButton.addEventListener('click', function(){
  wipe();
  contact();
});
 */


/* TODO: figure out how to switch between pages! */
homeButton.addEventListener('click', home);

menuButton.addEventListener('click', menu);

contactButton.addEventListener('click', contact);
