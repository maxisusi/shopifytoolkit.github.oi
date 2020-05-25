function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./menu-component/menu-component.component */
    "./src/app/menu-component/menu-component.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _minim_roas_minim_roas_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./minim-roas/minim-roas.component */
    "./src/app/minim-roas/minim-roas.component.ts");
    /* harmony import */


    var _policy_generator_policy_generator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./policy-generator/policy-generator.component */
    "./src/app/policy-generator/policy-generator.component.ts");

    function AppComponent_app_minim_roas_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-minim-roas");
      }
    }

    function AppComponent_app_policy_generator_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-policy-generator");
      }
    }

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'shopifyToolkit';
      this.menuSelected = 'Policy Generator';
    };

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 5,
      vars: 2,
      consts: [[1, "container-long"], [3, "childEvents"], [1, "container-short"], [4, "ngIf"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "app-menu-component", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("childEvents", function AppComponent_Template_app_menu_component_childEvents_1_listener($event) {
            return ctx.menuSelected = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AppComponent_app_minim_roas_3_Template, 1, 0, "app-minim-roas", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_app_policy_generator_4_Template, 1, 0, "app-policy-generator", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuSelected == "Minimum Roas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.menuSelected == "Policy Generator");
        }
      },
      directives: [_menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_1__["MenuComponentComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _minim_roas_minim_roas_component__WEBPACK_IMPORTED_MODULE_3__["MinimRoasComponent"], _policy_generator_policy_generator_component__WEBPACK_IMPORTED_MODULE_4__["PolicyGeneratorComponent"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _minim_roas_minim_roas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./minim-roas/minim-roas.component */
    "./src/app/minim-roas/minim-roas.component.ts");
    /* harmony import */


    var _policy_generator_policy_generator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./policy-generator/policy-generator.component */
    "./src/app/policy-generator/policy-generator.component.ts");
    /* harmony import */


    var _menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./menu-component/menu-component.component */
    "./src/app/menu-component/menu-component.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _minim_roas_minim_roas_component__WEBPACK_IMPORTED_MODULE_5__["MinimRoasComponent"], _policy_generator_policy_generator_component__WEBPACK_IMPORTED_MODULE_6__["PolicyGeneratorComponent"], _menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponentComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _minim_roas_minim_roas_component__WEBPACK_IMPORTED_MODULE_5__["MinimRoasComponent"], _policy_generator_policy_generator_component__WEBPACK_IMPORTED_MODULE_6__["PolicyGeneratorComponent"], _menu_component_menu_component_component__WEBPACK_IMPORTED_MODULE_7__["MenuComponentComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/menu-component/menu-component.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/menu-component/menu-component.component.ts ***!
    \************************************************************/

  /*! exports provided: MenuComponentComponent */

  /***/
  function srcAppMenuComponentMenuComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MenuComponentComponent", function () {
      return MenuComponentComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = function _c0(a0, a1) {
      return {
        "menu-item": a0,
        "menu-item-selected": a1
      };
    };

    function MenuComponentComponent_li_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menu_r1 = ctx.$implicit;

        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](3, _c0, menu_r1 !== ctx_r0.selectedMenu, menu_r1 === ctx_r0.selectedMenu));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r1);
      }
    }

    var MenuComponentComponent = /*#__PURE__*/function () {
      function MenuComponentComponent() {
        _classCallCheck(this, MenuComponentComponent);

        this.childEvents = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.menuElements = ['Minimum Roas', 'Policy Generator', 'Weather', 'Info'];
        this.selectedMenu = '';
      }

      _createClass(MenuComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectModule",
        value: function selectModule(event) {
          this.selectedMenu = event.target.innerText;
          this.childEvents.emit(this.selectedMenu);
        }
      }]);

      return MenuComponentComponent;
    }();

    MenuComponentComponent.ɵfac = function MenuComponentComponent_Factory(t) {
      return new (t || MenuComponentComponent)();
    };

    MenuComponentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MenuComponentComponent,
      selectors: [["app-menu-component"]],
      outputs: {
        childEvents: "childEvents"
      },
      decls: 5,
      vars: 1,
      consts: [[1, "main-menu"], [1, "logo"], [1, "menu-items", 3, "click"], ["class", "menu-item", 3, "class", 4, "ngFor", "ngForOf"], [1, "menu-item"]],
      template: function MenuComponentComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Track");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "ul", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MenuComponentComponent_Template_ul_click_3_listener($event) {
            return ctx.selectModule($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, MenuComponentComponent_li_4_Template, 2, 6, "li", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.menuElements);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 900;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Black.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 700;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Bold.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 800;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Heavy.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 200;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Light.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 500;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Medium.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 400;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Regular.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 600;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Semibold.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 300;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Thin.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 100;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Ultralight.otf\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-style: none;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #16161A;\n  color: white;\n  font-family: \"SF Display\";\n  font-size: 20px;\n  overflow-x: hidden;\n}\ninput[_ngcontent-%COMP%] {\n  width: 290px;\n  font-size: 20px;\n  margin-bottom: 3em;\n  padding-bottom: 10px;\n  font-weight: 300;\n  color: white;\n  opacity: 50%;\n  background-color: #16161A;\n  border-bottom: solid;\n  border-bottom-width: 0.5px;\n  border-bottom-color: #94A1B2;\n  transition: all 0.3s ease-out;\n}\ninput[_ngcontent-%COMP%]:hover {\n  opacity: 100%;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.container-long[_ngcontent-%COMP%] {\n  width: 1365px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  margin-top: 35px;\n}\n.container-short[_ngcontent-%COMP%] {\n  width: 1088px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #7F5AF0;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 12px;\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n.selected-menu[_ngcontent-%COMP%] {\n  font-size: 42.5px;\n  font-weight: 500;\n  margin-bottom: 100px;\n}\n.circle_1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -100px;\n  right: -200px;\n}\n.circle_2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 150px;\n}\n.circle_3[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -400px;\n  left: -200px;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  color: #7F5AF0;\n}\n[_ngcontent-%COMP%]::selection {\n  color: #7F5AF0;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #7F5AF0;\n  cursor: -webkit-grab;\n  cursor: grab;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #9171f2;\n}\n@media only screen and (max-width: 1420px) {\n  .circle_1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .circle_2[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .circle_3[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.main-menu[_ngcontent-%COMP%] {\n  width: 1364px;\n  margin-bottom: 150px;\n  display: flex;\n}\n.main-menu[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 25px;\n  font-weight: 900;\n  flex-grow: 1;\n}\n.main-menu[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 3em;\n  margin-bottom: 0.5em;\n}\n.main-menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n  display: flex;\n  list-style: none;\n}\n.main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n  line-height: -5px;\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n  margin-left: 105px;\n  transition: all 0.3s ease-out;\n}\n.main-menu[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%]:hover {\n  color: #7F5AF0;\n}\n.main-menu[_ngcontent-%COMP%]   .menu-item-selected[_ngcontent-%COMP%] {\n  line-height: -5px;\n  font-size: 18px;\n  font-weight: 500;\n  color: #7F5AF0;\n  cursor: pointer;\n  margin-left: 105px;\n  transition: all 0.3s ease-out;\n  position: relative;\n}\n.main-menu[_ngcontent-%COMP%]   .menu-item-selected[_ngcontent-%COMP%]::after {\n  content: \"\u25E1\";\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: -20px;\n  text-align: center;\n}\n@media only screen and (max-width: 1420px) {\n  .main-menu[_ngcontent-%COMP%] {\n    flex-direction: column;\n    max-width: 1420px;\n    align-items: center;\n  }\n  .main-menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%] {\n    margin-top: 50px;\n  }\n  .main-menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n  .main-menu[_ngcontent-%COMP%]   .menu-items[_ngcontent-%COMP%]   .menu-item-selected[_ngcontent-%COMP%] {\n    margin: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWVudS1jb21wb25lbnQvbWVudS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4L0RvY3VtZW50cy9Bbmd1bGFyL3Nob3BpZnlUb29sa2l0L3NyYy9zdHlsZXMuc2NzcyIsIi9Vc2Vycy9tYXgvRG9jdW1lbnRzL0FuZ3VsYXIvc2hvcGlmeVRvb2xraXQvc3JjL2FwcC9tZW51LWNvbXBvbmVudC9tZW51LWNvbXBvbmVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEIsc0JBQUE7QUFZQSxvQkFBQTtBQUlBLFdBQUE7QUFDQTtFQUNJLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBRGRKO0FDaUJFLFVBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx1REFBQTtBRGZKO0FDa0JFLFdBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBRGhCSjtBQ21CRSxXQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0RBQUE7QURqQko7QUNvQkUsWUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHlEQUFBO0FEbEJKO0FDcUJFLGFBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwwREFBQTtBRG5CSjtBQ3NCRSxjQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsMkRBQUE7QURwQko7QUN1QkUsVUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVEQUFBO0FEckJKO0FDd0JFLGdCQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsNkRBQUE7QUR0Qko7QUMyQkE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FEekJKO0FDOEJBO0VBQ0kseUJBeEZJO0VBeUZKLFlBeEZJO0VBeUZKLHlCQTNGa0I7RUE0RmxCLGVBQUE7RUFDQSxrQkFBQTtBRDNCSjtBQ2dDQTtFQUNJLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLGdCQTdGUztFQThGVCxZQXRHSTtFQXVHSixZQUFBO0VBQ0EseUJBekdJO0VBMEdKLG9CQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkF6R1M7RUEyR1QsNkJBeEdrQjtBRDBFdEI7QUNnQ0k7RUFDSSxhQUFBO0FEOUJSO0FDaUNJO0VBQ0ksYUFBQTtBRC9CUjtBQ29DQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QURqQ0o7QUNxQ0E7RUFDSSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBRGxDSjtBQ3FDQTtFQUNJLGNBeklLO0VBMElMLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBdklTO0VBd0lULG1CQUFBO0FEbENKO0FDb0NBO0VBQ0ksaUJBQUE7RUFDQSxnQkE3SVc7RUE4SVgsb0JBQUE7QURqQ0o7QUNxQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxhQUFBO0FEbENKO0FDcUNBO0VBQ0ksa0JBQUE7RUFDQSxZQUFBO0FEbENKO0FDcUNBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsWUFBQTtBRGxDSjtBQ29DQTtFQUNFLGNBeEtPO0FEdUlUO0FDZ0NBO0VBQ0UsY0F4S087QUR1SVQ7QUNvQ0E7RUFDRSxXQUFBO0FEakNGO0FDdUNBLFdBQUE7QUFDQTtFQUNFLG1CQXBMTztFQXFMUCxvQkFBQTtFQUFBLFlBQUE7RUFDQSxxQ0FsTG9CO0VBa0xwQiw2QkFsTG9CO0FEOEl0QjtBQ3lDQSxvQkFBQTtBQUNBO0VBQ0UsbUJBQUE7QUR0Q0Y7QUMyQ0E7RUFFRTtJQUNFLGFBQUE7RUR6Q0Y7O0VDMkNBO0lBQ0UsYUFBQTtFRHhDRjs7RUMwQ0E7SUFDRSxhQUFBO0VEdkNGO0FBQ0Y7QUV6S0E7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0FGMktKO0FFektJO0VBQ0ksZUFBQTtFQUNBLGdCREdLO0VDRkwsWUFBQTtBRjJLUjtBRXhLSTtFQUNJLGNBQUE7RUFDQSxvQkFBQTtBRjBLUjtBRXZLSTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBRnlLUjtBRXRLSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCRGZPO0VDZ0JQLGVBQUE7RUFDQSxrQkFBQTtFQUNBLDZCRG5CYztBRDJMdEI7QUV0S1E7RUFDSSxjRDFCSDtBRGtNVDtBRXJLSTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCRDNCTztFQzRCUCxjRGpDQztFQ2tDRCxlQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkRoQ2M7RUNpQ2Qsa0JBQUE7QUZ1S1I7QUVyS1E7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsT0FBQTtFQUNBLFFBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7QUZ1S1o7QUVsS0E7RUFHSTtJQUNJLHNCQUFBO0lBQ0EsaUJBQUE7SUFDQSxtQkFBQTtFRm1LTjtFRWxLTTtJQUNJLGdCQUFBO0VGb0tWO0VFbEtVO0lBQ0ksWUFBQTtFRm9LZDtFRWpLVTtJQUNJLFlBQUE7RUZtS2Q7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21lbnUtY29tcG9uZW50L21lbnUtY29tcG9uZW50LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLyogVmFyaWFibGVzIC0gU1RBUlQgKi9cbi8qIFZhcmlhYmxlcyAtIEVORCAqL1xuLyoqIEJsYWNrICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogOTAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktQmxhY2sub3RmXCIpO1xufVxuLyoqIEJvbGQgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1Cb2xkLm90ZlwiKTtcbn1cbi8qKiBIZWF2eSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LUhlYXZ5Lm90ZlwiKTtcbn1cbi8qKiBMaWdodCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LUxpZ2h0Lm90ZlwiKTtcbn1cbi8qKiBNZWRpdW0gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1NZWRpdW0ub3RmXCIpO1xufVxuLyoqIFJlZ3VsYXIgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1SZWd1bGFyLm90ZlwiKTtcbn1cbi8qKiBTZW1pYm9sZCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LVNlbWlib2xkLm90ZlwiKTtcbn1cbi8qKiBUaGluICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogMzAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktVGhpbi5vdGZcIik7XG59XG4vKiogVWx0cmFsaWdodCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LVVsdHJhbGlnaHQub3RmXCIpO1xufVxuKiB7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyLXN0eWxlOiBub25lO1xufVxuXG5ib2R5IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxQTtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xufVxuXG5pbnB1dCB7XG4gIHdpZHRoOiAyOTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzZW07XG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICBmb250LXdlaWdodDogMzAwO1xuICBjb2xvcjogd2hpdGU7XG4gIG9wYWNpdHk6IDUwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxQTtcbiAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gIGJvcmRlci1ib3R0b20td2lkdGg6IDAuNXB4O1xuICBib3JkZXItYm90dG9tLWNvbG9yOiAjOTRBMUIyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cbmlucHV0OmhvdmVyIHtcbiAgb3BhY2l0eTogMTAwJTtcbn1cbmlucHV0OmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn1cblxuLmNvbnRhaW5lci1sb25nIHtcbiAgd2lkdGg6IDEzNjVweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgYXV0bztcbiAgbWFyZ2luLXRvcDogMzVweDtcbn1cblxuLmNvbnRhaW5lci1zaG9ydCB7XG4gIHdpZHRoOiAxMDg4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdWJ0aXRsZSB7XG4gIGNvbG9yOiAjN0Y1QUYwO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5zZWxlY3RlZC1tZW51IHtcbiAgZm9udC1zaXplOiA0Mi41cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG4uY2lyY2xlXzEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTEwMHB4O1xuICByaWdodDogLTIwMHB4O1xufVxuXG4uY2lyY2xlXzIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAxNTBweDtcbn1cblxuLmNpcmNsZV8zIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC00MDBweDtcbiAgbGVmdDogLTIwMHB4O1xufVxuXG46OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAjN0Y1QUYwO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDIwcHg7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICM3RjVBRjA7XG4gIGN1cnNvcjogZ3JhYjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG5cbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM5MTcxZjI7XG59XG5cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XG4gIC5jaXJjbGVfMSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jaXJjbGVfMiB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG4gIC5jaXJjbGVfMyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLm1haW4tbWVudSB7XG4gIHdpZHRoOiAxMzY0cHg7XG4gIG1hcmdpbi1ib3R0b206IDE1MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLm1haW4tbWVudSAubG9nbyB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgZmxleC1ncm93OiAxO1xufVxuLm1haW4tbWVudSBoMSB7XG4gIGZvbnQtc2l6ZTogM2VtO1xuICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbn1cbi5tYWluLW1lbnUgLm1lbnUtaXRlbXMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuLm1haW4tbWVudSAubWVudS1pdGVtIHtcbiAgbGluZS1oZWlnaHQ6IC01cHg7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuLm1haW4tbWVudSAubWVudS1pdGVtOmhvdmVyIHtcbiAgY29sb3I6ICM3RjVBRjA7XG59XG4ubWFpbi1tZW51IC5tZW51LWl0ZW0tc2VsZWN0ZWQge1xuICBsaW5lLWhlaWdodDogLTVweDtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjb2xvcjogIzdGNUFGMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBtYXJnaW4tbGVmdDogMTA1cHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWFpbi1tZW51IC5tZW51LWl0ZW0tc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCLil6FcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtMjBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MjBweCkge1xuICAubWFpbi1tZW51IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1heC13aWR0aDogMTQyMHB4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIH1cbiAgLm1haW4tbWVudSAubWVudS1pdGVtcyB7XG4gICAgbWFyZ2luLXRvcDogNTBweDtcbiAgfVxuICAubWFpbi1tZW51IC5tZW51LWl0ZW1zIC5tZW51LWl0ZW0ge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxuICAubWFpbi1tZW51IC5tZW51LWl0ZW1zIC5tZW51LWl0ZW0tc2VsZWN0ZWQge1xuICAgIG1hcmdpbjogMjBweDtcbiAgfVxufSIsIlxuXG4vKiBWYXJpYWJsZXMgLSBTVEFSVCAqL1xuJHByaW1hcnktZm9udC1mYW1pbHk6ICdTRiBEaXNwbGF5JztcbiRibGFjazogIzE2MTYxQTtcbiR3aGl0ZTogd2hpdGU7XG4kcHVycGxlOiAjN0Y1QUYwO1xuJGxpZ2h0LWdyZXk6ICM5NEExQjI7XG4kZ3JlZW46ICMyQ0I2N0Q7XG4kb3JhbmdlOiB0b21hdG87XG4kcHJpbWFyaXktdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG4kZm9udC1yZWd1bGFyOiA1MDA7XG4kZm9udC1oZWF2eTogOTAwO1xuJGZvbnQtbGlnaHQ6IDMwMDtcbi8qIFZhcmlhYmxlcyAtIEVORCAqL1xuXG5cblxuLyoqIEJsYWNrICovXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktQmxhY2sub3RmXCIpO1xuICB9XG4gIFxuICAvKiogQm9sZCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktQm9sZC5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBIZWF2eSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDgwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktSGVhdnkub3RmXCIpO1xuICB9XG4gIFxuICAvKiogTGlnaHQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LUxpZ2h0Lm90ZlwiKTtcbiAgfVxuICBcbiAgLyoqIE1lZGl1bSAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktTWVkaXVtLm90ZlwiKTtcbiAgfVxuICBcbiAgLyoqIFJlZ3VsYXIgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LVJlZ3VsYXIub3RmXCIpO1xuICB9XG4gIFxuICAvKiogU2VtaWJvbGQgKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LVNlbWlib2xkLm90ZlwiKTtcbiAgfVxuICBcbiAgLyoqIFRoaW4gKi9cbiAgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG4gICAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LVRoaW4ub3RmXCIpO1xuICB9XG4gIFxuICAvKiogVWx0cmFsaWdodCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktVWx0cmFsaWdodC5vdGZcIik7XG4gIH1cblxuXG5cbioge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlci1zdHlsZTogbm9uZTtcblxufVxuXG5cbmJvZHkge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIGZvbnQtZmFtaWx5OiAkcHJpbWFyeS1mb250LWZhbWlseTtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuXG5cbn1cblxuaW5wdXQge1xuICAgIHdpZHRoOiAyOTBweDtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogM2VtO1xuICAgIHBhZGRpbmctYm90dG9tOiAxMHB4O1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1saWdodDtcbiAgICBjb2xvcjogJHdoaXRlO1xuICAgIG9wYWNpdHk6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmxhY2s7XG4gICAgYm9yZGVyLWJvdHRvbTogc29saWQ7XG4gICAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogJGxpZ2h0LWdyZXk7XG5cbiAgICB0cmFuc2l0aW9uOiAkcHJpbWFyaXktdHJhbnNpdGlvbjtcblxuICAgICY6aG92ZXIge1xuICAgICAgICBvcGFjaXR5OiAxMDAlO1xuICAgIH1cblxuICAgICY6Zm9jdXMge1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgIH1cbn1cblxuXG4uY29udGFpbmVyLWxvbmd7XG4gICAgd2lkdGg6IDEzNjVweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBtYXJnaW4tdG9wOiAzNXB4O1xuXG59XG5cbi5jb250YWluZXItc2hvcnQge1xuICAgIHdpZHRoOiAxMDg4cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgbWFyZ2luOiAwIGF1dG87XG59XG5cbi5zdWJ0aXRsZSB7XG4gICAgY29sb3I6ICRwdXJwbGU7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBmb250LXdlaWdodDogJGZvbnQtaGVhdnk7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cbi5zZWxlY3RlZC1tZW51IHtcbiAgICBmb250LXNpemU6IDQyLjVweDtcbiAgICBmb250LXdlaWdodDogJGZvbnQtcmVndWxhcjtcbiAgICBtYXJnaW4tYm90dG9tOiAxMDBweDtcbn1cblxuXG4uY2lyY2xlXzEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC0xMDBweDtcbiAgICByaWdodDogLTIwMHB4O1xuIFxufVxuLmNpcmNsZV8yIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE1MHB4O1xuXG59XG4uY2lyY2xlXzMge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IC00MDBweDtcbiAgICBsZWZ0OiAtMjAwcHg7XG59XG46OnNlbGVjdGlvbiB7XG4gIGNvbG9yOiAkcHVycGxlO1xufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDIwcHg7XG5cblxufVxuXG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICRwdXJwbGU7IFxuICBjdXJzb3I6IGdyYWI7XG4gIHRyYW5zaXRpb246ICRwcmltYXJpeS10cmFuc2l0aW9uO1xuXG5cbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogbGlnaHRlbigkcHVycGxlLCA1JSk7IFxuXG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcblxuICAuY2lyY2xlXzEge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNpcmNsZV8yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG4gIC5jaXJjbGVfMyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuXG5cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTg0cHgpIHtcbiAgICBcbiAgICAuY29udGFpbmVyLWxvbmd7XG5cbiAgICB9XG59IiwiQGltcG9ydCBcIi4uLy4uL3N0eWxlcy5zY3NzXCI7XG5cbi5tYWluLW1lbnUge1xuICAgIHdpZHRoOiAxMzY0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTUwcHg7XG4gICAgZGlzcGxheTogZmxleDtcblxuICAgIC5sb2dvIHtcbiAgICAgICAgZm9udC1zaXplOiAyNXB4O1xuICAgICAgICBmb250LXdlaWdodDogJGZvbnQtaGVhdnk7XG4gICAgICAgIGZsZXgtZ3JvdzogMTtcbiAgICB9XG5cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogM2VtO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwLjVlbTtcbiAgICB9XG5cbiAgICAubWVudS1pdGVtcyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XG4gICAgfVxuXG4gICAgLm1lbnUtaXRlbSB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAtNXB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogJHByaW1hcml5LXRyYW5zaXRpb247XG5cbiAgICAgICAgJjpob3ZlciB7XG4gICAgICAgICAgICBjb2xvcjogJHB1cnBsZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAubWVudS1pdGVtLXNlbGVjdGVkIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IC01cHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6ICRmb250LXJlZ3VsYXI7XG4gICAgICAgIGNvbG9yOiAkcHVycGxlO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAxMDVweDtcbiAgICAgICAgdHJhbnNpdGlvbjogJHByaW1hcml5LXRyYW5zaXRpb247XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgICBjb250ZW50OiBcIuKXoVwiO1xuICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiAwO1xuICAgICAgICAgICAgcmlnaHQ6IDA7XG4gICAgICAgICAgICBib3R0b206IC0yMHB4O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MjBweCkge1xuICAgIFxuICAgIFxuICAgIC5tYWluLW1lbnUge1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBtYXgtd2lkdGg6IDE0MjBweDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgLm1lbnUtaXRlbXMge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogNTBweDtcblxuICAgICAgICAgICAgLm1lbnUtaXRlbSB7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAubWVudS1pdGVtLXNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICBtYXJnaW46IDIwcHhcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MenuComponentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-menu-component',
          templateUrl: './menu-component.component.html',
          styleUrls: ['./menu-component.component.scss']
        }]
      }], function () {
        return [];
      }, {
        childEvents: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/minim-roas/minim-roas.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/minim-roas/minim-roas.component.ts ***!
    \****************************************************/

  /*! exports provided: MinimRoasComponent */

  /***/
  function srcAppMinimRoasMinimRoasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MinimRoasComponent", function () {
      return MinimRoasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function MinimRoasComponent_div_16_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r0.minRoas.toFixed(2) + "x");
      }
    }

    function MinimRoasComponent_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.maxAcos.toFixed() + "%");
      }
    }

    function MinimRoasComponent_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r2.breakEven));
      }
    }

    function MinimRoasComponent_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r3.efficencyRatio.toFixed() + "%");
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "type": a0,
        "selected": a1
      };
    };

    function MinimRoasComponent_li_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var menu_r9 = ctx.$implicit;

        var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](2, _c0, menu_r9 !== ctx_r4.selectedMenu, menu_r9 == ctx_r4.selectedMenu));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](menu_r9);
      }
    }

    function MinimRoasComponent_div_41_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.tRoas + "x");
      }
    }

    function MinimRoasComponent_div_45_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.tAcos + "%");
      }
    }

    function MinimRoasComponent_div_49_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r7.tAcos));
      }
    }

    function MinimRoasComponent_div_53_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "currency");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx_r8.netProfit));
      }
    }

    var MinimRoasComponent = /*#__PURE__*/function () {
      function MinimRoasComponent() {
        _classCallCheck(this, MinimRoasComponent);

        this.revenu = '';
        this.cost = '';
        this.targetRoas = '';
        this.targetAcos = '';
        this.conservativeValue = 0.3;
        this.moderateValue = 0.6;
        this.aggresifValue = 0.9;
        this.isTriggered = false;
        this.inverstorType = ['Conservative', 'Moderate', 'Aggressive'];
      }

      _createClass(MinimRoasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "selectInvestorType",
        value: function selectInvestorType(event) {
          this.isTriggered = true;
          this.selectedMenu = event.target.innerText;
          console.log(this.selectedMenu);
        }
      }, {
        key: "genData",
        value: function genData(currentMenuSelected, index) {
          switch (currentMenuSelected) {
            case "Conservative":
              if (index === 0) {
                this.targetRoas = this.generatedRoas(this.breakEven, this.revenu, this.conservativeValue);
                return this.targetRoas;
              } else {
                this.targetAcos = this.generatedAcos(this.breakEven, this.conservativeValue);
                return this.targetAcos;
              }

            case "Moderate":
              if (index === 0) {
                this.targetRoas = this.generatedRoas(this.breakEven, this.revenu, this.moderateValue);
                return this.targetRoas;
              } else {
                this.targetAcos = this.generatedAcos(this.breakEven, this.moderateValue);
                return this.targetAcos;
              }

            case "Aggressive":
              if (index === 0) {
                this.targetRoas = this.generatedRoas(this.breakEven, this.revenu, this.aggresifValue);
                return this.targetRoas;
              } else {
                this.targetAcos = this.generatedAcos(this.breakEven, this.aggresifValue);
                return this.targetAcos;
              }

          }
        }
      }, {
        key: "generatedRoas",
        value: function generatedRoas(profit, revenu, value) {
          return (revenu / (profit * value)).toFixed(2);
        }
      }, {
        key: "generatedAcos",
        value: function generatedAcos(profit, value) {
          return (profit * value).toFixed(2);
        }
      }, {
        key: "minRoas",
        get: function get() {
          return parseInt(this.revenu) / (parseInt(this.revenu) - parseInt(this.cost));
        }
      }, {
        key: "maxAcos",
        get: function get() {
          return (parseInt(this.revenu) - parseInt(this.cost)) / parseInt(this.revenu) * 100;
        }
      }, {
        key: "breakEven",
        get: function get() {
          return parseInt(this.revenu) - parseInt(this.cost);
        }
      }, {
        key: "efficencyRatio",
        get: function get() {
          return parseInt(this.cost) / parseInt(this.revenu) * 100;
        }
      }, {
        key: "netProfit",
        get: function get() {
          return this.breakEven - parseInt(this.targetAcos);
        }
      }, {
        key: "tRoas",
        get: function get() {
          var tRoas = this.genData(this.selectedMenu, 0);
          return tRoas;
        }
      }, {
        key: "tAcos",
        get: function get() {
          var tAcos = this.genData(this.selectedMenu, 1);
          return tAcos;
        }
      }]);

      return MinimRoasComponent;
    }();

    MinimRoasComponent.ɵfac = function MinimRoasComponent_Factory(t) {
      return new (t || MinimRoasComponent)();
    };

    MinimRoasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: MinimRoasComponent,
      selectors: [["app-minim-roas"]],
      decls: 54,
      vars: 11,
      consts: [[1, "subtitle"], [1, "selected-menu"], ["src", "../../assets/Circle_1.png", 1, "circle_1"], ["src", "../../assets/Circle_2.png", 1, "circle_2"], ["src", "../../assets/Circle_3.png", 1, "circle_3"], [1, "menu"], [1, "minimum-roas-form"], [1, "info-input"], ["placeholder", "Your Revenu", 3, "ngModel", "ngModelChange"], ["placeholder", "Your Costs", 3, "ngModel", "ngModelChange"], [1, "stats"], [1, "info-stat"], [4, "ngIf"], [1, "investment-plan"], [1, "investor-info"], [1, "investor-types", 3, "click"], ["class", "type", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "type", 3, "ngClass"]],
      template: function MinimRoasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "get to know your datas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Minimum Roas");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MinimRoasComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.revenu = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function MinimRoasComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.cost = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Min ROAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, MinimRoasComponent_div_16_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Max ACOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, MinimRoasComponent_div_20_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Break Even");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, MinimRoasComponent_div_24_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Efficiency ratio");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, MinimRoasComponent_div_28_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "What type of investor are you ?");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "ul", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MinimRoasComponent_Template_ul_click_33_listener($event) {
            return ctx.selectInvestorType($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, MinimRoasComponent_li_34_Template, 2, 5, "li", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u201CAggressive\u201D is perfect for new conversation campaign or newly created ads that will probably not convert as much as a retargeting ad");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Target ROAS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, MinimRoasComponent_div_41_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "Target ACOS");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](45, MinimRoasComponent_div_45_Template, 2, 1, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "Target CPP");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](49, MinimRoasComponent_div_49_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "Target Revenu");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](53, MinimRoasComponent_div_53_Template, 3, 3, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.revenu);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.cost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenu && ctx.cost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenu && ctx.cost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenu && ctx.cost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenu && ctx.cost);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.inverstorType);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenu && ctx.cost && ctx.isTriggered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenu && ctx.cost && ctx.isTriggered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenu && ctx.cost && ctx.isTriggered);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.revenu && ctx.cost && ctx.isTriggered);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CurrencyPipe"]],
      styles: ["@charset \"UTF-8\";\n\n\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 900;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Black.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 700;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Bold.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 800;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Heavy.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 200;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Light.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 500;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Medium.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 400;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Regular.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 600;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Semibold.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 300;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Thin.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 100;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Ultralight.otf\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-style: none;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #16161A;\n  color: white;\n  font-family: \"SF Display\";\n  font-size: 20px;\n  overflow-x: hidden;\n}\ninput[_ngcontent-%COMP%] {\n  width: 290px;\n  font-size: 20px;\n  margin-bottom: 3em;\n  padding-bottom: 10px;\n  font-weight: 300;\n  color: white;\n  opacity: 50%;\n  background-color: #16161A;\n  border-bottom: solid;\n  border-bottom-width: 0.5px;\n  border-bottom-color: #94A1B2;\n  transition: all 0.3s ease-out;\n}\ninput[_ngcontent-%COMP%]:hover {\n  opacity: 100%;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.container-long[_ngcontent-%COMP%] {\n  width: 1365px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  margin-top: 35px;\n}\n.container-short[_ngcontent-%COMP%] {\n  width: 1088px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #7F5AF0;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 12px;\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n.selected-menu[_ngcontent-%COMP%] {\n  font-size: 42.5px;\n  font-weight: 500;\n  margin-bottom: 100px;\n}\n.circle_1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -100px;\n  right: -200px;\n}\n.circle_2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 150px;\n}\n.circle_3[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -400px;\n  left: -200px;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  color: #7F5AF0;\n}\n[_ngcontent-%COMP%]::selection {\n  color: #7F5AF0;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #7F5AF0;\n  cursor: -webkit-grab;\n  cursor: grab;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #9171f2;\n}\n@media only screen and (max-width: 1420px) {\n  .circle_1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .circle_2[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .circle_3[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.menu[_ngcontent-%COMP%] {\n  width: 1088px;\n  height: 510px;\n  display: flex;\n  justify-content: space-between;\n}\n.menu[_ngcontent-%COMP%]   .minimum-roas-form[_ngcontent-%COMP%] {\n  width: 40%;\n  display: flex;\n  flex-direction: column;\n  border-right: 1px solid #94A1B2;\n  padding-right: 100px;\n}\n.menu[_ngcontent-%COMP%]   .minimum-roas-form[_ngcontent-%COMP%]   .info-input[_ngcontent-%COMP%] {\n  flex: 1;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%] {\n  width: 70%;\n  margin-left: 100px;\n  display: flex;\n  flex-direction: column;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%]   .investor-info[_ngcontent-%COMP%] {\n  flex: 1;\n  font-weight: 500;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%]   .investor-info[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 20px;\n  margin-bottom: 25px;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%]   .investor-info[_ngcontent-%COMP%]   .investor-types[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  list-style: none;\n  margin-bottom: 50px;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%]   .investor-info[_ngcontent-%COMP%]   .investor-types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%] {\n  transition: all 0.3s ease-out;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%]   .investor-info[_ngcontent-%COMP%]   .investor-types[_ngcontent-%COMP%]   .type[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #7F5AF0;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%]   .investor-info[_ngcontent-%COMP%]   .investor-types[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%] {\n  color: #7F5AF0;\n  cursor: pointer;\n  position: relative;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%]   .investor-info[_ngcontent-%COMP%]   .investor-types[_ngcontent-%COMP%]   .selected[_ngcontent-%COMP%]::after {\n  content: \"\u25E1\";\n  position: absolute;\n  margin-left: auto;\n  margin-right: auto;\n  left: 0;\n  right: 0;\n  bottom: -25px;\n  text-align: center;\n}\n.menu[_ngcontent-%COMP%]   .investment-plan[_ngcontent-%COMP%]   .investor-info[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.stats[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 400px;\n  display: flex;\n  flex-wrap: wrap;\n}\n.stats[_ngcontent-%COMP%]   .info-stat[_ngcontent-%COMP%] {\n  height: 85px;\n  width: 50%;\n  margin-bottom: 40px;\n}\n.stats[_ngcontent-%COMP%]   .info-stat[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n}\n.stats[_ngcontent-%COMP%]   .info-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-top: 10px;\n  font-size: 30px;\n  transition: all 0.3s ease-out;\n}\n.stats[_ngcontent-%COMP%]   .info-stat[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:hover {\n  color: #30c688;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWluaW0tcm9hcy9taW5pbS1yb2FzLmNvbXBvbmVudC5zY3NzIiwiL1VzZXJzL21heC9Eb2N1bWVudHMvQW5ndWxhci9zaG9waWZ5VG9vbGtpdC9zcmMvc3R5bGVzLnNjc3MiLCIvVXNlcnMvbWF4L0RvY3VtZW50cy9Bbmd1bGFyL3Nob3BpZnlUb29sa2l0L3NyYy9hcHAvbWluaW0tcm9hcy9taW5pbS1yb2FzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VoQixzQkFBQTtBQVlBLG9CQUFBO0FBSUEsV0FBQTtBQUNBO0VBQ0kseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FEZEo7QUNpQkUsVUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHVEQUFBO0FEZko7QUNrQkUsV0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FEaEJKO0FDbUJFLFdBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBRGpCSjtBQ29CRSxZQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseURBQUE7QURsQko7QUNxQkUsYUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBEQUFBO0FEbkJKO0FDc0JFLGNBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBRHBCSjtBQ3VCRSxVQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdURBQUE7QURyQko7QUN3QkUsZ0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtBRHRCSjtBQzJCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUR6Qko7QUM4QkE7RUFDSSx5QkF4Rkk7RUF5RkosWUF4Rkk7RUF5RkoseUJBM0ZrQjtFQTRGbEIsZUFBQTtFQUNBLGtCQUFBO0FEM0JKO0FDZ0NBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBN0ZTO0VBOEZULFlBdEdJO0VBdUdKLFlBQUE7RUFDQSx5QkF6R0k7RUEwR0osb0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQXpHUztFQTJHVCw2QkF4R2tCO0FEMEV0QjtBQ2dDSTtFQUNJLGFBQUE7QUQ5QlI7QUNpQ0k7RUFDSSxhQUFBO0FEL0JSO0FDb0NBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBRGpDSjtBQ3FDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FEbENKO0FDcUNBO0VBQ0ksY0F6SUs7RUEwSUwseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkF2SVM7RUF3SVQsbUJBQUE7QURsQ0o7QUNvQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQTdJVztFQThJWCxvQkFBQTtBRGpDSjtBQ3FDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QURsQ0o7QUNxQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QURsQ0o7QUNxQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FEbENKO0FDb0NBO0VBQ0UsY0F4S087QUR1SVQ7QUNnQ0E7RUFDRSxjQXhLTztBRHVJVDtBQ29DQTtFQUNFLFdBQUE7QURqQ0Y7QUN1Q0EsV0FBQTtBQUNBO0VBQ0UsbUJBcExPO0VBcUxQLG9CQUFBO0VBQUEsWUFBQTtFQUNBLHFDQWxMb0I7RUFrTHBCLDZCQWxMb0I7QUQ4SXRCO0FDeUNBLG9CQUFBO0FBQ0E7RUFDRSxtQkFBQTtBRHRDRjtBQzJDQTtFQUVFO0lBQ0UsYUFBQTtFRHpDRjs7RUMyQ0E7SUFDRSxhQUFBO0VEeENGOztFQzBDQTtJQUNFLGFBQUE7RUR2Q0Y7QUFDRjtBRXpLQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FGMktKO0FFeEtJO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLCtCQUFBO0VBQ0Esb0JBQUE7QUYwS1I7QUV4S1E7RUFDSSxPQUFBO0FGMEtaO0FFdEtJO0VBQ0ksVUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FGd0tSO0FFdEtRO0VBQ0ksT0FBQTtFQUNBLGdCRGxCRztBRDBMZjtBRXRLWTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBRndLaEI7QUVyS1k7RUFDSSxhQUFBO0VBRUEsOEJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FGc0toQjtBRXBLZ0I7RUFDSSw2QkRsQ0U7QUR3TXRCO0FFcEtvQjtFQUNJLGVBQUE7RUFDQSxjRDFDZjtBRGdOVDtBRWxLZ0I7RUFDSSxjRC9DWDtFQ2dEVyxlQUFBO0VBQ0Esa0JBQUE7QUZvS3BCO0FFbEtvQjtFQUNJLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtBRm9LeEI7QUVoS1k7RUFDSSxnQkR6REg7QUQyTmI7QUU1SkE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRitKSjtBRTdKSTtFQUNJLFlBQUE7RUFDQSxVQUFBO0VBQ0EsbUJBQUE7QUYrSlI7QUU3SlE7RUFDSSxnQkQzRUM7QUQwT2I7QUU1SlE7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSw2QkRwRlU7QURrUHRCO0FFNUpZO0VBQ0ksY0FBQTtBRjhKaEIiLCJmaWxlIjoic3JjL2FwcC9taW5pbS1yb2FzL21pbmltLXJvYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKiBWYXJpYWJsZXMgLSBTVEFSVCAqL1xuLyogVmFyaWFibGVzIC0gRU5EICovXG4vKiogQmxhY2sgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1CbGFjay5vdGZcIik7XG59XG4vKiogQm9sZCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LUJvbGQub3RmXCIpO1xufVxuLyoqIEhlYXZ5ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktSGVhdnkub3RmXCIpO1xufVxuLyoqIExpZ2h0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogMjAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktTGlnaHQub3RmXCIpO1xufVxuLyoqIE1lZGl1bSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LU1lZGl1bS5vdGZcIik7XG59XG4vKiogUmVndWxhciAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LVJlZ3VsYXIub3RmXCIpO1xufVxuLyoqIFNlbWlib2xkICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktU2VtaWJvbGQub3RmXCIpO1xufVxuLyoqIFRoaW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1UaGluLm90ZlwiKTtcbn1cbi8qKiBVbHRyYWxpZ2h0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogMTAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktVWx0cmFsaWdodC5vdGZcIik7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjFBO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDI5MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjFBO1xuICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NEExQjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuaW5wdXQ6aG92ZXIge1xuICBvcGFjaXR5OiAxMDAlO1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udGFpbmVyLWxvbmcge1xuICB3aWR0aDogMTM2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4uY29udGFpbmVyLXNob3J0IHtcbiAgd2lkdGg6IDEwODhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN1YnRpdGxlIHtcbiAgY29sb3I6ICM3RjVBRjA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlbGVjdGVkLW1lbnUge1xuICBmb250LXNpemU6IDQyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jaXJjbGVfMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTAwcHg7XG4gIHJpZ2h0OiAtMjAwcHg7XG59XG5cbi5jaXJjbGVfMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1MHB4O1xufVxuXG4uY2lyY2xlXzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQwMHB4O1xuICBsZWZ0OiAtMjAwcHg7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICM3RjVBRjA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMjBweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzdGNUFGMDtcbiAgY3Vyc29yOiBncmFiO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzkxNzFmMjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcbiAgLmNpcmNsZV8xIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNpcmNsZV8yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNpcmNsZV8zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ubWVudSB7XG4gIHdpZHRoOiAxMDg4cHg7XG4gIGhlaWdodDogNTEwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5tZW51IC5taW5pbXVtLXJvYXMtZm9ybSB7XG4gIHdpZHRoOiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICM5NEExQjI7XG4gIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xufVxuLm1lbnUgLm1pbmltdW0tcm9hcy1mb3JtIC5pbmZvLWlucHV0IHtcbiAgZmxleDogMTtcbn1cbi5tZW51IC5pbnZlc3RtZW50LXBsYW4ge1xuICB3aWR0aDogNzAlO1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ubWVudSAuaW52ZXN0bWVudC1wbGFuIC5pbnZlc3Rvci1pbmZvIHtcbiAgZmxleDogMTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cbi5tZW51IC5pbnZlc3RtZW50LXBsYW4gLmludmVzdG9yLWluZm8gaDIge1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG59XG4ubWVudSAuaW52ZXN0bWVudC1wbGFuIC5pbnZlc3Rvci1pbmZvIC5pbnZlc3Rvci10eXBlcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cbi5tZW51IC5pbnZlc3RtZW50LXBsYW4gLmludmVzdG9yLWluZm8gLmludmVzdG9yLXR5cGVzIC50eXBlIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG4ubWVudSAuaW52ZXN0bWVudC1wbGFuIC5pbnZlc3Rvci1pbmZvIC5pbnZlc3Rvci10eXBlcyAudHlwZTpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICM3RjVBRjA7XG59XG4ubWVudSAuaW52ZXN0bWVudC1wbGFuIC5pbnZlc3Rvci1pbmZvIC5pbnZlc3Rvci10eXBlcyAuc2VsZWN0ZWQge1xuICBjb2xvcjogIzdGNUFGMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4ubWVudSAuaW52ZXN0bWVudC1wbGFuIC5pbnZlc3Rvci1pbmZvIC5pbnZlc3Rvci10eXBlcyAuc2VsZWN0ZWQ6OmFmdGVyIHtcbiAgY29udGVudDogXCLil6FcIjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAtMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1lbnUgLmludmVzdG1lbnQtcGxhbiAuaW52ZXN0b3ItaW5mbyBwIHtcbiAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnN0YXRzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogNDAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5zdGF0cyAuaW5mby1zdGF0IHtcbiAgaGVpZ2h0OiA4NXB4O1xuICB3aWR0aDogNTAlO1xuICBtYXJnaW4tYm90dG9tOiA0MHB4O1xufVxuLnN0YXRzIC5pbmZvLXN0YXQgcCB7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG4uc3RhdHMgLmluZm8tc3RhdCBkaXYge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICBmb250LXNpemU6IDMwcHg7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuLnN0YXRzIC5pbmZvLXN0YXQgZGl2OmhvdmVyIHtcbiAgY29sb3I6ICMzMGM2ODg7XG59IiwiXG5cbi8qIFZhcmlhYmxlcyAtIFNUQVJUICovXG4kcHJpbWFyeS1mb250LWZhbWlseTogJ1NGIERpc3BsYXknO1xuJGJsYWNrOiAjMTYxNjFBO1xuJHdoaXRlOiB3aGl0ZTtcbiRwdXJwbGU6ICM3RjVBRjA7XG4kbGlnaHQtZ3JleTogIzk0QTFCMjtcbiRncmVlbjogIzJDQjY3RDtcbiRvcmFuZ2U6IHRvbWF0bztcbiRwcmltYXJpeS10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiRmb250LXJlZ3VsYXI6IDUwMDtcbiRmb250LWhlYXZ5OiA5MDA7XG4kZm9udC1saWdodDogMzAwO1xuLyogVmFyaWFibGVzIC0gRU5EICovXG5cblxuXG4vKiogQmxhY2sgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1CbGFjay5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBCb2xkICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1Cb2xkLm90ZlwiKTtcbiAgfVxuICBcbiAgLyoqIEhlYXZ5ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1IZWF2eS5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBMaWdodCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktTGlnaHQub3RmXCIpO1xuICB9XG4gIFxuICAvKiogTWVkaXVtICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1NZWRpdW0ub3RmXCIpO1xuICB9XG4gIFxuICAvKiogUmVndWxhciAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktUmVndWxhci5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBTZW1pYm9sZCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktU2VtaWJvbGQub3RmXCIpO1xuICB9XG4gIFxuICAvKiogVGhpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktVGhpbi5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBVbHRyYWxpZ2h0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1VbHRyYWxpZ2h0Lm90ZlwiKTtcbiAgfVxuXG5cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuXG59XG5cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtZmFtaWx5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cblxufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDI5MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjVweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkbGlnaHQtZ3JleTtcblxuICAgIHRyYW5zaXRpb246ICRwcmltYXJpeS10cmFuc2l0aW9uO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxufVxuXG5cbi5jb250YWluZXItbG9uZ3tcbiAgICB3aWR0aDogMTM2NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG5cbn1cblxuLmNvbnRhaW5lci1zaG9ydCB7XG4gICAgd2lkdGg6IDEwODhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN1YnRpdGxlIHtcbiAgICBjb2xvcjogJHB1cnBsZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1oZWF2eTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlbGVjdGVkLW1lbnUge1xuICAgIGZvbnQtc2l6ZTogNDIuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG5cbi5jaXJjbGVfMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTEwMHB4O1xuICAgIHJpZ2h0OiAtMjAwcHg7XG4gXG59XG4uY2lyY2xlXzIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTUwcHg7XG5cbn1cbi5jaXJjbGVfMyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQwMHB4O1xuICAgIGxlZnQ6IC0yMDBweDtcbn1cbjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICRwdXJwbGU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMjBweDtcblxuXG59XG5cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogJHB1cnBsZTsgXG4gIGN1cnNvcjogZ3JhYjtcbiAgdHJhbnNpdGlvbjogJHByaW1hcml5LXRyYW5zaXRpb247XG5cblxufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwdXJwbGUsIDUlKTsgXG5cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MjBweCkge1xuXG4gIC5jaXJjbGVfMSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2lyY2xlXzIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNpcmNsZV8zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExODRweCkge1xuICAgIFxuICAgIC5jb250YWluZXItbG9uZ3tcblxuICAgIH1cbn0iLCJAaW1wb3J0IFwiLi4vLi4vc3R5bGVzLnNjc3NcIjtcblxuLm1lbnUge1xuICAgIHdpZHRoOiAxMDg4cHg7XG4gICAgaGVpZ2h0OiA1MTBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcblxuXG4gICAgLm1pbmltdW0tcm9hcy1mb3JtIHtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgJGxpZ2h0LWdyZXk7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDEwMHB4O1xuXG4gICAgICAgIC5pbmZvLWlucHV0IHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAuaW52ZXN0bWVudC1wbGFuIHtcbiAgICAgICAgd2lkdGg6IDcwJTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDEwMHB4O1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgIC5pbnZlc3Rvci1pbmZvIHtcbiAgICAgICAgICAgIGZsZXg6IDE7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtcmVndWxhcjtcblxuICAgICAgICAgICAgaDIge1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAuaW52ZXN0b3ItdHlwZXMge1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuXG4gICAgICAgICAgICAgICAgLnR5cGUge1xuICAgICAgICAgICAgICAgICAgICB0cmFuc2l0aW9uOiAkcHJpbWFyaXktdHJhbnNpdGlvbjtcblxuICAgICAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAkcHVycGxlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLnNlbGVjdGVkIHtcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6ICRwdXJwbGU7XG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgICAgICAgICAgICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IFwi4pehXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICByaWdodDogMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogLTI1cHg7XG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5cbi5zdGF0cyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWF4LXdpZHRoOiA0MDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgIC5pbmZvLXN0YXQge1xuICAgICAgICBoZWlnaHQ6IDg1cHg7XG4gICAgICAgIHdpZHRoOiA1MCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XG4gICAgICAgIH1cblxuICAgICAgICBkaXYge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIHRyYW5zaXRpb246ICRwcmltYXJpeS10cmFuc2l0aW9uO1xuXG4gICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICBjb2xvcjogbGlnaHRlbigkZ3JlZW4sIDQlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MinimRoasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-minim-roas',
          templateUrl: './minim-roas.component.html',
          styleUrls: ['./minim-roas.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/policy-generator/policy-generator.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/policy-generator/policy-generator.component.ts ***!
    \****************************************************************/

  /*! exports provided: PolicyGeneratorComponent */

  /***/
  function srcAppPolicyGeneratorPolicyGeneratorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PolicyGeneratorComponent", function () {
      return PolicyGeneratorComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var PolicyGeneratorComponent = /*#__PURE__*/function () {
      function PolicyGeneratorComponent() {
        _classCallCheck(this, PolicyGeneratorComponent);

        this.companyName = '';
        this.email = '';
        this.address = '';
        this.city = '';
        this.zipCode = '';
        this.country = '';
        this.state = '';
        this.website = '';
      }

      _createClass(PolicyGeneratorComponent, [{
        key: "copyPolicy",
        value: function copyPolicy(inputElement) {
          inputElement.select();
          document.execCommand('copy');
          inputElement.setSelectionRange(0, 0);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "privacyPolicy",
        get: function get() {
          //#region privacy Policy
          return this.privacy = "D\xC9CLARATION DE CONFIDENTIALIT\xC9\n\n  ----\n  \n  ARTICLE 1 \u2013 RENSEIGNEMENTS PERSONNELS RECUEILLIS\n  \n  Lorsque vous effectuez un achat sur notre boutique, dans le cadre de notre processus d\u2019achat et de vente, nous recueillons les renseignements personnels que vous nous fournissez, tels que votre nom, votre adresse et votre adresse e-mail.\n  \n  Lorsque vous naviguez sur notre boutique, nous recevons \xE9galement automatiquement l\u2019adresse de protocole Internet (adresse IP) de votre ordinateur, qui nous permet d\u2019obtenir plus de d\xE9tails au sujet du navigateur et du syst\xE8me d\u2019exploitation que vous utilisez.\n  \n  Marketing par e-mail (le cas \xE9ch\xE9ant): Avec votre permission, nous pourrions vous envoyer des e-mails au sujet de notre boutique, de nouveaux produits et d\u2019autres mises \xE0 jour.\n  \n  \n  ARTICLE 2 - CONSENTEMENT\n  \n  Comment obtenez-vous mon consentement?\n  \n  Lorsque vous nous fournissez vos renseignements personnels pour conclure une transaction, v\xE9rifier votre carte de cr\xE9dit, passer une commande, planifier une livraison ou retourner un achat, nous pr\xE9sumons que vous consentez \xE0 ce que nous recueillions vos renseignements et \xE0 ce que nous les utilisions \xE0 cette fin uniquement.\n  \n  Si nous vous demandons de nous fournir vos renseignements personnels pour une autre raison, \xE0 des fins de marketing par exemple, nous vous demanderons directement votre consentement explicite, ou nous vous donnerons la possibilit\xE9 de refuser.\n  \n  \n  Comment puis-je retirer mon consentement?\n  \n  Si apr\xE8s nous avoir donn\xE9 votre consentement, vous changez d\u2019avis et ne consentez plus \xE0 ce que nous puissions vous contacter, recueillir vos renseignements ou les divulguer, vous pouvez nous en aviser en nous contactant \xE0 " + this.email + " ou par courrier \xE0: " + this.companyName + ", " + this.city + ", " + this.state + ", " + this.zipCode + ", " + this.country + "\n  \n  \n  ARTICLE 3 \u2013 DIVULGATION\n  \n  Nous pouvons divulguer vos renseignements personnels si la loi nous oblige \xE0 le faire ou si vous violez nos Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation.\n  \n  \n  ARTICLE 4 \u2013 SHOPIFY\n  \n  Notre boutique est h\xE9berg\xE9e sur Shopify Inc. Ils nous fournissent la plate-forme e-commerce en ligne qui nous permet de vous vendre nos services et produits.\n  \n  Vos donn\xE9es sont stock\xE9es dans le syst\xE8me de stockage de donn\xE9es et les bases de donn\xE9es de Shopify, et dans l\u2019application g\xE9n\xE9rale de Shopify. Vos donn\xE9es sont conserv\xE9es sur un serveur s\xE9curis\xE9 prot\xE9g\xE9 par un pare-feu.\n  \n  \n  Paiement:\n  \n  Si vous r\xE9alisez votre achat par le biais d\u2019une passerelle de paiement direct, dans ce cas Shopify stockera vos renseignements de carte de cr\xE9dit. Ces renseignements sont chiffr\xE9s conform\xE9ment \xE0 la norme de s\xE9curit\xE9 des donn\xE9es \xE9tablie par l\u2019industrie des cartes de paiement (norme PCI-DSS). Les renseignements relatifs \xE0 votre transaction d\u2019achat sont conserv\xE9s aussi longtemps que n\xE9cessaire pour finaliser votre commande. Une fois votre commande finalis\xE9e, les renseignements relatifs \xE0 la transaction d\u2019achat sont supprim\xE9s.\n  \n  Toutes les passerelles de paiement direct respectent la norme PCI-DSS, g\xE9r\xE9e par le conseil des normes de s\xE9curit\xE9 PCI, qui r\xE9sulte de l\u2019effort conjoint d\u2019entreprises telles que Visa, MasterCard, American Express et Discover.\n  \n  Les exigences de la norme PCI-DSS permettent d\u2019assurer le traitement s\xE9curis\xE9 des donn\xE9es de cartes de cr\xE9dit par notre boutique et par ses prestataires de services.\n  \n  Pour plus d\u2019informations, veuillez consulter les Conditions d\u2019Utilisation de Shopify ici ou la Politique de Confidentialit\xE9 ici.\n  \n  \n  ARTICLE 5 \u2013 SERVICES FOURNIS PAR DES TIERS\n  \n  \n  De mani\xE8re g\xE9n\xE9rale, les fournisseurs tiers que nous utilisons vont uniquement recueillir, utiliser et divulguer vos renseignements dans la mesure du n\xE9cessaire pour pouvoir r\xE9aliser les services qu\u2019ils nous fournissent.\n  \n  Cependant, certains tiers fournisseurs de services, comme les passerelles de paiement et autres processeurs de transactions de paiement, poss\xE8dent leurs propres politiques de confidentialit\xE9 quant aux renseignements que nous sommes tenus de leur fournir pour vos transactions d\u2019achat.\n  \n  En ce qui concerne ces fournisseurs, nous vous recommandons de lire attentivement leurs politiques de confidentialit\xE9 pour que vous puissiez comprendre la mani\xE8re dont ils traiteront vos renseignements personnels.\n  \n  Il ne faut pas oublier que certains fournisseurs peuvent \xEAtre situ\xE9s ou avoir des installations situ\xE9es dans une juridiction diff\xE9rente de la v\xF4tre ou de la n\xF4tre. Donc si vous d\xE9cidez de poursuivre une transaction qui requiert les services d\u2019un fournisseur tiers, vos renseignements pourraient alors \xEAtre r\xE9gis par les lois de la juridiction dans laquelle ce fournisseur se situe ou celles de la juridiction dans laquelle ses installations sont situ\xE9es.\n  \n  \xC0 titre d\u2019exemple, si vous \xEAtes situ\xE9 au Canada et que votre transaction est trait\xE9e par une passerelle de paiement situ\xE9e aux \xC9tats-Unis, les renseignements vous appartenant qui ont \xE9t\xE9 utilis\xE9s pour conclure la transaction pourraient \xEAtre divulgu\xE9s en vertu de la l\xE9gislation des \xC9tats-Unis, y compris le Patriot Act.\n  \n  Une fois que vous quittez le site de notre boutique ou que vous \xEAtes redirig\xE9 vers le site web ou l\u2019application d\u2019un tiers, vous n\u2019\xEAtes plus r\xE9gi par la pr\xE9sente Politique de Confidentialit\xE9 ni par les Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation de notre site web.\n  \n  \n  Liens\n  \n  Vous pourriez \xEAtre amen\xE9 \xE0 quitter notre site web en cliquant sur certains liens pr\xE9sents sur notre site. Nous n\u2019assumons aucune responsabilit\xE9 quant aux pratiques de confidentialit\xE9 exerc\xE9es par ces autres sites et vous recommandons de lire attentivement leurs politiques de confidentialit\xE9.\n  \n  \n  ARTICLE 6 \u2013 S\xC9CURIT\xC9\n  \n  Pour prot\xE9ger vos donn\xE9es personnelles, nous prenons des pr\xE9cautions raisonnables et suivons les meilleures pratiques de l\u2019industrie pour nous assurer qu\u2019elles ne soient pas perdues, d\xE9tourn\xE9es, consult\xE9es, divulgu\xE9es, modifi\xE9es ou d\xE9truites de mani\xE8re inappropri\xE9e.\n  \n  Si vous nous fournissez vos informations de carte de cr\xE9dit, elles seront chiffr\xE9es par le biais de l\u2019utilisation du protocole de s\xE9curisation SSL et conserv\xE9es avec un chiffrement de type AES-256. Bien qu\u2019aucune m\xE9thode de transmission sur Internet ou de stockage \xE9lectronique ne soit s\xFBre \xE0 100 %, nous suivons toutes les exigences de la norme PCI-DSS et mettons en \u0153uvre des normes suppl\xE9mentaires g\xE9n\xE9ralement reconnues par l\u2019industrie.\n  FICHIERS T\xC9MOINS (COOKIES)\n  \n  Voici une liste de fichiers t\xE9moins que nous utilisons. Nous les avons \xE9num\xE9r\xE9s ici pour que vous ayez la possibilit\xE9 de choisir si vous souhaitez les autoriser ou non.\n  \n  _session_id, identificateur unique de session, permet \xE0 Shopify de stocker les informations relatives \xE0 votre session (r\xE9f\xE9rent, page de renvoi, etc.).\n  \n  _shopify_visit, aucune donn\xE9e retenue, persiste pendant 30 minutes depuis la derni\xE8re visite. Utilis\xE9 par le syst\xE8me interne de suivi des statistiques du fournisseur de notre site web pour enregistrer le nombre de visites.\n  \n  _shopify_uniq, aucune donn\xE9e retenue, expire \xE0 minuit (selon l\u2019emplacement du visiteur) le jour suivant. Calcule le nombre de visites d\u2019une boutique par client unique.\n  \n  cart, identificateur unique, persiste pendant 2 semaines, stocke l\u2019information relative \xE0 votre panier d\u2019achat.\n  \n  _secure_session_id, identificateur unique de session\n  \n  storefront_digest, identificateur unique, ind\xE9fini si la boutique poss\xE8de un mot de passe, il est utilis\xE9 pour savoir si le visiteur actuel a acc\xE8s.\n  \n  \n  ARTICLE 7 \u2013 \xC2GE DE CONSENTEMENT\n  \n  En utilisant ce site, vous d\xE9clarez que vous avez au moins l\u2019\xE2ge de la majorit\xE9 dans votre \xC9tat ou province de r\xE9sidence, et que vous nous avez donn\xE9 votre consentement pour permettre \xE0 toute personne d\u2019\xE2ge mineur \xE0 votre charge d\u2019utiliser ce site web.\n  \n  \n  ARTICLE 8 \u2013 MODIFICATIONS APPORT\xC9ES \xC0 LA PR\xC9SENTE POLITIQUE DE CONFIDENTIALIT\xC9\n  \n  Nous nous r\xE9servons le droit de modifier la pr\xE9sente politique de confidentialit\xE9 \xE0 tout moment, donc veuillez s\u2019il vous plait la consulter fr\xE9quemment. Les changements et les clarifications prendront effet imm\xE9diatement apr\xE8s leur publication sur le site web. Si nous apportons des changements au contenu de cette politique, nous vous aviserons ici qu\u2019elle a \xE9t\xE9 mise \xE0 jour, pour que vous sachiez quels renseignements nous recueillons, la mani\xE8re dont nous les utilisons, et dans quelles circonstances nous les divulguons, s\u2019il y a lieu de le faire.\n  \n  Si notre boutique fait l\u2019objet d\u2019une acquisition par ou d\u2019une fusion avec une autre entreprise, vos renseignements pourraient \xEAtre transf\xE9r\xE9s aux nouveaux propri\xE9taires pour que nous puissions continuer \xE0 vous vendre des produits.\n  \n  \n  QUESTIONS ET COORDONN\xC9ES\n  \n  Si vous souhaitez: acc\xE9der \xE0, corriger, modifier ou supprimer toute information personnelle que nous avons \xE0 votre sujet, d\xE9poser une plainte, ou si vous souhaitez simplement avoir plus d\u2019informations, contactez notre agent responsable des normes de confidentialit\xE9 \xE0 " + this.email + " ou par courrier \xE0 " + this.companyName + "\n  \n  [Re: Agent des Normes de Confidentialit\xE9]\n  \n  [" + this.address + ", " + this.city + ", " + this.state + ", " + this.zipCode + ", " + this.country + "]\n  \n  ---- "; //#endregion
        }
      }, {
        key: "termsAndCondition",
        get: function get() {
          return this.terms = "CONDITIONS G\xC9N\xC9RALES DE VENTE ET D\u2019UTILISATION\n\n----\n\nVUE D\u2019ENSEMBLE\n\nCe site web est exploit\xE9 par " + this.companyName + ". Sur ce site, les termes \"nous\", \"notre\" et \"nos\" font r\xE9f\xE9rence \xE0 " + this.companyName + ". " + this.companyName + " propose ce site web, y compris toutes les informations, tous les outils et tous les services qui y sont disponibles pour vous, l\u2019utilisateur, sous r\xE9serve de votre acceptation de l\u2019ensemble des modalit\xE9s, conditions, politiques et avis \xE9nonc\xE9s ici.\n\nEn visitant ce site et/ou en achetant un de nos produits, vous vous engagez dans notre \"Service\" et acceptez d\u2019\xEAtre li\xE9 par les modalit\xE9s suivantes (\"Conditions G\xE9n\xE9rales de Vente\", \"Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation\", \"Conditions\"), y compris les modalit\xE9s, conditions et politiques additionnelles auxquelles il est fait r\xE9f\xE9rence ici et/ou accessibles par hyperlien. Ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation s\u2019appliquent \xE0 tous les utilisateurs de ce site, incluant mais ne se limitant pas, aux utilisateurs qui naviguent sur le site, qui sont des vendeurs, des clients, des marchands, et/ou des contributeurs de contenu.\n\nVeuillez lire attentivement ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation avant d\u2019acc\xE9der \xE0 ou d\u2019utiliser notre site web. En acc\xE9dant \xE0 ou en utilisant une quelconque partie de ce site, vous acceptez d\u2019\xEAtre li\xE9 par ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation. Si vous n\u2019acceptez pas toutes les modalit\xE9s et toutes les Conditions de cet accord, alors vous ne devez pas acc\xE9der au site web ni utiliser les services qui y sont propos\xE9s. Si ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation sont consid\xE9r\xE9es comme une offre, l\u2019acceptation se limite express\xE9ment \xE0 ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation.\n\nToutes les nouvelles fonctionnalit\xE9s et tous les nouveaux outils qui seront ajout\xE9s ult\xE9rieurement \xE0 cette boutique seront \xE9galement assujettis \xE0 ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation. Vous pouvez consulter la version la plus r\xE9cente des Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation \xE0 tout moment sur cette page. Nous nous r\xE9servons le droit de mettre \xE0 jour, de changer ou de remplacer toute partie de ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation en publiant les mises \xE0 jour et/ou les modifications sur notre site web. Il vous incombe de consulter cette page r\xE9guli\xE8rement pour v\xE9rifier si des modifications ont \xE9t\xE9 apport\xE9es. Votre utilisation continue du site web ou votre acc\xE8s \xE0 celui-ci apr\xE8s la publication de toute modification constitue une acception de votre part de ces modifications.\n\nNotre boutique est h\xE9berg\xE9e sur Shopify Inc. Ils nous fournissent la plate-forme e-commerce qui nous permet de vous vendre nos produits et services.\n\n\nARTICLE 1 \u2013 CONDITIONS D\u2019UTILISATION DE NOTRE BOUTIQUE EN LIGNE\n\nEn acceptant ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation, vous d\xE9clarez que vous avez atteint l\u2019\xE2ge de la majorit\xE9 dans votre pays, \xC9tat ou province de r\xE9sidence, et que vous nous avez donn\xE9 votre consentement pour permettre \xE0 toute personne d\u2019\xE2ge mineur \xE0 votre charge d\u2019utiliser ce site web.\n\nL\u2019utilisation de nos produits \xE0 toute fin ill\xE9gale ou non autoris\xE9e est interdite, et vous ne devez pas non plus, dans le cadre de l\u2019utilisation du Service, violer les lois de votre juridiction (incluant mais ne se limitant pas aux lois relatives aux droits d\u2019auteur).\n\nVous ne devez pas transmettre de vers, de virus ou tout autre code de nature destructive.\n\nToute infraction ou violation des pr\xE9sentes Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation entra\xEEnera la r\xE9siliation imm\xE9diate de vos Services.\n\n\nARTICLE 2 \u2013 CONDITIONS G\xC9N\xC9RALES\n\nNous nous r\xE9servons le droit de refuser \xE0 tout moment l\u2019acc\xE8s aux services \xE0 toute personne, et ce, pour quelque raison que ce soit.\n\nVous comprenez que votre contenu (\xE0 l\u2019exclusion de vos informations de carte de cr\xE9dit) pourrait \xEAtre transf\xE9r\xE9 de mani\xE8re non chiffr\xE9e, et cela sous-entend (a) des transmissions sur divers r\xE9seaux; et (b) des changements pour se conformer et s\u2019adapter aux exigences techniques pour la connexion des r\xE9seaux ou appareils. Les informations de carte de cr\xE9dit sont toujours chiffr\xE9es pendant la transmission sur les r\xE9seaux.\n\nVous acceptez de ne pas reproduire, dupliquer, copier, vendre, revendre ou exploiter une quelconque partie du Service ou utilisation du Service, ou un quelconque acc\xE8s au Service ou contact sur le site web, par le biais duquel le Service est fourni, sans autorisation \xE9crite expresse pr\xE9alable de notre part.\n\nLes titres utilis\xE9s dans cet accord sont inclus pour votre commodit\xE9, et ne vont ni limiter ni affecter ces Conditions.\n\n\nARTICLE 3 \u2013 EXACTITUDE, EXHAUSTIVIT\xC9 ET ACTUALIT\xC9 DES INFORMATIONS\n\nNous ne sommes pas responsables si les informations disponibles sur ce site ne sont pas exactes, compl\xE8tes ou \xE0 jour. Le contenu de ce site est fourni \xE0 titre indicatif uniquement et ne devrait pas constituer votre seule source d\u2019information pour prendre des d\xE9cisions, sans consulter au pr\xE9alable des sources d\u2019information plus exactes, plus compl\xE8tes et actualis\xE9es. Si vous d\xE9cidez de vous fier au contenu pr\xE9sent\xE9 sur ce site, vous le faites \xE0 votre propre risque.\n\nCe site pourrait contenir certaines informations ant\xE9rieures. Ces informations ant\xE9rieures, par nature, ne sont pas \xE0 jour et sont fournies \xE0 titre indicatif seulement. Nous nous r\xE9servons le droit de modifier le contenu de ce site \xE0 tout moment, mais nous n\u2019avons aucune obligation de mettre \xE0 jour les informations sur notre site. Vous acceptez qu\u2019il vous incombe de surveiller les modifications apport\xE9es \xE0 notre site.\n\n\nARTICLE 4 \u2013 MODIFICATIONS APPORT\xC9ES AU SERVICE ET AUX PRIX\n\nLes prix de nos produits peuvent \xEAtre modifi\xE9s sans pr\xE9avis.\n\nNous nous r\xE9servons le droit \xE0 tout moment de modifier ou d\u2019interrompre le Service (ainsi que toute partie ou tout contenu du Service) sans pr\xE9avis et en tout temps.\n\nNous ne serons pas responsables envers vous ou toute autre tierce partie de toute modification de prix, suspension ou interruption du Service.\n\n\nARTICLE 5 \u2013 PRODUITS OU SERVICES (le cas \xE9ch\xE9ant)\n\nCertains produits ou services peuvent \xEAtre exclusivement disponibles en ligne sur notre site web. Ces produits ou services peuvent \xEAtre disponibles en quantit\xE9s limit\xE9es et peuvent uniquement faire l\u2019objet de retours ou d\u2019\xE9changes conform\xE9ment \xE0 notre Politique de Retour.\n\nNous avons fait de notre mieux pour afficher aussi clairement que possible les couleurs et images de nos produits qui apparaissent sur notre boutique. Nous ne pouvons pas garantir que l\u2019affichage des couleurs par l\u2019\xE9cran de votre ordinateur sera pr\xE9cis.\n\nNous nous r\xE9servons le droit, sans toutefois \xEAtre oblig\xE9s de le faire, de limiter les ventes de nos produits ou services \xE0 toute personne, et dans toute r\xE9gion g\xE9ographique ou juridiction. Nous pourrions exercer ce droit au cas par cas. Nous nous r\xE9servons le droit de limiter les quantit\xE9s de tout produit ou service que nous offrons. Toutes les descriptions de produits et tous les prix des produits peuvent \xEAtre modifi\xE9s en tout temps sans avis pr\xE9alable, \xE0 notre seule discr\xE9tion. Nous nous r\xE9servons le droit d\u2019arr\xEAter d\u2019offrir un produit \xE0 tout moment. Toute offre de service ou de produit pr\xE9sent\xE9e sur ce site est nulle l\xE0 o\xF9 la loi l\u2019interdit.\n\nNous ne garantissons pas que la qualit\xE9 de tous les produits, services, informations, ou toute autre marchandise que vous avez obtenue ou achet\xE9e r\xE9pondra \xE0 vos attentes, ni que toute erreur dans le Service sera corrig\xE9e.\n\n\nARTICLE 6 \u2013 EXACTITUDE DE LA FACTURATION ET DES INFORMATIONS DE COMPTE\n\nNous nous r\xE9servons le droit de refuser toute commande que vous passez aupr\xE8s de nous. Nous pourrions, \xE0 notre seule discr\xE9tion, r\xE9duire ou annuler les quantit\xE9s achet\xE9es par personne, par foyer ou par commande. Ces restrictions pourraient inclure des commandes pass\xE9es par ou depuis le m\xEAme compte client, la m\xEAme carte de cr\xE9dit, et/ou des commandes qui utilisent la m\xEAme adresse de facturation et/ou d\u2019exp\xE9dition. Dans le cas o\xF9 nous modifierions une commande ou si nous venions \xE0 l\u2019annuler, nous pourrions tenter de vous avertir en vous contactant \xE0 l\u2019e-mail et/ou \xE0 l\u2019adresse de facturation/au num\xE9ro de t\xE9l\xE9phone fourni au moment o\xF9 la commande a \xE9t\xE9 pass\xE9e. Nous nous r\xE9servons le droit de limiter ou d\u2019interdire les commandes qui, \xE0 notre seul jugement, pourraient sembler provenir de marchands, de revendeurs ou de distributeurs.\n\nVous acceptez de fournir des informations de commande et de compte \xE0 jour, compl\xE8tes et exactes pour toutes les commandes pass\xE9es sur notre boutique. Vous vous engagez \xE0 mettre \xE0 jour rapidement votre compte et vos autres informations, y compris votre adresse e-mail, vos num\xE9ros de cartes de cr\xE9dit et dates d\u2019expiration, pour que nous poussions compl\xE9ter vos transactions et vous contacter si n\xE9cessaire.\n\nPour plus de d\xE9tails, veuillez consulter notre Politique de Retour.\n\n\nARTICLE 7 \u2013 OUTILS FACULTATIFS\n\nNous pourrions vous fournir l\u2019acc\xE8s \xE0 des outils de tierces parties sur lesquels nous n\u2019exer\xE7ons ni suivi, ni contr\xF4le, ni influence.\n\nVous reconnaissez et acceptez le fait que nous fournissons l\u2019acc\xE8s \xE0 de tels outils \"tels quels\" et \"selon la disponibilit\xE9\", sans aucune garantie, repr\xE9sentation ou condition d\u2019aucune sorte et sans aucune approbation. Nous n\u2019aurons aucune responsabilit\xE9 l\xE9gale r\xE9sultant de ou li\xE9e \xE0 l\u2019utilisation de ces outils facultatifs de tiers.\n\nSi vous utilisez les outils facultatifs offerts sur le site, vous le faites \xE0 votre propre risque et \xE0 votre propre discr\xE9tion, et vous devriez consulter les conditions auxquelles ces outils sont offerts par le ou les fournisseurs tiers concern\xE9(s).\n\nNous pourrions aussi, \xE0 l\u2019avenir, offrir de nouveaux services et/ou de nouvelles fonctionnalit\xE9s sur notre site (incluant de nouveaux outils et de nouvelles ressources). Ces nouvelles fonctionnalit\xE9s et ces nouveaux services seront \xE9galement assujettis \xE0 ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation.\n\n\nARTICLE 8 \u2013 LIENS DE TIERS\n\nCertains contenus, produits et services disponibles par le biais de notre Service pourraient inclure des \xE9l\xE9ments provenant de tierces parties.\n\nLes liens provenant de tierces parties sur ce site pourraient vous rediriger vers des sites web de tiers qui ne sont pas affili\xE9s \xE0 nous. Nous ne sommes pas tenus d\u2019examiner ou d\u2019\xE9valuer le contenu ou l\u2019exactitude de ces sites, et nous ne garantissons pas et n\u2019assumons aucune responsabilit\xE9 quant \xE0 tout contenu, site web, produit, service ou autre \xE9l\xE9ment accessible sur ou depuis ces sites tiers.\n\nNous ne sommes pas responsables des pr\xE9judices ou dommages li\xE9s \xE0 l\u2019achat ou \xE0 l\u2019utilisation de biens, de services, de ressources, de contenu, ou de toute autre transaction effectu\xE9e en rapport avec ces sites web de tiers. Veuillez lire attentivement les politiques et pratiques des tierces parties et assurez-vous de bien les comprendre avant de vous engager dans toute transaction. Les plaintes, r\xE9clamations, pr\xE9occupations, ou questions concernant les produits de ces tiers doivent \xEAtre soumises \xE0 ces m\xEAmes tiers.\n\n\nARTICLE 9 \u2013 COMMENTAIRES, SUGGESTIONS ET AUTRES PROPOSITIONS D\u2019UTILISATEURS\n\nSi, \xE0 notre demande, vous soumettez des contenus sp\xE9cifiques (par exemple, pour participer \xE0 des concours), ou si sans demande de notre part, vous envoyez des id\xE9es cr\xE9atives, des suggestions, des propositions, des plans ou d\u2019autres \xE9l\xE9ments, que ce soit en ligne, par e-mail, par courrier, ou autrement (collectivement, \"commentaires\"), vous nous accordez le droit, en tout temps, et sans restriction, d\u2019\xE9diter, de copier, de publier, de distribuer, de traduire et d\u2019utiliser autrement et dans tout m\xE9dia tout commentaire que vous nous envoyez. Nous ne sommes pas et ne devrons pas \xEAtre tenus (1) de maintenir la confidentialit\xE9 des commentaires; (2) de payer une compensation \xE0 quiconque pour tout commentaire fourni; (3) de r\xE9pondre aux commentaires.\n\nNous pourrions, mais n\u2019avons aucune obligation de le faire, surveiller, modifier ou supprimer le contenu que nous estimons, \xE0 notre seule discr\xE9tion, \xEAtre ill\xE9gal, offensant, mena\xE7ant, injurieux, diffamatoire, pornographique, obsc\xE8ne ou autrement r\xE9pr\xE9hensible, ou qui enfreint toute propri\xE9t\xE9 intellectuelle ou ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation.\n\nVous vous engagez \xE0 \xE9crire des commentaires qui ne violent pas les droits de tierces parties, y compris les droits d\u2019auteur, les marques d\xE9pos\xE9es, la confidentialit\xE9, la personnalit\xE9, ou d\u2019autres droits personnels ou de propri\xE9t\xE9. Vous convenez \xE9galement que vos commentaires ne contiendront pas de contenu ill\xE9gal, diffamatoire, offensif ou obsc\xE8ne, et qu\u2019ils ne contiendront non plus pas de virus informatique ou d\u2019autres logiciels malveillants qui pourraient affecter de quelque mani\xE8re que ce soit le fonctionnement du Service ou tout autre site web associ\xE9. Vous ne pouvez pas utiliser de fausse adresse e-mail, pr\xE9tendre \xEAtre quelqu\u2019un que vous n\u2019\xEAtes pas, ou essayer de nous induire nous et/ou les tierces parties en erreur quant \xE0 l\u2019origine de vos commentaires. Vous \xEAtes enti\xE8rement responsable de tous les commentaires que vous publiez ainsi que de leur exactitude. Nous n\u2019assumons aucune responsabilit\xE9 et d\xE9clinons tout engagement quant \xE0 tout commentaire que vous publiez ou que toute autre tierce partie publie.\n\n\nARTICLE 10 \u2013 RENSEIGNEMENTS PERSONNELS\n\nLa soumission de vos renseignements personnels sur notre boutique est r\xE9gie par notre Politique de Confidentialit\xE9. Cliquez ici pour consulter notre Politique de Confidentialit\xE9.\n\n\nARTICLE 11 \u2013 ERREURS, INEXACTITUDES ET OMISSIONS\n\nIl se pourrait qu\u2019il y ait parfois des informations sur notre site ou dans le Service qui pourraient contenir des erreurs typographiques, des inexactitudes ou des omissions qui pourraient \xEAtre relatives aux descriptions de produits, aux prix, aux promotions, aux offres, aux frais d\u2019exp\xE9dition des produits, aux d\xE9lais de livraison et \xE0 la disponibilit\xE9. Nous nous r\xE9servons le droit de corriger toute erreur, inexactitude, omission, et de changer ou de mettre \xE0 jour des informations ou d\u2019annuler des commandes, si une quelconque information dans le Service ou sur tout autre site web associ\xE9 est inexacte, et ce, en tout temps et sans pr\xE9avis (y compris apr\xE8s que vous ayez pass\xE9 votre commande).\n\nNous ne sommes pas tenus de mettre \xE0 jour, de modifier ou de clarifier les informations dans le Service ou sur tout autre site web associ\xE9, incluant mais ne se limitant pas aux informations sur les prix, sauf si requis par la loi. Aucune date d\xE9finie de mise \xE0 jour ou d\u2019actualisation dans le Service ou sur tout autre site web associ\xE9 ne devrait \xEAtre prise en compte pour conclure que les informations dans le Service ou sur tout autre site web associ\xE9 ont \xE9t\xE9 modifi\xE9es ou mises \xE0 jour.\n\n\n\nARTICLE 12 \u2013 UTILISATIONS INTERDITES\n\nEn plus des interdictions \xE9nonc\xE9es dans les Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation, il vous est interdit d\u2019utiliser le site ou son contenu: (a) \xE0 des fins ill\xE9gales; (b) pour inciter des tiers \xE0 r\xE9aliser des actes ill\xE9gaux ou \xE0 y prendre part; (c) pour enfreindre toute ordonnance r\xE9gionale ou toute loi, r\xE8gle ou r\xE9gulation internationale, f\xE9d\xE9rale, provinciale ou \xE9tatique; (d) pour porter atteinte \xE0 ou violer nos droits de propri\xE9t\xE9 intellectuelle ou ceux de tierces parties; (e) pour harceler, maltraiter, insulter, blesser, diffamer, calomnier, d\xE9nigrer, intimider ou discriminer quiconque en fonction du sexe, de l\u2019orientation sexuelle, de la religion, de l\u2019origine ethnique, de la race, de l\u2019\xE2ge, de l\u2019origine nationale, ou d\u2019un handicap; (f) pour soumettre des renseignements faux ou trompeurs; (g) pour t\xE9l\xE9verser ou transmettre des virus ou tout autre type de code malveillant qui sera ou pourrait \xEAtre utilis\xE9 de mani\xE8re \xE0 compromettre la fonctionnalit\xE9 ou le fonctionnement du Service ou de tout autre site web associ\xE9, ind\xE9pendant, ou d\u2019Internet; (h) pour recueillir ou suivre les renseignements personnels d\u2019autrui; (i) pour polluposter, hame\xE7onner, d\xE9tourner un domaine, extorquer des informations, parcourir, explorer ou balayer le web (ou toute autre ressource); (j) \xE0 des fins obsc\xE8nes ou immorales; ou (k) pour porter atteinte ou contourner les mesures de s\xE9curit\xE9 de notre Service, de tout autre site web, ou d\u2019Internet. Nous nous r\xE9servons le droit de r\xE9silier votre utilisation du Service ou de tout site web connexe pour avoir enfreint les utilisations interdites.\n\n\nARTICLE 13 \u2013 EXCLUSION DE GARANTIES ET LIMITATION DE RESPONSABILIT\xC9\n\nNous ne garantissons ni ne pr\xE9tendons en aucun cas que votre utilisation de notre Service sera ininterrompue, rapide, s\xE9curis\xE9e ou sans erreur.\n\nNous ne garantissons pas que les r\xE9sultats qui pourraient \xEAtre obtenus par le biais de l\u2019utilisation du Service seront exacts ou fiables.\n\nVous acceptez que de temps \xE0 autre, nous puissions supprimer le Service pour des p\xE9riodes de temps ind\xE9finies ou annuler le Service \xE0 tout moment, sans vous avertir au pr\xE9alable.\n\nVous convenez express\xE9ment que votre utilisation du Service, ou votre incapacit\xE9 \xE0 utiliser celui-ci, est \xE0 votre seul risque. Le Service ainsi que tous les produits et services qui vous sont fournis par le biais du Service sont (sauf mention expresse du contraire de notre part) fournis \"tels quels\" et \"selon la disponibilit\xE9\" pour votre utilisation, et ce sans repr\xE9sentation, sans garanties et sans conditions d'aucune sorte, expresses ou implicites, y compris toutes les garanties implicites de commercialisation ou de qualit\xE9 marchande, d\u2019adaptation \xE0 un usage particulier, de durabilit\xE9, de titre et d\u2019absence de contrefa\xE7on.\n\n" + this.companyName + ", nos directeurs, responsables, employ\xE9s, soci\xE9t\xE9s affili\xE9es, agents, contractants, stagiaires, fournisseurs, prestataires de services et conc\xE9dants ne peuvent en aucun cas \xEAtre tenus responsables de toute blessure, perte, r\xE9clamation, ou de dommages directs, indirects, accessoires, punitifs, sp\xE9ciaux, ou dommages cons\xE9cutifs de quelque nature qu\u2019ils soient, incluant mais ne se limitant pas \xE0 la perte de profits, de revenus, d\u2019\xE9conomies, de donn\xE9es, aux co\xFBts de remplacement ou tous dommages similaires, qu\u2019ils soient contractuels, d\xE9lictuels (m\xEAme en cas de n\xE9gligence), de responsabilit\xE9 stricte ou autre, r\xE9sultant de votre utilisation de tout service ou produit provenant de ce Service, ou quant \xE0 toute autre r\xE9clamation li\xE9e de quelque mani\xE8re que ce soit \xE0 votre utilisation du Service ou de tout produit, incluant mais ne se limitant \xE0 toute erreur ou omission dans tout contenu, ou \xE0 toute perte ou tout dommage de toute sorte d\xE9coulant de l\u2019utilisation du Service ou de tout contenu (ou produit) publi\xE9, transmis, ou autrement rendu disponible par le biais du Service, m\xEAme si vous avez \xE9t\xE9 avertis de la possibilit\xE9 qu\u2019ils surviennent. Parce que certains \xC9tats ou certaines juridictions ne permettent pas d\u2019exclure ou de limiter la responsabilit\xE9 quant aux dommages cons\xE9cutifs ou accessoires, notre responsabilit\xE9 sera limit\xE9e dans la mesure maximale permise par la loi.\n\n\n\nARTICLE 14 \u2013 INDEMNISATION\n\nVous acceptez d\u2019indemniser, de d\xE9fendre et de prot\xE9ger " + this.companyName + ", notre soci\xE9t\xE9-m\xE8re, nos filiales, soci\xE9t\xE9s affili\xE9es, partenaires, responsables, directeurs, agents, contractants, conc\xE9dants, prestataires de services, sous-traitants, fournisseurs, stagiaires et employ\xE9s, quant \xE0 toute r\xE9clamation ou demande, incluant les honoraires raisonnables d\u2019avocat, faite par toute tierce partie \xE0 cause de ou d\xE9coulant de votre violation de ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation ou des documents auxquels ils font r\xE9f\xE9rence, ou de votre violation de toute loi ou des droits d\u2019un tiers.\n\n\nARTICLE 15 \u2013 DISSOCIABILIT\xC9\n\nDans le cas o\xF9 une disposition des pr\xE9sentes Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation serait jug\xE9e comme \xE9tant ill\xE9gale, nulle ou inapplicable, cette disposition pourra n\xE9anmoins \xEAtre appliqu\xE9e dans la pleine mesure permise par la loi, et la partie non applicable devra \xEAtre consid\xE9r\xE9e comme \xE9tant dissoci\xE9e de ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation, cette dissociation ne devra pas affecter la validit\xE9 et l\u2019applicabilit\xE9 de toutes les autres dispositions restantes.\n\n\nARTICLE 16 \u2013 R\xC9SILIATION\n\nLes obligations et responsabilit\xE9s engag\xE9es par les parties avant la date de r\xE9siliation resteront en vigueur apr\xE8s la r\xE9siliation de cet accord et ce \xE0 toutes les fins.\n\nCes Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation sont effectives \xE0 moins et jusqu\u2019\xE0 ce qu\u2019elles soient r\xE9sili\xE9es par ou bien vous ou non. Vous pouvez r\xE9silier ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation \xE0 tout moment en nous avisant que vous ne souhaitez plus utiliser nos Services, ou lorsque vous cessez d\u2019utiliser notre site.\n\nSi nous jugeons, \xE0 notre seule discr\xE9tion, que vous \xE9chouez, ou si nous soup\xE7onnons que vous avez \xE9t\xE9 incapable de vous conformer aux modalit\xE9s de ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation, nous pourrions aussi r\xE9silier cet accord \xE0 tout moment sans vous pr\xE9venir \xE0 l\u2019avance et vous resterez responsable de toutes les sommes redevables jusqu\u2019\xE0 la date de r\xE9siliation (celle-ci \xE9tant incluse), et/ou nous pourrions vous refuser l\u2019acc\xE8s \xE0 nos Services (ou \xE0 toute partie de ceux-ci).\n\n\nARTICLE 17 \u2013 INT\xC9GRALIT\xC9 DE L\u2019ACCORD\n\nTout manquement de notre part \xE0 l\u2019exercice ou \xE0 l\u2019application de tout droit ou de toute disposition des pr\xE9sentes Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation ne devrait pas constituer une renonciation \xE0 ce droit ou \xE0 cette disposition.\n\nCes Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation ou toute autre politique ou r\xE8gle d\u2019exploitation que nous publions sur ce site ou relativement au Service constituent l\u2019int\xE9gralit\xE9 de l\u2019entente et de l\u2019accord entre vous et nous et r\xE9gissent votre utilisation du Service, et remplacent toutes les communications, propositions et tous les accords, ant\xE9rieurs et contemporains, oraux ou \xE9crits, entre vous et nous (incluant, mais ne se limitant pas \xE0 toute version ant\xE9rieure des Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation).\n\nToute ambigu\xEFt\xE9 quant \xE0 l\u2019interpr\xE9tation de ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation ne doit pas \xEAtre interpr\xE9t\xE9e en d\xE9faveur de la partie r\xE9dactrice.\n\n\nARTICLE 18 \u2013 LOI APPLICABLE\n\nCes Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation, ainsi que tout autre accord s\xE9par\xE9 par le biais duquel nous vous fournissons des Services seront r\xE9gis et interpr\xE9t\xE9s en vertu des lois en vigueur \xE0 " + this.address + ", " + this.city + ", " + this.state + ", " + this.zipCode + ", " + this.country + ".\n\n\nARTICLE 19 \u2013 MODIFICATIONS APPORT\xC9ES AUX CONDITIONS G\xC9N\xC9RALES DE VENTE ET D\u2019UTILISATION\n\nVous pouvez consulter la version la plus r\xE9cente des Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation \xE0 tout moment sur cette page.\n\nNous nous r\xE9servons le droit, \xE0 notre seule discr\xE9tion, de mettre \xE0 jour, de modifier ou de remplacer toute partie de ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation en publiant les mises \xE0 jour et les changements sur notre site. Il vous incombe de visiter notre site r\xE9guli\xE8rement pour v\xE9rifier si des changements ont \xE9t\xE9 apport\xE9s. Votre utilisation continue de ou votre acc\xE8s \xE0 notre site apr\xE8s la publication de toute modification apport\xE9e \xE0 ces Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation constitue une acceptation de ces modifications.\n\n\nARTICLE 20 \u2013 COORDONN\xC9ES\n\nLes questions concernant les Conditions G\xE9n\xE9rales de Vente et d\u2019Utilisation devraient nous \xEAtre envoy\xE9es \xE0 " + this.email + ".";
        }
      }, {
        key: "return",
        get: function get() {
          return this.returnPolicy = "RETOURS\n\n  ----\n  \n  Notre politique dure 30 jours. Si 30 jours se sont \xE9coul\xE9s depuis votre achat, nous ne pouvons malheureusement pas vous offrir un remboursement ou un \xE9change.\n  \n  Pour pouvoir b\xE9n\xE9ficier d\u2019un retour, votre article doit \xEAtre inutilis\xE9 et dans le m\xEAme \xE9tat o\xF9 vous l\u2019avez re\xE7u. Il doit \xEAtre \xE9galement dans l\u2019emballage d\u2019origine.\n  \n  Plusieurs types de produits ne peuvent pas \xEAtre retourn\xE9s. Les marchandises p\xE9rissables telles que la nourriture, les fleurs ou les magazines ne peuvent pas \xEAtre retourn\xE9es. Nous n\u2019acceptons pas non plus de produits \xE0 usage intime ou sanitaire, de produits dangereux ou de gaz ou de liquides inflammables.\n  \n  Autres articles qui ne peuvent pas \xEAtre retourn\xE9s:\n  * Cartes cadeaux\n  * Logiciels t\xE9l\xE9chargeables\n  * Certains produits de sant\xE9 et de soins personnels\n  \n  Pour effectuer un retour, vous devez nous pr\xE9senter un re\xE7u ou une preuve d\u2019achat.\n  \n  Veuillez s\u2019il vous plait ne pas renvoyer votre achat chez le fabricant.\n  \n  Il y a certaines situations o\xF9 seul un remboursement partiel est accord\xE9: (le cas \xE9ch\xE9ant)\n  * Livres avec des signes \xE9vidents d\u2019utilisation.\n  * CD, DVD, cassette VHS, logiciel, jeu vid\xE9o, cassette, ou disque vinyle qui a \xE9t\xE9 ouvert.\n  * Tout article qui n\u2019est pas dans son \xE9tat d\u2019origine, qui est endommag\xE9 ou qui pr\xE9sente certaines pi\xE8ces manquantes pour des raisons qui ne sont pas dues \xE0 une erreur de notre part.\n  * Tout article qui est retourn\xE9 plus de 30 jours apr\xE8s la livraison.\n  \n  Remboursements (le cas \xE9ch\xE9ant)\n  Une fois que nous aurons re\xE7u et inspect\xE9 l\u2019article retourn\xE9, nous vous enverrons un e-mail pour vous confirmer que nous l\u2019avons bien re\xE7u. Nous vous informerons \xE9galement de notre d\xE9cision quant \xE0 l\u2019approbation ou au rejet de votre demande de remboursement.\n  Si votre demande est approuv\xE9e, alors votre remboursement sera trait\xE9, et un cr\xE9dit sera automatiquement appliqu\xE9 \xE0 votre carte de cr\xE9dit ou \xE0 votre m\xE9thode originale de paiement, dans un d\xE9lai d\u2019un certain nombre de jours.\n  \n  Remboursements en retard ou manquants (le cas \xE9ch\xE9ant)\n  Si vous n\u2019avez pas encore re\xE7u votre remboursement, veuillez d\u2019abord consulter votre compte bancaire \xE0 nouveau.\n  Ensuite, contactez l\u2019entit\xE9 \xE9mettrice de votre carte de cr\xE9dit, car il pourrait y avoir un d\xE9lai avant que votre remboursement ne soit officiellement affich\xE9.\n  Ensuite, contactez votre banque. Il y a souvent un d\xE9lai de traitement n\xE9cessaire avant qu\u2019un remboursement ne soit affich\xE9.\n  Si apr\xE8s avoir effectu\xE9 toutes ces \xE9tapes, vous n\u2019avez toujours pas re\xE7u votre remboursement, veuillez s\u2019il vous plait nous contacter \xE0 " + this.email + ".\n  \n  Articles sold\xE9s (le cas \xE9ch\xE9ant)\n  Seuls les articles \xE0 prix courant peuvent \xEAtre rembours\xE9s. Malheureusement, les articles sold\xE9s ne sont pas remboursables.\n  \n  \xC9changes (le cas \xE9ch\xE9ant)\n  Nous rempla\xE7ons un article seulement s\u2019il est d\xE9fectueux ou endommag\xE9. Si dans ce cas vous souhaitez l\u2019\xE9changer contre le m\xEAme article, envoyez-nous un e-mail \xE0 " + this.email + " et envoyez-nous votre article \xE0: " + this.address + ", " + this.city + ", " + this.state + ", " + this.zipCode + ", " + this.country + ".\n  \n  Cadeaux\n  Si l\u2019article retourn\xE9 \xE9tait identifi\xE9 comme un cadeau lors de l\u2019achat et s\u2019il vous a \xE9t\xE9 envoy\xE9 directement, vous recevrez un cr\xE9dit-cadeau d\u2019une valeur \xE9gale \xE0 celle de votre retour. Une fois que nous aurons re\xE7u l\u2019article retourn\xE9, un ch\xE8que-cadeau vous sera envoy\xE9 par courrier.\n  \n  Si l\u2019article n\u2019a pas \xE9t\xE9 identifi\xE9 comme un cadeau lors de l\u2019achat, ou si le donateur du cadeau a pr\xE9f\xE9r\xE9 recevoir d\u2019abord l\u2019article pour vous l\u2019offrir plus tard, nous enverrons un remboursement au donateur du cadeau et il saura que vous avez retourn\xE9 l\u2019article.\n  \n  Exp\xE9dition\n  Pour retourner un produit, vous devez l\u2019envoyer par la poste \xE0: " + this.address + ", " + this.city + ", " + this.state + ", " + this.zipCode + ", " + this.country + ".\n  \n  Il vous incombera de payer vos propres frais d\u2019exp\xE9dition pour retourner votre article. Les co\xFBts d\u2019exp\xE9dition ne sont pas remboursables. Si vous recevez un remboursement, les frais de retour seront d\xE9duits de celui-ci.\n  \n  En fonction de l\u2019endroit o\xF9 vous vivez, le d\xE9lai n\xE9cessaire pour recevoir votre produit \xE9chang\xE9 peut varier.\n  \n  Si vous exp\xE9diez un article d\u2019une valeur sup\xE9rieure \xE0 $75, vous devriez envisager d\u2019utiliser un service de livraison qui vous permet de suivre l\u2019envoi ou de souscrire \xE0 une assurance de livraison. Nous ne garantissons pas que nous recevrons l\u2019article que vous nous retournez.";
        }
      }]);

      return PolicyGeneratorComponent;
    }();

    PolicyGeneratorComponent.ɵfac = function PolicyGeneratorComponent_Factory(t) {
      return new (t || PolicyGeneratorComponent)();
    };

    PolicyGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PolicyGeneratorComponent,
      selectors: [["app-policy-generator"]],
      decls: 42,
      vars: 11,
      consts: [[1, "subtitle"], [1, "selected-menu"], ["src", "../../assets/Circle_1.png", 1, "circle_1"], ["src", "../../assets/Circle_2.png", 1, "circle_2"], ["src", "../../assets/Circle_3.png", 1, "circle_3"], [1, "policy-wrapper"], [1, "personnal-info"], ["type", "text", "placeholder", "Company name", 3, "ngModel", "ngModelChange"], ["type", "email", "placeholder", "Email Address", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Address", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "City", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Zip Code", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Country", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "State", 3, "ngModel", "ngModelChange"], ["type", "url", "placeholder", "Website", 3, "ngModel", "ngModelChange"], [1, "text-gen-wrapper"], [1, "text-area"], ["for", "text-to-copy"], ["readonly", "", 1, "text-to-copy"], ["privacy", ""], ["type", "submit", 3, "click"], ["termsAndConditions", ""], [3, "click"], ["returnPolicy", ""]],
      template: function PolicyGeneratorComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "get your sh*t together");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Policy Generator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyGeneratorComponent_Template_input_ngModelChange_9_listener($event) {
            return ctx.companyName = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyGeneratorComponent_Template_input_ngModelChange_10_listener($event) {
            return ctx.email = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyGeneratorComponent_Template_input_ngModelChange_11_listener($event) {
            return ctx.address = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "input", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyGeneratorComponent_Template_input_ngModelChange_12_listener($event) {
            return ctx.city = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyGeneratorComponent_Template_input_ngModelChange_13_listener($event) {
            return ctx.zipCode = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "input", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyGeneratorComponent_Template_input_ngModelChange_14_listener($event) {
            return ctx.country = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyGeneratorComponent_Template_input_ngModelChange_15_listener($event) {
            return ctx.state = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "input", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PolicyGeneratorComponent_Template_input_ngModelChange_16_listener($event) {
            return ctx.website = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Privacy Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "textarea", 18, 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolicyGeneratorComponent_Template_button_click_24_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.copyPolicy(_r0);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Terms and conditions generator");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "textarea", 18, 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolicyGeneratorComponent_Template_button_click_32_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](30);

            return ctx.copyPolicy(_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "p", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Return Policy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "textarea", 18, 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PolicyGeneratorComponent_Template_button_click_40_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](38);

            return ctx.copyPolicy(_r2);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Copy");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.companyName);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.email);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.address);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.city);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.zipCode);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.country);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.state);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.website);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.privacyPolicy);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.termsAndCondition);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx["return"]);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]],
      styles: ["@font-face {\n  font-family: \"SF Display\";\n  font-weight: 900;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Black.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 700;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Bold.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 800;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Heavy.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 200;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Light.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 500;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Medium.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 400;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Regular.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 600;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Semibold.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 300;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Thin.otf\");\n}\n\n@font-face {\n  font-family: \"SF Display\";\n  font-weight: 100;\n  src: url(\"https://sf.abarba.me/SF-UI-Display-Ultralight.otf\");\n}\n*[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  border-style: none;\n}\nbody[_ngcontent-%COMP%] {\n  background-color: #16161A;\n  color: white;\n  font-family: \"SF Display\";\n  font-size: 20px;\n  overflow-x: hidden;\n}\ninput[_ngcontent-%COMP%] {\n  width: 290px;\n  font-size: 20px;\n  margin-bottom: 3em;\n  padding-bottom: 10px;\n  font-weight: 300;\n  color: white;\n  opacity: 50%;\n  background-color: #16161A;\n  border-bottom: solid;\n  border-bottom-width: 0.5px;\n  border-bottom-color: #94A1B2;\n  transition: all 0.3s ease-out;\n}\ninput[_ngcontent-%COMP%]:hover {\n  opacity: 100%;\n}\ninput[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n.container-long[_ngcontent-%COMP%] {\n  width: 1365px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n  margin-top: 35px;\n}\n.container-short[_ngcontent-%COMP%] {\n  width: 1088px;\n  display: flex;\n  justify-content: space-between;\n  margin: 0 auto;\n}\n.subtitle[_ngcontent-%COMP%] {\n  color: #7F5AF0;\n  text-transform: uppercase;\n  letter-spacing: 3px;\n  font-size: 12px;\n  font-weight: 900;\n  margin-bottom: 10px;\n}\n.selected-menu[_ngcontent-%COMP%] {\n  font-size: 42.5px;\n  font-weight: 500;\n  margin-bottom: 100px;\n}\n.circle_1[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -100px;\n  right: -200px;\n}\n.circle_2[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 150px;\n}\n.circle_3[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: -400px;\n  left: -200px;\n}\n[_ngcontent-%COMP%]::-moz-selection {\n  color: #7F5AF0;\n}\n[_ngcontent-%COMP%]::selection {\n  color: #7F5AF0;\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 20px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #7F5AF0;\n  cursor: -webkit-grab;\n  cursor: grab;\n  -webkit-transition: all 0.3s ease-out;\n  transition: all 0.3s ease-out;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #9171f2;\n}\n@media only screen and (max-width: 1420px) {\n  .circle_1[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .circle_2[_ngcontent-%COMP%] {\n    display: none;\n  }\n\n  .circle_3[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n.policy-wrapper[_ngcontent-%COMP%] {\n  width: 1088px;\n  height: 1130px;\n  display: flex;\n  flex-direction: column;\n}\n.policy-wrapper[_ngcontent-%COMP%]   .personnal-info[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 40%;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n}\n.policy-wrapper[_ngcontent-%COMP%]   .text-gen-wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60%;\n  display: flex;\n  flex-wrap: wrap;\n}\n.policy-wrapper[_ngcontent-%COMP%]   .text-gen-wrapper[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%] {\n  min-width: 45%;\n  min-height: 600px;\n  margin-right: 30px;\n  margin-bottom: 80px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.policy-wrapper[_ngcontent-%COMP%]   .text-gen-wrapper[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-weight: 300;\n  margin-bottom: 25px;\n}\n.policy-wrapper[_ngcontent-%COMP%]   .text-gen-wrapper[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   .text-to-copy[_ngcontent-%COMP%] {\n  resize: none;\n  height: 100%;\n  margin-bottom: 20px;\n  padding: 30px;\n  background-color: #34343c;\n  color: white;\n  font-family: \"SF Display\";\n  font-size: 16px;\n  border: 1px solid #94A1B2;\n  outline-color: #7F5AF0;\n}\n.policy-wrapper[_ngcontent-%COMP%]   .text-gen-wrapper[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  width: 80px;\n  height: 65px;\n  background-color: #2CB67D;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.3s ease-out;\n}\n.policy-wrapper[_ngcontent-%COMP%]   .text-gen-wrapper[_ngcontent-%COMP%]   .text-area[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]:hover {\n  background-color: #7F5AF0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9tYXgvRG9jdW1lbnRzL0FuZ3VsYXIvc2hvcGlmeVRvb2xraXQvc3JjL3N0eWxlcy5zY3NzIiwic3JjL2FwcC9wb2xpY3ktZ2VuZXJhdG9yL3BvbGljeS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCIvVXNlcnMvbWF4L0RvY3VtZW50cy9Bbmd1bGFyL3Nob3BpZnlUb29sa2l0L3NyYy9hcHAvcG9saWN5LWdlbmVyYXRvci9wb2xpY3ktZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLHNCQUFBO0FBWUEsb0JBQUE7QUFJQSxXQUFBO0FBQ0E7RUFDSSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0Esd0RBQUE7QUNmSjtBRGtCRSxVQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdURBQUE7QUNoQko7QURtQkUsV0FBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLHdEQUFBO0FDakJKO0FEb0JFLFdBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSx3REFBQTtBQ2xCSjtBRHFCRSxZQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EseURBQUE7QUNuQko7QURzQkUsYUFBQTtBQUNBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtFQUNBLDBEQUFBO0FDcEJKO0FEdUJFLGNBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyREFBQTtBQ3JCSjtBRHdCRSxVQUFBO0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0VBQ0EsdURBQUE7QUN0Qko7QUR5QkUsZ0JBQUE7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSw2REFBQTtBQ3ZCSjtBRDRCQTtFQUNJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUMxQko7QUQrQkE7RUFDSSx5QkF4Rkk7RUF5RkosWUF4Rkk7RUF5RkoseUJBM0ZrQjtFQTRGbEIsZUFBQTtFQUNBLGtCQUFBO0FDNUJKO0FEaUNBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZ0JBN0ZTO0VBOEZULFlBdEdJO0VBdUdKLFlBQUE7RUFDQSx5QkF6R0k7RUEwR0osb0JBQUE7RUFDQSwwQkFBQTtFQUNBLDRCQXpHUztFQTJHVCw2QkF4R2tCO0FDeUV0QjtBRGlDSTtFQUNJLGFBQUE7QUMvQlI7QURrQ0k7RUFDSSxhQUFBO0FDaENSO0FEcUNBO0VBQ0ksYUFBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGNBQUE7RUFDQSxnQkFBQTtBQ2xDSjtBRHNDQTtFQUNJLGFBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxjQUFBO0FDbkNKO0FEc0NBO0VBQ0ksY0F6SUs7RUEwSUwseUJBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkF2SVM7RUF3SVQsbUJBQUE7QUNuQ0o7QURxQ0E7RUFDSSxpQkFBQTtFQUNBLGdCQTdJVztFQThJWCxvQkFBQTtBQ2xDSjtBRHNDQTtFQUNJLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLGFBQUE7QUNuQ0o7QURzQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNuQ0o7QURzQ0E7RUFDSSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxZQUFBO0FDbkNKO0FEcUNBO0VBQ0UsY0F4S087QUNzSVQ7QURpQ0E7RUFDRSxjQXhLTztBQ3NJVDtBRHFDQTtFQUNFLFdBQUE7QUNsQ0Y7QUR3Q0EsV0FBQTtBQUNBO0VBQ0UsbUJBcExPO0VBcUxQLG9CQUFBO0VBQUEsWUFBQTtFQUNBLHFDQWxMb0I7RUFrTHBCLDZCQWxMb0I7QUM2SXRCO0FEMENBLG9CQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQ3ZDRjtBRDRDQTtFQUVFO0lBQ0UsYUFBQTtFQzFDRjs7RUQ0Q0E7SUFDRSxhQUFBO0VDekNGOztFRDJDQTtJQUNFLGFBQUE7RUN4Q0Y7QUFDRjtBQ3hLQTtFQUNJLGFBQUE7RUFDQSxjQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEMEtKO0FDeEtJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0FEMEtSO0FDdktJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtBRHlLUjtBQ3ZLUTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FEeUtaO0FDdktZO0VBQ0ksZ0JGbkJIO0VFb0JHLG1CQUFBO0FEeUtoQjtBQ3RLWTtFQUNJLFlBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EseUJBQUE7RUFDQSxZRnJDUjtFRXNDUSx5QkZ4Q007RUV5Q04sZUFBQTtFQUNBLHlCQUFBO0VBQ0Esc0JGeENQO0FDZ05UO0FDbktZO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSx5QkY5Q1I7RUUrQ1EseUJBQUE7RUFDQSxlQUFBO0VBQ0EsWUZwRFI7RUVxRFEsZUFBQTtFQUNBLDZCRmpETTtBQ3NOdEI7QUNuS2dCO0VBQ0kseUJGeERYO0FDNk5UIiwiZmlsZSI6InNyYy9hcHAvcG9saWN5LWdlbmVyYXRvci9wb2xpY3ktZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi8qIFZhcmlhYmxlcyAtIFNUQVJUICovXG4kcHJpbWFyeS1mb250LWZhbWlseTogJ1NGIERpc3BsYXknO1xuJGJsYWNrOiAjMTYxNjFBO1xuJHdoaXRlOiB3aGl0ZTtcbiRwdXJwbGU6ICM3RjVBRjA7XG4kbGlnaHQtZ3JleTogIzk0QTFCMjtcbiRncmVlbjogIzJDQjY3RDtcbiRvcmFuZ2U6IHRvbWF0bztcbiRwcmltYXJpeS10cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbiRmb250LXJlZ3VsYXI6IDUwMDtcbiRmb250LWhlYXZ5OiA5MDA7XG4kZm9udC1saWdodDogMzAwO1xuLyogVmFyaWFibGVzIC0gRU5EICovXG5cblxuXG4vKiogQmxhY2sgKi9cbkBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogOTAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1CbGFjay5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBCb2xkICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1Cb2xkLm90ZlwiKTtcbiAgfVxuICBcbiAgLyoqIEhlYXZ5ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogODAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1IZWF2eS5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBMaWdodCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktTGlnaHQub3RmXCIpO1xuICB9XG4gIFxuICAvKiogTWVkaXVtICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1NZWRpdW0ub3RmXCIpO1xuICB9XG4gIFxuICAvKiogUmVndWxhciAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktUmVndWxhci5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBTZW1pYm9sZCAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktU2VtaWJvbGQub3RmXCIpO1xuICB9XG4gIFxuICAvKiogVGhpbiAqL1xuICBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktVGhpbi5vdGZcIik7XG4gIH1cbiAgXG4gIC8qKiBVbHRyYWxpZ2h0ICovXG4gIEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgICBmb250LXdlaWdodDogMTAwO1xuICAgIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1VbHRyYWxpZ2h0Lm90ZlwiKTtcbiAgfVxuXG5cblxuKiB7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBub25lO1xuXG59XG5cblxuYm9keSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJsYWNrO1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgZm9udC1mYW1pbHk6ICRwcmltYXJ5LWZvbnQtZmFtaWx5O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XG5cblxufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDI5MHB4O1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzZW07XG4gICAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gICAgZm9udC13ZWlnaHQ6ICRmb250LWxpZ2h0O1xuICAgIGNvbG9yOiAkd2hpdGU7XG4gICAgb3BhY2l0eTogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRibGFjaztcbiAgICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgICBib3JkZXItYm90dG9tLXdpZHRoOiAwLjVweDtcbiAgICBib3JkZXItYm90dG9tLWNvbG9yOiAkbGlnaHQtZ3JleTtcblxuICAgIHRyYW5zaXRpb246ICRwcmltYXJpeS10cmFuc2l0aW9uO1xuXG4gICAgJjpob3ZlciB7XG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgfVxuXG4gICAgJjpmb2N1cyB7XG4gICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgfVxufVxuXG5cbi5jb250YWluZXItbG9uZ3tcbiAgICB3aWR0aDogMTM2NXB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1hcmdpbi10b3A6IDM1cHg7XG5cbn1cblxuLmNvbnRhaW5lci1zaG9ydCB7XG4gICAgd2lkdGg6IDEwODhweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN1YnRpdGxlIHtcbiAgICBjb2xvcjogJHB1cnBsZTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1oZWF2eTtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xufVxuLnNlbGVjdGVkLW1lbnUge1xuICAgIGZvbnQtc2l6ZTogNDIuNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiAkZm9udC1yZWd1bGFyO1xuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuXG5cbi5jaXJjbGVfMSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTEwMHB4O1xuICAgIHJpZ2h0OiAtMjAwcHg7XG4gXG59XG4uY2lyY2xlXzIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTUwcHg7XG5cbn1cbi5jaXJjbGVfMyB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogLTQwMHB4O1xuICAgIGxlZnQ6IC0yMDBweDtcbn1cbjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICRwdXJwbGU7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMjBweDtcblxuXG59XG5cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogJHB1cnBsZTsgXG4gIGN1cnNvcjogZ3JhYjtcbiAgdHJhbnNpdGlvbjogJHByaW1hcml5LXRyYW5zaXRpb247XG5cblxufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiBsaWdodGVuKCRwdXJwbGUsIDUlKTsgXG5cbn1cblxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MjBweCkge1xuXG4gIC5jaXJjbGVfMSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxuICAuY2lyY2xlXzIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmNpcmNsZV8zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxufVxuXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExODRweCkge1xuICAgIFxuICAgIC5jb250YWluZXItbG9uZ3tcblxuICAgIH1cbn0iLCIvKiBWYXJpYWJsZXMgLSBTVEFSVCAqL1xuLyogVmFyaWFibGVzIC0gRU5EICovXG4vKiogQmxhY2sgKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiA5MDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1CbGFjay5vdGZcIik7XG59XG4vKiogQm9sZCAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LUJvbGQub3RmXCIpO1xufVxuLyoqIEhlYXZ5ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogODAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktSGVhdnkub3RmXCIpO1xufVxuLyoqIExpZ2h0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogMjAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktTGlnaHQub3RmXCIpO1xufVxuLyoqIE1lZGl1bSAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LU1lZGl1bS5vdGZcIik7XG59XG4vKiogUmVndWxhciAqL1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgc3JjOiB1cmwoXCJodHRwczovL3NmLmFiYXJiYS5tZS9TRi1VSS1EaXNwbGF5LVJlZ3VsYXIub3RmXCIpO1xufVxuLyoqIFNlbWlib2xkICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogNjAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktU2VtaWJvbGQub3RmXCIpO1xufVxuLyoqIFRoaW4gKi9cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJTRiBEaXNwbGF5XCI7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHNyYzogdXJsKFwiaHR0cHM6Ly9zZi5hYmFyYmEubWUvU0YtVUktRGlzcGxheS1UaGluLm90ZlwiKTtcbn1cbi8qKiBVbHRyYWxpZ2h0ICovXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiU0YgRGlzcGxheVwiO1xuICBmb250LXdlaWdodDogMTAwO1xuICBzcmM6IHVybChcImh0dHBzOi8vc2YuYWJhcmJhLm1lL1NGLVVJLURpc3BsYXktVWx0cmFsaWdodC5vdGZcIik7XG59XG4qIHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXItc3R5bGU6IG5vbmU7XG59XG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjFBO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBvdmVyZmxvdy14OiBoaWRkZW47XG59XG5cbmlucHV0IHtcbiAgd2lkdGg6IDI5MHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDNlbTtcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgb3BhY2l0eTogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjFBO1xuICBib3JkZXItYm90dG9tOiBzb2xpZDtcbiAgYm9yZGVyLWJvdHRvbS13aWR0aDogMC41cHg7XG4gIGJvcmRlci1ib3R0b20tY29sb3I6ICM5NEExQjI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2Utb3V0O1xufVxuaW5wdXQ6aG92ZXIge1xuICBvcGFjaXR5OiAxMDAlO1xufVxuaW5wdXQ6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG4uY29udGFpbmVyLWxvbmcge1xuICB3aWR0aDogMTM2NXB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAzNXB4O1xufVxuXG4uY29udGFpbmVyLXNob3J0IHtcbiAgd2lkdGg6IDEwODhweDtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW46IDAgYXV0bztcbn1cblxuLnN1YnRpdGxlIHtcbiAgY29sb3I6ICM3RjVBRjA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IDkwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuLnNlbGVjdGVkLW1lbnUge1xuICBmb250LXNpemU6IDQyLjVweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG5cbi5jaXJjbGVfMSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAtMTAwcHg7XG4gIHJpZ2h0OiAtMjAwcHg7XG59XG5cbi5jaXJjbGVfMiB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDE1MHB4O1xufVxuXG4uY2lyY2xlXzMge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogLTQwMHB4O1xuICBsZWZ0OiAtMjAwcHg7XG59XG5cbjo6c2VsZWN0aW9uIHtcbiAgY29sb3I6ICM3RjVBRjA7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMjBweDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzdGNUFGMDtcbiAgY3Vyc29yOiBncmFiO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlLW91dDtcbn1cblxuLyogSGFuZGxlIG9uIGhvdmVyICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogIzkxNzFmMjtcbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcbiAgLmNpcmNsZV8xIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNpcmNsZV8yIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cbiAgLmNpcmNsZV8zIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4ucG9saWN5LXdyYXBwZXIge1xuICB3aWR0aDogMTA4OHB4O1xuICBoZWlnaHQ6IDExMzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wb2xpY3ktd3JhcHBlciAucGVyc29ubmFsLWluZm8ge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA0MCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbi5wb2xpY3ktd3JhcHBlciAudGV4dC1nZW4td3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuLnBvbGljeS13cmFwcGVyIC50ZXh0LWdlbi13cmFwcGVyIC50ZXh0LWFyZWEge1xuICBtaW4td2lkdGg6IDQ1JTtcbiAgbWluLWhlaWdodDogNjAwcHg7XG4gIG1hcmdpbi1yaWdodDogMzBweDtcbiAgbWFyZ2luLWJvdHRvbTogODBweDtcbiAgZmxleDogMTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5wb2xpY3ktd3JhcHBlciAudGV4dC1nZW4td3JhcHBlciAudGV4dC1hcmVhIHAge1xuICBmb250LXdlaWdodDogMzAwO1xuICBtYXJnaW4tYm90dG9tOiAyNXB4O1xufVxuLnBvbGljeS13cmFwcGVyIC50ZXh0LWdlbi13cmFwcGVyIC50ZXh0LWFyZWEgLnRleHQtdG8tY29weSB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAzMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQzNDNjO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIlNGIERpc3BsYXlcIjtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjOTRBMUIyO1xuICBvdXRsaW5lLWNvbG9yOiAjN0Y1QUYwO1xufVxuLnBvbGljeS13cmFwcGVyIC50ZXh0LWdlbi13cmFwcGVyIC50ZXh0LWFyZWEgYnV0dG9uIHtcbiAgd2lkdGg6IDgwcHg7XG4gIGhlaWdodDogNjVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJDQjY3RDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1vdXQ7XG59XG4ucG9saWN5LXdyYXBwZXIgLnRleHQtZ2VuLXdyYXBwZXIgLnRleHQtYXJlYSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjN0Y1QUYwO1xufSIsIkBpbXBvcnQgXCIuLi8uLi9zdHlsZXMuc2Nzc1wiO1xuXG4ucG9saWN5LXdyYXBwZXIge1xuICAgIHdpZHRoOiAxMDg4cHg7XG4gICAgaGVpZ2h0OiAxMTMwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgLnBlcnNvbm5hbC1pbmZvIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogNDAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgfVxuXG4gICAgLnRleHQtZ2VuLXdyYXBwZXIge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2MCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcblxuICAgICAgICAudGV4dC1hcmVhIHtcbiAgICAgICAgICAgIG1pbi13aWR0aDogNDUlO1xuICAgICAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4MHB4O1xuICAgICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuXG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgICBmb250LXdlaWdodDogJGZvbnQtbGlnaHQ7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLnRleHQtdG8tY29weSB7XG4gICAgICAgICAgICAgICAgcmVzaXplOiBub25lO1xuICAgICAgICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRlbigjMjgyODJFLCA1JSk7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICBmb250LWZhbWlseTogJHByaW1hcnktZm9udC1mYW1pbHk7XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICRsaWdodC1ncmV5O1xuICAgICAgICAgICAgICAgIG91dGxpbmUtY29sb3I6ICRwdXJwbGU7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgXG4gICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgICAgICAgICAgIGhlaWdodDogNjVweDtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZ3JlZW47XG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgICAgICAgY29sb3I6ICR3aGl0ZTtcbiAgICAgICAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjogJHByaW1hcml5LXRyYW5zaXRpb247XG5cbiAgICAgICAgICAgICAgICAmOmhvdmVyIHtcbiAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJHB1cnBsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICB9XG4gICAgfVxufVxuXG5cblxuXG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PolicyGeneratorComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-policy-generator',
          templateUrl: './policy-generator.component.html',
          styleUrls: ['./policy-generator.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/max/Documents/Angular/shopifyToolkit/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map