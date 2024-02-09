<<<<<<< HEAD
const path = require('path');
function checkFileExtension(filePath, expectedExtension) {
    const fileExtension = path.extname(filePath);
    if (fileExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${fileExtension}`);
    }
}
// Test cases
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');
=======
const path = require('path');
function checkFileExtension(filePath, expectedExtension) {
    const fileExtension = path.extname(filePath);
    if (fileExtension === expectedExtension) {
        console.log(`File has the expected extension: ${expectedExtension}`);
    } else {
        console.log(`File does not have the expected extension. Expected: ${expectedExtension}, Actual: ${fileExtension}`);
    }
}
// Test cases
checkFileExtension('test-files/file1.txt', '.txt');
checkFileExtension('test-files/image.png', '.jpg');
>>>>>>> caac55a7635e4f02df2636601f868e45bffb34fa
