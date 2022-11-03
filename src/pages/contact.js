import makeHeader from '../functions/header.js';
import makeBackground from '../functions/background.js';

const createBanner = () => {
  const banner = document.createElement('div');
  banner.classList.add("banner");
  
  const contactUs = document.createElement('h1');
  contactUs.textContent = "Contact us"
  banner.appendChild(contactUs);

  return banner;
};

const createContact = () => {
  const infoContainer = document.createElement('div');
  infoContainer.classList.add('contact-info');

  let phoneNumber = "Phone: 1 (504) 444 5356";
  let socialHandle = "Intergram: @phoolzCoffee";
  let emailAddress = "Email: phoolz@coffee.com";
  let locationAddress = "Location: 323 N 1st Street, San Jose"

  const phoneInfo = document.createElement('h3');
  phoneInfo.setAttribute('class', 'phone-num');
  phoneInfo.textContent = phoneNumber;
  infoContainer.appendChild(phoneInfo);

  const emailInfo = document.createElement('h3');
  emailInfo.setAttribute('class', 'email-address');
  emailInfo.textContent = emailAddress;
  infoContainer.appendChild(emailInfo);


  const socialMediaInfo = document.createElement('h3');
  socialMediaInfo.setAttribute('class', 'social-media-info');
  socialMediaInfo.textContent = socialHandle;
  infoContainer.appendChild(socialMediaInfo);

  const locationInfo = document.createElement('h3');
  locationInfo.setAttribute('class', 'location-address');
  locationInfo.textContent = locationAddress;
  infoContainer.appendChild(locationInfo);

  return infoContainer;
};

const contact = () => {
  const content = document.getElementById('content');
  
  const background = makeBackground();
  content.appendChild(background);
  
  const header = makeHeader();
  content.appendChild(header);

  const banner = createBanner();
  content.appendChild(banner);

  const contactInfo = createContact();
  content.appendChild(contactInfo);
  
  return content;
};

export default contact;