// 4. Для предыдущего задания создайте функцию, которая будет принимать в себя массив объектов-сотрудников, 
// и каждому из объектов
//        будет добавлять новое свойство "salary", хранящее зарплату сотрудника. 
//        Зарплата расчитывается, исходя из значения свойства "occupation" следующим образом:
//            • "director" — 3000;
//            • "manager" — 1500;
//            • "programmer" — 2000;
//            • для остальных значений — 1000.
//        После выполнения функции — вывести информацию о сотрудниках.


// Previous task

var infoAboutEmployees = [
    employee1 = {
        name: a = prompt("Enter first name:"),
        sName: b = prompt("Enter last name:"),
        age: c = prompt("Enter age:"),
        occupation: d = prompt("Enter occupation:"),
        show: function () {
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
        show: function () {
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

// Previous task


function assignSalary(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i].occupation == "director") {
            arr[i].salary = 3000;            
        }
        else if (arr[i].occupation == "manager") {
            arr[i].salary = 1500;
        }
        else if (arr[i].occupation == "programmer") {
            arr[i].salary = 2000;
        }
        else {
            arr[i].salary = 1000;
        }
    }
}


assignSalary(infoAboutEmployees);
for (var i = 0; i < infoAboutEmployees.length; i++) {
    console.log("First name: " + infoAboutEmployees[i].name);
    console.log("Last name: " + infoAboutEmployees[i].sName);
    console.log("Age: " + infoAboutEmployees[i].age);
    console.log("Occupation: " + infoAboutEmployees[i].occupation);
    console.log("Salary: " + infoAboutEmployees[i].salary);
}