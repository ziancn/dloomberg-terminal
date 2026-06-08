(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
9938, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/app/test/page.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
// MERGED MODULE: [project]/src/features/settings/settings-page.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__1 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
// MERGED MODULE: [project]/src/features/settings/settings-nav.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__2 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__19455__ = __turbopack_context__.i(19455);
// MERGED MODULE: [project]/src/config/settings-registry.ts [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
;
const settingsRegistry = [
    {
        id: "favorites",
        label: "Favorites",
        description: "Personalise your favorites bar",
        Component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__51268__1["lazy"])(()=>__turbopack_context__.A(3750))
    },
    {
        id: "general",
        label: "General",
        description: "Generic settings",
        Component: /*#__PURE__*/ (0, __TURBOPACK__imported__module__51268__1["lazy"])(()=>__turbopack_context__.A(56149))
    }
];
const getSettingsById = (id)=>settingsRegistry.find((s)=>s.id === id);
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
"use client";
;
;
;
;
function SettingsNav({ activeId, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("nav", {
        className: "w-52 py-4 border-r",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("div", {
            className: "flex flex-col",
            children: settingsRegistry.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])(__TURBOPACK__imported__module__19455__["Button"], {
                    onClick: ()=>onSelect(section.id),
                    variant: activeId === section.id ? "secondary" : "ghost",
                    size: "lg",
                    className: (0, __TURBOPACK__imported__module__75157__["cn"])("w-full justify-start text-sm border-0", activeId === section.id ? "" : "text-muted-foreground"),
                    children: section.label
                }, section.id))
        })
    });
}
// MERGED MODULE: [project]/src/features/settings/settings-content.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__3 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
"use client";
;
;
;
function SettingsContent({ activeId }) {
    const section = getSettingsById(activeId);
    if (!section) return null;
    const { label, description, Component } = section;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsxs"])("div", {
        className: "flex-1 px-6 py-4 overflow-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsxs"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("h2", {
                        className: "text-xl font-semibold mb-1",
                        children: label
                    }),
                    description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: description
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(__TURBOPACK__imported__module__51268__2["Suspense"], {
                fallback: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("div", {
                    className: "text-muted-foreground",
                    children: "Loading..."
                }),
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(Component, {})
            })
        ]
    });
}
"use client";
;
;
;
;
function SettingsPage() {
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__51268__["useState"])("favorites");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
        className: "size-full flex justify-center px-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
            className: "size-full max-w-6xl flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                    className: "py-4 border-b",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("h1", {
                        className: "text-3xl font-medium",
                        children: "Settings"
                    })
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
                    className: "flex-1 flex overflow-hidden bg-background",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(SettingsNav, {
                            activeId: activeSection,
                            onSelect: setActiveSection
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(SettingsContent, {
                            activeId: activeSection
                        })
                    ]
                })
            ]
        })
    });
}
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__8063__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(SettingsPage, {})
    });
}
__turbopack_context__.s([
    "default",
    0,
    Page
], 9938);
}),
3750, ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/15dwi.0rpfafi.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport(89410);
    });
});
}),
56149, ((__turbopack_context__) => {

__turbopack_context__.v((parentImport) => {
    return Promise.all([
  "static/chunks/0k-_2pinuhh2y.js"
].map((chunk) => __turbopack_context__.l(chunk))).then(() => {
        return parentImport(57197);
    });
});
}),
]);