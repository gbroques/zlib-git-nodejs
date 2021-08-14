# zlib-git-nodejs
Read, hash, and store git objects with Node JS.

## Usage

### cat-file

```bash
$ node cat-file.js 9daeafb9864cf43055ae93beb0afd6c7d144bfa4 ↵
blob 5test
```

### hash-object

```bash
$ node cat-file.js 9daeafb9864cf43055ae93beb0afd6c7d144bfa4 | node hash-object.js ↵
'blob 5\x00test\n'
9daeafb9864cf43055ae93beb0afd6c7d144bfa4
```

## Articles

* https://git-scm.com/book/en/v2/Git-Internals-Git-Objects
* https://matthew-brett.github.io/curious-git/reading_git_objects.html
* https://stackoverflow.com/questions/7625251/compression-and-decompression-of-data-using-zlib-in-nodejs
* https://developpaper.com/front-end-ramble-git-internal-principle-git-object/
* https://stackoverflow.com/questions/6984139/how-can-i-get-the-sha1-hash-of-a-string-in-node-js
