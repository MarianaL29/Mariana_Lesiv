// 1. Сделать собственные примеры методов применяемых для массивов.


var arrayOfCars  = ["Mercedes", "Audi", "BMW", "Toyata"];
console.log(arrayOfCars);

var joinArrayOfCars = arrayOfCars.join( " and ");
console.log('joinArrayOfCars:  ' + joinArrayOfCars);

var reverseArrayOfCars = arrayOfCars.reverse();
console.log('reverseArrayOfCars:  ' + reverseArrayOfCars);

var sortArrayOfCars = arrayOfCars.sort();
console.log('sortArrayOfCars:  ' + sortArrayOfCars);

var concatArrayOfCars = arrayOfCars.concat('KIA', 'BENTLEY');
console.log('concatArrayOfCars:  ' + concatArrayOfCars);

var sliceArrayOfCars = arrayOfCars.slice(0,2);
console.log('sliceArrayOfCars:  ' + sliceArrayOfCars);


var arrayOfFruits = ["apple", "grape", "pear", "tangerine"];
console.log(arrayOfFruits);

var spliceArrayOfFruits = arrayOfFruits.splice(1,2);
console.log('spliceArrayOfFruits: '+ spliceArrayOfFruits);
console.log(arrayOfFruits);

spliceArrayOfFruits = arrayOfFruits.splice(1, 0, "grapefruit", "lemon");
console.log(arrayOfFruits);

var pushArrayOfFruits = arrayOfFruits.push('pineapple');
console.log("Length of  array of Fruits: " + pushArrayOfFruits);
console.log(arrayOfFruits);

var popArrayOfFruits = arrayOfFruits.pop();
console.log("Deleted element: " + popArrayOfFruits );
console.log("Array of fruits:" + arrayOfFruits);

var unshiftArrayOfFruits = arrayOfFruits.unshift("melon", "watermelon");
console.log("Length of  array of Fruits: " + unshiftArrayOfFruits);
console.log(arrayOfFruits);

var shiftArrayOfFruits = arrayOfFruits.shift();
console.log("Deleted element: " + shiftArrayOfFruits);