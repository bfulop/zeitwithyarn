import toConsumableArray from 'babel-runtime/helpers/toConsumableArray';
import _extends from 'babel-runtime/helpers/extends';
import getPrototypeOf from 'babel-runtime/core-js/object/get-prototype-of';
import classCallCheck from 'babel-runtime/helpers/classCallCheck';
import possibleConstructorReturn from 'babel-runtime/helpers/possibleConstructorReturn';
import inherits from 'babel-runtime/helpers/inherits';
import createClass from 'babel-runtime/helpers/createClass';
import lodash from 'lodash';
import mjmlParserXml from 'mjml-parser-xml';
import defineProperty from 'babel-runtime/helpers/defineProperty';
import some from 'lodash/some';
import find from 'lodash/find';
import escapeRegExp from 'lodash/escapeRegExp';
import keys from 'babel-runtime/core-js/object/keys';
import kebabCase from 'lodash/kebabCase';
import path from 'path';
import juice from 'juice';
import jsBeautify from 'js-beautify';
import cleanCss from 'clean-css';
import he from 'he';
import relateurl from 'relateurl';
import fs from 'fs';
import sourceMap from 'source-map';
import warning from 'warning';
import concat from 'lodash/concat';
import keys$1 from 'lodash/keys';
import includes from 'lodash/includes';
import filter from 'lodash/filter';
import _typeof from 'babel-runtime/helpers/typeof';
import forEach from 'lodash/forEach';
import map from 'lodash/map';
import crypto from 'crypto';
import url from 'url';
import range from 'lodash/range';
import repeat from 'lodash/repeat';
import min from 'lodash/min';
import omit from 'lodash/omit';
import reduce from 'lodash/reduce';
import fp from 'lodash/fp';
import mjmlWrapper from 'mjml-wrapper';

function commonjsRequire () {
	throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
}

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x.default : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var shorthandParser = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (cssValue, direction) {
  var splittedCssValue = cssValue.split(' ');
  var directions = {};

  switch (splittedCssValue.length) {
    case 2:
      directions = { top: 0, bottom: 0, left: 1, right: 1 };
      break;

    case 3:
      directions = { top: 0, left: 1, right: 1, bottom: 2 };
      break;

    case 4:
      directions = { top: 0, right: 1, bottom: 2, left: 3 };
      break;
    case 1:
    default:
      return parseInt(cssValue, 10);
  }

  return parseInt(splittedCssValue[directions[direction]] || 0, 10);
};

exports.borderParser = borderParser;



function borderParser(border) {
  return parseInt((0, lodash.get)(border.match(/(?:(?:^| )(\d+))/), 1), 10) || 0;
}
});

unwrapExports(shorthandParser);
var shorthandParser_1 = shorthandParser.borderParser;

var boolean_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcher = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _type2 = _interopRequireDefault(type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matcher = exports.matcher = /^boolean/gim;

exports.default = function () {
  return function (_Type) {
    (0, _inherits3.default)(Boolean, _Type);

    function Boolean(boolean) {
      (0, _classCallCheck3.default)(this, Boolean);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Boolean.__proto__ || (0, _getPrototypeOf2.default)(Boolean)).call(this, boolean));

      _this.matchers = [/^true$/i, /^false$/i];
      return _this;
    }

    (0, _createClass3.default)(Boolean, [{
      key: 'isValid',
      value: function isValid() {
        return this.value === true || this.value === false;
      }
    }]);
    return Boolean;
  }(_type2.default);
};
});

unwrapExports(boolean_1);
var boolean_2 = boolean_1.matcher;

var colors = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ['aliceblue', 'antiquewhite', 'aqua', 'aquamarine', 'azure', 'beige', 'bisque', 'black', 'blanchedalmond', 'blue', 'blueviolet', 'brown', 'burlywood', 'cadetblue', 'chartreuse', 'chocolate', 'coral', 'cornflowerblue', 'cornsilk', 'crimson', 'cyan', 'darkblue', 'darkcyan', 'darkgoldenrod', 'darkgray', 'darkgreen', 'darkgrey', 'darkkhaki', 'darkmagenta', 'darkolivegreen', 'darkorange', 'darkorchid', 'darkred', 'darksalmon', 'darkseagreen', 'darkslateblue', 'darkslategray', 'darkslategrey', 'darkturquoise', 'darkviolet', 'deeppink', 'deepskyblue', 'dimgray', 'dimgrey', 'dodgerblue', 'firebrick', 'floralwhite', 'forestgreen', 'fuchsia', 'gainsboro', 'ghostwhite', 'gold', 'goldenrod', 'gray', 'green', 'greenyellow', 'grey', 'honeydew', 'hotpink', 'indianred', 'indigo', 'ivory', 'khaki', 'lavender', 'lavenderblush', 'lawngreen', 'lemonchiffon', 'lightblue', 'lightcoral', 'lightcyan', 'lightgoldenrodyellow', 'lightgray', 'lightgreen', 'lightgrey', 'lightpink', 'lightsalmon', 'lightseagreen', 'lightskyblue', 'lightslategray', 'lightslategrey', 'lightsteelblue', 'lightyellow', 'lime', 'limegreen', 'linen', 'magenta', 'maroon', 'mediumaquamarine', 'mediumblue', 'mediumorchid', 'mediumpurple', 'mediumseagreen', 'mediumslateblue', 'mediumspringgreen', 'mediumturquoise', 'mediumvioletred', 'midnightblue', 'mintcream', 'mistyrose', 'moccasin', 'navajowhite', 'navy', 'oldlace', 'olive', 'olivedrab', 'orange', 'orangered', 'orchid', 'palegoldenrod', 'palegreen', 'paleturquoise', 'palevioletred', 'papayawhip', 'peachpuff', 'peru', 'pink', 'plum', 'powderblue', 'purple', 'rebeccapurple', 'red', 'rosybrown', 'royalblue', 'saddlebrown', 'salmon', 'sandybrown', 'seagreen', 'seashell', 'sienna', 'silver', 'skyblue', 'slateblue', 'slategray', 'slategrey', 'snow', 'springgreen', 'steelblue', 'tan', 'teal', 'thistle', 'tomato', 'transparent', 'turquoise', 'violet', 'wheat', 'white', 'whitesmoke', 'yellow', 'yellowgreen'];
module.exports = exports['default'];
});

unwrapExports(colors);

var color = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcher = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _type2 = _interopRequireDefault(type);



var _colors2 = _interopRequireDefault(colors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matcher = exports.matcher = /^color/gim;

var shorthandRegex = /^#\w{3}$/;
var replaceInputRegex = /^#(\w)(\w)(\w)$/;
var replaceOutput = '#$1$1$2$2$3$3';

exports.default = function () {
  return function (_Type) {
    (0, _inherits3.default)(Color, _Type);

    function Color(color) {
      (0, _classCallCheck3.default)(this, Color);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Color.__proto__ || (0, _getPrototypeOf2.default)(Color)).call(this, color));

      _this.matchers = [/rgba\(\d{1,3},\s?\d{1,3},\s?\d{1,3},\s?\d(\.\d{1,3})?\)/gi, /rgb\(\d{1,3},\s?\d{1,3},\s?\d{1,3}\)/gi, /^#([0-9a-f]{3}){1,2}$/gi, new RegExp('^(' + _colors2.default.join('|') + ')$')];
      return _this;
    }

    (0, _createClass3.default)(Color, [{
      key: 'getValue',
      value: function getValue() {
        if (this.value.match(shorthandRegex)) {
          return this.value.replace(replaceInputRegex, replaceOutput);
        }

        return this.value;
      }
    }]);
    return Color;
  }(_type2.default);
};
});

unwrapExports(color);
var color_1 = color.matcher;

var _enum = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcher = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _escapeRegExp2 = _interopRequireDefault(escapeRegExp);



var _type2 = _interopRequireDefault(type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matcher = exports.matcher = /^enum/gim;

exports.default = function (params) {
  var _class, _temp;

  var matchers = params.match(/\(([^)]+)\)/)[1].split(',');

  return _temp = _class = function (_Type) {
    (0, _inherits3.default)(Enum, _Type);

    function Enum(value) {
      (0, _classCallCheck3.default)(this, Enum);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Enum.__proto__ || (0, _getPrototypeOf2.default)(Enum)).call(this, value));

      _this.matchers = matchers.map(function (m) {
        return new RegExp('^' + (0, _escapeRegExp2.default)(m) + '$');
      });
      return _this;
    }

    return Enum;
  }(_type2.default), _class.errorMessage = 'has invalid value: $value for type Enum, only accepts ' + matchers.join(', '), _temp;
};
});

unwrapExports(_enum);
var _enum_1 = _enum.matcher;

var unit = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcher = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _escapeRegExp2 = _interopRequireDefault(escapeRegExp);



var _type2 = _interopRequireDefault(type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matcher = exports.matcher = /^unit\(.*\)/gim;

exports.default = function (params) {
  var _class, _temp;

  var units = params.match(/\(([^)]+)\)/)[1].split(',');
  var argsMatch = params.match(/\{([^}]+)\}/);
  var args = argsMatch && argsMatch[1] && argsMatch[1].split(',') || ['1']; // defaults to 1

  return _temp = _class = function (_Type) {
    (0, _inherits3.default)(Unit, _Type);

    function Unit(value) {
      (0, _classCallCheck3.default)(this, Unit);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Unit.__proto__ || (0, _getPrototypeOf2.default)(Unit)).call(this, value));

      _this.matchers = [new RegExp('^(((\\d|,|.){1,}(' + units.map(_escapeRegExp2.default).join('|') + ')|0)( )?){' + args.join(',') + '}$')];
      return _this;
    }

    return Unit;
  }(_type2.default), _class.errorMessage = 'has invalid value: $value for type Unit, only accepts (' + units.join(', ') + ') units and ' + args.join(' to ') + ' value(s)', _temp;
};
});

unwrapExports(unit);
var unit_1 = unit.matcher;

var string = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcher = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _type2 = _interopRequireDefault(type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matcher = exports.matcher = /^string/gim;

exports.default = function () {
  return function (_Type) {
    (0, _inherits3.default)(NString, _Type);

    function NString(value) {
      (0, _classCallCheck3.default)(this, NString);

      var _this = (0, _possibleConstructorReturn3.default)(this, (NString.__proto__ || (0, _getPrototypeOf2.default)(NString)).call(this, value));

      _this.matchers = [/.*/];
      return _this;
    }

    return NString;
  }(_type2.default);
};
});

unwrapExports(string);
var string_1 = string.matcher;

var integer = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.matcher = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _type2 = _interopRequireDefault(type);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matcher = exports.matcher = /^integer/gim;

exports.default = function () {
  return function (_Type) {
    (0, _inherits3.default)(NInteger, _Type);

    function NInteger(value) {
      (0, _classCallCheck3.default)(this, NInteger);

      var _this = (0, _possibleConstructorReturn3.default)(this, (NInteger.__proto__ || (0, _getPrototypeOf2.default)(NInteger)).call(this, value));

      _this.matchers = [/\d+/];
      return _this;
    }

    return NInteger;
  }(_type2.default);
};
});

unwrapExports(integer);
var integer_1 = integer.matcher;

var types = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _boolean2 = _interopRequireDefault(boolean_1);



var _color2 = _interopRequireDefault(color);



var _enum2 = _interopRequireDefault(_enum);



var _unit2 = _interopRequireDefault(unit);



var _string2 = _interopRequireDefault(string);



var _integer2 = _interopRequireDefault(integer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  boolean: { matcher: boolean_1.matcher, typeConstructor: _boolean2.default },
  enum: { matcher: _enum.matcher, typeConstructor: _enum2.default },
  color: { matcher: color.matcher, typeConstructor: _color2.default },
  unit: { matcher: unit.matcher, typeConstructor: _unit2.default },
  string: { matcher: string.matcher, typeConstructor: _string2.default },
  integer: { matcher: integer.matcher, typeConstructor: _integer2.default }
};
module.exports = exports['default'];
});

unwrapExports(types);

var type = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.initializeType = exports.types = undefined;



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _some2 = _interopRequireDefault(some);



var _find2 = _interopRequireDefault(find);



var _index2 = _interopRequireDefault(types);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Avoid recreate existing types
var types$$1 = exports.types = {};

var initializeType = exports.initializeType = function initializeType(typeConfig) {
  if (types$$1[typeConfig]) {
    return types$$1[typeConfig];
  }

  var _ref = (0, _find2.default)(_index2.default, function (type) {
    return !!typeConfig.match(type.matcher);
  }) || {},
      typeConstructor = _ref.typeConstructor;

  if (!typeConstructor) {
    throw new Error('No type found for ' + typeConfig);
  }

  types$$1[typeConfig] = typeConstructor(typeConfig);

  return types$$1[typeConfig];
};

var Type = function () {
  function Type(value) {
    (0, _classCallCheck3.default)(this, Type);

    this.value = value;
  }

  (0, _createClass3.default)(Type, [{
    key: 'isValid',
    value: function isValid() {
      var _this = this;

      return (0, _some2.default)(this.matchers, function (matcher) {
        return ('' + _this.value).match(matcher);
      });
    }
  }, {
    key: 'getErrorMessage',
    value: function getErrorMessage() {
      if (this.isValid()) {
        return;
      }

      var errorMessage = this.constructor.errorMessage || 'has invalid value: ' + this.value + ' for type ' + this.constructor.name + ' ';

      return errorMessage.replace(/\$value/g, this.value);
    }
  }, {
    key: 'getValue',
    value: function getValue() {
      return this.value;
    }
  }], [{
    key: 'check',
    value: function check(type) {
      return !!type.match(this.constructor.typeChecker);
    }
  }]);
  return Type;
}();

exports.default = Type;
});

unwrapExports(type);
var type_1 = type.initializeType;
var type_2 = type.types;

var formatAttributes = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _defineProperty3 = _interopRequireDefault(defineProperty);



var _extends5 = _interopRequireDefault(_extends);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (attributes, allowedAttributes) {
  return (0, lodash.reduce)(attributes, function (acc, val, attrName) {
    if (allowedAttributes && allowedAttributes[attrName]) {
      var TypeConstructor = (0, type.initializeType)(allowedAttributes[attrName]);

      if (TypeConstructor) {
        var type$$1 = new TypeConstructor(val);

        return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, attrName, type$$1.getValue()));
      }
    }

    return (0, _extends5.default)({}, acc, (0, _defineProperty3.default)({}, attrName, val));
  }, {});
};

module.exports = exports['default'];
});

unwrapExports(formatAttributes);

var jsonToXML_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _keys2 = _interopRequireDefault(keys);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var jsonToXML = function jsonToXML(_ref) {
  var tagName = _ref.tagName,
      attributes = _ref.attributes,
      children = _ref.children,
      content = _ref.content;

  var subNode = children && children.length > 0 ? children.map(jsonToXML).join('\n') : content || '';

  var stringAttrs = (0, _keys2.default)(attributes).map(function (attr) {
    return attr + '="' + attributes[attr] + '"';
  }).join(' ');

  return '<' + tagName + (stringAttrs === '' ? '>' : ' ' + stringAttrs + '>') + subNode + '</' + tagName + '>';
};

exports.default = jsonToXML;
module.exports = exports['default'];
});

unwrapExports(jsonToXML_1);

var components_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerComponent = registerComponent;
exports.initComponent = initComponent;



var _kebabCase2 = _interopRequireDefault(kebabCase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var components = {};

function registerComponent(Component) {
  components[(0, _kebabCase2.default)(Component.name)] = Component;
}

function initComponent(_ref) {
  var initialDatas = _ref.initialDatas,
      name = _ref.name;

  var Component = components[name];

  if (Component) {
    var component = new Component(initialDatas);

    if (component.headStyle) {
      component.context.addHeadSyle(name, component.headStyle);
    }
    if (component.componentHeadStyle) {
      component.context.addComponentHeadSyle(component.componentHeadStyle);
    }

    return component;
  }

  return null;
}

exports.default = components;
});

unwrapExports(components_1);
var components_2 = components_1.registerComponent;
var components_3 = components_1.initComponent;

var createComponent = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadComponent = exports.BodyComponent = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _extends3 = _interopRequireDefault(_extends);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);

var _class, _temp;





var _mjmlParserXml2 = _interopRequireDefault(mjmlParserXml);



var _shorthandParser2 = _interopRequireDefault(shorthandParser);



var _formatAttributes2 = _interopRequireDefault(formatAttributes);



var _jsonToXML2 = _interopRequireDefault(jsonToXML_1);



var _components2 = _interopRequireDefault(components_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Component = (_temp = _class = function () {
  (0, _createClass3.default)(Component, null, [{
    key: 'getTagName',
    value: function getTagName() {
      return (0, lodash.kebabCase)(this.name);
    }
  }, {
    key: 'isRawElement',
    value: function isRawElement() {
      return !!this.rawElement;
    }
  }]);

  function Component() {
    var initialDatas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, Component);
    var _initialDatas$attribu = initialDatas.attributes,
        attributes = _initialDatas$attribu === undefined ? {} : _initialDatas$attribu,
        _initialDatas$childre = initialDatas.children,
        children = _initialDatas$childre === undefined ? [] : _initialDatas$childre,
        _initialDatas$content = initialDatas.content,
        content = _initialDatas$content === undefined ? '' : _initialDatas$content,
        _initialDatas$context = initialDatas.context,
        context = _initialDatas$context === undefined ? {} : _initialDatas$context,
        _initialDatas$props = initialDatas.props,
        props = _initialDatas$props === undefined ? {} : _initialDatas$props,
        _initialDatas$globalA = initialDatas.globalAttributes,
        globalAttributes = _initialDatas$globalA === undefined ? {} : _initialDatas$globalA;


    this.props = (0, _extends3.default)({}, props, {
      children: children,
      content: content
    });

    this.attributes = (0, _formatAttributes2.default)((0, _extends3.default)({}, this.constructor.defaultAttributes, globalAttributes, attributes), this.constructor.allowedAttributes);
    this.context = context;

    return this;
  }

  (0, _createClass3.default)(Component, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return this.context;
    }
  }, {
    key: 'getAttribute',
    value: function getAttribute(name) {
      return this.attributes[name];
    }
  }, {
    key: 'getContent',
    value: function getContent() {
      return this.props.content.trim();
    }
  }, {
    key: 'renderMJML',
    value: function renderMJML(mjml) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      if (typeof mjml === 'string') {
        mjml = (0, _mjmlParserXml2.default)(mjml, (0, _extends3.default)({}, options, {
          components: _components2.default,
          ignoreIncludes: true
        }));
      }

      return this.context.processing(mjml, this.context);
    }
  }]);
  return Component;
}(), _class.defaultAttributes = {}, _temp);

var BodyComponent = function (_Component) {
  (0, _inherits3.default)(BodyComponent, _Component);

  function BodyComponent() {
    (0, _classCallCheck3.default)(this, BodyComponent);
    return (0, _possibleConstructorReturn3.default)(this, (BodyComponent.__proto__ || (0, _getPrototypeOf2.default)(BodyComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(BodyComponent, [{
    key: 'getStyles',

    // eslint-disable-next-line class-methods-use-this
    value: function getStyles() {
      return {};
    }
  }, {
    key: 'getShorthandAttrValue',
    value: function getShorthandAttrValue(attribute, direction) {
      var mjAttributeDirection = this.getAttribute(attribute + '-' + direction);
      var mjAttribute = this.getAttribute(attribute);

      if (mjAttributeDirection) {
        return parseInt(mjAttributeDirection, 10);
      }

      if (!mjAttribute) {
        return 0;
      }

      return (0, _shorthandParser2.default)(mjAttribute, direction);
    }
  }, {
    key: 'getShorthandBorderValue',
    value: function getShorthandBorderValue(direction) {
      var borderDirection = direction && this.getAttribute('border-' + direction);
      var border = this.getAttribute('border');

      return (0, shorthandParser.borderParser)(borderDirection || border || '0', 10);
    }
  }, {
    key: 'getBoxWidths',
    value: function getBoxWidths() {
      var containerWidth = this.context.containerWidth;

      var parsedWidth = parseInt(containerWidth, 10);

      var paddings = this.getShorthandAttrValue('padding', 'right') + this.getShorthandAttrValue('padding', 'left');

      var borders = this.getShorthandBorderValue('right') + this.getShorthandBorderValue('left');

      return {
        totalWidth: parsedWidth,
        borders: borders,
        paddings: paddings,
        box: parsedWidth - paddings - borders
      };
    }
  }, {
    key: 'htmlAttributes',
    value: function htmlAttributes(attributes) {
      var _this2 = this;

      var specialAttributes = {
        style: function style(v) {
          return _this2.styles(v);
        },
        default: lodash.identity
      };

      return (0, lodash.reduce)(attributes, function (output, v, name) {
        var value = (specialAttributes[name] || specialAttributes.default)(v);

        if (!(0, lodash.isNil)(value)) {
          return output + ' ' + name + '="' + value + '"';
        }

        return output;
      }, '');
    }
  }, {
    key: 'styles',
    value: function styles(_styles) {
      var stylesObject = void 0;

      if (_styles) {
        if (typeof _styles === 'string') {
          stylesObject = (0, lodash.get)(this.getStyles(), _styles);
        } else {
          stylesObject = _styles;
        }
      }

      return (0, lodash.reduce)(stylesObject, function (output, value, name) {
        if (!(0, lodash.isNil)(value)) {
          return '' + output + name + ':' + value + ';';
        }
        return output;
      }, '');
    }
  }, {
    key: 'renderChildren',
    value: function renderChildren(childrens) {
      var _this3 = this;

      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var _options$props = options.props,
          props = _options$props === undefined ? {} : _options$props,
          _options$renderer = options.renderer,
          renderer = _options$renderer === undefined ? function (component) {
        return component.render();
      } : _options$renderer,
          _options$attributes = options.attributes,
          attributes = _options$attributes === undefined ? {} : _options$attributes,
          _options$rawXML = options.rawXML,
          rawXML = _options$rawXML === undefined ? false : _options$rawXML;


      childrens = childrens || this.props.children;

      if (rawXML) {
        return childrens.map(function (child) {
          return (0, _jsonToXML2.default)(child);
        }).join('\n');
      }

      var sibling = childrens.length;

      var rawComponents = (0, lodash.filter)(_components2.default, function (c) {
        return c.isRawElement();
      });
      var nonRawSiblings = childrens.filter(function (child) {
        return !(0, lodash.find)(rawComponents, function (c) {
          return c.getTagName() === child.tagName;
        });
      }).length;

      var output = '';
      var index = 0;

      (0, lodash.forEach)(childrens, function (children) {
        var component = (0, components_1.initComponent)({
          name: children.tagName,
          initialDatas: (0, _extends3.default)({}, children, {
            attributes: (0, _extends3.default)({}, attributes, children.attributes),
            context: _this3.getChildContext(),
            props: (0, _extends3.default)({}, props, {
              first: index === 0,
              index: index,
              last: index + 1 === sibling,
              sibling: sibling,
              nonRawSiblings: nonRawSiblings
            })
          })
        });

        if (component !== null) {
          output += renderer(component);
        }

        index++; // eslint-disable-line no-plusplus
      });

      return output;
    }
  }]);
  return BodyComponent;
}(Component);

exports.BodyComponent = BodyComponent;

var HeadComponent = exports.HeadComponent = function (_Component2) {
  (0, _inherits3.default)(HeadComponent, _Component2);

  function HeadComponent() {
    (0, _classCallCheck3.default)(this, HeadComponent);
    return (0, _possibleConstructorReturn3.default)(this, (HeadComponent.__proto__ || (0, _getPrototypeOf2.default)(HeadComponent)).apply(this, arguments));
  }

  (0, _createClass3.default)(HeadComponent, [{
    key: 'handlerChildren',
    value: function handlerChildren() {
      var _this5 = this;

      var childrens = this.props.children;

      return childrens.map(function (children) {
        var component = (0, components_1.initComponent)({
          name: children.tagName,
          initialDatas: (0, _extends3.default)({}, children, {
            context: _this5.getChildContext()
          })
        });

        if (!component) {
          // eslint-disable-next-line no-console
          console.error('No matching component for tag : ' + children.tagName);
          return null;
        }

        if (component.handler) {
          component.handler();
        }

        if (component.render) {
          return component.render();
        }
        return null;
      });
    }
  }], [{
    key: 'getTagName',
    value: function getTagName() {
      return (0, lodash.kebabCase)(this.name);
    }
  }]);
  return HeadComponent;
}(Component);
});

unwrapExports(createComponent);
var createComponent_1 = createComponent.HeadComponent;
var createComponent_2 = createComponent.BodyComponent;

function createMap(values, ignoreCase) {
  var map$$1 = {};
  values.forEach(function(value) {
    map$$1[value] = 1;
  });
  return ignoreCase ? function(value) {
    return map$$1[value.toLowerCase()] === 1;
  } : function(value) {
    return map$$1[value] === 1;
  };
}

var createMap_1 = createMap;
var createMapFromString = function(values, ignoreCase) {
  return createMap(values.split(/,/), ignoreCase);
};

var utils = {
	createMap: createMap_1,
	createMapFromString: createMapFromString
};

var createMapFromString$1 = utils.createMapFromString;

function makeMap(values) {
  return createMapFromString$1(values, true);
}

// Regular Expressions for parsing tags and attributes
var singleAttrIdentifier = /([^\s"'<>/=]+)/,
    singleAttrAssigns = [/=/],
    singleAttrValues = [
      // attr value double quotes
      /"([^"]*)"+/.source,
      // attr value, single quotes
      /'([^']*)'+/.source,
      // attr value, no quotes
      /([^ \t\n\f\r"'`=<>]+)/.source
    ],
    // https://www.w3.org/TR/1999/REC-xml-names-19990114/#NT-QName
    qnameCapture = (function() {
      // based on https://www.npmjs.com/package/ncname
      var combiningChar = '\\u0300-\\u0345\\u0360\\u0361\\u0483-\\u0486\\u0591-\\u05A1\\u05A3-\\u05B9\\u05BB-\\u05BD\\u05BF\\u05C1\\u05C2\\u05C4\\u064B-\\u0652\\u0670\\u06D6-\\u06E4\\u06E7\\u06E8\\u06EA-\\u06ED\\u0901-\\u0903\\u093C\\u093E-\\u094D\\u0951-\\u0954\\u0962\\u0963\\u0981-\\u0983\\u09BC\\u09BE-\\u09C4\\u09C7\\u09C8\\u09CB-\\u09CD\\u09D7\\u09E2\\u09E3\\u0A02\\u0A3C\\u0A3E-\\u0A42\\u0A47\\u0A48\\u0A4B-\\u0A4D\\u0A70\\u0A71\\u0A81-\\u0A83\\u0ABC\\u0ABE-\\u0AC5\\u0AC7-\\u0AC9\\u0ACB-\\u0ACD\\u0B01-\\u0B03\\u0B3C\\u0B3E-\\u0B43\\u0B47\\u0B48\\u0B4B-\\u0B4D\\u0B56\\u0B57\\u0B82\\u0B83\\u0BBE-\\u0BC2\\u0BC6-\\u0BC8\\u0BCA-\\u0BCD\\u0BD7\\u0C01-\\u0C03\\u0C3E-\\u0C44\\u0C46-\\u0C48\\u0C4A-\\u0C4D\\u0C55\\u0C56\\u0C82\\u0C83\\u0CBE-\\u0CC4\\u0CC6-\\u0CC8\\u0CCA-\\u0CCD\\u0CD5\\u0CD6\\u0D02\\u0D03\\u0D3E-\\u0D43\\u0D46-\\u0D48\\u0D4A-\\u0D4D\\u0D57\\u0E31\\u0E34-\\u0E3A\\u0E47-\\u0E4E\\u0EB1\\u0EB4-\\u0EB9\\u0EBB\\u0EBC\\u0EC8-\\u0ECD\\u0F18\\u0F19\\u0F35\\u0F37\\u0F39\\u0F3E\\u0F3F\\u0F71-\\u0F84\\u0F86-\\u0F8B\\u0F90-\\u0F95\\u0F97\\u0F99-\\u0FAD\\u0FB1-\\u0FB7\\u0FB9\\u20D0-\\u20DC\\u20E1\\u302A-\\u302F\\u3099\\u309A';
      var digit = '0-9\\u0660-\\u0669\\u06F0-\\u06F9\\u0966-\\u096F\\u09E6-\\u09EF\\u0A66-\\u0A6F\\u0AE6-\\u0AEF\\u0B66-\\u0B6F\\u0BE7-\\u0BEF\\u0C66-\\u0C6F\\u0CE6-\\u0CEF\\u0D66-\\u0D6F\\u0E50-\\u0E59\\u0ED0-\\u0ED9\\u0F20-\\u0F29';
      var extender = '\\xB7\\u02D0\\u02D1\\u0387\\u0640\\u0E46\\u0EC6\\u3005\\u3031-\\u3035\\u309D\\u309E\\u30FC-\\u30FE';
      var letter = 'A-Za-z\\xC0-\\xD6\\xD8-\\xF6\\xF8-\\u0131\\u0134-\\u013E\\u0141-\\u0148\\u014A-\\u017E\\u0180-\\u01C3\\u01CD-\\u01F0\\u01F4\\u01F5\\u01FA-\\u0217\\u0250-\\u02A8\\u02BB-\\u02C1\\u0386\\u0388-\\u038A\\u038C\\u038E-\\u03A1\\u03A3-\\u03CE\\u03D0-\\u03D6\\u03DA\\u03DC\\u03DE\\u03E0\\u03E2-\\u03F3\\u0401-\\u040C\\u040E-\\u044F\\u0451-\\u045C\\u045E-\\u0481\\u0490-\\u04C4\\u04C7\\u04C8\\u04CB\\u04CC\\u04D0-\\u04EB\\u04EE-\\u04F5\\u04F8\\u04F9\\u0531-\\u0556\\u0559\\u0561-\\u0586\\u05D0-\\u05EA\\u05F0-\\u05F2\\u0621-\\u063A\\u0641-\\u064A\\u0671-\\u06B7\\u06BA-\\u06BE\\u06C0-\\u06CE\\u06D0-\\u06D3\\u06D5\\u06E5\\u06E6\\u0905-\\u0939\\u093D\\u0958-\\u0961\\u0985-\\u098C\\u098F\\u0990\\u0993-\\u09A8\\u09AA-\\u09B0\\u09B2\\u09B6-\\u09B9\\u09DC\\u09DD\\u09DF-\\u09E1\\u09F0\\u09F1\\u0A05-\\u0A0A\\u0A0F\\u0A10\\u0A13-\\u0A28\\u0A2A-\\u0A30\\u0A32\\u0A33\\u0A35\\u0A36\\u0A38\\u0A39\\u0A59-\\u0A5C\\u0A5E\\u0A72-\\u0A74\\u0A85-\\u0A8B\\u0A8D\\u0A8F-\\u0A91\\u0A93-\\u0AA8\\u0AAA-\\u0AB0\\u0AB2\\u0AB3\\u0AB5-\\u0AB9\\u0ABD\\u0AE0\\u0B05-\\u0B0C\\u0B0F\\u0B10\\u0B13-\\u0B28\\u0B2A-\\u0B30\\u0B32\\u0B33\\u0B36-\\u0B39\\u0B3D\\u0B5C\\u0B5D\\u0B5F-\\u0B61\\u0B85-\\u0B8A\\u0B8E-\\u0B90\\u0B92-\\u0B95\\u0B99\\u0B9A\\u0B9C\\u0B9E\\u0B9F\\u0BA3\\u0BA4\\u0BA8-\\u0BAA\\u0BAE-\\u0BB5\\u0BB7-\\u0BB9\\u0C05-\\u0C0C\\u0C0E-\\u0C10\\u0C12-\\u0C28\\u0C2A-\\u0C33\\u0C35-\\u0C39\\u0C60\\u0C61\\u0C85-\\u0C8C\\u0C8E-\\u0C90\\u0C92-\\u0CA8\\u0CAA-\\u0CB3\\u0CB5-\\u0CB9\\u0CDE\\u0CE0\\u0CE1\\u0D05-\\u0D0C\\u0D0E-\\u0D10\\u0D12-\\u0D28\\u0D2A-\\u0D39\\u0D60\\u0D61\\u0E01-\\u0E2E\\u0E30\\u0E32\\u0E33\\u0E40-\\u0E45\\u0E81\\u0E82\\u0E84\\u0E87\\u0E88\\u0E8A\\u0E8D\\u0E94-\\u0E97\\u0E99-\\u0E9F\\u0EA1-\\u0EA3\\u0EA5\\u0EA7\\u0EAA\\u0EAB\\u0EAD\\u0EAE\\u0EB0\\u0EB2\\u0EB3\\u0EBD\\u0EC0-\\u0EC4\\u0F40-\\u0F47\\u0F49-\\u0F69\\u10A0-\\u10C5\\u10D0-\\u10F6\\u1100\\u1102\\u1103\\u1105-\\u1107\\u1109\\u110B\\u110C\\u110E-\\u1112\\u113C\\u113E\\u1140\\u114C\\u114E\\u1150\\u1154\\u1155\\u1159\\u115F-\\u1161\\u1163\\u1165\\u1167\\u1169\\u116D\\u116E\\u1172\\u1173\\u1175\\u119E\\u11A8\\u11AB\\u11AE\\u11AF\\u11B7\\u11B8\\u11BA\\u11BC-\\u11C2\\u11EB\\u11F0\\u11F9\\u1E00-\\u1E9B\\u1EA0-\\u1EF9\\u1F00-\\u1F15\\u1F18-\\u1F1D\\u1F20-\\u1F45\\u1F48-\\u1F4D\\u1F50-\\u1F57\\u1F59\\u1F5B\\u1F5D\\u1F5F-\\u1F7D\\u1F80-\\u1FB4\\u1FB6-\\u1FBC\\u1FBE\\u1FC2-\\u1FC4\\u1FC6-\\u1FCC\\u1FD0-\\u1FD3\\u1FD6-\\u1FDB\\u1FE0-\\u1FEC\\u1FF2-\\u1FF4\\u1FF6-\\u1FFC\\u2126\\u212A\\u212B\\u212E\\u2180-\\u2182\\u3007\\u3021-\\u3029\\u3041-\\u3094\\u30A1-\\u30FA\\u3105-\\u312C\\u4E00-\\u9FA5\\uAC00-\\uD7A3';
      var ncname = '[' + letter + '_][' + letter + digit + '\\.\\-_' + combiningChar + extender + ']*';
      return '((?:' + ncname + '\\:)?' + ncname + ')';
    })(),
    startTagOpen = new RegExp('^<' + qnameCapture),
    startTagClose = /^\s*(\/?)>/,
    endTag = new RegExp('^<\\/' + qnameCapture + '[^>]*>'),
    doctype = /^<!DOCTYPE\s?[^>]+>/i;

var IS_REGEX_CAPTURING_BROKEN = false;
'x'.replace(/x(.)?/g, function(m, g) {
  IS_REGEX_CAPTURING_BROKEN = g === '';
});

// Empty Elements
var empty = makeMap('area,base,basefont,br,col,embed,frame,hr,img,input,isindex,keygen,link,meta,param,source,track,wbr');

// Inline Elements
var inline = makeMap('a,abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,code,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,noscript,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,svg,textarea,tt,u,var');

// Elements that you can, intentionally, leave open
// (and which close themselves)
var closeSelf = makeMap('colgroup,dd,dt,li,option,p,td,tfoot,th,thead,tr,source');

// Attributes that have their values filled in disabled='disabled'
var fillAttrs = makeMap('checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected');

// Special Elements (can contain anything)
var special = makeMap('script,style');

// HTML5 tags https://html.spec.whatwg.org/multipage/indices.html#elements-3
// Phrasing Content https://html.spec.whatwg.org/multipage/dom.html#phrasing-content
var nonPhrasing = makeMap('address,article,aside,base,blockquote,body,caption,col,colgroup,dd,details,dialog,div,dl,dt,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,legend,li,menuitem,meta,ol,optgroup,option,param,rp,rt,source,style,summary,tbody,td,tfoot,th,thead,title,tr,track,ul');

var reCache = {};

function attrForHandler(handler) {
  var pattern = singleAttrIdentifier.source +
                '(?:\\s*(' + joinSingleAttrAssigns(handler) + ')' +
                '[ \\t\\n\\f\\r]*(?:' + singleAttrValues.join('|') + '))?';
  if (handler.customAttrSurround) {
    var attrClauses = [];
    for (var i = handler.customAttrSurround.length - 1; i >= 0; i--) {
      attrClauses[i] = '(?:' +
                       '(' + handler.customAttrSurround[i][0].source + ')\\s*' +
                       pattern +
                       '\\s*(' + handler.customAttrSurround[i][1].source + ')' +
                       ')';
    }
    attrClauses.push('(?:' + pattern + ')');
    pattern = '(?:' + attrClauses.join('|') + ')';
  }
  return new RegExp('^\\s*' + pattern);
}

function joinSingleAttrAssigns(handler) {
  return singleAttrAssigns.concat(
    handler.customAttrAssign || []
  ).map(function(assign) {
    return '(?:' + assign.source + ')';
  }).join('|');
}

function HTMLParser(html, handler) {
  var stack = [], lastTag;
  var attribute = attrForHandler(handler);
  var last, prevTag, nextTag;
  while (html) {
    last = html;
    // Make sure we're not in a script or style element
    if (!lastTag || !special(lastTag)) {
      var textEnd = html.indexOf('<');
      if (textEnd === 0) {
        // Comment:
        if (/^<!--/.test(html)) {
          var commentEnd = html.indexOf('-->');

          if (commentEnd >= 0) {
            if (handler.comment) {
              handler.comment(html.substring(4, commentEnd));
            }
            html = html.substring(commentEnd + 3);
            prevTag = '';
            continue;
          }
        }

        // https://en.wikipedia.org/wiki/Conditional_comment#Downlevel-revealed_conditional_comment
        if (/^<!\[/.test(html)) {
          var conditionalEnd = html.indexOf(']>');

          if (conditionalEnd >= 0) {
            if (handler.comment) {
              handler.comment(html.substring(2, conditionalEnd + 1), true /* non-standard */);
            }
            html = html.substring(conditionalEnd + 2);
            prevTag = '';
            continue;
          }
        }

        // Doctype:
        var doctypeMatch = html.match(doctype);
        if (doctypeMatch) {
          if (handler.doctype) {
            handler.doctype(doctypeMatch[0]);
          }
          html = html.substring(doctypeMatch[0].length);
          prevTag = '';
          continue;
        }

        // End tag:
        var endTagMatch = html.match(endTag);
        if (endTagMatch) {
          html = html.substring(endTagMatch[0].length);
          endTagMatch[0].replace(endTag, parseEndTag);
          prevTag = '/' + endTagMatch[1].toLowerCase();
          continue;
        }

        // Start tag:
        var startTagMatch = parseStartTag(html);
        if (startTagMatch) {
          html = startTagMatch.rest;
          handleStartTag(startTagMatch);
          prevTag = startTagMatch.tagName.toLowerCase();
          continue;
        }
      }

      var text;
      if (textEnd >= 0) {
        text = html.substring(0, textEnd);
        html = html.substring(textEnd);
      }
      else {
        text = html;
        html = '';
      }

      // next tag
      var nextTagMatch = parseStartTag(html);
      if (nextTagMatch) {
        nextTag = nextTagMatch.tagName;
      }
      else {
        nextTagMatch = html.match(endTag);
        if (nextTagMatch) {
          nextTag = '/' + nextTagMatch[1];
        }
        else {
          nextTag = '';
        }
      }

      if (handler.chars) {
        handler.chars(text, prevTag, nextTag);
      }
      prevTag = '';

    }
    else {
      var stackedTag = lastTag.toLowerCase();
      var reStackedTag = reCache[stackedTag] || (reCache[stackedTag] = new RegExp('([\\s\\S]*?)</' + stackedTag + '[^>]*>', 'i'));

      html = html.replace(reStackedTag, function(all, text) {
        if (stackedTag !== 'script' && stackedTag !== 'style' && stackedTag !== 'noscript') {
          text = text
            .replace(/<!--([\s\S]*?)-->/g, '$1')
            .replace(/<!\[CDATA\[([\s\S]*?)]]>/g, '$1');
        }

        if (handler.chars) {
          handler.chars(text);
        }

        return '';
      });

      parseEndTag('</' + stackedTag + '>', stackedTag);
    }

    if (html === last) {
      throw new Error('Parse Error: ' + html);
    }
  }

  if (!handler.partialMarkup) {
    // Clean up any remaining tags
    parseEndTag();
  }

  function parseStartTag(input) {
    var start = input.match(startTagOpen);
    if (start) {
      var match = {
        tagName: start[1],
        attrs: []
      };
      input = input.slice(start[0].length);
      var end, attr;
      while (!(end = input.match(startTagClose)) && (attr = input.match(attribute))) {
        input = input.slice(attr[0].length);
        match.attrs.push(attr);
      }
      if (end) {
        match.unarySlash = end[1];
        match.rest = input.slice(end[0].length);
        return match;
      }
    }
  }

  function closeIfFound(tagName) {
    if (findTag(tagName) >= 0) {
      parseEndTag('', tagName);
      return true;
    }
  }

  function handleStartTag(match) {
    var tagName = match.tagName;
    var unarySlash = match.unarySlash;

    if (handler.html5) {
      if (lastTag === 'p' && nonPhrasing(tagName)) {
        parseEndTag('', lastTag);
      }
      else if (tagName === 'tbody') {
        closeIfFound('thead');
      }
      else if (tagName === 'tfoot') {
        if (!closeIfFound('tbody')) {
          closeIfFound('thead');
        }
      }
      if (tagName === 'col' && findTag('colgroup') < 0) {
        lastTag = 'colgroup';
        stack.push({ tag: lastTag, attrs: [] });
        if (handler.start) {
          handler.start(lastTag, [], false, '');
        }
      }
    }

    if (!handler.html5 && !inline(tagName)) {
      while (lastTag && inline(lastTag)) {
        parseEndTag('', lastTag);
      }
    }

    if (closeSelf(tagName) && lastTag === tagName) {
      parseEndTag('', tagName);
    }

    var unary = empty(tagName) || tagName === 'html' && lastTag === 'head' || !!unarySlash;

    var attrs = match.attrs.map(function(args) {
      var name, value, customOpen, customClose, customAssign, quote;
      var ncp = 7; // number of captured parts, scalar

      // hackish work around FF bug https://bugzilla.mozilla.org/show_bug.cgi?id=369778
      if (IS_REGEX_CAPTURING_BROKEN && args[0].indexOf('""') === -1) {
        if (args[3] === '') { delete args[3]; }
        if (args[4] === '') { delete args[4]; }
        if (args[5] === '') { delete args[5]; }
      }

      function populate(index) {
        customAssign = args[index];
        value = args[index + 1];
        if (typeof value !== 'undefined') {
          return '"';
        }
        value = args[index + 2];
        if (typeof value !== 'undefined') {
          return '\'';
        }
        value = args[index + 3];
        if (typeof value === 'undefined' && fillAttrs(name)) {
          value = name;
        }
        return '';
      }

      var j = 1;
      if (handler.customAttrSurround) {
        for (var i = 0, l = handler.customAttrSurround.length; i < l; i++, j += ncp) {
          name = args[j + 1];
          if (name) {
            quote = populate(j + 2);
            customOpen = args[j];
            customClose = args[j + 6];
            break;
          }
        }
      }

      if (!name && (name = args[j])) {
        quote = populate(j + 1);
      }

      return {
        name: name,
        value: value,
        customAssign: customAssign || '=',
        customOpen: customOpen || '',
        customClose: customClose || '',
        quote: quote || ''
      };
    });

    if (!unary) {
      stack.push({ tag: tagName, attrs: attrs });
      lastTag = tagName;
      unarySlash = '';
    }

    if (handler.start) {
      handler.start(tagName, attrs, unary, unarySlash);
    }
  }

  function findTag(tagName) {
    var pos;
    var needle = tagName.toLowerCase();
    for (pos = stack.length - 1; pos >= 0; pos--) {
      if (stack[pos].tag.toLowerCase() === needle) {
        break;
      }
    }
    return pos;
  }

  function parseEndTag(tag, tagName) {
    var pos;

    // Find the closest opened tag of the same type
    if (tagName) {
      pos = findTag(tagName);
    }
    // If no tag name is provided, clean shop
    else {
      pos = 0;
    }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (handler.end) {
          handler.end(stack[i].tag, stack[i].attrs, i > pos || !tag);
        }
      }

      // Remove the open elements from the stack
      stack.length = pos;
      lastTag = pos && stack[pos - 1].tag;
    }
    else if (tagName.toLowerCase() === 'br') {
      if (handler.start) {
        handler.start(tagName, [], true, '');
      }
    }
    else if (tagName.toLowerCase() === 'p') {
      if (handler.start) {
        handler.start(tagName, [], false, '', true);
      }
      if (handler.end) {
        handler.end(tagName, []);
      }
    }
  }
}

var HTMLParser_1 = HTMLParser;
var HTMLtoXML = function(html) {
  var results = '';

  new HTMLParser(html, {
    start: function(tag, attrs, unary) {
      results += '<' + tag;

      for (var i = 0, len = attrs.length; i < len; i++) {
        results += ' ' + attrs[i].name + '="' + (attrs[i].value || '').replace(/"/g, '&#34;') + '"';
      }

      results += (unary ? '/' : '') + '>';
    },
    end: function(tag) {
      results += '</' + tag + '>';
    },
    chars: function(text) {
      results += text;
    },
    comment: function(text) {
      results += '<!--' + text + '-->';
    },
    ignore: function(text) {
      results += text;
    }
  });

  return results;
};

var HTMLtoDOM = function(html, doc) {
  // There can be only one of these elements
  var one = {
    html: true,
    head: true,
    body: true,
    title: true
  };

  // Enforce a structure for the document
  var structure = {
    link: 'head',
    base: 'head'
  };

  if (doc) {
    doc = doc.ownerDocument || doc.getOwnerDocument && doc.getOwnerDocument() || doc;
  }
  else if (typeof DOMDocument !== 'undefined') {
    doc = new DOMDocument();
  }
  else if (typeof document !== 'undefined' && document.implementation && document.implementation.createDocument) {
    doc = document.implementation.createDocument('', '', null);
  }
  else if (typeof ActiveX !== 'undefined') {
    doc = new ActiveXObject('Msxml.DOMDocument');
  }

  var elems = [],
      documentElement = doc.documentElement ||
        doc.getDocumentElement && doc.getDocumentElement();

  // If we're dealing with an empty document then we
  // need to pre-populate it with the HTML document structure
  if (!documentElement && doc.createElement) {
    (function() {
      var html = doc.createElement('html');
      var head = doc.createElement('head');
      head.appendChild(doc.createElement('title'));
      html.appendChild(head);
      html.appendChild(doc.createElement('body'));
      doc.appendChild(html);
    })();
  }

  // Find all the unique elements
  if (doc.getElementsByTagName) {
    for (var i in one) {
      one[i] = doc.getElementsByTagName(i)[0];
    }
  }

  // If we're working with a document, inject contents into
  // the body element
  var curParentNode = one.body;

  new HTMLParser(html, {
    start: function(tagName, attrs, unary) {
      // If it's a pre-built element, then we can ignore
      // its construction
      if (one[tagName]) {
        curParentNode = one[tagName];
        return;
      }

      var elem = doc.createElement(tagName);

      for (var attr in attrs) {
        elem.setAttribute(attrs[attr].name, attrs[attr].value);
      }

      if (structure[tagName] && typeof one[structure[tagName]] !== 'boolean') {
        one[structure[tagName]].appendChild(elem);
      }
      else if (curParentNode && curParentNode.appendChild) {
        curParentNode.appendChild(elem);
      }

      if (!unary) {
        elems.push(elem);
        curParentNode = elem;
      }
    },
    end: function(/* tag */) {
      elems.length -= 1;

      // Init the new parentNode
      curParentNode = elems[elems.length - 1];
    },
    chars: function(text) {
      curParentNode.appendChild(doc.createTextNode(text));
    },
    comment: function(/* text */) {
      // create comment node
    },
    ignore: function(/* text */) {
      // What to do here?
    }
  });

  return doc;
};

var htmlparser = {
	HTMLParser: HTMLParser_1,
	HTMLtoXML: HTMLtoXML,
	HTMLtoDOM: HTMLtoDOM
};

function Sorter() {
}

Sorter.prototype.sort = function(tokens, fromIndex) {
  fromIndex = fromIndex || 0;
  for (var i = 0, len = this.keys.length; i < len; i++) {
    var key = this.keys[i];
    var token = key.slice(1);
    var index = tokens.indexOf(token, fromIndex);
    if (index !== -1) {
      do {
        if (index !== fromIndex) {
          tokens.splice(index, 1);
          tokens.splice(fromIndex, 0, token);
        }
        fromIndex++;
      } while ((index = tokens.indexOf(token, fromIndex)) !== -1);
      return this[key].sort(tokens, fromIndex);
    }
  }
  return tokens;
};

function TokenChain() {
}

TokenChain.prototype = {
  add: function(tokens) {
    var self = this;
    tokens.forEach(function(token) {
      var key = '$' + token;
      if (!self[key]) {
        self[key] = [];
        self[key].processed = 0;
      }
      self[key].push(tokens);
    });
  },
  createSorter: function() {
    var self = this;
    var sorter = new Sorter();
    sorter.keys = Object.keys(self).sort(function(j, k) {
      var m = self[j].length;
      var n = self[k].length;
      return m < n ? 1 : m > n ? -1 : j < k ? -1 : j > k ? 1 : 0;
    }).filter(function(key) {
      if (self[key].processed < self[key].length) {
        var token = key.slice(1);
        var chain = new TokenChain();
        self[key].forEach(function(tokens) {
          var index;
          while ((index = tokens.indexOf(token)) !== -1) {
            tokens.splice(index, 1);
          }
          tokens.forEach(function(token) {
            self['$' + token].processed++;
          });
          chain.add(tokens.slice(0));
        });
        sorter[key] = chain.createSorter();
        return true;
      }
      return false;
    });
    return sorter;
  }
};

var tokenchain = TokenChain;

var node = createCommonjsModule(function (module, exports) {
exports.FILES = [
    "../lib/utils.js",
    "../lib/ast.js",
    "../lib/parse.js",
    "../lib/transform.js",
    "../lib/scope.js",
    "../lib/output.js",
    "../lib/compress.js",
    "../lib/sourcemap.js",
    "../lib/mozilla-ast.js",
    "../lib/propmangle.js",
    "../lib/minify.js",
    "./exports.js",
].map(function(file) {
    return commonjsRequire.resolve(file);
});

new Function("MOZ_SourceMap", "exports", function() {
    var code = exports.FILES.map(function(file) {
        return fs.readFileSync(file, "utf8");
    });
    code.push("exports.describe_ast = " + describe_ast.toString());
    return code.join("\n\n");
}())(sourceMap, exports);

function describe_ast() {
    var out = OutputStream({ beautify: true });
    function doitem(ctor) {
        out.print("AST_" + ctor.TYPE);
        var props = ctor.SELF_PROPS.filter(function(prop) {
            return !/^\$/.test(prop);
        });
        if (props.length > 0) {
            out.space();
            out.with_parens(function() {
                props.forEach(function(prop, i) {
                    if (i) out.space();
                    out.print(prop);
                });
            });
        }
        if (ctor.documentation) {
            out.space();
            out.print_string(ctor.documentation);
        }
        if (ctor.SUBCLASSES.length > 0) {
            out.space();
            out.with_block(function() {
                ctor.SUBCLASSES.forEach(function(ctor, i) {
                    out.indent();
                    doitem(ctor);
                    out.newline();
                });
            });
        }
    }    doitem(AST_Node);
    return out + "\n";
}

function infer_options(options) {
    var result = exports.minify("", options);
    return result.error && result.error.defs;
}

exports.default_options = function() {
    var defs = {};
    Object.keys(infer_options({ 0: 0 })).forEach(function(component) {
        var options = {};
        options[component] = { 0: 0 };
        if (options = infer_options(options)) {
            defs[component] = options;
        }
    });
    return defs;
};
});
var node_1 = node.FILES;
var node_2 = node.default_options;

var decode = he.decode;
var HTMLParser$1 = htmlparser.HTMLParser;





function trimWhitespace(str) {
  return str && str.replace(/^[ \n\r\t\f]+/, '').replace(/[ \n\r\t\f]+$/, '');
}

function collapseWhitespaceAll(str) {
  // Non-breaking space is specifically handled inside the replacer function here:
  return str && str.replace(/[ \n\r\t\f\xA0]+/g, function(spaces) {
    return spaces === '\t' ? '\t' : spaces.replace(/(^|\xA0+)[^\xA0]+/g, '$1 ');
  });
}

function collapseWhitespace(str, options, trimLeft, trimRight, collapseAll) {
  var lineBreakBefore = '', lineBreakAfter = '';

  if (options.preserveLineBreaks) {
    str = str.replace(/^[ \n\r\t\f]*?[\n\r][ \n\r\t\f]*/, function() {
      lineBreakBefore = '\n';
      return '';
    }).replace(/[ \n\r\t\f]*?[\n\r][ \n\r\t\f]*$/, function() {
      lineBreakAfter = '\n';
      return '';
    });
  }

  if (trimLeft) {
    // Non-breaking space is specifically handled inside the replacer function here:
    str = str.replace(/^[ \n\r\t\f\xA0]+/, function(spaces) {
      var conservative = !lineBreakBefore && options.conservativeCollapse;
      if (conservative && spaces === '\t') {
        return '\t';
      }
      return spaces.replace(/^[^\xA0]+/, '').replace(/(\xA0+)[^\xA0]+/g, '$1 ') || (conservative ? ' ' : '');
    });
  }

  if (trimRight) {
    // Non-breaking space is specifically handled inside the replacer function here:
    str = str.replace(/[ \n\r\t\f\xA0]+$/, function(spaces) {
      var conservative = !lineBreakAfter && options.conservativeCollapse;
      if (conservative && spaces === '\t') {
        return '\t';
      }
      return spaces.replace(/[^\xA0]+(\xA0+)/g, ' $1').replace(/[^\xA0]+$/, '') || (conservative ? ' ' : '');
    });
  }

  if (collapseAll) {
    // strip non space whitespace then compress spaces to one
    str = collapseWhitespaceAll(str);
  }

  return lineBreakBefore + str + lineBreakAfter;
}

var createMapFromString$2 = utils.createMapFromString;
// non-empty tags that will maintain whitespace around them
var inlineTags = createMapFromString$2('a,abbr,acronym,b,bdi,bdo,big,button,cite,code,del,dfn,em,font,i,ins,kbd,label,mark,math,nobr,object,q,rp,rt,rtc,ruby,s,samp,select,small,span,strike,strong,sub,sup,svg,textarea,time,tt,u,var');
// non-empty tags that will maintain whitespace within them
var inlineTextTags = createMapFromString$2('a,abbr,acronym,b,big,del,em,font,i,ins,kbd,mark,nobr,rp,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var');
// self-closing tags that will maintain whitespace around them
var selfClosingInlineTags = createMapFromString$2('comment,img,input,wbr');

function collapseWhitespaceSmart(str, prevTag, nextTag, options) {
  var trimLeft = prevTag && !selfClosingInlineTags(prevTag);
  if (trimLeft && !options.collapseInlineTagWhitespace) {
    trimLeft = prevTag.charAt(0) === '/' ? !inlineTags(prevTag.slice(1)) : !inlineTextTags(prevTag);
  }
  var trimRight = nextTag && !selfClosingInlineTags(nextTag);
  if (trimRight && !options.collapseInlineTagWhitespace) {
    trimRight = nextTag.charAt(0) === '/' ? !inlineTextTags(nextTag.slice(1)) : !inlineTags(nextTag);
  }
  return collapseWhitespace(str, options, trimLeft, trimRight, prevTag && nextTag);
}

function isConditionalComment(text) {
  return /^\[if\s[^\]]+]|\[endif]$/.test(text);
}

function isIgnoredComment(text, options) {
  for (var i = 0, len = options.ignoreCustomComments.length; i < len; i++) {
    if (options.ignoreCustomComments[i].test(text)) {
      return true;
    }
  }
  return false;
}

function isEventAttribute(attrName, options) {
  var patterns = options.customEventAttributes;
  if (patterns) {
    for (var i = patterns.length; i--;) {
      if (patterns[i].test(attrName)) {
        return true;
      }
    }
    return false;
  }
  return /^on[a-z]{3,}$/.test(attrName);
}

function canRemoveAttributeQuotes(value) {
  // https://mathiasbynens.be/notes/unquoted-attribute-values
  return /^[^ \t\n\f\r"'`=<>]+$/.test(value);
}

function attributesInclude(attributes, attribute) {
  for (var i = attributes.length; i--;) {
    if (attributes[i].name.toLowerCase() === attribute) {
      return true;
    }
  }
  return false;
}

function isAttributeRedundant(tag, attrName, attrValue, attrs) {
  attrValue = attrValue ? trimWhitespace(attrValue.toLowerCase()) : '';

  return (
    tag === 'script' &&
    attrName === 'language' &&
    attrValue === 'javascript' ||

    tag === 'form' &&
    attrName === 'method' &&
    attrValue === 'get' ||

    tag === 'input' &&
    attrName === 'type' &&
    attrValue === 'text' ||

    tag === 'script' &&
    attrName === 'charset' &&
    !attributesInclude(attrs, 'src') ||

    tag === 'a' &&
    attrName === 'name' &&
    attributesInclude(attrs, 'id') ||

    tag === 'area' &&
    attrName === 'shape' &&
    attrValue === 'rect'
  );
}

// https://mathiasbynens.be/demo/javascript-mime-type
// https://developer.mozilla.org/en/docs/Web/HTML/Element/script#attr-type
var executableScriptsMimetypes = utils.createMap([
  'text/javascript',
  'text/ecmascript',
  'text/jscript',
  'application/javascript',
  'application/x-javascript',
  'application/ecmascript'
]);

function isScriptTypeAttribute(attrValue) {
  attrValue = trimWhitespace(attrValue.split(/;/, 2)[0]).toLowerCase();
  return attrValue === '' || executableScriptsMimetypes(attrValue);
}

function isExecutableScript(tag, attrs) {
  if (tag !== 'script') {
    return false;
  }
  for (var i = 0, len = attrs.length; i < len; i++) {
    var attrName = attrs[i].name.toLowerCase();
    if (attrName === 'type') {
      return isScriptTypeAttribute(attrs[i].value);
    }
  }
  return true;
}

function isStyleLinkTypeAttribute(attrValue) {
  attrValue = trimWhitespace(attrValue).toLowerCase();
  return attrValue === '' || attrValue === 'text/css';
}

function isStyleSheet(tag, attrs) {
  if (tag !== 'style') {
    return false;
  }
  for (var i = 0, len = attrs.length; i < len; i++) {
    var attrName = attrs[i].name.toLowerCase();
    if (attrName === 'type') {
      return isStyleLinkTypeAttribute(attrs[i].value);
    }
  }
  return true;
}

var isSimpleBoolean = createMapFromString$2('allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible');
var isBooleanValue = createMapFromString$2('true,false');

function isBooleanAttribute(attrName, attrValue) {
  return isSimpleBoolean(attrName) || attrName === 'draggable' && !isBooleanValue(attrValue);
}

function isUriTypeAttribute(attrName, tag) {
  return (
    /^(?:a|area|link|base)$/.test(tag) && attrName === 'href' ||
    tag === 'img' && /^(?:src|longdesc|usemap)$/.test(attrName) ||
    tag === 'object' && /^(?:classid|codebase|data|usemap)$/.test(attrName) ||
    tag === 'q' && attrName === 'cite' ||
    tag === 'blockquote' && attrName === 'cite' ||
    (tag === 'ins' || tag === 'del') && attrName === 'cite' ||
    tag === 'form' && attrName === 'action' ||
    tag === 'input' && (attrName === 'src' || attrName === 'usemap') ||
    tag === 'head' && attrName === 'profile' ||
    tag === 'script' && (attrName === 'src' || attrName === 'for')
  );
}

function isNumberTypeAttribute(attrName, tag) {
  return (
    /^(?:a|area|object|button)$/.test(tag) && attrName === 'tabindex' ||
    tag === 'input' && (attrName === 'maxlength' || attrName === 'tabindex') ||
    tag === 'select' && (attrName === 'size' || attrName === 'tabindex') ||
    tag === 'textarea' && /^(?:rows|cols|tabindex)$/.test(attrName) ||
    tag === 'colgroup' && attrName === 'span' ||
    tag === 'col' && attrName === 'span' ||
    (tag === 'th' || tag === 'td') && (attrName === 'rowspan' || attrName === 'colspan')
  );
}

function isLinkType(tag, attrs, value) {
  if (tag !== 'link') {
    return false;
  }
  for (var i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i].name === 'rel' && attrs[i].value === value) {
      return true;
    }
  }
}

function isMediaQuery(tag, attrs, attrName) {
  return attrName === 'media' && (isLinkType(tag, attrs, 'stylesheet') || isStyleSheet(tag, attrs));
}

var srcsetTags = createMapFromString$2('img,source');

function isSrcset(attrName, tag) {
  return attrName === 'srcset' && srcsetTags(tag);
}

function cleanAttributeValue(tag, attrName, attrValue, options, attrs) {
  if (isEventAttribute(attrName, options)) {
    attrValue = trimWhitespace(attrValue).replace(/^javascript:\s*/i, '');
    return options.minifyJS(attrValue, true);
  }
  else if (attrName === 'class') {
    attrValue = trimWhitespace(attrValue);
    if (options.sortClassName) {
      attrValue = options.sortClassName(attrValue);
    }
    else {
      attrValue = collapseWhitespaceAll(attrValue);
    }
    return attrValue;
  }
  else if (isUriTypeAttribute(attrName, tag)) {
    attrValue = trimWhitespace(attrValue);
    return isLinkType(tag, attrs, 'canonical') ? attrValue : options.minifyURLs(attrValue);
  }
  else if (isNumberTypeAttribute(attrName, tag)) {
    return trimWhitespace(attrValue);
  }
  else if (attrName === 'style') {
    attrValue = trimWhitespace(attrValue);
    if (attrValue) {
      if (/;$/.test(attrValue) && !/&#?[0-9a-zA-Z]+;$/.test(attrValue)) {
        attrValue = attrValue.replace(/\s*;$/, ';');
      }
      attrValue = options.minifyCSS(attrValue, 'inline');
    }
    return attrValue;
  }
  else if (isSrcset(attrName, tag)) {
    // https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-srcset
    attrValue = trimWhitespace(attrValue).split(/\s+,\s*|\s*,\s+/).map(function(candidate) {
      var url$$1 = candidate;
      var descriptor = '';
      var match = candidate.match(/\s+([1-9][0-9]*w|[0-9]+(?:\.[0-9]+)?x)$/);
      if (match) {
        url$$1 = url$$1.slice(0, -match[0].length);
        var num = +match[1].slice(0, -1);
        var suffix = match[1].slice(-1);
        if (num !== 1 || suffix !== 'x') {
          descriptor = ' ' + num + suffix;
        }
      }
      return options.minifyURLs(url$$1) + descriptor;
    }).join(', ');
  }
  else if (isMetaViewport(tag, attrs) && attrName === 'content') {
    attrValue = attrValue.replace(/\s+/g, '').replace(/[0-9]+\.[0-9]+/g, function(numString) {
      // "0.90000" -> "0.9"
      // "1.0" -> "1"
      // "1.0001" -> "1.0001" (unchanged)
      return (+numString).toString();
    });
  }
  else if (options.customAttrCollapse && options.customAttrCollapse.test(attrName)) {
    attrValue = attrValue.replace(/\n+|\r+|\s{2,}/g, '');
  }
  else if (tag === 'script' && attrName === 'type') {
    attrValue = trimWhitespace(attrValue.replace(/\s*;\s*/g, ';'));
  }
  else if (isMediaQuery(tag, attrs, attrName)) {
    attrValue = trimWhitespace(attrValue);
    return options.minifyCSS(attrValue, 'media');
  }
  return attrValue;
}

function isMetaViewport(tag, attrs) {
  if (tag !== 'meta') {
    return false;
  }
  for (var i = 0, len = attrs.length; i < len; i++) {
    if (attrs[i].name === 'name' && attrs[i].value === 'viewport') {
      return true;
    }
  }
}

function ignoreCSS(id) {
  return '/* clean-css ignore:start */' + id + '/* clean-css ignore:end */';
}

// Wrap CSS declarations for CleanCSS > 3.x
// See https://github.com/jakubpawlowicz/clean-css/issues/418
function wrapCSS(text, type) {
  switch (type) {
    case 'inline':
      return '*{' + text + '}';
    case 'media':
      return '@media ' + text + '{a{top:0}}';
    default:
      return text;
  }
}

function unwrapCSS(text, type) {
  var matches;
  switch (type) {
    case 'inline':
      matches = text.match(/^\*\{([\s\S]*)\}$/);
      break;
    case 'media':
      matches = text.match(/^@media ([\s\S]*?)\s*{[\s\S]*}$/);
      break;
  }
  return matches ? matches[1] : text;
}

function cleanConditionalComment(comment, options) {
  return options.processConditionalComments ? comment.replace(/^(\[if\s[^\]]+]>)([\s\S]*?)(<!\[endif])$/, function(match, prefix, text, suffix) {
    return prefix + minify(text, options, true) + suffix;
  }) : comment;
}

function processScript(text, options, currentAttrs) {
  for (var i = 0, len = currentAttrs.length; i < len; i++) {
    if (currentAttrs[i].name.toLowerCase() === 'type' &&
        options.processScripts.indexOf(currentAttrs[i].value) > -1) {
      return minify(text, options);
    }
  }
  return text;
}

// Tag omission rules from https://html.spec.whatwg.org/multipage/syntax.html#optional-tags
// with the following deviations:
// - retain <body> if followed by <noscript>
// - </rb>, </rt>, </rtc>, </rp> & </tfoot> follow https://www.w3.org/TR/html5/syntax.html#optional-tags
// - retain all tags which are adjacent to non-standard HTML tags
var optionalStartTags = createMapFromString$2('html,head,body,colgroup,tbody');
var optionalEndTags = createMapFromString$2('html,head,body,li,dt,dd,p,rb,rt,rtc,rp,optgroup,option,colgroup,caption,thead,tbody,tfoot,tr,td,th');
var headerTags = createMapFromString$2('meta,link,script,style,template,noscript');
var descriptionTags = createMapFromString$2('dt,dd');
var pBlockTags = createMapFromString$2('address,article,aside,blockquote,details,div,dl,fieldset,figcaption,figure,footer,form,h1,h2,h3,h4,h5,h6,header,hgroup,hr,main,menu,nav,ol,p,pre,section,table,ul');
var pInlineTags = createMapFromString$2('a,audio,del,ins,map,noscript,video');
var rubyTags = createMapFromString$2('rb,rt,rtc,rp');
var rtcTag = createMapFromString$2('rb,rtc,rp');
var optionTag = createMapFromString$2('option,optgroup');
var tableContentTags = createMapFromString$2('tbody,tfoot');
var tableSectionTags = createMapFromString$2('thead,tbody,tfoot');
var cellTags = createMapFromString$2('td,th');
var topLevelTags = createMapFromString$2('html,head,body');
var compactTags = createMapFromString$2('html,body');
var looseTags = createMapFromString$2('head,colgroup,caption');
var trailingTags = createMapFromString$2('dt,thead');
var htmlTags = createMapFromString$2('a,abbr,acronym,address,applet,area,article,aside,audio,b,base,basefont,bdi,bdo,bgsound,big,blink,blockquote,body,br,button,canvas,caption,center,cite,code,col,colgroup,command,content,data,datalist,dd,del,details,dfn,dialog,dir,div,dl,dt,element,em,embed,fieldset,figcaption,figure,font,footer,form,frame,frameset,h1,h2,h3,h4,h5,h6,head,header,hgroup,hr,html,i,iframe,image,img,input,ins,isindex,kbd,keygen,label,legend,li,link,listing,main,map,mark,marquee,menu,menuitem,meta,meter,multicol,nav,nobr,noembed,noframes,noscript,object,ol,optgroup,option,output,p,param,picture,plaintext,pre,progress,q,rb,rp,rt,rtc,ruby,s,samp,script,section,select,shadow,small,source,spacer,span,strike,strong,style,sub,summary,sup,table,tbody,td,template,textarea,tfoot,th,thead,time,title,tr,track,tt,u,ul,var,video,wbr,xmp');

function canRemoveParentTag(optionalStartTag, tag) {
  switch (optionalStartTag) {
    case 'html':
    case 'head':
      return true;
    case 'body':
      return !headerTags(tag);
    case 'colgroup':
      return tag === 'col';
    case 'tbody':
      return tag === 'tr';
  }
  return false;
}

function isStartTagMandatory(optionalEndTag, tag) {
  switch (tag) {
    case 'colgroup':
      return optionalEndTag === 'colgroup';
    case 'tbody':
      return tableSectionTags(optionalEndTag);
  }
  return false;
}

function canRemovePrecedingTag(optionalEndTag, tag) {
  switch (optionalEndTag) {
    case 'html':
    case 'head':
    case 'body':
    case 'colgroup':
    case 'caption':
      return true;
    case 'li':
    case 'optgroup':
    case 'tr':
      return tag === optionalEndTag;
    case 'dt':
    case 'dd':
      return descriptionTags(tag);
    case 'p':
      return pBlockTags(tag);
    case 'rb':
    case 'rt':
    case 'rp':
      return rubyTags(tag);
    case 'rtc':
      return rtcTag(tag);
    case 'option':
      return optionTag(tag);
    case 'thead':
    case 'tbody':
      return tableContentTags(tag);
    case 'tfoot':
      return tag === 'tbody';
    case 'td':
    case 'th':
      return cellTags(tag);
  }
  return false;
}

var reEmptyAttribute = new RegExp(
  '^(?:class|id|style|title|lang|dir|on(?:focus|blur|change|click|dblclick|mouse(' +
    '?:down|up|over|move|out)|key(?:press|down|up)))$');

function canDeleteEmptyAttribute(tag, attrName, attrValue, options) {
  var isValueEmpty = !attrValue || /^\s*$/.test(attrValue);
  if (!isValueEmpty) {
    return false;
  }
  if (typeof options.removeEmptyAttributes === 'function') {
    return options.removeEmptyAttributes(attrName, tag);
  }
  return tag === 'input' && attrName === 'value' || reEmptyAttribute.test(attrName);
}

function hasAttrName(name, attrs) {
  for (var i = attrs.length - 1; i >= 0; i--) {
    if (attrs[i].name === name) {
      return true;
    }
  }
  return false;
}

function canRemoveElement(tag, attrs) {
  switch (tag) {
    case 'textarea':
      return false;
    case 'audio':
    case 'script':
    case 'video':
      if (hasAttrName('src', attrs)) {
        return false;
      }
      break;
    case 'iframe':
      if (hasAttrName('src', attrs) || hasAttrName('srcdoc', attrs)) {
        return false;
      }
      break;
    case 'object':
      if (hasAttrName('data', attrs)) {
        return false;
      }
      break;
    case 'applet':
      if (hasAttrName('code', attrs)) {
        return false;
      }
      break;
  }
  return true;
}

function canCollapseWhitespace(tag) {
  return !/^(?:script|style|pre|textarea)$/.test(tag);
}

function canTrimWhitespace(tag) {
  return !/^(?:pre|textarea)$/.test(tag);
}

function normalizeAttr(attr, attrs, tag, options) {
  var attrName = options.name(attr.name),
      attrValue = attr.value;

  if (options.decodeEntities && attrValue) {
    attrValue = decode(attrValue, { isAttributeValue: true });
  }

  if (options.removeRedundantAttributes &&
    isAttributeRedundant(tag, attrName, attrValue, attrs) ||
    options.removeScriptTypeAttributes && tag === 'script' &&
    attrName === 'type' && isScriptTypeAttribute(attrValue) ||
    options.removeStyleLinkTypeAttributes && (tag === 'style' || tag === 'link') &&
    attrName === 'type' && isStyleLinkTypeAttribute(attrValue)) {
    return;
  }

  if (attrValue) {
    attrValue = cleanAttributeValue(tag, attrName, attrValue, options, attrs);
  }

  if (options.removeEmptyAttributes &&
      canDeleteEmptyAttribute(tag, attrName, attrValue, options)) {
    return;
  }

  if (options.decodeEntities && attrValue) {
    attrValue = attrValue.replace(/&(#?[0-9a-zA-Z]+;)/g, '&amp;$1');
  }

  return {
    attr: attr,
    name: attrName,
    value: attrValue
  };
}

function buildAttr(normalized, hasUnarySlash, options, isLast, uidAttr) {
  var attrName = normalized.name,
      attrValue = normalized.value,
      attr = normalized.attr,
      attrQuote = attr.quote,
      attrFragment,
      emittedAttrValue;

  if (typeof attrValue !== 'undefined' && (!options.removeAttributeQuotes ||
      ~attrValue.indexOf(uidAttr) || !canRemoveAttributeQuotes(attrValue))) {
    if (!options.preventAttributesEscaping) {
      if (typeof options.quoteCharacter === 'undefined') {
        var apos = (attrValue.match(/'/g) || []).length;
        var quot = (attrValue.match(/"/g) || []).length;
        attrQuote = apos < quot ? '\'' : '"';
      }
      else {
        attrQuote = options.quoteCharacter === '\'' ? '\'' : '"';
      }
      if (attrQuote === '"') {
        attrValue = attrValue.replace(/"/g, '&#34;');
      }
      else {
        attrValue = attrValue.replace(/'/g, '&#39;');
      }
    }
    emittedAttrValue = attrQuote + attrValue + attrQuote;
    if (!isLast && !options.removeTagWhitespace) {
      emittedAttrValue += ' ';
    }
  }
  // make sure trailing slash is not interpreted as HTML self-closing tag
  else if (isLast && !hasUnarySlash && !/\/$/.test(attrValue)) {
    emittedAttrValue = attrValue;
  }
  else {
    emittedAttrValue = attrValue + ' ';
  }

  if (typeof attrValue === 'undefined' || options.collapseBooleanAttributes &&
      isBooleanAttribute(attrName.toLowerCase(), attrValue.toLowerCase())) {
    attrFragment = attrName;
    if (!isLast) {
      attrFragment += ' ';
    }
  }
  else {
    attrFragment = attrName + attr.customAssign + emittedAttrValue;
  }

  return attr.customOpen + attrFragment + attr.customClose;
}

function identity(value) {
  return value;
}

function processOptions(values) {
  var options = {
    name: function(name) {
      return name.toLowerCase();
    },
    canCollapseWhitespace: canCollapseWhitespace,
    canTrimWhitespace: canTrimWhitespace,
    html5: true,
    ignoreCustomComments: [/^!/],
    ignoreCustomFragments: [
      /<%[\s\S]*?%>/,
      /<\?[\s\S]*?\?>/
    ],
    includeAutoGeneratedTags: true,
    log: identity,
    minifyCSS: identity,
    minifyJS: identity,
    minifyURLs: identity
  };
  Object.keys(values).forEach(function(key) {
    var value = values[key];
    if (key === 'caseSensitive') {
      if (value) {
        options.name = identity;
      }
    }
    else if (key === 'log') {
      if (typeof value === 'function') {
        options.log = value;
      }
    }
    else if (key === 'minifyCSS' && typeof value !== 'function') {
      if (!value) {
        return;
      }
      if (typeof value !== 'object') {
        value = {};
      }
      options.minifyCSS = function(text, type) {
        text = text.replace(/(url\s*\(\s*)("|'|)(.*?)\2(\s*\))/ig, function(match, prefix, quote, url$$1, suffix) {
          return prefix + quote + options.minifyURLs(url$$1) + quote + suffix;
        });
        var cleanCssOutput = new cleanCss(value).minify(wrapCSS(text, type));
        if (cleanCssOutput.errors.length > 0) {
          cleanCssOutput.errors.forEach(options.log);
          return text;
        }
        return unwrapCSS(cleanCssOutput.styles, type);
      };
    }
    else if (key === 'minifyJS' && typeof value !== 'function') {
      if (!value) {
        return;
      }
      if (typeof value !== 'object') {
        value = {};
      }
      (value.parse || (value.parse = {})).bare_returns = false;
      options.minifyJS = function(text, inline) {
        var start = text.match(/^\s*<!--.*/);
        var code = start ? text.slice(start[0].length).replace(/\n\s*-->\s*$/, '') : text;
        value.parse.bare_returns = inline;
        var result = node.minify(code, value);
        if (result.error) {
          options.log(result.error);
          return text;
        }
        return result.code.replace(/;$/, '');
      };
    }
    else if (key === 'minifyURLs' && typeof value !== 'function') {
      if (!value) {
        return;
      }
      if (typeof value === 'string') {
        value = { site: value };
      }
      else if (typeof value !== 'object') {
        value = {};
      }
      options.minifyURLs = function(text) {
        try {
          return relateurl.relate(text, value);
        }
        catch (err) {
          options.log(err);
          return text;
        }
      };
    }
    else {
      options[key] = value;
    }
  });
  return options;
}

function uniqueId(value) {
  var id;
  do {
    id = Math.random().toString(36).replace(/^0\.[0-9]*/, '');
  } while (~value.indexOf(id));
  return id;
}

var specialContentTags = createMapFromString$2('script,style');

function createSortFns(value, options, uidIgnore, uidAttr) {
  var attrChains = options.sortAttributes && Object.create(null);
  var classChain = options.sortClassName && new tokenchain();

  function attrNames(attrs) {
    return attrs.map(function(attr) {
      return options.name(attr.name);
    });
  }

  function shouldSkipUID(token, uid) {
    return !uid || token.indexOf(uid) === -1;
  }

  function shouldSkipUIDs(token) {
    return shouldSkipUID(token, uidIgnore) && shouldSkipUID(token, uidAttr);
  }

  function scan(input) {
    var currentTag, currentType;
    new HTMLParser$1(input, {
      start: function(tag, attrs) {
        if (attrChains) {
          if (!attrChains[tag]) {
            attrChains[tag] = new tokenchain();
          }
          attrChains[tag].add(attrNames(attrs).filter(shouldSkipUIDs));
        }
        for (var i = 0, len = attrs.length; i < len; i++) {
          var attr = attrs[i];
          if (classChain && attr.value && options.name(attr.name) === 'class') {
            classChain.add(trimWhitespace(attr.value).split(/[ \t\n\f\r]+/).filter(shouldSkipUIDs));
          }
          else if (options.processScripts && attr.name.toLowerCase() === 'type') {
            currentTag = tag;
            currentType = attr.value;
          }
        }
      },
      end: function() {
        currentTag = '';
      },
      chars: function(text) {
        if (options.processScripts && specialContentTags(currentTag) &&
            options.processScripts.indexOf(currentType) > -1) {
          scan(text);
        }
      }
    });
  }

  var log = options.log;
  options.log = identity;
  options.sortAttributes = false;
  options.sortClassName = false;
  scan(minify(value, options));
  options.log = log;
  if (attrChains) {
    var attrSorters = Object.create(null);
    for (var tag in attrChains) {
      attrSorters[tag] = attrChains[tag].createSorter();
    }
    options.sortAttributes = function(tag, attrs) {
      var sorter = attrSorters[tag];
      if (sorter) {
        var attrMap = Object.create(null);
        var names = attrNames(attrs);
        names.forEach(function(name, index) {
          (attrMap[name] || (attrMap[name] = [])).push(attrs[index]);
        });
        sorter.sort(names).forEach(function(name, index) {
          attrs[index] = attrMap[name].shift();
        });
      }
    };
  }
  if (classChain) {
    var sorter = classChain.createSorter();
    options.sortClassName = function(value) {
      return sorter.sort(value.split(/[ \n\f\r]+/)).join(' ');
    };
  }
}

function minify(value, options, partialMarkup) {
  if (options.collapseWhitespace) {
    value = collapseWhitespace(value, options, true, true);
  }

  var buffer = [],
      charsPrevTag,
      currentChars = '',
      hasChars,
      currentTag = '',
      currentAttrs = [],
      stackNoTrimWhitespace = [],
      stackNoCollapseWhitespace = [],
      optionalStartTag = '',
      optionalEndTag = '',
      ignoredMarkupChunks = [],
      ignoredCustomMarkupChunks = [],
      uidIgnore,
      uidAttr,
      uidPattern;

  // temporarily replace ignored chunks with comments,
  // so that we don't have to worry what's there.
  // for all we care there might be
  // completely-horribly-broken-alien-non-html-emoj-cthulhu-filled content
  value = value.replace(/<!-- htmlmin:ignore -->([\s\S]*?)<!-- htmlmin:ignore -->/g, function(match, group1) {
    if (!uidIgnore) {
      uidIgnore = uniqueId(value);
      var pattern = new RegExp('^' + uidIgnore + '([0-9]+)$');
      if (options.ignoreCustomComments) {
        options.ignoreCustomComments = options.ignoreCustomComments.slice();
      }
      else {
        options.ignoreCustomComments = [];
      }
      options.ignoreCustomComments.push(pattern);
    }
    var token = '<!--' + uidIgnore + ignoredMarkupChunks.length + '-->';
    ignoredMarkupChunks.push(group1);
    return token;
  });

  var customFragments = options.ignoreCustomFragments.map(function(re) {
    return re.source;
  });
  if (customFragments.length) {
    var reCustomIgnore = new RegExp('\\s*(?:' + customFragments.join('|') + ')+\\s*', 'g');
    // temporarily replace custom ignored fragments with unique attributes
    value = value.replace(reCustomIgnore, function(match) {
      if (!uidAttr) {
        uidAttr = uniqueId(value);
        uidPattern = new RegExp('(\\s*)' + uidAttr + '([0-9]+)(\\s*)', 'g');
        if (options.minifyCSS) {
          options.minifyCSS = (function(fn) {
            return function(text, type) {
              text = text.replace(uidPattern, function(match, prefix, index) {
                var chunks = ignoredCustomMarkupChunks[+index];
                return chunks[1] + uidAttr + index + chunks[2];
              });
              var ids = [];
              new cleanCss().minify(wrapCSS(text, type)).warnings.forEach(function(warning$$1) {
                var match = uidPattern.exec(warning$$1);
                if (match) {
                  var id = uidAttr + match[2];
                  text = text.replace(id, ignoreCSS(id));
                  ids.push(id);
                }
              });
              text = fn(text, type);
              ids.forEach(function(id) {
                text = text.replace(ignoreCSS(id), id);
              });
              return text;
            };
          })(options.minifyCSS);
        }
        if (options.minifyJS) {
          options.minifyJS = (function(fn) {
            return function(text, type) {
              return fn(text.replace(uidPattern, function(match, prefix, index) {
                var chunks = ignoredCustomMarkupChunks[+index];
                return chunks[1] + uidAttr + index + chunks[2];
              }), type);
            };
          })(options.minifyJS);
        }
      }
      var token = uidAttr + ignoredCustomMarkupChunks.length;
      ignoredCustomMarkupChunks.push(/^(\s*)[\s\S]*?(\s*)$/.exec(match));
      return '\t' + token + '\t';
    });
  }

  if (options.sortAttributes && typeof options.sortAttributes !== 'function' ||
      options.sortClassName && typeof options.sortClassName !== 'function') {
    createSortFns(value, options, uidIgnore, uidAttr);
  }

  function _canCollapseWhitespace(tag, attrs) {
    return options.canCollapseWhitespace(tag, attrs, canCollapseWhitespace);
  }

  function _canTrimWhitespace(tag, attrs) {
    return options.canTrimWhitespace(tag, attrs, canTrimWhitespace);
  }

  function removeStartTag() {
    var index = buffer.length - 1;
    while (index > 0 && !/^<[^/!]/.test(buffer[index])) {
      index--;
    }
    buffer.length = Math.max(0, index);
  }

  function removeEndTag() {
    var index = buffer.length - 1;
    while (index > 0 && !/^<\//.test(buffer[index])) {
      index--;
    }
    buffer.length = Math.max(0, index);
  }

  // look for trailing whitespaces, bypass any inline tags
  function trimTrailingWhitespace(index, nextTag) {
    for (var endTag = null; index >= 0 && _canTrimWhitespace(endTag); index--) {
      var str = buffer[index];
      var match = str.match(/^<\/([\w:-]+)>$/);
      if (match) {
        endTag = match[1];
      }
      else if (/>$/.test(str) || (buffer[index] = collapseWhitespaceSmart(str, null, nextTag, options))) {
        break;
      }
    }
  }

  // look for trailing whitespaces from previously processed text
  // which may not be trimmed due to a following comment or an empty
  // element which has now been removed
  function squashTrailingWhitespace(nextTag) {
    var charsIndex = buffer.length - 1;
    if (buffer.length > 1) {
      var item = buffer[buffer.length - 1];
      if (/^(?:<!|$)/.test(item) && item.indexOf(uidIgnore) === -1) {
        charsIndex--;
      }
    }
    trimTrailingWhitespace(charsIndex, nextTag);
  }

  new HTMLParser$1(value, {
    partialMarkup: partialMarkup,
    html5: options.html5,

    start: function(tag, attrs, unary, unarySlash, autoGenerated) {
      if (tag.toLowerCase() === 'svg') {
        options = Object.create(options);
        options.caseSensitive = true;
        options.keepClosingSlash = true;
        options.name = identity;
      }
      tag = options.name(tag);
      currentTag = tag;
      charsPrevTag = tag;
      if (!inlineTextTags(tag)) {
        currentChars = '';
      }
      hasChars = false;
      currentAttrs = attrs;

      var optional = options.removeOptionalTags;
      if (optional) {
        var htmlTag = htmlTags(tag);
        // <html> may be omitted if first thing inside is not comment
        // <head> may be omitted if first thing inside is an element
        // <body> may be omitted if first thing inside is not space, comment, <meta>, <link>, <script>, <style> or <template>
        // <colgroup> may be omitted if first thing inside is <col>
        // <tbody> may be omitted if first thing inside is <tr>
        if (htmlTag && canRemoveParentTag(optionalStartTag, tag)) {
          removeStartTag();
        }
        optionalStartTag = '';
        // end-tag-followed-by-start-tag omission rules
        if (htmlTag && canRemovePrecedingTag(optionalEndTag, tag)) {
          removeEndTag();
          // <colgroup> cannot be omitted if preceding </colgroup> is omitted
          // <tbody> cannot be omitted if preceding </tbody>, </thead> or </tfoot> is omitted
          optional = !isStartTagMandatory(optionalEndTag, tag);
        }
        optionalEndTag = '';
      }

      // set whitespace flags for nested tags (eg. <code> within a <pre>)
      if (options.collapseWhitespace) {
        if (!stackNoTrimWhitespace.length) {
          squashTrailingWhitespace(tag);
        }
        if (!unary) {
          if (!_canTrimWhitespace(tag, attrs) || stackNoTrimWhitespace.length) {
            stackNoTrimWhitespace.push(tag);
          }
          if (!_canCollapseWhitespace(tag, attrs) || stackNoCollapseWhitespace.length) {
            stackNoCollapseWhitespace.push(tag);
          }
        }
      }

      var openTag = '<' + tag;
      var hasUnarySlash = unarySlash && options.keepClosingSlash;

      buffer.push(openTag);

      if (options.sortAttributes) {
        options.sortAttributes(tag, attrs);
      }

      var parts = [];
      for (var i = attrs.length, isLast = true; --i >= 0;) {
        var normalized = normalizeAttr(attrs[i], attrs, tag, options);
        if (normalized) {
          parts.unshift(buildAttr(normalized, hasUnarySlash, options, isLast, uidAttr));
          isLast = false;
        }
      }
      if (parts.length > 0) {
        buffer.push(' ');
        buffer.push.apply(buffer, parts);
      }
      // start tag must never be omitted if it has any attributes
      else if (optional && optionalStartTags(tag)) {
        optionalStartTag = tag;
      }

      buffer.push(buffer.pop() + (hasUnarySlash ? '/' : '') + '>');

      if (autoGenerated && !options.includeAutoGeneratedTags) {
        removeStartTag();
        optionalStartTag = '';
      }
    },
    end: function(tag, attrs, autoGenerated) {
      if (tag.toLowerCase() === 'svg') {
        options = Object.getPrototypeOf(options);
      }
      tag = options.name(tag);

      // check if current tag is in a whitespace stack
      if (options.collapseWhitespace) {
        if (stackNoTrimWhitespace.length) {
          if (tag === stackNoTrimWhitespace[stackNoTrimWhitespace.length - 1]) {
            stackNoTrimWhitespace.pop();
          }
        }
        else {
          squashTrailingWhitespace('/' + tag);
        }
        if (stackNoCollapseWhitespace.length &&
          tag === stackNoCollapseWhitespace[stackNoCollapseWhitespace.length - 1]) {
          stackNoCollapseWhitespace.pop();
        }
      }

      var isElementEmpty = false;
      if (tag === currentTag) {
        currentTag = '';
        isElementEmpty = !hasChars;
      }

      if (options.removeOptionalTags) {
        // <html>, <head> or <body> may be omitted if the element is empty
        if (isElementEmpty && topLevelTags(optionalStartTag)) {
          removeStartTag();
        }
        optionalStartTag = '';
        // </html> or </body> may be omitted if not followed by comment
        // </head> may be omitted if not followed by space or comment
        // </p> may be omitted if no more content in non-</a> parent
        // except for </dt> or </thead>, end tags may be omitted if no more content in parent element
        if (htmlTags(tag) && optionalEndTag && !trailingTags(optionalEndTag) && (optionalEndTag !== 'p' || !pInlineTags(tag))) {
          removeEndTag();
        }
        optionalEndTag = optionalEndTags(tag) ? tag : '';
      }

      if (options.removeEmptyElements && isElementEmpty && canRemoveElement(tag, attrs)) {
        // remove last "element" from buffer
        removeStartTag();
        optionalStartTag = '';
        optionalEndTag = '';
      }
      else {
        if (autoGenerated && !options.includeAutoGeneratedTags) {
          optionalEndTag = '';
        }
        else {
          buffer.push('</' + tag + '>');
        }
        charsPrevTag = '/' + tag;
        if (!inlineTags(tag)) {
          currentChars = '';
        }
        else if (isElementEmpty) {
          currentChars += '|';
        }
      }
    },
    chars: function(text, prevTag, nextTag) {
      prevTag = prevTag === '' ? 'comment' : prevTag;
      nextTag = nextTag === '' ? 'comment' : nextTag;
      if (options.decodeEntities && text && !specialContentTags(currentTag)) {
        text = decode(text);
      }
      if (options.collapseWhitespace) {
        if (!stackNoTrimWhitespace.length) {
          if (prevTag === 'comment') {
            var prevComment = buffer[buffer.length - 1];
            if (prevComment.indexOf(uidIgnore) === -1) {
              if (!prevComment) {
                prevTag = charsPrevTag;
              }
              if (buffer.length > 1 && (!prevComment || !options.conservativeCollapse && / $/.test(currentChars))) {
                var charsIndex = buffer.length - 2;
                buffer[charsIndex] = buffer[charsIndex].replace(/\s+$/, function(trailingSpaces) {
                  text = trailingSpaces + text;
                  return '';
                });
              }
            }
          }
          if (prevTag) {
            if (prevTag === '/nobr' || prevTag === 'wbr') {
              if (/^\s/.test(text)) {
                var tagIndex = buffer.length - 1;
                while (tagIndex > 0 && buffer[tagIndex].lastIndexOf('<' + prevTag) !== 0) {
                  tagIndex--;
                }
                trimTrailingWhitespace(tagIndex - 1, 'br');
              }
            }
            else if (inlineTextTags(prevTag.charAt(0) === '/' ? prevTag.slice(1) : prevTag)) {
              text = collapseWhitespace(text, options, /(?:^|\s)$/.test(currentChars));
            }
          }
          if (prevTag || nextTag) {
            text = collapseWhitespaceSmart(text, prevTag, nextTag, options);
          }
          else {
            text = collapseWhitespace(text, options, true, true);
          }
          if (!text && /\s$/.test(currentChars) && prevTag && prevTag.charAt(0) === '/') {
            trimTrailingWhitespace(buffer.length - 1, nextTag);
          }
        }
        if (!stackNoCollapseWhitespace.length && nextTag !== 'html' && !(prevTag && nextTag)) {
          text = collapseWhitespace(text, options, false, false, true);
        }
      }
      if (options.processScripts && specialContentTags(currentTag)) {
        text = processScript(text, options, currentAttrs);
      }
      if (isExecutableScript(currentTag, currentAttrs)) {
        text = options.minifyJS(text);
      }
      if (isStyleSheet(currentTag, currentAttrs)) {
        text = options.minifyCSS(text);
      }
      if (options.removeOptionalTags && text) {
        // <html> may be omitted if first thing inside is not comment
        // <body> may be omitted if first thing inside is not space, comment, <meta>, <link>, <script>, <style> or <template>
        if (optionalStartTag === 'html' || optionalStartTag === 'body' && !/^\s/.test(text)) {
          removeStartTag();
        }
        optionalStartTag = '';
        // </html> or </body> may be omitted if not followed by comment
        // </head>, </colgroup> or </caption> may be omitted if not followed by space or comment
        if (compactTags(optionalEndTag) || looseTags(optionalEndTag) && !/^\s/.test(text)) {
          removeEndTag();
        }
        optionalEndTag = '';
      }
      charsPrevTag = /^\s*$/.test(text) ? prevTag : 'comment';
      if (options.decodeEntities && text && !specialContentTags(currentTag)) {
        // Escape any `&` symbols that start either:
        // 1) a legacy named character reference (i.e. one that doesn't end with `;`)
        // 2) or any other character reference (i.e. one that does end with `;`)
        // Note that `&` can be escaped as `&amp`, without the semi-colon.
        // https://mathiasbynens.be/notes/ambiguous-ampersands
        text = text.replace(/&((?:Iacute|aacute|uacute|plusmn|Otilde|otilde|agrave|Agrave|Yacute|yacute|Oslash|oslash|atilde|Atilde|brvbar|ccedil|Ccedil|Ograve|curren|divide|eacute|Eacute|ograve|Oacute|egrave|Egrave|Ugrave|frac12|frac14|frac34|ugrave|oacute|iacute|Ntilde|ntilde|Uacute|middot|igrave|Igrave|iquest|Aacute|cedil|laquo|micro|iexcl|Icirc|icirc|acirc|Ucirc|Ecirc|ocirc|Ocirc|ecirc|ucirc|Aring|aring|AElig|aelig|acute|pound|raquo|Acirc|times|THORN|szlig|thorn|COPY|auml|ordf|ordm|Uuml|macr|uuml|Auml|ouml|Ouml|para|nbsp|euml|quot|QUOT|Euml|yuml|cent|sect|copy|sup1|sup2|sup3|iuml|Iuml|ETH|shy|reg|not|yen|amp|AMP|REG|uml|eth|deg|gt|GT|LT|lt)(?!;)|(?:#?[0-9a-zA-Z]+;))/g, '&amp$1').replace(/</g, '&lt;');
      }
      if (uidPattern && options.collapseWhitespace && stackNoTrimWhitespace.length) {
        text = text.replace(uidPattern, function(match, prefix, index) {
          return ignoredCustomMarkupChunks[+index][0];
        });
      }
      currentChars += text;
      if (text) {
        hasChars = true;
      }
      buffer.push(text);
    },
    comment: function(text, nonStandard) {
      var prefix = nonStandard ? '<!' : '<!--';
      var suffix = nonStandard ? '>' : '-->';
      if (isConditionalComment(text)) {
        text = prefix + cleanConditionalComment(text, options) + suffix;
      }
      else if (options.removeComments) {
        if (isIgnoredComment(text, options)) {
          text = '<!--' + text + '-->';
        }
        else {
          text = '';
        }
      }
      else {
        text = prefix + text + suffix;
      }
      if (options.removeOptionalTags && text) {
        // preceding comments suppress tag omissions
        optionalStartTag = '';
        optionalEndTag = '';
      }
      buffer.push(text);
    },
    doctype: function(doctype) {
      buffer.push(options.useShortDoctype ? '<!doctype' +
        (options.removeTagWhitespace ? '' : ' ') + 'html>' :
        collapseWhitespaceAll(doctype));
    },
    customAttrAssign: options.customAttrAssign,
    customAttrSurround: options.customAttrSurround
  });

  if (options.removeOptionalTags) {
    // <html> may be omitted if first thing inside is not comment
    // <head> or <body> may be omitted if empty
    if (topLevelTags(optionalStartTag)) {
      removeStartTag();
    }
    // except for </dt> or </thead>, end tags may be omitted if no more content in parent element
    if (optionalEndTag && !trailingTags(optionalEndTag)) {
      removeEndTag();
    }
  }
  if (options.collapseWhitespace) {
    squashTrailingWhitespace('br');
  }

  return joinResultSegments(buffer, options, uidPattern ? function(str) {
    return str.replace(uidPattern, function(match, prefix, index, suffix) {
      var chunk = ignoredCustomMarkupChunks[+index][0];
      if (options.collapseWhitespace) {
        if (prefix !== '\t') {
          chunk = prefix + chunk;
        }
        if (suffix !== '\t') {
          chunk += suffix;
        }
        return collapseWhitespace(chunk, {
          preserveLineBreaks: options.preserveLineBreaks,
          conservativeCollapse: !options.trimCustomFragments
        }, /^[ \n\r\t\f]/.test(chunk), /[ \n\r\t\f]$/.test(chunk));
      }
      return chunk;
    });
  } : identity, uidIgnore ? function(str) {
    return str.replace(new RegExp('<!--' + uidIgnore + '([0-9]+)-->', 'g'), function(match, index) {
      return ignoredMarkupChunks[+index];
    });
  } : identity);
}

function joinResultSegments(results, options, restoreCustom, restoreIgnore) {
  var str;
  var maxLineLength = options.maxLineLength;
  if (maxLineLength) {
    var line = '', lines = [];
    while (results.length) {
      var len = line.length;
      var end = results[0].indexOf('\n');
      if (end < 0) {
        line += restoreIgnore(restoreCustom(results.shift()));
      }
      else {
        line += restoreIgnore(restoreCustom(results[0].slice(0, end)));
        results[0] = results[0].slice(end + 1);
      }
      if (len > 0 && line.length > maxLineLength) {
        lines.push(line.slice(0, len));
        line = line.slice(len);
      }
      else if (end >= 0) {
        lines.push(line);
        line = '';
      }
    }
    if (line) {
      lines.push(line);
    }
    str = lines.join('\n');
  }
  else {
    str = restoreIgnore(restoreCustom(results.join('')));
  }
  return options.collapseWhitespace ? collapseWhitespace(str, options, true, true) : str;
}

var minify_1 = function(value, options) {
  var start = Date.now();
  options = processOptions(options || {});
  var result = minify(value, options);
  options.log('minified in: ' + (Date.now() - start) + 'ms');
  return result;
};

var htmlminifier = {
	minify: minify_1
};

var dependencies_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDependencies = undefined;



// eslint-disable-next-line consistent-return
function mergeArrays(objValue, srcValue) {
  if ((0, lodash.isArray)(objValue) && (0, lodash.isArray)(srcValue)) {
    return objValue.concat(srcValue);
  }
}

var dependencies = {};

var registerDependencies = exports.registerDependencies = function registerDependencies(dep) {
  return (0, lodash.mergeWith)(dependencies, dep, mergeArrays);
};

exports.default = dependencies;
});

unwrapExports(dependencies_1);
var dependencies_2 = dependencies_1.registerDependencies;

var ruleError_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = ruleError;
function formatInclude(element) {
  var includedIn = element.includedIn;

  if (!(includedIn && includedIn.length)) return '';

  var formattedIncluded = includedIn.slice().reverse().map(function (_ref) {
    var line = _ref.line,
        file = _ref.file;
    return 'line ' + line + ' of file ' + file;
  }).join(', itself included at ');

  return ', included at ' + formattedIncluded;
}

function ruleError(message, element) {
  var line = element.line,
      tagName = element.tagName,
      absoluteFilePath = element.absoluteFilePath;


  return {
    line: line,
    message: message,
    tagName: tagName,
    formattedMessage: 'Line ' + line + ' of ' + absoluteFilePath + formatInclude(element) + ' (' + tagName + ') \u2014 ' + message
  };
}
module.exports = exports['default'];
});

unwrapExports(ruleError_1);

var validAttributes = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateAttribute;



var _concat2 = _interopRequireDefault(concat);



var _keys2 = _interopRequireDefault(keys$1);



var _includes2 = _interopRequireDefault(includes);



var _filter2 = _interopRequireDefault(filter);



var _ruleError2 = _interopRequireDefault(ruleError_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WHITELIST = ['mj-class', 'css-class'];

function validateAttribute(element, _ref) {
  var components = _ref.components;
  var attributes = element.attributes,
      tagName = element.tagName;


  var Component = components[tagName];

  if (!Component) {
    return null;
  }

  var availableAttributes = (0, _concat2.default)((0, _keys2.default)(Component.allowedAttributes), WHITELIST);
  var unknownAttributes = (0, _filter2.default)((0, _keys2.default)(attributes), function (attribute) {
    return !(0, _includes2.default)(availableAttributes, attribute);
  });

  if (unknownAttributes.length === 0) {
    return null;
  }

  var _attribute$illegal = {
    attribute: unknownAttributes.length > 1 ? 'Attributes' : 'Attribute',
    illegal: unknownAttributes.length > 1 ? 'are illegal' : 'is illegal'
  },
      attribute = _attribute$illegal.attribute,
      illegal = _attribute$illegal.illegal;


  return (0, _ruleError2.default)(attribute + ' ' + unknownAttributes.join(', ') + ' ' + illegal, element);
}
module.exports = exports['default'];
});

unwrapExports(validAttributes);

var validChildren_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validChildren;



var _filter2 = _interopRequireDefault(filter);



var _includes2 = _interopRequireDefault(includes);



var _keys2 = _interopRequireDefault(keys$1);



var _dependencies2 = _interopRequireDefault(dependencies_1);



var _ruleError2 = _interopRequireDefault(ruleError_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validChildren(element, _ref) {
  var components = _ref.components,
      skipElements = _ref.skipElements;
  var children = element.children,
      tagName = element.tagName;


  var Component = components[tagName];

  if (!Component || !children || !children.length) {
    return null;
  }

  return (0, _filter2.default)(children.map(function (child) {
    var childTagName = child.tagName;
    var ChildComponent = components[childTagName];
    var parentDependencies = _dependencies2.default[tagName] || [];

    if (!ChildComponent || (0, _includes2.default)(skipElements, childTagName) || (0, _includes2.default)(parentDependencies, childTagName) || parentDependencies.some(function (dep) {
      return dep instanceof RegExp && dep.test(childTagName);
    })) {
      return null;
    }

    var allowedDependencies = (0, _keys2.default)(_dependencies2.default).filter(function (key) {
      return (0, _includes2.default)(_dependencies2.default[key], childTagName) || _dependencies2.default[key].some(function (dep) {
        return dep instanceof RegExp && dep.test(childTagName);
      });
    });

    return (0, _ruleError2.default)(childTagName + ' cannot be used inside ' + tagName + ', only inside: ' + allowedDependencies.join(', '), child);
  }));
}
module.exports = exports['default'];
});

unwrapExports(validChildren_1);

var validTag = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateTag;





var _ruleError2 = _interopRequireDefault(ruleError_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Tags that have no associated components but are allowed even so
var componentLessTags = ['mj-all', 'mj-class'];

function validateTag(element, _ref) {
  var components = _ref.components;
  var tagName = element.tagName;


  if ((0, lodash.includes)(componentLessTags, tagName)) return null;

  var Component = components[tagName];

  if (!Component) {
    return (0, _ruleError2.default)('Element ' + tagName + ' doesn\'t exist or is not registered', element);
  }

  return null;
}
module.exports = exports['default'];
});

unwrapExports(validTag);

var validTypes = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = validateType;





var _ruleError2 = _interopRequireDefault(ruleError_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validateType(element, _ref) {
  var components = _ref.components,
      initializeType = _ref.initializeType;
  var attributes = element.attributes,
      tagName = element.tagName;


  var Component = components[tagName];

  if (!Component) {
    return null;
  }

  return (0, lodash.compact)((0, lodash.map)(attributes, function (value, attr) {
    var attrType = Component.allowedAttributes && Component.allowedAttributes[attr];
    if (!attrType) return null; // attribute not allowed

    var TypeChecker = initializeType(attrType);
    var result = new TypeChecker(value);
    if (result.isValid()) return null;
    return (0, _ruleError2.default)('Attribute ' + attr + ' ' + result.getErrorMessage(), element);
  }));
}
module.exports = exports['default'];
});

unwrapExports(validTypes);

var rules = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.validTypes = exports.validTag = exports.validChildren = exports.validAttributes = undefined;



var _validAttributes3 = _interopRequireDefault(validAttributes);



var _validChildren3 = _interopRequireDefault(validChildren_1);



var _validTag3 = _interopRequireDefault(validTag);



var _validTypes3 = _interopRequireDefault(validTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.validAttributes = _validAttributes3.default;
exports.validChildren = _validChildren3.default;
exports.validTag = _validTag3.default;
exports.validTypes = _validTypes3.default;
});

unwrapExports(rules);
var rules_1 = rules.validTypes;
var rules_2 = rules.validTag;
var rules_3 = rules.validChildren;
var rules_4 = rules.validAttributes;

var MJMLRulesCollection_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerRule = registerRule;



var _warning2 = _interopRequireDefault(warning);





var rules$$1 = _interopRequireWildcard(rules);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MJMLRulesCollection = {};

function registerRule(rule, name) {
  if (typeof rule !== 'function') {
    return (0, _warning2.default)(false, 'Your rule must be a function');
  }

  if (name) {
    MJMLRulesCollection[name] = rule;
  } else {
    MJMLRulesCollection[rule.name] = rule;
  }

  return true;
}

(0, lodash.mapKeys)(rules$$1, function (func, name) {
  return registerRule(func, name);
});

exports.default = MJMLRulesCollection;
});

unwrapExports(MJMLRulesCollection_1);
var MJMLRulesCollection_2 = MJMLRulesCollection_1.registerRule;

var lib = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerDependencies = exports.dependencies = exports.registerRule = exports.rulesCollection = exports.formatValidationError = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);



Object.defineProperty(exports, 'registerDependencies', {
  enumerable: true,
  get: function get() {
    return dependencies_1.registerDependencies;
  }
});
exports.default = MJMLValidator;





var _ruleError2 = _interopRequireDefault(ruleError_1);



var _MJMLRulesCollection2 = _interopRequireDefault(MJMLRulesCollection_1);

var _dependencies3 = _interopRequireDefault(dependencies_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SKIP_ELEMENTS = ['mjml'];

var formatValidationError = exports.formatValidationError = _ruleError2.default;

exports.rulesCollection = _MJMLRulesCollection2.default;
exports.registerRule = MJMLRulesCollection_1.registerRule;
exports.dependencies = _dependencies3.default;
function MJMLValidator(element) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var children = element.children,
      tagName = element.tagName;

  var errors = void 0;

  var skipElements = options.skipElements || SKIP_ELEMENTS;

  if (!(0, lodash.includes)(skipElements, tagName)) {
    errors = (0, lodash.flatten)(lodash.concat.apply(undefined, [errors].concat((0, _toConsumableArray3.default)((0, lodash.values)(_MJMLRulesCollection2.default).map(function (rule) {
      return rule(element, (0, _extends3.default)({
        skipElements: skipElements
      }, options));
    })))));
  }

  if (children && children.length > 0) {
    errors = (0, lodash.flatten)(lodash.concat.apply(undefined, [errors].concat((0, _toConsumableArray3.default)(children.map(function (child) {
      return MJMLValidator(child, options);
    })))));
  }

  return (0, lodash.filter)(errors);
}
});

unwrapExports(lib);
var lib_1 = lib.registerDependencies;
var lib_2 = lib.dependencies;
var lib_3 = lib.registerRule;
var lib_4 = lib.rulesCollection;
var lib_5 = lib.formatValidationError;

var unavailableTags = ['mj-html', 'mj-invoice', 'mj-list', 'mj-location'];

var attributesWithUnit = ['background-size', 'border-radius', 'border-width', 'cellpadding', 'cellspacing', 'font-size', 'height', 'icon-height', 'ico-padding', 'ico-padding-bottom', 'ico-font-size', 'ico-line-height', 'ico-padding-left', 'ico-padding-right', 'ico-padding-top', 'icon-size', 'icon-width', 'inner-padding', 'letter-spacing', 'padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-left', 'tb-border-radius', 'tb-width', 'width'];

var config = {
  unavailableTags: unavailableTags,
  attributesWithUnit: attributesWithUnit
};

var migrate_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _typeof3 = _interopRequireDefault(_typeof);



var _keys2 = _interopRequireDefault(keys);



var _extends3 = _interopRequireDefault(_extends);

exports.default = migrate;
exports.handleMjml3 = handleMjml3;





var _mjmlParserXml2 = _interopRequireDefault(mjmlParserXml);







function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var beautifyOptions = {
  indent_size: 2,
  wrap_attributes_indent_size: 2,
  max_preserve_newline: 0,
  preserve_newlines: false
}; /* eslint-disable no-console */

function removeContainerTag(bodyTag) {
  if (bodyTag.children[0].tagName === 'mj-container') {
    bodyTag.attributes = bodyTag.children[0].attributes;
    bodyTag.children = bodyTag.children[0].children;
  }
  return bodyTag;
}

var listAttributes = function listAttributes(tag) {
  return tag.attributes;
};

function addPx(value) {
  if (!isNaN(value)) {
    return value + 'px';
  }
  return value;
}

function fixUnits(attribute, value) {
  var length = config.attributesWithUnit.length;
  for (var i = 0; i < length; i += 1) {
    if (config.attributesWithUnit[i] === attribute) {
      return addPx(value);
    }
  }
  return value;
}

function cleanAttributes(attributes) {
  (0, lodash.keys)(attributes).forEach(function (key) {
    attributes[key] = fixUnits(key, attributes[key]);
  });
  return attributes;
}

var DEFAULT_SOCIAL_DISPLAY = 'facebook twitter google';

function migrateSocialSyntax(socialTag) {
  var listAllNetworks = function listAllNetworks(tag) {
    var attributes = (tag.attributes.display || DEFAULT_SOCIAL_DISPLAY).split(' ');
    delete tag.attributes.display;
    return attributes;
  };

  var attributes = listAttributes(socialTag);
  var networks = listAllNetworks(socialTag);

  socialTag.children = [];

  // migrate all attributes to their child attributes
  (0, lodash.keys)(networks).forEach(function (network) {
    var nameMigrated = networks[network].replace(':url', '-noshare').replace(':share', '');
    var nameWithoutOpts = nameMigrated.replace('-noshare', '');

    socialTag.children.push({
      tagName: 'mj-social-element',
      attributes: { name: nameMigrated },
      content: attributes[nameWithoutOpts + '-content'] || ''
    });

    (0, lodash.keys)(attributes).forEach(function (attribute) {
      if (attribute.match(nameWithoutOpts) && !attribute.match('content')) {
        socialTag.children[network].attributes[attribute.replace(nameWithoutOpts + '-', '')] = socialTag.attributes[attribute];
        delete socialTag.attributes[attribute];
      }
    });
  });

  // delete all content attributes from the root tag after they've been migrated
  (0, lodash.keys)(attributes).forEach(function (attribute) {
    if (attribute.match('content')) {
      delete attributes[attribute];
    }
  });

  return socialTag;
}

function migrateNavbarSyntax(navbarTag) {
  navbarTag.tagName = 'mj-section';
  navbarTag.attributes['full-width'] = 'full-width';
  return navbarTag;
}

function migrateHeroSyntax(heroTag) {
  var child = (0, lodash.find)(heroTag.children, { tagName: 'mj-hero-content' });

  return (0, _extends3.default)({}, heroTag, {
    children: child.children,
    attributes: (0, _extends3.default)({}, heroTag.attributes, child.attributes)
  });
}

function isSupportedTag(tag) {
  return config.unavailableTags.indexOf(tag) === -1;
}

function loopThrough(tree) {
  (0, lodash.keys)(tree).forEach(function (key) {
    if (key === 'children') {
      for (var i = 0; i < tree.children.length; i += 1) {
        if (isSupportedTag(tree.children[i].tagName)) {
          switch (tree.children[i].tagName) {
            case 'mj-body':
              tree.children[i] = removeContainerTag(tree.children[i]);
              break;
            case 'mj-social':
              tree.children[i] = migrateSocialSyntax(tree.children[i]);
              break;
            case 'mj-navbar':
              tree.children[i] = migrateNavbarSyntax(tree.children[i]);
              break;
            case 'mj-inline-links':
              tree.children[i].tagName = 'mj-navbar';
              break;
            case 'mj-link':
              tree.children[i].tagName = 'mj-navbar-link';
              break;
            case 'mj-hero':
              tree.children[i] = migrateHeroSyntax(tree.children[i]);
              break;
            // no default
          }

          tree.children[i].attributes = cleanAttributes(tree.children[i].attributes);
          loopThrough(tree.children[i]);
        } else {
          console.error('Ignoring unsupported tag : ' + tree.children[i].tagName + ' on line ' + tree.children[i].line);
          delete tree.children[i];
        }
      }
    }
  });
  return tree;
}

function checkV3Through(node) {
  if (node.tagName === 'mj-container') return true;
  if (!node.children || !node.children.length) return false;

  return node.children.some(checkV3Through);
}

var jsonToXML = function jsonToXML(_ref) {
  var tagName = _ref.tagName,
      attributes = _ref.attributes,
      children = _ref.children,
      content = _ref.content;

  var subNode = children && children.length > 0 ? children.map(jsonToXML).join('\n') : content || '';

  var stringAttrs = (0, _keys2.default)(attributes).map(function (attr) {
    return attr + '="' + attributes[attr] + '"';
  }).join(' ');

  return '<' + tagName + (stringAttrs === '' ? '>' : ' ' + stringAttrs + '>') + subNode + '</' + tagName + '>';
};

function migrate(input) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var beautify = options.beautify;

  if ((typeof input === 'undefined' ? 'undefined' : (0, _typeof3.default)(input)) === 'object') return loopThrough(input);

  var mjmlJson = (0, _mjmlParserXml2.default)(input, { components: lib$1.components, ignoreIncludes: true });
  loopThrough(mjmlJson);

  return beautify ? (0, jsBeautify.html)(jsonToXML(mjmlJson), beautifyOptions) : jsonToXML(mjmlJson);
}

function handleMjml3(mjml) {
  var isV3Synthax = checkV3Through(mjml);
  if (!isV3Synthax) return mjml;

  console.error('MJML v3 syntax detected, migrating to MJML v4 syntax. Use mjml -m to get the migrated MJML.');
  return migrate(mjml);
}

/* eslint-enable no-console */
});

unwrapExports(migrate_1);
var migrate_2 = migrate_1.handleMjml3;

var suffixCssClasses = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (classes, suffix) {
    return classes ? classes.split(' ').map(function (c) {
        return c + '-' + suffix;
    }).join(' ') : '';
};

module.exports = exports['default'];
});

unwrapExports(suffixCssClasses);

var mergeOutlookConditionnals = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

// # OPTIMIZE ME: — check if previous conditionnal is `<!--[if mso | I`]>` too
exports.default = function (content) {
  return content.replace(/(<!\[endif]-->\s*?<!--\[if mso \| IE]>)/gm, '');
};

module.exports = exports['default'];
});

unwrapExports(mergeOutlookConditionnals);

var minifyOutlookConditionnals = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (content) {
  return (
    // find conditionnal comment blocks
    content.replace(/(<!--\[if\s[^\]]+]>)([\s\S]*?)(<!\[endif]-->)/gm, function (match, prefix, content, suffix) {
      // find spaces between tags
      var processedContent = content.replace(/(^|>)(\s+)*(<|$)/gm, function (match, prefix, content, suffix) {
        return '' + prefix + suffix;
      }).replace(/\s{2,}/gm, ' ');
      return '' + prefix + processedContent + suffix;
    })
  );
};

module.exports = exports['default'];
});

unwrapExports(minifyOutlookConditionnals);

var preview = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (content) {
  if (content === '') {
    return '';
  }

  return '\n    <div style="display:none;font-size:1px;color:#ffffff;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">\n      ' + content + '\n    </div>\n  ';
};

module.exports = exports['default'];
});

unwrapExports(preview);

var fonts = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.buildFontsTags = buildFontsTags;



var _forEach2 = _interopRequireDefault(forEach);



var _map2 = _interopRequireDefault(map);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// eslint-disable-next-line import/prefer-default-export
function buildFontsTags(content, inlineStyle) {
  var fonts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

  var toImport = [];

  (0, _forEach2.default)(fonts, function (url$$1, name) {
    var regex = new RegExp('"[^"]*font-family:[^"]*' + name + '[^"]*"', 'gmi');
    var inlineRegex = new RegExp('font-family:[^;}]*' + name, 'gmi');

    if (content.match(regex) || inlineStyle.some(function (s) {
      return s.match(inlineRegex);
    })) {
      toImport.push(url$$1);
    }
  });

  if (toImport.length > 0) {
    return '\n      <!--[if !mso]><!-->\n        ' + (0, _map2.default)(toImport, function (url$$1) {
      return '<link href="' + url$$1 + '" rel="stylesheet" type="text/css">';
    }).join('\n') + '\n        <style type="text/css">\n          ' + (0, _map2.default)(toImport, function (url$$1) {
      return '@import url(' + url$$1 + ');';
    }).join('\n') + '\n        </style>\n      <!--<![endif]-->\n\n    ';
  }

  return '';
}
});

unwrapExports(fonts);
var fonts_1 = fonts.buildFontsTags;

var mediaQueries = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = buildMediaQueriesTags;



// eslint-disable-next-line import/prefer-default-export
function buildMediaQueriesTags(breakpoint) {
  var mediaQueries = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var forceOWADesktop = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if ((0, lodash.isEmpty)(mediaQueries)) {
    return '';
  }

  var baseMediaQueries = (0, lodash.map)(mediaQueries, function (mediaQuery, className) {
    return '.' + className + ' ' + mediaQuery;
  });
  var owaQueries = (0, lodash.map)(baseMediaQueries, function (mq) {
    return '[owa] ' + mq;
  });

  return '\n    <style type="text/css">\n      @media only screen and (min-width:' + breakpoint + ') {\n        ' + baseMediaQueries.join('\n') + '\n      }\n    </style>\n    ' + (forceOWADesktop ? '<style type="text/css">\n' + owaQueries.join('\n') + '\n</style>' : '') + '\n  ';
}
module.exports = exports['default'];
});

unwrapExports(mediaQueries);

var skeleton_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = skeleton;





var _preview2 = _interopRequireDefault(preview);





var _mediaQueries2 = _interopRequireDefault(mediaQueries);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function skeleton(options) {
  var _options$backgroundCo = options.backgroundColor,
      backgroundColor = _options$backgroundCo === undefined ? '' : _options$backgroundCo,
      _options$breakpoint = options.breakpoint,
      breakpoint = _options$breakpoint === undefined ? '480px' : _options$breakpoint,
      _options$content = options.content,
      content = _options$content === undefined ? '' : _options$content,
      _options$fonts = options.fonts,
      fonts$$1 = _options$fonts === undefined ? {} : _options$fonts,
      _options$mediaQueries = options.mediaQueries,
      mediaQueries$$1 = _options$mediaQueries === undefined ? {} : _options$mediaQueries,
      _options$headStyle = options.headStyle,
      headStyle = _options$headStyle === undefined ? [] : _options$headStyle,
      _options$componentsHe = options.componentsHeadStyle,
      componentsHeadStyle = _options$componentsHe === undefined ? {} : _options$componentsHe,
      _options$headRaw = options.headRaw,
      headRaw = _options$headRaw === undefined ? [] : _options$headRaw,
      preview$$1 = options.preview,
      _options$title = options.title,
      title = _options$title === undefined ? '' : _options$title,
      style = options.style,
      forceOWADesktop = options.forceOWADesktop,
      inlineStyle = options.inlineStyle,
      lang = options.lang;


  var langAttribute = lang ? 'lang="' + lang + '" ' : '';

  return '\n    <!doctype html>\n    <html ' + langAttribute + 'xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">\n      <head>\n        <title>\n          ' + title + '\n        </title>\n        <!--[if !mso]><!-- -->\n        <meta http-equiv="X-UA-Compatible" content="IE=edge">\n        <!--<![endif]-->\n        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">\n        <meta name="viewport" content="width=device-width, initial-scale=1">\n        <style type="text/css">\n          #outlook a { padding:0; }\n          .ReadMsgBody { width:100%; }\n          .ExternalClass { width:100%; }\n          .ExternalClass * { line-height:100%; }\n          body { margin:0;padding:0;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%; }\n          table, td { border-collapse:collapse;mso-table-lspace:0pt;mso-table-rspace:0pt; }\n          img { border:0;height:auto;line-height:100%; outline:none;text-decoration:none;-ms-interpolation-mode:bicubic; }\n          p { display:block;margin:13px 0; }\n        </style>\n        <!--[if !mso]><!-->\n        <style type="text/css">\n          @media only screen and (max-width:480px) {\n            @-ms-viewport { width:320px; }\n            @viewport { width:320px; }\n          }\n        </style>\n        <!--<![endif]-->\n        <!--[if mso]>\n        <xml>\n        <o:OfficeDocumentSettings>\n          <o:AllowPNG/>\n          <o:PixelsPerInch>96</o:PixelsPerInch>\n        </o:OfficeDocumentSettings>\n        </xml>\n        <![endif]-->\n        <!--[if lte mso 11]>\n        <style type="text/css">\n          .outlook-group-fix { width:100% !important; }\n        </style>\n        <![endif]-->\n        ' + (0, fonts.buildFontsTags)(content, inlineStyle, fonts$$1) + '\n        ' + (0, _mediaQueries2.default)(breakpoint, mediaQueries$$1, forceOWADesktop) + '\n        <style type="text/css">\n        ' + (0, lodash.reduce)(componentsHeadStyle, function (result, compHeadStyle) {
    return result + '\n' + compHeadStyle(breakpoint);
  }, '') + '\n        ' + (0, lodash.reduce)(headStyle, function (result, headStyle) {
    return result + '\n' + headStyle(breakpoint);
  }, '') + '\n        </style>\n        ' + (style && style.length > 0 ? '<style type="text/css">' + style.join('') + '</style>' : '') + '\n        ' + headRaw.filter((0, lodash.negate)(lodash.isNil)).join('\n') + '\n      </head>\n      <body' + (backgroundColor === '' ? '' : ' style="background-color:' + backgroundColor + ';"') + '>\n        ' + (0, _preview2.default)(preview$$1) + '\n        ' + content + '\n      </body>\n    </html>\n  ';
}
module.exports = exports['default'];
});

unwrapExports(skeleton_1);

var mjmlconfig = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _keys2 = _interopRequireDefault(keys);

exports.readMjmlConfig = readMjmlConfig;
exports.resolveComponentPath = resolveComponentPath;
exports.registerCustomComponent = registerCustomComponent;
exports.default = handleMjmlConfig;



var _path2 = _interopRequireDefault(path);



var _fs2 = _interopRequireDefault(fs);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function readMjmlConfig() {
  var configPathOrDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.cwd();

  var componentRootPath = process.cwd();
  var mjmlConfigPath = configPathOrDir;
  try {
    mjmlConfigPath = _path2.default.basename(configPathOrDir) === '.mjmlconfig' ? _path2.default.resolve(configPathOrDir) : _path2.default.resolve(configPathOrDir, '.mjmlconfig');
    componentRootPath = _path2.default.dirname(mjmlConfigPath);
    var mjmlConfig = JSON.parse(_fs2.default.readFileSync(_path2.default.resolve(mjmlConfigPath), 'utf8'));
    return { mjmlConfig: mjmlConfig, componentRootPath: componentRootPath };
  } catch (e) {
    if (e.code !== 'ENOENT') {
      console.error('Error reading mjmlconfig : ', e); // eslint-disable-line no-console
    }
    return { mjmlConfig: { packages: [] }, mjmlConfigPath: mjmlConfigPath, componentRootPath: componentRootPath, error: e };
  }
}

function resolveComponentPath(compPath, componentRootPath) {
  if (!compPath) {
    return null;
  }
  if (!compPath.startsWith('.') && !_path2.default.isAbsolute(compPath)) {
    try {
      return commonjsRequire.resolve(compPath);
    } catch (e) {
      if (e.code !== 'MODULE_NOT_FOUND') {
        console.error('Error resolving custom component path : ', e); // eslint-disable-line no-console
        return null;
      }
      // we got a 'MODULE_NOT_FOUND' error
      try {
        // try again as relative path to node_modules: (this may be necessary if mjml is installed globally or by npm link)
        return resolveComponentPath('./node_modules/' + compPath, componentRootPath);
      } catch (e) {
        //  try again as a plain local path:
        return resolveComponentPath('./' + compPath, componentRootPath);
      }
    }
  }
  return commonjsRequire.resolve(_path2.default.resolve(componentRootPath, compPath));
}

function registerCustomComponent(comp) {
  var registerCompFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : components_1.registerComponent;

  if (comp instanceof Function) {
    registerCompFn(comp);
  } else {
    var compNames = (0, _keys2.default)(comp); // this approach handles both an array and an object (like the mjml-accordion default export)
    compNames.forEach(function (compName) {
      registerCustomComponent(comp[compName], registerCompFn);
    });
  }
}

function handleMjmlConfig() {
  var configPathOrDir = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : process.cwd();
  var registerCompFn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : components_1.registerComponent;

  var _readMjmlConfig = readMjmlConfig(configPathOrDir),
      packages = _readMjmlConfig.mjmlConfig.packages,
      componentRootPath = _readMjmlConfig.componentRootPath,
      error = _readMjmlConfig.error;

  if (error) return { error: error };

  var result = {
    success: [],
    failures: []
  };

  packages.forEach(function (compPath) {
    var resolvedPath = compPath;
    try {
      resolvedPath = resolveComponentPath(compPath, componentRootPath);
      if (resolvedPath) {
        var requiredComp = commonjsRequire(resolvedPath); // eslint-disable-line global-require, import/no-dynamic-require
        registerCustomComponent(requiredComp.default || requiredComp, registerCompFn);
        (0, lib.registerDependencies)((requiredComp.default || requiredComp).dependencies);
        result.success.push(compPath);
      }
    } catch (e) {
      result.failures.push({ error: e, compPath: compPath });
      if (e.code === 'ENOENT' || e.code === 'MODULE_NOT_FOUND') {
        console.error('Missing or unreadable custom component : ', resolvedPath); // eslint-disable-line no-console
      } else {
        console.error('Error when registering custom component : ', resolvedPath, e); // eslint-disable-line no-console
      }
    }
  });

  return result;
}
});

unwrapExports(mjmlconfig);
var mjmlconfig_1 = mjmlconfig.readMjmlConfig;
var mjmlconfig_2 = mjmlconfig.resolveComponentPath;
var mjmlconfig_3 = mjmlconfig.registerCustomComponent;

var lib$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.HeadComponent = exports.BodyComponent = exports.initializeType = exports.handleMjmlConfig = exports.suffixCssClasses = exports.registerComponent = exports.initComponent = exports.components = undefined;



var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);



var _extends3 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

exports.default = mjml2html;



Object.defineProperty(exports, 'BodyComponent', {
  enumerable: true,
  get: function get() {
    return createComponent.BodyComponent;
  }
});
Object.defineProperty(exports, 'HeadComponent', {
  enumerable: true,
  get: function get() {
    return createComponent.HeadComponent;
  }
});





var _path2 = _interopRequireDefault(path);



var _juice2 = _interopRequireDefault(juice);







var _mjmlParserXml2 = _interopRequireDefault(mjmlParserXml);



var _mjmlValidator2 = _interopRequireDefault(lib);





var _components2 = _interopRequireDefault(components_1);



var _suffixCssClasses2 = _interopRequireDefault(suffixCssClasses);



var _mergeOutlookConditionnals2 = _interopRequireDefault(mergeOutlookConditionnals);



var _minifyOutlookConditionnals2 = _interopRequireDefault(minifyOutlookConditionnals);



var _skeleton2 = _interopRequireDefault(skeleton_1);





var _mjmlconfig2 = _interopRequireDefault(mjmlconfig);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ValidationError = function (_Error) {
  (0, _inherits3.default)(ValidationError, _Error);

  function ValidationError(message, errors) {
    (0, _classCallCheck3.default)(this, ValidationError);

    var _this = (0, _possibleConstructorReturn3.default)(this, (ValidationError.__proto__ || (0, _getPrototypeOf2.default)(ValidationError)).call(this, message));

    _this.errors = errors;
    return _this;
  }

  return ValidationError;
}(Error);

function mjml2html(mjml) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  var content = '';
  var errors = [];

  if (typeof options.skeleton === 'string') {
    /* eslint-disable global-require */
    /* eslint-disable import/no-dynamic-require */
    options.skeleton = commonjsRequire(options.skeleton.charAt(0) === '.' ? _path2.default.resolve(process.cwd(), options.skeleton) : options.skeleton);
    /* eslint-enable global-require */
    /* eslint-enable import/no-dynamic-require */
  }

  var _options$beautify = options.beautify,
      beautify = _options$beautify === undefined ? false : _options$beautify,
      _options$fonts = options.fonts,
      fonts = _options$fonts === undefined ? {
    'Open Sans': 'https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,700',
    'Droid Sans': 'https://fonts.googleapis.com/css?family=Droid+Sans:300,400,500,700',
    Lato: 'https://fonts.googleapis.com/css?family=Lato:300,400,500,700',
    Roboto: 'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700',
    Ubuntu: 'https://fonts.googleapis.com/css?family=Ubuntu:300,400,500,700'
  } : _options$fonts,
      keepComments = options.keepComments,
      _options$minify = options.minify,
      minify = _options$minify === undefined ? false : _options$minify,
      _options$minifyOption = options.minifyOptions,
      minifyOptions = _options$minifyOption === undefined ? {} : _options$minifyOption,
      _options$skeleton = options.skeleton,
      skeleton = _options$skeleton === undefined ? _skeleton2.default : _options$skeleton,
      _options$validationLe = options.validationLevel,
      validationLevel = _options$validationLe === undefined ? 'soft' : _options$validationLe,
      _options$filePath = options.filePath,
      filePath = _options$filePath === undefined ? '.' : _options$filePath,
      _options$mjmlConfigPa = options.mjmlConfigPath,
      mjmlConfigPath = _options$mjmlConfigPa === undefined ? null : _options$mjmlConfigPa;

  // if mjmlConfigPath is specified then we need to handle it on each call

  if (mjmlConfigPath) (0, _mjmlconfig2.default)(mjmlConfigPath, components_1.registerComponent);

  if (typeof mjml === 'string') {
    mjml = (0, _mjmlParserXml2.default)(mjml, {
      keepComments: keepComments,
      components: _components2.default,
      filePath: filePath
    });
  }

  mjml = (0, migrate_1.handleMjml3)(mjml);

  var globalDatas = {
    backgroundColor: '',
    breakpoint: '480px',
    classes: {},
    classesDefault: {},
    defaultAttributes: {},
    fonts: fonts,
    inlineStyle: [],
    headStyle: {},
    componentsHeadStyle: [],
    headRaw: [],
    mediaQueries: {},
    preview: '',
    style: [],
    title: '',
    forceOWADesktop: (0, lodash.get)(mjml, 'attributes.owa', 'mobile') === 'desktop',
    lang: (0, lodash.get)(mjml, 'attributes.lang')
  };

  var validatorOptions = {
    components: _components2.default,
    initializeType: type.initializeType
  };

  switch (validationLevel) {
    case 'skip':
      break;

    case 'strict':
      errors = (0, _mjmlValidator2.default)(mjml, validatorOptions);

      if (errors.length > 0) {
        throw new ValidationError('ValidationError: \n ' + errors.map(function (e) {
          return e.formattedMessage;
        }).join('\n'), errors);
      }
      break;

    case 'soft':
    default:
      errors = (0, _mjmlValidator2.default)(mjml, validatorOptions);
      break;
  }

  var mjBody = (0, lodash.find)(mjml.children, { tagName: 'mj-body' });
  var mjHead = (0, lodash.find)(mjml.children, { tagName: 'mj-head' });

  var _processing = function _processing(node, context) {
    var parseMJML = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : lodash.identity;

    if (!node) {
      return;
    }

    var component = (0, components_1.initComponent)({
      name: node.tagName,
      initialDatas: (0, _extends3.default)({}, parseMJML(node), {
        context: context
      })
    });

    if (component !== null) {
      if ('handler' in component) {
        return component.handler(); // eslint-disable-line consistent-return
      }

      if ('render' in component) {
        return component.render(); // eslint-disable-line consistent-return
      }
    }
  };

  var applyAttributes = function applyAttributes(mjml) {
    var parse = function parse(mjml) {
      var parentMjClass = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var attributes = mjml.attributes,
          tagName = mjml.tagName,
          children = mjml.children;

      var classes = (0, lodash.get)(mjml.attributes, 'mj-class', '').split(' ');
      var attributesClasses = (0, lodash.reduce)(classes, function (acc, value) {
        var mjClassValues = globalDatas.classes[value];
        var multipleClasses = {};
        if (acc['css-class'] && (0, lodash.get)(mjClassValues, 'css-class')) {
          multipleClasses = {
            'css-class': acc['css-class'] + ' ' + mjClassValues['css-class']
          };
        }

        return (0, _extends3.default)({}, acc, mjClassValues, multipleClasses);
      }, {});

      var defaultAttributesForClasses = (0, lodash.reduce)(parentMjClass.split(' '), function (acc, value) {
        return (0, _extends3.default)({}, acc, (0, lodash.get)(globalDatas.classesDefault, value + '.' + tagName));
      }, {});
      var nextParentMjClass = (0, lodash.get)(attributes, 'mj-class', parentMjClass);

      return (0, _extends3.default)({}, mjml, {
        attributes: (0, _extends3.default)({}, globalDatas.defaultAttributes[tagName], attributesClasses, defaultAttributesForClasses, (0, lodash.omit)(attributes, ['mj-class'])),
        globalAttributes: (0, _extends3.default)({}, globalDatas.defaultAttributes['mj-all']),
        children: (0, lodash.map)(children, function (mjml) {
          return parse(mjml, nextParentMjClass);
        })
      });
    };

    return parse(mjml);
  };

  var bodyHelpers = {
    addMediaQuery: function addMediaQuery(className, _ref) {
      var parsedWidth = _ref.parsedWidth,
          unit = _ref.unit;

      globalDatas.mediaQueries[className] = '{ width:' + parsedWidth + unit + ' !important; max-width: ' + parsedWidth + unit + '; }';
    },
    addHeadSyle: function addHeadSyle(identifier, headStyle) {
      globalDatas.headStyle[identifier] = headStyle;
    },
    addComponentHeadSyle: function addComponentHeadSyle(headStyle) {
      globalDatas.componentsHeadStyle.push(headStyle);
    },

    setBackgroundColor: function setBackgroundColor(color) {
      globalDatas.backgroundColor = color;
    },
    processing: function processing(node, context) {
      return _processing(node, context, applyAttributes);
    }
  };

  var headHelpers = {
    add: function add(attr) {
      for (var _len = arguments.length, params = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        params[_key - 1] = arguments[_key];
      }

      if (Array.isArray(globalDatas[attr])) {
        var _globalDatas$attr;

        (_globalDatas$attr = globalDatas[attr]).push.apply(_globalDatas$attr, (0, _toConsumableArray3.default)(params));
      } else if (Object.prototype.hasOwnProperty.call(globalDatas, attr)) {
        if (params.length > 1) {
          if ((0, lodash.isObject)(globalDatas[attr][params[0]])) {
            globalDatas[attr][params[0]] = (0, _extends3.default)({}, globalDatas[attr][params[0]], params[1]);
          } else {
            globalDatas[attr][params[0]] = params[1];
          }
        } else {
          globalDatas[attr] = params[0];
        }
      } else {
        throw Error('An mj-head element add an unkown head attribute : ' + attr + ' with params ' + (Array.isArray(params) ? params.join('') : params));
      }
    }
  };

  globalDatas.headRaw = _processing(mjHead, headHelpers);

  content = _processing(mjBody, bodyHelpers, applyAttributes);

  if (minify && minify !== 'false') {
    content = (0, _minifyOutlookConditionnals2.default)(content);
  }

  content = skeleton((0, _extends3.default)({
    content: content
  }, globalDatas));

  if (globalDatas.inlineStyle.length > 0) {
    content = (0, _juice2.default)(content, {
      applyStyleTags: false,
      extraCss: globalDatas.inlineStyle.join(''),
      insertPreservedExtraCss: false,
      removeStyleTags: false
    });
  }

  content = beautify && beautify !== 'false' ? (0, jsBeautify.html)(content, {
    indent_size: 2,
    wrap_attributes_indent_size: 2,
    max_preserve_newline: 0,
    preserve_newlines: false
  }) : content;

  if (minify && minify !== 'false') {
    content = (0, htmlminifier.minify)(content, (0, _extends3.default)({
      collapseWhitespace: true,
      minifyCSS: false,
      removeEmptyAttributes: true
    }, minifyOptions));
  }

  content = (0, _mergeOutlookConditionnals2.default)(content);

  return {
    html: content,
    errors: errors
  };
}

(0, _mjmlconfig2.default)(process.cwd(), components_1.registerComponent);

exports.components = _components2.default;
exports.initComponent = components_1.initComponent;
exports.registerComponent = components_1.registerComponent;
exports.suffixCssClasses = _suffixCssClasses2.default;
exports.handleMjmlConfig = _mjmlconfig2.default;
exports.initializeType = type.initializeType;
});

unwrapExports(lib$1);
var lib_1$1 = lib$1.HeadComponent;
var lib_2$1 = lib$1.BodyComponent;
var lib_3$1 = lib$1.initializeType;
var lib_4$1 = lib$1.handleMjmlConfig;
var lib_5$1 = lib$1.suffixCssClasses;
var lib_6 = lib$1.registerComponent;
var lib_7 = lib$1.initComponent;
var lib_8 = lib$1.components;

var Social = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjSocial = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjSocial, _BodyComponent);

  function MjSocial() {
    (0, _classCallCheck3.default)(this, MjSocial);
    return (0, _possibleConstructorReturn3.default)(this, (MjSocial.__proto__ || (0, _getPrototypeOf2.default)(MjSocial)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjSocial, [{
    key: 'getStyles',
    value: function getStyles() {
      // eslint-disable-line class-methods-use-this
      return {
        tableVertical: {
          margin: '0px'
        }
      };
    }
  }, {
    key: 'getSocialElementAttributes',
    value: function getSocialElementAttributes() {
      var _this2 = this;

      var base = {};
      if (this.getAttribute('inner-padding')) {
        base.padding = this.getAttribute('inner-padding');
      }

      return ['border-radius', 'color', 'font-family', 'font-size', 'font-weight', 'font-style', 'icon-size', 'icon-height', 'icon-padding', 'text-padding', 'line-height', 'text-decoration'].reduce(function (res, attr) {
        res[attr] = _this2.getAttribute(attr);
        return res;
      }, base);
    }
  }, {
    key: 'renderHorizontal',
    value: function renderHorizontal() {
      var _this3 = this;

      var children = this.props.children;


      return '\n     <!--[if mso | IE]>\n      <table\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation'
      }) + '\n      >\n        <tr>\n      <![endif]-->\n      ' + this.renderChildren(children, {
        attributes: this.getSocialElementAttributes(),
        renderer: function renderer(component) {
          return '\n            <!--[if mso | IE]>\n              <td>\n            <![endif]-->\n              <table\n                ' + component.htmlAttributes({
            align: _this3.getAttribute('align'),
            border: '0',
            cellpadding: '0',
            cellspacing: '0',
            role: 'presentation',
            style: {
              float: 'none',
              display: 'inline-table'
            }
          }) + '\n              >\n                ' + component.render() + '\n              </table>\n            <!--[if mso | IE]>\n              </td>\n            <![endif]-->\n          ';
        }
      }) + '\n      <!--[if mso | IE]>\n          </tr>\n        </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderVertical',
    value: function renderVertical() {
      var children = this.props.children;


      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'tableVertical'
      }) + '\n      >\n        ' + this.renderChildren(children, {
        attributes: this.getSocialElementAttributes()
      }) + '\n      </table>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      ' + (this.getAttribute('mode') === 'horizontal' ? this.renderHorizontal() : this.renderVertical()) + '\n    ';
    }
  }]);
  return MjSocial;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  align: 'enum(left,right,center)',
  'border-radius': 'unit(px)',
  'container-background-color': 'color',
  color: 'color',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-style': 'string',
  'font-weight': 'string',
  'icon-size': 'unit(px,%)',
  'icon-height': 'unit(px,%)',
  'icon-padding': 'unit(px,%){1,4}',
  'inner-padding': 'unit(px,%)',
  'line-height': 'unit(px,%)',
  mode: 'enum(horizontal,vertical)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'table-layout': 'enum(auto,fixed)',
  'text-padding': 'unit(px,%){1,4}',
  'text-decoration': 'string',
  'vertical-align': 'enum(top,bottom,middle)'
}, _class.defaultAttributes = {
  align: 'center',
  'border-radius': '3px',
  color: '#333333',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'icon-size': '20px',
  'inner-padding': null,
  'line-height': '22px',
  mode: 'horizontal',
  padding: '10px 25px',
  'text-decoration': 'none'
}, _temp);
exports.default = MjSocial;
module.exports = exports['default'];
});

unwrapExports(Social);

var SocialElement = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _defineProperty3 = _interopRequireDefault(defineProperty);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _extends4 = _interopRequireDefault(_extends);

var _class, _temp;





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var IMG_BASE_URL = 'https://www.mailjet.com/images/theme/v1/icons/ico-social/';

var defaultSocialNetworks = {
  facebook: {
    'share-url': 'https://www.facebook.com/sharer/sharer.php?u=[[URL]]',
    'background-color': '#3b5998',
    src: IMG_BASE_URL + 'facebook.png'
  },
  twitter: {
    'share-url': 'https://twitter.com/home?status=[[URL]]',
    'background-color': '#55acee',
    src: IMG_BASE_URL + 'twitter.png'
  },
  google: {
    'share-url': 'https://plus.google.com/share?url=[[URL]]',
    'background-color': '#dc4e41',
    src: IMG_BASE_URL + 'google-plus.png'
  },
  pinterest: {
    'share-url': 'https://pinterest.com/pin/create/button/?url=[[URL]]&media=&description=',
    'background-color': '#bd081c',
    src: IMG_BASE_URL + 'pinterest.png'
  },
  linkedin: {
    'share-url': 'https://www.linkedin.com/shareArticle?mini=true&url=[[URL]]&title=&summary=&source=',
    'background-color': '#0077b5',
    src: IMG_BASE_URL + 'linkedin.png'
  },
  instagram: {
    'background-color': '#3f729b',
    src: IMG_BASE_URL + 'instagram.png'
  },
  web: {
    src: IMG_BASE_URL + 'web.png',
    'background-color': '#4BADE9'
  },
  snapchat: {
    src: IMG_BASE_URL + 'snapchat.png',
    'background-color': '#FFFA54'
  },
  youtube: {
    src: IMG_BASE_URL + 'youtube.png',
    'background-color': '#EB3323'
  },
  tumblr: {
    src: IMG_BASE_URL + 'tumblr.png',
    'share-url': 'https://www.tumblr.com/widgets/share/tool?canonicalUrl=[[URL]]',
    'background-color': '#344356'
  },
  github: {
    src: IMG_BASE_URL + 'github.png',
    'background-color': '#000000'
  },
  xing: {
    src: IMG_BASE_URL + 'xing.png',
    'share-url': 'https://www.xing.com/app/user?op=share&url=[[URL]]',
    'background-color': '#296366'
  },
  vimeo: {
    src: IMG_BASE_URL + 'vimeo.png',
    'background-color': '#53B4E7'
  },
  medium: {
    src: IMG_BASE_URL + 'medium.png',
    'background-color': '#000000'
  },
  soundcloud: {
    src: IMG_BASE_URL + 'soundcloud.png',
    'background-color': '#EF7F31'
  },
  dribbble: {
    src: IMG_BASE_URL + 'dribbble.png',
    'background-color': '#D95988'
  }
};

(0, lodash.each)(defaultSocialNetworks, function (val, key) {
  defaultSocialNetworks[key + '-noshare'] = (0, _extends4.default)({}, val, {
    'share-url': '[[URL]]'
  });
});

var MjSocialElement = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjSocialElement, _BodyComponent);

  function MjSocialElement() {
    (0, _classCallCheck3.default)(this, MjSocialElement);
    return (0, _possibleConstructorReturn3.default)(this, (MjSocialElement.__proto__ || (0, _getPrototypeOf2.default)(MjSocialElement)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjSocialElement, [{
    key: 'getStyles',
    value: function getStyles() {
      var _getSocialAttributes = this.getSocialAttributes(),
          iconSize = _getSocialAttributes['icon-size'],
          iconHeight = _getSocialAttributes['icon-height'],
          backgroundColor = _getSocialAttributes['background-color'];

      return {
        td: {
          padding: this.getAttribute('padding')
        },
        table: {
          background: backgroundColor,
          'border-radius': this.getAttribute('border-radius'),
          width: iconSize
        },
        icon: {
          padding: this.getAttribute('icon-padding'),
          'font-size': '0',
          height: iconHeight || iconSize,
          'vertical-align': 'middle',
          width: iconSize
        },
        img: {
          'border-radius': this.getAttribute('border-radius')
        },
        tdText: {
          'vertical-align': 'middle',
          padding: this.getAttribute('text-padding')

        },
        text: {
          color: this.getAttribute('color'),
          'font-size': this.getAttribute('font-size'),
          'font-weight': this.getAttribute('font-weight'),
          'font-style': this.getAttribute('font-style'),
          'font-family': this.getAttribute('font-family'),
          'line-height': this.getAttribute('line-height'),
          'text-decoration': this.getAttribute('text-decoration')
        }
      };
    }
  }, {
    key: 'getSocialAttributes',
    value: function getSocialAttributes() {
      var _this2 = this;

      var socialNetwork = defaultSocialNetworks[this.getAttribute('name')] || {};
      var href = this.getAttribute('href');

      if ((0, lodash.get)(socialNetwork, 'share-url')) {
        href = socialNetwork['share-url'].replace('[[URL]]', href);
      }

      var attrs = ['icon-size', 'icon-height', 'src', 'background-color'].reduce(function (r, attr) {
        return (0, _extends4.default)({}, r, (0, _defineProperty3.default)({}, attr, _this2.getAttribute(attr) || socialNetwork[attr]));
      }, {});

      return (0, _extends4.default)({
        href: href
      }, attrs);
    }
  }, {
    key: 'render',
    value: function render() {
      var _getSocialAttributes2 = this.getSocialAttributes(),
          src = _getSocialAttributes2.src,
          href = _getSocialAttributes2.href,
          iconSize = _getSocialAttributes2['icon-size'],
          iconHeight = _getSocialAttributes2['icon-height'];

      return '\n      <tr\n        ' + this.htmlAttributes({
        class: this.getAttribute('css-class')
      }) + '\n      >\n        <td ' + this.htmlAttributes({ style: 'td' }) + '>\n          <table\n            ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n          >\n            <tr>\n              <td ' + this.htmlAttributes({ style: 'icon' }) + '>\n                <a ' + this.htmlAttributes({
        href: href,
        rel: this.getAttribute('rel'),
        target: this.getAttribute('target')
      }) + '>\n                    <img\n                      ' + this.htmlAttributes({
        alt: this.getAttribute('alt'),
        title: this.getAttribute('title'),
        height: parseInt(iconHeight || iconSize, 10),
        src: src,
        style: 'img',
        width: parseInt(iconSize, 10)
      }) + '\n                    />\n                  </a>\n                </td>\n              </tr>\n          </table>\n        </td>\n        ' + (this.getContent() ? '\n          <td ' + this.htmlAttributes({ style: 'tdText' }) + '>\n            <a\n              ' + this.htmlAttributes({
        href: href,
        style: 'text',
        rel: this.getAttribute('rel'),
        target: this.getAttribute('target')
      }) + '>\n              ' + this.getContent() + '\n            </a>\n          </td>\n          ' : '') + '\n      </tr>\n    ';
    }
  }]);
  return MjSocialElement;
}(lib$1.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  align: 'enum(left,center,right)',
  'background-color': 'color',
  color: 'color',
  'border-radius': 'unit(px)',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-style': 'string',
  'font-weight': 'string',
  href: 'string',
  'icon-size': 'unit(px,%)',
  'icon-height': 'unit(px,%)',
  'icon-padding': 'unit(px,%){1,4}',
  'line-height': 'unit(px,%)',
  name: 'string',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'text-padding': 'unit(px,%){1,4}',
  src: 'string',
  alt: 'string',
  title: 'string',
  target: 'string',
  'text-decoration': 'string'
}, _class.defaultAttributes = {
  align: 'left',
  color: '#000',
  'border-radius': '3px',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'line-height': '1',
  padding: '4px',
  'text-padding': '4px 4px 4px 0',
  target: '_blank',
  'text-decoration': 'none',
  href: '[[SHORT_PERMALINK]]'
}, _temp);
exports.default = MjSocialElement;
module.exports = exports['default'];
});

unwrapExports(SocialElement);

var lib$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SocialElement = exports.Social = undefined;



var _Social3 = _interopRequireDefault(Social);



var _SocialElement3 = _interopRequireDefault(SocialElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Social = _Social3.default;
exports.SocialElement = _SocialElement3.default;
});

unwrapExports(lib$2);
var lib_1$2 = lib$2.SocialElement;
var lib_2$2 = lib$2.Social;

var conditionalTag_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = conditionalTag;
exports.msoConditionalTag = msoConditionalTag;
var startConditionalTag = exports.startConditionalTag = '<!--[if mso | IE]>';
var startMsoConditionalTag = exports.startMsoConditionalTag = '<!--[if mso]>';
var endConditionalTag = exports.endConditionalTag = '<![endif]-->';
var startNegationConditionalTag = exports.startNegationConditionalTag = '<!--[if !mso | IE]><!-->';
var startMsoNegationConditionalTag = exports.startMsoNegationConditionalTag = '<!--[if !mso><!-->';
var endNegationConditionalTag = exports.endNegationConditionalTag = '<!--<![endif]-->';

function conditionalTag(content) {
  var negation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return '\n    ' + (negation ? startNegationConditionalTag : startConditionalTag) + '\n    ' + content + '\n    ' + (negation ? endNegationConditionalTag : endConditionalTag) + '\n  ';
}

function msoConditionalTag(content) {
  var negation = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  return '\n    ' + (negation ? startMsoNegationConditionalTag : startMsoConditionalTag) + '\n    ' + content + '\n    ' + (negation ? endNegationConditionalTag : endConditionalTag) + '\n  ';
}
});

unwrapExports(conditionalTag_1);
var conditionalTag_2 = conditionalTag_1.msoConditionalTag;
var conditionalTag_3 = conditionalTag_1.startConditionalTag;
var conditionalTag_4 = conditionalTag_1.startMsoConditionalTag;
var conditionalTag_5 = conditionalTag_1.endConditionalTag;
var conditionalTag_6 = conditionalTag_1.startNegationConditionalTag;
var conditionalTag_7 = conditionalTag_1.startMsoNegationConditionalTag;
var conditionalTag_8 = conditionalTag_1.endNegationConditionalTag;

var Navbar = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp2;





var _crypto2 = _interopRequireDefault(crypto);



var _conditionalTag2 = _interopRequireDefault(conditionalTag_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjNavbar = (_temp2 = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjNavbar, _BodyComponent);

  function MjNavbar() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MjNavbar);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MjNavbar.__proto__ || (0, _getPrototypeOf2.default)(MjNavbar)).call.apply(_ref, [this].concat(args))), _this), _this.headStyle = function (breakpoint) {
      return '\n      noinput.mj-menu-checkbox { display:block!important; max-height:none!important; visibility:visible!important; }\n\n      @media only screen and (max-width:' + breakpoint + ') {\n        .mj-menu-checkbox[type="checkbox"] ~ .mj-inline-links { display:none!important; }\n        .mj-menu-checkbox[type="checkbox"]:checked ~ .mj-inline-links,\n        .mj-menu-checkbox[type="checkbox"] ~ .mj-menu-trigger { display:block!important; max-width:none!important; max-height:none!important; font-size:inherit!important; }\n        .mj-menu-checkbox[type="checkbox"] ~ .mj-inline-links > a { display:block!important; }\n        .mj-menu-checkbox[type="checkbox"]:checked ~ .mj-menu-trigger .mj-menu-icon-close { display:block!important; }\n        .mj-menu-checkbox[type="checkbox"]:checked ~ .mj-menu-trigger .mj-menu-icon-open { display:none!important; }\n      }\n    ';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MjNavbar, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        div: {
          align: this.getAttribute('align'),
          width: '100%'
        },
        label: {
          display: 'block',
          cursor: 'pointer',
          'mso-hide': 'all',
          '-moz-user-select': 'none',
          'user-select': 'none',
          align: this.getAttribute('ico-align'),
          color: this.getAttribute('ico-color'),
          'font-size': this.getAttribute('ico-font-size'),
          'font-family': this.getAttribute('ico-font-family'),
          'text-transform': this.getAttribute('ico-text-transform'),
          'text-decoration': this.getAttribute('ico-text-decoration'),
          'line-height': this.getAttribute('ico-line-height'),
          'padding-top': this.getAttribute('ico-padding-top'),
          'padding-right': this.getAttribute('ico-padding-right'),
          'padding-bottom': this.getAttribute('ico-padding-bottom'),
          'padding-left': this.getAttribute('ico-padding-left'),
          padding: this.getAttribute('ico-padding')
        },
        trigger: {
          display: 'none',
          'max-height': '0px',
          'max-width': '0px',
          'font-size': '0px',
          overflow: 'hidden'
        },
        icoOpen: {
          'mso-hide': 'all'
        },
        icoClose: {
          display: 'none',
          'mso-hide': 'all'
        }
      };
    }
  }, {
    key: 'renderHamburger',
    value: function renderHamburger() {
      var key = _crypto2.default.randomBytes(8).toString('hex');

      return '\n      ' + (0, conditionalTag_1.msoConditionalTag)('\n        <input type="checkbox" id="' + key + '" class="mj-menu-checkbox" style="display:none !important; max-height:0; visibility:hidden;" />\n      ', true) + '\n      <div\n        ' + this.htmlAttributes({
        class: 'mj-menu-trigger',
        style: 'trigger'
      }) + '\n      >\n        <label\n          ' + this.htmlAttributes({
        for: key,
        class: 'mj-menu-label',
        style: 'label'
      }) + '\n        >\n          <span\n            ' + this.htmlAttributes({
        class: 'mj-menu-icon-open',
        style: 'icoOpen'
      }) + '\n          >\n            ' + this.getAttribute('ico-open') + '\n          </span>\n          <span\n            ' + this.htmlAttributes({
        class: 'mj-menu-icon-close',
        style: 'icoClose'
      }) + '\n          >\n            ' + this.getAttribute('ico-close') + '\n          </span>\n        </label>\n      </div>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n        ' + (this.getAttribute('hamburger') === 'hamburger' ? this.renderHamburger() : '') + '\n        <div\n          ' + this.htmlAttributes({
        class: 'mj-inline-links',
        style: this.htmlAttributes('div')
      }) + '\n        >\n        ' + (0, _conditionalTag2.default)('\n          <table role="presentation" border="0" cellpadding="0" cellspacing="0" align="' + this.getAttribute('align') + '">\n            <tr>\n        ') + '\n          ' + this.renderChildren(this.props.children, {
        attributes: {
          navbarBaseUrl: this.getAttribute('base-url')
        }
      }) + '\n          ' + (0, _conditionalTag2.default)('\n            </tr></table>\n          ') + '\n        </div>\n    ';
    }
  }]);
  return MjNavbar;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  align: 'enum(left,center,right)',
  'base-url': 'string',
  hamburger: 'string',
  'ico-align': 'enum(left,center,right)',
  'ico-open': 'string',
  'ico-close': 'string',
  'ico-color': 'color',
  'ico-font-size': 'unit(px,%)',
  'ico-font-family': 'string',
  'ico-text-transform': 'string',
  'ico-padding': 'unit(px,%){1,4}',
  'ico-padding-left': 'unit(px,%)',
  'ico-padding-top': 'unit(px,%)',
  'ico-padding-right': 'unit(px,%)',
  'ico-padding-bottom': 'unit(px,%)',
  'ico-text-decoration': 'string',
  'ico-line-height': 'unit(px,%)'
}, _class.defaultAttributes = {
  align: 'center',
  'base-url': null,
  hamburger: null,
  'ico-align': 'center',
  'ico-open': '&#9776;',
  'ico-close': '&#8855;',
  'ico-color': '#000000',
  'ico-font-size': '30px',
  'ico-font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'ico-text-transform': 'uppercase',
  'ico-padding': '10px',
  'ico-text-decoration': 'none',
  'ico-line-height': '30px'
}, _temp2);
exports.default = MjNavbar;
module.exports = exports['default'];
});

unwrapExports(Navbar);

var NavbarLink = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;





var _url2 = _interopRequireDefault(url);



var _conditionalTag2 = _interopRequireDefault(conditionalTag_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjNavbarLink = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjNavbarLink, _BodyComponent);

  function MjNavbarLink() {
    (0, _classCallCheck3.default)(this, MjNavbarLink);
    return (0, _possibleConstructorReturn3.default)(this, (MjNavbarLink.__proto__ || (0, _getPrototypeOf2.default)(MjNavbarLink)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjNavbarLink, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        a: {
          display: 'inline-block',
          color: this.getAttribute('color'),
          'font-family': this.getAttribute('font-family'),
          'font-size': this.getAttribute('font-size'),
          'font-weight': this.getAttribute('font-weight'),
          'line-height': this.getAttribute('line-height'),
          'text-decoration': this.getAttribute('text-decoration'),
          'text-transform': this.getAttribute('text-transform'),
          padding: this.getAttribute('padding'),
          'padding-top': this.getAttribute('padding-top'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-bottom': this.getAttribute('padding-bottom')
        },
        td: {
          padding: this.getAttribute('padding'),
          'padding-top': this.getAttribute('padding-top'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-bottom': this.getAttribute('padding-bottom')
        }
      };
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var href = this.getAttribute('href');
      var navbarBaseUrl = this.getAttribute('navbarBaseUrl');
      var link = navbarBaseUrl ? _url2.default.resolve(navbarBaseUrl, href) : href;

      var cssClass = this.getAttribute('css-class') ? ' ' + this.getAttribute('css-class') : '';

      return '\n      <a\n        ' + this.htmlAttributes({
        class: 'mj-link' + cssClass,
        href: link,
        rel: this.getAttribute('rel'),
        target: this.getAttribute('target'),
        name: this.getAttribute('name'),
        style: 'a'
      }) + '\n      >\n        ' + this.getContent() + '\n      </a>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n        ' + (0, _conditionalTag2.default)('\n          <td\n            ' + this.htmlAttributes({
        style: 'td',
        class: (0, lib$1.suffixCssClasses)(this.getAttribute('css-class'), 'outlook')
      }) + '\n          >\n        ') + '\n        ' + this.renderContent() + '\n        ' + (0, _conditionalTag2.default)('\n          </td>\n        ') + '\n      ';
    }
  }]);
  return MjNavbarLink;
}(lib$1.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  color: 'color',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-weight': 'string',
  href: 'string',
  name: 'string',
  target: 'string',
  rel: 'string',
  'line-height': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'text-decoration': 'string',
  'text-transform': 'string'
}, _class.defaultAttributes = {
  color: '#000000',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'font-weight': 'normal',
  'line-height': '22px',
  padding: '15px 10px',
  target: '_blank',
  'text-decoration': 'none',
  'text-transform': 'uppercase'
}, _temp);
exports.default = MjNavbarLink;
module.exports = exports['default'];
});

unwrapExports(NavbarLink);

var lib$3 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavbarLink = exports.Navbar = undefined;



var _Navbar3 = _interopRequireDefault(Navbar);



var _NavbarLink3 = _interopRequireDefault(NavbarLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Navbar = _Navbar3.default;
exports.NavbarLink = _NavbarLink3.default;
});

unwrapExports(lib$3);
var lib_1$3 = lib$3.NavbarLink;
var lib_2$3 = lib$3.Navbar;

var Carousel = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;





var _range2 = _interopRequireDefault(range);



var _repeat2 = _interopRequireDefault(repeat);



var _min2 = _interopRequireDefault(min);



var _map2 = _interopRequireDefault(map);



var _crypto2 = _interopRequireDefault(crypto);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjCarousel = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjCarousel, _BodyComponent);

  function MjCarousel() {
    var initialDatas = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    (0, _classCallCheck3.default)(this, MjCarousel);

    var _this = (0, _possibleConstructorReturn3.default)(this, (MjCarousel.__proto__ || (0, _getPrototypeOf2.default)(MjCarousel)).call(this, initialDatas));

    _this.componentHeadStyle = function () {
      var length = _this.props.children.length;
      var carouselId = _this.carouselId;


      if (!length) return '';

      var carouselCss = '\n    .mj-carousel {\n      -webkit-user-select: none;\n      -moz-user-select: none;\n      user-select: none;\n    }\n\n    .mj-carousel-' + _this.carouselId + '-icons-cell {\n      display: table-cell !important;\n      width: ' + _this.getAttribute('icon-width') + ' !important;\n    }\n\n    .mj-carousel-radio,\n    .mj-carousel-next,\n    .mj-carousel-previous {\n      display: none !important;\n    }\n\n    .mj-carousel-thumbnail,\n    .mj-carousel-next,\n    .mj-carousel-previous {\n      touch-action: manipulation;\n    }\n\n    ' + (0, _range2.default)(0, length).map(function (i) {
        return '.mj-carousel-' + carouselId + '-radio:checked ' + (0, _repeat2.default)('+ * ', i) + '+ .mj-carousel-content .mj-carousel-image';
      }).join(',') + ' {\n      display: none !important;\n    }\n\n    ' + (0, _range2.default)(0, length).map(function (i) {
        return '.mj-carousel-' + carouselId + '-radio-' + (i + 1) + ':checked ' + (0, _repeat2.default)('+ * ', length - i - 1) + '+ .mj-carousel-content .mj-carousel-image-' + (i + 1);
      }).join(',') + ' {\n      display: block !important;\n    }\n\n    .mj-carousel-previous-icons,\n    .mj-carousel-next-icons,\n    ' + (0, _range2.default)(0, length).map(function (i) {
        return '.mj-carousel-' + carouselId + '-radio-' + (i + 1) + ':checked ' + (0, _repeat2.default)('+ * ', length - i - 1) + '+ .mj-carousel-content .mj-carousel-next-' + ((i + 1 % length + length) % length + 1);
      }) + ',\n    ' + (0, _range2.default)(0, length).map(function (i) {
        return '.mj-carousel-' + carouselId + '-radio-' + (i + 1) + ':checked ' + (0, _repeat2.default)('+ * ', length - i - 1) + '+ .mj-carousel-content .mj-carousel-previous-' + ((i - 1 % length + length) % length + 1);
      }) + ' {\n      display: block !important;\n    }\n\n    ' + (0, _range2.default)(0, length).map(function (i) {
        return '.mj-carousel-' + carouselId + '-radio-' + (i + 1) + ':checked ' + (0, _repeat2.default)('+ * ', length - i - 1) + '+ .mj-carousel-content .mj-carousel-' + carouselId + '-thumbnail-' + (i + 1);
      }).join(',') + ' {\n      border-color: ' + _this.getAttribute('tb-selected-border-color') + ' !important;\n    }\n\n    .mj-carousel-image img + div,\n    .mj-carousel-thumbnail img + div {\n      display: none !important;\n    }\n\n    ' + (0, _range2.default)(0, length).map(function (i) {
        return '.mj-carousel-' + carouselId + '-thumbnail:hover ' + (0, _repeat2.default)('+ * ', length - i - 1) + '+ .mj-carousel-main .mj-carousel-image';
      }).join(',') + ' {\n      display: none !important;\n    }\n\n    .mj-carousel-thumbnail:hover {\n      border-color: ' + _this.getAttribute('tb-hover-border-color') + ' !important;\n    }\n\n    ' + (0, _range2.default)(0, length).map(function (i) {
        return '.mj-carousel-' + carouselId + '-thumbnail-' + (i + 1) + ':hover ' + (0, _repeat2.default)('+ * ', length - i - 1) + '+ .mj-carousel-main .mj-carousel-image-' + (i + 1);
      }).join(',') + ' {\n      display: block !important;\n    }\n    ';

      var fallback = '\n      .mj-carousel noinput { display:block !important; }\n      .mj-carousel noinput .mj-carousel-image-1 { display: block !important;  }\n      .mj-carousel noinput .mj-carousel-arrows,\n      .mj-carousel noinput .mj-carousel-thumbnails { display: none !important; }\n\n      [owa] .mj-carousel-thumbnail { display: none !important; }\n\n      @media screen yahoo {\n          .mj-carousel-' + _this.carouselId + '-icons-cell,\n          .mj-carousel-previous-icons,\n          .mj-carousel-next-icons {\n              display: none !important;\n          }\n\n          .mj-carousel-' + carouselId + '-radio-1:checked ' + (0, _repeat2.default)('+ *', length - 1) + '+ .mj-carousel-content .mj-carousel-' + carouselId + '-thumbnail-1 {\n              border-color: transparent;\n          }\n      }\n    ';

      return carouselCss + '\n' + fallback;
    };

    _this.carouselId = _crypto2.default.randomBytes(6).toString('hex');
    return _this;
  }

  (0, _createClass3.default)(MjCarousel, [{
    key: 'getStyles',
    value: function getStyles() {
      // eslint-disable-line class-methods-use-this
      return {
        carousel: {
          div: {
            display: 'table',
            width: '100%',
            'table-layout': 'fixed',
            'text-align': 'center',
            'font-size': '0px'
          },
          table: {
            'caption-side': 'top',
            display: 'table-caption',
            'table-layout': 'fixed',
            width: '100%'
          }
        },
        images: {
          td: {
            padding: '0px'
          }
        },
        controls: {
          div: {
            display: 'none',
            'mso-hide': 'all'
          },
          img: {
            display: 'block',
            width: this.getAttribute('icon-width'),
            height: 'auto'
          },
          td: {
            'font-size': '0px',
            display: 'none',
            'mso-hide': 'all',
            padding: '0px'
          }
        }
      };
    }
  }, {
    key: 'thumbnailsWidth',
    value: function thumbnailsWidth() {
      if (!this.props.children.length) return 0;
      return this.getAttribute('tb-width') || (0, _min2.default)([this.context.parentWidth / this.props.children.length, 110]) + 'px';
    }
  }, {
    key: 'imagesAttributes',
    value: function imagesAttributes() {
      return (0, _map2.default)(this.children, 'attributes');
    }
  }, {
    key: 'generateRadios',
    value: function generateRadios() {
      return this.renderChildren(this.props.children, {
        renderer: function renderer(component) {
          return component.renderRadio();
        },
        attributes: {
          carouselId: this.carouselId
        }
      });
    }
  }, {
    key: 'generateThumbnails',
    value: function generateThumbnails() {
      if (this.getAttribute('thumbnails') !== 'visible') return '';

      return this.renderChildren(this.props.children, {
        attributes: {
          'tb-border': this.getAttribute('tb-border'),
          'tb-border-radius': this.getAttribute('tb-border-radius'),
          'tb-width': this.thumbnailsWidth(),
          carouselId: this.carouselId
        },
        renderer: function renderer(component) {
          return component.renderThumbnail();
        }
      });
    }
  }, {
    key: 'generateControls',
    value: function generateControls(direction, icon) {
      var _this2 = this;

      var iconWidth = parseInt(this.getAttribute('icon-width'), 10);

      return '\n      <td\n        ' + this.htmlAttributes({
        class: 'mj-carousel-' + this.carouselId + '-icons-cell',
        style: 'controls.td'
      }) + '\n      >\n        <div\n          ' + this.htmlAttributes({
        class: 'mj-carousel-' + direction + '-icons',
        style: 'controls.div'
      }) + '\n        >\n          ' + (0, _range2.default)(1, this.props.children.length + 1).map(function (i) {
        return '\n              <label\n                ' + _this2.htmlAttributes({
          for: 'mj-carousel-' + _this2.carouselId + '-radio-' + i,
          class: 'mj-carousel-' + direction + ' mj-carousel-' + direction + '-' + i
        }) + '\n              >\n                <img\n                  ' + _this2.htmlAttributes({
          src: icon,
          alt: direction,
          style: 'controls.img',
          width: iconWidth
        }) + '\n                />\n              </label>\n            ';
      }).join('') + '\n        </div>\n      </td>\n    ';
    }
  }, {
    key: 'generateImages',
    value: function generateImages() {
      return '\n      <td\n        ' + this.htmlAttributes({
        style: 'images.td'
      }) + '\n      >\n        <div\n          ' + this.htmlAttributes({
        class: 'mj-carousel-images'
      }) + '\n        >\n          ' + this.renderChildren(this.props.children, {
        attributes: {
          'border-radius': this.getAttribute('border-radius')
        }
      }) + '\n        </div>\n      </td>\n    ';
    }
  }, {
    key: 'generateCarousel',
    value: function generateCarousel() {
      return '\n      <table\n        ' + this.htmlAttributes({
        style: 'carousel.table',
        border: '0',
        'cell-padding': '0',
        'cell-spacing': '0',
        width: '100%',
        role: 'presentation',
        class: 'mj-carousel-main'
      }) + '\n      >\n        <tbody>\n          <tr>\n            ' + this.generateControls('previous', this.getAttribute('left-icon')) + '\n            ' + this.generateImages() + '\n            ' + this.generateControls('next', this.getAttribute('right-icon')) + '\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }, {
    key: 'renderFallback',
    value: function renderFallback() {
      var children = this.props.children;

      if (children.length === 0) return '';

      return (0, conditionalTag_1.msoConditionalTag)(this.renderChildren([children[0]], {
        attributes: {
          'border-radius': this.getAttribute('border-radius')
        }
      }));
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      ' + (0, conditionalTag_1.msoConditionalTag)('\n        <div\n          ' + this.htmlAttributes({
        class: 'mj-carousel'
      }) + '\n        >\n          ' + this.generateRadios() + '\n          <div\n            ' + this.htmlAttributes({
        class: 'mj-carousel-content mj-carousel-' + this.carouselId + '-content',
        style: 'carousel.div'
      }) + '\n          >\n            ' + this.generateThumbnails() + '\n            ' + this.generateCarousel() + '\n          </div>\n        </div>\n      ', true) + '\n      ' + this.renderFallback() + '\n    ';
    }
  }]);
  return MjCarousel;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  align: 'enum(left,center,right)',
  'border-radius': 'unit(px,%)',
  'icon-width': 'unit(px,%)',
  'left-icon': 'string',
  padding: 'unit(px,%){1,4}',
  'padding-top': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'right-icon': 'string',
  thumbnails: 'enum(visible,hidden)',
  'tb-border': 'string',
  'tb-border-radius': 'unit(px,%)',
  'tb-hover-border-color': 'color',
  'tb-selected-border-color': 'color',
  'tb-width': 'unit(px,%)'
}, _class.defaultAttributes = {
  align: 'center',
  'border-radius': '6px',
  'icon-width': '44px',
  'left-icon': 'http://i.imgur.com/xTh3hln.png',
  'right-icon': 'http://i.imgur.com/os7o9kz.png',
  thumbnails: 'visible',
  'tb-border': '2px solid transparent',
  'tb-border-radius': '6px',
  'tb-hover-border-color': '#fead0d',
  'tb-selected-border-color': '#ccc'
}, _temp);
exports.default = MjCarousel;
module.exports = exports['default'];
});

unwrapExports(Carousel);

var CarouselImage = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjCarouselImage = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjCarouselImage, _BodyComponent);

  function MjCarouselImage() {
    (0, _classCallCheck3.default)(this, MjCarouselImage);
    return (0, _possibleConstructorReturn3.default)(this, (MjCarouselImage.__proto__ || (0, _getPrototypeOf2.default)(MjCarouselImage)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjCarouselImage, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        images: {
          img: {
            'border-radius': this.getAttribute('border-radius'),
            display: 'block',
            width: this.context.containerWidth,
            'max-width': '100%',
            height: 'auto'
          },
          firstImageDiv: {},
          otherImageDiv: {
            display: 'none',
            'mso-hide': 'all'
          }
        },
        radio: {
          input: {
            display: 'none',
            'mso-hide': 'all'
          }
        },
        thumbnails: {
          a: {
            border: this.getAttribute('tb-border'),
            'border-radius': this.getAttribute('tb-border-radius'),
            display: 'inline-block',
            overflow: 'hidden',
            width: this.getAttribute('tb-width')
          },
          img: {
            display: 'block',
            width: '100%',
            height: 'auto'
          }
        }
      };
    }
  }, {
    key: 'renderThumbnail',
    value: function renderThumbnail() {
      var _attributes = this.attributes,
          carouselId = _attributes.carouselId,
          src = _attributes.src,
          alt = _attributes.alt,
          width = _attributes['tb-width'],
          target = _attributes.target;

      var imgIndex = this.props.index + 1;
      var cssClass = (0, lib$1.suffixCssClasses)(this.getAttribute('css-class'), 'thumbnail');

      return '\n      <a\n        ' + this.htmlAttributes({
        style: 'thumbnails.a',
        href: '#' + imgIndex,
        target: target,
        class: 'mj-carousel-thumbnail mj-carousel-' + carouselId + '-thumbnail mj-carousel-' + carouselId + '-thumbnail-' + imgIndex + ' ' + cssClass
      }) + '\n      >\n        <label ' + this.htmlAttributes({
        for: 'mj-carousel-' + carouselId + '-radio-' + imgIndex
      }) + '>\n          <img\n            ' + this.htmlAttributes({
        style: 'thumbnails.img',
        src: this.getAttribute('thumbnails-src') || src,
        alt: alt,
        width: parseInt(width, 10)
      }) + '\n          />\n        </label>\n      </a>\n    ';
    }
  }, {
    key: 'renderRadio',
    value: function renderRadio() {
      var index = this.props.index;

      var carouselId = this.getAttribute('carouselId');

      return '\n      <input\n        ' + this.htmlAttributes({
        class: 'mj-carousel-radio mj-carousel-' + carouselId + '-radio mj-carousel-' + carouselId + '-radio-' + (index + 1),
        checked: index === 0 ? 'checked' : null,
        type: 'radio',
        name: 'mj-carousel-radio-' + carouselId,
        id: 'mj-carousel-' + carouselId + '-radio-' + (index + 1),
        style: 'radio.input'
      }) + '\n      />\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var _attributes2 = this.attributes,
          src = _attributes2.src,
          alt = _attributes2.alt,
          href = _attributes2.href,
          rel = _attributes2.rel,
          title = _attributes2.title;
      var index = this.props.index;


      var image = '\n      <img\n        ' + this.htmlAttributes({
        title: title,
        src: src,
        alt: alt,
        style: 'images.img',
        width: parseInt(this.context.containerWidth, 10),
        border: '0'
      }) + ' />\n    ';

      var cssClass = this.getAttribute('css-class') || '';

      return '\n      <div\n        ' + this.htmlAttributes({
        class: 'mj-carousel-image mj-carousel-image-' + (index + 1) + ' ' + cssClass,
        style: index === 0 ? 'images.firstImageDiv' : 'images.otherImageDiv'
      }) + '\n      >\n        ' + (href ? '<a href=' + href + ' rel=' + rel + ' target="_blank">' + image + '</a>' : image) + '\n      </div>\n    ';
    }
  }]);
  return MjCarouselImage;
}(lib$1.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  alt: 'string',
  href: 'string',
  rel: 'string',
  title: 'string',
  src: 'string',
  'thumbnails-src': 'string',
  'border-radius': 'unit(px,%){1,4}',
  'tb-border': 'string',
  'tb-border-radius': 'unit(px,%){1,4}'
}, _class.defaultAttributes = {
  target: '_blank'
}, _temp);
exports.default = MjCarouselImage;
module.exports = exports['default'];
});

unwrapExports(CarouselImage);

var lib$4 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.CarouselImage = exports.Carousel = undefined;



var _Carousel3 = _interopRequireDefault(Carousel);



var _CarouselImage3 = _interopRequireDefault(CarouselImage);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Carousel = _Carousel3.default;
exports.CarouselImage = _CarouselImage3.default;
});

unwrapExports(lib$4);
var lib_1$4 = lib$4.CarouselImage;
var lib_2$4 = lib$4.Carousel;

var Accordion = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _defineProperty3 = _interopRequireDefault(defineProperty);



var _extends4 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp2;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjAccordion = (_temp2 = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjAccordion, _BodyComponent);

  function MjAccordion() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MjAccordion);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MjAccordion.__proto__ || (0, _getPrototypeOf2.default)(MjAccordion)).call.apply(_ref, [this].concat(args))), _this), _this.headStyle = function () {
      return '\n      noinput.mj-accordion-checkbox { display:block!important; }\n\n      @media yahoo, only screen and (min-width:0) {\n        .mj-accordion-element { display:block; }\n        input.mj-accordion-checkbox, .mj-accordion-less { display:none!important; }\n        input.mj-accordion-checkbox + * .mj-accordion-title { cursor:pointer; touch-action:manipulation; -webkit-user-select:none; -moz-user-select:none; user-select:none; }\n        input.mj-accordion-checkbox + * .mj-accordion-content { overflow:hidden; display:none; }\n        input.mj-accordion-checkbox + * .mj-accordion-more { display:block!important; }\n        input.mj-accordion-checkbox:checked + * .mj-accordion-content { display:block; }\n        input.mj-accordion-checkbox:checked + * .mj-accordion-more { display:none!important; }\n        input.mj-accordion-checkbox:checked + * .mj-accordion-less { display:block!important; }\n      }\n\n      @goodbye { @gmail }\n    ';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MjAccordion, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        table: {
          width: '100%',
          'border-collapse': 'collapse',
          border: this.getAttribute('border'),
          'border-bottom': 'none',
          'font-family': this.getAttribute('font-family')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var childrenAttr = ['border', 'icon-align', 'icon-width', 'icon-height', 'icon-position', 'icon-wrapped-url', 'icon-wrapped-alt', 'icon-unwrapped-url', 'icon-unwrapped-alt'].reduce(function (res, val) {
        return (0, _extends4.default)({}, res, (0, _defineProperty3.default)({}, val, _this2.getAttribute(val)));
      }, {});

      return '\n      <table\n        ' + this.htmlAttributes({
        'cell-spacing': '0',
        'cell-padding': '0',
        class: 'mj-accordion',
        style: 'table'
      }) + '\n      >\n        <tbody>\n          ' + this.renderChildren(this.props.children, {
        attributes: childrenAttr
      }) + '\n        </tbody>\n      </table>\n    ';
    }
  }]);
  return MjAccordion;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  'container-background-color': 'color',
  border: 'string',
  'font-family': 'string',
  'icon-align': 'enum(top,middle,bottom)',
  'icon-width': 'unit(px,%)',
  'icon-height': 'unit(px,%)',
  'icon-wrapped-url': 'string',
  'icon-wrapped-alt': 'string',
  'icon-unwrapped-url': 'string',
  'icon-unwrapped-alt': 'string',
  'icon-position': 'enum(left,right)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}'
}, _class.defaultAttributes = {
  border: '2px solid black',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'icon-align': 'middle',
  'icon-wrapped-url': 'http://i.imgur.com/bIXv1bk.png',
  'icon-wrapped-alt': '+',
  'icon-unwrapped-url': 'http://i.imgur.com/w4uTygT.png',
  'icon-unwrapped-alt': '-',
  'icon-position': 'right',
  'icon-height': '32px',
  'icon-width': '32px',
  padding: '10px 25px'
}, _temp2);
exports.default = MjAccordion;
module.exports = exports['default'];
});

unwrapExports(Accordion);

var AccordionText = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjAccordionText = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjAccordionText, _BodyComponent);

  function MjAccordionText() {
    (0, _classCallCheck3.default)(this, MjAccordionText);
    return (0, _possibleConstructorReturn3.default)(this, (MjAccordionText.__proto__ || (0, _getPrototypeOf2.default)(MjAccordionText)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjAccordionText, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        td: {
          background: this.getAttribute('background-color'),
          'font-size': this.getAttribute('font-size'),
          'font-family': this.getAttribute('font-family'),
          color: this.getAttribute('color'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-top': this.getAttribute('padding-top'),
          padding: this.getAttribute('padding')
        },
        table: {
          width: '100%',
          'border-bottom': this.getAttribute('border')
        }
      };
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return '\n      <td\n        ' + this.htmlAttributes({
        class: this.getAttribute('css-class'),
        style: 'td'
      }) + '\n      >\n        ' + this.getContent() + '\n      </td>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <div\n        ' + this.htmlAttributes({
        class: 'mj-accordion-content'
      }) + '\n      >\n        <table\n          ' + this.htmlAttributes({
        'cell-spacing': '0',
        'cell-padding': '0',
        style: 'table'
      }) + '\n        >\n          <tbody>\n            <tr>\n              ' + this.renderContent() + '\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ';
    }
  }]);
  return MjAccordionText;
}(lib$1.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  'background-color': 'color',
  'font-size': 'unit(px)',
  'font-family': 'string',
  color: 'color',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}'
}, _class.defaultAttributes = {
  'font-size': '13px',
  padding: '16px'
}, _temp);
exports.default = MjAccordionText;
module.exports = exports['default'];
});

unwrapExports(AccordionText);

var AccordionTitle = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;





var _conditionalTag2 = _interopRequireDefault(conditionalTag_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjAccordionTitle = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjAccordionTitle, _BodyComponent);

  function MjAccordionTitle() {
    (0, _classCallCheck3.default)(this, MjAccordionTitle);
    return (0, _possibleConstructorReturn3.default)(this, (MjAccordionTitle.__proto__ || (0, _getPrototypeOf2.default)(MjAccordionTitle)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjAccordionTitle, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        td: {
          width: '100%',
          'background-color': this.getAttribute('background-color'),
          color: this.getAttribute('color'),
          'font-size': this.getAttribute('font-size'),
          'font-family': this.getAttribute('font-family'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-top': this.getAttribute('padding-top'),
          padding: this.getAttribute('padding')
        },
        table: {
          width: '100%',
          'border-bottom': this.getAttribute('border')
        },
        td2: {
          padding: '16px',
          background: this.getAttribute('background-color'),
          'vertical-align': this.getAttribute('icon-align')
        },
        img: {
          display: 'none',
          width: this.getAttribute('icon-width'),
          height: this.getAttribute('icon-height')
        }
      };
    }
  }, {
    key: 'renderTitle',
    value: function renderTitle() {
      return '\n      <td\n        ' + this.htmlAttributes({
        class: this.getAttribute('css-class'),
        style: 'td'
      }) + '\n      >\n        ' + this.getContent() + '\n      </td>\n    ';
    }
  }, {
    key: 'renderIcons',
    value: function renderIcons() {
      return (0, _conditionalTag2.default)('\n      <td\n        ' + this.htmlAttributes({
        class: 'mj-accordion-ico',
        style: 'td2'
      }) + '\n      >\n        <img\n          ' + this.htmlAttributes({
        src: this.getAttribute('icon-wrapped-url'),
        alt: this.getAttribute('icon-wrapped-alt'),
        class: 'mj-accordion-more',
        style: 'img'
      }) + '\n        />\n        <img\n          ' + this.htmlAttributes({
        src: this.getAttribute('icon-unwrapped-url'),
        alt: this.getAttribute('icon-unwrapped-alt'),
        class: 'mj-accordion-less',
        style: 'img'
      }) + '\n        />\n      </td>\n    ', true);
    }
  }, {
    key: 'render',
    value: function render() {
      var contentElements = [this.renderTitle(), this.renderIcons()];
      var content = (this.getAttribute('icon-position') === 'right' ? contentElements : contentElements.reverse()).join('\n');

      return '\n      <div ' + this.htmlAttributes({ class: 'mj-accordion-title' }) + '>\n        <table\n          ' + this.htmlAttributes({
        'cell-spacing': '0',
        'cell-padding': '0',
        style: 'table'
      }) + '\n        >\n          <tbody>\n            <tr>\n              ' + content + '\n            </tr>\n          </tbody>\n        </table>\n      </div>\n    ';
    }
  }]);
  return MjAccordionTitle;
}(lib$1.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  'background-color': 'color',
  color: 'color',
  'font-size': 'unit(px)',
  'font-family': 'string',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}'
}, _class.defaultAttributes = {
  'font-size': '13px',
  padding: '16px'
}, _temp);
exports.default = MjAccordionTitle;
module.exports = exports['default'];
});

unwrapExports(AccordionTitle);

var AccordionElement = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _defineProperty3 = _interopRequireDefault(defineProperty);



var _extends4 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;







var _conditionalTag2 = _interopRequireDefault(conditionalTag_1);



var _AccordionText2 = _interopRequireDefault(AccordionText);



var _AccordionTitle2 = _interopRequireDefault(AccordionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjAccordionElement = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjAccordionElement, _BodyComponent);

  function MjAccordionElement() {
    (0, _classCallCheck3.default)(this, MjAccordionElement);
    return (0, _possibleConstructorReturn3.default)(this, (MjAccordionElement.__proto__ || (0, _getPrototypeOf2.default)(MjAccordionElement)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjAccordionElement, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        td: {
          padding: '0px',
          'background-color': this.getAttribute('background-color')
        },
        label: {
          'font-size': '13px',
          'font-family': this.getAttribute('font-family')
        },
        input: {
          display: 'none'
        }
      };
    }
  }, {
    key: 'handleMissingChildren',
    value: function handleMissingChildren() {
      var _this2 = this;

      var children = this.props.children;

      var childrenAttr = ['border', 'icon-align', 'icon-width', 'icon-height', 'icon-position', 'icon-wrapped-url', 'icon-wrapped-alt', 'icon-unwrapped-url', 'icon-unwrapped-alt'].reduce(function (res, val) {
        return (0, _extends4.default)({}, res, (0, _defineProperty3.default)({}, val, _this2.getAttribute(val)));
      }, {});

      var result = [];

      if (!(0, lodash.find)(children, { tagName: 'mj-accordion-title' })) {
        result.push(new _AccordionTitle2.default({
          attributes: childrenAttr,
          context: this.getChildContext()
        }).render());
      }

      result.push(this.renderChildren(children, { attributes: childrenAttr }));

      if (!(0, lodash.find)(children, { tagName: 'mj-accordion-text' })) {
        result.push(new _AccordionText2.default({
          attributes: childrenAttr,
          context: this.getChildContext()
        }).render());
      }

      return result.join('\n');
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <tr\n        ' + this.htmlAttributes({
        class: this.getAttribute('css-class')
      }) + '\n      >\n        <td ' + this.htmlAttributes({ style: 'td' }) + '>\n          <label\n            ' + this.htmlAttributes({
        class: 'mj-accordion-element',
        style: 'label'
      }) + '\n          >\n            ' + (0, _conditionalTag2.default)('\n              <input\n                ' + this.htmlAttributes({
        class: 'mj-accordion-checkbox',
        type: 'checkbox',
        style: 'input'
      }) + '\n              />\n            ', true) + '\n            <div>\n              ' + this.handleMissingChildren() + '\n            </div>\n          </label>\n        </td>\n      </tr>\n    ';
    }
  }]);
  return MjAccordionElement;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  'background-color': 'color',
  'font-family': 'string',
  'icon-align': 'enum(top,middle,bottom)',
  'icon-width': 'unit(px,%)',
  'icon-height': 'unit(px,%)',
  'icon-wrapped-url': 'string',
  'icon-wrapped-alt': 'string',
  'icon-unwrapped-url': 'string',
  'icon-unwrapped-alt': 'string',
  'icon-position': 'enum(left,right)'
}, _class.defaultAttributes = {
  title: {
    img: {
      width: '32px',
      height: '32px'
    }
  }
}, _temp);
exports.default = MjAccordionElement;
module.exports = exports['default'];
});

unwrapExports(AccordionElement);

var lib$5 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AccordionTitle = exports.AccordionText = exports.AccordionElement = exports.Accordion = undefined;



var _Accordion3 = _interopRequireDefault(Accordion);



var _AccordionElement3 = _interopRequireDefault(AccordionElement);



var _AccordionText3 = _interopRequireDefault(AccordionText);



var _AccordionTitle3 = _interopRequireDefault(AccordionTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Accordion = _Accordion3.default;
exports.AccordionElement = _AccordionElement3.default;
exports.AccordionText = _AccordionText3.default;
exports.AccordionTitle = _AccordionTitle3.default;
});

unwrapExports(lib$5);
var lib_1$5 = lib$5.AccordionTitle;
var lib_2$5 = lib$5.AccordionText;
var lib_3$2 = lib$5.AccordionElement;
var lib_4$2 = lib$5.Accordion;

var lib$6 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjBody = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjBody, _BodyComponent);

  function MjBody() {
    (0, _classCallCheck3.default)(this, MjBody);
    return (0, _possibleConstructorReturn3.default)(this, (MjBody.__proto__ || (0, _getPrototypeOf2.default)(MjBody)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjBody, [{
    key: 'getChildContext',
    value: function getChildContext() {
      return (0, _extends3.default)({}, this.context, {
        containerWidth: this.getAttribute('width')
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      return {
        div: {
          'background-color': this.getAttribute('background-color')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var setBackgroundColor = this.context.setBackgroundColor;

      setBackgroundColor(this.getAttribute('background-color'));

      return '\n      <div\n        ' + this.htmlAttributes({
        class: this.getAttribute('css-class'),
        style: 'div'
      }) + '\n      >\n        ' + this.renderChildren() + '\n      </div>\n    ';
    }
  }]);
  return MjBody;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  width: 'unit(px,%)',
  'background-color': 'color'
}, _class.defaultAttributes = {
  width: '600px'
}, _temp);
exports.default = MjBody;
module.exports = exports['default'];
});

unwrapExports(lib$6);

var lib$7 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjHead = function (_HeadComponent) {
  (0, _inherits3.default)(MjHead, _HeadComponent);

  function MjHead() {
    (0, _classCallCheck3.default)(this, MjHead);
    return (0, _possibleConstructorReturn3.default)(this, (MjHead.__proto__ || (0, _getPrototypeOf2.default)(MjHead)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjHead, [{
    key: 'handler',
    value: function handler() {
      return this.handlerChildren();
    }
  }]);
  return MjHead;
}(lib$1.HeadComponent);

exports.default = MjHead;
module.exports = exports['default'];
});

unwrapExports(lib$7);

var lib$8 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _defineProperty3 = _interopRequireDefault(defineProperty);



var _extends4 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);



var _forEach2 = _interopRequireDefault(forEach);



var _omit2 = _interopRequireDefault(omit);



var _reduce2 = _interopRequireDefault(reduce);



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjAttributes = function (_HeadComponent) {
  (0, _inherits3.default)(MjAttributes, _HeadComponent);

  function MjAttributes() {
    (0, _classCallCheck3.default)(this, MjAttributes);
    return (0, _possibleConstructorReturn3.default)(this, (MjAttributes.__proto__ || (0, _getPrototypeOf2.default)(MjAttributes)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjAttributes, [{
    key: 'handler',
    value: function handler() {
      var add = this.context.add;
      var children = this.props.children;


      (0, _forEach2.default)(children, function (child) {
        var tagName = child.tagName,
            attributes = child.attributes,
            children = child.children;


        if (tagName === 'mj-class') {
          add('classes', attributes.name, (0, _omit2.default)(attributes, ['name']));

          add('classesDefault', attributes.name, (0, _reduce2.default)(children, function (acc, _ref) {
            var tagName = _ref.tagName,
                attributes = _ref.attributes;
            return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, tagName, attributes));
          }, {}));
        } else {
          add('defaultAttributes', tagName, attributes);
        }
      });
    }
  }]);
  return MjAttributes;
}(lib$1.HeadComponent);

exports.default = MjAttributes;
module.exports = exports['default'];
});

unwrapExports(lib$8);

var lib$9 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjBreakpoint = (_temp = _class = function (_HeadComponent) {
  (0, _inherits3.default)(MjBreakpoint, _HeadComponent);

  function MjBreakpoint() {
    (0, _classCallCheck3.default)(this, MjBreakpoint);
    return (0, _possibleConstructorReturn3.default)(this, (MjBreakpoint.__proto__ || (0, _getPrototypeOf2.default)(MjBreakpoint)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjBreakpoint, [{
    key: 'handler',
    value: function handler() {
      var add = this.context.add;


      add('breakpoint', this.getAttribute('width'));
    }
  }]);
  return MjBreakpoint;
}(lib$1.HeadComponent), _class.endingTag = true, _class.allowedAttributes = {
  width: 'unit(px)'
}, _temp);
exports.default = MjBreakpoint;
module.exports = exports['default'];
});

unwrapExports(lib$9);

var lib$a = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjFont = (_temp = _class = function (_HeadComponent) {
  (0, _inherits3.default)(MjFont, _HeadComponent);

  function MjFont() {
    (0, _classCallCheck3.default)(this, MjFont);
    return (0, _possibleConstructorReturn3.default)(this, (MjFont.__proto__ || (0, _getPrototypeOf2.default)(MjFont)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjFont, [{
    key: 'handler',
    value: function handler() {
      var add = this.context.add;


      add('fonts', this.getAttribute('name'), this.getAttribute('href'));
    }
  }]);
  return MjFont;
}(lib$1.HeadComponent), _class.tagOmission = true, _class.allowedAttributes = {
  name: 'string',
  href: 'string'
}, _temp);
exports.default = MjFont;
module.exports = exports['default'];
});

unwrapExports(lib$a);

var lib$b = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjPreview = (_temp = _class = function (_HeadComponent) {
  (0, _inherits3.default)(MjPreview, _HeadComponent);

  function MjPreview() {
    (0, _classCallCheck3.default)(this, MjPreview);
    return (0, _possibleConstructorReturn3.default)(this, (MjPreview.__proto__ || (0, _getPrototypeOf2.default)(MjPreview)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjPreview, [{
    key: 'handler',
    value: function handler() {
      var add = this.context.add;


      add('preview', this.getContent());
    }
  }]);
  return MjPreview;
}(lib$1.HeadComponent), _class.endingTag = true, _temp);
exports.default = MjPreview;
module.exports = exports['default'];
});

unwrapExports(lib$b);

var lib$c = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjStyle = (_temp = _class = function (_HeadComponent) {
  (0, _inherits3.default)(MjStyle, _HeadComponent);

  function MjStyle() {
    (0, _classCallCheck3.default)(this, MjStyle);
    return (0, _possibleConstructorReturn3.default)(this, (MjStyle.__proto__ || (0, _getPrototypeOf2.default)(MjStyle)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjStyle, [{
    key: 'handler',
    value: function handler() {
      var add = this.context.add;


      add(this.getAttribute('inline') === 'inline' ? 'inlineStyle' : 'style', this.getContent());
    }
  }]);
  return MjStyle;
}(lib$1.HeadComponent), _class.endingTag = true, _class.allowedAttributes = {
  inline: 'string'
}, _temp);
exports.default = MjStyle;
module.exports = exports['default'];
});

unwrapExports(lib$c);

var lib$d = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjTitle = (_temp = _class = function (_HeadComponent) {
  (0, _inherits3.default)(MjTitle, _HeadComponent);

  function MjTitle() {
    (0, _classCallCheck3.default)(this, MjTitle);
    return (0, _possibleConstructorReturn3.default)(this, (MjTitle.__proto__ || (0, _getPrototypeOf2.default)(MjTitle)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjTitle, [{
    key: 'handler',
    value: function handler() {
      var add = this.context.add;


      add('title', this.getContent());
    }
  }]);
  return MjTitle;
}(lib$1.HeadComponent), _class.endingTag = true, _temp);
exports.default = MjTitle;
module.exports = exports['default'];
});

unwrapExports(lib$d);

var widthParser_1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = widthParser;
var unitRegex = /[\d.,]*(\D*)$/;

function widthParser(width) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _options$parseFloatTo = options.parseFloatToInt,
      parseFloatToInt = _options$parseFloatTo === undefined ? true : _options$parseFloatTo;


  var widthUnit = unitRegex.exec(width.toString())[1];
  var unitParsers = {
    default: parseInt,
    px: parseInt,
    '%': parseFloatToInt ? parseInt : parseFloat
  };
  var parser = unitParsers[widthUnit] || unitParsers.default;

  return {
    parsedWidth: parser(width),
    unit: widthUnit || 'px'
  };
}
module.exports = exports['default'];
});

unwrapExports(widthParser_1);

var lib$e = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp2;







var _widthParser3 = _interopRequireDefault(widthParser_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeBackgroundString = (0, fp.flow)((0, fp.filter)(fp.identity), (0, fp.join)(' '));

var MjHero = (_temp2 = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjHero, _BodyComponent);

  function MjHero() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MjHero);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MjHero.__proto__ || (0, _getPrototypeOf2.default)(MjHero)).call.apply(_ref, [this].concat(args))), _this), _this.getBackground = function () {
      return makeBackgroundString([_this.getAttribute('background-color')].concat((0, _toConsumableArray3.default)(_this.getAttribute('background-url') ? ['url(' + _this.getAttribute('background-url') + ')', 'no-repeat', _this.getAttribute('background-position') + ' / cover'] : [])));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MjHero, [{
    key: 'getChildContext',
    value: function getChildContext() {
      // Refactor -- removePaddingFor(width, ['padding', 'inner-padding'])
      var containerWidth = this.context.containerWidth;

      var paddingSize = this.getShorthandAttrValue('padding', 'left') + this.getShorthandAttrValue('padding', 'right');

      var currentContainerWidth = parseFloat(containerWidth) + 'px';

      var _widthParser = (0, _widthParser3.default)(currentContainerWidth, {
        parseFloatToInt: false
      }),
          unit = _widthParser.unit,
          parsedWidth = _widthParser.parsedWidth;

      if (unit === '%') {
        currentContainerWidth = parseFloat(containerWidth) * parsedWidth / 100 - paddingSize + 'px';
      } else {
        currentContainerWidth = parsedWidth - paddingSize + 'px';
      }

      return (0, _extends3.default)({}, this.context, {
        containerWidth: currentContainerWidth
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var containerWidth = this.context.containerWidth;

      var backgroundRatio = Math.round(parseInt(this.getAttribute('background-height'), 10) / parseInt(this.getAttribute('background-width'), 10) * 100);

      return {
        div: {
          margin: '0 auto',
          'max-width': containerWidth
        },
        table: {
          width: '100%'
        },
        tr: {
          'vertical-align': 'top'
        },
        'td-fluid': {
          width: '0.01%',
          'padding-bottom': backgroundRatio + '%',
          'mso-padding-bottom-alt': '0'
        },
        hero: {
          background: this.getBackground(),
          'background-position': this.getAttribute('background-position'),
          'background-repeat': 'no-repeat',
          padding: this.getAttribute('padding'),
          'padding-top': this.getAttribute('padding-top'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'vertical-align': this.getAttribute('vertical-align')
        },
        'outlook-table': {
          width: containerWidth
        },
        'outlook-td': {
          'line-height': 0,
          'font-size': 0,
          'mso-line-height-rule': 'exactly'
        },
        'outlook-inner-table': {
          width: containerWidth
        },
        'outlook-image': {
          border: '0',
          height: this.getAttribute('background-height'),
          'mso-position-horizontal': 'center',
          position: 'absolute',
          top: 0,
          width: this.getAttribute('background-width'),
          'z-index': '-3'
        },
        'outlook-inner-td': {
          'background-color': this.getAttribute('inner-background-color'),
          padding: this.getAttribute('inner-padding'),
          'padding-top': this.getAttribute('inner-padding-top'),
          'padding-left': this.getAttribute('inner-padding-left'),
          'padding-right': this.getAttribute('inner-padding-right'),
          'padding-bottom': this.getAttribute('inner-padding-bottom')
        },
        'inner-table': {
          width: '100%',
          margin: '0px'
        },
        'inner-div': {
          'background-color': this.getAttribute('inner-background-color'),
          float: this.getAttribute('align'),
          margin: '0px auto',
          width: this.getAttribute('width')
        }
      };
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      var containerWidth = this.context.containerWidth;
      var children = this.props.children;


      return '\n      <!--[if mso | IE]>\n        <table\n          ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        style: 'outlook-inner-table',
        width: containerWidth.replace('px', '')
      }) + '\n        >\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'outlook-inner-td' }) + '>\n      <![endif]-->\n      <div\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        class: 'mj-hero-content',
        style: 'inner-div'
      }) + '\n      >\n        <table\n          ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'inner-table'
      }) + '\n        >\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'inner-td' }) + ' >\n              <table\n                ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'inner-table'
      }) + '\n              >\n                ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return (// eslint-disable-line no-confusing-arrow
            component.constructor.isRawElement() ? component.render() : '\n                    <tr>\n                      <td\n                        ' + component.htmlAttributes({
              align: component.getAttribute('align'),
              background: component.getAttribute('container-background-color'),
              class: component.getAttribute('css-class'),
              style: {
                background: component.getAttribute('container-background-color'),
                'font-size': '0px',
                padding: component.getAttribute('padding'),
                'padding-top': component.getAttribute('padding-top'),
                'padding-right': component.getAttribute('padding-right'),
                'padding-bottom': component.getAttribute('padding-bottom'),
                'padding-left': component.getAttribute('padding-left'),
                'word-break': 'break-word'
              }
            }) + '\n                      >\n                        ' + component.render() + '\n                      </td>\n                    </tr>\n                  '
          );
        }
      }) + '\n              </table>\n            </td>\n          </tr>\n        </table>\n      </div>\n      <!--[if mso | IE]>\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderMode',
    value: function renderMode() {
      var commonAttributes = {
        background: this.getAttribute('background-url'),
        style: 'hero'

        /* eslint-disable no-alert, no-case-declarations */
      };switch (this.getAttribute('mode')) {
        case 'fluid-height':
          var magicTd = this.htmlAttributes({ style: 'td-fluid' });

          return '\n          <td ' + magicTd + ' />\n          <td ' + this.htmlAttributes((0, _extends3.default)({}, commonAttributes)) + '>\n            ' + this.renderContent() + '\n          </td>\n          <td ' + magicTd + ' />\n        ';
        case 'fixed-height':
        default:
          var height = parseInt(this.getAttribute('height'), 10) - this.getShorthandAttrValue('padding', 'top') - this.getShorthandAttrValue('padding', 'bottom');

          return '\n          <td\n            ' + this.htmlAttributes((0, _extends3.default)({}, commonAttributes, {
            height: height
          })) + '\n          >\n            ' + this.renderContent() + '\n          </td>\n        ';
      }
      /* eslint-enable no-alert, no-case-declarations */
    }
  }, {
    key: 'render',
    value: function render() {
      var containerWidth = this.context.containerWidth;


      return '\n      <!--[if mso | IE]>\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'outlook-table',
        width: parseInt(containerWidth, 10)
      }) + '\n        >\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'outlook-td' }) + '>\n              <v:image\n                ' + this.htmlAttributes({
        style: 'outlook-image',
        src: this.getAttribute('background-url'),
        'xmlns:v': 'urn:schemas-microsoft-com:vml'
      }) + '\n              />\n      <![endif]-->\n      <div\n        ' + this.htmlAttributes({
        align: this.getAttribute('align'),
        class: this.getAttribute('css-class'),
        style: 'div'
      }) + '\n      >\n        <table\n          ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n        >\n          <tr\n            ' + this.htmlAttributes({
        style: 'tr'
      }) + '\n          >\n            ' + this.renderMode() + '\n          </tr>\n      </table>\n    </div>\n    <!--[if mso | IE]>\n          </td>\n        </tr>\n      </table>\n    <![endif]-->\n    ';
    }
  }]);
  return MjHero;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  mode: 'string',
  height: 'unit(px,%)',
  'background-url': 'string',
  'background-width': 'unit(px,%)',
  'background-height': 'unit(px,%)',
  'background-position': 'string',
  'container-background-color': 'color',
  'inner-background-color': 'color',
  'inner-padding': 'unit(px,%){1,4}',
  'inner-padding-top': 'unit(px,%)',
  'inner-padding-left': 'unit(px,%)',
  'inner-padding-right': 'unit(px,%)',
  'inner-padding-bottom': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  'background-color': 'color',
  'vertical-align': 'enum(top,bottom,middle)'
}, _class.defaultAttributes = {
  mode: 'fixed-height',
  height: '0px',
  'background-url': null,
  'background-width': '0px',
  'background-height': '0px',
  'background-position': 'center center',
  padding: '0px',
  'padding-bottom': null,
  'padding-left': null,
  'padding-right': null,
  'padding-top': null,
  'background-color': '#ffffff',
  'vertical-align': 'top'
}, _temp2);
exports.default = MjHero;
module.exports = exports['default'];
});

unwrapExports(lib$e);

var lib$f = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjButton = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjButton, _BodyComponent);

  function MjButton() {
    (0, _classCallCheck3.default)(this, MjButton);
    return (0, _possibleConstructorReturn3.default)(this, (MjButton.__proto__ || (0, _getPrototypeOf2.default)(MjButton)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjButton, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        table: {
          'border-collapse': 'separate',
          width: this.getAttribute('width'),
          'line-height': '100%'
        },
        td: {
          border: this.getAttribute('border'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-left': this.getAttribute('border-left'),
          'border-radius': this.getAttribute('border-radius'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          cursor: 'auto',
          'font-style': this.getAttribute('font-style'),
          height: this.getAttribute('height'),
          padding: this.getAttribute('inner-padding'),
          'text-align': this.getAttribute('text-align'),
          background: this.getAttribute('background-color')
        },
        content: {
          background: this.getAttribute('background-color'),
          color: this.getAttribute('color'),
          'font-family': this.getAttribute('font-family'),
          'font-size': this.getAttribute('font-size'),
          'font-style': this.getAttribute('font-style'),
          'font-weight': this.getAttribute('font-weight'),
          'line-height': this.getAttribute('line-height'),
          Margin: '0',
          'text-decoration': this.getAttribute('text-decoration'),
          'text-transform': this.getAttribute('text-transform')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var tag = this.getAttribute('href') ? 'a' : 'p';

      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n      >\n        <tr>\n          <td\n            ' + this.htmlAttributes({
        align: 'center',
        bgcolor: this.getAttribute('background-color') === 'none' ? undefined : this.getAttribute('background-color'),
        role: 'presentation',
        style: 'td',
        valign: this.getAttribute('vertical-align')
      }) + '\n          >\n            <' + tag + '\n              ' + this.htmlAttributes({
        href: this.getAttribute('href'),
        rel: this.getAttribute('rel'),
        name: this.getAttribute('name'),
        style: 'content',
        target: tag === 'a' ? this.getAttribute('target') : undefined
      }) + '\n            >\n              ' + this.getContent() + '\n            </' + tag + '>\n          </td>\n        </tr>\n      </table>\n    ';
    }
  }]);
  return MjButton;
}(lib$1.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  align: 'enum(left,center,right)',
  'background-color': 'color',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-radius': 'string',
  'border-right': 'string',
  'border-top': 'string',
  border: 'string',
  color: 'color',
  'container-background-color': 'color',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-style': 'string',
  'font-weight': 'string',
  height: 'unit(px,%)',
  href: 'string',
  name: 'string',
  'inner-padding': 'unit(px,%)',
  'line-height': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  rel: 'string',
  target: 'string',
  'text-decoration': 'string',
  'text-transform': 'string',
  'vertical-align': 'enum(top,bottom,middle)',
  'text-align': 'enum(left,right,center)',
  width: 'unit(px,%)'
}, _class.defaultAttributes = {
  align: 'center',
  'background-color': '#414141',
  border: 'none',
  'border-radius': '3px',
  color: '#ffffff',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'font-weight': 'normal',
  'inner-padding': '10px 25px',
  'line-height': '120%',
  padding: '10px 25px',
  target: '_blank',
  'text-decoration': 'none',
  'text-transform': 'none',
  'vertical-align': 'middle'
}, _temp);
exports.default = MjButton;
module.exports = exports['default'];
});

unwrapExports(lib$f);

var lib$g = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;





var _widthParser6 = _interopRequireDefault(widthParser_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjColumn = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjColumn, _BodyComponent);

  function MjColumn() {
    (0, _classCallCheck3.default)(this, MjColumn);
    return (0, _possibleConstructorReturn3.default)(this, (MjColumn.__proto__ || (0, _getPrototypeOf2.default)(MjColumn)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjColumn, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var parentWidth = this.context.containerWidth;
      var nonRawSiblings = this.props.nonRawSiblings;

      var _getBoxWidths = this.getBoxWidths(),
          borders = _getBoxWidths.borders,
          paddings = _getBoxWidths.paddings;

      var allPaddings = paddings + borders;

      var containerWidth = this.getAttribute('width') || parseFloat(parentWidth) / nonRawSiblings + 'px';

      var _widthParser = (0, _widthParser6.default)(containerWidth, {
        parseFloatToInt: false
      }),
          unit = _widthParser.unit,
          parsedWidth = _widthParser.parsedWidth;

      if (unit === '%') {
        containerWidth = parseFloat(parentWidth) * parsedWidth / 100 - allPaddings + 'px';
      } else {
        containerWidth = parsedWidth - allPaddings + 'px';
      }

      return (0, _extends3.default)({}, this.context, {
        containerWidth: containerWidth
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var tableStyle = {
        'background-color': this.getAttribute('background-color'),
        border: this.getAttribute('border'),
        'border-bottom': this.getAttribute('border-bottom'),
        'border-left': this.getAttribute('border-left'),
        'border-radius': this.getAttribute('border-radius'),
        'border-right': this.getAttribute('border-right'),
        'border-top': this.getAttribute('border-top'),
        'vertical-align': this.getAttribute('vertical-align')
      };

      return {
        div: {
          'font-size': '13px',
          'text-align': 'left',
          direction: this.getAttribute('direction'),
          display: 'inline-block',
          'vertical-align': this.getAttribute('vertical-align'),
          width: this.getMobileWidth()
        },
        table: (0, _extends3.default)({}, this.hasGutter() ? {} : tableStyle),
        tdOutlook: {
          'vertical-align': this.getAttribute('vertical-align'),
          width: this.getWidthAsPixel()
        },
        gutter: (0, _extends3.default)({}, tableStyle, {
          padding: this.getAttribute('padding'),
          'padding-top': this.getAttribute('padding-top'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left')
        })
      };
    }
  }, {
    key: 'getMobileWidth',
    value: function getMobileWidth() {
      var _context = this.context,
          nonRawSiblings = _context.nonRawSiblings,
          containerWidth = _context.containerWidth;

      var width = this.getAttribute('width');
      var mobileWidth = this.getAttribute('mobileWidth');

      if (mobileWidth !== 'mobileWidth') {
        return '100%';
      } else if (width === undefined) {
        return parseInt(100 / nonRawSiblings, 10) + '%';
      }

      var _widthParser2 = (0, _widthParser6.default)(width, {
        parseFloatToInt: false
      }),
          unit = _widthParser2.unit,
          parsedWidth = _widthParser2.parsedWidth;

      switch (unit) {
        case '%':
          return width;
        case 'px':
        default:
          return parsedWidth / parseInt(containerWidth, 10) + '%';
      }
    }
  }, {
    key: 'getWidthAsPixel',
    value: function getWidthAsPixel() {
      var containerWidth = this.context.containerWidth;

      var _widthParser3 = (0, _widthParser6.default)(this.getParsedWidth(true), {
        parseFloatToInt: false
      }),
          unit = _widthParser3.unit,
          parsedWidth = _widthParser3.parsedWidth;

      if (unit === '%') {
        return parseFloat(containerWidth) * parsedWidth / 100 + 'px';
      }
      return parsedWidth + 'px';
    }
  }, {
    key: 'getParsedWidth',
    value: function getParsedWidth(toString) {
      var nonRawSiblings = this.props.nonRawSiblings;


      var width = this.getAttribute('width') || 100 / nonRawSiblings + '%';

      var _widthParser4 = (0, _widthParser6.default)(width, {
        parseFloatToInt: false
      }),
          unit = _widthParser4.unit,
          parsedWidth = _widthParser4.parsedWidth;

      if (toString) {
        return '' + parsedWidth + unit;
      }

      return {
        unit: unit,
        parsedWidth: parsedWidth
      };
    }
  }, {
    key: 'getColumnClass',
    value: function getColumnClass() {
      var addMediaQuery = this.context.addMediaQuery;


      var className = '';

      var _getParsedWidth = this.getParsedWidth(),
          parsedWidth = _getParsedWidth.parsedWidth,
          unit = _getParsedWidth.unit;

      switch (unit) {
        case '%':
          className = 'mj-column-per-' + parseInt(parsedWidth, 10);
          break;

        case 'px':
        default:
          className = 'mj-column-px-' + parseInt(parsedWidth, 10);
          break;
      }

      // Add className to media queries
      addMediaQuery(className, {
        parsedWidth: parsedWidth,
        unit: unit
      });

      return className;
    }
  }, {
    key: 'hasGutter',
    value: function hasGutter() {
      var _this2 = this;

      return ['padding', 'padding-bottom', 'padding-left', 'padding-right', 'padding-top'].some(function (attr) {
        return _this2.getAttribute(attr) != null;
      });
    }
  }, {
    key: 'renderGutter',
    value: function renderGutter() {
      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        width: '100%'
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td ' + this.htmlAttributes({ style: 'gutter' }) + '>\n              ' + this.renderColumn() + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }, {
    key: 'renderColumn',
    value: function renderColumn() {
      var children = this.props.children;


      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table',
        width: '100%'
      }) + '\n      >\n        ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return (// eslint-disable-line no-confusing-arrow
            component.constructor.isRawElement() ? component.render() : '\n            <tr>\n              <td\n                ' + component.htmlAttributes({
              align: component.getAttribute('align'),
              'vertical-align': component.getAttribute('vertical-align'),
              class: component.getAttribute('css-class'),
              style: {
                background: component.getAttribute('container-background-color'),
                'font-size': '0px',
                padding: component.getAttribute('padding'),
                'padding-top': component.getAttribute('padding-top'),
                'padding-right': component.getAttribute('padding-right'),
                'padding-bottom': component.getAttribute('padding-bottom'),
                'padding-left': component.getAttribute('padding-left'),
                'word-break': 'break-word'
              }
            }) + '\n              >\n                ' + component.render() + '\n              </td>\n            </tr>\n          '
          );
        }
      }) + '\n      </table>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var classesName = this.getColumnClass() + ' outlook-group-fix';

      if (this.getAttribute('css-class')) {
        classesName += ' ' + this.getAttribute('css-class');
      }

      return '\n      <div\n        ' + this.htmlAttributes({
        class: classesName,
        style: 'div'
      }) + '\n      >\n        ' + (this.hasGutter() ? this.renderGutter() : this.renderColumn()) + '\n      </div>\n    ';
    }
  }]);
  return MjColumn;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  'background-color': 'color',
  border: 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-radius': 'unit(px,%)',
  'border-right': 'string',
  'border-top': 'string',
  direction: 'enum(ltr,rtl)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'vertical-align': 'enum(top,bottom,middle)',
  width: 'unit(px,%)'
}, _class.defaultAttributes = {
  direction: 'ltr',
  'vertical-align': 'top'
}, _temp);
exports.default = MjColumn;
module.exports = exports['default'];
});

unwrapExports(lib$g);

var lib$h = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;





var _widthParser3 = _interopRequireDefault(widthParser_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjDivider = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjDivider, _BodyComponent);

  function MjDivider() {
    (0, _classCallCheck3.default)(this, MjDivider);
    return (0, _possibleConstructorReturn3.default)(this, (MjDivider.__proto__ || (0, _getPrototypeOf2.default)(MjDivider)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjDivider, [{
    key: 'getStyles',
    value: function getStyles() {
      var _this2 = this;

      var p = {
        'border-top': ['style', 'width', 'color'].map(function (attr) {
          return _this2.getAttribute('border-' + attr);
        }).join(' '),
        'font-size': 1,
        margin: '0px auto',
        width: this.getAttribute('width')
      };

      return {
        p: p,
        outlook: (0, _extends3.default)({}, p, {
          width: this.getOutlookWidth()
        })
      };
    }
  }, {
    key: 'getOutlookWidth',
    value: function getOutlookWidth() {
      var containerWidth = this.context.containerWidth;

      var paddingSize = this.getShorthandAttrValue('padding', 'left') + this.getShorthandAttrValue('padding', 'right');

      var width = this.getAttribute('width');

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      switch (unit) {
        case '%':
          return parseInt(containerWidth, 10) * parseInt(parsedWidth, 10) / 100 - paddingSize + 'px';
        case 'px':
          return width;
        default:
          return parseInt(containerWidth, 10) - paddingSize + 'px';
      }
    }
  }, {
    key: 'renderAfter',
    value: function renderAfter() {
      return '\n      <!--[if mso | IE]>\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        style: 'outlook',
        role: 'presentation',
        width: this.getOutlookWidth()
      }) + '\n        >\n          <tr>\n            <td style="height:0;line-height:0;">\n              &nbsp;\n            </td>\n          </tr>\n        </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <p\n        ' + this.htmlAttributes({
        style: 'p'
      }) + '\n      >\n      </p>\n      ' + this.renderAfter() + '\n    ';
    }
  }]);
  return MjDivider;
}(lib$1.BodyComponent), _class.tagOmission = true, _class.allowedAttributes = {
  'border-color': 'color',
  'border-style': 'string',
  'border-width': 'unit(px)',
  'container-background-color': 'color',
  padding: 'unit(px,%){1,4}',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  width: 'unit(px,%)'
}, _class.defaultAttributes = {
  'border-color': '#000000',
  'border-style': 'solid',
  'border-width': '4px',
  padding: '10px 25px',
  width: '100%'
}, _temp);
exports.default = MjDivider;
module.exports = exports['default'];
});

unwrapExports(lib$h);

var lib$i = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;





var _widthParser6 = _interopRequireDefault(widthParser_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjGroup = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjGroup, _BodyComponent);

  function MjGroup() {
    (0, _classCallCheck3.default)(this, MjGroup);
    return (0, _possibleConstructorReturn3.default)(this, (MjGroup.__proto__ || (0, _getPrototypeOf2.default)(MjGroup)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjGroup, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var parentWidth = this.context.containerWidth;
      var _props = this.props,
          nonRawSiblings = _props.nonRawSiblings,
          children = _props.children;

      var paddingSize = this.getShorthandAttrValue('padding', 'left') + this.getShorthandAttrValue('padding', 'right');

      var containerWidth = this.getAttribute('width') || parseFloat(parentWidth) / nonRawSiblings + 'px';

      var _widthParser = (0, _widthParser6.default)(containerWidth, {
        parseFloatToInt: false
      }),
          unit = _widthParser.unit,
          parsedWidth = _widthParser.parsedWidth;

      if (unit === '%') {
        containerWidth = parseFloat(parentWidth) * parsedWidth / 100 - paddingSize + 'px';
      } else {
        containerWidth = parsedWidth - paddingSize + 'px';
      }

      return (0, _extends3.default)({}, this.context, {
        containerWidth: containerWidth,
        nonRawSiblings: children.length
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      return {
        div: {
          'font-size': '0',
          'line-height': '0',
          'text-align': 'left',
          display: 'inline-block',
          width: '100%',
          direction: this.getAttribute('direction'),
          'vertical-align': this.getAttribute('vertical-align'),
          'background-color': this.getAttribute('background-color')
        },
        tdOutlook: {
          'vertical-align': this.getAttribute('vertical-align'),
          width: this.getWidthAsPixel()
        }
      };
    }
  }, {
    key: 'getParsedWidth',
    value: function getParsedWidth(toString) {
      var nonRawSiblings = this.props.nonRawSiblings;


      var width = this.getAttribute('width') || 100 / nonRawSiblings + '%';

      var _widthParser2 = (0, _widthParser6.default)(width, {
        parseFloatToInt: false
      }),
          unit = _widthParser2.unit,
          parsedWidth = _widthParser2.parsedWidth;

      if (toString) {
        return '' + parsedWidth + unit;
      }

      return {
        unit: unit,
        parsedWidth: parsedWidth
      };
    }
  }, {
    key: 'getWidthAsPixel',
    value: function getWidthAsPixel() {
      var containerWidth = this.context.containerWidth;

      var _widthParser3 = (0, _widthParser6.default)(this.getParsedWidth(true), {
        parseFloatToInt: false
      }),
          unit = _widthParser3.unit,
          parsedWidth = _widthParser3.parsedWidth;

      if (unit === '%') {
        return parseFloat(containerWidth) * parsedWidth / 100 + 'px';
      }
      return parsedWidth + 'px';
    }
  }, {
    key: 'getColumnClass',
    value: function getColumnClass() {
      var addMediaQuery = this.context.addMediaQuery;


      var className = '';

      var _getParsedWidth = this.getParsedWidth(),
          parsedWidth = _getParsedWidth.parsedWidth,
          unit = _getParsedWidth.unit;

      switch (unit) {
        case '%':
          className = 'mj-column-per-' + parseInt(parsedWidth, 10);
          break;

        case 'px':
        default:
          className = 'mj-column-px-' + parseInt(parsedWidth, 10);
          break;
      }

      // Add className to media queries
      addMediaQuery(className, {
        parsedWidth: parsedWidth,
        unit: unit
      });

      return className;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          children = _props2.children,
          nonRawSiblings = _props2.nonRawSiblings;

      var _getChildContext = this.getChildContext(),
          groupWidth = _getChildContext.containerWidth;

      var containerWidth = this.context.containerWidth;


      var getElementWidth = function getElementWidth(width) {
        if (!width) {
          return parseInt(containerWidth, 10) / parseInt(nonRawSiblings, 10) + 'px';
        }

        var _widthParser4 = (0, _widthParser6.default)(width, {
          parseFloatToInt: false
        }),
            unit = _widthParser4.unit,
            parsedWidth = _widthParser4.parsedWidth;

        if (unit === '%') {
          return 100 * parsedWidth / groupWidth + 'px';
        }
        return '' + parsedWidth + unit;
      };

      var classesName = this.getColumnClass() + ' outlook-group-fix';

      if (this.getAttribute('css-class')) {
        classesName += ' ' + this.getAttribute('css-class');
      }

      return '\n      <div\n        ' + this.htmlAttributes({
        class: classesName,
        style: 'div'
      }) + '\n      >\n        <!--[if mso | IE]>\n        <table  role="presentation" border="0" cellpadding="0" cellspacing="0">\n          <tr>\n        <![endif]-->\n          ' + this.renderChildren(children, {
        attributes: { mobileWidth: 'mobileWidth' },
        renderer: function renderer(component) {
          return component.constructor.isRawElement() ? component.render() : '\n              <!--[if mso | IE]>\n              <td\n                ' + component.htmlAttributes({
            style: {
              align: component.getAttribute('align'),
              'vertical-align': component.getAttribute('vertical-align'),
              width: getElementWidth(component.getWidthAsPixel ? component.getWidthAsPixel() : component.getAttribute('width'))
            }
          }) + '\n              >\n              <![endif]-->\n                ' + component.render() + '\n              <!--[if mso | IE]>\n              </td>\n              <![endif]-->\n          ';
        }
      }) + '\n        <!--[if mso | IE]>\n          </tr>\n          </table>\n        <![endif]-->\n      </div>\n    ';
    }
  }]);
  return MjGroup;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  'background-color': 'color',
  direction: 'enum(ltr,rtl)',
  'vertical-align': 'enum(top,bottom,middle)',
  width: 'unit(px,%)'
}, _class.defaultAttributes = {
  direction: 'ltr'
}, _temp);
exports.default = MjGroup;
module.exports = exports['default'];
});

unwrapExports(lib$i);

var lib$j = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp2;



var _min2 = _interopRequireDefault(min);





var _widthParser3 = _interopRequireDefault(widthParser_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjImage = (_temp2 = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjImage, _BodyComponent);

  function MjImage() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MjImage);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MjImage.__proto__ || (0, _getPrototypeOf2.default)(MjImage)).call.apply(_ref, [this].concat(args))), _this), _this.headStyle = function (breakpoint) {
      return '\n    @media only screen and (max-width:' + breakpoint + ') {\n      table.full-width-mobile { width: 100% !important; }\n      td.full-width-mobile { width: auto !important; }\n    }\n  ';
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MjImage, [{
    key: 'getStyles',
    value: function getStyles() {
      var width = this.getContentWidth();
      var fullWidth = this.getAttribute('full-width') === 'full-width';

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      return {
        img: {
          border: this.getAttribute('border'),
          'border-left': this.getAttribute('left'),
          'border-right': this.getAttribute('right'),
          'border-top': this.getAttribute('top'),
          'border-bottom': this.getAttribute('bottom'),
          'border-radius': this.getAttribute('border-radius'),
          display: 'block',
          outline: 'none',
          'text-decoration': 'none',
          height: this.getAttribute('height'),
          'min-width': fullWidth ? '100%' : null,
          width: '100%',
          'max-width': fullWidth ? '100%' : null
        },
        td: {
          width: fullWidth ? null : '' + parsedWidth + unit
        },
        table: {
          'min-width': fullWidth ? '100%' : null,
          'max-width': fullWidth ? '100%' : null,
          width: fullWidth ? '' + parsedWidth + unit : null,
          'border-collapse': 'collapse',
          'border-spacing': '0px'
        }
      };
    }
  }, {
    key: 'getContentWidth',
    value: function getContentWidth() {
      var width = this.getAttribute('width') ? parseInt(this.getAttribute('width'), 10) : Infinity;

      var _getBoxWidths = this.getBoxWidths(),
          box = _getBoxWidths.box;

      return (0, _min2.default)([box, width]);
    }
  }, {
    key: 'renderImage',
    value: function renderImage() {
      var height = this.getAttribute('height');

      var img = '\n      <img\n        ' + this.htmlAttributes({
        alt: this.getAttribute('alt'),
        height: height && (height === 'auto' ? height : parseInt(height, 10)),
        src: this.getAttribute('src'),
        srcset: this.getAttribute('srcset'),
        style: 'img',
        title: this.getAttribute('title'),
        width: this.getContentWidth()
      }) + '\n      />\n    ';

      if (this.getAttribute('href')) {
        return '\n        <a\n          ' + this.htmlAttributes({
          href: this.getAttribute('href'),
          target: this.getAttribute('target'),
          rel: this.getAttribute('rel'),
          name: this.getAttribute('name')
        }) + '\n        >\n          ' + img + '\n        </a>\n      ';
      }

      return img;
    }
  }, {
    key: 'render',
    value: function render() {
      return '\n      <table\n        ' + this.htmlAttributes({
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table',
        class: this.getAttribute('fluid-on-mobile') ? 'full-width-mobile' : null
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td ' + this.htmlAttributes({
        style: 'td',
        class: this.getAttribute('fluid-on-mobile') ? 'full-width-mobile' : null
      }) + '>\n              ' + this.renderImage() + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }]);
  return MjImage;
}(lib$1.BodyComponent), _class.tagOmission = true, _class.allowedAttributes = {
  alt: 'string',
  href: 'string',
  name: 'string',
  src: 'string',
  srcset: 'string',
  title: 'string',
  rel: 'string',
  align: 'enum(left,center,right)',
  border: 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-right': 'string',
  'border-top': 'string',
  'border-radius': 'unit(px,%){1,4}',
  'container-background-color': 'color',
  'fluid-on-mobile': 'boolean',
  padding: 'unit(px,%){1,4}',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  target: 'string',
  width: 'unit(px)',
  height: 'unit(px)'
}, _class.defaultAttributes = {
  align: 'center',
  border: '0',
  height: 'auto',
  padding: '10px 25px',
  target: '_blank'
}, _temp2);
exports.default = MjImage;
module.exports = exports['default'];
});

unwrapExports(lib$j);

var lib$k = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjRaw = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjRaw, _BodyComponent);

  function MjRaw() {
    (0, _classCallCheck3.default)(this, MjRaw);
    return (0, _possibleConstructorReturn3.default)(this, (MjRaw.__proto__ || (0, _getPrototypeOf2.default)(MjRaw)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjRaw, [{
    key: 'render',
    value: function render() {
      return this.getContent();
    }
  }]);
  return MjRaw;
}(lib$1.BodyComponent), _class.endingTag = true, _class.rawElement = true, _temp);
exports.default = MjRaw;
module.exports = exports['default'];
});

unwrapExports(lib$k);

var lib$l = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _extends3 = _interopRequireDefault(_extends);



var _toConsumableArray3 = _interopRequireDefault(toConsumableArray);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp2;





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var makeBackgroundString = (0, fp.flow)((0, fp.filter)(fp.identity), (0, fp.join)(' '));
var MjSection = (_temp2 = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjSection, _BodyComponent);

  function MjSection() {
    var _ref;

    var _temp, _this, _ret;

    (0, _classCallCheck3.default)(this, MjSection);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = MjSection.__proto__ || (0, _getPrototypeOf2.default)(MjSection)).call.apply(_ref, [this].concat(args))), _this), _this.getBackground = function () {
      return makeBackgroundString([_this.getAttribute('background-color')].concat((0, _toConsumableArray3.default)(_this.hasBackground() ? ['url(' + _this.getAttribute('background-url') + ')', 'top center / ' + _this.getAttribute('background-size'), _this.getAttribute('background-repeat')] : [])));
    }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
  }

  (0, _createClass3.default)(MjSection, [{
    key: 'getChildContext',
    value: function getChildContext() {
      var _getBoxWidths = this.getBoxWidths(),
          box = _getBoxWidths.box;

      return (0, _extends3.default)({}, this.context, {
        containerWidth: box + 'px'
      });
    }
  }, {
    key: 'getStyles',
    value: function getStyles() {
      var containerWidth = this.context.containerWidth;


      var fullWidth = this.isFullWidth();

      var background = this.getAttribute('background-url') ? { background: this.getBackground() } : {
        background: this.getAttribute('background-color'),
        'background-color': this.getAttribute('background-color')
      };

      return {
        tableFullwidth: (0, _extends3.default)({}, fullWidth ? background : {}, {
          width: '100%',
          'border-radius': this.getAttribute('border-radius')
        }),
        table: (0, _extends3.default)({}, fullWidth ? {} : background, {
          width: '100%',
          'border-radius': this.getAttribute('border-radius')
        }),
        td: {
          border: this.getAttribute('border'),
          'border-bottom': this.getAttribute('border-bottom'),
          'border-left': this.getAttribute('border-left'),
          'border-right': this.getAttribute('border-right'),
          'border-top': this.getAttribute('border-top'),
          direction: this.getAttribute('direction'),
          'font-size': '0px',
          padding: this.getAttribute('padding'),
          'padding-bottom': this.getAttribute('padding-bottom'),
          'padding-left': this.getAttribute('padding-left'),
          'padding-right': this.getAttribute('padding-right'),
          'padding-top': this.getAttribute('padding-top'),
          'text-align': this.getAttribute('text-align'),
          'vertical-align': this.getAttribute('vertical-align')
        },
        div: (0, _extends3.default)({}, fullWidth ? {} : background, {
          Margin: '0px auto',
          'border-radius': this.getAttribute('border-radius'),
          'max-width': containerWidth
        }),
        innerDiv: {
          'line-height': '0',
          'font-size': '0'
        }
      };
    }
  }, {
    key: 'hasBackground',
    value: function hasBackground() {
      return this.getAttribute('background-url') != null;
    }
  }, {
    key: 'isFullWidth',
    value: function isFullWidth() {
      return this.getAttribute('full-width') === 'full-width';
    }
  }, {
    key: 'renderBefore',
    value: function renderBefore() {
      var containerWidth = this.context.containerWidth;


      return '\n      <!--[if mso | IE]>\n      <table\n        ' + this.htmlAttributes({
        align: 'center',
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        class: (0, lib$1.suffixCssClasses)(this.getAttribute('css-class'), 'outlook'),
        style: { width: '' + containerWidth },
        width: parseInt(containerWidth, 10)
      }) + '\n      >\n        <tr>\n          <td style="line-height:0px;font-size:0px;mso-line-height-rule:exactly;">\n      <![endif]-->\n    ';
    }

    // eslint-disable-next-line class-methods-use-this

  }, {
    key: 'renderAfter',
    value: function renderAfter() {
      return '\n      <!--[if mso | IE]>\n          </td>\n        </tr>\n      </table>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderWrappedChildren',
    value: function renderWrappedChildren() {
      var children = this.props.children;


      return '\n      <!--[if mso | IE]>\n        <tr>\n      <![endif]-->\n      ' + this.renderChildren(children, {
        renderer: function renderer(component) {
          return component.constructor.isRawElement() ? component.render() : '\n          <!--[if mso | IE]>\n            <td\n              ' + component.htmlAttributes({
            align: component.getAttribute('align'),
            class: (0, lib$1.suffixCssClasses)(component.getAttribute('css-class'), 'outlook'),
            style: 'tdOutlook'
          }) + '\n            >\n          <![endif]-->\n            ' + component.render() + '\n          <!--[if mso | IE]>\n            </td>\n          <![endif]-->\n    ';
        }
      }) + '\n\n      <!--[if mso | IE]>\n        </tr>\n      <![endif]-->\n    ';
    }
  }, {
    key: 'renderWithBackground',
    value: function renderWithBackground(content) {
      var fullWidth = this.isFullWidth();

      var containerWidth = this.context.containerWidth;


      return '\n      <!--[if mso | IE]>\n        <v:rect ' + this.htmlAttributes({
        style: fullWidth ? { 'mso-width-percent': '1000' } : { width: containerWidth },
        'xmlns:v': 'urn:schemas-microsoft-com:vml',
        fill: 'true',
        stroke: 'false'
      }) + '>\n        <v:fill ' + this.htmlAttributes({
        origin: '0.5, 0',
        position: '0.5, 0',
        src: this.getAttribute('background-url'),
        color: this.getAttribute('background-color'),
        type: 'tile'
      }) + ' />\n        <v:textbox style="mso-fit-shape-to-text:true" inset="0,0,0,0">\n      <![endif]-->\n          ' + content + '\n        <!--[if mso | IE]>\n        </v:textbox>\n      </v:rect>\n    <![endif]-->\n    ';
    }
  }, {
    key: 'renderSection',
    value: function renderSection() {
      var hasBackground = this.hasBackground();

      return '\n      <div ' + this.htmlAttributes({
        class: this.isFullWidth() ? null : this.getAttribute('css-class'),
        style: 'div'
      }) + '>\n        ' + (hasBackground ? '<div ' + this.htmlAttributes({ style: 'innerDiv' }) + '>' : '') + '\n        <table\n          ' + this.htmlAttributes({
        align: 'center',
        background: this.isFullWidth() ? null : this.getAttribute('background-url'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'table'
      }) + '\n        >\n          <tbody>\n            <tr>\n              <td\n                ' + this.htmlAttributes({
        style: 'td'
      }) + '\n              >\n                <!--[if mso | IE]>\n                  <table role="presentation" border="0" cellpadding="0" cellspacing="0">\n                <![endif]-->\n                  ' + this.renderWrappedChildren() + '\n                <!--[if mso | IE]>\n                  </table>\n                <![endif]-->\n              </td>\n            </tr>\n          </tbody>\n        </table>\n        ' + (hasBackground ? '</div>' : '') + '\n      </div>\n    ';
    }
  }, {
    key: 'renderFullWidth',
    value: function renderFullWidth() {
      var content = this.hasBackground() ? this.renderWithBackground('\n        ' + this.renderBefore() + '\n        ' + this.renderSection() + '\n        ' + this.renderAfter() + '\n      ') : '\n        ' + this.renderBefore() + '\n        ' + this.renderSection() + '\n        ' + this.renderAfter() + '\n      ';

      return '\n      <table\n        ' + this.htmlAttributes({
        align: 'center',
        class: this.getAttribute('css-class'),
        background: this.getAttribute('background-url'),
        border: '0',
        cellpadding: '0',
        cellspacing: '0',
        role: 'presentation',
        style: 'tableFullwidth'
      }) + '\n      >\n        <tbody>\n          <tr>\n            <td>\n              ' + content + '\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    ';
    }
  }, {
    key: 'renderSimple',
    value: function renderSimple() {
      var section = this.renderSection();

      return '\n      ' + this.renderBefore() + '\n      ' + (this.hasBackground() ? this.renderWithBackground(section) : section) + '\n      ' + this.renderAfter() + '\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      return this.isFullWidth() ? this.renderFullWidth() : this.renderSimple();
    }
  }]);
  return MjSection;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  'background-color': 'color',
  'background-url': 'string',
  'background-repeat': 'enum(repeat,no-repeat)',
  'background-size': 'string',
  border: 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-radius': 'string',
  'border-right': 'string',
  'border-top': 'string',
  direction: 'enum(ltr,rtl)',
  'full-width': 'enum(full-width)',
  padding: 'unit(px,%){1,4}',
  'padding-top': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'text-align': 'enum(left,center,right)',
  'text-padding': 'unit(px,%){1,4}',
  'vertical-align': 'enum(bottom,middle,top)'
}, _class.defaultAttributes = {
  'background-repeat': 'repeat',
  'background-size': 'auto',
  direction: 'ltr',
  padding: '20px 0',
  'text-align': 'center',
  'text-padding': '4px 4px 4px 0',
  'vertical-align': 'top'
}, _temp2);
exports.default = MjSection;
module.exports = exports['default'];
});

unwrapExports(lib$l);

var lib$m = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;





var _conditionalTag2 = _interopRequireDefault(conditionalTag_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjSpacer = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjSpacer, _BodyComponent);

  function MjSpacer() {
    (0, _classCallCheck3.default)(this, MjSpacer);
    return (0, _possibleConstructorReturn3.default)(this, (MjSpacer.__proto__ || (0, _getPrototypeOf2.default)(MjSpacer)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjSpacer, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        div: {
          height: this.getAttribute('height')
        }
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.getAttribute('height');

      return '\n      ' + (0, _conditionalTag2.default)('\n        <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="' + parseInt(height, 10) + '" style="vertical-align:top;height:' + height + ';">\n      ') + '\n      <div\n        ' + this.htmlAttributes({
        style: 'div'
      }) + '\n      >\n        &nbsp;\n      </div>\n      ' + (0, _conditionalTag2.default)('\n        </td></tr></table>\n      ') + '\n    ';
    }
  }]);
  return MjSpacer;
}(lib$1.BodyComponent), _class.allowedAttributes = {
  border: 'string',
  'border-bottom': 'string',
  'border-left': 'string',
  'border-right': 'string',
  'border-top': 'string',
  'container-background-color': 'color',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'vertical-align': 'enum(top,bottom,middle)',
  width: 'unit(px,%)',
  height: 'unit(px,%)'
}, _class.defaultAttributes = {
  height: '20px'
}, _temp);
exports.default = MjSpacer;
module.exports = exports['default'];
});

unwrapExports(lib$m);

var lib$n = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;





var _conditionalTag2 = _interopRequireDefault(conditionalTag_1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjText = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjText, _BodyComponent);

  function MjText() {
    (0, _classCallCheck3.default)(this, MjText);
    return (0, _possibleConstructorReturn3.default)(this, (MjText.__proto__ || (0, _getPrototypeOf2.default)(MjText)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjText, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        text: {
          'font-family': this.getAttribute('font-family'),
          'font-size': this.getAttribute('font-size'),
          'font-style': this.getAttribute('font-style'),
          'font-weight': this.getAttribute('font-weight'),
          'letter-spacing': this.getAttribute('letter-spacing'),
          'line-height': this.getAttribute('line-height'),
          'text-align': this.getAttribute('align'),
          'text-decoration': this.getAttribute('text-decoration'),
          'text-transform': this.getAttribute('text-transform'),
          color: this.getAttribute('color'),
          height: this.getAttribute('height')
        }
      };
    }
  }, {
    key: 'renderContent',
    value: function renderContent() {
      return '\n      <div\n        ' + this.htmlAttributes({
        style: 'text'
      }) + '\n      >\n        ' + this.getContent() + '\n      </div>\n    ';
    }
  }, {
    key: 'render',
    value: function render() {
      var height = this.getAttribute('height');

      return height ? '\n        ' + (0, _conditionalTag2.default)('\n          <table role="presentation" border="0" cellpadding="0" cellspacing="0"><tr><td height="' + height + '" style="vertical-align:top;height:' + height + ';">\n        ') + '\n        ' + this.renderContent() + '\n        ' + (0, _conditionalTag2.default)('\n          </td></tr></table>\n        ') + '\n      ' : this.renderContent();
    }
  }]);
  return MjText;
}(lib$1.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  align: 'enum(left,right,center,justify)',
  'background-color': 'color',
  color: 'color',
  'container-background-color': 'color',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-style': 'string',
  'font-weight': 'string',
  height: 'unit(px,%)',
  'letter-spacing': 'unit(px,%)',
  'line-height': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'text-decoration': 'string',
  'text-transform': 'string',
  'vertical-align': 'enum(top,bottom,middle)'
}, _class.defaultAttributes = {
  align: 'left',
  color: '#000000',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'line-height': '1',
  padding: '10px 25px'
}, _temp);
exports.default = MjText;
module.exports = exports['default'];
});

unwrapExports(lib$n);

var lib$o = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;



var _defineProperty3 = _interopRequireDefault(defineProperty);



var _extends4 = _interopRequireDefault(_extends);



var _getPrototypeOf2 = _interopRequireDefault(getPrototypeOf);



var _classCallCheck3 = _interopRequireDefault(classCallCheck);



var _createClass3 = _interopRequireDefault(createClass);



var _possibleConstructorReturn3 = _interopRequireDefault(possibleConstructorReturn);



var _inherits3 = _interopRequireDefault(inherits);

var _class, _temp;



var _widthParser3 = _interopRequireDefault(widthParser_1);





function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MjTable = (_temp = _class = function (_BodyComponent) {
  (0, _inherits3.default)(MjTable, _BodyComponent);

  function MjTable() {
    (0, _classCallCheck3.default)(this, MjTable);
    return (0, _possibleConstructorReturn3.default)(this, (MjTable.__proto__ || (0, _getPrototypeOf2.default)(MjTable)).apply(this, arguments));
  }

  (0, _createClass3.default)(MjTable, [{
    key: 'getStyles',
    value: function getStyles() {
      return {
        table: {
          cellpadding: this.getAttribute('cellspadding'),
          cellspacing: this.getAttribute('cellspacing'),
          color: this.getAttribute('color'),
          'font-family': this.getAttribute('font-family'),
          'font-size': this.getAttribute('font-size'),
          'line-height': this.getAttribute('line-height'),
          'table-layout': this.getAttribute('table-layout'),
          width: this.getAttribute('width')
        }
      };
    }
  }, {
    key: 'getWidth',
    value: function getWidth() {
      var width = this.getAttribute('width');

      var _widthParser = (0, _widthParser3.default)(width),
          parsedWidth = _widthParser.parsedWidth,
          unit = _widthParser.unit;

      return unit === '%' ? width : parsedWidth;
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var tableAttributes = (0, lodash.reduce)(['cellpadding', 'cellspacing'], function (acc, v) {
        return (0, _extends4.default)({}, acc, (0, _defineProperty3.default)({}, v, _this2.getAttribute(v)));
      }, {});

      return '\n      <table\n        ' + this.htmlAttributes((0, _extends4.default)({}, tableAttributes, {
        width: this.getWidth(),
        border: '0',
        style: 'table'
      })) + '\n      >\n        ' + this.getContent() + '\n      </table>\n    ';
    }
  }]);
  return MjTable;
}(lib$1.BodyComponent), _class.endingTag = true, _class.allowedAttributes = {
  align: 'enum(left,right,center)',
  cellpadding: 'integer',
  cellspacing: 'integer',
  'container-background-color': 'color',
  color: 'color',
  'font-family': 'string',
  'font-size': 'unit(px)',
  'font-weight': 'string',
  'line-height': 'unit(px,%)',
  'padding-bottom': 'unit(px,%)',
  'padding-left': 'unit(px,%)',
  'padding-right': 'unit(px,%)',
  'padding-top': 'unit(px,%)',
  padding: 'unit(px,%){1,4}',
  'table-layout': 'enum(auto,fixed,initial,inherit)',
  'vertical-align': 'enum(top,bottom,middle)',
  width: 'unit(px,%)'
}, _class.defaultAttributes = {
  align: 'left',
  cellpadding: '0',
  cellspacing: '0',
  color: '#000000',
  'font-family': 'Ubuntu, Helvetica, Arial, sans-serif',
  'font-size': '13px',
  'line-height': '22px',
  padding: '10px 25px',
  'table-layout': 'auto',
  width: '100%'
}, _temp);
exports.default = MjTable;
module.exports = exports['default'];
});

unwrapExports(lib$o);

var dependencies$1 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = {
  mjml: ['mj-body', 'mj-head', 'mj-raw'],
  'mj-accordion': ['mj-accordion-element', 'mj-raw'],
  'mj-accordion-element': ['mj-accordion-title', 'mj-accordion-text', 'mj-raw'],
  'mj-accordion-title': [],
  'mj-accordion-text': [],
  'mj-attributes': [/^.*^/],
  'mj-body': ['mj-raw', 'mj-section', 'mj-wrapper', 'mj-hero'],
  'mj-button': [],
  'mj-carousel': ['mj-carousel-image'],
  'mj-carousel-image': [],
  'mj-column': ['mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-invoice', 'mj-list', 'mj-location', 'mj-raw', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar'],
  'mj-divider': [],
  'mj-group': ['mj-column', 'mj-raw'],
  'mj-head': ['mj-attributes', 'mj-breakpoint', 'mj-font', 'mj-preview', 'mj-style', 'mj-title', 'mj-raw'],
  'mj-hero': ['mj-accordion', 'mj-button', 'mj-carousel', 'mj-divider', 'mj-html', 'mj-image', 'mj-list', 'mj-location', 'mj-social', 'mj-spacer', 'mj-table', 'mj-text', 'mj-navbar', 'mj-raw'],
  'mj-html': [],
  'mj-image': [],
  'mj-invoice': ['mj-invoice-item'],
  'mj-invoice-item': [],
  'mj-link': [],
  'mj-list': [],
  'mj-location': [],
  'mj-navbar': ['mj-navbar-link', 'mj-raw'],
  'mj-raw': [],
  'mj-section': ['mj-column', 'mj-group', 'mj-raw'],
  'mj-social': ['mj-social-element'],
  'mj-social-element': [],
  'mj-spacer': [],
  'mj-table': [],
  'mj-text': [],
  'mj-wrapper': ['mj-hero', 'mj-raw', 'mj-section']
};
module.exports = exports['default'];
});

unwrapExports(dependencies$1);

var lib$p = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _mjmlCore2 = _interopRequireDefault(lib$1);











function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, lib$1.registerComponent)(lib$6);
(0, lib$1.registerComponent)(lib$7);
(0, lib$1.registerComponent)(lib$8);
(0, lib$1.registerComponent)(lib$9);
(0, lib$1.registerComponent)(lib$a);
(0, lib$1.registerComponent)(lib$b);
(0, lib$1.registerComponent)(lib$c);
(0, lib$1.registerComponent)(lib$d);
(0, lib$1.registerComponent)(lib$e);
(0, lib$1.registerComponent)(lib$f);
(0, lib$1.registerComponent)(lib$g);
(0, lib$1.registerComponent)(lib$h);
(0, lib$1.registerComponent)(lib$i);
(0, lib$1.registerComponent)(lib$j);

(0, lib$1.registerComponent)(lib$k);
(0, lib$1.registerComponent)(lib$l);
(0, lib$1.registerComponent)(lib$m);
(0, lib$1.registerComponent)(lib$n);
(0, lib$1.registerComponent)(lib$o);
(0, lib$1.registerComponent)(mjmlWrapper);

(0, lib$1.registerComponent)(lib$2.Social);
(0, lib$1.registerComponent)(lib$2.SocialElement);
(0, lib$1.registerComponent)(lib$3.Navbar);
(0, lib$1.registerComponent)(lib$3.NavbarLink);
(0, lib$1.registerComponent)(lib$5.Accordion);
(0, lib$1.registerComponent)(lib$5.AccordionElement);
(0, lib$1.registerComponent)(lib$5.AccordionText);
(0, lib$1.registerComponent)(lib$5.AccordionTitle);
(0, lib$1.registerComponent)(lib$4.Carousel);
(0, lib$1.registerComponent)(lib$4.CarouselImage);

(0, lib.registerDependencies)(dependencies$1);

exports.default = _mjmlCore2.default;
module.exports = exports['default'];
});

var mjml2html = unwrapExports(lib$p);

/*
  Compile an mjml string
*/
const htmlOutput = mjml2html(`
  <mjml>
    <mj-body>
      <mj-section>
        <mj-column>
          <mj-text>
            Hello World!
          </mj-text>
        </mj-column>
      </mj-section>
    </mj-body>
  </mjml>
`, {});


/*
  Print the responsive HTML generated and MJML errors if any
*/
console.log(htmlOutput);
