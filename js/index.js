const first = [10, 20, 30];
const second = [40, 50, 60];


const combined = first.concat(second);
console.log(combined);
// (6) [10, 20, 30, 40, 50, 60]


console.log(first);
// (3) [10, 20, 30]

const push = first.push(40);
console.log(first);
// (4) [10, 20, 30, 40]

// *************
//==>> push is mutate 
//==>>concat is not mutate
// *************

console.log(push);
//4
//4 is length of array
console.log(combined);
//return array 

// *************
// first.push return length of array
// first.concat return  new array
// *************

const third = [70, 80, 90, 100, 110, 120];
const slice = third.slice(2, 4);
console.log(third);
// (6) [70, 80, 90, 100, 110, 120]
console.log(slice);
// (2) [90, 100]


//slice is not mutate
//splice is mutate
