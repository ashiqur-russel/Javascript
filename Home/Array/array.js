let fruits = ['banana','apple','orange','pineapple'];
fruits = new Array('banana','apple','orange','pineapple');

console.log(fruits[2]);

fruits[0] = 'pear';

console.log(fruits);

// array comnmon method
console.log('to string',fruits.toString());
console.log(fruits.join('-'));
console.log(fruits.pop(),fruits);
console.log(fruits.push('berries',fruits));

let veg = ['asparagus','tomato','broccoli'];
let allGroccery = fruits.concat(veg);

console.log(allGroccery);
console.log(allGroccery.slice(1,4));
console.log(allGroccery.reverse());
console.log(allGroccery.sort())

let emptyArray = new Array();
for(let num=0; num<10;num++){
    emptyArray.push(num);
}
console.log(emptyArray);



