// // basic type in typescript

// // 1. number  explicit method 
// const age:number=23;
// console.log(age)

// // number implicit method
// const age1=12
// console.log(age1)

// //3. string 
// const name= "surafel";   //  implicit method
// console.log(name)   // run the result

// //4. boolean in typescript
// const isStudent=true;  //implicit method
// console.log(isStudent)

// // explicit boolean method 
// const isLogIn:boolean =false
// console.log(isLogIn)

// //5. array Method
// const numbers:number[] =[1,2,3,4,5]; //explicit method
// console.log(numbers)
// // implicit array method
// const frainds=["Abel","aster","yared"]  // implicit method
// console.log(frainds)


// // 7. any type 
// let school:any = 12;
// school="waw"

// 8. object implicit method  type

// const info:{name:string,age:number,email:string}={
//     name:"surafel",
//     age:23,
//     email:"sura@gmail.com"
// }
// console.log(info)


// object exolicit method
// type student={
//     id:number | string,
//     name:string,
//     isLogin:boolean,
// }

// const students:student = {
//     id:12,
//     name:"welcome",
//     isLogin:true
// }

// console.log(students)



// // 9 function type 
// const Hi=(num:number)=>{
//     return num*2 
// }
// const res=Hi(12)
// console.log(res)


// 10 union type 
// const pid:number|string =12;
// console.log(pid)


// // 11. enum types in typescript 
// enum direction{
//     south,
//     east,
//     west,
//     north
// }
// const dir=direction.north
// console.log(dir)


// 11. void type function 
// let name;
// function Greet(){
   
//       console.log("hello",name)
// }
// const info =Greet()
// console.log(info)


// 12. interface in typescrpt
// interface info{
//     id:number| string,
//     age:number,
//     Name:string, 
// }
// const userInfo:info={
//     id:1,
//     age:23,
//     Name:"surafel"
// }
// console.log(userInfo)

// both type and also interface used  but interface is mostly used in class and object
// type is used any ware and any projects like small ,large and intermidate projects 



// 13 ? optional 
// interface userInterface{
//     name:string,
//     id?:1     //......  optional 
// }
// const user:userInterface={
//   name:'surafel'
// }
// console.log(user)



// 14. interface with  function 
 
// interface mathFunc{
//    (x:number,y:number):number
// }

// const sum:mathFunc=(x:number,y:number):number =>{
//    return x+y
// }
// const sums=sum(12,13)
// console.log(sums)


// class in typescript 
// class info {   //parent class 
//     id:number;
//     name:string;

//      constructor(id:number,name:string){
//     this.id =id;
//     this.name=name 
// }
//    isMove(){
//     console.log(`my name is ${this.name} `)
//   }
 
// }
// const surafel=new info(1,"surafel")
// console.log(surafel)
// console.log(surafel.isMove())


// class employee extends info{ //  child class  inheritance concepts in typescript
//    companyOwner:string;
//    constructor(id:number,name:string,companyOwner:string){
//     super(id,name)
//     this.companyOwner=companyOwner
//    }
//   isManger(){
//     console.log(`Hello My name is ${this.name} and i am ${this.companyOwner}`)
//   }
// }

// const manger1=new employee(2,"shawn","Jackma")
// console.log(manger1)


