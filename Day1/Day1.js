<<<<<<< HEAD
const fs = require('fs');
function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log(`Error reading file: ${err.code}: ${err.path} - ${err.message}`);
            } else {
                console.error(`Error reading file: ${err.message}`);
            }
        } else {
            console.log('File Content:');
            console.log(data);
        }
    });
}
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');
=======
const fs = require('fs');
function readFileContent(filePath) {
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            if (err.code === 'ENOENT') {
                console.log(`Error reading file: ${err.code}: ${err.path} - ${err.message}`);
            } else {
                console.error(`Error reading file: ${err.message}`);
            }
        } else {
            console.log('File Content:');
            console.log(data);
        }
    });
}
readFileContent('test-files/file1.txt');
readFileContent('test-files/empty-file.txt');
readFileContent('test-files/nonexistent-file.txt');
>>>>>>> caac55a7635e4f02df2636601f868e45bffb34fa
