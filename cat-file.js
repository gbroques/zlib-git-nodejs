const zlib = require('zlib');
const fs = require('fs');
const path = require('path');

/**
 * 40-digit SHA-1 object hash.
 *
 * For example,
 *
 *     9daeafb9864cf43055ae93beb0afd6c7d144bfa4
 *
 */
const hash = process.argv[2];

// First two digits of hash (e.g. 9d).
const objectDirectory = hash.slice(0, 2);

// Last 38 digits of hash,
// (e.g. aeafb9864cf43055ae93beb0afd6c7d144bfa4).
const objectFilename = hash.slice(2);

const objectPath = path.join('.git', 'objects', objectDirectory, objectFilename);
const compressed = fs.readFileSync(objectPath);
const decompressed = zlib.inflateSync(compressed);
const contents = decompressed.toString('utf8');
process.stdout.write(contents);
