'use strict';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopup from './modules/togglePopup';
import scrollButton from './modules/scrollButton';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changeCommandImages from './modules/changeCommandImages';
import inputValidation from './modules/inputValidation';
import calc from './modules/calc';
import sendForm from './modules/sendForm';



//Timer
countTimer('27 february 2025');

//Menu
toggleMenu();

//popup
togglePopup();

//scroll button
scrollButton();

//Tabs
tabs();

//Slider
slider();

//Change image
changeCommandImages();

//validation
inputValidation();

//calculator
calc(100);

//send-ajax-form
document.querySelectorAll('form').forEach(form => sendForm(form));
