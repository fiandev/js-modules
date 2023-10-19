import{clearNecessarySpaceOnBacktick}from"./string.js";import{getType}from"./dataType.js";export function typeErrorException(a,b){const c=clearNecessarySpaceOnBacktick(`
    [ERROR]
    type: typeError
    parameter with type '${b}' is can't fill with type '${getType(a)}'
  `);return c}export function maxValueException(a,b){const c=clearNecessarySpaceOnBacktick(`
    [ERROR]
    type: maxValue
    parameter with type '${getType(a)}' is can't greater than ${b}
  `);return c}export function invalidValueException(a){const b=clearNecessarySpaceOnBacktick(`
    [ERROR]
    type: invalidValue
    invalid value at parameter with type '${getType(a)}'
  `);return b}
//# sourceMappingURL=exceptions.js.map