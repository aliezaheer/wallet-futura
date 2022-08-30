(function (t) {
  function e(e) {
    for (
      var a, c, i = e[0], s = e[1], u = e[2], d = 0, f = [];
      d < i.length;
      d++
    )
      (c = i[d]),
        Object.prototype.hasOwnProperty.call(r, c) && r[c] && f.push(r[c][0]),
        (r[c] = 0);
    for (a in s) Object.prototype.hasOwnProperty.call(s, a) && (t[a] = s[a]);
    l && l(e);
    while (f.length) f.shift()();
    return o.push.apply(o, u || []), n();
  }
  function n() {
    for (var t, e = 0; e < o.length; e++) {
      for (var n = o[e], a = !0, i = 1; i < n.length; i++) {
        var s = n[i];
        0 !== r[s] && (a = !1);
      }
      a && (o.splice(e--, 1), (t = c((c.s = n[0]))));
    }
    return t;
  }
  var a = {},
    r = {
      app: 0,
    },
    o = [];
  function c(e) {
    if (a[e]) return a[e].exports;
    var n = (a[e] = {
      i: e,
      l: !1,
      exports: {},
    });
    return t[e].call(n.exports, n, n.exports, c), (n.l = !0), n.exports;
  }
  (c.m = t),
    (c.c = a),
    (c.d = function (t, e, n) {
      c.o(t, e) ||
        Object.defineProperty(t, e, {
          enumerable: !0,
          get: n,
        });
    }),
    (c.r = function (t) {
      "undefined" !== typeof Symbol &&
        Symbol.toStringTag &&
        Object.defineProperty(t, Symbol.toStringTag, {
          value: "Module",
        }),
        Object.defineProperty(t, "__esModule", {
          value: !0,
        });
    }),
    (c.t = function (t, e) {
      if ((1 & e && (t = c(t)), 8 & e)) return t;
      if (4 & e && "object" === typeof t && t && t.__esModule) return t;
      var n = Object.create(null);
      if (
        (c.r(n),
        Object.defineProperty(n, "default", {
          enumerable: !0,
          value: t,
        }),
        2 & e && "string" != typeof t)
      )
        for (var a in t)
          c.d(
            n,
            a,
            function (e) {
              return t[e];
            }.bind(null, a)
          );
      return n;
    }),
    (c.n = function (t) {
      var e =
        t && t.__esModule
          ? function () {
              return t["default"];
            }
          : function () {
              return t;
            };
      return c.d(e, "a", e), e;
    }),
    (c.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }),
    (c.p = "/");
  var i = (window["webpackJsonp"] = window["webpackJsonp"] || []),
    s = i.push.bind(i);
  (i.push = e), (i = i.slice());
  for (var u = 0; u < i.length; u++) e(i[u]);
  var l = s;
  o.push([0, "chunk-vendors"]), n();
})({
  0: function (t, e, n) {
    t.exports = n("56d7");
  },
  "034f": function (t, e, n) {
    "use strict";
    n("85ec");
  },
  1: function (t, e) {},
  10: function (t, e) {},
  11: function (t, e) {},
  12: function (t, e) {},
  13: function (t, e) {},
  14: function (t, e) {},
  15: function (t, e) {},
  16: function (t, e) {},
  17: function (t, e) {},
  18: function (t, e) {},
  19: function (t, e) {},
  2: function (t, e) {},
  20: function (t, e) {},
  21: function (t, e) {},
  22: function (t, e) {},
  3: function (t, e) {},
  4: function (t, e) {},
  5: function (t, e) {},
  "56d7": function (t, e, n) {
    "use strict";
    n.r(e);
    n("e260"), n("e6cf"), n("cca6"), n("a79d");
    var a = n("2b0e"),
      r = function () {
        var t = this,
          e = t.$createElement,
          n = t._self._c || e;
        return n(
          "div",
          {
            attrs: {
              id: "app",
            },
          },
          [
            n("header", {}, [
              n(
                "nav",
                {
                  staticClass: "navbar navbar-expand-lg",
                },
                [
                  n(
                    "div",
                    {
                      staticClass: "container",
                    },
                    [
                      t._m(0),
                      t.getUserAccount
                        ? [
                            n(
                              "button",
                              {
                                staticClass: "btn btn-primary btn-connect",
                                attrs: {
                                  disabled: !0,
                                },
                              },
                              [
                                t._v(
                                  " " +
                                    t._s(t.addrTruncation(t.getUserAccount)) +
                                    " "
                                ),
                              ]
                            ),
                          ]
                        : n(
                            "button",
                            {
                              staticClass: "btn btn-primary btn-connect",
                              on: {
                                click: t.onConnect,
                              },
                            },
                            [t._v(" Connect Wallet ")]
                          ),
                    ],
                    2
                  ),
                ]
              ),
            ]),
            n("div", [
              t._m(1),
              n(
                "div",
                {
                  staticClass: "row justify-content-center mb-5",
                },
                [
                  n(
                    "div",
                    {
                      staticClass: "col-12 col-md-6",
                    },
                    [
                      n(
                        "h3",
                        {
                          staticClass: "text-center font-weight-bold mb-3",
                        },
                        {
                          attrs: {
                            deadline: t.deadline,
                            showDays: !0,
                          },
                        }
                      ),
                    ],
                    1
                  ),
                ]
              ),
              n(
                "div",
                {
                  staticClass: "d-column d-md-flex justify-content-center",
                },
                [
                  t._m(2),
                  n(
                    "div",
                    {
                      staticClass: "card white",
                    },
                    [
                      n("div", [
                        n(
                          "div",
                          {
                            staticClass: "box",
                          },
                          [
                            n("strong", [t._v("Your Balance")]),
                            n("p", [t._v(t._s(t.balance) + " BNB")]),
                          ]
                        ),
                        t._m(3),
                        t._m(4),
                        n("div", [
                          n("input", {
                            directives: [
                              {
                                name: "model",
                                rawName: "v-model",
                                value: t.amount,
                                expression: "amount",
                              },
                            ],
                            attrs: {
                              type: "number",
                              placeholder: "1 BNB = 300,000 KBT",
                            },
                            domProps: {
                              value: t.amount,
                            },
                            on: {
                              input: function (e) {
                                e.target.composing ||
                                  (t.amount = e.target.value);
                              },
                            },
                          }),
                        ]),
                        n(
                          "div",
                          [
                            t.getUserAccount
                              ? [
                                  n(
                                    "button",
                                    {
                                      staticClass:
                                        "btn btn-primary btn-connect",
                                      attrs: {
                                        disabled: t.loading,
                                      },
                                      on: {
                                        click: t.onDeposit,
                                      },
                                    },
                                    [
                                      t._v(
                                        " " +
                                          t._s(
                                            t.loading ? "Confirming..." : "BUY"
                                          ) +
                                          " "
                                      ),
                                    ]
                                  ),
                                ]
                              : n(
                                  "button",
                                  {
                                    staticClass: "btn btn-primary btn-connect",
                                    on: {
                                      click: t.onConnect,
                                    },
                                  },
                                  [t._v(" Connect Wallet ")]
                                ),
                          ],
                          2
                        ),
                        n(
                          "div",
                          {
                            staticClass: "mt-4",
                          },
                          [
                            n(
                              "div",
                              {
                                staticClass: "progress",
                              },
                              [
                                n(
                                  "div",
                                  {
                                    staticClass:
                                      "progress-bar progress-bar-striped bg-success",
                                    style:
                                      "width:" +
                                      ((t.totalCollected / 2e3) * 100).toFixed(
                                        2
                                      ) +
                                      "%",
                                    attrs: {
                                      role: "progressbar",
                                      "aria-valuenow":
                                        "((totalCollected/2000)*100).toFixed(2)",
                                      "aria-valuemin": "0",
                                      "aria-valuemax": "100",
                                    },
                                  },
                                  [
                                    t._v(
                                      " " +
                                        t._s(t.totalCollected) +
                                        " / 2000 BNB "
                                    ),
                                  ]
                                ),
                              ]
                            ),
                          ]
                        ),
                      ]),
                    ]
                  ),
                ]
              ),
            ]),
          ]
        );
      },
      o = [
        function () {
          var t = this,
            e = t.$createElement,
            a = t._self._c || e;
          return a(
            "a",
            {
              staticClass: "navbar-brand-text",
              attrs: {
                href: "/",
              },
            },
            [
              a("img", {
                staticClass: "logo",
                attrs: {
                  src: n("cf05"),
                  alt: "",
                },
              }),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "d-flex justify-content-center",
            },
            [
              n(
                "h1",
                {
                  staticClass: "mb-5",
                },
                [t._v("Public Sale")]
              ),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "card",
            },
            [
              n("div", [
                n(
                  "h1",
                  {
                    staticClass: "mb-5",
                  },
                  [t._v("Welcome to the future of finance")]
                ),
                n(
                  "p",
                  {
                    staticClass: "text-justify",
                  },
                  [
                    t._v(
                      " Kabootle represents the state-of-the-art of hybrid exchanges, by combining the best features of CEX and DEX. Kabootle Exchange provides users with a sustainable and unique underlying value proposition. "
                    ),
                  ]
                ),
              ]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n(
            "div",
            {
              staticClass: "box",
            },
            [
              n("strong", [t._v("Tokens you will Get")]),
              n("p", [t._v("1BNB = 300,000 KBT")]),
            ]
          );
        },
        function () {
          var t = this,
            e = t.$createElement,
            n = t._self._c || e;
          return n("div", [
            n(
              "p",
              {
                staticClass: "min",
              },
              [t._v("Min: 0.01 BNB - Max: 5 BNB")]
            ),
          ]);
        },
      ],
      c = n("1da1"),
      i = n("5530"),
      s =
        (n("96cf"),
        n("fb6a"),
        n("a9e3"),
        n("b680"),
        n("d3b7"),
        n("25f0"),
        n("99e5")),
      u = n.n(s),
      l = n("5aac"),
      d = n.n(l),
      f = n("2b64"),
      b = n.n(f),
      p = n("2f62"),
      m = {
        name: "App",
        components: {
          FlipCountdown: b.a,
        },
        data: function () {
          return {
            deadline: "2021-11-04 00:00:00",
            amount: 0,
            balance: 0,
            totalCollected: 0,
            web3Modal: "",
            loading: !1,
            ownerAddr: "0x94086F70B4E0880DcEB2a6852497841e7f97C0ac",
          };
        },
        beforeMount: function () {
          this.web3Modal = new d.a({
            cacheProvider: 0,
            disableInjectedProvider: true,
          });
        },
        mounted: function () {},
        methods: Object(i["a"])(
          Object(i["a"])(
            {},
            Object(p["b"])("wallet", ["SET_WEB3", "SET_USER_ACCOUNT"])
          ),
          {},
          {
            addrTruncation: function (t) {
              return t.slice(0, 6) + "…" + t.slice(t.length - 4, t.length);
            },
            disconnect: function () {
              this.SET_WEB3(null), this.SET_USER_ACCOUNT(null);
            },
            onConnect: function () {
              var t = this;
              return Object(c["a"])(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(
                    function (e) {
                      while (1)
                        switch ((e.prev = e.next)) {
                          case 0:
                            if (((e.prev = 0), !window.ethereum)) {
                              e.next = 8;
                              break;
                            }
                            return (e.next = 4), t.web3Modal.connect();
                          case 4:
                            (n = e.sent), t.onProvider(n), (e.next = 9);
                            break;
                          case 8:
                            t.$toasted.show("Install Metamask Wallet!");
                          case 9:
                            e.next = 15;
                            break;
                          case 11:
                            return (
                              (e.prev = 11),
                              (e.t0 = e["catch"](0)),
                              console.log(
                                "Could not get a wallet connection",
                                e.t0
                              ),
                              e.abrupt("return")
                            );
                          case 15:
                          case "end":
                            return e.stop();
                        }
                    },
                    e,
                    null,
                    [[0, 11]]
                  );
                })
              )();
            },
            onProvider: function (t) {
              var e = this;
              return Object(c["a"])(
                regeneratorRuntime.mark(function n() {
                  var a, r, o, c;
                  return regeneratorRuntime.wrap(
                    function (n) {
                      while (1)
                        switch ((n.prev = n.next)) {
                          case 0:
                            return (
                              (n.prev = 0),
                              (a = new u.a(t)),
                              e.SET_WEB3(a),
                              (n.next = 5),
                              a.eth.getAccounts()
                            );
                          case 5:
                            return (
                              (r = n.sent), (n.next = 8), a.eth.getBalance(r[0])
                            );
                          case 8:
                            return (
                              (o = n.sent),
                              (e.balance = e.humanized(o, 2)),
                              (n.next = 12),
                              a.eth.getBalance(e.ownerAddr)
                            );
                          case 12:
                            (c = n.sent),
                              (e.totalCollected = e.humanized(c, 2)),
                              e.SET_USER_ACCOUNT(r[0]),
                              (n.next = 21);
                            break;
                          case 17:
                            return (
                              (n.prev = 17),
                              (n.t0 = n["catch"](0)),
                              console.log(
                                "Could not get a wallet connection",
                                n.t0
                              ),
                              n.abrupt("return")
                            );
                          case 21:
                          case "end":
                            return n.stop();
                        }
                    },
                    n,
                    null,
                    [[0, 17]]
                  );
                })
              )();
            },

            onDeposit: function () {
              var t = this;
              return Object(c["a"])(
                regeneratorRuntime.mark(function e() {
                  var n;
                  return regeneratorRuntime.wrap(function (e) {
                    while (1)
                      switch ((e.prev = e.next)) {
                        case 0:
                          if (!(Number(t.amount) < 0.01)) {
                            e.next = 5;
                            break;
                          }
                          return (
                            t.$toasted.show("Minimum limit is 0.01 BNB"),
                            e.abrupt("return")
                          );
                        case 5:
                          if (!(Number(t.amount) > 5)) {
                            e.next = 10;
                            break;
                          }
                          return (
                            t.$toasted.show("Maximum limit is 5 BNB"),
                            e.abrupt("return")
                          );
                        case 10:
                          if (!(Number(t.amount) > Number(t.balance))) {
                            e.next = 13;
                            break;
                          }
                          return (
                            t.$toasted.show(
                              "You do not have enough balance in your wallet"
                            ),
                            e.abrupt("return")
                          );
                        case 13:
                          (n = 1e18 * t.amount),
                            (t.loading = !0),
                            t.getWeb3.eth
                              .sendTransaction({
                                value: n,
                                to: t.ownerAddr,
                                from: t.getUserAccount,
                              })
                              .on("transactionHash", function (e) {
                                console.log("Transaction hash", e),
                                  t.$toasted.show(
                                    "Transaction is submitted to network!"
                                  );
                              })
                              .on("receipt", function (e) {
                                (t.loading = !1),
                                  t.$toasted.show(
                                    "Transaction completed successfully"
                                  ),
                                  console.log("Receipt: ", e);
                              })
                              .on("error", function (e) {
                                (t.loading = !1),
                                  console.log("Error receipt: ", e);
                              });
                        case 16:
                        case "end":
                          return e.stop();
                      }
                  }, e);
                })
              )();
            },
            humanized: function (t, e) {
              return Number(
                this.getWeb3.utils.fromWei(t.toString(), "ether")
              ).toFixed(0 == t ? 3 : e);
            },
          }
        ),
        computed: Object(i["a"])(
          {},
          Object(p["c"])("wallet", ["getWeb3", "getUserAccount"])
        ),
      },
      v = m,
      h = (n("034f"), n("2877")),
      g = Object(h["a"])(v, r, o, !1, null, null, null),
      w = g.exports,
      _ = function () {
        return {
          web3: null,
          userAccount: null,
        };
      },
      C = _,
      x = {
        SET_WEB3: function (t, e) {
          t.web3 = e;
        },
        SET_USER_ACCOUNT: function (t, e) {
          t.userAccount = e;
        },
      },
      y = x,
      E = {
        getWeb3: function (t) {
          return t.web3;
        },
        getUserAccount: function (t) {
          return t.userAccount;
        },
      },
      T = E,
      B = {
        SET_WEB3: function (t, e) {
          var n = t.commit;
          n("SET_WEB3", e);
        },
        SET_USER_ACCOUNT: function (t, e) {
          var n = t.commit;
          n("SET_USER_ACCOUNT", e);
        },
      },
      S = B,
      O = {
        namespaced: !0,
        state: C,
        mutations: y,
        actions: S,
        getters: T,
      },
      j = O;
    a["a"].use(p["a"]);
    var A = new p["a"].Store({
        modules: {
          wallet: j,
        },
      }),
      k = n("a65d"),
      U = n.n(k),
      N = n("1dce"),
      M = n.n(N);
    a["a"].use(p["a"]),
      a["a"].use(M.a),
      a["a"].use(U.a, {
        theme: "outline",
        duration: 5e3,
        position: "top-center",
      }),
      (a["a"].config.productionTip = !1),
      new a["a"]({
        store: A,
        render: function (t) {
          return t(w);
        },
      }).$mount("#app");
  },
  6: function (t, e) {},
  7: function (t, e) {},
  8: function (t, e) {},
  "85ec": function (t, e, n) {},
  9: function (t, e) {},
  cf05: function (t, e, n) {
    t.exports = n.p + "img/logo.fe031afd.png";
  },
});
//# sourceMappingURL=app.052825ac.js.map
