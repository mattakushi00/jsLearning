import {lol} from './modules.mjs';

console.log(lol())

/*
es6 modules work in node only with:
fileExt: .mjs
flag node --experimental-modules index.mjs
must write fileExt everywhere (console/import from './file.mjs' not './file')
*/
