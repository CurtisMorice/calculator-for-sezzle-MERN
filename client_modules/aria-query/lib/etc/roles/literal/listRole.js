"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;
var listRole = {
  abstract: false,
  accessibleNameRequired: false,
  baseConcepts: [],
  childrenPresentational: false,
  nameFrom: ['author'],
  props: {},
  relatedConcepts: [{
    module: 'HTML',
    concept: {
      name: 'ol'
    }
  }, {
    module: 'HTML',
    concept: {
      name: 'ul'
    }
  }, {
    module: 'HTML',
    concept: {
      name: 'menu'
    }
  }],
  requireContextRole: [],
  requiredContextRole: [],
  requiredOwnedElements: [['group', 'listitem'], ['listitem']],
  requiredProps: {},
  superClass: [['roletype', 'structure', 'section']]
};
var _default = listRole;
exports.default = _default;