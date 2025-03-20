
import './account.scss';
import './home.scss';

import _ from 'lodash';

 function component() {
   const element = document.createElement('h1');

  // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');

   return element;
 }

 document.body.appendChild(component());