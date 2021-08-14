# zlib-git-nodejs
Read, hash, and store git objects with Node JS.

Meant for educational purposes, and understanding git internals.

Currently *storing* git objects is not implemented.

## Usage

### cat-file
Node.js equivalent to `git cat-file -p <object hash>`.

```bash
$ git cat-file -p 9daeafb9864cf43055ae93beb0afd6c7d144bfa4 ↵
test
```

For viewing the header containing object type, size in bytes, and null character separating header from content.
```bash
$ node cat-file.js 9daeafb9864cf43055ae93beb0afd6c7d144bfa4 ↵
blob 5test
```

### console-dir
Uses `console.dir` to output contents from stdin to stdout.

```bash
$ node cat-file.js 9daeafb9864cf43055ae93beb0afd6c7d144bfa4 | node console-dir.js ↵
'blob 5\x00test\n'
```

For viewing hidden characters such as [null characters](https://en.wikipedia.org/wiki/Null_character) (`\x00`) or new-line characters (`\n`).

### hash-object
Node.js equivalent to `git hash-object --stdin`.

```bash
$ echo 'test' | git hash-object --stdin ↵
9daeafb9864cf43055ae93beb0afd6c7d144bfa4
```

For illustrative purposes, demonstrating the hash is the [SHA-1](https://en.wikipedia.org/wiki/SHA-1) of the object's full content, including header information.
```bash
$ node cat-file.js 9daeafb9864cf43055ae93beb0afd6c7d144bfa4 | node hash-object.js ↵
9daeafb9864cf43055ae93beb0afd6c7d144bfa4
```

## Limitations
Currently works with blobs, commits, but *not* **trees**.

## Articles

* https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
* https://matthew-brett.github.io/curious-git/reading_git_objects.html
* https://stackoverflow.com/questions/7625251/compression-and-decompression-of-data-using-zlib-in-nodejs
* https://developpaper.com/front-end-ramble-git-internal-principle-git-object/
* https://stackoverflow.com/questions/6984139/how-can-i-get-the-sha1-hash-of-a-string-in-node-js
