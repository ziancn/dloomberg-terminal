(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
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
16552, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/app/hkss/page.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
// MERGED MODULE: [project]/src/features/hkss/hkss-page.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__1 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
// MERGED MODULE: [project]/src/features/hkss/short-sell-turnover-grid.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__2 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__2776__ = __turbopack_context__.i(2776);
var __TURBOPACK__imported__module__9279__ = __turbopack_context__.i(9279);
var __TURBOPACK__imported__module__78786__ = __turbopack_context__.i(78786);
var __TURBOPACK__imported__module__75636__ = __turbopack_context__.i(75636);
var __TURBOPACK__imported__module__25133__ = __turbopack_context__.i(25133);
// MERGED MODULE: [project]/src/hooks/use-short-sell-data.ts [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__61238__ = __turbopack_context__.i(61238);
var __TURBOPACK__imported__module__8069__ = __turbopack_context__.i(8069);
"use client";
;
;
function useShortSellData(period, reloadTrigger = 0) {
    const [allData, setAllData] = (0, __TURBOPACK__imported__module__51268__2["useState"])({
        am: [],
        pm: []
    });
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__51268__2["useState"])(true);
    const [error, setError] = (0, __TURBOPACK__imported__module__51268__2["useState"])(null);
    // Prevent stale state from an unmounted component
    const cancelledRef = (0, __TURBOPACK__imported__module__51268__2["useRef"])(false);
    (0, __TURBOPACK__imported__module__51268__2["useEffect"])(()=>{
        cancelledRef.current = false;
        setIsLoading(true);
        setError(null);
        (0, __TURBOPACK__imported__module__61238__["apiGet"])(__TURBOPACK__imported__module__8069__["API"].shortSellTurnover).then((sessions)=>{
            if (cancelledRef.current) return;
            const amRows = sessions.find((d)=>d.session.toLowerCase() === "am")?.rows ?? [];
            const pmRows = sessions.find((d)=>d.session.toLowerCase() === "pm")?.rows ?? [];
            setAllData({
                am: amRows,
                pm: pmRows
            });
            setIsLoading(false);
        }).catch((err)=>{
            if (cancelledRef.current) return;
            console.error("Failed to fetch short sell data:", err);
            setAllData({
                am: [],
                pm: []
            });
            setError(err instanceof Error ? err : new Error(String(err)));
            setIsLoading(false);
        });
        return ()=>{
            cancelledRef.current = true;
        };
    }, [
        reloadTrigger
    ]);
    return {
        rowData: allData[period],
        allData,
        isLoading,
        error
    };
}
var __TURBOPACK__imported__module__53102__ = __turbopack_context__.i(53102);
"use client";
;
;
;
;
;
;
;
;
const modules = [
    __TURBOPACK__imported__module__9279__["AllCommunityModule"],
    __TURBOPACK__imported__module__53102__["CellSelectionModule"],
    __TURBOPACK__imported__module__53102__["ContextMenuModule"],
    __TURBOPACK__imported__module__53102__["ClipboardModule"],
    __TURBOPACK__imported__module__53102__["SideBarModule"],
    __TURBOPACK__imported__module__53102__["FiltersToolPanelModule"],
    __TURBOPACK__imported__module__53102__["ColumnsToolPanelModule"],
    __TURBOPACK__imported__module__53102__["StatusBarModule"],
    __TURBOPACK__imported__module__53102__["SetFilterModule"]
];
function ShortSellTurnoverGrid({ period, reloadTrigger = 0 }) {
    const { rowData, isLoading } = useShortSellData(period, reloadTrigger);
    const onFirstDataRendered = (0, __TURBOPACK__imported__module__51268__1["useCallback"])((params)=>{
        params.api.autoSizeColumns([
            "code",
            "non_hkd",
            "board"
        ]);
    }, []);
    const defaultColDef = (0, __TURBOPACK__imported__module__51268__1["useMemo"])(()=>({
            sortable: true,
            resizable: true,
            floatingFilter: true
        }), []);
    const columnDefs = (0, __TURBOPACK__imported__module__51268__1["useMemo"])(()=>[
            {
                field: "code",
                filter: "agSetColumnFilter",
                flex: 1
            },
            {
                field: "name",
                filter: true,
                flex: 1
            },
            {
                field: "shares",
                filter: "agNumberColumnFilter",
                valueFormatter: (params)=>{
                    return params.value?.toLocaleString("en-US") || "";
                },
                flex: 1
            },
            {
                field: "value",
                filter: "agNumberColumnFilter",
                valueFormatter: (params)=>{
                    return params.value?.toLocaleString("en-US") || "";
                },
                flex: 1
            },
            {
                field: "non_hkd",
                filter: true,
                flex: 1,
                cellRenderer: (params)=>{
                    return params.value ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("div", {
                        className: "flex items-center h-full text-emerald-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])(__TURBOPACK__imported__module__75636__["Check"], {
                            className: "size-4"
                        })
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("div", {
                        className: "flex items-center h-full text-muted-foreground/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])(__TURBOPACK__imported__module__25133__["Minus"], {
                            className: "size-4"
                        })
                    });
                }
            },
            {
                field: "board",
                filter: true,
                flex: 1
            }
        ], []);
    const statusBar = (0, __TURBOPACK__imported__module__51268__1["useMemo"])(()=>{
        return {
            statusPanels: [
                {
                    statusPanel: "agTotalAndFilteredRowCountComponent"
                },
                {
                    statusPanel: "agTotalRowCountComponent"
                },
                {
                    statusPanel: "agFilteredRowCountComponent"
                }
            ]
        };
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])(__TURBOPACK__imported__module__2776__["AgGridProvider"], {
        modules: modules,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("div", {
            className: "h-full min-h-160 dloomberg-terminal-grid",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])(__TURBOPACK__imported__module__2776__["AgGridReact"], {
                className: "size-full",
                containerStyle: {
                    height: "100%",
                    width: "100%"
                },
                theme: __TURBOPACK__imported__module__78786__["dloombergTerminalTheme"],
                rowData: rowData,
                loading: isLoading,
                columnDefs: columnDefs,
                defaultColDef: defaultColDef,
                statusBar: statusBar,
                onFirstDataRendered: onFirstDataRendered,
                sideBar: {
                    toolPanels: [
                        "columns",
                        "filters"
                    ]
                },
                cellSelection: {
                    handle: {
                        mode: "range"
                    }
                },
                rowSelection: {
                    mode: "multiRow",
                    enableClickSelection: true
                },
                selectionColumnDef: {
                    width: 34
                }
            })
        })
    });
}
var __TURBOPACK__imported__module__19455__ = __turbopack_context__.i(19455);
// MERGED MODULE: [project]/src/components/ui/button-group.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__3 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__84028__ = __turbopack_context__.i(84028);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/use-render/useRender.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
;
function useRender(params) {
    return (0, __TURBOPACK__imported__module__19996__["useRenderElement"])(params.defaultTagName ?? 'div', params, params);
}
var __TURBOPACK__imported__module__94237__ = __turbopack_context__.i(94237);
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
var __TURBOPACK__imported__module__72436__ = __turbopack_context__.i(72436);
;
;
;
;
;
;
const buttonGroupVariants = (0, __TURBOPACK__imported__module__94237__["cva"])("flex w-fit items-stretch rounded-none *:focus-visible:relative *:focus-visible:z-10 has-[>[data-slot=button-group]]:gap-2 has-[select[aria-hidden=true]:last-child]:[&>[data-slot=select-trigger]:last-of-type]:rounded-none [&>[data-slot=select-trigger]:not([class*='w-'])]:w-fit [&>input]:flex-1", {
    variants: {
        orientation: {
            horizontal: "*:data-slot:rounded-r-none [&>[data-slot]~[data-slot]]:rounded-l-none [&>[data-slot]~[data-slot]]:border-l-0",
            vertical: "flex-col *:data-slot:rounded-b-none [&>[data-slot]~[data-slot]]:rounded-t-none [&>[data-slot]~[data-slot]]:border-t-0"
        }
    },
    defaultVariants: {
        orientation: "horizontal"
    }
});
function ButtonGroup({ className, orientation, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])("div", {
        role: "group",
        "data-slot": "button-group",
        "data-orientation": orientation,
        className: (0, __TURBOPACK__imported__module__75157__["cn"])(buttonGroupVariants({
            orientation
        }), className),
        ...props
    });
}
function ButtonGroupText({ className, render, ...props }) {
    return useRender({
        defaultTagName: "div",
        props: (0, __TURBOPACK__imported__module__84028__["mergeProps"])({
            className: (0, __TURBOPACK__imported__module__75157__["cn"])("flex items-center gap-2 rounded-none border bg-muted px-2.5 text-xs font-medium [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4", className)
        }, props),
        render,
        state: {
            slot: "button-group-text"
        }
    });
}
function ButtonGroupSeparator({ className, orientation = "vertical", ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(__TURBOPACK__imported__module__72436__["Separator"], {
        "data-slot": "button-group-separator",
        orientation: orientation,
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("relative self-stretch bg-input data-horizontal:mx-px data-horizontal:w-auto data-vertical:my-px data-vertical:h-auto", className),
        ...props
    });
}
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/refresh-ccw.mjs [app-client] (ecmascript) <export default as RefreshCcw>
;
// MERGED MODULE: [project]/node_modules/.pnpm/lucide-react@1.16.0_react@19.2.4/node_modules/lucide-react/dist/esm/icons/refresh-ccw.mjs [app-client] (ecmascript)
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
            d: "M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",
            key: "14sxne"
        }
    ],
    [
        "path",
        {
            d: "M3 3v5h5",
            key: "1xhq8a"
        }
    ],
    [
        "path",
        {
            d: "M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16",
            key: "1hlbsb"
        }
    ],
    [
        "path",
        {
            d: "M16 16h5v5",
            key: "ccwih5"
        }
    ]
];
const RefreshCcw = (0, __TURBOPACK__imported__module__67022__["default"])("refresh-ccw", __iconNode);
;
"use client";
;
;
;
;
;
;
function HkssPage() {
    const [period, setPeriod] = (0, __TURBOPACK__imported__module__51268__["useState"])("am");
    const [reloadKey, setReloadKey] = (0, __TURBOPACK__imported__module__51268__["useState"])(0);
    const handleReload = (0, __TURBOPACK__imported__module__51268__["useCallback"])(()=>setReloadKey((k)=>k + 1), []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
        className: "flex flex-col items-center size-full px-4 overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
            className: "size-full max-w-350 flex flex-col",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
                    className: "flex flex-col gap-3 py-3",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                            className: "text-muted-foreground",
                            children: "HKEX Short Selling Turnover Today"
                        }),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])("div", {
                            className: "flex justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])(__TURBOPACK__imported__module__19455__["Button"], {
                                    size: "sm",
                                    variant: "default",
                                    onClick: handleReload,
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(RefreshCcw, {}),
                                        "Reload"
                                    ]
                                }),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                                    className: "flex items-center gap-2",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsxs"])(ButtonGroup, {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(__TURBOPACK__imported__module__19455__["Button"], {
                                                size: "sm",
                                                variant: period === "am" ? "default" : "outline",
                                                onClick: ()=>setPeriod("am"),
                                                children: "Morning Close"
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(__TURBOPACK__imported__module__19455__["Button"], {
                                                size: "sm",
                                                variant: period === "pm" ? "default" : "outline",
                                                onClick: ()=>setPeriod("pm"),
                                                children: "Day Close"
                                            })
                                        ]
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("div", {
                    className: "flex-1",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(ShortSellTurnoverGrid, {
                        period: period,
                        reloadTrigger: reloadKey
                    })
                })
            ]
        })
    });
}
"use client";
;
;
function Page() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(HkssPage, {});
}
__turbopack_context__.s([
    "default",
    0,
    Page
], 16552);
}),
]);