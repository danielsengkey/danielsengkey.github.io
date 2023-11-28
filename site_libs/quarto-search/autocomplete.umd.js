/*! @algolia/autocomplete-js 1.7.3 | MIT License | © Algolia, Inc. and contributors | https://github.com/algolia/autocomplete */
!(function (e, t) {
  "object" == typeof exports && "undefined" != typeof module
    ? t(exports)
    : "function" == typeof define && define.amd
    ? define(["exports"], t)
    : t(
        ((e = "undefined" != typeof globalThis ? globalThis : e || self)[
          "@algolia/autocomplete-js"
        ] = {})
      );
})(this, function (e) {
  "use strict";
  function t(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function n(e) {
    for (var n = 1; n < arguments.length; n++) {
      var r = null != arguments[n] ? arguments[n] : {};
      n % 2
        ? t(Object(r), !0).forEach(function (t) {
            o(e, t, r[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r))
        : t(Object(r)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
          });
    }
    return e;
  }
  function r(e) {
    return (
      (r =
        "function" == typeof Symbol && "symbol" == typeof Symbol.iterator
          ? function (e) {
              return typeof e;
            }
          : function (e) {
              return e &&
                "function" == typeof Symbol &&
                e.constructor === Symbol &&
                e !== Symbol.prototype
                ? "symbol"
                : typeof e;
            }),
      r(e)
    );
  }
  function o(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function i() {
    return (
      (i =
        Object.assign ||
        function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
      i.apply(this, arguments)
    );
  }
  function u(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function a(e, t) {
    return (
      (function (e) {
        if (Array.isArray(e)) return e;
      })(e) ||
      (function (e, t) {
        var n =
          null == e
            ? null
            : ("undefined" != typeof Symbol && e[Symbol.iterator]) ||
              e["@@iterator"];
        if (null == n) return;
        var r,
          o,
          i = [],
          u = !0,
          a = !1;
        try {
          for (
            n = n.call(e);
            !(u = (r = n.next()).done) &&
            (i.push(r.value), !t || i.length !== t);
            u = !0
          );
        } catch (e) {
          (a = !0), (o = e);
        } finally {
          try {
            u || null == n.return || n.return();
          } finally {
            if (a) throw o;
          }
        }
        return i;
      })(e, t) ||
      l(e, t) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function c(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return s(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      l(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function l(e, t) {
    if (e) {
      if ("string" == typeof e) return s(e, t);
      var n = Object.prototype.toString.call(e).slice(8, -1);
      return (
        "Object" === n && e.constructor && (n = e.constructor.name),
        "Map" === n || "Set" === n
          ? Array.from(e)
          : "Arguments" === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? s(e, t)
          : void 0
      );
    }
  }
  function s(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function p(e) {
    return {
      current: e,
    };
  }
  function f(e, t) {
    var n = void 0;
    return function () {
      for (var r = arguments.length, o = new Array(r), i = 0; i < r; i++)
        o[i] = arguments[i];
      n && clearTimeout(n),
        (n = setTimeout(function () {
          return e.apply(void 0, o);
        }, t));
    };
  }
  function d(e) {
    return e.reduce(function (e, t) {
      return e.concat(t);
    }, []);
  }
  var m = 0;
  function v() {
    return "autocomplete-".concat(m++);
  }
  function h(e, t) {
    return t.reduce(function (e, t) {
      return e && e[t];
    }, e);
  }
  function g(e) {
    return 0 === e.collections.length
      ? 0
      : e.collections.reduce(function (e, t) {
          return e + t.items.length;
        }, 0);
  }
  var y = function () {},
    b = "1.7.3",
    O = [
      {
        segment: "autocomplete-core",
        version: b,
      },
    ];
  function _(e, t) {
    var n = t;
    return {
      then: function (t, r) {
        return _(e.then(j(t, n, e), j(r, n, e)), n);
      },
      catch: function (t) {
        return _(e.catch(j(t, n, e)), n);
      },
      finally: function (t) {
        return (
          t && n.onCancelList.push(t),
          _(
            e.finally(
              j(
                t &&
                  function () {
                    return (n.onCancelList = []), t();
                  },
                n,
                e
              )
            ),
            n
          )
        );
      },
      cancel: function () {
        n.isCanceled = !0;
        var e = n.onCancelList;
        (n.onCancelList = []),
          e.forEach(function (e) {
            e();
          });
      },
      isCanceled: function () {
        return !0 === n.isCanceled;
      },
    };
  }
  function P(e) {
    return _(e, {
      isCanceled: !1,
      onCancelList: [],
    });
  }
  function j(e, t, n) {
    return e
      ? function (n) {
          return t.isCanceled ? n : e(n);
        }
      : n;
  }
  function w(e, t, n, r) {
    if (!n) return null;
    if (e < 0 && (null === t || (null !== r && 0 === t))) return n + e;
    var o = (null === t ? -1 : t) + e;
    return o <= -1 || o >= n ? (null === r ? null : 0) : o;
  }
  function S(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function I(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function E(e, t) {
    var n = [];
    return Promise.resolve(e(t)).then(function (e) {
      return Promise.all(
        e
          .filter(function (e) {
            return Boolean(e);
          })
          .map(function (e) {
            if ((e.sourceId, n.includes(e.sourceId)))
              throw new Error(
                "[Autocomplete] The `sourceId` ".concat(
                  JSON.stringify(e.sourceId),
                  " is not unique."
                )
              );
            n.push(e.sourceId);
            var t = (function (e) {
              for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2
                  ? S(Object(n), !0).forEach(function (t) {
                      I(e, t, n[t]);
                    })
                  : Object.getOwnPropertyDescriptors
                  ? Object.defineProperties(
                      e,
                      Object.getOwnPropertyDescriptors(n)
                    )
                  : S(Object(n)).forEach(function (t) {
                      Object.defineProperty(
                        e,
                        t,
                        Object.getOwnPropertyDescriptor(n, t)
                      );
                    });
              }
              return e;
            })(
              {
                getItemInputValue: function (e) {
                  return e.state.query;
                },
                getItemUrl: function () {},
                onSelect: function (e) {
                  (0, e.setIsOpen)(!1);
                },
                onActive: y,
              },
              e
            );
            return Promise.resolve(t);
          })
      );
    });
  }
  function A(e) {
    var t = (function (e) {
      var t = e.collections
        .map(function (e) {
          return e.items.length;
        })
        .reduce(function (e, t, n) {
          var r = (e[n - 1] || 0) + t;
          return e.push(r), e;
        }, [])
        .reduce(function (t, n) {
          return n <= e.activeItemId ? t + 1 : t;
        }, 0);
      return e.collections[t];
    })(e);
    if (!t) return null;
    var n =
        t.items[
          (function (e) {
            for (
              var t = e.state, n = e.collection, r = !1, o = 0, i = 0;
              !1 === r;

            ) {
              var u = t.collections[o];
              if (u === n) {
                r = !0;
                break;
              }
              (i += u.items.length), o++;
            }
            return t.activeItemId - i;
          })({
            state: e,
            collection: t,
          })
        ],
      r = t.source;
    return {
      item: n,
      itemInputValue: r.getItemInputValue({
        item: n,
        state: e,
      }),
      itemUrl: r.getItemUrl({
        item: n,
        state: e,
      }),
      source: r,
    };
  }
  var C = /((gt|sm)-|galaxy nexus)|samsung[- ]/i;
  function D(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function k(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? D(Object(n), !0).forEach(function (t) {
            x(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : D(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function x(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function N(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function q(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function R(e, t, n) {
    var r,
      o = t.initialState;
    return {
      getState: function () {
        return o;
      },
      dispatch: function (r, i) {
        var u = (function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2
              ? N(Object(n), !0).forEach(function (t) {
                  q(e, t, n[t]);
                })
              : Object.getOwnPropertyDescriptors
              ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
              : N(Object(n)).forEach(function (t) {
                  Object.defineProperty(
                    e,
                    t,
                    Object.getOwnPropertyDescriptor(n, t)
                  );
                });
          }
          return e;
        })({}, o);
        (o = e(o, {
          type: r,
          props: t,
          payload: i,
        })),
          n({
            state: o,
            prevState: u,
          });
      },
      pendingRequests:
        ((r = []),
        {
          add: function (e) {
            return (
              r.push(e),
              e.finally(function () {
                r = r.filter(function (t) {
                  return t !== e;
                });
              })
            );
          },
          cancelAll: function () {
            r.forEach(function (e) {
              return e.cancel();
            });
          },
          isEmpty: function () {
            return 0 === r.length;
          },
        }),
    };
  }
  function T(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function L(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? T(Object(n), !0).forEach(function (t) {
            B(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : T(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function B(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function F(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return M(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return M(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return M(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function M(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function U(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function H(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? U(Object(n), !0).forEach(function (t) {
            V(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : U(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function V(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function W(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Q(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? W(Object(n), !0).forEach(function (t) {
            $(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : W(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function $(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function z(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return G(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return G(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return G(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function G(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function K(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function J(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? K(Object(n), !0).forEach(function (t) {
            Y(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : K(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Y(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function X(e) {
    return Boolean(e.execute);
  }
  function Z(e, t) {
    return (
      (n = e),
      Boolean(null == n ? void 0 : n.execute)
        ? J(
            J({}, e),
            {},
            {
              requests: e.queries.map(function (n) {
                return {
                  query: n,
                  sourceId: t,
                  transformResponse: e.transformResponse,
                };
              }),
            }
          )
        : {
            items: e,
            sourceId: t,
          }
    );
    var n;
  }
  function ee(e) {
    var t = e
      .reduce(function (e, t) {
        if (!X(t)) return e.push(t), e;
        var n = t.searchClient,
          r = t.execute,
          o = t.requesterId,
          i = t.requests,
          u = e.find(function (e) {
            return (
              X(t) &&
              X(e) &&
              e.searchClient === n &&
              Boolean(o) &&
              e.requesterId === o
            );
          });
        if (u) {
          var a;
          (a = u.items).push.apply(a, z(i));
        } else {
          var c = {
            execute: r,
            requesterId: o,
            items: i,
            searchClient: n,
          };
          e.push(c);
        }
        return e;
      }, [])
      .map(function (e) {
        if (!X(e)) return Promise.resolve(e);
        var t = e,
          n = t.execute,
          r = t.items;
        return n({
          searchClient: t.searchClient,
          requests: r,
        });
      });
    return Promise.all(t).then(function (e) {
      return d(e);
    });
  }
  function te(e, t) {
    return t.map(function (t) {
      var n = e.filter(function (e) {
          return e.sourceId === t.sourceId;
        }),
        r = n.map(function (e) {
          return e.items;
        }),
        o = n[0].transformResponse,
        i = o
          ? o(
              (function (e) {
                var t = e.map(function (e) {
                  var t;
                  return k(
                    k({}, e),
                    {},
                    {
                      hits:
                        null === (t = e.hits) || void 0 === t
                          ? void 0
                          : t.map(function (t) {
                              return k(
                                k({}, t),
                                {},
                                {
                                  __autocomplete_indexName: e.index,
                                  __autocomplete_queryID: e.queryID,
                                }
                              );
                            }),
                    }
                  );
                });
                return {
                  results: t,
                  hits: t
                    .map(function (e) {
                      return e.hits;
                    })
                    .filter(Boolean),
                  facetHits: t
                    .map(function (e) {
                      var t;
                      return null === (t = e.facetHits) || void 0 === t
                        ? void 0
                        : t.map(function (e) {
                            return {
                              label: e.value,
                              count: e.count,
                              _highlightResult: {
                                label: {
                                  value: e.highlighted,
                                },
                              },
                            };
                          });
                    })
                    .filter(Boolean),
                };
              })(r)
            )
          : r;
      return (
        i.every(Boolean),
        'The `getItems` function from source "'
          .concat(t.sourceId, '" must return an array of items but returned ')
          .concat(
            JSON.stringify(void 0),
            ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"
          ),
        {
          source: t,
          items: i,
        }
      );
    });
  }
  var ne = ["event", "nextState", "props", "query", "refresh", "store"];
  function re(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function oe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? re(Object(n), !0).forEach(function (t) {
            ie(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : re(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function ie(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function ue(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  var ae,
    ce,
    le,
    se = null,
    pe =
      ((ae = -1),
      (ce = -1),
      (le = void 0),
      function (e) {
        var t = ++ae;
        return Promise.resolve(e).then(function (e) {
          return le && t < ce ? le : ((ce = t), (le = e), e);
        });
      });
  function fe(e) {
    var t = e.event,
      n = e.nextState,
      r = void 0 === n ? {} : n,
      o = e.props,
      i = e.query,
      u = e.refresh,
      a = e.store,
      c = ue(e, ne);
    se && o.environment.clearTimeout(se);
    var l = c.setCollections,
      s = c.setIsOpen,
      p = c.setQuery,
      f = c.setActiveItemId,
      m = c.setStatus;
    if ((p(i), f(o.defaultActiveItemId), !i && !1 === o.openOnFocus)) {
      var v,
        h = a.getState().collections.map(function (e) {
          return oe(
            oe({}, e),
            {},
            {
              items: [],
            }
          );
        });
      m("idle"),
        l(h),
        s(
          null !== (v = r.isOpen) && void 0 !== v
            ? v
            : o.shouldPanelOpen({
                state: a.getState(),
              })
        );
      var g = P(
        pe(h).then(function () {
          return Promise.resolve();
        })
      );
      return a.pendingRequests.add(g);
    }
    m("loading"),
      (se = o.environment.setTimeout(function () {
        m("stalled");
      }, o.stallThreshold));
    var y = P(
      pe(
        o
          .getSources(
            oe(
              {
                query: i,
                refresh: u,
                state: a.getState(),
              },
              c
            )
          )
          .then(function (e) {
            return Promise.all(
              e.map(function (e) {
                return Promise.resolve(
                  e.getItems(
                    oe(
                      {
                        query: i,
                        refresh: u,
                        state: a.getState(),
                      },
                      c
                    )
                  )
                ).then(function (t) {
                  return Z(t, e.sourceId);
                });
              })
            )
              .then(ee)
              .then(function (t) {
                return te(t, e);
              })
              .then(function (e) {
                return (function (e) {
                  var t = e.collections,
                    n = e.props,
                    r = e.state,
                    o = t.reduce(function (e, t) {
                      return Q(
                        Q({}, e),
                        {},
                        $(
                          {},
                          t.source.sourceId,
                          Q(
                            Q({}, t.source),
                            {},
                            {
                              getItems: function () {
                                return d(t.items);
                              },
                            }
                          )
                        )
                      );
                    }, {});
                  return d(
                    n.reshape({
                      sources: Object.values(o),
                      sourcesBySourceId: o,
                      state: r,
                    })
                  )
                    .filter(Boolean)
                    .map(function (e) {
                      return {
                        source: e,
                        items: e.getItems(),
                      };
                    });
                })({
                  collections: e,
                  props: o,
                  state: a.getState(),
                });
              });
          })
      )
    )
      .then(function (e) {
        var n;
        m("idle"), l(e);
        var p = o.shouldPanelOpen({
          state: a.getState(),
        });
        s(
          null !== (n = r.isOpen) && void 0 !== n
            ? n
            : (o.openOnFocus && !i && p) || p
        );
        var f = A(a.getState());
        if (null !== a.getState().activeItemId && f) {
          var d = f.item,
            v = f.itemInputValue,
            h = f.itemUrl,
            g = f.source;
          g.onActive(
            oe(
              {
                event: t,
                item: d,
                itemInputValue: v,
                itemUrl: h,
                refresh: u,
                source: g,
                state: a.getState(),
              },
              c
            )
          );
        }
      })
      .finally(function () {
        m("idle"), se && o.environment.clearTimeout(se);
      });
    return a.pendingRequests.add(y);
  }
  var de = ["event", "props", "refresh", "store"];
  function me(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function ve(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? me(Object(n), !0).forEach(function (t) {
            he(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : me(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function he(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function ge(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  var ye = ["props", "refresh", "store"],
    be = ["inputElement", "formElement", "panelElement"],
    Oe = ["inputElement"],
    _e = ["inputElement", "maxLength"],
    Pe = ["item", "source"];
  function je(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function we(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? je(Object(n), !0).forEach(function (t) {
            Se(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : je(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Se(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Ie(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function Ee(e) {
    var t = e.props,
      n = e.refresh,
      r = e.store,
      o = Ie(e, ye);
    return {
      getEnvironmentProps: function (e) {
        var n = e.inputElement,
          o = e.formElement,
          i = e.panelElement;
        function u(e) {
          (!r.getState().isOpen && r.pendingRequests.isEmpty()) ||
            e.target === n ||
            (!1 ===
              [o, i].some(function (t) {
                return (n = t), (r = e.target), n === r || n.contains(r);
                var n, r;
              }) &&
              (r.dispatch("blur", null),
              t.debug || r.pendingRequests.cancelAll()));
        }
        return we(
          {
            onTouchStart: u,
            onMouseDown: u,
            onTouchMove: function (e) {
              !1 !== r.getState().isOpen &&
                n === t.environment.document.activeElement &&
                e.target !== n &&
                n.blur();
            },
          },
          Ie(e, be)
        );
      },
      getRootProps: function (e) {
        return we(
          {
            role: "combobox",
            "aria-expanded": r.getState().isOpen,
            "aria-haspopup": "listbox",
            "aria-owns": r.getState().isOpen
              ? "".concat(t.id, "-list")
              : void 0,
            "aria-labelledby": "".concat(t.id, "-label"),
          },
          e
        );
      },
      getFormProps: function (e) {
        return (
          e.inputElement,
          we(
            {
              action: "",
              noValidate: !0,
              role: "search",
              onSubmit: function (i) {
                var u;
                i.preventDefault(),
                  t.onSubmit(
                    we(
                      {
                        event: i,
                        refresh: n,
                        state: r.getState(),
                      },
                      o
                    )
                  ),
                  r.dispatch("submit", null),
                  null === (u = e.inputElement) || void 0 === u || u.blur();
              },
              onReset: function (i) {
                var u;
                i.preventDefault(),
                  t.onReset(
                    we(
                      {
                        event: i,
                        refresh: n,
                        state: r.getState(),
                      },
                      o
                    )
                  ),
                  r.dispatch("reset", null),
                  null === (u = e.inputElement) || void 0 === u || u.focus();
              },
            },
            Ie(e, Oe)
          )
        );
      },
      getLabelProps: function (e) {
        return we(
          {
            htmlFor: "".concat(t.id, "-input"),
            id: "".concat(t.id, "-label"),
          },
          e
        );
      },
      getInputProps: function (e) {
        var i;
        function u(e) {
          (t.openOnFocus || Boolean(r.getState().query)) &&
            fe(
              we(
                {
                  event: e,
                  props: t,
                  query: r.getState().completion || r.getState().query,
                  refresh: n,
                  store: r,
                },
                o
              )
            ),
            r.dispatch("focus", null);
        }
        var a = e || {};
        a.inputElement;
        var c = a.maxLength,
          l = void 0 === c ? 512 : c,
          s = Ie(a, _e),
          p = A(r.getState()),
          f = (function (e) {
            return Boolean(e && e.match(C));
          })(
            (null === (i = t.environment.navigator) || void 0 === i
              ? void 0
              : i.userAgent) || ""
          ),
          d = null != p && p.itemUrl && !f ? "go" : "search";
        return we(
          {
            "aria-autocomplete": "both",
            "aria-activedescendant":
              r.getState().isOpen && null !== r.getState().activeItemId
                ? "".concat(t.id, "-item-").concat(r.getState().activeItemId)
                : void 0,
            "aria-controls": r.getState().isOpen
              ? "".concat(t.id, "-list")
              : void 0,
            "aria-labelledby": "".concat(t.id, "-label"),
            value: r.getState().completion || r.getState().query,
            id: "".concat(t.id, "-input"),
            autoComplete: "off",
            autoCorrect: "off",
            autoCapitalize: "off",
            enterKeyHint: d,
            spellCheck: "false",
            autoFocus: t.autoFocus,
            placeholder: t.placeholder,
            maxLength: l,
            type: "search",
            onChange: function (e) {
              fe(
                we(
                  {
                    event: e,
                    props: t,
                    query: e.currentTarget.value.slice(0, l),
                    refresh: n,
                    store: r,
                  },
                  o
                )
              );
            },
            onKeyDown: function (e) {
              !(function (e) {
                var t = e.event,
                  n = e.props,
                  r = e.refresh,
                  o = e.store,
                  i = ge(e, de);
                if ("ArrowUp" === t.key || "ArrowDown" === t.key) {
                  var u = function () {
                      var e = n.environment.document.getElementById(
                        ""
                          .concat(n.id, "-item-")
                          .concat(o.getState().activeItemId)
                      );
                      e &&
                        (e.scrollIntoViewIfNeeded
                          ? e.scrollIntoViewIfNeeded(!1)
                          : e.scrollIntoView(!1));
                    },
                    a = function () {
                      var e = A(o.getState());
                      if (null !== o.getState().activeItemId && e) {
                        var n = e.item,
                          u = e.itemInputValue,
                          a = e.itemUrl,
                          c = e.source;
                        c.onActive(
                          ve(
                            {
                              event: t,
                              item: n,
                              itemInputValue: u,
                              itemUrl: a,
                              refresh: r,
                              source: c,
                              state: o.getState(),
                            },
                            i
                          )
                        );
                      }
                    };
                  t.preventDefault(),
                    !1 === o.getState().isOpen &&
                    (n.openOnFocus || Boolean(o.getState().query))
                      ? fe(
                          ve(
                            {
                              event: t,
                              props: n,
                              query: o.getState().query,
                              refresh: r,
                              store: o,
                            },
                            i
                          )
                        ).then(function () {
                          o.dispatch(t.key, {
                            nextActiveItemId: n.defaultActiveItemId,
                          }),
                            a(),
                            setTimeout(u, 0);
                        })
                      : (o.dispatch(t.key, {}), a(), u());
                } else if ("Escape" === t.key)
                  t.preventDefault(),
                    o.dispatch(t.key, null),
                    o.pendingRequests.cancelAll();
                else if ("Tab" === t.key)
                  o.dispatch("blur", null), o.pendingRequests.cancelAll();
                else if ("Enter" === t.key) {
                  if (
                    null === o.getState().activeItemId ||
                    o.getState().collections.every(function (e) {
                      return 0 === e.items.length;
                    })
                  )
                    return void (n.debug || o.pendingRequests.cancelAll());
                  t.preventDefault();
                  var c = A(o.getState()),
                    l = c.item,
                    s = c.itemInputValue,
                    p = c.itemUrl,
                    f = c.source;
                  if (t.metaKey || t.ctrlKey)
                    void 0 !== p &&
                      (f.onSelect(
                        ve(
                          {
                            event: t,
                            item: l,
                            itemInputValue: s,
                            itemUrl: p,
                            refresh: r,
                            source: f,
                            state: o.getState(),
                          },
                          i
                        )
                      ),
                      n.navigator.navigateNewTab({
                        itemUrl: p,
                        item: l,
                        state: o.getState(),
                      }));
                  else if (t.shiftKey)
                    void 0 !== p &&
                      (f.onSelect(
                        ve(
                          {
                            event: t,
                            item: l,
                            itemInputValue: s,
                            itemUrl: p,
                            refresh: r,
                            source: f,
                            state: o.getState(),
                          },
                          i
                        )
                      ),
                      n.navigator.navigateNewWindow({
                        itemUrl: p,
                        item: l,
                        state: o.getState(),
                      }));
                  else if (t.altKey);
                  else {
                    if (void 0 !== p)
                      return (
                        f.onSelect(
                          ve(
                            {
                              event: t,
                              item: l,
                              itemInputValue: s,
                              itemUrl: p,
                              refresh: r,
                              source: f,
                              state: o.getState(),
                            },
                            i
                          )
                        ),
                        void n.navigator.navigate({
                          itemUrl: p,
                          item: l,
                          state: o.getState(),
                        })
                      );
                    fe(
                      ve(
                        {
                          event: t,
                          nextState: {
                            isOpen: !1,
                          },
                          props: n,
                          query: s,
                          refresh: r,
                          store: o,
                        },
                        i
                      )
                    ).then(function () {
                      f.onSelect(
                        ve(
                          {
                            event: t,
                            item: l,
                            itemInputValue: s,
                            itemUrl: p,
                            refresh: r,
                            source: f,
                            state: o.getState(),
                          },
                          i
                        )
                      );
                    });
                  }
                }
              })(
                we(
                  {
                    event: e,
                    props: t,
                    refresh: n,
                    store: r,
                  },
                  o
                )
              );
            },
            onFocus: u,
            onBlur: y,
            onClick: function (n) {
              e.inputElement !== t.environment.document.activeElement ||
                r.getState().isOpen ||
                u(n);
            },
          },
          s
        );
      },
      getPanelProps: function (e) {
        return we(
          {
            onMouseDown: function (e) {
              e.preventDefault();
            },
            onMouseLeave: function () {
              r.dispatch("mouseleave", null);
            },
          },
          e
        );
      },
      getListProps: function (e) {
        return we(
          {
            role: "listbox",
            "aria-labelledby": "".concat(t.id, "-label"),
            id: "".concat(t.id, "-list"),
          },
          e
        );
      },
      getItemProps: function (e) {
        var i = e.item,
          u = e.source,
          a = Ie(e, Pe);
        return we(
          {
            id: "".concat(t.id, "-item-").concat(i.__autocomplete_id),
            role: "option",
            "aria-selected": r.getState().activeItemId === i.__autocomplete_id,
            onMouseMove: function (e) {
              if (i.__autocomplete_id !== r.getState().activeItemId) {
                r.dispatch("mousemove", i.__autocomplete_id);
                var t = A(r.getState());
                if (null !== r.getState().activeItemId && t) {
                  var u = t.item,
                    a = t.itemInputValue,
                    c = t.itemUrl,
                    l = t.source;
                  l.onActive(
                    we(
                      {
                        event: e,
                        item: u,
                        itemInputValue: a,
                        itemUrl: c,
                        refresh: n,
                        source: l,
                        state: r.getState(),
                      },
                      o
                    )
                  );
                }
              }
            },
            onMouseDown: function (e) {
              e.preventDefault();
            },
            onClick: function (e) {
              var a = u.getItemInputValue({
                  item: i,
                  state: r.getState(),
                }),
                c = u.getItemUrl({
                  item: i,
                  state: r.getState(),
                });
              (c
                ? Promise.resolve()
                : fe(
                    we(
                      {
                        event: e,
                        nextState: {
                          isOpen: !1,
                        },
                        props: t,
                        query: a,
                        refresh: n,
                        store: r,
                      },
                      o
                    )
                  )
              ).then(function () {
                u.onSelect(
                  we(
                    {
                      event: e,
                      item: i,
                      itemInputValue: a,
                      itemUrl: c,
                      refresh: n,
                      source: u,
                      state: r.getState(),
                    },
                    o
                  )
                );
              });
            },
          },
          a
        );
      },
    };
  }
  function Ae(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Ce(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Ae(Object(n), !0).forEach(function (t) {
            De(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ae(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function De(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function ke(e) {
    var t,
      n,
      r,
      o,
      i = e.plugins,
      u = e.options,
      a =
        null ===
          (t = ((null === (n = u.__autocomplete_metadata) || void 0 === n
            ? void 0
            : n.userAgents) || [])[0]) || void 0 === t
          ? void 0
          : t.segment,
      c = a
        ? De(
            {},
            a,
            Object.keys(
              (null === (r = u.__autocomplete_metadata) || void 0 === r
                ? void 0
                : r.options) || {}
            )
          )
        : {};
    return {
      plugins: i.map(function (e) {
        return {
          name: e.name,
          options: Object.keys(e.__autocomplete_pluginOptions || []),
        };
      }),
      options: Ce(
        {
          "autocomplete-core": Object.keys(u),
        },
        c
      ),
      ua: O.concat(
        (null === (o = u.__autocomplete_metadata) || void 0 === o
          ? void 0
          : o.userAgents) || []
      ),
    };
  }
  function xe(e) {
    var t,
      n = e.state;
    return !1 === n.isOpen || null === n.activeItemId
      ? null
      : (null === (t = A(n)) || void 0 === t ? void 0 : t.itemInputValue) ||
          null;
  }
  function Ne(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function qe(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Ne(Object(n), !0).forEach(function (t) {
            Re(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ne(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Re(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var Te = function (e, t) {
    switch (t.type) {
      case "setActiveItemId":
      case "mousemove":
        return qe(
          qe({}, e),
          {},
          {
            activeItemId: t.payload,
          }
        );
      case "setQuery":
        return qe(
          qe({}, e),
          {},
          {
            query: t.payload,
            completion: null,
          }
        );
      case "setCollections":
        return qe(
          qe({}, e),
          {},
          {
            collections: t.payload,
          }
        );
      case "setIsOpen":
        return qe(
          qe({}, e),
          {},
          {
            isOpen: t.payload,
          }
        );
      case "setStatus":
        return qe(
          qe({}, e),
          {},
          {
            status: t.payload,
          }
        );
      case "setContext":
        return qe(
          qe({}, e),
          {},
          {
            context: qe(qe({}, e.context), t.payload),
          }
        );
      case "ArrowDown":
        var n = qe(
          qe({}, e),
          {},
          {
            activeItemId: t.payload.hasOwnProperty("nextActiveItemId")
              ? t.payload.nextActiveItemId
              : w(1, e.activeItemId, g(e), t.props.defaultActiveItemId),
          }
        );
        return qe(
          qe({}, n),
          {},
          {
            completion: xe({
              state: n,
            }),
          }
        );
      case "ArrowUp":
        var r = qe(
          qe({}, e),
          {},
          {
            activeItemId: w(
              -1,
              e.activeItemId,
              g(e),
              t.props.defaultActiveItemId
            ),
          }
        );
        return qe(
          qe({}, r),
          {},
          {
            completion: xe({
              state: r,
            }),
          }
        );
      case "Escape":
        return e.isOpen
          ? qe(
              qe({}, e),
              {},
              {
                activeItemId: null,
                isOpen: !1,
                completion: null,
              }
            )
          : qe(
              qe({}, e),
              {},
              {
                activeItemId: null,
                query: "",
                status: "idle",
                collections: [],
              }
            );
      case "submit":
        return qe(
          qe({}, e),
          {},
          {
            activeItemId: null,
            isOpen: !1,
            status: "idle",
          }
        );
      case "reset":
        return qe(
          qe({}, e),
          {},
          {
            activeItemId:
              !0 === t.props.openOnFocus ? t.props.defaultActiveItemId : null,
            status: "idle",
            query: "",
          }
        );
      case "focus":
        return qe(
          qe({}, e),
          {},
          {
            activeItemId: t.props.defaultActiveItemId,
            isOpen:
              (t.props.openOnFocus || Boolean(e.query)) &&
              t.props.shouldPanelOpen({
                state: e,
              }),
          }
        );
      case "blur":
        return t.props.debug
          ? e
          : qe(
              qe({}, e),
              {},
              {
                isOpen: !1,
                activeItemId: null,
              }
            );
      case "mouseleave":
        return qe(
          qe({}, e),
          {},
          {
            activeItemId: t.props.defaultActiveItemId,
          }
        );
      default:
        return (
          "The reducer action ".concat(
            JSON.stringify(t.type),
            " is not supported."
          ),
          e
        );
    }
  };
  function Le(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Be(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Le(Object(n), !0).forEach(function (t) {
            Fe(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Le(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function Fe(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function Me(e) {
    var t = [],
      n = (function (e, t) {
        var n,
          r = "undefined" != typeof window ? window : {},
          o = e.plugins || [];
        return H(
          H(
            {
              debug: !1,
              openOnFocus: !1,
              placeholder: "",
              autoFocus: !1,
              defaultActiveItemId: null,
              stallThreshold: 300,
              environment: r,
              shouldPanelOpen: function (e) {
                return g(e.state) > 0;
              },
              reshape: function (e) {
                return e.sources;
              },
            },
            e
          ),
          {},
          {
            id: null !== (n = e.id) && void 0 !== n ? n : v(),
            plugins: o,
            initialState: H(
              {
                activeItemId: null,
                query: "",
                completion: null,
                collections: [],
                isOpen: !1,
                status: "idle",
                context: {},
              },
              e.initialState
            ),
            onStateChange: function (t) {
              var n;
              null === (n = e.onStateChange) || void 0 === n || n.call(e, t),
                o.forEach(function (e) {
                  var n;
                  return null === (n = e.onStateChange) || void 0 === n
                    ? void 0
                    : n.call(e, t);
                });
            },
            onSubmit: function (t) {
              var n;
              null === (n = e.onSubmit) || void 0 === n || n.call(e, t),
                o.forEach(function (e) {
                  var n;
                  return null === (n = e.onSubmit) || void 0 === n
                    ? void 0
                    : n.call(e, t);
                });
            },
            onReset: function (t) {
              var n;
              null === (n = e.onReset) || void 0 === n || n.call(e, t),
                o.forEach(function (e) {
                  var n;
                  return null === (n = e.onReset) || void 0 === n
                    ? void 0
                    : n.call(e, t);
                });
            },
            getSources: function (n) {
              return Promise.all(
                []
                  .concat(
                    F(
                      o.map(function (e) {
                        return e.getSources;
                      })
                    ),
                    [e.getSources]
                  )
                  .filter(Boolean)
                  .map(function (e) {
                    return E(e, n);
                  })
              )
                .then(function (e) {
                  return d(e);
                })
                .then(function (e) {
                  return e.map(function (e) {
                    return H(
                      H({}, e),
                      {},
                      {
                        onSelect: function (n) {
                          e.onSelect(n),
                            t.forEach(function (e) {
                              var t;
                              return null === (t = e.onSelect) || void 0 === t
                                ? void 0
                                : t.call(e, n);
                            });
                        },
                        onActive: function (n) {
                          e.onActive(n),
                            t.forEach(function (e) {
                              var t;
                              return null === (t = e.onActive) || void 0 === t
                                ? void 0
                                : t.call(e, n);
                            });
                        },
                      }
                    );
                  });
                });
            },
            navigator: H(
              {
                navigate: function (e) {
                  var t = e.itemUrl;
                  r.location.assign(t);
                },
                navigateNewTab: function (e) {
                  var t = e.itemUrl,
                    n = r.open(t, "_blank", "noopener");
                  null == n || n.focus();
                },
                navigateNewWindow: function (e) {
                  var t = e.itemUrl;
                  r.open(t, "_blank", "noopener");
                },
              },
              e.navigator
            ),
          }
        );
      })(e, t),
      r = R(Te, n, function (e) {
        var t = e.prevState,
          r = e.state;
        n.onStateChange(
          Be(
            {
              prevState: t,
              state: r,
              refresh: u,
            },
            o
          )
        );
      }),
      o = (function (e) {
        var t = e.store;
        return {
          setActiveItemId: function (e) {
            t.dispatch("setActiveItemId", e);
          },
          setQuery: function (e) {
            t.dispatch("setQuery", e);
          },
          setCollections: function (e) {
            var n = 0,
              r = e.map(function (e) {
                return L(
                  L({}, e),
                  {},
                  {
                    items: d(e.items).map(function (e) {
                      return L(
                        L({}, e),
                        {},
                        {
                          __autocomplete_id: n++,
                        }
                      );
                    }),
                  }
                );
              });
            t.dispatch("setCollections", r);
          },
          setIsOpen: function (e) {
            t.dispatch("setIsOpen", e);
          },
          setStatus: function (e) {
            t.dispatch("setStatus", e);
          },
          setContext: function (e) {
            t.dispatch("setContext", e);
          },
        };
      })({
        store: r,
      }),
      i = Ee(
        Be(
          {
            props: n,
            refresh: u,
            store: r,
          },
          o
        )
      );
    function u() {
      return fe(
        Be(
          {
            event: new Event("input"),
            nextState: {
              isOpen: r.getState().isOpen,
            },
            props: n,
            query: r.getState().query,
            refresh: u,
            store: r,
          },
          o
        )
      );
    }
    return (
      n.plugins.forEach(function (e) {
        var n;
        return null === (n = e.subscribe) || void 0 === n
          ? void 0
          : n.call(
              e,
              Be(
                Be({}, o),
                {},
                {
                  refresh: u,
                  onSelect: function (e) {
                    t.push({
                      onSelect: e,
                    });
                  },
                  onActive: function (e) {
                    t.push({
                      onActive: e,
                    });
                  },
                }
              )
            );
      }),
      (function (e) {
        var t,
          n,
          r = e.metadata,
          o = e.environment;
        if (
          null === (t = o.navigator) ||
          void 0 === t ||
          null === (n = t.userAgent) ||
          void 0 === n
            ? void 0
            : n.includes("Algolia Crawler")
        ) {
          var i = o.document.createElement("meta"),
            u = o.document.querySelector("head");
          (i.name = "algolia:metadata"),
            setTimeout(function () {
              (i.content = JSON.stringify(r)), u.appendChild(i);
            }, 0);
        }
      })({
        metadata: ke({
          plugins: n.plugins,
          options: e,
        }),
        environment: n.environment,
      }),
      Be(
        Be(
          {
            refresh: u,
          },
          i
        ),
        o
      )
    );
  }
  var Ue = function (e, t, n, r) {
      var o;
      t[0] = 0;
      for (var i = 1; i < t.length; i++) {
        var u = t[i++],
          a = t[i] ? ((t[0] |= u ? 1 : 2), n[t[i++]]) : t[++i];
        3 === u
          ? (r[0] = a)
          : 4 === u
          ? (r[1] = Object.assign(r[1] || {}, a))
          : 5 === u
          ? ((r[1] = r[1] || {})[t[++i]] = a)
          : 6 === u
          ? (r[1][t[++i]] += a + "")
          : u
          ? ((o = e.apply(a, Ue(e, a, n, ["", null]))),
            r.push(o),
            a[0] ? (t[0] |= 2) : ((t[i - 2] = 0), (t[i] = o)))
          : r.push(a);
      }
      return r;
    },
    He = new Map();
  function Ve(e) {
    var t = He.get(this);
    return (
      t || ((t = new Map()), He.set(this, t)),
      (t = Ue(
        this,
        t.get(e) ||
          (t.set(
            e,
            (t = (function (e) {
              for (
                var t,
                  n,
                  r = 1,
                  o = "",
                  i = "",
                  u = [0],
                  a = function (e) {
                    1 === r &&
                    (e || (o = o.replace(/^\s*\n\s*|\s*\n\s*$/g, "")))
                      ? u.push(0, e, o)
                      : 3 === r && (e || o)
                      ? (u.push(3, e, o), (r = 2))
                      : 2 === r && "..." === o && e
                      ? u.push(4, e, 0)
                      : 2 === r && o && !e
                      ? u.push(5, 0, !0, o)
                      : r >= 5 &&
                        ((o || (!e && 5 === r)) &&
                          (u.push(r, 0, o, n), (r = 6)),
                        e && (u.push(r, e, 0, n), (r = 6))),
                      (o = "");
                  },
                  c = 0;
                c < e.length;
                c++
              ) {
                c && (1 === r && a(), a(c));
                for (var l = 0; l < e[c].length; l++)
                  (t = e[c][l]),
                    1 === r
                      ? "<" === t
                        ? (a(), (u = [u]), (r = 3))
                        : (o += t)
                      : 4 === r
                      ? "--" === o && ">" === t
                        ? ((r = 1), (o = ""))
                        : (o = t + o[0])
                      : i
                      ? t === i
                        ? (i = "")
                        : (o += t)
                      : '"' === t || "'" === t
                      ? (i = t)
                      : ">" === t
                      ? (a(), (r = 1))
                      : r &&
                        ("=" === t
                          ? ((r = 5), (n = o), (o = ""))
                          : "/" === t && (r < 5 || ">" === e[c][l + 1])
                          ? (a(),
                            3 === r && (u = u[0]),
                            (r = u),
                            (u = u[0]).push(2, 0, r),
                            (r = 0))
                          : " " === t || "\t" === t || "\n" === t || "\r" === t
                          ? (a(), (r = 2))
                          : (o += t)),
                    3 === r && "!--" === o && ((r = 4), (u = u[0]));
              }
              return a(), u;
            })(e))
          ),
          t),
        arguments,
        []
      )).length > 1
        ? t
        : t[0]
    );
  }
  var We = function (e) {
    var t = e.environment,
      n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
    n.setAttribute("class", "aa-ClearIcon"),
      n.setAttribute("viewBox", "0 0 24 24"),
      n.setAttribute("width", "18"),
      n.setAttribute("height", "18"),
      n.setAttribute("fill", "currentColor");
    var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
    return (
      r.setAttribute(
        "d",
        "M5.293 6.707l5.293 5.293-5.293 5.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5.293-5.293 5.293 5.293c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414l-5.293-5.293 5.293-5.293c0.391-0.391 0.391-1.024 0-1.414s-1.024-0.391-1.414 0l-5.293 5.293-5.293-5.293c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414z"
      ),
      n.appendChild(r),
      n
    );
  };
  function Qe(e, t) {
    if ("string" == typeof t) {
      var n = e.document.querySelector(t);
      return (
        "The element ".concat(JSON.stringify(t), " is not in the document."), n
      );
    }
    return t;
  }
  function $e() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t.reduce(function (e, t) {
      return (
        Object.keys(t).forEach(function (n) {
          var r = e[n],
            o = t[n];
          r !== o && (e[n] = [r, o].filter(Boolean).join(" "));
        }),
        e
      );
    }, {});
  }
  var ze = function (e) {
    return (
      e &&
      "object" === r(e) &&
      "[object Object]" === Object.prototype.toString.call(e)
    );
  };
  function Ge() {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return t.reduce(function (e, t) {
      return (
        Object.keys(t).forEach(function (n) {
          var r = e[n],
            o = t[n];
          Array.isArray(r) && Array.isArray(o)
            ? (e[n] = r.concat.apply(r, c(o)))
            : ze(r) && ze(o)
            ? (e[n] = Ge(r, o))
            : (e[n] = o);
        }),
        e
      );
    }, {});
  }
  function Ke(e, t) {
    return Object.entries(e).reduce(function (e, r) {
      var i = a(r, 2),
        u = i[0],
        c = i[1];
      return t({
        key: u,
        value: c,
      })
        ? n(n({}, e), {}, o({}, u, c))
        : e;
    }, {});
  }
  var Je = ["ontouchstart", "ontouchend", "ontouchmove", "ontouchcancel"];
  function Ye(e, t, n) {
    e[t] = null === n ? "" : "number" != typeof n ? n : n + "px";
  }
  function Xe(e) {
    this._listeners[e.type](e);
  }
  function Ze(e, t, n) {
    var r,
      o,
      i = e[t];
    if ("style" === t)
      if ("string" == typeof n) e.style = n;
      else if (null === n) e.style = "";
      else for (t in n) (i && n[t] === i[t]) || Ye(e.style, t, n[t]);
    else
      "o" === t[0] && "n" === t[1]
        ? ((r = t !== (t = t.replace(/Capture$/, ""))),
          ((o = t.toLowerCase()) in e || Je.includes(o)) && (t = o),
          (t = t.slice(2)),
          e._listeners || (e._listeners = {}),
          (e._listeners[t] = n),
          n
            ? i || e.addEventListener(t, Xe, r)
            : e.removeEventListener(t, Xe, r))
        : "list" !== t &&
          "tagName" !== t &&
          "form" !== t &&
          "type" !== t &&
          "size" !== t &&
          "download" !== t &&
          "href" !== t &&
          t in e
        ? (e[t] = null == n ? "" : n)
        : "function" != typeof n &&
          "dangerouslySetInnerHTML" !== t &&
          (null == n || (!1 === n && !/^ar/.test(t))
            ? e.removeAttribute(t)
            : e.setAttribute(t, n));
  }
  function et(e) {
    return "onChange" === e ? "onInput" : e;
  }
  function tt(e, t) {
    for (var n in t) Ze(e, et(n), t[n]);
  }
  function nt(e, t) {
    for (var n in t) ("o" === n[0] && "n" === n[1]) || Ze(e, et(n), t[n]);
  }
  var rt = ["children"];
  function ot(e) {
    return function (t, n) {
      var r = n.children,
        o = void 0 === r ? [] : r,
        i = u(n, rt),
        a = e.document.createElement(t);
      return tt(a, i), a.append.apply(a, c(o)), a;
    };
  }
  var it = [
      "autocompleteScopeApi",
      "environment",
      "classNames",
      "getInputProps",
      "getInputPropsCore",
      "isDetached",
      "state",
    ],
    ut = function (e) {
      var t = e.environment.document.createElementNS(
        "http://www.w3.org/2000/svg",
        "svg"
      );
      return (
        t.setAttribute("class", "aa-LoadingIcon"),
        t.setAttribute("viewBox", "0 0 100 100"),
        t.setAttribute("width", "20"),
        t.setAttribute("height", "20"),
        (t.innerHTML =
          '<circle\n  cx="50"\n  cy="50"\n  fill="none"\n  r="35"\n  stroke="currentColor"\n  stroke-dasharray="164.93361431346415 56.97787143782138"\n  stroke-width="6"\n>\n  <animateTransform\n    attributeName="transform"\n    type="rotate"\n    repeatCount="indefinite"\n    dur="1s"\n    values="0 50 50;90 50 50;180 50 50;360 50 50"\n    keyTimes="0;0.40;0.65;1"\n  />\n</circle>'),
        t
      );
    },
    at = function (e) {
      var t = e.environment,
        n = t.document.createElementNS("http://www.w3.org/2000/svg", "svg");
      n.setAttribute("class", "aa-SubmitIcon"),
        n.setAttribute("viewBox", "0 0 24 24"),
        n.setAttribute("width", "20"),
        n.setAttribute("height", "20"),
        n.setAttribute("fill", "currentColor");
      var r = t.document.createElementNS("http://www.w3.org/2000/svg", "path");
      return (
        r.setAttribute(
          "d",
          "M16.041 15.856c-0.034 0.026-0.067 0.055-0.099 0.087s-0.060 0.064-0.087 0.099c-1.258 1.213-2.969 1.958-4.855 1.958-1.933 0-3.682-0.782-4.95-2.050s-2.050-3.017-2.050-4.95 0.782-3.682 2.050-4.95 3.017-2.050 4.95-2.050 3.682 0.782 4.95 2.050 2.050 3.017 2.050 4.95c0 1.886-0.745 3.597-1.959 4.856zM21.707 20.293l-3.675-3.675c1.231-1.54 1.968-3.493 1.968-5.618 0-2.485-1.008-4.736-2.636-6.364s-3.879-2.636-6.364-2.636-4.736 1.008-6.364 2.636-2.636 3.879-2.636 6.364 1.008 4.736 2.636 6.364 3.879 2.636 6.364 2.636c2.125 0 4.078-0.737 5.618-1.968l3.675 3.675c0.391 0.391 1.024 0.391 1.414 0s0.391-1.024 0-1.414z"
        ),
        n.appendChild(r),
        n
      );
    };
  function ct(e) {
    var t = e.autocomplete,
      r = e.autocompleteScopeApi,
      o = e.classNames,
      i = e.environment,
      a = e.isDetached,
      c = e.placeholder,
      l = void 0 === c ? "Search" : c,
      s = e.propGetters,
      p = e.setIsModalOpen,
      f = e.state,
      d = e.translations,
      m = ot(i),
      v = s.getRootProps(
        n(
          {
            state: f,
            props: t.getRootProps({}),
          },
          r
        )
      ),
      h = m(
        "div",
        n(
          {
            class: o.root,
          },
          v
        )
      ),
      g = m("div", {
        class: o.detachedContainer,
        onMouseDown: function (e) {
          e.stopPropagation();
        },
      }),
      y = m("div", {
        class: o.detachedOverlay,
        children: [g],
        onMouseDown: function () {
          p(!1), t.setIsOpen(!1);
        },
      }),
      b = s.getLabelProps(
        n(
          {
            state: f,
            props: t.getLabelProps({}),
          },
          r
        )
      ),
      O = m("button", {
        class: o.submitButton,
        type: "submit",
        title: d.submitButtonTitle,
        children: [
          at({
            environment: i,
          }),
        ],
      }),
      _ = m(
        "label",
        n(
          {
            class: o.label,
            children: [O],
          },
          b
        )
      ),
      P = m("button", {
        class: o.clearButton,
        type: "reset",
        title: d.clearButtonTitle,
        children: [
          We({
            environment: i,
          }),
        ],
      }),
      j = m("div", {
        class: o.loadingIndicator,
        children: [
          ut({
            environment: i,
          }),
        ],
      }),
      w = (function (e) {
        var t = e.autocompleteScopeApi,
          r = e.environment;
        e.classNames;
        var o = e.getInputProps,
          i = e.getInputPropsCore,
          a = e.isDetached,
          c = e.state,
          l = u(e, it),
          s = ot(r)("input", l),
          p = o(
            n(
              {
                state: c,
                props: i({
                  inputElement: s,
                }),
                inputElement: s,
              },
              t
            )
          );
        return (
          tt(
            s,
            n(
              n({}, p),
              {},
              {
                onKeyDown: function (e) {
                  (a && "Tab" === e.key) || p.onKeyDown(e);
                },
              }
            )
          ),
          s
        );
      })({
        class: o.input,
        environment: i,
        state: f,
        getInputProps: s.getInputProps,
        getInputPropsCore: t.getInputProps,
        autocompleteScopeApi: r,
        isDetached: a,
      }),
      S = m("div", {
        class: o.inputWrapperPrefix,
        children: [_, j],
      }),
      I = m("div", {
        class: o.inputWrapperSuffix,
        children: [P],
      }),
      E = m("div", {
        class: o.inputWrapper,
        children: [w],
      }),
      A = s.getFormProps(
        n(
          {
            state: f,
            props: t.getFormProps({
              inputElement: w,
            }),
          },
          r
        )
      ),
      C = m(
        "form",
        n(
          {
            class: o.form,
            children: [S, E, I],
          },
          A
        )
      ),
      D = s.getPanelProps(
        n(
          {
            state: f,
            props: t.getPanelProps({}),
          },
          r
        )
      ),
      k = m(
        "div",
        n(
          {
            class: o.panel,
          },
          D
        )
      );
    if (a) {
      var x = m("div", {
          class: o.detachedSearchButtonIcon,
          children: [
            at({
              environment: i,
            }),
          ],
        }),
        N = m("div", {
          class: o.detachedSearchButtonPlaceholder,
          textContent: l,
        }),
        q = m("button", {
          type: "button",
          class: o.detachedSearchButton,
          onClick: function () {
            p(!0);
          },
          children: [x, N],
        }),
        R = m("button", {
          type: "button",
          class: o.detachedCancelButton,
          textContent: d.detachedCancelButtonText,
          onTouchStart: function (e) {
            e.stopPropagation();
          },
          onClick: function () {
            t.setIsOpen(!1), p(!1);
          },
        }),
        T = m("div", {
          class: o.detachedFormContainer,
          children: [C, R],
        });
      g.appendChild(T), h.appendChild(q);
    } else h.appendChild(C);
    return {
      detachedContainer: g,
      detachedOverlay: y,
      inputWrapper: E,
      input: w,
      root: h,
      form: C,
      label: _,
      submitButton: O,
      clearButton: P,
      loadingIndicator: j,
      panel: k,
    };
  }
  var lt,
    st,
    pt,
    ft,
    dt,
    mt,
    vt = {},
    ht = [],
    gt = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
  function yt(e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  }
  function bt(e) {
    var t = e.parentNode;
    t && t.removeChild(e);
  }
  function Ot(e, t, n) {
    var r,
      o,
      i,
      u = {};
    for (i in t)
      "key" == i ? (r = t[i]) : "ref" == i ? (o = t[i]) : (u[i] = t[i]);
    if (
      (arguments.length > 2 &&
        (u.children = arguments.length > 3 ? lt.call(arguments, 2) : n),
      "function" == typeof e && null != e.defaultProps)
    )
      for (i in e.defaultProps) void 0 === u[i] && (u[i] = e.defaultProps[i]);
    return _t(e, u, r, o, null);
  }
  function _t(e, t, n, r, o) {
    var i = {
      type: e,
      props: t,
      key: n,
      ref: r,
      __k: null,
      __: null,
      __b: 0,
      __e: null,
      __d: void 0,
      __c: null,
      __h: null,
      constructor: void 0,
      __v: null == o ? ++pt : o,
    };
    return null == o && null != st.vnode && st.vnode(i), i;
  }
  function Pt(e) {
    return e.children;
  }
  function jt(e, t) {
    (this.props = e), (this.context = t);
  }
  function wt(e, t) {
    if (null == t) return e.__ ? wt(e.__, e.__.__k.indexOf(e) + 1) : null;
    for (var n; t < e.__k.length; t++)
      if (null != (n = e.__k[t]) && null != n.__e) return n.__e;
    return "function" == typeof e.type ? wt(e) : null;
  }
  function St(e) {
    var t, n;
    if (null != (e = e.__) && null != e.__c) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if (null != (n = e.__k[t]) && null != n.__e) {
          e.__e = e.__c.base = n.__e;
          break;
        }
      return St(e);
    }
  }
  function It(e) {
    ((!e.__d && (e.__d = !0) && ft.push(e) && !Et.__r++) ||
      mt !== st.debounceRendering) &&
      ((mt = st.debounceRendering) || dt)(Et);
  }
  function Et() {
    for (var e; (Et.__r = ft.length); )
      (e = ft.sort(function (e, t) {
        return e.__v.__b - t.__v.__b;
      })),
        (ft = []),
        e.some(function (e) {
          var t, n, r, o, i, u;
          e.__d &&
            ((i = (o = (t = e).__v).__e),
            (u = t.__P) &&
              ((n = []),
              ((r = yt({}, o)).__v = o.__v + 1),
              Rt(
                u,
                o,
                r,
                t.__n,
                void 0 !== u.ownerSVGElement,
                null != o.__h ? [i] : null,
                n,
                null == i ? wt(o) : i,
                o.__h
              ),
              Tt(n, o),
              o.__e != i && St(o)));
        });
  }
  function At(e, t, n, r, o, i, u, a, c, l) {
    var s,
      p,
      f,
      d,
      m,
      v,
      h,
      g = (r && r.__k) || ht,
      y = g.length;
    for (n.__k = [], s = 0; s < t.length; s++)
      if (
        null !=
        (d = n.__k[s] =
          null == (d = t[s]) || "boolean" == typeof d
            ? null
            : "string" == typeof d ||
              "number" == typeof d ||
              "bigint" == typeof d
            ? _t(null, d, null, null, d)
            : Array.isArray(d)
            ? _t(
                Pt,
                {
                  children: d,
                },
                null,
                null,
                null
              )
            : d.__b > 0
            ? _t(d.type, d.props, d.key, null, d.__v)
            : d)
      ) {
        if (
          ((d.__ = n),
          (d.__b = n.__b + 1),
          null === (f = g[s]) || (f && d.key == f.key && d.type === f.type))
        )
          g[s] = void 0;
        else
          for (p = 0; p < y; p++) {
            if ((f = g[p]) && d.key == f.key && d.type === f.type) {
              g[p] = void 0;
              break;
            }
            f = null;
          }
        Rt(e, d, (f = f || vt), o, i, u, a, c, l),
          (m = d.__e),
          (p = d.ref) &&
            f.ref != p &&
            (h || (h = []),
            f.ref && h.push(f.ref, null, d),
            h.push(p, d.__c || m, d)),
          null != m
            ? (null == v && (v = m),
              "function" == typeof d.type && d.__k === f.__k
                ? (d.__d = c = Ct(d, c, e))
                : (c = Dt(e, d, f, g, m, c)),
              "function" == typeof n.type && (n.__d = c))
            : c && f.__e == c && c.parentNode != e && (c = wt(f));
      }
    for (n.__e = v, s = y; s--; )
      null != g[s] &&
        ("function" == typeof n.type &&
          null != g[s].__e &&
          g[s].__e == n.__d &&
          (n.__d = wt(r, s + 1)),
        Ft(g[s], g[s]));
    if (h) for (s = 0; s < h.length; s++) Bt(h[s], h[++s], h[++s]);
  }
  function Ct(e, t, n) {
    for (var r, o = e.__k, i = 0; o && i < o.length; i++)
      (r = o[i]) &&
        ((r.__ = e),
        (t =
          "function" == typeof r.type
            ? Ct(r, t, n)
            : Dt(n, r, r, o, r.__e, t)));
    return t;
  }
  function Dt(e, t, n, r, o, i) {
    var u, a, c;
    if (void 0 !== t.__d) (u = t.__d), (t.__d = void 0);
    else if (null == n || o != i || null == o.parentNode)
      e: if (null == i || i.parentNode !== e) e.appendChild(o), (u = null);
      else {
        for (a = i, c = 0; (a = a.nextSibling) && c < r.length; c += 2)
          if (a == o) break e;
        e.insertBefore(o, i), (u = i);
      }
    return void 0 !== u ? u : o.nextSibling;
  }
  function kt(e, t, n) {
    "-" === t[0]
      ? e.setProperty(t, n)
      : (e[t] =
          null == n ? "" : "number" != typeof n || gt.test(t) ? n : n + "px");
  }
  function xt(e, t, n, r, o) {
    var i;
    e: if ("style" === t)
      if ("string" == typeof n) e.style.cssText = n;
      else {
        if (("string" == typeof r && (e.style.cssText = r = ""), r))
          for (t in r) (n && t in n) || kt(e.style, t, "");
        if (n) for (t in n) (r && n[t] === r[t]) || kt(e.style, t, n[t]);
      }
    else if ("o" === t[0] && "n" === t[1])
      (i = t !== (t = t.replace(/Capture$/, ""))),
        (t = t.toLowerCase() in e ? t.toLowerCase().slice(2) : t.slice(2)),
        e.l || (e.l = {}),
        (e.l[t + i] = n),
        n
          ? r || e.addEventListener(t, i ? qt : Nt, i)
          : e.removeEventListener(t, i ? qt : Nt, i);
    else if ("dangerouslySetInnerHTML" !== t) {
      if (o) t = t.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if (
        "href" !== t &&
        "list" !== t &&
        "form" !== t &&
        "tabIndex" !== t &&
        "download" !== t &&
        t in e
      )
        try {
          e[t] = null == n ? "" : n;
          break e;
        } catch (e) {}
      "function" == typeof n ||
        (null != n && (!1 !== n || ("a" === t[0] && "r" === t[1]))
          ? e.setAttribute(t, n)
          : e.removeAttribute(t));
    }
  }
  function Nt(e) {
    this.l[e.type + !1](st.event ? st.event(e) : e);
  }
  function qt(e) {
    this.l[e.type + !0](st.event ? st.event(e) : e);
  }
  function Rt(e, t, n, r, o, i, u, a, c) {
    var l,
      s,
      p,
      f,
      d,
      m,
      v,
      h,
      g,
      y,
      b,
      O = t.type;
    if (void 0 !== t.constructor) return null;
    null != n.__h &&
      ((c = n.__h), (a = t.__e = n.__e), (t.__h = null), (i = [a])),
      (l = st.__b) && l(t);
    try {
      e: if ("function" == typeof O) {
        if (
          ((h = t.props),
          (g = (l = O.contextType) && r[l.__c]),
          (y = l ? (g ? g.props.value : l.__) : r),
          n.__c
            ? (v = (s = t.__c = n.__c).__ = s.__E)
            : ("prototype" in O && O.prototype.render
                ? (t.__c = s = new O(h, y))
                : ((t.__c = s = new jt(h, y)),
                  (s.constructor = O),
                  (s.render = Mt)),
              g && g.sub(s),
              (s.props = h),
              s.state || (s.state = {}),
              (s.context = y),
              (s.__n = r),
              (p = s.__d = !0),
              (s.__h = [])),
          null == s.__s && (s.__s = s.state),
          null != O.getDerivedStateFromProps &&
            (s.__s == s.state && (s.__s = yt({}, s.__s)),
            yt(s.__s, O.getDerivedStateFromProps(h, s.__s))),
          (f = s.props),
          (d = s.state),
          p)
        )
          null == O.getDerivedStateFromProps &&
            null != s.componentWillMount &&
            s.componentWillMount(),
            null != s.componentDidMount && s.__h.push(s.componentDidMount);
        else {
          if (
            (null == O.getDerivedStateFromProps &&
              h !== f &&
              null != s.componentWillReceiveProps &&
              s.componentWillReceiveProps(h, y),
            (!s.__e &&
              null != s.shouldComponentUpdate &&
              !1 === s.shouldComponentUpdate(h, s.__s, y)) ||
              t.__v === n.__v)
          ) {
            (s.props = h),
              (s.state = s.__s),
              t.__v !== n.__v && (s.__d = !1),
              (s.__v = t),
              (t.__e = n.__e),
              (t.__k = n.__k),
              t.__k.forEach(function (e) {
                e && (e.__ = t);
              }),
              s.__h.length && u.push(s);
            break e;
          }
          null != s.componentWillUpdate && s.componentWillUpdate(h, s.__s, y),
            null != s.componentDidUpdate &&
              s.__h.push(function () {
                s.componentDidUpdate(f, d, m);
              });
        }
        (s.context = y),
          (s.props = h),
          (s.state = s.__s),
          (l = st.__r) && l(t),
          (s.__d = !1),
          (s.__v = t),
          (s.__P = e),
          (l = s.render(s.props, s.state, s.context)),
          (s.state = s.__s),
          null != s.getChildContext && (r = yt(yt({}, r), s.getChildContext())),
          p ||
            null == s.getSnapshotBeforeUpdate ||
            (m = s.getSnapshotBeforeUpdate(f, d)),
          (b =
            null != l && l.type === Pt && null == l.key ? l.props.children : l),
          At(e, Array.isArray(b) ? b : [b], t, n, r, o, i, u, a, c),
          (s.base = t.__e),
          (t.__h = null),
          s.__h.length && u.push(s),
          v && (s.__E = s.__ = null),
          (s.__e = !1);
      } else null == i && t.__v === n.__v ? ((t.__k = n.__k), (t.__e = n.__e)) : (t.__e = Lt(n.__e, t, n, r, o, i, u, c));
      (l = st.diffed) && l(t);
    } catch (e) {
      (t.__v = null),
        (c || null != i) &&
          ((t.__e = a), (t.__h = !!c), (i[i.indexOf(a)] = null)),
        st.__e(e, t, n);
    }
  }
  function Tt(e, t) {
    st.__c && st.__c(t, e),
      e.some(function (t) {
        try {
          (e = t.__h),
            (t.__h = []),
            e.some(function (e) {
              e.call(t);
            });
        } catch (e) {
          st.__e(e, t.__v);
        }
      });
  }
  function Lt(e, t, n, r, o, i, u, a) {
    var c,
      l,
      s,
      p = n.props,
      f = t.props,
      d = t.type,
      m = 0;
    if (("svg" === d && (o = !0), null != i))
      for (; m < i.length; m++)
        if (
          (c = i[m]) &&
          "setAttribute" in c == !!d &&
          (d ? c.localName === d : 3 === c.nodeType)
        ) {
          (e = c), (i[m] = null);
          break;
        }
    if (null == e) {
      if (null === d) return document.createTextNode(f);
      (e = o
        ? document.createElementNS("http://www.w3.org/2000/svg", d)
        : document.createElement(d, f.is && f)),
        (i = null),
        (a = !1);
    }
    if (null === d) p === f || (a && e.data === f) || (e.data = f);
    else {
      if (
        ((i = i && lt.call(e.childNodes)),
        (l = (p = n.props || vt).dangerouslySetInnerHTML),
        (s = f.dangerouslySetInnerHTML),
        !a)
      ) {
        if (null != i)
          for (p = {}, m = 0; m < e.attributes.length; m++)
            p[e.attributes[m].name] = e.attributes[m].value;
        (s || l) &&
          ((s && ((l && s.__html == l.__html) || s.__html === e.innerHTML)) ||
            (e.innerHTML = (s && s.__html) || ""));
      }
      if (
        ((function (e, t, n, r, o) {
          var i;
          for (i in n)
            "children" === i ||
              "key" === i ||
              i in t ||
              xt(e, i, null, n[i], r);
          for (i in t)
            (o && "function" != typeof t[i]) ||
              "children" === i ||
              "key" === i ||
              "value" === i ||
              "checked" === i ||
              n[i] === t[i] ||
              xt(e, i, t[i], n[i], r);
        })(e, f, p, o, a),
        s)
      )
        t.__k = [];
      else if (
        ((m = t.props.children),
        At(
          e,
          Array.isArray(m) ? m : [m],
          t,
          n,
          r,
          o && "foreignObject" !== d,
          i,
          u,
          i ? i[0] : n.__k && wt(n, 0),
          a
        ),
        null != i)
      )
        for (m = i.length; m--; ) null != i[m] && bt(i[m]);
      a ||
        ("value" in f &&
          void 0 !== (m = f.value) &&
          (m !== p.value || m !== e.value || ("progress" === d && !m)) &&
          xt(e, "value", m, p.value, !1),
        "checked" in f &&
          void 0 !== (m = f.checked) &&
          m !== e.checked &&
          xt(e, "checked", m, p.checked, !1));
    }
    return e;
  }
  function Bt(e, t, n) {
    try {
      "function" == typeof e ? e(t) : (e.current = t);
    } catch (e) {
      st.__e(e, n);
    }
  }
  function Ft(e, t, n) {
    var r, o;
    if (
      (st.unmount && st.unmount(e),
      (r = e.ref) && ((r.current && r.current !== e.__e) || Bt(r, null, t)),
      null != (r = e.__c))
    ) {
      if (r.componentWillUnmount)
        try {
          r.componentWillUnmount();
        } catch (e) {
          st.__e(e, t);
        }
      r.base = r.__P = null;
    }
    if ((r = e.__k))
      for (o = 0; o < r.length; o++)
        r[o] && Ft(r[o], t, "function" != typeof e.type);
    n || null == e.__e || bt(e.__e), (e.__e = e.__d = void 0);
  }
  function Mt(e, t, n) {
    return this.constructor(e, n);
  }
  (lt = ht.slice),
    (st = {
      __e: function (e, t) {
        for (var n, r, o; (t = t.__); )
          if ((n = t.__c) && !n.__)
            try {
              if (
                ((r = n.constructor) &&
                  null != r.getDerivedStateFromError &&
                  (n.setState(r.getDerivedStateFromError(e)), (o = n.__d)),
                null != n.componentDidCatch &&
                  (n.componentDidCatch(e), (o = n.__d)),
                o)
              )
                return (n.__E = n);
            } catch (t) {
              e = t;
            }
        throw e;
      },
    }),
    (pt = 0),
    (jt.prototype.setState = function (e, t) {
      var n;
      (n =
        null != this.__s && this.__s !== this.state
          ? this.__s
          : (this.__s = yt({}, this.state))),
        "function" == typeof e && (e = e(yt({}, n), this.props)),
        e && yt(n, e),
        null != e && this.__v && (t && this.__h.push(t), It(this));
    }),
    (jt.prototype.forceUpdate = function (e) {
      this.__v && ((this.__e = !0), e && this.__h.push(e), It(this));
    }),
    (jt.prototype.render = Pt),
    (ft = []),
    (dt =
      "function" == typeof Promise
        ? Promise.prototype.then.bind(Promise.resolve())
        : setTimeout),
    (Et.__r = 0);
  var Ut = "__aa-highlight__",
    Ht = "__/aa-highlight__";
  function Vt(e) {
    var t = e.highlightedValue.split(Ut),
      n = t.shift(),
      r = (function () {
        var e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
        return {
          get: function () {
            return e;
          },
          add: function (t) {
            var n = e[e.length - 1];
            (null == n ? void 0 : n.isHighlighted) === t.isHighlighted
              ? (e[e.length - 1] = {
                  value: n.value + t.value,
                  isHighlighted: n.isHighlighted,
                })
              : e.push(t);
          },
        };
      })(
        n
          ? [
              {
                value: n,
                isHighlighted: !1,
              },
            ]
          : []
      );
    return (
      t.forEach(function (e) {
        var t = e.split(Ht);
        r.add({
          value: t[0],
          isHighlighted: !0,
        }),
          "" !== t[1] &&
            r.add({
              value: t[1],
              isHighlighted: !1,
            });
      }),
      r.get()
    );
  }
  function Wt(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return Qt(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return Qt(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return Qt(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function Qt(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function $t(e) {
    var t = e.hit,
      n = e.attribute,
      r = Array.isArray(n) ? n : [n],
      o = h(t, ["_highlightResult"].concat(Wt(r), ["value"]));
    return (
      "string" != typeof o && (o = h(t, r) || ""),
      Vt({
        highlightedValue: o,
      })
    );
  }
  var zt = {
      "&amp;": "&",
      "&lt;": "<",
      "&gt;": ">",
      "&quot;": '"',
      "&#39;": "'",
    },
    Gt = new RegExp(/\w/i),
    Kt = /&(amp|quot|lt|gt|#39);/g,
    Jt = RegExp(Kt.source);
  function Yt(e, t) {
    var n,
      r,
      o,
      i = e[t],
      u =
        (null === (n = e[t + 1]) || void 0 === n ? void 0 : n.isHighlighted) ||
        !0,
      a =
        (null === (r = e[t - 1]) || void 0 === r ? void 0 : r.isHighlighted) ||
        !0;
    return Gt.test(
      (o = i.value) && Jt.test(o)
        ? o.replace(Kt, function (e) {
            return zt[e];
          })
        : o
    ) || a !== u
      ? i.isHighlighted
      : a;
  }
  function Xt(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function Zt(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? Xt(Object(n), !0).forEach(function (t) {
            en(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Xt(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function en(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function tn(e) {
    return e.some(function (e) {
      return e.isHighlighted;
    })
      ? e.map(function (t, n) {
          return Zt(
            Zt({}, t),
            {},
            {
              isHighlighted: !Yt(e, n),
            }
          );
        })
      : e.map(function (e) {
          return Zt(
            Zt({}, e),
            {},
            {
              isHighlighted: !1,
            }
          );
        });
  }
  function nn(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return rn(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return rn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return rn(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function rn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function on(e) {
    var t = e.hit,
      n = e.attribute,
      r = Array.isArray(n) ? n : [n],
      o = h(t, ["_snippetResult"].concat(nn(r), ["value"]));
    return (
      "string" != typeof o && (o = h(t, r) || ""),
      Vt({
        highlightedValue: o,
      })
    );
  }
  function un(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function an(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? un(Object(n), !0).forEach(function (t) {
            cn(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : un(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function cn(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  var ln = ["params"];
  function sn(e, t) {
    var n = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var r = Object.getOwnPropertySymbols(e);
      t &&
        (r = r.filter(function (t) {
          return Object.getOwnPropertyDescriptor(e, t).enumerable;
        })),
        n.push.apply(n, r);
    }
    return n;
  }
  function pn(e) {
    for (var t = 1; t < arguments.length; t++) {
      var n = null != arguments[t] ? arguments[t] : {};
      t % 2
        ? sn(Object(n), !0).forEach(function (t) {
            fn(e, t, n[t]);
          })
        : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : sn(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t));
          });
    }
    return e;
  }
  function fn(e, t, n) {
    return (
      t in e
        ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0,
          })
        : (e[t] = n),
      e
    );
  }
  function dn(e, t) {
    if (null == e) return {};
    var n,
      r,
      o = (function (e, t) {
        if (null == e) return {};
        var n,
          r,
          o = {},
          i = Object.keys(e);
        for (r = 0; r < i.length; r++)
          (n = i[r]), t.indexOf(n) >= 0 || (o[n] = e[n]);
        return o;
      })(e, t);
    if (Object.getOwnPropertySymbols) {
      var i = Object.getOwnPropertySymbols(e);
      for (r = 0; r < i.length; r++)
        (n = i[r]),
          t.indexOf(n) >= 0 ||
            (Object.prototype.propertyIsEnumerable.call(e, n) && (o[n] = e[n]));
    }
    return o;
  }
  function mn(e) {
    return (
      (function (e) {
        if (Array.isArray(e)) return vn(e);
      })(e) ||
      (function (e) {
        if (
          ("undefined" != typeof Symbol && null != e[Symbol.iterator]) ||
          null != e["@@iterator"]
        )
          return Array.from(e);
      })(e) ||
      (function (e, t) {
        if (!e) return;
        if ("string" == typeof e) return vn(e, t);
        var n = Object.prototype.toString.call(e).slice(8, -1);
        "Object" === n && e.constructor && (n = e.constructor.name);
        if ("Map" === n || "Set" === n) return Array.from(e);
        if (
          "Arguments" === n ||
          /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
        )
          return vn(e, t);
      })(e) ||
      (function () {
        throw new TypeError(
          "Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
        );
      })()
    );
  }
  function vn(e, t) {
    (null == t || t > e.length) && (t = e.length);
    for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
    return r;
  }
  function hn(e) {
    var t = e.createElement,
      n = e.Fragment;
    function r(e) {
      var r = e.hit,
        o = e.attribute,
        i = e.tagName,
        u = void 0 === i ? "mark" : i;
      return t(
        n,
        {},
        $t({
          hit: r,
          attribute: o,
        }).map(function (e, n) {
          return e.isHighlighted
            ? t(
                u,
                {
                  key: n,
                },
                e.value
              )
            : e.value;
        })
      );
    }
    return (r.__autocomplete_componentName = "Highlight"), r;
  }
  function gn(e) {
    var t = e.createElement,
      n = e.Fragment;
    function r(e) {
      var r,
        o = e.hit,
        i = e.attribute,
        u = e.tagName,
        a = void 0 === u ? "mark" : u;
      return t(
        n,
        {},
        ((r = {
          hit: o,
          attribute: i,
        }),
        tn($t(r))).map(function (e, n) {
          return e.isHighlighted
            ? t(
                a,
                {
                  key: n,
                },
                e.value
              )
            : e.value;
        })
      );
    }
    return (r.__autocomplete_componentName = "ReverseHighlight"), r;
  }
  function yn(e) {
    var t = e.createElement,
      n = e.Fragment;
    function r(e) {
      var r,
        o = e.hit,
        i = e.attribute,
        u = e.tagName,
        a = void 0 === u ? "mark" : u;
      return t(
        n,
        {},
        ((r = {
          hit: o,
          attribute: i,
        }),
        tn(on(r))).map(function (e, n) {
          return e.isHighlighted
            ? t(
                a,
                {
                  key: n,
                },
                e.value
              )
            : e.value;
        })
      );
    }
    return (r.__autocomplete_componentName = "ReverseSnippet"), r;
  }
  function bn(e) {
    var t = e.createElement,
      n = e.Fragment;
    function r(e) {
      var r = e.hit,
        o = e.attribute,
        i = e.tagName,
        u = void 0 === i ? "mark" : i;
      return t(
        n,
        {},
        on({
          hit: r,
          attribute: o,
        }).map(function (e, n) {
          return e.isHighlighted
            ? t(
                u,
                {
                  key: n,
                },
                e.value
              )
            : e.value;
        })
      );
    }
    return (r.__autocomplete_componentName = "Snippet"), r;
  }
  var On = [
      "classNames",
      "container",
      "getEnvironmentProps",
      "getFormProps",
      "getInputProps",
      "getItemProps",
      "getLabelProps",
      "getListProps",
      "getPanelProps",
      "getRootProps",
      "panelContainer",
      "panelPlacement",
      "render",
      "renderNoResults",
      "renderer",
      "detachedMediaQuery",
      "components",
      "translations",
    ],
    _n = {
      clearButton: "aa-ClearButton",
      detachedCancelButton: "aa-DetachedCancelButton",
      detachedContainer: "aa-DetachedContainer",
      detachedFormContainer: "aa-DetachedFormContainer",
      detachedOverlay: "aa-DetachedOverlay",
      detachedSearchButton: "aa-DetachedSearchButton",
      detachedSearchButtonIcon: "aa-DetachedSearchButtonIcon",
      detachedSearchButtonPlaceholder: "aa-DetachedSearchButtonPlaceholder",
      form: "aa-Form",
      input: "aa-Input",
      inputWrapper: "aa-InputWrapper",
      inputWrapperPrefix: "aa-InputWrapperPrefix",
      inputWrapperSuffix: "aa-InputWrapperSuffix",
      item: "aa-Item",
      label: "aa-Label",
      list: "aa-List",
      loadingIndicator: "aa-LoadingIndicator",
      panel: "aa-Panel",
      panelLayout: "aa-PanelLayout aa-Panel--scrollable",
      root: "aa-Autocomplete",
      source: "aa-Source",
      sourceFooter: "aa-SourceFooter",
      sourceHeader: "aa-SourceHeader",
      sourceNoResults: "aa-SourceNoResults",
      submitButton: "aa-SubmitButton",
    },
    Pn = function (e, t) {
      var n = e.children;
      (0, e.render)(n, t);
    },
    jn = {
      createElement: Ot,
      Fragment: Pt,
      render: function (e, t, n) {
        var r, o, i;
        st.__ && st.__(e, t),
          (o = (r = "function" == typeof n) ? null : (n && n.__k) || t.__k),
          (i = []),
          Rt(
            t,
            (e = ((!r && n) || t).__k = Ot(Pt, null, [e])),
            o || vt,
            vt,
            void 0 !== t.ownerSVGElement,
            !r && n
              ? [n]
              : o
              ? null
              : t.firstChild
              ? lt.call(t.childNodes)
              : null,
            i,
            !r && n ? n : o ? o.__e : t.firstChild,
            r
          ),
          Tt(i, e);
      },
    };
  function wn(e) {
    var t = e.panelPlacement,
      n = e.container,
      r = e.form,
      o = e.environment,
      i = n.getBoundingClientRect(),
      u =
        (o.pageYOffset ||
          o.document.documentElement.scrollTop ||
          o.document.body.scrollTop ||
          0) +
        i.top +
        i.height;
    switch (t) {
      case "start":
        return {
          top: u,
          left: i.left,
        };
      case "end":
        return {
          top: u,
          right: o.document.documentElement.clientWidth - (i.left + i.width),
        };
      case "full-width":
        return {
          top: u,
          left: 0,
          right: 0,
          width: "unset",
          maxWidth: "unset",
        };
      case "input-wrapper-width":
        var a = r.getBoundingClientRect();
        return {
          top: u,
          left: a.left,
          right: o.document.documentElement.clientWidth - (a.left + a.width),
          width: "unset",
          maxWidth: "unset",
        };
      default:
        throw new Error(
          "[Autocomplete] The `panelPlacement` value ".concat(
            JSON.stringify(t),
            " is not valid."
          )
        );
    }
  }
  var Sn = [
      {
        segment: "autocomplete-js",
        version: b,
      },
    ],
    In = ["components"];
  var En = (function (e, t) {
    function n(t) {
      return e({
        searchClient: t.searchClient,
        queries: t.requests.map(function (e) {
          return e.query;
        }),
      }).then(function (e) {
        return e.map(function (e, n) {
          var r = t.requests[n];
          return {
            items: e,
            sourceId: r.sourceId,
            transformResponse: r.transformResponse,
          };
        });
      });
    }
    return function (e) {
      return function (r) {
        return an(
          an(
            {
              requesterId: t,
              execute: n,
            },
            e
          ),
          r
        );
      };
    };
  })(function (e) {
    return (function (e) {
      var t = e.searchClient,
        n = e.queries,
        r = e.userAgents,
        o = void 0 === r ? [] : r;
      return (
        "function" == typeof t.addAlgoliaAgent &&
          [].concat(mn(O), mn(o)).forEach(function (e) {
            var n = e.segment,
              r = e.version;
            t.addAlgoliaAgent(n, r);
          }),
        t
          .search(
            n.map(function (e) {
              var t = e.params;
              return pn(
                pn({}, dn(e, ln)),
                {},
                {
                  params: pn(
                    {
                      hitsPerPage: 5,
                      highlightPreTag: Ut,
                      highlightPostTag: Ht,
                    },
                    t
                  ),
                }
              );
            })
          )
          .then(function (e) {
            return e.results;
          })
      );
    })(
      n(
        n({}, e),
        {},
        {
          userAgents: Sn,
        }
      )
    );
  }, "algolia");
  var An = En({
    transformResponse: function (e) {
      return e.hits;
    },
  });
  (e.autocomplete = function (e) {
    var t,
      r = (function () {
        var e = [],
          t = [];
        function n(n) {
          e.push(n);
          var r = n();
          t.push(r);
        }
        return {
          runEffect: n,
          cleanupEffects: function () {
            var e = t;
            (t = []),
              e.forEach(function (e) {
                e();
              });
          },
          runEffects: function () {
            var t = e;
            (e = []),
              t.forEach(function (e) {
                n(e);
              });
          },
        };
      })(),
      a = r.runEffect,
      c = r.cleanupEffects,
      l = r.runEffects,
      s =
        ((t = []),
        {
          reactive: function (e) {
            var n = e(),
              r = {
                _fn: e,
                _ref: {
                  current: n,
                },
                get value() {
                  return this._ref.current;
                },
                set value(e) {
                  this._ref.current = e;
                },
              };
            return t.push(r), r;
          },
          runReactives: function () {
            t.forEach(function (e) {
              e._ref.current = e._fn();
            });
          },
        }),
      d = s.reactive,
      m = s.runReactives,
      h = p(!1),
      y = p(e),
      b = p(void 0),
      O = d(function () {
        return (function (e) {
          var t,
            r = e.classNames,
            o = e.container,
            i = e.getEnvironmentProps,
            a = e.getFormProps,
            c = e.getInputProps,
            l = e.getItemProps,
            s = e.getLabelProps,
            p = e.getListProps,
            f = e.getPanelProps,
            d = e.getRootProps,
            m = e.panelContainer,
            h = e.panelPlacement,
            g = e.render,
            y = e.renderNoResults,
            b = e.renderer,
            O = e.detachedMediaQuery,
            _ = e.components,
            P = e.translations,
            j = u(e, On),
            w = "undefined" != typeof window ? window : {},
            S = Qe(w, o);
          S.tagName;
          var I = n(n({}, jn), b),
            E = {
              Highlight: hn(I),
              ReverseHighlight: gn(I),
              ReverseSnippet: yn(I),
              Snippet: bn(I),
            };
          return {
            renderer: {
              classNames: $e(_n, null != r ? r : {}),
              container: S,
              getEnvironmentProps:
                null != i
                  ? i
                  : function (e) {
                      return e.props;
                    },
              getFormProps:
                null != a
                  ? a
                  : function (e) {
                      return e.props;
                    },
              getInputProps:
                null != c
                  ? c
                  : function (e) {
                      return e.props;
                    },
              getItemProps:
                null != l
                  ? l
                  : function (e) {
                      return e.props;
                    },
              getLabelProps:
                null != s
                  ? s
                  : function (e) {
                      return e.props;
                    },
              getListProps:
                null != p
                  ? p
                  : function (e) {
                      return e.props;
                    },
              getPanelProps:
                null != f
                  ? f
                  : function (e) {
                      return e.props;
                    },
              getRootProps:
                null != d
                  ? d
                  : function (e) {
                      return e.props;
                    },
              panelContainer: m ? Qe(w, m) : w.document.body,
              panelPlacement: null != h ? h : "input-wrapper-width",
              render: null != g ? g : Pn,
              renderNoResults: y,
              renderer: I,
              detachedMediaQuery:
                null != O
                  ? O
                  : getComputedStyle(
                      w.document.documentElement
                    ).getPropertyValue("--aa-detached-media-query"),
              components: n(n({}, E), _),
              translations: n(
                n(
                  {},
                  {
                    clearButtonTitle: "Clear",
                    detachedCancelButtonText: "Cancel",
                    submitButtonTitle: "Submit",
                  }
                ),
                P
              ),
            },
            core: n(
              n({}, j),
              {},
              {
                id: null !== (t = j.id) && void 0 !== t ? t : v(),
                environment: w,
              }
            ),
          };
        })(y.current);
      }),
      _ = d(function () {
        return O.value.core.environment.matchMedia(
          O.value.renderer.detachedMediaQuery
        ).matches;
      }),
      P = d(function () {
        return Me(
          n(
            n({}, O.value.core),
            {},
            {
              onStateChange: function (e) {
                var t, n, r;
                (h.current = e.state.collections.some(function (e) {
                  return e.source.templates.noResults;
                })),
                  null === (t = b.current) || void 0 === t || t.call(b, e),
                  null === (n = (r = O.value.core).onStateChange) ||
                    void 0 === n ||
                    n.call(r, e);
              },
              shouldPanelOpen:
                y.current.shouldPanelOpen ||
                function (e) {
                  var t = e.state;
                  if (_.value) return !0;
                  var n = g(t) > 0;
                  if (!O.value.core.openOnFocus && !t.query) return n;
                  var r = Boolean(
                    h.current || O.value.renderer.renderNoResults
                  );
                  return (!n && r) || n;
                },
              __autocomplete_metadata: {
                userAgents: Sn,
                options: e,
              },
            }
          )
        );
      }),
      j = p(
        n(
          {
            collections: [],
            completion: null,
            context: {},
            isOpen: !1,
            query: "",
            activeItemId: null,
            status: "idle",
          },
          O.value.core.initialState
        )
      ),
      w = {
        getEnvironmentProps: O.value.renderer.getEnvironmentProps,
        getFormProps: O.value.renderer.getFormProps,
        getInputProps: O.value.renderer.getInputProps,
        getItemProps: O.value.renderer.getItemProps,
        getLabelProps: O.value.renderer.getLabelProps,
        getListProps: O.value.renderer.getListProps,
        getPanelProps: O.value.renderer.getPanelProps,
        getRootProps: O.value.renderer.getRootProps,
      },
      S = {
        setActiveItemId: P.value.setActiveItemId,
        setQuery: P.value.setQuery,
        setCollections: P.value.setCollections,
        setIsOpen: P.value.setIsOpen,
        setStatus: P.value.setStatus,
        setContext: P.value.setContext,
        refresh: P.value.refresh,
      },
      I = d(function () {
        return Ve.bind(O.value.renderer.renderer.createElement);
      }),
      E = d(function () {
        return ct({
          autocomplete: P.value,
          autocompleteScopeApi: S,
          classNames: O.value.renderer.classNames,
          environment: O.value.core.environment,
          isDetached: _.value,
          placeholder: O.value.core.placeholder,
          propGetters: w,
          setIsModalOpen: k,
          state: j.current,
          translations: O.value.renderer.translations,
        });
      });
    function A() {
      tt(E.value.panel, {
        style: _.value
          ? {}
          : wn({
              panelPlacement: O.value.renderer.panelPlacement,
              container: E.value.root,
              form: E.value.form,
              environment: O.value.core.environment,
            }),
      });
    }
    function C(e) {
      j.current = e;
      var t = {
          autocomplete: P.value,
          autocompleteScopeApi: S,
          classNames: O.value.renderer.classNames,
          components: O.value.renderer.components,
          container: O.value.renderer.container,
          html: I.value,
          dom: E.value,
          panelContainer: _.value
            ? E.value.detachedContainer
            : O.value.renderer.panelContainer,
          propGetters: w,
          state: j.current,
          renderer: O.value.renderer.renderer,
        },
        r =
          (!g(e) && !h.current && O.value.renderer.renderNoResults) ||
          O.value.renderer.render;
      !(function (e) {
        var t = e.autocomplete,
          r = e.autocompleteScopeApi,
          o = e.dom,
          i = e.propGetters,
          u = e.state;
        nt(
          o.root,
          i.getRootProps(
            n(
              {
                state: u,
                props: t.getRootProps({}),
              },
              r
            )
          )
        ),
          nt(
            o.input,
            i.getInputProps(
              n(
                {
                  state: u,
                  props: t.getInputProps({
                    inputElement: o.input,
                  }),
                  inputElement: o.input,
                },
                r
              )
            )
          ),
          tt(o.label, {
            hidden: "stalled" === u.status,
          }),
          tt(o.loadingIndicator, {
            hidden: "stalled" !== u.status,
          }),
          tt(o.clearButton, {
            hidden: !u.query,
          });
      })(t),
        (function (e, t) {
          var r = t.autocomplete,
            o = t.autocompleteScopeApi,
            u = t.classNames,
            a = t.html,
            c = t.dom,
            l = t.panelContainer,
            s = t.propGetters,
            p = t.state,
            f = t.components,
            d = t.renderer;
          if (p.isOpen) {
            l.contains(c.panel) ||
              "loading" === p.status ||
              l.appendChild(c.panel),
              c.panel.classList.toggle(
                "aa-Panel--stalled",
                "stalled" === p.status
              );
            var m = p.collections
                .filter(function (e) {
                  var t = e.source,
                    n = e.items;
                  return t.templates.noResults || n.length > 0;
                })
                .map(function (e, t) {
                  var c = e.source,
                    l = e.items;
                  return d.createElement(
                    "section",
                    {
                      key: t,
                      className: u.source,
                      "data-autocomplete-source-id": c.sourceId,
                    },
                    c.templates.header &&
                      d.createElement(
                        "div",
                        {
                          className: u.sourceHeader,
                        },
                        c.templates.header({
                          components: f,
                          createElement: d.createElement,
                          Fragment: d.Fragment,
                          items: l,
                          source: c,
                          state: p,
                          html: a,
                        })
                      ),
                    c.templates.noResults && 0 === l.length
                      ? d.createElement(
                          "div",
                          {
                            className: u.sourceNoResults,
                          },
                          c.templates.noResults({
                            components: f,
                            createElement: d.createElement,
                            Fragment: d.Fragment,
                            source: c,
                            state: p,
                            html: a,
                          })
                        )
                      : d.createElement(
                          "ul",
                          i(
                            {
                              className: u.list,
                            },
                            s.getListProps(
                              n(
                                {
                                  state: p,
                                  props: r.getListProps({}),
                                },
                                o
                              )
                            )
                          ),
                          l.map(function (e) {
                            var t = r.getItemProps({
                              item: e,
                              source: c,
                            });
                            return d.createElement(
                              "li",
                              i(
                                {
                                  key: t.id,
                                  className: u.item,
                                },
                                s.getItemProps(
                                  n(
                                    {
                                      state: p,
                                      props: t,
                                    },
                                    o
                                  )
                                )
                              ),
                              c.templates.item({
                                components: f,
                                createElement: d.createElement,
                                Fragment: d.Fragment,
                                item: e,
                                state: p,
                                html: a,
                              })
                            );
                          })
                        ),
                    c.templates.footer &&
                      d.createElement(
                        "div",
                        {
                          className: u.sourceFooter,
                        },
                        c.templates.footer({
                          components: f,
                          createElement: d.createElement,
                          Fragment: d.Fragment,
                          items: l,
                          source: c,
                          state: p,
                          html: a,
                        })
                      )
                  );
                }),
              v = d.createElement(
                d.Fragment,
                null,
                d.createElement(
                  "div",
                  {
                    className: u.panelLayout,
                  },
                  m
                ),
                d.createElement("div", {
                  className: "aa-GradientBottom",
                })
              ),
              h = m.reduce(function (e, t) {
                return (e[t.props["data-autocomplete-source-id"]] = t), e;
              }, {});
            e(
              n(
                n(
                  {
                    children: v,
                    state: p,
                    sections: m,
                    elements: h,
                  },
                  d
                ),
                {},
                {
                  components: f,
                  html: a,
                },
                o
              ),
              c.panel
            );
          } else l.contains(c.panel) && l.removeChild(c.panel);
        })(r, t);
    }
    function D() {
      var e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
      c();
      var t = O.value.renderer,
        n = t.components,
        r = u(t, In);
      (y.current = Ge(
        r,
        O.value.core,
        {
          components: Ke(n, function (e) {
            return !e.value.hasOwnProperty("__autocomplete_componentName");
          }),
          initialState: j.current,
        },
        e
      )),
        m(),
        l(),
        P.value.refresh().then(function () {
          C(j.current);
        });
    }
    function k(e) {
      requestAnimationFrame(function () {
        var t = O.value.core.environment.document.body.contains(
          E.value.detachedOverlay
        );
        e !== t &&
          (e
            ? (O.value.core.environment.document.body.appendChild(
                E.value.detachedOverlay
              ),
              O.value.core.environment.document.body.classList.add(
                "aa-Detached"
              ),
              E.value.input.focus())
            : (O.value.core.environment.document.body.removeChild(
                E.value.detachedOverlay
              ),
              O.value.core.environment.document.body.classList.remove(
                "aa-Detached"
              ),
              P.value.setQuery(""),
              P.value.refresh()));
      });
    }
    return (
      a(function () {
        var e = P.value.getEnvironmentProps({
          formElement: E.value.form,
          panelElement: E.value.panel,
          inputElement: E.value.input,
        });
        return (
          tt(O.value.core.environment, e),
          function () {
            tt(
              O.value.core.environment,
              Object.keys(e).reduce(function (e, t) {
                return n(n({}, e), {}, o({}, t, void 0));
              }, {})
            );
          }
        );
      }),
      a(function () {
        var e = _.value
            ? O.value.core.environment.document.body
            : O.value.renderer.panelContainer,
          t = _.value ? E.value.detachedOverlay : E.value.panel;
        return (
          _.value && j.current.isOpen && k(!0),
          C(j.current),
          function () {
            e.contains(t) && e.removeChild(t);
          }
        );
      }),
      a(function () {
        var e = O.value.renderer.container;
        return (
          e.appendChild(E.value.root),
          function () {
            e.removeChild(E.value.root);
          }
        );
      }),
      a(function () {
        var e = f(function (e) {
          C(e.state);
        }, 0);
        return (
          (b.current = function (t) {
            var n = t.state,
              r = t.prevState;
            (_.value && r.isOpen !== n.isOpen && k(n.isOpen),
            _.value || !n.isOpen || r.isOpen || A(),
            n.query !== r.query) &&
              O.value.core.environment.document
                .querySelectorAll(".aa-Panel--scrollable")
                .forEach(function (e) {
                  0 !== e.scrollTop && (e.scrollTop = 0);
                });
            e({
              state: n,
            });
          }),
          function () {
            b.current = void 0;
          }
        );
      }),
      a(function () {
        var e = f(function () {
          var e = _.value;
          (_.value = O.value.core.environment.matchMedia(
            O.value.renderer.detachedMediaQuery
          ).matches),
            e !== _.value ? D({}) : requestAnimationFrame(A);
        }, 20);
        return (
          O.value.core.environment.addEventListener("resize", e),
          function () {
            O.value.core.environment.removeEventListener("resize", e);
          }
        );
      }),
      a(function () {
        if (!_.value) return function () {};
        function e(e) {
          E.value.detachedContainer.classList.toggle(
            "aa-DetachedContainer--modal",
            e
          );
        }
        function t(t) {
          e(t.matches);
        }
        var n = O.value.core.environment.matchMedia(
          getComputedStyle(
            O.value.core.environment.document.documentElement
          ).getPropertyValue("--aa-detached-modal-media-query")
        );
        e(n.matches);
        var r = Boolean(n.addEventListener);
        return (
          r ? n.addEventListener("change", t) : n.addListener(t),
          function () {
            r ? n.removeEventListener("change", t) : n.removeListener(t);
          }
        );
      }),
      a(function () {
        return requestAnimationFrame(A), function () {};
      }),
      n(
        n({}, S),
        {},
        {
          update: D,
          destroy: function () {
            c();
          },
        }
      )
    );
  }),
    (e.getAlgoliaFacets = function (e) {
      var t = En({
          transformResponse: function (e) {
            return e.facetHits;
          },
        }),
        r = e.queries.map(function (e) {
          return n(
            n({}, e),
            {},
            {
              type: "facet",
            }
          );
        });
      return t(
        n(
          n({}, e),
          {},
          {
            queries: r,
          }
        )
      );
    }),
    (e.getAlgoliaResults = An),
    Object.defineProperty(e, "__esModule", {
      value: !0,
    });
});
