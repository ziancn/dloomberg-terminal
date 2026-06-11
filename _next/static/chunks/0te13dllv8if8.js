(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
34674, ((__turbopack_context__) => {
"use strict";

function serializeValue(value) {
    if (value == null) {
        return '';
    }
    if (typeof value === 'string') {
        return value;
    }
    try {
        return JSON.stringify(value);
    } catch  {
        return String(value);
    }
}
__turbopack_context__.s([
    "serializeValue",
    0,
    serializeValue
]);
}),
]);