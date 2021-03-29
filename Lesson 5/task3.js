// 3. Создать массив, который будет хранить в себе информацию о сотрудниках предприятия. Каждый элемент масива — 
// объект,
// содержащий свойства: name, sName, age, occupation, и метод show, который выводит всю информацию о пользователе.
// Реализовать заполнение массива пользователем. По окончанию заполнения — вывести информацию о сотрудниках.


var infoAboutEmployees = [
    employee1 = {
        name: a = prompt("Enter first name:"), 
        sName: b = prompt("Enter last name:"),
        age: c = prompt("Enter age:"),
        occupation: d = prompt("Enter occupation:"),
        show: function() {
            console.log("First name: " + this.name);
            console.log("Last name: " + this.sName);
            console.log("Age: " + this.age);
            console.log("Occupation: " + this.occupation);
        }
    },
    employee2 = {
        name: a = prompt("Enter first name:"), 
        sName: b = prompt("Enter last name:"),
        age: c = prompt("Enter age:"),
        occupation: d = prompt("Enter occupation:"),
        show: function() {
            console.log("First name: " + this.name);
            console.log("Last name: " + this.sName);
            console.log("Age: " + this.age);
            console.log("Occupation: " + this.occupation);
        }
    },
    employee3 = {
        name: a = prompt("Enter first name:"), 
        sName: b = prompt("Enter last name:"),
        age: c = prompt("Enter age:"),
        occupation: d = prompt("Enter occupation:"),
        show: function() {
            console.log("First name: " + this.name);
            console.log("Last name: " + this.sName);
            console.log("Age: " + this.age);
            console.log("Occupation: " + this.occupation);
        }
    }
]

for (var i = 0; i < infoAboutEmployees.length; i++) {
    infoAboutEmployees[i].show();
}