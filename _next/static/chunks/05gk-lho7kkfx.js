(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
13399, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/app/settings/page.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
// MERGED MODULE: [project]/src/features/page-in-construction.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__1 = __TURBOPACK__imported__module__8063__;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/construction.mjs [app-client] (ecmascript) <export default as Construction>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/construction.mjs [app-client] (ecmascript)
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
        "rect",
        {
            x: "2",
            y: "6",
            width: "20",
            height: "8",
            rx: "1",
            key: "1estib"
        }
    ],
    [
        "path",
        {
            d: "M17 14v7",
            key: "7m2elx"
        }
    ],
    [
        "path",
        {
            d: "M7 14v7",
            key: "1cm7wv"
        }
    ],
    [
        "path",
        {
            d: "M17 3v3",
            key: "1v4jwn"
        }
    ],
    [
        "path",
        {
            d: "M7 3v3",
            key: "7o6guu"
        }
    ],
    [
        "path",
        {
            d: "M10 14 2.3 6.3",
            key: "1023jk"
        }
    ],
    [
        "path",
        {
            d: "m14 6 7.7 7.7",
            key: "1s8pl2"
        }
    ],
    [
        "path",
        {
            d: "m8 6 8 8",
            key: "hl96qh"
        }
    ]
];
const Construction = (0, __TURBOPACK__imported__module__67022__["default"])("construction", __iconNode);
;
"use client";
;
;
function PageInConstruction() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
        className: "size-full flex items-center justify-center",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
            className: "flex flex-col items-center gap-4 text-muted-foreground",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(Construction, {
                    className: "size-14 animate-pulse text-bloomberg-primary"
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("span", {
                    children: "Page in construction"
                })
            ]
        })
    });
}
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(PageInConstruction, {});
}
__turbopack_context__.s([
    "default",
    0,
    Page
], 13399);
}),
]);