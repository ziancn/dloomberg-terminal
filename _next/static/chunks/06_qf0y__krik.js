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
// MERGED MODULE: [project]/src/config/settings-registry.ts [app-client] (ecmascript)
;
const settingsRegistry = [
    {
        id: "profile",
        label: "Profile",
        description: "Manage your profile information"
    },
    {
        id: "account",
        label: "Account",
        description: "Account security and preferences"
    },
    {
        id: "billing",
        label: "Billing",
        description: "Billing and subscription"
    },
    {
        id: "appearance",
        label: "Appearance",
        description: "Theme and display settings"
    },
    {
        id: "notifications",
        label: "Notifications",
        description: "Notification preferences"
    },
    {
        id: "display",
        label: "Display",
        description: "Display settings"
    }
];
const getSettingsById = (id)=>settingsRegistry.find((s)=>s.id === id);
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
"use client";
;
;
;
function SettingsNav({ activeId, onSelect }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("nav", {
        className: "w-52 bg-muted/30 py-4",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("div", {
            className: "space-y-1 px-2",
            children: settingsRegistry.map((section)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("button", {
                    onClick: ()=>onSelect(section.id),
                    className: (0, __TURBOPACK__imported__module__75157__["cn"])("w-full text-left px-3 py-2 rounded-sm text-sm font-medium transition-colors", activeId === section.id ? "bg-neutral-700 text-foreground" : "text-muted-foreground hover:bg-neutral-800 hover:text-foreground"),
                    children: section.label
                }, section.id))
        })
    });
}
// MERGED MODULE: [project]/src/features/settings/settings-content.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__3 = __TURBOPACK__imported__module__8063__;
"use client";
;
;
function SettingsContent({ activeId, children }) {
    const section = getSettingsById(activeId);
    if (!section) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsxs"])("div", {
        className: "flex-1 px-6 py-4 overflow-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsxs"])("div", {
                className: "mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("h2", {
                        className: "text-xl font-semibold mb-1",
                        children: section.label
                    }),
                    section.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("p", {
                        className: "text-sm text-muted-foreground",
                        children: section.description
                    })
                ]
            }),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("div", {
                children: children[activeId]
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
    const [activeSection, setActiveSection] = (0, __TURBOPACK__imported__module__51268__["useState"])("profile");
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
        className: "size-full flex justify-center px-4 py-3",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
            className: "size-full max-w-6xl flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("h1", {
                    className: "text-3xl font-medium mb-4",
                    children: "Settings"
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
                    className: "flex-1 flex overflow-hidden bg-background",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(SettingsNav, {
                            activeId: activeSection,
                            onSelect: setActiveSection
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(SettingsContent, {
                            activeId: activeSection,
                            children: {
                                profile: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                                    className: "text-muted-foreground",
                                    children: "Profile settings content"
                                }),
                                account: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                                    className: "text-muted-foreground",
                                    children: "Account settings content"
                                }),
                                billing: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                                    className: "text-muted-foreground",
                                    children: "Billing settings content"
                                }),
                                appearance: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                                    className: "text-muted-foreground",
                                    children: "Appearance settings content"
                                }),
                                notifications: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                                    className: "text-muted-foreground",
                                    children: "Notifications settings content"
                                }),
                                display: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                                    className: "text-muted-foreground",
                                    children: "Display settings content"
                                })
                            }
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
]);