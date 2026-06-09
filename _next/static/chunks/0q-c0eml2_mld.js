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
9938, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
var __TURBOPACK__imported__module__4508__ = __turbopack_context__.i(4508);
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__8063__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__4508__["SfcprPage"], {})
    });
}
__turbopack_context__.s([
    "default",
    0,
    Page
]);
}),
]);