<<<<<<< HEAD
const { exec } = require('child_process');
function executeCommand(command) {
    console.log(`Command Output:\n${command}`);
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`Command STDERR: ${stderr}`);
            return;
        }
        console.log(`Output:\n${stdout}`);
    });
}

// Test cases
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');
=======
const { exec } = require('child_process');
function executeCommand(command) {
    console.log(`Command Output:\n${command}`);
    exec(command, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing command: ${error}`);
            return;
        }
        if (stderr) {
            console.error(`Command STDERR: ${stderr}`);
            return;
        }
        console.log(`Output:\n${stdout}`);
    });
}

// Test cases
executeCommand('ls -la');
executeCommand('echo "Hello, Node.js!"');
>>>>>>> caac55a7635e4f02df2636601f868e45bffb34fa
