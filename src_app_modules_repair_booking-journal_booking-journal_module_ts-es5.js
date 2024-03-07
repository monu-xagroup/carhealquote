(function () {
  "use strict";

  function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); Object.defineProperty(subClass, "prototype", { writable: false }); if (superClass) _setPrototypeOf(subClass, superClass); }

  function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

  function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

  function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } else if (call !== void 0) { throw new TypeError("Derived constructors may only return object or undefined"); } return _assertThisInitialized(self); }

  function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

  function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); return true; } catch (e) { return false; } }

  function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkcar_heal_quote"] = self["webpackChunkcar_heal_quote"] || []).push([["src_app_modules_repair_booking-journal_booking-journal_module_ts"], {
    /***/
    32080:
    /*!******************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slide-toggle.js ***!
      \******************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS": function MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS() {
          return (
            /* binding */
            _MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS
          );
        },

        /* harmony export */
        "MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR": function MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR() {
          return (
            /* binding */
            _MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR
          );
        },

        /* harmony export */
        "MAT_SLIDE_TOGGLE_VALUE_ACCESSOR": function MAT_SLIDE_TOGGLE_VALUE_ACCESSOR() {
          return (
            /* binding */
            _MAT_SLIDE_TOGGLE_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "MatSlideToggle": function MatSlideToggle() {
          return (
            /* binding */
            _MatSlideToggle
          );
        },

        /* harmony export */
        "MatSlideToggleChange": function MatSlideToggleChange() {
          return (
            /* binding */
            _MatSlideToggleChange
          );
        },

        /* harmony export */
        "MatSlideToggleModule": function MatSlideToggleModule() {
          return (
            /* binding */
            _MatSlideToggleModule
          );
        },

        /* harmony export */
        "MatSlideToggleRequiredValidator": function MatSlideToggleRequiredValidator() {
          return (
            /* binding */
            _MatSlideToggleRequiredValidator
          );
        },

        /* harmony export */
        "_MatSlideToggleRequiredValidatorModule": function _MatSlideToggleRequiredValidatorModule() {
          return (
            /* binding */
            _MatSlideToggleRequiredValidatorModule2
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/observers */
      90851);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** Injection token to be used to override the default options for `mat-slide-toggle`. */


      var _c0 = ["thumbContainer"];
      var _c1 = ["toggleBar"];
      var _c2 = ["input"];

      var _c3 = function _c3(a0) {
        return {
          enterDuration: a0
        };
      };

      var _c4 = ["*"];

      var _MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.InjectionToken('mat-slide-toggle-default-options', {
        providedIn: 'root',
        factory: function factory() {
          return {
            disableToggleValue: false
          };
        }
      });
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */
      // Increasing integer for generating unique ids for slide-toggle components.


      var nextUniqueId = 0;
      /** @docs-private */

      var _MAT_SLIDE_TOGGLE_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MatSlideToggle;
        }),
        multi: true
      };
      /** Change event object emitted by a MatSlideToggle. */

      var _MatSlideToggleChange = /*#__PURE__*/_createClass(function _MatSlideToggleChange(
      /** The source MatSlideToggle of the event. */
      source,
      /** The new `checked` value of the MatSlideToggle. */
      checked) {
        _classCallCheck(this, _MatSlideToggleChange);

        this.source = source;
        this.checked = checked;
      }); // Boilerplate for applying mixins to MatSlideToggle.

      /** @docs-private */


      var _MatSlideToggleBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinTabIndex)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinColor)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisableRipple)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.mixinDisabled)( /*#__PURE__*/function () {
        function _class(_elementRef) {
          _classCallCheck(this, _class);

          this._elementRef = _elementRef;
        }

        return _createClass(_class);
      }()))));
      /** Represents a slidable "switch" toggle that can be moved between on and off. */


      var _MatSlideToggle = /*#__PURE__*/function (_MatSlideToggleBase2) {
        _inherits(_MatSlideToggle, _MatSlideToggleBase2);

        var _super = _createSuper(_MatSlideToggle);

        function _MatSlideToggle(elementRef, _focusMonitor, _changeDetectorRef, tabIndex, defaults, animationMode) {
          var _this;

          _classCallCheck(this, _MatSlideToggle);

          _this = _super.call(this, elementRef);
          _this._focusMonitor = _focusMonitor;
          _this._changeDetectorRef = _changeDetectorRef;
          _this.defaults = defaults;

          _this._onChange = function (_) {};

          _this._onTouched = function () {};

          _this._uniqueId = "mat-slide-toggle-".concat(++nextUniqueId);
          _this._required = false;
          _this._checked = false;
          /** Name value will be applied to the input element if present. */

          _this.name = null;
          /** A unique id for the slide-toggle input. If none is supplied, it will be auto-generated. */

          _this.id = _this._uniqueId;
          /** Whether the label should appear after or before the slide-toggle. Defaults to 'after'. */

          _this.labelPosition = 'after';
          /** Used to set the aria-label attribute on the underlying input element. */

          _this.ariaLabel = null;
          /** Used to set the aria-labelledby attribute on the underlying input element. */

          _this.ariaLabelledby = null;
          /** An event will be dispatched each time the slide-toggle changes its value. */

          _this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          /**
           * An event will be dispatched each time the slide-toggle input is toggled.
           * This event is always emitted when the user toggles the slide toggle, but this does not mean
           * the slide toggle's value has changed.
           */

          _this.toggleChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__.EventEmitter();
          _this.tabIndex = parseInt(tabIndex) || 0;
          _this.color = _this.defaultColor = defaults.color || 'accent';
          _this._noopAnimations = animationMode === 'NoopAnimations';
          return _this;
        }
        /** Whether the slide-toggle is required. */


        _createClass(_MatSlideToggle, [{
          key: "required",
          get: function get() {
            return this._required;
          },
          set: function set(value) {
            this._required = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);
          }
          /** Whether the slide-toggle element is checked or not. */

        }, {
          key: "checked",
          get: function get() {
            return this._checked;
          },
          set: function set(value) {
            this._checked = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_3__.coerceBooleanProperty)(value);

            this._changeDetectorRef.markForCheck();
          }
          /** Returns the unique id for the visual hidden input. */

        }, {
          key: "inputId",
          get: function get() {
            return "".concat(this.id || this._uniqueId, "-input");
          }
        }, {
          key: "ngAfterContentInit",
          value: function ngAfterContentInit() {
            var _this2 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (focusOrigin) {
              // Only forward focus manually when it was received programmatically or through the
              // keyboard. We should not do this for mouse/touch focus for two reasons:
              // 1. It can prevent clicks from landing in Chrome (see #18269).
              // 2. They're already handled by the wrapping `label` element.
              if (focusOrigin === 'keyboard' || focusOrigin === 'program') {
                _this2._inputElement.nativeElement.focus();
              } else if (!focusOrigin) {
                // When a focused element becomes disabled, the browser *immediately* fires a blur event.
                // Angular does not expect events to be raised during change detection, so any state
                // change (such as a form control's 'ng-touched') will cause a changed-after-checked
                // error. See https://github.com/angular/angular/issues/17793. To work around this,
                // we defer telling the form control it has been touched until the next tick.
                Promise.resolve().then(function () {
                  return _this2._onTouched();
                });
              }
            });
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this._focusMonitor.stopMonitoring(this._elementRef);
          }
          /** Method being called whenever the underlying input emits a change event. */

        }, {
          key: "_onChangeEvent",
          value: function _onChangeEvent(event) {
            // We always have to stop propagation on the change event.
            // Otherwise the change event, from the input element, will bubble up and
            // emit its event object to the component's `change` output.
            event.stopPropagation();
            this.toggleChange.emit(); // When the slide toggle's config disables toggle change event by setting
            // `disableToggleValue: true`, the slide toggle's value does not change, and the
            // checked state of the underlying input needs to be changed back.

            if (this.defaults.disableToggleValue) {
              this._inputElement.nativeElement.checked = this.checked;
              return;
            } // Sync the value from the underlying input element with the component instance.


            this.checked = this._inputElement.nativeElement.checked; // Emit our custom change event only if the underlying input emitted one. This ensures that
            // there is no change event, when the checked state changes programmatically.

            this._emitChangeEvent();
          }
          /** Method being called whenever the slide-toggle has been clicked. */

        }, {
          key: "_onInputClick",
          value: function _onInputClick(event) {
            // We have to stop propagation for click events on the visual hidden input element.
            // By default, when a user clicks on a label element, a generated click event will be
            // dispatched on the associated input element. Since we are using a label element as our
            // root container, the click event on the `slide-toggle` will be executed twice.
            // The real click event will bubble up, and the generated click event also tries to bubble up.
            // This will lead to multiple click events.
            // Preventing bubbling for the second event will solve that issue.
            event.stopPropagation();
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.checked = !!value;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._onChange = fn;
          }
          /** Implemented as part of ControlValueAccessor. */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this._onTouched = fn;
          }
          /** Implemented as a part of ControlValueAccessor. */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;

            this._changeDetectorRef.markForCheck();
          }
          /** Focuses the slide-toggle. */

        }, {
          key: "focus",
          value: function focus(options, origin) {
            if (origin) {
              this._focusMonitor.focusVia(this._inputElement, origin, options);
            } else {
              this._inputElement.nativeElement.focus(options);
            }
          }
          /** Toggles the checked state of the slide-toggle. */

        }, {
          key: "toggle",
          value: function toggle() {
            this.checked = !this.checked;

            this._onChange(this.checked);
          }
          /**
           * Emits a change event on the `change` output. Also notifies the FormControl about the change.
           */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._onChange(this.checked);

            this.change.emit(new _MatSlideToggleChange(this, this.checked));
          }
          /** Method being called whenever the label text changes. */

        }, {
          key: "_onLabelTextChange",
          value: function _onLabelTextChange() {
            // Since the event of the `cdkObserveContent` directive runs outside of the zone, the
            // slide-toggle component will be only marked for check, but no actual change detection runs
            // automatically. Instead of going back into the zone in order to trigger a change detection
            // which causes *all* components to be checked (if explicitly marked or not using OnPush),
            // we only trigger an explicit change detection for the slide-toggle view and its children.
            this._changeDetectorRef.detectChanges();
          }
        }]);

        return _MatSlideToggle;
      }(_MatSlideToggleBase);

      _MatSlideToggle.ɵfac = function MatSlideToggle_Factory(t) {
        return new (t || _MatSlideToggle)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatSlideToggle.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: _MatSlideToggle,
        selectors: [["mat-slide-toggle"]],
        viewQuery: function MatSlideToggle_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._thumbBarEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx._inputElement = _t.first);
          }
        },
        hostAttrs: [1, "mat-slide-toggle"],
        hostVars: 12,
        hostBindings: function MatSlideToggle_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵhostProperty"]("id", ctx.id);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("tabindex", ctx.disabled ? null : -1)("aria-label", null)("aria-labelledby", null);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-checked", ctx.checked)("mat-disabled", ctx.disabled)("mat-slide-toggle-label-before", ctx.labelPosition == "before")("_mat-animation-noopable", ctx._noopAnimations);
          }
        },
        inputs: {
          disabled: "disabled",
          disableRipple: "disableRipple",
          color: "color",
          tabIndex: "tabIndex",
          name: "name",
          id: "id",
          labelPosition: "labelPosition",
          ariaLabel: ["aria-label", "ariaLabel"],
          ariaLabelledby: ["aria-labelledby", "ariaLabelledby"],
          required: "required",
          checked: "checked",
          ariaDescribedby: ["aria-describedby", "ariaDescribedby"]
        },
        outputs: {
          change: "change",
          toggleChange: "toggleChange"
        },
        exportAs: ["matSlideToggle"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_MAT_SLIDE_TOGGLE_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]],
        ngContentSelectors: _c4,
        decls: 16,
        vars: 20,
        consts: [[1, "mat-slide-toggle-label"], ["label", ""], [1, "mat-slide-toggle-bar"], ["toggleBar", ""], ["type", "checkbox", "role", "switch", 1, "mat-slide-toggle-input", "cdk-visually-hidden", 3, "id", "required", "tabIndex", "checked", "disabled", "change", "click"], ["input", ""], [1, "mat-slide-toggle-thumb-container"], ["thumbContainer", ""], [1, "mat-slide-toggle-thumb"], ["mat-ripple", "", 1, "mat-slide-toggle-ripple", "mat-focus-indicator", 3, "matRippleTrigger", "matRippleDisabled", "matRippleCentered", "matRippleRadius", "matRippleAnimation"], [1, "mat-ripple-element", "mat-slide-toggle-persistent-ripple"], [1, "mat-slide-toggle-content", 3, "cdkObserveContent"], ["labelContent", ""], [2, "display", "none"]],
        template: function MatSlideToggle_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 4, 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function MatSlideToggle_Template_input_change_4_listener($event) {
              return ctx._onChangeEvent($event);
            })("click", function MatSlideToggle_Template_input_click_4_listener($event) {
              return ctx._onInputClick($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 11, 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cdkObserveContent", function MatSlideToggle_Template_span_cdkObserveContent_11_listener() {
              return ctx._onLabelTextChange();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\xA0");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            var _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("for", ctx.inputId);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("mat-slide-toggle-bar-no-side-margin", !_r4.textContent || !_r4.textContent.trim());

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("id", ctx.inputId)("required", ctx.required)("tabIndex", ctx.tabIndex)("checked", ctx.checked)("disabled", ctx.disabled);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("name", ctx.name)("aria-checked", ctx.checked.toString())("aria-label", ctx.ariaLabel)("aria-labelledby", ctx.ariaLabelledby)("aria-describedby", ctx.ariaDescribedby);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRippleTrigger", _r0)("matRippleDisabled", ctx.disableRipple || ctx.disabled)("matRippleCentered", true)("matRippleRadius", 20)("matRippleAnimation", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](18, _c3, ctx._noopAnimations ? 0 : 150));
          }
        },
        directives: [_angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRipple, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.CdkObserveContent],
        styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatSlideToggle.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
            args: ['tabindex']
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatSlideToggle.propDecorators = {
        _thumbEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['thumbContainer']
        }],
        _thumbBarEl: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['toggleBar']
        }],
        name: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        labelPosition: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        ariaLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-label']
        }],
        ariaLabelledby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-labelledby']
        }],
        ariaDescribedby: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
          args: ['aria-describedby']
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        checked: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        toggleChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
        }],
        _inputElement: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
          args: ['input']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSlideToggle, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Component,
          args: [{
            selector: 'mat-slide-toggle',
            exportAs: 'matSlideToggle',
            host: {
              'class': 'mat-slide-toggle',
              '[id]': 'id',
              // Needs to be `-1` so it can still receive programmatic focus.
              '[attr.tabindex]': 'disabled ? null : -1',
              '[attr.aria-label]': 'null',
              '[attr.aria-labelledby]': 'null',
              '[class.mat-checked]': 'checked',
              '[class.mat-disabled]': 'disabled',
              '[class.mat-slide-toggle-label-before]': 'labelPosition == "before"',
              '[class._mat-animation-noopable]': '_noopAnimations'
            },
            template: "<label [attr.for]=\"inputId\" class=\"mat-slide-toggle-label\" #label>\n  <div #toggleBar class=\"mat-slide-toggle-bar\"\n       [class.mat-slide-toggle-bar-no-side-margin]=\"!labelContent.textContent || !labelContent.textContent.trim()\">\n\n    <input #input class=\"mat-slide-toggle-input cdk-visually-hidden\" type=\"checkbox\"\n           role=\"switch\"\n           [id]=\"inputId\"\n           [required]=\"required\"\n           [tabIndex]=\"tabIndex\"\n           [checked]=\"checked\"\n           [disabled]=\"disabled\"\n           [attr.name]=\"name\"\n           [attr.aria-checked]=\"checked.toString()\"\n           [attr.aria-label]=\"ariaLabel\"\n           [attr.aria-labelledby]=\"ariaLabelledby\"\n           [attr.aria-describedby]=\"ariaDescribedby\"\n           (change)=\"_onChangeEvent($event)\"\n           (click)=\"_onInputClick($event)\">\n\n    <div class=\"mat-slide-toggle-thumb-container\" #thumbContainer>\n      <div class=\"mat-slide-toggle-thumb\"></div>\n      <div class=\"mat-slide-toggle-ripple mat-focus-indicator\" mat-ripple\n           [matRippleTrigger]=\"label\"\n           [matRippleDisabled]=\"disableRipple || disabled\"\n           [matRippleCentered]=\"true\"\n           [matRippleRadius]=\"20\"\n           [matRippleAnimation]=\"{enterDuration: _noopAnimations ? 0 : 150}\">\n\n        <div class=\"mat-ripple-element mat-slide-toggle-persistent-ripple\"></div>\n      </div>\n    </div>\n\n  </div>\n\n  <span class=\"mat-slide-toggle-content\" #labelContent (cdkObserveContent)=\"_onLabelTextChange()\">\n    <!-- Add an invisible span so JAWS can read the label -->\n    <span style=\"display:none\">&nbsp;</span>\n    <ng-content></ng-content>\n  </span>\n</label>\n",
            providers: [_MAT_SLIDE_TOGGLE_VALUE_ACCESSOR],
            inputs: ['disabled', 'disableRipple', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-slide-toggle{display:inline-block;height:24px;max-width:100%;line-height:24px;white-space:nowrap;outline:none;-webkit-tap-highlight-color:transparent}.mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(16px, 0, 0)}[dir=rtl] .mat-slide-toggle.mat-checked .mat-slide-toggle-thumb-container{transform:translate3d(-16px, 0, 0)}.mat-slide-toggle.mat-disabled{opacity:.38}.mat-slide-toggle.mat-disabled .mat-slide-toggle-label,.mat-slide-toggle.mat-disabled .mat-slide-toggle-thumb-container{cursor:default}.mat-slide-toggle-label{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex;flex:1;flex-direction:row;align-items:center;height:inherit;cursor:pointer}.mat-slide-toggle-content{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.mat-slide-toggle-label-before .mat-slide-toggle-label{order:1}.mat-slide-toggle-label-before .mat-slide-toggle-bar{order:2}[dir=rtl] .mat-slide-toggle-label-before .mat-slide-toggle-bar,.mat-slide-toggle-bar{margin-right:8px;margin-left:0}[dir=rtl] .mat-slide-toggle-bar,.mat-slide-toggle-label-before .mat-slide-toggle-bar{margin-left:8px;margin-right:0}.mat-slide-toggle-bar-no-side-margin{margin-left:0;margin-right:0}.mat-slide-toggle-thumb-container{position:absolute;z-index:1;width:20px;height:20px;top:-3px;left:0;transform:translate3d(0, 0, 0);transition:all 80ms linear;transition-property:transform}._mat-animation-noopable .mat-slide-toggle-thumb-container{transition:none}[dir=rtl] .mat-slide-toggle-thumb-container{left:auto;right:0}.mat-slide-toggle-thumb{height:20px;width:20px;border-radius:50%}.mat-slide-toggle-bar{position:relative;width:36px;height:14px;flex-shrink:0;border-radius:8px}.mat-slide-toggle-input{bottom:0;left:10px}[dir=rtl] .mat-slide-toggle-input{left:auto;right:10px}.mat-slide-toggle-bar,.mat-slide-toggle-thumb{transition:all 80ms linear;transition-property:background-color;transition-delay:50ms}._mat-animation-noopable .mat-slide-toggle-bar,._mat-animation-noopable .mat-slide-toggle-thumb{transition:none}.mat-slide-toggle .mat-slide-toggle-ripple{position:absolute;top:calc(50% - 20px);left:calc(50% - 20px);height:40px;width:40px;z-index:1;pointer-events:none}.mat-slide-toggle .mat-slide-toggle-ripple .mat-ripple-element:not(.mat-slide-toggle-persistent-ripple){opacity:.12}.mat-slide-toggle-persistent-ripple{width:100%;height:100%;transform:none}.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:.04}.mat-slide-toggle:not(.mat-disabled).cdk-keyboard-focused .mat-slide-toggle-persistent-ripple{opacity:.12}.mat-slide-toggle-persistent-ripple,.mat-slide-toggle.mat-disabled .mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{opacity:0}@media(hover: none){.mat-slide-toggle-bar:hover .mat-slide-toggle-persistent-ripple{display:none}}.cdk-high-contrast-active .mat-slide-toggle-thumb,.cdk-high-contrast-active .mat-slide-toggle-bar{border:1px solid}.cdk-high-contrast-active .mat-slide-toggle.cdk-keyboard-focused .mat-slide-toggle-bar{outline:2px dotted;outline-offset:5px}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_4__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ChangeDetectorRef
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Attribute,
              args: ['tabindex']
            }]
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_MAT_SLIDE_TOGGLE_DEFAULT_OPTIONS]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          name: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          id: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          labelPosition: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          ariaLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-label']
          }],
          ariaLabelledby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-labelledby']
          }],
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          toggleChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Output
          }],
          required: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          checked: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input
          }],
          _thumbEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['thumbContainer']
          }],
          _thumbBarEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['toggleBar']
          }],
          ariaDescribedby: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Input,
            args: ['aria-describedby']
          }],
          _inputElement: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ViewChild,
            args: ['input']
          }]
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALIDATORS,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function () {
          return _MatSlideToggleRequiredValidator;
        }),
        multi: true
      };
      /**
       * Validator for Material slide-toggle components with the required attribute in a
       * template-driven form. The default validator for required form controls asserts
       * that the control value is not undefined but that is not appropriate for a slide-toggle
       * where the value is always defined.
       *
       * Required slide-toggle form controls are valid when checked.
       */

      var _MatSlideToggleRequiredValidator = /*#__PURE__*/function (_angular_forms__WEBPA) {
        _inherits(_MatSlideToggleRequiredValidator, _angular_forms__WEBPA);

        var _super2 = _createSuper(_MatSlideToggleRequiredValidator);

        function _MatSlideToggleRequiredValidator() {
          _classCallCheck(this, _MatSlideToggleRequiredValidator);

          return _super2.apply(this, arguments);
        }

        return _createClass(_MatSlideToggleRequiredValidator);
      }(_angular_forms__WEBPACK_IMPORTED_MODULE_1__.CheckboxRequiredValidator);

      _MatSlideToggleRequiredValidator.ɵfac = /*@__PURE__*/function () {
        var ɵMatSlideToggleRequiredValidator_BaseFactory;
        return function MatSlideToggleRequiredValidator_Factory(t) {
          return (ɵMatSlideToggleRequiredValidator_BaseFactory || (ɵMatSlideToggleRequiredValidator_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetInheritedFactory"](_MatSlideToggleRequiredValidator)))(t || _MatSlideToggleRequiredValidator);
        };
      }();

      _MatSlideToggleRequiredValidator.ɵdir = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({
        type: _MatSlideToggleRequiredValidator,
        selectors: [["mat-slide-toggle", "required", "", "formControlName", ""], ["mat-slide-toggle", "required", "", "formControl", ""], ["mat-slide-toggle", "required", "", "ngModel", ""]],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵInheritDefinitionFeature"]]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidator, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive,
          args: [{
            selector: "mat-slide-toggle[required][formControlName],\n             mat-slide-toggle[required][formControl], mat-slide-toggle[required][ngModel]",
            providers: [_MAT_SLIDE_TOGGLE_REQUIRED_VALIDATOR]
          }]
        }], null, null);
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /** This module is used by both original and MDC-based slide-toggle implementations. */


      var _MatSlideToggleRequiredValidatorModule2 = /*#__PURE__*/_createClass(function _MatSlideToggleRequiredValidatorModule2() {
        _classCallCheck(this, _MatSlideToggleRequiredValidatorModule2);
      });

      _MatSlideToggleRequiredValidatorModule2.ɵfac = function _MatSlideToggleRequiredValidatorModule_Factory(t) {
        return new (t || _MatSlideToggleRequiredValidatorModule2)();
      };

      _MatSlideToggleRequiredValidatorModule2.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatSlideToggleRequiredValidatorModule2
      });
      _MatSlideToggleRequiredValidatorModule2.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({});

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSlideToggleRequiredValidatorModule2, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            exports: [_MatSlideToggleRequiredValidator],
            declarations: [_MatSlideToggleRequiredValidator]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatSlideToggleRequiredValidatorModule2, {
          declarations: [_MatSlideToggleRequiredValidator],
          exports: [_MatSlideToggleRequiredValidator]
        });
      })();

      var _MatSlideToggleModule = /*#__PURE__*/_createClass(function _MatSlideToggleModule() {
        _classCallCheck(this, _MatSlideToggleModule);
      });

      _MatSlideToggleModule.ɵfac = function MatSlideToggleModule_Factory(t) {
        return new (t || _MatSlideToggleModule)();
      };

      _MatSlideToggleModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: _MatSlideToggleModule
      });
      _MatSlideToggleModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        imports: [[_MatSlideToggleRequiredValidatorModule2, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule], _MatSlideToggleRequiredValidatorModule2, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](_MatSlideToggleModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.NgModule,
          args: [{
            imports: [_MatSlideToggleRequiredValidatorModule2, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule],
            exports: [_MatSlideToggleRequiredValidatorModule2, _MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule],
            declarations: [_MatSlideToggle]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](_MatSlideToggleModule, {
          declarations: function declarations() {
            return [_MatSlideToggle];
          },
          imports: function imports() {
            return [_MatSlideToggleRequiredValidatorModule2, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatRippleModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule, _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_6__.ObserversModule];
          },
          exports: function exports() {
            return [_MatSlideToggleRequiredValidatorModule2, _MatSlideToggle, _angular_material_core__WEBPACK_IMPORTED_MODULE_2__.MatCommonModule];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    53616:
    /*!************************************************************************!*\
      !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js ***!
      \************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "MAT_SLIDER_VALUE_ACCESSOR": function MAT_SLIDER_VALUE_ACCESSOR() {
          return (
            /* binding */
            _MAT_SLIDER_VALUE_ACCESSOR
          );
        },

        /* harmony export */
        "MatSlider": function MatSlider() {
          return (
            /* binding */
            _MatSlider
          );
        },

        /* harmony export */
        "MatSliderChange": function MatSliderChange() {
          return (
            /* binding */
            _MatSliderChange
          );
        },

        /* harmony export */
        "MatSliderModule": function MatSliderModule() {
          return (
            /* binding */
            _MatSliderModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/core */
      32220);
      /* harmony import */


      var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/cdk/a11y */
      51606);
      /* harmony import */


      var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/cdk/bidi */
      772);
      /* harmony import */


      var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/cdk/coercion */
      20657);
      /* harmony import */


      var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/cdk/keycodes */
      90084);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/cdk/platform */
      36145);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! rxjs */
      9329);
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _c0 = ["sliderWrapper"];
      var activeEventOptions = (0, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__.normalizePassiveListenerOptions)({
        passive: false
      });
      /**
       * Visually, a 30px separation between tick marks looks best. This is very subjective but it is
       * the default separation we chose.
       */

      var MIN_AUTO_TICK_SEPARATION = 30;
      /** The thumb gap size for a disabled slider. */

      var DISABLED_THUMB_GAP = 7;
      /** The thumb gap size for a non-active slider at its minimum value. */

      var MIN_VALUE_NONACTIVE_THUMB_GAP = 7;
      /** The thumb gap size for an active slider at its minimum value. */

      var MIN_VALUE_ACTIVE_THUMB_GAP = 10;
      /**
       * Provider Expression that allows mat-slider to register as a ControlValueAccessor.
       * This allows it to support [(ngModel)] and [formControl].
       * @docs-private
       */

      var _MAT_SLIDER_VALUE_ACCESSOR = {
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_1__.NG_VALUE_ACCESSOR,
        useExisting: (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.forwardRef)(function () {
          return _MatSlider;
        }),
        multi: true
      };
      /** A simple change event emitted by the MatSlider component. */

      var _MatSliderChange = /*#__PURE__*/_createClass(function _MatSliderChange() {
        _classCallCheck(this, _MatSliderChange);
      }); // Boilerplate for applying mixins to MatSlider.

      /** @docs-private */


      var _MatSliderBase = (0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinTabIndex)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinColor)((0, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.mixinDisabled)( /*#__PURE__*/function () {
        function _class2(_elementRef) {
          _classCallCheck(this, _class2);

          this._elementRef = _elementRef;
        }

        return _createClass(_class2);
      }()), 'accent'));
      /**
       * Allows users to select from a range of values by moving the slider thumb. It is similar in
       * behavior to the native `<input type="range">` element.
       */


      var _MatSlider = /*#__PURE__*/function (_MatSliderBase2) {
        _inherits(_MatSlider, _MatSliderBase2);

        var _super3 = _createSuper(_MatSlider);

        function _MatSlider(elementRef, _focusMonitor, _changeDetectorRef, _dir, tabIndex, _ngZone, _document, _animationMode) {
          var _this3;

          _classCallCheck(this, _MatSlider);

          _this3 = _super3.call(this, elementRef);
          _this3._focusMonitor = _focusMonitor;
          _this3._changeDetectorRef = _changeDetectorRef;
          _this3._dir = _dir;
          _this3._ngZone = _ngZone;
          _this3._animationMode = _animationMode;
          _this3._invert = false;
          _this3._max = 100;
          _this3._min = 0;
          _this3._step = 1;
          _this3._thumbLabel = false;
          _this3._tickInterval = 0;
          _this3._value = null;
          _this3._vertical = false;
          /** Event emitted when the slider value has changed. */

          _this3.change = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /** Event emitted when the slider thumb moves. */

          _this3.input = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /**
           * Emits when the raw value of the slider changes. This is here primarily
           * to facilitate the two-way binding for the `value` input.
           * @docs-private
           */

          _this3.valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_2__.EventEmitter();
          /** onTouch function registered via registerOnTouch (ControlValueAccessor). */

          _this3.onTouched = function () {};

          _this3._percent = 0;
          /**
           * Whether or not the thumb is sliding and what the user is using to slide it with.
           * Used to determine if there should be a transition for the thumb and fill track.
           */

          _this3._isSliding = null;
          /**
           * Whether or not the slider is active (clicked or sliding).
           * Used to shrink and grow the thumb as according to the Material Design spec.
           */

          _this3._isActive = false;
          /** The size of a tick interval as a percentage of the size of the track. */

          _this3._tickIntervalPercent = 0;
          /** The dimensions of the slider. */

          _this3._sliderDimensions = null;

          _this3._controlValueAccessorChangeFn = function () {};
          /** Subscription to the Directionality change EventEmitter. */


          _this3._dirChangeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_4__.Subscription.EMPTY;
          /** Called when the user has put their pointer down on the slider. */

          _this3._pointerDown = function (event) {
            // Don't do anything if the slider is disabled or the
            // user is using anything other than the main mouse button.
            if (_this3.disabled || _this3._isSliding || !isTouchEvent(event) && event.button !== 0) {
              return;
            }

            _this3._ngZone.run(function () {
              _this3._touchId = isTouchEvent(event) ? getTouchIdForSlider(event, _this3._elementRef.nativeElement) : undefined;
              var pointerPosition = getPointerPositionOnPage(event, _this3._touchId);

              if (pointerPosition) {
                var oldValue = _this3.value;
                _this3._isSliding = 'pointer';
                _this3._lastPointerEvent = event;
                event.preventDefault();

                _this3._focusHostElement();

                _this3._onMouseenter(); // Simulate mouseenter in case this is a mobile device.


                _this3._bindGlobalEvents(event);

                _this3._focusHostElement();

                _this3._updateValueFromPosition(pointerPosition);

                _this3._valueOnSlideStart = oldValue; // Emit a change and input event if the value changed.

                if (oldValue != _this3.value) {
                  _this3._emitInputEvent();
                }
              }
            });
          };
          /**
           * Called when the user has moved their pointer after
           * starting to drag. Bound on the document level.
           */


          _this3._pointerMove = function (event) {
            if (_this3._isSliding === 'pointer') {
              var pointerPosition = getPointerPositionOnPage(event, _this3._touchId);

              if (pointerPosition) {
                // Prevent the slide from selecting anything else.
                event.preventDefault();
                var oldValue = _this3.value;
                _this3._lastPointerEvent = event;

                _this3._updateValueFromPosition(pointerPosition); // Native range elements always emit `input` events when the value changed while sliding.


                if (oldValue != _this3.value) {
                  _this3._emitInputEvent();
                }
              }
            }
          };
          /** Called when the user has lifted their pointer. Bound on the document level. */


          _this3._pointerUp = function (event) {
            if (_this3._isSliding === 'pointer') {
              if (!isTouchEvent(event) || typeof _this3._touchId !== 'number' || // Note that we use `changedTouches`, rather than `touches` because it
              // seems like in most cases `touches` is empty for `touchend` events.
              findMatchingTouch(event.changedTouches, _this3._touchId)) {
                event.preventDefault();

                _this3._removeGlobalEvents();

                _this3._isSliding = null;
                _this3._touchId = undefined;

                if (_this3._valueOnSlideStart != _this3.value && !_this3.disabled) {
                  _this3._emitChangeEvent();
                }

                _this3._valueOnSlideStart = _this3._lastPointerEvent = null;
              }
            }
          };
          /** Called when the window has lost focus. */


          _this3._windowBlur = function () {
            // If the window is blurred while dragging we need to stop dragging because the
            // browser won't dispatch the `mouseup` and `touchend` events anymore.
            if (_this3._lastPointerEvent) {
              _this3._pointerUp(_this3._lastPointerEvent);
            }
          };

          _this3._document = _document;
          _this3.tabIndex = parseInt(tabIndex) || 0;

          _ngZone.runOutsideAngular(function () {
            var element = elementRef.nativeElement;
            element.addEventListener('mousedown', _this3._pointerDown, activeEventOptions);
            element.addEventListener('touchstart', _this3._pointerDown, activeEventOptions);
          });

          return _this3;
        }
        /** Whether the slider is inverted. */


        _createClass(_MatSlider, [{
          key: "invert",
          get: function get() {
            return this._invert;
          },
          set: function set(value) {
            this._invert = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
          /** The maximum value that the slider can have. */

        }, {
          key: "max",
          get: function get() {
            return this._max;
          },
          set: function set(v) {
            this._max = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._max);
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The minimum value that the slider can have. */

        }, {
          key: "min",
          get: function get() {
            return this._min;
          },
          set: function set(v) {
            this._min = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._min);
            this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

            this._changeDetectorRef.markForCheck();
          }
          /** The values at which the thumb will snap. */

        }, {
          key: "step",
          get: function get() {
            return this._step;
          },
          set: function set(v) {
            this._step = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, this._step);

            if (this._step % 1 !== 0) {
              this._roundToDecimal = this._step.toString().split('.').pop().length;
            } // Since this could modify the label, we need to notify the change detection.


            this._changeDetectorRef.markForCheck();
          }
          /** Whether or not to show the thumb label. */

        }, {
          key: "thumbLabel",
          get: function get() {
            return this._thumbLabel;
          },
          set: function set(value) {
            this._thumbLabel = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
          /**
           * How often to show ticks. Relative to the step so that a tick always appears on a step.
           * Ex: Tick interval of 4 with a step of 3 will draw a tick every 4 steps (every 12 values).
           */

        }, {
          key: "tickInterval",
          get: function get() {
            return this._tickInterval;
          },
          set: function set(value) {
            if (value === 'auto') {
              this._tickInterval = 'auto';
            } else if (typeof value === 'number' || typeof value === 'string') {
              this._tickInterval = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(value, this._tickInterval);
            } else {
              this._tickInterval = 0;
            }
          }
          /** Value of the slider. */

        }, {
          key: "value",
          get: function get() {
            // If the value needs to be read and it is still uninitialized, initialize it to the min.
            if (this._value === null) {
              this.value = this._min;
            }

            return this._value;
          },
          set: function set(v) {
            if (v !== this._value) {
              var value = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceNumberProperty)(v, 0); // While incrementing by a decimal we can end up with values like 33.300000000000004.
              // Truncate it to ensure that it matches the label and to make it easier to work with.

              if (this._roundToDecimal && value !== this.min && value !== this.max) {
                value = parseFloat(value.toFixed(this._roundToDecimal));
              }

              this._value = value;
              this._percent = this._calculatePercentage(this._value); // Since this also modifies the percentage, we need to let the change detection know.

              this._changeDetectorRef.markForCheck();
            }
          }
          /** Whether the slider is vertical. */

        }, {
          key: "vertical",
          get: function get() {
            return this._vertical;
          },
          set: function set(value) {
            this._vertical = (0, _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__.coerceBooleanProperty)(value);
          }
          /** The value to be used for display purposes. */

        }, {
          key: "displayValue",
          get: function get() {
            if (this.displayWith) {
              // Value is never null but since setters and getters cannot have
              // different types, the value getter is also typed to return null.
              return this.displayWith(this.value);
            } // Note that this could be improved further by rounding something like 0.999 to 1 or
            // 0.899 to 0.9, however it is very performance sensitive, because it gets called on
            // every change detection cycle.


            if (this._roundToDecimal && this.value && this.value % 1 !== 0) {
              return this.value.toFixed(this._roundToDecimal);
            }

            return this.value || 0;
          }
          /** set focus to the host element */

        }, {
          key: "focus",
          value: function focus(options) {
            this._focusHostElement(options);
          }
          /** blur the host element */

        }, {
          key: "blur",
          value: function blur() {
            this._blurHostElement();
          }
          /** The percentage of the slider that coincides with the value. */

        }, {
          key: "percent",
          get: function get() {
            return this._clamp(this._percent);
          }
          /**
           * Whether the axis of the slider is inverted.
           * (i.e. whether moving the thumb in the positive x or y direction decreases the slider's value).
           */

        }, {
          key: "_shouldInvertAxis",
          value: function _shouldInvertAxis() {
            // Standard non-inverted mode for a vertical slider should be dragging the thumb from bottom to
            // top. However from a y-axis standpoint this is inverted.
            return this.vertical ? !this.invert : this.invert;
          }
          /** Whether the slider is at its minimum value. */

        }, {
          key: "_isMinValue",
          value: function _isMinValue() {
            return this.percent === 0;
          }
          /**
           * The amount of space to leave between the slider thumb and the track fill & track background
           * elements.
           */

        }, {
          key: "_getThumbGap",
          value: function _getThumbGap() {
            if (this.disabled) {
              return DISABLED_THUMB_GAP;
            }

            if (this._isMinValue() && !this.thumbLabel) {
              return this._isActive ? MIN_VALUE_ACTIVE_THUMB_GAP : MIN_VALUE_NONACTIVE_THUMB_GAP;
            }

            return 0;
          }
          /** CSS styles for the track background element. */

        }, {
          key: "_getTrackBackgroundStyles",
          value: function _getTrackBackgroundStyles() {
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(1 - this.percent, ", 1") : "".concat(1 - this.percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '-' : '';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")")
            };
          }
          /** CSS styles for the track fill element. */

        }, {
          key: "_getTrackFillStyles",
          value: function _getTrackFillStyles() {
            var percent = this.percent;
            var axis = this.vertical ? 'Y' : 'X';
            var scale = this.vertical ? "1, ".concat(percent, ", 1") : "".concat(percent, ", 1, 1");
            var sign = this._shouldInvertMouseCoords() ? '' : '-';
            return {
              // scale3d avoids some rendering issues in Chrome. See #12071.
              transform: "translate".concat(axis, "(").concat(sign).concat(this._getThumbGap(), "px) scale3d(").concat(scale, ")"),
              // iOS Safari has a bug where it won't re-render elements which start of as `scale(0)` until
              // something forces a style recalculation on it. Since we'll end up with `scale(0)` when
              // the value of the slider is 0, we can easily get into this situation. We force a
              // recalculation by changing the element's `display` when it goes from 0 to any other value.
              display: percent === 0 ? 'none' : ''
            };
          }
          /** CSS styles for the ticks container element. */

        }, {
          key: "_getTicksContainerStyles",
          value: function _getTicksContainerStyles() {
            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the ticks container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '' : '-';
            var offset = this._tickIntervalPercent / 2 * 100;
            return {
              'transform': "translate".concat(axis, "(").concat(sign).concat(offset, "%)")
            };
          }
          /** CSS styles for the ticks element. */

        }, {
          key: "_getTicksStyles",
          value: function _getTicksStyles() {
            var tickSize = this._tickIntervalPercent * 100;
            var backgroundSize = this.vertical ? "2px ".concat(tickSize, "%") : "".concat(tickSize, "% 2px");
            var axis = this.vertical ? 'Y' : 'X'; // Depending on the direction we pushed the ticks container, push the ticks the opposite
            // direction to re-center them but clip off the end edge. In RTL languages we need to flip the
            // ticks 180 degrees so we're really cutting off the end edge abd not the start.

            var sign = !this.vertical && this._getDirection() == 'rtl' ? '-' : '';
            var rotate = !this.vertical && this._getDirection() == 'rtl' ? ' rotate(180deg)' : '';
            var styles = {
              'backgroundSize': backgroundSize,
              // Without translateZ ticks sometimes jitter as the slider moves on Chrome & Firefox.
              'transform': "translateZ(0) translate".concat(axis, "(").concat(sign).concat(tickSize / 2, "%)").concat(rotate)
            };

            if (this._isMinValue() && this._getThumbGap()) {
              var shouldInvertAxis = this._shouldInvertAxis();

              var side;

              if (this.vertical) {
                side = shouldInvertAxis ? 'Bottom' : 'Top';
              } else {
                side = shouldInvertAxis ? 'Right' : 'Left';
              }

              styles["padding".concat(side)] = "".concat(this._getThumbGap(), "px");
            }

            return styles;
          }
        }, {
          key: "_getThumbContainerStyles",
          value: function _getThumbContainerStyles() {
            var shouldInvertAxis = this._shouldInvertAxis();

            var axis = this.vertical ? 'Y' : 'X'; // For a horizontal slider in RTL languages we push the thumb container off the left edge
            // instead of the right edge to avoid causing a horizontal scrollbar to appear.

            var invertOffset = this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
            var offset = (invertOffset ? this.percent : 1 - this.percent) * 100;
            return {
              'transform': "translate".concat(axis, "(-").concat(offset, "%)")
            };
          }
          /**
           * Whether mouse events should be converted to a slider position by calculating their distance
           * from the right or bottom edge of the slider as opposed to the top or left.
           */

        }, {
          key: "_shouldInvertMouseCoords",
          value: function _shouldInvertMouseCoords() {
            var shouldInvertAxis = this._shouldInvertAxis();

            return this._getDirection() == 'rtl' && !this.vertical ? !shouldInvertAxis : shouldInvertAxis;
          }
          /** The language direction for this slider element. */

        }, {
          key: "_getDirection",
          value: function _getDirection() {
            return this._dir && this._dir.value == 'rtl' ? 'rtl' : 'ltr';
          }
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            var _this4 = this;

            this._focusMonitor.monitor(this._elementRef, true).subscribe(function (origin) {
              _this4._isActive = !!origin && origin !== 'keyboard';

              _this4._changeDetectorRef.detectChanges();
            });

            if (this._dir) {
              this._dirChangeSubscription = this._dir.change.subscribe(function () {
                _this4._changeDetectorRef.markForCheck();
              });
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            var element = this._elementRef.nativeElement;
            element.removeEventListener('mousedown', this._pointerDown, activeEventOptions);
            element.removeEventListener('touchstart', this._pointerDown, activeEventOptions);
            this._lastPointerEvent = null;

            this._removeGlobalEvents();

            this._focusMonitor.stopMonitoring(this._elementRef);

            this._dirChangeSubscription.unsubscribe();
          }
        }, {
          key: "_onMouseenter",
          value: function _onMouseenter() {
            if (this.disabled) {
              return;
            } // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.


            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onFocus",
          value: function _onFocus() {
            // We save the dimensions of the slider here so we can use them to update the spacing of the
            // ticks and determine where on the slider click and slide events happen.
            this._sliderDimensions = this._getSliderDimensions();

            this._updateTickIntervalPercent();
          }
        }, {
          key: "_onBlur",
          value: function _onBlur() {
            this.onTouched();
          }
        }, {
          key: "_onKeydown",
          value: function _onKeydown(event) {
            if (this.disabled || (0, _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.hasModifierKey)(event) || this._isSliding && this._isSliding !== 'keyboard') {
              return;
            }

            var oldValue = this.value;

            switch (event.keyCode) {
              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.PAGE_UP:
                this._increment(10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.PAGE_DOWN:
                this._increment(-10);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.END:
                this.value = this.max;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.HOME:
                this.value = this.min;
                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.LEFT_ARROW:
                // NOTE: For a sighted user it would make more sense that when they press an arrow key on an
                // inverted slider the thumb moves in that direction. However for a blind user, nothing
                // about the slider indicates that it is inverted. They will expect left to be decrement,
                // regardless of how it appears on the screen. For speakers ofRTL languages, they probably
                // expect left to mean increment. Therefore we flip the meaning of the side arrow keys for
                // RTL. For inverted sliders we prefer a good a11y experience to having it "look right" for
                // sighted users, therefore we do not swap the meaning.
                this._increment(this._getDirection() == 'rtl' ? 1 : -1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.UP_ARROW:
                this._increment(1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.RIGHT_ARROW:
                // See comment on LEFT_ARROW about the conditions under which we flip the meaning.
                this._increment(this._getDirection() == 'rtl' ? -1 : 1);

                break;

              case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_6__.DOWN_ARROW:
                this._increment(-1);

                break;

              default:
                // Return if the key is not one that we explicitly handle to avoid calling preventDefault on
                // it.
                return;
            }

            if (oldValue != this.value) {
              this._emitInputEvent();

              this._emitChangeEvent();
            }

            this._isSliding = 'keyboard';
            event.preventDefault();
          }
        }, {
          key: "_onKeyup",
          value: function _onKeyup() {
            if (this._isSliding === 'keyboard') {
              this._isSliding = null;
            }
          }
          /** Use defaultView of injected document if available or fallback to global window reference */

        }, {
          key: "_getWindow",
          value: function _getWindow() {
            return this._document.defaultView || window;
          }
          /**
           * Binds our global move and end events. They're bound at the document level and only while
           * dragging so that the user doesn't have to keep their pointer exactly over the slider
           * as they're swiping across the screen.
           */

        }, {
          key: "_bindGlobalEvents",
          value: function _bindGlobalEvents(triggerEvent) {
            // Note that we bind the events to the `document`, because it allows us to capture
            // drag cancel events where the user's pointer is outside the browser window.
            var document = this._document;
            var isTouch = isTouchEvent(triggerEvent);
            var moveEventName = isTouch ? 'touchmove' : 'mousemove';
            var endEventName = isTouch ? 'touchend' : 'mouseup';
            document.addEventListener(moveEventName, this._pointerMove, activeEventOptions);
            document.addEventListener(endEventName, this._pointerUp, activeEventOptions);

            if (isTouch) {
              document.addEventListener('touchcancel', this._pointerUp, activeEventOptions);
            }

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.addEventListener('blur', this._windowBlur);
            }
          }
          /** Removes any global event listeners that we may have added. */

        }, {
          key: "_removeGlobalEvents",
          value: function _removeGlobalEvents() {
            var document = this._document;
            document.removeEventListener('mousemove', this._pointerMove, activeEventOptions);
            document.removeEventListener('mouseup', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchmove', this._pointerMove, activeEventOptions);
            document.removeEventListener('touchend', this._pointerUp, activeEventOptions);
            document.removeEventListener('touchcancel', this._pointerUp, activeEventOptions);

            var window = this._getWindow();

            if (typeof window !== 'undefined' && window) {
              window.removeEventListener('blur', this._windowBlur);
            }
          }
          /** Increments the slider by the given number of steps (negative number decrements). */

        }, {
          key: "_increment",
          value: function _increment(numSteps) {
            this.value = this._clamp((this.value || 0) + this.step * numSteps, this.min, this.max);
          }
          /** Calculate the new value from the new physical location. The value will always be snapped. */

        }, {
          key: "_updateValueFromPosition",
          value: function _updateValueFromPosition(pos) {
            if (!this._sliderDimensions) {
              return;
            }

            var offset = this.vertical ? this._sliderDimensions.top : this._sliderDimensions.left;
            var size = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
            var posComponent = this.vertical ? pos.y : pos.x; // The exact value is calculated from the event and used to find the closest snap value.

            var percent = this._clamp((posComponent - offset) / size);

            if (this._shouldInvertMouseCoords()) {
              percent = 1 - percent;
            } // Since the steps may not divide cleanly into the max value, if the user
            // slid to 0 or 100 percent, we jump to the min/max value. This approach
            // is slightly more intuitive than using `Math.ceil` below, because it
            // follows the user's pointer closer.


            if (percent === 0) {
              this.value = this.min;
            } else if (percent === 1) {
              this.value = this.max;
            } else {
              var exactValue = this._calculateValue(percent); // This calculation finds the closest step by finding the closest
              // whole number divisible by the step relative to the min.


              var closestValue = Math.round((exactValue - this.min) / this.step) * this.step + this.min; // The value needs to snap to the min and max.

              this.value = this._clamp(closestValue, this.min, this.max);
            }
          }
          /** Emits a change event if the current value is different from the last emitted value. */

        }, {
          key: "_emitChangeEvent",
          value: function _emitChangeEvent() {
            this._controlValueAccessorChangeFn(this.value);

            this.valueChange.emit(this.value);
            this.change.emit(this._createChangeEvent());
          }
          /** Emits an input event when the current value is different from the last emitted value. */

        }, {
          key: "_emitInputEvent",
          value: function _emitInputEvent() {
            this.input.emit(this._createChangeEvent());
          }
          /** Updates the amount of space between ticks as a percentage of the width of the slider. */

        }, {
          key: "_updateTickIntervalPercent",
          value: function _updateTickIntervalPercent() {
            if (!this.tickInterval || !this._sliderDimensions) {
              return;
            }

            if (this.tickInterval == 'auto') {
              var trackSize = this.vertical ? this._sliderDimensions.height : this._sliderDimensions.width;
              var pixelsPerStep = trackSize * this.step / (this.max - this.min);
              var stepsPerTick = Math.ceil(MIN_AUTO_TICK_SEPARATION / pixelsPerStep);
              var pixelsPerTick = stepsPerTick * this.step;
              this._tickIntervalPercent = pixelsPerTick / trackSize;
            } else {
              this._tickIntervalPercent = this.tickInterval * this.step / (this.max - this.min);
            }
          }
          /** Creates a slider change object from the specified value. */

        }, {
          key: "_createChangeEvent",
          value: function _createChangeEvent() {
            var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.value;
            var event = new _MatSliderChange();
            event.source = this;
            event.value = value;
            return event;
          }
          /** Calculates the percentage of the slider that a value is. */

        }, {
          key: "_calculatePercentage",
          value: function _calculatePercentage(value) {
            return ((value || 0) - this.min) / (this.max - this.min);
          }
          /** Calculates the value a percentage of the slider corresponds to. */

        }, {
          key: "_calculateValue",
          value: function _calculateValue(percentage) {
            return this.min + percentage * (this.max - this.min);
          }
          /** Return a number between two numbers. */

        }, {
          key: "_clamp",
          value: function _clamp(value) {
            var min = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var max = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
            return Math.max(min, Math.min(value, max));
          }
          /**
           * Get the bounding client rect of the slider track element.
           * The track is used rather than the native element to ignore the extra space that the thumb can
           * take up.
           */

        }, {
          key: "_getSliderDimensions",
          value: function _getSliderDimensions() {
            return this._sliderWrapper ? this._sliderWrapper.nativeElement.getBoundingClientRect() : null;
          }
          /**
           * Focuses the native element.
           * Currently only used to allow a blur event to fire but will be used with keyboard input later.
           */

        }, {
          key: "_focusHostElement",
          value: function _focusHostElement(options) {
            this._elementRef.nativeElement.focus(options);
          }
          /** Blurs the native element. */

        }, {
          key: "_blurHostElement",
          value: function _blurHostElement() {
            this._elementRef.nativeElement.blur();
          }
          /**
           * Sets the model value. Implemented as part of ControlValueAccessor.
           * @param value
           */

        }, {
          key: "writeValue",
          value: function writeValue(value) {
            this.value = value;
          }
          /**
           * Registers a callback to be triggered when the value has changed.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnChange",
          value: function registerOnChange(fn) {
            this._controlValueAccessorChangeFn = fn;
          }
          /**
           * Registers a callback to be triggered when the component is touched.
           * Implemented as part of ControlValueAccessor.
           * @param fn Callback to be registered.
           */

        }, {
          key: "registerOnTouched",
          value: function registerOnTouched(fn) {
            this.onTouched = fn;
          }
          /**
           * Sets whether the component should be disabled.
           * Implemented as part of ControlValueAccessor.
           * @param isDisabled
           */

        }, {
          key: "setDisabledState",
          value: function setDisabledState(isDisabled) {
            this.disabled = isDisabled;
          }
        }]);

        return _MatSlider;
      }(_MatSliderBase);

      _MatSlider.ɵfac = function MatSlider_Factory(t) {
        return new (t || _MatSlider)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality, 8), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinjectAttribute"]('tabindex'), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE, 8));
      };

      _MatSlider.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({
        type: _MatSlider,
        selectors: [["mat-slider"]],
        viewQuery: function MatSlider_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵviewQuery"](_c0, 5);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx._sliderWrapper = _t.first);
          }
        },
        hostAttrs: ["role", "slider", 1, "mat-slider", "mat-focus-indicator"],
        hostVars: 29,
        hostBindings: function MatSlider_HostBindings(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("focus", function MatSlider_focus_HostBindingHandler() {
              return ctx._onFocus();
            })("blur", function MatSlider_blur_HostBindingHandler() {
              return ctx._onBlur();
            })("keydown", function MatSlider_keydown_HostBindingHandler($event) {
              return ctx._onKeydown($event);
            })("keyup", function MatSlider_keyup_HostBindingHandler() {
              return ctx._onKeyup();
            })("mouseenter", function MatSlider_mouseenter_HostBindingHandler() {
              return ctx._onMouseenter();
            })("selectstart", function MatSlider_selectstart_HostBindingHandler($event) {
              return $event.preventDefault();
            });
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵhostProperty"]("tabIndex", ctx.tabIndex);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵattribute"]("aria-disabled", ctx.disabled)("aria-valuemax", ctx.max)("aria-valuemin", ctx.min)("aria-valuenow", ctx.value)("aria-valuetext", ctx.valueText == null ? ctx.displayValue : ctx.valueText)("aria-orientation", ctx.vertical ? "vertical" : "horizontal");

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵclassProp"]("mat-slider-disabled", ctx.disabled)("mat-slider-has-ticks", ctx.tickInterval)("mat-slider-horizontal", !ctx.vertical)("mat-slider-axis-inverted", ctx._shouldInvertAxis())("mat-slider-invert-mouse-coords", ctx._shouldInvertMouseCoords())("mat-slider-sliding", ctx._isSliding)("mat-slider-thumb-label-showing", ctx.thumbLabel)("mat-slider-vertical", ctx.vertical)("mat-slider-min-value", ctx._isMinValue())("mat-slider-hide-last-tick", ctx.disabled || ctx._isMinValue() && ctx._getThumbGap() && ctx._shouldInvertAxis())("_mat-animation-noopable", ctx._animationMode === "NoopAnimations");
          }
        },
        inputs: {
          disabled: "disabled",
          color: "color",
          tabIndex: "tabIndex",
          invert: "invert",
          max: "max",
          min: "min",
          step: "step",
          thumbLabel: "thumbLabel",
          tickInterval: "tickInterval",
          value: "value",
          vertical: "vertical",
          displayWith: "displayWith",
          valueText: "valueText"
        },
        outputs: {
          change: "change",
          input: "input",
          valueChange: "valueChange"
        },
        exportAs: ["matSlider"],
        features: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵProvidersFeature"]([_MAT_SLIDER_VALUE_ACCESSOR]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵInheritDefinitionFeature"]],
        decls: 13,
        vars: 6,
        consts: [[1, "mat-slider-wrapper"], ["sliderWrapper", ""], [1, "mat-slider-track-wrapper"], [1, "mat-slider-track-background", 3, "ngStyle"], [1, "mat-slider-track-fill", 3, "ngStyle"], [1, "mat-slider-ticks-container", 3, "ngStyle"], [1, "mat-slider-ticks", 3, "ngStyle"], [1, "mat-slider-thumb-container", 3, "ngStyle"], [1, "mat-slider-focus-ring"], [1, "mat-slider-thumb"], [1, "mat-slider-thumb-label"], [1, "mat-slider-thumb-label-text"]],
        template: function MatSlider_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](7, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](8, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](9, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "span", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTrackBackgroundStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTrackFillStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTicksContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getTicksStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngStyle", ctx._getThumbContainerStyles());

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtextInterpolate"](ctx.displayValue);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.NgStyle],
        styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{-webkit-print-color-adjust:exact;color-adjust:exact;position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{-webkit-background-clip:content-box;background-clip:content-box;background-repeat:repeat;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"],
        encapsulation: 2,
        changeDetection: 0
      });

      _MatSlider.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
            args: ['tabindex']
          }]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
          }]
        }, {
          type: String,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
            args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE]
          }]
        }];
      };

      _MatSlider.propDecorators = {
        invert: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        max: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        min: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        step: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        thumbLabel: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        tickInterval: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        displayWith: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        valueText: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        vertical: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
        }],
        change: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        input: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        valueChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
        }],
        _sliderWrapper: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: ['sliderWrapper']
        }]
      };

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatSlider, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component,
          args: [{
            selector: 'mat-slider',
            exportAs: 'matSlider',
            providers: [_MAT_SLIDER_VALUE_ACCESSOR],
            host: {
              '(focus)': '_onFocus()',
              '(blur)': '_onBlur()',
              '(keydown)': '_onKeydown($event)',
              '(keyup)': '_onKeyup()',
              '(mouseenter)': '_onMouseenter()',
              // On Safari starting to slide temporarily triggers text selection mode which
              // show the wrong cursor. We prevent it by stopping the `selectstart` event.
              '(selectstart)': '$event.preventDefault()',
              'class': 'mat-slider mat-focus-indicator',
              'role': 'slider',
              '[tabIndex]': 'tabIndex',
              '[attr.aria-disabled]': 'disabled',
              '[attr.aria-valuemax]': 'max',
              '[attr.aria-valuemin]': 'min',
              '[attr.aria-valuenow]': 'value',
              // NVDA and Jaws appear to announce the `aria-valuenow` by calculating its percentage based
              // on its value between `aria-valuemin` and `aria-valuemax`. Due to how decimals are handled,
              // it can cause the slider to read out a very long value like 0.20000068 if the current value
              // is 0.2 with a min of 0 and max of 1. We work around the issue by setting `aria-valuetext`
              // to the same value that we set on the slider's thumb which will be truncated.
              '[attr.aria-valuetext]': 'valueText == null ? displayValue : valueText',
              '[attr.aria-orientation]': 'vertical ? "vertical" : "horizontal"',
              '[class.mat-slider-disabled]': 'disabled',
              '[class.mat-slider-has-ticks]': 'tickInterval',
              '[class.mat-slider-horizontal]': '!vertical',
              '[class.mat-slider-axis-inverted]': '_shouldInvertAxis()',
              // Class binding which is only used by the test harness as there is no other
              // way for the harness to detect if mouse coordinates need to be inverted.
              '[class.mat-slider-invert-mouse-coords]': '_shouldInvertMouseCoords()',
              '[class.mat-slider-sliding]': '_isSliding',
              '[class.mat-slider-thumb-label-showing]': 'thumbLabel',
              '[class.mat-slider-vertical]': 'vertical',
              '[class.mat-slider-min-value]': '_isMinValue()',
              '[class.mat-slider-hide-last-tick]': 'disabled || _isMinValue() && _getThumbGap() && _shouldInvertAxis()',
              '[class._mat-animation-noopable]': '_animationMode === "NoopAnimations"'
            },
            template: "<div class=\"mat-slider-wrapper\" #sliderWrapper>\n  <div class=\"mat-slider-track-wrapper\">\n    <div class=\"mat-slider-track-background\" [ngStyle]=\"_getTrackBackgroundStyles()\"></div>\n    <div class=\"mat-slider-track-fill\" [ngStyle]=\"_getTrackFillStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-ticks-container\" [ngStyle]=\"_getTicksContainerStyles()\">\n    <div class=\"mat-slider-ticks\" [ngStyle]=\"_getTicksStyles()\"></div>\n  </div>\n  <div class=\"mat-slider-thumb-container\" [ngStyle]=\"_getThumbContainerStyles()\">\n    <div class=\"mat-slider-focus-ring\"></div>\n    <div class=\"mat-slider-thumb\"></div>\n    <div class=\"mat-slider-thumb-label\">\n      <span class=\"mat-slider-thumb-label-text\">{{displayValue}}</span>\n    </div>\n  </div>\n</div>\n",
            inputs: ['disabled', 'color', 'tabIndex'],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewEncapsulation.None,
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectionStrategy.OnPush,
            styles: [".mat-slider{display:inline-block;position:relative;box-sizing:border-box;padding:8px;outline:none;vertical-align:middle}.mat-slider:not(.mat-slider-disabled):active,.mat-slider.mat-slider-sliding:not(.mat-slider-disabled){cursor:-webkit-grabbing;cursor:grabbing}.mat-slider-wrapper{-webkit-print-color-adjust:exact;color-adjust:exact;position:absolute}.mat-slider-track-wrapper{position:absolute;top:0;left:0;overflow:hidden}.mat-slider-track-fill{position:absolute;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-track-background{position:absolute;transform-origin:100% 100%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-ticks-container{position:absolute;left:0;top:0;overflow:hidden}.mat-slider-ticks{-webkit-background-clip:content-box;background-clip:content-box;background-repeat:repeat;box-sizing:border-box;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-container{position:absolute;z-index:1;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-focus-ring{position:absolute;width:30px;height:30px;border-radius:50%;transform:scale(0);opacity:0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider.cdk-keyboard-focused .mat-slider-focus-ring,.mat-slider.cdk-program-focused .mat-slider-focus-ring{transform:scale(1);opacity:1}.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb-label,.mat-slider:not(.mat-slider-disabled):not(.mat-slider-sliding) .mat-slider-thumb{cursor:-webkit-grab;cursor:grab}.mat-slider-thumb{position:absolute;right:-10px;bottom:-10px;box-sizing:border-box;width:20px;height:20px;border:3px solid transparent;border-radius:50%;transform:scale(0.7);transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-thumb-label{display:none;align-items:center;justify-content:center;position:absolute;width:28px;height:28px;border-radius:50%;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),border-radius 400ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.cdk-high-contrast-active .mat-slider-thumb-label{outline:solid 1px}.mat-slider-thumb-label-text{z-index:1;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-sliding .mat-slider-track-fill,.mat-slider-sliding .mat-slider-track-background,.mat-slider-sliding .mat-slider-thumb-container{transition-duration:0ms}.mat-slider-has-ticks .mat-slider-wrapper::after{content:\"\";position:absolute;border-width:0;border-style:solid;opacity:0;transition:opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after,.mat-slider-has-ticks:hover:not(.mat-slider-hide-last-tick) .mat-slider-wrapper::after{opacity:1}.mat-slider-has-ticks.cdk-focused:not(.mat-slider-disabled) .mat-slider-ticks,.mat-slider-has-ticks:hover:not(.mat-slider-disabled) .mat-slider-ticks{opacity:1}.mat-slider-thumb-label-showing .mat-slider-focus-ring{display:none}.mat-slider-thumb-label-showing .mat-slider-thumb-label{display:flex}.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:100% 100%}.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:0 0}.mat-slider:not(.mat-slider-disabled).cdk-focused.mat-slider-thumb-label-showing .mat-slider-thumb{transform:scale(0)}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label{border-radius:50% 50% 0}.mat-slider:not(.mat-slider-disabled).cdk-focused .mat-slider-thumb-label-text{opacity:1}.mat-slider:not(.mat-slider-disabled).cdk-mouse-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-touch-focused .mat-slider-thumb,.mat-slider:not(.mat-slider-disabled).cdk-program-focused .mat-slider-thumb{border-width:2px;transform:scale(1)}.mat-slider-disabled .mat-slider-focus-ring{transform:scale(0);opacity:0}.mat-slider-disabled .mat-slider-thumb{border-width:4px;transform:scale(0.5)}.mat-slider-disabled .mat-slider-thumb-label{display:none}.mat-slider-horizontal{height:48px;min-width:128px}.mat-slider-horizontal .mat-slider-wrapper{height:2px;top:23px;left:8px;right:8px}.mat-slider-horizontal .mat-slider-wrapper::after{height:2px;border-left-width:2px;right:0;top:0}.mat-slider-horizontal .mat-slider-track-wrapper{height:2px;width:100%}.mat-slider-horizontal .mat-slider-track-fill{height:2px;width:100%;transform:scaleX(0)}.mat-slider-horizontal .mat-slider-track-background{height:2px;width:100%;transform:scaleX(1)}.mat-slider-horizontal .mat-slider-ticks-container{height:2px;width:100%}.cdk-high-contrast-active .mat-slider-horizontal .mat-slider-ticks-container{height:0;outline:solid 2px;top:1px}.mat-slider-horizontal .mat-slider-ticks{height:2px;width:100%}.mat-slider-horizontal .mat-slider-thumb-container{width:100%;height:0;top:50%}.mat-slider-horizontal .mat-slider-focus-ring{top:-15px;right:-15px}.mat-slider-horizontal .mat-slider-thumb-label{right:-14px;top:-40px;transform:translateY(26px) scale(0.01) rotate(45deg)}.mat-slider-horizontal .mat-slider-thumb-label-text{transform:rotate(-45deg)}.mat-slider-horizontal.cdk-focused .mat-slider-thumb-label{transform:rotate(45deg)}.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label,.cdk-high-contrast-active .mat-slider-horizontal.cdk-focused .mat-slider-thumb-label-text{transform:none}.mat-slider-vertical{width:48px;min-height:128px}.mat-slider-vertical .mat-slider-wrapper{width:2px;top:8px;bottom:8px;left:23px}.mat-slider-vertical .mat-slider-wrapper::after{width:2px;border-top-width:2px;bottom:0;left:0}.mat-slider-vertical .mat-slider-track-wrapper{height:100%;width:2px}.mat-slider-vertical .mat-slider-track-fill{height:100%;width:2px;transform:scaleY(0)}.mat-slider-vertical .mat-slider-track-background{height:100%;width:2px;transform:scaleY(1)}.mat-slider-vertical .mat-slider-ticks-container{width:2px;height:100%}.cdk-high-contrast-active .mat-slider-vertical .mat-slider-ticks-container{width:0;outline:solid 2px;left:1px}.mat-slider-vertical .mat-slider-focus-ring{bottom:-15px;left:-15px}.mat-slider-vertical .mat-slider-ticks{width:2px;height:100%}.mat-slider-vertical .mat-slider-thumb-container{height:100%;width:0;left:50%}.mat-slider-vertical .mat-slider-thumb{-webkit-backface-visibility:hidden;backface-visibility:hidden}.mat-slider-vertical .mat-slider-thumb-label{bottom:-14px;left:-40px;transform:translateX(26px) scale(0.01) rotate(-45deg)}.mat-slider-vertical .mat-slider-thumb-label-text{transform:rotate(45deg)}.mat-slider-vertical.cdk-focused .mat-slider-thumb-label{transform:rotate(-45deg)}[dir=rtl] .mat-slider-wrapper::after{left:0;right:auto}[dir=rtl] .mat-slider-horizontal .mat-slider-track-fill{transform-origin:100% 100%}[dir=rtl] .mat-slider-horizontal .mat-slider-track-background{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-fill{transform-origin:0 0}[dir=rtl] .mat-slider-horizontal.mat-slider-axis-inverted .mat-slider-track-background{transform-origin:100% 100%}.mat-slider._mat-animation-noopable .mat-slider-track-fill,.mat-slider._mat-animation-noopable .mat-slider-track-background,.mat-slider._mat-animation-noopable .mat-slider-ticks,.mat-slider._mat-animation-noopable .mat-slider-thumb-container,.mat-slider._mat-animation-noopable .mat-slider-focus-ring,.mat-slider._mat-animation-noopable .mat-slider-thumb,.mat-slider._mat-animation-noopable .mat-slider-thumb-label,.mat-slider._mat-animation-noopable .mat-slider-thumb-label-text,.mat-slider._mat-animation-noopable .mat-slider-has-ticks .mat-slider-wrapper::after{transition:none}\n"]
          }]
        }], function () {
          return [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ElementRef
          }, {
            type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_7__.FocusMonitor
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ChangeDetectorRef
          }, {
            type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_8__.Directionality,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Attribute,
              args: ['tabindex']
            }]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgZone
          }, {
            type: undefined,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.DOCUMENT]
            }]
          }, {
            type: String,
            decorators: [{
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Optional
            }, {
              type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Inject,
              args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__.ANIMATION_MODULE_TYPE]
            }]
          }];
        }, {
          change: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          input: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          valueChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Output
          }],
          invert: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          max: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          min: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          step: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          thumbLabel: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          tickInterval: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          value: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          vertical: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          displayWith: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          valueText: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.Input
          }],
          _sliderWrapper: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
            args: ['sliderWrapper']
          }]
        });
      })();
      /** Returns whether an event is a touch event. */


      function isTouchEvent(event) {
        // This function is called for every pixel that the user has dragged so we need it to be
        // as fast as possible. Since we only bind mouse events and touch events, we can assume
        // that if the event's name starts with `t`, it's a touch event.
        return event.type[0] === 't';
      }
      /** Gets the coordinates of a touch or mouse event relative to the viewport. */


      function getPointerPositionOnPage(event, id) {
        var point;

        if (isTouchEvent(event)) {
          // The `identifier` could be undefined if the browser doesn't support `TouchEvent.identifier`.
          // If that's the case, attribute the first touch to all active sliders. This should still cover
          // the most common case while only breaking multi-touch.
          if (typeof id === 'number') {
            point = findMatchingTouch(event.touches, id) || findMatchingTouch(event.changedTouches, id);
          } else {
            // `touches` will be empty for start/end events so we have to fall back to `changedTouches`.
            point = event.touches[0] || event.changedTouches[0];
          }
        } else {
          point = event;
        }

        return point ? {
          x: point.clientX,
          y: point.clientY
        } : undefined;
      }
      /** Finds a `Touch` with a specific ID in a `TouchList`. */


      function findMatchingTouch(touches, id) {
        for (var i = 0; i < touches.length; i++) {
          if (touches[i].identifier === id) {
            return touches[i];
          }
        }

        return undefined;
      }
      /** Gets the unique ID of a touch that matches a specific slider. */


      function getTouchIdForSlider(event, sliderHost) {
        for (var i = 0; i < event.touches.length; i++) {
          var target = event.touches[i].target;

          if (sliderHost === target || sliderHost.contains(target)) {
            return event.touches[i].identifier;
          }
        }

        return undefined;
      }
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */


      var _MatSliderModule = /*#__PURE__*/_createClass(function _MatSliderModule() {
        _classCallCheck(this, _MatSliderModule);
      });

      _MatSliderModule.ɵfac = function MatSliderModule_Factory(t) {
        return new (t || _MatSliderModule)();
      };

      _MatSliderModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: _MatSliderModule
      });
      _MatSliderModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](_MatSliderModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule,
          args: [{
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
            exports: [_MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule],
            declarations: [_MatSlider]
          }]
        }], null, null);
      })();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](_MatSliderModule, {
          declarations: function declarations() {
            return [_MatSlider];
          },
          imports: function imports() {
            return [_angular_common__WEBPACK_IMPORTED_MODULE_9__.CommonModule, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule];
          },
          exports: function exports() {
            return [_MatSlider, _angular_material_core__WEBPACK_IMPORTED_MODULE_3__.MatCommonModule];
          }
        });
      })();
      /**
       * @license
       * Copyright Google LLC All Rights Reserved.
       *
       * Use of this source code is governed by an MIT-style license that can be
       * found in the LICENSE file at https://angular.io/license
       */

      /**
       * Generated bundle index. Do not edit.
       */

      /***/

    },

    /***/
    53018:
    /*!**************************************************************************!*\
      !*** ./src/app/modules/repair/booking-journal/booking-journal.module.ts ***!
      \**************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookingJournalModule": function BookingJournalModule() {
          return (
            /* binding */
            _BookingJournalModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/material/menu */
      80221);
      /* harmony import */


      var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/material/sidenav */
      86608);
      /* harmony import */


      var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/material/slide-toggle */
      32080);
      /* harmony import */


      var _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @angular/material/slider */
      53616);
      /* harmony import */


      var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! @angular/material/tooltip */
      50298);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! devextreme-angular */
      20330);
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! devextreme-angular */
      55643);
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! devextreme-angular */
      38757);
      /* harmony import */


      var devextreme_angular__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! devextreme-angular */
      79561);
      /* harmony import */


      var devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! devextreme-angular/ui/nested */
      83203);
      /* harmony import */


      var src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/helper/directive.module */
      20363);
      /* harmony import */


      var src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/icons.module */
      25852);
      /* harmony import */


      var src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/app/resolvers/versionControl.resolver */
      74743);
      /* harmony import */


      var src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! src/app/widgets/chq-widgets.module */
      85510);
      /* harmony import */


      var _booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./booking-journal/booking-journal.component */
      11121);
      /* harmony import */


      var _booking_message_booking_message_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./booking-message/booking-message.component */
      13224);
      /* harmony import */


      var _booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./booking-preview/booking-preview.component */
      72994);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var casesRoutes = [{
        path: '',
        component: _booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__.BookingJournalComponent,
        resolve: {
          version: src_app_resolvers_versionControl_resolver__WEBPACK_IMPORTED_MODULE_2__.VersionControlResolver
        }
      }];

      var _BookingJournalModule = /*#__PURE__*/_createClass(function _BookingJournalModule() {
        _classCallCheck(this, _BookingJournalModule);
      });

      _BookingJournalModule.ɵfac = function BookingJournalModule_Factory(t) {
        return new (t || _BookingJournalModule)();
      };

      _BookingJournalModule.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
        type: _BookingJournalModule
      });
      _BookingJournalModule.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
        providers: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_8__.CurrencyPipe],
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forChild(casesRoutes), _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxSchedulerModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxTemplateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxDraggableModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DxScrollViewModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_17__.DxoScrollingModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__.MatSliderModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggleModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵsetNgModuleScope"](_BookingJournalModule, {
          declarations: [_booking_journal_booking_journal_component__WEBPACK_IMPORTED_MODULE_4__.BookingJournalComponent, _booking_preview_booking_preview_component__WEBPACK_IMPORTED_MODULE_6__.BookingPreviewComponent, _booking_message_booking_message_component__WEBPACK_IMPORTED_MODULE_5__.BookingMessageComponent],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule, _angular_material_icon__WEBPACK_IMPORTED_MODULE_10__.MatIconModule, src_app_icons_module__WEBPACK_IMPORTED_MODULE_1__.IconsModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule, _angular_material_menu__WEBPACK_IMPORTED_MODULE_12__.MatMenuModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_13__.DxSchedulerModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_14__.DxTemplateModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_15__.DxDraggableModule, devextreme_angular__WEBPACK_IMPORTED_MODULE_16__.DxScrollViewModule, devextreme_angular_ui_nested__WEBPACK_IMPORTED_MODULE_17__.DxoScrollingModule, src_app_widgets_chq_widgets_module__WEBPACK_IMPORTED_MODULE_3__.WidgetsModule, _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_18__.MatSidenavModule, _angular_material_slider__WEBPACK_IMPORTED_MODULE_19__.MatSliderModule, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__.MatDialogModule, _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_21__.MatSlideToggleModule, _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_22__.MatTooltipModule, _ngx_translate_core__WEBPACK_IMPORTED_MODULE_23__.TranslateModule, src_app_helper_directive_module__WEBPACK_IMPORTED_MODULE_0__.DirectiveModule]
        });
      })();
      /***/

    },

    /***/
    13224:
    /*!*********************************************************************************************!*\
      !*** ./src/app/modules/repair/booking-journal/booking-message/booking-message.component.ts ***!
      \*********************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "BookingMessageComponent": function BookingMessageComponent() {
          return (
            /* binding */
            _BookingMessageComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/dialog */
      22213);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! src/app/services/common/common.service */
      69763);
      /* harmony import */


      var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/icon */
      52529);
      /* harmony import */


      var _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../../../widgets/chq-input/chq-input.component */
      90082);
      /* harmony import */


      var _widgets_chq_rich_text_editor_chq_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../../widgets/chq-rich-text-editor/chq-rich-text-editor.component */
      19245);
      /* harmony import */


      var _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../../../widgets/chq-button/chq-button.component */
      36978);
      /* harmony import */


      var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ngx-translate/core */
      70325);

      var _BookingMessageComponent = /*#__PURE__*/function () {
        function _BookingMessageComponent(dialogRef, data, formBuilder, commonService) {
          _classCallCheck(this, _BookingMessageComponent);

          this.dialogRef = dialogRef;
          this.data = data;
          this.formBuilder = formBuilder;
          this.commonService = commonService;
          this.messageForm = this.formBuilder.group({
            Type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            Email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            Subject: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required],
            Message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__.Validators.required]
          });
          this.messageModal = [{
            placeHolder: 'Type',
            name: 'Type',
            label: 'type',
            value: '',
            type: 'radio',
            options: [{
              label: 'Insurance',
              value: 'Insurance',
              checked: false
            }, {
              label: 'Driver',
              value: 'Driver',
              checked: false
            }]
          }, {
            placeHolder: 'Email Address',
            label: 'email_address',
            name: 'Email',
            value: '',
            type: 'text',
            suffix: 'CC BCC'
          }, {
            placeHolder: 'Subject',
            name: 'Subject',
            label: 'subject',
            value: '',
            type: 'text'
          }, {
            placeHolder: 'Message',
            name: 'Message',
            label: 'message',
            value: '',
            type: 'textarea'
          }];
          this.attachmentButton = {
            label: 'add_attachment',
            type: 'outline',
            icon: 'attachment',
            iconColor: 'black'
          };
          this.sendButton = {
            label: 'send',
            type: this.messageForm.valid ? 'primary' : 'disabled',
            icon: 'send',
            iconColor: 'white'
          };
        }

        _createClass(_BookingMessageComponent, [{
          key: "onFormUpdate",
          value: function onFormUpdate(output) {
            this.messageForm.get(output.name).setValue(output.value);
          }
        }, {
          key: "onSubmit",
          value: function onSubmit() {
            console.log(this.messageForm);
          }
        }]);

        return _BookingMessageComponent;
      }();

      _BookingMessageComponent.ɵfac = function BookingMessageComponent_Factory(t) {
        return new (t || _BookingMessageComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogRef), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MAT_DIALOG_DATA), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormBuilder), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](src_app_services_common_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
      };

      _BookingMessageComponent.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({
        type: _BookingMessageComponent,
        selectors: [["chr-booking-message"]],
        decls: 38,
        vars: 20,
        consts: [[1, "booking-message-dialog", "dialog-with-header"], [1, "header"], [1, "title"], [1, "action"], ["color", "white", 3, "svgIcon", "mat-dialog-close"], [1, "mat-typography"], [1, "booking-message-wrapper"], [1, "form-container", 3, "formGroup"], [1, "row"], [1, "col-12"], [1, "info"], [1, "radio-label"], [3, "inputModel", "controlOutput"], [1, "col-12", "email"], [1, "input-wrapper", "input-text"], [1, "input-label"], [3, "height", "initialValue", "currentValue"], [1, "footer"], [3, "buttonModel", "click"]],
        template: function BookingMessageComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](4, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "button");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](7, "mat-icon", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "mat-dialog-content", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](10, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](12, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "label", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](15, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](16, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](18, "label", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](20, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "chq-input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function BookingMessageComponent_Template_chq_input_controlOutput_21_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](22, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](24, "chq-input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function BookingMessageComponent_Template_chq_input_controlOutput_24_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](26, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "chq-input", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("controlOutput", function BookingMessageComponent_Template_chq_input_controlOutput_27_listener($event) {
              return ctx.onFormUpdate($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](28, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](30, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "label", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipe"](33, "translate");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](34, "chq-rich-text-editor", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("currentValue", function BookingMessageComponent_Template_chq_rich_text_editor_currentValue_34_listener($event) {
              return $event.value;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](35, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](36, "chq-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingMessageComponent_Template_chq_button_click_36_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](37, "chq-button", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function BookingMessageComponent_Template_chq_button_click_37_listener() {
              return ctx.onSubmit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](4, 12, "send_email"), " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("svgIcon", "cross");

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("formGroup", ctx.messageForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](15, 14, "email_message"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](20, 16, "type"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.messageModal[0]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.messageModal[1]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("inputModel", ctx.messageModal[2]);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpipeBind1"](33, 18, "message"));

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("height", 200);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.attachmentButton);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("buttonModel", ctx.sendButton);
          }
        },
        directives: [_angular_material_icon__WEBPACK_IMPORTED_MODULE_7__.MatIcon, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogClose, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__.MatDialogContent, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵNgNoValidate"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__.NgControlStatusGroup, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormGroupDirective, _widgets_chq_input_chq_input_component__WEBPACK_IMPORTED_MODULE_1__.ChqInputComponent, _widgets_chq_rich_text_editor_chq_rich_text_editor_component__WEBPACK_IMPORTED_MODULE_2__.ChqRichTextEditorComponent, _widgets_chq_button_chq_button_component__WEBPACK_IMPORTED_MODULE_3__.ChqButtonComponent],
        pipes: [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__.TranslatePipe],
        styles: [".booking-message-dialog[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  background: var(--xa-popup-light-gray);\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  color: var(--xa-black);\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 10px;\n  background: var(--xa-black);\n  border-radius: 50%;\n  height: 36px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .header[_ngcontent-%COMP%]   .action[_ngcontent-%COMP%]   button[_ngcontent-%COMP%]   .mat-icon[_ngcontent-%COMP%] {\n  height: 16px;\n  width: 16px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: flex-start;\n  padding: 16px 25px;\n  grid-gap: 25px;\n  gap: 25px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .booking-message-action[_ngcontent-%COMP%] {\n  display: flex;\n  flex: 1 1 140px;\n  flex-direction: column;\n  align-items: flex-start;\n  grid-gap: 10px;\n  gap: 10px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  height: 18px;\n  width: 18px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex: 1 1 auto;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  font-weight: 500;\n  font-size: 12px;\n  line-height: 14px;\n  color: var(--xa-black-dark);\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .booking-message-wrapper[_ngcontent-%COMP%]   .form-container[_ngcontent-%COMP%]   .row[_ngcontent-%COMP%]   .col-12[_ngcontent-%COMP%]   .radio-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 8px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n  flex: none;\n  order: 0;\n  flex-grow: 0;\n}\n.booking-message-dialog[_ngcontent-%COMP%]   .footer[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  float: right;\n  padding: 16px 25px;\n  grid-gap: 15px;\n  gap: 15px;\n}\n.input-label[_ngcontent-%COMP%] {\n  font-weight: 400;\n  font-size: 10px;\n  line-height: 12px;\n  text-transform: uppercase;\n  color: var(--xa-dark-gray);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvb2tpbmctbWVzc2FnZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLHNDQUFBO0FBQ0o7QUFFUTtFQUNJLHNCQUFBO0FBQVo7QUFJWTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FBRmhCO0FBSWdCO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUFGcEI7QUFRSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQU5SO0FBUVE7RUFDSSxhQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQU5aO0FBU1E7RUFDSSxZQUFBO0VBQ0EsV0FBQTtBQVBaO0FBVVE7RUFDSSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxjQUFBO0FBUlo7QUFXZ0I7RUFDSSxtQkFBQTtBQVRwQjtBQVdvQjtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7QUFUeEI7QUFZb0I7RUFDSSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLHlCQUFBO0VBQ0EsMEJBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFWeEI7QUFpQkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQUEsU0FBQTtBQWZSO0FBbUJBO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLDBCQUFBO0FBaEJKIiwiZmlsZSI6ImJvb2tpbmctbWVzc2FnZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ib29raW5nLW1lc3NhZ2UtZGlhbG9nIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYmFja2dyb3VuZDogdmFyKC0teGEtcG9wdXAtbGlnaHQtZ3JheSk7XHJcblxyXG4gICAgLmhlYWRlciB7XHJcbiAgICAgICAgLnRpdGxlIHtcclxuICAgICAgICAgICAgY29sb3I6IHZhcigtLXhhLWJsYWNrKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5hY3Rpb24ge1xyXG4gICAgICAgICAgICBidXR0b24ge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS14YS1ibGFjayk7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcblxyXG4gICAgICAgICAgICAgICAgLm1hdC1pY29uIHtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE2cHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmJvb2tpbmctbWVzc2FnZS13cmFwcGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgICAgICAgcGFkZGluZzogMTZweCAyNXB4O1xyXG4gICAgICAgIGdhcDogMjVweDtcclxuXHJcbiAgICAgICAgLmJvb2tpbmctbWVzc2FnZS1hY3Rpb24ge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgMTQwcHg7XHJcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgICAgICAgICBnYXA6IDEwcHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBtYXQtaWNvbiB7XHJcbiAgICAgICAgICAgIGhlaWdodDogMThweDtcclxuICAgICAgICAgICAgd2lkdGg6IDE4cHg7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAuZm9ybS1jb250YWluZXIge1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgICAgICBmbGV4OiAxIDEgYXV0bztcclxuXHJcbiAgICAgICAgICAgIC5yb3cge1xyXG4gICAgICAgICAgICAgICAgLmNvbC0xMiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLmluZm8ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogdmFyKC0teGEtYmxhY2stZGFyayk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAucmFkaW8tbGFiZWwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDhweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiB2YXIoLS14YS1kYXJrLWdyYXkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmRlcjogMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleC1ncm93OiAwO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuZm9vdGVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDE2cHggMjVweDtcclxuICAgICAgICBnYXA6IDE1cHg7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5pbnB1dC1sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6IDEycHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgY29sb3I6IHZhcigtLXhhLWRhcmstZ3JheSk7XHJcbn0iXX0= */"]
      });
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_modules_repair_booking-journal_booking-journal_module_ts-es5.js.map