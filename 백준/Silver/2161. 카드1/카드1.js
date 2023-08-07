const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();
const array  = Array.from({length : +input}, (value, index) => index+1);
const narray = [];
while(array.length!==0){
    const i = array.shift();
    narray.push(i);
    if(array.length!==0){
        array.push(array.shift());
    }
    else{
        break;
    }
}
console.log(...narray)