const username = process.argv[2];
if(username){
console.log (`Hello, ${username}`)
}else{
    console.log("you must provide a username");
}
let health = 100
let money = 100
const item = process.argv[3];
if (item === "jacket"){
money -= 40 
health += 20
console.log("You bought a jacket");
} else if (item === "candy"){
    money -= 10;
    console.log("you bought candy")
}

else if(item === "paint") {
    money -= 30
    console.log("You bought paint")
}
else if(item === "hammer") {
    money -= 70
    console.log("You bough a hammer")
}

else {
    console.log("you bought nothing")
} 
console.log(`you have ${money} dollars left.`);
console.log("You exit the store and find yourself in the middle of an anti-android protest!");
console.log("You could run or stay...");
const randomPerson = Math.random() > .5 ? "John" : "Felipe"; 
const choice = process.argv[4];
const message = process.argv[5];

if(!choice){
    console.log("you shut down due to inactivity and get robbed of all your money")
} else if  (choice !== "run"&& randomPerson === "Felipe") {
    console.log("The protesters attack you...");

    if (item !== "jacket"){
        console.log("...but Felipe, a fellow android shows up to help you escape them");
    } else{
        console.log("...and Felipe, a fellow android, who would normally help doesn't recognize you with the jacket");
        health -= 50
    }
} else if(!choice!== "run"&& randomPerson === "John"){
    console.log("You run, but John, a human officer with an attitude and a heart of gold, finds you..."); 
    
    if (item === "hammer"|| "jacket") {
        console.log("...and holds you for questioning for suspicious activity");
        health -= 100
    } 
} else {
    if (item === "paint") {
        console.log("You boldy protest by painting a pro-android message...");

        if (message) {
            console.log(`..."${message.toUpperCase()}"`);
        } else{
            console.log(`..."WE ARE ALIVE"`);
        }
    } else {
        console.log(`Nothing interesting happens, but at least you got that ${item}`);
    }
}

// 3 equals are for comparason
let score = 0;
score = health + money;

if (choice) {
    score += 10;
}

if(message){
    score += 10;
}

console.log("The end");
console.log(`Score: ${score}`);