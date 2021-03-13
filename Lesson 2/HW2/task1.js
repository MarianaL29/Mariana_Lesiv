// 1. Среди трех чисел найти среднее арифметическое. Если среди чисел есть равные, вывести сообщение "Ошибка". 
// Числа принять от пользователя.

var a=Number(prompt("Enter a"));
var b=Number(prompt("Enter b"));
var c=Number(prompt("Enter c"));

if (a==b || b===c || c===a){ 
    console.log('Error');
} else {
    console.log((a+b+c)/3);
}