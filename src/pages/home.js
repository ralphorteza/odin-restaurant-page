import makeHeader from '../functions/header.js';
import makeBackground from '../functions/background.js';
import storeHoursImg from "../assets/images/store-hours.png";
import wipe from '../functions/wipe';

const createSplash = () => {
  const splash = document.createElement('div');
  splash.classList.add("splash");
  
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = "Phool'z Coffee"
  splash.appendChild(restaurantName);

  const restaurantSlogan = document.createElement('h3');
  restaurantSlogan.textContent = "The best in the Bay Area!";
  splash.appendChild(restaurantSlogan);

  return splash;
};

const displayHoursImg = () => {
  const hoursContainer =  document.createElement('div');
  hoursContainer.classList.add("hours-container");
  const hoursImg = document.createElement('img');
  hoursImg.src = storeHoursImg;
  hoursContainer.appendChild(hoursImg);

  return hoursContainer;
};


const home = () => {
  wipe();
  const content = document.getElementById('content');

  const backgroundImg = makeBackground();
  content.appendChild(backgroundImg);
  
  const header = makeHeader();
  content.appendChild(header);

  const splash = createSplash();
  content.appendChild(splash);

  const hours = displayHoursImg();
  content.appendChild(hours);
};


export default home;