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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar ViewChain = function(props) {\n    var _this1 = _this;\n    var handleEnable = function handleEnable(number) {\n        var theMonth = sampleMonth.filter(function(m) {\n            return m.number === number;\n        })[0];\n        console.log(theMonth);\n        // let theMonth = sampleMonth.at(theIndex) as Month;\n        theMonth.isEnabled = !theMonth.isEnabled;\n        setSampleMonth(function(prevState) {\n            prevState[theMonth.number].isEnabled = !prevState[theMonth.number].isEnabled;\n            return prevState;\n        });\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]), sampleMonth = ref[0], setSampleMonth = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var month = [];\n        for(var i = 1; i <= 35; i++){\n            month.push({\n                isEnabled: false,\n                number: i\n            });\n        }\n        setSampleMonth(month);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"months\",\n            children: sampleMonth.map(function(m) {\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: m.isEnabled ? \"month enabled\" : \"month\",\n                    onClick: function(e) {\n                        return handleEnable(m.number);\n                    },\n                    children: m.number\n                }, void 0, false, {\n                    fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 32\n                }, _this1));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, _this)\n    }, void 0, false));\n};\n_s(ViewChain, \"0R7l53CiwQu7ziyMeHtgYF+Ya+E=\");\n_c = ViewChain;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ViewChain);\nvar _c;\n$RefreshReg$(_c, \"ViewChain\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFpbi92aWV3Q2hhaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7OztBQU8zQyxHQUFLLENBQUNFLFNBQVMsR0FBRyxRQUFRLENBQVBDLEtBQVUsRUFBSyxDQUFDOztRQW1CdEJDLFlBQVksR0FBckIsUUFBUSxDQUFDQSxZQUFZLENBQUNDLE1BQWMsRUFBRSxDQUFDO1FBQ25DLEdBQUcsQ0FBQ0MsUUFBUSxHQUFVQyxXQUFXLENBQUNDLE1BQU0sQ0FBQ0MsUUFBUSxDQUFSQSxDQUFDO1lBQUlBLE1BQU0sQ0FBTkEsQ0FBQyxDQUFDSixNQUFNLEtBQUtBLE1BQU07V0FBRSxDQUFDO1FBQ3BFSyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0wsUUFBUTtRQUVwQixFQUFvRDtRQUVwREEsUUFBUSxDQUFDTSxTQUFTLElBQUlOLFFBQVEsQ0FBQ00sU0FBUztRQUV4Q0MsY0FBYyxDQUFDQyxRQUFRLENBQVJBLFNBQVMsRUFBSSxDQUFDO1lBQ3pCQSxTQUFTLENBQUNSLFFBQVEsQ0FBQ0QsTUFBTSxFQUFFTyxTQUFTLElBQUlFLFNBQVMsQ0FBQ1IsUUFBUSxDQUFDRCxNQUFNLEVBQUVPLFNBQVM7WUFDNUUsTUFBTSxDQUFDRSxTQUFTO1FBQ3BCLENBQUM7SUFDTCxDQUFDOztJQTdCRCxHQUFLLENBQWlDZCxHQUF1QixHQUF2QkEsK0NBQVEsQ0FBQyxDQUFDLENBQUMsR0FBMUNPLFdBQVcsR0FBb0JQLEdBQXVCLEtBQXpDYSxjQUFjLEdBQUliLEdBQXVCO0lBRzdEQyxnREFBUyxDQUFDLFFBQ2QsR0FEb0IsQ0FBQztRQUNiLEdBQUcsQ0FBQ2MsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLEdBQUcsQ0FBRSxHQUFHLENBQUNDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxFQUFFLEVBQUVBLENBQUMsR0FBSSxDQUFDO1lBQzNCRCxLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDO2dCQUNSTCxTQUFTLEVBQUUsS0FBSztnQkFDaEJQLE1BQU0sRUFBRVcsQ0FBQztZQUNiLENBQUM7UUFDTCxDQUFDO1FBRURILGNBQWMsQ0FBQ0UsS0FBSztJQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDO0lBaUJMLE1BQU07OEZBRUdHLENBQUc7WUFBQ0MsU0FBUyxFQUFDLENBQVE7c0JBRWZaLFdBQVcsQ0FBQ2EsR0FBRyxDQUFDWCxRQUNuQyxDQURtQ0EsQ0FBQyxFQUFJLENBQUM7Z0JBQ2xCLE1BQU0sNkVBQUVTLENBQUc7b0JBQUNDLFNBQVMsRUFBRVYsQ0FBQyxDQUFDRyxTQUFTLEdBQUcsQ0FBZSxpQkFBRyxDQUFPO29CQUFFUyxPQUFPLEVBQUVDLFFBQVEsQ0FBUkEsQ0FBQzt3QkFBSWxCLE1BQU0sQ0FBTkEsWUFBWSxDQUFDSyxDQUFDLENBQUNKLE1BQU07OzhCQUM5RkksQ0FBQyxDQUFDSixNQUFNOzs7Ozs7WUFFakIsQ0FBQzs7Ozs7OztBQUtyQixDQUFDO0dBOUNLSCxTQUFTO0tBQVRBLFNBQVM7QUFnRGYsK0RBQWVBLFNBQVMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9jaGFpbi92aWV3Q2hhaW4udHN4P2UzMjkiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgTW9udGgge1xuICAgIGlzRW5hYmxlZDogYm9vbGVhbixcbiAgICBudW1iZXI6IG51bWJlclxufVxuXG5jb25zdCBWaWV3Q2hhaW4gPSAocHJvcHM6IGFueSkgPT4ge1xuXG4gICAgY29uc3QgW3NhbXBsZU1vbnRoLCBzZXRTYW1wbGVNb250aF0gPSB1c2VTdGF0ZShbXSBhcyBNb250aFtdKTtcblxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgICAgbGV0IG1vbnRoID0gW10gYXMgTW9udGhbXTtcblxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzNTsgaSsrKSB7XG4gICAgICAgICAgICBtb250aC5wdXNoKHtcbiAgICAgICAgICAgICAgICBpc0VuYWJsZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIG51bWJlcjogaVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICBzZXRTYW1wbGVNb250aChtb250aCk7XG4gICAgfSwgW10pXG5cblxuICAgIGZ1bmN0aW9uIGhhbmRsZUVuYWJsZShudW1iZXI6IG51bWJlcikge1xuICAgICAgICBsZXQgdGhlTW9udGg6IE1vbnRoID0gc2FtcGxlTW9udGguZmlsdGVyKG0gPT4gbS5udW1iZXIgPT09IG51bWJlcilbMF0gYXMgTW9udGg7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoZU1vbnRoKTtcblxuICAgICAgICAvLyBsZXQgdGhlTW9udGggPSBzYW1wbGVNb250aC5hdCh0aGVJbmRleCkgYXMgTW9udGg7XG5cbiAgICAgICAgdGhlTW9udGguaXNFbmFibGVkID0gIXRoZU1vbnRoLmlzRW5hYmxlZDtcblxuICAgICAgICBzZXRTYW1wbGVNb250aChwcmV2U3RhdGUgPT4ge1xuICAgICAgICAgICAgcHJldlN0YXRlW3RoZU1vbnRoLm51bWJlcl0uaXNFbmFibGVkID0gIXByZXZTdGF0ZVt0aGVNb250aC5udW1iZXJdLmlzRW5hYmxlZDtcbiAgICAgICAgICAgIHJldHVybiBwcmV2U3RhdGU7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiAoXG4gICAgICAgIDw+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1vbnRoc1wiPlxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgc2FtcGxlTW9udGgubWFwKG0gPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIDxkaXYgY2xhc3NOYW1lPXttLmlzRW5hYmxlZCA/IFwibW9udGggZW5hYmxlZFwiIDogXCJtb250aFwifSBvbkNsaWNrPXtlID0+IGhhbmRsZUVuYWJsZShtLm51bWJlcil9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttLm51bWJlcn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8Lz5cbiAgICApO1xufVxuXG5leHBvcnQgZGVmYXVsdCBWaWV3Q2hhaW47XG5cbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlZpZXdDaGFpbiIsInByb3BzIiwiaGFuZGxlRW5hYmxlIiwibnVtYmVyIiwidGhlTW9udGgiLCJzYW1wbGVNb250aCIsImZpbHRlciIsIm0iLCJjb25zb2xlIiwibG9nIiwiaXNFbmFibGVkIiwic2V0U2FtcGxlTW9udGgiLCJwcmV2U3RhdGUiLCJtb250aCIsImkiLCJwdXNoIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwib25DbGljayIsImUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/chain/viewChain.tsx\n");

/***/ })

});