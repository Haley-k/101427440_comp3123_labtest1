const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, 'Logs');

if (fs.existsSync(logsDir)) {
    fs.readdir(logsDir, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const filePath = path.join(logsDir, file);
            console.log(`delete files...${file}`);
            fs.unlinkSync(filePath);
        });

        fs.rmdir(logsDir, (err) => {
            if (err) throw err;
            console.log('Logs directory removed');
        });
    });
} else
    console.log('Logs directory does not exist');