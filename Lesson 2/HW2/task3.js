// 3. Определить какое из трех, введенных пользователем, чисел максимальное и вывести его на экран.

var a=Number(prompt('Enter a'));
var b=Number(prompt('Enter b'));
var c=Number(prompt('Enter c'));


if (a>b && a>c) {
    document.write('max a= ', a);
    
} else if (b>c && b>c) {
    document.write('max b= ', b);

} else if  (c>a && c>b) {
    document.write('max c= ', c );
} 