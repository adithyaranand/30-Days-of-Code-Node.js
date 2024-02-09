<<<<<<< HEAD
const path = require('path');
function resolvePath(relativePath) {
    const absolutePath = path.resolve(__dirname, relativePath);
    console.log("Resolved Path:", absolutePath);
}
// Test Cases
resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');
=======
const path = require('path');
function resolvePath(relativePath) {
    const absolutePath = path.resolve(__dirname, relativePath);
    console.log("Resolved Path:", absolutePath);
}
// Test Cases
resolvePath('../project/folder/file.txt');
resolvePath('nonexistent-folder/file.txt');
>>>>>>> caac55a7635e4f02df2636601f868e45bffb34fa
