import { isUndefined } from "../utilities/dataType.js";
import { inArray } from "../utilities/array.js";

export default class Tuple {
  constructor(...items) {
    this.values = [];

    let dumpValues = [];
    for (let item of items) {
      if (!inArray(item, dumpValues)) {
        this.values.push(item);
        dumpValues.push(item);
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
