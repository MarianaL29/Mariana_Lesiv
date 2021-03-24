// 1.	Создать функцию calculate(a, b, sign), где a и b — два числа, sign — знак арифметической операции.
// 		Функция должна расчитывать результат операции, исходя из переданного ей знака. 
// 		Функция должна проверять корректность введенных чисел и знака операции.
// 		Все аргументы для функции принять от пользователя.

let a = +prompt("Enter a");
let sign = prompt("Enter sign");
let b = +prompt("Enter b");


function calculate(a, sign, b) {
    if ((isNaN(a)) || (isNaN(b))) {
        return ("Please enter valid 'a' or 'b'")
    } else if (sign == "+") {
        return (a + b)
    } else if (sign == "-") {
        return (a - b);
    } else if (sign == "/") {
        return (a / b)
    } else if (sign == "*") {
        return (a * b);
    } else if (sign != "+" || sign != "-" || sign != "/" || sign != "*") {
        return ("Please enter valid 'sign'");
    }
}
console.log(calculate(a, sign, b));