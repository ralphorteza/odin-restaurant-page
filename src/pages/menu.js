import coffeeImg from '../assets/images/coffee.jpg';
import coffeeIcedImg from '../assets/images/iced-coffee.jpg';
import teaImg from '../assets/images/tea.jpg';
import teaIcedImg from '../assets/images/iced-tea.jpg';

const loremIpos = (wordCount) => {
  const str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
  
  const trimmedStr = str.substring(0, wordCount);
  const resultStr = trimmedStr.substring(0,
    Math.min(trimmedStr.length, trimmedStr.lastIndexOf(" ")));

  return resultStr;
}

const itemDescription = (name, price, desc) => {
  const menuItemDisc = document.createElement('div');
  menuItemDisc.classList.add('item-descriptor');

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

  return menuItemDisc;
};

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

  // container for menu item description
  const itemDescContainer = itemDescription(name, price, desc);
  itemContainer.appendChild(itemDescContainer);

  return itemContainer;
};

const menuContainer = () => {
  const container =  document.createElement('div');
  container.classList.add('menu-items');
    
  const menuCoffee = menuItem('coffee', '$4', coffeeImg, loremIpos(125));
  container.appendChild(menuCoffee);

  const menuCoffeeIced = menuItem('iced coffee', '$4.5', coffeeIcedImg, loremIpos(239));
  container.appendChild(menuCoffeeIced);

  const menuTea = menuItem('tea', '$3', teaImg, loremIpos(150));
  container.appendChild(menuTea);

  const menuTeaIced = menuItem('iced tea', '$3.5', teaIcedImg, loremIpos(200));
  container.appendChild(menuTeaIced);
  
  return container;
};

const createBanner = () => {
  const banner = document.createElement('div');
  banner.classList.add("menu-banner");
  
  const contactUs = document.createElement('h2');
  contactUs.textContent = "Menu"
  banner.appendChild(contactUs);

  return banner;
};

const menu = () => {
  const main = document.getElementById('main');
  const banner = createBanner();
  main.appendChild(banner);
  const menuItems = menuContainer();
  main.appendChild(menuItems);
};

export default menu;