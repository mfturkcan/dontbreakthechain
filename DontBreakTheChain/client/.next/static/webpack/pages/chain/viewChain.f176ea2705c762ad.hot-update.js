"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/chain/viewChain",{

/***/ "./pages/chain/viewChain.tsx":
/*!***********************************!*\
  !*** ./pages/chain/viewChain.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ViewChain = function(props) {\n    var _this1 = _this;\n    var handleEnable = function handleEnable(number) {\n        var theMonth = sampleMonth.find(function(m) {\n            return m.number === number;\n        });\n        theMonth.isEnabled = !theMonth.isEnabled;\n        setSampleMonth(function(prevState) {\n            prevState = _toConsumableArray(prevState).concat([\n                theMonth\n            ]);\n            return prevState.filter(function(m, index) {\n                return prevState.indexOf(m) === index;\n            });\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), sampleMonth = ref[0], setSampleMonth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var month = [];\n        for(var i = 1; i <= 35; i++){\n            month.push({\n                isEnabled: false,\n                number: i\n            });\n        }\n        setSampleMonth(month);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"months\",\n            children: sampleMonth.map(function(m) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: m.isEnabled ? \"month enabled\" : \"month\",\n                    onClick: function(e) {\n                        return handleEnable(m.number);\n                    },\n                    children: m.number\n                }, void 0, false, {\n                    fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 32\n                }, _this1));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n            lineNumber: 40,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_s(ViewChain, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ViewChain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewChain);\nvar _c;\n$RefreshReg$(_c, \"ViewChain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFpbi92aWV3Q2hhaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0MsR0FBSyxDQUFDRSxTQUFTLEdBQUcsUUFBUSxDQUFQQyxLQUFVLEVBQUssQ0FBQzs7UUFtQnRCQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFDQyxNQUFjLEVBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUNDLFFBQVEsR0FBVUMsV0FBVyxDQUFDQyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsQ0FBQztZQUFJQSxNQUFNLENBQU5BLENBQUMsQ0FBQ0osTUFBTSxLQUFLQSxNQUFNOztRQUUvREMsUUFBUSxDQUFDSSxTQUFTLElBQUlKLFFBQVEsQ0FBQ0ksU0FBUztRQUV4Q0MsY0FBYyxDQUFDQyxRQUFRLENBQVJBLFNBQVMsRUFBSSxDQUFDO1lBQ3pCQSxTQUFTLHNCQUFPQSxTQUFTLFNBQWIsQ0FBQztnQkFBY04sUUFBUTtZQUFBLENBQUM7WUFDcEMsTUFBTSxDQUFDTSxTQUFTLENBQUNDLE1BQU0sQ0FBQyxRQUFRLENBQVBKLENBQUMsRUFBRUssS0FBSztnQkFBS0YsTUFBTSxDQUFOQSxTQUFTLENBQUNHLE9BQU8sQ0FBQ04sQ0FBQyxNQUFNSyxLQUFLOztRQUN4RSxDQUFDO0lBQ0wsQ0FBQzs7SUExQkQsR0FBSyxDQUFpQ2QsR0FBdUIsR0FBdkJBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTFDTyxXQUFXLEdBQW9CUCxHQUF1QixLQUF6Q1csY0FBYyxHQUFJWCxHQUF1QjtJQUc3REMsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYixHQUFHLENBQUNlLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxHQUFHLENBQUUsR0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksRUFBRSxFQUFFQSxDQUFDLEdBQUksQ0FBQztZQUMzQkQsS0FBSyxDQUFDRSxJQUFJLENBQUMsQ0FBQztnQkFDUlIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCTCxNQUFNLEVBQUVZLENBQUM7WUFDYixDQUFDO1FBQ0wsQ0FBQztRQUVETixjQUFjLENBQUNLLEtBQUs7SUFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQWNMLE1BQU07OEZBRUdHLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVE7c0JBRWZiLFdBQVcsQ0FBQ2MsR0FBRyxDQUFDWixRQUNuQyxDQURtQ0EsQ0FBQyxFQUFJLENBQUM7Z0JBQ2xCLE1BQU0sNkVBQUVVLENBQUc7b0JBQUNDLFNBQVMsRUFBRVgsQ0FBQyxDQUFDQyxTQUFTLEdBQUcsQ0FBZSxpQkFBRyxDQUFPO29CQUFFWSxPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3QkFBSW5CLE1BQU0sQ0FBTkEsWUFBWSxDQUFDSyxDQUFDLENBQUNKLE1BQU07OzhCQUM5RkksQ0FBQyxDQUFDSixNQUFNOzs7Ozs7WUFFakIsQ0FBQzs7Ozs7OztBQUtyQixDQUFDO0dBM0NLSCxTQUFTO0tBQVRBLFNBQVM7QUE2Q2YsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFpbi92aWV3Q2hhaW4udHN4P2UzMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgTW9udGgge1xuICAgIGlzRW5hYmxlZDogYm9vbGVhbixcbiAgICBudW1iZXI6IG51bWJlclxufVxuXG5jb25zdCBWaWV3Q2hhaW4gPSAocHJvcHM6IGFueSkgPT4ge1xuXG4gICAgY29uc3QgW3NhbXBsZU1vbnRoLCBzZXRTYW1wbGVNb250aF0gPSB1c2VTdGF0ZShbXSBhcyBNb250aFtdKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gW10gYXMgTW9udGhbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzNTsgaSsrKSB7XG4gICAgICAgICAgICBtb250aC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG51bWJlcjogaVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTYW1wbGVNb250aChtb250aCk7XG4gICAgfSwgW10pXG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuYWJsZShudW1iZXI6IG51bWJlcikge1xuICAgICAgICBsZXQgdGhlTW9udGg6IE1vbnRoID0gc2FtcGxlTW9udGguZmluZChtID0+IG0ubnVtYmVyID09PSBudW1iZXIpIGFzIE1vbnRoO1xuXG4gICAgICAgIHRoZU1vbnRoLmlzRW5hYmxlZCA9ICF0aGVNb250aC5pc0VuYWJsZWQ7XG5cbiAgICAgICAgc2V0U2FtcGxlTW9udGgocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIHByZXZTdGF0ZSA9IFsuLi5wcmV2U3RhdGUsIHRoZU1vbnRoXTtcbiAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGUuZmlsdGVyKChtLCBpbmRleCkgPT4gcHJldlN0YXRlLmluZGV4T2YobSkgPT09IGluZGV4KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibW9udGhzXCI+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBzYW1wbGVNb250aC5tYXAobSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gPGRpdiBjbGFzc05hbWU9e20uaXNFbmFibGVkID8gXCJtb250aCBlbmFibGVkXCIgOiBcIm1vbnRoXCJ9IG9uQ2xpY2s9e2UgPT4gaGFuZGxlRW5hYmxlKG0ubnVtYmVyKX0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge20ubnVtYmVyfVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvPlxuICAgICk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZpZXdDaGFpbjtcblxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiVmlld0NoYWluIiwicHJvcHMiLCJoYW5kbGVFbmFibGUiLCJudW1iZXIiLCJ0aGVNb250aCIsInNhbXBsZU1vbnRoIiwiZmluZCIsIm0iLCJpc0VuYWJsZWQiLCJzZXRTYW1wbGVNb250aCIsInByZXZTdGF0ZSIsImZpbHRlciIsImluZGV4IiwiaW5kZXhPZiIsIm1vbnRoIiwiaSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvbkNsaWNrIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chain/viewChain.tsx\n");

/***/ })

});