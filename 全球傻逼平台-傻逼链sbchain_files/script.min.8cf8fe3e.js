/*! jQuery v1.11.3 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */
!function (a, b) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function (a) {
                if (!a.document)throw new Error("jQuery requires a window with a document");
                return b(a)
            } : b(a)
}("undefined" != typeof window ? window : this, function (a, b) {
    var c = [], d = c.slice, e = c.concat, f = c.push, g = c.indexOf, h = {}, i = h.toString, j = h.hasOwnProperty, k = {}, l = "1.11.3", m = function (a, b) {
        return new m.fn.init(a, b)
    }, n  = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, o = /^-ms-/, p = /-([\da-z])/gi, q = function (a, b) {
        return b.toUpperCase()
    };
    m.fn = m.prototype = {
        jquery: l, constructor: m, selector: "", length: 0, toArray: function () {
            return d.call(this)
        }, get: function (a) {
            return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
        }, pushStack: function (a) {
            var b = m.merge(this.constructor(), a);
            return b.prevObject = this, b.context = this.context, b
        }, each: function (a, b) {
            return m.each(this, a, b)
        }, map: function (a) {
            return this.pushStack(m.map(this, function (b, c) {
                return a.call(b, c, b)
            }))
        }, slice: function () {
            return this.pushStack(d.apply(this, arguments))
        }, first: function () {
            return this.eq(0)
        }, last: function () {
            return this.eq(-1)
        }, eq: function (a) {
            var b = this.length, c = +a + (0 > a ? b : 0);
            return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
        }, end: function () {
            return this.prevObject || this.constructor(null)
        }, push: f, sort: c.sort, splice: c.splice
    }, m.extend = m.fn.extend = function () {
        var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
        for ("boolean" == typeof g && (j = g, g = arguments[h] || {}, h++), "object" == typeof g || m.isFunction(g) || (g = {}), h === i && (g = this, h--); i > h; h++)if (null != (e = arguments[h]))for (d in e)a = g[d], c = e[d], g !== c && (j && c && (m.isPlainObject(c) || (b = m.isArray(c))) ? (b ? (b = !1, f = a && m.isArray(a) ? a : []) : f = a && m.isPlainObject(a) ? a : {}, g[d] = m.extend(j, f, c)) : void 0 !== c && (g[d] = c));
        return g
    }, m.extend({
        expando: "jQuery" + (l + Math.random()).replace(/\D/g, ""), isReady: !0, error: function (a) {
            throw new Error(a)
        }, noop: function () {
        }, isFunction: function (a) {
            return "function" === m.type(a)
        }, isArray: Array.isArray || function (a) {
            return "array" === m.type(a)
        }, isWindow: function (a) {
            return null != a && a == a.window
        }, isNumeric: function (a) {
            return !m.isArray(a) && a - parseFloat(a) + 1 >= 0
        }, isEmptyObject: function (a) {
            var b;
            for (b in a)return !1;
            return !0
        }, isPlainObject: function (a) {
            var b;
            if (!a || "object" !== m.type(a) || a.nodeType || m.isWindow(a))return !1;
            try {
                if (a.constructor && !j.call(a, "constructor") && !j.call(a.constructor.prototype, "isPrototypeOf"))return !1
            } catch (c) {
                return !1
            }
            if (k.ownLast)for (b in a)return j.call(a, b);
            for (b in a);
            return void 0 === b || j.call(a, b)
        }, type: function (a) {
            return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
        }, globalEval: function (b) {
            b && m.trim(b) && (a.execScript || function (b) {
                a.eval.call(a, b)
            })(b)
        }, camelCase: function (a) {
            return a.replace(o, "ms-").replace(p, q)
        }, nodeName: function (a, b) {
            return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
        }, each: function (a, b, c) {
            var d, e = 0, f = a.length, g = r(a);
            if (c) {
                if (g) {
                    for (; f > e; e++)if (d = b.apply(a[e], c), d === !1)break
                } else for (e in a)if (d = b.apply(a[e], c), d === !1)break
            } else if (g) {
                for (; f > e; e++)if (d = b.call(a[e], e, a[e]), d === !1)break
            } else for (e in a)if (d = b.call(a[e], e, a[e]), d === !1)break;
            return a
        }, trim: function (a) {
            return null == a ? "" : (a + "").replace(n, "")
        }, makeArray: function (a, b) {
            var c = b || [];
            return null != a && (r(Object(a)) ? m.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)), c
        }, inArray: function (a, b, c) {
            var d;
            if (b) {
                if (g)return g.call(b, a, c);
                for (d = b.length, c = c ? 0 > c ? Math.max(0, d + c) : c : 0; d > c; c++)if (c in b && b[c] === a)return c
            }
            return -1
        }, merge: function (a, b) {
            var c = +b.length, d = 0, e = a.length;
            while (c > d)a[e++] = b[d++];
            if (c !== c)while (void 0 !== b[d])a[e++] = b[d++];
            return a.length = e, a
        }, grep: function (a, b, c) {
            for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)d = !b(a[f], f), d !== h && e.push(a[f]);
            return e
        }, map: function (a, b, c) {
            var d, f = 0, g = a.length, h = r(a), i = [];
            if (h)for (; g > f; f++)d = b(a[f], f, c), null != d && i.push(d); else for (f in a)d = b(a[f], f, c), null != d && i.push(d);
            return e.apply([], i)
        }, guid: 1, proxy: function (a, b) {
            var c, e, f;
            return "string" == typeof b && (f = a[b], b = a, a = f), m.isFunction(a) ? (c = d.call(arguments, 2), e = function () {
                    return a.apply(b || this, c.concat(d.call(arguments)))
                }, e.guid = a.guid = a.guid || m.guid++, e) : void 0
        }, now: function () {
            return +new Date
        }, support: k
    }), m.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (a, b) {
        h["[object " + b + "]"] = b.toLowerCase()
    });
    function r(a) {
        var b = "length" in a && a.length, c = m.type(a);
        return "function" === c || m.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
    }

    var s = function (a) {
        var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = ha(), z = ha(), A = ha(), B = function (a, b) {
            return a === b && (l = !0), 0
        }, C                                                           = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function (a, b) {
            for (var c = 0, d = a.length; d > c; c++)if (a[c] === b)return c;
            return -1
        }, K                                                           = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+", "g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$", "g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]", "g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
            ID: new RegExp("^#(" + M + ")"),
            CLASS: new RegExp("^\\.(" + M + ")"),
            TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + O),
            PSEUDO: new RegExp("^" + P),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + K + ")$", "i"),
            needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)", "i")
        }, Y                                                           = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, aa = /[+~]/, ba = /'|\\/g, ca = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)", "ig"), da = function (a, b, c) {
            var d = "0x" + b - 65536;
            return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
        }, ea                                                          = function () {
            m()
        };
        try {
            H.apply(E = I.call(v.childNodes), v.childNodes), E[v.childNodes.length].nodeType
        } catch (fa) {
            H = {
                apply: E.length ? function (a, b) {
                        G.apply(a, I.call(b))
                    } : function (a, b) {
                        var c = a.length, d = 0;
                        while (a[c++] = b[d++]);
                        a.length = c - 1
                    }
            }
        }
        function ga(a, b, d, e) {
            var f, h, j, k, l, o, r, s, w, x;
            if ((b ? b.ownerDocument || b : v) !== n && m(b), b = b || n, d = d || [], k = b.nodeType, "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)return d;
            if (!e && p) {
                if (11 !== k && (f = _.exec(a)))if (j = f[1]) {
                    if (9 === k) {
                        if (h = b.getElementById(j), !h || !h.parentNode)return d;
                        if (h.id === j)return d.push(h), d
                    } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)return d.push(h), d
                } else {
                    if (f[2])return H.apply(d, b.getElementsByTagName(a)), d;
                    if ((j = f[3]) && c.getElementsByClassName)return H.apply(d, b.getElementsByClassName(j)), d
                }
                if (c.qsa && (!q || !q.test(a))) {
                    if (s = r = u, w = b, x = 1 !== k && a, 1 === k && "object" !== b.nodeName.toLowerCase()) {
                        o = g(a), (r = b.getAttribute("id")) ? s = r.replace(ba, "\\$&") : b.setAttribute("id", s), s = "[id='" + s + "'] ", l = o.length;
                        while (l--)o[l] = s + ra(o[l]);
                        w = aa.test(a) && pa(b.parentNode) || b, x = o.join(",")
                    }
                    if (x)try {
                        return H.apply(d, w.querySelectorAll(x)), d
                    } catch (y) {
                    } finally {
                        r || b.removeAttribute("id")
                    }
                }
            }
            return i(a.replace(R, "$1"), b, d, e)
        }

        function ha() {
            var a = [];

            function b(c, e) {
                return a.push(c + " ") > d.cacheLength && delete b[a.shift()], b[c + " "] = e
            }

            return b
        }

        function ia(a) {
            return a[u] = !0, a
        }

        function ja(a) {
            var b = n.createElement("div");
            try {
                return !!a(b)
            } catch (c) {
                return !1
            } finally {
                b.parentNode && b.parentNode.removeChild(b), b = null
            }
        }

        function ka(a, b) {
            var c = a.split("|"), e = a.length;
            while (e--)d.attrHandle[c[e]] = b
        }

        function la(a, b) {
            var c = b && a, d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
            if (d)return d;
            if (c)while (c = c.nextSibling)if (c === b)return -1;
            return a ? 1 : -1
        }

        function ma(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return "input" === c && b.type === a
            }
        }

        function na(a) {
            return function (b) {
                var c = b.nodeName.toLowerCase();
                return ("input" === c || "button" === c) && b.type === a
            }
        }

        function oa(a) {
            return ia(function (b) {
                return b = +b, ia(function (c, d) {
                    var e, f = a([], c.length, b), g = f.length;
                    while (g--)c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                })
            })
        }

        function pa(a) {
            return a && "undefined" != typeof a.getElementsByTagName && a
        }

        c = ga.support = {}, f = ga.isXML = function (a) {
            var b = a && (a.ownerDocument || a).documentElement;
            return b ? "HTML" !== b.nodeName : !1
        }, m = ga.setDocument = function (a) {
            var b, e, g = a ? a.ownerDocument || a : v;
            return g !== n && 9 === g.nodeType && g.documentElement ? (n = g, o = g.documentElement, e = g.defaultView, e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", ea, !1) : e.attachEvent && e.attachEvent("onunload", ea)), p = !f(g), c.attributes = ja(function (a) {
                    return a.className = "i", !a.getAttribute("className")
                }), c.getElementsByTagName = ja(function (a) {
                    return a.appendChild(g.createComment("")), !a.getElementsByTagName("*").length
                }), c.getElementsByClassName = $.test(g.getElementsByClassName), c.getById = ja(function (a) {
                    return o.appendChild(a).id = u, !g.getElementsByName || !g.getElementsByName(u).length
                }), c.getById ? (d.find.ID = function (a, b) {
                        if ("undefined" != typeof b.getElementById && p) {
                            var c = b.getElementById(a);
                            return c && c.parentNode ? [c] : []
                        }
                    }, d.filter.ID = function (a) {
                        var b = a.replace(ca, da);
                        return function (a) {
                            return a.getAttribute("id") === b
                        }
                    }) : (delete d.find.ID, d.filter.ID = function (a) {
                        var b = a.replace(ca, da);
                        return function (a) {
                            var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                            return c && c.value === b
                        }
                    }), d.find.TAG = c.getElementsByTagName ? function (a, b) {
                        return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                    } : function (a, b) {
                        var c, d = [], e = 0, f = b.getElementsByTagName(a);
                        if ("*" === a) {
                            while (c = f[e++])1 === c.nodeType && d.push(c);
                            return d
                        }
                        return f
                    }, d.find.CLASS = c.getElementsByClassName && function (a, b) {
                        return p ? b.getElementsByClassName(a) : void 0
                    }, r = [], q = [], (c.qsa = $.test(g.querySelectorAll)) && (ja(function (a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>", a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"), a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"), a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="), a.querySelectorAll(":checked").length || q.push(":checked"), a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }), ja(function (a) {
                    var b = g.createElement("input");
                    b.setAttribute("type", "hidden"), a.appendChild(b).setAttribute("name", "D"), a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="), a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), a.querySelectorAll("*,:x"), q.push(",.*:")
                })), (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && ja(function (a) {
                    c.disconnectedMatch = s.call(a, "div"), s.call(a, "[s!='']:x"), r.push("!=", P)
                }), q = q.length && new RegExp(q.join("|")), r = r.length && new RegExp(r.join("|")), b = $.test(o.compareDocumentPosition), t = b || $.test(o.contains) ? function (a, b) {
                        var c = 9 === a.nodeType ? a.documentElement : a, d = b && b.parentNode;
                        return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                    } : function (a, b) {
                        if (b)while (b = b.parentNode)if (b === a)return !0;
                        return !1
                    }, B = b ? function (a, b) {
                        if (a === b)return l = !0, 0;
                        var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                        return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1, 1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                    } : function (a, b) {
                        if (a === b)return l = !0, 0;
                        var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                        if (!e || !f)return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                        if (e === f)return la(a, b);
                        c = a;
                        while (c = c.parentNode)h.unshift(c);
                        c = b;
                        while (c = c.parentNode)i.unshift(c);
                        while (h[d] === i[d])d++;
                        return d ? la(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                    }, g) : n
        }, ga.matches = function (a, b) {
            return ga(a, null, null, b)
        }, ga.matchesSelector = function (a, b) {
            if ((a.ownerDocument || a) !== n && m(a), b = b.replace(U, "='$1']"), !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))try {
                var d = s.call(a, b);
                if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)return d
            } catch (e) {
            }
            return ga(b, n, null, [a]).length > 0
        }, ga.contains = function (a, b) {
            return (a.ownerDocument || a) !== n && m(a), t(a, b)
        }, ga.attr = function (a, b) {
            (a.ownerDocument || a) !== n && m(a);
            var e = d.attrHandle[b.toLowerCase()], f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
            return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
        }, ga.error = function (a) {
            throw new Error("Syntax error, unrecognized expression: " + a)
        }, ga.uniqueSort = function (a) {
            var b, d = [], e = 0, f = 0;
            if (l = !c.detectDuplicates, k = !c.sortStable && a.slice(0), a.sort(B), l) {
                while (b = a[f++])b === a[f] && (e = d.push(f));
                while (e--)a.splice(d[e], 1)
            }
            return k = null, a
        }, e = ga.getText = function (a) {
            var b, c = "", d = 0, f = a.nodeType;
            if (f) {
                if (1 === f || 9 === f || 11 === f) {
                    if ("string" == typeof a.textContent)return a.textContent;
                    for (a = a.firstChild; a; a = a.nextSibling)c += e(a)
                } else if (3 === f || 4 === f)return a.nodeValue
            } else while (b = a[d++])c += e(b);
            return c
        }, d = ga.selectors = {
            cacheLength: 50,
            createPseudo: ia,
            match: X,
            attrHandle: {},
            find: {},
            relative: {
                ">": {dir: "parentNode", first: !0},
                " ": {dir: "parentNode"},
                "+": {dir: "previousSibling", first: !0},
                "~": {dir: "previousSibling"}
            },
            preFilter: {
                ATTR: function (a) {
                    return a[1] = a[1].replace(ca, da), a[3] = (a[3] || a[4] || a[5] || "").replace(ca, da), "~=" === a[2] && (a[3] = " " + a[3] + " "), a.slice(0, 4)
                }, CHILD: function (a) {
                    return a[1] = a[1].toLowerCase(), "nth" === a[1].slice(0, 3) ? (a[3] || ga.error(a[0]), a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])), a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && ga.error(a[0]), a
                }, PSEUDO: function (a) {
                    var b, c = !a[6] && a[2];
                    return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b), a[2] = c.slice(0, b)), a.slice(0, 3))
                }
            },
            filter: {
                TAG: function (a) {
                    var b = a.replace(ca, da).toLowerCase();
                    return "*" === a ? function () {
                            return !0
                        } : function (a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                }, CLASS: function (a) {
                    var b = y[a + " "];
                    return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function (a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                }, ATTR: function (a, b, c) {
                    return function (d) {
                        var e = ga.attr(d, a);
                        return null == e ? "!=" === b : b ? (e += "", "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                    }
                }, CHILD: function (a, b, c, d, e) {
                    var f = "nth" !== a.slice(0, 3), g = "last" !== a.slice(-4), h = "of-type" === b;
                    return 1 === d && 0 === e ? function (a) {
                            return !!a.parentNode
                        } : function (b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        l = b;
                                        while (l = l[p])if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild], g && s) {
                                    k = q[u] || (q[u] = {}), j = k[a] || [], n = j[0] === w && j[1], m = j[0] === w && j[2], l = n && q.childNodes[n];
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if (1 === l.nodeType && ++m && l === b) {
                                        k[a] = [w, n, m];
                                        break
                                    }
                                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w) m = j[1]; else while (l = ++n && l && l[p] || (m = n = 0) || o.pop())if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]), l === b))break;
                                return m -= e, m === d || m % d === 0 && m / d >= 0
                            }
                        }
                }, PSEUDO: function (a, b) {
                    var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || ga.error("unsupported pseudo: " + a);
                    return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b], d.setFilters.hasOwnProperty(a.toLowerCase()) ? ia(function (a, c) {
                                    var d, f = e(a, b), g = f.length;
                                    while (g--)d = J(a, f[g]), a[d] = !(c[d] = f[g])
                                }) : function (a) {
                                    return e(a, 0, c)
                                }) : e
                }
            },
            pseudos: {
                not: ia(function (a) {
                    var b = [], c = [], d = h(a.replace(R, "$1"));
                    return d[u] ? ia(function (a, b, c, e) {
                            var f, g = d(a, null, e, []), h = a.length;
                            while (h--)(f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function (a, e, f) {
                            return b[0] = a, d(b, null, f, c), b[0] = null, !c.pop()
                        }
                }), has: ia(function (a) {
                    return function (b) {
                        return ga(a, b).length > 0
                    }
                }), contains: ia(function (a) {
                    return a = a.replace(ca, da), function (b) {
                        return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                    }
                }), lang: ia(function (a) {
                    return W.test(a || "") || ga.error("unsupported lang: " + a), a = a.replace(ca, da).toLowerCase(), function (b) {
                        var c;
                        do if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))return c = c.toLowerCase(), c === a || 0 === c.indexOf(a + "-"); while ((b = b.parentNode) && 1 === b.nodeType);
                        return !1
                    }
                }), target: function (b) {
                    var c = a.location && a.location.hash;
                    return c && c.slice(1) === b.id
                }, root: function (a) {
                    return a === o
                }, focus: function (a) {
                    return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                }, enabled: function (a) {
                    return a.disabled === !1
                }, disabled: function (a) {
                    return a.disabled === !0
                }, checked: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && !!a.checked || "option" === b && !!a.selected
                }, selected: function (a) {
                    return a.parentNode && a.parentNode.selectedIndex, a.selected === !0
                }, empty: function (a) {
                    for (a = a.firstChild; a; a = a.nextSibling)if (a.nodeType < 6)return !1;
                    return !0
                }, parent: function (a) {
                    return !d.pseudos.empty(a)
                }, header: function (a) {
                    return Z.test(a.nodeName)
                }, input: function (a) {
                    return Y.test(a.nodeName)
                }, button: function (a) {
                    var b = a.nodeName.toLowerCase();
                    return "input" === b && "button" === a.type || "button" === b
                }, text: function (a) {
                    var b;
                    return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                }, first: oa(function () {
                    return [0]
                }), last: oa(function (a, b) {
                    return [b - 1]
                }), eq: oa(function (a, b, c) {
                    return [0 > c ? c + b : c]
                }), even: oa(function (a, b) {
                    for (var c = 0; b > c; c += 2)a.push(c);
                    return a
                }), odd: oa(function (a, b) {
                    for (var c = 1; b > c; c += 2)a.push(c);
                    return a
                }), lt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; --d >= 0;)a.push(d);
                    return a
                }), gt: oa(function (a, b, c) {
                    for (var d = 0 > c ? c + b : c; ++d < b;)a.push(d);
                    return a
                })
            }
        }, d.pseudos.nth = d.pseudos.eq;
        for (b in{radio: !0, checkbox: !0, file: !0, password: !0, image: !0})d.pseudos[b] = ma(b);
        for (b in{submit: !0, reset: !0})d.pseudos[b] = na(b);
        function qa() {
        }

        qa.prototype = d.filters = d.pseudos, d.setFilters = new qa, g = ga.tokenize = function (a, b) {
            var c, e, f, g, h, i, j, k = z[a + " "];
            if (k)return b ? 0 : k.slice(0);
            h = a, i = [], j = d.preFilter;
            while (h) {
                (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h), i.push(f = [])), c = !1, (e = T.exec(h)) && (c = e.shift(), f.push({
                    value: c,
                    type: e[0].replace(R, " ")
                }), h = h.slice(c.length));
                for (g in d.filter)!(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(), f.push({
                    value: c,
                    type: g,
                    matches: e
                }), h = h.slice(c.length));
                if (!c)break
            }
            return b ? h.length : h ? ga.error(a) : z(a, i).slice(0)
        };
        function ra(a) {
            for (var b = 0, c = a.length, d = ""; c > b; b++)d += a[b].value;
            return d
        }

        function sa(a, b, c) {
            var d = b.dir, e = c && "parentNode" === d, f = x++;
            return b.first ? function (b, c, f) {
                    while (b = b[d])if (1 === b.nodeType || e)return a(b, c, f)
                } : function (b, c, g) {
                    var h, i, j = [w, f];
                    if (g) {
                        while (b = b[d])if ((1 === b.nodeType || e) && a(b, c, g))return !0
                    } else while (b = b[d])if (1 === b.nodeType || e) {
                        if (i = b[u] || (b[u] = {}), (h = i[d]) && h[0] === w && h[1] === f)return j[2] = h[2];
                        if (i[d] = j, j[2] = a(b, c, g))return !0
                    }
                }
        }

        function ta(a) {
            return a.length > 1 ? function (b, c, d) {
                    var e = a.length;
                    while (e--)if (!a[e](b, c, d))return !1;
                    return !0
                } : a[0]
        }

        function ua(a, b, c) {
            for (var d = 0, e = b.length; e > d; d++)ga(a, b[d], c);
            return c
        }

        function va(a, b, c, d, e) {
            for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)(f = a[h]) && (!c || c(f, d, e)) && (g.push(f), j && b.push(h));
            return g
        }

        function wa(a, b, c, d, e, f) {
            return d && !d[u] && (d = wa(d)), e && !e[u] && (e = wa(e, f)), ia(function (f, g, h, i) {
                var j, k, l, m = [], n = [], o = g.length, p = f || ua(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : va(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                if (c && c(q, r, h, i), d) {
                    j = va(r, n), d(j, [], h, i), k = j.length;
                    while (k--)(l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                }
                if (f) {
                    if (e || a) {
                        if (e) {
                            j = [], k = r.length;
                            while (k--)(l = r[k]) && j.push(q[k] = l);
                            e(null, r = [], j, i)
                        }
                        k = r.length;
                        while (k--)(l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                    }
                } else r = va(r === g ? r.splice(o, r.length) : r), e ? e(null, g, r, i) : H.apply(g, r)
            })
        }

        function xa(a) {
            for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sa(function (a) {
                return a === b
            }, h, !0), l        = sa(function (a) {
                return J(b, a) > -1
            }, h, !0), m        = [function (a, c, d) {
                var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                return b = null, e
            }]; f > i; i++)if (c = d.relative[a[i].type]) m = [sa(ta(m), c)]; else {
                if (c = d.filter[a[i].type].apply(null, a[i].matches), c[u]) {
                    for (e = ++i; f > e; e++)if (d.relative[a[e].type])break;
                    return wa(i > 1 && ta(m), i > 1 && ra(a.slice(0, i - 1).concat({value: " " === a[i - 2].type ? "*" : ""})).replace(R, "$1"), c, e > i && xa(a.slice(i, e)), f > e && xa(a = a.slice(e)), f > e && ra(a))
                }
                m.push(c)
            }
            return ta(m)
        }

        function ya(a, b) {
            var c = b.length > 0, e = a.length > 0, f = function (f, g, h, i, k) {
                var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                    if (e && l) {
                        m = 0;
                        while (o = a[m++])if (o(l, g, h)) {
                            i.push(l);
                            break
                        }
                        k && (w = v)
                    }
                    c && ((l = !o && l) && p--, f && r.push(l))
                }
                if (p += q, c && q !== p) {
                    m = 0;
                    while (o = b[m++])o(r, s, g, h);
                    if (f) {
                        if (p > 0)while (q--)r[q] || s[q] || (s[q] = F.call(i));
                        s = va(s)
                    }
                    H.apply(i, s), k && !f && s.length > 0 && p + b.length > 1 && ga.uniqueSort(i)
                }
                return k && (w = v, j = t), r
            };
            return c ? ia(f) : f
        }

        return h = ga.compile = function (a, b) {
            var c, d = [], e = [], f = A[a + " "];
            if (!f) {
                b || (b = g(a)), c = b.length;
                while (c--)f = xa(b[c]), f[u] ? d.push(f) : e.push(f);
                f = A(a, ya(e, d)), f.selector = a
            }
            return f
        }, i = ga.select = function (a, b, e, f) {
            var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
            if (e = e || [], 1 === o.length) {
                if (j = o[0] = o[0].slice(0), j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                    if (b = (d.find.ID(k.matches[0].replace(ca, da), b) || [])[0], !b)return e;
                    n && (b = b.parentNode), a = a.slice(j.shift().value.length)
                }
                i = X.needsContext.test(a) ? 0 : j.length;
                while (i--) {
                    if (k = j[i], d.relative[l = k.type])break;
                    if ((m = d.find[l]) && (f = m(k.matches[0].replace(ca, da), aa.test(j[0].type) && pa(b.parentNode) || b))) {
                        if (j.splice(i, 1), a = f.length && ra(j), !a)return H.apply(e, f), e;
                        break
                    }
                }
            }
            return (n || h(a, o))(f, b, !p, e, aa.test(a) && pa(b.parentNode) || b), e
        }, c.sortStable = u.split("").sort(B).join("") === u, c.detectDuplicates = !!l, m(), c.sortDetached = ja(function (a) {
            return 1 & a.compareDocumentPosition(n.createElement("div"))
        }), ja(function (a) {
            return a.innerHTML = "<a href='#'></a>", "#" === a.firstChild.getAttribute("href")
        }) || ka("type|href|height|width", function (a, b, c) {
            return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
        }), c.attributes && ja(function (a) {
            return a.innerHTML = "<input/>", a.firstChild.setAttribute("value", ""), "" === a.firstChild.getAttribute("value")
        }) || ka("value", function (a, b, c) {
            return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
        }), ja(function (a) {
            return null == a.getAttribute("disabled")
        }) || ka(K, function (a, b, c) {
            var d;
            return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
        }), ga
    }(a);
    m.find = s, m.expr = s.selectors, m.expr[":"] = m.expr.pseudos, m.unique = s.uniqueSort, m.text = s.getText, m.isXMLDoc = s.isXML, m.contains = s.contains;
    var t = m.expr.match.needsContext, u = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, v = /^.[^:#\[\.,]*$/;

    function w(a, b, c) {
        if (m.isFunction(b))return m.grep(a, function (a, d) {
            return !!b.call(a, d, a) !== c
        });
        if (b.nodeType)return m.grep(a, function (a) {
            return a === b !== c
        });
        if ("string" == typeof b) {
            if (v.test(b))return m.filter(b, a, c);
            b = m.filter(b, a)
        }
        return m.grep(a, function (a) {
            return m.inArray(a, b) >= 0 !== c
        })
    }

    m.filter = function (a, b, c) {
        var d = b[0];
        return c && (a = ":not(" + a + ")"), 1 === b.length && 1 === d.nodeType ? m.find.matchesSelector(d, a) ? [d] : [] : m.find.matches(a, m.grep(b, function (a) {
                return 1 === a.nodeType
            }))
    }, m.fn.extend({
        find: function (a) {
            var b, c = [], d = this, e = d.length;
            if ("string" != typeof a)return this.pushStack(m(a).filter(function () {
                for (b = 0; e > b; b++)if (m.contains(d[b], this))return !0
            }));
            for (b = 0; e > b; b++)m.find(a, d[b], c);
            return c = this.pushStack(e > 1 ? m.unique(c) : c), c.selector = this.selector ? this.selector + " " + a : a, c
        }, filter: function (a) {
            return this.pushStack(w(this, a || [], !1))
        }, not: function (a) {
            return this.pushStack(w(this, a || [], !0))
        }, is: function (a) {
            return !!w(this, "string" == typeof a && t.test(a) ? m(a) : a || [], !1).length
        }
    });
    var x, y = a.document, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = m.fn.init = function (a, b) {
        var c, d;
        if (!a)return this;
        if ("string" == typeof a) {
            if (c = "<" === a.charAt(0) && ">" === a.charAt(a.length - 1) && a.length >= 3 ? [null, a, null] : z.exec(a), !c || !c[1] && b)return !b || b.jquery ? (b || x).find(a) : this.constructor(b).find(a);
            if (c[1]) {
                if (b = b instanceof m ? b[0] : b, m.merge(this, m.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : y, !0)), u.test(c[1]) && m.isPlainObject(b))for (c in b)m.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                return this
            }
            if (d = y.getElementById(c[2]), d && d.parentNode) {
                if (d.id !== c[2])return x.find(a);
                this.length = 1, this[0] = d
            }
            return this.context = y, this.selector = a, this
        }
        return a.nodeType ? (this.context = this[0] = a, this.length = 1, this) : m.isFunction(a) ? "undefined" != typeof x.ready ? x.ready(a) : a(m) : (void 0 !== a.selector && (this.selector = a.selector, this.context = a.context), m.makeArray(a, this))
    };
    A.prototype = m.fn, x = m(y);
    var B = /^(?:parents|prev(?:Until|All))/, C = {children: !0, contents: !0, next: !0, prev: !0};
    m.extend({
        dir: function (a, b, c) {
            var d = [], e = a[b];
            while (e && 9 !== e.nodeType && (void 0 === c || 1 !== e.nodeType || !m(e).is(c)))1 === e.nodeType && d.push(e), e = e[b];
            return d
        }, sibling: function (a, b) {
            for (var c = []; a; a = a.nextSibling)1 === a.nodeType && a !== b && c.push(a);
            return c
        }
    }), m.fn.extend({
        has: function (a) {
            var b, c = m(a, this), d = c.length;
            return this.filter(function () {
                for (b = 0; d > b; b++)if (m.contains(this, c[b]))return !0
            })
        }, closest: function (a, b) {
            for (var c, d = 0, e = this.length, f = [], g = t.test(a) || "string" != typeof a ? m(a, b || this.context) : 0; e > d; d++)for (c = this[d]; c && c !== b; c = c.parentNode)if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && m.find.matchesSelector(c, a))) {
                f.push(c);
                break
            }
            return this.pushStack(f.length > 1 ? m.unique(f) : f)
        }, index: function (a) {
            return a ? "string" == typeof a ? m.inArray(this[0], m(a)) : m.inArray(a.jquery ? a[0] : a, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        }, add: function (a, b) {
            return this.pushStack(m.unique(m.merge(this.get(), m(a, b))))
        }, addBack: function (a) {
            return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
        }
    });
    function D(a, b) {
        do a = a[b]; while (a && 1 !== a.nodeType);
        return a
    }

    m.each({
        parent: function (a) {
            var b = a.parentNode;
            return b && 11 !== b.nodeType ? b : null
        }, parents: function (a) {
            return m.dir(a, "parentNode")
        }, parentsUntil: function (a, b, c) {
            return m.dir(a, "parentNode", c)
        }, next: function (a) {
            return D(a, "nextSibling")
        }, prev: function (a) {
            return D(a, "previousSibling")
        }, nextAll: function (a) {
            return m.dir(a, "nextSibling")
        }, prevAll: function (a) {
            return m.dir(a, "previousSibling")
        }, nextUntil: function (a, b, c) {
            return m.dir(a, "nextSibling", c)
        }, prevUntil: function (a, b, c) {
            return m.dir(a, "previousSibling", c)
        }, siblings: function (a) {
            return m.sibling((a.parentNode || {}).firstChild, a)
        }, children: function (a) {
            return m.sibling(a.firstChild)
        }, contents: function (a) {
            return m.nodeName(a, "iframe") ? a.contentDocument || a.contentWindow.document : m.merge([], a.childNodes)
        }
    }, function (a, b) {
        m.fn[a] = function (c, d) {
            var e = m.map(this, b, c);
            return "Until" !== a.slice(-5) && (d = c), d && "string" == typeof d && (e = m.filter(d, e)), this.length > 1 && (C[a] || (e = m.unique(e)), B.test(a) && (e = e.reverse())), this.pushStack(e)
        }
    });
    var E = /\S+/g, F = {};

    function G(a) {
        var b = F[a] = {};
        return m.each(a.match(E) || [], function (a, c) {
            b[c] = !0
        }), b
    }

    m.Callbacks = function (a) {
        a                       = "string" == typeof a ? F[a] || G(a) : m.extend({}, a);
        var b, c, d, e, f, g, h = [], i = !a.once && [], j = function (l) {
            for (c = a.memory && l, d = !0, f = g || 0, g = 0, e = h.length, b = !0; h && e > f; f++)if (h[f].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                c = !1;
                break
            }
            b = !1, h && (i ? i.length && j(i.shift()) : c ? h = [] : k.disable())
        }, k                    = {
            add: function () {
                if (h) {
                    var d = h.length;
                    !function f(b) {
                        m.each(b, function (b, c) {
                            var d = m.type(c);
                            "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && f(c)
                        })
                    }(arguments), b ? e = h.length : c && (g = d, j(c))
                }
                return this
            }, remove: function () {
                return h && m.each(arguments, function (a, c) {
                    var d;
                    while ((d = m.inArray(c, h, d)) > -1)h.splice(d, 1), b && (e >= d && e--, f >= d && f--)
                }), this
            }, has: function (a) {
                return a ? m.inArray(a, h) > -1 : !(!h || !h.length)
            }, empty: function () {
                return h = [], e = 0, this
            }, disable: function () {
                return h = i = c = void 0, this
            }, disabled: function () {
                return !h
            }, lock: function () {
                return i = void 0, c || k.disable(), this
            }, locked: function () {
                return !i
            }, fireWith: function (a, c) {
                return !h || d && !i || (c = c || [], c = [a, c.slice ? c.slice() : c], b ? i.push(c) : j(c)), this
            }, fire: function () {
                return k.fireWith(this, arguments), this
            }, fired: function () {
                return !!d
            }
        };
        return k
    }, m.extend({
        Deferred: function (a) {
            var b = [["resolve", "done", m.Callbacks("once memory"), "resolved"], ["reject", "fail", m.Callbacks("once memory"), "rejected"], ["notify", "progress", m.Callbacks("memory")]], c = "pending", d = {
                state: function () {
                    return c
                }, always: function () {
                    return e.done(arguments).fail(arguments), this
                }, then: function () {
                    var a = arguments;
                    return m.Deferred(function (c) {
                        m.each(b, function (b, f) {
                            var g = m.isFunction(a[b]) && a[b];
                            e[f[1]](function () {
                                var a = g && g.apply(this, arguments);
                                a && m.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                            })
                        }), a = null
                    }).promise()
                }, promise: function (a) {
                    return null != a ? m.extend(a, d) : d
                }
            }, e  = {};
            return d.pipe = d.then, m.each(b, function (a, f) {
                var g = f[2], h = f[3];
                d[f[1]] = g.add, h && g.add(function () {
                    c = h
                }, b[1 ^ a][2].disable, b[2][2].lock), e[f[0]] = function () {
                    return e[f[0] + "With"](this === e ? d : this, arguments), this
                }, e[f[0] + "With"] = g.fireWith
            }), d.promise(e), a && a.call(e, e), e
        }, when: function (a) {
            var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && m.isFunction(a.promise) ? e : 0, g = 1 === f ? a : m.Deferred(), h = function (a, b, c) {
                return function (e) {
                    b[a] = this, c[a] = arguments.length > 1 ? d.call(arguments) : e, c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                }
            }, i, j, k;
            if (e > 1)for (i = new Array(e), j = new Array(e), k = new Array(e); e > b; b++)c[b] && m.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
            return f || g.resolveWith(k, c), g.promise()
        }
    });
    var H;
    m.fn.ready = function (a) {
        return m.ready.promise().done(a), this
    }, m.extend({
        isReady: !1, readyWait: 1, holdReady: function (a) {
            a ? m.readyWait++ : m.ready(!0)
        }, ready: function (a) {
            if (a === !0 ? !--m.readyWait : !m.isReady) {
                if (!y.body)return setTimeout(m.ready);
                m.isReady = !0, a !== !0 && --m.readyWait > 0 || (H.resolveWith(y, [m]), m.fn.triggerHandler && (m(y).triggerHandler("ready"), m(y).off("ready")))
            }
        }
    });
    function I() {
        y.addEventListener ? (y.removeEventListener("DOMContentLoaded", J, !1), a.removeEventListener("load", J, !1)) : (y.detachEvent("onreadystatechange", J), a.detachEvent("onload", J))
    }

    function J() {
        (y.addEventListener || "load" === event.type || "complete" === y.readyState) && (I(), m.ready())
    }

    m.ready.promise = function (b) {
        if (!H)if (H = m.Deferred(), "complete" === y.readyState) setTimeout(m.ready); else if (y.addEventListener) y.addEventListener("DOMContentLoaded", J, !1), a.addEventListener("load", J, !1); else {
            y.attachEvent("onreadystatechange", J), a.attachEvent("onload", J);
            var c = !1;
            try {
                c = null == a.frameElement && y.documentElement
            } catch (d) {
            }
            c && c.doScroll && !function e() {
                if (!m.isReady) {
                    try {
                        c.doScroll("left")
                    } catch (a) {
                        return setTimeout(e, 50)
                    }
                    I(), m.ready()
                }
            }()
        }
        return H.promise(b)
    };
    var K           = "undefined", L;
    for (L in m(k))break;
    k.ownLast = "0" !== L, k.inlineBlockNeedsLayout = !1, m(function () {
        var a, b, c, d;
        c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", k.inlineBlockNeedsLayout = a = 3 === b.offsetWidth, a && (c.style.zoom = 1)), c.removeChild(d))
    }), function () {
        var a = y.createElement("div");
        if (null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete a.test
            } catch (b) {
                k.deleteExpando = !1
            }
        }
        a = null
    }(), m.acceptData = function (a) {
        var b = m.noData[(a.nodeName + " ").toLowerCase()], c = +a.nodeType || 1;
        return 1 !== c && 9 !== c ? !1 : !b || b !== !0 && a.getAttribute("classid") === b
    };
    var M = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/, N = /([A-Z])/g;

    function O(a, b, c) {
        if (void 0 === c && 1 === a.nodeType) {
            var d = "data-" + b.replace(N, "-$1").toLowerCase();
            if (c = a.getAttribute(d), "string" == typeof c) {
                try {
                    c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : M.test(c) ? m.parseJSON(c) : c
                } catch (e) {
                }
                m.data(a, b, c)
            } else c = void 0
        }
        return c
    }

    function P(a) {
        var b;
        for (b in a)if (("data" !== b || !m.isEmptyObject(a[b])) && "toJSON" !== b)return !1;
        return !0
    }

    function Q(a, b, d, e) {
        if (m.acceptData(a)) {
            var f, g, h = m.expando, i = a.nodeType, j = i ? m.cache : a, k = i ? a[h] : a[h] && h;
            if (k && j[k] && (e || j[k].data) || void 0 !== d || "string" != typeof b)return k || (k = i ? a[h] = c.pop() || m.guid++ : h), j[k] || (j[k] = i ? {} : {toJSON: m.noop}), ("object" == typeof b || "function" == typeof b) && (e ? j[k] = m.extend(j[k], b) : j[k].data = m.extend(j[k].data, b)), g = j[k], e || (g.data || (g.data = {}), g = g.data), void 0 !== d && (g[m.camelCase(b)] = d), "string" == typeof b ? (f = g[b], null == f && (f = g[m.camelCase(b)])) : f = g, f
        }
    }

    function R(a, b, c) {
        if (m.acceptData(a)) {
            var d, e, f = a.nodeType, g = f ? m.cache : a, h = f ? a[m.expando] : m.expando;
            if (g[h]) {
                if (b && (d = c ? g[h] : g[h].data)) {
                    m.isArray(b) ? b = b.concat(m.map(b, m.camelCase)) : b in d ? b = [b] : (b = m.camelCase(b), b = b in d ? [b] : b.split(" ")), e = b.length;
                    while (e--)delete d[b[e]];
                    if (c ? !P(d) : !m.isEmptyObject(d))return
                }
                (c || (delete g[h].data, P(g[h]))) && (f ? m.cleanData([a], !0) : k.deleteExpando || g != g.window ? delete g[h] : g[h] = null)
            }
        }
    }

    m.extend({
        cache: {},
        noData: {"applet ": !0, "embed ": !0, "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"},
        hasData: function (a) {
            return a = a.nodeType ? m.cache[a[m.expando]] : a[m.expando], !!a && !P(a)
        },
        data: function (a, b, c) {
            return Q(a, b, c)
        },
        removeData: function (a, b) {
            return R(a, b)
        },
        _data: function (a, b, c) {
            return Q(a, b, c, !0)
        },
        _removeData: function (a, b) {
            return R(a, b, !0)
        }
    }), m.fn.extend({
        data: function (a, b) {
            var c, d, e, f = this[0], g = f && f.attributes;
            if (void 0 === a) {
                if (this.length && (e = m.data(f), 1 === f.nodeType && !m._data(f, "parsedAttrs"))) {
                    c = g.length;
                    while (c--)g[c] && (d = g[c].name, 0 === d.indexOf("data-") && (d = m.camelCase(d.slice(5)), O(f, d, e[d])));
                    m._data(f, "parsedAttrs", !0)
                }
                return e
            }
            return "object" == typeof a ? this.each(function () {
                    m.data(this, a)
                }) : arguments.length > 1 ? this.each(function () {
                        m.data(this, a, b)
                    }) : f ? O(f, a, m.data(f, a)) : void 0
        }, removeData: function (a) {
            return this.each(function () {
                m.removeData(this, a)
            })
        }
    }), m.extend({
        queue: function (a, b, c) {
            var d;
            return a ? (b = (b || "fx") + "queue", d = m._data(a, b), c && (!d || m.isArray(c) ? d = m._data(a, b, m.makeArray(c)) : d.push(c)), d || []) : void 0
        }, dequeue: function (a, b) {
            b     = b || "fx";
            var c = m.queue(a, b), d = c.length, e = c.shift(), f = m._queueHooks(a, b), g = function () {
                m.dequeue(a, b)
            };
            "inprogress" === e && (e = c.shift(), d--), e && ("fx" === b && c.unshift("inprogress"), delete f.stop, e.call(a, g, f)), !d && f && f.empty.fire()
        }, _queueHooks: function (a, b) {
            var c = b + "queueHooks";
            return m._data(a, c) || m._data(a, c, {
                    empty: m.Callbacks("once memory").add(function () {
                        m._removeData(a, b + "queue"), m._removeData(a, c)
                    })
                })
        }
    }), m.fn.extend({
        queue: function (a, b) {
            var c = 2;
            return "string" != typeof a && (b = a, a = "fx", c--), arguments.length < c ? m.queue(this[0], a) : void 0 === b ? this : this.each(function () {
                        var c = m.queue(this, a, b);
                        m._queueHooks(this, a), "fx" === a && "inprogress" !== c[0] && m.dequeue(this, a)
                    })
        }, dequeue: function (a) {
            return this.each(function () {
                m.dequeue(this, a)
            })
        }, clearQueue: function (a) {
            return this.queue(a || "fx", [])
        }, promise: function (a, b) {
            var c, d = 1, e = m.Deferred(), f = this, g = this.length, h = function () {
                --d || e.resolveWith(f, [f])
            };
            "string" != typeof a && (b = a, a = void 0), a = a || "fx";
            while (g--)c = m._data(f[g], a + "queueHooks"), c && c.empty && (d++, c.empty.add(h));
            return h(), e.promise(b)
        }
    });
    var S = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source, T = ["Top", "Right", "Bottom", "Left"], U = function (a, b) {
        return a = b || a, "none" === m.css(a, "display") || !m.contains(a.ownerDocument, a)
    }, V  = m.access = function (a, b, c, d, e, f, g) {
        var h = 0, i = a.length, j = null == c;
        if ("object" === m.type(c)) {
            e = !0;
            for (h in c)m.access(a, b, h, c[h], !0, f, g)
        } else if (void 0 !== d && (e = !0, m.isFunction(d) || (g = !0), j && (g ? (b.call(a, d), b = null) : (j = b, b = function (a, b, c) {
                    return j.call(m(a), c)
                })), b))for (; i > h; h++)b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
        return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
    }, W = /^(?:checkbox|radio)$/i;
    !function () {
        var a = y.createElement("input"), b = y.createElement("div"), c = y.createDocumentFragment();
        if (b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", k.leadingWhitespace = 3 === b.firstChild.nodeType, k.tbody = !b.getElementsByTagName("tbody").length, k.htmlSerialize = !!b.getElementsByTagName("link").length, k.html5Clone = "<:nav></:nav>" !== y.createElement("nav").cloneNode(!0).outerHTML, a.type = "checkbox", a.checked = !0, c.appendChild(a), k.appendChecked = a.checked, b.innerHTML = "<textarea>x</textarea>", k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue, c.appendChild(b), b.innerHTML = "<input type='radio' checked='checked' name='t'/>", k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked, k.noCloneEvent = !0, b.attachEvent && (b.attachEvent("onclick", function () {
                k.noCloneEvent = !1
            }), b.cloneNode(!0).click()), null == k.deleteExpando) {
            k.deleteExpando = !0;
            try {
                delete b.test
            } catch (d) {
                k.deleteExpando = !1
            }
        }
    }(), function () {
        var b, c, d = y.createElement("div");
        for (b in{
            submit: !0,
            change: !0,
            focusin: !0
        })c = "on" + b, (k[b + "Bubbles"] = c in a) || (d.setAttribute(c, "t"), k[b + "Bubbles"] = d.attributes[c].expando === !1);
        d = null
    }();
    var X = /^(?:input|select|textarea)$/i, Y = /^key/, Z = /^(?:mouse|pointer|contextmenu)|click/, $ = /^(?:focusinfocus|focusoutblur)$/, _ = /^([^.]*)(?:\.(.+)|)$/;

    function aa() {
        return !0
    }

    function ba() {
        return !1
    }

    function ca() {
        try {
            return y.activeElement
        } catch (a) {
        }
    }

    m.event = {
        global: {},
        add: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m._data(a);
            if (r) {
                c.handler && (i = c, c = i.handler, e = i.selector), c.guid || (c.guid = m.guid++), (g = r.events) || (g = r.events = {}), (k = r.handle) || (k = r.handle = function (a) {
                    return typeof m === K || a && m.event.triggered === a.type ? void 0 : m.event.dispatch.apply(k.elem, arguments)
                }, k.elem = a), b = (b || "").match(E) || [""], h = b.length;
                while (h--)f = _.exec(b[h]) || [], o = q = f[1], p = (f[2] || "").split(".").sort(), o && (j = m.event.special[o] || {}, o = (e ? j.delegateType : j.bindType) || o, j = m.event.special[o] || {}, l = m.extend({
                    type: o,
                    origType: q,
                    data: d,
                    handler: c,
                    guid: c.guid,
                    selector: e,
                    needsContext: e && m.expr.match.needsContext.test(e),
                    namespace: p.join(".")
                }, i), (n = g[o]) || (n = g[o] = [], n.delegateCount = 0, j.setup && j.setup.call(a, d, p, k) !== !1 || (a.addEventListener ? a.addEventListener(o, k, !1) : a.attachEvent && a.attachEvent("on" + o, k))), j.add && (j.add.call(a, l), l.handler.guid || (l.handler.guid = c.guid)), e ? n.splice(n.delegateCount++, 0, l) : n.push(l), m.event.global[o] = !0);
                a = null
            }
        },
        remove: function (a, b, c, d, e) {
            var f, g, h, i, j, k, l, n, o, p, q, r = m.hasData(a) && m._data(a);
            if (r && (k = r.events)) {
                b = (b || "").match(E) || [""], j = b.length;
                while (j--)if (h = _.exec(b[j]) || [], o = q = h[1], p = (h[2] || "").split(".").sort(), o) {
                    l = m.event.special[o] || {}, o = (d ? l.delegateType : l.bindType) || o, n = k[o] || [], h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), i = f = n.length;
                    while (f--)g = n[f], !e && q !== g.origType || c && c.guid !== g.guid || h && !h.test(g.namespace) || d && d !== g.selector && ("**" !== d || !g.selector) || (n.splice(f, 1), g.selector && n.delegateCount--, l.remove && l.remove.call(a, g));
                    i && !n.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || m.removeEvent(a, o, r.handle), delete k[o])
                } else for (o in k)m.event.remove(a, o + b[j], c, d, !0);
                m.isEmptyObject(k) && (delete r.handle, m._removeData(a, "events"))
            }
        },
        trigger: function (b, c, d, e) {
            var f, g, h, i, k, l, n, o = [d || y], p = j.call(b, "type") ? b.type : b, q = j.call(b, "namespace") ? b.namespace.split(".") : [];
            if (h = l = d = d || y, 3 !== d.nodeType && 8 !== d.nodeType && !$.test(p + m.event.triggered) && (p.indexOf(".") >= 0 && (q = p.split("."), p = q.shift(), q.sort()), g = p.indexOf(":") < 0 && "on" + p, b = b[m.expando] ? b : new m.Event(p, "object" == typeof b && b), b.isTrigger = e ? 2 : 3, b.namespace = q.join("."), b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + q.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, b.result = void 0, b.target || (b.target = d), c = null == c ? [b] : m.makeArray(c, [b]), k = m.event.special[p] || {}, e || !k.trigger || k.trigger.apply(d, c) !== !1)) {
                if (!e && !k.noBubble && !m.isWindow(d)) {
                    for (i = k.delegateType || p, $.test(i + p) || (h = h.parentNode); h; h = h.parentNode)o.push(h), l = h;
                    l === (d.ownerDocument || y) && o.push(l.defaultView || l.parentWindow || a)
                }
                n = 0;
                while ((h = o[n++]) && !b.isPropagationStopped())b.type = n > 1 ? i : k.bindType || p, f = (m._data(h, "events") || {})[b.type] && m._data(h, "handle"), f && f.apply(h, c), f = g && h[g], f && f.apply && m.acceptData(h) && (b.result = f.apply(h, c), b.result === !1 && b.preventDefault());
                if (b.type = p, !e && !b.isDefaultPrevented() && (!k._default || k._default.apply(o.pop(), c) === !1) && m.acceptData(d) && g && d[p] && !m.isWindow(d)) {
                    l = d[g], l && (d[g] = null), m.event.triggered = p;
                    try {
                        d[p]()
                    } catch (r) {
                    }
                    m.event.triggered = void 0, l && (d[g] = l)
                }
                return b.result
            }
        },
        dispatch: function (a) {
            a = m.event.fix(a);
            var b, c, e, f, g, h = [], i = d.call(arguments), j = (m._data(this, "events") || {})[a.type] || [], k = m.event.special[a.type] || {};
            if (i[0] = a, a.delegateTarget = this, !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                h = m.event.handlers.call(this, a, j), b = 0;
                while ((f = h[b++]) && !a.isPropagationStopped()) {
                    a.currentTarget = f.elem, g = 0;
                    while ((e = f.handlers[g++]) && !a.isImmediatePropagationStopped())(!a.namespace_re || a.namespace_re.test(e.namespace)) && (a.handleObj = e, a.data = e.data, c = ((m.event.special[e.origType] || {}).handle || e.handler).apply(f.elem, i), void 0 !== c && (a.result = c) === !1 && (a.preventDefault(), a.stopPropagation()))
                }
                return k.postDispatch && k.postDispatch.call(this, a), a.result
            }
        },
        handlers: function (a, b) {
            var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
            if (h && i.nodeType && (!a.button || "click" !== a.type))for (; i != this; i = i.parentNode || this)if (1 === i.nodeType && (i.disabled !== !0 || "click" !== a.type)) {
                for (e = [], f = 0; h > f; f++)d = b[f], c = d.selector + " ", void 0 === e[c] && (e[c] = d.needsContext ? m(c, this).index(i) >= 0 : m.find(c, this, null, [i]).length), e[c] && e.push(d);
                e.length && g.push({elem: i, handlers: e})
            }
            return h < b.length && g.push({elem: this, handlers: b.slice(h)}), g
        },
        fix: function (a) {
            if (a[m.expando])return a;
            var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
            g || (this.fixHooks[e] = g = Z.test(e) ? this.mouseHooks : Y.test(e) ? this.keyHooks : {}), d = g.props ? this.props.concat(g.props) : this.props, a = new m.Event(f), b = d.length;
            while (b--)c = d[b], a[c] = f[c];
            return a.target || (a.target = f.srcElement || y), 3 === a.target.nodeType && (a.target = a.target.parentNode), a.metaKey = !!a.metaKey, g.filter ? g.filter(a, f) : a
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "), filter: function (a, b) {
                return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode), a
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (a, b) {
                var c, d, e, f = b.button, g = b.fromElement;
                return null == a.pageX && null != b.clientX && (d = a.target.ownerDocument || y, e = d.documentElement, c = d.body, a.pageX = b.clientX + (e && e.scrollLeft || c && c.scrollLeft || 0) - (e && e.clientLeft || c && c.clientLeft || 0), a.pageY = b.clientY + (e && e.scrollTop || c && c.scrollTop || 0) - (e && e.clientTop || c && c.clientTop || 0)), !a.relatedTarget && g && (a.relatedTarget = g === a.target ? b.toElement : g), a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0), a
            }
        },
        special: {
            load: {noBubble: !0}, focus: {
                trigger: function () {
                    if (this !== ca() && this.focus)try {
                        return this.focus(), !1
                    } catch (a) {
                    }
                }, delegateType: "focusin"
            }, blur: {
                trigger: function () {
                    return this === ca() && this.blur ? (this.blur(), !1) : void 0
                }, delegateType: "focusout"
            }, click: {
                trigger: function () {
                    return m.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                }, _default: function (a) {
                    return m.nodeName(a.target, "a")
                }
            }, beforeunload: {
                postDispatch: function (a) {
                    void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                }
            }
        },
        simulate: function (a, b, c, d) {
            var e = m.extend(new m.Event, c, {type: a, isSimulated: !0, originalEvent: {}});
            d ? m.event.trigger(e, null, b) : m.event.dispatch.call(b, e), e.isDefaultPrevented() && c.preventDefault()
        }
    }, m.removeEvent = y.removeEventListener ? function (a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        } : function (a, b, c) {
            var d = "on" + b;
            a.detachEvent && (typeof a[d] === K && (a[d] = null), a.detachEvent(d, c))
        }, m.Event = function (a, b) {
        return this instanceof m.Event ? (a && a.type ? (this.originalEvent = a, this.type = a.type, this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? aa : ba) : this.type = a, b && m.extend(this, b), this.timeStamp = a && a.timeStamp || m.now(), void(this[m.expando] = !0)) : new m.Event(a, b)
    }, m.Event.prototype = {
        isDefaultPrevented: ba,
        isPropagationStopped: ba,
        isImmediatePropagationStopped: ba,
        preventDefault: function () {
            var a = this.originalEvent;
            this.isDefaultPrevented = aa, a && (a.preventDefault ? a.preventDefault() : a.returnValue = !1)
        },
        stopPropagation: function () {
            var a = this.originalEvent;
            this.isPropagationStopped = aa, a && (a.stopPropagation && a.stopPropagation(), a.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var a = this.originalEvent;
            this.isImmediatePropagationStopped = aa, a && a.stopImmediatePropagation && a.stopImmediatePropagation(), this.stopPropagation()
        }
    }, m.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (a, b) {
        m.event.special[a] = {
            delegateType: b, bindType: b, handle: function (a) {
                var c, d = this, e = a.relatedTarget, f = a.handleObj;
                return (!e || e !== d && !m.contains(d, e)) && (a.type = f.origType, c = f.handler.apply(this, arguments), a.type = b), c
            }
        }
    }), k.submitBubbles || (m.event.special.submit = {
        setup: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.add(this, "click._submit keypress._submit", function (a) {
                    var b = a.target, c = m.nodeName(b, "input") || m.nodeName(b, "button") ? b.form : void 0;
                    c && !m._data(c, "submitBubbles") && (m.event.add(c, "submit._submit", function (a) {
                        a._submit_bubble = !0
                    }), m._data(c, "submitBubbles", !0))
                })
        }, postDispatch: function (a) {
            a._submit_bubble && (delete a._submit_bubble, this.parentNode && !a.isTrigger && m.event.simulate("submit", this.parentNode, a, !0))
        }, teardown: function () {
            return m.nodeName(this, "form") ? !1 : void m.event.remove(this, "._submit")
        }
    }), k.changeBubbles || (m.event.special.change = {
        setup: function () {
            return X.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (m.event.add(this, "propertychange._change", function (a) {
                    "checked" === a.originalEvent.propertyName && (this._just_changed = !0)
                }), m.event.add(this, "click._change", function (a) {
                    this._just_changed && !a.isTrigger && (this._just_changed = !1), m.event.simulate("change", this, a, !0)
                })), !1) : void m.event.add(this, "beforeactivate._change", function (a) {
                    var b = a.target;
                    X.test(b.nodeName) && !m._data(b, "changeBubbles") && (m.event.add(b, "change._change", function (a) {
                        !this.parentNode || a.isSimulated || a.isTrigger || m.event.simulate("change", this.parentNode, a, !0)
                    }), m._data(b, "changeBubbles", !0))
                })
        }, handle: function (a) {
            var b = a.target;
            return this !== b || a.isSimulated || a.isTrigger || "radio" !== b.type && "checkbox" !== b.type ? a.handleObj.handler.apply(this, arguments) : void 0
        }, teardown: function () {
            return m.event.remove(this, "._change"), !X.test(this.nodeName)
        }
    }), k.focusinBubbles || m.each({focus: "focusin", blur: "focusout"}, function (a, b) {
        var c              = function (a) {
            m.event.simulate(b, a.target, m.event.fix(a), !0)
        };
        m.event.special[b] = {
            setup: function () {
                var d = this.ownerDocument || this, e = m._data(d, b);
                e || d.addEventListener(a, c, !0), m._data(d, b, (e || 0) + 1)
            }, teardown: function () {
                var d = this.ownerDocument || this, e = m._data(d, b) - 1;
                e ? m._data(d, b, e) : (d.removeEventListener(a, c, !0), m._removeData(d, b))
            }
        }
    }), m.fn.extend({
        on: function (a, b, c, d, e) {
            var f, g;
            if ("object" == typeof a) {
                "string" != typeof b && (c = c || b, b = void 0);
                for (f in a)this.on(f, b, c, a[f], e);
                return this
            }
            if (null == c && null == d ? (d = b, c = b = void 0) : null == d && ("string" == typeof b ? (d = c, c = void 0) : (d = c, c = b, b = void 0)), d === !1) d = ba; else if (!d)return this;
            return 1 === e && (g = d, d = function (a) {
                return m().off(a), g.apply(this, arguments)
            }, d.guid = g.guid || (g.guid = m.guid++)), this.each(function () {
                m.event.add(this, a, d, c, b)
            })
        }, one: function (a, b, c, d) {
            return this.on(a, b, c, d, 1)
        }, off: function (a, b, c) {
            var d, e;
            if (a && a.preventDefault && a.handleObj)return d = a.handleObj, m(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler), this;
            if ("object" == typeof a) {
                for (e in a)this.off(e, b, a[e]);
                return this
            }
            return (b === !1 || "function" == typeof b) && (c = b, b = void 0), c === !1 && (c = ba), this.each(function () {
                m.event.remove(this, a, c, b)
            })
        }, trigger: function (a, b) {
            return this.each(function () {
                m.event.trigger(a, b, this)
            })
        }, triggerHandler: function (a, b) {
            var c = this[0];
            return c ? m.event.trigger(a, b, c, !0) : void 0
        }
    });
    function da(a) {
        var b = ea.split("|"), c = a.createDocumentFragment();
        if (c.createElement)while (b.length)c.createElement(b.pop());
        return c
    }

    var ea = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video", fa = / jQuery\d+="(?:null|\d+)"/g, ga = new RegExp("<(?:" + ea + ")[\\s/>]", "i"), ha = /^\s+/, ia = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, ja = /<([\w:]+)/, ka = /<tbody/i, la = /<|&#?\w+;/, ma = /<(?:script|style|link)/i, na = /checked\s*(?:[^=]|=\s*.checked.)/i, oa = /^$|\/(?:java|ecma)script/i, pa = /^true\/(.*)/, qa = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g, ra = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: k.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    }, sa  = da(y), ta = sa.appendChild(y.createElement("div"));
    ra.optgroup = ra.option, ra.tbody = ra.tfoot = ra.colgroup = ra.caption = ra.thead, ra.th = ra.td;
    function ua(a, b) {
        var c, d, e = 0, f = typeof a.getElementsByTagName !== K ? a.getElementsByTagName(b || "*") : typeof a.querySelectorAll !== K ? a.querySelectorAll(b || "*") : void 0;
        if (!f)for (f = [], c = a.childNodes || a; null != (d = c[e]); e++)!b || m.nodeName(d, b) ? f.push(d) : m.merge(f, ua(d, b));
        return void 0 === b || b && m.nodeName(a, b) ? m.merge([a], f) : f
    }

    function va(a) {
        W.test(a.type) && (a.defaultChecked = a.checked)
    }

    function wa(a, b) {
        return m.nodeName(a, "table") && m.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
    }

    function xa(a) {
        return a.type = (null !== m.find.attr(a, "type")) + "/" + a.type, a
    }

    function ya(a) {
        var b = pa.exec(a.type);
        return b ? a.type = b[1] : a.removeAttribute("type"), a
    }

    function za(a, b) {
        for (var c, d = 0; null != (c = a[d]); d++)m._data(c, "globalEval", !b || m._data(b[d], "globalEval"))
    }

    function Aa(a, b) {
        if (1 === b.nodeType && m.hasData(a)) {
            var c, d, e, f = m._data(a), g = m._data(b, f), h = f.events;
            if (h) {
                delete g.handle, g.events = {};
                for (c in h)for (d = 0, e = h[c].length; e > d; d++)m.event.add(b, c, h[c][d])
            }
            g.data && (g.data = m.extend({}, g.data))
        }
    }

    function Ba(a, b) {
        var c, d, e;
        if (1 === b.nodeType) {
            if (c = b.nodeName.toLowerCase(), !k.noCloneEvent && b[m.expando]) {
                e = m._data(b);
                for (d in e.events)m.removeEvent(b, d, e.handle);
                b.removeAttribute(m.expando)
            }
            "script" === c && b.text !== a.text ? (xa(b).text = a.text, ya(b)) : "object" === c ? (b.parentNode && (b.outerHTML = a.outerHTML), k.html5Clone && a.innerHTML && !m.trim(b.innerHTML) && (b.innerHTML = a.innerHTML)) : "input" === c && W.test(a.type) ? (b.defaultChecked = b.checked = a.checked, b.value !== a.value && (b.value = a.value)) : "option" === c ? b.defaultSelected = b.selected = a.defaultSelected : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
    }

    m.extend({
        clone: function (a, b, c) {
            var d, e, f, g, h, i = m.contains(a.ownerDocument, a);
            if (k.html5Clone || m.isXMLDoc(a) || !ga.test("<" + a.nodeName + ">") ? f = a.cloneNode(!0) : (ta.innerHTML = a.outerHTML, ta.removeChild(f = ta.firstChild)), !(k.noCloneEvent && k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || m.isXMLDoc(a)))for (d = ua(f), h = ua(a), g = 0; null != (e = h[g]); ++g)d[g] && Ba(e, d[g]);
            if (b)if (c)for (h = h || ua(a), d = d || ua(f), g = 0; null != (e = h[g]); g++)Aa(e, d[g]); else Aa(a, f);
            return d = ua(f, "script"), d.length > 0 && za(d, !i && ua(a, "script")), d = h = e = null, f
        }, buildFragment: function (a, b, c, d) {
            for (var e, f, g, h, i, j, l, n = a.length, o = da(b), p = [], q = 0; n > q; q++)if (f = a[q], f || 0 === f)if ("object" === m.type(f)) m.merge(p, f.nodeType ? [f] : f); else if (la.test(f)) {
                h = h || o.appendChild(b.createElement("div")), i = (ja.exec(f) || ["", ""])[1].toLowerCase(), l = ra[i] || ra._default, h.innerHTML = l[1] + f.replace(ia, "<$1></$2>") + l[2], e = l[0];
                while (e--)h = h.lastChild;
                if (!k.leadingWhitespace && ha.test(f) && p.push(b.createTextNode(ha.exec(f)[0])), !k.tbody) {
                    f = "table" !== i || ka.test(f) ? "<table>" !== l[1] || ka.test(f) ? 0 : h : h.firstChild, e = f && f.childNodes.length;
                    while (e--)m.nodeName(j = f.childNodes[e], "tbody") && !j.childNodes.length && f.removeChild(j)
                }
                m.merge(p, h.childNodes), h.textContent = "";
                while (h.firstChild)h.removeChild(h.firstChild);
                h = o.lastChild
            } else p.push(b.createTextNode(f));
            h && o.removeChild(h), k.appendChecked || m.grep(ua(p, "input"), va), q = 0;
            while (f = p[q++])if ((!d || -1 === m.inArray(f, d)) && (g = m.contains(f.ownerDocument, f), h = ua(o.appendChild(f), "script"), g && za(h), c)) {
                e = 0;
                while (f = h[e++])oa.test(f.type || "") && c.push(f)
            }
            return h = null, o
        }, cleanData: function (a, b) {
            for (var d, e, f, g, h = 0, i = m.expando, j = m.cache, l = k.deleteExpando, n = m.event.special; null != (d = a[h]); h++)if ((b || m.acceptData(d)) && (f = d[i], g = f && j[f])) {
                if (g.events)for (e in g.events)n[e] ? m.event.remove(d, e) : m.removeEvent(d, e, g.handle);
                j[f] && (delete j[f], l ? delete d[i] : typeof d.removeAttribute !== K ? d.removeAttribute(i) : d[i] = null, c.push(f))
            }
        }
    }), m.fn.extend({
        text: function (a) {
            return V(this, function (a) {
                return void 0 === a ? m.text(this) : this.empty().append((this[0] && this[0].ownerDocument || y).createTextNode(a))
            }, null, a, arguments.length)
        }, append: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.appendChild(a)
                }
            })
        }, prepend: function () {
            return this.domManip(arguments, function (a) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var b = wa(this, a);
                    b.insertBefore(a, b.firstChild)
                }
            })
        }, before: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this)
            })
        }, after: function () {
            return this.domManip(arguments, function (a) {
                this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
            })
        }, remove: function (a, b) {
            for (var c, d = a ? m.filter(a, this) : this, e = 0; null != (c = d[e]); e++)b || 1 !== c.nodeType || m.cleanData(ua(c)), c.parentNode && (b && m.contains(c.ownerDocument, c) && za(ua(c, "script")), c.parentNode.removeChild(c));
            return this
        }, empty: function () {
            for (var a, b = 0; null != (a = this[b]); b++) {
                1 === a.nodeType && m.cleanData(ua(a, !1));
                while (a.firstChild)a.removeChild(a.firstChild);
                a.options && m.nodeName(a, "select") && (a.options.length = 0)
            }
            return this
        }, clone: function (a, b) {
            return a = null == a ? !1 : a, b = null == b ? a : b, this.map(function () {
                return m.clone(this, a, b)
            })
        }, html: function (a) {
            return V(this, function (a) {
                var b = this[0] || {}, c = 0, d = this.length;
                if (void 0 === a)return 1 === b.nodeType ? b.innerHTML.replace(fa, "") : void 0;
                if (!("string" != typeof a || ma.test(a) || !k.htmlSerialize && ga.test(a) || !k.leadingWhitespace && ha.test(a) || ra[(ja.exec(a) || ["", ""])[1].toLowerCase()])) {
                    a = a.replace(ia, "<$1></$2>");
                    try {
                        for (; d > c; c++)b = this[c] || {}, 1 === b.nodeType && (m.cleanData(ua(b, !1)), b.innerHTML = a);
                        b = 0
                    } catch (e) {
                    }
                }
                b && this.empty().append(a)
            }, null, a, arguments.length)
        }, replaceWith: function () {
            var a = arguments[0];
            return this.domManip(arguments, function (b) {
                a = this.parentNode, m.cleanData(ua(this)), a && a.replaceChild(b, this)
            }), a && (a.length || a.nodeType) ? this : this.remove()
        }, detach: function (a) {
            return this.remove(a, !0)
        }, domManip: function (a, b) {
            a                       = e.apply([], a);
            var c, d, f, g, h, i, j = 0, l = this.length, n = this, o = l - 1, p = a[0], q = m.isFunction(p);
            if (q || l > 1 && "string" == typeof p && !k.checkClone && na.test(p))return this.each(function (c) {
                var d = n.eq(c);
                q && (a[0] = p.call(this, c, d.html())), d.domManip(a, b)
            });
            if (l && (i = m.buildFragment(a, this[0].ownerDocument, !1, this), c = i.firstChild, 1 === i.childNodes.length && (i = c), c)) {
                for (g = m.map(ua(i, "script"), xa), f = g.length; l > j; j++)d = i, j !== o && (d = m.clone(d, !0, !0), f && m.merge(g, ua(d, "script"))), b.call(this[j], d, j);
                if (f)for (h = g[g.length - 1].ownerDocument, m.map(g, ya), j = 0; f > j; j++)d = g[j], oa.test(d.type || "") && !m._data(d, "globalEval") && m.contains(h, d) && (d.src ? m._evalUrl && m._evalUrl(d.src) : m.globalEval((d.text || d.textContent || d.innerHTML || "").replace(qa, "")));
                i = c = null
            }
            return this
        }
    }), m.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (a, b) {
        m.fn[a] = function (a) {
            for (var c, d = 0, e = [], g = m(a), h = g.length - 1; h >= d; d++)c = d === h ? this : this.clone(!0), m(g[d])[b](c), f.apply(e, c.get());
            return this.pushStack(e)
        }
    });
    var Ca, Da = {};

    function Ea(b, c) {
        var d, e = m(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : m.css(e[0], "display");
        return e.detach(), f
    }

    function Fa(a) {
        var b = y, c = Da[a];
        return c || (c = Ea(a, b), "none" !== c && c || (Ca = (Ca || m("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement), b = (Ca[0].contentWindow || Ca[0].contentDocument).document, b.write(), b.close(), c = Ea(a, b), Ca.detach()), Da[a] = c), c
    }

    !function () {
        var a;
        k.shrinkWrapBlocks = function () {
            if (null != a)return a;
            a = !1;
            var b, c, d;
            return c = y.getElementsByTagName("body")[0], c && c.style ? (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), typeof b.style.zoom !== K && (b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", b.appendChild(y.createElement("div")).style.width = "5px", a = 3 !== b.offsetWidth), c.removeChild(d), a) : void 0
        }
    }();
    var Ga = /^margin/, Ha = new RegExp("^(" + S + ")(?!px)[a-z%]+$", "i"), Ia, Ja, Ka = /^(top|right|bottom|left)$/;
    a.getComputedStyle ? (Ia = function (b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        }, Ja = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ia(a), g = c ? c.getPropertyValue(b) || c[b] : void 0, c && ("" !== g || m.contains(a.ownerDocument, a) || (g = m.style(a, b)), Ha.test(g) && Ga.test(b) && (d = h.width, e = h.minWidth, f = h.maxWidth, h.minWidth = h.maxWidth = h.width = g, g = c.width, h.width = d, h.minWidth = e, h.maxWidth = f)), void 0 === g ? g : g + ""
        }) : y.documentElement.currentStyle && (Ia = function (a) {
            return a.currentStyle
        }, Ja = function (a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || Ia(a), g = c ? c[b] : void 0, null == g && h && h[b] && (g = h[b]), Ha.test(g) && !Ka.test(b) && (d = h.left, e = a.runtimeStyle, f = e && e.left, f && (e.left = a.currentStyle.left), h.left = "fontSize" === b ? "1em" : g, g = h.pixelLeft + "px", h.left = d, f && (e.left = f)), void 0 === g ? g : g + "" || "auto"
        });
    function La(a, b) {
        return {
            get: function () {
                var c = a();
                if (null != c)return c ? void delete this.get : (this.get = b).apply(this, arguments)
            }
        }
    }

    !function () {
        var b, c, d, e, f, g, h;
        if (b = y.createElement("div"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = d && d.style) {
            c.cssText = "float:left;opacity:.5", k.opacity = "0.5" === c.opacity, k.cssFloat = !!c.cssFloat, b.style.backgroundClip = "content-box", b.cloneNode(!0).style.backgroundClip = "", k.clearCloneStyle = "content-box" === b.style.backgroundClip, k.boxSizing = "" === c.boxSizing || "" === c.MozBoxSizing || "" === c.WebkitBoxSizing, m.extend(k, {
                reliableHiddenOffsets: function () {
                    return null == g && i(), g
                }, boxSizingReliable: function () {
                    return null == f && i(), f
                }, pixelPosition: function () {
                    return null == e && i(), e
                }, reliableMarginRight: function () {
                    return null == h && i(), h
                }
            });
            function i() {
                var b, c, d, i;
                c = y.getElementsByTagName("body")[0], c && c.style && (b = y.createElement("div"), d = y.createElement("div"), d.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", c.appendChild(d).appendChild(b), b.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute", e = f = !1, h = !0, a.getComputedStyle && (e = "1%" !== (a.getComputedStyle(b, null) || {}).top, f = "4px" === (a.getComputedStyle(b, null) || {width: "4px"}).width, i = b.appendChild(y.createElement("div")), i.style.cssText = b.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", i.style.marginRight = i.style.width = "0", b.style.width = "1px", h = !parseFloat((a.getComputedStyle(i, null) || {}).marginRight), b.removeChild(i)), b.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", i = b.getElementsByTagName("td"), i[0].style.cssText = "margin:0;border:0;padding:0;display:none", g = 0 === i[0].offsetHeight, g && (i[0].style.display = "", i[1].style.display = "none", g = 0 === i[0].offsetHeight), c.removeChild(d))
            }
        }
    }(), m.swap = function (a, b, c, d) {
        var e, f, g = {};
        for (f in b)g[f] = a.style[f], a.style[f] = b[f];
        e = c.apply(a, d || []);
        for (f in b)a.style[f] = g[f];
        return e
    };
    var Ma = /alpha\([^)]*\)/i, Na = /opacity\s*=\s*([^)]*)/, Oa = /^(none|table(?!-c[ea]).+)/, Pa = new RegExp("^(" + S + ")(.*)$", "i"), Qa = new RegExp("^([+-])=(" + S + ")", "i"), Ra = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    }, Sa  = {letterSpacing: "0", fontWeight: "400"}, Ta = ["Webkit", "O", "Moz", "ms"];

    function Ua(a, b) {
        if (b in a)return b;
        var c = b.charAt(0).toUpperCase() + b.slice(1), d = b, e = Ta.length;
        while (e--)if (b = Ta[e] + c, b in a)return b;
        return d
    }

    function Va(a, b) {
        for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)d = a[g], d.style && (f[g] = m._data(d, "olddisplay"), c = d.style.display, b ? (f[g] || "none" !== c || (d.style.display = ""), "" === d.style.display && U(d) && (f[g] = m._data(d, "olddisplay", Fa(d.nodeName)))) : (e = U(d), (c && "none" !== c || !e) && m._data(d, "olddisplay", e ? c : m.css(d, "display"))));
        for (g = 0; h > g; g++)d = a[g], d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
        return a
    }

    function Wa(a, b, c) {
        var d = Pa.exec(b);
        return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
    }

    function Xa(a, b, c, d, e) {
        for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)"margin" === c && (g += m.css(a, c + T[f], !0, e)), d ? ("content" === c && (g -= m.css(a, "padding" + T[f], !0, e)), "margin" !== c && (g -= m.css(a, "border" + T[f] + "Width", !0, e))) : (g += m.css(a, "padding" + T[f], !0, e), "padding" !== c && (g += m.css(a, "border" + T[f] + "Width", !0, e)));
        return g
    }

    function Ya(a, b, c) {
        var d = !0, e = "width" === b ? a.offsetWidth : a.offsetHeight, f = Ia(a), g = k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, f);
        if (0 >= e || null == e) {
            if (e = Ja(a, b, f), (0 > e || null == e) && (e = a.style[b]), Ha.test(e))return e;
            d = g && (k.boxSizingReliable() || e === a.style[b]), e = parseFloat(e) || 0
        }
        return e + Xa(a, b, c || (g ? "border" : "content"), d, f) + "px"
    }

    m.extend({
        cssHooks: {
            opacity: {
                get: function (a, b) {
                    if (b) {
                        var c = Ja(a, "opacity");
                        return "" === c ? "1" : c
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {"float": k.cssFloat ? "cssFloat" : "styleFloat"},
        style: function (a, b, c, d) {
            if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                var e, f, g, h = m.camelCase(b), i = a.style;
                if (b = m.cssProps[h] || (m.cssProps[h] = Ua(i, h)), g = m.cssHooks[b] || m.cssHooks[h], void 0 === c)return g && "get" in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b];
                if (f = typeof c, "string" === f && (e = Qa.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(m.css(a, b)), f = "number"), null != c && c === c && ("number" !== f || m.cssNumber[h] || (c += "px"), k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"), !(g && "set" in g && void 0 === (c = g.set(a, c, d)))))try {
                    i[b] = c
                } catch (j) {
                }
            }
        },
        css: function (a, b, c, d) {
            var e, f, g, h = m.camelCase(b);
            return b = m.cssProps[h] || (m.cssProps[h] = Ua(a.style, h)), g = m.cssHooks[b] || m.cssHooks[h], g && "get" in g && (f = g.get(a, !0, c)), void 0 === f && (f = Ja(a, b, d)), "normal" === f && b in Sa && (f = Sa[b]), "" === c || c ? (e = parseFloat(f), c === !0 || m.isNumeric(e) ? e || 0 : f) : f
        }
    }), m.each(["height", "width"], function (a, b) {
        m.cssHooks[b] = {
            get: function (a, c, d) {
                return c ? Oa.test(m.css(a, "display")) && 0 === a.offsetWidth ? m.swap(a, Ra, function () {
                            return Ya(a, b, d)
                        }) : Ya(a, b, d) : void 0
            }, set: function (a, c, d) {
                var e = d && Ia(a);
                return Wa(a, c, d ? Xa(a, b, d, k.boxSizing && "border-box" === m.css(a, "boxSizing", !1, e), e) : 0)
            }
        }
    }), k.opacity || (m.cssHooks.opacity = {
        get: function (a, b) {
            return Na.test((b && a.currentStyle ? a.currentStyle.filter : a.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : b ? "1" : ""
        }, set: function (a, b) {
            var c = a.style, d = a.currentStyle, e = m.isNumeric(b) ? "alpha(opacity=" + 100 * b + ")" : "", f = d && d.filter || c.filter || "";
            c.zoom = 1, (b >= 1 || "" === b) && "" === m.trim(f.replace(Ma, "")) && c.removeAttribute && (c.removeAttribute("filter"), "" === b || d && !d.filter) || (c.filter = Ma.test(f) ? f.replace(Ma, e) : f + " " + e)
        }
    }), m.cssHooks.marginRight = La(k.reliableMarginRight, function (a, b) {
        return b ? m.swap(a, {display: "inline-block"}, Ja, [a, "marginRight"]) : void 0
    }), m.each({margin: "", padding: "", border: "Width"}, function (a, b) {
        m.cssHooks[a + b] = {
            expand: function (c) {
                for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)e[a + T[d] + b] = f[d] || f[d - 2] || f[0];
                return e
            }
        }, Ga.test(a) || (m.cssHooks[a + b].set = Wa)
    }), m.fn.extend({
        css: function (a, b) {
            return V(this, function (a, b, c) {
                var d, e, f = {}, g = 0;
                if (m.isArray(b)) {
                    for (d = Ia(a), e = b.length; e > g; g++)f[b[g]] = m.css(a, b[g], !1, d);
                    return f
                }
                return void 0 !== c ? m.style(a, b, c) : m.css(a, b)
            }, a, b, arguments.length > 1)
        }, show: function () {
            return Va(this, !0)
        }, hide: function () {
            return Va(this)
        }, toggle: function (a) {
            return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function () {
                    U(this) ? m(this).show() : m(this).hide()
                })
        }
    });
    function Za(a, b, c, d, e) {
        return new Za.prototype.init(a, b, c, d, e)
    }

    m.Tween = Za, Za.prototype = {
        constructor: Za, init: function (a, b, c, d, e, f) {
            this.elem = a, this.prop = c, this.easing = e || "swing", this.options = b, this.start = this.now = this.cur(), this.end = d, this.unit = f || (m.cssNumber[c] ? "" : "px")
        }, cur: function () {
            var a = Za.propHooks[this.prop];
            return a && a.get ? a.get(this) : Za.propHooks._default.get(this)
        }, run: function (a) {
            var b, c = Za.propHooks[this.prop];
            return this.options.duration ? this.pos = b = m.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : this.pos = b = a, this.now = (this.end - this.start) * b + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), c && c.set ? c.set(this) : Za.propHooks._default.set(this), this
        }
    }, Za.prototype.init.prototype = Za.prototype, Za.propHooks = {
        _default: {
            get: function (a) {
                var b;
                return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = m.css(a.elem, a.prop, ""), b && "auto" !== b ? b : 0) : a.elem[a.prop]
            }, set: function (a) {
                m.fx.step[a.prop] ? m.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[m.cssProps[a.prop]] || m.cssHooks[a.prop]) ? m.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
            }
        }
    }, Za.propHooks.scrollTop = Za.propHooks.scrollLeft = {
        set: function (a) {
            a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
        }
    }, m.easing = {
        linear: function (a) {
            return a
        }, swing: function (a) {
            return .5 - Math.cos(a * Math.PI) / 2
        }
    }, m.fx = Za.prototype.init, m.fx.step = {};
    var $a, _a, ab = /^(?:toggle|show|hide)$/, bb = new RegExp("^(?:([+-])=|)(" + S + ")([a-z%]*)$", "i"), cb = /queueHooks$/, db = [ib], eb = {
        "*": [function (a, b) {
            var c = this.createTween(a, b), d = c.cur(), e = bb.exec(b), f = e && e[3] || (m.cssNumber[a] ? "" : "px"), g = (m.cssNumber[a] || "px" !== f && +d) && bb.exec(m.css(c.elem, a)), h = 1, i = 20;
            if (g && g[3] !== f) {
                f = f || g[3], e = e || [], g = +d || 1;
                do h = h || ".5", g /= h, m.style(c.elem, a, g + f); while (h !== (h = c.cur() / d) && 1 !== h && --i)
            }
            return e && (g = c.start = +g || +d || 0, c.unit = f, c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]), c
        }]
    };

    function fb() {
        return setTimeout(function () {
            $a = void 0
        }), $a = m.now()
    }

    function gb(a, b) {
        var c, d = {height: a}, e = 0;
        for (b = b ? 1 : 0; 4 > e; e += 2 - b)c = T[e], d["margin" + c] = d["padding" + c] = a;
        return b && (d.opacity = d.width = a), d
    }

    function hb(a, b, c) {
        for (var d, e = (eb[b] || []).concat(eb["*"]), f = 0, g = e.length; g > f; f++)if (d = e[f].call(c, b, a))return d
    }

    function ib(a, b, c) {
        var d, e, f, g, h, i, j, l, n = this, o = {}, p = a.style, q = a.nodeType && U(a), r = m._data(a, "fxshow");
        c.queue || (h = m._queueHooks(a, "fx"), null == h.unqueued && (h.unqueued = 0, i = h.empty.fire, h.empty.fire = function () {
            h.unqueued || i()
        }), h.unqueued++, n.always(function () {
            n.always(function () {
                h.unqueued--, m.queue(a, "fx").length || h.empty.fire()
            })
        })), 1 === a.nodeType && ("height" in b || "width" in b) && (c.overflow = [p.overflow, p.overflowX, p.overflowY], j = m.css(a, "display"), l = "none" === j ? m._data(a, "olddisplay") || Fa(a.nodeName) : j, "inline" === l && "none" === m.css(a, "float") && (k.inlineBlockNeedsLayout && "inline" !== Fa(a.nodeName) ? p.zoom = 1 : p.display = "inline-block")), c.overflow && (p.overflow = "hidden", k.shrinkWrapBlocks() || n.always(function () {
            p.overflow = c.overflow[0], p.overflowX = c.overflow[1], p.overflowY = c.overflow[2]
        }));
        for (d in b)if (e = b[d], ab.exec(e)) {
            if (delete b[d], f = f || "toggle" === e, e === (q ? "hide" : "show")) {
                if ("show" !== e || !r || void 0 === r[d])continue;
                q = !0
            }
            o[d] = r && r[d] || m.style(a, d)
        } else j = void 0;
        if (m.isEmptyObject(o)) "inline" === ("none" === j ? Fa(a.nodeName) : j) && (p.display = j); else {
            r ? "hidden" in r && (q = r.hidden) : r = m._data(a, "fxshow", {}), f && (r.hidden = !q), q ? m(a).show() : n.done(function () {
                    m(a).hide()
                }), n.done(function () {
                var b;
                m._removeData(a, "fxshow");
                for (b in o)m.style(a, b, o[b])
            });
            for (d in o)g = hb(q ? r[d] : 0, d, n), d in r || (r[d] = g.start, q && (g.end = g.start, g.start = "width" === d || "height" === d ? 1 : 0))
        }
    }

    function jb(a, b) {
        var c, d, e, f, g;
        for (c in a)if (d = m.camelCase(c), e = b[d], f = a[c], m.isArray(f) && (e = f[1], f = a[c] = f[0]), c !== d && (a[d] = f, delete a[c]), g = m.cssHooks[d], g && "expand" in g) {
            f = g.expand(f), delete a[d];
            for (c in f)c in a || (a[c] = f[c], b[c] = e)
        } else b[d] = e
    }

    function kb(a, b, c) {
        var d, e, f = 0, g = db.length, h = m.Deferred().always(function () {
            delete i.elem
        }), i       = function () {
            if (e)return !1;
            for (var b = $a || fb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)j.tweens[g].run(f);
            return h.notifyWith(a, [j, f, c]), 1 > f && i ? c : (h.resolveWith(a, [j]), !1)
        }, j        = h.promise({
            elem: a,
            props: m.extend({}, b),
            opts: m.extend(!0, {specialEasing: {}}, c),
            originalProperties: b,
            originalOptions: c,
            startTime: $a || fb(),
            duration: c.duration,
            tweens: [],
            createTween: function (b, c) {
                var d = m.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                return j.tweens.push(d), d
            },
            stop: function (b) {
                var c = 0, d = b ? j.tweens.length : 0;
                if (e)return this;
                for (e = !0; d > c; c++)j.tweens[c].run(1);
                return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]), this
            }
        }), k       = j.props;
        for (jb(k, j.opts.specialEasing); g > f; f++)if (d = db[f].call(j, a, k, j.opts))return d;
        return m.map(k, hb, j), m.isFunction(j.opts.start) && j.opts.start.call(a, j), m.fx.timer(m.extend(i, {
            elem: a,
            anim: j,
            queue: j.opts.queue
        })), j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
    }

    m.Animation = m.extend(kb, {
        tweener: function (a, b) {
            m.isFunction(a) ? (b = a, a = ["*"]) : a = a.split(" ");
            for (var c, d = 0, e = a.length; e > d; d++)c = a[d], eb[c] = eb[c] || [], eb[c].unshift(b)
        }, prefilter: function (a, b) {
            b ? db.unshift(a) : db.push(a)
        }
    }), m.speed = function (a, b, c) {
        var d = a && "object" == typeof a ? m.extend({}, a) : {
                complete: c || !c && b || m.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !m.isFunction(b) && b
            };
        return d.duration = m.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in m.fx.speeds ? m.fx.speeds[d.duration] : m.fx.speeds._default, (null == d.queue || d.queue === !0) && (d.queue = "fx"), d.old = d.complete, d.complete = function () {
            m.isFunction(d.old) && d.old.call(this), d.queue && m.dequeue(this, d.queue)
        }, d
    }, m.fn.extend({
        fadeTo: function (a, b, c, d) {
            return this.filter(U).css("opacity", 0).show().end().animate({opacity: b}, a, c, d)
        }, animate: function (a, b, c, d) {
            var e = m.isEmptyObject(a), f = m.speed(b, c, d), g = function () {
                var b = kb(this, m.extend({}, a), f);
                (e || m._data(this, "finish")) && b.stop(!0)
            };
            return g.finish = g, e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
        }, stop: function (a, b, c) {
            var d = function (a) {
                var b = a.stop;
                delete a.stop, b(c)
            };
            return "string" != typeof a && (c = b, b = a, a = void 0), b && a !== !1 && this.queue(a || "fx", []), this.each(function () {
                var b = !0, e = null != a && a + "queueHooks", f = m.timers, g = m._data(this);
                if (e) g[e] && g[e].stop && d(g[e]); else for (e in g)g[e] && g[e].stop && cb.test(e) && d(g[e]);
                for (e = f.length; e--;)f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c), b = !1, f.splice(e, 1));
                (b || !c) && m.dequeue(this, a)
            })
        }, finish: function (a) {
            return a !== !1 && (a = a || "fx"), this.each(function () {
                var b, c = m._data(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = m.timers, g = d ? d.length : 0;
                for (c.finish = !0, m.queue(this, a, []), e && e.stop && e.stop.call(this, !0), b = f.length; b--;)f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0), f.splice(b, 1));
                for (b = 0; g > b; b++)d[b] && d[b].finish && d[b].finish.call(this);
                delete c.finish
            })
        }
    }), m.each(["toggle", "show", "hide"], function (a, b) {
        var c   = m.fn[b];
        m.fn[b] = function (a, d, e) {
            return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(gb(b, !0), a, d, e)
        }
    }), m.each({
        slideDown: gb("show"),
        slideUp: gb("hide"),
        slideToggle: gb("toggle"),
        fadeIn: {opacity: "show"},
        fadeOut: {opacity: "hide"},
        fadeToggle: {opacity: "toggle"}
    }, function (a, b) {
        m.fn[a] = function (a, c, d) {
            return this.animate(b, a, c, d)
        }
    }), m.timers = [], m.fx.tick = function () {
        var a, b = m.timers, c = 0;
        for ($a = m.now(); c < b.length; c++)a = b[c], a() || b[c] !== a || b.splice(c--, 1);
        b.length || m.fx.stop(), $a = void 0
    }, m.fx.timer = function (a) {
        m.timers.push(a), a() ? m.fx.start() : m.timers.pop()
    }, m.fx.interval = 13, m.fx.start = function () {
        _a || (_a = setInterval(m.fx.tick, m.fx.interval))
    }, m.fx.stop = function () {
        clearInterval(_a), _a = null
    }, m.fx.speeds = {slow: 600, fast: 200, _default: 400}, m.fn.delay = function (a, b) {
        return a = m.fx ? m.fx.speeds[a] || a : a, b = b || "fx", this.queue(b, function (b, c) {
            var d  = setTimeout(b, a);
            c.stop = function () {
                clearTimeout(d)
            }
        })
    }, function () {
        var a, b, c, d, e;
        b = y.createElement("div"), b.setAttribute("className", "t"), b.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", d = b.getElementsByTagName("a")[0], c = y.createElement("select"), e = c.appendChild(y.createElement("option")), a = b.getElementsByTagName("input")[0], d.style.cssText = "top:1px", k.getSetAttribute = "t" !== b.className, k.style = /top/.test(d.getAttribute("style")), k.hrefNormalized = "/a" === d.getAttribute("href"), k.checkOn = !!a.value, k.optSelected = e.selected, k.enctype = !!y.createElement("form").enctype, c.disabled = !0, k.optDisabled = !e.disabled, a = y.createElement("input"), a.setAttribute("value", ""), k.input = "" === a.getAttribute("value"), a.value = "t", a.setAttribute("type", "radio"), k.radioValue = "t" === a.value
    }();
    var lb = /\r/g;
    m.fn.extend({
        val: function (a) {
            var b, c, d, e = this[0];
            {
                if (arguments.length)return d = m.isFunction(a), this.each(function (c) {
                    var e;
                    1 === this.nodeType && (e = d ? a.call(this, c, m(this).val()) : a, null == e ? e = "" : "number" == typeof e ? e += "" : m.isArray(e) && (e = m.map(e, function (a) {
                                return null == a ? "" : a + ""
                            })), b = m.valHooks[this.type] || m.valHooks[this.nodeName.toLowerCase()], b && "set" in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                });
                if (e)return b = m.valHooks[e.type] || m.valHooks[e.nodeName.toLowerCase()], b && "get" in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value, "string" == typeof c ? c.replace(lb, "") : null == c ? "" : c)
            }
        }
    }), m.extend({
        valHooks: {
            option: {
                get: function (a) {
                    var b = m.find.attr(a, "value");
                    return null != b ? b : m.trim(m.text(a))
                }
            }, select: {
                get: function (a) {
                    for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)if (c = d[i], !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && m.nodeName(c.parentNode, "optgroup"))) {
                        if (b = m(c).val(), f)return b;
                        g.push(b)
                    }
                    return g
                }, set: function (a, b) {
                    var c, d, e = a.options, f = m.makeArray(b), g = e.length;
                    while (g--)if (d = e[g], m.inArray(m.valHooks.option.get(d), f) >= 0)try {
                        d.selected = c = !0
                    } catch (h) {
                        d.scrollHeight
                    } else d.selected = !1;
                    return c || (a.selectedIndex = -1), e
                }
            }
        }
    }), m.each(["radio", "checkbox"], function () {
        m.valHooks[this] = {
            set: function (a, b) {
                return m.isArray(b) ? a.checked = m.inArray(m(a).val(), b) >= 0 : void 0
            }
        }, k.checkOn || (m.valHooks[this].get = function (a) {
            return null === a.getAttribute("value") ? "on" : a.value
        })
    });
    var mb, nb, ob = m.expr.attrHandle, pb = /^(?:checked|selected)$/i, qb = k.getSetAttribute, rb = k.input;
    m.fn.extend({
        attr: function (a, b) {
            return V(this, m.attr, a, b, arguments.length > 1)
        }, removeAttr: function (a) {
            return this.each(function () {
                m.removeAttr(this, a)
            })
        }
    }), m.extend({
        attr: function (a, b, c) {
            var d, e, f = a.nodeType;
            if (a && 3 !== f && 8 !== f && 2 !== f)return typeof a.getAttribute === K ? m.prop(a, b, c) : (1 === f && m.isXMLDoc(a) || (b = b.toLowerCase(), d = m.attrHooks[b] || (m.expr.match.bool.test(b) ? nb : mb)), void 0 === c ? d && "get" in d && null !== (e = d.get(a, b)) ? e : (e = m.find.attr(a, b), null == e ? void 0 : e) : null !== c ? d && "set" in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""), c) : void m.removeAttr(a, b))
        }, removeAttr: function (a, b) {
            var c, d, e = 0, f = b && b.match(E);
            if (f && 1 === a.nodeType)while (c = f[e++])d = m.propFix[c] || c, m.expr.match.bool.test(c) ? rb && qb || !pb.test(c) ? a[d] = !1 : a[m.camelCase("default-" + c)] = a[d] = !1 : m.attr(a, c, ""), a.removeAttribute(qb ? c : d)
        }, attrHooks: {
            type: {
                set: function (a, b) {
                    if (!k.radioValue && "radio" === b && m.nodeName(a, "input")) {
                        var c = a.value;
                        return a.setAttribute("type", b), c && (a.value = c), b
                    }
                }
            }
        }
    }), nb = {
        set: function (a, b, c) {
            return b === !1 ? m.removeAttr(a, c) : rb && qb || !pb.test(c) ? a.setAttribute(!qb && m.propFix[c] || c, c) : a[m.camelCase("default-" + c)] = a[c] = !0, c
        }
    }, m.each(m.expr.match.bool.source.match(/\w+/g), function (a, b) {
        var c = ob[b] || m.find.attr;
        ob[b] = rb && qb || !pb.test(b) ? function (a, b, d) {
                var e, f;
                return d || (f = ob[b], ob[b] = e, e = null != c(a, b, d) ? b.toLowerCase() : null, ob[b] = f), e
            } : function (a, b, c) {
                return c ? void 0 : a[m.camelCase("default-" + b)] ? b.toLowerCase() : null
            }
    }), rb && qb || (m.attrHooks.value = {
        set: function (a, b, c) {
            return m.nodeName(a, "input") ? void(a.defaultValue = b) : mb && mb.set(a, b, c)
        }
    }), qb || (mb = {
        set: function (a, b, c) {
            var d = a.getAttributeNode(c);
            return d || a.setAttributeNode(d = a.ownerDocument.createAttribute(c)), d.value = b += "", "value" === c || b === a.getAttribute(c) ? b : void 0
        }
    }, ob.id = ob.name = ob.coords = function (a, b, c) {
        var d;
        return c ? void 0 : (d = a.getAttributeNode(b)) && "" !== d.value ? d.value : null
    }, m.valHooks.button = {
        get: function (a, b) {
            var c = a.getAttributeNode(b);
            return c && c.specified ? c.value : void 0
        }, set: mb.set
    }, m.attrHooks.contenteditable = {
        set: function (a, b, c) {
            mb.set(a, "" === b ? !1 : b, c)
        }
    }, m.each(["width", "height"], function (a, b) {
        m.attrHooks[b] = {
            set: function (a, c) {
                return "" === c ? (a.setAttribute(b, "auto"), c) : void 0
            }
        }
    })), k.style || (m.attrHooks.style = {
        get: function (a) {
            return a.style.cssText || void 0
        }, set: function (a, b) {
            return a.style.cssText = b + ""
        }
    });
    var sb = /^(?:input|select|textarea|button|object)$/i, tb = /^(?:a|area)$/i;
    m.fn.extend({
        prop: function (a, b) {
            return V(this, m.prop, a, b, arguments.length > 1)
        }, removeProp: function (a) {
            return a = m.propFix[a] || a, this.each(function () {
                try {
                    this[a] = void 0, delete this[a]
                } catch (b) {
                }
            })
        }
    }), m.extend({
        propFix: {"for": "htmlFor", "class": "className"}, prop: function (a, b, c) {
            var d, e, f, g = a.nodeType;
            if (a && 3 !== g && 8 !== g && 2 !== g)return f = 1 !== g || !m.isXMLDoc(a), f && (b = m.propFix[b] || b, e = m.propHooks[b]), void 0 !== c ? e && "set" in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get" in e && null !== (d = e.get(a, b)) ? d : a[b]
        }, propHooks: {
            tabIndex: {
                get: function (a) {
                    var b = m.find.attr(a, "tabindex");
                    return b ? parseInt(b, 10) : sb.test(a.nodeName) || tb.test(a.nodeName) && a.href ? 0 : -1
                }
            }
        }
    }), k.hrefNormalized || m.each(["href", "src"], function (a, b) {
        m.propHooks[b] = {
            get: function (a) {
                return a.getAttribute(b, 4)
            }
        }
    }), k.optSelected || (m.propHooks.selected = {
        get: function (a) {
            var b = a.parentNode;
            return b && (b.selectedIndex, b.parentNode && b.parentNode.selectedIndex), null
        }
    }), m.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        m.propFix[this.toLowerCase()] = this
    }), k.enctype || (m.propFix.enctype = "encoding");
    var ub = /[\t\r\n\f]/g;
    m.fn.extend({
        addClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = "string" == typeof a && a;
            if (m.isFunction(a))return this.each(function (b) {
                m(this).addClass(a.call(this, b, this.className))
            });
            if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : " ")) {
                f = 0;
                while (e = b[f++])d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                g = m.trim(d), c.className !== g && (c.className = g)
            }
            return this
        }, removeClass: function (a) {
            var b, c, d, e, f, g, h = 0, i = this.length, j = 0 === arguments.length || "string" == typeof a && a;
            if (m.isFunction(a))return this.each(function (b) {
                m(this).removeClass(a.call(this, b, this.className))
            });
            if (j)for (b = (a || "").match(E) || []; i > h; h++)if (c = this[h], d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ub, " ") : "")) {
                f = 0;
                while (e = b[f++])while (d.indexOf(" " + e + " ") >= 0)d = d.replace(" " + e + " ", " ");
                g = a ? m.trim(d) : "", c.className !== g && (c.className = g)
            }
            return this
        }, toggleClass: function (a, b) {
            var c = typeof a;
            return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(m.isFunction(a) ? function (c) {
                        m(this).toggleClass(a.call(this, c, this.className, b), b)
                    } : function () {
                        if ("string" === c) {
                            var b, d = 0, e = m(this), f = a.match(E) || [];
                            while (b = f[d++])e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                        } else(c === K || "boolean" === c) && (this.className && m._data(this, "__className__", this.className), this.className = this.className || a === !1 ? "" : m._data(this, "__className__") || "")
                    })
        }, hasClass: function (a) {
            for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ub, " ").indexOf(b) >= 0)return !0;
            return !1
        }
    }), m.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (a, b) {
        m.fn[b] = function (a, c) {
            return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
        }
    }), m.fn.extend({
        hover: function (a, b) {
            return this.mouseenter(a).mouseleave(b || a)
        }, bind: function (a, b, c) {
            return this.on(a, null, b, c)
        }, unbind: function (a, b) {
            return this.off(a, null, b)
        }, delegate: function (a, b, c, d) {
            return this.on(b, a, c, d)
        }, undelegate: function (a, b, c) {
            return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
        }
    });
    var vb = m.now(), wb = /\?/, xb = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    m.parseJSON = function (b) {
        if (a.JSON && a.JSON.parse)return a.JSON.parse(b + "");
        var c, d = null, e = m.trim(b + "");
        return e && !m.trim(e.replace(xb, function (a, b, e, f) {
            return c && b && (d = 0), 0 === d ? a : (c = e || b, d += !f - !e, "")
        })) ? Function("return " + e)() : m.error("Invalid JSON: " + b)
    }, m.parseXML = function (b) {
        var c, d;
        if (!b || "string" != typeof b)return null;
        try {
            a.DOMParser ? (d = new DOMParser, c = d.parseFromString(b, "text/xml")) : (c = new ActiveXObject("Microsoft.XMLDOM"), c.async = "false", c.loadXML(b))
        } catch (e) {
            c = void 0
        }
        return c && c.documentElement && !c.getElementsByTagName("parsererror").length || m.error("Invalid XML: " + b), c
    };
    var yb, zb, Ab = /#.*$/, Bb = /([?&])_=[^&]*/, Cb = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm, Db = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/, Eb = /^(?:GET|HEAD)$/, Fb = /^\/\//, Gb = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/, Hb = {}, Ib = {}, Jb = "*/".concat("*");
    try {
        zb = location.href
    } catch (Kb) {
        zb = y.createElement("a"), zb.href = "", zb = zb.href
    }
    yb = Gb.exec(zb.toLowerCase()) || [];
    function Lb(a) {
        return function (b, c) {
            "string" != typeof b && (c = b, b = "*");
            var d, e = 0, f = b.toLowerCase().match(E) || [];
            if (m.isFunction(c))while (d = f[e++])"+" === d.charAt(0) ? (d = d.slice(1) || "*", (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
        }
    }

    function Mb(a, b, c, d) {
        var e = {}, f = a === Ib;

        function g(h) {
            var i;
            return e[h] = !0, m.each(a[h] || [], function (a, h) {
                var j = h(b, c, d);
                return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j), g(j), !1)
            }), i
        }

        return g(b.dataTypes[0]) || !e["*"] && g("*")
    }

    function Nb(a, b) {
        var c, d, e = m.ajaxSettings.flatOptions || {};
        for (d in b)void 0 !== b[d] && ((e[d] ? a : c || (c = {}))[d] = b[d]);
        return c && m.extend(!0, a, c), a
    }

    function Ob(a, b, c) {
        var d, e, f, g, h = a.contents, i = a.dataTypes;
        while ("*" === i[0])i.shift(), void 0 === e && (e = a.mimeType || b.getResponseHeader("Content-Type"));
        if (e)for (g in h)if (h[g] && h[g].test(e)) {
            i.unshift(g);
            break
        }
        if (i[0] in c) f = i[0]; else {
            for (g in c) {
                if (!i[0] || a.converters[g + " " + i[0]]) {
                    f = g;
                    break
                }
                d || (d = g)
            }
            f = f || d
        }
        return f ? (f !== i[0] && i.unshift(f), c[f]) : void 0
    }

    function Pb(a, b, c, d) {
        var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
        if (k[1])for (g in a.converters)j[g.toLowerCase()] = a.converters[g];
        f = k.shift();
        while (f)if (a.responseFields[f] && (c[a.responseFields[f]] = b), !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)), i = f, f = k.shift())if ("*" === f) f = i; else if ("*" !== i && i !== f) {
            if (g = j[i + " " + f] || j["* " + f], !g)for (e in j)if (h = e.split(" "), h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0], k.unshift(h[1]));
                break
            }
            if (g !== !0)if (g && a["throws"]) b = g(b); else try {
                b = g(b)
            } catch (l) {
                return {state: "parsererror", error: g ? l : "No conversion from " + i + " to " + f}
            }
        }
        return {state: "success", data: b}
    }

    m.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: zb,
            type: "GET",
            isLocal: Db.test(yb[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Jb,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {xml: /xml/, html: /html/, json: /json/},
            responseFields: {xml: "responseXML", text: "responseText", json: "responseJSON"},
            converters: {"* text": String, "text html": !0, "text json": m.parseJSON, "text xml": m.parseXML},
            flatOptions: {url: !0, context: !0}
        },
        ajaxSetup: function (a, b) {
            return b ? Nb(Nb(a, m.ajaxSettings), b) : Nb(m.ajaxSettings, a)
        },
        ajaxPrefilter: Lb(Hb),
        ajaxTransport: Lb(Ib),
        ajax: function (a, b) {
            "object" == typeof a && (b = a, a = void 0), b = b || {};
            var c, d, e, f, g, h, i, j, k = m.ajaxSetup({}, b), l = k.context || k, n = k.context && (l.nodeType || l.jquery) ? m(l) : m.event, o = m.Deferred(), p = m.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                readyState: 0,
                getResponseHeader: function (a) {
                    var b;
                    if (2 === t) {
                        if (!j) {
                            j = {};
                            while (b = Cb.exec(f))j[b[1].toLowerCase()] = b[2]
                        }
                        b = j[a.toLowerCase()]
                    }
                    return null == b ? null : b
                },
                getAllResponseHeaders: function () {
                    return 2 === t ? f : null
                },
                setRequestHeader: function (a, b) {
                    var c = a.toLowerCase();
                    return t || (a = s[c] = s[c] || a, r[a] = b), this
                },
                overrideMimeType: function (a) {
                    return t || (k.mimeType = a), this
                },
                statusCode: function (a) {
                    var b;
                    if (a)if (2 > t)for (b in a)q[b] = [q[b], a[b]]; else v.always(a[v.status]);
                    return this
                },
                abort: function (a) {
                    var b = a || u;
                    return i && i.abort(b), x(0, b), this
                }
            };
            if (o.promise(v).complete = p.add, v.success = v.done, v.error = v.fail, k.url = ((a || k.url || zb) + "").replace(Ab, "").replace(Fb, yb[1] + "//"), k.type = b.method || b.type || k.method || k.type, k.dataTypes = m.trim(k.dataType || "*").toLowerCase().match(E) || [""], null == k.crossDomain && (c = Gb.exec(k.url.toLowerCase()), k.crossDomain = !(!c || c[1] === yb[1] && c[2] === yb[2] && (c[3] || ("http:" === c[1] ? "80" : "443")) === (yb[3] || ("http:" === yb[1] ? "80" : "443")))), k.data && k.processData && "string" != typeof k.data && (k.data = m.param(k.data, k.traditional)), Mb(Hb, k, b, v), 2 === t)return v;
            h = m.event && k.global, h && 0 === m.active++ && m.event.trigger("ajaxStart"), k.type = k.type.toUpperCase(), k.hasContent = !Eb.test(k.type), e = k.url, k.hasContent || (k.data && (e = k.url += (wb.test(e) ? "&" : "?") + k.data, delete k.data), k.cache === !1 && (k.url = Bb.test(e) ? e.replace(Bb, "$1_=" + vb++) : e + (wb.test(e) ? "&" : "?") + "_=" + vb++)), k.ifModified && (m.lastModified[e] && v.setRequestHeader("If-Modified-Since", m.lastModified[e]), m.etag[e] && v.setRequestHeader("If-None-Match", m.etag[e])), (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType), v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + Jb + "; q=0.01" : "") : k.accepts["*"]);
            for (d in k.headers)v.setRequestHeader(d, k.headers[d]);
            if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))return v.abort();
            u = "abort";
            for (d in{success: 1, error: 1, complete: 1})v[d](k[d]);
            if (i = Mb(Ib, k, b, v)) {
                v.readyState = 1, h && n.trigger("ajaxSend", [v, k]), k.async && k.timeout > 0 && (g = setTimeout(function () {
                    v.abort("timeout")
                }, k.timeout));
                try {
                    t = 1, i.send(r, x)
                } catch (w) {
                    if (!(2 > t))throw w;
                    x(-1, w)
                }
            } else x(-1, "No Transport");
            function x(a, b, c, d) {
                var j, r, s, u, w, x = b;
                2 !== t && (t = 2, g && clearTimeout(g), i = void 0, f = d || "", v.readyState = a > 0 ? 4 : 0, j = a >= 200 && 300 > a || 304 === a, c && (u = Ob(k, v, c)), u = Pb(k, u, v, j), j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"), w && (m.lastModified[e] = w), w = v.getResponseHeader("etag"), w && (m.etag[e] = w)), 204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state, r = u.data, s = u.error, j = !s)) : (s = x, (a || !x) && (x = "error", 0 > a && (a = 0))), v.status = a, v.statusText = (b || x) + "", j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]), v.statusCode(q), q = void 0, h && n.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]), p.fireWith(l, [v, x]), h && (n.trigger("ajaxComplete", [v, k]), --m.active || m.event.trigger("ajaxStop")))
            }

            return v
        },
        getJSON: function (a, b, c) {
            return m.get(a, b, c, "json")
        },
        getScript: function (a, b) {
            return m.get(a, void 0, b, "script")
        }
    }), m.each(["get", "post"], function (a, b) {
        m[b] = function (a, c, d, e) {
            return m.isFunction(c) && (e = e || d, d = c, c = void 0), m.ajax({
                url: a,
                type: b,
                dataType: e,
                data: c,
                success: d
            })
        }
    }), m._evalUrl = function (a) {
        return m.ajax({url: a, type: "GET", dataType: "script", async: !1, global: !1, "throws": !0})
    }, m.fn.extend({
        wrapAll: function (a) {
            if (m.isFunction(a))return this.each(function (b) {
                m(this).wrapAll(a.call(this, b))
            });
            if (this[0]) {
                var b = m(a, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && b.insertBefore(this[0]), b.map(function () {
                    var a = this;
                    while (a.firstChild && 1 === a.firstChild.nodeType)a = a.firstChild;
                    return a
                }).append(this)
            }
            return this
        }, wrapInner: function (a) {
            return this.each(m.isFunction(a) ? function (b) {
                    m(this).wrapInner(a.call(this, b))
                } : function () {
                    var b = m(this), c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                })
        }, wrap: function (a) {
            var b = m.isFunction(a);
            return this.each(function (c) {
                m(this).wrapAll(b ? a.call(this, c) : a)
            })
        }, unwrap: function () {
            return this.parent().each(function () {
                m.nodeName(this, "body") || m(this).replaceWith(this.childNodes)
            }).end()
        }
    }), m.expr.filters.hidden = function (a) {
        return a.offsetWidth <= 0 && a.offsetHeight <= 0 || !k.reliableHiddenOffsets() && "none" === (a.style && a.style.display || m.css(a, "display"))
    }, m.expr.filters.visible = function (a) {
        return !m.expr.filters.hidden(a)
    };
    var Qb = /%20/g, Rb = /\[\]$/, Sb = /\r?\n/g, Tb = /^(?:submit|button|image|reset|file)$/i, Ub = /^(?:input|select|textarea|keygen)/i;

    function Vb(a, b, c, d) {
        var e;
        if (m.isArray(b)) m.each(b, function (b, e) {
            c || Rb.test(a) ? d(a, e) : Vb(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
        }); else if (c || "object" !== m.type(b)) d(a, b); else for (e in b)Vb(a + "[" + e + "]", b[e], c, d)
    }

    m.param = function (a, b) {
        var c, d = [], e = function (a, b) {
            b = m.isFunction(b) ? b() : null == b ? "" : b, d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
        };
        if (void 0 === b && (b = m.ajaxSettings && m.ajaxSettings.traditional), m.isArray(a) || a.jquery && !m.isPlainObject(a)) m.each(a, function () {
            e(this.name, this.value)
        }); else for (c in a)Vb(c, a[c], b, e);
        return d.join("&").replace(Qb, "+")
    }, m.fn.extend({
        serialize: function () {
            return m.param(this.serializeArray())
        }, serializeArray: function () {
            return this.map(function () {
                var a = m.prop(this, "elements");
                return a ? m.makeArray(a) : this
            }).filter(function () {
                var a = this.type;
                return this.name && !m(this).is(":disabled") && Ub.test(this.nodeName) && !Tb.test(a) && (this.checked || !W.test(a))
            }).map(function (a, b) {
                var c = m(this).val();
                return null == c ? null : m.isArray(c) ? m.map(c, function (a) {
                            return {name: b.name, value: a.replace(Sb, "\r\n")}
                        }) : {name: b.name, value: c.replace(Sb, "\r\n")}
            }).get()
        }
    }), m.ajaxSettings.xhr = void 0 !== a.ActiveXObject ? function () {
            return !this.isLocal && /^(get|post|head|put|delete|options)$/i.test(this.type) && Zb() || $b()
        } : Zb;
    var Wb = 0, Xb = {}, Yb = m.ajaxSettings.xhr();
    a.attachEvent && a.attachEvent("onunload", function () {
        for (var a in Xb)Xb[a](void 0, !0)
    }), k.cors = !!Yb && "withCredentials" in Yb, Yb = k.ajax = !!Yb, Yb && m.ajaxTransport(function (a) {
        if (!a.crossDomain || k.cors) {
            var b;
            return {
                send: function (c, d) {
                    var e, f = a.xhr(), g = ++Wb;
                    if (f.open(a.type, a.url, a.async, a.username, a.password), a.xhrFields)for (e in a.xhrFields)f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType), a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)void 0 !== c[e] && f.setRequestHeader(e, c[e] + "");
                    f.send(a.hasContent && a.data || null), b = function (c, e) {
                        var h, i, j;
                        if (b && (e || 4 === f.readyState))if (delete Xb[g], b = void 0, f.onreadystatechange = m.noop, e) 4 !== f.readyState && f.abort(); else {
                            j = {}, h = f.status, "string" == typeof f.responseText && (j.text = f.responseText);
                            try {
                                i = f.statusText
                            } catch (k) {
                                i = ""
                            }
                            h || !a.isLocal || a.crossDomain ? 1223 === h && (h = 204) : h = j.text ? 200 : 404
                        }
                        j && d(h, i, j, f.getAllResponseHeaders())
                    }, a.async ? 4 === f.readyState ? setTimeout(b) : f.onreadystatechange = Xb[g] = b : b()
                }, abort: function () {
                    b && b(void 0, !0)
                }
            }
        }
    });
    function Zb() {
        try {
            return new a.XMLHttpRequest
        } catch (b) {
        }
    }

    function $b() {
        try {
            return new a.ActiveXObject("Microsoft.XMLHTTP")
        } catch (b) {
        }
    }

    m.ajaxSetup({
        accepts: {script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},
        contents: {script: /(?:java|ecma)script/},
        converters: {
            "text script": function (a) {
                return m.globalEval(a), a
            }
        }
    }), m.ajaxPrefilter("script", function (a) {
        void 0 === a.cache && (a.cache = !1), a.crossDomain && (a.type = "GET", a.global = !1)
    }), m.ajaxTransport("script", function (a) {
        if (a.crossDomain) {
            var b, c = y.head || m("head")[0] || y.documentElement;
            return {
                send: function (d, e) {
                    b = y.createElement("script"), b.async = !0, a.scriptCharset && (b.charset = a.scriptCharset), b.src = a.url, b.onload = b.onreadystatechange = function (a, c) {
                        (c || !b.readyState || /loaded|complete/.test(b.readyState)) && (b.onload = b.onreadystatechange = null, b.parentNode && b.parentNode.removeChild(b), b = null, c || e(200, "success"))
                    }, c.insertBefore(b, c.firstChild)
                }, abort: function () {
                    b && b.onload(void 0, !0)
                }
            }
        }
    });
    var _b = [], ac = /(=)\?(?=&|$)|\?\?/;
    m.ajaxSetup({
        jsonp: "callback", jsonpCallback: function () {
            var a = _b.pop() || m.expando + "_" + vb++;
            return this[a] = !0, a
        }
    }), m.ajaxPrefilter("json jsonp", function (b, c, d) {
        var e, f, g, h = b.jsonp !== !1 && (ac.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && ac.test(b.data) && "data");
        return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = m.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback, h ? b[h] = b[h].replace(ac, "$1" + e) : b.jsonp !== !1 && (b.url += (wb.test(b.url) ? "&" : "?") + b.jsonp + "=" + e), b.converters["script json"] = function () {
                return g || m.error(e + " was not called"), g[0]
            }, b.dataTypes[0] = "json", f = a[e], a[e] = function () {
                g = arguments
            }, d.always(function () {
                a[e] = f, b[e] && (b.jsonpCallback = c.jsonpCallback, _b.push(e)), g && m.isFunction(f) && f(g[0]), g = f = void 0
            }), "script") : void 0
    }), m.parseHTML = function (a, b, c) {
        if (!a || "string" != typeof a)return null;
        "boolean" == typeof b && (c = b, b = !1), b = b || y;
        var d = u.exec(a), e = !c && [];
        return d ? [b.createElement(d[1])] : (d = m.buildFragment([a], b, e), e && e.length && m(e).remove(), m.merge([], d.childNodes))
    };
    var bc = m.fn.load;
    m.fn.load = function (a, b, c) {
        if ("string" != typeof a && bc)return bc.apply(this, arguments);
        var d, e, f, g = this, h = a.indexOf(" ");
        return h >= 0 && (d = m.trim(a.slice(h, a.length)), a = a.slice(0, h)), m.isFunction(b) ? (c = b, b = void 0) : b && "object" == typeof b && (f = "POST"), g.length > 0 && m.ajax({
            url: a,
            type: f,
            dataType: "html",
            data: b
        }).done(function (a) {
            e = arguments, g.html(d ? m("<div>").append(m.parseHTML(a)).find(d) : a)
        }).complete(c && function (a, b) {
                g.each(c, e || [a.responseText, b, a])
            }), this
    }, m.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (a, b) {
        m.fn[b] = function (a) {
            return this.on(b, a)
        }
    }), m.expr.filters.animated = function (a) {
        return m.grep(m.timers, function (b) {
            return a === b.elem
        }).length
    };
    var cc = a.document.documentElement;

    function dc(a) {
        return m.isWindow(a) ? a : 9 === a.nodeType ? a.defaultView || a.parentWindow : !1
    }

    m.offset = {
        setOffset: function (a, b, c) {
            var d, e, f, g, h, i, j, k = m.css(a, "position"), l = m(a), n = {};
            "static" === k && (a.style.position = "relative"), h = l.offset(), f = m.css(a, "top"), i = m.css(a, "left"), j = ("absolute" === k || "fixed" === k) && m.inArray("auto", [f, i]) > -1, j ? (d = l.position(), g = d.top, e = d.left) : (g = parseFloat(f) || 0, e = parseFloat(i) || 0), m.isFunction(b) && (b = b.call(a, c, h)), null != b.top && (n.top = b.top - h.top + g), null != b.left && (n.left = b.left - h.left + e), "using" in b ? b.using.call(a, n) : l.css(n)
        }
    }, m.fn.extend({
        offset: function (a) {
            if (arguments.length)return void 0 === a ? this : this.each(function (b) {
                    m.offset.setOffset(this, a, b)
                });
            var b, c, d = {top: 0, left: 0}, e = this[0], f = e && e.ownerDocument;
            if (f)return b = f.documentElement, m.contains(b, e) ? (typeof e.getBoundingClientRect !== K && (d = e.getBoundingClientRect()), c = dc(f), {
                    top: d.top + (c.pageYOffset || b.scrollTop) - (b.clientTop || 0),
                    left: d.left + (c.pageXOffset || b.scrollLeft) - (b.clientLeft || 0)
                }) : d
        }, position: function () {
            if (this[0]) {
                var a, b, c = {top: 0, left: 0}, d = this[0];
                return "fixed" === m.css(d, "position") ? b = d.getBoundingClientRect() : (a = this.offsetParent(), b = this.offset(), m.nodeName(a[0], "html") || (c = a.offset()), c.top += m.css(a[0], "borderTopWidth", !0), c.left += m.css(a[0], "borderLeftWidth", !0)), {
                    top: b.top - c.top - m.css(d, "marginTop", !0),
                    left: b.left - c.left - m.css(d, "marginLeft", !0)
                }
            }
        }, offsetParent: function () {
            return this.map(function () {
                var a = this.offsetParent || cc;
                while (a && !m.nodeName(a, "html") && "static" === m.css(a, "position"))a = a.offsetParent;
                return a || cc
            })
        }
    }), m.each({scrollLeft: "pageXOffset", scrollTop: "pageYOffset"}, function (a, b) {
        var c   = /Y/.test(b);
        m.fn[a] = function (d) {
            return V(this, function (a, d, e) {
                var f = dc(a);
                return void 0 === e ? f ? b in f ? f[b] : f.document.documentElement[d] : a[d] : void(f ? f.scrollTo(c ? m(f).scrollLeft() : e, c ? e : m(f).scrollTop()) : a[d] = e)
            }, a, d, arguments.length, null)
        }
    }), m.each(["top", "left"], function (a, b) {
        m.cssHooks[b] = La(k.pixelPosition, function (a, c) {
            return c ? (c = Ja(a, b), Ha.test(c) ? m(a).position()[b] + "px" : c) : void 0
        })
    }), m.each({Height: "height", Width: "width"}, function (a, b) {
        m.each({padding: "inner" + a, content: b, "": "outer" + a}, function (c, d) {
            m.fn[d] = function (d, e) {
                var f = arguments.length && (c || "boolean" != typeof d), g = c || (d === !0 || e === !0 ? "margin" : "border");
                return V(this, function (b, c, d) {
                    var e;
                    return m.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement, Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? m.css(b, c, g) : m.style(b, c, d, g)
                }, b, f ? d : void 0, f, null)
            }
        })
    }), m.fn.size = function () {
        return this.length
    }, m.fn.andSelf = m.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return m
    });
    var ec = a.jQuery, fc = a.$;
    return m.noConflict = function (b) {
        return a.$ === m && (a.$ = fc), b && a.jQuery === m && (a.jQuery = ec), m
    }, typeof b === K && (a.jQuery = a.$ = m), m
});
/*!
 * Bootstrap v3.3.6 (http://getbootstrap.com)
 * Copyright 2011-2015 Twitter, Inc.
 * Licensed under the MIT license
 */
if ("undefined" == typeof jQuery)throw new Error("Bootstrap's JavaScript requires jQuery");
+function (a) {
    "use strict";
    var b = a.fn.jquery.split(" ")[0].split(".");
    if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 2)throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 3")
}(jQuery), +function (a) {
    "use strict";
    function b() {
        var a = document.createElement("bootstrap"), b = {
            WebkitTransition: "webkitTransitionEnd",
            MozTransition: "transitionend",
            OTransition: "oTransitionEnd otransitionend",
            transition: "transitionend"
        };
        for (var c in b)if (void 0 !== a.style[c])return {end: b[c]};
        return !1
    }

    a.fn.emulateTransitionEnd = function (b) {
        var c = !1, d = this;
        a(this).one("bsTransitionEnd", function () {
            c = !0
        });
        var e = function () {
            c || a(d).trigger(a.support.transition.end)
        };
        return setTimeout(e, b), this
    }, a(function () {
        a.support.transition = b(), a.support.transition && (a.event.special.bsTransitionEnd = {
            bindType: a.support.transition.end,
            delegateType: a.support.transition.end,
            handle: function (b) {
                return a(b.target).is(this) ? b.handleObj.handler.apply(this, arguments) : void 0
            }
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.alert");
            e || c.data("bs.alert", e = new d(this)), "string" == typeof b && e[b].call(c)
        })
    }

    var c = '[data-dismiss="alert"]', d = function (b) {
        a(b).on("click", c, this.close)
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 150, d.prototype.close = function (b) {
        function c() {
            g.detach().trigger("closed.bs.alert").remove()
        }

        var e = a(this), f = e.attr("data-target");
        f || (f = e.attr("href"), f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
        var g = a(f);
        b && b.preventDefault(), g.length || (g = e.closest(".alert")), g.trigger(b = a.Event("close.bs.alert")), b.isDefaultPrevented() || (g.removeClass("in"), a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
    };
    var e = a.fn.alert;
    a.fn.alert = b, a.fn.alert.Constructor = d, a.fn.alert.noConflict = function () {
        return a.fn.alert = e, this
    }, a(document).on("click.bs.alert.data-api", c, d.prototype.close)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.button"), f = "object" == typeof b && b;
            e || d.data("bs.button", e = new c(this, f)), "toggle" == b ? e.toggle() : b && e.setState(b)
        })
    }

    var c = function (b, d) {
        this.$element = a(b), this.options = a.extend({}, c.DEFAULTS, d), this.isLoading = !1
    };
    c.VERSION = "3.3.6", c.DEFAULTS = {loadingText: "loading..."}, c.prototype.setState = function (b) {
        var c = "disabled", d = this.$element, e = d.is("input") ? "val" : "html", f = d.data();
        b += "Text", null == f.resetText && d.data("resetText", d[e]()), setTimeout(a.proxy(function () {
            d[e](null == f[b] ? this.options[b] : f[b]), "loadingText" == b ? (this.isLoading = !0, d.addClass(c).attr(c, c)) : this.isLoading && (this.isLoading = !1, d.removeClass(c).removeAttr(c))
        }, this), 0)
    }, c.prototype.toggle = function () {
        var a = !0, b = this.$element.closest('[data-toggle="buttons"]');
        if (b.length) {
            var c = this.$element.find("input");
            "radio" == c.prop("type") ? (c.prop("checked") && (a = !1), b.find(".active").removeClass("active"), this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1), this.$element.toggleClass("active")), c.prop("checked", this.$element.hasClass("active")), a && c.trigger("change")
        } else this.$element.attr("aria-pressed", !this.$element.hasClass("active")), this.$element.toggleClass("active")
    };
    var d = a.fn.button;
    a.fn.button = b, a.fn.button.Constructor = c, a.fn.button.noConflict = function () {
        return a.fn.button = d, this
    }, a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function (c) {
        var d = a(c.target);
        d.hasClass("btn") || (d = d.closest(".btn")), b.call(d, "toggle"), a(c.target).is('input[type="radio"]') || a(c.target).is('input[type="checkbox"]') || c.preventDefault()
    }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function (b) {
        a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.carousel"), f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b), g = "string" == typeof b ? b : f.slide;
            e || d.data("bs.carousel", e = new c(this, f)), "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
        })
    }

    var c = function (b, c) {
        this.$element = a(b), this.$indicators = this.$element.find(".carousel-indicators"), this.options = c, this.paused = null, this.sliding = null, this.interval = null, this.$active = null, this.$items = null, this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)), "hover" == this.options.pause && !("ontouchstart" in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 600, c.DEFAULTS = {
        interval: 5e3,
        pause: "hover",
        wrap: !0,
        keyboard: !0
    }, c.prototype.keydown = function (a) {
        if (!/input|textarea/i.test(a.target.tagName)) {
            switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
            }
            a.preventDefault()
        }
    }, c.prototype.cycle = function (b) {
        return b || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)), this
    }, c.prototype.getItemIndex = function (a) {
        return this.$items = a.parent().children(".item"), this.$items.index(a || this.$active)
    }, c.prototype.getItemForDirection = function (a, b) {
        var c = this.getItemIndex(b), d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
        if (d && !this.options.wrap)return b;
        var e = "prev" == a ? -1 : 1, f = (c + e) % this.$items.length;
        return this.$items.eq(f)
    }, c.prototype.to = function (a) {
        var b = this, c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
        return a > this.$items.length - 1 || 0 > a ? void 0 : this.sliding ? this.$element.one("slid.bs.carousel", function () {
                    b.to(a)
                }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
    }, c.prototype.pause = function (b) {
        return b || (this.paused = !0), this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
    }, c.prototype.next = function () {
        return this.sliding ? void 0 : this.slide("next")
    }, c.prototype.prev = function () {
        return this.sliding ? void 0 : this.slide("prev")
    }, c.prototype.slide = function (b, d) {
        var e = this.$element.find(".item.active"), f = d || this.getItemForDirection(b, e), g = this.interval, h = "next" == b ? "left" : "right", i = this;
        if (f.hasClass("active"))return this.sliding = !1;
        var j = f[0], k = a.Event("slide.bs.carousel", {relatedTarget: j, direction: h});
        if (this.$element.trigger(k), !k.isDefaultPrevented()) {
            if (this.sliding = !0, g && this.pause(), this.$indicators.length) {
                this.$indicators.find(".active").removeClass("active");
                var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                l && l.addClass("active")
            }
            var m = a.Event("slid.bs.carousel", {relatedTarget: j, direction: h});
            return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b), f[0].offsetWidth, e.addClass(h), f.addClass(h), e.one("bsTransitionEnd", function () {
                    f.removeClass([b, h].join(" ")).addClass("active"), e.removeClass(["active", h].join(" ")), i.sliding = !1, setTimeout(function () {
                        i.$element.trigger(m)
                    }, 0)
                }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"), f.addClass("active"), this.sliding = !1, this.$element.trigger(m)), g && this.cycle(), this
        }
    };
    var d = a.fn.carousel;
    a.fn.carousel = b, a.fn.carousel.Constructor = c, a.fn.carousel.noConflict = function () {
        return a.fn.carousel = d, this
    };
    var e = function (c) {
        var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
        if (f.hasClass("carousel")) {
            var g = a.extend({}, f.data(), e.data()), h = e.attr("data-slide-to");
            h && (g.interval = !1), b.call(f, g), h && f.data("bs.carousel").to(h), c.preventDefault()
        }
    };
    a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e), a(window).on("load", function () {
        a('[data-ride="carousel"]').each(function () {
            var c = a(this);
            b.call(c, c.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
        return a(d)
    }

    function c(b) {
        return this.each(function () {
            var c = a(this), e = c.data("bs.collapse"), f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
            !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1), e || c.data("bs.collapse", e = new d(this, f)), "string" == typeof b && e[b]()
        })
    }

    var d = function (b, c) {
        this.$element = a(b), this.options = a.extend({}, d.DEFAULTS, c), this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'), this.transitioning = null, this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger), this.options.toggle && this.toggle()
    };
    d.VERSION = "3.3.6", d.TRANSITION_DURATION = 350, d.DEFAULTS = {toggle: !0}, d.prototype.dimension = function () {
        var a = this.$element.hasClass("width");
        return a ? "width" : "height"
    }, d.prototype.show = function () {
        if (!this.transitioning && !this.$element.hasClass("in")) {
            var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
            if (!(e && e.length && (b = e.data("bs.collapse"), b && b.transitioning))) {
                var f = a.Event("show.bs.collapse");
                if (this.$element.trigger(f), !f.isDefaultPrevented()) {
                    e && e.length && (c.call(e, "hide"), b || e.data("bs.collapse", null));
                    var g = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0), this.$trigger.removeClass("collapsed").attr("aria-expanded", !0), this.transitioning = 1;
                    var h = function () {
                        this.$element.removeClass("collapsing").addClass("collapse in")[g](""), this.transitioning = 0, this.$element.trigger("shown.bs.collapse")
                    };
                    if (!a.support.transition)return h.call(this);
                    var i = a.camelCase(["scroll", g].join("-"));
                    this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                }
            }
        }
    }, d.prototype.hide = function () {
        if (!this.transitioning && this.$element.hasClass("in")) {
            var b = a.Event("hide.bs.collapse");
            if (this.$element.trigger(b), !b.isDefaultPrevented()) {
                var c = this.dimension();
                this.$element[c](this.$element[c]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1), this.$trigger.addClass("collapsed").attr("aria-expanded", !1), this.transitioning = 1;
                var e = function () {
                    this.transitioning = 0, this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                };
                return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
            }
        }
    }, d.prototype.toggle = function () {
        this[this.$element.hasClass("in") ? "hide" : "show"]()
    }, d.prototype.getParent = function () {
        return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function (c, d) {
            var e = a(d);
            this.addAriaAndCollapsedClass(b(e), e)
        }, this)).end()
    }, d.prototype.addAriaAndCollapsedClass = function (a, b) {
        var c = a.hasClass("in");
        a.attr("aria-expanded", c), b.toggleClass("collapsed", !c).attr("aria-expanded", c)
    };
    var e = a.fn.collapse;
    a.fn.collapse = c, a.fn.collapse.Constructor = d, a.fn.collapse.noConflict = function () {
        return a.fn.collapse = e, this
    }, a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (d) {
        var e = a(this);
        e.attr("data-target") || d.preventDefault();
        var f = b(e), g = f.data("bs.collapse"), h = g ? "toggle" : e.data();
        c.call(f, h)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        var c = b.attr("data-target");
        c || (c = b.attr("href"), c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
        var d = c && a(c);
        return d && d.length ? d : b.parent()
    }

    function c(c) {
        c && 3 === c.which || (a(e).remove(), a(f).each(function () {
            var d = a(this), e = b(d), f = {relatedTarget: this};
            e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)), c.isDefaultPrevented() || (d.attr("aria-expanded", "false"), e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
        }))
    }

    function d(b) {
        return this.each(function () {
            var c = a(this), d = c.data("bs.dropdown");
            d || c.data("bs.dropdown", d = new g(this)), "string" == typeof b && d[b].call(c)
        })
    }

    var e = ".dropdown-backdrop", f = '[data-toggle="dropdown"]', g = function (b) {
        a(b).on("click.bs.dropdown", this.toggle)
    };
    g.VERSION = "3.3.6", g.prototype.toggle = function (d) {
        var e = a(this);
        if (!e.is(".disabled, :disabled")) {
            var f = b(e), g = f.hasClass("open");
            if (c(), !g) {
                "ontouchstart" in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                var h = {relatedTarget: this};
                if (f.trigger(d = a.Event("show.bs.dropdown", h)), d.isDefaultPrevented())return;
                e.trigger("focus").attr("aria-expanded", "true"), f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
            }
            return !1
        }
    }, g.prototype.keydown = function (c) {
        if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
            var d = a(this);
            if (c.preventDefault(), c.stopPropagation(), !d.is(".disabled, :disabled")) {
                var e = b(d), g = e.hasClass("open");
                if (!g && 27 != c.which || g && 27 == c.which)return 27 == c.which && e.find(f).trigger("focus"), d.trigger("click");
                var h = " li:not(.disabled):visible a", i = e.find(".dropdown-menu" + h);
                if (i.length) {
                    var j = i.index(c.target);
                    38 == c.which && j > 0 && j--, 40 == c.which && j < i.length - 1 && j++, ~j || (j = 0), i.eq(j).trigger("focus")
                }
            }
        }
    };
    var h = a.fn.dropdown;
    a.fn.dropdown = d, a.fn.dropdown.Constructor = g, a.fn.dropdown.noConflict = function () {
        return a.fn.dropdown = h, this
    }, a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function (a) {
        a.stopPropagation()
    }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
}(jQuery), +function (a) {
    "use strict";
    function b(b, d) {
        return this.each(function () {
            var e = a(this), f = e.data("bs.modal"), g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
            f || e.data("bs.modal", f = new c(this, g)), "string" == typeof b ? f[b](d) : g.show && f.show(d)
        })
    }

    var c = function (b, c) {
        this.options = c, this.$body = a(document.body), this.$element = a(b), this.$dialog = this.$element.find(".modal-dialog"), this.$backdrop = null, this.isShown = null, this.originalBodyPad = null, this.scrollbarWidth = 0, this.ignoreBackdropClick = !1, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function () {
            this.$element.trigger("loaded.bs.modal")
        }, this))
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 300, c.BACKDROP_TRANSITION_DURATION = 150, c.DEFAULTS = {
        backdrop: !0,
        keyboard: !0,
        show: !0
    }, c.prototype.toggle = function (a) {
        return this.isShown ? this.hide() : this.show(a)
    }, c.prototype.show = function (b) {
        var d = this, e = a.Event("show.bs.modal", {relatedTarget: b});
        this.$element.trigger(e), this.isShown || e.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.setScrollbar(), this.$body.addClass("modal-open"), this.escape(), this.resize(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)), this.$dialog.on("mousedown.dismiss.bs.modal", function () {
            d.$element.one("mouseup.dismiss.bs.modal", function (b) {
                a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
            })
        }), this.backdrop(function () {
            var e = a.support.transition && d.$element.hasClass("fade");
            d.$element.parent().length || d.$element.appendTo(d.$body), d.$element.show().scrollTop(0), d.adjustDialog(), e && d.$element[0].offsetWidth, d.$element.addClass("in"), d.enforceFocus();
            var f = a.Event("shown.bs.modal", {relatedTarget: b});
            e ? d.$dialog.one("bsTransitionEnd", function () {
                    d.$element.trigger("focus").trigger(f)
                }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
        }))
    }, c.prototype.hide = function (b) {
        b && b.preventDefault(), b = a.Event("hide.bs.modal"), this.$element.trigger(b), this.isShown && !b.isDefaultPrevented() && (this.isShown = !1, this.escape(), this.resize(), a(document).off("focusin.bs.modal"), this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"), this.$dialog.off("mousedown.dismiss.bs.modal"), a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
    }, c.prototype.enforceFocus = function () {
        a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function (a) {
            this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
        }, this))
    }, c.prototype.escape = function () {
        this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function (a) {
                27 == a.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
    }, c.prototype.resize = function () {
        this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
    }, c.prototype.hideModal = function () {
        var a = this;
        this.$element.hide(), this.backdrop(function () {
            a.$body.removeClass("modal-open"), a.resetAdjustments(), a.resetScrollbar(), a.$element.trigger("hidden.bs.modal")
        })
    }, c.prototype.removeBackdrop = function () {
        this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
    }, c.prototype.backdrop = function (b) {
        var d = this, e = this.$element.hasClass("fade") ? "fade" : "";
        if (this.isShown && this.options.backdrop) {
            var f = a.support.transition && e;
            if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", a.proxy(function (a) {
                    return this.ignoreBackdropClick ? void(this.ignoreBackdropClick = !1) : void(a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)), f && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !b)return;
            f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
        } else if (!this.isShown && this.$backdrop) {
            this.$backdrop.removeClass("in");
            var g = function () {
                d.removeBackdrop(), b && b()
            };
            a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
        } else b && b()
    }, c.prototype.handleUpdate = function () {
        this.adjustDialog()
    }, c.prototype.adjustDialog = function () {
        var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
        this.$element.css({
            paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
            paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
        })
    }, c.prototype.resetAdjustments = function () {
        this.$element.css({paddingLeft: "", paddingRight: ""})
    }, c.prototype.checkScrollbar = function () {
        var a = window.innerWidth;
        if (!a) {
            var b = document.documentElement.getBoundingClientRect();
            a     = b.right - Math.abs(b.left)
        }
        this.bodyIsOverflowing = document.body.clientWidth < a, this.scrollbarWidth = this.measureScrollbar()
    }, c.prototype.setScrollbar = function () {
        var a = parseInt(this.$body.css("padding-right") || 0, 10);
        this.originalBodyPad = document.body.style.paddingRight || "", this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
    }, c.prototype.resetScrollbar = function () {
        this.$body.css("padding-right", this.originalBodyPad)
    }, c.prototype.measureScrollbar = function () {
        var a = document.createElement("div");
        a.className = "modal-scrollbar-measure", this.$body.append(a);
        var b = a.offsetWidth - a.clientWidth;
        return this.$body[0].removeChild(a), b
    };
    var d = a.fn.modal;
    a.fn.modal = b, a.fn.modal.Constructor = c, a.fn.modal.noConflict = function () {
        return a.fn.modal = d, this
    }, a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (c) {
        var d = a(this), e = d.attr("href"), f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, "")), g = f.data("bs.modal") ? "toggle" : a.extend({remote: !/#/.test(e) && e}, f.data(), d.data());
        d.is("a") && c.preventDefault(), f.one("show.bs.modal", function (a) {
            a.isDefaultPrevented() || f.one("hidden.bs.modal", function () {
                d.is(":visible") && d.trigger("focus")
            })
        }), b.call(f, g, this)
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tooltip"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.tooltip", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.type = null, this.options = null, this.enabled = null, this.timeout = null, this.hoverState = null, this.$element = null, this.inState = null, this.init("tooltip", a, b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.DEFAULTS = {
        animation: !0,
        placement: "top",
        selector: !1,
        template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
        trigger: "hover focus",
        title: "",
        delay: 0,
        html: !1,
        container: !1,
        viewport: {selector: "body", padding: 0}
    }, c.prototype.init = function (b, c, d) {
        if (this.enabled = !0, this.type = b, this.$element = a(c), this.options = this.getOptions(d), this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport), this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            }, this.$element[0] instanceof document.constructor && !this.options.selector)throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
        for (var e = this.options.trigger.split(" "), f = e.length; f--;) {
            var g = e[f];
            if ("click" == g) this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this)); else if ("manual" != g) {
                var h = "hover" == g ? "mouseenter" : "focusin", i = "hover" == g ? "mouseleave" : "focusout";
                this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)), this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
            }
        }
        this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
    }, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.getOptions = function (b) {
        return b = a.extend({}, this.getDefaults(), this.$element.data(), b), b.delay && "number" == typeof b.delay && (b.delay = {
            show: b.delay,
            hide: b.delay
        }), b
    }, c.prototype.getDelegateOptions = function () {
        var b = {}, c = this.getDefaults();
        return this._options && a.each(this._options, function (a, d) {
            c[a] != d && (b[a] = d)
        }), b
    }, c.prototype.enter = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0), c.tip().hasClass("in") || "in" == c.hoverState ? void(c.hoverState = "in") : (clearTimeout(c.timeout), c.hoverState = "in", c.options.delay && c.options.delay.show ? void(c.timeout = setTimeout(function () {
                    "in" == c.hoverState && c.show()
                }, c.options.delay.show)) : c.show())
    }, c.prototype.isInStateTrue = function () {
        for (var a in this.inState)if (this.inState[a])return !0;
        return !1
    }, c.prototype.leave = function (b) {
        var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
        return c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c)), b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1), c.isInStateTrue() ? void 0 : (clearTimeout(c.timeout), c.hoverState = "out", c.options.delay && c.options.delay.hide ? void(c.timeout = setTimeout(function () {
                    "out" == c.hoverState && c.hide()
                }, c.options.delay.hide)) : c.hide())
    }, c.prototype.show = function () {
        var b = a.Event("show.bs." + this.type);
        if (this.hasContent() && this.enabled) {
            this.$element.trigger(b);
            var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
            if (b.isDefaultPrevented() || !d)return;
            var e = this, f = this.tip(), g = this.getUID(this.type);
            this.setContent(), f.attr("id", g), this.$element.attr("aria-describedby", g), this.options.animation && f.addClass("fade");
            var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement, i = /\s?auto?\s?/i, j = i.test(h);
            j && (h = h.replace(i, "") || "top"), f.detach().css({
                top: 0,
                left: 0,
                display: "block"
            }).addClass(h).data("bs." + this.type, this), this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element), this.$element.trigger("inserted.bs." + this.type);
            var k = this.getPosition(), l = f[0].offsetWidth, m = f[0].offsetHeight;
            if (j) {
                var n = h, o = this.getPosition(this.$viewport);
                h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h, f.removeClass(n).addClass(h)
            }
            var p = this.getCalculatedOffset(h, k, l, m);
            this.applyPlacement(p, h);
            var q = function () {
                var a = e.hoverState;
                e.$element.trigger("shown.bs." + e.type), e.hoverState = null, "out" == a && e.leave(e)
            };
            a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
        }
    }, c.prototype.applyPlacement = function (b, c) {
        var d = this.tip(), e = d[0].offsetWidth, f = d[0].offsetHeight, g = parseInt(d.css("margin-top"), 10), h = parseInt(d.css("margin-left"), 10);
        isNaN(g) && (g = 0), isNaN(h) && (h = 0), b.top += g, b.left += h, a.offset.setOffset(d[0], a.extend({
            using: function (a) {
                d.css({top: Math.round(a.top), left: Math.round(a.left)})
            }
        }, b), 0), d.addClass("in");
        var i = d[0].offsetWidth, j = d[0].offsetHeight;
        "top" == c && j != f && (b.top = b.top + f - j);
        var k = this.getViewportAdjustedDelta(c, b, i, j);
        k.left ? b.left += k.left : b.top += k.top;
        var l = /top|bottom/.test(c), m = l ? 2 * k.left - e + i : 2 * k.top - f + j, n = l ? "offsetWidth" : "offsetHeight";
        d.offset(b), this.replaceArrow(m, d[0][n], l)
    }, c.prototype.replaceArrow = function (a, b, c) {
        this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle();
        a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b), a.removeClass("fade in top bottom left right")
    }, c.prototype.hide = function (b) {
        function d() {
            "in" != e.hoverState && f.detach(), e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type), b && b()
        }

        var e = this, f = a(this.$tip), g = a.Event("hide.bs." + this.type);
        return this.$element.trigger(g), g.isDefaultPrevented() ? void 0 : (f.removeClass("in"), a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(), this.hoverState = null, this)
    }, c.prototype.fixTitle = function () {
        var a = this.$element;
        (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
    }, c.prototype.hasContent = function () {
        return this.getTitle()
    }, c.prototype.getPosition = function (b) {
        b     = b || this.$element;
        var c = b[0], d = "BODY" == c.tagName, e = c.getBoundingClientRect();
        null == e.width && (e = a.extend({}, e, {width: e.right - e.left, height: e.bottom - e.top}));
        var f                 = d ? {
                top: 0,
                left: 0
            } : b.offset(), g = {scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()}, h = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
        return a.extend({}, e, g, h, f)
    }, c.prototype.getCalculatedOffset = function (a, b, c, d) {
        return "bottom" == a ? {
                top: b.top + b.height,
                left: b.left + b.width / 2 - c / 2
            } : "top" == a ? {
                    top: b.top - d,
                    left: b.left + b.width / 2 - c / 2
                } : "left" == a ? {
                        top: b.top + b.height / 2 - d / 2,
                        left: b.left - c
                    } : {top: b.top + b.height / 2 - d / 2, left: b.left + b.width}
    }, c.prototype.getViewportAdjustedDelta = function (a, b, c, d) {
        var e = {top: 0, left: 0};
        if (!this.$viewport)return e;
        var f = this.options.viewport && this.options.viewport.padding || 0, g = this.getPosition(this.$viewport);
        if (/right|left/.test(a)) {
            var h = b.top - f - g.scroll, i = b.top + f - g.scroll + d;
            h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
        } else {
            var j = b.left - f, k = b.left + f + c;
            j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
        }
        return e
    }, c.prototype.getTitle = function () {
        var a, b = this.$element, c = this.options;
        return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
    }, c.prototype.getUID = function (a) {
        do a += ~~(1e6 * Math.random()); while (document.getElementById(a));
        return a
    }, c.prototype.tip = function () {
        if (!this.$tip && (this.$tip = a(this.options.template), 1 != this.$tip.length))throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
        return this.$tip
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
    }, c.prototype.enable = function () {
        this.enabled = !0
    }, c.prototype.disable = function () {
        this.enabled = !1
    }, c.prototype.toggleEnabled = function () {
        this.enabled = !this.enabled
    }, c.prototype.toggle = function (b) {
        var c = this;
        b && (c = a(b.currentTarget).data("bs." + this.type), c || (c = new this.constructor(b.currentTarget, this.getDelegateOptions()), a(b.currentTarget).data("bs." + this.type, c))), b ? (c.inState.click = !c.inState.click, c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
    }, c.prototype.destroy = function () {
        var a = this;
        clearTimeout(this.timeout), this.hide(function () {
            a.$element.off("." + a.type).removeData("bs." + a.type), a.$tip && a.$tip.detach(), a.$tip = null, a.$arrow = null, a.$viewport = null
        })
    };
    var d = a.fn.tooltip;
    a.fn.tooltip = b, a.fn.tooltip.Constructor = c, a.fn.tooltip.noConflict = function () {
        return a.fn.tooltip = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.popover"), f = "object" == typeof b && b;
            (e || !/destroy|hide/.test(b)) && (e || d.data("bs.popover", e = new c(this, f)), "string" == typeof b && e[b]())
        })
    }

    var c = function (a, b) {
        this.init("popover", a, b)
    };
    if (!a.fn.tooltip)throw new Error("Popover requires tooltip.js");
    c.VERSION = "3.3.6", c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
        placement: "right",
        trigger: "click",
        content: "",
        template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
    }), c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype), c.prototype.constructor = c, c.prototype.getDefaults = function () {
        return c.DEFAULTS
    }, c.prototype.setContent = function () {
        var a = this.tip(), b = this.getTitle(), c = this.getContent();
        a.find(".popover-title")[this.options.html ? "html" : "text"](b), a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c), a.removeClass("fade top bottom left right in"), a.find(".popover-title").html() || a.find(".popover-title").hide()
    }, c.prototype.hasContent = function () {
        return this.getTitle() || this.getContent()
    }, c.prototype.getContent = function () {
        var a = this.$element, b = this.options;
        return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
    }, c.prototype.arrow = function () {
        return this.$arrow = this.$arrow || this.tip().find(".arrow")
    };
    var d = a.fn.popover;
    a.fn.popover = b, a.fn.popover.Constructor = c, a.fn.popover.noConflict = function () {
        return a.fn.popover = d, this
    }
}(jQuery), +function (a) {
    "use strict";
    function b(c, d) {
        this.$body = a(document.body), this.$scrollElement = a(a(c).is(document.body) ? window : c), this.options = a.extend({}, b.DEFAULTS, d), this.selector = (this.options.target || "") + " .nav li > a", this.offsets = [], this.targets = [], this.activeTarget = null, this.scrollHeight = 0, this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)), this.refresh(), this.process()
    }

    function c(c) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.scrollspy"), f = "object" == typeof c && c;
            e || d.data("bs.scrollspy", e = new b(this, f)), "string" == typeof c && e[c]()
        })
    }

    b.VERSION = "3.3.6", b.DEFAULTS = {offset: 10}, b.prototype.getScrollHeight = function () {
        return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
    }, b.prototype.refresh = function () {
        var b = this, c = "offset", d = 0;
        this.offsets = [], this.targets = [], this.scrollHeight = this.getScrollHeight(), a.isWindow(this.$scrollElement[0]) || (c = "position", d = this.$scrollElement.scrollTop()), this.$body.find(this.selector).map(function () {
            var b = a(this), e = b.data("target") || b.attr("href"), f = /^#./.test(e) && a(e);
            return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
        }).sort(function (a, b) {
            return a[0] - b[0]
        }).each(function () {
            b.offsets.push(this[0]), b.targets.push(this[1])
        })
    }, b.prototype.process = function () {
        var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
        if (this.scrollHeight != c && this.refresh(), b >= d)return g != (a = f[f.length - 1]) && this.activate(a);
        if (g && b < e[0])return this.activeTarget = null, this.clear();
        for (a = e.length; a--;)g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
    }, b.prototype.activate = function (b) {
        this.activeTarget = b, this.clear();
        var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]', d = a(c).parents("li").addClass("active");
        d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")), d.trigger("activate.bs.scrollspy")
    }, b.prototype.clear = function () {
        a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
    };
    var d = a.fn.scrollspy;
    a.fn.scrollspy = c, a.fn.scrollspy.Constructor = b, a.fn.scrollspy.noConflict = function () {
        return a.fn.scrollspy = d, this
    }, a(window).on("load.bs.scrollspy.data-api", function () {
        a('[data-spy="scroll"]').each(function () {
            var b = a(this);
            c.call(b, b.data())
        })
    })
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.tab");
            e || d.data("bs.tab", e = new c(this)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b) {
        this.element = a(b)
    };
    c.VERSION = "3.3.6", c.TRANSITION_DURATION = 150, c.prototype.show = function () {
        var b = this.element, c = b.closest("ul:not(.dropdown-menu)"), d = b.data("target");
        if (d || (d = b.attr("href"), d = d && d.replace(/.*(?=#[^\s]*$)/, "")), !b.parent("li").hasClass("active")) {
            var e = c.find(".active:last a"), f = a.Event("hide.bs.tab", {relatedTarget: b[0]}), g = a.Event("show.bs.tab", {relatedTarget: e[0]});
            if (e.trigger(f), b.trigger(g), !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                var h = a(d);
                this.activate(b.closest("li"), c), this.activate(h, h.parent(), function () {
                    e.trigger({type: "hidden.bs.tab", relatedTarget: b[0]}), b.trigger({
                        type: "shown.bs.tab",
                        relatedTarget: e[0]
                    })
                })
            }
        }
    }, c.prototype.activate = function (b, d, e) {
        function f() {
            g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1), b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0), h ? (b[0].offsetWidth, b.addClass("in")) : b.removeClass("fade"), b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0), e && e()
        }

        var g = d.find("> .active"), h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
        g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(), g.removeClass("in")
    };
    var d = a.fn.tab;
    a.fn.tab = b, a.fn.tab.Constructor = c, a.fn.tab.noConflict = function () {
        return a.fn.tab = d, this
    };
    var e = function (c) {
        c.preventDefault(), b.call(a(this), "show")
    };
    a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
}(jQuery), +function (a) {
    "use strict";
    function b(b) {
        return this.each(function () {
            var d = a(this), e = d.data("bs.affix"), f = "object" == typeof b && b;
            e || d.data("bs.affix", e = new c(this, f)), "string" == typeof b && e[b]()
        })
    }

    var c = function (b, d) {
        this.options = a.extend({}, c.DEFAULTS, d), this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)), this.$element = a(b), this.affixed = null, this.unpin = null, this.pinnedOffset = null, this.checkPosition()
    };
    c.VERSION = "3.3.6", c.RESET = "affix affix-top affix-bottom", c.DEFAULTS = {
        offset: 0,
        target: window
    }, c.prototype.getState = function (a, b, c, d) {
        var e = this.$target.scrollTop(), f = this.$element.offset(), g = this.$target.height();
        if (null != c && "top" == this.affixed)return c > e ? "top" : !1;
        if ("bottom" == this.affixed)return null != c ? e + this.unpin <= f.top ? !1 : "bottom" : a - d >= e + g ? !1 : "bottom";
        var h = null == this.affixed, i = h ? e : f.top, j = h ? g : b;
        return null != c && c >= e ? "top" : null != d && i + j >= a - d ? "bottom" : !1
    }, c.prototype.getPinnedOffset = function () {
        if (this.pinnedOffset)return this.pinnedOffset;
        this.$element.removeClass(c.RESET).addClass("affix");
        var a = this.$target.scrollTop(), b = this.$element.offset();
        return this.pinnedOffset = b.top - a
    }, c.prototype.checkPositionWithEventLoop = function () {
        setTimeout(a.proxy(this.checkPosition, this), 1)
    }, c.prototype.checkPosition = function () {
        if (this.$element.is(":visible")) {
            var b = this.$element.height(), d = this.options.offset, e = d.top, f = d.bottom, g = Math.max(a(document).height(), a(document.body).height());
            "object" != typeof d && (f = e = d), "function" == typeof e && (e = d.top(this.$element)), "function" == typeof f && (f = d.bottom(this.$element));
            var h = this.getState(g, b, e, f);
            if (this.affixed != h) {
                null != this.unpin && this.$element.css("top", "");
                var i = "affix" + (h ? "-" + h : ""), j = a.Event(i + ".bs.affix");
                if (this.$element.trigger(j), j.isDefaultPrevented())return;
                this.affixed = h, this.unpin = "bottom" == h ? this.getPinnedOffset() : null, this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
            }
            "bottom" == h && this.$element.offset({top: g - b - f})
        }
    };
    var d = a.fn.affix;
    a.fn.affix = b, a.fn.affix.Constructor = c, a.fn.affix.noConflict = function () {
        return a.fn.affix = d, this
    }, a(window).on("load", function () {
        a('[data-spy="affix"]').each(function () {
            var c = a(this), d = c.data();
            d.offset = d.offset || {}, null != d.offsetBottom && (d.offset.bottom = d.offsetBottom), null != d.offsetTop && (d.offset.top = d.offsetTop), b.call(c, d)
        })
    })
}(jQuery);
function hexToRgb(e) {
    var a = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    e     = e.replace(a, function (e, a, t, i) {
        return a + a + t + t + i + i
    });
    var t = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);
    return t ? {r: parseInt(t[1], 16), g: parseInt(t[2], 16), b: parseInt(t[3], 16)} : null
}
function clamp(e, a, t) {
    return Math.min(Math.max(e, a), t)
}
function isInArray(e, a) {
    return a.indexOf(e) > -1
}
var pJS = function (e, a) {
    var t    = document.querySelector("#" + e + " > .particles-js-canvas-el");
    this.pJS = {
        canvas: {el: t, w: t.offsetWidth, h: t.offsetHeight},
        particles: {
            number: {value: 400, density: {enable: !0, value_area: 800}},
            color: {value: "#fff"},
            shape: {
                type: "circle",
                stroke: {width: 0, color: "#ff0000"},
                polygon: {nb_sides: 5},
                image: {src: "", width: 100, height: 100}
            },
            opacity: {value: 1, random: !1, anim: {enable: !1, speed: 2, opacity_min: 0, sync: !1}},
            size: {value: 20, random: !1, anim: {enable: !1, speed: 20, size_min: 0, sync: !1}},
            line_linked: {enable: !0, distance: 100, color: "#fff", opacity: 1, width: 1},
            move: {
                enable: !0,
                speed: 2,
                direction: "none",
                random: !1,
                straight: !1,
                out_mode: "out",
                bounce: !1,
                attract: {enable: !1, rotateX: 3e3, rotateY: 3e3}
            },
            array: []
        },
        interactivity: {
            detect_on: "canvas",
            events: {onhover: {enable: !0, mode: "grab"}, onclick: {enable: !0, mode: "push"}, resize: !0},
            modes: {
                grab: {distance: 100, line_linked: {opacity: 1}},
                bubble: {distance: 200, size: 80, duration: .4},
                repulse: {distance: 200, duration: .4},
                push: {particles_nb: 4},
                remove: {particles_nb: 2}
            },
            mouse: {}
        },
        retina_detect: !1,
        fn: {interact: {}, modes: {}, vendors: {}},
        tmp: {}
    };
    var i    = this.pJS;
    a && Object.deepExtend(i, a), i.tmp.obj = {
        size_value: i.particles.size.value,
        size_anim_speed: i.particles.size.anim.speed,
        move_speed: i.particles.move.speed,
        line_linked_distance: i.particles.line_linked.distance,
        line_linked_width: i.particles.line_linked.width,
        mode_grab_distance: i.interactivity.modes.grab.distance,
        mode_bubble_distance: i.interactivity.modes.bubble.distance,
        mode_bubble_size: i.interactivity.modes.bubble.size,
        mode_repulse_distance: i.interactivity.modes.repulse.distance
    }, i.fn.retinaInit = function () {
        i.retina_detect && window.devicePixelRatio > 1 ? (i.canvas.pxratio = window.devicePixelRatio, i.tmp.retina = !0) : (i.canvas.pxratio = 1, i.tmp.retina = !1), i.canvas.w = i.canvas.el.offsetWidth * i.canvas.pxratio, i.canvas.h = i.canvas.el.offsetHeight * i.canvas.pxratio, i.particles.size.value = i.tmp.obj.size_value * i.canvas.pxratio, i.particles.size.anim.speed = i.tmp.obj.size_anim_speed * i.canvas.pxratio, i.particles.move.speed = i.tmp.obj.move_speed * i.canvas.pxratio, i.particles.line_linked.distance = i.tmp.obj.line_linked_distance * i.canvas.pxratio, i.interactivity.modes.grab.distance = i.tmp.obj.mode_grab_distance * i.canvas.pxratio, i.interactivity.modes.bubble.distance = i.tmp.obj.mode_bubble_distance * i.canvas.pxratio, i.particles.line_linked.width = i.tmp.obj.line_linked_width * i.canvas.pxratio, i.interactivity.modes.bubble.size = i.tmp.obj.mode_bubble_size * i.canvas.pxratio, i.interactivity.modes.repulse.distance = i.tmp.obj.mode_repulse_distance * i.canvas.pxratio
    }, i.fn.canvasInit = function () {
        i.canvas.ctx = i.canvas.el.getContext("2d")
    }, i.fn.canvasSize = function () {
        i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i && i.interactivity.events.resize && window.addEventListener("resize", function () {
            i.canvas.w = i.canvas.el.offsetWidth, i.canvas.h = i.canvas.el.offsetHeight, i.tmp.retina && (i.canvas.w *= i.canvas.pxratio, i.canvas.h *= i.canvas.pxratio), i.canvas.el.width = i.canvas.w, i.canvas.el.height = i.canvas.h, i.particles.move.enable || (i.fn.particlesEmpty(), i.fn.particlesCreate(), i.fn.particlesDraw(), i.fn.vendors.densityAutoParticles()), i.fn.vendors.densityAutoParticles()
        })
    }, i.fn.canvasPaint = function () {
        i.canvas.ctx.fillRect(0, 0, i.canvas.w, i.canvas.h)
    }, i.fn.canvasClear = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h)
    }, i.fn.particle = function (e, a, t) {
        if (this.radius = (i.particles.size.random ? Math.random() : 1) * i.particles.size.value, i.particles.size.anim.enable && (this.size_status = !1, this.vs = i.particles.size.anim.speed / 100, i.particles.size.anim.sync || (this.vs = this.vs * Math.random())), this.x = t ? t.x : Math.random() * i.canvas.w, this.y = t ? t.y : Math.random() * i.canvas.h, this.x > i.canvas.w - 2 * this.radius ? this.x = this.x - this.radius : this.x < 2 * this.radius && (this.x = this.x + this.radius), this.y > i.canvas.h - 2 * this.radius ? this.y = this.y - this.radius : this.y < 2 * this.radius && (this.y = this.y + this.radius), i.particles.move.bounce && i.fn.vendors.checkOverlap(this, t), this.color = {}, "object" == typeof e.value)if (e.value instanceof Array) {
            var s          = e.value[Math.floor(Math.random() * i.particles.color.value.length)];
            this.color.rgb = hexToRgb(s)
        } else void 0 != e.value.r && void 0 != e.value.g && void 0 != e.value.b && (this.color.rgb = {
            r: e.value.r,
            g: e.value.g,
            b: e.value.b
        }), void 0 != e.value.h && void 0 != e.value.s && void 0 != e.value.l && (this.color.hsl = {
            h: e.value.h,
            s: e.value.s,
            l: e.value.l
        }); else"random" == e.value ? this.color.rgb = {
                r: Math.floor(256 * Math.random()) + 0,
                g: Math.floor(256 * Math.random()) + 0,
                b: Math.floor(256 * Math.random()) + 0
            } : "string" == typeof e.value && (this.color = e, this.color.rgb = hexToRgb(this.color.value));
        this.opacity = (i.particles.opacity.random ? Math.random() : 1) * i.particles.opacity.value, i.particles.opacity.anim.enable && (this.opacity_status = !1, this.vo = i.particles.opacity.anim.speed / 100, i.particles.opacity.anim.sync || (this.vo = this.vo * Math.random()));
        var n = {};
        switch (i.particles.move.direction) {
            case"top":
                n = {x: 0, y: -1};
                break;
            case"top-right":
                n = {x: .5, y: -.5};
                break;
            case"right":
                n = {x: 1, y: -0};
                break;
            case"bottom-right":
                n = {x: .5, y: .5};
                break;
            case"bottom":
                n = {x: 0, y: 1};
                break;
            case"bottom-left":
                n = {x: -.5, y: 1};
                break;
            case"left":
                n = {x: -1, y: 0};
                break;
            case"top-left":
                n = {x: -.5, y: -.5};
                break;
            default:
                n = {x: 0, y: 0}
        }
        i.particles.move.straight ? (this.vx = n.x, this.vy = n.y, i.particles.move.random && (this.vx = this.vx * Math.random(), this.vy = this.vy * Math.random())) : (this.vx = n.x + Math.random() - .5, this.vy = n.y + Math.random() - .5), this.vx_i = this.vx, this.vy_i = this.vy;
        var r = i.particles.shape.type;
        if ("object" == typeof r) {
            if (r instanceof Array) {
                var c      = r[Math.floor(Math.random() * r.length)];
                this.shape = c
            }
        } else this.shape = r;
        if ("image" == this.shape) {
            var o = i.particles.shape;
            this.img = {
                src: o.image.src,
                ratio: o.image.width / o.image.height
            }, this.img.ratio || (this.img.ratio = 1), "svg" == i.tmp.img_type && void 0 != i.tmp.source_svg && (i.fn.vendors.createSvgImg(this), i.tmp.pushing && (this.img.loaded = !1))
        }
    }, i.fn.particle.prototype.draw = function () {
        function e() {
            i.canvas.ctx.drawImage(r, a.x - t, a.y - t, 2 * t, 2 * t / a.img.ratio)
        }

        var a = this;
        if (void 0 != a.radius_bubble)var t = a.radius_bubble; else var t = a.radius;
        if (void 0 != a.opacity_bubble)var s = a.opacity_bubble; else var s = a.opacity;
        if (a.color.rgb)var n = "rgba(" + a.color.rgb.r + "," + a.color.rgb.g + "," + a.color.rgb.b + "," + s + ")"; else var n = "hsla(" + a.color.hsl.h + "," + a.color.hsl.s + "%," + a.color.hsl.l + "%," + s + ")";
        switch (i.canvas.ctx.fillStyle = n, i.canvas.ctx.beginPath(), a.shape) {
            case"circle":
                i.canvas.ctx.arc(a.x, a.y, t, 0, 2 * Math.PI, !1);
                break;
            case"edge":
                i.canvas.ctx.rect(a.x - t, a.y - t, 2 * t, 2 * t);
                break;
            case"triangle":
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - t, a.y + t / 1.66, 2 * t, 3, 2);
                break;
            case"polygon":
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - t / (i.particles.shape.polygon.nb_sides / 3.5), a.y - t / .76, 2.66 * t / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 1);
                break;
            case"star":
                i.fn.vendors.drawShape(i.canvas.ctx, a.x - 2 * t / (i.particles.shape.polygon.nb_sides / 4), a.y - t / 1.52, 2 * t * 2.66 / (i.particles.shape.polygon.nb_sides / 3), i.particles.shape.polygon.nb_sides, 2);
                break;
            case"image":
                if ("svg" == i.tmp.img_type)var r = a.img.obj; else var r = i.tmp.img_obj;
                r && e()
        }
        i.canvas.ctx.closePath(), i.particles.shape.stroke.width > 0 && (i.canvas.ctx.strokeStyle = i.particles.shape.stroke.color, i.canvas.ctx.lineWidth = i.particles.shape.stroke.width, i.canvas.ctx.stroke()), i.canvas.ctx.fill()
    }, i.fn.particlesCreate = function () {
        for (var e = 0; e < i.particles.number.value; e++)i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value))
    }, i.fn.particlesUpdate = function () {
        for (var e = 0; e < i.particles.array.length; e++) {
            var a = i.particles.array[e];
            if (i.particles.move.enable) {
                var t = i.particles.move.speed / 2;
                a.x += a.vx * t, a.y += a.vy * t
            }
            if (i.particles.opacity.anim.enable && (1 == a.opacity_status ? (a.opacity >= i.particles.opacity.value && (a.opacity_status = !1), a.opacity += a.vo) : (a.opacity <= i.particles.opacity.anim.opacity_min && (a.opacity_status = !0), a.opacity -= a.vo), a.opacity < 0 && (a.opacity = 0)), i.particles.size.anim.enable && (1 == a.size_status ? (a.radius >= i.particles.size.value && (a.size_status = !1), a.radius += a.vs) : (a.radius <= i.particles.size.anim.size_min && (a.size_status = !0), a.radius -= a.vs), a.radius < 0 && (a.radius = 0)), "bounce" == i.particles.move.out_mode)var s = {
                x_left: a.radius,
                x_right: i.canvas.w,
                y_top: a.radius,
                y_bottom: i.canvas.h
            }; else var s = {
                x_left: -a.radius,
                x_right: i.canvas.w + a.radius,
                y_top: -a.radius,
                y_bottom: i.canvas.h + a.radius
            };
            switch (a.x - a.radius > i.canvas.w ? (a.x = s.x_left, a.y = Math.random() * i.canvas.h) : a.x + a.radius < 0 && (a.x = s.x_right, a.y = Math.random() * i.canvas.h), a.y - a.radius > i.canvas.h ? (a.y = s.y_top, a.x = Math.random() * i.canvas.w) : a.y + a.radius < 0 && (a.y = s.y_bottom, a.x = Math.random() * i.canvas.w), i.particles.move.out_mode) {
                case"bounce":
                    a.x + a.radius > i.canvas.w ? a.vx = -a.vx : a.x - a.radius < 0 && (a.vx = -a.vx), a.y + a.radius > i.canvas.h ? a.vy = -a.vy : a.y - a.radius < 0 && (a.vy = -a.vy)
            }
            if (isInArray("grab", i.interactivity.events.onhover.mode) && i.fn.modes.grabParticle(a), (isInArray("bubble", i.interactivity.events.onhover.mode) || isInArray("bubble", i.interactivity.events.onclick.mode)) && i.fn.modes.bubbleParticle(a), (isInArray("repulse", i.interactivity.events.onhover.mode) || isInArray("repulse", i.interactivity.events.onclick.mode)) && i.fn.modes.repulseParticle(a), i.particles.line_linked.enable || i.particles.move.attract.enable)for (var n = e + 1; n < i.particles.array.length; n++) {
                var r = i.particles.array[n];
                i.particles.line_linked.enable && i.fn.interact.linkParticles(a, r), i.particles.move.attract.enable && i.fn.interact.attractParticles(a, r), i.particles.move.bounce && i.fn.interact.bounceParticles(a, r)
            }
        }
    }, i.fn.particlesDraw = function () {
        i.canvas.ctx.clearRect(0, 0, i.canvas.w, i.canvas.h), i.fn.particlesUpdate();
        for (var e = 0; e < i.particles.array.length; e++) {
            var a = i.particles.array[e];
            a.draw()
        }
    }, i.fn.particlesEmpty = function () {
        i.particles.array = []
    }, i.fn.particlesRefresh = function () {
        cancelRequestAnimFrame(i.fn.checkAnimFrame), cancelRequestAnimFrame(i.fn.drawAnimFrame), i.tmp.source_svg = void 0, i.tmp.img_obj = void 0, i.tmp.count_svg = 0, i.fn.particlesEmpty(), i.fn.canvasClear(), i.fn.vendors.start()
    }, i.fn.interact.linkParticles = function (e, a) {
        var t = e.x - a.x, s = e.y - a.y, n = Math.sqrt(t * t + s * s);
        if (n <= i.particles.line_linked.distance) {
            var r = i.particles.line_linked.opacity - n / (1 / i.particles.line_linked.opacity) / i.particles.line_linked.distance;
            if (r > 0) {
                var c = i.particles.line_linked.color_rgb_line;
                i.canvas.ctx.strokeStyle = "rgba(" + c.r + "," + c.g + "," + c.b + "," + r + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(a.x, a.y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
            }
        }
    }, i.fn.interact.attractParticles = function (e, a) {
        var t = e.x - a.x, s = e.y - a.y, n = Math.sqrt(t * t + s * s);
        if (n <= i.particles.line_linked.distance) {
            var r = t / (1e3 * i.particles.move.attract.rotateX), c = s / (1e3 * i.particles.move.attract.rotateY);
            e.vx -= r, e.vy -= c, a.vx += r, a.vy += c
        }
    }, i.fn.interact.bounceParticles = function (e, a) {
        var t = e.x - a.x, i = e.y - a.y, s = Math.sqrt(t * t + i * i), n = e.radius + a.radius;
        n >= s && (e.vx = -e.vx, e.vy = -e.vy, a.vx = -a.vx, a.vy = -a.vy)
    }, i.fn.modes.pushParticles = function (e, a) {
        i.tmp.pushing = !0;
        for (var t = 0; e > t; t++)i.particles.array.push(new i.fn.particle(i.particles.color, i.particles.opacity.value, {
            x: a ? a.pos_x : Math.random() * i.canvas.w,
            y: a ? a.pos_y : Math.random() * i.canvas.h
        })), t == e - 1 && (i.particles.move.enable || i.fn.particlesDraw(), i.tmp.pushing = !1)
    }, i.fn.modes.removeParticles = function (e) {
        i.particles.array.splice(0, e), i.particles.move.enable || i.fn.particlesDraw()
    }, i.fn.modes.bubbleParticle = function (e) {
        function a() {
            e.opacity_bubble = e.opacity, e.radius_bubble = e.radius
        }

        function t(a, t, s, n, c) {
            if (a != t)if (i.tmp.bubble_duration_end) {
                if (void 0 != s) {
                    var o = n - p * (n - a) / i.interactivity.modes.bubble.duration, l = a - o;
                    d = a + l, "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d)
                }
            } else if (r <= i.interactivity.modes.bubble.distance) {
                if (void 0 != s)var v = s; else var v = n;
                if (v != a) {
                    var d = n - p * (n - a) / i.interactivity.modes.bubble.duration;
                    "size" == c && (e.radius_bubble = d), "opacity" == c && (e.opacity_bubble = d)
                }
            } else"size" == c && (e.radius_bubble = void 0), "opacity" == c && (e.opacity_bubble = void 0)
        }

        if (i.interactivity.events.onhover.enable && isInArray("bubble", i.interactivity.events.onhover.mode)) {
            var s = e.x - i.interactivity.mouse.pos_x, n = e.y - i.interactivity.mouse.pos_y, r = Math.sqrt(s * s + n * n), c = 1 - r / i.interactivity.modes.bubble.distance;
            if (r <= i.interactivity.modes.bubble.distance) {
                if (c >= 0 && "mousemove" == i.interactivity.status) {
                    if (i.interactivity.modes.bubble.size != i.particles.size.value)if (i.interactivity.modes.bubble.size > i.particles.size.value) {
                        var o = e.radius + i.interactivity.modes.bubble.size * c;
                        o >= 0 && (e.radius_bubble = o)
                    } else {
                        var l = e.radius - i.interactivity.modes.bubble.size, o = e.radius - l * c;
                        o > 0 ? e.radius_bubble = o : e.radius_bubble = 0
                    }
                    if (i.interactivity.modes.bubble.opacity != i.particles.opacity.value)if (i.interactivity.modes.bubble.opacity > i.particles.opacity.value) {
                        var v = i.interactivity.modes.bubble.opacity * c;
                        v > e.opacity && v <= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                    } else {
                        var v = e.opacity - (i.particles.opacity.value - i.interactivity.modes.bubble.opacity) * c;
                        v < e.opacity && v >= i.interactivity.modes.bubble.opacity && (e.opacity_bubble = v)
                    }
                }
            } else a();
            "mouseleave" == i.interactivity.status && a()
        } else if (i.interactivity.events.onclick.enable && isInArray("bubble", i.interactivity.events.onclick.mode)) {
            if (i.tmp.bubble_clicking) {
                var s = e.x - i.interactivity.mouse.click_pos_x, n = e.y - i.interactivity.mouse.click_pos_y, r = Math.sqrt(s * s + n * n), p = ((new Date).getTime() - i.interactivity.mouse.click_time) / 1e3;
                p > i.interactivity.modes.bubble.duration && (i.tmp.bubble_duration_end = !0), p > 2 * i.interactivity.modes.bubble.duration && (i.tmp.bubble_clicking = !1, i.tmp.bubble_duration_end = !1)
            }
            i.tmp.bubble_clicking && (t(i.interactivity.modes.bubble.size, i.particles.size.value, e.radius_bubble, e.radius, "size"), t(i.interactivity.modes.bubble.opacity, i.particles.opacity.value, e.opacity_bubble, e.opacity, "opacity"))
        }
    }, i.fn.modes.repulseParticle = function (e) {
        function a() {
            var a = Math.atan2(d, p);
            if (e.vx = u * Math.cos(a), e.vy = u * Math.sin(a), "bounce" == i.particles.move.out_mode) {
                var t = {x: e.x + e.vx, y: e.y + e.vy};
                t.x + e.radius > i.canvas.w ? e.vx = -e.vx : t.x - e.radius < 0 && (e.vx = -e.vx), t.y + e.radius > i.canvas.h ? e.vy = -e.vy : t.y - e.radius < 0 && (e.vy = -e.vy)
            }
        }

        if (i.interactivity.events.onhover.enable && isInArray("repulse", i.interactivity.events.onhover.mode) && "mousemove" == i.interactivity.status) {
            var t = e.x - i.interactivity.mouse.pos_x, s = e.y - i.interactivity.mouse.pos_y, n = Math.sqrt(t * t + s * s), r = {
                x: t / n,
                y: s / n
            }, c  = i.interactivity.modes.repulse.distance, o = 100, l = clamp(1 / c * (-1 * Math.pow(n / c, 2) + 1) * c * o, 0, 50), v = {
                x: e.x + r.x * l,
                y: e.y + r.y * l
            };
            "bounce" == i.particles.move.out_mode ? (v.x - e.radius > 0 && v.x + e.radius < i.canvas.w && (e.x = v.x), v.y - e.radius > 0 && v.y + e.radius < i.canvas.h && (e.y = v.y)) : (e.x = v.x, e.y = v.y)
        } else if (i.interactivity.events.onclick.enable && isInArray("repulse", i.interactivity.events.onclick.mode))if (i.tmp.repulse_finish || (i.tmp.repulse_count++, i.tmp.repulse_count == i.particles.array.length && (i.tmp.repulse_finish = !0)), i.tmp.repulse_clicking) {
            var c = Math.pow(i.interactivity.modes.repulse.distance / 6, 3), p = i.interactivity.mouse.click_pos_x - e.x, d = i.interactivity.mouse.click_pos_y - e.y, m = p * p + d * d, u = -c / m * 1;
            c >= m && a()
        } else 0 == i.tmp.repulse_clicking && (e.vx = e.vx_i, e.vy = e.vy_i)
    }, i.fn.modes.grabParticle = function (e) {
        if (i.interactivity.events.onhover.enable && "mousemove" == i.interactivity.status) {
            var a = e.x - i.interactivity.mouse.pos_x, t = e.y - i.interactivity.mouse.pos_y, s = Math.sqrt(a * a + t * t);
            if (s <= i.interactivity.modes.grab.distance) {
                var n = i.interactivity.modes.grab.line_linked.opacity - s / (1 / i.interactivity.modes.grab.line_linked.opacity) / i.interactivity.modes.grab.distance;
                if (n > 0) {
                    var r = i.particles.line_linked.color_rgb_line;
                    i.canvas.ctx.strokeStyle = "rgba(" + r.r + "," + r.g + "," + r.b + "," + n + ")", i.canvas.ctx.lineWidth = i.particles.line_linked.width, i.canvas.ctx.beginPath(), i.canvas.ctx.moveTo(e.x, e.y), i.canvas.ctx.lineTo(i.interactivity.mouse.pos_x, i.interactivity.mouse.pos_y), i.canvas.ctx.stroke(), i.canvas.ctx.closePath()
                }
            }
        }
    }, i.fn.vendors.eventsListeners = function () {
        "window" == i.interactivity.detect_on ? i.interactivity.el = window : i.interactivity.el = i.canvas.el, (i.interactivity.events.onhover.enable || i.interactivity.events.onclick.enable) && (i.interactivity.el.addEventListener("mousemove", function (e) {
            if (i.interactivity.el == window)var a = e.clientX, t = e.clientY; else var a = e.offsetX || e.clientX, t = e.offsetY || e.clientY;
            i.interactivity.mouse.pos_x = a, i.interactivity.mouse.pos_y = t, i.tmp.retina && (i.interactivity.mouse.pos_x *= i.canvas.pxratio, i.interactivity.mouse.pos_y *= i.canvas.pxratio), i.interactivity.status = "mousemove"
        }), i.interactivity.el.addEventListener("mouseleave", function (e) {
            i.interactivity.mouse.pos_x = null, i.interactivity.mouse.pos_y = null, i.interactivity.status = "mouseleave"
        })), i.interactivity.events.onclick.enable && i.interactivity.el.addEventListener("click", function () {
            if (i.interactivity.mouse.click_pos_x = i.interactivity.mouse.pos_x, i.interactivity.mouse.click_pos_y = i.interactivity.mouse.pos_y, i.interactivity.mouse.click_time = (new Date).getTime(), i.interactivity.events.onclick.enable)switch (i.interactivity.events.onclick.mode) {
                case"push":
                    i.particles.move.enable ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : 1 == i.interactivity.modes.push.particles_nb ? i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb, i.interactivity.mouse) : i.interactivity.modes.push.particles_nb > 1 && i.fn.modes.pushParticles(i.interactivity.modes.push.particles_nb);
                    break;
                case"remove":
                    i.fn.modes.removeParticles(i.interactivity.modes.remove.particles_nb);
                    break;
                case"bubble":
                    i.tmp.bubble_clicking = !0;
                    break;
                case"repulse":
                    i.tmp.repulse_clicking = !0, i.tmp.repulse_count = 0, i.tmp.repulse_finish = !1, setTimeout(function () {
                        i.tmp.repulse_clicking = !1
                    }, 1e3 * i.interactivity.modes.repulse.duration)
            }
        })
    }, i.fn.vendors.densityAutoParticles = function () {
        if (i.particles.number.density.enable) {
            var e = i.canvas.el.width * i.canvas.el.height / 1e3;
            i.tmp.retina && (e /= 2 * i.canvas.pxratio);
            var a = e * i.particles.number.value / i.particles.number.density.value_area, t = i.particles.array.length - a;
            0 > t ? i.fn.modes.pushParticles(Math.abs(t)) : i.fn.modes.removeParticles(t)
        }
    }, i.fn.vendors.checkOverlap = function (e, a) {
        for (var t = 0; t < i.particles.array.length; t++) {
            var s = i.particles.array[t], n = e.x - s.x, r = e.y - s.y, c = Math.sqrt(n * n + r * r);
            c <= e.radius + s.radius && (e.x = a ? a.x : Math.random() * i.canvas.w, e.y = a ? a.y : Math.random() * i.canvas.h, i.fn.vendors.checkOverlap(e))
        }
    }, i.fn.vendors.createSvgImg = function (e) {
        var a = i.tmp.source_svg, t = /#([0-9A-F]{3,6})/gi, s = a.replace(t, function (a, t, i, s) {
            if (e.color.rgb)var n = "rgba(" + e.color.rgb.r + "," + e.color.rgb.g + "," + e.color.rgb.b + "," + e.opacity + ")"; else var n = "hsla(" + e.color.hsl.h + "," + e.color.hsl.s + "%," + e.color.hsl.l + "%," + e.opacity + ")";
            return n
        }), n = new Blob([s], {type: "image/svg+xml;charset=utf-8"}), r = window.URL || window.webkitURL || window, c = r.createObjectURL(n), o = new Image;
        o.addEventListener("load", function () {
            e.img.obj = o, e.img.loaded = !0, r.revokeObjectURL(c), i.tmp.count_svg++
        }), o.src = c
    }, i.fn.vendors.destroypJS = function () {
        cancelAnimationFrame(i.fn.drawAnimFrame), t.remove(), pJSDom = null
    }, i.fn.vendors.drawShape = function (e, a, t, i, s, n) {
        var r = s * n, c = s / n, o = 180 * (c - 2) / c, l = Math.PI - Math.PI * o / 180;
        e.save(), e.beginPath(), e.translate(a, t), e.moveTo(0, 0);
        for (var v = 0; r > v; v++)e.lineTo(i, 0), e.translate(i, 0), e.rotate(l);
        e.fill(), e.restore()
    }, i.fn.vendors.exportImg = function () {
        window.open(i.canvas.el.toDataURL("image/png"), "_blank")
    }, i.fn.vendors.loadImg = function (e) {
        if (i.tmp.img_error = void 0, "" != i.particles.shape.image.src)if ("svg" == e) {
            var a = new XMLHttpRequest;
            a.open("GET", i.particles.shape.image.src), a.onreadystatechange = function (e) {
                4 == a.readyState && (200 == a.status ? (i.tmp.source_svg = e.currentTarget.response, i.fn.vendors.checkBeforeDraw()) : (console.log("Error pJS - Image not found"), i.tmp.img_error = !0))
            }, a.send()
        } else {
            var t = new Image;
            t.addEventListener("load", function () {
                i.tmp.img_obj = t, i.fn.vendors.checkBeforeDraw()
            }), t.src = i.particles.shape.image.src
        } else console.log("Error pJS - No image.src"), i.tmp.img_error = !0
    }, i.fn.vendors.draw = function () {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type ? i.tmp.count_svg >= i.particles.number.value ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : void 0 != i.tmp.img_obj ? (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame)) : i.tmp.img_error || (i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw)) : (i.fn.particlesDraw(), i.particles.move.enable ? i.fn.drawAnimFrame = requestAnimFrame(i.fn.vendors.draw) : cancelRequestAnimFrame(i.fn.drawAnimFrame))
    }, i.fn.vendors.checkBeforeDraw = function () {
        "image" == i.particles.shape.type ? "svg" == i.tmp.img_type && void 0 == i.tmp.source_svg ? i.tmp.checkAnimFrame = requestAnimFrame(check) : (cancelRequestAnimFrame(i.tmp.checkAnimFrame), i.tmp.img_error || (i.fn.vendors.init(), i.fn.vendors.draw())) : (i.fn.vendors.init(), i.fn.vendors.draw())
    }, i.fn.vendors.init = function () {
        i.fn.retinaInit(), i.fn.canvasInit(), i.fn.canvasSize(), i.fn.canvasPaint(), i.fn.particlesCreate(), i.fn.vendors.densityAutoParticles(), i.particles.line_linked.color_rgb_line = hexToRgb(i.particles.line_linked.color)
    }, i.fn.vendors.start = function () {
        isInArray("image", i.particles.shape.type) ? (i.tmp.img_type = i.particles.shape.image.src.substr(i.particles.shape.image.src.length - 3), i.fn.vendors.loadImg(i.tmp.img_type)) : i.fn.vendors.checkBeforeDraw()
    }, i.fn.vendors.eventsListeners(), i.fn.vendors.start()
};
Object.deepExtend = function (e, a) {
    for (var t in a)a[t] && a[t].constructor && a[t].constructor === Object ? (e[t] = e[t] || {}, arguments.callee(e[t], a[t])) : e[t] = a[t];
    return e
}, window.requestAnimFrame = function () {
    return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
        }
}(), window.cancelRequestAnimFrame = function () {
    return window.cancelAnimationFrame || window.webkitCancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || clearTimeout
}(), window.pJSDom = [], window.particlesJS = function (e, a) {
    "string" != typeof e && (a = e, e = "particles-js"), e || (e = "particles-js");
    var t = document.getElementById(e), i = "particles-js-canvas-el", s = t.getElementsByClassName(i);
    if (s.length)for (; s.length > 0;)t.removeChild(s[0]);
    var n = document.createElement("canvas");
    n.className = i, n.style.width = "100%", n.style.height = "100%";
    var r = document.getElementById(e).appendChild(n);
    null != r && pJSDom.push(new pJS(e, a))
}, window.particlesJS.load = function (e, a, t) {
    var i = new XMLHttpRequest;
    i.open("GET", a), i.onreadystatechange = function (a) {
        if (4 == i.readyState)if (200 == i.status) {
            var s = JSON.parse(a.currentTarget.response);
            window.particlesJS(e, s), t && t()
        } else console.log("Error pJS - XMLHttpRequest status: " + i.status), console.log("Error pJS - File config not found")
    }, i.send()
};
!function (t, e) {
    "function" == typeof define && define.amd ? define(e) : "object" == typeof exports ? module.exports = e(require, exports, module) : t.ScrollReveal = e()
}(this, function (t, e, i) {
    return function () {
        var t, e, i;
        this.ScrollReveal = function () {
            function n(i) {
                return window == this ? new n(i) : (e = this, e.tools = new t, e.tools.extend(e.defaults, i || {}), e.supported() || console.log("ScrollReveal is not supported in this browser."), e.store = {
                        elements: {},
                        containers: []
                    }, e.history = [], e.counter = 0, e.initialized = !1, e)
            }

            function o(t, i) {
                t.config ? t.config = e.tools.extendClone(t.config, i) : t.config = e.tools.extendClone(e.defaults, i), "top" === t.config.origin || "bottom" === t.config.origin ? t.config.axis = "Y" : t.config.axis = "X", ("top" === t.config.origin || "left" === t.config.origin) && (t.config.distance = "-" + t.config.distance)
            }

            function r(t) {
                function e(e) {
                    parseInt(i.distance) && (e.initial += " translate" + i.axis + "(" + i.distance + ")", e.target += " translate" + i.axis + "(0)"), i.scale && (e.initial += " scale(" + i.scale + ")", e.target += " scale(1)"), i.rotate.x && (e.initial += " rotateX(" + i.rotate.x + "deg)", e.target += " rotateX(0)"), i.rotate.y && (e.initial += " rotateY(" + i.rotate.y + "deg)", e.target += " rotateY(0)"), i.rotate.z && (e.initial += " rotateZ(" + i.rotate.z + "deg)", e.target += " rotateZ(0)"), e.initial += "; opacity: " + i.opacity + ";", e.target += "; opacity: " + t.styles.computed.opacity + ";"
                }

                var i = t.config, n = window.getComputedStyle(t.domEl);
                t.styles || (t.styles = {
                    transition: {},
                    transform: {},
                    computed: {}
                }, t.styles.inline = t.domEl.getAttribute("style") || "", t.styles.inline += "; visibility: visible; ", t.styles.computed.opacity = n.opacity, n.transition && "all 0s ease 0s" != n.transition ? t.styles.computed.transition = n.transition + ", " : t.styles.computed.transition = ""), t.styles.transition.instant = "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " 0s, opacity " + i.duration / 1e3 + "s " + i.easing + " 0s; transition: " + t.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " 0s, opacity " + i.duration / 1e3 + "s " + i.easing + " 0s; ", t.styles.transition.delayed = "-webkit-transition: " + t.styles.computed.transition + "-webkit-transform " + i.duration / 1e3 + "s " + i.easing + " " + i.delay / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + i.delay / 1e3 + "s; transition: " + t.styles.computed.transition + "transform " + i.duration / 1e3 + "s " + i.easing + " " + i.delay / 1e3 + "s, opacity " + i.duration / 1e3 + "s " + i.easing + " " + i.delay / 1e3 + "s; ", t.styles.transform.initial = " -webkit-transform:", t.styles.transform.target = " -webkit-transform:", e(t.styles.transform), t.styles.transform.initial += "transform:", t.styles.transform.target += "transform:", e(t.styles.transform)
            }

            function s(t) {
                var i = t.config.container;
                i && -1 == e.store.containers.indexOf(i) && e.store.containers.push(t.config.container), e.store.elements[t.id] = t
            }

            function a(t, i) {
                var n = {selector: t, config: i};
                e.history.push(n)
            }

            function l() {
                if (e.supported()) {
                    f();
                    for (var t = 0; t < e.store.containers.length; t++)e.store.containers[t].addEventListener("scroll", c), e.store.containers[t].addEventListener("resize", c);
                    e.initialized || (window.addEventListener("scroll", c), window.addEventListener("resize", c), e.initialized = !0)
                }
                return e
            }

            function c() {
                i(f)
            }

            function f() {
                function t(t, e) {
                    var i = 0, n = 0, o = "after";
                    switch (t) {
                        case"reveal":
                            n = e.config.duration + e.config.delay, o += "Reveal";
                            break;
                        case"reset":
                            n = e.config.duration, o += "Reset"
                    }
                    return e.timer && (i = Math.abs(e.timer.started - new Date), window.clearTimeout(e.timer.clock)), e.timer = {started: new Date}, e.timer.clock = window.setTimeout(function () {
                        e.config[o](e.domEl), e.timer = null
                    }, n - i), "reveal" === t ? e.revealed = !0 : e.revealed = !1
                }

                var i, n;
                e.tools.forOwn(e.store.elements, function (o) {
                    return i = e.store.elements[o], n = m(i), !n || i.revealed || i.disabled ? void(!n && i.config.reset && i.revealed && !i.disabled && (i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.initial + i.styles.transition.instant), t("reset", i))) : ("always" === i.config.useDelay || "onload" === i.config.useDelay && !e.initialized || "once" === i.config.useDelay && !i.seen ? i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.delayed) : i.domEl.setAttribute("style", i.styles.inline + i.styles.transform.target + i.styles.transition.instant), t("reveal", i), i.seen = !0)
                })
            }

            function d(t) {
                t || (t = window.document.documentElement);
                var e = t.clientWidth, i = t.clientHeight;
                return {width: e, height: i}
            }

            function u(t) {
                if (t) {
                    var e = y(t);
                    return {x: t.scrollLeft + e.left, y: t.scrollTop + e.top}
                }
                return {x: window.pageXOffset, y: window.pageYOffset}
            }

            function y(t) {
                var e = 0, i = 0, n = t.offsetHeight, o = t.offsetWidth;
                do isNaN(t.offsetTop) || (e += t.offsetTop), isNaN(t.offsetLeft) || (i += t.offsetLeft); while (t = t.offsetParent);
                return {top: e, left: i, height: n, width: o}
            }

            function m(t) {
                function e() {
                    var e = c + a * s, i = f + l * s, n = m - a * s, d = g - l * s, u = r.y + t.config.viewOffset.top, y = r.x + t.config.viewOffset.left, p = r.y - t.config.viewOffset.bottom + o.height, w = r.x - t.config.viewOffset.right + o.width;
                    return p > e && n > u && i > y && w > d
                }

                function i() {
                    return "fixed" === window.getComputedStyle(t.domEl).position
                }

                var n = y(t.domEl), o = d(t.config.container), r = u(t.config.container), s = t.config.viewFactor, a = n.height, l = n.width, c = n.top, f = n.left, m = c + a, g = f + l;
                return e() || i()
            }

            return n.prototype.defaults = {
                origin: "bottom",
                distance: "20px",
                duration: 500,
                delay: 0,
                rotate: {x: 0, y: 0, z: 0},
                opacity: 0,
                scale: .9,
                easing: "cubic-bezier( 0.6, 0.2, 0.1, 1 )",
                container: null,
                mobile: !0,
                reset: !1,
                useDelay: "always",
                viewFactor: .2,
                viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
                afterReveal: function (t) {
                },
                afterReset: function (t) {
                }
            }, n.prototype.supported = function () {
                var t = document.documentElement.style;
                return "WebkitTransition" in t && "WebkitTransform" in t || "transition" in t && "transform" in t ? !0 : !1
            }, n.prototype.reveal = function (t, i, n) {
                var c, f, d, u;
                if (f = i && i.container ? i.container : e.defaults.container ? e.defaults.container : window.document.documentElement, c = Array.prototype.slice.call(f.querySelectorAll(t)), !c.length)return console.log("reveal('" + t + "') failed: no elements found."), e;
                for (var y = 0; y < c.length; y++)u = c[y].getAttribute("data-sr-id"), u ? d = e.store.elements[u] : (d = {
                        id: ++e.counter,
                        domEl: c[y],
                        seen: !1,
                        revealed: !1
                    }, d.domEl.setAttribute("data-sr-id", d.id)), o(d, i || {}), r(d), s(d), e.tools.isMobile() && !d.config.mobile || !e.supported() ? (d.domEl.setAttribute("style", d.styles.inline), d.disabled = !0) : d.revealed || d.domEl.setAttribute("style", d.styles.inline + d.styles.transform.initial);
                return !n && e.supported() && (a(t, i), e.initTimeout && window.clearTimeout(e.initTimeout), e.initTimeout = window.setTimeout(l, 0)), e
            }, n.prototype.sync = function () {
                if (e.history.length && e.supported()) {
                    for (var t = 0; t < e.history.length; t++) {
                        var i = e.history[t];
                        e.reveal(i.selector, i.config, !0)
                    }
                    l()
                } else console.log("sync() failed: no reveals found.");
                return e
            }, n
        }();
        var t             = function () {
            function t() {
            }

            return t.prototype.isObject = function (t) {
                return null !== t && "object" == typeof t && t.constructor == Object
            }, t.prototype.forOwn = function (t, e) {
                if (!this.isObject(t))throw new TypeError("Expected 'object', but received '" + typeof t + "'.");
                for (var i in t)t.hasOwnProperty(i) && e(i)
            }, t.prototype.extend = function (t, e) {
                return this.forOwn(e, function (i) {
                    this.isObject(e[i]) ? (t[i] && this.isObject(t[i]) || (t[i] = {}), this.extend(t[i], e[i])) : t[i] = e[i]
                }.bind(this)), t
            }, t.prototype.extendClone = function (t, e) {
                return this.extend(this.extend({}, t), e)
            }, t.prototype.isMobile = function () {
                return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
            }, t
        }(), i            = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame
    }.call(this), this.ScrollReveal
});



/*!
 * Device.js
 * (c) 2014 Matthew Hudson
 * Device.js is freely distributable under the MIT license.
 * For all details and documentation:
 * http://matthewhudson.me/projects/device.js/
 * --------------------------------------------------
 */
(function () {
    var t, e, n, r, o, i, a, l, s, c;
    e = window.device, t = {}, window.device = t, r = window.document.documentElement, c = window.navigator.userAgent.toLowerCase(), t.ios = function () {
        return t.iphone() || t.ipod() || t.ipad()
    }, t.iphone = function () {
        return !t.windows() && o("iphone")
    }, t.ipod = function () {
        return o("ipod")
    }, t.ipad = function () {
        return o("ipad")
    }, t.android = function () {
        return !t.windows() && o("android")
    }, t.androidPhone = function () {
        return t.android() && o("mobile")
    }, t.androidTablet = function () {
        return t.android() && !o("mobile")
    }, t.blackberry = function () {
        return o("blackberry") || o("bb10") || o("rim")
    }, t.blackberryPhone = function () {
        return t.blackberry() && !o("tablet")
    }, t.blackberryTablet = function () {
        return t.blackberry() && o("tablet")
    }, t.windows = function () {
        return o("windows")
    }, t.windowsPhone = function () {
        return t.windows() && o("phone")
    }, t.windowsTablet = function () {
        return t.windows() && o("touch") && !t.windowsPhone()
    }, t.fxos = function () {
        return (o("(mobile;") || o("(tablet;")) && o("; rv:")
    }, t.fxosPhone = function () {
        return t.fxos() && o("mobile")
    }, t.fxosTablet = function () {
        return t.fxos() && o("tablet")
    }, t.meego = function () {
        return o("meego")
    }, t.cordova = function () {
        return window.cordova && "file:" === location.protocol
    }, t.nodeWebkit = function () {
        return "object" == typeof window.process
    }, t.mobile = function () {
        return t.androidPhone() || t.iphone() || t.ipod() || t.windowsPhone() || t.blackberryPhone() || t.fxosPhone() || t.meego()
    }, t.tablet = function () {
        return t.ipad() || t.androidTablet() || t.blackberryTablet() || t.windowsTablet() || t.fxosTablet()
    }, t.desktop = function () {
        return !t.tablet() && !t.mobile()
    }, t.television = function () {
        var t;
        for (television = ["googletv", "viera", "smarttv", "internet.tv", "netcast", "nettv", "appletv", "boxee", "kylo", "roku", "dlnadoc", "roku", "pov_tv", "hbbtv", "ce-html"], t = 0; t < television.length;) {
            if (o(television[t]))return !0;
            t++
        }
        return !1
    }, t.portrait = function () {
        return window.innerHeight / window.innerWidth > 1
    }, t.landscape = function () {
        return window.innerHeight / window.innerWidth < 1
    }, t.noConflict = function () {
        return window.device = e, this
    }, o = function (t) {
        return -1 !== c.indexOf(t)
    }, a = function (t) {
        var e;
        return e = new RegExp(t, "i"), r.className.match(e)
    }, n = function (t) {
        var e = null;
        a(t) || (e = r.className.replace(/^\s+|\s+$/g, ""), r.className = e + " " + t)
    }, s = function (t) {
        a(t) && (r.className = r.className.replace(" " + t, ""))
    }, t.ios() ? t.ipad() ? n("ios ipad tablet") : t.iphone() ? n("ios iphone mobile") : t.ipod() && n("ios ipod mobile") : t.android() ? n(t.androidTablet() ? "android tablet" : "android mobile") : t.blackberry() ? n(t.blackberryTablet() ? "blackberry tablet" : "blackberry mobile") : t.windows() ? n(t.windowsTablet() ? "windows tablet" : t.windowsPhone() ? "windows mobile" : "desktop") : t.fxos() ? n(t.fxosTablet() ? "fxos tablet" : "fxos mobile") : t.meego() ? n("meego mobile") : t.nodeWebkit() ? n("node-webkit") : t.television() ? n("television") : t.desktop() && n("desktop"), t.cordova() && n("cordova"), i = function () {
        t.landscape() ? (s("portrait"), n("landscape")) : (s("landscape"), n("portrait"))
    }, l = Object.prototype.hasOwnProperty.call(window, "onorientationchange") ? "orientationchange" : "resize", window.addEventListener ? window.addEventListener(l, i, !1) : window.attachEvent ? window.attachEvent(l, i) : window[l] = i, i(), "function" == typeof define && "object" == typeof define.amd && define.amd ? define(function () {
            return t
        }) : "undefined" != typeof module && module.exports ? module.exports = t : window.device = t
}).call(this);


/*!
 * jQuery || Zepto Parallax Plugin
 * @author Matthew Wagerfield - @wagerfield
 * @description Creates a parallax effect between an array of layers,
 *              driving the motion from the gyroscope output of a smartdevice.
 *              If no gyroscope is available, the cursor position is used.
 * --------------------------------------------------
 */
!function (t, e, i, s) {
    "use strict";
    function o(e, i) {
        this.element = e, this.$context = t(e).data("api", this), this.$layers = this.$context.find(".layer");
        var s = {
            calibrateX: this.$context.data("calibrate-x") || null,
            calibrateY: this.$context.data("calibrate-y") || null,
            invertX: this.$context.data("invert-x") || null,
            invertY: this.$context.data("invert-y") || null,
            limitX: parseFloat(this.$context.data("limit-x")) || null,
            limitY: parseFloat(this.$context.data("limit-y")) || null,
            scalarX: parseFloat(this.$context.data("scalar-x")) || null,
            scalarY: parseFloat(this.$context.data("scalar-y")) || null,
            frictionX: parseFloat(this.$context.data("friction-x")) || null,
            frictionY: parseFloat(this.$context.data("friction-y")) || null,
            originX: parseFloat(this.$context.data("origin-x")) || null,
            originY: parseFloat(this.$context.data("origin-y")) || null
        };
        for (var o in s)null === s[o] && delete s[o];
        t.extend(this, a, i, s), this.calibrationTimer = null, this.calibrationFlag = !0, this.enabled = !1, this.depths = [], this.raf = null, this.bounds = null, this.ex = 0, this.ey = 0, this.ew = 0, this.eh = 0, this.ecx = 0, this.ecy = 0, this.erx = 0, this.ery = 0, this.cx = 0, this.cy = 0, this.ix = 0, this.iy = 0, this.mx = 0, this.my = 0, this.vx = 0, this.vy = 0, this.onMouseMove = this.onMouseMove.bind(this), this.onDeviceOrientation = this.onDeviceOrientation.bind(this), this.onOrientationTimer = this.onOrientationTimer.bind(this), this.onCalibrationTimer = this.onCalibrationTimer.bind(this), this.onAnimationFrame = this.onAnimationFrame.bind(this), this.onWindowResize = this.onWindowResize.bind(this), this.initialise()
    }

    var n = "parallax", r = 30, a = {
        relativeInput: !1,
        clipRelativeInput: !1,
        calibrationThreshold: 100,
        calibrationDelay: 500,
        supportDelay: 500,
        calibrateX: !1,
        calibrateY: !0,
        invertX: !0,
        invertY: !0,
        limitX: !1,
        limitY: !1,
        scalarX: 10,
        scalarY: 10,
        frictionX: .1,
        frictionY: .1,
        originX: .5,
        originY: .5
    };
    o.prototype.transformSupport = function (t) {
        for (var o = i.createElement("div"), n = !1, r = null, a = !1, l = null, h = null, c = 0, d = this.vendors.length; d > c; c++)if (null !== this.vendors[c] ? (l = this.vendors[c][0] + "transform", h = this.vendors[c][1] + "Transform") : (l = "transform", h = "transform"), o.style[h] !== s) {
            n = !0;
            break
        }
        switch (t) {
            case"2D":
                a = n;
                break;
            case"3D":
                if (n) {
                    var u = i.body || i.createElement("body"), p = i.documentElement, m = p.style.overflow;
                    i.body || (p.style.overflow = "hidden", p.appendChild(u), u.style.overflow = "hidden", u.style.background = ""), u.appendChild(o), o.style[h] = "translate3d(1px,1px,1px)", r = e.getComputedStyle(o).getPropertyValue(l), a = r !== s && r.length > 0 && "none" !== r, p.style.overflow = m, u.removeChild(o)
                }
        }
        return a
    }, o.prototype.ww = null, o.prototype.wh = null, o.prototype.wcx = null, o.prototype.wcy = null, o.prototype.wrx = null, o.prototype.wry = null, o.prototype.portrait = null, o.prototype.desktop = !navigator.userAgent.match(/(iPhone|iPod|iPad|Android|BlackBerry|BB10|mobi|tablet|opera mini|nexus 7)/i), o.prototype.vendors = [null, ["-webkit-", "webkit"], ["-moz-", "Moz"], ["-o-", "O"], ["-ms-", "ms"]], o.prototype.motionSupport = !!e.DeviceMotionEvent, o.prototype.orientationSupport = !!e.DeviceOrientationEvent, o.prototype.orientationStatus = 0, o.prototype.transform2DSupport = o.prototype.transformSupport("2D"), o.prototype.transform3DSupport = o.prototype.transformSupport("3D"), o.prototype.propertyCache = {}, o.prototype.initialise = function () {
        "static" === this.$context.css("position") && this.$context.css({position: "relative"}), this.accelerate(this.$context), this.updateLayers(), this.updateDimensions(), this.enable(), this.queueCalibration(this.calibrationDelay)
    }, o.prototype.updateLayers = function () {
        this.$layers = this.$context.find(".layer"), this.depths = [], this.$layers.css({
            position: "absolute",
            display: "block",
            left: 0,
            top: 0
        }), this.$layers.first().css({position: "relative"}), this.accelerate(this.$layers), this.$layers.each(t.proxy(function (e, i) {
            this.depths.push(t(i).data("depth") || 0)
        }, this))
    }, o.prototype.updateDimensions = function () {
        this.ww = e.innerWidth, this.wh = e.innerHeight, this.wcx = this.ww * this.originX, this.wcy = this.wh * this.originY, this.wrx = Math.max(this.wcx, this.ww - this.wcx), this.wry = Math.max(this.wcy, this.wh - this.wcy)
    }, o.prototype.updateBounds = function () {
        this.bounds = this.element.getBoundingClientRect(), this.ex = this.bounds.left, this.ey = this.bounds.top, this.ew = this.bounds.width, this.eh = this.bounds.height, this.ecx = this.ew * this.originX, this.ecy = this.eh * this.originY, this.erx = Math.max(this.ecx, this.ew - this.ecx), this.ery = Math.max(this.ecy, this.eh - this.ecy)
    }, o.prototype.queueCalibration = function (t) {
        clearTimeout(this.calibrationTimer), this.calibrationTimer = setTimeout(this.onCalibrationTimer, t)
    }, o.prototype.enable = function () {
        this.enabled || (this.enabled = !0, this.orientationSupport ? (this.portrait = null, e.addEventListener("deviceorientation", this.onDeviceOrientation), setTimeout(this.onOrientationTimer, this.supportDelay)) : (this.cx = 0, this.cy = 0, this.portrait = !1, e.addEventListener("mousemove", this.onMouseMove)), e.addEventListener("resize", this.onWindowResize), this.raf = requestAnimationFrame(this.onAnimationFrame))
    }, o.prototype.disable = function () {
        this.enabled && (this.enabled = !1, this.orientationSupport ? e.removeEventListener("deviceorientation", this.onDeviceOrientation) : e.removeEventListener("mousemove", this.onMouseMove), e.removeEventListener("resize", this.onWindowResize), cancelAnimationFrame(this.raf))
    }, o.prototype.calibrate = function (t, e) {
        this.calibrateX = t === s ? this.calibrateX : t, this.calibrateY = e === s ? this.calibrateY : e
    }, o.prototype.invert = function (t, e) {
        this.invertX = t === s ? this.invertX : t, this.invertY = e === s ? this.invertY : e
    }, o.prototype.friction = function (t, e) {
        this.frictionX = t === s ? this.frictionX : t, this.frictionY = e === s ? this.frictionY : e
    }, o.prototype.scalar = function (t, e) {
        this.scalarX = t === s ? this.scalarX : t, this.scalarY = e === s ? this.scalarY : e
    }, o.prototype.limit = function (t, e) {
        this.limitX = t === s ? this.limitX : t, this.limitY = e === s ? this.limitY : e
    }, o.prototype.origin = function (t, e) {
        this.originX = t === s ? this.originX : t, this.originY = e === s ? this.originY : e
    }, o.prototype.clamp = function (t, e, i) {
        return t = Math.max(t, e), t = Math.min(t, i)
    }, o.prototype.css = function (e, i, o) {
        var n = this.propertyCache[i];
        if (!n)for (var r = 0, a = this.vendors.length; a > r; r++)if (n = null !== this.vendors[r] ? t.camelCase(this.vendors[r][1] + "-" + i) : i, e.style[n] !== s) {
            this.propertyCache[i] = n;
            break
        }
        e.style[n] = o
    }, o.prototype.accelerate = function (t) {
        for (var e = 0, i = t.length; i > e; e++) {
            var s = t[e];
            this.css(s, "transform", "translate3d(0,0,0)"), this.css(s, "transform-style", "preserve-3d"), this.css(s, "backface-visibility", "hidden")
        }
    }, o.prototype.setPosition = function (t, e, i) {
        e += "px", i += "px", this.transform3DSupport ? this.css(t, "transform", "translate3d(" + e + "," + i + ",0)") : this.transform2DSupport ? this.css(t, "transform", "translate(" + e + "," + i + ")") : (t.style.left = e, t.style.top = i)
    }, o.prototype.onOrientationTimer = function (t) {
        this.orientationSupport && 0 === this.orientationStatus && (this.disable(), this.orientationSupport = !1, this.enable())
    }, o.prototype.onCalibrationTimer = function (t) {
        this.calibrationFlag = !0
    }, o.prototype.onWindowResize = function (t) {
        this.updateDimensions()
    }, o.prototype.onAnimationFrame = function () {
        this.updateBounds();
        var t = this.ix - this.cx, e = this.iy - this.cy;
        (Math.abs(t) > this.calibrationThreshold || Math.abs(e) > this.calibrationThreshold) && this.queueCalibration(0), this.portrait ? (this.mx = this.calibrateX ? e : this.iy, this.my = this.calibrateY ? t : this.ix) : (this.mx = this.calibrateX ? t : this.ix, this.my = this.calibrateY ? e : this.iy), this.mx *= this.ew * (this.scalarX / 100), this.my *= this.eh * (this.scalarY / 100), isNaN(parseFloat(this.limitX)) || (this.mx = this.clamp(this.mx, -this.limitX, this.limitX)), isNaN(parseFloat(this.limitY)) || (this.my = this.clamp(this.my, -this.limitY, this.limitY)), this.vx += (this.mx - this.vx) * this.frictionX, this.vy += (this.my - this.vy) * this.frictionY;
        for (var i = 0, s = this.$layers.length; s > i; i++) {
            var o = this.depths[i], n = this.$layers[i], r = this.vx * o * (this.invertX ? -1 : 1), a = this.vy * o * (this.invertY ? -1 : 1);
            this.setPosition(n, r, a)
        }
        this.raf = requestAnimationFrame(this.onAnimationFrame)
    }, o.prototype.onDeviceOrientation = function (t) {
        if (!this.desktop && null !== t.beta && null !== t.gamma) {
            this.orientationStatus = 1;
            var i                  = (t.beta || 0) / r, s = (t.gamma || 0) / r, o = e.innerHeight > e.innerWidth;
            this.portrait !== o && (this.portrait = o, this.calibrationFlag = !0), this.calibrationFlag && (this.calibrationFlag = !1, this.cx = i, this.cy = s), this.ix = i, this.iy = s
        }
    }, o.prototype.onMouseMove = function (t) {
        var e = t.clientX, i = t.clientY;
        !this.orientationSupport && this.relativeInput ? (this.clipRelativeInput && (e = Math.max(e, this.ex), e = Math.min(e, this.ex + this.ew), i = Math.max(i, this.ey), i = Math.min(i, this.ey + this.eh)), this.ix = (e - this.ex - this.ecx) / this.erx, this.iy = (i - this.ey - this.ecy) / this.ery) : (this.ix = (e - this.wcx) / this.wrx, this.iy = (i - this.wcy) / this.wry)
    };
    var l   = {
        enable: o.prototype.enable,
        disable: o.prototype.disable,
        updateLayers: o.prototype.updateLayers,
        calibrate: o.prototype.calibrate,
        friction: o.prototype.friction,
        invert: o.prototype.invert,
        scalar: o.prototype.scalar,
        limit: o.prototype.limit,
        origin: o.prototype.origin
    };
    t.fn[n] = function (e) {
        var i = arguments;
        return this.each(function () {
            var s = t(this), r = s.data(n);
            r || (r = new o(this, e), s.data(n, r)), l[e] && r[e].apply(r, Array.prototype.slice.call(i, 1))
        })
    }
}(window.jQuery || window.Zepto, window, document), function () {
    for (var t = 0, e = ["ms", "moz", "webkit", "o"], i = 0; i < e.length && !window.requestAnimationFrame; ++i)window.requestAnimationFrame = window[e[i] + "RequestAnimationFrame"], window.cancelAnimationFrame = window[e[i] + "CancelAnimationFrame"] || window[e[i] + "CancelRequestAnimationFrame"];
    window.requestAnimationFrame || (window.requestAnimationFrame = function (e, i) {
        var s = (new Date).getTime(), o = Math.max(0, 16 - (s - t)), n = window.setTimeout(function () {
            e(s + o)
        }, o);
        return t = s + o, n
    }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (t) {
        clearTimeout(t)
    })
}();
/*!
 * jQuery Validation Plugin 1.11.1
 *
 * http://bassistance.de/jquery-plugins/jquery-plugin-validation/
 * http://docs.jquery.com/Plugins/Validation
 *
 * Copyright 2013 Jörn Zaefferer
 * Released under the MIT license:
 * http://www.opensource.org/licenses/mit-license.php
 * --------------------------------------------------
 */
!function (t) {
    t.extend(t.fn, {
        validate: function (e) {
            if (!this.length)return void(e && e.debug && window.console && console.warn("Nothing selected, can't validate, returning nothing."));
            var r = t.data(this[0], "validator");
            return r ? r : (this.attr("novalidate", "novalidate"), r = new t.validator(e, this[0]), t.data(this[0], "validator", r), r.settings.onsubmit && (this.validateDelegate(":submit", "click", function (e) {
                    r.settings.submitHandler && (r.submitButton = e.target), t(e.target).hasClass("cancel") && (r.cancelSubmit = !0), void 0 !== t(e.target).attr("formnovalidate") && (r.cancelSubmit = !0)
                }), this.submit(function (e) {
                    function a() {
                        var a;
                        return r.settings.submitHandler ? (r.submitButton && (a = t("<input type='hidden'/>").attr("name", r.submitButton.name).val(t(r.submitButton).val()).appendTo(r.currentForm)), r.settings.submitHandler.call(r, r.currentForm, e), r.submitButton && a.remove(), !1) : !0
                    }

                    return r.settings.debug && e.preventDefault(), r.cancelSubmit ? (r.cancelSubmit = !1, a()) : r.form() ? r.pendingRequest ? (r.formSubmitted = !0, !1) : a() : (r.focusInvalid(), !1)
                })), r)
        }, valid: function () {
            if (t(this[0]).is("form"))return this.validate().form();
            var e = !0, r = t(this[0].form).validate();
            return this.each(function () {
                e = e && r.element(this)
            }), e
        }, removeAttrs: function (e) {
            var r = {}, a = this;
            return t.each(e.split(/\s/), function (t, e) {
                r[e] = a.attr(e), a.removeAttr(e)
            }), r
        }, rules: function (e, r) {
            var a = this[0];
            if (e) {
                var i = t.data(a.form, "validator").settings, n = i.rules, s = t.validator.staticRules(a);
                switch (e) {
                    case"add":
                        t.extend(s, t.validator.normalizeRule(r)), delete s.messages, n[a.name] = s, r.messages && (i.messages[a.name] = t.extend(i.messages[a.name], r.messages));
                        break;
                    case"remove":
                        if (!r)return delete n[a.name], s;
                        var o = {};
                        return t.each(r.split(/\s/), function (t, e) {
                            o[e] = s[e], delete s[e]
                        }), o
                }
            }
            var u = t.validator.normalizeRules(t.extend({}, t.validator.classRules(a), t.validator.attributeRules(a), t.validator.dataRules(a), t.validator.staticRules(a)), a);
            if (u.required) {
                var l = u.required;
                delete u.required, u = t.extend({required: l}, u)
            }
            return u
        }
    }), t.extend(t.expr[":"], {
        blank: function (e) {
            return !t.trim("" + t(e).val())
        }, filled: function (e) {
            return !!t.trim("" + t(e).val())
        }, unchecked: function (e) {
            return !t(e).prop("checked")
        }
    }), t.validator = function (e, r) {
        this.settings = t.extend(!0, {}, t.validator.defaults, e), this.currentForm = r, this.init()
    }, t.validator.format = function (e, r) {
        return 1 === arguments.length ? function () {
                var r = t.makeArray(arguments);
                return r.unshift(e), t.validator.format.apply(this, r)
            } : (arguments.length > 2 && r.constructor !== Array && (r = t.makeArray(arguments).slice(1)), r.constructor !== Array && (r = [r]), t.each(r, function (t, r) {
                e = e.replace(new RegExp("\\{" + t + "\\}", "g"), function () {
                    return r
                })
            }), e)
    }, t.extend(t.validator, {
        defaults: {
            messages: {},
            groups: {},
            rules: {},
            errorClass: "error",
            validClass: "valid",
            errorElement: "label",
            focusInvalid: !0,
            errorContainer: t([]),
            errorLabelContainer: t([]),
            onsubmit: !0,
            ignore: ":hidden",
            ignoreTitle: !1,
            onfocusin: function (t, e) {
                this.lastActive = t, this.settings.focusCleanup && !this.blockFocusCleanup && (this.settings.unhighlight && this.settings.unhighlight.call(this, t, this.settings.errorClass, this.settings.validClass), this.addWrapper(this.errorsFor(t)).hide())
            },
            onfocusout: function (t, e) {
                this.checkable(t) || !(t.name in this.submitted) && this.optional(t) || this.element(t)
            },
            onkeyup: function (t, e) {
                (9 !== e.which || "" !== this.elementValue(t)) && (t.name in this.submitted || t === this.lastElement) && this.element(t)
            },
            onclick: function (t, e) {
                t.name in this.submitted ? this.element(t) : t.parentNode.name in this.submitted && this.element(t.parentNode)
            },
            highlight: function (e, r, a) {
                "radio" === e.type ? this.findByName(e.name).addClass(r).removeClass(a) : t(e).addClass(r).removeClass(a)
            },
            unhighlight: function (e, r, a) {
                "radio" === e.type ? this.findByName(e.name).removeClass(r).addClass(a) : t(e).removeClass(r).addClass(a)
            }
        },
        setDefaults: function (e) {
            t.extend(t.validator.defaults, e)
        },
        messages: {
            required: "This field is required.",
            remote: "Please fix this field.",
            email: "Please enter a valid email address.",
            url: "Please enter a valid URL.",
            date: "Please enter a valid date.",
            dateISO: "Please enter a valid date (ISO).",
            number: "Please enter a valid number.",
            digits: "Please enter only digits.",
            creditcard: "Please enter a valid credit card number.",
            equalTo: "Please enter the same value again.",
            maxlength: t.validator.format("Please enter no more than {0} characters."),
            minlength: t.validator.format("Please enter at least {0} characters."),
            rangelength: t.validator.format("Please enter a value between {0} and {1} characters long."),
            range: t.validator.format("Please enter a value between {0} and {1}."),
            max: t.validator.format("Please enter a value less than or equal to {0}."),
            min: t.validator.format("Please enter a value greater than or equal to {0}.")
        },
        autoCreateRanges: !1,
        prototype: {
            init: function () {
                function e(e) {
                    var r = t.data(this[0].form, "validator"), a = "on" + e.type.replace(/^validate/, "");
                    r.settings[a] && r.settings[a].call(r, this[0], e)
                }

                this.labelContainer = t(this.settings.errorLabelContainer), this.errorContext = this.labelContainer.length && this.labelContainer || t(this.currentForm), this.containers = t(this.settings.errorContainer).add(this.settings.errorLabelContainer), this.submitted = {}, this.valueCache = {}, this.pendingRequest = 0, this.pending = {}, this.invalid = {}, this.reset();
                var r = this.groups = {};
                t.each(this.settings.groups, function (e, a) {
                    "string" == typeof a && (a = a.split(/\s/)), t.each(a, function (t, a) {
                        r[a] = e
                    })
                });
                var a = this.settings.rules;
                t.each(a, function (e, r) {
                    a[e] = t.validator.normalizeRule(r)
                }), t(this.currentForm).validateDelegate(":text, [type='password'], [type='file'], select, textarea, [type='number'], [type='search'] ,[type='tel'], [type='url'], [type='email'], [type='datetime'], [type='date'], [type='month'], [type='week'], [type='time'], [type='datetime-local'], [type='range'], [type='color'] ", "focusin focusout keyup", e).validateDelegate("[type='radio'], [type='checkbox'], select, option", "click", e), this.settings.invalidHandler && t(this.currentForm).bind("invalid-form.validate", this.settings.invalidHandler)
            }, form: function () {
                return this.checkForm(), t.extend(this.submitted, this.errorMap), this.invalid = t.extend({}, this.errorMap), this.valid() || t(this.currentForm).triggerHandler("invalid-form", [this]), this.showErrors(), this.valid()
            }, checkForm: function () {
                this.prepareForm();
                for (var t = 0, e = this.currentElements = this.elements(); e[t]; t++)this.check(e[t]);
                return this.valid()
            }, element: function (e) {
                e = this.validationTargetFor(this.clean(e)), this.lastElement = e, this.prepareElement(e), this.currentElements = t(e);
                var r = this.check(e) !== !1;
                return r ? delete this.invalid[e.name] : this.invalid[e.name] = !0, this.numberOfInvalids() || (this.toHide = this.toHide.add(this.containers)), this.showErrors(), r
            }, showErrors: function (e) {
                if (e) {
                    t.extend(this.errorMap, e), this.errorList = [];
                    for (var r in e)this.errorList.push({message: e[r], element: this.findByName(r)[0]});
                    this.successList = t.grep(this.successList, function (t) {
                        return !(t.name in e)
                    })
                }
                this.settings.showErrors ? this.settings.showErrors.call(this, this.errorMap, this.errorList) : this.defaultShowErrors()
            }, resetForm: function () {
                t.fn.resetForm && t(this.currentForm).resetForm(), this.submitted = {}, this.lastElement = null, this.prepareForm(), this.hideErrors(), this.elements().removeClass(this.settings.errorClass).removeData("previousValue")
            }, numberOfInvalids: function () {
                return this.objectLength(this.invalid)
            }, objectLength: function (t) {
                var e = 0;
                for (var r in t)e++;
                return e
            }, hideErrors: function () {
                this.addWrapper(this.toHide).hide()
            }, valid: function () {
                return 0 === this.size()
            }, size: function () {
                return this.errorList.length
            }, focusInvalid: function () {
                if (this.settings.focusInvalid)try {
                    t(this.findLastActive() || this.errorList.length && this.errorList[0].element || []).filter(":visible").focus().trigger("focusin")
                } catch (e) {
                }
            }, findLastActive: function () {
                var e = this.lastActive;
                return e && 1 === t.grep(this.errorList, function (t) {
                        return t.element.name === e.name
                    }).length && e
            }, elements: function () {
                var e = this, r = {};
                return t(this.currentForm).find("input, select, textarea").not(":submit, :reset, :image, [disabled]").not(this.settings.ignore).filter(function () {
                    return !this.name && e.settings.debug && window.console && console.error("%o has no name assigned", this), this.name in r || !e.objectLength(t(this).rules()) ? !1 : (r[this.name] = !0, !0)
                })
            }, clean: function (e) {
                return t(e)[0]
            }, errors: function () {
                var e = this.settings.errorClass.replace(" ", ".");
                return t(this.settings.errorElement + "." + e, this.errorContext)
            }, reset: function () {
                this.successList = [], this.errorList = [], this.errorMap = {}, this.toShow = t([]), this.toHide = t([]), this.currentElements = t([])
            }, prepareForm: function () {
                this.reset(), this.toHide = this.errors().add(this.containers)
            }, prepareElement: function (t) {
                this.reset(), this.toHide = this.errorsFor(t)
            }, elementValue: function (e) {
                var r = t(e).attr("type"), a = t(e).val();
                return "radio" === r || "checkbox" === r ? t("input[name='" + t(e).attr("name") + "']:checked").val() : "string" == typeof a ? a.replace(/\r/g, "") : a
            }, check: function (e) {
                e        = this.validationTargetFor(this.clean(e));
                var r, a = t(e).rules(), i = !1, n = this.elementValue(e);
                for (var s in a) {
                    var o = {method: s, parameters: a[s]};
                    try {
                        if (r = t.validator.methods[s].call(this, n, e, o.parameters), "dependency-mismatch" === r) {
                            i = !0;
                            continue
                        }
                        if (i = !1, "pending" === r)return void(this.toHide = this.toHide.not(this.errorsFor(e)));
                        if (!r)return this.formatAndAdd(e, o), !1
                    } catch (u) {
                        throw this.settings.debug && window.console && console.log("Exception occurred when checking element " + e.id + ", check the '" + o.method + "' method.", u), u
                    }
                }
                return i ? void 0 : (this.objectLength(a) && this.successList.push(e), !0)
            }, customDataMessage: function (e, r) {
                return t(e).data("msg-" + r.toLowerCase()) || e.attributes && t(e).attr("data-msg-" + r.toLowerCase())
            }, customMessage: function (t, e) {
                var r = this.settings.messages[t];
                return r && (r.constructor === String ? r : r[e])
            }, findDefined: function () {
                for (var t = 0; t < arguments.length; t++)if (void 0 !== arguments[t])return arguments[t];
                return void 0
            }, defaultMessage: function (e, r) {
                return this.findDefined(this.customMessage(e.name, r), this.customDataMessage(e, r), !this.settings.ignoreTitle && e.title || void 0, t.validator.messages[r], "<strong>Warning: No message defined for " + e.name + "</strong>")
            }, formatAndAdd: function (e, r) {
                var a = this.defaultMessage(e, r.method), i = /\$?\{(\d+)\}/g;
                "function" == typeof a ? a = a.call(this, r.parameters, e) : i.test(a) && (a = t.validator.format(a.replace(i, "{$1}"), r.parameters)), this.errorList.push({
                    message: a,
                    element: e
                }), this.errorMap[e.name] = a, this.submitted[e.name] = a
            }, addWrapper: function (t) {
                return this.settings.wrapper && (t = t.add(t.parent(this.settings.wrapper))), t
            }, defaultShowErrors: function () {
                var t, e;
                for (t = 0; this.errorList[t]; t++) {
                    var r = this.errorList[t];
                    this.settings.highlight && this.settings.highlight.call(this, r.element, this.settings.errorClass, this.settings.validClass), this.showLabel(r.element, r.message)
                }
                if (this.errorList.length && (this.toShow = this.toShow.add(this.containers)), this.settings.success)for (t = 0; this.successList[t]; t++)this.showLabel(this.successList[t]);
                if (this.settings.unhighlight)for (t = 0, e = this.validElements(); e[t]; t++)this.settings.unhighlight.call(this, e[t], this.settings.errorClass, this.settings.validClass);
                this.toHide = this.toHide.not(this.toShow), this.hideErrors(), this.addWrapper(this.toShow).show()
            }, validElements: function () {
                return this.currentElements.not(this.invalidElements())
            }, invalidElements: function () {
                return t(this.errorList).map(function () {
                    return this.element
                })
            }, showLabel: function (e, r) {
                var a = this.errorsFor(e);
                a.length ? (a.removeClass(this.settings.validClass).addClass(this.settings.errorClass), a.html(r)) : (a = t("<" + this.settings.errorElement + ">").attr("for", this.idOrName(e)).addClass(this.settings.errorClass).html(r || ""), this.settings.wrapper && (a = a.hide().show().wrap("<" + this.settings.wrapper + "/>").parent()), this.labelContainer.append(a).length || (this.settings.errorPlacement ? this.settings.errorPlacement(a, t(e)) : a.insertAfter(e))), !r && this.settings.success && (a.text(""), "string" == typeof this.settings.success ? a.addClass(this.settings.success) : this.settings.success(a, e)), this.toShow = this.toShow.add(a)
            }, errorsFor: function (e) {
                var r = this.idOrName(e);
                return this.errors().filter(function () {
                    return t(this).attr("for") === r
                })
            }, idOrName: function (t) {
                return this.groups[t.name] || (this.checkable(t) ? t.name : t.id || t.name)
            }, validationTargetFor: function (t) {
                return this.checkable(t) && (t = this.findByName(t.name).not(this.settings.ignore)[0]), t
            }, checkable: function (t) {
                return /radio|checkbox/i.test(t.type)
            }, findByName: function (e) {
                return t(this.currentForm).find("[name='" + e + "']")
            }, getLength: function (e, r) {
                switch (r.nodeName.toLowerCase()) {
                    case"select":
                        return t("option:selected", r).length;
                    case"input":
                        if (this.checkable(r))return this.findByName(r.name).filter(":checked").length
                }
                return e.length
            }, depend: function (t, e) {
                return this.dependTypes[typeof t] ? this.dependTypes[typeof t](t, e) : !0
            }, dependTypes: {
                "boolean": function (t, e) {
                    return t
                }, string: function (e, r) {
                    return !!t(e, r.form).length
                }, "function": function (t, e) {
                    return t(e)
                }
            }, optional: function (e) {
                var r = this.elementValue(e);
                return !t.validator.methods.required.call(this, r, e) && "dependency-mismatch"
            }, startRequest: function (t) {
                this.pending[t.name] || (this.pendingRequest++, this.pending[t.name] = !0)
            }, stopRequest: function (e, r) {
                this.pendingRequest--, this.pendingRequest < 0 && (this.pendingRequest = 0), delete this.pending[e.name], r && 0 === this.pendingRequest && this.formSubmitted && this.form() ? (t(this.currentForm).submit(), this.formSubmitted = !1) : !r && 0 === this.pendingRequest && this.formSubmitted && (t(this.currentForm).triggerHandler("invalid-form", [this]), this.formSubmitted = !1)
            }, previousValue: function (e) {
                return t.data(e, "previousValue") || t.data(e, "previousValue", {
                        old: null,
                        valid: !0,
                        message: this.defaultMessage(e, "remote")
                    })
            }
        },
        classRuleSettings: {
            required: {required: !0},
            email: {email: !0},
            url: {url: !0},
            date: {date: !0},
            dateISO: {dateISO: !0},
            number: {number: !0},
            digits: {digits: !0},
            creditcard: {creditcard: !0}
        },
        addClassRules: function (e, r) {
            e.constructor === String ? this.classRuleSettings[e] = r : t.extend(this.classRuleSettings, e)
        },
        classRules: function (e) {
            var r = {}, a = t(e).attr("class");
            return a && t.each(a.split(" "), function () {
                this in t.validator.classRuleSettings && t.extend(r, t.validator.classRuleSettings[this])
            }), r
        },
        attributeRules: function (e) {
            var r = {}, a = t(e), i = a[0].getAttribute("type");
            for (var n in t.validator.methods) {
                var s;
                "required" === n ? (s = a.get(0).getAttribute(n), "" === s && (s = !0), s = !!s) : s = a.attr(n), /min|max/.test(n) && (null === i || /number|range|text/.test(i)) && (s = Number(s)), s ? r[n] = s : i === n && "range" !== i && (r[n] = !0)
            }
            return r.maxlength && /-1|2147483647|524288/.test(r.maxlength) && delete r.maxlength, r
        },
        dataRules: function (e) {
            var r, a, i = {}, n = t(e);
            for (r in t.validator.methods)a = n.data("rule-" + r.toLowerCase()), void 0 !== a && (i[r] = a);
            return i
        },
        staticRules: function (e) {
            var r = {}, a = t.data(e.form, "validator");
            return a.settings.rules && (r = t.validator.normalizeRule(a.settings.rules[e.name]) || {}), r
        },
        normalizeRules: function (e, r) {
            return t.each(e, function (a, i) {
                if (i === !1)return void delete e[a];
                if (i.param || i.depends) {
                    var n = !0;
                    switch (typeof i.depends) {
                        case"string":
                            n = !!t(i.depends, r.form).length;
                            break;
                        case"function":
                            n = i.depends.call(r, r)
                    }
                    n ? e[a] = void 0 !== i.param ? i.param : !0 : delete e[a]
                }
            }), t.each(e, function (a, i) {
                e[a] = t.isFunction(i) ? i(r) : i
            }), t.each(["minlength", "maxlength"], function () {
                e[this] && (e[this] = Number(e[this]))
            }), t.each(["rangelength", "range"], function () {
                var r;
                e[this] && (t.isArray(e[this]) ? e[this] = [Number(e[this][0]), Number(e[this][1])] : "string" == typeof e[this] && (r = e[this].split(/[\s,]+/), e[this] = [Number(r[0]), Number(r[1])]))
            }), t.validator.autoCreateRanges && (e.min && e.max && (e.range = [e.min, e.max], delete e.min, delete e.max), e.minlength && e.maxlength && (e.rangelength = [e.minlength, e.maxlength], delete e.minlength, delete e.maxlength)), e
        },
        normalizeRule: function (e) {
            if ("string" == typeof e) {
                var r = {};
                t.each(e.split(/\s/), function () {
                    r[this] = !0
                }), e = r
            }
            return e
        },
        addMethod: function (e, r, a) {
            t.validator.methods[e] = r, t.validator.messages[e] = void 0 !== a ? a : t.validator.messages[e], r.length < 3 && t.validator.addClassRules(e, t.validator.normalizeRule(e))
        },
        methods: {
            required: function (e, r, a) {
                if (!this.depend(a, r))return "dependency-mismatch";
                if ("select" === r.nodeName.toLowerCase()) {
                    var i = t(r).val();
                    return i && i.length > 0
                }
                return this.checkable(r) ? this.getLength(e, r) > 0 : t.trim(e).length > 0
            }, email: function (t, e) {
                return this.optional(e) || /^((([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+(\.([a-z]|\d|[!#\$%&'\*\+\-\/=\?\^_`{\|}~]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])+)*)|((\x22)((((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(([\x01-\x08\x0b\x0c\x0e-\x1f\x7f]|\x21|[\x23-\x5b]|[\x5d-\x7e]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(\\([\x01-\x09\x0b\x0c\x0d-\x7f]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))))*(((\x20|\x09)*(\x0d\x0a))?(\x20|\x09)+)?(\x22)))@((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))$/i.test(t)
            }, url: function (t, e) {
                return this.optional(e) || /^(https?|s?ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i.test(t)
            }, date: function (t, e) {
                return this.optional(e) || !/Invalid|NaN/.test(new Date(t).toString())
            }, dateISO: function (t, e) {
                return this.optional(e) || /^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}$/.test(t)
            }, number: function (t, e) {
                return this.optional(e) || /^-?(?:\d+|\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(t)
            }, digits: function (t, e) {
                return this.optional(e) || /^\d+$/.test(t)
            }, creditcard: function (t, e) {
                if (this.optional(e))return "dependency-mismatch";
                if (/[^0-9 \-]+/.test(t))return !1;
                var r = 0, a = 0, i = !1;
                t     = t.replace(/\D/g, "");
                for (var n = t.length - 1; n >= 0; n--) {
                    var s = t.charAt(n);
                    a = parseInt(s, 10), i && (a *= 2) > 9 && (a -= 9), r += a, i = !i
                }
                return r % 10 === 0
            }, minlength: function (e, r, a) {
                var i = t.isArray(e) ? e.length : this.getLength(t.trim(e), r);
                return this.optional(r) || i >= a
            }, maxlength: function (e, r, a) {
                var i = t.isArray(e) ? e.length : this.getLength(t.trim(e), r);
                return this.optional(r) || a >= i
            }, rangelength: function (e, r, a) {
                var i = t.isArray(e) ? e.length : this.getLength(t.trim(e), r);
                return this.optional(r) || i >= a[0] && i <= a[1]
            }, min: function (t, e, r) {
                return this.optional(e) || t >= r
            }, max: function (t, e, r) {
                return this.optional(e) || r >= t
            }, range: function (t, e, r) {
                return this.optional(e) || t >= r[0] && t <= r[1]
            }, equalTo: function (e, r, a) {
                var i = t(a);
                return this.settings.onfocusout && i.unbind(".validate-equalTo").bind("blur.validate-equalTo", function () {
                    t(r).valid()
                }), e === i.val()
            }, remote: function (e, r, a) {
                if (this.optional(r))return "dependency-mismatch";
                var i = this.previousValue(r);
                if (this.settings.messages[r.name] || (this.settings.messages[r.name] = {}), i.originalMessage = this.settings.messages[r.name].remote, this.settings.messages[r.name].remote = i.message, a = "string" == typeof a && {url: a} || a, i.old === e)return i.valid;
                i.old = e;
                var n = this;
                this.startRequest(r);
                var s = {};
                return s[r.name] = e, t.ajax(t.extend(!0, {
                    url: a,
                    mode: "abort",
                    port: "validate" + r.name,
                    dataType: "json",
                    data: s,
                    success: function (a) {
                        n.settings.messages[r.name].remote = i.originalMessage;
                        var s                              = a === !0 || "true" === a;
                        if (s) {
                            var o = n.formSubmitted;
                            n.prepareElement(r), n.formSubmitted = o, n.successList.push(r), delete n.invalid[r.name], n.showErrors()
                        } else {
                            var u = {}, l = a || n.defaultMessage(r, "remote");
                            u[r.name] = i.message = t.isFunction(l) ? l(e) : l, n.invalid[r.name] = !0, n.showErrors(u)
                        }
                        i.valid = s, n.stopRequest(r, s)
                    }
                }, a)), "pending"
            }
        }
    }), t.format = t.validator.format
}(jQuery), function (t) {
    var e = {};
    if (t.ajaxPrefilter) t.ajaxPrefilter(function (t, r, a) {
        var i = t.port;
        "abort" === t.mode && (e[i] && e[i].abort(), e[i] = a)
    }); else {
        var r  = t.ajax;
        t.ajax = function (a) {
            var i = ("mode" in a ? a : t.ajaxSettings).mode, n = ("port" in a ? a : t.ajaxSettings).port;
            return "abort" === i ? (e[n] && e[n].abort(), e[n] = r.apply(this, arguments), e[n]) : r.apply(this, arguments)
        }
    }
}(jQuery), function (t) {
    t.extend(t.fn, {
        validateDelegate: function (e, r, a) {
            return this.bind(r, function (r) {
                var i = t(r.target);
                return i.is(e) ? a.apply(i, arguments) : void 0
            })
        }
    })
}(jQuery);


/*!
 * jQuery Form Plugin
 * version: 3.51.0-2014.06.20
 * Requires jQuery v1.5 or later
 * Copyright (c) 2014 M. Alsup
 * Examples and documentation at: http://malsup.com/jquery/form/
 * Project repository: https://github.com/malsup/form
 * Dual licensed under the MIT and GPL licenses.
 * https://github.com/malsup/form#copyright-and-license
 * --------------------------------------------------
 */
!function (e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], e) : e("undefined" != typeof jQuery ? jQuery : window.Zepto)
}(function (e) {
    "use strict";
    function t(t) {
        var r = t.data;
        t.isDefaultPrevented() || (t.preventDefault(), e(t.target).ajaxSubmit(r))
    }

    function r(t) {
        var r = t.target, a = e(r);
        if (!a.is("[type=submit],[type=image]")) {
            var n = a.closest("[type=submit]");
            if (0 === n.length)return;
            r = n[0]
        }
        var i = this;
        if (i.clk = r, "image" == r.type)if (void 0 !== t.offsetX) i.clk_x = t.offsetX, i.clk_y = t.offsetY; else if ("function" == typeof e.fn.offset) {
            var o = a.offset();
            i.clk_x = t.pageX - o.left, i.clk_y = t.pageY - o.top
        } else i.clk_x = t.pageX - r.offsetLeft, i.clk_y = t.pageY - r.offsetTop;
        setTimeout(function () {
            i.clk = i.clk_x = i.clk_y = null
        }, 100)
    }

    function a() {
        if (e.fn.ajaxSubmit.debug) {
            var t = "[jquery.form] " + Array.prototype.join.call(arguments, "");
            window.console && window.console.log ? window.console.log(t) : window.opera && window.opera.postError && window.opera.postError(t)
        }
    }

    var n = {};
    n.fileapi = void 0 !== e("<input type='file'/>").get(0).files, n.formdata = void 0 !== window.FormData;
    var i = !!e.fn.prop;
    e.fn.attr2 = function () {
        if (!i)return this.attr.apply(this, arguments);
        var e = this.prop.apply(this, arguments);
        return e && e.jquery || "string" == typeof e ? e : this.attr.apply(this, arguments)
    }, e.fn.ajaxSubmit = function (t) {
        function r(r) {
            var a, n, i = e.param(r, t.traditional).split("&"), o = i.length, s = [];
            for (a = 0; o > a; a++)i[a] = i[a].replace(/\+/g, " "), n = i[a].split("="), s.push([decodeURIComponent(n[0]), decodeURIComponent(n[1])]);
            return s
        }

        function o(a) {
            for (var n = new FormData, i = 0; i < a.length; i++)n.append(a[i].name, a[i].value);
            if (t.extraData) {
                var o = r(t.extraData);
                for (i = 0; i < o.length; i++)o[i] && n.append(o[i][0], o[i][1])
            }
            t.data = null;
            var s  = e.extend(!0, {}, e.ajaxSettings, t, {
                contentType: !1,
                processData: !1,
                cache: !1,
                type: u || "POST"
            });
            t.uploadProgress && (s.xhr = function () {
                var r = e.ajaxSettings.xhr();
                return r.upload && r.upload.addEventListener("progress", function (e) {
                    var r = 0, a = e.loaded || e.position, n = e.total;
                    e.lengthComputable && (r = Math.ceil(a / n * 100)), t.uploadProgress(e, a, n, r)
                }, !1), r
            }), s.data = null;
            var c = s.beforeSend;
            return s.beforeSend = function (e, r) {
                t.formData ? r.data = t.formData : r.data = n, c && c.call(this, e, r)
            }, e.ajax(s)
        }

        function s(r) {
            function n(e) {
                var t = null;
                try {
                    e.contentWindow && (t = e.contentWindow.document)
                } catch (r) {
                    a("cannot get iframe.contentWindow document: " + r)
                }
                if (t)return t;
                try {
                    t = e.contentDocument ? e.contentDocument : e.document
                } catch (r) {
                    a("cannot get iframe.contentDocument: " + r), t = e.document
                }
                return t
            }

            function o() {
                function t() {
                    try {
                        var e = n(g).readyState;
                        a("state = " + e), e && "uninitialized" == e.toLowerCase() && setTimeout(t, 50)
                    } catch (r) {
                        a("Server abort: ", r, " (", r.name, ")"), s(k), j && clearTimeout(j), j = void 0
                    }
                }

                var r = f.attr2("target"), i = f.attr2("action"), o = "multipart/form-data", c = f.attr("enctype") || f.attr("encoding") || o;
                w.setAttribute("target", p), (!u || /post/i.test(u)) && w.setAttribute("method", "POST"), i != m.url && w.setAttribute("action", m.url), m.skipEncodingOverride || u && !/post/i.test(u) || f.attr({
                    encoding: "multipart/form-data",
                    enctype: "multipart/form-data"
                }), m.timeout && (j = setTimeout(function () {
                    T = !0, s(D)
                }, m.timeout));
                var l = [];
                try {
                    if (m.extraData)for (var d in m.extraData)m.extraData.hasOwnProperty(d) && l.push(e.isPlainObject(m.extraData[d]) && m.extraData[d].hasOwnProperty("name") && m.extraData[d].hasOwnProperty("value") ? e('<input type="hidden" name="' + m.extraData[d].name + '">').val(m.extraData[d].value).appendTo(w)[0] : e('<input type="hidden" name="' + d + '">').val(m.extraData[d]).appendTo(w)[0]);
                    m.iframeTarget || v.appendTo("body"), g.attachEvent ? g.attachEvent("onload", s) : g.addEventListener("load", s, !1), setTimeout(t, 15);
                    try {
                        w.submit()
                    } catch (h) {
                        var x = document.createElement("form").submit;
                        x.apply(w)
                    }
                } finally {
                    w.setAttribute("action", i), w.setAttribute("enctype", c), r ? w.setAttribute("target", r) : f.removeAttr("target"), e(l).remove()
                }
            }

            function s(t) {
                if (!x.aborted && !F) {
                    if (M = n(g), M || (a("cannot access response document"), t = k), t === D && x)return x.abort("timeout"), void S.reject(x, "timeout");
                    if (t == k && x)return x.abort("server abort"), void S.reject(x, "error", "server abort");
                    if (M && M.location.href != m.iframeSrc || T) {
                        g.detachEvent ? g.detachEvent("onload", s) : g.removeEventListener("load", s, !1);
                        var r, i = "success";
                        try {
                            if (T)throw"timeout";
                            var o = "xml" == m.dataType || M.XMLDocument || e.isXMLDoc(M);
                            if (a("isXml=" + o), !o && window.opera && (null === M.body || !M.body.innerHTML) && --O)return a("requeing onLoad callback, DOM not available"), void setTimeout(s, 250);
                            var u = M.body ? M.body : M.documentElement;
                            x.responseText = u ? u.innerHTML : null, x.responseXML = M.XMLDocument ? M.XMLDocument : M, o && (m.dataType = "xml"), x.getResponseHeader = function (e) {
                                var t = {"content-type": m.dataType};
                                return t[e.toLowerCase()]
                            }, u && (x.status = Number(u.getAttribute("status")) || x.status, x.statusText = u.getAttribute("statusText") || x.statusText);
                            var c = (m.dataType || "").toLowerCase(), l = /(json|script|text)/.test(c);
                            if (l || m.textarea) {
                                var f = M.getElementsByTagName("textarea")[0];
                                if (f) x.responseText = f.value, x.status = Number(f.getAttribute("status")) || x.status, x.statusText = f.getAttribute("statusText") || x.statusText; else if (l) {
                                    var p = M.getElementsByTagName("pre")[0], h = M.getElementsByTagName("body")[0];
                                    p ? x.responseText = p.textContent ? p.textContent : p.innerText : h && (x.responseText = h.textContent ? h.textContent : h.innerText)
                                }
                            } else"xml" == c && !x.responseXML && x.responseText && (x.responseXML = X(x.responseText));
                            try {
                                E = _(x, c, m)
                            } catch (y) {
                                i = "parsererror", x.error = r = y || i
                            }
                        } catch (y) {
                            a("error caught: ", y), i = "error", x.error = r = y || i
                        }
                        x.aborted && (a("upload aborted"), i = null), x.status && (i = x.status >= 200 && x.status < 300 || 304 === x.status ? "success" : "error"), "success" === i ? (m.success && m.success.call(m.context, E, "success", x), S.resolve(x.responseText, "success", x), d && e.event.trigger("ajaxSuccess", [x, m])) : i && (void 0 === r && (r = x.statusText), m.error && m.error.call(m.context, x, i, r), S.reject(x, "error", r), d && e.event.trigger("ajaxError", [x, m, r])), d && e.event.trigger("ajaxComplete", [x, m]), d && !--e.active && e.event.trigger("ajaxStop"), m.complete && m.complete.call(m.context, x, i), F = !0, m.timeout && clearTimeout(j), setTimeout(function () {
                            m.iframeTarget ? v.attr("src", m.iframeSrc) : v.remove(), x.responseXML = null
                        }, 100)
                    }
                }
            }

            var c, l, m, d, p, v, g, x, y, b, T, j, w = f[0], S = e.Deferred();
            if (S.abort = function (e) {
                    x.abort(e)
                }, r)for (l = 0; l < h.length; l++)c = e(h[l]), i ? c.prop("disabled", !1) : c.removeAttr("disabled");
            if (m = e.extend(!0, {}, e.ajaxSettings, t), m.context = m.context || m, p = "jqFormIO" + (new Date).getTime(), m.iframeTarget ? (v = e(m.iframeTarget), b = v.attr2("name"), b ? p = b : v.attr2("name", p)) : (v = e('<iframe name="' + p + '" src="' + m.iframeSrc + '" />'), v.css({
                        position: "absolute",
                        top: "-1000px",
                        left: "-1000px"
                    })), g = v[0], x = {
                    aborted: 0,
                    responseText: null,
                    responseXML: null,
                    status: 0,
                    statusText: "n/a",
                    getAllResponseHeaders: function () {
                    },
                    getResponseHeader: function () {
                    },
                    setRequestHeader: function () {
                    },
                    abort: function (t) {
                        var r = "timeout" === t ? "timeout" : "aborted";
                        a("aborting upload... " + r), this.aborted = 1;
                        try {
                            g.contentWindow.document.execCommand && g.contentWindow.document.execCommand("Stop")
                        } catch (n) {
                        }
                        v.attr("src", m.iframeSrc), x.error = r, m.error && m.error.call(m.context, x, r, t), d && e.event.trigger("ajaxError", [x, m, r]), m.complete && m.complete.call(m.context, x, r)
                    }
                }, d = m.global, d && 0 === e.active++ && e.event.trigger("ajaxStart"), d && e.event.trigger("ajaxSend", [x, m]), m.beforeSend && m.beforeSend.call(m.context, x, m) === !1)return m.global && e.active--, S.reject(), S;
            if (x.aborted)return S.reject(), S;
            y = w.clk, y && (b = y.name, b && !y.disabled && (m.extraData = m.extraData || {}, m.extraData[b] = y.value, "image" == y.type && (m.extraData[b + ".x"] = w.clk_x, m.extraData[b + ".y"] = w.clk_y)));
            var D = 1, k = 2, A = e("meta[name=csrf-token]").attr("content"), L = e("meta[name=csrf-param]").attr("content");
            L && A && (m.extraData = m.extraData || {}, m.extraData[L] = A), m.forceSync ? o() : setTimeout(o, 10);
            var E, M, F, O = 50, X = e.parseXML || function (e, t) {
                    return window.ActiveXObject ? (t = new ActiveXObject("Microsoft.XMLDOM"), t.async = "false", t.loadXML(e)) : t = (new DOMParser).parseFromString(e, "text/xml"), t && t.documentElement && "parsererror" != t.documentElement.nodeName ? t : null
                }, C       = e.parseJSON || function (e) {
                    return window.eval("(" + e + ")")
                }, _       = function (t, r, a) {
                var n = t.getResponseHeader("content-type") || "", i = "xml" === r || !r && n.indexOf("xml") >= 0, o = i ? t.responseXML : t.responseText;
                return i && "parsererror" === o.documentElement.nodeName && e.error && e.error("parsererror"), a && a.dataFilter && (o = a.dataFilter(o, r)), "string" == typeof o && ("json" === r || !r && n.indexOf("json") >= 0 ? o = C(o) : ("script" === r || !r && n.indexOf("javascript") >= 0) && e.globalEval(o)), o
            };
            return S
        }

        if (!this.length)return a("ajaxSubmit: skipping submit process - no element selected"), this;
        var u, c, l, f = this;
        "function" == typeof t ? t = {success: t} : void 0 === t && (t = {}), u = t.type || this.attr2("method"), c = t.url || this.attr2("action"), l = "string" == typeof c ? e.trim(c) : "", l = l || window.location.href || "", l && (l = (l.match(/^([^#]+)/) || [])[1]), t = e.extend(!0, {
            url: l,
            success: e.ajaxSettings.success,
            type: u || e.ajaxSettings.type,
            iframeSrc: /^https/i.test(window.location.href || "") ? "javascript:false" : "about:blank"
        }, t);
        var m = {};
        if (this.trigger("form-pre-serialize", [this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-pre-serialize trigger"), this;
        if (t.beforeSerialize && t.beforeSerialize(this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSerialize callback"), this;
        var d = t.traditional;
        void 0 === d && (d = e.ajaxSettings.traditional);
        var p, h = [], v = this.formToArray(t.semantic, h);
        if (t.data && (t.extraData = t.data, p = e.param(t.data, d)), t.beforeSubmit && t.beforeSubmit(v, this, t) === !1)return a("ajaxSubmit: submit aborted via beforeSubmit callback"), this;
        if (this.trigger("form-submit-validate", [v, this, t, m]), m.veto)return a("ajaxSubmit: submit vetoed via form-submit-validate trigger"), this;
        var g = e.param(v, d);
        p && (g = g ? g + "&" + p : p), "GET" == t.type.toUpperCase() ? (t.url += (t.url.indexOf("?") >= 0 ? "&" : "?") + g, t.data = null) : t.data = g;
        var x = [];
        if (t.resetForm && x.push(function () {
                f.resetForm()
            }), t.clearForm && x.push(function () {
                f.clearForm(t.includeHidden)
            }), !t.dataType && t.target) {
            var y = t.success || function () {
                };
            x.push(function (r) {
                var a = t.replaceTarget ? "replaceWith" : "html";
                e(t.target)[a](r).each(y, arguments)
            })
        } else t.success && x.push(t.success);
        if (t.success = function (e, r, a) {
                for (var n = t.context || this, i = 0, o = x.length; o > i; i++)x[i].apply(n, [e, r, a || f, f])
            }, t.error) {
            var b   = t.error;
            t.error = function (e, r, a) {
                var n = t.context || this;
                b.apply(n, [e, r, a, f])
            }
        }
        if (t.complete) {
            var T      = t.complete;
            t.complete = function (e, r) {
                var a = t.context || this;
                T.apply(a, [e, r, f])
            }
        }
        var j = e("input[type=file]:enabled", this).filter(function () {
            return "" !== e(this).val()
        }), w = j.length > 0, S = "multipart/form-data", D = f.attr("enctype") == S || f.attr("encoding") == S, k = n.fileapi && n.formdata;
        a("fileAPI :" + k);
        var A, L = (w || D) && !k;
        t.iframe !== !1 && (t.iframe || L) ? t.closeKeepAlive ? e.get(t.closeKeepAlive, function () {
                    A = s(v)
                }) : A = s(v) : A = (w || D) && k ? o(v) : e.ajax(t), f.removeData("jqxhr").data("jqxhr", A);
        for (var E = 0; E < h.length; E++)h[E] = null;
        return this.trigger("form-submit-notify", [this, t]), this
    }, e.fn.ajaxForm = function (n) {
        if (n = n || {}, n.delegation = n.delegation && e.isFunction(e.fn.on), !n.delegation && 0 === this.length) {
            var i = {s: this.selector, c: this.context};
            return !e.isReady && i.s ? (a("DOM not ready, queuing ajaxForm"), e(function () {
                    e(i.s, i.c).ajaxForm(n)
                }), this) : (a("terminating; zero elements found by selector" + (e.isReady ? "" : " (DOM not ready)")), this)
        }
        return n.delegation ? (e(document).off("submit.form-plugin", this.selector, t).off("click.form-plugin", this.selector, r).on("submit.form-plugin", this.selector, n, t).on("click.form-plugin", this.selector, n, r), this) : this.ajaxFormUnbind().bind("submit.form-plugin", n, t).bind("click.form-plugin", n, r)
    }, e.fn.ajaxFormUnbind = function () {
        return this.unbind("submit.form-plugin click.form-plugin")
    }, e.fn.formToArray = function (t, r) {
        var a = [];
        if (0 === this.length)return a;
        var i, o = this[0], s = this.attr("id"), u = t ? o.getElementsByTagName("*") : o.elements;
        if (u && !/MSIE [678]/.test(navigator.userAgent) && (u = e(u).get()), s && (i = e(':input[form="' + s + '"]').get(), i.length && (u = (u || []).concat(i))), !u || !u.length)return a;
        var c, l, f, m, d, p, h;
        for (c = 0, p = u.length; p > c; c++)if (d = u[c], f = d.name, f && !d.disabled)if (t && o.clk && "image" == d.type) o.clk == d && (a.push({
            name: f,
            value: e(d).val(),
            type: d.type
        }), a.push({name: f + ".x", value: o.clk_x}, {
            name: f + ".y",
            value: o.clk_y
        })); else if (m = e.fieldValue(d, !0), m && m.constructor == Array)for (r && r.push(d), l = 0, h = m.length; h > l; l++)a.push({
            name: f,
            value: m[l]
        }); else if (n.fileapi && "file" == d.type) {
            r && r.push(d);
            var v = d.files;
            if (v.length)for (l = 0; l < v.length; l++)a.push({
                name: f,
                value: v[l],
                type: d.type
            }); else a.push({name: f, value: "", type: d.type})
        } else null !== m && "undefined" != typeof m && (r && r.push(d), a.push({
            name: f,
            value: m,
            type: d.type,
            required: d.required
        }));
        if (!t && o.clk) {
            var g = e(o.clk), x = g[0];
            f = x.name, f && !x.disabled && "image" == x.type && (a.push({
                name: f,
                value: g.val()
            }), a.push({name: f + ".x", value: o.clk_x}, {name: f + ".y", value: o.clk_y}))
        }
        return a
    }, e.fn.formSerialize = function (t) {
        return e.param(this.formToArray(t))
    }, e.fn.fieldSerialize = function (t) {
        var r = [];
        return this.each(function () {
            var a = this.name;
            if (a) {
                var n = e.fieldValue(this, t);
                if (n && n.constructor == Array)for (var i = 0, o = n.length; o > i; i++)r.push({
                    name: a,
                    value: n[i]
                }); else null !== n && "undefined" != typeof n && r.push({name: this.name, value: n})
            }
        }), e.param(r)
    }, e.fn.fieldValue = function (t) {
        for (var r = [], a = 0, n = this.length; n > a; a++) {
            var i = this[a], o = e.fieldValue(i, t);
            null === o || "undefined" == typeof o || o.constructor == Array && !o.length || (o.constructor == Array ? e.merge(r, o) : r.push(o))
        }
        return r
    }, e.fieldValue = function (t, r) {
        var a = t.name, n = t.type, i = t.tagName.toLowerCase();
        if (void 0 === r && (r = !0), r && (!a || t.disabled || "reset" == n || "button" == n || ("checkbox" == n || "radio" == n) && !t.checked || ("submit" == n || "image" == n) && t.form && t.form.clk != t || "select" == i && -1 == t.selectedIndex))return null;
        if ("select" == i) {
            var o = t.selectedIndex;
            if (0 > o)return null;
            for (var s = [], u = t.options, c = "select-one" == n, l = c ? o + 1 : u.length, f = c ? o : 0; l > f; f++) {
                var m = u[f];
                if (m.selected) {
                    var d = m.value;
                    if (d || (d = m.attributes && m.attributes.value && !m.attributes.value.specified ? m.text : m.value), c)return d;
                    s.push(d)
                }
            }
            return s
        }
        return e(t).val()
    }, e.fn.clearForm = function (t) {
        return this.each(function () {
            e("input,select,textarea", this).clearFields(t)
        })
    }, e.fn.clearFields = e.fn.clearInputs = function (t) {
        var r = /^(?:color|date|datetime|email|month|number|password|range|search|tel|text|time|url|week)$/i;
        return this.each(function () {
            var a = this.type, n = this.tagName.toLowerCase();
            r.test(a) || "textarea" == n ? this.value = "" : "checkbox" == a || "radio" == a ? this.checked = !1 : "select" == n ? this.selectedIndex = -1 : "file" == a ? /MSIE/.test(navigator.userAgent) ? e(this).replaceWith(e(this).clone(!0)) : e(this).val("") : t && (t === !0 && /hidden/.test(a) || "string" == typeof t && e(this).is(t)) && (this.value = "")
        })
    }, e.fn.resetForm = function () {
        return this.each(function () {
            ("function" == typeof this.reset || "object" == typeof this.reset && !this.reset.nodeType) && this.reset()
        })
    }, e.fn.enable = function (e) {
        return void 0 === e && (e = !0), this.each(function () {
            this.disabled = !e
        })
    }, e.fn.selected = function (t) {
        return void 0 === t && (t = !0), this.each(function () {
            var r = this.type;
            if ("checkbox" == r || "radio" == r) this.checked = t; else if ("option" == this.tagName.toLowerCase()) {
                var a = e(this).parent("select");
                t && a[0] && "select-one" == a[0].type && a.find("option").selected(!1), this.selected = t
            }
        })
    }, e.fn.ajaxSubmit.debug = !1
});



/*!
 * jquery.mb.components
 * file: jquery.mb.YTPlayer.src.js
 * last modified: 01/07/15 19.35
 * Open Lab s.r.l., Florence - Italy
 * email: matteo@open-lab.com
 * site: http://pupunzi.com
 * http://open-lab.com
 * blog: http://pupunzi.open-lab.com
 * Q&A:  http://jquery.pupunzi.com
 * Licences: MIT, GPL
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 * Copyright (c) 2001-2015. Matteo Bicocchi (Pupunzi);
 * --------------------------------------------------
 */
function onYouTubeIframeAPIReady() {
    ytp.YTAPIReady || (ytp.YTAPIReady = !0, jQuery(document).trigger("YTAPIReady"))
}
function uncamel(e) {
    return e.replace(/([A-Z])/g, function (e) {
        return "-" + e.toLowerCase()
    })
}
function setUnit(e, t) {
    return "string" != typeof e || e.match(/^[\-0-9\.]+jQuery/) ? "" + e + t : e
}
function setFilter(e, t, o) {
    var i = uncamel(t), r = jQuery.browser.mozilla ? "" : jQuery.CSS.sfx;
    e[r + "filter"] = e[r + "filter"] || "", o = setUnit(o > jQuery.CSS.filters[t].max ? jQuery.CSS.filters[t].max : o, jQuery.CSS.filters[t].unit), e[r + "filter"] += i + "(" + o + ") ", delete e[t]
}
var ytp = ytp || {}, getYTPVideoID = function (e) {
    var t, o;
    return e.indexOf("youtu.be") > 0 ? (t = e.substr(e.lastIndexOf("/") + 1, e.length), o = t.indexOf("?list=") > 0 ? t.substr(t.lastIndexOf("="), t.length) : null, t = o ? t.substr(0, t.lastIndexOf("?")) : t) : e.indexOf("http") > -1 ? (t = e.match(/[\\?&]v=([^&#]*)/)[1], o = e.indexOf("list=") > 0 ? e.match(/[\\?&]list=([^&#]*)/)[1] : null) : (t = e.length > 15 ? null : e, o = t ? null : e), {
        videoID: t,
        playlistID: o
    }
};
!function (jQuery, ytp) {
    jQuery.mbYTPlayer = {
        name: "jquery.mb.YTPlayer",
        version: "2.9.4",
        build: "{{ build }}",
        author: "Matteo Bicocchi",
        apiKey: "",
        defaults: {
            containment: "body",
            ratio: "auto",
            videoURL: null,
            playlistURL: null,
            startAt: 0,
            stopAt: 0,
            autoPlay: !0,
            vol: 50,
            addRaster: !1,
            opacity: 1,
            quality: "default",
            mute: !1,
            loop: !0,
            showControls: !0,
            showAnnotations: !1,
            showYTLogo: !0,
            stopMovieOnBlur: !0,
            realfullscreen: !0,
            gaTrack: !0,
            optimizeDisplay: !0,
            onReady: function (e) {
            }
        },
        controls: {play: "P", pause: "p", mute: "M", unmute: "A", onlyYT: "O", showSite: "R", ytLogo: "Y"},
        locationProtocol: "https:",
        buildPlayer: function (options) {
            return this.each(function () {
                var YTPlayer = this, $YTPlayer = jQuery(YTPlayer);
                YTPlayer.loop = 0, YTPlayer.opt = {}, YTPlayer.state = {}, YTPlayer.filtersEnabled = !0, YTPlayer.filters = {
                    grayscale: {
                        value: 0,
                        unit: "%"
                    },
                    hue_rotate: {value: 0, unit: "deg"},
                    invert: {value: 0, unit: "%"},
                    opacity: {value: 0, unit: "%"},
                    saturate: {value: 0, unit: "%"},
                    sepia: {value: 0, unit: "%"},
                    brightness: {value: 0, unit: "%"},
                    contrast: {value: 0, unit: "%"},
                    blur: {value: 0, unit: "px"}
                }, $YTPlayer.addClass("mb_YTPlayer");
                var property = $YTPlayer.data("property") && "string" == typeof $YTPlayer.data("property") ? eval("(" + $YTPlayer.data("property") + ")") : $YTPlayer.data("property");
                "undefined" != typeof property && "undefined" != typeof property.vol && (property.vol = 0 === property.vol ? property.vol = 1 : property.vol), jQuery.extend(YTPlayer.opt, jQuery.mbYTPlayer.defaults, options, property), YTPlayer.hasChanged || (YTPlayer.defaultOpt = {}, jQuery.extend(YTPlayer.defaultOpt, jQuery.mbYTPlayer.defaults, options, property)), YTPlayer.isRetina = window.retina || window.devicePixelRatio > 1;
                var isIframe = function () {
                    var e = !1;
                    try {
                        self.location.href != top.location.href && (e = !0)
                    } catch (t) {
                        e = !0
                    }
                    return e
                };
                YTPlayer.canGoFullScreen = !(jQuery.browser.msie || jQuery.browser.opera || isIframe()), YTPlayer.canGoFullScreen || (YTPlayer.opt.realfullscreen = !1), $YTPlayer.attr("id") || $YTPlayer.attr("id", "video_" + (new Date).getTime());
                var playerID = "mbYTP_" + YTPlayer.id;
                YTPlayer.isAlone = !1, YTPlayer.hasFocus = !0;
                var videoID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).videoID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).videoID : !1, playlistID = this.opt.videoURL ? getYTPVideoID(this.opt.videoURL).playlistID : $YTPlayer.attr("href") ? getYTPVideoID($YTPlayer.attr("href")).playlistID : !1;
                YTPlayer.videoID = videoID, YTPlayer.playlistID = playlistID, YTPlayer.opt.showAnnotations = YTPlayer.opt.showAnnotations ? "0" : "3";
                var playerVars = {
                    autoplay: 0,
                    modestbranding: 1,
                    controls: 0,
                    showinfo: 0,
                    rel: 0,
                    enablejsapi: 1,
                    version: 3,
                    playerapiid: playerID,
                    origin: "*",
                    allowfullscreen: !0,
                    wmode: "transparent",
                    iv_load_policy: YTPlayer.opt.showAnnotations
                };
                document.createElement("video").canPlayType && jQuery.extend(playerVars, {html5: 1}), jQuery.browser.msie && jQuery.browser.version < 9 && (this.opt.opacity = 1);
                var playerBox = jQuery("<div/>").attr("id", playerID).addClass("playerBox"), overlay = jQuery("<div/>").css({
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }).addClass("YTPOverlay");
                if (YTPlayer.isSelf = "self" == YTPlayer.opt.containment, YTPlayer.defaultOpt.containment = YTPlayer.opt.containment = jQuery("self" == YTPlayer.opt.containment ? this : YTPlayer.opt.containment), YTPlayer.isBackground = "body" == YTPlayer.opt.containment.get(0).tagName.toLowerCase(), !YTPlayer.isBackground || !ytp.backgroundIsInited) {
                    var isPlayer = YTPlayer.opt.containment.is(jQuery(this));
                    if (YTPlayer.canPlayOnMobile = isPlayer && 0 === jQuery(this).children().length, isPlayer ? YTPlayer.isPlayer = !0 : $YTPlayer.hide(), jQuery.browser.mobile && !YTPlayer.canPlayOnMobile)return void $YTPlayer.remove();
                    var wrapper = jQuery("<div/>").addClass("mbYTP_wrapper").attr("id", "wrapper_" + playerID);
                    if (wrapper.css({
                            position: "absolute",
                            zIndex: 0,
                            minWidth: "100%",
                            minHeight: "100%",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            opacity: 0
                        }), playerBox.css({
                            position: "absolute",
                            zIndex: 0,
                            width: "100%",
                            height: "100%",
                            top: 0,
                            left: 0,
                            overflow: "hidden"
                        }), wrapper.append(playerBox), YTPlayer.opt.containment.children().not("script, style").each(function () {
                            "static" == jQuery(this).css("position") && jQuery(this).css("position", "relative")
                        }), YTPlayer.isBackground ? (jQuery("body").css({boxSizing: "border-box"}), wrapper.css({
                                position: "fixed",
                                top: 0,
                                left: 0,
                                zIndex: 0
                            }), $YTPlayer.hide()) : "static" == YTPlayer.opt.containment.css("position") && YTPlayer.opt.containment.css({position: "relative"}), YTPlayer.opt.containment.prepend(wrapper), YTPlayer.wrapper = wrapper, playerBox.css({opacity: 1}), jQuery.browser.mobile || (playerBox.after(overlay), YTPlayer.overlay = overlay), YTPlayer.isBackground || overlay.on("mouseenter", function () {
                            YTPlayer.controlBar && YTPlayer.controlBar.addClass("visible")
                        }).on("mouseleave", function () {
                            YTPlayer.controlBar && YTPlayer.controlBar.removeClass("visible")
                        }), ytp.YTAPIReady) setTimeout(function () {
                        jQuery(document).trigger("YTAPIReady")
                    }, 100); else {
                        jQuery("#YTAPI").remove();
                        var tag = jQuery("<script></script>").attr({
                            src: jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/iframe_api?v=" + jQuery.mbYTPlayer.version,
                            id: "YTAPI"
                        });
                        jQuery("head").prepend(tag)
                    }
                    jQuery(document).on("YTAPIReady", function () {
                        YTPlayer.isBackground && ytp.backgroundIsInited || YTPlayer.isInit || (YTPlayer.isBackground && (ytp.backgroundIsInited = !0), YTPlayer.opt.autoPlay = "undefined" == typeof YTPlayer.opt.autoPlay ? YTPlayer.isBackground ? !0 : !1 : YTPlayer.opt.autoPlay, YTPlayer.opt.vol = YTPlayer.opt.vol ? YTPlayer.opt.vol : 100, jQuery.mbYTPlayer.getDataFromAPI(YTPlayer), jQuery(YTPlayer).on("YTPChanged", function () {
                            if (!YTPlayer.isInit) {
                                if (YTPlayer.isInit = !0, jQuery.browser.mobile && YTPlayer.canPlayOnMobile) {
                                    if (YTPlayer.opt.containment.outerWidth() > jQuery(window).width()) {
                                        YTPlayer.opt.containment.css({maxWidth: "100%"});
                                        var h = .6 * YTPlayer.opt.containment.outerWidth();
                                        YTPlayer.opt.containment.css({maxHeight: h})
                                    }
                                    return void new YT.Player(playerID, {
                                        videoId: YTPlayer.videoID.toString(),
                                        height: "100%",
                                        width: "100%",
                                        events: {
                                            onReady: function (e) {
                                                YTPlayer.player = e.target, playerBox.css({opacity: 1}), YTPlayer.wrapper.css({opacity: 1})
                                            }
                                        }
                                    })
                                }
                                new YT.Player(playerID, {
                                    videoId: YTPlayer.videoID.toString(),
                                    playerVars: playerVars,
                                    events: {
                                        onReady: function (e) {
                                            if (YTPlayer.player = e.target, !YTPlayer.isReady) {
                                                YTPlayer.isReady = YTPlayer.isPlayer && !YTPlayer.opt.autoPlay ? !1 : !0, YTPlayer.playerEl = YTPlayer.player.getIframe(), $YTPlayer.optimizeDisplay(), YTPlayer.videoID = videoID, jQuery(window).on("resize.YTP", function () {
                                                    $YTPlayer.optimizeDisplay()
                                                }), jQuery.mbYTPlayer.checkForState(YTPlayer);
                                                var t = jQuery.Event("YTPUnstarted");
                                                t.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(t)
                                            }
                                        }, onStateChange: function (event) {
                                            if ("function" == typeof event.target.getPlayerState) {
                                                var state = event.target.getPlayerState();
                                                if (YTPlayer.state != state) {
                                                    YTPlayer.state = state;
                                                    var eventType;
                                                    switch (state) {
                                                        case-1:
                                                            eventType = "YTPUnstarted";
                                                            break;
                                                        case 0:
                                                            eventType = "YTPEnd";
                                                            break;
                                                        case 1:
                                                            eventType = "YTPStart", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.pause), "undefined" != typeof _gaq && eval(YTPlayer.opt.gaTrack) && _gaq.push(["_trackEvent", "YTPlayer", "Play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString()]), "undefined" != typeof ga && eval(YTPlayer.opt.gaTrack) && ga("send", "event", "YTPlayer", "play", YTPlayer.hasData ? YTPlayer.videoData.title : YTPlayer.videoID.toString());
                                                            break;
                                                        case 2:
                                                            eventType = "YTPPause", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 3:
                                                            YTPlayer.player.setPlaybackQuality(YTPlayer.opt.quality), eventType = "YTPBuffering", YTPlayer.controlBar && YTPlayer.controlBar.find(".mb_YTPPlaypause").html(jQuery.mbYTPlayer.controls.play);
                                                            break;
                                                        case 5:
                                                            eventType = "YTPCued"
                                                    }
                                                    var YTPEvent = jQuery.Event(eventType);
                                                    YTPEvent.time = YTPlayer.player.time, YTPlayer.canTrigger && jQuery(YTPlayer).trigger(YTPEvent)
                                                }
                                            }
                                        }, onPlaybackQualityChange: function (e) {
                                            var t = e.target.getPlaybackQuality(), o = jQuery.Event("YTPQualityChange");
                                            o.quality = t, jQuery(YTPlayer).trigger(o)
                                        }, onError: function (e) {
                                            150 == e.data && (console.log("Embedding this video is restricted by Youtube."), YTPlayer.isPlayList && jQuery(YTPlayer).playNext()), 2 == e.data && YTPlayer.isPlayList && jQuery(YTPlayer).playNext(), "function" == typeof YTPlayer.opt.onError && YTPlayer.opt.onError($YTPlayer, e)
                                        }
                                    }
                                })
                            }
                        }))
                    })
                }
            })
        },
        getDataFromAPI: function (e) {
            if (e.videoData = jQuery.mbStorage.get("YYTPlayer_data_" + e.videoID), jQuery(e).off("YTPData.YTPlayer").on("YTPData.YTPlayer", function () {
                    if (e.hasData && e.isPlayer && !e.opt.autoPlay) {
                        var t = e.videoData.thumb_max || e.videoData.thumb_high || e.videoData.thumb_medium;
                        e.opt.containment.css({
                            background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                            backgroundSize: "cover"
                        }), e.opt.backgroundUrl = t
                    }
                }), e.videoData) setTimeout(function () {
                e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.dataReceived = !0, jQuery(e).trigger("YTPChanged");
                var t  = jQuery.Event("YTPData");
                t.prop = {};
                for (var o in e.videoData)t.prop[o] = e.videoData[o];
                jQuery(e).trigger(t)
            }, 500), e.hasData = !0; else if (jQuery.mbYTPlayer.apiKey) jQuery.getJSON(jQuery.mbYTPlayer.locationProtocol + "//www.googleapis.com/youtube/v3/videos?id=" + e.videoID + "&key=" + jQuery.mbYTPlayer.apiKey + "&part=snippet", function (t) {
                function o(t) {
                    e.videoData = {}, e.videoData.id = e.videoID, e.videoData.channelTitle = t.channelTitle, e.videoData.title = t.title, e.videoData.description = t.description.length < 400 ? t.description : t.description.substring(0, 400) + " ...", e.videoData.aspectratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio, e.opt.ratio = e.videoData.aspectratio, e.videoData.thumb_max = t.thumbnails.maxres ? t.thumbnails.maxres.url : null, e.videoData.thumb_high = t.thumbnails.high ? t.thumbnails.high.url : null, e.videoData.thumb_medium = t.thumbnails.medium ? t.thumbnails.medium.url : null, jQuery.mbStorage.set("YYTPlayer_data_" + e.videoID, e.videoData)
                }

                e.dataReceived = !0, jQuery(e).trigger("YTPChanged"), o(t.items[0].snippet), e.hasData = !0;
                var i  = jQuery.Event("YTPData");
                i.prop = {};
                for (var r in e.videoData)i.prop[r] = e.videoData[r];
                jQuery(e).trigger(i)
            }); else {
                if (setTimeout(function () {
                        jQuery(e).trigger("YTPChanged")
                    }, 50), e.isPlayer && !e.opt.autoPlay) {
                    var t = jQuery.mbYTPlayer.locationProtocol + "//i.ytimg.com/vi/" + e.videoID + "/hqdefault.jpg";
                    e.opt.containment.css({
                        background: "rgba(0,0,0,0.5) url(" + t + ") center center",
                        backgroundSize: "cover"
                    }), e.opt.backgroundUrl = t
                }
                e.videoData = null, e.opt.ratio = "auto" == e.opt.ratio ? "16/9" : e.opt.ratio
            }
            e.isPlayer && !e.opt.autoPlay && (e.loading = jQuery("<div/>").addClass("loading").html("Loading").hide(), jQuery(e).append(e.loading), e.loading.fadeIn())
        },
        removeStoredData: function () {
            jQuery.mbStorage.remove()
        },
        getVideoData: function () {
            var e = this.get(0);
            return e.videoData
        },
        getVideoID: function () {
            var e = this.get(0);
            return e.videoID || !1
        },
        setVideoQuality: function (e) {
            var t = this.get(0);
            jQuery.browser.chrome || t.player.setPlaybackQuality(e)
        },
        playlist: function (e, t, o) {
            var i = this, r = i.get(0);
            return r.isPlayList = !0, t && (e = jQuery.shuffle(e)), r.videoID || (r.videos = e, r.videoCounter = 0, r.videoLength = e.length, jQuery(r).data("property", e[0]), jQuery(r).mb_YTPlayer()), "function" == typeof o && jQuery(r).on("YTPChanged", function () {
                o(r)
            }), jQuery(r).on("YTPEnd", function () {
                jQuery(r).playNext()
            }), i
        },
        playNext: function () {
            var e = this.get(0);
            return e.videoCounter++, e.videoCounter >= e.videoLength && (e.videoCounter = 0), jQuery(e).changeMovie(e.videos[e.videoCounter]), this
        },
        playPrev: function () {
            var e = this.get(0);
            return e.videoCounter--, e.videoCounter < 0 && (e.videoCounter = e.videoLength - 1), jQuery(e).changeMovie(e.videos[e.videoCounter]), this
        },
        changeMovie: function (e) {
            var t = this.get(0);
            t.opt.startAt = 0, t.opt.stopAt = 0, t.opt.mute = !0, t.hasData = !1, t.hasChanged = !0, e && jQuery.extend(t.opt, t.defaultOpt, e), t.videoID = getYTPVideoID(t.opt.videoURL).videoID, jQuery(t.playerEl).CSSAnimate({opacity: 0}, 200, function () {
                return jQuery(t).YTPGetPlayer().cueVideoByUrl(encodeURI(jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/v/" + t.videoID), 1, t.opt.quality), jQuery.mbYTPlayer.checkForState(t), jQuery(t).optimizeDisplay(), jQuery.mbYTPlayer.getDataFromAPI(t), this
            })
        },
        getPlayer: function () {
            return jQuery(this).get(0).player
        },
        playerDestroy: function () {
            var e = this.get(0);
            ytp.YTAPIReady = !1, ytp.backgroundIsInited = !1, e.isInit = !1, e.videoID = null;
            var t = e.wrapper;
            return t.remove(), jQuery("#controlBar_" + e.id).remove(), clearInterval(e.checkForStartAt), clearInterval(e.getState), this
        },
        fullscreen: function (real) {
            function hideMouse() {
                YTPlayer.overlay.css({cursor: "none"})
            }

            function RunPrefixMethod(e, t) {
                for (var o, i, r = ["webkit", "moz", "ms", "o", ""], n = 0; n < r.length && !e[o];) {
                    if (o = t, "" == r[n] && (o = o.substr(0, 1).toLowerCase() + o.substr(1)), o = r[n] + o, i = typeof e[o], "undefined" != i)return r = [r[n]], "function" == i ? e[o]() : e[o];
                    n++
                }
            }

            function launchFullscreen(e) {
                RunPrefixMethod(e, "RequestFullScreen")
            }

            function cancelFullscreen() {
                (RunPrefixMethod(document, "FullScreen") || RunPrefixMethod(document, "IsFullScreen")) && RunPrefixMethod(document, "CancelFullScreen")
            }

            var YTPlayer = this.get(0);
            "undefined" == typeof real && (real = YTPlayer.opt.realfullscreen), real = eval(real);
            var controls = jQuery("#controlBar_" + YTPlayer.id), fullScreenBtn = controls.find(".mb_OnlyYT"), videoWrapper = YTPlayer.isSelf ? YTPlayer.opt.containment : YTPlayer.wrapper;
            if (real) {
                var fullscreenchange = jQuery.browser.mozilla ? "mozfullscreenchange" : jQuery.browser.webkit ? "webkitfullscreenchange" : "fullscreenchange";
                jQuery(document).off(fullscreenchange).on(fullscreenchange, function () {
                    var e = RunPrefixMethod(document, "IsFullScreen") || RunPrefixMethod(document, "FullScreen");
                    e ? (jQuery(YTPlayer).YTPSetVideoQuality("default"), jQuery(YTPlayer).trigger("YTPFullScreenStart")) : (YTPlayer.isAlone = !1, fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), jQuery(YTPlayer).YTPSetVideoQuality(YTPlayer.opt.quality), videoWrapper.removeClass("fullscreen"), videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0}), YTPlayer.isBackground ? jQuery("body").after(controls) : YTPlayer.wrapper.before(controls), jQuery(window).resize(), jQuery(YTPlayer).trigger("YTPFullScreenEnd"))
                })
            }
            return YTPlayer.isAlone ? (jQuery(document).off("mousemove.YTPlayer"), YTPlayer.overlay.css({cursor: "auto"}), real ? cancelFullscreen() : (videoWrapper.CSSAnimate({opacity: YTPlayer.opt.opacity}, 500), videoWrapper.css({zIndex: 0})), fullScreenBtn.html(jQuery.mbYTPlayer.controls.onlyYT), YTPlayer.isAlone = !1) : (jQuery(document).on("mousemove.YTPlayer", function (e) {
                    YTPlayer.overlay.css({cursor: "auto"}), clearTimeout(YTPlayer.hideCursor), jQuery(e.target).parents().is(".mb_YTPBar") || (YTPlayer.hideCursor = setTimeout(hideMouse, 3e3))
                }), hideMouse(), real ? (videoWrapper.css({opacity: 0}), videoWrapper.addClass("fullscreen"), launchFullscreen(videoWrapper.get(0)), setTimeout(function () {
                        videoWrapper.CSSAnimate({opacity: 1}, 1e3), YTPlayer.wrapper.append(controls), jQuery(YTPlayer).optimizeDisplay(), YTPlayer.player.seekTo(YTPlayer.player.getCurrentTime() + .1, !0)
                    }, 500)) : videoWrapper.css({zIndex: 1e4}).CSSAnimate({opacity: 1}, 1e3), fullScreenBtn.html(jQuery.mbYTPlayer.controls.showSite), YTPlayer.isAlone = !0), this
        },
        toggleLoops: function () {
            var e = this.get(0), t = e.opt;
            return 1 == t.loop ? t.loop = 0 : (t.startAt ? e.player.seekTo(t.startAt) : e.player.playVideo(), t.loop = 1), this
        },
        play: function () {
            var e = this.get(0);
            if (e.isReady) {
                var t = jQuery("#controlBar_" + e.id), o = t.find(".mb_YTPPlaypause");
                return o.html(jQuery.mbYTPlayer.controls.pause), e.player.playVideo(), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, 2e3), jQuery(e.playerEl).CSSAnimate({opacity: 1}, 1e3), jQuery(e).css("background-image", "none"), this
            }
        },
        togglePlay: function (e) {
            var t = this.get(0);
            return 1 == t.state ? this.YTPPause() : this.YTPPlay(), "function" == typeof e && e(t.state), this
        },
        stop: function () {
            var e = this.get(0), t = jQuery("#controlBar_" + e.id), o = t.find(".mb_YTPPlaypause");
            return o.html(jQuery.mbYTPlayer.controls.play), e.player.stopVideo(), this
        },
        pause: function () {
            var e = this.get(0), t = jQuery("#controlBar_" + e.id), o = t.find(".mb_YTPPlaypause");
            return o.html(jQuery.mbYTPlayer.controls.play), e.player.pauseVideo(), this
        },
        seekTo: function (e) {
            var t = this.get(0);
            return t.player.seekTo(e, !0), this
        },
        setVolume: function (e) {
            var t = this.get(0);
            return e || t.opt.vol || 0 != t.player.getVolume() ? !e && t.player.getVolume() > 0 || e && t.opt.vol == e ? t.isMute ? jQuery(t).YTPUnmute() : jQuery(t).YTPMute() : (t.opt.vol = e, t.player.setVolume(t.opt.vol), t.volumeBar && t.volumeBar.length && t.volumeBar.updateSliderVal(e)) : jQuery(t).YTPUnmute(), this
        },
        mute: function () {
            var e = this.get(0);
            if (!e.isMute) {
                e.player.mute(), e.isMute = !0, e.player.setVolume(0), e.volumeBar && e.volumeBar.length && e.volumeBar.width() > 10 && e.volumeBar.updateSliderVal(0);
                var t = jQuery("#controlBar_" + e.id), o = t.find(".mb_YTPMuteUnmute");
                o.html(jQuery.mbYTPlayer.controls.unmute), jQuery(e).addClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.addClass("muted");
                var i = jQuery.Event("YTPMuted");
                return i.time = e.player.time, e.canTrigger && jQuery(e).trigger(i), this
            }
        },
        unmute: function () {
            var e = this.get(0);
            if (e.isMute) {
                e.player.unMute(), e.isMute = !1, e.player.setVolume(e.opt.vol), e.volumeBar && e.volumeBar.length && e.volumeBar.updateSliderVal(e.opt.vol > 10 ? e.opt.vol : 10);
                var t = jQuery("#controlBar_" + e.id), o = t.find(".mb_YTPMuteUnmute");
                o.html(jQuery.mbYTPlayer.controls.mute), jQuery(e).removeClass("isMuted"), e.volumeBar && e.volumeBar.length && e.volumeBar.removeClass("muted");
                var i = jQuery.Event("YTPUnmuted");
                return i.time = e.player.time, e.canTrigger && jQuery(e).trigger(i), this
            }
        },
        applyFilter: function (e, t) {
            var o = this.get(0);
            return o.filters[e].value = t, o.filtersEnabled && this.YTPEnableFilters(), this
        },
        applyFilters: function (e) {
            var t = this.get(0);
            return this.on("YTPReady", function () {
                for (var o in e)t.filters[o].value = e[o], jQuery(t).YTPApplyFilter(o, e[o]);
                jQuery(t).trigger("YTPFiltersApplied")
            }), this
        },
        toggleFilter: function (e, t) {
            return this.each(function () {
                var o = this;
                o.filters[e].value ? o.filters[e].value = 0 : o.filters[e].value = t, o.filtersEnabled && jQuery(this).YTPEnableFilters()
            })
        },
        toggleFilters: function (e) {
            return this.each(function () {
                var t = this;
                t.filtersEnabled ? (jQuery(t).trigger("YTPDisableFilters"), jQuery(t).YTPDisableFilters()) : (jQuery(t).YTPEnableFilters(), jQuery(t).trigger("YTPEnableFilters")), "function" == typeof e && e(t.filtersEnabled)
            })
        },
        disableFilters: function () {
            return this.each(function () {
                var e = this, t = jQuery(e.playerEl);
                t.css("-webkit-filter", ""), t.css("filter", ""), e.filtersEnabled = !1
            })
        },
        enableFilters: function () {
            return this.each(function () {
                var e = this, t = jQuery(e.playerEl), o = "";
                for (var i in e.filters)e.filters[i].value && (o += i.replace("_", "-") + "(" + e.filters[i].value + e.filters[i].unit + ") ");
                t.css("-webkit-filter", o), t.css("filter", o), e.filtersEnabled = !0
            })
        },
        removeFilter: function (e, t) {
            return this.each(function () {
                "function" == typeof e && (t = e, e = null);
                var o = this;
                if (e) jQuery(this).YTPApplyFilter(e, 0), "function" == typeof t && t(e); else for (var i in o.filters)jQuery(this).YTPApplyFilter(i, 0), "function" == typeof t && t(i)
            })
        },
        manageProgress: function () {
            var e = this.get(0), t = jQuery("#controlBar_" + e.id), o = t.find(".mb_YTPProgress"), i = t.find(".mb_YTPLoaded"), r = t.find(".mb_YTPseekbar"), n = o.outerWidth(), s = Math.floor(e.player.getCurrentTime()), a = Math.floor(e.player.getDuration()), l = s * n / a, u = 0, p = 100 * e.player.getVideoLoadedFraction();
            return i.css({left: u, width: p + "%"}), r.css({left: 0, width: l}), {totalTime: a, currentTime: s}
        },
        buildControls: function (YTPlayer) {
            var data = YTPlayer.opt;
            if (data.showYTLogo = data.showYTLogo || data.printUrl, !jQuery("#controlBar_" + YTPlayer.id).length) {
                YTPlayer.controlBar = jQuery("<span/>").attr("id", "controlBar_" + YTPlayer.id).addClass("mb_YTPBar").css({
                    whiteSpace: "noWrap",
                    position: YTPlayer.isBackground ? "fixed" : "absolute",
                    zIndex: YTPlayer.isBackground ? 1e4 : 1e3
                }).hide();
                var buttonBar       = jQuery("<div/>").addClass("buttonBar"), playpause = jQuery("<span>" + jQuery.mbYTPlayer.controls.play + "</span>").addClass("mb_YTPPlaypause ytpicon").click(function () {
                    1 == YTPlayer.player.getPlayerState() ? jQuery(YTPlayer).YTPPause() : jQuery(YTPlayer).YTPPlay()
                }), MuteUnmute      = jQuery("<span>" + jQuery.mbYTPlayer.controls.mute + "</span>").addClass("mb_YTPMuteUnmute ytpicon").click(function () {
                    0 == YTPlayer.player.getVolume() ? jQuery(YTPlayer).YTPUnmute() : jQuery(YTPlayer).YTPMute()
                }), volumeBar       = jQuery("<div/>").addClass("mb_YTPVolumeBar").css({display: "inline-block"});
                YTPlayer.volumeBar  = volumeBar;
                var idx             = jQuery("<span/>").addClass("mb_YTPTime"), vURL = data.videoURL ? data.videoURL : "";
                vURL.indexOf("http") < 0 && (vURL = jQuery.mbYTPlayer.locationProtocol + "//www.youtube.com/watch?v=" + data.videoURL);
                var movieUrl    = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.ytLogo).addClass("mb_YTPUrl ytpicon").attr("title", "view on YouTube").on("click", function () {
                    window.open(vURL, "viewOnYT")
                }), onlyVideo   = jQuery("<span/>").html(jQuery.mbYTPlayer.controls.onlyYT).addClass("mb_OnlyYT ytpicon").on("click", function () {
                    jQuery(YTPlayer).YTPFullscreen(data.realfullscreen)
                }), progressBar = jQuery("<div/>").addClass("mb_YTPProgress").css("position", "absolute").click(function (e) {
                    timeBar.css({width: e.clientX - timeBar.offset().left}), YTPlayer.timeW = e.clientX - timeBar.offset().left, YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0});
                    var t = Math.floor(YTPlayer.player.getDuration());
                    YTPlayer["goto"] = timeBar.outerWidth() * t / progressBar.outerWidth(), YTPlayer.player.seekTo(parseFloat(YTPlayer["goto"]), !0), YTPlayer.controlBar.find(".mb_YTPLoaded").css({width: 0})
                }), loadedBar   = jQuery("<div/>").addClass("mb_YTPLoaded").css("position", "absolute"), timeBar = jQuery("<div/>").addClass("mb_YTPseekbar").css("position", "absolute");
                progressBar.append(loadedBar).append(timeBar), buttonBar.append(playpause).append(MuteUnmute).append(volumeBar).append(idx), data.showYTLogo && buttonBar.append(movieUrl), (YTPlayer.isBackground || eval(YTPlayer.opt.realfullscreen) && !YTPlayer.isBackground) && buttonBar.append(onlyVideo), YTPlayer.controlBar.append(buttonBar).append(progressBar), YTPlayer.isBackground ? jQuery("body").after(YTPlayer.controlBar) : (YTPlayer.controlBar.addClass("inlinePlayer"), YTPlayer.wrapper.before(YTPlayer.controlBar)), volumeBar.simpleSlider({
                    initialval: YTPlayer.opt.vol,
                    scale: 100,
                    orientation: "h",
                    callback: function (e) {
                        0 == e.value ? jQuery(YTPlayer).YTPMute() : jQuery(YTPlayer).YTPUnmute(), YTPlayer.player.setVolume(e.value), YTPlayer.isMute || (YTPlayer.opt.vol = e.value)
                    }
                })
            }
        },
        checkForState: function (YTPlayer) {
            var interval = YTPlayer.opt.showControls ? 100 : 700;
            return clearInterval(YTPlayer.getState), jQuery.contains(document, YTPlayer) ? (jQuery.mbYTPlayer.checkForStart(YTPlayer), void(YTPlayer.getState = setInterval(function () {
                    var prog = jQuery(YTPlayer).YTPManageProgress(), $YTPlayer = jQuery(YTPlayer), data = YTPlayer.opt, startAt = YTPlayer.opt.startAt ? YTPlayer.opt.startAt : 0, stopAt = YTPlayer.opt.stopAt > YTPlayer.opt.startAt ? YTPlayer.opt.stopAt : 0;
                    if (stopAt = stopAt < YTPlayer.player.getDuration() ? stopAt : 0, YTPlayer.player.time != prog.currentTime) {
                        var YTPEvent = jQuery.Event("YTPTime");
                        YTPEvent.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(YTPEvent)
                    }
                    if (YTPlayer.player.time = prog.currentTime, 0 == YTPlayer.player.getVolume() ? $YTPlayer.addClass("isMuted") : $YTPlayer.removeClass("isMuted"), YTPlayer.opt.showControls && YTPlayer.controlBar.find(".mb_YTPTime").html(prog.totalTime ? jQuery.mbYTPlayer.formatTime(prog.currentTime) + " / " + jQuery.mbYTPlayer.formatTime(prog.totalTime) : "-- : -- / -- : --"), eval(YTPlayer.opt.stopMovieOnBlur) && (document.hasFocus() ? document.hasFocus() && !YTPlayer.hasFocus && -1 != YTPlayer.state && 0 != YTPlayer.state && (YTPlayer.hasFocus = !0, $YTPlayer.YTPPlay()) : 1 == YTPlayer.state && (YTPlayer.hasFocus = !1, $YTPlayer.YTPPause())), YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() <= 400 && !YTPlayer.isCompact ? (YTPlayer.controlBar.addClass("compact"), YTPlayer.isCompact = !0, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)) : YTPlayer.controlBar && YTPlayer.controlBar.outerWidth() > 400 && YTPlayer.isCompact && (YTPlayer.controlBar.removeClass("compact"), YTPlayer.isCompact = !1, !YTPlayer.isMute && YTPlayer.volumeBar && YTPlayer.volumeBar.updateSliderVal(YTPlayer.opt.vol)), 1 == YTPlayer.player.getPlayerState() && (parseFloat(YTPlayer.player.getDuration() - 1.5) < YTPlayer.player.getCurrentTime() || stopAt > 0 && parseFloat(YTPlayer.player.getCurrentTime()) > stopAt)) {
                        if (YTPlayer.isEnded)return;
                        if (YTPlayer.isEnded = !0, setTimeout(function () {
                                YTPlayer.isEnded = !1
                            }, 1e3), YTPlayer.isPlayList) {
                            clearInterval(YTPlayer.getState);
                            var YTPEnd = jQuery.Event("YTPEnd");
                            return YTPEnd.time = YTPlayer.player.time, void jQuery(YTPlayer).trigger(YTPEnd)
                        }
                        data.loop ? (startAt = startAt || 1, YTPlayer.player.pauseVideo(), YTPlayer.player.seekTo(startAt, !0), $YTPlayer.YTPPlay()) : (YTPlayer.player.pauseVideo(), YTPlayer.wrapper.CSSAnimate({opacity: 0}, 1e3, function () {
                                var e = jQuery.Event("YTPEnd");
                                e.time = YTPlayer.player.time, jQuery(YTPlayer).trigger(e), YTPlayer.player.seekTo(startAt, !0), YTPlayer.isBackground || YTPlayer.opt.containment.css({
                                    background: "rgba(0,0,0,0.5) url(" + YTPlayer.opt.backgroundUrl + ") center center",
                                    backgroundSize: "cover"
                                })
                            }))
                    }
                }, interval))) : (jQuery(YTPlayer).YTPPlayerDestroy(), clearInterval(YTPlayer.getState), void clearInterval(YTPlayer.checkForStartAt))
        },
        checkForStart: function (e) {
            var t = jQuery(e);
            if (!jQuery.contains(document, e))return void jQuery(e).YTPPlayerDestroy();
            if (jQuery.browser.chrome && (e.opt.quality = "default"), e.player.pauseVideo(), jQuery(e).muteYTPVolume(), jQuery("#controlBar_" + e.id).remove(), e.opt.showControls && jQuery.mbYTPlayer.buildControls(e), e.opt.addRaster) {
                var o = "dot" == e.opt.addRaster ? "raster-dot" : "raster";
                e.overlay.addClass(e.isRetina ? o + " retina" : o)
            } else e.overlay.removeClass(function (e, t) {
                var o = t.split(" "), i = [];
                return jQuery.each(o, function (e, t) {
                    /raster.*/.test(t) && i.push(t)
                }), i.push("retina"), i.join(" ")
            });
            e.checkForStartAt = setInterval(function () {
                jQuery(e).YTPMute();
                var o = e.opt.startAt ? e.opt.startAt : 1, i = e.player.getVideoLoadedFraction() > o / e.player.getDuration();
                if (e.player.getDuration() > 0 && e.player.getCurrentTime() >= o && i) {
                    clearInterval(e.checkForStartAt), e.isReady = !0, "function" == typeof e.opt.onReady && e.opt.onReady(e);
                    var r = jQuery.Event("YTPReady");
                    jQuery(e).trigger(r), e.player.pauseVideo(), e.opt.mute || jQuery(e).YTPUnmute(), e.canTrigger = !0, e.opt.autoPlay ? (t.YTPPlay(), t.css("background-image", "none"), jQuery(e.playerEl).CSSAnimate({opacity: 1}, 1e3), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, 1e3)) : (e.player.pauseVideo(), e.isPlayer || (jQuery(e.playerEl).CSSAnimate({opacity: 1}, 1e3), e.wrapper.CSSAnimate({opacity: e.isAlone ? 1 : e.opt.opacity}, 1e3))), e.isPlayer && !e.opt.autoPlay && (e.loading.html("Ready"), setTimeout(function () {
                        e.loading.fadeOut()
                    }, 100)), e.controlBar && e.controlBar.slideDown(1e3)
                } else o >= 0 && e.player.seekTo(o, !0)
            }, 1e3)
        },
        formatTime: function (e) {
            var t = Math.floor(e / 60), o = Math.floor(e - 60 * t);
            return (9 >= t ? "0" + t : t) + " : " + (9 >= o ? "0" + o : o)
        }
    }, jQuery.fn.toggleVolume = function () {
        var e = this.get(0);
        if (e)return e.player.isMuted() ? (jQuery(e).YTPUnmute(), !0) : (jQuery(e).YTPMute(), !1)
    }, jQuery.fn.optimizeDisplay = function () {
        var e = this.get(0), t = e.opt, o = jQuery(e.playerEl), i = {}, r = e.wrapper;
        i.width = r.outerWidth(), i.height = r.outerHeight();
        var n = 24, s = 100, a = {};
        t.optimizeDisplay ? (a.width = i.width + i.width * n / 100, a.height = Math.ceil("16/9" == t.ratio ? 9 * i.width / 16 : 3 * i.width / 4), a.marginTop = -((a.height - i.height) / 2), a.marginLeft = -(i.width * (n / 2) / 100), a.height < i.height && (a.height = i.height + i.height * n / 100, a.width = Math.floor("16/9" == t.ratio ? 16 * i.height / 9 : 4 * i.height / 3), a.marginTop = -(i.height * (n / 2) / 100), a.marginLeft = -((a.width - i.width) / 2)), a.width += s, a.height += s, a.marginTop -= s / 2, a.marginLeft -= s / 2) : (a.width = "100%", a.height = "100%", a.marginTop = 0, a.marginLeft = 0), o.css({
            width: a.width,
            height: a.height,
            marginTop: a.marginTop,
            marginLeft: a.marginLeft
        })
    }, jQuery.shuffle = function (e) {
        for (var t = e.slice(), o = t.length, i = o; i--;) {
            var r = parseInt(Math.random() * o), n = t[i];
            t[i] = t[r], t[r] = n
        }
        return t
    }, jQuery.fn.YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.YTPGetPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.YTPGetVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.YTPChangeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.YTPPlayerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.YTPPlay = jQuery.mbYTPlayer.play, jQuery.fn.YTPTogglePlay = jQuery.mbYTPlayer.togglePlay, jQuery.fn.YTPStop = jQuery.mbYTPlayer.stop, jQuery.fn.YTPPause = jQuery.mbYTPlayer.pause, jQuery.fn.YTPSeekTo = jQuery.mbYTPlayer.seekTo, jQuery.fn.YTPlaylist = jQuery.mbYTPlayer.playlist, jQuery.fn.YTPPlayNext = jQuery.mbYTPlayer.playNext, jQuery.fn.YTPPlayPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.YTPMute = jQuery.mbYTPlayer.mute, jQuery.fn.YTPUnmute = jQuery.mbYTPlayer.unmute, jQuery.fn.YTPToggleVolume = jQuery.mbYTPlayer.toggleVolume, jQuery.fn.YTPSetVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.YTPGetVideoData = jQuery.mbYTPlayer.getVideoData, jQuery.fn.YTPFullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.YTPToggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.YTPSetVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.YTPManageProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPApplyFilter = jQuery.mbYTPlayer.applyFilter, jQuery.fn.YTPApplyFilters = jQuery.mbYTPlayer.applyFilters, jQuery.fn.YTPToggleFilter = jQuery.mbYTPlayer.toggleFilter, jQuery.fn.YTPToggleFilters = jQuery.mbYTPlayer.toggleFilters, jQuery.fn.YTPRemoveFilter = jQuery.mbYTPlayer.removeFilter, jQuery.fn.YTPDisableFilters = jQuery.mbYTPlayer.disableFilters, jQuery.fn.YTPEnableFilters = jQuery.mbYTPlayer.enableFilters, jQuery.fn.mb_YTPlayer = jQuery.mbYTPlayer.buildPlayer, jQuery.fn.playNext = jQuery.mbYTPlayer.playNext, jQuery.fn.playPrev = jQuery.mbYTPlayer.playPrev, jQuery.fn.changeMovie = jQuery.mbYTPlayer.changeMovie, jQuery.fn.getVideoID = jQuery.mbYTPlayer.getVideoID, jQuery.fn.getPlayer = jQuery.mbYTPlayer.getPlayer, jQuery.fn.playerDestroy = jQuery.mbYTPlayer.playerDestroy, jQuery.fn.fullscreen = jQuery.mbYTPlayer.fullscreen, jQuery.fn.buildYTPControls = jQuery.mbYTPlayer.buildControls, jQuery.fn.playYTP = jQuery.mbYTPlayer.play, jQuery.fn.toggleLoops = jQuery.mbYTPlayer.toggleLoops, jQuery.fn.stopYTP = jQuery.mbYTPlayer.stop, jQuery.fn.pauseYTP = jQuery.mbYTPlayer.pause, jQuery.fn.seekToYTP = jQuery.mbYTPlayer.seekTo, jQuery.fn.muteYTPVolume = jQuery.mbYTPlayer.mute, jQuery.fn.unmuteYTPVolume = jQuery.mbYTPlayer.unmute, jQuery.fn.setYTPVolume = jQuery.mbYTPlayer.setVolume, jQuery.fn.setVideoQuality = jQuery.mbYTPlayer.setVideoQuality, jQuery.fn.manageYTPProgress = jQuery.mbYTPlayer.manageProgress, jQuery.fn.YTPGetDataFromFeed = jQuery.mbYTPlayer.getVideoData
}(jQuery, ytp), jQuery.support.CSStransition = function () {
    var e = document.body || document.documentElement, t = e.style;
    return void 0 !== t.transition || void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.MsTransition || void 0 !== t.OTransition
}(), jQuery.CSS = {
    name: "mb.CSSAnimate",
    author: "Matteo Bicocchi",
    version: "2.0.0",
    transitionEnd: "transitionEnd",
    sfx: "",
    filters: {
        blur: {min: 0, max: 100, unit: "px"},
        brightness: {min: 0, max: 400, unit: "%"},
        contrast: {min: 0, max: 400, unit: "%"},
        grayscale: {min: 0, max: 100, unit: "%"},
        hueRotate: {min: 0, max: 360, unit: "deg"},
        invert: {min: 0, max: 100, unit: "%"},
        saturate: {min: 0, max: 400, unit: "%"},
        sepia: {min: 0, max: 100, unit: "%"}
    },
    normalizeCss: function (e) {
        var t = jQuery.extend(!0, {}, e);
        jQuery.browser.webkit || jQuery.browser.opera ? jQuery.CSS.sfx = "-webkit-" : jQuery.browser.mozilla ? jQuery.CSS.sfx = "-moz-" : jQuery.browser.msie && (jQuery.CSS.sfx = "-ms-");
        for (var o in t) {
            "transform" === o && (t[jQuery.CSS.sfx + "transform"] = t[o], delete t[o]), "transform-origin" === o && (t[jQuery.CSS.sfx + "transform-origin"] = e[o], delete t[o]), "filter" !== o || jQuery.browser.mozilla || (t[jQuery.CSS.sfx + "filter"] = e[o], delete t[o]), "blur" === o && setFilter(t, "blur", e[o]), "brightness" === o && setFilter(t, "brightness", e[o]), "contrast" === o && setFilter(t, "contrast", e[o]), "grayscale" === o && setFilter(t, "grayscale", e[o]), "hueRotate" === o && setFilter(t, "hueRotate", e[o]), "invert" === o && setFilter(t, "invert", e[o]), "saturate" === o && setFilter(t, "saturate", e[o]), "sepia" === o && setFilter(t, "sepia", e[o]);
            var i = "";
            "x" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateX(" + setUnit(e[o], "px") + ")", delete t[o]), "y" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateY(" + setUnit(e[o], "px") + ")", delete t[o]), "z" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " translateZ(" + setUnit(e[o], "px") + ")", delete t[o]), "rotate" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotate(" + setUnit(e[o], "deg") + ")", delete t[o]), "rotateX" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateX(" + setUnit(e[o], "deg") + ")", delete t[o]), "rotateY" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateY(" + setUnit(e[o], "deg") + ")", delete t[o]), "rotateZ" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " rotateZ(" + setUnit(e[o], "deg") + ")", delete t[o]), "scale" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scale(" + setUnit(e[o], "") + ")", delete t[o]), "scaleX" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleX(" + setUnit(e[o], "") + ")", delete t[o]), "scaleY" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleY(" + setUnit(e[o], "") + ")", delete t[o]), "scaleZ" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " scaleZ(" + setUnit(e[o], "") + ")", delete t[o]), "skew" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skew(" + setUnit(e[o], "deg") + ")", delete t[o]), "skewX" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewX(" + setUnit(e[o], "deg") + ")", delete t[o]), "skewY" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " skewY(" + setUnit(e[o], "deg") + ")", delete t[o]), "perspective" === o && (i = jQuery.CSS.sfx + "transform", t[i] = t[i] || "", t[i] += " perspective(" + setUnit(e[o], "px") + ")", delete t[o])
        }
        return t
    },
    getProp: function (e) {
        var t = [];
        for (var o in e)t.indexOf(o) < 0 && t.push(uncamel(o));
        return t.join(",")
    },
    animate: function (e, t, o, i, r) {
        return this.each(function () {
            function n() {
                s.called = !0, s.CSSAIsRunning = !1, a.off(jQuery.CSS.transitionEnd + "." + s.id), clearTimeout(s.timeout), a.css(jQuery.CSS.sfx + "transition", ""), "function" == typeof r && r.apply(s), "function" == typeof s.CSSqueue && (s.CSSqueue(), s.CSSqueue = null)
            }

            var s = this, a = jQuery(this);
            s.id  = s.id || "CSSA_" + (new Date).getTime();
            var l = l || {type: "noEvent"};
            if (s.CSSAIsRunning && s.eventType == l.type && !jQuery.browser.msie && jQuery.browser.version <= 9)return void(s.CSSqueue = function () {
                a.CSSAnimate(e, t, o, i, r)
            });
            if (s.CSSqueue = null, s.eventType = l.type, 0 !== a.length && e) {
                if (e = jQuery.normalizeCss(e), s.CSSAIsRunning = !0, "function" == typeof t && (r = t, t = jQuery.fx.speeds._default), "function" == typeof o && (i = o, o = 0), "string" == typeof o && (r = o, o = 0), "function" == typeof i && (r = i, i = "cubic-bezier(0.65,0.03,0.36,0.72)"), "string" == typeof t)for (var u in jQuery.fx.speeds) {
                    if (t == u) {
                        t = jQuery.fx.speeds[u];
                        break
                    }
                    t = jQuery.fx.speeds._default
                }
                if (t || (t = jQuery.fx.speeds._default), "string" == typeof r && (i = r, r = null), !jQuery.support.CSStransition) {
                    for (var p in e) {
                        if ("transform" === p && delete e[p], "filter" === p && delete e[p], "transform-origin" === p && delete e[p], "auto" === e[p] && delete e[p], "x" === p) {
                            var m = e[p], c = "left";
                            e[c] = m, delete e[p]
                        }
                        if ("y" === p) {
                            var m = e[p], c = "top";
                            e[c] = m, delete e[p]
                        }
                        ("-ms-transform" === p || "-ms-filter" === p) && delete e[p]
                    }
                    return void a.delay(o).animate(e, t, r)
                }
                var d = {
                    "default": "ease",
                    "in": "ease-in",
                    out: "ease-out",
                    "in-out": "ease-in-out",
                    snap: "cubic-bezier(0,1,.5,1)",
                    easeOutCubic: "cubic-bezier(.215,.61,.355,1)",
                    easeInOutCubic: "cubic-bezier(.645,.045,.355,1)",
                    easeInCirc: "cubic-bezier(.6,.04,.98,.335)",
                    easeOutCirc: "cubic-bezier(.075,.82,.165,1)",
                    easeInOutCirc: "cubic-bezier(.785,.135,.15,.86)",
                    easeInExpo: "cubic-bezier(.95,.05,.795,.035)",
                    easeOutExpo: "cubic-bezier(.19,1,.22,1)",
                    easeInOutExpo: "cubic-bezier(1,0,0,1)",
                    easeInQuad: "cubic-bezier(.55,.085,.68,.53)",
                    easeOutQuad: "cubic-bezier(.25,.46,.45,.94)",
                    easeInOutQuad: "cubic-bezier(.455,.03,.515,.955)",
                    easeInQuart: "cubic-bezier(.895,.03,.685,.22)",
                    easeOutQuart: "cubic-bezier(.165,.84,.44,1)",
                    easeInOutQuart: "cubic-bezier(.77,0,.175,1)",
                    easeInQuint: "cubic-bezier(.755,.05,.855,.06)",
                    easeOutQuint: "cubic-bezier(.23,1,.32,1)",
                    easeInOutQuint: "cubic-bezier(.86,0,.07,1)",
                    easeInSine: "cubic-bezier(.47,0,.745,.715)",
                    easeOutSine: "cubic-bezier(.39,.575,.565,1)",
                    easeInOutSine: "cubic-bezier(.445,.05,.55,.95)",
                    easeInBack: "cubic-bezier(.6,-.28,.735,.045)",
                    easeOutBack: "cubic-bezier(.175, .885,.32,1.275)",
                    easeInOutBack: "cubic-bezier(.68,-.55,.265,1.55)"
                };
                d[i] && (i = d[i]), a.off(jQuery.CSS.transitionEnd + "." + s.id);
                var f = jQuery.CSS.getProp(e), y = {};
                jQuery.extend(y, e), y[jQuery.CSS.sfx + "transition-property"] = f, y[jQuery.CSS.sfx + "transition-duration"] = t + "ms", y[jQuery.CSS.sfx + "transition-delay"] = o + "ms", y[jQuery.CSS.sfx + "transition-timing-function"] = i, setTimeout(function () {
                    a.one(jQuery.CSS.transitionEnd + "." + s.id, n), a.css(y)
                }, 1), s.timeout = setTimeout(function () {
                    return s.called || !r ? (s.called = !1, void(s.CSSAIsRunning = !1)) : (a.css(jQuery.CSS.sfx + "transition", ""), r.apply(s), s.CSSAIsRunning = !1, void("function" == typeof s.CSSqueue && (s.CSSqueue(), s.CSSqueue = null)))
                }, t + o + 10)
            }
        })
    }
}, jQuery.fn.CSSAnimate = jQuery.CSS.animate, jQuery.normalizeCss = jQuery.CSS.normalizeCss, jQuery.fn.css3 = function (e) {
    return this.each(function () {
        var t = jQuery(this), o = jQuery.normalizeCss(e);
        t.css(o)
    })
};
var nAgt = navigator.userAgent;
if (!jQuery.browser) {
    jQuery.browser = {}, jQuery.browser.mozilla = !1, jQuery.browser.webkit = !1, jQuery.browser.opera = !1, jQuery.browser.safari = !1, jQuery.browser.chrome = !1, jQuery.browser.msie = !1, jQuery.browser.ua = nAgt, jQuery.browser.name = navigator.appName, jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10);
    var nameOffset, verOffset, ix;
    if (-1 != (verOffset = nAgt.indexOf("Opera"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 6), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)); else if (-1 != (verOffset = nAgt.indexOf("OPR"))) jQuery.browser.opera = !0, jQuery.browser.name = "Opera", jQuery.browser.fullVersion = nAgt.substring(verOffset + 4); else if (-1 != (verOffset = nAgt.indexOf("MSIE"))) jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer", jQuery.browser.fullVersion = nAgt.substring(verOffset + 5); else if (-1 != nAgt.indexOf("Trident")) {
        jQuery.browser.msie = !0, jQuery.browser.name = "Microsoft Internet Explorer";
        var start                  = nAgt.indexOf("rv:") + 3, end = start + 4;
        jQuery.browser.fullVersion = nAgt.substring(start, end)
    } else-1 != (verOffset = nAgt.indexOf("Chrome")) ? (jQuery.browser.webkit = !0, jQuery.browser.chrome = !0, jQuery.browser.name = "Chrome", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7)) : -1 != (verOffset = nAgt.indexOf("Safari")) ? (jQuery.browser.webkit = !0, jQuery.browser.safari = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("AppleWebkit")) ? (jQuery.browser.webkit = !0, jQuery.browser.name = "Safari", jQuery.browser.fullVersion = nAgt.substring(verOffset + 7), -1 != (verOffset = nAgt.indexOf("Version")) && (jQuery.browser.fullVersion = nAgt.substring(verOffset + 8))) : -1 != (verOffset = nAgt.indexOf("Firefox")) ? (jQuery.browser.mozilla = !0, jQuery.browser.name = "Firefox", jQuery.browser.fullVersion = nAgt.substring(verOffset + 8)) : (nameOffset = nAgt.lastIndexOf(" ") + 1) < (verOffset = nAgt.lastIndexOf("/")) && (jQuery.browser.name = nAgt.substring(nameOffset, verOffset), jQuery.browser.fullVersion = nAgt.substring(verOffset + 1), jQuery.browser.name.toLowerCase() == jQuery.browser.name.toUpperCase() && (jQuery.browser.name = navigator.appName));
    -1 != (ix = jQuery.browser.fullVersion.indexOf(";")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), -1 != (ix = jQuery.browser.fullVersion.indexOf(" ")) && (jQuery.browser.fullVersion = jQuery.browser.fullVersion.substring(0, ix)), jQuery.browser.majorVersion = parseInt("" + jQuery.browser.fullVersion, 10), isNaN(jQuery.browser.majorVersion) && (jQuery.browser.fullVersion = "" + parseFloat(navigator.appVersion), jQuery.browser.majorVersion = parseInt(navigator.appVersion, 10)), jQuery.browser.version = jQuery.browser.majorVersion
}
jQuery.browser.android = /Android/i.test(nAgt), jQuery.browser.blackberry = /BlackBerry|BB|PlayBook/i.test(nAgt), jQuery.browser.ios = /iPhone|iPad|iPod|webOS/i.test(nAgt), jQuery.browser.operaMobile = /Opera Mini/i.test(nAgt), jQuery.browser.windowsMobile = /IEMobile|Windows Phone/i.test(nAgt), jQuery.browser.kindle = /Kindle|Silk/i.test(nAgt), jQuery.browser.mobile = jQuery.browser.android || jQuery.browser.blackberry || jQuery.browser.ios || jQuery.browser.windowsMobile || jQuery.browser.operaMobile || jQuery.browser.kindle, jQuery.isMobile = jQuery.browser.mobile, jQuery.isTablet = jQuery.browser.mobile && jQuery(window).width() > 765, jQuery.isAndroidDefault = jQuery.browser.android && !/chrome/i.test(nAgt), !function (e) {
    /iphone|ipod|ipad|android|ie|blackberry|fennec/.test(navigator.userAgent.toLowerCase());
    var t = "ontouchstart" in window || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch || !1;
    e.simpleSlider = {
        defaults: {initialval: 0, scale: 100, orientation: "h", readonly: !1, callback: !1},
        events: {
            start: t ? "touchstart" : "mousedown",
            end: t ? "touchend" : "mouseup",
            move: t ? "touchmove" : "mousemove"
        },
        init: function (o) {
            return this.each(function () {
                var i = this, r = e(i);
                r.addClass("simpleSlider"), i.opt = {}, e.extend(i.opt, e.simpleSlider.defaults, o), e.extend(i.opt, r.data());
                var n = "h" == i.opt.orientation ? "horizontal" : "vertical", s = e("<div/>").addClass("level").addClass(n);
                r.prepend(s), i.level = s, r.css({cursor: "default"}), "auto" == i.opt.scale && (i.opt.scale = e(i).outerWidth()), r.updateSliderVal(), i.opt.readonly || (r.on(e.simpleSlider.events.start, function (e) {
                    t && (e = e.changedTouches[0]), i.canSlide = !0, r.updateSliderVal(e), r.css({cursor: "col-resize"}), e.preventDefault(), e.stopPropagation()
                }), e(document).on(e.simpleSlider.events.move, function (o) {
                    t && (o = o.changedTouches[0]), i.canSlide && (e(document).css({cursor: "default"}), r.updateSliderVal(o), o.preventDefault(), o.stopPropagation())
                }).on(e.simpleSlider.events.end, function () {
                    e(document).css({cursor: "auto"}), i.canSlide = !1, r.css({cursor: "auto"})
                }))
            })
        },
        updateSliderVal: function (t) {
            function o(e, t) {
                return Math.floor(100 * e / t)
            }

            var i            = this, r = i.get(0);
            r.opt.initialval = "number" == typeof r.opt.initialval ? r.opt.initialval : r.opt.initialval(r);
            var n            = e(r).outerWidth(), s = e(r).outerHeight();
            r.x = "object" == typeof t ? t.clientX + document.body.scrollLeft - i.offset().left : "number" == typeof t ? t * n / r.opt.scale : r.opt.initialval * n / r.opt.scale, r.y = "object" == typeof t ? t.clientY + document.body.scrollTop - i.offset().top : "number" == typeof t ? (r.opt.scale - r.opt.initialval - t) * s / r.opt.scale : r.opt.initialval * s / r.opt.scale, r.y = i.outerHeight() - r.y, r.scaleX = r.x * r.opt.scale / n, r.scaleY = r.y * r.opt.scale / s, r.outOfRangeX = r.scaleX > r.opt.scale ? r.scaleX - r.opt.scale : r.scaleX < 0 ? r.scaleX : 0, r.outOfRangeY = r.scaleY > r.opt.scale ? r.scaleY - r.opt.scale : r.scaleY < 0 ? r.scaleY : 0, r.outOfRange = "h" == r.opt.orientation ? r.outOfRangeX : r.outOfRangeY, r.value = "undefined" != typeof t ? "h" == r.opt.orientation ? r.x >= i.outerWidth() ? r.opt.scale : r.x <= 0 ? 0 : r.scaleX : r.y >= i.outerHeight() ? r.opt.scale : r.y <= 0 ? 0 : r.scaleY : "h" == r.opt.orientation ? r.scaleX : r.scaleY, "h" == r.opt.orientation ? r.level.width(o(r.x, n) + "%") : r.level.height(o(r.y, s)), "function" == typeof r.opt.callback && r.opt.callback(r)
        }
    }, e.fn.simpleSlider = e.simpleSlider.init, e.fn.updateSliderVal = e.simpleSlider.updateSliderVal
}(jQuery), !function (e) {
    e.mbCookie = {
        set: function (e, t, o, i) {
            t = JSON.stringify(t), o || (o = 7), i = i ? "; domain=" + i : "";
            var r, n = new Date;
            n.setTime(n.getTime() + 864e5 * o), r = "; expires=" + n.toGMTString(), document.cookie = e + "=" + t + r + "; path=/" + i
        }, get: function (e) {
            for (var t = e + "=", o = document.cookie.split(";"), i = 0; i < o.length; i++) {
                for (var r = o[i]; " " == r.charAt(0);)r = r.substring(1, r.length);
                if (0 == r.indexOf(t))return JSON.parse(r.substring(t.length, r.length))
            }
            return null
        }, remove: function (t) {
            e.mbCookie.set(t, "", -1)
        }
    }, e.mbStorage = {
        set: function (e, t) {
            t = JSON.stringify(t), localStorage.setItem(e, t)
        }, get: function (e) {
            return localStorage[e] ? JSON.parse(localStorage[e]) : null
        }, remove: function (e) {
            e ? localStorage.removeItem(e) : localStorage.clear()
        }
    }
}(jQuery);
!function (t, e, i, n) {
    function s(e, i) {
        this.el = e, this.$el = t(e), this.settings = t.extend({}, o, i), this._defaults = o, this._name = a, this._slides = [], this.currentIndex = 0, this.init()
    }

    var a = "kenburnsy", o = {
        fullscreen: !1,
        duration: 9e3,
        fadeInDuration: 1500,
        height: null
    }, r  = {
        zoomOut: function (e, i) {
            t(e).velocity({rotateZ: "3deg", scale: "1.1"}, 0).velocity({translateZ: 0, rotateZ: "0deg", scale: "1"}, i)
        }, zoomIn: function (e, i) {
            t(e).velocity({rotateZ: "0deg", scale: "1"}, 0).velocity({translateZ: 0, rotateZ: "3deg", scale: "1.1"}, i)
        }
    }, c  = function (e) {
        var i = function (t) {
            function i() {
                s(), setTimeout(function () {
                    t.resolve(a)
                })
            }

            function n() {
                s(), t.rejectWith(a)
            }

            function s() {
                a.onload = null, a.onerror = null, a.onabort = null
            }

            var a = new Image;
            a.onload = i, a.onerror = n, a.onabort = n, a.src = e
        };
        return t.Deferred(i).promise()
    };
    Object.keys || (Object.keys = function (t) {
        if (t !== Object(t))throw new TypeError("Object.keys called on a non-object");
        var e, i = [];
        for (e in t)Object.prototype.hasOwnProperty.call(t, e) && i.push(e);
        return i
    }), t.extend(s.prototype, {
        init: function () {
            var e, i = this.settings, n = this;
            e = this.$el.children().map(function (t, e) {
                return e.src
            }), this.$el.addClass(function () {
                var t = [a];
                return i.fullscreen && t.push("fullscreen"), t.join(" ")
            }), t.when.apply(t, t.map(e, c)).done(function () {
                var t = Array.prototype.slice.call(arguments);
                n.buildScene(t)
            })
        }, reveal: function (e) {
            var i = this._slides[e], n = this.$el;
            t(i).velocity({opacity: 0}, 0, function () {
                t(this).appendTo(n)
            }).velocity({opacity: 1, translateZ: 0}, {duration: this.settings.fadeInDuration, queue: !1})
        }, animate: function (t) {
            var e = Object.keys(r), i = r[e[Math.floor(e.length * Math.random())]], n = this.settings.duration, s = this._slides[t];
            i(s, n)
        }, show: function (t) {
            this.reveal(t), this.animate(t)
        }, next: function () {
            this.currentIndex = 0 === this.currentIndex ? this._slides.length - 1 : this.currentIndex - 1, this.show(this.currentIndex)
        }, addSlides: function (e) {
            var n = this.el;
            return t.map(e.reverse(), function (t) {
                var e = i.createElement("div");
                return e.style.backgroundImage = "url(" + t.src + ")", e.className = "slide", n.appendChild(e), e
            })
        }, buildScene: function (t) {
            var e = this, i = this.settings;
            this.el.innerHTML = "", this._slides = this.addSlides(t), this.currentIndex = t.length - 1, i.fullscreen || (this.el.style.height = this.settings.height || t[this.currentIndex].height + "px"), this.animate(this.currentIndex), setInterval(function () {
                e.next()
            }, i.duration - i.fadeInDuration)
        }
    }), t.fn[a] = function (e) {
        return this.each(function () {
            t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new s(this, e))
        }), this
    }
}(jQuery, window, document);
!function (t, e, n, i) {
    function s(e, n) {
        this.el = e, this.$el = t(e), this.settings = t.extend({}, o, n), this._defaults = o, this._name = a, this._slides = [], this.currentIndex = 0, this.init()
    }

    var a = "ss", o = {
        fullscreen: !1,
        duration: 9e3,
        fadeInDuration: 1500,
        height: null
    }, r  = {
        zoomOut: function (e, n) {
            t(e).velocity({translateZ: 0}, 0).velocity({translateZ: 0}, n)
        }, zoomIn: function (e, n) {
            t(e).velocity({translateZ: 0}, 0).velocity({translateZ: 0}, n)
        }
    }, c  = function (e) {
        var n = function (t) {
            function n() {
                s(), setTimeout(function () {
                    t.resolve(a)
                })
            }

            function i() {
                s(), t.rejectWith(a)
            }

            function s() {
                a.onload = null, a.onerror = null, a.onabort = null
            }

            var a = new Image;
            a.onload = n, a.onerror = i, a.onabort = i, a.src = e
        };
        return t.Deferred(n).promise()
    };
    Object.keys || (Object.keys = function (t) {
        if (t !== Object(t))throw new TypeError("Object.keys called on a non-object");
        var e, n = [];
        for (e in t)Object.prototype.hasOwnProperty.call(t, e) && n.push(e);
        return n
    }), t.extend(s.prototype, {
        init: function () {
            var e, n = this.settings, i = this;
            e = this.$el.children().map(function (t, e) {
                return e.src
            }), this.$el.addClass(function () {
                var t = [a];
                return n.fullscreen && t.push("fullscreen"), t.join(" ")
            }), t.when.apply(t, t.map(e, c)).done(function () {
                var t = Array.prototype.slice.call(arguments);
                i.buildScene(t)
            })
        }, reveal: function (e) {
            var n = this._slides[e], i = this.$el;
            t(n).velocity({opacity: 0}, 0, function () {
                t(this).appendTo(i)
            }).velocity({opacity: 1, translateZ: 0}, {duration: this.settings.fadeInDuration, queue: !1})
        }, animate: function (t) {
            var e = Object.keys(r), n = r[e[Math.floor(e.length * Math.random())]], i = this.settings.duration, s = this._slides[t];
            n(s, i)
        }, show: function (t) {
            this.reveal(t), this.animate(t)
        }, next: function () {
            this.currentIndex = 0 === this.currentIndex ? this._slides.length - 1 : this.currentIndex - 1, this.show(this.currentIndex)
        }, addSlides: function (e) {
            var i = this.el;
            return t.map(e.reverse(), function (t) {
                var e = n.createElement("div");
                return e.style.backgroundImage = "url(" + t.src + ")", e.className = "slide", i.appendChild(e), e
            })
        }, buildScene: function (t) {
            var e = this, n = this.settings;
            this.el.innerHTML = "", this._slides = this.addSlides(t), this.currentIndex = t.length - 1, n.fullscreen || (this.el.style.height = this.settings.height || t[this.currentIndex].height + "px"), this.animate(this.currentIndex), setInterval(function () {
                e.next()
            }, n.duration - n.fadeInDuration)
        }
    }), t.fn[a] = function (e) {
        return this.each(function () {
            t.data(this, "plugin_" + a) || t.data(this, "plugin_" + a, new s(this, e))
        }), this
    }
}(jQuery, window, document);
/*!
 * VelocityJS.org (1.2.3). (C) 2014 Julian Shapiro. MIT @license: en.wikipedia.org/wiki/MIT_License
 * --------------------------------------------------
 */
!function (e) {
    function t(e) {
        var t = e.length, n = r.type(e);
        return "function" === n || r.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || 0 === t || "number" == typeof t && t > 0 && t - 1 in e
    }

    if (!e.jQuery) {
        var r = function (e, t) {
            return new r.fn.init(e, t)
        };
        r.isWindow = function (e) {
            return null != e && e == e.window
        }, r.type = function (e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? o[a.call(e)] || "object" : typeof e
        }, r.isArray = Array.isArray || function (e) {
                return "array" === r.type(e)
            }, r.isPlainObject = function (e) {
            var t;
            if (!e || "object" !== r.type(e) || e.nodeType || r.isWindow(e))return !1;
            try {
                if (e.constructor && !i.call(e, "constructor") && !i.call(e.constructor.prototype, "isPrototypeOf"))return !1
            } catch (n) {
                return !1
            }
            for (t in e);
            return void 0 === t || i.call(e, t)
        }, r.each = function (e, r, n) {
            var o, i = 0, a = e.length, l = t(e);
            if (n) {
                if (l)for (; a > i && (o = r.apply(e[i], n), o !== !1); i++); else for (i in e)if (o = r.apply(e[i], n), o === !1)break
            } else if (l)for (; a > i && (o = r.call(e[i], i, e[i]), o !== !1); i++); else for (i in e)if (o = r.call(e[i], i, e[i]), o === !1)break;
            return e
        }, r.data = function (e, t, o) {
            if (void 0 === o) {
                var i = e[r.expando], a = i && n[i];
                if (void 0 === t)return a;
                if (a && t in a)return a[t]
            } else if (void 0 !== t) {
                var i = e[r.expando] || (e[r.expando] = ++r.uuid);
                return n[i] = n[i] || {}, n[i][t] = o, o
            }
        }, r.removeData = function (e, t) {
            var o = e[r.expando], i = o && n[o];
            i && r.each(t, function (e, t) {
                delete i[t]
            })
        }, r.extend = function () {
            var e, t, n, o, i, a, l = arguments[0] || {}, s = 1, c = arguments.length, u = !1;
            for ("boolean" == typeof l && (u = l, l = arguments[s] || {}, s++), "object" != typeof l && "function" !== r.type(l) && (l = {}), s === c && (l = this, s--); c > s; s++)if (null != (i = arguments[s]))for (o in i)e = l[o], n = i[o], l !== n && (u && n && (r.isPlainObject(n) || (t = r.isArray(n))) ? (t ? (t = !1, a = e && r.isArray(e) ? e : []) : a = e && r.isPlainObject(e) ? e : {}, l[o] = r.extend(u, a, n)) : void 0 !== n && (l[o] = n));
            return l
        }, r.queue = function (e, n, o) {
            function i(e, r) {
                var n = r || [];
                return null != e && (t(Object(e)) ? !function (e, t) {
                        for (var r = +t.length, n = 0, o = e.length; r > n;)e[o++] = t[n++];
                        if (r !== r)for (; void 0 !== t[n];)e[o++] = t[n++];
                        return e.length = o, e
                    }(n, "string" == typeof e ? [e] : e) : [].push.call(n, e)), n
            }

            if (e) {
                n     = (n || "fx") + "queue";
                var a = r.data(e, n);
                return o ? (!a || r.isArray(o) ? a = r.data(e, n, i(o)) : a.push(o), a) : a || []
            }
        }, r.dequeue = function (e, t) {
            r.each(e.nodeType ? [e] : e, function (e, n) {
                t     = t || "fx";
                var o = r.queue(n, t), i = o.shift();
                "inprogress" === i && (i = o.shift()), i && ("fx" === t && o.unshift("inprogress"), i.call(n, function () {
                    r.dequeue(n, t)
                }))
            })
        }, r.fn = r.prototype = {
            init: function (e) {
                if (e.nodeType)return this[0] = e, this;
                throw new Error("Not a DOM node.")
            }, offset: function () {
                var t = this[0].getBoundingClientRect ? this[0].getBoundingClientRect() : {top: 0, left: 0};
                return {
                    top: t.top + (e.pageYOffset || document.scrollTop || 0) - (document.clientTop || 0),
                    left: t.left + (e.pageXOffset || document.scrollLeft || 0) - (document.clientLeft || 0)
                }
            }, position: function () {
                function e() {
                    for (var e = this.offsetParent || document; e && "html" === !e.nodeType.toLowerCase && "static" === e.style.position;)e = e.offsetParent;
                    return e || document
                }

                var t = this[0], e = e.apply(t), n = this.offset(), o = /^(?:body|html)$/i.test(e.nodeName) ? {
                        top: 0,
                        left: 0
                    } : r(e).offset();
                return n.top -= parseFloat(t.style.marginTop) || 0, n.left -= parseFloat(t.style.marginLeft) || 0, e.style && (o.top += parseFloat(e.style.borderTopWidth) || 0, o.left += parseFloat(e.style.borderLeftWidth) || 0), {
                    top: n.top - o.top,
                    left: n.left - o.left
                }
            }
        };
        var n = {};
        r.expando = "velocity" + (new Date).getTime(), r.uuid = 0;
        for (var o = {}, i = o.hasOwnProperty, a = o.toString, l = "Boolean Number String Function Array Date RegExp Object Error".split(" "), s = 0; s < l.length; s++)o["[object " + l[s] + "]"] = l[s].toLowerCase();
        r.fn.init.prototype = r.fn, e.Velocity = {Utilities: r}
    }
}(window), function (e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : e()
}(function () {
    return function (e, t, r, n) {
        function o(e) {
            for (var t = -1, r = e ? e.length : 0, n = []; ++t < r;) {
                var o = e[t];
                o && n.push(o)
            }
            return n
        }

        function i(e) {
            return h.isWrapped(e) ? e = [].slice.call(e) : h.isNode(e) && (e = [e]), e
        }

        function a(e) {
            var t = d.data(e, "velocity");
            return null === t ? n : t
        }

        function l(e) {
            return function (t) {
                return Math.round(t * e) * (1 / e)
            }
        }

        function s(e, r, n, o) {
            function i(e, t) {
                return 1 - 3 * t + 3 * e
            }

            function a(e, t) {
                return 3 * t - 6 * e
            }

            function l(e) {
                return 3 * e
            }

            function s(e, t, r) {
                return ((i(t, r) * e + a(t, r)) * e + l(t)) * e
            }

            function c(e, t, r) {
                return 3 * i(t, r) * e * e + 2 * a(t, r) * e + l(t)
            }

            function u(t, r) {
                for (var o = 0; h > o; ++o) {
                    var i = c(r, e, n);
                    if (0 === i)return r;
                    var a = s(r, e, n) - t;
                    r -= a / i
                }
                return r
            }

            function p() {
                for (var t = 0; y > t; ++t)P[t] = s(t * x, e, n)
            }

            function d(t, r, o) {
                var i, a, l = 0;
                do a = r + (o - r) / 2, i = s(a, e, n) - t, i > 0 ? o = a : r = a; while (Math.abs(i) > m && ++l < b);
                return a
            }

            function f(t) {
                for (var r = 0, o = 1, i = y - 1; o != i && P[o] <= t; ++o)r += x;
                --o;
                var a = (t - P[o]) / (P[o + 1] - P[o]), l = r + a * x, s = c(l, e, n);
                return s >= v ? u(t, l) : 0 == s ? l : d(t, r, r + x)
            }

            function g() {
                T = !0, (e != r || n != o) && p()
            }

            var h = 4, v = .001, m = 1e-7, b = 10, y = 11, x = 1 / (y - 1), w = "Float32Array" in t;
            if (4 !== arguments.length)return !1;
            for (var S = 0; 4 > S; ++S)if ("number" != typeof arguments[S] || isNaN(arguments[S]) || !isFinite(arguments[S]))return !1;
            e = Math.min(e, 1), n = Math.min(n, 1), e = Math.max(e, 0), n = Math.max(n, 0);
            var P              = w ? new Float32Array(y) : new Array(y), T = !1, Y = function (t) {
                return T || g(), e === r && n === o ? t : 0 === t ? 0 : 1 === t ? 1 : s(f(t), r, o)
            };
            Y.getControlPoints = function () {
                return [{x: e, y: r}, {x: n, y: o}]
            };
            var R              = "generateBezier(" + [e, r, n, o] + ")";
            return Y.toString = function () {
                return R
            }, Y
        }

        function c(e, t) {
            var r = e;
            return h.isString(e) ? y.Easings[e] || (r = !1) : r = h.isArray(e) && 1 === e.length ? l.apply(null, e) : h.isArray(e) && 2 === e.length ? x.apply(null, e.concat([t])) : h.isArray(e) && 4 === e.length ? s.apply(null, e) : !1, r === !1 && (r = y.Easings[y.defaults.easing] ? y.defaults.easing : b), r
        }

        function u(e) {
            if (e) {
                var t = (new Date).getTime(), r = y.State.calls.length;
                r > 1e4 && (y.State.calls = o(y.State.calls));
                for (var i = 0; r > i; i++)if (y.State.calls[i]) {
                    var l = y.State.calls[i], s = l[0], c = l[2], f = l[3], g = !!f, v = null;
                    f || (f = y.State.calls[i][3] = t - 16);
                    for (var m = Math.min((t - f) / c.duration, 1), b = 0, x = s.length; x > b; b++) {
                        var S = s[b], T = S.element;
                        if (a(T)) {
                            var Y = !1;
                            if (c.display !== n && null !== c.display && "none" !== c.display) {
                                if ("flex" === c.display) {
                                    var R = ["-webkit-box", "-moz-box", "-ms-flexbox", "-webkit-flex"];
                                    d.each(R, function (e, t) {
                                        w.setPropertyValue(T, "display", t)
                                    })
                                }
                                w.setPropertyValue(T, "display", c.display)
                            }
                            c.visibility !== n && "hidden" !== c.visibility && w.setPropertyValue(T, "visibility", c.visibility);
                            for (var V in S)if ("element" !== V) {
                                var E, C = S[V], k = h.isString(C.easing) ? y.Easings[C.easing] : C.easing;
                                if (1 === m) E = C.endValue; else {
                                    var X = C.endValue - C.startValue;
                                    if (E = C.startValue + X * k(m, c, X), !g && E === C.currentValue)continue
                                }
                                if (C.currentValue = E, "tween" === V) v = E; else {
                                    if (w.Hooks.registered[V]) {
                                        var L = w.Hooks.getRoot(V), H = a(T).rootPropertyValueCache[L];
                                        H && (C.rootPropertyValue = H)
                                    }
                                    var W = w.setPropertyValue(T, V, C.currentValue + (0 === parseFloat(E) ? "" : C.unitType), C.rootPropertyValue, C.scrollData);
                                    w.Hooks.registered[V] && (w.Normalizations.registered[L] ? a(T).rootPropertyValueCache[L] = w.Normalizations.registered[L]("extract", null, W[1]) : a(T).rootPropertyValueCache[L] = W[1]), "transform" === W[0] && (Y = !0)
                                }
                            }
                            c.mobileHA && a(T).transformCache.translate3d === n && (a(T).transformCache.translate3d = "(0px, 0px, 0px)", Y = !0), Y && w.flushTransformCache(T)
                        }
                    }
                    c.display !== n && "none" !== c.display && (y.State.calls[i][2].display = !1), c.visibility !== n && "hidden" !== c.visibility && (y.State.calls[i][2].visibility = !1), c.progress && c.progress.call(l[1], l[1], m, Math.max(0, f + c.duration - t), f, v), 1 === m && p(i)
                }
            }
            y.State.isTicking && P(u)
        }

        function p(e, t) {
            if (!y.State.calls[e])return !1;
            for (var r = y.State.calls[e][0], o = y.State.calls[e][1], i = y.State.calls[e][2], l = y.State.calls[e][4], s = !1, c = 0, u = r.length; u > c; c++) {
                var p = r[c].element;
                if (t || i.loop || ("none" === i.display && w.setPropertyValue(p, "display", i.display), "hidden" === i.visibility && w.setPropertyValue(p, "visibility", i.visibility)), i.loop !== !0 && (d.queue(p)[1] === n || !/\.velocityQueueEntryFlag/i.test(d.queue(p)[1])) && a(p)) {
                    a(p).isAnimating = !1, a(p).rootPropertyValueCache = {};
                    var f = !1;
                    d.each(w.Lists.transforms3D, function (e, t) {
                        var r = /^scale/.test(t) ? 1 : 0, o = a(p).transformCache[t];
                        a(p).transformCache[t] !== n && new RegExp("^\\(" + r + "[^.]").test(o) && (f = !0, delete a(p).transformCache[t])
                    }), i.mobileHA && (f = !0, delete a(p).transformCache.translate3d), f && w.flushTransformCache(p), w.Values.removeClass(p, "velocity-animating")
                }
                if (!t && i.complete && !i.loop && c === u - 1)try {
                    i.complete.call(o, o)
                } catch (g) {
                    setTimeout(function () {
                        throw g
                    }, 1)
                }
                l && i.loop !== !0 && l(o), a(p) && i.loop === !0 && !t && (d.each(a(p).tweensContainer, function (e, t) {
                    /^rotate/.test(e) && 360 === parseFloat(t.endValue) && (t.endValue = 0, t.startValue = 360), /^backgroundPosition/.test(e) && 100 === parseFloat(t.endValue) && "%" === t.unitType && (t.endValue = 0, t.startValue = 100)
                }), y(p, "reverse", {loop: !0, delay: i.delay})), i.queue !== !1 && d.dequeue(p, i.queue)
            }
            y.State.calls[e] = !1;
            for (var h = 0, v = y.State.calls.length; v > h; h++)if (y.State.calls[h] !== !1) {
                s = !0;
                break
            }
            s === !1 && (y.State.isTicking = !1, delete y.State.calls, y.State.calls = [])
        }

        var d, f = function () {
            if (r.documentMode)return r.documentMode;
            for (var e = 7; e > 4; e--) {
                var t = r.createElement("div");
                if (t.innerHTML = "<!--[if IE " + e + "]><span></span><![endif]-->", t.getElementsByTagName("span").length)return t = null, e
            }
            return n
        }(), g   = function () {
            var e = 0;
            return t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || function (t) {
                    var r, n = (new Date).getTime();
                    return r = Math.max(0, 16 - (n - e)), e = n + r, setTimeout(function () {
                        t(n + r)
                    }, r)
                }
        }(), h   = {
            isString: function (e) {
                return "string" == typeof e
            }, isArray: Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
            }, isFunction: function (e) {
                return "[object Function]" === Object.prototype.toString.call(e)
            }, isNode: function (e) {
                return e && e.nodeType
            }, isNodeList: function (e) {
                return "object" == typeof e && /^\[object (HTMLCollection|NodeList|Object)\]$/.test(Object.prototype.toString.call(e)) && e.length !== n && (0 === e.length || "object" == typeof e[0] && e[0].nodeType > 0)
            }, isWrapped: function (e) {
                return e && (e.jquery || t.Zepto && t.Zepto.zepto.isZ(e))
            }, isSVG: function (e) {
                return t.SVGElement && e instanceof t.SVGElement
            }, isEmptyObject: function (e) {
                for (var t in e)return !1;
                return !0
            }
        }, v     = !1;
        if (e.fn && e.fn.jquery ? (d = e, v = !0) : d = t.Velocity.Utilities, 8 >= f && !v)throw new Error("Velocity: IE8 and below require jQuery to be loaded before Velocity.");
        if (7 >= f)return void(jQuery.fn.velocity = jQuery.fn.animate);
        var m = 400, b = "swing", y = {
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
            Utilities: d,
            Redirects: {},
            Easings: {},
            Promise: t.Promise,
            defaults: {
                queue: "",
                duration: m,
                easing: b,
                begin: n,
                complete: n,
                progress: n,
                display: n,
                visibility: n,
                loop: !1,
                delay: !1,
                mobileHA: !0,
                _cacheValues: !0
            },
            init: function (e) {
                d.data(e, "velocity", {
                    isSVG: h.isSVG(e),
                    isAnimating: !1,
                    computedStyle: null,
                    tweensContainer: null,
                    rootPropertyValueCache: {},
                    transformCache: {}
                })
            },
            hook: null,
            mock: !1,
            version: {major: 1, minor: 2, patch: 2},
            debug: !1
        };
        t.pageYOffset !== n ? (y.State.scrollAnchor = t, y.State.scrollPropertyLeft = "pageXOffset", y.State.scrollPropertyTop = "pageYOffset") : (y.State.scrollAnchor = r.documentElement || r.body.parentNode || r.body, y.State.scrollPropertyLeft = "scrollLeft", y.State.scrollPropertyTop = "scrollTop");
        var x = function () {
            function e(e) {
                return -e.tension * e.x - e.friction * e.v
            }

            function t(t, r, n) {
                var o = {x: t.x + n.dx * r, v: t.v + n.dv * r, tension: t.tension, friction: t.friction};
                return {dx: o.v, dv: e(o)}
            }

            function r(r, n) {
                var o = {
                    dx: r.v,
                    dv: e(r)
                }, i  = t(r, .5 * n, o), a = t(r, .5 * n, i), l = t(r, n, a), s = 1 / 6 * (o.dx + 2 * (i.dx + a.dx) + l.dx), c = 1 / 6 * (o.dv + 2 * (i.dv + a.dv) + l.dv);
                return r.x = r.x + s * n, r.v = r.v + c * n, r
            }

            return function n(e, t, o) {
                var i, a, l, s = {x: -1, v: 0, tension: null, friction: null}, c = [0], u = 0, p = 1e-4, d = .016;
                for (e = parseFloat(e) || 500, t = parseFloat(t) || 20, o = o || null, s.tension = e, s.friction = t, i = null !== o, i ? (u = n(e, t), a = u / o * d) : a = d; ;)if (l = r(l || s, a), c.push(1 + l.x), u += 16, !(Math.abs(l.x) > p && Math.abs(l.v) > p))break;
                return i ? function (e) {
                        return c[e * (c.length - 1) | 0]
                    } : u
            }
        }();
        y.Easings = {
            linear: function (e) {
                return e
            }, swing: function (e) {
                return .5 - Math.cos(e * Math.PI) / 2
            }, spring: function (e) {
                return 1 - Math.cos(4.5 * e * Math.PI) * Math.exp(6 * -e)
            }
        }, d.each([["ease", [.25, .1, .25, 1]], ["ease-in", [.42, 0, 1, 1]], ["ease-out", [0, 0, .58, 1]], ["ease-in-out", [.42, 0, .58, 1]], ["easeInSine", [.47, 0, .745, .715]], ["easeOutSine", [.39, .575, .565, 1]], ["easeInOutSine", [.445, .05, .55, .95]], ["easeInQuad", [.55, .085, .68, .53]], ["easeOutQuad", [.25, .46, .45, .94]], ["easeInOutQuad", [.455, .03, .515, .955]], ["easeInCubic", [.55, .055, .675, .19]], ["easeOutCubic", [.215, .61, .355, 1]], ["easeInOutCubic", [.645, .045, .355, 1]], ["easeInQuart", [.895, .03, .685, .22]], ["easeOutQuart", [.165, .84, .44, 1]], ["easeInOutQuart", [.77, 0, .175, 1]], ["easeInQuint", [.755, .05, .855, .06]], ["easeOutQuint", [.23, 1, .32, 1]], ["easeInOutQuint", [.86, 0, .07, 1]], ["easeInExpo", [.95, .05, .795, .035]], ["easeOutExpo", [.19, 1, .22, 1]], ["easeInOutExpo", [1, 0, 0, 1]], ["easeInCirc", [.6, .04, .98, .335]], ["easeOutCirc", [.075, .82, .165, 1]], ["easeInOutCirc", [.785, .135, .15, .86]]], function (e, t) {
            y.Easings[t[0]] = s.apply(null, t[1])
        });
        var w = y.CSS = {
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
                }, registered: {}, register: function () {
                    for (var e = 0; e < w.Lists.colors.length; e++) {
                        var t                                = "color" === w.Lists.colors[e] ? "0 0 0 1" : "255 255 255 1";
                        w.Hooks.templates[w.Lists.colors[e]] = ["Red Green Blue Alpha", t]
                    }
                    var r, n, o;
                    if (f)for (r in w.Hooks.templates) {
                        n = w.Hooks.templates[r], o = n[0].split(" ");
                        var i = n[1].match(w.RegEx.valueSplit);
                        "Color" === o[0] && (o.push(o.shift()), i.push(i.shift()), w.Hooks.templates[r] = [o.join(" "), i.join(" ")])
                    }
                    for (r in w.Hooks.templates) {
                        n = w.Hooks.templates[r], o = n[0].split(" ");
                        for (var e in o) {
                            var a                 = r + o[e], l = e;
                            w.Hooks.registered[a] = [r, l]
                        }
                    }
                }, getRoot: function (e) {
                    var t = w.Hooks.registered[e];
                    return t ? t[0] : e
                }, cleanRootPropertyValue: function (e, t) {
                    return w.RegEx.valueUnwrap.test(t) && (t = t.match(w.RegEx.valueUnwrap)[1]), w.Values.isCSSNullValue(t) && (t = w.Hooks.templates[e][1]), t
                }, extractValue: function (e, t) {
                    var r = w.Hooks.registered[e];
                    if (r) {
                        var n = r[0], o = r[1];
                        return t = w.Hooks.cleanRootPropertyValue(n, t), t.toString().match(w.RegEx.valueSplit)[o]
                    }
                    return t
                }, injectValue: function (e, t, r) {
                    var n = w.Hooks.registered[e];
                    if (n) {
                        var o, i, a = n[0], l = n[1];
                        return r = w.Hooks.cleanRootPropertyValue(a, r), o = r.toString().match(w.RegEx.valueSplit), o[l] = t, i = o.join(" ")
                    }
                    return r
                }
            },
            Normalizations: {
                registered: {
                    clip: function (e, t, r) {
                        switch (e) {
                            case"name":
                                return "clip";
                            case"extract":
                                var n;
                                return w.RegEx.wrappedValueAlreadyExtracted.test(r) ? n = r : (n = r.toString().match(w.RegEx.valueUnwrap), n = n ? n[1].replace(/,(\s+)?/g, " ") : r), n;
                            case"inject":
                                return "rect(" + r + ")"
                        }
                    }, blur: function (e, t, r) {
                        switch (e) {
                            case"name":
                                return y.State.isFirefox ? "filter" : "-webkit-filter";
                            case"extract":
                                var n = parseFloat(r);
                                if (!n && 0 !== n) {
                                    var o = r.toString().match(/blur\(([0-9]+[A-z]+)\)/i);
                                    n     = o ? o[1] : 0
                                }
                                return n;
                            case"inject":
                                return parseFloat(r) ? "blur(" + r + ")" : "none"
                        }
                    }, opacity: function (e, t, r) {
                        if (8 >= f)switch (e) {
                            case"name":
                                return "filter";
                            case"extract":
                                var n = r.toString().match(/alpha\(opacity=(.*)\)/i);
                                return r = n ? n[1] / 100 : 1;
                            case"inject":
                                return t.style.zoom = 1, parseFloat(r) >= 1 ? "" : "alpha(opacity=" + parseInt(100 * parseFloat(r), 10) + ")"
                        } else switch (e) {
                            case"name":
                                return "opacity";
                            case"extract":
                                return r;
                            case"inject":
                                return r
                        }
                    }
                }, register: function () {
                    9 >= f || y.State.isGingerbread || (w.Lists.transformsBase = w.Lists.transformsBase.concat(w.Lists.transforms3D));
                    for (var e = 0; e < w.Lists.transformsBase.length; e++)!function () {
                        var t                          = w.Lists.transformsBase[e];
                        w.Normalizations.registered[t] = function (e, r, o) {
                            switch (e) {
                                case"name":
                                    return "transform";
                                case"extract":
                                    return a(r) === n || a(r).transformCache[t] === n ? /^scale/i.test(t) ? 1 : 0 : a(r).transformCache[t].replace(/[()]/g, "");
                                case"inject":
                                    var i = !1;
                                    switch (t.substr(0, t.length - 1)) {
                                        case"translate":
                                            i = !/(%|px|em|rem|vw|vh|\d)$/i.test(o);
                                            break;
                                        case"scal":
                                        case"scale":
                                            y.State.isAndroid && a(r).transformCache[t] === n && 1 > o && (o = 1), i = !/(\d)$/i.test(o);
                                            break;
                                        case"skew":
                                            i = !/(deg|\d)$/i.test(o);
                                            break;
                                        case"rotate":
                                            i = !/(deg|\d)$/i.test(o)
                                    }
                                    return i || (a(r).transformCache[t] = "(" + o + ")"), a(r).transformCache[t]
                            }
                        }
                    }();
                    for (var e = 0; e < w.Lists.colors.length; e++)!function () {
                        var t                          = w.Lists.colors[e];
                        w.Normalizations.registered[t] = function (e, r, o) {
                            switch (e) {
                                case"name":
                                    return t;
                                case"extract":
                                    var i;
                                    if (w.RegEx.wrappedValueAlreadyExtracted.test(o)) i = o; else {
                                        var a, l = {
                                            black: "rgb(0, 0, 0)",
                                            blue: "rgb(0, 0, 255)",
                                            gray: "rgb(128, 128, 128)",
                                            green: "rgb(0, 128, 0)",
                                            red: "rgb(255, 0, 0)",
                                            white: "rgb(255, 255, 255)"
                                        };
                                        /^[A-z]+$/i.test(o) ? a = l[o] !== n ? l[o] : l.black : w.RegEx.isHex.test(o) ? a = "rgb(" + w.Values.hexToRgb(o).join(" ") + ")" : /^rgba?\(/i.test(o) || (a = l.black), i = (a || o).toString().match(w.RegEx.valueUnwrap)[1].replace(/,(\s+)?/g, " ")
                                    }
                                    return 8 >= f || 3 !== i.split(" ").length || (i += " 1"), i;
                                case"inject":
                                    return 8 >= f ? 4 === o.split(" ").length && (o = o.split(/\s+/).slice(0, 3).join(" ")) : 3 === o.split(" ").length && (o += " 1"), (8 >= f ? "rgb" : "rgba") + "(" + o.replace(/\s+/g, ",").replace(/\.(\d)+(?=,)/g, "") + ")"
                            }
                        }
                    }()
                }
            },
            Names: {
                camelCase: function (e) {
                    return e.replace(/-(\w)/g, function (e, t) {
                        return t.toUpperCase()
                    })
                }, SVGAttribute: function (e) {
                    var t = "width|height|x|y|cx|cy|r|rx|ry|x1|x2|y1|y2";
                    return (f || y.State.isAndroid && !y.State.isChrome) && (t += "|transform"), new RegExp("^(" + t + ")$", "i").test(e)
                }, prefixCheck: function (e) {
                    if (y.State.prefixMatches[e])return [y.State.prefixMatches[e], !0];
                    for (var t = ["", "Webkit", "Moz", "ms", "O"], r = 0, n = t.length; n > r; r++) {
                        var o;
                        if (o = 0 === r ? e : t[r] + e.replace(/^\w/, function (e) {
                                    return e.toUpperCase()
                                }), h.isString(y.State.prefixElement.style[o]))return y.State.prefixMatches[e] = o, [o, !0]
                    }
                    return [e, !1]
                }
            },
            Values: {
                hexToRgb: function (e) {
                    var t, r = /^#?([a-f\d])([a-f\d])([a-f\d])$/i, n = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i;
                    return e = e.replace(r, function (e, t, r, n) {
                        return t + t + r + r + n + n
                    }), t = n.exec(e), t ? [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)] : [0, 0, 0]
                }, isCSSNullValue: function (e) {
                    return 0 == e || /^(none|auto|transparent|(rgba\(0, ?0, ?0, ?0\)))$/i.test(e)
                }, getUnitType: function (e) {
                    return /^(rotate|skew)/i.test(e) ? "deg" : /(^(scale|scaleX|scaleY|scaleZ|alpha|flexGrow|flexHeight|zIndex|fontWeight)$)|((opacity|red|green|blue|alpha)$)/i.test(e) ? "" : "px"
                }, getDisplayType: function (e) {
                    var t = e && e.tagName.toString().toLowerCase();
                    return /^(b|big|i|small|tt|abbr|acronym|cite|code|dfn|em|kbd|strong|samp|var|a|bdo|br|img|map|object|q|script|span|sub|sup|button|input|label|select|textarea)$/i.test(t) ? "inline" : /^(li)$/i.test(t) ? "list-item" : /^(tr)$/i.test(t) ? "table-row" : /^(table)$/i.test(t) ? "table" : /^(tbody)$/i.test(t) ? "table-row-group" : "block"
                }, addClass: function (e, t) {
                    e.classList ? e.classList.add(t) : e.className += (e.className.length ? " " : "") + t
                }, removeClass: function (e, t) {
                    e.classList ? e.classList.remove(t) : e.className = e.className.toString().replace(new RegExp("(^|\\s)" + t.split(" ").join("|") + "(\\s|$)", "gi"), " ")
                }
            },
            getPropertyValue: function (e, r, o, i) {
                function l(e, r) {
                    function o() {
                        c && w.setPropertyValue(e, "display", "none")
                    }

                    var s = 0;
                    if (8 >= f) s = d.css(e, r); else {
                        var c = !1;
                        if (/^(width|height)$/.test(r) && 0 === w.getPropertyValue(e, "display") && (c = !0, w.setPropertyValue(e, "display", w.Values.getDisplayType(e))), !i) {
                            if ("height" === r && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var u = e.offsetHeight - (parseFloat(w.getPropertyValue(e, "borderTopWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderBottomWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingTop")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingBottom")) || 0);
                                return o(), u
                            }
                            if ("width" === r && "border-box" !== w.getPropertyValue(e, "boxSizing").toString().toLowerCase()) {
                                var p = e.offsetWidth - (parseFloat(w.getPropertyValue(e, "borderLeftWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "borderRightWidth")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingLeft")) || 0) - (parseFloat(w.getPropertyValue(e, "paddingRight")) || 0);
                                return o(), p
                            }
                        }
                        var g;
                        g = a(e) === n ? t.getComputedStyle(e, null) : a(e).computedStyle ? a(e).computedStyle : a(e).computedStyle = t.getComputedStyle(e, null), "borderColor" === r && (r = "borderTopColor"), s = 9 === f && "filter" === r ? g.getPropertyValue(r) : g[r], ("" === s || null === s) && (s = e.style[r]), o()
                    }
                    if ("auto" === s && /^(top|right|bottom|left)$/i.test(r)) {
                        var h = l(e, "position");
                        ("fixed" === h || "absolute" === h && /top|left/i.test(r)) && (s = d(e).position()[r] + "px")
                    }
                    return s
                }

                var s;
                if (w.Hooks.registered[r]) {
                    var c = r, u = w.Hooks.getRoot(c);
                    o === n && (o = w.getPropertyValue(e, w.Names.prefixCheck(u)[0])), w.Normalizations.registered[u] && (o = w.Normalizations.registered[u]("extract", e, o)), s = w.Hooks.extractValue(c, o)
                } else if (w.Normalizations.registered[r]) {
                    var p, g;
                    p = w.Normalizations.registered[r]("name", e), "transform" !== p && (g = l(e, w.Names.prefixCheck(p)[0]), w.Values.isCSSNullValue(g) && w.Hooks.templates[r] && (g = w.Hooks.templates[r][1])), s = w.Normalizations.registered[r]("extract", e, g)
                }
                if (!/^[\d-]/.test(s))if (a(e) && a(e).isSVG && w.Names.SVGAttribute(r))if (/^(height|width)$/i.test(r))try {
                    s = e.getBBox()[r]
                } catch (h) {
                    s = 0
                } else s = e.getAttribute(r); else s = l(e, w.Names.prefixCheck(r)[0]);
                return w.Values.isCSSNullValue(s) && (s = 0), y.debug >= 2 && console.log("Get " + r + ": " + s), s
            },
            setPropertyValue: function (e, r, n, o, i) {
                var l = r;
                if ("scroll" === r) i.container ? i.container["scroll" + i.direction] = n : "Left" === i.direction ? t.scrollTo(n, i.alternateValue) : t.scrollTo(i.alternateValue, n); else if (w.Normalizations.registered[r] && "transform" === w.Normalizations.registered[r]("name", e)) w.Normalizations.registered[r]("inject", e, n), l = "transform", n = a(e).transformCache[r]; else {
                    if (w.Hooks.registered[r]) {
                        var s = r, c = w.Hooks.getRoot(r);
                        o = o || w.getPropertyValue(e, c), n = w.Hooks.injectValue(s, n, o), r = c
                    }
                    if (w.Normalizations.registered[r] && (n = w.Normalizations.registered[r]("inject", e, n), r = w.Normalizations.registered[r]("name", e)), l = w.Names.prefixCheck(r)[0], 8 >= f)try {
                        e.style[l] = n
                    } catch (u) {
                        y.debug && console.log("Browser does not support [" + n + "] for [" + l + "]")
                    } else a(e) && a(e).isSVG && w.Names.SVGAttribute(r) ? e.setAttribute(r, n) : e.style[l] = n;
                    y.debug >= 2 && console.log("Set " + r + " (" + l + "): " + n)
                }
                return [l, n]
            },
            flushTransformCache: function (e) {
                function t(t) {
                    return parseFloat(w.getPropertyValue(e, t))
                }

                var r = "";
                if ((f || y.State.isAndroid && !y.State.isChrome) && a(e).isSVG) {
                    var n = {
                        translate: [t("translateX"), t("translateY")],
                        skewX: [t("skewX")],
                        skewY: [t("skewY")],
                        scale: 1 !== t("scale") ? [t("scale"), t("scale")] : [t("scaleX"), t("scaleY")],
                        rotate: [t("rotateZ"), 0, 0]
                    };
                    d.each(a(e).transformCache, function (e) {
                        /^translate/i.test(e) ? e = "translate" : /^scale/i.test(e) ? e = "scale" : /^rotate/i.test(e) && (e = "rotate"), n[e] && (r += e + "(" + n[e].join(" ") + ") ", delete n[e])
                    })
                } else {
                    var o, i;
                    d.each(a(e).transformCache, function (t) {
                        return o = a(e).transformCache[t], "transformPerspective" === t ? (i = o, !0) : (9 === f && "rotateZ" === t && (t = "rotate"), void(r += t + o + " "))
                    }), i && (r = "perspective" + i + " " + r)
                }
                w.setPropertyValue(e, "transform", r)
            }
        };
        w.Hooks.register(), w.Normalizations.register(), y.hook = function (e, t, r) {
            var o = n;
            return e = i(e), d.each(e, function (e, i) {
                if (a(i) === n && y.init(i), r === n) o === n && (o = y.CSS.getPropertyValue(i, t)); else {
                    var l = y.CSS.setPropertyValue(i, t, r);
                    "transform" === l[0] && y.CSS.flushTransformCache(i), o = l
                }
            }), o
        };
        var S = function () {
            function e() {
                return l ? V.promise || null : s
            }

            function o() {
                function e(e) {
                    function p(e, t) {
                        var r = n, o = n, a = n;
                        return h.isArray(e) ? (r = e[0], !h.isArray(e[1]) && /^[\d-]/.test(e[1]) || h.isFunction(e[1]) || w.RegEx.isHex.test(e[1]) ? a = e[1] : (h.isString(e[1]) && !w.RegEx.isHex.test(e[1]) || h.isArray(e[1])) && (o = t ? e[1] : c(e[1], l.duration), e[2] !== n && (a = e[2]))) : r = e, t || (o = o || l.easing), h.isFunction(r) && (r = r.call(i, T, P)), h.isFunction(a) && (a = a.call(i, T, P)), [r || 0, o, a]
                    }

                    function f(e, t) {
                        var r, n;
                        return n = (t || "0").toString().toLowerCase().replace(/[%A-z]+$/, function (e) {
                            return r = e, ""
                        }), r || (r = w.Values.getUnitType(e)), [n, r]
                    }

                    function m() {
                        var e = {
                            myParent: i.parentNode || r.body,
                            position: w.getPropertyValue(i, "position"),
                            fontSize: w.getPropertyValue(i, "fontSize")
                        }, n  = e.position === W.lastPosition && e.myParent === W.lastParent, o = e.fontSize === W.lastFontSize;
                        W.lastParent = e.myParent, W.lastPosition = e.position, W.lastFontSize = e.fontSize;
                        var l = 100, s = {};
                        if (o && n) s.emToPx = W.lastEmToPx, s.percentToPxWidth = W.lastPercentToPxWidth, s.percentToPxHeight = W.lastPercentToPxHeight; else {
                            var c = a(i).isSVG ? r.createElementNS("http://www.w3.org/2000/svg", "rect") : r.createElement("div");
                            y.init(c), e.myParent.appendChild(c), d.each(["overflow", "overflowX", "overflowY"], function (e, t) {
                                y.CSS.setPropertyValue(c, t, "hidden")
                            }), y.CSS.setPropertyValue(c, "position", e.position), y.CSS.setPropertyValue(c, "fontSize", e.fontSize), y.CSS.setPropertyValue(c, "boxSizing", "content-box"), d.each(["minWidth", "maxWidth", "width", "minHeight", "maxHeight", "height"], function (e, t) {
                                y.CSS.setPropertyValue(c, t, l + "%")
                            }), y.CSS.setPropertyValue(c, "paddingLeft", l + "em"), s.percentToPxWidth = W.lastPercentToPxWidth = (parseFloat(w.getPropertyValue(c, "width", null, !0)) || 1) / l, s.percentToPxHeight = W.lastPercentToPxHeight = (parseFloat(w.getPropertyValue(c, "height", null, !0)) || 1) / l, s.emToPx = W.lastEmToPx = (parseFloat(w.getPropertyValue(c, "paddingLeft")) || 1) / l, e.myParent.removeChild(c)
                        }
                        return null === W.remToPx && (W.remToPx = parseFloat(w.getPropertyValue(r.body, "fontSize")) || 16), null === W.vwToPx && (W.vwToPx = parseFloat(t.innerWidth) / 100, W.vhToPx = parseFloat(t.innerHeight) / 100), s.remToPx = W.remToPx, s.vwToPx = W.vwToPx, s.vhToPx = W.vhToPx, y.debug >= 1 && console.log("Unit ratios: " + JSON.stringify(s), i), s
                    }

                    if (l.begin && 0 === T)try {
                        l.begin.call(g, g)
                    } catch (x) {
                        setTimeout(function () {
                            throw x
                        }, 1)
                    }
                    if ("scroll" === E) {
                        var S, Y, R, C = /^x$/i.test(l.axis) ? "Left" : "Top", k = parseFloat(l.offset) || 0;
                        l.container ? h.isWrapped(l.container) || h.isNode(l.container) ? (l.container = l.container[0] || l.container, S = l.container["scroll" + C], R = S + d(i).position()[C.toLowerCase()] + k) : l.container = null : (S = y.State.scrollAnchor[y.State["scrollProperty" + C]], Y = y.State.scrollAnchor[y.State["scrollProperty" + ("Left" === C ? "Top" : "Left")]], R = d(i).offset()[C.toLowerCase()] + k), s = {
                            scroll: {
                                rootPropertyValue: !1,
                                startValue: S,
                                currentValue: S,
                                endValue: R,
                                unitType: "",
                                easing: l.easing,
                                scrollData: {container: l.container, direction: C, alternateValue: Y}
                            }, element: i
                        }, y.debug && console.log("tweensContainer (scroll): ", s.scroll, i)
                    } else if ("reverse" === E) {
                        if (!a(i).tweensContainer)return void d.dequeue(i, l.queue);
                        "none" === a(i).opts.display && (a(i).opts.display = "auto"), "hidden" === a(i).opts.visibility && (a(i).opts.visibility = "visible"), a(i).opts.loop = !1, a(i).opts.begin = null, a(i).opts.complete = null, b.easing || delete l.easing, b.duration || delete l.duration, l = d.extend({}, a(i).opts, l);
                        var X = d.extend(!0, {}, a(i).tweensContainer);
                        for (var L in X)if ("element" !== L) {
                            var H = X[L].startValue;
                            X[L].startValue = X[L].currentValue = X[L].endValue, X[L].endValue = H, h.isEmptyObject(b) || (X[L].easing = l.easing), y.debug && console.log("reverse tweensContainer (" + L + "): " + JSON.stringify(X[L]), i)
                        }
                        s = X
                    } else if ("start" === E) {
                        var X;
                        a(i).tweensContainer && a(i).isAnimating === !0 && (X = a(i).tweensContainer), d.each(v, function (e, t) {
                            if (RegExp("^" + w.Lists.colors.join("$|^") + "$").test(e)) {
                                var r = p(t, !0), o = r[0], i = r[1], a = r[2];
                                if (w.RegEx.isHex.test(o)) {
                                    for (var l = ["Red", "Green", "Blue"], s = w.Values.hexToRgb(o), c = a ? w.Values.hexToRgb(a) : n, u = 0; u < l.length; u++) {
                                        var d = [s[u]];
                                        i && d.push(i), c !== n && d.push(c[u]), v[e + l[u]] = d
                                    }
                                    delete v[e]
                                }
                            }
                        });
                        for (var I in v) {
                            var j = p(v[I]), F = j[0], M = j[1], N = j[2];
                            I     = w.Names.camelCase(I);
                            var O = w.Hooks.getRoot(I), z = !1;
                            if (a(i).isSVG || "tween" === O || w.Names.prefixCheck(O)[1] !== !1 || w.Normalizations.registered[O] !== n) {
                                (l.display !== n && null !== l.display && "none" !== l.display || l.visibility !== n && "hidden" !== l.visibility) && /opacity|filter/.test(I) && !N && 0 !== F && (N = 0), l._cacheValues && X && X[I] ? (N === n && (N = X[I].endValue + X[I].unitType), z = a(i).rootPropertyValueCache[O]) : w.Hooks.registered[I] ? N === n ? (z = w.getPropertyValue(i, O), N = w.getPropertyValue(i, I, z)) : z = w.Hooks.templates[O][1] : N === n && (N = w.getPropertyValue(i, I));
                                var D, q, B, $ = !1;
                                if (D = f(I, N), N = D[0], B = D[1], D = f(I, F), F = D[0].replace(/^([+-\/*])=/, function (e, t) {
                                        return $ = t, ""
                                    }), q = D[1], N = parseFloat(N) || 0, F = parseFloat(F) || 0, "%" === q && (/^(fontSize|lineHeight)$/.test(I) ? (F /= 100, q = "em") : /^scale/.test(I) ? (F /= 100, q = "") : /(Red|Green|Blue)$/i.test(I) && (F = F / 100 * 255, q = "")), /[\/*]/.test($)) q = B; else if (B !== q && 0 !== N)if (0 === F) q = B; else {
                                    o     = o || m();
                                    var U = /margin|padding|left|right|width|text|word|letter/i.test(I) || /X$/.test(I) || "x" === I ? "x" : "y";
                                    switch (B) {
                                        case"%":
                                            N *= "x" === U ? o.percentToPxWidth : o.percentToPxHeight;
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            N *= o[B + "ToPx"]
                                    }
                                    switch (q) {
                                        case"%":
                                            N *= 1 / ("x" === U ? o.percentToPxWidth : o.percentToPxHeight);
                                            break;
                                        case"px":
                                            break;
                                        default:
                                            N *= 1 / o[q + "ToPx"]
                                    }
                                }
                                switch ($) {
                                    case"+":
                                        F = N + F;
                                        break;
                                    case"-":
                                        F = N - F;
                                        break;
                                    case"*":
                                        F = N * F;
                                        break;
                                    case"/":
                                        F = N / F
                                }
                                s[I] = {
                                    rootPropertyValue: z,
                                    startValue: N,
                                    currentValue: N,
                                    endValue: F,
                                    unitType: q,
                                    easing: M
                                }, y.debug && console.log("tweensContainer (" + I + "): " + JSON.stringify(s[I]), i)
                            } else y.debug && console.log("Skipping [" + O + "] due to a lack of browser support.")
                        }
                        s.element = i
                    }
                    s.element && (w.Values.addClass(i, "velocity-animating"), A.push(s), "" === l.queue && (a(i).tweensContainer = s, a(i).opts = l), a(i).isAnimating = !0, T === P - 1 ? (y.State.calls.push([A, g, l, null, V.resolver]), y.State.isTicking === !1 && (y.State.isTicking = !0, u())) : T++)
                }

                var o, i = this, l = d.extend({}, y.defaults, b), s = {};
                switch (a(i) === n && y.init(i), parseFloat(l.delay) && l.queue !== !1 && d.queue(i, l.queue, function (e) {
                    y.velocityQueueEntryFlag = !0, a(i).delayTimer = {
                        setTimeout: setTimeout(e, parseFloat(l.delay)),
                        next: e
                    }
                }), l.duration.toString().toLowerCase()) {
                    case"fast":
                        l.duration = 200;
                        break;
                    case"normal":
                        l.duration = m;
                        break;
                    case"slow":
                        l.duration = 600;
                        break;
                    default:
                        l.duration = parseFloat(l.duration) || 1
                }
                y.mock !== !1 && (y.mock === !0 ? l.duration = l.delay = 1 : (l.duration *= parseFloat(y.mock) || 1, l.delay *= parseFloat(y.mock) || 1)), l.easing = c(l.easing, l.duration), l.begin && !h.isFunction(l.begin) && (l.begin = null), l.progress && !h.isFunction(l.progress) && (l.progress = null), l.complete && !h.isFunction(l.complete) && (l.complete = null), l.display !== n && null !== l.display && (l.display = l.display.toString().toLowerCase(), "auto" === l.display && (l.display = y.CSS.Values.getDisplayType(i))), l.visibility !== n && null !== l.visibility && (l.visibility = l.visibility.toString().toLowerCase()), l.mobileHA = l.mobileHA && y.State.isMobile && !y.State.isGingerbread, l.queue === !1 ? l.delay ? setTimeout(e, l.delay) : e() : d.queue(i, l.queue, function (t, r) {
                        return r === !0 ? (V.promise && V.resolver(g), !0) : (y.velocityQueueEntryFlag = !0, void e(t))
                    }), "" !== l.queue && "fx" !== l.queue || "inprogress" === d.queue(i)[0] || d.dequeue(i)
            }

            var l, s, f, g, v, b, x = arguments[0] && (arguments[0].p || d.isPlainObject(arguments[0].properties) && !arguments[0].properties.names || h.isString(arguments[0].properties));
            if (h.isWrapped(this) ? (l = !1, f = 0, g = this, s = this) : (l = !0, f = 1, g = x ? arguments[0].elements || arguments[0].e : arguments[0]), g = i(g)) {
                x ? (v = arguments[0].properties || arguments[0].p, b = arguments[0].options || arguments[0].o) : (v = arguments[f], b = arguments[f + 1]);
                var P = g.length, T = 0;
                if (!/^(stop|finish|finishAll)$/i.test(v) && !d.isPlainObject(b)) {
                    var Y = f + 1;
                    b     = {};
                    for (var R = Y; R < arguments.length; R++)h.isArray(arguments[R]) || !/^(fast|normal|slow)$/i.test(arguments[R]) && !/^\d/.test(arguments[R]) ? h.isString(arguments[R]) || h.isArray(arguments[R]) ? b.easing = arguments[R] : h.isFunction(arguments[R]) && (b.complete = arguments[R]) : b.duration = arguments[R]
                }
                var V = {promise: null, resolver: null, rejecter: null};
                l && y.Promise && (V.promise = new y.Promise(function (e, t) {
                    V.resolver = e, V.rejecter = t
                }));
                var E;
                switch (v) {
                    case"scroll":
                        E = "scroll";
                        break;
                    case"reverse":
                        E = "reverse";
                        break;
                    case"finish":
                    case"finishAll":
                    case"stop":
                        d.each(g, function (e, t) {
                            a(t) && a(t).delayTimer && (clearTimeout(a(t).delayTimer.setTimeout), a(t).delayTimer.next && a(t).delayTimer.next(), delete a(t).delayTimer), "finishAll" !== v || b !== !0 && !h.isString(b) || (d.each(d.queue(t, h.isString(b) ? b : ""), function (e, t) {
                                h.isFunction(t) && t()
                            }), d.queue(t, h.isString(b) ? b : "", []))
                        });
                        var C = [];
                        return d.each(y.State.calls, function (e, t) {
                            t && d.each(t[1], function (r, o) {
                                var i = b === n ? "" : b;
                                return i === !0 || t[2].queue === i || b === n && t[2].queue === !1 ? void d.each(g, function (r, n) {
                                        n === o && ((b === !0 || h.isString(b)) && (d.each(d.queue(n, h.isString(b) ? b : ""), function (e, t) {
                                            h.isFunction(t) && t(null, !0)
                                        }), d.queue(n, h.isString(b) ? b : "", [])), "stop" === v ? (a(n) && a(n).tweensContainer && i !== !1 && d.each(a(n).tweensContainer, function (e, t) {
                                                t.endValue = t.currentValue
                                            }), C.push(e)) : ("finish" === v || "finishAll" === v) && (t[2].duration = 1))
                                    }) : !0
                            })
                        }), "stop" === v && (d.each(C, function (e, t) {
                            p(t, !0)
                        }), V.promise && V.resolver(g)), e();
                    default:
                        if (!d.isPlainObject(v) || h.isEmptyObject(v)) {
                            if (h.isString(v) && y.Redirects[v]) {
                                var k = d.extend({}, b), X = k.duration, L = k.delay || 0;
                                return k.backwards === !0 && (g = d.extend(!0, [], g).reverse()), d.each(g, function (e, t) {
                                    parseFloat(k.stagger) ? k.delay = L + parseFloat(k.stagger) * e : h.isFunction(k.stagger) && (k.delay = L + k.stagger.call(t, e, P)), k.drag && (k.duration = parseFloat(X) || (/^(callout|transition)/.test(v) ? 1e3 : m), k.duration = Math.max(k.duration * (k.backwards ? 1 - e / P : (e + 1) / P), .75 * k.duration, 200)), y.Redirects[v].call(t, t, k || {}, e, P, g, V.promise ? V : n)
                                }), e()
                            }
                            var H = "Velocity: First argument (" + v + ") was not a property map, a known action, or a registered redirect. Aborting.";
                            return V.promise ? V.rejecter(new Error(H)) : console.log(H), e()
                        }
                        E = "start"
                }
                var W = {
                    lastParent: null,
                    lastPosition: null,
                    lastFontSize: null,
                    lastPercentToPxWidth: null,
                    lastPercentToPxHeight: null,
                    lastEmToPx: null,
                    remToPx: null,
                    vwToPx: null,
                    vhToPx: null
                }, A  = [];
                d.each(g, function (e, t) {
                    h.isNode(t) && o.call(t)
                });
                var I, k = d.extend({}, y.defaults, b);
                if (k.loop = parseInt(k.loop), I = 2 * k.loop - 1, k.loop)for (var j = 0; I > j; j++) {
                    var F = {delay: k.delay, progress: k.progress};
                    j === I - 1 && (F.display = k.display, F.visibility = k.visibility, F.complete = k.complete), S(g, "reverse", F)
                }
                return e()
            }
        };
        y = d.extend(S, y), y.animate = S;
        var P = t.requestAnimationFrame || g;
        return y.State.isMobile || r.hidden === n || r.addEventListener("visibilitychange", function () {
            r.hidden ? (P = function (e) {
                    return setTimeout(function () {
                        e(!0)
                    }, 16)
                }, u()) : P = t.requestAnimationFrame || g
        }), e.Velocity = y, e !== t && (e.fn.velocity = S, e.fn.velocity.defaults = y.defaults), d.each(["Down", "Up"], function (e, t) {
            y.Redirects["slide" + t] = function (e, r, o, i, a, l) {
                var s = d.extend({}, r), c = s.begin, u = s.complete, p = {
                    height: "",
                    marginTop: "",
                    marginBottom: "",
                    paddingTop: "",
                    paddingBottom: ""
                }, f  = {};
                s.display === n && (s.display = "Down" === t ? "inline" === y.CSS.Values.getDisplayType(e) ? "inline-block" : "block" : "none"), s.begin = function () {
                    c && c.call(a, a);
                    for (var r in p) {
                        f[r]  = e.style[r];
                        var n = y.CSS.getPropertyValue(e, r);
                        p[r]  = "Down" === t ? [n, 0] : [0, n]
                    }
                    f.overflow = e.style.overflow, e.style.overflow = "hidden"
                }, s.complete = function () {
                    for (var t in f)e.style[t] = f[t];
                    u && u.call(a, a), l && l.resolver(a)
                }, y(e, p, s)
            }
        }), d.each(["In", "Out"], function (e, t) {
            y.Redirects["fade" + t] = function (e, r, o, i, a, l) {
                var s = d.extend({}, r), c = {opacity: "In" === t ? 1 : 0}, u = s.complete;
                o !== i - 1 ? s.complete = s.begin = null : s.complete = function () {
                        u && u.call(a, a), l && l.resolver(a)
                    }, s.display === n && (s.display = "In" === t ? "auto" : "none"), y(this, c, s)
            }
        }), y
    }(window.jQuery || window.Zepto || window, window, document)
});
!function (e) {
    "function" == typeof require && "object" == typeof exports ? module.exports = e() : "function" == typeof define && define.amd ? define(["velocity"], e) : e()
}(function () {
    return function (e, t, r, n) {
        function a(e, t) {
            var r = [];
            return e && t ? (o.each([e, t], function (e, t) {
                    var n = [];
                    o.each(t, function (e, t) {
                        for (; t.toString().length < 5;)t = "0" + t;
                        n.push(t)
                    }), r.push(n.join(""))
                }), parseFloat(r[0]) > parseFloat(r[1])) : !1
        }

        if (!e.Velocity || !e.Velocity.Utilities)return void(t.console && console.log("Velocity UI Pack: Velocity must be loaded first. Aborting."));
        var i = e.Velocity, o = i.Utilities, s = i.version, l = {major: 1, minor: 1, patch: 0};
        if (a(l, s)) {
            var c = "Velocity UI Pack: You need to update Velocity (jquery.velocity.js) to a newer version. Visit http://github.com/julianshapiro/velocity.";
            throw alert(c), new Error(c)
        }
        i.RegisterEffect = i.RegisterUI = function (e, t) {
            function r(e, t, r, n) {
                var a, s = 0;
                o.each(e.nodeType ? [e] : e, function (e, t) {
                    n && (r += e * n), a = t.parentNode, o.each(["height", "paddingTop", "paddingBottom", "marginTop", "marginBottom"], function (e, r) {
                        s += parseFloat(i.CSS.getPropertyValue(t, r))
                    })
                }), i.animate(a, {height: ("In" === t ? "+" : "-") + "=" + s}, {
                    queue: !1,
                    easing: "ease-in-out",
                    duration: r * ("In" === t ? .6 : 1)
                })
            }

            return i.Redirects[e] = function (a, s, l, c, u, p) {
                function f() {
                    s.display !== n && "none" !== s.display || !/Out$/.test(e) || o.each(u.nodeType ? [u] : u, function (e, t) {
                        i.CSS.setPropertyValue(t, "display", "none")
                    }), s.complete && s.complete.call(u, u), p && p.resolver(u || a)
                }

                var d = l === c - 1;
                "function" == typeof t.defaultDuration ? t.defaultDuration = t.defaultDuration.call(u, u) : t.defaultDuration = parseFloat(t.defaultDuration);
                for (var g = 0; g < t.calls.length; g++) {
                    var h = t.calls[g], v = h[0], m = s.duration || t.defaultDuration || 1e3, y = h[1], b = h[2] || {}, w = {};
                    if (w.duration = m * (y || 1), w.queue = s.queue || "", w.easing = b.easing || "ease", w.delay = parseFloat(b.delay) || 0, w._cacheValues = b._cacheValues || !0, 0 === g) {
                        if (w.delay += parseFloat(s.delay) || 0, 0 === l && (w.begin = function () {
                                s.begin && s.begin.call(u, u);
                                var t = e.match(/(In|Out)$/);
                                t && "In" === t[0] && v.opacity !== n && o.each(u.nodeType ? [u] : u, function (e, t) {
                                    i.CSS.setPropertyValue(t, "opacity", 0)
                                }), s.animateParentHeight && t && r(u, t[0], m + w.delay, s.stagger)
                            }), null !== s.display)if (s.display !== n && "none" !== s.display) w.display = s.display; else if (/In$/.test(e)) {
                            var x     = i.CSS.Values.getDisplayType(a);
                            w.display = "inline" === x ? "inline-block" : x
                        }
                        s.visibility && "hidden" !== s.visibility && (w.visibility = s.visibility)
                    }
                    g === t.calls.length - 1 && (w.complete = function () {
                        if (t.reset) {
                            for (var e in t.reset) {
                                var r = t.reset[e];
                                i.CSS.Hooks.registered[e] !== n || "string" != typeof r && "number" != typeof r || (t.reset[e] = [t.reset[e], t.reset[e]])
                            }
                            var o = {duration: 0, queue: !1};
                            d && (o.complete = f), i.animate(a, t.reset, o)
                        } else d && f()
                    }, "hidden" === s.visibility && (w.visibility = s.visibility)), i.animate(a, v, w)
                }
            }, i
        }, i.RegisterEffect.packagedEffects = {
            "callout.bounce": {
                defaultDuration: 550,
                calls: [[{translateY: -30}, .25], [{translateY: 0}, .125], [{translateY: -15}, .125], [{translateY: 0}, .25]]
            },
            "callout.shake": {
                defaultDuration: 800,
                calls: [[{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 11}, .125], [{translateX: -11}, .125], [{translateX: 0}, .125]]
            },
            "callout.flash": {
                defaultDuration: 1100,
                calls: [[{opacity: [0, "easeInOutQuad", 1]}, .25], [{opacity: [1, "easeInOutQuad"]}, .25], [{opacity: [0, "easeInOutQuad"]}, .25], [{opacity: [1, "easeInOutQuad"]}, .25]]
            },
            "callout.pulse": {
                defaultDuration: 825,
                calls: [[{scaleX: 1.1, scaleY: 1.1}, .5, {easing: "easeInExpo"}], [{scaleX: 1, scaleY: 1}, .5]]
            },
            "callout.swing": {
                defaultDuration: 950,
                calls: [[{rotateZ: 15}, .2], [{rotateZ: -10}, .2], [{rotateZ: 5}, .2], [{rotateZ: -5}, .2], [{rotateZ: 0}, .2]]
            },
            "callout.tada": {
                defaultDuration: 1e3,
                calls: [[{scaleX: .9, scaleY: .9, rotateZ: -3}, .1], [{
                    scaleX: 1.1,
                    scaleY: 1.1,
                    rotateZ: 3
                }, .1], [{
                    scaleX: 1.1,
                    scaleY: 1.1,
                    rotateZ: -3
                }, .1], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], ["reverse", .125], [{
                    scaleX: 1,
                    scaleY: 1,
                    rotateZ: 0
                }, .2]]
            },
            "transition.fadeIn": {defaultDuration: 500, calls: [[{opacity: [1, 0]}]]},
            "transition.fadeOut": {defaultDuration: 500, calls: [[{opacity: [0, 1]}]]},
            "transition.flipXIn": {
                defaultDuration: 700,
                calls: [[{opacity: [1, 0], transformPerspective: [800, 800], rotateY: [0, -55]}]],
                reset: {transformPerspective: 0}
            },
            "transition.flipXOut": {
                defaultDuration: 700,
                calls: [[{opacity: [0, 1], transformPerspective: [800, 800], rotateY: 55}]],
                reset: {transformPerspective: 0, rotateY: 0}
            },
            "transition.flipYIn": {
                defaultDuration: 800,
                calls: [[{opacity: [1, 0], transformPerspective: [800, 800], rotateX: [0, -45]}]],
                reset: {transformPerspective: 0}
            },
            "transition.flipYOut": {
                defaultDuration: 800,
                calls: [[{opacity: [0, 1], transformPerspective: [800, 800], rotateX: 25}]],
                reset: {transformPerspective: 0, rotateX: 0}
            },
            "transition.flipBounceXIn": {
                defaultDuration: 900,
                calls: [[{opacity: [.725, 0], transformPerspective: [400, 400], rotateY: [-10, 90]}, .5], [{
                    opacity: .8,
                    rotateY: 10
                }, .25], [{opacity: 1, rotateY: 0}, .25]],
                reset: {transformPerspective: 0}
            },
            "transition.flipBounceXOut": {
                defaultDuration: 800,
                calls: [[{opacity: [.9, 1], transformPerspective: [400, 400], rotateY: -10}, .5], [{
                    opacity: 0,
                    rotateY: 90
                }, .5]],
                reset: {transformPerspective: 0, rotateY: 0}
            },
            "transition.flipBounceYIn": {
                defaultDuration: 850,
                calls: [[{opacity: [.725, 0], transformPerspective: [400, 400], rotateX: [-10, 90]}, .5], [{
                    opacity: .8,
                    rotateX: 10
                }, .25], [{opacity: 1, rotateX: 0}, .25]],
                reset: {transformPerspective: 0}
            },
            "transition.flipBounceYOut": {
                defaultDuration: 800,
                calls: [[{opacity: [.9, 1], transformPerspective: [400, 400], rotateX: -15}, .5], [{
                    opacity: 0,
                    rotateX: 90
                }, .5]],
                reset: {transformPerspective: 0, rotateX: 0}
            },
            "transition.swoopIn": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [1, 0],
                    transformOriginX: ["100%", "50%"],
                    transformOriginY: ["100%", "100%"],
                    scaleX: [1, 0],
                    scaleY: [1, 0],
                    translateX: [0, -700],
                    translateZ: 0
                }]],
                reset: {transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.swoopOut": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [0, 1],
                    transformOriginX: ["50%", "100%"],
                    transformOriginY: ["100%", "100%"],
                    scaleX: 0,
                    scaleY: 0,
                    translateX: -700,
                    translateZ: 0
                }]],
                reset: {transformOriginX: "50%", transformOriginY: "50%", scaleX: 1, scaleY: 1, translateX: 0}
            },
            "transition.whirlIn": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [1, 0],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: [1, 0],
                    scaleY: [1, 0],
                    rotateY: [0, 160]
                }, 1, {easing: "easeInOutSine"}]]
            },
            "transition.whirlOut": {
                defaultDuration: 750,
                calls: [[{
                    opacity: [0, "easeInOutQuint", 1],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: 0,
                    scaleY: 0,
                    rotateY: 160
                }, 1, {easing: "swing"}]],
                reset: {scaleX: 1, scaleY: 1, rotateY: 0}
            },
            "transition.shrinkIn": {
                defaultDuration: 750,
                calls: [[{
                    opacity: [1, 0],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: [1, 1.5],
                    scaleY: [1, 1.5],
                    translateZ: 0
                }]]
            },
            "transition.shrinkOut": {
                defaultDuration: 600,
                calls: [[{
                    opacity: [0, 1],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: 1.3,
                    scaleY: 1.3,
                    translateZ: 0
                }]],
                reset: {scaleX: 1, scaleY: 1}
            },
            "transition.expandIn": {
                defaultDuration: 700,
                calls: [[{
                    opacity: [1, 0],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: [1, .625],
                    scaleY: [1, .625],
                    translateZ: 0
                }]]
            },
            "transition.expandOut": {
                defaultDuration: 700,
                calls: [[{
                    opacity: [0, 1],
                    transformOriginX: ["50%", "50%"],
                    transformOriginY: ["50%", "50%"],
                    scaleX: .5,
                    scaleY: .5,
                    translateZ: 0
                }]],
                reset: {scaleX: 1, scaleY: 1}
            },
            "transition.bounceIn": {
                defaultDuration: 800,
                calls: [[{opacity: [1, 0], scaleX: [1.05, .3], scaleY: [1.05, .3]}, .4], [{
                    scaleX: .9,
                    scaleY: .9,
                    translateZ: 0
                }, .2], [{scaleX: 1, scaleY: 1}, .5]]
            },
            "transition.bounceOut": {
                defaultDuration: 800,
                calls: [[{scaleX: .95, scaleY: .95}, .35], [{
                    scaleX: 1.1,
                    scaleY: 1.1,
                    translateZ: 0
                }, .35], [{opacity: [0, 1], scaleX: .3, scaleY: .3}, .3]],
                reset: {scaleX: 1, scaleY: 1}
            },
            "transition.bounceUpIn": {
                defaultDuration: 800,
                calls: [[{
                    opacity: [1, 0],
                    translateY: [-30, 1e3]
                }, .6, {easing: "easeOutCirc"}], [{translateY: 10}, .2], [{translateY: 0}, .2]]
            },
            "transition.bounceUpOut": {
                defaultDuration: 1e3,
                calls: [[{translateY: 20}, .2], [{opacity: [0, "easeInCirc", 1], translateY: -1e3}, .8]],
                reset: {translateY: 0}
            },
            "transition.bounceDownIn": {
                defaultDuration: 800,
                calls: [[{
                    opacity: [1, 0],
                    translateY: [30, -1e3]
                }, .6, {easing: "easeOutCirc"}], [{translateY: -10}, .2], [{translateY: 0}, .2]]
            },
            "transition.bounceDownOut": {
                defaultDuration: 1e3,
                calls: [[{translateY: -20}, .2], [{opacity: [0, "easeInCirc", 1], translateY: 1e3}, .8]],
                reset: {translateY: 0}
            },
            "transition.bounceLeftIn": {
                defaultDuration: 750,
                calls: [[{
                    opacity: [1, 0],
                    translateX: [30, -1250]
                }, .6, {easing: "easeOutCirc"}], [{translateX: -10}, .2], [{translateX: 0}, .2]]
            },
            "transition.bounceLeftOut": {
                defaultDuration: 750,
                calls: [[{translateX: 30}, .2], [{opacity: [0, "easeInCirc", 1], translateX: -1250}, .8]],
                reset: {translateX: 0}
            },
            "transition.bounceRightIn": {
                defaultDuration: 750,
                calls: [[{
                    opacity: [1, 0],
                    translateX: [-30, 1250]
                }, .6, {easing: "easeOutCirc"}], [{translateX: 10}, .2], [{translateX: 0}, .2]]
            },
            "transition.bounceRightOut": {
                defaultDuration: 750,
                calls: [[{translateX: -30}, .2], [{opacity: [0, "easeInCirc", 1], translateX: 1250}, .8]],
                reset: {translateX: 0}
            },
            "transition.slideUpIn": {
                defaultDuration: 900,
                calls: [[{opacity: [1, 0], translateY: [0, 20], translateZ: 0}]]
            },
            "transition.slideUpOut": {
                defaultDuration: 900,
                calls: [[{opacity: [0, 1], translateY: -20, translateZ: 0}]],
                reset: {translateY: 0}
            },
            "transition.slideDownIn": {
                defaultDuration: 900,
                calls: [[{opacity: [1, 0], translateY: [0, -20], translateZ: 0}]]
            },
            "transition.slideDownOut": {
                defaultDuration: 900,
                calls: [[{opacity: [0, 1], translateY: 20, translateZ: 0}]],
                reset: {translateY: 0}
            },
            "transition.slideLeftIn": {
                defaultDuration: 1e3,
                calls: [[{opacity: [1, 0], translateX: [0, -20], translateZ: 0}]]
            },
            "transition.slideLeftOut": {
                defaultDuration: 1050,
                calls: [[{opacity: [0, 1], translateX: -20, translateZ: 0}]],
                reset: {translateX: 0}
            },
            "transition.slideRightIn": {
                defaultDuration: 1e3,
                calls: [[{opacity: [1, 0], translateX: [0, 20], translateZ: 0}]]
            },
            "transition.slideRightOut": {
                defaultDuration: 1050,
                calls: [[{opacity: [0, 1], translateX: 20, translateZ: 0}]],
                reset: {translateX: 0}
            },
            "transition.slideUpBigIn": {
                defaultDuration: 850,
                calls: [[{opacity: [1, 0], translateY: [0, 75], translateZ: 0}]]
            },
            "transition.slideUpBigOut": {
                defaultDuration: 800,
                calls: [[{opacity: [0, 1], translateY: -75, translateZ: 0}]],
                reset: {translateY: 0}
            },
            "transition.slideDownBigIn": {
                defaultDuration: 850,
                calls: [[{opacity: [1, 0], translateY: [0, -75], translateZ: 0}]]
            },
            "transition.slideDownBigOut": {
                defaultDuration: 800,
                calls: [[{opacity: [0, 1], translateY: 75, translateZ: 0}]],
                reset: {translateY: 0}
            },
            "transition.slideLeftBigIn": {
                defaultDuration: 800,
                calls: [[{opacity: [1, 0], translateX: [0, -75], translateZ: 0}]]
            },
            "transition.slideLeftBigOut": {
                defaultDuration: 750,
                calls: [[{opacity: [0, 1], translateX: -75, translateZ: 0}]],
                reset: {translateX: 0}
            },
            "transition.slideRightBigIn": {
                defaultDuration: 800,
                calls: [[{opacity: [1, 0], translateX: [0, 75], translateZ: 0}]]
            },
            "transition.slideRightBigOut": {
                defaultDuration: 750,
                calls: [[{opacity: [0, 1], translateX: 75, translateZ: 0}]],
                reset: {translateX: 0}
            },
            "transition.perspectiveUpIn": {
                defaultDuration: 800,
                calls: [[{
                    opacity: [1, 0],
                    transformPerspective: [800, 800],
                    transformOriginX: [0, 0],
                    transformOriginY: ["100%", "100%"],
                    rotateX: [0, -180]
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.perspectiveUpOut": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [0, 1],
                    transformPerspective: [800, 800],
                    transformOriginX: [0, 0],
                    transformOriginY: ["100%", "100%"],
                    rotateX: -180
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
            },
            "transition.perspectiveDownIn": {
                defaultDuration: 800,
                calls: [[{
                    opacity: [1, 0],
                    transformPerspective: [800, 800],
                    transformOriginX: [0, 0],
                    transformOriginY: [0, 0],
                    rotateX: [0, 180]
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.perspectiveDownOut": {
                defaultDuration: 850,
                calls: [[{
                    opacity: [0, 1],
                    transformPerspective: [800, 800],
                    transformOriginX: [0, 0],
                    transformOriginY: [0, 0],
                    rotateX: 180
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateX: 0}
            },
            "transition.perspectiveLeftIn": {
                defaultDuration: 950,
                calls: [[{
                    opacity: [1, 0],
                    transformPerspective: [2e3, 2e3],
                    transformOriginX: [0, 0],
                    transformOriginY: [0, 0],
                    rotateY: [0, -180]
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.perspectiveLeftOut": {
                defaultDuration: 950,
                calls: [[{
                    opacity: [0, 1],
                    transformPerspective: [2e3, 2e3],
                    transformOriginX: [0, 0],
                    transformOriginY: [0, 0],
                    rotateY: -180
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
            },
            "transition.perspectiveRightIn": {
                defaultDuration: 950,
                calls: [[{
                    opacity: [1, 0],
                    transformPerspective: [2e3, 2e3],
                    transformOriginX: ["100%", "100%"],
                    transformOriginY: [0, 0],
                    rotateY: [0, 180]
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%"}
            },
            "transition.perspectiveRightOut": {
                defaultDuration: 950,
                calls: [[{
                    opacity: [0, 1],
                    transformPerspective: [2e3, 2e3],
                    transformOriginX: ["100%", "100%"],
                    transformOriginY: [0, 0],
                    rotateY: 180
                }]],
                reset: {transformPerspective: 0, transformOriginX: "50%", transformOriginY: "50%", rotateY: 0}
            }
        };
        for (var u in i.RegisterEffect.packagedEffects)i.RegisterEffect(u, i.RegisterEffect.packagedEffects[u]);
        i.RunSequence = function (e) {
            var t = o.extend(!0, [], e);
            t.length > 1 && (o.each(t.reverse(), function (e, r) {
                var n = t[e + 1];
                if (n) {
                    var a = r.o || r.options, s = n.o || n.options, l = a && a.sequenceQueue === !1 ? "begin" : "complete", c = s && s[l], u = {};
                    u[l] = function () {
                        var e = n.e || n.elements, t = e.nodeType ? [e] : e;
                        c && c.call(t, t), i(r)
                    }, n.o ? n.o = o.extend({}, s, u) : n.options = o.extend({}, s, u)
                }
            }), t.reverse()), i(t[0])
        }
    }(window.jQuery || window.Zepto || window, window, document)
});
/*!
 * Waves v0.7.5
 * http://fian.my.id/Waves
 *
 * Copyright 2014-2016 Alfiana E. Sibuea and other contributors
 * Released under the MIT license
 * https://github.com/fians/Waves/blob/master/LICENSE
 * --------------------------------------------------
 */
!function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define([], function () {
            return e.apply(t)
        }) : "object" == typeof exports ? module.exports = e.call(t) : t.Waves = e.call(t)
}("object" == typeof global ? global : this, function () {
    "use strict";
    function t(t) {
        return null !== t && t === t.window
    }

    function e(e) {
        return t(e) ? e : 9 === e.nodeType && e.defaultView
    }

    function n(t) {
        var e = typeof t;
        return "function" === e || "object" === e && !!t
    }

    function a(t) {
        return n(t) && t.nodeType > 0
    }

    function o(t) {
        var e = f.call(t);
        return "[object String]" === e ? d(t) : n(t) && /^\[object (Array|HTMLCollection|NodeList|Object)\]$/.test(e) && t.hasOwnProperty("length") ? t : a(t) ? [t] : []
    }

    function i(t) {
        var n, a, o = {top: 0, left: 0}, i = t && t.ownerDocument;
        return n = i.documentElement, "undefined" != typeof t.getBoundingClientRect && (o = t.getBoundingClientRect()), a = e(i), {
            top: o.top + a.pageYOffset - n.clientTop,
            left: o.left + a.pageXOffset - n.clientLeft
        }
    }

    function r(t) {
        var e = "";
        for (var n in t)t.hasOwnProperty(n) && (e += n + ":" + t[n] + ";");
        return e
    }

    function s(t, e, n) {
        if (n) {
            n.classList.remove("waves-rippling");
            var a = n.getAttribute("data-x"), o = n.getAttribute("data-y"), i = n.getAttribute("data-scale"), s = n.getAttribute("data-translate"), u = Date.now() - Number(n.getAttribute("data-hold")), l = 350 - u;
            0 > l && (l = 0), "mousemove" === t.type && (l = 150);
            var c = "mousemove" === t.type ? 2500 : m.duration;
            setTimeout(function () {
                var t = {
                    top: o + "px",
                    left: a + "px",
                    opacity: "0",
                    "-webkit-transition-duration": c + "ms",
                    "-moz-transition-duration": c + "ms",
                    "-o-transition-duration": c + "ms",
                    "transition-duration": c + "ms",
                    "-webkit-transform": i + " " + s,
                    "-moz-transform": i + " " + s,
                    "-ms-transform": i + " " + s,
                    "-o-transform": i + " " + s,
                    transform: i + " " + s
                };
                n.setAttribute("style", r(t)), setTimeout(function () {
                    try {
                        e.removeChild(n)
                    } catch (t) {
                        return !1
                    }
                }, c)
            }, l)
        }
    }

    function u(t) {
        if (h.allowEvent(t) === !1)return null;
        for (var e = null, n = t.target || t.srcElement; null !== n.parentElement;) {
            if (n.classList.contains("waves-effect") && !(n instanceof SVGElement)) {
                e = n;
                break
            }
            n = n.parentElement
        }
        return e
    }

    function l(t) {
        var e = u(t);
        if (null !== e) {
            if (e.disabled || e.getAttribute("disabled") || e.classList.contains("disabled"))return;
            if (h.registerEvent(t), "touchstart" === t.type && m.delay) {
                var n          = !1, a = setTimeout(function () {
                    a = null, m.show(t, e)
                }, m.delay), o = function (o) {
                    a && (clearTimeout(a), a = null, m.show(t, e)), n || (n = !0, m.hide(o, e))
                }, i           = function (t) {
                    a && (clearTimeout(a), a = null), o(t)
                };
                e.addEventListener("touchmove", i, !1), e.addEventListener("touchend", o, !1), e.addEventListener("touchcancel", o, !1)
            } else m.show(t, e), p && (e.addEventListener("touchend", m.hide, !1), e.addEventListener("touchcancel", m.hide, !1)), e.addEventListener("mouseup", m.hide, !1), e.addEventListener("mouseleave", m.hide, !1)
        }
    }

    var c = c || {}, d = document.querySelectorAll.bind(document), f = Object.prototype.toString, p = "ontouchstart" in window, m = {
        duration: 750,
        delay: 200,
        show: function (t, e, n) {
            if (2 === t.button)return !1;
            e     = e || this;
            var a = document.createElement("div");
            a.className = "waves-ripple waves-rippling", e.appendChild(a);
            var o = i(e), s = 0, u = 0;
            "touches" in t && t.touches.length ? (s = t.touches[0].pageY - o.top, u = t.touches[0].pageX - o.left) : (s = t.pageY - o.top, u = t.pageX - o.left), u = u >= 0 ? u : 0, s = s >= 0 ? s : 0;
            var l = "scale(" + e.clientWidth / 100 * 3 + ")", c = "translate(0,0)";
            n && (c = "translate(" + n.x + "px, " + n.y + "px)"), a.setAttribute("data-hold", Date.now()), a.setAttribute("data-x", u), a.setAttribute("data-y", s), a.setAttribute("data-scale", l), a.setAttribute("data-translate", c);
            var d = {top: s + "px", left: u + "px"};
            a.classList.add("waves-notransition"), a.setAttribute("style", r(d)), a.classList.remove("waves-notransition"), d["-webkit-transform"] = l + " " + c, d["-moz-transform"] = l + " " + c, d["-ms-transform"] = l + " " + c, d["-o-transform"] = l + " " + c, d.transform = l + " " + c, d.opacity = "1";
            var f = "mousemove" === t.type ? 2500 : m.duration;
            d["-webkit-transition-duration"] = f + "ms", d["-moz-transition-duration"] = f + "ms", d["-o-transition-duration"] = f + "ms", d["transition-duration"] = f + "ms", a.setAttribute("style", r(d))
        },
        hide: function (t, e) {
            e = e || this;
            for (var n = e.getElementsByClassName("waves-rippling"), a = 0, o = n.length; o > a; a++)s(t, e, n[a])
        }
    }, v  = {
        input: function (t) {
            var e = t.parentNode;
            if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                n.className = t.className + " waves-input-wrapper", t.className = "waves-button-input", e.replaceChild(n, t), n.appendChild(t);
                var a = window.getComputedStyle(t, null), o = a.color, i = a.backgroundColor;
                n.setAttribute("style", "color:" + o + ";background:" + i), t.setAttribute("style", "background-color:rgba(0,0,0,0);")
            }
        }, img: function (t) {
            var e = t.parentNode;
            if ("i" !== e.tagName.toLowerCase() || !e.classList.contains("waves-effect")) {
                var n = document.createElement("i");
                e.replaceChild(n, t), n.appendChild(t)
            }
        }
    }, h  = {
        touches: 0, allowEvent: function (t) {
            var e = !0;
            return /^(mousedown|mousemove)$/.test(t.type) && h.touches && (e = !1), e
        }, registerEvent: function (t) {
            var e = t.type;
            "touchstart" === e ? h.touches += 1 : /^(touchend|touchcancel)$/.test(e) && setTimeout(function () {
                    h.touches && (h.touches -= 1)
                }, 500)
        }
    };
    return c.init = function (t) {
        var e = document.body;
        t = t || {}, "duration" in t && (m.duration = t.duration), "delay" in t && (m.delay = t.delay), p && (e.addEventListener("touchstart", l, !1), e.addEventListener("touchcancel", h.registerEvent, !1), e.addEventListener("touchend", h.registerEvent, !1)), e.addEventListener("mousedown", l, !1)
    }, c.attach = function (t, e) {
        t = o(t), "[object Array]" === f.call(e) && (e = e.join(" ")), e = e ? " " + e : "";
        for (var n, a, i = 0, r = t.length; r > i; i++)n = t[i], a = n.tagName.toLowerCase(), -1 !== ["input", "img"].indexOf(a) && (v[a](n), n = n.parentElement), -1 === n.className.indexOf("waves-effect") && (n.className += " waves-effect" + e)
    }, c.ripple = function (t, e) {
        t     = o(t);
        var n = t.length;
        if (e = e || {}, e.wait = e.wait || 0, e.position = e.position || null, n)for (var a, r, s, u = {}, l = 0, c = {
            type: "mousedown",
            button: 1
        }, d                                                                                          = function (t, e) {
            return function () {
                m.hide(t, e)
            }
        }; n > l; l++)if (a = t[l], r = e.position || {
                    x: a.clientWidth / 2,
                    y: a.clientHeight / 2
                }, s = i(a), u.x = s.left + r.x, u.y = s.top + r.y, c.pageX = u.x, c.pageY = u.y, m.show(c, a), e.wait >= 0 && null !== e.wait) {
            var f = {type: "mouseup", button: 1};
            setTimeout(d(f, a), e.wait)
        }
    }, c.calm = function (t) {
        t = o(t);
        for (var e = {type: "mouseup", button: 1}, n = 0, a = t.length; a > n; n++)m.hide(e, t[n])
    }, c.displayEffect = function (t) {
        console.error("Waves.displayEffect() has been deprecated and will be removed in future version. Please use Waves.init() to initialize Waves effect"), c.init(t)
    }, c
});

//第一屏幕的背景
var _site_bg_overlay_color     = 'rgba(46,46,83,0.5)';
var _site_bg_overlay_disable   = false;
var _site_bg_effect            = 3;
var _side_bg_effect_parallax   = false;
var _constellation_color       = 'rgba(255, 255, 255, .9)';
var _constellation_width       = 1.5;
var _parallax_star_opacity     = 1;
var _particles_opacity         = .5;
var _particles_link_opacity    = .4;
var _map_toggle                = true;
var _map_latitude_longitude    = [35.6046472, 140.2642208];
var _map_water_color           = '#1080f2';
var _bg_style_desktop          = 2;
var _bg_style_mobile           = 3;
var _bg_slideshow_image_amount = 2;
var _bg_slideshow_duration     = 9000;
var _bg_video_youtube_url      = 'gme8UgbTLHE';
var _bg_video_youtube_quality  = 'hightres';
var _bg_video_youtube_start    = 1;
var _bg_video_youtube_end      = 0;
var _bg_video_youtube_loop     = true;
var _0x3d50                    = ["\x6E\x6F\x43\x6F\x6E\x66\x6C\x69\x63\x74", "\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74", "\x68\x74\x6D\x6C", "\x62\x6F\x64\x79", "\x6D\x61\x74\x63\x68", "\x75\x73\x65\x72\x41\x67\x65\x6E\x74", "\x73\x74\x79\x6C\x65", "\x63\x72\x65\x61\x74\x65\x45\x6C\x65\x6D\x65\x6E\x74", "\x40\x2D\x6D\x73\x2D\x76\x69\x65\x77\x70\x6F\x72\x74\x7B\x77\x69\x64\x74\x68\x3A\x61\x75\x74\x6F\x21\x69\x6D\x70\x6F\x72\x74\x61\x6E\x74\x7D", "\x63\x72\x65\x61\x74\x65\x54\x65\x78\x74\x4E\x6F\x64\x65", "\x61\x70\x70\x65\x6E\x64\x43\x68\x69\x6C\x64", "\x68\x65\x61\x64", "\x71\x75\x65\x72\x79\x53\x65\x6C\x65\x63\x74\x6F\x72", "\x64\x65\x73\x6B\x74\x6F\x70", "\x68\x61\x73\x43\x6C\x61\x73\x73", "\x69\x73\x2D\x64\x65\x73\x6B\x74\x6F\x70", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x69\x73\x2D\x6D\x6F\x62\x69\x6C\x65", "\x69\x65\x39", "\x63\x6C\x69\x63\x6B", "\x68\x72\x65\x66", "\x61\x74\x74\x72", "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74", "\x73\x63\x72\x6F\x6C\x6C", "\x76\x65\x6C\x6F\x63\x69\x74\x79", "\x73\x74\x6F\x70", "\x6F\x6E", "\x61\x5B\x68\x72\x65\x66\x5E\x3D\x23\x5D", "\x2E\x6E\x61\x76\x62\x61\x72", "\x73\x63\x72\x6F\x6C\x6C\x73\x70\x79", "\x64\x72\x6F\x70\x64\x6F\x77\x6E", "\x70\x61\x72\x65\x6E\x74", "\x68\x69\x64\x65", "\x63\x6F\x6C\x6C\x61\x70\x73\x65", "\x2E\x6E\x61\x76\x62\x61\x72\x2D\x63\x6F\x6C\x6C\x61\x70\x73\x65", "\x2E\x6E\x61\x76\x62\x61\x72\x2D\x6E\x61\x76\x20\x6C\x69\x20\x61", "\x2E\x62\x74\x6E", "\x77\x61\x76\x65\x73\x2D\x6C\x69\x67\x68\x74", "\x61\x74\x74\x61\x63\x68", "\x69\x6E\x69\x74", "\x2E\x73\x69\x74\x65\x2D\x62\x67\x2D\x6F\x76\x65\x72\x6C\x61\x79", "\x72\x65\x6D\x6F\x76\x65", "\x62\x61\x63\x6B\x67\x72\x6F\x75\x6E\x64\x2D\x63\x6F\x6C\x6F\x72", "\x63\x73\x73", "\x66\x69\x6E\x64", "\x2E\x69\x73\x2D\x64\x65\x73\x6B\x74\x6F\x70", "\x2E\x69\x73\x2D\x6D\x6F\x62\x69\x6C\x65", "\x2E\x73\x69\x74\x65\x2D\x6C\x6F\x61\x64\x65\x72", "\x2D\x31\x30\x30\x25", "\x69\x73\x2D\x6C\x6F\x61\x64\x65\x64", "\x2E\x73\x69\x74\x65\x2D\x6D\x61\x69\x6E", "\x6C\x6F\x61\x64", "\x73\x63\x72\x6F\x6C\x6C\x54\x6F\x70", "\x69\x73\x2D\x73\x63\x72\x6F\x6C\x6C", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x23\x63\x6F\x6E\x74\x61\x63\x74\x46\x6F\x72\x6D", "\x2E\x66\x6F\x72\x6D\x2D\x6E\x6F\x74\x69\x66\x79", "\x65\x72\x72\x6F\x72", "\x2E\x66\x6F\x72\x6D\x2D\x67\x72\x6F\x75\x70", "\x50\x4F\x53\x54", "\x61\x73\x73\x65\x74\x73\x2F\x70\x68\x70\x2F\x63\x6F\x6E\x74\x61\x63\x74\x2E\x70\x68\x70", "\x6A\x73\x6F\x6E", "\x73\x65\x72\x69\x61\x6C\x69\x7A\x65", "\x63\x6F\x64\x65", "\x72\x65\x73\x65\x74\x46\x6F\x72\x6D", "\x76\x61\x6C\x69\x64\x61\x74\x65", "\x72\x65\x73\x65\x74", "\x2E\x66\x6F\x72\x6D\x2D\x6C\x61\x62\x65\x6C", "\x62\x6C\x75\x72", "\x62\x75\x74\x74\x6F\x6E", "\x73\x68\x6F\x77", "\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x63\x68\x65\x63\x6B\x2D\x73\x71\x75\x61\x72\x65\x22\x3E\x3C\x2F\x69\x3E", "\x6D\x65\x73\x73\x61\x67\x65", "\x76\x61\x6C\x69\x64", "\x76\x61\x6C\x69\x64\x20\x65\x72\x72\x6F\x72", "\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x77\x61\x72\x6E\x69\x6E\x67\x22\x3E\x3C\x2F\x69\x3E\x41\x6E\x20\x65\x72\x72\x6F\x72\x20\x6F\x63\x63\x75\x72\x72\x65\x64\x2E\x20\x50\x6C\x65\x61\x73\x65\x20\x74\x72\x79\x20\x61\x67\x61\x69\x6E\x20\x6C\x61\x74\x65\x72\x2E", "\x61\x6A\x61\x78\x53\x75\x62\x6D\x69\x74", "\x6E\x75\x6D\x62\x65\x72\x4F\x66\x49\x6E\x76\x61\x6C\x69\x64\x73", "\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x77\x61\x72\x6E\x69\x6E\x67\x22\x3E\x3C\x2F\x69\x3E\x59\x6F\x75\x20\x6D\x69\x73\x73\x65\x64\x20\x31\x20\x66\x69\x65\x6C\x64\x2E\x20\x49\x74\x20\x68\x61\x73\x20\x62\x65\x65\x6E\x20\x68\x69\x67\x68\x6C\x69\x67\x68\x74\x65\x64\x2E", "\x3C\x69\x20\x63\x6C\x61\x73\x73\x3D\x22\x66\x61\x20\x66\x61\x2D\x77\x61\x72\x6E\x69\x6E\x67\x22\x3E\x3C\x2F\x69\x3E\x59\x6F\x75\x20\x6D\x69\x73\x73\x65\x64\x20", "\x20\x66\x69\x65\x6C\x64\x73\x2E\x20\x54\x68\x65\x79\x20\x68\x61\x76\x65\x20\x62\x65\x65\x6E\x20\x68\x69\x67\x68\x6C\x69\x67\x68\x74\x65\x64\x2E", "\x73\x69\x74\x65\x2D\x62\x67\x2D\x63\x6F\x6C\x6F\x72", "\x69\x73\x2D\x73\x69\x74\x65\x2D\x62\x67\x2D\x69\x6D\x67", "\x2E\x73\x69\x74\x65\x2D\x62\x67\x2D\x76\x69\x64\x65\x6F", "\x2E\x73\x69\x74\x65\x2D\x62\x67\x2D\x69\x6D\x67", "\x69\x73\x2D\x73\x69\x74\x65\x2D\x62\x67\x2D\x73\x6C\x69\x64\x65\x73\x68\x6F\x77", "\x3C\x69\x6D\x67\x20\x73\x72\x63\x3D\x22\x61\x73\x73\x65\x74\x73\x2F\x69\x6D\x67\x2F\x62\x67\x2F\x73\x69\x74\x65\x2D\x62\x67\x2D\x73\x6C\x69\x64\x65\x73\x68\x6F\x77\x2D", "\x30", "\x2E\x6A\x70\x67\x22\x3E", "\x61\x70\x70\x65\x6E\x64", "\x73\x73", "\x6B\x65\x6E\x62\x75\x72\x6E\x73\x79", "\x2E\x61\x75\x64\x69\x6F\x2D\x74\x6F\x67\x67\x6C\x65", "\x69\x73\x2D\x73\x69\x74\x65\x2D\x62\x67\x2D\x76\x69\x64\x65\x6F", "\x3C\x76\x69\x64\x65\x6F\x20\x69\x64\x3D\x22\x62\x67\x56\x69\x64\x65\x6F\x22\x20\x61\x75\x74\x6F\x70\x6C\x61\x79\x20\x6C\x6F\x6F\x70\x3E", "\x3C\x73\x6F\x75\x72\x63\x65\x20\x73\x72\x63\x3D\x22\x61\x73\x73\x65\x74\x73\x2F\x76\x69\x64\x65\x6F\x2F\x76\x69\x64\x65\x6F\x2E\x6D\x70\x34\x22\x20\x74\x79\x70\x65\x3D\x22\x76\x69\x64\x65\x6F\x2F\x6D\x70\x34\x22\x3E", "\x3C\x2F\x76\x69\x64\x65\x6F\x3E", "\x62\x67\x56\x69\x64\x65\x6F", "\x67\x65\x74\x45\x6C\x65\x6D\x65\x6E\x74\x42\x79\x49\x64", "\x6D\x75\x74\x65\x64", "\x69\x73\x2D\x61\x75\x64\x69\x6F\x2D\x6F\x6E", "\x69\x73\x2D\x61\x75\x64\x69\x6F\x2D\x6F\x66\x66", "\x69\x73\x2D\x73\x69\x74\x65\x2D\x62\x67\x2D\x76\x69\x64\x65\x6F\x2D\x79\x6F\x75\x74\x75\x62\x65", "\x64\x61\x74\x61\x2D\x70\x72\x6F\x70\x65\x72\x74\x79", "\x7B\x76\x69\x64\x65\x6F\x55\x52\x4C\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x75\x72\x6C\x2C\x20\x61\x75\x74\x6F\x50\x6C\x61\x79\x3A\x20\x74\x72\x75\x65\x2C\x20\x6C\x6F\x6F\x70\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x6C\x6F\x6F\x70\x2C\x20\x73\x74\x61\x72\x74\x41\x74\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x73\x74\x61\x72\x74\x2C\x20\x73\x74\x6F\x70\x41\x74\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x65\x6E\x64\x2C\x20\x6D\x75\x74\x65\x3A\x20\x74\x72\x75\x65\x2C\x20\x71\x75\x61\x6C\x69\x74\x79\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x71\x75\x61\x6C\x69\x74\x79\x2C\x20\x72\x65\x61\x6C\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3A\x20\x74\x72\x75\x65\x2C\x20\x6F\x70\x74\x69\x6D\x69\x7A\x65\x44\x69\x73\x70\x6C\x61\x79\x3A\x20\x74\x72\x75\x65\x2C\x20\x61\x64\x64\x52\x61\x73\x74\x65\x72\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x73\x68\x6F\x77\x59\x54\x4C\x6F\x67\x6F\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x73\x68\x6F\x77\x43\x6F\x6E\x74\x72\x6F\x6C\x73\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x73\x74\x6F\x70\x4D\x6F\x76\x69\x65\x4F\x6E\x42\x6C\x75\x72\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x63\x6F\x6E\x74\x61\x69\x6E\x6D\x65\x6E\x74\x3A\x20\x22\x73\x65\x6C\x66\x22\x7D", "\x7B\x76\x69\x64\x65\x6F\x55\x52\x4C\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x75\x72\x6C\x2C\x20\x61\x75\x74\x6F\x50\x6C\x61\x79\x3A\x20\x74\x72\x75\x65\x2C\x20\x6C\x6F\x6F\x70\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x6C\x6F\x6F\x70\x2C\x20\x73\x74\x61\x72\x74\x41\x74\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x73\x74\x61\x72\x74\x2C\x20\x73\x74\x6F\x70\x41\x74\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x65\x6E\x64\x2C\x20\x6D\x75\x74\x65\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x71\x75\x61\x6C\x69\x74\x79\x3A\x20\x5F\x62\x67\x5F\x76\x69\x64\x65\x6F\x5F\x79\x6F\x75\x74\x75\x62\x65\x5F\x71\x75\x61\x6C\x69\x74\x79\x2C\x20\x72\x65\x61\x6C\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3A\x20\x74\x72\x75\x65\x2C\x20\x6F\x70\x74\x69\x6D\x69\x7A\x65\x44\x69\x73\x70\x6C\x61\x79\x3A\x20\x74\x72\x75\x65\x2C\x20\x61\x64\x64\x52\x61\x73\x74\x65\x72\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x73\x68\x6F\x77\x59\x54\x4C\x6F\x67\x6F\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x73\x68\x6F\x77\x43\x6F\x6E\x74\x72\x6F\x6C\x73\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x73\x74\x6F\x70\x4D\x6F\x76\x69\x65\x4F\x6E\x42\x6C\x75\x72\x3A\x20\x66\x61\x6C\x73\x65\x2C\x20\x63\x6F\x6E\x74\x61\x69\x6E\x6D\x65\x6E\x74\x3A\x20\x22\x73\x65\x6C\x66\x22\x7D", "\x3C\x61\x75\x64\x69\x6F\x20\x69\x64\x3D\x22\x61\x75\x64\x69\x6F\x50\x6C\x61\x79\x65\x72\x22\x20\x6C\x6F\x6F\x70\x3E", "\x3C\x73\x6F\x75\x72\x63\x65\x20\x73\x72\x63\x3D\x22\x61\x73\x73\x65\x74\x73\x2F\x61\x75\x64\x69\x6F\x2F\x61\x75\x64\x69\x6F\x2E\x6D\x70\x33\x22\x20\x74\x79\x70\x65\x3D\x22\x61\x75\x64\x69\x6F\x2F\x6D\x70\x65\x67\x22\x3E", "\x3C\x2F\x61\x75\x64\x69\x6F\x3E", "\x61\x75\x64\x69\x6F\x50\x6C\x61\x79\x65\x72", "\x70\x6C\x61\x79", "\x70\x61\x75\x73\x65", "\x2E\x73\x69\x74\x65\x2D\x62\x67\x2D\x63\x61\x6E\x76\x61\x73", "\x69\x73\x2D\x73\x69\x74\x65\x2D\x62\x67\x2D\x63\x6F\x6E\x73\x74\x65\x6C\x6C\x61\x74\x69\x6F\x6E", "\x77\x69\x64\x74\x68", "\x68\x65\x69\x67\x68\x74", "\x72\x6F\x75\x6E\x64", "\x32\x64", "\x67\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x63\x6F\x6E\x66\x69\x67", "\x78", "\x72\x61\x6E\x64\x6F\x6D", "\x79", "\x76\x78", "\x76\x79", "\x72\x61\x64\x69\x75\x73", "\x73\x74\x61\x72", "\x70\x72\x6F\x74\x6F\x74\x79\x70\x65", "\x62\x65\x67\x69\x6E\x50\x61\x74\x68", "\x50\x49", "\x61\x72\x63", "\x66\x69\x6C\x6C", "\x6C\x65\x6E\x67\x74\x68", "\x73\x74\x61\x72\x73", "\x64\x69\x73\x74\x61\x6E\x63\x65", "\x70\x6F\x73\x69\x74\x69\x6F\x6E", "\x6D\x6F\x76\x65\x54\x6F", "\x6C\x69\x6E\x65\x54\x6F", "\x73\x74\x72\x6F\x6B\x65", "\x63\x6C\x6F\x73\x65\x50\x61\x74\x68", "\x63\x72\x65\x61\x74\x65\x53\x74\x61\x72\x73", "\x63\x6C\x65\x61\x72\x52\x65\x63\x74", "\x70\x75\x73\x68", "\x63\x72\x65\x61\x74\x65", "\x6C\x69\x6E\x65", "\x61\x6E\x69\x6D\x61\x74\x65", "\x73\x65\x74\x43\x61\x6E\x76\x61\x73", "\x69\x6E\x6E\x65\x72\x57\x69\x64\x74\x68", "\x69\x6E\x6E\x65\x72\x48\x65\x69\x67\x68\x74", "\x73\x65\x74\x43\x6F\x6E\x74\x65\x78\x74", "\x66\x69\x6C\x6C\x53\x74\x79\x6C\x65", "\x63\x6F\x6C\x6F\x72", "\x73\x74\x72\x6F\x6B\x65\x53\x74\x79\x6C\x65", "\x6C\x69\x6E\x65\x57\x69\x64\x74\x68", "\x6C\x6F\x6F\x70", "\x62\x69\x6E\x64", "\x6D\x6F\x75\x73\x65\x6D\x6F\x76\x65", "\x70\x61\x67\x65\x58", "\x70\x61\x67\x65\x59", "\x72\x65\x71\x75\x65\x73\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x46\x72\x61\x6D\x65", "\x6D\x6F\x7A\x52\x65\x71\x75\x65\x73\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x46\x72\x61\x6D\x65", "\x77\x65\x62\x6B\x69\x74\x52\x65\x71\x75\x65\x73\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x46\x72\x61\x6D\x65", "\x6D\x73\x52\x65\x71\x75\x65\x73\x74\x41\x6E\x69\x6D\x61\x74\x69\x6F\x6E\x46\x72\x61\x6D\x65", "\x73\x65\x74\x54\x69\x6D\x65\x6F\x75\x74", "\x63\x61\x6E\x76\x61\x73", "\x74\x72\x61\x6E\x73\x69\x74\x69\x6F\x6E\x2E\x66\x61\x64\x65\x49\x6E", "", "\x72\x65\x73\x69\x7A\x65", "\x2E\x73\x69\x74\x65\x2D\x62\x67\x2D\x65\x66\x66\x65\x63\x74", "\x69\x73\x2D\x73\x69\x74\x65\x2D\x62\x67\x2D\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72", "\x6F\x70\x61\x63\x69\x74\x79", "\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x20\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x2D\x30\x31\x22\x3E\x3C\x2F\x64\x69\x76\x3E", "\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x20\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x2D\x30\x32\x22\x3E\x3C\x2F\x64\x69\x76\x3E", "\x3C\x64\x69\x76\x20\x63\x6C\x61\x73\x73\x3D\x22\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x20\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x2D\x30\x33\x22\x3E\x3C\x2F\x64\x69\x76\x3E", "\x6C\x69\x6E\x65\x61\x72", "\x2E\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x2D\x30\x31", "\x2E\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x2D\x30\x32", "\x2E\x70\x61\x72\x61\x6C\x6C\x61\x78\x2D\x73\x74\x61\x72\x2D\x30\x33", "\x62\x6C\x6F\x63\x6B", "\x69\x73\x2D\x73\x69\x74\x65\x2D\x62\x67\x2D\x70\x61\x72\x74\x69\x63\x6C\x65\x73", "\x2E\x73\x69\x74\x65\x2D\x62\x67\x2D\x65\x66\x66\x65\x63\x74\x2C\x20\x2E\x73\x69\x74\x65\x2D\x62\x67\x2D\x63\x61\x6E\x76\x61\x73", "\x70\x61\x72\x74\x69\x63\x6C\x65\x73\x2D\x6A\x73", "\x23\x66\x66\x66\x66\x66\x66", "\x6E\x6F\x6E\x65", "\x6F\x75\x74", "\x72\x65\x70\x75\x6C\x73\x65", "\x70\x61\x72\x61\x6C\x6C\x61\x78", "\x2E\x73\x69\x74\x65\x2D\x62\x67", "\x62\x6F\x74\x74\x6F\x6D", "\x32\x30\x70\x78", "\x65\x61\x73\x65\x2D\x69\x6E\x2D\x6F\x75\x74", "\x61\x6C\x77\x61\x79\x73", "\x73\x72", "\x5B\x64\x61\x74\x61\x2D\x73\x72\x3D\x74\x6F\x70\x5D", "\x74\x6F\x70", "\x72\x65\x76\x65\x61\x6C", "\x5B\x64\x61\x74\x61\x2D\x73\x72\x3D\x72\x69\x67\x68\x74\x5D", "\x72\x69\x67\x68\x74", "\x5B\x64\x61\x74\x61\x2D\x73\x72\x3D\x62\x6F\x74\x74\x6F\x6D\x5D", "\x5B\x64\x61\x74\x61\x2D\x73\x72\x3D\x6C\x65\x66\x74\x5D", "\x6C\x65\x66\x74"];
var $                          = jQuery[_0x3d50[0]]();
(function ($) {
    _0x3d50[1];
    var _0x163bx2 = $(_0x3d50[2]);
    var _0x163bx3 = $(_0x3d50[3]);
    (function () {
        if (navigator[_0x3d50[5]][_0x3d50[4]](/IEMobile\/10\.0/)) {
            var _0x163bx4 = document[_0x3d50[7]](_0x3d50[6]);
            _0x163bx4[_0x3d50[10]](document[_0x3d50[9]](_0x3d50[8]));
            document[_0x3d50[12]](_0x3d50[11])[_0x3d50[10]](_0x163bx4)
        }
    })();
    var _0x163bx5;
    var _0x163bx6;
    if (_0x163bx2[_0x3d50[14]](_0x3d50[13])) {
        _0x163bx2[_0x3d50[16]](_0x3d50[15]);
        _0x163bx5 = false;
        _0x163bx6 = true
    } else {
        _0x163bx2[_0x3d50[16]](_0x3d50[17]);
        _0x163bx5 = true;
        _0x163bx6 = false
    }
    ;
    if (_0x163bx2[_0x3d50[14]](_0x3d50[18])) {
        var _0x163bx7 = true
    }
    ;
    function _0x163bx8() {
        $(_0x3d50[27])[_0x3d50[26]](_0x3d50[19], function (_0x163bx9) {
            var _0x163bxa = $(this)[_0x3d50[21]](_0x3d50[20]);
            _0x163bx9[_0x3d50[22]]();
            $(_0x163bxa)[_0x3d50[24]](_0x3d50[25])[_0x3d50[24]](_0x3d50[23], {
                duration: 1000,
                easing: [0.710, 0.100, 0.3, 1.000],
                offset: -100
            })
        });
        _0x163bx3[_0x3d50[29]]({target: _0x3d50[28], offset: 120});
        $(_0x3d50[35])[_0x3d50[26]](_0x3d50[19], function (_0x163bx9) {
            if (!$(this)[_0x3d50[31]]()[_0x3d50[14]](_0x3d50[30])) {
                $(_0x3d50[34])[_0x3d50[33]](_0x3d50[32])
            }
        })
    }

    _0x163bx8();
    function _0x163bxb() {
        Waves[_0x3d50[38]](_0x3d50[36], _0x3d50[37]);
        Waves[_0x3d50[39]]()
    }

    _0x163bxb();
    function _0x163bxc() {
        var _0x163bxd = $(_0x3d50[40]);
        if (_site_bg_overlay_disable) {
            _0x163bxd[_0x3d50[41]]()
        }
        ;
        if (!_bg_style_desktop == 0 || !_bg_style_desktop == 1) {
            $(_0x3d50[45])[_0x3d50[44]](_0x163bxd)[_0x3d50[43]](_0x3d50[42], _site_bg_overlay_color)
        }
        ;
        if (!_bg_style_mobile == 0 || !_bg_style_mobile == 1) {
            $(_0x3d50[46])[_0x3d50[44]](_0x163bxd)[_0x3d50[43]](_0x3d50[42], _site_bg_overlay_color)
        }
    }

    _0x163bxc();
    function _0x163bxe() {
        var _0x163bxf = $(_0x3d50[47]);
        _0x163bxf[_0x3d50[24]]({translateZ: 0, translateY: _0x3d50[48]}, {
            queue: false,
            delay: 500,
            duration: 1500,
            easing: [0.710, 0.100, 0.3, 1.000],
            complete: function () {
                $(this)[_0x3d50[41]]();
                _0x163bx3[_0x3d50[16]](_0x3d50[49]);
                _0x163bx4c()
            }
        });
        $(_0x3d50[50])[_0x3d50[24]]({translateZ: 0, translateY: [0, 300]}, {
            queue: false,
            delay: 500,
            duration: 1500,
            easing: [0.710, 0.100, 0.3, 1.000]
        })
    }

    $(window)[_0x3d50[26]](_0x3d50[51], function () {
        _0x163bxe()
    });
    function _0x163bx10() {
        $(window)[_0x3d50[26]](_0x3d50[51], function () {
            _0x163bx11()
        });
        $(window)[_0x3d50[26]](_0x3d50[23], function () {
            _0x163bx11()
        });
        function _0x163bx11() {
            var _0x163bx12 = $(window)[_0x3d50[52]]();
            (_0x163bx12 > 0) ? _0x163bx3[_0x3d50[16]](_0x3d50[53]) : _0x163bx3[_0x3d50[54]](_0x3d50[53])
        }
    }

    _0x163bx10();
    function _0x163bx13() {
        var _0x163bx14 = $(_0x3d50[55]);
        var _0x163bx15 = _0x163bx14[_0x3d50[44]](_0x3d50[56]);
        _0x163bx14[_0x3d50[65]]({
            onfocusout: false,
            onkeyup: false,
            onclick: false,
            rules: {name: {required: true}, email: {required: true, email: true}, message: {required: true}},
            errorPlacement: function (_0x163bx16, _0x163bx17) {
            },
            highlight: function (_0x163bx17) {
                $(_0x163bx17)[_0x3d50[31]](_0x3d50[58])[_0x3d50[16]](_0x3d50[57])
            },
            unhighlight: function (_0x163bx17) {
                $(_0x163bx17)[_0x3d50[31]](_0x3d50[58])[_0x3d50[54]](_0x3d50[57])
            },
            submitHandler: function (_0x163bx18) {
                $(_0x163bx18)[_0x3d50[76]]({
                    type: _0x3d50[59],
                    url: _0x3d50[60],
                    dataType: _0x3d50[61],
                    cache: false,
                    data: _0x163bx14[_0x3d50[62]](),
                    success: function (_0x163bx19) {
                        if (_0x163bx19[_0x3d50[63]] === 0) {
                            _0x163bx14[_0x3d50[65]]()[_0x3d50[64]]();
                            _0x163bx14[0][_0x3d50[66]]();
                            _0x163bx14[_0x3d50[44]](_0x3d50[67])[_0x3d50[54]](_0x3d50[57]);
                            _0x163bx14[_0x3d50[44]](_0x3d50[69])[_0x3d50[68]]();
                            _0x163bx15[_0x3d50[54]](_0x3d50[74])[_0x3d50[16]](_0x3d50[73])[_0x3d50[2]](_0x3d50[71] + _0x163bx19[_0x3d50[72]])[_0x3d50[70]]()
                        } else {
                            _0x163bx15[_0x3d50[54]](_0x3d50[74])[_0x3d50[16]](_0x3d50[57])[_0x3d50[2]](_0x163bx19[_0x3d50[72]])[_0x3d50[70]]()
                        }
                    },
                    error: function (_0x163bx19) {
                        _0x163bx15[_0x3d50[54]](_0x3d50[73])[_0x3d50[16]](_0x3d50[57])[_0x3d50[2]](_0x3d50[75])[_0x3d50[70]]()
                    }
                })
            },
            invalidHandler: function (_0x163bx1a, _0x163bx1b) {
                var _0x163bx1c = _0x163bx1b[_0x3d50[77]]();
                if (_0x163bx1c) {
                    var _0x163bx1d = _0x163bx1c == 1 ? _0x3d50[78] : _0x3d50[79] + _0x163bx1c + _0x3d50[80];
                    _0x163bx15[_0x3d50[54]](_0x3d50[74])[_0x3d50[16]](_0x3d50[57])[_0x3d50[2]](_0x163bx1d)[_0x3d50[70]]()
                }
            }
        })
    }

    _0x163bx13();
    function _0x163bx1e() {
        if (_0x163bx5) {
            if (_bg_style_mobile === 0 || _bg_style_mobile == 1) {
                _0x163bx3[_0x3d50[16]](_0x3d50[81])
            }
            ;
            if (_bg_style_mobile == 2 || _bg_style_mobile == 3) {
                _0x163bx1f()
            } else {
                if (_bg_style_mobile == 4 || _bg_style_mobile == 5 || _bg_style_mobile == 6 || _bg_style_mobile == 7) {
                    $(window)[_0x3d50[26]](_0x3d50[51], function () {
                        _0x163bx20()
                    })
                }
            }
        } else {
            if (_bg_style_desktop === 0 || _bg_style_desktop == 1) {
                _0x163bx3[_0x3d50[16]](_0x3d50[81])
            }
            ;
            if (_bg_style_desktop == 2 || _bg_style_desktop == 3) {
                _0x163bx1f()
            } else {
                if (_bg_style_desktop == 4 || _bg_style_desktop == 5 || _bg_style_desktop == 6 || _bg_style_desktop == 7) {
                    _0x163bx20()
                } else {
                    if (_bg_style_desktop == 8 || _bg_style_desktop == 9 || _bg_style_desktop == 10) {
                        _0x163bx25()
                    } else {
                        if (_bg_style_desktop == 11 || _bg_style_desktop == 12 || _bg_style_desktop == 13) {
                            _0x163bx29()
                        }
                    }
                }
            }
        }
    }

    _0x163bx1e();
    function _0x163bx1f() {
        _0x163bx3[_0x3d50[16]](_0x3d50[82]);
        $(_0x3d50[83])[_0x3d50[41]]()
    }

    function _0x163bx20() {
        var _0x163bx21 = $(_0x3d50[84]);
        $(_0x3d50[83])[_0x3d50[41]]();
        _0x163bx3[_0x3d50[16]](_0x3d50[85]);
        for (var _0x163bx22 = 1; _0x163bx22 <= _bg_slideshow_image_amount; _0x163bx22++) {
            _0x163bx21[_0x3d50[89]](_0x3d50[86] + (_0x163bx22 < 10 ? _0x3d50[87] + _0x163bx22 : _0x163bx22) + _0x3d50[88])
        }
        ;
        if (_0x163bx5) {
            if (_bg_style_mobile == 4 || _bg_style_mobile == 5) {
                _0x163bx23()
            } else {
                if (_bg_style_mobile == 6 || _bg_style_mobile == 7) {
                    _0x163bx24()
                }
            }
        } else {
            if (_bg_style_desktop == 4 || _bg_style_desktop == 5) {
                _0x163bx23()
            } else {
                if (_bg_style_desktop == 6 || _bg_style_desktop == 7) {
                    _0x163bx24()
                }
            }
        }
        ;
        function _0x163bx23() {
            _0x163bx21[_0x3d50[90]]({fullscreen: true, duration: _bg_slideshow_duration, fadeInDuration: 1500})
        }

        function _0x163bx24() {
            _0x163bx21[_0x3d50[91]]({fullscreen: true, duration: _bg_slideshow_duration, fadeInDuration: 1500})
        }
    }

    function _0x163bx25() {
        var _0x163bx26 = $(_0x3d50[83]);
        var _0x163bx27 = $(_0x3d50[92]);
        _0x163bx3[_0x3d50[16]](_0x3d50[93]);
        _0x163bx26[_0x3d50[89]](_0x3d50[94] + _0x3d50[95] + _0x3d50[96]);
        var _0x163bx28 = document[_0x3d50[98]](_0x3d50[97]);
        if (_bg_style_desktop == 8) {
            _0x163bx28[_0x3d50[99]] = true;
            _0x163bx27[_0x3d50[41]]()
        } else {
            if (_bg_style_desktop == 9) {
                _0x163bx3[_0x3d50[16]](_0x3d50[100]);
                _0x163bx27[_0x3d50[26]](_0x3d50[19], function () {
                    if (_0x163bx3[_0x3d50[14]](_0x3d50[100])) {
                        _0x163bx28[_0x3d50[99]] = true;
                        _0x163bx3[_0x3d50[54]](_0x3d50[100])[_0x3d50[16]](_0x3d50[101])
                    } else {
                        if (_0x163bx3[_0x3d50[14]](_0x3d50[101])) {
                            _0x163bx28[_0x3d50[99]] = false;
                            _0x163bx3[_0x3d50[54]](_0x3d50[101])[_0x3d50[16]](_0x3d50[100])
                        }
                    }
                })
            }
        }
    }

    function _0x163bx29() {
        var _0x163bx26 = $(_0x3d50[83]);
        var _0x163bx27 = $(_0x3d50[92]);
        _0x163bx3[_0x3d50[16]](_0x3d50[102]);
        if (_bg_style_desktop == 11 || _bg_style_desktop == 13) {
            _0x163bx26[_0x3d50[21]](_0x3d50[103], _0x3d50[104]);
            _0x163bx26.YTPlayer()
        } else {
            _0x163bx26[_0x3d50[21]](_0x3d50[103], _0x3d50[105]);
            _0x163bx26.YTPlayer();
            _0x163bx3[_0x3d50[16]](_0x3d50[100]);
            _0x163bx27[_0x3d50[26]](_0x3d50[19], function () {
                if (_0x163bx3[_0x3d50[14]](_0x3d50[100])) {
                    _0x163bx26.YTPMute();
                    _0x163bx3[_0x3d50[54]](_0x3d50[100])[_0x3d50[16]](_0x3d50[101])
                } else {
                    if (_0x163bx3[_0x3d50[14]](_0x3d50[101])) {
                        _0x163bx26.YTPUnmute();
                        _0x163bx3[_0x3d50[54]](_0x3d50[101])[_0x3d50[16]](_0x3d50[100])
                    }
                }
            })
        }
    }

    function _0x163bx2a() {
        if (_bg_style_mobile == 1 || _bg_style_mobile == 3 || _bg_style_mobile == 5 || _bg_style_mobile == 7 || _bg_style_desktop == 1 || _bg_style_desktop == 3 || _bg_style_desktop == 5 || _bg_style_desktop == 7 || _bg_style_desktop == 10 || _bg_style_desktop == 13) {
            _0x163bx3[_0x3d50[89]](_0x3d50[106] + _0x3d50[107] + _0x3d50[108])
        }
        ;
        if (_0x163bx5) {
            if (_bg_style_mobile == 1 || _bg_style_mobile == 3 || _bg_style_mobile == 5 || _bg_style_mobile == 7) {
                _0x163bx3[_0x3d50[16]](_0x3d50[101]);
                _0x163bx2c()
            }
        } else {
            if (_bg_style_desktop == 1 || _bg_style_desktop == 3 || _bg_style_desktop == 5 || _bg_style_desktop == 7 || _bg_style_desktop == 10 || _bg_style_desktop == 14) {
                var _0x163bx2b = document[_0x3d50[98]](_0x3d50[109]);
                _0x163bx3[_0x3d50[16]](_0x3d50[100]);
                _0x163bx2b[_0x3d50[110]]();
                _0x163bx2c()
            }
        }
        ;
        function _0x163bx2c() {
            var _0x163bx27 = $(_0x3d50[92]);
            var _0x163bx2b = document[_0x3d50[98]](_0x3d50[109]);
            _0x163bx27[_0x3d50[26]](_0x3d50[19], function () {
                var _0x163bx2d = $(this);
                if (_0x163bx3[_0x3d50[14]](_0x3d50[100])) {
                    _0x163bx2b[_0x3d50[111]]();
                    _0x163bx3[_0x3d50[54]](_0x3d50[100])[_0x3d50[16]](_0x3d50[101])
                } else {
                    if (_0x163bx3[_0x3d50[14]](_0x3d50[101])) {
                        _0x163bx2b[_0x3d50[110]]();
                        _0x163bx3[_0x3d50[54]](_0x3d50[101])[_0x3d50[16]](_0x3d50[100])
                    }
                }
            })
        }
    }

    _0x163bx2a();
    function _0x163bx2e() {
        if (_site_bg_effect === 0) {
            $(_0x3d50[112])[_0x3d50[41]]()
        } else {
            if (_site_bg_effect == 1) {
                _0x163bx2f()
            } else {
                if (_site_bg_effect == 2) {
                    _0x163bx45()
                } else {
                    if (_site_bg_effect == 3) {
                        _0x163bx4a()
                    }
                }
            }
        }
    }

    function _0x163bx2f() {
        var _0x163bx30 = $(_0x3d50[112]);
        _0x163bx3[_0x3d50[16]](_0x3d50[113]);
        function _0x163bx31(_0x163bx32) {
            var _0x163bx33           = 12000;
            var _0x163bx34           = 0.2;
            var _0x163bx35           = $(window)[_0x3d50[114]]();
            var _0x163bx36           = $(window)[_0x3d50[115]]();
            var _0x163bx37           = Math[_0x3d50[116]](_0x163bx36 * _0x163bx35 / _0x163bx33);
            var _0x163bx2d           = $(this), _0x163bx38 = _0x163bx32[_0x3d50[118]](_0x3d50[117]);
            _0x163bx2d[_0x3d50[119]] = {
                star: {color: _constellation_color, width: _constellation_width},
                line: {color: _constellation_color, width: 0.4},
                position: {x: _0x163bx32[_0x3d50[114]] * 0.5, y: _0x163bx32[_0x3d50[115]] * 0.5},
                velocity: _0x163bx34,
                length: _0x163bx37,
                distance: 130,
                radius: 120,
                stars: []
            };
            function _0x163bx39() {
                this[_0x3d50[120]] = Math[_0x3d50[121]]() * _0x163bx32[_0x3d50[114]];
                this[_0x3d50[122]] = Math[_0x3d50[121]]() * _0x163bx32[_0x3d50[115]];
                this[_0x3d50[123]] = (_0x163bx2d[_0x3d50[119]][_0x3d50[24]] - (Math[_0x3d50[121]]() * 0.3));
                this[_0x3d50[124]] = (_0x163bx2d[_0x3d50[119]][_0x3d50[24]] - (Math[_0x3d50[121]]() * 0.3));
                this[_0x3d50[125]] = Math[_0x3d50[121]]() * _0x163bx2d[_0x3d50[119]][_0x3d50[126]][_0x3d50[114]]
            }

            _0x163bx39[_0x3d50[127]] = {
                create: function () {
                    _0x163bx38[_0x3d50[128]]();
                    _0x163bx38[_0x3d50[130]](this[_0x3d50[120]], this[_0x3d50[122]], this[_0x3d50[125]], 0, Math[_0x3d50[129]] * 2, false);
                    _0x163bx38[_0x3d50[131]]()
                }, animate: function () {
                    var _0x163bx22;
                    for (_0x163bx22 = 0; _0x163bx22 < _0x163bx2d[_0x3d50[119]][_0x3d50[132]]; _0x163bx22++) {
                        var _0x163bx3a = _0x163bx2d[_0x3d50[119]][_0x3d50[133]][_0x163bx22];
                        if (_0x163bx3a[_0x3d50[122]] < 0 || _0x163bx3a[_0x3d50[122]] > _0x163bx32[_0x3d50[115]]) {
                            _0x163bx3a[_0x3d50[123]] = _0x163bx3a[_0x3d50[123]];
                            _0x163bx3a[_0x3d50[124]] = -_0x163bx3a[_0x3d50[124]]
                        } else {
                            if (_0x163bx3a[_0x3d50[120]] < 0 || _0x163bx3a[_0x3d50[120]] > _0x163bx32[_0x3d50[114]]) {
                                _0x163bx3a[_0x3d50[123]] = -_0x163bx3a[_0x3d50[123]];
                                _0x163bx3a[_0x3d50[124]] = _0x163bx3a[_0x3d50[124]]
                            }
                        }
                        ;
                        _0x163bx3a[_0x3d50[120]] += _0x163bx3a[_0x3d50[123]];
                        _0x163bx3a[_0x3d50[122]] += _0x163bx3a[_0x3d50[124]]
                    }
                }, line: function () {
                    var _0x163bx3b = _0x163bx2d[_0x3d50[119]][_0x3d50[132]], _0x163bx3c, _0x163bx3d, _0x163bx22, _0x163bx3e;
                    for (_0x163bx22 = 0; _0x163bx22 < _0x163bx3b; _0x163bx22++) {
                        for (_0x163bx3e = 0; _0x163bx3e < _0x163bx3b; _0x163bx3e++) {
                            _0x163bx3c = _0x163bx2d[_0x3d50[119]][_0x3d50[133]][_0x163bx22];
                            _0x163bx3d = _0x163bx2d[_0x3d50[119]][_0x3d50[133]][_0x163bx3e];
                            if ((_0x163bx3c[_0x3d50[120]] - _0x163bx3d[_0x3d50[120]]) < _0x163bx2d[_0x3d50[119]][_0x3d50[134]] && (_0x163bx3c[_0x3d50[122]] - _0x163bx3d[_0x3d50[122]]) < _0x163bx2d[_0x3d50[119]][_0x3d50[134]] && (_0x163bx3c[_0x3d50[120]] - _0x163bx3d[_0x3d50[120]]) > -_0x163bx2d[_0x3d50[119]][_0x3d50[134]] && (_0x163bx3c[_0x3d50[122]] - _0x163bx3d[_0x3d50[122]]) > -_0x163bx2d[_0x3d50[119]][_0x3d50[134]]) {
                                if ((_0x163bx3c[_0x3d50[120]] - _0x163bx2d[_0x3d50[119]][_0x3d50[135]][_0x3d50[120]]) < _0x163bx2d[_0x3d50[119]][_0x3d50[125]] && (_0x163bx3c[_0x3d50[122]] - _0x163bx2d[_0x3d50[119]][_0x3d50[135]][_0x3d50[122]]) < _0x163bx2d[_0x3d50[119]][_0x3d50[125]] && (_0x163bx3c[_0x3d50[120]] - _0x163bx2d[_0x3d50[119]][_0x3d50[135]][_0x3d50[120]]) > -_0x163bx2d[_0x3d50[119]][_0x3d50[125]] && (_0x163bx3c[_0x3d50[122]] - _0x163bx2d[_0x3d50[119]][_0x3d50[135]][_0x3d50[122]]) > -_0x163bx2d[_0x3d50[119]][_0x3d50[125]]) {
                                    _0x163bx38[_0x3d50[128]]();
                                    _0x163bx38[_0x3d50[136]](_0x163bx3c[_0x3d50[120]], _0x163bx3c[_0x3d50[122]]);
                                    _0x163bx38[_0x3d50[137]](_0x163bx3d[_0x3d50[120]], _0x163bx3d[_0x3d50[122]]);
                                    _0x163bx38[_0x3d50[138]]();
                                    _0x163bx38[_0x3d50[139]]()
                                }
                            }
                        }
                    }
                }
            };
            _0x163bx2d[_0x3d50[140]] = function () {
                var _0x163bx3b = _0x163bx2d[_0x3d50[119]][_0x3d50[132]], _0x163bx3a, _0x163bx22;
                _0x163bx38[_0x3d50[141]](0, 0, _0x163bx32[_0x3d50[114]], _0x163bx32[_0x3d50[115]]);
                for (_0x163bx22 = 0; _0x163bx22 < _0x163bx3b; _0x163bx22++) {
                    _0x163bx2d[_0x3d50[119]][_0x3d50[133]][_0x3d50[142]](new _0x163bx39());
                    _0x163bx3a = _0x163bx2d[_0x3d50[119]][_0x3d50[133]][_0x163bx22];
                    _0x163bx3a[_0x3d50[143]]()
                }
                ;
                _0x163bx3a[_0x3d50[144]]();
                _0x163bx3a[_0x3d50[145]]()
            };
            _0x163bx2d[_0x3d50[146]] = function () {
                _0x163bx32[_0x3d50[114]] = window[_0x3d50[147]];
                _0x163bx32[_0x3d50[115]] = window[_0x3d50[148]]
            };
            _0x163bx2d[_0x3d50[149]] = function () {
                _0x163bx38[_0x3d50[150]] = _0x163bx2d[_0x3d50[119]][_0x3d50[126]][_0x3d50[151]];
                _0x163bx38[_0x3d50[152]] = _0x163bx2d[_0x3d50[119]][_0x3d50[144]][_0x3d50[151]];
                _0x163bx38[_0x3d50[153]] = _0x163bx2d[_0x3d50[119]][_0x3d50[144]][_0x3d50[114]];
                _0x163bx38[_0x3d50[131]]()
            };
            _0x163bx2d[_0x3d50[154]] = function (_0x163bx3f) {
                _0x163bx3f();
                _0x163bx40(function () {
                    _0x163bx2d[_0x3d50[154]](function () {
                        _0x163bx3f()
                    })
                })
            };
            _0x163bx2d[_0x3d50[155]] = function () {
                $(window)[_0x3d50[26]](_0x3d50[156], function (_0x163bx9) {
                    _0x163bx2d[_0x3d50[119]][_0x3d50[135]][_0x3d50[120]] = _0x163bx9[_0x3d50[157]];
                    _0x163bx2d[_0x3d50[119]][_0x3d50[135]][_0x3d50[122]] = _0x163bx9[_0x3d50[158]]
                })
            };
            _0x163bx2d[_0x3d50[39]]  = function () {
                _0x163bx2d[_0x3d50[146]]();
                _0x163bx2d[_0x3d50[149]]();
                _0x163bx2d[_0x3d50[154]](function () {
                    _0x163bx2d[_0x3d50[140]]()
                });
                _0x163bx2d[_0x3d50[155]]()
            };
            return _0x163bx2d
        }

        var _0x163bx40 = window[_0x3d50[159]] || window[_0x3d50[160]] || window[_0x3d50[161]] || window[_0x3d50[162]] || function (_0x163bx3f) {
                window[_0x3d50[163]](_0x163bx3f, 1000 / 60)
            };
        $(window)[_0x3d50[26]](_0x3d50[51], function () {
            setTimeout(function () {
                _0x163bx31($(_0x3d50[164])[0])[_0x3d50[39]]();
                _0x163bx30[_0x3d50[24]](_0x3d50[165], {duration: 3000})
            }, 1000)
        });
        var _0x163bx41 = (function () {
            var _0x163bx42 = {};
            return function (_0x163bx3f, _0x163bx43, _0x163bx44) {
                if (!_0x163bx44) {
                    _0x163bx44 = _0x3d50[166]
                }
                ;
                if (_0x163bx42[_0x163bx44]) {
                    clearTimeout(_0x163bx42[_0x163bx44])
                }
                ;
                _0x163bx42[_0x163bx44] = setTimeout(_0x163bx3f, _0x163bx43)
            }
        })();
        $(window)[_0x3d50[167]](function () {
            _0x163bx41(function () {
                _0x163bx31($(_0x3d50[164])[0])[_0x3d50[39]]()
            }, 800, _0x3d50[166])
        })
    }

    function _0x163bx45() {
        var _0x163bx46 = $(_0x3d50[168]);
        _0x163bx3[_0x3d50[16]](_0x3d50[169]);
        $(_0x3d50[112])[_0x3d50[41]]();
        _0x163bx46[_0x3d50[43]](_0x3d50[170], 0);
        _0x163bx46[_0x3d50[89]](_0x3d50[171] + _0x3d50[172] + _0x3d50[173]);
        function _0x163bx47() {
            $(_0x3d50[175])[_0x3d50[24]]({translateZ: 0, translateY: [-2000, 0]}, {
                queue: false,
                delay: 0,
                duration: 70000,
                easing: _0x3d50[174],
                complete: _0x163bx47
            })
        }

        _0x163bx47();
        function _0x163bx48() {
            $(_0x3d50[176])[_0x3d50[24]]({translateZ: 0, translateY: [-2000, 0]}, {
                queue: false,
                delay: 0,
                duration: 85000,
                easing: _0x3d50[174],
                complete: _0x163bx48
            })
        }

        _0x163bx48();
        function _0x163bx49() {
            $(_0x3d50[177])[_0x3d50[24]]({translateZ: 0, translateY: [-2000, 0]}, {
                queue: false,
                delay: 0,
                duration: 100000,
                easing: _0x3d50[174],
                complete: _0x163bx49
            })
        }

        _0x163bx49();
        $(window)[_0x3d50[26]](_0x3d50[51], function () {
            setTimeout(function () {
                _0x163bx46[_0x3d50[24]]({
                    translateZ: _0x3d50[87],
                    opacity: [_parallax_star_opacity, 0]
                }, {display: _0x3d50[178], duration: 3000})
            }, 1000)
        })
    }

    _0x163bx2e();
    function _0x163bx4a() {
        _0x163bx3[_0x3d50[16]](_0x3d50[179]);
        $(_0x3d50[180])[_0x3d50[41]]();
        particlesJS(_0x3d50[181], {
            "\x70\x61\x72\x74\x69\x63\x6C\x65\x73": {
                "\x6E\x75\x6D\x62\x65\x72": {
                    "\x76\x61\x6C\x75\x65": 25,
                    "\x64\x65\x6E\x73\x69\x74\x79": {
                        "\x65\x6E\x61\x62\x6C\x65": true,
                        "\x76\x61\x6C\x75\x65\x5F\x61\x72\x65\x61": 500
                    }
                },
                "\x63\x6F\x6C\x6F\x72": {"\x76\x61\x6C\x75\x65": _0x3d50[182]},
                "\x6F\x70\x61\x63\x69\x74\x79": {
                    "\x76\x61\x6C\x75\x65": _particles_opacity,
                    "\x72\x61\x6E\x64\x6F\x6D": false,
                    "\x61\x6E\x69\x6D": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x73\x70\x65\x65\x64": 1,
                        "\x6F\x70\x61\x63\x69\x74\x79\x5F\x6D\x69\x6E": 0.1,
                        "\x73\x79\x6E\x63": false
                    }
                },
                "\x73\x69\x7A\x65": {
                    "\x76\x61\x6C\x75\x65": 4,
                    "\x72\x61\x6E\x64\x6F\x6D": true,
                    "\x61\x6E\x69\x6D": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x73\x70\x65\x65\x64": 40,
                        "\x73\x69\x7A\x65\x5F\x6D\x69\x6E": 0.1,
                        "\x73\x79\x6E\x63": false
                    }
                },
                "\x6C\x69\x6E\x65\x5F\x6C\x69\x6E\x6B\x65\x64": {
                    "\x65\x6E\x61\x62\x6C\x65": true,
                    "\x64\x69\x73\x74\x61\x6E\x63\x65": 150,
                    "\x63\x6F\x6C\x6F\x72": _0x3d50[182],
                    "\x6F\x70\x61\x63\x69\x74\x79": _particles_link_opacity,
                    "\x77\x69\x64\x74\x68": 1
                },
                "\x6D\x6F\x76\x65": {
                    "\x65\x6E\x61\x62\x6C\x65": true,
                    "\x73\x70\x65\x65\x64": 6,
                    "\x64\x69\x72\x65\x63\x74\x69\x6F\x6E": _0x3d50[183],
                    "\x72\x61\x6E\x64\x6F\x6D": false,
                    "\x73\x74\x72\x61\x69\x67\x68\x74": false,
                    "\x6F\x75\x74\x5F\x6D\x6F\x64\x65": _0x3d50[184],
                    "\x62\x6F\x75\x6E\x63\x65": false,
                    "\x61\x74\x74\x72\x61\x63\x74": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x72\x6F\x74\x61\x74\x65\x58": 600,
                        "\x72\x6F\x74\x61\x74\x65\x59": 1200
                    }
                }
            },
            "\x69\x6E\x74\x65\x72\x61\x63\x74\x69\x76\x69\x74\x79": {
                "\x64\x65\x74\x65\x63\x74\x5F\x6F\x6E": _0x3d50[164],
                "\x65\x76\x65\x6E\x74\x73": {
                    "\x6F\x6E\x68\x6F\x76\x65\x72": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x6D\x6F\x64\x65": _0x3d50[185]
                    },
                    "\x6F\x6E\x63\x6C\x69\x63\x6B": {
                        "\x65\x6E\x61\x62\x6C\x65": false,
                        "\x6D\x6F\x64\x65": _0x3d50[142]
                    },
                    "\x72\x65\x73\x69\x7A\x65": true
                },
                "\x6D\x6F\x64\x65\x73": {
                    "\x67\x72\x61\x62": {
                        "\x64\x69\x73\x74\x61\x6E\x63\x65": 400,
                        "\x6C\x69\x6E\x65\x5F\x6C\x69\x6E\x6B\x65\x64": {"\x6F\x70\x61\x63\x69\x74\x79": 1}
                    },
                    "\x62\x75\x62\x62\x6C\x65": {
                        "\x64\x69\x73\x74\x61\x6E\x63\x65": 400,
                        "\x73\x69\x7A\x65": 40,
                        "\x64\x75\x72\x61\x74\x69\x6F\x6E": 2,
                        "\x6F\x70\x61\x63\x69\x74\x79": 8,
                        "\x73\x70\x65\x65\x64": 3
                    },
                    "\x72\x65\x70\x75\x6C\x73\x65": {
                        "\x64\x69\x73\x74\x61\x6E\x63\x65": 200,
                        "\x64\x75\x72\x61\x74\x69\x6F\x6E": 0.4
                    },
                    "\x70\x75\x73\x68": {"\x70\x61\x72\x74\x69\x63\x6C\x65\x73\x5F\x6E\x62": 4},
                    "\x72\x65\x6D\x6F\x76\x65": {"\x70\x61\x72\x74\x69\x63\x6C\x65\x73\x5F\x6E\x62": 2}
                }
            },
            "\x72\x65\x74\x69\x6E\x61\x5F\x64\x65\x74\x65\x63\x74": true
        })
    }

    function _0x163bx4b() {
        if (_side_bg_effect_parallax && !_0x163bx5 && !_0x163bx7) {
            $(_0x3d50[187])[_0x3d50[186]]()
        }
    }

    $(window)[_0x3d50[26]](_0x3d50[51], function () {
        _0x163bx4b()
    });
    function _0x163bx4c() {
        if (!_0x163bx5 && !_0x163bx7) {
            var _0x163bx4d       = {
                origin: _0x3d50[188],
                distance: _0x3d50[189],
                duration: 800,
                delay: 0,
                rotate: {x: 0, y: 0, z: 0},
                opacity: 0,
                scale: 0,
                easing: _0x3d50[190],
                container: null,
                mobile: false,
                reset: true,
                useDelay: _0x3d50[191],
                viewFactor: 0.2,
                viewOffset: {top: 0, right: 0, bottom: 0, left: 0},
                afterReveal: function (_0x163bx4e) {
                },
                afterReset: function (_0x163bx4e) {
                }
            };
            window[_0x3d50[192]] = new ScrollReveal(_0x163bx4d);
            if ($(_0x3d50[193])[_0x3d50[132]]) {
                sr[_0x3d50[195]](_0x3d50[193], {origin: _0x3d50[194]})
            }
            ;
            if ($(_0x3d50[196])[_0x3d50[132]]) {
                sr[_0x3d50[195]](_0x3d50[196], {origin: _0x3d50[197]})
            }
            ;
            if ($(_0x3d50[198])[_0x3d50[132]]) {
                sr[_0x3d50[195]](_0x3d50[198], {origin: _0x3d50[188]})
            }
            ;
            if ($(_0x3d50[199])[_0x3d50[132]]) {
                sr[_0x3d50[195]](_0x3d50[199], {origin: _0x3d50[200]})
            }
        }
    }
})(jQuery)
var _0x542c = ["\x6E\x6F\x43\x6F\x6E\x66\x6C\x69\x63\x74", "\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74", "\x68\x74\x6D\x6C", "\x62\x6F\x64\x79", "\x63\x6C\x69\x63\x6B", "\x70\x72\x65\x76\x65\x6E\x74\x44\x65\x66\x61\x75\x6C\x74", "\x63\x63\x61\x72\x64\x2D\x69\x6E", "\x74\x6F\x67\x67\x6C\x65\x43\x6C\x61\x73\x73", "\x6F\x6E", "\x2E\x63\x63\x61\x72\x64\x5F\x5F\x74\x6F\x67\x67\x6C\x65", "\x5F\x6F\x6E", "\x68\x61\x73\x43\x6C\x61\x73\x73", "\x64\x61\x74\x61", "\x61\x64\x64\x43\x6C\x61\x73\x73", "\x6F\x66\x66", "\x72\x65\x6D\x6F\x76\x65\x43\x6C\x61\x73\x73", "\x6F\x6F", "\x20", "\x65\x61\x63\x68", "\x61", "\x66\x69\x6E\x64", "\x5B\x64\x61\x74\x61\x2D\x74\x79\x70\x65\x3D\x22\x74\x6F\x67\x67\x6C\x65\x22\x5D"];
var $       = jQuery[_0x542c[0]]();
(function ($) {
    _0x542c[1];
    var _0x5b0ex2 = $(_0x542c[2]);
    var _0x5b0ex3 = $(_0x542c[3]);

    function _0x5b0ex4() {
        $(_0x542c[9])[_0x542c[8]](_0x542c[4], function (_0x5b0ex5) {
            _0x5b0ex5[_0x542c[5]]();
            _0x5b0ex3[_0x542c[7]](_0x542c[6]);
        });
        $(_0x542c[21])[_0x542c[20]](_0x542c[19])[_0x542c[18]](function () {
            var _0x5b0ex6 = $(this);
            if (_0x5b0ex6[_0x542c[11]](_0x542c[10])) {
                _0x5b0ex3[_0x542c[15]](_0x5b0ex6[_0x542c[12]](_0x542c[14]))[_0x542c[13]](_0x5b0ex6[_0x542c[12]](_0x542c[8]))
            } else {
                _0x5b0ex3[_0x542c[15]](_0x5b0ex6[_0x542c[12]](_0x542c[16]))[_0x542c[13]](_0x5b0ex6[_0x542c[12]](_0x542c[14]))
            }
            ;
            _0x5b0ex6[_0x542c[8]](_0x542c[4], function () {
                _0x5b0ex6[_0x542c[7]](_0x542c[10]);
                _0x5b0ex3[_0x542c[7]](_0x5b0ex6[_0x542c[12]](_0x542c[8]) + _0x542c[17] + _0x5b0ex6[_0x542c[12]](_0x542c[14]));
            });
        });
    }

    _0x5b0ex4();
})(jQuery);
$(function () {
    $(".js-analytic").click(function () {
        if (ga) {
            ga('send', 'event', 'button', 'click', $(this).data("label") || "no label", 1);
        }
    });
});