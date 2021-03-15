// 4. Дано два числа A и B где (A < B). 
// Выведите на экран суму всех чисел расположенных в числовом промежутке от А до В. 
// Выведите на экран все нечетные значения, расположенные в числовом промежутке от А до В.

var A=Number(prompt('Enter A'));
var B=Number(prompt('Enter B'));
var sumOfAllNumbers=0;

for (var i = A; i < B; i++) {
    sumOfAllNumbers+=i;
}
console.log('Sum of all numbers=', sumOfAllNumbers);

for (var j = A; j < B; j++) {
    if (j % 2 != 0) {
    console.log('Odd number:', j);
    }
}


