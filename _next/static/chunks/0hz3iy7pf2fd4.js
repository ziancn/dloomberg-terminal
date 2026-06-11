(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
35560, ((__turbopack_context__) => {
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
            d: "m6 9 6 6 6-6",
            key: "qrunsl"
        }
    ]
];
const ChevronDown = (0, __TURBOPACK__imported__module__67022__["default"])("chevron-down", __iconNode);
;
__turbopack_context__.s([
    "default",
    0,
    ChevronDown
]);
}),
30211, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__77912__ = __turbopack_context__.i(77912);
;
let CommonPopupDataAttributes = function(CommonPopupDataAttributes) {
    /**
   * Present when the popup is open.
   */ CommonPopupDataAttributes["open"] = "data-open";
    /**
   * Present when the popup is closed.
   */ CommonPopupDataAttributes["closed"] = "data-closed";
    /**
   * Present when the popup is animating in.
   */ CommonPopupDataAttributes[CommonPopupDataAttributes["startingStyle"] = __TURBOPACK__imported__module__77912__["TransitionStatusDataAttributes"].startingStyle] = "startingStyle";
    /**
   * Present when the popup is animating out.
   */ CommonPopupDataAttributes[CommonPopupDataAttributes["endingStyle"] = __TURBOPACK__imported__module__77912__["TransitionStatusDataAttributes"].endingStyle] = "endingStyle";
    /**
   * Present when the anchor is hidden.
   */ CommonPopupDataAttributes["anchorHidden"] = "data-anchor-hidden";
    /**
   * Indicates which side the popup is positioned relative to the trigger.
   * @type { 'top' | 'bottom' | 'left' | 'right' | 'inline-end' | 'inline-start'}
   */ CommonPopupDataAttributes["side"] = "data-side";
    /**
   * Indicates how the popup is aligned relative to specified side.
   * @type {'start' | 'center' | 'end'}
   */ CommonPopupDataAttributes["align"] = "data-align";
    return CommonPopupDataAttributes;
}({});
let CommonTriggerDataAttributes = /*#__PURE__*/ function(CommonTriggerDataAttributes) {
    /**
   * Present when the popup is open.
   */ CommonTriggerDataAttributes["popupOpen"] = "data-popup-open";
    /**
   * Present when a pressable trigger is pressed.
   */ CommonTriggerDataAttributes["pressed"] = "data-pressed";
    return CommonTriggerDataAttributes;
}({});
const TRIGGER_HOOK = {
    [CommonTriggerDataAttributes.popupOpen]: ''
};
const PRESSABLE_TRIGGER_HOOK = {
    [CommonTriggerDataAttributes.popupOpen]: '',
    [CommonTriggerDataAttributes.pressed]: ''
};
const POPUP_OPEN_HOOK = {
    [CommonPopupDataAttributes.open]: ''
};
const POPUP_CLOSED_HOOK = {
    [CommonPopupDataAttributes.closed]: ''
};
const ANCHOR_HIDDEN_HOOK = {
    [CommonPopupDataAttributes.anchorHidden]: ''
};
const triggerOpenStateMapping = {
    open (value) {
        if (value) {
            return TRIGGER_HOOK;
        }
        return null;
    }
};
const pressableTriggerOpenStateMapping = {
    open (value) {
        if (value) {
            return PRESSABLE_TRIGGER_HOOK;
        }
        return null;
    }
};
const popupStateMapping = {
    open (value) {
        if (value) {
            return POPUP_OPEN_HOOK;
        }
        return POPUP_CLOSED_HOOK;
    },
    anchorHidden (value) {
        if (value) {
            return ANCHOR_HIDDEN_HOOK;
        }
        return null;
    }
};
__turbopack_context__.s([
    "CommonPopupDataAttributes",
    0,
    CommonPopupDataAttributes,
    "popupStateMapping",
    0,
    popupStateMapping,
    "pressableTriggerOpenStateMapping",
    0,
    pressableTriggerOpenStateMapping,
    "triggerOpenStateMapping",
    0,
    triggerOpenStateMapping
]);
}),
39767, 90169, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/addEventListener.js [app-client] (ecmascript)
;
function addEventListener(target, type, listener, options) {
    target.addEventListener(type, listener, options);
    return ()=>{
        target.removeEventListener(type, listener, options);
    };
}
__turbopack_context__.s([
    "addEventListener",
    0,
    addEventListener
], 39767);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/mergeCleanups.js [app-client] (ecmascript)
;
function mergeCleanups(...cleanups) {
    return ()=>{
        for(let i = 0; i < cleanups.length; i += 1){
            const cleanup = cleanups[i];
            if (cleanup) {
                cleanup();
            }
        }
    };
}
__turbopack_context__.s([
    "mergeCleanups",
    0,
    mergeCleanups
], 90169);
}),
58823, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
'use client';
;
;
function useValueAsRef(value) {
    const latest = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(createLatestRef, value).current;
    latest.next = value;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(latest.effect);
    return latest;
}
function createLatestRef(value) {
    const latest = {
        current: value,
        next: value,
        effect: ()=>{
            latest.current = latest.next;
        }
    };
    return latest;
}
__turbopack_context__.s([
    "useValueAsRef",
    0,
    useValueAsRef
]);
}),
85182, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
__turbopack_context__.s([
    "ownerWindow",
    ()=>__TURBOPACK__imported__module__92615__["getWindow"]
]);
}),
22879, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__14028__ = __turbopack_context__.i(14028);
var __TURBOPACK__imported__module__368__ = __turbopack_context__.i(368);
/**
 * @internal
 */ var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
'use client';
;
;
;
;
;
const FocusGuard = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function FocusGuard(props, ref) {
    const [role, setRole] = __TURBOPACK__imported__module__51268__["useState"]();
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (__TURBOPACK__imported__module__14028__["isSafari"]) {
            // Unlike other screen readers such as NVDA and JAWS, the virtual cursor
            // on VoiceOver does trigger the onFocus event, so we can use the focus
            // trap element. On Safari, only buttons trigger the onFocus event.
            setRole('button');
        }
    }, []);
    const restProps = {
        tabIndex: 0,
        // Role is only for VoiceOver
        role
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("span", {
        ...props,
        ref: ref,
        style: __TURBOPACK__imported__module__368__["visuallyHidden"],
        "aria-hidden": role ? undefined : true,
        ...restProps,
        "data-base-ui-focus-guard": ""
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "FocusGuard",
    0,
    FocusGuard
]);
}),
52881, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__14028__ = __turbopack_context__.i(14028);
var __TURBOPACK__imported__module__83306__ = __turbopack_context__.i(83306);
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
;
;
;
;
;
function isTargetInsideEnabledTrigger(target, triggerElements) {
    if (!(0, __TURBOPACK__imported__module__92615__["isElement"])(target)) {
        return false;
    }
    const targetElement = target;
    if (triggerElements.hasElement(targetElement)) {
        return !targetElement.hasAttribute('data-trigger-disabled');
    }
    for (const [, trigger] of triggerElements.entries()){
        if ((0, __TURBOPACK__imported__module__95624__["contains"])(trigger, targetElement)) {
            return !trigger.hasAttribute('data-trigger-disabled');
        }
    }
    return false;
}
function isEventTargetWithin(event, node) {
    if (node == null) {
        return false;
    }
    if ('composedPath' in event) {
        return event.composedPath().includes(node);
    }
    // TS thinks `event` is of type never as it assumes all browsers support composedPath, but browsers without shadow dom don't
    const eventAgain = event;
    return eventAgain.target != null && node.contains(eventAgain.target);
}
function isRootElement(element) {
    return element.matches('html,body');
}
function isTypeableElement(element) {
    return (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(element) && element.matches(__TURBOPACK__imported__module__83306__["TYPEABLE_SELECTOR"]);
}
function isInteractiveElement(element) {
    return element?.closest(`button,a[href],[role="button"],select,[tabindex]:not([tabindex="-1"]),${__TURBOPACK__imported__module__83306__["TYPEABLE_SELECTOR"]}`) != null;
}
function isTypeableCombobox(element) {
    if (!element) {
        return false;
    }
    return element.getAttribute('role') === 'combobox' && isTypeableElement(element);
}
function matchesFocusVisible(element) {
    // We don't want to block focus from working with `visibleOnly`
    // (JSDOM doesn't match `:focus-visible` when the element has `:focus`)
    if (!element || __TURBOPACK__imported__module__14028__["isJSDOM"]) {
        return true;
    }
    try {
        return element.matches(':focus-visible');
    } catch (_e) {
        return true;
    }
}
function getFloatingFocusElement(floatingElement) {
    if (!floatingElement) {
        return null;
    }
    // Try to find the element that has `{...getFloatingProps()}` spread on it.
    // This indicates the floating element is acting as a positioning wrapper, and
    // so focus should be managed on the child element with the event handlers and
    // aria props.
    return floatingElement.hasAttribute(__TURBOPACK__imported__module__83306__["FOCUSABLE_ATTRIBUTE"]) ? floatingElement : floatingElement.querySelector(`[${__TURBOPACK__imported__module__83306__["FOCUSABLE_ATTRIBUTE"]}]`) || floatingElement;
}
__turbopack_context__.s([
    "getFloatingFocusElement",
    0,
    getFloatingFocusElement,
    "isEventTargetWithin",
    0,
    isEventTargetWithin,
    "isInteractiveElement",
    0,
    isInteractiveElement,
    "isRootElement",
    0,
    isRootElement,
    "isTargetInsideEnabledTrigger",
    0,
    isTargetInsideEnabledTrigger,
    "isTypeableCombobox",
    0,
    isTypeableCombobox,
    "isTypeableElement",
    0,
    isTypeableElement,
    "matchesFocusVisible",
    0,
    matchesFocusVisible
]);
}),
37313, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
var __TURBOPACK__imported__module__21922__ = __turbopack_context__.i(21922);
;
;
;
;
const CANDIDATE_SELECTOR = 'a[href],button,input,select,textarea,summary,details,iframe,object,embed,[tabindex],[contenteditable]:not([contenteditable="false"]),audio[controls],video[controls]';
function getParentElement(element) {
    const assignedSlot = element.assignedSlot;
    if (assignedSlot) {
        return assignedSlot;
    }
    if (element.parentElement) {
        return element.parentElement;
    }
    const rootNode = element.getRootNode();
    return (0, __TURBOPACK__imported__module__92615__["isShadowRoot"])(rootNode) ? rootNode.host : null;
}
function getDetailsSummary(details) {
    for (const child of Array.from(details.children)){
        if ((0, __TURBOPACK__imported__module__92615__["getNodeName"])(child) === 'summary') {
            return child;
        }
    }
    return null;
}
function isWithinOpenDetailsSummary(element, details) {
    const summary = getDetailsSummary(details);
    return !!summary && (element === summary || (0, __TURBOPACK__imported__module__95624__["contains"])(summary, element));
}
function isFocusableCandidate(element) {
    const nodeName = element ? (0, __TURBOPACK__imported__module__92615__["getNodeName"])(element) : '';
    return element != null && element.matches(CANDIDATE_SELECTOR) && (nodeName !== 'summary' || element.parentElement != null && (0, __TURBOPACK__imported__module__92615__["getNodeName"])(element.parentElement) === 'details' && getDetailsSummary(element.parentElement) === element) && (nodeName !== 'details' || getDetailsSummary(element) == null) && (nodeName !== 'input' || element.type !== 'hidden');
}
function isFocusableElement(element) {
    if (!isFocusableCandidate(element) || !element.isConnected || element.matches(':disabled')) {
        return false;
    }
    for(let current = element; current; current = getParentElement(current)){
        const isAncestor = current !== element;
        const isSlot = (0, __TURBOPACK__imported__module__92615__["getNodeName"])(current) === 'slot';
        if (current.hasAttribute('inert')) {
            return false;
        }
        if (isAncestor && (0, __TURBOPACK__imported__module__92615__["getNodeName"])(current) === 'details' && !current.open && !isWithinOpenDetailsSummary(element, current) || current.hasAttribute('hidden') || !isSlot && !isVisibleInTabbableTree(current, isAncestor)) {
            return false;
        }
    }
    return true;
}
function isVisibleInTabbableTree(element, isAncestor) {
    const styles = (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(element);
    if (!isAncestor) {
        return (0, __TURBOPACK__imported__module__21922__["isElementVisible"])(element, styles);
    }
    return styles.display !== 'none';
}
function getTabIndex(element) {
    const tabIndex = element.tabIndex;
    if (tabIndex < 0) {
        const nodeName = (0, __TURBOPACK__imported__module__92615__["getNodeName"])(element);
        if (nodeName === 'details' || nodeName === 'audio' || nodeName === 'video' || (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(element) && element.isContentEditable) {
            return 0;
        }
    }
    return tabIndex;
}
function getNamedRadioInput(element) {
    if ((0, __TURBOPACK__imported__module__92615__["getNodeName"])(element) !== 'input') {
        return null;
    }
    const input = element;
    return input.type === 'radio' && input.name !== '' ? input : null;
}
function isTabbableRadio(element, candidates) {
    const input = getNamedRadioInput(element);
    if (!input) {
        return true;
    }
    const checkedRadio = candidates.find((candidate)=>{
        const radio = getNamedRadioInput(candidate);
        return radio?.name === input.name && radio.form === input.form && radio.checked;
    });
    if (checkedRadio) {
        return checkedRadio === input;
    }
    return candidates.find((candidate)=>{
        const radio = getNamedRadioInput(candidate);
        return radio?.name === input.name && radio.form === input.form;
    }) === input;
}
function getComposedChildren(container) {
    if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(container) && (0, __TURBOPACK__imported__module__92615__["getNodeName"])(container) === 'slot') {
        const assignedElements = container.assignedElements({
            flatten: true
        });
        if (assignedElements.length > 0) {
            return assignedElements;
        }
    }
    if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(container) && container.shadowRoot) {
        return Array.from(container.shadowRoot.children);
    }
    return Array.from(container.children);
}
function appendCandidates(container, list) {
    getComposedChildren(container).forEach((child)=>{
        if (isFocusableCandidate(child)) {
            list.push(child);
        }
        appendCandidates(child, list);
    });
}
function appendMatchingElements(container, selector, list) {
    getComposedChildren(container).forEach((child)=>{
        if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(child) && child.matches(selector)) {
            list.push(child);
        }
        appendMatchingElements(child, selector, list);
    });
}
function isTabbable(element) {
    return isFocusableElement(element) && getTabIndex(element) >= 0;
}
function focusable(container) {
    const candidates = [];
    appendCandidates(container, candidates);
    return candidates.filter(isFocusableElement);
}
function tabbable(container) {
    const candidates = focusable(container);
    return candidates.filter((element)=>getTabIndex(element) >= 0 && isTabbableRadio(element, candidates));
}
function getTabbableIn(container, dir) {
    const list = tabbable(container);
    const len = list.length;
    if (len === 0) {
        return undefined;
    }
    const active = (0, __TURBOPACK__imported__module__95624__["activeElement"])((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(container));
    const index = list.indexOf(active);
    // eslint-disable-next-line no-nested-ternary
    const nextIndex = index === -1 ? dir === 1 ? 0 : len - 1 : index + dir;
    return list[nextIndex];
}
function getNextTabbable(referenceElement) {
    return getTabbableIn((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(referenceElement).body, 1) || referenceElement;
}
function getPreviousTabbable(referenceElement) {
    return getTabbableIn((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(referenceElement).body, -1) || referenceElement;
}
function getTabbableNearElement(referenceElement, dir) {
    if (!referenceElement) {
        return null;
    }
    const list = tabbable((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(referenceElement).body);
    const elementCount = list.length;
    if (elementCount === 0) {
        return null;
    }
    const index = list.indexOf(referenceElement);
    if (index === -1) {
        return null;
    }
    const nextIndex = (index + dir + elementCount) % elementCount;
    return list[nextIndex];
}
function getTabbableAfterElement(referenceElement) {
    return getTabbableNearElement(referenceElement, 1);
}
function getTabbableBeforeElement(referenceElement) {
    return getTabbableNearElement(referenceElement, -1);
}
function isOutsideEvent(event, container) {
    const containerElement = container || event.currentTarget;
    const relatedTarget = event.relatedTarget;
    return !relatedTarget || !(0, __TURBOPACK__imported__module__95624__["contains"])(containerElement, relatedTarget);
}
function disableFocusInside(container) {
    const tabbableElements = tabbable(container);
    tabbableElements.forEach((element)=>{
        element.dataset.tabindex = element.getAttribute('tabindex') || '';
        element.setAttribute('tabindex', '-1');
    });
}
function enableFocusInside(container) {
    const elements = [];
    appendMatchingElements(container, '[data-tabindex]', elements);
    elements.forEach((element)=>{
        const tabindex = element.dataset.tabindex;
        delete element.dataset.tabindex;
        if (tabindex) {
            element.setAttribute('tabindex', tabindex);
        } else {
            element.removeAttribute('tabindex');
        }
    });
}
__turbopack_context__.s([
    "disableFocusInside",
    0,
    disableFocusInside,
    "enableFocusInside",
    0,
    enableFocusInside,
    "focusable",
    0,
    focusable,
    "getNextTabbable",
    0,
    getNextTabbable,
    "getPreviousTabbable",
    0,
    getPreviousTabbable,
    "getTabbableAfterElement",
    0,
    getTabbableAfterElement,
    "getTabbableBeforeElement",
    0,
    getTabbableBeforeElement,
    "isOutsideEvent",
    0,
    isOutsideEvent,
    "isTabbable",
    0,
    isTabbable,
    "tabbable",
    0,
    tabbable
]);
}),
44037, ((__turbopack_context__) => {
"use strict";

/* eslint-disable @typescript-eslint/no-loop-func */ function getNodeChildren(nodes, id, onlyOpenChildren = true) {
    const directChildren = nodes.filter((node)=>node.parentId === id);
    return directChildren.flatMap((child)=>[
            ...!onlyOpenChildren || child.context?.open ? [
                child
            ] : [],
            ...getNodeChildren(nodes, child.id, onlyOpenChildren)
        ]);
}
function getDeepestNode(nodes, id) {
    let deepestNodeId;
    let maxDepth = -1;
    function findDeepest(nodeId, depth) {
        if (depth > maxDepth) {
            deepestNodeId = nodeId;
            maxDepth = depth;
        }
        const children = getNodeChildren(nodes, nodeId);
        children.forEach((child)=>{
            findDeepest(child.id, depth + 1);
        });
    }
    findDeepest(id, 0);
    return nodes.find((node)=>node.id === deepestNodeId);
}
function getNodeAncestors(nodes, id) {
    let allAncestors = [];
    let currentParentId = nodes.find((node)=>node.id === id)?.parentId;
    while(currentParentId){
        const currentNode = nodes.find((node)=>node.id === currentParentId);
        currentParentId = currentNode?.parentId;
        if (currentNode) {
            allAncestors = allAncestors.concat(currentNode);
        }
    }
    return allAncestors;
}
__turbopack_context__.s([
    "getNodeAncestors",
    0,
    getNodeAncestors,
    "getNodeChildren",
    0,
    getNodeChildren
]);
}),
43526, ((__turbopack_context__) => {
"use strict";

function createAttribute(name) {
    return `data-base-ui-${name}`;
}
__turbopack_context__.s([
    "createAttribute",
    0,
    createAttribute
]);
}),
59464, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
;
let rafId = 0;
function enqueueFocus(el, options = {}) {
    const { preventScroll = false, cancelPrevious = true, sync = false } = options;
    if (cancelPrevious) {
        cancelAnimationFrame(rafId);
    }
    const exec = ()=>el?.focus({
            preventScroll
        });
    if (sync) {
        exec();
        return __TURBOPACK__imported__module__24659__["NOOP"];
    }
    const currentRafId = requestAnimationFrame(exec);
    rafId = currentRafId;
    return ()=>{
        if (rafId === currentRafId) {
            cancelAnimationFrame(currentRafId);
            rafId = 0;
        }
    };
}
__turbopack_context__.s([
    "enqueueFocus",
    0,
    enqueueFocus
]);
}),
15360, ((__turbopack_context__) => {
"use strict";

// Modified to add conditional `aria-hidden` support:
// https://github.com/theKashey/aria-hidden/blob/9220c8f4a4fd35f63bee5510a9f41a37264382d4/src/index.ts
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
;
;
const counters = {
    inert: new WeakMap(),
    'aria-hidden': new WeakMap()
};
const markerName = 'data-base-ui-inert';
const uncontrolledElementsSets = {
    inert: new WeakSet(),
    'aria-hidden': new WeakSet()
};
let markerCounterMap = new WeakMap();
let lockCount = 0;
function getUncontrolledElementsSet(controlAttribute) {
    return uncontrolledElementsSets[controlAttribute];
}
const supportsInert = ()=>typeof HTMLElement !== 'undefined' && 'inert' in HTMLElement.prototype;
function unwrapHost(node) {
    if (!node) {
        return null;
    }
    return (0, __TURBOPACK__imported__module__92615__["isShadowRoot"])(node) ? node.host : unwrapHost(node.parentNode);
}
const correctElements = (parent, targets)=>targets.map((target)=>{
        if (parent.contains(target)) {
            return target;
        }
        const correctedTarget = unwrapHost(target);
        if (parent.contains(correctedTarget)) {
            return correctedTarget;
        }
        return null;
    }).filter((x)=>x != null);
const buildKeepSet = (targets)=>{
    const keep = new Set();
    targets.forEach((target)=>{
        let node = target;
        while(node && !keep.has(node)){
            keep.add(node);
            node = node.parentNode;
        }
    });
    return keep;
};
const collectOutsideElements = (root, keepElements, stopElements)=>{
    const outside = [];
    const walk = (parent)=>{
        if (!parent || stopElements.has(parent)) {
            return;
        }
        Array.from(parent.children).forEach((node)=>{
            if ((0, __TURBOPACK__imported__module__92615__["getNodeName"])(node) === 'script') {
                return;
            }
            if (keepElements.has(node)) {
                walk(node);
            } else {
                outside.push(node);
            }
        });
    };
    walk(root);
    return outside;
};
function applyAttributeToOthers(uncorrectedAvoidElements, body, ariaHidden, inert, { mark = true, markerIgnoreElements = [] }) {
    // eslint-disable-next-line no-nested-ternary
    const controlAttribute = inert ? 'inert' : ariaHidden ? 'aria-hidden' : null;
    let counterMap = null;
    let uncontrolledElementsSet = null;
    const avoidElements = correctElements(body, uncorrectedAvoidElements);
    const markerIgnoreTargets = mark ? correctElements(body, markerIgnoreElements) : [];
    const markerIgnoreSet = new Set(markerIgnoreTargets);
    const markerTargets = mark ? collectOutsideElements(body, buildKeepSet(avoidElements), new Set(avoidElements)).filter((target)=>!markerIgnoreSet.has(target)) : [];
    const hiddenElements = [];
    const markedElements = [];
    if (controlAttribute) {
        const map = counters[controlAttribute];
        const currentUncontrolledElementsSet = getUncontrolledElementsSet(controlAttribute);
        uncontrolledElementsSet = currentUncontrolledElementsSet;
        counterMap = map;
        const ariaLiveElements = correctElements(body, Array.from(body.querySelectorAll('[aria-live]')));
        const controlElements = avoidElements.concat(ariaLiveElements);
        const controlTargets = collectOutsideElements(body, buildKeepSet(controlElements), new Set(controlElements));
        controlTargets.forEach((node)=>{
            const attr = node.getAttribute(controlAttribute);
            const alreadyHidden = attr !== null && attr !== 'false';
            const counterValue = (map.get(node) || 0) + 1;
            map.set(node, counterValue);
            hiddenElements.push(node);
            if (counterValue === 1 && alreadyHidden) {
                currentUncontrolledElementsSet.add(node);
            }
            if (!alreadyHidden) {
                node.setAttribute(controlAttribute, controlAttribute === 'inert' ? '' : 'true');
            }
        });
    }
    if (mark) {
        markerTargets.forEach((node)=>{
            const markerValue = (markerCounterMap.get(node) || 0) + 1;
            markerCounterMap.set(node, markerValue);
            markedElements.push(node);
            if (markerValue === 1) {
                node.setAttribute(markerName, '');
            }
        });
    }
    lockCount += 1;
    return ()=>{
        if (counterMap) {
            hiddenElements.forEach((element)=>{
                const currentCounterValue = counterMap.get(element) || 0;
                const counterValue = currentCounterValue - 1;
                counterMap.set(element, counterValue);
                if (!counterValue) {
                    if (!uncontrolledElementsSet?.has(element) && controlAttribute) {
                        element.removeAttribute(controlAttribute);
                    }
                    uncontrolledElementsSet?.delete(element);
                }
            });
        }
        if (mark) {
            markedElements.forEach((element)=>{
                const markerValue = (markerCounterMap.get(element) || 0) - 1;
                markerCounterMap.set(element, markerValue);
                if (!markerValue) {
                    element.removeAttribute(markerName);
                }
            });
        }
        lockCount -= 1;
        if (!lockCount) {
            counters.inert = new WeakMap();
            counters['aria-hidden'] = new WeakMap();
            uncontrolledElementsSets.inert = new WeakSet();
            uncontrolledElementsSets['aria-hidden'] = new WeakSet();
            markerCounterMap = new WeakMap();
        }
    };
}
function markOthers(avoidElements, options = {}) {
    const { ariaHidden = false, inert = false, mark = true, markerIgnoreElements = [] } = options;
    const body = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(avoidElements[0]).body;
    return applyAttributeToOthers(avoidElements, body, ariaHidden, inert, {
        mark,
        markerIgnoreElements
    });
}
__turbopack_context__.s([
    "markOthers",
    0,
    markOthers
]);
}),
5951, 60217, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingPortal.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__98057__ = __turbopack_context__.i(98057);
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__39767__ = __turbopack_context__.i(39767);
var __TURBOPACK__imported__module__90169__ = __turbopack_context__.i(90169);
var __TURBOPACK__imported__module__70280__ = __turbopack_context__.i(70280);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
var __TURBOPACK__imported__module__22879__ = __turbopack_context__.i(22879);
var __TURBOPACK__imported__module__37313__ = __turbopack_context__.i(37313);
var __TURBOPACK__imported__module__34409__ = __turbopack_context__.i(34409);
var __TURBOPACK__imported__module__93719__ = __turbopack_context__.i(93719);
var __TURBOPACK__imported__module__43526__ = __turbopack_context__.i(43526);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/constants.js [app-client] (ecmascript)
;
const TYPEAHEAD_RESET_MS = 500;
const PATIENT_CLICK_THRESHOLD = 500;
const DISABLED_TRANSITIONS_STYLE = {
    style: {
        transition: 'none'
    }
};
const CLICK_TRIGGER_IDENTIFIER = 'data-base-ui-click-trigger';
const BASE_UI_SWIPE_IGNORE_ATTRIBUTE = 'data-base-ui-swipe-ignore';
const LEGACY_SWIPE_IGNORE_ATTRIBUTE = 'data-swipe-ignore';
const BASE_UI_SWIPE_IGNORE_SELECTOR = `[${BASE_UI_SWIPE_IGNORE_ATTRIBUTE}]`;
const LEGACY_SWIPE_IGNORE_SELECTOR = `[${LEGACY_SWIPE_IGNORE_ATTRIBUTE}]`;
const DROPDOWN_COLLISION_AVOIDANCE = {
    fallbackAxisSide: 'none'
};
const POPUP_COLLISION_AVOIDANCE = {
    fallbackAxisSide: 'end'
};
const ownerVisuallyHidden = {
    clipPath: 'inset(50%)',
    position: 'fixed',
    top: 0,
    left: 0
};
__turbopack_context__.s([
    "CLICK_TRIGGER_IDENTIFIER",
    0,
    CLICK_TRIGGER_IDENTIFIER,
    "DISABLED_TRANSITIONS_STYLE",
    0,
    DISABLED_TRANSITIONS_STYLE,
    "DROPDOWN_COLLISION_AVOIDANCE",
    0,
    DROPDOWN_COLLISION_AVOIDANCE,
    "PATIENT_CLICK_THRESHOLD",
    0,
    PATIENT_CLICK_THRESHOLD,
    "POPUP_COLLISION_AVOIDANCE",
    0,
    POPUP_COLLISION_AVOIDANCE,
    "TYPEAHEAD_RESET_MS",
    0,
    TYPEAHEAD_RESET_MS,
    "ownerVisuallyHidden",
    0,
    ownerVisuallyHidden
], 60217);
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
;
;
;
;
;
const PortalContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["createContext"](null);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const usePortalContext = ()=>__TURBOPACK__imported__module__51268__["useContext"](PortalContext);
const attr = (0, __TURBOPACK__imported__module__43526__["createAttribute"])('portal');
function useFloatingPortalNode(props = {}) {
    const { ref, container: containerProp, componentProps = __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"], elementProps } = props;
    const uniqueId = (0, __TURBOPACK__imported__module__70280__["useId"])();
    const portalContext = usePortalContext();
    const parentPortalNode = portalContext?.portalNode;
    const [containerElement, setContainerElement] = __TURBOPACK__imported__module__51268__["useState"](null);
    const [portalNode, setPortalNode] = __TURBOPACK__imported__module__51268__["useState"](null);
    const setPortalNodeRef = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((node)=>{
        if (node !== null) {
            // the useIsoLayoutEffect below watching containerProp / parentPortalNode
            // sets setPortalNode(null) when the container becomes null or changes.
            // So even though the ref callback now ignores null, the portal node still gets cleared.
            setPortalNode(node);
        }
    });
    const containerRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        // Wait for the container to be resolved if explicitly `null`.
        if (containerProp === null) {
            if (containerRef.current) {
                containerRef.current = null;
                setPortalNode(null);
                setContainerElement(null);
            }
            return;
        }
        // React 17 does not use React.useId().
        if (uniqueId == null) {
            return;
        }
        const resolvedContainer = (containerProp && ((0, __TURBOPACK__imported__module__92615__["isNode"])(containerProp) ? containerProp : containerProp.current)) ?? parentPortalNode ?? document.body;
        if (resolvedContainer == null) {
            if (containerRef.current) {
                containerRef.current = null;
                setPortalNode(null);
                setContainerElement(null);
            }
            return;
        }
        if (containerRef.current !== resolvedContainer) {
            containerRef.current = resolvedContainer;
            setPortalNode(null);
            setContainerElement(resolvedContainer);
        }
    }, [
        containerProp,
        parentPortalNode,
        uniqueId
    ]);
    const portalElement = (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('div', componentProps, {
        ref: [
            ref,
            setPortalNodeRef
        ],
        props: [
            {
                id: uniqueId,
                [attr]: ''
            },
            elementProps
        ]
    });
    // This `createPortal` call injects `portalElement` into the `container`.
    // Another call inside `FloatingPortal`/`FloatingPortalLite` then injects the children into `portalElement`.
    const portalSubtree = containerElement && portalElement ? /*#__PURE__*/ __TURBOPACK__imported__module__98057__["createPortal"](portalElement, containerElement) : null;
    return {
        portalNode,
        portalSubtree
    };
}
const FloatingPortal = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function FloatingPortal(componentProps, forwardedRef) {
    const { children, container, className, render, renderGuards, style, ...elementProps } = componentProps;
    const { portalNode, portalSubtree } = useFloatingPortalNode({
        container,
        ref: forwardedRef,
        componentProps,
        elementProps
    });
    const beforeOutsideRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const afterOutsideRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const beforeInsideRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const afterInsideRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const [focusManagerState, setFocusManagerState] = __TURBOPACK__imported__module__51268__["useState"](null);
    const focusInsideDisabledRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const modal = focusManagerState?.modal;
    const open = focusManagerState?.open;
    const shouldRenderGuards = typeof renderGuards === 'boolean' ? renderGuards : !!focusManagerState && !focusManagerState.modal && focusManagerState.open && !!portalNode;
    // https://codesandbox.io/s/tabbable-portal-f4tng?file=/src/TabbablePortal.tsx
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (!portalNode || modal) {
            return undefined;
        }
        // Make sure elements inside the portal element are tabbable only when the
        // portal has already been focused, either by tabbing into a focus trap
        // element outside or using the mouse.
        function onFocus(event) {
            if (portalNode && event.relatedTarget && (0, __TURBOPACK__imported__module__37313__["isOutsideEvent"])(event)) {
                if (event.type === 'focusin') {
                    if (focusInsideDisabledRef.current) {
                        (0, __TURBOPACK__imported__module__37313__["enableFocusInside"])(portalNode);
                        focusInsideDisabledRef.current = false;
                    }
                } else {
                    (0, __TURBOPACK__imported__module__37313__["disableFocusInside"])(portalNode);
                    focusInsideDisabledRef.current = true;
                }
            }
        }
        // Listen to the event on the capture phase so they run before the focus
        // trap elements onFocus prop is called.
        return (0, __TURBOPACK__imported__module__90169__["mergeCleanups"])((0, __TURBOPACK__imported__module__39767__["addEventListener"])(portalNode, 'focusin', onFocus, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(portalNode, 'focusout', onFocus, true));
    }, [
        portalNode,
        modal
    ]);
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (!portalNode || open !== false) {
            return;
        }
        (0, __TURBOPACK__imported__module__37313__["enableFocusInside"])(portalNode);
        focusInsideDisabledRef.current = false;
    }, [
        open,
        portalNode
    ]);
    const portalContextValue = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            beforeOutsideRef,
            afterOutsideRef,
            beforeInsideRef,
            afterInsideRef,
            portalNode,
            setFocusManagerState
        }), [
        portalNode
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(__TURBOPACK__imported__module__51268__["Fragment"], {
        children: [
            portalSubtree,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(PortalContext.Provider, {
                value: portalContextValue,
                children: [
                    shouldRenderGuards && portalNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__22879__["FocusGuard"], {
                        "data-type": "outside",
                        ref: beforeOutsideRef,
                        onFocus: (event)=>{
                            if ((0, __TURBOPACK__imported__module__37313__["isOutsideEvent"])(event, portalNode)) {
                                beforeInsideRef.current?.focus();
                            } else {
                                const domReference = focusManagerState ? focusManagerState.domReference : null;
                                const prevTabbable = (0, __TURBOPACK__imported__module__37313__["getPreviousTabbable"])(domReference);
                                prevTabbable?.focus();
                            }
                        }
                    }),
                    shouldRenderGuards && portalNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("span", {
                        "aria-owns": portalNode.id,
                        style: ownerVisuallyHidden
                    }),
                    portalNode && /*#__PURE__*/ __TURBOPACK__imported__module__98057__["createPortal"](children, portalNode),
                    shouldRenderGuards && portalNode && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__22879__["FocusGuard"], {
                        "data-type": "outside",
                        ref: afterOutsideRef,
                        onFocus: (event)=>{
                            if ((0, __TURBOPACK__imported__module__37313__["isOutsideEvent"])(event, portalNode)) {
                                afterInsideRef.current?.focus();
                            } else {
                                const domReference = focusManagerState ? focusManagerState.domReference : null;
                                const nextTabbable = (0, __TURBOPACK__imported__module__37313__["getNextTabbable"])(domReference);
                                nextTabbable?.focus();
                                if (focusManagerState?.closeOnFocusOut) {
                                    focusManagerState?.onOpenChange(false, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].focusOut, event.nativeEvent));
                                }
                            }
                        }
                    })
                ]
            })
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "FloatingPortal",
    0,
    FloatingPortal,
    "usePortalContext",
    0,
    usePortalContext
], 5951);
}),
9363, 40885, 
20382, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTree.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__70280__ = __turbopack_context__.i(70280);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingTreeStore.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/utils/createEventEmitter.js [app-client] (ecmascript)
;
function createEventEmitter() {
    const map = new Map();
    return {
        emit (event, data) {
            map.get(event)?.forEach((listener)=>listener(data));
        },
        on (event, listener) {
            if (!map.has(event)) {
                map.set(event, new Set());
            }
            map.get(event).add(listener);
        },
        off (event, listener) {
            map.get(event)?.delete(listener);
        }
    };
}
__turbopack_context__.s([
    "createEventEmitter",
    0,
    createEventEmitter
], 40885);
;
class FloatingTreeStore {
    nodesRef = {
        current: []
    };
    events = createEventEmitter();
    addNode(node) {
        this.nodesRef.current.push(node);
    }
    removeNode(node) {
        const index = this.nodesRef.current.findIndex((n)=>n === node);
        if (index !== -1) {
            this.nodesRef.current.splice(index, 1);
        }
    }
}
__turbopack_context__.s([
    "FloatingTreeStore",
    0,
    FloatingTreeStore
], 20382);
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
'use client';
;
;
;
;
;
;
const FloatingNodeContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["createContext"](null);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const FloatingTreeContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["createContext"](null);
/**
 * Returns the parent node id for nested floating elements, if available.
 * Returns `null` for top-level floating elements.
 */ if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
const useFloatingParentNodeId = ()=>__TURBOPACK__imported__module__51268__["useContext"](FloatingNodeContext)?.id || null;
const useFloatingTree = (externalTree)=>{
    const contextTree = __TURBOPACK__imported__module__51268__["useContext"](FloatingTreeContext);
    return externalTree ?? contextTree;
};
function useFloatingNodeId(externalTree) {
    const id = (0, __TURBOPACK__imported__module__70280__["useId"])();
    const tree = useFloatingTree(externalTree);
    const parentId = useFloatingParentNodeId();
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!id) {
            return undefined;
        }
        const node = {
            id,
            parentId
        };
        tree?.addNode(node);
        return ()=>{
            tree?.removeNode(node);
        };
    }, [
        tree,
        id,
        parentId
    ]);
    return id;
}
function FloatingNode(props) {
    const { children, id } = props;
    const parentId = useFloatingParentNodeId();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(FloatingNodeContext.Provider, {
        value: __TURBOPACK__imported__module__51268__["useMemo"](()=>({
                id,
                parentId
            }), [
            id,
            parentId
        ]),
        children: children
    });
}
function FloatingTree(props) {
    const { children, externalTree } = props;
    const tree = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(()=>externalTree ?? new FloatingTreeStore()).current;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(FloatingTreeContext.Provider, {
        value: tree,
        children: children
    });
}
__turbopack_context__.s([
    "FloatingNode",
    0,
    FloatingNode,
    "FloatingTree",
    0,
    FloatingTree,
    "useFloatingNodeId",
    0,
    useFloatingNodeId,
    "useFloatingParentNodeId",
    0,
    useFloatingParentNodeId,
    "useFloatingTree",
    0,
    useFloatingTree
], 9363);
}),
34022, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__39767__ = __turbopack_context__.i(39767);
var __TURBOPACK__imported__module__90169__ = __turbopack_context__.i(90169);
var __TURBOPACK__imported__module__90741__ = __turbopack_context__.i(90741);
var __TURBOPACK__imported__module__58823__ = __turbopack_context__.i(58823);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__5328__ = __turbopack_context__.i(5328);
var __TURBOPACK__imported__module__14028__ = __turbopack_context__.i(14028);
var __TURBOPACK__imported__module__31078__ = __turbopack_context__.i(31078);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__85182__ = __turbopack_context__.i(85182);
var __TURBOPACK__imported__module__22879__ = __turbopack_context__.i(22879);
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
var __TURBOPACK__imported__module__52881__ = __turbopack_context__.i(52881);
var __TURBOPACK__imported__module__56870__ = __turbopack_context__.i(56870);
var __TURBOPACK__imported__module__37313__ = __turbopack_context__.i(37313);
var __TURBOPACK__imported__module__44037__ = __turbopack_context__.i(44037);
var __TURBOPACK__imported__module__21922__ = __turbopack_context__.i(21922);
var __TURBOPACK__imported__module__34409__ = __turbopack_context__.i(34409);
var __TURBOPACK__imported__module__93719__ = __turbopack_context__.i(93719);
var __TURBOPACK__imported__module__43526__ = __turbopack_context__.i(43526);
var __TURBOPACK__imported__module__59464__ = __turbopack_context__.i(59464);
var __TURBOPACK__imported__module__15360__ = __turbopack_context__.i(15360);
var __TURBOPACK__imported__module__5951__ = __turbopack_context__.i(5951);
var __TURBOPACK__imported__module__9363__ = __turbopack_context__.i(9363);
var __TURBOPACK__imported__module__60217__ = __turbopack_context__.i(60217);
var __TURBOPACK__imported__module__86162__ = __turbopack_context__.i(86162);
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
;
;
function getEventType(event, lastInteractionType) {
    const win = (0, __TURBOPACK__imported__module__85182__["ownerWindow"])((0, __TURBOPACK__imported__module__95624__["getTarget"])(event));
    if (event instanceof win.KeyboardEvent) {
        return 'keyboard';
    }
    if (event instanceof win.FocusEvent) {
        // Focus events can be caused by a preceding pointer interaction (e.g., focusout on outside press).
        // Prefer the last known pointer type if provided, else treat as keyboard.
        return lastInteractionType || 'keyboard';
    }
    if ('pointerType' in event) {
        return event.pointerType || 'keyboard';
    }
    if ('touches' in event) {
        return 'touch';
    }
    if (event instanceof win.MouseEvent) {
        // onClick events may not contain pointer events, and will fall through to here
        return lastInteractionType || (event.detail === 0 ? 'keyboard' : 'mouse');
    }
    return '';
}
const LIST_LIMIT = 20;
let previouslyFocusedElements = [];
function clearDisconnectedPreviouslyFocusedElements() {
    previouslyFocusedElements = previouslyFocusedElements.filter((entry)=>{
        return entry.deref()?.isConnected;
    });
}
function addPreviouslyFocusedElement(element) {
    clearDisconnectedPreviouslyFocusedElements();
    if (element && (0, __TURBOPACK__imported__module__92615__["getNodeName"])(element) !== 'body') {
        previouslyFocusedElements.push(new WeakRef(element));
        if (previouslyFocusedElements.length > LIST_LIMIT) {
            previouslyFocusedElements = previouslyFocusedElements.slice(-LIST_LIMIT);
        }
    }
}
function getPreviouslyFocusedElement() {
    clearDisconnectedPreviouslyFocusedElements();
    return previouslyFocusedElements[previouslyFocusedElements.length - 1]?.deref();
}
function getFirstTabbableElement(container) {
    if (!container) {
        return null;
    }
    if ((0, __TURBOPACK__imported__module__37313__["isTabbable"])(container)) {
        return container;
    }
    return (0, __TURBOPACK__imported__module__37313__["tabbable"])(container)[0] || container;
}
function handleTabIndex(floatingFocusElement, orderRef) {
    if (floatingFocusElement.hasAttribute('tabindex') && !floatingFocusElement.hasAttribute('data-tabindex')) {
        return;
    }
    if (!orderRef.current.includes('floating') && !floatingFocusElement.getAttribute('role')?.includes('dialog')) {
        return;
    }
    const focusableElements = (0, __TURBOPACK__imported__module__37313__["focusable"])(floatingFocusElement);
    const tabbableContent = focusableElements.filter((element)=>{
        const dataTabIndex = element.getAttribute('data-tabindex') || '';
        return (0, __TURBOPACK__imported__module__37313__["isTabbable"])(element) || element.hasAttribute('data-tabindex') && !dataTabIndex.startsWith('-');
    });
    const tabIndex = floatingFocusElement.getAttribute('tabindex');
    if (orderRef.current.includes('floating') || tabbableContent.length === 0) {
        if (tabIndex !== '0') {
            floatingFocusElement.setAttribute('tabindex', '0');
        }
    } else if (tabIndex !== '-1' || floatingFocusElement.hasAttribute('data-tabindex') && floatingFocusElement.getAttribute('data-tabindex') !== '-1') {
        floatingFocusElement.setAttribute('tabindex', '-1');
        floatingFocusElement.setAttribute('data-tabindex', '-1');
    }
}
function FloatingFocusManager(props) {
    const { context, children, disabled = false, initialFocus = true, returnFocus = true, restoreFocus = false, modal = true, closeOnFocusOut = true, openInteractionType = '', nextFocusableElement, previousFocusableElement, beforeContentFocusGuardRef, externalTree, getInsideElements } = props;
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const domReference = store.useState('domReferenceElement');
    const floating = store.useState('floatingElement');
    const { events, dataRef } = store.context;
    const getNodeId = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>dataRef.current.floatingContext?.nodeId);
    const ignoreInitialFocus = initialFocus === false;
    // If the reference is a combobox and is typeable (e.g. input/textarea),
    // there are different focus semantics. The guards should not be rendered, but
    // aria-hidden should be applied to all nodes still. Further, the visually
    // hidden dismiss button should only appear at the end of the list, not the
    // start.
    const isUntrappedTypeableCombobox = (0, __TURBOPACK__imported__module__52881__["isTypeableCombobox"])(domReference) && ignoreInitialFocus;
    const orderRef = __TURBOPACK__imported__module__51268__["useRef"]([
        'content'
    ]);
    const initialFocusRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(initialFocus);
    const returnFocusRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(returnFocus);
    const openInteractionTypeRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(openInteractionType);
    const tree = (0, __TURBOPACK__imported__module__9363__["useFloatingTree"])(externalTree);
    const portalContext = (0, __TURBOPACK__imported__module__5951__["usePortalContext"])();
    const preventReturnFocusRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const isPointerDownRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const pointerDownOutsideRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const lastFocusedTabbableRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const closeTypeRef = __TURBOPACK__imported__module__51268__["useRef"]('');
    const lastInteractionTypeRef = __TURBOPACK__imported__module__51268__["useRef"]('');
    const beforeGuardRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const afterGuardRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const mergedBeforeGuardRef = (0, __TURBOPACK__imported__module__90741__["useMergedRefs"])(beforeGuardRef, beforeContentFocusGuardRef, portalContext?.beforeInsideRef);
    const mergedAfterGuardRef = (0, __TURBOPACK__imported__module__90741__["useMergedRefs"])(afterGuardRef, portalContext?.afterInsideRef);
    const blurTimeout = (0, __TURBOPACK__imported__module__5328__["useTimeout"])();
    const pointerDownTimeout = (0, __TURBOPACK__imported__module__5328__["useTimeout"])();
    const restoreFocusFrame = (0, __TURBOPACK__imported__module__31078__["useAnimationFrame"])();
    const isInsidePortal = portalContext != null;
    const floatingFocusElement = (0, __TURBOPACK__imported__module__52881__["getFloatingFocusElement"])(floating);
    const getTabbableContent = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((container = floatingFocusElement)=>{
        return container ? (0, __TURBOPACK__imported__module__37313__["tabbable"])(container) : [];
    });
    const getResolvedInsideElements = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>getInsideElements?.().filter((element)=>element != null) ?? []);
    // Prevent Tab from escaping the modal when there are no tabbable elements.
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (disabled || !modal) {
            return undefined;
        }
        function onKeyDown(event) {
            if (event.key === 'Tab') {
                // The focus guards have nothing to focus, so we need to stop the event.
                if ((0, __TURBOPACK__imported__module__95624__["contains"])(floatingFocusElement, (0, __TURBOPACK__imported__module__95624__["activeElement"])((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingFocusElement))) && getTabbableContent().length === 0 && !isUntrappedTypeableCombobox) {
                    (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
                }
            }
        }
        const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingFocusElement);
        return (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'keydown', onKeyDown);
    }, [
        disabled,
        domReference,
        floatingFocusElement,
        modal,
        orderRef,
        isUntrappedTypeableCombobox,
        getTabbableContent
    ]);
    // Track pointer/keyboard interactions to disambiguate focus and outside presses.
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (disabled || !open) {
            return undefined;
        }
        const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingFocusElement);
        function clearPointerDownOutside() {
            pointerDownOutsideRef.current = false;
        }
        function onPointerDown(event) {
            const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(event);
            const insideElements = getResolvedInsideElements();
            const pointerTargetInside = (0, __TURBOPACK__imported__module__95624__["contains"])(floating, target) || (0, __TURBOPACK__imported__module__95624__["contains"])(domReference, target) || (0, __TURBOPACK__imported__module__95624__["contains"])(portalContext?.portalNode, target) || insideElements.some((element)=>element === target || (0, __TURBOPACK__imported__module__95624__["contains"])(element, target));
            pointerDownOutsideRef.current = !pointerTargetInside;
            lastInteractionTypeRef.current = event.pointerType || 'keyboard';
            if (target?.closest(`[${__TURBOPACK__imported__module__60217__["CLICK_TRIGGER_IDENTIFIER"]}]`)) {
                isPointerDownRef.current = true;
            }
        }
        function onKeyDown() {
            lastInteractionTypeRef.current = 'keyboard';
        }
        return (0, __TURBOPACK__imported__module__90169__["mergeCleanups"])((0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'pointerdown', onPointerDown, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'pointerup', clearPointerDownOutside, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'pointercancel', clearPointerDownOutside, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'keydown', onKeyDown, true));
    }, [
        disabled,
        floating,
        domReference,
        floatingFocusElement,
        open,
        portalContext,
        getResolvedInsideElements
    ]);
    // Close on focus out and restore focus within the floating tree when needed.
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (disabled || !closeOnFocusOut) {
            return undefined;
        }
        const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingFocusElement);
        // In Safari, buttons lose focus when pressing them.
        function handlePointerDown() {
            isPointerDownRef.current = true;
            pointerDownTimeout.start(0, ()=>{
                isPointerDownRef.current = false;
            });
        }
        function handleFocusIn(event) {
            const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(event);
            if ((0, __TURBOPACK__imported__module__37313__["isTabbable"])(target)) {
                lastFocusedTabbableRef.current = target;
            }
        }
        function handleFocusOutside(event) {
            const relatedTarget = event.relatedTarget;
            const currentTarget = event.currentTarget;
            const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(event);
            queueMicrotask(()=>{
                const nodeId = getNodeId();
                const triggers = store.context.triggerElements;
                const insideElements = getResolvedInsideElements();
                const isRelatedFocusGuard = relatedTarget?.hasAttribute((0, __TURBOPACK__imported__module__43526__["createAttribute"])('focus-guard')) && [
                    beforeGuardRef.current,
                    afterGuardRef.current,
                    portalContext?.beforeInsideRef.current,
                    portalContext?.afterInsideRef.current,
                    portalContext?.beforeOutsideRef.current,
                    portalContext?.afterOutsideRef.current,
                    (0, __TURBOPACK__imported__module__86162__["resolveRef"])(previousFocusableElement),
                    (0, __TURBOPACK__imported__module__86162__["resolveRef"])(nextFocusableElement)
                ].includes(relatedTarget);
                const movedToUnrelatedNode = !((0, __TURBOPACK__imported__module__95624__["contains"])(domReference, relatedTarget) || (0, __TURBOPACK__imported__module__95624__["contains"])(floating, relatedTarget) || (0, __TURBOPACK__imported__module__95624__["contains"])(relatedTarget, floating) || (0, __TURBOPACK__imported__module__95624__["contains"])(portalContext?.portalNode, relatedTarget) || insideElements.some((element)=>element === relatedTarget || (0, __TURBOPACK__imported__module__95624__["contains"])(element, relatedTarget)) || relatedTarget != null && triggers.hasElement(relatedTarget) || triggers.hasMatchingElement((trigger)=>(0, __TURBOPACK__imported__module__95624__["contains"])(trigger, relatedTarget)) || isRelatedFocusGuard || tree && ((0, __TURBOPACK__imported__module__44037__["getNodeChildren"])(tree.nodesRef.current, nodeId).find((node)=>(0, __TURBOPACK__imported__module__95624__["contains"])(node.context?.elements.floating, relatedTarget) || (0, __TURBOPACK__imported__module__95624__["contains"])(node.context?.elements.domReference, relatedTarget)) || (0, __TURBOPACK__imported__module__44037__["getNodeAncestors"])(tree.nodesRef.current, nodeId).find((node)=>[
                        node.context?.elements.floating,
                        (0, __TURBOPACK__imported__module__52881__["getFloatingFocusElement"])(node.context?.elements.floating)
                    ].includes(relatedTarget) || node.context?.elements.domReference === relatedTarget)));
                if (currentTarget === domReference && floatingFocusElement) {
                    handleTabIndex(floatingFocusElement, orderRef);
                }
                // Restore focus to the previous tabbable element index to prevent
                // focus from being lost outside the floating tree.
                if (restoreFocus && currentTarget !== domReference && !(0, __TURBOPACK__imported__module__21922__["isElementVisible"])(target) && (0, __TURBOPACK__imported__module__95624__["activeElement"])(doc) === doc.body) {
                    // Let `FloatingPortal` effect knows that focus is still inside the
                    // floating tree.
                    if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(floatingFocusElement)) {
                        floatingFocusElement.focus();
                        // If explicitly requested to restore focus to the popup container, do not search
                        // for the next/previous tabbable element.
                        if (restoreFocus === 'popup') {
                            // If the element is removed on pointerdown, focus tries to move it,
                            // but since it's removed at the same time, focus gets lost as it
                            // happens after the .focus() call above.
                            // In this case, focus needs to be moved asynchronously.
                            restoreFocusFrame.request(()=>{
                                floatingFocusElement.focus();
                            });
                            return;
                        }
                    }
                    const tabbableContent = getTabbableContent();
                    const prevTabbable = lastFocusedTabbableRef.current;
                    const nodeToFocus = (prevTabbable && tabbableContent.includes(prevTabbable) ? prevTabbable : null) || tabbableContent[tabbableContent.length - 1] || floatingFocusElement;
                    if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(nodeToFocus)) {
                        nodeToFocus.focus();
                    }
                }
                // https://github.com/floating-ui/floating-ui/issues/3060
                if (dataRef.current.insideReactTree) {
                    dataRef.current.insideReactTree = false;
                    return;
                }
                // Focus did not move inside the floating tree, and there are no tabbable
                // portal guards to handle closing.
                if ((isUntrappedTypeableCombobox ? true : !modal) && relatedTarget && movedToUnrelatedNode && !isPointerDownRef.current && (// Fix React 18 Strict Mode returnFocus due to double rendering.
                // For an "untrapped" typeable combobox (input role=combobox with
                // initialFocus=false), re-opening the popup and tabbing out should still close it even
                // when the previously focused element (e.g. the next tabbable outside the popup) is
                // focused again. Otherwise, the popup remains open on the second Tab sequence:
                // click input -> Tab (closes) -> click input -> Tab.
                // Allow closing when `isUntrappedTypeableCombobox` regardless of the previously focused element.
                isUntrappedTypeableCombobox || relatedTarget !== getPreviouslyFocusedElement())) {
                    preventReturnFocusRef.current = true;
                    store.setOpen(false, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].focusOut, event));
                }
            });
        }
        function markInsideReactTree() {
            if (pointerDownOutsideRef.current) {
                return;
            }
            dataRef.current.insideReactTree = true;
            blurTimeout.start(0, ()=>{
                dataRef.current.insideReactTree = false;
            });
        }
        const domReferenceElement = (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(domReference) ? domReference : null;
        if (!floating && !domReferenceElement) {
            return undefined;
        }
        return (0, __TURBOPACK__imported__module__90169__["mergeCleanups"])(domReferenceElement && (0, __TURBOPACK__imported__module__39767__["addEventListener"])(domReferenceElement, 'focusout', handleFocusOutside), domReferenceElement && (0, __TURBOPACK__imported__module__39767__["addEventListener"])(domReferenceElement, 'pointerdown', handlePointerDown), floating && (0, __TURBOPACK__imported__module__39767__["addEventListener"])(floating, 'focusin', handleFocusIn), floating && (0, __TURBOPACK__imported__module__39767__["addEventListener"])(floating, 'focusout', handleFocusOutside), floating && portalContext && (0, __TURBOPACK__imported__module__39767__["addEventListener"])(floating, 'focusout', markInsideReactTree, true));
    }, [
        disabled,
        domReference,
        floating,
        floatingFocusElement,
        modal,
        tree,
        portalContext,
        store,
        closeOnFocusOut,
        restoreFocus,
        getTabbableContent,
        isUntrappedTypeableCombobox,
        getNodeId,
        orderRef,
        dataRef,
        blurTimeout,
        pointerDownTimeout,
        restoreFocusFrame,
        nextFocusableElement,
        previousFocusableElement,
        getResolvedInsideElements
    ]);
    // Hide everything outside the floating tree from assistive tech while open.
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (disabled || !floating || !open) {
            return undefined;
        }
        // Don't hide portals nested within the parent portal.
        const portalNodes = Array.from(portalContext?.portalNode?.querySelectorAll(`[${(0, __TURBOPACK__imported__module__43526__["createAttribute"])('portal')}]`) || []);
        const ancestors = tree ? (0, __TURBOPACK__imported__module__44037__["getNodeAncestors"])(tree.nodesRef.current, getNodeId()) : [];
        const rootAncestorComboboxDomReference = ancestors.find((node)=>(0, __TURBOPACK__imported__module__52881__["isTypeableCombobox"])(node.context?.elements.domReference || null))?.context?.elements.domReference;
        const controlInsideElements = [
            floating,
            ...portalNodes,
            beforeGuardRef.current,
            afterGuardRef.current,
            portalContext?.beforeOutsideRef.current,
            portalContext?.afterOutsideRef.current,
            ...getResolvedInsideElements()
        ];
        const insideElements = [
            ...controlInsideElements,
            rootAncestorComboboxDomReference,
            (0, __TURBOPACK__imported__module__86162__["resolveRef"])(previousFocusableElement),
            (0, __TURBOPACK__imported__module__86162__["resolveRef"])(nextFocusableElement),
            isUntrappedTypeableCombobox ? domReference : null
        ].filter((x)=>x != null);
        const ariaHiddenCleanup = (0, __TURBOPACK__imported__module__15360__["markOthers"])(insideElements, {
            ariaHidden: modal || isUntrappedTypeableCombobox,
            mark: false
        });
        const markerInsideElements = [
            floating,
            ...portalNodes
        ].filter((x)=>x != null);
        const markerCleanup = (0, __TURBOPACK__imported__module__15360__["markOthers"])(markerInsideElements);
        return ()=>{
            markerCleanup();
            ariaHiddenCleanup();
        };
    }, [
        open,
        disabled,
        domReference,
        floating,
        modal,
        orderRef,
        portalContext,
        isUntrappedTypeableCombobox,
        tree,
        getNodeId,
        nextFocusableElement,
        previousFocusableElement,
        getResolvedInsideElements
    ]);
    // Focus the initial element when the floating element opens.
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!open || disabled || !(0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(floatingFocusElement)) {
            return;
        }
        const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingFocusElement);
        const previouslyFocusedElement = (0, __TURBOPACK__imported__module__95624__["activeElement"])(doc);
        // Wait for any layout effect state setters to execute to set `tabIndex`.
        queueMicrotask(()=>{
            const initialFocusValueOrFn = initialFocusRef.current;
            const resolvedInitialFocus = typeof initialFocusValueOrFn === 'function' ? initialFocusValueOrFn(openInteractionTypeRef.current || '') : initialFocusValueOrFn;
            // `null` should fallback to default behavior in case of an empty ref.
            if (resolvedInitialFocus === undefined || resolvedInitialFocus === false) {
                return;
            }
            const focusAlreadyInsideFloatingEl = (0, __TURBOPACK__imported__module__95624__["contains"])(floatingFocusElement, previouslyFocusedElement);
            if (focusAlreadyInsideFloatingEl) {
                return;
            }
            let focusableElements = null;
            const getDefaultFocusElement = ()=>{
                if (focusableElements == null) {
                    focusableElements = getTabbableContent(floatingFocusElement);
                }
                return focusableElements[0] || floatingFocusElement;
            };
            let elToFocus;
            if (resolvedInitialFocus === true || resolvedInitialFocus === null) {
                elToFocus = getDefaultFocusElement();
            } else {
                elToFocus = (0, __TURBOPACK__imported__module__86162__["resolveRef"])(resolvedInitialFocus);
            }
            elToFocus = elToFocus || getDefaultFocusElement();
            (0, __TURBOPACK__imported__module__59464__["enqueueFocus"])(elToFocus, {
                preventScroll: elToFocus === floatingFocusElement
            });
        });
    }, [
        disabled,
        open,
        floatingFocusElement,
        ignoreInitialFocus,
        getTabbableContent,
        initialFocusRef,
        openInteractionTypeRef
    ]);
    // Track return focus targets and restore focus on unmount/close.
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (disabled || !floatingFocusElement) {
            return undefined;
        }
        const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingFocusElement);
        const previouslyFocusedElement = (0, __TURBOPACK__imported__module__95624__["activeElement"])(doc);
        addPreviouslyFocusedElement(previouslyFocusedElement);
        // Dismissing via outside press should always ignore `returnFocus` to
        // prevent unwanted scrolling.
        function onOpenChangeLocal(details) {
            if (!details.open) {
                closeTypeRef.current = getEventType(details.nativeEvent, lastInteractionTypeRef.current);
            }
            if (details.reason === __TURBOPACK__imported__module__93719__["REASONS"].triggerHover && details.nativeEvent.type === 'mouseleave') {
                preventReturnFocusRef.current = true;
            }
            if (details.reason !== __TURBOPACK__imported__module__93719__["REASONS"].outsidePress) {
                return;
            }
            if (details.nested) {
                preventReturnFocusRef.current = false;
            } else if ((0, __TURBOPACK__imported__module__56870__["isVirtualClick"])(details.nativeEvent) || (0, __TURBOPACK__imported__module__56870__["isVirtualPointerEvent"])(details.nativeEvent)) {
                preventReturnFocusRef.current = false;
            } else {
                let isPreventScrollSupported = false;
                (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingFocusElement).createElement('div').focus({
                    get preventScroll () {
                        isPreventScrollSupported = true;
                        return false;
                    }
                });
                if (isPreventScrollSupported) {
                    preventReturnFocusRef.current = false;
                } else {
                    preventReturnFocusRef.current = true;
                }
            }
        }
        events.on('openchange', onOpenChangeLocal);
        function getReturnElement() {
            const returnFocusValueOrFn = returnFocusRef.current;
            let resolvedReturnFocusValue = typeof returnFocusValueOrFn === 'function' ? returnFocusValueOrFn(closeTypeRef.current) : returnFocusValueOrFn;
            // `null` should fallback to default behavior in case of an empty ref.
            if (resolvedReturnFocusValue === undefined || resolvedReturnFocusValue === false) {
                return null;
            }
            if (resolvedReturnFocusValue === null) {
                resolvedReturnFocusValue = true;
            }
            if (typeof resolvedReturnFocusValue === 'boolean') {
                const el = domReference || getPreviouslyFocusedElement();
                return el && el.isConnected ? el : null;
            }
            const fallback = domReference || getPreviouslyFocusedElement();
            return (0, __TURBOPACK__imported__module__86162__["resolveRef"])(resolvedReturnFocusValue) || fallback || null;
        }
        return ()=>{
            events.off('openchange', onOpenChangeLocal);
            const activeEl = (0, __TURBOPACK__imported__module__95624__["activeElement"])(doc);
            const insideElements = getResolvedInsideElements();
            const isFocusInsideFloatingTree = (0, __TURBOPACK__imported__module__95624__["contains"])(floating, activeEl) || insideElements.some((element)=>element === activeEl || (0, __TURBOPACK__imported__module__95624__["contains"])(element, activeEl)) || tree && (0, __TURBOPACK__imported__module__44037__["getNodeChildren"])(tree.nodesRef.current, getNodeId(), false).some((node)=>(0, __TURBOPACK__imported__module__95624__["contains"])(node.context?.elements.floating, activeEl));
            // eslint-disable-next-line react-hooks/exhaustive-deps
            const returnFocusValueOrFn = returnFocusRef.current;
            const returnElement = getReturnElement();
            queueMicrotask(()=>{
                // This is `returnElement`, if it's tabbable, or its first tabbable child.
                const tabbableReturnElement = getFirstTabbableElement(returnElement);
                const hasExplicitReturnFocus = typeof returnFocusValueOrFn !== 'boolean';
                if (returnFocusValueOrFn && !preventReturnFocusRef.current && (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(tabbableReturnElement) && (// If the focus moved somewhere else after mount, avoid returning focus
                // since it likely entered a different element which should be
                // respected: https://github.com/floating-ui/floating-ui/issues/2607
                !hasExplicitReturnFocus && tabbableReturnElement !== activeEl && activeEl !== doc.body ? isFocusInsideFloatingTree : true)) {
                    tabbableReturnElement.focus({
                        preventScroll: true
                    });
                }
                preventReturnFocusRef.current = false;
            });
        };
    }, [
        disabled,
        floating,
        floatingFocusElement,
        returnFocusRef,
        dataRef,
        events,
        tree,
        domReference,
        getNodeId,
        getResolvedInsideElements
    ]);
    // Safari may randomly scroll to the bottom of the page if an input inside a popup has focus
    // when the popup unmounts from the DOM.
    // By blurring it before the popup unmounts, we can prevent this behavior.
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!__TURBOPACK__imported__module__14028__["isWebKit"] || open || !floating) {
            return;
        }
        const activeEl = (0, __TURBOPACK__imported__module__95624__["activeElement"])((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floating));
        if (!(0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(activeEl) || !(0, __TURBOPACK__imported__module__52881__["isTypeableElement"])(activeEl)) {
            return;
        }
        if ((0, __TURBOPACK__imported__module__95624__["contains"])(floating, activeEl)) {
            activeEl.blur();
        }
    }, [
        open,
        floating
    ]);
    // Synchronize the `context` & `modal` value to the FloatingPortal context.
    // It will decide whether or not it needs to render its own guards.
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (disabled || !portalContext) {
            return undefined;
        }
        portalContext.setFocusManagerState({
            modal,
            closeOnFocusOut,
            open,
            onOpenChange: store.setOpen,
            domReference
        });
        return ()=>{
            portalContext.setFocusManagerState(null);
        };
    }, [
        disabled,
        portalContext,
        modal,
        open,
        store,
        closeOnFocusOut,
        domReference
    ]);
    // Keep the floating element tabIndex in sync and clear stale focus records.
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (disabled || !floatingFocusElement) {
            return undefined;
        }
        handleTabIndex(floatingFocusElement, orderRef);
        return ()=>{
            queueMicrotask(clearDisconnectedPreviouslyFocusedElements);
        };
    }, [
        disabled,
        floatingFocusElement,
        orderRef
    ]);
    const shouldRenderGuards = !disabled && (modal ? !isUntrappedTypeableCombobox : true) && (isInsidePortal || modal);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(__TURBOPACK__imported__module__51268__["Fragment"], {
        children: [
            shouldRenderGuards && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__22879__["FocusGuard"], {
                "data-type": "inside",
                ref: mergedBeforeGuardRef,
                onFocus: (event)=>{
                    if (modal) {
                        const els = getTabbableContent();
                        (0, __TURBOPACK__imported__module__59464__["enqueueFocus"])(els[els.length - 1]);
                    } else if (portalContext?.portalNode) {
                        preventReturnFocusRef.current = false;
                        if ((0, __TURBOPACK__imported__module__37313__["isOutsideEvent"])(event, portalContext.portalNode)) {
                            const nextTabbable = (0, __TURBOPACK__imported__module__37313__["getNextTabbable"])(domReference);
                            nextTabbable?.focus();
                        } else {
                            (0, __TURBOPACK__imported__module__86162__["resolveRef"])(previousFocusableElement ?? portalContext.beforeOutsideRef)?.focus();
                        }
                    }
                }
            }),
            children,
            shouldRenderGuards && /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__22879__["FocusGuard"], {
                "data-type": "inside",
                ref: mergedAfterGuardRef,
                onFocus: (event)=>{
                    if (modal) {
                        (0, __TURBOPACK__imported__module__59464__["enqueueFocus"])(getTabbableContent()[0]);
                    } else if (portalContext?.portalNode) {
                        if (closeOnFocusOut) {
                            preventReturnFocusRef.current = true;
                        }
                        if ((0, __TURBOPACK__imported__module__37313__["isOutsideEvent"])(event, portalContext.portalNode)) {
                            const prevTabbable = (0, __TURBOPACK__imported__module__37313__["getPreviousTabbable"])(domReference);
                            prevTabbable?.focus();
                        } else {
                            (0, __TURBOPACK__imported__module__86162__["resolveRef"])(nextFocusableElement ?? portalContext.afterOutsideRef)?.focus();
                        }
                    }
                }
            })
        ]
    });
}
__turbopack_context__.s([
    "FloatingFocusManager",
    0,
    FloatingFocusManager
]);
}),
82662, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__91226__ = __turbopack_context__.i(91226);
;
function inertValue(value) {
    if ((0, __TURBOPACK__imported__module__91226__["isReactVersionAtLeast"])(19)) {
        return value;
    }
    // compatibility with React < 19
    return value ? 'true' : undefined;
}
__turbopack_context__.s([
    "inertValue",
    0,
    inertValue
]);
}),
7432, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
/**
 * @internal
 */ var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
;
;
const InternalBackdrop = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["forwardRef"](function InternalBackdrop(props, ref) {
    const { cutout, ...otherProps } = props;
    let clipPath;
    if (cutout) {
        const rect = cutout.getBoundingClientRect();
        clipPath = `polygon(0% 0%,100% 0%,100% 100%,0% 100%,0% 0%,${rect.left}px ${rect.top}px,${rect.left}px ${rect.bottom}px,${rect.right}px ${rect.bottom}px,${rect.right}px ${rect.top}px,${rect.left}px ${rect.top}px)`;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        ref: ref,
        role: "presentation",
        "data-base-ui-inert": "",
        ...otherProps,
        style: {
            position: 'fixed',
            inset: 0,
            userSelect: 'none',
            WebkitUserSelect: 'none',
            clipPath
        }
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "InternalBackdrop",
    0,
    InternalBackdrop
]);
}),
50692, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
'use client';
;
function useOnFirstRender(fn) {
    const ref = __TURBOPACK__imported__module__51268__["useRef"](true);
    if (ref.current) {
        ref.current = false;
        fn();
    }
}
__turbopack_context__.s([
    "useOnFirstRender",
    0,
    useOnFirstRender
]);
}),
28376, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__39767__ = __turbopack_context__.i(39767);
var __TURBOPACK__imported__module__14028__ = __turbopack_context__.i(14028);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__85182__ = __turbopack_context__.i(85182);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__5328__ = __turbopack_context__.i(5328);
var __TURBOPACK__imported__module__31078__ = __turbopack_context__.i(31078);
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
'use client';
;
;
;
;
;
;
;
;
let originalHtmlStyles = {};
let originalBodyStyles = {};
let originalHtmlScrollBehavior = '';
function hasInsetScrollbars(referenceElement) {
    if (typeof document === 'undefined') {
        return false;
    }
    const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(referenceElement);
    const win = (0, __TURBOPACK__imported__module__85182__["ownerWindow"])(doc);
    return win.innerWidth - doc.documentElement.clientWidth > 0;
}
function supportsStableScrollbarGutter(referenceElement) {
    const supported = typeof CSS !== 'undefined' && CSS.supports && CSS.supports('scrollbar-gutter', 'stable');
    if (!supported || typeof document === 'undefined') {
        return false;
    }
    const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const scrollContainer = (0, __TURBOPACK__imported__module__92615__["isOverflowElement"])(html) ? html : body;
    const originalScrollContainerOverflowY = scrollContainer.style.overflowY;
    const originalHtmlStyleGutter = html.style.scrollbarGutter;
    html.style.scrollbarGutter = 'stable';
    scrollContainer.style.overflowY = 'scroll';
    const before = scrollContainer.offsetWidth;
    scrollContainer.style.overflowY = 'hidden';
    const after = scrollContainer.offsetWidth;
    scrollContainer.style.overflowY = originalScrollContainerOverflowY;
    html.style.scrollbarGutter = originalHtmlStyleGutter;
    return before === after;
}
function preventScrollOverlayScrollbars(referenceElement) {
    const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    // If an `overflow` style is present on <html>, we need to lock it, because a lock on <body>
    // won't have any effect.
    // But if <body> has an `overflow` style (like `overflow-x: hidden`), we need to lock it
    // instead, as sticky elements shift otherwise.
    const elementToLock = (0, __TURBOPACK__imported__module__92615__["isOverflowElement"])(html) ? html : body;
    const originalElementToLockStyles = {
        overflowY: elementToLock.style.overflowY,
        overflowX: elementToLock.style.overflowX
    };
    Object.assign(elementToLock.style, {
        overflowY: 'hidden',
        overflowX: 'hidden'
    });
    return ()=>{
        Object.assign(elementToLock.style, originalElementToLockStyles);
    };
}
function preventScrollInsetScrollbars(referenceElement) {
    const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(referenceElement);
    const html = doc.documentElement;
    const body = doc.body;
    const win = (0, __TURBOPACK__imported__module__85182__["ownerWindow"])(html);
    let scrollTop = 0;
    let scrollLeft = 0;
    let updateGutterOnly = false;
    const resizeFrame = __TURBOPACK__imported__module__31078__["AnimationFrame"].create();
    // Pinch-zoom in Safari causes a shift. Just don't lock scroll if there's any pinch-zoom.
    if (__TURBOPACK__imported__module__14028__["isWebKit"] && (win.visualViewport?.scale ?? 1) !== 1) {
        return ()=>{};
    }
    function lockScroll() {
        /* DOM reads: */ const htmlStyles = win.getComputedStyle(html);
        const bodyStyles = win.getComputedStyle(body);
        const htmlScrollbarGutterValue = htmlStyles.scrollbarGutter || '';
        const hasBothEdges = htmlScrollbarGutterValue.includes('both-edges');
        const scrollbarGutterValue = hasBothEdges ? 'stable both-edges' : 'stable';
        scrollTop = html.scrollTop;
        scrollLeft = html.scrollLeft;
        originalHtmlStyles = {
            scrollbarGutter: html.style.scrollbarGutter,
            overflowY: html.style.overflowY,
            overflowX: html.style.overflowX
        };
        originalHtmlScrollBehavior = html.style.scrollBehavior;
        originalBodyStyles = {
            position: body.style.position,
            height: body.style.height,
            width: body.style.width,
            boxSizing: body.style.boxSizing,
            overflowY: body.style.overflowY,
            overflowX: body.style.overflowX,
            scrollBehavior: body.style.scrollBehavior
        };
        const isScrollableY = html.scrollHeight > html.clientHeight;
        const isScrollableX = html.scrollWidth > html.clientWidth;
        const hasConstantOverflowY = htmlStyles.overflowY === 'scroll' || bodyStyles.overflowY === 'scroll';
        const hasConstantOverflowX = htmlStyles.overflowX === 'scroll' || bodyStyles.overflowX === 'scroll';
        // Values can be negative in Firefox
        const scrollbarWidth = Math.max(0, win.innerWidth - body.clientWidth);
        const scrollbarHeight = Math.max(0, win.innerHeight - body.clientHeight);
        // Avoid shift due to the default <body> margin. This does cause elements to be clipped
        // with whitespace. Warn if <body> has margins?
        const marginY = parseFloat(bodyStyles.marginTop) + parseFloat(bodyStyles.marginBottom);
        const marginX = parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight);
        const elementToLock = (0, __TURBOPACK__imported__module__92615__["isOverflowElement"])(html) ? html : body;
        updateGutterOnly = supportsStableScrollbarGutter(referenceElement);
        /*
     * DOM writes:
     * Do not read the DOM past this point!
     */ if (updateGutterOnly) {
            html.style.scrollbarGutter = scrollbarGutterValue;
            elementToLock.style.overflowY = 'hidden';
            elementToLock.style.overflowX = 'hidden';
            return;
        }
        Object.assign(html.style, {
            scrollbarGutter: scrollbarGutterValue,
            overflowY: 'hidden',
            overflowX: 'hidden'
        });
        if (isScrollableY || hasConstantOverflowY) {
            html.style.overflowY = 'scroll';
        }
        if (isScrollableX || hasConstantOverflowX) {
            html.style.overflowX = 'scroll';
        }
        Object.assign(body.style, {
            position: 'relative',
            height: marginY || scrollbarHeight ? `calc(100dvh - ${marginY + scrollbarHeight}px)` : '100dvh',
            width: marginX || scrollbarWidth ? `calc(100vw - ${marginX + scrollbarWidth}px)` : '100vw',
            boxSizing: 'border-box',
            overflow: 'hidden',
            scrollBehavior: 'unset'
        });
        body.scrollTop = scrollTop;
        body.scrollLeft = scrollLeft;
        html.setAttribute('data-base-ui-scroll-locked', '');
        html.style.scrollBehavior = 'unset';
    }
    function cleanup() {
        Object.assign(html.style, originalHtmlStyles);
        Object.assign(body.style, originalBodyStyles);
        if (!updateGutterOnly) {
            html.scrollTop = scrollTop;
            html.scrollLeft = scrollLeft;
            html.removeAttribute('data-base-ui-scroll-locked');
            html.style.scrollBehavior = originalHtmlScrollBehavior;
        }
    }
    function handleResize() {
        cleanup();
        resizeFrame.request(lockScroll);
    }
    lockScroll();
    const unsubscribeResize = (0, __TURBOPACK__imported__module__39767__["addEventListener"])(win, 'resize', handleResize);
    return ()=>{
        resizeFrame.cancel();
        cleanup();
        // Sometimes this cleanup can run after test teardown because it is called
        // in a `setTimeout(fn, 0)`. Guard the returned cleanup to avoid calling
        // `removeEventListener` when it is no longer available in tests.
        if (typeof win.removeEventListener === 'function') {
            unsubscribeResize();
        }
    };
}
class ScrollLocker {
    lockCount = 0;
    restore = null;
    timeoutLock = __TURBOPACK__imported__module__5328__["Timeout"].create();
    timeoutUnlock = __TURBOPACK__imported__module__5328__["Timeout"].create();
    acquire(referenceElement) {
        this.lockCount += 1;
        if (this.lockCount === 1 && this.restore === null) {
            this.timeoutLock.start(0, ()=>this.lock(referenceElement));
        }
        return this.release;
    }
    release = ()=>{
        this.lockCount -= 1;
        if (this.lockCount === 0 && this.restore) {
            this.timeoutUnlock.start(0, this.unlock);
        }
    };
    unlock = ()=>{
        if (this.lockCount === 0 && this.restore) {
            this.restore?.();
            this.restore = null;
        }
    };
    lock(referenceElement) {
        if (this.lockCount === 0 || this.restore !== null) {
            return;
        }
        const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(referenceElement);
        const html = doc.documentElement;
        const htmlOverflowY = (0, __TURBOPACK__imported__module__85182__["ownerWindow"])(html).getComputedStyle(html).overflowY;
        // If the site author already hid overflow on <html>, respect it and bail out.
        if (htmlOverflowY === 'hidden' || htmlOverflowY === 'clip') {
            this.restore = __TURBOPACK__imported__module__24659__["NOOP"];
            return;
        }
        const hasOverlayScrollbars = __TURBOPACK__imported__module__14028__["isIOS"] || !hasInsetScrollbars(referenceElement);
        // On iOS, scroll locking does not work if the navbar is collapsed. Due to numerous
        // side effects and bugs that arise on iOS, it must be researched extensively before
        // being enabled to ensure it doesn't cause the following issues:
        // - Textboxes must scroll into view when focused, nor cause a glitchy scroll animation.
        // - The navbar must not force itself into view and cause layout shift.
        // - Scroll containers must not flicker upon closing a popup when it has an exit animation.
        this.restore = hasOverlayScrollbars ? preventScrollOverlayScrollbars(referenceElement) : preventScrollInsetScrollbars(referenceElement);
    }
}
const SCROLL_LOCKER = new ScrollLocker();
function useScrollLock(enabled = true, referenceElement = null) {
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!enabled) {
            return undefined;
        }
        return SCROLL_LOCKER.acquire(referenceElement);
    }, [
        enabled,
        referenceElement
    ]);
}
__turbopack_context__.s([
    "useScrollLock",
    0,
    useScrollLock
]);
}),
99729, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__39767__ = __turbopack_context__.i(39767);
var __TURBOPACK__imported__module__90169__ = __turbopack_context__.i(90169);
var __TURBOPACK__imported__module__5328__ = __turbopack_context__.i(5328);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
var __TURBOPACK__imported__module__52881__ = __turbopack_context__.i(52881);
var __TURBOPACK__imported__module__56870__ = __turbopack_context__.i(56870);
var __TURBOPACK__imported__module__44037__ = __turbopack_context__.i(44037);
/* eslint-disable no-underscore-dangle */ var __TURBOPACK__imported__module__9363__ = __turbopack_context__.i(9363);
var __TURBOPACK__imported__module__34409__ = __turbopack_context__.i(34409);
var __TURBOPACK__imported__module__93719__ = __turbopack_context__.i(93719);
var __TURBOPACK__imported__module__43526__ = __turbopack_context__.i(43526);
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
const bubbleHandlerKeys = {
    intentional: 'onClick',
    sloppy: 'onPointerDown'
};
function alwaysFalse() {
    return false;
}
function normalizeProp(normalizable) {
    return {
        escapeKey: typeof normalizable === 'boolean' ? normalizable : normalizable?.escapeKey ?? false,
        outsidePress: typeof normalizable === 'boolean' ? normalizable : normalizable?.outsidePress ?? true
    };
}
function useDismiss(context, props = {}) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const floatingElement = store.useState('floatingElement');
    const { dataRef } = store.context;
    const { enabled = true, escapeKey = true, outsidePress: outsidePressProp = true, outsidePressEvent = 'sloppy', referencePress = alwaysFalse, referencePressEvent = 'sloppy', bubbles, externalTree } = props;
    const tree = (0, __TURBOPACK__imported__module__9363__["useFloatingTree"])(externalTree);
    const outsidePressFn = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(typeof outsidePressProp === 'function' ? outsidePressProp : ()=>false);
    const outsidePress = typeof outsidePressProp === 'function' ? outsidePressFn : outsidePressProp;
    const outsidePressEnabled = outsidePress !== false;
    const getOutsidePressEventProp = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>outsidePressEvent);
    const pressStartedInsideRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const pressStartPreventedRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    // Ignore only the very next outside click after dragging from inside to outside.
    const suppressNextOutsideClickRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const { escapeKey: escapeKeyBubbles, outsidePress: outsidePressBubbles } = normalizeProp(bubbles);
    const touchStateRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const cancelDismissOnEndTimeout = (0, __TURBOPACK__imported__module__5328__["useTimeout"])();
    const clearInsideReactTreeTimeout = (0, __TURBOPACK__imported__module__5328__["useTimeout"])();
    const clearInsideReactTree = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>{
        clearInsideReactTreeTimeout.clear();
        dataRef.current.insideReactTree = false;
    });
    const isComposingRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const currentPointerTypeRef = __TURBOPACK__imported__module__51268__["useRef"]('');
    const isReferencePressEnabled = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(referencePress);
    const closeOnEscapeKeyDown = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((event)=>{
        if (!open || !enabled || !escapeKey || event.key !== 'Escape') {
            return;
        }
        // Wait until IME is settled. Pressing `Escape` while composing should
        // close the compose menu, but not the floating element.
        if (isComposingRef.current) {
            return;
        }
        const nodeId = dataRef.current.floatingContext?.nodeId;
        const children = tree ? (0, __TURBOPACK__imported__module__44037__["getNodeChildren"])(tree.nodesRef.current, nodeId) : [];
        if (!escapeKeyBubbles) {
            if (children.length > 0) {
                let shouldDismiss = true;
                children.forEach((child)=>{
                    if (child.context?.open && !child.context.dataRef.current.__escapeKeyBubbles) {
                        shouldDismiss = false;
                    }
                });
                if (!shouldDismiss) {
                    return;
                }
            }
        }
        const native = (0, __TURBOPACK__imported__module__56870__["isReactEvent"])(event) ? event.nativeEvent : event;
        const eventDetails = (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].escapeKey, native);
        store.setOpen(false, eventDetails);
        if (!escapeKeyBubbles && !eventDetails.isPropagationAllowed) {
            event.stopPropagation();
        }
    });
    const markInsideReactTree = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>{
        dataRef.current.insideReactTree = true;
        clearInsideReactTreeTimeout.start(0, clearInsideReactTree);
    });
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (!open || !enabled) {
            return undefined;
        }
        dataRef.current.__escapeKeyBubbles = escapeKeyBubbles;
        dataRef.current.__outsidePressBubbles = outsidePressBubbles;
        const compositionTimeout = new __TURBOPACK__imported__module__5328__["Timeout"]();
        const preventedPressSuppressionTimeout = new __TURBOPACK__imported__module__5328__["Timeout"]();
        function handleCompositionStart() {
            compositionTimeout.clear();
            isComposingRef.current = true;
        }
        function handleCompositionEnd() {
            // Safari fires `compositionend` before `keydown`, so we need to wait
            // until the next tick to set `isComposing` to `false`.
            // https://bugs.webkit.org/show_bug.cgi?id=165004
            compositionTimeout.start(// 0ms or 1ms don't work in Safari. 5ms appears to consistently work.
            // Only apply to WebKit for the test to remain 0ms.
            (0, __TURBOPACK__imported__module__92615__["isWebKit"])() ? 5 : 0, ()=>{
                isComposingRef.current = false;
            });
        }
        function suppressImmediateOutsideClickAfterPreventedStart() {
            suppressNextOutsideClickRef.current = true;
            // Firefox can emit the synthetic outside click in a later task after
            // pointer lock exit, so microtask clearing is too early here.
            preventedPressSuppressionTimeout.start(0, ()=>{
                suppressNextOutsideClickRef.current = false;
            });
        }
        function resetPressStartState() {
            pressStartedInsideRef.current = false;
            pressStartPreventedRef.current = false;
        }
        function getOutsidePressEvent() {
            const type = currentPointerTypeRef.current;
            const computedType = type === 'pen' || !type ? 'mouse' : type;
            const outsidePressEventValue = getOutsidePressEventProp();
            const resolved = typeof outsidePressEventValue === 'function' ? outsidePressEventValue() : outsidePressEventValue;
            if (typeof resolved === 'string') {
                return resolved;
            }
            return resolved[computedType];
        }
        function shouldIgnoreEvent(event) {
            const computedOutsidePressEvent = getOutsidePressEvent();
            return computedOutsidePressEvent === 'intentional' && event.type !== 'click' || computedOutsidePressEvent === 'sloppy' && event.type === 'click';
        }
        function isEventWithinFloatingTree(event) {
            const nodeId = dataRef.current.floatingContext?.nodeId;
            const targetIsInsideChildren = tree && (0, __TURBOPACK__imported__module__44037__["getNodeChildren"])(tree.nodesRef.current, nodeId).some((node)=>(0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, node.context?.elements.floating));
            return (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('floatingElement')) || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('domReferenceElement')) || targetIsInsideChildren;
        }
        function closeOnPressOutside(event) {
            if (shouldIgnoreEvent(event)) {
                clearInsideReactTree();
                return;
            }
            if (dataRef.current.insideReactTree) {
                clearInsideReactTree();
                return;
            }
            const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(event);
            const inertSelector = `[${(0, __TURBOPACK__imported__module__43526__["createAttribute"])('inert')}]`;
            const targetRoot = (0, __TURBOPACK__imported__module__92615__["isElement"])(target) ? target.getRootNode() : null;
            const markers = Array.from(((0, __TURBOPACK__imported__module__92615__["isShadowRoot"])(targetRoot) ? targetRoot : (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(store.select('floatingElement'))).querySelectorAll(inertSelector));
            const triggers = store.context.triggerElements;
            // If another trigger is clicked, don't close the floating element.
            if (target && (triggers.hasElement(target) || triggers.hasMatchingElement((trigger)=>(0, __TURBOPACK__imported__module__95624__["contains"])(trigger, target)))) {
                return;
            }
            let targetRootAncestor = (0, __TURBOPACK__imported__module__92615__["isElement"])(target) ? target : null;
            while(targetRootAncestor && !(0, __TURBOPACK__imported__module__92615__["isLastTraversableNode"])(targetRootAncestor)){
                const nextParent = (0, __TURBOPACK__imported__module__92615__["getParentNode"])(targetRootAncestor);
                if ((0, __TURBOPACK__imported__module__92615__["isLastTraversableNode"])(nextParent) || !(0, __TURBOPACK__imported__module__92615__["isElement"])(nextParent)) {
                    break;
                }
                targetRootAncestor = nextParent;
            }
            // Check if the click occurred on a third-party element injected after the
            // floating element rendered.
            if (markers.length && (0, __TURBOPACK__imported__module__92615__["isElement"])(target) && !(0, __TURBOPACK__imported__module__52881__["isRootElement"])(target) && // Clicked on a direct ancestor (e.g. FloatingOverlay).
            !(0, __TURBOPACK__imported__module__95624__["contains"])(target, store.select('floatingElement')) && // If the target root element contains none of the markers, then the
            // element was injected after the floating element rendered.
            markers.every((marker)=>!(0, __TURBOPACK__imported__module__95624__["contains"])(targetRootAncestor, marker))) {
                return;
            }
            // Check if the click occurred on the scrollbar
            // Skip for touch events: scrollbars don't receive touch events on most platforms
            if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(target) && !('touches' in event)) {
                const lastTraversableNode = (0, __TURBOPACK__imported__module__92615__["isLastTraversableNode"])(target);
                const style = (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(target);
                const scrollRe = /auto|scroll/;
                const isScrollableX = lastTraversableNode || scrollRe.test(style.overflowX);
                const isScrollableY = lastTraversableNode || scrollRe.test(style.overflowY);
                const canScrollX = isScrollableX && target.clientWidth > 0 && target.scrollWidth > target.clientWidth;
                const canScrollY = isScrollableY && target.clientHeight > 0 && target.scrollHeight > target.clientHeight;
                const isRTL = style.direction === 'rtl';
                // Check click position relative to scrollbar.
                // In some browsers it is possible to change the <body> (or window)
                // scrollbar to the left side, but is very rare and is difficult to
                // check for. Plus, for modal dialogs with backdrops, it is more
                // important that the backdrop is checked but not so much the window.
                const pressedVerticalScrollbar = canScrollY && (isRTL ? event.offsetX <= target.offsetWidth - target.clientWidth : event.offsetX > target.clientWidth);
                const pressedHorizontalScrollbar = canScrollX && event.offsetY > target.clientHeight;
                if (pressedVerticalScrollbar || pressedHorizontalScrollbar) {
                    return;
                }
            }
            if (isEventWithinFloatingTree(event)) {
                return;
            }
            // In intentional mode, a press that starts inside and ends outside gets
            // one suppressed outside click. Run this after inside-target checks so
            // inside clicks don't consume the one-shot suppression.
            if (getOutsidePressEvent() === 'intentional' && suppressNextOutsideClickRef.current) {
                preventedPressSuppressionTimeout.clear();
                suppressNextOutsideClickRef.current = false;
                return;
            }
            if (typeof outsidePress === 'function' && !outsidePress(event)) {
                return;
            }
            const nodeId = dataRef.current.floatingContext?.nodeId;
            const children = tree ? (0, __TURBOPACK__imported__module__44037__["getNodeChildren"])(tree.nodesRef.current, nodeId) : [];
            if (children.length > 0) {
                let shouldDismiss = true;
                children.forEach((child)=>{
                    if (child.context?.open && !child.context.dataRef.current.__outsidePressBubbles) {
                        shouldDismiss = false;
                    }
                });
                if (!shouldDismiss) {
                    return;
                }
            }
            store.setOpen(false, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].outsidePress, event));
            clearInsideReactTree();
        }
        function handlePointerDown(event) {
            if (getOutsidePressEvent() !== 'sloppy' || event.pointerType === 'touch' || !store.select('open') || !enabled || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('floatingElement')) || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('domReferenceElement'))) {
                return;
            }
            closeOnPressOutside(event);
        }
        function handleTouchStart(event) {
            if (getOutsidePressEvent() !== 'sloppy' || !store.select('open') || !enabled || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('floatingElement')) || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('domReferenceElement'))) {
                return;
            }
            const touch = event.touches[0];
            if (touch) {
                touchStateRef.current = {
                    startTime: Date.now(),
                    startX: touch.clientX,
                    startY: touch.clientY,
                    dismissOnTouchEnd: false,
                    dismissOnMouseDown: true
                };
                cancelDismissOnEndTimeout.start(1000, ()=>{
                    if (touchStateRef.current) {
                        touchStateRef.current.dismissOnTouchEnd = false;
                        touchStateRef.current.dismissOnMouseDown = false;
                    }
                });
            }
        }
        function addTargetEventListenerOnce(event, listener) {
            const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(event);
            if (!target) {
                return;
            }
            const unsubscribe = (0, __TURBOPACK__imported__module__39767__["addEventListener"])(target, event.type, ()=>{
                listener(event);
                unsubscribe();
            });
        }
        function handleTouchStartCapture(event) {
            currentPointerTypeRef.current = 'touch';
            addTargetEventListenerOnce(event, handleTouchStart);
        }
        function closeOnPressOutsideCapture(event) {
            cancelDismissOnEndTimeout.clear();
            if (event.type === 'pointerdown') {
                currentPointerTypeRef.current = event.pointerType;
            }
            if (event.type === 'mousedown' && touchStateRef.current && !touchStateRef.current.dismissOnMouseDown) {
                return;
            }
            addTargetEventListenerOnce(event, (targetEvent)=>{
                if (targetEvent.type === 'pointerdown') {
                    handlePointerDown(targetEvent);
                } else {
                    closeOnPressOutside(targetEvent);
                }
            });
        }
        function handlePressEndCapture(event) {
            if (!pressStartedInsideRef.current) {
                return;
            }
            const pressStartedInsideDefaultPrevented = pressStartPreventedRef.current;
            resetPressStartState();
            if (getOutsidePressEvent() !== 'intentional') {
                return;
            }
            if (event.type === 'pointercancel') {
                if (pressStartedInsideDefaultPrevented) {
                    suppressImmediateOutsideClickAfterPreventedStart();
                }
                return;
            }
            if (isEventWithinFloatingTree(event)) {
                return;
            }
            // If pointerdown was prevented, no click may be generated for that
            // interaction. However, Firefox may still emit an immediate click after
            // pointerup (e.g. NumberField scrub with pointer lock), so suppress for
            // one tick to absorb that synthetic click only.
            if (pressStartedInsideDefaultPrevented) {
                suppressImmediateOutsideClickAfterPreventedStart();
                return;
            }
            // Avoid suppressing when outsidePress explicitly ignores this target.
            if (typeof outsidePress === 'function' && !outsidePress(event)) {
                return;
            }
            preventedPressSuppressionTimeout.clear();
            suppressNextOutsideClickRef.current = true;
            clearInsideReactTree();
        }
        function handleTouchMove(event) {
            if (getOutsidePressEvent() !== 'sloppy' || !touchStateRef.current || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('floatingElement')) || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('domReferenceElement'))) {
                return;
            }
            const touch = event.touches[0];
            if (!touch) {
                return;
            }
            const deltaX = Math.abs(touch.clientX - touchStateRef.current.startX);
            const deltaY = Math.abs(touch.clientY - touchStateRef.current.startY);
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
            if (distance > 5) {
                touchStateRef.current.dismissOnTouchEnd = true;
            }
            if (distance > 10) {
                closeOnPressOutside(event);
                cancelDismissOnEndTimeout.clear();
                touchStateRef.current = null;
            }
        }
        function handleTouchMoveCapture(event) {
            addTargetEventListenerOnce(event, handleTouchMove);
        }
        function handleTouchEnd(event) {
            if (getOutsidePressEvent() !== 'sloppy' || !touchStateRef.current || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('floatingElement')) || (0, __TURBOPACK__imported__module__52881__["isEventTargetWithin"])(event, store.select('domReferenceElement'))) {
                return;
            }
            if (touchStateRef.current.dismissOnTouchEnd) {
                closeOnPressOutside(event);
            }
            cancelDismissOnEndTimeout.clear();
            touchStateRef.current = null;
        }
        function handleTouchEndCapture(event) {
            addTargetEventListenerOnce(event, handleTouchEnd);
        }
        const doc = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingElement);
        const unsubscribe = (0, __TURBOPACK__imported__module__90169__["mergeCleanups"])(escapeKey && (0, __TURBOPACK__imported__module__90169__["mergeCleanups"])((0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'keydown', closeOnEscapeKeyDown), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'compositionstart', handleCompositionStart), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'compositionend', handleCompositionEnd)), outsidePressEnabled && (0, __TURBOPACK__imported__module__90169__["mergeCleanups"])((0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'click', closeOnPressOutsideCapture, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'pointerdown', closeOnPressOutsideCapture, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'pointerup', handlePressEndCapture, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'pointercancel', handlePressEndCapture, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'mousedown', closeOnPressOutsideCapture, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'mouseup', handlePressEndCapture, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'touchstart', handleTouchStartCapture, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'touchmove', handleTouchMoveCapture, true), (0, __TURBOPACK__imported__module__39767__["addEventListener"])(doc, 'touchend', handleTouchEndCapture, true)));
        return ()=>{
            unsubscribe();
            compositionTimeout.clear();
            preventedPressSuppressionTimeout.clear();
            resetPressStartState();
            suppressNextOutsideClickRef.current = false;
        };
    }, [
        dataRef,
        floatingElement,
        escapeKey,
        outsidePressEnabled,
        outsidePress,
        open,
        enabled,
        escapeKeyBubbles,
        outsidePressBubbles,
        closeOnEscapeKeyDown,
        clearInsideReactTree,
        getOutsidePressEventProp,
        tree,
        store,
        cancelDismissOnEndTimeout
    ]);
    __TURBOPACK__imported__module__51268__["useEffect"](clearInsideReactTree, [
        outsidePress,
        clearInsideReactTree
    ]);
    const reference = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            onKeyDown: closeOnEscapeKeyDown,
            [bubbleHandlerKeys[referencePressEvent]]: (event)=>{
                if (!isReferencePressEnabled()) {
                    return;
                }
                store.setOpen(false, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].triggerPress, event.nativeEvent));
            },
            ...referencePressEvent !== 'intentional' && {
                onClick (event) {
                    if (!isReferencePressEnabled()) {
                        return;
                    }
                    store.setOpen(false, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].triggerPress, event.nativeEvent));
                }
            }
        }), [
        closeOnEscapeKeyDown,
        store,
        referencePressEvent,
        isReferencePressEnabled
    ]);
    const markPressStartedInsideReactTree = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((event)=>{
        if (!open || !enabled || event.button !== 0) {
            return;
        }
        const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(event.nativeEvent);
        // Only treat presses that start within the floating DOM subtree as inside.
        // This avoids suppressing parent dismissal when interacting with nested portals.
        if (!(0, __TURBOPACK__imported__module__95624__["contains"])(store.select('floatingElement'), target)) {
            return;
        }
        if (!pressStartedInsideRef.current) {
            pressStartedInsideRef.current = true;
            pressStartPreventedRef.current = false;
        }
    });
    const markInsidePressStartPrevented = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((event)=>{
        if (!open || !enabled) {
            return;
        }
        if (!(event.defaultPrevented || event.nativeEvent.defaultPrevented)) {
            return;
        }
        if (pressStartedInsideRef.current) {
            pressStartPreventedRef.current = true;
        }
    });
    const floating = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            onKeyDown: closeOnEscapeKeyDown,
            // `onMouseDown` may be blocked if `event.preventDefault()` is called in
            // `onPointerDown`, such as with <NumberField.ScrubArea>.
            // See https://github.com/mui/base-ui/pull/3379
            onPointerDown: markInsidePressStartPrevented,
            onMouseDown: markInsidePressStartPrevented,
            onClickCapture: markInsideReactTree,
            onMouseDownCapture (event) {
                markInsideReactTree();
                markPressStartedInsideReactTree(event);
            },
            onPointerDownCapture (event) {
                markInsideReactTree();
                markPressStartedInsideReactTree(event);
            },
            onMouseUpCapture: markInsideReactTree,
            onTouchEndCapture: markInsideReactTree,
            onTouchMoveCapture: markInsideReactTree
        }), [
        closeOnEscapeKeyDown,
        markInsideReactTree,
        markPressStartedInsideReactTree,
        markInsidePressStartPrevented
    ]);
    return __TURBOPACK__imported__module__51268__["useMemo"](()=>enabled ? {
            reference,
            floating,
            trigger: reference
        } : {}, [
        enabled,
        reference,
        floating
    ]);
}
__turbopack_context__.s([
    "useDismiss",
    0,
    useDismiss
]);
}),
10233, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__83306__ = __turbopack_context__.i(83306);
;
;
function useInteractions(propsList = []) {
    const referenceDeps = propsList.map((key)=>key?.reference);
    const floatingDeps = propsList.map((key)=>key?.floating);
    const itemDeps = propsList.map((key)=>key?.item);
    const triggerDeps = propsList.map((key)=>key?.trigger);
    const getReferenceProps = __TURBOPACK__imported__module__51268__["useCallback"]((userProps)=>mergeProps(userProps, propsList, 'reference'), // eslint-disable-next-line react-hooks/exhaustive-deps
    referenceDeps);
    const getFloatingProps = __TURBOPACK__imported__module__51268__["useCallback"]((userProps)=>mergeProps(userProps, propsList, 'floating'), // eslint-disable-next-line react-hooks/exhaustive-deps
    floatingDeps);
    const getItemProps = __TURBOPACK__imported__module__51268__["useCallback"]((userProps)=>mergeProps(userProps, propsList, 'item'), // eslint-disable-next-line react-hooks/exhaustive-deps
    itemDeps);
    const getTriggerProps = __TURBOPACK__imported__module__51268__["useCallback"]((userProps)=>mergeProps(userProps, propsList, 'trigger'), // eslint-disable-next-line react-hooks/exhaustive-deps
    triggerDeps);
    return __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            getReferenceProps,
            getFloatingProps,
            getItemProps,
            getTriggerProps
        }), [
        getReferenceProps,
        getFloatingProps,
        getItemProps,
        getTriggerProps
    ]);
}
/* eslint-disable guard-for-in */ function mergeProps(userProps, propsList, elementKey) {
    const eventHandlers = new Map();
    const isItem = elementKey === 'item';
    const outputProps = {};
    if (elementKey === 'floating') {
        outputProps.tabIndex = -1;
        outputProps[__TURBOPACK__imported__module__83306__["FOCUSABLE_ATTRIBUTE"]] = '';
    }
    for(const key in userProps){
        if (isItem && userProps) {
            if (key === __TURBOPACK__imported__module__83306__["ACTIVE_KEY"] || key === __TURBOPACK__imported__module__83306__["SELECTED_KEY"]) {
                continue;
            }
        }
        outputProps[key] = userProps[key];
    }
    for(let i = 0; i < propsList.length; i += 1){
        let props;
        const propsOrGetProps = propsList[i]?.[elementKey];
        if (typeof propsOrGetProps === 'function') {
            props = userProps ? propsOrGetProps(userProps) : null;
        } else {
            props = propsOrGetProps;
        }
        if (!props) {
            continue;
        }
        mutablyMergeProps(outputProps, props, isItem, eventHandlers);
    }
    mutablyMergeProps(outputProps, userProps, isItem, eventHandlers);
    return outputProps;
}
function mutablyMergeProps(outputProps, props, isItem, eventHandlers) {
    for(const key in props){
        const value = props[key];
        if (isItem && (key === __TURBOPACK__imported__module__83306__["ACTIVE_KEY"] || key === __TURBOPACK__imported__module__83306__["SELECTED_KEY"])) {
            continue;
        }
        if (!key.startsWith('on')) {
            outputProps[key] = value;
        } else {
            if (!eventHandlers.has(key)) {
                eventHandlers.set(key, []);
            }
            if (typeof value === 'function') {
                eventHandlers.get(key)?.push(value);
                outputProps[key] = (...args)=>{
                    return eventHandlers.get(key)?.map((fn)=>fn(...args)).find((val)=>val !== undefined);
                };
            }
        }
    }
}
__turbopack_context__.s([
    "useInteractions",
    0,
    useInteractions
]);
}),
18505, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__16174__ = __turbopack_context__.i(16174);
;
const createSelector = (a, b, c, d, e, f, ...other)=>{
    if (other.length > 0) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__["default"])(1));
    }
    let selector;
    if (a && b && c && d && e && f) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            const vd = d(state, a1, a2, a3);
            const ve = e(state, a1, a2, a3);
            return f(va, vb, vc, vd, ve, a1, a2, a3);
        };
    } else if (a && b && c && d && e) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            const vd = d(state, a1, a2, a3);
            return e(va, vb, vc, vd, a1, a2, a3);
        };
    } else if (a && b && c && d) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            const vc = c(state, a1, a2, a3);
            return d(va, vb, vc, a1, a2, a3);
        };
    } else if (a && b && c) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            const vb = b(state, a1, a2, a3);
            return c(va, vb, a1, a2, a3);
        };
    } else if (a && b) {
        selector = (state, a1, a2, a3)=>{
            const va = a(state, a1, a2, a3);
            return b(va, a1, a2, a3);
        };
    } else if (a) {
        selector = a;
    } else {
        throw /* minify-error-disabled */ new Error('Missing arguments');
    }
    return selector;
}; /* eslint-enable id-denylist */ 
__turbopack_context__.s([
    "createSelector",
    0,
    createSelector
]);
}),
25661, ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var React = __turbopack_context__.r(51268);
function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
}
var objectIs = "function" === typeof Object.is ? Object.is : is, useState = React.useState, useEffect = React.useEffect, useLayoutEffect = React.useLayoutEffect, useDebugValue = React.useDebugValue;
function useSyncExternalStore$2(subscribe, getSnapshot) {
    var value = getSnapshot(), _useState = useState({
        inst: {
            value: value,
            getSnapshot: getSnapshot
        }
    }), inst = _useState[0].inst, forceUpdate = _useState[1];
    useLayoutEffect(function() {
        inst.value = value;
        inst.getSnapshot = getSnapshot;
        checkIfSnapshotChanged(inst) && forceUpdate({
            inst: inst
        });
    }, [
        subscribe,
        value,
        getSnapshot
    ]);
    useEffect(function() {
        checkIfSnapshotChanged(inst) && forceUpdate({
            inst: inst
        });
        return subscribe(function() {
            checkIfSnapshotChanged(inst) && forceUpdate({
                inst: inst
            });
        });
    }, [
        subscribe
    ]);
    useDebugValue(value);
    return value;
}
function checkIfSnapshotChanged(inst) {
    var latestGetSnapshot = inst.getSnapshot;
    inst = inst.value;
    try {
        var nextValue = latestGetSnapshot();
        return !objectIs(inst, nextValue);
    } catch (error) {
        return !0;
    }
}
function useSyncExternalStore$1(subscribe, getSnapshot) {
    return getSnapshot();
}
var shim = "undefined" === typeof window || "undefined" === typeof window.document || "undefined" === typeof window.document.createElement ? useSyncExternalStore$1 : useSyncExternalStore$2;
exports.useSyncExternalStore = void 0 !== React.useSyncExternalStore ? React.useSyncExternalStore : shim;
}),
56032, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = __turbopack_context__.r(25661);
} else //TURBOPACK unreachable
;
}),
20206, ((__turbopack_context__, module, exports) => {
"use strict";

/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var React = __turbopack_context__.r(51268), shim = __turbopack_context__.r(56032);
function is(x, y) {
    return x === y && (0 !== x || 1 / x === 1 / y) || x !== x && y !== y;
}
var objectIs = "function" === typeof Object.is ? Object.is : is, useSyncExternalStore = shim.useSyncExternalStore, useRef = React.useRef, useEffect = React.useEffect, useMemo = React.useMemo, useDebugValue = React.useDebugValue;
exports.useSyncExternalStoreWithSelector = function(subscribe, getSnapshot, getServerSnapshot, selector, isEqual) {
    var instRef = useRef(null);
    if (null === instRef.current) {
        var inst = {
            hasValue: !1,
            value: null
        };
        instRef.current = inst;
    } else inst = instRef.current;
    instRef = useMemo(function() {
        function memoizedSelector(nextSnapshot) {
            if (!hasMemo) {
                hasMemo = !0;
                memoizedSnapshot = nextSnapshot;
                nextSnapshot = selector(nextSnapshot);
                if (void 0 !== isEqual && inst.hasValue) {
                    var currentSelection = inst.value;
                    if (isEqual(currentSelection, nextSnapshot)) return memoizedSelection = currentSelection;
                }
                return memoizedSelection = nextSnapshot;
            }
            currentSelection = memoizedSelection;
            if (objectIs(memoizedSnapshot, nextSnapshot)) return currentSelection;
            var nextSelection = selector(nextSnapshot);
            if (void 0 !== isEqual && isEqual(currentSelection, nextSelection)) return memoizedSnapshot = nextSnapshot, currentSelection;
            memoizedSnapshot = nextSnapshot;
            return memoizedSelection = nextSelection;
        }
        var hasMemo = !1, memoizedSnapshot, memoizedSelection, maybeGetServerSnapshot = void 0 === getServerSnapshot ? null : getServerSnapshot;
        return [
            function() {
                return memoizedSelector(getSnapshot());
            },
            null === maybeGetServerSnapshot ? void 0 : function() {
                return memoizedSelector(maybeGetServerSnapshot());
            }
        ];
    }, [
        getSnapshot,
        getServerSnapshot,
        selector,
        isEqual
    ]);
    var value = useSyncExternalStore(subscribe, instRef[0], instRef[1]);
    useEffect(function() {
        inst.hasValue = !0;
        inst.value = value;
    }, [
        value
    ]);
    useDebugValue(value);
    return value;
};
}),
96482, ((__turbopack_context__, module, exports) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
'use strict';
if ("TURBOPACK compile-time truthy", 1) {
    module.exports = __turbopack_context__.r(20206);
} else //TURBOPACK unreachable
;
}),
49453, 28206, 
66692, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/store/Store.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/store/useStore.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
/* We need to import the shim because React 17 does not support the `useSyncExternalStore` API.
 * More info: https://github.com/mui/mui-x/issues/18303#issuecomment-2958392341 */ var __TURBOPACK__imported__module__56032__ = __turbopack_context__.i(56032);
var __TURBOPACK__imported__module__96482__ = __turbopack_context__.i(96482);
var __TURBOPACK__imported__module__91226__ = __turbopack_context__.i(91226);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/fastHooks.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
;
;
const hooks = [];
let currentInstance = undefined;
function getInstance() {
    return currentInstance;
}
function setInstance(instance) {
    currentInstance = instance;
}
function register(hook) {
    hooks.push(hook);
}
function fastComponent(fn) {
    const FastComponent = (props, forwardedRef)=>{
        const instance = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(createInstance).current;
        let result;
        try {
            currentInstance = instance;
            for (const hook of hooks){
                hook.before(instance);
            }
            result = fn(props, forwardedRef);
            for (const hook of hooks){
                hook.after(instance);
            }
            instance.didInitialize = true;
        } finally{
            currentInstance = undefined;
        }
        return result;
    };
    FastComponent.displayName = fn.displayName || fn.name;
    return FastComponent;
}
function fastComponentRef(fn) {
    return /*#__PURE__*/ __TURBOPACK__imported__module__51268__1["forwardRef"](fastComponent(fn));
}
function createInstance() {
    return {
        didInitialize: false
    };
}
__turbopack_context__.s([
    "fastComponent",
    0,
    fastComponent,
    "fastComponentRef",
    0,
    fastComponentRef,
    "getInstance",
    0,
    getInstance,
    "register",
    0,
    register
], 28206);
;
;
;
;
;
/* Some tests fail in R18 with the raw useSyncExternalStore. It may be possible to make it work
 * but for now we only enable it for R19+. */ const canUseRawUseSyncExternalStore = (0, __TURBOPACK__imported__module__91226__["isReactVersionAtLeast"])(19);
const useStoreImplementation = canUseRawUseSyncExternalStore ? useStoreFast : useStoreLegacy;
function useStore(store, selector, a1, a2, a3) {
    return useStoreImplementation(store, selector, a1, a2, a3);
}
function useStoreR19(store, selector, a1, a2, a3) {
    const getSelection = __TURBOPACK__imported__module__51268__["useCallback"](()=>selector(store.getSnapshot(), a1, a2, a3), [
        store,
        selector,
        a1,
        a2,
        a3
    ]);
    return (0, __TURBOPACK__imported__module__56032__["useSyncExternalStore"])(store.subscribe, getSelection, getSelection);
}
register({
    before (instance) {
        instance.syncIndex = 0;
        if (!instance.didInitialize) {
            instance.syncTick = 1;
            instance.syncHooks = [];
            instance.didChangeStore = true;
            instance.getSnapshot = ()=>{
                let didChange = false;
                for(let i = 0; i < instance.syncHooks.length; i += 1){
                    const hook = instance.syncHooks[i];
                    const value = hook.selector(hook.store.state, hook.a1, hook.a2, hook.a3);
                    if (hook.didChange || !Object.is(hook.value, value)) {
                        didChange = true;
                        hook.value = value;
                        hook.didChange = false;
                    }
                }
                if (didChange) {
                    instance.syncTick += 1;
                }
                return instance.syncTick;
            };
        }
    },
    after (instance) {
        if (instance.syncHooks.length > 0) {
            if (instance.didChangeStore) {
                instance.didChangeStore = false;
                instance.subscribe = (onStoreChange)=>{
                    const stores = new Set();
                    for (const hook of instance.syncHooks){
                        stores.add(hook.store);
                    }
                    const unsubscribes = [];
                    for (const store of stores){
                        unsubscribes.push(store.subscribe(onStoreChange));
                    }
                    return ()=>{
                        for (const unsubscribe of unsubscribes){
                            unsubscribe();
                        }
                    };
                };
            }
            // eslint-disable-next-line react-hooks/rules-of-hooks
            (0, __TURBOPACK__imported__module__56032__["useSyncExternalStore"])(instance.subscribe, instance.getSnapshot, instance.getSnapshot);
        }
    }
});
function useStoreFast(store, selector, a1, a2, a3) {
    const instance = getInstance();
    if (!instance) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useStoreR19(store, selector, a1, a2, a3);
    }
    const index = instance.syncIndex;
    instance.syncIndex += 1;
    let hook;
    if (!instance.didInitialize) {
        hook = {
            store,
            selector,
            a1,
            a2,
            a3,
            value: selector(store.getSnapshot(), a1, a2, a3),
            didChange: false
        };
        instance.syncHooks.push(hook);
    } else {
        hook = instance.syncHooks[index];
        if (hook.store !== store || hook.selector !== selector || !Object.is(hook.a1, a1) || !Object.is(hook.a2, a2) || !Object.is(hook.a3, a3)) {
            if (hook.store !== store) {
                instance.didChangeStore = true;
            }
            hook.store = store;
            hook.selector = selector;
            hook.a1 = a1;
            hook.a2 = a2;
            hook.a3 = a3;
            hook.didChange = true;
        }
    }
    return hook.value;
}
function useStoreLegacy(store, selector, a1, a2, a3) {
    return (0, __TURBOPACK__imported__module__96482__["useSyncExternalStoreWithSelector"])(store.subscribe, store.getSnapshot, store.getSnapshot, (state)=>selector(state, a1, a2, a3));
}
__turbopack_context__.s([
    "useStore",
    0,
    useStore
], 66692);
;
class Store {
    /**
   * The current state of the store.
   * This property is updated immediately when the state changes as a result of calling {@link setState}, {@link update}, or {@link set}.
   * To subscribe to state changes, use the {@link useState} method. The value returned by {@link useState} is updated after the component renders (similarly to React's useState).
   * The values can be used directly (to avoid subscribing to the store) in effects or event handlers.
   *
   * Do not modify properties in state directly. Instead, use the provided methods to ensure proper state management and listener notification.
   */ // Internal state to handle recursive `setState()` calls
    constructor(state){
        this.state = state;
        this.listeners = new Set();
        this.updateTick = 0;
    }
    /**
   * Registers a listener that will be called whenever the store's state changes.
   *
   * @param fn The listener function to be called on state changes.
   * @returns A function to unsubscribe the listener.
   */ subscribe = (fn)=>{
        this.listeners.add(fn);
        return ()=>{
            this.listeners.delete(fn);
        };
    };
    /**
   * Returns the current state of the store.
   */ getSnapshot = ()=>{
        return this.state;
    };
    /**
   * Updates the entire store's state and notifies all registered listeners.
   *
   * @param newState The new state to set for the store.
   */ setState(newState) {
        if (this.state === newState) {
            return;
        }
        this.state = newState;
        this.updateTick += 1;
        const currentTick = this.updateTick;
        for (const listener of this.listeners){
            if (currentTick !== this.updateTick) {
                // If the tick has changed, a recursive `setState` call has been made,
                // and it has already notified all listeners.
                return;
            }
            listener(newState);
        }
    }
    /**
   * Merges the provided changes into the current state and notifies listeners if there are changes.
   *
   * @param changes An object containing the changes to apply to the current state.
   */ update(changes) {
        for(const key in changes){
            if (!Object.is(this.state[key], changes[key])) {
                this.setState({
                    ...this.state,
                    ...changes
                });
                return;
            }
        }
    }
    /**
   * Sets a specific key in the store's state to a new value and notifies listeners if the value has changed.
   *
   * @param key The key in the store's state to update.
   * @param value The new value to set for the specified key.
   */ set(key, value) {
        if (!Object.is(this.state[key], value)) {
            this.setState({
                ...this.state,
                [key]: value
            });
        }
    }
    /**
   * Gives the state a new reference and updates all registered listeners.
   */ notifyAll() {
        const newState = {
            ...this.state
        };
        this.setState(newState);
    }
    use(selector, a1, a2, a3) {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        return useStore(this, selector, a1, a2, a3);
    }
}
__turbopack_context__.s([
    "Store",
    0,
    Store
], 49453);
}),
66380, 18311, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/components/FloatingRootStore.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__18505__ = __turbopack_context__.i(18505);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/store/ReactStore.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__49453__ = __turbopack_context__.i(49453);
var __TURBOPACK__imported__module__66692__ = __turbopack_context__.i(66692);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
/* False positives - ESLint thinks we're calling a hook from a class component. */ /* eslint-disable react-hooks/rules-of-hooks */ 'use client';
;
;
;
;
;
;
class ReactStore extends __TURBOPACK__imported__module__49453__["Store"] {
    /**
   * Creates a new ReactStore instance.
   *
   * @param state Initial state of the store.
   * @param context Non-reactive context values.
   * @param selectors Optional selectors for use with `useState`.
   */ constructor(state, context = {}, selectors){
        super(state);
        this.context = context;
        this.selectors = selectors;
    }
    /**
   * Non-reactive values such as refs, callbacks, etc.
   */ /**
   * Synchronizes a single external value into the store.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */ useSyncedValue(key, value) {
        __TURBOPACK__imported__module__51268__["useDebugValue"](key);
        (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
            if (this.state[key] !== value) {
                this.set(key, value);
            }
        }, [
            key,
            value
        ]);
    }
    /**
   * Synchronizes a single external value into the store and
   * cleans it up (sets to `undefined`) on unmount.
   *
   * Note that the while the value in `state` is updated immediately, the value returned
   * by `useState` is updated before the next render (similarly to React's `useState`).
   */ useSyncedValueWithCleanup(key, value) {
        // eslint-disable-next-line consistent-this
        const store = this;
        (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
            if (store.state[key] !== value) {
                store.set(key, value);
            }
            return ()=>{
                store.set(key, undefined);
            };
        }, [
            store,
            key,
            value
        ]);
    }
    /**
   * Synchronizes multiple external values into the store.
   *
   * Note that the while the values in `state` are updated immediately, the values returned
   * by `useState` are updated before the next render (similarly to React's `useState`).
   */ useSyncedValues(statePart) {
        // eslint-disable-next-line consistent-this
        const store = this;
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        const dependencies = Object.values(statePart);
        (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
            store.update(statePart);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [
            store,
            ...dependencies
        ]);
    }
    /**
   * Registers a controllable prop pair (`controlled`, `defaultValue`) for a specific key. If `controlled`
   * is non-undefined, the store's state at `key` is updated to match `controlled`.
   */ useControlledProp(key, controlled) {
        __TURBOPACK__imported__module__51268__["useDebugValue"](key);
        const isControlled = controlled !== undefined;
        (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
            if (isControlled && !Object.is(this.state[key], controlled)) {
                // Set the internal state to match the controlled value.
                super.setState({
                    ...this.state,
                    [key]: controlled
                });
            }
        }, [
            key,
            controlled,
            isControlled
        ]);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    /** Gets the current value from the store using a selector with the provided key.
   *
   * @param key Key of the selector to use.
   */ select(key, a1, a2, a3) {
        const selector = this.selectors[key];
        return selector(this.state, a1, a2, a3);
    }
    /**
   * Returns a value from the store's state using a selector function.
   * Used to subscribe to specific parts of the state.
   * This methods causes a rerender whenever the selected state changes.
   *
   * @param key Key of the selector to use.
   */ useState(key, a1, a2, a3) {
        __TURBOPACK__imported__module__51268__["useDebugValue"](key);
        return (0, __TURBOPACK__imported__module__66692__["useStore"])(this, this.selectors[key], a1, a2, a3);
    }
    /**
   * Wraps a function with `useStableCallback` to ensure it has a stable reference
   * and assigns it to the context.
   *
   * @param key Key of the event callback. Must be a function in the context.
   * @param fn Function to assign.
   */ useContextCallback(key, fn) {
        __TURBOPACK__imported__module__51268__["useDebugValue"](key);
        const stableFunction = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(fn ?? __TURBOPACK__imported__module__24659__["NOOP"]);
        this.context[key] = stableFunction;
    }
    /**
   * Returns a stable setter function for a specific key in the store's state.
   * It's commonly used to pass as a ref callback to React elements.
   *
   * @param key Key of the state to set.
   */ useStateSetter(key) {
        const ref = __TURBOPACK__imported__module__51268__["useRef"](undefined);
        if (ref.current === undefined) {
            ref.current = (value)=>{
                this.set(key, value);
            };
        }
        return ref.current;
    }
    /**
   * Observes changes derived from the store's selectors and calls the listener when the selected value changes.
   *
   * @param key Key of the selector to observe.
   * @param listener Listener function called when the selector result changes.
   */ observe(selector, listener) {
        let selectFn;
        if (typeof selector === 'function') {
            selectFn = selector;
        } else {
            selectFn = this.selectors[selector];
        }
        let prevValue = selectFn(this.state);
        listener(prevValue, prevValue, this);
        return this.subscribe((nextState)=>{
            const nextValue = selectFn(nextState);
            if (!Object.is(prevValue, nextValue)) {
                const oldValue = prevValue;
                prevValue = nextValue;
                listener(nextValue, oldValue, this);
            }
        });
    }
}
__turbopack_context__.s([
    "ReactStore",
    0,
    ReactStore
], 18311);
var __TURBOPACK__imported__module__40885__ = __turbopack_context__.i(40885);
var __TURBOPACK__imported__module__56870__ = __turbopack_context__.i(56870);
;
;
;
const selectors = {
    open: (0, __TURBOPACK__imported__module__18505__["createSelector"])((state)=>state.open),
    transitionStatus: (0, __TURBOPACK__imported__module__18505__["createSelector"])((state)=>state.transitionStatus),
    domReferenceElement: (0, __TURBOPACK__imported__module__18505__["createSelector"])((state)=>state.domReferenceElement),
    referenceElement: (0, __TURBOPACK__imported__module__18505__["createSelector"])((state)=>state.positionReference ?? state.referenceElement),
    floatingElement: (0, __TURBOPACK__imported__module__18505__["createSelector"])((state)=>state.floatingElement),
    floatingId: (0, __TURBOPACK__imported__module__18505__["createSelector"])((state)=>state.floatingId)
};
class FloatingRootStore extends ReactStore {
    constructor(options){
        const { syncOnly, nested, onOpenChange, triggerElements, ...initialState } = options;
        super({
            ...initialState,
            positionReference: initialState.referenceElement,
            domReferenceElement: initialState.referenceElement
        }, {
            onOpenChange,
            dataRef: {
                current: {}
            },
            events: (0, __TURBOPACK__imported__module__40885__["createEventEmitter"])(),
            nested,
            triggerElements
        }, selectors);
        this.syncOnly = syncOnly;
    }
    /**
   * Syncs the event used by hover logic to distinguish hover-open from click-like interaction.
   */ syncOpenEvent = (newOpen, event)=>{
        if (!newOpen || !this.state.open || // Prevent a pending hover-open from overwriting a click-open event, while allowing
        // click events to upgrade a hover-open.
        event != null && (0, __TURBOPACK__imported__module__56870__["isClickLikeEvent"])(event)) {
            this.context.dataRef.current.openEvent = newOpen ? event : undefined;
        }
    };
    /**
   * Runs the root-owned side effects for an open state change.
   */ dispatchOpenChange = (newOpen, eventDetails)=>{
        this.syncOpenEvent(newOpen, eventDetails.event);
        const details = {
            open: newOpen,
            reason: eventDetails.reason,
            nativeEvent: eventDetails.event,
            nested: this.context.nested,
            triggerElement: eventDetails.trigger
        };
        this.context.events.emit('openchange', details);
    };
    /**
   * Emits the `openchange` event through the internal event emitter and calls the `onOpenChange` handler with the provided arguments.
   *
   * @param newOpen The new open state.
   * @param eventDetails Details about the event that triggered the open state change.
   */ setOpen = (newOpen, eventDetails)=>{
        if (this.syncOnly) {
            this.context.onOpenChange?.(newOpen, eventDetails);
            return;
        }
        this.dispatchOpenChange(newOpen, eventDetails);
        this.context.onOpenChange?.(newOpen, eventDetails);
    };
}
__turbopack_context__.s([
    "FloatingRootStore",
    0,
    FloatingRootStore
], 66380);
}),
12272, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useOpenInteractionType.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/useEnhancedClickHandler.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
'use client';
;
function useEnhancedClickHandler(handler) {
    const lastClickInteractionTypeRef = __TURBOPACK__imported__module__51268__1["useRef"]('');
    const handlePointerDown = __TURBOPACK__imported__module__51268__1["useCallback"]((event)=>{
        if (event.defaultPrevented) {
            return;
        }
        lastClickInteractionTypeRef.current = event.pointerType;
        handler(event, event.pointerType);
    }, [
        handler
    ]);
    const handleClick = __TURBOPACK__imported__module__51268__1["useCallback"]((event)=>{
        // event.detail has the number of clicks performed on the element. 0 means it was triggered by the keyboard.
        if (event.detail === 0) {
            handler(event, 'keyboard');
            return;
        }
        if ('pointerType' in event) {
            // Chrome and Edge correctly use PointerEvent
            handler(event, event.pointerType);
        } else {
            handler(event, lastClickInteractionTypeRef.current);
        }
        lastClickInteractionTypeRef.current = '';
    }, [
        handler
    ]);
    return {
        onClick: handleClick,
        onPointerDown: handlePointerDown
    };
}
var __TURBOPACK__imported__module__14028__ = __turbopack_context__.i(14028);
var __TURBOPACK__imported__module__73650__ = __turbopack_context__.i(73650);
'use client';
;
;
;
;
;
function useOpenInteractionType(open) {
    const [openMethod, setOpenMethod] = __TURBOPACK__imported__module__51268__["useState"](null);
    const handleTriggerClick = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((_, interactionType)=>{
        if (!open) {
            setOpenMethod(interactionType || (// On iOS Safari, the hitslop around touch targets means tapping outside an element's
            // bounds does not fire `pointerdown` but does fire `mousedown`. The `interactionType`
            // will be "" in that case.
            __TURBOPACK__imported__module__14028__["isIOS"] ? 'touch' : ''));
        }
    });
    (0, __TURBOPACK__imported__module__73650__["useValueChanged"])(open, (previousOpen)=>{
        if (previousOpen && !open) {
            setOpenMethod(null);
        }
    });
    const { onClick, onPointerDown } = useEnhancedClickHandler(handleTriggerClick);
    return __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            openMethod,
            triggerProps: {
                onClick,
                onPointerDown
            }
        }), [
        openMethod,
        onClick,
        onPointerDown
    ]);
}
__turbopack_context__.s([
    "useOpenInteractionType",
    0,
    useOpenInteractionType
], 12272);
}),
37943, ((__turbopack_context__) => {
"use strict";

/**
 * Data structure to keep track of popup trigger elements by their IDs.
 * Uses both a set of Elements and a map of IDs to Elements for efficient lookups.
 */ var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
class PopupTriggerMap {
    constructor(){
        this.elementsSet = new Set();
        this.idMap = new Map();
    }
    /**
   * Adds a trigger element with the given ID.
   *
   * Note: The provided element is assumed to not be registered under multiple IDs.
   */ add(id, element) {
        const existingElement = this.idMap.get(id);
        if (existingElement === element) {
            return;
        }
        if (existingElement !== undefined) {
            // We assume that the same element won't be registered under multiple ids.
            // This is safe considering how useTriggerRegistration is implemented.
            this.elementsSet.delete(existingElement);
        }
        this.elementsSet.add(element);
        this.idMap.set(id, element);
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
    }
    /**
   * Removes the trigger element with the given ID.
   */ delete(id) {
        const element = this.idMap.get(id);
        if (element) {
            this.elementsSet.delete(element);
            this.idMap.delete(id);
        }
    }
    /**
   * Whether the given element is registered as a trigger.
   */ hasElement(element) {
        return this.elementsSet.has(element);
    }
    /**
   * Whether there is a registered trigger element matching the given predicate.
   */ hasMatchingElement(predicate) {
        for (const element of this.elementsSet){
            if (predicate(element)) {
                return true;
            }
        }
        return false;
    }
    /**
   * Returns the trigger element associated with the given ID, or undefined if no such element exists.
   */ getById(id) {
        return this.idMap.get(id);
    }
    /**
   * Returns an iterable of all registered trigger entries, where each entry is a tuple of [id, element].
   */ entries() {
        return this.idMap.entries();
    }
    /**
   * Returns an iterable of all registered trigger elements.
   */ elements() {
        return this.elementsSet.values();
    }
    /**
   * Returns the number of registered trigger elements.
   */ get size() {
        return this.idMap.size;
    }
}
__turbopack_context__.s([
    "PopupTriggerMap",
    0,
    PopupTriggerMap
]);
}),
23760, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__31078__ = __turbopack_context__.i(31078);
var __TURBOPACK__imported__module__5328__ = __turbopack_context__.i(5328);
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
var __TURBOPACK__imported__module__52881__ = __turbopack_context__.i(52881);
var __TURBOPACK__imported__module__56870__ = __turbopack_context__.i(56870);
var __TURBOPACK__imported__module__34409__ = __turbopack_context__.i(34409);
var __TURBOPACK__imported__module__93719__ = __turbopack_context__.i(93719);
'use client';
;
;
;
;
;
;
;
;
function useClick(context, props = {}) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const dataRef = store.context.dataRef;
    const { enabled = true, event: eventOption = 'click', toggle = true, ignoreMouse = false, stickIfOpen = true, touchOpenDelay = 0, reason = __TURBOPACK__imported__module__93719__["REASONS"].triggerPress } = props;
    const pointerTypeRef = __TURBOPACK__imported__module__51268__["useRef"](undefined);
    const frame = (0, __TURBOPACK__imported__module__31078__["useAnimationFrame"])();
    const touchOpenTimeout = (0, __TURBOPACK__imported__module__5328__["useTimeout"])();
    const reference = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            onPointerDown (event) {
                pointerTypeRef.current = event.pointerType;
            },
            onMouseDown (event) {
                const pointerType = pointerTypeRef.current;
                const nativeEvent = event.nativeEvent;
                const open = store.select('open');
                // Ignore all buttons except for the "main" button.
                // https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/button
                if (event.button !== 0 || eventOption === 'click' || (0, __TURBOPACK__imported__module__56870__["isMouseLikePointerType"])(pointerType, true) && ignoreMouse) {
                    return;
                }
                const openEvent = dataRef.current.openEvent;
                const openEventType = openEvent?.type;
                const hasClickedOnInactiveTrigger = store.select('domReferenceElement') !== event.currentTarget;
                const nextOpen = open && hasClickedOnInactiveTrigger || !(open && toggle && (openEvent && stickIfOpen ? openEventType === 'click' || openEventType === 'mousedown' : true));
                // Animations sometimes won't run on a typeable element if using a rAF.
                // Focus is always set on these elements. For touch, we may delay opening.
                const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(nativeEvent);
                if ((0, __TURBOPACK__imported__module__52881__["isTypeableElement"])(target)) {
                    const details = (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(reason, nativeEvent, target);
                    if (nextOpen && pointerType === 'touch' && touchOpenDelay > 0) {
                        touchOpenTimeout.start(touchOpenDelay, ()=>{
                            store.setOpen(true, details);
                        });
                    } else {
                        store.setOpen(nextOpen, details);
                    }
                    return;
                }
                // Capture the currentTarget before the rAF.
                // as React sets it to null after the event handler completes.
                const eventCurrentTarget = event.currentTarget;
                // Wait until focus is set on the element. This is an alternative to
                // `event.preventDefault()` to avoid :focus-visible from appearing when using a pointer.
                frame.request(()=>{
                    const details = (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(reason, nativeEvent, eventCurrentTarget);
                    if (nextOpen && pointerType === 'touch' && touchOpenDelay > 0) {
                        touchOpenTimeout.start(touchOpenDelay, ()=>{
                            store.setOpen(true, details);
                        });
                    } else {
                        store.setOpen(nextOpen, details);
                    }
                });
            },
            onClick (event) {
                if (eventOption === 'mousedown-only') {
                    return;
                }
                const pointerType = pointerTypeRef.current;
                if (eventOption === 'mousedown' && pointerType) {
                    pointerTypeRef.current = undefined;
                    return;
                }
                if ((0, __TURBOPACK__imported__module__56870__["isMouseLikePointerType"])(pointerType, true) && ignoreMouse) {
                    return;
                }
                const open = store.select('open');
                const openEvent = dataRef.current.openEvent;
                const hasClickedOnInactiveTrigger = store.select('domReferenceElement') !== event.currentTarget;
                const nextOpen = open && hasClickedOnInactiveTrigger || !(open && toggle && (openEvent && stickIfOpen ? (0, __TURBOPACK__imported__module__56870__["isClickLikeEvent"])(openEvent) : true));
                const details = (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(reason, event.nativeEvent, event.currentTarget);
                if (nextOpen && pointerType === 'touch' && touchOpenDelay > 0) {
                    touchOpenTimeout.start(touchOpenDelay, ()=>{
                        store.setOpen(true, details);
                    });
                } else {
                    store.setOpen(nextOpen, details);
                }
            },
            onKeyDown () {
                pointerTypeRef.current = undefined;
            }
        }), [
        dataRef,
        eventOption,
        ignoreMouse,
        store,
        stickIfOpen,
        toggle,
        frame,
        touchOpenTimeout,
        touchOpenDelay,
        reason
    ]);
    return __TURBOPACK__imported__module__51268__["useMemo"](()=>enabled ? {
            reference
        } : __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"], [
        enabled,
        reference
    ]);
}
__turbopack_context__.s([
    "useClick",
    0,
    useClick
]);
}),
50364, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__98144__ = __turbopack_context__.i(98144);
__turbopack_context__.s([
    "CheckIcon",
    ()=>__TURBOPACK__imported__module__98144__["default"]
]);
}),
34197, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__16174__ = __turbopack_context__.i(16174);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
'use client';
;
;
const ToolbarRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useToolbarRootContext(optional) {
    const context = __TURBOPACK__imported__module__51268__["useContext"](ToolbarRootContext);
    if (context === undefined && !optional) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__["default"])(69));
    }
    return context;
}
__turbopack_context__.s([
    "useToolbarRootContext",
    0,
    useToolbarRootContext
]);
}),
85211, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
var __TURBOPACK__imported__module__60217__ = __turbopack_context__.i(60217);
;
;
function getDisabledMountTransitionStyles(transitionStatus) {
    return transitionStatus === 'starting' ? __TURBOPACK__imported__module__60217__["DISABLED_TRANSITIONS_STYLE"] : __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"];
}
__turbopack_context__.s([
    "getDisabledMountTransitionStyles",
    0,
    getDisabledMountTransitionStyles
]);
}),
78928, 34459, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+dom@1.7.6/node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs [app-client] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__41645__ = __turbopack_context__.i(41645);
// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+core@1.7.5/node_modules/@floating-ui/core/dist/floating-ui.core.mjs [app-client] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__41645__1 = __TURBOPACK__imported__module__41645__;
;
;
function computeCoordsFromPlacement(_ref, placement, rtl) {
    let { reference, floating } = _ref;
    const sideAxis = (0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(placement);
    const alignmentAxis = (0, __TURBOPACK__imported__module__41645__1["getAlignmentAxis"])(placement);
    const alignLength = (0, __TURBOPACK__imported__module__41645__1["getAxisLength"])(alignmentAxis);
    const side = (0, __TURBOPACK__imported__module__41645__1["getSide"])(placement);
    const isVertical = sideAxis === 'y';
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const commonAlign = reference[alignLength] / 2 - floating[alignLength] / 2;
    let coords;
    switch(side){
        case 'top':
            coords = {
                x: commonX,
                y: reference.y - floating.height
            };
            break;
        case 'bottom':
            coords = {
                x: commonX,
                y: reference.y + reference.height
            };
            break;
        case 'right':
            coords = {
                x: reference.x + reference.width,
                y: commonY
            };
            break;
        case 'left':
            coords = {
                x: reference.x - floating.width,
                y: commonY
            };
            break;
        default:
            coords = {
                x: reference.x,
                y: reference.y
            };
    }
    switch((0, __TURBOPACK__imported__module__41645__1["getAlignment"])(placement)){
        case 'start':
            coords[alignmentAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
            break;
        case 'end':
            coords[alignmentAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
            break;
    }
    return coords;
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
        options = {};
    }
    const { x, y, platform, rects, elements, strategy } = state;
    const { boundary = 'clippingAncestors', rootBoundary = 'viewport', elementContext = 'floating', altBoundary = false, padding = 0 } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
    const paddingObject = (0, __TURBOPACK__imported__module__41645__1["getPaddingObject"])(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = (0, __TURBOPACK__imported__module__41645__1["rectToClientRect"])(await platform.getClippingRect({
        element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating)),
        boundary,
        rootBoundary,
        strategy
    }));
    const rect = elementContext === 'floating' ? {
        x,
        y,
        width: rects.floating.width,
        height: rects.floating.height
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = await (platform.isElement == null ? void 0 : platform.isElement(offsetParent)) ? await (platform.getScale == null ? void 0 : platform.getScale(offsetParent)) || {
        x: 1,
        y: 1
    } : {
        x: 1,
        y: 1
    };
    const elementClientRect = (0, __TURBOPACK__imported__module__41645__1["rectToClientRect"])(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
        elements,
        rect,
        offsetParent,
        strategy
    }) : rect);
    return {
        top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
        bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
        left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
        right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
}
// Maximum number of resets that can occur before bailing to avoid infinite reset loops.
const MAX_RESET_COUNT = 50;
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 *
 * This export does not have any `platform` interface logic. You will need to
 * write one for the platform you are using Floating UI with.
 */ const computePosition = async (reference, floating, config)=>{
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform } = config;
    const platformWithDetectOverflow = platform.detectOverflow ? platform : {
        ...platform,
        detectOverflow
    };
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
        reference,
        floating,
        strategy
    });
    let { x, y } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let resetCount = 0;
    const middlewareData = {};
    for(let i = 0; i < middleware.length; i++){
        const currentMiddleware = middleware[i];
        if (!currentMiddleware) {
            continue;
        }
        const { name, fn } = currentMiddleware;
        const { x: nextX, y: nextY, data, reset } = await fn({
            x,
            y,
            initialPlacement: placement,
            placement: statefulPlacement,
            strategy,
            middlewareData,
            rects,
            platform: platformWithDetectOverflow,
            elements: {
                reference,
                floating
            }
        });
        x = nextX != null ? nextX : x;
        y = nextY != null ? nextY : y;
        middlewareData[name] = {
            ...middlewareData[name],
            ...data
        };
        if (reset && resetCount < MAX_RESET_COUNT) {
            resetCount++;
            if (typeof reset === 'object') {
                if (reset.placement) {
                    statefulPlacement = reset.placement;
                }
                if (reset.rects) {
                    rects = reset.rects === true ? await platform.getElementRects({
                        reference,
                        floating,
                        strategy
                    }) : reset.rects;
                }
                ({ x, y } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
            }
            i = -1;
        }
    }
    return {
        x,
        y,
        placement: statefulPlacement,
        strategy,
        middlewareData
    };
};
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0 } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = (0, __TURBOPACK__imported__module__41645__1["getPaddingObject"])(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, __TURBOPACK__imported__module__41645__1["getAlignmentAxis"])(placement);
            const length = (0, __TURBOPACK__imported__module__41645__1["getAxisLength"])(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
            let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent))) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = (0, __TURBOPACK__imported__module__41645__1["min"])(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = (0, __TURBOPACK__imported__module__41645__1["min"])(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min$1 = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, __TURBOPACK__imported__module__41645__1["clamp"])(min$1, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, __TURBOPACK__imported__module__41645__1["getAlignment"])(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            const alignmentOffset = shouldAddOffset ? center < min$1 ? center - min$1 : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__41645__1["getAlignment"])(placement) === alignment),
        ...allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__41645__1["getAlignment"])(placement) !== alignment)
    ] : allowedPlacements.filter((placement)=>(0, __TURBOPACK__imported__module__41645__1["getSide"])(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter((placement)=>{
        if (alignment) {
            return (0, __TURBOPACK__imported__module__41645__1["getAlignment"])(placement) === alignment || (autoAlignment ? (0, __TURBOPACK__imported__module__41645__1["getOppositeAlignmentPlacement"])(placement) !== placement : false);
        }
        return true;
    });
}
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'autoPlacement',
        options,
        async fn (state) {
            var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
            const { rects, middlewareData, placement, platform, elements } = state;
            const { crossAxis = false, alignment, allowedPlacements = __TURBOPACK__imported__module__41645__1["placements"], autoAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
            const placements$1 = alignment !== undefined || allowedPlacements === __TURBOPACK__imported__module__41645__1["placements"] ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
            const currentPlacement = placements$1[currentIndex];
            if (currentPlacement == null) {
                return {};
            }
            const alignmentSides = (0, __TURBOPACK__imported__module__41645__1["getAlignmentSides"])(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));
            // Make `computeCoords` start from the right place.
            if (placement !== currentPlacement) {
                return {
                    reset: {
                        placement: placements$1[0]
                    }
                };
            }
            const currentOverflows = [
                overflow[(0, __TURBOPACK__imported__module__41645__1["getSide"])(currentPlacement)],
                overflow[alignmentSides[0]],
                overflow[alignmentSides[1]]
            ];
            const allOverflows = [
                ...((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || [],
                {
                    placement: currentPlacement,
                    overflows: currentOverflows
                }
            ];
            const nextPlacement = placements$1[currentIndex + 1];
            // There are more placements to check.
            if (nextPlacement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: nextPlacement
                    }
                };
            }
            const placementsSortedByMostSpace = allOverflows.map((d)=>{
                const alignment = (0, __TURBOPACK__imported__module__41645__1["getAlignment"])(d.placement);
                return [
                    d.placement,
                    alignment && crossAxis ? // Check along the mainAxis and main crossAxis side.
                    d.overflows.slice(0, 2).reduce((acc, v)=>acc + v, 0) : // Check only the mainAxis.
                    d.overflows[0],
                    d.overflows
                ];
            }).sort((a, b)=>a[1] - b[1]);
            const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter((d)=>d[2].slice(0, // Aligned placements should not check their opposite crossAxis
                // side.
                (0, __TURBOPACK__imported__module__41645__1["getAlignment"])(d[0]) ? 2 : 3).every((v)=>v <= 0));
            const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
            if (resetPlacement !== placement) {
                return {
                    data: {
                        index: currentIndex + 1,
                        overflows: allOverflows
                    },
                    reset: {
                        placement: resetPlacement
                    }
                };
            }
            return {};
        }
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'flip',
        options,
        async fn (state) {
            var _middlewareData$arrow, _middlewareData$flip;
            const { placement, middlewareData, rects, initialPlacement, platform, elements } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true, fallbackPlacements: specifiedFallbackPlacements, fallbackStrategy = 'bestFit', fallbackAxisSideDirection = 'none', flipAlignment = true, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
            // If a reset by the arrow was caused due to an alignment offset being
            // added, we should skip any logic now since `flip()` has already done its
            // work.
            // https://github.com/floating-ui/floating-ui/issues/2549#issuecomment-1719601643
            if ((_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            const side = (0, __TURBOPACK__imported__module__41645__1["getSide"])(placement);
            const initialSideAxis = (0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(initialPlacement);
            const isBasePlacement = (0, __TURBOPACK__imported__module__41645__1["getSide"])(initialPlacement) === initialPlacement;
            const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
            const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [
                (0, __TURBOPACK__imported__module__41645__1["getOppositePlacement"])(initialPlacement)
            ] : (0, __TURBOPACK__imported__module__41645__1["getExpandedPlacements"])(initialPlacement));
            const hasFallbackAxisSideDirection = fallbackAxisSideDirection !== 'none';
            if (!specifiedFallbackPlacements && hasFallbackAxisSideDirection) {
                fallbackPlacements.push(...(0, __TURBOPACK__imported__module__41645__1["getOppositeAxisPlacements"])(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
            }
            const placements = [
                initialPlacement,
                ...fallbackPlacements
            ];
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const overflows = [];
            let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
            if (checkMainAxis) {
                overflows.push(overflow[side]);
            }
            if (checkCrossAxis) {
                const sides = (0, __TURBOPACK__imported__module__41645__1["getAlignmentSides"])(placement, rects, rtl);
                overflows.push(overflow[sides[0]], overflow[sides[1]]);
            }
            overflowsData = [
                ...overflowsData,
                {
                    placement,
                    overflows
                }
            ];
            // One or more sides is overflowing.
            if (!overflows.every((side)=>side <= 0)) {
                var _middlewareData$flip2, _overflowsData$filter;
                const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
                const nextPlacement = placements[nextIndex];
                if (nextPlacement) {
                    const ignoreCrossAxisOverflow = checkCrossAxis === 'alignment' ? initialSideAxis !== (0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(nextPlacement) : false;
                    if (!ignoreCrossAxisOverflow || // We leave the current main axis only if every placement on that axis
                    // overflows the main axis.
                    overflowsData.every((d)=>(0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(d.placement) === initialSideAxis ? d.overflows[0] > 0 : true)) {
                        // Try next placement and re-run the lifecycle.
                        return {
                            data: {
                                index: nextIndex,
                                overflows: overflowsData
                            },
                            reset: {
                                placement: nextPlacement
                            }
                        };
                    }
                }
                // First, find the candidates that fit on the mainAxis side of overflow,
                // then find the placement that fits the best on the main crossAxis side.
                let resetPlacement = (_overflowsData$filter = overflowsData.filter((d)=>d.overflows[0] <= 0).sort((a, b)=>a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;
                // Otherwise fallback.
                if (!resetPlacement) {
                    switch(fallbackStrategy){
                        case 'bestFit':
                            {
                                var _overflowsData$filter2;
                                const placement = (_overflowsData$filter2 = overflowsData.filter((d)=>{
                                    if (hasFallbackAxisSideDirection) {
                                        const currentSideAxis = (0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(d.placement);
                                        return currentSideAxis === initialSideAxis || // Create a bias to the `y` side axis due to horizontal
                                        // reading directions favoring greater width.
                                        currentSideAxis === 'y';
                                    }
                                    return true;
                                }).map((d)=>[
                                        d.placement,
                                        d.overflows.filter((overflow)=>overflow > 0).reduce((acc, overflow)=>acc + overflow, 0)
                                    ]).sort((a, b)=>a[1] - b[1])[0]) == null ? void 0 : _overflowsData$filter2[0];
                                if (placement) {
                                    resetPlacement = placement;
                                }
                                break;
                            }
                        case 'initialPlacement':
                            resetPlacement = initialPlacement;
                            break;
                    }
                }
                if (placement !== resetPlacement) {
                    return {
                        reset: {
                            placement: resetPlacement
                        }
                    };
                }
            }
            return {};
        }
    };
};
function getSideOffsets(overflow, rect) {
    return {
        top: overflow.top - rect.height,
        right: overflow.right - rect.width,
        bottom: overflow.bottom - rect.height,
        left: overflow.left - rect.width
    };
}
function isAnySideFullyClipped(overflow) {
    return __TURBOPACK__imported__module__41645__1["sides"].some((side)=>overflow[side] >= 0);
}
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'hide',
        options,
        async fn (state) {
            const { rects, platform } = state;
            const { strategy = 'referenceHidden', ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
            switch(strategy){
                case 'referenceHidden':
                    {
                        const overflow = await platform.detectOverflow(state, {
                            ...detectOverflowOptions,
                            elementContext: 'reference'
                        });
                        const offsets = getSideOffsets(overflow, rects.reference);
                        return {
                            data: {
                                referenceHiddenOffsets: offsets,
                                referenceHidden: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                case 'escaped':
                    {
                        const overflow = await platform.detectOverflow(state, {
                            ...detectOverflowOptions,
                            altBoundary: true
                        });
                        const offsets = getSideOffsets(overflow, rects.floating);
                        return {
                            data: {
                                escapedOffsets: offsets,
                                escaped: isAnySideFullyClipped(offsets)
                            }
                        };
                    }
                default:
                    {
                        return {};
                    }
            }
        }
    };
};
function getBoundingRect(rects) {
    const minX = (0, __TURBOPACK__imported__module__41645__1["min"])(...rects.map((rect)=>rect.left));
    const minY = (0, __TURBOPACK__imported__module__41645__1["min"])(...rects.map((rect)=>rect.top));
    const maxX = (0, __TURBOPACK__imported__module__41645__1["max"])(...rects.map((rect)=>rect.right));
    const maxY = (0, __TURBOPACK__imported__module__41645__1["max"])(...rects.map((rect)=>rect.bottom));
    return {
        x: minX,
        y: minY,
        width: maxX - minX,
        height: maxY - minY
    };
}
function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b)=>a.y - b.y);
    const groups = [];
    let prevRect = null;
    for(let i = 0; i < sortedRects.length; i++){
        const rect = sortedRects[i];
        if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
            groups.push([
                rect
            ]);
        } else {
            groups[groups.length - 1].push(rect);
        }
        prevRect = rect;
    }
    return groups.map((rect)=>(0, __TURBOPACK__imported__module__41645__1["rectToClientRect"])(getBoundingRect(rect)));
}
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'inline',
        options,
        async fn (state) {
            const { placement, elements, rects, platform, strategy } = state;
            // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
            // ClientRect's bounds, despite the event listener being triggered. A
            // padding of 2 seems to handle this issue.
            const { padding = 2, x, y } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
            const nativeClientRects = Array.from(await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference)) || []);
            const clientRects = getRectsByLine(nativeClientRects);
            const fallback = (0, __TURBOPACK__imported__module__41645__1["rectToClientRect"])(getBoundingRect(nativeClientRects));
            const paddingObject = (0, __TURBOPACK__imported__module__41645__1["getPaddingObject"])(padding);
            function getBoundingClientRect() {
                // There are two rects and they are disjoined.
                if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
                    // Find the first rect in which the point is fully inside.
                    return clientRects.find((rect)=>x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
                }
                // There are 2 or more connected rects.
                if (clientRects.length >= 2) {
                    if ((0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(placement) === 'y') {
                        const firstRect = clientRects[0];
                        const lastRect = clientRects[clientRects.length - 1];
                        const isTop = (0, __TURBOPACK__imported__module__41645__1["getSide"])(placement) === 'top';
                        const top = firstRect.top;
                        const bottom = lastRect.bottom;
                        const left = isTop ? firstRect.left : lastRect.left;
                        const right = isTop ? firstRect.right : lastRect.right;
                        const width = right - left;
                        const height = bottom - top;
                        return {
                            top,
                            bottom,
                            left,
                            right,
                            width,
                            height,
                            x: left,
                            y: top
                        };
                    }
                    const isLeftSide = (0, __TURBOPACK__imported__module__41645__1["getSide"])(placement) === 'left';
                    const maxRight = (0, __TURBOPACK__imported__module__41645__1["max"])(...clientRects.map((rect)=>rect.right));
                    const minLeft = (0, __TURBOPACK__imported__module__41645__1["min"])(...clientRects.map((rect)=>rect.left));
                    const measureRects = clientRects.filter((rect)=>isLeftSide ? rect.left === minLeft : rect.right === maxRight);
                    const top = measureRects[0].top;
                    const bottom = measureRects[measureRects.length - 1].bottom;
                    const left = minLeft;
                    const right = maxRight;
                    const width = right - left;
                    const height = bottom - top;
                    return {
                        top,
                        bottom,
                        left,
                        right,
                        width,
                        height,
                        x: left,
                        y: top
                    };
                }
                return fallback;
            }
            const resetRects = await platform.getElementRects({
                reference: {
                    getBoundingClientRect
                },
                floating: elements.floating,
                strategy
            });
            if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
                return {
                    reset: {
                        rects: resetRects
                    }
                };
            }
            return {};
        }
    };
};
const originSides = /*#__PURE__*/ new Set([
    'left',
    'top'
]);
// For type backwards-compatibility, the `OffsetOptions` type was also
// Derivable.
async function convertValueToCoords(state, options) {
    const { placement, platform, elements } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = (0, __TURBOPACK__imported__module__41645__1["getSide"])(placement);
    const alignment = (0, __TURBOPACK__imported__module__41645__1["getAlignment"])(placement);
    const isVertical = (0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(placement) === 'y';
    const mainAxisMulti = originSides.has(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
    // eslint-disable-next-line prefer-const
    let { mainAxis, crossAxis, alignmentAxis } = typeof rawValue === 'number' ? {
        mainAxis: rawValue,
        crossAxis: 0,
        alignmentAxis: null
    } : {
        mainAxis: rawValue.mainAxis || 0,
        crossAxis: rawValue.crossAxis || 0,
        alignmentAxis: rawValue.alignmentAxis
    };
    if (alignment && typeof alignmentAxis === 'number') {
        crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
        x: crossAxis * crossAxisMulti,
        y: mainAxis * mainAxisMulti
    } : {
        x: mainAxis * mainAxisMulti,
        y: crossAxis * crossAxisMulti
    };
}
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset = function(options) {
    if (options === void 0) {
        options = 0;
    }
    return {
        name: 'offset',
        options,
        async fn (state) {
            var _middlewareData$offse, _middlewareData$arrow;
            const { x, y, placement, middlewareData } = state;
            const diffCoords = await convertValueToCoords(state, options);
            // If the placement is the same and the arrow caused an alignment offset
            // then we don't need to change the positioning coordinates.
            if (placement === ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse.placement) && (_middlewareData$arrow = middlewareData.arrow) != null && _middlewareData$arrow.alignmentOffset) {
                return {};
            }
            return {
                x: x + diffCoords.x,
                y: y + diffCoords.y,
                data: {
                    ...diffCoords,
                    placement
                }
            };
        }
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'shift',
        options,
        async fn (state) {
            const { x, y, placement, platform } = state;
            const { mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = false, limiter = {
                fn: (_ref)=>{
                    let { x, y } = _ref;
                    return {
                        x,
                        y
                    };
                }
            }, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const crossAxis = (0, __TURBOPACK__imported__module__41645__1["getSideAxis"])((0, __TURBOPACK__imported__module__41645__1["getSide"])(placement));
            const mainAxis = (0, __TURBOPACK__imported__module__41645__1["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            if (checkMainAxis) {
                const minSide = mainAxis === 'y' ? 'top' : 'left';
                const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
                const min = mainAxisCoord + overflow[minSide];
                const max = mainAxisCoord - overflow[maxSide];
                mainAxisCoord = (0, __TURBOPACK__imported__module__41645__1["clamp"])(min, mainAxisCoord, max);
            }
            if (checkCrossAxis) {
                const minSide = crossAxis === 'y' ? 'top' : 'left';
                const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
                const min = crossAxisCoord + overflow[minSide];
                const max = crossAxisCoord - overflow[maxSide];
                crossAxisCoord = (0, __TURBOPACK__imported__module__41645__1["clamp"])(min, crossAxisCoord, max);
            }
            const limitedCoords = limiter.fn({
                ...state,
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            });
            return {
                ...limitedCoords,
                data: {
                    x: limitedCoords.x - x,
                    y: limitedCoords.y - y,
                    enabled: {
                        [mainAxis]: checkMainAxis,
                        [crossAxis]: checkCrossAxis
                    }
                }
            };
        }
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        options,
        fn (state) {
            const { x, y, placement, rects, middlewareData } = state;
            const { offset = 0, mainAxis: checkMainAxis = true, crossAxis: checkCrossAxis = true } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
            const coords = {
                x,
                y
            };
            const crossAxis = (0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(placement);
            const mainAxis = (0, __TURBOPACK__imported__module__41645__1["getOppositeAxis"])(crossAxis);
            let mainAxisCoord = coords[mainAxis];
            let crossAxisCoord = coords[crossAxis];
            const rawOffset = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(offset, state);
            const computedOffset = typeof rawOffset === 'number' ? {
                mainAxis: rawOffset,
                crossAxis: 0
            } : {
                mainAxis: 0,
                crossAxis: 0,
                ...rawOffset
            };
            if (checkMainAxis) {
                const len = mainAxis === 'y' ? 'height' : 'width';
                const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
                const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
                if (mainAxisCoord < limitMin) {
                    mainAxisCoord = limitMin;
                } else if (mainAxisCoord > limitMax) {
                    mainAxisCoord = limitMax;
                }
            }
            if (checkCrossAxis) {
                var _middlewareData$offse, _middlewareData$offse2;
                const len = mainAxis === 'y' ? 'width' : 'height';
                const isOriginSide = originSides.has((0, __TURBOPACK__imported__module__41645__1["getSide"])(placement));
                const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
                const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
                if (crossAxisCoord < limitMin) {
                    crossAxisCoord = limitMin;
                } else if (crossAxisCoord > limitMax) {
                    crossAxisCoord = limitMax;
                }
            }
            return {
                [mainAxis]: mainAxisCoord,
                [crossAxis]: crossAxisCoord
            };
        }
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size = function(options) {
    if (options === void 0) {
        options = {};
    }
    return {
        name: 'size',
        options,
        async fn (state) {
            var _state$middlewareData, _state$middlewareData2;
            const { placement, rects, platform, elements } = state;
            const { apply = ()=>{}, ...detectOverflowOptions } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state);
            const overflow = await platform.detectOverflow(state, detectOverflowOptions);
            const side = (0, __TURBOPACK__imported__module__41645__1["getSide"])(placement);
            const alignment = (0, __TURBOPACK__imported__module__41645__1["getAlignment"])(placement);
            const isYAxis = (0, __TURBOPACK__imported__module__41645__1["getSideAxis"])(placement) === 'y';
            const { width, height } = rects.floating;
            let heightSide;
            let widthSide;
            if (side === 'top' || side === 'bottom') {
                heightSide = side;
                widthSide = alignment === (await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)) ? 'start' : 'end') ? 'left' : 'right';
            } else {
                widthSide = side;
                heightSide = alignment === 'end' ? 'top' : 'bottom';
            }
            const maximumClippingHeight = height - overflow.top - overflow.bottom;
            const maximumClippingWidth = width - overflow.left - overflow.right;
            const overflowAvailableHeight = (0, __TURBOPACK__imported__module__41645__1["min"])(height - overflow[heightSide], maximumClippingHeight);
            const overflowAvailableWidth = (0, __TURBOPACK__imported__module__41645__1["min"])(width - overflow[widthSide], maximumClippingWidth);
            const noShift = !state.middlewareData.shift;
            let availableHeight = overflowAvailableHeight;
            let availableWidth = overflowAvailableWidth;
            if ((_state$middlewareData = state.middlewareData.shift) != null && _state$middlewareData.enabled.x) {
                availableWidth = maximumClippingWidth;
            }
            if ((_state$middlewareData2 = state.middlewareData.shift) != null && _state$middlewareData2.enabled.y) {
                availableHeight = maximumClippingHeight;
            }
            if (noShift && !alignment) {
                const xMin = (0, __TURBOPACK__imported__module__41645__1["max"])(overflow.left, 0);
                const xMax = (0, __TURBOPACK__imported__module__41645__1["max"])(overflow.right, 0);
                const yMin = (0, __TURBOPACK__imported__module__41645__1["max"])(overflow.top, 0);
                const yMax = (0, __TURBOPACK__imported__module__41645__1["max"])(overflow.bottom, 0);
                if (isYAxis) {
                    availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : (0, __TURBOPACK__imported__module__41645__1["max"])(overflow.left, overflow.right));
                } else {
                    availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : (0, __TURBOPACK__imported__module__41645__1["max"])(overflow.top, overflow.bottom));
                }
            }
            await apply({
                ...state,
                availableWidth,
                availableHeight
            });
            const nextDimensions = await platform.getDimensions(elements.floating);
            if (width !== nextDimensions.width || height !== nextDimensions.height) {
                return {
                    reset: {
                        rects: true
                    }
                };
            }
            return {};
        }
    };
};
;
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
;
;
;
;
function getCssDimensions(element) {
    const css = (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = (0, __TURBOPACK__imported__module__41645__["round"])(width) !== offsetWidth || (0, __TURBOPACK__imported__module__41645__["round"])(height) !== offsetHeight;
    if (shouldFallback) {
        width = offsetWidth;
        height = offsetHeight;
    }
    return {
        width,
        height,
        $: shouldFallback
    };
}
function unwrapElement(element) {
    return !(0, __TURBOPACK__imported__module__92615__["isElement"])(element) ? element.contextElement : element;
}
function getScale(element) {
    const domElement = unwrapElement(element);
    if (!(0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(domElement)) {
        return (0, __TURBOPACK__imported__module__41645__["createCoords"])(1);
    }
    const rect = domElement.getBoundingClientRect();
    const { width, height, $ } = getCssDimensions(domElement);
    let x = ($ ? (0, __TURBOPACK__imported__module__41645__["round"])(rect.width) : rect.width) / width;
    let y = ($ ? (0, __TURBOPACK__imported__module__41645__["round"])(rect.height) : rect.height) / height;
    // 0, NaN, or Infinity should always fallback to 1.
    if (!x || !Number.isFinite(x)) {
        x = 1;
    }
    if (!y || !Number.isFinite(y)) {
        y = 1;
    }
    return {
        x,
        y
    };
}
const noOffsets = /*#__PURE__*/ (0, __TURBOPACK__imported__module__41645__["createCoords"])(0);
function getVisualOffsets(element) {
    const win = (0, __TURBOPACK__imported__module__92615__["getWindow"])(element);
    if (!(0, __TURBOPACK__imported__module__92615__["isWebKit"])() || !win.visualViewport) {
        return noOffsets;
    }
    return {
        x: win.visualViewport.offsetLeft,
        y: win.visualViewport.offsetTop
    };
}
function shouldAddVisualOffsets(element, isFixed, floatingOffsetParent) {
    if (isFixed === void 0) {
        isFixed = false;
    }
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== (0, __TURBOPACK__imported__module__92615__["getWindow"])(element)) {
        return false;
    }
    return isFixed;
}
function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
        includeScale = false;
    }
    if (isFixedStrategy === void 0) {
        isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = (0, __TURBOPACK__imported__module__41645__["createCoords"])(1);
    if (includeScale) {
        if (offsetParent) {
            if ((0, __TURBOPACK__imported__module__92615__["isElement"])(offsetParent)) {
                scale = getScale(offsetParent);
            }
        } else {
            scale = getScale(element);
        }
    }
    const visualOffsets = shouldAddVisualOffsets(domElement, isFixedStrategy, offsetParent) ? getVisualOffsets(domElement) : (0, __TURBOPACK__imported__module__41645__["createCoords"])(0);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
        const win = (0, __TURBOPACK__imported__module__92615__["getWindow"])(domElement);
        const offsetWin = offsetParent && (0, __TURBOPACK__imported__module__92615__["isElement"])(offsetParent) ? (0, __TURBOPACK__imported__module__92615__["getWindow"])(offsetParent) : offsetParent;
        let currentWin = win;
        let currentIFrame = (0, __TURBOPACK__imported__module__92615__["getFrameElement"])(currentWin);
        while(currentIFrame && offsetParent && offsetWin !== currentWin){
            const iframeScale = getScale(currentIFrame);
            const iframeRect = currentIFrame.getBoundingClientRect();
            const css = (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(currentIFrame);
            const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
            const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
            x *= iframeScale.x;
            y *= iframeScale.y;
            width *= iframeScale.x;
            height *= iframeScale.y;
            x += left;
            y += top;
            currentWin = (0, __TURBOPACK__imported__module__92615__["getWindow"])(currentIFrame);
            currentIFrame = (0, __TURBOPACK__imported__module__92615__["getFrameElement"])(currentWin);
        }
    }
    return (0, __TURBOPACK__imported__module__41645__["rectToClientRect"])({
        width,
        height,
        x,
        y
    });
}
// If <html> has a CSS width greater than the viewport, then this will be
// incorrect for RTL.
function getWindowScrollBarX(element, rect) {
    const leftScroll = (0, __TURBOPACK__imported__module__92615__["getNodeScroll"])(element).scrollLeft;
    if (!rect) {
        return getBoundingClientRect((0, __TURBOPACK__imported__module__92615__["getDocumentElement"])(element)).left + leftScroll;
    }
    return rect.left + leftScroll;
}
function getHTMLOffset(documentElement, scroll) {
    const htmlRect = documentElement.getBoundingClientRect();
    const x = htmlRect.left + scroll.scrollLeft - getWindowScrollBarX(documentElement, htmlRect);
    const y = htmlRect.top + scroll.scrollTop;
    return {
        x,
        y
    };
}
function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let { elements, rect, offsetParent, strategy } = _ref;
    const isFixed = strategy === 'fixed';
    const documentElement = (0, __TURBOPACK__imported__module__92615__["getDocumentElement"])(offsetParent);
    const topLayer = elements ? (0, __TURBOPACK__imported__module__92615__["isTopLayer"])(elements.floating) : false;
    if (offsetParent === documentElement || topLayer && isFixed) {
        return rect;
    }
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    let scale = (0, __TURBOPACK__imported__module__41645__["createCoords"])(1);
    const offsets = (0, __TURBOPACK__imported__module__41645__["createCoords"])(0);
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(offsetParent);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__92615__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__92615__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__92615__["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent);
            scale = getScale(offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        }
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__41645__["createCoords"])(0);
    return {
        width: rect.width * scale.x,
        height: rect.height * scale.y,
        x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x + htmlOffset.x,
        y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y + htmlOffset.y
    };
}
function getClientRects(element) {
    return Array.from(element.getClientRects());
}
// Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable.
function getDocumentRect(element) {
    const html = (0, __TURBOPACK__imported__module__92615__["getDocumentElement"])(element);
    const scroll = (0, __TURBOPACK__imported__module__92615__["getNodeScroll"])(element);
    const body = element.ownerDocument.body;
    const width = (0, __TURBOPACK__imported__module__41645__["max"])(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = (0, __TURBOPACK__imported__module__41645__["max"])(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if ((0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(body).direction === 'rtl') {
        x += (0, __TURBOPACK__imported__module__41645__["max"])(html.clientWidth, body.clientWidth) - width;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Safety check: ensure the scrollbar space is reasonable in case this
// calculation is affected by unusual styles.
// Most scrollbars leave 15-18px of space.
const SCROLLBAR_MAX = 25;
function getViewportRect(element, strategy) {
    const win = (0, __TURBOPACK__imported__module__92615__["getWindow"])(element);
    const html = (0, __TURBOPACK__imported__module__92615__["getDocumentElement"])(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
        width = visualViewport.width;
        height = visualViewport.height;
        const visualViewportBased = (0, __TURBOPACK__imported__module__92615__["isWebKit"])();
        if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
            x = visualViewport.offsetLeft;
            y = visualViewport.offsetTop;
        }
    }
    const windowScrollbarX = getWindowScrollBarX(html);
    // <html> `overflow: hidden` + `scrollbar-gutter: stable` reduces the
    // visual width of the <html> but this is not considered in the size
    // of `html.clientWidth`.
    if (windowScrollbarX <= 0) {
        const doc = html.ownerDocument;
        const body = doc.body;
        const bodyStyles = getComputedStyle(body);
        const bodyMarginInline = doc.compatMode === 'CSS1Compat' ? parseFloat(bodyStyles.marginLeft) + parseFloat(bodyStyles.marginRight) || 0 : 0;
        const clippingStableScrollbarWidth = Math.abs(html.clientWidth - body.clientWidth - bodyMarginInline);
        if (clippingStableScrollbarWidth <= SCROLLBAR_MAX) {
            width -= clippingStableScrollbarWidth;
        }
    } else if (windowScrollbarX <= SCROLLBAR_MAX) {
        // If the <body> scrollbar is on the left, the width needs to be extended
        // by the scrollbar amount so there isn't extra space on the right.
        width += windowScrollbarX;
    }
    return {
        width,
        height,
        x,
        y
    };
}
// Returns the inner client rect, subtracting scrollbars if present.
function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(element) ? getScale(element) : (0, __TURBOPACK__imported__module__41645__["createCoords"])(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
        width,
        height,
        x,
        y
    };
}
function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
        rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
        rect = getDocumentRect((0, __TURBOPACK__imported__module__92615__["getDocumentElement"])(element));
    } else if ((0, __TURBOPACK__imported__module__92615__["isElement"])(clippingAncestor)) {
        rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
        const visualOffsets = getVisualOffsets(element);
        rect = {
            x: clippingAncestor.x - visualOffsets.x,
            y: clippingAncestor.y - visualOffsets.y,
            width: clippingAncestor.width,
            height: clippingAncestor.height
        };
    }
    return (0, __TURBOPACK__imported__module__41645__["rectToClientRect"])(rect);
}
function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = (0, __TURBOPACK__imported__module__92615__["getParentNode"])(element);
    if (parentNode === stopNode || !(0, __TURBOPACK__imported__module__92615__["isElement"])(parentNode) || (0, __TURBOPACK__imported__module__92615__["isLastTraversableNode"])(parentNode)) {
        return false;
    }
    return (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
}
// A "clipping ancestor" is an `overflow` element with the characteristic of
// clipping (or hiding) child elements. This returns all clipping ancestors
// of the given element up the tree.
function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
        return cachedResult;
    }
    let result = (0, __TURBOPACK__imported__module__92615__["getOverflowAncestors"])(element, [], false).filter((el)=>(0, __TURBOPACK__imported__module__92615__["isElement"])(el) && (0, __TURBOPACK__imported__module__92615__["getNodeName"])(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(element).position === 'fixed';
    let currentNode = elementIsFixed ? (0, __TURBOPACK__imported__module__92615__["getParentNode"])(element) : element;
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while((0, __TURBOPACK__imported__module__92615__["isElement"])(currentNode) && !(0, __TURBOPACK__imported__module__92615__["isLastTraversableNode"])(currentNode)){
        const computedStyle = (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(currentNode);
        const currentNodeIsContaining = (0, __TURBOPACK__imported__module__92615__["isContainingBlock"])(currentNode);
        if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
            currentContainingBlockComputedStyle = null;
        }
        const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && (currentContainingBlockComputedStyle.position === 'absolute' || currentContainingBlockComputedStyle.position === 'fixed') || (0, __TURBOPACK__imported__module__92615__["isOverflowElement"])(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
        if (shouldDropCurrentNode) {
            // Drop non-containing blocks.
            result = result.filter((ancestor)=>ancestor !== currentNode);
        } else {
            // Record last containing block for next iteration.
            currentContainingBlockComputedStyle = computedStyle;
        }
        currentNode = (0, __TURBOPACK__imported__module__92615__["getParentNode"])(currentNode);
    }
    cache.set(element, result);
    return result;
}
// Gets the maximum area that the element is visible in due to any number of
// clipping ancestors.
function getClippingRect(_ref) {
    let { element, boundary, rootBoundary, strategy } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? (0, __TURBOPACK__imported__module__92615__["isTopLayer"])(element) ? [] : getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [
        ...elementClippingAncestors,
        rootBoundary
    ];
    const firstRect = getClientRectFromClippingAncestor(element, clippingAncestors[0], strategy);
    let top = firstRect.top;
    let right = firstRect.right;
    let bottom = firstRect.bottom;
    let left = firstRect.left;
    for(let i = 1; i < clippingAncestors.length; i++){
        const rect = getClientRectFromClippingAncestor(element, clippingAncestors[i], strategy);
        top = (0, __TURBOPACK__imported__module__41645__["max"])(rect.top, top);
        right = (0, __TURBOPACK__imported__module__41645__["min"])(rect.right, right);
        bottom = (0, __TURBOPACK__imported__module__41645__["min"])(rect.bottom, bottom);
        left = (0, __TURBOPACK__imported__module__41645__["max"])(rect.left, left);
    }
    return {
        width: right - left,
        height: bottom - top,
        x: left,
        y: top
    };
}
function getDimensions(element) {
    const { width, height } = getCssDimensions(element);
    return {
        width,
        height
    };
}
function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = (0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(offsetParent);
    const documentElement = (0, __TURBOPACK__imported__module__92615__["getDocumentElement"])(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
        scrollLeft: 0,
        scrollTop: 0
    };
    const offsets = (0, __TURBOPACK__imported__module__41645__["createCoords"])(0);
    // If the <body> scrollbar appears on the left (e.g. RTL systems). Use
    // Firefox with layout.scrollbar.side = 3 in about:config to test this.
    function setLeftRTLScrollbarOffset() {
        offsets.x = getWindowScrollBarX(documentElement);
    }
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
        if ((0, __TURBOPACK__imported__module__92615__["getNodeName"])(offsetParent) !== 'body' || (0, __TURBOPACK__imported__module__92615__["isOverflowElement"])(documentElement)) {
            scroll = (0, __TURBOPACK__imported__module__92615__["getNodeScroll"])(offsetParent);
        }
        if (isOffsetParentAnElement) {
            const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
            offsets.x = offsetRect.x + offsetParent.clientLeft;
            offsets.y = offsetRect.y + offsetParent.clientTop;
        } else if (documentElement) {
            setLeftRTLScrollbarOffset();
        }
    }
    if (isFixed && !isOffsetParentAnElement && documentElement) {
        setLeftRTLScrollbarOffset();
    }
    const htmlOffset = documentElement && !isOffsetParentAnElement && !isFixed ? getHTMLOffset(documentElement, scroll) : (0, __TURBOPACK__imported__module__41645__["createCoords"])(0);
    const x = rect.left + scroll.scrollLeft - offsets.x - htmlOffset.x;
    const y = rect.top + scroll.scrollTop - offsets.y - htmlOffset.y;
    return {
        x,
        y,
        width: rect.width,
        height: rect.height
    };
}
function isStaticPositioned(element) {
    return (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(element).position === 'static';
}
function getTrueOffsetParent(element, polyfill) {
    if (!(0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(element) || (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(element).position === 'fixed') {
        return null;
    }
    if (polyfill) {
        return polyfill(element);
    }
    let rawOffsetParent = element.offsetParent;
    // Firefox returns the <html> element as the offsetParent if it's non-static,
    // while Chrome and Safari return the <body> element. The <body> element must
    // be used to perform the correct calculations even if the <html> element is
    // non-static.
    if ((0, __TURBOPACK__imported__module__92615__["getDocumentElement"])(element) === rawOffsetParent) {
        rawOffsetParent = rawOffsetParent.ownerDocument.body;
    }
    return rawOffsetParent;
}
// Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.
function getOffsetParent(element, polyfill) {
    const win = (0, __TURBOPACK__imported__module__92615__["getWindow"])(element);
    if ((0, __TURBOPACK__imported__module__92615__["isTopLayer"])(element)) {
        return win;
    }
    if (!(0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(element)) {
        let svgOffsetParent = (0, __TURBOPACK__imported__module__92615__["getParentNode"])(element);
        while(svgOffsetParent && !(0, __TURBOPACK__imported__module__92615__["isLastTraversableNode"])(svgOffsetParent)){
            if ((0, __TURBOPACK__imported__module__92615__["isElement"])(svgOffsetParent) && !isStaticPositioned(svgOffsetParent)) {
                return svgOffsetParent;
            }
            svgOffsetParent = (0, __TURBOPACK__imported__module__92615__["getParentNode"])(svgOffsetParent);
        }
        return win;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while(offsetParent && (0, __TURBOPACK__imported__module__92615__["isTableElement"])(offsetParent) && isStaticPositioned(offsetParent)){
        offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (0, __TURBOPACK__imported__module__92615__["isLastTraversableNode"])(offsetParent) && isStaticPositioned(offsetParent) && !(0, __TURBOPACK__imported__module__92615__["isContainingBlock"])(offsetParent)) {
        return win;
    }
    return offsetParent || (0, __TURBOPACK__imported__module__92615__["getContainingBlock"])(element) || win;
}
const getElementRects = async function(data) {
    const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
    const getDimensionsFn = this.getDimensions;
    const floatingDimensions = await getDimensionsFn(data.floating);
    return {
        reference: getRectRelativeToOffsetParent(data.reference, await getOffsetParentFn(data.floating), data.strategy),
        floating: {
            x: 0,
            y: 0,
            width: floatingDimensions.width,
            height: floatingDimensions.height
        }
    };
};
function isRTL(element) {
    return (0, __TURBOPACK__imported__module__92615__["getComputedStyle"])(element).direction === 'rtl';
}
const platform = {
    convertOffsetParentRelativeRectToViewportRelativeRect,
    getDocumentElement: __TURBOPACK__imported__module__92615__["getDocumentElement"],
    getClippingRect,
    getOffsetParent,
    getElementRects,
    getClientRects,
    getDimensions,
    getScale,
    isElement: __TURBOPACK__imported__module__92615__["isElement"],
    isRTL
};
function rectsAreEqual(a, b) {
    return a.x === b.x && a.y === b.y && a.width === b.width && a.height === b.height;
}
// https://samthor.au/2021/observing-dom/
function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = (0, __TURBOPACK__imported__module__92615__["getDocumentElement"])(element);
    function cleanup() {
        var _io;
        clearTimeout(timeoutId);
        (_io = io) == null || _io.disconnect();
        io = null;
    }
    function refresh(skip, threshold) {
        if (skip === void 0) {
            skip = false;
        }
        if (threshold === void 0) {
            threshold = 1;
        }
        cleanup();
        const elementRectForRootMargin = element.getBoundingClientRect();
        const { left, top, width, height } = elementRectForRootMargin;
        if (!skip) {
            onMove();
        }
        if (!width || !height) {
            return;
        }
        const insetTop = (0, __TURBOPACK__imported__module__41645__["floor"])(top);
        const insetRight = (0, __TURBOPACK__imported__module__41645__["floor"])(root.clientWidth - (left + width));
        const insetBottom = (0, __TURBOPACK__imported__module__41645__["floor"])(root.clientHeight - (top + height));
        const insetLeft = (0, __TURBOPACK__imported__module__41645__["floor"])(left);
        const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
        const options = {
            rootMargin,
            threshold: (0, __TURBOPACK__imported__module__41645__["max"])(0, (0, __TURBOPACK__imported__module__41645__["min"])(1, threshold)) || 1
        };
        let isFirstUpdate = true;
        function handleObserve(entries) {
            const ratio = entries[0].intersectionRatio;
            if (ratio !== threshold) {
                if (!isFirstUpdate) {
                    return refresh();
                }
                if (!ratio) {
                    // If the reference is clipped, the ratio is 0. Throttle the refresh
                    // to prevent an infinite loop of updates.
                    timeoutId = setTimeout(()=>{
                        refresh(false, 1e-7);
                    }, 1000);
                } else {
                    refresh(false, ratio);
                }
            }
            if (ratio === 1 && !rectsAreEqual(elementRectForRootMargin, element.getBoundingClientRect())) {
                // It's possible that even though the ratio is reported as 1, the
                // element is not actually fully within the IntersectionObserver's root
                // area anymore. This can happen under performance constraints. This may
                // be a bug in the browser's IntersectionObserver implementation. To
                // work around this, we compare the element's bounding rect now with
                // what it was at the time we created the IntersectionObserver. If they
                // are not equal then the element moved, so we refresh.
                refresh();
            }
            isFirstUpdate = false;
        }
        // Older browsers don't support a `document` as the root and will throw an
        // error.
        try {
            io = new IntersectionObserver(handleObserve, {
                ...options,
                // Handle <iframe>s
                root: root.ownerDocument
            });
        } catch (_e) {
            io = new IntersectionObserver(handleObserve, options);
        }
        io.observe(element);
    }
    refresh(true);
    return cleanup;
}
/**
 * Automatically updates the position of the floating element when necessary.
 * Should only be called when the floating element is mounted on the DOM or
 * visible on the screen.
 * @returns cleanup function that should be invoked when the floating element is
 * removed from the DOM or hidden from the screen.
 * @see https://floating-ui.com/docs/autoUpdate
 */ function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
        options = {};
    }
    const { ancestorScroll = true, ancestorResize = true, elementResize = typeof ResizeObserver === 'function', layoutShift = typeof IntersectionObserver === 'function', animationFrame = false } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [
        ...referenceEl ? (0, __TURBOPACK__imported__module__92615__["getOverflowAncestors"])(referenceEl) : [],
        ...floating ? (0, __TURBOPACK__imported__module__92615__["getOverflowAncestors"])(floating) : []
    ] : [];
    ancestors.forEach((ancestor)=>{
        ancestorScroll && ancestor.addEventListener('scroll', update, {
            passive: true
        });
        ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let reobserveFrame = -1;
    let resizeObserver = null;
    if (elementResize) {
        resizeObserver = new ResizeObserver((_ref)=>{
            let [firstEntry] = _ref;
            if (firstEntry && firstEntry.target === referenceEl && resizeObserver && floating) {
                // Prevent update loops when using the `size` middleware.
                // https://github.com/floating-ui/floating-ui/issues/1740
                resizeObserver.unobserve(floating);
                cancelAnimationFrame(reobserveFrame);
                reobserveFrame = requestAnimationFrame(()=>{
                    var _resizeObserver;
                    (_resizeObserver = resizeObserver) == null || _resizeObserver.observe(floating);
                });
            }
            update();
        });
        if (referenceEl && !animationFrame) {
            resizeObserver.observe(referenceEl);
        }
        if (floating) {
            resizeObserver.observe(floating);
        }
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
        frameLoop();
    }
    function frameLoop() {
        const nextRefRect = getBoundingClientRect(reference);
        if (prevRefRect && !rectsAreEqual(prevRefRect, nextRefRect)) {
            update();
        }
        prevRefRect = nextRefRect;
        frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return ()=>{
        var _resizeObserver2;
        ancestors.forEach((ancestor)=>{
            ancestorScroll && ancestor.removeEventListener('scroll', update);
            ancestorResize && ancestor.removeEventListener('resize', update);
        });
        cleanupIo == null || cleanupIo();
        (_resizeObserver2 = resizeObserver) == null || _resizeObserver2.disconnect();
        resizeObserver = null;
        if (animationFrame) {
            cancelAnimationFrame(frameId);
        }
    };
}
/**
 * Resolves with an object of overflow side offsets that determine how much the
 * element is overflowing a given clipping boundary on each side.
 * - positive = overflowing the boundary by that number of pixels
 * - negative = how many pixels left before it will overflow
 * - 0 = lies flush with the boundary
 * @see https://floating-ui.com/docs/detectOverflow
 */ const detectOverflow1 = detectOverflow;
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset1 = offset;
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement1 = autoPlacement;
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift1 = shift;
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip1 = flip;
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size1 = size;
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide1 = hide;
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow1 = arrow;
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline1 = inline;
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift1 = limitShift;
/**
 * Computes the `x` and `y` coordinates that will place the floating element
 * next to a given reference element.
 */ const computePosition1 = (reference, floating, options)=>{
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
        platform,
        ...options
    };
    const platformWithCache = {
        ...mergedOptions.platform,
        _c: cache
    };
    return computePosition(reference, floating, {
        ...mergedOptions,
        platform: platformWithCache
    });
};
;
__turbopack_context__.s([
    "arrow",
    0,
    arrow1,
    "autoPlacement",
    0,
    autoPlacement1,
    "autoUpdate",
    0,
    autoUpdate,
    "computePosition",
    0,
    computePosition1,
    "flip",
    0,
    flip1,
    "hide",
    0,
    hide1,
    "inline",
    0,
    inline1,
    "limitShift",
    0,
    limitShift1,
    "offset",
    0,
    offset1,
    "platform",
    0,
    platform,
    "shift",
    0,
    shift1,
    "size",
    0,
    size1
], 78928);
// MERGED MODULE: [project]/node_modules/.pnpm/@floating-ui+react-dom@2.1._f1e75c639f17217fdb8333873ebffdf9/node_modules/@floating-ui/react-dom/dist/floating-ui.react-dom.mjs [app-client] (ecmascript) <locals>
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__98057__ = __turbopack_context__.i(98057);
;
;
;
;
;
var isClient = typeof document !== 'undefined';
var noop = function noop() {};
var index = isClient ? __TURBOPACK__imported__module__51268__["useLayoutEffect"] : noop;
// Fork of `fast-deep-equal` that only does the comparisons we need and compares
// functions
function deepEqual(a, b) {
    if (a === b) {
        return true;
    }
    if (typeof a !== typeof b) {
        return false;
    }
    if (typeof a === 'function' && a.toString() === b.toString()) {
        return true;
    }
    let length;
    let i;
    let keys;
    if (a && b && typeof a === 'object') {
        if (Array.isArray(a)) {
            length = a.length;
            if (length !== b.length) return false;
            for(i = length; i-- !== 0;){
                if (!deepEqual(a[i], b[i])) {
                    return false;
                }
            }
            return true;
        }
        keys = Object.keys(a);
        length = keys.length;
        if (length !== Object.keys(b).length) {
            return false;
        }
        for(i = length; i-- !== 0;){
            if (!({}).hasOwnProperty.call(b, keys[i])) {
                return false;
            }
        }
        for(i = length; i-- !== 0;){
            const key = keys[i];
            if (key === '_owner' && a.$$typeof) {
                continue;
            }
            if (!deepEqual(a[key], b[key])) {
                return false;
            }
        }
        return true;
    }
    return a !== a && b !== b;
}
function getDPR(element) {
    if (typeof window === 'undefined') {
        return 1;
    }
    const win = element.ownerDocument.defaultView || window;
    return win.devicePixelRatio || 1;
}
function roundByDPR(element, value) {
    const dpr = getDPR(element);
    return Math.round(value * dpr) / dpr;
}
function useLatestRef(value) {
    const ref = __TURBOPACK__imported__module__51268__["useRef"](value);
    index(()=>{
        ref.current = value;
    });
    return ref;
}
/**
 * Provides data to position a floating element.
 * @see https://floating-ui.com/docs/useFloating
 */ function useFloating(options) {
    if (options === void 0) {
        options = {};
    }
    const { placement = 'bottom', strategy = 'absolute', middleware = [], platform, elements: { reference: externalReference, floating: externalFloating } = {}, transform = true, whileElementsMounted, open } = options;
    const [data, setData] = __TURBOPACK__imported__module__51268__["useState"]({
        x: 0,
        y: 0,
        strategy,
        placement,
        middlewareData: {},
        isPositioned: false
    });
    const [latestMiddleware, setLatestMiddleware] = __TURBOPACK__imported__module__51268__["useState"](middleware);
    if (!deepEqual(latestMiddleware, middleware)) {
        setLatestMiddleware(middleware);
    }
    const [_reference, _setReference] = __TURBOPACK__imported__module__51268__["useState"](null);
    const [_floating, _setFloating] = __TURBOPACK__imported__module__51268__["useState"](null);
    const setReference = __TURBOPACK__imported__module__51268__["useCallback"]((node)=>{
        if (node !== referenceRef.current) {
            referenceRef.current = node;
            _setReference(node);
        }
    }, []);
    const setFloating = __TURBOPACK__imported__module__51268__["useCallback"]((node)=>{
        if (node !== floatingRef.current) {
            floatingRef.current = node;
            _setFloating(node);
        }
    }, []);
    const referenceEl = externalReference || _reference;
    const floatingEl = externalFloating || _floating;
    const referenceRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const floatingRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const dataRef = __TURBOPACK__imported__module__51268__["useRef"](data);
    const hasWhileElementsMounted = whileElementsMounted != null;
    const whileElementsMountedRef = useLatestRef(whileElementsMounted);
    const platformRef = useLatestRef(platform);
    const openRef = useLatestRef(open);
    const update = __TURBOPACK__imported__module__51268__["useCallback"](()=>{
        if (!referenceRef.current || !floatingRef.current) {
            return;
        }
        const config = {
            placement,
            strategy,
            middleware: latestMiddleware
        };
        if (platformRef.current) {
            config.platform = platformRef.current;
        }
        computePosition1(referenceRef.current, floatingRef.current, config).then((data)=>{
            const fullData = {
                ...data,
                // The floating element's position may be recomputed while it's closed
                // but still mounted (such as when transitioning out). To ensure
                // `isPositioned` will be `false` initially on the next open, avoid
                // setting it to `true` when `open === false` (must be specified).
                isPositioned: openRef.current !== false
            };
            if (isMountedRef.current && !deepEqual(dataRef.current, fullData)) {
                dataRef.current = fullData;
                __TURBOPACK__imported__module__98057__["flushSync"](()=>{
                    setData(fullData);
                });
            }
        });
    }, [
        latestMiddleware,
        placement,
        strategy,
        platformRef,
        openRef
    ]);
    index(()=>{
        if (open === false && dataRef.current.isPositioned) {
            dataRef.current.isPositioned = false;
            setData((data)=>({
                    ...data,
                    isPositioned: false
                }));
        }
    }, [
        open
    ]);
    const isMountedRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    index(()=>{
        isMountedRef.current = true;
        return ()=>{
            isMountedRef.current = false;
        };
    }, []);
    index(()=>{
        if (referenceEl) referenceRef.current = referenceEl;
        if (floatingEl) floatingRef.current = floatingEl;
        if (referenceEl && floatingEl) {
            if (whileElementsMountedRef.current) {
                return whileElementsMountedRef.current(referenceEl, floatingEl, update);
            }
            update();
        }
    }, [
        referenceEl,
        floatingEl,
        update,
        whileElementsMountedRef,
        hasWhileElementsMounted
    ]);
    const refs = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            reference: referenceRef,
            floating: floatingRef,
            setReference,
            setFloating
        }), [
        setReference,
        setFloating
    ]);
    const elements = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            reference: referenceEl,
            floating: floatingEl
        }), [
        referenceEl,
        floatingEl
    ]);
    const floatingStyles = __TURBOPACK__imported__module__51268__["useMemo"](()=>{
        const initialStyles = {
            position: strategy,
            left: 0,
            top: 0
        };
        if (!elements.floating) {
            return initialStyles;
        }
        const x = roundByDPR(elements.floating, data.x);
        const y = roundByDPR(elements.floating, data.y);
        if (transform) {
            return {
                ...initialStyles,
                transform: "translate(" + x + "px, " + y + "px)",
                ...getDPR(elements.floating) >= 1.5 && {
                    willChange: 'transform'
                }
            };
        }
        return {
            position: strategy,
            left: x,
            top: y
        };
    }, [
        strategy,
        transform,
        elements.floating,
        data.x,
        data.y
    ]);
    return __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            ...data,
            update,
            refs,
            elements,
            floatingStyles
        }), [
        data,
        update,
        refs,
        elements,
        floatingStyles
    ]);
}
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow$1 = (options)=>{
    function isRef(value) {
        return ({}).hasOwnProperty.call(value, 'current');
    }
    return {
        name: 'arrow',
        options,
        fn (state) {
            const { element, padding } = typeof options === 'function' ? options(state) : options;
            if (element && isRef(element)) {
                if (element.current != null) {
                    return arrow1({
                        element: element.current,
                        padding
                    }).fn(state);
                }
                return {};
            }
            if (element) {
                return arrow1({
                    element,
                    padding
                }).fn(state);
            }
            return {};
        }
    };
};
/**
 * Modifies the placement by translating the floating element along the
 * specified axes.
 * A number (shorthand for `mainAxis` or distance), or an axes configuration
 * object may be passed.
 * @see https://floating-ui.com/docs/offset
 */ const offset2 = (options, deps)=>{
    const result = offset1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Optimizes the visibility of the floating element by shifting it in order to
 * keep it in view when it will overflow the clipping boundary.
 * @see https://floating-ui.com/docs/shift
 */ const shift2 = (options, deps)=>{
    const result = shift1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Built-in `limiter` that will stop `shift()` at a certain point.
 */ const limitShift2 = (options, deps)=>{
    const result = limitShift1(options);
    return {
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Optimizes the visibility of the floating element by flipping the `placement`
 * in order to keep it in view when the preferred placement(s) will overflow the
 * clipping boundary. Alternative to `autoPlacement`.
 * @see https://floating-ui.com/docs/flip
 */ const flip2 = (options, deps)=>{
    const result = flip1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Provides data that allows you to change the size of the floating element —
 * for instance, prevent it from overflowing the clipping boundary or match the
 * width of the reference element.
 * @see https://floating-ui.com/docs/size
 */ const size2 = (options, deps)=>{
    const result = size1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Optimizes the visibility of the floating element by choosing the placement
 * that has the most space available automatically, without needing to specify a
 * preferred placement. Alternative to `flip`.
 * @see https://floating-ui.com/docs/autoPlacement
 */ const autoPlacement2 = (options, deps)=>{
    const result = autoPlacement1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Provides data to hide the floating element in applicable situations, such as
 * when it is not in the same clipping context as the reference element.
 * @see https://floating-ui.com/docs/hide
 */ const hide2 = (options, deps)=>{
    const result = hide1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Provides improved positioning for inline reference elements that can span
 * over multiple lines, such as hyperlinks or range selections.
 * @see https://floating-ui.com/docs/inline
 */ const inline2 = (options, deps)=>{
    const result = inline1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
/**
 * Provides data to position an inner element of the floating element so that it
 * appears centered to the reference element.
 * This wraps the core `arrow` middleware to allow React refs as the element.
 * @see https://floating-ui.com/docs/arrow
 */ const arrow2 = (options, deps)=>{
    const result = arrow$1(options);
    return {
        name: result.name,
        fn: result.fn,
        options: [
            options,
            deps
        ]
    };
};
;
__turbopack_context__.s([
    "flip",
    0,
    flip2,
    "hide",
    0,
    hide2,
    "limitShift",
    0,
    limitShift2,
    "offset",
    0,
    offset2,
    "shift",
    0,
    shift2,
    "size",
    0,
    size2,
    "useFloating",
    0,
    useFloating
], 34459);
}),
19080, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__70280__ = __turbopack_context__.i(70280);
var __TURBOPACK__imported__module__67452__ = __turbopack_context__.i(67452);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__9363__ = __turbopack_context__.i(9363);
var __TURBOPACK__imported__module__66380__ = __turbopack_context__.i(66380);
var __TURBOPACK__imported__module__37943__ = __turbopack_context__.i(37943);
'use client';
;
;
;
;
;
;
;
function useFloatingRootContext(options) {
    const { open = false, onOpenChange, elements = {} } = options;
    const floatingId = (0, __TURBOPACK__imported__module__70280__["useId"])();
    const nested = (0, __TURBOPACK__imported__module__9363__["useFloatingParentNodeId"])() != null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const store = (0, __TURBOPACK__imported__module__67452__["useRefWithInit"])(()=>new __TURBOPACK__imported__module__66380__["FloatingRootStore"]({
            open,
            transitionStatus: undefined,
            onOpenChange,
            referenceElement: elements.reference ?? null,
            floatingElement: elements.floating ?? null,
            triggerElements: new __TURBOPACK__imported__module__37943__["PopupTriggerMap"](),
            floatingId,
            syncOnly: false,
            nested
        })).current;
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        const valuesToSync = {
            open,
            floatingId
        };
        // Only sync elements that are defined to avoid overwriting existing ones
        if (elements.reference !== undefined) {
            valuesToSync.referenceElement = elements.reference;
            valuesToSync.domReferenceElement = (0, __TURBOPACK__imported__module__92615__["isElement"])(elements.reference) ? elements.reference : null;
        }
        if (elements.floating !== undefined) {
            valuesToSync.floatingElement = elements.floating;
        }
        store.update(valuesToSync);
    }, [
        open,
        floatingId,
        elements.reference,
        elements.floating,
        store
    ]);
    store.context.onOpenChange = onOpenChange;
    store.context.nested = nested;
    return store;
}
__turbopack_context__.s([
    "useFloatingRootContext",
    0,
    useFloatingRootContext
]);
}),
30044, 46619, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/useAnchorPositioning.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__41645__ = __turbopack_context__.i(41645);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__85182__ = __turbopack_context__.i(85182);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__58823__ = __turbopack_context__.i(58823);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__78928__ = __turbopack_context__.i(78928);
var __TURBOPACK__imported__module__34459__ = __turbopack_context__.i(34459);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useFloating.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__34459__1 = __TURBOPACK__imported__module__34459__;
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__91900__1 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__9363__ = __turbopack_context__.i(9363);
var __TURBOPACK__imported__module__19080__ = __turbopack_context__.i(19080);
'use client';
;
;
;
;
;
;
function useFloating(options = {}) {
    const { nodeId, externalTree } = options;
    const internalRootStore = (0, __TURBOPACK__imported__module__19080__["useFloatingRootContext"])(options);
    const rootContext = options.rootContext || internalRootStore;
    const rootContextElements = {
        reference: rootContext.useState('referenceElement'),
        floating: rootContext.useState('floatingElement'),
        domReference: rootContext.useState('domReferenceElement')
    };
    const [positionReference, setPositionReferenceRaw] = __TURBOPACK__imported__module__51268__1["useState"](null);
    const domReferenceRef = __TURBOPACK__imported__module__51268__1["useRef"](null);
    const tree = (0, __TURBOPACK__imported__module__9363__["useFloatingTree"])(externalTree);
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        if (rootContextElements.domReference) {
            domReferenceRef.current = rootContextElements.domReference;
        }
    }, [
        rootContextElements.domReference
    ]);
    const position = (0, __TURBOPACK__imported__module__34459__1["useFloating"])({
        ...options,
        elements: {
            ...rootContextElements,
            ...positionReference && {
                reference: positionReference
            }
        }
    });
    const setPositionReference = __TURBOPACK__imported__module__51268__1["useCallback"]((node)=>{
        const computedPositionReference = (0, __TURBOPACK__imported__module__92615__["isElement"])(node) ? {
            getBoundingClientRect: ()=>node.getBoundingClientRect(),
            getClientRects: ()=>node.getClientRects(),
            contextElement: node
        } : node;
        // Store the positionReference in state if the DOM reference is specified externally via the
        // `elements.reference` option. This ensures that it won't be overridden on future renders.
        setPositionReferenceRaw(computedPositionReference);
        position.refs.setReference(computedPositionReference);
    }, [
        position.refs
    ]);
    const [localDomReference, setLocalDomReference] = __TURBOPACK__imported__module__51268__1["useState"](undefined);
    const [localFloatingElement, setLocalFloatingElement] = __TURBOPACK__imported__module__51268__1["useState"](null);
    rootContext.useSyncedValue('referenceElement', localDomReference ?? null);
    const localDomReferenceElement = (0, __TURBOPACK__imported__module__92615__["isElement"])(localDomReference) ? localDomReference : null;
    rootContext.useSyncedValue('domReferenceElement', localDomReference === undefined ? rootContextElements.domReference : localDomReferenceElement);
    rootContext.useSyncedValue('floatingElement', localFloatingElement);
    const setReference = __TURBOPACK__imported__module__51268__1["useCallback"]((node)=>{
        if ((0, __TURBOPACK__imported__module__92615__["isElement"])(node) || node === null) {
            domReferenceRef.current = node;
            setLocalDomReference(node);
        }
        // Backwards-compatibility for passing a virtual element to `reference`
        // after it has set the DOM reference.
        if ((0, __TURBOPACK__imported__module__92615__["isElement"])(position.refs.reference.current) || position.refs.reference.current === null || // Don't allow setting virtual elements using the old technique back to
        // `null` to support `positionReference` + an unstable `reference`
        // callback ref.
        node !== null && !(0, __TURBOPACK__imported__module__92615__["isElement"])(node)) {
            position.refs.setReference(node);
        }
    }, [
        position.refs,
        setLocalDomReference
    ]);
    const setFloating = __TURBOPACK__imported__module__51268__1["useCallback"]((node)=>{
        setLocalFloatingElement(node);
        position.refs.setFloating(node);
    }, [
        position.refs
    ]);
    const refs = __TURBOPACK__imported__module__51268__1["useMemo"](()=>({
            ...position.refs,
            setReference,
            setFloating,
            setPositionReference,
            domReference: domReferenceRef
        }), [
        position.refs,
        setReference,
        setFloating,
        setPositionReference
    ]);
    const elements = __TURBOPACK__imported__module__51268__1["useMemo"](()=>({
            ...position.elements,
            domReference: rootContextElements.domReference
        }), [
        position.elements,
        rootContextElements.domReference
    ]);
    const open = rootContext.useState('open');
    const floatingId = rootContext.useState('floatingId');
    const context = __TURBOPACK__imported__module__51268__1["useMemo"](()=>({
            ...position,
            dataRef: rootContext.context.dataRef,
            open,
            onOpenChange: rootContext.setOpen,
            events: rootContext.context.events,
            floatingId,
            refs,
            elements,
            nodeId,
            rootStore: rootContext
        }), [
        position,
        refs,
        elements,
        nodeId,
        rootContext,
        open,
        floatingId
    ]);
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        rootContext.context.dataRef.current.floatingContext = context;
        const node = tree?.nodesRef.current.find((n)=>n.id === nodeId);
        if (node) {
            node.context = context;
        }
    });
    return __TURBOPACK__imported__module__51268__1["useMemo"](()=>({
            ...position,
            context,
            refs,
            elements,
            rootStore: rootContext
        }), [
        position,
        refs,
        elements,
        context,
        rootContext
    ]);
}
var __TURBOPACK__imported__module__25909__ = __turbopack_context__.i(25909);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/middleware/arrow.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__41645__1 = __TURBOPACK__imported__module__41645__;
;
const baseArrow = (options)=>({
        name: 'arrow',
        options,
        async fn (state) {
            const { x, y, placement, rects, platform, elements, middlewareData } = state;
            // Since `element` is required, we don't Partial<> the type.
            const { element, padding = 0, offsetParent = 'real' } = (0, __TURBOPACK__imported__module__41645__1["evaluate"])(options, state) || {};
            if (element == null) {
                return {};
            }
            const paddingObject = (0, __TURBOPACK__imported__module__41645__1["getPaddingObject"])(padding);
            const coords = {
                x,
                y
            };
            const axis = (0, __TURBOPACK__imported__module__41645__1["getAlignmentAxis"])(placement);
            const length = (0, __TURBOPACK__imported__module__41645__1["getAxisLength"])(axis);
            const arrowDimensions = await platform.getDimensions(element);
            const isYAxis = axis === 'y';
            const minProp = isYAxis ? 'top' : 'left';
            const maxProp = isYAxis ? 'bottom' : 'right';
            const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
            const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
            const startDiff = coords[axis] - rects.reference[axis];
            const arrowOffsetParent = offsetParent === 'real' ? await platform.getOffsetParent?.(element) : elements.floating;
            let clientSize = elements.floating[clientProp] || rects.floating[length];
            // DOM platform can return `window` as the `offsetParent`.
            if (!clientSize || !await platform.isElement?.(arrowOffsetParent)) {
                clientSize = elements.floating[clientProp] || rects.floating[length];
            }
            const centerToReference = endDiff / 2 - startDiff / 2;
            // If the padding is large enough that it causes the arrow to no longer be
            // centered, modify the padding so that it is centered.
            const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
            const minPadding = Math.min(paddingObject[minProp], largestPossiblePadding);
            const maxPadding = Math.min(paddingObject[maxProp], largestPossiblePadding);
            // Make sure the arrow doesn't overflow the floating element if the center
            // point is outside the floating element's bounds.
            const min = minPadding;
            const max = clientSize - arrowDimensions[length] - maxPadding;
            const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
            const offset = (0, __TURBOPACK__imported__module__41645__1["clamp"])(min, center, max);
            // If the reference is small enough that the arrow's padding causes it to
            // to point to nothing for an aligned placement, adjust the offset of the
            // floating element itself. To ensure `shift()` continues to take action,
            // a single reset is performed when this is true.
            const shouldAddOffset = !middlewareData.arrow && (0, __TURBOPACK__imported__module__41645__1["getAlignment"])(placement) != null && center !== offset && rects.reference[length] / 2 - (center < min ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
            // eslint-disable-next-line no-nested-ternary
            const alignmentOffset = shouldAddOffset ? center < min ? center - min : center - max : 0;
            return {
                [axis]: coords[axis] + alignmentOffset,
                data: {
                    [axis]: offset,
                    centerOffset: center - offset - alignmentOffset,
                    ...shouldAddOffset && {
                        alignmentOffset
                    }
                },
                reset: shouldAddOffset
            };
        }
    });
const arrow = (options, deps)=>({
        ...baseArrow(options),
        options: [
            options,
            deps
        ]
    });
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/hideMiddleware.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__34459__2 = __TURBOPACK__imported__module__34459__;
;
const hide = {
    name: 'hide',
    async fn (state) {
        const { width, height, x, y } = state.rects.reference;
        const anchorHidden = width === 0 && height === 0 && x === 0 && y === 0;
        const nativeHideResult = await (0, __TURBOPACK__imported__module__34459__2["hide"])().fn(state);
        return {
            data: {
                referenceHidden: nativeHideResult.data?.referenceHidden || anchorHidden
            }
        };
    }
};
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/utils/adaptiveOriginMiddleware.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__41352__1 = __TURBOPACK__imported__module__41352__;
var __TURBOPACK__imported__module__85182__1 = __TURBOPACK__imported__module__85182__;
var __TURBOPACK__imported__module__41645__2 = __TURBOPACK__imported__module__41645__;
;
;
const DEFAULT_SIDES = {
    sideX: 'left',
    sideY: 'top'
};
const adaptiveOrigin = {
    name: 'adaptiveOrigin',
    async fn (state) {
        const { x: rawX, y: rawY, rects: { floating: floatRect }, elements: { floating }, platform, strategy, placement } = state;
        const win = (0, __TURBOPACK__imported__module__85182__1["ownerWindow"])(floating);
        const styles = win.getComputedStyle(floating);
        const hasTransition = styles.transitionDuration !== '0s' && styles.transitionDuration !== '';
        if (!hasTransition) {
            return {
                x: rawX,
                y: rawY,
                data: DEFAULT_SIDES
            };
        }
        const offsetParent = await platform.getOffsetParent?.(floating);
        let offsetDimensions = {
            width: 0,
            height: 0
        };
        // For fixed strategy, prefer visualViewport if available
        if (strategy === 'fixed' && win?.visualViewport) {
            offsetDimensions = {
                width: win.visualViewport.width,
                height: win.visualViewport.height
            };
        } else if (offsetParent === win) {
            const doc = (0, __TURBOPACK__imported__module__41352__1["ownerDocument"])(floating);
            offsetDimensions = {
                width: doc.documentElement.clientWidth,
                height: doc.documentElement.clientHeight
            };
        } else if (await platform.isElement?.(offsetParent)) {
            offsetDimensions = await platform.getDimensions(offsetParent);
        }
        const currentSide = (0, __TURBOPACK__imported__module__41645__2["getSide"])(placement);
        let x = rawX;
        let y = rawY;
        if (currentSide === 'left') {
            x = offsetDimensions.width - (rawX + floatRect.width);
        }
        if (currentSide === 'top') {
            y = offsetDimensions.height - (rawY + floatRect.height);
        }
        const sideX = currentSide === 'left' ? 'right' : DEFAULT_SIDES.sideX;
        const sideY = currentSide === 'top' ? 'bottom' : DEFAULT_SIDES.sideY;
        return {
            x,
            y,
            data: {
                sideX,
                sideY
            }
        };
    }
};
__turbopack_context__.s([
    "DEFAULT_SIDES",
    0,
    DEFAULT_SIDES,
    "adaptiveOrigin",
    0,
    adaptiveOrigin
], 46619);
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
function getLogicalSide(sideParam, renderedSide, isRtl) {
    const isLogicalSideParam = sideParam === 'inline-start' || sideParam === 'inline-end';
    const logicalRight = isRtl ? 'inline-start' : 'inline-end';
    const logicalLeft = isRtl ? 'inline-end' : 'inline-start';
    return ({
        top: 'top',
        right: isLogicalSideParam ? logicalRight : 'right',
        bottom: 'bottom',
        left: isLogicalSideParam ? logicalLeft : 'left'
    })[renderedSide];
}
function getOffsetData(state, sideParam, isRtl) {
    const { rects, placement } = state;
    const data = {
        side: getLogicalSide(sideParam, (0, __TURBOPACK__imported__module__41645__["getSide"])(placement), isRtl),
        align: (0, __TURBOPACK__imported__module__41645__["getAlignment"])(placement) || 'center',
        anchor: {
            width: rects.reference.width,
            height: rects.reference.height
        },
        positioner: {
            width: rects.floating.width,
            height: rects.floating.height
        }
    };
    return data;
}
function useAnchorPositioning(params) {
    const { // Public parameters
    anchor, positionMethod = 'absolute', side: sideParam = 'bottom', sideOffset = 0, align = 'center', alignOffset = 0, collisionBoundary, collisionPadding: collisionPaddingParam = 5, sticky = false, arrowPadding = 5, disableAnchorTracking = false, // Private parameters
    keepMounted = false, floatingRootContext, mounted, collisionAvoidance, shiftCrossAxis = false, nodeId, adaptiveOrigin, lazyFlip = false, externalTree } = params;
    const [mountSide, setMountSide] = __TURBOPACK__imported__module__51268__["useState"](null);
    if (!mounted && mountSide !== null) {
        setMountSide(null);
    }
    const collisionAvoidanceSide = collisionAvoidance.side || 'flip';
    const collisionAvoidanceAlign = collisionAvoidance.align || 'flip';
    const collisionAvoidanceFallbackAxisSide = collisionAvoidance.fallbackAxisSide || 'end';
    const anchorFn = typeof anchor === 'function' ? anchor : undefined;
    const anchorFnCallback = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(anchorFn);
    const anchorDep = anchorFn ? anchorFnCallback : anchor;
    const anchorValueRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(anchor);
    const mountedRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(mounted);
    const direction = (0, __TURBOPACK__imported__module__25909__["useDirection"])();
    const isRtl = direction === 'rtl';
    const side = mountSide || ({
        top: 'top',
        right: 'right',
        bottom: 'bottom',
        left: 'left',
        'inline-end': isRtl ? 'left' : 'right',
        'inline-start': isRtl ? 'right' : 'left'
    })[sideParam];
    const placement = align === 'center' ? side : `${side}-${align}`;
    let collisionPadding = collisionPaddingParam;
    // Create a bias to the preferred side.
    // On iOS, when the mobile software keyboard opens, the input is exactly centered
    // in the viewport, but this can cause it to flip to the top undesirably.
    const bias = 1;
    const biasTop = sideParam === 'bottom' ? bias : 0;
    const biasBottom = sideParam === 'top' ? bias : 0;
    const biasLeft = sideParam === 'right' ? bias : 0;
    const biasRight = sideParam === 'left' ? bias : 0;
    if (typeof collisionPadding === 'number') {
        collisionPadding = {
            top: collisionPadding + biasTop,
            right: collisionPadding + biasRight,
            bottom: collisionPadding + biasBottom,
            left: collisionPadding + biasLeft
        };
    } else if (collisionPadding) {
        collisionPadding = {
            top: (collisionPadding.top || 0) + biasTop,
            right: (collisionPadding.right || 0) + biasRight,
            bottom: (collisionPadding.bottom || 0) + biasBottom,
            left: (collisionPadding.left || 0) + biasLeft
        };
    }
    const commonCollisionProps = {
        boundary: collisionBoundary === 'clipping-ancestors' ? 'clippingAncestors' : collisionBoundary,
        padding: collisionPadding
    };
    // Using a ref assumes that the arrow element is always present in the DOM for the lifetime of the
    // popup. If this assumption ends up being false, we can switch to state to manage the arrow's
    // presence.
    const arrowRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    // Keep these reactive if they're not functions
    const sideOffsetRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(sideOffset);
    const alignOffsetRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(alignOffset);
    const sideOffsetDep = typeof sideOffset !== 'function' ? sideOffset : 0;
    const alignOffsetDep = typeof alignOffset !== 'function' ? alignOffset : 0;
    const middleware = [
        (0, __TURBOPACK__imported__module__34459__["offset"])((state)=>{
            const data = getOffsetData(state, sideParam, isRtl);
            const sideAxis = typeof sideOffsetRef.current === 'function' ? sideOffsetRef.current(data) : sideOffsetRef.current;
            const alignAxis = typeof alignOffsetRef.current === 'function' ? alignOffsetRef.current(data) : alignOffsetRef.current;
            return {
                mainAxis: sideAxis,
                crossAxis: alignAxis,
                alignmentAxis: alignAxis
            };
        }, [
            sideOffsetDep,
            alignOffsetDep,
            isRtl,
            sideParam
        ])
    ];
    const shiftDisabled = collisionAvoidanceAlign === 'none' && collisionAvoidanceSide !== 'shift';
    const crossAxisShiftEnabled = !shiftDisabled && (sticky || shiftCrossAxis || collisionAvoidanceSide === 'shift');
    const flipMiddleware = collisionAvoidanceSide === 'none' ? null : (0, __TURBOPACK__imported__module__34459__["flip"])({
        ...commonCollisionProps,
        // Ensure the popup flips if it's been limited by its --available-height and it resizes.
        // Since the size() padding is smaller than the flip() padding, flip() will take precedence.
        padding: {
            top: collisionPadding.top + bias,
            right: collisionPadding.right + bias,
            bottom: collisionPadding.bottom + bias,
            left: collisionPadding.left + bias
        },
        mainAxis: !shiftCrossAxis && collisionAvoidanceSide === 'flip',
        crossAxis: collisionAvoidanceAlign === 'flip' ? 'alignment' : false,
        fallbackAxisSideDirection: collisionAvoidanceFallbackAxisSide
    });
    const shiftMiddleware = shiftDisabled ? null : (0, __TURBOPACK__imported__module__34459__["shift"])((data)=>{
        const html = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(data.elements.floating).documentElement;
        return {
            ...commonCollisionProps,
            // Use the Layout Viewport to avoid shifting around when pinch-zooming
            // for context menus.
            rootBoundary: shiftCrossAxis ? {
                x: 0,
                y: 0,
                width: html.clientWidth,
                height: html.clientHeight
            } : undefined,
            mainAxis: collisionAvoidanceAlign !== 'none',
            crossAxis: crossAxisShiftEnabled,
            limiter: sticky || shiftCrossAxis ? undefined : (0, __TURBOPACK__imported__module__34459__["limitShift"])((limitData)=>{
                if (!arrowRef.current) {
                    return {};
                }
                const { width, height } = arrowRef.current.getBoundingClientRect();
                const sideAxis = (0, __TURBOPACK__imported__module__41645__["getSideAxis"])((0, __TURBOPACK__imported__module__41645__["getSide"])(limitData.placement));
                const arrowSize = sideAxis === 'y' ? width : height;
                const offsetAmount = sideAxis === 'y' ? collisionPadding.left + collisionPadding.right : collisionPadding.top + collisionPadding.bottom;
                return {
                    offset: arrowSize / 2 + offsetAmount / 2
                };
            })
        };
    }, [
        commonCollisionProps,
        sticky,
        shiftCrossAxis,
        collisionPadding,
        collisionAvoidanceAlign
    ]);
    // https://floating-ui.com/docs/flip#combining-with-shift
    if (collisionAvoidanceSide === 'shift' || collisionAvoidanceAlign === 'shift' || align === 'center') {
        middleware.push(shiftMiddleware, flipMiddleware);
    } else {
        middleware.push(flipMiddleware, shiftMiddleware);
    }
    middleware.push((0, __TURBOPACK__imported__module__34459__["size"])({
        ...commonCollisionProps,
        apply ({ elements: { floating }, availableWidth, availableHeight, rects }) {
            if (!mountedRef.current) {
                return;
            }
            const floatingStyle = floating.style;
            floatingStyle.setProperty('--available-width', `${availableWidth}px`);
            floatingStyle.setProperty('--available-height', `${availableHeight}px`);
            // Snap anchor dimensions to device pixels to ensure the popup's visual width matches the anchor's one.
            const dpr = (0, __TURBOPACK__imported__module__85182__["ownerWindow"])(floating).devicePixelRatio || 1;
            const { x, y, width, height } = rects.reference;
            const anchorWidth = (Math.round((x + width) * dpr) - Math.round(x * dpr)) / dpr;
            const anchorHeight = (Math.round((y + height) * dpr) - Math.round(y * dpr)) / dpr;
            floatingStyle.setProperty('--anchor-width', `${anchorWidth}px`);
            floatingStyle.setProperty('--anchor-height', `${anchorHeight}px`);
        }
    }), arrow(()=>({
            // `transform-origin` calculations rely on an element existing. If the arrow hasn't been set,
            // we'll create a fake element.
            element: arrowRef.current || (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(arrowRef.current).createElement('div'),
            padding: arrowPadding,
            offsetParent: 'floating'
        }), [
        arrowPadding
    ]), {
        name: 'transformOrigin',
        fn (state) {
            const { elements, middlewareData, placement: renderedPlacement, rects, y } = state;
            const currentRenderedSide = (0, __TURBOPACK__imported__module__41645__["getSide"])(renderedPlacement);
            const currentRenderedAxis = (0, __TURBOPACK__imported__module__41645__["getSideAxis"])(currentRenderedSide);
            const arrowEl = arrowRef.current;
            const arrowX = middlewareData.arrow?.x || 0;
            const arrowY = middlewareData.arrow?.y || 0;
            const arrowWidth = arrowEl?.clientWidth || 0;
            const arrowHeight = arrowEl?.clientHeight || 0;
            const transformX = arrowX + arrowWidth / 2;
            const transformY = arrowY + arrowHeight / 2;
            const shiftY = Math.abs(middlewareData.shift?.y || 0);
            const halfAnchorHeight = rects.reference.height / 2;
            const sideOffsetValue = typeof sideOffset === 'function' ? sideOffset(getOffsetData(state, sideParam, isRtl)) : sideOffset;
            const isOverlappingAnchor = shiftY > sideOffsetValue;
            const adjacentTransformOrigin = {
                top: `${transformX}px calc(100% + ${sideOffsetValue}px)`,
                bottom: `${transformX}px ${-sideOffsetValue}px`,
                left: `calc(100% + ${sideOffsetValue}px) ${transformY}px`,
                right: `${-sideOffsetValue}px ${transformY}px`
            }[currentRenderedSide];
            const overlapTransformOrigin = `${transformX}px ${rects.reference.y + halfAnchorHeight - y}px`;
            elements.floating.style.setProperty('--transform-origin', crossAxisShiftEnabled && currentRenderedAxis === 'y' && isOverlappingAnchor ? overlapTransformOrigin : adjacentTransformOrigin);
            return {};
        }
    }, hide, adaptiveOrigin);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        // Ensure positioning doesn't run initially for `keepMounted` elements that
        // aren't initially open.
        if (!mounted && floatingRootContext) {
            floatingRootContext.update({
                referenceElement: null,
                floatingElement: null,
                domReferenceElement: null,
                positionReference: null
            });
        }
    }, [
        mounted,
        floatingRootContext
    ]);
    const autoUpdateOptions = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            elementResize: !disableAnchorTracking && typeof ResizeObserver !== 'undefined',
            layoutShift: !disableAnchorTracking && typeof IntersectionObserver !== 'undefined'
        }), [
        disableAnchorTracking
    ]);
    const { refs, elements, x, y, middlewareData, update, placement: renderedPlacement, context, isPositioned, floatingStyles: originalFloatingStyles } = useFloating({
        rootContext: floatingRootContext,
        open: keepMounted ? mounted : undefined,
        placement,
        middleware,
        strategy: positionMethod,
        whileElementsMounted: keepMounted ? undefined : (...args)=>(0, __TURBOPACK__imported__module__78928__["autoUpdate"])(...args, autoUpdateOptions),
        nodeId,
        externalTree
    });
    const { sideX, sideY } = middlewareData.adaptiveOrigin || DEFAULT_SIDES;
    // Default to `fixed` when not positioned to prevent `autoFocus` scroll jumps.
    // This ensures the popup is inside the viewport initially before it gets positioned.
    const resolvedPosition = isPositioned ? positionMethod : 'fixed';
    const floatingStyles = __TURBOPACK__imported__module__51268__["useMemo"](()=>{
        const base = adaptiveOrigin ? {
            position: resolvedPosition,
            [sideX]: x,
            [sideY]: y
        } : {
            position: resolvedPosition,
            ...originalFloatingStyles
        };
        if (!isPositioned) {
            base.opacity = 0;
        }
        return base;
    }, [
        adaptiveOrigin,
        resolvedPosition,
        sideX,
        x,
        sideY,
        y,
        originalFloatingStyles,
        isPositioned
    ]);
    const registeredPositionReferenceRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!mounted) {
            return;
        }
        const anchorValue = anchorValueRef.current;
        const resolvedAnchor = typeof anchorValue === 'function' ? anchorValue() : anchorValue;
        const unwrappedElement = (isRef(resolvedAnchor) ? resolvedAnchor.current : resolvedAnchor) || null;
        const finalAnchor = unwrappedElement || null;
        if (finalAnchor !== registeredPositionReferenceRef.current) {
            refs.setPositionReference(finalAnchor);
            registeredPositionReferenceRef.current = finalAnchor;
        }
    }, [
        mounted,
        refs,
        anchorDep,
        anchorValueRef
    ]);
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (!mounted) {
            return;
        }
        const anchorValue = anchorValueRef.current;
        // Refs from parent components are set after useLayoutEffect runs and are available in useEffect.
        // Therefore, if the anchor is a ref, we need to update the position reference in useEffect.
        if (typeof anchorValue === 'function') {
            return;
        }
        if (isRef(anchorValue) && anchorValue.current !== registeredPositionReferenceRef.current) {
            refs.setPositionReference(anchorValue.current);
            registeredPositionReferenceRef.current = anchorValue.current;
        }
    }, [
        mounted,
        refs,
        anchorDep,
        anchorValueRef
    ]);
    __TURBOPACK__imported__module__51268__["useEffect"](()=>{
        if (keepMounted && mounted && elements.domReference && elements.floating) {
            return (0, __TURBOPACK__imported__module__78928__["autoUpdate"])(elements.domReference, elements.floating, update, autoUpdateOptions);
        }
        return undefined;
    }, [
        keepMounted,
        mounted,
        elements,
        update,
        autoUpdateOptions
    ]);
    const renderedSide = (0, __TURBOPACK__imported__module__41645__["getSide"])(renderedPlacement);
    const logicalRenderedSide = getLogicalSide(sideParam, renderedSide, isRtl);
    const renderedAlign = (0, __TURBOPACK__imported__module__41645__["getAlignment"])(renderedPlacement) || 'center';
    const anchorHidden = Boolean(middlewareData.hide?.referenceHidden);
    /**
   * Locks the flip (makes it "sticky") so it doesn't prefer a given placement
   * and flips back lazily, not eagerly. Ideal for filtered lists that change
   * the size of the popup dynamically to avoid unwanted flipping when typing.
   */ (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (lazyFlip && mounted && isPositioned) {
            setMountSide(renderedSide);
        }
    }, [
        lazyFlip,
        mounted,
        isPositioned,
        renderedSide
    ]);
    const arrowStyles = __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            position: 'absolute',
            top: middlewareData.arrow?.y,
            left: middlewareData.arrow?.x
        }), [
        middlewareData.arrow
    ]);
    const arrowUncentered = middlewareData.arrow?.centerOffset !== 0;
    return __TURBOPACK__imported__module__51268__["useMemo"](()=>({
            positionerStyles: floatingStyles,
            arrowStyles,
            arrowRef,
            arrowUncentered,
            side: logicalRenderedSide,
            align: renderedAlign,
            physicalSide: renderedSide,
            anchorHidden,
            refs,
            context,
            isPositioned,
            update
        }), [
        floatingStyles,
        arrowStyles,
        arrowRef,
        arrowUncentered,
        logicalRenderedSide,
        renderedAlign,
        renderedSide,
        anchorHidden,
        refs,
        context,
        isPositioned,
        update
    ]);
}
function isRef(param) {
    return param != null && 'current' in param;
}
__turbopack_context__.s([
    "useAnchorPositioning",
    0,
    useAnchorPositioning
], 30044);
}),
51404, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__30211__ = __turbopack_context__.i(30211);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
var __TURBOPACK__imported__module__85211__ = __turbopack_context__.i(85211);
'use client';
;
;
;
function usePositioner(componentProps, state, { styles, transitionStatus, props, refs, hidden, inert = false }) {
    const style = {
        ...styles
    };
    if (inert) {
        style.pointerEvents = 'none';
    }
    return (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('div', componentProps, {
        state,
        ref: refs,
        props: [
            {
                role: 'presentation',
                hidden,
                style
            },
            (0, __TURBOPACK__imported__module__85211__["getDisabledMountTransitionStyles"])(transitionStatus),
            props
        ],
        stateAttributesMapping: __TURBOPACK__imported__module__30211__["popupStateMapping"]
    });
}
__turbopack_context__.s([
    "usePositioner",
    0,
    usePositioner
]);
}),
48748, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__28376__ = __turbopack_context__.i(28376);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
'use client';
;
;
;
;
// Touch-opened popups normally avoid scroll locking so users can still swipe outside to dismiss.
// This hook re-enables scroll lock only when the popup is effectively full-width.
// Treat popups with up to 20px of total horizontal gutter as full-width so common ~10px side
// padding still locks scroll, since that leaves too little outside space for a reliable swipe.
const VIEWPORT_WIDTH_TOLERANCE_PX = 20;
function useAnchoredPopupScrollLock(enabled, touchOpen, positionerElement, referenceElement) {
    const [touchOpenShouldLockScroll, setTouchOpenShouldLockScroll] = __TURBOPACK__imported__module__51268__["useState"](false);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!enabled || !touchOpen || positionerElement == null) {
            setTouchOpenShouldLockScroll(false);
            return;
        }
        const viewportWidth = (0, __TURBOPACK__imported__module__41352__["ownerDocument"])(positionerElement).documentElement.clientWidth;
        const popupWidth = positionerElement.offsetWidth;
        setTouchOpenShouldLockScroll(viewportWidth > 0 && popupWidth > 0 && popupWidth >= viewportWidth - VIEWPORT_WIDTH_TOLERANCE_PX);
    }, [
        enabled,
        touchOpen,
        positionerElement
    ]);
    (0, __TURBOPACK__imported__module__28376__["useScrollLock"])(enabled && (!touchOpen || touchOpenShouldLockScroll), referenceElement);
}
__turbopack_context__.s([
    "useAnchoredPopupScrollLock",
    0,
    useAnchoredPopupScrollLock
]);
}),
84287, 4496, 
((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useListNavigation.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__92615__ = __turbopack_context__.i(92615);
var __TURBOPACK__imported__module__58823__ = __turbopack_context__.i(58823);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__41352__ = __turbopack_context__.i(41352);
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
var __TURBOPACK__imported__module__52881__ = __turbopack_context__.i(52881);
var __TURBOPACK__imported__module__56870__ = __turbopack_context__.i(56870);
var __TURBOPACK__imported__module__21922__ = __turbopack_context__.i(21922);
var __TURBOPACK__imported__module__9363__ = __turbopack_context__.i(9363);
var __TURBOPACK__imported__module__34409__ = __turbopack_context__.i(34409);
var __TURBOPACK__imported__module__93719__ = __turbopack_context__.i(93719);
var __TURBOPACK__imported__module__59464__ = __turbopack_context__.i(59464);
var __TURBOPACK__imported__module__83306__ = __turbopack_context__.i(83306);
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
const ESCAPE = 'Escape';
function doSwitch(orientation, vertical, horizontal) {
    switch(orientation){
        case 'vertical':
            return vertical;
        case 'horizontal':
            return horizontal;
        default:
            return vertical || horizontal;
    }
}
function isMainOrientationKey(key, orientation) {
    const vertical = key === __TURBOPACK__imported__module__83306__["ARROW_UP"] || key === __TURBOPACK__imported__module__83306__["ARROW_DOWN"];
    const horizontal = key === __TURBOPACK__imported__module__83306__["ARROW_LEFT"] || key === __TURBOPACK__imported__module__83306__["ARROW_RIGHT"];
    return doSwitch(orientation, vertical, horizontal);
}
function isMainOrientationToEndKey(key, orientation, rtl) {
    const vertical = key === __TURBOPACK__imported__module__83306__["ARROW_DOWN"];
    const horizontal = rtl ? key === __TURBOPACK__imported__module__83306__["ARROW_LEFT"] : key === __TURBOPACK__imported__module__83306__["ARROW_RIGHT"];
    return doSwitch(orientation, vertical, horizontal) || key === 'Enter' || key === ' ' || key === '';
}
function isCrossOrientationOpenKey(key, orientation, rtl) {
    const vertical = rtl ? key === __TURBOPACK__imported__module__83306__["ARROW_LEFT"] : key === __TURBOPACK__imported__module__83306__["ARROW_RIGHT"];
    const horizontal = key === __TURBOPACK__imported__module__83306__["ARROW_DOWN"];
    return doSwitch(orientation, vertical, horizontal);
}
function isCrossOrientationCloseKey(key, orientation, rtl, cols) {
    const vertical = rtl ? key === __TURBOPACK__imported__module__83306__["ARROW_RIGHT"] : key === __TURBOPACK__imported__module__83306__["ARROW_LEFT"];
    const horizontal = key === __TURBOPACK__imported__module__83306__["ARROW_UP"];
    if (orientation === 'both' || orientation === 'horizontal' && cols && cols > 1) {
        return key === ESCAPE;
    }
    return doSwitch(orientation, vertical, horizontal);
}
function useListNavigation(context, props) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const open = store.useState('open');
    const floatingElement = store.useState('floatingElement');
    const domReferenceElement = store.useState('domReferenceElement');
    const dataRef = store.context.dataRef;
    const { listRef, activeIndex, onNavigate: onNavigateProp = ()=>{}, enabled = true, selectedIndex = null, allowEscape = false, loopFocus = false, nested = false, rtl = false, virtual = false, focusItemOnOpen = 'auto', focusItemOnHover = true, openOnArrowKeyDown = true, disabledIndices = undefined, orientation = 'vertical', parentOrientation, cols = 1, id, resetOnPointerLeave = true, externalTree } = props;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const floatingFocusElement = (0, __TURBOPACK__imported__module__52881__["getFloatingFocusElement"])(floatingElement);
    const floatingFocusElementRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(floatingFocusElement);
    const parentId = (0, __TURBOPACK__imported__module__9363__["useFloatingParentNodeId"])();
    const tree = (0, __TURBOPACK__imported__module__9363__["useFloatingTree"])(externalTree);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        dataRef.current.orientation = orientation;
    }, [
        dataRef,
        orientation
    ]);
    const typeableComboboxReference = (0, __TURBOPACK__imported__module__52881__["isTypeableCombobox"])(domReferenceElement);
    const focusItemOnOpenRef = __TURBOPACK__imported__module__51268__["useRef"](focusItemOnOpen);
    const indexRef = __TURBOPACK__imported__module__51268__["useRef"](selectedIndex ?? -1);
    const keyRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const isPointerModalityRef = __TURBOPACK__imported__module__51268__["useRef"](true);
    const onNavigate = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((event)=>{
        onNavigateProp(indexRef.current === -1 ? null : indexRef.current, event);
    });
    const previousOnNavigateRef = __TURBOPACK__imported__module__51268__["useRef"](onNavigate);
    const previousMountedRef = __TURBOPACK__imported__module__51268__["useRef"](!!floatingElement);
    const previousOpenRef = __TURBOPACK__imported__module__51268__["useRef"](open);
    const forceSyncFocusRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const forceScrollIntoViewRef = __TURBOPACK__imported__module__51268__["useRef"](false);
    const cancelQueuedFocusRef = __TURBOPACK__imported__module__51268__["useRef"](null);
    const disabledIndicesRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(disabledIndices);
    const latestOpenRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(open);
    const selectedIndexRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(selectedIndex);
    const resetOnPointerLeaveRef = (0, __TURBOPACK__imported__module__58823__["useValueAsRef"])(resetOnPointerLeave);
    const focusItem = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])(()=>{
        function runFocus(item) {
            if (virtual) {
                tree?.events.emit('virtualfocus', item);
            } else {
                cancelQueuedFocusRef.current = (0, __TURBOPACK__imported__module__59464__["enqueueFocus"])(item, {
                    sync: forceSyncFocusRef.current,
                    preventScroll: true
                });
            }
        }
        const initialItem = listRef.current[indexRef.current];
        const forceScrollIntoView = forceScrollIntoViewRef.current;
        if (initialItem) {
            runFocus(initialItem);
        }
        const scheduler = forceSyncFocusRef.current ? (v)=>v() : requestAnimationFrame;
        scheduler(()=>{
            const waitedItem = listRef.current[indexRef.current] || initialItem;
            if (!waitedItem) {
                return;
            }
            if (!initialItem) {
                runFocus(waitedItem);
            }
            const shouldScrollIntoView = // eslint-disable-next-line @typescript-eslint/no-use-before-define
            item && (forceScrollIntoView || !isPointerModalityRef.current);
            if (shouldScrollIntoView) {
                // JSDOM doesn't support `.scrollIntoView()` but it's widely supported
                // by all browsers.
                waitedItem.scrollIntoView?.({
                    block: 'nearest',
                    inline: 'nearest'
                });
            }
        });
    });
    // Sync `selectedIndex` to be the `activeIndex` upon opening the floating
    // element. Also, reset `activeIndex` upon closing the floating element.
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!enabled) {
            return;
        }
        if (open && floatingElement) {
            indexRef.current = selectedIndex ?? -1;
            if (focusItemOnOpenRef.current && selectedIndex != null) {
                // Regardless of the pointer modality, we want to ensure the selected
                // item comes into view when the floating element is opened.
                forceScrollIntoViewRef.current = true;
                onNavigate();
            }
        } else if (previousMountedRef.current) {
            // Since the user can specify `onNavigate` conditionally
            // (onNavigate: open ? setActiveIndex : setSelectedIndex),
            // we store and call the previous function.
            indexRef.current = -1;
            previousOnNavigateRef.current();
        }
    }, [
        enabled,
        open,
        floatingElement,
        selectedIndex,
        onNavigate
    ]);
    // Sync `activeIndex` to be the focused item while the floating element is
    // open.
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!enabled) {
            return;
        }
        if (!open) {
            forceSyncFocusRef.current = false;
            return;
        }
        if (!floatingElement) {
            return;
        }
        if (activeIndex == null) {
            forceSyncFocusRef.current = false;
            if (selectedIndexRef.current != null) {
                return;
            }
            // Reset while the floating element was open (e.g. the list changed).
            if (previousMountedRef.current) {
                indexRef.current = -1;
                focusItem();
            }
            // Initial sync.
            if ((!previousOpenRef.current || !previousMountedRef.current) && focusItemOnOpenRef.current && (keyRef.current != null || focusItemOnOpenRef.current === true && keyRef.current == null)) {
                let runs = 0;
                const waitForListPopulated = ()=>{
                    if (listRef.current[0] == null) {
                        // Avoid letting the browser paint if possible on the first try,
                        // otherwise use rAF. Don't try more than twice, since something
                        // is wrong otherwise.
                        if (runs < 2) {
                            const scheduler = runs ? requestAnimationFrame : queueMicrotask;
                            scheduler(waitForListPopulated);
                        }
                        runs += 1;
                    } else {
                        // initially focus the first non-disabled item
                        indexRef.current = keyRef.current == null || isMainOrientationToEndKey(keyRef.current, orientation, rtl) || nested ? (0, __TURBOPACK__imported__module__21922__["getMinListIndex"])(listRef) : (0, __TURBOPACK__imported__module__21922__["getMaxListIndex"])(listRef);
                        keyRef.current = null;
                        onNavigate();
                    }
                };
                waitForListPopulated();
            }
        } else if (!(0, __TURBOPACK__imported__module__21922__["isIndexOutOfListBounds"])(listRef.current, activeIndex)) {
            indexRef.current = activeIndex;
            focusItem();
            forceScrollIntoViewRef.current = false;
        }
    }, [
        enabled,
        open,
        floatingElement,
        activeIndex,
        selectedIndexRef,
        nested,
        listRef,
        orientation,
        rtl,
        onNavigate,
        focusItem,
        disabledIndicesRef
    ]);
    // Ensure the parent floating element has focus when a nested child closes
    // to allow arrow key navigation to work after the pointer leaves the child.
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!enabled || floatingElement || !tree || virtual || !previousMountedRef.current) {
            return;
        }
        const nodes = tree.nodesRef.current;
        const parent = nodes.find((node)=>node.id === parentId)?.context?.elements.floating;
        const activeEl = (0, __TURBOPACK__imported__module__95624__["activeElement"])((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingElement));
        const treeContainsActiveEl = nodes.some((node)=>node.context && (0, __TURBOPACK__imported__module__95624__["contains"])(node.context.elements.floating, activeEl));
        if (parent && !treeContainsActiveEl && isPointerModalityRef.current) {
            parent.focus({
                preventScroll: true
            });
        }
    }, [
        enabled,
        floatingElement,
        tree,
        parentId,
        virtual
    ]);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        previousOnNavigateRef.current = onNavigate;
        previousOpenRef.current = open;
        previousMountedRef.current = !!floatingElement;
    });
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!open) {
            keyRef.current = null;
            focusItemOnOpenRef.current = focusItemOnOpen;
        }
    }, [
        open,
        focusItemOnOpen
    ]);
    const hasActiveIndex = activeIndex != null;
    const syncCurrentTarget = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((event)=>{
        if (!latestOpenRef.current) {
            return;
        }
        const index = listRef.current.indexOf(event.currentTarget);
        if (index !== -1 && (indexRef.current !== index || activeIndex !== index)) {
            indexRef.current = index;
            onNavigate(event);
        }
    });
    const item = __TURBOPACK__imported__module__51268__["useMemo"](()=>{
        const itemProps = {
            onFocus (event) {
                forceSyncFocusRef.current = true;
                syncCurrentTarget(event);
            },
            onClick: ({ currentTarget })=>currentTarget.focus({
                    preventScroll: true
                }),
            // Safari
            onMouseMove (event) {
                forceSyncFocusRef.current = true;
                forceScrollIntoViewRef.current = false;
                if (focusItemOnHover) {
                    syncCurrentTarget(event);
                }
            },
            onPointerLeave (event) {
                if (!latestOpenRef.current || !isPointerModalityRef.current || event.pointerType === 'touch') {
                    return;
                }
                forceSyncFocusRef.current = true;
                const relatedTarget = event.relatedTarget;
                if (!focusItemOnHover || listRef.current.includes(relatedTarget)) {
                    return;
                }
                if (!resetOnPointerLeaveRef.current) {
                    return;
                }
                cancelQueuedFocusRef.current?.();
                cancelQueuedFocusRef.current = null;
                indexRef.current = -1;
                onNavigate(event);
                if (!virtual) {
                    const floatingFocusEl = floatingFocusElementRef.current;
                    const activeEl = (0, __TURBOPACK__imported__module__95624__["activeElement"])((0, __TURBOPACK__imported__module__41352__["ownerDocument"])(floatingFocusEl));
                    if (floatingFocusEl && (0, __TURBOPACK__imported__module__95624__["contains"])(floatingFocusEl, activeEl)) {
                        floatingFocusEl.focus({
                            preventScroll: true
                        });
                    }
                }
            }
        };
        return itemProps;
    }, [
        syncCurrentTarget,
        latestOpenRef,
        floatingFocusElementRef,
        focusItemOnHover,
        listRef,
        onNavigate,
        resetOnPointerLeaveRef,
        virtual
    ]);
    const getParentOrientation = __TURBOPACK__imported__module__51268__["useCallback"](()=>{
        return parentOrientation ?? tree?.nodesRef.current.find((node)=>node.id === parentId)?.context?.dataRef?.current.orientation;
    }, [
        parentId,
        tree,
        parentOrientation
    ]);
    const commonOnKeyDown = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((event)=>{
        isPointerModalityRef.current = false;
        forceSyncFocusRef.current = true;
        // When composing a character, Chrome fires ArrowDown twice. Firefox/Safari
        // don't appear to suffer from this. `event.isComposing` is avoided due to
        // Safari not supporting it properly (although it's not needed in the first
        // place for Safari, just avoiding any possible issues).
        if (event.which === 229) {
            return;
        }
        // If the floating element is animating out, ignore navigation. Otherwise,
        // the `activeIndex` gets set to 0 despite not being open so the next time
        // the user ArrowDowns, the first item won't be focused.
        if (!latestOpenRef.current && event.currentTarget === floatingFocusElementRef.current) {
            return;
        }
        if (nested && isCrossOrientationCloseKey(event.key, orientation, rtl, cols)) {
            // If the nested list's close key is also the parent navigation key,
            // let the parent navigate. Otherwise, stop propagating the event.
            if (!isMainOrientationKey(event.key, getParentOrientation())) {
                (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
            }
            store.setOpen(false, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].listNavigation, event.nativeEvent));
            if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(domReferenceElement)) {
                if (virtual) {
                    tree?.events.emit('virtualfocus', domReferenceElement);
                } else {
                    domReferenceElement.focus();
                }
            }
            return;
        }
        const currentIndex = indexRef.current;
        const minIndex = (0, __TURBOPACK__imported__module__21922__["getMinListIndex"])(listRef, disabledIndices);
        const maxIndex = (0, __TURBOPACK__imported__module__21922__["getMaxListIndex"])(listRef, disabledIndices);
        if (!typeableComboboxReference) {
            if (event.key === 'Home') {
                (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
                indexRef.current = minIndex;
                onNavigate(event);
            }
            if (event.key === 'End') {
                (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
                indexRef.current = maxIndex;
                onNavigate(event);
            }
        }
        // Grid navigation.
        if (cols > 1) {
            const sizes = Array.from({
                length: listRef.current.length
            }, ()=>({
                    width: 1,
                    height: 1
                }));
            // To calculate movements on the grid, we use hypothetical cell indices
            // as if every item was 1x1, then convert back to real indices.
            const cellMap = (0, __TURBOPACK__imported__module__21922__["createGridCellMap"])(sizes, cols, false);
            const minGridIndex = cellMap.findIndex((index)=>index != null && !(0, __TURBOPACK__imported__module__21922__["isListIndexDisabled"])(listRef.current, index, disabledIndices));
            // last enabled index
            const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex)=>index != null && !(0, __TURBOPACK__imported__module__21922__["isListIndexDisabled"])(listRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
            const index = cellMap[(0, __TURBOPACK__imported__module__21922__["getGridNavigatedIndex"])(cellMap.map((itemIndex)=>itemIndex != null ? listRef.current[itemIndex] : null), {
                event,
                orientation,
                loopFocus,
                rtl,
                cols,
                // treat undefined (empty grid spaces) as disabled indices so we
                // don't end up in them
                disabledIndices: (0, __TURBOPACK__imported__module__21922__["getGridCellIndices"])([
                    ...(typeof disabledIndices !== 'function' ? disabledIndices : null) || listRef.current.map((_, listIndex)=>(0, __TURBOPACK__imported__module__21922__["isListIndexDisabled"])(listRef.current, listIndex, disabledIndices) ? listIndex : undefined),
                    undefined
                ], cellMap),
                minIndex: minGridIndex,
                maxIndex: maxGridIndex,
                prevIndex: (0, __TURBOPACK__imported__module__21922__["getGridCellIndexOfCorner"])(indexRef.current > maxIndex ? minIndex : indexRef.current, sizes, cellMap, cols, // use a corner matching the edge closest to the direction
                // we're moving in so we don't end up in the same item. Prefer
                // top/left over bottom/right.
                // eslint-disable-next-line no-nested-ternary
                event.key === __TURBOPACK__imported__module__83306__["ARROW_DOWN"] ? 'bl' : event.key === (rtl ? __TURBOPACK__imported__module__83306__["ARROW_LEFT"] : __TURBOPACK__imported__module__83306__["ARROW_RIGHT"]) ? 'tr' : 'tl'),
                stopEvent: true
            })];
            if (index != null) {
                indexRef.current = index;
                onNavigate(event);
            }
            if (orientation === 'both') {
                return;
            }
        }
        if (isMainOrientationKey(event.key, orientation)) {
            (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
            // Reset the index if no item is focused.
            if (open && !virtual && (0, __TURBOPACK__imported__module__95624__["activeElement"])(event.currentTarget.ownerDocument) === event.currentTarget) {
                indexRef.current = isMainOrientationToEndKey(event.key, orientation, rtl) ? minIndex : maxIndex;
                onNavigate(event);
                return;
            }
            if (isMainOrientationToEndKey(event.key, orientation, rtl)) {
                if (loopFocus) {
                    if (currentIndex >= maxIndex) {
                        if (allowEscape && currentIndex !== listRef.current.length) {
                            indexRef.current = -1;
                        } else {
                            // Give time for virtualizers to update the listRef.
                            forceSyncFocusRef.current = false;
                            indexRef.current = minIndex;
                        }
                    } else {
                        indexRef.current = (0, __TURBOPACK__imported__module__21922__["findNonDisabledListIndex"])(listRef.current, {
                            startingIndex: currentIndex,
                            disabledIndices
                        });
                    }
                } else {
                    indexRef.current = Math.min(maxIndex, (0, __TURBOPACK__imported__module__21922__["findNonDisabledListIndex"])(listRef.current, {
                        startingIndex: currentIndex,
                        disabledIndices
                    }));
                }
            } else if (loopFocus) {
                if (currentIndex <= minIndex) {
                    if (allowEscape && currentIndex !== -1) {
                        indexRef.current = listRef.current.length;
                    } else {
                        // Give time for virtualizers to update the listRef.
                        forceSyncFocusRef.current = false;
                        indexRef.current = maxIndex;
                    }
                } else {
                    indexRef.current = (0, __TURBOPACK__imported__module__21922__["findNonDisabledListIndex"])(listRef.current, {
                        startingIndex: currentIndex,
                        decrement: true,
                        disabledIndices
                    });
                }
            } else {
                indexRef.current = Math.max(minIndex, (0, __TURBOPACK__imported__module__21922__["findNonDisabledListIndex"])(listRef.current, {
                    startingIndex: currentIndex,
                    decrement: true,
                    disabledIndices
                }));
            }
            if ((0, __TURBOPACK__imported__module__21922__["isIndexOutOfListBounds"])(listRef.current, indexRef.current)) {
                indexRef.current = -1;
            }
            onNavigate(event);
        }
    });
    const ariaActiveDescendantProp = __TURBOPACK__imported__module__51268__["useMemo"](()=>{
        return virtual && open && hasActiveIndex && {
            'aria-activedescendant': `${id}-${activeIndex}`
        };
    }, [
        virtual,
        open,
        hasActiveIndex,
        id,
        activeIndex
    ]);
    const floating = __TURBOPACK__imported__module__51268__["useMemo"](()=>{
        return {
            'aria-orientation': orientation === 'both' ? undefined : orientation,
            ...!typeableComboboxReference ? ariaActiveDescendantProp : {},
            onKeyDown (event) {
                // Close submenu on Shift+Tab
                if (event.key === 'Tab' && event.shiftKey && open && !virtual) {
                    // If the event originated from within a nested element (e.g., a Dialog opened from
                    // within the menu), don't close the menu. The nested element has its own focus
                    // management and should handle the Tab key.
                    const target = (0, __TURBOPACK__imported__module__95624__["getTarget"])(event.nativeEvent);
                    if (target && !(0, __TURBOPACK__imported__module__95624__["contains"])(floatingFocusElementRef.current, target)) {
                        return;
                    }
                    (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
                    store.setOpen(false, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].focusOut, event.nativeEvent));
                    if ((0, __TURBOPACK__imported__module__92615__["isHTMLElement"])(domReferenceElement)) {
                        domReferenceElement.focus();
                    }
                    return;
                }
                commonOnKeyDown(event);
            },
            onPointerMove () {
                isPointerModalityRef.current = true;
            }
        };
    }, [
        ariaActiveDescendantProp,
        commonOnKeyDown,
        floatingFocusElementRef,
        orientation,
        typeableComboboxReference,
        store,
        open,
        virtual,
        domReferenceElement
    ]);
    const trigger = __TURBOPACK__imported__module__51268__["useMemo"](()=>{
        function checkVirtualMouse(event) {
            if (focusItemOnOpen === 'auto' && (0, __TURBOPACK__imported__module__56870__["isVirtualClick"])(event.nativeEvent)) {
                focusItemOnOpenRef.current = !virtual;
            }
        }
        function checkVirtualPointer(event) {
            // `pointerdown` fires first, reset the state then perform the checks.
            focusItemOnOpenRef.current = focusItemOnOpen;
            if (focusItemOnOpen === 'auto' && (0, __TURBOPACK__imported__module__56870__["isVirtualPointerEvent"])(event.nativeEvent)) {
                focusItemOnOpenRef.current = true;
            }
        }
        return {
            onKeyDown (event) {
                // non-reactive open state (to prevent re-creation of the handler)
                const currentOpen = store.select('open');
                isPointerModalityRef.current = false;
                const isArrowKey = event.key.startsWith('Arrow');
                const isParentCrossOpenKey = isCrossOrientationOpenKey(event.key, getParentOrientation(), rtl);
                const isMainKey = isMainOrientationKey(event.key, orientation);
                const isNavigationKey = (nested ? isParentCrossOpenKey : isMainKey) || event.key === 'Enter' || event.key.trim() === '';
                if (virtual && currentOpen) {
                    return commonOnKeyDown(event);
                }
                // If a floating element should not open on arrow key down, avoid
                // setting `activeIndex` while it's closed.
                if (!currentOpen && !openOnArrowKeyDown && isArrowKey) {
                    return undefined;
                }
                if (isNavigationKey) {
                    const isParentMainKey = isMainOrientationKey(event.key, getParentOrientation());
                    keyRef.current = nested && isParentMainKey ? null : event.key;
                }
                if (nested) {
                    if (isParentCrossOpenKey) {
                        (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
                        if (currentOpen) {
                            indexRef.current = (0, __TURBOPACK__imported__module__21922__["getMinListIndex"])(listRef, disabledIndicesRef.current);
                            onNavigate(event);
                        } else {
                            store.setOpen(true, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].listNavigation, event.nativeEvent, event.currentTarget));
                        }
                    }
                    return undefined;
                }
                if (isMainKey) {
                    if (selectedIndexRef.current != null) {
                        indexRef.current = selectedIndexRef.current;
                    }
                    (0, __TURBOPACK__imported__module__56870__["stopEvent"])(event);
                    if (!currentOpen && openOnArrowKeyDown) {
                        store.setOpen(true, (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].listNavigation, event.nativeEvent, event.currentTarget));
                    } else {
                        commonOnKeyDown(event);
                    }
                    if (currentOpen) {
                        onNavigate(event);
                    }
                }
                return undefined;
            },
            onFocus (event) {
                if (store.select('open') && !virtual) {
                    indexRef.current = -1;
                    onNavigate(event);
                }
            },
            onPointerDown: checkVirtualPointer,
            onPointerEnter: checkVirtualPointer,
            onMouseDown: checkVirtualMouse,
            onClick: checkVirtualMouse
        };
    }, [
        commonOnKeyDown,
        disabledIndicesRef,
        focusItemOnOpen,
        listRef,
        nested,
        onNavigate,
        store,
        openOnArrowKeyDown,
        orientation,
        getParentOrientation,
        rtl,
        selectedIndexRef,
        virtual
    ]);
    const reference = __TURBOPACK__imported__module__51268__["useMemo"](()=>{
        return {
            ...ariaActiveDescendantProp,
            ...trigger
        };
    }, [
        ariaActiveDescendantProp,
        trigger
    ]);
    return __TURBOPACK__imported__module__51268__["useMemo"](()=>enabled ? {
            reference,
            floating,
            item,
            trigger
        } : {}, [
        enabled,
        reference,
        floating,
        trigger,
        item
    ]);
}
__turbopack_context__.s([
    "useListNavigation",
    0,
    useListNavigation
], 84287);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/floating-ui-react/hooks/useTypeahead.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__32787__1 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__91900__1 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__5328__ = __turbopack_context__.i(5328);
var __TURBOPACK__imported__module__95624__1 = __TURBOPACK__imported__module__95624__;
var __TURBOPACK__imported__module__56870__1 = __TURBOPACK__imported__module__56870__;
var __TURBOPACK__imported__module__21922__1 = __TURBOPACK__imported__module__21922__;
'use client';
;
;
;
;
;
;
;
function useTypeahead(context, props) {
    const store = 'rootStore' in context ? context.rootStore : context;
    const dataRef = store.context.dataRef;
    const open = store.useState('open');
    const { listRef, elementsRef, activeIndex, onMatch: onMatchProp, onTypingChange, enabled = true, resetMs = 750, selectedIndex = null } = props;
    const timeout = (0, __TURBOPACK__imported__module__5328__["useTimeout"])();
    const stringRef = __TURBOPACK__imported__module__51268__1["useRef"]('');
    const prevIndexRef = __TURBOPACK__imported__module__51268__1["useRef"](selectedIndex ?? activeIndex ?? -1);
    const matchIndexRef = __TURBOPACK__imported__module__51268__1["useRef"](null);
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        if (!open && selectedIndex !== null) {
            return;
        }
        timeout.clear();
        matchIndexRef.current = null;
        if (stringRef.current !== '') {
            stringRef.current = '';
        }
    }, [
        open,
        selectedIndex,
        timeout
    ]);
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        // Sync arrow key navigation but not typeahead navigation.
        if (open && stringRef.current === '') {
            prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
        }
    }, [
        open,
        selectedIndex,
        activeIndex
    ]);
    const setTypingChange = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])((value)=>{
        if (value) {
            if (!dataRef.current.typing) {
                dataRef.current.typing = value;
                onTypingChange?.(value);
            }
        } else if (dataRef.current.typing) {
            dataRef.current.typing = value;
            onTypingChange?.(value);
        }
    });
    const onKeyDown = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])((event)=>{
        function isVisible(index) {
            const element = elementsRef?.current[index];
            return !element || (0, __TURBOPACK__imported__module__21922__1["isElementVisible"])(element);
        }
        function getMatchingIndex(list, string, startIndex = 0) {
            if (list.length === 0) {
                return -1;
            }
            const normalizedStartIndex = (startIndex % list.length + list.length) % list.length;
            const lowerString = string.toLocaleLowerCase();
            for(let offset = 0; offset < list.length; offset += 1){
                const index = (normalizedStartIndex + offset) % list.length;
                const text = list[index];
                if (!text?.toLocaleLowerCase().startsWith(lowerString) || !isVisible(index)) {
                    continue;
                }
                return index;
            }
            return -1;
        }
        const listContent = listRef.current;
        if (stringRef.current.length > 0 && event.key === ' ') {
            // Space should continue the in-progress typeahead session.
            (0, __TURBOPACK__imported__module__56870__1["stopEvent"])(event);
            setTypingChange(true);
        }
        if (stringRef.current.length > 0 && stringRef.current[0] !== ' ') {
            if (getMatchingIndex(listContent, stringRef.current) === -1 && event.key !== ' ') {
                setTypingChange(false);
            }
        }
        if (listContent == null || // Character key.
        event.key.length !== 1 || // Modifier key.
        event.ctrlKey || event.metaKey || event.altKey) {
            return;
        }
        if (open && event.key !== ' ') {
            (0, __TURBOPACK__imported__module__56870__1["stopEvent"])(event);
            setTypingChange(true);
        }
        // Capture whether this is a new typing session before mutating the string.
        const isNewSession = stringRef.current === '';
        if (isNewSession) {
            prevIndexRef.current = selectedIndex ?? activeIndex ?? -1;
        }
        // Bail out if the list contains a word like "llama" or "aaron". TODO:
        // allow it in this case, too.
        const allowRapidSuccessionOfFirstLetter = listContent.every((text)=>text ? text[0]?.toLocaleLowerCase() !== text[1]?.toLocaleLowerCase() : true);
        // Allows the user to cycle through items that start with the same letter
        // in rapid succession.
        if (allowRapidSuccessionOfFirstLetter && stringRef.current === event.key) {
            stringRef.current = '';
            prevIndexRef.current = matchIndexRef.current;
        }
        stringRef.current += event.key;
        timeout.start(resetMs, ()=>{
            stringRef.current = '';
            prevIndexRef.current = matchIndexRef.current;
            setTypingChange(false);
        });
        // Compute the starting index for this search.
        // If this is a new typing session (string is empty), base it on the current
        // selection/active item; otherwise continue from the last matched index.
        const prevIndex = isNewSession ? selectedIndex ?? activeIndex ?? -1 : prevIndexRef.current;
        const startIndex = (prevIndex ?? 0) + 1;
        const index = getMatchingIndex(listContent, stringRef.current, startIndex);
        if (index !== -1) {
            onMatchProp?.(index);
            matchIndexRef.current = index;
        } else if (event.key !== ' ') {
            stringRef.current = '';
            setTypingChange(false);
        }
    });
    const onBlur = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])((event)=>{
        const next = event.relatedTarget;
        const currentDomReferenceElement = store.select('domReferenceElement');
        const currentFloatingElement = store.select('floatingElement');
        const withinReference = (0, __TURBOPACK__imported__module__95624__1["contains"])(currentDomReferenceElement, next);
        const withinFloating = (0, __TURBOPACK__imported__module__95624__1["contains"])(currentFloatingElement, next);
        // Keep the session if focus moves within the composite (reference <-> floating).
        if (withinReference || withinFloating) {
            return;
        }
        // End the current typing session when focus leaves the composite entirely.
        timeout.clear();
        stringRef.current = '';
        prevIndexRef.current = matchIndexRef.current;
        setTypingChange(false);
    });
    const reference = __TURBOPACK__imported__module__51268__1["useMemo"](()=>({
            onKeyDown,
            onBlur
        }), [
        onKeyDown,
        onBlur
    ]);
    const floating = __TURBOPACK__imported__module__51268__1["useMemo"](()=>{
        return {
            onKeyDown,
            onBlur
        };
    }, [
        onKeyDown,
        onBlur
    ]);
    return __TURBOPACK__imported__module__51268__1["useMemo"](()=>enabled ? {
            reference,
            floating
        } : {}, [
        enabled,
        reference,
        floating
    ]);
}
__turbopack_context__.s([
    "useTypeahead",
    0,
    useTypeahead
], 4496);
}),
22203, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__96746__ = /*#__PURE__*/ __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__85182__ = __turbopack_context__.i(85182);
;
function getPseudoElementBounds(element) {
    const elementRect = element.getBoundingClientRect();
    // Avoid "Not implemented: window.getComputedStyle(elt, pseudoElt)"
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    const win = (0, __TURBOPACK__imported__module__85182__["ownerWindow"])(element);
    const beforeStyles = win.getComputedStyle(element, '::before');
    const afterStyles = win.getComputedStyle(element, '::after');
    const hasPseudoElements = beforeStyles.content !== 'none' || afterStyles.content !== 'none';
    if (!hasPseudoElements) {
        return elementRect;
    }
    // Get dimensions of pseudo-elements
    const beforeWidth = parseFloat(beforeStyles.width) || 0;
    const beforeHeight = parseFloat(beforeStyles.height) || 0;
    const afterWidth = parseFloat(afterStyles.width) || 0;
    const afterHeight = parseFloat(afterStyles.height) || 0;
    // Calculate max dimensions including pseudo-elements
    const totalWidth = Math.max(elementRect.width, beforeWidth, afterWidth);
    const totalHeight = Math.max(elementRect.height, beforeHeight, afterHeight);
    // Calculate the differences to extend the bounds
    const widthDiff = totalWidth - elementRect.width;
    const heightDiff = totalHeight - elementRect.height;
    return {
        left: elementRect.left - widthDiff / 2,
        right: elementRect.right + widthDiff / 2,
        top: elementRect.top - heightDiff / 2,
        bottom: elementRect.bottom + heightDiff / 2
    };
}
__turbopack_context__.s([
    "getPseudoElementBounds",
    0,
    getPseudoElementBounds
]);
}),
70081, ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
'use client';
;
function usePreviousValue(value) {
    const [state, setState] = __TURBOPACK__imported__module__51268__["useState"]({
        current: value,
        previous: null
    });
    if (value !== state.current) {
        setState({
            current: value,
            previous: state.current
        });
    }
    return state.previous;
}
__turbopack_context__.s([
    "usePreviousValue",
    0,
    usePreviousValue
]);
}),
]);