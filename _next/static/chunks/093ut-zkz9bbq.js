(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
15288, 69631, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/components/ui/card.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
;
;
function Card({ className, size = "default", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        "data-slot": "card",
        "data-size": size,
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("group/card flex flex-col gap-4 overflow-hidden rounded-none bg-card py-4 text-xs/relaxed text-card-foreground ring-1 ring-foreground/10 has-data-[slot=card-footer]:pb-0 has-[>img:first-child]:pt-0 data-[size=sm]:gap-2 data-[size=sm]:py-3 data-[size=sm]:has-data-[slot=card-footer]:pb-0 *:[img:first-child]:rounded-none *:[img:last-child]:rounded-none", className),
        ...props
    });
}
function CardHeader({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        "data-slot": "card-header",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-none px-4 group-data-[size=sm]/card:px-3 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-4 group-data-[size=sm]/card:[.border-b]:pb-3", className),
        ...props
    });
}
function CardTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        "data-slot": "card-title",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("font-heading text-sm font-medium group-data-[size=sm]/card:text-sm", className),
        ...props
    });
}
function CardDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        "data-slot": "card-description",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("text-xs/relaxed text-muted-foreground", className),
        ...props
    });
}
function CardAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        "data-slot": "card-action",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
        ...props
    });
}
function CardContent({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        "data-slot": "card-content",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("px-4 group-data-[size=sm]/card:px-3", className),
        ...props
    });
}
function CardFooter({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        "data-slot": "card-footer",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("flex items-center rounded-none border-t p-4 group-data-[size=sm]/card:p-3", className),
        ...props
    });
}
;
__turbopack_context__.s([
    "Card",
    0,
    Card,
    "CardContent",
    0,
    CardContent,
    "CardDescription",
    0,
    CardDescription,
    "CardHeader",
    0,
    CardHeader,
    "CardTitle",
    0,
    CardTitle
], 15288);
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript) <export default as ExternalLink>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/external-link.mjs [app-client] (ecmascript)
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
            d: "M15 3h6v6",
            key: "1q9fwt"
        }
    ],
    [
        "path",
        {
            d: "M10 14 21 3",
            key: "gplh6r"
        }
    ],
    [
        "path",
        {
            d: "M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6",
            key: "a6xqqp"
        }
    ]
];
const ExternalLink = (0, __TURBOPACK__imported__module__67022__["default"])("external-link", __iconNode);
;
__turbopack_context__.s([
    "ExternalLink",
    0,
    ExternalLink
], 69631);
}),
72436, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
var __TURBOPACK__imported__module__76250__ = __turbopack_context__.i(76250);
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
"use client";
;
;
;
function Separator({ className, orientation = "horizontal", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__76250__["Separator"], {
        "data-slot": "separator",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className),
        ...props
    });
}
;
__turbopack_context__.s([
    "Separator",
    0,
    Separator
]);
}),
99997, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
// Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    formatUrl: null,
    formatWithValidation: null,
    urlObjectKeys: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    formatUrl: function() {
        return formatUrl;
    },
    formatWithValidation: function() {
        return formatWithValidation;
    },
    urlObjectKeys: function() {
        return urlObjectKeys;
    }
});
const _interop_require_wildcard = __turbopack_context__.r(44066);
const _querystring = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r(33434));
const slashedProtocols = /https?|ftp|gopher|file/;
function formatUrl(urlObj) {
    let { auth, hostname } = urlObj;
    let protocol = urlObj.protocol || '';
    let pathname = urlObj.pathname || '';
    let hash = urlObj.hash || '';
    let query = urlObj.query || '';
    let host = false;
    auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';
    if (urlObj.host) {
        host = auth + urlObj.host;
    } else if (hostname) {
        host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);
        if (urlObj.port) {
            host += ':' + urlObj.port;
        }
    }
    if (query && typeof query === 'object') {
        query = String(_querystring.urlQueryToSearchParams(query));
    }
    let search = urlObj.search || query && `?${query}` || '';
    if (protocol && !protocol.endsWith(':')) protocol += ':';
    if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
        host = '//' + (host || '');
        if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
    } else if (!host) {
        host = '';
    }
    if (hash && hash[0] !== '#') hash = '#' + hash;
    if (search && search[0] !== '?') search = '?' + search;
    pathname = pathname.replace(/[?#]/g, encodeURIComponent);
    search = search.replace('#', '%23');
    return `${protocol}${host}${pathname}${search}${hash}`;
}
const urlObjectKeys = [
    'auth',
    'hash',
    'host',
    'hostname',
    'href',
    'path',
    'pathname',
    'port',
    'protocol',
    'query',
    'search',
    'slashes'
];
function formatWithValidation(url) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return formatUrl(url);
}
}),
70782, ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "useMergedRef", {
    enumerable: true,
    get: function() {
        return useMergedRef;
    }
});
const _react = __turbopack_context__.r(51268);
function useMergedRef(refA, refB) {
    const cleanupA = (0, _react.useRef)(null);
    const cleanupB = (0, _react.useRef)(null);
    // NOTE: In theory, we could skip the wrapping if only one of the refs is non-null.
    // (this happens often if the user doesn't pass a ref to Link/Form/Image)
    // But this can cause us to leak a cleanup-ref into user code (previously via `<Link legacyBehavior>`),
    // and the user might pass that ref into ref-merging library that doesn't support cleanup refs
    // (because it hasn't been updated for React 19)
    // which can then cause things to blow up, because a cleanup-returning ref gets called with `null`.
    // So in practice, it's safer to be defensive and always wrap the ref, even on React 19.
    return (0, _react.useCallback)((current)=>{
        if (current === null) {
            const cleanupFnA = cleanupA.current;
            if (cleanupFnA) {
                cleanupA.current = null;
                cleanupFnA();
            }
            const cleanupFnB = cleanupB.current;
            if (cleanupFnB) {
                cleanupB.current = null;
                cleanupFnB();
            }
        } else {
            if (refA) {
                cleanupA.current = applyRef(refA, current);
            }
            if (refB) {
                cleanupB.current = applyRef(refB, current);
            }
        }
    }, [
        refA,
        refB
    ]);
}
function applyRef(refA, current) {
    if (typeof refA === 'function') {
        const cleanup = refA(current);
        if (typeof cleanup === 'function') {
            return cleanup;
        } else {
            return ()=>refA(null);
        }
    } else {
        refA.current = current;
        return ()=>{
            refA.current = null;
        };
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
88334, ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isLocalURL", {
    enumerable: true,
    get: function() {
        return isLocalURL;
    }
});
const _utils = __turbopack_context__.r(69600);
const _hasbasepath = __turbopack_context__.r(76636);
function isLocalURL(url) {
    // prevent a hydration mismatch on href for url with anchor refs
    if (!(0, _utils.isAbsoluteUrl)(url)) return true;
    try {
        // absolute urls can be local if they are on the same origin
        const locationOrigin = (0, _utils.getLocationOrigin)();
        const resolved = new URL(url, locationOrigin);
        return resolved.origin === locationOrigin && (0, _hasbasepath.hasBasePath)(resolved.pathname);
    } catch (_) {
        return false;
    }
}
}),
20612, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "errorOnce", {
    enumerable: true,
    get: function() {
        return errorOnce;
    }
});
let errorOnce = (_)=>{};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
}),
70096, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
'use client';
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
0 && (module.exports = {
    default: null,
    useLinkStatus: null
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: all[name]
    });
}
_export(exports, {
    /**
 * A React component that extends the HTML `<a>` element to provide
 * [prefetching](https://nextjs.org/docs/app/building-your-application/routing/linking-and-navigating#2-prefetching)
 * and client-side navigation. This is the primary way to navigate between routes in Next.js.
 *
 * @remarks
 * - Prefetching is only enabled in production.
 *
 * @see https://nextjs.org/docs/app/api-reference/components/link
 */ default: function() {
        return LinkComponent;
    },
    useLinkStatus: function() {
        return useLinkStatus;
    }
});
const _interop_require_wildcard = __turbopack_context__.r(44066);
const _jsxruntime = __turbopack_context__.r(8063);
const _react = /*#__PURE__*/ _interop_require_wildcard._(__turbopack_context__.r(51268));
const _formaturl = __turbopack_context__.r(99997);
const _approutercontextsharedruntime = __turbopack_context__.r(4411);
const _usemergedref = __turbopack_context__.r(70782);
const _utils = __turbopack_context__.r(69600);
const _addbasepath = __turbopack_context__.r(31508);
const _warnonce = __turbopack_context__.r(91946);
const _routerreducertypes = __turbopack_context__.r(35302);
const _links = __turbopack_context__.r(92024);
const _islocalurl = __turbopack_context__.r(88334);
const _types = __turbopack_context__.r(44017);
const _erroronce = __turbopack_context__.r(20612);
function isModifiedEvent(event) {
    const eventTarget = event.currentTarget;
    const target = eventTarget.getAttribute('target');
    return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
    event.nativeEvent && event.nativeEvent.which === 2;
}
function linkClicked(e, href, linkInstanceRef, replace, scroll, onNavigate, transitionTypes) {
    if (typeof window !== 'undefined') {
        const { nodeName } = e.currentTarget;
        // anchors inside an svg have a lowercase nodeName
        const isAnchorNodeName = nodeName.toUpperCase() === 'A';
        if (isAnchorNodeName && isModifiedEvent(e) || e.currentTarget.hasAttribute('download')) {
            // ignore click for browser’s default behavior
            return;
        }
        if (!(0, _islocalurl.isLocalURL)(href)) {
            if (replace) {
                // browser default behavior does not replace the history state
                // so we need to do it manually
                e.preventDefault();
                location.replace(href);
            }
            // ignore click for browser’s default behavior
            return;
        }
        e.preventDefault();
        if (onNavigate) {
            let isDefaultPrevented = false;
            onNavigate({
                preventDefault: ()=>{
                    isDefaultPrevented = true;
                }
            });
            if (isDefaultPrevented) {
                return;
            }
        }
        const { dispatchNavigateAction } = __turbopack_context__.r(12178);
        _react.default.startTransition(()=>{
            dispatchNavigateAction(href, replace ? 'replace' : 'push', scroll === false ? _routerreducertypes.ScrollBehavior.NoScroll : _routerreducertypes.ScrollBehavior.Default, linkInstanceRef.current, transitionTypes);
        });
    }
}
function formatStringOrUrl(urlObjOrString) {
    if (typeof urlObjOrString === 'string') {
        return urlObjOrString;
    }
    return (0, _formaturl.formatUrl)(urlObjOrString);
}
function LinkComponent(props) {
    const [linkStatus, setOptimisticLinkStatus] = (0, _react.useOptimistic)(_links.IDLE_LINK_STATUS);
    let children;
    const linkInstanceRef = (0, _react.useRef)(null);
    const { href: hrefProp, as: asProp, children: childrenProp, prefetch: prefetchProp = null, passHref, replace, shallow, scroll, onClick, onMouseEnter: onMouseEnterProp, onTouchStart: onTouchStartProp, legacyBehavior = false, onNavigate, transitionTypes, ref: forwardedRef, unstable_dynamicOnHover, ...restProps } = props;
    children = childrenProp;
    if (legacyBehavior && (typeof children === 'string' || typeof children === 'number')) {
        children = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            children: children
        });
    }
    const router = _react.default.useContext(_approutercontextsharedruntime.AppRouterContext);
    const prefetchEnabled = prefetchProp !== false;
    const fetchStrategy = prefetchProp !== false ? getFetchStrategyFromPrefetchProp(prefetchProp) : _types.FetchStrategy.PPR;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    {
        function createPropError(args) {
            return Object.defineProperty(new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (typeof window !== 'undefined' ? "\nOpen your browser's console to view the Component stack trace." : '')), "__NEXT_ERROR_CODE", {
                value: "E319",
                enumerable: false,
                configurable: true
            });
        }
    /*TURBOPACK member replacement*/ }
    const resolvedHref = asProp || hrefProp;
    const formattedHref = formatStringOrUrl(resolvedHref);
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // This will return the first child, if multiple are provided it will throw an error
    let child;
    if (legacyBehavior) {
        if (children?.$$typeof === Symbol.for('react.lazy')) {
            throw Object.defineProperty(new Error(`\`<Link legacyBehavior>\` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's \`<a>\` tag.`), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: false,
                configurable: true
            });
        }
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        else {
            child = _react.default.Children.only(children);
        }
    } else {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    const childRef = legacyBehavior ? child && typeof child === 'object' && child.ref : forwardedRef;
    // Use a callback ref to attach an IntersectionObserver to the anchor tag on
    // mount. In the future we will also use this to keep track of all the
    // currently mounted <Link> instances, e.g. so we can re-prefetch them after
    // a revalidation or refresh.
    const observeLinkVisibilityOnMount = _react.default.useCallback((element)=>{
        if (router !== null) {
            linkInstanceRef.current = (0, _links.mountLinkInstance)(element, formattedHref, router, fetchStrategy, prefetchEnabled, setOptimisticLinkStatus);
        }
        return ()=>{
            if (linkInstanceRef.current) {
                (0, _links.unmountLinkForCurrentNavigation)(linkInstanceRef.current);
                linkInstanceRef.current = null;
            }
            (0, _links.unmountPrefetchableInstance)(element);
        };
    }, [
        prefetchEnabled,
        formattedHref,
        router,
        fetchStrategy,
        setOptimisticLinkStatus
    ]);
    const mergedRef = (0, _usemergedref.useMergedRef)(observeLinkVisibilityOnMount, childRef);
    const childProps = {
        ref: mergedRef,
        onClick (e) {
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            if (!legacyBehavior && typeof onClick === 'function') {
                onClick(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onClick === 'function') {
                child.props.onClick(e);
            }
            if (!router) {
                return;
            }
            if (e.defaultPrevented) {
                return;
            }
            linkClicked(e, formattedHref, linkInstanceRef, replace, scroll, onNavigate, transitionTypes);
        },
        onMouseEnter (e) {
            if (!legacyBehavior && typeof onMouseEnterProp === 'function') {
                onMouseEnterProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onMouseEnter === 'function') {
                child.props.onMouseEnter(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled || ("TURBOPACK compile-time value", "production") === 'development') {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        },
        onTouchStart: ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : function onTouchStart(e) {
            if (!legacyBehavior && typeof onTouchStartProp === 'function') {
                onTouchStartProp(e);
            }
            if (legacyBehavior && child.props && typeof child.props.onTouchStart === 'function') {
                child.props.onTouchStart(e);
            }
            if (!router) {
                return;
            }
            if (!prefetchEnabled) {
                return;
            }
            const upgradeToDynamicPrefetch = unstable_dynamicOnHover === true;
            (0, _links.onNavigationIntent)(e.currentTarget, upgradeToDynamicPrefetch);
        }
    };
    // If the url is absolute, we can bypass the logic to prepend the basePath.
    if ((0, _utils.isAbsoluteUrl)(formattedHref)) {
        childProps.href = formattedHref;
    } else if (!legacyBehavior || passHref || child.type === 'a' && !('href' in child.props)) {
        childProps.href = (0, _addbasepath.addBasePath)(formattedHref);
    }
    let link;
    if (legacyBehavior) {
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        link = /*#__PURE__*/ _react.default.cloneElement(child, childProps);
    } else {
        link = /*#__PURE__*/ (0, _jsxruntime.jsx)("a", {
            ...restProps,
            ...childProps,
            children: children
        });
    }
    return /*#__PURE__*/ (0, _jsxruntime.jsx)(LinkStatusContext.Provider, {
        value: linkStatus,
        children: link
    });
}
const LinkStatusContext = /*#__PURE__*/ (0, _react.createContext)(_links.IDLE_LINK_STATUS);
const useLinkStatus = ()=>{
    return (0, _react.useContext)(LinkStatusContext);
};
function getFetchStrategyFromPrefetchProp(prefetchProp) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    else {
        return prefetchProp === null || prefetchProp === 'auto' ? _types.FetchStrategy.PPR : // (although invalid values should've been filtered out by prop validation in dev)
        _types.FetchStrategy.Full;
    }
}
if ((typeof exports.default === 'function' || typeof exports.default === 'object' && exports.default !== null) && typeof exports.default.__esModule === 'undefined') {
    Object.defineProperty(exports.default, '__esModule', {
        value: true
    });
    Object.assign(exports.default, exports);
    module.exports = exports.default;
}
}),
75721, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/features/start/start-page.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
var __TURBOPACK__imported__module__70096__ = __turbopack_context__.i(70096);
var __TURBOPACK__imported__module__72436__ = __turbopack_context__.i(72436);
var __TURBOPACK__imported__module__15288__ = __turbopack_context__.i(15288);
// MERGED MODULE: [project]/src/components/ui/alert.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__1 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__94237__ = __turbopack_context__.i(94237);
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
;
;
;
const alertVariants = (0, __TURBOPACK__imported__module__94237__["cva"])("group/alert relative grid w-full gap-0.5 rounded-none border px-2.5 py-2 text-left text-xs has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2 *:[svg]:row-span-2 *:[svg]:translate-y-0 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
    variants: {
        variant: {
            default: "bg-card text-card-foreground",
            destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
        }
    },
    defaultVariants: {
        variant: "default"
    }
});
function Alert({ className, variant, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
        "data-slot": "alert",
        role: "alert",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])(alertVariants({
            variant
        }), className),
        ...props
    });
}
function AlertTitle({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
        "data-slot": "alert-title",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className),
        ...props
    });
}
function AlertDescription({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
        "data-slot": "alert-description",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("text-xs/relaxed text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-2", className),
        ...props
    });
}
function AlertAction({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
        "data-slot": "alert-action",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("absolute top-[calc(--spacing(1.25))] right-[calc(--spacing(1.25))]", className),
        ...props
    });
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/contact.mjs [app-client] (ecmascript) <export default as Contact>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/contact.mjs [app-client] (ecmascript)
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
            d: "M16 2v2",
            key: "scm5qe"
        }
    ],
    [
        "path",
        {
            d: "M7 22v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2",
            key: "1waht3"
        }
    ],
    [
        "path",
        {
            d: "M8 2v2",
            key: "pbkmx"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "11",
            r: "3",
            key: "itu57m"
        }
    ],
    [
        "rect",
        {
            x: "3",
            y: "4",
            width: "18",
            height: "18",
            rx: "2",
            key: "12vinp"
        }
    ]
];
const Contact = (0, __TURBOPACK__imported__module__67022__["default"])("contact", __iconNode);
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/trending-up-down.mjs [app-client] (ecmascript) <export default as TrendingUpDown>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/trending-up-down.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67022__1 = __TURBOPACK__imported__module__67022__;
;
const __iconNode1 = [
    [
        "path",
        {
            d: "M14.828 14.828 21 21",
            key: "ar5fw7"
        }
    ],
    [
        "path",
        {
            d: "M21 16v5h-5",
            key: "1ck2sf"
        }
    ],
    [
        "path",
        {
            d: "m21 3-9 9-4-4-6 6",
            key: "1h02xo"
        }
    ],
    [
        "path",
        {
            d: "M21 8V3h-5",
            key: "1qoq8a"
        }
    ]
];
const TrendingUpDown = (0, __TURBOPACK__imported__module__67022__1["default"])("trending-up-down", __iconNode1);
;
var __TURBOPACK__imported__module__69631__ = __turbopack_context__.i(69631);
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript) <export default as AlertTriangle>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/triangle-alert.mjs [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67022__2 = __TURBOPACK__imported__module__67022__;
;
const __iconNode2 = [
    [
        "path",
        {
            d: "m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",
            key: "wmoenq"
        }
    ],
    [
        "path",
        {
            d: "M12 9v4",
            key: "juzpu7"
        }
    ],
    [
        "path",
        {
            d: "M12 17h.01",
            key: "p32p05"
        }
    ]
];
const TriangleAlert = (0, __TURBOPACK__imported__module__67022__2["default"])("triangle-alert", __iconNode2);
;
"use client";
;
;
;
;
;
;
function StartPage() {
    const startSteps = [
        {
            step: 1,
            title: "Clone Dloomberg Service & Run Locally",
            description: "This is a pure static frontend. Backend logic currently requires local execution. Cloud hosting may be considered if funding permits in the future.",
            url: "https://github.com/ziancn/dloomberg-service"
        },
        {
            step: 2,
            title: "Launch Bloomberg Terminal",
            description: "To use Bloomberg BLPAPI as a data source, open your Bloomberg Terminal. Dloomberg Service will automatically fetch data via BLPAPI.",
            note: "Reminder: This consumes your BLPAPI quota. Exhausting it will affect data retrieval for Excel Bloomberg functions.",
            optional: true
        },
        {
            step: 3,
            title: "Check Connection Status",
            description: "If both Step 1 and Step 2 are running properly, the status indicator in the top bar will show a green dot. Otherwise, it will be red."
        }
    ];
    const recentFunctions = [
        {
            icon: TrendingUpDown,
            title: "HKSS",
            subtitle: "HKEX short selling turnover today",
            url: "/hkss"
        },
        {
            icon: Contact,
            title: "SFCPR",
            subtitle: "HKSFC public register of licensed entities",
            url: "/sfcpr"
        }
    ];
    const githubRepos = [
        {
            name: "dloomberg-terminal",
            path: "github.com/ziancn/dloomberg-terminal"
        },
        {
            name: "dloomberg-service",
            path: "github.com/ziancn/dloomberg-service"
        }
    ];
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        className: "flex h-full flex-col overflow-y-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
            className: "mx-auto flex justify-center w-full max-w-6xl flex-1 flex-col px-8 py-14",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
                    className: "mb-8",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("h1", {
                        className: "text-3xl font-semibold tracking-tight",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("p", {
                                children: "Dloomberg Terminal"
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("p", {
                                className: "text-xl text-muted-foreground uppercase",
                                children: "Anywhere"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__72436__["Separator"], {
                    className: "mb-8"
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("main", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                        className: "grid grid-cols-1 gap-10 md:grid-cols-12",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                className: "md:col-span-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("h2", {
                                        className: "mb-4 text-xl font-medium",
                                        children: "Get Started"
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
                                        className: "flex flex-col",
                                        children: startSteps.map((step)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                                className: "flex items-start gap-3 py-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("span", {
                                                        className: "mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-[11px] font-semibold text-muted-foreground",
                                                        children: step.step
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                                        className: "flex-1 min-w-0",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                                                className: "flex items-center gap-1.5",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("span", {
                                                                        className: "text-sm font-medium",
                                                                        children: [
                                                                            step.title,
                                                                            step.optional && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("span", {
                                                                                className: "ml-1 text-xs font-normal text-muted-foreground",
                                                                                children: [
                                                                                    " ",
                                                                                    "(Optional)"
                                                                                ]
                                                                            })
                                                                        ]
                                                                    }),
                                                                    step.url && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("a", {
                                                                        href: step.url,
                                                                        target: "_blank",
                                                                        rel: "noopener noreferrer",
                                                                        className: "ml-auto shrink-0 text-muted-foreground transition-colors hover:text-foreground",
                                                                        title: "Open in new tab",
                                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__69631__["ExternalLink"], {
                                                                            className: "size-4"
                                                                        })
                                                                    })
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("p", {
                                                                className: "mt-0.5 text-xs text-muted-foreground leading-relaxed",
                                                                children: step.description
                                                            }),
                                                            step.note && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(Alert, {
                                                                variant: "default",
                                                                className: "mt-2 bg-bloomberg-primary/10",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(TriangleAlert, {}),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(AlertDescription, {
                                                                        className: "text-wrap",
                                                                        children: step.note
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }, step.step))
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                className: "md:col-span-7",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("h2", {
                                        className: "mb-4 text-xl font-medium",
                                        children: "Recent Functions"
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
                                        className: "flex flex-col gap-4",
                                        children: recentFunctions.map((item, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__70096__["default"], {
                                                href: item.url,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__15288__["Card"], {
                                                    className: "cursor-pointer transition-colors hover:bg-accent/50",
                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(__TURBOPACK__imported__module__15288__["CardHeader"], {
                                                        className: "flex gap-4",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("span", {
                                                                className: "flex size-10 shrink-0 items-center justify-center border border-border bg-background",
                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(item.icon, {
                                                                    className: "size-5"
                                                                })
                                                            }),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__15288__["CardTitle"], {
                                                                        className: "text-sm font-semibold",
                                                                        children: item.title
                                                                    }),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__15288__["CardDescription"], {
                                                                        className: "mt-1",
                                                                        children: item.subtitle
                                                                    })
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                })
                                            }, idx))
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__72436__["Separator"], {
                                        className: "my-8"
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("h2", {
                                        className: "mb-2 text-sm font-semibold uppercase tracking-wider text-muted-foreground",
                                        children: "GitHub Repos"
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
                                        className: "flex flex-col",
                                        children: githubRepos.map((project, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("a", {
                                                href: `https://${project.path}`,
                                                target: "_blank",
                                                rel: "noopener noreferrer",
                                                className: "inline-flex h-auto flex-col items-start px-3 py-2 text-left transition-colors hover:bg-accent hover:text-accent-foreground",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("span", {
                                                        className: "inline-flex items-center gap-1.5 text-sm font-medium text-blue-400",
                                                        children: [
                                                            project.name,
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__69631__["ExternalLink"], {
                                                                className: "size-3 text-muted-foreground"
                                                            })
                                                        ]
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("span", {
                                                        className: "max-w-xs truncate text-xs text-muted-foreground md:max-w-full",
                                                        children: project.path
                                                    })
                                                ]
                                            }, idx))
                                    })
                                ]
                            })
                        ]
                    })
                })
            ]
        })
    });
}
__turbopack_context__.s([
    "StartPage",
    0,
    StartPage
], 75721);
}),
63135, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
var __TURBOPACK__imported__module__75721__ = __turbopack_context__.i(75721);
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__75721__["StartPage"], {});
}
__turbopack_context__.s([
    "default",
    0,
    Page
]);
}),
]);