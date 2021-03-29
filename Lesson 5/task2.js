// 2. Создать объект Calculator, который должен содержать методы для расчета суммы, разности, 
// произведения и частного двух чисел.
// Протестировать данный объект, принимая от пользователя значения двух операндов и знак операции.
// В зависимости от принятого знака операции, вызвать соответствующий метод.

let calculator = {
    sum: function (a, b) {
        let result = a + b;
        console.log(result);
    },
    sub: function (a, b) {
        let result = a - b;
        console.log(result);
    },
    mul: function (a, b) {
        let result = a * b;
        console.log(result);
    },
    div: function (a, b) {
        let result = a / b;
        console.log(result);
    },
}

let a = +prompt("Enter 'a':");
let sign = prompt("Enter sign:");
let b = +prompt("Enter 'b':");
if (isNaN(a) || isNaN(b)) {
    console.log("'a' or 'b' is not a number");
    }
if (sign == "+") {
    calculator.sum(a, b);
} else if (sign == "-") {
    calculator.sub(a, b);
} else if (sign == "*") {
    calculator.mul(a, b);
} else if (sign == "/") {
    calculator.div(a, b);
} else {
    console.log("Please enter appropriate sign: '+', '-', '/', '*'");
}
