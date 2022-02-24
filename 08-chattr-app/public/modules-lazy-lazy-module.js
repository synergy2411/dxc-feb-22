(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-lazy-lazy-module"],{

/***/ "4z5V":
/*!*********************************************!*\
  !*** ./src/app/modules/lazy/lazy.module.ts ***!
  \*********************************************/
/*! exports provided: LazyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LazyModule", function() { return LazyModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_i_am_lazy_i_am_lazy_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/i-am-lazy/i-am-lazy.component */ "CQEE");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "iInd");






const LAZY_ROUTES = [
    {
        path: "",
        component: _components_i_am_lazy_i_am_lazy_component__WEBPACK_IMPORTED_MODULE_2__["IAmLazyComponent"]
    }
];
class LazyModule {
}
LazyModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LazyModule });
LazyModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LazyModule_Factory(t) { return new (t || LazyModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(LAZY_ROUTES)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LazyModule, { declarations: [_components_i_am_lazy_i_am_lazy_component__WEBPACK_IMPORTED_MODULE_2__["IAmLazyComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LazyModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_components_i_am_lazy_i_am_lazy_component__WEBPACK_IMPORTED_MODULE_2__["IAmLazyComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(LAZY_ROUTES)
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "CQEE":
/*!**************************************************************************!*\
  !*** ./src/app/modules/lazy/components/i-am-lazy/i-am-lazy.component.ts ***!
  \**************************************************************************/
/*! exports provided: IAmLazyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IAmLazyComponent", function() { return IAmLazyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class IAmLazyComponent {
    constructor() { }
    ngOnInit() {
    }
}
IAmLazyComponent.ɵfac = function IAmLazyComponent_Factory(t) { return new (t || IAmLazyComponent)(); };
IAmLazyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: IAmLazyComponent, selectors: [["app-i-am-lazy"]], decls: 2, vars: 0, template: function IAmLazyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "i-am-lazy works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbGF6eS9jb21wb25lbnRzL2ktYW0tbGF6eS9pLWFtLWxhenkuY29tcG9uZW50LmNzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](IAmLazyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-i-am-lazy',
                templateUrl: './i-am-lazy.component.html',
                styleUrls: ['./i-am-lazy.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-lazy-lazy-module.js.map