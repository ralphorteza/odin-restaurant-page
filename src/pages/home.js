import backgroundImg from '../assets/images/background-img.jpg'



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

const backGroundImg = () => {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  const bgImage = document.createElement('img');
  bgImage.src = backgroundImg;
  imgContainer.appendChild(bgImage);
  
  return imgContainer;
};

const home = function() {
  const content = document.getElementById('content');
  
  const splash = createSplash();
  content.appendChild(splash);

  const imgContainer = backGroundImg();
  content.appendChild(imgContainer);
}


export default home;