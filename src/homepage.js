import { photographerFactory } from './js/factories/homepage';
import { getPhotographers, displayData } from './js/pages/homepage';

import fisheyeLogo from '@/images/content/small/logo.png'
import '@/styles/main.scss'

photographerFactory();
getPhotographers();
displayData();

const homepage = document.getElementById('homepage');

const headerFisheye = document.createElement('header');
      headerFisheye.setAttribute("aria-role", "banner");

const logo = document.createElement('img');
      logo.setAttribute("class","header-logo");
      logo.setAttribute("src",logo);
      logo.src = fisheyeLogo;

const link = document.createElement("a");
      link.setAttribute("href","index.html");
      link.append(logo);

const pageName = document.createElement('h1');
      pageName.textContent="Nos photographes";

headerFisheye.append(link, pageName);

const mainFisheyesPhotographers = document.createElement("main");
      mainFisheyesPhotographers.setAttribute("id","main");

const photographerSection = document.createElement("section");
      photographerSection.setAttribute("class", "photographer-section");
      photographerSection.setAttribute("aria-label", "Tout les photograghes");

mainFisheyesPhotographers.append(photographerSection);
headerFisheye.append(link, pageName);
homepage.append(headerFisheye, mainFisheyesPhotographers)
