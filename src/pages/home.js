import backgroundImg from '../assets/images/background-img.jpg'



const headerFactory = () => {
  const header = document.createElement('div');
  header.classList.add("header");
  
  const restaurantName = document.createElement('h1');
  restaurantName.textContent = "Phool'z Coffee"
  header.appendChild(restaurantName);

  const restaurantSlogan = document.createElement('h3');
  restaurantSlogan.textContent = "The best in the Bay Area!";
  header.appendChild(restaurantSlogan);

  return header;
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
  
  const header = headerFactory();
  content.appendChild(header);

  const imgContainer = backGroundImg();
  content.appendChild(imgContainer);
}


export default home;