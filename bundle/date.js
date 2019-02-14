'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var toConsumableArray = _interopDefault(require('babel-runtime/helpers/toConsumableArray'));
var _extends = _interopDefault(require('babel-runtime/helpers/extends'));
var getPrototypeOf = _interopDefault(require('babel-runtime/core-js/object/get-prototype-of'));
var classCallCheck = _interopDefault(require('babel-runtime/helpers/classCallCheck'));
var possibleConstructorReturn = _interopDefault(require('babel-runtime/helpers/possibleConstructorReturn'));
var inherits = _interopDefault(require('babel-runtime/helpers/inherits'));
var createClass = _interopDefault(require('babel-runtime/helpers/createClass'));
var lodash = _interopDefault(require('lodash'));
var mjmlParserXml = _interopDefault(require('mjml-parser-xml'));
var defineProperty = _interopDefault(require('babel-runtime/helpers/defineProperty'));
var some = _interopDefault(require('lodash/some'));
var find = _interopDefault(require('lodash/find'));
var escapeRegExp = _interopDefault(require('lodash/escapeRegExp'));
var keys = _interopDefault(require('babel-runtime/core-js/object/keys'));
var kebabCase = _interopDefault(require('lodash/kebabCase'));
var path = _interopDefault(require('path'));
var juice = _interopDefault(require('juice'));
var warning = _interopDefault(require('warning'));
var concat = _interopDefault(require('lodash/concat'));
var keys$1 = _interopDefault(require('lodash/keys'));
var includes = _interopDefault(require('lodash/includes'));
var filter = _interopDefault(require('lodash/filter'));
var _typeof = _interopDefault(require('babel-runtime/helpers/typeof'));
var forEach = _interopDefault(require('lodash/forEach'));
var map = _interopDefault(require('lodash/map'));
var fs = _interopDefault(require('fs'));
var mjmlSocial = _interopDefault(require('mjml-social'));
var mjmlNavbar = _interopDefault(require('mjml-navbar'));
var mjmlCarousel = _interopDefault(require('mjml-carousel'));
var mjmlAccordion = _interopDefault(require('mjml-accordion'));
var mjmlBody = _interopDefault(require('mjml-body'));
var mjmlHead = _interopDefault(require('mjml-head'));
var mjmlHeadAttributes = _interopDefault(require('mjml-head-attributes'));
var mjmlHeadBreakpoint = _interopDefault(require('mjml-head-breakpoint'));
var mjmlHeadFont = _interopDefault(require('mjml-head-font'));
var mjmlHeadPreview = _interopDefault(require('mjml-head-preview'));
var mjmlHeadStyle = _interopDefault(require('mjml-head-style'));
var mjmlHeadTitle = _interopDefault(require('mjml-head-title'));
var mjmlHero = _interopDefault(require('mjml-hero'));
var mjmlButton = _interopDefault(require('mjml-button'));
var mjmlColumn = _interopDefault(require('mjml-column'));
var mjmlDivider = _interopDefault(require('mjml-divider'));
var mjmlGroup = _interopDefault(require('mjml-group'));
var mjmlImage = _interopDefault(require('mjml-image'));
var mjmlRaw = _interopDefault(require('mjml-raw'));
var mjmlSection = _interopDefault(require('mjml-section'));
var mjmlSpacer = _interopDefault(require('mjml-spacer'));
var mjmlText = _interopDefault(require('mjml-text'));
var mjmlTable = _interopDefault(require('mjml-table'));
var mjmlWrapper = _interopDefault(require('mjml-wrapper'));

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

/*jshint node:true */

function OutputLine(parent) {
  this.__parent = parent;
  this.__character_count = 0;
  // use indent_count as a marker for this.__lines that have preserved indentation
  this.__indent_count = -1;
  this.__alignment_count = 0;

  this.__items = [];
}

OutputLine.prototype.item = function(index) {
  if (index < 0) {
    return this.__items[this.__items.length + index];
  } else {
    return this.__items[index];
  }
};

OutputLine.prototype.has_match = function(pattern) {
  for (var lastCheckedOutput = this.__items.length - 1; lastCheckedOutput >= 0; lastCheckedOutput--) {
    if (this.__items[lastCheckedOutput].match(pattern)) {
      return true;
    }
  }
  return false;
};

OutputLine.prototype.set_indent = function(indent, alignment) {
  this.__indent_count = indent || 0;
  this.__alignment_count = alignment || 0;
  this.__character_count = this.__parent.baseIndentLength + this.__alignment_count + this.__indent_count * this.__parent.indent_length;
};

OutputLine.prototype.get_character_count = function() {
  return this.__character_count;
};

OutputLine.prototype.is_empty = function() {
  return this.__items.length === 0;
};

OutputLine.prototype.last = function() {
  if (!this.is_empty()) {
    return this.__items[this.__items.length - 1];
  } else {
    return null;
  }
};

OutputLine.prototype.push = function(item) {
  this.__items.push(item);
  this.__character_count += item.length;
};

OutputLine.prototype.push_raw = function(item) {
  this.push(item);
  var last_newline_index = item.lastIndexOf('\n');
  if (last_newline_index !== -1) {
    this.__character_count = item.length - last_newline_index;
  }
};

OutputLine.prototype.pop = function() {
  var item = null;
  if (!this.is_empty()) {
    item = this.__items.pop();
    this.__character_count -= item.length;
  }
  return item;
};

OutputLine.prototype.remove_indent = function() {
  if (this.__indent_count > 0) {
    this.__indent_count -= 1;
    this.__character_count -= this.__parent.indent_length;
  }
};

OutputLine.prototype.trim = function() {
  while (this.last() === ' ') {
    this.__items.pop();
    this.__character_count -= 1;
  }
};

OutputLine.prototype.toString = function() {
  var result = '';
  if (!this.is_empty()) {
    if (this.__indent_count >= 0) {
      result = this.__parent.get_indent_string(this.__indent_count);
    }
    if (this.__alignment_count >= 0) {
      result += this.__parent.get_alignment_string(this.__alignment_count);
    }
    result += this.__items.join('');
  }
  return result;
};

function IndentCache(base_string, level_string) {
  this.__cache = [base_string];
  this.__level_string = level_string;
}

IndentCache.prototype.__ensure_cache = function(level) {
  while (level >= this.__cache.length) {
    this.__cache.push(this.__cache[this.__cache.length - 1] + this.__level_string);
  }
};

IndentCache.prototype.get_level_string = function(level) {
  this.__ensure_cache(level);
  return this.__cache[level];
};


function Output(options, baseIndentString) {
  var indent_string = options.indent_char;
  if (options.indent_size > 1) {
    indent_string = new Array(options.indent_size + 1).join(options.indent_char);
  }

  // Set to null to continue support for auto detection of base indent level.
  baseIndentString = baseIndentString || '';
  if (options.indent_level > 0) {
    baseIndentString = new Array(options.indent_level + 1).join(indent_string);
  }

  this.__indent_cache = new IndentCache(baseIndentString, indent_string);
  this.__alignment_cache = new IndentCache('', ' ');
  this.baseIndentLength = baseIndentString.length;
  this.indent_length = indent_string.length;
  this.raw = false;
  this._end_with_newline = options.end_with_newline;

  this.__lines = [];
  this.previous_line = null;
  this.current_line = null;
  this.space_before_token = false;
  // initialize
  this.__add_outputline();
}

Output.prototype.__add_outputline = function() {
  this.previous_line = this.current_line;
  this.current_line = new OutputLine(this);
  this.__lines.push(this.current_line);
};

Output.prototype.get_line_number = function() {
  return this.__lines.length;
};

Output.prototype.get_indent_string = function(level) {
  return this.__indent_cache.get_level_string(level);
};

Output.prototype.get_alignment_string = function(level) {
  return this.__alignment_cache.get_level_string(level);
};

Output.prototype.is_empty = function() {
  return !this.previous_line && this.current_line.is_empty();
};

Output.prototype.add_new_line = function(force_newline) {
  // never newline at the start of file
  // otherwise, newline only if we didn't just add one or we're forced
  if (this.is_empty() ||
    (!force_newline && this.just_added_newline())) {
    return false;
  }

  // if raw output is enabled, don't print additional newlines,
  // but still return True as though you had
  if (!this.raw) {
    this.__add_outputline();
  }
  return true;
};

Output.prototype.get_code = function(eol) {
  var sweet_code = this.__lines.join('\n').replace(/[\r\n\t ]+$/, '');

  if (this._end_with_newline) {
    sweet_code += '\n';
  }

  if (eol !== '\n') {
    sweet_code = sweet_code.replace(/[\n]/g, eol);
  }

  return sweet_code;
};

Output.prototype.set_indent = function(indent, alignment) {
  indent = indent || 0;
  alignment = alignment || 0;

  // Never indent your first output indent at the start of the file
  if (this.__lines.length > 1) {
    this.current_line.set_indent(indent, alignment);
    return true;
  }
  this.current_line.set_indent();
  return false;
};

Output.prototype.add_raw_token = function(token) {
  for (var x = 0; x < token.newlines; x++) {
    this.__add_outputline();
  }
  this.current_line.push(token.whitespace_before);
  this.current_line.push_raw(token.text);
  this.space_before_token = false;
};

Output.prototype.add_token = function(printable_token) {
  this.add_space_before_token();
  this.current_line.push(printable_token);
};

Output.prototype.add_space_before_token = function() {
  if (this.space_before_token && !this.just_added_newline()) {
    this.current_line.push(' ');
  }
  this.space_before_token = false;
};

Output.prototype.remove_indent = function(index) {
  var output_length = this.__lines.length;
  while (index < output_length) {
    this.__lines[index].remove_indent();
    index++;
  }
};

Output.prototype.trim = function(eat_newlines) {
  eat_newlines = (eat_newlines === undefined) ? false : eat_newlines;

  this.current_line.trim(this.indent_string, this.baseIndentString);

  while (eat_newlines && this.__lines.length > 1 &&
    this.current_line.is_empty()) {
    this.__lines.pop();
    this.current_line = this.__lines[this.__lines.length - 1];
    this.current_line.trim();
  }

  this.previous_line = this.__lines.length > 1 ?
    this.__lines[this.__lines.length - 2] : null;
};

Output.prototype.just_added_newline = function() {
  return this.current_line.is_empty();
};

Output.prototype.just_added_blankline = function() {
  return this.is_empty() ||
    (this.current_line.is_empty() && this.previous_line.is_empty());
};

Output.prototype.ensure_empty_line_above = function(starts_with, ends_with) {
  var index = this.__lines.length - 2;
  while (index >= 0) {
    var potentialEmptyLine = this.__lines[index];
    if (potentialEmptyLine.is_empty()) {
      break;
    } else if (potentialEmptyLine.item(0).indexOf(starts_with) !== 0 &&
      potentialEmptyLine.item(-1) !== ends_with) {
      this.__lines.splice(index + 1, 0, new OutputLine(this));
      this.previous_line = this.__lines[this.__lines.length - 2];
      break;
    }
    index--;
  }
};

var Output_1 = Output;

var output = {
	Output: Output_1
};

/*jshint node:true */

function Token(type, text, newlines, whitespace_before) {
  this.type = type;
  this.text = text;

  // comments_before are
  // comments that have a new line before them
  // and may or may not have a newline after
  // this is a set of comments before
  this.comments_before = null; /* inline comment*/


  // this.comments_after =  new TokenStream(); // no new line before and newline after
  this.newlines = newlines || 0;
  this.whitespace_before = whitespace_before || '';
  this.parent = null;
  this.next = null;
  this.previous = null;
  this.opened = null;
  this.closed = null;
  this.directives = null;
}


var Token_1 = Token;

var token = {
	Token: Token_1
};

var acorn = createCommonjsModule(function (module, exports) {

// acorn used char codes to squeeze the last bit of performance out
// Beautifier is okay without that, so we're using regex
// permit $ (36) and @ (64). @ is used in ES7 decorators.
// 65 through 91 are uppercase letters.
// permit _ (95).
// 97 through 123 are lowercase letters.
var baseASCIIidentifierStartChars = "\x24\x40\x41-\x5a\x5f\x61-\x7a";

// inside an identifier @ is not allowed but 0-9 are.
var baseASCIIidentifierChars = "\x24\x30-\x39\x41-\x5a\x5f\x61-\x7a";

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u0527\u0531-\u0556\u0559\u0561-\u0587\u05d0-\u05ea\u05f0-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u08a0\u08a2-\u08ac\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0977\u0979-\u097f\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c33\u0c35-\u0c39\u0c3d\u0c58\u0c59\u0c60\u0c61\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d60\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e87\u0e88\u0e8a\u0e8d\u0e94-\u0e97\u0e99-\u0e9f\u0ea1-\u0ea3\u0ea5\u0ea7\u0eaa\u0eab\u0ead-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f4\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f0\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1877\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191c\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19c1-\u19c7\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1ce9-\u1cec\u1cee-\u1cf1\u1cf5\u1cf6\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2119-\u211d\u2124\u2126\u2128\u212a-\u212d\u212f-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u2e2f\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309d-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312d\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fcc\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua697\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua78e\ua790-\ua793\ua7a0-\ua7aa\ua7f8-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa80-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uabc0-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
var nonASCIIidentifierChars = "\u0300-\u036f\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u0620-\u0649\u0672-\u06d3\u06e7-\u06e8\u06fb-\u06fc\u0730-\u074a\u0800-\u0814\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0840-\u0857\u08e4-\u08fe\u0900-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962-\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09d7\u09df-\u09e0\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2-\u0ae3\u0ae6-\u0aef\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b5f-\u0b60\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c01-\u0c03\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62-\u0c63\u0c66-\u0c6f\u0c82\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2-\u0ce3\u0ce6-\u0cef\u0d02\u0d03\u0d46-\u0d48\u0d57\u0d62-\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0df2\u0df3\u0e34-\u0e3a\u0e40-\u0e45\u0e50-\u0e59\u0eb4-\u0eb9\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f41-\u0f47\u0f71-\u0f84\u0f86-\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u1000-\u1029\u1040-\u1049\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u170e-\u1710\u1720-\u1730\u1740-\u1750\u1772\u1773\u1780-\u17b2\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u1920-\u192b\u1930-\u193b\u1951-\u196d\u19b0-\u19c0\u19c8-\u19c9\u19d0-\u19d9\u1a00-\u1a15\u1a20-\u1a53\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1b46-\u1b4b\u1b50-\u1b59\u1b6b-\u1b73\u1bb0-\u1bb9\u1be6-\u1bf3\u1c00-\u1c22\u1c40-\u1c49\u1c5b-\u1c7d\u1cd0-\u1cd2\u1d00-\u1dbe\u1e01-\u1f15\u200c\u200d\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2d81-\u2d96\u2de0-\u2dff\u3021-\u3028\u3099\u309a\ua640-\ua66d\ua674-\ua67d\ua69f\ua6f0-\ua6f1\ua7f8-\ua800\ua806\ua80b\ua823-\ua827\ua880-\ua881\ua8b4-\ua8c4\ua8d0-\ua8d9\ua8f3-\ua8f7\ua900-\ua909\ua926-\ua92d\ua930-\ua945\ua980-\ua983\ua9b3-\ua9c0\uaa00-\uaa27\uaa40-\uaa41\uaa4c-\uaa4d\uaa50-\uaa59\uaa7b\uaae0-\uaae9\uaaf2-\uaaf3\uabc0-\uabe1\uabec\uabed\uabf0-\uabf9\ufb20-\ufb28\ufe00-\ufe0f\ufe20-\ufe26\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";
//var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
//var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

var identifierStart = "[" + baseASCIIidentifierStartChars + nonASCIIidentifierStartChars + "]";
var identifierChars = "[" + baseASCIIidentifierChars + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]*";

exports.identifier = new RegExp(identifierStart + identifierChars, 'g');

// Whether a single character denotes a newline.

exports.newline = /[\n\r\u2028\u2029]/;

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

// in javascript, these two differ
// in python they are the same, different methods are called on them
exports.lineBreak = new RegExp('\r\n|' + exports.newline.source);
exports.allLineBreaks = new RegExp(exports.lineBreak.source, 'g');
});
var acorn_1 = acorn.identifier;
var acorn_2 = acorn.newline;
var acorn_3 = acorn.lineBreak;
var acorn_4 = acorn.allLineBreaks;

/*jshint node:true */

function Options(options, merge_child_field) {
  this.raw_options = _mergeOpts(options, merge_child_field);

  // Support passing the source text back with no change
  this.disabled = this._get_boolean('disabled');

  this.eol = this._get_characters('eol', 'auto');
  this.end_with_newline = this._get_boolean('end_with_newline');
  this.indent_size = this._get_number('indent_size', 4);
  this.indent_char = this._get_characters('indent_char', ' ');
  this.indent_level = this._get_number('indent_level');

  this.preserve_newlines = this._get_boolean('preserve_newlines', true);
  this.max_preserve_newlines = this._get_number('max_preserve_newlines', 32786);
  if (!this.preserve_newlines) {
    this.max_preserve_newlines = 0;
  }

  this.indent_with_tabs = this._get_boolean('indent_with_tabs');
  if (this.indent_with_tabs) {
    this.indent_char = '\t';
    this.indent_size = 1;
  }

  // Backwards compat with 1.3.x
  this.wrap_line_length = this._get_number('wrap_line_length', this._get_number('max_char'));

}

Options.prototype._get_array = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || [];
  if (typeof option_value === 'object') {
    if (option_value !== null && typeof option_value.concat === 'function') {
      result = option_value.concat();
    }
  } else if (typeof option_value === 'string') {
    result = option_value.split(/[^a-zA-Z0-9_\/\-]+/);
  }
  return result;
};

Options.prototype._get_boolean = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = option_value === undefined ? !!default_value : !!option_value;
  return result;
};

Options.prototype._get_characters = function(name, default_value) {
  var option_value = this.raw_options[name];
  var result = default_value || '';
  if (typeof option_value === 'string') {
    result = option_value.replace(/\\r/, '\r').replace(/\\n/, '\n').replace(/\\t/, '\t');
  }
  return result;
};

Options.prototype._get_number = function(name, default_value) {
  var option_value = this.raw_options[name];
  default_value = parseInt(default_value, 10);
  if (isNaN(default_value)) {
    default_value = 0;
  }
  var result = parseInt(option_value, 10);
  if (isNaN(result)) {
    result = default_value;
  }
  return result;
};

Options.prototype._get_selection = function(name, selection_list, default_value) {
  var result = this._get_selection_list(name, selection_list, default_value);
  if (result.length !== 1) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can only be one of the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result[0];
};


Options.prototype._get_selection_list = function(name, selection_list, default_value) {
  if (!selection_list || selection_list.length === 0) {
    throw new Error("Selection list cannot be empty.");
  }

  default_value = default_value || [selection_list[0]];
  if (!this._is_valid_selection(default_value, selection_list)) {
    throw new Error("Invalid Default Value!");
  }

  var result = this._get_array(name, default_value);
  if (!this._is_valid_selection(result, selection_list)) {
    throw new Error(
      "Invalid Option Value: The option '" + name + "' can contain only the following values:\n" +
      selection_list + "\nYou passed in: '" + this.raw_options[name] + "'");
  }

  return result;
};

Options.prototype._is_valid_selection = function(result, selection_list) {
  return result.length && selection_list.length &&
    !result.some(function(item) { return selection_list.indexOf(item) === -1; });
};


// merges child options up with the parent options object
// Example: obj = {a: 1, b: {a: 2}}
//          mergeOpts(obj, 'b')
//
//          Returns: {a: 2}
function _mergeOpts(allOptions, childFieldName) {
  var finalOpts = {};
  allOptions = _normalizeOpts(allOptions);
  var name;

  for (name in allOptions) {
    if (name !== childFieldName) {
      finalOpts[name] = allOptions[name];
    }
  }

  //merge in the per type settings for the childFieldName
  if (childFieldName && allOptions[childFieldName]) {
    for (name in allOptions[childFieldName]) {
      finalOpts[name] = allOptions[childFieldName][name];
    }
  }
  return finalOpts;
}

function _normalizeOpts(options) {
  var convertedOpts = {};
  var key;

  for (key in options) {
    var newKey = key.replace(/-/g, "_");
    convertedOpts[newKey] = options[key];
  }
  return convertedOpts;
}

var Options_1 = Options;
var normalizeOpts = _normalizeOpts;
var mergeOpts = _mergeOpts;

var options = {
	Options: Options_1,
	normalizeOpts: normalizeOpts,
	mergeOpts: mergeOpts
};

var BaseOptions = options.Options;

var validPositionValues = ['before-newline', 'after-newline', 'preserve-newline'];

function Options$1(options$$1) {
  BaseOptions.call(this, options$$1, 'js');

  // compatibility, re
  var raw_brace_style = this.raw_options.brace_style || null;
  if (raw_brace_style === "expand-strict") { //graceful handling of deprecated option
    this.raw_options.brace_style = "expand";
  } else if (raw_brace_style === "collapse-preserve-inline") { //graceful handling of deprecated option
    this.raw_options.brace_style = "collapse,preserve-inline";
  } else if (this.raw_options.braces_on_own_line !== undefined) { //graceful handling of deprecated option
    this.raw_options.brace_style = this.raw_options.braces_on_own_line ? "expand" : "collapse";
    // } else if (!raw_brace_style) { //Nothing exists to set it
    //   raw_brace_style = "collapse";
  }

  //preserve-inline in delimited string will trigger brace_preserve_inline, everything
  //else is considered a brace_style and the last one only will have an effect

  var brace_style_split = this._get_selection_list('brace_style', ['collapse', 'expand', 'end-expand', 'none', 'preserve-inline']);

  this.brace_preserve_inline = false; //Defaults in case one or other was not specified in meta-option
  this.brace_style = "collapse";

  for (var bs = 0; bs < brace_style_split.length; bs++) {
    if (brace_style_split[bs] === "preserve-inline") {
      this.brace_preserve_inline = true;
    } else {
      this.brace_style = brace_style_split[bs];
    }
  }

  this.unindent_chained_methods = this._get_boolean('unindent_chained_methods');
  this.break_chained_methods = this._get_boolean('break_chained_methods');
  this.space_in_paren = this._get_boolean('space_in_paren');
  this.space_in_empty_paren = this._get_boolean('space_in_empty_paren');
  this.jslint_happy = this._get_boolean('jslint_happy');
  this.space_after_anon_function = this._get_boolean('space_after_anon_function');
  this.space_after_named_function = this._get_boolean('space_after_named_function');
  this.keep_array_indentation = this._get_boolean('keep_array_indentation');
  this.space_before_conditional = this._get_boolean('space_before_conditional', true);
  this.unescape_strings = this._get_boolean('unescape_strings');
  this.e4x = this._get_boolean('e4x');
  this.comma_first = this._get_boolean('comma_first');
  this.operator_position = this._get_selection('operator_position', validPositionValues);

  // For testing of beautify preserve:start directive
  this.test_output_raw = this._get_boolean('test_output_raw');

  // force this._options.space_after_anon_function to true if this._options.jslint_happy
  if (this.jslint_happy) {
    this.space_after_anon_function = true;
  }

}
Options$1.prototype = new BaseOptions();



var Options_1$1 = Options$1;

var options$1 = {
	Options: Options_1$1
};

/*jshint node:true */

function InputScanner(input_string) {
  this.__input = input_string || '';
  this.__input_length = this.__input.length;
  this.__position = 0;
}

InputScanner.prototype.restart = function() {
  this.__position = 0;
};

InputScanner.prototype.back = function() {
  if (this.__position > 0) {
    this.__position -= 1;
  }
};

InputScanner.prototype.hasNext = function() {
  return this.__position < this.__input_length;
};

InputScanner.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__input.charAt(this.__position);
    this.__position += 1;
  }
  return val;
};

InputScanner.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__input_length) {
    val = this.__input.charAt(index);
  }
  return val;
};

InputScanner.prototype.test = function(pattern, index) {
  index = index || 0;
  index += this.__position;
  pattern.lastIndex = index;

  if (index >= 0 && index < this.__input_length) {
    var pattern_match = pattern.exec(this.__input);
    return pattern_match && pattern_match.index === index;
  } else {
    return false;
  }
};

InputScanner.prototype.testChar = function(pattern, index) {
  // test one character regex match
  var val = this.peek(index);
  return val !== null && pattern.test(val);
};

InputScanner.prototype.match = function(pattern) {
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);
  if (pattern_match && pattern_match.index === this.__position) {
    this.__position += pattern_match[0].length;
  } else {
    pattern_match = null;
  }
  return pattern_match;
};

InputScanner.prototype.read = function(pattern) {
  var val = '';
  var match = this.match(pattern);
  if (match) {
    val = match[0];
  }
  return val;
};

InputScanner.prototype.readUntil = function(pattern, include_match) {
  var val = '';
  var match_index = this.__position;
  pattern.lastIndex = this.__position;
  var pattern_match = pattern.exec(this.__input);
  if (pattern_match) {
    if (include_match) {
      match_index = pattern_match.index + pattern_match[0].length;
    } else {
      match_index = pattern_match.index;
    }
  } else {
    match_index = this.__input_length;
  }

  val = this.__input.substring(this.__position, match_index);
  this.__position = match_index;
  return val;
};

InputScanner.prototype.readUntilAfter = function(pattern) {
  return this.readUntil(pattern, true);
};

/* css beautifier legacy helpers */
InputScanner.prototype.peekUntilAfter = function(pattern) {
  var start = this.__position;
  var val = this.readUntilAfter(pattern);
  this.__position = start;
  return val;
};

InputScanner.prototype.lookBack = function(testVal) {
  var start = this.__position - 1;
  return start >= testVal.length && this.__input.substring(start - testVal.length, start)
    .toLowerCase() === testVal;
};


var InputScanner_1 = InputScanner;

var inputscanner = {
	InputScanner: InputScanner_1
};

/*jshint node:true */

function TokenStream(parent_token) {
  // private
  this.__tokens = [];
  this.__tokens_length = this.__tokens.length;
  this.__position = 0;
  this.__parent_token = parent_token;
}

TokenStream.prototype.restart = function() {
  this.__position = 0;
};

TokenStream.prototype.isEmpty = function() {
  return this.__tokens_length === 0;
};

TokenStream.prototype.hasNext = function() {
  return this.__position < this.__tokens_length;
};

TokenStream.prototype.next = function() {
  var val = null;
  if (this.hasNext()) {
    val = this.__tokens[this.__position];
    this.__position += 1;
  }
  return val;
};

TokenStream.prototype.peek = function(index) {
  var val = null;
  index = index || 0;
  index += this.__position;
  if (index >= 0 && index < this.__tokens_length) {
    val = this.__tokens[index];
  }
  return val;
};

TokenStream.prototype.add = function(token) {
  if (this.__parent_token) {
    token.parent = this.__parent_token;
  }
  this.__tokens.push(token);
  this.__tokens_length += 1;
};

var TokenStream_1 = TokenStream;

var tokenstream = {
	TokenStream: TokenStream_1
};

var InputScanner$1 = inputscanner.InputScanner;
var Token$1 = token.Token;
var TokenStream$1 = tokenstream.TokenStream;

var TOKEN = {
  START: 'TK_START',
  RAW: 'TK_RAW',
  EOF: 'TK_EOF'
};

var Tokenizer = function(input_string, options) {
  this._input = new InputScanner$1(input_string);
  this._options = options || {};
  this.__tokens = null;
  this.__newline_count = 0;
  this.__whitespace_before_token = '';

  this._whitespace_pattern = /[\n\r\t ]+/g;
  this._newline_pattern = /([^\n\r]*)(\r\n|[\n\r])?/g;
};

Tokenizer.prototype.tokenize = function() {
  this._input.restart();
  this.__tokens = new TokenStream$1();

  this._reset();

  var current;
  var previous = new Token$1(TOKEN.START, '');
  var open_token = null;
  var open_stack = [];
  var comments = new TokenStream$1();

  while (previous.type !== TOKEN.EOF) {
    current = this._get_next_token(previous, open_token);
    while (this._is_comment(current)) {
      comments.add(current);
      current = this._get_next_token(previous, open_token);
    }

    if (!comments.isEmpty()) {
      current.comments_before = comments;
      comments = new TokenStream$1();
    }

    current.parent = open_token;

    if (this._is_opening(current)) {
      open_stack.push(open_token);
      open_token = current;
    } else if (open_token && this._is_closing(current, open_token)) {
      current.opened = open_token;
      open_token.closed = current;
      open_token = open_stack.pop();
      current.parent = open_token;
    }

    current.previous = previous;
    previous.next = current;

    this.__tokens.add(current);
    previous = current;
  }

  return this.__tokens;
};


Tokenizer.prototype._is_first_token = function() {
  return this.__tokens.isEmpty();
};

Tokenizer.prototype._reset = function() {};

Tokenizer.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  this._readWhitespace();
  var resulting_string = this._input.read(/.+/g);
  if (resulting_string) {
    return this._create_token(TOKEN.RAW, resulting_string);
  } else {
    return this._create_token(TOKEN.EOF, '');
  }
};

Tokenizer.prototype._is_comment = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_opening = function(current_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._is_closing = function(current_token, open_token) { // jshint unused:false
  return false;
};

Tokenizer.prototype._create_token = function(type, text) {
  var token$$1 = new Token$1(type, text, this.__newline_count, this.__whitespace_before_token);
  this.__newline_count = 0;
  this.__whitespace_before_token = '';
  return token$$1;
};

Tokenizer.prototype._readWhitespace = function() {
  var resulting_string = this._input.read(this._whitespace_pattern);
  if (resulting_string === ' ') {
    this.__whitespace_before_token = resulting_string;
  } else if (resulting_string !== '') {
    this._newline_pattern.lastIndex = 0;
    var nextMatch = this._newline_pattern.exec(resulting_string);
    while (nextMatch[2]) {
      this.__newline_count += 1;
      nextMatch = this._newline_pattern.exec(resulting_string);
    }
    this.__whitespace_before_token = nextMatch[1];
  }
};



var Tokenizer_1 = Tokenizer;
var TOKEN_1 = TOKEN;

var tokenizer = {
	Tokenizer: Tokenizer_1,
	TOKEN: TOKEN_1
};

/*jshint node:true */

function Directives(start_block_pattern, end_block_pattern) {
  start_block_pattern = typeof start_block_pattern === 'string' ? start_block_pattern : start_block_pattern.source;
  end_block_pattern = typeof end_block_pattern === 'string' ? end_block_pattern : end_block_pattern.source;
  this.__directives_block_pattern = new RegExp(start_block_pattern + / beautify( \w+[:]\w+)+ /.source + end_block_pattern, 'g');
  this.__directive_pattern = / (\w+)[:](\w+)/g;

  this.__directives_end_ignore_pattern = new RegExp('(?:[\\s\\S]*?)((?:' + start_block_pattern + /\sbeautify\signore:end\s/.source + end_block_pattern + ')|$)', 'g');
}

Directives.prototype.get_directives = function(text) {
  if (!text.match(this.__directives_block_pattern)) {
    return null;
  }

  var directives = {};
  this.__directive_pattern.lastIndex = 0;
  var directive_match = this.__directive_pattern.exec(text);

  while (directive_match) {
    directives[directive_match[1]] = directive_match[2];
    directive_match = this.__directive_pattern.exec(text);
  }

  return directives;
};

Directives.prototype.readIgnored = function(input) {
  return input.read(this.__directives_end_ignore_pattern);
};


var Directives_1 = Directives;

var directives = {
	Directives: Directives_1
};

var InputScanner$2 = inputscanner.InputScanner;
var BaseTokenizer = tokenizer.Tokenizer;
var BASETOKEN = tokenizer.TOKEN;
var Directives$1 = directives.Directives;


function in_array(what, arr) {
  return arr.indexOf(what) !== -1;
}


var TOKEN$1 = {
  START_EXPR: 'TK_START_EXPR',
  END_EXPR: 'TK_END_EXPR',
  START_BLOCK: 'TK_START_BLOCK',
  END_BLOCK: 'TK_END_BLOCK',
  WORD: 'TK_WORD',
  RESERVED: 'TK_RESERVED',
  SEMICOLON: 'TK_SEMICOLON',
  STRING: 'TK_STRING',
  EQUALS: 'TK_EQUALS',
  OPERATOR: 'TK_OPERATOR',
  COMMA: 'TK_COMMA',
  BLOCK_COMMENT: 'TK_BLOCK_COMMENT',
  COMMENT: 'TK_COMMENT',
  DOT: 'TK_DOT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN.START,
  RAW: BASETOKEN.RAW,
  EOF: BASETOKEN.EOF
};


var directives_core = new Directives$1(/\/\*/, /\*\//);

var number_pattern = /0[xX][0123456789abcdefABCDEF]*|0[oO][01234567]*|0[bB][01]*|\d+n|(?:\.\d+|\d+\.?\d*)(?:[eE][+-]?\d+)?/g;

var digit = /[0-9]/;

// Dot "." must be distinguished from "..." and decimal
var dot_pattern = /[^\d\.]/;

var positionable_operators = (
  ">>> === !== " +
  "<< && >= ** != == <= >> || " +
  "< / - + > : & % ? ^ | *").split(' ');

// IMPORTANT: this must be sorted longest to shortest or tokenizing many not work.
// Also, you must update possitionable operators separately from punct
var punct =
  ">>>= " +
  "... >>= <<= === >>> !== **= " +
  "=> ^= :: /= << <= == && -= >= >> != -- += ** || ++ %= &= *= |= " +
  "= ! ? > < : / ^ - + * & % ~ |";

punct = punct.replace(/[-[\]{}()*+?.,\\^$|#]/g, "\\$&");
punct = punct.replace(/ /g, '|');

var punct_pattern = new RegExp(punct, 'g');
var shebang_pattern = /#![^\n\r\u2028\u2029]*(?:\r\n|[\n\r\u2028\u2029])?/g;
var include_pattern = /#include[^\n\r\u2028\u2029]*(?:\r\n|[\n\r\u2028\u2029])?/g;

// words which should always start on new line.
var line_starters = 'continue,try,throw,return,var,let,const,if,switch,case,default,for,while,break,function,import,export'.split(',');
var reserved_words = line_starters.concat(['do', 'in', 'of', 'else', 'get', 'set', 'new', 'catch', 'finally', 'typeof', 'yield', 'async', 'await', 'from', 'as']);
var reserved_word_pattern = new RegExp('^(?:' + reserved_words.join('|') + ')$');

//  /* ... */ comment ends with nearest */ or end of file
var block_comment_pattern = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;

// comment ends just before nearest linefeed or end of file
var comment_pattern = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

var template_pattern = /(?:(?:<\?php|<\?=)[\s\S]*?\?>)|(?:<%[\s\S]*?%>)/g;

var in_html_comment;

var Tokenizer$1 = function(input_string, options) {
  BaseTokenizer.call(this, input_string, options);

  this._whitespace_pattern = /[\n\r\u2028\u2029\t\u000B\u00A0\u1680\u180e\u2000-\u200a\u202f\u205f\u3000\ufeff ]+/g;
  this._newline_pattern = /([^\n\r\u2028\u2029]*)(\r\n|[\n\r\u2028\u2029])?/g;
};
Tokenizer$1.prototype = new BaseTokenizer();

Tokenizer$1.prototype._is_comment = function(current_token) {
  return current_token.type === TOKEN$1.COMMENT || current_token.type === TOKEN$1.BLOCK_COMMENT || current_token.type === TOKEN$1.UNKNOWN;
};

Tokenizer$1.prototype._is_opening = function(current_token) {
  return current_token.type === TOKEN$1.START_BLOCK || current_token.type === TOKEN$1.START_EXPR;
};

Tokenizer$1.prototype._is_closing = function(current_token, open_token) {
  return (current_token.type === TOKEN$1.END_BLOCK || current_token.type === TOKEN$1.END_EXPR) &&
    (open_token && (
      (current_token.text === ']' && open_token.text === '[') ||
      (current_token.text === ')' && open_token.text === '(') ||
      (current_token.text === '}' && open_token.text === '{')));
};

Tokenizer$1.prototype._reset = function() {
  in_html_comment = false;
};

Tokenizer$1.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  this._readWhitespace();
  var token = null;
  var c = this._input.peek();

  token = token || this._read_singles(c);
  token = token || this._read_word(previous_token);
  token = token || this._read_comment(c);
  token = token || this._read_string(c);
  token = token || this._read_regexp(c, previous_token);
  token = token || this._read_xml(c, previous_token);
  token = token || this._read_non_javascript(c);
  token = token || this._read_punctuation();
  token = token || this._create_token(TOKEN$1.UNKNOWN, this._input.next());

  return token;
};

Tokenizer$1.prototype._read_word = function(previous_token) {
  var resulting_string;
  resulting_string = this._input.read(acorn.identifier);
  if (resulting_string !== '') {
    if (!(previous_token.type === TOKEN$1.DOT ||
        (previous_token.type === TOKEN$1.RESERVED && (previous_token.text === 'set' || previous_token.text === 'get'))) &&
      reserved_word_pattern.test(resulting_string)) {
      if (resulting_string === 'in' || resulting_string === 'of') { // hack for 'in' and 'of' operators
        return this._create_token(TOKEN$1.OPERATOR, resulting_string);
      }
      return this._create_token(TOKEN$1.RESERVED, resulting_string);
    }

    return this._create_token(TOKEN$1.WORD, resulting_string);
  }

  resulting_string = this._input.read(number_pattern);
  if (resulting_string !== '') {
    return this._create_token(TOKEN$1.WORD, resulting_string);
  }
};

Tokenizer$1.prototype._read_singles = function(c) {
  var token = null;
  if (c === null) {
    token = this._create_token(TOKEN$1.EOF, '');
  } else if (c === '(' || c === '[') {
    token = this._create_token(TOKEN$1.START_EXPR, c);
  } else if (c === ')' || c === ']') {
    token = this._create_token(TOKEN$1.END_EXPR, c);
  } else if (c === '{') {
    token = this._create_token(TOKEN$1.START_BLOCK, c);
  } else if (c === '}') {
    token = this._create_token(TOKEN$1.END_BLOCK, c);
  } else if (c === ';') {
    token = this._create_token(TOKEN$1.SEMICOLON, c);
  } else if (c === '.' && dot_pattern.test(this._input.peek(1))) {
    token = this._create_token(TOKEN$1.DOT, c);
  } else if (c === ',') {
    token = this._create_token(TOKEN$1.COMMA, c);
  }

  if (token) {
    this._input.next();
  }
  return token;
};

Tokenizer$1.prototype._read_punctuation = function() {
  var resulting_string = this._input.read(punct_pattern);

  if (resulting_string !== '') {
    if (resulting_string === '=') {
      return this._create_token(TOKEN$1.EQUALS, resulting_string);
    } else {
      return this._create_token(TOKEN$1.OPERATOR, resulting_string);
    }
  }
};

Tokenizer$1.prototype._read_non_javascript = function(c) {
  var resulting_string = '';

  if (c === '#') {
    if (this._is_first_token()) {
      resulting_string = this._input.read(shebang_pattern);

      if (resulting_string) {
        return this._create_token(TOKEN$1.UNKNOWN, resulting_string.trim() + '\n');
      }
    }

    // handles extendscript #includes
    resulting_string = this._input.read(include_pattern);

    if (resulting_string) {
      return this._create_token(TOKEN$1.UNKNOWN, resulting_string.trim() + '\n');
    }

    c = this._input.next();

    // Spidermonkey-specific sharp variables for circular references. Considered obsolete.
    var sharp = '#';
    if (this._input.hasNext() && this._input.testChar(digit)) {
      do {
        c = this._input.next();
        sharp += c;
      } while (this._input.hasNext() && c !== '#' && c !== '=');
      if (c === '#') ; else if (this._input.peek() === '[' && this._input.peek(1) === ']') {
        sharp += '[]';
        this._input.next();
        this._input.next();
      } else if (this._input.peek() === '{' && this._input.peek(1) === '}') {
        sharp += '{}';
        this._input.next();
        this._input.next();
      }
      return this._create_token(TOKEN$1.WORD, sharp);
    }

    this._input.back();

  } else if (c === '<') {
    if (this._input.peek(1) === '?' || this._input.peek(1) === '%') {
      resulting_string = this._input.read(template_pattern);
      if (resulting_string) {
        resulting_string = resulting_string.replace(acorn.allLineBreaks, '\n');
        return this._create_token(TOKEN$1.STRING, resulting_string);
      }
    } else if (this._input.match(/<\!--/g)) {
      c = '<!--';
      while (this._input.hasNext() && !this._input.testChar(acorn.newline)) {
        c += this._input.next();
      }
      in_html_comment = true;
      return this._create_token(TOKEN$1.COMMENT, c);
    }
  } else if (c === '-' && in_html_comment && this._input.match(/-->/g)) {
    in_html_comment = false;
    return this._create_token(TOKEN$1.COMMENT, '-->');
  }

  return null;
};

Tokenizer$1.prototype._read_comment = function(c) {
  var token = null;
  if (c === '/') {
    var comment = '';
    if (this._input.peek(1) === '*') {
      // peek for comment /* ... */
      comment = this._input.read(block_comment_pattern);
      var directives$$1 = directives_core.get_directives(comment);
      if (directives$$1 && directives$$1.ignore === 'start') {
        comment += directives_core.readIgnored(this._input);
      }
      comment = comment.replace(acorn.allLineBreaks, '\n');
      token = this._create_token(TOKEN$1.BLOCK_COMMENT, comment);
      token.directives = directives$$1;
    } else if (this._input.peek(1) === '/') {
      // peek for comment // ...
      comment = this._input.read(comment_pattern);
      token = this._create_token(TOKEN$1.COMMENT, comment);
    }
  }
  return token;
};

Tokenizer$1.prototype._read_string = function(c) {
  if (c === '`' || c === "'" || c === '"') {
    var resulting_string = this._input.next();
    this.has_char_escapes = false;

    if (c === '`') {
      resulting_string += this._read_string_recursive('`', true, '${');
    } else {
      resulting_string += this._read_string_recursive(c);
    }

    if (this.has_char_escapes && this._options.unescape_strings) {
      resulting_string = unescape_string(resulting_string);
    }
    if (this._input.peek() === c) {
      resulting_string += this._input.next();
    }

    return this._create_token(TOKEN$1.STRING, resulting_string);
  }

  return null;
};

Tokenizer$1.prototype._allow_regexp_or_xml = function(previous_token) {
  // regex and xml can only appear in specific locations during parsing
  return (previous_token.type === TOKEN$1.RESERVED && in_array(previous_token.text, ['return', 'case', 'throw', 'else', 'do', 'typeof', 'yield'])) ||
    (previous_token.type === TOKEN$1.END_EXPR && previous_token.text === ')' &&
      previous_token.opened.previous.type === TOKEN$1.RESERVED && in_array(previous_token.opened.previous.text, ['if', 'while', 'for'])) ||
    (in_array(previous_token.type, [TOKEN$1.COMMENT, TOKEN$1.START_EXPR, TOKEN$1.START_BLOCK, TOKEN$1.START,
      TOKEN$1.END_BLOCK, TOKEN$1.OPERATOR, TOKEN$1.EQUALS, TOKEN$1.EOF, TOKEN$1.SEMICOLON, TOKEN$1.COMMA
    ]));
};

Tokenizer$1.prototype._read_regexp = function(c, previous_token) {

  if (c === '/' && this._allow_regexp_or_xml(previous_token)) {
    // handle regexp
    //
    var resulting_string = this._input.next();
    var esc = false;

    var in_char_class = false;
    while (this._input.hasNext() &&
      ((esc || in_char_class || this._input.peek() !== c) &&
        !this._input.testChar(acorn.newline))) {
      resulting_string += this._input.peek();
      if (!esc) {
        esc = this._input.peek() === '\\';
        if (this._input.peek() === '[') {
          in_char_class = true;
        } else if (this._input.peek() === ']') {
          in_char_class = false;
        }
      } else {
        esc = false;
      }
      this._input.next();
    }

    if (this._input.peek() === c) {
      resulting_string += this._input.next();

      // regexps may have modifiers /regexp/MOD , so fetch those, too
      // Only [gim] are valid, but if the user puts in garbage, do what we can to take it.
      resulting_string += this._input.read(acorn.identifier);
    }
    return this._create_token(TOKEN$1.STRING, resulting_string);
  }
  return null;
};


var startXmlRegExp = /<()([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;
var xmlRegExp = /[\s\S]*?<(\/?)([-a-zA-Z:0-9_.]+|{[\s\S]+?}|!\[CDATA\[[\s\S]*?\]\])(\s+{[\s\S]+?}|\s+[-a-zA-Z:0-9_.]+|\s+[-a-zA-Z:0-9_.]+\s*=\s*('[^']*'|"[^"]*"|{[\s\S]+?}))*\s*(\/?)\s*>/g;

Tokenizer$1.prototype._read_xml = function(c, previous_token) {

  if (this._options.e4x && c === "<" && this._input.test(startXmlRegExp) && this._allow_regexp_or_xml(previous_token)) {
    // handle e4x xml literals
    //
    var xmlStr = '';
    var match = this._input.match(startXmlRegExp);
    if (match) {
      // Trim root tag to attempt to
      var rootTag = match[2].replace(/^{\s+/, '{').replace(/\s+}$/, '}');
      var isCurlyRoot = rootTag.indexOf('{') === 0;
      var depth = 0;
      while (match) {
        var isEndTag = !!match[1];
        var tagName = match[2];
        var isSingletonTag = (!!match[match.length - 1]) || (tagName.slice(0, 8) === "![CDATA[");
        if (!isSingletonTag &&
          (tagName === rootTag || (isCurlyRoot && tagName.replace(/^{\s+/, '{').replace(/\s+}$/, '}')))) {
          if (isEndTag) {
            --depth;
          } else {
            ++depth;
          }
        }
        xmlStr += match[0];
        if (depth <= 0) {
          break;
        }
        match = this._input.match(xmlRegExp);
      }
      // if we didn't close correctly, keep unformatted.
      if (!match) {
        xmlStr += this._input.match(/[\s\S]*/g)[0];
      }
      xmlStr = xmlStr.replace(acorn.allLineBreaks, '\n');
      return this._create_token(TOKEN$1.STRING, xmlStr);
    }
  }

  return null;
};

function unescape_string(s) {
  // You think that a regex would work for this
  // return s.replace(/\\x([0-9a-f]{2})/gi, function(match, val) {
  //         return String.fromCharCode(parseInt(val, 16));
  //     })
  // However, dealing with '\xff', '\\xff', '\\\xff' makes this more fun.
  var out = '',
    escaped = 0;

  var input_scan = new InputScanner$2(s);
  var matched = null;

  while (input_scan.hasNext()) {
    // Keep any whitespace, non-slash characters
    // also keep slash pairs.
    matched = input_scan.match(/([\s]|[^\\]|\\\\)+/g);

    if (matched) {
      out += matched[0];
    }

    if (input_scan.peek() === '\\') {
      input_scan.next();
      if (input_scan.peek() === 'x') {
        matched = input_scan.match(/x([0-9A-Fa-f]{2})/g);
      } else if (input_scan.peek() === 'u') {
        matched = input_scan.match(/u([0-9A-Fa-f]{4})/g);
      } else {
        out += '\\';
        if (input_scan.hasNext()) {
          out += input_scan.next();
        }
        continue;
      }

      // If there's some error decoding, return the original string
      if (!matched) {
        return s;
      }

      escaped = parseInt(matched[1], 16);

      if (escaped > 0x7e && escaped <= 0xff && matched[0].indexOf('x') === 0) {
        // we bail out on \x7f..\xff,
        // leaving whole string escaped,
        // as it's probably completely binary
        return s;
      } else if (escaped >= 0x00 && escaped < 0x20) {
        // leave 0x00...0x1f escaped
        out += '\\' + matched[0];
        continue;
      } else if (escaped === 0x22 || escaped === 0x27 || escaped === 0x5c) {
        // single-quote, apostrophe, backslash - escape these
        out += '\\' + String.fromCharCode(escaped);
      } else {
        out += String.fromCharCode(escaped);
      }
    }
  }

  return out;
}

// handle string
//
Tokenizer$1.prototype._read_string_recursive = function(delimiter, allow_unescaped_newlines, start_sub) {
  // Template strings can travers lines without escape characters.
  // Other strings cannot
  var current_char;
  var resulting_string = '';
  var esc = false;
  while (this._input.hasNext()) {
    current_char = this._input.peek();
    if (!(esc || (current_char !== delimiter &&
        (allow_unescaped_newlines || !acorn.newline.test(current_char))))) {
      break;
    }

    // Handle \r\n linebreaks after escapes or in template strings
    if ((esc || allow_unescaped_newlines) && acorn.newline.test(current_char)) {
      if (current_char === '\r' && this._input.peek(1) === '\n') {
        this._input.next();
        current_char = this._input.peek();
      }
      resulting_string += '\n';
    } else {
      resulting_string += current_char;
    }

    if (esc) {
      if (current_char === 'x' || current_char === 'u') {
        this.has_char_escapes = true;
      }
      esc = false;
    } else {
      esc = current_char === '\\';
    }

    this._input.next();

    if (start_sub && resulting_string.indexOf(start_sub, resulting_string.length - start_sub.length) !== -1) {
      if (delimiter === '`') {
        resulting_string += this._read_string_recursive('}', allow_unescaped_newlines, '`');
      } else {
        resulting_string += this._read_string_recursive('`', allow_unescaped_newlines, '${');
      }

      if (this._input.hasNext()) {
        resulting_string += this._input.next();
      }
    }
  }

  return resulting_string;
};

var Tokenizer_1$1 = Tokenizer$1;
var TOKEN_1$1 = TOKEN$1;
var positionable_operators_1 = positionable_operators.slice();
var line_starters_1 = line_starters.slice();

var tokenizer$1 = {
	Tokenizer: Tokenizer_1$1,
	TOKEN: TOKEN_1$1,
	positionable_operators: positionable_operators_1,
	line_starters: line_starters_1
};

var Output$1 = output.Output;
var Token$2 = token.Token;

var Options$2 = options$1.Options;
var Tokenizer$2 = tokenizer$1.Tokenizer;
var line_starters$1 = tokenizer$1.line_starters;
var positionable_operators$1 = tokenizer$1.positionable_operators;
var TOKEN$2 = tokenizer$1.TOKEN;

function remove_redundant_indentation(output$$1, frame) {
  // This implementation is effective but has some issues:
  //     - can cause line wrap to happen too soon due to indent removal
  //           after wrap points are calculated
  // These issues are minor compared to ugly indentation.

  if (frame.multiline_frame ||
    frame.mode === MODE.ForInitializer ||
    frame.mode === MODE.Conditional) {
    return;
  }

  // remove one indent from each line inside this section
  output$$1.remove_indent(frame.start_line_index);
}

function in_array$1(what, arr) {
  return arr.indexOf(what) !== -1;
}

function ltrim(s) {
  return s.replace(/^\s+/g, '');
}

function generateMapFromStrings(list) {
  var result = {};
  for (var x = 0; x < list.length; x++) {
    // make the mapped names underscored instead of dash
    result[list[x].replace(/-/g, '_')] = list[x];
  }
  return result;
}

function reserved_word(token$$1, word) {
  return token$$1 && token$$1.type === TOKEN$2.RESERVED && token$$1.text === word;
}

function reserved_array(token$$1, words) {
  return token$$1 && token$$1.type === TOKEN$2.RESERVED && in_array$1(token$$1.text, words);
}
// Unsure of what they mean, but they work. Worth cleaning up in future.
var special_words = ['case', 'return', 'do', 'if', 'throw', 'else', 'await', 'break', 'continue', 'async'];

var validPositionValues$1 = ['before-newline', 'after-newline', 'preserve-newline'];

// Generate map from array
var OPERATOR_POSITION = generateMapFromStrings(validPositionValues$1);

var OPERATOR_POSITION_BEFORE_OR_PRESERVE = [OPERATOR_POSITION.before_newline, OPERATOR_POSITION.preserve_newline];

var MODE = {
  BlockStatement: 'BlockStatement', // 'BLOCK'
  Statement: 'Statement', // 'STATEMENT'
  ObjectLiteral: 'ObjectLiteral', // 'OBJECT',
  ArrayLiteral: 'ArrayLiteral', //'[EXPRESSION]',
  ForInitializer: 'ForInitializer', //'(FOR-EXPRESSION)',
  Conditional: 'Conditional', //'(COND-EXPRESSION)',
  Expression: 'Expression' //'(EXPRESSION)'
};

// we could use just string.split, but
// IE doesn't like returning empty strings
function split_linebreaks(s) {
  //return s.split(/\x0d\x0a|\x0a/);

  s = s.replace(acorn.allLineBreaks, '\n');
  var out = [],
    idx = s.indexOf("\n");
  while (idx !== -1) {
    out.push(s.substring(0, idx));
    s = s.substring(idx + 1);
    idx = s.indexOf("\n");
  }
  if (s.length) {
    out.push(s);
  }
  return out;
}

function is_array(mode) {
  return mode === MODE.ArrayLiteral;
}

function is_expression(mode) {
  return in_array$1(mode, [MODE.Expression, MODE.ForInitializer, MODE.Conditional]);
}

function all_lines_start_with(lines, c) {
  for (var i = 0; i < lines.length; i++) {
    var line = lines[i].trim();
    if (line.charAt(0) !== c) {
      return false;
    }
  }
  return true;
}

function each_line_matches_indent(lines, indent) {
  var i = 0,
    len = lines.length,
    line;
  for (; i < len; i++) {
    line = lines[i];
    // allow empty lines to pass through
    if (line && line.indexOf(indent) !== 0) {
      return false;
    }
  }
  return true;
}


function Beautifier(source_text, options) {
  options = options || {};
  this._source_text = source_text || '';

  this._output = null;
  this._tokens = null;
  this._last_last_text = null;
  this._flags = null;
  this._previous_flags = null;

  this._flag_store = null;
  this._options = new Options$2(options);
}

Beautifier.prototype.create_flags = function(flags_base, mode) {
  var next_indent_level = 0;
  if (flags_base) {
    next_indent_level = flags_base.indentation_level;
    if (!this._output.just_added_newline() &&
      flags_base.line_indent_level > next_indent_level) {
      next_indent_level = flags_base.line_indent_level;
    }
  }

  var next_flags = {
    mode: mode,
    parent: flags_base,
    last_token: flags_base ? flags_base.last_token : new Token$2(TOKEN$2.START_BLOCK, ''), // last token text
    last_word: flags_base ? flags_base.last_word : '', // last TOKEN.WORD passed
    declaration_statement: false,
    declaration_assignment: false,
    multiline_frame: false,
    inline_frame: false,
    if_block: false,
    else_block: false,
    do_block: false,
    do_while: false,
    import_block: false,
    in_case_statement: false, // switch(..){ INSIDE HERE }
    in_case: false, // we're on the exact line with "case 0:"
    case_body: false, // the indented case-action block
    indentation_level: next_indent_level,
    line_indent_level: flags_base ? flags_base.line_indent_level : next_indent_level,
    start_line_index: this._output.get_line_number(),
    ternary_depth: 0
  };
  return next_flags;
};

Beautifier.prototype._reset = function(source_text) {
  var baseIndentString = source_text.match(/^[\t ]*/)[0];

  this._last_last_text = ''; // pre-last token text
  this._output = new Output$1(this._options, baseIndentString);

  // If testing the ignore directive, start with output disable set to true
  this._output.raw = this._options.test_output_raw;


  // Stack of parsing/formatting states, including MODE.
  // We tokenize, parse, and output in an almost purely a forward-only stream of token input
  // and formatted output.  This makes the beautifier less accurate than full parsers
  // but also far more tolerant of syntax errors.
  //
  // For example, the default mode is MODE.BlockStatement. If we see a '{' we push a new frame of type
  // MODE.BlockStatement on the the stack, even though it could be object literal.  If we later
  // encounter a ":", we'll switch to to MODE.ObjectLiteral.  If we then see a ";",
  // most full parsers would die, but the beautifier gracefully falls back to
  // MODE.BlockStatement and continues on.
  this._flag_store = [];
  this.set_mode(MODE.BlockStatement);
  var tokenizer = new Tokenizer$2(source_text, this._options);
  this._tokens = tokenizer.tokenize();
  return source_text;
};

Beautifier.prototype.beautify = function() {
  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var sweet_code;
  var source_text = this._reset(this._source_text);

  var eol = this._options.eol;
  if (this._options.eol === 'auto') {
    eol = '\n';
    if (source_text && acorn.lineBreak.test(source_text || '')) {
      eol = source_text.match(acorn.lineBreak)[0];
    }
  }

  var current_token = this._tokens.next();
  while (current_token) {
    this.handle_token(current_token);

    this._last_last_text = this._flags.last_token.text;
    this._flags.last_token = current_token;

    current_token = this._tokens.next();
  }

  sweet_code = this._output.get_code(eol);

  return sweet_code;
};

Beautifier.prototype.handle_token = function(current_token, preserve_statement_flags) {
  if (current_token.type === TOKEN$2.START_EXPR) {
    this.handle_start_expr(current_token);
  } else if (current_token.type === TOKEN$2.END_EXPR) {
    this.handle_end_expr(current_token);
  } else if (current_token.type === TOKEN$2.START_BLOCK) {
    this.handle_start_block(current_token);
  } else if (current_token.type === TOKEN$2.END_BLOCK) {
    this.handle_end_block(current_token);
  } else if (current_token.type === TOKEN$2.WORD) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN$2.RESERVED) {
    this.handle_word(current_token);
  } else if (current_token.type === TOKEN$2.SEMICOLON) {
    this.handle_semicolon(current_token);
  } else if (current_token.type === TOKEN$2.STRING) {
    this.handle_string(current_token);
  } else if (current_token.type === TOKEN$2.EQUALS) {
    this.handle_equals(current_token);
  } else if (current_token.type === TOKEN$2.OPERATOR) {
    this.handle_operator(current_token);
  } else if (current_token.type === TOKEN$2.COMMA) {
    this.handle_comma(current_token);
  } else if (current_token.type === TOKEN$2.BLOCK_COMMENT) {
    this.handle_block_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN$2.COMMENT) {
    this.handle_comment(current_token, preserve_statement_flags);
  } else if (current_token.type === TOKEN$2.DOT) {
    this.handle_dot(current_token);
  } else if (current_token.type === TOKEN$2.EOF) {
    this.handle_eof(current_token);
  } else if (current_token.type === TOKEN$2.UNKNOWN) {
    this.handle_unknown(current_token, preserve_statement_flags);
  } else {
    this.handle_unknown(current_token, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_whitespace_and_comments = function(current_token, preserve_statement_flags) {
  var newlines = current_token.newlines;
  var keep_whitespace = this._options.keep_array_indentation && is_array(this._flags.mode);

  if (current_token.comments_before) {
    var comment_token = current_token.comments_before.next();
    while (comment_token) {
      // The cleanest handling of inline comments is to treat them as though they aren't there.
      // Just continue formatting and the behavior should be logical.
      // Also ignore unknown tokens.  Again, this should result in better behavior.
      this.handle_whitespace_and_comments(comment_token, preserve_statement_flags);
      this.handle_token(comment_token, preserve_statement_flags);
      comment_token = current_token.comments_before.next();
    }
  }

  if (keep_whitespace) {
    for (var i = 0; i < newlines; i += 1) {
      this.print_newline(i > 0, preserve_statement_flags);
    }
  } else {
    if (this._options.max_preserve_newlines && newlines > this._options.max_preserve_newlines) {
      newlines = this._options.max_preserve_newlines;
    }

    if (this._options.preserve_newlines) {
      if (newlines > 1) {
        this.print_newline(false, preserve_statement_flags);
        for (var j = 1; j < newlines; j += 1) {
          this.print_newline(true, preserve_statement_flags);
        }
      }
    }
  }

};

var newline_restricted_tokens = ['async', 'break', 'continue', 'return', 'throw', 'yield'];

Beautifier.prototype.allow_wrap_or_preserved_newline = function(current_token, force_linewrap) {
  force_linewrap = (force_linewrap === undefined) ? false : force_linewrap;

  // Never wrap the first token on a line
  if (this._output.just_added_newline()) {
    return;
  }

  var shouldPreserveOrForce = (this._options.preserve_newlines && current_token.newlines) || force_linewrap;
  var operatorLogicApplies = in_array$1(this._flags.last_token.text, positionable_operators$1) ||
    in_array$1(current_token.text, positionable_operators$1);

  if (operatorLogicApplies) {
    var shouldPrintOperatorNewline = (
        in_array$1(this._flags.last_token.text, positionable_operators$1) &&
        in_array$1(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)
      ) ||
      in_array$1(current_token.text, positionable_operators$1);
    shouldPreserveOrForce = shouldPreserveOrForce && shouldPrintOperatorNewline;
  }

  if (shouldPreserveOrForce) {
    this.print_newline(false, true);
  } else if (this._options.wrap_line_length) {
    if (reserved_array(this._flags.last_token, newline_restricted_tokens)) {
      // These tokens should never have a newline inserted
      // between them and the following expression.
      return;
    }
    var proposed_line_length = this._output.current_line.get_character_count() + current_token.text.length +
      (this._output.space_before_token ? 1 : 0);
    if (proposed_line_length >= this._options.wrap_line_length) {
      this.print_newline(false, true);
    }
  }
};

Beautifier.prototype.print_newline = function(force_newline, preserve_statement_flags) {
  if (!preserve_statement_flags) {
    if (this._flags.last_token.text !== ';' && this._flags.last_token.text !== ',' && this._flags.last_token.text !== '=' && (this._flags.last_token.type !== TOKEN$2.OPERATOR || this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) {
      var next_token = this._tokens.peek();
      while (this._flags.mode === MODE.Statement &&
        !(this._flags.if_block && reserved_word(next_token, 'else')) &&
        !this._flags.do_block) {
        this.restore_mode();
      }
    }
  }

  if (this._output.add_new_line(force_newline)) {
    this._flags.multiline_frame = true;
  }
};

Beautifier.prototype.print_token_line_indentation = function(current_token) {
  if (this._output.just_added_newline()) {
    if (this._options.keep_array_indentation && is_array(this._flags.mode) && current_token.newlines) {
      this._output.current_line.push(current_token.whitespace_before);
      this._output.space_before_token = false;
    } else if (this._output.set_indent(this._flags.indentation_level)) {
      this._flags.line_indent_level = this._flags.indentation_level;
    }
  }
};

Beautifier.prototype.print_token = function(current_token, printable_token) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);
    return;
  }

  if (this._options.comma_first && current_token.previous && current_token.previous.type === TOKEN$2.COMMA &&
    this._output.just_added_newline()) {
    if (this._output.previous_line.last() === ',') {
      var popped = this._output.previous_line.pop();
      // if the comma was already at the start of the line,
      // pull back onto that line and reprint the indentation
      if (this._output.previous_line.is_empty()) {
        this._output.previous_line.push(popped);
        this._output.trim(true);
        this._output.current_line.pop();
        this._output.trim();
      }

      // add the comma in front of the next token
      this.print_token_line_indentation(current_token);
      this._output.add_token(',');
      this._output.space_before_token = true;
    }
  }

  printable_token = printable_token || current_token.text;
  this.print_token_line_indentation(current_token);
  this._output.add_token(printable_token);
};

Beautifier.prototype.indent = function() {
  this._flags.indentation_level += 1;
};

Beautifier.prototype.deindent = function() {
  if (this._flags.indentation_level > 0 &&
    ((!this._flags.parent) || this._flags.indentation_level > this._flags.parent.indentation_level)) {
    this._flags.indentation_level -= 1;

  }
};

Beautifier.prototype.set_mode = function(mode) {
  if (this._flags) {
    this._flag_store.push(this._flags);
    this._previous_flags = this._flags;
  } else {
    this._previous_flags = this.create_flags(null, mode);
  }

  this._flags = this.create_flags(this._previous_flags, mode);
};


Beautifier.prototype.restore_mode = function() {
  if (this._flag_store.length > 0) {
    this._previous_flags = this._flags;
    this._flags = this._flag_store.pop();
    if (this._previous_flags.mode === MODE.Statement) {
      remove_redundant_indentation(this._output, this._previous_flags);
    }
  }
};

Beautifier.prototype.start_of_object_property = function() {
  return this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement && (
    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || (reserved_array(this._flags.last_token, ['get', 'set'])));
};

Beautifier.prototype.start_of_statement = function(current_token) {
  var start = false;
  start = start || reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN$2.WORD;
  start = start || reserved_word(this._flags.last_token, 'do');
  start = start || (!(this._flags.parent.mode === MODE.ObjectLiteral && this._flags.mode === MODE.Statement)) && reserved_array(this._flags.last_token, newline_restricted_tokens) && !current_token.newlines;
  start = start || reserved_word(this._flags.last_token, 'else') &&
    !(reserved_word(current_token, 'if') && !current_token.comments_before);
  start = start || (this._flags.last_token.type === TOKEN$2.END_EXPR && (this._previous_flags.mode === MODE.ForInitializer || this._previous_flags.mode === MODE.Conditional));
  start = start || (this._flags.last_token.type === TOKEN$2.WORD && this._flags.mode === MODE.BlockStatement &&
    !this._flags.in_case &&
    !(current_token.text === '--' || current_token.text === '++') &&
    this._last_last_text !== 'function' &&
    current_token.type !== TOKEN$2.WORD && current_token.type !== TOKEN$2.RESERVED);
  start = start || (this._flags.mode === MODE.ObjectLiteral && (
    (this._flags.last_token.text === ':' && this._flags.ternary_depth === 0) || reserved_array(this._flags.last_token, ['get', 'set'])));

  if (start) {
    this.set_mode(MODE.Statement);
    this.indent();

    this.handle_whitespace_and_comments(current_token, true);

    // Issue #276:
    // If starting a new statement with [if, for, while, do], push to a new line.
    // if (a) if (b) if(c) d(); else e(); else f();
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token,
        reserved_array(current_token, ['do', 'for', 'if', 'while']));
    }
    return true;
  }
  return false;
};

Beautifier.prototype.handle_start_expr = function(current_token) {
  // The conditional starts the statement if appropriate.
  if (!this.start_of_statement(current_token)) {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_mode = MODE.Expression;
  if (current_token.text === '[') {

    if (this._flags.last_token.type === TOKEN$2.WORD || this._flags.last_token.text === ')') {
      // this is array index specifier, break immediately
      // a[x], fn()[x]
      if (reserved_array(this._flags.last_token, line_starters$1)) {
        this._output.space_before_token = true;
      }
      this.set_mode(next_mode);
      this.print_token(current_token);
      this.indent();
      if (this._options.space_in_paren) {
        this._output.space_before_token = true;
      }
      return;
    }

    next_mode = MODE.ArrayLiteral;
    if (is_array(this._flags.mode)) {
      if (this._flags.last_token.text === '[' ||
        (this._flags.last_token.text === ',' && (this._last_last_text === ']' || this._last_last_text === '}'))) {
        // ], [ goes to new line
        // }, [ goes to new line
        if (!this._options.keep_array_indentation) {
          this.print_newline();
        }
      }
    }

    if (!in_array$1(this._flags.last_token.type, [TOKEN$2.START_EXPR, TOKEN$2.END_EXPR, TOKEN$2.WORD, TOKEN$2.OPERATOR])) {
      this._output.space_before_token = true;
    }
  } else {
    if (this._flags.last_token.type === TOKEN$2.RESERVED) {
      if (this._flags.last_token.text === 'for') {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.ForInitializer;
      } else if (in_array$1(this._flags.last_token.text, ['if', 'while'])) {
        this._output.space_before_token = this._options.space_before_conditional;
        next_mode = MODE.Conditional;
      } else if (in_array$1(this._flags.last_word, ['await', 'async'])) {
        // Should be a space between await and an IIFE, or async and an arrow function
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'import' && current_token.whitespace_before === '') {
        this._output.space_before_token = false;
      } else if (in_array$1(this._flags.last_token.text, line_starters$1) || this._flags.last_token.text === 'catch') {
        this._output.space_before_token = true;
      }
    } else if (this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
      // Support of this kind of newline preservation.
      // a = (b &&
      //     (c || d));
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else if (this._flags.last_token.type === TOKEN$2.WORD) {
      this._output.space_before_token = false;

      // function name() vs function name ()
      // function* name() vs function* name ()
      // async name() vs async name ()
      // In ES6, you can also define the method properties of an object
      // var obj = {a: function() {}}
      // It can be abbreviated
      // var obj = {a() {}}
      // var obj = { a() {}} vs var obj = { a () {}}
      // var obj = { * a() {}} vs var obj = { * a () {}}
      var peek_back_two = this._tokens.peek(-3);
      if (this._options.space_after_named_function && peek_back_two) {
        // peek starts at next character so -1 is current token
        var peek_back_three = this._tokens.peek(-4);
        if (reserved_array(peek_back_two, ['async', 'function']) ||
          (peek_back_two.text === '*' && reserved_array(peek_back_three, ['async', 'function']))) {
          this._output.space_before_token = true;
        } else if (this._flags.mode === MODE.ObjectLiteral) {
          if ((peek_back_two.text === '{' || peek_back_two.text === ',') ||
            (peek_back_two.text === '*' && (peek_back_three.text === '{' || peek_back_three.text === ','))) {
            this._output.space_before_token = true;
          }
        }
      }
    } else {
      // Support preserving wrapped arrow function expressions
      // a.b('c',
      //     () => d.e
      // )
      this.allow_wrap_or_preserved_newline(current_token);
    }

    // function() vs function ()
    // yield*() vs yield* ()
    // function*() vs function* ()
    if ((this._flags.last_token.type === TOKEN$2.RESERVED && (this._flags.last_word === 'function' || this._flags.last_word === 'typeof')) ||
      (this._flags.last_token.text === '*' &&
        (in_array$1(this._last_last_text, ['function', 'yield']) ||
          (this._flags.mode === MODE.ObjectLiteral && in_array$1(this._last_last_text, ['{', ',']))))) {
      this._output.space_before_token = this._options.space_after_anon_function;
    }
  }

  if (this._flags.last_token.text === ';' || this._flags.last_token.type === TOKEN$2.START_BLOCK) {
    this.print_newline();
  } else if (this._flags.last_token.type === TOKEN$2.END_EXPR || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.END_BLOCK || this._flags.last_token.text === '.' || this._flags.last_token.type === TOKEN$2.COMMA) {
    // do nothing on (( and )( and ][ and ]( and .(
    // TODO: Consider whether forcing this is required.  Review failing tests when removed.
    this.allow_wrap_or_preserved_newline(current_token, current_token.newlines);
  }

  this.set_mode(next_mode);
  this.print_token(current_token);
  if (this._options.space_in_paren) {
    this._output.space_before_token = true;
  }

  // In all cases, if we newline while inside an expression it should be indented.
  this.indent();
};

Beautifier.prototype.handle_end_expr = function(current_token) {
  // statements inside expressions are not valid syntax, but...
  // statements must all be closed when their container closes
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  this.handle_whitespace_and_comments(current_token);

  if (this._flags.multiline_frame) {
    this.allow_wrap_or_preserved_newline(current_token,
      current_token.text === ']' && is_array(this._flags.mode) && !this._options.keep_array_indentation);
  }

  if (this._options.space_in_paren) {
    if (this._flags.last_token.type === TOKEN$2.START_EXPR && !this._options.space_in_empty_paren) {
      // () [] no inner space in empty parens like these, ever, ref #320
      this._output.trim();
      this._output.space_before_token = false;
    } else {
      this._output.space_before_token = true;
    }
  }
  if (current_token.text === ']' && this._options.keep_array_indentation) {
    this.print_token(current_token);
    this.restore_mode();
  } else {
    this.restore_mode();
    this.print_token(current_token);
  }
  remove_redundant_indentation(this._output, this._previous_flags);

  // do {} while () // no statement required after
  if (this._flags.do_while && this._previous_flags.mode === MODE.Conditional) {
    this._previous_flags.mode = MODE.Expression;
    this._flags.do_block = false;
    this._flags.do_while = false;

  }
};

Beautifier.prototype.handle_start_block = function(current_token) {
  this.handle_whitespace_and_comments(current_token);

  // Check if this is should be treated as a ObjectLiteral
  var next_token = this._tokens.peek();
  var second_token = this._tokens.peek(1);
  if (this._flags.last_word === 'switch' && this._flags.last_token.type === TOKEN$2.END_EXPR) {
    this.set_mode(MODE.BlockStatement);
    this._flags.in_case_statement = true;
  } else if (second_token && (
      (in_array$1(second_token.text, [':', ',']) && in_array$1(next_token.type, [TOKEN$2.STRING, TOKEN$2.WORD, TOKEN$2.RESERVED])) ||
      (in_array$1(next_token.text, ['get', 'set', '...']) && in_array$1(second_token.type, [TOKEN$2.WORD, TOKEN$2.RESERVED]))
    )) {
    // We don't support TypeScript,but we didn't break it for a very long time.
    // We'll try to keep not breaking it.
    if (!in_array$1(this._last_last_text, ['class', 'interface'])) {
      this.set_mode(MODE.ObjectLiteral);
    } else {
      this.set_mode(MODE.BlockStatement);
    }
  } else if (this._flags.last_token.type === TOKEN$2.OPERATOR && this._flags.last_token.text === '=>') {
    // arrow function: (param1, paramN) => { statements }
    this.set_mode(MODE.BlockStatement);
  } else if (in_array$1(this._flags.last_token.type, [TOKEN$2.EQUALS, TOKEN$2.START_EXPR, TOKEN$2.COMMA, TOKEN$2.OPERATOR]) ||
    reserved_array(this._flags.last_token, ['return', 'throw', 'import', 'default'])
  ) {
    // Detecting shorthand function syntax is difficult by scanning forward,
    //     so check the surrounding context.
    // If the block is being returned, imported, export default, passed as arg,
    //     assigned with = or assigned in a nested object, treat as an ObjectLiteral.
    this.set_mode(MODE.ObjectLiteral);
  } else {
    this.set_mode(MODE.BlockStatement);
  }

  var empty_braces = !next_token.comments_before && next_token.text === '}';
  var empty_anonymous_function = empty_braces && this._flags.last_word === 'function' &&
    this._flags.last_token.type === TOKEN$2.END_EXPR;

  if (this._options.brace_preserve_inline) // check for inline, set inline_frame if so
  {
    // search forward for a newline wanted inside this block
    var index = 0;
    var check_token = null;
    this._flags.inline_frame = true;
    do {
      index += 1;
      check_token = this._tokens.peek(index - 1);
      if (check_token.newlines) {
        this._flags.inline_frame = false;
        break;
      }
    } while (check_token.type !== TOKEN$2.EOF &&
      !(check_token.type === TOKEN$2.END_BLOCK && check_token.opened === current_token));
  }

  if ((this._options.brace_style === "expand" ||
      (this._options.brace_style === "none" && current_token.newlines)) &&
    !this._flags.inline_frame) {
    if (this._flags.last_token.type !== TOKEN$2.OPERATOR &&
      (empty_anonymous_function ||
        this._flags.last_token.type === TOKEN$2.EQUALS ||
        (reserved_array(this._flags.last_token, special_words) && this._flags.last_token.text !== 'else'))) {
      this._output.space_before_token = true;
    } else {
      this.print_newline(false, true);
    }
  } else { // collapse || inline_frame
    if (is_array(this._previous_flags.mode) && (this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.COMMA)) {
      if (this._flags.last_token.type === TOKEN$2.COMMA || this._options.space_in_paren) {
        this._output.space_before_token = true;
      }

      if (this._flags.last_token.type === TOKEN$2.COMMA || (this._flags.last_token.type === TOKEN$2.START_EXPR && this._flags.inline_frame)) {
        this.allow_wrap_or_preserved_newline(current_token);
        this._previous_flags.multiline_frame = this._previous_flags.multiline_frame || this._flags.multiline_frame;
        this._flags.multiline_frame = false;
      }
    }
    if (this._flags.last_token.type !== TOKEN$2.OPERATOR && this._flags.last_token.type !== TOKEN$2.START_EXPR) {
      if (this._flags.last_token.type === TOKEN$2.START_BLOCK && !this._flags.inline_frame) {
        this.print_newline();
      } else {
        this._output.space_before_token = true;
      }
    }
  }
  this.print_token(current_token);
  this.indent();

  // Except for specific cases, open braces are followed by a new line.
  if (!empty_braces && !(this._options.brace_preserve_inline && this._flags.inline_frame)) {
    this.print_newline();
  }
};

Beautifier.prototype.handle_end_block = function(current_token) {
  // statements must all be closed when their container closes
  this.handle_whitespace_and_comments(current_token);

  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }

  var empty_braces = this._flags.last_token.type === TOKEN$2.START_BLOCK;

  if (this._flags.inline_frame && !empty_braces) { // try inline_frame (only set if this._options.braces-preserve-inline) first
    this._output.space_before_token = true;
  } else if (this._options.brace_style === "expand") {
    if (!empty_braces) {
      this.print_newline();
    }
  } else {
    // skip {}
    if (!empty_braces) {
      if (is_array(this._flags.mode) && this._options.keep_array_indentation) {
        // we REALLY need a newline here, but newliner would skip that
        this._options.keep_array_indentation = false;
        this.print_newline();
        this._options.keep_array_indentation = true;

      } else {
        this.print_newline();
      }
    }
  }
  this.restore_mode();
  this.print_token(current_token);
};

Beautifier.prototype.handle_word = function(current_token) {
  if (current_token.type === TOKEN$2.RESERVED) {
    if (in_array$1(current_token.text, ['set', 'get']) && this._flags.mode !== MODE.ObjectLiteral) {
      current_token.type = TOKEN$2.WORD;
    } else if (current_token.text === 'import' && this._tokens.peek().text === '(') {
      current_token.type = TOKEN$2.WORD;
    } else if (in_array$1(current_token.text, ['as', 'from']) && !this._flags.import_block) {
      current_token.type = TOKEN$2.WORD;
    } else if (this._flags.mode === MODE.ObjectLiteral) {
      var next_token = this._tokens.peek();
      if (next_token.text === ':') {
        current_token.type = TOKEN$2.WORD;
      }
    }
  }

  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    if (reserved_array(this._flags.last_token, ['var', 'let', 'const']) && current_token.type === TOKEN$2.WORD) {
      this._flags.declaration_statement = true;
    }
  } else if (current_token.newlines && !is_expression(this._flags.mode) &&
    (this._flags.last_token.type !== TOKEN$2.OPERATOR || (this._flags.last_token.text === '--' || this._flags.last_token.text === '++')) &&
    this._flags.last_token.type !== TOKEN$2.EQUALS &&
    (this._options.preserve_newlines || !reserved_array(this._flags.last_token, ['var', 'let', 'const', 'set', 'get']))) {
    this.handle_whitespace_and_comments(current_token);
    this.print_newline();
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.do_block && !this._flags.do_while) {
    if (reserved_word(current_token, 'while')) {
      // do {} ## while ()
      this._output.space_before_token = true;
      this.print_token(current_token);
      this._output.space_before_token = true;
      this._flags.do_while = true;
      return;
    } else {
      // do {} should always have while as the next word.
      // if we don't see the expected while, recover
      this.print_newline();
      this._flags.do_block = false;
    }
  }

  // if may be followed by else, or not
  // Bare/inline ifs are tricky
  // Need to unwind the modes correctly: if (a) if (b) c(); else d(); else e();
  if (this._flags.if_block) {
    if (!this._flags.else_block && reserved_word(current_token, 'else')) {
      this._flags.else_block = true;
    } else {
      while (this._flags.mode === MODE.Statement) {
        this.restore_mode();
      }
      this._flags.if_block = false;
      this._flags.else_block = false;
    }
  }

  if (this._flags.in_case_statement && reserved_array(current_token, ['case', 'default'])) {
    this.print_newline();
    if (this._flags.case_body || this._options.jslint_happy) {
      // switch cases following one another
      this.deindent();
      this._flags.case_body = false;
    }
    this.print_token(current_token);
    this._flags.in_case = true;
    return;
  }

  if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
    if (!this.start_of_object_property()) {
      this.allow_wrap_or_preserved_newline(current_token);
    }
  }

  if (reserved_word(current_token, 'function')) {
    if (in_array$1(this._flags.last_token.text, ['}', ';']) ||
      (this._output.just_added_newline() && !(in_array$1(this._flags.last_token.text, ['(', '[', '{', ':', '=', ',']) || this._flags.last_token.type === TOKEN$2.OPERATOR))) {
      // make sure there is a nice clean space of at least one blank line
      // before a new function definition
      if (!this._output.just_added_blankline() && !current_token.comments_before) {
        this.print_newline();
        this.print_newline(true);
      }
    }
    if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD) {
      if (reserved_array(this._flags.last_token, ['get', 'set', 'new', 'export']) ||
        reserved_array(this._flags.last_token, newline_restricted_tokens)) {
        this._output.space_before_token = true;
      } else if (reserved_word(this._flags.last_token, 'default') && this._last_last_text === 'export') {
        this._output.space_before_token = true;
      } else if (this._flags.last_token.text === 'declare') {
        // accomodates Typescript declare function formatting
        this._output.space_before_token = true;
      } else {
        this.print_newline();
      }
    } else if (this._flags.last_token.type === TOKEN$2.OPERATOR || this._flags.last_token.text === '=') {
      // foo = function
      this._output.space_before_token = true;
    } else if (!this._flags.multiline_frame && (is_expression(this._flags.mode) || is_array(this._flags.mode))) ; else {
      this.print_newline();
    }

    this.print_token(current_token);
    this._flags.last_word = current_token.text;
    return;
  }

  var prefix = 'NONE';

  if (this._flags.last_token.type === TOKEN$2.END_BLOCK) {

    if (this._previous_flags.inline_frame) {
      prefix = 'SPACE';
    } else if (!reserved_array(current_token, ['else', 'catch', 'finally', 'from'])) {
      prefix = 'NEWLINE';
    } else {
      if (this._options.brace_style === "expand" ||
        this._options.brace_style === "end-expand" ||
        (this._options.brace_style === "none" && current_token.newlines)) {
        prefix = 'NEWLINE';
      } else {
        prefix = 'SPACE';
        this._output.space_before_token = true;
      }
    }
  } else if (this._flags.last_token.type === TOKEN$2.SEMICOLON && this._flags.mode === MODE.BlockStatement) {
    // TODO: Should this be for STATEMENT as well?
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN$2.SEMICOLON && is_expression(this._flags.mode)) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN$2.STRING) {
    prefix = 'NEWLINE';
  } else if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD ||
    (this._flags.last_token.text === '*' &&
      (in_array$1(this._last_last_text, ['function', 'yield']) ||
        (this._flags.mode === MODE.ObjectLiteral && in_array$1(this._last_last_text, ['{', ',']))))) {
    prefix = 'SPACE';
  } else if (this._flags.last_token.type === TOKEN$2.START_BLOCK) {
    if (this._flags.inline_frame) {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }
  } else if (this._flags.last_token.type === TOKEN$2.END_EXPR) {
    this._output.space_before_token = true;
    prefix = 'NEWLINE';
  }

  if (reserved_array(current_token, line_starters$1) && this._flags.last_token.text !== ')') {
    if (this._flags.inline_frame || this._flags.last_token.text === 'else' || this._flags.last_token.text === 'export') {
      prefix = 'SPACE';
    } else {
      prefix = 'NEWLINE';
    }

  }

  if (reserved_array(current_token, ['else', 'catch', 'finally'])) {
    if ((!(this._flags.last_token.type === TOKEN$2.END_BLOCK && this._previous_flags.mode === MODE.BlockStatement) ||
        this._options.brace_style === "expand" ||
        this._options.brace_style === "end-expand" ||
        (this._options.brace_style === "none" && current_token.newlines)) &&
      !this._flags.inline_frame) {
      this.print_newline();
    } else {
      this._output.trim(true);
      var line = this._output.current_line;
      // If we trimmed and there's something other than a close block before us
      // put a newline back in.  Handles '} // comment' scenario.
      if (line.last() !== '}') {
        this.print_newline();
      }
      this._output.space_before_token = true;
    }
  } else if (prefix === 'NEWLINE') {
    if (reserved_array(this._flags.last_token, special_words)) {
      // no newline between 'return nnn'
      this._output.space_before_token = true;
    } else if (this._flags.last_token.text === 'declare' && reserved_array(current_token, ['var', 'let', 'const'])) {
      // accomodates Typescript declare formatting
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type !== TOKEN$2.END_EXPR) {
      if ((this._flags.last_token.type !== TOKEN$2.START_EXPR || !reserved_array(current_token, ['var', 'let', 'const'])) && this._flags.last_token.text !== ':') {
        // no need to force newline on 'var': for (var x = 0...)
        if (reserved_word(current_token, 'if') && reserved_word(current_token.previous, 'else')) {
          // no newline for } else if {
          this._output.space_before_token = true;
        } else {
          this.print_newline();
        }
      }
    } else if (reserved_array(current_token, line_starters$1) && this._flags.last_token.text !== ')') {
      this.print_newline();
    }
  } else if (this._flags.multiline_frame && is_array(this._flags.mode) && this._flags.last_token.text === ',' && this._last_last_text === '}') {
    this.print_newline(); // }, in lists get a newline treatment
  } else if (prefix === 'SPACE') {
    this._output.space_before_token = true;
  }
  if (current_token.previous && (current_token.previous.type === TOKEN$2.WORD || current_token.previous.type === TOKEN$2.RESERVED)) {
    this._output.space_before_token = true;
  }
  this.print_token(current_token);
  this._flags.last_word = current_token.text;

  if (current_token.type === TOKEN$2.RESERVED) {
    if (current_token.text === 'do') {
      this._flags.do_block = true;
    } else if (current_token.text === 'if') {
      this._flags.if_block = true;
    } else if (current_token.text === 'import') {
      this._flags.import_block = true;
    } else if (this._flags.import_block && reserved_word(current_token, 'from')) {
      this._flags.import_block = false;
    }
  }
};

Beautifier.prototype.handle_semicolon = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // Semicolon can be the start (and end) of a statement
    this._output.space_before_token = false;
  } else {
    this.handle_whitespace_and_comments(current_token);
  }

  var next_token = this._tokens.peek();
  while (this._flags.mode === MODE.Statement &&
    !(this._flags.if_block && reserved_word(next_token, 'else')) &&
    !this._flags.do_block) {
    this.restore_mode();
  }

  // hacky but effective for the moment
  if (this._flags.import_block) {
    this._flags.import_block = false;
  }
  this.print_token(current_token);
};

Beautifier.prototype.handle_string = function(current_token) {
  if (this.start_of_statement(current_token)) {
    // The conditional starts the statement if appropriate.
    // One difference - strings want at least a space before
    this._output.space_before_token = true;
  } else {
    this.handle_whitespace_and_comments(current_token);
    if (this._flags.last_token.type === TOKEN$2.RESERVED || this._flags.last_token.type === TOKEN$2.WORD || this._flags.inline_frame) {
      this._output.space_before_token = true;
    } else if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR || this._flags.last_token.type === TOKEN$2.EQUALS || this._flags.last_token.type === TOKEN$2.OPERATOR) {
      if (!this.start_of_object_property()) {
        this.allow_wrap_or_preserved_newline(current_token);
      }
    } else {
      this.print_newline();
    }
  }
  this.print_token(current_token);
};

Beautifier.prototype.handle_equals = function(current_token) {
  if (this.start_of_statement(current_token)) ; else {
    this.handle_whitespace_and_comments(current_token);
  }

  if (this._flags.declaration_statement) {
    // just got an '=' in a var-line, different formatting/line-breaking, etc will now be done
    this._flags.declaration_assignment = true;
  }
  this._output.space_before_token = true;
  this.print_token(current_token);
  this._output.space_before_token = true;
};

Beautifier.prototype.handle_comma = function(current_token) {
  this.handle_whitespace_and_comments(current_token, true);

  this.print_token(current_token);
  this._output.space_before_token = true;
  if (this._flags.declaration_statement) {
    if (is_expression(this._flags.parent.mode)) {
      // do not break on comma, for(var a = 1, b = 2)
      this._flags.declaration_assignment = false;
    }

    if (this._flags.declaration_assignment) {
      this._flags.declaration_assignment = false;
      this.print_newline(false, true);
    } else if (this._options.comma_first) {
      // for comma-first, we want to allow a newline before the comma
      // to turn into a newline after the comma, which we will fixup later
      this.allow_wrap_or_preserved_newline(current_token);
    }
  } else if (this._flags.mode === MODE.ObjectLiteral ||
    (this._flags.mode === MODE.Statement && this._flags.parent.mode === MODE.ObjectLiteral)) {
    if (this._flags.mode === MODE.Statement) {
      this.restore_mode();
    }

    if (!this._flags.inline_frame) {
      this.print_newline();
    }
  } else if (this._options.comma_first) {
    // EXPR or DO_BLOCK
    // for comma-first, we want to allow a newline before the comma
    // to turn into a newline after the comma, which we will fixup later
    this.allow_wrap_or_preserved_newline(current_token);
  }
};

Beautifier.prototype.handle_operator = function(current_token) {
  var isGeneratorAsterisk = current_token.text === '*' &&
    (reserved_array(this._flags.last_token, ['function', 'yield']) ||
      (in_array$1(this._flags.last_token.type, [TOKEN$2.START_BLOCK, TOKEN$2.COMMA, TOKEN$2.END_BLOCK, TOKEN$2.SEMICOLON]))
    );
  var isUnary = in_array$1(current_token.text, ['-', '+']) && (
    in_array$1(this._flags.last_token.type, [TOKEN$2.START_BLOCK, TOKEN$2.START_EXPR, TOKEN$2.EQUALS, TOKEN$2.OPERATOR]) ||
    in_array$1(this._flags.last_token.text, line_starters$1) ||
    this._flags.last_token.text === ','
  );

  if (this.start_of_statement(current_token)) ; else {
    var preserve_statement_flags = !isGeneratorAsterisk;
    this.handle_whitespace_and_comments(current_token, preserve_statement_flags);
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    // "return" had a special handling in TK_WORD. Now we need to return the favor
    this._output.space_before_token = true;
    this.print_token(current_token);
    return;
  }

  // hack for actionscript's import .*;
  if (current_token.text === '*' && this._flags.last_token.type === TOKEN$2.DOT) {
    this.print_token(current_token);
    return;
  }

  if (current_token.text === '::') {
    // no spaces around exotic namespacing syntax operator
    this.print_token(current_token);
    return;
  }

  // Allow line wrapping between operators when operator_position is
  //   set to before or preserve
  if (this._flags.last_token.type === TOKEN$2.OPERATOR && in_array$1(this._options.operator_position, OPERATOR_POSITION_BEFORE_OR_PRESERVE)) {
    this.allow_wrap_or_preserved_newline(current_token);
  }

  if (current_token.text === ':' && this._flags.in_case) {
    this._flags.case_body = true;
    this.indent();
    this.print_token(current_token);
    this.print_newline();
    this._flags.in_case = false;
    return;
  }

  var space_before = true;
  var space_after = true;
  var in_ternary = false;
  if (current_token.text === ':') {
    if (this._flags.ternary_depth === 0) {
      // Colon is invalid javascript outside of ternary and object, but do our best to guess what was meant.
      space_before = false;
    } else {
      this._flags.ternary_depth -= 1;
      in_ternary = true;
    }
  } else if (current_token.text === '?') {
    this._flags.ternary_depth += 1;
  }

  // let's handle the operator_position option prior to any conflicting logic
  if (!isUnary && !isGeneratorAsterisk && this._options.preserve_newlines && in_array$1(current_token.text, positionable_operators$1)) {
    var isColon = current_token.text === ':';
    var isTernaryColon = (isColon && in_ternary);
    var isOtherColon = (isColon && !in_ternary);

    switch (this._options.operator_position) {
      case OPERATOR_POSITION.before_newline:
        // if the current token is : and it's not a ternary statement then we set space_before to false
        this._output.space_before_token = !isOtherColon;

        this.print_token(current_token);

        if (!isColon || isTernaryColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }

        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.after_newline:
        // if the current token is anything but colon, or (via deduction) it's a colon and in a ternary statement,
        //   then print a newline.

        this._output.space_before_token = true;

        if (!isColon || isTernaryColon) {
          if (this._tokens.peek().newlines) {
            this.print_newline(false, true);
          } else {
            this.allow_wrap_or_preserved_newline(current_token);
          }
        } else {
          this._output.space_before_token = false;
        }

        this.print_token(current_token);

        this._output.space_before_token = true;
        return;

      case OPERATOR_POSITION.preserve_newline:
        if (!isOtherColon) {
          this.allow_wrap_or_preserved_newline(current_token);
        }

        // if we just added a newline, or the current token is : and it's not a ternary statement,
        //   then we set space_before to false
        space_before = !(this._output.just_added_newline() || isOtherColon);

        this._output.space_before_token = space_before;
        this.print_token(current_token);
        this._output.space_before_token = true;
        return;
    }
  }

  if (isGeneratorAsterisk) {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = false;
    var next_token = this._tokens.peek();
    space_after = next_token && in_array$1(next_token.type, [TOKEN$2.WORD, TOKEN$2.RESERVED]);
  } else if (current_token.text === '...') {
    this.allow_wrap_or_preserved_newline(current_token);
    space_before = this._flags.last_token.type === TOKEN$2.START_BLOCK;
    space_after = false;
  } else if (in_array$1(current_token.text, ['--', '++', '!', '~']) || isUnary) {
    // unary operators (and binary +/- pretending to be unary) special cases
    if (this._flags.last_token.type === TOKEN$2.COMMA || this._flags.last_token.type === TOKEN$2.START_EXPR) {
      this.allow_wrap_or_preserved_newline(current_token);
    }

    space_before = false;
    space_after = false;

    // http://www.ecma-international.org/ecma-262/5.1/#sec-7.9.1
    // if there is a newline between -- or ++ and anything else we should preserve it.
    if (current_token.newlines && (current_token.text === '--' || current_token.text === '++')) {
      this.print_newline(false, true);
    }

    if (this._flags.last_token.text === ';' && is_expression(this._flags.mode)) {
      // for (;; ++i)
      //        ^^^
      space_before = true;
    }

    if (this._flags.last_token.type === TOKEN$2.RESERVED) {
      space_before = true;
    } else if (this._flags.last_token.type === TOKEN$2.END_EXPR) {
      space_before = !(this._flags.last_token.text === ']' && (current_token.text === '--' || current_token.text === '++'));
    } else if (this._flags.last_token.type === TOKEN$2.OPERATOR) {
      // a++ + ++b;
      // a - -b
      space_before = in_array$1(current_token.text, ['--', '-', '++', '+']) && in_array$1(this._flags.last_token.text, ['--', '-', '++', '+']);
      // + and - are not unary when preceeded by -- or ++ operator
      // a-- + b
      // a * +b
      // a - -b
      if (in_array$1(current_token.text, ['+', '-']) && in_array$1(this._flags.last_token.text, ['--', '++'])) {
        space_after = true;
      }
    }


    if (((this._flags.mode === MODE.BlockStatement && !this._flags.inline_frame) || this._flags.mode === MODE.Statement) &&
      (this._flags.last_token.text === '{' || this._flags.last_token.text === ';')) {
      // { foo; --i }
      // foo(); --bar;
      this.print_newline();
    }
  }

  this._output.space_before_token = this._output.space_before_token || space_before;
  this.print_token(current_token);
  this._output.space_before_token = space_after;
};

Beautifier.prototype.handle_block_comment = function(current_token, preserve_statement_flags) {
  if (this._output.raw) {
    this._output.add_raw_token(current_token);
    if (current_token.directives && current_token.directives.preserve === 'end') {
      // If we're testing the raw output behavior, do not allow a directive to turn it off.
      this._output.raw = this._options.test_output_raw;
    }
    return;
  }

  if (current_token.directives) {
    this.print_newline(false, preserve_statement_flags);
    this.print_token(current_token);
    if (current_token.directives.preserve === 'start') {
      this._output.raw = true;
    }
    this.print_newline(false, true);
    return;
  }

  // inline block
  if (!acorn.newline.test(current_token.text) && !current_token.newlines) {
    this._output.space_before_token = true;
    this.print_token(current_token);
    this._output.space_before_token = true;
    return;
  }

  var lines = split_linebreaks(current_token.text);
  var j; // iterator for this case
  var javadoc = false;
  var starless = false;
  var lastIndent = current_token.whitespace_before;
  var lastIndentLength = lastIndent.length;

  // block comment starts with a new line
  this.print_newline(false, preserve_statement_flags);
  if (lines.length > 1) {
    javadoc = all_lines_start_with(lines.slice(1), '*');
    starless = each_line_matches_indent(lines.slice(1), lastIndent);
  }

  // first line always indented
  this.print_token(current_token, lines[0]);
  for (j = 1; j < lines.length; j++) {
    this.print_newline(false, true);
    if (javadoc) {
      // javadoc: reformat and re-indent
      this.print_token(current_token, ' ' + ltrim(lines[j]));
    } else if (starless && lines[j].length > lastIndentLength) {
      // starless: re-indent non-empty content, avoiding trim
      this.print_token(current_token, lines[j].substring(lastIndentLength));
    } else {
      // normal comments output raw
      this._output.add_token(lines[j]);
    }
  }

  // for comments of more than one line, make sure there's a new line after
  this.print_newline(false, preserve_statement_flags);
};

Beautifier.prototype.handle_comment = function(current_token, preserve_statement_flags) {
  if (current_token.newlines) {
    this.print_newline(false, preserve_statement_flags);
  } else {
    this._output.trim(true);
  }

  this._output.space_before_token = true;
  this.print_token(current_token);
  this.print_newline(false, preserve_statement_flags);
};

Beautifier.prototype.handle_dot = function(current_token) {
  if (this.start_of_statement(current_token)) ; else {
    this.handle_whitespace_and_comments(current_token, true);
  }

  if (reserved_array(this._flags.last_token, special_words)) {
    this._output.space_before_token = false;
  } else {
    // allow preserved newlines before dots in general
    // force newlines on dots after close paren when break_chained - for bar().baz()
    this.allow_wrap_or_preserved_newline(current_token,
      this._flags.last_token.text === ')' && this._options.break_chained_methods);
  }

  // Only unindent chained method dot if this dot starts a new line.
  // Otherwise the automatic extra indentation removal will handle the over indent
  if (this._options.unindent_chained_methods && this._output.just_added_newline()) {
    this.deindent();
  }

  this.print_token(current_token);
};

Beautifier.prototype.handle_unknown = function(current_token, preserve_statement_flags) {
  this.print_token(current_token);

  if (current_token.text[current_token.text.length - 1] === '\n') {
    this.print_newline(false, preserve_statement_flags);
  }
};

Beautifier.prototype.handle_eof = function(current_token) {
  // Unwind any open statements
  while (this._flags.mode === MODE.Statement) {
    this.restore_mode();
  }
  this.handle_whitespace_and_comments(current_token);
};

var Beautifier_1 = Beautifier;

var beautifier = {
	Beautifier: Beautifier_1
};

var Beautifier$1 = beautifier.Beautifier,
  Options$3 = options$1.Options;

function js_beautify(js_source_text, options) {
  var beautifier$$1 = new Beautifier$1(js_source_text, options);
  return beautifier$$1.beautify();
}

var javascript = js_beautify;
var defaultOptions = function() {
  return new Options$3();
};
javascript.defaultOptions = defaultOptions;

var BaseOptions$1 = options.Options;

function Options$4(options$$1) {
  BaseOptions$1.call(this, options$$1, 'css');

  this.selector_separator_newline = this._get_boolean('selector_separator_newline', true);
  this.newline_between_rules = this._get_boolean('newline_between_rules', true);
  var space_around_selector_separator = this._get_boolean('space_around_selector_separator');
  this.space_around_combinator = this._get_boolean('space_around_combinator') || space_around_selector_separator;

}
Options$4.prototype = new BaseOptions$1();



var Options_1$2 = Options$4;

var options$2 = {
	Options: Options_1$2
};

var Options$5 = options$2.Options;
var Output$2 = output.Output;
var InputScanner$3 = inputscanner.InputScanner;

var lineBreak = /\r\n|[\r\n]/;
var allLineBreaks = /\r\n|[\r\n]/g;

// tokenizer
var whitespaceChar = /\s/;
var whitespacePattern = /(?:\s|\n)+/g;
var block_comment_pattern$1 = /\/\*(?:[\s\S]*?)((?:\*\/)|$)/g;
var comment_pattern$1 = /\/\/(?:[^\n\r\u2028\u2029]*)/g;

function Beautifier$2(source_text, options) {
  this._source_text = source_text || '';
  // Allow the setting of language/file-type specific options
  // with inheritance of overall settings
  this._options = new Options$5(options);
  this._ch = null;
  this._input = null;

  // https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule
  this.NESTED_AT_RULE = {
    "@page": true,
    "@font-face": true,
    "@keyframes": true,
    // also in CONDITIONAL_GROUP_RULE below
    "@media": true,
    "@supports": true,
    "@document": true
  };
  this.CONDITIONAL_GROUP_RULE = {
    "@media": true,
    "@supports": true,
    "@document": true
  };

}

Beautifier$2.prototype.eatString = function(endChars) {
  var result = '';
  this._ch = this._input.next();
  while (this._ch) {
    result += this._ch;
    if (this._ch === "\\") {
      result += this._input.next();
    } else if (endChars.indexOf(this._ch) !== -1 || this._ch === "\n") {
      break;
    }
    this._ch = this._input.next();
  }
  return result;
};

// Skips any white space in the source text from the current position.
// When allowAtLeastOneNewLine is true, will output new lines for each
// newline character found; if the user has preserve_newlines off, only
// the first newline will be output
Beautifier$2.prototype.eatWhitespace = function(allowAtLeastOneNewLine) {
  var result = whitespaceChar.test(this._input.peek());
  var isFirstNewLine = true;

  while (whitespaceChar.test(this._input.peek())) {
    this._ch = this._input.next();
    if (allowAtLeastOneNewLine && this._ch === '\n') {
      if (this._options.preserve_newlines || isFirstNewLine) {
        isFirstNewLine = false;
        this._output.add_new_line(true);
      }
    }
  }
  return result;
};

// Nested pseudo-class if we are insideRule
// and the next special character found opens
// a new block
Beautifier$2.prototype.foundNestedPseudoClass = function() {
  var openParen = 0;
  var i = 1;
  var ch = this._input.peek(i);
  while (ch) {
    if (ch === "{") {
      return true;
    } else if (ch === '(') {
      // pseudoclasses can contain ()
      openParen += 1;
    } else if (ch === ')') {
      if (openParen === 0) {
        return false;
      }
      openParen -= 1;
    } else if (ch === ";" || ch === "}") {
      return false;
    }
    i++;
    ch = this._input.peek(i);
  }
  return false;
};

Beautifier$2.prototype.print_string = function(output_string) {
  if (this._output.just_added_newline()) {
    this._output.set_indent(this._indentLevel);
  }
  this._output.add_token(output_string);
};

Beautifier$2.prototype.preserveSingleSpace = function(isAfterSpace) {
  if (isAfterSpace) {
    this._output.space_before_token = true;
  }
};

Beautifier$2.prototype.indent = function() {
  this._indentLevel++;
};

Beautifier$2.prototype.outdent = function() {
  if (this._indentLevel > 0) {
    this._indentLevel--;
  }
};

/*_____________________--------------------_____________________*/

Beautifier$2.prototype.beautify = function() {
  if (this._options.disabled) {
    return this._source_text;
  }

  var source_text = this._source_text;
  var eol = this._options.eol;
  if (eol === 'auto') {
    eol = '\n';
    if (source_text && lineBreak.test(source_text || '')) {
      eol = source_text.match(lineBreak)[0];
    }
  }


  // HACK: newline parsing inconsistent. This brute force normalizes the this._input.
  source_text = source_text.replace(allLineBreaks, '\n');

  // reset
  var baseIndentString = source_text.match(/^[\t ]*/)[0];

  this._output = new Output$2(this._options, baseIndentString);
  this._input = new InputScanner$3(source_text);
  this._indentLevel = 0;
  this._nestedLevel = 0;

  this._ch = null;
  var parenLevel = 0;

  var insideRule = false;
  // This is the value side of a property value pair (blue in the following ex)
  // label { content: blue }
  var insidePropertyValue = false;
  var enteringConditionalGroup = false;
  var insideAtExtend = false;
  var insideAtImport = false;
  var topCharacter = this._ch;

  while (true) {
    var whitespace = this._input.read(whitespacePattern);
    var isAfterSpace = whitespace !== '';
    var previous_ch = topCharacter;
    this._ch = this._input.next();
    topCharacter = this._ch;

    if (!this._ch) {
      break;
    } else if (this._ch === '/' && this._input.peek() === '*') {
      // /* css comment */
      // Always start block comments on a new line.
      // This handles scenarios where a block comment immediately
      // follows a property definition on the same line or where
      // minified code is being beautified.
      this._output.add_new_line();
      this._input.back();
      this.print_string(this._input.read(block_comment_pattern$1));

      // Ensures any new lines following the comment are preserved
      this.eatWhitespace(true);

      // Block comments are followed by a new line so they don't
      // share a line with other properties
      this._output.add_new_line();
    } else if (this._ch === '/' && this._input.peek() === '/') {
      // // single line comment
      // Preserves the space before a comment
      // on the same line as a rule
      this._output.space_before_token = true;
      this._input.back();
      this.print_string(this._input.read(comment_pattern$1));

      // Ensures any new lines following the comment are preserved
      this.eatWhitespace(true);
    } else if (this._ch === '@') {
      this.preserveSingleSpace(isAfterSpace);

      // deal with less propery mixins @{...}
      if (this._input.peek() === '{') {
        this.print_string(this._ch + this.eatString('}'));
      } else {
        this.print_string(this._ch);

        // strip trailing space, if present, for hash property checks
        var variableOrRule = this._input.peekUntilAfter(/[: ,;{}()[\]\/='"]/g);

        if (variableOrRule.match(/[ :]$/)) {
          // we have a variable or pseudo-class, add it and insert one space before continuing
          variableOrRule = this.eatString(": ").replace(/\s$/, '');
          this.print_string(variableOrRule);
          this._output.space_before_token = true;
        }

        variableOrRule = variableOrRule.replace(/\s$/, '');

        if (variableOrRule === 'extend') {
          insideAtExtend = true;
        } else if (variableOrRule === 'import') {
          insideAtImport = true;
        }

        // might be a nesting at-rule
        if (variableOrRule in this.NESTED_AT_RULE) {
          this._nestedLevel += 1;
          if (variableOrRule in this.CONDITIONAL_GROUP_RULE) {
            enteringConditionalGroup = true;
          }
          // might be less variable
        } else if (!insideRule && parenLevel === 0 && variableOrRule.indexOf(':') !== -1) {
          insidePropertyValue = true;
          this.indent();
        }
      }
    } else if (this._ch === '#' && this._input.peek() === '{') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch + this.eatString('}'));
    } else if (this._ch === '{') {
      if (insidePropertyValue) {
        insidePropertyValue = false;
        this.outdent();
      }
      this.indent();
      this._output.space_before_token = true;
      this.print_string(this._ch);

      // when entering conditional groups, only rulesets are allowed
      if (enteringConditionalGroup) {
        enteringConditionalGroup = false;
        insideRule = (this._indentLevel > this._nestedLevel);
      } else {
        // otherwise, declarations are also allowed
        insideRule = (this._indentLevel >= this._nestedLevel);
      }
      if (this._options.newline_between_rules && insideRule) {
        if (this._output.previous_line && this._output.previous_line.item(-1) !== '{') {
          this._output.ensure_empty_line_above('/', ',');
        }
      }
      this.eatWhitespace(true);
      this._output.add_new_line();
    } else if (this._ch === '}') {
      this.outdent();
      this._output.add_new_line();
      if (previous_ch === '{') {
        this._output.trim(true);
      }
      insideAtImport = false;
      insideAtExtend = false;
      if (insidePropertyValue) {
        this.outdent();
        insidePropertyValue = false;
      }
      this.print_string(this._ch);
      insideRule = false;
      if (this._nestedLevel) {
        this._nestedLevel--;
      }

      this.eatWhitespace(true);
      this._output.add_new_line();

      if (this._options.newline_between_rules && !this._output.just_added_blankline()) {
        if (this._input.peek() !== '}') {
          this._output.add_new_line(true);
        }
      }
    } else if (this._ch === ":") {
      if ((insideRule || enteringConditionalGroup) && !(this._input.lookBack("&") || this.foundNestedPseudoClass()) && !this._input.lookBack("(") && !insideAtExtend) {
        // 'property: value' delimiter
        // which could be in a conditional group query
        this.print_string(':');
        if (!insidePropertyValue) {
          insidePropertyValue = true;
          this._output.space_before_token = true;
          this.eatWhitespace(true);
          this.indent();
        }
      } else {
        // sass/less parent reference don't use a space
        // sass nested pseudo-class don't use a space

        // preserve space before pseudoclasses/pseudoelements, as it means "in any child"
        if (this._input.lookBack(" ")) {
          this._output.space_before_token = true;
        }
        if (this._input.peek() === ":") {
          // pseudo-element
          this._ch = this._input.next();
          this.print_string("::");
        } else {
          // pseudo-class
          this.print_string(':');
        }
      }
    } else if (this._ch === '"' || this._ch === '\'') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch + this.eatString(this._ch));
      this.eatWhitespace(true);
    } else if (this._ch === ';') {
      if (insidePropertyValue) {
        this.outdent();
        insidePropertyValue = false;
      }
      insideAtExtend = false;
      insideAtImport = false;
      this.print_string(this._ch);
      this.eatWhitespace(true);

      // This maintains single line comments on the same
      // line. Block comments are also affected, but
      // a new line is always output before one inside
      // that section
      if (this._input.peek() !== '/') {
        this._output.add_new_line();
      }
    } else if (this._ch === '(') { // may be a url
      if (this._input.lookBack("url")) {
        this.print_string(this._ch);
        this.eatWhitespace();
        this._ch = this._input.next();
        if (this._ch === ')' || this._ch === '"' || this._ch === '\'') {
          this._input.back();
          parenLevel++;
        } else if (this._ch) {
          this.print_string(this._ch + this.eatString(')'));
        }
      } else {
        parenLevel++;
        this.preserveSingleSpace(isAfterSpace);
        this.print_string(this._ch);
        this.eatWhitespace();
      }
    } else if (this._ch === ')') {
      this.print_string(this._ch);
      parenLevel--;
    } else if (this._ch === ',') {
      this.print_string(this._ch);
      this.eatWhitespace(true);
      if (this._options.selector_separator_newline && !insidePropertyValue && parenLevel < 1 && !insideAtImport) {
        this._output.add_new_line();
      } else {
        this._output.space_before_token = true;
      }
    } else if ((this._ch === '>' || this._ch === '+' || this._ch === '~') && !insidePropertyValue && parenLevel < 1) {
      //handle combinator spacing
      if (this._options.space_around_combinator) {
        this._output.space_before_token = true;
        this.print_string(this._ch);
        this._output.space_before_token = true;
      } else {
        this.print_string(this._ch);
        this.eatWhitespace();
        // squash extra whitespace
        if (this._ch && whitespaceChar.test(this._ch)) {
          this._ch = '';
        }
      }
    } else if (this._ch === ']') {
      this.print_string(this._ch);
    } else if (this._ch === '[') {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch);
    } else if (this._ch === '=') { // no whitespace before or after
      this.eatWhitespace();
      this.print_string('=');
      if (whitespaceChar.test(this._ch)) {
        this._ch = '';
      }
    } else if (this._ch === '!') { // !important
      this.print_string(' ');
      this.print_string(this._ch);
    } else {
      this.preserveSingleSpace(isAfterSpace);
      this.print_string(this._ch);
    }
  }

  var sweetCode = this._output.get_code(eol);

  return sweetCode;
};

var Beautifier_1$1 = Beautifier$2;

var beautifier$1 = {
	Beautifier: Beautifier_1$1
};

var Beautifier$3 = beautifier$1.Beautifier,
  Options$6 = options$2.Options;

function css_beautify(source_text, options) {
  var beautifier = new Beautifier$3(source_text, options);
  return beautifier.beautify();
}

var css = css_beautify;
var defaultOptions$1 = function() {
  return new Options$6();
};
css.defaultOptions = defaultOptions$1;

var BaseOptions$2 = options.Options;

function Options$7(options$$1) {
  BaseOptions$2.call(this, options$$1, 'html');

  this.indent_inner_html = this._get_boolean('indent_inner_html');
  this.indent_body_inner_html = this._get_boolean('indent_body_inner_html', true);
  this.indent_head_inner_html = this._get_boolean('indent_head_inner_html', true);

  this.indent_handlebars = this._get_boolean('indent_handlebars', true);
  this.wrap_attributes = this._get_selection('wrap_attributes',
    ['auto', 'force', 'force-aligned', 'force-expand-multiline', 'aligned-multiple', 'preserve', 'preserve-aligned']);
  this.wrap_attributes_indent_size = this._get_number('wrap_attributes_indent_size', this.indent_size);
  this.extra_liners = this._get_array('extra_liners', ['head', 'body', '/html']);

  this.inline = this._get_array('inline', [
    // https://www.w3.org/TR/html5/dom.html#phrasing-content
    'a', 'abbr', 'area', 'audio', 'b', 'bdi', 'bdo', 'br', 'button', 'canvas', 'cite',
    'code', 'data', 'datalist', 'del', 'dfn', 'em', 'embed', 'i', 'iframe', 'img',
    'input', 'ins', 'kbd', 'keygen', 'label', 'map', 'mark', 'math', 'meter', 'noscript',
    'object', 'output', 'progress', 'q', 'ruby', 's', 'samp', /* 'script', */ 'select', 'small',
    'span', 'strong', 'sub', 'sup', 'svg', 'template', 'textarea', 'time', 'u', 'var',
    'video', 'wbr', 'text',
    // prexisting - not sure of full effect of removing, leaving in
    'acronym', 'address', 'big', 'dt', 'ins', 'strike', 'tt'
  ]);
  this.void_elements = this._get_array('void_elements', [
    // HTLM void elements - aka self-closing tags - aka singletons
    // https://www.w3.org/html/wg/drafts/html/master/syntax.html#void-elements
    'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'keygen',
    'link', 'menuitem', 'meta', 'param', 'source', 'track', 'wbr',
    // NOTE: Optional tags are too complex for a simple list
    // they are hard coded in _do_optional_end_element

    // Doctype and xml elements
    '!doctype', '?xml',
    // ?php and ?= tags
    '?php', '?=',
    // other tags that were in this list, keeping just in case
    'basefont', 'isindex'
  ]);
  this.unformatted = this._get_array('unformatted', []);
  this.content_unformatted = this._get_array('content_unformatted', [
    'pre', 'textarea'
  ]);
  this.indent_scripts = this._get_selection('indent_scripts', ['normal', 'keep', 'separate']);
}
Options$7.prototype = new BaseOptions$2();



var Options_1$3 = Options$7;

var options$3 = {
	Options: Options_1$3
};

var BaseTokenizer$1 = tokenizer.Tokenizer;
var BASETOKEN$1 = tokenizer.TOKEN;
var Directives$2 = directives.Directives;

var TOKEN$3 = {
  TAG_OPEN: 'TK_TAG_OPEN',
  TAG_CLOSE: 'TK_TAG_CLOSE',
  ATTRIBUTE: 'TK_ATTRIBUTE',
  EQUALS: 'TK_EQUALS',
  VALUE: 'TK_VALUE',
  COMMENT: 'TK_COMMENT',
  TEXT: 'TK_TEXT',
  UNKNOWN: 'TK_UNKNOWN',
  START: BASETOKEN$1.START,
  RAW: BASETOKEN$1.RAW,
  EOF: BASETOKEN$1.EOF
};

var directives_core$1 = new Directives$2(/<\!--/, /-->/);

var Tokenizer$3 = function(input_string, options) {
  BaseTokenizer$1.call(this, input_string, options);
  this._current_tag_name = '';

  // Words end at whitespace or when a tag starts
  // if we are indenting handlebars, they are considered tags
  this._word_pattern = this._options.indent_handlebars ? /[\n\r\t <]|{{/g : /[\n\r\t <]/g;
};
Tokenizer$3.prototype = new BaseTokenizer$1();

Tokenizer$3.prototype._is_comment = function(current_token) { // jshint unused:false
  return false; //current_token.type === TOKEN.COMMENT || current_token.type === TOKEN.UNKNOWN;
};

Tokenizer$3.prototype._is_opening = function(current_token) {
  return current_token.type === TOKEN$3.TAG_OPEN;
};

Tokenizer$3.prototype._is_closing = function(current_token, open_token) {
  return current_token.type === TOKEN$3.TAG_CLOSE &&
    (open_token && (
      ((current_token.text === '>' || current_token.text === '/>') && open_token.text[0] === '<') ||
      (current_token.text === '}}' && open_token.text[0] === '{' && open_token.text[1] === '{')));
};

Tokenizer$3.prototype._reset = function() {
  this._current_tag_name = '';
};

Tokenizer$3.prototype._get_next_token = function(previous_token, open_token) { // jshint unused:false
  this._readWhitespace();
  var token = null;
  var c = this._input.peek();

  if (c === null) {
    return this._create_token(TOKEN$3.EOF, '');
  }

  token = token || this._read_attribute(c, previous_token, open_token);
  token = token || this._read_raw_content(previous_token, open_token);
  token = token || this._read_comment(c);
  token = token || this._read_open(c, open_token);
  token = token || this._read_close(c, open_token);
  token = token || this._read_content_word();
  token = token || this._create_token(TOKEN$3.UNKNOWN, this._input.next());

  return token;
};

Tokenizer$3.prototype._read_comment = function(c) { // jshint unused:false
  var token = null;
  if (c === '<' || c === '{') {
    var peek1 = this._input.peek(1);
    var peek2 = this._input.peek(2);
    if ((c === '<' && (peek1 === '!' || peek1 === '?' || peek1 === '%')) ||
      this._options.indent_handlebars && c === '{' && peek1 === '{' && peek2 === '!') {
      //if we're in a comment, do something special
      // We treat all comments as literals, even more than preformatted tags
      // we just look for the appropriate close tag

      // this is will have very poor perf, but will work for now.
      var comment = '',
        delimiter = '>',
        matched = false;

      var input_char = this._input.next();

      while (input_char) {
        comment += input_char;

        // only need to check for the delimiter if the last chars match
        if (comment.charAt(comment.length - 1) === delimiter.charAt(delimiter.length - 1) &&
          comment.indexOf(delimiter) !== -1) {
          break;
        }

        // only need to search for custom delimiter for the first few characters
        if (!matched) {
          matched = comment.length > 10;
          if (comment.indexOf('<![if') === 0) { //peek for <![if conditional comment
            delimiter = '<![endif]>';
            matched = true;
          } else if (comment.indexOf('<![cdata[') === 0) { //if it's a <[cdata[ comment...
            delimiter = ']]>';
            matched = true;
          } else if (comment.indexOf('<![') === 0) { // some other ![ comment? ...
            delimiter = ']>';
            matched = true;
          } else if (comment.indexOf('<!--') === 0) { // <!-- comment ...
            delimiter = '-->';
            matched = true;
          } else if (comment.indexOf('{{!--') === 0) { // {{!-- handlebars comment
            delimiter = '--}}';
            matched = true;
          } else if (comment.indexOf('{{!') === 0) { // {{! handlebars comment
            if (comment.length === 5 && comment.indexOf('{{!--') === -1) {
              delimiter = '}}';
              matched = true;
            }
          } else if (comment.indexOf('<?') === 0) { // {{! handlebars comment
            delimiter = '?>';
            matched = true;
          } else if (comment.indexOf('<%') === 0) { // {{! handlebars comment
            delimiter = '%>';
            matched = true;
          }
        }

        input_char = this._input.next();
      }

      var directives$$1 = directives_core$1.get_directives(comment);
      if (directives$$1 && directives$$1.ignore === 'start') {
        comment += directives_core$1.readIgnored(this._input);
      }
      token = this._create_token(TOKEN$3.COMMENT, comment);
      token.directives = directives$$1;
    }
  }

  return token;
};

Tokenizer$3.prototype._read_open = function(c, open_token) {
  var resulting_string = null;
  var token = null;
  if (!open_token) {
    if (c === '<') {
      resulting_string = this._input.read(/<(?:[^\n\r\t >{][^\n\r\t >{/]*)?/g);
      token = this._create_token(TOKEN$3.TAG_OPEN, resulting_string);
    } else if (this._options.indent_handlebars && c === '{' && this._input.peek(1) === '{') {
      resulting_string = this._input.readUntil(/[\n\r\t }]/g);
      token = this._create_token(TOKEN$3.TAG_OPEN, resulting_string);
    }
  }
  return token;
};

Tokenizer$3.prototype._read_close = function(c, open_token) {
  var resulting_string = null;
  var token = null;
  if (open_token) {
    if (open_token.text[0] === '<' && (c === '>' || (c === '/' && this._input.peek(1) === '>'))) {
      resulting_string = this._input.next();
      if (c === '/') { //  for close tag "/>"
        resulting_string += this._input.next();
      }
      token = this._create_token(TOKEN$3.TAG_CLOSE, resulting_string);
    } else if (open_token.text[0] === '{' && c === '}' && this._input.peek(1) === '}') {
      this._input.next();
      this._input.next();
      token = this._create_token(TOKEN$3.TAG_CLOSE, '}}');
    }
  }

  return token;
};

Tokenizer$3.prototype._read_attribute = function(c, previous_token, open_token) {
  var token = null;
  var resulting_string = '';
  if (open_token && open_token.text[0] === '<') {

    if (c === '=') {
      token = this._create_token(TOKEN$3.EQUALS, this._input.next());
    } else if (c === '"' || c === "'") {
      var content = this._input.next();
      var input_string = '';
      var string_pattern = new RegExp(c + '|{{', 'g');
      while (this._input.hasNext()) {
        input_string = this._input.readUntilAfter(string_pattern);
        content += input_string;
        if (input_string[input_string.length - 1] === '"' || input_string[input_string.length - 1] === "'") {
          break;
        } else if (this._input.hasNext()) {
          content += this._input.readUntilAfter(/}}/g);
        }
      }

      token = this._create_token(TOKEN$3.VALUE, content);
    } else {
      if (c === '{' && this._input.peek(1) === '{') {
        resulting_string = this._input.readUntilAfter(/}}/g);
      } else {
        resulting_string = this._input.readUntil(/[\n\r\t =\/>]/g);
      }

      if (resulting_string) {
        if (previous_token.type === TOKEN$3.EQUALS) {
          token = this._create_token(TOKEN$3.VALUE, resulting_string);
        } else {
          token = this._create_token(TOKEN$3.ATTRIBUTE, resulting_string);
        }
      }
    }
  }
  return token;
};

Tokenizer$3.prototype._is_content_unformatted = function(tag_name) {
  // void_elements have no content and so cannot have unformatted content
  // script and style tags should always be read as unformatted content
  // finally content_unformatted and unformatted element contents are unformatted
  return this._options.void_elements.indexOf(tag_name) === -1 &&
    (tag_name === 'script' || tag_name === 'style' ||
      this._options.content_unformatted.indexOf(tag_name) !== -1 ||
      this._options.unformatted.indexOf(tag_name) !== -1);
};


Tokenizer$3.prototype._read_raw_content = function(previous_token, open_token) { // jshint unused:false
  var resulting_string = '';
  if (open_token && open_token.text[0] === '{') {
    resulting_string = this._input.readUntil(/}}/g);
  } else if (previous_token.type === TOKEN$3.TAG_CLOSE && (previous_token.opened.text[0] === '<')) {
    var tag_name = previous_token.opened.text.substr(1).toLowerCase();
    if (this._is_content_unformatted(tag_name)) {
      resulting_string = this._input.readUntil(new RegExp('</' + tag_name + '[\\n\\r\\t ]*?>', 'ig'));
    }
  }

  if (resulting_string) {
    return this._create_token(TOKEN$3.TEXT, resulting_string);
  }

  return null;
};

Tokenizer$3.prototype._read_content_word = function() {
  // if we get here and we see handlebars treat them as plain text
  var resulting_string = this._input.readUntil(this._word_pattern);
  if (resulting_string) {
    return this._create_token(TOKEN$3.TEXT, resulting_string);
  }
};

var Tokenizer_1$2 = Tokenizer$3;
var TOKEN_1$2 = TOKEN$3;

var tokenizer$2 = {
	Tokenizer: Tokenizer_1$2,
	TOKEN: TOKEN_1$2
};

var Options$8 = options$3.Options;
var Output$3 = output.Output;
var Tokenizer$4 = tokenizer$2.Tokenizer;
var TOKEN$4 = tokenizer$2.TOKEN;

var lineBreak$1 = /\r\n|[\r\n]/;
var allLineBreaks$1 = /\r\n|[\r\n]/g;

var Printer = function(options, base_indent_string) { //handles input/output and some other printing functions

  this.indent_level = 0;
  this.alignment_size = 0;
  this.wrap_line_length = options.wrap_line_length;
  this.max_preserve_newlines = options.max_preserve_newlines;
  this.preserve_newlines = options.preserve_newlines;

  this._output = new Output$3(options, base_indent_string);

};

Printer.prototype.current_line_has_match = function(pattern) {
  return this._output.current_line.has_match(pattern);
};

Printer.prototype.set_space_before_token = function(value) {
  this._output.space_before_token = value;
};

Printer.prototype.add_raw_token = function(token) {
  this._output.add_raw_token(token);
};

Printer.prototype.print_preserved_newlines = function(raw_token) {
  var newlines = 0;
  if (raw_token.type !== TOKEN$4.TEXT && raw_token.previous.type !== TOKEN$4.TEXT) {
    newlines = raw_token.newlines ? 1 : 0;
  }

  if (this.preserve_newlines) {
    newlines = raw_token.newlines < this.max_preserve_newlines + 1 ? raw_token.newlines : this.max_preserve_newlines + 1;
  }
  for (var n = 0; n < newlines; n++) {
    this.print_newline(n > 0);
  }

  return newlines !== 0;
};

Printer.prototype.traverse_whitespace = function(raw_token) {
  if (raw_token.whitespace_before || raw_token.newlines) {
    if (!this.print_preserved_newlines(raw_token)) {
      this._output.space_before_token = true;
      this.print_space_or_wrap(raw_token.text);
    }
    return true;
  }
  return false;
};

// Append a space to the given content (string array) or, if we are
// at the wrap_line_length, append a newline/indentation.
// return true if a newline was added, false if a space was added
Printer.prototype.print_space_or_wrap = function(text) {
  if (this.wrap_line_length) {
    if (this._output.current_line.get_character_count() + text.length + 1 >= this.wrap_line_length) { //insert a line when the wrap_line_length is reached
      return this._output.add_new_line();
    }
  }
  return false;
};

Printer.prototype.print_newline = function(force) {
  this._output.add_new_line(force);
};

Printer.prototype.print_token = function(text) {
  if (text) {
    if (this._output.current_line.is_empty()) {
      this._output.set_indent(this.indent_level, this.alignment_size);
    }

    this._output.add_token(text);
  }
};

Printer.prototype.print_raw_text = function(text) {
  this._output.current_line.push_raw(text);
};

Printer.prototype.indent = function() {
  this.indent_level++;
};

Printer.prototype.unindent = function() {
  if (this.indent_level > 0) {
    this.indent_level--;
  }
};

Printer.prototype.get_full_indent = function(level) {
  level = this.indent_level + (level || 0);
  if (level < 1) {
    return '';
  }

  return this._output.get_indent_string(level);
};


var uses_beautifier = function(tag_check, start_token) {
  var raw_token = start_token.next;
  if (!start_token.closed) {
    return false;
  }

  while (raw_token.type !== TOKEN$4.EOF && raw_token.closed !== start_token) {
    if (raw_token.type === TOKEN$4.ATTRIBUTE && raw_token.text === 'type') {
      // For script and style tags that have a type attribute, only enable custom beautifiers for matching values
      var peekEquals = raw_token.next ? raw_token.next : raw_token;
      var peekValue = peekEquals.next ? peekEquals.next : peekEquals;
      if (peekEquals.type === TOKEN$4.EQUALS && peekValue.type === TOKEN$4.VALUE) {
        return (tag_check === 'style' && peekValue.text.search('text/css') > -1) ||
          (tag_check === 'script' && peekValue.text.search(/(text|application|dojo)\/(x-)?(javascript|ecmascript|jscript|livescript|(ld\+)?json|method|aspect)/) > -1);
      }
      return false;
    }
    raw_token = raw_token.next;
  }

  return true;
};

function in_array$2(what, arr) {
  return arr.indexOf(what) !== -1;
}

function TagFrame(parent, parser_token, indent_level) {
  this.parent = parent || null;
  this.tag = parser_token ? parser_token.tag_name : '';
  this.indent_level = indent_level || 0;
  this.parser_token = parser_token || null;
}

function TagStack(printer) {
  this._printer = printer;
  this._current_frame = null;
}

TagStack.prototype.get_parser_token = function() {
  return this._current_frame ? this._current_frame.parser_token : null;
};

TagStack.prototype.record_tag = function(parser_token) { //function to record a tag and its parent in this.tags Object
  var new_frame = new TagFrame(this._current_frame, parser_token, this._printer.indent_level);
  this._current_frame = new_frame;
};

TagStack.prototype._try_pop_frame = function(frame) { //function to retrieve the opening tag to the corresponding closer
  var parser_token = null;

  if (frame) {
    parser_token = frame.parser_token;
    this._printer.indent_level = frame.indent_level;
    this._current_frame = frame.parent;
  }

  return parser_token;
};

TagStack.prototype._get_frame = function(tag_list, stop_list) { //function to retrieve the opening tag to the corresponding closer
  var frame = this._current_frame;

  while (frame) { //till we reach '' (the initial value);
    if (tag_list.indexOf(frame.tag) !== -1) { //if this is it use it
      break;
    } else if (stop_list && stop_list.indexOf(frame.tag) !== -1) {
      frame = null;
      break;
    }
    frame = frame.parent;
  }

  return frame;
};

TagStack.prototype.try_pop = function(tag, stop_list) { //function to retrieve the opening tag to the corresponding closer
  var frame = this._get_frame([tag], stop_list);
  return this._try_pop_frame(frame);
};

TagStack.prototype.indent_to_tag = function(tag_list) {
  var frame = this._get_frame(tag_list);
  if (frame) {
    this._printer.indent_level = frame.indent_level;
  }
};

function Beautifier$4(source_text, options, js_beautify, css_beautify) {
  //Wrapper function to invoke all the necessary constructors and deal with the output.
  this._source_text = source_text || '';
  options = options || {};
  this._js_beautify = js_beautify;
  this._css_beautify = css_beautify;
  this._tag_stack = null;

  // Allow the setting of language/file-type specific options
  // with inheritance of overall settings
  var optionHtml = new Options$8(options, 'html');

  this._options = optionHtml;

  this._is_wrap_attributes_force = this._options.wrap_attributes.substr(0, 'force'.length) === 'force';
  this._is_wrap_attributes_force_expand_multiline = (this._options.wrap_attributes === 'force-expand-multiline');
  this._is_wrap_attributes_force_aligned = (this._options.wrap_attributes === 'force-aligned');
  this._is_wrap_attributes_aligned_multiple = (this._options.wrap_attributes === 'aligned-multiple');
  this._is_wrap_attributes_preserve = this._options.wrap_attributes.substr(0, 'preserve'.length) === 'preserve';
  this._is_wrap_attributes_preserve_aligned = (this._options.wrap_attributes === 'preserve-aligned');
}

Beautifier$4.prototype.beautify = function() {

  // if disabled, return the input unchanged.
  if (this._options.disabled) {
    return this._source_text;
  }

  var source_text = this._source_text;
  var eol = this._options.eol;
  if (this._options.eol === 'auto') {
    eol = '\n';
    if (source_text && lineBreak$1.test(source_text)) {
      eol = source_text.match(lineBreak$1)[0];
    }
  }

  // HACK: newline parsing inconsistent. This brute force normalizes the input.
  source_text = source_text.replace(allLineBreaks$1, '\n');
  var baseIndentString = '';

  // Including commented out text would change existing html beautifier behavior to autodetect base indent.
  // baseIndentString = source_text.match(/^[\t ]*/)[0];

  var last_token = {
    text: '',
    type: ''
  };

  var last_tag_token = new TagOpenParserToken();

  var printer = new Printer(this._options, baseIndentString);
  var tokens = new Tokenizer$4(source_text, this._options).tokenize();

  this._tag_stack = new TagStack(printer);

  var parser_token = null;
  var raw_token = tokens.next();
  while (raw_token.type !== TOKEN$4.EOF) {

    if (raw_token.type === TOKEN$4.TAG_OPEN || raw_token.type === TOKEN$4.COMMENT) {
      parser_token = this._handle_tag_open(printer, raw_token, last_tag_token, last_token);
      last_tag_token = parser_token;
    } else if ((raw_token.type === TOKEN$4.ATTRIBUTE || raw_token.type === TOKEN$4.EQUALS || raw_token.type === TOKEN$4.VALUE) ||
      (raw_token.type === TOKEN$4.TEXT && !last_tag_token.tag_complete)) {
      parser_token = this._handle_inside_tag(printer, raw_token, last_tag_token, tokens);
    } else if (raw_token.type === TOKEN$4.TAG_CLOSE) {
      parser_token = this._handle_tag_close(printer, raw_token, last_tag_token);
    } else if (raw_token.type === TOKEN$4.TEXT) {
      parser_token = this._handle_text(printer, raw_token, last_tag_token);
    } else {
      // This should never happen, but if it does. Print the raw token
      printer.add_raw_token(raw_token);
    }

    last_token = parser_token;

    raw_token = tokens.next();
  }
  var sweet_code = printer._output.get_code(eol);

  return sweet_code;
};

Beautifier$4.prototype._handle_tag_close = function(printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };
  printer.alignment_size = 0;
  last_tag_token.tag_complete = true;

  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '');
  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    if (last_tag_token.tag_start_char === '<') {
      printer.set_space_before_token(raw_token.text[0] === '/'); // space before />, no space before >
      if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.has_wrapped_attrs) {
        printer.print_newline(false);
      }
    }
    printer.print_token(raw_token.text);
  }

  if (last_tag_token.indent_content &&
    !(last_tag_token.is_unformatted || last_tag_token.is_content_unformatted)) {
    printer.indent();

    // only indent once per opened tag
    last_tag_token.indent_content = false;
  }
  return parser_token;
};

Beautifier$4.prototype._handle_inside_tag = function(printer, raw_token, last_tag_token, tokens) {
  var parser_token = {
    text: raw_token.text,
    type: raw_token.type
  };
  printer.set_space_before_token(raw_token.newlines || raw_token.whitespace_before !== '');
  if (last_tag_token.is_unformatted) {
    printer.add_raw_token(raw_token);
  } else if (last_tag_token.tag_start_char === '{' && raw_token.type === TOKEN$4.TEXT) {
    // For the insides of handlebars allow newlines or a single space between open and contents
    if (printer.print_preserved_newlines(raw_token)) {
      printer.print_raw_text(raw_token.whitespace_before + raw_token.text);
    } else {
      printer.print_token(raw_token.text);
    }
  } else {
    if (raw_token.type === TOKEN$4.ATTRIBUTE) {
      printer.set_space_before_token(true);
      last_tag_token.attr_count += 1;
    } else if (raw_token.type === TOKEN$4.EQUALS) { //no space before =
      printer.set_space_before_token(false);
    } else if (raw_token.type === TOKEN$4.VALUE && raw_token.previous.type === TOKEN$4.EQUALS) { //no space before value
      printer.set_space_before_token(false);
    }

    if (printer._output.space_before_token && last_tag_token.tag_start_char === '<') {
      // Allow the current attribute to wrap
      // Set wrapped to true if the line is wrapped
      var wrapped = printer.print_space_or_wrap(raw_token.text);
      if (raw_token.type === TOKEN$4.ATTRIBUTE) {
        if (this._is_wrap_attributes_preserve || this._is_wrap_attributes_preserve_aligned) {
          printer.traverse_whitespace(raw_token);
          wrapped = wrapped || raw_token.newlines !== 0;
        }
        // Save whether we have wrapped any attributes
        last_tag_token.has_wrapped_attrs = last_tag_token.has_wrapped_attrs || wrapped;

        if (this._is_wrap_attributes_force) {
          var force_attr_wrap = last_tag_token.attr_count > 1;
          if (this._is_wrap_attributes_force_expand_multiline && last_tag_token.attr_count === 1) {
            var is_only_attribute = true;
            var peek_index = 0;
            var peek_token;
            do {
              peek_token = tokens.peek(peek_index);
              if (peek_token.type === TOKEN$4.ATTRIBUTE) {
                is_only_attribute = false;
                break;
              }
              peek_index += 1;
            } while (peek_index < 4 && peek_token.type !== TOKEN$4.EOF && peek_token.type !== TOKEN$4.TAG_CLOSE);

            force_attr_wrap = !is_only_attribute;
          }

          if (force_attr_wrap) {
            printer.print_newline(false);
            last_tag_token.has_wrapped_attrs = true;
          }
        }
      }
    }
    printer.print_token(raw_token.text);
  }
  return parser_token;
};

Beautifier$4.prototype._handle_text = function(printer, raw_token, last_tag_token) {
  var parser_token = {
    text: raw_token.text,
    type: 'TK_CONTENT'
  };
  if (last_tag_token.custom_beautifier) { //check if we need to format javascript
    this._print_custom_beatifier_text(printer, raw_token, last_tag_token);
  } else if (last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) {
    printer.add_raw_token(raw_token);
  } else {
    printer.traverse_whitespace(raw_token);
    printer.print_token(raw_token.text);
  }
  return parser_token;
};

Beautifier$4.prototype._print_custom_beatifier_text = function(printer, raw_token, last_tag_token) {
  if (raw_token.text !== '') {
    printer.print_newline(false);
    var text = raw_token.text,
      _beautifier,
      script_indent_level = 1;
    if (last_tag_token.tag_name === 'script') {
      _beautifier = typeof this._js_beautify === 'function' && this._js_beautify;
    } else if (last_tag_token.tag_name === 'style') {
      _beautifier = typeof this._css_beautify === 'function' && this._css_beautify;
    }

    if (this._options.indent_scripts === "keep") {
      script_indent_level = 0;
    } else if (this._options.indent_scripts === "separate") {
      script_indent_level = -printer.indent_level;
    }

    var indentation = printer.get_full_indent(script_indent_level);

    // if there is at least one empty line at the end of this text, strip it
    // we'll be adding one back after the text but before the containing tag.
    text = text.replace(/\n[ \t]*$/, '');

    if (_beautifier) {

      // call the Beautifier if avaliable
      var Child_options = function() {
        this.eol = '\n';
      };
      Child_options.prototype = this._options.raw_options;
      var child_options = new Child_options();
      text = _beautifier(indentation + text, child_options);
    } else {
      // simply indent the string otherwise
      var white = text.match(/^\s*/)[0];
      var _level = white.match(/[^\n\r]*$/)[0].split(this._options.indent_string).length - 1;
      var reindent = this._get_full_indent(script_indent_level - _level);
      text = (indentation + text.trim())
        .replace(/\r\n|\r|\n/g, '\n' + reindent);
    }
    if (text) {
      printer.print_raw_text(text);
      printer.print_newline(true);
    }
  }
};

Beautifier$4.prototype._handle_tag_open = function(printer, raw_token, last_tag_token, last_token) {
  var parser_token = this._get_tag_open_token(raw_token);

  if ((last_tag_token.is_unformatted || last_tag_token.is_content_unformatted) &&
    raw_token.type === TOKEN$4.TAG_OPEN && raw_token.text.indexOf('</') === 0) {
    // End element tags for unformatted or content_unformatted elements
    // are printed raw to keep any newlines inside them exactly the same.
    printer.add_raw_token(raw_token);
  } else {
    printer.traverse_whitespace(raw_token);
    this._set_tag_position(printer, raw_token, parser_token, last_tag_token, last_token);
    printer.print_token(raw_token.text);
  }

  //indent attributes an auto, forced, aligned or forced-align line-wrap
  if (this._is_wrap_attributes_force_aligned || this._is_wrap_attributes_aligned_multiple || this._is_wrap_attributes_preserve_aligned) {
    parser_token.alignment_size = raw_token.text.length + 1;
  }


  if (!parser_token.tag_complete && !parser_token.is_unformatted) {
    printer.alignment_size = parser_token.alignment_size;
  }

  return parser_token;
};

var TagOpenParserToken = function(parent, raw_token) {
  this.parent = parent || null;
  this.text = '';
  this.type = 'TK_TAG_OPEN';
  this.tag_name = '';
  this.is_inline_element = false;
  this.is_unformatted = false;
  this.is_content_unformatted = false;
  this.is_empty_element = false;
  this.is_start_tag = false;
  this.is_end_tag = false;
  this.indent_content = false;
  this.multiline_content = false;
  this.custom_beautifier = false;
  this.start_tag_token = null;
  this.attr_count = 0;
  this.has_wrapped_attrs = false;
  this.alignment_size = 0;
  this.tag_complete = false;
  this.tag_start_char = '';
  this.tag_check = '';

  if (!raw_token) {
    this.tag_complete = true;
  } else {
    var tag_check_match;

    this.tag_start_char = raw_token.text[0];
    this.text = raw_token.text;

    if (this.tag_start_char === '<') {
      tag_check_match = raw_token.text.match(/^<([^\s>]*)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : '';
    } else {
      tag_check_match = raw_token.text.match(/^{{\#?([^\s}]+)/);
      this.tag_check = tag_check_match ? tag_check_match[1] : '';
    }
    this.tag_check = this.tag_check.toLowerCase();

    if (raw_token.type === TOKEN$4.COMMENT) {
      this.tag_complete = true;
    }

    this.is_start_tag = this.tag_check.charAt(0) !== '/';
    this.tag_name = !this.is_start_tag ? this.tag_check.substr(1) : this.tag_check;
    this.is_end_tag = !this.is_start_tag ||
      (raw_token.closed && raw_token.closed.text === '/>');

    // handlebars tags that don't start with # or ^ are single_tags, and so also start and end.
    this.is_end_tag = this.is_end_tag ||
      (this.tag_start_char === '{' && (this.text.length < 3 || (/[^#\^]/.test(this.text.charAt(2)))));
  }
};

Beautifier$4.prototype._get_tag_open_token = function(raw_token) { //function to get a full tag and parse its type
  var parser_token = new TagOpenParserToken(this._tag_stack.get_parser_token(), raw_token);

  parser_token.alignment_size = this._options.wrap_attributes_indent_size;

  parser_token.is_end_tag = parser_token.is_end_tag ||
    in_array$2(parser_token.tag_check, this._options.void_elements);

  parser_token.is_empty_element = parser_token.tag_complete ||
    (parser_token.is_start_tag && parser_token.is_end_tag);

  parser_token.is_unformatted = !parser_token.tag_complete && in_array$2(parser_token.tag_check, this._options.unformatted);
  parser_token.is_content_unformatted = !parser_token.is_empty_element && in_array$2(parser_token.tag_check, this._options.content_unformatted);
  parser_token.is_inline_element = in_array$2(parser_token.tag_name, this._options.inline) || parser_token.tag_start_char === '{';

  return parser_token;
};

Beautifier$4.prototype._set_tag_position = function(printer, raw_token, parser_token, last_tag_token, last_token) {

  if (!parser_token.is_empty_element) {
    if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
      parser_token.start_tag_token = this._tag_stack.try_pop(parser_token.tag_name); //remove it and all ancestors
    } else { // it's a start-tag
      // check if this tag is starting an element that has optional end element
      // and do an ending needed
      this._do_optional_end_element(parser_token);

      this._tag_stack.record_tag(parser_token); //push it on the tag stack

      if ((parser_token.tag_name === 'script' || parser_token.tag_name === 'style') &&
        !(parser_token.is_unformatted || parser_token.is_content_unformatted)) {
        parser_token.custom_beautifier = uses_beautifier(parser_token.tag_check, raw_token);
      }
    }
  }

  if (in_array$2(parser_token.tag_check, this._options.extra_liners)) { //check if this double needs an extra line
    printer.print_newline(false);
    if (!printer._output.just_added_blankline()) {
      printer.print_newline(true);
    }
  }

  if (parser_token.is_empty_element) { //if this tag name is a single tag type (either in the list or has a closing /)

    // if you hit an else case, reset the indent level if you are inside an:
    // 'if', 'unless', or 'each' block.
    if (parser_token.tag_start_char === '{' && parser_token.tag_check === 'else') {
      this._tag_stack.indent_to_tag(['if', 'unless', 'each']);
      parser_token.indent_content = true;
      // Don't add a newline if opening {{#if}} tag is on the current line
      var foundIfOnCurrentLine = printer.current_line_has_match(/{{#if/);
      if (!foundIfOnCurrentLine) {
        printer.print_newline(false);
      }
    }

    // Don't add a newline before elements that should remain where they are.
    if (parser_token.tag_name === '!--' && last_token.type === TOKEN$4.TAG_CLOSE &&
      last_tag_token.is_end_tag && parser_token.text.indexOf('\n') === -1) ; else if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
      printer.print_newline(false);
    }
  } else if (parser_token.is_unformatted || parser_token.is_content_unformatted) {
    if (!parser_token.is_inline_element && !parser_token.is_unformatted) {
      printer.print_newline(false);
    }
  } else if (parser_token.is_end_tag) { //this tag is a double tag so check for tag-ending
    if ((parser_token.start_tag_token && parser_token.start_tag_token.multiline_content) ||
      !(parser_token.is_inline_element ||
        (last_tag_token.is_inline_element) ||
        (last_token.type === TOKEN$4.TAG_CLOSE &&
          parser_token.start_tag_token === last_tag_token) ||
        (last_token.type === 'TK_CONTENT')
      )) {
      printer.print_newline(false);
    }
  } else { // it's a start-tag
    parser_token.indent_content = !parser_token.custom_beautifier;

    if (parser_token.tag_start_char === '<') {
      if (parser_token.tag_name === 'html') {
        parser_token.indent_content = this._options.indent_inner_html;
      } else if (parser_token.tag_name === 'head') {
        parser_token.indent_content = this._options.indent_head_inner_html;
      } else if (parser_token.tag_name === 'body') {
        parser_token.indent_content = this._options.indent_body_inner_html;
      }
    }

    if (!parser_token.is_inline_element && last_token.type !== 'TK_CONTENT') {
      if (parser_token.parent) {
        parser_token.parent.multiline_content = true;
      }
      printer.print_newline(false);
    }
  }
};

//To be used for <p> tag special case:
//var p_closers = ['address', 'article', 'aside', 'blockquote', 'details', 'div', 'dl', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'header', 'hr', 'main', 'nav', 'ol', 'p', 'pre', 'section', 'table', 'ul'];

Beautifier$4.prototype._do_optional_end_element = function(parser_token) {
  // NOTE: cases of "if there is no more content in the parent element"
  // are handled automatically by the beautifier.
  // It assumes parent or ancestor close tag closes all children.
  // https://www.w3.org/TR/html5/syntax.html#optional-tags
  if (parser_token.is_empty_element || !parser_token.is_start_tag || !parser_token.parent) {
    return;

  } else if (parser_token.tag_name === 'body') {
    // A head element’s end tag may be omitted if the head element is not immediately followed by a space character or a comment.
    this._tag_stack.try_pop('head');

    //} else if (parser_token.tag_name === 'body') {
    // DONE: A body element’s end tag may be omitted if the body element is not immediately followed by a comment.

  } else if (parser_token.tag_name === 'li') {
    // An li element’s end tag may be omitted if the li element is immediately followed by another li element or if there is no more content in the parent element.
    this._tag_stack.try_pop('li', ['ol', 'ul']);

  } else if (parser_token.tag_name === 'dd' || parser_token.tag_name === 'dt') {
    // A dd element’s end tag may be omitted if the dd element is immediately followed by another dd element or a dt element, or if there is no more content in the parent element.
    // A dt element’s end tag may be omitted if the dt element is immediately followed by another dt element or a dd element.
    this._tag_stack.try_pop('dt', ['dl']);
    this._tag_stack.try_pop('dd', ['dl']);

    //} else if (p_closers.indexOf(parser_token.tag_name) !== -1) {
    //TODO: THIS IS A BUG FARM. We are not putting this into 1.8.0 as it is likely to blow up.
    //A p element’s end tag may be omitted if the p element is immediately followed by an address, article, aside, blockquote, details, div, dl, fieldset, figcaption, figure, footer, form, h1, h2, h3, h4, h5, h6, header, hr, main, nav, ol, p, pre, section, table, or ul element, or if there is no more content in the parent element and the parent element is an HTML element that is not an a, audio, del, ins, map, noscript, or video element, or an autonomous custom element.
    //this._tag_stack.try_pop('p', ['body']);

  } else if (parser_token.tag_name === 'rp' || parser_token.tag_name === 'rt') {
    // An rt element’s end tag may be omitted if the rt element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
    // An rp element’s end tag may be omitted if the rp element is immediately followed by an rt or rp element, or if there is no more content in the parent element.
    this._tag_stack.try_pop('rt', ['ruby', 'rtc']);
    this._tag_stack.try_pop('rp', ['ruby', 'rtc']);

  } else if (parser_token.tag_name === 'optgroup') {
    // An optgroup element’s end tag may be omitted if the optgroup element is immediately followed by another optgroup element, or if there is no more content in the parent element.
    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
    this._tag_stack.try_pop('optgroup', ['select']);
    //this._tag_stack.try_pop('option', ['select']);

  } else if (parser_token.tag_name === 'option') {
    // An option element’s end tag may be omitted if the option element is immediately followed by another option element, or if it is immediately followed by an optgroup element, or if there is no more content in the parent element.
    this._tag_stack.try_pop('option', ['select', 'datalist', 'optgroup']);

  } else if (parser_token.tag_name === 'colgroup') {
    // DONE: A colgroup element’s end tag may be omitted if the colgroup element is not immediately followed by a space character or a comment.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    this._tag_stack.try_pop('caption', ['table']);

  } else if (parser_token.tag_name === 'thead') {
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    this._tag_stack.try_pop('caption', ['table']);
    this._tag_stack.try_pop('colgroup', ['table']);

    //} else if (parser_token.tag_name === 'caption') {
    // DONE: A caption element’s end tag may be omitted if the caption element is not immediately followed by a space character or a comment.

  } else if (parser_token.tag_name === 'tbody' || parser_token.tag_name === 'tfoot') {
    // A thead element’s end tag may be omitted if the thead element is immediately followed by a tbody or tfoot element.
    // A tbody element’s end tag may be omitted if the tbody element is immediately followed by a tbody or tfoot element, or if there is no more content in the parent element.
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    this._tag_stack.try_pop('caption', ['table']);
    this._tag_stack.try_pop('colgroup', ['table']);
    this._tag_stack.try_pop('thead', ['table']);
    this._tag_stack.try_pop('tbody', ['table']);

    //} else if (parser_token.tag_name === 'tfoot') {
    // DONE: A tfoot element’s end tag may be omitted if there is no more content in the parent element.

  } else if (parser_token.tag_name === 'tr') {
    // A tr element’s end tag may be omitted if the tr element is immediately followed by another tr element, or if there is no more content in the parent element.
    // A colgroup element's end tag may be ommitted if a thead, tfoot, tbody, or tr element is started.
    // A caption element's end tag may be ommitted if a colgroup, thead, tfoot, tbody, or tr element is started.
    this._tag_stack.try_pop('caption', ['table']);
    this._tag_stack.try_pop('colgroup', ['table']);
    this._tag_stack.try_pop('tr', ['table', 'thead', 'tbody', 'tfoot']);

  } else if (parser_token.tag_name === 'th' || parser_token.tag_name === 'td') {
    // A td element’s end tag may be omitted if the td element is immediately followed by a td or th element, or if there is no more content in the parent element.
    // A th element’s end tag may be omitted if the th element is immediately followed by a td or th element, or if there is no more content in the parent element.
    this._tag_stack.try_pop('td', ['tr']);
    this._tag_stack.try_pop('th', ['tr']);
  }

  // Start element omission not handled currently
  // A head element’s start tag may be omitted if the element is empty, or if the first thing inside the head element is an element.
  // A tbody element’s start tag may be omitted if the first thing inside the tbody element is a tr element, and if the element is not immediately preceded by a tbody, thead, or tfoot element whose end tag has been omitted. (It can’t be omitted if the element is empty.)
  // A colgroup element’s start tag may be omitted if the first thing inside the colgroup element is a col element, and if the element is not immediately preceded by another colgroup element whose end tag has been omitted. (It can’t be omitted if the element is empty.)

  // Fix up the parent of the parser token
  parser_token.parent = this._tag_stack.get_parser_token();

};

var Beautifier_1$2 = Beautifier$4;

var beautifier$2 = {
	Beautifier: Beautifier_1$2
};

var Beautifier$5 = beautifier$2.Beautifier,
  Options$9 = options$3.Options;

function style_html(html_source, options, js_beautify, css_beautify) {
  var beautifier = new Beautifier$5(html_source, options, js_beautify, css_beautify);
  return beautifier.beautify();
}

var html = style_html;
var defaultOptions$2 = function() {
  return new Options$9();
};
html.defaultOptions = defaultOptions$2;

function style_html$1(html_source, options, js, css$$1) {
  js = js || javascript;
  css$$1 = css$$1 || css;
  return html(html_source, options, js, css$$1);
}
style_html$1.defaultOptions = html.defaultOptions;

var js = javascript;
var css$1 = css;
var html$1 = style_html$1;

var src = {
	js: js,
	css: css$1,
	html: html$1
};

var js$1 = createCommonjsModule(function (module) {

/**
The following batches are equivalent:

var beautify_js = require('js-beautify');
var beautify_js = require('js-beautify').js;
var beautify_js = require('js-beautify').js_beautify;

var beautify_css = require('js-beautify').css;
var beautify_css = require('js-beautify').css_beautify;

var beautify_html = require('js-beautify').html;
var beautify_html = require('js-beautify').html_beautify;

All methods returned accept two arguments, the source string and an options object.
**/

function get_beautify(js_beautify, css_beautify, html_beautify) {
  // the default is js
  var beautify = function(src$$1, config) {
    return js_beautify.js_beautify(src$$1, config);
  };

  // short aliases
  beautify.js = js_beautify.js_beautify;
  beautify.css = css_beautify.css_beautify;
  beautify.html = html_beautify.html_beautify;

  // legacy aliases
  beautify.js_beautify = js_beautify.js_beautify;
  beautify.css_beautify = css_beautify.css_beautify;
  beautify.html_beautify = html_beautify.html_beautify;

  return beautify;
}

{
  (function(mod) {
    var beautifier = src;
    beautifier.js_beautify = beautifier.js;
    beautifier.css_beautify = beautifier.css;
    beautifier.html_beautify = beautifier.html;

    mod.exports = get_beautify(beautifier, beautifier, beautifier);

  })(module);
}
});

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

  return beautify ? (0, js$1.html)(jsonToXML(mjmlJson), beautifyOptions) : jsonToXML(mjmlJson);
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

  (0, _forEach2.default)(fonts, function (url, name) {
    var regex = new RegExp('"[^"]*font-family:[^"]*' + name + '[^"]*"', 'gmi');
    var inlineRegex = new RegExp('font-family:[^;}]*' + name, 'gmi');

    if (content.match(regex) || inlineStyle.some(function (s) {
      return s.match(inlineRegex);
    })) {
      toImport.push(url);
    }
  });

  if (toImport.length > 0) {
    return '\n      <!--[if !mso]><!-->\n        ' + (0, _map2.default)(toImport, function (url) {
      return '<link href="' + url + '" rel="stylesheet" type="text/css">';
    }).join('\n') + '\n        <style type="text/css">\n          ' + (0, _map2.default)(toImport, function (url) {
      return '@import url(' + url + ');';
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
      return require.resolve(compPath);
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
  return require.resolve(_path2.default.resolve(componentRootPath, compPath));
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

// var _jsBeautify = require('js-beautify');

// var _htmlMinifier = require('html-minifier');



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

  // content = beautify && beautify !== 'false' ? (0, _jsBeautify.html)(content, {
  //   indent_size: 2,
  //   wrap_attributes_indent_size: 2,
  //   max_preserve_newline: 0,
  //   preserve_newlines: false
  // }) : content;

  // if (minify && minify !== 'false') {
  //   content = (0, _htmlMinifier.minify)(content, (0, _extends3.default)({
  //     collapseWhitespace: true,
  //     minifyCSS: false,
  //     removeEmptyAttributes: true
  //   }, minifyOptions));
  // }

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

var lib$2 = createCommonjsModule(function (module, exports) {

Object.defineProperty(exports, "__esModule", {
  value: true
});



var _mjmlCore2 = _interopRequireDefault(lib$1);











function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, lib$1.registerComponent)(mjmlBody);
(0, lib$1.registerComponent)(mjmlHead);
(0, lib$1.registerComponent)(mjmlHeadAttributes);
(0, lib$1.registerComponent)(mjmlHeadBreakpoint);
(0, lib$1.registerComponent)(mjmlHeadFont);
(0, lib$1.registerComponent)(mjmlHeadPreview);
(0, lib$1.registerComponent)(mjmlHeadStyle);
(0, lib$1.registerComponent)(mjmlHeadTitle);
(0, lib$1.registerComponent)(mjmlHero);
(0, lib$1.registerComponent)(mjmlButton);
(0, lib$1.registerComponent)(mjmlColumn);
(0, lib$1.registerComponent)(mjmlDivider);
(0, lib$1.registerComponent)(mjmlGroup);
(0, lib$1.registerComponent)(mjmlImage);

(0, lib$1.registerComponent)(mjmlRaw);
(0, lib$1.registerComponent)(mjmlSection);
(0, lib$1.registerComponent)(mjmlSpacer);
(0, lib$1.registerComponent)(mjmlText);
(0, lib$1.registerComponent)(mjmlTable);
(0, lib$1.registerComponent)(mjmlWrapper);

(0, lib$1.registerComponent)(mjmlSocial.Social);
(0, lib$1.registerComponent)(mjmlSocial.SocialElement);
(0, lib$1.registerComponent)(mjmlNavbar.Navbar);
(0, lib$1.registerComponent)(mjmlNavbar.NavbarLink);
(0, lib$1.registerComponent)(mjmlAccordion.Accordion);
(0, lib$1.registerComponent)(mjmlAccordion.AccordionElement);
(0, lib$1.registerComponent)(mjmlAccordion.AccordionText);
(0, lib$1.registerComponent)(mjmlAccordion.AccordionTitle);
(0, lib$1.registerComponent)(mjmlCarousel.Carousel);
(0, lib$1.registerComponent)(mjmlCarousel.CarouselImage);

(0, lib.registerDependencies)(dependencies$1);

exports.default = _mjmlCore2.default;
module.exports = exports['default'];
});

unwrapExports(lib$2);

/*
  Compile an mjml string
*/
// const renderMJML = () => mjml2html(`
//   <mjml>
//     <mj-body>
//       <mj-section>
//         <mj-column>
//           <mj-text>
//             Hello World!
//           </mj-text>
//         </mj-column>
//       </mj-section>
//     </mj-body>
//   </mjml>
// `, {})


/*
  Print the responsive HTML generated and MJML errors if any
*/
// console.log(renderMJML())
module.exports = (req, res) => {
    // console.log(renderMJML())
    res.end('done rendering');
};
