import inquirer from "inquirer";
type credentials={
    userid:string,
    pin:string
}
const credentials =  await inquirer.prompt([
{
    type: "credentials",
    name: "userid",
    message: "Enter your userid"
   },
{      
    type: "credentials",
    name: "pin",
    message: "Enter your pin"
    },
])

let id: string= "huba"
let pin: string= "1234"

function bank(name:string,amount:string)
{
    console.log(`WELCOME TO ${name},your current balance is ${amount}`)
}
if(
    credentials.userid === id&&
    credentials.pin === pin
){
    bank("HBL","1000000000000000$")
    
}
else
{
    console.log("Login failed")
}
