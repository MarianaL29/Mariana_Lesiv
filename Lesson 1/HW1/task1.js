// 1. По координатам двух точек, которые вводит пользователь, определить уравнение прямой, 
//    проходящей через эти точки.
//    Общий вид уравнения: y = kx + b; где k = (y1 - y2) / (x1 - x2), b = y2 - k*x2.

let y, k, b, y1, y2, x1 ,x2;
 x1 = Number(prompt('Please enter x1'));
 x2 = Number(prompt('Please enter x2'));
 y1 = Number(prompt('Please enter y1'));
 y2 = Number(prompt('Please enter y2'));

    k = (y1 - y2) / (x1 - x2);
    b = y2 - k * x2;

    alert('y = ' + k + 'x + ' + b);


