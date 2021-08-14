const fs = require('fs');
const crypto = require('crypto');

const stdin_fd = 0;
const content = fs.readFileSync(stdin_fd, 'utf-8');
const shasum = crypto.createHash('sha1');
shasum.update(content);
console.log(shasum.digest('hex'));
