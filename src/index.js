import * as arrayUtils from "./utilities/array.js";
import * as stringUtils from "./utilities/string.js";
import * as numberUtils from "./utilities/number.js";
import * as randomUtils from "./utilities/random.js";
import * as objectUtils from "./utilities/object.js";
import * as dataTypeUtils from "./utilities/dataType.js";
import * as jsonUtils from "./utilities/json.js";
import * as utils from "./utilities/functions.js";
import * as exceptions from "./utilities/exceptions.js";

import Tuple from "./lib/Tuple.js";

export default {
  ...arrayUtils,
  ...stringUtils,
  ...numberUtils,
  ...randomUtils,
  ...objectUtils,
  ...dataTypeUtils,
  ...jsonUtils,
  ...exceptions,
  ...utils,
  Tuple,
};