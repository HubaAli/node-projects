// calculator
import inquirer from "inquirer";
const ans = await inquirer.prompt([
    {
        type: "number",
        name: "numberone",
        message: "Enter first one"
    },
    {
        type: "number",
        name: "numbertwo",
        message: "Enter second one"
    },
    {
        type: "list",
        name: "operator",
        message: "Selext op",
        choices: ["+", "-", "/", "*"]
    },
]);
const { numberone, numbertwo, operator } = ans;
if (numberone && numbertwo && operator) {
    let result = 0;
    if (operator === "+") {
        result = numberone + numbertwo;
    }
    else if (operator === "-") {
        result = numberone - numbertwo;
    }
    else if (operator === "*") {
        result = numberone * numbertwo;
    }
    else if (operator === "/") {
        result = numberone / numbertwo;
    }
    console.log("final output is:", result);
}
else {
    console.log("kindly enter valid no");
}
