// Import File System module
const fs = require('fs');

// File name
const fileName = 'example.txt';

// 1. Create & Write File
fs.writeFile(fileName, 'Hello, this is the initial content.\n', (err) => {
    if (err) {
        console.error('Error creating file:', err);
        return;
    }
    console.log('File created and data written successfully.');

    // 2. Read File
    fs.readFile(fileName, 'utf8', (err, data) => {
        if (err) {
            console.error('Error reading file:', err);
            return;
        }
        console.log('\nFile Content after write:\n', data);

        // 3. Append Data
        fs.appendFile(fileName, 'This is appended content.\n', (err) => {
            if (err) {
                console.error('Error appending data:', err);
                return;
            }
            console.log('\nData appended successfully.');

            // 4. Read Again After Append
            fs.readFile(fileName, 'utf8', (err, updatedData) => {
                if (err) {
                    console.error('Error reading updated file:', err);
                    return;
                }
                console.log('\nUpdated File Content:\n', updatedData);

                // 5. Delete File
                fs.unlink(fileName, (err) => {
                    if (err) {
                        console.error('Error deleting file:', err);
                        return;
                    }
                    console.log('\nFile deleted successfully.');
                });
            });
        });
    });
});