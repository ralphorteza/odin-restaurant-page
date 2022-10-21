import backgroundImg from '../assets/images/background-img.jpg'

const backGroundImg = () => {
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  const bgImage = document.createElement('img');
  bgImage.src = backgroundImg;
  imgContainer.appendChild(bgImage);
  
  return imgContainer;
};

export default backGroundImg;