// Generated by CoffeeScript 1.9.3
var PaddingRight, _Length,
  extend = function(child, parent) { for (var key in parent) { if (hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
  hasProp = {}.hasOwnProperty;

_Length = require('./_Length');

module.exports = PaddingRight = (function(superClass) {
  extend(PaddingRight, superClass);

  function PaddingRight() {
    return PaddingRight.__super__.constructor.apply(this, arguments);
  }

  return PaddingRight;

})(_Length);
