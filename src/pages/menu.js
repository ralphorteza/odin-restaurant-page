import makeHeader from '../functions/header.js';
import makeBackground from '../functions/background.js';
import coffeeImg from '../assets/images/coffee.jpg';
import coffeeIcedImg from '../assets/images/iced-coffee.jpg';
import teaImg from '../assets/images/tea.jpg';
import teaIcedImg from '../assets/images/iced-tea.jpg';

const menuItem = (name, img) => {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('menu-item');
  
  const menuItemName = document.createElement('h3');
  menuItemName.textContent = name;
  itemContainer.appendChild(menuItemName);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  const image = document.createElement('img');
  image.src = img;
  imgContainer.appendChild(image);
  itemContainer.appendChild(imgContainer);

  return itemContainer;
};

const menu = () => {
  const content = document.getElementById('content');

  const header = makeHeader();
  content.appendChild(header);

  const background = makeBackground();
  content.appendChild(background);

  const menuCoffee = menuItem("coffee", coffeeImg);
  content.appendChild(menuCoffee);

  const menuCoffeeIced = menuItem("iced-coffee", coffeeIcedImg);
  content.appendChild(menuCoffeeIced);

  const menuTea = menuItem("tea", teaImg);
  content.appendChild(menuTea);

  const menuTeaIced = menuItem("iced-coffee", teaIcedImg);
  content.appendChild(menuTeaIced); 
};

export default menu;