"use strict";
//basic types
// let a = 1 inferencia 
let typeString = "1";
let typeBoolean = false;
let typeNumber = 3;
typeString = "3";
//array
let typeArr = [2, 3];
let typeArr2 = [3, 4];
let typeArr3 = [1, "nombre"];
// unions
let hola;
hola = "1";
// enum CENTRALIZAR INFO
var Dias;
(function (Dias) {
    Dias[Dias["Lunes"] = 5] = "Lunes";
    Dias[Dias["Martes"] = 6] = "Martes";
    Dias[Dias["Miercoles"] = 7] = "Miercoles";
})(Dias || (Dias = {}));
// por defecto inician desde 0 
// console.log(Dias.Martes);
var Roles;
(function (Roles) {
    Roles["Admin"] = "ADMIN";
    Roles["User"] = "USER";
    Roles["SuperAdmin"] = "SUPERADMIN";
})(Roles || (Roles = {}));
// console.log(Roles.User);
// Type assertions o casteo 
let valor = "longitud";
let num1 = valor.length;
let num2 = valor.length;
console.log(num1, num2);
// funtions 
function saludar(nombre) {
    return nombre;
}
console.log(saludar("diego"));
// infiere que retorna number 
function adios() {
    return 1;
}
function printPos(pos) {
    pos.posX && console.log(pos.posX);
    pos.posY && console.log(pos.posY);
}
printPos({
    posY: 2
});
const vksnlsknfv = (valor) => { return valor; };
const asdasdmasnf = function (valor) { return valor; };
let newBook = {
    id: 1,
    title: "newBook",
    isAvailable: (number) => {
        console.log(number + "It is available");
    }
};
newBook.isAvailable(2);
let arrBooks = [{
        id: 8,
        title: "lalhvf",
        isAvailable: () => console.log("It is not available")
    }, {
        id: 11,
        title: "lalasdaslihvf",
        isAvailable: () => console.log("It is not available")
    }];
// class 
class Persona {
    constructor() {
        this.age = 12;
    }
    saludar() {
        console.log("hola");
    }
}
class Employee extends Persona {
    // name: string;
    // job: string;
    // private id: number;
    constructor(name, job, id) {
        super();
        this.name = name;
        this.job = job;
        this.id = id;
        this.showName = () => console.log(this.name);
        this.showJob = () => console.log(this.job);
        this.showId = () => console.log(this.id);
        this.showAge = () => console.log(this.age);
        this.name = name;
        this.job = job;
        this.id = id;
    }
}
const newEmp = new Employee("diego", "developer", 4);
// newEmp.saludar()
// newEmp.showName()
// newEmp.showJob()
// newEmp.showId()
newEmp.showAge();
