import backgroundImg from '../assets/images/background-img.jpg'

const backGroundImg = () => {
  const bgcontainer = document.createElement('div');
  bgcontainer.classList.add('bg-container');
  const bgImage = document.createElement('img');
  bgImage.src = backgroundImg;
  bgcontainer.appendChild(bgImage);
  
  return bgcontainer;
};

export default backGroundImg;