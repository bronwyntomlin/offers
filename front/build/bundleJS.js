/******/
const BASEURL = "https://www.propertyturkey.com",
JSPATH = "https://www.propertyturkey.com/front/js/library/",
CSSPATH = "https://www.propertyturkey.com/front/css",
CURRENT_URL = window.location.href,
SITE_URL = "https://www.propertyturkey.com",
VERSION = "1.2.224100699",

LABELS = {
	items: 'properties',
	remove_from_enquiry_list: 'In Shortlist',
	add_to_enq: '+ Shortlist',
	all: 'All',
	share: ' Shares',
	offAlert: 'Alert Off',
	onAlert: 'Alert On',
	'savefav': 'Save',
	'unsavefav': 'Unsave',
},


HELPERS = {
	addToSession: 'https://www.propertyturkey.com/addToSession'
};
(function(modules) { // webpackBootstrap
    /******/ // install a JSONP callback for chunk loading
    /******/
    function webpackJsonpCallback(data) {
        /******/
        var chunkIds = data[0];
        /******/
        var moreModules = data[1];
        /******/
        var executeModules = data[2];
        /******/
        /******/ // add "moreModules" to the modules object,
        /******/ // then flag all "chunkIds" as loaded and fire callback
        /******/
        var moduleId, chunkId, i = 0,
            resolves = [];
        /******/
        for (; i < chunkIds.length; i++) {
            /******/
            chunkId = chunkIds[i];
            /******/
            if (Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
                /******/
                resolves.push(installedChunks[chunkId][0]);
                /******/
            }
            /******/
            installedChunks[chunkId] = 0;
            /******/
        }
        /******/
        for (moduleId in moreModules) {
            /******/
            if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                /******/
                modules[moduleId] = moreModules[moduleId];
                /******/
            }
            /******/
        }
        /******/
        if (parentJsonpFunction) parentJsonpFunction(data);
        /******/
        /******/
        while (resolves.length) {
            /******/
            resolves.shift()();
            /******/
        }
        /******/
        /******/ // add entry modules from loaded chunk to deferred list
        /******/
        deferredModules.push.apply(deferredModules, executeModules || []);
        /******/
        /******/ // run deferred modules when all chunks ready
        /******/
        return checkDeferredModules();
        /******/
    };
    /******/
    function checkDeferredModules() {
        /******/
        var result;
        /******/
        for (var i = 0; i < deferredModules.length; i++) {
            /******/
            var deferredModule = deferredModules[i];
            /******/
            var fulfilled = true;
            /******/
            for (var j = 1; j < deferredModule.length; j++) {
                /******/
                var depId = deferredModule[j];
                /******/
                if (installedChunks[depId] !== 0) fulfilled = false;
                /******/
            }
            /******/
            if (fulfilled) {
                /******/
                deferredModules.splice(i--, 1);
                /******/
                result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
                /******/
            }
            /******/
        }
        /******/
        /******/
        return result;
        /******/
    }
    /******/
    /******/ // The module cache
    /******/
    var installedModules = {};
    /******/
    /******/ // object to store loaded and loading chunks
    /******/ // undefined = chunk not loaded, null = chunk preloaded/prefetched
    /******/ // Promise = chunk loading, 0 = chunk loaded
    /******/
    var installedChunks = {
        /******/
        "bundleJS": 0
        /******/
    };
    /******/
    /******/
    var deferredModules = [];
    /******/
    /******/ // The require function
    /******/
    function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/
        if (installedModules[moduleId]) {
            /******/
            return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/
        var module = installedModules[moduleId] = {
            /******/
            i: moduleId,
            /******/
            l: false,
            /******/
            exports: {}
            /******/
        };
        /******/
        /******/ // Execute the module function
        /******/
        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/
        module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/
        return module.exports;
        /******/
    }
    /******/
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/
    __webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/
    __webpack_require__.c = installedModules;
    /******/
    /******/ // define getter function for harmony exports
    /******/
    __webpack_require__.d = function(exports, name, getter) {
        /******/
        if (!__webpack_require__.o(exports, name)) {
            /******/
            Object.defineProperty(exports, name, {
                enumerable: true,
                get: getter
            });
            /******/
        }
        /******/
    };
    /******/
    /******/ // define __esModule on exports
    /******/
    __webpack_require__.r = function(exports) {
        /******/
        if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
            /******/
            Object.defineProperty(exports, Symbol.toStringTag, {
                value: 'Module'
            });
            /******/
        }
        /******/
        Object.defineProperty(exports, '__esModule', {
            value: true
        });
        /******/
    };
    /******/
    /******/ // create a fake namespace object
    /******/ // mode & 1: value is a module id, require it
    /******/ // mode & 2: merge all properties of value into the ns
    /******/ // mode & 4: return value when already ns object
    /******/ // mode & 8|1: behave like require
    /******/
    __webpack_require__.t = function(value, mode) {
        /******/
        if (mode & 1) value = __webpack_require__(value);
        /******/
        if (mode & 8) return value;
        /******/
        if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
        /******/
        var ns = Object.create(null);
        /******/
        __webpack_require__.r(ns);
        /******/
        Object.defineProperty(ns, 'default', {
            enumerable: true,
            value: value
        });
        /******/
        if (mode & 2 && typeof value != 'string')
            for (var key in value) __webpack_require__.d(ns, key, function(key) {
                return value[key];
            }.bind(null, key));
        /******/
        return ns;
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/
    __webpack_require__.n = function(module) {
        /******/
        var getter = module && module.__esModule ?
            /******/
            function getDefault() {
                return module['default'];
            } :
            /******/
            function getModuleExports() {
                return module;
            };
        /******/
        __webpack_require__.d(getter, 'a', getter);
        /******/
        return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/
    __webpack_require__.o = function(object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/
    __webpack_require__.p = "https://www.propertyturkey.com/front/build/";
    /******/
    /******/
    var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
    /******/
    var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
    /******/
    jsonpArray.push = webpackJsonpCallback;
    /******/
    jsonpArray = jsonpArray.slice();
    /******/
    for (var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
    /******/
    var parentJsonpFunction = oldJsonpFunction;
    /******/
    /******/
    /******/ // add entry module to deferred list
    /******/
    deferredModules.push(["./script/index.js", "vendors~bundleJS"]);
    /******/ // run deferred modules when ready
    /******/
    return checkDeferredModules();
    /******/
})
/************************************************************************/
/******/
({

    /***/
    "./script/components/autocomplete.js":
        /*!*******************************************!*\
          !*** ./script/components/autocomplete.js ***!
          \*******************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return Autocomplete;
            });
            /* harmony import */
            var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
            /* harmony import */
            var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
            /* harmony import */
            var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_4__);






            var Autocomplete =
                /*#__PURE__*/
                function() {
                    function Autocomplete() {
                        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default()(this, Autocomplete);

                        this.searchAutocomplete();
                    }

                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default()(Autocomplete, [{
                        key: "searchAutocomplete",
                        value: function searchAutocomplete() {
                            var searchInput = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.searchWrapper input[name="keyword"]');
                            var searchResultsWrapper = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.search-results-wrapper .search-results-list');
                            var searchResultsWrapper_loading = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.search-results-wrapper .loadingSpan');
                            var searchResultsItem = jquery__WEBPACK_IMPORTED_MODULE_4___default()('.searchWrapper .search-results-item');
                            var url;
                            searchInput.on('keyup', function(event) {
                                var input = jquery__WEBPACK_IMPORTED_MODULE_4___default()(event.currentTarget);
                                var value = input.val();
                                var timerId;
                                url = '/real_estate/suggestions?keyword=' + value;
                                searchResultsWrapper_loading.removeClass('hide'); // Clear the previous timeout call if active

                                if (timerId) {
                                    clearTimeout(timerId);
                                } // Trigger API call after seconds from keyup


                                timerId = setTimeout(
                                    /*#__PURE__*/
                                    _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                                        /*#__PURE__*/
                                        _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
                                            return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                                                while (1) {
                                                    switch (_context.prev = _context.next) {
                                                        case 0:
                                                            timerId = null;
                                                            jquery__WEBPACK_IMPORTED_MODULE_4___default.a.get(url, function(responseData) {
                                                                searchResultsWrapper.html(' ');
                                                                searchResultsWrapper.addClass('--open');
                                                                responseData.data.forEach(function(item) {
                                                                    var card = '<div class="search-results-item">\
                                        <span>' + item.text + '</span>\
                                    </div>';
                                                                    searchResultsWrapper.append(card);
                                                                });
                                                            }).done(function() {
                                                                searchResultsWrapper_loading.addClass('hide');
                                                                input.removeClass('--pending');
                                                                input.addClass('--done');
                                                                jquery__WEBPACK_IMPORTED_MODULE_4___default()('.search-results-item').on('click', function() {
                                                                    console.log('xx', jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).text());
                                                                    var selectedRow = jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).text().trim();
                                                                    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('.searchWrapper').find('input[name="keyword"]').val(selectedRow);
                                                                    searchResultsWrapper.removeClass('--open');
                                                                    jquery__WEBPACK_IMPORTED_MODULE_4___default()(this).parents('form').submit();
                                                                });
                                                            });

                                                        case 2:
                                                        case "end":
                                                            return _context.stop();
                                                    }
                                                }
                                            }, _callee);
                                        })), 1000);
                            });
                        }
                    }]);

                    return Autocomplete;
                }();



            /***/
        }),

    /***/
    "./script/components/carousel.js":
        /*!***************************************!*\
          !*** ./script/components/carousel.js ***!
          \***************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return carousel;
            });
            /* harmony import */
            var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
            /* harmony import */
            var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */
            var owl_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! owl.carousel */ "../node_modules/owl.carousel/dist/owl.carousel.js");
            /* harmony import */
            var owl_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(owl_carousel__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */
            var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../util/helpers */ "./script/util/helpers.js");




            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }

            function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i] != null ? arguments[i] : {};
                    if (i % 2) {
                        ownKeys(source, true).forEach(function(key) {
                            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    } else {
                        ownKeys(source).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                }
                return target;
            }

            // @flow




            var carousel =
                /*#__PURE__*/
                function() {
                    function carousel() {
                        var selector = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '.carousel';

                        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_1___default()(this, carousel);

                        var _this = this;

                        this.timeout = 0;
                        this.carouselArray = jquery__WEBPACK_IMPORTED_MODULE_3___default()(selector).not('.owl-images-initialized');
                        this.carouselArray.map(function(index, item) {
                            setTimeout(function() {
                                _this.initCarousel(index, item);
                            }, _this.timeout);
                            _this.timeout = _this.timeout + 500;
                        });
                        this.imageSliderArray = jquery__WEBPACK_IMPORTED_MODULE_3___default()('.card-imageSlider').not('.owl-images-initialized');
                        this.imageSliderArray.map(function(index, item) {
                            setTimeout(function() {
                                _this.initSliderCarousel(item);
                            }, _this.timeout);
                            _this.timeout = _this.timeout + 500;
                        });
                    }

                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_2___default()(carousel, [{
                        key: "options",
                        value: function options() {
                            return {
                                items: 4,
                                dots: false,
                                margin: 30,
                                nav: false,
                                loop: false,
                                autoWidth: false,
                                rewind: false,
                                autoplay: false,
                                mouseDrag: false,
                                touchDrag: false,
                                navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                                responsive: {
                                    0: {
                                        nav: true,
                                        dots: true,
                                        mouseDrag: true,
                                        touchDrag: true,
                                        margin: 30,
                                        loop: false,
                                        items: 1,
                                        stagePadding: 30
                                    },
                                    1000: {
                                        items: 3,
                                        loop: false,
                                        margin: 30,
                                        autoWidth: false
                                    },
                                    1200: {
                                        loop: false,
                                        margin: 30,
                                        autoWidth: false,
                                        items: 4
                                    }
                                }
                            };
                        }
                    }, {
                        key: "initCardImagesCarousel",
                        value: function initCardImagesCarousel(item) {
                            var _this = this;

                            var propertyImageContainer = item.find('.card-imageSlider--carousel').not('.owl-images-initialized');
                            propertyImageContainer.map(function(index, imageSlider) {
                                _this.initSliderCarousel(imageSlider);
                            });
                        }
                    }, {
                        key: "initSliderCarousel",
                        value: function initSliderCarousel(slider) {
                            slider = jquery__WEBPACK_IMPORTED_MODULE_3___default()(slider);

                            if (slider.not('.owl-images-initialized')) {
                                slider.owlCarousel({
                                    items: 1,
                                    center: false,
                                    autoplay: true,
                                    margin: 0,
                                    animateIn: 'fadeIn',
                                    animateOut: 'fadeOut',
                                    lazyLoad: true,
                                    mouseDrag: false,
                                    touchDrag: false,
                                    loop: true,
                                    dots: false,
                                    nav: false,
                                    responsive: {
                                        0: {
                                            items: 1
                                        },
                                        // breakpoint from 480 up
                                        480: {
                                            items: 1
                                        },
                                        // breakpoint from 768 up
                                        768: {
                                            items: 1
                                        }
                                    },
                                    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
                                    onInitialize: function onInitialize() {
                                        slider.addClass('owl-images-initialized');
                                        jquery__WEBPACK_IMPORTED_MODULE_3___default()('.section--filter').show();
                                    }
                                });
                            }
                        }
                    }, {
                        key: "initCarousel",
                        value: function initCarousel(index, item) {
                            var _options;

                            item = jquery__WEBPACK_IMPORTED_MODULE_3___default()(item);

                            var _this = this;

                            var items = item.attr('items');
                            var numberOfItems = items !== undefined ? items : 4;
                            var autoPlayy = item.attr('autoplay');
                            var autoPlayOption = item.parent().attr('id') == 'promo-slider' ? true : false;
                            var dots = item.attr('dots');
                            var dotsOption = dots !== undefined ? Boolean(parseInt(dots)) : false;
                            var nav = item.attr('nav');
                            var navOption = nav !== undefined ? Boolean(parseInt(nav)) : true;
                            var touch = item.attr('touch');
                            var touchOption = touch !== undefined ? Boolean(parseInt(touch)) : false;
                            var responsiveItem = item.attr('responsive-items');
                            var numberOfItems_reposnive = responsiveItem !== undefined ? responsiveItem : 1;
                            var stagepadding = item.attr('stagepadding');
                            var stagepadding_value = stagepadding !== undefined ? stagepadding : 30;
                            var options = (_options = {
                                items: numberOfItems,
                                dots: dotsOption,
                                margin: 30,
                                nav: navOption,
                                loop: true,
                                autoWidth: false,
                                rewind: true,
                                autoplay: false,
                                mouseDrag: touchOption,
                                touchDrag: touchOption
                            }, _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_options, "nav", true), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_options, "navText", ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_options, "onInitialize", function onInitialize(e) {
                                item.addClass('owl-images-initialized');
                            }), _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(_options, "responsive", {
                                0: {
                                    items: numberOfItems_reposnive,
                                    loop: false,
                                    nav: true,
                                    dots: true,
                                    mouseDrag: true,
                                    touchDrag: true,
                                    margin: 30,
                                    stagePadding: stagepadding_value
                                },
                                1000: {
                                    items: numberOfItems_reposnive,
                                    loop: false,
                                    margin: 30,
                                    autoWidth: false,
                                    dots: dotsOption
                                },
                                1200: {
                                    loop: false,
                                    margin: 30,
                                    autoWidth: false,
                                    items: numberOfItems,
                                    dots: dotsOption
                                }
                            }), _options);
                            item.owlCarousel(options);
                            this.initFilter(item);
                        }
                    }, {
                        key: "initFilter",
                        value: function initFilter(target) {
                            var _this = this;

                            var filter = jquery__WEBPACK_IMPORTED_MODULE_3___default()(target).parents('section').find('.section--filter');
                            filter.hide();

                            if (filter.length > 0) {
                                filter.empty();
                                filter.each(function(index, filterItem) {
                                    filterItem = jquery__WEBPACK_IMPORTED_MODULE_3___default()(filterItem);
                                    var section = filterItem.parents('section').first();
                                    var allCards = section.find('.property-box');
                                    var propertyTypes = [];
                                    var OriginalCards = jquery__WEBPACK_IMPORTED_MODULE_3___default()(allCards).clone();
                                    allCards.each(function(index, item) {
                                        item = jquery__WEBPACK_IMPORTED_MODULE_3___default()(item);
                                        var itemType = item.attr('type');

                                        if (propertyTypes.indexOf(itemType) == -1) {
                                            propertyTypes.push(itemType);
                                        }
                                    });
                                    filterItem.append('<li><a class="btn section--filter-link ripple button button-default" rel="">' + LABELS.all + '</a></li>');
                                    jquery__WEBPACK_IMPORTED_MODULE_3___default()(propertyTypes).each(function(index, item) {
                                        filterItem.append('<li><a class="btn section--filter-link" rel="' + item + '">' + item + '</a></li>');
                                    });
                                    filterItem.find('li:first-of-type a').addClass('active');
                                    filterItem.on('click', '.section--filter-link', function(event) {
                                        var target = jquery__WEBPACK_IMPORTED_MODULE_3___default()(event.target);
                                        var rel = target.attr('rel');
                                        var thisCarousel = target.parents('section').first().find('.owl-carousel').not('.card-imageSlider--carousel');
                                        thisCarousel.trigger('destroy.owl.carousel');
                                        var card = OriginalCards.filter('[type="' + rel + '"]');

                                        if (rel === '') {
                                            card = OriginalCards;
                                        }

                                        card = jquery__WEBPACK_IMPORTED_MODULE_3___default()(card);
                                        filterItem.find('.section--filter-link').removeClass('active');
                                        target.addClass('active');
                                        thisCarousel.find('.owl-images-initialized').trigger('destroy.owl.carousel').removeClass('owl-images-initialized');
                                        thisCarousel.empty().removeClass('owl-loaded owl-drag owl-theme');
                                        thisCarousel.append(card).promise().done(function() {
                                            var options = _objectSpread({}, _this.options(), {
                                                nav: true,
                                                loop: true,
                                                items: thisCarousel.attr('items'),
                                                onInitialize: function onInitialize() {
                                                    setTimeout(function() {
                                                        _this.initCardImagesCarousel(thisCarousel);

                                                        Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["initFancybox"])();
                                                    }, 1000);
                                                }
                                            });

                                            thisCarousel.owlCarousel(options);
                                        });
                                    });
                                });
                            }
                        }
                    }]);

                    return carousel;
                }();



            /***/
        }),

    /***/
    "./script/components/editor.js":
        /*!*************************************!*\
          !*** ./script/components/editor.js ***!
          \*************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return Editor;
            });
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var froala_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! froala_editor */ "../node_modules/froala-editor/js/froala_editor.pkgd.min.js");
            /* harmony import */
            var froala_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(froala_editor__WEBPACK_IMPORTED_MODULE_3__);


            // @flow



            var Editor =
                /*#__PURE__*/
                function() {
                    function Editor() {
                        var _this2 = this;

                        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Editor);

                        this.editor = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.editor');

                        if (this.editor.length) {
                            this.editor.map(function(index, editor) {
                                _this2.init(editor);
                            });
                        }
                    }

                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Editor, [{
                        key: "init",
                        value: function init(editor) {
                            editor = jquery__WEBPACK_IMPORTED_MODULE_2___default()(editor);

                            var _this = this;

                            var onFocus = false;
                            var CharCount = 0;
                            editor.froalaEditor({
                                heightMin: 160,
                                imageUploadURL: '/',
                                heightMax: 200,
                                charCounterCount: true,
                                toolbarSticky: false
                            });
                            editor.on('froalaEditor.focus', function(e, item) {
                                onFocus = true;
                                CharCount = editor.froalaEditor('charCounter.count');

                                _this.checkCounter(e, item, CharCount);
                            });
                            editor.on('froalaEditor.blur', function(e, item) {
                                CharCount = editor.froalaEditor('charCounter.count');

                                _this.checkCounter(e, item, CharCount);
                            });
                            editor.on('froalaEditor.keyup', function(e, item) {
                                CharCount = editor.froalaEditor('charCounter.count');

                                if (onFocus) {
                                    _this.checkCounter(e, item, CharCount);
                                }
                            });
                            document.querySelectorAll('[data-f-id]').forEach(function(element) {
                                element.innerHTML = "";
                                element.textContent = "";
                            });
                        }
                    }, {
                        key: "checkCounter",
                        value: function checkCounter(e, editor, charCounted) {
                            var toValidate = jquery__WEBPACK_IMPORTED_MODULE_2___default()(editor.$oel[0]).attr('validation');
                            var targetChars;

                            if (toValidate !== undefined) {
                                var ruleType = toValidate.split('-');
                                var box = jquery__WEBPACK_IMPORTED_MODULE_2___default()(editor.$box[0]);
                                var parent = jquery__WEBPACK_IMPORTED_MODULE_2___default()(box.parent());

                                if (ruleType[0] === 'minChars' || ruleType[0] === 'maxChars') {
                                    targetChars = parent.attr('charcount').split('/')[1];
                                    parent.attr('charcount', charCounted + '/' + targetChars);
                                }

                                if (ruleType[0] === 'minChars') {
                                    if (parseInt(charCounted) < parseInt(targetChars)) {
                                        parent.stop().addClass('error').attr('error-message', 'Minimum Characters');
                                    } else {
                                        parent.stop().removeClass('error');
                                    }
                                } else if (ruleType[0] === 'maxChars') {
                                    if (parseInt(charCounted) > parseInt(targetChars)) {
                                        parent.stop().addClass('error').attr('error-message', 'Maximum Character');
                                    } else {
                                        parent.stop().removeClass('error');
                                    }
                                } else {
                                    if (editor.trackHTML === '') {
                                        box.parents('.field').addClass('error').attr('error-message', 'this Field is Required');
                                    } else {
                                        box.parents('.field').removeClass('error');
                                    }
                                }
                            }
                        }
                    }]);

                    return Editor;
                }();



            /***/
        }),

    /***/
    "./script/components/filter.js":
        /*!*************************************!*\
          !*** ./script/components/filter.js ***!
          \*************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return Filter;
            });
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _util_helpers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../util/helpers */ "./script/util/helpers.js");
            /* harmony import */
            var _util_loadPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../util/loadPage */ "./script/util/loadPage.js");
            /* harmony import */
            var _infiniteScroll__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./infiniteScroll */ "./script/components/infiniteScroll.js");
            // @flow




            function Filter() {
                var search = {
                    city_slug: '',
                    area_slug: '',
                    type_slug: '',
                    tags_slug: '',
                    bedrooms: '',
                    minPrice: '0.00',
                    maxPrice: ''
                };

                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').hasClass('elasticSearchFitler')) {
                    var Elastickeyword = location.search.split('keyword=')[1];
                    var url = SITE_URL + '/real_estate/search?keyword=' + Elastickeyword;
                } else {
                    var url = SITE_URL + '/real_estate/turkey/:city_slug/:area_slug/:type_slug';
                } // var url = SITE_URL + '/real_estate/turkey/:city_slug/:area_slug/:type_slug';
                // unbind all events in case the listing page


                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search .search-filter-input-dropdown-link').unbind('click'); //important

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fa-close.search-filter-input-icon').unbind('click'); //important

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').unbind('click'); //important

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search [id="createSearchData"]').unbind('click'); //important

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[href="#propertyAlerts"]').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.toggle-search-filters').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.highlight-search').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search .search-filter-input').unbind('click'); //important

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title, .search-filter-input-icon').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shortlist-btn').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fav-enquire').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[href="#propertyAlerts"]').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.toggle-sorte').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.quich-enquire-btn').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(document).ready(function() {
                    var minValueofPrice = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input.minPrice').find('.search-filter-input-title').attr('value');
                    hideMaxRegaringMin(parseInt(minValueofPrice));
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkbox-filter').on('change', function(e) {
                    e.preventDefault();
                    var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.filter-type-dropdown-wrap').parents('.search-filter-input').find('.search-filter-input-dropdown').hasClass('label')) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.filter-type-dropdown-wrap').parents('.search-filter-input').find('.search-filter-input-dropdown').find('label[value="' + value + '"]').trigger('click');
                    } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.filter-type-dropdown-wrap').parents('.search-filter-input').find('.search-filter-input-dropdown').hasClass('anchor')) {
                        if (value == '5+ ' && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.search-filter-input').hasClass('bedrooms')) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.filter-type-dropdown-wrap').parents('.search-filter-input').find('.search-filter-input-dropdown').find('a:last-of-type').trigger('click');
                        } else {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.filter-type-dropdown-wrap').parents('.search-filter-input').find('.search-filter-input-dropdown').find('a[link="' + value + '"]').trigger('click');
                        }
                    }

                    new _infiniteScroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.filter-input-text').on('focus', function(e) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().addClass('open');
                }).on('focusout', function(e) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().removeClass('open');
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input.checkbox-filter-minPrice').on('change', function(e) {
                    var minPrice = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').val(minPrice);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.search-filter-input').parents('.search-functioned').find('.search-filter-input.minPrice').find('.search-filter-input-dropdown').find('label[value="' + minPrice + '"]').trigger('click');
                    new _infiniteScroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input.checkbox-filter-maxPrice').on('change', function(e) {
                    var maxPrice = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice-input').val(maxPrice);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.search-filter-input').parents('.search-functioned').find('.search-filter-input.maxPrice').find('.search-filter-input-dropdown').find('label[value="' + maxPrice + '"]').trigger('click');
                    new _infiniteScroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
                });

                var substringMatcher = function substringMatcher(strs) {
                    return function findMatches(q, cb) {
                        var matches, substrRegex; // an array that will be populated with substring matches

                        matches = []; // regex used to determine if a string contains the substring `q`

                        substrRegex = new RegExp(q, 'i'); // iterate through the pool of strings and for any string that
                        // contains the substring `q`, add it to the `matches` array

                        jquery__WEBPACK_IMPORTED_MODULE_0___default.a.each(strs, function(i, str) {
                            if (substrRegex.test(str)) {
                                matches.push(str);
                            }
                        });
                        cb(matches);
                    };
                }; // bind search events again


                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search .search-filter-input-dropdown-link').on('click', function(event) {
                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').hasClass('elasticSearchFitler')) {
                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type') == 'city_slug') {
                            var href = url + '&city_slug=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                            var main = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#main');
                            var searchfilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#search-filter');
                            var seo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#seo');
                            Object(_util_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])(href, {
                                main: main,
                                searchfilter: searchfilter,
                                seo: seo
                            });
                        }

                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type') == 'type_slug') {
                            var href = url + '&type_slug=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                            var main = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#main');
                            var searchfilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#search-filter');
                            var seo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#seo');
                            Object(_util_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])(href, {
                                main: main,
                                searchfilter: searchfilter,
                                seo: seo
                            });
                        }

                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type') == 'bedrooms') {
                            var href = url + '&bedroom=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                            var main = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#main');
                            var searchfilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#search-filter');
                            var seo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#seo');
                            Object(_util_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])(href, {
                                main: main,
                                searchfilter: searchfilter,
                                seo: seo
                            });
                        }

                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type') == 'minPrice') {
                            var newurl = new URL(window.location.href);

                            if (newurl.searchParams.get('cur')) {
                                newurl.searchParams["delete"]('cur');
                            }

                            var curId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.currency-widget').find('.active').attr('data-cur');

                            if (newurl.searchParams.get('priceRange')) {
                                var priceRange = newurl.searchParams.get('priceRange');
                                var minPriceRange = priceRange.split(':')[0];
                                var maxPriceRange = priceRange.split(':')[1];
                                newurl.searchParams["delete"]('priceRange');

                                if (minPriceRange !== '0.00' && maxPriceRange == '') {
                                    var href = newurl + '&cur=' + curId + '&priceRange=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value') + ':';
                                }

                                if (minPriceRange == '0.00' && maxPriceRange !== '') {
                                    var href = newurl + '&cur=' + curId + '&priceRange=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value') + ':' + maxPriceRange;
                                }

                                if (minPriceRange !== '0.00' && maxPriceRange !== '') {
                                    var href = newurl + '&cur=' + curId + '&priceRange=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value') + ':' + maxPriceRange;
                                }
                            } else {
                                var href = url + '&cur=' + curId + '&priceRange=' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value') + ':';
                            }

                            var main = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#main');
                            var searchfilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#search-filter');
                            var seo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#seo');
                            Object(_util_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])(href, {
                                main: main,
                                searchfilter: searchfilter,
                                seo: seo
                            });
                        }

                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type') == 'maxPrice') {
                            var newurl = new URL(window.location.href);

                            if (newurl.searchParams.get('cur')) {
                                newurl.searchParams["delete"]('cur');
                            }

                            var curId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.currency-widget').find('.active').attr('data-cur');

                            if (newurl.searchParams.get('priceRange')) {
                                var priceRange = newurl.searchParams.get('priceRange');
                                var minPriceRange = priceRange.split(':')[0];
                                var maxPriceRange = priceRange.split(':')[1];
                                newurl.searchParams["delete"]('priceRange');

                                if (minPriceRange !== '0.00' && maxPriceRange == '') {
                                    var href = newurl + '&cur=' + curId + '&priceRange=' + minPriceRange + ':' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                                }

                                if (minPriceRange == '0.00' && maxPriceRange !== '' || minPriceRange == '0.00' && maxPriceRange == '') {
                                    var href = newurl + '&cur=' + curId + '&priceRange=0.00:' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                                }

                                if (minPriceRange !== '0.00' && maxPriceRange !== '') {
                                    var href = newurl + '&cur=' + curId + '&priceRange=' + minPriceRange + ':' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                                }
                            } else {
                                var href = url + '&cur=' + curId + '&priceRange=0.00' + ':' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                            }

                            var main = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#main');
                            var searchfilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#search-filter');
                            var seo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#seo');
                            Object(_util_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])(href, {
                                main: main,
                                searchfilter: searchfilter,
                                seo: seo
                            });
                        }
                    } else {
                        var that = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                        var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type');
                        var is = {
                            searchDO: jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).is('.searchDO')
                        };

                        if (is.searchDO) {
                            var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                            value = value.toLowerCase().split(' ').join('-');
                            url = url.replace(':' + type, value);
                            search[type] = value;

                            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('minPricehidden')) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues').find('.minPriceValue').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());

                                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice-input').val() !== '') {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasOneValue OriginValue').addClass('hasValue');
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#price-toggle').find('.fa').removeClass('fa-angle-down fa-angle-up').addClass('fa-close').addClass('clearInput');
                                } else {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasValue').addClass('hasOneValue');
                                }

                                if (window.location.href.indexOf('real_estate/turkey') > -1) {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#createSearchData').trigger('click');
                                }
                            }

                            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('maxPricehidden')) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues').find('.maxPriceValue').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());

                                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').val() !== '') {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasOneValue OriginValue').addClass('hasValue');
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#price-toggle').find('.fa').removeClass('fa-angle-down fa-angle-up').addClass('fa-close').addClass('clearInput');
                                } else {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasValue').addClass('hasOneValue');
                                }

                                if (window.location.href.indexOf('real_estate/turkey') > -1) {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#createSearchData').trigger('click');
                                }
                            }

                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.search-filter-input').first().addClass('hasValue').removeClass('open').find('.search-filter-input-value').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text()).parents('.search-filter-input').find('.fa').removeClass('fa-angle-down fa-angle-up').addClass('fa-close').addClass('clearInput').parents('.search-filter-input').find('.search-filter-input-title').attr('value', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value')).attr('type', type); // call limiting max function here;

                            hideMaxRegaringMin(parseInt(that.attr('value')));
                        } else {
                            var href = that.attr('href');
                            var main = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#main');
                            var searchfilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#search-filter');
                            var seo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#seo');
                            Object(_util_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])(href, {
                                main: main,
                                searchfilter: searchfilter,
                                seo: seo
                            });
                        }
                    }

                    event.preventDefault();
                    new _infiniteScroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fa-close.search-filter-input-icon').on('click', function(event) {
                    event.preventDefault();
                    var that = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                    var href = that.attr('href');
                    var main = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#main');
                    var searchfilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#search-filter');
                    var seo = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').find('#seo');
                    Object(_util_loadPage__WEBPACK_IMPORTED_MODULE_2__["default"])(href, {
                        main: main,
                        searchfilter: searchfilter,
                        seo: seo
                    });
                    new _infiniteScroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
                    return false;
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').on('click', '.clearInput', function(e) {
                    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target); //$('.search-filter-input#price-toggle').addClass('hasValue');

                    target.parents('.search-filter-input').find('input').prop('checked', false);
                    target.removeClass('fa-close').addClass('fa-angle-down').parents('.search-filter-input').removeClass('hasValue').find('.search-filter-input-title').attr('value', '').find('.search-filter-input-value').text('');

                    if (target.hasClass('fa-angle-up')) {
                        target.removeClass('fa-angle-up clearInput');
                        target.addClass('fa-angle-down');
                    } else if (target.hasClass('fa-angle-down')) {
                        target.removeClass('fa-angle-down clearInput');
                        target.addClass('fa-angle-up');
                    }

                    if (target.parents('.search-filter-input').hasClass('price-toggle')) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').val('');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice-input').val('');
                    }

                    e.preventDefault();
                    var type = target.parents('.search-filter-input').find('.search-filter-input-title').attr('type');
                    var value = target.parents('.search-filter-input').find('.search-filter-input-title').attr('value');
                    search[type] = value; // $('.search-filter-input-dropdown-link[type="maxPrice"]').not('.searchDO').removeClass("hide");

                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-dropdown-link.searchDO[type="maxPrice"]').removeClass('hide');
                    new _infiniteScroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
                    return false;
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search [id="createSearchData"]').on('click', function(event) {
                    console.log('clicked createSearchData');

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').hasClass('elasticSearchFitler')) {
                        var Elastickeyword = location.search.split('keyword=')[1];
                        console.log(Elastickeyword);
                        var url = SITE_URL + '/real_estate/search?keyword=' + Elastickeyword;
                    } else {
                        var url = SITE_URL + '/real_estate/turkey/:city_slug/:area_slug/:type_slug';
                    } //var url = SITE_URL + '/real_estate/turkey/:city_slug/:area_slug/:type_slug';


                    var hasValues = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').find('.search-filter-input.hasValue .search-filter-input-title'); //console.log(hasValues);

                    hasValues.each(function(index, el) {
                        var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('value');
                        var type;

                        if (typeof value !== 'undefined') {
                            value = value.toLowerCase().split(' ').join('-');
                            var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('type');
                            url = url.replace(':' + type, value);
                            search[type] = value;
                        }
                    });

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').hasClass('elasticSearchFitler')) {
                        //console.log(search);
                        if (search.city_slug !== '') {
                            url = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["updateQueryStringParameter"])(url, 'city_slug', search.city_slug.replace('city_slug', ''));
                        }

                        if (search.city_slug == '') {
                            // url = updateQueryStringParameter(url, 'city_slug', search.city_slug.replace('city_slug', ''));
                            var searchObj = new URL(url);
                            var searchParam = searchObj.searchParams;
                            searchParam["delete"]('city_slug');
                            url = '?' + searchParam.toString();
                        }

                        if (search.type_slug !== '') {
                            url = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["updateQueryStringParameter"])(url, 'type_slug', search.type_slug.replace('type_slug', ''));
                        }

                        if (search.minPrice !== '' || search.maxPrice !== '') {
                            var curId = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.currency-widget').find('.active').attr('data-cur');

                            if (curId !== '') {
                                url = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["updateQueryStringParameter"])(url, 'cur', curId);
                            }
                        }
                    } else {
                        url = url.replace('/:city_slug', '');
                        url = url.replace('/:area_slug', '');
                        url = url.replace('/:type_slug', '');
                    }

                    if (search.bedrooms !== '') {
                        url = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["updateQueryStringParameter"])(url, 'bedroom', search.bedrooms.replace('-bedrooms', ''));
                    }

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').find('[name="ref"]').length > 0) {
                        var refID = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search').find('[name="ref"]').val();

                        if (refID !== '') {
                            url = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["updateQueryStringParameter"])(url, 'ref', refID);
                        }
                    }

                    if (search.minPrice !== '' || search.maxPrice !== '') {
                        if (search.minPrice === '') {
                            search.minPrice = '0.00';
                        }

                        var maxPrice = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice-input').val();
                        var currentCurrency = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#currentCurrency').val();

                        if (maxPrice !== '') {
                            if (maxPrice.includes(currentCurrency) && maxPrice.includes("k")) {
                                maxPrice = maxPrice.replace(currentCurrency, '');
                                maxPrice = maxPrice.replace('k', '000.00');
                            }

                            search.maxPrice = maxPrice;
                        }

                        var priceRangeValue;

                        if (search.minPrice !== '' && search.maxPrice !== '') {
                            priceRangeValue = search.minPrice + ':' + search.maxPrice;
                        } else if (search.minPrice !== '' && search.maxPrice == '') {
                            priceRangeValue = search.minPrice;
                        }

                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="priceRange"]').val(priceRangeValue);
                        console.log('priceRangeValue', priceRangeValue);

                        if (priceRangeValue !== '0.00') {
                            url = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["updateQueryStringParameter"])(url, 'priceRange', priceRangeValue);
                        }
                    }

                    window.location.href = url;
                    window.ga('send', {
                        hitType: 'event',
                        eventCategory: window.location.href.indexOf('real_estate/turkey') > -1 ? 'Search Listing' : 'Search Home',
                        eventAction: 'click',
                        eventLabel: url
                    });
                    event.preventDefault();
                });

                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search .minPrice-input').val() !== '') {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search .minPrice-input').attr("disabled", true);
                }

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search .search-filter-input').on('click', function() {
                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('hasValue')) {
                        var selector = '[linktype="' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('linktype') + '"] .filter-type-dropdown-wrap';
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).hide();
                    }
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[href="#propertyAlerts"]').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').find('.search-filter-input.hasValue .search-filter-input-title').each(function(index, el) {
                        var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('value');
                        var type;

                        if (typeof value !== 'undefined') {
                            value = value.toLowerCase().split(' ').join('-');
                            var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).attr('type');
                            search[type] = value;
                        }
                    });
                    var city_slug_value = search.city_slug !== '' ? search.city_slug + '' : 'select';
                    var type_slug_value = search.type_slug !== '' ? search.type_slug + '' : 'select';
                    var tags_slug_value = search.tags_slug !== '' ? search.tags_slug + '' : 'select';
                    var minPrice_value = search.minPrice !== '0.00' ? search.minPrice + '' : 'select';
                    var maxPrice_value = search.maxPrice !== '' ? search.maxPrice + '' : 'select';
                    var bedrooms_value = 'select';

                    if (search.bedrooms !== '') {
                        if (search.bedrooms == '1-bedroom') {
                            bedrooms_value = search.bedrooms.replace('-bedroom', '') + '';
                        } else {
                            bedrooms_value = search.bedrooms.replace('-bedrooms', '') + '';
                        }
                    }

                    setTimeout(function() {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#alertCities').val(city_slug_value);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#alertType').val(type_slug_value);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#alertTags').val(tags_slug_value);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#alert_min_price').val(minPrice_value);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#max_price').val(maxPrice_value);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#alertBedroom').val(bedrooms_value);
                    }, 1000);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').removeClass('open');
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.toggle-search-filters').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').toggleClass('open');
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search .toggle-search-filters').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').removeClass('highlight open');
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.toggle-sorte').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.buttonlist').toggleClass('open');
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').on('click', function(event) {
                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(event.target).parents('#search').length == 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').removeClass('highlight');
                        Object(_util_helpers__WEBPACK_IMPORTED_MODULE_1__["checkPage"])('property', function() {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').removeClass('fixed').addClass('hide');
                        });
                        event.preventDefault();
                    }
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title, .search-filter-input-icon').not('.fa-close').on('click', function() {
                    var that = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).toggleClass('open').siblings().removeClass('open');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).not('.search-filter-input-title').toggleClass('fa-angle-down fa-angle-up');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).siblings('.search-filter-input-icon').toggleClass('fa-angle-down fa-angle-up');
                    var linkType = jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).attr('linktype');
                    var evLabel = '';

                    switch (linkType) {
                        case 'location':
                            evLabel = 'Filter By Location Click';
                            break;

                        case 'area':
                            evLabel = 'Filter By Area Click';
                            break;

                        case 'type':
                            evLabel = 'Filter By Type Click';
                            break;

                        case 'bedrooms':
                            evLabel = 'Filter By Bedroom Click';
                            break;

                        case 'tags':
                            evLabel = 'Filter By Tag Click';
                            break;

                        case 'min_price':
                            evLabel = 'Filter By Min Price Click';
                            break;

                        case 'max_price':
                            evLabel = 'Filter By Max Price Click';
                            break;
                    }

                    if (evLabel !== '') {
                        window.ga('send', {
                            hitType: 'event',
                            eventCategory: window.location.href.indexOf('real_estate/turkey') > -1 ? 'Search Listing' : 'Search Home',
                            eventAction: 'click',
                            eventLabel: evLabel
                        });
                    }

                    new _infiniteScroll__WEBPACK_IMPORTED_MODULE_3__["default"]();
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.shortlist-btn').on('click', function() {
                    var that = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                    var dataID = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id');
                    var url = HELPERS.addToSession;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.post(url, {
                        rea_id: dataID
                    }).done(function(data) {
                        var message = data.message;

                        if (data.status === 1) {
                            if (data.count === 0) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.page .enquiries').removeClass('hasitems fixed').attr('style', '');
                            } else {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.page .enquiries').addClass('hasitems fixed');
                            }

                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).toggleClass('added');
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).find('.fa').toggleClass('fa-square-o fa-check');
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.enquiries .count').text(parseInt(data.count) + ' ' + LABELS.items);
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.message').text(message).addClass('success').removeClass('closed');

                            if (message === 'Enquire Added Succesfully') {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).text(LABELS.remove_from_enquiry_list);
                            } else {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).text(LABELS.add_to_enq);
                            }

                            setTimeout(function() {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.message').addClass('closed').removeClass('success');
                            }, 2000);
                        }
                    });
                    return false;
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fav-enquire').on('click', function(event) {
                    var that = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                    var method = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('method');
                    var dataID = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('id');
                    var url = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data('url');

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('endpage')) {
                        var $favBorder = '<svg xmlns="http://www.w3.org/2000/svg" width="28.101" height="25.446" viewBox="0 0 28.101 25.446">' + '<path style="fill:#463d2b;stroke:#463d2b;stroke-width:2px;fill-rule:evenodd" id="Heart" d="M24.04 2.111a7.013 7.013 0 0 0-9.982 0l-.982.982-.982-.982a7.058 7.058 0 1 0-9.982 9.982l10.963 10.965L24.04 12.094a7.013 7.013 0 0 0 0-9.982" class="cls-1" transform="translate(.975 .975)"></path>' + '</svg>';
                        var $favFill = '<svg xmlns="http://www.w3.org/2000/svg" width="28.101" height="25.446" viewBox="0 0 28.101 25.446">' + '<path style="fill:none;stroke:#463d2b;stroke-width:2px;fill-rule:evenodd" id="Heart" d="M24.04 2.111a7.013 7.013 0 0 0-9.982 0l-.982.982-.982-.982a7.058 7.058 0 1 0-9.982 9.982l10.963 10.965L24.04 12.094a7.013 7.013 0 0 0 0-9.982" class="cls-1" transform="translate(.975 .975)"></path>' + '</svg>';
                    } else {
                        var $favFill = '<svg xmlns="http://www.w3.org/2000/svg" width="20.189" height="18.465" viewBox="0 0 20.189 18.465">' + '<path id="Heart" d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956" transform="translate(0.975 0.975)" fill="none" stroke="#fff" stroke-width="2" fill-rule="evenodd"/>' + '</svg>';
                        var $favBorder = '<svg xmlns="http://www.w3.org/2000/svg" width="19" height="16.625" viewBox="0 0 19 16.625">' + '<path id="heart-solid" d="M17.144,33.1a5.075,5.075,0,0,0-6.924.5l-.731.753-.731-.753a5.074,5.074,0,0,0-6.924-.5,5.328,5.328,0,0,0-.367,7.715l7.181,7.414a1.163,1.163,0,0,0,1.681,0l7.181-7.414a5.325,5.325,0,0,0-.364-7.715Z" transform="translate(0.012 -31.967)" fill="#fff" opacity="0.9"/>' + '</svg>';
                    }

                    jquery__WEBPACK_IMPORTED_MODULE_0___default.a.ajax({
                        type: method,
                        url: url,
                        data: {
                            rea_id: dataID
                        },
                        success: function success(data) {
                            if (data.url_post) {
                                url = data.url_post;
                                method = 'POST';
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).find('svg').replaceWith($favFill);
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).data('method', method);
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).data('url', url);

                                if (that.hasClass('endpage')) {
                                    that.find('span').text(LABELS.savefav);
                                }
                            } else if (data.url_delete) {
                                url = data.url_delete;
                                method = 'delete';
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).find('svg').replaceWith($favBorder);
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).data('method', method);
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).data('url', url);

                                if (that.hasClass('endpage')) {
                                    that.find('span').text(LABELS.unsavefav);
                                }
                            }
                        }
                    });
                    event.preventDefault();
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[href="#propertyAlerts"]').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#alertForm select').each(function(index, item) {
                        var value;

                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('[selected]').length > 0) {
                            value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('[selected]').attr('value');
                        } else {
                            value = 'select';
                        }

                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val(value);
                    });
                });
            }

            if (window.location.href.indexOf('real_estate/turkey') > -1) {
                var thenum_2 = window.location.href.replace(/^\D+/g, '');
                var selected_price_Desk = parseFloat(thenum_2);
                var max_prices_labels_Desk = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice ul input');

                for (var x = 0; x < max_prices_labels_Desk.length; x++) {
                    var maxValueSelected = max_prices_labels_Desk[x];
                    var maxValueSelectedVal = maxValueSelected.getAttribute('value');
                    maxValueSelected.parentNode.classList.remove('hide');

                    if (parseFloat(maxValueSelectedVal) <= parseFloat(selected_price_Desk)) {
                        maxValueSelected.parentNode.parentNode.style.display = 'block';
                        maxValueSelected.parentNode.classList.add('hide');
                    }
                }
            }

            var selected_price = jquery__WEBPACK_IMPORTED_MODULE_0___default()('span.search-filter-input-title.text-mdd-center[type="minPrice"]').attr('value'); // let max_prices_labels = $('.search-filter-input-dropdown-link[type="maxPrice"]').not('.searchDO');

            var max_prices_labels = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-dropdown-link.searchDO[type="maxPrice"]');

            for (var _x = 0; _x < max_prices_labels.length; _x++) {
                var _maxValueSelected = max_prices_labels[_x];

                var _maxValueSelectedVal = _maxValueSelected.getAttribute('value');

                _maxValueSelected.classList.remove('hide');

                if (parseFloat(_maxValueSelectedVal) <= parseFloat(selected_price)) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input.d-desk.price-toggle.hasOneValue').addClass('open');

                    _maxValueSelected.classList.add('hide');

                    if (window.matchMedia('(max-width: 1024px)').matches) {
                        document.querySelector('.searchMore').click();

                        window.onload = function() {
                            document.querySelector('.searchMore').click();
                        };
                    }
                }

                if (parseFloat(_maxValueSelectedVal) >= parseFloat(selected_price)) {
                    if (window.matchMedia('(max-width: 1024px)').matches) {
                        window.onload = function() {
                            document.querySelector('.searchMore').click();
                        };
                    }
                }
            }

            function hideMaxRegaringMin(min) {
                var max_prices_labels_home = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-dropdown-link.searchDO[type="maxPrice"]');

                for (var _x2 = 0; _x2 < max_prices_labels_home.length; _x2++) {
                    var _maxValueSelected2 = max_prices_labels_home[_x2];

                    var _maxValueSelectedVal2 = _maxValueSelected2.getAttribute('value');

                    _maxValueSelected2.classList.remove('hide');

                    if (parseFloat(_maxValueSelectedVal2) <= parseFloat(min)) {
                        _maxValueSelected2.classList.add('hide');
                    }
                }

                var max_prices_values_desktop = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice ul .checkbox-container input');

                for (var _x3 = 0; _x3 < max_prices_values_desktop.length; _x3++) {
                    var _maxValueSelected3 = max_prices_values_desktop[_x3];

                    var _maxValueSelectedVal3 = _maxValueSelected3.getAttribute('value');

                    _maxValueSelected3.parentNode.classList.remove('hide');

                    if (parseFloat(_maxValueSelectedVal3) <= parseFloat(min)) {
                        _maxValueSelected3.parentNode.classList.add('hide');

                        _maxValueSelected3.parentNode.parentNode.style.display = 'block';
                    }
                }
            } // if (window.location.href.indexOf('real_estate/turkey') > -1 || window.location.href.indexOf('real_estate/search') > -1) {
            // 	var thenum_2 = window.location.href.replace(/^\D+/g, '');
            // 	if (thenum_2.charAt(0).includes(0)) {
            // 		$('.search-filter-input#price-toggle').removeClass('hasOneValue OriginValue').addClass('hasValue');
            // 		$('#price-toggle').find('.fa').removeClass('fa-angle-down').addClass('fa-close').addClass('clearInput');
            // 	}
            // }


            if (window.location.href.indexOf('real_estate/turkey') > -1 || window.location.href.indexOf('real_estate/search') > -1) {
                var newurlvalue = new URL(window.location.href);

                if (newurlvalue.searchParams.get('priceRange')) {
                    if (newurlvalue.searchParams.get('priceRange').split(':')[0] == '0.00' && newurlvalue.searchParams.get('priceRange').split(':')[1] !== '' || newurlvalue.searchParams.get('priceRange').split(':')[1] == '') {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').addClass('open');
                    }

                    if (newurlvalue.searchParams.get('priceRange').split(':')[0] == '0.00' && newurlvalue.searchParams.get('priceRange').split(':')[1] !== '') {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasOneValue OriginValue').addClass('hasValue');
                    }
                }

                window.onpopstate = function(event) {
                    location.reload();
                };
            } // alerts valdaite min and max price


            jquery__WEBPACK_IMPORTED_MODULE_0___default()('#alert_min_price').on('change', function() {
                var selected_min_price = this.value;
                var alert_maxprice = document.querySelectorAll('.select-maxprice-alert option');

                for (var i = 0; i < alert_maxprice.length; i++) {
                    var alert_maxprice_selected = alert_maxprice[i];
                    var selected_max_price = alert_maxprice_selected.value;
                    alert_maxprice_selected.classList.remove('hide');

                    if (parseFloat(selected_max_price) <= parseFloat(selected_min_price)) {
                        alert_maxprice_selected.classList.add('hide');
                    }
                }
            }); // disabled min price after selected one

            if (window.location.href.indexOf('real_estate/turkey') > -1) {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').val() !== '') {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').prop('disabled', true);
                }
            }

            /***/
        }),

    /***/
    "./script/components/form.js":
        /*!***********************************!*\
          !*** ./script/components/form.js ***!
          \***********************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return Form;
            });
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var intl_tel_input_build_js_intlTelInput_jquery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! intl-tel-input/build/js/intlTelInput-jquery */ "../node_modules/intl-tel-input/build/js/intlTelInput-jquery.js");
            /* harmony import */
            var intl_tel_input_build_js_intlTelInput_jquery__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(intl_tel_input_build_js_intlTelInput_jquery__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */
            var intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! intl-tel-input/build/js/utils */ "../node_modules/intl-tel-input/build/js/utils.js");
            /* harmony import */
            var intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(intl_tel_input_build_js_utils__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */
            var _util_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../util/helpers */ "./script/util/helpers.js");
            /* harmony import */
            var _library_fileupload_js_jquery_fs_dropper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ../library/fileupload/js/jquery.fs.dropper */ "./script/library/fileupload/js/jquery.fs.dropper.js");


            // @flow






            var Form =
                /*#__PURE__*/
                function() {
                    function Form() {
                        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, Form);

                        this.inputTel = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.input-tel, [type=tel]');

                        if (this.inputTel) {
                            this.initTel();
                        }

                        this.fileUpload();
                        this.form_validation();
                    }

                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(Form, [{
                        key: "initTel",
                        value: function initTel() {
                            this.inputTel.each(function(index, item) {
                                jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).intlTelInput({
                                    dropdownContainer: jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).parent()[0],
                                    numberType: 'MOBILE',
                                    initialCountry: "auto",
                                    defaultCountry: "auto",
                                    geoIpLookup: function geoIpLookup(callback) {
                                        var date = new Date().getTime();
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default.a.get(BASEURL + '/getipinfo?time=' + date).always(function(resp) {
                                            var countryCode = resp && resp.country ? resp.country : "gb";
                                            callback(countryCode);
                                        });
                                    },
                                    nationalMode: false
                                });
                            });
                        }
                    }, {
                        key: "fileUpload",
                        value: function fileUpload() {
                            Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["loadCSS"])(JSPATH + 'fileupload/css/jquery.fs.dropper.css');
                            jquery__WEBPACK_IMPORTED_MODULE_2___default()(".target").dropper({
                                action: "upload.php"
                            });
                        }
                    }, {
                        key: "form_validation",
                        value: function form_validation() {
                            // check max characters
                            var validations = jquery__WEBPACK_IMPORTED_MODULE_2___default()('[validation]');

                            function validateEmail(email) {
                                var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
                                return re.test(email);
                            }

                            var maxChars = function maxChars(input, num) {
                                var count = jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).val().split('').length;

                                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).attr('name') === 'browserTitle') {
                                    var originalNum = num;
                                    num = originalNum - jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).attr('chars-substract').split('').length;
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="addSiteName"]').on('change', function() {
                                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="addSiteName"]:checked').attr('checked')) {
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="browserTitle"]').attr('chars-substract', jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="addSiteName"]').attr('to-substract'));
                                        } else {
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="browserTitle"]').attr('chars-substract', '');
                                        }

                                        num = originalNum - jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).attr('chars-substract').split('').length;
                                        doCheck();
                                    });
                                }

                                var doCheck = function doCheck() {
                                    count = jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).val().split('').length;
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).parents('.field').attr('charCount', count + '/' + num);

                                    if (num < count) {
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).parents('.field').addClass('error');
                                    } else {
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).parents('.field').removeClass('error');
                                    }
                                };

                                doCheck(); // on keyup event

                                jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).on('keyup', function() {
                                    doCheck();
                                });
                            };

                            var minChars = function minChars(input, num) {
                                var count = jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).val().split('').length;

                                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).attr('name') === 'browserTitle') {
                                    var originalNum = num;
                                    num = originalNum - jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).attr('chars-substract').split('').length;
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="addSiteName"]').on('change', function() {
                                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="addSiteName"]:checked').attr('checked')) {
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="browserTitle"]').attr('chars-substract', jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="addSiteName"]').attr('to-substract'));
                                        } else {
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()('[name="browserTitle"]').attr('chars-substract', '');
                                        }

                                        num = originalNum - jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).attr('chars-substract').split('').length;
                                        doCheck();
                                    });
                                }

                                var doCheck = function doCheck() {
                                    count = jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).val().split('').length;
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).parents('.field').attr('charCount', count + '/' + num);

                                    if (num > count) {
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).parents('.field').addClass('error');
                                    } else {
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).parents('.field').removeClass('error');
                                    }
                                };

                                doCheck(); // on keyup event

                                jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).on('keyup', function() {
                                    doCheck();
                                });
                            };

                            validations.each(function(i) {
                                var input = validations[i];
                                var options = jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).attr('validation').split(' ');
                                jquery__WEBPACK_IMPORTED_MODULE_2___default()(options).each(function(o) {
                                    var option = options[o].split('-');
                                    var prop = option[0];
                                    var act = option[1];

                                    switch (prop) {
                                        case 'maxChars':
                                            maxChars(input, act);
                                            break;

                                        case 'minChars':
                                            minChars(input, act);
                                            break;

                                        case 'price':
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).on('keyup', function() {
                                                var val = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_5__["formatPrice"])(jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).val());
                                                jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).val(val);

                                                if (val.replace(/,/g, '') > 0) {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).parents('.field').removeClass('error');
                                                } else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).parents('.field').addClass('error');
                                                }
                                            });
                                            break;

                                        case 'email':
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).on('keyup', function(e) {
                                                var emailValue = e.target.value;
                                                console.log(emailValue);
                                                var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])+/;
                                                var isValid = pattern.test(emailValue);

                                                if (emailValue !== '' && isValid == true) {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.field').removeClass('error');

                                                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.step').length > 0) {
                                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.step').removeClass('error');
                                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.step').find('.adviser-form--btn').addClass('aprove');
                                                    }
                                                } else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.field').addClass('error');

                                                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.step').length > 0) {
                                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.step').addClass('error');
                                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.step').find('.adviser-form--btn').removeClass('aprove');
                                                    }
                                                } // if (validateEmail($(input).val()) === false) {
                                                //     $(input)
                                                //         .parents('.field')
                                                //         .addClass('error');
                                                // } else {
                                                //     $(input).valid();
                                                //     // $(input)
                                                //     //     .parents('.field')
                                                //     //     .removeClass('error');
                                                // }

                                            });
                                            break;

                                        default:
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()(input).on('change', function() {
                                                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).val() === '') {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.field').addClass('error');
                                                } else {
                                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(this).parents('.field').removeClass('error');
                                                }
                                            });
                                            break;
                                    }
                                });
                            }); // // handle local adviser homepage form
                            // $('.adviser-form--btn').on('click', function(e) {
                            //     e.preventDefault();
                            //     $(this).parents('#adviser-form').find('input[type="email"]').valid();
                            //     if (step1_form.find('input').val() !== '' && isValid == true) {
                            //         step1_form.addClass('hide');
                            //         step1_form.next().removeClass('hide');
                            //     } 
                            // });

                            jquery__WEBPACK_IMPORTED_MODULE_2___default()('form').on('submit', function() {
                                var form = jquery__WEBPACK_IMPORTED_MODULE_2___default()(this);
                                var required_inputs = form.find('[validation]');
                                jquery__WEBPACK_IMPORTED_MODULE_2___default()(required_inputs).each(function(i) {
                                    var required_input = jquery__WEBPACK_IMPORTED_MODULE_2___default()(required_inputs[i]);

                                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(required_input).val() === '') {
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(required_input).parents('.field').addClass('error').attr('error-message', jquery__WEBPACK_IMPORTED_MODULE_2___default()(required_input).attr('required-message') ? jquery__WEBPACK_IMPORTED_MODULE_2___default()(required_input).attr('required-message') : 'required field');
                                    } else {
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(required_input).parents('.field').removeClass('error');
                                    }
                                });

                                if (form.find('.error').length != 0) {
                                    form.find('.error').first().find('input, textarea, select').focus();
                                    return false;
                                } else if (form.parents('#newsletter').length > 0) {
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
                                        url: form.attr('action'),
                                        type: form.attr('method'),
                                        data: {
                                            email: form.children('label').children('input[name=email]').val(),
                                            newsLettEr: form.children('input[name=newsLettEr]').val(),
                                            _token: form.children('input[name=_token]').val()
                                        },
                                        success: function success(d) {
                                            if (d.status = 0) {
                                                jquery__WEBPACK_IMPORTED_MODULE_2___default()('.message').text(d.message).removeClass('closed').addClass('error');
                                            } else {
                                                jquery__WEBPACK_IMPORTED_MODULE_2___default()('.message').text(d.message).removeClass('closed').addClass('success');
                                            }

                                            setTimeout(function() {
                                                jquery__WEBPACK_IMPORTED_MODULE_2___default()('.message').addClass('closed').removeClass('success error');
                                            }, 4000);
                                            form.children('label').children('input[name=email]').val('');
                                        }
                                    });
                                    return false;
                                }

                                {
                                    return true;
                                }
                            });
                        }
                    }]);

                    return Form;
                }();



            /***/
        }),

    /***/
    "./script/components/home-tabs-filter.js":
        /*!***********************************************!*\
          !*** ./script/components/home-tabs-filter.js ***!
          \***********************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return HomeTabsFilter;
            });
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _infiniteScroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./infiniteScroll */ "./script/components/infiniteScroll.js");
            // @flow


            function HomeTabsFilter() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab .search-filter-input-dropdown-link').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.fa-close.search-filter-input-icon').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab [id="createSearchData"]').unbind('click');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab .search-filter-input');

                if (screen.width < 992) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search .search-filter-input-dropdown-link').unbind('click');
                }

                /* Set location value desktop */

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab [linktype="location"] .checkbox-filter').on('change', function(e) {
                    e.preventDefault();
                    var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                    setInputValue('city_slug', value);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-tab-input').each(function(tabInput) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(tabInput).removeClass('open');
                    });
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.area-dropdown ul label').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().removeClass('open');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().addClass('hasValue');
                    var areaValue = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[name="area_slug"]').val();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-area-value').text(areaValue);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="selected_area_slug"]').val(areaValue);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-tab-input').each(function(tabInput) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(tabInput).removeClass('open');
                    });
                });
                /* Set type value desktop */

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab [linktype="type"] .checkbox-filter').on('change', function(e) {
                    e.preventDefault();
                    var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab input[name="type_slug"]').val(value);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-tab-input').each(function(tabInput) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(tabInput).removeClass('open');
                    });
                });
                /* Set bedrooms value desktop */

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab [linktype="bedrooms"] .checkbox-filter').on('change', function(e) {
                    e.preventDefault();
                    var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab input[name="bedrooms"]').val(value);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-tab-input').each(function(tabInput) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(tabInput).removeClass('open');
                    });
                });
                /* Set area value desktop */

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab .area-dropdown ul label').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().removeClass('open');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().parent().parent().parent().addClass('hasValue');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-area-value').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[name="area_slug"]').val());
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="selected_area_slug"]').val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[name="area_slug"]').val());
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-tab-input').each(function(tabInput) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(tabInput).removeClass('open');
                    });
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-dropdown-link.checkbox-container').on('click', function() {
                    var city_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="selected_area_slug"]').val(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[name="area_slug"]').val());
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + city_name + '_default_area_wrapper').addClass('d-none');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + city_name + '_selected_area_wrapper').removeClass('d-none');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + city_name + '_selected_area').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('input[name="area_slug"]').val());
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-location-input').removeClass('open');
                });
                /* Set all values mobile */

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab .search-filter-input-dropdown-link').on('click', function(e) {
                    var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');
                    var input = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type');
                    setInputValue(input, value);
                    setMobileDropdownAttributes(this, input);
                    e.preventDefault();
                    new _infiniteScroll__WEBPACK_IMPORTED_MODULE_1__["default"]();
                });
                /* Search/Filter Home Tabs */

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab [id="createSearchData"]').on('click', function(event) {
                    var url = search('.home-tab'); //console.log('redirectUrl >>', url);

                    window.location.href = url;
                    window.ga('send', {
                        hitType: 'event',
                        eventCategory: window.location.href.indexOf('real_estate/turkey') > -1 ? 'Search Listing' : 'Search Home',
                        eventAction: 'click',
                        eventLabel: url
                    });
                    event.preventDefault();
                });
                /* On Input [Home Tabs] */

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab .search-filter-input').on('click', function() {
                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('open')) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab .search-filter-input.open').removeClass('open');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).addClass('open');
                    }
                });
                /* Filter Listing Mobile */

                if (screen.width < 992) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sec-search .search-filter-input-dropdown-link').on('click', function(event) {
                        var type = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('type');
                        var value = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value');

                        if (value != '' && value.toLowerCase().search(' ') > -1) {
                            value = value.toLowerCase().split(' ').join('-');
                        }

                        if (type == 'minPrice') {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').val(value);
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice-input').val('');
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="priceRange"]').val(value + ":");
                            var selector = '.sec-search input.checkbox-filter-maxPrice';
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).each(function() {
                                if (parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) <= parseFloat(value)) {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hide();
                                } else {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().show();
                                }
                            });

                            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('minPricehidden')) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues').find('.minPriceValue').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());

                                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice-input').val() !== '') {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasOneValue OriginValue').addClass('hasValue');
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#price-toggle').find('.fa').removeClass('fa-angle-down fa-angle-up').addClass('fa-close').addClass('clearInput');
                                } else {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasValue').addClass('hasOneValue');
                                }
                            }

                            var url = search('.sec-search');
                            console.log('url min >>', url);
                            window.location.href = url;
                            new _infiniteScroll__WEBPACK_IMPORTED_MODULE_1__["default"]();
                            return false;
                        }

                        if (type == 'maxPrice') {
                            var maxPrice = value;
                            var minPrice = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').val();
                            var currentCurrency = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#currentCurrency').val();

                            if (minPrice !== '' && minPrice.includes(currentCurrency) && minPrice.includes("k")) {
                                minPrice = minPrice.replace(currentCurrency, '');
                                minPrice = minPrice.replace('k', '000.00');
                            }

                            minPrice = minPrice != '' ? minPrice : '0.00';
                            var priceRange = minPrice + ":" + maxPrice;
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="priceRange"]').val(priceRange);

                            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('maxPricehidden')) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues').find('.maxPriceValue').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text());

                                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').val() !== '') {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasOneValue OriginValue').addClass('hasValue');
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#price-toggle').find('.fa').removeClass('fa-angle-down fa-angle-up').addClass('fa-close').addClass('clearInput');
                                } else {
                                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input#price-toggle').removeClass('hasValue').addClass('hasOneValue');
                                }
                            }

                            var _url = search();

                            console.log('url max 2 >>', _url);
                            window.location.href = _url;
                            new _infiniteScroll__WEBPACK_IMPORTED_MODULE_1__["default"]();
                            return false;
                        }

                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('.search-filter-input').first().addClass('hasValue').removeClass('open').find('.search-filter-input-value').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text()).parents('.search-filter-input').find('.fa').removeClass('fa-angle-down fa-angle-up').addClass('fa-close').addClass('clearInput').parents('.search-filter-input').find('.search-filter-input-title').attr('value', jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('value')).attr('type', type);
                        event.preventDefault();
                        new _infiniteScroll__WEBPACK_IMPORTED_MODULE_1__["default"]();
                    });
                }
            }
            window.activeTab = 'tab-1'; //switch home tabs

            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-link').on('click', function() {
                var tabId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target");
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab').removeClass('show active');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(tabId).addClass('show active');
                window.activeTab = tabId.replace('#', '');

                switch (window.activeTab) {
                    case 'tab-1':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('');
                        break;

                    case 'tab-2':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('istanbul');
                        break;

                    case 'tab-3':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('bodrum');
                        break;

                    case 'tab-4':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('antalya');
                        break;

                    case 'tab-5':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('bursa');
                        break;

                    case 'tab-6':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('fethiye');
                        break;
                }

                clearHomeTabs();
            });

            function clearHomeTabs() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-area-value').text('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="selected_area_slug"]').val('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="type_slug"]').val('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="priceRange"]').val('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="bedrooms"]').val('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="ref"]').val('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice-input').val('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice-input').val('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPriceValue').text('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPriceValue').text('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-value').text('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues').css({
                    'display': 'none'
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkbox-filter-maxPrice').each(function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().show();
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.price-toggle').each(function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).removeClass('hasValue');
                });
                var city_name = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="selected_area_slug"]').val();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + city_name + '_default_area_wrapper').removeClass('d-none');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + city_name + '_selected_area_wrapper').addClass('d-none');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#' + city_name + '_selected_area').text();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[linktype="location"]').removeClass('hasValue');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[linktype="type"]').removeClass('hasValue');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[linktype="bedrooms"]').removeClass('hasValue');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab input').prop("checked", false);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkbox-container input:checked ~ .checkmark').css({
                    'background-color': '#eee'
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.checkmark:after').css({
                    'content': 'unset'
                });
            }

            window.activeTab = 'tab-1'; //switch home tabs

            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.nav-link').on('click', function() {
                var tabId = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).data("target");
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.home-tab').removeClass('show active');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(tabId).addClass('show active');
                window.activeTab = tabId.replace('#', '');

                switch (window.activeTab) {
                    case 'tab-1':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('');
                        break;

                    case 'tab-2':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('istanbul');
                        break;

                    case 'tab-3':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('bodrum');
                        break;

                    case 'tab-4':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('antalya');
                        break;

                    case 'tab-5':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('bursa');
                        break;

                    case 'tab-6':
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="city_slug"]').val('fethiye');
                        break;
                }

                clearHomeTabs();
            });

            function setInputValue(input, value) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(".home-tab input[name='" + input + "']").val(value);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(".sec-search input[name='" + input + "']").val(value);
            }

            function setMobileDropdownAttributes(input, type) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).parents('.search-filter-input').first().addClass('hasValue').removeClass('open').find('.search-filter-input-value').text(jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).text()).parents('.search-filter-input').find('.fa').removeClass('fa-angle-down fa-angle-up').addClass('fa-close').addClass('clearInput').parents('.search-filter-input').find('.search-filter-input-title').attr('value', jquery__WEBPACK_IMPORTED_MODULE_0___default()(input).attr('value')).attr('type', type);
            }

            function search(page) {
                var selectedCity, selectedArea, selectedType, selectedPriceRange, selectedBedrooms, selectedRef;

                if (page == '.home-tab') {
                    selectedCity = jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="city_slug"]').val() ? '/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="city_slug"]').val() : '';
                    selectedArea = jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="selected_area_slug"]').val() ? '/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="selected_area_slug"]').val() : '';
                    selectedType = jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="type_slug"]').val() ? '/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="type_slug"]').val() : '';
                    selectedPriceRange = jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="priceRange"]').val();
                    selectedBedrooms = jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="bedrooms"]').val();
                    selectedRef = jquery__WEBPACK_IMPORTED_MODULE_0___default()(page + ' input[name="ref"]').val();
                    selectedArea = selectedArea.toLowerCase();

                    if (selectedArea.indexOf(' ') > -1) {
                        selectedArea = selectedArea.replaceAll(" ", "-");
                    }

                    selectedType = selectedType.toLowerCase();

                    if (selectedType.indexOf(' ') > -1) {
                        selectedType = selectedType.replaceAll(" ", "-");
                    }
                } else {
                    selectedCity = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title[type="city_slug"]').attr('value') ? '/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title[type="city_slug"]').attr('value') : '';
                    selectedArea = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title[type="area_slug"]').attr('value') ? '/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title[type="area_slug"]').attr('value') : '';
                    selectedType = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title[type="type_slug"]').attr('value') ? '/' + jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title[type="type_slug"]').attr('value') : '';
                    selectedPriceRange = jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="priceRange"]').val();
                    selectedBedrooms = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title[type="bedrooms"]').attr('value');

                    if (selectedBedrooms) {
                        selectedBedrooms = selectedBedrooms.split(' ')[0];
                    }

                    selectedRef = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-input-title[type="ref"]').attr('value');
                    selectedArea = selectedArea.toLowerCase();

                    if (selectedArea.indexOf(' ') > -1) {
                        selectedArea = selectedArea.replaceAll(" ", "-");
                    }

                    selectedType = selectedType.toLowerCase();

                    if (selectedType.indexOf(' ') > -1) {
                        selectedType = selectedType.replaceAll(" ", "-");
                    }
                }

                console.log(selectedType);
                var queryStringObject = {};
                var redirectUrl = SITE_URL + '/real_estate/turkey' + selectedCity + selectedArea + selectedType;

                if (selectedPriceRange) {
                    var priceMinMax = selectedPriceRange.toString().split(":");
                    var searchPrice = priceMinMax[0];

                    if (priceMinMax[1]) {
                        searchPrice = searchPrice + ':' + priceMinMax[1];
                    }

                    if (selectedPriceRange) {
                        queryStringObject.priceRange = searchPrice;
                    }
                }

                if (selectedBedrooms) queryStringObject.bedroom = selectedBedrooms;
                if (selectedRef) queryStringObject.ref = selectedRef;
                var params = new URLSearchParams(queryStringObject);

                if (params.toString()) {
                    redirectUrl = redirectUrl + '?' + params.toString();
                }

                return redirectUrl;
            }

            if (window.location.href.indexOf('real_estate/turkey') > -1) {
                var thenum_2 = window.location.href.replace(/^\D+/g, '');
                var selected_price_Desk = parseFloat(thenum_2);
                var max_prices_labels_Desk = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice ul input');

                for (var x = 0; x < max_prices_labels_Desk.length; x++) {
                    var maxValueSelected = max_prices_labels_Desk[x];
                    var maxValueSelectedVal = maxValueSelected.getAttribute('value');
                    maxValueSelected.parentNode.classList.remove('hide');

                    if (parseFloat(maxValueSelectedVal) <= parseFloat(selected_price_Desk)) {
                        maxValueSelected.parentNode.parentNode.style.display = 'block';
                        maxValueSelected.parentNode.classList.add('hide');
                    }
                }
            }

            var maxPriceVal = 0;
            var minPriceVal = 0;
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.minPrice ul .checkbox-container input').on('click', function() {
                minPriceVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues').css({
                    "display": "flex"
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues').show();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.price-toggle').addClass('hasValue');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues .minPriceValue').text(minPriceVal);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="priceRange"]').val(minPriceVal + ":");
                var selector = '.' + window.activeTab + '-max-prices';
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice-input.filter-input-text.width-unset').val('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPriceValue').text('');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(selector).each(function(index) {
                    if (parseFloat(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) <= parseFloat(minPriceVal)) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().hide();
                    } else {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().show();
                    }
                });
            });
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.maxPrice ul .checkbox-container input').on('click', function() {
                maxPriceVal = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.price-toggle').addClass('hasValue');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.price-toggle').removeClass('open');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues').show();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.priceValues .maxPriceValue').text(maxPriceVal);
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('input[name="priceRange"]').val(minPriceVal + ":" + maxPriceVal);
            });

            /***/
        }),

    /***/
    "./script/components/index.js":
        /*!************************************!*\
          !*** ./script/components/index.js ***!
          \************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./carousel */ "./script/components/carousel.js");
            /* harmony import */
            var _filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./filter */ "./script/components/filter.js");
            /* harmony import */
            var _home_tabs_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./home-tabs-filter */ "./script/components/home-tabs-filter.js");
            /* harmony import */
            var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../util/helpers */ "./script/util/helpers.js");
            /* harmony import */
            var _editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./editor */ "./script/components/editor.js");
            /* harmony import */
            var _form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./form */ "./script/components/form.js");
            /* harmony import */
            var _autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./autocomplete */ "./script/components/autocomplete.js");
            // @flow








            // init intTelInput

            function initComponents() {
                new _carousel__WEBPACK_IMPORTED_MODULE_1__["default"]('.carousel');
                new _editor__WEBPACK_IMPORTED_MODULE_5__["default"]();
                new _form__WEBPACK_IMPORTED_MODULE_6__["default"]();
                new _home_tabs_filter__WEBPACK_IMPORTED_MODULE_3__["default"]();
                var realestae = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["checkPage"])('realestate-list', function() {});

                if (!realestae) {
                    new _filter__WEBPACK_IMPORTED_MODULE_2__["default"]();
                }

                new _autocomplete__WEBPACK_IMPORTED_MODULE_8__["default"]();
            }

            /* harmony default export */
            __webpack_exports__["default"] = (initComponents);

            /***/
        }),

    /***/
    "./script/components/infiniteScroll.js":
        /*!*********************************************!*\
          !*** ./script/components/infiniteScroll.js ***!
          \*********************************************/
        /*! exports provided: screenWidth, default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* WEBPACK VAR INJECTION */
            (function($) { /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "screenWidth", function() {
                    return screenWidth;
                });
                /* harmony import */
                var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
                /* harmony import */
                var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */
                var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
                /* harmony import */
                var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */
                var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
                /* harmony import */
                var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__);
                /* harmony import */
                var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
                /* harmony import */
                var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__);
                /* harmony import */
                var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @babel/runtime/helpers/possibleConstructorReturn */ "../node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");
                /* harmony import */
                var _babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__);
                /* harmony import */
                var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! @babel/runtime/helpers/getPrototypeOf */ "../node_modules/@babel/runtime/helpers/getPrototypeOf.js");
                /* harmony import */
                var _babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__);
                /* harmony import */
                var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! @babel/runtime/helpers/inherits */ "../node_modules/@babel/runtime/helpers/inherits.js");
                /* harmony import */
                var _babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_inherits__WEBPACK_IMPORTED_MODULE_6__);
                /* harmony import */
                var _services_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ../services/service */ "./script/services/service.js");
                /* harmony import */
                var _util_helpers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ../util/helpers */ "./script/util/helpers.js");
                /* harmony import */
                var querystring__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! querystring */ "../node_modules/querystring-es3/index.js");
                /* harmony import */
                var querystring__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_9__);








                // import carousel from "./carousel";


                var screenWidth = {
                    mobile: window.matchMedia('(max-device-width: 480px)').matches,
                    tablet: window.matchMedia('(max-device-width: 768px)').matches,
                    screen: window.matchMedia('(min-width: 1024px)').matches
                };

                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js")))

            /***/
        }),

    /***/
    "./script/components/slider.js":
        /*!*************************************!*\
          !*** ./script/components/slider.js ***!
          \*************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return slider;
            });
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var slider_pro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! slider-pro */ "../node_modules/slider-pro/dist/js/jquery.sliderPro.js");
            /* harmony import */
            var slider_pro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(slider_pro__WEBPACK_IMPORTED_MODULE_1__);
            // @flow


            function slider(el, height) {
                var totlaSlides;
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).sliderPro({
                    width: 'auto',
                    height: height ? height : window.matchMedia('(max-width: 760)').matches ? 260 : 500,
                    loop: true,
                    fade: true,
                    arrows: true,
                    fadeArrows: false,
                    buttons: false,
                    fullScreen: true,
                    thumbnailArrows: true,
                    waitForLayers: true,
                    autoplay: false,
                    autoHeight: 1,
                    autoplayDelay: 3000,
                    responsive: true,
                    init: function init(e) {
                        totlaSlides = this.getTotalSlides();
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).removeClass('beforeINIT');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('.numofslides span').text(this.getSelectedSlide() + 1 + " / " + totlaSlides);
                    }
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).append('<a class="goFirstSlide fa fa-refresh"></a>');
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('.goFirstSlide').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).sliderPro('gotoSlide', 0);
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).on('gotoSlide', function(event) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).find('.numofslides span').text(event.index + 1 + " / " + totlaSlides);
                });
            };
            jquery__WEBPACK_IMPORTED_MODULE_0___default()('.sliderbtn-hover').on('click', function() {
                window.ga('send', {
                    hitType: 'event',
                    eventCategory: 'Slider',
                    eventAction: 'click',
                    eventLabel: window.location.url
                });
            });

            /***/
        }),

    /***/
    "./script/config/api.js":
        /*!******************************!*\
          !*** ./script/config/api.js ***!
          \******************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            var API = {
                "baseApi": {
                    "production": 'https://zoof.fr/',
                    "staging": 'http://zoof-front.kickstartinteractive.net/',
                    "development": 'http://zoof.loc:8080/'
                },
                "baseUrl": {
                    "production": 'https://zoof.fr/',
                    "staging": 'http://zoof-front.kickstartinteractive.net/',
                    "development": 'http://zoof.loc:8080/'
                },
                "key": {
                    "production": "RU98OminDo2018PeTU",
                    "development": "KEtKKz7EIX3JmCQV"
                },
                "calls": {
                    "favorite": "favorites/toggle-space"
                }
            };
            /* harmony default export */
            __webpack_exports__["default"] = (API);

            /***/
        }),

    /***/
    "./script/index.js":
        /*!*************************!*\
          !*** ./script/index.js ***!
          \*************************/
        /*! exports provided: lazyLoad */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* WEBPACK VAR INJECTION */
            (function($) { /* harmony export (binding) */
                __webpack_require__.d(__webpack_exports__, "lazyLoad", function() {
                    return lazyLoad;
                });
                /* harmony import */
                var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
                /* harmony import */
                var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
                /* harmony import */
                var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
                /* harmony import */
                var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__);
                /* harmony import */
                var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ./components */ "./script/components/index.js");
                /* harmony import */
                var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ./util */ "./script/util/index.js");
                /* harmony import */
                var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ./util/helpers */ "./script/util/helpers.js");
                /* harmony import */
                var _views_realestate__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ./views/realestate */ "./script/views/realestate.js");
                /* harmony import */
                var _views_sellestate__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__( /*! ./views/sellestate */ "./script/views/sellestate.js");
                /* harmony import */
                var _components_slider__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__( /*! ./components/slider */ "./script/components/slider.js");
                /* harmony import */
                var _library_typeahead__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__( /*! ./library/typeahead */ "./script/library/typeahead.js");
                /* harmony import */
                var jquery_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__( /*! jquery-validation */ "../node_modules/jquery-validation/dist/jquery.validate.js");
                /* harmony import */
                var jquery_validation__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/ __webpack_require__.n(jquery_validation__WEBPACK_IMPORTED_MODULE_9__);


                // init intTelInput
                // import * as Sentry from '@sentry/browser';







                // Sentry.init({
                //     dsn: 'https://f60d1c455ef842da9a33937f98332a15@sentry.io/1359248',
                //     environment: 'production'
                // });

                Object(_components__WEBPACK_IMPORTED_MODULE_2__["default"])();
                Object(_util__WEBPACK_IMPORTED_MODULE_3__["default"])();

                function lazyLoad() {
                    var imagesArray = document.querySelectorAll('body img.lazyloadImg');
                    imagesArray.forEach(function(img) {
                        var imgDataSrc = img.getAttribute('data-src') != null ? img.getAttribute('data-src') : null;

                        if (imgDataSrc != null) {
                            img.src = imgDataSrc;

                            if (img.classList.contains('lazyoadImg')) {
                                img.classList.remove('lazyoadImg');
                            }
                        }
                    });
                }
                lazyLoad();
                $('.highlight-search').on('click', function(event) {
                    var that = $(this);
                    var href = that.attr('href');
                    var main = $('body').find('#main');
                    var searchfilter = $('body').find('#search-filter');
                    $('body').find('#search-filter').addClass('highlight fixed open');
                    event.preventDefault();
                }); // $('.fav-enquire').on('click', function (event) {
                // 	var that = $(this);
                // 	var method = $(this).data('method');
                // 	var dataID = $(this).data('id');
                // 	var url = $(this).data('url');
                // 	if ($(this).hasClass('endpage')) {
                // 		var $favBorder =
                // 			'<svg xmlns="http://www.w3.org/2000/svg" width="28.101" height="25.446" viewBox="0 0 28.101 25.446">' +
                // 			'<path style="fill:#463d2b;stroke:#463d2b;stroke-width:2px;fill-rule:evenodd" id="Heart" d="M24.04 2.111a7.013 7.013 0 0 0-9.982 0l-.982.982-.982-.982a7.058 7.058 0 1 0-9.982 9.982l10.963 10.965L24.04 12.094a7.013 7.013 0 0 0 0-9.982" class="cls-1" transform="translate(.975 .975)"></path>' +
                // 			'</svg>';
                // 		var $favFill =
                // 			'<svg xmlns="http://www.w3.org/2000/svg" width="28.101" height="25.446" viewBox="0 0 28.101 25.446">' +
                // 			'<path style="fill:none;stroke:#463d2b;stroke-width:2px;fill-rule:evenodd" id="Heart" d="M24.04 2.111a7.013 7.013 0 0 0-9.982 0l-.982.982-.982-.982a7.058 7.058 0 1 0-9.982 9.982l10.963 10.965L24.04 12.094a7.013 7.013 0 0 0 0-9.982" class="cls-1" transform="translate(.975 .975)"></path>' +
                // 			'</svg>';
                // 	} else {
                // 		var $favFill =
                // 			'<svg xmlns="http://www.w3.org/2000/svg" width="20.189" height="18.465" viewBox="0 0 20.189 18.465">' +
                // 			'<path id="Heart" d="M16.76,1.479a4.887,4.887,0,0,0-6.956,0l-.684.684-.684-.684A4.919,4.919,0,0,0,1.479,8.435l7.64,7.64,7.64-7.64a4.887,4.887,0,0,0,0-6.956" transform="translate(0.975 0.975)" fill="none" stroke="#fff" stroke-width="2" fill-rule="evenodd"/>' +
                // 			'</svg>';
                // 		var $favBorder =
                // 			'<svg xmlns="http://www.w3.org/2000/svg" width="19" height="16.625" viewBox="0 0 19 16.625">' +
                // 			'<path id="heart-solid" d="M17.144,33.1a5.075,5.075,0,0,0-6.924.5l-.731.753-.731-.753a5.074,5.074,0,0,0-6.924-.5,5.328,5.328,0,0,0-.367,7.715l7.181,7.414a1.163,1.163,0,0,0,1.681,0l7.181-7.414a5.325,5.325,0,0,0-.364-7.715Z" transform="translate(0.012 -31.967)" fill="#fff" opacity="0.9"/>' +
                // 			'</svg>';
                // 	}
                // 	$.ajax({
                // 		type: method,
                // 		url: url,
                // 		data: {
                // 			rea_id: dataID
                // 		},
                // 		success: function (data) {
                // 			if (data.url_post) {
                // 				url = data.url_post;
                // 				method = 'POST';
                // 				$(that).find('svg').replaceWith($favFill);
                // 				$(that).data('method', method);
                // 				$(that).data('url', url);
                // 				if (that.hasClass('endpage')) {
                // 					that.find('span').text(LABELS.savefav);
                // 				}
                // 			} else if (data.url_delete) {
                // 				url = data.url_delete;
                // 				method = 'delete';
                // 				$(that).find('svg').replaceWith($favBorder);
                // 				$(that).data('method', method);
                // 				$(that).data('url', url);
                // 				if (that.hasClass('endpage')) {
                // 					that.find('span').text(LABELS.unsavefav);
                // 				}
                // 			}
                // 		}
                // 	});
                // 	event.preventDefault();
                // });

                $('.elastic-search').on('click', function() {
                    $('.searchWrapper').addClass('open');
                });
                $('.searchWrapper .close').on('click', function() {
                    $('.searchWrapper').removeClass('open');
                });
                $('.removeAlert').on('click', function() {
                    var _that = $(this);

                    $.ajax({
                        url: '/deleteAlert',
                        type: 'DELETE',
                        data: {
                            id: $(this).parents('.card').find('input[name="alert_id"]').val()
                        }
                    }).done(function(data) {
                        if (data.status == '1') {
                            _that.parents('.card').parent().remove();
                        }
                    });
                });
                $('.toggleAlert').change(function() {
                    var _that = $(this);

                    if ($(this).is(':checked')) {
                        $.ajax({
                            url: '/toggleAlertStatus',
                            type: 'POST',
                            data: {
                                id: $(this).parents('.items-center').find('input[name="alert_id"]').val(),
                                status: $(this).parents('.items-center').find('input[name="alert_status"]').val()
                            }
                        }).done(function() {
                            _that.parents('.card').find('.alertLabel').text(LABELS.offAlert);
                        });
                    } else {
                        $.ajax({
                            url: '/toggleAlertStatus',
                            type: 'POST',
                            data: {
                                id: $(this).parents('.items-center').find('input[name="alert_id"]').val(),
                                status: $(this).parents('.items-center').find('input[name="alert_status"]').val()
                            }
                        }).done(function() {
                            _that.parents('.card').find('.alertLabel').text(LABELS.onAlert);
                        });
                    }
                });
                $('.header-contact.email').on('click', function(e) {
                    e.preventDefault();
                    $('.header-contact').parent().find('.header-contact-mobile.email').toggleClass('open');
                    $('.header-contact').parent().find('.header-contact-mobile.phone').removeClass('open');
                });
                $('.header-contact.phone').on('click', function(e) {
                    e.preventDefault();
                    $('.header-contact').parent().find('.header-contact-mobile.phone').toggleClass('open');
                    $('.header-contact').parent().find('.header-contact-mobile.email').removeClass('open');
                });
                $('.hidden_whatsapp').on('click', function() {
                    window.ga('send', {
                        hitType: 'event',
                        eventCategory: 'website',
                        eventAction: 'click',
                        eventLabel: 'Click Whatsapp'
                    });
                }); // handle local adviser homepage form

                $(document).on('click', ".adviser-form--btn.aprove", function(e) {
                    e.preventDefault();
                    var step1_form = $(this).parents('.step');
                    step1_form.addClass('hide');
                    step1_form.next().removeClass('hide');
                });
                $('body').on('change', '[name="testsort"]', function(ev) {
                    // console.log(ev.currentTarget, ev.currentTarget.value);
                    var targetId = ev.currentTarget.value;
                    console.log($("#".concat(targetId)));
                    var link = $("#".concat(targetId)).attr('href');
                    window.location.href = link;
                });
                var pattern = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+.([a-zA-Z])+([a-zA-Z])+/;
                var isValid_formEmail = pattern.test($('.isValidEmail').val());

                if (isValid_formEmail) {
                    $('.adviser-form--btn').addClass('aprove');
                }

                $(document).on('click', function() {
                    $('.top-nav-head > li > ul').hide();
                });
                $(document).on('click', '.top-nav-head>li>a', function(e) {
                    e.stopPropagation();
                    $(this).siblings('ul').toggle().closest('.top-nav-head>li').siblings('li').find('ul').hide();
                });

                if (window.matchMedia('(max-width: 1000px)').matches && document.getElementById('first-end-div') !== null && typeof document.getElementById('first-end-div') !== 'undefined') {
                    $(window).scroll(function() {
                        var hT = $('#first-end-div').offset().top,
                            hH = $('#first-end-div').outerHeight(),
                            wH = $(window).height(),
                            wS = $(this).scrollTop();

                        if (wS > hT + hH - wH) {
                            $('.add_enquire.scrollToForm').removeClass("hide");
                        }
                    });
                    $(window).scroll(function() {
                        var hT = $('#reachtoform-end').offset().top,
                            hH = $('#reachtoform-end').outerHeight(),
                            wH = $(window).height(),
                            wS = $(this).scrollTop();

                        if (wS > hT + (hH / 2 + 150) - wH) {
                            $('.add_enquire.scrollToForm').addClass("hide").removeClass('formbottom-position');
                        }
                    });
                    $(window).scroll(function() {
                        var hT = $('#property-areas').offset().top,
                            hH = $('#property-areas').outerHeight(),
                            wH = $(window).height(),
                            wS = $(this).scrollTop();

                        if (wS > hT + hH / 2 - wH) {
                            $('.add_enquire.scrollToForm').removeClass("hide").addClass('formbottom-position');
                        }
                    });
                }

                if (window.matchMedia('(max-width: 1000px)').matches && document.getElementsByClassName('hidewhatsapptv') !== null && typeof document.getElementsByClassName('hidewhatsapptv') !== 'undefined') {
                    $('.hidewhatsapptv').hide();
                }

                $('.randompassform').on('submit', function(e) {
                    var randompass = makeid(6);
                    $(this).find('[type=password]').val(randompass);
                });

                function makeid(length) {
                    var result = '';
                    var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                    var charactersLength = characters.length;

                    for (var i = 0; i < length; i++) {
                        result += characters.charAt(Math.floor(Math.random() * charactersLength));
                    }

                    return result;
                } //pagination
                //   $('.btn-seemore-listing').on('click',function (e) {
                //         e.preventDefault();
                //         console.log($(this).parents('.mainProperties'));
                //         $(this).parents('.mainProperties').find('.pagination').find('.next').not('.disabled').click();
                //   });
                // handle social media clicks
                // override amp style 


                $('.MsoNormal').find('span').attr('style', '');
                $('#btn-share').on('click', function() {
                    $('.navbar-nav').toggleClass('show');
                    $('.chat-icon , .close-icon').toggleClass('hide');
                });
                $('.buyer-guide--supertitle').on('click', function() {
                    $(this).next().toggleClass('hide');
                    $(this).children().eq(1).toggleClass('fa-angle-up fa-angle-down');
                });
                $('.side-item').map(function(i, item) {
                    if (!$(item).find('.buyer-guide--ul li').length) {
                        $(item).find('.tabs-icon').hide();
                    }
                });
                $('body').on('click', '.show_hidev1', function(e) {
                    e.preventDefault();
                    $('.details:first').toggleClass('d-block');
                    $('.details').toggleClass('opened');

                    if (!(window.location.href.indexOf('zh') > -1) && document.querySelector('.show_hidev1') !== null && typeof document.querySelector('.show_hidev1') !== 'undefined') {
                        $(this).text($(this).text() == 'Continue Reading' ? 'Hide the text' : 'Continue Reading');
                    }

                    if (window.location.href.indexOf('zh') > -1 && document.querySelector('.show_hidev1') !== null && typeof document.querySelector('.show_hidev1') !== 'undefined') {
                        $(this).text($(this).text() == '继续阅读' ? '' : '继续阅读');
                    }

                    $('.details:last, .show_hidev1:last').hide();
                });
                $('.toggler-button').on('click', function() {
                    if ($(this).prop('checked') == true) {
                        $(this).parent().css('backgroundColor', '#ddc79a');
                    } else if ($(this).prop('checked') == false) {
                        $(this).parent().css('backgroundColor', '#989898');
                    }
                });
                $('#tags-blog-dropdown ul .endpage-selectcurrency').on('click', function() {
                    $(this).children('ul').toggle();
                });
                $('#searchh-iconss , .searchMore').on('click', function(e) {
                    e.preventDefault(); // $('#price-toggle, .minPrice , .maxPrice, #referanceid ,  .tags , .seabtn ').toggleClass('hide');

                    $('#price-toggle, .minPrice.search-filter-input , .maxPrice.search-filter-input, #referanceid ,  .tags').toggleClass('hide');
                    $('.bedrooms , .areas , .refId').toggleClass('hideMobile');
                    $('.plusicon , .minusicon').toggleClass('hide');

                    if ($(this).text() == 'More' && $(this).hasClass('searchMore')) {
                        $(this).text('Less').addClass('w-100 flex content-center');
                        $('body').addClass('searchOpen');
                    } else if ($(this).text() == 'Less' && $(this).hasClass('searchMore')) {
                        $(this).text('More').removeClass('w-100 flex content-center');
                        $('body').removeClass('searchOpen');
                    }
                });

                if ($(window).width() <= 720) {
                    $('.footer-phone').on('click', function(e) {
                        e.preventDefault();
                        $('.dropdown-content').show();
                        $(this).parents().eq(1).toggleClass('show');
                        $('.chat-icon , .close-icon').toggleClass('hide');
                    });
                    $('.dropdown-content a').on('click', function() {
                        $('.dropdown-content').hide();
                    });

                    if ($('.buyer-guide--ul li').hasClass('active')) {
                        $('html, body').animate({
                            scrollTop: $(".buyer-guide--side-bar-bg-details").offset().top
                        }, 300);
                    }
                }

                $(window).scroll(function() {
                    if ($(this).scrollTop() > 1500) {
                        $('#scrolltopsmooth').fadeIn();
                    } else {
                        $('#scrolltopsmooth').fadeOut();
                    }
                });
                $('#scrolltopsmooth').click(function() {
                    $("html, body").animate({
                        scrollTop: 0
                    }, 600);
                    return false;
                });
                $('ul.tabs li').on('click', function() {
                    var tab_id = $(this).attr('data-tab');
                    $('ul.tabs li').removeClass('current');
                    $('.tab-content').removeClass('current');
                    $(this).addClass('current');
                    $('#' + tab_id).addClass('current');
                }); // $('.navbutton').on('click',function() {
                // 	$('body').addClass("position-fixed");
                //  }); 
                // $('.closeNavBtn').on('click', function(){
                // 	$('body').removeClass("position-fixed");
                // })

                if (window.matchMedia('(max-width: 999px)').matches && window.location.href.indexOf('profile') > -1 && document.querySelector('ul.tabs') !== null && typeof document.querySelector('ul.tabs') !== 'undefined') {
                    window.onload = function() {
                        $('ul.tabs').animate({
                            scrollLeft: $('ul.tabs li.current').offset().left
                        }, 300);
                    };
                } // change style in Definitive Buyer Guide PDF only


                if (window.location.href.indexOf('definitive-buyer-guide-pdf') > -1 || window.location.href.indexOf('how-to-set-up-a-business-in-turkey') > -1) {
                    $('.buyer-guide--side-bar-bg-details .areabody').css('display', 'block');
                }

                $('.scrollToForm').on('click', function(e) {
                    e.preventDefault();
                    $('html, body').animate({
                        scrollTop: $('#enquire_form_end').offset().top - 100
                    }, 300);
                    $('#enquire_form_end').find('input[name="first_name"]').focus(); // $('.pt-main-info').addClass('hide');

                    $('article').removeClass('over');
                });

                if (window.location.href.indexOf('real_estate/add-new-property') > -1 || window.location.href.indexOf('real_estate/edit-my-property') > -1) {
                    $('[rel="bedrooms"] input').attr("type", "number");
                    $('[rel="bathrooms"] input').attr("type", "number");
                    $('[rel="living_space"] input').attr("type", "number");
                    $('[rel="land"] input').attr("type", "number");
                    $('[rel="price"] input').attr("type", "number");
                }
                /** search homepage bodrum && fethiye make bold **/


                $('.checkbox-container input[value="kalkan"]').parent().addClass('bold');
                $('.checkbox-container input[value="fethiye"]').parent().addClass('bold');
                $('.checkbox-container input[value="antalya"]').parent().addClass('bold');
                $('.checkbox-container input[value="bursa"]').parent().addClass('bold');
                $('.checkbox-container input[value="istanbul"]').parent().addClass('bold');
                $('.checkbox-container input[value="bodrum"]').parent().addClass('bold'); // Close all dropdown onclick on another element

                $(document).bind('click', function(e) {
                    if (!$(e.target).parents().hasClass("dropdown")) $(".dropdown dd ul").hide();
                });
                $('footer a.expand').on('click', function(e) {
                    e.preventDefault();

                    if ($(this).parent().find('.list-unstyled').hasClass('expanded')) {
                        $(this).html('More <i class="fa fa-chevron-down" aria-hidden="true"></i>');

                        if (window.location.href.indexOf('zh') > -1 && document.querySelector('footer a.expand') !== null && typeof document.querySelector('footer a.expand') !== 'undefined') {
                            $(this).html('更多 <i class="fa fa-chevron-down" aria-hidden="true"></i>');
                        }

                        if (window.location.href.indexOf('ar') > -1 && document.querySelector('footer a.expand') !== null && typeof document.querySelector('footer a.expand') !== 'undefined') {
                            $(this).html('المزيد <i class="fa fa-chevron-down" aria-hidden="true"></i>');
                        }

                        if (window.location.href.indexOf('fa') > -1 && document.querySelector('footer a.expand') !== null && typeof document.querySelector('footer a.expand') !== 'undefined') {
                            $(this).html('بیشتر <i class="fa fa-chevron-down" aria-hidden="true"></i>');
                        }

                        if (window.location.href.indexOf('ru') > -1 && document.querySelector('footer a.expand') !== null && typeof document.querySelector('footer a.expand') !== 'undefined') {
                            $(this).html('больше <i class="fa fa-chevron-down" aria-hidden="true"></i>');
                        }

                        $(this).parent().find('.list-unstyled').removeClass('expanded');
                    } else {
                        $(this).html('Less <i class="fa fa-chevron-up" aria-hidden="true"></i>');

                        if (window.location.href.indexOf('zh') > -1 && document.querySelector('footer a.expand') !== null && typeof document.querySelector('footer a.expand') !== 'undefined') {
                            $(this).html('收起 <i class="fa fa-chevron-up" aria-hidden="true"></i>');
                        }

                        if (window.location.href.indexOf('ar') > -1 && document.querySelector('footer a.expand') !== null && typeof document.querySelector('footer a.expand') !== 'undefined') {
                            $(this).html('اقل <i class="fa fa-chevron-up" aria-hidden="true"></i>');
                        }

                        if (window.location.href.indexOf('fa') > -1 && document.querySelector('footer a.expand') !== null && typeof document.querySelector('footer a.expand') !== 'undefined') {
                            $(this).html('کمتر <i class="fa fa-chevron-up" aria-hidden="true"></i>');
                        }

                        if (window.location.href.indexOf('ru') > -1 && document.querySelector('footer a.expand') !== null && typeof document.querySelector('footer a.expand') !== 'undefined') {
                            $(this).html('меньше <i class="fa fa-chevron-up" aria-hidden="true"></i>');
                        }

                        $(this).parent().find('.list-unstyled').addClass('expanded');
                    }
                });

                if (document.querySelector('.play_video_youtube') !== null && typeof document.querySelector('.play_video_youtube') !== 'undefined') {
                    $('.play_video_youtube').on("click", function() {
                        $(this).addClass("hide");
                        $(this).parent().find('.custom-youtube-video--bigimg').addClass('hide');
                        var youtube_video = $(this).parent().find('iframe');
                        youtube_video.clone().insertBefore("#insertbefore-youtube");
                        $(".custom-youtube-video").find('iframe').last().removeClass('hide');
                        $(".custom-youtube-video").find('iframe').last().attr("src", "https://www.youtube.com/embed/Pvkz9hArb0k?rel=0&amp;autoplay=1");
                    });
                }

                if (document.querySelector('.play_video_youtube-1') !== null && typeof document.querySelector('.play_video_youtube-1') !== 'undefined') {
                    $('.play_video_youtube-1').on("click", function() {
                        $(this).addClass("hide");
                        $(this).parent().find('.custom-youtube-video--bigimg-1').addClass('hide');
                        var youtube_video = $(this).parent().find('iframe');
                        youtube_video.clone().insertBefore("#insertbefore-youtube");
                        $(".custom-youtube-video-1").find('iframe').last().removeClass('hide');
                        $(".custom-youtube-video-1").find('iframe').last().attr("src", "https://www.youtube.com/embed/Pvkz9hArb0k?rel=0&amp;autoplay=1");

                        if (navigator.userAgent.match(/(iPhone|iPod|iPad)/i)) {
                            $('#s-icons').addClass('hide');
                        }
                    });
                }

                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["checkPage"])('property', function() {
                    $('#search-filter').removeClass('fixed').addClass('hide');
                    $('.property-end-search').remove();
                    $('.serviceFees .action').on('click', function(e) {
                        $('.serviceFees .hidden, .serviceFees .action').toggle();
                        e.preventDefault();
                    });

                    if ($('article').length > 0) {
                        Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["stickyHeader"])();
                    }

                    Object(_components_slider__WEBPACK_IMPORTED_MODULE_7__["default"])('.slider-pro');
                });
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["checkPage"])('realestate-list', function() {
                    Object(_views_realestate__WEBPACK_IMPORTED_MODULE_5__["default"])();
                });
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["checkPage"])('endpage', function() {
                    if ($('body').hasClass('buyer-guide')) {
                        if ($('.buyer-guide--side-bar-bg li.active').length > 0) {
                            $('.buyer-guide--side-bar-bg li.active').parent().removeClass('hide');
                        }
                    }
                });
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["checkPage"])('newProperty', function() {
                    new _views_sellestate__WEBPACK_IMPORTED_MODULE_6__["default"]();
                });
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["checkPage"])('turkey-concept ', function() {
                    $('input').on('change', function() {
                        if ($(this).val() !== '') {
                            $(this).parent().addClass('notEmpty');
                        }
                    });
                    $('form').on('submit', function() {
                        var nameEmpty = $(this).find('[name="name"]').val().length > 0;
                        var emailEmpty = $(this).find('[name="email"]').val().length > 0;
                        var phoneEmpty = $(this).find('[name="phone"]').val().length > 0;

                        if (nameEmpty && emailEmpty && phoneEmpty) {
                            return true;
                        } else {
                            return false;
                        }
                    });
                });
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["checkPage"])('quiz ', function() {
                    $('#quiz').css({
                        'min-height': window.innerHeight
                    });
                    ppt.fn.carousel('#questions', {
                        singleItem: true,
                        pagination: false,
                        navigation: false,
                        autoPlay: false,
                        rewindNav: false,
                        addClassActive: true,
                        mouseDrag: false,
                        autoHeight: false,
                        navigationText: ['Previous', 'Next']
                    });
                    var data = {};
                    var pass = {};
                    $('.question input, .question select').bind('change', function() {
                        data.budget = $('.quiz-budgetInput').val(), data.currency = {
                            id: $('.quiz-currency :selected').val(),
                            value: $('.quiz-currency :selected').data('value')
                        };
                        data.city = {
                            id: $('.quiz-city:checked').val(),
                            value: $('.quiz-city:checked').data('value')
                        };
                        data.type = {
                            id: $('.quiz-type:checked').val(),
                            value: $('.quiz-type:checked').data('value')
                        };
                        $('.summary-budget').text(data.budget);
                        $('.summary-currency').text(data.currency.value);
                        $('.summary-city').text(data.city.value);
                        $('.summary-type').text(data.type.value);
                        pass.budget = data.budget !== '' && typeof data.budget !== 'undefined';
                        pass.currency = data.currency.value !== '' && typeof data.currency.value !== 'undefined';
                        pass.city = data.city.value !== '' && typeof data.city.value !== 'undefined';
                        pass.type = data.type.value !== '' && typeof data.type.value !== 'undefined';

                        if (!pass.budget) {
                            $('.summary-budget').text('Please Enter your Budget');
                        }

                        if (pass.budget && pass.currency && pass.city && pass.type && pass.first_name && pass.last_name && pass.email && pass.telephone) {
                            $('.quiz-summarySubmit').removeAttr('disabled');
                        }

                        if (pass.city) {
                            $('.location .controls').addClass('active');
                        }

                        if (pass.type) {
                            $('.type .controls').addClass('active');
                        }
                    });
                    $('.question input').on('keyup', function() {
                        data.first_name = $('.quiz-first_name').val();
                        data.last_name = $('.quiz-last_name').val();
                        data.email = $('.quiz-email').val();
                        data.telephone = $('.quiz-telephone').val();
                        data.budget = $('.quiz-budgetInput').val();
                        pass.budget = data.budget !== '' && typeof data.budget !== 'undefined';
                        pass.first_name = data.first_name !== '' && typeof data.first_name !== 'undefined';
                        pass.last_name = data.last_name !== '' && typeof data.last_name !== 'undefined';
                        pass.email = data.email !== '' && typeof data.email !== 'undefined';
                        pass.telephone = data.telephone !== '' && typeof data.telephone !== 'undefined';

                        if (pass.budget && pass.currency && pass.city && pass.type && pass.first_name && pass.last_name && pass.email && pass.telephone) {
                            $('.quiz-summarySubmit').removeAttr('disabled');
                        }

                        if (pass.budget) {
                            $('.budget .controls').addClass('active');
                        }
                    });
                    var owl = $('#questions').data('owlCarousel');
                    $('.next').on('click', function() {
                        if ($(this).hasClass('active')) {
                            owl.next();
                        }
                    });
                    $('.prev').on('click', function() {
                        if ($(this).hasClass('active')) {
                            owl.prev();
                        }
                    });
                    $('.quiz-summarySubmit').on('click', function() {
                        var postData = {
                            budget: data.budget,
                            currency: data.currency.id,
                            city: data.city.id,
                            type: data.type.id,
                            first_name: data.first_name,
                            last_name: data.last_name,
                            email: data.email,
                            telephone: data.telephone
                        }; // in the success call

                        $('.message').removeClass('open').addClass('closed');
                        $('.loader').fadeIn(160);
                        $.ajax({
                            method: 'POST',
                            url: '/quizData',
                            data: postData
                        }).done(function(res) {
                            $('.loader').fadeOut(160);

                            if (res.status !== 0 && typeof res !== 'string') {
                                $('#questions').removeClass('active');
                                $('body').animate({
                                    scrollTop: 0
                                }, 1000).promise().done(function() {
                                    $('#quiz').addClass('listView');
                                    $('#listing').addClass('active');
                                    $(res.data).each(function() {
                                        var cloned = $('article.empty').clone();
                                        $(cloned).removeClass('empty');
                                        $(cloned).find('.title').text(this.title);
                                        $(cloned).find('.price').text(this.price);
                                        $(cloned).find('.thumbnail').attr('src', this.thumbnail);
                                        $(cloned).find('.url').attr('href', this.url);
                                        $(cloned).find('.description').text(this.description);
                                        $(cloned).find('.bedrooms span').text(this.bedrooms);
                                        $(cloned).find('.bathrooms span').text(this.bathrooms);
                                        $(cloned).find('.location span').text(this.location);
                                        $(cloned).find('.tags span').text(this.tags);
                                        $(cloned).find('.ref b').text(this.ref);
                                        $('#listing').append(cloned);
                                        $(cloned).find('.item-social-share .facebook').attr('href', 'https://www.facebook.com/sharer/sharer.php?u=' + this.url);
                                        $(cloned).find('.item-social-share .twitter').attr('href', 'https://twitter.com/home?status=' + this.title + 'propertyTurkey.com');
                                        $(cloned).find('.item-social-share .gplus').attr('href', 'https://plus.google.com/share?url=' + this.url);
                                    });
                                });
                            } else {
                                $('.message').text('Please Fill all Required Data').removeClass('closed').addClass('open').addClass('error');

                                for (key in res.message) {
                                    $('[name="' + key + '"]').parent().addClass('error');
                                }
                            }
                        });
                    });
                    $('#quiz').on('click', 'a.share', function() {
                        $(this).parent().next().slideToggle(300);
                        return false;
                    });
                    $(document).ready(function() {
                        $('#quiz').addClass('ready');
                    });
                    $('.searchAgain').on('click', function() {
                        $('#listing').find('.box').not('.empty').remove();
                        $('#listing, #questions').addClass('stopAnimation');
                        $('#questions').addClass('active');
                        $('#listing').removeClass('active');
                        $('#quiz').removeClass('listView');
                        owl.goTo(0);
                    });
                });

                (function() {
                    if ('serviceWorker' in navigator) {
                        navigator.serviceWorker.register("".concat(BASEURL, "/front/build/sw.js"));
                    }
                })();

                if (document.getElementById('readmore') !== null && typeof document.getElementById('readmore') !== 'undefined') {
                    var continuebtn = document.getElementById('readmore');
                    continuebtn.addEventListener('click', function() {
                        var headerOffset;

                        if (window.innerWidth > 800) {
                            headerOffset = 125;
                        } else if (window.innerWidth < 800) {
                            headerOffset = 0;
                        }

                        var element_more = document.querySelector('.continue-readingg');
                        var elementPosition = element_more.getBoundingClientRect().top;
                        var offsetPosition = elementPosition - headerOffset;
                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    });
                } // close dropdown search when click on window


                if (window.matchMedia('(min-width: 999px)').matches && document.querySelector('.search-filter-input') !== null && typeof document.querySelector('.search-filter-input') !== 'undefined') {
                    document.addEventListener("click", function(e) {
                        var element = document.querySelectorAll('.search-filter-input');

                        for (var i = 0; i < element.length; i++) {
                            if (e.target !== element[i] && !element[i].contains(e.target)) {
                                element[i].classList.remove('open');

                                if ($(element[i]).find('.fa').hasClass('fa-angle-up')) {
                                    $(element[i]).find('.fa').removeClass('fa-angle-up').addClass('fa-angle-down');
                                }
                            }
                        }
                    });
                }

                $('#seo a').on('click', function(e) {
                    e.preventDefault();
                });

                if (window.matchMedia('(max-width: 700px)').matches) {
                    $('.prevent-newtab-onmobile').removeAttr("target");
                }

                $(document).on('submit', '#contactus-form form', function() {
                    var oldText = document.querySelector("#contactus-form form textarea").value;
                    var newText = document.querySelector("#contactus-form form textarea").innerHTML = "50% " + oldText;
                    $('#contactus-form form textarea').val(newText);
                });

                if (window.location.href.indexOf('tv') > -1 && document.querySelector('.tv-myModal') !== null && typeof document.querySelector('.tv-myModal') !== 'undefined') {
                    $('body').on('click', '.myBtn', function(e) {
                        e.preventDefault();
                        $(this).siblings().eq(0).css("display", "block");
                    });
                    $('body').on('click', '.tv-close', function(e) {
                        e.preventDefault();
                        $(this).parents().find('.tv-myModal').css("display", "none");
                    });
                    $(window).on('click', function(event) {
                        if ($(event.target).hasClass('tv-myModal')) {
                            $('.tv-myModal').css("display", "none");
                        }
                    });
                }

                if (document.querySelector('.pagination') !== null && typeof document.querySelector('.pagination') !== 'undefined' && document.querySelector('.previous:not(.disabled)') !== null && typeof document.querySelector('.previous:not(.disabled)') !== 'undefined' && document.querySelector('.cardListing .page-title') !== null && typeof document.querySelector('.cardListing .page-title') !== 'undefined') {
                    var findWord = function findWord(word, str) {
                        return RegExp('\\b' + word + '\\b').test(str);
                    };

                    var prevpaginationlink = document.querySelector('.pagination').querySelector('.previous:not(.disabled)').querySelector('a').getAttribute('href');

                    if (document.querySelectorAll('.prev-action')[1] !== null && typeof document.querySelectorAll('.prev-action')[1] !== 'undefined') {
                        document.querySelectorAll('.prev-action')[1].style.display = "none";
                    }

                    var page_two_or_not = findWord(document.querySelector('.cardListing .page-title').textContent.replace(/\s+/g, '').split('Page')[1], '2');

                    if (window.location.href.indexOf('?page=') > -1) {
                        document.querySelector('.prev-action').classList.remove('hide');
                    }

                    document.querySelector('.prev-action').addEventListener('click', function(e) {
                        e.preventDefault();

                        if (page_two_or_not) {
                            window.location.href = window.location.href.split("?")[0];
                        } else {
                            window.location.href = prevpaginationlink;
                        }
                    });
                }

                $(function() {
                    // Initialize form validation on the registration form.
                    // It has the name attribute "registration"
                    $("form.endpage-form").validate({
                        // Specify validation rules
                        rules: {
                            // The key name on the left side is the name attribute
                            // of an input field. Validation rules are defined
                            // on the right side
                            first_name: "required",
                            phone: {
                                required: true
                            },
                            email: {
                                required: true,
                                // Specify that email should be validated
                                // by the built-in "email" rule
                                email: true
                            },
                            msg: "required"
                        },
                        // Specify validation error messages
                        messages: {
                            first_name: "Please enter your name",
                            phone: {
                                required: "Please enter your phone"
                            },
                            email: "Please enter a valid email address",
                            msg: "Please enter your message"
                        },
                        // Make sure the form is submitted to the destination defined
                        // in the "action" attribute of the form when valid
                        submitHandler: function submitHandler(form) {
                            form.submit();
                        }
                    });
                    $("form.randompassform").validate({
                        rules: {
                            firstName: "required",
                            email: {
                                required: true,
                                // Specify that email should be validated
                                // by the built-in "email" rule
                                email: true
                            },
                            mobile: {
                                required: true
                            }
                        },
                        // Specify validation error messages
                        messages: {
                            firstName: "Please enter your name",
                            email: "Please enter a valid email address",
                            mobile: {
                                required: "Please enter your phone"
                            }
                        },
                        // Make sure the form is submitted to the destination defined
                        // in the "action" attribute of the form when valid
                        submitHandler: function submitHandler(form) {
                            form.submit();
                        }
                    });
                }); // //autocomplete for search video tv

                if (window.location.href.indexOf('tv') > -1 && document.querySelector('#autocomplete-searchTv') !== null && typeof document.querySelector('#autocomplete-searchTv') !== 'undefined') {
                    var autoCompleteTv = function autoCompleteTv() {
                        var autocomplete_searchTv = document.querySelector('#autocomplete-searchTv');
                        var matchList = document.querySelector('#match-list');

                        var searchStates =
                            /*#__PURE__*/
                            function() {
                                var _ref = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1___default()(
                                    /*#__PURE__*/
                                    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(searchtext, e) {
                                        var res, states, matches;
                                        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
                                            while (1) {
                                                switch (_context.prev = _context.next) {
                                                    case 0:
                                                        _context.next = 2;
                                                        return fetch('api/tv-data');

                                                    case 2:
                                                        res = _context.sent;
                                                        _context.next = 5;
                                                        return res.json();

                                                    case 5:
                                                        states = _context.sent;
                                                        // Get Matches to current text input
                                                        matches = states.filter(function(state) {
                                                            var regex = new RegExp("^".concat(searchtext), 'gi');
                                                            return state.video_title.match(regex);
                                                        });
                                                        matchList.style.height = '200px';

                                                        if (searchtext.length === 0) {
                                                            matches = [];
                                                            matchList.innerHTML = '';
                                                            matchList.style.height = '0';
                                                        }

                                                        outputHtml(matches);

                                                    case 10:
                                                    case "end":
                                                        return _context.stop();
                                                }
                                            }
                                        }, _callee);
                                    }));

                                return function searchStates(_x, _x2) {
                                    return _ref.apply(this, arguments);
                                };
                            }(); //show result in html


                        var outputHtml = function outputHtml(matches) {
                            if (matches.length > 0) {
                                var html = matches.map(function(match) {
                                    return "\n        <div class=\"card card-body mb-1\" style=\"padding:0;\">\n\t\t\t<p class=\"search-result-tv-item\">".concat(match.video_title, "</p>\n        </div>\n        ");
                                }).join('');
                                matchList.innerHTML = html;
                                $('.search-result-tv-item').on('click', function() {
                                    var selectedRow = $(this).text().trim();
                                    $(this).parents('.search-tv-container').find('input[name="search"]').val(selectedRow);
                                    matchList.innerHTML = ''; // $(this).parents('form').submit();
                                });
                            }
                        };

                        autocomplete_searchTv.addEventListener('input', function() {
                            return searchStates(autocomplete_searchTv.value);
                        });
                    };

                    autoCompleteTv();
                } //partner stepForm


                if (window.location.href.indexOf('become-partner') > -1 && document.querySelector('.becomepartner-form') !== null && typeof document.querySelector('.becomepartner-form') !== 'undefined') {
                    (function() {
                        var current_fs, next_fs, previous_fs;
                        var opacity;
                        var current = 1;
                        var steps = $(".becomepartner-form .tab").length;
                        $(".becomepartner-form .next").click(function() {
                            current_fs = $(this).parent();
                            next_fs = $(this).parent().next();

                            if (!validateForm()) {
                                return false;
                            } else {
                                //Add Class Active
                                $(".becomepartner-form #progressbar li").eq($(".becomepartner-form .tab").index(next_fs)).addClass("active"); //show the next fieldset

                                next_fs.css({
                                    'display': 'flex'
                                }); //hide the current fieldset with style

                                current_fs.animate({
                                    opacity: 0
                                }, {
                                    step: function step(now) {
                                        // for making fielset appear animation
                                        opacity = 1 - now;
                                        current_fs.css({
                                            'display': 'none',
                                            'position': 'relative'
                                        });
                                        next_fs.css({
                                            'opacity': opacity
                                        });
                                    },
                                    duration: 500
                                });
                            }
                        });
                        $(".becomepartner-form .previous").click(function() {
                            current_fs = $(this).parent();
                            previous_fs = $(this).parent().prev(); //Remove class active

                            $(".becomepartner-form #progressbar li").eq($(".becomepartner-form .tab").index(current_fs)).removeClass("active"); //show the previous fieldset

                            previous_fs.css({
                                'display': 'flex'
                            }); //hide the current fieldset with style

                            current_fs.animate({
                                opacity: 0
                            }, {
                                step: function step(now) {
                                    // for making fielset appear animation
                                    opacity = 1 - now;
                                    current_fs.css({
                                        'display': 'none',
                                        'position': 'relative'
                                    });
                                    previous_fs.css({
                                        'opacity': opacity
                                    });
                                },
                                duration: 500
                            });
                        });

                        function validateForm() {
                            // This function deals with validation of the form fields
                            var x,
                                y,
                                i,
                                valid = true;
                            x = current_fs;
                            y = current_fs.find("input, textarea"); // A loop that checks every input field in the current tab:

                            for (i = 0; i < 2; i++) {
                                // If a field is empty...
                                if (y[i].value == "") {
                                    // add an "invalid" class to the field:
                                    y[i].className += " invalid"; // and set the current valid status to false:

                                    valid = false;
                                }

                                if (valid) {
                                    y[i].classList.remove("invalid");
                                }
                            }

                            return valid; // return the valid status
                        } //handle step checkboxes hide & show


                        function handleCheckboxForm(inputSelector, csshide) {
                            $(".becomepartner-form input[name=\"".concat(inputSelector, "\"]")).on('change', function() {
                                // get checked one            
                                var $target = $(".becomepartner-form input[name=\"".concat(inputSelector, "\"]:checked")); // hide all divs with .showhide class

                                $(".showhide-".concat(csshide)).hide(); // show div that corresponds to selected radio.

                                $($target.attr('data-section')).show();
                            });
                        }

                        handleCheckboxForm('has_experience_with_sale', '1-2');
                        handleCheckboxForm('has_realestate_experince', '3-4');
                        handleCheckboxForm('has_worked_as_agent_before', '5-6');
                        handleCheckboxForm('has_partnership_with_any_turkish_company', '7-8');
                    })();
                }
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js")))

            /***/
        }),

    /***/
    "./script/library/fileupload/js/jquery.fs.dropper.js":
        /*!***********************************************************!*\
          !*** ./script/library/fileupload/js/jquery.fs.dropper.js ***!
          \***********************************************************/
        /*! no exports provided */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* WEBPACK VAR INJECTION */
            (function(jQuery) { /* harmony import */
                var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
                /* harmony import */
                var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);


                /* 
                 * Dropper v1.0.1 - 2014-11-25 
                 * A jQuery plugin for simple drag and drop uploads. Part of the Formstone Library. 
                 * http://formstone.it/dropper/ 
                 * 
                 * Copyright 2014 Ben Plum; MIT Licensed 
                 */
                ;

                (function($, window) {
                    "use strict";

                    var supported = window.File && window.FileReader && window.FileList;
                    /**
                     * @options
                     * @param action [string] "Where to submit uploads"
                     * @param label [string] <'Drag and drop files or click to select'> "Dropzone text"
                     * @param maxQueue [int] <2> "Number of files to simultaneously upload"
                     * @param maxSize [int] <5242880> "Max file size allowed"
                     * @param postData [object] "Extra data to post with upload"
                     * @param postKey [string] <'file'> "Key to upload file as"
                     */

                    var options = {
                        action: "",
                        label: "Drag and drop files or click to select",
                        maxQueue: 2,
                        maxSize: 5242880,
                        // 5 mb
                        postData: {},
                        postKey: "file"
                    };
                    /**
                     * @events
                     * @event start.dropper ""
                     * @event complete.dropper ""
                     * @event fileStart.dropper ""
                     * @event fileProgress.dropper ""
                     * @event fileComplete.dropper ""
                     * @event fileError.dropper ""
                     */

                    var pub = {
                        /**
                         * @method
                         * @name defaults
                         * @description Sets default plugin options
                         * @param opts [object] <{}> "Options object"
                         * @example $.dropper("defaults", opts);
                         */
                        defaults: function defaults(opts) {
                            options = $.extend(options, opts || {});
                            return _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(this) === 'object' ? $(this) : true;
                        }
                    };
                    /**
                     * @method private
                     * @name _init
                     * @description Initializes plugin
                     * @param opts [object] "Initialization options"
                     */

                    function _init(opts) {
                        var $items = $(this);

                        if (supported) {
                            // Settings
                            opts = $.extend({}, options, opts); // Apply to each element

                            for (var i = 0, count = $items.length; i < count; i++) {
                                _build($items.eq(i), opts);
                            }
                        }

                        return $items;
                    }
                    /**
                     * @method private
                     * @name _build
                     * @description Builds each instance
                     * @param $nav [jQuery object] "Target jQuery object"
                     * @param opts [object] <{}> "Options object"
                     */


                    function _build($dropper, opts) {
                        opts = $.extend({}, opts, $dropper.data("dropper-options"));
                        var html = "";
                        html += '<div class="dropper-dropzone">';
                        html += opts.label;
                        html += '</div>';
                        html += '<input class="dropper-input" type="file"';

                        if (opts.maxQueue > 1) {
                            html += ' multiple';
                        }

                        html += '>';
                        $dropper.addClass("dropper").append(html);
                        var data = $.extend({
                            $dropper: $dropper,
                            $input: $dropper.find(".dropper-input"),
                            queue: [],
                            total: 0,
                            uploading: false
                        }, opts);
                        $dropper.on("click.dropper", ".dropper-dropzone", data, _onClick).on("dragenter.dropper", data, _onDragEnter).on("dragover.dropper", data, _onDragOver).on("dragleave.dropper", data, _onDragOut).on("drop.dropper", ".dropper-dropzone", data, _onDrop).data("dropper", data);
                        data.$input.on("change.dropper", data, _onChange);
                    }
                    /**
                     * @method private
                     * @name _onClick
                     * @description Handles click to dropzone
                     * @param e [object] "Event data"
                     */


                    function _onClick(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = e.data;
                        data.$input.trigger("click");
                    }
                    /**
                     * @method private
                     * @name _onChange
                     * @description Handles change to hidden input
                     * @param e [object] "Event data"
                     */


                    function _onChange(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = e.data,
                            files = data.$input[0].files;

                        if (files.length) {
                            _handleUpload(data, files);
                        }
                    }
                    /**
                     * @method private
                     * @name _onDragEnter
                     * @description Handles dragenter to dropzone
                     * @param e [object] "Event data"
                     */


                    function _onDragEnter(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = e.data;
                        data.$dropper.addClass("dropping");
                    }
                    /**
                     * @method private
                     * @name _onDragOver
                     * @description Handles dragover to dropzone
                     * @param e [object] "Event data"
                     */


                    function _onDragOver(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = e.data;
                        data.$dropper.addClass("dropping");
                    }
                    /**
                     * @method private
                     * @name _onDragOut
                     * @description Handles dragout to dropzone
                     * @param e [object] "Event data"
                     */


                    function _onDragOut(e) {
                        e.stopPropagation();
                        e.preventDefault();
                        var data = e.data;
                        data.$dropper.removeClass("dropping");
                    }
                    /**
                     * @method private
                     * @name _onDrop
                     * @description Handles drop to dropzone
                     * @param e [object] "Event data"
                     */


                    function _onDrop(e) {
                        e.preventDefault();
                        var data = e.data,
                            files = e.originalEvent.dataTransfer.files;
                        data.$dropper.removeClass("dropping");

                        _handleUpload(data, files);
                    }
                    /**
                     * @method private
                     * @name _handleUpload
                     * @description Handles new files
                     * @param data [object] "Instance data"
                     * @param files [object] "File list"
                     */


                    function _handleUpload(data, files) {
                        var newFiles = [];

                        for (var i = 0; i < files.length; i++) {
                            var file = {
                                index: data.total++,
                                file: files[i],
                                name: files[i].name,
                                size: files[i].size,
                                started: false,
                                complete: false,
                                error: false,
                                transfer: null
                            };
                            newFiles.push(file);
                            data.queue.push(file);
                        }

                        if (!data.uploading) {
                            $(window).on("beforeunload.dropper", function() {
                                return 'You have uploads pending, are you sure you want to leave this page?';
                            });
                            data.uploading = true;
                        }

                        data.$dropper.trigger("start.dropper", [newFiles]);

                        _checkQueue(data);
                    }
                    /**
                     * @method private
                     * @name _checkQueue
                     * @description Checks and updates file queue
                     * @param data [object] "Instance data"
                     */


                    function _checkQueue(data) {
                        var transfering = 0,
                            newQueue = []; // remove lingering items from queue

                        for (var i in data.queue) {
                            if (data.queue.hasOwnProperty(i) && !data.queue[i].complete && !data.queue[i].error) {
                                newQueue.push(data.queue[i]);
                            }
                        }

                        data.queue = newQueue;

                        for (var j in data.queue) {
                            if (data.queue.hasOwnProperty(j)) {
                                if (!data.queue[j].started) {
                                    var formData = new FormData();
                                    formData.append(data.postKey, data.queue[j].file);

                                    for (var k in data.postData) {
                                        if (data.postData.hasOwnProperty(k)) {
                                            formData.append(k, data.postData[k]);
                                        }
                                    }

                                    _uploadFile(data, data.queue[j], formData);
                                }

                                transfering++;

                                if (transfering >= data.maxQueue) {
                                    return;
                                } else {
                                    i++;
                                }
                            }
                        }

                        if (transfering === 0) {
                            $(window).off("beforeunload.dropper");
                            data.uploading = false;
                            data.$dropper.trigger("complete.dropper");
                        }
                    }
                    /**
                     * @method private
                     * @name _uploadFile
                     * @description Uploads file
                     * @param data [object] "Instance data"
                     * @param file [object] "Target file"
                     * @param formData [object] "Target form"
                     */


                    function _uploadFile(data, file, formData) {
                        if (file.size >= data.maxSize) {
                            file.error = true;
                            data.$dropper.trigger("fileError.dropper", [file, "Too large"]);

                            _checkQueue(data);
                        } else {
                            file.started = true;
                            file.transfer = $.ajax({
                                url: data.action,
                                data: formData,
                                type: "POST",
                                contentType: false,
                                processData: false,
                                cache: false,
                                xhr: function xhr() {
                                    var $xhr = $.ajaxSettings.xhr();

                                    if ($xhr.upload) {
                                        $xhr.upload.addEventListener("progress", function(e) {
                                            var percent = 0,
                                                position = e.loaded || e.position,
                                                total = e.total;

                                            if (e.lengthComputable) {
                                                percent = Math.ceil(position / total * 100);
                                            }

                                            data.$dropper.trigger("fileProgress.dropper", [file, percent]);
                                        }, false);
                                    }

                                    return $xhr;
                                },
                                beforeSend: function beforeSend(e) {
                                    data.$dropper.trigger("fileStart.dropper", [file]);
                                },
                                success: function success(response, status, jqXHR) {
                                    file.complete = true;
                                    data.$dropper.trigger("fileComplete.dropper", [file, response]);

                                    _checkQueue(data);
                                },
                                error: function error(jqXHR, status, _error) {
                                    file.error = true;
                                    data.$dropper.trigger("fileError.dropper", [file, _error]);

                                    _checkQueue(data);
                                }
                            });
                        }
                    }

                    $.fn.dropper = function(method) {
                        if (pub[method]) {
                            return pub[method].apply(this, Array.prototype.slice.call(arguments, 1));
                        } else if (_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(method) === 'object' || !method) {
                            return _init.apply(this, arguments);
                        }

                        return this;
                    };

                    $.dropper = function(method) {
                        if (method === "defaults") {
                            pub.defaults.apply(this, Array.prototype.slice.call(arguments, 1));
                        }
                    };
                })(jQuery, window);
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js")))

            /***/
        }),

    /***/
    "./script/library/jquery.tabslet.js":
        /*!******************************************!*\
          !*** ./script/library/jquery.tabslet.js ***!
          \******************************************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */
            (function(jQuery) {
                ! function($, window, undefined) {
                    "use strict";

                    $.fn.tabslet = function(options) {
                        var defaults = {
                                mouseevent: "click",
                                attribute: "href",
                                animation: !1,
                                autorotate: !1,
                                pauseonhover: !0,
                                delay: 2e3,
                                active: 1,
                                controls: {
                                    prev: ".prev",
                                    next: ".next"
                                }
                            },
                            options = $.extend(defaults, options);
                        return this.each(function() {
                            var $this = $(this);

                            if (!$this.data("tabslet-init")) {
                                $this.data("tabslet-init", !0), options.mouseevent = $this.data("mouseevent") || options.mouseevent, options.attribute = $this.data("attribute") || options.attribute, options.animation = $this.data("animation") || options.animation, options.autorotate = $this.data("autorotate") || options.autorotate, options.pauseonhover = $this.data("pauseonhover") || options.pauseonhover, options.delay = $this.data("delay") || options.delay, options.active = $this.data("active") || options.active, $this.find("> div").hide(), $this.find("> div").eq(options.active - 1).show(), $this.find("> ul li").eq(options.active - 1).addClass("active");

                                var fn = eval(function() {
                                        $(this).trigger("_before"), i = elements.index($(this)), $this.find("> ul li").removeClass("active"), $(this).addClass("active"), $this.find("> div").hide();
                                        var a = $(this).find("a").attr(options.attribute);
                                        return $this.find("> ul li").length == i + 1 ? ($this.find(options.controls.next).hide(), $this.find(options.controls.prev).show()) : $this.find(options.controls.next).show(), options.animation ? $this.find(a).animate({
                                            opacity: "show"
                                        }, "slow", function() {
                                            $(this).trigger("_after");
                                        }) : ($this.find(a).show(), $(this).trigger("_after")), !1;
                                    }),
                                    init = eval("$this.find('> ul li')." + options.mouseevent + "(fn)"),
                                    elements = $this.find("> ul li"),
                                    i = options.active - 1,
                                    forward = function forward() {
                                        i = ++i % elements.length, "hover" == options.mouseevent ? elements.eq(i).trigger("mouseover") : elements.eq(i).click();
                                        var a = setTimeout(forward, options.delay);
                                        $this.mouseover(function() {
                                            options.pauseonhover && clearTimeout(a);
                                        });
                                    };

                                options.autorotate && (setTimeout(forward, 0), options.pauseonhover && $this.on("mouseleave", function() {
                                    setTimeout(forward, 1e3);
                                }));

                                var move = function move(a) {
                                    "forward" == a && (i = ++i % elements.length), "backward" == a && (i = --i % elements.length), elements.eq(i).click();
                                };

                                $this.find(options.controls.next).click(function() {
                                    move("forward");
                                }), $this.find(options.controls.prev).click(function() {
                                    move("backward");
                                }), $this.on("destroy", function() {
                                    $(this).removeData();
                                });
                            }
                        });
                    }, $(document).ready(function() {
                        $('[data-toggle="tabslet"]').tabslet();
                    });
                }(jQuery);
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js")))

            /***/
        }),

    /***/
    "./script/library/social-master/assets/javascripts/socialShare.js":
        /*!************************************************************************!*\
          !*** ./script/library/social-master/assets/javascripts/socialShare.js ***!
          \************************************************************************/
        /*! no static exports found */
        /***/
        (function(module, exports, __webpack_require__) {

            /* WEBPACK VAR INJECTION */
            (function(jQuery) {
                /*
                Plugin Name: socialShare
                Version: 1.0
                Plugin URI: https://github.com/tolgaergin/social
                Description: To share any page with 46 icons 
                Author: Tolga Ergin
                Author URI: http://tolgaergin.com
                Designer: Gökhun Güneyhan
                Designer URI: http://gokhunguneyhan.com
                */

                /* PLUGIN USAGE */

                /* 

                $('#clickable').socialShare({
                  social: 'blogger,delicious,digg,facebook,friendfeed,google,linkedin,myspace,pinterest,reddit,stumbleupon,tumblr,twitter,windows,yahoo'
                });

                */
                (function($) {
                    $.fn.extend({
                        socialShare: function socialShare(options) {
                            var defaults = {
                                social: '',
                                title: document.title,
                                shareUrl: window.location.href,
                                description: $('meta[name="description"]').attr('content'),
                                animation: 'launchpad',
                                // launchpad, launchpadReverse, slideTop, slideRight, slideBottom, slideLeft, chain
                                chainAnimationSpeed: 100,
                                whenSelect: false,
                                selectContainer: 'body',
                                blur: false
                            };
                            var options = $.extend(true, defaults, options);
                            var beforeDivs = '<div class="arthref arthrefSocialShare"><div class="overlay ' + options.animation + '"><div class="icon-container"><div class="centered"><ul>';
                            var afterDivs = '</ul></div></div></div></div>';
                            return this.each(function() {
                                var o = options;
                                var obj = $(this);

                                if (o.whenSelect) {
                                    $(o.selectContainer).mouseup(function(e) {
                                        var selection = getSelected();

                                        if (selection && (selection = new String(selection).replace(/^\s+|\s+$/g, ''))) {
                                            options.title = selection;
                                        }
                                    });
                                }

                                obj.click(function() {
                                    createContainer();

                                    if (o.blur) {
                                        $('.arthrefSocialShare').find('.overlay').addClass('opaque');
                                        $('body').children().not('.arthref, script').addClass('blurred');
                                    }

                                    $('.arthrefSocialShare').find('.overlay').css('display', 'block');
                                    setTimeout(function() {
                                        $('.arthrefSocialShare').find('.overlay').addClass('active');
                                        $('.arthrefSocialShare').find('ul').addClass('active');
                                        if (o.animation == 'chain') chainAnimation($('.arthrefSocialShare').find('li'), o.chainAnimationSpeed, '1');
                                    }, 0);
                                });
                                $(document).on("click touchstart", ".arthrefSocialShare .overlay", function(e) {
                                    destroyContainer(o);
                                });
                                $(document).on("keydown", function(e) {
                                    if (e.keyCode == 27) destroyContainer(o);
                                });
                                $(document).on("click touchstart", ".arthrefSocialShare li", function(e) {
                                    e.stopPropagation();
                                });
                            });

                            function getSelected() {
                                if (window.getSelection) {
                                    return window.getSelection();
                                } else if (document.getSelection) {
                                    return document.getSelection();
                                } else {
                                    var selection = document.selection && document.selection.createRange();

                                    if (selection.text) {
                                        return selection.text;
                                    }

                                    return false;
                                }

                                return false;
                            }

                            ;

                            function chainAnimation(e, s, o) {
                                var $fade = $(e);
                                $fade.each(function(i) {
                                    $(this).delay(i * s).fadeTo(s, o);
                                });
                            }

                            ;

                            function createContainer() {
                                var siteSettings = {
                                    'blogger': {
                                        text: 'Blogger',
                                        className: 'aBlogger',
                                        url: 'http://www.blogger.com/blog_this.pyra?t=&amp;u={u}&amp;n={t}'
                                    },
                                    'delicious': {
                                        text: 'Delicious',
                                        className: 'aDelicious',
                                        url: 'http://del.icio.us/post?url={u}&amp;title={t}'
                                    },
                                    'digg': {
                                        text: 'Digg',
                                        className: 'aDigg',
                                        url: 'http://digg.com/submit?phase=2&amp;url={u}&amp;title={t}'
                                    },
                                    'facebook': {
                                        text: 'Facebook',
                                        className: 'aFacebook',
                                        url: 'https://www.facebook.com/sharer.php?u={u}&amp;t={t}'
                                    },
                                    'friendfeed': {
                                        text: 'FriendFeed',
                                        className: 'aFriendFeed',
                                        url: 'http://friendfeed.com/share?url={u}&amp;title={t}'
                                    },
                                    'google': {
                                        text: 'Google+',
                                        className: 'aGooglePlus',
                                        url: 'https://plus.google.com/share?url={u}'
                                    },
                                    'linkedin': {
                                        text: 'LinkedIn',
                                        className: 'aLinkedIn',
                                        url: 'http://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary={d}&amp;source='
                                    },
                                    'myspace': {
                                        text: 'MySpace',
                                        className: 'aMySpace',
                                        url: 'http://www.myspace.com/Modules/PostTo/Pages/?u={u}&amp;t={t}'
                                    },
                                    'pinterest': {
                                        text: 'Pinterest',
                                        className: 'aPinterest',
                                        url: 'https://pinterest.com/pin/create/button/?url={u}&amp;description={d}'
                                    },
                                    'reddit': {
                                        text: 'Reddit',
                                        className: 'aReddit',
                                        url: 'http://reddit.com/submit?url={u}&amp;title={t}'
                                    },
                                    'stumbleupon': {
                                        text: 'StumbleUpon',
                                        className: 'aStumbleUpon',
                                        url: 'http://www.stumbleupon.com/submit?url={u}&amp;title={t}'
                                    },
                                    'tumblr': {
                                        text: 'Tumblr',
                                        className: 'aTumblr',
                                        url: 'http://www.tumblr.com/share/link?url={u}&name={t}&description={d}'
                                    },
                                    'twitter': {
                                        text: 'Twitter',
                                        className: 'aTwitter',
                                        url: 'https://twitter.com/intent/tweet?text={t}%20{u}'
                                    },
                                    'windows': {
                                        text: 'Windows',
                                        className: 'aWindows',
                                        url: 'http://profile.live.com/badge?url={u}'
                                    },
                                    'yahoo': {
                                        text: 'Yahoo',
                                        className: 'aYahoo',
                                        url: 'http://bookmarks.yahoo.com/toolbar/savebm?opener=tb&amp;u={u}&amp;t={t}'
                                    },
                                    'instgram': {
                                        text: 'Instgram',
                                        className: 'instgram',
                                        url: 'https://www.instagram.com/propertyturkeycom/'
                                    },
                                    'instgram_share': {
                                        text: '0',
                                        className: 'instgram',
                                        url: ''
                                    },
                                    'facebook_share': {
                                        text: '0',
                                        className: 'aFacebook',
                                        url: 'https://www.facebook.com/sharer.php?u={u}&amp;t={t}'
                                    },
                                    'google_share': {
                                        text: '',
                                        className: 'aGooglePlus',
                                        url: 'https://plus.google.com/share?url={u}'
                                    },
                                    'twitter_share': {
                                        text: '',
                                        className: 'aTwitter',
                                        url: ''
                                    },
                                    'linkedin_share': {
                                        text: '',
                                        className: 'aLinkedIn',
                                        url: 'https://www.linkedin.com/shareArticle?mini=true&amp;url={u}&amp;title={t}&amp;ro=false&amp;summary={d}&amp;source='
                                    },
                                    'pinterest_share': {
                                        text: '',
                                        className: 'aPinterest',
                                        url: 'https://pinterest.com/pin/create/button/?url={u}&amp;description={d}'
                                    }
                                };
                                var sites = options.social.split(',');
                                var listItem = '';

                                for (var i = 0; i <= sites.length - 1; i++) {
                                    siteSettings[sites[i]]['url'] = siteSettings[sites[i]]['url'].replace('{t}', encodeURIComponent(options.title)).replace('{u}', encodeURI(options.shareUrl)).replace('{d}', encodeURIComponent(options.description));
                                    listItem += '<li><a href="' + siteSettings[sites[i]]['url'] + '" target="_blank" rel="nofollow" class="' + siteSettings[sites[i]]['className'] + '"><span></span></a><span>' + siteSettings[sites[i]]['text'] + '</span></li>';
                                }

                                ;
                                $('body').append(beforeDivs + listItem + afterDivs);
                            }

                            function destroyContainer(o) {
                                if (o.blur) $('body').children().removeClass('blurred');
                                $('.arthrefSocialShare').find('.overlay').removeClass('active');
                                $('.arthrefSocialShare').find('ul').removeClass('active');
                                setTimeout(function() {
                                    $('.arthrefSocialShare').find('.overlay').css('display', 'none');
                                    $('.arthrefSocialShare').remove();
                                }, 300);
                            }
                        }
                    });
                })(jQuery);
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js")))

            /***/
        }),

    /***/
    "./script/library/typeahead.js":
        /*!*************************************!*\
          !*** ./script/library/typeahead.js ***!
          \*************************************/
        /*! no exports provided */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* WEBPACK VAR INJECTION */
            (function(setImmediate, module, jQuery) { /* harmony import */
                var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/typeof */ "../node_modules/@babel/runtime/helpers/typeof.js");
                /* harmony import */
                var _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0__);

                ! function(t, e) {
                    "function" == typeof define && __webpack_require__( /*! !webpack amd options */ "../node_modules/webpack/buildin/amd-options.js") ? define("typeahead.js", ["jquery"], function(t) {
                        return e(t);
                    }) : "object" == (typeof exports === "undefined" ? "undefined" : _babel_runtime_helpers_typeof__WEBPACK_IMPORTED_MODULE_0___default()(exports)) ? module.exports = e(__webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js")) : e(jQuery);
                }(0, function(t) {
                    var e = function() {
                            "use strict";

                            return {
                                isMsie: function isMsie() {
                                    return !!/(msie|trident)/i.test(navigator.userAgent) && navigator.userAgent.match(/(msie |rv:)(\d+(.\d+)?)/i)[2];
                                },
                                isBlankString: function isBlankString(t) {
                                    return !t || /^\s*$/.test(t);
                                },
                                escapeRegExChars: function escapeRegExChars(t) {
                                    return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g, "\\$&");
                                },
                                isString: function isString(t) {
                                    return "string" == typeof t;
                                },
                                isNumber: function isNumber(t) {
                                    return "number" == typeof t;
                                },
                                isArray: t.isArray,
                                isFunction: t.isFunction,
                                isObject: t.isPlainObject,
                                isUndefined: function isUndefined(t) {
                                    return void 0 === t;
                                },
                                isElement: function isElement(t) {
                                    return !(!t || 1 !== t.nodeType);
                                },
                                isJQuery: function isJQuery(e) {
                                    return e instanceof t;
                                },
                                toStr: function toStr(t) {
                                    return e.isUndefined(t) || null === t ? "" : t + "";
                                },
                                bind: t.proxy,
                                each: function each(e, n) {
                                    t.each(e, function(t, e) {
                                        return n(e, t);
                                    });
                                },
                                map: t.map,
                                filter: t.grep,
                                every: function every(e, n) {
                                    var i = !0;
                                    return e ? (t.each(e, function(t, s) {
                                        if (!(i = n.call(null, s, t, e))) return !1;
                                    }), !!i) : i;
                                },
                                some: function some(e, n) {
                                    var i = !1;
                                    return e ? (t.each(e, function(t, s) {
                                        if (i = n.call(null, s, t, e)) return !1;
                                    }), !!i) : i;
                                },
                                mixin: t.extend,
                                identity: function identity(t) {
                                    return t;
                                },
                                clone: function clone(e) {
                                    return t.extend(!0, {}, e);
                                },
                                getIdGenerator: function getIdGenerator() {
                                    var t = 0;
                                    return function() {
                                        return t++;
                                    };
                                },
                                templatify: function templatify(e) {
                                    return t.isFunction(e) ? e : function() {
                                        return String(e);
                                    };
                                },
                                defer: function defer(t) {
                                    setTimeout(t, 0);
                                },
                                debounce: function debounce(t, e, n) {
                                    var i, s;
                                    return function() {
                                        var r,
                                            a,
                                            o = this,
                                            u = arguments;
                                        return r = function r() {
                                            i = null, n || (s = t.apply(o, u));
                                        }, a = n && !i, clearTimeout(i), i = setTimeout(r, e), a && (s = t.apply(o, u)), s;
                                    };
                                },
                                throttle: function throttle(t, e) {
                                    var n, i, s, r, a, o;
                                    return a = 0, o = function o() {
                                            a = new Date(), s = null, r = t.apply(n, i);
                                        },
                                        function() {
                                            var u = new Date(),
                                                c = e - (u - a);
                                            return n = this, i = arguments, c <= 0 ? (clearTimeout(s), s = null, a = u, r = t.apply(n, i)) : s || (s = setTimeout(o, c)), r;
                                        };
                                },
                                stringify: function stringify(t) {
                                    return e.isString(t) ? t : JSON.stringify(t);
                                },
                                noop: function noop() {}
                            };
                        }(),
                        n = function() {
                            "use strict";

                            var t = {
                                wrapper: "twitter-typeahead",
                                input: "tt-input",
                                hint: "tt-hint",
                                menu: "tt-menu",
                                dataset: "tt-dataset",
                                suggestion: "tt-suggestion",
                                selectable: "tt-selectable",
                                empty: "tt-empty",
                                open: "tt-open",
                                cursor: "tt-cursor",
                                highlight: "tt-highlight"
                            };
                            return function(s) {
                                var r, a;
                                return a = e.mixin({}, t, s), {
                                    css: (r = {
                                        css: i(),
                                        classes: a,
                                        html: (o = a, {
                                            wrapper: '<span class="' + o.wrapper + '"></span>',
                                            menu: '<div class="' + o.menu + '"></div>'
                                        }),
                                        selectors: n(a)
                                    }).css,
                                    html: r.html,
                                    classes: r.classes,
                                    selectors: r.selectors,
                                    mixin: function mixin(t) {
                                        e.mixin(t, r);
                                    }
                                };
                                var o;
                            };

                            function n(t) {
                                var n = {};
                                return e.each(t, function(t, e) {
                                    n[e] = "." + t;
                                }), n;
                            }

                            function i() {
                                var t = {
                                    wrapper: {
                                        position: "relative",
                                        display: "inline-block"
                                    },
                                    hint: {
                                        position: "absolute",
                                        top: "0",
                                        left: "0",
                                        borderColor: "transparent",
                                        boxShadow: "none",
                                        opacity: "1"
                                    },
                                    input: {
                                        position: "relative",
                                        verticalAlign: "top",
                                        backgroundColor: "transparent"
                                    },
                                    inputWithNoHint: {
                                        position: "relative",
                                        verticalAlign: "top"
                                    },
                                    menu: {
                                        position: "absolute",
                                        top: "100%",
                                        left: "0",
                                        zIndex: "100",
                                        display: "none"
                                    },
                                    ltr: {
                                        left: "0",
                                        right: "auto"
                                    },
                                    rtl: {
                                        left: "auto",
                                        right: " 0"
                                    }
                                };
                                return e.isMsie() && e.mixin(t.input, {
                                    backgroundImage: "url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"
                                }), t;
                            }
                        }(),
                        i = function() {
                            "use strict";

                            var n;

                            function i(e) {
                                e && e.el || t.error("EventBus initialized without el"), this.$el = t(e.el);
                            }

                            return "typeahead:", n = {
                                render: "rendered",
                                cursorchange: "cursorchanged",
                                select: "selected",
                                autocomplete: "autocompleted"
                            }, e.mixin(i.prototype, {
                                _trigger: function _trigger(e, n) {
                                    var i;
                                    return i = t.Event("typeahead:" + e), (n = n || []).unshift(i), this.$el.trigger.apply(this.$el, n), i;
                                },
                                before: function before(t) {
                                    var e;
                                    return e = [].slice.call(arguments, 1), this._trigger("before" + t, e).isDefaultPrevented();
                                },
                                trigger: function trigger(t) {
                                    var e;
                                    this._trigger(t, [].slice.call(arguments, 1)), (e = n[t]) && this._trigger(e, [].slice.call(arguments, 1));
                                }
                            }), i;
                        }(),
                        s = function() {
                            "use strict";

                            var t = /\s+/,
                                e = function() {
                                    var t;
                                    t = window.setImmediate ? function(t) {
                                        setImmediate(function() {
                                            t();
                                        });
                                    } : function(t) {
                                        setTimeout(function() {
                                            t();
                                        }, 0);
                                    };
                                    return t;
                                }();

                            return {
                                onSync: function onSync(t, e, i) {
                                    return n.call(this, "sync", t, e, i);
                                },
                                onAsync: function onAsync(t, e, i) {
                                    return n.call(this, "async", t, e, i);
                                },
                                off: function off(e) {
                                    var n;
                                    if (!this._callbacks) return this;
                                    e = e.split(t);

                                    for (; n = e.shift();) {
                                        delete this._callbacks[n];
                                    }

                                    return this;
                                },
                                trigger: function trigger(n) {
                                    var s, r, a, o, u;
                                    if (!this._callbacks) return this;
                                    n = n.split(t), a = [].slice.call(arguments, 1);

                                    for (;
                                        (s = n.shift()) && (r = this._callbacks[s]);) {
                                        o = i(r.sync, this, [s].concat(a)), u = i(r.async, this, [s].concat(a)), o() && e(u);
                                    }

                                    return this;
                                }
                            };

                            function n(e, n, i, s) {
                                var r;
                                if (!i) return this;

                                for (n = n.split(t), i = s ? function(t, e) {
                                        return t.bind ? t.bind(e) : function() {
                                            t.apply(e, [].slice.call(arguments, 0));
                                        };
                                    }(i, s) : i, this._callbacks = this._callbacks || {}; r = n.shift();) {
                                    this._callbacks[r] = this._callbacks[r] || {
                                        sync: [],
                                        async: []
                                    }, this._callbacks[r][e].push(i);
                                }

                                return this;
                            }

                            function i(t, e, n) {
                                return function() {
                                    for (var i, s = 0, r = t.length; !i && s < r; s += 1) {
                                        i = !1 === t[s].apply(e, n);
                                    }

                                    return !i;
                                };
                            }
                        }(),
                        r = function(t) {
                            "use strict";

                            var n = {
                                node: null,
                                pattern: null,
                                tagName: "strong",
                                className: null,
                                wordsOnly: !1,
                                caseSensitive: !1
                            };
                            return function(i) {
                                var s;
                                (i = e.mixin({}, n, i)).node && i.pattern && (i.pattern = e.isArray(i.pattern) ? i.pattern : [i.pattern], s = function(t, n, i) {
                                    for (var s, r = [], a = 0, o = t.length; a < o; a++) {
                                        r.push(e.escapeRegExChars(t[a]));
                                    }

                                    return s = i ? "\\b(" + r.join("|") + ")\\b" : "(" + r.join("|") + ")", n ? new RegExp(s) : new RegExp(s, "i");
                                }(i.pattern, i.caseSensitive, i.wordsOnly), function t(e, n) {
                                    var i;

                                    for (var s = 0; s < e.childNodes.length; s++) {
                                        3 === (i = e.childNodes[s]).nodeType ? s += n(i) ? 1 : 0 : t(i, n);
                                    }
                                }(i.node, function(e) {
                                    var n, r, a;
                                    (n = s.exec(e.data)) && (a = t.createElement(i.tagName), i.className && (a.className = i.className), (r = e.splitText(n.index)).splitText(n[0].length), a.appendChild(r.cloneNode(!0)), e.parentNode.replaceChild(a, r));
                                    return !!n;
                                }));
                            };
                        }(window.document),
                        a = function() {
                            "use strict";

                            var n;

                            function i(n, i) {
                                var s;
                                (n = n || {}).input || t.error("input is missing"), i.mixin(this), this.$hint = t(n.hint), this.$input = t(n.input), this.query = this.$input.val(), this.queryWhenFocused = this.hasFocus() ? this.query : null, this.$overflowHelper = (s = this.$input, t('<pre aria-hidden="true"></pre>').css({
                                    position: "absolute",
                                    visibility: "hidden",
                                    whiteSpace: "pre",
                                    fontFamily: s.css("font-family"),
                                    fontSize: s.css("font-size"),
                                    fontStyle: s.css("font-style"),
                                    fontVariant: s.css("font-variant"),
                                    fontWeight: s.css("font-weight"),
                                    wordSpacing: s.css("word-spacing"),
                                    letterSpacing: s.css("letter-spacing"),
                                    textIndent: s.css("text-indent"),
                                    textRendering: s.css("text-rendering"),
                                    textTransform: s.css("text-transform")
                                }).insertAfter(s)), this._checkLanguageDirection(), 0 === this.$hint.length && (this.setHint = this.getHint = this.clearHint = this.clearHintIfInvalid = e.noop);
                            }

                            return n = {
                                9: "tab",
                                27: "esc",
                                37: "left",
                                39: "right",
                                13: "enter",
                                38: "up",
                                40: "down"
                            }, i.normalizeQuery = function(t) {
                                return e.toStr(t).replace(/^\s*/g, "").replace(/\s{2,}/g, " ");
                            }, e.mixin(i.prototype, s, {
                                _onBlur: function _onBlur() {
                                    this.resetInputValue(), this.trigger("blurred");
                                },
                                _onFocus: function _onFocus() {
                                    this.queryWhenFocused = this.query, this.trigger("focused");
                                },
                                _onKeydown: function _onKeydown(t) {
                                    var e = n[t.which || t.keyCode];
                                    this._managePreventDefault(e, t), e && this._shouldTrigger(e, t) && this.trigger(e + "Keyed", t);
                                },
                                _onInput: function _onInput() {
                                    this._setQuery(this.getInputValue()), this.clearHintIfInvalid(), this._checkLanguageDirection();
                                },
                                _managePreventDefault: function _managePreventDefault(t, e) {
                                    var n;

                                    switch (t) {
                                        case "up":
                                        case "down":
                                            n = !r(e);
                                            break;

                                        default:
                                            n = !1;
                                    }

                                    n && e.preventDefault();
                                },
                                _shouldTrigger: function _shouldTrigger(t, e) {
                                    var n;

                                    switch (t) {
                                        case "tab":
                                            n = !r(e);
                                            break;

                                        default:
                                            n = !0;
                                    }

                                    return n;
                                },
                                _checkLanguageDirection: function _checkLanguageDirection() {
                                    var t = (this.$input.css("direction") || "ltr").toLowerCase();
                                    this.dir !== t && (this.dir = t, this.$hint.attr("dir", t), this.trigger("langDirChanged", t));
                                },
                                _setQuery: function _setQuery(t, e) {
                                    var n, s, r, a;
                                    r = t, a = this.query, s = !!(n = i.normalizeQuery(r) === i.normalizeQuery(a)) && this.query.length !== t.length, this.query = t, e || n ? !e && s && this.trigger("whitespaceChanged", this.query) : this.trigger("queryChanged", this.query);
                                },
                                bind: function bind() {
                                    var t,
                                        i,
                                        s,
                                        r,
                                        a = this;
                                    return t = e.bind(this._onBlur, this), i = e.bind(this._onFocus, this), s = e.bind(this._onKeydown, this), r = e.bind(this._onInput, this), this.$input.on("blur.tt", t).on("focus.tt", i).on("keydown.tt", s), !e.isMsie() || e.isMsie() > 9 ? this.$input.on("input.tt", r) : this.$input.on("keydown.tt keypress.tt cut.tt paste.tt", function(t) {
                                        n[t.which || t.keyCode] || e.defer(e.bind(a._onInput, a, t));
                                    }), this;
                                },
                                focus: function focus() {
                                    this.$input.focus();
                                },
                                blur: function blur() {
                                    this.$input.blur();
                                },
                                getLangDir: function getLangDir() {
                                    return this.dir;
                                },
                                getQuery: function getQuery() {
                                    return this.query || "";
                                },
                                setQuery: function setQuery(t, e) {
                                    this.setInputValue(t), this._setQuery(t, e);
                                },
                                hasQueryChangedSinceLastFocus: function hasQueryChangedSinceLastFocus() {
                                    return this.query !== this.queryWhenFocused;
                                },
                                getInputValue: function getInputValue() {
                                    return this.$input.val();
                                },
                                setInputValue: function setInputValue(t) {
                                    this.$input.val(t), this.clearHintIfInvalid(), this._checkLanguageDirection();
                                },
                                resetInputValue: function resetInputValue() {
                                    this.setInputValue(this.query);
                                },
                                getHint: function getHint() {
                                    return this.$hint.val();
                                },
                                setHint: function setHint(t) {
                                    this.$hint.val(t);
                                },
                                clearHint: function clearHint() {
                                    this.setHint("");
                                },
                                clearHintIfInvalid: function clearHintIfInvalid() {
                                    var t, e, n;
                                    n = (t = this.getInputValue()) !== (e = this.getHint()) && 0 === e.indexOf(t), !("" !== t && n && !this.hasOverflow()) && this.clearHint();
                                },
                                hasFocus: function hasFocus() {
                                    return this.$input.is(":focus");
                                },
                                hasOverflow: function hasOverflow() {
                                    var t = this.$input.width() - 2;
                                    return this.$overflowHelper.text(this.getInputValue()), this.$overflowHelper.width() >= t;
                                },
                                isCursorAtEnd: function isCursorAtEnd() {
                                    var t, n, i;
                                    return t = this.$input.val().length, n = this.$input[0].selectionStart, e.isNumber(n) ? n === t : !document.selection || ((i = document.selection.createRange()).moveStart("character", -t), t === i.text.length);
                                },
                                destroy: function destroy() {
                                    this.$hint.off(".tt"), this.$input.off(".tt"), this.$overflowHelper.remove(), this.$hint = this.$input = this.$overflowHelper = t("<div>");
                                }
                            }), i;

                            function r(t) {
                                return t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                            }
                        }(),
                        o = function() {
                            "use strict";

                            var n, i;

                            function a(n, s) {
                                var r;
                                (n = n || {}).templates = n.templates || {}, n.templates.notFound = n.templates.notFound || n.templates.empty, n.source || t.error("missing source"), n.node || t.error("missing node"), n.name && (r = n.name, !/^[_a-zA-Z0-9-]+$/.test(r)) && t.error("invalid dataset name: " + n.name), s.mixin(this), this.highlight = !!n.highlight, this.name = n.name || i(), this.limit = n.limit || 5, this.displayFn = function(t) {
                                    return t = t || e.stringify, e.isFunction(t) ? t : function(e) {
                                        return e[t];
                                    };
                                }(n.display || n.displayKey), this.templates = function(n, i) {
                                    return {
                                        notFound: n.notFound && e.templatify(n.notFound),
                                        pending: n.pending && e.templatify(n.pending),
                                        header: n.header && e.templatify(n.header),
                                        footer: n.footer && e.templatify(n.footer),
                                        suggestion: n.suggestion || function(e) {
                                            return t("<div>").text(i(e));
                                        }
                                    };
                                }(n.templates, this.displayFn), this.source = n.source.__ttAdapter ? n.source.__ttAdapter() : n.source, this.async = e.isUndefined(n.async) ? this.source.length > 2 : !!n.async, this._resetLastSuggestion(), this.$el = t(n.node).addClass(this.classes.dataset).addClass(this.classes.dataset + "-" + this.name);
                            }

                            return n = {
                                val: "tt-selectable-display",
                                obj: "tt-selectable-object"
                            }, i = e.getIdGenerator(), a.extractData = function(e) {
                                var i = t(e);
                                return i.data(n.obj) ? {
                                    val: i.data(n.val) || "",
                                    obj: i.data(n.obj) || null
                                } : null;
                            }, e.mixin(a.prototype, s, {
                                _overwrite: function _overwrite(t, e) {
                                    (e = e || []).length ? this._renderSuggestions(t, e) : this.async && this.templates.pending ? this._renderPending(t) : !this.async && this.templates.notFound ? this._renderNotFound(t) : this._empty(), this.trigger("rendered", this.name, e, !1);
                                },
                                _append: function _append(t, e) {
                                    (e = e || []).length && this.$lastSuggestion.length ? this._appendSuggestions(t, e) : e.length ? this._renderSuggestions(t, e) : !this.$lastSuggestion.length && this.templates.notFound && this._renderNotFound(t), this.trigger("rendered", this.name, e, !0);
                                },
                                _renderSuggestions: function _renderSuggestions(t, e) {
                                    var n;
                                    n = this._getSuggestionsFragment(t, e), this.$lastSuggestion = n.children().last(), this.$el.html(n).prepend(this._getHeader(t, e)).append(this._getFooter(t, e));
                                },
                                _appendSuggestions: function _appendSuggestions(t, e) {
                                    var n, i;
                                    i = (n = this._getSuggestionsFragment(t, e)).children().last(), this.$lastSuggestion.after(n), this.$lastSuggestion = i;
                                },
                                _renderPending: function _renderPending(t) {
                                    var e = this.templates.pending;
                                    this._resetLastSuggestion(), e && this.$el.html(e({
                                        query: t,
                                        dataset: this.name
                                    }));
                                },
                                _renderNotFound: function _renderNotFound(t) {
                                    var e = this.templates.notFound;
                                    this._resetLastSuggestion(), e && this.$el.html(e({
                                        query: t,
                                        dataset: this.name
                                    }));
                                },
                                _empty: function _empty() {
                                    this.$el.empty(), this._resetLastSuggestion();
                                },
                                _getSuggestionsFragment: function _getSuggestionsFragment(i, s) {
                                    var a,
                                        o = this;
                                    return a = document.createDocumentFragment(), e.each(s, function(e) {
                                        var s, r;
                                        r = o._injectQuery(i, e), s = t(o.templates.suggestion(r)).data(n.obj, e).data(n.val, o.displayFn(e)).addClass(o.classes.suggestion + " " + o.classes.selectable), a.appendChild(s[0]);
                                    }), this.highlight && r({
                                        className: this.classes.highlight,
                                        node: a,
                                        pattern: i
                                    }), t(a);
                                },
                                _getFooter: function _getFooter(t, e) {
                                    return this.templates.footer ? this.templates.footer({
                                        query: t,
                                        suggestions: e,
                                        dataset: this.name
                                    }) : null;
                                },
                                _getHeader: function _getHeader(t, e) {
                                    return this.templates.header ? this.templates.header({
                                        query: t,
                                        suggestions: e,
                                        dataset: this.name
                                    }) : null;
                                },
                                _resetLastSuggestion: function _resetLastSuggestion() {
                                    this.$lastSuggestion = t();
                                },
                                _injectQuery: function _injectQuery(t, n) {
                                    return e.isObject(n) ? e.mixin({
                                        _query: t
                                    }, n) : n;
                                },
                                update: function update(e) {
                                    var n = this,
                                        i = !1,
                                        s = !1,
                                        r = 0;

                                    function a(t) {
                                        s || (s = !0, t = (t || []).slice(0, n.limit), r = t.length, n._overwrite(e, t), r < n.limit && n.async && n.trigger("asyncRequested", e));
                                    }

                                    this.cancel(), this.cancel = function() {
                                        i = !0, n.cancel = t.noop, n.async && n.trigger("asyncCanceled", e);
                                    }, this.source(e, a, function(s) {
                                        s = s || [], !i && r < n.limit && (n.cancel = t.noop, r += s.length, n._append(e, s.slice(0, n.limit - r)), n.async && n.trigger("asyncReceived", e));
                                    }), !s && a([]);
                                },
                                cancel: t.noop,
                                clear: function clear() {
                                    this._empty(), this.cancel(), this.trigger("cleared");
                                },
                                isEmpty: function isEmpty() {
                                    return this.$el.is(":empty");
                                },
                                destroy: function destroy() {
                                    this.$el = t("<div>");
                                }
                            }), a;
                        }(),
                        u = function() {
                            "use strict";

                            function n(n, i) {
                                var s = this;
                                (n = n || {}).node || t.error("node is required"), i.mixin(this), this.$node = t(n.node), this.query = null, this.datasets = e.map(n.datasets, function(e) {
                                    var n = s.$node.find(e.node).first();
                                    return e.node = n.length ? n : t("<div>").appendTo(s.$node), new o(e, i);
                                });
                            }

                            return e.mixin(n.prototype, s, {
                                _onSelectableClick: function _onSelectableClick(e) {
                                    this.trigger("selectableClicked", t(e.currentTarget));
                                },
                                _onRendered: function _onRendered(t, e, n, i) {
                                    this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetRendered", e, n, i);
                                },
                                _onCleared: function _onCleared() {
                                    this.$node.toggleClass(this.classes.empty, this._allDatasetsEmpty()), this.trigger("datasetCleared");
                                },
                                _propagate: function _propagate() {
                                    this.trigger.apply(this, arguments);
                                },
                                _allDatasetsEmpty: function _allDatasetsEmpty() {
                                    return e.every(this.datasets, function(t) {
                                        return t.isEmpty();
                                    });
                                },
                                _getSelectables: function _getSelectables() {
                                    return this.$node.find(this.selectors.selectable);
                                },
                                _removeCursor: function _removeCursor() {
                                    var t = this.getActiveSelectable();
                                    t && t.removeClass(this.classes.cursor);
                                },
                                _ensureVisible: function _ensureVisible(t) {
                                    var e, n, i, s;
                                    n = (e = t.position().top) + t.outerHeight(!0), i = this.$node.scrollTop(), s = this.$node.height() + parseInt(this.$node.css("paddingTop"), 10) + parseInt(this.$node.css("paddingBottom"), 10), e < 0 ? this.$node.scrollTop(i + e) : s < n && this.$node.scrollTop(i + (n - s));
                                },
                                bind: function bind() {
                                    var t,
                                        n = this;
                                    return t = e.bind(this._onSelectableClick, this), this.$node.on("click.tt", this.selectors.selectable, t), e.each(this.datasets, function(t) {
                                        t.onSync("asyncRequested", n._propagate, n).onSync("asyncCanceled", n._propagate, n).onSync("asyncReceived", n._propagate, n).onSync("rendered", n._onRendered, n).onSync("cleared", n._onCleared, n);
                                    }), this;
                                },
                                isOpen: function isOpen() {
                                    return this.$node.hasClass(this.classes.open);
                                },
                                open: function open() {
                                    this.$node.addClass(this.classes.open);
                                },
                                close: function close() {
                                    this.$node.removeClass(this.classes.open), this._removeCursor();
                                },
                                setLanguageDirection: function setLanguageDirection(t) {
                                    this.$node.attr("dir", t);
                                },
                                selectableRelativeToCursor: function selectableRelativeToCursor(t) {
                                    var e, n, i;
                                    return n = this.getActiveSelectable(), e = this._getSelectables(), -1 === (i = (i = ((i = (n ? e.index(n) : -1) + t) + 1) % (e.length + 1) - 1) < -1 ? e.length - 1 : i) ? null : e.eq(i);
                                },
                                setCursor: function setCursor(t) {
                                    this._removeCursor(), (t = t && t.first()) && (t.addClass(this.classes.cursor), this._ensureVisible(t));
                                },
                                getSelectableData: function getSelectableData(t) {
                                    return t && t.length ? o.extractData(t) : null;
                                },
                                getActiveSelectable: function getActiveSelectable() {
                                    var t = this._getSelectables().filter(this.selectors.cursor).first();

                                    return t.length ? t : null;
                                },
                                getTopSelectable: function getTopSelectable() {
                                    var t = this._getSelectables().first();

                                    return t.length ? t : null;
                                },
                                update: function update(t) {
                                    var n = t !== this.query;
                                    return n && (this.query = t, e.each(this.datasets, function(e) {
                                        e.update(t);
                                    })), n;
                                },
                                empty: function empty() {
                                    e.each(this.datasets, function(t) {
                                        t.clear();
                                    }), this.query = null, this.$node.addClass(this.classes.empty);
                                },
                                destroy: function destroy() {
                                    this.$node.off(".tt"), this.$node = t("<div>"), e.each(this.datasets, function(t) {
                                        t.destroy();
                                    });
                                }
                            }), n;
                        }(),
                        c = function() {
                            "use strict";

                            var t = u.prototype;

                            function n() {
                                u.apply(this, [].slice.call(arguments, 0));
                            }

                            return e.mixin(n.prototype, u.prototype, {
                                open: function open() {
                                    return !this._allDatasetsEmpty() && this._show(), t.open.apply(this, [].slice.call(arguments, 0));
                                },
                                close: function close() {
                                    return this._hide(), t.close.apply(this, [].slice.call(arguments, 0));
                                },
                                _onRendered: function _onRendered() {
                                    return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), t._onRendered.apply(this, [].slice.call(arguments, 0));
                                },
                                _onCleared: function _onCleared() {
                                    return this._allDatasetsEmpty() ? this._hide() : this.isOpen() && this._show(), t._onCleared.apply(this, [].slice.call(arguments, 0));
                                },
                                setLanguageDirection: function setLanguageDirection(e) {
                                    return this.$node.css("ltr" === e ? this.css.ltr : this.css.rtl), t.setLanguageDirection.apply(this, [].slice.call(arguments, 0));
                                },
                                _hide: function _hide() {
                                    this.$node.hide();
                                },
                                _show: function _show() {
                                    this.$node.css("display", "block");
                                }
                            }), n;
                        }(),
                        h = function() {
                            "use strict";

                            function n(n, s) {
                                var r, a, o, u, c, h, l, d, p, f, g;
                                (n = n || {}).input || t.error("missing input"), n.menu || t.error("missing menu"), n.eventBus || t.error("missing event bus"), s.mixin(this), this.eventBus = n.eventBus, this.minLength = e.isNumber(n.minLength) ? n.minLength : 1, this.input = n.input, this.menu = n.menu, this.enabled = !0, this.active = !1, this.input.hasFocus() && this.activate(), this.dir = this.input.getLangDir(), this._hacks(), this.menu.bind().onSync("selectableClicked", this._onSelectableClicked, this).onSync("asyncRequested", this._onAsyncRequested, this).onSync("asyncCanceled", this._onAsyncCanceled, this).onSync("asyncReceived", this._onAsyncReceived, this).onSync("datasetRendered", this._onDatasetRendered, this).onSync("datasetCleared", this._onDatasetCleared, this), r = i(this, "activate", "open", "_onFocused"), a = i(this, "deactivate", "_onBlurred"), o = i(this, "isActive", "isOpen", "_onEnterKeyed"), u = i(this, "isActive", "isOpen", "_onTabKeyed"), c = i(this, "isActive", "_onEscKeyed"), h = i(this, "isActive", "open", "_onUpKeyed"), l = i(this, "isActive", "open", "_onDownKeyed"), d = i(this, "isActive", "isOpen", "_onLeftKeyed"), p = i(this, "isActive", "isOpen", "_onRightKeyed"), f = i(this, "_openIfActive", "_onQueryChanged"), g = i(this, "_openIfActive", "_onWhitespaceChanged"), this.input.bind().onSync("focused", r, this).onSync("blurred", a, this).onSync("enterKeyed", o, this).onSync("tabKeyed", u, this).onSync("escKeyed", c, this).onSync("upKeyed", h, this).onSync("downKeyed", l, this).onSync("leftKeyed", d, this).onSync("rightKeyed", p, this).onSync("queryChanged", f, this).onSync("whitespaceChanged", g, this).onSync("langDirChanged", this._onLangDirChanged, this);
                            }

                            return e.mixin(n.prototype, {
                                _hacks: function _hacks() {
                                    var n, i;
                                    n = this.input.$input || t("<div>"), i = this.menu.$node || t("<div>"), n.on("blur.tt", function(t) {
                                        var s, r, a;
                                        s = document.activeElement, r = i.is(s), a = i.has(s).length > 0, e.isMsie() && (r || a) && (t.preventDefault(), t.stopImmediatePropagation(), e.defer(function() {
                                            n.focus();
                                        }));
                                    }), i.on("mousedown.tt", function(t) {
                                        t.preventDefault();
                                    });
                                },
                                _onSelectableClicked: function _onSelectableClicked(t, e) {
                                    this.select(e);
                                },
                                _onDatasetCleared: function _onDatasetCleared() {
                                    this._updateHint();
                                },
                                _onDatasetRendered: function _onDatasetRendered(t, e, n, i) {
                                    this._updateHint(), this.eventBus.trigger("render", n, i, e);
                                },
                                _onAsyncRequested: function _onAsyncRequested(t, e, n) {
                                    this.eventBus.trigger("asyncrequest", n, e);
                                },
                                _onAsyncCanceled: function _onAsyncCanceled(t, e, n) {
                                    this.eventBus.trigger("asynccancel", n, e);
                                },
                                _onAsyncReceived: function _onAsyncReceived(t, e, n) {
                                    this.eventBus.trigger("asyncreceive", n, e);
                                },
                                _onFocused: function _onFocused() {
                                    this._minLengthMet() && this.menu.update(this.input.getQuery());
                                },
                                _onBlurred: function _onBlurred() {
                                    this.input.hasQueryChangedSinceLastFocus() && this.eventBus.trigger("change", this.input.getQuery());
                                },
                                _onEnterKeyed: function _onEnterKeyed(t, e) {
                                    var n;
                                    (n = this.menu.getActiveSelectable()) && this.select(n) && e.preventDefault();
                                },
                                _onTabKeyed: function _onTabKeyed(t, e) {
                                    var n;
                                    (n = this.menu.getActiveSelectable()) ? this.select(n) && e.preventDefault(): (n = this.menu.getTopSelectable()) && this.autocomplete(n) && e.preventDefault();
                                },
                                _onEscKeyed: function _onEscKeyed() {
                                    this.close();
                                },
                                _onUpKeyed: function _onUpKeyed() {
                                    this.moveCursor(-1);
                                },
                                _onDownKeyed: function _onDownKeyed() {
                                    this.moveCursor(1);
                                },
                                _onLeftKeyed: function _onLeftKeyed() {
                                    "rtl" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable());
                                },
                                _onRightKeyed: function _onRightKeyed() {
                                    "ltr" === this.dir && this.input.isCursorAtEnd() && this.autocomplete(this.menu.getTopSelectable());
                                },
                                _onQueryChanged: function _onQueryChanged(t, e) {
                                    this._minLengthMet(e) ? this.menu.update(e) : this.menu.empty();
                                },
                                _onWhitespaceChanged: function _onWhitespaceChanged() {
                                    this._updateHint();
                                },
                                _onLangDirChanged: function _onLangDirChanged(t, e) {
                                    this.dir !== e && (this.dir = e, this.menu.setLanguageDirection(e));
                                },
                                _openIfActive: function _openIfActive() {
                                    this.isActive() && this.open();
                                },
                                _minLengthMet: function _minLengthMet(t) {
                                    return (t = e.isString(t) ? t : this.input.getQuery() || "").length >= this.minLength;
                                },
                                _updateHint: function _updateHint() {
                                    var t, n, i, s, r, o;
                                    t = this.menu.getTopSelectable(), n = this.menu.getSelectableData(t), i = this.input.getInputValue(), !n || e.isBlankString(i) || this.input.hasOverflow() ? this.input.clearHint() : (s = a.normalizeQuery(i), r = e.escapeRegExChars(s), (o = new RegExp("^(?:" + r + ")(.+$)", "i").exec(n.val)) && this.input.setHint(i + o[1]));
                                },
                                isEnabled: function isEnabled() {
                                    return this.enabled;
                                },
                                enable: function enable() {
                                    this.enabled = !0;
                                },
                                disable: function disable() {
                                    this.enabled = !1;
                                },
                                isActive: function isActive() {
                                    return this.active;
                                },
                                activate: function activate() {
                                    return !!this.isActive() || !(!this.isEnabled() || this.eventBus.before("active")) && (this.active = !0, this.eventBus.trigger("active"), !0);
                                },
                                deactivate: function deactivate() {
                                    return !this.isActive() || !this.eventBus.before("idle") && (this.active = !1, this.close(), this.eventBus.trigger("idle"), !0);
                                },
                                isOpen: function isOpen() {
                                    return this.menu.isOpen();
                                },
                                open: function open() {
                                    return this.isOpen() || this.eventBus.before("open") || (this.menu.open(), this._updateHint(), this.eventBus.trigger("open")), this.isOpen();
                                },
                                close: function close() {
                                    return this.isOpen() && !this.eventBus.before("close") && (this.menu.close(), this.input.clearHint(), this.input.resetInputValue(), this.eventBus.trigger("close")), !this.isOpen();
                                },
                                setVal: function setVal(t) {
                                    this.input.setQuery(e.toStr(t));
                                },
                                getVal: function getVal() {
                                    return this.input.getQuery();
                                },
                                select: function select(t) {
                                    var e = this.menu.getSelectableData(t);
                                    return !(!e || this.eventBus.before("select", e.obj)) && (this.input.setQuery(e.val, !0), this.eventBus.trigger("select", e.obj), this.close(), !0);
                                },
                                autocomplete: function autocomplete(t) {
                                    var e, n;
                                    return e = this.input.getQuery(), !(!((n = this.menu.getSelectableData(t)) && e !== n.val) || this.eventBus.before("autocomplete", n.obj)) && (this.input.setQuery(n.val), this.eventBus.trigger("autocomplete", n.obj), !0);
                                },
                                moveCursor: function moveCursor(t) {
                                    var e, n, i, s;
                                    return e = this.input.getQuery(), n = this.menu.selectableRelativeToCursor(t), s = (i = this.menu.getSelectableData(n)) ? i.obj : null, !(this._minLengthMet() && this.menu.update(e)) && !this.eventBus.before("cursorchange", s) && (this.menu.setCursor(n), i ? this.input.setInputValue(i.val) : (this.input.resetInputValue(), this._updateHint()), this.eventBus.trigger("cursorchange", s), !0);
                                },
                                destroy: function destroy() {
                                    this.input.destroy(), this.menu.destroy();
                                }
                            }), n;

                            function i(t) {
                                var n = [].slice.call(arguments, 1);
                                return function() {
                                    var i = [].slice.call(arguments);
                                    e.each(n, function(e) {
                                        return t[e].apply(t, i);
                                    });
                                };
                            }
                        }();

                    ! function() {
                        "use strict";

                        var s, r, o;

                        function l(e, n) {
                            e.each(function() {
                                var e,
                                    i = t(this);
                                (e = i.data(r.typeahead)) && n(e, i);
                            });
                        }

                        function d(n) {
                            var i;
                            return (i = e.isJQuery(n) || e.isElement(n) ? t(n).first() : []).length ? i : null;
                        }

                        s = t.fn.typeahead, r = {
                            www: "tt-www",
                            attrs: "tt-attrs",
                            typeahead: "tt-typeahead"
                        }, o = {
                            initialize: function initialize(s, o) {
                                var l;
                                return o = e.isArray(o) ? o : [].slice.call(arguments, 1), l = n((s = s || {}).classNames), this.each(function() {
                                    var n, p, f, g, y, m, v, _, b, S, w;

                                    e.each(o, function(t) {
                                        t.highlight = !!s.highlight;
                                    }), n = t(this), p = t(l.html.wrapper), f = d(s.hint), g = d(s.menu), y = !1 !== s.hint && !f, m = !1 !== s.menu && !g, y && (f = function(t, e) {
                                        return t.clone().addClass(e.classes.hint).removeData().css(e.css.hint).css((n = t, {
                                            backgroundAttachment: n.css("background-attachment"),
                                            backgroundClip: n.css("background-clip"),
                                            backgroundColor: n.css("background-color"),
                                            backgroundImage: n.css("background-image"),
                                            backgroundOrigin: n.css("background-origin"),
                                            backgroundPosition: n.css("background-position"),
                                            backgroundRepeat: n.css("background-repeat"),
                                            backgroundSize: n.css("background-size")
                                        })).prop("readonly", !0).removeAttr("id name placeholder required").attr({
                                            autocomplete: "off",
                                            spellcheck: "false",
                                            tabindex: -1
                                        });
                                        var n;
                                    }(n, l)), m && (g = t(l.html.menu).css(l.css.menu)), f && f.val(""), n = function(t, e) {
                                        t.data(r.attrs, {
                                            dir: t.attr("dir"),
                                            autocomplete: t.attr("autocomplete"),
                                            spellcheck: t.attr("spellcheck"),
                                            style: t.attr("style")
                                        }), t.addClass(e.classes.input).attr({
                                            autocomplete: "off",
                                            spellcheck: !1
                                        });

                                        try {
                                            !t.attr("dir") && t.attr("dir", "auto");
                                        } catch (t) {}

                                        return t;
                                    }(n, l), (y || m) && (p.css(l.css.wrapper), n.css(y ? l.css.input : l.css.inputWithNoHint), n.wrap(p).parent().prepend(y ? f : null).append(m ? g : null));
                                    w = m ? c : u, v = new i({
                                        el: n
                                    }), _ = new a({
                                        hint: f,
                                        input: n
                                    }, l), b = new w({
                                        node: g,
                                        datasets: o
                                    }, l), S = new h({
                                        input: _,
                                        menu: b,
                                        eventBus: v,
                                        minLength: s.minLength
                                    }, l), n.data(r.www, l), n.data(r.typeahead, S);
                                });
                            },
                            isEnabled: function isEnabled() {
                                var t;
                                return l(this.first(), function(e) {
                                    t = e.isEnabled();
                                }), t;
                            },
                            enable: function enable() {
                                return l(this, function(t) {
                                    t.enable();
                                }), this;
                            },
                            disable: function disable() {
                                return l(this, function(t) {
                                    t.disable();
                                }), this;
                            },
                            isActive: function isActive() {
                                var t;
                                return l(this.first(), function(e) {
                                    t = e.isActive();
                                }), t;
                            },
                            activate: function activate() {
                                return l(this, function(t) {
                                    t.activate();
                                }), this;
                            },
                            deactivate: function deactivate() {
                                return l(this, function(t) {
                                    t.deactivate();
                                }), this;
                            },
                            isOpen: function isOpen() {
                                var t;
                                return l(this.first(), function(e) {
                                    t = e.isOpen();
                                }), t;
                            },
                            open: function open() {
                                return l(this, function(t) {
                                    t.open();
                                }), this;
                            },
                            close: function close() {
                                return l(this, function(t) {
                                    t.close();
                                }), this;
                            },
                            select: function select(e) {
                                var n = !1,
                                    i = t(e);
                                return l(this.first(), function(t) {
                                    n = t.select(i);
                                }), n;
                            },
                            autocomplete: function autocomplete(e) {
                                var n = !1,
                                    i = t(e);
                                return l(this.first(), function(t) {
                                    n = t.autocomplete(i);
                                }), n;
                            },
                            moveCursor: function moveCursor(t) {
                                var e = !1;
                                return l(this.first(), function(n) {
                                    e = n.moveCursor(t);
                                }), e;
                            },
                            val: function val(t) {
                                var e;
                                return arguments.length ? (l(this, function(e) {
                                    e.setVal(t);
                                }), this) : (l(this.first(), function(t) {
                                    e = t.getVal();
                                }), e);
                            },
                            destroy: function destroy() {
                                return l(this, function(t, n) {
                                    ! function(t) {
                                        var n, i;
                                        n = t.data(r.www), i = t.parent().filter(n.selectors.wrapper), e.each(t.data(r.attrs), function(n, i) {
                                            e.isUndefined(n) ? t.removeAttr(i) : t.attr(i, n);
                                        }), t.removeData(r.typeahead).removeData(r.www).removeData(r.attr).removeClass(n.classes.input), i.length && (t.detach().insertAfter(i), i.remove());
                                    }(n), t.destroy();
                                }), this;
                            }
                        }, t.fn.typeahead = function(t) {
                            return o[t] ? o[t].apply(this, [].slice.call(arguments, 1)) : o.initialize.apply(this, arguments);
                        }, t.fn.typeahead.noConflict = function() {
                            return t.fn.typeahead = s, this;
                        };
                    }();
                });
                /* WEBPACK VAR INJECTION */
            }.call(this, __webpack_require__( /*! ./../../../node_modules/timers-browserify/main.js */ "../node_modules/timers-browserify/main.js").setImmediate, __webpack_require__( /*! ./../../../node_modules/webpack/buildin/harmony-module.js */ "../node_modules/webpack/buildin/harmony-module.js")(module), __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js")))

            /***/
        }),

    /***/
    "./script/services/service.js":
        /*!************************************!*\
          !*** ./script/services/service.js ***!
          \************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return httpService;
            });
            /* harmony import */
            var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/defineProperty */ "../node_modules/@babel/runtime/helpers/defineProperty.js");
            /* harmony import */
            var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/regenerator */ "../node_modules/@babel/runtime/regenerator/index.js");
            /* harmony import */
            var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! @babel/runtime/helpers/asyncToGenerator */ "../node_modules/@babel/runtime/helpers/asyncToGenerator.js");
            /* harmony import */
            var _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4__);
            /* harmony import */
            var _config_api__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../config/api */ "./script/config/api.js");






            function ownKeys(object, enumerableOnly) {
                var keys = Object.keys(object);
                if (Object.getOwnPropertySymbols) {
                    var symbols = Object.getOwnPropertySymbols(object);
                    if (enumerableOnly) symbols = symbols.filter(function(sym) {
                        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
                    });
                    keys.push.apply(keys, symbols);
                }
                return keys;
            }

            function _objectSpread(target) {
                for (var i = 1; i < arguments.length; i++) {
                    var source = arguments[i] != null ? arguments[i] : {};
                    if (i % 2) {
                        ownKeys(source, true).forEach(function(key) {
                            _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]);
                        });
                    } else if (Object.getOwnPropertyDescriptors) {
                        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
                    } else {
                        ownKeys(source).forEach(function(key) {
                            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
                        });
                    }
                }
                return target;
            }



            var httpService =
                /*#__PURE__*/
                function() {
                    function httpService() {
                        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_3___default()(this, httpService);

                        this.base = _config_api__WEBPACK_IMPORTED_MODULE_5__["default"].baseApi['development'];
                        this.baseUrl = _config_api__WEBPACK_IMPORTED_MODULE_5__["default"].baseUrl['development'];
                        this.API = _config_api__WEBPACK_IMPORTED_MODULE_5__["default"].calls;
                        var get = this.get;
                    }

                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_4___default()(httpService, [{
                        key: "apiTo",
                        value: function() {
                            var _apiTo = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
                                /*#__PURE__*/
                                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(url) {
                                    var type,
                                        _args = arguments;
                                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
                                        while (1) {
                                            switch (_context.prev = _context.next) {
                                                case 0:
                                                    type = _args.length > 1 && _args[1] !== undefined ? _args[1] : 'json';

                                                    if (!(type == 'json')) {
                                                        _context.next = 5;
                                                        break;
                                                    }

                                                    return _context.abrupt("return", "".concat(this.base).concat(url));

                                                case 5:
                                                    return _context.abrupt("return", "".concat(this.baseUrl).concat(url));

                                                case 6:
                                                case "end":
                                                    return _context.stop();
                                            }
                                        }
                                    }, _callee, this);
                                }));

                            function apiTo(_x) {
                                return _apiTo.apply(this, arguments);
                            }

                            return apiTo;
                        }()
                    }, {
                        key: "get",
                        value: function() {
                            var _get = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
                                /*#__PURE__*/
                                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee2(url, headers) {
                                    var responseType,
                                        skipBaseUrl,
                                        response,
                                        _args2 = arguments;
                                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee2$(_context2) {
                                        while (1) {
                                            switch (_context2.prev = _context2.next) {
                                                case 0:
                                                    responseType = _args2.length > 2 && _args2[2] !== undefined ? _args2[2] : 'json';
                                                    skipBaseUrl = _args2.length > 3 && _args2[3] !== undefined ? _args2[3] : false;

                                                    if (skipBaseUrl) {
                                                        _context2.next = 6;
                                                        break;
                                                    }

                                                    _context2.next = 5;
                                                    return this.apiTo(url, responseType);

                                                case 5:
                                                    url = _context2.sent;

                                                case 6:
                                                    _context2.next = 8;
                                                    return fetch(url, {
                                                        method: "GET",
                                                        // *GET, POST, PUT, DELETE, etc.
                                                        mode: "cors",
                                                        // no-cors, cors, *same-origin
                                                        cache: "no-cache",
                                                        // *default, no-cache, reload, force-cache, only-if-cached
                                                        credentials: "same-origin",
                                                        // include, *same-origin, omit
                                                        headers: _objectSpread({}, headers, {
                                                            'api-key': _config_api__WEBPACK_IMPORTED_MODULE_5__["default"].key['development']
                                                        }),
                                                        redirect: "follow" // manual, *follow, error
                                                        // referrer: "no-referrer", // no-referrer, *client

                                                    });

                                                case 8:
                                                    response = _context2.sent;
                                                    _context2.t0 = responseType;
                                                    _context2.next = _context2.t0 === 'text/html' ? 12 : 23;
                                                    break;

                                                case 12:
                                                    _context2.prev = 12;
                                                    _context2.next = 15;
                                                    return response.text();

                                                case 15:
                                                    return _context2.abrupt("return", _context2.sent);

                                                case 18:
                                                    _context2.prev = 18;
                                                    _context2.t1 = _context2["catch"](12);
                                                    console.error('Error with response text/html', _context2.t1);
                                                    return _context2.abrupt("return", {});

                                                case 22:
                                                    return _context2.abrupt("break", 37);

                                                case 23:
                                                    _context2.prev = 23;

                                                    if (!('json' in response)) {
                                                        _context2.next = 28;
                                                        break;
                                                    }

                                                    _context2.next = 27;
                                                    return response.json();

                                                case 27:
                                                    return _context2.abrupt("return", _context2.sent);

                                                case 28:
                                                    _context2.next = 30;
                                                    return response;

                                                case 30:
                                                    return _context2.abrupt("return", _context2.sent);

                                                case 33:
                                                    _context2.prev = 33;
                                                    _context2.t2 = _context2["catch"](23);
                                                    console.error('Error with response json', _context2.t2);
                                                    return _context2.abrupt("return", {});

                                                case 37:
                                                case "end":
                                                    return _context2.stop();
                                            }
                                        }
                                    }, _callee2, this, [
                                        [12, 18],
                                        [23, 33]
                                    ]);
                                }));

                            function get(_x2, _x3) {
                                return _get.apply(this, arguments);
                            }

                            return get;
                        }()
                    }, {
                        key: "post",
                        value: function() {
                            var _post = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
                                /*#__PURE__*/
                                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee3(url, formData, headers) {
                                    var responseType,
                                        removeApiSegment,
                                        response,
                                        _args3 = arguments;
                                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee3$(_context3) {
                                        while (1) {
                                            switch (_context3.prev = _context3.next) {
                                                case 0:
                                                    responseType = _args3.length > 3 && _args3[3] !== undefined ? _args3[3] : 'json';
                                                    removeApiSegment = _args3.length > 4 && _args3[4] !== undefined ? _args3[4] : false;

                                                    if (removeApiSegment) {
                                                        url = this.apiTo(url).replace('/api', '');
                                                    }

                                                    console.log(url, formData);
                                                    _context3.t0 = fetch;
                                                    _context3.next = 7;
                                                    return this.apiTo(url);

                                                case 7:
                                                    _context3.t1 = _context3.sent;
                                                    _context3.t2 = {
                                                        method: "POST",
                                                        // *GET, POST, PUT, DELETE, etc.
                                                        mode: "cors",
                                                        // no-cors, cors, *same-origin
                                                        cache: "no-cache",
                                                        // *default, no-cache, reload, force-cache, only-if-cached
                                                        credentials: "same-origin",
                                                        // include, *same-origin, omit
                                                        headers: _objectSpread({}, headers, {
                                                            'api-key': _config_api__WEBPACK_IMPORTED_MODULE_5__["default"].key['development']
                                                        }),
                                                        redirect: "follow",
                                                        // manual, *follow, error
                                                        // referrer: "no-referrer", // no-referrer, *client
                                                        body: formData // body data type must match "Content-Type" header

                                                    };
                                                    _context3.next = 11;
                                                    return (0, _context3.t0)(_context3.t1, _context3.t2);

                                                case 11:
                                                    response = _context3.sent;
                                                    _context3.t3 = responseType;
                                                    _context3.next = _context3.t3 === 'text/html' ? 15 : 26;
                                                    break;

                                                case 15:
                                                    _context3.prev = 15;
                                                    _context3.next = 18;
                                                    return response.text();

                                                case 18:
                                                    return _context3.abrupt("return", _context3.sent);

                                                case 21:
                                                    _context3.prev = 21;
                                                    _context3.t4 = _context3["catch"](15);
                                                    console.error('Error with response text/html', _context3.t4);
                                                    return _context3.abrupt("return", {});

                                                case 25:
                                                    return _context3.abrupt("break", 36);

                                                case 26:
                                                    _context3.prev = 26;
                                                    _context3.next = 29;
                                                    return response;

                                                case 29:
                                                    return _context3.abrupt("return", _context3.sent);

                                                case 32:
                                                    _context3.prev = 32;
                                                    _context3.t5 = _context3["catch"](26);
                                                    console.error('Error with response json', _context3.t5);
                                                    return _context3.abrupt("return", {});

                                                case 36:
                                                case "end":
                                                    return _context3.stop();
                                            }
                                        }
                                    }, _callee3, this, [
                                        [15, 21],
                                        [26, 32]
                                    ]);
                                }));

                            function post(_x4, _x5, _x6) {
                                return _post.apply(this, arguments);
                            }

                            return post;
                        }()
                    }, {
                        key: "put",
                        value: function() {
                            var _put = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
                                /*#__PURE__*/
                                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee4(url, formData, headers) {
                                    var response;
                                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee4$(_context4) {
                                        while (1) {
                                            switch (_context4.prev = _context4.next) {
                                                case 0:
                                                    _context4.t0 = fetch;
                                                    _context4.next = 3;
                                                    return this.apiTo(url);

                                                case 3:
                                                    _context4.t1 = _context4.sent;
                                                    _context4.t2 = {
                                                        method: "PUT",
                                                        // *GET, POST, PUT, DELETE, etc.
                                                        mode: "cors",
                                                        // no-cors, cors, *same-origin
                                                        cache: "no-cache",
                                                        // *default, no-cache, reload, force-cache, only-if-cached
                                                        credentials: "same-origin",
                                                        // include, *same-origin, omit
                                                        headers: _objectSpread({}, headers, {
                                                            'api-key': _config_api__WEBPACK_IMPORTED_MODULE_5__["default"].key['development']
                                                        }),
                                                        redirect: "follow",
                                                        // manual, *follow, error
                                                        // referrer: "no-referrer", // no-referrer, *client
                                                        body: formData // body data type must match "Content-Type" header

                                                    };
                                                    _context4.next = 7;
                                                    return (0, _context4.t0)(_context4.t1, _context4.t2);

                                                case 7:
                                                    response = _context4.sent;
                                                    _context4.t3 = responseType;
                                                    _context4.next = _context4.t3 === 'text/html' ? 11 : 22;
                                                    break;

                                                case 11:
                                                    _context4.prev = 11;
                                                    _context4.next = 14;
                                                    return response.text();

                                                case 14:
                                                    return _context4.abrupt("return", _context4.sent);

                                                case 17:
                                                    _context4.prev = 17;
                                                    _context4.t4 = _context4["catch"](11);
                                                    console.error('Error with response text/html', _context4.t4);
                                                    return _context4.abrupt("return", {});

                                                case 21:
                                                    return _context4.abrupt("break", 32);

                                                case 22:
                                                    _context4.prev = 22;
                                                    _context4.next = 25;
                                                    return response.json();

                                                case 25:
                                                    return _context4.abrupt("return", _context4.sent);

                                                case 28:
                                                    _context4.prev = 28;
                                                    _context4.t5 = _context4["catch"](22);
                                                    console.error('Error with response json', _context4.t5);
                                                    return _context4.abrupt("return", {});

                                                case 32:
                                                case "end":
                                                    return _context4.stop();
                                            }
                                        }
                                    }, _callee4, this, [
                                        [11, 17],
                                        [22, 28]
                                    ]);
                                }));

                            function put(_x7, _x8, _x9) {
                                return _put.apply(this, arguments);
                            }

                            return put;
                        }()
                    }, {
                        key: "delete",
                        value: function() {
                            var _delete2 = _babel_runtime_helpers_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2___default()(
                                /*#__PURE__*/
                                _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee5(url, headers) {
                                    var response;
                                    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee5$(_context5) {
                                        while (1) {
                                            switch (_context5.prev = _context5.next) {
                                                case 0:
                                                    _context5.t0 = fetch;
                                                    _context5.next = 3;
                                                    return this.apiTo(url);

                                                case 3:
                                                    _context5.t1 = _context5.sent;
                                                    _context5.t2 = {
                                                        method: "DELETE",
                                                        // *GET, POST, PUT, DELETE, etc.
                                                        mode: "cors",
                                                        // no-cors, cors, *same-origin
                                                        cache: "no-cache",
                                                        // *default, no-cache, reload, force-cache, only-if-cached
                                                        credentials: "same-origin",
                                                        // include, *same-origin, omit
                                                        headers: _objectSpread({}, headers, {
                                                            'api-key': _config_api__WEBPACK_IMPORTED_MODULE_5__["default"].key['development']
                                                        }),
                                                        redirect: "follow" // manual, *follow, error
                                                        // referrer: "no-referrer" // no-referrer, *client

                                                    };
                                                    _context5.next = 7;
                                                    return (0, _context5.t0)(_context5.t1, _context5.t2);

                                                case 7:
                                                    response = _context5.sent;
                                                    _context5.t3 = responseType;
                                                    _context5.next = _context5.t3 === 'text/html' ? 11 : 22;
                                                    break;

                                                case 11:
                                                    _context5.prev = 11;
                                                    _context5.next = 14;
                                                    return response.text();

                                                case 14:
                                                    return _context5.abrupt("return", _context5.sent);

                                                case 17:
                                                    _context5.prev = 17;
                                                    _context5.t4 = _context5["catch"](11);
                                                    console.error('Error with response text/html', _context5.t4);
                                                    return _context5.abrupt("return", {});

                                                case 21:
                                                    return _context5.abrupt("break", 32);

                                                case 22:
                                                    _context5.prev = 22;
                                                    _context5.next = 25;
                                                    return response.json();

                                                case 25:
                                                    return _context5.abrupt("return", _context5.sent);

                                                case 28:
                                                    _context5.prev = 28;
                                                    _context5.t5 = _context5["catch"](22);
                                                    console.error('Error with response json', _context5.t5);
                                                    return _context5.abrupt("return", {});

                                                case 32:
                                                case "end":
                                                    return _context5.stop();
                                            }
                                        }
                                    }, _callee5, this, [
                                        [11, 17],
                                        [22, 28]
                                    ]);
                                }));

                            function _delete(_x10, _x11) {
                                return _delete2.apply(this, arguments);
                            }

                            return _delete;
                        }()
                    }]);

                    return httpService;
                }();



            /***/
        }),

    /***/
    "./script/util/helpers.js":
        /*!********************************!*\
          !*** ./script/util/helpers.js ***!
          \********************************/
        /*! exports provided: checkPage, scrollTo, loadScript, loadCSS, removeNotification, tabsHandler, brWorker, sitckWidgetTitle, encodeHTML, limit, shuffle, show_hide, formatPrice, cloudTags, widgetEnquire, getParameterByName, updateQueryStringParameter, stickyHeader, nav, initFancybox, stickySearch, listing_pagination */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "checkPage", function() {
                return checkPage;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "scrollTo", function() {
                return scrollTo;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "loadScript", function() {
                return loadScript;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "loadCSS", function() {
                return loadCSS;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "removeNotification", function() {
                return removeNotification;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "tabsHandler", function() {
                return tabsHandler;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "brWorker", function() {
                return brWorker;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "sitckWidgetTitle", function() {
                return sitckWidgetTitle;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "encodeHTML", function() {
                return encodeHTML;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "limit", function() {
                return limit;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "shuffle", function() {
                return shuffle;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "show_hide", function() {
                return show_hide;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "formatPrice", function() {
                return formatPrice;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "cloudTags", function() {
                return cloudTags;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "widgetEnquire", function() {
                return widgetEnquire;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "getParameterByName", function() {
                return getParameterByName;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "updateQueryStringParameter", function() {
                return updateQueryStringParameter;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "stickyHeader", function() {
                return stickyHeader;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "nav", function() {
                return nav;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "initFancybox", function() {
                return initFancybox;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "stickySearch", function() {
                return stickySearch;
            });
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "listing_pagination", function() {
                return listing_pagination;
            });
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var fancybox__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! fancybox */ "../node_modules/@fancyapps/fancybox/dist/jquery.fancybox.js");
            /* harmony import */
            var fancybox__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(fancybox__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var _library_jquery_tabslet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../library/jquery.tabslet */ "./script/library/jquery.tabslet.js");
            /* harmony import */
            var _library_jquery_tabslet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(_library_jquery_tabslet__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var lazysizes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! lazysizes */ "../node_modules/lazysizes/lazysizes.js");
            /* harmony import */
            var lazysizes__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_3__);
            /* harmony import */
            var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! lazysizes/plugins/parent-fit/ls.parent-fit */ "../node_modules/lazysizes/plugins/parent-fit/ls.parent-fit.js");
            /* harmony import */
            var lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/ __webpack_require__.n(lazysizes_plugins_parent_fit_ls_parent_fit__WEBPACK_IMPORTED_MODULE_4__);


            //lazyload for images


            // init utilities

            function checkPage(slug, callback) {
                var pageSlug = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').data('slug');

                if (slug === pageSlug) {
                    callback();
                    return true;
                } else {
                    return false;
                }
            }

            function scrollTo(_int) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                    scrollTop: _int
                });
            }

            function loadScript(src, callback) {
                var script = document.createElement('script');
                script.async = true;
                script.src = src;

                script.onerror = function() {
                    callback(new Error("Failed to load" + src));
                };

                script.onload = function() {
                    callback();
                };

                document.getElementsByTagName("head")[0].appendChild(script);
            }

            function loadCSS(url, callback) {
                var link = document.createElement("link");
                link.type = "text/css";
                link.rel = "stylesheet";
                link.href = url;
                link.media = 'none';
                document.getElementsByTagName("head")[0].appendChild(link);

                link.onload = function() {
                    link.media = 'all';

                    if (typeof callback !== "undefined") {
                        callback();
                    }
                };
            }

            function removeNotification() {
                var body = jquery__WEBPACK_IMPORTED_MODULE_0___default()('body');
                var message = body.find('.message');
                setTimeout(function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(message).addClass('closed');
                }, 4000);
                body.on('click', '.message', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.message').addClass('closed');
                });
            }

            function tabsHandler(el) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(el).tabslet({
                    animation: true,
                    controls: {
                        prev: '.prev',
                        next: '.next'
                    }
                });
            }

            function brWorker() {
                var details = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.intro .details');
                var introText = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.introText');
                var iframe = details.find('.iframe-video');
                iframe = iframe.length > 0 ? iframe : false;
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(details).hide();
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(introText).css('display', 'inline'); //

                if (details.length > 0) {
                    //
                    var lines = jquery__WEBPACK_IMPORTED_MODULE_0___default()(details).html().split("<br>");
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(details).html('<p>' + lines.join("</p><p>") + '</p>');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(details).find('p').each(function(i) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).filter(function() {
                            return jquery__WEBPACK_IMPORTED_MODULE_0___default.a.trim(this.innerHTML.replace(/\s|&nbsp;/g, '')) === "";
                        }).remove();

                        if (i === 0) {
                            var itemLength = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children().length;

                            if (itemLength === jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('strong').length && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('strong').length !== 0) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).next().prepend('<br>').prepend(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).children());
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).remove();
                            }
                        }
                    });

                    if (iframe) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(introText).append(iframe.first());
                    }

                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(introText).append(jquery__WEBPACK_IMPORTED_MODULE_0___default()(details).find('p').first().clone());

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(details).find('p').length === 1 || jquery__WEBPACK_IMPORTED_MODULE_0___default()(details).is(':empty')) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show_hide').remove();
                    }
                }

                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(details).find('p').length > 1) {
                    var introDescription = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.introDescription').clone();
                    introDescription.find('.introText, .show_hide').remove();
                    introDescription.find('p').first().remove();
                    introDescription.find('.details').show();
                    introDescription.find('h1').first().remove();
                    introDescription.addClass('pt-footer');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.property_footer').after(introDescription);
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.scrollToFooter').on('click', function(e) {
                        e.preventDefault();
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                            scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()(".pt-footer").offset().top - 160
                        }, 300);
                    });
                }
            }

            function sitckWidgetTitle() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').addClass('stickyTitle-enabled');
                var widget = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.widget:not(img):not(.sticky-to-parent)');
                widget.each(function(i) {
                    var element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(widget[i]).find('.title');

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).length > 0) {
                        var elementHeight = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).height();
                        var elementParent = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                        var elementParentTop = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elementParent).offset().top;
                        var elementParentWidth = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elementParent).width();
                        var elementParentBottom = jquery__WEBPACK_IMPORTED_MODULE_0___default()(elementParent).offset().top + jquery__WEBPACK_IMPORTED_MODULE_0___default()(elementParent).height();
                        var elementLeft = jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).offset().left;
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).on('click', function() {
                            scrollTo(elementParentTop - elementHeight);
                        });
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function() {
                            var Y = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

                            if (elementParentTop < Y && elementParentBottom - 2 > Y) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).css({ // position: 'fixed',
                                    // top: 0,
                                    // left: elementLeft,
                                    // width: elementParentWidth,
                                    // background: '#F00',
                                    // color: '#F4F4F4'
                                });
                            } else {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(element).attr('style', '');
                            }
                        });
                    }
                });
            }

            function encodeHTML(string) {
                return string.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;');
            }

            function limit() {
                var limit = jquery__WEBPACK_IMPORTED_MODULE_0___default()('[limit]');
                limit.each(function(i) {
                    var chars = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).attr('limit');
                    var text = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text(text.substring(0, chars));
                });
            }

            function shuffle(array) {
                var currentIndex = array.length,
                    temporaryValue,
                    randomIndex; // While there remain elements to shuffle...

                while (0 !== currentIndex) {
                    // Pick a remaining element...
                    randomIndex = Math.floor(Math.random() * currentIndex);
                    currentIndex -= 1; // And swap it with the current element.

                    temporaryValue = array[currentIndex];
                    array[currentIndex] = array[randomIndex];
                    array[randomIndex] = temporaryValue;
                }

                return array;
            }

            function show_hide() {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.show_hide').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                        scrollTop: jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pt-footer').offset().top - 80
                    });
                    return false;
                });
            }

            function formatPrice(num) {
                var str = num.toString().replace(/[^\d]/g, ""),
                    parts = false,
                    output = [],
                    i = 1,
                    formatted = null;

                if (str.indexOf(".") > 0) {
                    parts = str.split(".");
                    str = parts[0];
                }

                str = str.split("").reverse();

                for (var j = 0, len = str.length; j < len; j++) {
                    if (str[j] != ",") {
                        output.push(str[j]);

                        if (i % 3 == 0 && j < len - 1) {
                            output.push(",");
                        }

                        i++;
                    }
                }

                formatted = output.reverse().join("");
                return formatted + (parts ? "." + parts[1].substr(0, 2) : "");
            }

            function cloudTags() {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('#keywords').length > 0) {
                    var keyElements = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#keywords .body a');
                    var keywords = []; // get links

                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(keyElements).each(function(i) {
                        keywords.push({
                            name: jquery__WEBPACK_IMPORTED_MODULE_0___default()(keyElements[i]).text(),
                            freq: jquery__WEBPACK_IMPORTED_MODULE_0___default()(keyElements[i]).attr('freq')
                        });
                    }); // get total freq

                    var totalFreq = function totalFreq(arr) {
                        var total = 0;
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(arr).each(function(i) {
                            total = total + parseInt(arr[i].freq);
                        });
                        return total;
                    }; // check each keyword size regarding total percentage


                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(keywords).each(function(i) {
                        var total = totalFreq(keywords);
                        var rem = this.freq * 100 / (total * 6);

                        if (rem < 0.5) {
                            rem = 1;
                        } else if (rem > 3.5) {
                            rem = 3;
                        }

                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(keyElements[i]).css({
                            'font-size': rem + 'rem'
                        });
                    });
                    shuffle(keyElements);
                }
            }

            function widgetEnquire() {
                var widgetTitle = jquery__WEBPACK_IMPORTED_MODULE_0___default()(".widget.enquire .title");
                var matchesMobile;
                var enquiries = jquery__WEBPACK_IMPORTED_MODULE_0___default()("header.page .enquiries");
                var hasEnquiries = jquery__WEBPACK_IMPORTED_MODULE_0___default()(enquiries).hasClass("hasitems");

                if (!hasEnquiries) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(widgetTitle).parent().show();
                }

                widgetTitle.click = function(e) {
                    matchesMobile = window.matchMedia("(max-width: 680px)").matches;
                    var self = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);

                    if (matchesMobile) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                            scrollTop: 0
                        }, 100);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('body , html').toggleClass("fullScreen-body");
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(self).parents(".enquire").toggleClass("fullScreen");
                    } else {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(self).next().slideToggle(260);
                    }
                };

                widgetTitle.on("click", widgetTitle.click);
            }

            function getParameterByName(name, url) {
                if (!url) url = window.location.href;
                name = name.replace(/[\[\]]/g, "\\$&");
                var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
                    results = regex.exec(url);
                if (!results) return null;
                if (!results[2]) return '';
                return decodeURIComponent(results[2].replace(/\+/g, " "));
            }

            function updateQueryStringParameter(uri, key, value) {
                var re = new RegExp("([?&])" + key + "=.*?(&|$)", "i");
                var separator = uri.indexOf('?') !== -1 ? "&" : "?";

                if (uri.match(re)) {
                    return uri.replace(re, '$1' + key + "=" + value + '$2');
                } else {
                    return uri + separator + key + "=" + value;
                }
            }

            function stickyHeader() {
                var article = jquery__WEBPACK_IMPORTED_MODULE_0___default()('article');
                var article_enquireBox = jquery__WEBPACK_IMPORTED_MODULE_0___default()('article .property_price');
                var article_enquireBoxWidth;
                var article_enquireBoxTop;
                var article_enquireBoxLeft;
                var article_enquireBox_mobile = jquery__WEBPACK_IMPORTED_MODULE_0___default()('article .pt-main-info');
                var article_enquireBoxWidth_mobile;
                var article_enquireBoxTop_mobile;
                var article_enquireBoxLeft_mobile;
                var pastHeader = false;

                function resetHeader() {
                    article_enquireBox.attr('style', '');
                    article_enquireBox_mobile.attr('style', '');
                    article.attr('style', '').removeClass('over');
                }

                function setHeader() {
                    // match media
                    var matchMedia = window.matchMedia('only screen and (max-width : 979px)');
                    article_enquireBoxWidth = article_enquireBox.width() + 50;
                    article_enquireBoxTop = article_enquireBox.offset().top;
                    article_enquireBoxLeft = article_enquireBox.offset().left;
                    article_enquireBoxWidth_mobile = article_enquireBox_mobile.width() + 50;
                    article_enquireBoxTop_mobile = article_enquireBox_mobile.offset().top;
                    article_enquireBoxLeft_mobile = article_enquireBox_mobile.offset().left; // if mobile

                    if (matchMedia.matches) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function() {
                            var Y = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop(); // if (article_enquireBoxTop < Y) {
                            //     article_enquireBox.attr('style', 'position: fixed; top: 0; left: 0px; width: 100% !important;');
                            //     article.addClass('over')
                            // } else {
                            //     resetHeader()
                            // }
                            // pastHeader = article_enquireBoxTop_mobile < (Y + 300);
                            // console.log(article_enquireBoxTop_mobile, (Y + 300))
                            // if (pastHeader) {
                            //     console.log(1)
                            //     article_enquireBox_mobile.attr('style', 'position: fixed; top: 0; left: 0px; width: 100% !important;background-color: #fff;z-index: 99;box-shadow: 1px 1px 4px #ddd;');
                            //     article.addClass('over')
                            // } else {
                            //     console.log(2)
                            //     resetHeader()
                            //     pastHeader = false;
                            // }
                        });
                    } else {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function() {
                            var Y = jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).scrollTop();

                            if (article_enquireBoxTop < Y) {
                                article_enquireBox.attr('style', 'position: fixed; top: 0; left: ' + article_enquireBoxLeft + 'px; width: ' + article_enquireBoxWidth + 'px !important;');
                                article.addClass('over');
                            } else {
                                resetHeader();
                            }
                        });
                    }
                } // check window width


                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function() {
                    setHeader();
                });
                setHeader();
            }

            function nav() {
                var nav = jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav');
                var level_2 = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.level-2');
                var media = window.matchMedia;
                var display = window.matchMedia('(min-width: 1024px)').matches;
                var handheld = window.matchMedia('(max-width: 1024px)').matches;
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function() {
                    display = window.matchMedia('(min-width: 1024px)').matches;
                    handheld = window.matchMedia('(max-width: 1024px)').matches;
                });

                if (media) {
                    //global toggle filter
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.search-filter-toggle').on('click', function(e) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass('active');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('[class*="fa-angle"]').toggleClass('fa-angle-up fa-angle-down');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').slideToggle(300);
                    }); // if display

                    if (display === true || window.innerWidth > 1024) {
                        var level2UL = jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav .level-2 > ul'); // set nav level3 right and left direction to prevent screen overflow

                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav .level-3 li.has-child').on('mouseenter', function() {
                            if (window.innerWidth / 2 - 32 < jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).offset().left) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).find('.level-4').addClass('left');
                            }
                        }); // navigation toggles

                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav > li.has-child > a .fa').on('click', function() {
                            var that = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
                            var menu = jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).parent().next();
                            nav.addClass('close');
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).parent().parent().toggleClass('active');
                            level_2.removeClass('open');
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav .fa-angle-up').not(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this)).removeClass('fa-angle-up').addClass('fa-angle-down'); //

                            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).hasClass('fa-angle-up')) {
                                // reset
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav').addClass('close');
                                level_2.removeClass('open');
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).removeClass('fa-angle-up').addClass('fa-angle-down');
                            } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).hasClass('fa-angle-down')) {
                                // open
                                nav.removeClass('close');
                                nav.css({
                                    'margin-bottom': jquery__WEBPACK_IMPORTED_MODULE_0___default()(menu).height() + 70
                                });
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(menu).addClass('open');
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).removeClass('fa-angle-down').addClass('fa-angle-up');
                            } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(that).hasClass('navClose')) {
                                // reset
                                nav.addClass('close');
                                level_2.removeClass('open');
                            }

                            return false;
                        });
                    } // close navigation


                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.navbutton, .closeNav').on('click', function(e) {
                        e.preventDefault();
                        nav.toggleClass('open'); // $('body').toggleClass('navOpen');
                    }); // if tablet and mobile

                    if (handheld === true || window.innerWidth < 1024) {
                        // handle navigation
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('nav li.has-child > a > .fa').on('click', function() {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parent().next().slideToggle(300);
                            return false;
                        });
                    }
                }
            }

            function initFancybox() {
                function myStartFunction() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').addClass('fancybox_opened');
                }

                function myCloseFunction() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('body,html').removeClass('fancybox_opened');
                }

                var elements = jquery__WEBPACK_IMPORTED_MODULE_0___default()('a#inline, [data-fancybox], .has-video, .quick-enquire');
                elements.each(function(index, item) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(item).fancybox({
                        closeExisting: true,
                        loop: false,
                        arrows: false,
                        infobar: false,
                        mobile: {
                            clickContent: "close",
                            clickSlide: "close"
                        },
                        touch: {
                            vertical: false,
                            // Allow to drag content vertically
                            momentum: false // Continue movement after releasing mouse/touch when panning

                        },
                        onInit: function onInit() {
                            console.log(this);
                        },
                        afterShow: myStartFunction,
                        afterClose: myCloseFunction
                    });
                });

                if (window.location.hash === "#autoplay") {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(".has-video").trigger('click');
                }
            }

            function stickySearch() {
                if (document.querySelector('#myTabContent #search-filter')) {
                    return;
                } else {
                    var search_filter = jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter');

                    if (search_filter.length > 0) {
                        var search_filterOffset = search_filter.offset().top;
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function() {
                            if (window.scrollY > search_filterOffset) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').addClass('fixed');
                            } else {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('#search-filter').removeClass('fixed');
                            }
                        });
                    }
                }
            }

            function listing_pagination() {
                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination').length > 0) {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination').find('ul li').not('.next , .previous').hide();
                    var pagination_length = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination').find('li').length;
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination-lastPage').text(pagination_length - 2);

                    for (var index = 1; index <= pagination_length - 2; index++) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination').find('select.pagination-dropdown').append('<option value="' + index + '">' + index + '</option>');
                    }

                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination').find('.pagination-dropdown-con').removeClass('hide');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination').find('select.pagination-dropdown').on('change', function(e) {
                        e.preventDefault();
                        var $link = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination ul li').not('.next , .previous')[parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).val()) - 1];
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()($link).find('a')[0].click(); // else if (parseInt($(this).val()) == 1) {
                        //     let $link = $('.pagination ul li').not('.next , .previous')[parseInt($(this).val())];
                        //     $($link).find('a')[0].click();
                        // }
                    });
                    var selected_index = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination ul li.active').index();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.pagination').find('select.pagination-dropdown').val(selected_index);
                }
            }

            /***/
        }),

    /***/
    "./script/util/index.js":
        /*!******************************!*\
          !*** ./script/util/index.js ***!
          \******************************/
        /*! exports provided: Util, default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "Util", function() {
                return Util;
            });
            /* harmony import */
            var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! ./helpers */ "./script/util/helpers.js");
            /* harmony import */
            var _socialShare__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ./socialShare */ "./script/util/socialShare.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);



            function Util() {
                _helpers__WEBPACK_IMPORTED_MODULE_0__["loadScript"]("".concat(BASEURL, "/front/js/developer.js"), function() {
                    return null;
                });
                _helpers__WEBPACK_IMPORTED_MODULE_0__["removeNotification"]();
                _helpers__WEBPACK_IMPORTED_MODULE_0__["stickySearch"]();
                _helpers__WEBPACK_IMPORTED_MODULE_0__["sitckWidgetTitle"]();
                _helpers__WEBPACK_IMPORTED_MODULE_0__["limit"]();
                _helpers__WEBPACK_IMPORTED_MODULE_0__["cloudTags"]();
                _helpers__WEBPACK_IMPORTED_MODULE_0__["widgetEnquire"]();
                _helpers__WEBPACK_IMPORTED_MODULE_0__["nav"]();
                _helpers__WEBPACK_IMPORTED_MODULE_0__["tabsHandler"]('.tabs');
                _helpers__WEBPACK_IMPORTED_MODULE_0__["initFancybox"]();
                new _socialShare__WEBPACK_IMPORTED_MODULE_1__["default"]();
                var body = jquery__WEBPACK_IMPORTED_MODULE_2___default()('body');
                body.on('click', function(e) {
                    var target = e.target;

                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).hasClass('sellEstateButton') || jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).parents('.sellEstateButton').length > 0) {
                        jquery__WEBPACK_IMPORTED_MODULE_2___default()('a[href*="contact-us/sell-your-home-with-property-turkey"]')[0].click();
                        e.preventDefault();
                    } else if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).parents('.dropdown').length > 0 || jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).hasClass('fa-sort-down')) {
                        if (window.matchMedia('(max-width: 480px)').matches) {
                            jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).parents('.dropdown').toggleClass('open');
                        }

                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).is('.active') || jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).parents('.active').length > 0) {
                            e.preventDefault();
                        }
                    }
                });
            }
            /* harmony default export */
            __webpack_exports__["default"] = (Util);

            /***/
        }),

    /***/
    "./script/util/loadPage.js":
        /*!*********************************!*\
          !*** ./script/util/loadPage.js ***!
          \*********************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return loadPage;
            });
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _components_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../components/editor */ "./script/components/editor.js");
            /* harmony import */
            var _views_realestate__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../views/realestate */ "./script/views/realestate.js");
            // @flow



            function loadPage(url, elements, callback) {
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.skelton-loading').addClass('loadingg opacity-2'); // default loading class (loading)

                var request = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.get(url, function(data) {
                    var title = data.match(/<title[^>]*>([^<]+)<\/title>/)[1];
                    data = jquery__WEBPACK_IMPORTED_MODULE_0___default()(data);
                    var Main = jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).filter('#main');
                    var SearchFilter = jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).filter('#search-filter');
                    var seo = jquery__WEBPACK_IMPORTED_MODULE_0___default()(data).filter('#seo');
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('head title').text(title);

                    if (elements.searchfilter) {
                        elements.searchfilter.replaceWith(SearchFilter);
                    }

                    if (elements.seo) {
                        elements.seo.replaceWith(seo);
                        new _components_editor__WEBPACK_IMPORTED_MODULE_1__["default"]();
                    }

                    if (elements.main) {
                        elements.main.empty().replaceWith(Main);
                    } else {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('scroll');
                    }

                    if (elements.main) {
                        history.pushState(null, null, url);
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).trigger('pushstate');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('html, body').animate({
                            scrollTop: 0
                        }, 500);
                    }

                    Object(_views_realestate__WEBPACK_IMPORTED_MODULE_2__["default"])();
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('.skelton-loading').removeClass('loadingg opacity-2'); // default loading class (loading)

                    if (callback && typeof callback !== "undefined") {
                        callback();
                    }

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('body').hasClass('searchOpen')) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#price-toggle, .minPrice , .maxPrice, #referanceid ,  .tags ').removeClass("hide");
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bedrooms , .areas').removeClass('hideMobile');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.searchMore').text('Less');
                    }

                    jquery__WEBPACK_IMPORTED_MODULE_0___default()('#searchh-iconss , .searchMore').on('click', function(e) {
                        e.preventDefault();
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('#price-toggle, .minPrice , .maxPrice, #referanceid ,  .tags ').toggleClass("hide");
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.bedrooms , .areas').toggleClass('hideMobile');
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()('.plusicon , .minusicon').toggleClass('hide');

                        if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() == 'More' && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('searchMore')) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text('Less');
                        } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text() == 'Less' && jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).hasClass('searchMore')) {
                            jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).text('More');
                        }
                    });

                    if (window.location.href.indexOf('real_estate/turkey') > -1) {
                        if (+jquery__WEBPACK_IMPORTED_MODULE_0___default()('.totalpages-listing').text() <= 24) {
                            location.reload();
                        }
                    }
                }).fail(function() {
                    window.location.href = url;
                });
                return request;
            }

            /***/
        }),

    /***/
    "./script/util/socialShare.js":
        /*!************************************!*\
          !*** ./script/util/socialShare.js ***!
          \************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return socialShare;
            });
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var _library_social_master_assets_javascripts_socialShare__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../library/social-master/assets/javascripts/socialShare */ "./script/library/social-master/assets/javascripts/socialShare.js");
            /* harmony import */
            var _library_social_master_assets_javascripts_socialShare__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(_library_social_master_assets_javascripts_socialShare__WEBPACK_IMPORTED_MODULE_3__);


            // @flow



            var socialShare =
                /*#__PURE__*/
                function() {
                    function socialShare() {
                        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, socialShare);

                        this.fb_share = 0;
                        this.pin_share = 0;
                        this.gplus_share = 0;
                        this.linkedin_share = 0;
                        this.initCounts();
                        this.initShareButtons();
                    }

                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(socialShare, [{
                        key: "initShareButtons",
                        value: function initShareButtons() {
                            var _this = this;

                            var socialShare = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.social-shares');
                            var testimonialShare = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.testimonial-share');
                            testimonialShare.socialShare({
                                social: 'facebook,google,linkedin,pinterest,twitter,instgram',
                                shareUrl: CURRENT_URL.replace('http://', 'https://').replace('.loc', '.com'),
                                blur: true
                            });
                            socialShare.socialShare({
                                social: 'facebook,linkedin,pinterest,twitter,instgram',
                                shareUrl: CURRENT_URL.replace('http://', 'https://').replace('.loc', '.com'),
                                blur: true
                            });
                            socialShare.on('click', function(e) {
                                e.preventDefault(); // $('.aFacebook').next('span').text(_this.fb_share);
                                // $('.aPinterest').next('span').text(_this.pin_share);
                                // $('.aLinkedIn').next('span').text(_this.linkedin_share);
                            });
                        }
                    }, {
                        key: "initCounts",
                        value: function initCounts() { //  this.facebook();
                            //  this.pinterest();
                            //  this.linkedin();
                        }
                    }, {
                        key: "facebook",
                        value: function facebook() {
                            var _this = this;

                            return jquery__WEBPACK_IMPORTED_MODULE_2___default.a.getJSON('https://graph.facebook.com/v3.0/?access_token=EAAPdvB5BBIoBANuH6d3htJkelhZC51uuACZA1pXP9CEAioqgWa7YzvgCDmcxXYm5qXY0ZCWsZBPjjlEozDmOyezPeNpdZAbaHwyV40icnLlInsjaPrSGMXaDiNDP06yBJlrnINhW9zQptChTCfw75MgXjfD7b8vKNZBphbMzwvH7EYQuBfVqvY&debug=all&fields=engagement%2Cog_object&format=json&id=' + window['CURRENT_URL'].replace('http://', 'https://').replace('.loc', '.com') + '&method=get&pretty=0&suppress_http_code=1&transport=cors', function(data) { //    console.log(data)
                                //     _this.fb_share = data.engagement.share_count;
                                //         let total = parseInt(_this.fb_share + _this.pin_share + _this.gplus_share + _this.linkedin_share);
                                //         $('.social-shares-tooltip').text(`${total} ${window['LABELS']['share']}`);
                            });
                        }
                    }, {
                        key: "pinterest",
                        value: function pinterest() {
                            var _this = this;

                            return jquery__WEBPACK_IMPORTED_MODULE_2___default.a.get('https://api.pinterest.com/v1/urls/count.json?url=' + window['CURRENT_URL'].replace('http://', 'https://').replace('.loc', '.com')).done(function(data) {
                                data = data.replace('receiveCount(', '').replace('})', '}');
                                data = JSON.parse(data);
                                _this.pin_share = data.count;
                                var total = parseInt(_this.fb_share + _this.pin_share + _this.gplus_share + _this.linkedin_share);
                                jquery__WEBPACK_IMPORTED_MODULE_2___default()('.social-shares-tooltip').text("".concat(total, " ").concat(window['LABELS']['share']));
                            });
                        }
                    }, {
                        key: "linkedin",
                        value: function linkedin() {
                            var _this = this;

                            return jquery__WEBPACK_IMPORTED_MODULE_2___default.a.ajax({
                                url: "https://www.linkedin.com/countserv/count/share?format=jsonp&url=" + window['CURRENT_URL'].replace('http://', 'https://').replace('.loc', '.com'),
                                crossDomain: true,
                                dataType: 'jsonp',
                                success: function success(data) {
                                    _this.linkedin_share = data.count;
                                    var total = parseInt(_this.fb_share + _this.pin_share + _this.gplus_share + _this.linkedin_share);
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.social-shares-tooltip').text("".concat(total, " ").concat(window['LABELS']['share']));
                                }
                            });
                        }
                    }]);

                    return socialShare;
                }();



            /***/
        }),

    /***/
    "./script/views/realestate.js":
        /*!************************************!*\
          !*** ./script/views/realestate.js ***!
          \************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return RealEstate;
            });
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _components_carousel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! ../components/carousel */ "./script/components/carousel.js");
            /* harmony import */
            var _components_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! ../components/filter */ "./script/components/filter.js");
            /* harmony import */
            var _components_home_tabs_filter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../components/home-tabs-filter */ "./script/components/home-tabs-filter.js");
            /* harmony import */
            var _util_helpers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__( /*! ../util/helpers */ "./script/util/helpers.js");
            /* harmony import */
            var _index__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__( /*! ../index */ "./script/index.js");






            function RealEstate() {
                new _components_carousel__WEBPACK_IMPORTED_MODULE_1__["default"]('.carousel');
                Object(_components_filter__WEBPACK_IMPORTED_MODULE_2__["default"])();
                Object(_components_home_tabs_filter__WEBPACK_IMPORTED_MODULE_3__["default"])();
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["stickySearch"])();
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["brWorker"])();
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["show_hide"])();
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["listing_pagination"])();
                Object(_util_helpers__WEBPACK_IMPORTED_MODULE_4__["initFancybox"])();
                Object(_index__WEBPACK_IMPORTED_MODULE_5__["lazyLoad"])();
                var meta = jquery__WEBPACK_IMPORTED_MODULE_0___default()('section > meta');
                var enquiryBox_top = jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.page .enquiries');
                var media = {
                    mobile: '(max-width: 480px)'
                };
                jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('resize', function() {
                    if (window.matchMedia(media.mobile).matches === true) {
                        try {
                            if (window.scrollY > jquery__WEBPACK_IMPORTED_MODULE_0___default()(meta).offset().top) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(meta).addClass('fixed');
                            } else {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()(meta).removeClass('fixed');
                            }
                        } catch (e) {}
                    } else if (window.matchMedia(media.mobile).matches === false) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).on('scroll', function() {
                            if (parseInt(jquery__WEBPACK_IMPORTED_MODULE_0___default()('.enquiries .count').text().split(' ')[0]) > 0) {
                                stickyEnquiryButton = true;
                            } else {
                                stickyEnquiryButton = false;
                            }

                            if (window.scrollY > enquiryBox_top && stickyEnquiryButton === true) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.page .enquiries').addClass('fixed');
                            } else {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('header.page .enquiries').removeClass('fixed');
                            }

                            if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.property-price-box').length > 0 && window.scrollY > property_price_box && window.matchMedia('(min-width: 760px)').matches) {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slug="property"] article header').addClass('addPadding');
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.property-price-box').addClass('fixed');
                            } else {
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('[data-slug="property"] article header').removeClass('addPadding');
                                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.property-price-box').removeClass('fixed');
                            }
                        });
                    }
                });
                jquery__WEBPACK_IMPORTED_MODULE_0___default()('.details-toggler').on('click', function() {
                    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).parents('article').stop().toggleClass('details-open');
                });
                var stickyEnquiryButton;

                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(enquiryBox_top).length > 0) {
                    enquiryBox_top = enquiryBox_top.offset().top ? enquiryBox_top.offset().top : 0;
                }

                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.property-price-box').length > 0 && window.matchMedia('(min-width: 760px)').matches) {
                    var _property_price_box = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.property-price-box').offset().top ? jquery__WEBPACK_IMPORTED_MODULE_0___default()('.property-price-box').offset().top : 0;
                }

                if (jquery__WEBPACK_IMPORTED_MODULE_0___default()('.playVideo').length > 0) {
                    // $('.playVideo').addClass('hide');
                    // $('.playVideo').parent().find('.videoHolder').addClass('hide');
                    var video = jquery__WEBPACK_IMPORTED_MODULE_0___default()('.playVideo').parent().find('iframe'); //video.clone().appendTo('.videoContainer');
                    //$('.videoContainer').find('iframe').last().removeClass('hide');
                }

                ; // filter and tags

                jquery__WEBPACK_IMPORTED_MODULE_0___default()('body a').on('click', function(e) {
                    var target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target);

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).hasClass('fa')) {
                        target = jquery__WEBPACK_IMPORTED_MODULE_0___default()(e.target).parents('a');
                    }

                    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).hasClass('filter-button') || jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).hasClass('backButton')) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(".widgets.tagsBar").toggleClass("open");
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()("html").toggleClass("overflow");
                        e.preventDefault();
                    } else if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(target).hasClass('sort-button')) {
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()(this).toggleClass("active");
                        jquery__WEBPACK_IMPORTED_MODULE_0___default()("section .meta .buttonlist").toggleClass("open");
                        e.preventDefault();
                    }
                });
            };

            /***/
        }),

    /***/
    "./script/views/sellestate.js":
        /*!************************************!*\
          !*** ./script/views/sellestate.js ***!
          \************************************/
        /*! exports provided: default */
        /***/
        (function(module, __webpack_exports__, __webpack_require__) {

            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */
            __webpack_require__.d(__webpack_exports__, "default", function() {
                return SellEstate;
            });
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__( /*! @babel/runtime/helpers/classCallCheck */ "../node_modules/@babel/runtime/helpers/classCallCheck.js");
            /* harmony import */
            var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__);
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__( /*! @babel/runtime/helpers/createClass */ "../node_modules/@babel/runtime/helpers/createClass.js");
            /* harmony import */
            var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__( /*! jquery */ "../node_modules/jquery/dist/jquery.min.js");
            /* harmony import */
            var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
            /* harmony import */
            var _util_helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__( /*! ../util/helpers */ "./script/util/helpers.js");


            // @flow



            var SellEstate =
                /*#__PURE__*/
                function() {
                    function SellEstate() {
                        var _this = this;

                        _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0___default()(this, SellEstate);

                        this.navigateStepButtons = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.navigateStep');

                        if (this.navigateStepButtons.length) {
                            this.navigateStepButtons.on('click', function(event) {
                                var that = jquery__WEBPACK_IMPORTED_MODULE_2___default()(event.target);
                                var el = jquery__WEBPACK_IMPORTED_MODULE_2___default()(that.attr('el'));
                                var parent = jquery__WEBPACK_IMPORTED_MODULE_2___default()(that.attr('parent'));

                                _this.navigateSteps(that, el, parent);
                            });
                        }

                        this.init();
                    }

                    _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1___default()(SellEstate, [{
                        key: "init",
                        value: function init() {
                            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()('a[href*="contact-us/sell-your-home-with-property-turkey"]').length > 0) {
                                jquery__WEBPACK_IMPORTED_MODULE_2___default()('.sellEstateButton').show();
                            }

                            jquery__WEBPACK_IMPORTED_MODULE_2___default()('body').on('click', function(e) {
                                var target = e.target;

                                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).hasClass('sellEstateButton') || jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).parents('.sellEstateButton').length > 0) {
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('a[href*="contact-us/sell-your-home-with-property-turkey"]')[0].click();
                                    e.preventDefault();
                                } else if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).parents('.dropdown').length > 0 || jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).hasClass('fa-sort-down')) {
                                    if (window.matchMedia('(max-width: 480px)').matches) {
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).parents('.dropdown').toggleClass('open');
                                    }

                                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).is('.active') || jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).parents('.active').length > 0) {
                                        e.preventDefault();
                                    }
                                }
                            });
                        }
                    }, {
                        key: "navigateSteps",
                        value: function navigateSteps(that, el, parent) {
                            var target = jquery__WEBPACK_IMPORTED_MODULE_2___default()(el).parent();
                            var tabsTop = jquery__WEBPACK_IMPORTED_MODULE_2___default()('.tabs').offset().top;

                            if (parent != null) {
                                var these_items = jquery__WEBPACK_IMPORTED_MODULE_2___default()(parent).find('input, textarea, select');
                                jquery__WEBPACK_IMPORTED_MODULE_2___default()(these_items).each(function(i) {
                                    var this_item = these_items[i];

                                    if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).attr('validation') != undefined && jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).attr('validation').split('-')[0] != 'maxChars' && jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).attr('validation').split('-')[0] != 'minChars') {
                                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).val() === '' || jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).val() === '0' || jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).val() === 'default' || jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).val() === 'N/A' || jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).val() === null) {
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).parent().addClass('error').attr('error-message', 'this Field is Required');
                                        } else {
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()(this_item).parent().removeClass('error').attr('error-message', '');
                                        }
                                    }
                                });
                            }

                            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(that).attr('rel') === 'next') {
                                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(parent).find('.error').length > 0) {
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()('.message').toggleClass('closed error').text('Please Fix Errors on Fields.');
                                    setTimeout(function() {
                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.message').toggleClass('closed error');
                                    }, 4000);
                                } else {
                                    jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).click();
                                }
                            } else {
                                jquery__WEBPACK_IMPORTED_MODULE_2___default()(target).click();
                            } //


                            Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["scrollTo"])(tabsTop); //

                            var relItems = jquery__WEBPACK_IMPORTED_MODULE_2___default()('form .field[rel]');
                            var items = jquery__WEBPACK_IMPORTED_MODULE_2___default()(relItems).find('input, select, textarea');
                            items.each(function(i) {
                                var item = items[i];
                                var related_In_Summery = jquery__WEBPACK_IMPORTED_MODULE_2___default()(relItems[i]).attr('rel');
                                var data;

                                switch (item.nodeName) {
                                    case 'TEXTAREA':
                                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).val() === '') {
                                            data = 'empty';
                                        } else {
                                            data = jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).val();
                                        }

                                        break;

                                    case 'SELECT':
                                        if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).attr('multiple')) {
                                            data = [];
                                            jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).find('option:selected').each(function(i) {
                                                data.push(jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).find('option:selected')[i].text);
                                            });
                                            data = data.join(', ');
                                        } else {
                                            if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).find('option:selected').text()[0] === '-') {
                                                data = 'empty';
                                            } else {
                                                data = jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).find('option:selected').text();
                                            }
                                        }

                                        break;

                                    case 'INPUT':
                                        switch (item.type) {
                                            case 'file':
                                                if (item.files && item.files[0]) {
                                                    var reader = new FileReader();

                                                    reader.onload = function(e) {
                                                        jquery__WEBPACK_IMPORTED_MODULE_2___default()('.' + related_In_Summery + ' img').attr('src', e.target.result);
                                                    };

                                                    reader.readAsDataURL(item.files[0]);
                                                }

                                                break;

                                            default:
                                                if (jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).val() === '') {
                                                    data = 'empty';
                                                } else {
                                                    data = Object(_util_helpers__WEBPACK_IMPORTED_MODULE_3__["encodeHTML"])(jquery__WEBPACK_IMPORTED_MODULE_2___default()(item).val());
                                                }

                                                break;
                                        }

                                        break;
                                }

                                jquery__WEBPACK_IMPORTED_MODULE_2___default()('.' + related_In_Summery + ' span').html(data);
                            });
                        }
                    }]);

                    return SellEstate;
                }();



            /***/
        })

    /******/
});