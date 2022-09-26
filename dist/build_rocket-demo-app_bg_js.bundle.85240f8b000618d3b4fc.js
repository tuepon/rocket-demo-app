"use strict";
(self["webpackChunkrocket_demo_app"] = self["webpackChunkrocket_demo_app"] || []).push([["build_rocket-demo-app_bg_js"],{

/***/ "./build/rocket-demo-app_bg.js":
/*!*************************************!*\
  !*** ./build/rocket-demo-app_bg.js ***!
  \*************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "__wbg_buffer_3f3d764d4747d564": () => (/* binding */ __wbg_buffer_3f3d764d4747d564),
/* harmony export */   "__wbg_call_97ae9d8645dc388b": () => (/* binding */ __wbg_call_97ae9d8645dc388b),
/* harmony export */   "__wbg_crypto_2036bed7c44c25e7": () => (/* binding */ __wbg_crypto_2036bed7c44c25e7),
/* harmony export */   "__wbg_getRandomValues_b99eec4244a475bb": () => (/* binding */ __wbg_getRandomValues_b99eec4244a475bb),
/* harmony export */   "__wbg_globalThis_7f206bda628d5286": () => (/* binding */ __wbg_globalThis_7f206bda628d5286),
/* harmony export */   "__wbg_global_ba75c50d1cf384f4": () => (/* binding */ __wbg_global_ba75c50d1cf384f4),
/* harmony export */   "__wbg_length_9e1ae1900cb0fbd5": () => (/* binding */ __wbg_length_9e1ae1900cb0fbd5),
/* harmony export */   "__wbg_msCrypto_a21fc88caf1ecdc8": () => (/* binding */ __wbg_msCrypto_a21fc88caf1ecdc8),
/* harmony export */   "__wbg_new_8c3f0052272a457a": () => (/* binding */ __wbg_new_8c3f0052272a457a),
/* harmony export */   "__wbg_newnoargs_b5b063fc6c2f0376": () => (/* binding */ __wbg_newnoargs_b5b063fc6c2f0376),
/* harmony export */   "__wbg_newwithlength_f5933855e4f48a19": () => (/* binding */ __wbg_newwithlength_f5933855e4f48a19),
/* harmony export */   "__wbg_node_7ff1ce49caf23815": () => (/* binding */ __wbg_node_7ff1ce49caf23815),
/* harmony export */   "__wbg_process_0cc2ada8524d6f83": () => (/* binding */ __wbg_process_0cc2ada8524d6f83),
/* harmony export */   "__wbg_randomFillSync_065afffde01daa66": () => (/* binding */ __wbg_randomFillSync_065afffde01daa66),
/* harmony export */   "__wbg_require_a746e79b322b9336": () => (/* binding */ __wbg_require_a746e79b322b9336),
/* harmony export */   "__wbg_self_6d479506f72c6a71": () => (/* binding */ __wbg_self_6d479506f72c6a71),
/* harmony export */   "__wbg_set_83db9690f9353e79": () => (/* binding */ __wbg_set_83db9690f9353e79),
/* harmony export */   "__wbg_static_accessor_NODE_MODULE_cf6401cc1091279e": () => (/* binding */ __wbg_static_accessor_NODE_MODULE_cf6401cc1091279e),
/* harmony export */   "__wbg_subarray_58ad4efbb5bcb886": () => (/* binding */ __wbg_subarray_58ad4efbb5bcb886),
/* harmony export */   "__wbg_versions_c11acceab27a6c87": () => (/* binding */ __wbg_versions_c11acceab27a6c87),
/* harmony export */   "__wbg_window_f2557cc78490aceb": () => (/* binding */ __wbg_window_f2557cc78490aceb),
/* harmony export */   "__wbindgen_is_object": () => (/* binding */ __wbindgen_is_object),
/* harmony export */   "__wbindgen_is_string": () => (/* binding */ __wbindgen_is_string),
/* harmony export */   "__wbindgen_is_undefined": () => (/* binding */ __wbindgen_is_undefined),
/* harmony export */   "__wbindgen_memory": () => (/* binding */ __wbindgen_memory),
/* harmony export */   "__wbindgen_object_clone_ref": () => (/* binding */ __wbindgen_object_clone_ref),
/* harmony export */   "__wbindgen_object_drop_ref": () => (/* binding */ __wbindgen_object_drop_ref),
/* harmony export */   "__wbindgen_throw": () => (/* binding */ __wbindgen_throw)
/* harmony export */ });
/* harmony import */ var _rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./rocket-demo-app_bg.wasm */ "./build/rocket-demo-app_bg.wasm");
/* module decorator */ module = __webpack_require__.hmd(module);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__]);
_rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }


var heap = new Array(32).fill(undefined);
heap.push(undefined, null, true, false);

function getObject(idx) {
  return heap[idx];
}

var heap_next = heap.length;

function addHeapObject(obj) {
  if (heap_next === heap.length) heap.push(heap.length + 1);
  var idx = heap_next;
  heap_next = heap[idx];
  heap[idx] = obj;
  return idx;
}

function dropObject(idx) {
  if (idx < 36) return;
  heap[idx] = heap_next;
  heap_next = idx;
}

function takeObject(idx) {
  var ret = getObject(idx);
  dropObject(idx);
  return ret;
}

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

function handleError(f, args) {
  try {
    return f.apply(this, args);
  } catch (e) {
    _rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.__wbindgen_exn_store(addHeapObject(e));
  }
}

function getArrayU8FromWasm0(ptr, len) {
  return getUint8Memory0().subarray(ptr / 1, ptr / 1 + len);
}

function __wbg_msCrypto_a21fc88caf1ecdc8(arg0) {
  var ret = getObject(arg0).msCrypto;
  return addHeapObject(ret);
}
;
function __wbg_crypto_2036bed7c44c25e7(arg0) {
  var ret = getObject(arg0).crypto;
  return addHeapObject(ret);
}
;
function __wbg_getRandomValues_b99eec4244a475bb() {
  return handleError(function (arg0, arg1) {
    getObject(arg0).getRandomValues(getObject(arg1));
  }, arguments);
}
;
function __wbg_static_accessor_NODE_MODULE_cf6401cc1091279e() {
  var ret = module;
  return addHeapObject(ret);
}
;
function __wbg_require_a746e79b322b9336() {
  return handleError(function (arg0, arg1, arg2) {
    var ret = getObject(arg0).require(getStringFromWasm0(arg1, arg2));

    return addHeapObject(ret);
  }, arguments);
}
;
function __wbg_randomFillSync_065afffde01daa66() {
  return handleError(function (arg0, arg1, arg2) {
    getObject(arg0).randomFillSync(getArrayU8FromWasm0(arg1, arg2));
  }, arguments);
}
;
function __wbg_process_0cc2ada8524d6f83(arg0) {
  var ret = getObject(arg0).process;
  return addHeapObject(ret);
}
;
function __wbg_versions_c11acceab27a6c87(arg0) {
  var ret = getObject(arg0).versions;
  return addHeapObject(ret);
}
;
function __wbg_node_7ff1ce49caf23815(arg0) {
  var ret = getObject(arg0).node;
  return addHeapObject(ret);
}
;
function __wbindgen_is_object(arg0) {
  var val = getObject(arg0);
  var ret = _typeof(val) === 'object' && val !== null;
  return ret;
}
;
function __wbindgen_is_string(arg0) {
  var ret = typeof getObject(arg0) === 'string';
  return ret;
}
;
function __wbg_newnoargs_b5b063fc6c2f0376(arg0, arg1) {
  var ret = new Function(getStringFromWasm0(arg0, arg1));
  return addHeapObject(ret);
}
;
function __wbg_call_97ae9d8645dc388b() {
  return handleError(function (arg0, arg1) {
    var ret = getObject(arg0).call(getObject(arg1));
    return addHeapObject(ret);
  }, arguments);
}
;
function __wbg_globalThis_7f206bda628d5286() {
  return handleError(function () {
    var ret = globalThis.globalThis;
    return addHeapObject(ret);
  }, arguments);
}
;
function __wbg_self_6d479506f72c6a71() {
  return handleError(function () {
    var ret = self.self;
    return addHeapObject(ret);
  }, arguments);
}
;
function __wbg_window_f2557cc78490aceb() {
  return handleError(function () {
    var ret = window.window;
    return addHeapObject(ret);
  }, arguments);
}
;
function __wbg_global_ba75c50d1cf384f4() {
  return handleError(function () {
    var ret = __webpack_require__.g.global;
    return addHeapObject(ret);
  }, arguments);
}
;
function __wbg_new_8c3f0052272a457a(arg0) {
  var ret = new Uint8Array(getObject(arg0));
  return addHeapObject(ret);
}
;
function __wbg_newwithlength_f5933855e4f48a19(arg0) {
  var ret = new Uint8Array(arg0 >>> 0);
  return addHeapObject(ret);
}
;
function __wbg_subarray_58ad4efbb5bcb886(arg0, arg1, arg2) {
  var ret = getObject(arg0).subarray(arg1 >>> 0, arg2 >>> 0);
  return addHeapObject(ret);
}
;
function __wbg_length_9e1ae1900cb0fbd5(arg0) {
  var ret = getObject(arg0).length;
  return ret;
}
;
function __wbg_set_83db9690f9353e79(arg0, arg1, arg2) {
  getObject(arg0).set(getObject(arg1), arg2 >>> 0);
}
;
function __wbindgen_is_undefined(arg0) {
  var ret = getObject(arg0) === undefined;
  return ret;
}
;
function __wbindgen_object_clone_ref(arg0) {
  var ret = getObject(arg0);
  return addHeapObject(ret);
}
;
function __wbindgen_object_drop_ref(arg0) {
  takeObject(arg0);
}
;
function __wbg_buffer_3f3d764d4747d564(arg0) {
  var ret = getObject(arg0).buffer;
  return addHeapObject(ret);
}
;
function __wbindgen_throw(arg0, arg1) {
  throw new Error(getStringFromWasm0(arg0, arg1));
}
;
function __wbindgen_memory() {
  var ret = _rocket_demo_app_bg_wasm__WEBPACK_IMPORTED_MODULE_0__.memory;
  return addHeapObject(ret);
}
;
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ "./build/rocket-demo-app_bg.wasm":
/*!***************************************!*\
  !*** ./build/rocket-demo-app_bg.wasm ***!
  \***************************************/
/***/ ((module, exports, __webpack_require__) => {

var __webpack_instantiate__ = ([WEBPACK_IMPORTED_MODULE_0]) => {
	return __webpack_require__.v(exports, module.id, "510b7fb0743f8db7eba1", {
		"./rocket-demo-app_bg.js": {
			"__wbg_msCrypto_a21fc88caf1ecdc8": WEBPACK_IMPORTED_MODULE_0.__wbg_msCrypto_a21fc88caf1ecdc8,
			"__wbg_crypto_2036bed7c44c25e7": WEBPACK_IMPORTED_MODULE_0.__wbg_crypto_2036bed7c44c25e7,
			"__wbg_getRandomValues_b99eec4244a475bb": WEBPACK_IMPORTED_MODULE_0.__wbg_getRandomValues_b99eec4244a475bb,
			"__wbg_static_accessor_NODE_MODULE_cf6401cc1091279e": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_NODE_MODULE_cf6401cc1091279e,
			"__wbg_require_a746e79b322b9336": WEBPACK_IMPORTED_MODULE_0.__wbg_require_a746e79b322b9336,
			"__wbg_randomFillSync_065afffde01daa66": WEBPACK_IMPORTED_MODULE_0.__wbg_randomFillSync_065afffde01daa66,
			"__wbg_process_0cc2ada8524d6f83": WEBPACK_IMPORTED_MODULE_0.__wbg_process_0cc2ada8524d6f83,
			"__wbg_versions_c11acceab27a6c87": WEBPACK_IMPORTED_MODULE_0.__wbg_versions_c11acceab27a6c87,
			"__wbg_node_7ff1ce49caf23815": WEBPACK_IMPORTED_MODULE_0.__wbg_node_7ff1ce49caf23815,
			"__wbindgen_is_object": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_object,
			"__wbindgen_is_string": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_string,
			"__wbg_newnoargs_b5b063fc6c2f0376": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_b5b063fc6c2f0376,
			"__wbg_call_97ae9d8645dc388b": WEBPACK_IMPORTED_MODULE_0.__wbg_call_97ae9d8645dc388b,
			"__wbg_globalThis_7f206bda628d5286": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_7f206bda628d5286,
			"__wbg_self_6d479506f72c6a71": WEBPACK_IMPORTED_MODULE_0.__wbg_self_6d479506f72c6a71,
			"__wbg_window_f2557cc78490aceb": WEBPACK_IMPORTED_MODULE_0.__wbg_window_f2557cc78490aceb,
			"__wbg_global_ba75c50d1cf384f4": WEBPACK_IMPORTED_MODULE_0.__wbg_global_ba75c50d1cf384f4,
			"__wbg_new_8c3f0052272a457a": WEBPACK_IMPORTED_MODULE_0.__wbg_new_8c3f0052272a457a,
			"__wbg_newwithlength_f5933855e4f48a19": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithlength_f5933855e4f48a19,
			"__wbg_subarray_58ad4efbb5bcb886": WEBPACK_IMPORTED_MODULE_0.__wbg_subarray_58ad4efbb5bcb886,
			"__wbg_length_9e1ae1900cb0fbd5": WEBPACK_IMPORTED_MODULE_0.__wbg_length_9e1ae1900cb0fbd5,
			"__wbg_set_83db9690f9353e79": WEBPACK_IMPORTED_MODULE_0.__wbg_set_83db9690f9353e79,
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
			"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
			"__wbg_buffer_3f3d764d4747d564": WEBPACK_IMPORTED_MODULE_0.__wbg_buffer_3f3d764d4747d564,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,
			"__wbindgen_memory": WEBPACK_IMPORTED_MODULE_0.__wbindgen_memory
		}
	});
}
__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => {
	try {
	/* harmony import */ var WEBPACK_IMPORTED_MODULE_0 = __webpack_require__(/*! ./rocket-demo-app_bg.js */ "./build/rocket-demo-app_bg.js");
	var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([WEBPACK_IMPORTED_MODULE_0]);
	var [WEBPACK_IMPORTED_MODULE_0] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__;
	await __webpack_require__.v(exports, module.id, "510b7fb0743f8db7eba1", {
		"./rocket-demo-app_bg.js": {
			"__wbg_msCrypto_a21fc88caf1ecdc8": WEBPACK_IMPORTED_MODULE_0.__wbg_msCrypto_a21fc88caf1ecdc8,
			"__wbg_crypto_2036bed7c44c25e7": WEBPACK_IMPORTED_MODULE_0.__wbg_crypto_2036bed7c44c25e7,
			"__wbg_getRandomValues_b99eec4244a475bb": WEBPACK_IMPORTED_MODULE_0.__wbg_getRandomValues_b99eec4244a475bb,
			"__wbg_static_accessor_NODE_MODULE_cf6401cc1091279e": WEBPACK_IMPORTED_MODULE_0.__wbg_static_accessor_NODE_MODULE_cf6401cc1091279e,
			"__wbg_require_a746e79b322b9336": WEBPACK_IMPORTED_MODULE_0.__wbg_require_a746e79b322b9336,
			"__wbg_randomFillSync_065afffde01daa66": WEBPACK_IMPORTED_MODULE_0.__wbg_randomFillSync_065afffde01daa66,
			"__wbg_process_0cc2ada8524d6f83": WEBPACK_IMPORTED_MODULE_0.__wbg_process_0cc2ada8524d6f83,
			"__wbg_versions_c11acceab27a6c87": WEBPACK_IMPORTED_MODULE_0.__wbg_versions_c11acceab27a6c87,
			"__wbg_node_7ff1ce49caf23815": WEBPACK_IMPORTED_MODULE_0.__wbg_node_7ff1ce49caf23815,
			"__wbindgen_is_object": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_object,
			"__wbindgen_is_string": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_string,
			"__wbg_newnoargs_b5b063fc6c2f0376": WEBPACK_IMPORTED_MODULE_0.__wbg_newnoargs_b5b063fc6c2f0376,
			"__wbg_call_97ae9d8645dc388b": WEBPACK_IMPORTED_MODULE_0.__wbg_call_97ae9d8645dc388b,
			"__wbg_globalThis_7f206bda628d5286": WEBPACK_IMPORTED_MODULE_0.__wbg_globalThis_7f206bda628d5286,
			"__wbg_self_6d479506f72c6a71": WEBPACK_IMPORTED_MODULE_0.__wbg_self_6d479506f72c6a71,
			"__wbg_window_f2557cc78490aceb": WEBPACK_IMPORTED_MODULE_0.__wbg_window_f2557cc78490aceb,
			"__wbg_global_ba75c50d1cf384f4": WEBPACK_IMPORTED_MODULE_0.__wbg_global_ba75c50d1cf384f4,
			"__wbg_new_8c3f0052272a457a": WEBPACK_IMPORTED_MODULE_0.__wbg_new_8c3f0052272a457a,
			"__wbg_newwithlength_f5933855e4f48a19": WEBPACK_IMPORTED_MODULE_0.__wbg_newwithlength_f5933855e4f48a19,
			"__wbg_subarray_58ad4efbb5bcb886": WEBPACK_IMPORTED_MODULE_0.__wbg_subarray_58ad4efbb5bcb886,
			"__wbg_length_9e1ae1900cb0fbd5": WEBPACK_IMPORTED_MODULE_0.__wbg_length_9e1ae1900cb0fbd5,
			"__wbg_set_83db9690f9353e79": WEBPACK_IMPORTED_MODULE_0.__wbg_set_83db9690f9353e79,
			"__wbindgen_is_undefined": WEBPACK_IMPORTED_MODULE_0.__wbindgen_is_undefined,
			"__wbindgen_object_clone_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_clone_ref,
			"__wbindgen_object_drop_ref": WEBPACK_IMPORTED_MODULE_0.__wbindgen_object_drop_ref,
			"__wbg_buffer_3f3d764d4747d564": WEBPACK_IMPORTED_MODULE_0.__wbg_buffer_3f3d764d4747d564,
			"__wbindgen_throw": WEBPACK_IMPORTED_MODULE_0.__wbindgen_throw,
			"__wbindgen_memory": WEBPACK_IMPORTED_MODULE_0.__wbindgen_memory
		}
	});
	__webpack_async_result__();
	} catch(e) { __webpack_async_result__(e); }
}, 1);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVpbGRfcm9ja2V0LWRlbW8tYXBwX2JnX2pzLmJ1bmRsZS44NTI0MGY4YjAwMDYxOGQzYjRmYy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUEsSUFBTUMsSUFBSSxHQUFHLElBQUlDLEtBQUosQ0FBVSxFQUFWLEVBQWNDLElBQWQsQ0FBbUJDLFNBQW5CLENBQWI7QUFFQUgsSUFBSSxDQUFDSSxJQUFMLENBQVVELFNBQVYsRUFBcUIsSUFBckIsRUFBMkIsSUFBM0IsRUFBaUMsS0FBakM7O0FBRUEsU0FBU0UsU0FBVCxDQUFtQkMsR0FBbkIsRUFBd0I7RUFBRSxPQUFPTixJQUFJLENBQUNNLEdBQUQsQ0FBWDtBQUFtQjs7QUFFN0MsSUFBSUMsU0FBUyxHQUFHUCxJQUFJLENBQUNRLE1BQXJCOztBQUVBLFNBQVNDLGFBQVQsQ0FBdUJDLEdBQXZCLEVBQTRCO0VBQ3hCLElBQUlILFNBQVMsS0FBS1AsSUFBSSxDQUFDUSxNQUF2QixFQUErQlIsSUFBSSxDQUFDSSxJQUFMLENBQVVKLElBQUksQ0FBQ1EsTUFBTCxHQUFjLENBQXhCO0VBQy9CLElBQU1GLEdBQUcsR0FBR0MsU0FBWjtFQUNBQSxTQUFTLEdBQUdQLElBQUksQ0FBQ00sR0FBRCxDQUFoQjtFQUVBTixJQUFJLENBQUNNLEdBQUQsQ0FBSixHQUFZSSxHQUFaO0VBQ0EsT0FBT0osR0FBUDtBQUNIOztBQUVELFNBQVNLLFVBQVQsQ0FBb0JMLEdBQXBCLEVBQXlCO0VBQ3JCLElBQUlBLEdBQUcsR0FBRyxFQUFWLEVBQWM7RUFDZE4sSUFBSSxDQUFDTSxHQUFELENBQUosR0FBWUMsU0FBWjtFQUNBQSxTQUFTLEdBQUdELEdBQVo7QUFDSDs7QUFFRCxTQUFTTSxVQUFULENBQW9CTixHQUFwQixFQUF5QjtFQUNyQixJQUFNTyxHQUFHLEdBQUdSLFNBQVMsQ0FBQ0MsR0FBRCxDQUFyQjtFQUNBSyxVQUFVLENBQUNMLEdBQUQsQ0FBVjtF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aWxkL3JvY2tldC1kZW1vLWFwcF9iZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyB3YXNtIGZyb20gJy4vcm9ja2V0LWRlbW8tYXBwX2JnLndhc20nO1xuXG5jb25zdCBoZWFwID0gbmV3IEFycmF5KDMyKS5maWxsKHVuZGVmaW5lZCk7XG5cbmhlYXAucHVzaCh1bmRlZmluZWQsIG51bGwsIHRydWUsIGZhbHNlKTtcblxuZnVuY3Rpb24gZ2V0T2JqZWN0KGlkeCkgeyByZXR1cm4gaGVhcFtpZHhdOyB9XG5cbmxldCBoZWFwX25leHQgPSBoZWFwLmxlbmd0aDtcblxuZnVuY3Rpb24gYWRkSGVhcE9iamVjdChvYmopIHtcbiAgICBpZiAoaGVhcF9uZXh0ID09PSBoZWFwLmxlbmd0aCkgaGVhcC5wdXNoKGhlYXAubGVuZ3RoICsgMSk7XG4gICAgY29uc3QgaWR4ID0gaGVhcF9uZXh0O1xuICAgIGhlYXBfbmV4dCA9IGhlYXBbaWR4XTtcblxuICAgIGhlYXBbaWR4XSA9IG9iajtcbiAgICByZXR1cm4gaWR4O1xufVxuXG5mdW5jdGlvbiBkcm9wT2JqZWN0KGlkeCkge1xuICAgIGlmIChpZHggPCAzNikgcmV0dXJuO1xuICAgIGhlYXBbaWR4XSA9IGhlYXBfbmV4dDtcbiAgICBoZWFwX25leHQgPSBpZHg7XG59XG5cbmZ1bmN0aW9uIHRha2VPYmplY3QoaWR4KSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGlkeCk7XG4gICAgZHJvcE9iamVjdChpZHgpO1xuICAgIHJldHVybiByZXQ7XG59XG5cbmNvbnN0IGxUZXh0RGVjb2RlciA9IHR5cGVvZiBUZXh0RGVjb2RlciA9PT0gJ3VuZGVmaW5lZCcgPyAoMCwgbW9kdWxlLnJlcXVpcmUpKCd1dGlsJykuVGV4dERlY29kZXIgOiBUZXh0RGVjb2RlcjtcblxubGV0IGNhY2hlZFRleHREZWNvZGVyID0gbmV3IGxUZXh0RGVjb2RlcigndXRmLTgnLCB7IGlnbm9yZUJPTTogdHJ1ZSwgZmF0YWw6IHRydWUgfSk7XG5cbmNhY2hlZFRleHREZWNvZGVyLmRlY29kZSgpO1xuXG5sZXQgY2FjaGVkVWludDhNZW1vcnkwID0gbmV3IFVpbnQ4QXJyYXkoKTtcblxuZnVuY3Rpb24gZ2V0VWludDhNZW1vcnkwKCkge1xuICAgIGlmIChjYWNoZWRVaW50OE1lbW9yeTAuYnl0ZUxlbmd0aCA9PT0gMCkge1xuICAgICAgICBjYWNoZWRVaW50OE1lbW9yeTAgPSBuZXcgVWludDhBcnJheSh3YXNtLm1lbW9yeS5idWZmZXIpO1xuICAgIH1cbiAgICByZXR1cm4gY2FjaGVkVWludDhNZW1vcnkwO1xufVxuXG5mdW5jdGlvbiBnZXRTdHJpbmdGcm9tV2FzbTAocHRyLCBsZW4pIHtcbiAgICByZXR1cm4gY2FjaGVkVGV4dERlY29kZXIuZGVjb2RlKGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciwgcHRyICsgbGVuKSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUVycm9yKGYsIGFyZ3MpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHdhc20uX193YmluZGdlbl9leG5fc3RvcmUoYWRkSGVhcE9iamVjdChlKSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBnZXRBcnJheVU4RnJvbVdhc20wKHB0ciwgbGVuKSB7XG4gICAgcmV0dXJuIGdldFVpbnQ4TWVtb3J5MCgpLnN1YmFycmF5KHB0ciAvIDEsIHB0ciAvIDEgKyBsZW4pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbXNDcnlwdG9fYTIxZmM4OGNhZjFlY2RjOChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLm1zQ3J5cHRvO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfY3J5cHRvXzIwMzZiZWQ3YzQ0YzI1ZTcoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5jcnlwdG87XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19nZXRSYW5kb21WYWx1ZXNfYjk5ZWVjNDI0NGE0NzViYigpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uIChhcmcwLCBhcmcxKSB7XG4gICAgZ2V0T2JqZWN0KGFyZzApLmdldFJhbmRvbVZhbHVlcyhnZXRPYmplY3QoYXJnMSkpO1xufSwgYXJndW1lbnRzKSB9O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc3RhdGljX2FjY2Vzc29yX05PREVfTU9EVUxFX2NmNjQwMWNjMTA5MTI3OWUoKSB7XG4gICAgY29uc3QgcmV0ID0gbW9kdWxlO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfcmVxdWlyZV9hNzQ2ZTc5YjMyMmI5MzM2KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkucmVxdWlyZShnZXRTdHJpbmdGcm9tV2FzbTAoYXJnMSwgYXJnMikpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19yYW5kb21GaWxsU3luY18wNjVhZmZmZGUwMWRhYTY2KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKGFyZzAsIGFyZzEsIGFyZzIpIHtcbiAgICBnZXRPYmplY3QoYXJnMCkucmFuZG9tRmlsbFN5bmMoZ2V0QXJyYXlVOEZyb21XYXNtMChhcmcxLCBhcmcyKSk7XG59LCBhcmd1bWVudHMpIH07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19wcm9jZXNzXzBjYzJhZGE4NTI0ZDZmODMoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5wcm9jZXNzO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfdmVyc2lvbnNfYzExYWNjZWFiMjdhNmM4NyhhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApLnZlcnNpb25zO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfbm9kZV83ZmYxY2U0OWNhZjIzODE1KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkubm9kZTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faXNfb2JqZWN0KGFyZzApIHtcbiAgICBjb25zdCB2YWwgPSBnZXRPYmplY3QoYXJnMCk7XG4gICAgY29uc3QgcmV0ID0gdHlwZW9mKHZhbCkgPT09ICdvYmplY3QnICYmIHZhbCAhPT0gbnVsbDtcbiAgICByZXR1cm4gcmV0O1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5faXNfc3RyaW5nKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSB0eXBlb2YoZ2V0T2JqZWN0KGFyZzApKSA9PT0gJ3N0cmluZyc7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19uZXdub2FyZ3NfYjViMDYzZmM2YzJmMDM3NihhcmcwLCBhcmcxKSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEZ1bmN0aW9uKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diZ19jYWxsXzk3YWU5ZDg2NDVkYzM4OGIoKSB7IHJldHVybiBoYW5kbGVFcnJvcihmdW5jdGlvbiAoYXJnMCwgYXJnMSkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5jYWxsKGdldE9iamVjdChhcmcxKSk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dsb2JhbFRoaXNfN2YyMDZiZGE2MjhkNTI4NigpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBnbG9iYWxUaGlzLmdsb2JhbFRoaXM7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3NlbGZfNmQ0Nzk1MDZmNzJjNmE3MSgpIHsgcmV0dXJuIGhhbmRsZUVycm9yKGZ1bmN0aW9uICgpIHtcbiAgICBjb25zdCByZXQgPSBzZWxmLnNlbGY7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3dpbmRvd19mMjU1N2NjNzg0OTBhY2ViKCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IHdpbmRvdy53aW5kb3c7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2dsb2JhbF9iYTc1YzUwZDFjZjM4NGY0KCkgeyByZXR1cm4gaGFuZGxlRXJyb3IoZnVuY3Rpb24gKCkge1xuICAgIGNvbnN0IHJldCA9IGdsb2JhbC5nbG9iYWw7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn0sIGFyZ3VtZW50cykgfTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX25ld184YzNmMDA1MjI3MmE0NTdhKGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShnZXRPYmplY3QoYXJnMCkpO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmdfbmV3d2l0aGxlbmd0aF9mNTkzMzg1NWU0ZjQ4YTE5KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVWludDhBcnJheShhcmcwID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX3N1YmFycmF5XzU4YWQ0ZWZiYjViY2I4ODYoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKS5zdWJhcnJheShhcmcxID4+PiAwLCBhcmcyID4+PiAwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2xlbmd0aF85ZTFhZTE5MDBjYjBmYmQ1KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkubGVuZ3RoO1xuICAgIHJldHVybiByZXQ7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193Ymdfc2V0XzgzZGI5NjkwZjkzNTNlNzkoYXJnMCwgYXJnMSwgYXJnMikge1xuICAgIGdldE9iamVjdChhcmcwKS5zZXQoZ2V0T2JqZWN0KGFyZzEpLCBhcmcyID4+PiAwKTtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZChhcmcwKSB7XG4gICAgY29uc3QgcmV0ID0gZ2V0T2JqZWN0KGFyZzApID09PSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHJldDtcbn07XG5cbmV4cG9ydCBmdW5jdGlvbiBfX3diaW5kZ2VuX29iamVjdF9jbG9uZV9yZWYoYXJnMCkge1xuICAgIGNvbnN0IHJldCA9IGdldE9iamVjdChhcmcwKTtcbiAgICByZXR1cm4gYWRkSGVhcE9iamVjdChyZXQpO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmKGFyZzApIHtcbiAgICB0YWtlT2JqZWN0KGFyZzApO1xufTtcblxuZXhwb3J0IGZ1bmN0aW9uIF9fd2JnX2J1ZmZlcl8zZjNkNzY0ZDQ3NDdkNTY0KGFyZzApIHtcbiAgICBjb25zdCByZXQgPSBnZXRPYmplY3QoYXJnMCkuYnVmZmVyO1xuICAgIHJldHVybiBhZGRIZWFwT2JqZWN0KHJldCk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl90aHJvdyhhcmcwLCBhcmcxKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKGdldFN0cmluZ0Zyb21XYXNtMChhcmcwLCBhcmcxKSk7XG59O1xuXG5leHBvcnQgZnVuY3Rpb24gX193YmluZGdlbl9tZW1vcnkoKSB7XG4gICAgY29uc3QgcmV0ID0gd2FzbS5tZW1vcnk7XG4gICAgcmV0dXJuIGFkZEhlYXBPYmplY3QocmV0KTtcbn07XG5cbiJdLCJuYW1lcyI6WyJ3YXNtIiwiaGVhcCIsIkFycmF5IiwiZmlsbCIsInVuZGVmaW5lZCIsInB1c2giLCJnZXRPYmplY3QiLCJpZHgiLCJoZWFwX25leHQiLCJsZW5ndGgiLCJhZGRIZWFwT2JqZWN0Iiwib2JqIiwiZHJvcE9iamVjdCIsInRha2VPYmplY3QiLCJyZXQiLCJsVGV4dERlY29kZXIiLCJUZXh0RGVjb2RlciIsIm1vZHVsZSIsInJlcXVpcmUiLCJjYWNoZWRUZXh0RGVjb2RlciIsImlnbm9yZUJPTSIsImZhdGFsIiwiZGVjb2RlIiwiY2FjaGVkVWludDhNZW1vcnkwIiwiVWludDhBcnJheSIsImdldFVpbnQ4TWVtb3J5MCIsImJ5dGVMZW5ndGgiLCJtZW1vcnkiLCJidWZmZXIiLCJnZXRTdHJpbmdGcm9tV2FzbTAiLCJwdHIiLCJsZW4iLCJzdWJhcnJheSIsImhhbmRsZUVycm9yIiwiZiIsImFyZ3MiLCJhcHBseSIsImUiLCJfX3diaW5kZ2VuX2V4bl9zdG9yZSIsImdldEFycmF5VThGcm9tV2FzbTAiLCJfX3diZ19tc0NyeXB0b19hMjFmYzg4Y2FmMWVjZGM4IiwiYXJnMCIsIm1zQ3J5cHRvIiwiX193YmdfY3J5cHRvXzIwMzZiZWQ3YzQ0YzI1ZTciLCJjcnlwdG8iLCJfX3diZ19nZXRSYW5kb21WYWx1ZXNfYjk5ZWVjNDI0NGE0NzViYiIsImFyZzEiLCJnZXRSYW5kb21WYWx1ZXMiLCJhcmd1bWVudHMiLCJfX3diZ19zdGF0aWNfYWNjZXNzb3JfTk9ERV9NT0RVTEVfY2Y2NDAxY2MxMDkxMjc5ZSIsIl9fd2JnX3JlcXVpcmVfYTc0NmU3OWIzMjJiOTMzNiIsImFyZzIiLCJfX3diZ19yYW5kb21GaWxsU3luY18wNjVhZmZmZGUwMWRhYTY2IiwicmFuZG9tRmlsbFN5bmMiLCJfX3diZ19wcm9jZXNzXzBjYzJhZGE4NTI0ZDZmODMiLCJwcm9jZXNzIiwiX193YmdfdmVyc2lvbnNfYzExYWNjZWFiMjdhNmM4NyIsInZlcnNpb25zIiwiX193Ymdfbm9kZV83ZmYxY2U0OWNhZjIzODE1Iiwibm9kZSIsIl9fd2JpbmRnZW5faXNfb2JqZWN0IiwidmFsIiwiX193YmluZGdlbl9pc19zdHJpbmciLCJfX3diZ19uZXdub2FyZ3NfYjViMDYzZmM2YzJmMDM3NiIsIkZ1bmN0aW9uIiwiX193YmdfY2FsbF85N2FlOWQ4NjQ1ZGMzODhiIiwiY2FsbCIsIl9fd2JnX2dsb2JhbFRoaXNfN2YyMDZiZGE2MjhkNTI4NiIsImdsb2JhbFRoaXMiLCJfX3diZ19zZWxmXzZkNDc5NTA2ZjcyYzZhNzEiLCJzZWxmIiwiX193Ymdfd2luZG93X2YyNTU3Y2M3ODQ5MGFjZWIiLCJ3aW5kb3ciLCJfX3diZ19nbG9iYWxfYmE3NWM1MGQxY2YzODRmNCIsImdsb2JhbCIsIl9fd2JnX25ld184YzNmMDA1MjI3MmE0NTdhIiwiX193YmdfbmV3d2l0aGxlbmd0aF9mNTkzMzg1NWU0ZjQ4YTE5IiwiX193Ymdfc3ViYXJyYXlfNThhZDRlZmJiNWJjYjg4NiIsIl9fd2JnX2xlbmd0aF85ZTFhZTE5MDBjYjBmYmQ1IiwiX193Ymdfc2V0XzgzZGI5NjkwZjkzNTNlNzkiLCJzZXQiLCJfX3diaW5kZ2VuX2lzX3VuZGVmaW5lZCIsIl9fd2JpbmRnZW5fb2JqZWN0X2Nsb25lX3JlZiIsIl9fd2JpbmRnZW5fb2JqZWN0X2Ryb3BfcmVmIiwiX193YmdfYnVmZmVyXzNmM2Q3NjRkNDc0N2Q1NjQiLCJfX3diaW5kZ2VuX3Rocm93IiwiRXJyb3IiLCJfX3diaW5kZ2VuX21lbW9yeSJdLCJzb3VyY2VSb290IjoiIn0=