# js-modules
A Complex Javascript Modules And Algorithm

## installation

```shell
npm install @fiandev/js-modules --save-dev
```

## how to usage

### esm
```javascript
import modules from "@fiandev/js-modules";

const { getType } = modules;

let dataType = getType([1, 2, 3]);
console.log(dataType) // array
```

### commonjs
```javascript
const modules = require("@fiandev/js-modules");

const { getType } = modules;

let dataType = getType([1, 2, 3]);
console.log(dataType) // array
```

> built with ❤️ by fiandev