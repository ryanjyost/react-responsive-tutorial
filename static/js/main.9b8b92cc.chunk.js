(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    14: function(e, t, n) {},
    16: function(e, t, n) {
      "use strict";
      n.r(t);
      var i = n(0),
        o = n.n(i),
        a = n(2),
        r = n.n(a),
        s = (n(14), n(3)),
        l = n(4),
        d = n(6),
        c = n(5),
        u = n(7),
        m = function(e) {
          var t = {
            position: "fixed",
            top: 0,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width: "100%",
            height: e.styles.topBarHeight,
            backgroundColor: "#fff",
            borderBottom: "1px solid #d8d8d8",
            fontWeight: "bold",
            padding: "0px 20px",
            boxSizing: "border-box"
          };
          return o.a.createElement(
            "div",
            { style: t },
            o.a.createElement("span", null, "\ud83d\ude3a\ufe0f"),
            "App",
            o.a.createElement("span", null, "\u2699\ufe0f")
          );
        },
        p = function(e) {
          var t = e.menuItems,
            n = e.styles;
          return o.a.createElement(
            "div",
            {
              style: {
                display: "flex",
                alignItems: "stretch",
                width: "100%",
                height: n.footerMenuHeight,
                backgroundColor: "#333",
                color: "#fff",
                position: "fixed",
                bottom: 0
              }
            },
            t.map(function(e, t) {
              return o.a.createElement(
                "div",
                {
                  key: t,
                  style: {
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: 1
                  }
                },
                o.a.createElement(
                  "span",
                  { style: { marginRight: 5, fontSize: 20 } },
                  e.icon
                ),
                n.showFooterMenuText && e.text
              );
            })
          );
        },
        h = function(e) {
          var t = e.styles,
            n = t.showSidebar,
            i = Array(20).fill({
              title: "Here's a blog post title",
              summary:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            }),
            a = {
              paddingTop: n ? 20 : t.topBarHeight + 20,
              paddingRight: 20,
              paddingBottom: n ? 20 : t.footerMenuHeight + 20,
              paddingLeft: n ? t.sidebarWidth + 20 : 20
            };
          return o.a.createElement(
            "div",
            { style: a },
            i.map(function(e, t) {
              return o.a.createElement(
                "div",
                { key: t, style: { marginBottom: 40 } },
                o.a.createElement(
                  "h2",
                  { style: { marginBottom: 0 } },
                  e.title
                ),
                o.a.createElement("p", null, e.summary)
              );
            })
          );
        },
        f = function(e) {
          var t = e.menuItems,
            n = e.styles,
            i = {
              height: "100vh",
              width: n.sidebarWidth,
              position: "fixed",
              backgroundColor: n.black(0.8),
              paddingTop: 40
            },
            a = {
              display: "flex",
              justifyContent: n.sidebarCollapsed ? "center" : "flex-start",
              alignItems: "center",
              padding: "4px ".concat(n.sidebarCollapsed ? 0 : 10, "px"),
              color: n.white(0.9)
            },
            r = { fontSize: 26, marginRight: n.sidebarCollapsed ? 0 : 10 },
            s = {
              textAlign: "center",
              color: n.white(),
              fontSize: 34,
              marginBottom: 60,
              fontWeight: "bold"
            };
          return o.a.createElement(
            "div",
            { style: i },
            o.a.createElement(
              "div",
              { style: s },
              n.sidebarCollapsed ? "A" : "App"
            ),
            t.map(function(e) {
              return o.a.createElement(
                "div",
                { style: a },
                o.a.createElement("span", { style: r }, e.icon),
                !n.sidebarCollapsed && e.text
              );
            })
          );
        },
        g = (function(e) {
          function t(e) {
            var n;
            return (
              Object(s.a)(this, t),
              ((n = Object(d.a)(this, Object(c.a)(t).call(this, e))).state = {
                windowWidth: 0,
                windowHeight: 0
              }),
              n
            );
          }
          return (
            Object(u.a)(t, e),
            Object(l.a)(t, [
              {
                key: "componentDidMount",
                value: function() {
                  this.updateDimensions(),
                    window.addEventListener(
                      "resize",
                      this.updateDimensions.bind(this)
                    );
                }
              },
              {
                key: "componentWillUnmount",
                value: function() {
                  window.removeEventListener(
                    "resize",
                    this.updateDimensions.bind(this)
                  );
                }
              },
              {
                key: "updateDimensions",
                value: function() {
                  var e = "undefined" !== typeof window ? window.innerWidth : 0,
                    t = "undefined" !== typeof window ? window.innerHeight : 0;
                  this.setState({ windowWidth: e, windowHeight: t });
                }
              },
              {
                key: "render",
                value: function() {
                  var e = this.state.windowWidth,
                    t = {
                      white: function() {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1;
                        return "rgba(255, 255, 255, ".concat(e, ")");
                      },
                      black: function() {
                        var e =
                          arguments.length > 0 && void 0 !== arguments[0]
                            ? arguments[0]
                            : 1;
                        return "rgba(0, 0, 0, ".concat(e, ")");
                      },
                      topBarHeight: 40,
                      footerMenuHeight: 50,
                      showFooterMenuText: e > 500,
                      showSidebar: e > 768,
                      sidebarWidth: e < 1100 ? 50 : 150,
                      sidebarCollapsed: e < 1100
                    },
                    n = t.showSidebar
                      ? [
                          { icon: "\ud83d\ude00", text: "Item 1" },
                          { icon: "\ud83d\ude09", text: "Item 2" },
                          { icon: "\ud83d\ude0e", text: "Item 3" },
                          { icon: "\ud83e\udd29", text: "Item 4" },
                          { icon: "\ud83d\ude1b", text: "Item 5" },
                          { icon: "\ud83d\ude3a\ufe0f", text: "Profile" },
                          { icon: "\u2699", text: "Settings" }
                        ]
                      : [
                          { icon: "\ud83d\ude00", text: "Item 1" },
                          { icon: "\ud83d\ude09", text: "Item 2" },
                          { icon: "\ud83d\ude0e", text: "Item 3" },
                          { icon: "\ud83e\udd29", text: "Item 4" },
                          { icon: "\ud83d\ude1b", text: "Item 5" }
                        ];
                  return o.a.createElement(
                    "div",
                    {
                      style: {
                        backgroundColor: t.black(0.05),
                        minHeight: "100vh",
                        position: "relative"
                      }
                    },
                    t.showSidebar
                      ? o.a.createElement(f, { menuItems: n, styles: t })
                      : o.a.createElement(m, { styles: t }),
                    o.a.createElement(h, { styles: t }),
                    !t.showSidebar &&
                      o.a.createElement(p, { menuItems: n, styles: t })
                  );
                }
              }
            ]),
            t
          );
        })(i.Component);
      Boolean(
        "localhost" === window.location.hostname ||
          "[::1]" === window.location.hostname ||
          window.location.hostname.match(
            /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
          )
      );
      r.a.render(o.a.createElement(g, null), document.getElementById("root")),
        "serviceWorker" in navigator &&
          navigator.serviceWorker.ready.then(function(e) {
            e.unregister();
          });
    },
    8: function(e, t, n) {
      e.exports = n(16);
    }
  },
  [[8, 2, 1]]
]);
//# sourceMappingURL=main.9b8b92cc.chunk.js.map
