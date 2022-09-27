"use strict";
(self["webpackChunkrocket_demo_app"] = self["webpackChunkrocket_demo_app"] || []).push([["pkg_rocket_demo_app_bg_js"],{

/***/ "./pkg/rocket_demo_app_bg.js":
/*!***********************************!*\
  !*** ./pkg/rocket_demo_app_bg.js ***!
  \***********************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_alert_d4d7bf9083e6e16e": () => (/* binding */ __wbg_alert_d4d7bf9083e6e16e),
/* harmony export */   "big_computation": () => (/* binding */ big_computation)
/* harmony export */ });
/* harmony import */ var _rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket_demo_app_bg.wasm */ "./pkg/rocket_demo_app_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

const lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
let cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
let cachedUint8Memory0 = new Uint8Array();

function getUint8Memory0() {
  if (cachedUint8Memory0.byteLength === 0) {
    cachedUint8Memory0 = new Uint8Array(_rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory.buffer);
  }

  return cachedUint8Memory0;
}

function getStringFromWasm0(ptr, len) {
  return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));
}
/**
*/


function big_computation() {
  _rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.big_computation();
}
function __wbg_alert_d4d7bf9083e6e16e(arg0, arg1) {
  alert(getStringFromWasm0(arg0, arg1));
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./pkg/rocket_demo_app_bg.wasm":
/*!*************************************!*\
  !*** ./pkg/rocket_demo_app_bg.wasm ***!
  \*************************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "10c8cde8b4ad45944ebc", {
		"./rocket_demo_app_bg.js": {
			"__wbg_alert_d4d7bf9083e6e16e": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_d4d7bf9083e6e16e
		}
	});
}
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
	try {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./rocket_demo_app_bg.js */ "./pkg/rocket_demo_app_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "10c8cde8b4ad45944ebc", {
		"./rocket_demo_app_bg.js": {
			"__wbg_alert_d4d7bf9083e6e16e": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_d4d7bf9083e6e16e
		}
	});
	__webpack_async_result__();
	} catch(e) { __webpack_async_result__(e); }
}, 1);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGtnX3JvY2tldF9kZW1vX2FwcF9iZ19qcy5idW5kbGUuNGM1NWI4OTk3NjQ3MDQ2OWM2ODUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsTUFBTUMsWUFBWSxHQUFHLE9BQU9DLFdBQVAsS0FBdUIsV0FBdkIsR0FBcUMsQ0FBQyxHQUFHQyxNQUFNLENBQUNDLE9BQVgsRUFBb0IsTUFBcEIsRUFBNEJGLFdBQWpFLEdBQStFQSxXQUFwRztBQUVBLElBQUlHLGlCQUFpQixHQUFHLElBQUlKLFlBQUosQ0FBaUIsT0FBakIsRUFBMEI7RUFBRUssU0FBUyxFQUFFLElBQWI7RUFBbUJDLEtBQUssRUFBRTtBQUExQixDQUExQixDQUF4QjtBQUVBRixpQkFBaUIsQ0FBQ0csTUFBbEI7QUFFQSxJQUFJQyxrQkFBa0IsR0FBRyxJQUFJQyxVQUFKLEVBQXpCOztBQUVBLFNBQVNDLGVBQVQsR0FBMkI7RUFDdkIsSUFBSUYsa0JBQWtCLENBQUNHLFVBQW5CLEtBQWtDLENBQXRDLEVBQXlDO0lBQ3JDSCxrQkFBa0IsR0FBRyxJQUFJQyxVQUFKLENBQWVWLG1FQUFmLENBQXJCO0VBQ0g7O0VBQ0QsT0FBT1Msa0JBQVA7QUFDSDs7QUFFRCxTQUFTTSxrQkFBVCxDQUE0QkMsR0FBNUIsRUFBaUNDLEdBQWpDLEVBQXNDO0VBQ2xDLE9BQU9aLGlCQUFpQixDQUFDRyxNQUFsQixDQUF5QkcsZUFBZSxHQUFHTyxRQUFsQixDQUEyQkYsR0FBM0IsRUFBZ0NBLEdBQUcsR0FBR0MsR0FBdEMsQ0FBekIsQ0FBUDtBQUNIO0FBQ0Q7QUFDQTs7O0FBQ08sU0FBU0UsZUFBVCxHQUEyQjtFQUM5Qm5CLHFFQUFBO0FBQ0g7QUFFTSxTQUFTb0IsNEJBQVQsQ0FBc0NDLElBQXRDLEVBQTRDQyxJQUE1QyxFQUFrRDtFQUNyREMsS0FBSyxDQUFDUixrQkFBa0IsQ0FBQ00sSUFBRCxFQUFPQyxJQUFQLENBQW5CLENBQUw7QUFDSDtBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcm9ja2V0LWRlbW8tYXBwLy4vcGtnL3JvY2tldF9kZW1vX2FwcF9iZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vcm9ja2V0X2RlbW9fYXBwX2JnLndhc20nO1xuXG5jb25zdCBsVGV4dERlY29kZXIgPSB0eXBlb2YgVGV4dERlY29kZXIgPT09ICd1bmRlZmluZWQnID8gKDAsIG1vZHVsZS5yZXF1aXJlKSgndXRpbCcpLlRleHREZWNvZGVyIDogVGV4dERlY29kZXI7XG5cbmxldCBjYWNoZWRUZXh0RGVjb2RlciA9IG5ldyBsVGV4dERlY29kZXIoJ3V0Zi04JywgeyBpZ25vcmVCT006IHRydWUsIGZhdGFsOiB0cnVlIH0pO1xuXG5jYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoKTtcblxubGV0IGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KCk7XG5cbmZ1bmN0aW9uIGdldFVpbnQ4TWVtb3J5MCgpIHtcbiAgICBpZiAoY2FjaGVkVWludDhNZW1vcnkwLmJ5dGVMZW5ndGggPT09IDApIHtcbiAgICAgICAgY2FjaGVkVWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkod2FzbS5tZW1vcnkuYnVmZmVyKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlZFVpbnQ4TWVtb3J5MDtcbn1cblxuZnVuY3Rpb24gZ2V0U3RyaW5nRnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGNhY2hlZFRleHREZWNvZGVyLmRlY29kZShnZXRVaW50OE1lbW9yeTAoKS5zdWJhcnJheShwdHIsIHB0ciArIGxlbikpO1xufVxuLyoqXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGJpZ19jb21wdXRhdGlvbigpIHtcbiAgICB3YXNtLmJpZ19jb21wdXRhdGlvbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfYWxlcnRfZDRkN2JmOTA4M2U2ZTE2ZShhcmcwLCBhcmcxKSB7XG4gICAgYWxlcnQoZ2V0U3RyaW5nRnJvbVdhc20wKGFyZzAsIGFyZzEpKTtcbn07XG5cbiJdLCJuYW1lcyI6WyJ3YXNtIiwibFRleHREZWNvZGVyIiwiVGV4dERlY29kZXIiLCJtb2R1bGUiLCJyZXF1aXJlIiwiY2FjaGVkVGV4dERlY29kZXIiLCJpZ25vcmVCT00iLCJmYXRhbCIsImRlY29kZSIsImNhY2hlZFVpbnQ4TWVtb3J5MCIsIlVpbnQ4QXJyYXkiLCJnZXRVaW50OE1lbW9yeTAiLCJieXRlTGVuZ3RoIiwibWVtb3J5IiwiYnVmZmVyIiwiZ2V0U3RyaW5nRnJvbVdhc20wIiwicHRyIiwibGVuIiwic3ViYXJyYXkiLCJiaWdfY29tcHV0YXRpb24iLCJfX3diZ19hbGVydF9kNGQ3YmY5MDgzZTZlMTZlIiwiYXJnMCIsImFyZzEiLCJhbGVydCJdLCJzb3VyY2VSb290IjoiIn0=