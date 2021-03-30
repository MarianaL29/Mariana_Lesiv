// 3. Используйте метод some внутри функции checkPositive, чтобы проверить, является ли какой-либо 
// элемент в arr положительным. Функция должна возвращать логическое значение.


// function checkPositive(arr) {
//     let result = arr.some(function(isPositive)  {
//         return isPositive >= 0;
//      });
//      return result;
//  }
//  let output = checkPositive([1, 2, -3, -4, 5]);
//  console.log(output);

function checkPositive(arr) {
    return arr.some(function (x) {
        return x > 0;
    });
}
console.log(checkPositive([1, 2, 3, -4, 5]));