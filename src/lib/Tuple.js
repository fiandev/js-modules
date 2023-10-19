import { isUndefined } from "../utilities/dataType.js";
import { inArray } from "../utilities/array.js";

export default class Tuple {
  constructor(...anythings) {
    this.values = [];

    let dumpValues = [];
    for (let anything of anythings) {
      if (!inArray(anything, dumpValues)) {
        this.values.push(anything);
        dumpValues.push(anything);
      }
    }
  }

  reset() {
    this.values = [];

    return this.values;
  }

  copy() {
    return this;
  }

  reverse() {
    this.values.reverse();

    return this.values;
  }
}
