(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
91946, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "warnOnce", {
    enumerable: true,
    get: function() {
        return warnOnce;
    }
});
let warnOnce = (_)=>{};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
69600, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    DecodeError: null,
    MiddlewareNotFoundError: null,
    MissingStaticPage: null,
    NormalizeError: null,
    PageNotFoundError: null,
    SP: null,
    ST: null,
    WEB_VITALS: null,
    execOnce: null,
    getDisplayName: null,
    getLocationOrigin: null,
    getURL: null,
    isAbsoluteUrl: null,
    isResSent: null,
    loadGetInitialProps: null,
    normalizeRepeatedSlashes: null,
    stringifyError: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    DecodeError: function() {
        return DecodeError;
    },
    MiddlewareNotFoundError: function() {
        return MiddlewareNotFoundError;
    },
    MissingStaticPage: function() {
        return MissingStaticPage;
    },
    NormalizeError: function() {
        return NormalizeError;
    },
    PageNotFoundError: function() {
        return PageNotFoundError;
    },
    SP: function() {
        return SP;
    },
    ST: function() {
        return ST;
    },
    WEB_VITALS: function() {
        return WEB_VITALS;
    },
    execOnce: function() {
        return execOnce;
    },
    getDisplayName: function() {
        return getDisplayName;
    },
    getLocationOrigin: function() {
        return getLocationOrigin;
    },
    getURL: function() {
        return getURL;
    },
    isAbsoluteUrl: function() {
        return isAbsoluteUrl;
    },
    isResSent: function() {
        return isResSent;
    },
    loadGetInitialProps: function() {
        return loadGetInitialProps;
    },
    normalizeRepeatedSlashes: function() {
        return normalizeRepeatedSlashes;
    },
    stringifyError: function() {
        return stringifyError;
    }
});
const WEB_VITALS = [
    'CLS',
    'FCP',
    'FID',
    'INP',
    'LCP',
    'TTFB'
];
function execOnce(fn) {
    let used = false;
    let result;
    return (...args)=>{
        if (!used) {
            used = true;
            result = fn(...args);
        }
        return result;
    };
}
// Scheme: https://tools.ietf.org/html/rfc3986#section-3.1
// Absolute URL: https://tools.ietf.org/html/rfc3986#section-4.3
const ABSOLUTE_URL_REGEX = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/;
const isAbsoluteUrl = (url)=>ABSOLUTE_URL_REGEX.test(url);
function getLocationOrigin() {
    const { protocol, hostname, port } = window.location;
    return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}
function getURL() {
    const { href } = window.location;
    const origin = getLocationOrigin();
    return href.substring(origin.length);
}
function getDisplayName(Component) {
    return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}
function isResSent(res) {
    return res.finished || res.headersSent;
}
function normalizeRepeatedSlashes(url) {
    const urlParts = url.split('?');
    const urlNoQuery = urlParts[0];
    return urlNoQuery // first we replace any non-encoded backslashes with forward
    // then normalize repeated forward slashes
    .replace(/\\/g, '/').replace(/\/\/+/g, '/') + (urlParts[1] ? `?${urlParts.slice(1).join('?')}` : '');
}
async function loadGetInitialProps(App, ctx) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // when called from _app `ctx` is nested in `ctx`
    const res = ctx.res || ctx.ctx && ctx.ctx.res;
    if (!App.getInitialProps) {
        if (ctx.ctx && ctx.Component) {
            // @ts-ignore pageProps default
            return {
                pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
            };
        }
        return {};
    }
    const props = await App.getInitialProps(ctx);
    if (res && isResSent(res)) {
        return props;
    }
    if (!props) {
        const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
        throw Object.defineProperty(new Error(message), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: false,
            configurable: true
        });
    }
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return props;
}
const SP = typeof performance !== 'undefined';
const ST = SP && [
    'mark',
    'measure',
    'getEntriesByName'
].every((method)=>typeof performance[method] === 'function');
class DecodeError extends Error {
}
class NormalizeError extends Error {
}
class PageNotFoundError extends Error {
    constructor(page){
        super();
        this.code = 'ENOENT';
        this.name = 'PageNotFoundError';
        this.message = `Cannot find module for page: ${page}`;
    }
}
class MissingStaticPage extends Error {
    constructor(page, message){
        super();
        this.message = `Failed to load static file for page: ${page} ${message}`;
    }
}
class MiddlewareNotFoundError extends Error {
    constructor(){
        super();
        this.code = 'ENOENT';
        this.message = `Cannot find the middleware module`;
    }
}
function stringifyError(error) {
    return JSON.stringify({
        message: error.message,
        stack: error.stack
    });
}
}),
33434, ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    assign: null,
    searchParamsToUrlQuery: null,
    urlQueryToSearchParams: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    assign: function() {
        return assign;
    },
    searchParamsToUrlQuery: function() {
        return searchParamsToUrlQuery;
    },
    urlQueryToSearchParams: function() {
        return urlQueryToSearchParams;
    }
});
function searchParamsToUrlQuery(searchParams) {
    const query = {};
    for (const [key, value] of searchParams.entries()){
        const existing = query[key];
        if (typeof existing === 'undefined') {
            query[key] = value;
        } else if (Array.isArray(existing)) {
            existing.push(value);
        } else {
            query[key] = [
                existing,
                value
            ];
        }
    }
    return query;
}
function stringifyUrlQueryParam(param) {
    if (typeof param === 'string') {
        return param;
    }
    if (typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
        return String(param);
    } else {
        return '';
    }
}
function urlQueryToSearchParams(query) {
    const searchParams = new URLSearchParams();
    for (const [key, value] of Object.entries(query)){
        if (Array.isArray(value)) {
            for (const item of value){
                searchParams.append(key, stringifyUrlQueryParam(item));
            }
        } else {
            searchParams.set(key, stringifyUrlQueryParam(value));
        }
    }
    return searchParams;
}
function assign(target, ...searchParamsList) {
    for (const searchParams of searchParamsList){
        for (const key of searchParams.keys()){
            target.delete(key);
        }
        for (const [key, value] of searchParams.entries()){
            target.append(key, value);
        }
    }
    return target;
}
}),
61238, 8069, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/lib/api/client.ts [app-client] (ecmascript)
;
const BASE_URL = "http://localhost:8000";
const DEFAULT_TIMEOUT = 8000 // 8 seconds
;
class ApiError extends Error {
    status;
    body;
    constructor(message, status, body){
        super(message), this.status = status, this.body = body;
        this.name = "ApiError";
    }
}
async function apiGet(path, options = {}) {
    const { timeout = DEFAULT_TIMEOUT, signal: externalSignal } = options;
    let signal = externalSignal;
    if (timeout > 0) {
        // Merge external signal with internal timeout signal
        const timeoutController = new AbortController();
        const timeoutId = setTimeout(()=>timeoutController.abort(), timeout);
        if (externalSignal) {
            // If external signal fires, also abort the timeout
            externalSignal.addEventListener("abort", ()=>{
                clearTimeout(timeoutId);
                timeoutController.abort();
            }, {
                once: true
            });
        }
        signal = timeoutController.signal;
    }
    const response = await fetch(`${BASE_URL}${path}`, {
        signal
    });
    if (!response.ok) {
        let body = null;
        try {
            body = await response.json();
        } catch  {
        // ignore parse errors
        }
        throw new ApiError(`API ${response.status}: ${response.statusText}`, response.status, body);
    }
    return await response.json();
}
__turbopack_context__.s([
    "apiGet",
    0,
    apiGet
], 61238);
// MERGED MODULE: [project]/src/lib/api/endpoints.ts [app-client] (ecmascript)
;
const API = {
    shortSellTurnover: "/hkex/short-sell-turnover",
    status: "/status",
    sfcSearch: "/sfc/search"
};
__turbopack_context__.s([
    "API",
    0,
    API
], 8069);
}),
98144, ((__turbopack_context__) => {
"use strict";

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
            d: "M20 6 9 17l-5-5",
            key: "1gmf2c"
        }
    ]
];
const Check = (0, __TURBOPACK__imported__module__67022__["default"])("check", __iconNode);
;
__turbopack_context__.s([
    "default",
    0,
    Check
]);
}),
67022, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/createLucideIcon.mjs [app-client] (ecmascript)
;
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils/mergeClasses.mjs [app-client] (ecmascript)
;
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const mergeClasses = (...classes)=>classes.filter((className, index, array)=>{
        return Boolean(className) && className.trim() !== "" && array.indexOf(className) === index;
    }).join(" ").trim();
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils/toKebabCase.mjs [app-client] (ecmascript)
;
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toKebabCase = (string)=>string.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase();
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils/toPascalCase.mjs [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils/toCamelCase.mjs [app-client] (ecmascript)
;
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const toCamelCase = (string)=>string.replace(/^([A-Z])|[\s-_]+(\w)/g, (match, p1, p2)=>p2 ? p2.toUpperCase() : p1.toLowerCase());
;
;
const toPascalCase = (string)=>{
    const camelCase = toCamelCase(string);
    return camelCase.charAt(0).toUpperCase() + camelCase.slice(1);
};
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/Icon.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/defaultAttributes.mjs [app-client] (ecmascript)
;
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var defaultAttributes = {
    xmlns: "http://www.w3.org/2000/svg",
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    strokeLinecap: "round",
    strokeLinejoin: "round"
};
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/shared/src/utils/hasA11yProp.mjs [app-client] (ecmascript)
;
/**
 * @license lucide-react v1.16.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ const hasA11yProp = (props)=>{
    for(const prop in props){
        if (prop.startsWith("aria-") || prop === "role" || prop === "title") {
            return true;
        }
    }
    return false;
};
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/context.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
"use strict";
"use client";
;
const LucideContext = (0, __TURBOPACK__imported__module__51268__2["createContext"])({});
function LucideProvider({ children, size, color, strokeWidth, absoluteStrokeWidth, className }) {
    const value = (0, __TURBOPACK__imported__module__51268__2["useMemo"])(()=>({
            size,
            color,
            strokeWidth,
            absoluteStrokeWidth,
            className
        }), [
        size,
        color,
        strokeWidth,
        absoluteStrokeWidth,
        className
    ]);
    return (0, __TURBOPACK__imported__module__51268__2["createElement"])(LucideContext.Provider, {
        value
    }, children);
}
const useLucideContext = ()=>(0, __TURBOPACK__imported__module__51268__2["useContext"])(LucideContext);
;
"use strict";
"use client";
;
;
;
;
;
const Icon = (0, __TURBOPACK__imported__module__51268__1["forwardRef"])(({ color, size, strokeWidth, absoluteStrokeWidth, className = "", children, iconNode, ...rest }, ref)=>{
    const { size: contextSize = 24, strokeWidth: contextStrokeWidth = 2, absoluteStrokeWidth: contextAbsoluteStrokeWidth = false, color: contextColor = "currentColor", className: contextClass = "" } = useLucideContext() ?? {};
    const calculatedStrokeWidth = absoluteStrokeWidth ?? contextAbsoluteStrokeWidth ? Number(strokeWidth ?? contextStrokeWidth) * 24 / Number(size ?? contextSize) : strokeWidth ?? contextStrokeWidth;
    return (0, __TURBOPACK__imported__module__51268__1["createElement"])("svg", {
        ref,
        ...defaultAttributes,
        width: size ?? contextSize ?? defaultAttributes.width,
        height: size ?? contextSize ?? defaultAttributes.height,
        stroke: color ?? contextColor,
        strokeWidth: calculatedStrokeWidth,
        className: mergeClasses("lucide", contextClass, className),
        ...!children && !hasA11yProp(rest) && {
            "aria-hidden": "true"
        },
        ...rest
    }, [
        ...iconNode.map(([tag, attrs])=>(0, __TURBOPACK__imported__module__51268__1["createElement"])(tag, attrs)),
        ...Array.isArray(children) ? children : [
            children
        ]
    ]);
});
;
;
;
;
;
;
const createLucideIcon = (iconName, iconNode)=>{
    const Component = (0, __TURBOPACK__imported__module__51268__["forwardRef"])(({ className, ...props }, ref)=>(0, __TURBOPACK__imported__module__51268__["createElement"])(Icon, {
            ref,
            iconNode,
            className: mergeClasses(`lucide-${toKebabCase(toPascalCase(iconName))}`, `lucide-${iconName}`, className),
            ...props
        }));
    Component.displayName = toPascalCase(iconName);
    return Component;
};
;
__turbopack_context__.s([
    "default",
    0,
    createLucideIcon
], 67022);
}),
76250, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
'use client';
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function SeparatorComponent(componentProps, forwardedRef) {
    const { className, render, orientation = 'horizontal', style, ...elementProps } = componentProps;
    const state = {
        orientation
    };
    const element = (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('div', componentProps, {
        state,
        ref: forwardedRef,
        props: [
            {
                role: 'separator',
                'aria-orientation': orientation
            },
            elementProps
        ]
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "Separator",
    0,
    Separator
]);
}),
]);