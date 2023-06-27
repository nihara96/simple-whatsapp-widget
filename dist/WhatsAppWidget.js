"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _react = _interopRequireWildcard(require("react"));
var _ai = require("react-icons/ai");
var _framerMotion = require("framer-motion");
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i]; return arr2; }
function _iterableToArrayLimit(arr, i) { var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"]; if (null != _i) { var _s, _e, _x, _r, _arr = [], _n = !0, _d = !1; try { if (_x = (_i = _i.call(arr)).next, 0 === i) { if (Object(_i) !== _i) return; _n = !1; } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0); } catch (err) { _d = !0, _e = err; } finally { try { if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return; } finally { if (_d) throw _e; } } return _arr; } }
function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }
var WhatsAppWidget = function WhatsAppWidget(_ref) {
  var phoneNumber = _ref.phoneNumber,
    _ref$autoOpen = _ref.autoOpen,
    autoOpen = _ref$autoOpen === void 0 ? false : _ref$autoOpen,
    popupMessage = _ref.popupMessage,
    className = _ref.className;
  var _useState = (0, _react.useState)(""),
    _useState2 = _slicedToArray(_useState, 2),
    message = _useState2[0],
    setMessage = _useState2[1];
  var _useState3 = (0, _react.useState)(autoOpen),
    _useState4 = _slicedToArray(_useState3, 2),
    open = _useState4[0],
    setOpen = _useState4[1];
  var handleSendClick = function handleSendClick() {
    var whatsappURL = "https://api.whatsapp.com/send?phone=".concat(phoneNumber, "&text=").concat(encodeURIComponent(message));
    window.open(whatsappURL, "_blank");
  };
  var handleWhatsappClick = function handleWhatsappClick() {
    setOpen(!open);
  };
  return /*#__PURE__*/_react["default"].createElement(_react["default"].Fragment, null, /*#__PURE__*/_react["default"].createElement(_framerMotion.AnimatePresence, null, open && /*#__PURE__*/_react["default"].createElement(_framerMotion.motion.div, {
    initial: {
      opacity: 0,
      translateY: "10%"
    },
    animate: {
      opacity: 1,
      translateY: "0%"
    },
    exit: {
      opacity: 0,
      translateY: "10%"
    },
    className: "fixed bg-white rounded-md shadow-xl z-40 right-0 bottom-[100px] m-6"
  }, /*#__PURE__*/_react["default"].createElement("div", {
    className: "p-4 flex flex-col gap-4 ".concat(className)
  }, /*#__PURE__*/_react["default"].createElement("div", null, /*#__PURE__*/_react["default"].createElement("h5", {
    className: "text-xl font-semibold"
  }, "Hello !"), /*#__PURE__*/_react["default"].createElement("p", {
    className: "text-sm text-gray-400"
  }, popupMessage || "Message us on Whatsapp!")), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex flex-col gap-4"
  }, /*#__PURE__*/_react["default"].createElement("textarea", {
    type: "text",
    className: "w-full border px-4 py-2 rounded-md focus:outline-none focus:ring-1 focus:ring-[#25D366] placeholder:text-sm",
    placeholder: "Message...",
    value: message,
    onChange: function onChange(e) {
      setMessage(e.target.value);
    },
    required: true
  }), /*#__PURE__*/_react["default"].createElement("div", {
    className: "flex justify-end"
  }, /*#__PURE__*/_react["default"].createElement("button", {
    onClick: handleSendClick,
    className: "bg-[#25D366] flex flex-row gap-2 items-center text-white w-[70px] h-[40px] hover:text-black justify-center text-[12px] rounded-md hover:bg-transparent hover:border transition duration-200"
  }, "Send")))))), /*#__PURE__*/_react["default"].createElement("div", {
    onClick: handleWhatsappClick,
    className: "fixed bg-[#25D366] z-40 right-0 bottom-10 m-6 rounded-full p-2 cursor-pointer bg-secondary"
  }, /*#__PURE__*/_react["default"].createElement(_ai.AiOutlineWhatsApp, {
    className: "text-4xl text-white"
  })));
};
var _default = WhatsAppWidget;
exports["default"] = _default;