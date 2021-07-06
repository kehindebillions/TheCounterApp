let count = 0
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
//let count = 5 + 7
/*
declaring a value with let
let myAge = 32
console.log(myAge) 
example 
let firstBatch = 5
let secondBatch = 7/
let count = fisrtBatch + secondBatch
it could be (-)(*)(/)
console.log(count)
ctrl+k+c(comment)
functions, the name of the function (){ what you want the function to execute in here}
function increment() {
    console.log("the button was clicked")}*/
    function increment() {
        count += 1
        countEl.textContent = count
}
function save() {
    console.log(count)
    let countStr = " - " + count
    saveEl.textContent += countStr
    countEl.textContent = 0
    count = 0
}

/* string 
let userName = "kennybillions"
let message = "You have three new notification "
console.log(message + userName)
in the string and numbers the string always win*/