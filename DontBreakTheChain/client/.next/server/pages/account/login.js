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
exports.id = "pages/account/login";
exports.ids = ["pages/account/login"];
exports.modules = {

/***/ "./pages/account/login.tsx":
/*!*********************************!*\
  !*** ./pages/account/login.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @mui/material */ \"@mui/material\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_mui_material__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _stores_AccountContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../stores/AccountContext */ \"./stores/AccountContext.tsx\");\n\n\n\n\n\nconst Login = (props)=>{\n    const [user, setUser] = (0,_stores_AccountContext__WEBPACK_IMPORTED_MODULE_4__.useAccount)();\n    const { 0: errorMessage , 1: setErrorMessage  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const { 0: formValues , 1: setFormValues  } = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        EmailOrUsername: \"\",\n        Password: \"\"\n    });\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();\n    async function handleSubmit(event) {\n        event.preventDefault();\n        setErrorMessage(\"\");\n        setFormValues({\n            EmailOrUsername: event.target[0].value,\n            Password: event.target[2].value\n        });\n        const response = await fetch(\"https://localhost:7034/api/User/login\", {\n            headers: {\n                'Accept': 'application/json',\n                'Content-Type': 'application/json'\n            },\n            method: \"POST\",\n            body: JSON.stringify(formValues)\n        }).then((res)=>{\n            console.log(res);\n            return res.ok;\n        });\n        if (response) {\n            setUser({\n                Email: formValues.EmailOrUsername,\n                Username: formValues.EmailOrUsername,\n                isLoggedIn: true\n            });\n            router.push(\"/\");\n        } else setErrorMessage(\"Email not found!\");\n    }\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Stack, {\n        component: \"form\",\n        onSubmit: handleSubmit,\n        autoComplete: \"on\",\n        gap: 2.5,\n        m: 10,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                required: true,\n                name: \"email\",\n                label: \"required\",\n                helperText: \"Email\",\n                type: \"email\",\n                variant: \"standard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mfturkcan\\\\source\\\\repos\\\\DontBreakTheChain\\\\DontBreakTheChain\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                required: true,\n                name: \"username\",\n                label: \"required\",\n                helperText: \"Username\",\n                variant: \"standard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mfturkcan\\\\source\\\\repos\\\\DontBreakTheChain\\\\DontBreakTheChain\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                lineNumber: 64,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.TextField, {\n                required: true,\n                name: \"password\",\n                label: \"required\",\n                helperText: \"Password\",\n                type: \"password\",\n                variant: \"standard\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mfturkcan\\\\source\\\\repos\\\\DontBreakTheChain\\\\DontBreakTheChain\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                lineNumber: 70,\n                columnNumber: 7\n            }, undefined),\n            errorMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Typography, {\n                color: \"red\",\n                children: \"Test typo\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mfturkcan\\\\source\\\\repos\\\\DontBreakTheChain\\\\DontBreakTheChain\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                lineNumber: 77,\n                columnNumber: 24\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_1__.Button, {\n                type: \"submit\",\n                variant: \"contained\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\mfturkcan\\\\source\\\\repos\\\\DontBreakTheChain\\\\DontBreakTheChain\\\\client\\\\pages\\\\account\\\\login.tsx\",\n                lineNumber: 82,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\mfturkcan\\\\source\\\\repos\\\\DontBreakTheChain\\\\DontBreakTheChain\\\\client\\\\pages\\\\account\\\\login.tsx\",\n        lineNumber: 51,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Login);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFDTGdELElBQUksRUFBQyxDQUFRO2dCQUNiQyxPQUFPLEVBQUMsQ0FBVzswQkFDcEIsQ0FBSzs7Ozs7Ozs7Ozs7O0FBR1osQ0FBQztBQUNELGlFQUFlMUMsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vcGFnZXMvYWNjb3VudC9sb2dpbi50c3g/YjYxYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBCdXR0b24sIFN0YWNrLCBUZXh0RmllbGQsIFR5cG9ncmFwaHkgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyBMb2dpbkZvcm0gfSBmcm9tIFwiLi4vLi4vaW50ZXJmYWNlcy9BY2NvdW50Rm9ybVwiO1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IHsgdXNlQWNjb3VudCB9IGZyb20gXCIuLi8uLi9zdG9yZXMvQWNjb3VudENvbnRleHRcIjtcclxuaW1wb3J0IElVc2VyIGZyb20gXCIuLi8uLi9pbnRlcmZhY2VzL0lVc2VyXCI7XHJcblxyXG5jb25zdCBMb2dpbiA9IChwcm9wczogYW55KSA9PiB7XHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlQWNjb3VudCgpO1xyXG4gIGNvbnN0IFtlcnJvck1lc3NhZ2UsIHNldEVycm9yTWVzc2FnZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbZm9ybVZhbHVlcywgc2V0Rm9ybVZhbHVlc10gPSB1c2VTdGF0ZSh7XHJcbiAgICBFbWFpbE9yVXNlcm5hbWU6IFwiXCIsXHJcbiAgICBQYXNzd29yZDogXCJcIlxyXG4gIH0gYXMgTG9naW5Gb3JtKTtcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XHJcblxyXG4gIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZVN1Ym1pdChldmVudDogYW55KSB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgc2V0RXJyb3JNZXNzYWdlKFwiXCIpO1xyXG5cclxuICAgIHNldEZvcm1WYWx1ZXMoe1xyXG4gICAgICBFbWFpbE9yVXNlcm5hbWU6IGV2ZW50LnRhcmdldFswXS52YWx1ZSxcclxuICAgICAgUGFzc3dvcmQ6IGV2ZW50LnRhcmdldFsyXS52YWx1ZVxyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcImh0dHBzOi8vbG9jYWxob3N0OjcwMzQvYXBpL1VzZXIvbG9naW5cIiwge1xyXG4gICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXHJcbiAgICAgIH0sXHJcbiAgICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGZvcm1WYWx1ZXMpXHJcbiAgICB9KS50aGVuKHJlcyA9PiB7XHJcbiAgICAgIGNvbnNvbGUubG9nKHJlcylcclxuICAgICAgcmV0dXJuIHJlcy5va1xyXG4gICAgfSk7XHJcblxyXG4gICAgaWYgKHJlc3BvbnNlKSB7XHJcbiAgICAgIHNldFVzZXIoe1xyXG4gICAgICAgIEVtYWlsOiBmb3JtVmFsdWVzLkVtYWlsT3JVc2VybmFtZSxcclxuICAgICAgICBVc2VybmFtZTogZm9ybVZhbHVlcy5FbWFpbE9yVXNlcm5hbWUsXHJcbiAgICAgICAgaXNMb2dnZWRJbjogdHJ1ZVxyXG4gICAgICB9IGFzIElVc2VyKTtcclxuICAgICAgcm91dGVyLnB1c2goXCIvXCIpO1xyXG4gICAgfVxyXG4gICAgZWxzZSBzZXRFcnJvck1lc3NhZ2UoXCJFbWFpbCBub3QgZm91bmQhXCIpO1xyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxTdGFja1xyXG4gICAgICBjb21wb25lbnQ9XCJmb3JtXCJcclxuICAgICAgb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH1cclxuICAgICAgYXV0b0NvbXBsZXRlPVwib25cIlxyXG4gICAgICBnYXA9ezIuNX1cclxuICAgICAgbT17MTB9PlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgIGxhYmVsPVwicmVxdWlyZWRcIlxyXG4gICAgICAgIGhlbHBlclRleHQ9XCJFbWFpbFwiXHJcbiAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICB2YXJpYW50PVwic3RhbmRhcmRcIiAvPlxyXG4gICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICBuYW1lPVwidXNlcm5hbWVcIlxyXG4gICAgICAgIGxhYmVsPVwicmVxdWlyZWRcIlxyXG4gICAgICAgIGhlbHBlclRleHQ9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCIgLz5cclxuICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICBsYWJlbD1cInJlcXVpcmVkXCJcclxuICAgICAgICBoZWxwZXJUZXh0PVwiUGFzc3dvcmRcIlxyXG4gICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgdmFyaWFudD1cInN0YW5kYXJkXCIgLz5cclxuICAgICAge2Vycm9yTWVzc2FnZSAmJiA8VHlwb2dyYXBoeVxyXG4gICAgICAgIGNvbG9yPVwicmVkXCJcclxuICAgICAgPlxyXG4gICAgICAgIFRlc3QgdHlwb1xyXG4gICAgICA8L1R5cG9ncmFwaHk+fVxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgID5Mb2dpbjwvQnV0dG9uPlxyXG4gICAgPC9TdGFjaz5cclxuICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IExvZ2luOyJdLCJuYW1lcyI6WyJCdXR0b24iLCJTdGFjayIsIlRleHRGaWVsZCIsIlR5cG9ncmFwaHkiLCJ1c2VTdGF0ZSIsInVzZVJvdXRlciIsInVzZUFjY291bnQiLCJMb2dpbiIsInByb3BzIiwidXNlciIsInNldFVzZXIiLCJlcnJvck1lc3NhZ2UiLCJzZXRFcnJvck1lc3NhZ2UiLCJmb3JtVmFsdWVzIiwic2V0Rm9ybVZhbHVlcyIsIkVtYWlsT3JVc2VybmFtZSIsIlBhc3N3b3JkIiwicm91dGVyIiwiaGFuZGxlU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRhcmdldCIsInZhbHVlIiwicmVzcG9uc2UiLCJmZXRjaCIsImhlYWRlcnMiLCJtZXRob2QiLCJib2R5IiwiSlNPTiIsInN0cmluZ2lmeSIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwib2siLCJFbWFpbCIsIlVzZXJuYW1lIiwiaXNMb2dnZWRJbiIsInB1c2giLCJjb21wb25lbnQiLCJvblN1Ym1pdCIsImF1dG9Db21wbGV0ZSIsImdhcCIsIm0iLCJyZXF1aXJlZCIsIm5hbWUiLCJsYWJlbCIsImhlbHBlclRleHQiLCJ0eXBlIiwidmFyaWFudCIsImNvbG9yIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/account/login.tsx\n");

/***/ }),

/***/ "./stores/AccountContext.tsx":
/*!***********************************!*\
  !*** ./stores/AccountContext.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"useAccount\": () => (/* binding */ useAccount),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst AccountContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)(undefined);\nconst AccountProvider = (props)=>{\n    const { 0: user , 1: setUser  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        Email: \"\",\n        Password: \"\",\n        Username: \"\",\n        isLoggedIn: false\n    });\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(AccountContext.Provider, {\n        value: [\n            user,\n            setUser\n        ],\n        children: props.children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\mfturkcan\\\\source\\\\repos\\\\DontBreakTheChain\\\\DontBreakTheChain\\\\client\\\\stores\\\\AccountContext.tsx\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined));\n};\nconst useAccount = ()=>{\n    const context = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(AccountContext);\n    if (context == undefined) throw 'Header Context can only be useable inside HeaderConsumer/HeaderWrapper!';\n    return context;\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (AccountProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zdG9yZXMvQWNjb3VudENvbnRleHQudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkQ7QUFHM0QsS0FBSyxDQUFDRyxjQUFjLGlCQUFHRixvREFBYSxDQUFDRyxTQUFTO0FBRTlDLEtBQUssQ0FBQ0MsZUFBZSxJQUFJQyxLQUFVLEdBQUssQ0FBQztJQUV2QyxLQUFLLE1BQUVDLElBQUksTUFBRUMsT0FBTyxNQUFJTiwrQ0FBUSxDQUFDLENBQUM7UUFDaENPLEtBQUssRUFBRSxDQUFFO1FBQ1RDLFFBQVEsRUFBRSxDQUFFO1FBQ1pDLFFBQVEsRUFBRSxDQUFFO1FBQ1pDLFVBQVUsRUFBRSxLQUFLO0lBQ25CLENBQUM7SUFFRCxNQUFNLDZFQUNIVCxjQUFjLENBQUNVLFFBQVE7UUFBQ0MsS0FBSyxFQUFFLENBQUNQO1lBQUFBLElBQUk7WUFBRUMsT0FBTztRQUFBLENBQUM7a0JBQzVDRixLQUFLLENBQUNTLFFBQVE7Ozs7OztBQUdyQixDQUFDO0FBRU0sS0FBSyxDQUFDQyxVQUFVLE9BQVMsQ0FBQztJQUMvQixLQUFLLENBQUNDLE9BQU8sR0FBR2pCLGlEQUFVLENBQUNHLGNBQWM7SUFFekMsRUFBRSxFQUFFYyxPQUFPLElBQUliLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBeUU7SUFFekcsTUFBTSxDQUFDYSxPQUFPO0FBQ2hCLENBQUM7QUFDRCxpRUFBZVosZUFBZSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2xpZW50Ly4vc3RvcmVzL0FjY291bnRDb250ZXh0LnRzeD85OWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQsIGNyZWF0ZUNvbnRleHQsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBJVXNlciBmcm9tIFwiLi4vaW50ZXJmYWNlcy9JVXNlclwiO1xyXG5cclxuY29uc3QgQWNjb3VudENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHVuZGVmaW5lZCBhcyBhbnkpO1xyXG5cclxuY29uc3QgQWNjb3VudFByb3ZpZGVyID0gKHByb3BzOiBhbnkpID0+IHtcclxuXHJcbiAgY29uc3QgW3VzZXIsIHNldFVzZXJdID0gdXNlU3RhdGUoe1xyXG4gICAgRW1haWw6IFwiXCIsXHJcbiAgICBQYXNzd29yZDogXCJcIixcclxuICAgIFVzZXJuYW1lOiBcIlwiLFxyXG4gICAgaXNMb2dnZWRJbjogZmFsc2VcclxuICB9IGFzIElVc2VyKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxBY2NvdW50Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3VzZXIsIHNldFVzZXJdfT5cclxuICAgICAge3Byb3BzLmNoaWxkcmVufVxyXG4gICAgPC9BY2NvdW50Q29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQWNjb3VudCA9ICgpID0+IHtcclxuICBjb25zdCBjb250ZXh0ID0gdXNlQ29udGV4dChBY2NvdW50Q29udGV4dCk7XHJcblxyXG4gIGlmIChjb250ZXh0ID09IHVuZGVmaW5lZCkgdGhyb3cgJ0hlYWRlciBDb250ZXh0IGNhbiBvbmx5IGJlIHVzZWFibGUgaW5zaWRlIEhlYWRlckNvbnN1bWVyL0hlYWRlcldyYXBwZXIhJztcclxuXHJcbiAgcmV0dXJuIGNvbnRleHQ7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgQWNjb3VudFByb3ZpZGVyOyJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsInVzZVN0YXRlIiwiQWNjb3VudENvbnRleHQiLCJ1bmRlZmluZWQiLCJBY2NvdW50UHJvdmlkZXIiLCJwcm9wcyIsInVzZXIiLCJzZXRVc2VyIiwiRW1haWwiLCJQYXNzd29yZCIsIlVzZXJuYW1lIiwiaXNMb2dnZWRJbiIsIlByb3ZpZGVyIiwidmFsdWUiLCJjaGlsZHJlbiIsInVzZUFjY291bnQiLCJjb250ZXh0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./stores/AccountContext.tsx\n");

/***/ }),

/***/ "@mui/material":
/*!********************************!*\
  !*** external "@mui/material" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@mui/material");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

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
var __webpack_exports__ = (__webpack_exec__("./pages/account/login.tsx"));
module.exports = __webpack_exports__;

})();