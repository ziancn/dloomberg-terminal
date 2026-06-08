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
19455, 92615, 
67452, 
32787, 
91900, 
84028, 
16174, 
19376, 
81833, 
90741, 
91226, 
24659, 
19996, 
94237, 
76250, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/components/ui/button.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/button/Button.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/use-button/useButton.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__1 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+utils@0.2.11/node_modules/@floating-ui/utils/dist/floating-ui.utils.dom.mjs [app-client] (ecmascript)
;
function hasWindow() {
    return typeof window !== 'undefined';
}
function getNodeName(node) {
    if (isNode(node)) {
        return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
}
function getWindow(node) {
    var _node$ownerDocument;
    return (node == null || (_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
}
function getDocumentElement(node) {
    var _ref;
    return (_ref = (isNode(node) ? node.ownerDocument : node.document) || window.document) == null ? void 0 : _ref.documentElement;
}
function isNode(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Node || value instanceof getWindow(value).Node;
}
function isElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof Element || value instanceof getWindow(value).Element;
}
function isHTMLElement(value) {
    if (!hasWindow()) {
        return false;
    }
    return value instanceof HTMLElement || value instanceof getWindow(value).HTMLElement;
}
function isShadowRoot(value) {
    if (!hasWindow() || typeof ShadowRoot === 'undefined') {
        return false;
    }
    return value instanceof ShadowRoot || value instanceof getWindow(value).ShadowRoot;
}
function isOverflowElement(element) {
    const { overflow, overflowX, overflowY, display } = getComputedStyle(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && display !== 'inline' && display !== 'contents';
}
function isTableElement(element) {
    return /^(table|td|th)$/.test(getNodeName(element));
}
function isTopLayer(element) {
    try {
        if (element.matches(':popover-open')) {
            return true;
        }
    } catch (_e) {
    // no-op
    }
    try {
        return element.matches(':modal');
    } catch (_e) {
        return false;
    }
}
const willChangeRe = /transform|translate|scale|rotate|perspective|filter/;
const containRe = /paint|layout|strict|content/;
const isNotNone = (value)=>!!value && value !== 'none';
let isWebKitValue;
function isContainingBlock(elementOrCss) {
    const css = isElement(elementOrCss) ? getComputedStyle(elementOrCss) : elementOrCss;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    // https://drafts.csswg.org/css-transforms-2/#individual-transforms
    return isNotNone(css.transform) || isNotNone(css.translate) || isNotNone(css.scale) || isNotNone(css.rotate) || isNotNone(css.perspective) || !isWebKit() && (isNotNone(css.backdropFilter) || isNotNone(css.filter)) || willChangeRe.test(css.willChange || '') || containRe.test(css.contain || '');
}
function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while(isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)){
        if (isContainingBlock(currentNode)) {
            return currentNode;
        } else if (isTopLayer(currentNode)) {
            return null;
        }
        currentNode = getParentNode(currentNode);
    }
    return null;
}
function isWebKit() {
    if (isWebKitValue == null) {
        isWebKitValue = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('-webkit-backdrop-filter', 'none');
    }
    return isWebKitValue;
}
function isLastTraversableNode(node) {
    return /^(html|body|#document)$/.test(getNodeName(node));
}
function getComputedStyle(element) {
    return getWindow(element).getComputedStyle(element);
}
function getNodeScroll(element) {
    if (isElement(element)) {
        return {
            scrollLeft: element.scrollLeft,
            scrollTop: element.scrollTop
        };
    }
    return {
        scrollLeft: element.scrollX,
        scrollTop: element.scrollY
    };
}
function getParentNode(node) {
    if (getNodeName(node) === 'html') {
        return node;
    }
    const result = // Step into the shadow DOM of the parent of a slotted node.
    node.assignedSlot || // DOM Element detected.
    node.parentNode || // ShadowRoot detected.
    isShadowRoot(node) && node.host || // Fallback.
    getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
}
function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
        return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
        return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
}
function getOverflowAncestors(node, list, traverseIframes) {
    var _node$ownerDocument2;
    if (list === void 0) {
        list = [];
    }
    if (traverseIframes === void 0) {
        traverseIframes = true;
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument2 = node.ownerDocument) == null ? void 0 : _node$ownerDocument2.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
        const frameElement = getFrameElement(win);
        return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : [], frameElement && traverseIframes ? getOverflowAncestors(frameElement) : []);
    } else {
        return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor, [], traverseIframes));
    }
}
function getFrameElement(win) {
    return win.parent && Object.getPrototypeOf(win.parent) ? win.frameElement : null;
}
;
__turbopack_context__.s([
    "getComputedStyle",
    0,
    getComputedStyle,
    "getContainingBlock",
    0,
    getContainingBlock,
    "getDocumentElement",
    0,
    getDocumentElement,
    "getFrameElement",
    0,
    getFrameElement,
    "getNodeName",
    0,
    getNodeName,
    "getNodeScroll",
    0,
    getNodeScroll,
    "getOverflowAncestors",
    0,
    getOverflowAncestors,
    "getParentNode",
    0,
    getParentNode,
    "getWindow",
    0,
    getWindow,
    "isContainingBlock",
    0,
    isContainingBlock,
    "isElement",
    0,
    isElement,
    "isHTMLElement",
    0,
    isHTMLElement,
    "isLastTraversableNode",
    0,
    isLastTraversableNode,
    "isNode",
    0,
    isNode,
    "isOverflowElement",
    0,
    isOverflowElement,
    "isShadowRoot",
    0,
    isShadowRoot,
    "isTableElement",
    0,
    isTableElement,
    "isTopLayer",
    0,
    isTopLayer,
    "isWebKit",
    0,
    isWebKit
], 92615);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useStableCallback.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__2 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useRefWithInit.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__3 = __TURBOPACK__imported__module__51268__;
'use client';
;
const UNINITIALIZED = {};
function useRefWithInit(init, initArg) {
    const ref = __TURBOPACK__imported__module__51268__3["useRef"](UNINITIALIZED);
    if (ref.current === UNINITIALIZED) {
        ref.current = init(initArg);
    }
    return ref;
}
__turbopack_context__.s([
    "useRefWithInit",
    0,
    useRefWithInit
], 67452);
'use client';
;
;
// https://github.com/mui/material-ui/issues/41190#issuecomment-2040873379
const useInsertionEffect = __TURBOPACK__imported__module__51268__2[`useInsertionEffect${Math.random().toFixed(1)}`.slice(0, -3)];
const useSafeInsertionEffect = // React 17 doesn't have useInsertionEffect.
useInsertionEffect && // Preact replaces useInsertionEffect with useLayoutEffect and fires too late.
useInsertionEffect !== __TURBOPACK__imported__module__51268__2.useLayoutEffect ? useInsertionEffect : (fn)=>fn();
function useStableCallback(callback) {
    const stable = useRefWithInit(createStableCallback).current;
    stable.next = callback;
    useSafeInsertionEffect(stable.effect);
    return stable.trampoline;
}
function createStableCallback() {
    const stable = {
        next: undefined,
        callback: assertNotCalled,
        trampoline: (...args)=>stable.callback?.(...args),
        effect: ()=>{
            stable.callback = stable.next;
        }
    };
    return stable;
}
function assertNotCalled() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
__turbopack_context__.s([
    "useStableCallback",
    0,
    useStableCallback
], 32787);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useIsoLayoutEffect.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__4 = __TURBOPACK__imported__module__51268__;
'use client';
;
const noop = ()=>{};
const useIsoLayoutEffect = typeof document !== 'undefined' ? __TURBOPACK__imported__module__51268__4["useLayoutEffect"] : noop;
__turbopack_context__.s([
    "useIsoLayoutEffect",
    0,
    useIsoLayoutEffect
], 91900);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/merge-props/mergeProps.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/mergeObjects.js [app-client] (ecmascript)
;
function mergeObjects(a, b) {
    if (a && !b) {
        return a;
    }
    if (!a && b) {
        return b;
    }
    if (a || b) {
        return {
            ...a,
            ...b
        };
    }
    return undefined;
}
;
const EMPTY_PROPS = {};
function mergeProps(a, b, c, d, e) {
    if (!c && !d && !e && !a) {
        return createInitialMergedProps(b);
    }
    // We need to mutably own `merged`.
    let merged = createInitialMergedProps(a);
    if (b) {
        merged = mergeInto(merged, b);
    }
    if (c) {
        merged = mergeInto(merged, c);
    }
    if (d) {
        merged = mergeInto(merged, d);
    }
    if (e) {
        merged = mergeInto(merged, e);
    }
    return merged;
}
function mergePropsN(props) {
    if (props.length === 0) {
        return EMPTY_PROPS;
    }
    if (props.length === 1) {
        return createInitialMergedProps(props[0]);
    }
    // We need to mutably own `merged`.
    let merged = createInitialMergedProps(props[0]);
    for(let i = 1; i < props.length; i += 1){
        merged = mergeInto(merged, props[i]);
    }
    return merged;
}
function createInitialMergedProps(inputProps) {
    if (isPropsGetter(inputProps)) {
        // Getter-returned handlers intentionally keep their existing semantics.
        return {
            ...resolvePropsGetter(inputProps, EMPTY_PROPS)
        };
    }
    return copyInitialProps(inputProps);
}
function mergeInto(merged, inputProps) {
    if (isPropsGetter(inputProps)) {
        return resolvePropsGetter(inputProps, merged);
    }
    return mutablyMergeInto(merged, inputProps);
}
function copyInitialProps(inputProps) {
    const copiedProps = {
        ...inputProps
    };
    // `copiedProps` is our fresh own-object copy, so iterating with `for...in` is safe here.
    // eslint-disable-next-line guard-for-in
    for(const propName in copiedProps){
        const propValue = copiedProps[propName];
        if (isEventHandler(propName, propValue)) {
            copiedProps[propName] = wrapEventHandler(propValue);
        }
    }
    return copiedProps;
}
/**
 * Merges two sets of props. In case of conflicts, the external props take precedence.
 */ function mutablyMergeInto(mergedProps, externalProps) {
    if (!externalProps) {
        return mergedProps;
    }
    // eslint-disable-next-line guard-for-in
    for(const propName in externalProps){
        const externalPropValue = externalProps[propName];
        switch(propName){
            case 'style':
                {
                    mergedProps[propName] = mergeObjects(mergedProps.style, externalPropValue);
                    break;
                }
            case 'className':
                {
                    mergedProps[propName] = mergeClassNames(mergedProps.className, externalPropValue);
                    break;
                }
            default:
                {
                    if (isEventHandler(propName, externalPropValue)) {
                        mergedProps[propName] = mergeEventHandlers(mergedProps[propName], externalPropValue);
                    } else {
                        mergedProps[propName] = externalPropValue;
                    }
                }
        }
    }
    return mergedProps;
}
function isEventHandler(key, value) {
    // This approach is more efficient than using a regex.
    const code0 = key.charCodeAt(0);
    const code1 = key.charCodeAt(1);
    const code2 = key.charCodeAt(2);
    return code0 === 111 /* o */  && code1 === 110 /* n */  && code2 >= 65 /* A */  && code2 <= 90 /* Z */  && (typeof value === 'function' || typeof value === 'undefined');
}
function isPropsGetter(inputProps) {
    return typeof inputProps === 'function';
}
function resolvePropsGetter(inputProps, previousProps) {
    if (isPropsGetter(inputProps)) {
        return inputProps(previousProps);
    }
    return inputProps ?? EMPTY_PROPS;
}
function mergeEventHandlers(ourHandler, theirHandler) {
    if (!theirHandler) {
        return ourHandler;
    }
    if (!ourHandler) {
        return wrapEventHandler(theirHandler);
    }
    return (...args)=>{
        const event = args[0];
        if (isSyntheticEvent(event)) {
            const baseUIEvent = event;
            makeEventPreventable(baseUIEvent);
            const result = theirHandler(...args);
            if (!baseUIEvent.baseUIHandlerPrevented) {
                ourHandler?.(...args);
            }
            return result;
        }
        const result = theirHandler(...args);
        ourHandler?.(...args);
        return result;
    };
}
function wrapEventHandler(handler) {
    if (!handler) {
        return handler;
    }
    return (...args)=>{
        const event = args[0];
        if (isSyntheticEvent(event)) {
            makeEventPreventable(event);
        }
        return handler(...args);
    };
}
function makeEventPreventable(event) {
    event.preventBaseUIHandler = ()=>{
        event.baseUIHandlerPrevented = true;
    };
    return event;
}
function mergeClassNames(ourClassName, theirClassName) {
    if (theirClassName) {
        if (ourClassName) {
            // eslint-disable-next-line prefer-template
            return theirClassName + ' ' + ourClassName;
        }
        return theirClassName;
    }
    return ourClassName;
}
function isSyntheticEvent(event) {
    return event != null && typeof event === 'object' && 'nativeEvent' in event;
}
__turbopack_context__.s([
    "makeEventPreventable",
    0,
    makeEventPreventable,
    "mergeClassNames",
    0,
    mergeClassNames,
    "mergeProps",
    0,
    mergeProps,
    "mergePropsN",
    0,
    mergePropsN
], 84028);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/root/CompositeRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__3 = __TURBOPACK__imported__module__96746__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/formatErrorMessage.js [app-client] (ecmascript)
;
function createFormatErrorMessage(baseUrl, prefix) {
    return function formatErrorMessage(code, ...args) {
        const url = new URL(baseUrl);
        url.searchParams.set('code', code.toString());
        args.forEach((arg)=>url.searchParams.append('args[]', arg));
        return `${prefix} error #${code}; visit ${url} for the full message.`;
    };
}
/**
 * WARNING: Don't import this directly. It's imported by the code generated by
 * `@mui/internal-babel-plugin-minify-errors`. Make sure to always use string literals in `Error`
 * constructors to ensure the plugin works as expected. Supported patterns include:
 *   throw new Error('My message');
 *   throw new Error(`My message: ${foo}`);
 *   throw new Error(`My message: ${foo}` + 'another string');
 *   ...
 */ const formatErrorMessage = createFormatErrorMessage('https://base-ui.com/production-error', 'Base UI');
const __TURBOPACK__default__export__ = formatErrorMessage;
__turbopack_context__.s([
    "default",
    0,
    __TURBOPACK__default__export__
], 16174);
var __TURBOPACK__imported__module__51268__5 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const CompositeRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__5["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useCompositeRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__51268__5["useContext"](CompositeRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__default__export__(16));
    }
    return context;
}
__turbopack_context__.s([
    "useCompositeRootContext",
    0,
    useCompositeRootContext
], 19376);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useFocusableWhenDisabled.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__6 = __TURBOPACK__imported__module__51268__;
'use client';
;
function useFocusableWhenDisabled(parameters) {
    const { focusableWhenDisabled, disabled, composite = false, tabIndex: tabIndexProp = 0, isNativeButton } = parameters;
    const isFocusableComposite = composite && focusableWhenDisabled !== false;
    const isNonFocusableComposite = composite && focusableWhenDisabled === false;
    // we can't explicitly assign `undefined` to any of these props because it
    // would otherwise prevent subsequently merged props from setting them
    const props = __TURBOPACK__imported__module__51268__6["useMemo"](()=>{
        const additionalProps = {
            // allow Tabbing away from focusableWhenDisabled elements
            onKeyDown (event) {
                if (disabled && focusableWhenDisabled && event.key !== 'Tab') {
                    event.preventDefault();
                }
            }
        };
        if (!composite) {
            additionalProps.tabIndex = tabIndexProp;
            if (!isNativeButton && disabled) {
                additionalProps.tabIndex = focusableWhenDisabled ? tabIndexProp : -1;
            }
        }
        if (isNativeButton && (focusableWhenDisabled || isFocusableComposite) || !isNativeButton && disabled) {
            additionalProps['aria-disabled'] = disabled;
        }
        if (isNativeButton && (!focusableWhenDisabled || isNonFocusableComposite)) {
            additionalProps.disabled = disabled;
        }
        return additionalProps;
    }, [
        composite,
        disabled,
        focusableWhenDisabled,
        isFocusableComposite,
        isNonFocusableComposite,
        isNativeButton,
        tabIndexProp
    ]);
    return {
        props
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
function useButton(parameters = {}) {
    const { disabled = false, focusableWhenDisabled, tabIndex = 0, native: isNativeButton = true, composite: compositeProp } = parameters;
    const elementRef = __TURBOPACK__imported__module__51268__1["useRef"](null);
    const compositeRootContext = useCompositeRootContext(true);
    const isCompositeItem = compositeProp ?? compositeRootContext !== undefined;
    const { props: focusableWhenDisabledProps } = useFocusableWhenDisabled({
        focusableWhenDisabled,
        disabled,
        composite: isCompositeItem,
        tabIndex,
        isNativeButton
    });
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // handles a disabled composite button rendering another button, e.g.
    // <Toolbar.Button disabled render={<Menu.Trigger />} />
    // the `disabled` prop needs to pass through 2 `useButton`s then finally
    // delete the `disabled` attribute from DOM
    const updateDisabled = __TURBOPACK__imported__module__51268__1["useCallback"](()=>{
        const element = elementRef.current;
        if (!isButtonElement(element)) {
            return;
        }
        if (isCompositeItem && disabled && focusableWhenDisabledProps.disabled === undefined && element.disabled) {
            element.disabled = false;
        }
    }, [
        disabled,
        focusableWhenDisabledProps.disabled,
        isCompositeItem
    ]);
    useIsoLayoutEffect(updateDisabled, [
        updateDisabled
    ]);
    const getButtonProps = __TURBOPACK__imported__module__51268__1["useCallback"]((externalProps = {})=>{
        const { onClick: externalOnClick, onMouseDown: externalOnMouseDown, onKeyUp: externalOnKeyUp, onKeyDown: externalOnKeyDown, onPointerDown: externalOnPointerDown, ...otherExternalProps } = externalProps;
        const type = isNativeButton ? 'button' : undefined;
        return mergeProps({
            type,
            onClick (event) {
                if (disabled) {
                    event.preventDefault();
                    return;
                }
                externalOnClick?.(event);
            },
            onMouseDown (event) {
                if (!disabled) {
                    externalOnMouseDown?.(event);
                }
            },
            onKeyDown (event) {
                if (disabled) {
                    return;
                }
                makeEventPreventable(event);
                externalOnKeyDown?.(event);
                if (event.baseUIHandlerPrevented) {
                    return;
                }
                const isCurrentTarget = event.target === event.currentTarget;
                const currentTarget = event.currentTarget;
                const isButton = isButtonElement(currentTarget);
                const isLink = !isNativeButton && isValidLinkElement(currentTarget);
                const shouldClick = isCurrentTarget && (isNativeButton ? isButton : !isLink);
                const isEnterKey = event.key === 'Enter';
                const isSpaceKey = event.key === ' ';
                const role = currentTarget.getAttribute('role');
                const isTextNavigationRole = role?.startsWith('menuitem') || role === 'option' || role === 'gridcell';
                if (isCurrentTarget && isCompositeItem && isSpaceKey) {
                    if (event.defaultPrevented && isTextNavigationRole) {
                        return;
                    }
                    event.preventDefault();
                    if (isLink || isNativeButton && isButton) {
                        currentTarget.click();
                        event.preventBaseUIHandler();
                    } else if (shouldClick) {
                        externalOnClick?.(event);
                        event.preventBaseUIHandler();
                    }
                    return;
                }
                // Keyboard accessibility for native and non-native elements.
                if (shouldClick) {
                    if (!isNativeButton && (isSpaceKey || isEnterKey)) {
                        event.preventDefault();
                    }
                    if (!isNativeButton && isEnterKey) {
                        externalOnClick?.(event);
                    }
                }
            },
            onKeyUp (event) {
                if (disabled) {
                    return;
                }
                // calling preventDefault in keyUp on a <button> will not dispatch a click event if Space is pressed
                // https://codesandbox.io/p/sandbox/button-keyup-preventdefault-dn7f0
                makeEventPreventable(event);
                externalOnKeyUp?.(event);
                if (event.target === event.currentTarget && isNativeButton && isCompositeItem && isButtonElement(event.currentTarget) && event.key === ' ') {
                    event.preventDefault();
                    return;
                }
                if (event.baseUIHandlerPrevented) {
                    return;
                }
                // Keyboard accessibility for non interactive elements
                if (event.target === event.currentTarget && !isNativeButton && !isCompositeItem && event.key === ' ') {
                    externalOnClick?.(event);
                }
            },
            onPointerDown (event) {
                if (disabled) {
                    event.preventDefault();
                    return;
                }
                externalOnPointerDown?.(event);
            }
        }, !isNativeButton ? {
            role: 'button'
        } : undefined, focusableWhenDisabledProps, otherExternalProps);
    }, [
        disabled,
        focusableWhenDisabledProps,
        isCompositeItem,
        isNativeButton
    ]);
    const buttonRef = useStableCallback((element)=>{
        elementRef.current = element;
        updateDisabled();
    });
    return {
        getButtonProps,
        buttonRef
    };
}
function isButtonElement(elem) {
    return isHTMLElement(elem) && elem.tagName === 'BUTTON';
}
function isValidLinkElement(elem) {
    return Boolean(elem?.tagName === 'A' && elem?.href);
}
__turbopack_context__.s([
    "useButton",
    0,
    useButton
], 81833);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useRenderElement.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__4 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__7 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useMergedRefs.js [app-client] (ecmascript)
;
;
function useMergedRefs(a, b, c, d) {
    const forkRef = useRefWithInit(createForkRef).current;
    if (didChange(forkRef, a, b, c, d)) {
        update(forkRef, [
            a,
            b,
            c,
            d
        ]);
    }
    return forkRef.callback;
}
function useMergedRefsN(refs) {
    const forkRef = useRefWithInit(createForkRef).current;
    if (didChangeN(forkRef, refs)) {
        update(forkRef, refs);
    }
    return forkRef.callback;
}
function createForkRef() {
    return {
        callback: null,
        cleanup: null,
        refs: []
    };
}
function didChange(forkRef, a, b, c, d) {
    // prettier-ignore
    return forkRef.refs[0] !== a || forkRef.refs[1] !== b || forkRef.refs[2] !== c || forkRef.refs[3] !== d;
}
function didChangeN(forkRef, newRefs) {
    return forkRef.refs.length !== newRefs.length || forkRef.refs.some((ref, index)=>ref !== newRefs[index]);
}
function update(forkRef, refs) {
    forkRef.refs = refs;
    if (refs.every((ref)=>ref == null)) {
        forkRef.callback = null;
        return;
    }
    forkRef.callback = (instance)=>{
        if (forkRef.cleanup) {
            forkRef.cleanup();
            forkRef.cleanup = null;
        }
        if (instance != null) {
            const cleanupCallbacks = Array(refs.length).fill(null);
            for(let i = 0; i < refs.length; i += 1){
                const ref = refs[i];
                if (ref == null) {
                    continue;
                }
                switch(typeof ref){
                    case 'function':
                        {
                            const refCleanup = ref(instance);
                            if (typeof refCleanup === 'function') {
                                cleanupCallbacks[i] = refCleanup;
                            }
                            break;
                        }
                    case 'object':
                        {
                            ref.current = instance;
                            break;
                        }
                    default:
                }
            }
            forkRef.cleanup = ()=>{
                for(let i = 0; i < refs.length; i += 1){
                    const ref = refs[i];
                    if (ref == null) {
                        continue;
                    }
                    switch(typeof ref){
                        case 'function':
                            {
                                const cleanupCallback = cleanupCallbacks[i];
                                if (typeof cleanupCallback === 'function') {
                                    cleanupCallback();
                                } else {
                                    ref(null);
                                }
                                break;
                            }
                        case 'object':
                            {
                                ref.current = null;
                                break;
                            }
                        default:
                    }
                }
            };
        }
    };
}
__turbopack_context__.s([
    "useMergedRefs",
    0,
    useMergedRefs,
    "useMergedRefsN",
    0,
    useMergedRefsN
], 90741);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/getReactElementRef.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__8 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/reactVersion.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__9 = __TURBOPACK__imported__module__51268__;
;
const majorVersion = parseInt(__TURBOPACK__imported__module__51268__9["version"], 10);
function isReactVersionAtLeast(reactVersionToCheck) {
    return majorVersion >= reactVersionToCheck;
}
__turbopack_context__.s([
    "isReactVersionAtLeast",
    0,
    isReactVersionAtLeast
], 91226);
;
;
function getReactElementRef(element) {
    if (!/*#__PURE__*/ __TURBOPACK__imported__module__51268__8["isValidElement"](element)) {
        return null;
    }
    const reactElement = element;
    const propsWithRef = reactElement.props;
    return (isReactVersionAtLeast(19) ? propsWithRef?.ref : reactElement.ref) ?? null;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/warn.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__5 = __TURBOPACK__imported__module__96746__;
let set;
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function warn(...messages) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/empty.js [app-client] (ecmascript)
;
function NOOP() {}
const EMPTY_ARRAY = Object.freeze([]);
const EMPTY_OBJECT = Object.freeze({});
__turbopack_context__.s([
    "EMPTY_ARRAY",
    0,
    EMPTY_ARRAY,
    "EMPTY_OBJECT",
    0,
    EMPTY_OBJECT,
    "NOOP",
    0,
    NOOP
], 24659);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/getStateAttributesProps.js [app-client] (ecmascript)
;
function getStateAttributesProps(state, customMapping) {
    const props = {};
    /* eslint-disable-next-line guard-for-in */ for(const key in state){
        const value = state[key];
        if (customMapping?.hasOwnProperty(key)) {
            const customProps = customMapping[key](value);
            if (customProps != null) {
                Object.assign(props, customProps);
            }
            continue;
        }
        if (value === true) {
            props[`data-${key.toLowerCase()}`] = '';
        } else if (value) {
            props[`data-${key.toLowerCase()}`] = value.toString();
        }
    }
    return props;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/resolveClassName.js [app-client] (ecmascript)
;
function resolveClassName(className, state) {
    return typeof className === 'function' ? className(state) : className;
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/resolveStyle.js [app-client] (ecmascript)
;
function resolveStyle(style, state) {
    return typeof style === 'function' ? style(state) : style;
}
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
function useRenderElement(element, componentProps, params = {}) {
    const renderProp = componentProps.render;
    const outProps = useRenderElementProps(componentProps, params);
    if (params.enabled === false) {
        return null;
    }
    const state = params.state ?? EMPTY_OBJECT;
    return evaluateRenderProp(element, renderProp, outProps, state);
}
/**
 * Computes render element final props.
 */ function useRenderElementProps(componentProps, params = {}) {
    const { className: classNameProp, style: styleProp, render: renderProp } = componentProps;
    const { state = EMPTY_OBJECT, ref, props, stateAttributesMapping, enabled = true } = params;
    const className = enabled ? resolveClassName(classNameProp, state) : undefined;
    const style = enabled ? resolveStyle(styleProp, state) : undefined;
    const stateProps = enabled ? getStateAttributesProps(state, stateAttributesMapping) : EMPTY_OBJECT;
    const resolvedProps = enabled && props ? resolveRenderFunctionProps(props) : undefined;
    // Ensure outProps is always a new mutable object when enabled, never EMPTY_OBJECT.
    // This prevents potential TypeError when setting ref, className, or style properties,
    // since EMPTY_OBJECT is frozen and mutations would fail in strict mode.
    const outProps = enabled ? mergeObjects(stateProps, resolvedProps) ?? {} : EMPTY_OBJECT;
    // SAFETY: The `useMergedRefs` functions use a single hook to store the same value,
    // switching between them at runtime is safe. If this assertion fails, React will
    // throw at runtime anyway.
    // This also skips the `useMergedRefs` call on the server, which is fine because
    // refs are not used on the server side.
    /* eslint-disable react-hooks/rules-of-hooks */ if (typeof document !== 'undefined') {
        if (!enabled) {
            useMergedRefs(null, null);
        } else if (Array.isArray(ref)) {
            outProps.ref = useMergedRefsN([
                outProps.ref,
                getReactElementRef(renderProp),
                ...ref
            ]);
        } else {
            outProps.ref = useMergedRefs(outProps.ref, getReactElementRef(renderProp), ref);
        }
    }
    if (!enabled) {
        return EMPTY_OBJECT;
    }
    if (className !== undefined) {
        outProps.className = mergeClassNames(outProps.className, className);
    }
    if (style !== undefined) {
        outProps.style = mergeObjects(outProps.style, style);
    }
    return outProps;
}
function resolveRenderFunctionProps(props) {
    if (Array.isArray(props)) {
        return mergePropsN(props);
    }
    return mergeProps(undefined, props);
}
// The symbol React uses internally for lazy components
// https://github.com/facebook/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/shared/ReactSymbols.js#L31
//
// TODO delete once https://github.com/facebook/react/issues/32392 is fixed
const REACT_LAZY_TYPE = Symbol.for('react.lazy');
const COMPONENT_IDENTIFIER_PATTERN = /^[A-Z][A-Za-z0-9$]*$/;
const LOWERCASE_CHARACTER_PATTERN = /[a-z]/;
function evaluateRenderProp(element, render, props, state) {
    if (render) {
        if (typeof render === 'function') {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return render(props, state);
        }
        const mergedProps = mergeProps(props, render.props);
        mergedProps.ref = props.ref;
        let newElement = render;
        // Workaround for https://github.com/facebook/react/issues/32392
        // This works because the toArray() logic unwrap lazy element type in
        // https://github.com/facebook/react/blob/a0566250b210499b4c5677f5ac2eedbd71d51a1b/packages/react/src/ReactChildren.js#L186
        if (newElement?.$$typeof === REACT_LAZY_TYPE) {
            const children = __TURBOPACK__imported__module__51268__7["Children"].toArray(render);
            newElement = children[0];
        }
        // There is a high number of indirections, the error message thrown by React.cloneElement() is
        // hard to use for developers, this logic provides a better context.
        //
        // Our general guideline is to never change the control flow depending on the environment.
        // However, React.cloneElement() throws if React.isValidElement() is false,
        // so we can throw before with custom message.
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return /*#__PURE__*/ __TURBOPACK__imported__module__51268__7["cloneElement"](newElement, mergedProps);
    }
    if (element) {
        if (typeof element === 'string') {
            return renderTag(element, props);
        }
    }
    // Unreachable, but the typings on `useRenderElement` need to be reworked
    // to annotate it correctly.
    throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : __TURBOPACK__default__export__(8));
}
function warnIfRenderPropLooksLikeComponent(renderFn) {
    const functionName = renderFn.name;
    if (functionName.length === 0) {
        return;
    }
    if (!COMPONENT_IDENTIFIER_PATTERN.test(functionName)) {
        return;
    }
    if (!LOWERCASE_CHARACTER_PATTERN.test(functionName)) {
        return;
    }
    warn(`The \`render\` prop received a function named \`${functionName}\` that starts with an uppercase letter.`, 'This usually means a React component was passed directly as `render={Component}`.', 'Base UI calls `render` as a plain function, which can break the Rules of Hooks during reconciliation.', 'If this is an intentional render callback, rename it to start with a lowercase letter.', 'Use `render={<Component />}` or `render={(props) => <Component {...props} />}` instead.', 'https://base-ui.com/r/invalid-render-prop');
}
function renderTag(Tag, props) {
    if (Tag === 'button') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__51268__7["createElement"])("button", {
            type: "button",
            ...props,
            key: props.key
        });
    }
    if (Tag === 'img') {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__51268__7["createElement"])("img", {
            alt: "",
            ...props,
            key: props.key
        });
    }
    return /*#__PURE__*/ __TURBOPACK__imported__module__51268__7["createElement"](Tag, props);
}
__turbopack_context__.s([
    "useRenderElement",
    0,
    useRenderElement
], 19996);
'use client';
;
;
;
const Button = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function Button(componentProps, forwardedRef) {
    const { render, className, disabled = false, focusableWhenDisabled = false, nativeButton = true, style, ...elementProps } = componentProps;
    const { getButtonProps, buttonRef } = useButton({
        disabled,
        focusableWhenDisabled,
        native: nativeButton
    });
    const state = {
        disabled
    };
    return useRenderElement('button', componentProps, {
        state,
        ref: [
            forwardedRef,
            buttonRef
        ],
        props: [
            elementProps,
            getButtonProps
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/class-variance-authority@0.7.1/node_modules/class-variance-authority/dist/index.mjs [app-client] (ecmascript)
;
/**
 * Copyright 2022 Joe Bell. All rights reserved.
 *
 * This file is licensed to you under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with the
 * License. You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR REPRESENTATIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */ var __TURBOPACK__imported__module__7284__ = __turbopack_context__.i(7284);
;
const falsyToString = (value)=>typeof value === "boolean" ? `${value}` : value === 0 ? "0" : value;
const cx = __TURBOPACK__imported__module__7284__["clsx"];
const cva = (base, config)=>(props)=>{
        var _config_compoundVariants;
        if ((config === null || config === void 0 ? void 0 : config.variants) == null) return cx(base, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
        const { variants, defaultVariants } = config;
        const getVariantClassNames = Object.keys(variants).map((variant)=>{
            const variantProp = props === null || props === void 0 ? void 0 : props[variant];
            const defaultVariantProp = defaultVariants === null || defaultVariants === void 0 ? void 0 : defaultVariants[variant];
            if (variantProp === null) return null;
            const variantKey = falsyToString(variantProp) || falsyToString(defaultVariantProp);
            return variants[variant][variantKey];
        });
        const propsWithoutUndefined = props && Object.entries(props).reduce((acc, param)=>{
            let [key, value] = param;
            if (value === undefined) {
                return acc;
            }
            acc[key] = value;
            return acc;
        }, {});
        const getCompoundVariantClassNames = config === null || config === void 0 ? void 0 : (_config_compoundVariants = config.compoundVariants) === null || _config_compoundVariants === void 0 ? void 0 : _config_compoundVariants.reduce((acc, param)=>{
            let { class: cvClass, className: cvClassName, ...compoundVariantOptions } = param;
            return Object.entries(compoundVariantOptions).every((param)=>{
                let [key, value] = param;
                return Array.isArray(value) ? value.includes({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                }[key]) : ({
                    ...defaultVariants,
                    ...propsWithoutUndefined
                })[key] === value;
            }) ? [
                ...acc,
                cvClass,
                cvClassName
            ] : acc;
        }, []);
        return cx(base, getVariantClassNames, getCompoundVariantClassNames, props === null || props === void 0 ? void 0 : props.class, props === null || props === void 0 ? void 0 : props.className);
    };
__turbopack_context__.s([
    "cva",
    0,
    cva
], 94237);
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
;
;
;
;
const buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-none border border-transparent bg-clip-padding text-xs font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-primary text-primary-foreground hover:bg-primary/80",
            outline: "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
            secondary: "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)] aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
            ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
            destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
            link: "text-primary underline-offset-4 hover:underline"
        },
        size: {
            default: "h-8 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            xs: "h-6 gap-1 rounded-none px-2 text-xs has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
            sm: "h-7 gap-1 rounded-none px-2.5 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3.5",
            lg: "h-9 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
            icon: "size-8",
            "icon-xs": "size-6 rounded-none [&_svg:not([class*='size-'])]:size-3",
            "icon-sm": "size-7 rounded-none",
            "icon-lg": "size-9"
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
});
function Button1({ className, variant = "default", size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(Button, {
        "data-slot": "button",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])(buttonVariants({
            variant,
            size,
            className
        })),
        ...props
    });
}
;
__turbopack_context__.s([
    "Button",
    0,
    Button1
], 19455);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/separator/Separator.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__6 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__10 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const Separator = /*#__PURE__*/ __TURBOPACK__imported__module__51268__10["forwardRef"](function SeparatorComponent(componentProps, forwardedRef) {
    const { className, render, orientation = 'horizontal', style, ...elementProps } = componentProps;
    const state = {
        orientation
    };
    const element = useRenderElement('div', componentProps, {
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
], 76250);
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
    status: "/status"
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
]);