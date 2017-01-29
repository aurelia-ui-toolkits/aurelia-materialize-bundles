/* */ 
"format cjs";
(function(process) {
  if (typeof(jQuery) === 'undefined') {
    var jQuery;
    if (typeof(require) === 'function') {
      jQuery = $ = require('jquery');
    } else {
      jQuery = $;
    }
  }
  ;
  jQuery.easing['jswing'] = jQuery.easing['swing'];
  jQuery.extend(jQuery.easing, {
    def: 'easeOutQuad',
    swing: function(x, t, b, c, d) {
      return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
    },
    easeInQuad: function(x, t, b, c, d) {
      return c * (t /= d) * t + b;
    },
    easeOutQuad: function(x, t, b, c, d) {
      return -c * (t /= d) * (t - 2) + b;
    },
    easeInOutQuad: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t + b;
      return -c / 2 * ((--t) * (t - 2) - 1) + b;
    },
    easeInCubic: function(x, t, b, c, d) {
      return c * (t /= d) * t * t + b;
    },
    easeOutCubic: function(x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t + 1) + b;
    },
    easeInOutCubic: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t + 2) + b;
    },
    easeInQuart: function(x, t, b, c, d) {
      return c * (t /= d) * t * t * t + b;
    },
    easeOutQuart: function(x, t, b, c, d) {
      return -c * ((t = t / d - 1) * t * t * t - 1) + b;
    },
    easeInOutQuart: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t * t * t + b;
      return -c / 2 * ((t -= 2) * t * t * t - 2) + b;
    },
    easeInQuint: function(x, t, b, c, d) {
      return c * (t /= d) * t * t * t * t + b;
    },
    easeOutQuint: function(x, t, b, c, d) {
      return c * ((t = t / d - 1) * t * t * t * t + 1) + b;
    },
    easeInOutQuint: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t * t * t * t + b;
      return c / 2 * ((t -= 2) * t * t * t * t + 2) + b;
    },
    easeInSine: function(x, t, b, c, d) {
      return -c * Math.cos(t / d * (Math.PI / 2)) + c + b;
    },
    easeOutSine: function(x, t, b, c, d) {
      return c * Math.sin(t / d * (Math.PI / 2)) + b;
    },
    easeInOutSine: function(x, t, b, c, d) {
      return -c / 2 * (Math.cos(Math.PI * t / d) - 1) + b;
    },
    easeInExpo: function(x, t, b, c, d) {
      return (t == 0) ? b : c * Math.pow(2, 10 * (t / d - 1)) + b;
    },
    easeOutExpo: function(x, t, b, c, d) {
      return (t == d) ? b + c : c * (-Math.pow(2, -10 * t / d) + 1) + b;
    },
    easeInOutExpo: function(x, t, b, c, d) {
      if (t == 0)
        return b;
      if (t == d)
        return b + c;
      if ((t /= d / 2) < 1)
        return c / 2 * Math.pow(2, 10 * (t - 1)) + b;
      return c / 2 * (-Math.pow(2, -10 * --t) + 2) + b;
    },
    easeInCirc: function(x, t, b, c, d) {
      return -c * (Math.sqrt(1 - (t /= d) * t) - 1) + b;
    },
    easeOutCirc: function(x, t, b, c, d) {
      return c * Math.sqrt(1 - (t = t / d - 1) * t) + b;
    },
    easeInOutCirc: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return -c / 2 * (Math.sqrt(1 - t * t) - 1) + b;
      return c / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + b;
    },
    easeInElastic: function(x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0)
        return b;
      if ((t /= d) == 1)
        return b + c;
      if (!p)
        p = d * .3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else
        var s = p / (2 * Math.PI) * Math.asin(c / a);
      return -(a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
    },
    easeOutElastic: function(x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0)
        return b;
      if ((t /= d) == 1)
        return b + c;
      if (!p)
        p = d * .3;
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else
        var s = p / (2 * Math.PI) * Math.asin(c / a);
      return a * Math.pow(2, -10 * t) * Math.sin((t * d - s) * (2 * Math.PI) / p) + c + b;
    },
    easeInOutElastic: function(x, t, b, c, d) {
      var s = 1.70158;
      var p = 0;
      var a = c;
      if (t == 0)
        return b;
      if ((t /= d / 2) == 2)
        return b + c;
      if (!p)
        p = d * (.3 * 1.5);
      if (a < Math.abs(c)) {
        a = c;
        var s = p / 4;
      } else
        var s = p / (2 * Math.PI) * Math.asin(c / a);
      if (t < 1)
        return -.5 * (a * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p)) + b;
      return a * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * d - s) * (2 * Math.PI) / p) * .5 + c + b;
    },
    easeInBack: function(x, t, b, c, d, s) {
      if (s == undefined)
        s = 1.70158;
      return c * (t /= d) * t * ((s + 1) * t - s) + b;
    },
    easeOutBack: function(x, t, b, c, d, s) {
      if (s == undefined)
        s = 1.70158;
      return c * ((t = t / d - 1) * t * ((s + 1) * t + s) + 1) + b;
    },
    easeInOutBack: function(x, t, b, c, d, s) {
      if (s == undefined)
        s = 1.70158;
      if ((t /= d / 2) < 1)
        return c / 2 * (t * t * (((s *= (1.525)) + 1) * t - s)) + b;
      return c / 2 * ((t -= 2) * t * (((s *= (1.525)) + 1) * t + s) + 2) + b;
    },
    easeInBounce: function(x, t, b, c, d) {
      return c - jQuery.easing.easeOutBounce(x, d - t, 0, c, d) + b;
    },
    easeOutBounce: function(x, t, b, c, d) {
      if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
      } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
      } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
      } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
      }
    },
    easeInOutBounce: function(x, t, b, c, d) {
      if (t < d / 2)
        return jQuery.easing.easeInBounce(x, t * 2, 0, c, d) * .5 + b;
      return jQuery.easing.easeOutBounce(x, t * 2 - d, 0, c, d) * .5 + c * .5 + b;
    }
  });
  ;
  jQuery.extend(jQuery.easing, {easeInOutMaterial: function(x, t, b, c, d) {
      if ((t /= d / 2) < 1)
        return c / 2 * t * t + b;
      return c / 4 * ((t -= 2) * t * t + 2) + b;
    }});
  ;
  jQuery.Velocity ? console.log("Velocity is already loaded. You may be needlessly importing Velocity again; note that Materialize includes Velocity.") : (!function(e) {
    function t(e) {
      var t = e.length,
          a = r.type(e);
      return "function" === a || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === a || 0 === t || "number" == typeof t && t > 0 && t - 1 in e;
    }
    if (!e.jQuery) {
      var r = function(e, t) {
        return new r.fn.init(e, t);
      };
      r.isWindow = function(e) {
        return null != e && e == e.window;
      }, r.type = function(e) {
        return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[i.call(e)] || "object" : typeof e;
      }, r.isArray = Array.isArray || function(e) {
        return "array" === r.type(e);
      }, r.isPlainObject = function(e) {
        var t;
        if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e))
          return !1;
        try {
          if (e.constructor && !o.call(e, "constructor") && !o.call(e.constructor.prototype, "isPrototypeOf"))
            return !1;
        } catch (a) {
          return !1;
        }
        for (t in e)
          ;
        return void 0 === t || o.call(e, t);
      }, r.each = function(e, r, a) {
        var n,
            o = 0,
            i = e.length,
            s = t(e);
        if (a) {
          if (s)
            for (; i > o && (n = r.apply(e[o], a), n !== !1); o++)
              ;
          else
            for (o in e)
              if (n = r.apply(e[o], a), n === !1)
                break;
        } else if (s)
          for (; i > o && (n = r.call(e[o], o, e[o]), n !== !1); o++)
            ;
        else
          for (o in e)
            if (n = r.call(e[o], o, e[o]), n === !1)
              break;
        return e;
      }, r.data = function(e, t, n) {
        if (void 0 === n) {
          var o = e[r.expando],
              i = o && a[o];
          if (void 0 === t)
            return i;
          if (i && t in i)
            return i[t];
        } else if (void 0 !== t) {
          var o = e[r.expando] || (e[r.expando] = ++r.uuid);
          return a[o] = a[o] || {}, a[o][t] = n, n;
        }
      }, r.removeData = function(e, t) {
        var n = e[r.expando],
            o = n && a[n];
        o && r.each(t, function(e, t) {
          delete o[t];
        });
      }, r.extend = function() {
        var e,
            t,
            a,
            n,
            o,
            i,
            s = arguments[0] || {},
            l = 1,
            u = arguments.length,
            c = !1;
        for ("boolean" == typeof s && (c = s, s = arguments[l] || {}, l++), "object" != typeof s && "function" !== r.type(s) && (s = {}), l === u && (s = this, l--); u > l; l++)
          if (null != (o = arguments[l]))
            for (n in o)
              e = s[n], a = o[n], s !== a && (c && a && (r.isPlainObject(a) || (t = r.isArray(a))) ? (t ? (t = !1, i = e && r.isArray(e) ? e : []) : i = e && r.isPlainObject(e) ? e : {}, s[n] = r.extend(c, i, a)) : void 0 !== a && (s[n] = a));
        return s;
      }, r.queue = function(e, a, n) {
        function o(e, r) {
          var a = r || [];
          return null != e && (t(Object(e)) ? !function(e, t) {
            for (var r = +t.length,
                a = 0,
                n = e.length; r > a; )
              e[n++] = t[a++];
            if (r !== r)
              for (; void 0 !== t[a]; )
                e[n++] = t[a++];
            return e.length = n, e;
          }(a, "string" == typeof e ? [e] : e) : [].push.call(a, e)), a;
        }
        if (e) {
          a = (a || "fx") + "queue";
          var i = r.data(e, a);
          return n ? (!i || r.isArray(n) ? i = r.data(e, a, o(n)) : i.push(n), i) : i || [];
        }
      }, r.dequeue = function(e, t) {
        r.each(e.nodeType ? [e] : e, function(e, a) {
          t = t || "fx";
          var n = r.queue(a, t),
              o = n.shift();
          "inprogress" === o && (o = n.shift()), o && ("fx" === t && n.unshift("inprogress"), o.call(a, function() {
            r.dequeue(a, t);
          }));
        });
      }, r.fn = r.prototype = {
        init: function(e) {
          if (e.nodeType)
            return this[0] = e, this;
          throw new Error("Not a DOM node.");
        },
        offset: function() {
          var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {
            top: 0,
            left: 0
          };
          return {
            top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
            left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
          };
        },
        position: function() {
          function e() {
            for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position; )
              e = e.offsetParent;
            return e || document;
          }
          var t = this[0],
              e = e.apply(t),
              a = this.offset(),
              n = /^(?:body|html)$/i.test(e.nodeName) ? {
                top: 0,
                left: 0
              } : r(e).offset();
          return a.top -= parseFloat(t.style.marginTop) || 0, a.left -= parseFloat(t.style.marginLeft) || 0, e.style && (n.top += parseFloat(e.style.borderTopWidth) || 0, n.left += parseFloat(e.style.borderLeftWidth) || 0), {
            top: a.top - n.top,
            left: a.left - n.left
          };
        }
      };
      var a = {};
      r.expando = "velocity" + (new Date).getTime(), r.uuid = 0;
      for (var n = {},
          o = n.hasOwnProperty,
          i = n.toString,
          s = "Boolean Number String Function Array Date RegExp Object Error".split(" "),
          l = 0; l < s.length; l++)
        n["[object " + s[l] + "]"] = s[l].toLowerCase();
      r.fn.init.prototype = r.fn, e.Velocity = {Utilities: r};
    }
  }(window), function(e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e();
  }(function() {
    return function(e, t, r, a) {
      function n(e) {
        for (var t = -1,
            r = e ? e.length : 0,
            a = []; ++t < r; ) {
          var n = e[t];
          n && a.push(n);
        }
        return a;
      }
      function o(e) {
        return m.isWrapped(e) ? e = [].slice.call(e) : m.isNode(e) && (e = [e]), e;
      }
      function i(e) {
        var t = f.data(e, "velocity");
        return null === t ? a : t;
      }
      function s(e) {
        return function(t) {
          return Math.round(t * e) * (1 / e);
        };
      }
      function l(e, r, a, n) {
        function o(e, t) {
          return 1 - 3 * t + 3 * e;
        }
        function i(e, t) {
          return 3 * t - 6 * e;
        }
        function s(e) {
          return 3 * e;
        }
        function l(e, t, r) {
          return ((o(t, r) * e + i(t, r)) * e + s(t)) * e;
        }
        function u(e, t, r) {
          return 3 * o(t, r) * e * e + 2 * i(t, r) * e + s(t);
        }
        function c(t, r) {
          for (var n = 0; m > n; ++n) {
            var o = u(r, e, a);
            if (0 === o)
              return r;
            var i = l(r, e, a) - t;
            r -= i / o;
          }
          return r;
        }
        function p() {
          for (var t = 0; b > t; ++t)
            w[t] = l(t * x, e, a);
        }
        function f(t, r, n) {
          var o,
              i,
              s = 0;
          do
            i = r + (n - r) / 2, o = l(i, e, a) - t, o > 0 ? n = i : r = i;
 while (Math.abs(o) > h && ++s < v);
          return i;
        }
        function d(t) {
          for (var r = 0,
              n = 1,
              o = b - 1; n != o && w[n] <= t; ++n)
            r += x;
          --n;
          var i = (t - w[n]) / (w[n + 1] - w[n]),
              s = r + i * x,
              l = u(s, e, a);
          return l >= y ? c(t, s) : 0 == l ? s : f(t, r, r + x);
        }
        function g() {
          V = !0, (e != r || a != n) && p();
        }
        var m = 4,
            y = .001,
            h = 1e-7,
            v = 10,
            b = 11,
            x = 1 / (b - 1),
            S = "Float32Array" in t;
        if (4 !== arguments.length)
          return !1;
        for (var P = 0; 4 > P; ++P)
          if ("number" != typeof arguments[P] || isNaN(arguments[P]) || !isFinite(arguments[P]))
            return !1;
        e = Math.min(e, 1), a = Math.min(a, 1), e = Math.max(e, 0), a = Math.max(a, 0);
        var w = S ? new Float32Array(b) : new Array(b),
            V = !1,
            C = function(t) {
              return V || g(), e === r && a === n ? t : 0 === t ? 0 : 1 === t ? 1 : l(d(t), r, n);
            };
        C.getControlPoints = function() {
          return [{
            x: e,
            y: r
          }, {
            x: a,
            y: n
          }];
        };
        var T = "generateBezier(" + [e, r, a, n] + ")";
        return C.toString = function() {
          return T;
        }, C;
      }
      function u(e, t) {
        var r = e;
        return m.isString(e) ? b.Easings[e] || (r = !1) : r = m.isArray(e) && 1 === e.length ? s.apply(null, e) : m.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : m.isArray(e) && 4 === e.length ? l.apply(null, e) : !1, r === !1 && (r = b.Easings[b.defaults.easing] ? b.defaults.easing : v), r;
      }
      function c(e) {
        if (e) {
          var t = (new Date).getTime(),
              r = b.State.calls.length;
          r > 1e4 && (b.State.calls = n(b.State.calls));
          for (var o = 0; r > o; o++)
            if (b.State.calls[o]) {
              var s = b.State.calls[o],
                  l = s[0],
                  u = s[2],
                  d = s[3],
                  g = !!d,
                  y = null;
              d || (d = b.State.calls[o][3] = t - 16);
              for (var h = Math.min((t - d) / u.duration, 1),
                  v = 0,
                  x = l.length; x > v; v++) {
                var P = l[v],
                    V = P.element;
                if (i(V)) {
                  var C = !1;
                  if (u.display !== a && null !== u.display && "none" !== u.display) {
                    if ("flex" === u.display) {
                      var T = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                      f.each(T, function(e, t) {
                        S.setPropertyValue(V, "display", t);
                      });
                    }
                    S.setPropertyValue(V, "display", u.display);
                  }
                  u.visibility !== a && "hidden" !== u.visibility && S.setPropertyValue(V, "visibility", u.visibility);
                  for (var k in P)
                    if ("element" !== k) {
                      var A,
                          F = P[k],
                          j = m.isString(F.easing) ? b.Easings[F.easing] : F.easing;
                      if (1 === h)
                        A = F.endValue;
                      else {
                        var E = F.endValue - F.startValue;
                        if (A = F.startValue + E * j(h, u, E), !g && A === F.currentValue)
                          continue;
                      }
                      if (F.currentValue = A, "tween" === k)
                        y = A;
                      else {
                        if (S.Hooks.registered[k]) {
                          var H = S.Hooks.getRoot(k),
                              N = i(V).rootPropertyValueCache[H];
                          N && (F.rootPropertyValue = N);
                        }
                        var L = S.setPropertyValue(V, k, F.currentValue + (0 === parseFloat(A) ? "" : F.unitType), F.rootPropertyValue, F.scrollData);
                        S.Hooks.registered[k] && (i(V).rootPropertyValueCache[H] = S.Normalizations.registered[H] ? S.Normalizations.registered[H]("extract", null, L[1]) : L[1]), "transform" === L[0] && (C = !0);
                      }
                    }
                  u.mobileHA && i(V).transformCache.translate3d === a && (i(V).transformCache.translate3d = "(0px, 0px, 0px)", C = !0), C && S.flushTransformCache(V);
                }
              }
              u.display !== a && "none" !== u.display && (b.State.calls[o][2].display = !1), u.visibility !== a && "hidden" !== u.visibility && (b.State.calls[o][2].visibility = !1), u.progress && u.progress.call(s[1], s[1], h, Math.max(0, d + u.duration - t), d, y), 1 === h && p(o);
            }
        }
        b.State.isTicking && w(c);
      }
      function p(e, t) {
        if (!b.State.calls[e])
          return !1;
        for (var r = b.State.calls[e][0],
            n = b.State.calls[e][1],
            o = b.State.calls[e][2],
            s = b.State.calls[e][4],
            l = !1,
            u = 0,
            c = r.length; c > u; u++) {
          var p = r[u].element;
          if (t || o.loop || ("none" === o.display && S.setPropertyValue(p, "display", o.display), "hidden" === o.visibility && S.setPropertyValue(p, "visibility", o.visibility)), o.loop !== !0 && (f.queue(p)[1] === a || !/\.velocityQueueEntryFlag/i.test(f.queue(p)[1])) && i(p)) {
            i(p).isAnimating = !1, i(p).rootPropertyValueCache = {};
            var d = !1;
            f.each(S.Lists.transforms3D, function(e, t) {
              var r = /^scale/.test(t) ? 1 : 0,
                  n = i(p).transformCache[t];
              i(p).transformCache[t] !== a && new RegExp("^\\(" + r + "[^.]").test(n) && (d = !0, delete i(p).transformCache[t]);
            }), o.mobileHA && (d = !0, delete i(p).transformCache.translate3d), d && S.flushTransformCache(p), S.Values.removeClass(p, "velocity-animating");
          }
          if (!t && o.complete && !o.loop && u === c - 1)
            try {
              o.complete.call(n, n);
            } catch (g) {
              setTimeout(function() {
                throw g;
              }, 1);
            }
          s && o.loop !== !0 && s(n), i(p) && o.loop === !0 && !t && (f.each(i(p).tweensContainer, function(e, t) {
            /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100);
          }), b(p, "reverse", {
            loop: !0,
            delay: o.delay
          })), o.queue !== !1 && f.dequeue(p, o.queue);
        }
        b.State.calls[e] = !1;
        for (var m = 0,
            y = b.State.calls.length; y > m; m++)
          if (b.State.calls[m] !== !1) {
            l = !0;
            break;
          }
        l === !1 && (b.State.isTicking = !1, delete b.State.calls, b.State.calls = []);
      }
      var f,
          d = function() {
            if (r.documentMode)
              return r.documentMode;
            for (var e = 7; e > 4; e--) {
              var t = r.createElement("div");
              if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length)
                return t = null, e;
            }
            return a;
          }(),
          g = function() {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function(t) {
              var r,
                  a = (new Date).getTime();
              return r = Math.max(0, 16 - (a - e)), e = a + r, setTimeout(function() {
                t(a + r);
              }, r);
            };
          }(),
          m = {
            isString: function(e) {
              return "string" == typeof e;
            },
            isArray: Array.isArray || function(e) {
              return "[object Array]" === Object.prototype.toString.call(e);
            },
            isFunction: function(e) {
              return "[object Function]" === Object.prototype.toString.call(e);
            },
            isNode: function(e) {
              return e && e.nodeType;
            },
            isNodeList: function(e) {
              return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== a && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0);
            },
            isWrapped: function(e) {
              return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e));
            },
            isSVG: function(e) {
              return t.SVGElement && e instanceof t.SVGElement;
            },
            isEmptyObject: function(e) {
              for (var t in e)
                return !1;
              return !0;
            }
          },
          y = !1;
      if (e.fn && e.fn.jquery ? (f = e, y = !0) : f = t.Velocity.Utilities, 8 >= d && !y)
        throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
      if (7 >= d)
        return void(jQuery.fn.velocity = jQuery.fn.animate);
      var h = 400,
          v = "swing",
          b = {
            State: {
              isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
              isAndroid: /Android/i.test(navigator.userAgent),
              isGingerbread: /Android 2\.3\.[3-7]/i.test(navigator.userAgent),
              isChrome: t.chrome,
              isFirefox: /Firefox/i.test(navigator.userAgent),
              prefixElement: r.createElement("div"),
              prefixMatches: {},
              scrollAnchor: null,
              scrollPropertyLeft: null,
              scrollPropertyTop: null,
              isTicking: !1,
              calls: []
            },
            CSS: {},
            Utilities: f,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
              queue: "",
              duration: h,
              easing: v,
              begin: a,
              complete: a,
              progress: a,
              display: a,
              visibility: a,
              loop: !1,
              delay: !1,
              mobileHA: !0,
              _cacheValues: !0
            },
            init: function(e) {
              f.data(e, "velocity", {
                isSVG: m.isSVG(e),
                isAnimating: !1,
                computedStyle: null,
                tweensContainer: null,
                rootPropertyValueCache: {},
                transformCache: {}
              });
            },
            hook: null,
            mock: !1,
            version: {
              major: 1,
              minor: 2,
              patch: 2
            },
            debug: !1
          };
      t.pageYOffset !== a ? (b.State.scrollAnchor = t, b.State.scrollPropertyLeft = "pageXOffset", b.State.scrollPropertyTop = "pageYOffset") : (b.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, b.State.scrollPropertyLeft = "scrollLeft", b.State.scrollPropertyTop = "scrollTop");
      var x = function() {
        function e(e) {
          return -e.tension * e.x - e.friction * e.v;
        }
        function t(t, r, a) {
          var n = {
            x: t.x + a.dx * r,
            v: t.v + a.dv * r,
            tension: t.tension,
            friction: t.friction
          };
          return {
            dx: n.v,
            dv: e(n)
          };
        }
        function r(r, a) {
          var n = {
            dx: r.v,
            dv: e(r)
          },
              o = t(r, .5 * a, n),
              i = t(r, .5 * a, o),
              s = t(r, a, i),
              l = 1 / 6 * (n.dx + 2 * (o.dx + i.dx) + s.dx),
              u = 1 / 6 * (n.dv + 2 * (o.dv + i.dv) + s.dv);
          return r.x = r.x + l * a, r.v = r.v + u * a, r;
        }
        return function a(e, t, n) {
          var o,
              i,
              s,
              l = {
                x: -1,
                v: 0,
                tension: null,
                friction: null
              },
              u = [0],
              c = 0,
              p = 1e-4,
              f = .016;
          for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, n = n || null, l.tension = e, l.friction = t, o = null !== n, o ? (c = a(e, t), i = c / n * f) : i = f; s = r(s || l, i), u.push(1 + s.x), c += 16, Math.abs(s.x) > p && Math.abs(s.v) > p; )
            ;
          return o ? function(e) {
            return u[e * (u.length - 1) | 0];
          } : c;
        };
      }();
      b.Easings = {
        linear: function(e) {
          return e;
        },
        swing: function(e) {
          return .5 - Math.cos(e * Math.PI) / 2;
        },
        spring: function(e) {
          return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e);
        }
      }, f.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function(e, t) {
        b.Easings[t[0]] = l.apply(null, t[1]);
      });
      var S = b.CSS = {
        RegEx: {
          isHex: /^#([A-f\d]{3}){1,2}$/i,
          valueUnwrap: /^[A-z]+\((.*)\)$/i,
          wrappedValueAlreadyExtracted: /[0-9.]+ [0-9.]+ [0-9.]+( [0-9.]+)?/,
          valueSplit: /([A-z]+\(.+\))|(([A-z0-9#-.]+?)(?=\s|$))/gi
        },
        Lists: {
          colors: ["fill", "stroke", "stopColor", "color", "backgroundColor", "borderColor", "borderTopColor", "borderRightColor", "borderBottomColor", "borderLeftColor", "outlineColor"],
          transformsBase: ["translateX", "translateY", "scale", "scaleX", "scaleY", "skewX", "skewY", "rotateZ"],
          transforms3D: ["transformPerspective", "translateZ", "scaleZ", "rotateX", "rotateY"]
        },
        Hooks: {
          templates: {
            textShadow: ["Color X Y Blur", "black 0px 0px 0px"],
            boxShadow: ["Color X Y Blur Spread", "black 0px 0px 0px 0px"],
            clip: ["Top Right Bottom Left", "0px 0px 0px 0px"],
            backgroundPosition: ["X Y", "0% 0%"],
            transformOrigin: ["X Y Z", "50% 50% 0px"],
            perspectiveOrigin: ["X Y", "50% 50%"]
          },
          registered: {},
          register: function() {
            for (var e = 0; e < S.Lists.colors.length; e++) {
              var t = "color" === S.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
              S.Hooks.templates[S.Lists.colors[e]] = ["Red Green Blue Alpha", t];
            }
            var r,
                a,
                n;
            if (d)
              for (r in S.Hooks.templates) {
                a = S.Hooks.templates[r], n = a[0].split(" ");
                var o = a[1].match(S.RegEx.valueSplit);
                "Color" === n[0] && (n.push(n.shift()), o.push(o.shift()), S.Hooks.templates[r] = [n.join(" "), o.join(" ")]);
              }
            for (r in S.Hooks.templates) {
              a = S.Hooks.templates[r], n = a[0].split(" ");
              for (var e in n) {
                var i = r + n[e],
                    s = e;
                S.Hooks.registered[i] = [r, s];
              }
            }
          },
          getRoot: function(e) {
            var t = S.Hooks.registered[e];
            return t ? t[0] : e;
          },
          cleanRootPropertyValue: function(e, t) {
            return S.RegEx.valueUnwrap.test(t) && (t = t.match(S.RegEx.valueUnwrap)[1]), S.Values.isCSSNullValue(t) && (t = S.Hooks.templates[e][1]), t;
          },
          extractValue: function(e, t) {
            var r = S.Hooks.registered[e];
            if (r) {
              var a = r[0],
                  n = r[1];
              return t = S.Hooks.cleanRootPropertyValue(a, t), t.toString().match(S.RegEx.valueSplit)[n];
            }
            return t;
          },
          injectValue: function(e, t, r) {
            var a = S.Hooks.registered[e];
            if (a) {
              var n,
                  o,
                  i = a[0],
                  s = a[1];
              return r = S.Hooks.cleanRootPropertyValue(i, r), n = r.toString().match(S.RegEx.valueSplit), n[s] = t, o = n.join(" ");
            }
            return r;
          }
        },
        Normalizations: {
          registered: {
            clip: function(e, t, r) {
              switch (e) {
                case "name":
                  return "clip";
                case "extract":
                  var a;
                  return S.RegEx.wrappedValueAlreadyExtracted.test(r) ? a = r : (a = r.toString().match(S.RegEx.valueUnwrap), a = a ? a[1].replace(/,(\s+)?/g, " ") : r), a;
                case "inject":
                  return "rect(" + r + ")";
              }
            },
            blur: function(e, t, r) {
              switch (e) {
                case "name":
                  return b.State.isFirefox ? "filter" : "-webkit-filter";
                case "extract":
                  var a = parseFloat(r);
                  if (!a && 0 !== a) {
                    var n = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                    a = n ? n[1] : 0;
                  }
                  return a;
                case "inject":
                  return parseFloat(r) ? "blur(" + r + ")" : "none";
              }
            },
            opacity: function(e, t, r) {
              if (8 >= d)
                switch (e) {
                  case "name":
                    return "filter";
                  case "extract":
                    var a = r.toString().match(/alpha\(opacity=(.*)\)/i);
                    return r = a ? a[1] / 100 : 1;
                  case "inject":
                    return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")";
                }
              else
                switch (e) {
                  case "name":
                    return "opacity";
                  case "extract":
                    return r;
                  case "inject":
                    return r;
                }
            }
          },
          register: function() {
            9 >= d || b.State.isGingerbread || (S.Lists.transformsBase = S.Lists.transformsBase.concat(S.Lists.transforms3D));
            for (var e = 0; e < S.Lists.transformsBase.length; e++)
              !function() {
                var t = S.Lists.transformsBase[e];
                S.Normalizations.registered[t] = function(e, r, n) {
                  switch (e) {
                    case "name":
                      return "transform";
                    case "extract":
                      return i(r) === a || i(r).transformCache[t] === a ? /^scale/i.test(t) ? 1 : 0 : i(r).transformCache[t].replace(/[()]/g, "");
                    case "inject":
                      var o = !1;
                      switch (t.substr(0, t.length - 1)) {
                        case "translate":
                          o = !/(%|px|em|rem|vw|vh|\d)$/i.test(n);
                          break;
                        case "scal":
                        case "scale":
                          b.State.isAndroid && i(r).transformCache[t] === a && 1 > n && (n = 1), o = !/(\d)$/i.test(n);
                          break;
                        case "skew":
                          o = !/(deg|\d)$/i.test(n);
                          break;
                        case "rotate":
                          o = !/(deg|\d)$/i.test(n);
                      }
                      return o || (i(r).transformCache[t] = "(" + n + ")"), i(r).transformCache[t];
                  }
                };
              }();
            for (var e = 0; e < S.Lists.colors.length; e++)
              !function() {
                var t = S.Lists.colors[e];
                S.Normalizations.registered[t] = function(e, r, n) {
                  switch (e) {
                    case "name":
                      return t;
                    case "extract":
                      var o;
                      if (S.RegEx.wrappedValueAlreadyExtracted.test(n))
                        o = n;
                      else {
                        var i,
                            s = {
                              black: "rgb(0, 0, 0)",
                              blue: "rgb(0, 0, 255)",
                              gray: "rgb(128, 128, 128)",
                              green: "rgb(0, 128, 0)",
                              red: "rgb(255, 0, 0)",
                              white: "rgb(255, 255, 255)"
                            };
                        /^[A-z]+$/i.test(n) ? i = s[n] !== a ? s[n] : s.black : S.RegEx.isHex.test(n) ? i = "rgb(" + S.Values.hexToRgb(n).join(" ") + ")" : /^rgba?\(/i.test(n) || (i = s.black), o = (i || n).toString().match(S.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ");
                      }
                      return 8 >= d || 3 !== o.split(" ").length || (o += " 1"), o;
                    case "inject":
                      return 8 >= d ? 4 === n.split(" ").length && (n = n.split(/\s+/).slice(0, 3).join(" ")) : 3 === n.split(" ").length && (n += " 1"), (8 >= d ? "rgb" : "rgba") + "(" + n.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")";
                  }
                };
              }();
          }
        },
        Names: {
          camelCase: function(e) {
            return e.replace(/-(\w)/g, function(e, t) {
              return t.toUpperCase();
            });
          },
          SVGAttribute: function(e) {
            var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
            return (d || b.State.isAndroid && !b.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e);
          },
          prefixCheck: function(e) {
            if (b.State.prefixMatches[e])
              return [b.State.prefixMatches[e], !0];
            for (var t = ["", "Webkit", "Moz", "ms", "O"],
                r = 0,
                a = t.length; a > r; r++) {
              var n;
              if (n = 0 === r ? e : t[r] + e.replace(/^\w/, function(e) {
                return e.toUpperCase();
              }), m.isString(b.State.prefixElement.style[n]))
                return b.State.prefixMatches[e] = n, [n, !0];
            }
            return [e, !1];
          }
        },
        Values: {
          hexToRgb: function(e) {
            var t,
                r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i,
                a = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
            return e = e.replace(r, function(e, t, r, a) {
              return t + t + r + r + a + a;
            }), t = a.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0];
          },
          isCSSNullValue: function(e) {
            return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e);
          },
          getUnitType: function(e) {
            return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px";
          },
          getDisplayType: function(e) {
            var t = e && e.tagName.toString().toLowerCase();
            return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block";
          },
          addClass: function(e, t) {
            e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t;
          },
          removeClass: function(e, t) {
            e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ");
          }
        },
        getPropertyValue: function(e, r, n, o) {
          function s(e, r) {
            function n() {
              u && S.setPropertyValue(e, "display", "none");
            }
            var l = 0;
            if (8 >= d)
              l = f.css(e, r);
            else {
              var u = !1;
              if (/^(width|height)$/.test(r) && 0 === S.getPropertyValue(e, "display") && (u = !0, S.setPropertyValue(e, "display", S.Values.getDisplayType(e))), !o) {
                if ("height" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                  var c = e.offsetHeight - (parseFloat(S.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingBottom")) || 0);
                  return n(), c;
                }
                if ("width" === r && "border-box" !== S.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                  var p = e.offsetWidth - (parseFloat(S.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(S.getPropertyValue(e, "paddingRight")) || 0);
                  return n(), p;
                }
              }
              var g;
              g = i(e) === a ? t.getComputedStyle(e, null) : i(e).computedStyle ? i(e).computedStyle : i(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), l = 9 === d && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === l || null === l) && (l = e.style[r]), n();
            }
            if ("auto" === l && /^(top|right|bottom|left)$/i.test(r)) {
              var m = s(e, "position");
              ("fixed" === m || "absolute" === m && /top|left/i.test(r)) && (l = f(e).position()[r] + "px");
            }
            return l;
          }
          var l;
          if (S.Hooks.registered[r]) {
            var u = r,
                c = S.Hooks.getRoot(u);
            n === a && (n = S.getPropertyValue(e, S.Names.prefixCheck(c)[0])), S.Normalizations.registered[c] && (n = S.Normalizations.registered[c]("extract", e, n)), l = S.Hooks.extractValue(u, n);
          } else if (S.Normalizations.registered[r]) {
            var p,
                g;
            p = S.Normalizations.registered[r]("name", e), "transform" !== p && (g = s(e, S.Names.prefixCheck(p)[0]), S.Values.isCSSNullValue(g) && S.Hooks.templates[r] && (g = S.Hooks.templates[r][1])), l = S.Normalizations.registered[r]("extract", e, g);
          }
          if (!/^[\d-]/.test(l))
            if (i(e) && i(e).isSVG && S.Names.SVGAttribute(r))
              if (/^(height|width)$/i.test(r))
                try {
                  l = e.getBBox()[r];
                } catch (m) {
                  l = 0;
                }
              else
                l = e.getAttribute(r);
            else
              l = s(e, S.Names.prefixCheck(r)[0]);
          return S.Values.isCSSNullValue(l) && (l = 0), b.debug >= 2 && console.log("Get " + r + ": " + l), l;
        },
        setPropertyValue: function(e, r, a, n, o) {
          var s = r;
          if ("scroll" === r)
            o.container ? o.container["scroll" + o.direction] = a : "Left" === o.direction ? t.scrollTo(a, o.alternateValue) : t.scrollTo(o.alternateValue, a);
          else if (S.Normalizations.registered[r] && "transform" === S.Normalizations.registered[r]("name", e))
            S.Normalizations.registered[r]("inject", e, a), s = "transform", a = i(e).transformCache[r];
          else {
            if (S.Hooks.registered[r]) {
              var l = r,
                  u = S.Hooks.getRoot(r);
              n = n || S.getPropertyValue(e, u), a = S.Hooks.injectValue(l, a, n), r = u;
            }
            if (S.Normalizations.registered[r] && (a = S.Normalizations.registered[r]("inject", e, a), r = S.Normalizations.registered[r]("name", e)), s = S.Names.prefixCheck(r)[0], 8 >= d)
              try {
                e.style[s] = a;
              } catch (c) {
                b.debug && console.log("Browser does not support [" + a + "] for [" + s + "]");
              }
            else
              i(e) && i(e).isSVG && S.Names.SVGAttribute(r) ? e.setAttribute(r, a) : e.style[s] = a;
            b.debug >= 2 && console.log("Set " + r + " (" + s + "): " + a);
          }
          return [s, a];
        },
        flushTransformCache: function(e) {
          function t(t) {
            return parseFloat(S.getPropertyValue(e, t));
          }
          var r = "";
          if ((d || b.State.isAndroid && !b.State.isChrome) && i(e).isSVG) {
            var a = {
              translate: [t("translateX"), t("translateY")],
              skewX: [t("skewX")],
              skewY: [t("skewY")],
              scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
              rotate: [t("rotateZ"), 0, 0]
            };
            f.each(i(e).transformCache, function(e) {
              /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), a[e] && (r += e + "(" + a[e].join(" ") + ") ", delete a[e]);
            });
          } else {
            var n,
                o;
            f.each(i(e).transformCache, function(t) {
              return n = i(e).transformCache[t], "transformPerspective" === t ? (o = n, !0) : (9 === d && "rotateZ" === t && (t = "rotate"), void(r += t + n + " "));
            }), o && (r = "perspective" + o + " " + r);
          }
          S.setPropertyValue(e, "transform", r);
        }
      };
      S.Hooks.register(), S.Normalizations.register(), b.hook = function(e, t, r) {
        var n = a;
        return e = o(e), f.each(e, function(e, o) {
          if (i(o) === a && b.init(o), r === a)
            n === a && (n = b.CSS.getPropertyValue(o, t));
          else {
            var s = b.CSS.setPropertyValue(o, t, r);
            "transform" === s[0] && b.CSS.flushTransformCache(o), n = s;
          }
        }), n;
      };
      var P = function() {
        function e() {
          return s ? k.promise || null : l;
        }
        function n() {
          function e(e) {
            function p(e, t) {
              var r = a,
                  n = a,
                  i = a;
              return m.isArray(e) ? (r = e[0], !m.isArray(e[1]) && /^[\d-]/.test(e[1]) || m.isFunction(e[1]) || S.RegEx.isHex.test(e[1]) ? i = e[1] : (m.isString(e[1]) && !S.RegEx.isHex.test(e[1]) || m.isArray(e[1])) && (n = t ? e[1] : u(e[1], s.duration), e[2] !== a && (i = e[2]))) : r = e, t || (n = n || s.easing), m.isFunction(r) && (r = r.call(o, V, w)), m.isFunction(i) && (i = i.call(o, V, w)), [r || 0, n, i];
            }
            function d(e, t) {
              var r,
                  a;
              return a = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function(e) {
                return r = e, "";
              }), r || (r = S.Values.getUnitType(e)), [a, r];
            }
            function h() {
              var e = {
                myParent: o.parentNode || r.body,
                position: S.getPropertyValue(o, "position"),
                fontSize: S.getPropertyValue(o, "fontSize")
              },
                  a = e.position === L.lastPosition && e.myParent === L.lastParent,
                  n = e.fontSize === L.lastFontSize;
              L.lastParent = e.myParent, L.lastPosition = e.position, L.lastFontSize = e.fontSize;
              var s = 100,
                  l = {};
              if (n && a)
                l.emToPx = L.lastEmToPx, l.percentToPxWidth = L.lastPercentToPxWidth, l.percentToPxHeight = L.lastPercentToPxHeight;
              else {
                var u = i(o).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                b.init(u), e.myParent.appendChild(u), f.each(["overflow", "overflowX", "overflowY"], function(e, t) {
                  b.CSS.setPropertyValue(u, t, "hidden");
                }), b.CSS.setPropertyValue(u, "position", e.position), b.CSS.setPropertyValue(u, "fontSize", e.fontSize), b.CSS.setPropertyValue(u, "boxSizing", "content-box"), f.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function(e, t) {
                  b.CSS.setPropertyValue(u, t, s + "%");
                }), b.CSS.setPropertyValue(u, "paddingLeft", s + "em"), l.percentToPxWidth = L.lastPercentToPxWidth = (parseFloat(S.getPropertyValue(u, "width", null, !0)) || 1) / s, l.percentToPxHeight = L.lastPercentToPxHeight = (parseFloat(S.getPropertyValue(u, "height", null, !0)) || 1) / s, l.emToPx = L.lastEmToPx = (parseFloat(S.getPropertyValue(u, "paddingLeft")) || 1) / s, e.myParent.removeChild(u);
              }
              return null === L.remToPx && (L.remToPx = parseFloat(S.getPropertyValue(r.body, "fontSize")) || 16), null === L.vwToPx && (L.vwToPx = parseFloat(t.innerWidth) / 100, L.vhToPx = parseFloat(t.innerHeight) / 100), l.remToPx = L.remToPx, l.vwToPx = L.vwToPx, l.vhToPx = L.vhToPx, b.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(l), o), l;
            }
            if (s.begin && 0 === V)
              try {
                s.begin.call(g, g);
              } catch (x) {
                setTimeout(function() {
                  throw x;
                }, 1);
              }
            if ("scroll" === A) {
              var P,
                  C,
                  T,
                  F = /^x$/i.test(s.axis) ? "Left" : "Top",
                  j = parseFloat(s.offset) || 0;
              s.container ? m.isWrapped(s.container) || m.isNode(s.container) ? (s.container = s.container[0] || s.container, P = s.container["scroll" + F], T = P + f(o).position()[F.toLowerCase()] + j) : s.container = null : (P = b.State.scrollAnchor[b.State["scrollProperty" + F]], C = b.State.scrollAnchor[b.State["scrollProperty" + ("Left" === F ? "Top" : "Left")]], T = f(o).offset()[F.toLowerCase()] + j), l = {
                scroll: {
                  rootPropertyValue: !1,
                  startValue: P,
                  currentValue: P,
                  endValue: T,
                  unitType: "",
                  easing: s.easing,
                  scrollData: {
                    container: s.container,
                    direction: F,
                    alternateValue: C
                  }
                },
                element: o
              }, b.debug && console.log("tweensContainer (scroll): ", l.scroll, o);
            } else if ("reverse" === A) {
              if (!i(o).tweensContainer)
                return void f.dequeue(o, s.queue);
              "none" === i(o).opts.display && (i(o).opts.display = "auto"), "hidden" === i(o).opts.visibility && (i(o).opts.visibility = "visible"), i(o).opts.loop = !1, i(o).opts.begin = null, i(o).opts.complete = null, v.easing || delete s.easing, v.duration || delete s.duration, s = f.extend({}, i(o).opts, s);
              var E = f.extend(!0, {}, i(o).tweensContainer);
              for (var H in E)
                if ("element" !== H) {
                  var N = E[H].startValue;
                  E[H].startValue = E[H].currentValue = E[H].endValue, E[H].endValue = N, m.isEmptyObject(v) || (E[H].easing = s.easing), b.debug && console.log("reverse tweensContainer (" + H + "): " + JSON.stringify(E[H]), o);
                }
              l = E;
            } else if ("start" === A) {
              var E;
              i(o).tweensContainer && i(o).isAnimating === !0 && (E = i(o).tweensContainer), f.each(y, function(e, t) {
                if (RegExp("^" + S.Lists.colors.join("$|^") + "$").test(e)) {
                  var r = p(t, !0),
                      n = r[0],
                      o = r[1],
                      i = r[2];
                  if (S.RegEx.isHex.test(n)) {
                    for (var s = ["Red", "Green", "Blue"],
                        l = S.Values.hexToRgb(n),
                        u = i ? S.Values.hexToRgb(i) : a,
                        c = 0; c < s.length; c++) {
                      var f = [l[c]];
                      o && f.push(o), u !== a && f.push(u[c]), y[e + s[c]] = f;
                    }
                    delete y[e];
                  }
                }
              });
              for (var z in y) {
                var O = p(y[z]),
                    q = O[0],
                    $ = O[1],
                    M = O[2];
                z = S.Names.camelCase(z);
                var I = S.Hooks.getRoot(z),
                    B = !1;
                if (i(o).isSVG || "tween" === I || S.Names.prefixCheck(I)[1] !== !1 || S.Normalizations.registered[I] !== a) {
                  (s.display !== a && null !== s.display && "none" !== s.display || s.visibility !== a && "hidden" !== s.visibility) && /opacity|filter/.test(z) && !M && 0 !== q && (M = 0), s._cacheValues && E && E[z] ? (M === a && (M = E[z].endValue + E[z].unitType), B = i(o).rootPropertyValueCache[I]) : S.Hooks.registered[z] ? M === a ? (B = S.getPropertyValue(o, I), M = S.getPropertyValue(o, z, B)) : B = S.Hooks.templates[I][1] : M === a && (M = S.getPropertyValue(o, z));
                  var W,
                      G,
                      Y,
                      D = !1;
                  if (W = d(z, M), M = W[0], Y = W[1], W = d(z, q), q = W[0].replace(/^([+-\/*])=/, function(e, t) {
                    return D = t, "";
                  }), G = W[1], M = parseFloat(M) || 0, q = parseFloat(q) || 0, "%" === G && (/^(fontSize|lineHeight)$/.test(z) ? (q /= 100, G = "em") : /^scale/.test(z) ? (q /= 100, G = "") : /(Red|Green|Blue)$/i.test(z) && (q = q / 100 * 255, G = "")), /[\/*]/.test(D))
                    G = Y;
                  else if (Y !== G && 0 !== M)
                    if (0 === q)
                      G = Y;
                    else {
                      n = n || h();
                      var Q = /margin|padding|left|right|width|text|word|letter/i.test(z) || /X$/.test(z) || "x" === z ? "x" : "y";
                      switch (Y) {
                        case "%":
                          M *= "x" === Q ? n.percentToPxWidth : n.percentToPxHeight;
                          break;
                        case "px":
                          break;
                        default:
                          M *= n[Y + "ToPx"];
                      }
                      switch (G) {
                        case "%":
                          M *= 1 / ("x" === Q ? n.percentToPxWidth : n.percentToPxHeight);
                          break;
                        case "px":
                          break;
                        default:
                          M *= 1 / n[G + "ToPx"];
                      }
                    }
                  switch (D) {
                    case "+":
                      q = M + q;
                      break;
                    case "-":
                      q = M - q;
                      break;
                    case "*":
                      q = M * q;
                      break;
                    case "/":
                      q = M / q;
                  }
                  l[z] = {
                    rootPropertyValue: B,
                    startValue: M,
                    currentValue: M,
                    endValue: q,
                    unitType: G,
                    easing: $
                  }, b.debug && console.log("tweensContainer (" + z + "): " + JSON.stringify(l[z]), o);
                } else
                  b.debug && console.log("Skipping [" + I + "] due to a lack of browser support.");
              }
              l.element = o;
            }
            l.element && (S.Values.addClass(o, "velocity-animating"), R.push(l), "" === s.queue && (i(o).tweensContainer = l, i(o).opts = s), i(o).isAnimating = !0, V === w - 1 ? (b.State.calls.push([R, g, s, null, k.resolver]), b.State.isTicking === !1 && (b.State.isTicking = !0, c())) : V++);
          }
          var n,
              o = this,
              s = f.extend({}, b.defaults, v),
              l = {};
          switch (i(o) === a && b.init(o), parseFloat(s.delay) && s.queue !== !1 && f.queue(o, s.queue, function(e) {
            b.velocityQueueEntryFlag = !0, i(o).delayTimer = {
              setTimeout: setTimeout(e, parseFloat(s.delay)),
              next: e
            };
          }), s.duration.toString().toLowerCase()) {
            case "fast":
              s.duration = 200;
              break;
            case "normal":
              s.duration = h;
              break;
            case "slow":
              s.duration = 600;
              break;
            default:
              s.duration = parseFloat(s.duration) || 1;
          }
          b.mock !== !1 && (b.mock === !0 ? s.duration = s.delay = 1 : (s.duration *= parseFloat(b.mock) || 1, s.delay *= parseFloat(b.mock) || 1)), s.easing = u(s.easing, s.duration), s.begin && !m.isFunction(s.begin) && (s.begin = null), s.progress && !m.isFunction(s.progress) && (s.progress = null), s.complete && !m.isFunction(s.complete) && (s.complete = null), s.display !== a && null !== s.display && (s.display = s.display.toString().toLowerCase(), "auto" === s.display && (s.display = b.CSS.Values.getDisplayType(o))), s.visibility !== a && null !== s.visibility && (s.visibility = s.visibility.toString().toLowerCase()), s.mobileHA = s.mobileHA && b.State.isMobile && !b.State.isGingerbread, s.queue === !1 ? s.delay ? setTimeout(e, s.delay) : e() : f.queue(o, s.queue, function(t, r) {
            return r === !0 ? (k.promise && k.resolver(g), !0) : (b.velocityQueueEntryFlag = !0, void e(t));
          }), "" !== s.queue && "fx" !== s.queue || "inprogress" === f.queue(o)[0] || f.dequeue(o);
        }
        var s,
            l,
            d,
            g,
            y,
            v,
            x = arguments[0] && (arguments[0].p || f.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || m.isString(arguments[0].properties));
        if (m.isWrapped(this) ? (s = !1, d = 0, g = this, l = this) : (s = !0, d = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = o(g)) {
          x ? (y = arguments[0].properties || arguments[0].p, v = arguments[0].options || arguments[0].o) : (y = arguments[d], v = arguments[d + 1]);
          var w = g.length,
              V = 0;
          if (!/^(stop|finish)$/i.test(y) && !f.isPlainObject(v)) {
            var C = d + 1;
            v = {};
            for (var T = C; T < arguments.length; T++)
              m.isArray(arguments[T]) || !/^(fast|normal|slow)$/i.test(arguments[T]) && !/^\d/.test(arguments[T]) ? m.isString(arguments[T]) || m.isArray(arguments[T]) ? v.easing = arguments[T] : m.isFunction(arguments[T]) && (v.complete = arguments[T]) : v.duration = arguments[T];
          }
          var k = {
            promise: null,
            resolver: null,
            rejecter: null
          };
          s && b.Promise && (k.promise = new b.Promise(function(e, t) {
            k.resolver = e, k.rejecter = t;
          }));
          var A;
          switch (y) {
            case "scroll":
              A = "scroll";
              break;
            case "reverse":
              A = "reverse";
              break;
            case "finish":
            case "stop":
              f.each(g, function(e, t) {
                i(t) && i(t).delayTimer && (clearTimeout(i(t).delayTimer.setTimeout), i(t).delayTimer.next && i(t).delayTimer.next(), delete i(t).delayTimer);
              });
              var F = [];
              return f.each(b.State.calls, function(e, t) {
                t && f.each(t[1], function(r, n) {
                  var o = v === a ? "" : v;
                  return o === !0 || t[2].queue === o || v === a && t[2].queue === !1 ? void f.each(g, function(r, a) {
                    a === n && ((v === !0 || m.isString(v)) && (f.each(f.queue(a, m.isString(v) ? v : ""), function(e, t) {
                      m.isFunction(t) && t(null, !0);
                    }), f.queue(a, m.isString(v) ? v : "", [])), "stop" === y ? (i(a) && i(a).tweensContainer && o !== !1 && f.each(i(a).tweensContainer, function(e, t) {
                      t.endValue = t.currentValue;
                    }), F.push(e)) : "finish" === y && (t[2].duration = 1));
                  }) : !0;
                });
              }), "stop" === y && (f.each(F, function(e, t) {
                p(t, !0);
              }), k.promise && k.resolver(g)), e();
            default:
              if (!f.isPlainObject(y) || m.isEmptyObject(y)) {
                if (m.isString(y) && b.Redirects[y]) {
                  var j = f.extend({}, v),
                      E = j.duration,
                      H = j.delay || 0;
                  return j.backwards === !0 && (g = f.extend(!0, [], g).reverse()), f.each(g, function(e, t) {
                    parseFloat(j.stagger) ? j.delay = H + parseFloat(j.stagger) * e : m.isFunction(j.stagger) && (j.delay = H + j.stagger.call(t, e, w)), j.drag && (j.duration = parseFloat(E) || (/^(callout|transition)/.test(y) ? 1e3 : h), j.duration = Math.max(j.duration * (j.backwards ? 1 - e / w : (e + 1) / w), .75 * j.duration, 200)), b.Redirects[y].call(t, t, j || {}, e, w, g, k.promise ? k : a);
                  }), e();
                }
                var N = "Velocity: First argument (" + y + ") was not a property map, a known action, or a registered redirect. Aborting.";
                return k.promise ? k.rejecter(new Error(N)) : console.log(N), e();
              }
              A = "start";
          }
          var L = {
            lastParent: null,
            lastPosition: null,
            lastFontSize: null,
            lastPercentToPxWidth: null,
            lastPercentToPxHeight: null,
            lastEmToPx: null,
            remToPx: null,
            vwToPx: null,
            vhToPx: null
          },
              R = [];
          f.each(g, function(e, t) {
            m.isNode(t) && n.call(t);
          });
          var z,
              j = f.extend({}, b.defaults, v);
          if (j.loop = parseInt(j.loop), z = 2 * j.loop - 1, j.loop)
            for (var O = 0; z > O; O++) {
              var q = {
                delay: j.delay,
                progress: j.progress
              };
              O === z - 1 && (q.display = j.display, q.visibility = j.visibility, q.complete = j.complete), P(g, "reverse", q);
            }
          return e();
        }
      };
      b = f.extend(P, b), b.animate = P;
      var w = t.requestAnimationFrame || g;
      return b.State.isMobile || r.hidden === a || r.addEventListener("visibilitychange", function() {
        r.hidden ? (w = function(e) {
          return setTimeout(function() {
            e(!0);
          }, 16);
        }, c()) : w = t.requestAnimationFrame || g;
      }), e.Velocity = b, e !== t && (e.fn.velocity = P, e.fn.velocity.defaults = b.defaults), f.each(["Down", "Up"], function(e, t) {
        b.Redirects["slide" + t] = function(e, r, n, o, i, s) {
          var l = f.extend({}, r),
              u = l.begin,
              c = l.complete,
              p = {
                height: "",
                marginTop: "",
                marginBottom: "",
                paddingTop: "",
                paddingBottom: ""
              },
              d = {};
          l.display === a && (l.display = "Down" === t ? "inline" === b.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), l.begin = function() {
            u && u.call(i, i);
            for (var r in p) {
              d[r] = e.style[r];
              var a = b.CSS.getPropertyValue(e, r);
              p[r] = "Down" === t ? [a, 0] : [0, a];
            }
            d.overflow = e.style.overflow, e.style.overflow = "hidden";
          }, l.complete = function() {
            for (var t in d)
              e.style[t] = d[t];
            c && c.call(i, i), s && s.resolver(i);
          }, b(e, p, l);
        };
      }), f.each(["In", "Out"], function(e, t) {
        b.Redirects["fade" + t] = function(e, r, n, o, i, s) {
          var l = f.extend({}, r),
              u = {opacity: "In" === t ? 1 : 0},
              c = l.complete;
          l.complete = n !== o - 1 ? l.begin = null : function() {
            c && c.call(i, i), s && s.resolver(i);
          }, l.display === a && (l.display = "In" === t ? "auto" : "none"), b(this, u, l);
        };
      }), b;
    }(window.jQuery || window.Zepto || window, window, document);
  }));
  ;
  !function(a, b, c, d) {
    "use strict";
    function k(a, b, c) {
      return setTimeout(q(a, c), b);
    }
    function l(a, b, c) {
      return Array.isArray(a) ? (m(a, c[b], c), !0) : !1;
    }
    function m(a, b, c) {
      var e;
      if (a)
        if (a.forEach)
          a.forEach(b, c);
        else if (a.length !== d)
          for (e = 0; e < a.length; )
            b.call(c, a[e], e, a), e++;
        else
          for (e in a)
            a.hasOwnProperty(e) && b.call(c, a[e], e, a);
    }
    function n(a, b, c) {
      for (var e = Object.keys(b),
          f = 0; f < e.length; )
        (!c || c && a[e[f]] === d) && (a[e[f]] = b[e[f]]), f++;
      return a;
    }
    function o(a, b) {
      return n(a, b, !0);
    }
    function p(a, b, c) {
      var e,
          d = b.prototype;
      e = a.prototype = Object.create(d), e.constructor = a, e._super = d, c && n(e, c);
    }
    function q(a, b) {
      return function() {
        return a.apply(b, arguments);
      };
    }
    function r(a, b) {
      return typeof a == g ? a.apply(b ? b[0] || d : d, b) : a;
    }
    function s(a, b) {
      return a === d ? b : a;
    }
    function t(a, b, c) {
      m(x(b), function(b) {
        a.addEventListener(b, c, !1);
      });
    }
    function u(a, b, c) {
      m(x(b), function(b) {
        a.removeEventListener(b, c, !1);
      });
    }
    function v(a, b) {
      for (; a; ) {
        if (a == b)
          return !0;
        a = a.parentNode;
      }
      return !1;
    }
    function w(a, b) {
      return a.indexOf(b) > -1;
    }
    function x(a) {
      return a.trim().split(/\s+/g);
    }
    function y(a, b, c) {
      if (a.indexOf && !c)
        return a.indexOf(b);
      for (var d = 0; d < a.length; ) {
        if (c && a[d][c] == b || !c && a[d] === b)
          return d;
        d++;
      }
      return -1;
    }
    function z(a) {
      return Array.prototype.slice.call(a, 0);
    }
    function A(a, b, c) {
      for (var d = [],
          e = [],
          f = 0; f < a.length; ) {
        var g = b ? a[f][b] : a[f];
        y(e, g) < 0 && d.push(a[f]), e[f] = g, f++;
      }
      return c && (d = b ? d.sort(function(a, c) {
        return a[b] > c[b];
      }) : d.sort()), d;
    }
    function B(a, b) {
      for (var c,
          f,
          g = b[0].toUpperCase() + b.slice(1),
          h = 0; h < e.length; ) {
        if (c = e[h], f = c ? c + g : b, f in a)
          return f;
        h++;
      }
      return d;
    }
    function D() {
      return C++;
    }
    function E(a) {
      var b = a.ownerDocument;
      return b.defaultView || b.parentWindow;
    }
    function ab(a, b) {
      var c = this;
      this.manager = a, this.callback = b, this.element = a.element, this.target = a.options.inputTarget, this.domHandler = function(b) {
        r(a.options.enable, [a]) && c.handler(b);
      }, this.init();
    }
    function bb(a) {
      var b,
          c = a.options.inputClass;
      return b = c ? c : H ? wb : I ? Eb : G ? Gb : rb, new b(a, cb);
    }
    function cb(a, b, c) {
      var d = c.pointers.length,
          e = c.changedPointers.length,
          f = b & O && 0 === d - e,
          g = b & (Q | R) && 0 === d - e;
      c.isFirst = !!f, c.isFinal = !!g, f && (a.session = {}), c.eventType = b, db(a, c), a.emit("hammer.input", c), a.recognize(c), a.session.prevInput = c;
    }
    function db(a, b) {
      var c = a.session,
          d = b.pointers,
          e = d.length;
      c.firstInput || (c.firstInput = gb(b)), e > 1 && !c.firstMultiple ? c.firstMultiple = gb(b) : 1 === e && (c.firstMultiple = !1);
      var f = c.firstInput,
          g = c.firstMultiple,
          h = g ? g.center : f.center,
          i = b.center = hb(d);
      b.timeStamp = j(), b.deltaTime = b.timeStamp - f.timeStamp, b.angle = lb(h, i), b.distance = kb(h, i), eb(c, b), b.offsetDirection = jb(b.deltaX, b.deltaY), b.scale = g ? nb(g.pointers, d) : 1, b.rotation = g ? mb(g.pointers, d) : 0, fb(c, b);
      var k = a.element;
      v(b.srcEvent.target, k) && (k = b.srcEvent.target), b.target = k;
    }
    function eb(a, b) {
      var c = b.center,
          d = a.offsetDelta || {},
          e = a.prevDelta || {},
          f = a.prevInput || {};
      (b.eventType === O || f.eventType === Q) && (e = a.prevDelta = {
        x: f.deltaX || 0,
        y: f.deltaY || 0
      }, d = a.offsetDelta = {
        x: c.x,
        y: c.y
      }), b.deltaX = e.x + (c.x - d.x), b.deltaY = e.y + (c.y - d.y);
    }
    function fb(a, b) {
      var f,
          g,
          h,
          j,
          c = a.lastInterval || b,
          e = b.timeStamp - c.timeStamp;
      if (b.eventType != R && (e > N || c.velocity === d)) {
        var k = c.deltaX - b.deltaX,
            l = c.deltaY - b.deltaY,
            m = ib(e, k, l);
        g = m.x, h = m.y, f = i(m.x) > i(m.y) ? m.x : m.y, j = jb(k, l), a.lastInterval = b;
      } else
        f = c.velocity, g = c.velocityX, h = c.velocityY, j = c.direction;
      b.velocity = f, b.velocityX = g, b.velocityY = h, b.direction = j;
    }
    function gb(a) {
      for (var b = [],
          c = 0; c < a.pointers.length; )
        b[c] = {
          clientX: h(a.pointers[c].clientX),
          clientY: h(a.pointers[c].clientY)
        }, c++;
      return {
        timeStamp: j(),
        pointers: b,
        center: hb(b),
        deltaX: a.deltaX,
        deltaY: a.deltaY
      };
    }
    function hb(a) {
      var b = a.length;
      if (1 === b)
        return {
          x: h(a[0].clientX),
          y: h(a[0].clientY)
        };
      for (var c = 0,
          d = 0,
          e = 0; b > e; )
        c += a[e].clientX, d += a[e].clientY, e++;
      return {
        x: h(c / b),
        y: h(d / b)
      };
    }
    function ib(a, b, c) {
      return {
        x: b / a || 0,
        y: c / a || 0
      };
    }
    function jb(a, b) {
      return a === b ? S : i(a) >= i(b) ? a > 0 ? T : U : b > 0 ? V : W;
    }
    function kb(a, b, c) {
      c || (c = $);
      var d = b[c[0]] - a[c[0]],
          e = b[c[1]] - a[c[1]];
      return Math.sqrt(d * d + e * e);
    }
    function lb(a, b, c) {
      c || (c = $);
      var d = b[c[0]] - a[c[0]],
          e = b[c[1]] - a[c[1]];
      return 180 * Math.atan2(e, d) / Math.PI;
    }
    function mb(a, b) {
      return lb(b[1], b[0], _) - lb(a[1], a[0], _);
    }
    function nb(a, b) {
      return kb(b[0], b[1], _) / kb(a[0], a[1], _);
    }
    function rb() {
      this.evEl = pb, this.evWin = qb, this.allow = !0, this.pressed = !1, ab.apply(this, arguments);
    }
    function wb() {
      this.evEl = ub, this.evWin = vb, ab.apply(this, arguments), this.store = this.manager.session.pointerEvents = [];
    }
    function Ab() {
      this.evTarget = yb, this.evWin = zb, this.started = !1, ab.apply(this, arguments);
    }
    function Bb(a, b) {
      var c = z(a.touches),
          d = z(a.changedTouches);
      return b & (Q | R) && (c = A(c.concat(d), "identifier", !0)), [c, d];
    }
    function Eb() {
      this.evTarget = Db, this.targetIds = {}, ab.apply(this, arguments);
    }
    function Fb(a, b) {
      var c = z(a.touches),
          d = this.targetIds;
      if (b & (O | P) && 1 === c.length)
        return d[c[0].identifier] = !0, [c, c];
      var e,
          f,
          g = z(a.changedTouches),
          h = [],
          i = this.target;
      if (f = c.filter(function(a) {
        return v(a.target, i);
      }), b === O)
        for (e = 0; e < f.length; )
          d[f[e].identifier] = !0, e++;
      for (e = 0; e < g.length; )
        d[g[e].identifier] && h.push(g[e]), b & (Q | R) && delete d[g[e].identifier], e++;
      return h.length ? [A(f.concat(h), "identifier", !0), h] : void 0;
    }
    function Gb() {
      ab.apply(this, arguments);
      var a = q(this.handler, this);
      this.touch = new Eb(this.manager, a), this.mouse = new rb(this.manager, a);
    }
    function Pb(a, b) {
      this.manager = a, this.set(b);
    }
    function Qb(a) {
      if (w(a, Mb))
        return Mb;
      var b = w(a, Nb),
          c = w(a, Ob);
      return b && c ? Nb + " " + Ob : b || c ? b ? Nb : Ob : w(a, Lb) ? Lb : Kb;
    }
    function Yb(a) {
      this.id = D(), this.manager = null, this.options = o(a || {}, this.defaults), this.options.enable = s(this.options.enable, !0), this.state = Rb, this.simultaneous = {}, this.requireFail = [];
    }
    function Zb(a) {
      return a & Wb ? "cancel" : a & Ub ? "end" : a & Tb ? "move" : a & Sb ? "start" : "";
    }
    function $b(a) {
      return a == W ? "down" : a == V ? "up" : a == T ? "left" : a == U ? "right" : "";
    }
    function _b(a, b) {
      var c = b.manager;
      return c ? c.get(a) : a;
    }
    function ac() {
      Yb.apply(this, arguments);
    }
    function bc() {
      ac.apply(this, arguments), this.pX = null, this.pY = null;
    }
    function cc() {
      ac.apply(this, arguments);
    }
    function dc() {
      Yb.apply(this, arguments), this._timer = null, this._input = null;
    }
    function ec() {
      ac.apply(this, arguments);
    }
    function fc() {
      ac.apply(this, arguments);
    }
    function gc() {
      Yb.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0;
    }
    function hc(a, b) {
      return b = b || {}, b.recognizers = s(b.recognizers, hc.defaults.preset), new kc(a, b);
    }
    function kc(a, b) {
      b = b || {}, this.options = o(b, hc.defaults), this.options.inputTarget = this.options.inputTarget || a, this.handlers = {}, this.session = {}, this.recognizers = [], this.element = a, this.input = bb(this), this.touchAction = new Pb(this, this.options.touchAction), lc(this, !0), m(b.recognizers, function(a) {
        var b = this.add(new a[0](a[1]));
        a[2] && b.recognizeWith(a[2]), a[3] && b.requireFailure(a[3]);
      }, this);
    }
    function lc(a, b) {
      var c = a.element;
      m(a.options.cssProps, function(a, d) {
        c.style[B(c.style, d)] = b ? a : "";
      });
    }
    function mc(a, c) {
      var d = b.createEvent("Event");
      d.initEvent(a, !0, !0), d.gesture = c, c.target.dispatchEvent(d);
    }
    var e = ["", "webkit", "moz", "MS", "ms", "o"],
        f = b.createElement("div"),
        g = "function",
        h = Math.round,
        i = Math.abs,
        j = Date.now,
        C = 1,
        F = /mobile|tablet|ip(ad|hone|od)|android/i,
        G = "ontouchstart" in a,
        H = B(a, "PointerEvent") !== d,
        I = G && F.test(navigator.userAgent),
        J = "touch",
        K = "pen",
        L = "mouse",
        M = "kinect",
        N = 25,
        O = 1,
        P = 2,
        Q = 4,
        R = 8,
        S = 1,
        T = 2,
        U = 4,
        V = 8,
        W = 16,
        X = T | U,
        Y = V | W,
        Z = X | Y,
        $ = ["x", "y"],
        _ = ["clientX", "clientY"];
    ab.prototype = {
      handler: function() {},
      init: function() {
        this.evEl && t(this.element, this.evEl, this.domHandler), this.evTarget && t(this.target, this.evTarget, this.domHandler), this.evWin && t(E(this.element), this.evWin, this.domHandler);
      },
      destroy: function() {
        this.evEl && u(this.element, this.evEl, this.domHandler), this.evTarget && u(this.target, this.evTarget, this.domHandler), this.evWin && u(E(this.element), this.evWin, this.domHandler);
      }
    };
    var ob = {
      mousedown: O,
      mousemove: P,
      mouseup: Q
    },
        pb = "mousedown",
        qb = "mousemove mouseup";
    p(rb, ab, {handler: function(a) {
        var b = ob[a.type];
        b & O && 0 === a.button && (this.pressed = !0), b & P && 1 !== a.which && (b = Q), this.pressed && this.allow && (b & Q && (this.pressed = !1), this.callback(this.manager, b, {
          pointers: [a],
          changedPointers: [a],
          pointerType: L,
          srcEvent: a
        }));
      }});
    var sb = {
      pointerdown: O,
      pointermove: P,
      pointerup: Q,
      pointercancel: R,
      pointerout: R
    },
        tb = {
          2: J,
          3: K,
          4: L,
          5: M
        },
        ub = "pointerdown",
        vb = "pointermove pointerup pointercancel";
    a.MSPointerEvent && (ub = "MSPointerDown", vb = "MSPointerMove MSPointerUp MSPointerCancel"), p(wb, ab, {handler: function(a) {
        var b = this.store,
            c = !1,
            d = a.type.toLowerCase().replace("ms", ""),
            e = sb[d],
            f = tb[a.pointerType] || a.pointerType,
            g = f == J,
            h = y(b, a.pointerId, "pointerId");
        e & O && (0 === a.button || g) ? 0 > h && (b.push(a), h = b.length - 1) : e & (Q | R) && (c = !0), 0 > h || (b[h] = a, this.callback(this.manager, e, {
          pointers: b,
          changedPointers: [a],
          pointerType: f,
          srcEvent: a
        }), c && b.splice(h, 1));
      }});
    var xb = {
      touchstart: O,
      touchmove: P,
      touchend: Q,
      touchcancel: R
    },
        yb = "touchstart",
        zb = "touchstart touchmove touchend touchcancel";
    p(Ab, ab, {handler: function(a) {
        var b = xb[a.type];
        if (b === O && (this.started = !0), this.started) {
          var c = Bb.call(this, a, b);
          b & (Q | R) && 0 === c[0].length - c[1].length && (this.started = !1), this.callback(this.manager, b, {
            pointers: c[0],
            changedPointers: c[1],
            pointerType: J,
            srcEvent: a
          });
        }
      }});
    var Cb = {
      touchstart: O,
      touchmove: P,
      touchend: Q,
      touchcancel: R
    },
        Db = "touchstart touchmove touchend touchcancel";
    p(Eb, ab, {handler: function(a) {
        var b = Cb[a.type],
            c = Fb.call(this, a, b);
        c && this.callback(this.manager, b, {
          pointers: c[0],
          changedPointers: c[1],
          pointerType: J,
          srcEvent: a
        });
      }}), p(Gb, ab, {
      handler: function(a, b, c) {
        var d = c.pointerType == J,
            e = c.pointerType == L;
        if (d)
          this.mouse.allow = !1;
        else if (e && !this.mouse.allow)
          return;
        b & (Q | R) && (this.mouse.allow = !0), this.callback(a, b, c);
      },
      destroy: function() {
        this.touch.destroy(), this.mouse.destroy();
      }
    });
    var Hb = B(f.style, "touchAction"),
        Ib = Hb !== d,
        Jb = "compute",
        Kb = "auto",
        Lb = "manipulation",
        Mb = "none",
        Nb = "pan-x",
        Ob = "pan-y";
    Pb.prototype = {
      set: function(a) {
        a == Jb && (a = this.compute()), Ib && (this.manager.element.style[Hb] = a), this.actions = a.toLowerCase().trim();
      },
      update: function() {
        this.set(this.manager.options.touchAction);
      },
      compute: function() {
        var a = [];
        return m(this.manager.recognizers, function(b) {
          r(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()));
        }), Qb(a.join(" "));
      },
      preventDefaults: function(a) {
        if (!Ib) {
          var b = a.srcEvent,
              c = a.offsetDirection;
          if (this.manager.session.prevented)
            return b.preventDefault(), void 0;
          var d = this.actions,
              e = w(d, Mb),
              f = w(d, Ob),
              g = w(d, Nb);
          return e || f && c & X || g && c & Y ? this.preventSrc(b) : void 0;
        }
      },
      preventSrc: function(a) {
        this.manager.session.prevented = !0, a.preventDefault();
      }
    };
    var Rb = 1,
        Sb = 2,
        Tb = 4,
        Ub = 8,
        Vb = Ub,
        Wb = 16,
        Xb = 32;
    Yb.prototype = {
      defaults: {},
      set: function(a) {
        return n(this.options, a), this.manager && this.manager.touchAction.update(), this;
      },
      recognizeWith: function(a) {
        if (l(a, "recognizeWith", this))
          return this;
        var b = this.simultaneous;
        return a = _b(a, this), b[a.id] || (b[a.id] = a, a.recognizeWith(this)), this;
      },
      dropRecognizeWith: function(a) {
        return l(a, "dropRecognizeWith", this) ? this : (a = _b(a, this), delete this.simultaneous[a.id], this);
      },
      requireFailure: function(a) {
        if (l(a, "requireFailure", this))
          return this;
        var b = this.requireFail;
        return a = _b(a, this), -1 === y(b, a) && (b.push(a), a.requireFailure(this)), this;
      },
      dropRequireFailure: function(a) {
        if (l(a, "dropRequireFailure", this))
          return this;
        a = _b(a, this);
        var b = y(this.requireFail, a);
        return b > -1 && this.requireFail.splice(b, 1), this;
      },
      hasRequireFailures: function() {
        return this.requireFail.length > 0;
      },
      canRecognizeWith: function(a) {
        return !!this.simultaneous[a.id];
      },
      emit: function(a) {
        function d(d) {
          b.manager.emit(b.options.event + (d ? Zb(c) : ""), a);
        }
        var b = this,
            c = this.state;
        Ub > c && d(!0), d(), c >= Ub && d(!0);
      },
      tryEmit: function(a) {
        return this.canEmit() ? this.emit(a) : (this.state = Xb, void 0);
      },
      canEmit: function() {
        for (var a = 0; a < this.requireFail.length; ) {
          if (!(this.requireFail[a].state & (Xb | Rb)))
            return !1;
          a++;
        }
        return !0;
      },
      recognize: function(a) {
        var b = n({}, a);
        return r(this.options.enable, [this, b]) ? (this.state & (Vb | Wb | Xb) && (this.state = Rb), this.state = this.process(b), this.state & (Sb | Tb | Ub | Wb) && this.tryEmit(b), void 0) : (this.reset(), this.state = Xb, void 0);
      },
      process: function() {},
      getTouchAction: function() {},
      reset: function() {}
    }, p(ac, Yb, {
      defaults: {pointers: 1},
      attrTest: function(a) {
        var b = this.options.pointers;
        return 0 === b || a.pointers.length === b;
      },
      process: function(a) {
        var b = this.state,
            c = a.eventType,
            d = b & (Sb | Tb),
            e = this.attrTest(a);
        return d && (c & R || !e) ? b | Wb : d || e ? c & Q ? b | Ub : b & Sb ? b | Tb : Sb : Xb;
      }
    }), p(bc, ac, {
      defaults: {
        event: "pan",
        threshold: 10,
        pointers: 1,
        direction: Z
      },
      getTouchAction: function() {
        var a = this.options.direction,
            b = [];
        return a & X && b.push(Ob), a & Y && b.push(Nb), b;
      },
      directionTest: function(a) {
        var b = this.options,
            c = !0,
            d = a.distance,
            e = a.direction,
            f = a.deltaX,
            g = a.deltaY;
        return e & b.direction || (b.direction & X ? (e = 0 === f ? S : 0 > f ? T : U, c = f != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === g ? S : 0 > g ? V : W, c = g != this.pY, d = Math.abs(a.deltaY))), a.direction = e, c && d > b.threshold && e & b.direction;
      },
      attrTest: function(a) {
        return ac.prototype.attrTest.call(this, a) && (this.state & Sb || !(this.state & Sb) && this.directionTest(a));
      },
      emit: function(a) {
        this.pX = a.deltaX, this.pY = a.deltaY;
        var b = $b(a.direction);
        b && this.manager.emit(this.options.event + b, a), this._super.emit.call(this, a);
      }
    }), p(cc, ac, {
      defaults: {
        event: "pinch",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [Mb];
      },
      attrTest: function(a) {
        return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & Sb);
      },
      emit: function(a) {
        if (this._super.emit.call(this, a), 1 !== a.scale) {
          var b = a.scale < 1 ? "in" : "out";
          this.manager.emit(this.options.event + b, a);
        }
      }
    }), p(dc, Yb, {
      defaults: {
        event: "press",
        pointers: 1,
        time: 500,
        threshold: 5
      },
      getTouchAction: function() {
        return [Kb];
      },
      process: function(a) {
        var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            e = a.deltaTime > b.time;
        if (this._input = a, !d || !c || a.eventType & (Q | R) && !e)
          this.reset();
        else if (a.eventType & O)
          this.reset(), this._timer = k(function() {
            this.state = Vb, this.tryEmit();
          }, b.time, this);
        else if (a.eventType & Q)
          return Vb;
        return Xb;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function(a) {
        this.state === Vb && (a && a.eventType & Q ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = j(), this.manager.emit(this.options.event, this._input)));
      }
    }), p(ec, ac, {
      defaults: {
        event: "rotate",
        threshold: 0,
        pointers: 2
      },
      getTouchAction: function() {
        return [Mb];
      },
      attrTest: function(a) {
        return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & Sb);
      }
    }), p(fc, ac, {
      defaults: {
        event: "swipe",
        threshold: 10,
        velocity: .65,
        direction: X | Y,
        pointers: 1
      },
      getTouchAction: function() {
        return bc.prototype.getTouchAction.call(this);
      },
      attrTest: function(a) {
        var c,
            b = this.options.direction;
        return b & (X | Y) ? c = a.velocity : b & X ? c = a.velocityX : b & Y && (c = a.velocityY), this._super.attrTest.call(this, a) && b & a.direction && a.distance > this.options.threshold && i(c) > this.options.velocity && a.eventType & Q;
      },
      emit: function(a) {
        var b = $b(a.direction);
        b && this.manager.emit(this.options.event + b, a), this.manager.emit(this.options.event, a);
      }
    }), p(gc, Yb, {
      defaults: {
        event: "tap",
        pointers: 1,
        taps: 1,
        interval: 300,
        time: 250,
        threshold: 2,
        posThreshold: 10
      },
      getTouchAction: function() {
        return [Lb];
      },
      process: function(a) {
        var b = this.options,
            c = a.pointers.length === b.pointers,
            d = a.distance < b.threshold,
            e = a.deltaTime < b.time;
        if (this.reset(), a.eventType & O && 0 === this.count)
          return this.failTimeout();
        if (d && e && c) {
          if (a.eventType != Q)
            return this.failTimeout();
          var f = this.pTime ? a.timeStamp - this.pTime < b.interval : !0,
              g = !this.pCenter || kb(this.pCenter, a.center) < b.posThreshold;
          this.pTime = a.timeStamp, this.pCenter = a.center, g && f ? this.count += 1 : this.count = 1, this._input = a;
          var h = this.count % b.taps;
          if (0 === h)
            return this.hasRequireFailures() ? (this._timer = k(function() {
              this.state = Vb, this.tryEmit();
            }, b.interval, this), Sb) : Vb;
        }
        return Xb;
      },
      failTimeout: function() {
        return this._timer = k(function() {
          this.state = Xb;
        }, this.options.interval, this), Xb;
      },
      reset: function() {
        clearTimeout(this._timer);
      },
      emit: function() {
        this.state == Vb && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input));
      }
    }), hc.VERSION = "2.0.4", hc.defaults = {
      domEvents: !1,
      touchAction: Jb,
      enable: !0,
      inputTarget: null,
      inputClass: null,
      preset: [[ec, {enable: !1}], [cc, {enable: !1}, ["rotate"]], [fc, {direction: X}], [bc, {direction: X}, ["swipe"]], [gc], [gc, {
        event: "doubletap",
        taps: 2
      }, ["tap"]], [dc]],
      cssProps: {
        userSelect: "default",
        touchSelect: "none",
        touchCallout: "none",
        contentZooming: "none",
        userDrag: "none",
        tapHighlightColor: "rgba(0,0,0,0)"
      }
    };
    var ic = 1,
        jc = 2;
    kc.prototype = {
      set: function(a) {
        return n(this.options, a), a.touchAction && this.touchAction.update(), a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init()), this;
      },
      stop: function(a) {
        this.session.stopped = a ? jc : ic;
      },
      recognize: function(a) {
        var b = this.session;
        if (!b.stopped) {
          this.touchAction.preventDefaults(a);
          var c,
              d = this.recognizers,
              e = b.curRecognizer;
          (!e || e && e.state & Vb) && (e = b.curRecognizer = null);
          for (var f = 0; f < d.length; )
            c = d[f], b.stopped === jc || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & (Sb | Tb | Ub) && (e = b.curRecognizer = c), f++;
        }
      },
      get: function(a) {
        if (a instanceof Yb)
          return a;
        for (var b = this.recognizers,
            c = 0; c < b.length; c++)
          if (b[c].options.event == a)
            return b[c];
        return null;
      },
      add: function(a) {
        if (l(a, "add", this))
          return this;
        var b = this.get(a.options.event);
        return b && this.remove(b), this.recognizers.push(a), a.manager = this, this.touchAction.update(), a;
      },
      remove: function(a) {
        if (l(a, "remove", this))
          return this;
        var b = this.recognizers;
        return a = this.get(a), b.splice(y(b, a), 1), this.touchAction.update(), this;
      },
      on: function(a, b) {
        var c = this.handlers;
        return m(x(a), function(a) {
          c[a] = c[a] || [], c[a].push(b);
        }), this;
      },
      off: function(a, b) {
        var c = this.handlers;
        return m(x(a), function(a) {
          b ? c[a].splice(y(c[a], b), 1) : delete c[a];
        }), this;
      },
      emit: function(a, b) {
        this.options.domEvents && mc(a, b);
        var c = this.handlers[a] && this.handlers[a].slice();
        if (c && c.length) {
          b.type = a, b.preventDefault = function() {
            b.srcEvent.preventDefault();
          };
          for (var d = 0; d < c.length; )
            c[d](b), d++;
        }
      },
      destroy: function() {
        this.element && lc(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null;
      }
    }, n(hc, {
      INPUT_START: O,
      INPUT_MOVE: P,
      INPUT_END: Q,
      INPUT_CANCEL: R,
      STATE_POSSIBLE: Rb,
      STATE_BEGAN: Sb,
      STATE_CHANGED: Tb,
      STATE_ENDED: Ub,
      STATE_RECOGNIZED: Vb,
      STATE_CANCELLED: Wb,
      STATE_FAILED: Xb,
      DIRECTION_NONE: S,
      DIRECTION_LEFT: T,
      DIRECTION_RIGHT: U,
      DIRECTION_UP: V,
      DIRECTION_DOWN: W,
      DIRECTION_HORIZONTAL: X,
      DIRECTION_VERTICAL: Y,
      DIRECTION_ALL: Z,
      Manager: kc,
      Input: ab,
      TouchAction: Pb,
      TouchInput: Eb,
      MouseInput: rb,
      PointerEventInput: wb,
      TouchMouseInput: Gb,
      SingleTouchInput: Ab,
      Recognizer: Yb,
      AttrRecognizer: ac,
      Tap: gc,
      Pan: bc,
      Swipe: fc,
      Pinch: cc,
      Rotate: ec,
      Press: dc,
      on: t,
      off: u,
      each: m,
      merge: o,
      extend: n,
      inherit: p,
      bindFn: q,
      prefixed: B
    }), typeof define == g && define.amd ? define(function() {
      return hc;
    }) : "undefined" != typeof module && module.exports ? module.exports = hc : a[c] = hc;
  }(window, document, "Hammer");
  ;
  (function(factory) {
    if (typeof define === 'function' && define.amd) {
      define(['jquery', 'hammerjs'], factory);
    } else if (typeof exports === 'object') {
      factory(require('jquery'), require('hammerjs'));
    } else {
      factory(jQuery, Hammer);
    }
  }(function($, Hammer) {
    function hammerify(el, options) {
      var $el = $(el);
      if (!$el.data("hammer")) {
        $el.data("hammer", new Hammer($el[0], options));
      }
    }
    $.fn.hammer = function(options) {
      return this.each(function() {
        hammerify(this, options);
      });
    };
    Hammer.Manager.prototype.emit = (function(originalEmit) {
      return function(type, data) {
        originalEmit.call(this, type, data);
        $(this.element).trigger({
          type: type,
          gesture: data
        });
      };
    })(Hammer.Manager.prototype.emit);
  }));
  ;
  (function(window) {
    if (window.Package) {
      Materialize = {};
    } else {
      window.Materialize = {};
    }
  })(window);
  (function(window) {
    var lastTime = 0,
        vendors = ['webkit', 'moz'],
        requestAnimationFrame = window.requestAnimationFrame,
        cancelAnimationFrame = window.cancelAnimationFrame,
        i = vendors.length;
    while (--i >= 0 && !requestAnimationFrame) {
      requestAnimationFrame = window[vendors[i] + 'RequestAnimationFrame'];
      cancelAnimationFrame = window[vendors[i] + 'CancelRequestAnimationFrame'];
    }
    if (!requestAnimationFrame || !cancelAnimationFrame) {
      requestAnimationFrame = function(callback) {
        var now = +Date.now(),
            nextTime = Math.max(lastTime + 16, now);
        return setTimeout(function() {
          callback(lastTime = nextTime);
        }, nextTime - now);
      };
      cancelAnimationFrame = clearTimeout;
    }
    window.requestAnimationFrame = requestAnimationFrame;
    window.cancelAnimationFrame = cancelAnimationFrame;
  }(window));
  Materialize.guid = (function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return function() {
      return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
    };
  })();
  Materialize.escapeHash = function(hash) {
    return hash.replace(/(:|\.|\[|\]|,|=)/g, "\\$1");
  };
  Materialize.elementOrParentIsFixed = function(element) {
    var $element = $(element);
    var $checkElements = $element.add($element.parents());
    var isFixed = false;
    $checkElements.each(function() {
      if ($(this).css("position") === "fixed") {
        isFixed = true;
        return false;
      }
    });
    return isFixed;
  };
  var getTime = (Date.now || function() {
    return new Date().getTime();
  });
  Materialize.throttle = function(func, wait, options) {
    var context,
        args,
        result;
    var timeout = null;
    var previous = 0;
    options || (options = {});
    var later = function() {
      previous = options.leading === false ? 0 : getTime();
      timeout = null;
      result = func.apply(context, args);
      context = args = null;
    };
    return function() {
      var now = getTime();
      if (!previous && options.leading === false)
        previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0) {
        clearTimeout(timeout);
        timeout = null;
        previous = now;
        result = func.apply(context, args);
        context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };
  var Vel;
  if (jQuery) {
    Vel = jQuery.Velocity;
  } else if ($) {
    Vel = $.Velocity;
  } else {
    Vel = Velocity;
  }
  ;
  (function($) {
    $.fn.collapsible = function(options) {
      var defaults = {
        accordion: undefined,
        onOpen: undefined,
        onClose: undefined
      };
      options = $.extend(defaults, options);
      return this.each(function() {
        var $this = $(this);
        var $panel_headers = $(this).find('> li > .collapsible-header');
        var collapsible_type = $this.data("collapsible");
        $this.off('click.collapse', '> li > .collapsible-header');
        $panel_headers.off('click.collapse');
        function accordionOpen(object) {
          $panel_headers = $this.find('> li > .collapsible-header');
          if (object.hasClass('active')) {
            object.parent().addClass('active');
          } else {
            object.parent().removeClass('active');
          }
          if (object.parent().hasClass('active')) {
            object.siblings('.collapsible-body').stop(true, false).slideDown({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete: function() {
                $(this).css('height', '');
              }
            });
          } else {
            object.siblings('.collapsible-body').stop(true, false).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete: function() {
                $(this).css('height', '');
              }
            });
          }
          $panel_headers.not(object).removeClass('active').parent().removeClass('active');
          $panel_headers.not(object).parent().children('.collapsible-body').stop(true, false).each(function() {
            if ($(this).is(':visible')) {
              $(this).slideUp({
                duration: 350,
                easing: "easeOutQuart",
                queue: false,
                complete: function() {
                  $(this).css('height', '');
                  execCallbacks($(this).siblings('.collapsible-header'));
                }
              });
            }
          });
        }
        function expandableOpen(object) {
          if (object.hasClass('active')) {
            object.parent().addClass('active');
          } else {
            object.parent().removeClass('active');
          }
          if (object.parent().hasClass('active')) {
            object.siblings('.collapsible-body').stop(true, false).slideDown({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete: function() {
                $(this).css('height', '');
              }
            });
          } else {
            object.siblings('.collapsible-body').stop(true, false).slideUp({
              duration: 350,
              easing: "easeOutQuart",
              queue: false,
              complete: function() {
                $(this).css('height', '');
              }
            });
          }
        }
        function collapsibleOpen(object) {
          if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
            accordionOpen(object);
          } else {
            expandableOpen(object);
          }
          execCallbacks(object);
        }
        function execCallbacks(object) {
          if (object.hasClass('active')) {
            if (typeof(options.onOpen) === "function") {
              options.onOpen.call(this, object.parent());
            }
          } else {
            if (typeof(options.onClose) === "function") {
              options.onClose.call(this, object.parent());
            }
          }
        }
        function isChildrenOfPanelHeader(object) {
          var panelHeader = getPanelHeader(object);
          return panelHeader.length > 0;
        }
        function getPanelHeader(object) {
          return object.closest('li > .collapsible-header');
        }
        $this.on('click.collapse', '> li > .collapsible-header', function(e) {
          var element = $(e.target);
          if (isChildrenOfPanelHeader(element)) {
            element = getPanelHeader(element);
          }
          element.toggleClass('active');
          collapsibleOpen(element);
        });
        if (options.accordion || collapsible_type === "accordion" || collapsible_type === undefined) {
          collapsibleOpen($panel_headers.filter('.active').first());
        } else {
          $panel_headers.filter('.active').each(function() {
            collapsibleOpen($(this));
          });
        }
      });
    };
    $(document).ready(function() {
      $('.collapsible').collapsible();
    });
  }(jQuery));
  ;
  (function($) {
    $.fn.scrollTo = function(elem) {
      $(this).scrollTop($(this).scrollTop() - $(this).offset().top + $(elem).offset().top);
      return this;
    };
    $.fn.dropdown = function(options) {
      var defaults = {
        inDuration: 300,
        outDuration: 225,
        constrainWidth: true,
        hover: false,
        gutter: 0,
        belowOrigin: false,
        alignment: 'left',
        stopPropagation: false
      };
      if (options === "open") {
        this.each(function() {
          $(this).trigger('open');
        });
        return false;
      }
      if (options === "close") {
        this.each(function() {
          $(this).trigger('close');
        });
        return false;
      }
      this.each(function() {
        var origin = $(this);
        var curr_options = $.extend({}, defaults, options);
        var isFocused = false;
        var activates = $("#" + origin.attr('data-activates'));
        function updateOptions() {
          if (origin.data('induration') !== undefined)
            curr_options.inDuration = origin.data('induration');
          if (origin.data('outduration') !== undefined)
            curr_options.outDuration = origin.data('outduration');
          if (origin.data('constrainwidth') !== undefined)
            curr_options.constrainWidth = origin.data('constrainwidth');
          if (origin.data('hover') !== undefined)
            curr_options.hover = origin.data('hover');
          if (origin.data('gutter') !== undefined)
            curr_options.gutter = origin.data('gutter');
          if (origin.data('beloworigin') !== undefined)
            curr_options.belowOrigin = origin.data('beloworigin');
          if (origin.data('alignment') !== undefined)
            curr_options.alignment = origin.data('alignment');
          if (origin.data('stoppropagation') !== undefined)
            curr_options.stopPropagation = origin.data('stoppropagation');
        }
        updateOptions();
        origin.after(activates);
        function placeDropdown(eventType) {
          if (eventType === 'focus') {
            isFocused = true;
          }
          updateOptions();
          activates.addClass('active');
          origin.addClass('active');
          if (curr_options.constrainWidth === true) {
            activates.css('width', origin.outerWidth());
          } else {
            activates.css('white-space', 'nowrap');
          }
          var windowHeight = window.innerHeight;
          var originHeight = origin.innerHeight();
          var offsetLeft = origin.offset().left;
          var offsetTop = origin.offset().top - $(window).scrollTop();
          var currAlignment = curr_options.alignment;
          var gutterSpacing = 0;
          var leftPosition = 0;
          var verticalOffset = 0;
          if (curr_options.belowOrigin === true) {
            verticalOffset = originHeight;
          }
          var scrollYOffset = 0;
          var scrollXOffset = 0;
          var wrapper = origin.parent();
          if (!wrapper.is('body')) {
            if (wrapper[0].scrollHeight > wrapper[0].clientHeight) {
              scrollYOffset = wrapper[0].scrollTop;
            }
            if (wrapper[0].scrollWidth > wrapper[0].clientWidth) {
              scrollXOffset = wrapper[0].scrollLeft;
            }
          }
          if (offsetLeft + activates.innerWidth() > $(window).width()) {
            currAlignment = 'right';
          } else if (offsetLeft - activates.innerWidth() + origin.innerWidth() < 0) {
            currAlignment = 'left';
          }
          if (offsetTop + activates.innerHeight() > windowHeight) {
            if (offsetTop + originHeight - activates.innerHeight() < 0) {
              var adjustedHeight = windowHeight - offsetTop - verticalOffset;
              activates.css('max-height', adjustedHeight);
            } else {
              if (!verticalOffset) {
                verticalOffset += originHeight;
              }
              verticalOffset -= activates.innerHeight();
            }
          }
          if (currAlignment === 'left') {
            gutterSpacing = curr_options.gutter;
            leftPosition = origin.position().left + gutterSpacing;
          } else if (currAlignment === 'right') {
            var offsetRight = origin.position().left + origin.outerWidth() - activates.outerWidth();
            gutterSpacing = -curr_options.gutter;
            leftPosition = offsetRight + gutterSpacing;
          }
          activates.css({
            position: 'absolute',
            top: origin.position().top + verticalOffset + scrollYOffset,
            left: leftPosition + scrollXOffset
          });
          activates.stop(true, true).css('opacity', 0).slideDown({
            queue: false,
            duration: curr_options.inDuration,
            easing: 'easeOutCubic',
            complete: function() {
              $(this).css('height', '');
            }
          }).animate({opacity: 1}, {
            queue: false,
            duration: curr_options.inDuration,
            easing: 'easeOutSine'
          });
          $(document).bind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'), function(e) {
            if (!activates.is(e.target) && !origin.is(e.target) && (!origin.find(e.target).length)) {
              hideDropdown();
              $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
            }
          });
        }
        function hideDropdown() {
          isFocused = false;
          activates.fadeOut(curr_options.outDuration);
          activates.removeClass('active');
          origin.removeClass('active');
          $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
          setTimeout(function() {
            activates.css('max-height', '');
          }, curr_options.outDuration);
        }
        if (curr_options.hover) {
          var open = false;
          origin.unbind('click.' + origin.attr('id'));
          origin.on('mouseenter', function(e) {
            if (open === false) {
              placeDropdown();
              open = true;
            }
          });
          origin.on('mouseleave', function(e) {
            var toEl = e.toElement || e.relatedTarget;
            if (!$(toEl).closest('.dropdown-content').is(activates)) {
              activates.stop(true, true);
              hideDropdown();
              open = false;
            }
          });
          activates.on('mouseleave', function(e) {
            var toEl = e.toElement || e.relatedTarget;
            if (!$(toEl).closest('.dropdown-button').is(origin)) {
              activates.stop(true, true);
              hideDropdown();
              open = false;
            }
          });
        } else {
          origin.unbind('click.' + origin.attr('id'));
          origin.bind('click.' + origin.attr('id'), function(e) {
            if (!isFocused) {
              if (origin[0] == e.currentTarget && !origin.hasClass('active') && ($(e.target).closest('.dropdown-content').length === 0)) {
                e.preventDefault();
                if (curr_options.stopPropagation) {
                  e.stopPropagation();
                }
                placeDropdown('click');
              } else if (origin.hasClass('active')) {
                hideDropdown();
                $(document).unbind('click.' + activates.attr('id') + ' touchstart.' + activates.attr('id'));
              }
            }
          });
        }
        origin.on('open', function(e, eventType) {
          placeDropdown(eventType);
        });
        origin.on('close', hideDropdown);
      });
    };
    $(document).ready(function() {
      $('.dropdown-button').dropdown();
    });
  }(jQuery));
  ;
  (function($) {
    var _stack = 0,
        _lastID = 0,
        _generateID = function() {
          _lastID++;
          return 'materialize-modal-overlay-' + _lastID;
        };
    var methods = {
      init: function(options) {
        var defaults = {
          opacity: 0.5,
          inDuration: 350,
          outDuration: 250,
          ready: undefined,
          complete: undefined,
          dismissible: true,
          startingTop: '4%',
          endingTop: '10%'
        };
        options = $.extend(defaults, options);
        return this.each(function() {
          var $modal = $(this);
          var modal_id = $(this).attr("id") || '#' + $(this).data('target');
          var closeModal = function() {
            var overlayID = $modal.data('overlay-id');
            var $overlay = $('#' + overlayID);
            $modal.removeClass('open');
            $('body').css({
              overflow: '',
              width: ''
            });
            $modal.find('.modal-close').off('click.close');
            $(document).off('keyup.modal' + overlayID);
            $overlay.velocity({opacity: 0}, {
              duration: options.outDuration,
              queue: false,
              ease: "easeOutQuart"
            });
            var exitVelocityOptions = {
              duration: options.outDuration,
              queue: false,
              ease: "easeOutCubic",
              complete: function() {
                $(this).css({display: "none"});
                if (typeof(options.complete) === "function") {
                  options.complete.call(this, $modal);
                }
                $overlay.remove();
                _stack--;
              }
            };
            if ($modal.hasClass('bottom-sheet')) {
              $modal.velocity({
                bottom: "-100%",
                opacity: 0
              }, exitVelocityOptions);
            } else {
              $modal.velocity({
                top: options.startingTop,
                opacity: 0,
                scaleX: 0.7
              }, exitVelocityOptions);
            }
          };
          var openModal = function($trigger) {
            var $body = $('body');
            var oldWidth = $body.innerWidth();
            $body.css('overflow', 'hidden');
            $body.width(oldWidth);
            if ($modal.hasClass('open')) {
              return;
            }
            var overlayID = _generateID();
            var $overlay = $('<div class="modal-overlay"></div>');
            lStack = (++_stack);
            $overlay.attr('id', overlayID).css('z-index', 1000 + lStack * 2);
            $modal.data('overlay-id', overlayID).css('z-index', 1000 + lStack * 2 + 1);
            $modal.addClass('open');
            $("body").append($overlay);
            if (options.dismissible) {
              $overlay.click(function() {
                closeModal();
              });
              $(document).on('keyup.modal' + overlayID, function(e) {
                if (e.keyCode === 27) {
                  closeModal();
                }
              });
            }
            $modal.find(".modal-close").on('click.close', function(e) {
              closeModal();
            });
            $overlay.css({
              display: "block",
              opacity: 0
            });
            $modal.css({
              display: "block",
              opacity: 0
            });
            $overlay.velocity({opacity: options.opacity}, {
              duration: options.inDuration,
              queue: false,
              ease: "easeOutCubic"
            });
            $modal.data('associated-overlay', $overlay[0]);
            var enterVelocityOptions = {
              duration: options.inDuration,
              queue: false,
              ease: "easeOutCubic",
              complete: function() {
                if (typeof(options.ready) === "function") {
                  options.ready.call(this, $modal, $trigger);
                }
              }
            };
            if ($modal.hasClass('bottom-sheet')) {
              $modal.velocity({
                bottom: "0",
                opacity: 1
              }, enterVelocityOptions);
            } else {
              $.Velocity.hook($modal, "scaleX", 0.7);
              $modal.css({top: options.startingTop});
              $modal.velocity({
                top: options.endingTop,
                opacity: 1,
                scaleX: '1'
              }, enterVelocityOptions);
            }
          };
          $(document).off('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]');
          $(this).off('openModal');
          $(this).off('closeModal');
          $(document).on('click.modalTrigger', 'a[href="#' + modal_id + '"], [data-target="' + modal_id + '"]', function(e) {
            options.startingTop = ($(this).offset().top - $(window).scrollTop()) / 1.15;
            openModal($(this));
            e.preventDefault();
          });
          $(this).on('openModal', function() {
            var modal_id = $(this).attr("href") || '#' + $(this).data('target');
            openModal();
          });
          $(this).on('closeModal', function() {
            closeModal();
          });
        });
      },
      open: function() {
        $(this).trigger('openModal');
      },
      close: function() {
        $(this).trigger('closeModal');
      }
    };
    $.fn.modal = function(methodOrOptions) {
      if (methods[methodOrOptions]) {
        return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('Method ' + methodOrOptions + ' does not exist on jQuery.modal');
      }
    };
  })(jQuery);
  ;
  (function($) {
    $.fn.materialbox = function() {
      return this.each(function() {
        if ($(this).hasClass('initialized')) {
          return;
        }
        $(this).addClass('initialized');
        var overlayActive = false;
        var doneAnimating = true;
        var inDuration = 275;
        var outDuration = 200;
        var origin = $(this);
        var placeholder = $('<div></div>').addClass('material-placeholder');
        var originalWidth = 0;
        var originalHeight = 0;
        var ancestorsChanged;
        var ancestor;
        origin.wrap(placeholder);
        origin.on('click', function() {
          var placeholder = origin.parent('.material-placeholder');
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var originalWidth = origin.width();
          var originalHeight = origin.height();
          if (doneAnimating === false) {
            returnToOriginal();
            return false;
          } else if (overlayActive && doneAnimating === true) {
            returnToOriginal();
            return false;
          }
          doneAnimating = false;
          origin.addClass('active');
          overlayActive = true;
          placeholder.css({
            width: placeholder[0].getBoundingClientRect().width,
            height: placeholder[0].getBoundingClientRect().height,
            position: 'relative',
            top: 0,
            left: 0
          });
          ancestorsChanged = undefined;
          ancestor = placeholder[0].parentNode;
          var count = 0;
          while (ancestor !== null && !$(ancestor).is(document)) {
            var curr = $(ancestor);
            if (curr.css('overflow') !== 'visible') {
              curr.css('overflow', 'visible');
              if (ancestorsChanged === undefined) {
                ancestorsChanged = curr;
              } else {
                ancestorsChanged = ancestorsChanged.add(curr);
              }
            }
            ancestor = ancestor.parentNode;
          }
          origin.css({
            position: 'absolute',
            'z-index': 1000,
            'will-change': 'left, top, width, height'
          }).data('width', originalWidth).data('height', originalHeight);
          var overlay = $('<div id="materialbox-overlay"></div>').css({opacity: 0}).click(function() {
            if (doneAnimating === true)
              returnToOriginal();
          });
          origin.before(overlay);
          var overlayOffset = overlay[0].getBoundingClientRect();
          overlay.css({
            width: windowWidth,
            height: windowHeight,
            left: -1 * overlayOffset.left,
            top: -1 * overlayOffset.top
          });
          overlay.velocity({opacity: 1}, {
            duration: inDuration,
            queue: false,
            easing: 'easeOutQuad'
          });
          if (origin.data('caption') !== "") {
            var $photo_caption = $('<div class="materialbox-caption"></div>');
            $photo_caption.text(origin.data('caption'));
            $('body').append($photo_caption);
            $photo_caption.css({"display": "inline"});
            $photo_caption.velocity({opacity: 1}, {
              duration: inDuration,
              queue: false,
              easing: 'easeOutQuad'
            });
          }
          var ratio = 0;
          var widthPercent = originalWidth / windowWidth;
          var heightPercent = originalHeight / windowHeight;
          var newWidth = 0;
          var newHeight = 0;
          if (widthPercent > heightPercent) {
            ratio = originalHeight / originalWidth;
            newWidth = windowWidth * 0.9;
            newHeight = windowWidth * 0.9 * ratio;
          } else {
            ratio = originalWidth / originalHeight;
            newWidth = (windowHeight * 0.9) * ratio;
            newHeight = windowHeight * 0.9;
          }
          if (origin.hasClass('responsive-img')) {
            origin.velocity({
              'max-width': newWidth,
              'width': originalWidth
            }, {
              duration: 0,
              queue: false,
              complete: function() {
                origin.css({
                  left: 0,
                  top: 0
                }).velocity({
                  height: newHeight,
                  width: newWidth,
                  left: $(document).scrollLeft() + windowWidth / 2 - origin.parent('.material-placeholder').offset().left - newWidth / 2,
                  top: $(document).scrollTop() + windowHeight / 2 - origin.parent('.material-placeholder').offset().top - newHeight / 2
                }, {
                  duration: inDuration,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function() {
                    doneAnimating = true;
                  }
                });
              }
            });
          } else {
            origin.css('left', 0).css('top', 0).velocity({
              height: newHeight,
              width: newWidth,
              left: $(document).scrollLeft() + windowWidth / 2 - origin.parent('.material-placeholder').offset().left - newWidth / 2,
              top: $(document).scrollTop() + windowHeight / 2 - origin.parent('.material-placeholder').offset().top - newHeight / 2
            }, {
              duration: inDuration,
              queue: false,
              easing: 'easeOutQuad',
              complete: function() {
                doneAnimating = true;
              }
            });
          }
        });
        $(window).scroll(function() {
          if (overlayActive) {
            returnToOriginal();
          }
        });
        $(document).keyup(function(e) {
          if (e.keyCode === 27 && doneAnimating === true) {
            if (overlayActive) {
              returnToOriginal();
            }
          }
        });
        function returnToOriginal() {
          doneAnimating = false;
          var placeholder = origin.parent('.material-placeholder');
          var windowWidth = window.innerWidth;
          var windowHeight = window.innerHeight;
          var originalWidth = origin.data('width');
          var originalHeight = origin.data('height');
          origin.velocity("stop", true);
          $('#materialbox-overlay').velocity("stop", true);
          $('.materialbox-caption').velocity("stop", true);
          $('#materialbox-overlay').velocity({opacity: 0}, {
            duration: outDuration,
            queue: false,
            easing: 'easeOutQuad',
            complete: function() {
              overlayActive = false;
              $(this).remove();
            }
          });
          origin.velocity({
            width: originalWidth,
            height: originalHeight,
            left: 0,
            top: 0
          }, {
            duration: outDuration,
            queue: false,
            easing: 'easeOutQuad'
          });
          $('.materialbox-caption').velocity({opacity: 0}, {
            duration: outDuration,
            queue: false,
            easing: 'easeOutQuad',
            complete: function() {
              placeholder.css({
                height: '',
                width: '',
                position: '',
                top: '',
                left: ''
              });
              origin.css({
                height: '',
                top: '',
                left: '',
                width: '',
                'max-width': '',
                position: '',
                'z-index': '',
                'will-change': ''
              });
              origin.removeClass('active');
              doneAnimating = true;
              $(this).remove();
              if (ancestorsChanged) {
                ancestorsChanged.css('overflow', '');
              }
            }
          });
        }
      });
    };
    $(document).ready(function() {
      $('.materialboxed').materialbox();
    });
  }(jQuery));
  ;
  (function($) {
    $.fn.parallax = function() {
      var window_width = $(window).width();
      return this.each(function(i) {
        var $this = $(this);
        $this.addClass('parallax');
        function updateParallax(initial) {
          var container_height;
          if (window_width < 601) {
            container_height = ($this.height() > 0) ? $this.height() : $this.children("img").height();
          } else {
            container_height = ($this.height() > 0) ? $this.height() : 500;
          }
          var $img = $this.children("img").first();
          var img_height = $img.height();
          var parallax_dist = img_height - container_height;
          var bottom = $this.offset().top + container_height;
          var top = $this.offset().top;
          var scrollTop = $(window).scrollTop();
          var windowHeight = window.innerHeight;
          var windowBottom = scrollTop + windowHeight;
          var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
          var parallax = Math.round((parallax_dist * percentScrolled));
          if (initial) {
            $img.css('display', 'block');
          }
          if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
            $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
          }
        }
        $this.children("img").one("load", function() {
          updateParallax(true);
        }).each(function() {
          if (this.complete)
            $(this).trigger("load");
        });
        $(window).scroll(function() {
          window_width = $(window).width();
          updateParallax(false);
        });
        $(window).resize(function() {
          window_width = $(window).width();
          updateParallax(false);
        });
      });
    };
  }(jQuery));
  ;
  (function($) {
    var methods = {
      init: function(options) {
        var defaults = {
          onShow: null,
          swipeable: false,
          responsiveThreshold: Infinity
        };
        options = $.extend(defaults, options);
        return this.each(function() {
          var $this = $(this),
              window_width = $(window).width();
          var $active,
              $content,
              $links = $this.find('li.tab a'),
              $tabs_width = $this.width(),
              $tabs_content = $(),
              $tabs_wrapper,
              $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length,
              $indicator,
              index = prev_index = 0,
              clicked = false,
              clickedTimeout,
              transition = 300;
          var calcRightPos = function(el) {
            return $tabs_width - el.position().left - el.outerWidth() - $this.scrollLeft();
          };
          var calcLeftPos = function(el) {
            return el.position().left + $this.scrollLeft();
          };
          var animateIndicator = function(prev_index) {
            if ((index - prev_index) >= 0) {
              $indicator.velocity({"right": calcRightPos($active)}, {
                duration: transition,
                queue: false,
                easing: 'easeOutQuad'
              });
              $indicator.velocity({"left": calcLeftPos($active)}, {
                duration: transition,
                queue: false,
                easing: 'easeOutQuad',
                delay: 90
              });
            } else {
              $indicator.velocity({"left": calcLeftPos($active)}, {
                duration: transition,
                queue: false,
                easing: 'easeOutQuad'
              });
              $indicator.velocity({"right": calcRightPos($active)}, {
                duration: transition,
                queue: false,
                easing: 'easeOutQuad',
                delay: 90
              });
            }
          };
          if (options.swipeable) {
            if (window_width > options.responsiveThreshold) {
              options.swipeable = false;
            }
          }
          $active = $($links.filter('[href="' + location.hash + '"]'));
          if ($active.length === 0) {
            $active = $(this).find('li.tab a.active').first();
          }
          if ($active.length === 0) {
            $active = $(this).find('li.tab a').first();
          }
          $active.addClass('active');
          index = $links.index($active);
          if (index < 0) {
            index = 0;
          }
          if ($active[0] !== undefined) {
            $content = $($active[0].hash);
            $content.addClass('active');
          }
          if (!$this.find('.indicator').length) {
            $this.append('<div class="indicator"></div>');
          }
          $indicator = $this.find('.indicator');
          $this.append($indicator);
          if ($this.is(":visible")) {
            setTimeout(function() {
              $indicator.css({"right": calcRightPos($active)});
              $indicator.css({"left": calcLeftPos($active)});
            }, 0);
          }
          $(window).resize(function() {
            $tabs_width = $this.width();
            $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
            if (index < 0) {
              index = 0;
            }
            if ($tab_width !== 0 && $tabs_width !== 0) {
              $indicator.css({"right": calcRightPos($active)});
              $indicator.css({"left": calcLeftPos($active)});
            }
          });
          if (options.swipeable) {
            $links.each(function() {
              var $curr_content = $(Materialize.escapeHash(this.hash));
              $curr_content.addClass('carousel-item');
              $tabs_content = $tabs_content.add($curr_content);
            });
            $tabs_wrapper = $tabs_content.wrapAll('<div class="tabs-content carousel"></div>');
            $tabs_content.css('display', '');
            $('.tabs-content.carousel').carousel({
              fullWidth: true,
              noWrap: true,
              onCycleTo: function(item) {
                if (!clicked) {
                  var prev_index = index;
                  index = $tabs_wrapper.index(item);
                  $active = $links.eq(index);
                  animateIndicator(prev_index);
                }
              }
            });
          } else {
            $links.not($active).each(function() {
              $(Materialize.escapeHash(this.hash)).hide();
            });
          }
          $this.on('click', 'a', function(e) {
            if ($(this).parent().hasClass('disabled')) {
              e.preventDefault();
              return;
            }
            if (!!$(this).attr("target")) {
              return;
            }
            clicked = true;
            $tabs_width = $this.width();
            $tab_width = Math.max($tabs_width, $this[0].scrollWidth) / $links.length;
            $active.removeClass('active');
            var $oldContent = $content;
            $active = $(this);
            $content = $(Materialize.escapeHash(this.hash));
            $links = $this.find('li.tab a');
            var activeRect = $active.position();
            $active.addClass('active');
            prev_index = index;
            index = $links.index($(this));
            if (index < 0) {
              index = 0;
            }
            if (options.swipeable) {
              if ($tabs_content.length) {
                $tabs_content.carousel('set', index);
              }
            } else {
              if ($content !== undefined) {
                $content.show();
                $content.addClass('active');
                if (typeof(options.onShow) === "function") {
                  options.onShow.call(this, $content);
                }
              }
              if ($oldContent !== undefined && !$oldContent.is($content)) {
                $oldContent.hide();
                $oldContent.removeClass('active');
              }
            }
            clickedTimeout = setTimeout(function() {
              clicked = false;
            }, transition);
            animateIndicator(prev_index);
            e.preventDefault();
          });
        });
      },
      select_tab: function(id) {
        this.find('a[href="#' + id + '"]').trigger('click');
      }
    };
    $.fn.tabs = function(methodOrOptions) {
      if (methods[methodOrOptions]) {
        return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tabs');
      }
    };
    $(document).ready(function() {
      $('ul.tabs').tabs();
    });
  }(jQuery));
  ;
  (function($) {
    $.fn.tooltip = function(options) {
      var timeout = null,
          margin = 5;
      var defaults = {
        delay: 350,
        tooltip: '',
        position: 'bottom',
        html: false
      };
      if (options === "remove") {
        this.each(function() {
          $('#' + $(this).attr('data-tooltip-id')).remove();
          $(this).off('mouseenter.tooltip mouseleave.tooltip');
        });
        return false;
      }
      options = $.extend(defaults, options);
      return this.each(function() {
        var tooltipId = Materialize.guid();
        var origin = $(this);
        if (origin.attr('data-tooltip-id')) {
          $('#' + origin.attr('data-tooltip-id')).remove();
        }
        origin.attr('data-tooltip-id', tooltipId);
        var allowHtml,
            tooltipDelay,
            tooltipPosition,
            tooltipText,
            tooltipEl,
            backdrop;
        var setAttributes = function() {
          allowHtml = origin.attr('data-html') ? origin.attr('data-html') === 'true' : options.html;
          tooltipDelay = origin.attr('data-delay');
          tooltipDelay = (tooltipDelay === undefined || tooltipDelay === '') ? options.delay : tooltipDelay;
          tooltipPosition = origin.attr('data-position');
          tooltipPosition = (tooltipPosition === undefined || tooltipPosition === '') ? options.position : tooltipPosition;
          tooltipText = origin.attr('data-tooltip');
          tooltipText = (tooltipText === undefined || tooltipText === '') ? options.tooltip : tooltipText;
        };
        setAttributes();
        var renderTooltipEl = function() {
          var tooltip = $('<div class="material-tooltip"></div>');
          if (allowHtml) {
            tooltipText = $('<span></span>').html(tooltipText);
          } else {
            tooltipText = $('<span></span>').text(tooltipText);
          }
          tooltip.append(tooltipText).appendTo($('body')).attr('id', tooltipId);
          backdrop = $('<div class="backdrop"></div>');
          backdrop.appendTo(tooltip);
          return tooltip;
        };
        tooltipEl = renderTooltipEl();
        origin.off('mouseenter.tooltip mouseleave.tooltip');
        var started = false,
            timeoutRef;
        origin.on({
          'mouseenter.tooltip': function(e) {
            var showTooltip = function() {
              setAttributes();
              started = true;
              tooltipEl.velocity('stop');
              backdrop.velocity('stop');
              tooltipEl.css({
                visibility: 'visible',
                left: '0px',
                top: '0px'
              });
              var originWidth = origin.outerWidth();
              var originHeight = origin.outerHeight();
              var tooltipHeight = tooltipEl.outerHeight();
              var tooltipWidth = tooltipEl.outerWidth();
              var tooltipVerticalMovement = '0px';
              var tooltipHorizontalMovement = '0px';
              var backdropOffsetWidth = backdrop[0].offsetWidth;
              var backdropOffsetHeight = backdrop[0].offsetHeight;
              var scaleXFactor = 8;
              var scaleYFactor = 8;
              var scaleFactor = 0;
              var targetTop,
                  targetLeft,
                  newCoordinates;
              if (tooltipPosition === "top") {
                targetTop = origin.offset().top - tooltipHeight - margin;
                targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                tooltipVerticalMovement = '-10px';
                backdrop.css({
                  bottom: 0,
                  left: 0,
                  borderRadius: '14px 14px 0 0',
                  transformOrigin: '50% 100%',
                  marginTop: tooltipHeight,
                  marginLeft: (tooltipWidth / 2) - (backdropOffsetWidth / 2)
                });
              } else if (tooltipPosition === "left") {
                targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
                targetLeft = origin.offset().left - tooltipWidth - margin;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                tooltipHorizontalMovement = '-10px';
                backdrop.css({
                  top: '-7px',
                  right: 0,
                  width: '14px',
                  height: '14px',
                  borderRadius: '14px 0 0 14px',
                  transformOrigin: '95% 50%',
                  marginTop: tooltipHeight / 2,
                  marginLeft: tooltipWidth
                });
              } else if (tooltipPosition === "right") {
                targetTop = origin.offset().top + originHeight / 2 - tooltipHeight / 2;
                targetLeft = origin.offset().left + originWidth + margin;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                tooltipHorizontalMovement = '+10px';
                backdrop.css({
                  top: '-7px',
                  left: 0,
                  width: '14px',
                  height: '14px',
                  borderRadius: '0 14px 14px 0',
                  transformOrigin: '5% 50%',
                  marginTop: tooltipHeight / 2,
                  marginLeft: '0px'
                });
              } else {
                targetTop = origin.offset().top + origin.outerHeight() + margin;
                targetLeft = origin.offset().left + originWidth / 2 - tooltipWidth / 2;
                newCoordinates = repositionWithinScreen(targetLeft, targetTop, tooltipWidth, tooltipHeight);
                tooltipVerticalMovement = '+10px';
                backdrop.css({
                  top: 0,
                  left: 0,
                  marginLeft: (tooltipWidth / 2) - (backdropOffsetWidth / 2)
                });
              }
              tooltipEl.css({
                top: newCoordinates.y,
                left: newCoordinates.x
              });
              scaleXFactor = Math.SQRT2 * tooltipWidth / parseInt(backdropOffsetWidth);
              scaleYFactor = Math.SQRT2 * tooltipHeight / parseInt(backdropOffsetHeight);
              scaleFactor = Math.max(scaleXFactor, scaleYFactor);
              tooltipEl.velocity({
                translateY: tooltipVerticalMovement,
                translateX: tooltipHorizontalMovement
              }, {
                duration: 350,
                queue: false
              }).velocity({opacity: 1}, {
                duration: 300,
                delay: 50,
                queue: false
              });
              backdrop.css({visibility: 'visible'}).velocity({opacity: 1}, {
                duration: 55,
                delay: 0,
                queue: false
              }).velocity({
                scaleX: scaleFactor,
                scaleY: scaleFactor
              }, {
                duration: 300,
                delay: 0,
                queue: false,
                easing: 'easeInOutQuad'
              });
            };
            timeoutRef = setTimeout(showTooltip, tooltipDelay);
          },
          'mouseleave.tooltip': function() {
            started = false;
            clearTimeout(timeoutRef);
            setTimeout(function() {
              if (started !== true) {
                tooltipEl.velocity({
                  opacity: 0,
                  translateY: 0,
                  translateX: 0
                }, {
                  duration: 225,
                  queue: false
                });
                backdrop.velocity({
                  opacity: 0,
                  scaleX: 1,
                  scaleY: 1
                }, {
                  duration: 225,
                  queue: false,
                  complete: function() {
                    backdrop.css({visibility: 'hidden'});
                    tooltipEl.css({visibility: 'hidden'});
                    started = false;
                  }
                });
              }
            }, 225);
          }
        });
      });
    };
    var repositionWithinScreen = function(x, y, width, height) {
      var newX = x;
      var newY = y;
      if (newX < 0) {
        newX = 4;
      } else if (newX + width > window.innerWidth) {
        newX -= newX + width - window.innerWidth;
      }
      if (newY < 0) {
        newY = 4;
      } else if (newY + height > window.innerHeight + $(window).scrollTop) {
        newY -= newY + height - window.innerHeight;
      }
      return {
        x: newX,
        y: newY
      };
    };
    $(document).ready(function() {
      $('.tooltipped').tooltip();
    });
  }(jQuery));
  ;
  ;
  (function(window) {
    'use strict';
    var Waves = Waves || {};
    var $$ = document.querySelectorAll.bind(document);
    function isWindow(obj) {
      return obj !== null && obj === obj.window;
    }
    function getWindow(elem) {
      return isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
    }
    function offset(elem) {
      var docElem,
          win,
          box = {
            top: 0,
            left: 0
          },
          doc = elem && elem.ownerDocument;
      docElem = doc.documentElement;
      if (typeof elem.getBoundingClientRect !== typeof undefined) {
        box = elem.getBoundingClientRect();
      }
      win = getWindow(doc);
      return {
        top: box.top + win.pageYOffset - docElem.clientTop,
        left: box.left + win.pageXOffset - docElem.clientLeft
      };
    }
    function convertStyle(obj) {
      var style = '';
      for (var a in obj) {
        if (obj.hasOwnProperty(a)) {
          style += (a + ':' + obj[a] + ';');
        }
      }
      return style;
    }
    var Effect = {
      duration: 750,
      show: function(e, element) {
        if (e.button === 2) {
          return false;
        }
        var el = element || this;
        var ripple = document.createElement('div');
        ripple.className = 'waves-ripple';
        el.appendChild(ripple);
        var pos = offset(el);
        var relativeY = (e.pageY - pos.top);
        var relativeX = (e.pageX - pos.left);
        var scale = 'scale(' + ((el.clientWidth / 100) * 10) + ')';
        if ('touches' in e) {
          relativeY = (e.touches[0].pageY - pos.top);
          relativeX = (e.touches[0].pageX - pos.left);
        }
        ripple.setAttribute('data-hold', Date.now());
        ripple.setAttribute('data-scale', scale);
        ripple.setAttribute('data-x', relativeX);
        ripple.setAttribute('data-y', relativeY);
        var rippleStyle = {
          'top': relativeY + 'px',
          'left': relativeX + 'px'
        };
        ripple.className = ripple.className + ' waves-notransition';
        ripple.setAttribute('style', convertStyle(rippleStyle));
        ripple.className = ripple.className.replace('waves-notransition', '');
        rippleStyle['-webkit-transform'] = scale;
        rippleStyle['-moz-transform'] = scale;
        rippleStyle['-ms-transform'] = scale;
        rippleStyle['-o-transform'] = scale;
        rippleStyle.transform = scale;
        rippleStyle.opacity = '1';
        rippleStyle['-webkit-transition-duration'] = Effect.duration + 'ms';
        rippleStyle['-moz-transition-duration'] = Effect.duration + 'ms';
        rippleStyle['-o-transition-duration'] = Effect.duration + 'ms';
        rippleStyle['transition-duration'] = Effect.duration + 'ms';
        rippleStyle['-webkit-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
        rippleStyle['-moz-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
        rippleStyle['-o-transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
        rippleStyle['transition-timing-function'] = 'cubic-bezier(0.250, 0.460, 0.450, 0.940)';
        ripple.setAttribute('style', convertStyle(rippleStyle));
      },
      hide: function(e) {
        TouchHandler.touchup(e);
        var el = this;
        var width = el.clientWidth * 1.4;
        var ripple = null;
        var ripples = el.getElementsByClassName('waves-ripple');
        if (ripples.length > 0) {
          ripple = ripples[ripples.length - 1];
        } else {
          return false;
        }
        var relativeX = ripple.getAttribute('data-x');
        var relativeY = ripple.getAttribute('data-y');
        var scale = ripple.getAttribute('data-scale');
        var diff = Date.now() - Number(ripple.getAttribute('data-hold'));
        var delay = 350 - diff;
        if (delay < 0) {
          delay = 0;
        }
        setTimeout(function() {
          var style = {
            'top': relativeY + 'px',
            'left': relativeX + 'px',
            'opacity': '0',
            '-webkit-transition-duration': Effect.duration + 'ms',
            '-moz-transition-duration': Effect.duration + 'ms',
            '-o-transition-duration': Effect.duration + 'ms',
            'transition-duration': Effect.duration + 'ms',
            '-webkit-transform': scale,
            '-moz-transform': scale,
            '-ms-transform': scale,
            '-o-transform': scale,
            'transform': scale
          };
          ripple.setAttribute('style', convertStyle(style));
          setTimeout(function() {
            try {
              el.removeChild(ripple);
            } catch (e) {
              return false;
            }
          }, Effect.duration);
        }, delay);
      },
      wrapInput: function(elements) {
        for (var a = 0; a < elements.length; a++) {
          var el = elements[a];
          if (el.tagName.toLowerCase() === 'input') {
            var parent = el.parentNode;
            if (parent.tagName.toLowerCase() === 'i' && parent.className.indexOf('waves-effect') !== -1) {
              continue;
            }
            var wrapper = document.createElement('i');
            wrapper.className = el.className + ' waves-input-wrapper';
            var elementStyle = el.getAttribute('style');
            if (!elementStyle) {
              elementStyle = '';
            }
            wrapper.setAttribute('style', elementStyle);
            el.className = 'waves-button-input';
            el.removeAttribute('style');
            parent.replaceChild(wrapper, el);
            wrapper.appendChild(el);
          }
        }
      }
    };
    var TouchHandler = {
      touches: 0,
      allowEvent: function(e) {
        var allow = true;
        if (e.type === 'touchstart') {
          TouchHandler.touches += 1;
        } else if (e.type === 'touchend' || e.type === 'touchcancel') {
          setTimeout(function() {
            if (TouchHandler.touches > 0) {
              TouchHandler.touches -= 1;
            }
          }, 500);
        } else if (e.type === 'mousedown' && TouchHandler.touches > 0) {
          allow = false;
        }
        return allow;
      },
      touchup: function(e) {
        TouchHandler.allowEvent(e);
      }
    };
    function getWavesEffectElement(e) {
      if (TouchHandler.allowEvent(e) === false) {
        return null;
      }
      var element = null;
      var target = e.target || e.srcElement;
      while (target.parentElement !== null) {
        if (!(target instanceof SVGElement) && target.className.indexOf('waves-effect') !== -1) {
          element = target;
          break;
        } else if (target.classList.contains('waves-effect')) {
          element = target;
          break;
        }
        target = target.parentElement;
      }
      return element;
    }
    function showEffect(e) {
      var element = getWavesEffectElement(e);
      if (element !== null) {
        Effect.show(e, element);
        if ('ontouchstart' in window) {
          element.addEventListener('touchend', Effect.hide, false);
          element.addEventListener('touchcancel', Effect.hide, false);
        }
        element.addEventListener('mouseup', Effect.hide, false);
        element.addEventListener('mouseleave', Effect.hide, false);
      }
    }
    Waves.displayEffect = function(options) {
      options = options || {};
      if ('duration' in options) {
        Effect.duration = options.duration;
      }
      Effect.wrapInput($$('.waves-effect'));
      if ('ontouchstart' in window) {
        document.body.addEventListener('touchstart', showEffect, false);
      }
      document.body.addEventListener('mousedown', showEffect, false);
    };
    Waves.attach = function(element) {
      if (element.tagName.toLowerCase() === 'input') {
        Effect.wrapInput([element]);
        element = element.parentElement;
      }
      if ('ontouchstart' in window) {
        element.addEventListener('touchstart', showEffect, false);
      }
      element.addEventListener('mousedown', showEffect, false);
    };
    window.Waves = Waves;
    document.addEventListener('DOMContentLoaded', function() {
      Waves.displayEffect();
    }, false);
  })(window);
  ;
  Materialize.toast = function(message, displayLength, className, completeCallback) {
    className = className || "";
    var container = document.getElementById('toast-container');
    if (container === null) {
      container = document.createElement('div');
      container.id = 'toast-container';
      document.body.appendChild(container);
    }
    var newToast = createToast(message);
    if (message) {
      container.appendChild(newToast);
    }
    newToast.style.opacity = 0;
    Vel(newToast, {
      translateY: '-35px',
      opacity: 1
    }, {
      duration: 300,
      easing: 'easeOutCubic',
      queue: false
    });
    var timeLeft = displayLength;
    var counterInterval;
    if (timeLeft != null) {
      counterInterval = setInterval(function() {
        if (newToast.parentNode === null)
          window.clearInterval(counterInterval);
        if (!newToast.classList.contains('panning')) {
          timeLeft -= 20;
        }
        if (timeLeft <= 0) {
          Vel(newToast, {
            "opacity": 0,
            marginTop: '-40px'
          }, {
            duration: 375,
            easing: 'easeOutExpo',
            queue: false,
            complete: function() {
              if (typeof(completeCallback) === "function")
                completeCallback();
              this[0].parentNode.removeChild(this[0]);
            }
          });
          window.clearInterval(counterInterval);
        }
      }, 20);
    }
    function createToast(html) {
      var toast = document.createElement('div');
      toast.classList.add('toast');
      if (className) {
        var classes = className.split(' ');
        for (var i = 0,
            count = classes.length; i < count; i++) {
          toast.classList.add(classes[i]);
        }
      }
      if (typeof HTMLElement === "object" ? html instanceof HTMLElement : html && typeof html === "object" && html !== null && html.nodeType === 1 && typeof html.nodeName === "string") {
        toast.appendChild(html);
      } else if (html instanceof jQuery) {
        toast.appendChild(html[0]);
      } else {
        toast.innerHTML = html;
      }
      var hammerHandler = new Hammer(toast, {prevent_default: false});
      hammerHandler.on('pan', function(e) {
        var deltaX = e.deltaX;
        var activationDistance = 80;
        if (!toast.classList.contains('panning')) {
          toast.classList.add('panning');
        }
        var opacityPercent = 1 - Math.abs(deltaX / activationDistance);
        if (opacityPercent < 0)
          opacityPercent = 0;
        Vel(toast, {
          left: deltaX,
          opacity: opacityPercent
        }, {
          duration: 50,
          queue: false,
          easing: 'easeOutQuad'
        });
      });
      hammerHandler.on('panend', function(e) {
        var deltaX = e.deltaX;
        var activationDistance = 80;
        if (Math.abs(deltaX) > activationDistance) {
          Vel(toast, {marginTop: '-40px'}, {
            duration: 375,
            easing: 'easeOutExpo',
            queue: false,
            complete: function() {
              if (typeof(completeCallback) === "function") {
                completeCallback();
              }
              toast.parentNode.removeChild(toast);
            }
          });
        } else {
          toast.classList.remove('panning');
          Vel(toast, {
            left: 0,
            opacity: 1
          }, {
            duration: 300,
            easing: 'easeOutExpo',
            queue: false
          });
        }
      });
      return toast;
    }
  };
  ;
  (function($) {
    var methods = {
      init: function(options) {
        var defaults = {
          menuWidth: 300,
          edge: 'left',
          closeOnClick: false,
          draggable: true
        };
        options = $.extend(defaults, options);
        $(this).each(function() {
          var $this = $(this);
          var menuId = $this.attr('data-activates');
          var menu = $("#" + menuId);
          if (options.menuWidth != 300) {
            menu.css('width', options.menuWidth);
          }
          var $dragTarget = $('.drag-target[data-sidenav="' + menuId + '"]');
          if (options.draggable) {
            if ($dragTarget.length) {
              $dragTarget.remove();
            }
            $dragTarget = $('<div class="drag-target"></div>').attr('data-sidenav', menuId);
            $('body').append($dragTarget);
          } else {
            $dragTarget = $();
          }
          if (options.edge == 'left') {
            menu.css('transform', 'translateX(-100%)');
            $dragTarget.css({'left': 0});
          } else {
            menu.addClass('right-aligned').css('transform', 'translateX(100%)');
            $dragTarget.css({'right': 0});
          }
          if (menu.hasClass('fixed')) {
            if (window.innerWidth > 992) {
              menu.css('transform', 'translateX(0)');
            }
          }
          if (menu.hasClass('fixed')) {
            $(window).resize(function() {
              if (window.innerWidth > 992) {
                if ($('#sidenav-overlay').length !== 0 && menuOut) {
                  removeMenu(true);
                } else {
                  menu.css('transform', 'translateX(0%)');
                }
              } else if (menuOut === false) {
                if (options.edge === 'left') {
                  menu.css('transform', 'translateX(-100%)');
                } else {
                  menu.css('transform', 'translateX(100%)');
                }
              }
            });
          }
          if (options.closeOnClick === true) {
            menu.on("click.itemclick", "a:not(.collapsible-header)", function() {
              removeMenu();
            });
          }
          var removeMenu = function(restoreNav) {
            panning = false;
            menuOut = false;
            $('body').css({
              overflow: '',
              width: ''
            });
            $('#sidenav-overlay').velocity({opacity: 0}, {
              duration: 200,
              queue: false,
              easing: 'easeOutQuad',
              complete: function() {
                $(this).remove();
              }
            });
            if (options.edge === 'left') {
              $dragTarget.css({
                width: '',
                right: '',
                left: '0'
              });
              menu.velocity({'translateX': '-100%'}, {
                duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    menu.removeAttr('style');
                    menu.css('width', options.menuWidth);
                  }
                }
              });
            } else {
              $dragTarget.css({
                width: '',
                right: '0',
                left: ''
              });
              menu.velocity({'translateX': '100%'}, {
                duration: 200,
                queue: false,
                easing: 'easeOutCubic',
                complete: function() {
                  if (restoreNav === true) {
                    menu.removeAttr('style');
                    menu.css('width', options.menuWidth);
                  }
                }
              });
            }
          };
          var panning = false;
          var menuOut = false;
          if (options.draggable) {
            $dragTarget.on('click', function() {
              if (menuOut) {
                removeMenu();
              }
            });
            $dragTarget.hammer({prevent_default: false}).bind('pan', function(e) {
              if (e.gesture.pointerType == "touch") {
                var direction = e.gesture.direction;
                var x = e.gesture.center.x;
                var y = e.gesture.center.y;
                var velocityX = e.gesture.velocityX;
                var $body = $('body');
                var $overlay = $('#sidenav-overlay');
                var oldWidth = $body.innerWidth();
                $body.css('overflow', 'hidden');
                $body.width(oldWidth);
                if ($overlay.length === 0) {
                  $overlay = $('<div id="sidenav-overlay"></div>');
                  $overlay.css('opacity', 0).click(function() {
                    removeMenu();
                  });
                  $('body').append($overlay);
                }
                if (options.edge === 'left') {
                  if (x > options.menuWidth) {
                    x = options.menuWidth;
                  } else if (x < 0) {
                    x = 0;
                  }
                }
                if (options.edge === 'left') {
                  if (x < (options.menuWidth / 2)) {
                    menuOut = false;
                  } else if (x >= (options.menuWidth / 2)) {
                    menuOut = true;
                  }
                  menu.css('transform', 'translateX(' + (x - options.menuWidth) + 'px)');
                } else {
                  if (x < (window.innerWidth - options.menuWidth / 2)) {
                    menuOut = true;
                  } else if (x >= (window.innerWidth - options.menuWidth / 2)) {
                    menuOut = false;
                  }
                  var rightPos = (x - options.menuWidth / 2);
                  if (rightPos < 0) {
                    rightPos = 0;
                  }
                  menu.css('transform', 'translateX(' + rightPos + 'px)');
                }
                var overlayPerc;
                if (options.edge === 'left') {
                  overlayPerc = x / options.menuWidth;
                  $overlay.velocity({opacity: overlayPerc}, {
                    duration: 10,
                    queue: false,
                    easing: 'easeOutQuad'
                  });
                } else {
                  overlayPerc = Math.abs((x - window.innerWidth) / options.menuWidth);
                  $overlay.velocity({opacity: overlayPerc}, {
                    duration: 10,
                    queue: false,
                    easing: 'easeOutQuad'
                  });
                }
              }
            }).bind('panend', function(e) {
              if (e.gesture.pointerType == "touch") {
                var $overlay = $('<div id="sidenav-overlay"></div>');
                var velocityX = e.gesture.velocityX;
                var x = e.gesture.center.x;
                var leftPos = x - options.menuWidth;
                var rightPos = x - options.menuWidth / 2;
                if (leftPos > 0) {
                  leftPos = 0;
                }
                if (rightPos < 0) {
                  rightPos = 0;
                }
                panning = false;
                if (options.edge === 'left') {
                  if ((menuOut && velocityX <= 0.3) || velocityX < -0.5) {
                    if (leftPos !== 0) {
                      menu.velocity({'translateX': [0, leftPos]}, {
                        duration: 300,
                        queue: false,
                        easing: 'easeOutQuad'
                      });
                    }
                    $overlay.velocity({opacity: 1}, {
                      duration: 50,
                      queue: false,
                      easing: 'easeOutQuad'
                    });
                    $dragTarget.css({
                      width: '50%',
                      right: 0,
                      left: ''
                    });
                    menuOut = true;
                  } else if (!menuOut || velocityX > 0.3) {
                    $('body').css({
                      overflow: '',
                      width: ''
                    });
                    menu.velocity({'translateX': [-1 * options.menuWidth - 10, leftPos]}, {
                      duration: 200,
                      queue: false,
                      easing: 'easeOutQuad'
                    });
                    $overlay.velocity({opacity: 0}, {
                      duration: 200,
                      queue: false,
                      easing: 'easeOutQuad',
                      complete: function() {
                        $(this).remove();
                      }
                    });
                    $dragTarget.css({
                      width: '10px',
                      right: '',
                      left: 0
                    });
                  }
                } else {
                  if ((menuOut && velocityX >= -0.3) || velocityX > 0.5) {
                    if (rightPos !== 0) {
                      menu.velocity({'translateX': [0, rightPos]}, {
                        duration: 300,
                        queue: false,
                        easing: 'easeOutQuad'
                      });
                    }
                    $overlay.velocity({opacity: 1}, {
                      duration: 50,
                      queue: false,
                      easing: 'easeOutQuad'
                    });
                    $dragTarget.css({
                      width: '50%',
                      right: '',
                      left: 0
                    });
                    menuOut = true;
                  } else if (!menuOut || velocityX < -0.3) {
                    $('body').css({
                      overflow: '',
                      width: ''
                    });
                    menu.velocity({'translateX': [options.menuWidth + 10, rightPos]}, {
                      duration: 200,
                      queue: false,
                      easing: 'easeOutQuad'
                    });
                    $overlay.velocity({opacity: 0}, {
                      duration: 200,
                      queue: false,
                      easing: 'easeOutQuad',
                      complete: function() {
                        $(this).remove();
                      }
                    });
                    $dragTarget.css({
                      width: '10px',
                      right: 0,
                      left: ''
                    });
                  }
                }
              }
            });
          }
          $this.off('click.sidenav').on('click.sidenav', function() {
            if (menuOut === true) {
              menuOut = false;
              panning = false;
              removeMenu();
            } else {
              var $body = $('body');
              var $overlay = $('<div id="sidenav-overlay"></div>');
              var oldWidth = $body.innerWidth();
              $body.css('overflow', 'hidden');
              $body.width(oldWidth);
              $('body').append($dragTarget);
              if (options.edge === 'left') {
                $dragTarget.css({
                  width: '50%',
                  right: 0,
                  left: ''
                });
                menu.velocity({'translateX': [0, -1 * options.menuWidth]}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
              } else {
                $dragTarget.css({
                  width: '50%',
                  right: '',
                  left: 0
                });
                menu.velocity({'translateX': [0, options.menuWidth]}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
              }
              $overlay.css('opacity', 0).click(function() {
                menuOut = false;
                panning = false;
                removeMenu();
                $overlay.velocity({opacity: 0}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function() {
                    $(this).remove();
                  }
                });
              });
              $('body').append($overlay);
              $overlay.velocity({opacity: 1}, {
                duration: 300,
                queue: false,
                easing: 'easeOutQuad',
                complete: function() {
                  menuOut = true;
                  panning = false;
                }
              });
            }
            return false;
          });
        });
      },
      destroy: function() {
        var $overlay = $('#sidenav-overlay');
        var $dragTarget = $('.drag-target[data-sidenav="' + $(this).attr('data-activates') + '"]');
        $overlay.trigger('click');
        $dragTarget.remove();
        $(this).off('click');
        $overlay.remove();
      },
      show: function() {
        this.trigger('click');
      },
      hide: function() {
        $('#sidenav-overlay').trigger('click');
      }
    };
    $.fn.sideNav = function(methodOrOptions) {
      if (methods[methodOrOptions]) {
        return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('Method ' + methodOrOptions + ' does not exist on jQuery.sideNav');
      }
    };
  }(jQuery));
  ;
  (function($) {
    var jWindow = $(window);
    var elements = [];
    var elementsInView = [];
    var isSpying = false;
    var ticks = 0;
    var unique_id = 1;
    var offset = {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    };
    function findElements(top, right, bottom, left) {
      var hits = $();
      $.each(elements, function(i, element) {
        if (element.height() > 0) {
          var elTop = element.offset().top,
              elLeft = element.offset().left,
              elRight = elLeft + element.width(),
              elBottom = elTop + element.height();
          var isIntersect = !(elLeft > right || elRight < left || elTop > bottom || elBottom < top);
          if (isIntersect) {
            hits.push(element);
          }
        }
      });
      return hits;
    }
    function onScroll(scrollOffset) {
      ++ticks;
      var top = jWindow.scrollTop(),
          left = jWindow.scrollLeft(),
          right = left + jWindow.width(),
          bottom = top + jWindow.height();
      var intersections = findElements(top + offset.top + scrollOffset || 200, right + offset.right, bottom + offset.bottom, left + offset.left);
      $.each(intersections, function(i, element) {
        var lastTick = element.data('scrollSpy:ticks');
        if (typeof lastTick != 'number') {
          element.triggerHandler('scrollSpy:enter');
        }
        element.data('scrollSpy:ticks', ticks);
      });
      $.each(elementsInView, function(i, element) {
        var lastTick = element.data('scrollSpy:ticks');
        if (typeof lastTick == 'number' && lastTick !== ticks) {
          element.triggerHandler('scrollSpy:exit');
          element.data('scrollSpy:ticks', null);
        }
      });
      elementsInView = intersections;
    }
    function onWinSize() {
      jWindow.trigger('scrollSpy:winSize');
    }
    $.scrollSpy = function(selector, options) {
      var defaults = {
        throttle: 100,
        scrollOffset: 200
      };
      options = $.extend(defaults, options);
      var visible = [];
      selector = $(selector);
      selector.each(function(i, element) {
        elements.push($(element));
        $(element).data("scrollSpy:id", i);
        $('a[href="#' + $(element).attr('id') + '"]').click(function(e) {
          e.preventDefault();
          var offset = $(Materialize.escapeHash(this.hash)).offset().top + 1;
          $('html, body').animate({scrollTop: offset - options.scrollOffset}, {
            duration: 400,
            queue: false,
            easing: 'easeOutCubic'
          });
        });
      });
      offset.top = options.offsetTop || 0;
      offset.right = options.offsetRight || 0;
      offset.bottom = options.offsetBottom || 0;
      offset.left = options.offsetLeft || 0;
      var throttledScroll = Materialize.throttle(function() {
        onScroll(options.scrollOffset);
      }, options.throttle || 100);
      var readyScroll = function() {
        $(document).ready(throttledScroll);
      };
      if (!isSpying) {
        jWindow.on('scroll', readyScroll);
        jWindow.on('resize', readyScroll);
        isSpying = true;
      }
      setTimeout(readyScroll, 0);
      selector.on('scrollSpy:enter', function() {
        visible = $.grep(visible, function(value) {
          return value.height() != 0;
        });
        var $this = $(this);
        if (visible[0]) {
          $('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');
          if ($this.data('scrollSpy:id') < visible[0].data('scrollSpy:id')) {
            visible.unshift($(this));
          } else {
            visible.push($(this));
          }
        } else {
          visible.push($(this));
        }
        $('a[href="#' + visible[0].attr('id') + '"]').addClass('active');
      });
      selector.on('scrollSpy:exit', function() {
        visible = $.grep(visible, function(value) {
          return value.height() != 0;
        });
        if (visible[0]) {
          $('a[href="#' + visible[0].attr('id') + '"]').removeClass('active');
          var $this = $(this);
          visible = $.grep(visible, function(value) {
            return value.attr('id') != $this.attr('id');
          });
          if (visible[0]) {
            $('a[href="#' + visible[0].attr('id') + '"]').addClass('active');
          }
        }
      });
      return selector;
    };
    $.winSizeSpy = function(options) {
      $.winSizeSpy = function() {
        return jWindow;
      };
      options = options || {throttle: 100};
      return jWindow.on('resize', Materialize.throttle(onWinSize, options.throttle || 100));
    };
    $.fn.scrollSpy = function(options) {
      return $.scrollSpy($(this), options);
    };
  })(jQuery);
  ;
  (function($) {
    $(document).ready(function() {
      Materialize.updateTextFields = function() {
        var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
        $(input_selector).each(function(index, element) {
          var $this = $(this);
          if ($(element).val().length > 0 || element.autofocus || $this.attr('placeholder') !== undefined) {
            $this.siblings('label').addClass('active');
          } else if ($(element)[0].validity) {
            $this.siblings('label').toggleClass('active', $(element)[0].validity.badInput === true);
          } else {
            $this.siblings('label').removeClass('active');
          }
        });
      };
      var input_selector = 'input[type=text], input[type=password], input[type=email], input[type=url], input[type=tel], input[type=number], input[type=search], textarea';
      $(document).on('change', input_selector, function() {
        if ($(this).val().length !== 0 || $(this).attr('placeholder') !== undefined) {
          $(this).siblings('label').addClass('active');
        }
        validate_field($(this));
      });
      $(document).ready(function() {
        Materialize.updateTextFields();
      });
      $(document).on('reset', function(e) {
        var formReset = $(e.target);
        if (formReset.is('form')) {
          formReset.find(input_selector).removeClass('valid').removeClass('invalid');
          formReset.find(input_selector).each(function() {
            if ($(this).attr('value') === '') {
              $(this).siblings('label').removeClass('active');
            }
          });
          formReset.find('select.initialized').each(function() {
            var reset_text = formReset.find('option[selected]').text();
            formReset.siblings('input.select-dropdown').val(reset_text);
          });
        }
      });
      $(document).on('focus', input_selector, function() {
        $(this).siblings('label, .prefix').addClass('active');
      });
      $(document).on('blur', input_selector, function() {
        var $inputElement = $(this);
        var selector = ".prefix";
        if ($inputElement.val().length === 0 && $inputElement[0].validity.badInput !== true && $inputElement.attr('placeholder') === undefined) {
          selector += ", label";
        }
        $inputElement.siblings(selector).removeClass('active');
        validate_field($inputElement);
      });
      window.validate_field = function(object) {
        var hasLength = object.attr('data-length') !== undefined;
        var lenAttr = parseInt(object.attr('data-length'));
        var len = object.val().length;
        if (object.val().length === 0 && object[0].validity.badInput === false) {
          if (object.hasClass('validate')) {
            object.removeClass('valid');
            object.removeClass('invalid');
          }
        } else {
          if (object.hasClass('validate')) {
            if ((object.is(':valid') && hasLength && (len <= lenAttr)) || (object.is(':valid') && !hasLength)) {
              object.removeClass('invalid');
              object.addClass('valid');
            } else {
              object.removeClass('valid');
              object.addClass('invalid');
            }
          }
        }
      };
      var radio_checkbox = 'input[type=radio], input[type=checkbox]';
      $(document).on('keyup.radio', radio_checkbox, function(e) {
        if (e.which === 9) {
          $(this).addClass('tabbed');
          var $this = $(this);
          $this.one('blur', function(e) {
            $(this).removeClass('tabbed');
          });
          return;
        }
      });
      var hiddenDiv = $('.hiddendiv').first();
      if (!hiddenDiv.length) {
        hiddenDiv = $('<div class="hiddendiv common"></div>');
        $('body').append(hiddenDiv);
      }
      var text_area_selector = '.materialize-textarea';
      function textareaAutoResize($textarea) {
        var fontFamily = $textarea.css('font-family');
        var fontSize = $textarea.css('font-size');
        var lineHeight = $textarea.css('line-height');
        if (fontSize) {
          hiddenDiv.css('font-size', fontSize);
        }
        if (fontFamily) {
          hiddenDiv.css('font-family', fontFamily);
        }
        if (lineHeight) {
          hiddenDiv.css('line-height', lineHeight);
        }
        if ($textarea.attr('wrap') === "off") {
          hiddenDiv.css('overflow-wrap', "normal").css('white-space', "pre");
        }
        hiddenDiv.text($textarea.val() + '\n');
        var content = hiddenDiv.html().replace(/\n/g, '<br>');
        hiddenDiv.html(content);
        if ($textarea.is(':visible')) {
          hiddenDiv.css('width', $textarea.width());
        } else {
          hiddenDiv.css('width', $(window).width() / 2);
        }
        $textarea.css('height', hiddenDiv.height());
      }
      $(text_area_selector).each(function() {
        var $textarea = $(this);
        if ($textarea.val().length) {
          textareaAutoResize($textarea);
        }
      });
      $('body').on('keyup keydown autoresize', text_area_selector, function() {
        textareaAutoResize($(this));
      });
      $(document).on('change', '.file-field input[type="file"]', function() {
        var file_field = $(this).closest('.file-field');
        var path_input = file_field.find('input.file-path');
        var files = $(this)[0].files;
        var file_names = [];
        for (var i = 0; i < files.length; i++) {
          file_names.push(files[i].name);
        }
        path_input.val(file_names.join(", "));
        path_input.trigger('change');
      });
      var range_type = 'input[type=range]';
      var range_mousedown = false;
      var left;
      $(range_type).each(function() {
        var thumb = $('<span class="thumb"><span class="value"></span></span>');
        $(this).after(thumb);
      });
      var range_wrapper = '.range-field';
      $(document).on('change', range_type, function(e) {
        var thumb = $(this).siblings('.thumb');
        thumb.find('.value').html($(this).val());
      });
      $(document).on('input mousedown touchstart', range_type, function(e) {
        var thumb = $(this).siblings('.thumb');
        var width = $(this).outerWidth();
        if (thumb.length <= 0) {
          thumb = $('<span class="thumb"><span class="value"></span></span>');
          $(this).after(thumb);
        }
        thumb.find('.value').html($(this).val());
        range_mousedown = true;
        $(this).addClass('active');
        if (!thumb.hasClass('active')) {
          thumb.velocity({
            height: "30px",
            width: "30px",
            top: "-20px",
            marginLeft: "-15px"
          }, {
            duration: 300,
            easing: 'easeOutExpo'
          });
        }
        if (e.type !== 'input') {
          if (e.pageX === undefined || e.pageX === null) {
            left = e.originalEvent.touches[0].pageX - $(this).offset().left;
          } else {
            left = e.pageX - $(this).offset().left;
          }
          if (left < 0) {
            left = 0;
          } else if (left > width) {
            left = width;
          }
          thumb.addClass('active').css('left', left);
        }
        thumb.find('.value').html($(this).val());
      });
      $(document).on('mouseup touchend', range_wrapper, function() {
        range_mousedown = false;
        $(this).removeClass('active');
      });
      $(document).on('mousemove touchmove', range_wrapper, function(e) {
        var thumb = $(this).children('.thumb');
        var left;
        if (range_mousedown) {
          if (!thumb.hasClass('active')) {
            thumb.velocity({
              height: '30px',
              width: '30px',
              top: '-20px',
              marginLeft: '-15px'
            }, {
              duration: 300,
              easing: 'easeOutExpo'
            });
          }
          if (e.pageX === undefined || e.pageX === null) {
            left = e.originalEvent.touches[0].pageX - $(this).offset().left;
          } else {
            left = e.pageX - $(this).offset().left;
          }
          var width = $(this).outerWidth();
          if (left < 0) {
            left = 0;
          } else if (left > width) {
            left = width;
          }
          thumb.addClass('active').css('left', left);
          thumb.find('.value').html(thumb.siblings(range_type).val());
        }
      });
      $(document).on('mouseout touchleave', range_wrapper, function() {
        if (!range_mousedown) {
          var thumb = $(this).children('.thumb');
          if (thumb.hasClass('active')) {
            thumb.velocity({
              height: '0',
              width: '0',
              top: '10px',
              marginLeft: '-6px'
            }, {duration: 100});
          }
          thumb.removeClass('active');
        }
      });
      $.fn.autocomplete = function(options) {
        var defaults = {
          data: {},
          limit: Infinity,
          onAutocomplete: null
        };
        options = $.extend(defaults, options);
        return this.each(function() {
          var $input = $(this);
          var data = options.data,
              count = 0,
              activeIndex = 0,
              oldVal,
              $inputDiv = $input.closest('.input-field');
          if (!$.isEmptyObject(data)) {
            var $autocomplete = $('<ul class="autocomplete-content dropdown-content"></ul>');
            var $oldAutocomplete;
            if ($inputDiv.length) {
              $oldAutocomplete = $inputDiv.children('.autocomplete-content.dropdown-content').first();
              if (!$oldAutocomplete.length) {
                $inputDiv.append($autocomplete);
              }
            } else {
              $oldAutocomplete = $input.next('.autocomplete-content.dropdown-content');
              if (!$oldAutocomplete.length) {
                $input.after($autocomplete);
              }
            }
            if ($oldAutocomplete.length) {
              $autocomplete = $oldAutocomplete;
            }
            var highlight = function(string, $el) {
              var img = $el.find('img');
              var matchStart = $el.text().toLowerCase().indexOf("" + string.toLowerCase() + ""),
                  matchEnd = matchStart + string.length - 1,
                  beforeMatch = $el.text().slice(0, matchStart),
                  matchText = $el.text().slice(matchStart, matchEnd + 1),
                  afterMatch = $el.text().slice(matchEnd + 1);
              $el.html("<span>" + beforeMatch + "<span class='highlight'>" + matchText + "</span>" + afterMatch + "</span>");
              if (img.length) {
                $el.prepend(img);
              }
            };
            var resetCurrentElement = function() {
              activeIndex = 0;
              $autocomplete.find('.active').removeClass('active');
            };
            $input.off('keyup.autocomplete').on('keyup.autocomplete', function(e) {
              count = 0;
              if (e.which === 13 || e.which === 38 || e.which === 40) {
                return;
              }
              var val = $input.val().toLowerCase();
              if (oldVal !== val) {
                $autocomplete.empty();
                resetCurrentElement();
                if (val !== '') {
                  for (var key in data) {
                    if (data.hasOwnProperty(key) && key.toLowerCase().indexOf(val) !== -1 && key.toLowerCase() !== val) {
                      if (count >= options.limit) {
                        break;
                      }
                      var autocompleteOption = $('<li></li>');
                      if (!!data[key]) {
                        autocompleteOption.append('<img src="' + data[key] + '" class="right circle"><span>' + key + '</span>');
                      } else {
                        autocompleteOption.append('<span>' + key + '</span>');
                      }
                      $autocomplete.append(autocompleteOption);
                      highlight(val, autocompleteOption);
                      count++;
                    }
                  }
                }
              }
              oldVal = val;
            });
            $input.off('keydown.autocomplete').on('keydown.autocomplete', function(e) {
              var keyCode = e.which,
                  liElement,
                  numItems = $autocomplete.children('li').length,
                  $active = $autocomplete.children('.active').first();
              if (keyCode === 13) {
                liElement = $autocomplete.children('li').eq(activeIndex);
                if (liElement.length) {
                  liElement.click();
                  e.preventDefault();
                }
                return;
              }
              if (keyCode === 38 || keyCode === 40) {
                e.preventDefault();
                if (keyCode === 38 && activeIndex > 0) {
                  activeIndex--;
                }
                if (keyCode === 40 && activeIndex < (numItems - 1) && $active.length) {
                  activeIndex++;
                }
                $active.removeClass('active');
                $autocomplete.children('li').eq(activeIndex).addClass('active');
              }
            });
            $autocomplete.on('click', 'li', function() {
              var text = $(this).text().trim();
              $input.val(text);
              $input.trigger('change');
              $autocomplete.empty();
              resetCurrentElement();
              if (typeof(options.onAutocomplete) === "function") {
                options.onAutocomplete.call(this, text);
              }
            });
          }
        });
      };
    });
    $.fn.material_select = function(callback) {
      $(this).each(function() {
        var $select = $(this);
        if ($select.hasClass('browser-default')) {
          return;
        }
        var multiple = $select.attr('multiple') ? true : false,
            lastID = $select.data('select-id');
        if (lastID) {
          $select.parent().find('span.caret').remove();
          $select.parent().find('input').remove();
          $select.unwrap();
          $('ul#select-options-' + lastID).remove();
        }
        if (callback === 'destroy') {
          $select.data('select-id', null).removeClass('initialized');
          return;
        }
        var uniqueID = Materialize.guid();
        $select.data('select-id', uniqueID);
        var wrapper = $('<div class="select-wrapper"></div>');
        wrapper.addClass($select.attr('class'));
        var options = $('<ul id="select-options-' + uniqueID + '" class="dropdown-content select-dropdown ' + (multiple ? 'multiple-select-dropdown' : '') + '"></ul>'),
            selectChildren = $select.children('option, optgroup'),
            valuesSelected = [],
            optionsHover = false;
        var label = $select.find('option:selected').html() || $select.find('option:first').html() || "";
        var appendOptionWithIcon = function(select, option, type) {
          var disabledClass = (option.is(':disabled')) ? 'disabled ' : '';
          var optgroupClass = (type === 'optgroup-option') ? 'optgroup-option ' : '';
          var icon_url = option.data('icon');
          var classes = option.attr('class');
          if (!!icon_url) {
            var classString = '';
            if (!!classes)
              classString = ' class="' + classes + '"';
            if (type === 'multiple') {
              options.append($('<li class="' + disabledClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
            } else {
              options.append($('<li class="' + disabledClass + optgroupClass + '"><img alt="" src="' + icon_url + '"' + classString + '><span>' + option.html() + '</span></li>'));
            }
            return true;
          }
          if (type === 'multiple') {
            options.append($('<li class="' + disabledClass + '"><span><input type="checkbox"' + disabledClass + '/><label></label>' + option.html() + '</span></li>'));
          } else {
            options.append($('<li class="' + disabledClass + optgroupClass + '"><span>' + option.html() + '</span></li>'));
          }
        };
        if (selectChildren.length) {
          selectChildren.each(function() {
            if ($(this).is('option')) {
              if (multiple) {
                appendOptionWithIcon($select, $(this), 'multiple');
              } else {
                appendOptionWithIcon($select, $(this));
              }
            } else if ($(this).is('optgroup')) {
              var selectOptions = $(this).children('option');
              options.append($('<li class="optgroup"><span>' + $(this).attr('label') + '</span></li>'));
              selectOptions.each(function() {
                appendOptionWithIcon($select, $(this), 'optgroup-option');
              });
            }
          });
        }
        options.find('li:not(.optgroup)').each(function(i) {
          $(this).click(function(e) {
            if (!$(this).hasClass('disabled') && !$(this).hasClass('optgroup')) {
              var selected = true;
              if (multiple) {
                $('input[type="checkbox"]', this).prop('checked', function(i, v) {
                  return !v;
                });
                selected = toggleEntryFromArray(valuesSelected, $(this).index(), $select);
                $newSelect.trigger('focus');
              } else {
                options.find('li').removeClass('active');
                $(this).toggleClass('active');
                $newSelect.val($(this).text());
              }
              activateOption(options, $(this));
              $select.find('option').eq(i).prop('selected', selected);
              $select.trigger('change');
              if (typeof callback !== 'undefined')
                callback();
            }
            e.stopPropagation();
          });
        });
        $select.wrap(wrapper);
        var dropdownIcon = $('<span class="caret">&#9660;</span>');
        if ($select.is(':disabled'))
          dropdownIcon.addClass('disabled');
        var sanitizedLabelHtml = label.replace(/"/g, '&quot;');
        var $newSelect = $('<input type="text" class="select-dropdown" readonly="true" ' + (($select.is(':disabled')) ? 'disabled' : '') + ' data-activates="select-options-' + uniqueID + '" value="' + sanitizedLabelHtml + '"/>');
        $select.before($newSelect);
        $newSelect.before(dropdownIcon);
        $newSelect.after(options);
        if (!$select.is(':disabled')) {
          $newSelect.dropdown({
            'hover': false,
            'closeOnClick': false
          });
        }
        if ($select.attr('tabindex')) {
          $($newSelect[0]).attr('tabindex', $select.attr('tabindex'));
        }
        $select.addClass('initialized');
        $newSelect.on({
          'focus': function() {
            if ($('ul.select-dropdown').not(options[0]).is(':visible')) {
              $('input.select-dropdown').trigger('close');
            }
            if (!options.is(':visible')) {
              $(this).trigger('open', ['focus']);
              var label = $(this).val();
              if (multiple && label.indexOf(',') >= 0) {
                label = label.split(',')[0];
              }
              var selectedOption = options.find('li').filter(function() {
                return $(this).text().toLowerCase() === label.toLowerCase();
              })[0];
              activateOption(options, selectedOption, true);
            }
          },
          'click': function(e) {
            e.stopPropagation();
          }
        });
        $newSelect.on('blur', function() {
          if (!multiple) {
            $(this).trigger('close');
          }
          options.find('li.selected').removeClass('selected');
        });
        options.hover(function() {
          optionsHover = true;
        }, function() {
          optionsHover = false;
        });
        $(window).on({'click': function() {
            multiple && (optionsHover || $newSelect.trigger('close'));
          }});
        if (multiple) {
          $select.find("option:selected:not(:disabled)").each(function() {
            var index = $(this).index();
            toggleEntryFromArray(valuesSelected, index, $select);
            options.find("li").eq(index).find(":checkbox").prop("checked", true);
          });
        }
        var activateOption = function(collection, newOption, firstActivation) {
          if (newOption) {
            collection.find('li.selected').removeClass('selected');
            var option = $(newOption);
            option.addClass('selected');
            if (!multiple || !!firstActivation) {
              options.scrollTo(option);
            }
          }
        };
        var filterQuery = [],
            onKeyDown = function(e) {
              if (e.which == 9) {
                $newSelect.trigger('close');
                return;
              }
              if (e.which == 40 && !options.is(':visible')) {
                $newSelect.trigger('open');
                return;
              }
              if (e.which == 13 && !options.is(':visible')) {
                return;
              }
              e.preventDefault();
              var letter = String.fromCharCode(e.which).toLowerCase(),
                  nonLetters = [9, 13, 27, 38, 40];
              if (letter && (nonLetters.indexOf(e.which) === -1)) {
                filterQuery.push(letter);
                var string = filterQuery.join(''),
                    newOption = options.find('li').filter(function() {
                      return $(this).text().toLowerCase().indexOf(string) === 0;
                    })[0];
                if (newOption) {
                  activateOption(options, newOption);
                }
              }
              if (e.which == 13) {
                var activeOption = options.find('li.selected:not(.disabled)')[0];
                if (activeOption) {
                  $(activeOption).trigger('click');
                  if (!multiple) {
                    $newSelect.trigger('close');
                  }
                }
              }
              if (e.which == 40) {
                if (options.find('li.selected').length) {
                  newOption = options.find('li.selected').next('li:not(.disabled)')[0];
                } else {
                  newOption = options.find('li:not(.disabled)')[0];
                }
                activateOption(options, newOption);
              }
              if (e.which == 27) {
                $newSelect.trigger('close');
              }
              if (e.which == 38) {
                newOption = options.find('li.selected').prev('li:not(.disabled)')[0];
                if (newOption)
                  activateOption(options, newOption);
              }
              setTimeout(function() {
                filterQuery = [];
              }, 1000);
            };
        $newSelect.on('keydown', onKeyDown);
      });
      function toggleEntryFromArray(entriesArray, entryIndex, select) {
        var index = entriesArray.indexOf(entryIndex),
            notAdded = index === -1;
        if (notAdded) {
          entriesArray.push(entryIndex);
        } else {
          entriesArray.splice(index, 1);
        }
        select.siblings('ul.dropdown-content').find('li').eq(entryIndex).toggleClass('active');
        select.find('option').eq(entryIndex).prop('selected', notAdded);
        setValueToInput(entriesArray, select);
        return notAdded;
      }
      function setValueToInput(entriesArray, select) {
        var value = '';
        for (var i = 0,
            count = entriesArray.length; i < count; i++) {
          var text = select.find('option').eq(entriesArray[i]).text();
          i === 0 ? value += text : value += ', ' + text;
        }
        if (value === '') {
          value = select.find('option:disabled').eq(0).text();
        }
        select.siblings('input.select-dropdown').val(value);
      }
    };
  }(jQuery));
  ;
  (function($) {
    var methods = {
      init: function(options) {
        var defaults = {
          indicators: true,
          height: 400,
          transition: 500,
          interval: 6000
        };
        options = $.extend(defaults, options);
        return this.each(function() {
          var $this = $(this);
          var $slider = $this.find('ul.slides').first();
          var $slides = $slider.find('> li');
          var $active_index = $slider.find('.active').index();
          var $active,
              $indicators,
              $interval;
          if ($active_index != -1) {
            $active = $slides.eq($active_index);
          }
          function captionTransition(caption, duration) {
            if (caption.hasClass("center-align")) {
              caption.velocity({
                opacity: 0,
                translateY: -100
              }, {
                duration: duration,
                queue: false
              });
            } else if (caption.hasClass("right-align")) {
              caption.velocity({
                opacity: 0,
                translateX: 100
              }, {
                duration: duration,
                queue: false
              });
            } else if (caption.hasClass("left-align")) {
              caption.velocity({
                opacity: 0,
                translateX: -100
              }, {
                duration: duration,
                queue: false
              });
            }
          }
          function moveToSlide(index) {
            if (index >= $slides.length)
              index = 0;
            else if (index < 0)
              index = $slides.length - 1;
            $active_index = $slider.find('.active').index();
            if ($active_index != index) {
              $active = $slides.eq($active_index);
              $caption = $active.find('.caption');
              $active.removeClass('active');
              $active.velocity({opacity: 0}, {
                duration: options.transition,
                queue: false,
                easing: 'easeOutQuad',
                complete: function() {
                  $slides.not('.active').velocity({
                    opacity: 0,
                    translateX: 0,
                    translateY: 0
                  }, {
                    duration: 0,
                    queue: false
                  });
                }
              });
              captionTransition($caption, options.transition);
              if (options.indicators) {
                $indicators.eq($active_index).removeClass('active');
              }
              $slides.eq(index).velocity({opacity: 1}, {
                duration: options.transition,
                queue: false,
                easing: 'easeOutQuad'
              });
              $slides.eq(index).find('.caption').velocity({
                opacity: 1,
                translateX: 0,
                translateY: 0
              }, {
                duration: options.transition,
                delay: options.transition,
                queue: false,
                easing: 'easeOutQuad'
              });
              $slides.eq(index).addClass('active');
              if (options.indicators) {
                $indicators.eq(index).addClass('active');
              }
            }
          }
          if (!$this.hasClass('fullscreen')) {
            if (options.indicators) {
              $this.height(options.height + 40);
            } else {
              $this.height(options.height);
            }
            $slider.height(options.height);
          }
          $slides.find('.caption').each(function() {
            captionTransition($(this), 0);
          });
          $slides.find('img').each(function() {
            var placeholderBase64 = 'data:image/gif;base64,R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
            if ($(this).attr('src') !== placeholderBase64) {
              $(this).css('background-image', 'url(' + $(this).attr('src') + ')');
              $(this).attr('src', placeholderBase64);
            }
          });
          if (options.indicators) {
            $indicators = $('<ul class="indicators"></ul>');
            $slides.each(function(index) {
              var $indicator = $('<li class="indicator-item"></li>');
              $indicator.click(function() {
                var $parent = $slider.parent();
                var curr_index = $parent.find($(this)).index();
                moveToSlide(curr_index);
                clearInterval($interval);
                $interval = setInterval(function() {
                  $active_index = $slider.find('.active').index();
                  if ($slides.length == $active_index + 1)
                    $active_index = 0;
                  else
                    $active_index += 1;
                  moveToSlide($active_index);
                }, options.transition + options.interval);
              });
              $indicators.append($indicator);
            });
            $this.append($indicators);
            $indicators = $this.find('ul.indicators').find('li.indicator-item');
          }
          if ($active) {
            $active.show();
          } else {
            $slides.first().addClass('active').velocity({opacity: 1}, {
              duration: options.transition,
              queue: false,
              easing: 'easeOutQuad'
            });
            $active_index = 0;
            $active = $slides.eq($active_index);
            if (options.indicators) {
              $indicators.eq($active_index).addClass('active');
            }
          }
          $active.find('img').each(function() {
            $active.find('.caption').velocity({
              opacity: 1,
              translateX: 0,
              translateY: 0
            }, {
              duration: options.transition,
              queue: false,
              easing: 'easeOutQuad'
            });
          });
          $interval = setInterval(function() {
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index + 1);
          }, options.transition + options.interval);
          var panning = false;
          var swipeLeft = false;
          var swipeRight = false;
          $this.hammer({prevent_default: false}).bind('pan', function(e) {
            if (e.gesture.pointerType === "touch") {
              clearInterval($interval);
              var direction = e.gesture.direction;
              var x = e.gesture.deltaX;
              var velocityX = e.gesture.velocityX;
              var velocityY = e.gesture.velocityY;
              $curr_slide = $slider.find('.active');
              if (Math.abs(velocityX) > Math.abs(velocityY)) {
                $curr_slide.velocity({translateX: x}, {
                  duration: 50,
                  queue: false,
                  easing: 'easeOutQuad'
                });
              }
              if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.65)) {
                swipeRight = true;
              } else if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.65)) {
                swipeLeft = true;
              }
              var next_slide;
              if (swipeLeft) {
                next_slide = $curr_slide.next();
                if (next_slide.length === 0) {
                  next_slide = $slides.first();
                }
                next_slide.velocity({opacity: 1}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
              }
              if (swipeRight) {
                next_slide = $curr_slide.prev();
                if (next_slide.length === 0) {
                  next_slide = $slides.last();
                }
                next_slide.velocity({opacity: 1}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
              }
            }
          }).bind('panend', function(e) {
            if (e.gesture.pointerType === "touch") {
              $curr_slide = $slider.find('.active');
              panning = false;
              curr_index = $slider.find('.active').index();
              if (!swipeRight && !swipeLeft || $slides.length <= 1) {
                $curr_slide.velocity({translateX: 0}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad'
                });
              } else if (swipeLeft) {
                moveToSlide(curr_index + 1);
                $curr_slide.velocity({translateX: -1 * $this.innerWidth()}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function() {
                    $curr_slide.velocity({
                      opacity: 0,
                      translateX: 0
                    }, {
                      duration: 0,
                      queue: false
                    });
                  }
                });
              } else if (swipeRight) {
                moveToSlide(curr_index - 1);
                $curr_slide.velocity({translateX: $this.innerWidth()}, {
                  duration: 300,
                  queue: false,
                  easing: 'easeOutQuad',
                  complete: function() {
                    $curr_slide.velocity({
                      opacity: 0,
                      translateX: 0
                    }, {
                      duration: 0,
                      queue: false
                    });
                  }
                });
              }
              swipeLeft = false;
              swipeRight = false;
              clearInterval($interval);
              $interval = setInterval(function() {
                $active_index = $slider.find('.active').index();
                if ($slides.length == $active_index + 1)
                  $active_index = 0;
                else
                  $active_index += 1;
                moveToSlide($active_index);
              }, options.transition + options.interval);
            }
          });
          $this.on('sliderPause', function() {
            clearInterval($interval);
          });
          $this.on('sliderStart', function() {
            clearInterval($interval);
            $interval = setInterval(function() {
              $active_index = $slider.find('.active').index();
              if ($slides.length == $active_index + 1)
                $active_index = 0;
              else
                $active_index += 1;
              moveToSlide($active_index);
            }, options.transition + options.interval);
          });
          $this.on('sliderNext', function() {
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index + 1);
          });
          $this.on('sliderPrev', function() {
            $active_index = $slider.find('.active').index();
            moveToSlide($active_index - 1);
          });
        });
      },
      pause: function() {
        $(this).trigger('sliderPause');
      },
      start: function() {
        $(this).trigger('sliderStart');
      },
      next: function() {
        $(this).trigger('sliderNext');
      },
      prev: function() {
        $(this).trigger('sliderPrev');
      }
    };
    $.fn.slider = function(methodOrOptions) {
      if (methods[methodOrOptions]) {
        return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('Method ' + methodOrOptions + ' does not exist on jQuery.tooltip');
      }
    };
  }(jQuery));
  ;
  (function($) {
    $(document).ready(function() {
      $(document).on('click.card', '.card', function(e) {
        if ($(this).find('> .card-reveal').length) {
          if ($(e.target).is($('.card-reveal .card-title')) || $(e.target).is($('.card-reveal .card-title i'))) {
            $(this).find('.card-reveal').velocity({translateY: 0}, {
              duration: 225,
              queue: false,
              easing: 'easeInOutQuad',
              complete: function() {
                $(this).css({display: 'none'});
              }
            });
          } else if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i'))) {
            $(e.target).closest('.card').css('overflow', 'hidden');
            $(this).find('.card-reveal').css({display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {
              duration: 300,
              queue: false,
              easing: 'easeInOutQuad'
            });
          }
        }
      });
    });
  }(jQuery));
  ;
  (function($) {
    var materialChipsDefaults = {
      data: [],
      placeholder: '',
      secondaryPlaceholder: '',
      autocompleteData: {},
      autocompleteLimit: Infinity
    };
    $(document).ready(function() {
      $(document).on('click', '.chip .close', function(e) {
        var $chips = $(this).closest('.chips');
        if ($chips.attr('data-initialized')) {
          return;
        }
        $(this).closest('.chip').remove();
      });
    });
    $.fn.material_chip = function(options) {
      var self = this;
      this.$el = $(this);
      this.$document = $(document);
      this.SELS = {
        CHIPS: '.chips',
        CHIP: '.chip',
        INPUT: 'input',
        DELETE: '.material-icons',
        SELECTED_CHIP: '.selected'
      };
      if ('data' === options) {
        return this.$el.data('chips');
      }
      var curr_options = $.extend({}, materialChipsDefaults, options);
      self.hasAutocomplete = !$.isEmptyObject(curr_options.autocompleteData);
      this.init = function() {
        var i = 0;
        var chips;
        self.$el.each(function() {
          var $chips = $(this);
          var chipId = Materialize.guid();
          self.chipId = chipId;
          if (!curr_options.data || !(curr_options.data instanceof Array)) {
            curr_options.data = [];
          }
          $chips.data('chips', curr_options.data);
          $chips.attr('data-index', i);
          $chips.attr('data-initialized', true);
          if (!$chips.hasClass(self.SELS.CHIPS)) {
            $chips.addClass('chips');
          }
          self.chips($chips, chipId);
          i++;
        });
      };
      this.handleEvents = function() {
        var SELS = self.SELS;
        self.$document.off('click.chips-focus', SELS.CHIPS).on('click.chips-focus', SELS.CHIPS, function(e) {
          $(e.target).find(SELS.INPUT).focus();
        });
        self.$document.off('click.chips-select', SELS.CHIP).on('click.chips-select', SELS.CHIP, function(e) {
          var $chip = $(e.target);
          if ($chip.length) {
            var wasSelected = $chip.hasClass('selected');
            var $chips = $chip.closest(SELS.CHIPS);
            $(SELS.CHIP).removeClass('selected');
            if (!wasSelected) {
              self.selectChip($chip.index(), $chips);
            }
          }
        });
        self.$document.off('keydown.chips').on('keydown.chips', function(e) {
          if ($(e.target).is('input, textarea')) {
            return;
          }
          var $chip = self.$document.find(SELS.CHIP + SELS.SELECTED_CHIP);
          var $chips = $chip.closest(SELS.CHIPS);
          var length = $chip.siblings(SELS.CHIP).length;
          var index;
          if (!$chip.length) {
            return;
          }
          if (e.which === 8 || e.which === 46) {
            e.preventDefault();
            index = $chip.index();
            self.deleteChip(index, $chips);
            var selectIndex = null;
            if ((index + 1) < length) {
              selectIndex = index;
            } else if (index === length || (index + 1) === length) {
              selectIndex = length - 1;
            }
            if (selectIndex < 0)
              selectIndex = null;
            if (null !== selectIndex) {
              self.selectChip(selectIndex, $chips);
            }
            if (!length)
              $chips.find('input').focus();
          } else if (e.which === 37) {
            index = $chip.index() - 1;
            if (index < 0) {
              return;
            }
            $(SELS.CHIP).removeClass('selected');
            self.selectChip(index, $chips);
          } else if (e.which === 39) {
            index = $chip.index() + 1;
            $(SELS.CHIP).removeClass('selected');
            if (index > length) {
              $chips.find('input').focus();
              return;
            }
            self.selectChip(index, $chips);
          }
        });
        self.$document.off('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusin.chips', SELS.CHIPS + ' ' + SELS.INPUT, function(e) {
          var $currChips = $(e.target).closest(SELS.CHIPS);
          $currChips.addClass('focus');
          $currChips.siblings('label, .prefix').addClass('active');
          $(SELS.CHIP).removeClass('selected');
        });
        self.$document.off('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT).on('focusout.chips', SELS.CHIPS + ' ' + SELS.INPUT, function(e) {
          var $currChips = $(e.target).closest(SELS.CHIPS);
          $currChips.removeClass('focus');
          if (!$currChips.data('chips').length) {
            $currChips.siblings('label').removeClass('active');
          }
          $currChips.siblings('.prefix').removeClass('active');
        });
        self.$document.off('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT).on('keydown.chips-add', SELS.CHIPS + ' ' + SELS.INPUT, function(e) {
          var $target = $(e.target);
          var $chips = $target.closest(SELS.CHIPS);
          var chipsLength = $chips.children(SELS.CHIP).length;
          if (13 === e.which) {
            if (self.hasAutocomplete && $chips.find('.autocomplete-content.dropdown-content').length && $chips.find('.autocomplete-content.dropdown-content').children().length) {
              return;
            }
            e.preventDefault();
            self.addChip({tag: $target.val()}, $chips);
            $target.val('');
            return;
          }
          if ((8 === e.keyCode || 37 === e.keyCode) && '' === $target.val() && chipsLength) {
            e.preventDefault();
            self.selectChip(chipsLength - 1, $chips);
            $target.blur();
            return;
          }
        });
        self.$document.off('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE).on('click.chips-delete', SELS.CHIPS + ' ' + SELS.DELETE, function(e) {
          var $target = $(e.target);
          var $chips = $target.closest(SELS.CHIPS);
          var $chip = $target.closest(SELS.CHIP);
          e.stopPropagation();
          self.deleteChip($chip.index(), $chips);
          $chips.find('input').focus();
        });
      };
      this.chips = function($chips, chipId) {
        var html = '';
        $chips.data('chips').forEach(function(elem) {
          html += self.renderChip(elem);
        });
        html += '<input id="' + chipId + '" class="input" placeholder="">';
        $chips.html(html);
        self.setPlaceholder($chips);
        var label = $chips.next('label');
        if (label.length) {
          label.attr('for', chipId);
          if ($chips.data('chips').length) {
            label.addClass('active');
          }
        }
        var input = $('#' + chipId);
        if (self.hasAutocomplete) {
          input.autocomplete({
            data: curr_options.autocompleteData,
            limit: curr_options.autocompleteLimit,
            onAutocomplete: function(val) {
              self.addChip({tag: val}, $chips);
              input.val('');
              input.focus();
            }
          });
        }
      };
      this.renderChip = function(elem) {
        if (!elem.tag)
          return;
        var html = '<div class="chip">' + elem.tag;
        if (elem.image) {
          html += ' <img src="' + elem.image + '"> ';
        }
        html += '<i class="material-icons close">close</i>';
        html += '</div>';
        return html;
      };
      this.setPlaceholder = function($chips) {
        if ($chips.data('chips').length && curr_options.placeholder) {
          $chips.find('input').prop('placeholder', curr_options.placeholder);
        } else if (!$chips.data('chips').length && curr_options.secondaryPlaceholder) {
          $chips.find('input').prop('placeholder', curr_options.secondaryPlaceholder);
        }
      };
      this.isValid = function($chips, elem) {
        var chips = $chips.data('chips');
        var exists = false;
        for (var i = 0; i < chips.length; i++) {
          if (chips[i].tag === elem.tag) {
            exists = true;
            return;
          }
        }
        return '' !== elem.tag && !exists;
      };
      this.addChip = function(elem, $chips) {
        if (!self.isValid($chips, elem)) {
          return;
        }
        var chipHtml = self.renderChip(elem);
        var newData = [];
        var oldData = $chips.data('chips');
        for (var i = 0; i < oldData.length; i++) {
          newData.push(oldData[i]);
        }
        newData.push(elem);
        $chips.data('chips', newData);
        $(chipHtml).insertBefore($chips.find('input'));
        $chips.trigger('chip.add', elem);
        self.setPlaceholder($chips);
      };
      this.deleteChip = function(chipIndex, $chips) {
        var chip = $chips.data('chips')[chipIndex];
        $chips.find('.chip').eq(chipIndex).remove();
        var newData = [];
        var oldData = $chips.data('chips');
        for (var i = 0; i < oldData.length; i++) {
          if (i !== chipIndex) {
            newData.push(oldData[i]);
          }
        }
        $chips.data('chips', newData);
        $chips.trigger('chip.delete', chip);
        self.setPlaceholder($chips);
      };
      this.selectChip = function(chipIndex, $chips) {
        var $chip = $chips.find('.chip').eq(chipIndex);
        if ($chip && false === $chip.hasClass('selected')) {
          $chip.addClass('selected');
          $chips.trigger('chip.select', $chips.data('chips')[chipIndex]);
        }
      };
      this.getChipsElement = function(index, $chips) {
        return $chips.eq(index);
      };
      this.init();
      this.handleEvents();
    };
  }(jQuery));
  ;
  (function($) {
    $.fn.pushpin = function(options) {
      var defaults = {
        top: 0,
        bottom: Infinity,
        offset: 0
      };
      if (options === "remove") {
        this.each(function() {
          if (id = $(this).data('pushpin-id')) {
            $(window).off('scroll.' + id);
            $(this).removeData('pushpin-id').removeClass('pin-top pinned pin-bottom').removeAttr('style');
          }
        });
        return false;
      }
      options = $.extend(defaults, options);
      $index = 0;
      return this.each(function() {
        var $uniqueId = Materialize.guid(),
            $this = $(this),
            $original_offset = $(this).offset().top;
        function removePinClasses(object) {
          object.removeClass('pin-top');
          object.removeClass('pinned');
          object.removeClass('pin-bottom');
        }
        function updateElements(objects, scrolled) {
          objects.each(function() {
            if (options.top <= scrolled && options.bottom >= scrolled && !$(this).hasClass('pinned')) {
              removePinClasses($(this));
              $(this).css('top', options.offset);
              $(this).addClass('pinned');
            }
            if (scrolled < options.top && !$(this).hasClass('pin-top')) {
              removePinClasses($(this));
              $(this).css('top', 0);
              $(this).addClass('pin-top');
            }
            if (scrolled > options.bottom && !$(this).hasClass('pin-bottom')) {
              removePinClasses($(this));
              $(this).addClass('pin-bottom');
              $(this).css('top', options.bottom - $original_offset);
            }
          });
        }
        $(this).data('pushpin-id', $uniqueId);
        updateElements($this, $(window).scrollTop());
        $(window).on('scroll.' + $uniqueId, function() {
          var $scrolled = $(window).scrollTop() + options.offset;
          updateElements($this, $scrolled);
        });
      });
    };
  }(jQuery));
  ;
  (function($) {
    $(document).ready(function() {
      $.fn.reverse = [].reverse;
      $(document).on('mouseenter.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function(e) {
        var $this = $(this);
        openFABMenu($this);
      });
      $(document).on('mouseleave.fixedActionBtn', '.fixed-action-btn:not(.click-to-toggle):not(.toolbar)', function(e) {
        var $this = $(this);
        closeFABMenu($this);
      });
      $(document).on('click.fabClickToggle', '.fixed-action-btn.click-to-toggle > a', function(e) {
        var $this = $(this);
        var $menu = $this.parent();
        if ($menu.hasClass('active')) {
          closeFABMenu($menu);
        } else {
          openFABMenu($menu);
        }
      });
      $(document).on('click.fabToolbar', '.fixed-action-btn.toolbar > a', function(e) {
        var $this = $(this);
        var $menu = $this.parent();
        FABtoToolbar($menu);
      });
    });
    $.fn.extend({
      openFAB: function() {
        openFABMenu($(this));
      },
      closeFAB: function() {
        closeFABMenu($(this));
      },
      openToolbar: function() {
        FABtoToolbar($(this));
      },
      closeToolbar: function() {
        toolbarToFAB($(this));
      }
    });
    var openFABMenu = function(btn) {
      var $this = btn;
      if ($this.hasClass('active') === false) {
        var horizontal = $this.hasClass('horizontal');
        var offsetY,
            offsetX;
        if (horizontal === true) {
          offsetX = 40;
        } else {
          offsetY = 40;
        }
        $this.addClass('active');
        $this.find('ul .btn-floating').velocity({
          scaleY: ".4",
          scaleX: ".4",
          translateY: offsetY + 'px',
          translateX: offsetX + 'px'
        }, {duration: 0});
        var time = 0;
        $this.find('ul .btn-floating').reverse().each(function() {
          $(this).velocity({
            opacity: "1",
            scaleX: "1",
            scaleY: "1",
            translateY: "0",
            translateX: '0'
          }, {
            duration: 80,
            delay: time
          });
          time += 40;
        });
      }
    };
    var closeFABMenu = function(btn) {
      var $this = btn;
      var horizontal = $this.hasClass('horizontal');
      var offsetY,
          offsetX;
      if (horizontal === true) {
        offsetX = 40;
      } else {
        offsetY = 40;
      }
      $this.removeClass('active');
      var time = 0;
      $this.find('ul .btn-floating').velocity("stop", true);
      $this.find('ul .btn-floating').velocity({
        opacity: "0",
        scaleX: ".4",
        scaleY: ".4",
        translateY: offsetY + 'px',
        translateX: offsetX + 'px'
      }, {duration: 80});
    };
    var FABtoToolbar = function(btn) {
      if (btn.attr('data-open') === "true") {
        return;
      }
      var offsetX,
          offsetY,
          scaleFactor;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var btnRect = btn[0].getBoundingClientRect();
      var anchor = btn.find('> a').first();
      var menu = btn.find('> ul').first();
      var backdrop = $('<div class="fab-backdrop"></div>');
      var fabColor = anchor.css('background-color');
      anchor.append(backdrop);
      offsetX = btnRect.left - (windowWidth / 2) + (btnRect.width / 2);
      offsetY = windowHeight - btnRect.bottom;
      scaleFactor = windowWidth / backdrop.width();
      btn.attr('data-origin-bottom', btnRect.bottom);
      btn.attr('data-origin-left', btnRect.left);
      btn.attr('data-origin-width', btnRect.width);
      btn.addClass('active');
      btn.attr('data-open', true);
      btn.css({
        'text-align': 'center',
        width: '100%',
        bottom: 0,
        left: 0,
        transform: 'translateX(' + offsetX + 'px)',
        transition: 'none'
      });
      anchor.css({
        transform: 'translateY(' + -offsetY + 'px)',
        transition: 'none'
      });
      backdrop.css({'background-color': fabColor});
      setTimeout(function() {
        btn.css({
          transform: '',
          transition: 'transform .2s cubic-bezier(0.550, 0.085, 0.680, 0.530), background-color 0s linear .2s'
        });
        anchor.css({
          overflow: 'visible',
          transform: '',
          transition: 'transform .2s'
        });
        setTimeout(function() {
          btn.css({
            overflow: 'hidden',
            'background-color': fabColor
          });
          backdrop.css({
            transform: 'scale(' + scaleFactor + ')',
            transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
          });
          menu.find('> li > a').css({opacity: 1});
          $(window).on('scroll.fabToolbarClose', function() {
            toolbarToFAB(btn);
            $(window).off('scroll.fabToolbarClose');
            $(document).off('click.fabToolbarClose');
          });
          $(document).on('click.fabToolbarClose', function(e) {
            if (!$(e.target).closest(menu).length) {
              toolbarToFAB(btn);
              $(window).off('scroll.fabToolbarClose');
              $(document).off('click.fabToolbarClose');
            }
          });
        }, 100);
      }, 0);
    };
    var toolbarToFAB = function(btn) {
      if (btn.attr('data-open') !== "true") {
        return;
      }
      var offsetX,
          offsetY,
          scaleFactor;
      var windowWidth = window.innerWidth;
      var windowHeight = window.innerHeight;
      var btnWidth = btn.attr('data-origin-width');
      var btnBottom = btn.attr('data-origin-bottom');
      var btnLeft = btn.attr('data-origin-left');
      var anchor = btn.find('> .btn-floating').first();
      var menu = btn.find('> ul').first();
      var backdrop = btn.find('.fab-backdrop');
      var fabColor = anchor.css('background-color');
      offsetX = btnLeft - (windowWidth / 2) + (btnWidth / 2);
      offsetY = windowHeight - btnBottom;
      scaleFactor = windowWidth / backdrop.width();
      btn.removeClass('active');
      btn.attr('data-open', false);
      btn.css({
        'background-color': 'transparent',
        transition: 'none'
      });
      anchor.css({transition: 'none'});
      backdrop.css({
        transform: 'scale(0)',
        'background-color': fabColor
      });
      menu.find('> li > a').css({opacity: ''});
      setTimeout(function() {
        backdrop.remove();
        btn.css({
          'text-align': '',
          width: '',
          bottom: '',
          left: '',
          overflow: '',
          'background-color': '',
          transform: 'translate3d(' + -offsetX + 'px,0,0)'
        });
        anchor.css({
          overflow: '',
          transform: 'translate3d(0,' + offsetY + 'px,0)'
        });
        setTimeout(function() {
          btn.css({
            transform: 'translate3d(0,0,0)',
            transition: 'transform .2s'
          });
          anchor.css({
            transform: 'translate3d(0,0,0)',
            transition: 'transform .2s cubic-bezier(0.550, 0.055, 0.675, 0.190)'
          });
        }, 20);
      }, 200);
    };
  }(jQuery));
  ;
  (function($) {
    Materialize.fadeInImage = function(selectorOrEl) {
      var element;
      if (typeof(selectorOrEl) === 'string') {
        element = $(selectorOrEl);
      } else if (typeof(selectorOrEl) === 'object') {
        element = selectorOrEl;
      } else {
        return;
      }
      element.css({opacity: 0});
      $(element).velocity({opacity: 1}, {
        duration: 650,
        queue: false,
        easing: 'easeOutSine'
      });
      $(element).velocity({opacity: 1}, {
        duration: 1300,
        queue: false,
        easing: 'swing',
        step: function(now, fx) {
          fx.start = 100;
          var grayscale_setting = now / 100;
          var brightness_setting = 150 - (100 - now) / 1.75;
          if (brightness_setting < 100) {
            brightness_setting = 100;
          }
          if (now >= 0) {
            $(this).css({
              "-webkit-filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)",
              "filter": "grayscale(" + grayscale_setting + ")" + "brightness(" + brightness_setting + "%)"
            });
          }
        }
      });
    };
    Materialize.showStaggeredList = function(selectorOrEl) {
      var element;
      if (typeof(selectorOrEl) === 'string') {
        element = $(selectorOrEl);
      } else if (typeof(selectorOrEl) === 'object') {
        element = selectorOrEl;
      } else {
        return;
      }
      var time = 0;
      element.find('li').velocity({translateX: "-100px"}, {duration: 0});
      element.find('li').each(function() {
        $(this).velocity({
          opacity: "1",
          translateX: "0"
        }, {
          duration: 800,
          delay: time,
          easing: [60, 10]
        });
        time += 120;
      });
    };
    $(document).ready(function() {
      var swipeLeft = false;
      var swipeRight = false;
      $('.dismissable').each(function() {
        $(this).hammer({prevent_default: false}).bind('pan', function(e) {
          if (e.gesture.pointerType === "touch") {
            var $this = $(this);
            var direction = e.gesture.direction;
            var x = e.gesture.deltaX;
            var velocityX = e.gesture.velocityX;
            $this.velocity({translateX: x}, {
              duration: 50,
              queue: false,
              easing: 'easeOutQuad'
            });
            if (direction === 4 && (x > ($this.innerWidth() / 2) || velocityX < -0.75)) {
              swipeLeft = true;
            }
            if (direction === 2 && (x < (-1 * $this.innerWidth() / 2) || velocityX > 0.75)) {
              swipeRight = true;
            }
          }
        }).bind('panend', function(e) {
          if (Math.abs(e.gesture.deltaX) < ($(this).innerWidth() / 2)) {
            swipeRight = false;
            swipeLeft = false;
          }
          if (e.gesture.pointerType === "touch") {
            var $this = $(this);
            if (swipeLeft || swipeRight) {
              var fullWidth;
              if (swipeLeft) {
                fullWidth = $this.innerWidth();
              } else {
                fullWidth = -1 * $this.innerWidth();
              }
              $this.velocity({translateX: fullWidth}, {
                duration: 100,
                queue: false,
                easing: 'easeOutQuad',
                complete: function() {
                  $this.css('border', 'none');
                  $this.velocity({
                    height: 0,
                    padding: 0
                  }, {
                    duration: 200,
                    queue: false,
                    easing: 'easeOutQuad',
                    complete: function() {
                      $this.remove();
                    }
                  });
                }
              });
            } else {
              $this.velocity({translateX: 0}, {
                duration: 100,
                queue: false,
                easing: 'easeOutQuad'
              });
            }
            swipeLeft = false;
            swipeRight = false;
          }
        });
      });
    });
  }(jQuery));
  ;
  (function($) {
    var scrollFireEventsHandled = false;
    Materialize.scrollFire = function(options) {
      var onScroll = function() {
        var windowScroll = window.pageYOffset + window.innerHeight;
        for (var i = 0; i < options.length; i++) {
          var value = options[i];
          var selector = value.selector,
              offset = value.offset,
              callback = value.callback;
          var currentElement = document.querySelector(selector);
          if (currentElement !== null) {
            var elementOffset = currentElement.getBoundingClientRect().top + window.pageYOffset;
            if (windowScroll > (elementOffset + offset)) {
              if (value.done !== true) {
                if (typeof(callback) === 'function') {
                  callback.call(this, currentElement);
                } else if (typeof(callback) === 'string') {
                  var callbackFunc = new Function(callback);
                  callbackFunc(currentElement);
                }
                value.done = true;
              }
            }
          }
        }
      };
      var throttledScroll = Materialize.throttle(function() {
        onScroll();
      }, options.throttle || 100);
      if (!scrollFireEventsHandled) {
        window.addEventListener("scroll", throttledScroll);
        window.addEventListener("resize", throttledScroll);
        scrollFireEventsHandled = true;
      }
      setTimeout(throttledScroll, 0);
    };
  })(jQuery);
  ;
  (function(factory) {
    if (typeof define == 'function' && define.amd)
      define('picker', ['jquery'], factory);
    else if (typeof exports == 'object')
      module.exports = factory(require('jquery'));
    else
      this.Picker = factory(jQuery);
  }(function($) {
    var $window = $(window);
    var $document = $(document);
    var $html = $(document.documentElement);
    function PickerConstructor(ELEMENT, NAME, COMPONENT, OPTIONS) {
      if (!ELEMENT)
        return PickerConstructor;
      var IS_DEFAULT_THEME = false,
          STATE = {id: ELEMENT.id || 'P' + Math.abs(~~(Math.random() * new Date()))},
          SETTINGS = COMPONENT ? $.extend(true, {}, COMPONENT.defaults, OPTIONS) : OPTIONS || {},
          CLASSES = $.extend({}, PickerConstructor.klasses(), SETTINGS.klass),
          $ELEMENT = $(ELEMENT),
          PickerInstance = function() {
            return this.start();
          },
          P = PickerInstance.prototype = {
            constructor: PickerInstance,
            $node: $ELEMENT,
            start: function() {
              if (STATE && STATE.start)
                return P;
              STATE.methods = {};
              STATE.start = true;
              STATE.open = false;
              STATE.type = ELEMENT.type;
              ELEMENT.autofocus = ELEMENT == getActiveElement();
              ELEMENT.readOnly = !SETTINGS.editable;
              ELEMENT.id = ELEMENT.id || STATE.id;
              if (ELEMENT.type != 'text') {
                ELEMENT.type = 'text';
              }
              P.component = new COMPONENT(P, SETTINGS);
              P.$root = $(PickerConstructor._.node('div', createWrappedComponent(), CLASSES.picker, 'id="' + ELEMENT.id + '_root" tabindex="0"'));
              prepareElementRoot();
              if (SETTINGS.formatSubmit) {
                prepareElementHidden();
              }
              prepareElement();
              if (SETTINGS.container)
                $(SETTINGS.container).append(P.$root);
              else
                $ELEMENT.after(P.$root);
              P.on({
                start: P.component.onStart,
                render: P.component.onRender,
                stop: P.component.onStop,
                open: P.component.onOpen,
                close: P.component.onClose,
                set: P.component.onSet
              }).on({
                start: SETTINGS.onStart,
                render: SETTINGS.onRender,
                stop: SETTINGS.onStop,
                open: SETTINGS.onOpen,
                close: SETTINGS.onClose,
                set: SETTINGS.onSet
              });
              IS_DEFAULT_THEME = isUsingDefaultTheme(P.$root.children()[0]);
              if (ELEMENT.autofocus) {
                P.open();
              }
              return P.trigger('start').trigger('render');
            },
            render: function(entireComponent) {
              if (entireComponent)
                P.$root.html(createWrappedComponent());
              else
                P.$root.find('.' + CLASSES.box).html(P.component.nodes(STATE.open));
              return P.trigger('render');
            },
            stop: function() {
              if (!STATE.start)
                return P;
              P.close();
              if (P._hidden) {
                P._hidden.parentNode.removeChild(P._hidden);
              }
              P.$root.remove();
              $ELEMENT.removeClass(CLASSES.input).removeData(NAME);
              setTimeout(function() {
                $ELEMENT.off('.' + STATE.id);
              }, 0);
              ELEMENT.type = STATE.type;
              ELEMENT.readOnly = false;
              P.trigger('stop');
              STATE.methods = {};
              STATE.start = false;
              return P;
            },
            open: function(dontGiveFocus) {
              if (STATE.open)
                return P;
              $ELEMENT.addClass(CLASSES.active);
              aria(ELEMENT, 'expanded', true);
              setTimeout(function() {
                P.$root.addClass(CLASSES.opened);
                aria(P.$root[0], 'hidden', false);
              }, 0);
              if (dontGiveFocus !== false) {
                STATE.open = true;
                if (IS_DEFAULT_THEME) {
                  $html.css('overflow', 'hidden').css('padding-right', '+=' + getScrollbarWidth());
                }
                P.$root.eq(0).focus();
                $document.on('click.' + STATE.id + ' focusin.' + STATE.id, function(event) {
                  var target = event.target;
                  if (target != ELEMENT && target != document && event.which != 3) {
                    P.close(target === P.$root.children()[0]);
                  }
                }).on('keydown.' + STATE.id, function(event) {
                  var keycode = event.keyCode,
                      keycodeToMove = P.component.key[keycode],
                      target = event.target;
                  if (keycode == 27) {
                    P.close(true);
                  } else if (target == P.$root[0] && (keycodeToMove || keycode == 13)) {
                    event.preventDefault();
                    if (keycodeToMove) {
                      PickerConstructor._.trigger(P.component.key.go, P, [PickerConstructor._.trigger(keycodeToMove)]);
                    } else if (!P.$root.find('.' + CLASSES.highlighted).hasClass(CLASSES.disabled)) {
                      P.set('select', P.component.item.highlight).close();
                    }
                  } else if ($.contains(P.$root[0], target) && keycode == 13) {
                    event.preventDefault();
                    target.click();
                  }
                });
              }
              return P.trigger('open');
            },
            close: function(giveFocus) {
              if (giveFocus) {
                P.$root.off('focus.toOpen').eq(0).focus();
                setTimeout(function() {
                  P.$root.on('focus.toOpen', handleFocusToOpenEvent);
                }, 0);
              }
              $ELEMENT.removeClass(CLASSES.active);
              aria(ELEMENT, 'expanded', false);
              setTimeout(function() {
                P.$root.removeClass(CLASSES.opened + ' ' + CLASSES.focused);
                aria(P.$root[0], 'hidden', true);
              }, 0);
              if (!STATE.open)
                return P;
              STATE.open = false;
              if (IS_DEFAULT_THEME) {
                $html.css('overflow', '').css('padding-right', '-=' + getScrollbarWidth());
              }
              $document.off('.' + STATE.id);
              return P.trigger('close');
            },
            clear: function(options) {
              return P.set('clear', null, options);
            },
            set: function(thing, value, options) {
              var thingItem,
                  thingValue,
                  thingIsObject = $.isPlainObject(thing),
                  thingObject = thingIsObject ? thing : {};
              options = thingIsObject && $.isPlainObject(value) ? value : options || {};
              if (thing) {
                if (!thingIsObject) {
                  thingObject[thing] = value;
                }
                for (thingItem in thingObject) {
                  thingValue = thingObject[thingItem];
                  if (thingItem in P.component.item) {
                    if (thingValue === undefined)
                      thingValue = null;
                    P.component.set(thingItem, thingValue, options);
                  }
                  if (thingItem == 'select' || thingItem == 'clear') {
                    $ELEMENT.val(thingItem == 'clear' ? '' : P.get(thingItem, SETTINGS.format)).trigger('change');
                  }
                }
                P.render();
              }
              return options.muted ? P : P.trigger('set', thingObject);
            },
            get: function(thing, format) {
              thing = thing || 'value';
              if (STATE[thing] != null) {
                return STATE[thing];
              }
              if (thing == 'valueSubmit') {
                if (P._hidden) {
                  return P._hidden.value;
                }
                thing = 'value';
              }
              if (thing == 'value') {
                return ELEMENT.value;
              }
              if (thing in P.component.item) {
                if (typeof format == 'string') {
                  var thingValue = P.component.get(thing);
                  return thingValue ? PickerConstructor._.trigger(P.component.formats.toString, P.component, [format, thingValue]) : '';
                }
                return P.component.get(thing);
              }
            },
            on: function(thing, method, internal) {
              var thingName,
                  thingMethod,
                  thingIsObject = $.isPlainObject(thing),
                  thingObject = thingIsObject ? thing : {};
              if (thing) {
                if (!thingIsObject) {
                  thingObject[thing] = method;
                }
                for (thingName in thingObject) {
                  thingMethod = thingObject[thingName];
                  if (internal) {
                    thingName = '_' + thingName;
                  }
                  STATE.methods[thingName] = STATE.methods[thingName] || [];
                  STATE.methods[thingName].push(thingMethod);
                }
              }
              return P;
            },
            off: function() {
              var i,
                  thingName,
                  names = arguments;
              for (i = 0, namesCount = names.length; i < namesCount; i += 1) {
                thingName = names[i];
                if (thingName in STATE.methods) {
                  delete STATE.methods[thingName];
                }
              }
              return P;
            },
            trigger: function(name, data) {
              var _trigger = function(name) {
                var methodList = STATE.methods[name];
                if (methodList) {
                  methodList.map(function(method) {
                    PickerConstructor._.trigger(method, P, [data]);
                  });
                }
              };
              _trigger('_' + name);
              _trigger(name);
              return P;
            }
          };
      function createWrappedComponent() {
        return PickerConstructor._.node('div', PickerConstructor._.node('div', PickerConstructor._.node('div', PickerConstructor._.node('div', P.component.nodes(STATE.open), CLASSES.box), CLASSES.wrap), CLASSES.frame), CLASSES.holder);
      }
      function prepareElement() {
        $ELEMENT.data(NAME, P).addClass(CLASSES.input).attr('tabindex', -1).val($ELEMENT.data('value') ? P.get('select', SETTINGS.format) : ELEMENT.value);
        if (!SETTINGS.editable) {
          $ELEMENT.on('focus.' + STATE.id + ' click.' + STATE.id, function(event) {
            event.preventDefault();
            P.$root.eq(0).focus();
          }).on('keydown.' + STATE.id, handleKeydownEvent);
        }
        aria(ELEMENT, {
          haspopup: true,
          expanded: false,
          readonly: false,
          owns: ELEMENT.id + '_root'
        });
      }
      function prepareElementRoot() {
        P.$root.on({
          keydown: handleKeydownEvent,
          focusin: function(event) {
            P.$root.removeClass(CLASSES.focused);
            event.stopPropagation();
          },
          'mousedown click': function(event) {
            var target = event.target;
            if (target != P.$root.children()[0]) {
              event.stopPropagation();
              if (event.type == 'mousedown' && !$(target).is('input, select, textarea, button, option')) {
                event.preventDefault();
                P.$root.eq(0).focus();
              }
            }
          }
        }).on({
          focus: function() {
            $ELEMENT.addClass(CLASSES.target);
          },
          blur: function() {
            $ELEMENT.removeClass(CLASSES.target);
          }
        }).on('focus.toOpen', handleFocusToOpenEvent).on('click', '[data-pick], [data-nav], [data-clear], [data-close]', function() {
          var $target = $(this),
              targetData = $target.data(),
              targetDisabled = $target.hasClass(CLASSES.navDisabled) || $target.hasClass(CLASSES.disabled),
              activeElement = getActiveElement();
          activeElement = activeElement && (activeElement.type || activeElement.href);
          if (targetDisabled || activeElement && !$.contains(P.$root[0], activeElement)) {
            P.$root.eq(0).focus();
          }
          if (!targetDisabled && targetData.nav) {
            P.set('highlight', P.component.item.highlight, {nav: targetData.nav});
          } else if (!targetDisabled && 'pick' in targetData) {
            P.set('select', targetData.pick);
          } else if (targetData.clear) {
            P.clear().close(true);
          } else if (targetData.close) {
            P.close(true);
          }
        });
        aria(P.$root[0], 'hidden', true);
      }
      function prepareElementHidden() {
        var name;
        if (SETTINGS.hiddenName === true) {
          name = ELEMENT.name;
          ELEMENT.name = '';
        } else {
          name = [typeof SETTINGS.hiddenPrefix == 'string' ? SETTINGS.hiddenPrefix : '', typeof SETTINGS.hiddenSuffix == 'string' ? SETTINGS.hiddenSuffix : '_submit'];
          name = name[0] + ELEMENT.name + name[1];
        }
        P._hidden = $('<input ' + 'type=hidden ' + 'name="' + name + '"' + ($ELEMENT.data('value') || ELEMENT.value ? ' value="' + P.get('select', SETTINGS.formatSubmit) + '"' : '') + '>')[0];
        $ELEMENT.on('change.' + STATE.id, function() {
          P._hidden.value = ELEMENT.value ? P.get('select', SETTINGS.formatSubmit) : '';
        });
        if (SETTINGS.container)
          $(SETTINGS.container).append(P._hidden);
        else
          $ELEMENT.after(P._hidden);
      }
      function handleKeydownEvent(event) {
        var keycode = event.keyCode,
            isKeycodeDelete = /^(8|46)$/.test(keycode);
        if (keycode == 27) {
          P.close();
          return false;
        }
        if (keycode == 32 || isKeycodeDelete || !STATE.open && P.component.key[keycode]) {
          event.preventDefault();
          event.stopPropagation();
          if (isKeycodeDelete) {
            P.clear().close();
          } else {
            P.open();
          }
        }
      }
      function handleFocusToOpenEvent(event) {
        event.stopPropagation();
        if (event.type == 'focus') {
          P.$root.addClass(CLASSES.focused);
        }
        P.open();
      }
      return new PickerInstance();
    }
    PickerConstructor.klasses = function(prefix) {
      prefix = prefix || 'picker';
      return {
        picker: prefix,
        opened: prefix + '--opened',
        focused: prefix + '--focused',
        input: prefix + '__input',
        active: prefix + '__input--active',
        target: prefix + '__input--target',
        holder: prefix + '__holder',
        frame: prefix + '__frame',
        wrap: prefix + '__wrap',
        box: prefix + '__box'
      };
    };
    function isUsingDefaultTheme(element) {
      var theme,
          prop = 'position';
      if (element.currentStyle) {
        theme = element.currentStyle[prop];
      } else if (window.getComputedStyle) {
        theme = getComputedStyle(element)[prop];
      }
      return theme == 'fixed';
    }
    function getScrollbarWidth() {
      if ($html.height() <= $window.height()) {
        return 0;
      }
      var $outer = $('<div style="visibility:hidden;width:100px" />').appendTo('body');
      var widthWithoutScroll = $outer[0].offsetWidth;
      $outer.css('overflow', 'scroll');
      var $inner = $('<div style="width:100%" />').appendTo($outer);
      var widthWithScroll = $inner[0].offsetWidth;
      $outer.remove();
      return widthWithoutScroll - widthWithScroll;
    }
    PickerConstructor._ = {
      group: function(groupObject) {
        var loopObjectScope,
            nodesList = '',
            counter = PickerConstructor._.trigger(groupObject.min, groupObject);
        for (; counter <= PickerConstructor._.trigger(groupObject.max, groupObject, [counter]); counter += groupObject.i) {
          loopObjectScope = PickerConstructor._.trigger(groupObject.item, groupObject, [counter]);
          nodesList += PickerConstructor._.node(groupObject.node, loopObjectScope[0], loopObjectScope[1], loopObjectScope[2]);
        }
        return nodesList;
      },
      node: function(wrapper, item, klass, attribute) {
        if (!item)
          return '';
        item = $.isArray(item) ? item.join('') : item;
        klass = klass ? ' class="' + klass + '"' : '';
        attribute = attribute ? ' ' + attribute : '';
        return '<' + wrapper + klass + attribute + '>' + item + '</' + wrapper + '>';
      },
      lead: function(number) {
        return (number < 10 ? '0' : '') + number;
      },
      trigger: function(callback, scope, args) {
        return typeof callback == 'function' ? callback.apply(scope, args || []) : callback;
      },
      digits: function(string) {
        return (/\d/).test(string[1]) ? 2 : 1;
      },
      isDate: function(value) {
        return {}.toString.call(value).indexOf('Date') > -1 && this.isInteger(value.getDate());
      },
      isInteger: function(value) {
        return {}.toString.call(value).indexOf('Number') > -1 && value % 1 === 0;
      },
      ariaAttr: ariaAttr
    };
    PickerConstructor.extend = function(name, Component) {
      $.fn[name] = function(options, action) {
        var componentData = this.data(name);
        if (options == 'picker') {
          return componentData;
        }
        if (componentData && typeof options == 'string') {
          return PickerConstructor._.trigger(componentData[options], componentData, [action]);
        }
        return this.each(function() {
          var $this = $(this);
          if (!$this.data(name)) {
            new PickerConstructor(this, name, Component, options);
          }
        });
      };
      $.fn[name].defaults = Component.defaults;
    };
    function aria(element, attribute, value) {
      if ($.isPlainObject(attribute)) {
        for (var key in attribute) {
          ariaSet(element, key, attribute[key]);
        }
      } else {
        ariaSet(element, attribute, value);
      }
    }
    function ariaSet(element, attribute, value) {
      element.setAttribute((attribute == 'role' ? '' : 'aria-') + attribute, value);
    }
    function ariaAttr(attribute, data) {
      if (!$.isPlainObject(attribute)) {
        attribute = {attribute: data};
      }
      data = '';
      for (var key in attribute) {
        var attr = (key == 'role' ? '' : 'aria-') + key,
            attrVal = attribute[key];
        data += attrVal == null ? '' : attr + '="' + attribute[key] + '"';
      }
      return data;
    }
    function getActiveElement() {
      try {
        return document.activeElement;
      } catch (err) {}
    }
    return PickerConstructor;
  }));
  ;
  (function(factory) {
    if (typeof define == 'function' && define.amd)
      define(['picker', 'jquery'], factory);
    else if (typeof exports == 'object')
      module.exports = factory(require('./picker'), require('jquery'));
    else
      factory(Picker, jQuery);
  }(function(Picker, $) {
    var DAYS_IN_WEEK = 7,
        WEEKS_IN_CALENDAR = 6,
        _ = Picker._;
    function DatePicker(picker, settings) {
      var calendar = this,
          element = picker.$node[0],
          elementValue = element.value,
          elementDataValue = picker.$node.data('value'),
          valueString = elementDataValue || elementValue,
          formatString = elementDataValue ? settings.formatSubmit : settings.format,
          isRTL = function() {
            return element.currentStyle ? element.currentStyle.direction == 'rtl' : getComputedStyle(picker.$root[0]).direction == 'rtl';
          };
      calendar.settings = settings;
      calendar.$node = picker.$node;
      calendar.queue = {
        min: 'measure create',
        max: 'measure create',
        now: 'now create',
        select: 'parse create validate',
        highlight: 'parse navigate create validate',
        view: 'parse create validate viewset',
        disable: 'deactivate',
        enable: 'activate'
      };
      calendar.item = {};
      calendar.item.clear = null;
      calendar.item.disable = (settings.disable || []).slice(0);
      calendar.item.enable = -(function(collectionDisabled) {
        return collectionDisabled[0] === true ? collectionDisabled.shift() : -1;
      })(calendar.item.disable);
      calendar.set('min', settings.min).set('max', settings.max).set('now');
      if (valueString) {
        calendar.set('select', valueString, {format: formatString});
      } else {
        calendar.set('select', null).set('highlight', calendar.item.now);
      }
      calendar.key = {
        40: 7,
        38: -7,
        39: function() {
          return isRTL() ? -1 : 1;
        },
        37: function() {
          return isRTL() ? 1 : -1;
        },
        go: function(timeChange) {
          var highlightedObject = calendar.item.highlight,
              targetDate = new Date(highlightedObject.year, highlightedObject.month, highlightedObject.date + timeChange);
          calendar.set('highlight', targetDate, {interval: timeChange});
          this.render();
        }
      };
      picker.on('render', function() {
        picker.$root.find('.' + settings.klass.selectMonth).on('change', function() {
          var value = this.value;
          if (value) {
            picker.set('highlight', [picker.get('view').year, value, picker.get('highlight').date]);
            picker.$root.find('.' + settings.klass.selectMonth).trigger('focus');
          }
        });
        picker.$root.find('.' + settings.klass.selectYear).on('change', function() {
          var value = this.value;
          if (value) {
            picker.set('highlight', [value, picker.get('view').month, picker.get('highlight').date]);
            picker.$root.find('.' + settings.klass.selectYear).trigger('focus');
          }
        });
      }, 1).on('open', function() {
        var includeToday = '';
        if (calendar.disabled(calendar.get('now'))) {
          includeToday = ':not(.' + settings.klass.buttonToday + ')';
        }
        picker.$root.find('button' + includeToday + ', select').attr('disabled', false);
      }, 1).on('close', function() {
        picker.$root.find('button, select').attr('disabled', true);
      }, 1);
    }
    DatePicker.prototype.set = function(type, value, options) {
      var calendar = this,
          calendarItem = calendar.item;
      if (value === null) {
        if (type == 'clear')
          type = 'select';
        calendarItem[type] = value;
        return calendar;
      }
      calendarItem[(type == 'enable' ? 'disable' : type == 'flip' ? 'enable' : type)] = calendar.queue[type].split(' ').map(function(method) {
        value = calendar[method](type, value, options);
        return value;
      }).pop();
      if (type == 'select') {
        calendar.set('highlight', calendarItem.select, options);
      } else if (type == 'highlight') {
        calendar.set('view', calendarItem.highlight, options);
      } else if (type.match(/^(flip|min|max|disable|enable)$/)) {
        if (calendarItem.select && calendar.disabled(calendarItem.select)) {
          calendar.set('select', calendarItem.select, options);
        }
        if (calendarItem.highlight && calendar.disabled(calendarItem.highlight)) {
          calendar.set('highlight', calendarItem.highlight, options);
        }
      }
      return calendar;
    };
    DatePicker.prototype.get = function(type) {
      return this.item[type];
    };
    DatePicker.prototype.create = function(type, value, options) {
      var isInfiniteValue,
          calendar = this;
      value = value === undefined ? type : value;
      if (value == -Infinity || value == Infinity) {
        isInfiniteValue = value;
      } else if ($.isPlainObject(value) && _.isInteger(value.pick)) {
        value = value.obj;
      } else if ($.isArray(value)) {
        value = new Date(value[0], value[1], value[2]);
        value = _.isDate(value) ? value : calendar.create().obj;
      } else if (_.isInteger(value) || _.isDate(value)) {
        value = calendar.normalize(new Date(value), options);
      } else {
        value = calendar.now(type, value, options);
      }
      return {
        year: isInfiniteValue || value.getFullYear(),
        month: isInfiniteValue || value.getMonth(),
        date: isInfiniteValue || value.getDate(),
        day: isInfiniteValue || value.getDay(),
        obj: isInfiniteValue || value,
        pick: isInfiniteValue || value.getTime()
      };
    };
    DatePicker.prototype.createRange = function(from, to) {
      var calendar = this,
          createDate = function(date) {
            if (date === true || $.isArray(date) || _.isDate(date)) {
              return calendar.create(date);
            }
            return date;
          };
      if (!_.isInteger(from)) {
        from = createDate(from);
      }
      if (!_.isInteger(to)) {
        to = createDate(to);
      }
      if (_.isInteger(from) && $.isPlainObject(to)) {
        from = [to.year, to.month, to.date + from];
      } else if (_.isInteger(to) && $.isPlainObject(from)) {
        to = [from.year, from.month, from.date + to];
      }
      return {
        from: createDate(from),
        to: createDate(to)
      };
    };
    DatePicker.prototype.withinRange = function(range, dateUnit) {
      range = this.createRange(range.from, range.to);
      return dateUnit.pick >= range.from.pick && dateUnit.pick <= range.to.pick;
    };
    DatePicker.prototype.overlapRanges = function(one, two) {
      var calendar = this;
      one = calendar.createRange(one.from, one.to);
      two = calendar.createRange(two.from, two.to);
      return calendar.withinRange(one, two.from) || calendar.withinRange(one, two.to) || calendar.withinRange(two, one.from) || calendar.withinRange(two, one.to);
    };
    DatePicker.prototype.now = function(type, value, options) {
      value = new Date();
      if (options && options.rel) {
        value.setDate(value.getDate() + options.rel);
      }
      return this.normalize(value, options);
    };
    DatePicker.prototype.navigate = function(type, value, options) {
      var targetDateObject,
          targetYear,
          targetMonth,
          targetDate,
          isTargetArray = $.isArray(value),
          isTargetObject = $.isPlainObject(value),
          viewsetObject = this.item.view;
      if (isTargetArray || isTargetObject) {
        if (isTargetObject) {
          targetYear = value.year;
          targetMonth = value.month;
          targetDate = value.date;
        } else {
          targetYear = +value[0];
          targetMonth = +value[1];
          targetDate = +value[2];
        }
        if (options && options.nav && viewsetObject && viewsetObject.month !== targetMonth) {
          targetYear = viewsetObject.year;
          targetMonth = viewsetObject.month;
        }
        targetDateObject = new Date(targetYear, targetMonth + (options && options.nav ? options.nav : 0), 1);
        targetYear = targetDateObject.getFullYear();
        targetMonth = targetDateObject.getMonth();
        while (new Date(targetYear, targetMonth, targetDate).getMonth() !== targetMonth) {
          targetDate -= 1;
        }
        value = [targetYear, targetMonth, targetDate];
      }
      return value;
    };
    DatePicker.prototype.normalize = function(value) {
      value.setHours(0, 0, 0, 0);
      return value;
    };
    DatePicker.prototype.measure = function(type, value) {
      var calendar = this;
      if (!value) {
        value = type == 'min' ? -Infinity : Infinity;
      } else if (typeof value == 'string') {
        value = calendar.parse(type, value);
      } else if (_.isInteger(value)) {
        value = calendar.now(type, value, {rel: value});
      }
      return value;
    };
    DatePicker.prototype.viewset = function(type, dateObject) {
      return this.create([dateObject.year, dateObject.month, 1]);
    };
    DatePicker.prototype.validate = function(type, dateObject, options) {
      var calendar = this,
          originalDateObject = dateObject,
          interval = options && options.interval ? options.interval : 1,
          isFlippedBase = calendar.item.enable === -1,
          hasEnabledBeforeTarget,
          hasEnabledAfterTarget,
          minLimitObject = calendar.item.min,
          maxLimitObject = calendar.item.max,
          reachedMin,
          reachedMax,
          hasEnabledWeekdays = isFlippedBase && calendar.item.disable.filter(function(value) {
            if ($.isArray(value)) {
              var dateTime = calendar.create(value).pick;
              if (dateTime < dateObject.pick)
                hasEnabledBeforeTarget = true;
              else if (dateTime > dateObject.pick)
                hasEnabledAfterTarget = true;
            }
            return _.isInteger(value);
          }).length;
      if (!options || !options.nav)
        if ((!isFlippedBase && calendar.disabled(dateObject)) || (isFlippedBase && calendar.disabled(dateObject) && (hasEnabledWeekdays || hasEnabledBeforeTarget || hasEnabledAfterTarget)) || (!isFlippedBase && (dateObject.pick <= minLimitObject.pick || dateObject.pick >= maxLimitObject.pick))) {
          if (isFlippedBase && !hasEnabledWeekdays && ((!hasEnabledAfterTarget && interval > 0) || (!hasEnabledBeforeTarget && interval < 0))) {
            interval *= -1;
          }
          while (calendar.disabled(dateObject)) {
            if (Math.abs(interval) > 1 && (dateObject.month < originalDateObject.month || dateObject.month > originalDateObject.month)) {
              dateObject = originalDateObject;
              interval = interval > 0 ? 1 : -1;
            }
            if (dateObject.pick <= minLimitObject.pick) {
              reachedMin = true;
              interval = 1;
              dateObject = calendar.create([minLimitObject.year, minLimitObject.month, minLimitObject.date + (dateObject.pick === minLimitObject.pick ? 0 : -1)]);
            } else if (dateObject.pick >= maxLimitObject.pick) {
              reachedMax = true;
              interval = -1;
              dateObject = calendar.create([maxLimitObject.year, maxLimitObject.month, maxLimitObject.date + (dateObject.pick === maxLimitObject.pick ? 0 : 1)]);
            }
            if (reachedMin && reachedMax) {
              break;
            }
            dateObject = calendar.create([dateObject.year, dateObject.month, dateObject.date + interval]);
          }
        }
      return dateObject;
    };
    DatePicker.prototype.disabled = function(dateToVerify) {
      var calendar = this,
          isDisabledMatch = calendar.item.disable.filter(function(dateToDisable) {
            if (_.isInteger(dateToDisable)) {
              return dateToVerify.day === (calendar.settings.firstDay ? dateToDisable : dateToDisable - 1) % 7;
            }
            if ($.isArray(dateToDisable) || _.isDate(dateToDisable)) {
              return dateToVerify.pick === calendar.create(dateToDisable).pick;
            }
            if ($.isPlainObject(dateToDisable)) {
              return calendar.withinRange(dateToDisable, dateToVerify);
            }
          });
      isDisabledMatch = isDisabledMatch.length && !isDisabledMatch.filter(function(dateToDisable) {
        return $.isArray(dateToDisable) && dateToDisable[3] == 'inverted' || $.isPlainObject(dateToDisable) && dateToDisable.inverted;
      }).length;
      return calendar.item.enable === -1 ? !isDisabledMatch : isDisabledMatch || dateToVerify.pick < calendar.item.min.pick || dateToVerify.pick > calendar.item.max.pick;
    };
    DatePicker.prototype.parse = function(type, value, options) {
      var calendar = this,
          parsingObject = {};
      if (!value || typeof value != 'string') {
        return value;
      }
      if (!(options && options.format)) {
        options = options || {};
        options.format = calendar.settings.format;
      }
      calendar.formats.toArray(options.format).map(function(label) {
        var formattingLabel = calendar.formats[label],
            formatLength = formattingLabel ? _.trigger(formattingLabel, calendar, [value, parsingObject]) : label.replace(/^!/, '').length;
        if (formattingLabel) {
          parsingObject[label] = value.substr(0, formatLength);
        }
        value = value.substr(formatLength);
      });
      return [parsingObject.yyyy || parsingObject.yy, +(parsingObject.mm || parsingObject.m) - 1, parsingObject.dd || parsingObject.d];
    };
    DatePicker.prototype.formats = (function() {
      function getWordLengthFromCollection(string, collection, dateObject) {
        var word = string.match(/\w+/)[0];
        if (!dateObject.mm && !dateObject.m) {
          dateObject.m = collection.indexOf(word) + 1;
        }
        return word.length;
      }
      function getFirstWordLength(string) {
        return string.match(/\w+/)[0].length;
      }
      return {
        d: function(string, dateObject) {
          return string ? _.digits(string) : dateObject.date;
        },
        dd: function(string, dateObject) {
          return string ? 2 : _.lead(dateObject.date);
        },
        ddd: function(string, dateObject) {
          return string ? getFirstWordLength(string) : this.settings.weekdaysShort[dateObject.day];
        },
        dddd: function(string, dateObject) {
          return string ? getFirstWordLength(string) : this.settings.weekdaysFull[dateObject.day];
        },
        m: function(string, dateObject) {
          return string ? _.digits(string) : dateObject.month + 1;
        },
        mm: function(string, dateObject) {
          return string ? 2 : _.lead(dateObject.month + 1);
        },
        mmm: function(string, dateObject) {
          var collection = this.settings.monthsShort;
          return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
        },
        mmmm: function(string, dateObject) {
          var collection = this.settings.monthsFull;
          return string ? getWordLengthFromCollection(string, collection, dateObject) : collection[dateObject.month];
        },
        yy: function(string, dateObject) {
          return string ? 2 : ('' + dateObject.year).slice(2);
        },
        yyyy: function(string, dateObject) {
          return string ? 4 : dateObject.year;
        },
        toArray: function(formatString) {
          return formatString.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        },
        toString: function(formatString, itemObject) {
          var calendar = this;
          return calendar.formats.toArray(formatString).map(function(label) {
            return _.trigger(calendar.formats[label], calendar, [0, itemObject]) || label.replace(/^!/, '');
          }).join('');
        }
      };
    })();
    DatePicker.prototype.isDateExact = function(one, two) {
      var calendar = this;
      if ((_.isInteger(one) && _.isInteger(two)) || (typeof one == 'boolean' && typeof two == 'boolean')) {
        return one === two;
      }
      if ((_.isDate(one) || $.isArray(one)) && (_.isDate(two) || $.isArray(two))) {
        return calendar.create(one).pick === calendar.create(two).pick;
      }
      if ($.isPlainObject(one) && $.isPlainObject(two)) {
        return calendar.isDateExact(one.from, two.from) && calendar.isDateExact(one.to, two.to);
      }
      return false;
    };
    DatePicker.prototype.isDateOverlap = function(one, two) {
      var calendar = this,
          firstDay = calendar.settings.firstDay ? 1 : 0;
      if (_.isInteger(one) && (_.isDate(two) || $.isArray(two))) {
        one = one % 7 + firstDay;
        return one === calendar.create(two).day + 1;
      }
      if (_.isInteger(two) && (_.isDate(one) || $.isArray(one))) {
        two = two % 7 + firstDay;
        return two === calendar.create(one).day + 1;
      }
      if ($.isPlainObject(one) && $.isPlainObject(two)) {
        return calendar.overlapRanges(one, two);
      }
      return false;
    };
    DatePicker.prototype.flipEnable = function(val) {
      var itemObject = this.item;
      itemObject.enable = val || (itemObject.enable == -1 ? 1 : -1);
    };
    DatePicker.prototype.deactivate = function(type, datesToDisable) {
      var calendar = this,
          disabledItems = calendar.item.disable.slice(0);
      if (datesToDisable == 'flip') {
        calendar.flipEnable();
      } else if (datesToDisable === false) {
        calendar.flipEnable(1);
        disabledItems = [];
      } else if (datesToDisable === true) {
        calendar.flipEnable(-1);
        disabledItems = [];
      } else {
        datesToDisable.map(function(unitToDisable) {
          var matchFound;
          for (var index = 0; index < disabledItems.length; index += 1) {
            if (calendar.isDateExact(unitToDisable, disabledItems[index])) {
              matchFound = true;
              break;
            }
          }
          if (!matchFound) {
            if (_.isInteger(unitToDisable) || _.isDate(unitToDisable) || $.isArray(unitToDisable) || ($.isPlainObject(unitToDisable) && unitToDisable.from && unitToDisable.to)) {
              disabledItems.push(unitToDisable);
            }
          }
        });
      }
      return disabledItems;
    };
    DatePicker.prototype.activate = function(type, datesToEnable) {
      var calendar = this,
          disabledItems = calendar.item.disable,
          disabledItemsCount = disabledItems.length;
      if (datesToEnable == 'flip') {
        calendar.flipEnable();
      } else if (datesToEnable === true) {
        calendar.flipEnable(1);
        disabledItems = [];
      } else if (datesToEnable === false) {
        calendar.flipEnable(-1);
        disabledItems = [];
      } else {
        datesToEnable.map(function(unitToEnable) {
          var matchFound,
              disabledUnit,
              index,
              isExactRange;
          for (index = 0; index < disabledItemsCount; index += 1) {
            disabledUnit = disabledItems[index];
            if (calendar.isDateExact(disabledUnit, unitToEnable)) {
              matchFound = disabledItems[index] = null;
              isExactRange = true;
              break;
            } else if (calendar.isDateOverlap(disabledUnit, unitToEnable)) {
              if ($.isPlainObject(unitToEnable)) {
                unitToEnable.inverted = true;
                matchFound = unitToEnable;
              } else if ($.isArray(unitToEnable)) {
                matchFound = unitToEnable;
                if (!matchFound[3])
                  matchFound.push('inverted');
              } else if (_.isDate(unitToEnable)) {
                matchFound = [unitToEnable.getFullYear(), unitToEnable.getMonth(), unitToEnable.getDate(), 'inverted'];
              }
              break;
            }
          }
          if (matchFound)
            for (index = 0; index < disabledItemsCount; index += 1) {
              if (calendar.isDateExact(disabledItems[index], unitToEnable)) {
                disabledItems[index] = null;
                break;
              }
            }
          if (isExactRange)
            for (index = 0; index < disabledItemsCount; index += 1) {
              if (calendar.isDateOverlap(disabledItems[index], unitToEnable)) {
                disabledItems[index] = null;
                break;
              }
            }
          if (matchFound) {
            disabledItems.push(matchFound);
          }
        });
      }
      return disabledItems.filter(function(val) {
        return val != null;
      });
    };
    DatePicker.prototype.nodes = function(isOpen) {
      var calendar = this,
          settings = calendar.settings,
          calendarItem = calendar.item,
          nowObject = calendarItem.now,
          selectedObject = calendarItem.select,
          highlightedObject = calendarItem.highlight,
          viewsetObject = calendarItem.view,
          disabledCollection = calendarItem.disable,
          minLimitObject = calendarItem.min,
          maxLimitObject = calendarItem.max,
          tableHead = (function(collection, fullCollection) {
            if (settings.firstDay) {
              collection.push(collection.shift());
              fullCollection.push(fullCollection.shift());
            }
            return _.node('thead', _.node('tr', _.group({
              min: 0,
              max: DAYS_IN_WEEK - 1,
              i: 1,
              node: 'th',
              item: function(counter) {
                return [collection[counter], settings.klass.weekdays, 'scope=col title="' + fullCollection[counter] + '"'];
              }
            })));
          })((settings.showWeekdaysFull ? settings.weekdaysFull : settings.weekdaysLetter).slice(0), settings.weekdaysFull.slice(0)),
          createMonthNav = function(next) {
            return _.node('div', ' ', settings.klass['nav' + (next ? 'Next' : 'Prev')] + ((next && viewsetObject.year >= maxLimitObject.year && viewsetObject.month >= maxLimitObject.month) || (!next && viewsetObject.year <= minLimitObject.year && viewsetObject.month <= minLimitObject.month) ? ' ' + settings.klass.navDisabled : ''), 'data-nav=' + (next || -1) + ' ' + _.ariaAttr({
              role: 'button',
              controls: calendar.$node[0].id + '_table'
            }) + ' ' + 'title="' + (next ? settings.labelMonthNext : settings.labelMonthPrev) + '"');
          },
          createMonthLabel = function(override) {
            var monthsCollection = settings.showMonthsShort ? settings.monthsShort : settings.monthsFull;
            if (override == "short_months") {
              monthsCollection = settings.monthsShort;
            }
            if (settings.selectMonths && override == undefined) {
              return _.node('select', _.group({
                min: 0,
                max: 11,
                i: 1,
                node: 'option',
                item: function(loopedMonth) {
                  return [monthsCollection[loopedMonth], 0, 'value=' + loopedMonth + (viewsetObject.month == loopedMonth ? ' selected' : '') + (((viewsetObject.year == minLimitObject.year && loopedMonth < minLimitObject.month) || (viewsetObject.year == maxLimitObject.year && loopedMonth > maxLimitObject.month)) ? ' disabled' : '')];
                }
              }), settings.klass.selectMonth + ' browser-default', (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id + '_table'}) + ' ' + 'title="' + settings.labelMonthSelect + '"');
            }
            if (override == "short_months")
              if (selectedObject != null)
                return _.node('div', monthsCollection[selectedObject.month]);
              else
                return _.node('div', monthsCollection[viewsetObject.month]);
            return _.node('div', monthsCollection[viewsetObject.month], settings.klass.month);
          },
          createYearLabel = function(override) {
            var focusedYear = viewsetObject.year,
                numberYears = settings.selectYears === true ? 5 : ~~(settings.selectYears / 2);
            if (numberYears) {
              var minYear = minLimitObject.year,
                  maxYear = maxLimitObject.year,
                  lowestYear = focusedYear - numberYears,
                  highestYear = focusedYear + numberYears;
              if (minYear > lowestYear) {
                highestYear += minYear - lowestYear;
                lowestYear = minYear;
              }
              if (maxYear < highestYear) {
                var availableYears = lowestYear - minYear,
                    neededYears = highestYear - maxYear;
                lowestYear -= availableYears > neededYears ? neededYears : availableYears;
                highestYear = maxYear;
              }
              if (settings.selectYears && override == undefined) {
                return _.node('select', _.group({
                  min: lowestYear,
                  max: highestYear,
                  i: 1,
                  node: 'option',
                  item: function(loopedYear) {
                    return [loopedYear, 0, 'value=' + loopedYear + (focusedYear == loopedYear ? ' selected' : '')];
                  }
                }), settings.klass.selectYear + ' browser-default', (isOpen ? '' : 'disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id + '_table'}) + ' ' + 'title="' + settings.labelYearSelect + '"');
              }
            }
            if (override == "raw")
              return _.node('div', focusedYear);
            return _.node('div', focusedYear, settings.klass.year);
          };
      createDayLabel = function() {
        if (selectedObject != null)
          return _.node('div', selectedObject.date);
        else
          return _.node('div', nowObject.date);
      };
      createWeekdayLabel = function() {
        var display_day;
        if (selectedObject != null)
          display_day = selectedObject.day;
        else
          display_day = nowObject.day;
        var weekday = settings.weekdaysFull[display_day];
        return weekday;
      };
      return _.node('div', _.node('div', createWeekdayLabel(), "picker__weekday-display") + _.node('div', createMonthLabel("short_months"), settings.klass.month_display) + _.node('div', createDayLabel(), settings.klass.day_display) + _.node('div', createYearLabel("raw"), settings.klass.year_display), settings.klass.date_display) + _.node('div', _.node('div', (settings.selectYears ? createMonthLabel() + createYearLabel() : createMonthLabel() + createYearLabel()) + createMonthNav() + createMonthNav(1), settings.klass.header) + _.node('table', tableHead + _.node('tbody', _.group({
        min: 0,
        max: WEEKS_IN_CALENDAR - 1,
        i: 1,
        node: 'tr',
        item: function(rowCounter) {
          var shiftDateBy = settings.firstDay && calendar.create([viewsetObject.year, viewsetObject.month, 1]).day === 0 ? -7 : 0;
          return [_.group({
            min: DAYS_IN_WEEK * rowCounter - viewsetObject.day + shiftDateBy + 1,
            max: function() {
              return this.min + DAYS_IN_WEEK - 1;
            },
            i: 1,
            node: 'td',
            item: function(targetDate) {
              targetDate = calendar.create([viewsetObject.year, viewsetObject.month, targetDate + (settings.firstDay ? 1 : 0)]);
              var isSelected = selectedObject && selectedObject.pick == targetDate.pick,
                  isHighlighted = highlightedObject && highlightedObject.pick == targetDate.pick,
                  isDisabled = disabledCollection && calendar.disabled(targetDate) || targetDate.pick < minLimitObject.pick || targetDate.pick > maxLimitObject.pick,
                  formattedDate = _.trigger(calendar.formats.toString, calendar, [settings.format, targetDate]);
              return [_.node('div', targetDate.date, (function(klasses) {
                klasses.push(viewsetObject.month == targetDate.month ? settings.klass.infocus : settings.klass.outfocus);
                if (nowObject.pick == targetDate.pick) {
                  klasses.push(settings.klass.now);
                }
                if (isSelected) {
                  klasses.push(settings.klass.selected);
                }
                if (isHighlighted) {
                  klasses.push(settings.klass.highlighted);
                }
                if (isDisabled) {
                  klasses.push(settings.klass.disabled);
                }
                return klasses.join(' ');
              })([settings.klass.day]), 'data-pick=' + targetDate.pick + ' ' + _.ariaAttr({
                role: 'gridcell',
                label: formattedDate,
                selected: isSelected && calendar.$node.val() === formattedDate ? true : null,
                activedescendant: isHighlighted ? true : null,
                disabled: isDisabled ? true : null
              })), '', _.ariaAttr({role: 'presentation'})];
            }
          })];
        }
      })), settings.klass.table, 'id="' + calendar.$node[0].id + '_table' + '" ' + _.ariaAttr({
        role: 'grid',
        controls: calendar.$node[0].id,
        readonly: true
      })), settings.klass.calendar_container) + _.node('div', _.node('button', settings.today, "btn-flat picker__today", 'type=button data-pick=' + nowObject.pick + (isOpen && !calendar.disabled(nowObject) ? '' : ' disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id})) + _.node('button', settings.clear, "btn-flat picker__clear", 'type=button data-clear=1' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id})) + _.node('button', settings.close, "btn-flat picker__close", 'type=button data-close=true ' + (isOpen ? '' : ' disabled') + ' ' + _.ariaAttr({controls: calendar.$node[0].id})), settings.klass.footer);
    };
    DatePicker.defaults = (function(prefix) {
      return {
        labelMonthNext: 'Next month',
        labelMonthPrev: 'Previous month',
        labelMonthSelect: 'Select a month',
        labelYearSelect: 'Select a year',
        monthsFull: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        monthsShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        weekdaysFull: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        weekdaysLetter: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        today: 'Today',
        clear: 'Clear',
        close: 'Close',
        format: 'd mmmm, yyyy',
        klass: {
          table: prefix + 'table',
          header: prefix + 'header',
          date_display: prefix + 'date-display',
          day_display: prefix + 'day-display',
          month_display: prefix + 'month-display',
          year_display: prefix + 'year-display',
          calendar_container: prefix + 'calendar-container',
          navPrev: prefix + 'nav--prev',
          navNext: prefix + 'nav--next',
          navDisabled: prefix + 'nav--disabled',
          month: prefix + 'month',
          year: prefix + 'year',
          selectMonth: prefix + 'select--month',
          selectYear: prefix + 'select--year',
          weekdays: prefix + 'weekday',
          day: prefix + 'day',
          disabled: prefix + 'day--disabled',
          selected: prefix + 'day--selected',
          highlighted: prefix + 'day--highlighted',
          now: prefix + 'day--today',
          infocus: prefix + 'day--infocus',
          outfocus: prefix + 'day--outfocus',
          footer: prefix + 'footer',
          buttonClear: prefix + 'button--clear',
          buttonToday: prefix + 'button--today',
          buttonClose: prefix + 'button--close'
        }
      };
    })(Picker.klasses().picker + '__');
    Picker.extend('pickadate', DatePicker);
  }));
  ;
  (function($) {
    $.fn.characterCounter = function() {
      return this.each(function() {
        var $input = $(this);
        var $counterElement = $input.parent().find('span[class="character-counter"]');
        if ($counterElement.length) {
          return;
        }
        var itHasLengthAttribute = $input.attr('data-length') !== undefined;
        if (itHasLengthAttribute) {
          $input.on('input', updateCounter);
          $input.on('focus', updateCounter);
          $input.on('blur', removeCounterElement);
          addCounterElement($input);
        }
      });
    };
    function updateCounter() {
      var maxLength = +$(this).attr('data-length'),
          actualLength = +$(this).val().length,
          isValidLength = actualLength <= maxLength;
      $(this).parent().find('span[class="character-counter"]').html(actualLength + '/' + maxLength);
      addInputStyle(isValidLength, $(this));
    }
    function addCounterElement($input) {
      var $counterElement = $input.parent().find('span[class="character-counter"]');
      if ($counterElement.length) {
        return;
      }
      $counterElement = $('<span/>').addClass('character-counter').css('float', 'right').css('font-size', '12px').css('height', 1);
      $input.parent().append($counterElement);
    }
    function removeCounterElement() {
      $(this).parent().find('span[class="character-counter"]').html('');
    }
    function addInputStyle(isValidLength, $input) {
      var inputHasInvalidClass = $input.hasClass('invalid');
      if (isValidLength && inputHasInvalidClass) {
        $input.removeClass('invalid');
      } else if (!isValidLength && !inputHasInvalidClass) {
        $input.removeClass('valid');
        $input.addClass('invalid');
      }
    }
    $(document).ready(function() {
      $('input, textarea').characterCounter();
    });
  }(jQuery));
  ;
  (function($) {
    var methods = {
      init: function(options) {
        var defaults = {
          duration: 200,
          dist: -100,
          shift: 0,
          padding: 0,
          fullWidth: false,
          indicators: false,
          noWrap: false,
          onCycleTo: null
        };
        options = $.extend(defaults, options);
        return this.each(function() {
          var images,
              item_width,
              item_height,
              offset,
              center,
              pressed,
              dim,
              count,
              reference,
              referenceY,
              amplitude,
              target,
              velocity,
              xform,
              frame,
              timestamp,
              ticker,
              dragged,
              vertical_dragged;
          var $indicators = $('<ul class="indicators"></ul>');
          var view = $(this);
          var showIndicators = view.attr('data-indicators') || options.indicators;
          if (view.hasClass('initialized')) {
            $(this).trigger('carouselNext', [0.000001]);
            return true;
          }
          if (options.fullWidth) {
            options.dist = 0;
            var firstImage = view.find('.carousel-item img').first();
            if (firstImage.length) {
              imageHeight = firstImage.on('load', function() {
                view.css('height', $(this).height());
              });
            } else {
              imageHeight = view.find('.carousel-item').first().height();
              view.css('height', imageHeight);
            }
            if (showIndicators) {
              view.find('.carousel-fixed-item').addClass('with-indicators');
            }
          }
          view.addClass('initialized');
          pressed = false;
          offset = target = 0;
          images = [];
          item_width = view.find('.carousel-item').first().innerWidth();
          item_height = view.find('.carousel-item').first().innerHeight();
          dim = item_width * 2 + options.padding;
          view.find('.carousel-item').each(function(i) {
            images.push($(this)[0]);
            if (showIndicators) {
              var $indicator = $('<li class="indicator-item"></li>');
              if (i === 0) {
                $indicator.addClass('active');
              }
              $indicator.click(function(e) {
                e.stopPropagation();
                var index = $(this).index();
                cycleTo(index);
              });
              $indicators.append($indicator);
            }
          });
          if (showIndicators) {
            view.append($indicators);
          }
          count = images.length;
          function setupEvents() {
            if (typeof window.ontouchstart !== 'undefined') {
              view[0].addEventListener('touchstart', tap);
              view[0].addEventListener('touchmove', drag);
              view[0].addEventListener('touchend', release);
            }
            view[0].addEventListener('mousedown', tap);
            view[0].addEventListener('mousemove', drag);
            view[0].addEventListener('mouseup', release);
            view[0].addEventListener('mouseleave', release);
            view[0].addEventListener('click', click);
          }
          function xpos(e) {
            if (e.targetTouches && (e.targetTouches.length >= 1)) {
              return e.targetTouches[0].clientX;
            }
            return e.clientX;
          }
          function ypos(e) {
            if (e.targetTouches && (e.targetTouches.length >= 1)) {
              return e.targetTouches[0].clientY;
            }
            return e.clientY;
          }
          function wrap(x) {
            return (x >= count) ? (x % count) : (x < 0) ? wrap(count + (x % count)) : x;
          }
          function scroll(x) {
            var i,
                half,
                delta,
                dir,
                tween,
                el,
                alignment,
                xTranslation;
            var lastCenter = center;
            offset = (typeof x === 'number') ? x : offset;
            center = Math.floor((offset + dim / 2) / dim);
            delta = offset - center * dim;
            dir = (delta < 0) ? 1 : -1;
            tween = -dir * delta * 2 / dim;
            half = count >> 1;
            if (!options.fullWidth) {
              alignment = 'translateX(' + (view[0].clientWidth - item_width) / 2 + 'px) ';
              alignment += 'translateY(' + (view[0].clientHeight - item_height) / 2 + 'px)';
            } else {
              alignment = 'translateX(0)';
            }
            if (showIndicators) {
              var diff = (center % count);
              var activeIndicator = $indicators.find('.indicator-item.active');
              if (activeIndicator.index() !== diff) {
                activeIndicator.removeClass('active');
                $indicators.find('.indicator-item').eq(diff).addClass('active');
              }
            }
            if (!options.noWrap || (center >= 0 && center < count)) {
              el = images[wrap(center)];
              if (!$(el).hasClass('active')) {
                view.find('.carousel-item').removeClass('active');
                $(el).addClass('active');
              }
              el.style[xform] = alignment + ' translateX(' + (-delta / 2) + 'px)' + ' translateX(' + (dir * options.shift * tween * i) + 'px)' + ' translateZ(' + (options.dist * tween) + 'px)';
              el.style.zIndex = 0;
              if (options.fullWidth) {
                tweenedOpacity = 1;
              } else {
                tweenedOpacity = 1 - 0.2 * tween;
              }
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
            for (i = 1; i <= half; ++i) {
              if (options.fullWidth) {
                zTranslation = options.dist;
                tweenedOpacity = (i === half && delta < 0) ? 1 - tween : 1;
              } else {
                zTranslation = options.dist * (i * 2 + tween * dir);
                tweenedOpacity = 1 - 0.2 * (i * 2 + tween * dir);
              }
              if (!options.noWrap || center + i < count) {
                el = images[wrap(center + i)];
                el.style[xform] = alignment + ' translateX(' + (options.shift + (dim * i - delta) / 2) + 'px)' + ' translateZ(' + zTranslation + 'px)';
                el.style.zIndex = -i;
                el.style.opacity = tweenedOpacity;
                el.style.display = 'block';
              }
              if (options.fullWidth) {
                zTranslation = options.dist;
                tweenedOpacity = (i === half && delta > 0) ? 1 - tween : 1;
              } else {
                zTranslation = options.dist * (i * 2 - tween * dir);
                tweenedOpacity = 1 - 0.2 * (i * 2 - tween * dir);
              }
              if (!options.noWrap || center - i >= 0) {
                el = images[wrap(center - i)];
                el.style[xform] = alignment + ' translateX(' + (-options.shift + (-dim * i - delta) / 2) + 'px)' + ' translateZ(' + zTranslation + 'px)';
                el.style.zIndex = -i;
                el.style.opacity = tweenedOpacity;
                el.style.display = 'block';
              }
            }
            if (!options.noWrap || (center >= 0 && center < count)) {
              el = images[wrap(center)];
              el.style[xform] = alignment + ' translateX(' + (-delta / 2) + 'px)' + ' translateX(' + (dir * options.shift * tween) + 'px)' + ' translateZ(' + (options.dist * tween) + 'px)';
              el.style.zIndex = 0;
              if (options.fullWidth) {
                tweenedOpacity = 1;
              } else {
                tweenedOpacity = 1 - 0.2 * tween;
              }
              el.style.opacity = tweenedOpacity;
              el.style.display = 'block';
            }
            if (lastCenter !== center && typeof(options.onCycleTo) === "function") {
              var $curr_item = view.find('.carousel-item').eq(wrap(center));
              options.onCycleTo.call(this, $curr_item, dragged);
            }
          }
          function track() {
            var now,
                elapsed,
                delta,
                v;
            now = Date.now();
            elapsed = now - timestamp;
            timestamp = now;
            delta = offset - frame;
            frame = offset;
            v = 1000 * delta / (1 + elapsed);
            velocity = 0.8 * v + 0.2 * velocity;
          }
          function autoScroll() {
            var elapsed,
                delta;
            if (amplitude) {
              elapsed = Date.now() - timestamp;
              delta = amplitude * Math.exp(-elapsed / options.duration);
              if (delta > 2 || delta < -2) {
                scroll(target - delta);
                requestAnimationFrame(autoScroll);
              } else {
                scroll(target);
              }
            }
          }
          function click(e) {
            if (dragged) {
              e.preventDefault();
              e.stopPropagation();
              return false;
            } else if (!options.fullWidth) {
              var clickedIndex = $(e.target).closest('.carousel-item').index();
              var diff = (center % count) - clickedIndex;
              if (diff !== 0) {
                e.preventDefault();
                e.stopPropagation();
              }
              cycleTo(clickedIndex);
            }
          }
          function cycleTo(n) {
            var diff = (center % count) - n;
            if (!options.noWrap) {
              if (diff < 0) {
                if (Math.abs(diff + count) < Math.abs(diff)) {
                  diff += count;
                }
              } else if (diff > 0) {
                if (Math.abs(diff - count) < diff) {
                  diff -= count;
                }
              }
            }
            if (diff < 0) {
              view.trigger('carouselNext', [Math.abs(diff)]);
            } else if (diff > 0) {
              view.trigger('carouselPrev', [diff]);
            }
          }
          function tap(e) {
            pressed = true;
            dragged = false;
            vertical_dragged = false;
            reference = xpos(e);
            referenceY = ypos(e);
            velocity = amplitude = 0;
            frame = offset;
            timestamp = Date.now();
            clearInterval(ticker);
            ticker = setInterval(track, 100);
          }
          function drag(e) {
            var x,
                delta,
                deltaY;
            if (pressed) {
              x = xpos(e);
              y = ypos(e);
              delta = reference - x;
              deltaY = Math.abs(referenceY - y);
              if (deltaY < 30 && !vertical_dragged) {
                if (delta > 2 || delta < -2) {
                  dragged = true;
                  reference = x;
                  scroll(offset + delta);
                }
              } else if (dragged) {
                e.preventDefault();
                e.stopPropagation();
                return false;
              } else {
                vertical_dragged = true;
              }
            }
            if (dragged) {
              e.preventDefault();
              e.stopPropagation();
              return false;
            }
          }
          function release(e) {
            if (pressed) {
              pressed = false;
            } else {
              return;
            }
            clearInterval(ticker);
            target = offset;
            if (velocity > 10 || velocity < -10) {
              amplitude = 0.9 * velocity;
              target = offset + amplitude;
            }
            target = Math.round(target / dim) * dim;
            if (options.noWrap) {
              if (target >= dim * (count - 1)) {
                target = dim * (count - 1);
              } else if (target < 0) {
                target = 0;
              }
            }
            amplitude = target - offset;
            timestamp = Date.now();
            requestAnimationFrame(autoScroll);
            if (dragged) {
              e.preventDefault();
              e.stopPropagation();
            }
            return false;
          }
          xform = 'transform';
          ['webkit', 'Moz', 'O', 'ms'].every(function(prefix) {
            var e = prefix + 'Transform';
            if (typeof document.body.style[e] !== 'undefined') {
              xform = e;
              return false;
            }
            return true;
          });
          $(window).on('resize.carousel', function() {
            if (options.fullWidth) {
              item_width = view.find('.carousel-item').first().innerWidth();
              item_height = view.find('.carousel-item').first().innerHeight();
              dim = item_width * 2 + options.padding;
              offset = center * 2 * item_width;
              target = offset;
            } else {
              scroll();
            }
          });
          setupEvents();
          scroll(offset);
          $(this).on('carouselNext', function(e, n) {
            if (n === undefined) {
              n = 1;
            }
            target = (dim * Math.round(offset / dim)) + (dim * n);
            if (offset !== target) {
              amplitude = target - offset;
              timestamp = Date.now();
              requestAnimationFrame(autoScroll);
            }
          });
          $(this).on('carouselPrev', function(e, n) {
            if (n === undefined) {
              n = 1;
            }
            target = (dim * Math.round(offset / dim)) - (dim * n);
            if (offset !== target) {
              amplitude = target - offset;
              timestamp = Date.now();
              requestAnimationFrame(autoScroll);
            }
          });
          $(this).on('carouselSet', function(e, n) {
            if (n === undefined) {
              n = 0;
            }
            cycleTo(n);
          });
        });
      },
      next: function(n) {
        $(this).trigger('carouselNext', [n]);
      },
      prev: function(n) {
        $(this).trigger('carouselPrev', [n]);
      },
      set: function(n) {
        $(this).trigger('carouselSet', [n]);
      }
    };
    $.fn.carousel = function(methodOrOptions) {
      if (methods[methodOrOptions]) {
        return methods[methodOrOptions].apply(this, Array.prototype.slice.call(arguments, 1));
      } else if (typeof methodOrOptions === 'object' || !methodOrOptions) {
        return methods.init.apply(this, arguments);
      } else {
        $.error('Method ' + methodOrOptions + ' does not exist on jQuery.carousel');
      }
    };
  }(jQuery));
})(require('process'));
