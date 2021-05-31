import {fontAnimation} from './font.js';
import {navMobileToggle, navbarScroll} from './navbar.js';
import {getPortfolio} from './portfolio.js';
import {openEmail, sendEmail} from './email.js';
import {portfolioFilter} from './filter.js';
getPortfolio();
fontAnimation();
openEmail();
sendEmail;
navMobileToggle();
portfolioFilter();

document.addEventListener('scroll', navbarScroll);