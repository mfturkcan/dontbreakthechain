"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/chain/viewChain";
exports.ids = ["pages/chain/viewChain"];
exports.modules = {

/***/ "./pages/chain/viewChain.tsx":
/*!***********************************!*\
  !*** ./pages/chain/viewChain.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst ViewChain = (props)=>{\n    const { 0: sampleMonth , 1: setSampleMonth  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let month = [];\n        for(let i = 1; i <= 35; i++){\n            month.push({\n                isEnabled: false,\n                number: i\n            });\n        }\n        setSampleMonth(month);\n    }, []);\n    function handleEnable(number) {\n        let theMonth = sampleMonth.filter((m)=>m.number === number\n        )[0];\n        console.log(theMonth);\n        // let theMonth = sampleMonth.at(theIndex) as Month;\n        theMonth.isEnabled = !theMonth.isEnabled;\n        setSampleMonth((prevState)=>{\n            prevState[theMonth.number] = theMonth;\n            return prevState;\n        });\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"months\",\n            children: sampleMonth.map((m)=>{\n                return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: m.isEnabled ? \"month enabled\" : \"month\",\n                    onClick: (e)=>handleEnable(m.number)\n                    ,\n                    children: m.number\n                }, void 0, false, {\n                    fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 32\n                }, undefined));\n            })\n        }, void 0, false, {\n            fileName: \"/Users/turkcanoglu/Desktop/Workspace/dontbreakthechain/DontBreakTheChain/client/pages/chain/viewChain.tsx\",\n            lineNumber: 43,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ViewChain);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jaGFpbi92aWV3Q2hhaW4udHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUEyQztBQU8zQyxLQUFLLENBQUNFLFNBQVMsSUFBSUMsS0FBVSxHQUFLLENBQUM7SUFFL0IsS0FBSyxNQUFFQyxXQUFXLE1BQUVDLGNBQWMsTUFBSUwsK0NBQVEsQ0FBQyxDQUFDLENBQUM7SUFHakRDLGdEQUFTLEtBQU8sQ0FBQztRQUNiLEdBQUcsQ0FBQ0ssS0FBSyxHQUFHLENBQUMsQ0FBQztRQUVkLEdBQUcsQ0FBRSxHQUFHLENBQUNDLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsSUFBSSxFQUFFLEVBQUVBLENBQUMsR0FBSSxDQUFDO1lBQzNCRCxLQUFLLENBQUNFLElBQUksQ0FBQyxDQUFDO2dCQUNSQyxTQUFTLEVBQUUsS0FBSztnQkFDaEJDLE1BQU0sRUFBRUgsQ0FBQztZQUNiLENBQUM7UUFDTCxDQUFDO1FBRURGLGNBQWMsQ0FBQ0MsS0FBSztJQUN4QixDQUFDLEVBQUUsQ0FBQyxDQUFDO2FBR0lLLFlBQVksQ0FBQ0QsTUFBYyxFQUFFLENBQUM7UUFDbkMsR0FBRyxDQUFDRSxRQUFRLEdBQVVSLFdBQVcsQ0FBQ1MsTUFBTSxFQUFDQyxDQUFDLEdBQUlBLENBQUMsQ0FBQ0osTUFBTSxLQUFLQSxNQUFNO1VBQUUsQ0FBQztRQUNwRUssT0FBTyxDQUFDQyxHQUFHLENBQUNKLFFBQVE7UUFFcEIsRUFBb0Q7UUFFcERBLFFBQVEsQ0FBQ0gsU0FBUyxJQUFJRyxRQUFRLENBQUNILFNBQVM7UUFFeENKLGNBQWMsRUFBQ1ksU0FBUyxHQUFJLENBQUM7WUFDekJBLFNBQVMsQ0FBQ0wsUUFBUSxDQUFDRixNQUFNLElBQUlFLFFBQVE7WUFDckMsTUFBTSxDQUFDSyxTQUFTO1FBQ3BCLENBQUM7SUFDTCxDQUFDO0lBRUQsTUFBTTs4RkFFR0MsQ0FBRztZQUFDQyxTQUFTLEVBQUMsQ0FBUTtzQkFFZmYsV0FBVyxDQUFDZ0IsR0FBRyxFQUFDTixDQUFDLEdBQUksQ0FBQztnQkFDbEIsTUFBTSw2RUFBRUksQ0FBRztvQkFBQ0MsU0FBUyxFQUFFTCxDQUFDLENBQUNMLFNBQVMsR0FBRyxDQUFlLGlCQUFHLENBQU87b0JBQUVZLE9BQU8sR0FBRUMsQ0FBQyxHQUFJWCxZQUFZLENBQUNHLENBQUMsQ0FBQ0osTUFBTTs7OEJBQzlGSSxDQUFDLENBQUNKLE1BQU07Ozs7OztZQUVqQixDQUFDOzs7Ozs7O0FBS3JCLENBQUM7QUFFRCxpRUFBZVIsU0FBUyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvY2hhaW4vdmlld0NoYWluLnRzeD9lMzI5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIE1vbnRoIHtcbiAgICBpc0VuYWJsZWQ6IGJvb2xlYW4sXG4gICAgbnVtYmVyOiBudW1iZXJcbn1cblxuY29uc3QgVmlld0NoYWluID0gKHByb3BzOiBhbnkpID0+IHtcblxuICAgIGNvbnN0IFtzYW1wbGVNb250aCwgc2V0U2FtcGxlTW9udGhdID0gdXNlU3RhdGUoW10gYXMgTW9udGhbXSk7XG5cblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAgIGxldCBtb250aCA9IFtdIGFzIE1vbnRoW107XG5cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzU7IGkrKykge1xuICAgICAgICAgICAgbW9udGgucHVzaCh7XG4gICAgICAgICAgICAgICAgaXNFbmFibGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBudW1iZXI6IGlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgc2V0U2FtcGxlTW9udGgobW9udGgpO1xuICAgIH0sIFtdKVxuXG5cbiAgICBmdW5jdGlvbiBoYW5kbGVFbmFibGUobnVtYmVyOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHRoZU1vbnRoOiBNb250aCA9IHNhbXBsZU1vbnRoLmZpbHRlcihtID0+IG0ubnVtYmVyID09PSBudW1iZXIpWzBdIGFzIE1vbnRoO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGVNb250aCk7XG5cbiAgICAgICAgLy8gbGV0IHRoZU1vbnRoID0gc2FtcGxlTW9udGguYXQodGhlSW5kZXgpIGFzIE1vbnRoO1xuXG4gICAgICAgIHRoZU1vbnRoLmlzRW5hYmxlZCA9ICF0aGVNb250aC5pc0VuYWJsZWQ7XG5cbiAgICAgICAgc2V0U2FtcGxlTW9udGgocHJldlN0YXRlID0+IHtcbiAgICAgICAgICAgIHByZXZTdGF0ZVt0aGVNb250aC5udW1iZXJdID0gdGhlTW9udGg7XG4gICAgICAgICAgICByZXR1cm4gcHJldlN0YXRlO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtb250aHNcIj5cbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHNhbXBsZU1vbnRoLm1hcChtID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17bS5pc0VuYWJsZWQgPyBcIm1vbnRoIGVuYWJsZWRcIiA6IFwibW9udGhcIn0gb25DbGljaz17ZSA9PiBoYW5kbGVFbmFibGUobS5udW1iZXIpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bS5udW1iZXJ9XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgVmlld0NoYWluO1xuXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJWaWV3Q2hhaW4iLCJwcm9wcyIsInNhbXBsZU1vbnRoIiwic2V0U2FtcGxlTW9udGgiLCJtb250aCIsImkiLCJwdXNoIiwiaXNFbmFibGVkIiwibnVtYmVyIiwiaGFuZGxlRW5hYmxlIiwidGhlTW9udGgiLCJmaWx0ZXIiLCJtIiwiY29uc29sZSIsImxvZyIsInByZXZTdGF0ZSIsImRpdiIsImNsYXNzTmFtZSIsIm1hcCIsIm9uQ2xpY2siLCJlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/chain/viewChain.tsx\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/chain/viewChain.tsx"));
module.exports = __webpack_exports__;

})();