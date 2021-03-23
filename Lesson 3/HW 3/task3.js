// 3. Создать многомерный массив, размер массива получить от пользователя. 
// Каждый нечётный подмассив заполнить значением 'odd', а чётный - 'even'. 
// Размер каждого вложенного массива - 3.




var array = [];
var sizeOfArray = prompt('Enter array size');

for (var i = 0; i < sizeOfArray; i++) {
    if (i % 2 == 0) {
        array.push(['even', 'even', 'even']);
    } else {
        array.push(['odd', 'odd', 'odd']);
    }
}
console.log(array);