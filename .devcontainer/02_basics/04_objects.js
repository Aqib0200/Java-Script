// const tinderUser = new Object ()

const tinderUser={}
tinderUser.id = 1234
tinderUser.name= "Aqib"
tinderUser.isLoggedIn= false

// console.log(tinderUser);

const regularUser={
    name : "Aqib",
    lastName:{
        surName:"Khan",
        Email:{
            mail:"muhammadaqib@gmail.com"
        }
    }
}
// console.log(regularUser.lastName.Email.mail);

const obj1 = {1 : "a" , 2 : "b"}
const obj2= {3 : "c" , 4 : "d"}
// const obj3= Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
// console.log(obj3)

// console.log(tinderUser)
// console.log(Object.keys(tinderUser))
// console.log(Object.values(tinderUser))
// console.log(Object.entries(tinderUser))

// console.log(tinderUser.hasOwnProperty("isLoggedIn")) // This propert find value thus it is present or not

// OBJECT DESTRUCTURING

const course ={
    name: "Maths",
    Instructor: "Aqib",
    Email: "mihamm@gmail"
}
const {Instructor}=course
console.log(Instructor);
