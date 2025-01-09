const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const greetUser = function() {
    rl.question("Please enter your name: ", (name) => {
        if (name.trim() === "") {
            name = "Guest";
        }
        console.log(`Hello, ${name}!`);
        rl.close();
    });
};

// Call the function to prompt the user and greet them
greetUser();
