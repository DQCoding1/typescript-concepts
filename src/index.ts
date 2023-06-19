//BASIC TYPES
// let a = 1 inferencia
let typeString: string = "1";
let typeBoolean: boolean = false;
let typeNumber: number = 3;
let lajslkdjs = {a:1}
lajslkdjs = {a: 5}
let irghvnr: (number | string) = "2"




//ARRAY
let typeArr: number[] = [2, 1];
let typeArr2: Array<number> = [3, 4];
let tupla: [number, string] = [1, "nombre"];
let asijcaisj: Array<string|number> = [2] 
let skldjf: (number | string)[]= [1]
let iacn: number[][] = [[1,2],[3,4]]
let asiacn: Array<Array<number>> = [[1,2],[3,4]]
const kkk: Array<[boolean, number]>= [[true, 2],[true, 2]]
const alksdjsa: object[] = [{}, {}]













// FUNCTIONS
function hello(name: string){
  console.log(`"hello ${name}`);
}


function sayHello ({name, age}: {name: string, age: number}): void{
  console.log(`Hello ${name}, you're ${age} years old`);
}


function sayHello2 (persona: {name: string, age: number}): void{
  const {name, age} = persona
  console.log(`Hello ${name}, you're ${age} years old`);
}


function sayHello3 (fn: (name: string) => void){
  fn("diego")
}
sayHello3((name: string) => {
  console.log(name)
})








// UNION TYPES INTERSECTION TYPES
let hola: string | number | boolean;
hola = false;

interface Molde1  {x : number}
interface Molde2  {y : string}
type union = Molde1 | Molde2
type typeIntersection = Molde1 & Molde2

const askjaksf: typeIntersection = {
  x: 1,
  y: "1",
}





// ENUM
// valores que funcionan como guia para centralizar un valor
enum Dias {
  Lunes = 5,
  Martes,
  Miercoles,
}
// por defecto inician desde 0
// console.log(Dias.Martes);

const enum Roles {
  Admin = "ADMIN",
  User = "USER",
  SuperAdmin = "SUPERADMIN",
}
// console.log(Roles.User);

enum ErrorTypes {
  notFound,
  unauthorized,
  forbidden
}








// INTERFACES / TYPES
// son moldes que obligan a quien lo use tener una estructura de datos
// si lo usa una variable debe tener:
//   - cantidad exacta de propiedades del molde (no mas ni menos)
//   - tipo de dato exacto ("2" debe ser "2")
// si lo usa una clase debe tener:
//   - cantidad de propiedades del molde, y puede agregar más 
//   - tipo de dato no exacto("2" puede ser "9") porque es string

// Interfaces
interface Book {
  id: number;
  title: string;
  author?: string;
  isAvailable: (id: number) => void;
  // isAvailable(id: number): void
}

let newBook: Book = {
  id: 1,
  title: "newBook",
  isAvailable: (number) => {
    // console.log(number + "It is available");
  },
};
newBook.isAvailable(2);

let arrBooks: Book[] = [
  {
    id: 8,
    title: "lalhvf",
    isAvailable: () => console.log("It is not available"),
  },
  {
    id: 11,
    title: "lalasdaslihvf",
    isAvailable: () => console.log("It is not available"),
  },
];

// extend
interface Person {
  id: number;
  name: string;
}

interface Customer extends Person {
  country: string;
}


// interfaces se pueden re-declarar y se van acumulando 
interface Cart {
  id: number
}

interface Cart {
  total: number
}

const finalCart : Cart = {
  id: 1,
  total: 1500
}






// Types
type BookMadeWithType = {
  id: number;
  title: string;
  author?: string;
  isAvailable: (id: number) => void;
};

type Cedula = string;
type Ñsirhsi = Book | null
type Ñsirhsiacs = Book & {anotherValue : string}








// READONLY
//  una vez se asigne valor a una clave no se podra modificar
type Computer = {
  readonly brand : string,
  color: string
} 

const computerDell: Computer = {
  brand: "dell",
  color: "black"
}
// computerDell.brand = "another brand"











// TEMPLATE LITERAL TYPES
type templateLiteralTypes1 = `id: ${number}`
let var1: templateLiteralTypes1 = "id: 9"
type templateLiteralTypes2 = `${string}-${string}-${string}-${string}-${string}`
let var2: templateLiteralTypes2 = crypto.randomUUID()
type templateLiteralTypes3 = `#${number}`
let hexadecimal: templateLiteralTypes3 = "#202202"









// TYPE INDEXING
type Superhero = {
  name: string
  isActive? : boolean,
  address?: {
    planet: string,
    city: string
  }
} 


const batman: Superhero["address"] = {
  planet: "earth",
  city: "new york"
}











// CREATE TYPES FROM VALUE
const planet = {
  name: "earth"
} 

type Planet = typeof planet

const planet2: Planet = {
  name: "mars"
}








// CREATE TYPE FROM RETURN FUNCTION
function createPlanet(){
  return {
    name: "venus"
  }
}

type PlanetFromFunction = ReturnType<typeof createPlanet>

const newPlanet: PlanetFromFunction = {
  name: "earth"
} 








// INDEX SIGNATURES 
// define todos los tipos de dato 
// en clave y valor para una interfaz

interface Holala {
  [index: string] : number | string
  // [key: string] : number | string
  a: "2",
  b: 1
}






// TYPE ASSERTIONS TYPE CASTING
let valor: any = "longitud";
let num1: number = (<string>valor).length;
let num2: number = (valor as string).length;
console.log(num1, num2);
type One =  string
type Two = string  | number
type Three = "hello"  
let a : One = "hello"
let b = a as Two // less specific
let c = a as Three // more specific 


















// CLASS
class Persona {
  protected age: number = 12;
  saludar() {
    // console.log("hola");
  }
}

class Employee extends Persona {
  // name: string;
  // job: string;
  // private id: number;

  constructor(public name: string, public job: string, private id: number) {
    super();
    this.name = name;
    this.job = job;
    this.id = id;
  }

  showName = () => console.log(this.name);
  showJob = () => console.log(this.job);
  showId = () => console.log(this.id);
  showAge = () => console.log(this.age);
}

const newEmp = new Employee("diego", "developer", 4);
// newEmp.saludar()
// newEmp.showName()
// newEmp.showJob()
// newEmp.showId()
// newEmp.showAge();








// DIFFERENCE BETWEEN EXTENDS AND IMPLEMENTS IN CLASSES  
class Vehicle {
  price = "10"
  doesItdrive(){
    return true
  }
}


// extends:
// copia las propiedades y funciones de una clase y las pega en otra
class Car extends Vehicle{

}

const ford = new Car()
console.log(ford.doesItdrive())




// implements:
// obliga que una clase tenga la estructura de datos de un molde(interface, class)
class Motorbike implements Vehicle {
  price = "38"
  doesItdrive(): boolean{
    return false
  } 
}

const yamaha = new Motorbike()
console.log(yamaha.doesItdrive())













// NARROWING / TYPE GUARD
type Mario = {
  id: string
  jump: () => void
}

type Superman = {
  id: string,
  fly: () => void
}




// crear una funcion que devuelva boolean 
const isSuperman = (character: (Mario | Superman)) : character is Superman=> {
  return (character as Superman).fly !==  undefined
}

function createCharacter(character: (Mario | Superman)): void {
  // se podria usar instanceof pero Superman tiene que ser una clase
  // if (character instanceof Superman){}

  if (isSuperman(character)){
    character.fly()
  }
}




// hacer type assertion directamente
function createCharacter2(character: (Mario | Superman)): void {
  const isSonic = (character as Superman)
  if (isSonic.fly !==  undefined){
    isSonic.fly()
  }
}
















// GENERICS 
// es una variable que recibe la definicion de un tipo de dato
//  ej: string, number, string[] 





// GENERICS EN VARIABLES
const generic : Array<number> = [2]
// aqui se envia number como tipo de dato 





// GENERICS EN FUNCIONES 
const lastValue = <T>(arr: Array<T>) => {
  return arr[arr.length-1]
}

// enviando el tipo de dato  
lastValue<string>(["2","3"])
lastValue<number>([2,3])


// no enviando el tipo de dato, cuando se asigne algun valor typescript lo infiere 
lastValue([false, true])



// generics con extends 
const type = <T extends {name:string}>(obj : T) =>{
  return obj
}

type({name: "jon", lastname: "jones"})











// GENERICS EN INTERFACES 
interface food<T> {
  id: T
  price: T,
  name: string,
}

// enviar la definicion de tipo de dato explicitamente 
const meat: food<number>= {
  id: 1,
  price: 70,
  name: "meat",
}




