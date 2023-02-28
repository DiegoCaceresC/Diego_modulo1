'use strict';

function BinarioADecimal(num) {}

function DecimalABinario(num) {
   let number = num;
   let binary = (number % 2).toString();
   for (; number > 1; ) {
       number = parseInt(number / 2);
       binary =  (Number % 2) + (binary);
   }
   return binary;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
