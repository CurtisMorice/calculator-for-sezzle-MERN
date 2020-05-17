var _Reflect$construct = require("../core-js/reflect/construct");

var getPrototypeOf = require("./getPrototypeOf");

var isNativeReflectConstruct = require("./isNativeReflectConstruct");

var possibleConstructorReturn = require("./possibleConstructorReturn");

function _createSuper(Derived) {
  return function () {
    var Super = getPrototypeOf(Derived),
        result;

    if (isNativeReflectConstruct()) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper;