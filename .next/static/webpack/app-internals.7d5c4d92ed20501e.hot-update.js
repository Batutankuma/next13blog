"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app-internals",{

/***/ "./app/nav-link.jsx":
/*!**************************!*\
  !*** ./app/nav-link.jsx ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var flowbite_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flowbite-react */ \"./node_modules/flowbite-react/lib/esm/index.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NavLink(param) {\n    let { href , children  } = param;\n    _s();\n    /**\r\n     * <NavLink href='/'>Home</NavLink>\r\n                        <NavLink href='/blog'>Blog</NavLink>\r\n\r\n                        <div className=\"items-center \">\r\n            <Link className={active ? 'font-bold text-black' : 'font-bold text-gray-500'} style={{margin:'10px'}} href={href}>{children}</Link>\r\n        </div>\r\n     */ let segment = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    let active = href === segment;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar, {\n        fluid: true,\n        rounded: true,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Brand, {\n                href: \"https://flowbite.com/\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: \"https://flowbite.com/docs/images/logo.svg\",\n                        className: \"mr-3 h-6 sm:h-9\",\n                        alt: \"Flowbite Logo\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"self-center whitespace-nowrap text-xl font-semibold dark:text-white\",\n                        children: \"Flowbite\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex md:order-2\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Button, {\n                        children: \"Get started\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Toggle, {}, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 36,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                lineNumber: 32,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Collapse, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {\n                        href: \"/navbars\",\n                        active: true,\n                        children: \"Home\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {\n                        href: \"/navbars\",\n                        children: \"About\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {\n                        href: \"/navbars\",\n                        children: \"Services\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 48,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {\n                        href: \"/navbars\",\n                        children: \"Pricing\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 51,\n                        columnNumber: 17\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(flowbite_react__WEBPACK_IMPORTED_MODULE_1__.Navbar.Link, {\n                        href: \"/navbars\",\n                        children: \"Contact\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                        lineNumber: 54,\n                        columnNumber: 17\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n                lineNumber: 38,\n                columnNumber: 13\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\SAEL\\\\PROGRAMMATION\\\\learn\\\\blog\\\\app\\\\nav-link.jsx\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, this);\n}\n_s(NavLink, \"+da+j9SGBLTmJBCfqcQg+1DPMU0=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavLink;\n/* harmony default export */ __webpack_exports__[\"default\"] = (NavLink);\nvar _c;\n$RefreshReg$(_c, \"NavLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcHAvbmF2LWxpbmsuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQTs7QUFDd0M7QUFDWDtBQUNnQjtBQUU3QyxTQUFTRyxRQUFRLEtBQWtCLEVBQUU7UUFBcEIsRUFBRUMsS0FBSSxFQUFFQyxTQUFRLEVBQUUsR0FBbEI7O0lBQ2I7SUFTQSxJQUFJRSxTQUFTSCxTQUFTRTtJQUN0QixxQkFDSSxRQUFDTjs7UUFFR1MsU0FBUyxJQUFJOzs7Z0JBRUNMLE1BQUs7O3lJQUNmLEdBQUNPOzs7Ozs7Ozs7a0NBS0QsUUFBQ0k7d0JBQUtGLFdBQVU7a0NBQXNFOzs7Ozs7Ozs7Ozs7MEJBSTFGO2dCQUFLQTs7a0NBQ0QsUUFBQ0k7Ozs7Ozs7a0NBR0QsOERBQUNqQixPQUFPa0I7Ozs7Ozs7Ozs7OzBCQUVaOzs7d0JBRVFkLE1BQUs7d0JBQ0xHOzs7Ozs7O2tDQUlKO3dCQUFhSCxNQUFLO2tDQUFXOzs7Ozs7a0NBRzdCO3dCQUFhQSxNQUFLO2tDQUFXOzs7Ozs7a0NBRzdCO3dCQUFhQSxNQUFLO2tDQUFXOzs7Ozs7a0NBRzdCO3dCQUFhQSxNQUFLO2tDQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNN0M7R0F0RFNEOztRQVNTRDs7O0tBVFRDO0FBd0RUIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9uYXYtbGluay5qc3g/YWYwYyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIGNsaWVudCc7XHJcbmltcG9ydCB7IE5hdmJhciB9IGZyb20gXCJmbG93Yml0ZS1yZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7IHVzZVBhdGhuYW1lIH0gZnJvbSAnbmV4dC9uYXZpZ2F0aW9uJ1xyXG5cclxuZnVuY3Rpb24gTmF2TGluayh7IGhyZWYsIGNoaWxkcmVuIH0pIHtcclxuICAgIC8qKlxyXG4gICAgICogPE5hdkxpbmsgaHJlZj0nLyc+SG9tZTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgaHJlZj0nL2Jsb2cnPkJsb2c8L05hdkxpbms+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIml0ZW1zLWNlbnRlciBcIj5cclxuICAgICAgICAgICAgPExpbmsgY2xhc3NOYW1lPXthY3RpdmUgPyAnZm9udC1ib2xkIHRleHQtYmxhY2snIDogJ2ZvbnQtYm9sZCB0ZXh0LWdyYXktNTAwJ30gc3R5bGU9e3ttYXJnaW46JzEwcHgnfX0gaHJlZj17aHJlZn0+e2NoaWxkcmVufTwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAqL1xyXG4gICAgbGV0IHNlZ21lbnQgPSB1c2VQYXRobmFtZSgpO1xyXG4gICAgbGV0IGFjdGl2ZSA9IGhyZWYgPT09IHNlZ21lbnQ7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxOYXZiYXJcclxuICAgICAgICAgICAgZmx1aWQ9e3RydWV9XHJcbiAgICAgICAgICAgIHJvdW5kZWQ9e3RydWV9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgICA8TmF2YmFyLkJyYW5kIGhyZWY9XCJodHRwczovL2Zsb3diaXRlLmNvbS9cIj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2Zsb3diaXRlLmNvbS9kb2NzL2ltYWdlcy9sb2dvLnN2Z1wiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibXItMyBoLTYgc206aC05XCJcclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJGbG93Yml0ZSBMb2dvXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZWxmLWNlbnRlciB3aGl0ZXNwYWNlLW5vd3JhcCB0ZXh0LXhsIGZvbnQtc2VtaWJvbGQgZGFyazp0ZXh0LXdoaXRlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgRmxvd2JpdGVcclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9OYXZiYXIuQnJhbmQ+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBtZDpvcmRlci0yXCI+XHJcbiAgICAgICAgICAgICAgICA8QnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIEdldCBzdGFydGVkXHJcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuVG9nZ2xlIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8TmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci5MaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgaHJlZj1cIi9uYXZiYXJzXCJcclxuICAgICAgICAgICAgICAgICAgICBhY3RpdmU9e3RydWV9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgSG9tZVxyXG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuTGluayBocmVmPVwiL25hdmJhcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBBYm91dFxyXG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuTGluayBocmVmPVwiL25hdmJhcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBTZXJ2aWNlc1xyXG4gICAgICAgICAgICAgICAgPC9OYXZiYXIuTGluaz5cclxuICAgICAgICAgICAgICAgIDxOYXZiYXIuTGluayBocmVmPVwiL25hdmJhcnNcIj5cclxuICAgICAgICAgICAgICAgICAgICBQcmljaW5nXHJcbiAgICAgICAgICAgICAgICA8L05hdmJhci5MaW5rPlxyXG4gICAgICAgICAgICAgICAgPE5hdmJhci5MaW5rIGhyZWY9XCIvbmF2YmFyc1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIENvbnRhY3RcclxuICAgICAgICAgICAgICAgIDwvTmF2YmFyLkxpbms+XHJcbiAgICAgICAgICAgIDwvTmF2YmFyLkNvbGxhcHNlPlxyXG4gICAgICAgIDwvTmF2YmFyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXZMaW5rOyJdLCJuYW1lcyI6WyJOYXZiYXIiLCJMaW5rIiwidXNlUGF0aG5hbWUiLCJOYXZMaW5rIiwiaHJlZiIsImNoaWxkcmVuIiwic2VnbWVudCIsImFjdGl2ZSIsImZsdWlkIiwicm91bmRlZCIsIkJyYW5kIiwiaW1nIiwic3JjIiwiY2xhc3NOYW1lIiwiYWx0Iiwic3BhbiIsImRpdiIsIkJ1dHRvbiIsIlRvZ2dsZSIsIkNvbGxhcHNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./app/nav-link.jsx\n"));

/***/ })

});