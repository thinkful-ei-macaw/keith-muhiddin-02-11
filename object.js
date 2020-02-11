'use strict';

const loaf = {
  flour: 300,
  water: 210
};

console.log('Flour:', loaf.flour, ' water:', loaf.water);

loaf.hydration = function() {
  let hydration = (this.water / this.flour) * 100;
  return hydration;
};

console.log(loaf.hydration());