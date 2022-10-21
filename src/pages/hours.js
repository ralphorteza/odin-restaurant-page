import backGroundImg from "../functions/background";
import storeHoursImg from "../assets/images/store-hours";
import makeHeader from "../functions/header";

const displayHoursImg = () => {
  const hoursContainer =  document.createElement('div');
  hoursContainer.classList.add("hours-container");
  const hoursImg = document.createElement('img');
  hoursImg.src = storeHoursImg;
  hoursContainer.appendChild(hoursImg);

  return hoursContainer;
}

const createHoursPage = () => {
  const content = document.getElementById('content');
  
  const header = makeHeader();
  content.appendChild(header);

  const background = backGroundImg();
  content.appendChild(background);

  const storeHours = displayHoursImg();
  content.appendChild(storeHours);
};

export default createHoursPage;