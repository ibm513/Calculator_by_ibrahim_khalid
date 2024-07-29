import inquirer from "inquirer";
let x;
let y;
let z;
let a;
async function calculator() {
    const calc = await inquirer
        .prompt([
        {
            type: "number",
            name: "num_1",
            message: "please enter 1st number",
        },
        {
            type: "number",
            name: "num_2",
            message: "please enter 2nd number",
        },
    ])
        .then((answer) => {
        x = answer.num_1;
        y = answer.num_2;
    });
    const calc_2 = await inquirer
        .prompt([
        {
            type: "list",
            name: "operation",
            choices: [
                { name: "addition", value: x + y },
                { name: "subtraction", value: x - y },
                { name: "multiplication", value: x * y },
                { name: "division", value: x / y },
            ],
            message: "please select the operation",
        },
    ])
        .then((answer) => {
        z = answer.operation;
    });
    console.log(`The answer is ${z}`);
    confirmation();
}
async function confirmation() {
    let confirm = await inquirer
        .prompt([
        {
            type: "list",
            name: "input_confirm",
            message: "Do you want to perform another operation?",
            choices: ["Yes", "No"],
        },
    ])
        .then((answer) => {
        a = answer.input_confirm;
    });
    if (a == "Yes") {
        calculator();
    }
    else {
        console.log(`Thankyou for using our calculator`);
    }
}
calculator();
