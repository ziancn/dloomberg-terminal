(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
77912, ((__turbopack_context__) => {
"use strict";

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
    transitionStatus (value) {
        if (value === 'starting') {
            return STARTING_HOOK;
        }
        if (value === 'ending') {
            return ENDING_HOOK;
        }
        return null;
    }
};
__turbopack_context__.s([
    "TransitionStatusDataAttributes",
    0,
    TransitionStatusDataAttributes,
    "transitionStatusMapping",
    0,
    transitionStatusMapping
]);
}),
34409, 93719, 
((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "createChangeEventDetails",
    0,
    createChangeEventDetails
], 34409);
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
__turbopack_context__.s([
    "REASONS",
    0,
    __TURBOPACK__imported__module__54906__
], 93719);
}),
15732, 70280, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useBaseUiId.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useId.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/safeReact.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
;
const SafeReact = {
    ...__TURBOPACK__imported__module__51268__1
};
'use client';
;
;
let globalId = 0;
// TODO React 17: Remove `useGlobalId` once React 17 support is removed
function useGlobalId(idOverride, prefix = 'mui') {
    const [defaultId, setDefaultId] = __TURBOPACK__imported__module__51268__["useState"](idOverride);
    const id = idOverride || defaultId;
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
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
function useId(idOverride, prefix) {
    // React.useId() is only available from React 17.0.0.
    if (maybeReactUseId !== undefined) {
        const reactId = maybeReactUseId();
        return idOverride ?? (prefix ? `${prefix}-${reactId}` : reactId);
    }
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler
    // eslint-disable-next-line react-hooks/rules-of-hooks -- `React.useId` is invariant at runtime.
    return useGlobalId(idOverride, prefix);
}
__turbopack_context__.s([
    "useId",
    0,
    useId
], 70280);
'use client';
;
function useBaseUiId(idOverride) {
    return useId(idOverride, 'base-ui');
}
__turbopack_context__.s([
    "useBaseUiId",
    0,
    useBaseUiId
], 15732);
}),
5328, 94076, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useTimeout.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useOnMount.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
'use client';
;
const EMPTY = [];
function useOnMount(fn) {
    // TODO: uncomment once we enable eslint-plugin-react-compiler // eslint-disable-next-line react-compiler/react-compiler -- no need to put `fn` in the dependency array
    /* eslint-disable react-hooks/exhaustive-deps */ __TURBOPACK__imported__module__51268__["useEffect"](fn, EMPTY);
/* eslint-enable react-hooks/exhaustive-deps */ }
__turbopack_context__.s([
    "useOnMount",
    0,
    useOnMount
], 94076);
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
    const timeout = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(Timeout.create).current;
    useOnMount(timeout.disposeEffect);
    return timeout;
}
__turbopack_context__.s([
    "Timeout",
    0,
    Timeout,
    "useTimeout",
    0,
    useTimeout
], 5328);
}),
14028, ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "isAndroid",
    0,
    isAndroid,
    "isIOS",
    0,
    isIOS,
    "isJSDOM",
    0,
    isJSDOM,
    "isMac",
    0,
    isMac,
    "isSafari",
    0,
    isSafari,
    "isWebKit",
    0,
    isWebKit
]);
}),
31078, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
var __TURBOPACK__imported__module__94076__ = __turbopack_context__.i(94076);
'use client';
;
;
/** Unlike `setTimeout`, rAF doesn't guarantee a positive integer return value, so we can't have
 * a monomorphic `uint` type with `0` meaning empty.
 * See warning note at:
 * https://developer.mozilla.org/en-US/docs/Web/API/Window/requestAnimationFrame#return_value */ const EMPTY = null;
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
    currentId = EMPTY;
    /**
   * Executes `fn` after `delay`, clearing any previously scheduled call.
   */ request(fn) {
        this.cancel();
        this.currentId = scheduler.request(()=>{
            this.currentId = EMPTY;
            fn();
        });
    }
    cancel = ()=>{
        if (this.currentId !== EMPTY) {
            scheduler.cancel(this.currentId);
            this.currentId = EMPTY;
        }
    };
    disposeEffect = ()=>{
        return this.cancel;
    };
}
function useAnimationFrame() {
    const timeout = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(AnimationFrame.create).current;
    (0, __TURBOPACK__imported__module__94076__["useOnMount"])(timeout.disposeEffect);
    return timeout;
}
__turbopack_context__.s([
    "AnimationFrame",
    0,
    AnimationFrame,
    "useAnimationFrame",
    0,
    useAnimationFrame
]);
}),
41352, ((__turbopack_context__) => {
"use strict";

;
function ownerDocument(node) {
    return node?.ownerDocument || document;
}
__turbopack_context__.s([
    "ownerDocument",
    0,
    ownerDocument
]);
}),
368, ((__turbopack_context__) => {
"use strict";

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
__turbopack_context__.s([
    "visuallyHidden",
    0,
    visuallyHidden,
    "visuallyHiddenInput",
    0,
    visuallyHiddenInput
]);
}),
95624, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
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
    if (rootNode && (0, __TURBOPACK__imported__module__92615__["isShadowRoot"])(rootNode)) {
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
__turbopack_context__.s([
    "activeElement",
    0,
    activeElement,
    "contains",
    0,
    contains,
    "getTarget",
    0,
    getTarget
]);
}),
83306, ((__turbopack_context__) => {
"use strict";

const FOCUSABLE_ATTRIBUTE = 'data-base-ui-focusable';
const ACTIVE_KEY = 'active';
const SELECTED_KEY = 'selected';
const TYPEABLE_SELECTOR = "input:not([type='hidden']):not([disabled])," + "[contenteditable]:not([contenteditable='false']),textarea:not([disabled])";
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
__turbopack_context__.s([
    "ACTIVE_KEY",
    0,
    ACTIVE_KEY,
    "ARROW_DOWN",
    0,
    ARROW_DOWN,
    "ARROW_LEFT",
    0,
    ARROW_LEFT,
    "ARROW_RIGHT",
    0,
    ARROW_RIGHT,
    "ARROW_UP",
    0,
    ARROW_UP,
    "FOCUSABLE_ATTRIBUTE",
    0,
    FOCUSABLE_ATTRIBUTE,
    "SELECTED_KEY",
    0,
    SELECTED_KEY,
    "TYPEABLE_SELECTOR",
    0,
    TYPEABLE_SELECTOR
]);
}),
56870, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__14028__ = __turbopack_context__.i(14028);
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
    if (__TURBOPACK__imported__module__14028__["isAndroid"] && event.pointerType) {
        return event.type === 'click' && event.buttons === 1;
    }
    return event.detail === 0 && !event.pointerType;
}
function isVirtualPointerEvent(event) {
    if (__TURBOPACK__imported__module__14028__["isJSDOM"]) {
        return false;
    }
    return !__TURBOPACK__imported__module__14028__["isAndroid"] && event.width === 0 && event.height === 0 || __TURBOPACK__imported__module__14028__["isAndroid"] && event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === 'mouse' || // iOS VoiceOver returns 0.333• for width/height.
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
__turbopack_context__.s([
    "isClickLikeEvent",
    0,
    isClickLikeEvent,
    "isMouseLikePointerType",
    0,
    isMouseLikePointerType,
    "isReactEvent",
    0,
    isReactEvent,
    "isVirtualClick",
    0,
    isVirtualClick,
    "isVirtualPointerEvent",
    0,
    isVirtualPointerEvent,
    "stopEvent",
    0,
    stopEvent
]);
}),
41645, ((__turbopack_context__) => {
"use strict";

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
function clamp(start, value, end) {
    return max(start, min(value, end));
}
function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
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
__turbopack_context__.s([
    "clamp",
    0,
    clamp,
    "createCoords",
    0,
    createCoords,
    "evaluate",
    0,
    evaluate,
    "floor",
    0,
    floor,
    "getAlignment",
    0,
    getAlignment,
    "getAlignmentAxis",
    0,
    getAlignmentAxis,
    "getAlignmentSides",
    0,
    getAlignmentSides,
    "getAxisLength",
    0,
    getAxisLength,
    "getExpandedPlacements",
    0,
    getExpandedPlacements,
    "getOppositeAlignmentPlacement",
    0,
    getOppositeAlignmentPlacement,
    "getOppositeAxis",
    0,
    getOppositeAxis,
    "getOppositeAxisPlacements",
    0,
    getOppositeAxisPlacements,
    "getOppositePlacement",
    0,
    getOppositePlacement,
    "getPaddingObject",
    0,
    getPaddingObject,
    "getSide",
    0,
    getSide,
    "getSideAxis",
    0,
    getSideAxis,
    "max",
    0,
    max,
    "min",
    0,
    min,
    "placements",
    0,
    placements,
    "rectToClientRect",
    0,
    rectToClientRect,
    "round",
    0,
    round,
    "sides",
    0,
    sides
]);
}),
21922, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__41645__ = __turbopack_context__.i(41645);
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__56870__ = __turbopack_context__.i(56870);
var __TURBOPACK__imported__module__83306__ = __turbopack_context__.i(83306);
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
    if (event.key === __TURBOPACK__imported__module__83306__["ARROW_UP"]) {
        verticalDirection = 'up';
    } else if (event.key === __TURBOPACK__imported__module__83306__["ARROW_DOWN"]) {
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
            const rowCount = (0, __TURBOPACK__imported__module__41645__["floor"])(maxIndex / verticalCols) + 1;
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
            (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
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
        const prevRow = (0, __TURBOPACK__imported__module__41645__["floor"])(prevIndex / cols);
        if (event.key === (rtl ? __TURBOPACK__imported__module__83306__["ARROW_LEFT"] : __TURBOPACK__imported__module__83306__["ARROW_RIGHT"])) {
            if (stop) {
                (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
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
        if (event.key === (rtl ? __TURBOPACK__imported__module__83306__["ARROW_RIGHT"] : __TURBOPACK__imported__module__83306__["ARROW_LEFT"])) {
            if (stop) {
                (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
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
        const lastRow = (0, __TURBOPACK__imported__module__41645__["floor"])(maxIndex / cols) === prevRow;
        if (isIndexOutOfListBounds(list, nextIndex)) {
            if (loopFocus && lastRow) {
                nextIndex = event.key === (rtl ? __TURBOPACK__imported__module__83306__["ARROW_RIGHT"] : __TURBOPACK__imported__module__83306__["ARROW_LEFT"]) ? maxIndex : findNonDisabledListIndex(list, {
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
function isElementVisible(element, styles = element ? (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(element) : null) {
    if (!element || !element.isConnected || !styles || isHiddenByStyles(styles)) {
        return false;
    }
    if (typeof element.checkVisibility === 'function') {
        return element.checkVisibility();
    }
    return styles.display !== 'none' && styles.display !== 'contents';
}
__turbopack_context__.s([
    "createGridCellMap",
    0,
    createGridCellMap,
    "findNonDisabledListIndex",
    0,
    findNonDisabledListIndex,
    "getGridCellIndexOfCorner",
    0,
    getGridCellIndexOfCorner,
    "getGridCellIndices",
    0,
    getGridCellIndices,
    "getGridNavigatedIndex",
    0,
    getGridNavigatedIndex,
    "getMaxListIndex",
    0,
    getMaxListIndex,
    "getMinListIndex",
    0,
    getMinListIndex,
    "isElementVisible",
    0,
    isElementVisible,
    "isIndexOutOfListBounds",
    0,
    isIndexOutOfListBounds,
    "isListIndexDisabled",
    0,
    isListIndexDisabled
]);
}),
86162, ((__turbopack_context__) => {
"use strict";

/**
 * If the provided argument is a ref object, returns its `current` value.
 * Otherwise, returns the argument itself.
 */ function resolveRef(maybeRef) {
    if (maybeRef == null) {
        return maybeRef;
    }
    return 'current' in maybeRef ? maybeRef.current : maybeRef;
}
__turbopack_context__.s([
    "resolveRef",
    0,
    resolveRef
]);
}),
6899, 99802, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useOpenChangeComplete.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/useAnimationsFinished.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__98057__ = __turbopack_context__.i(98057);
var __TURBOPACK__imported__module__31078__ = __turbopack_context__.i(31078);
var __TURBOPACK__imported__module__32787__1 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__86162__ = __turbopack_context__.i(86162);
var __TURBOPACK__imported__module__77912__ = __turbopack_context__.i(77912);
'use client';
;
;
;
;
;
function useAnimationsFinished(elementOrRef, waitForStartingStyleRemoved = false, treatAbortedAsFinished = true) {
    const frame = (0, __TURBOPACK__imported__module__31078__["useAnimationFrame"])();
    return (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])((fnToExecute, /**
   * An optional [AbortSignal](https://developer.mozilla.org/en-US/docs/Web/API/AbortSignal) that
   * can be used to abort `fnToExecute` before all the animations have finished.
   * @default null
   */ signal = null)=>{
        frame.cancel();
        const element = (0, __TURBOPACK__imported__module__86162__["resolveRef"])(elementOrRef);
        if (element == null) {
            return;
        }
        const resolvedElement = element;
        const done = ()=>{
            // Synchronously flush the unmounting of the component so that the browser doesn't
            // paint: https://github.com/mui/base-ui/issues/979
            __TURBOPACK__imported__module__98057__["flushSync"](fnToExecute);
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
            const startingStyleAttribute = __TURBOPACK__imported__module__77912__["TransitionStatusDataAttributes"].startingStyle;
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
__turbopack_context__.s([
    "useAnimationsFinished",
    0,
    useAnimationsFinished
], 99802);
'use client';
;
;
;
function useOpenChangeComplete(parameters) {
    const { enabled = true, open, ref, onComplete: onCompleteParam } = parameters;
    const onComplete = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(onCompleteParam);
    const runOnceAnimationsFinish = useAnimationsFinished(ref, open, false);
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
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
__turbopack_context__.s([
    "useOpenChangeComplete",
    0,
    useOpenChangeComplete
], 6899);
}),
26717, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
;
;
const ARROW_UP = 'ArrowUp';
const ARROW_DOWN = 'ArrowDown';
const ARROW_LEFT = 'ArrowLeft';
const ARROW_RIGHT = 'ArrowRight';
const HOME = 'Home';
const END = 'End';
const PAGE_UP = 'PageUp';
const PAGE_DOWN = 'PageDown';
const HORIZONTAL_KEYS = new Set([
    ARROW_LEFT,
    ARROW_RIGHT
]);
const HORIZONTAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_LEFT,
    ARROW_RIGHT,
    HOME,
    END
]);
const VERTICAL_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN
]);
const VERTICAL_KEYS_WITH_EXTRA_KEYS = new Set([
    ARROW_UP,
    ARROW_DOWN,
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
    ARROW_UP,
    ARROW_DOWN,
    ARROW_LEFT,
    ARROW_RIGHT,
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
        const elementOffsetLeft = getOffset(scrollContainer, element, 'left');
        const containerStyles = getStyles(scrollContainer);
        const elementStyles = getStyles(element);
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
        const elementOffsetTop = getOffset(scrollContainer, element, 'top');
        const containerStyles = getStyles(scrollContainer);
        const elementStyles = getStyles(element);
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
function getOffset(ancestor, element, side) {
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
function getStyles(element) {
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
__turbopack_context__.s([
    "ALL_KEYS",
    0,
    ALL_KEYS,
    "ARROW_DOWN",
    0,
    ARROW_DOWN,
    "ARROW_KEYS",
    0,
    ARROW_KEYS,
    "ARROW_LEFT",
    0,
    ARROW_LEFT,
    "ARROW_RIGHT",
    0,
    ARROW_RIGHT,
    "ARROW_UP",
    0,
    ARROW_UP,
    "COMPOSITE_KEYS",
    0,
    COMPOSITE_KEYS,
    "END",
    0,
    END,
    "HOME",
    0,
    HOME,
    "HORIZONTAL_KEYS",
    0,
    HORIZONTAL_KEYS,
    "HORIZONTAL_KEYS_WITH_EXTRA_KEYS",
    0,
    HORIZONTAL_KEYS_WITH_EXTRA_KEYS,
    "MODIFIER_KEYS",
    0,
    MODIFIER_KEYS,
    "SHIFT",
    0,
    SHIFT,
    "VERTICAL_KEYS",
    0,
    VERTICAL_KEYS,
    "VERTICAL_KEYS_WITH_EXTRA_KEYS",
    0,
    VERTICAL_KEYS_WITH_EXTRA_KEYS,
    "isNativeInput",
    0,
    isNativeInput,
    "scrollIntoViewIfNeeded",
    0,
    scrollIntoViewIfNeeded
]);
}),
73650, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
'use client';
;
;
;
function useValueChanged(value, onChange) {
    const valueRef = __TURBOPACK__imported__module__51268__["useRef"](value);
    const onChangeCallback = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(onChange);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (valueRef.current === value) {
            return;
        }
        onChangeCallback(valueRef.current);
    }, [
        value,
        onChangeCallback
    ]);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        valueRef.current = value;
    }, [
        value
    ]);
}
__turbopack_context__.s([
    "useValueChanged",
    0,
    useValueChanged
]);
}),
29573, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__31078__ = __turbopack_context__.i(31078);
'use client';
;
;
;
function useTransitionStatus(open, enableIdleState = false, deferEndingState = false) {
    const [transitionStatus, setTransitionStatus] = __TURBOPACK__imported__module__51268__["useState"](open && enableIdleState ? 'idle' : undefined);
    const [mounted, setMounted] = __TURBOPACK__imported__module__51268__["useState"](open);
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
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!open && mounted && transitionStatus !== 'ending' && deferEndingState) {
            const frame = __TURBOPACK__imported__module__31078__["AnimationFrame"].request(()=>{
                setTransitionStatus('ending');
            });
            return ()=>{
                __TURBOPACK__imported__module__31078__["AnimationFrame"].cancel(frame);
            };
        }
        return undefined;
    }, [
        open,
        mounted,
        transitionStatus,
        deferEndingState
    ]);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!open || enableIdleState) {
            return undefined;
        }
        const frame = __TURBOPACK__imported__module__31078__["AnimationFrame"].request(()=>{
            // Avoid `flushSync` here due to Firefox.
            // See https://github.com/mui/base-ui/pull/3424
            setTransitionStatus(undefined);
        });
        return ()=>{
            __TURBOPACK__imported__module__31078__["AnimationFrame"].cancel(frame);
        };
    }, [
        enableIdleState,
        open
    ]);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!open || !enableIdleState) {
            return undefined;
        }
        if (open && mounted && transitionStatus !== 'idle') {
            setTransitionStatus('starting');
        }
        const frame = __TURBOPACK__imported__module__31078__["AnimationFrame"].request(()=>{
            setTransitionStatus('idle');
        });
        return ()=>{
            __TURBOPACK__imported__module__31078__["AnimationFrame"].cancel(frame);
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
__turbopack_context__.s([
    "useTransitionStatus",
    0,
    useTransitionStatus
]);
}),
83327, 38744, 
76194, 
43457, 
67598, 
((__turbopack_context__) => {
"use strict";

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
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/field-root-context/FieldRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__16174__ = __turbopack_context__.i(16174);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
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
    valid (value) {
        if (value === null) {
            return null;
        }
        if (value) {
            return {
                [FieldControlDataAttributes.valid]: ''
            };
        }
        return {
            [FieldControlDataAttributes.invalid]: ''
        };
    }
};
__turbopack_context__.s([
    "DEFAULT_FIELD_ROOT_STATE",
    0,
    DEFAULT_FIELD_ROOT_STATE,
    "DEFAULT_FIELD_STATE_ATTRIBUTES",
    0,
    DEFAULT_FIELD_STATE_ATTRIBUTES,
    "DEFAULT_VALIDITY_STATE",
    0,
    DEFAULT_VALIDITY_STATE,
    "fieldValidityMapping",
    0,
    fieldValidityMapping
], 38744);
'use client';
;
;
;
;
;
const FieldRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["createContext"]({
    invalid: undefined,
    name: undefined,
    validityData: {
        state: DEFAULT_VALIDITY_STATE,
        errors: [],
        error: '',
        value: '',
        initialValue: null
    },
    setValidityData: __TURBOPACK__imported__module__24659__["NOOP"],
    disabled: undefined,
    touched: DEFAULT_FIELD_STATE_ATTRIBUTES.touched,
    setTouched: __TURBOPACK__imported__module__24659__["NOOP"],
    dirty: DEFAULT_FIELD_STATE_ATTRIBUTES.dirty,
    setDirty: __TURBOPACK__imported__module__24659__["NOOP"],
    filled: DEFAULT_FIELD_STATE_ATTRIBUTES.filled,
    setFilled: __TURBOPACK__imported__module__24659__["NOOP"],
    focused: DEFAULT_FIELD_STATE_ATTRIBUTES.focused,
    setFocused: __TURBOPACK__imported__module__24659__["NOOP"],
    validate: ()=>null,
    validationMode: 'onSubmit',
    validationDebounceTime: 0,
    shouldValidateOnChange: ()=>false,
    state: DEFAULT_FIELD_ROOT_STATE,
    markedDirtyRef: {
        current: false
    },
    registerFieldControl: __TURBOPACK__imported__module__24659__["NOOP"],
    validation: {
        getValidationProps: (props = __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"])=>props,
        getInputValidationProps: (props = __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"])=>props,
        inputRef: {
            current: null
        },
        commit: async ()=>{}
    }
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useFieldRootContext(optional = true) {
    const context = __TURBOPACK__imported__module__51268__["useContext"](FieldRootContext);
    if (context.setValidityData === __TURBOPACK__imported__module__24659__["NOOP"] && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__["default"])(28));
    }
    return context;
}
__turbopack_context__.s([
    "FieldRootContext",
    0,
    FieldRootContext,
    "useFieldRootContext",
    0,
    useFieldRootContext
], 76194);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/fieldset/root/FieldsetRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__1 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__1 = __TURBOPACK__imported__module__16174__;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const FieldsetRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__1["createContext"]({
    legendId: undefined,
    setLegendId: ()=>{},
    disabled: undefined
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useFieldsetRootContext(optional = false) {
    const context = __TURBOPACK__imported__module__51268__1["useContext"](FieldsetRootContext);
    if (!context && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__1["default"])(86));
    }
    return context;
}
__turbopack_context__.s([
    "useFieldsetRootContext",
    0,
    useFieldsetRootContext
], 43457);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/form-context/FormContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__2 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__1 = __TURBOPACK__imported__module__24659__;
'use client';
;
;
const FormContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__2["createContext"]({
    formRef: {
        current: {
            fields: new Map()
        }
    },
    errors: {},
    clearErrors: __TURBOPACK__imported__module__24659__1["NOOP"],
    validationMode: 'onSubmit',
    submitAttemptedRef: {
        current: false
    }
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useFormContext() {
    return __TURBOPACK__imported__module__51268__2["useContext"](FormContext);
}
__turbopack_context__.s([
    "useFormContext",
    0,
    useFormContext
], 67598);
}),
12381, 68338, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableProvider.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
var __TURBOPACK__imported__module__84028__ = __turbopack_context__.i(84028);
var __TURBOPACK__imported__module__15732__ = __turbopack_context__.i(15732);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/LabelableContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__1 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
'use client';
;
;
const LabelableContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__1["createContext"]({
    controlId: undefined,
    registerControlId: __TURBOPACK__imported__module__24659__["NOOP"],
    labelId: undefined,
    setLabelId: __TURBOPACK__imported__module__24659__["NOOP"],
    messageIds: [],
    setMessageIds: __TURBOPACK__imported__module__24659__["NOOP"],
    getDescriptionProps: (externalProps)=>externalProps
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useLabelableContext() {
    return __TURBOPACK__imported__module__51268__1["useContext"](LabelableContext);
}
__turbopack_context__.s([
    "LabelableContext",
    0,
    LabelableContext,
    "useLabelableContext",
    0,
    useLabelableContext
], 68338);
/**
 * @internal
 */ var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
'use client';
;
;
;
;
;
;
;
const LabelableProvider = function LabelableProvider(props) {
    const defaultId = (0, __TURBOPACK__imported__module__15732__["useBaseUiId"])();
    const initialControlId = props.controlId === undefined ? defaultId : props.controlId;
    const [controlId, setControlIdState] = __TURBOPACK__imported__module__51268__["useState"](initialControlId);
    const [labelId, setLabelId] = __TURBOPACK__imported__module__51268__["useState"](props.labelId);
    const [messageIds, setMessageIds] = __TURBOPACK__imported__module__51268__["useState"]([]);
    const registrationsRef = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(()=>new Map());
    const { messageIds: parentMessageIds } = useLabelableContext();
    const registerControlId = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((source, nextId)=>{
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
    const getDescriptionProps = __TURBOPACK__imported__module__51268__["useCallback"]((externalProps)=>{
        return (0, __TURBOPACK__imported__module__84028__["mergeProps"])({
            'aria-describedby': parentMessageIds.concat(messageIds).join(' ') || undefined
        }, externalProps);
    }, [
        parentMessageIds,
        messageIds
    ]);
    const contextValue = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(LabelableContext.Provider, {
        value: contextValue,
        children: props.children
    });
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "LabelableProvider",
    0,
    LabelableProvider
], 12381);
}),
22789, 90134, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/root/FieldRoot.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__76194__ = __turbopack_context__.i(76194);
var __TURBOPACK__imported__module__38744__ = __turbopack_context__.i(38744);
var __TURBOPACK__imported__module__43457__ = __turbopack_context__.i(43457);
var __TURBOPACK__imported__module__67598__ = __turbopack_context__.i(67598);
var __TURBOPACK__imported__module__12381__ = __turbopack_context__.i(12381);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/root/useFieldValidation.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
var __TURBOPACK__imported__module__5328__ = __turbopack_context__.i(5328);
var __TURBOPACK__imported__module__32787__1 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__68338__ = __turbopack_context__.i(68338);
var __TURBOPACK__imported__module__84028__ = __turbopack_context__.i(84028);
var __TURBOPACK__imported__module__38744__1 = __TURBOPACK__imported__module__38744__;
var __TURBOPACK__imported__module__67598__1 = __TURBOPACK__imported__module__67598__;
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
__turbopack_context__.s([
    "getCombinedFieldValidityData",
    0,
    getCombinedFieldValidityData
], 90134);
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
const validityKeys = Object.keys(__TURBOPACK__imported__module__38744__1["DEFAULT_VALIDITY_STATE"]);
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
    const { formRef, clearErrors } = (0, __TURBOPACK__imported__module__67598__1["useFormContext"])();
    const { setValidityData, validate, validityData, validationDebounceTime, invalid, markedDirtyRef, state, name, shouldValidateOnChange } = params;
    const { controlId, getDescriptionProps } = (0, __TURBOPACK__imported__module__68338__["useLabelableContext"])();
    const timeout = (0, __TURBOPACK__imported__module__5328__["useTimeout"])();
    const inputRef = __TURBOPACK__imported__module__51268__1["useRef"](null);
    const commit = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])(async (value, revalidate = false)=>{
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
                    value,
                    state: {
                        ...__TURBOPACK__imported__module__38744__1["DEFAULT_VALIDITY_STATE"],
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
            const resultOrPromise = validate(value, formValues);
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
            value,
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
    const getValidationProps = __TURBOPACK__imported__module__51268__1["useCallback"]((externalProps = {})=>(0, __TURBOPACK__imported__module__84028__["mergeProps"])(getDescriptionProps, state.valid === false ? {
            'aria-invalid': true
        } : __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"], externalProps), [
        getDescriptionProps,
        state.valid
    ]);
    const getInputValidationProps = __TURBOPACK__imported__module__51268__1["useCallback"]((externalProps = {})=>(0, __TURBOPACK__imported__module__84028__["mergeProps"])({
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
    return __TURBOPACK__imported__module__51268__1["useMemo"](()=>({
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
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__98057__ = __turbopack_context__.i(98057);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__32787__2 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__67598__2 = __TURBOPACK__imported__module__67598__;
'use client';
;
;
;
;
;
;
function useFieldControlRegistration(params) {
    const { commit, invalid, markedDirtyRef, name, setValidityData, validityData } = params;
    const { formRef } = (0, __TURBOPACK__imported__module__67598__2["useFormContext"])();
    const activeFieldControlSourceRef = __TURBOPACK__imported__module__51268__2["useRef"](null);
    const registrationRef = __TURBOPACK__imported__module__51268__2["useRef"](null);
    const fallbackControlRef = __TURBOPACK__imported__module__51268__2["useRef"](null);
    const getValue = (0, __TURBOPACK__imported__module__32787__2["useStableCallback"])(()=>{
        const registration = registrationRef.current;
        if (!registration) {
            return undefined;
        }
        if (registration.getValue) {
            return registration.getValue();
        }
        return registration.value;
    });
    const validate = (0, __TURBOPACK__imported__module__32787__2["useStableCallback"])((flushSync = true)=>{
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
            __TURBOPACK__imported__module__98057__["flushSync"](()=>commit(nextValue));
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
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
    return (0, __TURBOPACK__imported__module__32787__2["useStableCallback"])((source, registration)=>{
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
/**
 * @internal
 */ var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
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
const FieldRootInner = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function FieldRootInner(componentProps, forwardedRef) {
    const { errors, validationMode: formValidationMode, submitAttemptedRef } = (0, __TURBOPACK__imported__module__67598__["useFormContext"])();
    const { render, className, validate: validateProp, validationDebounceTime = 0, validationMode = formValidationMode, name, disabled: disabledProp = false, invalid: invalidProp, dirty: dirtyProp, touched: touchedProp, actionsRef, style, ...elementProps } = componentProps;
    const { disabled: disabledFieldset } = (0, __TURBOPACK__imported__module__43457__["useFieldsetRootContext"])();
    const validate = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(validateProp || (()=>null));
    const disabled = disabledFieldset || disabledProp;
    const [touchedState, setTouchedUnwrapped] = __TURBOPACK__imported__module__51268__["useState"](false);
    const [dirtyState, setDirtyUnwrapped] = __TURBOPACK__imported__module__51268__["useState"](false);
    const [filled, setFilled] = __TURBOPACK__imported__module__51268__["useState"](false);
    const [focused, setFocused] = __TURBOPACK__imported__module__51268__["useState"](false);
    const dirty = dirtyProp ?? dirtyState;
    const touched = touchedProp ?? touchedState;
    const markedDirtyRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const setDirty = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((value)=>{
        if (dirtyProp !== undefined) {
            return;
        }
        if (value) {
            markedDirtyRef.current = true;
        }
        setDirtyUnwrapped(value);
    });
    const setTouched = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((value)=>{
        if (touchedProp !== undefined) {
            return;
        }
        setTouchedUnwrapped(value);
    });
    const shouldValidateOnChange = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>validationMode === 'onChange' || validationMode === 'onSubmit' && submitAttemptedRef.current);
    const hasFormError = !!name && Object.hasOwn(errors, name) && errors[name] !== undefined;
    const invalid = invalidProp === true || hasFormError;
    const [validityData, setValidityData] = __TURBOPACK__imported__module__51268__["useState"]({
        state: __TURBOPACK__imported__module__38744__["DEFAULT_VALIDITY_STATE"],
        error: '',
        errors: [],
        value: null,
        initialValue: null
    });
    const valid = !invalid && validityData.state.valid;
    const state = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
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
    const handleImperativeValidate = __TURBOPACK__imported__module__51268__["useCallback"](()=>{
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
    __TURBOPACK__imported__module__51268__["useImperativeHandle"](actionsRef, ()=>({
            validate: handleImperativeValidate
        }), [
        handleImperativeValidate
    ]);
    const contextValue = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
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
    const element = (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__38744__["fieldValidityMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__76194__["FieldRootContext"].Provider, {
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
const FieldRoot = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function FieldRoot(componentProps, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__12381__["LabelableProvider"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(FieldRootInner, {
            ...componentProps,
            ref: forwardedRef
        })
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "FieldRoot",
    0,
    FieldRoot
], 22789);
}),
58373, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/label/FieldLabel.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__76194__ = __turbopack_context__.i(76194);
var __TURBOPACK__imported__module__38744__ = __turbopack_context__.i(38744);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
var __TURBOPACK__imported__module__68338__ = __turbopack_context__.i(68338);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabel.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useRegisteredLabelId.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__15732__ = __turbopack_context__.i(15732);
'use client';
;
;
function useRegisteredLabelId(idProp, setLabelId) {
    const id = (0, __TURBOPACK__imported__module__15732__["useBaseUiId"])(idProp);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
var __TURBOPACK__imported__module__68338__1 = __TURBOPACK__imported__module__68338__;
'use client';
;
;
;
;
;
;
function useLabel(params = {}) {
    const { id: idProp, fallbackControlId, native = false, setLabelId: setLabelIdProp, focusControl: focusControlProp } = params;
    const { controlId: contextControlId, setLabelId: setContextLabelId } = (0, __TURBOPACK__imported__module__68338__1["useLabelableContext"])();
    const syncLabelId = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((nextLabelId)=>{
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
        const controlElement = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(event.currentTarget).getElementById(resolvedControlId);
        if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(controlElement)) {
            focusElementWithVisible(controlElement);
        }
    }
    function handleInteraction(event) {
        const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(event.nativeEvent);
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
const FieldLabel = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function FieldLabel(componentProps, forwardedRef) {
    const { render, className, style, id: idProp, nativeLabel = true, ...elementProps } = componentProps;
    const fieldRootContext = (0, __TURBOPACK__imported__module__76194__["useFieldRootContext"])(false);
    const { labelId } = (0, __TURBOPACK__imported__module__68338__["useLabelableContext"])();
    const labelRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const labelProps = useLabel({
        id: labelId ?? idProp,
        native: nativeLabel
    });
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const element = (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('label', componentProps, {
        ref: [
            forwardedRef,
            labelRef
        ],
        state: fieldRootContext.state,
        props: [
            labelProps,
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__38744__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "FieldLabel",
    0,
    FieldLabel
], 58373);
}),
24769, 77088, 
61886, 
90017, 
31914, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/error/FieldError.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__76194__ = __turbopack_context__.i(76194);
var __TURBOPACK__imported__module__68338__ = __turbopack_context__.i(68338);
var __TURBOPACK__imported__module__38744__ = __turbopack_context__.i(38744);
var __TURBOPACK__imported__module__67598__ = __turbopack_context__.i(67598);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
var __TURBOPACK__imported__module__15732__ = __turbopack_context__.i(15732);
var __TURBOPACK__imported__module__6899__ = __turbopack_context__.i(6899);
var __TURBOPACK__imported__module__77912__ = __turbopack_context__.i(77912);
var __TURBOPACK__imported__module__29573__ = __turbopack_context__.i(29573);
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
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
const stateAttributesMapping = {
    ...__TURBOPACK__imported__module__38744__["fieldValidityMapping"],
    ...__TURBOPACK__imported__module__77912__["transitionStatusMapping"]
};
const FieldError = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function FieldError(componentProps, forwardedRef) {
    const { render, id: idProp, className, match, style, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__15732__["useBaseUiId"])(idProp);
    const { validityData, state: fieldState, name } = (0, __TURBOPACK__imported__module__76194__["useFieldRootContext"])(false);
    const { setMessageIds } = (0, __TURBOPACK__imported__module__68338__["useLabelableContext"])();
    const { errors } = (0, __TURBOPACK__imported__module__67598__["useFormContext"])();
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
    const { mounted, transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__29573__["useTransitionStatus"])(rendered);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
    const errorRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const [lastRenderedMessage, setLastRenderedMessage] = __TURBOPACK__imported__module__51268__["useState"](null);
    const [lastRenderedMessageKey, setLastRenderedMessageKey] = __TURBOPACK__imported__module__51268__["useState"](null);
    const clientErrorMessage = validityData.errors.length > 1 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("ul", {
        children: validityData.errors.map((message)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("li", {
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
    (0, __TURBOPACK__imported__module__6899__["useOpenChangeComplete"])({
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
    const element = (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('div', componentProps, {
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
        stateAttributesMapping,
        enabled: mounted
    });
    if (!mounted) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "FieldError",
    0,
    FieldError
], 24769);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/description/FieldDescription.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__1 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__1 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__76194__1 = __TURBOPACK__imported__module__76194__;
var __TURBOPACK__imported__module__68338__1 = __TURBOPACK__imported__module__68338__;
var __TURBOPACK__imported__module__38744__1 = __TURBOPACK__imported__module__38744__;
var __TURBOPACK__imported__module__15732__1 = __TURBOPACK__imported__module__15732__;
var __TURBOPACK__imported__module__19996__1 = __TURBOPACK__imported__module__19996__;
'use client';
;
;
;
;
;
;
;
const FieldDescription = /*#__PURE__*/ __TURBOPACK__imported__module__51268__1["forwardRef"](function FieldDescription(componentProps, forwardedRef) {
    const { render, id: idProp, className, style, ...elementProps } = componentProps;
    const id = (0, __TURBOPACK__imported__module__15732__1["useBaseUiId"])(idProp);
    const fieldRootContext = (0, __TURBOPACK__imported__module__76194__1["useFieldRootContext"])(false);
    const { setMessageIds } = (0, __TURBOPACK__imported__module__68338__1["useLabelableContext"])();
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
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
    const element = (0, __TURBOPACK__imported__module__19996__1["useRenderElement"])('p', componentProps, {
        ref: forwardedRef,
        state: fieldRootContext.state,
        props: [
            {
                id
            },
            elementProps
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__38744__1["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "FieldDescription",
    0,
    FieldDescription
], 77088);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useControlled.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__2 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
function useControlled({ controlled, default: defaultProp, name, state = 'value' }) {
    // isControlled is ignored in the hook dependency lists as it should never change.
    const { current: isControlled } = __TURBOPACK__imported__module__51268__2["useRef"](controlled !== undefined);
    const [valueState, setValue] = __TURBOPACK__imported__module__51268__2["useState"](defaultProp);
    const value = isControlled ? controlled : valueState;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const setValueIfUncontrolled = __TURBOPACK__imported__module__51268__2["useCallback"]((newValue)=>{
        if (!isControlled) {
            setValue(newValue);
        }
    }, []);
    return [
        value,
        setValueIfUncontrolled
    ];
}
function serializeToDevModeString(input) {
    let nextId = 0;
    const seen = new WeakMap();
    try {
        const result = JSON.stringify(input, function replacer(key, value) {
            if (key === '_owner' && this != null && typeof this === 'object' && '$$typeof' in this) {
                return undefined;
            }
            if (typeof value === 'bigint') {
                return `__bigint__:${value}`;
            }
            if (value !== null && typeof value === 'object') {
                const id = seen.get(value);
                if (id !== undefined) {
                    return `__object__:${id}`;
                }
                seen.set(value, nextId);
                nextId += 1;
            }
            return value;
        });
        return result ?? `__top__:${typeof input}`;
    } catch  {
        return '__unserializable__';
    }
}
__turbopack_context__.s([
    "useControlled",
    0,
    useControlled
], 61886);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/field-register-control/useRegisterFieldControl.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__3 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__2 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__76194__2 = __TURBOPACK__imported__module__76194__;
'use client';
;
;
;
function useRegisterFieldControl(controlRef, params) {
    const { enabled = true, getValue, id, value } = params;
    const { registerFieldControl } = (0, __TURBOPACK__imported__module__76194__2["useFieldRootContext"])();
    const sourceRef = __TURBOPACK__imported__module__51268__3["useRef"](null);
    if (!sourceRef.current) {
        sourceRef.current = Symbol();
    }
    (0, __TURBOPACK__imported__module__91900__2["useIsoLayoutEffect"])(()=>{
        const source = sourceRef.current;
        if (!source || !enabled) {
            return undefined;
        }
        registerFieldControl(source, {
            controlRef,
            getValue,
            id,
            value
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
        value
    ]);
}
__turbopack_context__.s([
    "useRegisterFieldControl",
    0,
    useRegisterFieldControl
], 90017);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/useLabelableId.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__4 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__3 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
var __TURBOPACK__imported__module__15732__2 = __TURBOPACK__imported__module__15732__;
var __TURBOPACK__imported__module__68338__2 = __TURBOPACK__imported__module__68338__;
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
    const { controlId, registerControlId } = (0, __TURBOPACK__imported__module__68338__2["useLabelableContext"])();
    const defaultId = (0, __TURBOPACK__imported__module__15732__2["useBaseUiId"])(id);
    const controlIdForEffect = implicit ? controlId : undefined;
    const controlSourceRef = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(()=>Symbol('labelable-control'));
    const hasRegisteredRef = __TURBOPACK__imported__module__51268__4["useRef"](false);
    const hadExplicitIdRef = __TURBOPACK__imported__module__51268__4["useRef"](id != null);
    const unregisterControlId = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>{
        if (!hasRegisteredRef.current || registerControlId === __TURBOPACK__imported__module__24659__["NOOP"]) {
            return;
        }
        hasRegisteredRef.current = false;
        registerControlId(controlSourceRef.current, undefined);
    });
    (0, __TURBOPACK__imported__module__91900__3["useIsoLayoutEffect"])(()=>{
        if (registerControlId === __TURBOPACK__imported__module__24659__["NOOP"]) {
            return undefined;
        }
        let nextId;
        if (implicit) {
            const elem = controlRef?.current;
            if ((0, __TURBOPACK__imported__module__92615__["isElement"])(elem) && elem.closest('label') != null) {
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
    __TURBOPACK__imported__module__51268__4["useEffect"](()=>{
        return unregisterControlId;
    }, [
        unregisterControlId
    ]);
    return controlId ?? defaultId;
}
__turbopack_context__.s([
    "useLabelableId",
    0,
    useLabelableId
], 31914);
}),
93479, 9439, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/components/ui/input.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/input/Input.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript) <export * as Field>
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/index.parts.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__83327__ = __turbopack_context__.i(83327);
var __TURBOPACK__imported__module__22789__ = __turbopack_context__.i(22789);
var __TURBOPACK__imported__module__58373__ = __turbopack_context__.i(58373);
var __TURBOPACK__imported__module__24769__ = __turbopack_context__.i(24769);
var __TURBOPACK__imported__module__77088__ = __turbopack_context__.i(77088);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/control/FieldControl.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__1 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__61886__ = __turbopack_context__.i(61886);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__76194__ = __turbopack_context__.i(76194);
var __TURBOPACK__imported__module__90017__ = __turbopack_context__.i(90017);
var __TURBOPACK__imported__module__68338__ = __turbopack_context__.i(68338);
var __TURBOPACK__imported__module__31914__ = __turbopack_context__.i(31914);
var __TURBOPACK__imported__module__38744__ = __turbopack_context__.i(38744);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
var __TURBOPACK__imported__module__34409__ = __turbopack_context__.i(34409);
var __TURBOPACK__imported__module__93719__ = __turbopack_context__.i(93719);
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
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
const FieldControl = /*#__PURE__*/ __TURBOPACK__imported__module__51268__1["forwardRef"](function FieldControl(componentProps, forwardedRef) {
    const { render, className, id: idProp, name: nameProp, value: valueProp, disabled: disabledProp = false, onValueChange, defaultValue, autoFocus = false, style, ...elementProps } = componentProps;
    const { state: fieldState, name: fieldName, disabled: fieldDisabled, setTouched, setDirty, validityData, setFocused, setFilled, validationMode, validation } = (0, __TURBOPACK__imported__module__76194__["useFieldRootContext"])();
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const state = {
        ...fieldState,
        disabled
    };
    const { labelId } = (0, __TURBOPACK__imported__module__68338__["useLabelableContext"])();
    const id = (0, __TURBOPACK__imported__module__31914__["useLabelableId"])({
        id: idProp
    });
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
    const inputRef = __TURBOPACK__imported__module__51268__1["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (autoFocus && inputRef.current === (0, __TURBOPACK__imported__module__95624__["activeElement"])((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(inputRef.current))) {
            setFocused(true);
        }
    }, [
        autoFocus,
        setFocused
    ]);
    const [valueUnwrapped] = (0, __TURBOPACK__imported__module__61886__["useControlled"])({
        controlled: valueProp,
        default: defaultValue,
        name: 'FieldControl',
        state: 'value'
    });
    const isControlled = valueProp !== undefined;
    const value = isControlled ? valueUnwrapped : undefined;
    const getFieldValue = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>validation.inputRef.current?.value);
    (0, __TURBOPACK__imported__module__90017__["useRegisterFieldControl"])(validation.inputRef, {
        id,
        value,
        getValue: getFieldValue
    });
    const element = (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('input', componentProps, {
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
                    value
                } : {
                    defaultValue
                },
                onChange (event) {
                    const inputValue = event.currentTarget.value;
                    onValueChange?.(inputValue, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].none, event.nativeEvent));
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
        stateAttributesMapping: __TURBOPACK__imported__module__38744__["fieldValidityMapping"]
    });
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/validity/FieldValidity.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__2 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__76194__1 = __TURBOPACK__imported__module__76194__;
var __TURBOPACK__imported__module__90134__ = __turbopack_context__.i(90134);
var __TURBOPACK__imported__module__29573__ = __turbopack_context__.i(29573);
var __TURBOPACK__imported__module__8063__1 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
const FieldValidity = function FieldValidity(props) {
    const { children } = props;
    const { validityData, invalid } = (0, __TURBOPACK__imported__module__76194__1["useFieldRootContext"])(false);
    const combinedFieldValidityData = __TURBOPACK__imported__module__51268__2["useMemo"](()=>(0, __TURBOPACK__imported__module__90134__["getCombinedFieldValidityData"])(validityData, invalid), [
        validityData,
        invalid
    ]);
    const isInvalid = combinedFieldValidityData.state.valid === false;
    const { transitionStatus } = (0, __TURBOPACK__imported__module__29573__["useTransitionStatus"])(isInvalid);
    const fieldValidityState = __TURBOPACK__imported__module__51268__2["useMemo"](()=>{
        return {
            ...combinedFieldValidityData,
            validity: combinedFieldValidityData.state,
            transitionStatus
        };
    }, [
        combinedFieldValidityData,
        transitionStatus
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(__TURBOPACK__imported__module__51268__2["Fragment"], {
        children: children(fieldValidityState)
    });
};
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/item/FieldItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__3 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__3 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__76194__2 = __TURBOPACK__imported__module__76194__;
var __TURBOPACK__imported__module__38744__1 = __TURBOPACK__imported__module__38744__;
var __TURBOPACK__imported__module__19996__1 = __TURBOPACK__imported__module__19996__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/field/item/FieldItemContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__4 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__4 = __TURBOPACK__imported__module__51268__;
'use client';
;
const FieldItemContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__4["createContext"]({
    disabled: false
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useFieldItemContext() {
    const context = __TURBOPACK__imported__module__51268__4["useContext"](FieldItemContext);
    return context;
}
__turbopack_context__.s([
    "FieldItemContext",
    0,
    FieldItemContext,
    "useFieldItemContext",
    0,
    useFieldItemContext
], 9439);
var __TURBOPACK__imported__module__12381__ = __turbopack_context__.i(12381);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/checkbox-group/CheckboxGroupContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__5 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__ = __turbopack_context__.i(16174);
var __TURBOPACK__imported__module__51268__5 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const CheckboxGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__5["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useCheckboxGroupContext(optional = true) {
    const context = __TURBOPACK__imported__module__51268__5["useContext"](CheckboxGroupContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__["default"])(3));
    }
    return context;
}
var __TURBOPACK__imported__module__8063__2 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
const FieldItem = /*#__PURE__*/ __TURBOPACK__imported__module__51268__3["forwardRef"](function FieldItem(componentProps, forwardedRef) {
    const { render, className, style, disabled: disabledProp = false, ...elementProps } = componentProps;
    const { state, disabled: rootDisabled } = (0, __TURBOPACK__imported__module__76194__2["useFieldRootContext"])(false);
    const disabled = rootDisabled || disabledProp;
    const checkboxGroupContext = useCheckboxGroupContext();
    // checkboxGroupContext.parent is truthy even if no parent checkbox is involved
    const parentId = checkboxGroupContext?.parent.id;
    // this a more reliable check
    const hasParentCheckbox = checkboxGroupContext?.allValues !== undefined;
    const controlId = hasParentCheckbox ? parentId : undefined;
    const fieldItemContext = __TURBOPACK__imported__module__51268__3["useMemo"](()=>({
            disabled
        }), [
        disabled
    ]);
    const element = (0, __TURBOPACK__imported__module__19996__1["useRenderElement"])('div', componentProps, {
        ref: forwardedRef,
        state,
        props: elementProps,
        stateAttributesMapping: __TURBOPACK__imported__module__38744__1["fieldValidityMapping"]
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])(__TURBOPACK__imported__module__12381__["LabelableProvider"], {
        controlId: controlId,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])(FieldItemContext.Provider, {
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
    ()=>__TURBOPACK__imported__module__77088__["FieldDescription"],
    "Error",
    ()=>__TURBOPACK__imported__module__24769__["FieldError"],
    "Item",
    0,
    FieldItem,
    "Label",
    ()=>__TURBOPACK__imported__module__58373__["FieldLabel"],
    "Root",
    ()=>__TURBOPACK__imported__module__22789__["FieldRoot"],
    "Validity",
    0,
    FieldValidity
], 48773);
var __TURBOPACK__imported__module__48773__ = __turbopack_context__.i(48773);
var __TURBOPACK__imported__module__48773__ = __TURBOPACK__imported__module__48773__;
var __TURBOPACK__imported__module__8063__3 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
const Input = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function Input(props, forwardedRef) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(__TURBOPACK__imported__module__48773__.Control, {
        ref: forwardedRef,
        ...props
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
;
;
;
function Input1({ className, type, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(Input, {
        type: type,
        "data-slot": "input",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("h-8 w-full min-w-0 rounded-none border border-input bg-transparent px-2.5 py-1 text-xs transition-colors outline-none file:inline-flex file:h-6 file:border-0 file:bg-transparent file:text-xs file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-1 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-1 aria-invalid:ring-destructive/20 md:text-xs dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className),
        ...props
    });
}
;
__turbopack_context__.s([
    "Input",
    0,
    Input1
], 93479);
}),
79532, 72746, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/list/useCompositeListItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/list/CompositeListContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
'use client';
;
const CompositeListContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__1["createContext"]({
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
    return __TURBOPACK__imported__module__51268__1["useContext"](CompositeListContext);
}
__turbopack_context__.s([
    "CompositeListContext",
    0,
    CompositeListContext,
    "useCompositeListContext",
    0,
    useCompositeListContext
], 72746);
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
    const indexRef = __TURBOPACK__imported__module__51268__["useRef"](-1);
    const [index, setIndex] = __TURBOPACK__imported__module__51268__["useState"](externalIndex ?? (indexGuessBehavior === IndexGuessBehavior.GuessFromOrder ? ()=>{
        if (indexRef.current === -1) {
            const newIndex = nextIndexRef.current;
            nextIndexRef.current += 1;
            indexRef.current = newIndex;
        }
        return indexRef.current;
    } : -1));
    const componentRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const ref = __TURBOPACK__imported__module__51268__["useCallback"]((node)=>{
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
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
    return __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            ref,
            index
        }), [
        index,
        ref
    ]);
}
__turbopack_context__.s([
    "useCompositeListItem",
    0,
    useCompositeListItem
], 79532);
}),
25909, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
'use client';
;
const DirectionContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useDirection() {
    const context = __TURBOPACK__imported__module__51268__["useContext"](DirectionContext);
    return context?.direction ?? 'ltr';
}
__turbopack_context__.s([
    "useDirection",
    0,
    useDirection
]);
}),
56284, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__72746__ = __turbopack_context__.i(72746);
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
/* eslint-disable no-bitwise */ 'use client';
;
;
;
;
;
;
function CompositeList(props) {
    const { children, elementsRef, labelsRef, onMapChange: onMapChangeProp } = props;
    const onMapChange = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(onMapChangeProp);
    const nextIndexRef = __TURBOPACK__imported__module__51268__["useRef"](0);
    const listeners = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(createListeners).current;
    // We use a stable `map` to avoid O(n^2) re-allocation costs for large lists.
    // `mapTick` is our re-render trigger mechanism. We also need to update the
    // elements and label refs, but there's a lot of async work going on and sometimes
    // the effect that handles `onMapChange` gets called after those refs have been
    // filled, and we don't want to lose those values by setting their lengths to `0`.
    // We also need to have them at the proper length because floating-ui uses that
    // information for list navigation.
    const map = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(createMap).current;
    // `mapTick` uses a counter rather than objects for low precision-loss risk and better memory efficiency
    const [mapTick, setMapTick] = __TURBOPACK__imported__module__51268__["useState"](0);
    const lastTickRef = __TURBOPACK__imported__module__51268__["useRef"](mapTick);
    const register = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((node, metadata)=>{
        map.set(node, metadata ?? null);
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
    });
    const unregister = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((node)=>{
        map.delete(node);
        lastTickRef.current += 1;
        setMapTick(lastTickRef.current);
    });
    const sortedMap = __TURBOPACK__imported__module__51268__["useMemo"](()=>{
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
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
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
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        return ()=>{
            elementsRef.current = [];
        };
    }, [
        elementsRef
    ]);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        return ()=>{
            if (labelsRef) {
                labelsRef.current = [];
            }
        };
    }, [
        labelsRef
    ]);
    const subscribeMapChange = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((fn)=>{
        listeners.add(fn);
        return ()=>{
            listeners.delete(fn);
        };
    });
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        listeners.forEach((l)=>l(sortedMap));
    }, [
        listeners,
        sortedMap
    ]);
    const contextValue = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__72746__["CompositeListContext"].Provider, {
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
__turbopack_context__.s([
    "CompositeList",
    0,
    CompositeList
]);
}),
4438, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/item/CompositeItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/item/useCompositeItem.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__90741__ = __turbopack_context__.i(90741);
var __TURBOPACK__imported__module__19376__ = __turbopack_context__.i(19376);
var __TURBOPACK__imported__module__79532__ = __turbopack_context__.i(79532);
'use client';
;
;
;
;
function useCompositeItem(params = {}) {
    const { highlightItemOnHover, highlightedIndex, onHighlightedIndexChange } = (0, __TURBOPACK__imported__module__19376__["useCompositeRootContext"])();
    const { ref, index } = (0, __TURBOPACK__imported__module__79532__["useCompositeListItem"])(params);
    const isHighlighted = highlightedIndex === index;
    const itemRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__90741__["useMergedRefs"])(ref, itemRef);
    const compositeProps = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
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
    const { render, className, style, state = __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"], props = __TURBOPACK__imported__module__24659__["EMPTY_ARRAY"], refs = __TURBOPACK__imported__module__24659__["EMPTY_ARRAY"], metadata, stateAttributesMapping, tag = 'div', ...elementProps } = componentProps;
    const { compositeProps, compositeRef } = useCompositeItem({
        metadata
    });
    return (0, __TURBOPACK__imported__module__19996__["useRenderElement"])(tag, componentProps, {
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
__turbopack_context__.s([
    "CompositeItem",
    0,
    CompositeItem
], 4438);
}),
]);