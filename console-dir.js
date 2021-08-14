const fs = require('fs');

const stdin_fd = 0;
const content = fs.readFileSync(stdin_fd, 'utf-8');
console.dir(content);
