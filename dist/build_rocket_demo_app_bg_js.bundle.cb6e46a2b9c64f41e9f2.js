"use strict";
(self["webpackChunkrocket_demo_app"] = self["webpackChunkrocket_demo_app"] || []).push([["build_rocket_demo_app_bg_js"],{

/***/ "./build/rocket_demo_app_bg.js":
/*!*************************************!*\
  !*** ./build/rocket_demo_app_bg.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_alert_a798b2ef579e8bc7": () => (/* binding */ __wbg_alert_a798b2ef579e8bc7),
/* harmony export */   "big_computation": () => (/* binding */ big_computation)
/* harmony export */ });
/* harmony import */ var _rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket_demo_app_bg.wasm */ "./build/rocket_demo_app_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];

var lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;
var cachedTextDecoder = new lTextDecoder('utf-8', {
  ignoreBOM: true,
  fatal: true
});
cachedTextDecoder.decode();
var cachedUint8Memory0 = new Uint8Array();

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
function __wbg_alert_a798b2ef579e8bc7(arg0, arg1) {
  alert(getStringFromWasm0(arg0, arg1));
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./build/rocket_demo_app_bg.wasm":
/*!***************************************!*\
  !*** ./build/rocket_demo_app_bg.wasm ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "304921c499406ad10f56", {
		"./rocket_demo_app_bg.js": {
			"__wbg_alert_a798b2ef579e8bc7": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_a798b2ef579e8bc7
		}
	});
}
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
	try {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./rocket_demo_app_bg.js */ "./build/rocket_demo_app_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "304921c499406ad10f56", {
		"./rocket_demo_app_bg.js": {
			"__wbg_alert_a798b2ef579e8bc7": WEBPACK_IMPORTED_MODULE_0.__wbg_alert_a798b2ef579e8bc7
		}
	});
	__webpack_async_result__();
	} catch(e) { __webpack_async_result__(e); }
}, 1);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRfcm9ja2V0X2RlbW9fYXBwX2JnX2pzLmJ1bmRsZS5jYjZlNDZhMmI5YzY0ZjQxZTlmMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQSxJQUFNQyxZQUFZLEdBQUcsT0FBT0MsV0FBUCxLQUF1QixXQUF2QixHQUFxQyxDQUFDLEdBQUdDLE1BQU0sQ0FBQ0MsT0FBWCxFQUFvQixNQUFwQixFQUE0QkYsV0FBakUsR0FBK0VBLFdBQXBHO0FBRUEsSUFBSUcsaUJBQWlCLEdBQUcsSUFBSUosWUFBSixDQUFpQixPQUFqQixFQUEwQjtFQUFFSyxTQUFTLEVBQUUsSUFBYjtFQUFtQkMsS0FBSyxFQUFFO0FBQTFCLENBQTFCLENBQXhCO0FBRUFGLGlCQUFpQixDQUFDRyxNQUFsQjtBQUVBLElBQUlDLGtCQUFrQixHQUFHLElBQUlDLFVBQUosRUFBekI7O0FBRUEsU0FBU0MsZUFBVCxHQUEyQjtFQUN2QixJQUFJRixrQkFBa0IsQ0FBQ0csVUFBbkIsS0FBa0MsQ0FBdEMsRUFBeUM7SUFDckNILGtCQUFrQixHQUFHLElBQUlDLFVBQUosQ0FBZVYsbUVBQWYsQ0FBckI7RUFDSDs7RUFDRCxPQUFPUyxrQkFBUDtBQUNIOztBQUVELFNBQVNNLGtCQUFULENBQTRCQyxHQUE1QixFQUFpQ0MsR0FBakMsRUFBc0M7RUFDbEMsT0FBT1osaUJBQWlCLENBQUNHLE1BQWxCLENBQXlCRyxlQUFlLEdBQUdPLFFBQWxCLENBQTJCRixHQUEzQixFQUFnQ0EsR0FBRyxHQUFHQyxHQUF0QyxDQUF6QixDQUFQO0FBQ0g7QUFDRDtBQUNBOzs7QUFDTyxTQUFTRSxlQUFULEdBQTJCO0VBQzlCbkIscUVBQUE7QUFDSDtBQUVNLFNBQVNvQiw0QkFBVCxDQUFzQ0MsSUFBdEMsRUFBNENDLElBQTVDLEVBQWtEO0VBQ3JEQyxLQUFLLENBQUNSLGtCQUFrQixDQUFDTSxJQUFELEVBQU9DLElBQVAsQ0FBbkIsQ0FBTDtBQUNIO0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yb2NrZXQtZGVtby1hcHAvLi9idWlsZC9yb2NrZXRfZGVtb19hcHBfYmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgd2FzbSBmcm9tICcuL3JvY2tldF9kZW1vX2FwcF9iZy53YXNtJztcblxuY29uc3QgbFRleHREZWNvZGVyID0gdHlwZW9mIFRleHREZWNvZGVyID09PSAndW5kZWZpbmVkJyA/ICgwLCBtb2R1bGUucmVxdWlyZSkoJ3V0aWwnKS5UZXh0RGVjb2RlciA6IFRleHREZWNvZGVyO1xuXG5sZXQgY2FjaGVkVGV4dERlY29kZXIgPSBuZXcgbFRleHREZWNvZGVyKCd1dGYtOCcsIHsgaWdub3JlQk9NOiB0cnVlLCBmYXRhbDogdHJ1ZSB9KTtcblxuY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKCk7XG5cbmxldCBjYWNoZWRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSgpO1xuXG5mdW5jdGlvbiBnZXRVaW50OE1lbW9yeTAoKSB7XG4gICAgaWYgKGNhY2hlZFVpbnQ4TWVtb3J5MC5ieXRlTGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGNhY2hlZFVpbnQ4TWVtb3J5MCA9IG5ldyBVaW50OEFycmF5KHdhc20ubWVtb3J5LmJ1ZmZlcik7XG4gICAgfVxuICAgIHJldHVybiBjYWNoZWRVaW50OE1lbW9yeTA7XG59XG5cbmZ1bmN0aW9uIGdldFN0cmluZ0Zyb21XYXNtMChwdHIsIGxlbikge1xuICAgIHJldHVybiBjYWNoZWRUZXh0RGVjb2Rlci5kZWNvZGUoZ2V0VWludDhNZW1vcnkwKCkuc3ViYXJyYXkocHRyLCBwdHIgKyBsZW4pKTtcbn1cbi8qKlxuKi9cbmV4cG9ydCBmdW5jdGlvbiBiaWdfY29tcHV0YXRpb24oKSB7XG4gICAgd2FzbS5iaWdfY29tcHV0YXRpb24oKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2FsZXJ0X2E3OThiMmVmNTc5ZThiYzcoYXJnMCwgYXJnMSkge1xuICAgIGFsZXJ0KGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG4iXSwibmFtZXMiOlsid2FzbSIsImxUZXh0RGVjb2RlciIsIlRleHREZWNvZGVyIiwibW9kdWxlIiwicmVxdWlyZSIsImNhY2hlZFRleHREZWNvZGVyIiwiaWdub3JlQk9NIiwiZmF0YWwiLCJkZWNvZGUiLCJjYWNoZWRVaW50OE1lbW9yeTAiLCJVaW50OEFycmF5IiwiZ2V0VWludDhNZW1vcnkwIiwiYnl0ZUxlbmd0aCIsIm1lbW9yeSIsImJ1ZmZlciIsImdldFN0cmluZ0Zyb21XYXNtMCIsInB0ciIsImxlbiIsInN1YmFycmF5IiwiYmlnX2NvbXB1dGF0aW9uIiwiX193YmdfYWxlcnRfYTc5OGIyZWY1NzllOGJjNyIsImFyZzAiLCJhcmcxIiwiYWxlcnQiXSwic291cmNlUm9vdCI6IiJ9