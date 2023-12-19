import inquirer from "inquirer";
const systemgeneratednumber = Math.floor(Math.random() * 10);
// console.log(systemgeneratednumber);
const answer = await inquirer.prompt([
    {
        type: "number",
        name: 'guess',
        message: "guess a number"
    }
]);
const { guess } = answer;
console.log(guess, "userguess", systemgeneratednumber, "system");
if (guess === systemgeneratednumber) {
    console.log("congrats your ans is correct");
}
else {
    console.log("your ans is wrong awwww ");
}
