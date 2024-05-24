
let form = document.querySelector(".login__form")
let arr = [];

form.addEventListener("submit",function add(){
 
    let email = document.querySelector("#email").value
    let pass = document.querySelector("#password").value
    let gen = document.querySelector("#gender").value
    let regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,4}$/
    let passregex = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/
//  (?=.*[0-9])(?=.*[a-z])
    console.log(regex.test(email))
    console.log(passregex.test(pass))

//     if(email.length ==0 || pass.length == 0 || gen.length == 0){
//         document.querySelector("#error").innerText = "Put all the values in correct form"
//         return 
//     }
//     if(pass.length<5){
//       document.querySelector("#error").innerText = "Pls put password greater than 5"
//       return;
//     }

//     let obj = {
//         Email : email,
//         password : pass,
//         gender : gen
//     }

//     arr.push(obj)
//    console.log(arr)
})


