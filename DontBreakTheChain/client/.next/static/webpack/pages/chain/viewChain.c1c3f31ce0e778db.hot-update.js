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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithoutHoles(arr) {\n    if (Array.isArray(arr)) return _arrayLikeToArray(arr);\n}\nfunction _iterableToArray(iter) {\n    if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter);\n}\nfunction _nonIterableSpread() {\n    throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _toConsumableArray(arr) {\n    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ViewChain = function(props) {\n    var _this1 = _this;\n    var handleEnable = function handleEnable(number) {\n        var theMonth = sampleMonth.find(function(m) {\n            return m.number === number;\n        });\n        console.log(theMonth);\n        // let theMonth = sampleMonth.at(theIndex) as Month;\n        theMonth.isEnabled = !theMonth.isEnabled;\n        setSampleMonth(function(prevState) {\n            prevState = _toConsumableArray(prevState).concat([\n                theMonth\n            ]);\n            return prevState.filter(function(m, index) {\n                return prevState.indexOf(m) !== index;\n            });\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), sampleMonth = ref[0], setSampleMonth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var month = [];\n        for(var i = 1; i <= 35; i++){\n            month.push({\n                isEnabled: false,\n                number: i\n            });\n        }\n        setSampleMonth(month);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"months\",\n            children: sampleMonth.map(function(m) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: m.isEnabled ? \"month enabled\" : \"month\",\n                    onClick: function(e) {\n                        return handleEnable(m.number);\n                    },\n                    children: m.number\n                }, void 0, false, {\n                    fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 32\n                }, _this1));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_s(ViewChain, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ViewChain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewChain);\nvar _c;\n$RefreshReg$(_c, \"ViewChain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFpbi92aWV3Q2hhaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFPM0MsR0FBSyxDQUFDRSxTQUFTLEdBQUcsUUFBUSxDQUFQQyxLQUFVLEVBQUssQ0FBQzs7UUFtQnRCQyxZQUFZLEdBQXJCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFDQyxNQUFjLEVBQUUsQ0FBQztRQUNuQyxHQUFHLENBQUNDLFFBQVEsR0FBVUMsV0FBVyxDQUFDQyxJQUFJLENBQUNDLFFBQVEsQ0FBUkEsQ0FBQztZQUFJQSxNQUFNLENBQU5BLENBQUMsQ0FBQ0osTUFBTSxLQUFLQSxNQUFNOztRQUMvREssT0FBTyxDQUFDQyxHQUFHLENBQUNMLFFBQVE7UUFFcEIsRUFBb0Q7UUFFcERBLFFBQVEsQ0FBQ00sU0FBUyxJQUFJTixRQUFRLENBQUNNLFNBQVM7UUFFeENDLGNBQWMsQ0FBQ0MsUUFBUSxDQUFSQSxTQUFTLEVBQUksQ0FBQztZQUN6QkEsU0FBUyxzQkFBT0EsU0FBUyxTQUFiLENBQUM7Z0JBQWNSLFFBQVE7WUFBQSxDQUFDO1lBQ3BDLE1BQU0sQ0FBQ1EsU0FBUyxDQUFDQyxNQUFNLENBQUMsUUFBUSxDQUFQTixDQUFDLEVBQUVPLEtBQUs7Z0JBQUtGLE1BQU0sQ0FBTkEsU0FBUyxDQUFDRyxPQUFPLENBQUNSLENBQUMsTUFBTU8sS0FBSzs7UUFDeEUsQ0FBQztJQUNMLENBQUM7O0lBN0JELEdBQUssQ0FBaUNoQixHQUF1QixHQUF2QkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBMUNPLFdBQVcsR0FBb0JQLEdBQXVCLEtBQXpDYSxjQUFjLEdBQUliLEdBQXVCO0lBRzdEQyxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEdBQUcsQ0FBQ2lCLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxHQUFHLENBQUUsR0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksRUFBRSxFQUFFQSxDQUFDLEdBQUksQ0FBQztZQUMzQkQsS0FBSyxDQUFDRSxJQUFJLENBQUMsQ0FBQztnQkFDUlIsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCUCxNQUFNLEVBQUVjLENBQUM7WUFDYixDQUFDO1FBQ0wsQ0FBQztRQUVETixjQUFjLENBQUNLLEtBQUs7SUFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQWlCTCxNQUFNOzhGQUVHRyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFRO3NCQUVmZixXQUFXLENBQUNnQixHQUFHLENBQUNkLFFBQ25DLENBRG1DQSxDQUFDLEVBQUksQ0FBQztnQkFDbEIsTUFBTSw2RUFBRVksQ0FBRztvQkFBQ0MsU0FBUyxFQUFFYixDQUFDLENBQUNHLFNBQVMsR0FBRyxDQUFlLGlCQUFHLENBQU87b0JBQUVZLE9BQU8sRUFBRUMsUUFBUSxDQUFSQSxDQUFDO3dCQUFJckIsTUFBTSxDQUFOQSxZQUFZLENBQUNLLENBQUMsQ0FBQ0osTUFBTTs7OEJBQzlGSSxDQUFDLENBQUNKLE1BQU07Ozs7OztZQUVqQixDQUFDOzs7Ozs7O0FBS3JCLENBQUM7R0E5Q0tILFNBQVM7S0FBVEEsU0FBUztBQWdEZiwrREFBZUEsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2NoYWluL3ZpZXdDaGFpbi50c3g/ZTMyOSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5cbmludGVyZmFjZSBNb250aCB7XG4gICAgaXNFbmFibGVkOiBib29sZWFuLFxuICAgIG51bWJlcjogbnVtYmVyXG59XG5cbmNvbnN0IFZpZXdDaGFpbiA9IChwcm9wczogYW55KSA9PiB7XG5cbiAgICBjb25zdCBbc2FtcGxlTW9udGgsIHNldFNhbXBsZU1vbnRoXSA9IHVzZVN0YXRlKFtdIGFzIE1vbnRoW10pO1xuXG5cbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgICBsZXQgbW9udGggPSBbXSBhcyBNb250aFtdO1xuXG4gICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDM1OyBpKyspIHtcbiAgICAgICAgICAgIG1vbnRoLnB1c2goe1xuICAgICAgICAgICAgICAgIGlzRW5hYmxlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgbnVtYmVyOiBpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldFNhbXBsZU1vbnRoKG1vbnRoKTtcbiAgICB9LCBbXSlcblxuXG4gICAgZnVuY3Rpb24gaGFuZGxlRW5hYmxlKG51bWJlcjogbnVtYmVyKSB7XG4gICAgICAgIGxldCB0aGVNb250aDogTW9udGggPSBzYW1wbGVNb250aC5maW5kKG0gPT4gbS5udW1iZXIgPT09IG51bWJlcikgYXMgTW9udGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoZU1vbnRoKTtcblxuICAgICAgICAvLyBsZXQgdGhlTW9udGggPSBzYW1wbGVNb250aC5hdCh0aGVJbmRleCkgYXMgTW9udGg7XG5cbiAgICAgICAgdGhlTW9udGguaXNFbmFibGVkID0gIXRoZU1vbnRoLmlzRW5hYmxlZDtcblxuICAgICAgICBzZXRTYW1wbGVNb250aChwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcHJldlN0YXRlID0gWy4uLnByZXZTdGF0ZSwgdGhlTW9udGhdO1xuICAgICAgICAgICAgcmV0dXJuIHByZXZTdGF0ZS5maWx0ZXIoKG0sIGluZGV4KSA9PiBwcmV2U3RhdGUuaW5kZXhPZihtKSAhPT0gaW5kZXgpO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aHNcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZU1vbnRoLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17bS5pc0VuYWJsZWQgPyBcIm1vbnRoIGVuYWJsZWRcIiA6IFwibW9udGhcIn0gb25DbGljaz17ZSA9PiBoYW5kbGVFbmFibGUobS5udW1iZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld0NoYWluO1xuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJWaWV3Q2hhaW4iLCJwcm9wcyIsImhhbmRsZUVuYWJsZSIsIm51bWJlciIsInRoZU1vbnRoIiwic2FtcGxlTW9udGgiLCJmaW5kIiwibSIsImNvbnNvbGUiLCJsb2ciLCJpc0VuYWJsZWQiLCJzZXRTYW1wbGVNb250aCIsInByZXZTdGF0ZSIsImZpbHRlciIsImluZGV4IiwiaW5kZXhPZiIsIm1vbnRoIiwiaSIsInB1c2giLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJvbkNsaWNrIiwiZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/chain/viewChain.tsx\n");

/***/ })

});