import backgroundImg from '../assets/images/background-img.jpg'


const home = function() {
  const content = document.getElementById('content');
  
  const header = document.createElement('div');
  header.classList.add("header");
  header.textContent = "Here is the header!";
  content.appendChild(header);

  const imgContainer = document.createElement('div');
  imgContainer.classList.add('image-container');
  const bgImage = document.createElement('img');
  bgImage.src = backgroundImg;
  imgContainer.appendChild(bgImage);
  content.appendChild(imgContainer);


}

export default home;