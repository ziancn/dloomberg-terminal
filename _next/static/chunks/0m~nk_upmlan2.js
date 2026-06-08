(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
13067, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
'use client';
;
const BackendStatusContext = /*#__PURE__*/ (0, __TURBOPACK__imported__module__51268__["createContext"])(undefined);
function useBackendStatus() {
    const context = (0, __TURBOPACK__imported__module__51268__["useContext"])(BackendStatusContext);
    if (!context) {
        throw new Error('useBackendStatus must be used within BackendStatusProvider');
    }
    return context;
}
__turbopack_context__.s([
    "BackendStatusContext",
    0,
    BackendStatusContext,
    "useBackendStatus",
    0,
    useBackendStatus
]);
}),
14955, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__13067__ = __turbopack_context__.i(13067);
var __TURBOPACK__imported__module__61238__ = __turbopack_context__.i(61238);
var __TURBOPACK__imported__module__8069__ = __turbopack_context__.i(8069);
'use client';
;
;
;
;
const STATUS_TIMEOUT = 2000;
const POLL_INTERVAL = 2000; // 2 seconds
const MAX_RETRIES = 2;
function BackendStatusProvider({ children }) {
    const [status, setStatus] = (0, __TURBOPACK__imported__module__51268__["useState"])({
        fastapi: 'loading',
        blpapi: 'loading',
        isRetrying: false,
        retryCount: 0,
        maxRetries: MAX_RETRIES
    });
    const intervalRef = (0, __TURBOPACK__imported__module__51268__["useRef"])(null);
    const isCheckingRef = (0, __TURBOPACK__imported__module__51268__["useRef"])(false);
    const checkBackendStatus = (0, __TURBOPACK__imported__module__51268__["useCallback"])(async ()=>{
        // Prevent overlapping requests
        if (isCheckingRef.current) return;
        isCheckingRef.current = true;
        try {
            const data = await (0, __TURBOPACK__imported__module__61238__["apiGet"])(__TURBOPACK__imported__module__8069__["API"].status, {
                timeout: STATUS_TIMEOUT
            });
            setStatus((prev)=>({
                    ...prev,
                    fastapi: 'ok',
                    blpapi: data.blpapi === true ? 'ok' : 'offline',
                    isRetrying: false,
                    retryCount: 0
                }));
        } catch (error) {
            console.error('Backend status check failed:', error);
            setStatus((prev)=>{
                const newRetryCount = prev.retryCount + 1;
                const isMaxRetriesReached = newRetryCount >= prev.maxRetries;
                return {
                    ...prev,
                    fastapi: isMaxRetriesReached ? 'offline' : 'loading',
                    blpapi: isMaxRetriesReached ? 'offline' : 'loading',
                    isRetrying: !isMaxRetriesReached,
                    retryCount: newRetryCount
                };
            });
        } finally{
            isCheckingRef.current = false;
        }
    }, []);
    // Initial check
    (0, __TURBOPACK__imported__module__51268__["useEffect"])(()=>{
        checkBackendStatus();
    }, [
        checkBackendStatus
    ]);
    // Periodic polling with page visibility detection
    (0, __TURBOPACK__imported__module__51268__["useEffect"])(()=>{
        const startPolling = ()=>{
            if (intervalRef.current) clearInterval(intervalRef.current);
            intervalRef.current = setInterval(()=>{
                checkBackendStatus();
            }, POLL_INTERVAL);
        };
        const stopPolling = ()=>{
            if (intervalRef.current) {
                clearInterval(intervalRef.current);
                intervalRef.current = null;
            }
        };
        const handleVisibilityChange = ()=>{
            if (document.hidden) {
                stopPolling();
            } else {
                startPolling();
            }
        };
        // Start polling if page is visible
        if (!document.hidden) {
            startPolling();
        }
        // Listen to visibility changes
        document.addEventListener('visibilitychange', handleVisibilityChange);
        return ()=>{
            stopPolling();
            document.removeEventListener('visibilitychange', handleVisibilityChange);
        };
    }, [
        checkBackendStatus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__13067__["BackendStatusContext"].Provider, {
        value: status,
        children: children
    });
}
__turbopack_context__.s([
    "BackendStatusProvider",
    0,
    BackendStatusProvider
]);
}),
48042, ((__turbopack_context__, module, exports) => {

module.exports = __turbopack_context__.r(58134);
}),
25661, ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var React = __turbopack_context__.r(51268);
function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
}
var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
    var value = getSnapshot(), _useState = useState({
        inst: {
            value: value,
            getSnapshot: getSnapshot
        }
    }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect(function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({
            inst: inst
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    useEffect(function() {
        checkIfSnapshotChanged(inst) && forceUpdate({
            inst: inst
        });
        return subscribe(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        });
    }, [
        subscribe
    ]);
    useDebugValue(value);
    return value;
}
function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
    } catch (error) {
        return !0;
    }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
}
var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}),
56032, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = __turbopack_context__.r(25661);
} else //TURBOPACK unreachable
;
}),
20206, ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var React = __turbopack_context__.r(51268), shim = __turbopack_context__.r(56032);
function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
}
var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
        var inst = {
            hasValue: !1,
            value: null
        };
        instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(function() {
        function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
                hasMemo = !0;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
        }
        var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
            function() {
                return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
            }
        ];
    }, [
        getSnapshot,
        getServerSnapshot,
        selector,
        isEqual
    ]);
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(function() {
        inst.hasValue = !0;
        inst.value = value;
    }, [
        value
    ]);
    useDebugValue(value);
    return value;
};
}),
96482, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = __turbopack_context__.r(20206);
} else //TURBOPACK unreachable
;
}),
37177, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/features/shell/terminal-chrome.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
// MERGED MODULE: [project]/src/features/shell/status-bar.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__1 = __TURBOPACK__imported__module__8063__;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript) <export default as Settings>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/settings.mjs [app-client] (ecmascript)
;
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__67022__ = __turbopack_context__.i(67022);
;
const __iconNode = [
    [
        "path",
        {
            d: "M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915",
            key: "1i5ecw"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "3",
            key: "1v7zrd"
        }
    ]
];
const Settings = (0, __TURBOPACK__imported__module__67022__["default"])("settings", __iconNode);
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript) <export default as LoaderCircle>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/loader-circle.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67022__1 = __TURBOPACK__imported__module__67022__;
;
const __iconNode1 = [
    [
        "path",
        {
            d: "M21 12a9 9 0 1 1-6.219-8.56",
            key: "13zald"
        }
    ]
];
const LoaderCircle = (0, __TURBOPACK__imported__module__67022__1["default"])("loader-circle", __iconNode1);
;
// MERGED MODULE: [project]/node_modules/.pnpm/@icons-pack+react-simple-icons@13.13.0_react@19.2.4/node_modules/@icons-pack/react-simple-icons/icons/SiGithub.mjs [app-client] (ecmascript) <export default as SiGithub>
;
// MERGED MODULE: [project]/node_modules/.pnpm/@icons-pack+react-simple-icons@13.13.0_react@19.2.4/node_modules/@icons-pack/react-simple-icons/icons/SiGithub.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__2 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
;
;
const defaultColor = "#181717";
const SiGithub = __TURBOPACK__imported__module__51268__["forwardRef"](function SiGithub2({ title = "GitHub", color = "currentColor", size = 24, ...others }, ref) {
    if (color === "default") {
        color = defaultColor;
    }
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__2["jsxs"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: size,
        height: size,
        fill: color,
        viewBox: "0 0 24 24",
        ref,
        ...others,
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__2["jsx"])("title", {
                children: title
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__2["jsx"])("path", {
                d: "M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
            })
        ]
    });
});
;
var __TURBOPACK__imported__module__13067__ = __turbopack_context__.i(13067);
"use client";
;
;
;
;
function StatusIndicator({ status, label }) {
    const isOk = status === 'ok';
    const isLoading = status === 'loading';
    const isOffline = status === 'offline';
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
        className: "flex items-center gap-1.5",
        children: [
            isLoading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(LoaderCircle, {
                className: "size-2 animate-spin text-yellow-500"
            }) : isOk ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("span", {
                className: "size-2 rounded-full bg-green-500"
            }) : isOffline ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("span", {
                className: "size-2 rounded-full bg-red-500"
            }) : null,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("span", {
                className: "text-xs",
                children: label
            })
        ]
    });
}
function StatusBar() {
    const backendStatus = (0, __TURBOPACK__imported__module__13067__["useBackendStatus"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
        className: "flex items-center justify-between px-4 py-2 bg-neutral-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(StatusIndicator, {
                            status: backendStatus.fastapi,
                            label: "FastAPI"
                        })
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(StatusIndicator, {
                            status: backendStatus.blpapi,
                            label: "BLPAPI"
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
                className: "flex items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("a", {
                        className: "text-muted-foreground hover:text-foreground transition-colors",
                        href: "https://github.com/ziancn/dloomberg-terminal",
                        target: "_blank",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(SiGithub, {
                            className: "size-4"
                        })
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("a", {
                        className: "text-muted-foreground hover:text-foreground transition-colors",
                        href: "#",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(Settings, {
                            className: "size-4"
                        })
                    })
                ]
            })
        ]
    });
}
// MERGED MODULE: [project]/src/features/shell/fav-bar.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__3 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__48042__ = __turbopack_context__.i(48042);
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript) <export default as ChevronDown>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/chevron-down.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67022__2 = __TURBOPACK__imported__module__67022__;
;
const __iconNode2 = [
    [
        "path",
        {
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__67022__2["default"])("chevron-down", __iconNode2);
;
var __TURBOPACK__imported__module__19455__ = __turbopack_context__.i(19455);
// MERGED MODULE: [project]/src/features/shell/search-command.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__4 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__48042__1 = __TURBOPACK__imported__module__48042__;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript) <export default as Terminal>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/terminal.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67022__3 = __TURBOPACK__imported__module__67022__;
;
const __iconNode3 = [
    [
        "path",
        {
            d: "M12 19h8",
            key: "baeox8"
        }
    ],
    [
        "path",
        {
            d: "m4 17 6-6-6-6",
            key: "1yngyt"
        }
    ]
];
const Terminal = (0, __TURBOPACK__imported__module__67022__3["default"])("terminal", __iconNode3);
;
var __TURBOPACK__imported__module__19455__1 = __TURBOPACK__imported__module__19455__;
// MERGED MODULE: [project]/src/components/ui/kbd.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__5 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
;
;
function Kbd({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])("kbd", {
        "data-slot": "kbd",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("pointer-events-none inline-flex h-5 w-fit min-w-5 items-center justify-center gap-1 rounded-none bg-muted px-1 font-sans text-xs font-medium text-muted-foreground select-none in-data-[slot=tooltip-content]:bg-background/20 in-data-[slot=tooltip-content]:text-background dark:in-data-[slot=tooltip-content]:bg-background/10 [&_svg:not([class*='size-'])]:size-3", className),
        ...props
    });
}
function KbdGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])("kbd", {
        "data-slot": "kbd-group",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("inline-flex items-center gap-1", className),
        ...props
    });
}
;
// MERGED MODULE: [project]/src/config/app-registry.ts [app-client] (ecmascript)
;
const appRegistry = [
    {
        id: "start",
        label: "START",
        path: "/",
        description: "Get started with Dloomberg"
    },
    {
        id: "hkss",
        label: "HKSS",
        path: "/hkss",
        description: "HKEX short sell turnover today"
    },
    {
        id: "set",
        label: "SET",
        path: "/settings",
        description: "Application settings"
    }
];
const getFeatureById = (id)=>appRegistry.find((f)=>f.id === id);
// MERGED MODULE: [project]/src/components/ui/command.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__6 = __TURBOPACK__imported__module__8063__;
// MERGED MODULE: [project]/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom_774a6dff9510bebce6a2343405a1ca59/node_modules/cmdk/dist/index.mjs [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/cmdk@1.1.1_@types+react-dom_774a6dff9510bebce6a2343405a1ca59/node_modules/cmdk/dist/chunk-NZJY6EH4.mjs [app-client] (ecmascript)
;
var U = 1, Y = .9, H = .8, J = .17, p = .1, u = .999, $ = .9999;
var k = .99, m = /[\\\/_+.#"@\[\(\{&]/, B = /[\\\/_+.#"@\[\(\{&]/g, K = /[\s-]/, X = /[\s-]/g;
function G(_, C, h, P, A, f, O) {
    if (f === C.length) return A === _.length ? U : k;
    var T = `${A},${f}`;
    if (O[T] !== void 0) return O[T];
    for(var L = P.charAt(f), c = h.indexOf(L, A), S = 0, E, N, R, M; c >= 0;)E = G(_, C, h, P, c + 1, f + 1, O), E > S && (c === A ? E *= U : m.test(_.charAt(c - 1)) ? (E *= H, R = _.slice(A, c - 1).match(B), R && A > 0 && (E *= Math.pow(u, R.length))) : K.test(_.charAt(c - 1)) ? (E *= Y, M = _.slice(A, c - 1).match(X), M && A > 0 && (E *= Math.pow(u, M.length))) : (E *= J, A > 0 && (E *= Math.pow(u, c - A))), _.charAt(c) !== C.charAt(f) && (E *= $)), (E < p && h.charAt(c - 1) === P.charAt(f + 1) || P.charAt(f + 1) === P.charAt(f) && h.charAt(c - 1) !== P.charAt(f)) && (N = G(_, C, h, P, c + 1, f + 2, O), N * p > E && (E = N * p)), E > S && (S = E), c = h.indexOf(L, c + 1);
    return O[T] = S, S;
}
function D(_) {
    return _.toLowerCase().replace(X, " ");
}
function W(_, C, h) {
    return _ = h && h.length > 0 ? `${_ + " " + h.join(" ")}` : _, G(_, C, D(_), D(C), 0, 0, {});
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-dialog@1.1._779045218dc2799d336e7197abef9d38/node_modules/@radix-ui/react-dialog/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+primitive@1.1.3/node_modules/@radix-ui/primitive/dist/index.mjs [app-client] (ecmascript)
;
// src/primitive.tsx
var canUseDOM = !!(typeof window !== "undefined" && window.document && window.document.createElement);
function composeEventHandlers(originalEventHandler, ourEventHandler, { checkForDefaultPrevented = true } = {}) {
    return function handleEvent(event) {
        originalEventHandler?.(event);
        if (checkForDefaultPrevented === false || !event.defaultPrevented) {
            return ourEventHandler?.(event);
        }
    };
}
function getOwnerWindow(element) {
    if (!canUseDOM) {
        throw new Error("Cannot access window outside of the DOM");
    }
    return element?.ownerDocument?.defaultView ?? window;
}
function getOwnerDocument(element) {
    if (!canUseDOM) {
        throw new Error("Cannot access document outside of the DOM");
    }
    return element?.ownerDocument ?? document;
}
function getActiveElement(node, activeDescendant = false) {
    const { activeElement } = getOwnerDocument(node);
    if (!activeElement?.nodeName) {
        return null;
    }
    if (isFrame(activeElement) && activeElement.contentDocument) {
        return getActiveElement(activeElement.contentDocument.body, activeDescendant);
    }
    if (activeDescendant) {
        const id = activeElement.getAttribute("aria-activedescendant");
        if (id) {
            const element = getOwnerDocument(activeElement).getElementById(id);
            if (element) {
                return element;
            }
        }
    }
    return activeElement;
}
function isFrame(element) {
    return element.tagName === "IFRAME";
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-compose-ref_29f07d10044c0f91d4662ac1c244e8f8/node_modules/@radix-ui/react-compose-refs/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__3 = __TURBOPACK__imported__module__51268__;
;
function setRef(ref, value1) {
    if (typeof ref === "function") {
        return ref(value1);
    } else if (ref !== null && ref !== void 0) {
        ref.current = value1;
    }
}
function composeRefs(...refs) {
    return (node)=>{
        let hasCleanup = false;
        const cleanups = refs.map((ref)=>{
            const cleanup = setRef(ref, node);
            if (!hasCleanup && typeof cleanup == "function") {
                hasCleanup = true;
            }
            return cleanup;
        });
        if (hasCleanup) {
            return ()=>{
                for(let i = 0; i < cleanups.length; i++){
                    const cleanup = cleanups[i];
                    if (typeof cleanup == "function") {
                        cleanup();
                    } else {
                        setRef(refs[i], null);
                    }
                }
            };
        }
    };
}
function useComposedRefs(...refs) {
    return __TURBOPACK__imported__module__51268__3["useCallback"](composeRefs(...refs), refs);
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-context@1.1_9d20477d12b5887e0da6102ab9f6f0ba/node_modules/@radix-ui/react-context/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__4 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__8063__7 = __TURBOPACK__imported__module__8063__;
;
;
function createContext2(rootComponentName, defaultContext) {
    const Context = __TURBOPACK__imported__module__51268__4["createContext"](defaultContext);
    const Provider = (props)=>{
        const { children, ...context } = props;
        const value1 = __TURBOPACK__imported__module__51268__4["useMemo"](()=>context, Object.values(context));
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__7["jsx"])(Context.Provider, {
            value: value1,
            children
        });
    };
    Provider.displayName = rootComponentName + "Provider";
    function useContext2(consumerName) {
        const context = __TURBOPACK__imported__module__51268__4["useContext"](Context);
        if (context) return context;
        if (defaultContext !== void 0) return defaultContext;
        throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
    }
    return [
        Provider,
        useContext2
    ];
}
function createContextScope(scopeName, createContextScopeDeps = []) {
    let defaultContexts = [];
    function createContext3(rootComponentName, defaultContext) {
        const BaseContext = __TURBOPACK__imported__module__51268__4["createContext"](defaultContext);
        const index = defaultContexts.length;
        defaultContexts = [
            ...defaultContexts,
            defaultContext
        ];
        const Provider = (props)=>{
            const { scope, children, ...context } = props;
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const value1 = __TURBOPACK__imported__module__51268__4["useMemo"](()=>context, Object.values(context));
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__7["jsx"])(Context.Provider, {
                value: value1,
                children
            });
        };
        Provider.displayName = rootComponentName + "Provider";
        function useContext2(consumerName, scope) {
            const Context = scope?.[scopeName]?.[index] || BaseContext;
            const context = __TURBOPACK__imported__module__51268__4["useContext"](Context);
            if (context) return context;
            if (defaultContext !== void 0) return defaultContext;
            throw new Error(`\`${consumerName}\` must be used within \`${rootComponentName}\``);
        }
        return [
            Provider,
            useContext2
        ];
    }
    const createScope = ()=>{
        const scopeContexts = defaultContexts.map((defaultContext)=>{
            return __TURBOPACK__imported__module__51268__4["createContext"](defaultContext);
        });
        return function useScope(scope) {
            const contexts = scope?.[scopeName] || scopeContexts;
            return __TURBOPACK__imported__module__51268__4["useMemo"](()=>({
                    [`__scope${scopeName}`]: {
                        ...scope,
                        [scopeName]: contexts
                    }
                }), [
                scope,
                contexts
            ]);
        };
    };
    createScope.scopeName = scopeName;
    return [
        createContext3,
        composeContextScopes(createScope, ...createContextScopeDeps)
    ];
}
function composeContextScopes(...scopes) {
    const baseScope = scopes[0];
    if (scopes.length === 1) return baseScope;
    const createScope = ()=>{
        const scopeHooks = scopes.map((createScope2)=>({
                useScope: createScope2(),
                scopeName: createScope2.scopeName
            }));
        return function useComposedScopes(overrideScopes) {
            const nextScopes = scopeHooks.reduce((nextScopes2, { useScope, scopeName })=>{
                const scopeProps = useScope(overrideScopes);
                const currentScope = scopeProps[`__scope${scopeName}`];
                return {
                    ...nextScopes2,
                    ...currentScope
                };
            }, {});
            return __TURBOPACK__imported__module__51268__4["useMemo"](()=>({
                    [`__scope${baseScope.scopeName}`]: nextScopes
                }), [
                nextScopes
            ]);
        };
    };
    createScope.scopeName = baseScope.scopeName;
    return createScope;
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-id@1.1.1_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-id/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__5 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-use-layout-_708d085e5341e7e972968c18e6fd438e/node_modules/@radix-ui/react-use-layout-effect/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__6 = __TURBOPACK__imported__module__51268__;
;
var useLayoutEffect2 = globalThis?.document ? __TURBOPACK__imported__module__51268__6["useLayoutEffect"] : ()=>{};
;
;
;
var useReactId = __TURBOPACK__imported__module__51268__5[" useId ".trim().toString()] || (()=>void 0);
var count = 0;
function useId(deterministicId) {
    const [id, setId] = __TURBOPACK__imported__module__51268__5.useState(useReactId());
    useLayoutEffect2(()=>{
        if (!deterministicId) setId((reactId)=>reactId ?? String(count++));
    }, [
        deterministicId
    ]);
    return deterministicId || (id ? `radix-${id}` : "");
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-use-control_2c89a53ae2749e0bc3b2a0d94ee60a61/node_modules/@radix-ui/react-use-controllable-state/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__7 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-use-effect-_aa8e09ec8e4630e5d48977fe8486cb0a/node_modules/@radix-ui/react-use-effect-event/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__8 = __TURBOPACK__imported__module__51268__;
;
;
var useReactEffectEvent = __TURBOPACK__imported__module__51268__8[" useEffectEvent ".trim().toString()];
var useReactInsertionEffect = __TURBOPACK__imported__module__51268__8[" useInsertionEffect ".trim().toString()];
function useEffectEvent(callback) {
    if (typeof useReactEffectEvent === "function") {
        return useReactEffectEvent(callback);
    }
    const ref = __TURBOPACK__imported__module__51268__8.useRef(()=>{
        throw new Error("Cannot call an event handler while rendering.");
    });
    if (typeof useReactInsertionEffect === "function") {
        useReactInsertionEffect(()=>{
            ref.current = callback;
        });
    } else {
        useLayoutEffect2(()=>{
            ref.current = callback;
        });
    }
    return __TURBOPACK__imported__module__51268__8.useMemo(()=>(...args)=>ref.current?.(...args), []);
}
;
;
;
var useInsertionEffect = __TURBOPACK__imported__module__51268__7[" useInsertionEffect ".trim().toString()] || useLayoutEffect2;
function useControllableState({ prop, defaultProp, onChange = ()=>{}, caller }) {
    const [uncontrolledProp, setUncontrolledProp, onChangeRef] = useUncontrolledState({
        defaultProp,
        onChange
    });
    const isControlled = prop !== void 0;
    const value1 = isControlled ? prop : uncontrolledProp;
    if ("TURBOPACK compile-time truthy", 1) {
        const isControlledRef = __TURBOPACK__imported__module__51268__7.useRef(prop !== void 0);
        __TURBOPACK__imported__module__51268__7.useEffect(()=>{
            const wasControlled = isControlledRef.current;
            if (wasControlled !== isControlled) {
                const from = wasControlled ? "controlled" : "uncontrolled";
                const to = isControlled ? "controlled" : "uncontrolled";
                console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
            }
            isControlledRef.current = isControlled;
        }, [
            isControlled,
            caller
        ]);
    }
    const setValue = __TURBOPACK__imported__module__51268__7.useCallback((nextValue)=>{
        if (isControlled) {
            const value2 = isFunction(nextValue) ? nextValue(prop) : nextValue;
            if (value2 !== prop) {
                onChangeRef.current?.(value2);
            }
        } else {
            setUncontrolledProp(nextValue);
        }
    }, [
        isControlled,
        prop,
        setUncontrolledProp,
        onChangeRef
    ]);
    return [
        value1,
        setValue
    ];
}
function useUncontrolledState({ defaultProp, onChange }) {
    const [value1, setValue] = __TURBOPACK__imported__module__51268__7.useState(defaultProp);
    const prevValueRef = __TURBOPACK__imported__module__51268__7.useRef(value1);
    const onChangeRef = __TURBOPACK__imported__module__51268__7.useRef(onChange);
    useInsertionEffect(()=>{
        onChangeRef.current = onChange;
    }, [
        onChange
    ]);
    __TURBOPACK__imported__module__51268__7.useEffect(()=>{
        if (prevValueRef.current !== value1) {
            onChangeRef.current?.(value1);
            prevValueRef.current = value1;
        }
    }, [
        value1,
        prevValueRef
    ]);
    return [
        value1,
        setValue,
        onChangeRef
    ];
}
function isFunction(value1) {
    return typeof value1 === "function";
}
;
;
var SYNC_STATE = Symbol("RADIX:SYNC_STATE");
function useControllableStateReducer(reducer, userArgs, initialArg, init) {
    const { prop: controlledState, defaultProp, onChange: onChangeProp, caller } = userArgs;
    const isControlled = controlledState !== void 0;
    const onChange = useEffectEvent(onChangeProp);
    if ("TURBOPACK compile-time truthy", 1) {
        const isControlledRef = __TURBOPACK__imported__module__51268__7.useRef(controlledState !== void 0);
        __TURBOPACK__imported__module__51268__7.useEffect(()=>{
            const wasControlled = isControlledRef.current;
            if (wasControlled !== isControlled) {
                const from = wasControlled ? "controlled" : "uncontrolled";
                const to = isControlled ? "controlled" : "uncontrolled";
                console.warn(`${caller} is changing from ${from} to ${to}. Components should not switch from controlled to uncontrolled (or vice versa). Decide between using a controlled or uncontrolled value for the lifetime of the component.`);
            }
            isControlledRef.current = isControlled;
        }, [
            isControlled,
            caller
        ]);
    }
    const args = [
        {
            ...initialArg,
            state: defaultProp
        }
    ];
    if (init) {
        args.push(init);
    }
    const [internalState, dispatch] = __TURBOPACK__imported__module__51268__7.useReducer((state2, action)=>{
        if (action.type === SYNC_STATE) {
            return {
                ...state2,
                state: action.state
            };
        }
        const next = reducer(state2, action);
        if (isControlled && !Object.is(next.state, state2.state)) {
            onChange(next.state);
        }
        return next;
    }, ...args);
    const uncontrolledState = internalState.state;
    const prevValueRef = __TURBOPACK__imported__module__51268__7.useRef(uncontrolledState);
    __TURBOPACK__imported__module__51268__7.useEffect(()=>{
        if (prevValueRef.current !== uncontrolledState) {
            prevValueRef.current = uncontrolledState;
            if (!isControlled) {
                onChange(uncontrolledState);
            }
        }
    }, [
        onChange,
        uncontrolledState,
        prevValueRef,
        isControlled
    ]);
    const state = __TURBOPACK__imported__module__51268__7.useMemo(()=>{
        const isControlled2 = controlledState !== void 0;
        if (isControlled2) {
            return {
                ...internalState,
                state: controlledState
            };
        }
        return internalState;
    }, [
        internalState,
        controlledState
    ]);
    __TURBOPACK__imported__module__51268__7.useEffect(()=>{
        if (isControlled && !Object.is(controlledState, internalState.state)) {
            dispatch({
                type: SYNC_STATE,
                state: controlledState
            });
        }
    }, [
        controlledState,
        internalState.state,
        isControlled
    ]);
    return [
        state,
        dispatch
    ];
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-dismissable_3d3960154a4c07d09bb90cb341135fc5/node_modules/@radix-ui/react-dismissable-layer/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__9 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-primitive@2_1181ea5061ec9212248424669240e4ec/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__10 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__ = __turbopack_context__.i(98057);
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.3_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__11 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__8063__8 = __TURBOPACK__imported__module__8063__;
;
;
;
// @__NO_SIDE_EFFECTS__
function createSlot(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone(ownerName);
    const Slot2 = __TURBOPACK__imported__module__51268__11["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        const childrenArray = __TURBOPACK__imported__module__51268__11["Children"].toArray(children);
        const slottable = childrenArray.find(isSlottable);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__51268__11["Children"].count(newElement) > 1) return __TURBOPACK__imported__module__51268__11["Children"].only(null);
                    return __TURBOPACK__imported__module__51268__11["isValidElement"](newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__8["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__51268__11["isValidElement"](newElement) ? __TURBOPACK__imported__module__51268__11["cloneElement"](newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__8["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot = /* @__PURE__ */ createSlot("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__51268__11["forwardRef"]((props, forwardedRef)=>{
        const { children, ...slotProps } = props;
        if (__TURBOPACK__imported__module__51268__11["isValidElement"](children)) {
            const childrenRef = getElementRef(children);
            const props2 = mergeProps(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__51268__11["Fragment"]) {
                props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__51268__11["cloneElement"](children, props2);
        }
        return __TURBOPACK__imported__module__51268__11["Children"].count(children) > 1 ? __TURBOPACK__imported__module__51268__11["Children"].only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__8["jsx"])(__TURBOPACK__imported__module__8063__8["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER;
    return Slottable2;
}
var Slottable = /* @__PURE__ */ createSlottable("Slottable");
function isSlottable(child) {
    return __TURBOPACK__imported__module__51268__11["isValidElement"](child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER;
}
function mergeProps(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
var __TURBOPACK__imported__module__8063__9 = __TURBOPACK__imported__module__8063__;
;
;
;
;
var NODES = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive = NODES.reduce((primitive, node)=>{
    const Slot = createSlot(`Primitive.${node}`);
    const Node1 = __TURBOPACK__imported__module__51268__10["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__9["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node1.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node1
    };
}, {});
function dispatchDiscreteCustomEvent(target, event) {
    if (target) __TURBOPACK__imported__module__98057__["flushSync"](()=>target.dispatchEvent(event));
}
var Root = Primitive;
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-use-callbac_e56a1071fabc108dc60d6f8e586ff493/node_modules/@radix-ui/react-use-callback-ref/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__12 = __TURBOPACK__imported__module__51268__;
;
function useCallbackRef(callback) {
    const callbackRef = __TURBOPACK__imported__module__51268__12["useRef"](callback);
    __TURBOPACK__imported__module__51268__12["useEffect"](()=>{
        callbackRef.current = callback;
    });
    return __TURBOPACK__imported__module__51268__12["useMemo"](()=>(...args)=>callbackRef.current?.(...args), []);
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-use-escape-_8ace045c7dc8a9f26af4a8dddd419f24/node_modules/@radix-ui/react-use-escape-keydown/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__13 = __TURBOPACK__imported__module__51268__;
;
;
function useEscapeKeydown(onEscapeKeyDownProp, ownerDocument = globalThis?.document) {
    const onEscapeKeyDown = useCallbackRef(onEscapeKeyDownProp);
    __TURBOPACK__imported__module__51268__13["useEffect"](()=>{
        const handleKeyDown = (event)=>{
            if (event.key === "Escape") {
                onEscapeKeyDown(event);
            }
        };
        ownerDocument.addEventListener("keydown", handleKeyDown, {
            capture: true
        });
        return ()=>ownerDocument.removeEventListener("keydown", handleKeyDown, {
                capture: true
            });
    }, [
        onEscapeKeyDown,
        ownerDocument
    ]);
}
;
var __TURBOPACK__imported__module__8063__10 = __TURBOPACK__imported__module__8063__;
"use client";
;
;
;
;
;
;
;
var DISMISSABLE_LAYER_NAME = "DismissableLayer";
var CONTEXT_UPDATE = "dismissableLayer.update";
var POINTER_DOWN_OUTSIDE = "dismissableLayer.pointerDownOutside";
var FOCUS_OUTSIDE = "dismissableLayer.focusOutside";
var originalBodyPointerEvents;
var DismissableLayerContext = __TURBOPACK__imported__module__51268__9["createContext"]({
    layers: /* @__PURE__ */ new Set(),
    layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
    branches: /* @__PURE__ */ new Set()
});
var DismissableLayer = __TURBOPACK__imported__module__51268__9["forwardRef"]((props, forwardedRef)=>{
    const { disableOutsidePointerEvents = false, onEscapeKeyDown, onPointerDownOutside, onFocusOutside, onInteractOutside, onDismiss, ...layerProps } = props;
    const context = __TURBOPACK__imported__module__51268__9["useContext"](DismissableLayerContext);
    const [node, setNode] = __TURBOPACK__imported__module__51268__9["useState"](null);
    const ownerDocument = node?.ownerDocument ?? globalThis?.document;
    const [, force] = __TURBOPACK__imported__module__51268__9["useState"]({});
    const composedRefs = useComposedRefs(forwardedRef, (node2)=>setNode(node2));
    const layers = Array.from(context.layers);
    const [highestLayerWithOutsidePointerEventsDisabled] = [
        ...context.layersWithOutsidePointerEventsDisabled
    ].slice(-1);
    const highestLayerWithOutsidePointerEventsDisabledIndex = layers.indexOf(highestLayerWithOutsidePointerEventsDisabled);
    const index = node ? layers.indexOf(node) : -1;
    const isBodyPointerEventsDisabled = context.layersWithOutsidePointerEventsDisabled.size > 0;
    const isPointerEventsEnabled = index >= highestLayerWithOutsidePointerEventsDisabledIndex;
    const pointerDownOutside = usePointerDownOutside((event)=>{
        const target = event.target;
        const isPointerDownOnBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (!isPointerEventsEnabled || isPointerDownOnBranch) return;
        onPointerDownOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    const focusOutside = useFocusOutside((event)=>{
        const target = event.target;
        const isFocusInBranch = [
            ...context.branches
        ].some((branch)=>branch.contains(target));
        if (isFocusInBranch) return;
        onFocusOutside?.(event);
        onInteractOutside?.(event);
        if (!event.defaultPrevented) onDismiss?.();
    }, ownerDocument);
    useEscapeKeydown((event)=>{
        const isHighestLayer = index === context.layers.size - 1;
        if (!isHighestLayer) return;
        onEscapeKeyDown?.(event);
        if (!event.defaultPrevented && onDismiss) {
            event.preventDefault();
            onDismiss();
        }
    }, ownerDocument);
    __TURBOPACK__imported__module__51268__9["useEffect"](()=>{
        if (!node) return;
        if (disableOutsidePointerEvents) {
            if (context.layersWithOutsidePointerEventsDisabled.size === 0) {
                originalBodyPointerEvents = ownerDocument.body.style.pointerEvents;
                ownerDocument.body.style.pointerEvents = "none";
            }
            context.layersWithOutsidePointerEventsDisabled.add(node);
        }
        context.layers.add(node);
        dispatchUpdate();
        return ()=>{
            if (disableOutsidePointerEvents && context.layersWithOutsidePointerEventsDisabled.size === 1) {
                ownerDocument.body.style.pointerEvents = originalBodyPointerEvents;
            }
        };
    }, [
        node,
        ownerDocument,
        disableOutsidePointerEvents,
        context
    ]);
    __TURBOPACK__imported__module__51268__9["useEffect"](()=>{
        return ()=>{
            if (!node) return;
            context.layers.delete(node);
            context.layersWithOutsidePointerEventsDisabled.delete(node);
            dispatchUpdate();
        };
    }, [
        node,
        context
    ]);
    __TURBOPACK__imported__module__51268__9["useEffect"](()=>{
        const handleUpdate = ()=>force({});
        document.addEventListener(CONTEXT_UPDATE, handleUpdate);
        return ()=>document.removeEventListener(CONTEXT_UPDATE, handleUpdate);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__10["jsx"])(Primitive.div, {
        ...layerProps,
        ref: composedRefs,
        style: {
            pointerEvents: isBodyPointerEventsDisabled ? isPointerEventsEnabled ? "auto" : "none" : void 0,
            ...props.style
        },
        onFocusCapture: composeEventHandlers(props.onFocusCapture, focusOutside.onFocusCapture),
        onBlurCapture: composeEventHandlers(props.onBlurCapture, focusOutside.onBlurCapture),
        onPointerDownCapture: composeEventHandlers(props.onPointerDownCapture, pointerDownOutside.onPointerDownCapture)
    });
});
DismissableLayer.displayName = DISMISSABLE_LAYER_NAME;
var BRANCH_NAME = "DismissableLayerBranch";
var DismissableLayerBranch = __TURBOPACK__imported__module__51268__9["forwardRef"]((props, forwardedRef)=>{
    const context = __TURBOPACK__imported__module__51268__9["useContext"](DismissableLayerContext);
    const ref = __TURBOPACK__imported__module__51268__9["useRef"](null);
    const composedRefs = useComposedRefs(forwardedRef, ref);
    __TURBOPACK__imported__module__51268__9["useEffect"](()=>{
        const node = ref.current;
        if (node) {
            context.branches.add(node);
            return ()=>{
                context.branches.delete(node);
            };
        }
    }, [
        context.branches
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__10["jsx"])(Primitive.div, {
        ...props,
        ref: composedRefs
    });
});
DismissableLayerBranch.displayName = BRANCH_NAME;
function usePointerDownOutside(onPointerDownOutside, ownerDocument = globalThis?.document) {
    const handlePointerDownOutside = useCallbackRef(onPointerDownOutside);
    const isPointerInsideReactTreeRef = __TURBOPACK__imported__module__51268__9["useRef"](false);
    const handleClickRef = __TURBOPACK__imported__module__51268__9["useRef"](()=>{});
    __TURBOPACK__imported__module__51268__9["useEffect"](()=>{
        const handlePointerDown = (event)=>{
            if (event.target && !isPointerInsideReactTreeRef.current) {
                let handleAndDispatchPointerDownOutsideEvent2 = function() {
                    handleAndDispatchCustomEvent(POINTER_DOWN_OUTSIDE, handlePointerDownOutside, eventDetail, {
                        discrete: true
                    });
                };
                var handleAndDispatchPointerDownOutsideEvent = handleAndDispatchPointerDownOutsideEvent2;
                const eventDetail = {
                    originalEvent: event
                };
                if (event.pointerType === "touch") {
                    ownerDocument.removeEventListener("click", handleClickRef.current);
                    handleClickRef.current = handleAndDispatchPointerDownOutsideEvent2;
                    ownerDocument.addEventListener("click", handleClickRef.current, {
                        once: true
                    });
                } else {
                    handleAndDispatchPointerDownOutsideEvent2();
                }
            } else {
                ownerDocument.removeEventListener("click", handleClickRef.current);
            }
            isPointerInsideReactTreeRef.current = false;
        };
        const timerId = window.setTimeout(()=>{
            ownerDocument.addEventListener("pointerdown", handlePointerDown);
        }, 0);
        return ()=>{
            window.clearTimeout(timerId);
            ownerDocument.removeEventListener("pointerdown", handlePointerDown);
            ownerDocument.removeEventListener("click", handleClickRef.current);
        };
    }, [
        ownerDocument,
        handlePointerDownOutside
    ]);
    return {
        // ensures we check React component tree (not just DOM tree)
        onPointerDownCapture: ()=>isPointerInsideReactTreeRef.current = true
    };
}
function useFocusOutside(onFocusOutside, ownerDocument = globalThis?.document) {
    const handleFocusOutside = useCallbackRef(onFocusOutside);
    const isFocusInsideReactTreeRef = __TURBOPACK__imported__module__51268__9["useRef"](false);
    __TURBOPACK__imported__module__51268__9["useEffect"](()=>{
        const handleFocus = (event)=>{
            if (event.target && !isFocusInsideReactTreeRef.current) {
                const eventDetail = {
                    originalEvent: event
                };
                handleAndDispatchCustomEvent(FOCUS_OUTSIDE, handleFocusOutside, eventDetail, {
                    discrete: false
                });
            }
        };
        ownerDocument.addEventListener("focusin", handleFocus);
        return ()=>ownerDocument.removeEventListener("focusin", handleFocus);
    }, [
        ownerDocument,
        handleFocusOutside
    ]);
    return {
        onFocusCapture: ()=>isFocusInsideReactTreeRef.current = true,
        onBlurCapture: ()=>isFocusInsideReactTreeRef.current = false
    };
}
function dispatchUpdate() {
    const event = new CustomEvent(CONTEXT_UPDATE);
    document.dispatchEvent(event);
}
function handleAndDispatchCustomEvent(name, handler, detail, { discrete }) {
    const target = detail.originalEvent.target;
    const event = new CustomEvent(name, {
        bubbles: false,
        cancelable: true,
        detail
    });
    if (handler) target.addEventListener(name, handler, {
        once: true
    });
    if (discrete) {
        dispatchDiscreteCustomEvent(target, event);
    } else {
        target.dispatchEvent(event);
    }
}
var Root1 = DismissableLayer;
var Branch = DismissableLayerBranch;
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-focus-scope_f62f3af4ca2ba305a7aecf04c8534604/node_modules/@radix-ui/react-focus-scope/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__14 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__8063__11 = __TURBOPACK__imported__module__8063__;
"use client";
;
;
;
;
;
var AUTOFOCUS_ON_MOUNT = "focusScope.autoFocusOnMount";
var AUTOFOCUS_ON_UNMOUNT = "focusScope.autoFocusOnUnmount";
var EVENT_OPTIONS = {
    bubbles: false,
    cancelable: true
};
var FOCUS_SCOPE_NAME = "FocusScope";
var FocusScope = __TURBOPACK__imported__module__51268__14["forwardRef"]((props, forwardedRef)=>{
    const { loop = false, trapped = false, onMountAutoFocus: onMountAutoFocusProp, onUnmountAutoFocus: onUnmountAutoFocusProp, ...scopeProps } = props;
    const [container, setContainer] = __TURBOPACK__imported__module__51268__14["useState"](null);
    const onMountAutoFocus = useCallbackRef(onMountAutoFocusProp);
    const onUnmountAutoFocus = useCallbackRef(onUnmountAutoFocusProp);
    const lastFocusedElementRef = __TURBOPACK__imported__module__51268__14["useRef"](null);
    const composedRefs = useComposedRefs(forwardedRef, (node)=>setContainer(node));
    const focusScope = __TURBOPACK__imported__module__51268__14["useRef"]({
        paused: false,
        pause () {
            this.paused = true;
        },
        resume () {
            this.paused = false;
        }
    }).current;
    __TURBOPACK__imported__module__51268__14["useEffect"](()=>{
        if (trapped) {
            let handleFocusIn2 = function(event) {
                if (focusScope.paused || !container) return;
                const target = event.target;
                if (container.contains(target)) {
                    lastFocusedElementRef.current = target;
                } else {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleFocusOut2 = function(event) {
                if (focusScope.paused || !container) return;
                const relatedTarget = event.relatedTarget;
                if (relatedTarget === null) return;
                if (!container.contains(relatedTarget)) {
                    focus(lastFocusedElementRef.current, {
                        select: true
                    });
                }
            }, handleMutations2 = function(mutations) {
                const focusedElement = document.activeElement;
                if (focusedElement !== document.body) return;
                for (const mutation of mutations){
                    if (mutation.removedNodes.length > 0) focus(container);
                }
            };
            var handleFocusIn = handleFocusIn2, handleFocusOut = handleFocusOut2, handleMutations = handleMutations2;
            document.addEventListener("focusin", handleFocusIn2);
            document.addEventListener("focusout", handleFocusOut2);
            const mutationObserver = new MutationObserver(handleMutations2);
            if (container) mutationObserver.observe(container, {
                childList: true,
                subtree: true
            });
            return ()=>{
                document.removeEventListener("focusin", handleFocusIn2);
                document.removeEventListener("focusout", handleFocusOut2);
                mutationObserver.disconnect();
            };
        }
    }, [
        trapped,
        container,
        focusScope.paused
    ]);
    __TURBOPACK__imported__module__51268__14["useEffect"](()=>{
        if (container) {
            focusScopesStack.add(focusScope);
            const previouslyFocusedElement = document.activeElement;
            const hasFocusedCandidate = container.contains(previouslyFocusedElement);
            if (!hasFocusedCandidate) {
                const mountEvent = new CustomEvent(AUTOFOCUS_ON_MOUNT, EVENT_OPTIONS);
                container.addEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                container.dispatchEvent(mountEvent);
                if (!mountEvent.defaultPrevented) {
                    focusFirst(removeLinks(getTabbableCandidates(container)), {
                        select: true
                    });
                    if (document.activeElement === previouslyFocusedElement) {
                        focus(container);
                    }
                }
            }
            return ()=>{
                container.removeEventListener(AUTOFOCUS_ON_MOUNT, onMountAutoFocus);
                setTimeout(()=>{
                    const unmountEvent = new CustomEvent(AUTOFOCUS_ON_UNMOUNT, EVENT_OPTIONS);
                    container.addEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    container.dispatchEvent(unmountEvent);
                    if (!unmountEvent.defaultPrevented) {
                        focus(previouslyFocusedElement ?? document.body, {
                            select: true
                        });
                    }
                    container.removeEventListener(AUTOFOCUS_ON_UNMOUNT, onUnmountAutoFocus);
                    focusScopesStack.remove(focusScope);
                }, 0);
            };
        }
    }, [
        container,
        onMountAutoFocus,
        onUnmountAutoFocus,
        focusScope
    ]);
    const handleKeyDown = __TURBOPACK__imported__module__51268__14["useCallback"]((event)=>{
        if (!loop && !trapped) return;
        if (focusScope.paused) return;
        const isTabKey = event.key === "Tab" && !event.altKey && !event.ctrlKey && !event.metaKey;
        const focusedElement = document.activeElement;
        if (isTabKey && focusedElement) {
            const container2 = event.currentTarget;
            const [first, last] = getTabbableEdges(container2);
            const hasTabbableElementsInside = first && last;
            if (!hasTabbableElementsInside) {
                if (focusedElement === container2) event.preventDefault();
            } else {
                if (!event.shiftKey && focusedElement === last) {
                    event.preventDefault();
                    if (loop) focus(first, {
                        select: true
                    });
                } else if (event.shiftKey && focusedElement === first) {
                    event.preventDefault();
                    if (loop) focus(last, {
                        select: true
                    });
                }
            }
        }
    }, [
        loop,
        trapped,
        focusScope.paused
    ]);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__11["jsx"])(Primitive.div, {
        tabIndex: -1,
        ...scopeProps,
        ref: composedRefs,
        onKeyDown: handleKeyDown
    });
});
FocusScope.displayName = FOCUS_SCOPE_NAME;
function focusFirst(candidates, { select = false } = {}) {
    const previouslyFocusedElement = document.activeElement;
    for (const candidate of candidates){
        focus(candidate, {
            select
        });
        if (document.activeElement !== previouslyFocusedElement) return;
    }
}
function getTabbableEdges(container) {
    const candidates = getTabbableCandidates(container);
    const first = findVisible(candidates, container);
    const last = findVisible(candidates.reverse(), container);
    return [
        first,
        last
    ];
}
function getTabbableCandidates(container) {
    const nodes = [];
    const walker = document.createTreeWalker(container, NodeFilter.SHOW_ELEMENT, {
        acceptNode: (node)=>{
            const isHiddenInput = node.tagName === "INPUT" && node.type === "hidden";
            if (node.disabled || node.hidden || isHiddenInput) return NodeFilter.FILTER_SKIP;
            return node.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
        }
    });
    while(walker.nextNode())nodes.push(walker.currentNode);
    return nodes;
}
function findVisible(elements, container) {
    for (const element of elements){
        if (!isHidden(element, {
            upTo: container
        })) return element;
    }
}
function isHidden(node, { upTo }) {
    if (getComputedStyle(node).visibility === "hidden") return true;
    while(node){
        if (upTo !== void 0 && node === upTo) return false;
        if (getComputedStyle(node).display === "none") return true;
        node = node.parentElement;
    }
    return false;
}
function isSelectableInput(element) {
    return element instanceof HTMLInputElement && "select" in element;
}
function focus(element, { select = false } = {}) {
    if (element && element.focus) {
        const previouslyFocusedElement = document.activeElement;
        element.focus({
            preventScroll: true
        });
        if (element !== previouslyFocusedElement && isSelectableInput(element) && select) element.select();
    }
}
var focusScopesStack = createFocusScopesStack();
function createFocusScopesStack() {
    let stack = [];
    return {
        add (focusScope) {
            const activeFocusScope = stack[0];
            if (focusScope !== activeFocusScope) {
                activeFocusScope?.pause();
            }
            stack = arrayRemove(stack, focusScope);
            stack.unshift(focusScope);
        },
        remove (focusScope) {
            stack = arrayRemove(stack, focusScope);
            stack[0]?.resume();
        }
    };
}
function arrayRemove(array, item) {
    const updatedArray = [
        ...array
    ];
    const index = updatedArray.indexOf(item);
    if (index !== -1) {
        updatedArray.splice(index, 1);
    }
    return updatedArray;
}
function removeLinks(items) {
    return items.filter((item)=>item.tagName !== "A");
}
var Root2 = FocusScope;
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-portal@1.1._7668895bec2444446faa4e0f4eb5244b/node_modules/@radix-ui/react-portal/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__15 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__1 = __TURBOPACK__imported__module__98057__;
var __TURBOPACK__imported__module__8063__12 = __TURBOPACK__imported__module__8063__;
"use client";
;
;
;
;
;
var PORTAL_NAME = "Portal";
var Portal = __TURBOPACK__imported__module__51268__15["forwardRef"]((props, forwardedRef)=>{
    const { container: containerProp, ...portalProps } = props;
    const [mounted, setMounted] = __TURBOPACK__imported__module__51268__15["useState"](false);
    useLayoutEffect2(()=>setMounted(true), []);
    const container = containerProp || mounted && globalThis?.document?.body;
    return container ? __TURBOPACK__imported__module__98057__1["default"].createPortal(/* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__12["jsx"])(Primitive.div, {
        ...portalProps,
        ref: forwardedRef
    }), container) : null;
});
Portal.displayName = PORTAL_NAME;
var Root3 = Portal;
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-presence@1._c01c26c80b5ab5e3ecefbda6eca51ad1/node_modules/@radix-ui/react-presence/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__16 = __TURBOPACK__imported__module__51268__;
"use client";
;
;
;
;
function useStateMachine(initialState, machine) {
    return __TURBOPACK__imported__module__51268__16["useReducer"]((state, event)=>{
        const nextState = machine[state][event];
        return nextState ?? state;
    }, initialState);
}
// src/presence.tsx
var Presence = (props)=>{
    const { present, children } = props;
    const presence = usePresence(present);
    const child = typeof children === "function" ? children({
        present: presence.isPresent
    }) : __TURBOPACK__imported__module__51268__16["Children"].only(children);
    const ref = useComposedRefs(presence.ref, getElementRef1(child));
    const forceMount = typeof children === "function";
    return forceMount || presence.isPresent ? __TURBOPACK__imported__module__51268__16["cloneElement"](child, {
        ref
    }) : null;
};
Presence.displayName = "Presence";
function usePresence(present) {
    const [node, setNode] = __TURBOPACK__imported__module__51268__16["useState"]();
    const stylesRef = __TURBOPACK__imported__module__51268__16["useRef"](null);
    const prevPresentRef = __TURBOPACK__imported__module__51268__16["useRef"](present);
    const prevAnimationNameRef = __TURBOPACK__imported__module__51268__16["useRef"]("none");
    const initialState = present ? "mounted" : "unmounted";
    const [state, send] = useStateMachine(initialState, {
        mounted: {
            UNMOUNT: "unmounted",
            ANIMATION_OUT: "unmountSuspended"
        },
        unmountSuspended: {
            MOUNT: "mounted",
            ANIMATION_END: "unmounted"
        },
        unmounted: {
            MOUNT: "mounted"
        }
    });
    __TURBOPACK__imported__module__51268__16["useEffect"](()=>{
        const currentAnimationName = getAnimationName(stylesRef.current);
        prevAnimationNameRef.current = state === "mounted" ? currentAnimationName : "none";
    }, [
        state
    ]);
    useLayoutEffect2(()=>{
        const styles = stylesRef.current;
        const wasPresent = prevPresentRef.current;
        const hasPresentChanged = wasPresent !== present;
        if (hasPresentChanged) {
            const prevAnimationName = prevAnimationNameRef.current;
            const currentAnimationName = getAnimationName(styles);
            if (present) {
                send("MOUNT");
            } else if (currentAnimationName === "none" || styles?.display === "none") {
                send("UNMOUNT");
            } else {
                const isAnimating = prevAnimationName !== currentAnimationName;
                if (wasPresent && isAnimating) {
                    send("ANIMATION_OUT");
                } else {
                    send("UNMOUNT");
                }
            }
            prevPresentRef.current = present;
        }
    }, [
        present,
        send
    ]);
    useLayoutEffect2(()=>{
        if (node) {
            let timeoutId;
            const ownerWindow = node.ownerDocument.defaultView ?? window;
            const handleAnimationEnd = (event)=>{
                const currentAnimationName = getAnimationName(stylesRef.current);
                const isCurrentAnimation = currentAnimationName.includes(CSS.escape(event.animationName));
                if (event.target === node && isCurrentAnimation) {
                    send("ANIMATION_END");
                    if (!prevPresentRef.current) {
                        const currentFillMode = node.style.animationFillMode;
                        node.style.animationFillMode = "forwards";
                        timeoutId = ownerWindow.setTimeout(()=>{
                            if (node.style.animationFillMode === "forwards") {
                                node.style.animationFillMode = currentFillMode;
                            }
                        });
                    }
                }
            };
            const handleAnimationStart = (event)=>{
                if (event.target === node) {
                    prevAnimationNameRef.current = getAnimationName(stylesRef.current);
                }
            };
            node.addEventListener("animationstart", handleAnimationStart);
            node.addEventListener("animationcancel", handleAnimationEnd);
            node.addEventListener("animationend", handleAnimationEnd);
            return ()=>{
                ownerWindow.clearTimeout(timeoutId);
                node.removeEventListener("animationstart", handleAnimationStart);
                node.removeEventListener("animationcancel", handleAnimationEnd);
                node.removeEventListener("animationend", handleAnimationEnd);
            };
        } else {
            send("ANIMATION_END");
        }
    }, [
        node,
        send
    ]);
    return {
        isPresent: [
            "mounted",
            "unmountSuspended"
        ].includes(state),
        ref: __TURBOPACK__imported__module__51268__16["useCallback"]((node2)=>{
            stylesRef.current = node2 ? getComputedStyle(node2) : null;
            setNode(node2);
        }, [])
    };
}
function getAnimationName(styles) {
    return styles?.animationName || "none";
}
function getElementRef1(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
var Root4 = Presence;
;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-focus-guard_06de8a97fcda1ffdfc846fc5bee008b8/node_modules/@radix-ui/react-focus-guards/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__17 = __TURBOPACK__imported__module__51268__;
"use client";
;
var count1 = 0;
function FocusGuards(props) {
    useFocusGuards();
    return props.children;
}
function useFocusGuards() {
    __TURBOPACK__imported__module__51268__17["useEffect"](()=>{
        const edgeGuards = document.querySelectorAll("[data-radix-focus-guard]");
        document.body.insertAdjacentElement("afterbegin", edgeGuards[0] ?? createFocusGuard());
        document.body.insertAdjacentElement("beforeend", edgeGuards[1] ?? createFocusGuard());
        count1++;
        return ()=>{
            if (count1 === 1) {
                document.querySelectorAll("[data-radix-focus-guard]").forEach((node)=>node.remove());
            }
            count1--;
        };
    }, []);
}
function createFocusGuard() {
    const element = document.createElement("span");
    element.setAttribute("data-radix-focus-guard", "");
    element.tabIndex = 0;
    element.style.outline = "none";
    element.style.opacity = "0";
    element.style.position = "fixed";
    element.style.pointerEvents = "none";
    return element;
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript) <export default as RemoveScroll>
;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/Combination.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/tslib@2.8.1/node_modules/tslib/tslib.es6.mjs [app-client] (ecmascript)
;
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value1) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value1 = useValue ? initializers[i].call(thisArg, value1) : initializers[i].call(thisArg);
    }
    return useValue ? value1 : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value1) {
        return value1 instanceof P ? value1 : new P(function(resolve) {
            resolve(value1);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value1) {
            try {
                step(generator.next(value1));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value1) {
            try {
                step(generator["throw"](value1));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value1) {
        resume("next", value1);
    }
    function reject(value1) {
        resume("throw", value1);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value1, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value1) : f ? f.value = value1 : state.set(receiver, value1), value1;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value1, async) {
    if (value1 !== null && value1 !== void 0) {
        if (typeof value1 !== "object" && typeof value1 !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value1[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value1[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value1,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value1;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
var __TURBOPACK__imported__module__51268__18 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/UI.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__19 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll-bar@2.3_25ad6fb9fe75be4391ed3c9752b30d68/node_modules/react-remove-scroll-bar/dist/es2015/constants.js [app-client] (ecmascript)
;
var zeroRightClassName = 'right-scroll-bar-position';
var fullWidthClassName = 'width-before-scroll-bar';
var noScrollbarsClassName = 'with-scroll-bars-hidden';
var removedBarSizeVariable = '--removed-body-scroll-bar-size';
// MERGED MODULE: [project]/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useMergeRef.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__20 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/assignRef.js [app-client] (ecmascript)
;
function assignRef(ref, value1) {
    if (typeof ref === 'function') {
        ref(value1);
    } else if (ref) {
        ref.current = value1;
    }
    return ref;
}
// MERGED MODULE: [project]/node_modules/.pnpm/use-callback-ref@1.3.3_@types+react@19.2.14_react@19.2.4/node_modules/use-callback-ref/dist/es2015/useRef.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__21 = __TURBOPACK__imported__module__51268__;
;
function useCallbackRef1(initialValue, callback) {
    var ref = (0, __TURBOPACK__imported__module__51268__21["useState"])(function() {
        return {
            // value
            value: initialValue,
            // last callback
            callback: callback,
            // "memoized" public interface
            facade: {
                get current () {
                    return ref.value;
                },
                set current (value){
                    var last = ref.value;
                    if (last !== value) {
                        ref.value = value;
                        ref.callback(value, last);
                    }
                }
            }
        };
    })[0];
    // update callback
    ref.callback = callback;
    return ref.facade;
}
;
;
;
var useIsomorphicLayoutEffect = typeof window !== 'undefined' ? __TURBOPACK__imported__module__51268__20["useLayoutEffect"] : __TURBOPACK__imported__module__51268__20["useEffect"];
var currentValues = new WeakMap();
function useMergeRefs(refs, defaultValue) {
    var callbackRef = useCallbackRef1(defaultValue || null, function(newValue) {
        return refs.forEach(function(ref) {
            return assignRef(ref, newValue);
        });
    });
    // handle refs changes - added or removed
    useIsomorphicLayoutEffect(function() {
        var oldValue = currentValues.get(callbackRef);
        if (oldValue) {
            var prevRefs_1 = new Set(oldValue);
            var nextRefs_1 = new Set(refs);
            var current_1 = callbackRef.current;
            prevRefs_1.forEach(function(ref) {
                if (!nextRefs_1.has(ref)) {
                    assignRef(ref, null);
                }
            });
            nextRefs_1.forEach(function(ref) {
                if (!prevRefs_1.has(ref)) {
                    assignRef(ref, current_1);
                }
            });
        }
        currentValues.set(callbackRef, refs);
    }, [
        refs
    ]);
    return callbackRef;
}
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/medium.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/medium.js [app-client] (ecmascript)
;
;
function ItoI(a) {
    return a;
}
function innerCreateMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    var buffer = [];
    var assigned = false;
    var medium = {
        read: function() {
            if (assigned) {
                throw new Error('Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.');
            }
            if (buffer.length) {
                return buffer[buffer.length - 1];
            }
            return defaults;
        },
        useMedium: function(data) {
            var item = middleware(data, assigned);
            buffer.push(item);
            return function() {
                buffer = buffer.filter(function(x) {
                    return x !== item;
                });
            };
        },
        assignSyncMedium: function(cb) {
            assigned = true;
            while(buffer.length){
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
            }
            buffer = {
                push: function(x) {
                    return cb(x);
                },
                filter: function() {
                    return buffer;
                }
            };
        },
        assignMedium: function(cb) {
            assigned = true;
            var pendingQueue = [];
            if (buffer.length) {
                var cbs = buffer;
                buffer = [];
                cbs.forEach(cb);
                pendingQueue = buffer;
            }
            var executeQueue = function() {
                var cbs = pendingQueue;
                pendingQueue = [];
                cbs.forEach(cb);
            };
            var cycle = function() {
                return Promise.resolve().then(executeQueue);
            };
            cycle();
            buffer = {
                push: function(x) {
                    pendingQueue.push(x);
                    cycle();
                },
                filter: function(filter) {
                    pendingQueue = pendingQueue.filter(filter);
                    return buffer;
                }
            };
        }
    };
    return medium;
}
function createMedium(defaults, middleware) {
    if (middleware === void 0) {
        middleware = ItoI;
    }
    return innerCreateMedium(defaults, middleware);
}
function createSidecarMedium(options) {
    if (options === void 0) {
        options = {};
    }
    var medium = innerCreateMedium(null);
    medium.options = __assign({
        async: true,
        ssr: false
    }, options);
    return medium;
}
;
var effectCar = createSidecarMedium();
;
;
;
;
;
var nothing = function() {
    return;
};
/**
 * Removes scrollbar from the page and contain the scroll within the Lock
 */ var RemoveScroll = __TURBOPACK__imported__module__51268__19["forwardRef"](function(props, parentRef) {
    var ref = __TURBOPACK__imported__module__51268__19["useRef"](null);
    var _a = __TURBOPACK__imported__module__51268__19["useState"]({
        onScrollCapture: nothing,
        onWheelCapture: nothing,
        onTouchMoveCapture: nothing
    }), callbacks = _a[0], setCallbacks = _a[1];
    var forwardProps = props.forwardProps, children = props.children, className = props.className, removeScrollBar = props.removeScrollBar, enabled = props.enabled, shards = props.shards, sideCar = props.sideCar, noRelative = props.noRelative, noIsolation = props.noIsolation, inert = props.inert, allowPinchZoom = props.allowPinchZoom, _b = props.as, Container = _b === void 0 ? 'div' : _b, gapMode = props.gapMode, rest = __rest(props, [
        "forwardProps",
        "children",
        "className",
        "removeScrollBar",
        "enabled",
        "shards",
        "sideCar",
        "noRelative",
        "noIsolation",
        "inert",
        "allowPinchZoom",
        "as",
        "gapMode"
    ]);
    var SideCar = sideCar;
    var containerRef = useMergeRefs([
        ref,
        parentRef
    ]);
    var containerProps = __assign(__assign({}, rest), callbacks);
    return __TURBOPACK__imported__module__51268__19["createElement"](__TURBOPACK__imported__module__51268__19["Fragment"], null, enabled && __TURBOPACK__imported__module__51268__19["createElement"](SideCar, {
        sideCar: effectCar,
        removeScrollBar: removeScrollBar,
        shards: shards,
        noRelative: noRelative,
        noIsolation: noIsolation,
        inert: inert,
        setCallbacks: setCallbacks,
        allowPinchZoom: !!allowPinchZoom,
        lockRef: ref,
        gapMode: gapMode
    }), forwardProps ? __TURBOPACK__imported__module__51268__19["cloneElement"](__TURBOPACK__imported__module__51268__19["Children"].only(children), __assign(__assign({}, containerProps), {
        ref: containerRef
    })) : __TURBOPACK__imported__module__51268__19["createElement"](Container, __assign({}, containerProps, {
        className: className,
        ref: containerRef
    }), children));
});
RemoveScroll.defaultProps = {
    enabled: true,
    removeScrollBar: true,
    inert: false
};
RemoveScroll.classNames = {
    fullWidth: fullWidthClassName,
    zeroRight: zeroRightClassName
};
;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/sidecar.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/use-sidecar@1.1.3_@types+react@19.2.14_react@19.2.4/node_modules/use-sidecar/dist/es2015/exports.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__22 = __TURBOPACK__imported__module__51268__;
;
;
var SideCar = function(_a) {
    var sideCar = _a.sideCar, rest = __rest(_a, [
        "sideCar"
    ]);
    if (!sideCar) {
        throw new Error('Sidecar: please provide `sideCar` property to import the right car');
    }
    var Target = sideCar.read();
    if (!Target) {
        throw new Error('Sidecar medium not found');
    }
    return __TURBOPACK__imported__module__51268__22["createElement"](Target, __assign({}, rest));
};
SideCar.isSideCarExport = true;
function exportSidecar(medium, exported) {
    medium.useMedium(exported);
    return SideCar;
}
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/SideEffect.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__23 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll-bar@2.3_25ad6fb9fe75be4391ed3c9752b30d68/node_modules/react-remove-scroll-bar/dist/es2015/index.js [app-client] (ecmascript) <locals>
;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll-bar@2.3_25ad6fb9fe75be4391ed3c9752b30d68/node_modules/react-remove-scroll-bar/dist/es2015/component.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__24 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/react-style-singleton@2.2.3_19dd01ab2b695c353a9afad65534024e/node_modules/react-style-singleton/dist/es2015/index.js [app-client] (ecmascript) <locals>
;
// MERGED MODULE: [project]/node_modules/.pnpm/react-style-singleton@2.2.3_19dd01ab2b695c353a9afad65534024e/node_modules/react-style-singleton/dist/es2015/component.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/react-style-singleton@2.2.3_19dd01ab2b695c353a9afad65534024e/node_modules/react-style-singleton/dist/es2015/hook.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__25 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/react-style-singleton@2.2.3_19dd01ab2b695c353a9afad65534024e/node_modules/react-style-singleton/dist/es2015/singleton.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/get-nonce@1.0.1/node_modules/get-nonce/dist/es2015/index.js [app-client] (ecmascript)
;
var currentNonce;
var setNonce = function(nonce) {
    currentNonce = nonce;
};
var getNonce = function() {
    if (currentNonce) {
        return currentNonce;
    }
    if (typeof __webpack_nonce__ !== 'undefined') {
        return __webpack_nonce__;
    }
    return undefined;
};
;
function makeStyleTag() {
    if (!document) return null;
    var tag = document.createElement('style');
    tag.type = 'text/css';
    var nonce = getNonce();
    if (nonce) {
        tag.setAttribute('nonce', nonce);
    }
    return tag;
}
function injectStyles(tag, css) {
    // @ts-ignore
    if (tag.styleSheet) {
        // @ts-ignore
        tag.styleSheet.cssText = css;
    } else {
        tag.appendChild(document.createTextNode(css));
    }
}
function insertStyleTag(tag) {
    var head = document.head || document.getElementsByTagName('head')[0];
    head.appendChild(tag);
}
var stylesheetSingleton = function() {
    var counter = 0;
    var stylesheet = null;
    return {
        add: function(style) {
            if (counter == 0) {
                if (stylesheet = makeStyleTag()) {
                    injectStyles(stylesheet, style);
                    insertStyleTag(stylesheet);
                }
            }
            counter++;
        },
        remove: function() {
            counter--;
            if (!counter && stylesheet) {
                stylesheet.parentNode && stylesheet.parentNode.removeChild(stylesheet);
                stylesheet = null;
            }
        }
    };
};
;
;
var styleHookSingleton = function() {
    var sheet = stylesheetSingleton();
    return function(styles, isDynamic) {
        __TURBOPACK__imported__module__51268__25["useEffect"](function() {
            sheet.add(styles);
            return function() {
                sheet.remove();
            };
        }, [
            styles && isDynamic
        ]);
    };
};
;
var styleSingleton = function() {
    var useStyle = styleHookSingleton();
    var Sheet = function(_a) {
        var styles = _a.styles, dynamic = _a.dynamic;
        useStyle(styles, dynamic);
        return null;
    };
    return Sheet;
};
;
;
;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll-bar@2.3_25ad6fb9fe75be4391ed3c9752b30d68/node_modules/react-remove-scroll-bar/dist/es2015/utils.js [app-client] (ecmascript)
;
var zeroGap = {
    left: 0,
    top: 0,
    right: 0,
    gap: 0
};
var parse = function(x) {
    return parseInt(x || '', 10) || 0;
};
var getOffset = function(gapMode) {
    var cs = window.getComputedStyle(document.body);
    var left = cs[gapMode === 'padding' ? 'paddingLeft' : 'marginLeft'];
    var top = cs[gapMode === 'padding' ? 'paddingTop' : 'marginTop'];
    var right = cs[gapMode === 'padding' ? 'paddingRight' : 'marginRight'];
    return [
        parse(left),
        parse(top),
        parse(right)
    ];
};
var getGapWidth = function(gapMode) {
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    if (typeof window === 'undefined') {
        return zeroGap;
    }
    var offsets = getOffset(gapMode);
    var documentWidth = document.documentElement.clientWidth;
    var windowWidth = window.innerWidth;
    return {
        left: offsets[0],
        top: offsets[1],
        right: offsets[2],
        gap: Math.max(0, windowWidth - documentWidth + offsets[2] - offsets[0])
    };
};
;
;
;
;
var Style = styleSingleton();
var lockAttribute = 'data-scroll-locked';
// important tip - once we measure scrollBar width and remove them
// we could not repeat this operation
// thus we are using style-singleton - only the first "yet correct" style will be applied.
var getStyles = function(_a, allowRelative, gapMode, important) {
    var left = _a.left, top = _a.top, right = _a.right, gap = _a.gap;
    if (gapMode === void 0) {
        gapMode = 'margin';
    }
    return "\n  .".concat(noScrollbarsClassName, " {\n   overflow: hidden ").concat(important, ";\n   padding-right: ").concat(gap, "px ").concat(important, ";\n  }\n  body[").concat(lockAttribute, "] {\n    overflow: hidden ").concat(important, ";\n    overscroll-behavior: contain;\n    ").concat([
        allowRelative && "position: relative ".concat(important, ";"),
        gapMode === 'margin' && "\n    padding-left: ".concat(left, "px;\n    padding-top: ").concat(top, "px;\n    padding-right: ").concat(right, "px;\n    margin-left:0;\n    margin-top:0;\n    margin-right: ").concat(gap, "px ").concat(important, ";\n    "),
        gapMode === 'padding' && "padding-right: ".concat(gap, "px ").concat(important, ";")
    ].filter(Boolean).join(''), "\n  }\n  \n  .").concat(zeroRightClassName, " {\n    right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " {\n    margin-right: ").concat(gap, "px ").concat(important, ";\n  }\n  \n  .").concat(zeroRightClassName, " .").concat(zeroRightClassName, " {\n    right: 0 ").concat(important, ";\n  }\n  \n  .").concat(fullWidthClassName, " .").concat(fullWidthClassName, " {\n    margin-right: 0 ").concat(important, ";\n  }\n  \n  body[").concat(lockAttribute, "] {\n    ").concat(removedBarSizeVariable, ": ").concat(gap, "px;\n  }\n");
};
var getCurrentUseCounter = function() {
    var counter = parseInt(document.body.getAttribute(lockAttribute) || '0', 10);
    return isFinite(counter) ? counter : 0;
};
var useLockAttribute = function() {
    __TURBOPACK__imported__module__51268__24["useEffect"](function() {
        document.body.setAttribute(lockAttribute, (getCurrentUseCounter() + 1).toString());
        return function() {
            var newCounter = getCurrentUseCounter() - 1;
            if (newCounter <= 0) {
                document.body.removeAttribute(lockAttribute);
            } else {
                document.body.setAttribute(lockAttribute, newCounter.toString());
            }
        };
    }, []);
};
var RemoveScrollBar = function(_a) {
    var noRelative = _a.noRelative, noImportant = _a.noImportant, _b = _a.gapMode, gapMode = _b === void 0 ? 'margin' : _b;
    useLockAttribute();
    /*
     gap will be measured on every component mount
     however it will be used only by the "first" invocation
     due to singleton nature of <Style
     */ var gap = __TURBOPACK__imported__module__51268__24["useMemo"](function() {
        return getGapWidth(gapMode);
    }, [
        gapMode
    ]);
    return __TURBOPACK__imported__module__51268__24["createElement"](Style, {
        styles: getStyles(gap, !noRelative, gapMode, !noImportant ? '!important' : '')
    });
};
;
;
;
;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/aggresiveCapture.js [app-client] (ecmascript)
;
var passiveSupported = false;
if (typeof window !== 'undefined') {
    try {
        var options = Object.defineProperty({}, 'passive', {
            get: function() {
                passiveSupported = true;
                return true;
            }
        });
        // @ts-ignore
        window.addEventListener('test', options, options);
        // @ts-ignore
        window.removeEventListener('test', options, options);
    } catch (err) {
        passiveSupported = false;
    }
}
var nonPassive = passiveSupported ? {
    passive: false
} : false;
// MERGED MODULE: [project]/node_modules/.pnpm/react-remove-scroll@2.7.2_@types+react@19.2.14_react@19.2.4/node_modules/react-remove-scroll/dist/es2015/handleScroll.js [app-client] (ecmascript)
;
var alwaysContainsScroll = function(node) {
    // textarea will always _contain_ scroll inside self. It only can be hidden
    return node.tagName === 'TEXTAREA';
};
var elementCanBeScrolled = function(node, overflow) {
    if (!(node instanceof Element)) {
        return false;
    }
    var styles = window.getComputedStyle(node);
    return(// not-not-scrollable
    styles[overflow] !== 'hidden' && // contains scroll inside self
    !(styles.overflowY === styles.overflowX && !alwaysContainsScroll(node) && styles[overflow] === 'visible'));
};
var elementCouldBeVScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowY');
};
var elementCouldBeHScrolled = function(node) {
    return elementCanBeScrolled(node, 'overflowX');
};
var locationCouldBeScrolled = function(axis, node) {
    var ownerDocument = node.ownerDocument;
    var current = node;
    do {
        // Skip over shadow root
        if (typeof ShadowRoot !== 'undefined' && current instanceof ShadowRoot) {
            current = current.host;
        }
        var isScrollable = elementCouldBeScrolled(axis, current);
        if (isScrollable) {
            var _a = getScrollVariables(axis, current), scrollHeight = _a[1], clientHeight = _a[2];
            if (scrollHeight > clientHeight) {
                return true;
            }
        }
        current = current.parentNode;
    }while (current && current !== ownerDocument.body)
    return false;
};
var getVScrollVariables = function(_a) {
    var scrollTop = _a.scrollTop, scrollHeight = _a.scrollHeight, clientHeight = _a.clientHeight;
    return [
        scrollTop,
        scrollHeight,
        clientHeight
    ];
};
var getHScrollVariables = function(_a) {
    var scrollLeft = _a.scrollLeft, scrollWidth = _a.scrollWidth, clientWidth = _a.clientWidth;
    return [
        scrollLeft,
        scrollWidth,
        clientWidth
    ];
};
var elementCouldBeScrolled = function(axis, node) {
    return axis === 'v' ? elementCouldBeVScrolled(node) : elementCouldBeHScrolled(node);
};
var getScrollVariables = function(axis, node) {
    return axis === 'v' ? getVScrollVariables(node) : getHScrollVariables(node);
};
var getDirectionFactor = function(axis, direction) {
    /**
     * If the element's direction is rtl (right-to-left), then scrollLeft is 0 when the scrollbar is at its rightmost position,
     * and then increasingly negative as you scroll towards the end of the content.
     * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollLeft
     */ return axis === 'h' && direction === 'rtl' ? -1 : 1;
};
var handleScroll = function(axis, endTarget, event, sourceDelta, noOverscroll) {
    var directionFactor = getDirectionFactor(axis, window.getComputedStyle(endTarget).direction);
    var delta = directionFactor * sourceDelta;
    // find scrollable target
    var target = event.target;
    var targetInLock = endTarget.contains(target);
    var shouldCancelScroll = false;
    var isDeltaPositive = delta > 0;
    var availableScroll = 0;
    var availableScrollTop = 0;
    do {
        if (!target) {
            break;
        }
        var _a = getScrollVariables(axis, target), position = _a[0], scroll_1 = _a[1], capacity = _a[2];
        var elementScroll = scroll_1 - capacity - directionFactor * position;
        if (position || elementScroll) {
            if (elementCouldBeScrolled(axis, target)) {
                availableScroll += elementScroll;
                availableScrollTop += position;
            }
        }
        var parent_1 = target.parentNode;
        // we will "bubble" from ShadowDom in case we are, or just to the parent in normal case
        // this is the same logic used in focus-lock
        target = parent_1 && parent_1.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? parent_1.host : parent_1;
    }while (// portaled content
    !targetInLock && target !== document.body || targetInLock && (endTarget.contains(target) || endTarget === target))
    // handle epsilon around 0 (non standard zoom levels)
    if (isDeltaPositive && (noOverscroll && Math.abs(availableScroll) < 1 || !noOverscroll && delta > availableScroll)) {
        shouldCancelScroll = true;
    } else if (!isDeltaPositive && (noOverscroll && Math.abs(availableScrollTop) < 1 || !noOverscroll && -delta > availableScrollTop)) {
        shouldCancelScroll = true;
    }
    return shouldCancelScroll;
};
;
;
;
;
;
;
var getTouchXY = function(event) {
    return 'changedTouches' in event ? [
        event.changedTouches[0].clientX,
        event.changedTouches[0].clientY
    ] : [
        0,
        0
    ];
};
var getDeltaXY = function(event) {
    return [
        event.deltaX,
        event.deltaY
    ];
};
var extractRef = function(ref) {
    return ref && 'current' in ref ? ref.current : ref;
};
var deltaCompare = function(x, y) {
    return x[0] === y[0] && x[1] === y[1];
};
var generateStyle = function(id) {
    return "\n  .block-interactivity-".concat(id, " {pointer-events: none;}\n  .allow-interactivity-").concat(id, " {pointer-events: all;}\n");
};
var idCounter = 0;
var lockStack = [];
function RemoveScrollSideCar(props) {
    var shouldPreventQueue = __TURBOPACK__imported__module__51268__23["useRef"]([]);
    var touchStartRef = __TURBOPACK__imported__module__51268__23["useRef"]([
        0,
        0
    ]);
    var activeAxis = __TURBOPACK__imported__module__51268__23["useRef"]();
    var id = __TURBOPACK__imported__module__51268__23["useState"](idCounter++)[0];
    var Style = __TURBOPACK__imported__module__51268__23["useState"](styleSingleton)[0];
    var lastProps = __TURBOPACK__imported__module__51268__23["useRef"](props);
    __TURBOPACK__imported__module__51268__23["useEffect"](function() {
        lastProps.current = props;
    }, [
        props
    ]);
    __TURBOPACK__imported__module__51268__23["useEffect"](function() {
        if (props.inert) {
            document.body.classList.add("block-interactivity-".concat(id));
            var allow_1 = __spreadArray([
                props.lockRef.current
            ], (props.shards || []).map(extractRef), true).filter(Boolean);
            allow_1.forEach(function(el) {
                return el.classList.add("allow-interactivity-".concat(id));
            });
            return function() {
                document.body.classList.remove("block-interactivity-".concat(id));
                allow_1.forEach(function(el) {
                    return el.classList.remove("allow-interactivity-".concat(id));
                });
            };
        }
        return;
    }, [
        props.inert,
        props.lockRef.current,
        props.shards
    ]);
    var shouldCancelEvent = __TURBOPACK__imported__module__51268__23["useCallback"](function(event, parent) {
        if ('touches' in event && event.touches.length === 2 || event.type === 'wheel' && event.ctrlKey) {
            return !lastProps.current.allowPinchZoom;
        }
        var touch = getTouchXY(event);
        var touchStart = touchStartRef.current;
        var deltaX = 'deltaX' in event ? event.deltaX : touchStart[0] - touch[0];
        var deltaY = 'deltaY' in event ? event.deltaY : touchStart[1] - touch[1];
        var currentAxis;
        var target = event.target;
        var moveDirection = Math.abs(deltaX) > Math.abs(deltaY) ? 'h' : 'v';
        // allow horizontal touch move on Range inputs. They will not cause any scroll
        if ('touches' in event && moveDirection === 'h' && target.type === 'range') {
            return false;
        }
        // allow drag selection (iOS); check if selection's anchorNode is the same as target or contains target
        var selection = window.getSelection();
        var anchorNode = selection && selection.anchorNode;
        var isTouchingSelection = anchorNode ? anchorNode === target || anchorNode.contains(target) : false;
        if (isTouchingSelection) {
            return false;
        }
        var canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        if (!canBeScrolledInMainDirection) {
            return true;
        }
        if (canBeScrolledInMainDirection) {
            currentAxis = moveDirection;
        } else {
            currentAxis = moveDirection === 'v' ? 'h' : 'v';
            canBeScrolledInMainDirection = locationCouldBeScrolled(moveDirection, target);
        // other axis might be not scrollable
        }
        if (!canBeScrolledInMainDirection) {
            return false;
        }
        if (!activeAxis.current && 'changedTouches' in event && (deltaX || deltaY)) {
            activeAxis.current = currentAxis;
        }
        if (!currentAxis) {
            return true;
        }
        var cancelingAxis = activeAxis.current || currentAxis;
        return handleScroll(cancelingAxis, parent, event, cancelingAxis === 'h' ? deltaX : deltaY, true);
    }, []);
    var shouldPrevent = __TURBOPACK__imported__module__51268__23["useCallback"](function(_event) {
        var event = _event;
        if (!lockStack.length || lockStack[lockStack.length - 1] !== Style) {
            // not the last active
            return;
        }
        var delta = 'deltaY' in event ? getDeltaXY(event) : getTouchXY(event);
        var sourceEvent = shouldPreventQueue.current.filter(function(e) {
            return e.name === event.type && (e.target === event.target || event.target === e.shadowParent) && deltaCompare(e.delta, delta);
        })[0];
        // self event, and should be canceled
        if (sourceEvent && sourceEvent.should) {
            if (event.cancelable) {
                event.preventDefault();
            }
            return;
        }
        // outside or shard event
        if (!sourceEvent) {
            var shardNodes = (lastProps.current.shards || []).map(extractRef).filter(Boolean).filter(function(node) {
                return node.contains(event.target);
            });
            var shouldStop = shardNodes.length > 0 ? shouldCancelEvent(event, shardNodes[0]) : !lastProps.current.noIsolation;
            if (shouldStop) {
                if (event.cancelable) {
                    event.preventDefault();
                }
            }
        }
    }, []);
    var shouldCancel = __TURBOPACK__imported__module__51268__23["useCallback"](function(name, delta, target, should) {
        var event = {
            name: name,
            delta: delta,
            target: target,
            should: should,
            shadowParent: getOutermostShadowParent(target)
        };
        shouldPreventQueue.current.push(event);
        setTimeout(function() {
            shouldPreventQueue.current = shouldPreventQueue.current.filter(function(e) {
                return e !== event;
            });
        }, 1);
    }, []);
    var scrollTouchStart = __TURBOPACK__imported__module__51268__23["useCallback"](function(event) {
        touchStartRef.current = getTouchXY(event);
        activeAxis.current = undefined;
    }, []);
    var scrollWheel = __TURBOPACK__imported__module__51268__23["useCallback"](function(event) {
        shouldCancel(event.type, getDeltaXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    var scrollTouchMove = __TURBOPACK__imported__module__51268__23["useCallback"](function(event) {
        shouldCancel(event.type, getTouchXY(event), event.target, shouldCancelEvent(event, props.lockRef.current));
    }, []);
    __TURBOPACK__imported__module__51268__23["useEffect"](function() {
        lockStack.push(Style);
        props.setCallbacks({
            onScrollCapture: scrollWheel,
            onWheelCapture: scrollWheel,
            onTouchMoveCapture: scrollTouchMove
        });
        document.addEventListener('wheel', shouldPrevent, nonPassive);
        document.addEventListener('touchmove', shouldPrevent, nonPassive);
        document.addEventListener('touchstart', scrollTouchStart, nonPassive);
        return function() {
            lockStack = lockStack.filter(function(inst) {
                return inst !== Style;
            });
            document.removeEventListener('wheel', shouldPrevent, nonPassive);
            document.removeEventListener('touchmove', shouldPrevent, nonPassive);
            document.removeEventListener('touchstart', scrollTouchStart, nonPassive);
        };
    }, []);
    var removeScrollBar = props.removeScrollBar, inert = props.inert;
    return __TURBOPACK__imported__module__51268__23["createElement"](__TURBOPACK__imported__module__51268__23["Fragment"], null, inert ? __TURBOPACK__imported__module__51268__23["createElement"](Style, {
        styles: generateStyle(id)
    }) : null, removeScrollBar ? __TURBOPACK__imported__module__51268__23["createElement"](RemoveScrollBar, {
        noRelative: props.noRelative,
        gapMode: props.gapMode
    }) : null);
}
function getOutermostShadowParent(node) {
    var shadowParent = null;
    while(node !== null){
        if (node instanceof ShadowRoot) {
            shadowParent = node.host;
            node = node.host;
        }
        node = node.parentNode;
    }
    return shadowParent;
}
;
;
;
const __TURBOPACK__default__export__1 = exportSidecar(effectCar, RemoveScrollSideCar);
;
;
;
;
var ReactRemoveScroll = __TURBOPACK__imported__module__51268__18["forwardRef"](function(props, ref) {
    return __TURBOPACK__imported__module__51268__18["createElement"](RemoveScroll, __assign({}, props, {
        ref: ref,
        sideCar: __TURBOPACK__default__export__1
    }));
});
ReactRemoveScroll.classNames = RemoveScroll.classNames;
const __TURBOPACK__default__export__2 = ReactRemoveScroll;
// MERGED MODULE: [project]/node_modules/.pnpm/aria-hidden@1.2.6/node_modules/aria-hidden/dist/es2015/index.js [app-client] (ecmascript)
;
var getDefaultParent = function(originalTarget) {
    if (typeof document === 'undefined') {
        return null;
    }
    var sampleTarget = Array.isArray(originalTarget) ? originalTarget[0] : originalTarget;
    return sampleTarget.ownerDocument.body;
};
var counterMap = new WeakMap();
var uncontrolledNodes = new WeakMap();
var markerMap = {};
var lockCount = 0;
var unwrapHost = function(node) {
    return node && (node.host || unwrapHost(node.parentNode));
};
var correctTargets = function(parent, targets) {
    return targets.map(function(target) {
        if (parent.contains(target)) {
            return target;
        }
        var correctedTarget = unwrapHost(target);
        if (correctedTarget && parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        console.error('aria-hidden', target, 'in not contained inside', parent, '. Doing nothing');
        return null;
    }).filter(function(x) {
        return Boolean(x);
    });
};
/**
 * Marks everything except given node(or nodes) as aria-hidden
 * @param {Element | Element[]} originalTarget - elements to keep on the page
 * @param [parentNode] - top element, defaults to document.body
 * @param {String} [markerName] - a special attribute to mark every node
 * @param {String} [controlAttribute] - html Attribute to control
 * @return {Undo} undo command
 */ var applyAttributeToOthers = function(originalTarget, parentNode, markerName, controlAttribute) {
    var targets = correctTargets(parentNode, Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    if (!markerMap[markerName]) {
        markerMap[markerName] = new WeakMap();
    }
    var markerCounter = markerMap[markerName];
    var hiddenNodes = [];
    var elementsToKeep = new Set();
    var elementsToStop = new Set(targets);
    var keep = function(el) {
        if (!el || elementsToKeep.has(el)) {
            return;
        }
        elementsToKeep.add(el);
        keep(el.parentNode);
    };
    targets.forEach(keep);
    var deep = function(parent) {
        if (!parent || elementsToStop.has(parent)) {
            return;
        }
        Array.prototype.forEach.call(parent.children, function(node) {
            if (elementsToKeep.has(node)) {
                deep(node);
            } else {
                try {
                    var attr = node.getAttribute(controlAttribute);
                    var alreadyHidden = attr !== null && attr !== 'false';
                    var counterValue = (counterMap.get(node) || 0) + 1;
                    var markerValue = (markerCounter.get(node) || 0) + 1;
                    counterMap.set(node, counterValue);
                    markerCounter.set(node, markerValue);
                    hiddenNodes.push(node);
                    if (counterValue === 1 && alreadyHidden) {
                        uncontrolledNodes.set(node, true);
                    }
                    if (markerValue === 1) {
                        node.setAttribute(markerName, 'true');
                    }
                    if (!alreadyHidden) {
                        node.setAttribute(controlAttribute, 'true');
                    }
                } catch (e) {
                    console.error('aria-hidden: cannot operate on ', node, e);
                }
            }
        });
    };
    deep(parentNode);
    elementsToKeep.clear();
    lockCount++;
    return function() {
        hiddenNodes.forEach(function(node) {
            var counterValue = counterMap.get(node) - 1;
            var markerValue = markerCounter.get(node) - 1;
            counterMap.set(node, counterValue);
            markerCounter.set(node, markerValue);
            if (!counterValue) {
                if (!uncontrolledNodes.has(node)) {
                    node.removeAttribute(controlAttribute);
                }
                uncontrolledNodes.delete(node);
            }
            if (!markerValue) {
                node.removeAttribute(markerName);
            }
        });
        lockCount--;
        if (!lockCount) {
            // clear
            counterMap = new WeakMap();
            counterMap = new WeakMap();
            uncontrolledNodes = new WeakMap();
            markerMap = {};
        }
    };
};
var hideOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-aria-hidden';
    }
    var targets = Array.from(Array.isArray(originalTarget) ? originalTarget : [
        originalTarget
    ]);
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    // we should not hide aria-live elements - https://github.com/theKashey/aria-hidden/issues/10
    // and script elements, as they have no impact on accessibility.
    targets.push.apply(targets, Array.from(activeParentNode.querySelectorAll('[aria-live], script')));
    return applyAttributeToOthers(targets, activeParentNode, markerName, 'aria-hidden');
};
var inertOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-inert-ed';
    }
    var activeParentNode = parentNode || getDefaultParent(originalTarget);
    if (!activeParentNode) {
        return function() {
            return null;
        };
    }
    return applyAttributeToOthers(originalTarget, activeParentNode, markerName, 'inert');
};
var supportsInert = function() {
    return typeof HTMLElement !== 'undefined' && HTMLElement.prototype.hasOwnProperty('inert');
};
var suppressOthers = function(originalTarget, parentNode, markerName) {
    if (markerName === void 0) {
        markerName = 'data-suppressed';
    }
    return (supportsInert() ? inertOthers : hideOthers)(originalTarget, parentNode, markerName);
};
var __TURBOPACK__imported__module__8063__13 = __TURBOPACK__imported__module__8063__;
"use client";
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
var DIALOG_NAME = "Dialog";
var [createDialogContext, createDialogScope] = createContextScope(DIALOG_NAME);
var [DialogProvider, useDialogContext] = createDialogContext(DIALOG_NAME);
var Dialog = (props)=>{
    const { __scopeDialog, children, open: openProp, defaultOpen, onOpenChange, modal = true } = props;
    const triggerRef = __TURBOPACK__imported__module__51268__2["useRef"](null);
    const contentRef = __TURBOPACK__imported__module__51268__2["useRef"](null);
    const [open, setOpen] = useControllableState({
        prop: openProp,
        defaultProp: defaultOpen ?? false,
        onChange: onOpenChange,
        caller: DIALOG_NAME
    });
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(DialogProvider, {
        scope: __scopeDialog,
        triggerRef,
        contentRef,
        contentId: useId(),
        titleId: useId(),
        descriptionId: useId(),
        open,
        onOpenChange: setOpen,
        onOpenToggle: __TURBOPACK__imported__module__51268__2["useCallback"](()=>setOpen((prevOpen)=>!prevOpen), [
            setOpen
        ]),
        modal,
        children
    });
};
Dialog.displayName = DIALOG_NAME;
var TRIGGER_NAME = "DialogTrigger";
var DialogTrigger = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...triggerProps } = props;
    const context = useDialogContext(TRIGGER_NAME, __scopeDialog);
    const composedTriggerRef = useComposedRefs(forwardedRef, context.triggerRef);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Primitive.button, {
        type: "button",
        "aria-haspopup": "dialog",
        "aria-expanded": context.open,
        "aria-controls": context.contentId,
        "data-state": getState(context.open),
        ...triggerProps,
        ref: composedTriggerRef,
        onClick: composeEventHandlers(props.onClick, context.onOpenToggle)
    });
});
DialogTrigger.displayName = TRIGGER_NAME;
var PORTAL_NAME1 = "DialogPortal";
var [PortalProvider, usePortalContext] = createDialogContext(PORTAL_NAME1, {
    forceMount: void 0
});
var DialogPortal = (props)=>{
    const { __scopeDialog, forceMount, children, container } = props;
    const context = useDialogContext(PORTAL_NAME1, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(PortalProvider, {
        scope: __scopeDialog,
        forceMount,
        children: __TURBOPACK__imported__module__51268__2["Children"].map(children, (child)=>/* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Presence, {
                present: forceMount || context.open,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Portal, {
                    asChild: true,
                    container,
                    children: child
                })
            }))
    });
};
DialogPortal.displayName = PORTAL_NAME1;
var OVERLAY_NAME = "DialogOverlay";
var DialogOverlay = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(OVERLAY_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, props.__scopeDialog);
    return context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Presence, {
        present: forceMount || context.open,
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(DialogOverlayImpl, {
            ...overlayProps,
            ref: forwardedRef
        })
    }) : null;
});
DialogOverlay.displayName = OVERLAY_NAME;
var Slot1 = createSlot("DialogOverlay.RemoveScroll");
var DialogOverlayImpl = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...overlayProps } = props;
    const context = useDialogContext(OVERLAY_NAME, __scopeDialog);
    return(// Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(__TURBOPACK__default__export__2, {
        as: Slot1,
        allowPinchZoom: true,
        shards: [
            context.contentRef
        ],
        children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Primitive.div, {
            "data-state": getState(context.open),
            ...overlayProps,
            ref: forwardedRef,
            style: {
                pointerEvents: "auto",
                ...overlayProps.style
            }
        })
    }));
});
var CONTENT_NAME = "DialogContent";
var DialogContent = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const portalContext = usePortalContext(CONTENT_NAME, props.__scopeDialog);
    const { forceMount = portalContext.forceMount, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Presence, {
        present: forceMount || context.open,
        children: context.modal ? /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(DialogContentModal, {
            ...contentProps,
            ref: forwardedRef
        }) : /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(DialogContentNonModal, {
            ...contentProps,
            ref: forwardedRef
        })
    });
});
DialogContent.displayName = CONTENT_NAME;
var DialogContentModal = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const contentRef = __TURBOPACK__imported__module__51268__2["useRef"](null);
    const composedRefs = useComposedRefs(forwardedRef, context.contentRef, contentRef);
    __TURBOPACK__imported__module__51268__2["useEffect"](()=>{
        const content = contentRef.current;
        if (content) return hideOthers(content);
    }, []);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(DialogContentImpl, {
        ...props,
        ref: composedRefs,
        trapFocus: context.open,
        disableOutsidePointerEvents: true,
        onCloseAutoFocus: composeEventHandlers(props.onCloseAutoFocus, (event)=>{
            event.preventDefault();
            context.triggerRef.current?.focus();
        }),
        onPointerDownOutside: composeEventHandlers(props.onPointerDownOutside, (event)=>{
            const originalEvent = event.detail.originalEvent;
            const ctrlLeftClick = originalEvent.button === 0 && originalEvent.ctrlKey === true;
            const isRightClick = originalEvent.button === 2 || ctrlLeftClick;
            if (isRightClick) event.preventDefault();
        }),
        onFocusOutside: composeEventHandlers(props.onFocusOutside, (event)=>event.preventDefault())
    });
});
var DialogContentNonModal = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const context = useDialogContext(CONTENT_NAME, props.__scopeDialog);
    const hasInteractedOutsideRef = __TURBOPACK__imported__module__51268__2["useRef"](false);
    const hasPointerDownOutsideRef = __TURBOPACK__imported__module__51268__2["useRef"](false);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(DialogContentImpl, {
        ...props,
        ref: forwardedRef,
        trapFocus: false,
        disableOutsidePointerEvents: false,
        onCloseAutoFocus: (event)=>{
            props.onCloseAutoFocus?.(event);
            if (!event.defaultPrevented) {
                if (!hasInteractedOutsideRef.current) context.triggerRef.current?.focus();
                event.preventDefault();
            }
            hasInteractedOutsideRef.current = false;
            hasPointerDownOutsideRef.current = false;
        },
        onInteractOutside: (event)=>{
            props.onInteractOutside?.(event);
            if (!event.defaultPrevented) {
                hasInteractedOutsideRef.current = true;
                if (event.detail.originalEvent.type === "pointerdown") {
                    hasPointerDownOutsideRef.current = true;
                }
            }
            const target = event.target;
            const targetIsTrigger = context.triggerRef.current?.contains(target);
            if (targetIsTrigger) event.preventDefault();
            if (event.detail.originalEvent.type === "focusin" && hasPointerDownOutsideRef.current) {
                event.preventDefault();
            }
        }
    });
});
var DialogContentImpl = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, trapFocus, onOpenAutoFocus, onCloseAutoFocus, ...contentProps } = props;
    const context = useDialogContext(CONTENT_NAME, __scopeDialog);
    const contentRef = __TURBOPACK__imported__module__51268__2["useRef"](null);
    const composedRefs = useComposedRefs(forwardedRef, contentRef);
    useFocusGuards();
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsxs"])(__TURBOPACK__imported__module__8063__13["Fragment"], {
        children: [
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(FocusScope, {
                asChild: true,
                loop: true,
                trapped: trapFocus,
                onMountAutoFocus: onOpenAutoFocus,
                onUnmountAutoFocus: onCloseAutoFocus,
                children: /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(DismissableLayer, {
                    role: "dialog",
                    id: context.contentId,
                    "aria-describedby": context.descriptionId,
                    "aria-labelledby": context.titleId,
                    "data-state": getState(context.open),
                    ...contentProps,
                    ref: composedRefs,
                    onDismiss: ()=>context.onOpenChange(false)
                })
            }),
            /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsxs"])(__TURBOPACK__imported__module__8063__13["Fragment"], {
                children: [
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(TitleWarning, {
                        titleId: context.titleId
                    }),
                    /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(DescriptionWarning, {
                        contentRef,
                        descriptionId: context.descriptionId
                    })
                ]
            })
        ]
    });
});
var TITLE_NAME = "DialogTitle";
var DialogTitle = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...titleProps } = props;
    const context = useDialogContext(TITLE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Primitive.h2, {
        id: context.titleId,
        ...titleProps,
        ref: forwardedRef
    });
});
DialogTitle.displayName = TITLE_NAME;
var DESCRIPTION_NAME = "DialogDescription";
var DialogDescription = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...descriptionProps } = props;
    const context = useDialogContext(DESCRIPTION_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Primitive.p, {
        id: context.descriptionId,
        ...descriptionProps,
        ref: forwardedRef
    });
});
DialogDescription.displayName = DESCRIPTION_NAME;
var CLOSE_NAME = "DialogClose";
var DialogClose = __TURBOPACK__imported__module__51268__2["forwardRef"]((props, forwardedRef)=>{
    const { __scopeDialog, ...closeProps } = props;
    const context = useDialogContext(CLOSE_NAME, __scopeDialog);
    return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__13["jsx"])(Primitive.button, {
        type: "button",
        ...closeProps,
        ref: forwardedRef,
        onClick: composeEventHandlers(props.onClick, ()=>context.onOpenChange(false))
    });
});
DialogClose.displayName = CLOSE_NAME;
function getState(open) {
    return open ? "open" : "closed";
}
var TITLE_WARNING_NAME = "DialogTitleWarning";
var [WarningProvider, useWarningContext] = createContext2(TITLE_WARNING_NAME, {
    contentName: CONTENT_NAME,
    titleName: TITLE_NAME,
    docsSlug: "dialog"
});
var TitleWarning = ({ titleId })=>{
    const titleWarningContext = useWarningContext(TITLE_WARNING_NAME);
    const MESSAGE = `\`${titleWarningContext.contentName}\` requires a \`${titleWarningContext.titleName}\` for the component to be accessible for screen reader users.

If you want to hide the \`${titleWarningContext.titleName}\`, you can wrap it with our VisuallyHidden component.

For more information, see https://radix-ui.com/primitives/docs/components/${titleWarningContext.docsSlug}`;
    __TURBOPACK__imported__module__51268__2["useEffect"](()=>{
        if (titleId) {
            const hasTitle = document.getElementById(titleId);
            if (!hasTitle) console.error(MESSAGE);
        }
    }, [
        MESSAGE,
        titleId
    ]);
    return null;
};
var DESCRIPTION_WARNING_NAME = "DialogDescriptionWarning";
var DescriptionWarning = ({ contentRef, descriptionId })=>{
    const descriptionWarningContext = useWarningContext(DESCRIPTION_WARNING_NAME);
    const MESSAGE = `Warning: Missing \`Description\` or \`aria-describedby={undefined}\` for {${descriptionWarningContext.contentName}}.`;
    __TURBOPACK__imported__module__51268__2["useEffect"](()=>{
        const describedById = contentRef.current?.getAttribute("aria-describedby");
        if (descriptionId && describedById) {
            const hasDescription = document.getElementById(descriptionId);
            if (!hasDescription) console.warn(MESSAGE);
        }
    }, [
        MESSAGE,
        contentRef,
        descriptionId
    ]);
    return null;
};
var Root5 = Dialog;
var Trigger = DialogTrigger;
var Portal1 = DialogPortal;
var Overlay = DialogOverlay;
var Content = DialogContent;
var Title = DialogTitle;
var Description = DialogDescription;
var Close = DialogClose;
;
var __TURBOPACK__imported__module__51268__26 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-primitive@2_0243fb2db8a1fb85ca77b8d9e5c2d650/node_modules/@radix-ui/react-primitive/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__27 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__2 = __TURBOPACK__imported__module__98057__;
// MERGED MODULE: [project]/node_modules/.pnpm/@radix-ui+react-slot@1.2.4_@types+react@19.2.14_react@19.2.4/node_modules/@radix-ui/react-slot/dist/index.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__28 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__8063__14 = __TURBOPACK__imported__module__8063__;
;
;
;
var REACT_LAZY_TYPE = Symbol.for("react.lazy");
var use = __TURBOPACK__imported__module__51268__28[" use ".trim().toString()];
function isPromiseLike(value1) {
    return typeof value1 === "object" && value1 !== null && "then" in value1;
}
function isLazyComponent(element) {
    return element != null && typeof element === "object" && "$$typeof" in element && element.$$typeof === REACT_LAZY_TYPE && "_payload" in element && isPromiseLike(element._payload);
}
// @__NO_SIDE_EFFECTS__
function createSlot1(ownerName) {
    const SlotClone = /* @__PURE__ */ createSlotClone1(ownerName);
    const Slot2 = __TURBOPACK__imported__module__51268__28.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        const childrenArray = __TURBOPACK__imported__module__51268__28.Children.toArray(children);
        const slottable = childrenArray.find(isSlottable1);
        if (slottable) {
            const newElement = slottable.props.children;
            const newChildren = childrenArray.map((child)=>{
                if (child === slottable) {
                    if (__TURBOPACK__imported__module__51268__28.Children.count(newElement) > 1) return __TURBOPACK__imported__module__51268__28.Children.only(null);
                    return __TURBOPACK__imported__module__51268__28.isValidElement(newElement) ? newElement.props.children : null;
                } else {
                    return child;
                }
            });
            return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__14["jsx"])(SlotClone, {
                ...slotProps,
                ref: forwardedRef,
                children: __TURBOPACK__imported__module__51268__28.isValidElement(newElement) ? __TURBOPACK__imported__module__51268__28.cloneElement(newElement, void 0, newChildren) : null
            });
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__14["jsx"])(SlotClone, {
            ...slotProps,
            ref: forwardedRef,
            children
        });
    });
    Slot2.displayName = `${ownerName}.Slot`;
    return Slot2;
}
var Slot2 = /* @__PURE__ */ createSlot1("Slot");
// @__NO_SIDE_EFFECTS__
function createSlotClone1(ownerName) {
    const SlotClone = __TURBOPACK__imported__module__51268__28.forwardRef((props, forwardedRef)=>{
        let { children, ...slotProps } = props;
        if (isLazyComponent(children) && typeof use === "function") {
            children = use(children._payload);
        }
        if (__TURBOPACK__imported__module__51268__28.isValidElement(children)) {
            const childrenRef = getElementRef2(children);
            const props2 = mergeProps1(slotProps, children.props);
            if (children.type !== __TURBOPACK__imported__module__51268__28.Fragment) {
                props2.ref = forwardedRef ? composeRefs(forwardedRef, childrenRef) : childrenRef;
            }
            return __TURBOPACK__imported__module__51268__28.cloneElement(children, props2);
        }
        return __TURBOPACK__imported__module__51268__28.Children.count(children) > 1 ? __TURBOPACK__imported__module__51268__28.Children.only(null) : null;
    });
    SlotClone.displayName = `${ownerName}.SlotClone`;
    return SlotClone;
}
var SLOTTABLE_IDENTIFIER1 = Symbol("radix.slottable");
// @__NO_SIDE_EFFECTS__
function createSlottable1(ownerName) {
    const Slottable2 = ({ children })=>{
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__14["jsx"])(__TURBOPACK__imported__module__8063__14["Fragment"], {
            children
        });
    };
    Slottable2.displayName = `${ownerName}.Slottable`;
    Slottable2.__radixId = SLOTTABLE_IDENTIFIER1;
    return Slottable2;
}
var Slottable1 = /* @__PURE__ */ createSlottable1("Slottable");
function isSlottable1(child) {
    return __TURBOPACK__imported__module__51268__28.isValidElement(child) && typeof child.type === "function" && "__radixId" in child.type && child.type.__radixId === SLOTTABLE_IDENTIFIER1;
}
function mergeProps1(slotProps, childProps) {
    const overrideProps = {
        ...childProps
    };
    for(const propName in childProps){
        const slotPropValue = slotProps[propName];
        const childPropValue = childProps[propName];
        const isHandler = /^on[A-Z]/.test(propName);
        if (isHandler) {
            if (slotPropValue && childPropValue) {
                overrideProps[propName] = (...args)=>{
                    const result = childPropValue(...args);
                    slotPropValue(...args);
                    return result;
                };
            } else if (slotPropValue) {
                overrideProps[propName] = slotPropValue;
            }
        } else if (propName === "style") {
            overrideProps[propName] = {
                ...slotPropValue,
                ...childPropValue
            };
        } else if (propName === "className") {
            overrideProps[propName] = [
                slotPropValue,
                childPropValue
            ].filter(Boolean).join(" ");
        }
    }
    return {
        ...slotProps,
        ...overrideProps
    };
}
function getElementRef2(element) {
    let getter = Object.getOwnPropertyDescriptor(element.props, "ref")?.get;
    let mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.ref;
    }
    getter = Object.getOwnPropertyDescriptor(element, "ref")?.get;
    mayWarn = getter && "isReactWarning" in getter && getter.isReactWarning;
    if (mayWarn) {
        return element.props.ref;
    }
    return element.props.ref || element.ref;
}
;
var __TURBOPACK__imported__module__8063__15 = __TURBOPACK__imported__module__8063__;
;
;
;
;
var NODES1 = [
    "a",
    "button",
    "div",
    "form",
    "h2",
    "h3",
    "img",
    "input",
    "label",
    "li",
    "nav",
    "ol",
    "p",
    "select",
    "span",
    "svg",
    "ul"
];
var Primitive1 = NODES1.reduce((primitive, node)=>{
    const Slot = createSlot1(`Primitive.${node}`);
    const Node1 = __TURBOPACK__imported__module__51268__27["forwardRef"]((props, forwardedRef)=>{
        const { asChild, ...primitiveProps } = props;
        const Comp = asChild ? Slot : node;
        if (typeof window !== "undefined") {
            window[Symbol.for("radix-ui")] = true;
        }
        return /* @__PURE__ */ (0, __TURBOPACK__imported__module__8063__15["jsx"])(Comp, {
            ...primitiveProps,
            ref: forwardedRef
        });
    });
    Node1.displayName = `Primitive.${node}`;
    return {
        ...primitive,
        [node]: Node1
    };
}, {});
function dispatchDiscreteCustomEvent1(target, event) {
    if (target) __TURBOPACK__imported__module__98057__2["flushSync"](()=>target.dispatchEvent(event));
}
var Root6 = Primitive1;
;
"use client";
;
;
;
;
;
;
var N = '[cmdk-group=""]', Y1 = '[cmdk-group-items=""]', be = '[cmdk-group-heading=""]', le = '[cmdk-item=""]', ce = `${le}:not([aria-disabled="true"])`, Z = "cmdk-item-select", T = "data-value", Re = (r, o, n)=>W(r, o, n), ue = __TURBOPACK__imported__module__51268__26["createContext"](void 0), K1 = ()=>__TURBOPACK__imported__module__51268__26["useContext"](ue), de = __TURBOPACK__imported__module__51268__26["createContext"](void 0), ee = ()=>__TURBOPACK__imported__module__51268__26["useContext"](de), fe = __TURBOPACK__imported__module__51268__26["createContext"](void 0), me = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>{
    let n = L(()=>{
        var e, a1;
        return {
            search: "",
            value: (a1 = (e = r.value) != null ? e : r.defaultValue) != null ? a1 : "",
            selectedItemId: void 0,
            filtered: {
                count: 0,
                items: new Map,
                groups: new Set
            }
        };
    }), u = L(()=>new Set), c = L(()=>new Map), d = L(()=>new Map), f = L(()=>new Set), p = pe(r), { label: b, children: m, value: R, onValueChange: x, filter: C, shouldFilter: S, loop: A, disablePointerSelection: ge = !1, vimBindings: j = !0, ...O } = r, $ = useId(), q = useId(), _ = useId(), I = __TURBOPACK__imported__module__51268__26["useRef"](null), v = ke();
    k1(()=>{
        if (R !== void 0) {
            let e = R.trim();
            n.current.value = e, E.emit();
        }
    }, [
        R
    ]), k1(()=>{
        v(6, ne);
    }, []);
    let E = __TURBOPACK__imported__module__51268__26["useMemo"](()=>({
            subscribe: (e)=>(f.current.add(e), ()=>f.current.delete(e)),
            snapshot: ()=>n.current,
            setState: (e, a1, s)=>{
                var i, l, g, y;
                if (!Object.is(n.current[e], a1)) {
                    if (n.current[e] = a1, e === "search") J(), z(), v(1, W);
                    else if (e === "value") {
                        if (document.activeElement.hasAttribute("cmdk-input") || document.activeElement.hasAttribute("cmdk-root")) {
                            let h = document.getElementById(_);
                            h ? h.focus() : (i = document.getElementById($)) == null || i.focus();
                        }
                        if (v(7, ()=>{
                            var h;
                            n.current.selectedItemId = (h = M()) == null ? void 0 : h.id, E.emit();
                        }), s || v(5, ne), ((l = p.current) == null ? void 0 : l.value) !== void 0) {
                            let h = a1 != null ? a1 : "";
                            (y = (g = p.current).onValueChange) == null || y.call(g, h);
                            return;
                        }
                    }
                    E.emit();
                }
            },
            emit: ()=>{
                f.current.forEach((e)=>e());
            }
        }), []), U = __TURBOPACK__imported__module__51268__26["useMemo"](()=>({
            value: (e, a1, s)=>{
                var i;
                a1 !== ((i = d.current.get(e)) == null ? void 0 : i.value) && (d.current.set(e, {
                    value: a1,
                    keywords: s
                }), n.current.filtered.items.set(e, te(a1, s)), v(2, ()=>{
                    z(), E.emit();
                }));
            },
            item: (e, a1)=>(u.current.add(e), a1 && (c.current.has(a1) ? c.current.get(a1).add(e) : c.current.set(a1, new Set([
                    e
                ]))), v(3, ()=>{
                    J(), z(), n.current.value || W(), E.emit();
                }), ()=>{
                    d.current.delete(e), u.current.delete(e), n.current.filtered.items.delete(e);
                    let s = M();
                    v(4, ()=>{
                        J(), (s == null ? void 0 : s.getAttribute("id")) === e && W(), E.emit();
                    });
                }),
            group: (e)=>(c.current.has(e) || c.current.set(e, new Set), ()=>{
                    d.current.delete(e), c.current.delete(e);
                }),
            filter: ()=>p.current.shouldFilter,
            label: b || r["aria-label"],
            getDisablePointerSelection: ()=>p.current.disablePointerSelection,
            listId: $,
            inputId: _,
            labelId: q,
            listInnerRef: I
        }), []);
    function te(e, a1) {
        var i, l;
        let s = (l = (i = p.current) == null ? void 0 : i.filter) != null ? l : Re;
        return e ? s(e, n.current.search, a1) : 0;
    }
    function z() {
        if (!n.current.search || p.current.shouldFilter === !1) return;
        let e = n.current.filtered.items, a1 = [];
        n.current.filtered.groups.forEach((i)=>{
            let l = c.current.get(i), g = 0;
            l.forEach((y)=>{
                let h = e.get(y);
                g = Math.max(h, g);
            }), a1.push([
                i,
                g
            ]);
        });
        let s = I.current;
        V().sort((i, l)=>{
            var h, F;
            let g = i.getAttribute("id"), y = l.getAttribute("id");
            return ((h = e.get(y)) != null ? h : 0) - ((F = e.get(g)) != null ? F : 0);
        }).forEach((i)=>{
            let l = i.closest(Y1);
            l ? l.appendChild(i.parentElement === l ? i : i.closest(`${Y1} > *`)) : s.appendChild(i.parentElement === s ? i : i.closest(`${Y1} > *`));
        }), a1.sort((i, l)=>l[1] - i[1]).forEach((i)=>{
            var g;
            let l = (g = I.current) == null ? void 0 : g.querySelector(`${N}[${T}="${encodeURIComponent(i[0])}"]`);
            l == null || l.parentElement.appendChild(l);
        });
    }
    function W() {
        let e = V().find((s)=>s.getAttribute("aria-disabled") !== "true"), a1 = e == null ? void 0 : e.getAttribute(T);
        E.setState("value", a1 || void 0);
    }
    function J() {
        var a1, s, i, l;
        if (!n.current.search || p.current.shouldFilter === !1) {
            n.current.filtered.count = u.current.size;
            return;
        }
        n.current.filtered.groups = new Set;
        let e = 0;
        for (let g of u.current){
            let y = (s = (a1 = d.current.get(g)) == null ? void 0 : a1.value) != null ? s : "", h = (l = (i = d.current.get(g)) == null ? void 0 : i.keywords) != null ? l : [], F = te(y, h);
            n.current.filtered.items.set(g, F), F > 0 && e++;
        }
        for (let [g, y] of c.current)for (let h of y)if (n.current.filtered.items.get(h) > 0) {
            n.current.filtered.groups.add(g);
            break;
        }
        n.current.filtered.count = e;
    }
    function ne() {
        var a1, s, i;
        let e = M();
        e && (((a1 = e.parentElement) == null ? void 0 : a1.firstChild) === e && ((i = (s = e.closest(N)) == null ? void 0 : s.querySelector(be)) == null || i.scrollIntoView({
            block: "nearest"
        })), e.scrollIntoView({
            block: "nearest"
        }));
    }
    function M() {
        var e;
        return (e = I.current) == null ? void 0 : e.querySelector(`${le}[aria-selected="true"]`);
    }
    function V() {
        var e;
        return Array.from(((e = I.current) == null ? void 0 : e.querySelectorAll(ce)) || []);
    }
    function X(e) {
        let s = V()[e];
        s && E.setState("value", s.getAttribute(T));
    }
    function Q(e) {
        var g;
        let a1 = M(), s = V(), i = s.findIndex((y)=>y === a1), l = s[i + e];
        (g = p.current) != null && g.loop && (l = i + e < 0 ? s[s.length - 1] : i + e === s.length ? s[0] : s[i + e]), l && E.setState("value", l.getAttribute(T));
    }
    function re(e) {
        let a1 = M(), s = a1 == null ? void 0 : a1.closest(N), i;
        for(; s && !i;)s = e > 0 ? we(s, N) : De(s, N), i = s == null ? void 0 : s.querySelector(ce);
        i ? E.setState("value", i.getAttribute(T)) : Q(e);
    }
    let oe = ()=>X(V().length - 1), ie = (e)=>{
        e.preventDefault(), e.metaKey ? oe() : e.altKey ? re(1) : Q(1);
    }, se = (e)=>{
        e.preventDefault(), e.metaKey ? X(0) : e.altKey ? re(-1) : Q(-1);
    };
    return __TURBOPACK__imported__module__51268__26["createElement"](Primitive1.div, {
        ref: o,
        tabIndex: -1,
        ...O,
        "cmdk-root": "",
        onKeyDown: (e)=>{
            var s;
            (s = O.onKeyDown) == null || s.call(O, e);
            let a1 = e.nativeEvent.isComposing || e.keyCode === 229;
            if (!(e.defaultPrevented || a1)) switch(e.key){
                case "n":
                case "j":
                    {
                        j && e.ctrlKey && ie(e);
                        break;
                    }
                case "ArrowDown":
                    {
                        ie(e);
                        break;
                    }
                case "p":
                case "k":
                    {
                        j && e.ctrlKey && se(e);
                        break;
                    }
                case "ArrowUp":
                    {
                        se(e);
                        break;
                    }
                case "Home":
                    {
                        e.preventDefault(), X(0);
                        break;
                    }
                case "End":
                    {
                        e.preventDefault(), oe();
                        break;
                    }
                case "Enter":
                    {
                        e.preventDefault();
                        let i = M();
                        if (i) {
                            let l = new Event(Z);
                            i.dispatchEvent(l);
                        }
                    }
            }
        }
    }, __TURBOPACK__imported__module__51268__26["createElement"]("label", {
        "cmdk-label": "",
        htmlFor: U.inputId,
        id: U.labelId,
        style: Te
    }, b), B1(r, (e)=>__TURBOPACK__imported__module__51268__26["createElement"](de.Provider, {
            value: E
        }, __TURBOPACK__imported__module__51268__26["createElement"](ue.Provider, {
            value: U
        }, e))));
}), he = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>{
    var _, I;
    let n = useId(), u = __TURBOPACK__imported__module__51268__26["useRef"](null), c = __TURBOPACK__imported__module__51268__26["useContext"](fe), d = K1(), f = pe(r), p = (I = (_ = f.current) == null ? void 0 : _.forceMount) != null ? I : c == null ? void 0 : c.forceMount;
    k1(()=>{
        if (!p) return d.item(n, c == null ? void 0 : c.id);
    }, [
        p
    ]);
    let b = ve(n, u, [
        r.value,
        r.children,
        u
    ], r.keywords), m = ee(), R = P((v)=>v.value && v.value === b.current), x = P((v)=>p || d.filter() === !1 ? !0 : v.search ? v.filtered.items.get(n) > 0 : !0);
    __TURBOPACK__imported__module__51268__26["useEffect"](()=>{
        let v = u.current;
        if (!(!v || r.disabled)) return v.addEventListener(Z, C), ()=>v.removeEventListener(Z, C);
    }, [
        x,
        r.onSelect,
        r.disabled
    ]);
    function C() {
        var v, E;
        S(), (E = (v = f.current).onSelect) == null || E.call(v, b.current);
    }
    function S() {
        m.setState("value", b.current, !0);
    }
    if (!x) return null;
    let { disabled: A, value: ge, onSelect: j, forceMount: O, keywords: $, ...q } = r;
    return __TURBOPACK__imported__module__51268__26["createElement"](Primitive1.div, {
        ref: composeRefs(u, o),
        ...q,
        id: n,
        "cmdk-item": "",
        role: "option",
        "aria-disabled": !!A,
        "aria-selected": !!R,
        "data-disabled": !!A,
        "data-selected": !!R,
        onPointerMove: A || d.getDisablePointerSelection() ? void 0 : S,
        onClick: A ? void 0 : C
    }, r.children);
}), Ee = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>{
    let { heading: n, children: u, forceMount: c, ...d } = r, f = useId(), p = __TURBOPACK__imported__module__51268__26["useRef"](null), b = __TURBOPACK__imported__module__51268__26["useRef"](null), m = useId(), R = K1(), x = P((S)=>c || R.filter() === !1 ? !0 : S.search ? S.filtered.groups.has(f) : !0);
    k1(()=>R.group(f), []), ve(f, p, [
        r.value,
        r.heading,
        b
    ]);
    let C = __TURBOPACK__imported__module__51268__26["useMemo"](()=>({
            id: f,
            forceMount: c
        }), [
        c
    ]);
    return __TURBOPACK__imported__module__51268__26["createElement"](Primitive1.div, {
        ref: composeRefs(p, o),
        ...d,
        "cmdk-group": "",
        role: "presentation",
        hidden: x ? void 0 : !0
    }, n && __TURBOPACK__imported__module__51268__26["createElement"]("div", {
        ref: b,
        "cmdk-group-heading": "",
        "aria-hidden": !0,
        id: m
    }, n), B1(r, (S)=>__TURBOPACK__imported__module__51268__26["createElement"]("div", {
            "cmdk-group-items": "",
            role: "group",
            "aria-labelledby": n ? m : void 0
        }, __TURBOPACK__imported__module__51268__26["createElement"](fe.Provider, {
            value: C
        }, S))));
}), ye = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>{
    let { alwaysRender: n, ...u } = r, c = __TURBOPACK__imported__module__51268__26["useRef"](null), d = P((f)=>!f.search);
    return !n && !d ? null : __TURBOPACK__imported__module__51268__26["createElement"](Primitive1.div, {
        ref: composeRefs(c, o),
        ...u,
        "cmdk-separator": "",
        role: "separator"
    });
}), Se = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>{
    let { onValueChange: n, ...u } = r, c = r.value != null, d = ee(), f = P((m)=>m.search), p = P((m)=>m.selectedItemId), b = K1();
    return __TURBOPACK__imported__module__51268__26["useEffect"](()=>{
        r.value != null && d.setState("search", r.value);
    }, [
        r.value
    ]), __TURBOPACK__imported__module__51268__26["createElement"](Primitive1.input, {
        ref: o,
        ...u,
        "cmdk-input": "",
        autoComplete: "off",
        autoCorrect: "off",
        spellCheck: !1,
        "aria-autocomplete": "list",
        role: "combobox",
        "aria-expanded": !0,
        "aria-controls": b.listId,
        "aria-labelledby": b.labelId,
        "aria-activedescendant": p,
        id: b.inputId,
        type: "text",
        value: c ? r.value : f,
        onChange: (m)=>{
            c || d.setState("search", m.target.value), n == null || n(m.target.value);
        }
    });
}), Ce = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>{
    let { children: n, label: u = "Suggestions", ...c } = r, d = __TURBOPACK__imported__module__51268__26["useRef"](null), f = __TURBOPACK__imported__module__51268__26["useRef"](null), p = P((m)=>m.selectedItemId), b = K1();
    return __TURBOPACK__imported__module__51268__26["useEffect"](()=>{
        if (f.current && d.current) {
            let m = f.current, R = d.current, x, C = new ResizeObserver(()=>{
                x = requestAnimationFrame(()=>{
                    let S = m.offsetHeight;
                    R.style.setProperty("--cmdk-list-height", S.toFixed(1) + "px");
                });
            });
            return C.observe(m), ()=>{
                cancelAnimationFrame(x), C.unobserve(m);
            };
        }
    }, []), __TURBOPACK__imported__module__51268__26["createElement"](Primitive1.div, {
        ref: composeRefs(d, o),
        ...c,
        "cmdk-list": "",
        role: "listbox",
        tabIndex: -1,
        "aria-activedescendant": p,
        "aria-label": u,
        id: b.listId
    }, B1(r, (m)=>__TURBOPACK__imported__module__51268__26["createElement"]("div", {
            ref: composeRefs(f, b.listInnerRef),
            "cmdk-list-sizer": ""
        }, m)));
}), xe = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>{
    let { open: n, onOpenChange: u, overlayClassName: c, contentClassName: d, container: f, ...p } = r;
    return __TURBOPACK__imported__module__51268__26["createElement"](Root5, {
        open: n,
        onOpenChange: u
    }, __TURBOPACK__imported__module__51268__26["createElement"](Portal1, {
        container: f
    }, __TURBOPACK__imported__module__51268__26["createElement"](Overlay, {
        "cmdk-overlay": "",
        className: c
    }), __TURBOPACK__imported__module__51268__26["createElement"](Content, {
        "aria-label": r.label,
        "cmdk-dialog": "",
        className: d
    }, __TURBOPACK__imported__module__51268__26["createElement"](me, {
        ref: o,
        ...p
    }))));
}), Ie = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>P((u)=>u.filtered.count === 0) ? __TURBOPACK__imported__module__51268__26["createElement"](Primitive1.div, {
        ref: o,
        ...r,
        "cmdk-empty": "",
        role: "presentation"
    }) : null), Pe = __TURBOPACK__imported__module__51268__26["forwardRef"]((r, o)=>{
    let { progress: n, children: u, label: c = "Loading...", ...d } = r;
    return __TURBOPACK__imported__module__51268__26["createElement"](Primitive1.div, {
        ref: o,
        ...d,
        "cmdk-loading": "",
        role: "progressbar",
        "aria-valuenow": n,
        "aria-valuemin": 0,
        "aria-valuemax": 100,
        "aria-label": c
    }, B1(r, (f)=>__TURBOPACK__imported__module__51268__26["createElement"]("div", {
            "aria-hidden": !0
        }, f)));
}), _e = Object.assign(me, {
    List: Ce,
    Item: he,
    Input: Se,
    Group: Ee,
    Separator: ye,
    Dialog: xe,
    Empty: Ie,
    Loading: Pe
});
function we(r, o) {
    let n = r.nextElementSibling;
    for(; n;){
        if (n.matches(o)) return n;
        n = n.nextElementSibling;
    }
}
function De(r, o) {
    let n = r.previousElementSibling;
    for(; n;){
        if (n.matches(o)) return n;
        n = n.previousElementSibling;
    }
}
function pe(r) {
    let o = __TURBOPACK__imported__module__51268__26["useRef"](r);
    return k1(()=>{
        o.current = r;
    }), o;
}
var k1 = typeof window == "undefined" ? __TURBOPACK__imported__module__51268__26["useEffect"] : __TURBOPACK__imported__module__51268__26["useLayoutEffect"];
function L(r) {
    let o = __TURBOPACK__imported__module__51268__26["useRef"]();
    return o.current === void 0 && (o.current = r()), o;
}
function P(r) {
    let o = ee(), n = ()=>r(o.snapshot());
    return __TURBOPACK__imported__module__51268__26["useSyncExternalStore"](o.subscribe, n, n);
}
function ve(r, o, n, u = []) {
    let c = __TURBOPACK__imported__module__51268__26["useRef"](), d = K1();
    return k1(()=>{
        var b;
        let f = (()=>{
            var m;
            for (let R of n){
                if (typeof R == "string") return R.trim();
                if (typeof R == "object" && "current" in R) return R.current ? (m = R.current.textContent) == null ? void 0 : m.trim() : c.current;
            }
        })(), p = u.map((m)=>m.trim());
        d.value(r, f, p), (b = o.current) == null || b.setAttribute(T, f), c.current = f;
    }), c;
}
var ke = ()=>{
    let [r, o] = __TURBOPACK__imported__module__51268__26["useState"](), n = L(()=>new Map);
    return k1(()=>{
        n.current.forEach((u)=>u()), n.current = new Map;
    }, [
        r
    ]), (u, c)=>{
        n.current.set(u, c), o({});
    };
};
function Me(r) {
    let o = r.type;
    return typeof o == "function" ? o(r.props) : "render" in o ? o.render(r.props) : r;
}
function B1({ asChild: r, children: o }, n) {
    return r && __TURBOPACK__imported__module__51268__26["isValidElement"](o) ? __TURBOPACK__imported__module__51268__26["cloneElement"](Me(o), {
        ref: o.ref
    }, n(o.props.children)) : n(o);
}
var Te = {
    position: "absolute",
    width: "1px",
    height: "1px",
    padding: "0",
    margin: "-1px",
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    borderWidth: "0"
};
;
var __TURBOPACK__imported__module__75157__1 = __TURBOPACK__imported__module__75157__;
// MERGED MODULE: [project]/src/components/ui/dialog.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__16 = __TURBOPACK__imported__module__8063__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-client] (ecmascript) <export * as Dialog>
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/index.parts.js [app-client] (ecmascript) <locals>
;
;
;
;
;
;
;
;
;
;
;
__turbopack_context__.s([], 72525);
var __TURBOPACK__imported__module__72525__ = __turbopack_context__.i(72525);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/backdrop/DialogBackdrop.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__29 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/root/DialogRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__1 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__ = __turbopack_context__.i(16174);
var __TURBOPACK__imported__module__51268__30 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const DialogRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__30["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useDialogRootContext(optional) {
    const dialogRootContext = __TURBOPACK__imported__module__51268__30["useContext"](DialogRootContext);
    if (optional === false && dialogRootContext === undefined) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__["default"])(27));
    }
    return dialogRootContext;
}
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/popupStateMapping.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/stateAttributesMapping.js [app-client] (ecmascript)
;
let TransitionStatusDataAttributes = /*#__PURE__*/ function(TransitionStatusDataAttributes) {
    /**
   * Present when the component is animating in.
   */ TransitionStatusDataAttributes["startingStyle"] = "data-starting-style";
    /**
   * Present when the component is animating out.
   */ TransitionStatusDataAttributes["endingStyle"] = "data-ending-style";
    return TransitionStatusDataAttributes;
}({});
const STARTING_HOOK = {
    [TransitionStatusDataAttributes.startingStyle]: ''
};
const ENDING_HOOK = {
    [TransitionStatusDataAttributes.endingStyle]: ''
};
const transitionStatusMapping = {
    transitionStatus (value1) {
        if (value1 === 'starting') {
            return STARTING_HOOK;
        }
        if (value1 === 'ending') {
            return ENDING_HOOK;
        }
        return null;
    }
};
;
let CommonPopupDataAttributes = function(CommonPopupDataAttributes) {
    /**
   * Present when the popup is open.
   */ CommonPopupDataAttributes["open"] = "data-open";
    /**
   * Present when the popup is closed.
   */ CommonPopupDataAttributes["closed"] = "data-closed";
    /**
   * Present when the popup is animating in.
   */ CommonPopupDataAttributes[CommonPopupDataAttributes["startingStyle"] = TransitionStatusDataAttributes.startingStyle] = "startingStyle";
    /**
   * Present when the popup is animating out.
   */ CommonPopupDataAttributes[CommonPopupDataAttributes["endingStyle"] = TransitionStatusDataAttributes.endingStyle] = "endingStyle";
    /**
   * Present when the anchor is hidden.
   */ CommonPopupDataAttributes["anchorHidden"] = "data-anchor-hidden";
    /**
   * Indicates which side the popup is positioned relative to the trigger.
   * @type { 'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'}
   */ CommonPopupDataAttributes["side"] = "data-side";
    /**
   * Indicates how the popup is aligned relative to specified side.
   * @type {'start' | 'center' | 'end'}
   */ CommonPopupDataAttributes["align"] = "data-align";
    return CommonPopupDataAttributes;
}({});
let CommonTriggerDataAttributes = /*#__PURE__*/ function(CommonTriggerDataAttributes) {
    /**
   * Present when the popup is open.
   */ CommonTriggerDataAttributes["popupOpen"] = "data-popup-open";
    /**
   * Present when a pressable trigger is pressed.
   */ CommonTriggerDataAttributes["pressed"] = "data-pressed";
    return CommonTriggerDataAttributes;
}({});
const TRIGGER_HOOK = {
    [CommonTriggerDataAttributes.popupOpen]: ''
};
const PRESSABLE_TRIGGER_HOOK = {
    [CommonTriggerDataAttributes.popupOpen]: '',
    [CommonTriggerDataAttributes.pressed]: ''
};
const POPUP_OPEN_HOOK = {
    [CommonPopupDataAttributes.open]: ''
};
const POPUP_CLOSED_HOOK = {
    [CommonPopupDataAttributes.closed]: ''
};
const ANCHOR_HIDDEN_HOOK = {
    [CommonPopupDataAttributes.anchorHidden]: ''
};
const triggerOpenStateMapping = {
    open (value1) {
        if (value1) {
            return TRIGGER_HOOK;
        }
        return null;
    }
};
const pressableTriggerOpenStateMapping = {
    open (value1) {
        if (value1) {
            return PRESSABLE_TRIGGER_HOOK;
        }
        return null;
    }
};
const popupStateMapping = {
    open (value1) {
        if (value1) {
            return POPUP_OPEN_HOOK;
        }
        return POPUP_CLOSED_HOOK;
    },
    anchorHidden (value1) {
        if (value1) {
            return ANCHOR_HIDDEN_HOOK;
        }
        return null;
    }
};
'use client';
;
;
;
;
;
const stateAttributesMapping = {
    ...popupStateMapping,
    ...transitionStatusMapping
};
const DialogBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__51268__29["forwardRef"](function DialogBackdrop(componentProps, forwardedRef) {
    const { render, className, style, forceRender = false, ...elementProps } = componentProps;
    const { store } = useDialogRootContext();
    const open = store.useState('open');
    const nested = store.useState('nested');
    const mounted = store.useState('mounted');
    const transitionStatus = store.useState('transitionStatus');
    const state = {
        open,
        transitionStatus
    };
    return (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            store.context.backdropRef,
            forwardedRef
        ],
        stateAttributesMapping,
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }
            },
            elementProps
        ],
        enabled: forceRender || !nested
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/close/DialogClose.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__2 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__31 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__1 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__81833__ = __turbopack_context__.i(81833);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/createBaseUIEventDetails.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
;
;
function createChangeEventDetails(reason, event, trigger, customProperties) {
    let canceled = false;
    let allowPropagation = false;
    const custom = customProperties ?? __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"];
    const details = {
        reason,
        event: event ?? new Event('base-ui'),
        cancel () {
            canceled = true;
        },
        allowPropagation () {
            allowPropagation = true;
        },
        get isCanceled () {
            return canceled;
        },
        get isPropagationAllowed () {
            return allowPropagation;
        },
        trigger,
        ...custom
    };
    return details;
}
function createGenericEventDetails(reason, event, customProperties) {
    const custom = customProperties ?? __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"];
    const details = {
        reason,
        event: event ?? new Event('base-ui'),
        ...custom
    };
    return details;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-client] (ecmascript) <export * as REASONS>
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/reason-parts.js [app-client] (ecmascript)
;
const none = 'none';
const triggerPress = 'trigger-press';
const triggerHover = 'trigger-hover';
const triggerFocus = 'trigger-focus';
const outsidePress = 'outside-press';
const itemPress = 'item-press';
const closePress = 'close-press';
const linkPress = 'link-press';
const clearPress = 'clear-press';
const chipRemovePress = 'chip-remove-press';
const trackPress = 'track-press';
const incrementPress = 'increment-press';
const decrementPress = 'decrement-press';
const inputChange = 'input-change';
const inputClear = 'input-clear';
const inputBlur = 'input-blur';
const inputPaste = 'input-paste';
const inputPress = 'input-press';
const focusOut = 'focus-out';
const escapeKey = 'escape-key';
const closeWatcher = 'close-watcher';
const listNavigation = 'list-navigation';
const keyboard = 'keyboard';
const pointer = 'pointer';
const drag = 'drag';
const wheel = 'wheel';
const scrub = 'scrub';
const cancelOpen = 'cancel-open';
const siblingOpen = 'sibling-open';
const disabled = 'disabled';
const imperativeAction = 'imperative-action';
const swipe = 'swipe';
const windowResize = 'window-resize';
__turbopack_context__.s([
    "cancelOpen",
    0,
    cancelOpen,
    "chipRemovePress",
    0,
    chipRemovePress,
    "clearPress",
    0,
    clearPress,
    "closePress",
    0,
    closePress,
    "closeWatcher",
    0,
    closeWatcher,
    "decrementPress",
    0,
    decrementPress,
    "disabled",
    0,
    disabled,
    "drag",
    0,
    drag,
    "escapeKey",
    0,
    escapeKey,
    "focusOut",
    0,
    focusOut,
    "imperativeAction",
    0,
    imperativeAction,
    "incrementPress",
    0,
    incrementPress,
    "inputBlur",
    0,
    inputBlur,
    "inputChange",
    0,
    inputChange,
    "inputClear",
    0,
    inputClear,
    "inputPaste",
    0,
    inputPaste,
    "inputPress",
    0,
    inputPress,
    "itemPress",
    0,
    itemPress,
    "keyboard",
    0,
    keyboard,
    "linkPress",
    0,
    linkPress,
    "listNavigation",
    0,
    listNavigation,
    "none",
    0,
    none,
    "outsidePress",
    0,
    outsidePress,
    "pointer",
    0,
    pointer,
    "scrub",
    0,
    scrub,
    "siblingOpen",
    0,
    siblingOpen,
    "swipe",
    0,
    swipe,
    "trackPress",
    0,
    trackPress,
    "triggerFocus",
    0,
    triggerFocus,
    "triggerHover",
    0,
    triggerHover,
    "triggerPress",
    0,
    triggerPress,
    "wheel",
    0,
    wheel,
    "windowResize",
    0,
    windowResize
], 54906);
var __TURBOPACK__imported__module__54906__ = __turbopack_context__.i(54906);
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
const DialogClose1 = /*#__PURE__*/ __TURBOPACK__imported__module__51268__31["forwardRef"](function DialogClose(componentProps, forwardedRef) {
    const { render, className, disabled = false, nativeButton = true, style, ...elementProps } = componentProps;
    const { store } = useDialogRootContext();
    const open = store.useState('open');
    function handleClick(event) {
        if (open) {
            store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.closePress, event.nativeEvent));
        }
    }
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__81833__["useButton"])({
        disabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    return (0, __TURBOPACK__imported__module__19996__1["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            {
                onClick: handleClick
            },
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/description/DialogDescription.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__3 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__32 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__2 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useId.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__33 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/safeReact.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__34 = __TURBOPACK__imported__module__51268__;
;
const SafeReact = {
    ...__TURBOPACK__imported__module__51268__34
};
'use client';
;
;
let globalId = 0;
// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride, prefix = 'mui') {
    const [defaultId, setDefaultId] = __TURBOPACK__imported__module__51268__33["useState"](idOverride);
    const id = idOverride || defaultId;
    __TURBOPACK__imported__module__51268__33["useEffect"](()=>{
        if (defaultId == null) {
            // Fallback to this default id when possible.
            // Use the incrementing value for client-side rendering only.
            // We can't use it server-side.
            // If you want to use random values please consider the Birthday Problem: https://en.wikipedia.org/wiki/Birthday_problem
            globalId += 1;
            setDefaultId(`${prefix}-${globalId}`);
        }
    }, [
        defaultId,
        prefix
    ]);
    return id;
}
const maybeReactUseId = SafeReact.useId;
function useId1(idOverride, prefix) {
    // React.useId() is only available from React 17.0.0.
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
    }
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride, prefix);
}
'use client';
;
function useBaseUiId(idOverride) {
    return useId1(idOverride, 'base-ui');
}
'use client';
;
;
;
;
const DialogDescription1 = /*#__PURE__*/ __TURBOPACK__imported__module__51268__32["forwardRef"](function DialogDescription(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, ...elementProps } = componentProps;
    const { store } = useDialogRootContext();
    const id = useBaseUiId(idProp);
    store.useSyncedValueWithCleanup('descriptionElementId', id);
    return (0, __TURBOPACK__imported__module__19996__2["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/popup/DialogPopup.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__4 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__35 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingFocusManager.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__36 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__92615__1 = __turbopack_context__.i(92615);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/addEventListener.js [app-client] (ecmascript)
;
function addEventListener(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    return ()=>{
        target.removeEventListener(type, listener, options);
    };
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/mergeCleanups.js [app-client] (ecmascript)
;
function mergeCleanups(...cleanups) {
    return ()=>{
        for(let i = 0; i < cleanups.length; i += 1){
            const cleanup = cleanups[i];
            if (cleanup) {
                cleanup();
            }
        }
    };
}
var __TURBOPACK__imported__module__90741__ = __turbopack_context__.i(90741);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useValueAsRef.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
'use client';
;
;
function useValueAsRef(value1) {
    const latest = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(createLatestRef, value1).current;
    latest.next = value1;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(latest.effect);
    return latest;
}
function createLatestRef(value1) {
    const latest = {
        current: value1,
        next: value1,
        effect: ()=>{
            latest.current = latest.next;
        }
    };
    return latest;
}
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__91900__1 = __TURBOPACK__imported__module__91900__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67452__1 = __TURBOPACK__imported__module__67452__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useOnMount.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__37 = __TURBOPACK__imported__module__51268__;
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__51268__37["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
'use client';
;
;
const EMPTY1 = 0;
class Timeout {
    static create() {
        return new Timeout();
    }
    currentId = EMPTY1;
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ start(delay, fn) {
        this.clear();
        this.currentId = setTimeout(()=>{
            this.currentId = EMPTY1;
            fn();
        }, delay); /* Node.js types are enabled in development */ 
    }
    isStarted() {
        return this.currentId !== EMPTY1;
    }
    clear = ()=>{
        if (this.currentId !== EMPTY1) {
            clearTimeout(this.currentId);
            this.currentId = EMPTY1;
        }
    };
    disposeEffect = ()=>{
        return this.clear;
    };
}
function useTimeout() {
    const timeout = (0, __TURBOPACK__imported__module__67452__1["useRefWithInit"])(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/detectBrowser.js [app-client] (ecmascript)
;
const hasNavigator = typeof navigator !== 'undefined';
const nav = getNavigatorData();
const platform = getPlatform();
const userAgent = getUserAgent();
const isWebKit = typeof CSS === 'undefined' || !CSS.supports ? false : CSS.supports('-webkit-backdrop-filter:none');
const isIOS = // iPads can claim to be MacIntel
nav.platform === 'MacIntel' && nav.maxTouchPoints > 1 ? true : /iP(hone|ad|od)|iOS/.test(nav.platform);
const isFirefox = hasNavigator && /firefox/i.test(userAgent);
const isSafari = hasNavigator && /apple/i.test(navigator.vendor);
const isEdge = hasNavigator && /Edg/i.test(userAgent);
const isAndroid = hasNavigator && /android/i.test(platform) || /android/i.test(userAgent);
const isMac = hasNavigator && platform.toLowerCase().startsWith('mac') && !navigator.maxTouchPoints;
const isJSDOM = userAgent.includes('jsdom/');
// Avoid Chrome DevTools blue warning.
function getNavigatorData() {
    if (!hasNavigator) {
        return {
            platform: '',
            maxTouchPoints: -1
        };
    }
    const uaData = navigator.userAgentData;
    if (uaData?.platform) {
        return {
            platform: uaData.platform,
            maxTouchPoints: navigator.maxTouchPoints
        };
    }
    return {
        platform: navigator.platform ?? '',
        maxTouchPoints: navigator.maxTouchPoints ?? -1
    };
}
function getUserAgent() {
    if (!hasNavigator) {
        return '';
    }
    const uaData = navigator.userAgentData;
    if (uaData && Array.isArray(uaData.brands)) {
        return uaData.brands.map(({ brand, version })=>`${brand}/${version}`).join(' ');
    }
    return navigator.userAgent;
}
function getPlatform() {
    if (!hasNavigator) {
        return '';
    }
    const uaData = navigator.userAgentData;
    if (uaData?.platform) {
        return uaData.platform;
    }
    return navigator.platform ?? '';
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useAnimationFrame.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__5 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__67452__2 = __TURBOPACK__imported__module__67452__;
'use client';
;
;
/** Unlike `setTimeout`, rAF doesn't guarantee a positive integer return value, so we can't have
 * a monomorphic `uint` type with `0` meaning empty.
 * See warning note at:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#return_value */ const EMPTY2 = null;
let LAST_RAF = globalThis.requestAnimationFrame;
class Scheduler {
    /* This implementation uses an array as a backing data-structure for frame callbacks.
   * It allows `O(1)` callback cancelling by inserting a `null` in the array, though it
   * never calls the native `cancelAnimationFrame` if there are no frames left. This can
   * be much more efficient if there is a call pattern that alterns as
   * "request-cancel-request-cancel-…".
   * But in the case of "request-request-…-cancel-cancel-…", it leaves the final animation
   * frame to run anyway. We turn that frame into a `O(1)` no-op via `callbacksCount`. */ callbacks = [];
    callbacksCount = 0;
    nextId = 1;
    startId = 1;
    isScheduled = false;
    tick = (timestamp)=>{
        this.isScheduled = false;
        const currentCallbacks = this.callbacks;
        const currentCallbacksCount = this.callbacksCount;
        // Update these before iterating, callbacks could call `requestAnimationFrame` again.
        this.callbacks = [];
        this.callbacksCount = 0;
        this.startId = this.nextId;
        if (currentCallbacksCount > 0) {
            for(let i = 0; i < currentCallbacks.length; i += 1){
                currentCallbacks[i]?.(timestamp);
            }
        }
    };
    request(fn) {
        const id = this.nextId;
        this.nextId += 1;
        this.callbacks.push(fn);
        this.callbacksCount += 1;
        /* In a test environment with fake timers, a fake `requestAnimationFrame` can be called
     * but there's no guarantee that the animation frame will actually run before the fake
     * timers are teared, which leaves `isScheduled` set, but won't run our `tick()`. */ const didRAFChange = ("TURBOPACK compile-time value", "production") !== 'production' && LAST_RAF !== requestAnimationFrame && (LAST_RAF = requestAnimationFrame, true);
        if (!this.isScheduled || didRAFChange) {
            requestAnimationFrame(this.tick);
            this.isScheduled = true;
        }
        return id;
    }
    cancel(id) {
        const index = id - this.startId;
        if (index < 0 || index >= this.callbacks.length) {
            return;
        }
        this.callbacks[index] = null;
        this.callbacksCount -= 1;
    }
}
const scheduler = new Scheduler();
class AnimationFrame {
    static create() {
        return new AnimationFrame();
    }
    static request(fn) {
        return scheduler.request(fn);
    }
    static cancel(id) {
        return scheduler.cancel(id);
    }
    currentId = EMPTY2;
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ request(fn) {
        this.cancel();
        this.currentId = scheduler.request(()=>{
            this.currentId = EMPTY2;
            fn();
        });
    }
    cancel = ()=>{
        if (this.currentId !== EMPTY2) {
            scheduler.cancel(this.currentId);
            this.currentId = EMPTY2;
        }
    };
    disposeEffect = ()=>{
        return this.cancel;
    };
}
function useAnimationFrame() {
    const timeout = (0, __TURBOPACK__imported__module__67452__2["useRefWithInit"])(AnimationFrame.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/owner.js [app-client] (ecmascript) <locals>
;
;
function ownerDocument(node) {
    return node?.ownerDocument || document;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript) <export getWindow as ownerWindow>
;
var __TURBOPACK__imported__module__92615__2 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__92615__2 = __TURBOPACK__imported__module__92615__1;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/FocusGuard.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__6 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__38 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__2 = __TURBOPACK__imported__module__91900__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/visuallyHidden.js [app-client] (ecmascript)
;
const visuallyHiddenBase = {
    clipPath: 'inset(50%)',
    overflow: 'hidden',
    whiteSpace: 'nowrap',
    border: 0,
    padding: 0,
    width: 1,
    height: 1,
    margin: -1
};
const visuallyHidden = {
    ...visuallyHiddenBase,
    position: 'fixed',
    top: 0,
    left: 0
};
const visuallyHiddenInput = {
    ...visuallyHiddenBase,
    position: 'absolute'
};
var __TURBOPACK__imported__module__8063__17 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
const FocusGuard = /*#__PURE__*/ __TURBOPACK__imported__module__51268__38["forwardRef"](function FocusGuard(props, ref) {
    const [role, setRole] = __TURBOPACK__imported__module__51268__38["useState"]();
    (0, __TURBOPACK__imported__module__91900__2["useIsoLayoutEffect"])(()=>{
        if (isSafari) {
            // Unlike other screen readers such as NVDA and JAWS, the virtual cursor
            // on VoiceOver does trigger the onFocus event, so we can use the focus
            // trap element. On Safari, only buttons trigger the onFocus event.
            setRole('button');
        }
    }, []);
    const restProps = {
        tabIndex: 0,
        // Role is only for VoiceOver
        role
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__17["jsx"])("span", {
        ...props,
        ref: ref,
        style: visuallyHidden,
        "aria-hidden": role ? undefined : true,
        ...restProps,
        "data-base-ui-focus-guard": ""
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/shadowDom.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__3 = __TURBOPACK__imported__module__92615__1;
;
function activeElement(doc) {
    let element = doc.activeElement;
    while(element?.shadowRoot?.activeElement != null){
        element = element.shadowRoot.activeElement;
    }
    return element;
}
function contains(parent, child) {
    if (!parent || !child) {
        return false;
    }
    const rootNode = child.getRootNode?.();
    // First, attempt with the faster native method.
    if (parent.contains(child)) {
        return true;
    }
    // Then fall back to traversing out of shadow roots when needed.
    if (rootNode && (0, __TURBOPACK__imported__module__92615__3["isShadowRoot"])(rootNode)) {
        let next = child;
        while(next){
            if (parent === next) {
                return true;
            }
            next = next.parentNode || next.host;
        }
    }
    return false;
}
function getTarget(event) {
    if ('composedPath' in event) {
        return event.composedPath()[0];
    }
    // TS assumes `composedPath()` always exists, but older browsers without
    // shadow DOM support still fall back to `target`.
    return event.target;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/element.js [app-client] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__92615__4 = __TURBOPACK__imported__module__92615__1;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/constants.js [app-client] (ecmascript)
;
const FOCUSABLE_ATTRIBUTE = 'data-base-ui-focusable';
const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
;
;
;
;
;
function isTargetInsideEnabledTrigger(target, triggerElements) {
    if (!(0, __TURBOPACK__imported__module__92615__4["isElement"])(target)) {
        return false;
    }
    const targetElement = target;
    if (triggerElements.hasElement(targetElement)) {
        return !targetElement.hasAttribute('data-trigger-disabled');
    }
    for (const [, trigger] of triggerElements.entries()){
        if (contains(trigger, targetElement)) {
            return !trigger.hasAttribute('data-trigger-disabled');
        }
    }
    return false;
}
function isEventTargetWithin(event, node) {
    if (node == null) {
        return false;
    }
    if ('composedPath' in event) {
        return event.composedPath().includes(node);
    }
    // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
    const eventAgain = event;
    return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
    return element.matches('html,body');
}
function isTypeableElement(element) {
    return (0, __TURBOPACK__imported__module__92615__4["isHTMLElement"])(element) && element.matches(TYPEABLE_SELECTOR);
}
function isInteractiveElement(element) {
    return element?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${TYPEABLE_SELECTOR}`) != null;
}
function isTypeableCombobox(element) {
    if (!element) {
        return false;
    }
    return element.getAttribute('role') === 'combobox' && isTypeableElement(element);
}
function matchesFocusVisible(element) {
    // We don't want to block focus from working with `visibleOnly`
    // (JSDOM doesn't match `:focus-visible` when the element has `:focus`)
    if (!element || isJSDOM) {
        return true;
    }
    try {
        return element.matches(':focus-visible');
    } catch (_e) {
        return true;
    }
}
function getFloatingFocusElement(floatingElement) {
    if (!floatingElement) {
        return null;
    }
    // Try to find the element that has `{...getFloatingProps()}` spread on it.
    // This indicates the floating element is acting as a positioning wrapper, and
    // so focus should be managed on the child element with the event handlers and
    // aria props.
    return floatingElement.hasAttribute(FOCUSABLE_ATTRIBUTE) ? floatingElement : floatingElement.querySelector(`[${FOCUSABLE_ATTRIBUTE}]`) || floatingElement;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/event.js [app-client] (ecmascript)
;
;
function stopEvent(event) {
    event.preventDefault();
    event.stopPropagation();
}
function isReactEvent(event) {
    return 'nativeEvent' in event;
}
function isVirtualClick(event) {
    if (event.pointerType === '' && event.isTrusted) {
        return true;
    }
    if (isAndroid && event.pointerType) {
        return event.type === 'click' && event.buttons === 1;
    }
    return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
    if (isJSDOM) {
        return false;
    }
    return !isAndroid && event.width === 0 && event.height === 0 || isAndroid && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse' || // iOS VoiceOver returns 0.333• for width/height.
    event.width < 1 && event.height < 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'touch';
}
function isMouseLikePointerType(pointerType, strict) {
    // On some Linux machines with Chromium, mouse inputs return a `pointerType`
    // of "pen": https://github.com/floating-ui/floating-ui/issues/2015
    const values = [
        'mouse',
        'pen'
    ];
    if (!strict) {
        values.push('', undefined);
    }
    return values.includes(pointerType);
}
function isClickLikeEvent(event) {
    const type = event.type;
    return type === 'click' || type === 'mousedown' || type === 'keydown' || type === 'keyup';
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/tabbable.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__5 = __TURBOPACK__imported__module__92615__1;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/composite.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__7 = __TURBOPACK__imported__module__96746__;
// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.mjs [app-client] (ecmascript)
;
/**
 * Custom positioning reference element.
 * @see https://floating-ui.com/docs/virtual-elements
 */ const sides = [
    'top',
    'right',
    'bottom',
    'left'
];
const alignments = [
    'start',
    'end'
];
const placements = /*#__PURE__*/ sides.reduce((acc, side)=>acc.concat(side, side + "-" + alignments[0], side + "-" + alignments[1]), []);
const min = Math.min;
const max = Math.max;
const round = Math.round;
const floor = Math.floor;
const createCoords = (v)=>({
        x: v,
        y: v
    });
const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
};
function clamp(start, value1, end) {
    return max(start, min(value1, end));
}
function evaluate(value1, param) {
    return typeof value1 === 'function' ? value1(param) : value1;
}
function getSide(placement) {
    return placement.split('-')[0];
}
function getAlignment(placement) {
    return placement.split('-')[1];
}
function getOppositeAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
}
function getAxisLength(axis) {
    return axis === 'y' ? 'height' : 'width';
}
function getSideAxis(placement) {
    const firstChar = placement[0];
    return firstChar === 't' || firstChar === 'b' ? 'y' : 'x';
}
function getAlignmentAxis(placement) {
    return getOppositeAxis(getSideAxis(placement));
}
function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
        rtl = false;
    }
    const alignment = getAlignment(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const length = getAxisLength(alignmentAxis);
    let mainAlignmentSide = alignmentAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
        mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return [
        mainAlignmentSide,
        getOppositePlacement(mainAlignmentSide)
    ];
}
function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [
        getOppositeAlignmentPlacement(placement),
        oppositePlacement,
        getOppositeAlignmentPlacement(oppositePlacement)
    ];
}
function getOppositeAlignmentPlacement(placement) {
    return placement.includes('start') ? placement.replace('start', 'end') : placement.replace('end', 'start');
}
const lrPlacement = [
    'left',
    'right'
];
const rlPlacement = [
    'right',
    'left'
];
const tbPlacement = [
    'top',
    'bottom'
];
const btPlacement = [
    'bottom',
    'top'
];
function getSideList(side, isStart, rtl) {
    switch(side){
        case 'top':
        case 'bottom':
            if (rtl) return isStart ? rlPlacement : lrPlacement;
            return isStart ? lrPlacement : rlPlacement;
        case 'left':
        case 'right':
            return isStart ? tbPlacement : btPlacement;
        default:
            return [];
    }
}
function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
        list = list.map((side)=>side + "-" + alignment);
        if (flipAlignment) {
            list = list.concat(list.map(getOppositeAlignmentPlacement));
        }
    }
    return list;
}
function getOppositePlacement(placement) {
    const side = getSide(placement);
    return oppositeSideMap[side] + placement.slice(side.length);
}
function expandPaddingObject(padding) {
    return {
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        ...padding
    };
}
function getPaddingObject(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
        top: padding,
        right: padding,
        bottom: padding,
        left: padding
    };
}
function rectToClientRect(rect) {
    const { x, y, width, height } = rect;
    return {
        width,
        height,
        top: y,
        left: x,
        right: x + width,
        bottom: y + height,
        x,
        y
    };
}
;
var __TURBOPACK__imported__module__92615__6 = __TURBOPACK__imported__module__92615__1;
;
;
;
;
function isDifferentGridRow(index, cols, prevRow) {
    return Math.floor(index / cols) !== prevRow;
}
function isIndexOutOfListBounds(list, index) {
    return index < 0 || index >= list.length;
}
function getMinListIndex(listRef, disabledIndices) {
    return findNonDisabledListIndex(listRef.current, {
        disabledIndices
    });
}
function getMaxListIndex(listRef, disabledIndices) {
    return findNonDisabledListIndex(listRef.current, {
        decrement: true,
        startingIndex: listRef.current.length,
        disabledIndices
    });
}
function findNonDisabledListIndex(list, { startingIndex = -1, decrement = false, disabledIndices, amount = 1 } = {}) {
    let index = startingIndex;
    do {
        index += decrement ? -amount : amount;
    }while (index >= 0 && index <= list.length - 1 && isListIndexDisabled(list, index, disabledIndices))
    return index;
}
function getGridNavigatedIndex(list, { event, orientation, loopFocus, onLoop, rtl, cols, disabledIndices, minIndex, maxIndex, prevIndex, stopEvent: stop = false }) {
    let nextIndex = prevIndex;
    let verticalDirection;
    if (event.key === ARROW_UP) {
        verticalDirection = 'up';
    } else if (event.key === ARROW_DOWN) {
        verticalDirection = 'down';
    }
    if (verticalDirection) {
        // -------------------------------------------------------------------------
        // Detect row structure only when handling vertical navigation. This keeps
        // the non-vertical key paths free from row inference work.
        // -------------------------------------------------------------------------
        const rows = [];
        const rowIndexMap = [];
        let hasRoleRow = false;
        let visibleItemCount = 0;
        {
            let currentRowEl = null;
            let currentRowIndex = -1;
            list.forEach((el, idx)=>{
                if (el == null) {
                    return;
                }
                visibleItemCount += 1;
                const rowEl = el.closest('[role="row"]');
                if (rowEl) {
                    hasRoleRow = true;
                }
                if (rowEl !== currentRowEl || currentRowIndex === -1) {
                    currentRowEl = rowEl;
                    currentRowIndex += 1;
                    rows[currentRowIndex] = [];
                }
                rows[currentRowIndex].push(idx);
                rowIndexMap[idx] = currentRowIndex;
            });
        }
        let hasDomRows = false;
        let inferredDomCols = 0;
        if (hasRoleRow) {
            for (const row of rows){
                const rowLength = row.length;
                if (rowLength > inferredDomCols) {
                    inferredDomCols = rowLength;
                }
                if (rowLength !== cols) {
                    hasDomRows = true;
                }
            }
        }
        const hasVirtualizedGaps = hasDomRows && visibleItemCount < list.length;
        const verticalCols = inferredDomCols || cols;
        const navigateVertically = (direction)=>{
            if (!hasDomRows || prevIndex === -1) {
                return undefined;
            }
            const currentRow = rowIndexMap[prevIndex];
            if (currentRow == null) {
                return undefined;
            }
            const colInRow = rows[currentRow].indexOf(prevIndex);
            const step = direction === 'up' ? -1 : 1;
            for(let nextRow = currentRow + step, i = 0; i < rows.length; i += 1, nextRow += step){
                if (nextRow < 0 || nextRow >= rows.length) {
                    if (!loopFocus || hasVirtualizedGaps) {
                        return undefined;
                    }
                    nextRow = nextRow < 0 ? rows.length - 1 : 0;
                    if (onLoop) {
                        const clampedCol = Math.min(colInRow, rows[nextRow].length - 1);
                        const targetItemIndex = rows[nextRow][clampedCol] ?? rows[nextRow][0];
                        const returnedItemIndex = onLoop(event, prevIndex, targetItemIndex);
                        nextRow = rowIndexMap[returnedItemIndex] ?? nextRow;
                    }
                }
                const targetRow = rows[nextRow];
                for(let col = Math.min(colInRow, targetRow.length - 1); col >= 0; col -= 1){
                    const candidate = targetRow[col];
                    if (!isListIndexDisabled(list, candidate, disabledIndices)) {
                        return candidate;
                    }
                }
            }
            return undefined;
        };
        const navigateVerticallyWithInferredRows = (direction)=>{
            if (!hasVirtualizedGaps || prevIndex === -1) {
                return undefined;
            }
            const colInRow = prevIndex % verticalCols;
            const rowStep = direction === 'up' ? -verticalCols : verticalCols;
            const lastRowStart = maxIndex - maxIndex % verticalCols;
            const rowCount = floor(maxIndex / verticalCols) + 1;
            for(let rowStart = prevIndex - colInRow + rowStep, i = 0; i < rowCount; i += 1, rowStart += rowStep){
                if (rowStart < 0 || rowStart > maxIndex) {
                    if (!loopFocus) {
                        return undefined;
                    }
                    rowStart = rowStart < 0 ? lastRowStart : 0;
                }
                const rowEnd = Math.min(rowStart + verticalCols - 1, maxIndex);
                for(let candidate = Math.min(rowStart + colInRow, rowEnd); candidate >= rowStart; candidate -= 1){
                    if (!isListIndexDisabled(list, candidate, disabledIndices)) {
                        return candidate;
                    }
                }
            }
            return undefined;
        };
        if (stop) {
            stopEvent(event);
        }
        const verticalCandidate = navigateVertically(verticalDirection) ?? navigateVerticallyWithInferredRows(verticalDirection);
        if (verticalCandidate !== undefined) {
            nextIndex = verticalCandidate;
        } else if (prevIndex === -1) {
            nextIndex = verticalDirection === 'up' ? maxIndex : minIndex;
        } else {
            nextIndex = findNonDisabledListIndex(list, {
                startingIndex: prevIndex,
                amount: verticalCols,
                decrement: verticalDirection === 'up',
                disabledIndices
            });
            if (loopFocus) {
                if (verticalDirection === 'up' && (prevIndex - verticalCols < minIndex || nextIndex < 0)) {
                    const col = prevIndex % verticalCols;
                    const maxCol = maxIndex % verticalCols;
                    const offset = maxIndex - (maxCol - col);
                    if (maxCol === col) {
                        nextIndex = maxIndex;
                    } else {
                        nextIndex = maxCol > col ? offset : offset - verticalCols;
                    }
                    if (onLoop) {
                        nextIndex = onLoop(event, prevIndex, nextIndex);
                    }
                }
                if (verticalDirection === 'down' && prevIndex + verticalCols > maxIndex) {
                    nextIndex = findNonDisabledListIndex(list, {
                        startingIndex: prevIndex % verticalCols - verticalCols,
                        amount: verticalCols,
                        disabledIndices
                    });
                    if (onLoop) {
                        nextIndex = onLoop(event, prevIndex, nextIndex);
                    }
                }
            }
        }
        if (isIndexOutOfListBounds(list, nextIndex)) {
            nextIndex = prevIndex;
        }
    }
    // Remains on the same row/column.
    if (orientation === 'both') {
        const prevRow = floor(prevIndex / cols);
        if (event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT)) {
            if (stop) {
                stopEvent(event);
            }
            if (prevIndex % cols !== cols - 1) {
                nextIndex = findNonDisabledListIndex(list, {
                    startingIndex: prevIndex,
                    disabledIndices
                });
                if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
                    nextIndex = findNonDisabledListIndex(list, {
                        startingIndex: prevIndex - prevIndex % cols - 1,
                        disabledIndices
                    });
                    if (onLoop) {
                        nextIndex = onLoop(event, prevIndex, nextIndex);
                    }
                }
            } else if (loopFocus) {
                nextIndex = findNonDisabledListIndex(list, {
                    startingIndex: prevIndex - prevIndex % cols - 1,
                    disabledIndices
                });
                if (onLoop) {
                    nextIndex = onLoop(event, prevIndex, nextIndex);
                }
            }
            if (isDifferentGridRow(nextIndex, cols, prevRow)) {
                nextIndex = prevIndex;
            }
        }
        if (event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT)) {
            if (stop) {
                stopEvent(event);
            }
            if (prevIndex % cols !== 0) {
                nextIndex = findNonDisabledListIndex(list, {
                    startingIndex: prevIndex,
                    decrement: true,
                    disabledIndices
                });
                if (loopFocus && isDifferentGridRow(nextIndex, cols, prevRow)) {
                    nextIndex = findNonDisabledListIndex(list, {
                        startingIndex: prevIndex + (cols - prevIndex % cols),
                        decrement: true,
                        disabledIndices
                    });
                    if (onLoop) {
                        nextIndex = onLoop(event, prevIndex, nextIndex);
                    }
                }
            } else if (loopFocus) {
                nextIndex = findNonDisabledListIndex(list, {
                    startingIndex: prevIndex + (cols - prevIndex % cols),
                    decrement: true,
                    disabledIndices
                });
                if (onLoop) {
                    nextIndex = onLoop(event, prevIndex, nextIndex);
                }
            }
            if (isDifferentGridRow(nextIndex, cols, prevRow)) {
                nextIndex = prevIndex;
            }
        }
        const lastRow = floor(maxIndex / cols) === prevRow;
        if (isIndexOutOfListBounds(list, nextIndex)) {
            if (loopFocus && lastRow) {
                nextIndex = event.key === (rtl ? ARROW_RIGHT : ARROW_LEFT) ? maxIndex : findNonDisabledListIndex(list, {
                    startingIndex: prevIndex - prevIndex % cols - 1,
                    disabledIndices
                });
                if (onLoop) {
                    nextIndex = onLoop(event, prevIndex, nextIndex);
                }
            } else {
                nextIndex = prevIndex;
            }
        }
    }
    return nextIndex;
}
function createGridCellMap(sizes, cols, dense) {
    const cellMap = [];
    let startIndex = 0;
    sizes.forEach(({ width, height }, index)=>{
        if (width > cols) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }
        let itemPlaced = false;
        if (dense) {
            startIndex = 0;
        }
        while(!itemPlaced){
            const targetCells = [];
            for(let i = 0; i < width; i += 1){
                for(let j = 0; j < height; j += 1){
                    targetCells.push(startIndex + i + j * cols);
                }
            }
            if (startIndex % cols + width <= cols && targetCells.every((cell)=>cellMap[cell] == null)) {
                targetCells.forEach((cell)=>{
                    cellMap[cell] = index;
                });
                itemPlaced = true;
            } else {
                startIndex += 1;
            }
        }
    });
    // convert into a non-sparse array
    return [
        ...cellMap
    ];
}
function getGridCellIndexOfCorner(index, sizes, cellMap, cols, corner) {
    if (index === -1) {
        return -1;
    }
    const firstCellIndex = cellMap.indexOf(index);
    const sizeItem = sizes[index];
    switch(corner){
        case 'tl':
            return firstCellIndex;
        case 'tr':
            if (!sizeItem) {
                return firstCellIndex;
            }
            return firstCellIndex + sizeItem.width - 1;
        case 'bl':
            if (!sizeItem) {
                return firstCellIndex;
            }
            return firstCellIndex + (sizeItem.height - 1) * cols;
        case 'br':
            return cellMap.lastIndexOf(index);
        default:
            return -1;
    }
}
function getGridCellIndices(indices, cellMap) {
    return cellMap.flatMap((index, cellIndex)=>indices.includes(index) ? [
            cellIndex
        ] : []);
}
function isListIndexDisabled(list, index, disabledIndices) {
    const isExplicitlyDisabled = typeof disabledIndices === 'function' ? disabledIndices(index) : disabledIndices?.includes(index) ?? false;
    if (isExplicitlyDisabled) {
        return true;
    }
    const element = list[index];
    if (!element) {
        return false;
    }
    if (!isElementVisible(element)) {
        return true;
    }
    return !disabledIndices && (element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true');
}
function isHiddenByStyles(styles) {
    return styles.visibility === 'hidden' || styles.visibility === 'collapse';
}
function isElementVisible(element, styles = element ? (0, __TURBOPACK__imported__module__92615__6["getComputedStyle"])(element) : null) {
    if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
        return false;
    }
    if (typeof element.checkVisibility === 'function') {
        return element.checkVisibility();
    }
    return styles.display !== 'none' && styles.display !== 'contents';
}
;
;
;
;
const CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
    const assignedSlot = element.assignedSlot;
    if (assignedSlot) {
        return assignedSlot;
    }
    if (element.parentElement) {
        return element.parentElement;
    }
    const rootNode = element.getRootNode();
    return (0, __TURBOPACK__imported__module__92615__5["isShadowRoot"])(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
    for (const child of Array.from(details.children)){
        if ((0, __TURBOPACK__imported__module__92615__5["getNodeName"])(child) === 'summary') {
            return child;
        }
    }
    return null;
}
function isWithinOpenDetailsSummary(element, details) {
    const summary = getDetailsSummary(details);
    return !!summary && (element === summary || contains(summary, element));
}
function isFocusableCandidate(element) {
    const nodeName = element ? (0, __TURBOPACK__imported__module__92615__5["getNodeName"])(element) : '';
    return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== 'summary' || element.parentElement != null && (0, __TURBOPACK__imported__module__92615__5["getNodeName"])(element.parentElement) === 'details' && getDetailsSummary(element.parentElement) === element) && (nodeName !== 'details' || getDetailsSummary(element) == null) && (nodeName !== 'input' || element.type !== 'hidden');
}
function isFocusableElement(element) {
    if (!isFocusableCandidate(element) || !element.isConnected || element.matches(':disabled')) {
        return false;
    }
    for(let current = element; current; current = getParentElement(current)){
        const isAncestor = current !== element;
        const isSlot = (0, __TURBOPACK__imported__module__92615__5["getNodeName"])(current) === 'slot';
        if (current.hasAttribute('inert')) {
            return false;
        }
        if (isAncestor && (0, __TURBOPACK__imported__module__92615__5["getNodeName"])(current) === 'details' && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute('hidden') || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
            return false;
        }
    }
    return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
    const styles = (0, __TURBOPACK__imported__module__92615__5["getComputedStyle"])(element);
    if (!isAncestor) {
        return isElementVisible(element, styles);
    }
    return styles.display !== 'none';
}
function getTabIndex(element) {
    const tabIndex = element.tabIndex;
    if (tabIndex < 0) {
        const nodeName = (0, __TURBOPACK__imported__module__92615__5["getNodeName"])(element);
        if (nodeName === 'details' || nodeName === 'audio' || nodeName === 'video' || (0, __TURBOPACK__imported__module__92615__5["isHTMLElement"])(element) && element.isContentEditable) {
            return 0;
        }
    }
    return tabIndex;
}
function getNamedRadioInput(element) {
    if ((0, __TURBOPACK__imported__module__92615__5["getNodeName"])(element) !== 'input') {
        return null;
    }
    const input = element;
    return input.type === 'radio' && input.name !== '' ? input : null;
}
function isTabbableRadio(element, candidates) {
    const input = getNamedRadioInput(element);
    if (!input) {
        return true;
    }
    const checkedRadio = candidates.find((candidate)=>{
        const radio = getNamedRadioInput(candidate);
        return radio?.name === input.name && radio.form === input.form && radio.checked;
    });
    if (checkedRadio) {
        return checkedRadio === input;
    }
    return candidates.find((candidate)=>{
        const radio = getNamedRadioInput(candidate);
        return radio?.name === input.name && radio.form === input.form;
    }) === input;
}
function getComposedChildren(container) {
    if ((0, __TURBOPACK__imported__module__92615__5["isHTMLElement"])(container) && (0, __TURBOPACK__imported__module__92615__5["getNodeName"])(container) === 'slot') {
        const assignedElements = container.assignedElements({
            flatten: true
        });
        if (assignedElements.length > 0) {
            return assignedElements;
        }
    }
    if ((0, __TURBOPACK__imported__module__92615__5["isHTMLElement"])(container) && container.shadowRoot) {
        return Array.from(container.shadowRoot.children);
    }
    return Array.from(container.children);
}
function appendCandidates(container, list) {
    getComposedChildren(container).forEach((child)=>{
        if (isFocusableCandidate(child)) {
            list.push(child);
        }
        appendCandidates(child, list);
    });
}
function appendMatchingElements(container, selector, list) {
    getComposedChildren(container).forEach((child)=>{
        if ((0, __TURBOPACK__imported__module__92615__5["isHTMLElement"])(child) && child.matches(selector)) {
            list.push(child);
        }
        appendMatchingElements(child, selector, list);
    });
}
function isTabbable(element) {
    return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
    const candidates = [];
    appendCandidates(container, candidates);
    return candidates.filter(isFocusableElement);
}
function tabbable(container) {
    const candidates = focusable(container);
    return candidates.filter((element)=>getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
    const list = tabbable(container);
    const len = list.length;
    if (len === 0) {
        return undefined;
    }
    const active = activeElement(ownerDocument(container));
    const index = list.indexOf(active);
    // eslint-disable-next-line no-nested-ternary
    const nextIndex = index === -1 ? dir === 1 ? 0 : len - 1 : index + dir;
    return list[nextIndex];
}
function getNextTabbable(referenceElement) {
    return getTabbableIn(ownerDocument(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
    return getTabbableIn(ownerDocument(referenceElement).body, -1) || referenceElement;
}
function getTabbableNearElement(referenceElement, dir) {
    if (!referenceElement) {
        return null;
    }
    const list = tabbable(ownerDocument(referenceElement).body);
    const elementCount = list.length;
    if (elementCount === 0) {
        return null;
    }
    const index = list.indexOf(referenceElement);
    if (index === -1) {
        return null;
    }
    const nextIndex = (index + dir + elementCount) % elementCount;
    return list[nextIndex];
}
function getTabbableAfterElement(referenceElement) {
    return getTabbableNearElement(referenceElement, 1);
}
function getTabbableBeforeElement(referenceElement) {
    return getTabbableNearElement(referenceElement, -1);
}
function isOutsideEvent(event, container) {
    const containerElement = container || event.currentTarget;
    const relatedTarget = event.relatedTarget;
    return !relatedTarget || !contains(containerElement, relatedTarget);
}
function disableFocusInside(container) {
    const tabbableElements = tabbable(container);
    tabbableElements.forEach((element)=>{
        element.dataset.tabindex = element.getAttribute('tabindex') || '';
        element.setAttribute('tabindex', '-1');
    });
}
function enableFocusInside(container) {
    const elements = [];
    appendMatchingElements(container, '[data-tabindex]', elements);
    elements.forEach((element)=>{
        const tabindex = element.dataset.tabindex;
        delete element.dataset.tabindex;
        if (tabindex) {
            element.setAttribute('tabindex', tabindex);
        } else {
            element.removeAttribute('tabindex');
        }
    });
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/nodes.js [app-client] (ecmascript)
;
function getNodeChildren(nodes, id, onlyOpenChildren = true) {
    const directChildren = nodes.filter((node)=>node.parentId === id);
    return directChildren.flatMap((child)=>[
            ...!onlyOpenChildren || child.context?.open ? [
                child
            ] : [],
            ...getNodeChildren(nodes, child.id, onlyOpenChildren)
        ]);
}
function getDeepestNode(nodes, id) {
    let deepestNodeId;
    let maxDepth = -1;
    function findDeepest(nodeId, depth) {
        if (depth > maxDepth) {
            deepestNodeId = nodeId;
            maxDepth = depth;
        }
        const children = getNodeChildren(nodes, nodeId);
        children.forEach((child)=>{
            findDeepest(child.id, depth + 1);
        });
    }
    findDeepest(id, 0);
    return nodes.find((node)=>node.id === deepestNodeId);
}
function getNodeAncestors(nodes, id) {
    let allAncestors = [];
    let currentParentId = nodes.find((node)=>node.id === id)?.parentId;
    while(currentParentId){
        const currentNode = nodes.find((node)=>node.id === currentParentId);
        currentParentId = currentNode?.parentId;
        if (currentNode) {
            allAncestors = allAncestors.concat(currentNode);
        }
    }
    return allAncestors;
}
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/createAttribute.js [app-client] (ecmascript)
;
function createAttribute(name) {
    return `data-base-ui-${name}`;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/enqueueFocus.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__24659__1 = __TURBOPACK__imported__module__24659__;
;
let rafId = 0;
function enqueueFocus(el, options = {}) {
    const { preventScroll = false, cancelPrevious = true, sync = false } = options;
    if (cancelPrevious) {
        cancelAnimationFrame(rafId);
    }
    const exec = ()=>el?.focus({
            preventScroll
        });
    if (sync) {
        exec();
        return __TURBOPACK__imported__module__24659__1["NOOP"];
    }
    const currentRafId = requestAnimationFrame(exec);
    rafId = currentRafId;
    return ()=>{
        if (rafId === currentRafId) {
            cancelAnimationFrame(currentRafId);
            rafId = 0;
        }
    };
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/markOthers.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__7 = __TURBOPACK__imported__module__92615__1;
;
;
const counters = {
    inert: new WeakMap(),
    'aria-hidden': new WeakMap()
};
const markerName = 'data-base-ui-inert';
const uncontrolledElementsSets = {
    inert: new WeakSet(),
    'aria-hidden': new WeakSet()
};
let markerCounterMap = new WeakMap();
let lockCount1 = 0;
function getUncontrolledElementsSet(controlAttribute) {
    return uncontrolledElementsSets[controlAttribute];
}
const supportsInert1 = ()=>typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
function unwrapHost1(node) {
    if (!node) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__92615__7["isShadowRoot"])(node) ? node.host : unwrapHost1(node.parentNode);
}
const correctElements = (parent, targets)=>targets.map((target)=>{
        if (parent.contains(target)) {
            return target;
        }
        const correctedTarget = unwrapHost1(target);
        if (parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        return null;
    }).filter((x)=>x != null);
const buildKeepSet = (targets)=>{
    const keep = new Set();
    targets.forEach((target)=>{
        let node = target;
        while(node && !keep.has(node)){
            keep.add(node);
            node = node.parentNode;
        }
    });
    return keep;
};
const collectOutsideElements = (root, keepElements, stopElements)=>{
    const outside = [];
    const walk = (parent)=>{
        if (!parent || stopElements.has(parent)) {
            return;
        }
        Array.from(parent.children).forEach((node)=>{
            if ((0, __TURBOPACK__imported__module__92615__7["getNodeName"])(node) === 'script') {
                return;
            }
            if (keepElements.has(node)) {
                walk(node);
            } else {
                outside.push(node);
            }
        });
    };
    walk(root);
    return outside;
};
function applyAttributeToOthers1(uncorrectedAvoidElements, body, ariaHidden, inert, { mark = true, markerIgnoreElements = [] }) {
    // eslint-disable-next-line no-nested-ternary
    const controlAttribute = inert ? 'inert' : ariaHidden ? 'aria-hidden' : null;
    let counterMap = null;
    let uncontrolledElementsSet = null;
    const avoidElements = correctElements(body, uncorrectedAvoidElements);
    const markerIgnoreTargets = mark ? correctElements(body, markerIgnoreElements) : [];
    const markerIgnoreSet = new Set(markerIgnoreTargets);
    const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)).filter((target)=>!markerIgnoreSet.has(target)) : [];
    const hiddenElements = [];
    const markedElements = [];
    if (controlAttribute) {
        const map = counters[controlAttribute];
        const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
        uncontrolledElementsSet = currentUncontrolledElementsSet;
        counterMap = map;
        const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll('[aria-live]')));
        const controlElements = avoidElements.concat(ariaLiveElements);
        const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
        controlTargets.forEach((node)=>{
            const attr = node.getAttribute(controlAttribute);
            const alreadyHidden = attr !== null && attr !== 'false';
            const counterValue = (map.get(node) || 0) + 1;
            map.set(node, counterValue);
            hiddenElements.push(node);
            if (counterValue === 1 && alreadyHidden) {
                currentUncontrolledElementsSet.add(node);
            }
            if (!alreadyHidden) {
                node.setAttribute(controlAttribute, controlAttribute === 'inert' ? '' : 'true');
            }
        });
    }
    if (mark) {
        markerTargets.forEach((node)=>{
            const markerValue = (markerCounterMap.get(node) || 0) + 1;
            markerCounterMap.set(node, markerValue);
            markedElements.push(node);
            if (markerValue === 1) {
                node.setAttribute(markerName, '');
            }
        });
    }
    lockCount1 += 1;
    return ()=>{
        if (counterMap) {
            hiddenElements.forEach((element)=>{
                const currentCounterValue = counterMap.get(element) || 0;
                const counterValue = currentCounterValue - 1;
                counterMap.set(element, counterValue);
                if (!counterValue) {
                    if (!uncontrolledElementsSet?.has(element) && controlAttribute) {
                        element.removeAttribute(controlAttribute);
                    }
                    uncontrolledElementsSet?.delete(element);
                }
            });
        }
        if (mark) {
            markedElements.forEach((element)=>{
                const markerValue = (markerCounterMap.get(element) || 0) - 1;
                markerCounterMap.set(element, markerValue);
                if (!markerValue) {
                    element.removeAttribute(markerName);
                }
            });
        }
        lockCount1 -= 1;
        if (!lockCount1) {
            counters.inert = new WeakMap();
            counters['aria-hidden'] = new WeakMap();
            uncontrolledElementsSets.inert = new WeakSet();
            uncontrolledElementsSets['aria-hidden'] = new WeakSet();
            markerCounterMap = new WeakMap();
        }
    };
}
function markOthers(avoidElements, options = {}) {
    const { ariaHidden = false, inert = false, mark = true, markerIgnoreElements = [] } = options;
    const body = ownerDocument(avoidElements[0]).body;
    return applyAttributeToOthers1(avoidElements, body, ariaHidden, inert, {
        mark,
        markerIgnoreElements
    });
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__8 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__39 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__3 = __TURBOPACK__imported__module__98057__;
var __TURBOPACK__imported__module__92615__8 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__91900__3 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__1 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__24659__2 = __TURBOPACK__imported__module__24659__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
var __TURBOPACK__imported__module__19996__3 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/constants.js [app-client] (ecmascript)
;
const TYPEAHEAD_RESET_MS = 500;
const PATIENT_CLICK_THRESHOLD = 500;
const DISABLED_TRANSITIONS_STYLE = {
    style: {
        transition: 'none'
    }
};
const CLICK_TRIGGER_IDENTIFIER = 'data-base-ui-click-trigger';
const BASE_UI_SWIPE_IGNORE_ATTRIBUTE = 'data-base-ui-swipe-ignore';
const LEGACY_SWIPE_IGNORE_ATTRIBUTE = 'data-swipe-ignore';
const BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
const LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
const DROPDOWN_COLLISION_AVOIDANCE = {
    fallbackAxisSide: 'none'
};
const POPUP_COLLISION_AVOIDANCE = {
    fallbackAxisSide: 'end'
};
const ownerVisuallyHidden = {
    clipPath: 'inset(50%)',
    position: 'fixed',
    top: 0,
    left: 0
};
var __TURBOPACK__imported__module__8063__18 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const PortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__39["createContext"](null);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const usePortalContext1 = ()=>__TURBOPACK__imported__module__51268__39["useContext"](PortalContext);
const attr = createAttribute('portal');
function useFloatingPortalNode(props = {}) {
    const { ref, container: containerProp, componentProps = __TURBOPACK__imported__module__24659__2["EMPTY_OBJECT"], elementProps } = props;
    const uniqueId = useId1();
    const portalContext = usePortalContext1();
    const parentPortalNode = portalContext?.portalNode;
    const [containerElement, setContainerElement] = __TURBOPACK__imported__module__51268__39["useState"](null);
    const [portalNode, setPortalNode] = __TURBOPACK__imported__module__51268__39["useState"](null);
    const setPortalNodeRef = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])((node)=>{
        if (node !== null) {
            // the useIsoLayoutEffect below watching containerProp / parentPortalNode
            // sets setPortalNode(null) when the container becomes null or changes.
            // So even though the ref callback now ignores null, the portal node still gets cleared.
            setPortalNode(node);
        }
    });
    const containerRef = __TURBOPACK__imported__module__51268__39["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__3["useIsoLayoutEffect"])(()=>{
        // Wait for the container to be resolved if explicitly `null`.
        if (containerProp === null) {
            if (containerRef.current) {
                containerRef.current = null;
                setPortalNode(null);
                setContainerElement(null);
            }
            return;
        }
        // React 17 does not use React.useId().
        if (uniqueId == null) {
            return;
        }
        const resolvedContainer = (containerProp && ((0, __TURBOPACK__imported__module__92615__8["isNode"])(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
        if (resolvedContainer == null) {
            if (containerRef.current) {
                containerRef.current = null;
                setPortalNode(null);
                setContainerElement(null);
            }
            return;
        }
        if (containerRef.current !== resolvedContainer) {
            containerRef.current = resolvedContainer;
            setPortalNode(null);
            setContainerElement(resolvedContainer);
        }
    }, [
        containerProp,
        parentPortalNode,
        uniqueId
    ]);
    const portalElement = (0, __TURBOPACK__imported__module__19996__3["useRenderElement"])('div', componentProps, {
        ref: [
            ref,
            setPortalNodeRef
        ],
        props: [
            {
                id: uniqueId,
                [attr]: ''
            },
            elementProps
        ]
    });
    // This `createPortal` call injects `portalElement` into the `container`.
    // Another call inside `FloatingPortal`/`FloatingPortalLite` then injects the children into `portalElement`.
    const portalSubtree = containerElement && portalElement ? /*#__PURE__*/ __TURBOPACK__imported__module__98057__3["createPortal"](portalElement, containerElement) : null;
    return {
        portalNode,
        portalSubtree
    };
}
const FloatingPortal = /*#__PURE__*/ __TURBOPACK__imported__module__51268__39["forwardRef"](function FloatingPortal(componentProps, forwardedRef) {
    const { children, container, className, render, renderGuards, style, ...elementProps } = componentProps;
    const { portalNode, portalSubtree } = useFloatingPortalNode({
        container,
        ref: forwardedRef,
        componentProps,
        elementProps
    });
    const beforeOutsideRef = __TURBOPACK__imported__module__51268__39["useRef"](null);
    const afterOutsideRef = __TURBOPACK__imported__module__51268__39["useRef"](null);
    const beforeInsideRef = __TURBOPACK__imported__module__51268__39["useRef"](null);
    const afterInsideRef = __TURBOPACK__imported__module__51268__39["useRef"](null);
    const [focusManagerState, setFocusManagerState] = __TURBOPACK__imported__module__51268__39["useState"](null);
    const focusInsideDisabledRef = __TURBOPACK__imported__module__51268__39["useRef"](false);
    const modal = focusManagerState?.modal;
    const open = focusManagerState?.open;
    const shouldRenderGuards = typeof renderGuards === 'boolean' ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
    // https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/TabbablePortal.tsx
    __TURBOPACK__imported__module__51268__39["useEffect"](()=>{
        if (!portalNode || modal) {
            return undefined;
        }
        // Make sure elements inside the portal element are tabbable only when the
        // portal has already been focused, either by tabbing into a focus trap
        // element outside or using the mouse.
        function onFocus(event) {
            if (portalNode && event.relatedTarget && isOutsideEvent(event)) {
                if (event.type === 'focusin') {
                    if (focusInsideDisabledRef.current) {
                        enableFocusInside(portalNode);
                        focusInsideDisabledRef.current = false;
                    }
                } else {
                    disableFocusInside(portalNode);
                    focusInsideDisabledRef.current = true;
                }
            }
        }
        // Listen to the event on the capture phase so they run before the focus
        // trap elements onFocus prop is called.
        return mergeCleanups(addEventListener(portalNode, 'focusin', onFocus, true), addEventListener(portalNode, 'focusout', onFocus, true));
    }, [
        portalNode,
        modal
    ]);
    __TURBOPACK__imported__module__51268__39["useEffect"](()=>{
        if (!portalNode || open !== false) {
            return;
        }
        enableFocusInside(portalNode);
        focusInsideDisabledRef.current = false;
    }, [
        open,
        portalNode
    ]);
    const portalContextValue = __TURBOPACK__imported__module__51268__39["useMemo"](()=>({
            beforeOutsideRef,
            afterOutsideRef,
            beforeInsideRef,
            afterInsideRef,
            portalNode,
            setFocusManagerState
        }), [
        portalNode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__18["jsxs"])(__TURBOPACK__imported__module__51268__39["Fragment"], {
        children: [
            portalSubtree,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__18["jsxs"])(PortalContext.Provider, {
                value: portalContextValue,
                children: [
                    shouldRenderGuards && portalNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__18["jsx"])(FocusGuard, {
                        "data-type": "outside",
                        ref: beforeOutsideRef,
                        onFocus: (event)=>{
                            if (isOutsideEvent(event, portalNode)) {
                                beforeInsideRef.current?.focus();
                            } else {
                                const domReference = focusManagerState ? focusManagerState.domReference : null;
                                const prevTabbable = getPreviousTabbable(domReference);
                                prevTabbable?.focus();
                            }
                        }
                    }),
                    shouldRenderGuards && portalNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__18["jsx"])("span", {
                        "aria-owns": portalNode.id,
                        style: ownerVisuallyHidden
                    }),
                    portalNode && /*#__PURE__*/ __TURBOPACK__imported__module__98057__3["createPortal"](children, portalNode),
                    shouldRenderGuards && portalNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__18["jsx"])(FocusGuard, {
                        "data-type": "outside",
                        ref: afterOutsideRef,
                        onFocus: (event)=>{
                            if (isOutsideEvent(event, portalNode)) {
                                afterInsideRef.current?.focus();
                            } else {
                                const domReference = focusManagerState ? focusManagerState.domReference : null;
                                const nextTabbable = getNextTabbable(domReference);
                                nextTabbable?.focus();
                                if (focusManagerState?.closeOnFocusOut) {
                                    focusManagerState?.onOpenChange(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.focusOut, event.nativeEvent));
                                }
                            }
                        }
                    })
                ]
            })
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__9 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__40 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__4 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__67452__3 = __TURBOPACK__imported__module__67452__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTreeStore.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/createEventEmitter.js [app-client] (ecmascript)
;
function createEventEmitter() {
    const map = new Map();
    return {
        emit (event, data) {
            map.get(event)?.forEach((listener)=>listener(data));
        },
        on (event, listener) {
            if (!map.has(event)) {
                map.set(event, new Set());
            }
            map.get(event).add(listener);
        },
        off (event, listener) {
            map.get(event)?.delete(listener);
        }
    };
}
;
class FloatingTreeStore {
    nodesRef = {
        current: []
    };
    events = createEventEmitter();
    addNode(node) {
        this.nodesRef.current.push(node);
    }
    removeNode(node) {
        const index = this.nodesRef.current.findIndex((n)=>n === node);
        if (index !== -1) {
            this.nodesRef.current.splice(index, 1);
        }
    }
}
var __TURBOPACK__imported__module__8063__19 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
const FloatingNodeContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__40["createContext"](null);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const FloatingTreeContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__40["createContext"](null);
/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const useFloatingParentNodeId = ()=>__TURBOPACK__imported__module__51268__40["useContext"](FloatingNodeContext)?.id || null;
const useFloatingTree = (externalTree)=>{
    const contextTree = __TURBOPACK__imported__module__51268__40["useContext"](FloatingTreeContext);
    return externalTree ?? contextTree;
};
function useFloatingNodeId(externalTree) {
    const id = useId1();
    const tree = useFloatingTree(externalTree);
    const parentId = useFloatingParentNodeId();
    (0, __TURBOPACK__imported__module__91900__4["useIsoLayoutEffect"])(()=>{
        if (!id) {
            return undefined;
        }
        const node = {
            id,
            parentId
        };
        tree?.addNode(node);
        return ()=>{
            tree?.removeNode(node);
        };
    }, [
        tree,
        id,
        parentId
    ]);
    return id;
}
function FloatingNode(props) {
    const { children, id } = props;
    const parentId = useFloatingParentNodeId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__19["jsx"])(FloatingNodeContext.Provider, {
        value: __TURBOPACK__imported__module__51268__40["useMemo"](()=>({
                id,
                parentId
            }), [
            id,
            parentId
        ]),
        children: children
    });
}
function FloatingTree(props) {
    const { children, externalTree } = props;
    const tree = (0, __TURBOPACK__imported__module__67452__3["useRefWithInit"])(()=>externalTree ?? new FloatingTreeStore()).current;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__19["jsx"])(FloatingTreeContext.Provider, {
        value: tree,
        children: children
    });
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/resolveRef.js [app-client] (ecmascript)
;
function resolveRef(maybeRef) {
    if (maybeRef == null) {
        return maybeRef;
    }
    return 'current' in maybeRef ? maybeRef.current : maybeRef;
}
var __TURBOPACK__imported__module__8063__20 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function getEventType(event, lastInteractionType) {
    const win = (0, __TURBOPACK__imported__module__92615__2["getWindow"])(getTarget(event));
    if (event instanceof win.KeyboardEvent) {
        return 'keyboard';
    }
    if (event instanceof win.FocusEvent) {
        // Focus events can be caused by a preceding pointer interaction (e.g., focusout on outside press).
        // Prefer the last known pointer type if provided, else treat as keyboard.
        return lastInteractionType || 'keyboard';
    }
    if ('pointerType' in event) {
        return event.pointerType || 'keyboard';
    }
    if ('touches' in event) {
        return 'touch';
    }
    if (event instanceof win.MouseEvent) {
        // onClick events may not contain pointer events, and will fall through to here
        return lastInteractionType || (event.detail === 0 ? 'keyboard' : 'mouse');
    }
    return '';
}
const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
    previouslyFocusedElements = previouslyFocusedElements.filter((entry)=>{
        return entry.deref()?.isConnected;
    });
}
function addPreviouslyFocusedElement(element) {
    clearDisconnectedPreviouslyFocusedElements();
    if (element && (0, __TURBOPACK__imported__module__92615__1["getNodeName"])(element) !== 'body') {
        previouslyFocusedElements.push(new WeakRef(element));
        if (previouslyFocusedElements.length > LIST_LIMIT) {
            previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
        }
    }
}
function getPreviouslyFocusedElement() {
    clearDisconnectedPreviouslyFocusedElements();
    return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
    if (!container) {
        return null;
    }
    if (isTabbable(container)) {
        return container;
    }
    return tabbable(container)[0] || container;
}
function handleTabIndex(floatingFocusElement, orderRef) {
    if (floatingFocusElement.hasAttribute('tabindex') && !floatingFocusElement.hasAttribute('data-tabindex')) {
        return;
    }
    if (!orderRef.current.includes('floating') && !floatingFocusElement.getAttribute('role')?.includes('dialog')) {
        return;
    }
    const focusableElements = focusable(floatingFocusElement);
    const tabbableContent = focusableElements.filter((element)=>{
        const dataTabIndex = element.getAttribute('data-tabindex') || '';
        return isTabbable(element) || element.hasAttribute('data-tabindex') && !dataTabIndex.startsWith('-');
    });
    const tabIndex = floatingFocusElement.getAttribute('tabindex');
    if (orderRef.current.includes('floating') || tabbableContent.length === 0) {
        if (tabIndex !== '0') {
            floatingFocusElement.setAttribute('tabindex', '0');
        }
    } else if (tabIndex !== '-1' || floatingFocusElement.hasAttribute('data-tabindex') && floatingFocusElement.getAttribute('data-tabindex') !== '-1') {
        floatingFocusElement.setAttribute('tabindex', '-1');
        floatingFocusElement.setAttribute('data-tabindex', '-1');
    }
}
function FloatingFocusManager(props) {
    const { context, children, disabled = false, initialFocus = true, returnFocus = true, restoreFocus = false, modal = true, closeOnFocusOut = true, openInteractionType = '', nextFocusableElement, previousFocusableElement, beforeContentFocusGuardRef, externalTree, getInsideElements } = props;
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const domReference = store.useState('domReferenceElement');
    const floating = store.useState('floatingElement');
    const { events, dataRef } = store.context;
    const getNodeId = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>dataRef.current.floatingContext?.nodeId);
    const ignoreInitialFocus = initialFocus === false;
    // If the reference is a combobox and is typeable (e.g. input/textarea),
    // there are different focus semantics. The guards should not be rendered, but
    // aria-hidden should be applied to all nodes still. Further, the visually
    // hidden dismiss button should only appear at the end of the list, not the
    // start.
    const isUntrappedTypeableCombobox = isTypeableCombobox(domReference) && ignoreInitialFocus;
    const orderRef = __TURBOPACK__imported__module__51268__36["useRef"]([
        'content'
    ]);
    const initialFocusRef = useValueAsRef(initialFocus);
    const returnFocusRef = useValueAsRef(returnFocus);
    const openInteractionTypeRef = useValueAsRef(openInteractionType);
    const tree = useFloatingTree(externalTree);
    const portalContext = usePortalContext1();
    const preventReturnFocusRef = __TURBOPACK__imported__module__51268__36["useRef"](false);
    const isPointerDownRef = __TURBOPACK__imported__module__51268__36["useRef"](false);
    const pointerDownOutsideRef = __TURBOPACK__imported__module__51268__36["useRef"](false);
    const lastFocusedTabbableRef = __TURBOPACK__imported__module__51268__36["useRef"](null);
    const closeTypeRef = __TURBOPACK__imported__module__51268__36["useRef"]('');
    const lastInteractionTypeRef = __TURBOPACK__imported__module__51268__36["useRef"]('');
    const beforeGuardRef = __TURBOPACK__imported__module__51268__36["useRef"](null);
    const afterGuardRef = __TURBOPACK__imported__module__51268__36["useRef"](null);
    const mergedBeforeGuardRef = (0, __TURBOPACK__imported__module__90741__["useMergedRefs"])(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
    const mergedAfterGuardRef = (0, __TURBOPACK__imported__module__90741__["useMergedRefs"])(afterGuardRef, portalContext?.afterInsideRef);
    const blurTimeout = useTimeout();
    const pointerDownTimeout = useTimeout();
    const restoreFocusFrame = useAnimationFrame();
    const isInsidePortal = portalContext != null;
    const floatingFocusElement = getFloatingFocusElement(floating);
    const getTabbableContent = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((container = floatingFocusElement)=>{
        return container ? tabbable(container) : [];
    });
    const getResolvedInsideElements = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>getInsideElements?.().filter((element)=>element != null) ?? []);
    // Prevent Tab from escaping the modal when there are no tabbable elements.
    __TURBOPACK__imported__module__51268__36["useEffect"](()=>{
        if (disabled || !modal) {
            return undefined;
        }
        function onKeyDown(event) {
            if (event.key === 'Tab') {
                // The focus guards have nothing to focus, so we need to stop the event.
                if (contains(floatingFocusElement, activeElement(ownerDocument(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
                    stopEvent(event);
                }
            }
        }
        const doc = ownerDocument(floatingFocusElement);
        return addEventListener(doc, 'keydown', onKeyDown);
    }, [
        disabled,
        domReference,
        floatingFocusElement,
        modal,
        orderRef,
        isUntrappedTypeableCombobox,
        getTabbableContent
    ]);
    // Track pointer/keyboard interactions to disambiguate focus and outside presses.
    __TURBOPACK__imported__module__51268__36["useEffect"](()=>{
        if (disabled || !open) {
            return undefined;
        }
        const doc = ownerDocument(floatingFocusElement);
        function clearPointerDownOutside() {
            pointerDownOutsideRef.current = false;
        }
        function onPointerDown(event) {
            const target = getTarget(event);
            const insideElements = getResolvedInsideElements();
            const pointerTargetInside = contains(floating, target) || contains(domReference, target) || contains(portalContext?.portalNode, target) || insideElements.some((element)=>element === target || contains(element, target));
            pointerDownOutsideRef.current = !pointerTargetInside;
            lastInteractionTypeRef.current = event.pointerType || 'keyboard';
            if (target?.closest(`[${CLICK_TRIGGER_IDENTIFIER}]`)) {
                isPointerDownRef.current = true;
            }
        }
        function onKeyDown() {
            lastInteractionTypeRef.current = 'keyboard';
        }
        return mergeCleanups(addEventListener(doc, 'pointerdown', onPointerDown, true), addEventListener(doc, 'pointerup', clearPointerDownOutside, true), addEventListener(doc, 'pointercancel', clearPointerDownOutside, true), addEventListener(doc, 'keydown', onKeyDown, true));
    }, [
        disabled,
        floating,
        domReference,
        floatingFocusElement,
        open,
        portalContext,
        getResolvedInsideElements
    ]);
    // Close on focus out and restore focus within the floating tree when needed.
    __TURBOPACK__imported__module__51268__36["useEffect"](()=>{
        if (disabled || !closeOnFocusOut) {
            return undefined;
        }
        const doc = ownerDocument(floatingFocusElement);
        // In Safari, buttons lose focus when pressing them.
        function handlePointerDown() {
            isPointerDownRef.current = true;
            pointerDownTimeout.start(0, ()=>{
                isPointerDownRef.current = false;
            });
        }
        function handleFocusIn(event) {
            const target = getTarget(event);
            if (isTabbable(target)) {
                lastFocusedTabbableRef.current = target;
            }
        }
        function handleFocusOutside(event) {
            const relatedTarget = event.relatedTarget;
            const currentTarget = event.currentTarget;
            const target = getTarget(event);
            queueMicrotask(()=>{
                const nodeId = getNodeId();
                const triggers = store.context.triggerElements;
                const insideElements = getResolvedInsideElements();
                const isRelatedFocusGuard = relatedTarget?.hasAttribute(createAttribute('focus-guard')) && [
                    beforeGuardRef.current,
                    afterGuardRef.current,
                    portalContext?.beforeInsideRef.current,
                    portalContext?.afterInsideRef.current,
                    portalContext?.beforeOutsideRef.current,
                    portalContext?.afterOutsideRef.current,
                    resolveRef(previousFocusableElement),
                    resolveRef(nextFocusableElement)
                ].includes(relatedTarget);
                const movedToUnrelatedNode = !(contains(domReference, relatedTarget) || contains(floating, relatedTarget) || contains(relatedTarget, floating) || contains(portalContext?.portalNode, relatedTarget) || insideElements.some((element)=>element === relatedTarget || contains(element, relatedTarget)) || relatedTarget != null && triggers.hasElement(relatedTarget) || triggers.hasMatchingElement((trigger)=>contains(trigger, relatedTarget)) || isRelatedFocusGuard || tree && (getNodeChildren(tree.nodesRef.current, nodeId).find((node)=>contains(node.context?.elements.floating, relatedTarget) || contains(node.context?.elements.domReference, relatedTarget)) || getNodeAncestors(tree.nodesRef.current, nodeId).find((node)=>[
                        node.context?.elements.floating,
                        getFloatingFocusElement(node.context?.elements.floating)
                    ].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
                if (currentTarget === domReference && floatingFocusElement) {
                    handleTabIndex(floatingFocusElement, orderRef);
                }
                // Restore focus to the previous tabbable element index to prevent
                // focus from being lost outside the floating tree.
                if (restoreFocus && currentTarget !== domReference && !isElementVisible(target) && activeElement(doc) === doc.body) {
                    // Let `FloatingPortal` effect knows that focus is still inside the
                    // floating tree.
                    if ((0, __TURBOPACK__imported__module__92615__1["isHTMLElement"])(floatingFocusElement)) {
                        floatingFocusElement.focus();
                        // If explicitly requested to restore focus to the popup container, do not search
                        // for the next/previous tabbable element.
                        if (restoreFocus === 'popup') {
                            // If the element is removed on pointerdown, focus tries to move it,
                            // but since it's removed at the same time, focus gets lost as it
                            // happens after the .focus() call above.
                            // In this case, focus needs to be moved asynchronously.
                            restoreFocusFrame.request(()=>{
                                floatingFocusElement.focus();
                            });
                            return;
                        }
                    }
                    const tabbableContent = getTabbableContent();
                    const prevTabbable = lastFocusedTabbableRef.current;
                    const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
                    if ((0, __TURBOPACK__imported__module__92615__1["isHTMLElement"])(nodeToFocus)) {
                        nodeToFocus.focus();
                    }
                }
                // https://github.com/floating-ui/floating-ui/issues/3060
                if (dataRef.current.insideReactTree) {
                    dataRef.current.insideReactTree = false;
                    return;
                }
                // Focus did not move inside the floating tree, and there are no tabbable
                // portal guards to handle closing.
                if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && (// Fix React 18 Strict Mode returnFocus due to double rendering.
                // For an "untrapped" typeable combobox (input role=combobox with
                // initialFocus=false), re-opening the popup and tabbing out should still close it even
                // when the previously focused element (e.g. the next tabbable outside the popup) is
                // focused again. Otherwise, the popup remains open on the second Tab sequence:
                // click input -> Tab (closes) -> click input -> Tab.
                // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
                isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
                    preventReturnFocusRef.current = true;
                    store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.focusOut, event));
                }
            });
        }
        function markInsideReactTree() {
            if (pointerDownOutsideRef.current) {
                return;
            }
            dataRef.current.insideReactTree = true;
            blurTimeout.start(0, ()=>{
                dataRef.current.insideReactTree = false;
            });
        }
        const domReferenceElement = (0, __TURBOPACK__imported__module__92615__1["isHTMLElement"])(domReference) ? domReference : null;
        if (!floating && !domReferenceElement) {
            return undefined;
        }
        return mergeCleanups(domReferenceElement && addEventListener(domReferenceElement, 'focusout', handleFocusOutside), domReferenceElement && addEventListener(domReferenceElement, 'pointerdown', handlePointerDown), floating && addEventListener(floating, 'focusin', handleFocusIn), floating && addEventListener(floating, 'focusout', handleFocusOutside), floating && portalContext && addEventListener(floating, 'focusout', markInsideReactTree, true));
    }, [
        disabled,
        domReference,
        floating,
        floatingFocusElement,
        modal,
        tree,
        portalContext,
        store,
        closeOnFocusOut,
        restoreFocus,
        getTabbableContent,
        isUntrappedTypeableCombobox,
        getNodeId,
        orderRef,
        dataRef,
        blurTimeout,
        pointerDownTimeout,
        restoreFocusFrame,
        nextFocusableElement,
        previousFocusableElement,
        getResolvedInsideElements
    ]);
    // Hide everything outside the floating tree from assistive tech while open.
    __TURBOPACK__imported__module__51268__36["useEffect"](()=>{
        if (disabled || !floating || !open) {
            return undefined;
        }
        // Don't hide portals nested within the parent portal.
        const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${createAttribute('portal')}]`) || []);
        const ancestors = tree ? getNodeAncestors(tree.nodesRef.current, getNodeId()) : [];
        const rootAncestorComboboxDomReference = ancestors.find((node)=>isTypeableCombobox(node.context?.elements.domReference || null))?.context?.elements.domReference;
        const controlInsideElements = [
            floating,
            ...portalNodes,
            beforeGuardRef.current,
            afterGuardRef.current,
            portalContext?.beforeOutsideRef.current,
            portalContext?.afterOutsideRef.current,
            ...getResolvedInsideElements()
        ];
        const insideElements = [
            ...controlInsideElements,
            rootAncestorComboboxDomReference,
            resolveRef(previousFocusableElement),
            resolveRef(nextFocusableElement),
            isUntrappedTypeableCombobox ? domReference : null
        ].filter((x)=>x != null);
        const ariaHiddenCleanup = markOthers(insideElements, {
            ariaHidden: modal || isUntrappedTypeableCombobox,
            mark: false
        });
        const markerInsideElements = [
            floating,
            ...portalNodes
        ].filter((x)=>x != null);
        const markerCleanup = markOthers(markerInsideElements);
        return ()=>{
            markerCleanup();
            ariaHiddenCleanup();
        };
    }, [
        open,
        disabled,
        domReference,
        floating,
        modal,
        orderRef,
        portalContext,
        isUntrappedTypeableCombobox,
        tree,
        getNodeId,
        nextFocusableElement,
        previousFocusableElement,
        getResolvedInsideElements
    ]);
    // Focus the initial element when the floating element opens.
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        if (!open || disabled || !(0, __TURBOPACK__imported__module__92615__1["isHTMLElement"])(floatingFocusElement)) {
            return;
        }
        const doc = ownerDocument(floatingFocusElement);
        const previouslyFocusedElement = activeElement(doc);
        // Wait for any layout effect state setters to execute to set `tabIndex`.
        queueMicrotask(()=>{
            const initialFocusValueOrFn = initialFocusRef.current;
            const resolvedInitialFocus = typeof initialFocusValueOrFn === 'function' ? initialFocusValueOrFn(openInteractionTypeRef.current || '') : initialFocusValueOrFn;
            // `null` should fallback to default behavior in case of an empty ref.
            if (resolvedInitialFocus === undefined || resolvedInitialFocus === false) {
                return;
            }
            const focusAlreadyInsideFloatingEl = contains(floatingFocusElement, previouslyFocusedElement);
            if (focusAlreadyInsideFloatingEl) {
                return;
            }
            let focusableElements = null;
            const getDefaultFocusElement = ()=>{
                if (focusableElements == null) {
                    focusableElements = getTabbableContent(floatingFocusElement);
                }
                return focusableElements[0] || floatingFocusElement;
            };
            let elToFocus;
            if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
                elToFocus = getDefaultFocusElement();
            } else {
                elToFocus = resolveRef(resolvedInitialFocus);
            }
            elToFocus = elToFocus || getDefaultFocusElement();
            enqueueFocus(elToFocus, {
                preventScroll: elToFocus === floatingFocusElement
            });
        });
    }, [
        disabled,
        open,
        floatingFocusElement,
        ignoreInitialFocus,
        getTabbableContent,
        initialFocusRef,
        openInteractionTypeRef
    ]);
    // Track return focus targets and restore focus on unmount/close.
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        if (disabled || !floatingFocusElement) {
            return undefined;
        }
        const doc = ownerDocument(floatingFocusElement);
        const previouslyFocusedElement = activeElement(doc);
        addPreviouslyFocusedElement(previouslyFocusedElement);
        // Dismissing via outside press should always ignore `returnFocus` to
        // prevent unwanted scrolling.
        function onOpenChangeLocal(details) {
            if (!details.open) {
                closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
            }
            if (details.reason === __TURBOPACK__imported__module__54906__.triggerHover && details.nativeEvent.type === 'mouseleave') {
                preventReturnFocusRef.current = true;
            }
            if (details.reason !== __TURBOPACK__imported__module__54906__.outsidePress) {
                return;
            }
            if (details.nested) {
                preventReturnFocusRef.current = false;
            } else if (isVirtualClick(details.nativeEvent) || isVirtualPointerEvent(details.nativeEvent)) {
                preventReturnFocusRef.current = false;
            } else {
                let isPreventScrollSupported = false;
                ownerDocument(floatingFocusElement).createElement('div').focus({
                    get preventScroll () {
                        isPreventScrollSupported = true;
                        return false;
                    }
                });
                if (isPreventScrollSupported) {
                    preventReturnFocusRef.current = false;
                } else {
                    preventReturnFocusRef.current = true;
                }
            }
        }
        events.on('openchange', onOpenChangeLocal);
        function getReturnElement() {
            const returnFocusValueOrFn = returnFocusRef.current;
            let resolvedReturnFocusValue = typeof returnFocusValueOrFn === 'function' ? returnFocusValueOrFn(closeTypeRef.current) : returnFocusValueOrFn;
            // `null` should fallback to default behavior in case of an empty ref.
            if (resolvedReturnFocusValue === undefined || resolvedReturnFocusValue === false) {
                return null;
            }
            if (resolvedReturnFocusValue === null) {
                resolvedReturnFocusValue = true;
            }
            if (typeof resolvedReturnFocusValue === 'boolean') {
                const el = domReference || getPreviouslyFocusedElement();
                return el && el.isConnected ? el : null;
            }
            const fallback = domReference || getPreviouslyFocusedElement();
            return resolveRef(resolvedReturnFocusValue) || fallback || null;
        }
        return ()=>{
            events.off('openchange', onOpenChangeLocal);
            const activeEl = activeElement(doc);
            const insideElements = getResolvedInsideElements();
            const isFocusInsideFloatingTree = contains(floating, activeEl) || insideElements.some((element)=>element === activeEl || contains(element, activeEl)) || tree && getNodeChildren(tree.nodesRef.current, getNodeId(), false).some((node)=>contains(node.context?.elements.floating, activeEl));
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const returnFocusValueOrFn = returnFocusRef.current;
            const returnElement = getReturnElement();
            queueMicrotask(()=>{
                // This is `returnElement`, if it's tabbable, or its first tabbable child.
                const tabbableReturnElement = getFirstTabbableElement(returnElement);
                const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== 'boolean';
                if (returnFocusValueOrFn && !preventReturnFocusRef.current && (0, __TURBOPACK__imported__module__92615__1["isHTMLElement"])(tabbableReturnElement) && (// If the focus moved somewhere else after mount, avoid returning focus
                // since it likely entered a different element which should be
                // respected: https://github.com/floating-ui/floating-ui/issues/2607
                !hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
                    tabbableReturnElement.focus({
                        preventScroll: true
                    });
                }
                preventReturnFocusRef.current = false;
            });
        };
    }, [
        disabled,
        floating,
        floatingFocusElement,
        returnFocusRef,
        dataRef,
        events,
        tree,
        domReference,
        getNodeId,
        getResolvedInsideElements
    ]);
    // Safari may randomly scroll to the bottom of the page if an input inside a popup has focus
    // when the popup unmounts from the DOM.
    // By blurring it before the popup unmounts, we can prevent this behavior.
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        if (!isWebKit || open || !floating) {
            return;
        }
        const activeEl = activeElement(ownerDocument(floating));
        if (!(0, __TURBOPACK__imported__module__92615__1["isHTMLElement"])(activeEl) || !isTypeableElement(activeEl)) {
            return;
        }
        if (contains(floating, activeEl)) {
            activeEl.blur();
        }
    }, [
        open,
        floating
    ]);
    // Synchronize the `context` & `modal` value to the FloatingPortal context.
    // It will decide whether or not it needs to render its own guards.
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        if (disabled || !portalContext) {
            return undefined;
        }
        portalContext.setFocusManagerState({
            modal,
            closeOnFocusOut,
            open,
            onOpenChange: store.setOpen,
            domReference
        });
        return ()=>{
            portalContext.setFocusManagerState(null);
        };
    }, [
        disabled,
        portalContext,
        modal,
        open,
        store,
        closeOnFocusOut,
        domReference
    ]);
    // Keep the floating element tabIndex in sync and clear stale focus records.
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        if (disabled || !floatingFocusElement) {
            return undefined;
        }
        handleTabIndex(floatingFocusElement, orderRef);
        return ()=>{
            queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
        };
    }, [
        disabled,
        floatingFocusElement,
        orderRef
    ]);
    const shouldRenderGuards = !disabled && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__20["jsxs"])(__TURBOPACK__imported__module__51268__36["Fragment"], {
        children: [
            shouldRenderGuards && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__20["jsx"])(FocusGuard, {
                "data-type": "inside",
                ref: mergedBeforeGuardRef,
                onFocus: (event)=>{
                    if (modal) {
                        const els = getTabbableContent();
                        enqueueFocus(els[els.length - 1]);
                    } else if (portalContext?.portalNode) {
                        preventReturnFocusRef.current = false;
                        if (isOutsideEvent(event, portalContext.portalNode)) {
                            const nextTabbable = getNextTabbable(domReference);
                            nextTabbable?.focus();
                        } else {
                            resolveRef(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
                        }
                    }
                }
            }),
            children,
            shouldRenderGuards && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__20["jsx"])(FocusGuard, {
                "data-type": "inside",
                ref: mergedAfterGuardRef,
                onFocus: (event)=>{
                    if (modal) {
                        enqueueFocus(getTabbableContent()[0]);
                    } else if (portalContext?.portalNode) {
                        if (closeOnFocusOut) {
                            preventReturnFocusRef.current = true;
                        }
                        if (isOutsideEvent(event, portalContext.portalNode)) {
                            const prevTabbable = getPreviousTabbable(domReference);
                            prevTabbable?.focus();
                        } else {
                            resolveRef(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
                        }
                    }
                }
            })
        ]
    });
}
var __TURBOPACK__imported__module__19996__4 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupCssVars.js [app-client] (ecmascript)
;
let DialogPopupCssVars = /*#__PURE__*/ function(DialogPopupCssVars) {
    /**
   * Indicates how many dialogs are nested within.
   * @type {number}
   */ DialogPopupCssVars["nestedDialogs"] = "--nested-dialogs";
    return DialogPopupCssVars;
}({});
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/popup/DialogPopupDataAttributes.js [app-client] (ecmascript)
;
;
let DialogPopupDataAttributes = function(DialogPopupDataAttributes) {
    /**
   * Present when the dialog is open.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["open"] = CommonPopupDataAttributes.open] = "open";
    /**
   * Present when the dialog is closed.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["closed"] = CommonPopupDataAttributes.closed] = "closed";
    /**
   * Present when the dialog is animating in.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
    /**
   * Present when the dialog is animating out.
   */ DialogPopupDataAttributes[DialogPopupDataAttributes["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
    /**
   * Present when the dialog is nested within another dialog.
   */ DialogPopupDataAttributes["nested"] = "data-nested";
    /**
   * Present when the dialog has other open dialogs nested within it.
   */ DialogPopupDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
    return DialogPopupDataAttributes;
}({});
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/portal/DialogPortalContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__10 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__1 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__41 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const DialogPortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__41["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useDialogPortalContext() {
    const value1 = __TURBOPACK__imported__module__51268__41["useContext"](DialogPortalContext);
    if (value1 === undefined) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__1["default"])(26));
    }
    return value1;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__42 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__2 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__98057__4 = __TURBOPACK__imported__module__98057__;
var __TURBOPACK__imported__module__32787__3 = __TURBOPACK__imported__module__32787__;
'use client';
;
;
;
;
;
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
    const frame = useAnimationFrame();
    return (0, __TURBOPACK__imported__module__32787__3["useStableCallback"])((fnToExecute, /**
   * An optional [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that
   * can be used to abort `fnToExecute` before all the animations have finished.
   * @default null
   */ signal = null)=>{
        frame.cancel();
        const element = resolveRef(elementOrRef);
        if (element == null) {
            return;
        }
        const resolvedElement = element;
        const done = ()=>{
            // Synchronously flush the unmounting of the component so that the browser doesn't
            // paint: https://github.com/mui/base-ui/issues/979
            __TURBOPACK__imported__module__98057__4["flushSync"](fnToExecute);
        };
        if (typeof resolvedElement.getAnimations !== 'function' || globalThis.BASE_UI_ANIMATIONS_DISABLED) {
            fnToExecute();
            return;
        }
        function exec() {
            Promise.all(resolvedElement.getAnimations().map((animation)=>animation.finished)).then(()=>{
                if (!signal?.aborted) {
                    done();
                }
            }).catch(()=>{
                if (treatAbortedAsFinished) {
                    if (!signal?.aborted) {
                        done();
                    }
                    return;
                }
                const currentAnimations = resolvedElement.getAnimations();
                if (!signal?.aborted && currentAnimations.length > 0 && currentAnimations.some((animation)=>animation.pending || animation.playState !== 'finished')) {
                    // Sometimes animations can be aborted because a property they depend on changes while the animation plays.
                    // In such cases, we need to re-check if any new animations have started.
                    exec();
                }
            });
        }
        if (waitForStartingStyleRemoved) {
            const startingStyleAttribute = TransitionStatusDataAttributes.startingStyle;
            // If `[data-starting-style]` isn't present, fall back to waiting one more frame
            // to give "open" animations a chance to be registered.
            if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
                frame.request(exec);
                return;
            }
            // Wait for `[data-starting-style]` to have been removed.
            const attributeObserver = new MutationObserver(()=>{
                if (!resolvedElement.hasAttribute(startingStyleAttribute)) {
                    attributeObserver.disconnect();
                    exec();
                }
            });
            attributeObserver.observe(resolvedElement, {
                attributes: true,
                attributeFilter: [
                    startingStyleAttribute
                ]
            });
            signal?.addEventListener('abort', ()=>attributeObserver.disconnect(), {
                once: true
            });
            return;
        }
        frame.request(exec);
    });
}
'use client';
;
;
;
function useOpenChangeComplete(parameters) {
    const { enabled = true, open, ref, onComplete: onCompleteParam } = parameters;
    const onComplete = (0, __TURBOPACK__imported__module__32787__2["useStableCallback"])(onCompleteParam);
    const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
    __TURBOPACK__imported__module__51268__42["useEffect"](()=>{
        if (!enabled) {
            return undefined;
        }
        const abortController = new AbortController();
        runOnceAnimationsFinish(onComplete, abortController.signal);
        return ()=>{
            abortController.abort();
        };
    }, [
        enabled,
        open,
        onComplete,
        runOnceAnimationsFinish
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/composite.js [app-client] (ecmascript) <locals>
;
;
;
const ARROW_UP1 = 'ArrowUp';
const ARROW_DOWN1 = 'ArrowDown';
const ARROW_LEFT1 = 'ArrowLeft';
const ARROW_RIGHT1 = 'ArrowRight';
const HOME = 'Home';
const END = 'End';
const PAGE_UP = 'PageUp';
const PAGE_DOWN = 'PageDown';
const HORIZONTAL_KEYS = new Set([
    ARROW_LEFT1,
    ARROW_RIGHT1
]);
const HORIZONTAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_LEFT1,
    ARROW_RIGHT1,
    HOME,
    END
]);
const VERTICAL_KEYS = new Set([
    ARROW_UP1,
    ARROW_DOWN1
]);
const VERTICAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_UP1,
    ARROW_DOWN1,
    HOME,
    END
]);
const ARROW_KEYS = new Set([
    ...HORIZONTAL_KEYS,
    ...VERTICAL_KEYS
]);
const ALL_KEYS = new Set([
    ...ARROW_KEYS,
    HOME,
    END
]);
const COMPOSITE_KEYS = new Set([
    ARROW_UP1,
    ARROW_DOWN1,
    ARROW_LEFT1,
    ARROW_RIGHT1,
    HOME,
    END
]);
const SHIFT = 'Shift';
const CONTROL = 'Control';
const ALT = 'Alt';
const META = 'Meta';
const MODIFIER_KEYS = new Set([
    SHIFT,
    CONTROL,
    ALT,
    META
]);
function isInputElement(element) {
    return (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(element) && element.tagName === 'INPUT';
}
function isNativeInput(element) {
    if (isInputElement(element) && element.selectionStart != null) {
        return true;
    }
    if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(element) && element.tagName === 'TEXTAREA') {
        return true;
    }
    return false;
}
function scrollIntoViewIfNeeded(scrollContainer, element, direction, orientation) {
    if (!scrollContainer || !element || !element.scrollTo) {
        return;
    }
    let targetX = scrollContainer.scrollLeft;
    let targetY = scrollContainer.scrollTop;
    const isOverflowingX = scrollContainer.clientWidth < scrollContainer.scrollWidth;
    const isOverflowingY = scrollContainer.clientHeight < scrollContainer.scrollHeight;
    if (isOverflowingX && orientation !== 'vertical') {
        const elementOffsetLeft = getOffset1(scrollContainer, element, 'left');
        const containerStyles = getStyles1(scrollContainer);
        const elementStyles = getStyles1(element);
        if (direction === 'ltr') {
            if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
                // overflow to the right, scroll to align right edges
                targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
            } else if (elementOffsetLeft - elementStyles.scrollMarginLeft < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
                // overflow to the left, scroll to align left edges
                targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
            }
        }
        if (direction === 'rtl') {
            if (elementOffsetLeft - elementStyles.scrollMarginRight < scrollContainer.scrollLeft + containerStyles.scrollPaddingLeft) {
                // overflow to the left, scroll to align left edges
                targetX = elementOffsetLeft - elementStyles.scrollMarginLeft - containerStyles.scrollPaddingLeft;
            } else if (elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight > scrollContainer.scrollLeft + scrollContainer.clientWidth - containerStyles.scrollPaddingRight) {
                // overflow to the right, scroll to align right edges
                targetX = elementOffsetLeft + element.offsetWidth + elementStyles.scrollMarginRight - scrollContainer.clientWidth + containerStyles.scrollPaddingRight;
            }
        }
    }
    if (isOverflowingY && orientation !== 'horizontal') {
        const elementOffsetTop = getOffset1(scrollContainer, element, 'top');
        const containerStyles = getStyles1(scrollContainer);
        const elementStyles = getStyles1(element);
        if (elementOffsetTop - elementStyles.scrollMarginTop < scrollContainer.scrollTop + containerStyles.scrollPaddingTop) {
            // overflow upwards, align top edges
            targetY = elementOffsetTop - elementStyles.scrollMarginTop - containerStyles.scrollPaddingTop;
        } else if (elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom > scrollContainer.scrollTop + scrollContainer.clientHeight - containerStyles.scrollPaddingBottom) {
            // overflow downwards, align bottom edges
            targetY = elementOffsetTop + element.offsetHeight + elementStyles.scrollMarginBottom - scrollContainer.clientHeight + containerStyles.scrollPaddingBottom;
        }
    }
    scrollContainer.scrollTo({
        left: targetX,
        top: targetY,
        behavior: 'auto'
    });
}
function getOffset1(ancestor, element, side) {
    const propName = side === 'left' ? 'offsetLeft' : 'offsetTop';
    let result = 0;
    while(element.offsetParent){
        result += element[propName];
        if (element.offsetParent === ancestor) {
            break;
        }
        element = element.offsetParent;
    }
    return result;
}
function getStyles1(element) {
    const styles = getComputedStyle(element);
    return {
        scrollMarginTop: parseFloat(styles.scrollMarginTop) || 0,
        scrollMarginRight: parseFloat(styles.scrollMarginRight) || 0,
        scrollMarginBottom: parseFloat(styles.scrollMarginBottom) || 0,
        scrollMarginLeft: parseFloat(styles.scrollMarginLeft) || 0,
        scrollPaddingTop: parseFloat(styles.scrollPaddingTop) || 0,
        scrollPaddingRight: parseFloat(styles.scrollPaddingRight) || 0,
        scrollPaddingBottom: parseFloat(styles.scrollPaddingBottom) || 0,
        scrollPaddingLeft: parseFloat(styles.scrollPaddingLeft) || 0
    };
}
var __TURBOPACK__imported__module__8063__21 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const stateAttributesMapping1 = {
    ...popupStateMapping,
    ...transitionStatusMapping,
    nestedDialogOpen (value1) {
        return value1 ? {
            [DialogPopupDataAttributes.nestedDialogOpen]: ''
        } : null;
    }
};
const DialogPopup = /*#__PURE__*/ __TURBOPACK__imported__module__51268__35["forwardRef"](function DialogPopup(componentProps, forwardedRef) {
    const { className, finalFocus, initialFocus, render, style, ...elementProps } = componentProps;
    const { store } = useDialogRootContext();
    const descriptionElementId = store.useState('descriptionElementId');
    const disablePointerDismissal = store.useState('disablePointerDismissal');
    const floatingRootContext = store.useState('floatingRootContext');
    const rootPopupProps = store.useState('popupProps');
    const modal = store.useState('modal');
    const mounted = store.useState('mounted');
    const nested = store.useState('nested');
    const nestedOpenDialogCount = store.useState('nestedOpenDialogCount');
    const open = store.useState('open');
    const openMethod = store.useState('openMethod');
    const titleElementId = store.useState('titleElementId');
    const transitionStatus = store.useState('transitionStatus');
    const role = store.useState('role');
    useDialogPortalContext();
    useOpenChangeComplete({
        open,
        ref: store.context.popupRef,
        onComplete () {
            if (open) {
                store.context.onOpenChangeComplete?.(true);
            }
        }
    });
    // Default initial focus logic:
    // If opened by touch, focus the popup element to prevent the virtual keyboard from opening
    // (this is required for Android specifically as iOS handles this automatically).
    function defaultInitialFocus(interactionType) {
        if (interactionType === 'touch') {
            return store.context.popupRef.current;
        }
        return true;
    }
    const resolvedInitialFocus = initialFocus === undefined ? defaultInitialFocus : initialFocus;
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const state = {
        open,
        nested,
        transitionStatus,
        nestedDialogOpen
    };
    const element = (0, __TURBOPACK__imported__module__19996__4["useRenderElement"])('div', componentProps, {
        state,
        props: [
            rootPopupProps,
            {
                'aria-labelledby': titleElementId ?? undefined,
                'aria-describedby': descriptionElementId ?? undefined,
                role,
                tabIndex: -1,
                hidden: !mounted,
                onKeyDown (event) {
                    if (COMPOSITE_KEYS.has(event.key)) {
                        event.stopPropagation();
                    }
                },
                style: {
                    [DialogPopupCssVars.nestedDialogs]: nestedOpenDialogCount
                }
            },
            elementProps
        ],
        ref: [
            forwardedRef,
            store.context.popupRef,
            store.useStateSetter('popupElement')
        ],
        stateAttributesMapping: stateAttributesMapping1
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__21["jsx"])(FloatingFocusManager, {
        context: floatingRootContext,
        openInteractionType: openMethod,
        disabled: !mounted,
        closeOnFocusOut: !disablePointerDismissal,
        initialFocus: resolvedInitialFocus,
        returnFocus: finalFocus,
        modal: modal !== false,
        restoreFocus: "popup",
        children: element
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/portal/DialogPortal.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__11 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__43 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/inertValue.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__91226__ = __turbopack_context__.i(91226);
;
function inertValue(value1) {
    if ((0, __TURBOPACK__imported__module__91226__["isReactVersionAtLeast"])(19)) {
        return value1;
    }
    // compatibility with React < 19
    return value1 ? 'true' : undefined;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/InternalBackdrop.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__12 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__44 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__8063__22 = __TURBOPACK__imported__module__8063__;
;
;
const InternalBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__51268__44["forwardRef"](function InternalBackdrop(props, ref) {
    const { cutout, ...otherProps } = props;
    let clipPath;
    if (cutout) {
        const rect = cutout.getBoundingClientRect();
        clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__22["jsx"])("div", {
        ref: ref,
        role: "presentation",
        "data-base-ui-inert": "",
        ...otherProps,
        style: {
            position: 'fixed',
            inset: 0,
            userSelect: 'none',
            WebkitUserSelect: 'none',
            clipPath
        }
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
var __TURBOPACK__imported__module__8063__23 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
const DialogPortal1 = /*#__PURE__*/ __TURBOPACK__imported__module__51268__43["forwardRef"](function DialogPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const { store } = useDialogRootContext();
    const mounted = store.useState('mounted');
    const modal = store.useState('modal');
    const open = store.useState('open');
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__23["jsx"])(DialogPortalContext.Provider, {
        value: keepMounted,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__23["jsxs"])(FloatingPortal, {
            ref: forwardedRef,
            ...portalProps,
            children: [
                mounted && modal === true && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__23["jsx"])(InternalBackdrop, {
                    ref: store.context.internalBackdropRef,
                    inert: inertValue(!open)
                }),
                props.children
            ]
        })
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/root/DialogRoot.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__13 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__45 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useOnFirstRender.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__46 = __TURBOPACK__imported__module__51268__;
'use client';
;
function useOnFirstRender(fn) {
    const ref = __TURBOPACK__imported__module__51268__46["useRef"](true);
    if (ref.current) {
        ref.current = false;
        fn();
    }
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/root/useDialogRoot.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__47 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useScrollLock.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__9 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__92615__2 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__91900__5 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__24659__3 = __TURBOPACK__imported__module__24659__;
'use client';
;
;
;
;
;
;
;
;
let originalHtmlStyles = {};
let originalBodyStyles = {};
let originalHtmlScrollBehavior = '';
function hasInsetScrollbars(referenceElement) {
    if (typeof document === 'undefined') {
        return false;
    }
    const doc = ownerDocument(referenceElement);
    const win = (0, __TURBOPACK__imported__module__92615__2["getWindow"])(doc);
    return win.innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
    const supported = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('scrollbar-gutter', 'stable');
    if (!supported || typeof document === 'undefined') {
        return false;
    }
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const scrollContainer = (0, __TURBOPACK__imported__module__92615__9["isOverflowElement"])(html) ? html : body;
    const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
    const originalHtmlStyleGutter = html.style.scrollbarGutter;
    html.style.scrollbarGutter = 'stable';
    scrollContainer.style.overflowY = 'scroll';
    const before = scrollContainer.offsetWidth;
    scrollContainer.style.overflowY = 'hidden';
    const after = scrollContainer.offsetWidth;
    scrollContainer.style.overflowY = originalScrollContainerOverflowY;
    html.style.scrollbarGutter = originalHtmlStyleGutter;
    return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    // If an `overflow` style is present on <html>, we need to lock it, because a lock on <body>
    // won't have any effect.
    // But if <body> has an `overflow` style (like `overflow-x: hidden`), we need to lock it
    // instead, as sticky elements shift otherwise.
    const elementToLock = (0, __TURBOPACK__imported__module__92615__9["isOverflowElement"])(html) ? html : body;
    const originalElementToLockStyles = {
        overflowY: elementToLock.style.overflowY,
        overflowX: elementToLock.style.overflowX
    };
    Object.assign(elementToLock.style, {
        overflowY: 'hidden',
        overflowX: 'hidden'
    });
    return ()=>{
        Object.assign(elementToLock.style, originalElementToLockStyles);
    };
}
function preventScrollInsetScrollbars(referenceElement) {
    const doc = ownerDocument(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const win = (0, __TURBOPACK__imported__module__92615__2["getWindow"])(html);
    let scrollTop = 0;
    let scrollLeft = 0;
    let updateGutterOnly = false;
    const resizeFrame = AnimationFrame.create();
    // Pinch-zoom in Safari causes a shift. Just don't lock scroll if there's any pinch-zoom.
    if (isWebKit && (win.visualViewport?.scale ?? 1) !== 1) {
        return ()=>{};
    }
    function lockScroll() {
        /* DOM reads: */ const htmlStyles = win.getComputedStyle(html);
        const bodyStyles = win.getComputedStyle(body);
        const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || '';
        const hasBothEdges = htmlScrollbarGutterValue.includes('both-edges');
        const scrollbarGutterValue = hasBothEdges ? 'stable both-edges' : 'stable';
        scrollTop = html.scrollTop;
        scrollLeft = html.scrollLeft;
        originalHtmlStyles = {
            scrollbarGutter: html.style.scrollbarGutter,
            overflowY: html.style.overflowY,
            overflowX: html.style.overflowX
        };
        originalHtmlScrollBehavior = html.style.scrollBehavior;
        originalBodyStyles = {
            position: body.style.position,
            height: body.style.height,
            width: body.style.width,
            boxSizing: body.style.boxSizing,
            overflowY: body.style.overflowY,
            overflowX: body.style.overflowX,
            scrollBehavior: body.style.scrollBehavior
        };
        const isScrollableY = html.scrollHeight > html.clientHeight;
        const isScrollableX = html.scrollWidth > html.clientWidth;
        const hasConstantOverflowY = htmlStyles.overflowY === 'scroll' || bodyStyles.overflowY === 'scroll';
        const hasConstantOverflowX = htmlStyles.overflowX === 'scroll' || bodyStyles.overflowX === 'scroll';
        // Values can be negative in Firefox
        const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
        const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
        // Avoid shift due to the default <body> margin. This does cause elements to be clipped
        // with whitespace. Warn if <body> has margins?
        const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
        const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
        const elementToLock = (0, __TURBOPACK__imported__module__92615__9["isOverflowElement"])(html) ? html : body;
        updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
        /*
     * DOM writes:
     * Do not read the DOM past this point!
     */ if (updateGutterOnly) {
            html.style.scrollbarGutter = scrollbarGutterValue;
            elementToLock.style.overflowY = 'hidden';
            elementToLock.style.overflowX = 'hidden';
            return;
        }
        Object.assign(html.style, {
            scrollbarGutter: scrollbarGutterValue,
            overflowY: 'hidden',
            overflowX: 'hidden'
        });
        if (isScrollableY || hasConstantOverflowY) {
            html.style.overflowY = 'scroll';
        }
        if (isScrollableX || hasConstantOverflowX) {
            html.style.overflowX = 'scroll';
        }
        Object.assign(body.style, {
            position: 'relative',
            height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : '100dvh',
            width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : '100vw',
            boxSizing: 'border-box',
            overflow: 'hidden',
            scrollBehavior: 'unset'
        });
        body.scrollTop = scrollTop;
        body.scrollLeft = scrollLeft;
        html.setAttribute('data-base-ui-scroll-locked', '');
        html.style.scrollBehavior = 'unset';
    }
    function cleanup() {
        Object.assign(html.style, originalHtmlStyles);
        Object.assign(body.style, originalBodyStyles);
        if (!updateGutterOnly) {
            html.scrollTop = scrollTop;
            html.scrollLeft = scrollLeft;
            html.removeAttribute('data-base-ui-scroll-locked');
            html.style.scrollBehavior = originalHtmlScrollBehavior;
        }
    }
    function handleResize() {
        cleanup();
        resizeFrame.request(lockScroll);
    }
    lockScroll();
    const unsubscribeResize = addEventListener(win, 'resize', handleResize);
    return ()=>{
        resizeFrame.cancel();
        cleanup();
        // Sometimes this cleanup can run after test teardown because it is called
        // in a `setTimeout(fn, 0)`. Guard the returned cleanup to avoid calling
        // `removeEventListener` when it is no longer available in tests.
        if (typeof win.removeEventListener === 'function') {
            unsubscribeResize();
        }
    };
}
class ScrollLocker {
    lockCount = 0;
    restore = null;
    timeoutLock = Timeout.create();
    timeoutUnlock = Timeout.create();
    acquire(referenceElement) {
        this.lockCount += 1;
        if (this.lockCount === 1 && this.restore === null) {
            this.timeoutLock.start(0, ()=>this.lock(referenceElement));
        }
        return this.release;
    }
    release = ()=>{
        this.lockCount -= 1;
        if (this.lockCount === 0 && this.restore) {
            this.timeoutUnlock.start(0, this.unlock);
        }
    };
    unlock = ()=>{
        if (this.lockCount === 0 && this.restore) {
            this.restore?.();
            this.restore = null;
        }
    };
    lock(referenceElement) {
        if (this.lockCount === 0 || this.restore !== null) {
            return;
        }
        const doc = ownerDocument(referenceElement);
        const html = doc.documentElement;
        const htmlOverflowY = (0, __TURBOPACK__imported__module__92615__2["getWindow"])(html).getComputedStyle(html).overflowY;
        // If the site author already hid overflow on <html>, respect it and bail out.
        if (htmlOverflowY === 'hidden' || htmlOverflowY === 'clip') {
            this.restore = __TURBOPACK__imported__module__24659__3["NOOP"];
            return;
        }
        const hasOverlayScrollbars = isIOS || !hasInsetScrollbars(referenceElement);
        // On iOS, scroll locking does not work if the navbar is collapsed. Due to numerous
        // side effects and bugs that arise on iOS, it must be researched extensively before
        // being enabled to ensure it doesn't cause the following issues:
        // - Textboxes must scroll into view when focused, nor cause a glitchy scroll animation.
        // - The navbar must not force itself into view and cause layout shift.
        // - Scroll containers must not flicker upon closing a popup when it has an exit animation.
        this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
    }
}
const SCROLL_LOCKER = new ScrollLocker();
function useScrollLock(enabled = true, referenceElement = null) {
    (0, __TURBOPACK__imported__module__91900__5["useIsoLayoutEffect"])(()=>{
        if (!enabled) {
            return undefined;
        }
        return SCROLL_LOCKER.acquire(referenceElement);
    }, [
        enabled,
        referenceElement
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useDismiss.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__48 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__92615__10 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__32787__4 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const bubbleHandlerKeys = {
    intentional: 'onClick',
    sloppy: 'onPointerDown'
};
function alwaysFalse() {
    return false;
}
function normalizeProp(normalizable) {
    return {
        escapeKey: typeof normalizable === 'boolean' ? normalizable : normalizable?.escapeKey ?? false,
        outsidePress: typeof normalizable === 'boolean' ? normalizable : normalizable?.outsidePress ?? true
    };
}
function useDismiss(context, props = {}) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const floatingElement = store.useState('floatingElement');
    const { dataRef } = store.context;
    const { enabled = true, escapeKey = true, outsidePress: outsidePressProp = true, outsidePressEvent = 'sloppy', referencePress = alwaysFalse, referencePressEvent = 'sloppy', bubbles, externalTree } = props;
    const tree = useFloatingTree(externalTree);
    const outsidePressFn = (0, __TURBOPACK__imported__module__32787__4["useStableCallback"])(typeof outsidePressProp === 'function' ? outsidePressProp : ()=>false);
    const outsidePress = typeof outsidePressProp === 'function' ? outsidePressFn : outsidePressProp;
    const outsidePressEnabled = outsidePress !== false;
    const getOutsidePressEventProp = (0, __TURBOPACK__imported__module__32787__4["useStableCallback"])(()=>outsidePressEvent);
    const pressStartedInsideRef = __TURBOPACK__imported__module__51268__48["useRef"](false);
    const pressStartPreventedRef = __TURBOPACK__imported__module__51268__48["useRef"](false);
    // Ignore only the very next outside click after dragging from inside to outside.
    const suppressNextOutsideClickRef = __TURBOPACK__imported__module__51268__48["useRef"](false);
    const { escapeKey: escapeKeyBubbles, outsidePress: outsidePressBubbles } = normalizeProp(bubbles);
    const touchStateRef = __TURBOPACK__imported__module__51268__48["useRef"](null);
    const cancelDismissOnEndTimeout = useTimeout();
    const clearInsideReactTreeTimeout = useTimeout();
    const clearInsideReactTree = (0, __TURBOPACK__imported__module__32787__4["useStableCallback"])(()=>{
        clearInsideReactTreeTimeout.clear();
        dataRef.current.insideReactTree = false;
    });
    const isComposingRef = __TURBOPACK__imported__module__51268__48["useRef"](false);
    const currentPointerTypeRef = __TURBOPACK__imported__module__51268__48["useRef"]('');
    const isReferencePressEnabled = (0, __TURBOPACK__imported__module__32787__4["useStableCallback"])(referencePress);
    const closeOnEscapeKeyDown = (0, __TURBOPACK__imported__module__32787__4["useStableCallback"])((event)=>{
        if (!open || !enabled || !escapeKey || event.key !== 'Escape') {
            return;
        }
        // Wait until IME is settled. Pressing `Escape` while composing should
        // close the compose menu, but not the floating element.
        if (isComposingRef.current) {
            return;
        }
        const nodeId = dataRef.current.floatingContext?.nodeId;
        const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
        if (!escapeKeyBubbles) {
            if (children.length > 0) {
                let shouldDismiss = true;
                children.forEach((child)=>{
                    if (child.context?.open && !child.context.dataRef.current.__escapeKeyBubbles) {
                        shouldDismiss = false;
                    }
                });
                if (!shouldDismiss) {
                    return;
                }
            }
        }
        const native = isReactEvent(event) ? event.nativeEvent : event;
        const eventDetails = createChangeEventDetails(__TURBOPACK__imported__module__54906__.escapeKey, native);
        store.setOpen(false, eventDetails);
        if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
            event.stopPropagation();
        }
    });
    const markInsideReactTree = (0, __TURBOPACK__imported__module__32787__4["useStableCallback"])(()=>{
        dataRef.current.insideReactTree = true;
        clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
    });
    __TURBOPACK__imported__module__51268__48["useEffect"](()=>{
        if (!open || !enabled) {
            return undefined;
        }
        dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
        dataRef.current.__outsidePressBubbles = outsidePressBubbles;
        const compositionTimeout = new Timeout();
        const preventedPressSuppressionTimeout = new Timeout();
        function handleCompositionStart() {
            compositionTimeout.clear();
            isComposingRef.current = true;
        }
        function handleCompositionEnd() {
            // Safari fires `compositionend` before `keydown`, so we need to wait
            // until the next tick to set `isComposing` to `false`.
            // https://bugs.webkit.org/show_bug.cgi?id=165004
            compositionTimeout.start(// 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
            // Only apply to WebKit for the test to remain 0ms.
            (0, __TURBOPACK__imported__module__92615__10["isWebKit"])() ? 5 : 0, ()=>{
                isComposingRef.current = false;
            });
        }
        function suppressImmediateOutsideClickAfterPreventedStart() {
            suppressNextOutsideClickRef.current = true;
            // Firefox can emit the synthetic outside click in a later task after
            // pointer lock exit, so microtask clearing is too early here.
            preventedPressSuppressionTimeout.start(0, ()=>{
                suppressNextOutsideClickRef.current = false;
            });
        }
        function resetPressStartState() {
            pressStartedInsideRef.current = false;
            pressStartPreventedRef.current = false;
        }
        function getOutsidePressEvent() {
            const type = currentPointerTypeRef.current;
            const computedType = type === 'pen' || !type ? 'mouse' : type;
            const outsidePressEventValue = getOutsidePressEventProp();
            const resolved = typeof outsidePressEventValue === 'function' ? outsidePressEventValue() : outsidePressEventValue;
            if (typeof resolved === 'string') {
                return resolved;
            }
            return resolved[computedType];
        }
        function shouldIgnoreEvent(event) {
            const computedOutsidePressEvent = getOutsidePressEvent();
            return computedOutsidePressEvent === 'intentional' && event.type !== 'click' || computedOutsidePressEvent === 'sloppy' && event.type === 'click';
        }
        function isEventWithinFloatingTree(event) {
            const nodeId = dataRef.current.floatingContext?.nodeId;
            const targetIsInsideChildren = tree && getNodeChildren(tree.nodesRef.current, nodeId).some((node)=>isEventTargetWithin(event, node.context?.elements.floating));
            return isEventTargetWithin(event, store.select('floatingElement')) || isEventTargetWithin(event, store.select('domReferenceElement')) || targetIsInsideChildren;
        }
        function closeOnPressOutside(event) {
            if (shouldIgnoreEvent(event)) {
                clearInsideReactTree();
                return;
            }
            if (dataRef.current.insideReactTree) {
                clearInsideReactTree();
                return;
            }
            const target = getTarget(event);
            const inertSelector = `[${createAttribute('inert')}]`;
            const targetRoot = (0, __TURBOPACK__imported__module__92615__10["isElement"])(target) ? target.getRootNode() : null;
            const markers = Array.from(((0, __TURBOPACK__imported__module__92615__10["isShadowRoot"])(targetRoot) ? targetRoot : ownerDocument(store.select('floatingElement'))).querySelectorAll(inertSelector));
            const triggers = store.context.triggerElements;
            // If another trigger is clicked, don't close the floating element.
            if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger)=>contains(trigger, target)))) {
                return;
            }
            let targetRootAncestor = (0, __TURBOPACK__imported__module__92615__10["isElement"])(target) ? target : null;
            while(targetRootAncestor && !(0, __TURBOPACK__imported__module__92615__10["isLastTraversableNode"])(targetRootAncestor)){
                const nextParent = (0, __TURBOPACK__imported__module__92615__10["getParentNode"])(targetRootAncestor);
                if ((0, __TURBOPACK__imported__module__92615__10["isLastTraversableNode"])(nextParent) || !(0, __TURBOPACK__imported__module__92615__10["isElement"])(nextParent)) {
                    break;
                }
                targetRootAncestor = nextParent;
            }
            // Check if the click occurred on a third-party element injected after the
            // floating element rendered.
            if (markers.length && (0, __TURBOPACK__imported__module__92615__10["isElement"])(target) && !isRootElement(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
            !contains(target, store.select('floatingElement')) && // If the target root element contains none of the markers, then the
            // element was injected after the floating element rendered.
            markers.every((marker)=>!contains(targetRootAncestor, marker))) {
                return;
            }
            // Check if the click occurred on the scrollbar
            // Skip for touch events: scrollbars don't receive touch events on most platforms
            if ((0, __TURBOPACK__imported__module__92615__10["isHTMLElement"])(target) && !('touches' in event)) {
                const lastTraversableNode = (0, __TURBOPACK__imported__module__92615__10["isLastTraversableNode"])(target);
                const style = (0, __TURBOPACK__imported__module__92615__10["getComputedStyle"])(target);
                const scrollRe = /auto|scroll/;
                const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
                const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
                const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
                const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
                const isRTL = style.direction === 'rtl';
                // Check click position relative to scrollbar.
                // In some browsers it is possible to change the <body> (or window)
                // scrollbar to the left side, but is very rare and is difficult to
                // check for. Plus, for modal dialogs with backdrops, it is more
                // important that the backdrop is checked but not so much the window.
                const pressedVerticalScrollbar = canScrollY && (isRTL ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
                const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
                if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
                    return;
                }
            }
            if (isEventWithinFloatingTree(event)) {
                return;
            }
            // In intentional mode, a press that starts inside and ends outside gets
            // one suppressed outside click. Run this after inside-target checks so
            // inside clicks don't consume the one-shot suppression.
            if (getOutsidePressEvent() === 'intentional' && suppressNextOutsideClickRef.current) {
                preventedPressSuppressionTimeout.clear();
                suppressNextOutsideClickRef.current = false;
                return;
            }
            if (typeof outsidePress === 'function' && !outsidePress(event)) {
                return;
            }
            const nodeId = dataRef.current.floatingContext?.nodeId;
            const children = tree ? getNodeChildren(tree.nodesRef.current, nodeId) : [];
            if (children.length > 0) {
                let shouldDismiss = true;
                children.forEach((child)=>{
                    if (child.context?.open && !child.context.dataRef.current.__outsidePressBubbles) {
                        shouldDismiss = false;
                    }
                });
                if (!shouldDismiss) {
                    return;
                }
            }
            store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.outsidePress, event));
            clearInsideReactTree();
        }
        function handlePointerDown(event) {
            if (getOutsidePressEvent() !== 'sloppy' || event.pointerType === 'touch' || !store.select('open') || !enabled || isEventTargetWithin(event, store.select('floatingElement')) || isEventTargetWithin(event, store.select('domReferenceElement'))) {
                return;
            }
            closeOnPressOutside(event);
        }
        function handleTouchStart(event) {
            if (getOutsidePressEvent() !== 'sloppy' || !store.select('open') || !enabled || isEventTargetWithin(event, store.select('floatingElement')) || isEventTargetWithin(event, store.select('domReferenceElement'))) {
                return;
            }
            const touch = event.touches[0];
            if (touch) {
                touchStateRef.current = {
                    startTime: Date.now(),
                    startX: touch.clientX,
                    startY: touch.clientY,
                    dismissOnTouchEnd: false,
                    dismissOnMouseDown: true
                };
                cancelDismissOnEndTimeout.start(1000, ()=>{
                    if (touchStateRef.current) {
                        touchStateRef.current.dismissOnTouchEnd = false;
                        touchStateRef.current.dismissOnMouseDown = false;
                    }
                });
            }
        }
        function addTargetEventListenerOnce(event, listener) {
            const target = getTarget(event);
            if (!target) {
                return;
            }
            const unsubscribe = addEventListener(target, event.type, ()=>{
                listener(event);
                unsubscribe();
            });
        }
        function handleTouchStartCapture(event) {
            currentPointerTypeRef.current = 'touch';
            addTargetEventListenerOnce(event, handleTouchStart);
        }
        function closeOnPressOutsideCapture(event) {
            cancelDismissOnEndTimeout.clear();
            if (event.type === 'pointerdown') {
                currentPointerTypeRef.current = event.pointerType;
            }
            if (event.type === 'mousedown' && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
                return;
            }
            addTargetEventListenerOnce(event, (targetEvent)=>{
                if (targetEvent.type === 'pointerdown') {
                    handlePointerDown(targetEvent);
                } else {
                    closeOnPressOutside(targetEvent);
                }
            });
        }
        function handlePressEndCapture(event) {
            if (!pressStartedInsideRef.current) {
                return;
            }
            const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
            resetPressStartState();
            if (getOutsidePressEvent() !== 'intentional') {
                return;
            }
            if (event.type === 'pointercancel') {
                if (pressStartedInsideDefaultPrevented) {
                    suppressImmediateOutsideClickAfterPreventedStart();
                }
                return;
            }
            if (isEventWithinFloatingTree(event)) {
                return;
            }
            // If pointerdown was prevented, no click may be generated for that
            // interaction. However, Firefox may still emit an immediate click after
            // pointerup (e.g. NumberField scrub with pointer lock), so suppress for
            // one tick to absorb that synthetic click only.
            if (pressStartedInsideDefaultPrevented) {
                suppressImmediateOutsideClickAfterPreventedStart();
                return;
            }
            // Avoid suppressing when outsidePress explicitly ignores this target.
            if (typeof outsidePress === 'function' && !outsidePress(event)) {
                return;
            }
            preventedPressSuppressionTimeout.clear();
            suppressNextOutsideClickRef.current = true;
            clearInsideReactTree();
        }
        function handleTouchMove(event) {
            if (getOutsidePressEvent() !== 'sloppy' || !touchStateRef.current || isEventTargetWithin(event, store.select('floatingElement')) || isEventTargetWithin(event, store.select('domReferenceElement'))) {
                return;
            }
            const touch = event.touches[0];
            if (!touch) {
                return;
            }
            const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
            const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (distance > 5) {
                touchStateRef.current.dismissOnTouchEnd = true;
            }
            if (distance > 10) {
                closeOnPressOutside(event);
                cancelDismissOnEndTimeout.clear();
                touchStateRef.current = null;
            }
        }
        function handleTouchMoveCapture(event) {
            addTargetEventListenerOnce(event, handleTouchMove);
        }
        function handleTouchEnd(event) {
            if (getOutsidePressEvent() !== 'sloppy' || !touchStateRef.current || isEventTargetWithin(event, store.select('floatingElement')) || isEventTargetWithin(event, store.select('domReferenceElement'))) {
                return;
            }
            if (touchStateRef.current.dismissOnTouchEnd) {
                closeOnPressOutside(event);
            }
            cancelDismissOnEndTimeout.clear();
            touchStateRef.current = null;
        }
        function handleTouchEndCapture(event) {
            addTargetEventListenerOnce(event, handleTouchEnd);
        }
        const doc = ownerDocument(floatingElement);
        const unsubscribe = mergeCleanups(escapeKey && mergeCleanups(addEventListener(doc, 'keydown', closeOnEscapeKeyDown), addEventListener(doc, 'compositionstart', handleCompositionStart), addEventListener(doc, 'compositionend', handleCompositionEnd)), outsidePressEnabled && mergeCleanups(addEventListener(doc, 'click', closeOnPressOutsideCapture, true), addEventListener(doc, 'pointerdown', closeOnPressOutsideCapture, true), addEventListener(doc, 'pointerup', handlePressEndCapture, true), addEventListener(doc, 'pointercancel', handlePressEndCapture, true), addEventListener(doc, 'mousedown', closeOnPressOutsideCapture, true), addEventListener(doc, 'mouseup', handlePressEndCapture, true), addEventListener(doc, 'touchstart', handleTouchStartCapture, true), addEventListener(doc, 'touchmove', handleTouchMoveCapture, true), addEventListener(doc, 'touchend', handleTouchEndCapture, true)));
        return ()=>{
            unsubscribe();
            compositionTimeout.clear();
            preventedPressSuppressionTimeout.clear();
            resetPressStartState();
            suppressNextOutsideClickRef.current = false;
        };
    }, [
        dataRef,
        floatingElement,
        escapeKey,
        outsidePressEnabled,
        outsidePress,
        open,
        enabled,
        escapeKeyBubbles,
        outsidePressBubbles,
        closeOnEscapeKeyDown,
        clearInsideReactTree,
        getOutsidePressEventProp,
        tree,
        store,
        cancelDismissOnEndTimeout
    ]);
    __TURBOPACK__imported__module__51268__48["useEffect"](clearInsideReactTree, [
        outsidePress,
        clearInsideReactTree
    ]);
    const reference = __TURBOPACK__imported__module__51268__48["useMemo"](()=>({
            onKeyDown: closeOnEscapeKeyDown,
            [bubbleHandlerKeys[referencePressEvent]]: (event)=>{
                if (!isReferencePressEnabled()) {
                    return;
                }
                store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerPress, event.nativeEvent));
            },
            ...referencePressEvent !== 'intentional' && {
                onClick (event) {
                    if (!isReferencePressEnabled()) {
                        return;
                    }
                    store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerPress, event.nativeEvent));
                }
            }
        }), [
        closeOnEscapeKeyDown,
        store,
        referencePressEvent,
        isReferencePressEnabled
    ]);
    const markPressStartedInsideReactTree = (0, __TURBOPACK__imported__module__32787__4["useStableCallback"])((event)=>{
        if (!open || !enabled || event.button !== 0) {
            return;
        }
        const target = getTarget(event.nativeEvent);
        // Only treat presses that start within the floating DOM subtree as inside.
        // This avoids suppressing parent dismissal when interacting with nested portals.
        if (!contains(store.select('floatingElement'), target)) {
            return;
        }
        if (!pressStartedInsideRef.current) {
            pressStartedInsideRef.current = true;
            pressStartPreventedRef.current = false;
        }
    });
    const markInsidePressStartPrevented = (0, __TURBOPACK__imported__module__32787__4["useStableCallback"])((event)=>{
        if (!open || !enabled) {
            return;
        }
        if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
            return;
        }
        if (pressStartedInsideRef.current) {
            pressStartPreventedRef.current = true;
        }
    });
    const floating = __TURBOPACK__imported__module__51268__48["useMemo"](()=>({
            onKeyDown: closeOnEscapeKeyDown,
            // `onMouseDown` may be blocked if `event.preventDefault()` is called in
            // `onPointerDown`, such as with <NumberField.ScrubArea>.
            // See https://github.com/mui/base-ui/pull/3379
            onPointerDown: markInsidePressStartPrevented,
            onMouseDown: markInsidePressStartPrevented,
            onClickCapture: markInsideReactTree,
            onMouseDownCapture (event) {
                markInsideReactTree();
                markPressStartedInsideReactTree(event);
            },
            onPointerDownCapture (event) {
                markInsideReactTree();
                markPressStartedInsideReactTree(event);
            },
            onMouseUpCapture: markInsideReactTree,
            onTouchEndCapture: markInsideReactTree,
            onTouchMoveCapture: markInsideReactTree
        }), [
        closeOnEscapeKeyDown,
        markInsideReactTree,
        markPressStartedInsideReactTree,
        markInsidePressStartPrevented
    ]);
    return __TURBOPACK__imported__module__51268__48["useMemo"](()=>enabled ? {
            reference,
            floating,
            trigger: reference
        } : {}, [
        enabled,
        reference,
        floating
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useInteractions.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__49 = __TURBOPACK__imported__module__51268__;
;
;
function useInteractions(propsList = []) {
    const referenceDeps = propsList.map((key)=>key?.reference);
    const floatingDeps = propsList.map((key)=>key?.floating);
    const itemDeps = propsList.map((key)=>key?.item);
    const triggerDeps = propsList.map((key)=>key?.trigger);
    const getReferenceProps = __TURBOPACK__imported__module__51268__49["useCallback"]((userProps)=>mergeProps2(userProps, propsList, 'reference'), // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps);
    const getFloatingProps = __TURBOPACK__imported__module__51268__49["useCallback"]((userProps)=>mergeProps2(userProps, propsList, 'floating'), // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps);
    const getItemProps = __TURBOPACK__imported__module__51268__49["useCallback"]((userProps)=>mergeProps2(userProps, propsList, 'item'), // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps);
    const getTriggerProps = __TURBOPACK__imported__module__51268__49["useCallback"]((userProps)=>mergeProps2(userProps, propsList, 'trigger'), // eslint-disable-next-line react-hooks/exhaustive-deps
    triggerDeps);
    return __TURBOPACK__imported__module__51268__49["useMemo"](()=>({
            getReferenceProps,
            getFloatingProps,
            getItemProps,
            getTriggerProps
        }), [
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        getTriggerProps
    ]);
}
/* eslint-disable guard-for-in */ function mergeProps2(userProps, propsList, elementKey) {
    const eventHandlers = new Map();
    const isItem = elementKey === 'item';
    const outputProps = {};
    if (elementKey === 'floating') {
        outputProps.tabIndex = -1;
        outputProps[FOCUSABLE_ATTRIBUTE] = '';
    }
    for(const key in userProps){
        if (isItem && userProps) {
            if (key === ACTIVE_KEY || key === SELECTED_KEY) {
                continue;
            }
        }
        outputProps[key] = userProps[key];
    }
    for(let i = 0; i < propsList.length; i += 1){
        let props;
        const propsOrGetProps = propsList[i]?.[elementKey];
        if (typeof propsOrGetProps === 'function') {
            props = userProps ? propsOrGetProps(userProps) : null;
        } else {
            props = propsOrGetProps;
        }
        if (!props) {
            continue;
        }
        mutablyMergeProps(outputProps, props, isItem, eventHandlers);
    }
    mutablyMergeProps(outputProps, userProps, isItem, eventHandlers);
    return outputProps;
}
function mutablyMergeProps(outputProps, props, isItem, eventHandlers) {
    for(const key in props){
        const value1 = props[key];
        if (isItem && (key === ACTIVE_KEY || key === SELECTED_KEY)) {
            continue;
        }
        if (!key.startsWith('on')) {
            outputProps[key] = value1;
        } else {
            if (!eventHandlers.has(key)) {
                eventHandlers.set(key, []);
            }
            if (typeof value1 === 'function') {
                eventHandlers.get(key)?.push(value1);
                outputProps[key] = (...args)=>{
                    return eventHandlers.get(key)?.map((fn)=>fn(...args)).find((val)=>val !== undefined);
                };
            }
        }
    }
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useRole.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__50 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__4 = __TURBOPACK__imported__module__24659__;
;
;
;
;
;
const componentRoleToAriaRoleMap = new Map([
    [
        'select',
        'listbox'
    ],
    [
        'combobox',
        'listbox'
    ],
    [
        'label',
        false
    ]
]);
function useRole(context, props = {}) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const defaultFloatingId = store.useState('floatingId');
    const domReference = store.useState('domReferenceElement');
    const floatingElement = store.useState('floatingElement');
    const { role = 'dialog' } = props;
    const defaultReferenceId = useId1();
    const referenceId = domReference?.id || defaultReferenceId;
    const floatingId = __TURBOPACK__imported__module__51268__50["useMemo"](()=>getFloatingFocusElement(floatingElement)?.id || defaultFloatingId, [
        floatingElement,
        defaultFloatingId
    ]);
    const ariaRole = componentRoleToAriaRoleMap.get(role) ?? role;
    const parentId = useFloatingParentNodeId();
    const isNested = parentId != null;
    const trigger = __TURBOPACK__imported__module__51268__50["useMemo"](()=>{
        if (ariaRole === 'tooltip' || role === 'label') {
            return __TURBOPACK__imported__module__24659__4["EMPTY_OBJECT"];
        }
        return {
            'aria-haspopup': ariaRole === 'alertdialog' ? 'dialog' : ariaRole,
            'aria-expanded': 'false',
            ...ariaRole === 'listbox' && {
                role: 'combobox'
            },
            ...ariaRole === 'menu' && isNested && {
                role: 'menuitem'
            },
            ...role === 'select' && {
                'aria-autocomplete': 'none'
            },
            ...role === 'combobox' && {
                'aria-autocomplete': 'list'
            }
        };
    }, [
        ariaRole,
        isNested,
        role
    ]);
    const reference = __TURBOPACK__imported__module__51268__50["useMemo"](()=>{
        if (ariaRole === 'tooltip' || role === 'label') {
            return {
                [`aria-${role === 'label' ? 'labelledby' : 'describedby'}`]: open ? floatingId : undefined
            };
        }
        const triggerProps = trigger;
        return {
            ...triggerProps,
            'aria-expanded': open ? 'true' : 'false',
            'aria-controls': open ? floatingId : undefined,
            ...ariaRole === 'menu' && {
                id: referenceId
            }
        };
    }, [
        ariaRole,
        floatingId,
        open,
        referenceId,
        role,
        trigger
    ]);
    const floating = __TURBOPACK__imported__module__51268__50["useMemo"](()=>{
        const floatingProps = {
            id: floatingId,
            ...ariaRole && {
                role: ariaRole
            }
        };
        if (ariaRole === 'tooltip' || role === 'label') {
            return floatingProps;
        }
        return {
            ...floatingProps,
            ...ariaRole === 'menu' && {
                'aria-labelledby': referenceId
            }
        };
    }, [
        ariaRole,
        floatingId,
        referenceId,
        role
    ]);
    const item = __TURBOPACK__imported__module__51268__50["useCallback"](({ active, selected })=>{
        const commonProps = {
            role: 'option',
            ...active && {
                id: `${floatingId}-fui-option`
            }
        };
        // For `menu`, we are unable to tell if the item is a `menuitemradio`
        // or `menuitemcheckbox`. For backwards-compatibility reasons, also
        // avoid defaulting to `menuitem` as it may overwrite custom role props.
        switch(role){
            case 'select':
            case 'combobox':
                return {
                    ...commonProps,
                    'aria-selected': selected
                };
            default:
        }
        return {};
    }, [
        floatingId,
        role
    ]);
    return __TURBOPACK__imported__module__51268__50["useMemo"](()=>({
            reference,
            floating,
            item,
            trigger
        }), [
        reference,
        floating,
        trigger,
        item
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useSyncedFloatingRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67452__4 = __TURBOPACK__imported__module__67452__;
var __TURBOPACK__imported__module__91900__6 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__92615__11 = __TURBOPACK__imported__module__92615__1;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingRootStore.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/store/createSelector.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__14 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__2 = __TURBOPACK__imported__module__16174__;
;
const createSelector = (a, b, c, d, e, f, ...other)=>{
    if (other.length > 0) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__2["default"])(1));
    }
    let selector;
    if (a && b && c && d && e && f) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            const vd = d(state, a1, a2, a3);
            const ve = e(state, a1, a2, a3);
            return f(va, vb, vc, vd, ve, a1, a2, a3);
        };
    } else if (a && b && c && d && e) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            const vd = d(state, a1, a2, a3);
            return e(va, vb, vc, vd, a1, a2, a3);
        };
    } else if (a && b && c && d) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            return d(va, vb, vc, a1, a2, a3);
        };
    } else if (a && b && c) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            return c(va, vb, a1, a2, a3);
        };
    } else if (a && b) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            return b(va, a1, a2, a3);
        };
    } else if (a) {
        selector = a;
    } else {
        throw /* minify-error-disabled */ new Error('Missing arguments');
    }
    return selector;
}; /* eslint-enable id-denylist */ 
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/store/ReactStore.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__15 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__51 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/store/Store.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__52 = __TURBOPACK__imported__module__51268__;
/* We need to import the shim because React 17 does not support the `useSyncExternalStore` API.
 * More info: https://github.com/mui/mui-x/issues/18303#issuecomment-2958392341 */ var __TURBOPACK__imported__module__56032__ = __turbopack_context__.i(56032);
var __TURBOPACK__imported__module__96482__ = __turbopack_context__.i(96482);
var __TURBOPACK__imported__module__91226__1 = __TURBOPACK__imported__module__91226__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/fastHooks.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__53 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__67452__5 = __TURBOPACK__imported__module__67452__;
;
;
const hooks = [];
let currentInstance = undefined;
function getInstance() {
    return currentInstance;
}
function setInstance(instance) {
    currentInstance = instance;
}
function register(hook) {
    hooks.push(hook);
}
function fastComponent(fn) {
    const FastComponent = (props, forwardedRef)=>{
        const instance = (0, __TURBOPACK__imported__module__67452__5["useRefWithInit"])(createInstance).current;
        let result;
        try {
            currentInstance = instance;
            for (const hook of hooks){
                hook.before(instance);
            }
            result = fn(props, forwardedRef);
            for (const hook of hooks){
                hook.after(instance);
            }
            instance.didInitialize = true;
        } finally{
            currentInstance = undefined;
        }
        return result;
    };
    FastComponent.displayName = fn.displayName || fn.name;
    return FastComponent;
}
function fastComponentRef(fn) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__51268__53["forwardRef"](fastComponent(fn));
}
function createInstance() {
    return {
        didInitialize: false
    };
}
;
;
;
;
;
/* Some tests fail in R18 with the raw useSyncExternalStore. It may be possible to make it work
 * but for now we only enable it for R19+. */ const canUseRawUseSyncExternalStore = (0, __TURBOPACK__imported__module__91226__1["isReactVersionAtLeast"])(19);
const useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
    return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
    const getSelection = __TURBOPACK__imported__module__51268__52["useCallback"](()=>selector(store.getSnapshot(), a1, a2, a3), [
        store,
        selector,
        a1,
        a2,
        a3
    ]);
    return (0, __TURBOPACK__imported__module__56032__["useSyncExternalStore"])(store.subscribe, getSelection, getSelection);
}
register({
    before (instance) {
        instance.syncIndex = 0;
        if (!instance.didInitialize) {
            instance.syncTick = 1;
            instance.syncHooks = [];
            instance.didChangeStore = true;
            instance.getSnapshot = ()=>{
                let didChange = false;
                for(let i = 0; i < instance.syncHooks.length; i += 1){
                    const hook = instance.syncHooks[i];
                    const value1 = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
                    if (hook.didChange || !Object.is(hook.value, value1)) {
                        didChange = true;
                        hook.value = value1;
                        hook.didChange = false;
                    }
                }
                if (didChange) {
                    instance.syncTick += 1;
                }
                return instance.syncTick;
            };
        }
    },
    after (instance) {
        if (instance.syncHooks.length > 0) {
            if (instance.didChangeStore) {
                instance.didChangeStore = false;
                instance.subscribe = (onStoreChange)=>{
                    const stores = new Set();
                    for (const hook of instance.syncHooks){
                        stores.add(hook.store);
                    }
                    const unsubscribes = [];
                    for (const store of stores){
                        unsubscribes.push(store.subscribe(onStoreChange));
                    }
                    return ()=>{
                        for (const unsubscribe of unsubscribes){
                            unsubscribe();
                        }
                    };
                };
            }
            // eslint-disable-next-line react-hooks/rules-of-hooks
            (0, __TURBOPACK__imported__module__56032__["useSyncExternalStore"])(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
        }
    }
});
function useStoreFast(store, selector, a1, a2, a3) {
    const instance = getInstance();
    if (!instance) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useStoreR19(store, selector, a1, a2, a3);
    }
    const index = instance.syncIndex;
    instance.syncIndex += 1;
    let hook;
    if (!instance.didInitialize) {
        hook = {
            store,
            selector,
            a1,
            a2,
            a3,
            value: selector(store.getSnapshot(), a1, a2, a3),
            didChange: false
        };
        instance.syncHooks.push(hook);
    } else {
        hook = instance.syncHooks[index];
        if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
            if (hook.store !== store) {
                instance.didChangeStore = true;
            }
            hook.store = store;
            hook.selector = selector;
            hook.a1 = a1;
            hook.a2 = a2;
            hook.a3 = a3;
            hook.didChange = true;
        }
    }
    return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
    return (0, __TURBOPACK__imported__module__96482__["useSyncExternalStoreWithSelector"])(store.subscribe, store.getSnapshot, store.getSnapshot, (state)=>selector(state, a1, a2, a3));
}
;
class Store {
    /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */ // Internal state to handle recursive `setState()` calls
    constructor(state){
        this.state = state;
        this.listeners = new Set();
        this.updateTick = 0;
    }
    /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */ subscribe = (fn)=>{
        this.listeners.add(fn);
        return ()=>{
            this.listeners.delete(fn);
        };
    };
    /**
   * Returns the current state of the store.
   */ getSnapshot = ()=>{
        return this.state;
    };
    /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */ setState(newState) {
        if (this.state === newState) {
            return;
        }
        this.state = newState;
        this.updateTick += 1;
        const currentTick = this.updateTick;
        for (const listener of this.listeners){
            if (currentTick !== this.updateTick) {
                // If the tick has changed, a recursive `setState` call has been made,
                // and it has already notified all listeners.
                return;
            }
            listener(newState);
        }
    }
    /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */ update(changes) {
        for(const key in changes){
            if (!Object.is(this.state[key], changes[key])) {
                this.setState({
                    ...this.state,
                    ...changes
                });
                return;
            }
        }
    }
    /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */ set(key, value1) {
        if (!Object.is(this.state[key], value1)) {
            this.setState({
                ...this.state,
                [key]: value1
            });
        }
    }
    /**
   * Gives the state a new reference and updates all registered listeners.
   */ notifyAll() {
        const newState = {
            ...this.state
        };
        this.setState(newState);
    }
    use(selector, a1, a2, a3) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useStore(this, selector, a1, a2, a3);
    }
}
var __TURBOPACK__imported__module__32787__5 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__7 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__24659__5 = __TURBOPACK__imported__module__24659__;
/* False positives - ESLint thinks we're calling a hook from a class component. */ /* eslint-disable react-hooks/rules-of-hooks */ 'use client';
;
;
;
;
;
;
class ReactStore extends Store {
    /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */ constructor(state, context = {}, selectors){
        super(state);
        this.context = context;
        this.selectors = selectors;
    }
    /**
   * Non-reactive values such as refs, callbacks, etc.
   */ /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */ useSyncedValue(key, value1) {
        __TURBOPACK__imported__module__51268__51["useDebugValue"](key);
        (0, __TURBOPACK__imported__module__91900__7["useIsoLayoutEffect"])(()=>{
            if (this.state[key] !== value1) {
                this.set(key, value1);
            }
        }, [
            key,
            value1
        ]);
    }
    /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */ useSyncedValueWithCleanup(key, value1) {
        // eslint-disable-next-line consistent-this
        const store = this;
        (0, __TURBOPACK__imported__module__91900__7["useIsoLayoutEffect"])(()=>{
            if (store.state[key] !== value1) {
                store.set(key, value1);
            }
            return ()=>{
                store.set(key, undefined);
            };
        }, [
            store,
            key,
            value1
        ]);
    }
    /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */ useSyncedValues(statePart) {
        // eslint-disable-next-line consistent-this
        const store = this;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const dependencies = Object.values(statePart);
        (0, __TURBOPACK__imported__module__91900__7["useIsoLayoutEffect"])(()=>{
            store.update(statePart);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            store,
            ...dependencies
        ]);
    }
    /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */ useControlledProp(key, controlled) {
        __TURBOPACK__imported__module__51268__51["useDebugValue"](key);
        const isControlled = controlled !== undefined;
        (0, __TURBOPACK__imported__module__91900__7["useIsoLayoutEffect"])(()=>{
            if (isControlled && !Object.is(this.state[key], controlled)) {
                // Set the internal state to match the controlled value.
                super.setState({
                    ...this.state,
                    [key]: controlled
                });
            }
        }, [
            key,
            controlled,
            isControlled
        ]);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */ select(key, a1, a2, a3) {
        const selector = this.selectors[key];
        return selector(this.state, a1, a2, a3);
    }
    /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */ useState(key, a1, a2, a3) {
        __TURBOPACK__imported__module__51268__51["useDebugValue"](key);
        return useStore(this, this.selectors[key], a1, a2, a3);
    }
    /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */ useContextCallback(key, fn) {
        __TURBOPACK__imported__module__51268__51["useDebugValue"](key);
        const stableFunction = (0, __TURBOPACK__imported__module__32787__5["useStableCallback"])(fn ?? __TURBOPACK__imported__module__24659__5["NOOP"]);
        this.context[key] = stableFunction;
    }
    /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */ useStateSetter(key) {
        const ref = __TURBOPACK__imported__module__51268__51["useRef"](undefined);
        if (ref.current === undefined) {
            ref.current = (value1)=>{
                this.set(key, value1);
            };
        }
        return ref.current;
    }
    /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */ observe(selector, listener) {
        let selectFn;
        if (typeof selector === 'function') {
            selectFn = selector;
        } else {
            selectFn = this.selectors[selector];
        }
        let prevValue = selectFn(this.state);
        listener(prevValue, prevValue, this);
        return this.subscribe((nextState)=>{
            const nextValue = selectFn(nextState);
            if (!Object.is(prevValue, nextValue)) {
                const oldValue = prevValue;
                prevValue = nextValue;
                listener(nextValue, oldValue, this);
            }
        });
    }
}
;
;
;
const selectors = {
    open: createSelector((state)=>state.open),
    transitionStatus: createSelector((state)=>state.transitionStatus),
    domReferenceElement: createSelector((state)=>state.domReferenceElement),
    referenceElement: createSelector((state)=>state.positionReference ?? state.referenceElement),
    floatingElement: createSelector((state)=>state.floatingElement),
    floatingId: createSelector((state)=>state.floatingId)
};
class FloatingRootStore extends ReactStore {
    constructor(options){
        const { syncOnly, nested, onOpenChange, triggerElements, ...initialState } = options;
        super({
            ...initialState,
            positionReference: initialState.referenceElement,
            domReferenceElement: initialState.referenceElement
        }, {
            onOpenChange,
            dataRef: {
                current: {}
            },
            events: createEventEmitter(),
            nested,
            triggerElements
        }, selectors);
        this.syncOnly = syncOnly;
    }
    /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */ syncOpenEvent = (newOpen, event)=>{
        if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
        // click events to upgrade a hover-open.
        event != null && isClickLikeEvent(event)) {
            this.context.dataRef.current.openEvent = newOpen ? event : undefined;
        }
    };
    /**
   * Runs the root-owned side effects for an open state change.
   */ dispatchOpenChange = (newOpen, eventDetails)=>{
        this.syncOpenEvent(newOpen, eventDetails.event);
        const details = {
            open: newOpen,
            reason: eventDetails.reason,
            nativeEvent: eventDetails.event,
            nested: this.context.nested,
            triggerElement: eventDetails.trigger
        };
        this.context.events.emit('openchange', details);
    };
    /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */ setOpen = (newOpen, eventDetails)=>{
        if (this.syncOnly) {
            this.context.onOpenChange?.(newOpen, eventDetails);
            return;
        }
        this.dispatchOpenChange(newOpen, eventDetails);
        this.context.onOpenChange?.(newOpen, eventDetails);
    };
}
'use client';
;
;
;
;
;
;
function useSyncedFloatingRootContext(options) {
    const { popupStore, treatPopupAsFloatingElement = false, onOpenChange } = options;
    const floatingId = useId1();
    const nested = useFloatingParentNodeId() != null;
    const open = popupStore.useState('open');
    const referenceElement = popupStore.useState('activeTriggerElement');
    const floatingElement = popupStore.useState(treatPopupAsFloatingElement ? 'popupElement' : 'positionerElement');
    const triggerElements = popupStore.context.triggerElements;
    const store = (0, __TURBOPACK__imported__module__67452__4["useRefWithInit"])(()=>new FloatingRootStore({
            open,
            transitionStatus: undefined,
            referenceElement,
            floatingElement,
            triggerElements,
            onOpenChange,
            floatingId,
            syncOnly: true,
            nested
        })).current;
    (0, __TURBOPACK__imported__module__91900__6["useIsoLayoutEffect"])(()=>{
        const valuesToSync = {
            open,
            floatingId,
            referenceElement,
            floatingElement
        };
        if ((0, __TURBOPACK__imported__module__92615__11["isElement"])(referenceElement)) {
            valuesToSync.domReferenceElement = referenceElement;
        }
        if (store.state.positionReference === store.state.referenceElement) {
            valuesToSync.positionReference = referenceElement;
        }
        store.update(valuesToSync);
    }, [
        open,
        floatingId,
        referenceElement,
        floatingElement,
        store
    ]);
    // TODO: When `setOpen` is a part of the PopupStore API, we don't need to sync it.
    store.context.onOpenChange = onOpenChange;
    store.context.nested = nested;
    return store;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__54 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__6 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useEnhancedClickHandler.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__55 = __TURBOPACK__imported__module__51268__;
'use client';
;
function useEnhancedClickHandler(handler) {
    const lastClickInteractionTypeRef = __TURBOPACK__imported__module__51268__55["useRef"]('');
    const handlePointerDown = __TURBOPACK__imported__module__51268__55["useCallback"]((event)=>{
        if (event.defaultPrevented) {
            return;
        }
        lastClickInteractionTypeRef.current = event.pointerType;
        handler(event, event.pointerType);
    }, [
        handler
    ]);
    const handleClick = __TURBOPACK__imported__module__51268__55["useCallback"]((event)=>{
        // event.detail has the number of clicks performed on the element. 0 means it was triggered by the keyboard.
        if (event.detail === 0) {
            handler(event, 'keyboard');
            return;
        }
        if ('pointerType' in event) {
            // Chrome and Edge correctly use PointerEvent
            handler(event, event.pointerType);
        } else {
            handler(event, lastClickInteractionTypeRef.current);
        }
        lastClickInteractionTypeRef.current = '';
    }, [
        handler
    ]);
    return {
        onClick: handleClick,
        onPointerDown: handlePointerDown
    };
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useValueChanged.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__56 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__8 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__7 = __TURBOPACK__imported__module__32787__;
'use client';
;
;
;
function useValueChanged(value1, onChange) {
    const valueRef = __TURBOPACK__imported__module__51268__56["useRef"](value1);
    const onChangeCallback = (0, __TURBOPACK__imported__module__32787__7["useStableCallback"])(onChange);
    (0, __TURBOPACK__imported__module__91900__8["useIsoLayoutEffect"])(()=>{
        if (valueRef.current === value1) {
            return;
        }
        onChangeCallback(valueRef.current);
    }, [
        value1,
        onChangeCallback
    ]);
    (0, __TURBOPACK__imported__module__91900__8["useIsoLayoutEffect"])(()=>{
        valueRef.current = value1;
    }, [
        value1
    ]);
}
'use client';
;
;
;
;
;
function useOpenInteractionType(open) {
    const [openMethod, setOpenMethod] = __TURBOPACK__imported__module__51268__54["useState"](null);
    const handleTriggerClick = (0, __TURBOPACK__imported__module__32787__6["useStableCallback"])((_, interactionType)=>{
        if (!open) {
            setOpenMethod(interactionType || (// On iOS Safari, the hitslop around touch targets means tapping outside an element's
            // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
            // will be "" in that case.
            isIOS ? 'touch' : ''));
        }
    });
    useValueChanged(open, (previousOpen)=>{
        if (previousOpen && !open) {
            setOpenMethod(null);
        }
    });
    const { onClick, onPointerDown } = useEnhancedClickHandler(handleTriggerClick);
    return __TURBOPACK__imported__module__51268__54["useMemo"](()=>({
            openMethod,
            triggerProps: {
                onClick,
                onPointerDown
            }
        }), [
        openMethod,
        onClick,
        onPointerDown
    ]);
}
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/popups/popupStoreUtils.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__57 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__8 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__9 = __TURBOPACK__imported__module__91900__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useTransitionStatus.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__58 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__10 = __TURBOPACK__imported__module__91900__;
'use client';
;
;
;
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
    const [transitionStatus, setTransitionStatus] = __TURBOPACK__imported__module__51268__58["useState"](open && enableIdleState ? 'idle' : undefined);
    const [mounted, setMounted] = __TURBOPACK__imported__module__51268__58["useState"](open);
    if (open && !mounted) {
        setMounted(true);
        setTransitionStatus('starting');
    }
    if (!open && mounted && transitionStatus !== 'ending' && !deferEndingState) {
        setTransitionStatus('ending');
    }
    if (!open && !mounted && transitionStatus === 'ending') {
        setTransitionStatus(undefined);
    }
    (0, __TURBOPACK__imported__module__91900__10["useIsoLayoutEffect"])(()=>{
        if (!open && mounted && transitionStatus !== 'ending' && deferEndingState) {
            const frame = AnimationFrame.request(()=>{
                setTransitionStatus('ending');
            });
            return ()=>{
                AnimationFrame.cancel(frame);
            };
        }
        return undefined;
    }, [
        open,
        mounted,
        transitionStatus,
        deferEndingState
    ]);
    (0, __TURBOPACK__imported__module__91900__10["useIsoLayoutEffect"])(()=>{
        if (!open || enableIdleState) {
            return undefined;
        }
        const frame = AnimationFrame.request(()=>{
            // Avoid `flushSync` here due to Firefox.
            // See https://github.com/mui/base-ui/pull/3424
            setTransitionStatus(undefined);
        });
        return ()=>{
            AnimationFrame.cancel(frame);
        };
    }, [
        enableIdleState,
        open
    ]);
    (0, __TURBOPACK__imported__module__91900__10["useIsoLayoutEffect"])(()=>{
        if (!open || !enableIdleState) {
            return undefined;
        }
        if (open && mounted && transitionStatus !== 'idle') {
            setTransitionStatus('starting');
        }
        const frame = AnimationFrame.request(()=>{
            setTransitionStatus('idle');
        });
        return ()=>{
            AnimationFrame.cancel(frame);
        };
    }, [
        enableIdleState,
        open,
        mounted,
        transitionStatus
    ]);
    return {
        mounted,
        setMounted,
        transitionStatus
    };
}
'use client';
;
;
;
;
;
function useTriggerRegistration(id, store) {
    // Keep track of the currently registered element to unregister it on unmount or id change.
    const registeredElementIdRef = __TURBOPACK__imported__module__51268__57["useRef"](null);
    const registeredElementRef = __TURBOPACK__imported__module__51268__57["useRef"](null);
    return __TURBOPACK__imported__module__51268__57["useCallback"]((element)=>{
        if (id === undefined) {
            return;
        }
        if (registeredElementIdRef.current !== null) {
            const registeredId = registeredElementIdRef.current;
            const registeredElement = registeredElementRef.current;
            const currentElement = store.context.triggerElements.getById(registeredId);
            if (registeredElement && currentElement === registeredElement) {
                store.context.triggerElements.delete(registeredId);
            }
            registeredElementIdRef.current = null;
            registeredElementRef.current = null;
        }
        if (element !== null) {
            registeredElementIdRef.current = id;
            registeredElementRef.current = element;
            store.context.triggerElements.add(id, element);
        }
    }, [
        store,
        id
    ]);
}
function useTriggerDataForwarding(triggerId, triggerElementRef, store, stateUpdates) {
    const isMountedByThisTrigger = store.useState('isMountedByTrigger', triggerId);
    const baseRegisterTrigger = useTriggerRegistration(triggerId, store);
    const registerTrigger = (0, __TURBOPACK__imported__module__32787__8["useStableCallback"])((element)=>{
        baseRegisterTrigger(element);
        if (!element || !store.select('open')) {
            return;
        }
        const activeTriggerId = store.select('activeTriggerId');
        if (activeTriggerId === triggerId) {
            store.update({
                activeTriggerElement: element,
                ...stateUpdates
            });
            return;
        }
        if (activeTriggerId == null) {
            // This runs when popup is open, but no active trigger is set.
            // It can happen when using controlled mode and the trigger is mounted after opening or if `triggerId` prop is not set explicitly.
            // In such cases the first trigger to run this code becomes the active trigger (store.select('activeTriggerId') should not return null after that).
            // This is mostly for compatibility with contained triggers where no explicit `triggerId` was required in controlled mode.
            store.update({
                activeTriggerId: triggerId,
                activeTriggerElement: element,
                ...stateUpdates
            });
        }
    });
    (0, __TURBOPACK__imported__module__91900__9["useIsoLayoutEffect"])(()=>{
        if (isMountedByThisTrigger) {
            store.update({
                activeTriggerElement: triggerElementRef.current,
                ...stateUpdates
            });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isMountedByThisTrigger,
        store,
        triggerElementRef,
        ...Object.values(stateUpdates)
    ]);
    return {
        registerTrigger,
        isMountedByThisTrigger
    };
}
function useImplicitActiveTrigger(store) {
    const open = store.useState('open');
    (0, __TURBOPACK__imported__module__91900__9["useIsoLayoutEffect"])(()=>{
        if (open && !store.select('activeTriggerId') && store.context.triggerElements.size === 1) {
            const iteratorResult = store.context.triggerElements.entries().next();
            if (!iteratorResult.done) {
                const [implicitTriggerId, implicitTriggerElement] = iteratorResult.value;
                store.update({
                    activeTriggerId: implicitTriggerId,
                    activeTriggerElement: implicitTriggerElement
                });
            }
        }
    }, [
        open,
        store
    ]);
}
function useOpenStateTransitions(open, store, onUnmount) {
    const { mounted, setMounted, transitionStatus } = useTransitionStatus(open);
    store.useSyncedValues({
        mounted,
        transitionStatus
    });
    const forceUnmount = (0, __TURBOPACK__imported__module__32787__8["useStableCallback"])(()=>{
        setMounted(false);
        store.update({
            activeTriggerId: null,
            activeTriggerElement: null,
            mounted: false
        });
        onUnmount?.();
        store.context.onOpenChangeComplete?.(false);
    });
    const preventUnmountingOnClose = store.useState('preventUnmountingOnClose');
    useOpenChangeComplete({
        enabled: !preventUnmountingOnClose,
        open,
        ref: store.context.popupRef,
        onComplete () {
            if (!open) {
                forceUnmount();
            }
        }
    });
    return {
        forceUnmount,
        transitionStatus
    };
}
'use client';
;
;
;
;
;
;
;
;
function useDialogRoot(params) {
    const { store, parentContext, actionsRef, isDrawer } = params;
    const open = store.useState('open');
    const disablePointerDismissal = store.useState('disablePointerDismissal');
    const modal = store.useState('modal');
    const popupElement = store.useState('popupElement');
    const { openMethod, triggerProps } = useOpenInteractionType(open);
    useImplicitActiveTrigger(store);
    const { forceUnmount } = useOpenStateTransitions(open, store);
    const handleImperativeClose = __TURBOPACK__imported__module__51268__47["useCallback"](()=>{
        store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.imperativeAction));
    }, [
        store
    ]);
    __TURBOPACK__imported__module__51268__47["useImperativeHandle"](actionsRef, ()=>({
            unmount: forceUnmount,
            close: handleImperativeClose
        }), [
        forceUnmount,
        handleImperativeClose
    ]);
    const floatingRootContext = useSyncedFloatingRootContext({
        popupStore: store,
        onOpenChange: store.setOpen,
        treatPopupAsFloatingElement: true
    });
    const [ownNestedOpenDialogs, setOwnNestedOpenDialogs] = __TURBOPACK__imported__module__51268__47["useState"](0);
    const [ownNestedOpenDrawers, setOwnNestedOpenDrawers] = __TURBOPACK__imported__module__51268__47["useState"](0);
    const isTopmost = ownNestedOpenDialogs === 0;
    const role = useRole(floatingRootContext);
    const dismiss = useDismiss(floatingRootContext, {
        outsidePressEvent () {
            if (store.context.internalBackdropRef.current || store.context.backdropRef.current) {
                return 'intentional';
            }
            // Ensure `aria-hidden` on outside elements is removed immediately
            // on outside press when trapping focus.
            return {
                mouse: modal === 'trap-focus' ? 'sloppy' : 'intentional',
                touch: 'sloppy'
            };
        },
        outsidePress (event) {
            if (!store.context.outsidePressEnabledRef.current) {
                return false;
            }
            // For mouse events, only accept left button (button 0)
            // For touch events, a single touch is equivalent to left button
            if ('button' in event && event.button !== 0) {
                return false;
            }
            if ('touches' in event && event.touches.length !== 1) {
                return false;
            }
            const target = getTarget(event);
            if (isTopmost && !disablePointerDismissal) {
                const eventTarget = target;
                // Only close if the click occurred on the dialog's owning backdrop.
                // This supports multiple modal dialogs that aren't nested in the React tree:
                // https://github.com/mui/base-ui/issues/1320
                if (modal) {
                    return store.context.internalBackdropRef.current || store.context.backdropRef.current ? store.context.internalBackdropRef.current === eventTarget || store.context.backdropRef.current === eventTarget || contains(eventTarget, popupElement) && !eventTarget?.hasAttribute('data-base-ui-portal') : true;
                }
                return true;
            }
            return false;
        },
        escapeKey: isTopmost
    });
    useScrollLock(open && modal === true, popupElement);
    const { getReferenceProps, getFloatingProps, getTriggerProps } = useInteractions([
        role,
        dismiss
    ]);
    // Listen for nested open/close events on this store to maintain the counts.
    store.useContextCallback('onNestedDialogOpen', (dialogCount, drawerCount)=>{
        setOwnNestedOpenDialogs(dialogCount);
        setOwnNestedOpenDrawers(drawerCount);
    });
    store.useContextCallback('onNestedDialogClose', ()=>{
        setOwnNestedOpenDialogs(0);
        setOwnNestedOpenDrawers(0);
    });
    // Notify parent of our open/close state using parent callbacks, if any
    __TURBOPACK__imported__module__51268__47["useEffect"](()=>{
        if (parentContext?.onNestedDialogOpen && open) {
            parentContext.onNestedDialogOpen(ownNestedOpenDialogs + 1, ownNestedOpenDrawers + (isDrawer ? 1 : 0));
        }
        if (parentContext?.onNestedDialogClose && !open) {
            parentContext.onNestedDialogClose();
        }
        return ()=>{
            if (parentContext?.onNestedDialogClose && open) {
                parentContext.onNestedDialogClose();
            }
        };
    }, [
        isDrawer,
        open,
        ownNestedOpenDialogs,
        ownNestedOpenDrawers,
        parentContext
    ]);
    const activeTriggerProps = __TURBOPACK__imported__module__51268__47["useMemo"](()=>getReferenceProps(triggerProps), [
        getReferenceProps,
        triggerProps
    ]);
    const inactiveTriggerProps = __TURBOPACK__imported__module__51268__47["useMemo"](()=>getTriggerProps(triggerProps), [
        getTriggerProps,
        triggerProps
    ]);
    const popupProps = __TURBOPACK__imported__module__51268__47["useMemo"](()=>getFloatingProps(), [
        getFloatingProps
    ]);
    store.useSyncedValues({
        openMethod,
        activeTriggerProps,
        inactiveTriggerProps,
        popupProps,
        floatingRootContext,
        nestedOpenDialogCount: ownNestedOpenDialogs,
        nestedOpenDrawerCount: ownNestedOpenDrawers
    });
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/store/DialogStore.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__59 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__67452__6 = __TURBOPACK__imported__module__67452__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/popups/store.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__24659__6 = __TURBOPACK__imported__module__24659__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/getEmptyRootContext.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/popups/popupTriggerMap.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__16 = __TURBOPACK__imported__module__96746__;
class PopupTriggerMap {
    constructor(){
        this.elementsSet = new Set();
        this.idMap = new Map();
    }
    /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */ add(id, element) {
        const existingElement = this.idMap.get(id);
        if (existingElement === element) {
            return;
        }
        if (existingElement !== undefined) {
            // We assume that the same element won't be registered under multiple ids.
            // This is safe considering how useTriggerRegistration is implemented.
            this.elementsSet.delete(existingElement);
        }
        this.elementsSet.add(element);
        this.idMap.set(id, element);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    /**
   * Removes the trigger element with the given ID.
   */ delete(id) {
        const element = this.idMap.get(id);
        if (element) {
            this.elementsSet.delete(element);
            this.idMap.delete(id);
        }
    }
    /**
   * Whether the given element is registered as a trigger.
   */ hasElement(element) {
        return this.elementsSet.has(element);
    }
    /**
   * Whether there is a registered trigger element matching the given predicate.
   */ hasMatchingElement(predicate) {
        for (const element of this.elementsSet){
            if (predicate(element)) {
                return true;
            }
        }
        return false;
    }
    /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */ getById(id) {
        return this.idMap.get(id);
    }
    /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */ entries() {
        return this.idMap.entries();
    }
    /**
   * Returns an iterable of all registered trigger elements.
   */ elements() {
        return this.elementsSet.values();
    }
    /**
   * Returns the number of registered trigger elements.
   */ get size() {
        return this.idMap.size;
    }
}
;
;
function getEmptyRootContext() {
    return new FloatingRootStore({
        open: false,
        transitionStatus: undefined,
        floatingElement: null,
        referenceElement: null,
        triggerElements: new PopupTriggerMap(),
        floatingId: '',
        syncOnly: false,
        nested: false,
        onOpenChange: undefined
    });
}
;
;
;
function createInitialPopupStoreState() {
    return {
        open: false,
        openProp: undefined,
        mounted: false,
        transitionStatus: undefined,
        floatingRootContext: getEmptyRootContext(),
        preventUnmountingOnClose: false,
        payload: undefined,
        activeTriggerId: null,
        activeTriggerElement: null,
        triggerIdProp: undefined,
        popupElement: null,
        positionerElement: null,
        activeTriggerProps: __TURBOPACK__imported__module__24659__6["EMPTY_OBJECT"],
        inactiveTriggerProps: __TURBOPACK__imported__module__24659__6["EMPTY_OBJECT"],
        popupProps: __TURBOPACK__imported__module__24659__6["EMPTY_OBJECT"]
    };
}
const activeTriggerIdSelector = createSelector((state)=>state.triggerIdProp ?? state.activeTriggerId);
const popupStoreSelectors = {
    open: createSelector((state)=>state.openProp ?? state.open),
    mounted: createSelector((state)=>state.mounted),
    transitionStatus: createSelector((state)=>state.transitionStatus),
    floatingRootContext: createSelector((state)=>state.floatingRootContext),
    preventUnmountingOnClose: createSelector((state)=>state.preventUnmountingOnClose),
    payload: createSelector((state)=>state.payload),
    activeTriggerId: activeTriggerIdSelector,
    activeTriggerElement: createSelector((state)=>state.mounted ? state.activeTriggerElement : null),
    /**
   * Whether the trigger with the given ID was used to open the popup.
   */ isTriggerActive: createSelector((state, triggerId)=>triggerId !== undefined && activeTriggerIdSelector(state) === triggerId),
    /**
   * Whether the popup is open and was activated by a trigger with the given ID.
   */ isOpenedByTrigger: createSelector((state, triggerId)=>triggerId !== undefined && activeTriggerIdSelector(state) === triggerId && state.open),
    /**
   * Whether the popup is mounted and was activated by a trigger with the given ID.
   */ isMountedByTrigger: createSelector((state, triggerId)=>triggerId !== undefined && activeTriggerIdSelector(state) === triggerId && state.mounted),
    triggerProps: createSelector((state, isActive)=>isActive ? state.activeTriggerProps : state.inactiveTriggerProps),
    popupProps: createSelector((state)=>state.popupProps),
    popupElement: createSelector((state)=>state.popupElement),
    positionerElement: createSelector((state)=>state.positionerElement)
};
;
;
;
;
const selectors1 = {
    ...popupStoreSelectors,
    modal: createSelector((state)=>state.modal),
    nested: createSelector((state)=>state.nested),
    nestedOpenDialogCount: createSelector((state)=>state.nestedOpenDialogCount),
    nestedOpenDrawerCount: createSelector((state)=>state.nestedOpenDrawerCount),
    disablePointerDismissal: createSelector((state)=>state.disablePointerDismissal),
    openMethod: createSelector((state)=>state.openMethod),
    descriptionElementId: createSelector((state)=>state.descriptionElementId),
    titleElementId: createSelector((state)=>state.titleElementId),
    viewportElement: createSelector((state)=>state.viewportElement),
    role: createSelector((state)=>state.role)
};
class DialogStore extends ReactStore {
    constructor(initialState){
        super(createInitialState(initialState), {
            popupRef: /*#__PURE__*/ __TURBOPACK__imported__module__51268__59["createRef"](),
            backdropRef: /*#__PURE__*/ __TURBOPACK__imported__module__51268__59["createRef"](),
            internalBackdropRef: /*#__PURE__*/ __TURBOPACK__imported__module__51268__59["createRef"](),
            outsidePressEnabledRef: {
                current: true
            },
            triggerElements: new PopupTriggerMap(),
            onOpenChange: undefined,
            onOpenChangeComplete: undefined
        }, selectors1);
    }
    setOpen = (nextOpen, eventDetails)=>{
        eventDetails.preventUnmountOnClose = ()=>{
            this.set('preventUnmountingOnClose', true);
        };
        if (!nextOpen && eventDetails.trigger == null && this.state.activeTriggerId != null) {
            // When closing the dialog, pass the old trigger to the onOpenChange event
            // so it's not reset too early (potentially causing focus issues in controlled scenarios).
            eventDetails.trigger = this.state.activeTriggerElement ?? undefined;
        }
        this.context.onOpenChange?.(nextOpen, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        this.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
        const updatedState = {
            open: nextOpen
        };
        // If a popup is closing, the `trigger` may be null.
        // We want to keep the previous value so that exit animations are played and focus is returned correctly.
        const newTriggerId = eventDetails.trigger?.id ?? null;
        if (newTriggerId || nextOpen) {
            updatedState.activeTriggerId = newTriggerId;
            updatedState.activeTriggerElement = eventDetails.trigger ?? null;
        }
        this.update(updatedState);
    };
    static useStore(externalStore, initialState) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const internalStore = (0, __TURBOPACK__imported__module__67452__6["useRefWithInit"])(()=>{
            return new DialogStore(initialState);
        }).current;
        return externalStore ?? internalStore;
    }
}
function createInitialState(initialState = {}) {
    return {
        ...createInitialPopupStoreState(),
        modal: true,
        disablePointerDismissal: false,
        popupElement: null,
        viewportElement: null,
        descriptionElementId: undefined,
        titleElementId: undefined,
        openMethod: null,
        nested: false,
        nestedOpenDialogCount: 0,
        nestedOpenDrawerCount: 0,
        role: 'dialog',
        ...initialState
    };
}
var __TURBOPACK__imported__module__8063__24 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
const IsDrawerContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__45["createContext"](false);
/**
 * Groups all parts of the dialog.
 * Doesn't render its own HTML element.
 *
 * Documentation: [Base UI Dialog](https://base-ui.com/react/components/dialog)
 */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function DialogRoot(props) {
    const { children, open: openProp, defaultOpen = false, onOpenChange, onOpenChangeComplete, disablePointerDismissal = false, modal = true, actionsRef, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null } = props;
    const parentDialogRootContext = useDialogRootContext(true);
    const isDrawer = __TURBOPACK__imported__module__51268__45["useContext"](IsDrawerContext);
    const nested = Boolean(parentDialogRootContext);
    const store = DialogStore.useStore(handle?.store, {
        open: defaultOpen,
        openProp,
        activeTriggerId: defaultTriggerIdProp,
        triggerIdProp,
        modal,
        disablePointerDismissal,
        nested
    });
    // Support initially open state when uncontrolled
    useOnFirstRender(()=>{
        if (openProp === undefined && store.state.open === false && defaultOpen === true) {
            store.update({
                open: true,
                activeTriggerId: defaultTriggerIdProp
            });
        }
    });
    store.useControlledProp('openProp', openProp);
    store.useControlledProp('triggerIdProp', triggerIdProp);
    store.useSyncedValues({
        disablePointerDismissal,
        nested,
        modal
    });
    store.useContextCallback('onOpenChange', onOpenChange);
    store.useContextCallback('onOpenChangeComplete', onOpenChangeComplete);
    const payload = store.useState('payload');
    useDialogRoot({
        store,
        actionsRef,
        parentContext: parentDialogRootContext?.store.context,
        isDrawer,
        onOpenChange,
        triggerIdProp
    });
    const contextValue = __TURBOPACK__imported__module__51268__45["useMemo"](()=>({
            store
        }), [
        store
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__24["jsx"])(IsDrawerContext.Provider, {
        value: false,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__24["jsx"])(DialogRootContext.Provider, {
            value: contextValue,
            children: typeof children === 'function' ? children({
                payload
            }) : children
        })
    });
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewport.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__17 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__60 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__5 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/viewport/DialogViewportDataAttributes.js [app-client] (ecmascript)
;
;
let DialogViewportDataAttributes = function(DialogViewportDataAttributes) {
    /**
   * Present when the dialog is open.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["open"] = CommonPopupDataAttributes.open] = "open";
    /**
   * Present when the dialog is closed.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["closed"] = CommonPopupDataAttributes.closed] = "closed";
    /**
   * Present when the dialog is animating in.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["startingStyle"] = CommonPopupDataAttributes.startingStyle] = "startingStyle";
    /**
   * Present when the dialog is animating out.
   */ DialogViewportDataAttributes[DialogViewportDataAttributes["endingStyle"] = CommonPopupDataAttributes.endingStyle] = "endingStyle";
    /**
   * Present when the dialog is nested within another dialog.
   */ DialogViewportDataAttributes["nested"] = "data-nested";
    /**
   * Present when the dialog has other open dialogs nested within it.
   */ DialogViewportDataAttributes["nestedDialogOpen"] = "data-nested-dialog-open";
    return DialogViewportDataAttributes;
}({});
'use client';
;
;
;
;
;
;
;
const stateAttributesMapping2 = {
    ...popupStateMapping,
    ...transitionStatusMapping,
    nested (value1) {
        return value1 ? {
            [DialogViewportDataAttributes.nested]: ''
        } : null;
    },
    nestedDialogOpen (value1) {
        return value1 ? {
            [DialogViewportDataAttributes.nestedDialogOpen]: ''
        } : null;
    }
};
const DialogViewport = /*#__PURE__*/ __TURBOPACK__imported__module__51268__60["forwardRef"](function DialogViewport(componentProps, forwardedRef) {
    const { className, render, children, style, ...elementProps } = componentProps;
    const keepMounted = useDialogPortalContext();
    const { store } = useDialogRootContext();
    const open = store.useState('open');
    const nested = store.useState('nested');
    const transitionStatus = store.useState('transitionStatus');
    const nestedOpenDialogCount = store.useState('nestedOpenDialogCount');
    const mounted = store.useState('mounted');
    const nestedDialogOpen = nestedOpenDialogCount > 0;
    const state = {
        open,
        nested,
        transitionStatus,
        nestedDialogOpen
    };
    const shouldRender = keepMounted || mounted;
    return (0, __TURBOPACK__imported__module__19996__5["useRenderElement"])('div', componentProps, {
        enabled: shouldRender,
        state,
        ref: [
            forwardedRef,
            store.useStateSetter('viewportElement')
        ],
        stateAttributesMapping: stateAttributesMapping2,
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    pointerEvents: !open ? 'none' : undefined
                },
                children
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/title/DialogTitle.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__18 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__61 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__6 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
const DialogTitle1 = /*#__PURE__*/ __TURBOPACK__imported__module__51268__61["forwardRef"](function DialogTitle(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, ...elementProps } = componentProps;
    const { store } = useDialogRootContext();
    const id = useBaseUiId(idProp);
    store.useSyncedValueWithCleanup('titleElementId', id);
    return (0, __TURBOPACK__imported__module__19996__6["useRenderElement"])('h2', componentProps, {
        ref: forwardedRef,
        props: [
            {
                id
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/trigger/DialogTrigger.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__19 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__3 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__62 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__81833__1 = __TURBOPACK__imported__module__81833__;
var __TURBOPACK__imported__module__19996__7 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useClick.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__63 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__7 = __TURBOPACK__imported__module__24659__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
;
;
function useClick(context, props = {}) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const dataRef = store.context.dataRef;
    const { enabled = true, event: eventOption = 'click', toggle = true, ignoreMouse = false, stickIfOpen = true, touchOpenDelay = 0, reason = __TURBOPACK__imported__module__54906__.triggerPress } = props;
    const pointerTypeRef = __TURBOPACK__imported__module__51268__63["useRef"](undefined);
    const frame = useAnimationFrame();
    const touchOpenTimeout = useTimeout();
    const reference = __TURBOPACK__imported__module__51268__63["useMemo"](()=>({
            onPointerDown (event) {
                pointerTypeRef.current = event.pointerType;
            },
            onMouseDown (event) {
                const pointerType = pointerTypeRef.current;
                const nativeEvent = event.nativeEvent;
                const open = store.select('open');
                // Ignore all buttons except for the "main" button.
                // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
                if (event.button !== 0 || eventOption === 'click' || isMouseLikePointerType(pointerType, true) && ignoreMouse) {
                    return;
                }
                const openEvent = dataRef.current.openEvent;
                const openEventType = openEvent?.type;
                const hasClickedOnInactiveTrigger = store.select('domReferenceElement') !== event.currentTarget;
                const nextOpen = open && hasClickedOnInactiveTrigger || !(open && toggle && (openEvent && stickIfOpen ? openEventType === 'click' || openEventType === 'mousedown' : true));
                // Animations sometimes won't run on a typeable element if using a rAF.
                // Focus is always set on these elements. For touch, we may delay opening.
                const target = getTarget(nativeEvent);
                if (isTypeableElement(target)) {
                    const details = createChangeEventDetails(reason, nativeEvent, target);
                    if (nextOpen && pointerType === 'touch' && touchOpenDelay > 0) {
                        touchOpenTimeout.start(touchOpenDelay, ()=>{
                            store.setOpen(true, details);
                        });
                    } else {
                        store.setOpen(nextOpen, details);
                    }
                    return;
                }
                // Capture the currentTarget before the rAF.
                // as React sets it to null after the event handler completes.
                const eventCurrentTarget = event.currentTarget;
                // Wait until focus is set on the element. This is an alternative to
                // `event.preventDefault()` to avoid :focus-visible from appearing when using a pointer.
                frame.request(()=>{
                    const details = createChangeEventDetails(reason, nativeEvent, eventCurrentTarget);
                    if (nextOpen && pointerType === 'touch' && touchOpenDelay > 0) {
                        touchOpenTimeout.start(touchOpenDelay, ()=>{
                            store.setOpen(true, details);
                        });
                    } else {
                        store.setOpen(nextOpen, details);
                    }
                });
            },
            onClick (event) {
                if (eventOption === 'mousedown-only') {
                    return;
                }
                const pointerType = pointerTypeRef.current;
                if (eventOption === 'mousedown' && pointerType) {
                    pointerTypeRef.current = undefined;
                    return;
                }
                if (isMouseLikePointerType(pointerType, true) && ignoreMouse) {
                    return;
                }
                const open = store.select('open');
                const openEvent = dataRef.current.openEvent;
                const hasClickedOnInactiveTrigger = store.select('domReferenceElement') !== event.currentTarget;
                const nextOpen = open && hasClickedOnInactiveTrigger || !(open && toggle && (openEvent && stickIfOpen ? isClickLikeEvent(openEvent) : true));
                const details = createChangeEventDetails(reason, event.nativeEvent, event.currentTarget);
                if (nextOpen && pointerType === 'touch' && touchOpenDelay > 0) {
                    touchOpenTimeout.start(touchOpenDelay, ()=>{
                        store.setOpen(true, details);
                    });
                } else {
                    store.setOpen(nextOpen, details);
                }
            },
            onKeyDown () {
                pointerTypeRef.current = undefined;
            }
        }), [
        dataRef,
        eventOption,
        ignoreMouse,
        store,
        stickIfOpen,
        toggle,
        frame,
        touchOpenTimeout,
        touchOpenDelay,
        reason
    ]);
    return __TURBOPACK__imported__module__51268__63["useMemo"](()=>enabled ? {
            reference
        } : __TURBOPACK__imported__module__24659__7["EMPTY_OBJECT"], [
        enabled,
        reference
    ]);
}
'use client';
;
;
;
;
;
;
;
;
;
;
const DialogTrigger1 = /*#__PURE__*/ __TURBOPACK__imported__module__51268__62["forwardRef"](function DialogTrigger(componentProps, forwardedRef) {
    const { render, className, disabled = false, nativeButton = true, id: idProp, payload, handle, style, ...elementProps } = componentProps;
    const dialogRootContext = useDialogRootContext(true);
    const store = handle?.store ?? dialogRootContext?.store;
    if (!store) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__3["default"])(79));
    }
    const thisTriggerId = useBaseUiId(idProp);
    const floatingContext = store.useState('floatingRootContext');
    const isOpenedByThisTrigger = store.useState('isOpenedByTrigger', thisTriggerId);
    const triggerElementRef = __TURBOPACK__imported__module__51268__62["useRef"](null);
    const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
        payload
    });
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__81833__1["useButton"])({
        disabled,
        native: nativeButton
    });
    const click = useClick(floatingContext, {
        enabled: floatingContext != null
    });
    const localInteractionProps = useInteractions([
        click
    ]);
    const state = {
        disabled,
        open: isOpenedByThisTrigger
    };
    const rootTriggerProps = store.useState('triggerProps', isMountedByThisTrigger);
    return (0, __TURBOPACK__imported__module__19996__7["useRenderElement"])('button', componentProps, {
        state,
        ref: [
            buttonRef,
            forwardedRef,
            registerTrigger,
            triggerElementRef
        ],
        props: [
            localInteractionProps.getReferenceProps(),
            rootTriggerProps,
            {
                [CLICK_TRIGGER_IDENTIFIER]: '',
                id: thisTriggerId
            },
            elementProps,
            getButtonProps
        ],
        stateAttributesMapping: triggerOpenStateMapping
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/dialog/store/DialogHandle.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__20 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
;
;
;
class DialogHandle {
    /**
   * Internal store holding the dialog state.
   * @internal
   */ constructor(store){
        this.store = store ?? new DialogStore();
    }
    /**
   * Opens the dialog and associates it with the trigger with the given id.
   * The trigger, if provided, must be a Dialog.Trigger component with this handle passed as a prop.
   *
   * This method should only be called in an event handler or an effect (not during rendering).
   *
   * @param triggerId ID of the trigger to associate with the dialog. If null, the dialog will open without a trigger association.
   */ open(triggerId) {
        const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : undefined;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        this.store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.imperativeAction, undefined, triggerElement));
    }
    /**
   * Opens the dialog and sets the payload.
   * Does not associate the dialog with any trigger.
   *
   * @param payload Payload to set when opening the dialog.
   */ openWithPayload(payload) {
        this.store.set('payload', payload);
        this.store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.imperativeAction, undefined, undefined));
    }
    /**
   * Closes the dialog.
   */ close() {
        this.store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.imperativeAction, undefined, undefined));
    }
    /**
   * Indicates whether the dialog is currently open.
   */ get isOpen() {
        return this.store.state.open;
    }
}
function createDialogHandle() {
    return new DialogHandle();
}
__turbopack_context__.s([
    "Backdrop",
    0,
    DialogBackdrop,
    "Close",
    0,
    DialogClose1,
    "Description",
    0,
    DialogDescription1,
    "Handle",
    0,
    DialogHandle,
    "Popup",
    0,
    DialogPopup,
    "Portal",
    0,
    DialogPortal1,
    "Root",
    0,
    DialogRoot,
    "Title",
    0,
    DialogTitle1,
    "Trigger",
    0,
    DialogTrigger1,
    "Viewport",
    0,
    DialogViewport,
    "createHandle",
    0,
    createDialogHandle
], 21425);
var __TURBOPACK__imported__module__21425__ = __turbopack_context__.i(21425);
var __TURBOPACK__imported__module__21425__ = __TURBOPACK__imported__module__21425__;
var __TURBOPACK__imported__module__75157__2 = __TURBOPACK__imported__module__75157__;
var __TURBOPACK__imported__module__19455__2 = __TURBOPACK__imported__module__19455__;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript) <export default as XIcon>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/x.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67022__4 = __TURBOPACK__imported__module__67022__;
;
const __iconNode4 = [
    [
        "path",
        {
            d: "M18 6 6 18",
            key: "1bl5f8"
        }
    ],
    [
        "path",
        {
            d: "m6 6 12 12",
            key: "d8bk6v"
        }
    ]
];
const X1 = (0, __TURBOPACK__imported__module__67022__4["default"])("x", __iconNode4);
;
"use client";
;
;
;
;
;
function Dialog1({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__21425__.Root, {
        "data-slot": "dialog",
        ...props
    });
}
function DialogTrigger2({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__21425__.Trigger, {
        "data-slot": "dialog-trigger",
        ...props
    });
}
function DialogPortal2({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__21425__.Portal, {
        "data-slot": "dialog-portal",
        ...props
    });
}
function DialogClose2({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__21425__.Close, {
        "data-slot": "dialog-close",
        ...props
    });
}
function DialogOverlay1({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__21425__.Backdrop, {
        "data-slot": "dialog-overlay",
        className: (0, __TURBOPACK__imported__module__75157__2["cn"])("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className),
        ...props
    });
}
function DialogContent1({ className, children, showCloseButton = true, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsxs"])(DialogPortal2, {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(DialogOverlay1, {}),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsxs"])(__TURBOPACK__imported__module__21425__.Popup, {
                "data-slot": "dialog-content",
                className: (0, __TURBOPACK__imported__module__75157__2["cn"])("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-4 rounded-none bg-popover p-4 text-xs/relaxed text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props,
                children: [
                    children,
                    showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsxs"])(__TURBOPACK__imported__module__21425__.Close, {
                        "data-slot": "dialog-close",
                        render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__19455__2["Button"], {
                            variant: "ghost",
                            className: "absolute top-2 right-2",
                            size: "icon-sm"
                        }),
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(X1, {}),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])("span", {
                                className: "sr-only",
                                children: "Close"
                            })
                        ]
                    })
                ]
            })
        ]
    });
}
function DialogHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])("div", {
        "data-slot": "dialog-header",
        className: (0, __TURBOPACK__imported__module__75157__2["cn"])("flex flex-col gap-1 text-left", className),
        ...props
    });
}
function DialogFooter({ className, showCloseButton = false, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsxs"])("div", {
        "data-slot": "dialog-footer",
        className: (0, __TURBOPACK__imported__module__75157__2["cn"])("flex flex-col-reverse gap-2 sm:flex-row sm:justify-end", className),
        ...props,
        children: [
            children,
            showCloseButton && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__21425__.Close, {
                render: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__19455__2["Button"], {
                    variant: "outline"
                }),
                children: "Close"
            })
        ]
    });
}
function DialogTitle2({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__21425__.Title, {
        "data-slot": "dialog-title",
        className: (0, __TURBOPACK__imported__module__75157__2["cn"])("font-heading text-sm font-medium", className),
        ...props
    });
}
function DialogDescription2({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__16["jsx"])(__TURBOPACK__imported__module__21425__.Description, {
        "data-slot": "dialog-description",
        className: (0, __TURBOPACK__imported__module__75157__2["cn"])("text-xs/relaxed text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className),
        ...props
    });
}
;
// MERGED MODULE: [project]/src/components/ui/input-group.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__25 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__94237__ = __turbopack_context__.i(94237);
var __TURBOPACK__imported__module__75157__3 = __TURBOPACK__imported__module__75157__;
var __TURBOPACK__imported__module__19455__3 = __TURBOPACK__imported__module__19455__;
// MERGED MODULE: [project]/src/components/ui/input.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__26 = __TURBOPACK__imported__module__8063__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/input/Input.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__21 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__64 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <export * as Field>
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <locals>
;
;
;
;
;
;
;
;
__turbopack_context__.s([], 83327);
var __TURBOPACK__imported__module__83327__ = __turbopack_context__.i(83327);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/root/FieldRoot.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__22 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__65 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__9 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__23 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__4 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__66 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__8 = __TURBOPACK__imported__module__24659__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/field-constants/constants.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/control/FieldControlDataAttributes.js [app-client] (ecmascript)
;
let FieldControlDataAttributes = /*#__PURE__*/ function(FieldControlDataAttributes) {
    /**
   * Present when the field is disabled.
   */ FieldControlDataAttributes["disabled"] = "data-disabled";
    /**
   * Present when the field is in a valid state.
   */ FieldControlDataAttributes["valid"] = "data-valid";
    /**
   * Present when the field is in an invalid state.
   */ FieldControlDataAttributes["invalid"] = "data-invalid";
    /**
   * Present when the field has been touched.
   */ FieldControlDataAttributes["touched"] = "data-touched";
    /**
   * Present when the field's value has changed.
   */ FieldControlDataAttributes["dirty"] = "data-dirty";
    /**
   * Present when the field is filled.
   */ FieldControlDataAttributes["filled"] = "data-filled";
    /**
   * Present when the field control is focused.
   */ FieldControlDataAttributes["focused"] = "data-focused";
    return FieldControlDataAttributes;
}({});
;
const DEFAULT_VALIDITY_STATE = {
    badInput: false,
    customError: false,
    patternMismatch: false,
    rangeOverflow: false,
    rangeUnderflow: false,
    stepMismatch: false,
    tooLong: false,
    tooShort: false,
    typeMismatch: false,
    valid: null,
    valueMissing: false
};
const DEFAULT_FIELD_STATE_ATTRIBUTES = {
    valid: null,
    touched: false,
    dirty: false,
    filled: false,
    focused: false
};
const DEFAULT_FIELD_ROOT_STATE = {
    disabled: false,
    ...DEFAULT_FIELD_STATE_ATTRIBUTES
};
const fieldValidityMapping = {
    valid (value1) {
        if (value1 === null) {
            return null;
        }
        if (value1) {
            return {
                [FieldControlDataAttributes.valid]: ''
            };
        }
        return {
            [FieldControlDataAttributes.invalid]: ''
        };
    }
};
'use client';
;
;
;
;
;
const FieldRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__66["createContext"]({
    invalid: undefined,
    name: undefined,
    validityData: {
        state: DEFAULT_VALIDITY_STATE,
        errors: [],
        error: '',
        value: '',
        initialValue: null
    },
    setValidityData: __TURBOPACK__imported__module__24659__8["NOOP"],
    disabled: undefined,
    touched: DEFAULT_FIELD_STATE_ATTRIBUTES.touched,
    setTouched: __TURBOPACK__imported__module__24659__8["NOOP"],
    dirty: DEFAULT_FIELD_STATE_ATTRIBUTES.dirty,
    setDirty: __TURBOPACK__imported__module__24659__8["NOOP"],
    filled: DEFAULT_FIELD_STATE_ATTRIBUTES.filled,
    setFilled: __TURBOPACK__imported__module__24659__8["NOOP"],
    focused: DEFAULT_FIELD_STATE_ATTRIBUTES.focused,
    setFocused: __TURBOPACK__imported__module__24659__8["NOOP"],
    validate: ()=>null,
    validationMode: 'onSubmit',
    validationDebounceTime: 0,
    shouldValidateOnChange: ()=>false,
    state: DEFAULT_FIELD_ROOT_STATE,
    markedDirtyRef: {
        current: false
    },
    registerFieldControl: __TURBOPACK__imported__module__24659__8["NOOP"],
    validation: {
        getValidationProps: (props = __TURBOPACK__imported__module__24659__8["EMPTY_OBJECT"])=>props,
        getInputValidationProps: (props = __TURBOPACK__imported__module__24659__8["EMPTY_OBJECT"])=>props,
        inputRef: {
            current: null
        },
        commit: async ()=>{}
    }
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useFieldRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__51268__66["useContext"](FieldRootContext);
    if (context.setValidityData === __TURBOPACK__imported__module__24659__8["NOOP"] && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__4["default"])(28));
    }
    return context;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__24 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__5 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__67 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const FieldsetRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__67["createContext"]({
    legendId: undefined,
    setLegendId: ()=>{},
    disabled: undefined
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useFieldsetRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__51268__67["useContext"](FieldsetRootContext);
    if (!context && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__5["default"])(86));
    }
    return context;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/form-context/FormContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__25 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__68 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__9 = __TURBOPACK__imported__module__24659__;
'use client';
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__68["createContext"]({
    formRef: {
        current: {
            fields: new Map()
        }
    },
    errors: {},
    clearErrors: __TURBOPACK__imported__module__24659__9["NOOP"],
    validationMode: 'onSubmit',
    submitAttemptedRef: {
        current: false
    }
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useFormContext() {
    return __TURBOPACK__imported__module__51268__68["useContext"](FormContext);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableProvider.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__26 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__69 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__10 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__67452__7 = __TURBOPACK__imported__module__67452__;
var __TURBOPACK__imported__module__84028__ = __turbopack_context__.i(84028);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__27 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__70 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__10 = __TURBOPACK__imported__module__24659__;
'use client';
;
;
const LabelableContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__70["createContext"]({
    controlId: undefined,
    registerControlId: __TURBOPACK__imported__module__24659__10["NOOP"],
    labelId: undefined,
    setLabelId: __TURBOPACK__imported__module__24659__10["NOOP"],
    messageIds: [],
    setMessageIds: __TURBOPACK__imported__module__24659__10["NOOP"],
    getDescriptionProps: (externalProps)=>externalProps
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useLabelableContext() {
    return __TURBOPACK__imported__module__51268__70["useContext"](LabelableContext);
}
var __TURBOPACK__imported__module__8063__27 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
const LabelableProvider = function LabelableProvider(props) {
    const defaultId = useBaseUiId();
    const initialControlId = props.controlId === undefined ? defaultId : props.controlId;
    const [controlId, setControlIdState] = __TURBOPACK__imported__module__51268__69["useState"](initialControlId);
    const [labelId, setLabelId] = __TURBOPACK__imported__module__51268__69["useState"](props.labelId);
    const [messageIds, setMessageIds] = __TURBOPACK__imported__module__51268__69["useState"]([]);
    const registrationsRef = (0, __TURBOPACK__imported__module__67452__7["useRefWithInit"])(()=>new Map());
    const { messageIds: parentMessageIds } = useLabelableContext();
    const registerControlId = (0, __TURBOPACK__imported__module__32787__10["useStableCallback"])((source, nextId)=>{
        const registrations = registrationsRef.current;
        if (nextId === undefined) {
            registrations.delete(source);
            return;
        }
        registrations.set(source, nextId);
        // Only flush when registering, not when unregistering.
        // This prevents loops during rapid unmount/remount cycles (e.g. React Activity).
        // The next registration will pick up the correct state.
        setControlIdState((prev)=>{
            if (registrations.size === 0) {
                return undefined;
            }
            let nextControlId;
            for (const id of registrations.values()){
                if (prev !== undefined && id === prev) {
                    return prev;
                }
                if (nextControlId === undefined) {
                    nextControlId = id;
                }
            }
            return nextControlId;
        });
    });
    const getDescriptionProps = __TURBOPACK__imported__module__51268__69["useCallback"]((externalProps)=>{
        return (0, __TURBOPACK__imported__module__84028__["mergeProps"])({
            'aria-describedby': parentMessageIds.concat(messageIds).join(' ') || undefined
        }, externalProps);
    }, [
        parentMessageIds,
        messageIds
    ]);
    const contextValue = __TURBOPACK__imported__module__51268__69["useMemo"](()=>({
            controlId,
            registerControlId,
            labelId,
            setLabelId,
            messageIds,
            setMessageIds,
            getDescriptionProps
        }), [
        controlId,
        registerControlId,
        labelId,
        setLabelId,
        messageIds,
        setMessageIds,
        getDescriptionProps
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__27["jsx"])(LabelableContext.Provider, {
        value: contextValue,
        children: props.children
    });
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
var __TURBOPACK__imported__module__19996__8 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/root/useFieldValidation.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__71 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__11 = __TURBOPACK__imported__module__24659__;
var __TURBOPACK__imported__module__32787__11 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__84028__1 = __TURBOPACK__imported__module__84028__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/utils/getCombinedFieldValidityData.js [app-client] (ecmascript)
;
function getCombinedFieldValidityData(validityData, invalid) {
    return {
        ...validityData,
        state: {
            ...validityData.state,
            valid: !invalid && validityData.state.valid
        }
    };
}
'use client';
;
;
;
;
;
;
;
;
;
const validityKeys = Object.keys(DEFAULT_VALIDITY_STATE);
function isOnlyValueMissing(state) {
    if (!state || state.valid || !state.valueMissing) {
        return false;
    }
    let onlyValueMissing = false;
    for (const key of validityKeys){
        if (key === 'valid') {
            continue;
        }
        if (key === 'valueMissing') {
            onlyValueMissing = state[key];
        }
        if (state[key]) {
            onlyValueMissing = false;
        }
    }
    return onlyValueMissing;
}
function useFieldValidation(params) {
    const { formRef, clearErrors } = useFormContext();
    const { setValidityData, validate, validityData, validationDebounceTime, invalid, markedDirtyRef, state, name, shouldValidateOnChange } = params;
    const { controlId, getDescriptionProps } = useLabelableContext();
    const timeout = useTimeout();
    const inputRef = __TURBOPACK__imported__module__51268__71["useRef"](null);
    const commit = (0, __TURBOPACK__imported__module__32787__11["useStableCallback"])(async (value1, revalidate = false)=>{
        const element = inputRef.current;
        if (!element) {
            return;
        }
        if (revalidate) {
            if (state.valid !== false) {
                return;
            }
            const currentNativeValidity = element.validity;
            if (!currentNativeValidity.valueMissing) {
                // The 'valueMissing' (required) condition has been resolved by the user typing.
                // Temporarily mark the field as valid for this onChange event.
                // Other native errors (e.g., typeMismatch) will be caught by full validation on blur or submit.
                const nextValidityData = {
                    value: value1,
                    state: {
                        ...DEFAULT_VALIDITY_STATE,
                        valid: true
                    },
                    error: '',
                    errors: [],
                    initialValue: validityData.initialValue
                };
                element.setCustomValidity('');
                if (controlId) {
                    const currentFieldData = formRef.current.fields.get(controlId);
                    if (currentFieldData) {
                        formRef.current.fields.set(controlId, {
                            ...currentFieldData,
                            ...getCombinedFieldValidityData(nextValidityData, false) // invalid = false
                        });
                    }
                }
                setValidityData(nextValidityData);
                return;
            }
            // Value is still missing, or other conditions apply.
            // Let's use a representation of current validity for isOnlyValueMissing.
            const currentNativeValidityObject = validityKeys.reduce((acc, key)=>{
                acc[key] = currentNativeValidity[key];
                return acc;
            }, {});
            // If it's (still) natively invalid due to something other than just valueMissing,
            // then bail from this revalidation on change to avoid "scolding" for other errors.
            if (!currentNativeValidityObject.valid && !isOnlyValueMissing(currentNativeValidityObject)) {
                return;
            }
        // If valueMissing is still true AND it's the only issue, or if the field is now natively valid,
        // let it fall through to the main validation logic below.
        }
        function getState(el) {
            const computedState = validityKeys.reduce((acc, key)=>{
                acc[key] = el.validity[key];
                return acc;
            }, {});
            let hasOnlyValueMissingError = false;
            for (const key of validityKeys){
                if (key === 'valid') {
                    continue;
                }
                if (key === 'valueMissing' && computedState[key]) {
                    hasOnlyValueMissingError = true;
                } else if (computedState[key]) {
                    return computedState;
                }
            }
            // Only make `valueMissing` mark the field invalid if it's been changed
            // to reduce error noise.
            if (hasOnlyValueMissingError && !markedDirtyRef.current) {
                computedState.valid = true;
                computedState.valueMissing = false;
            }
            return computedState;
        }
        timeout.clear();
        let result = null;
        let validationErrors = [];
        const nextState = getState(element);
        let defaultValidationMessage;
        const validateOnChange = shouldValidateOnChange();
        if (element.validationMessage && !validateOnChange) {
            // not validating on change, if there is a `validationMessage` from
            // native validity, set errors and skip calling the custom validate fn
            defaultValidationMessage = element.validationMessage;
            validationErrors = [
                element.validationMessage
            ];
        } else {
            // call the validate function because either
            // - validating on change, or
            // - native constraint validations passed, custom validity check is next
            const formValues = Array.from(formRef.current.fields.values()).reduce((acc, field)=>{
                if (field.name) {
                    acc[field.name] = field.getValue();
                }
                return acc;
            }, {});
            const resultOrPromise = validate(value1, formValues);
            if (typeof resultOrPromise === 'object' && resultOrPromise !== null && 'then' in resultOrPromise) {
                result = await resultOrPromise;
            } else {
                result = resultOrPromise;
            }
            if (result !== null) {
                nextState.valid = false;
                nextState.customError = true;
                if (Array.isArray(result)) {
                    validationErrors = result;
                    element.setCustomValidity(result.join('\n'));
                } else if (result) {
                    validationErrors = [
                        result
                    ];
                    element.setCustomValidity(result);
                }
            } else if (validateOnChange) {
                // validate function returned no errors, if validating on change
                // we need to clear the custom validity state
                element.setCustomValidity('');
                nextState.customError = false;
                if (element.validationMessage) {
                    defaultValidationMessage = element.validationMessage;
                    validationErrors = [
                        element.validationMessage
                    ];
                } else if (element.validity.valid && !nextState.valid) {
                    nextState.valid = true;
                }
            }
        }
        const nextValidityData = {
            value: value1,
            state: nextState,
            error: defaultValidationMessage ?? (Array.isArray(result) ? result[0] : result ?? ''),
            errors: validationErrors,
            initialValue: validityData.initialValue
        };
        if (controlId) {
            const currentFieldData = formRef.current.fields.get(controlId);
            if (currentFieldData) {
                formRef.current.fields.set(controlId, {
                    ...currentFieldData,
                    // Keep Form-level errors part of overall field validity for submit blocking/focus logic.
                    ...getCombinedFieldValidityData(nextValidityData, invalid)
                });
            }
        }
        setValidityData(nextValidityData);
    });
    const getValidationProps = __TURBOPACK__imported__module__51268__71["useCallback"]((externalProps = {})=>(0, __TURBOPACK__imported__module__84028__1["mergeProps"])(getDescriptionProps, state.valid === false ? {
            'aria-invalid': true
        } : __TURBOPACK__imported__module__24659__11["EMPTY_OBJECT"], externalProps), [
        getDescriptionProps,
        state.valid
    ]);
    const getInputValidationProps = __TURBOPACK__imported__module__51268__71["useCallback"]((externalProps = {})=>(0, __TURBOPACK__imported__module__84028__1["mergeProps"])({
            onChange (event) {
                // Workaround for https://github.com/facebook/react/issues/9023
                if (event.nativeEvent.defaultPrevented) {
                    return;
                }
                clearErrors(name);
                if (!shouldValidateOnChange()) {
                    commit(event.currentTarget.value, true);
                    return;
                }
                // When validating on change, run client-side validation even if
                // externally invalid
                const element = event.currentTarget;
                if (element.value === '') {
                    // Ignore the debounce time for empty values.
                    commit(element.value);
                    return;
                }
                timeout.clear();
                if (validationDebounceTime) {
                    timeout.start(validationDebounceTime, ()=>{
                        commit(element.value);
                    });
                } else {
                    commit(element.value);
                }
            }
        }, getValidationProps(externalProps)), [
        getValidationProps,
        clearErrors,
        name,
        timeout,
        commit,
        validationDebounceTime,
        shouldValidateOnChange
    ]);
    return __TURBOPACK__imported__module__51268__71["useMemo"](()=>({
            getValidationProps,
            getInputValidationProps,
            inputRef,
            commit
        }), [
        getValidationProps,
        getInputValidationProps,
        commit
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/field-register-control/useFieldControlRegistration.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__72 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__5 = __TURBOPACK__imported__module__98057__;
var __TURBOPACK__imported__module__91900__11 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__12 = __TURBOPACK__imported__module__32787__;
'use client';
;
;
;
;
;
;
function useFieldControlRegistration(params) {
    const { commit, invalid, markedDirtyRef, name, setValidityData, validityData } = params;
    const { formRef } = useFormContext();
    const activeFieldControlSourceRef = __TURBOPACK__imported__module__51268__72["useRef"](null);
    const registrationRef = __TURBOPACK__imported__module__51268__72["useRef"](null);
    const fallbackControlRef = __TURBOPACK__imported__module__51268__72["useRef"](null);
    const getValue = (0, __TURBOPACK__imported__module__32787__12["useStableCallback"])(()=>{
        const registration = registrationRef.current;
        if (!registration) {
            return undefined;
        }
        if (registration.getValue) {
            return registration.getValue();
        }
        return registration.value;
    });
    const validate = (0, __TURBOPACK__imported__module__32787__12["useStableCallback"])((flushSync = true)=>{
        const registration = registrationRef.current;
        if (!registration) {
            return;
        }
        let nextValue = registration.value;
        if (nextValue === undefined) {
            nextValue = getValue();
        }
        markedDirtyRef.current = true;
        if (!flushSync) {
            commit(nextValue);
        } else {
            // Synchronously update the validity state so the submit event can be prevented.
            __TURBOPACK__imported__module__98057__5["flushSync"](()=>commit(nextValue));
        }
    });
    function refreshRegistration() {
        const registration = registrationRef.current;
        if (!registration || !registration.id) {
            return;
        }
        formRef.current.fields.set(registration.id, {
            getValue,
            name,
            controlRef: registration.controlRef ?? fallbackControlRef,
            validityData: getCombinedFieldValidityData(validityData, invalid),
            validate
        });
    }
    function deleteRegistration(id = registrationRef.current?.id) {
        if (id) {
            formRef.current.fields.delete(id);
        }
    }
    function syncInitialValue() {
        const registration = registrationRef.current;
        if (!registration) {
            return;
        }
        let initialValue = registration.value;
        if (initialValue === undefined) {
            initialValue = getValue();
        }
        if (validityData.initialValue === null && initialValue !== null) {
            setValidityData((prev)=>({
                    ...prev,
                    initialValue
                }));
        }
    }
    (0, __TURBOPACK__imported__module__91900__11["useIsoLayoutEffect"])(()=>{
        const registration = registrationRef.current;
        if (!registration || !registration.id) {
            return;
        }
        formRef.current.fields.set(registration.id, {
            getValue,
            name,
            controlRef: registration.controlRef ?? fallbackControlRef,
            validityData: getCombinedFieldValidityData(validityData, invalid),
            validate
        });
    }, [
        formRef,
        getValue,
        invalid,
        name,
        validate,
        validityData
    ]);
    (0, __TURBOPACK__imported__module__91900__11["useIsoLayoutEffect"])(()=>{
        const fields = formRef.current.fields;
        return ()=>{
            const id = registrationRef.current?.id;
            if (id) {
                fields.delete(id);
            }
        };
    }, [
        formRef
    ]);
    return (0, __TURBOPACK__imported__module__32787__12["useStableCallback"])((source, registration)=>{
        if (!registration) {
            if (activeFieldControlSourceRef.current === source) {
                activeFieldControlSourceRef.current = null;
                deleteRegistration();
                registrationRef.current = null;
            }
            return;
        }
        const previousId = registrationRef.current?.id;
        activeFieldControlSourceRef.current = source;
        registrationRef.current = registration;
        if (previousId && previousId !== registration.id) {
            deleteRegistration(previousId);
        }
        syncInitialValue();
        refreshRegistration();
    });
}
var __TURBOPACK__imported__module__8063__28 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
const FieldRootInner = /*#__PURE__*/ __TURBOPACK__imported__module__51268__65["forwardRef"](function FieldRootInner(componentProps, forwardedRef) {
    const { errors, validationMode: formValidationMode, submitAttemptedRef } = useFormContext();
    const { render, className, validate: validateProp, validationDebounceTime = 0, validationMode = formValidationMode, name, disabled: disabledProp = false, invalid: invalidProp, dirty: dirtyProp, touched: touchedProp, actionsRef, style, ...elementProps } = componentProps;
    const { disabled: disabledFieldset } = useFieldsetRootContext();
    const validate = (0, __TURBOPACK__imported__module__32787__9["useStableCallback"])(validateProp || (()=>null));
    const disabled = disabledFieldset || disabledProp;
    const [touchedState, setTouchedUnwrapped] = __TURBOPACK__imported__module__51268__65["useState"](false);
    const [dirtyState, setDirtyUnwrapped] = __TURBOPACK__imported__module__51268__65["useState"](false);
    const [filled, setFilled] = __TURBOPACK__imported__module__51268__65["useState"](false);
    const [focused, setFocused] = __TURBOPACK__imported__module__51268__65["useState"](false);
    const dirty = dirtyProp ?? dirtyState;
    const touched = touchedProp ?? touchedState;
    const markedDirtyRef = __TURBOPACK__imported__module__51268__65["useRef"](false);
    const setDirty = (0, __TURBOPACK__imported__module__32787__9["useStableCallback"])((value1)=>{
        if (dirtyProp !== undefined) {
            return;
        }
        if (value1) {
            markedDirtyRef.current = true;
        }
        setDirtyUnwrapped(value1);
    });
    const setTouched = (0, __TURBOPACK__imported__module__32787__9["useStableCallback"])((value1)=>{
        if (touchedProp !== undefined) {
            return;
        }
        setTouchedUnwrapped(value1);
    });
    const shouldValidateOnChange = (0, __TURBOPACK__imported__module__32787__9["useStableCallback"])(()=>validationMode === 'onChange' || validationMode === 'onSubmit' && submitAttemptedRef.current);
    const hasFormError = !!name && Object.hasOwn(errors, name) && errors[name] !== undefined;
    const invalid = invalidProp === true || hasFormError;
    const [validityData, setValidityData] = __TURBOPACK__imported__module__51268__65["useState"]({
        state: DEFAULT_VALIDITY_STATE,
        error: '',
        errors: [],
        value: null,
        initialValue: null
    });
    const valid = !invalid && validityData.state.valid;
    const state = __TURBOPACK__imported__module__51268__65["useMemo"](()=>({
            disabled,
            touched,
            dirty,
            valid,
            filled,
            focused
        }), [
        disabled,
        touched,
        dirty,
        valid,
        filled,
        focused
    ]);
    const validation = useFieldValidation({
        setValidityData,
        validate,
        validityData,
        validationDebounceTime,
        invalid,
        markedDirtyRef,
        state,
        name,
        shouldValidateOnChange
    });
    const handleImperativeValidate = __TURBOPACK__imported__module__51268__65["useCallback"](()=>{
        markedDirtyRef.current = true;
        validation.commit(validityData.value);
    }, [
        validation,
        validityData
    ]);
    const registerFieldControl = useFieldControlRegistration({
        commit: validation.commit,
        invalid,
        markedDirtyRef,
        name,
        setValidityData,
        validityData
    });
    __TURBOPACK__imported__module__51268__65["useImperativeHandle"](actionsRef, ()=>({
            validate: handleImperativeValidate
        }), [
        handleImperativeValidate
    ]);
    const contextValue = __TURBOPACK__imported__module__51268__65["useMemo"](()=>({
            invalid,
            name,
            validityData,
            setValidityData,
            disabled,
            touched,
            setTouched,
            dirty,
            setDirty,
            filled,
            setFilled,
            focused,
            setFocused,
            validate,
            validationMode,
            validationDebounceTime,
            shouldValidateOnChange,
            state,
            markedDirtyRef,
            registerFieldControl,
            validation
        }), [
        invalid,
        name,
        validityData,
        disabled,
        touched,
        setTouched,
        dirty,
        setDirty,
        filled,
        setFilled,
        focused,
        setFocused,
        validate,
        validationMode,
        validationDebounceTime,
        shouldValidateOnChange,
        state,
        registerFieldControl,
        validation
    ]);
    const element = (0, __TURBOPACK__imported__module__19996__8["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: fieldValidityMapping
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__28["jsx"])(FieldRootContext.Provider, {
        value: contextValue,
        children: element
    });
});
/**
 * Groups all parts of the field.
 * Renders a `<div>` element.
 *
 * Documentation: [Base UI Field](https://base-ui.com/react/components/field)
 */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const FieldRoot = /*#__PURE__*/ __TURBOPACK__imported__module__51268__65["forwardRef"](function FieldRoot(componentProps, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__28["jsx"])(LabelableProvider, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__28["jsx"])(FieldRootInner, {
            ...componentProps,
            ref: forwardedRef
        })
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/label/FieldLabel.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__28 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__73 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__9 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabel.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__12 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__32787__13 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useRegisteredLabelId.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__91900__12 = __TURBOPACK__imported__module__91900__;
'use client';
;
;
function useRegisteredLabelId(idProp, setLabelId) {
    const id = useBaseUiId(idProp);
    (0, __TURBOPACK__imported__module__91900__12["useIsoLayoutEffect"])(()=>{
        setLabelId(id);
        return ()=>{
            setLabelId(undefined);
        };
    }, [
        id,
        setLabelId
    ]);
    return id;
}
'use client';
;
;
;
;
;
;
function useLabel(params = {}) {
    const { id: idProp, fallbackControlId, native = false, setLabelId: setLabelIdProp, focusControl: focusControlProp } = params;
    const { controlId: contextControlId, setLabelId: setContextLabelId } = useLabelableContext();
    const syncLabelId = (0, __TURBOPACK__imported__module__32787__13["useStableCallback"])((nextLabelId)=>{
        setContextLabelId(nextLabelId);
        setLabelIdProp?.(nextLabelId);
    });
    const id = useRegisteredLabelId(idProp, syncLabelId);
    const resolvedControlId = contextControlId ?? fallbackControlId;
    function focusControl(event) {
        if (focusControlProp) {
            focusControlProp(event, resolvedControlId);
            return;
        }
        if (!resolvedControlId) {
            return;
        }
        const controlElement = ownerDocument(event.currentTarget).getElementById(resolvedControlId);
        if ((0, __TURBOPACK__imported__module__92615__12["isHTMLElement"])(controlElement)) {
            focusElementWithVisible(controlElement);
        }
    }
    function handleInteraction(event) {
        const target = getTarget(event.nativeEvent);
        if (target?.closest('button,input,select,textarea')) {
            return;
        }
        // Prevent text selection when double clicking label.
        if (!event.defaultPrevented && event.detail > 1) {
            event.preventDefault();
        }
        if (native) {
            return;
        }
        focusControl(event);
    }
    return native ? {
        id,
        htmlFor: resolvedControlId ?? undefined,
        onMouseDown: handleInteraction
    } : {
        id,
        onClick: handleInteraction,
        onPointerDown (event) {
            event.preventDefault();
        }
    };
}
function focusElementWithVisible(element) {
    element.focus({
        // Available from Chrome 144+ (January 2026).
        // Safari and Firefox already support it.
        focusVisible: true
    });
}
'use client';
;
;
;
;
;
;
;
;
const FieldLabel = /*#__PURE__*/ __TURBOPACK__imported__module__51268__73["forwardRef"](function FieldLabel(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, nativeLabel = true, ...elementProps } = componentProps;
    const fieldRootContext = useFieldRootContext(false);
    const { labelId } = useLabelableContext();
    const labelRef = __TURBOPACK__imported__module__51268__73["useRef"](null);
    const labelProps = useLabel({
        id: labelId ?? idProp,
        native: nativeLabel
    });
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const element = (0, __TURBOPACK__imported__module__19996__9["useRenderElement"])('label', componentProps, {
        ref: [
            forwardedRef,
            labelRef
        ],
        state: fieldRootContext.state,
        props: [
            labelProps,
            elementProps
        ],
        stateAttributesMapping: fieldValidityMapping
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/error/FieldError.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__29 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__74 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__13 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__19996__10 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__8063__29 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
const stateAttributesMapping3 = {
    ...fieldValidityMapping,
    ...transitionStatusMapping
};
const FieldError = /*#__PURE__*/ __TURBOPACK__imported__module__51268__74["forwardRef"](function FieldError(componentProps, forwardedRef) {
    const { render, id: idProp, className, match, style, ...elementProps } = componentProps;
    const id = useBaseUiId(idProp);
    const { validityData, state: fieldState, name } = useFieldRootContext(false);
    const { setMessageIds } = useLabelableContext();
    const { errors } = useFormContext();
    const formError = name ? errors[name] : null;
    const hasSpecificMatch = typeof match === 'string';
    let rendered = false;
    if (match === true) {
        rendered = true;
    } else if (hasSpecificMatch) {
        rendered = Boolean(validityData.state[match]);
    } else {
        rendered = Boolean(formError) || validityData.state.valid === false;
    }
    const { mounted, transitionStatus, setMounted } = useTransitionStatus(rendered);
    (0, __TURBOPACK__imported__module__91900__13["useIsoLayoutEffect"])(()=>{
        if (!rendered || !id) {
            return undefined;
        }
        setMessageIds((v)=>v.concat(id));
        return ()=>{
            setMessageIds((v)=>v.filter((item)=>item !== id));
        };
    }, [
        rendered,
        id,
        setMessageIds
    ]);
    const errorRef = __TURBOPACK__imported__module__51268__74["useRef"](null);
    const [lastRenderedMessage, setLastRenderedMessage] = __TURBOPACK__imported__module__51268__74["useState"](null);
    const [lastRenderedMessageKey, setLastRenderedMessageKey] = __TURBOPACK__imported__module__51268__74["useState"](null);
    const clientErrorMessage = validityData.errors.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__29["jsx"])("ul", {
        children: validityData.errors.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__29["jsx"])("li", {
                children: message
            }, message))
    }) : validityData.error;
    const errorMessage = hasSpecificMatch ? clientErrorMessage : formError || clientErrorMessage;
    let errorKey = validityData.error;
    if (formError != null) {
        errorKey = Array.isArray(formError) ? JSON.stringify(formError) : formError;
    } else if (validityData.errors.length > 1) {
        errorKey = JSON.stringify(validityData.errors);
    }
    if (rendered && errorKey !== lastRenderedMessageKey) {
        setLastRenderedMessageKey(errorKey);
        setLastRenderedMessage(errorMessage);
    }
    useOpenChangeComplete({
        open: rendered,
        ref: errorRef,
        onComplete () {
            if (!rendered) {
                setMounted(false);
            }
        }
    });
    const state = {
        ...fieldState,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__19996__10["useRenderElement"])('div', componentProps, {
        ref: [
            forwardedRef,
            errorRef
        ],
        state,
        props: [
            {
                id,
                children: rendered ? errorMessage : lastRenderedMessage
            },
            elementProps
        ],
        stateAttributesMapping: stateAttributesMapping3,
        enabled: mounted
    });
    if (!mounted) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/description/FieldDescription.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__30 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__75 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__14 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__19996__11 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
;
;
;
const FieldDescription = /*#__PURE__*/ __TURBOPACK__imported__module__51268__75["forwardRef"](function FieldDescription(componentProps, forwardedRef) {
    const { render, id: idProp, className, style, ...elementProps } = componentProps;
    const id = useBaseUiId(idProp);
    const fieldRootContext = useFieldRootContext(false);
    const { setMessageIds } = useLabelableContext();
    (0, __TURBOPACK__imported__module__91900__14["useIsoLayoutEffect"])(()=>{
        if (!id) {
            return undefined;
        }
        setMessageIds((v)=>v.concat(id));
        return ()=>{
            setMessageIds((v)=>v.filter((item)=>item !== id));
        };
    }, [
        id,
        setMessageIds
    ]);
    const element = (0, __TURBOPACK__imported__module__19996__11["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        state: fieldRootContext.state,
        props: [
            {
                id
            },
            elementProps
        ],
        stateAttributesMapping: fieldValidityMapping
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/control/FieldControl.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__31 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__76 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useControlled.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__32 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__77 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
function useControlled({ controlled, default: defaultProp, name, state = 'value' }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__51268__77["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__51268__77["useState"](defaultProp);
    const value1 = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const setValueIfUncontrolled = __TURBOPACK__imported__module__51268__77["useCallback"]((newValue)=>{
        if (!isControlled) {
            setValue(newValue);
        }
    }, []);
    return [
        value1,
        setValueIfUncontrolled
    ];
}
function serializeToDevModeString(input) {
    let nextId = 0;
    const seen = new WeakMap();
    try {
        const result = JSON.stringify(input, function replacer(key, value1) {
            if (key === '_owner' && this != null && typeof this === 'object' && '$$typeof' in this) {
                return undefined;
            }
            if (typeof value1 === 'bigint') {
                return `__bigint__:${value1}`;
            }
            if (value1 !== null && typeof value1 === 'object') {
                const id = seen.get(value1);
                if (id !== undefined) {
                    return `__object__:${id}`;
                }
                seen.set(value1, nextId);
                nextId += 1;
            }
            return value1;
        });
        return result ?? `__top__:${typeof input}`;
    } catch  {
        return '__unserializable__';
    }
}
var __TURBOPACK__imported__module__91900__15 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__14 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/field-register-control/useRegisterFieldControl.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__78 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__16 = __TURBOPACK__imported__module__91900__;
'use client';
;
;
;
function useRegisterFieldControl(controlRef, params) {
    const { enabled = true, getValue, id, value: value1 } = params;
    const { registerFieldControl } = useFieldRootContext();
    const sourceRef = __TURBOPACK__imported__module__51268__78["useRef"](null);
    if (!sourceRef.current) {
        sourceRef.current = Symbol();
    }
    (0, __TURBOPACK__imported__module__91900__16["useIsoLayoutEffect"])(()=>{
        const source = sourceRef.current;
        if (!source || !enabled) {
            return undefined;
        }
        registerFieldControl(source, {
            controlRef,
            getValue,
            id,
            value: value1
        });
        return ()=>{
            registerFieldControl(source, undefined);
        };
    }, [
        controlRef,
        enabled,
        getValue,
        id,
        registerFieldControl,
        value1
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabelableId.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__79 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__17 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__15 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__67452__8 = __TURBOPACK__imported__module__67452__;
var __TURBOPACK__imported__module__92615__13 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__24659__12 = __TURBOPACK__imported__module__24659__;
'use client';
;
;
;
;
;
;
;
;
function useLabelableId(params = {}) {
    const { id, implicit = false, controlRef } = params;
    const { controlId, registerControlId } = useLabelableContext();
    const defaultId = useBaseUiId(id);
    const controlIdForEffect = implicit ? controlId : undefined;
    const controlSourceRef = (0, __TURBOPACK__imported__module__67452__8["useRefWithInit"])(()=>Symbol('labelable-control'));
    const hasRegisteredRef = __TURBOPACK__imported__module__51268__79["useRef"](false);
    const hadExplicitIdRef = __TURBOPACK__imported__module__51268__79["useRef"](id != null);
    const unregisterControlId = (0, __TURBOPACK__imported__module__32787__15["useStableCallback"])(()=>{
        if (!hasRegisteredRef.current || registerControlId === __TURBOPACK__imported__module__24659__12["NOOP"]) {
            return;
        }
        hasRegisteredRef.current = false;
        registerControlId(controlSourceRef.current, undefined);
    });
    (0, __TURBOPACK__imported__module__91900__17["useIsoLayoutEffect"])(()=>{
        if (registerControlId === __TURBOPACK__imported__module__24659__12["NOOP"]) {
            return undefined;
        }
        let nextId;
        if (implicit) {
            const elem = controlRef?.current;
            if ((0, __TURBOPACK__imported__module__92615__13["isElement"])(elem) && elem.closest('label') != null) {
                nextId = id ?? null;
            } else {
                nextId = controlIdForEffect ?? defaultId;
            }
        } else if (id != null) {
            hadExplicitIdRef.current = true;
            nextId = id;
        } else if (hadExplicitIdRef.current) {
            nextId = defaultId;
        } else {
            unregisterControlId();
            return undefined;
        }
        if (nextId === undefined) {
            unregisterControlId();
            return undefined;
        }
        hasRegisteredRef.current = true;
        registerControlId(controlSourceRef.current, nextId);
        return undefined;
    }, [
        id,
        controlRef,
        controlIdForEffect,
        registerControlId,
        implicit,
        defaultId,
        controlSourceRef,
        unregisterControlId
    ]);
    __TURBOPACK__imported__module__51268__79["useEffect"](()=>{
        return unregisterControlId;
    }, [
        unregisterControlId
    ]);
    return controlId ?? defaultId;
}
var __TURBOPACK__imported__module__19996__12 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const FieldControl = /*#__PURE__*/ __TURBOPACK__imported__module__51268__76["forwardRef"](function FieldControl(componentProps, forwardedRef) {
    const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, style, ...elementProps } = componentProps;
    const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = useFieldRootContext();
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const state = {
        ...fieldState,
        disabled
    };
    const { labelId } = useLabelableContext();
    const id = useLabelableId({
        id: idProp
    });
    (0, __TURBOPACK__imported__module__91900__15["useIsoLayoutEffect"])(()=>{
        const hasExternalValue = valueProp != null;
        if (validation.inputRef.current?.value || hasExternalValue && valueProp !== '') {
            setFilled(true);
        } else if (hasExternalValue && valueProp === '') {
            setFilled(false);
        }
    }, [
        validation.inputRef,
        setFilled,
        valueProp
    ]);
    const inputRef = __TURBOPACK__imported__module__51268__76["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__15["useIsoLayoutEffect"])(()=>{
        if (autoFocus && inputRef.current === activeElement(ownerDocument(inputRef.current))) {
            setFocused(true);
        }
    }, [
        autoFocus,
        setFocused
    ]);
    const [valueUnwrapped] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'FieldControl',
        state: 'value'
    });
    const isControlled = valueProp !== undefined;
    const value1 = isControlled ? valueUnwrapped : undefined;
    const getFieldValue = (0, __TURBOPACK__imported__module__32787__14["useStableCallback"])(()=>validation.inputRef.current?.value);
    useRegisterFieldControl(validation.inputRef, {
        id,
        value: value1,
        getValue: getFieldValue
    });
    const element = (0, __TURBOPACK__imported__module__19996__12["useRenderElement"])('input', componentProps, {
        ref: [
            forwardedRef,
            inputRef
        ],
        state,
        props: [
            {
                id,
                disabled,
                name,
                ref: validation.inputRef,
                'aria-labelledby': labelId,
                autoFocus,
                ...isControlled ? {
                    value: value1
                } : {
                    defaultValue
                },
                onChange (event) {
                    const inputValue = event.currentTarget.value;
                    onValueChange?.(inputValue, createChangeEventDetails(__TURBOPACK__imported__module__54906__.none, event.nativeEvent));
                    setDirty(inputValue !== validityData.initialValue);
                    setFilled(inputValue !== '');
                },
                onFocus () {
                    setFocused(true);
                },
                onBlur (event) {
                    setTouched(true);
                    setFocused(false);
                    if (validationMode === 'onBlur') {
                        validation.commit(event.currentTarget.value);
                    }
                },
                onKeyDown (event) {
                    if (event.currentTarget.tagName === 'INPUT' && event.key === 'Enter') {
                        setTouched(true);
                        validation.commit(event.currentTarget.value);
                    }
                }
            },
            validation.getInputValidationProps(),
            elementProps
        ],
        stateAttributesMapping: fieldValidityMapping
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/validity/FieldValidity.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__33 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__80 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__8063__30 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
const FieldValidity = function FieldValidity(props) {
    const { children } = props;
    const { validityData, invalid } = useFieldRootContext(false);
    const combinedFieldValidityData = __TURBOPACK__imported__module__51268__80["useMemo"](()=>getCombinedFieldValidityData(validityData, invalid), [
        validityData,
        invalid
    ]);
    const isInvalid = combinedFieldValidityData.state.valid === false;
    const { transitionStatus } = useTransitionStatus(isInvalid);
    const fieldValidityState = __TURBOPACK__imported__module__51268__80["useMemo"](()=>{
        return {
            ...combinedFieldValidityData,
            validity: combinedFieldValidityData.state,
            transitionStatus
        };
    }, [
        combinedFieldValidityData,
        transitionStatus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__30["jsx"])(__TURBOPACK__imported__module__51268__80["Fragment"], {
        children: children(fieldValidityState)
    });
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/item/FieldItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__34 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__81 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__13 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/item/FieldItemContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__35 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__82 = __TURBOPACK__imported__module__51268__;
'use client';
;
const FieldItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__82["createContext"]({
    disabled: false
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useFieldItemContext() {
    const context = __TURBOPACK__imported__module__51268__82["useContext"](FieldItemContext);
    return context;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__36 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__6 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__83 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const CheckboxGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__83["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useCheckboxGroupContext(optional = true) {
    const context = __TURBOPACK__imported__module__51268__83["useContext"](CheckboxGroupContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__6["default"])(3));
    }
    return context;
}
var __TURBOPACK__imported__module__8063__31 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
const FieldItem = /*#__PURE__*/ __TURBOPACK__imported__module__51268__81["forwardRef"](function FieldItem(componentProps, forwardedRef) {
    const { render, className, style, disabled: disabledProp = false, ...elementProps } = componentProps;
    const { state, disabled: rootDisabled } = useFieldRootContext(false);
    const disabled = rootDisabled || disabledProp;
    const checkboxGroupContext = useCheckboxGroupContext();
    // checkboxGroupContext.parent is truthy even if no parent checkbox is involved
    const parentId = checkboxGroupContext?.parent.id;
    // this a more reliable check
    const hasParentCheckbox = checkboxGroupContext?.allValues !== undefined;
    const controlId = hasParentCheckbox ? parentId : undefined;
    const fieldItemContext = __TURBOPACK__imported__module__51268__81["useMemo"](()=>({
            disabled
        }), [
        disabled
    ]);
    const element = (0, __TURBOPACK__imported__module__19996__13["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: fieldValidityMapping
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__31["jsx"])(LabelableProvider, {
        controlId: controlId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__31["jsx"])(FieldItemContext.Provider, {
            value: fieldItemContext,
            children: element
        })
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "Control",
    0,
    FieldControl,
    "Description",
    0,
    FieldDescription,
    "Error",
    0,
    FieldError,
    "Item",
    0,
    FieldItem,
    "Label",
    0,
    FieldLabel,
    "Root",
    0,
    FieldRoot,
    "Validity",
    0,
    FieldValidity
], 48773);
var __TURBOPACK__imported__module__48773__ = __turbopack_context__.i(48773);
var __TURBOPACK__imported__module__48773__ = __TURBOPACK__imported__module__48773__;
var __TURBOPACK__imported__module__8063__32 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__51268__64["forwardRef"](function Input(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__32["jsx"])(__TURBOPACK__imported__module__48773__.Control, {
        ref: forwardedRef,
        ...props
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
var __TURBOPACK__imported__module__75157__4 = __TURBOPACK__imported__module__75157__;
;
;
;
function Input1({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__26["jsx"])(Input, {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__75157__4["cn"])("h-8 w-full min-w-0 rounded-none border border-input bg-transparent px-2.5 py-1 text-xs transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    });
}
;
// MERGED MODULE: [project]/src/components/ui/textarea.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__33 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__75157__5 = __TURBOPACK__imported__module__75157__;
;
;
function Textarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__33["jsx"])("textarea", {
        "data-slot": "textarea",
        className: (0, __TURBOPACK__imported__module__75157__5["cn"])("flex field-sizing-content min-h-16 w-full rounded-none border border-input bg-transparent px-2.5 py-2 text-xs transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    });
}
;
"use client";
;
;
;
;
;
;
function InputGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__25["jsx"])("div", {
        "data-slot": "input-group",
        role: "group",
        className: (0, __TURBOPACK__imported__module__75157__3["cn"])("group/input-group relative flex h-8 w-full min-w-0 items-center rounded-none border border-input transition-colors outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-disabled:bg-input/50 has-disabled:opacity-50 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-1 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-1 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-disabled:bg-input/80 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", className),
        ...props
    });
}
const inputGroupAddonVariants = (0, __TURBOPACK__imported__module__94237__["cva"])("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-xs font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-none [&>svg:not([class*='size-'])]:size-4", {
    variants: {
        align: {
            "inline-start": "order-first pl-2 has-[>button]:ml-[-0.3rem] has-[>kbd]:ml-[-0.15rem]",
            "inline-end": "order-last pr-2 has-[>button]:mr-[-0.3rem] has-[>kbd]:mr-[-0.15rem]",
            "block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
            "block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
        }
    },
    defaultVariants: {
        align: "inline-start"
    }
});
function InputGroupAddon({ className, align = "inline-start", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__25["jsx"])("div", {
        role: "group",
        "data-slot": "input-group-addon",
        "data-align": align,
        className: (0, __TURBOPACK__imported__module__75157__3["cn"])(inputGroupAddonVariants({
            align
        }), className),
        onClick: (e)=>{
            if (e.target.closest("button")) {
                return;
            }
            e.currentTarget.parentElement?.querySelector("input")?.focus();
        },
        ...props
    });
}
const inputGroupButtonVariants = (0, __TURBOPACK__imported__module__94237__["cva"])("flex items-center gap-2 text-xs shadow-none", {
    variants: {
        size: {
            xs: "h-6 gap-1 rounded-none px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
            sm: "gap-1",
            "icon-xs": "size-6 rounded-none p-0 has-[>svg]:p-0",
            "icon-sm": "size-7 p-0 has-[>svg]:p-0"
        }
    },
    defaultVariants: {
        size: "xs"
    }
});
function InputGroupButton({ className, type = "button", variant = "ghost", size = "xs", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__25["jsx"])(__TURBOPACK__imported__module__19455__3["Button"], {
        type: type,
        "data-size": size,
        variant: variant,
        className: (0, __TURBOPACK__imported__module__75157__3["cn"])(inputGroupButtonVariants({
            size
        }), className),
        ...props
    });
}
function InputGroupText({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__25["jsx"])("span", {
        className: (0, __TURBOPACK__imported__module__75157__3["cn"])("flex items-center gap-2 text-xs text-muted-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className),
        ...props
    });
}
function InputGroupInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__25["jsx"])(Input1, {
        "data-slot": "input-group-control",
        className: (0, __TURBOPACK__imported__module__75157__3["cn"])("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent", className),
        ...props
    });
}
function InputGroupTextarea({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__25["jsx"])(Textarea, {
        "data-slot": "input-group-control",
        className: (0, __TURBOPACK__imported__module__75157__3["cn"])("flex-1 resize-none rounded-none border-0 bg-transparent py-2 shadow-none ring-0 focus-visible:ring-0 disabled:bg-transparent aria-invalid:ring-0 dark:bg-transparent dark:disabled:bg-transparent", className),
        ...props
    });
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript) <export default as SearchIcon>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/search.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67022__5 = __TURBOPACK__imported__module__67022__;
;
const __iconNode5 = [
    [
        "path",
        {
            d: "m21 21-4.34-4.34",
            key: "14j7rj"
        }
    ],
    [
        "circle",
        {
            cx: "11",
            cy: "11",
            r: "8",
            key: "4ej97u"
        }
    ]
];
const Search = (0, __TURBOPACK__imported__module__67022__5["default"])("search", __iconNode5);
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/check.mjs [app-client] (ecmascript) <export default as CheckIcon>
;
var __TURBOPACK__imported__module__98144__ = __turbopack_context__.i(98144);
var __TURBOPACK__imported__module__98144__ = __TURBOPACK__imported__module__98144__;
"use client";
;
;
;
;
;
;
function Command({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(_e, {
        "data-slot": "command",
        className: (0, __TURBOPACK__imported__module__75157__1["cn"])("flex size-full flex-col overflow-hidden rounded-none bg-popover text-popover-foreground", className),
        ...props
    });
}
function CommandDialog({ title = "Command Palette", description = "Search for a command to run...", children, className, showCloseButton = false, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsxs"])(Dialog1, {
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsxs"])(DialogHeader, {
                className: "sr-only",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(DialogTitle2, {
                        children: title
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(DialogDescription2, {
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(DialogContent1, {
                className: (0, __TURBOPACK__imported__module__75157__1["cn"])("top-1/3 translate-y-0 overflow-hidden rounded-none p-0", className),
                showCloseButton: showCloseButton,
                children: children
            })
        ]
    });
}
function CommandInput({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])("div", {
        "data-slot": "command-input-wrapper",
        className: "border-b pb-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsxs"])(InputGroup, {
            className: "h-8 border-none border-input/30 bg-input/30 shadow-none! *:data-[slot=input-group-addon]:pl-2!",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(_e.Input, {
                    "data-slot": "command-input",
                    className: (0, __TURBOPACK__imported__module__75157__1["cn"])("w-full text-xs outline-hidden disabled:cursor-not-allowed disabled:opacity-50", className),
                    ...props
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(InputGroupAddon, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(Search, {
                        className: "size-4 shrink-0 opacity-50"
                    })
                })
            ]
        })
    });
}
function CommandList({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(_e.List, {
        "data-slot": "command-list",
        className: (0, __TURBOPACK__imported__module__75157__1["cn"])("no-scrollbar max-h-72 scroll-py-0 overflow-x-hidden overflow-y-auto outline-none", className),
        ...props
    });
}
function CommandEmpty({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(_e.Empty, {
        "data-slot": "command-empty",
        className: (0, __TURBOPACK__imported__module__75157__1["cn"])("py-6 text-center text-xs", className),
        ...props
    });
}
function CommandGroup({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(_e.Group, {
        "data-slot": "command-group",
        className: (0, __TURBOPACK__imported__module__75157__1["cn"])("overflow-hidden text-foreground **:[[cmdk-group-heading]]:px-2 **:[[cmdk-group-heading]]:py-1.5 **:[[cmdk-group-heading]]:text-xs **:[[cmdk-group-heading]]:text-muted-foreground", className),
        ...props
    });
}
function CommandSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(_e.Separator, {
        "data-slot": "command-separator",
        className: (0, __TURBOPACK__imported__module__75157__1["cn"])("-mx-1 h-px bg-border", className),
        ...props
    });
}
function CommandItem({ className, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsxs"])(_e.Item, {
        "data-slot": "command-item",
        className: (0, __TURBOPACK__imported__module__75157__1["cn"])("group/command-item relative flex cursor-default items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden select-none in-data-[slot=dialog-content]:rounded-none! data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50 data-selected:bg-muted data-selected:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-selected:*:[svg]:text-foreground", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])(__TURBOPACK__imported__module__98144__["default"], {
                className: "ml-auto opacity-0 group-has-data-[slot=command-shortcut]/command-item:hidden group-data-[checked=true]/command-item:opacity-100"
            })
        ]
    });
}
function CommandShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__6["jsx"])("span", {
        "data-slot": "command-shortcut",
        className: (0, __TURBOPACK__imported__module__75157__1["cn"])("ml-auto text-xs tracking-widest text-muted-foreground group-data-selected/command-item:text-foreground", className),
        ...props
    });
}
;
"use client";
;
;
;
;
;
;
;
;
function SearchCommand() {
    const router = (0, __TURBOPACK__imported__module__48042__1["useRouter"])();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__51268__1["useState"])(false);
    (0, __TURBOPACK__imported__module__51268__1["useEffect"])(()=>{
        const down = (e)=>{
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((prev)=>!prev);
            }
        };
        document.addEventListener("keydown", down);
        return ()=>document.removeEventListener("keydown", down);
    }, []);
    const handleSelect = (path)=>{
        setOpen(false);
        router.push(path);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsxs"])(__TURBOPACK__imported__module__8063__4["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsxs"])(__TURBOPACK__imported__module__19455__1["Button"], {
                variant: "default",
                size: "xs",
                className: "gap-2 border-0 bg-bloomberg-primary hover:bg-bloomberg-primary/70",
                onClick: ()=>{
                    setOpen(true);
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(Terminal, {
                        className: "h-4 w-4"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])("span", {
                        className: "text-muted",
                        children: "Search"
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsxs"])("div", {
                        className: "hidden md:flex gap-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(Kbd, {
                                className: "bg-muted/90 rounded",
                                children: "Ctrl"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(Kbd, {
                                className: "bg-muted/90 rounded",
                                children: "K"
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(CommandDialog, {
                open: open,
                onOpenChange: setOpen,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsxs"])(Command, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(CommandInput, {
                            placeholder: "Type a command or search..."
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsxs"])(CommandList, {
                            className: "max-h-[60vh]",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(CommandEmpty, {
                                    children: "No results found."
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(CommandGroup, {
                                    heading: "Navigation",
                                    children: appRegistry.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsxs"])(CommandItem, {
                                            className: "gap-2",
                                            onSelect: ()=>handleSelect(feature.path),
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])("span", {
                                                    className: "font-mono",
                                                    children: feature.label
                                                }),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])("span", {
                                                    className: "text-muted-foreground",
                                                    children: feature.description
                                                })
                                            ]
                                        }, feature.id))
                                })
                            ]
                        })
                    ]
                })
            })
        ]
    });
}
// MERGED MODULE: [project]/src/components/ui/dropdown-menu.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__34 = __TURBOPACK__imported__module__8063__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/index.parts.js [app-client] (ecmascript) <export * as Menu>
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/index.parts.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/index.parts.js [app-client] (ecmascript) <locals>
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
__turbopack_context__.s([], 14820);
var __TURBOPACK__imported__module__14820__ = __turbopack_context__.i(14820);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/arrow/MenuArrow.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__37 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__84 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/positioner/MenuPositionerContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__38 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__7 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__85 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const MenuPositionerContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__85["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenuPositionerContext(optional) {
    const context = __TURBOPACK__imported__module__51268__85["useContext"](MenuPositionerContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__7["default"])(33));
    }
    return context;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/root/MenuRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__39 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__8 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__86 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const MenuRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__86["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenuRootContext(optional) {
    const context = __TURBOPACK__imported__module__51268__86["useContext"](MenuRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__8["default"])(36));
    }
    return context;
}
var __TURBOPACK__imported__module__19996__14 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
;
const MenuArrow = /*#__PURE__*/ __TURBOPACK__imported__module__51268__84["forwardRef"](function MenuArrow(componentProps, forwardedRef) {
    const { className, render, style, ...elementProps } = componentProps;
    const { store } = useMenuRootContext();
    const { arrowRef, side, align, arrowUncentered, arrowStyles } = useMenuPositionerContext();
    const open = store.useState('open');
    const state = {
        open,
        side,
        align,
        uncentered: arrowUncentered
    };
    return (0, __TURBOPACK__imported__module__19996__14["useRenderElement"])('div', componentProps, {
        ref: [
            arrowRef,
            forwardedRef
        ],
        stateAttributesMapping: popupStateMapping,
        state,
        props: {
            style: arrowStyles,
            'aria-hidden': true,
            ...elementProps
        }
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/backdrop/MenuBackdrop.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__40 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__87 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__15 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/context-menu/root/ContextMenuRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__41 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__9 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__88 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const ContextMenuRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__88["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useContextMenuRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__51268__88["useContext"](ContextMenuRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__9["default"])(25));
    }
    return context;
}
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
;
const stateAttributesMapping4 = {
    ...popupStateMapping,
    ...transitionStatusMapping
};
const MenuBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__51268__87["forwardRef"](function MenuBackdrop(componentProps, forwardedRef) {
    const { className, render, style, ...elementProps } = componentProps;
    const { store } = useMenuRootContext();
    const open = store.useState('open');
    const mounted = store.useState('mounted');
    const transitionStatus = store.useState('transitionStatus');
    const lastOpenChangeReason = store.useState('lastOpenChangeReason');
    const contextMenuContext = useContextMenuRootContext();
    const state = {
        open,
        transitionStatus
    };
    return (0, __TURBOPACK__imported__module__19996__15["useRenderElement"])('div', componentProps, {
        ref: contextMenuContext?.backdropRef ? [
            forwardedRef,
            contextMenuContext.backdropRef
        ] : forwardedRef,
        state,
        stateAttributesMapping: stateAttributesMapping4,
        props: [
            {
                role: 'presentation',
                hidden: !mounted,
                style: {
                    pointerEvents: lastOpenChangeReason === __TURBOPACK__imported__module__54906__.triggerHover ? 'none' : undefined,
                    userSelect: 'none',
                    WebkitUserSelect: 'none'
                }
            },
            elementProps
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/checkbox-item/MenuCheckboxItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__42 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__89 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__16 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/checkbox-item/MenuCheckboxItemContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__43 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__10 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__90 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const MenuCheckboxItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__90["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenuCheckboxItemContext() {
    const context = __TURBOPACK__imported__module__51268__90["useContext"](MenuCheckboxItemContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__10["default"])(30));
    }
    return context;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/item/useMenuItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__91 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__90741__1 = __TURBOPACK__imported__module__90741__;
var __TURBOPACK__imported__module__81833__2 = __TURBOPACK__imported__module__81833__;
var __TURBOPACK__imported__module__84028__2 = __TURBOPACK__imported__module__84028__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/item/useMenuItemCommonProps.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__92 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
function useMenuItemCommonProps(params) {
    const { closeOnClick, highlighted, id, nodeId, store, typingRef, itemRef, itemMetadata } = params;
    const { events: menuEvents } = store.useState('floatingTreeRoot');
    const contextMenuContext = useContextMenuRootContext(true);
    const isContextMenu = contextMenuContext !== undefined;
    return __TURBOPACK__imported__module__51268__92["useMemo"](()=>({
            id,
            role: 'menuitem',
            tabIndex: highlighted ? 0 : -1,
            onKeyDown (event) {
                if (event.key === ' ' && typingRef?.current) {
                    event.preventDefault();
                }
            },
            onMouseMove (event) {
                if (!nodeId) {
                    return;
                }
                // Inform the floating tree that a menu item within this menu was hovered/moved over
                // so unrelated descendant submenus can be closed.
                menuEvents.emit('itemhover', {
                    nodeId,
                    target: event.currentTarget
                });
            },
            onClick (event) {
                if (closeOnClick) {
                    menuEvents.emit('close', {
                        domEvent: event,
                        reason: __TURBOPACK__imported__module__54906__.itemPress
                    });
                }
            },
            onMouseUp (event) {
                if (contextMenuContext) {
                    const initialCursorPoint = contextMenuContext.initialCursorPointRef.current;
                    contextMenuContext.initialCursorPointRef.current = null;
                    if (isContextMenu && initialCursorPoint && Math.abs(event.clientX - initialCursorPoint.x) <= 1 && Math.abs(event.clientY - initialCursorPoint.y) <= 1) {
                        return;
                    }
                    // On non-macOS platforms, this mouseup belongs to the right-click gesture
                    // that opened the context menu, so it must not activate an item.
                    if (isContextMenu && !isMac && event.button === 2) {
                        return;
                    }
                }
                if (itemRef.current && store.context.allowMouseUpTriggerRef.current && (!isContextMenu || event.button === 2)) {
                    // This fires whenever the user clicks on the trigger, moves the cursor, and releases it over the item.
                    // We trigger the click and override the `closeOnClick` preference to always close the menu.
                    if (!itemMetadata || itemMetadata.type === 'regular-item') {
                        itemRef.current.click();
                    }
                }
            }
        }), [
        closeOnClick,
        highlighted,
        id,
        menuEvents,
        nodeId,
        store,
        typingRef,
        itemRef,
        contextMenuContext,
        isContextMenu,
        itemMetadata
    ]);
}
'use client';
;
;
;
;
;
const REGULAR_ITEM = {
    type: 'regular-item'
};
function useMenuItem(params) {
    const { closeOnClick, disabled = false, highlighted, id, store, typingRef = store.context.typingRef, nativeButton, itemMetadata, nodeId } = params;
    const itemRef = __TURBOPACK__imported__module__51268__91["useRef"](null);
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__81833__2["useButton"])({
        disabled,
        focusableWhenDisabled: true,
        native: nativeButton,
        composite: true
    });
    const commonProps = useMenuItemCommonProps({
        closeOnClick,
        highlighted,
        id,
        nodeId,
        store,
        typingRef,
        itemRef,
        itemMetadata
    });
    const getItemProps = __TURBOPACK__imported__module__51268__91["useCallback"]((externalProps)=>{
        return (0, __TURBOPACK__imported__module__84028__2["mergeProps"])(commonProps, {
            onMouseEnter () {
                if (itemMetadata.type !== 'submenu-trigger') {
                    return;
                }
                itemMetadata.setActive();
            }
        }, externalProps, getButtonProps);
    }, [
        commonProps,
        getButtonProps,
        itemMetadata
    ]);
    const mergedRef = (0, __TURBOPACK__imported__module__90741__1["useMergedRefs"])(itemRef, buttonRef);
    return __TURBOPACK__imported__module__51268__91["useMemo"](()=>({
            getItemProps,
            itemRef: mergedRef
        }), [
        getItemProps,
        mergedRef
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/list/useCompositeListItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__93 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__18 = __TURBOPACK__imported__module__91900__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/list/CompositeListContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__44 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__94 = __TURBOPACK__imported__module__51268__;
'use client';
;
const CompositeListContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__94["createContext"]({
    register: ()=>{},
    unregister: ()=>{},
    subscribeMapChange: ()=>{
        return ()=>{};
    },
    elementsRef: {
        current: []
    },
    nextIndexRef: {
        current: 0
    }
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useCompositeListContext() {
    return __TURBOPACK__imported__module__51268__94["useContext"](CompositeListContext);
}
'use client';
;
;
;
let IndexGuessBehavior = /*#__PURE__*/ function(IndexGuessBehavior) {
    IndexGuessBehavior[IndexGuessBehavior["None"] = 0] = "None";
    IndexGuessBehavior[IndexGuessBehavior["GuessFromOrder"] = 1] = "GuessFromOrder";
    return IndexGuessBehavior;
}({});
function useCompositeListItem(params = {}) {
    const { label, metadata, textRef, indexGuessBehavior, index: externalIndex } = params;
    const { register, unregister, subscribeMapChange, elementsRef, labelsRef, nextIndexRef } = useCompositeListContext();
    const indexRef = __TURBOPACK__imported__module__51268__93["useRef"](-1);
    const [index, setIndex] = __TURBOPACK__imported__module__51268__93["useState"](externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? ()=>{
        if (indexRef.current === -1) {
            const newIndex = nextIndexRef.current;
            nextIndexRef.current += 1;
            indexRef.current = newIndex;
        }
        return indexRef.current;
    } : -1));
    const componentRef = __TURBOPACK__imported__module__51268__93["useRef"](null);
    const ref = __TURBOPACK__imported__module__51268__93["useCallback"]((node)=>{
        componentRef.current = node;
        if (index !== -1 && node !== null) {
            elementsRef.current[index] = node;
            if (labelsRef) {
                const isLabelDefined = label !== undefined;
                labelsRef.current[index] = isLabelDefined ? label : textRef?.current?.textContent ?? node.textContent;
            }
        }
    }, [
        index,
        elementsRef,
        labelsRef,
        label,
        textRef
    ]);
    (0, __TURBOPACK__imported__module__91900__18["useIsoLayoutEffect"])(()=>{
        if (externalIndex != null) {
            return undefined;
        }
        const node = componentRef.current;
        if (node) {
            register(node, metadata);
            return ()=>{
                unregister(node);
            };
        }
        return undefined;
    }, [
        externalIndex,
        register,
        unregister,
        metadata
    ]);
    (0, __TURBOPACK__imported__module__91900__18["useIsoLayoutEffect"])(()=>{
        if (externalIndex != null) {
            return undefined;
        }
        return subscribeMapChange((map)=>{
            const i = componentRef.current ? map.get(componentRef.current)?.index : null;
            if (i != null) {
                setIndex(i);
            }
        });
    }, [
        externalIndex,
        subscribeMapChange,
        setIndex
    ]);
    return __TURBOPACK__imported__module__51268__93["useMemo"](()=>({
            ref,
            index
        }), [
        index,
        ref
    ]);
}
var __TURBOPACK__imported__module__19996__16 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/utils/stateAttributesMapping.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/checkbox-item/MenuCheckboxItemDataAttributes.js [app-client] (ecmascript)
;
let MenuCheckboxItemDataAttributes = /*#__PURE__*/ function(MenuCheckboxItemDataAttributes) {
    /**
   * Present when the menu checkbox item is checked.
   */ MenuCheckboxItemDataAttributes["checked"] = "data-checked";
    /**
   * Present when the menu checkbox item is not checked.
   */ MenuCheckboxItemDataAttributes["unchecked"] = "data-unchecked";
    /**
   * Present when the menu checkbox item is disabled.
   */ MenuCheckboxItemDataAttributes["disabled"] = "data-disabled";
    /**
   * Present when the menu checkbox item is highlighted.
   */ MenuCheckboxItemDataAttributes["highlighted"] = "data-highlighted";
    return MenuCheckboxItemDataAttributes;
}({});
;
;
const itemMapping = {
    checked (value1) {
        if (value1) {
            return {
                [MenuCheckboxItemDataAttributes.checked]: ''
            };
        }
        return {
            [MenuCheckboxItemDataAttributes.unchecked]: ''
        };
    },
    ...transitionStatusMapping
};
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
var __TURBOPACK__imported__module__8063__35 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuCheckboxItem = /*#__PURE__*/ __TURBOPACK__imported__module__51268__89["forwardRef"](function MenuCheckboxItem(componentProps, forwardedRef) {
    const { render, className, id: idProp, label, nativeButton = false, disabled = false, closeOnClick = false, checked: checkedProp, defaultChecked, onCheckedChange, style, ...elementProps } = componentProps;
    const listItem = useCompositeListItem({
        label
    });
    const menuPositionerContext = useMenuPositionerContext(true);
    const id = useBaseUiId(idProp);
    const { store } = useMenuRootContext();
    const highlighted = store.useState('isActive', listItem.index);
    const itemProps = store.useState('itemProps');
    const [checked, setChecked] = useControlled({
        controlled: checkedProp,
        default: defaultChecked ?? false,
        name: 'MenuCheckboxItem',
        state: 'checked'
    });
    const { getItemProps, itemRef } = useMenuItem({
        closeOnClick,
        disabled,
        highlighted,
        id,
        store,
        nativeButton,
        nodeId: menuPositionerContext?.context.nodeId,
        itemMetadata: REGULAR_ITEM
    });
    const state = __TURBOPACK__imported__module__51268__89["useMemo"](()=>({
            disabled,
            highlighted,
            checked
        }), [
        disabled,
        highlighted,
        checked
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__32787__16["useStableCallback"])((event)=>{
        const details = {
            ...createChangeEventDetails(__TURBOPACK__imported__module__54906__.itemPress, event.nativeEvent),
            preventUnmountOnClose: ()=>{}
        };
        onCheckedChange?.(!checked, details);
        if (details.isCanceled) {
            return;
        }
        setChecked((currentlyChecked)=>!currentlyChecked);
    });
    const element = (0, __TURBOPACK__imported__module__19996__16["useRenderElement"])('div', componentProps, {
        state,
        stateAttributesMapping: itemMapping,
        props: [
            itemProps,
            {
                role: 'menuitemcheckbox',
                'aria-checked': checked,
                onClick: handleClick
            },
            elementProps,
            getItemProps
        ],
        ref: [
            itemRef,
            forwardedRef,
            listItem.ref
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__35["jsx"])(MenuCheckboxItemContext.Provider, {
        value: state,
        children: element
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/checkbox-item-indicator/MenuCheckboxItemIndicator.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__45 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__95 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__17 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
;
;
const MenuCheckboxItemIndicator = /*#__PURE__*/ __TURBOPACK__imported__module__51268__95["forwardRef"](function MenuCheckboxItemIndicator(componentProps, forwardedRef) {
    const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
    const item = useMenuCheckboxItemContext();
    const indicatorRef = __TURBOPACK__imported__module__51268__95["useRef"](null);
    const { transitionStatus, setMounted } = useTransitionStatus(item.checked);
    useOpenChangeComplete({
        open: item.checked,
        ref: indicatorRef,
        onComplete () {
            if (!item.checked) {
                setMounted(false);
            }
        }
    });
    const state = {
        checked: item.checked,
        disabled: item.disabled,
        highlighted: item.highlighted,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__19996__17["useRenderElement"])('span', componentProps, {
        state,
        ref: [
            forwardedRef,
            indicatorRef
        ],
        stateAttributesMapping: itemMapping,
        props: {
            'aria-hidden': true,
            ...elementProps
        },
        enabled: keepMounted || item.checked
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/group/MenuGroup.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__46 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__96 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__18 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/group/MenuGroupContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__47 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__11 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__97 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const MenuGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__97["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenuGroupRootContext() {
    const context = __TURBOPACK__imported__module__51268__97["useContext"](MenuGroupContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__11["default"])(31));
    }
    return context;
}
var __TURBOPACK__imported__module__8063__36 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
const MenuGroup = /*#__PURE__*/ __TURBOPACK__imported__module__51268__96["forwardRef"](function MenuGroup(componentProps, forwardedRef) {
    const { render, className, style, ...elementProps } = componentProps;
    const [labelId, setLabelId] = __TURBOPACK__imported__module__51268__96["useState"](undefined);
    const context = __TURBOPACK__imported__module__51268__96["useMemo"](()=>({
            setLabelId
        }), [
        setLabelId
    ]);
    const element = (0, __TURBOPACK__imported__module__19996__18["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        props: {
            role: 'group',
            'aria-labelledby': labelId,
            ...elementProps
        }
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__36["jsx"])(MenuGroupContext.Provider, {
        value: context,
        children: element
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/group-label/MenuGroupLabel.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__48 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__98 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__19 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__19996__19 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
;
const MenuGroupLabel = /*#__PURE__*/ __TURBOPACK__imported__module__51268__98["forwardRef"](function MenuGroupLabelComponent(componentProps, forwardedRef) {
    const { className, render, id: idProp, style, ...elementProps } = componentProps;
    const id = useBaseUiId(idProp);
    const { setLabelId } = useMenuGroupRootContext();
    (0, __TURBOPACK__imported__module__91900__19["useIsoLayoutEffect"])(()=>{
        setLabelId(id);
        return ()=>{
            setLabelId(undefined);
        };
    }, [
        setLabelId,
        id
    ]);
    return (0, __TURBOPACK__imported__module__19996__19["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        props: {
            id,
            role: 'presentation',
            ...elementProps
        }
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/item/MenuItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__49 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__99 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__20 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
;
;
;
const MenuItem = /*#__PURE__*/ __TURBOPACK__imported__module__51268__99["forwardRef"](function MenuItem(componentProps, forwardedRef) {
    const { render, className, id: idProp, label, nativeButton = false, disabled = false, closeOnClick = true, style, ...elementProps } = componentProps;
    const listItem = useCompositeListItem({
        label
    });
    const menuPositionerContext = useMenuPositionerContext(true);
    const id = useBaseUiId(idProp);
    const { store } = useMenuRootContext();
    const highlighted = store.useState('isActive', listItem.index);
    const itemProps = store.useState('itemProps');
    const { getItemProps, itemRef } = useMenuItem({
        closeOnClick,
        disabled,
        highlighted,
        id,
        store,
        nativeButton,
        nodeId: menuPositionerContext?.context.nodeId,
        itemMetadata: REGULAR_ITEM
    });
    const state = {
        disabled,
        highlighted
    };
    return (0, __TURBOPACK__imported__module__19996__20["useRenderElement"])('div', componentProps, {
        state,
        props: [
            itemProps,
            elementProps,
            getItemProps
        ],
        ref: [
            itemRef,
            forwardedRef,
            listItem.ref
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/link-item/MenuLinkItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__50 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__100 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__21 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__81833__3 = __TURBOPACK__imported__module__81833__;
var __TURBOPACK__imported__module__84028__3 = __TURBOPACK__imported__module__84028__;
'use client';
;
;
;
;
;
;
;
;
;
const MenuLinkItem = /*#__PURE__*/ __TURBOPACK__imported__module__51268__100["forwardRef"](function MenuLinkItem(componentProps, forwardedRef) {
    const { render, className, id: idProp, label, closeOnClick = false, style, ...elementProps } = componentProps;
    const linkRef = __TURBOPACK__imported__module__51268__100["useRef"](null);
    const listItem = useCompositeListItem({
        label
    });
    const menuPositionerContext = useMenuPositionerContext(true);
    const nodeId = menuPositionerContext?.context.nodeId;
    const id = useBaseUiId(idProp);
    const { store } = useMenuRootContext();
    const highlighted = store.useState('isActive', listItem.index);
    const itemProps = store.useState('itemProps');
    const typingRef = store.context.typingRef;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__81833__3["useButton"])({
        native: false,
        composite: true
    });
    const commonProps = useMenuItemCommonProps({
        closeOnClick,
        highlighted,
        id,
        nodeId,
        store,
        typingRef,
        itemRef: linkRef
    });
    function getItemProps(externalProps) {
        return (0, __TURBOPACK__imported__module__84028__3["mergeProps"])(commonProps, externalProps, getButtonProps);
    }
    const state = __TURBOPACK__imported__module__51268__100["useMemo"](()=>({
            highlighted
        }), [
        highlighted
    ]);
    return (0, __TURBOPACK__imported__module__19996__21["useRenderElement"])('a', componentProps, {
        state,
        props: [
            itemProps,
            elementProps,
            getItemProps
        ],
        ref: [
            linkRef,
            buttonRef,
            forwardedRef,
            listItem.ref
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/popup/MenuPopup.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__51 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__101 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverFloatingInteraction.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__102 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__92615__14 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__32787__17 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__20 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverInteractionSharedState.js [app-client] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__67452__9 = __TURBOPACK__imported__module__67452__;
'use client';
;
;
;
;
;
class HoverInteraction {
    constructor(){
        this.pointerType = undefined;
        this.interactedInside = false;
        this.handler = undefined;
        this.blockMouseMove = true;
        this.performedPointerEventsMutation = false;
        this.pointerEventsScopeElement = null;
        this.pointerEventsReferenceElement = null;
        this.pointerEventsFloatingElement = null;
        this.restTimeoutPending = false;
        this.openChangeTimeout = new Timeout();
        this.restTimeout = new Timeout();
        this.handleCloseOptions = undefined;
    }
    static create() {
        return new HoverInteraction();
    }
    dispose = ()=>{
        this.openChangeTimeout.clear();
        this.restTimeout.clear();
    };
    disposeEffect = ()=>{
        return this.dispose;
    };
}
const pointerEventsMutationOwnerByScopeElement = new WeakMap();
function clearSafePolygonPointerEventsMutation(instance) {
    if (!instance.performedPointerEventsMutation) {
        return;
    }
    const scopeElement = instance.pointerEventsScopeElement;
    if (scopeElement && pointerEventsMutationOwnerByScopeElement.get(scopeElement) === instance) {
        instance.pointerEventsScopeElement?.style.removeProperty('pointer-events');
        instance.pointerEventsReferenceElement?.style.removeProperty('pointer-events');
        instance.pointerEventsFloatingElement?.style.removeProperty('pointer-events');
        pointerEventsMutationOwnerByScopeElement.delete(scopeElement);
    }
    instance.performedPointerEventsMutation = false;
    instance.pointerEventsScopeElement = null;
    instance.pointerEventsReferenceElement = null;
    instance.pointerEventsFloatingElement = null;
}
function applySafePolygonPointerEventsMutation(instance, options) {
    const { scopeElement, referenceElement, floatingElement } = options;
    const existingOwner = pointerEventsMutationOwnerByScopeElement.get(scopeElement);
    if (existingOwner && existingOwner !== instance) {
        clearSafePolygonPointerEventsMutation(existingOwner);
    }
    clearSafePolygonPointerEventsMutation(instance);
    instance.performedPointerEventsMutation = true;
    instance.pointerEventsScopeElement = scopeElement;
    instance.pointerEventsReferenceElement = referenceElement;
    instance.pointerEventsFloatingElement = floatingElement;
    pointerEventsMutationOwnerByScopeElement.set(scopeElement, instance);
    scopeElement.style.pointerEvents = 'none';
    referenceElement.style.pointerEvents = 'auto';
    floatingElement.style.pointerEvents = 'auto';
}
function useHoverInteractionSharedState(store) {
    const instance = (0, __TURBOPACK__imported__module__67452__9["useRefWithInit"])(HoverInteraction.create).current;
    const data = store.context.dataRef.current;
    if (!data.hoverInteractionState) {
        data.hoverInteractionState = instance;
    }
    useOnMount(data.hoverInteractionState.disposeEffect);
    return data.hoverInteractionState;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverShared.js [app-client] (ecmascript)
;
;
function resolveValue(value1, pointerType) {
    if (pointerType != null && !isMouseLikePointerType(pointerType)) {
        return 0;
    }
    if (typeof value1 === 'function') {
        return value1();
    }
    return value1;
}
function getDelay(value1, prop, pointerType) {
    const result = resolveValue(value1, pointerType);
    if (typeof result === 'number') {
        return result;
    }
    return result?.[prop];
}
function getRestMs(value1) {
    if (typeof value1 === 'function') {
        return value1();
    }
    return value1;
}
function isClickLikeOpenEvent(openEventType, interactedInside) {
    return interactedInside || openEventType === 'click' || openEventType === 'mousedown';
}
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function useHoverFloatingInteraction(context, parameters = {}) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const floatingElement = store.useState('floatingElement');
    const domReferenceElement = store.useState('domReferenceElement');
    const { dataRef } = store.context;
    const { enabled = true, closeDelay: closeDelayProp = 0, nodeId: nodeIdProp } = parameters;
    const instance = useHoverInteractionSharedState(store);
    const tree = useFloatingTree();
    const parentId = useFloatingParentNodeId();
    const isClickLikeOpenEvent1 = (0, __TURBOPACK__imported__module__32787__17["useStableCallback"])(()=>{
        return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
    });
    const isHoverOpen = (0, __TURBOPACK__imported__module__32787__17["useStableCallback"])(()=>{
        const type = dataRef.current.openEvent?.type;
        return type?.includes('mouse') && type !== 'mousedown';
    });
    const isRelatedTargetInsideEnabledTrigger = (0, __TURBOPACK__imported__module__32787__17["useStableCallback"])((target)=>{
        return isTargetInsideEnabledTrigger(target, store.context.triggerElements);
    });
    const closeWithDelay = __TURBOPACK__imported__module__51268__102["useCallback"]((event)=>{
        const closeDelay = getDelay(closeDelayProp, 'close', instance.pointerType);
        const close = ()=>{
            store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerHover, event));
            tree?.events.emit('floating.closed', event);
        };
        if (closeDelay) {
            instance.openChangeTimeout.start(closeDelay, close);
        } else {
            instance.openChangeTimeout.clear();
            close();
        }
    }, [
        closeDelayProp,
        store,
        instance,
        tree
    ]);
    const clearPointerEvents = (0, __TURBOPACK__imported__module__32787__17["useStableCallback"])(()=>{
        clearSafePolygonPointerEventsMutation(instance);
    });
    const handleInteractInside = (0, __TURBOPACK__imported__module__32787__17["useStableCallback"])((event)=>{
        const target = getTarget(event);
        if (!isInteractiveElement(target)) {
            instance.interactedInside = false;
            return;
        }
        instance.interactedInside = target?.closest('[aria-haspopup]') != null;
    });
    (0, __TURBOPACK__imported__module__91900__20["useIsoLayoutEffect"])(()=>{
        if (!open) {
            instance.pointerType = undefined;
            instance.restTimeoutPending = false;
            instance.interactedInside = false;
            clearPointerEvents();
        }
    }, [
        open,
        instance,
        clearPointerEvents
    ]);
    __TURBOPACK__imported__module__51268__102["useEffect"](()=>{
        return clearPointerEvents;
    }, [
        clearPointerEvents
    ]);
    (0, __TURBOPACK__imported__module__91900__20["useIsoLayoutEffect"])(()=>{
        if (!enabled) {
            return undefined;
        }
        if (open && instance.handleCloseOptions?.blockPointerEvents && isHoverOpen() && (0, __TURBOPACK__imported__module__92615__14["isElement"])(domReferenceElement) && floatingElement) {
            const ref = domReferenceElement;
            const floatingEl = floatingElement;
            const doc = ownerDocument(floatingElement);
            const parentFloating = tree?.nodesRef.current.find((node)=>node.id === parentId)?.context?.elements.floating;
            if (parentFloating) {
                parentFloating.style.pointerEvents = '';
            }
            const scopeElement = instance.handleCloseOptions?.getScope?.() ?? instance.pointerEventsScopeElement ?? parentFloating ?? ref.closest('[data-rootownerid]') ?? doc.body;
            applySafePolygonPointerEventsMutation(instance, {
                scopeElement,
                referenceElement: ref,
                floatingElement: floatingEl
            });
            return ()=>{
                clearPointerEvents();
            };
        }
        return undefined;
    }, [
        enabled,
        open,
        domReferenceElement,
        floatingElement,
        instance,
        isHoverOpen,
        tree,
        parentId,
        clearPointerEvents
    ]);
    const childClosedTimeout = useTimeout();
    __TURBOPACK__imported__module__51268__102["useEffect"](()=>{
        if (!enabled) {
            return undefined;
        }
        function onFloatingMouseEnter() {
            instance.openChangeTimeout.clear();
            childClosedTimeout.clear();
            tree?.events.off('floating.closed', onNodeClosed);
            clearPointerEvents();
        }
        function onFloatingMouseLeave(event) {
            if (tree && parentId && getNodeChildren(tree.nodesRef.current, parentId).length > 0) {
                tree.events.on('floating.closed', onNodeClosed);
                return;
            }
            if (isRelatedTargetInsideEnabledTrigger(event.relatedTarget)) {
                // If the mouse is leaving the reference element to another trigger, don't explicitly close the popup
                // as it will be moved.
                return;
            }
            const currentNodeId = dataRef.current.floatingContext?.nodeId ?? nodeIdProp;
            const relatedTarget = event.relatedTarget;
            const isMovingIntoDescendantFloating = tree && currentNodeId && (0, __TURBOPACK__imported__module__92615__14["isElement"])(relatedTarget) && getNodeChildren(tree.nodesRef.current, currentNodeId, false).some((node)=>contains(node.context?.elements.floating, relatedTarget));
            if (isMovingIntoDescendantFloating) {
                return;
            }
            // If the safePolygon handler is active, let it handle the close logic.
            if (instance.handler) {
                instance.handler(event);
                return;
            }
            clearPointerEvents();
            if (!isClickLikeOpenEvent1()) {
                closeWithDelay(event);
            }
        }
        function onNodeClosed(event) {
            if (!tree || !parentId || getNodeChildren(tree.nodesRef.current, parentId).length > 0) {
                return;
            }
            // Allow the mouseenter event to fire in case child was closed because mouse moved into parent.
            childClosedTimeout.start(0, ()=>{
                tree.events.off('floating.closed', onNodeClosed);
                store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerHover, event));
                tree.events.emit('floating.closed', event);
            });
        }
        const floating = floatingElement;
        return mergeCleanups(floating && addEventListener(floating, 'mouseenter', onFloatingMouseEnter), floating && addEventListener(floating, 'mouseleave', onFloatingMouseLeave), floating && addEventListener(floating, 'pointerdown', handleInteractInside, true), ()=>{
            tree?.events.off('floating.closed', onNodeClosed);
        });
    }, [
        enabled,
        floatingElement,
        store,
        dataRef,
        nodeIdProp,
        isClickLikeOpenEvent1,
        isRelatedTargetInsideEnabledTrigger,
        closeWithDelay,
        clearPointerEvents,
        handleInteractInside,
        instance,
        tree,
        parentId,
        childClosedTimeout
    ]);
}
var __TURBOPACK__imported__module__19996__22 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/toolbar/root/ToolbarRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__52 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__12 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__103 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const ToolbarRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__103["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useToolbarRootContext(optional) {
    const context = __TURBOPACK__imported__module__51268__103["useContext"](ToolbarRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__12["default"])(69));
    }
    return context;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/getDisabledMountTransitionStyles.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__24659__13 = __TURBOPACK__imported__module__24659__;
;
;
function getDisabledMountTransitionStyles(transitionStatus) {
    return transitionStatus === 'starting' ? DISABLED_TRANSITIONS_STYLE : __TURBOPACK__imported__module__24659__13["EMPTY_OBJECT"];
}
var __TURBOPACK__imported__module__8063__37 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const stateAttributesMapping5 = {
    ...popupStateMapping,
    ...transitionStatusMapping
};
const MenuPopup = /*#__PURE__*/ __TURBOPACK__imported__module__51268__101["forwardRef"](function MenuPopup(componentProps, forwardedRef) {
    const { render, className, style, finalFocus, ...elementProps } = componentProps;
    const { store } = useMenuRootContext();
    const { side, align } = useMenuPositionerContext();
    const insideToolbar = useToolbarRootContext(true) != null;
    const open = store.useState('open');
    const transitionStatus = store.useState('transitionStatus');
    const popupProps = store.useState('popupProps');
    const mounted = store.useState('mounted');
    const instantType = store.useState('instantType');
    const triggerElement = store.useState('activeTriggerElement');
    const parent = store.useState('parent');
    const lastOpenChangeReason = store.useState('lastOpenChangeReason');
    const rootId = store.useState('rootId');
    const floatingContext = store.useState('floatingRootContext');
    const floatingTreeRoot = store.useState('floatingTreeRoot');
    const closeDelay = store.useState('closeDelay');
    const activeTriggerElement = store.useState('activeTriggerElement');
    const isContextMenu = parent.type === 'context-menu';
    useOpenChangeComplete({
        open,
        ref: store.context.popupRef,
        onComplete () {
            if (open) {
                store.context.onOpenChangeComplete?.(true);
            }
        }
    });
    __TURBOPACK__imported__module__51268__101["useEffect"](()=>{
        function handleClose(event) {
            store.setOpen(false, createChangeEventDetails(event.reason, event.domEvent));
        }
        floatingTreeRoot.events.on('close', handleClose);
        return ()=>{
            floatingTreeRoot.events.off('close', handleClose);
        };
    }, [
        floatingTreeRoot.events,
        store
    ]);
    const hoverEnabled = store.useState('hoverEnabled');
    const disabled = store.useState('disabled');
    useHoverFloatingInteraction(floatingContext, {
        enabled: hoverEnabled && !disabled && !isContextMenu && parent.type !== 'menubar',
        closeDelay
    });
    const state = {
        transitionStatus,
        side,
        align,
        open,
        nested: parent.type === 'menu',
        instant: instantType
    };
    const setPopupElement = __TURBOPACK__imported__module__51268__101["useCallback"]((element)=>{
        store.set('popupElement', element);
    }, [
        store
    ]);
    const element = (0, __TURBOPACK__imported__module__19996__22["useRenderElement"])('div', componentProps, {
        state,
        ref: [
            forwardedRef,
            store.context.popupRef,
            setPopupElement
        ],
        stateAttributesMapping: stateAttributesMapping5,
        props: [
            popupProps,
            {
                onKeyDown (event) {
                    if (insideToolbar && COMPOSITE_KEYS.has(event.key)) {
                        event.stopPropagation();
                    }
                }
            },
            getDisabledMountTransitionStyles(transitionStatus),
            elementProps,
            {
                'data-rootownerid': rootId
            }
        ]
    });
    let returnFocus = parent.type === undefined || isContextMenu;
    if (triggerElement || parent.type === 'menubar' && lastOpenChangeReason !== __TURBOPACK__imported__module__54906__.outsidePress) {
        returnFocus = true;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__37["jsx"])(FloatingFocusManager, {
        context: floatingContext,
        modal: isContextMenu,
        disabled: !mounted,
        returnFocus: finalFocus === undefined ? returnFocus : finalFocus,
        initialFocus: parent.type !== 'menu',
        restoreFocus: true,
        externalTree: parent.type !== 'menubar' ? floatingTreeRoot : undefined,
        previousFocusableElement: activeTriggerElement,
        nextFocusableElement: parent.type === undefined ? store.context.triggerFocusTargetRef : undefined,
        beforeContentFocusGuardRef: parent.type === undefined ? store.context.beforeContentFocusGuardRef : undefined,
        children: element
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/portal/MenuPortal.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__53 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__104 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/portal/MenuPortalContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__54 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__13 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__105 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const MenuPortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__105["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenuPortalContext() {
    const value1 = __TURBOPACK__imported__module__51268__105["useContext"](MenuPortalContext);
    if (value1 === undefined) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__13["default"])(32));
    }
    return value1;
}
var __TURBOPACK__imported__module__8063__38 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
const MenuPortal = /*#__PURE__*/ __TURBOPACK__imported__module__51268__104["forwardRef"](function MenuPortal(props, forwardedRef) {
    const { keepMounted = false, ...portalProps } = props;
    const { store } = useMenuRootContext();
    const mounted = store.useState('mounted');
    const shouldRender = mounted || keepMounted;
    if (!shouldRender) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__38["jsx"])(MenuPortalContext.Provider, {
        value: keepMounted,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__38["jsx"])(FloatingPortal, {
            ref: forwardedRef,
            ...portalProps
        })
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/positioner/MenuPositioner.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__55 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__106 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__21 = __TURBOPACK__imported__module__91900__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__107 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__92615__2 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__91900__22 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__18 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>
;
// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>
;
;
;
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = getSideAxis(placement);
    const alignmentAxis = getAlignmentAxis(placement);
    const alignLength = getAxisLength(alignmentAxis);
    const side = getSide(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch(getAlignment(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
        options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = evaluate(options, state);
    const paddingObject = getPaddingObject(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
// Maximum number of resets that can occur before bailing to avoid infinite reset loops.
const MAX_RESET_COUNT = 50;
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const platformWithDetectOverflow = platform.detectOverflow ? platform : {
        ...platform,
        detectOverflow
    };
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let resetCount = 0;
    const middlewareData = {};
    for(let i = 0; i < middleware.length; i++){
        const currentMiddleware = middleware[i];
        if (!currentMiddleware) {
            continue;
        }
        const { name, fn } = currentMiddleware;
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform: platformWithDetectOverflow,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData[name] = {
            ...middlewareData[name],
            ...data
        };
        if (reset && resetCount < MAX_RESET_COUNT) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) {
                    statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                    rects = reset.rects === true ? await platform.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                }
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = evaluate(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = getPaddingObject(padding);
            const coords = {
                x,
                y
            };
            const axis = getAlignmentAxis(placement);
            const length = getAxisLength(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = min(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max1 = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = clamp(min$1, center, max1);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max1 : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>getAlignment(placement) === alignment),
        ...allowedPlacements.filter((placement)=>getAlignment(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>getSide(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) {
            return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
        }
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = placements, autoAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === placements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) {
                return {};
            }
            const alignmentSides = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) {
                return {
                    reset: {
                        placement: placements$1[0]
                    }
                };
            }
            const currentOverflows = [
                overflow[getSide(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
            }
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = getAlignment(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                getAlignment(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = evaluate(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            const side = getSide(placement);
            const initialSideAxis = getSideAxis(initialPlacement);
            const isBasePlacement = getSide(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                getOppositePlacement(initialPlacement)
            ] : getExpandedPlacements(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements1 = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
                overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
                const sides1 = getAlignmentSides(placement, rects, rtl);
                overflows.push(overflow[sides1[0]], overflow[sides1[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements1[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== getSideAxis(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>getSideAxis(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                        // Try next placement and re-run the lifecycle.
                        return {
                            data: {
                                index: nextIndex,
                                overflows: overflowsData
                            },
                            reset: {
                                placement: nextPlacement
                            }
                        };
                    }
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) {
                    switch(fallbackStrategy){
                        case 'bestFit':
                            {
                                var _overflowsData$filter2;
                                const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                    if (hasFallbackAxisSideDirection) {
                                        const currentSideAxis = getSideAxis(d.placement);
                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                        // reading directions favoring greater width.
                                        currentSideAxis === 'y';
                                    }
                                    return true;
                                }).map((d)=>[
                                        d.placement,
                                        d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                    ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                                if (placement) {
                                    resetPlacement = placement;
                                }
                                break;
                            }
                        case 'initialPlacement':
                            resetPlacement = initialPlacement;
                            break;
                    }
                }
                if (placement !== resetPlacement) {
                    return {
                        reset: {
                            placement: resetPlacement
                        }
                    };
                }
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return sides.some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects, platform } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = evaluate(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await platform.detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await platform.detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    {
                        return {};
                    }
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = min(...rects.map((rect)=>rect.left));
    const minY = min(...rects.map((rect)=>rect.top));
    const maxX = max(...rects.map((rect)=>rect.right));
    const maxY = max(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
            groups.push([
                rect
            ]);
        } else {
            groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
    }
    return groups.map((rect)=>rectToClientRect(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = evaluate(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
            const paddingObject = getPaddingObject(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    // Find the first rect in which the point is fully inside.
                    return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                }
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if (getSideAxis(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = getSide(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = getSide(placement) === 'left';
                    const maxRight = max(...clientRects.map((rect)=>rect.right));
                    const minLeft = min(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
                return {
                    reset: {
                        rects: resetRects
                    }
                };
            }
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getSideAxis(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement, platform } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = evaluate(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const crossAxis = getSideAxis(getSide(placement));
            const mainAxis = getOppositeAxis(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min1 = mainAxisCoord + overflow[minSide];
                const max1 = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = clamp(min1, mainAxisCoord, max1);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min1 = crossAxisCoord + overflow[minSide];
                const max1 = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = clamp(min1, crossAxisCoord, max1);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = evaluate(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = getSideAxis(placement);
            const mainAxis = getOppositeAxis(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = evaluate(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) {
                    mainAxisCoord = limitMin;
                } else if (mainAxisCoord > limitMax) {
                    mainAxisCoord = limitMax;
                }
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has(getSide(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) {
                    crossAxisCoord = limitMin;
                } else if (crossAxisCoord > limitMax) {
                    crossAxisCoord = limitMax;
                }
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = evaluate(options, state);
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const side = getSide(placement);
            const alignment = getAlignment(placement);
            const isYAxis = getSideAxis(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = min(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = min(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
                availableWidth = maximumClippingWidth;
            }
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
                availableHeight = maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = max(overflow.left, 0);
                const xMax = max(overflow.right, 0);
                const yMin = max(overflow.top, 0);
                const yMax = max(overflow.bottom, 0);
                if (isYAxis) {
                    availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
                } else {
                    availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
                }
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) {
                return {
                    reset: {
                        rects: true
                    }
                };
            }
            return {};
        }
    };
};
;
var __TURBOPACK__imported__module__92615__15 = __TURBOPACK__imported__module__92615__1;
;
;
;
;
function getCssDimensions(element) {
    const css = (0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__92615__15["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, __TURBOPACK__imported__module__92615__15["isElement"])(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, __TURBOPACK__imported__module__92615__15["isHTMLElement"])(domElement)) {
        return createCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ createCoords(0);
function getVisualOffsets(element) {
    const win = (0, __TURBOPACK__imported__module__92615__15["getWindow"])(element);
    if (!(0, __TURBOPACK__imported__module__92615__15["isWebKit"])() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, __TURBOPACK__imported__module__92615__15["getWindow"])(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createCoords(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, __TURBOPACK__imported__module__92615__15["isElement"])(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : createCoords(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, __TURBOPACK__imported__module__92615__15["getWindow"])(domElement);
        const offsetWin = offsetParent && (0, __TURBOPACK__imported__module__92615__15["isElement"])(offsetParent) ? (0, __TURBOPACK__imported__module__92615__15["getWindow"])(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, __TURBOPACK__imported__module__92615__15["getFrameElement"])(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, __TURBOPACK__imported__module__92615__15["getWindow"])(currentIFrame);
            currentIFrame = (0, __TURBOPACK__imported__module__92615__15["getFrameElement"])(currentWin);
        }
    }
    return rectToClientRect({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, __TURBOPACK__imported__module__92615__15["getNodeScroll"])(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect((0, __TURBOPACK__imported__module__92615__15["getDocumentElement"])(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, __TURBOPACK__imported__module__92615__15["getDocumentElement"])(offsetParent);
    const topLayer = elements ? (0, __TURBOPACK__imported__module__92615__15["isTopLayer"])(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = createCoords(1);
    const offsets = createCoords(0);
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__92615__15["isHTMLElement"])(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__92615__15["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__92615__15["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__92615__15["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, __TURBOPACK__imported__module__92615__15["getDocumentElement"])(element);
    const scroll = (0, __TURBOPACK__imported__module__92615__15["getNodeScroll"])(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(body).direction === 'rtl') {
        x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, __TURBOPACK__imported__module__92615__15["getWindow"])(element);
    const html = (0, __TURBOPACK__imported__module__92615__15["getDocumentElement"])(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, __TURBOPACK__imported__module__92615__15["isWebKit"])();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
            width -= clippingStableScrollbarWidth;
        }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
        // If the <body> scrollbar is on the left, the width needs to be extended
        // by the scrollbar amount so there isn't extra space on the right.
        width += windowScrollbarX;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, __TURBOPACK__imported__module__92615__15["isHTMLElement"])(element) ? getScale(element) : createCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
        rect = getDocumentRect((0, __TURBOPACK__imported__module__92615__15["getDocumentElement"])(element));
    } else if ((0, __TURBOPACK__imported__module__92615__15["isElement"])(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return rectToClientRect(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, __TURBOPACK__imported__module__92615__15["getParentNode"])(element);
    if (parentNode === stopNode || !(0, __TURBOPACK__imported__module__92615__15["isElement"])(parentNode) || (0, __TURBOPACK__imported__module__92615__15["isLastTraversableNode"])(parentNode)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = (0, __TURBOPACK__imported__module__92615__15["getOverflowAncestors"])(element, [], false).filter((el)=>(0, __TURBOPACK__imported__module__92615__15["isElement"])(el) && (0, __TURBOPACK__imported__module__92615__15["getNodeName"])(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, __TURBOPACK__imported__module__92615__15["getParentNode"])(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, __TURBOPACK__imported__module__92615__15["isElement"])(currentNode) && !(0, __TURBOPACK__imported__module__92615__15["isLastTraversableNode"])(currentNode)){
        const computedStyle = (0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(currentNode);
        const currentNodeIsContaining = (0, __TURBOPACK__imported__module__92615__15["isContainingBlock"])(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === 'absolute' || currentContainingBlockComputedStyle.position === 'fixed') || (0, __TURBOPACK__imported__module__92615__15["isOverflowElement"])(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter((ancestor)=>ancestor !== currentNode);
        } else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = (0, __TURBOPACK__imported__module__92615__15["getParentNode"])(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, __TURBOPACK__imported__module__92615__15["isTopLayer"])(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
    let top = firstRect.top;
    let right = firstRect.right;
    let bottom = firstRect.bottom;
    let left = firstRect.left;
    for(let i = 1; i < clippingAncestors.length; i++){
        const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
        top = max(rect.top, top);
        right = min(rect.right, right);
        bottom = min(rect.bottom, bottom);
        left = max(rect.left, left);
    }
    return {
        width: right - left,
        height: bottom - top,
        x: left,
        y: top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__92615__15["isHTMLElement"])(offsetParent);
    const documentElement = (0, __TURBOPACK__imported__module__92615__15["getDocumentElement"])(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = createCoords(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__92615__15["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__92615__15["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__92615__15["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : createCoords(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, __TURBOPACK__imported__module__92615__15["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, __TURBOPACK__imported__module__92615__15["getDocumentElement"])(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, __TURBOPACK__imported__module__92615__15["getWindow"])(element);
    if ((0, __TURBOPACK__imported__module__92615__15["isTopLayer"])(element)) {
        return win;
    }
    if (!(0, __TURBOPACK__imported__module__92615__15["isHTMLElement"])(element)) {
        let svgOffsetParent = (0, __TURBOPACK__imported__module__92615__15["getParentNode"])(element);
        while(svgOffsetParent && !(0, __TURBOPACK__imported__module__92615__15["isLastTraversableNode"])(svgOffsetParent)){
            if ((0, __TURBOPACK__imported__module__92615__15["isElement"])(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = (0, __TURBOPACK__imported__module__92615__15["getParentNode"])(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, __TURBOPACK__imported__module__92615__15["isTableElement"])(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (0, __TURBOPACK__imported__module__92615__15["isLastTraversableNode"])(offsetParent) && isStaticPositioned(offsetParent) && !(0, __TURBOPACK__imported__module__92615__15["isContainingBlock"])(offsetParent)) {
        return win;
    }
    return offsetParent || (0, __TURBOPACK__imported__module__92615__15["getContainingBlock"])(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, __TURBOPACK__imported__module__92615__15["getComputedStyle"])(element).direction === 'rtl';
}
const platform1 = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: __TURBOPACK__imported__module__92615__15["getDocumentElement"],
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: __TURBOPACK__imported__module__92615__15["isElement"],
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, __TURBOPACK__imported__module__92615__15["getDocumentElement"])(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = floor(top);
        const insetRight = floor(root.clientWidth - (left + width));
        const insetBottom = floor(root.clientHeight - (top + height));
        const insetLeft = floor(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: max(0, min(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(()=>{
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, __TURBOPACK__imported__module__92615__15["getOverflowAncestors"])(referenceEl) : [],
        ...floating ? (0, __TURBOPACK__imported__module__92615__15["getOverflowAncestors"])(floating) : []
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        if (floating) {
            resizeObserver.observe(floating);
        }
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow1 = detectOverflow;
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset1 = offset;
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement1 = autoPlacement;
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift1 = shift;
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip1 = flip;
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size1 = size;
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide1 = hide;
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow1 = arrow;
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline1 = inline;
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift1 = limitShift;
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition1 = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform: platform1,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return computePosition(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};
;
// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+react-dom@2.1._f1e75c639f17217fdb8333873ebffdf9/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__51268__108 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__6 = __TURBOPACK__imported__module__98057__;
;
;
;
;
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__51268__108["useLayoutEffect"] : noop;
// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'function' && a.toString() === b.toString()) {
        return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if (typeof window === 'undefined') {
        return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
}
function roundByDPR(element, value1) {
    const dpr = getDPR(element);
    return Math.round(value1 * dpr) / dpr;
}
function useLatestRef(value1) {
    const ref = __TURBOPACK__imported__module__51268__108["useRef"](value1);
    index(()=>{
        ref.current = value1;
    });
    return ref;
}
/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
    const [data, setData] = __TURBOPACK__imported__module__51268__108["useState"]({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = __TURBOPACK__imported__module__51268__108["useState"](middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = __TURBOPACK__imported__module__51268__108["useState"](null);
    const [_floating, _setFloating] = __TURBOPACK__imported__module__51268__108["useState"](null);
    const setReference = __TURBOPACK__imported__module__51268__108["useCallback"]((node)=>{
        if (node !== referenceRef.current) {
            referenceRef.current = node;
            _setReference(node);
        }
    }, []);
    const setFloating = __TURBOPACK__imported__module__51268__108["useCallback"]((node)=>{
        if (node !== floatingRef.current) {
            floatingRef.current = node;
            _setFloating(node);
        }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = __TURBOPACK__imported__module__51268__108["useRef"](null);
    const floatingRef = __TURBOPACK__imported__module__51268__108["useRef"](null);
    const dataRef = __TURBOPACK__imported__module__51268__108["useRef"](data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform);
    const openRef = useLatestRef(open);
    const update = __TURBOPACK__imported__module__51268__108["useCallback"](()=>{
        if (!referenceRef.current || !floatingRef.current) {
            return;
        }
        const config = {
            placement,
            strategy,
            middleware: latestMiddleware
        };
        if (platformRef.current) {
            config.platform = platformRef.current;
        }
        computePosition1(referenceRef.current, floatingRef.current, config).then((data)=>{
            const fullData = {
                ...data,
                // The floating element's position may be recomputed while it's closed
                // but still mounted (such as when transitioning out). To ensure
                // `isPositioned` will be `false` initially on the next open, avoid
                // setting it to `true` when `open === false` (must be specified).
                isPositioned: openRef.current !== false
            };
            if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                dataRef.current = fullData;
                __TURBOPACK__imported__module__98057__6["flushSync"](()=>{
                    setData(fullData);
                });
            }
        });
    }, [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(()=>{
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data)=>({
                    ...data,
                    isPositioned: false
                }));
        }
    }, [
        open
    ]);
    const isMountedRef = __TURBOPACK__imported__module__51268__108["useRef"](false);
    index(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
        };
    }, []);
    index(()=>{
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    const refs = __TURBOPACK__imported__module__51268__108["useMemo"](()=>({
            reference: referenceRef,
            floating: floatingRef,
            setReference,
            setFloating
        }), [
        setReference,
        setFloating
    ]);
    const elements = __TURBOPACK__imported__module__51268__108["useMemo"](()=>({
            reference: referenceEl,
            floating: floatingEl
        }), [
        referenceEl,
        floatingEl
    ]);
    const floatingStyles = __TURBOPACK__imported__module__51268__108["useMemo"](()=>{
        const initialStyles = {
            position: strategy,
            left: 0,
            top: 0
        };
        if (!elements.floating) {
            return initialStyles;
        }
        const x = roundByDPR(elements.floating, data.x);
        const y = roundByDPR(elements.floating, data.y);
        if (transform) {
            return {
                ...initialStyles,
                transform: "translate(" + x + "px, " + y + "px)",
                ...getDPR(elements.floating) >= 1.5 && {
                    willChange: 'transform'
                }
            };
        }
        return {
            position: strategy,
            left: x,
            top: y
        };
    }, [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return __TURBOPACK__imported__module__51268__108["useMemo"](()=>({
            ...data,
            update,
            refs,
            elements,
            floatingStyles
        }), [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow$1 = (options)=>{
    function isRef(value1) {
        return ({}).hasOwnProperty.call(value1, 'current');
    }
    return {
        name: 'arrow',
        options,
        fn (state) {
            const { element, padding } = typeof options === 'function' ? options(state) : options;
            if (element && isRef(element)) {
                if (element.current != null) {
                    return arrow1({
                        element: element.current,
                        padding
                    }).fn(state);
                }
                return {};
            }
            if (element) {
                return arrow1({
                    element,
                    padding
                }).fn(state);
            }
            return {};
        }
    };
};
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset2 = (options, deps)=>{
    const result = offset1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift2 = (options, deps)=>{
    const result = shift1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift2 = (options, deps)=>{
    const result = limitShift1(options);
    return {
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip2 = (options, deps)=>{
    const result = flip1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size2 = (options, deps)=>{
    const result = size1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement2 = (options, deps)=>{
    const result = autoPlacement1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide2 = (options, deps)=>{
    const result = hide1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline2 = (options, deps)=>{
    const result = inline1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow2 = (options, deps)=>{
    const result = arrow$1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloating.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__109 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__92615__16 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__91900__23 = __TURBOPACK__imported__module__91900__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloatingRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__56 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__92615__17 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__67452__10 = __TURBOPACK__imported__module__67452__;
var __TURBOPACK__imported__module__91900__24 = __TURBOPACK__imported__module__91900__;
'use client';
;
;
;
;
;
;
;
function useFloatingRootContext(options) {
    const { open = false, onOpenChange, elements = {} } = options;
    const floatingId = useId1();
    const nested = useFloatingParentNodeId() != null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const store = (0, __TURBOPACK__imported__module__67452__10["useRefWithInit"])(()=>new FloatingRootStore({
            open,
            transitionStatus: undefined,
            onOpenChange,
            referenceElement: elements.reference ?? null,
            floatingElement: elements.floating ?? null,
            triggerElements: new PopupTriggerMap(),
            floatingId,
            syncOnly: false,
            nested
        })).current;
    (0, __TURBOPACK__imported__module__91900__24["useIsoLayoutEffect"])(()=>{
        const valuesToSync = {
            open,
            floatingId
        };
        // Only sync elements that are defined to avoid overwriting existing ones
        if (elements.reference !== undefined) {
            valuesToSync.referenceElement = elements.reference;
            valuesToSync.domReferenceElement = (0, __TURBOPACK__imported__module__92615__17["isElement"])(elements.reference) ? elements.reference : null;
        }
        if (elements.floating !== undefined) {
            valuesToSync.floatingElement = elements.floating;
        }
        store.update(valuesToSync);
    }, [
        open,
        floatingId,
        elements.reference,
        elements.floating,
        store
    ]);
    store.context.onOpenChange = onOpenChange;
    store.context.nested = nested;
    return store;
}
'use client';
;
;
;
;
;
;
function useFloating1(options = {}) {
    const { nodeId, externalTree } = options;
    const internalRootStore = useFloatingRootContext(options);
    const rootContext = options.rootContext || internalRootStore;
    const rootContextElements = {
        reference: rootContext.useState('referenceElement'),
        floating: rootContext.useState('floatingElement'),
        domReference: rootContext.useState('domReferenceElement')
    };
    const [positionReference, setPositionReferenceRaw] = __TURBOPACK__imported__module__51268__109["useState"](null);
    const domReferenceRef = __TURBOPACK__imported__module__51268__109["useRef"](null);
    const tree = useFloatingTree(externalTree);
    (0, __TURBOPACK__imported__module__91900__23["useIsoLayoutEffect"])(()=>{
        if (rootContextElements.domReference) {
            domReferenceRef.current = rootContextElements.domReference;
        }
    }, [
        rootContextElements.domReference
    ]);
    const position = useFloating({
        ...options,
        elements: {
            ...rootContextElements,
            ...positionReference && {
                reference: positionReference
            }
        }
    });
    const setPositionReference = __TURBOPACK__imported__module__51268__109["useCallback"]((node)=>{
        const computedPositionReference = (0, __TURBOPACK__imported__module__92615__16["isElement"])(node) ? {
            getBoundingClientRect: ()=>node.getBoundingClientRect(),
            getClientRects: ()=>node.getClientRects(),
            contextElement: node
        } : node;
        // Store the positionReference in state if the DOM reference is specified externally via the
        // `elements.reference` option. This ensures that it won't be overridden on future renders.
        setPositionReferenceRaw(computedPositionReference);
        position.refs.setReference(computedPositionReference);
    }, [
        position.refs
    ]);
    const [localDomReference, setLocalDomReference] = __TURBOPACK__imported__module__51268__109["useState"](undefined);
    const [localFloatingElement, setLocalFloatingElement] = __TURBOPACK__imported__module__51268__109["useState"](null);
    rootContext.useSyncedValue('referenceElement', localDomReference ?? null);
    const localDomReferenceElement = (0, __TURBOPACK__imported__module__92615__16["isElement"])(localDomReference) ? localDomReference : null;
    rootContext.useSyncedValue('domReferenceElement', localDomReference === undefined ? rootContextElements.domReference : localDomReferenceElement);
    rootContext.useSyncedValue('floatingElement', localFloatingElement);
    const setReference = __TURBOPACK__imported__module__51268__109["useCallback"]((node)=>{
        if ((0, __TURBOPACK__imported__module__92615__16["isElement"])(node) || node === null) {
            domReferenceRef.current = node;
            setLocalDomReference(node);
        }
        // Backwards-compatibility for passing a virtual element to `reference`
        // after it has set the DOM reference.
        if ((0, __TURBOPACK__imported__module__92615__16["isElement"])(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
        // `null` to support `positionReference` + an unstable `reference`
        // callback ref.
        node !== null && !(0, __TURBOPACK__imported__module__92615__16["isElement"])(node)) {
            position.refs.setReference(node);
        }
    }, [
        position.refs,
        setLocalDomReference
    ]);
    const setFloating = __TURBOPACK__imported__module__51268__109["useCallback"]((node)=>{
        setLocalFloatingElement(node);
        position.refs.setFloating(node);
    }, [
        position.refs
    ]);
    const refs = __TURBOPACK__imported__module__51268__109["useMemo"](()=>({
            ...position.refs,
            setReference,
            setFloating,
            setPositionReference,
            domReference: domReferenceRef
        }), [
        position.refs,
        setReference,
        setFloating,
        setPositionReference
    ]);
    const elements = __TURBOPACK__imported__module__51268__109["useMemo"](()=>({
            ...position.elements,
            domReference: rootContextElements.domReference
        }), [
        position.elements,
        rootContextElements.domReference
    ]);
    const open = rootContext.useState('open');
    const floatingId = rootContext.useState('floatingId');
    const context = __TURBOPACK__imported__module__51268__109["useMemo"](()=>({
            ...position,
            dataRef: rootContext.context.dataRef,
            open,
            onOpenChange: rootContext.setOpen,
            events: rootContext.context.events,
            floatingId,
            refs,
            elements,
            nodeId,
            rootStore: rootContext
        }), [
        position,
        refs,
        elements,
        nodeId,
        rootContext,
        open,
        floatingId
    ]);
    (0, __TURBOPACK__imported__module__91900__23["useIsoLayoutEffect"])(()=>{
        rootContext.context.dataRef.current.floatingContext = context;
        const node = tree?.nodesRef.current.find((n)=>n.id === nodeId);
        if (node) {
            node.context = context;
        }
    });
    return __TURBOPACK__imported__module__51268__109["useMemo"](()=>({
            ...position,
            context,
            refs,
            elements,
            rootStore: rootContext
        }), [
        position,
        refs,
        elements,
        context,
        rootContext
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/direction-context/DirectionContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__57 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__110 = __TURBOPACK__imported__module__51268__;
'use client';
;
const DirectionContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__110["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useDirection() {
    const context = __TURBOPACK__imported__module__51268__110["useContext"](DirectionContext);
    return context?.direction ?? 'ltr';
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/middleware/arrow.js [app-client] (ecmascript)
;
;
const baseArrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0, offsetParent = 'real' } = evaluate(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = getPaddingObject(padding);
            const coords = {
                x,
                y
            };
            const axis = getAlignmentAxis(placement);
            const length = getAxisLength(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = offsetParent === 'real' ? await platform.getOffsetParent?.(element) : elements.floating;
            let clientSize = elements.floating[clientProp] || rects.floating[length];
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await platform.isElement?.(arrowOffsetParent)) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = clamp(min, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && getAlignment(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            // eslint-disable-next-line no-nested-ternary
            const alignmentOffset = shouldAddOffset ? center < min ? center - min : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
const arrow3 = (options, deps)=>({
        ...baseArrow(options),
        options: [
            options,
            deps
        ]
    });
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/hideMiddleware.js [app-client] (ecmascript)
;
;
const hide3 = {
    name: 'hide',
    async fn (state) {
        const { width, height, x, y } = state.rects.reference;
        const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
        const nativeHideResult = await hide2().fn(state);
        return {
            data: {
                referenceHidden: nativeHideResult.data?.referenceHidden || anchorHidden
            }
        };
    }
};
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/adaptiveOriginMiddleware.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__2 = __TURBOPACK__imported__module__92615__1;
;
;
const DEFAULT_SIDES = {
    sideX: 'left',
    sideY: 'top'
};
const adaptiveOrigin = {
    name: 'adaptiveOrigin',
    async fn (state) {
        const { x: rawX, y: rawY, rects: { floating: floatRect }, elements: { floating }, platform, strategy, placement } = state;
        const win = (0, __TURBOPACK__imported__module__92615__2["getWindow"])(floating);
        const styles = win.getComputedStyle(floating);
        const hasTransition = styles.transitionDuration !== '0s' && styles.transitionDuration !== '';
        if (!hasTransition) {
            return {
                x: rawX,
                y: rawY,
                data: DEFAULT_SIDES
            };
        }
        const offsetParent = await platform.getOffsetParent?.(floating);
        let offsetDimensions = {
            width: 0,
            height: 0
        };
        // For fixed strategy, prefer visualViewport if available
        if (strategy === 'fixed' && win?.visualViewport) {
            offsetDimensions = {
                width: win.visualViewport.width,
                height: win.visualViewport.height
            };
        } else if (offsetParent === win) {
            const doc = ownerDocument(floating);
            offsetDimensions = {
                width: doc.documentElement.clientWidth,
                height: doc.documentElement.clientHeight
            };
        } else if (await platform.isElement?.(offsetParent)) {
            offsetDimensions = await platform.getDimensions(offsetParent);
        }
        const currentSide = getSide(placement);
        let x = rawX;
        let y = rawY;
        if (currentSide === 'left') {
            x = offsetDimensions.width - (rawX + floatRect.width);
        }
        if (currentSide === 'top') {
            y = offsetDimensions.height - (rawY + floatRect.height);
        }
        const sideX = currentSide === 'left' ? 'right' : DEFAULT_SIDES.sideX;
        const sideY = currentSide === 'top' ? 'bottom' : DEFAULT_SIDES.sideY;
        return {
            x,
            y,
            data: {
                sideX,
                sideY
            }
        };
    }
};
'use client';
;
;
;
;
;
;
;
;
;
;
;
function getLogicalSide(sideParam, renderedSide, isRtl) {
    const isLogicalSideParam = sideParam === 'inline-start' || sideParam === 'inline-end';
    const logicalRight = isRtl ? 'inline-start' : 'inline-end';
    const logicalLeft = isRtl ? 'inline-end' : 'inline-start';
    return ({
        top: 'top',
        right: isLogicalSideParam ? logicalRight : 'right',
        bottom: 'bottom',
        left: isLogicalSideParam ? logicalLeft : 'left'
    })[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
    const { rects, placement } = state;
    const data = {
        side: getLogicalSide(sideParam, getSide(placement), isRtl),
        align: getAlignment(placement) || 'center',
        anchor: {
            width: rects.reference.width,
            height: rects.reference.height
        },
        positioner: {
            width: rects.floating.width,
            height: rects.floating.height
        }
    };
    return data;
}
function useAnchorPositioning(params) {
    const { // Public parameters
    anchor, positionMethod = 'absolute', side: sideParam = 'bottom', sideOffset = 0, align = 'center', alignOffset = 0, collisionBoundary, collisionPadding: collisionPaddingParam = 5, sticky = false, arrowPadding = 5, disableAnchorTracking = false, // Private parameters
    keepMounted = false, floatingRootContext, mounted, collisionAvoidance, shiftCrossAxis = false, nodeId, adaptiveOrigin, lazyFlip = false, externalTree } = params;
    const [mountSide, setMountSide] = __TURBOPACK__imported__module__51268__107["useState"](null);
    if (!mounted && mountSide !== null) {
        setMountSide(null);
    }
    const collisionAvoidanceSide = collisionAvoidance.side || 'flip';
    const collisionAvoidanceAlign = collisionAvoidance.align || 'flip';
    const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || 'end';
    const anchorFn = typeof anchor === 'function' ? anchor : undefined;
    const anchorFnCallback = (0, __TURBOPACK__imported__module__32787__18["useStableCallback"])(anchorFn);
    const anchorDep = anchorFn ? anchorFnCallback : anchor;
    const anchorValueRef = useValueAsRef(anchor);
    const mountedRef = useValueAsRef(mounted);
    const direction = useDirection();
    const isRtl = direction === 'rtl';
    const side = mountSide || ({
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
        'inline-end': isRtl ? 'left' : 'right',
        'inline-start': isRtl ? 'right' : 'left'
    })[sideParam];
    const placement = align === 'center' ? side : `${side}-${align}`;
    let collisionPadding = collisionPaddingParam;
    // Create a bias to the preferred side.
    // On iOS, when the mobile software keyboard opens, the input is exactly centered
    // in the viewport, but this can cause it to flip to the top undesirably.
    const bias = 1;
    const biasTop = sideParam === 'bottom' ? bias : 0;
    const biasBottom = sideParam === 'top' ? bias : 0;
    const biasLeft = sideParam === 'right' ? bias : 0;
    const biasRight = sideParam === 'left' ? bias : 0;
    if (typeof collisionPadding === 'number') {
        collisionPadding = {
            top: collisionPadding + biasTop,
            right: collisionPadding + biasRight,
            bottom: collisionPadding + biasBottom,
            left: collisionPadding + biasLeft
        };
    } else if (collisionPadding) {
        collisionPadding = {
            top: (collisionPadding.top || 0) + biasTop,
            right: (collisionPadding.right || 0) + biasRight,
            bottom: (collisionPadding.bottom || 0) + biasBottom,
            left: (collisionPadding.left || 0) + biasLeft
        };
    }
    const commonCollisionProps = {
        boundary: collisionBoundary === 'clipping-ancestors' ? 'clippingAncestors' : collisionBoundary,
        padding: collisionPadding
    };
    // Using a ref assumes that the arrow element is always present in the DOM for the lifetime of the
    // popup. If this assumption ends up being false, we can switch to state to manage the arrow's
    // presence.
    const arrowRef = __TURBOPACK__imported__module__51268__107["useRef"](null);
    // Keep these reactive if they're not functions
    const sideOffsetRef = useValueAsRef(sideOffset);
    const alignOffsetRef = useValueAsRef(alignOffset);
    const sideOffsetDep = typeof sideOffset !== 'function' ? sideOffset : 0;
    const alignOffsetDep = typeof alignOffset !== 'function' ? alignOffset : 0;
    const middleware = [
        offset2((state)=>{
            const data = getOffsetData(state, sideParam, isRtl);
            const sideAxis = typeof sideOffsetRef.current === 'function' ? sideOffsetRef.current(data) : sideOffsetRef.current;
            const alignAxis = typeof alignOffsetRef.current === 'function' ? alignOffsetRef.current(data) : alignOffsetRef.current;
            return {
                mainAxis: sideAxis,
                crossAxis: alignAxis,
                alignmentAxis: alignAxis
            };
        }, [
            sideOffsetDep,
            alignOffsetDep,
            isRtl,
            sideParam
        ])
    ];
    const shiftDisabled = collisionAvoidanceAlign === 'none' && collisionAvoidanceSide !== 'shift';
    const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === 'shift');
    const flipMiddleware = collisionAvoidanceSide === 'none' ? null : flip2({
        ...commonCollisionProps,
        // Ensure the popup flips if it's been limited by its --available-height and it resizes.
        // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
        padding: {
            top: collisionPadding.top + bias,
            right: collisionPadding.right + bias,
            bottom: collisionPadding.bottom + bias,
            left: collisionPadding.left + bias
        },
        mainAxis: !shiftCrossAxis && collisionAvoidanceSide === 'flip',
        crossAxis: collisionAvoidanceAlign === 'flip' ? 'alignment' : false,
        fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
    });
    const shiftMiddleware = shiftDisabled ? null : shift2((data)=>{
        const html = ownerDocument(data.elements.floating).documentElement;
        return {
            ...commonCollisionProps,
            // Use the Layout Viewport to avoid shifting around when pinch-zooming
            // for context menus.
            rootBoundary: shiftCrossAxis ? {
                x: 0,
                y: 0,
                width: html.clientWidth,
                height: html.clientHeight
            } : undefined,
            mainAxis: collisionAvoidanceAlign !== 'none',
            crossAxis: crossAxisShiftEnabled,
            limiter: sticky || shiftCrossAxis ? undefined : limitShift2((limitData)=>{
                if (!arrowRef.current) {
                    return {};
                }
                const { width, height } = arrowRef.current.getBoundingClientRect();
                const sideAxis = getSideAxis(getSide(limitData.placement));
                const arrowSize = sideAxis === 'y' ? width : height;
                const offsetAmount = sideAxis === 'y' ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
                return {
                    offset: arrowSize / 2 + offsetAmount / 2
                };
            })
        };
    }, [
        commonCollisionProps,
        sticky,
        shiftCrossAxis,
        collisionPadding,
        collisionAvoidanceAlign
    ]);
    // https://floating-ui.com/docs/flip#combining-with-shift
    if (collisionAvoidanceSide === 'shift' || collisionAvoidanceAlign === 'shift' || align === 'center') {
        middleware.push(shiftMiddleware, flipMiddleware);
    } else {
        middleware.push(flipMiddleware, shiftMiddleware);
    }
    middleware.push(size2({
        ...commonCollisionProps,
        apply ({ elements: { floating }, availableWidth, availableHeight, rects }) {
            if (!mountedRef.current) {
                return;
            }
            const floatingStyle = floating.style;
            floatingStyle.setProperty('--available-width', `${availableWidth}px`);
            floatingStyle.setProperty('--available-height', `${availableHeight}px`);
            // Snap anchor dimensions to device pixels to ensure the popup's visual width matches the anchor's one.
            const dpr = (0, __TURBOPACK__imported__module__92615__2["getWindow"])(floating).devicePixelRatio || 1;
            const { x, y, width, height } = rects.reference;
            const anchorWidth = (Math.round((x + width) * dpr) - Math.round(x * dpr)) / dpr;
            const anchorHeight = (Math.round((y + height) * dpr) - Math.round(y * dpr)) / dpr;
            floatingStyle.setProperty('--anchor-width', `${anchorWidth}px`);
            floatingStyle.setProperty('--anchor-height', `${anchorHeight}px`);
        }
    }), arrow3(()=>({
            // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
            // we'll create a fake element.
            element: arrowRef.current || ownerDocument(arrowRef.current).createElement('div'),
            padding: arrowPadding,
            offsetParent: 'floating'
        }), [
        arrowPadding
    ]), {
        name: 'transformOrigin',
        fn (state) {
            const { elements, middlewareData, placement: renderedPlacement, rects, y } = state;
            const currentRenderedSide = getSide(renderedPlacement);
            const currentRenderedAxis = getSideAxis(currentRenderedSide);
            const arrowEl = arrowRef.current;
            const arrowX = middlewareData.arrow?.x || 0;
            const arrowY = middlewareData.arrow?.y || 0;
            const arrowWidth = arrowEl?.clientWidth || 0;
            const arrowHeight = arrowEl?.clientHeight || 0;
            const transformX = arrowX + arrowWidth / 2;
            const transformY = arrowY + arrowHeight / 2;
            const shiftY = Math.abs(middlewareData.shift?.y || 0);
            const halfAnchorHeight = rects.reference.height / 2;
            const sideOffsetValue = typeof sideOffset === 'function' ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
            const isOverlappingAnchor = shiftY > sideOffsetValue;
            const adjacentTransformOrigin = {
                top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
                bottom: `${transformX}px ${-sideOffsetValue}px`,
                left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
                right: `${-sideOffsetValue}px ${transformY}px`
            }[currentRenderedSide];
            const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y}px`;
            elements.floating.style.setProperty('--transform-origin', crossAxisShiftEnabled && currentRenderedAxis === 'y' && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
            return {};
        }
    }, hide3, adaptiveOrigin);
    (0, __TURBOPACK__imported__module__91900__22["useIsoLayoutEffect"])(()=>{
        // Ensure positioning doesn't run initially for `keepMounted` elements that
        // aren't initially open.
        if (!mounted && floatingRootContext) {
            floatingRootContext.update({
                referenceElement: null,
                floatingElement: null,
                domReferenceElement: null,
                positionReference: null
            });
        }
    }, [
        mounted,
        floatingRootContext
    ]);
    const autoUpdateOptions = __TURBOPACK__imported__module__51268__107["useMemo"](()=>({
            elementResize: !disableAnchorTracking && typeof ResizeObserver !== 'undefined',
            layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== 'undefined'
        }), [
        disableAnchorTracking
    ]);
    const { refs, elements, x, y, middlewareData, update, placement: renderedPlacement, context, isPositioned, floatingStyles: originalFloatingStyles } = useFloating1({
        rootContext: floatingRootContext,
        open: keepMounted ? mounted : undefined,
        placement,
        middleware,
        strategy: positionMethod,
        whileElementsMounted: keepMounted ? undefined : (...args)=>autoUpdate(...args, autoUpdateOptions),
        nodeId,
        externalTree
    });
    const { sideX, sideY } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
    // Default to `fixed` when not positioned to prevent `autoFocus` scroll jumps.
    // This ensures the popup is inside the viewport initially before it gets positioned.
    const resolvedPosition = isPositioned ? positionMethod : 'fixed';
    const floatingStyles = __TURBOPACK__imported__module__51268__107["useMemo"](()=>{
        const base = adaptiveOrigin ? {
            position: resolvedPosition,
            [sideX]: x,
            [sideY]: y
        } : {
            position: resolvedPosition,
            ...originalFloatingStyles
        };
        if (!isPositioned) {
            base.opacity = 0;
        }
        return base;
    }, [
        adaptiveOrigin,
        resolvedPosition,
        sideX,
        x,
        sideY,
        y,
        originalFloatingStyles,
        isPositioned
    ]);
    const registeredPositionReferenceRef = __TURBOPACK__imported__module__51268__107["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__22["useIsoLayoutEffect"])(()=>{
        if (!mounted) {
            return;
        }
        const anchorValue = anchorValueRef.current;
        const resolvedAnchor = typeof anchorValue === 'function' ? anchorValue() : anchorValue;
        const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
        const finalAnchor = unwrappedElement || null;
        if (finalAnchor !== registeredPositionReferenceRef.current) {
            refs.setPositionReference(finalAnchor);
            registeredPositionReferenceRef.current = finalAnchor;
        }
    }, [
        mounted,
        refs,
        anchorDep,
        anchorValueRef
    ]);
    __TURBOPACK__imported__module__51268__107["useEffect"](()=>{
        if (!mounted) {
            return;
        }
        const anchorValue = anchorValueRef.current;
        // Refs from parent components are set after useLayoutEffect runs and are available in useEffect.
        // Therefore, if the anchor is a ref, we need to update the position reference in useEffect.
        if (typeof anchorValue === 'function') {
            return;
        }
        if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
            refs.setPositionReference(anchorValue.current);
            registeredPositionReferenceRef.current = anchorValue.current;
        }
    }, [
        mounted,
        refs,
        anchorDep,
        anchorValueRef
    ]);
    __TURBOPACK__imported__module__51268__107["useEffect"](()=>{
        if (keepMounted && mounted && elements.domReference && elements.floating) {
            return autoUpdate(elements.domReference, elements.floating, update, autoUpdateOptions);
        }
        return undefined;
    }, [
        keepMounted,
        mounted,
        elements,
        update,
        autoUpdateOptions
    ]);
    const renderedSide = getSide(renderedPlacement);
    const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
    const renderedAlign = getAlignment(renderedPlacement) || 'center';
    const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
    /**
   * Locks the flip (makes it "sticky") so it doesn't prefer a given placement
   * and flips back lazily, not eagerly. Ideal for filtered lists that change
   * the size of the popup dynamically to avoid unwanted flipping when typing.
   */ (0, __TURBOPACK__imported__module__91900__22["useIsoLayoutEffect"])(()=>{
        if (lazyFlip && mounted && isPositioned) {
            setMountSide(renderedSide);
        }
    }, [
        lazyFlip,
        mounted,
        isPositioned,
        renderedSide
    ]);
    const arrowStyles = __TURBOPACK__imported__module__51268__107["useMemo"](()=>({
            position: 'absolute',
            top: middlewareData.arrow?.y,
            left: middlewareData.arrow?.x
        }), [
        middlewareData.arrow
    ]);
    const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
    return __TURBOPACK__imported__module__51268__107["useMemo"](()=>({
            positionerStyles: floatingStyles,
            arrowStyles,
            arrowRef,
            arrowUncentered,
            side: logicalRenderedSide,
            align: renderedAlign,
            physicalSide: renderedSide,
            anchorHidden,
            refs,
            context,
            isPositioned,
            update
        }), [
        floatingStyles,
        arrowStyles,
        arrowRef,
        arrowUncentered,
        logicalRenderedSide,
        renderedAlign,
        renderedSide,
        anchorHidden,
        refs,
        context,
        isPositioned,
        update
    ]);
}
function isRef(param) {
    return param != null && 'current' in param;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/list/CompositeList.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__111 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__67452__11 = __TURBOPACK__imported__module__67452__;
var __TURBOPACK__imported__module__32787__19 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__25 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__8063__39 = __TURBOPACK__imported__module__8063__;
/* eslint-disable no-bitwise */ 'use client';
;
;
;
;
;
;
function CompositeList(props) {
    const { children, elementsRef, labelsRef, onMapChange: onMapChangeProp } = props;
    const onMapChange = (0, __TURBOPACK__imported__module__32787__19["useStableCallback"])(onMapChangeProp);
    const nextIndexRef = __TURBOPACK__imported__module__51268__111["useRef"](0);
    const listeners = (0, __TURBOPACK__imported__module__67452__11["useRefWithInit"])(createListeners).current;
    // We use a stable `map` to avoid O(n^2) re-allocation costs for large lists.
    // `mapTick` is our re-render trigger mechanism. We also need to update the
    // elements and label refs, but there's a lot of async work going on and sometimes
    // the effect that handles `onMapChange` gets called after those refs have been
    // filled, and we don't want to lose those values by setting their lengths to `0`.
    // We also need to have them at the proper length because floating-ui uses that
    // information for list navigation.
    const map = (0, __TURBOPACK__imported__module__67452__11["useRefWithInit"])(createMap).current;
    // `mapTick` uses a counter rather than objects for low precision-loss risk and better memory efficiency
    const [mapTick, setMapTick] = __TURBOPACK__imported__module__51268__111["useState"](0);
    const lastTickRef = __TURBOPACK__imported__module__51268__111["useRef"](mapTick);
    const register = (0, __TURBOPACK__imported__module__32787__19["useStableCallback"])((node, metadata)=>{
        map.set(node, metadata ?? null);
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
    });
    const unregister = (0, __TURBOPACK__imported__module__32787__19["useStableCallback"])((node)=>{
        map.delete(node);
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
    });
    const sortedMap = __TURBOPACK__imported__module__51268__111["useMemo"](()=>{
        // `mapTick` is the `useMemo` trigger as `map` is stable.
        disableEslintWarning(mapTick);
        const newMap = new Map();
        // Filter out disconnected elements before sorting to avoid inconsistent
        // compareDocumentPosition results when elements are detached from the DOM.
        const sortedNodes = Array.from(map.keys()).filter((node)=>node.isConnected).sort(sortByDocumentPosition);
        sortedNodes.forEach((node, index)=>{
            const metadata = map.get(node) ?? {};
            newMap.set(node, {
                ...metadata,
                index
            });
        });
        return newMap;
    }, [
        map,
        mapTick
    ]);
    (0, __TURBOPACK__imported__module__91900__25["useIsoLayoutEffect"])(()=>{
        if (typeof MutationObserver !== 'function' || sortedMap.size === 0) {
            return undefined;
        }
        const mutationObserver = new MutationObserver((entries)=>{
            const diff = new Set();
            const updateDiff = (node)=>diff.has(node) ? diff.delete(node) : diff.add(node);
            entries.forEach((entry)=>{
                entry.removedNodes.forEach(updateDiff);
                entry.addedNodes.forEach(updateDiff);
            });
            if (diff.size === 0) {
                lastTickRef.current += 1;
                setMapTick(lastTickRef.current);
            }
        });
        sortedMap.forEach((_, node)=>{
            if (node.parentElement) {
                mutationObserver.observe(node.parentElement, {
                    childList: true
                });
            }
        });
        return ()=>{
            mutationObserver.disconnect();
        };
    }, [
        sortedMap
    ]);
    (0, __TURBOPACK__imported__module__91900__25["useIsoLayoutEffect"])(()=>{
        const shouldUpdateLengths = lastTickRef.current === mapTick;
        if (shouldUpdateLengths) {
            if (elementsRef.current.length !== sortedMap.size) {
                elementsRef.current.length = sortedMap.size;
            }
            if (labelsRef && labelsRef.current.length !== sortedMap.size) {
                labelsRef.current.length = sortedMap.size;
            }
            nextIndexRef.current = sortedMap.size;
        }
        onMapChange(sortedMap);
    }, [
        onMapChange,
        sortedMap,
        elementsRef,
        labelsRef,
        mapTick
    ]);
    (0, __TURBOPACK__imported__module__91900__25["useIsoLayoutEffect"])(()=>{
        return ()=>{
            elementsRef.current = [];
        };
    }, [
        elementsRef
    ]);
    (0, __TURBOPACK__imported__module__91900__25["useIsoLayoutEffect"])(()=>{
        return ()=>{
            if (labelsRef) {
                labelsRef.current = [];
            }
        };
    }, [
        labelsRef
    ]);
    const subscribeMapChange = (0, __TURBOPACK__imported__module__32787__19["useStableCallback"])((fn)=>{
        listeners.add(fn);
        return ()=>{
            listeners.delete(fn);
        };
    });
    (0, __TURBOPACK__imported__module__91900__25["useIsoLayoutEffect"])(()=>{
        listeners.forEach((l)=>l(sortedMap));
    }, [
        listeners,
        sortedMap
    ]);
    const contextValue = __TURBOPACK__imported__module__51268__111["useMemo"](()=>({
            register,
            unregister,
            subscribeMapChange,
            elementsRef,
            labelsRef,
            nextIndexRef
        }), [
        register,
        unregister,
        subscribeMapChange,
        elementsRef,
        labelsRef,
        nextIndexRef
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__39["jsx"])(CompositeListContext.Provider, {
        value: contextValue,
        children: children
    });
}
function createMap() {
    return new Map();
}
function createListeners() {
    return new Set();
}
function sortByDocumentPosition(a, b) {
    const position = a.compareDocumentPosition(b);
    if (position & Node.DOCUMENT_POSITION_FOLLOWING || position & Node.DOCUMENT_POSITION_CONTAINED_BY) {
        return -1;
    }
    if (position & Node.DOCUMENT_POSITION_PRECEDING || position & Node.DOCUMENT_POSITION_CONTAINS) {
        return 1;
    }
    return 0;
}
function disableEslintWarning(_) {}
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/usePositioner.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__19996__23 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
function usePositioner(componentProps, state, { styles, transitionStatus, props, refs, hidden, inert = false }) {
    const style = {
        ...styles
    };
    if (inert) {
        style.pointerEvents = 'none';
    }
    return (0, __TURBOPACK__imported__module__19996__23["useRenderElement"])('div', componentProps, {
        state,
        ref: refs,
        props: [
            {
                role: 'presentation',
                hidden,
                style
            },
            getDisabledMountTransitionStyles(transitionStatus),
            props
        ],
        stateAttributesMapping: popupStateMapping
    });
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useAnchoredPopupScrollLock.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__112 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__26 = __TURBOPACK__imported__module__91900__;
'use client';
;
;
;
;
// Touch-opened popups normally avoid scroll locking so users can still swipe outside to dismiss.
// This hook re-enables scroll lock only when the popup is effectively full-width.
// Treat popups with up to 20px of total horizontal gutter as full-width so common ~10px side
// padding still locks scroll, since that leaves too little outside space for a reliable swipe.
const VIEWPORT_WIDTH_TOLERANCE_PX = 20;
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
    const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = __TURBOPACK__imported__module__51268__112["useState"](false);
    (0, __TURBOPACK__imported__module__91900__26["useIsoLayoutEffect"])(()=>{
        if (!enabled || !touchOpen || positionerElement == null) {
            setTouchOpenShouldLockScroll(false);
            return;
        }
        const viewportWidth = ownerDocument(positionerElement).documentElement.clientWidth;
        const popupWidth = positionerElement.offsetWidth;
        setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
    }, [
        enabled,
        touchOpen,
        positionerElement
    ]);
    useScrollLock(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}
var __TURBOPACK__imported__module__8063__40 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuPositioner = /*#__PURE__*/ __TURBOPACK__imported__module__51268__106["forwardRef"](function MenuPositioner(componentProps, forwardedRef) {
    const { anchor: anchorProp, positionMethod: positionMethodProp = 'absolute', className, render, side, align: alignProp, sideOffset: sideOffsetProp = 0, alignOffset: alignOffsetProp = 0, collisionBoundary = 'clipping-ancestors', collisionPadding = 5, arrowPadding = 5, sticky = false, disableAnchorTracking = false, collisionAvoidance: collisionAvoidanceProp = DROPDOWN_COLLISION_AVOIDANCE, style, ...elementProps } = componentProps;
    const { store } = useMenuRootContext();
    const keepMounted = useMenuPortalContext();
    const contextMenuContext = useContextMenuRootContext(true);
    const parent = store.useState('parent');
    const floatingRootContext = store.useState('floatingRootContext');
    const floatingTreeRoot = store.useState('floatingTreeRoot');
    const mounted = store.useState('mounted');
    const open = store.useState('open');
    const modal = store.useState('modal');
    const openMethod = store.useState('openMethod');
    const triggerElement = store.useState('activeTriggerElement');
    const transitionStatus = store.useState('transitionStatus');
    const positionerElement = store.useState('positionerElement');
    const instantType = store.useState('instantType');
    const hasViewport = store.useState('hasViewport');
    const lastOpenChangeReason = store.useState('lastOpenChangeReason');
    const floatingNodeId = store.useState('floatingNodeId');
    const floatingParentNodeId = store.useState('floatingParentNodeId');
    const domReference = floatingRootContext.useState('domReferenceElement');
    const previousTriggerRef = __TURBOPACK__imported__module__51268__106["useRef"](null);
    const runOnceAnimationsFinish = useAnimationsFinished(positionerElement, false, false);
    let anchor = anchorProp;
    let sideOffset = sideOffsetProp;
    let alignOffset = alignOffsetProp;
    let align = alignProp;
    let collisionAvoidance = collisionAvoidanceProp;
    if (parent.type === 'context-menu') {
        anchor = anchorProp ?? parent.context?.anchor;
        align = align ?? 'start';
        if (!side && align !== 'center') {
            alignOffset = componentProps.alignOffset ?? 2;
            sideOffset = componentProps.sideOffset ?? -5;
        }
    }
    let computedSide = side;
    let computedAlign = align;
    if (parent.type === 'menu') {
        computedSide = computedSide ?? 'inline-end';
        computedAlign = computedAlign ?? 'start';
        collisionAvoidance = componentProps.collisionAvoidance ?? POPUP_COLLISION_AVOIDANCE;
    } else if (parent.type === 'menubar') {
        computedSide = computedSide ?? 'bottom';
        computedAlign = computedAlign ?? 'start';
    }
    const contextMenu = parent.type === 'context-menu';
    const positioner = useAnchorPositioning({
        anchor,
        floatingRootContext,
        positionMethod: contextMenuContext ? 'fixed' : positionMethodProp,
        mounted,
        side: computedSide,
        sideOffset,
        align: computedAlign,
        alignOffset,
        arrowPadding: contextMenu ? 0 : arrowPadding,
        collisionBoundary,
        collisionPadding,
        sticky,
        nodeId: floatingNodeId,
        keepMounted,
        disableAnchorTracking,
        collisionAvoidance,
        shiftCrossAxis: contextMenu && !('side' in collisionAvoidance && collisionAvoidance.side === 'flip'),
        externalTree: floatingTreeRoot,
        adaptiveOrigin: hasViewport ? adaptiveOrigin : undefined
    });
    __TURBOPACK__imported__module__51268__106["useEffect"](()=>{
        function onMenuOpenChange(details) {
            if (details.open) {
                if (details.parentNodeId === floatingNodeId) {
                    store.set('hoverEnabled', false);
                }
                if (details.nodeId !== floatingNodeId && details.parentNodeId === store.select('floatingParentNodeId')) {
                    store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.siblingOpen));
                }
            }
        }
        floatingTreeRoot.events.on('menuopenchange', onMenuOpenChange);
        return ()=>{
            floatingTreeRoot.events.off('menuopenchange', onMenuOpenChange);
        };
    }, [
        store,
        floatingTreeRoot.events,
        floatingNodeId
    ]);
    __TURBOPACK__imported__module__51268__106["useEffect"](()=>{
        if (store.select('floatingParentNodeId') == null) {
            return undefined;
        }
        function onParentClose(details) {
            if (details.open || details.nodeId !== store.select('floatingParentNodeId')) {
                return;
            }
            const reason = details.reason ?? __TURBOPACK__imported__module__54906__.siblingOpen;
            store.setOpen(false, createChangeEventDetails(reason));
        }
        floatingTreeRoot.events.on('menuopenchange', onParentClose);
        return ()=>{
            floatingTreeRoot.events.off('menuopenchange', onParentClose);
        };
    }, [
        floatingTreeRoot.events,
        store
    ]);
    const closeTimeout = useTimeout();
    // Clear pending close timeout when the menu closes.
    __TURBOPACK__imported__module__51268__106["useEffect"](()=>{
        if (!open) {
            closeTimeout.clear();
        }
    }, [
        open,
        closeTimeout
    ]);
    // Close unrelated child submenus when hovering a different item in the parent menu.
    __TURBOPACK__imported__module__51268__106["useEffect"](()=>{
        function onItemHover(event) {
            // If an item within our parent menu is hovered, and this menu's trigger is not that item,
            // close this submenu. This ensures hovering a different item in the parent closes other branches.
            if (!open || event.nodeId !== store.select('floatingParentNodeId')) {
                return;
            }
            if (event.target && triggerElement && triggerElement !== event.target) {
                const delay = store.select('closeDelay');
                if (delay > 0) {
                    if (!closeTimeout.isStarted()) {
                        closeTimeout.start(delay, ()=>{
                            store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.siblingOpen));
                        });
                    }
                } else {
                    store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.siblingOpen));
                }
            } else {
                // User re-hovered the submenu trigger, cancel pending close.
                closeTimeout.clear();
            }
        }
        floatingTreeRoot.events.on('itemhover', onItemHover);
        return ()=>{
            floatingTreeRoot.events.off('itemhover', onItemHover);
        };
    }, [
        floatingTreeRoot.events,
        open,
        triggerElement,
        store,
        closeTimeout
    ]);
    __TURBOPACK__imported__module__51268__106["useEffect"](()=>{
        const eventDetails = {
            open,
            nodeId: floatingNodeId,
            parentNodeId: floatingParentNodeId,
            reason: store.select('lastOpenChangeReason')
        };
        floatingTreeRoot.events.emit('menuopenchange', eventDetails);
    }, [
        floatingTreeRoot.events,
        open,
        store,
        floatingNodeId,
        floatingParentNodeId
    ]);
    // Keep positioner transition behavior aligned with Popover when switching detached triggers.
    (0, __TURBOPACK__imported__module__91900__21["useIsoLayoutEffect"])(()=>{
        const currentTrigger = domReference;
        const previousTrigger = previousTriggerRef.current;
        if (currentTrigger) {
            previousTriggerRef.current = currentTrigger;
        }
        if (previousTrigger && currentTrigger && currentTrigger !== previousTrigger) {
            store.set('instantType', undefined);
            const abortController = new AbortController();
            runOnceAnimationsFinish(()=>{
                store.set('instantType', 'trigger-change');
            }, abortController.signal);
            return ()=>{
                abortController.abort();
            };
        }
        return undefined;
    }, [
        domReference,
        runOnceAnimationsFinish,
        store
    ]);
    const state = {
        open,
        side: positioner.side,
        align: positioner.align,
        anchorHidden: positioner.anchorHidden,
        nested: parent.type === 'menu',
        instant: instantType
    };
    const menubarModal = parent.type === 'menubar' && parent.context.modal;
    const popupModal = modal && lastOpenChangeReason !== __TURBOPACK__imported__module__54906__.triggerHover;
    useAnchoredPopupScrollLock(open && (menubarModal || popupModal), openMethod === 'touch', positionerElement, triggerElement);
    const element = usePositioner(componentProps, state, {
        styles: positioner.positionerStyles,
        transitionStatus,
        props: elementProps,
        refs: [
            forwardedRef,
            store.useStateSetter('positionerElement')
        ],
        hidden: !mounted,
        inert: !open
    });
    const shouldRenderBackdrop = mounted && parent.type !== 'menu' && (parent.type !== 'menubar' && modal && lastOpenChangeReason !== __TURBOPACK__imported__module__54906__.triggerHover || parent.type === 'menubar' && parent.context.modal);
    // cuts a hole in the backdrop to allow pointer interaction with the menubar or dropdown menu trigger element
    let backdropCutout = null;
    if (parent.type === 'menubar') {
        backdropCutout = parent.context.contentElement;
    } else if (parent.type === undefined) {
        backdropCutout = triggerElement;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__40["jsxs"])(MenuPositionerContext.Provider, {
        value: positioner,
        children: [
            shouldRenderBackdrop && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__40["jsx"])(InternalBackdrop, {
                ref: parent.type === 'context-menu' || parent.type === 'nested-context-menu' ? parent.context.internalBackdropRef : null,
                inert: inertValue(!open),
                cutout: backdropCutout
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__40["jsx"])(FloatingNode, {
                id: floatingNodeId,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__40["jsx"])(CompositeList, {
                    elementsRef: store.context.itemDomElements,
                    labelsRef: store.context.itemLabels,
                    children: element
                })
            })
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/radio-group/MenuRadioGroup.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__58 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__113 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__20 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/radio-group/MenuRadioGroupContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__59 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__14 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__114 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const MenuRadioGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__114["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenuRadioGroupContext() {
    const context = __TURBOPACK__imported__module__51268__114["useContext"](MenuRadioGroupContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__14["default"])(34));
    }
    return context;
}
var __TURBOPACK__imported__module__19996__24 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__8063__41 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
const MenuRadioGroup = /*#__PURE__*/ __TURBOPACK__imported__module__51268__113["memo"](/*#__PURE__*/ __TURBOPACK__imported__module__51268__113["forwardRef"](function MenuRadioGroup(componentProps, forwardedRef) {
    const { render, className, value: valueProp, defaultValue, onValueChange: onValueChangeProp, disabled = false, style, ...elementProps } = componentProps;
    const [value1, setValueUnwrapped] = useControlled({
        controlled: valueProp,
        default: defaultValue,
        name: 'MenuRadioGroup'
    });
    const onValueChange = (0, __TURBOPACK__imported__module__32787__20["useStableCallback"])(onValueChangeProp);
    const setValue = (0, __TURBOPACK__imported__module__32787__20["useStableCallback"])((newValue, eventDetails)=>{
        onValueChange?.(newValue, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        setValueUnwrapped(newValue);
    });
    const state = {
        disabled
    };
    const element = (0, __TURBOPACK__imported__module__19996__24["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: {
            role: 'group',
            'aria-disabled': disabled || undefined,
            ...elementProps
        }
    });
    const context = __TURBOPACK__imported__module__51268__113["useMemo"](()=>({
            value: value1,
            setValue,
            disabled
        }), [
        value1,
        setValue,
        disabled
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__41["jsx"])(MenuRadioGroupContext.Provider, {
        value: context,
        children: element
    });
}));
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/radio-item/MenuRadioItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__60 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__115 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__21 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__19996__25 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/radio-item/MenuRadioItemContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__61 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__15 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__116 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const MenuRadioItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__116["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenuRadioItemContext() {
    const context = __TURBOPACK__imported__module__51268__116["useContext"](MenuRadioItemContext);
    if (context === undefined) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__15["default"])(35));
    }
    return context;
}
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
var __TURBOPACK__imported__module__8063__42 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuRadioItem = /*#__PURE__*/ __TURBOPACK__imported__module__51268__115["forwardRef"](function MenuRadioItem(componentProps, forwardedRef) {
    const { render, className, id: idProp, label, nativeButton = false, disabled: disabledProp = false, closeOnClick = false, value: value1, style, ...elementProps } = componentProps;
    const listItem = useCompositeListItem({
        label
    });
    const menuPositionerContext = useMenuPositionerContext(true);
    const id = useBaseUiId(idProp);
    const { store } = useMenuRootContext();
    const highlighted = store.useState('isActive', listItem.index);
    const itemProps = store.useState('itemProps');
    const { value: selectedValue, setValue: setSelectedValue, disabled: groupDisabled } = useMenuRadioGroupContext();
    const disabled = groupDisabled || disabledProp;
    const checked = selectedValue === value1;
    const { getItemProps, itemRef } = useMenuItem({
        closeOnClick,
        disabled,
        highlighted,
        id,
        store,
        nativeButton,
        nodeId: menuPositionerContext?.context.nodeId,
        itemMetadata: REGULAR_ITEM
    });
    const state = __TURBOPACK__imported__module__51268__115["useMemo"](()=>({
            disabled,
            highlighted,
            checked
        }), [
        disabled,
        highlighted,
        checked
    ]);
    const handleClick = (0, __TURBOPACK__imported__module__32787__21["useStableCallback"])((event)=>{
        const details = {
            ...createChangeEventDetails(__TURBOPACK__imported__module__54906__.itemPress, event.nativeEvent),
            preventUnmountOnClose: ()=>{}
        };
        setSelectedValue(value1, details);
    });
    const element = (0, __TURBOPACK__imported__module__19996__25["useRenderElement"])('div', componentProps, {
        state,
        stateAttributesMapping: itemMapping,
        props: [
            itemProps,
            {
                role: 'menuitemradio',
                'aria-checked': checked,
                onClick: handleClick
            },
            elementProps,
            getItemProps
        ],
        ref: [
            itemRef,
            forwardedRef,
            listItem.ref
        ]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__42["jsx"])(MenuRadioItemContext.Provider, {
        value: state,
        children: element
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/radio-item-indicator/MenuRadioItemIndicator.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__62 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__117 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__26 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
;
;
const MenuRadioItemIndicator = /*#__PURE__*/ __TURBOPACK__imported__module__51268__117["forwardRef"](function MenuRadioItemIndicator(componentProps, forwardedRef) {
    const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
    const item = useMenuRadioItemContext();
    const indicatorRef = __TURBOPACK__imported__module__51268__117["useRef"](null);
    const { transitionStatus, setMounted } = useTransitionStatus(item.checked);
    useOpenChangeComplete({
        open: item.checked,
        ref: indicatorRef,
        onComplete () {
            if (!item.checked) {
                setMounted(false);
            }
        }
    });
    const state = {
        checked: item.checked,
        disabled: item.disabled,
        highlighted: item.highlighted,
        transitionStatus
    };
    const element = (0, __TURBOPACK__imported__module__19996__26["useRenderElement"])('span', componentProps, {
        state,
        stateAttributesMapping: itemMapping,
        ref: [
            forwardedRef,
            indicatorRef
        ],
        props: {
            'aria-hidden': true,
            ...elementProps
        },
        enabled: keepMounted || item.checked
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/root/MenuRoot.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__63 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__118 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__22 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__27 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__24659__14 = __TURBOPACK__imported__module__24659__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useListNavigation.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__64 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__119 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__92615__18 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__32787__23 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__28 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const ESCAPE = 'Escape';
function doSwitch(orientation, vertical, horizontal) {
    switch(orientation){
        case 'vertical':
            return vertical;
        case 'horizontal':
            return horizontal;
        default:
            return vertical || horizontal;
    }
}
function isMainOrientationKey(key, orientation) {
    const vertical = key === ARROW_UP || key === ARROW_DOWN;
    const horizontal = key === ARROW_LEFT || key === ARROW_RIGHT;
    return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
    const vertical = key === ARROW_DOWN;
    const horizontal = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
    return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key === ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
    const vertical = rtl ? key === ARROW_LEFT : key === ARROW_RIGHT;
    const horizontal = key === ARROW_DOWN;
    return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl, cols) {
    const vertical = rtl ? key === ARROW_RIGHT : key === ARROW_LEFT;
    const horizontal = key === ARROW_UP;
    if (orientation === 'both' || orientation === 'horizontal' && cols && cols > 1) {
        return key === ESCAPE;
    }
    return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(context, props) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const floatingElement = store.useState('floatingElement');
    const domReferenceElement = store.useState('domReferenceElement');
    const dataRef = store.context.dataRef;
    const { listRef, activeIndex, onNavigate: onNavigateProp = ()=>{}, enabled = true, selectedIndex = null, allowEscape = false, loopFocus = false, nested = false, rtl = false, virtual = false, focusItemOnOpen = 'auto', focusItemOnHover = true, openOnArrowKeyDown = true, disabledIndices = undefined, orientation = 'vertical', parentOrientation, cols = 1, id, resetOnPointerLeave = true, externalTree } = props;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const floatingFocusElement = getFloatingFocusElement(floatingElement);
    const floatingFocusElementRef = useValueAsRef(floatingFocusElement);
    const parentId = useFloatingParentNodeId();
    const tree = useFloatingTree(externalTree);
    (0, __TURBOPACK__imported__module__91900__28["useIsoLayoutEffect"])(()=>{
        dataRef.current.orientation = orientation;
    }, [
        dataRef,
        orientation
    ]);
    const typeableComboboxReference = isTypeableCombobox(domReferenceElement);
    const focusItemOnOpenRef = __TURBOPACK__imported__module__51268__119["useRef"](focusItemOnOpen);
    const indexRef = __TURBOPACK__imported__module__51268__119["useRef"](selectedIndex ?? -1);
    const keyRef = __TURBOPACK__imported__module__51268__119["useRef"](null);
    const isPointerModalityRef = __TURBOPACK__imported__module__51268__119["useRef"](true);
    const onNavigate = (0, __TURBOPACK__imported__module__32787__23["useStableCallback"])((event)=>{
        onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
    });
    const previousOnNavigateRef = __TURBOPACK__imported__module__51268__119["useRef"](onNavigate);
    const previousMountedRef = __TURBOPACK__imported__module__51268__119["useRef"](!!floatingElement);
    const previousOpenRef = __TURBOPACK__imported__module__51268__119["useRef"](open);
    const forceSyncFocusRef = __TURBOPACK__imported__module__51268__119["useRef"](false);
    const forceScrollIntoViewRef = __TURBOPACK__imported__module__51268__119["useRef"](false);
    const cancelQueuedFocusRef = __TURBOPACK__imported__module__51268__119["useRef"](null);
    const disabledIndicesRef = useValueAsRef(disabledIndices);
    const latestOpenRef = useValueAsRef(open);
    const selectedIndexRef = useValueAsRef(selectedIndex);
    const resetOnPointerLeaveRef = useValueAsRef(resetOnPointerLeave);
    const focusItem = (0, __TURBOPACK__imported__module__32787__23["useStableCallback"])(()=>{
        function runFocus(item) {
            if (virtual) {
                tree?.events.emit('virtualfocus', item);
            } else {
                cancelQueuedFocusRef.current = enqueueFocus(item, {
                    sync: forceSyncFocusRef.current,
                    preventScroll: true
                });
            }
        }
        const initialItem = listRef.current[indexRef.current];
        const forceScrollIntoView = forceScrollIntoViewRef.current;
        if (initialItem) {
            runFocus(initialItem);
        }
        const scheduler = forceSyncFocusRef.current ? (v)=>v() : requestAnimationFrame;
        scheduler(()=>{
            const waitedItem = listRef.current[indexRef.current] || initialItem;
            if (!waitedItem) {
                return;
            }
            if (!initialItem) {
                runFocus(waitedItem);
            }
            const shouldScrollIntoView = // eslint-disable-next-line @typescript-eslint/no-use-before-define
            item && (forceScrollIntoView || !isPointerModalityRef.current);
            if (shouldScrollIntoView) {
                // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
                // by all browsers.
                waitedItem.scrollIntoView?.({
                    block: 'nearest',
                    inline: 'nearest'
                });
            }
        });
    });
    // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
    // element. Also, reset `activeIndex` upon closing the floating element.
    (0, __TURBOPACK__imported__module__91900__28["useIsoLayoutEffect"])(()=>{
        if (!enabled) {
            return;
        }
        if (open && floatingElement) {
            indexRef.current = selectedIndex ?? -1;
            if (focusItemOnOpenRef.current && selectedIndex != null) {
                // Regardless of the pointer modality, we want to ensure the selected
                // item comes into view when the floating element is opened.
                forceScrollIntoViewRef.current = true;
                onNavigate();
            }
        } else if (previousMountedRef.current) {
            // Since the user can specify `onNavigate` conditionally
            // (onNavigate: open ? setActiveIndex : setSelectedIndex),
            // we store and call the previous function.
            indexRef.current = -1;
            previousOnNavigateRef.current();
        }
    }, [
        enabled,
        open,
        floatingElement,
        selectedIndex,
        onNavigate
    ]);
    // Sync `activeIndex` to be the focused item while the floating element is
    // open.
    (0, __TURBOPACK__imported__module__91900__28["useIsoLayoutEffect"])(()=>{
        if (!enabled) {
            return;
        }
        if (!open) {
            forceSyncFocusRef.current = false;
            return;
        }
        if (!floatingElement) {
            return;
        }
        if (activeIndex == null) {
            forceSyncFocusRef.current = false;
            if (selectedIndexRef.current != null) {
                return;
            }
            // Reset while the floating element was open (e.g. the list changed).
            if (previousMountedRef.current) {
                indexRef.current = -1;
                focusItem();
            }
            // Initial sync.
            if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
                let runs = 0;
                const waitForListPopulated = ()=>{
                    if (listRef.current[0] == null) {
                        // Avoid letting the browser paint if possible on the first try,
                        // otherwise use rAF. Don't try more than twice, since something
                        // is wrong otherwise.
                        if (runs < 2) {
                            const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                            scheduler(waitForListPopulated);
                        }
                        runs += 1;
                    } else {
                        // initially focus the first non-disabled item
                        indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? getMinListIndex(listRef) : getMaxListIndex(listRef);
                        keyRef.current = null;
                        onNavigate();
                    }
                };
                waitForListPopulated();
            }
        } else if (!isIndexOutOfListBounds(listRef.current, activeIndex)) {
            indexRef.current = activeIndex;
            focusItem();
            forceScrollIntoViewRef.current = false;
        }
    }, [
        enabled,
        open,
        floatingElement,
        activeIndex,
        selectedIndexRef,
        nested,
        listRef,
        orientation,
        rtl,
        onNavigate,
        focusItem,
        disabledIndicesRef
    ]);
    // Ensure the parent floating element has focus when a nested child closes
    // to allow arrow key navigation to work after the pointer leaves the child.
    (0, __TURBOPACK__imported__module__91900__28["useIsoLayoutEffect"])(()=>{
        if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) {
            return;
        }
        const nodes = tree.nodesRef.current;
        const parent = nodes.find((node)=>node.id === parentId)?.context?.elements.floating;
        const activeEl = activeElement(ownerDocument(floatingElement));
        const treeContainsActiveEl = nodes.some((node)=>node.context && contains(node.context.elements.floating, activeEl));
        if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
            parent.focus({
                preventScroll: true
            });
        }
    }, [
        enabled,
        floatingElement,
        tree,
        parentId,
        virtual
    ]);
    (0, __TURBOPACK__imported__module__91900__28["useIsoLayoutEffect"])(()=>{
        previousOnNavigateRef.current = onNavigate;
        previousOpenRef.current = open;
        previousMountedRef.current = !!floatingElement;
    });
    (0, __TURBOPACK__imported__module__91900__28["useIsoLayoutEffect"])(()=>{
        if (!open) {
            keyRef.current = null;
            focusItemOnOpenRef.current = focusItemOnOpen;
        }
    }, [
        open,
        focusItemOnOpen
    ]);
    const hasActiveIndex = activeIndex != null;
    const syncCurrentTarget = (0, __TURBOPACK__imported__module__32787__23["useStableCallback"])((event)=>{
        if (!latestOpenRef.current) {
            return;
        }
        const index = listRef.current.indexOf(event.currentTarget);
        if (index !== -1 && (indexRef.current !== index || activeIndex !== index)) {
            indexRef.current = index;
            onNavigate(event);
        }
    });
    const item = __TURBOPACK__imported__module__51268__119["useMemo"](()=>{
        const itemProps = {
            onFocus (event) {
                forceSyncFocusRef.current = true;
                syncCurrentTarget(event);
            },
            onClick: ({ currentTarget })=>currentTarget.focus({
                    preventScroll: true
                }),
            // Safari
            onMouseMove (event) {
                forceSyncFocusRef.current = true;
                forceScrollIntoViewRef.current = false;
                if (focusItemOnHover) {
                    syncCurrentTarget(event);
                }
            },
            onPointerLeave (event) {
                if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === 'touch') {
                    return;
                }
                forceSyncFocusRef.current = true;
                const relatedTarget = event.relatedTarget;
                if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
                    return;
                }
                if (!resetOnPointerLeaveRef.current) {
                    return;
                }
                cancelQueuedFocusRef.current?.();
                cancelQueuedFocusRef.current = null;
                indexRef.current = -1;
                onNavigate(event);
                if (!virtual) {
                    const floatingFocusEl = floatingFocusElementRef.current;
                    const activeEl = activeElement(ownerDocument(floatingFocusEl));
                    if (floatingFocusEl && contains(floatingFocusEl, activeEl)) {
                        floatingFocusEl.focus({
                            preventScroll: true
                        });
                    }
                }
            }
        };
        return itemProps;
    }, [
        syncCurrentTarget,
        latestOpenRef,
        floatingFocusElementRef,
        focusItemOnHover,
        listRef,
        onNavigate,
        resetOnPointerLeaveRef,
        virtual
    ]);
    const getParentOrientation = __TURBOPACK__imported__module__51268__119["useCallback"](()=>{
        return parentOrientation ?? tree?.nodesRef.current.find((node)=>node.id === parentId)?.context?.dataRef?.current.orientation;
    }, [
        parentId,
        tree,
        parentOrientation
    ]);
    const commonOnKeyDown = (0, __TURBOPACK__imported__module__32787__23["useStableCallback"])((event)=>{
        isPointerModalityRef.current = false;
        forceSyncFocusRef.current = true;
        // When composing a character, Chrome fires ArrowDown twice. Firefox/Safari
        // don't appear to suffer from this. `event.isComposing` is avoided due to
        // Safari not supporting it properly (although it's not needed in the first
        // place for Safari, just avoiding any possible issues).
        if (event.which === 229) {
            return;
        }
        // If the floating element is animating out, ignore navigation. Otherwise,
        // the `activeIndex` gets set to 0 despite not being open so the next time
        // the user ArrowDowns, the first item won't be focused.
        if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
            return;
        }
        if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, cols)) {
            // If the nested list's close key is also the parent navigation key,
            // let the parent navigate. Otherwise, stop propagating the event.
            if (!isMainOrientationKey(event.key, getParentOrientation())) {
                stopEvent(event);
            }
            store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.listNavigation, event.nativeEvent));
            if ((0, __TURBOPACK__imported__module__92615__18["isHTMLElement"])(domReferenceElement)) {
                if (virtual) {
                    tree?.events.emit('virtualfocus', domReferenceElement);
                } else {
                    domReferenceElement.focus();
                }
            }
            return;
        }
        const currentIndex = indexRef.current;
        const minIndex = getMinListIndex(listRef, disabledIndices);
        const maxIndex = getMaxListIndex(listRef, disabledIndices);
        if (!typeableComboboxReference) {
            if (event.key === 'Home') {
                stopEvent(event);
                indexRef.current = minIndex;
                onNavigate(event);
            }
            if (event.key === 'End') {
                stopEvent(event);
                indexRef.current = maxIndex;
                onNavigate(event);
            }
        }
        // Grid navigation.
        if (cols > 1) {
            const sizes = Array.from({
                length: listRef.current.length
            }, ()=>({
                    width: 1,
                    height: 1
                }));
            // To calculate movements on the grid, we use hypothetical cell indices
            // as if every item was 1x1, then convert back to real indices.
            const cellMap = createGridCellMap(sizes, cols, false);
            const minGridIndex = cellMap.findIndex((index)=>index != null && !isListIndexDisabled(listRef.current, index, disabledIndices));
            // last enabled index
            const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex)=>index != null && !isListIndexDisabled(listRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
            const index = cellMap[getGridNavigatedIndex(cellMap.map((itemIndex)=>itemIndex != null ? listRef.current[itemIndex] : null), {
                event,
                orientation,
                loopFocus,
                rtl,
                cols,
                // treat undefined (empty grid spaces) as disabled indices so we
                // don't end up in them
                disabledIndices: getGridCellIndices([
                    ...(typeof disabledIndices !== 'function' ? disabledIndices : null) || listRef.current.map((_, listIndex)=>isListIndexDisabled(listRef.current, listIndex, disabledIndices) ? listIndex : undefined),
                    undefined
                ], cellMap),
                minIndex: minGridIndex,
                maxIndex: maxGridIndex,
                prevIndex: getGridCellIndexOfCorner(indexRef.current > maxIndex ? minIndex : indexRef.current, sizes, cellMap, cols, // use a corner matching the edge closest to the direction
                // we're moving in so we don't end up in the same item. Prefer
                // top/left over bottom/right.
                // eslint-disable-next-line no-nested-ternary
                event.key === ARROW_DOWN ? 'bl' : event.key === (rtl ? ARROW_LEFT : ARROW_RIGHT) ? 'tr' : 'tl'),
                stopEvent: true
            })];
            if (index != null) {
                indexRef.current = index;
                onNavigate(event);
            }
            if (orientation === 'both') {
                return;
            }
        }
        if (isMainOrientationKey(event.key, orientation)) {
            stopEvent(event);
            // Reset the index if no item is focused.
            if (open && !virtual && activeElement(event.currentTarget.ownerDocument) === event.currentTarget) {
                indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
                onNavigate(event);
                return;
            }
            if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
                if (loopFocus) {
                    if (currentIndex >= maxIndex) {
                        if (allowEscape && currentIndex !== listRef.current.length) {
                            indexRef.current = -1;
                        } else {
                            // Give time for virtualizers to update the listRef.
                            forceSyncFocusRef.current = false;
                            indexRef.current = minIndex;
                        }
                    } else {
                        indexRef.current = findNonDisabledListIndex(listRef.current, {
                            startingIndex: currentIndex,
                            disabledIndices
                        });
                    }
                } else {
                    indexRef.current = Math.min(maxIndex, findNonDisabledListIndex(listRef.current, {
                        startingIndex: currentIndex,
                        disabledIndices
                    }));
                }
            } else if (loopFocus) {
                if (currentIndex <= minIndex) {
                    if (allowEscape && currentIndex !== -1) {
                        indexRef.current = listRef.current.length;
                    } else {
                        // Give time for virtualizers to update the listRef.
                        forceSyncFocusRef.current = false;
                        indexRef.current = maxIndex;
                    }
                } else {
                    indexRef.current = findNonDisabledListIndex(listRef.current, {
                        startingIndex: currentIndex,
                        decrement: true,
                        disabledIndices
                    });
                }
            } else {
                indexRef.current = Math.max(minIndex, findNonDisabledListIndex(listRef.current, {
                    startingIndex: currentIndex,
                    decrement: true,
                    disabledIndices
                }));
            }
            if (isIndexOutOfListBounds(listRef.current, indexRef.current)) {
                indexRef.current = -1;
            }
            onNavigate(event);
        }
    });
    const ariaActiveDescendantProp = __TURBOPACK__imported__module__51268__119["useMemo"](()=>{
        return virtual && open && hasActiveIndex && {
            'aria-activedescendant': `${id}-${activeIndex}`
        };
    }, [
        virtual,
        open,
        hasActiveIndex,
        id,
        activeIndex
    ]);
    const floating = __TURBOPACK__imported__module__51268__119["useMemo"](()=>{
        return {
            'aria-orientation': orientation === 'both' ? undefined : orientation,
            ...!typeableComboboxReference ? ariaActiveDescendantProp : {},
            onKeyDown (event) {
                // Close submenu on Shift+Tab
                if (event.key === 'Tab' && event.shiftKey && open && !virtual) {
                    // If the event originated from within a nested element (e.g., a Dialog opened from
                    // within the menu), don't close the menu. The nested element has its own focus
                    // management and should handle the Tab key.
                    const target = getTarget(event.nativeEvent);
                    if (target && !contains(floatingFocusElementRef.current, target)) {
                        return;
                    }
                    stopEvent(event);
                    store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.focusOut, event.nativeEvent));
                    if ((0, __TURBOPACK__imported__module__92615__18["isHTMLElement"])(domReferenceElement)) {
                        domReferenceElement.focus();
                    }
                    return;
                }
                commonOnKeyDown(event);
            },
            onPointerMove () {
                isPointerModalityRef.current = true;
            }
        };
    }, [
        ariaActiveDescendantProp,
        commonOnKeyDown,
        floatingFocusElementRef,
        orientation,
        typeableComboboxReference,
        store,
        open,
        virtual,
        domReferenceElement
    ]);
    const trigger = __TURBOPACK__imported__module__51268__119["useMemo"](()=>{
        function checkVirtualMouse(event) {
            if (focusItemOnOpen === 'auto' && isVirtualClick(event.nativeEvent)) {
                focusItemOnOpenRef.current = !virtual;
            }
        }
        function checkVirtualPointer(event) {
            // `pointerdown` fires first, reset the state then perform the checks.
            focusItemOnOpenRef.current = focusItemOnOpen;
            if (focusItemOnOpen === 'auto' && isVirtualPointerEvent(event.nativeEvent)) {
                focusItemOnOpenRef.current = true;
            }
        }
        return {
            onKeyDown (event) {
                // non-reactive open state (to prevent re-creation of the handler)
                const currentOpen = store.select('open');
                isPointerModalityRef.current = false;
                const isArrowKey = event.key.startsWith('Arrow');
                const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
                const isMainKey = isMainOrientationKey(event.key, orientation);
                const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === 'Enter' || event.key.trim() === '';
                if (virtual && currentOpen) {
                    return commonOnKeyDown(event);
                }
                // If a floating element should not open on arrow key down, avoid
                // setting `activeIndex` while it's closed.
                if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
                    return undefined;
                }
                if (isNavigationKey) {
                    const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
                    keyRef.current = nested && isParentMainKey ? null : event.key;
                }
                if (nested) {
                    if (isParentCrossOpenKey) {
                        stopEvent(event);
                        if (currentOpen) {
                            indexRef.current = getMinListIndex(listRef, disabledIndicesRef.current);
                            onNavigate(event);
                        } else {
                            store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.listNavigation, event.nativeEvent, event.currentTarget));
                        }
                    }
                    return undefined;
                }
                if (isMainKey) {
                    if (selectedIndexRef.current != null) {
                        indexRef.current = selectedIndexRef.current;
                    }
                    stopEvent(event);
                    if (!currentOpen && openOnArrowKeyDown) {
                        store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.listNavigation, event.nativeEvent, event.currentTarget));
                    } else {
                        commonOnKeyDown(event);
                    }
                    if (currentOpen) {
                        onNavigate(event);
                    }
                }
                return undefined;
            },
            onFocus (event) {
                if (store.select('open') && !virtual) {
                    indexRef.current = -1;
                    onNavigate(event);
                }
            },
            onPointerDown: checkVirtualPointer,
            onPointerEnter: checkVirtualPointer,
            onMouseDown: checkVirtualMouse,
            onClick: checkVirtualMouse
        };
    }, [
        commonOnKeyDown,
        disabledIndicesRef,
        focusItemOnOpen,
        listRef,
        nested,
        onNavigate,
        store,
        openOnArrowKeyDown,
        orientation,
        getParentOrientation,
        rtl,
        selectedIndexRef,
        virtual
    ]);
    const reference = __TURBOPACK__imported__module__51268__119["useMemo"](()=>{
        return {
            ...ariaActiveDescendantProp,
            ...trigger
        };
    }, [
        ariaActiveDescendantProp,
        trigger
    ]);
    return __TURBOPACK__imported__module__51268__119["useMemo"](()=>enabled ? {
            reference,
            floating,
            item,
            trigger
        } : {}, [
        enabled,
        reference,
        floating,
        trigger,
        item
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useTypeahead.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__120 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__24 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__29 = __TURBOPACK__imported__module__91900__;
'use client';
;
;
;
;
;
;
;
function useTypeahead(context, props) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const dataRef = store.context.dataRef;
    const open = store.useState('open');
    const { listRef, elementsRef, activeIndex, onMatch: onMatchProp, onTypingChange, enabled = true, resetMs = 750, selectedIndex = null } = props;
    const timeout = useTimeout();
    const stringRef = __TURBOPACK__imported__module__51268__120["useRef"]('');
    const prevIndexRef = __TURBOPACK__imported__module__51268__120["useRef"](selectedIndex ?? activeIndex ?? -1);
    const matchIndexRef = __TURBOPACK__imported__module__51268__120["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__29["useIsoLayoutEffect"])(()=>{
        if (!open && selectedIndex !== null) {
            return;
        }
        timeout.clear();
        matchIndexRef.current = null;
        if (stringRef.current !== '') {
            stringRef.current = '';
        }
    }, [
        open,
        selectedIndex,
        timeout
    ]);
    (0, __TURBOPACK__imported__module__91900__29["useIsoLayoutEffect"])(()=>{
        // Sync arrow key navigation but not typeahead navigation.
        if (open && stringRef.current === '') {
            prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
        }
    }, [
        open,
        selectedIndex,
        activeIndex
    ]);
    const setTypingChange = (0, __TURBOPACK__imported__module__32787__24["useStableCallback"])((value1)=>{
        if (value1) {
            if (!dataRef.current.typing) {
                dataRef.current.typing = value1;
                onTypingChange?.(value1);
            }
        } else if (dataRef.current.typing) {
            dataRef.current.typing = value1;
            onTypingChange?.(value1);
        }
    });
    const onKeyDown = (0, __TURBOPACK__imported__module__32787__24["useStableCallback"])((event)=>{
        function isVisible(index) {
            const element = elementsRef?.current[index];
            return !element || isElementVisible(element);
        }
        function getMatchingIndex(list, string, startIndex = 0) {
            if (list.length === 0) {
                return -1;
            }
            const normalizedStartIndex = (startIndex % list.length + list.length) % list.length;
            const lowerString = string.toLocaleLowerCase();
            for(let offset = 0; offset < list.length; offset += 1){
                const index = (normalizedStartIndex + offset) % list.length;
                const text = list[index];
                if (!text?.toLocaleLowerCase().startsWith(lowerString) || !isVisible(index)) {
                    continue;
                }
                return index;
            }
            return -1;
        }
        const listContent = listRef.current;
        if (stringRef.current.length > 0 && event.key === ' ') {
            // Space should continue the in-progress typeahead session.
            stopEvent(event);
            setTypingChange(true);
        }
        if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
            if (getMatchingIndex(listContent, stringRef.current) === -1 && event.key !== ' ') {
                setTypingChange(false);
            }
        }
        if (listContent == null || // Character key.
        event.key.length !== 1 || // Modifier key.
        event.ctrlKey || event.metaKey || event.altKey) {
            return;
        }
        if (open && event.key !== ' ') {
            stopEvent(event);
            setTypingChange(true);
        }
        // Capture whether this is a new typing session before mutating the string.
        const isNewSession = stringRef.current === '';
        if (isNewSession) {
            prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
        }
        // Bail out if the list contains a word like "llama" or "aaron". TODO:
        // allow it in this case, too.
        const allowRapidSuccessionOfFirstLetter = listContent.every((text)=>text ? text[0]?.toLocaleLowerCase() !== text[1]?.toLocaleLowerCase() : true);
        // Allows the user to cycle through items that start with the same letter
        // in rapid succession.
        if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
            stringRef.current = '';
            prevIndexRef.current = matchIndexRef.current;
        }
        stringRef.current += event.key;
        timeout.start(resetMs, ()=>{
            stringRef.current = '';
            prevIndexRef.current = matchIndexRef.current;
            setTypingChange(false);
        });
        // Compute the starting index for this search.
        // If this is a new typing session (string is empty), base it on the current
        // selection/active item; otherwise continue from the last matched index.
        const prevIndex = isNewSession ? selectedIndex ?? activeIndex ?? -1 : prevIndexRef.current;
        const startIndex = (prevIndex ?? 0) + 1;
        const index = getMatchingIndex(listContent, stringRef.current, startIndex);
        if (index !== -1) {
            onMatchProp?.(index);
            matchIndexRef.current = index;
        } else if (event.key !== ' ') {
            stringRef.current = '';
            setTypingChange(false);
        }
    });
    const onBlur = (0, __TURBOPACK__imported__module__32787__24["useStableCallback"])((event)=>{
        const next = event.relatedTarget;
        const currentDomReferenceElement = store.select('domReferenceElement');
        const currentFloatingElement = store.select('floatingElement');
        const withinReference = contains(currentDomReferenceElement, next);
        const withinFloating = contains(currentFloatingElement, next);
        // Keep the session if focus moves within the composite (reference <-> floating).
        if (withinReference || withinFloating) {
            return;
        }
        // End the current typing session when focus leaves the composite entirely.
        timeout.clear();
        stringRef.current = '';
        prevIndexRef.current = matchIndexRef.current;
        setTypingChange(false);
    });
    const reference = __TURBOPACK__imported__module__51268__120["useMemo"](()=>({
            onKeyDown,
            onBlur
        }), [
        onKeyDown,
        onBlur
    ]);
    const floating = __TURBOPACK__imported__module__51268__120["useMemo"](()=>{
        return {
            onKeyDown,
            onBlur
        };
    }, [
        onKeyDown,
        onBlur
    ]);
    return __TURBOPACK__imported__module__51268__120["useMemo"](()=>enabled ? {
            reference,
            floating
        } : {}, [
        enabled,
        reference,
        floating
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menubar/MenubarContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__65 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__16 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__121 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const MenubarContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__121["createContext"](null);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenubarContext(optional) {
    const context = __TURBOPACK__imported__module__51268__121["useContext"](MenubarContext);
    if (context === null && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__16["default"])(5));
    }
    return context;
}
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
var __TURBOPACK__imported__module__84028__4 = __TURBOPACK__imported__module__84028__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/store/MenuStore.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__122 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__15 = __TURBOPACK__imported__module__24659__;
var __TURBOPACK__imported__module__67452__12 = __TURBOPACK__imported__module__67452__;
;
;
;
;
;
;
const selectors2 = {
    ...popupStoreSelectors,
    disabled: createSelector((state)=>state.parent.type === 'menubar' ? state.parent.context.disabled || state.disabled : state.disabled),
    modal: createSelector((state)=>(state.parent.type === undefined || state.parent.type === 'context-menu') && (state.modal ?? true)),
    openMethod: createSelector((state)=>state.openMethod),
    allowMouseEnter: createSelector((state)=>state.allowMouseEnter),
    stickIfOpen: createSelector((state)=>state.stickIfOpen),
    parent: createSelector((state)=>state.parent),
    rootId: createSelector((state)=>{
        if (state.parent.type === 'menu') {
            return state.parent.store.select('rootId');
        }
        return state.parent.type !== undefined ? state.parent.context.rootId : state.rootId;
    }),
    activeIndex: createSelector((state)=>state.activeIndex),
    isActive: createSelector((state, itemIndex)=>state.activeIndex === itemIndex),
    hoverEnabled: createSelector((state)=>state.hoverEnabled),
    instantType: createSelector((state)=>state.instantType),
    lastOpenChangeReason: createSelector((state)=>state.openChangeReason),
    floatingTreeRoot: createSelector((state)=>{
        if (state.parent.type === 'menu') {
            return state.parent.store.select('floatingTreeRoot');
        }
        return state.floatingTreeRoot;
    }),
    floatingNodeId: createSelector((state)=>state.floatingNodeId),
    floatingParentNodeId: createSelector((state)=>state.floatingParentNodeId),
    itemProps: createSelector((state)=>state.itemProps),
    closeDelay: createSelector((state)=>state.closeDelay),
    hasViewport: createSelector((state)=>state.hasViewport),
    keyboardEventRelay: createSelector((state)=>{
        if (state.keyboardEventRelay) {
            return state.keyboardEventRelay;
        }
        if (state.parent.type === 'menu') {
            return state.parent.store.select('keyboardEventRelay');
        }
        return undefined;
    })
};
class MenuStore extends ReactStore {
    constructor(initialState){
        super({
            ...createInitialState1(),
            ...initialState
        }, {
            positionerRef: /*#__PURE__*/ __TURBOPACK__imported__module__51268__122["createRef"](),
            popupRef: /*#__PURE__*/ __TURBOPACK__imported__module__51268__122["createRef"](),
            typingRef: {
                current: false
            },
            itemDomElements: {
                current: []
            },
            itemLabels: {
                current: []
            },
            allowMouseUpTriggerRef: {
                current: false
            },
            triggerFocusTargetRef: /*#__PURE__*/ __TURBOPACK__imported__module__51268__122["createRef"](),
            beforeContentFocusGuardRef: /*#__PURE__*/ __TURBOPACK__imported__module__51268__122["createRef"](),
            onOpenChangeComplete: undefined,
            triggerElements: new PopupTriggerMap()
        }, selectors2);
        // Set up propagation of state from parent menu if applicable.
        this.unsubscribeParentListener = this.observe('parent', (parent)=>{
            this.unsubscribeParentListener?.();
            if (parent.type === 'menu') {
                let rootId = parent.store.select('rootId');
                let floatingTreeRoot = parent.store.select('floatingTreeRoot');
                let keyboardEventRelay = parent.store.select('keyboardEventRelay');
                this.unsubscribeParentListener = parent.store.subscribe(()=>{
                    const nextRootId = parent.store.select('rootId');
                    const nextFloatingTreeRoot = parent.store.select('floatingTreeRoot');
                    const nextKeyboardEventRelay = parent.store.select('keyboardEventRelay');
                    if (rootId === nextRootId && floatingTreeRoot === nextFloatingTreeRoot && keyboardEventRelay === nextKeyboardEventRelay) {
                        return;
                    }
                    rootId = nextRootId;
                    floatingTreeRoot = nextFloatingTreeRoot;
                    keyboardEventRelay = nextKeyboardEventRelay;
                    this.notifyAll();
                });
                this.context.allowMouseUpTriggerRef = parent.store.context.allowMouseUpTriggerRef;
                return;
            }
            if (parent.type !== undefined) {
                this.context.allowMouseUpTriggerRef = parent.context.allowMouseUpTriggerRef;
            }
            this.unsubscribeParentListener = null;
        });
    }
    setOpen(open, eventDetails) {
        this.state.floatingRootContext.context.events.emit('setOpen', {
            open,
            eventDetails
        });
    }
    static useStore(externalStore, initialState) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const internalStore = (0, __TURBOPACK__imported__module__67452__12["useRefWithInit"])(()=>{
            return new MenuStore(initialState);
        }).current;
        return externalStore ?? internalStore;
    }
    unsubscribeParentListener = null;
}
function createInitialState1() {
    return {
        ...createInitialPopupStoreState(),
        disabled: false,
        modal: true,
        openMethod: null,
        allowMouseEnter: false,
        stickIfOpen: true,
        parent: {
            type: undefined
        },
        rootId: undefined,
        activeIndex: null,
        hoverEnabled: true,
        instantType: undefined,
        openChangeReason: null,
        floatingTreeRoot: new FloatingTreeStore(),
        floatingNodeId: undefined,
        floatingParentNodeId: null,
        itemProps: __TURBOPACK__imported__module__24659__15["EMPTY_OBJECT"],
        keyboardEventRelay: undefined,
        closeDelay: 0,
        hasViewport: false
    };
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/submenu-root/MenuSubmenuRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__66 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__123 = __TURBOPACK__imported__module__51268__;
'use client';
;
const MenuSubmenuRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__123["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useMenuSubmenuRootContext() {
    return __TURBOPACK__imported__module__51268__123["useContext"](MenuSubmenuRootContext);
}
var __TURBOPACK__imported__module__8063__43 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuRoot = fastComponent(function MenuRoot(props) {
    const { children, open: openProp, onOpenChange, onOpenChangeComplete, defaultOpen = false, disabled: disabledProp = false, modal: modalProp, loopFocus = true, orientation = 'vertical', actionsRef, closeParentOnEsc = false, handle, triggerId: triggerIdProp, defaultTriggerId: defaultTriggerIdProp = null, highlightItemOnHover = true } = props;
    const contextMenuContext = useContextMenuRootContext(true);
    const parentMenuRootContext = useMenuRootContext(true);
    const menubarContext = useMenubarContext(true);
    const isSubmenu = useMenuSubmenuRootContext();
    const parentFromContext = __TURBOPACK__imported__module__51268__118["useMemo"](()=>{
        if (isSubmenu && parentMenuRootContext) {
            return {
                type: 'menu',
                store: parentMenuRootContext.store
            };
        }
        if (menubarContext) {
            return {
                type: 'menubar',
                context: menubarContext
            };
        }
        // Ensure this is not a Menu nested inside ContextMenu.Trigger.
        // ContextMenu parentContext is always undefined as ContextMenu.Root is instantiated with
        // <MenuRootContext.Provider value={undefined}>
        if (contextMenuContext && !parentMenuRootContext) {
            return {
                type: 'context-menu',
                context: contextMenuContext
            };
        }
        return {
            type: undefined
        };
    }, [
        contextMenuContext,
        parentMenuRootContext,
        menubarContext,
        isSubmenu
    ]);
    const store = MenuStore.useStore(handle?.store, {
        open: defaultOpen,
        openProp,
        activeTriggerId: defaultTriggerIdProp,
        triggerIdProp,
        parent: parentFromContext
    });
    // Support initially open state when uncontrolled
    useOnFirstRender(()=>{
        if (openProp === undefined && store.state.open === false && defaultOpen === true) {
            store.update({
                open: true,
                activeTriggerId: defaultTriggerIdProp
            });
        }
    });
    store.useControlledProp('openProp', openProp);
    store.useControlledProp('triggerIdProp', triggerIdProp);
    store.useContextCallback('onOpenChangeComplete', onOpenChangeComplete);
    const floatingTreeRoot = store.useState('floatingTreeRoot');
    const floatingNodeIdFromContext = useFloatingNodeId(floatingTreeRoot);
    const floatingParentNodeIdFromContext = useFloatingParentNodeId();
    (0, __TURBOPACK__imported__module__91900__27["useIsoLayoutEffect"])(()=>{
        if (contextMenuContext && !parentMenuRootContext) {
            // This is a context menu root.
            // It doesn't support detached triggers yet, so we have to sync the parent context manually.
            store.update({
                parent: {
                    type: 'context-menu',
                    context: contextMenuContext
                },
                floatingNodeId: floatingNodeIdFromContext,
                floatingParentNodeId: floatingParentNodeIdFromContext
            });
        } else if (parentMenuRootContext) {
            store.update({
                floatingNodeId: floatingNodeIdFromContext,
                floatingParentNodeId: floatingParentNodeIdFromContext
            });
        }
    }, [
        contextMenuContext,
        parentMenuRootContext,
        floatingNodeIdFromContext,
        floatingParentNodeIdFromContext,
        store
    ]);
    const open = store.useState('open');
    const activeTriggerElement = store.useState('activeTriggerElement');
    const positionerElement = store.useState('positionerElement');
    const hoverEnabled = store.useState('hoverEnabled');
    const disabled = store.useState('disabled');
    const lastOpenChangeReason = store.useState('lastOpenChangeReason');
    const parent = store.useState('parent');
    const activeIndex = store.useState('activeIndex');
    const payload = store.useState('payload');
    const floatingParentNodeId = store.useState('floatingParentNodeId');
    const openEventRef = __TURBOPACK__imported__module__51268__118["useRef"](null);
    const nested = floatingParentNodeId != null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const { openMethod, triggerProps: interactionTypeProps } = useOpenInteractionType(open);
    store.useSyncedValues({
        disabled: disabledProp,
        modal: parent.type === undefined ? modalProp : undefined,
        openMethod,
        rootId: useId1()
    });
    useImplicitActiveTrigger(store);
    const { forceUnmount } = useOpenStateTransitions(open, store, ()=>{
        store.update({
            allowMouseEnter: false,
            stickIfOpen: true
        });
    });
    const allowOutsidePressDismissalRef = __TURBOPACK__imported__module__51268__118["useRef"](parent.type !== 'context-menu');
    const allowOutsidePressDismissalTimeout = useTimeout();
    __TURBOPACK__imported__module__51268__118["useEffect"](()=>{
        if (!open) {
            openEventRef.current = null;
        }
        if (parent.type !== 'context-menu') {
            return;
        }
        if (!open) {
            allowOutsidePressDismissalTimeout.clear();
            allowOutsidePressDismissalRef.current = false;
            return;
        }
        // With `mousedown` outside press events and long press touch input, there
        // needs to be a grace period after opening to ensure the dismissal event
        // doesn't fire immediately after open.
        allowOutsidePressDismissalTimeout.start(500, ()=>{
            allowOutsidePressDismissalRef.current = true;
        });
    }, [
        allowOutsidePressDismissalTimeout,
        open,
        parent.type
    ]);
    (0, __TURBOPACK__imported__module__91900__27["useIsoLayoutEffect"])(()=>{
        if (!open && !hoverEnabled) {
            store.set('hoverEnabled', true);
        }
    }, [
        open,
        hoverEnabled,
        store
    ]);
    const allowTouchToCloseRef = __TURBOPACK__imported__module__51268__118["useRef"](true);
    const allowTouchToCloseTimeout = useTimeout();
    const setOpen = (0, __TURBOPACK__imported__module__32787__22["useStableCallback"])((nextOpen, eventDetails)=>{
        const reason = eventDetails.reason;
        if (open === nextOpen && eventDetails.trigger === activeTriggerElement && lastOpenChangeReason === reason) {
            return;
        }
        eventDetails.preventUnmountOnClose = ()=>{
            store.set('preventUnmountingOnClose', true);
        };
        // Do not immediately reset the activeTriggerId to allow
        // exit animations to play and focus to be returned correctly.
        if (!nextOpen && eventDetails.trigger == null) {
            eventDetails.trigger = activeTriggerElement ?? undefined;
        }
        onOpenChange?.(nextOpen, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        store.state.floatingRootContext.dispatchOpenChange(nextOpen, eventDetails);
        const nativeEvent = eventDetails.event;
        if (nextOpen === false && nativeEvent?.type === 'click' && nativeEvent.pointerType === 'touch' && !allowTouchToCloseRef.current) {
            return;
        }
        // Workaround `enableFocusInside` in Floating UI setting `tabindex=0` of a non-highlighted
        // option upon close when tabbing out due to `keepMounted=true`:
        // https://github.com/floating-ui/floating-ui/pull/3004/files#diff-962a7439cdeb09ea98d4b622a45d517bce07ad8c3f866e089bda05f4b0bbd875R194-R199
        // This otherwise causes options to retain `tabindex=0` incorrectly when the popup is closed
        // when tabbing outside.
        if (!nextOpen && activeIndex !== null) {
            const activeOption = store.context.itemDomElements.current[activeIndex];
            // Wait for Floating UI's focus effect to have fired
            queueMicrotask(()=>{
                activeOption?.setAttribute('tabindex', '-1');
            });
        }
        // Prevent the menu from closing on mobile devices that have a delayed click event.
        // In some cases the menu, when tapped, will fire the focus event first and then the click event.
        // Without this guard, the menu will close immediately after opening.
        if (nextOpen && reason === __TURBOPACK__imported__module__54906__.triggerFocus) {
            allowTouchToCloseRef.current = false;
            allowTouchToCloseTimeout.start(300, ()=>{
                allowTouchToCloseRef.current = true;
            });
        } else {
            allowTouchToCloseRef.current = true;
            allowTouchToCloseTimeout.clear();
        }
        const isKeyboardClick = (reason === __TURBOPACK__imported__module__54906__.triggerPress || reason === __TURBOPACK__imported__module__54906__.itemPress) && nativeEvent.detail === 0 && nativeEvent?.isTrusted;
        const isDismissClose = !nextOpen && (reason === __TURBOPACK__imported__module__54906__.escapeKey || reason == null);
        const updatedState = {
            open: nextOpen,
            openChangeReason: reason
        };
        openEventRef.current = eventDetails.event ?? null;
        // If a popup is closing, the `trigger` may be null.
        // We want to keep the previous value so that exit animations are played and focus is returned correctly.
        const newTriggerId = eventDetails.trigger?.id ?? null;
        if (newTriggerId || nextOpen) {
            updatedState.activeTriggerId = newTriggerId;
            updatedState.activeTriggerElement = eventDetails.trigger ?? null;
        }
        store.update(updatedState);
        if (parent.type === 'menubar' && (reason === __TURBOPACK__imported__module__54906__.triggerFocus || reason === __TURBOPACK__imported__module__54906__.focusOut || reason === __TURBOPACK__imported__module__54906__.triggerHover || reason === __TURBOPACK__imported__module__54906__.listNavigation || reason === __TURBOPACK__imported__module__54906__.siblingOpen)) {
            store.set('instantType', 'group');
        } else if (isKeyboardClick || isDismissClose) {
            store.set('instantType', isKeyboardClick ? 'click' : 'dismiss');
        } else {
            store.set('instantType', undefined);
        }
    });
    const handleImperativeClose = __TURBOPACK__imported__module__51268__118["useCallback"](()=>{
        store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.imperativeAction));
    }, [
        store
    ]);
    __TURBOPACK__imported__module__51268__118["useImperativeHandle"](actionsRef, ()=>({
            unmount: forceUnmount,
            close: handleImperativeClose
        }), [
        forceUnmount,
        handleImperativeClose
    ]);
    let ctx;
    if (parent.type === 'context-menu') {
        ctx = parent.context;
    }
    __TURBOPACK__imported__module__51268__118["useImperativeHandle"](ctx?.positionerRef, ()=>positionerElement, [
        positionerElement
    ]);
    __TURBOPACK__imported__module__51268__118["useImperativeHandle"](ctx?.actionsRef, ()=>({
            setOpen
        }), [
        setOpen
    ]);
    const floatingRootContext = useSyncedFloatingRootContext({
        popupStore: store,
        onOpenChange: setOpen
    });
    const floatingEvents = floatingRootContext.context.events;
    __TURBOPACK__imported__module__51268__118["useEffect"](()=>{
        const handleSetOpenEvent = ({ open: nextOpen, eventDetails })=>setOpen(nextOpen, eventDetails);
        floatingEvents.on('setOpen', handleSetOpenEvent);
        return ()=>{
            floatingEvents?.off('setOpen', handleSetOpenEvent);
        };
    }, [
        floatingEvents,
        setOpen
    ]);
    const dismiss = useDismiss(floatingRootContext, {
        enabled: !disabled,
        bubbles: {
            escapeKey: closeParentOnEsc && parent.type === 'menu'
        },
        outsidePress () {
            if (parent.type !== 'context-menu' || openEventRef.current?.type === 'contextmenu') {
                return true;
            }
            return allowOutsidePressDismissalRef.current;
        },
        externalTree: nested ? floatingTreeRoot : undefined
    });
    const role = useRole(floatingRootContext, {
        role: 'menu'
    });
    const direction = useDirection();
    const setActiveIndex = __TURBOPACK__imported__module__51268__118["useCallback"]((index)=>{
        if (store.select('activeIndex') === index) {
            return;
        }
        store.set('activeIndex', index);
    }, [
        store
    ]);
    const listNavigation = useListNavigation(floatingRootContext, {
        enabled: !disabled,
        listRef: store.context.itemDomElements,
        activeIndex,
        nested: parent.type !== undefined,
        loopFocus,
        orientation,
        parentOrientation: parent.type === 'menubar' ? parent.context.orientation : undefined,
        rtl: direction === 'rtl',
        disabledIndices: __TURBOPACK__imported__module__24659__14["EMPTY_ARRAY"],
        onNavigate: setActiveIndex,
        openOnArrowKeyDown: parent.type !== 'context-menu',
        externalTree: nested ? floatingTreeRoot : undefined,
        focusItemOnHover: highlightItemOnHover
    });
    const onTypingChange = __TURBOPACK__imported__module__51268__118["useCallback"]((nextTyping)=>{
        store.context.typingRef.current = nextTyping;
    }, [
        store
    ]);
    const typeahead = useTypeahead(floatingRootContext, {
        listRef: store.context.itemLabels,
        elementsRef: store.context.itemDomElements,
        activeIndex,
        resetMs: TYPEAHEAD_RESET_MS,
        onMatch: (index)=>{
            if (open && index !== activeIndex) {
                store.set('activeIndex', index);
            }
        },
        onTypingChange
    });
    const { getReferenceProps, getFloatingProps, getItemProps, getTriggerProps } = useInteractions([
        dismiss,
        role,
        listNavigation,
        typeahead
    ]);
    const activeTriggerProps = __TURBOPACK__imported__module__51268__118["useMemo"](()=>{
        const mergedProps = (0, __TURBOPACK__imported__module__84028__4["mergeProps"])(getReferenceProps(), {
            onMouseMove () {
                store.set('allowMouseEnter', true);
            }
        }, interactionTypeProps);
        delete mergedProps.role;
        return mergedProps;
    }, [
        getReferenceProps,
        store,
        interactionTypeProps
    ]);
    const inactiveTriggerProps = __TURBOPACK__imported__module__51268__118["useMemo"](()=>{
        const triggerProps = getTriggerProps();
        if (!triggerProps) {
            return triggerProps;
        }
        const mergedProps = (0, __TURBOPACK__imported__module__84028__4["mergeProps"])(triggerProps, interactionTypeProps);
        delete mergedProps.role;
        delete mergedProps['aria-controls'];
        return mergedProps;
    }, [
        getTriggerProps,
        interactionTypeProps
    ]);
    const popupProps = __TURBOPACK__imported__module__51268__118["useMemo"](()=>getFloatingProps({
            onMouseMove () {
                store.set('allowMouseEnter', true);
                if (parent.type === 'menu') {
                    store.set('hoverEnabled', false);
                }
            },
            onClick () {
                if (store.select('hoverEnabled')) {
                    store.set('hoverEnabled', false);
                }
            },
            onKeyDown (event) {
                // The Menubar's CompositeRoot captures keyboard events via
                // event delegation. This works well when Menu.Root is nested inside Menubar,
                // but with detached triggers we need to manually forward the event to the CompositeRoot.
                const relay = store.select('keyboardEventRelay');
                if (relay && !event.isPropagationStopped()) {
                    relay(event);
                }
            }
        }), [
        getFloatingProps,
        parent.type,
        store
    ]);
    const itemProps = __TURBOPACK__imported__module__51268__118["useMemo"](()=>getItemProps(), [
        getItemProps
    ]);
    store.useSyncedValues({
        floatingRootContext,
        activeTriggerProps,
        inactiveTriggerProps,
        popupProps,
        itemProps
    });
    const context = __TURBOPACK__imported__module__51268__118["useMemo"](()=>({
            store,
            parent: parentFromContext
        }), [
        store,
        parentFromContext
    ]);
    const content = /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__43["jsx"])(MenuRootContext.Provider, {
        value: context,
        children: typeof children === 'function' ? children({
            payload
        }) : children
    });
    if (parent.type === undefined || parent.type === 'context-menu') {
        // set up a FloatingTree to provide the context to nested menus
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__43["jsx"])(FloatingTree, {
            externalTree: floatingTreeRoot,
            children: content
        });
    }
    return content;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/submenu-root/MenuSubmenuRoot.js [app-client] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__51268__124 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__8063__44 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
function MenuSubmenuRoot(props) {
    const parentMenu = useMenuRootContext().store;
    const contextValue = __TURBOPACK__imported__module__51268__124["useMemo"](()=>({
            parentMenu
        }), [
        parentMenu
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__44["jsx"])(MenuSubmenuRootContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__44["jsx"])(MenuRoot, {
            ...props
        })
    });
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/trigger/MenuTrigger.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__67 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__17 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__125 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__25 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__30 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__24659__16 = __TURBOPACK__imported__module__24659__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/safePolygon.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__19 = __TURBOPACK__imported__module__92615__1;
;
;
;
;
/* eslint-disable no-nested-ternary */ const CURSOR_SPEED_THRESHOLD = 0.1;
const CURSOR_SPEED_THRESHOLD_SQUARED = CURSOR_SPEED_THRESHOLD * CURSOR_SPEED_THRESHOLD;
const POLYGON_BUFFER = 0.5;
function hasIntersectingEdge(pointX, pointY, xi, yi, xj, yj) {
    return yi >= pointY !== yj >= pointY && pointX <= (xj - xi) * (pointY - yi) / (yj - yi) + xi;
}
function isPointInQuadrilateral(pointX, pointY, x1, y1, x2, y2, x3, y3, x4, y4) {
    let isInsideValue = false;
    if (hasIntersectingEdge(pointX, pointY, x1, y1, x2, y2)) {
        isInsideValue = !isInsideValue;
    }
    if (hasIntersectingEdge(pointX, pointY, x2, y2, x3, y3)) {
        isInsideValue = !isInsideValue;
    }
    if (hasIntersectingEdge(pointX, pointY, x3, y3, x4, y4)) {
        isInsideValue = !isInsideValue;
    }
    if (hasIntersectingEdge(pointX, pointY, x4, y4, x1, y1)) {
        isInsideValue = !isInsideValue;
    }
    return isInsideValue;
}
function isInsideRect(pointX, pointY, rect) {
    return pointX >= rect.x && pointX <= rect.x + rect.width && pointY >= rect.y && pointY <= rect.y + rect.height;
}
function isInsideAxisAlignedRect(pointX, pointY, x1, y1, x2, y2) {
    const minX = Math.min(x1, x2);
    const maxX = Math.max(x1, x2);
    const minY = Math.min(y1, y2);
    const maxY = Math.max(y1, y2);
    return pointX >= minX && pointX <= maxX && pointY >= minY && pointY <= maxY;
}
function safePolygon(options = {}) {
    const { blockPointerEvents = false } = options;
    const timeout = new Timeout();
    const fn = ({ x, y, placement, elements, onClose, nodeId, tree })=>{
        const side = placement?.split('-')[0];
        let hasLanded = false;
        let lastX = null;
        let lastY = null;
        let lastCursorTime = typeof performance !== 'undefined' ? performance.now() : 0;
        function isCursorMovingSlowly(nextX, nextY) {
            const currentTime = performance.now();
            const elapsedTime = currentTime - lastCursorTime;
            if (lastX === null || lastY === null || elapsedTime === 0) {
                lastX = nextX;
                lastY = nextY;
                lastCursorTime = currentTime;
                return false;
            }
            const deltaX = nextX - lastX;
            const deltaY = nextY - lastY;
            const distanceSquared = deltaX * deltaX + deltaY * deltaY;
            const thresholdSquared = elapsedTime * elapsedTime * CURSOR_SPEED_THRESHOLD_SQUARED;
            lastX = nextX;
            lastY = nextY;
            lastCursorTime = currentTime;
            return distanceSquared < thresholdSquared;
        }
        function close() {
            timeout.clear();
            onClose();
        }
        return function onMouseMove(event) {
            timeout.clear();
            const domReference = elements.domReference;
            const floating = elements.floating;
            if (!domReference || !floating || side == null || x == null || y == null) {
                return undefined;
            }
            const { clientX, clientY } = event;
            const target = getTarget(event);
            const isLeave = event.type === 'mouseleave';
            const isOverFloatingEl = contains(floating, target);
            const isOverReferenceEl = contains(domReference, target);
            if (isOverFloatingEl) {
                hasLanded = true;
                if (!isLeave) {
                    return undefined;
                }
            }
            if (isOverReferenceEl) {
                hasLanded = false;
                if (!isLeave) {
                    hasLanded = true;
                    return undefined;
                }
            }
            // Prevent overlapping floating element from being stuck in an open-close
            // loop: https://github.com/floating-ui/floating-ui/issues/1910
            if (isLeave && (0, __TURBOPACK__imported__module__92615__19["isElement"])(event.relatedTarget) && contains(floating, event.relatedTarget)) {
                return undefined;
            }
            function hasOpenChildNode() {
                return Boolean(tree && getNodeChildren(tree.nodesRef.current, nodeId).length > 0);
            }
            function closeIfNoOpenChild() {
                if (!hasOpenChildNode()) {
                    close();
                }
            }
            // If any nested child is open, abort.
            if (hasOpenChildNode()) {
                return undefined;
            }
            const refRect = domReference.getBoundingClientRect();
            const rect = floating.getBoundingClientRect();
            const cursorLeaveFromRight = x > rect.right - rect.width / 2;
            const cursorLeaveFromBottom = y > rect.bottom - rect.height / 2;
            const isFloatingWider = rect.width > refRect.width;
            const isFloatingTaller = rect.height > refRect.height;
            const left = (isFloatingWider ? refRect : rect).left;
            const right = (isFloatingWider ? refRect : rect).right;
            const top = (isFloatingTaller ? refRect : rect).top;
            const bottom = (isFloatingTaller ? refRect : rect).bottom;
            // If the pointer is leaving from the opposite side, the "buffer" logic
            // creates a point where the floating element remains open, but should be
            // ignored.
            // A constant of 1 handles floating point rounding errors.
            if (side === 'top' && y >= refRect.bottom - 1 || side === 'bottom' && y <= refRect.top + 1 || side === 'left' && x >= refRect.right - 1 || side === 'right' && x <= refRect.left + 1) {
                closeIfNoOpenChild();
                return undefined;
            }
            // Ignore when the cursor is within the rectangular trough between the
            // two elements. Since the triangle is created from the cursor point,
            // which can start beyond the ref element's edge, traversing back and
            // forth from the ref to the floating element can cause it to close. This
            // ensures it always remains open in that case.
            let isInsideTroughRect = false;
            switch(side){
                case 'top':
                    isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, refRect.top + 1, right, rect.bottom - 1);
                    break;
                case 'bottom':
                    isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, left, rect.top + 1, right, refRect.bottom - 1);
                    break;
                case 'left':
                    isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, rect.right - 1, bottom, refRect.left + 1, top);
                    break;
                case 'right':
                    isInsideTroughRect = isInsideAxisAlignedRect(clientX, clientY, refRect.right - 1, bottom, rect.left + 1, top);
                    break;
                default:
            }
            if (isInsideTroughRect) {
                return undefined;
            }
            if (hasLanded && !isInsideRect(clientX, clientY, refRect)) {
                closeIfNoOpenChild();
                return undefined;
            }
            if (!isLeave && isCursorMovingSlowly(clientX, clientY)) {
                closeIfNoOpenChild();
                return undefined;
            }
            let isInsidePolygon = false;
            switch(side){
                case 'top':
                    {
                        const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
                        const cursorPointOneX = isFloatingWider ? x + cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
                        const cursorPointTwoX = isFloatingWider ? x - cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
                        const cursorPointY = y + POLYGON_BUFFER + 1;
                        const commonYLeft = cursorLeaveFromRight ? rect.bottom - POLYGON_BUFFER : isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top;
                        const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.bottom - POLYGON_BUFFER : rect.top : rect.bottom - POLYGON_BUFFER;
                        isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
                        break;
                    }
                case 'bottom':
                    {
                        const cursorXOffset = isFloatingWider ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
                        const cursorPointOneX = isFloatingWider ? x + cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
                        const cursorPointTwoX = isFloatingWider ? x - cursorXOffset : cursorLeaveFromRight ? x + cursorXOffset : x - cursorXOffset;
                        const cursorPointY = y - POLYGON_BUFFER;
                        const commonYLeft = cursorLeaveFromRight ? rect.top + POLYGON_BUFFER : isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom;
                        const commonYRight = cursorLeaveFromRight ? isFloatingWider ? rect.top + POLYGON_BUFFER : rect.bottom : rect.top + POLYGON_BUFFER;
                        isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointOneX, cursorPointY, cursorPointTwoX, cursorPointY, rect.left, commonYLeft, rect.right, commonYRight);
                        break;
                    }
                case 'left':
                    {
                        const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
                        const cursorPointOneY = isFloatingTaller ? y + cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
                        const cursorPointTwoY = isFloatingTaller ? y - cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
                        const cursorPointX = x + POLYGON_BUFFER + 1;
                        const commonXTop = cursorLeaveFromBottom ? rect.right - POLYGON_BUFFER : isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left;
                        const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.right - POLYGON_BUFFER : rect.left : rect.right - POLYGON_BUFFER;
                        isInsidePolygon = isPointInQuadrilateral(clientX, clientY, commonXTop, rect.top, commonXBottom, rect.bottom, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY);
                        break;
                    }
                case 'right':
                    {
                        const cursorYOffset = isFloatingTaller ? POLYGON_BUFFER / 2 : POLYGON_BUFFER * 4;
                        const cursorPointOneY = isFloatingTaller ? y + cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
                        const cursorPointTwoY = isFloatingTaller ? y - cursorYOffset : cursorLeaveFromBottom ? y + cursorYOffset : y - cursorYOffset;
                        const cursorPointX = x - POLYGON_BUFFER;
                        const commonXTop = cursorLeaveFromBottom ? rect.left + POLYGON_BUFFER : isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right;
                        const commonXBottom = cursorLeaveFromBottom ? isFloatingTaller ? rect.left + POLYGON_BUFFER : rect.right : rect.left + POLYGON_BUFFER;
                        isInsidePolygon = isPointInQuadrilateral(clientX, clientY, cursorPointX, cursorPointOneY, cursorPointX, cursorPointTwoY, commonXTop, rect.top, commonXBottom, rect.bottom);
                        break;
                    }
                default:
            }
            if (!isInsidePolygon) {
                closeIfNoOpenChild();
            } else if (!hasLanded) {
                timeout.start(40, closeIfNoOpenChild);
            }
            return undefined;
        };
    };
    // eslint-disable-next-line no-underscore-dangle
    fn.__options = {
        ...options,
        blockPointerEvents
    };
    return fn;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFocus.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__126 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__92615__20 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
const isMacSafari = isMac && isSafari;
function useFocus(context, props = {}) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const { events, dataRef } = store.context;
    const { enabled = true, delay } = props;
    const blockFocusRef = __TURBOPACK__imported__module__51268__126["useRef"](false);
    // Track which reference should be blocked from re-opening after Escape/press dismissal.
    const blockedReferenceRef = __TURBOPACK__imported__module__51268__126["useRef"](null);
    const timeout = useTimeout();
    const keyboardModalityRef = __TURBOPACK__imported__module__51268__126["useRef"](true);
    __TURBOPACK__imported__module__51268__126["useEffect"](()=>{
        const domReference = store.select('domReferenceElement');
        if (!enabled) {
            return undefined;
        }
        const win = (0, __TURBOPACK__imported__module__92615__20["getWindow"])(domReference);
        // If the reference was focused and the user left the tab/window, and the
        // floating element was not open, the focus should be blocked when they
        // return to the tab/window.
        function onBlur() {
            const currentDomReference = store.select('domReferenceElement');
            if (!store.select('open') && (0, __TURBOPACK__imported__module__92615__20["isHTMLElement"])(currentDomReference) && currentDomReference === activeElement(ownerDocument(currentDomReference))) {
                blockFocusRef.current = true;
            }
        }
        function onKeyDown() {
            keyboardModalityRef.current = true;
        }
        function onPointerDown() {
            keyboardModalityRef.current = false;
        }
        return mergeCleanups(addEventListener(win, 'blur', onBlur), isMacSafari && addEventListener(win, 'keydown', onKeyDown, true), isMacSafari && addEventListener(win, 'pointerdown', onPointerDown, true));
    }, [
        store,
        enabled
    ]);
    __TURBOPACK__imported__module__51268__126["useEffect"](()=>{
        if (!enabled) {
            return undefined;
        }
        function onOpenChangeLocal(details) {
            if (details.reason === __TURBOPACK__imported__module__54906__.triggerPress || details.reason === __TURBOPACK__imported__module__54906__.escapeKey) {
                const referenceElement = store.select('domReferenceElement');
                if ((0, __TURBOPACK__imported__module__92615__20["isElement"])(referenceElement)) {
                    blockedReferenceRef.current = referenceElement;
                    blockFocusRef.current = true;
                }
            }
        }
        events.on('openchange', onOpenChangeLocal);
        return ()=>{
            events.off('openchange', onOpenChangeLocal);
        };
    }, [
        events,
        enabled,
        store
    ]);
    const reference = __TURBOPACK__imported__module__51268__126["useMemo"](()=>({
            onMouseLeave () {
                blockFocusRef.current = false;
                blockedReferenceRef.current = null;
            },
            onFocus (event) {
                const focusTarget = event.currentTarget;
                if (blockFocusRef.current) {
                    if (blockedReferenceRef.current === focusTarget) {
                        return;
                    }
                    blockFocusRef.current = false;
                    blockedReferenceRef.current = null;
                }
                const target = getTarget(event.nativeEvent);
                if ((0, __TURBOPACK__imported__module__92615__20["isElement"])(target)) {
                    // Safari fails to match `:focus-visible` if focus was initially
                    // outside the document.
                    if (isMacSafari && !event.relatedTarget) {
                        if (!keyboardModalityRef.current && !isTypeableElement(target)) {
                            return;
                        }
                    } else if (!matchesFocusVisible(target)) {
                        return;
                    }
                }
                const movedFromOtherEnabledTrigger = isTargetInsideEnabledTrigger(event.relatedTarget, store.context.triggerElements);
                const { nativeEvent, currentTarget } = event;
                const delayValue = typeof delay === 'function' ? delay() : delay;
                if (store.select('open') && movedFromOtherEnabledTrigger || delayValue === 0 || delayValue === undefined) {
                    store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerFocus, nativeEvent, currentTarget));
                    return;
                }
                timeout.start(delayValue, ()=>{
                    if (blockFocusRef.current) {
                        return;
                    }
                    store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerFocus, nativeEvent, currentTarget));
                });
            },
            onBlur (event) {
                blockFocusRef.current = false;
                blockedReferenceRef.current = null;
                const relatedTarget = event.relatedTarget;
                const nativeEvent = event.nativeEvent;
                // Hit the non-modal focus management portal guard. Focus will be
                // moved into the floating element immediately after.
                const movedToFocusGuard = (0, __TURBOPACK__imported__module__92615__20["isElement"])(relatedTarget) && relatedTarget.hasAttribute(createAttribute('focus-guard')) && relatedTarget.getAttribute('data-type') === 'outside';
                // Wait for the window blur listener to fire.
                timeout.start(0, ()=>{
                    const domReference = store.select('domReferenceElement');
                    const activeEl = activeElement(ownerDocument(domReference));
                    // Focus left the page, keep it open.
                    if (!relatedTarget && activeEl === domReference) {
                        return;
                    }
                    // When focusing the reference element (e.g. regular click), then
                    // clicking into the floating element, prevent it from hiding.
                    // Note: it must be focusable, e.g. `tabindex="-1"`.
                    // We can not rely on relatedTarget to point to the correct element
                    // as it will only point to the shadow host of the newly focused element
                    // and not the element that actually has received focus if it is located
                    // inside a shadow root.
                    if (contains(dataRef.current.floatingContext?.refs.floating.current, activeEl) || contains(domReference, activeEl) || movedToFocusGuard) {
                        return;
                    }
                    // If the next focused element is one of the triggers, do not close
                    // the floating element. The focus handler of that trigger will
                    // handle the open state.
                    const nextFocusedElement = relatedTarget ?? activeEl;
                    if (isTargetInsideEnabledTrigger(nextFocusedElement, store.context.triggerElements)) {
                        return;
                    }
                    store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerFocus, nativeEvent));
                });
            }
        }), [
        dataRef,
        store,
        timeout,
        delay
    ]);
    return __TURBOPACK__imported__module__51268__126["useMemo"](()=>enabled ? {
            reference,
            trigger: reference
        } : {}, [
        enabled,
        reference
    ]);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useHoverReferenceInteraction.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__127 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__7 = __TURBOPACK__imported__module__98057__;
var __TURBOPACK__imported__module__92615__21 = __TURBOPACK__imported__module__92615__1;
var __TURBOPACK__imported__module__32787__26 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const EMPTY_REF = {
    current: null
};
function useHoverReferenceInteraction(context, props = {}) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const { dataRef, events } = store.context;
    const { enabled = true, delay = 0, handleClose = null, mouseOnly = false, restMs = 0, move = true, triggerElementRef = EMPTY_REF, externalTree, isActiveTrigger = true, getHandleCloseContext, isClosing } = props;
    const tree = useFloatingTree(externalTree);
    const instance = useHoverInteractionSharedState(store);
    const isHoverCloseActiveRef = __TURBOPACK__imported__module__51268__127["useRef"](false);
    const handleCloseRef = useValueAsRef(handleClose);
    const delayRef = useValueAsRef(delay);
    const restMsRef = useValueAsRef(restMs);
    const enabledRef = useValueAsRef(enabled);
    const isClosingRef = useValueAsRef(isClosing);
    if (isActiveTrigger) {
        // eslint-disable-next-line no-underscore-dangle
        instance.handleCloseOptions = handleCloseRef.current?.__options;
    }
    const isClickLikeOpenEvent1 = (0, __TURBOPACK__imported__module__32787__26["useStableCallback"])(()=>{
        return isClickLikeOpenEvent(dataRef.current.openEvent?.type, instance.interactedInside);
    });
    const isRelatedTargetInsideEnabledTrigger = (0, __TURBOPACK__imported__module__32787__26["useStableCallback"])((target)=>{
        return isTargetInsideEnabledTrigger(target, store.context.triggerElements);
    });
    const isOverInactiveTrigger = (0, __TURBOPACK__imported__module__32787__26["useStableCallback"])((currentDomReference, currentTarget, target)=>{
        const allTriggers = store.context.triggerElements;
        // Fast path for normal usage where handlers are attached directly to triggers.
        if (allTriggers.hasElement(currentTarget)) {
            return !currentDomReference || !contains(currentDomReference, currentTarget);
        }
        // Fallback for delegated/wrapper usage where currentTarget may be outside the trigger map.
        if (!(0, __TURBOPACK__imported__module__92615__21["isElement"])(target)) {
            return false;
        }
        const targetElement = target;
        return allTriggers.hasMatchingElement((trigger)=>contains(trigger, targetElement)) && (!currentDomReference || !contains(currentDomReference, targetElement));
    });
    const closeWithDelay = (0, __TURBOPACK__imported__module__32787__26["useStableCallback"])((event, runElseBranch = true)=>{
        const closeDelay = getDelay(delayRef.current, 'close', instance.pointerType);
        if (closeDelay) {
            instance.openChangeTimeout.start(closeDelay, ()=>{
                store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerHover, event));
                tree?.events.emit('floating.closed', event);
            });
        } else if (runElseBranch) {
            instance.openChangeTimeout.clear();
            store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerHover, event));
            tree?.events.emit('floating.closed', event);
        }
    });
    const cleanupMouseMoveHandler = (0, __TURBOPACK__imported__module__32787__26["useStableCallback"])(()=>{
        if (!instance.handler) {
            return;
        }
        const doc = ownerDocument(store.select('domReferenceElement'));
        doc.removeEventListener('mousemove', instance.handler);
        instance.handler = undefined;
    });
    const clearPointerEvents = (0, __TURBOPACK__imported__module__32787__26["useStableCallback"])(()=>{
        clearSafePolygonPointerEventsMutation(instance);
    });
    __TURBOPACK__imported__module__51268__127["useEffect"](()=>cleanupMouseMoveHandler, [
        cleanupMouseMoveHandler
    ]);
    // When closing before opening, clear the delay timeouts to cancel it
    // from showing.
    __TURBOPACK__imported__module__51268__127["useEffect"](()=>{
        if (!enabled) {
            return undefined;
        }
        function onOpenChangeLocal(details) {
            if (!details.open) {
                isHoverCloseActiveRef.current = details.reason === __TURBOPACK__imported__module__54906__.triggerHover;
                cleanupMouseMoveHandler();
                instance.openChangeTimeout.clear();
                instance.restTimeout.clear();
                instance.blockMouseMove = true;
                instance.restTimeoutPending = false;
            } else {
                isHoverCloseActiveRef.current = false;
            }
        }
        events.on('openchange', onOpenChangeLocal);
        return ()=>{
            events.off('openchange', onOpenChangeLocal);
        };
    }, [
        enabled,
        events,
        instance,
        cleanupMouseMoveHandler
    ]);
    __TURBOPACK__imported__module__51268__127["useEffect"](()=>{
        if (!enabled) {
            return undefined;
        }
        const trigger = triggerElementRef.current ?? (isActiveTrigger ? store.select('domReferenceElement') : null);
        if (!(0, __TURBOPACK__imported__module__92615__21["isElement"])(trigger)) {
            return undefined;
        }
        function onMouseEnter(event) {
            instance.openChangeTimeout.clear();
            instance.blockMouseMove = false;
            if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
                return;
            }
            // Only rest delay is set; there's no fallback delay.
            // This will be handled by `onMouseMove`.
            const restMsValue = getRestMs(restMsRef.current);
            const openDelay = getDelay(delayRef.current, 'open', instance.pointerType);
            const eventTarget = getTarget(event);
            const currentTarget = event.currentTarget ?? null;
            const currentDomReference = store.select('domReferenceElement');
            let triggerNode = currentTarget;
            // Wrapper/delegated mode: resolve the actual trigger from the event target.
            if ((0, __TURBOPACK__imported__module__92615__21["isElement"])(eventTarget) && !store.context.triggerElements.hasElement(eventTarget)) {
                for (const triggerElement of store.context.triggerElements.elements()){
                    if (contains(triggerElement, eventTarget)) {
                        triggerNode = triggerElement;
                        break;
                    }
                }
            }
            // Wrapper/delegated mode fallback: if the wrapper contains the active trigger,
            // treat this as re-entering that active trigger.
            if ((0, __TURBOPACK__imported__module__92615__21["isElement"])(currentTarget) && (0, __TURBOPACK__imported__module__92615__21["isElement"])(currentDomReference) && !store.context.triggerElements.hasElement(currentTarget) && contains(currentTarget, currentDomReference)) {
                triggerNode = currentDomReference;
            }
            const isOverInactive = triggerNode == null ? false : isOverInactiveTrigger(currentDomReference, triggerNode, eventTarget);
            const isOpen = store.select('open');
            const isInClosingTransition = isClosingRef.current?.() ?? store.select('transitionStatus') === 'ending';
            const isHoverCloseTransition = !isOpen && isInClosingTransition && isHoverCloseActiveRef.current;
            const isReenteringSameTriggerDuringCloseTransition = !isOverInactive && (0, __TURBOPACK__imported__module__92615__21["isElement"])(triggerNode) && (0, __TURBOPACK__imported__module__92615__21["isElement"])(currentDomReference) && contains(currentDomReference, triggerNode) && isHoverCloseTransition;
            const isRestOnlyDelay = restMsValue > 0 && !openDelay;
            const shouldOpenImmediately = isOverInactive && (isOpen || isHoverCloseTransition) || isReenteringSameTriggerDuringCloseTransition;
            const shouldOpen = !isOpen || isOverInactive;
            // Open immediately when moving between triggers while open, or during
            // a hover-driven close transition (including same-trigger re-entry).
            if (shouldOpenImmediately) {
                store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerHover, event, triggerNode));
                return;
            }
            if (isRestOnlyDelay) {
                return;
            }
            if (openDelay) {
                instance.openChangeTimeout.start(openDelay, ()=>{
                    if (shouldOpen) {
                        store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerHover, event, triggerNode));
                    }
                });
            } else if (shouldOpen) {
                store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerHover, event, triggerNode));
            }
        }
        function onMouseLeave(event) {
            if (isClickLikeOpenEvent1()) {
                clearPointerEvents();
                return;
            }
            cleanupMouseMoveHandler();
            const domReferenceElement = store.select('domReferenceElement');
            const doc = ownerDocument(domReferenceElement);
            instance.restTimeout.clear();
            instance.restTimeoutPending = false;
            const handleCloseContextBase = dataRef.current.floatingContext ?? getHandleCloseContext?.();
            const ignoreRelatedTargetTrigger = isRelatedTargetInsideEnabledTrigger(event.relatedTarget);
            if (ignoreRelatedTargetTrigger) {
                return;
            }
            if (handleCloseRef.current && handleCloseContextBase) {
                if (!store.select('open')) {
                    instance.openChangeTimeout.clear();
                }
                const currentTrigger = triggerElementRef.current;
                instance.handler = handleCloseRef.current({
                    ...handleCloseContextBase,
                    tree,
                    x: event.clientX,
                    y: event.clientY,
                    onClose () {
                        clearPointerEvents();
                        cleanupMouseMoveHandler();
                        if (enabledRef.current && !isClickLikeOpenEvent1() && currentTrigger === store.select('domReferenceElement')) {
                            closeWithDelay(event, true);
                        }
                    }
                });
                doc.addEventListener('mousemove', instance.handler);
                instance.handler(event);
                return;
            }
            const shouldClose = instance.pointerType === 'touch' ? !contains(store.select('floatingElement'), event.relatedTarget) : true;
            if (shouldClose) {
                closeWithDelay(event);
            }
        }
        if (move) {
            return mergeCleanups(addEventListener(trigger, 'mousemove', onMouseEnter, {
                once: true
            }), addEventListener(trigger, 'mouseenter', onMouseEnter), addEventListener(trigger, 'mouseleave', onMouseLeave));
        }
        return mergeCleanups(addEventListener(trigger, 'mouseenter', onMouseEnter), addEventListener(trigger, 'mouseleave', onMouseLeave));
    }, [
        cleanupMouseMoveHandler,
        clearPointerEvents,
        dataRef,
        delayRef,
        closeWithDelay,
        store,
        enabled,
        handleCloseRef,
        instance,
        isActiveTrigger,
        isOverInactiveTrigger,
        isClickLikeOpenEvent1,
        isRelatedTargetInsideEnabledTrigger,
        mouseOnly,
        move,
        restMsRef,
        triggerElementRef,
        tree,
        enabledRef,
        getHandleCloseContext,
        isClosingRef
    ]);
    return __TURBOPACK__imported__module__51268__127["useMemo"](()=>{
        if (!enabled) {
            return undefined;
        }
        function setPointerRef(event) {
            instance.pointerType = event.pointerType;
        }
        return {
            onPointerDown: setPointerRef,
            onPointerEnter: setPointerRef,
            onMouseMove (event) {
                const { nativeEvent } = event;
                const trigger = event.currentTarget;
                const currentDomReference = store.select('domReferenceElement');
                const currentOpen = store.select('open');
                const isOverInactive = isOverInactiveTrigger(currentDomReference, trigger, event.target);
                if (mouseOnly && !isMouseLikePointerType(instance.pointerType)) {
                    return;
                }
                if (currentOpen && isOverInactive && instance.handleCloseOptions?.blockPointerEvents) {
                    const floatingElement = store.select('floatingElement');
                    if (floatingElement) {
                        const scopeElement = instance.handleCloseOptions?.getScope?.() ?? trigger.ownerDocument.body;
                        applySafePolygonPointerEventsMutation(instance, {
                            scopeElement,
                            referenceElement: trigger,
                            floatingElement
                        });
                    }
                }
                const restMsValue = getRestMs(restMsRef.current);
                if (currentOpen && !isOverInactive || restMsValue === 0) {
                    return;
                }
                if (!isOverInactive && instance.restTimeoutPending && event.movementX ** 2 + event.movementY ** 2 < 2) {
                    return;
                }
                instance.restTimeout.clear();
                function handleMouseMove() {
                    instance.restTimeoutPending = false;
                    // A delayed hover open should not override a click-like open that happened
                    // while the hover delay was pending.
                    if (isClickLikeOpenEvent1()) {
                        return;
                    }
                    const latestOpen = store.select('open');
                    if (!instance.blockMouseMove && (!latestOpen || isOverInactive)) {
                        store.setOpen(true, createChangeEventDetails(__TURBOPACK__imported__module__54906__.triggerHover, nativeEvent, trigger));
                    }
                }
                if (instance.pointerType === 'touch') {
                    __TURBOPACK__imported__module__98057__7["flushSync"](()=>{
                        handleMouseMove();
                    });
                } else if (isOverInactive && currentOpen) {
                    handleMouseMove();
                } else {
                    instance.restTimeoutPending = true;
                    instance.restTimeout.start(restMsValue, handleMouseMove);
                }
            }
        };
    }, [
        enabled,
        instance,
        isClickLikeOpenEvent1,
        isOverInactiveTrigger,
        mouseOnly,
        store,
        restMsRef
    ]);
}
var __TURBOPACK__imported__module__19996__27 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__81833__4 = __TURBOPACK__imported__module__81833__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/getPseudoElementBounds.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__68 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__92615__2 = __TURBOPACK__imported__module__92615__1;
;
function getPseudoElementBounds(element) {
    const elementRect = element.getBoundingClientRect();
    // Avoid "Not implemented: window.getComputedStyle(elt, pseudoElt)"
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const win = (0, __TURBOPACK__imported__module__92615__2["getWindow"])(element);
    const beforeStyles = win.getComputedStyle(element, '::before');
    const afterStyles = win.getComputedStyle(element, '::after');
    const hasPseudoElements = beforeStyles.content !== 'none' || afterStyles.content !== 'none';
    if (!hasPseudoElements) {
        return elementRect;
    }
    // Get dimensions of pseudo-elements
    const beforeWidth = parseFloat(beforeStyles.width) || 0;
    const beforeHeight = parseFloat(beforeStyles.height) || 0;
    const afterWidth = parseFloat(afterStyles.width) || 0;
    const afterHeight = parseFloat(afterStyles.height) || 0;
    // Calculate max dimensions including pseudo-elements
    const totalWidth = Math.max(elementRect.width, beforeWidth, afterWidth);
    const totalHeight = Math.max(elementRect.height, beforeHeight, afterHeight);
    // Calculate the differences to extend the bounds
    const widthDiff = totalWidth - elementRect.width;
    const heightDiff = totalHeight - elementRect.height;
    return {
        left: elementRect.left - widthDiff / 2,
        right: elementRect.right + widthDiff / 2,
        top: elementRect.top - heightDiff / 2,
        bottom: elementRect.bottom + heightDiff / 2
    };
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/item/CompositeItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__24659__17 = __TURBOPACK__imported__module__24659__;
var __TURBOPACK__imported__module__19996__28 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/item/useCompositeItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__128 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__90741__2 = __TURBOPACK__imported__module__90741__;
var __TURBOPACK__imported__module__19376__ = __turbopack_context__.i(19376);
'use client';
;
;
;
;
function useCompositeItem(params = {}) {
    const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } = (0, __TURBOPACK__imported__module__19376__["useCompositeRootContext"])();
    const { ref, index } = useCompositeListItem(params);
    const isHighlighted = highlightedIndex === index;
    const itemRef = __TURBOPACK__imported__module__51268__128["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__90741__2["useMergedRefs"])(ref, itemRef);
    const compositeProps = __TURBOPACK__imported__module__51268__128["useMemo"](()=>({
            tabIndex: isHighlighted ? 0 : -1,
            onFocus () {
                onHighlightedIndexChange(index);
            },
            onMouseMove () {
                const item = itemRef.current;
                if (!highlightItemOnHover || !item) {
                    return;
                }
                const disabled = item.hasAttribute('disabled') || item.ariaDisabled === 'true';
                if (!isHighlighted && !disabled) {
                    item.focus();
                }
            }
        }), [
        isHighlighted,
        onHighlightedIndexChange,
        index,
        highlightItemOnHover
    ]);
    return {
        compositeProps,
        compositeRef: mergedRef,
        index
    };
}
'use client';
;
;
;
function CompositeItem(componentProps) {
    const { render, className, style, state = __TURBOPACK__imported__module__24659__17["EMPTY_OBJECT"], props = __TURBOPACK__imported__module__24659__17["EMPTY_ARRAY"], refs = __TURBOPACK__imported__module__24659__17["EMPTY_ARRAY"], metadata, stateAttributesMapping, tag = 'div', ...elementProps } = componentProps;
    const { compositeProps, compositeRef } = useCompositeItem({
        metadata
    });
    return (0, __TURBOPACK__imported__module__19996__28["useRenderElement"])(tag, componentProps, {
        state,
        ref: [
            ...refs,
            compositeRef
        ],
        props: [
            compositeProps,
            ...props,
            elementProps
        ],
        stateAttributesMapping
    });
}
var __TURBOPACK__imported__module__19376__1 = __TURBOPACK__imported__module__19376__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/utils/findRootOwnerId.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__22 = __TURBOPACK__imported__module__92615__1;
;
function findRootOwnerId(node) {
    if ((0, __TURBOPACK__imported__module__92615__22["isHTMLElement"])(node) && node.hasAttribute('data-rootownerid')) {
        return node.getAttribute('data-rootownerid') ?? undefined;
    }
    if ((0, __TURBOPACK__imported__module__92615__22["isLastTraversableNode"])(node)) {
        return undefined;
    }
    return findRootOwnerId((0, __TURBOPACK__imported__module__92615__22["getParentNode"])(node));
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/popups/useTriggerFocusGuards.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__129 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__8 = __TURBOPACK__imported__module__98057__;
var __TURBOPACK__imported__module__32787__27 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
'use client';
;
;
;
;
;
;
function useTriggerFocusGuards(store, triggerElementRef) {
    const preFocusGuardRef = __TURBOPACK__imported__module__51268__129["useRef"](null);
    const handlePreFocusGuardFocus = (0, __TURBOPACK__imported__module__32787__27["useStableCallback"])((event)=>{
        __TURBOPACK__imported__module__98057__8["flushSync"](()=>{
            store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.focusOut, event.nativeEvent, event.currentTarget));
        });
        const previousTabbable = getTabbableBeforeElement(preFocusGuardRef.current);
        previousTabbable?.focus();
    });
    const handleFocusTargetFocus = (0, __TURBOPACK__imported__module__32787__27["useStableCallback"])((event)=>{
        const positionerElement = store.select('positionerElement');
        if (positionerElement && isOutsideEvent(event, positionerElement)) {
            store.context.beforeContentFocusGuardRef.current?.focus();
        } else {
            __TURBOPACK__imported__module__98057__8["flushSync"](()=>{
                store.setOpen(false, createChangeEventDetails(__TURBOPACK__imported__module__54906__.focusOut, event.nativeEvent, event.currentTarget));
            });
            let nextTabbable = getTabbableAfterElement(store.context.triggerFocusTargetRef.current || triggerElementRef.current);
            while(nextTabbable !== null && contains(positionerElement, nextTabbable)){
                const prevTabbable = nextTabbable;
                nextTabbable = getNextTabbable(nextTabbable);
                if (nextTabbable === prevTabbable) {
                    break;
                }
            }
            nextTabbable?.focus();
        }
    });
    return {
        preFocusGuardRef,
        handlePreFocusGuardFocus,
        handleFocusTargetFocus
    };
}
var __TURBOPACK__imported__module__54906__ = __TURBOPACK__imported__module__54906__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useMixedToggleClickHandler.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__130 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__18 = __TURBOPACK__imported__module__24659__;
'use client';
;
;
;
function useMixedToggleClickHandler(params) {
    const { enabled = true, mouseDownAction, open } = params;
    const ignoreClickRef = __TURBOPACK__imported__module__51268__130["useRef"](false);
    return __TURBOPACK__imported__module__51268__130["useMemo"](()=>{
        if (!enabled) {
            return __TURBOPACK__imported__module__24659__18["EMPTY_OBJECT"];
        }
        return {
            onMouseDown: (event)=>{
                if (mouseDownAction === 'open' && !open || mouseDownAction === 'close' && open) {
                    ignoreClickRef.current = true;
                    ownerDocument(event.currentTarget).addEventListener('click', ()=>{
                        ignoreClickRef.current = false;
                    }, {
                        once: true
                    });
                }
            },
            onClick: (event)=>{
                if (ignoreClickRef.current) {
                    ignoreClickRef.current = false;
                    event.preventBaseUIHandler();
                }
            }
        };
    }, [
        enabled,
        mouseDownAction,
        open
    ]);
}
var __TURBOPACK__imported__module__8063__45 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const BOUNDARY_OFFSET = 2;
const MenuTrigger = fastComponentRef(function MenuTrigger(componentProps, forwardedRef) {
    const { render, className, disabled: disabledProp = false, nativeButton = true, id: idProp, openOnHover: openOnHoverProp, delay = 100, closeDelay = 0, handle, payload, style, ...elementProps } = componentProps;
    const rootContext = useMenuRootContext(true);
    const store = handle?.store ?? rootContext?.store;
    if (!store) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__17["default"])(85));
    }
    const thisTriggerId = useBaseUiId(idProp);
    const isTriggerActive = store.useState('isTriggerActive', thisTriggerId);
    const floatingRootContext = store.useState('floatingRootContext');
    const isOpenedByThisTrigger = store.useState('isOpenedByTrigger', thisTriggerId);
    const triggerElementRef = __TURBOPACK__imported__module__51268__125["useRef"](null);
    const parent = useMenuParent();
    const compositeRootContext = (0, __TURBOPACK__imported__module__19376__1["useCompositeRootContext"])(true);
    const floatingTreeRootFromContext = useFloatingTree();
    const floatingTreeRoot = __TURBOPACK__imported__module__51268__125["useMemo"](()=>{
        return floatingTreeRootFromContext ?? new FloatingTreeStore();
    }, [
        floatingTreeRootFromContext
    ]);
    const floatingNodeId = useFloatingNodeId(floatingTreeRoot);
    const floatingParentNodeId = useFloatingParentNodeId();
    const { registerTrigger, isMountedByThisTrigger } = useTriggerDataForwarding(thisTriggerId, triggerElementRef, store, {
        payload,
        closeDelay,
        parent,
        floatingTreeRoot,
        floatingNodeId,
        floatingParentNodeId,
        keyboardEventRelay: compositeRootContext?.relayKeyboardEvent
    });
    const isInMenubar = parent.type === 'menubar';
    const rootDisabled = store.useState('disabled');
    const disabled = disabledProp || rootDisabled || isInMenubar && parent.context.disabled;
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__81833__4["useButton"])({
        disabled,
        native: nativeButton
    });
    __TURBOPACK__imported__module__51268__125["useEffect"](()=>{
        if (!isOpenedByThisTrigger && parent.type === undefined) {
            store.context.allowMouseUpTriggerRef.current = false;
        }
    }, [
        store,
        isOpenedByThisTrigger,
        parent.type
    ]);
    const triggerRef = __TURBOPACK__imported__module__51268__125["useRef"](null);
    const allowMouseUpTriggerTimeout = useTimeout();
    const handleDocumentMouseUp = (0, __TURBOPACK__imported__module__32787__25["useStableCallback"])((mouseEvent)=>{
        if (!triggerRef.current) {
            return;
        }
        allowMouseUpTriggerTimeout.clear();
        store.context.allowMouseUpTriggerRef.current = false;
        const mouseUpTarget = mouseEvent.target;
        if (contains(triggerRef.current, mouseUpTarget) || contains(store.select('positionerElement'), mouseUpTarget) || mouseUpTarget === triggerRef.current) {
            return;
        }
        if (mouseUpTarget != null && findRootOwnerId(mouseUpTarget) === store.select('rootId')) {
            return;
        }
        const bounds = getPseudoElementBounds(triggerRef.current);
        if (mouseEvent.clientX >= bounds.left - BOUNDARY_OFFSET && mouseEvent.clientX <= bounds.right + BOUNDARY_OFFSET && mouseEvent.clientY >= bounds.top - BOUNDARY_OFFSET && mouseEvent.clientY <= bounds.bottom + BOUNDARY_OFFSET) {
            return;
        }
        floatingTreeRoot.events.emit('close', {
            domEvent: mouseEvent,
            reason: __TURBOPACK__imported__module__54906__.cancelOpen
        });
    });
    __TURBOPACK__imported__module__51268__125["useEffect"](()=>{
        if (isOpenedByThisTrigger && store.select('lastOpenChangeReason') === __TURBOPACK__imported__module__54906__.triggerHover) {
            const doc = ownerDocument(triggerRef.current);
            doc.addEventListener('mouseup', handleDocumentMouseUp, {
                once: true
            });
        }
    }, [
        isOpenedByThisTrigger,
        handleDocumentMouseUp,
        store
    ]);
    const parentMenubarHasSubmenuOpen = isInMenubar && parent.context.hasSubmenuOpen;
    const openOnHover = openOnHoverProp ?? parentMenubarHasSubmenuOpen;
    const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
        enabled: openOnHover && !disabled && parent.type !== 'context-menu' && (!isInMenubar || parentMenubarHasSubmenuOpen && !isMountedByThisTrigger),
        handleClose: safePolygon({
            blockPointerEvents: !isInMenubar
        }),
        mouseOnly: true,
        move: false,
        restMs: parent.type === undefined ? delay : undefined,
        delay: {
            close: closeDelay
        },
        triggerElementRef,
        externalTree: floatingTreeRoot,
        isActiveTrigger: isTriggerActive,
        isClosing: ()=>store.select('transitionStatus') === 'ending'
    });
    // Whether to ignore clicks to open the menu.
    // `lastOpenChangeReason` doesn't need to be reactive here, as we need to run this
    // only when `isOpenedByThisTrigger` changes.
    const stickIfOpen = useStickIfOpen(isOpenedByThisTrigger, store.select('lastOpenChangeReason'));
    const click = useClick(floatingRootContext, {
        enabled: !disabled && parent.type !== 'context-menu',
        event: isOpenedByThisTrigger && isInMenubar ? 'click' : 'mousedown',
        toggle: true,
        ignoreMouse: false,
        stickIfOpen: parent.type === undefined ? stickIfOpen : false
    });
    const focus = useFocus(floatingRootContext, {
        enabled: !disabled && parentMenubarHasSubmenuOpen
    });
    const mixedToggleHandlers = useMixedToggleClickHandler({
        open: isOpenedByThisTrigger,
        enabled: isInMenubar,
        mouseDownAction: 'open'
    });
    const localInteractionProps = useInteractions([
        click,
        focus
    ]);
    const state = {
        disabled,
        open: isOpenedByThisTrigger
    };
    const rootTriggerProps = store.useState('triggerProps', isMountedByThisTrigger);
    const ref = [
        triggerRef,
        forwardedRef,
        buttonRef,
        registerTrigger,
        triggerElementRef
    ];
    const props = [
        localInteractionProps.getReferenceProps(),
        hoverProps ?? __TURBOPACK__imported__module__24659__16["EMPTY_OBJECT"],
        rootTriggerProps,
        {
            'aria-haspopup': 'menu',
            id: thisTriggerId,
            onMouseDown: (event)=>{
                if (store.select('open')) {
                    return;
                }
                // mousedown -> mouseup on menu item should not trigger it within 200ms.
                allowMouseUpTriggerTimeout.start(200, ()=>{
                    store.context.allowMouseUpTriggerRef.current = true;
                });
                const doc = ownerDocument(event.currentTarget);
                doc.addEventListener('mouseup', handleDocumentMouseUp, {
                    once: true
                });
            }
        },
        isInMenubar ? {
            role: 'menuitem'
        } : {},
        mixedToggleHandlers,
        elementProps,
        getButtonProps
    ];
    const { preFocusGuardRef, handlePreFocusGuardFocus, handleFocusTargetFocus } = useTriggerFocusGuards(store, triggerElementRef);
    const element = (0, __TURBOPACK__imported__module__19996__27["useRenderElement"])('button', componentProps, {
        enabled: !isInMenubar,
        stateAttributesMapping: pressableTriggerOpenStateMapping,
        state,
        ref,
        props
    });
    if (isInMenubar) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__45["jsx"])(CompositeItem, {
            tag: "button",
            render: render,
            className: className,
            style: style,
            state: state,
            refs: ref,
            props: props,
            stateAttributesMapping: pressableTriggerOpenStateMapping
        });
    }
    // A fragment with key is required to ensure that the `element` is mounted to the same DOM node
    // regardless of whether the focus guards are rendered or not.
    if (isOpenedByThisTrigger) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__45["jsxs"])(__TURBOPACK__imported__module__51268__125["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__45["jsx"])(FocusGuard, {
                    ref: preFocusGuardRef,
                    onFocus: handlePreFocusGuardFocus
                }, `${thisTriggerId}-pre-focus-guard`),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__45["jsx"])(__TURBOPACK__imported__module__51268__125["Fragment"], {
                    children: element
                }, thisTriggerId),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__45["jsx"])(FocusGuard, {
                    ref: store.context.triggerFocusTargetRef,
                    onFocus: handleFocusTargetFocus
                }, `${thisTriggerId}-post-focus-guard`)
            ]
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__45["jsx"])(__TURBOPACK__imported__module__51268__125["Fragment"], {
        children: element
    }, thisTriggerId);
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
/**
 * Determines whether to ignore clicks after a hover-open.
 */ function useStickIfOpen(open, openReason) {
    const stickIfOpenTimeout = useTimeout();
    const [stickIfOpen, setStickIfOpen] = __TURBOPACK__imported__module__51268__125["useState"](false);
    (0, __TURBOPACK__imported__module__91900__30["useIsoLayoutEffect"])(()=>{
        if (open && openReason === 'trigger-hover') {
            // Only allow "patient" clicks to close the menu if it's open.
            // If they clicked within 500ms of the menu opening, keep it open.
            setStickIfOpen(true);
            stickIfOpenTimeout.start(PATIENT_CLICK_THRESHOLD, ()=>{
                setStickIfOpen(false);
            });
        } else if (!open) {
            stickIfOpenTimeout.clear();
            setStickIfOpen(false);
        }
    }, [
        open,
        openReason,
        stickIfOpenTimeout
    ]);
    return stickIfOpen;
}
function useMenuParent() {
    const contextMenuContext = useContextMenuRootContext(true);
    const parentContext = useMenuRootContext(true);
    const menubarContext = useMenubarContext(true);
    const parent = __TURBOPACK__imported__module__51268__125["useMemo"](()=>{
        if (menubarContext) {
            return {
                type: 'menubar',
                context: menubarContext
            };
        }
        // Ensure this is not a Menu nested inside ContextMenu.Trigger.
        // ContextMenu parentContext is always undefined as ContextMenu.Root is instantiated with
        // <MenuRootContext.Provider value={undefined}>
        if (contextMenuContext && !parentContext) {
            return {
                type: 'context-menu',
                context: contextMenuContext
            };
        }
        return {
            type: undefined
        };
    }, [
        contextMenuContext,
        parentContext,
        menubarContext
    ]);
    return parent;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/viewport/MenuViewport.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__69 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__131 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__29 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/usePopupViewport.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__132 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__9 = __TURBOPACK__imported__module__98057__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/usePreviousValue.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__133 = __TURBOPACK__imported__module__51268__;
'use client';
;
function usePreviousValue(value1) {
    const [state, setState] = __TURBOPACK__imported__module__51268__133["useState"]({
        current: value1,
        previous: null
    });
    if (value1 !== state.current) {
        setState({
            current: value1,
            previous: state.current
        });
    }
    return state.previous;
}
var __TURBOPACK__imported__module__91900__31 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__28 = __TURBOPACK__imported__module__32787__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/usePopupAutoResize.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__134 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__32 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__29 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__24659__19 = __TURBOPACK__imported__module__24659__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/getCssDimensions.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__23 = __TURBOPACK__imported__module__92615__1;
;
;
function getCssDimensions1(element) {
    const css = (0, __TURBOPACK__imported__module__92615__23["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__92615__23["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height
    };
}
'use client';
;
;
;
;
;
;
;
const DEFAULT_ENABLED = ()=>true;
function usePopupAutoResize(parameters) {
    const { popupElement, positionerElement, content, mounted, enabled = DEFAULT_ENABLED, onMeasureLayout: onMeasureLayoutParam, onMeasureLayoutComplete: onMeasureLayoutCompleteParam, side, direction } = parameters;
    const runOnceAnimationsFinish = useAnimationsFinished(popupElement, true, false);
    const animationFrame = useAnimationFrame();
    const committedDimensionsRef = __TURBOPACK__imported__module__51268__134["useRef"](null);
    const liveDimensionsRef = __TURBOPACK__imported__module__51268__134["useRef"](null);
    const isInitialRenderRef = __TURBOPACK__imported__module__51268__134["useRef"](true);
    const restoreAnchoringStylesRef = __TURBOPACK__imported__module__51268__134["useRef"](__TURBOPACK__imported__module__24659__19["NOOP"]);
    const onMeasureLayout = (0, __TURBOPACK__imported__module__32787__29["useStableCallback"])(onMeasureLayoutParam);
    const onMeasureLayoutComplete = (0, __TURBOPACK__imported__module__32787__29["useStableCallback"])(onMeasureLayoutCompleteParam);
    const anchoringStyles = __TURBOPACK__imported__module__51268__134["useMemo"](()=>{
        // Ensure popup size transitions correctly when anchored to `bottom` (side=top) or `right` (side=left).
        let isOriginSide = side === 'top';
        let isPhysicalLeft = side === 'left';
        if (direction === 'rtl') {
            isOriginSide = isOriginSide || side === 'inline-end';
            isPhysicalLeft = isPhysicalLeft || side === 'inline-end';
        } else {
            isOriginSide = isOriginSide || side === 'inline-start';
            isPhysicalLeft = isPhysicalLeft || side === 'inline-start';
        }
        return isOriginSide ? {
            position: 'absolute',
            [side === 'top' ? 'bottom' : 'top']: '0',
            [isPhysicalLeft ? 'right' : 'left']: '0'
        } : __TURBOPACK__imported__module__24659__19["EMPTY_OBJECT"];
    }, [
        side,
        direction
    ]);
    (0, __TURBOPACK__imported__module__91900__32["useIsoLayoutEffect"])(()=>{
        // Reset the state when the popup is closed.
        if (!mounted || !enabled() || typeof ResizeObserver !== 'function') {
            restoreAnchoringStylesRef.current = __TURBOPACK__imported__module__24659__19["NOOP"];
            isInitialRenderRef.current = true;
            committedDimensionsRef.current = null;
            liveDimensionsRef.current = null;
            return undefined;
        }
        if (!popupElement || !positionerElement) {
            return undefined;
        }
        restoreAnchoringStylesRef.current = applyElementStyles(popupElement, anchoringStyles);
        const observer = new ResizeObserver((entries)=>{
            const entry = entries[0];
            if (entry) {
                liveDimensionsRef.current = {
                    width: Math.ceil(entry.borderBoxSize[0].inlineSize),
                    height: Math.ceil(entry.borderBoxSize[0].blockSize)
                };
            }
        });
        observer.observe(popupElement);
        // Measure the rendered size to enable transitions:
        setPopupCssSize(popupElement, 'auto');
        const restorePopupPosition = overrideElementStyle(popupElement, 'position', 'static');
        const restorePopupTransform = overrideElementStyle(popupElement, 'transform', 'none');
        const restorePopupScale = overrideElementStyle(popupElement, 'scale', '1');
        const restorePositionerAvailableSize = applyElementStyles(positionerElement, {
            '--available-width': 'max-content',
            '--available-height': 'max-content'
        });
        function restoreMeasurementOverrides() {
            restorePopupPosition();
            restorePopupTransform();
            restorePositionerAvailableSize();
        }
        function restoreMeasurementOverridesIncludingScale() {
            restoreMeasurementOverrides();
            restorePopupScale();
        }
        onMeasureLayout?.();
        // Initial render (for each time the popup opens).
        if (isInitialRenderRef.current || committedDimensionsRef.current === null) {
            setPositionerCssSize(positionerElement, 'max-content');
            const dimensions = getCssDimensions1(popupElement);
            committedDimensionsRef.current = dimensions;
            setPositionerCssSize(positionerElement, dimensions);
            restoreMeasurementOverridesIncludingScale();
            onMeasureLayoutComplete?.(null, dimensions);
            isInitialRenderRef.current = false;
            return ()=>{
                observer.disconnect();
                restoreAnchoringStylesRef.current();
                restoreAnchoringStylesRef.current = __TURBOPACK__imported__module__24659__19["NOOP"];
            };
        }
        // Subsequent renders while open (when `content` changes).
        setPopupCssSize(popupElement, 'auto');
        setPositionerCssSize(positionerElement, 'max-content');
        const previousDimensions = committedDimensionsRef.current ?? liveDimensionsRef.current;
        const newDimensions = getCssDimensions1(popupElement);
        // Commit immediately so future content changes have a stable previous size, even if
        // ResizeObserver runs after this point.
        committedDimensionsRef.current = newDimensions;
        if (!previousDimensions) {
            setPositionerCssSize(positionerElement, newDimensions);
            restoreMeasurementOverridesIncludingScale();
            onMeasureLayoutComplete?.(null, newDimensions);
            return ()=>{
                observer.disconnect();
                animationFrame.cancel();
                restoreAnchoringStylesRef.current();
                restoreAnchoringStylesRef.current = __TURBOPACK__imported__module__24659__19["NOOP"];
            };
        }
        setPopupCssSize(popupElement, previousDimensions);
        restoreMeasurementOverridesIncludingScale();
        onMeasureLayoutComplete?.(previousDimensions, newDimensions);
        setPositionerCssSize(positionerElement, newDimensions);
        const abortController = new AbortController();
        animationFrame.request(()=>{
            setPopupCssSize(popupElement, newDimensions);
            runOnceAnimationsFinish(()=>{
                popupElement.style.setProperty('--popup-width', 'auto');
                popupElement.style.setProperty('--popup-height', 'auto');
            }, abortController.signal);
        });
        return ()=>{
            observer.disconnect();
            abortController.abort();
            animationFrame.cancel();
            restoreAnchoringStylesRef.current();
            restoreAnchoringStylesRef.current = __TURBOPACK__imported__module__24659__19["NOOP"];
        };
    }, [
        content,
        popupElement,
        positionerElement,
        runOnceAnimationsFinish,
        animationFrame,
        enabled,
        mounted,
        onMeasureLayout,
        onMeasureLayoutComplete,
        anchoringStyles
    ]);
}
function overrideElementStyle(element, property, value1) {
    const originalValue = element.style.getPropertyValue(property);
    element.style.setProperty(property, value1);
    return ()=>{
        element.style.setProperty(property, originalValue);
    };
}
function applyElementStyles(element, styles) {
    const restorers = [];
    for (const [key, value1] of Object.entries(styles)){
        restorers.push(overrideElementStyle(element, key, value1));
    }
    return restorers.length ? ()=>{
        restorers.forEach((restore)=>restore());
    } : __TURBOPACK__imported__module__24659__19["NOOP"];
}
function setPopupCssSize(popupElement, size) {
    const width = size === 'auto' ? 'auto' : `${size.width}px`;
    const height = size === 'auto' ? 'auto' : `${size.height}px`;
    popupElement.style.setProperty('--popup-width', width);
    popupElement.style.setProperty('--popup-height', height);
}
function setPositionerCssSize(positionerElement, size) {
    const width = size === 'max-content' ? 'max-content' : `${size.width}px`;
    const height = size === 'max-content' ? 'max-content' : `${size.height}px`;
    positionerElement.style.setProperty('--positioner-width', width);
    positionerElement.style.setProperty('--positioner-height', height);
}
var __TURBOPACK__imported__module__8063__46 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
function usePopupViewport(parameters) {
    const { store, side, cssVars, children } = parameters;
    const direction = useDirection();
    const activeTrigger = store.useState('activeTriggerElement');
    const activeTriggerId = store.useState('activeTriggerId');
    const open = store.useState('open');
    const payload = store.useState('payload');
    const mounted = store.useState('mounted');
    const popupElement = store.useState('popupElement');
    const positionerElement = store.useState('positionerElement');
    const previousActiveTrigger = usePreviousValue(open ? activeTrigger : null);
    // Remount current content on trigger changes (and once more when payload lags) to avoid DOM reuse flashes.
    // The key bumps immediately on trigger switches, then again if the payload arrives on a later render.
    const currentContentKey = usePopupContentKey(activeTriggerId, payload);
    const capturedNodeRef = __TURBOPACK__imported__module__51268__132["useRef"](null);
    const [previousContentNode, setPreviousContentNode] = __TURBOPACK__imported__module__51268__132["useState"](null);
    const [newTriggerOffset, setNewTriggerOffset] = __TURBOPACK__imported__module__51268__132["useState"](null);
    const currentContainerRef = __TURBOPACK__imported__module__51268__132["useRef"](null);
    const previousContainerRef = __TURBOPACK__imported__module__51268__132["useRef"](null);
    const onAnimationsFinished = useAnimationsFinished(currentContainerRef, true, false);
    const cleanupFrame = useAnimationFrame();
    const [previousContentDimensions, setPreviousContentDimensions] = __TURBOPACK__imported__module__51268__132["useState"](null);
    const [showStartingStyleAttribute, setShowStartingStyleAttribute] = __TURBOPACK__imported__module__51268__132["useState"](false);
    (0, __TURBOPACK__imported__module__91900__31["useIsoLayoutEffect"])(()=>{
        store.set('hasViewport', true);
        return ()=>{
            store.set('hasViewport', false);
        };
    }, [
        store
    ]);
    const handleMeasureLayout = (0, __TURBOPACK__imported__module__32787__28["useStableCallback"])(()=>{
        currentContainerRef.current?.style.setProperty('animation', 'none');
        currentContainerRef.current?.style.setProperty('transition', 'none');
        previousContainerRef.current?.style.setProperty('display', 'none');
    });
    const handleMeasureLayoutComplete = (0, __TURBOPACK__imported__module__32787__28["useStableCallback"])((previousDimensions)=>{
        currentContainerRef.current?.style.removeProperty('animation');
        currentContainerRef.current?.style.removeProperty('transition');
        previousContainerRef.current?.style.removeProperty('display');
        if (previousDimensions) {
            setPreviousContentDimensions(previousDimensions);
        }
    });
    const lastHandledTriggerRef = __TURBOPACK__imported__module__51268__132["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__31["useIsoLayoutEffect"])(()=>{
        // When a trigger changes, set the captured children HTML to state,
        // so we can render both new and old content.
        if (activeTrigger && previousActiveTrigger && activeTrigger !== previousActiveTrigger && lastHandledTriggerRef.current !== activeTrigger && capturedNodeRef.current) {
            setPreviousContentNode(capturedNodeRef.current);
            setShowStartingStyleAttribute(true);
            // Calculate the relative position between the previous and new trigger,
            // so we can pass it to the style hook for animation purposes.
            const offset = calculateRelativePosition(previousActiveTrigger, activeTrigger);
            setNewTriggerOffset(offset);
            cleanupFrame.request(()=>{
                __TURBOPACK__imported__module__98057__9["flushSync"](()=>{
                    setShowStartingStyleAttribute(false);
                });
                onAnimationsFinished(()=>{
                    setPreviousContentNode(null);
                    setPreviousContentDimensions(null);
                    capturedNodeRef.current = null;
                });
            });
            lastHandledTriggerRef.current = activeTrigger;
        }
    }, [
        activeTrigger,
        previousActiveTrigger,
        previousContentNode,
        onAnimationsFinished,
        cleanupFrame
    ]);
    // Capture a clone of the current content DOM subtree when not transitioning.
    // We can't store previous React nodes as they may be stateful; instead we capture DOM clones for visual continuity.
    (0, __TURBOPACK__imported__module__91900__31["useIsoLayoutEffect"])(()=>{
        // When a transition is in progress, we store the next content in capturedNodeRef.
        // This handles the case where the trigger changes multiple times before the transition finishes.
        // We want to always capture the latest content for the previous snapshot.
        // So clicking quickly on T1, T2, T3 will result in the following sequence:
        // 1. T1 -> T2: previousContent = T1, currentContent = T2
        // 2. T2 -> T3: previousContent = T2, currentContent = T3
        const source = currentContainerRef.current;
        if (!source) {
            return;
        }
        const wrapper = ownerDocument(source).createElement('div');
        for (const child of Array.from(source.childNodes)){
            wrapper.appendChild(child.cloneNode(true));
        }
        capturedNodeRef.current = wrapper;
    });
    const isTransitioning = previousContentNode != null;
    let childrenToRender;
    if (!isTransitioning) {
        childrenToRender = /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__46["jsx"])("div", {
            "data-current": true,
            ref: currentContainerRef,
            children: children
        }, currentContentKey);
    } else {
        childrenToRender = /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__46["jsxs"])(__TURBOPACK__imported__module__51268__132["Fragment"], {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__46["jsx"])("div", {
                    "data-previous": true,
                    inert: inertValue(true),
                    ref: previousContainerRef,
                    style: {
                        ...previousContentDimensions ? {
                            [cssVars.popupWidth]: `${previousContentDimensions.width}px`,
                            [cssVars.popupHeight]: `${previousContentDimensions.height}px`
                        } : null,
                        position: 'absolute'
                    },
                    "data-ending-style": showStartingStyleAttribute ? undefined : ''
                }, "previous"),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__46["jsx"])("div", {
                    "data-current": true,
                    ref: currentContainerRef,
                    "data-starting-style": showStartingStyleAttribute ? '' : undefined,
                    children: children
                }, currentContentKey)
            ]
        });
    }
    // When previousContentNode is present, imperatively populate the previous container with the cloned children.
    (0, __TURBOPACK__imported__module__91900__31["useIsoLayoutEffect"])(()=>{
        const container = previousContainerRef.current;
        if (!container || !previousContentNode) {
            return;
        }
        container.replaceChildren(...Array.from(previousContentNode.childNodes));
    }, [
        previousContentNode
    ]);
    usePopupAutoResize({
        popupElement,
        positionerElement,
        mounted,
        content: payload,
        onMeasureLayout: handleMeasureLayout,
        onMeasureLayoutComplete: handleMeasureLayoutComplete,
        side,
        direction
    });
    const state = {
        activationDirection: getActivationDirection(newTriggerOffset),
        transitioning: isTransitioning
    };
    return {
        children: childrenToRender,
        state
    };
}
/**
 * Returns a string describing the provided offset.
 * It describes both the horizontal and vertical offset, separated by a space.
 *
 * @param offset
 */ function getActivationDirection(offset) {
    if (!offset) {
        return undefined;
    }
    return `${getValueWithTolerance(offset.horizontal, 5, 'right', 'left')} ${getValueWithTolerance(offset.vertical, 5, 'down', 'up')}`;
}
/**
 * Returns a label describing the value (positive/negative) treating values
 * within tolerance as zero.
 *
 * @param value Value to check
 * @param tolerance Tolerance to treat the value as zero.
 * @param positiveLabel
 * @param negativeLabel
 * @returns If 0 < abs(value) < tolerance, returns an empty string. Otherwise returns positiveLabel or negativeLabel.
 */ function getValueWithTolerance(value1, tolerance, positiveLabel, negativeLabel) {
    if (value1 > tolerance) {
        return positiveLabel;
    }
    if (value1 < -tolerance) {
        return negativeLabel;
    }
    return '';
}
/**
 * Calculates the relative position between centers of two elements.
 */ function calculateRelativePosition(from, to) {
    const fromRect = from.getBoundingClientRect();
    const toRect = to.getBoundingClientRect();
    const fromCenter = {
        x: fromRect.left + fromRect.width / 2,
        y: fromRect.top + fromRect.height / 2
    };
    const toCenter = {
        x: toRect.left + toRect.width / 2,
        y: toRect.top + toRect.height / 2
    };
    return {
        horizontal: toCenter.x - fromCenter.x,
        vertical: toCenter.y - fromCenter.y
    };
}
/**
 * Returns a key that forces remounting content when triggers change or a payload is updated.
 */ function usePopupContentKey(activeTriggerId, payload) {
    const [contentKey, setContentKey] = __TURBOPACK__imported__module__51268__132["useState"](0);
    const previousActiveTriggerIdRef = __TURBOPACK__imported__module__51268__132["useRef"](activeTriggerId);
    const previousPayloadRef = __TURBOPACK__imported__module__51268__132["useRef"](payload);
    const pendingPayloadUpdateRef = __TURBOPACK__imported__module__51268__132["useRef"](false);
    (0, __TURBOPACK__imported__module__91900__31["useIsoLayoutEffect"])(()=>{
        // Compare against the last committed values to decide whether we need a new DOM subtree.
        const previousActiveTriggerId = previousActiveTriggerIdRef.current;
        const previousPayload = previousPayloadRef.current;
        const triggerIdChanged = activeTriggerId !== previousActiveTriggerId;
        const payloadChanged = payload !== previousPayload;
        if (triggerIdChanged) {
            // Remount immediately on trigger change; remember if payload hasn't caught up yet.
            setContentKey((value1)=>value1 + 1);
            pendingPayloadUpdateRef.current = !payloadChanged;
        } else if (pendingPayloadUpdateRef.current && payloadChanged) {
            // Payload arrived a render later, so remount once more to avoid reusing the old <img>.
            setContentKey((value1)=>value1 + 1);
            pendingPayloadUpdateRef.current = false;
        }
        // Persist current values for the next render's comparison.
        previousActiveTriggerIdRef.current = activeTriggerId;
        previousPayloadRef.current = payload;
    }, [
        activeTriggerId,
        payload
    ]);
    return `${activeTriggerId ?? 'current'}-${contentKey}`;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/viewport/MenuViewportCssVars.js [app-client] (ecmascript)
;
let MenuViewportCssVars = /*#__PURE__*/ function(MenuViewportCssVars) {
    /**
   * The width of the parent popup.
   * This variable is placed on the 'previous' container and stores the width of the popup when the previous content was rendered.
   * It can be used to freeze the dimensions of the popup when animating between different content.
   */ MenuViewportCssVars["popupWidth"] = "--popup-width";
    /**
   * The height of the parent popup.
   * This variable is placed on the 'previous' container and stores the height of the popup when the previous content was rendered.
   * It can be used to freeze the dimensions of the popup when animating between different content.
   */ MenuViewportCssVars["popupHeight"] = "--popup-height";
    return MenuViewportCssVars;
}({});
'use client';
;
;
;
;
;
;
const stateAttributesMapping6 = {
    activationDirection: (value1)=>value1 ? {
            'data-activation-direction': value1
        } : null
};
const MenuViewport = /*#__PURE__*/ __TURBOPACK__imported__module__51268__131["forwardRef"](function MenuViewport(componentProps, forwardedRef) {
    const { render, className, style, children, ...elementProps } = componentProps;
    const { store } = useMenuRootContext();
    const { side } = useMenuPositionerContext();
    const instantType = store.useState('instantType');
    const { children: childrenToRender, state: viewportState } = usePopupViewport({
        store,
        side,
        cssVars: MenuViewportCssVars,
        children
    });
    const state = {
        activationDirection: viewportState.activationDirection,
        transitioning: viewportState.transitioning,
        instant: instantType
    };
    return (0, __TURBOPACK__imported__module__19996__29["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            elementProps,
            {
                children: childrenToRender
            }
        ],
        stateAttributesMapping: stateAttributesMapping6
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
var __TURBOPACK__imported__module__76250__ = __turbopack_context__.i(76250);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/submenu-trigger/MenuSubmenuTrigger.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__70 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__18 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__135 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__30 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const MenuSubmenuTrigger = /*#__PURE__*/ __TURBOPACK__imported__module__51268__135["forwardRef"](function SubmenuTriggerComponent(componentProps, forwardedRef) {
    const { render, className, label, id: idProp, nativeButton = false, openOnHover = true, delay = 100, closeDelay = 0, disabled: disabledProp = false, style, ...elementProps } = componentProps;
    const listItem = useCompositeListItem();
    const menuPositionerContext = useMenuPositionerContext();
    const { store } = useMenuRootContext();
    const thisTriggerId = useBaseUiId(idProp);
    const open = store.useState('open');
    const floatingRootContext = store.useState('floatingRootContext');
    const floatingTreeRoot = store.useState('floatingTreeRoot');
    const baseRegisterTrigger = useTriggerRegistration(thisTriggerId, store);
    const registerTrigger = __TURBOPACK__imported__module__51268__135["useCallback"]((element)=>{
        const cleanup = baseRegisterTrigger(element);
        if (element !== null && store.select('open') && store.select('activeTriggerId') == null) {
            store.update({
                activeTriggerId: thisTriggerId,
                activeTriggerElement: element,
                closeDelay
            });
        }
        return cleanup;
    }, [
        baseRegisterTrigger,
        closeDelay,
        store,
        thisTriggerId
    ]);
    const triggerElementRef = __TURBOPACK__imported__module__51268__135["useRef"](null);
    const handleTriggerElementRef = __TURBOPACK__imported__module__51268__135["useCallback"]((el)=>{
        triggerElementRef.current = el;
        store.set('activeTriggerElement', el);
    }, [
        store
    ]);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const submenuRootContext = useMenuSubmenuRootContext();
    if (!submenuRootContext?.parentMenu) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__18["default"])(37));
    }
    store.useSyncedValue('closeDelay', closeDelay);
    const parentMenuStore = submenuRootContext.parentMenu;
    const itemProps = parentMenuStore.useState('itemProps');
    const highlighted = parentMenuStore.useState('isActive', listItem.index);
    const itemMetadata = __TURBOPACK__imported__module__51268__135["useMemo"](()=>({
            type: 'submenu-trigger',
            setActive () {
                parentMenuStore.set('activeIndex', listItem.index);
            }
        }), [
        parentMenuStore,
        listItem.index
    ]);
    const rootDisabled = store.useState('disabled');
    const disabled = disabledProp || rootDisabled;
    const { getItemProps, itemRef } = useMenuItem({
        closeOnClick: false,
        disabled,
        highlighted,
        id: thisTriggerId,
        store,
        typingRef: parentMenuStore.context.typingRef,
        nativeButton,
        itemMetadata,
        nodeId: menuPositionerContext?.context.nodeId
    });
    const hoverEnabled = store.useState('hoverEnabled');
    const allowMouseEnter = parentMenuStore.useState('allowMouseEnter');
    const hoverProps = useHoverReferenceInteraction(floatingRootContext, {
        enabled: hoverEnabled && openOnHover && !disabled,
        handleClose: safePolygon({
            blockPointerEvents: true
        }),
        mouseOnly: true,
        move: true,
        restMs: delay,
        delay: allowMouseEnter ? {
            open: delay,
            close: closeDelay
        } : 0,
        triggerElementRef,
        externalTree: floatingTreeRoot,
        isClosing: ()=>store.select('transitionStatus') === 'ending'
    });
    const click = useClick(floatingRootContext, {
        enabled: !disabled,
        event: 'mousedown',
        toggle: !openOnHover,
        ignoreMouse: openOnHover,
        stickIfOpen: false
    });
    const localInteractionProps = useInteractions([
        click
    ]);
    const rootTriggerProps = store.useState('triggerProps', true);
    delete rootTriggerProps.id;
    const state = {
        disabled,
        highlighted,
        open
    };
    const element = (0, __TURBOPACK__imported__module__19996__30["useRenderElement"])('div', componentProps, {
        state,
        stateAttributesMapping: triggerOpenStateMapping,
        props: [
            localInteractionProps.getReferenceProps(),
            hoverProps,
            rootTriggerProps,
            itemProps,
            {
                tabIndex: open || highlighted ? 0 : -1,
                onBlur () {
                    if (highlighted) {
                        parentMenuStore.set('activeIndex', null);
                    }
                }
            },
            elementProps,
            getItemProps
        ],
        ref: [
            forwardedRef,
            listItem.ref,
            itemRef,
            registerTrigger,
            handleTriggerElementRef
        ]
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/menu/store/MenuHandle.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__71 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__19 = __TURBOPACK__imported__module__16174__;
;
;
;
class MenuHandle {
    /**
   * Internal store holding the menu's state.
   * @internal
   */ constructor(){
        this.store = new MenuStore();
    }
    /**
   * Opens the menu and associates it with the trigger with the given id.
   * The trigger must be a Menu.Trigger component with this handle passed as a prop.
   *
   * @param triggerId ID of the trigger to associate with the menu.
   */ open(triggerId) {
        const triggerElement = triggerId ? this.store.context.triggerElements.getById(triggerId) : undefined;
        if (triggerId && !triggerElement) {
            throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__19["default"])(83, triggerId));
        }
        this.store.setOpen(true, createChangeEventDetails('imperative-action', undefined, triggerElement));
    }
    /**
   * Closes the menu.
   */ close() {
        this.store.setOpen(false, createChangeEventDetails('imperative-action', undefined, undefined));
    }
    /**
   * Indicates whether the menu is currently open.
   */ get isOpen() {
        return this.store.state.open;
    }
}
function createMenuHandle() {
    return new MenuHandle();
}
__turbopack_context__.s([
    "Arrow",
    0,
    MenuArrow,
    "Backdrop",
    0,
    MenuBackdrop,
    "CheckboxItem",
    0,
    MenuCheckboxItem,
    "CheckboxItemIndicator",
    0,
    MenuCheckboxItemIndicator,
    "Group",
    0,
    MenuGroup,
    "GroupLabel",
    0,
    MenuGroupLabel,
    "Handle",
    0,
    MenuHandle,
    "Item",
    0,
    MenuItem,
    "LinkItem",
    0,
    MenuLinkItem,
    "Popup",
    0,
    MenuPopup,
    "Portal",
    0,
    MenuPortal,
    "Positioner",
    0,
    MenuPositioner,
    "RadioGroup",
    0,
    MenuRadioGroup,
    "RadioItem",
    0,
    MenuRadioItem,
    "RadioItemIndicator",
    0,
    MenuRadioItemIndicator,
    "Root",
    0,
    MenuRoot,
    "Separator",
    ()=>__TURBOPACK__imported__module__76250__["Separator"],
    "SubmenuRoot",
    0,
    MenuSubmenuRoot,
    "SubmenuTrigger",
    0,
    MenuSubmenuTrigger,
    "Trigger",
    0,
    MenuTrigger,
    "Viewport",
    0,
    MenuViewport,
    "createHandle",
    0,
    createMenuHandle
], 90595);
var __TURBOPACK__imported__module__90595__ = __turbopack_context__.i(90595);
var __TURBOPACK__imported__module__90595__ = __TURBOPACK__imported__module__90595__;
var __TURBOPACK__imported__module__75157__6 = __TURBOPACK__imported__module__75157__;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript) <export default as ChevronRightIcon>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/chevron-right.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67022__6 = __TURBOPACK__imported__module__67022__;
;
const __iconNode6 = [
    [
        "path",
        {
            d: "m9 18 6-6-6-6",
            key: "mthhwq"
        }
    ]
];
const ChevronRight = (0, __TURBOPACK__imported__module__67022__6["default"])("chevron-right", __iconNode6);
;
var __TURBOPACK__imported__module__98144__ = __TURBOPACK__imported__module__98144__;
"use client";
;
;
;
;
function DropdownMenu({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Root, {
        "data-slot": "dropdown-menu",
        ...props
    });
}
function DropdownMenuPortal({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Portal, {
        "data-slot": "dropdown-menu-portal",
        ...props
    });
}
function DropdownMenuTrigger({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Trigger, {
        "data-slot": "dropdown-menu-trigger",
        ...props
    });
}
function DropdownMenuContent({ align = "start", alignOffset = 0, side = "bottom", sideOffset = 4, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Portal, {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Positioner, {
            className: "isolate z-50 outline-none",
            align: align,
            alignOffset: alignOffset,
            side: side,
            sideOffset: sideOffset,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Popup, {
                "data-slot": "dropdown-menu-content",
                className: (0, __TURBOPACK__imported__module__75157__6["cn"])("z-50 max-h-(--available-height) w-(--anchor-width) min-w-32 origin-(--transform-origin) overflow-x-hidden overflow-y-auto rounded-none bg-popover text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 outline-none data-[side=bottom]:slide-in-from-top-2 data-[side=inline-end]:slide-in-from-left-2 data-[side=inline-start]:slide-in-from-right-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:overflow-hidden data-closed:fade-out-0 data-closed:zoom-out-95", className),
                ...props
            })
        })
    });
}
function DropdownMenuGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Group, {
        "data-slot": "dropdown-menu-group",
        ...props
    });
}
function DropdownMenuLabel({ className, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.GroupLabel, {
        "data-slot": "dropdown-menu-label",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__75157__6["cn"])("px-2 py-2 text-xs text-muted-foreground data-inset:pl-7", className),
        ...props
    });
}
function DropdownMenuItem({ className, inset, variant = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Item, {
        "data-slot": "dropdown-menu-item",
        "data-inset": inset,
        "data-variant": variant,
        className: (0, __TURBOPACK__imported__module__75157__6["cn"])("group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className),
        ...props
    });
}
function DropdownMenuSub({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.SubmenuRoot, {
        "data-slot": "dropdown-menu-sub",
        ...props
    });
}
function DropdownMenuSubTrigger({ className, inset, children, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsxs"])(__TURBOPACK__imported__module__90595__.SubmenuTrigger, {
        "data-slot": "dropdown-menu-sub-trigger",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__75157__6["cn"])("flex cursor-default items-center gap-2 rounded-none px-2 py-2 text-xs outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-7 data-popup-open:bg-accent data-popup-open:text-accent-foreground data-open:bg-accent data-open:text-accent-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            children,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(ChevronRight, {
                className: "ml-auto"
            })
        ]
    });
}
function DropdownMenuSubContent({ align = "start", alignOffset = -3, side = "right", sideOffset = 0, className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(DropdownMenuContent, {
        "data-slot": "dropdown-menu-sub-content",
        className: (0, __TURBOPACK__imported__module__75157__6["cn"])("w-auto min-w-[96px] rounded-none bg-popover text-popover-foreground shadow-lg ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className),
        align: align,
        alignOffset: alignOffset,
        side: side,
        sideOffset: sideOffset,
        ...props
    });
}
function DropdownMenuCheckboxItem({ className, children, checked, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsxs"])(__TURBOPACK__imported__module__90595__.CheckboxItem, {
        "data-slot": "dropdown-menu-checkbox-item",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__75157__6["cn"])("relative flex cursor-default items-center gap-2 rounded-none py-2 pr-8 pl-2 text-xs outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        checked: checked,
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])("span", {
                className: "pointer-events-none absolute right-2 flex items-center justify-center",
                "data-slot": "dropdown-menu-checkbox-item-indicator",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.CheckboxItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__98144__["default"], {})
                })
            }),
            children
        ]
    });
}
function DropdownMenuRadioGroup({ ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.RadioGroup, {
        "data-slot": "dropdown-menu-radio-group",
        ...props
    });
}
function DropdownMenuRadioItem({ className, children, inset, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsxs"])(__TURBOPACK__imported__module__90595__.RadioItem, {
        "data-slot": "dropdown-menu-radio-item",
        "data-inset": inset,
        className: (0, __TURBOPACK__imported__module__75157__6["cn"])("relative flex cursor-default items-center gap-2 rounded-none py-2 pr-8 pl-2 text-xs outline-hidden select-none focus:bg-accent focus:text-accent-foreground focus:**:text-accent-foreground data-inset:pl-7 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", className),
        ...props,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])("span", {
                className: "pointer-events-none absolute right-2 flex items-center justify-center",
                "data-slot": "dropdown-menu-radio-item-indicator",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.RadioItemIndicator, {
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__98144__["default"], {})
                })
            }),
            children
        ]
    });
}
function DropdownMenuSeparator({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])(__TURBOPACK__imported__module__90595__.Separator, {
        "data-slot": "dropdown-menu-separator",
        className: (0, __TURBOPACK__imported__module__75157__6["cn"])("-mx-1 h-px bg-border", className),
        ...props
    });
}
function DropdownMenuShortcut({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__34["jsx"])("span", {
        "data-slot": "dropdown-menu-shortcut",
        className: (0, __TURBOPACK__imported__module__75157__6["cn"])("ml-auto text-xs tracking-widest text-muted-foreground group-focus/dropdown-menu-item:text-accent-foreground", className),
        ...props
    });
}
;
"use client";
;
;
;
;
;
;
;
function FavBar() {
    const router = (0, __TURBOPACK__imported__module__48042__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsxs"])("div", {
        className: "flex items-center justify-between gap-2 px-4 py-2.5 bg-neutral-800",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("div", {
                className: "hidden md:flex items-center gap-2",
                children: appRegistry.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(__TURBOPACK__imported__module__19455__["Button"], {
                        variant: "default",
                        size: "xs",
                        className: "font-mono",
                        onClick: ()=>router.push(feature.path),
                        children: feature.label
                    }, feature.id))
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("div", {
                className: "flex items-center md:hidden",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsxs"])(DropdownMenu, {
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(DropdownMenuTrigger, {
                            render: (props)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsxs"])(__TURBOPACK__imported__module__19455__["Button"], {
                                    variant: "default",
                                    size: "xs",
                                    ...props,
                                    children: [
                                        "Quick Access",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(ChevronDown, {
                                            className: "-me-1 ms-1 size-4"
                                        })
                                    ]
                                })
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(DropdownMenuContent, {
                            align: "start",
                            children: appRegistry.map((feature)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(DropdownMenuItem, {
                                    className: "font-mono",
                                    onClick: ()=>router.push(feature.path),
                                    children: feature.label
                                }, feature.id))
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("div", {
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(SearchCommand, {})
            })
        ]
    });
}
"use client";
;
;
;
function TerminalChrome({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
        className: "flex h-dvh flex-col bg-background",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(StatusBar, {}),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(FavBar, {}),
            children
        ]
    });
}
__turbopack_context__.s([
    "TerminalChrome",
    0,
    TerminalChrome
], 37177);
}),
]);