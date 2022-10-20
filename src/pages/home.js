import backgroundImg from '../assets/images/background-img.jpg'



const headerFactory = () => {
  const header = document.createElement('div');
  header.classList.add("header");
  header.textContent = "Here is the header!";
  
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