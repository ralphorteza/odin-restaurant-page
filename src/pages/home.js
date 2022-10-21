import makeHeader from '../functions/header.js';
import makeBackground from '../functions/background.js';

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

const home = function() {
  const content = document.getElementById('content');
  
  const header = makeHeader();
  content.appendChild(header);

  const splash = createSplash();
  content.appendChild(splash);

  const backgroundImg = makeBackground();
  content.appendChild(backgroundImg);
}


export default home;