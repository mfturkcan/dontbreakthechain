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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ViewChain = function(props) {\n    var _this1 = _this;\n    var handleEnable = function handleEnable(number) {\n        var theMonth = sampleMonth.filter(function(m) {\n            return m.number === number;\n        })[0];\n        console.log(theMonth);\n        // let theMonth = sampleMonth.at(theIndex) as Month;\n        theMonth.isEnabled = !theMonth.isEnabled;\n        setSampleMonth(function(prevState) {\n            prevState[theMonth.number] = theMonth;\n            return prevState;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), sampleMonth = ref[0], setSampleMonth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var month = [];\n        for(var i = 1; i <= 35; i++){\n            month.push({\n                isEnabled: false,\n                number: i\n            });\n        }\n        setSampleMonth(month);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"months\",\n            children: sampleMonth.map(function(m) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: m.isEnabled ? \"month enabled\" : \"month\",\n                    onClick: function(e) {\n                        return handleEnable(m.number);\n                    },\n                    children: m.number\n                }, void 0, false, {\n                    fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 32\n                }, _this1));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_s(ViewChain, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ViewChain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewChain);\nvar _c;\n$RefreshReg$(_c, \"ViewChain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFpbi92aWV3Q2hhaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7OztBQU8zQyxHQUFLLENBQUNFLFNBQVMsR0FBRyxRQUFRLENBQVBDLEtBQVUsRUFBSyxDQUFDOztRQW1CdEJDLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLENBQUNDLE1BQWMsRUFBRSxDQUFDO1FBQ25DLEdBQUcsQ0FBQ0MsUUFBUSxHQUFVQyxXQUFXLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFSQSxDQUFDO1lBQUlBLE1BQU0sQ0FBTkEsQ0FBQyxDQUFDSixNQUFNLEtBQUtBLE1BQU07V0FBRSxDQUFDO1FBQ3BFSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUTtRQUVwQixFQUFvRDtRQUVwREEsUUFBUSxDQUFDTSxTQUFTLElBQUlOLFFBQVEsQ0FBQ00sU0FBUztRQUV4Q0MsY0FBYyxDQUFDQyxRQUFRLENBQVJBLFNBQVMsRUFBSSxDQUFDO1lBQ3pCQSxTQUFTLENBQUNSLFFBQVEsQ0FBQ0QsTUFBTSxJQUFJQyxRQUFRO1lBQ3JDLE1BQU0sQ0FBQ1EsU0FBUztRQUNwQixDQUFDO0lBQ0wsQ0FBQzs7SUE3QkQsR0FBSyxDQUFpQ2QsR0FBdUIsR0FBdkJBLCtDQUFRLENBQUMsQ0FBQyxDQUFDLEdBQTFDTyxXQUFXLEdBQW9CUCxHQUF1QixLQUF6Q2EsY0FBYyxHQUFJYixHQUF1QjtJQUc3REMsZ0RBQVMsQ0FBQyxRQUNkLEdBRG9CLENBQUM7UUFDYixHQUFHLENBQUNjLEtBQUssR0FBRyxDQUFDLENBQUM7UUFFZCxHQUFHLENBQUUsR0FBRyxDQUFDQyxDQUFDLEdBQUcsQ0FBQyxFQUFFQSxDQUFDLElBQUksRUFBRSxFQUFFQSxDQUFDLEdBQUksQ0FBQztZQUMzQkQsS0FBSyxDQUFDRSxJQUFJLENBQUMsQ0FBQztnQkFDUkwsU0FBUyxFQUFFLEtBQUs7Z0JBQ2hCUCxNQUFNLEVBQUVXLENBQUM7WUFDYixDQUFDO1FBQ0wsQ0FBQztRQUVESCxjQUFjLENBQUNFLEtBQUs7SUFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQWlCTCxNQUFNOzhGQUVHRyxDQUFHO1lBQUNDLFNBQVMsRUFBQyxDQUFRO3NCQUVmWixXQUFXLENBQUNhLEdBQUcsQ0FBQ1gsUUFDbkMsQ0FEbUNBLENBQUMsRUFBSSxDQUFDO2dCQUNsQixNQUFNLDZFQUFFUyxDQUFHO29CQUFDQyxTQUFTLEVBQUVWLENBQUMsQ0FBQ0csU0FBUyxHQUFHLENBQWUsaUJBQUcsQ0FBTztvQkFBRVMsT0FBTyxFQUFFQyxRQUFRLENBQVJBLENBQUM7d0JBQUlsQixNQUFNLENBQU5BLFlBQVksQ0FBQ0ssQ0FBQyxDQUFDSixNQUFNOzs4QkFDOUZJLENBQUMsQ0FBQ0osTUFBTTs7Ozs7O1lBRWpCLENBQUM7Ozs7Ozs7QUFLckIsQ0FBQztHQTlDS0gsU0FBUztLQUFUQSxTQUFTO0FBZ0RmLCtEQUFlQSxTQUFTLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY2hhaW4vdmlld0NoYWluLnRzeD9lMzI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIE1vbnRoIHtcbiAgICBpc0VuYWJsZWQ6IGJvb2xlYW4sXG4gICAgbnVtYmVyOiBudW1iZXJcbn1cblxuY29uc3QgVmlld0NoYWluID0gKHByb3BzOiBhbnkpID0+IHtcblxuICAgIGNvbnN0IFtzYW1wbGVNb250aCwgc2V0U2FtcGxlTW9udGhdID0gdXNlU3RhdGUoW10gYXMgTW9udGhbXSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBtb250aCA9IFtdIGFzIE1vbnRoW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzU7IGkrKykge1xuICAgICAgICAgICAgbW9udGgucHVzaCh7XG4gICAgICAgICAgICAgICAgaXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBudW1iZXI6IGlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2FtcGxlTW9udGgobW9udGgpO1xuICAgIH0sIFtdKVxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmFibGUobnVtYmVyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRoZU1vbnRoOiBNb250aCA9IHNhbXBsZU1vbnRoLmZpbHRlcihtID0+IG0ubnVtYmVyID09PSBudW1iZXIpWzBdIGFzIE1vbnRoO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGVNb250aCk7XG5cbiAgICAgICAgLy8gbGV0IHRoZU1vbnRoID0gc2FtcGxlTW9udGguYXQodGhlSW5kZXgpIGFzIE1vbnRoO1xuXG4gICAgICAgIHRoZU1vbnRoLmlzRW5hYmxlZCA9ICF0aGVNb250aC5pc0VuYWJsZWQ7XG5cbiAgICAgICAgc2V0U2FtcGxlTW9udGgocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIHByZXZTdGF0ZVt0aGVNb250aC5udW1iZXJdID0gdGhlTW9udGg7XG4gICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aHNcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZU1vbnRoLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17bS5pc0VuYWJsZWQgPyBcIm1vbnRoIGVuYWJsZWRcIiA6IFwibW9udGhcIn0gb25DbGljaz17ZSA9PiBoYW5kbGVFbmFibGUobS5udW1iZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld0NoYWluO1xuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJWaWV3Q2hhaW4iLCJwcm9wcyIsImhhbmRsZUVuYWJsZSIsIm51bWJlciIsInRoZU1vbnRoIiwic2FtcGxlTW9udGgiLCJmaWx0ZXIiLCJtIiwiY29uc29sZSIsImxvZyIsImlzRW5hYmxlZCIsInNldFNhbXBsZU1vbnRoIiwicHJldlN0YXRlIiwibW9udGgiLCJpIiwicHVzaCIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm9uQ2xpY2siLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chain/viewChain.tsx\n");

/***/ })

});