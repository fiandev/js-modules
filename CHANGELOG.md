# CHANGELOG
## @fiandev/js-modules v1.1.0

> developed on Nov 13, 2023 - Nov 19, 2023

1. Delete environment browser and module at `.babelrc` [[#56a9a47](https://github.com/fiandev/js-modules/commit/56a9a474826b11bb8a93088f8817f91b37b4c846)]
2. Add function at file `./functions.js` [[#1908a74](https://github.com/fiandev/js-modules/commit/1908a74161cbf09d88d2739dd4235c72c43a9074)]
  - isValidEmail (check email is valid)
3. Add function at file `./number.js` [[#1908a74](https://github.com/fiandev/js-modules/commit/1908a74161cbf09d88d2739dd4235c72c43a9074)]
  - isEven (check number is even)
  - isOdd (check number is odd)
  - isPrime (check number is prime)
3. Add function at file `./random.js`
  - randomFloat (generate random float)
  - randomHexaCode (generate random hexa code with specific string length of result)
  - randomColor (generate random color with specific type of color)
4. Fix function at file `./array.js` [[#8f500e5](https://github.com/fiandev/js-modules/commit/8f500e51ec2b51e87498f446cbfa2a7acc522e93)]
  - fix `except is undefined` in arrayToString function
5. fix function at file `./random.js` [[#8f500e5](https://github.com/fiandev/js-modules/commit/8f500e51ec2b51e87498f446cbfa2a7acc522e93)]
  - fix `returned random of string always just 1 length of string` in randomString function