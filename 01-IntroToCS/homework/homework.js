'use strict';

function BinarioADecimal(num) {
   let numstr=parseInt(num);
   let dec = parseInt(numstr, 2);
   return dec;
}

function DecimalABinario(num) {
   let str = (num).toString(2);
   return str;
}

module.exports = {
   BinarioADecimal,
   DecimalABinario,
};
