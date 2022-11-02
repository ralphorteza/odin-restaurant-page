import makeHeader from '../functions/header.js';
import makeBackground from '../functions/background.js';
import coffeeImg from '../assets/images/coffee.jpg';
import coffeeIcedImg from '../assets/images/iced-coffee.jpg';
import teaImg from '../assets/images/tea.jpg';
import teaIcedImg from '../assets/images/iced-tea.jpg';

const loremIpos = () => {
  const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  return str;
}

const menuItem = (name, price, img, desc) => {
  const itemContainer = document.createElement('div');
  itemContainer.classList.add('menu-item');
  
  // image container for menu item
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  const image = document.createElement('img');
  image.src = img;
  imgContainer.appendChild(image);
  itemContainer.appendChild(imgContainer);
  
  // item description holder for menu
  const menuItemDisc = document.createElement('div');
  menuItemDisc.classList.add('item-descriptor');
  itemContainer.appendChild(menuItemDisc);

  const menuItemName = document.createElement('h2');
  menuItemName.textContent = name;
  menuItemDisc.appendChild(menuItemName);

  const menuItemPrice = document.createElement('h3');
  menuItemPrice.textContent = price;
  menuItemDisc.appendChild(menuItemPrice);

  const description = document.createElement('p');
  description.setAttribute('class', 'item-description');
  description.textContent = desc;
  menuItemDisc.appendChild(description);

  return itemContainer;
};

const menuContainer = () => {
  const container =  document.createElement('div');
  container.classList.add('menu-items');

  const lorem = loremIpos();
    
  const menuCoffee = menuItem('coffee', '$4', coffeeImg, lorem.substring(0, 125));
  container.appendChild(menuCoffee);

  return container;
};

const menu = () => {
  const content = document.getElementById('content');

  const header = makeHeader();
  content.appendChild(header);

  const background = makeBackground();
  content.appendChild(background);

  const menuItems = menuContainer();
  content.appendChild(menuItems);
};

export default menu;