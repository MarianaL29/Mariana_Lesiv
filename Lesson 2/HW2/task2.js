// 2. Построить прямоугольный треугольник состоящий из символа "*".

var numberOfRows = prompt('Please, enter the number');
var row = '*';
for (var i = 0; i < numberOfRows; i++) {  
      console.log(row);   
      row += "*"; 
}
