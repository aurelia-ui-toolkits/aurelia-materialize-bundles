/* */ 
define(['exports'], function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ScrollfirePatch = exports.ScrollfirePatch = function () {
    function ScrollfirePatch() {
      _classCallCheck(this, ScrollfirePatch);

      this.patched = false;
    }

    ScrollfirePatch.prototype.patch = function patch() {
      if (!this.patched) {
        this.patched = true;

        window.Materialize.scrollFire = function (options) {
          var didScroll = false;
          window.addEventListener('scroll', function () {
            didScroll = true;
          });

          setInterval(function () {
            if (didScroll) {
              didScroll = false;

              var windowScroll = window.pageYOffset + window.innerHeight;
              for (var i = 0; i < options.length; i++) {
                var value = options[i];
                var selector = value.selector;
                var offset = value.offset;
                var callback = value.callback;

                var currentElement = document.querySelector(selector);
                if (currentElement !== null) {
                  var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;

                  if (windowScroll > elementOffset + offset) {
                    if (value.done !== true) {
                      if (typeof callback === 'string') {
                        var callbackFunc = new Function(callback);
                        callbackFunc();
                      } else if (typeof callback === 'function') {
                        callback();
                      }
                      value.done = true;
                    }
                  }
                }
              }
            }
          }, 100);
        };
      }
    };

    return ScrollfirePatch;
  }();
});