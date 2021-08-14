const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

const hash = process.argv[2];

const sliceIndex = 2;
const object_dir = hash.slice(0, sliceIndex);
const object_filename = hash.slice(sliceIndex);
const objectPath = path.join('.git', 'objects', object_dir, object_filename);
const data = fs.readFileSync(objectPath);
const inflated = zlib.inflateSync(data);
const content = inflated.toString('utf8');
// \x00 - https://en.wikipedia.org/wiki/Null_character
process.stdout.write(content);
