// object literals
const sym = Symbol("key1")
const JsUser = {
    name: "Aqib",
    age: 23,
    [sym]:"MyKey1",
    email: "aqib@gmail.com",
    isLoggedin: false,
    lastLoginDays:["Monday"]
};

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[sym]);

JsUser.email = "aqib@google.com"
// Object.freeze(JsUser)// freeze remaining work
// JsUser.email = "aqib@microsoft.com"

JsUser.greetings = function(){
    console.log("Hi js user")
}
console.log(JsUser.greetings());


JsUser.greetings = function(){
    console.log(`Hi js user, ${this.name}`)
}
console.log(JsUser.greetings());
