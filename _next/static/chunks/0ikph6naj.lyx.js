(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
4508, ((__turbopack_context__) => {
"use strict";

// MERGED MODULE: [project]/src/features/sfcpr/sfcpr-page.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__ = __turbopack_context__.i(8063);
var __TURBOPACK__imported__module__51268__ = __turbopack_context__.i(51268);
var __TURBOPACK__imported__module__19455__ = __turbopack_context__.i(19455);
var __TURBOPACK__imported__module__93479__ = __turbopack_context__.i(93479);
// MERGED MODULE: [project]/src/components/ui/radio-group.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__1 = __TURBOPACK__imported__module__8063__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio/index.parts.js [app-client] (ecmascript) <export * as Radio>
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio/index.parts.js [app-client] (ecmascript)
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio/index.parts.js [app-client] (ecmascript) <locals>
;
;
;
__turbopack_context__.s([], 40374);
var __TURBOPACK__imported__module__40374__ = __turbopack_context__.i(40374);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio/root/RadioRoot.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__ = __turbopack_context__.i(96746);
var __TURBOPACK__imported__module__51268__1 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__90741__ = __turbopack_context__.i(90741);
var __TURBOPACK__imported__module__91900__ = __turbopack_context__.i(91900);
var __TURBOPACK__imported__module__32787__ = __turbopack_context__.i(32787);
var __TURBOPACK__imported__module__368__ = __turbopack_context__.i(368);
var __TURBOPACK__imported__module__24659__ = __turbopack_context__.i(24659);
var __TURBOPACK__imported__module__34409__ = __turbopack_context__.i(34409);
var __TURBOPACK__imported__module__93719__ = __turbopack_context__.i(93719);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio/utils/stateAttributesMapping.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__77912__ = __turbopack_context__.i(77912);
var __TURBOPACK__imported__module__38744__ = __turbopack_context__.i(38744);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio/root/RadioRootDataAttributes.js [app-client] (ecmascript)
;
let RadioRootDataAttributes = /*#__PURE__*/ function(RadioRootDataAttributes) {
    /**
   * Present when the radio is checked.
   */ RadioRootDataAttributes["checked"] = "data-checked";
    /**
   * Present when the radio is not checked.
   */ RadioRootDataAttributes["unchecked"] = "data-unchecked";
    /**
   * Present when the radio is disabled.
   */ RadioRootDataAttributes["disabled"] = "data-disabled";
    /**
   * Present when the radio is readonly.
   */ RadioRootDataAttributes["readonly"] = "data-readonly";
    /**
   * Present when the radio is required.
   */ RadioRootDataAttributes["required"] = "data-required";
    /**
   * Present when the radio is in a valid state (when wrapped in Field.Root).
   */ RadioRootDataAttributes["valid"] = "data-valid";
    /**
   * Present when the radio is in an invalid state (when wrapped in Field.Root).
   */ RadioRootDataAttributes["invalid"] = "data-invalid";
    /**
   * Present when the radio has been touched (when wrapped in Field.Root).
   */ RadioRootDataAttributes["touched"] = "data-touched";
    /**
   * Present when the radio's value has changed (when wrapped in Field.Root).
   */ RadioRootDataAttributes["dirty"] = "data-dirty";
    /**
   * Present when the radio is checked (when wrapped in Field.Root).
   */ RadioRootDataAttributes["filled"] = "data-filled";
    /**
   * Present when the radio is focused (when wrapped in Field.Root).
   */ RadioRootDataAttributes["focused"] = "data-focused";
    return RadioRootDataAttributes;
}({});
;
;
;
const stateAttributesMapping = {
    checked (value) {
        if (value) {
            return {
                [RadioRootDataAttributes.checked]: ''
            };
        }
        return {
            [RadioRootDataAttributes.unchecked]: ''
        };
    },
    ...__TURBOPACK__imported__module__77912__["transitionStatusMapping"],
    ...__TURBOPACK__imported__module__38744__["fieldValidityMapping"]
};
var __TURBOPACK__imported__module__15732__ = __turbopack_context__.i(15732);
var __TURBOPACK__imported__module__19996__ = __turbopack_context__.i(19996);
var __TURBOPACK__imported__module__81833__ = __turbopack_context__.i(81833);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/constants.js [app-client] (ecmascript)
;
const ACTIVE_COMPOSITE_ITEM = 'data-composite-item-active';
var __TURBOPACK__imported__module__4438__ = __turbopack_context__.i(4438);
var __TURBOPACK__imported__module__76194__ = __turbopack_context__.i(76194);
var __TURBOPACK__imported__module__9439__ = __turbopack_context__.i(9439);
var __TURBOPACK__imported__module__68338__ = __turbopack_context__.i(68338);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/labelable-provider/useAriaLabelledBy.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__2 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__91900__1 = __TURBOPACK__imported__module__91900__;
var __TURBOPACK__imported__module__15732__1 = __TURBOPACK__imported__module__15732__;
'use client';
;
;
;
function useAriaLabelledBy(explicitAriaLabelledBy, labelId, labelSourceRef, enableFallback = true, labelSourceId) {
    const [fallbackAriaLabelledBy, setFallbackAriaLabelledBy] = __TURBOPACK__imported__module__51268__2["useState"]();
    const generatedLabelId = (0, __TURBOPACK__imported__module__15732__1["useBaseUiId"])(labelSourceId ? `${labelSourceId}-label` : undefined);
    const ariaLabelledBy = explicitAriaLabelledBy ?? labelId ?? fallbackAriaLabelledBy;
    // Fallback for <span> controls labelled by wrapping/sibling native <label>.
    // Run after every commit so DOM association changes (e.g. label mount/unmount)
    // are reflected even when props/state deps are unchanged.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, __TURBOPACK__imported__module__91900__1["useIsoLayoutEffect"])(()=>{
        const nextAriaLabelledBy = explicitAriaLabelledBy || labelId || !enableFallback ? undefined : getAriaLabelledBy(labelSourceRef.current, generatedLabelId);
        if (fallbackAriaLabelledBy !== nextAriaLabelledBy) {
            setFallbackAriaLabelledBy(nextAriaLabelledBy);
        }
    });
    return ariaLabelledBy;
}
function getAriaLabelledBy(labelSource, generatedLabelId) {
    const label = findAssociatedLabel(labelSource);
    if (!label) {
        return undefined;
    }
    if (!label.id && generatedLabelId) {
        label.id = generatedLabelId;
    }
    return label.id || undefined;
}
function findAssociatedLabel(labelSource) {
    if (!labelSource) {
        return undefined;
    }
    // Fast path before the expensive `.labels` read.
    const parent = labelSource.parentElement;
    if (parent && parent.tagName === 'LABEL') {
        return parent;
    }
    const controlId = labelSource.id;
    if (controlId) {
        const nextSibling = labelSource.nextElementSibling;
        if (nextSibling && nextSibling.htmlFor === controlId) {
            return nextSibling;
        }
    }
    const labels = labelSource.labels;
    return labels && labels[0];
}
var __TURBOPACK__imported__module__31914__ = __turbopack_context__.i(31914);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio-group/RadioGroupContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__1 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__3 = __TURBOPACK__imported__module__51268__;
'use client';
;
const RadioGroupContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__3["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useRadioGroupContext() {
    return __TURBOPACK__imported__module__51268__3["useContext"](RadioGroupContext);
}
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/serializeValue.js [app-client] (ecmascript)
;
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
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio/root/RadioRootContext.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__2 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__16174__ = __turbopack_context__.i(16174);
var __TURBOPACK__imported__module__51268__4 = __TURBOPACK__imported__module__51268__;
'use client';
;
;
const RadioRootContext = /*#__PURE__*/ __TURBOPACK__imported__module__51268__4["createContext"](undefined);
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
function useRadioRootContext() {
    const value = __TURBOPACK__imported__module__51268__4["useContext"](RadioRootContext);
    if (value === undefined) {
        throw new Error(("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : (0, __TURBOPACK__imported__module__16174__["default"])(52));
    }
    return value;
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
const RadioRoot = /*#__PURE__*/ __TURBOPACK__imported__module__51268__1["forwardRef"](function RadioRoot(componentProps, forwardedRef) {
    const { render, className, disabled: disabledProp = false, readOnly: readOnlyProp = false, required: requiredProp = false, 'aria-labelledby': ariaLabelledByProp, value, inputRef: inputRefProp, nativeButton = false, id: idProp, style, ...elementProps } = componentProps;
    const groupContext = useRadioGroupContext();
    const { disabled: disabledGroup, readOnly: readOnlyGroup, required: requiredGroup, form: formGroup, checkedValue, touched = false, validation, name } = groupContext ?? {};
    const setCheckedValue = groupContext?.setCheckedValue ?? __TURBOPACK__imported__module__24659__["NOOP"];
    const setTouched = groupContext?.setTouched ?? __TURBOPACK__imported__module__24659__["NOOP"];
    const registerControlRef = groupContext?.registerControlRef ?? __TURBOPACK__imported__module__24659__["NOOP"];
    const registerInputRef = groupContext?.registerInputRef ?? __TURBOPACK__imported__module__24659__["NOOP"];
    const { setDirty, validityData, setTouched: setFieldTouched, setFilled, state: fieldState, disabled: fieldDisabled } = (0, __TURBOPACK__imported__module__76194__["useFieldRootContext"])();
    const fieldItemContext = (0, __TURBOPACK__imported__module__9439__["useFieldItemContext"])();
    const { labelId, getDescriptionProps } = (0, __TURBOPACK__imported__module__68338__["useLabelableContext"])();
    const disabled = fieldDisabled || fieldItemContext.disabled || disabledGroup || disabledProp;
    const readOnly = readOnlyGroup || readOnlyProp;
    const required = requiredGroup || requiredProp;
    const form = formGroup;
    const checked = groupContext ? checkedValue === value : value === '';
    const serializedValue = __TURBOPACK__imported__module__51268__1["useMemo"](()=>serializeValue(value), [
        value
    ]);
    const radioRef = __TURBOPACK__imported__module__51268__1["useRef"](null);
    const inputRef = __TURBOPACK__imported__module__51268__1["useRef"](null);
    const handleControlRef = (0, __TURBOPACK__imported__module__32787__["useStableCallback"])((element)=>{
        if (!element) {
            return;
        }
        registerControlRef(element, disabled);
    });
    const mergedInputRef = (0, __TURBOPACK__imported__module__90741__["useMergedRefs"])(inputRefProp, inputRef, registerInputRef);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (inputRef.current?.checked) {
            setFilled(true);
        }
    }, [
        setFilled
    ]);
    (0, __TURBOPACK__imported__module__91900__["useIsoLayoutEffect"])(()=>{
        if (!inputRef.current) {
            return;
        }
        if (disabled && checked) {
            registerInputRef(null);
            return;
        }
        if (radioRef.current) {
            registerControlRef(radioRef.current, disabled);
        }
        registerInputRef(inputRef.current);
    }, [
        checked,
        disabled,
        registerControlRef,
        registerInputRef
    ]);
    const id = (0, __TURBOPACK__imported__module__15732__["useBaseUiId"])();
    const inputId = (0, __TURBOPACK__imported__module__31914__["useLabelableId"])({
        id: idProp,
        implicit: false,
        controlRef: radioRef
    });
    const hiddenInputId = nativeButton ? undefined : inputId;
    const ariaLabelledBy = useAriaLabelledBy(ariaLabelledByProp, labelId, inputRef, !nativeButton, hiddenInputId);
    const rootProps = {
        role: 'radio',
        'aria-checked': checked,
        'aria-required': required || undefined,
        'aria-readonly': readOnly || undefined,
        'aria-labelledby': ariaLabelledBy,
        [ACTIVE_COMPOSITE_ITEM]: checked ? '' : undefined,
        id: nativeButton ? inputId : id,
        onKeyDown (event) {
            if (event.key === 'Enter') {
                event.preventDefault();
            }
        },
        onClick (event) {
            if (event.defaultPrevented || disabled || readOnly) {
                return;
            }
            event.preventDefault();
            inputRef.current?.dispatchEvent(new PointerEvent('click', {
                bubbles: true,
                shiftKey: event.shiftKey,
                ctrlKey: event.ctrlKey,
                altKey: event.altKey,
                metaKey: event.metaKey
            }));
        },
        onFocus (event) {
            if (event.defaultPrevented || disabled || readOnly || !touched) {
                return;
            }
            inputRef.current?.click();
            setTouched(false);
        }
    };
    const { getButtonProps, buttonRef } = (0, __TURBOPACK__imported__module__81833__["useButton"])({
        disabled,
        native: nativeButton
    });
    const inputProps = {
        type: 'radio',
        ref: mergedInputRef,
        form,
        id: hiddenInputId,
        name,
        tabIndex: -1,
        style: name ? __TURBOPACK__imported__module__368__["visuallyHiddenInput"] : __TURBOPACK__imported__module__368__["visuallyHidden"],
        'aria-hidden': true,
        ...value !== undefined ? {
            value: serializedValue
        } : __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"],
        disabled,
        checked,
        required,
        readOnly,
        onChange (event) {
            // Workaround for https://github.com/facebook/react/issues/9023
            if (event.nativeEvent.defaultPrevented) {
                return;
            }
            if (disabled || readOnly || value === undefined) {
                return;
            }
            const details = (0, __TURBOPACK__imported__module__34409__["createChangeEventDetails"])(__TURBOPACK__imported__module__93719__["REASONS"].none, event.nativeEvent);
            if (details.isCanceled) {
                return;
            }
            setFieldTouched(true);
            setDirty(value !== validityData.initialValue);
            setFilled(true);
            setCheckedValue(value, details);
        },
        onFocus () {
            radioRef.current?.focus();
        }
    };
    const state = __TURBOPACK__imported__module__51268__1["useMemo"](()=>({
            ...fieldState,
            required,
            disabled,
            readOnly,
            checked
        }), [
        fieldState,
        disabled,
        readOnly,
        checked,
        required
    ]);
    const contextValue = state;
    const isRadioGroup = groupContext !== undefined;
    const refs = [
        forwardedRef,
        radioRef,
        buttonRef,
        handleControlRef
    ];
    const props = [
        rootProps,
        getDescriptionProps,
        validation?.getValidationProps ?? __TURBOPACK__imported__module__24659__["EMPTY_OBJECT"],
        elementProps,
        getButtonProps
    ];
    const element = (0, __TURBOPACK__imported__module__19996__["useRenderElement"])('span', componentProps, {
        enabled: !isRadioGroup,
        state,
        ref: refs,
        props,
        stateAttributesMapping: stateAttributesMapping
    });
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsxs"])(RadioRootContext.Provider, {
        value: contextValue,
        children: [
            isRadioGroup ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])(__TURBOPACK__imported__module__4438__["CompositeItem"], {
                tag: "span",
                render: render,
                className: className,
                style: style,
                state: state,
                refs: refs,
                props: props,
                stateAttributesMapping: stateAttributesMapping
            }) : element,
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__2["jsx"])("input", {
                ...inputProps,
                suppressHydrationWarning: true
            })
        ]
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio/indicator/RadioIndicator.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__3 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__5 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__19996__1 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__6899__ = __turbopack_context__.i(6899);
var __TURBOPACK__imported__module__29573__ = __turbopack_context__.i(29573);
'use client';
;
;
;
;
;
;
const RadioIndicator = /*#__PURE__*/ __TURBOPACK__imported__module__51268__5["forwardRef"](function RadioIndicator(componentProps, forwardedRef) {
    const { render, className, style, keepMounted = false, ...elementProps } = componentProps;
    const rootState = useRadioRootContext();
    const rendered = rootState.checked;
    const { mounted, transitionStatus, setMounted } = (0, __TURBOPACK__imported__module__29573__["useTransitionStatus"])(rendered);
    const state = {
        ...rootState,
        transitionStatus
    };
    const indicatorRef = __TURBOPACK__imported__module__51268__5["useRef"](null);
    const shouldRender = keepMounted || mounted;
    const element = (0, __TURBOPACK__imported__module__19996__1["useRenderElement"])('span', componentProps, {
        ref: [
            forwardedRef,
            indicatorRef
        ],
        state,
        props: elementProps,
        stateAttributesMapping: stateAttributesMapping
    });
    (0, __TURBOPACK__imported__module__6899__["useOpenChangeComplete"])({
        open: rendered,
        ref: indicatorRef,
        onComplete () {
            if (!rendered) {
                setMounted(false);
            }
        }
    });
    if (!shouldRender) {
        return null;
    }
    return element;
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
__turbopack_context__.s([
    "Indicator",
    0,
    RadioIndicator,
    "Root",
    0,
    RadioRoot
], 90279);
var __TURBOPACK__imported__module__90279__ = __turbopack_context__.i(90279);
var __TURBOPACK__imported__module__90279__ = __TURBOPACK__imported__module__90279__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/radio-group/RadioGroup.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__96746__4 = __TURBOPACK__imported__module__96746__;
var __TURBOPACK__imported__module__51268__6 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__61886__ = __turbopack_context__.i(61886);
var __TURBOPACK__imported__module__32787__1 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__15732__2 = __TURBOPACK__imported__module__15732__;
var __TURBOPACK__imported__module__95624__ = __turbopack_context__.i(95624);
var __TURBOPACK__imported__module__26717__ = __turbopack_context__.i(26717);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/root/CompositeRoot.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__7 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__24659__1 = __TURBOPACK__imported__module__24659__;
var __TURBOPACK__imported__module__56284__ = __turbopack_context__.i(56284);
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+react@1.4.1_@types_bf6a27bfe7c944d33b05ef5c074fb210/node_modules/@base-ui/react/esm/internals/composite/root/useCompositeRoot.js [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__8 = __TURBOPACK__imported__module__51268__;
// MERGED MODULE: [project]/node_modules/.pnpm/@base-ui+utils@0.2.8_@types_c9551430b09515194bf4d31e244bbed7/node_modules/@base-ui/utils/esm/isElementDisabled.js [app-client] (ecmascript)
;
function isElementDisabled(element) {
    return element == null || element.hasAttribute('disabled') || element.getAttribute('aria-disabled') === 'true';
}
var __TURBOPACK__imported__module__32787__2 = __TURBOPACK__imported__module__32787__;
var __TURBOPACK__imported__module__90741__1 = __TURBOPACK__imported__module__90741__;
var __TURBOPACK__imported__module__26717__1 = __TURBOPACK__imported__module__26717__;
var __TURBOPACK__imported__module__21922__ = __turbopack_context__.i(21922);
var __TURBOPACK__imported__module__95624__1 = __TURBOPACK__imported__module__95624__;
'use client';
;
;
;
;
;
;
;
const EMPTY_ARRAY = [];
function useCompositeRoot(params) {
    const { itemSizes, cols = 1, loopFocus = true, onLoop, dense = false, orientation = 'both', direction, highlightedIndex: externalHighlightedIndex, onHighlightedIndexChange: externalSetHighlightedIndex, rootRef: externalRef, enableHomeAndEndKeys = false, stopEventPropagation = false, disabledIndices, modifierKeys = EMPTY_ARRAY } = params;
    const [internalHighlightedIndex, internalSetHighlightedIndex] = __TURBOPACK__imported__module__51268__8["useState"](0);
    const isGrid = cols > 1;
    const rootRef = __TURBOPACK__imported__module__51268__8["useRef"](null);
    const mergedRef = (0, __TURBOPACK__imported__module__90741__1["useMergedRefs"])(rootRef, externalRef);
    const elementsRef = __TURBOPACK__imported__module__51268__8["useRef"]([]);
    const hasSetDefaultIndexRef = __TURBOPACK__imported__module__51268__8["useRef"](false);
    const highlightedIndex = externalHighlightedIndex ?? internalHighlightedIndex;
    const onHighlightedIndexChange = (0, __TURBOPACK__imported__module__32787__2["useStableCallback"])((index, shouldScrollIntoView = false)=>{
        (externalSetHighlightedIndex ?? internalSetHighlightedIndex)(index);
        if (shouldScrollIntoView) {
            const newActiveItem = elementsRef.current[index];
            (0, __TURBOPACK__imported__module__26717__1["scrollIntoViewIfNeeded"])(rootRef.current, newActiveItem, direction, orientation);
        }
    });
    const onMapChange = (0, __TURBOPACK__imported__module__32787__2["useStableCallback"])((map)=>{
        if (map.size === 0 || hasSetDefaultIndexRef.current) {
            return;
        }
        hasSetDefaultIndexRef.current = true;
        const sortedElements = Array.from(map.keys());
        const activeItem = sortedElements.find((compositeElement)=>compositeElement?.hasAttribute(ACTIVE_COMPOSITE_ITEM)) ?? null;
        // Set the default highlighted index of an arbitrary composite item.
        const activeIndex = activeItem ? sortedElements.indexOf(activeItem) : -1;
        if (activeIndex !== -1) {
            onHighlightedIndexChange(activeIndex);
        }
        (0, __TURBOPACK__imported__module__26717__1["scrollIntoViewIfNeeded"])(rootRef.current, activeItem, direction, orientation);
    });
    const wrappedOnLoop = (0, __TURBOPACK__imported__module__32787__2["useStableCallback"])((event, prevIndex, nextIndex)=>{
        if (!onLoop) {
            return nextIndex;
        }
        return onLoop?.(event, prevIndex, nextIndex, elementsRef);
    });
    const props = __TURBOPACK__imported__module__51268__8["useMemo"](()=>({
            'aria-orientation': orientation === 'both' ? undefined : orientation,
            ref: mergedRef,
            onFocus (event) {
                const element = rootRef.current;
                const target = (0, __TURBOPACK__imported__module__95624__1["getTarget"])(event.nativeEvent);
                if (!element || target == null || !(0, __TURBOPACK__imported__module__26717__1["isNativeInput"])(target)) {
                    return;
                }
                target.setSelectionRange(0, target.value.length ?? 0);
            },
            onKeyDown (event) {
                const RELEVANT_KEYS = enableHomeAndEndKeys ? __TURBOPACK__imported__module__26717__1["ALL_KEYS"] : __TURBOPACK__imported__module__26717__1["ARROW_KEYS"];
                if (!RELEVANT_KEYS.has(event.key)) {
                    return;
                }
                if (isModifierKeySet(event, modifierKeys)) {
                    return;
                }
                const element = rootRef.current;
                if (!element) {
                    return;
                }
                const isRtl = direction === 'rtl';
                const horizontalForwardKey = isRtl ? __TURBOPACK__imported__module__26717__1["ARROW_LEFT"] : __TURBOPACK__imported__module__26717__1["ARROW_RIGHT"];
                const forwardKey = {
                    horizontal: horizontalForwardKey,
                    vertical: __TURBOPACK__imported__module__26717__1["ARROW_DOWN"],
                    both: horizontalForwardKey
                }[orientation];
                const horizontalBackwardKey = isRtl ? __TURBOPACK__imported__module__26717__1["ARROW_RIGHT"] : __TURBOPACK__imported__module__26717__1["ARROW_LEFT"];
                const backwardKey = {
                    horizontal: horizontalBackwardKey,
                    vertical: __TURBOPACK__imported__module__26717__1["ARROW_UP"],
                    both: horizontalBackwardKey
                }[orientation];
                const target = (0, __TURBOPACK__imported__module__95624__1["getTarget"])(event.nativeEvent);
                if (target != null && (0, __TURBOPACK__imported__module__26717__1["isNativeInput"])(target) && !isElementDisabled(target)) {
                    const selectionStart = target.selectionStart;
                    const selectionEnd = target.selectionEnd;
                    const textContent = target.value ?? '';
                    // return to native textbox behavior when
                    // 1 - Shift is held to make a text selection, or if there already is a text selection
                    if (selectionStart == null || event.shiftKey || selectionStart !== selectionEnd) {
                        return;
                    }
                    // 2 - arrow-ing forward and not in the last position of the text
                    if (event.key !== backwardKey && selectionStart < textContent.length) {
                        return;
                    }
                    // 3 -arrow-ing backward and not in the first position of the text
                    if (event.key !== forwardKey && selectionStart > 0) {
                        return;
                    }
                }
                let nextIndex = highlightedIndex;
                const minIndex = (0, __TURBOPACK__imported__module__21922__["getMinListIndex"])(elementsRef, disabledIndices);
                const maxIndex = (0, __TURBOPACK__imported__module__21922__["getMaxListIndex"])(elementsRef, disabledIndices);
                if (isGrid) {
                    const sizes = itemSizes || Array.from({
                        length: elementsRef.current.length
                    }, ()=>({
                            width: 1,
                            height: 1
                        }));
                    // To calculate movements on the grid, we use hypothetical cell indices
                    // as if every item was 1x1, then convert back to real indices.
                    const cellMap = (0, __TURBOPACK__imported__module__21922__["createGridCellMap"])(sizes, cols, dense);
                    const minGridIndex = cellMap.findIndex((index)=>index != null && !(0, __TURBOPACK__imported__module__21922__["isListIndexDisabled"])(elementsRef.current, index, disabledIndices));
                    // last enabled index
                    const maxGridIndex = cellMap.reduce((foundIndex, index, cellIndex)=>index != null && !(0, __TURBOPACK__imported__module__21922__["isListIndexDisabled"])(elementsRef.current, index, disabledIndices) ? cellIndex : foundIndex, -1);
                    nextIndex = cellMap[(0, __TURBOPACK__imported__module__21922__["getGridNavigatedIndex"])(cellMap.map((itemIndex)=>itemIndex != null ? elementsRef.current[itemIndex] : null), {
                        event,
                        orientation,
                        loopFocus,
                        onLoop: wrappedOnLoop,
                        cols,
                        // treat undefined (empty grid spaces) as disabled indices so we
                        // don't end up in them
                        disabledIndices: (0, __TURBOPACK__imported__module__21922__["getGridCellIndices"])([
                            ...disabledIndices || elementsRef.current.map((_, index)=>(0, __TURBOPACK__imported__module__21922__["isListIndexDisabled"])(elementsRef.current, index) ? index : undefined),
                            undefined
                        ], cellMap),
                        minIndex: minGridIndex,
                        maxIndex: maxGridIndex,
                        prevIndex: (0, __TURBOPACK__imported__module__21922__["getGridCellIndexOfCorner"])(highlightedIndex > maxIndex ? minIndex : highlightedIndex, sizes, cellMap, cols, // use a corner matching the edge closest to the direction we're
                        // moving in so we don't end up in the same item. Prefer
                        // top/left over bottom/right.
                        // eslint-disable-next-line no-nested-ternary
                        event.key === __TURBOPACK__imported__module__26717__1["ARROW_DOWN"] ? 'bl' : event.key === __TURBOPACK__imported__module__26717__1["ARROW_RIGHT"] ? 'tr' : 'tl'),
                        rtl: isRtl
                    })]; // navigated cell will never be nullish
                }
                const forwardKeys = {
                    horizontal: [
                        horizontalForwardKey
                    ],
                    vertical: [
                        __TURBOPACK__imported__module__26717__1["ARROW_DOWN"]
                    ],
                    both: [
                        horizontalForwardKey,
                        __TURBOPACK__imported__module__26717__1["ARROW_DOWN"]
                    ]
                }[orientation];
                const backwardKeys = {
                    horizontal: [
                        horizontalBackwardKey
                    ],
                    vertical: [
                        __TURBOPACK__imported__module__26717__1["ARROW_UP"]
                    ],
                    both: [
                        horizontalBackwardKey,
                        __TURBOPACK__imported__module__26717__1["ARROW_UP"]
                    ]
                }[orientation];
                const preventedKeys = isGrid ? RELEVANT_KEYS : ({
                    horizontal: enableHomeAndEndKeys ? __TURBOPACK__imported__module__26717__1["HORIZONTAL_KEYS_WITH_EXTRA_KEYS"] : __TURBOPACK__imported__module__26717__1["HORIZONTAL_KEYS"],
                    vertical: enableHomeAndEndKeys ? __TURBOPACK__imported__module__26717__1["VERTICAL_KEYS_WITH_EXTRA_KEYS"] : __TURBOPACK__imported__module__26717__1["VERTICAL_KEYS"],
                    both: RELEVANT_KEYS
                })[orientation];
                if (enableHomeAndEndKeys) {
                    if (event.key === __TURBOPACK__imported__module__26717__1["HOME"]) {
                        nextIndex = minIndex;
                    } else if (event.key === __TURBOPACK__imported__module__26717__1["END"]) {
                        nextIndex = maxIndex;
                    }
                }
                if (nextIndex === highlightedIndex && (forwardKeys.includes(event.key) || backwardKeys.includes(event.key))) {
                    if (loopFocus && nextIndex === maxIndex && forwardKeys.includes(event.key)) {
                        nextIndex = minIndex;
                        if (onLoop) {
                            nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
                        }
                    } else if (loopFocus && nextIndex === minIndex && backwardKeys.includes(event.key)) {
                        nextIndex = maxIndex;
                        if (onLoop) {
                            nextIndex = onLoop(event, highlightedIndex, nextIndex, elementsRef);
                        }
                    } else {
                        nextIndex = (0, __TURBOPACK__imported__module__21922__["findNonDisabledListIndex"])(elementsRef.current, {
                            startingIndex: nextIndex,
                            decrement: backwardKeys.includes(event.key),
                            disabledIndices
                        });
                    }
                }
                if (nextIndex !== highlightedIndex && !(0, __TURBOPACK__imported__module__21922__["isIndexOutOfListBounds"])(elementsRef.current, nextIndex)) {
                    if (stopEventPropagation) {
                        event.stopPropagation();
                    }
                    if (preventedKeys.has(event.key)) {
                        event.preventDefault();
                    }
                    onHighlightedIndexChange(nextIndex, true);
                    // Wait for FocusManager `returnFocus` to execute.
                    queueMicrotask(()=>{
                        elementsRef.current[nextIndex]?.focus();
                    });
                }
            }
        }), [
        cols,
        dense,
        direction,
        disabledIndices,
        elementsRef,
        enableHomeAndEndKeys,
        highlightedIndex,
        isGrid,
        itemSizes,
        loopFocus,
        onLoop,
        wrappedOnLoop,
        mergedRef,
        modifierKeys,
        onHighlightedIndexChange,
        orientation,
        stopEventPropagation
    ]);
    return __TURBOPACK__imported__module__51268__8["useMemo"](()=>({
            props,
            highlightedIndex,
            onHighlightedIndexChange,
            elementsRef,
            disabledIndices,
            onMapChange,
            relayKeyboardEvent: props.onKeyDown
        }), [
        props,
        highlightedIndex,
        onHighlightedIndexChange,
        elementsRef,
        disabledIndices,
        onMapChange
    ]);
}
function isModifierKeySet(event, ignoredModifierKeys) {
    for (const key of __TURBOPACK__imported__module__26717__1["MODIFIER_KEYS"].values()){
        if (ignoredModifierKeys.includes(key)) {
            continue;
        }
        if (event.getModifierState(key)) {
            return true;
        }
    }
    return false;
}
var __TURBOPACK__imported__module__19376__ = __turbopack_context__.i(19376);
var __TURBOPACK__imported__module__19996__2 = __TURBOPACK__imported__module__19996__;
var __TURBOPACK__imported__module__25909__ = __turbopack_context__.i(25909);
var __TURBOPACK__imported__module__8063__3 = __TURBOPACK__imported__module__8063__;
'use client';
;
;
;
;
;
;
;
;
function CompositeRoot(componentProps) {
    const { render, className, style, refs = __TURBOPACK__imported__module__24659__1["EMPTY_ARRAY"], props = __TURBOPACK__imported__module__24659__1["EMPTY_ARRAY"], state = __TURBOPACK__imported__module__24659__1["EMPTY_OBJECT"], stateAttributesMapping, highlightedIndex: highlightedIndexProp, onHighlightedIndexChange: onHighlightedIndexChangeProp, orientation, dense, itemSizes, loopFocus, onLoop, cols, enableHomeAndEndKeys, onMapChange: onMapChangeProp, stopEventPropagation = true, rootRef, disabledIndices, modifierKeys, highlightItemOnHover = false, tag = 'div', ...elementProps } = componentProps;
    const direction = (0, __TURBOPACK__imported__module__25909__["useDirection"])();
    const { props: defaultProps, highlightedIndex, onHighlightedIndexChange, elementsRef, onMapChange: onMapChangeUnwrapped, relayKeyboardEvent } = useCompositeRoot({
        itemSizes,
        cols,
        loopFocus,
        onLoop,
        dense,
        orientation,
        highlightedIndex: highlightedIndexProp,
        onHighlightedIndexChange: onHighlightedIndexChangeProp,
        rootRef,
        stopEventPropagation,
        enableHomeAndEndKeys,
        direction,
        disabledIndices,
        modifierKeys
    });
    const element = (0, __TURBOPACK__imported__module__19996__2["useRenderElement"])(tag, componentProps, {
        state,
        ref: refs,
        props: [
            defaultProps,
            ...props,
            elementProps
        ],
        stateAttributesMapping
    });
    const contextValue = __TURBOPACK__imported__module__51268__7["useMemo"](()=>({
            highlightedIndex,
            onHighlightedIndexChange,
            highlightItemOnHover,
            relayKeyboardEvent
        }), [
        highlightedIndex,
        onHighlightedIndexChange,
        highlightItemOnHover,
        relayKeyboardEvent
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(__TURBOPACK__imported__module__19376__["CompositeRootContext"].Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__3["jsx"])(__TURBOPACK__imported__module__56284__["CompositeList"], {
            elementsRef: elementsRef,
            onMapChange: (newMap)=>{
                onMapChangeProp?.(newMap);
                onMapChangeUnwrapped(newMap);
            },
            children: element
        })
    });
}
var __TURBOPACK__imported__module__76194__1 = __TURBOPACK__imported__module__76194__;
var __TURBOPACK__imported__module__90017__ = __turbopack_context__.i(90017);
var __TURBOPACK__imported__module__38744__1 = __TURBOPACK__imported__module__38744__;
var __TURBOPACK__imported__module__43457__ = __turbopack_context__.i(43457);
var __TURBOPACK__imported__module__67598__ = __turbopack_context__.i(67598);
var __TURBOPACK__imported__module__68338__1 = __TURBOPACK__imported__module__68338__;
var __TURBOPACK__imported__module__73650__ = __turbopack_context__.i(73650);
var __TURBOPACK__imported__module__8063__4 = __TURBOPACK__imported__module__8063__;
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
const MODIFIER_KEYS = [
    __TURBOPACK__imported__module__26717__["SHIFT"]
];
const RadioGroup = /*#__PURE__*/ __TURBOPACK__imported__module__51268__6["forwardRef"](function RadioGroup(componentProps, forwardedRef) {
    const { render, className, disabled: disabledProp, readOnly, required, onValueChange: onValueChangeProp, value: externalValue, defaultValue, form, name: nameProp, inputRef: inputRefProp, id: idProp, style, ...elementProps } = componentProps;
    const { setTouched: setFieldTouched, setFocused, shouldValidateOnChange, validationMode, name: fieldName, disabled: fieldDisabled, state: fieldState, validation, setDirty, setFilled, validityData } = (0, __TURBOPACK__imported__module__76194__1["useFieldRootContext"])();
    const { labelId } = (0, __TURBOPACK__imported__module__68338__1["useLabelableContext"])();
    const { clearErrors } = (0, __TURBOPACK__imported__module__67598__["useFormContext"])();
    const fieldsetContext = (0, __TURBOPACK__imported__module__43457__["useFieldsetRootContext"])(true);
    const disabled = fieldDisabled || disabledProp;
    const name = fieldName ?? nameProp;
    const id = (0, __TURBOPACK__imported__module__15732__2["useBaseUiId"])(idProp);
    const [checkedValue, setCheckedValueUnwrapped] = (0, __TURBOPACK__imported__module__61886__["useControlled"])({
        controlled: externalValue,
        default: defaultValue,
        name: 'RadioGroup',
        state: 'value'
    });
    const onValueChange = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])(onValueChangeProp);
    const setCheckedValue = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])((value, eventDetails)=>{
        onValueChange(value, eventDetails);
        if (eventDetails.isCanceled) {
            return;
        }
        setCheckedValueUnwrapped(value);
    });
    const controlRef = __TURBOPACK__imported__module__51268__6["useRef"](null);
    const groupInputRef = __TURBOPACK__imported__module__51268__6["useRef"](null);
    const firstEnabledInputRef = __TURBOPACK__imported__module__51268__6["useRef"](null);
    function setInputRef(hiddenInput) {
        let cleanup = undefined;
        if (inputRefProp) {
            if (typeof inputRefProp === 'function') {
                cleanup = inputRefProp(hiddenInput);
            } else {
                inputRefProp.current = hiddenInput;
            }
        }
        groupInputRef.current = hiddenInput;
        validation.inputRef.current = hiddenInput;
        return cleanup;
    }
    const registerControlRef = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])((element, isDisabled = false)=>{
        if (!element) {
            return;
        }
        if (isDisabled) {
            if (controlRef.current === element) {
                controlRef.current = null;
            }
            return;
        }
        if (controlRef.current == null) {
            controlRef.current = element;
        }
    });
    const registerInputRef = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])((input)=>{
        if (!input || input.disabled) {
            return undefined;
        }
        if (!firstEnabledInputRef.current) {
            firstEnabledInputRef.current = input;
        }
        const currentInput = groupInputRef.current;
        if (input.checked || currentInput == null || currentInput.disabled) {
            return setInputRef(input);
        }
        return undefined;
    });
    const getFieldValue = (0, __TURBOPACK__imported__module__32787__1["useStableCallback"])(()=>checkedValue ?? null);
    (0, __TURBOPACK__imported__module__90017__["useRegisterFieldControl"])(controlRef, {
        id,
        value: checkedValue,
        getValue: getFieldValue
    });
    (0, __TURBOPACK__imported__module__73650__["useValueChanged"])(checkedValue, ()=>{
        clearErrors(name);
        setDirty(checkedValue !== validityData.initialValue);
        setFilled(checkedValue != null);
        if (shouldValidateOnChange()) {
            validation.commit(checkedValue);
        } else {
            validation.commit(checkedValue, true);
        }
        const fallbackInput = firstEnabledInputRef.current;
        if (checkedValue == null && fallbackInput && !fallbackInput.disabled) {
            setInputRef(fallbackInput);
        }
    });
    const [touched, setTouched] = __TURBOPACK__imported__module__51268__6["useState"](false);
    const ariaLabelledby = elementProps['aria-labelledby'] ?? labelId ?? fieldsetContext?.legendId;
    const state = {
        ...fieldState,
        disabled: disabled ?? false,
        required: required ?? false,
        readOnly: readOnly ?? false
    };
    const contextValue = __TURBOPACK__imported__module__51268__6["useMemo"](()=>({
            ...fieldState,
            checkedValue,
            disabled,
            form,
            validation,
            name,
            onValueChange,
            readOnly,
            registerControlRef,
            registerInputRef,
            required,
            setCheckedValue,
            setTouched,
            touched
        }), [
        checkedValue,
        disabled,
        form,
        validation,
        fieldState,
        name,
        onValueChange,
        readOnly,
        registerControlRef,
        registerInputRef,
        required,
        setCheckedValue,
        setTouched,
        touched
    ]);
    const defaultProps = {
        role: 'radiogroup',
        'aria-required': required || undefined,
        'aria-disabled': disabled || undefined,
        'aria-readonly': readOnly || undefined,
        'aria-labelledby': ariaLabelledby,
        onFocus () {
            setFocused(true);
        },
        onBlur (event) {
            if (!(0, __TURBOPACK__imported__module__95624__["contains"])(event.currentTarget, event.relatedTarget)) {
                setFieldTouched(true);
                setFocused(false);
                if (validationMode === 'onBlur') {
                    validation.commit(checkedValue);
                }
            }
        },
        onKeyDownCapture (event) {
            if (event.key.startsWith('Arrow')) {
                setFieldTouched(true);
                setTouched(true);
                setFocused(true);
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(RadioGroupContext.Provider, {
        value: contextValue,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__4["jsx"])(CompositeRoot, {
            render: render,
            className: className,
            style: style,
            state: state,
            props: [
                defaultProps,
                validation.getValidationProps,
                elementProps
            ],
            refs: [
                forwardedRef
            ],
            stateAttributesMapping: __TURBOPACK__imported__module__38744__1["fieldValidityMapping"],
            enableHomeAndEndKeys: false,
            modifierKeys: MODIFIER_KEYS
        })
    });
});
if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
;
var __TURBOPACK__imported__module__75157__ = __turbopack_context__.i(75157);
"use client";
;
;
;
;
function RadioGroup1({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(RadioGroup, {
        "data-slot": "radio-group",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("grid w-full gap-2", className),
        ...props
    });
}
function RadioGroupItem({ className, ...props }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(__TURBOPACK__imported__module__90279__.Root, {
        "data-slot": "radio-group-item",
        className: (0, __TURBOPACK__imported__module__75157__["cn"])("group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", className),
        ...props,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])(__TURBOPACK__imported__module__90279__.Indicator, {
            "data-slot": "radio-group-indicator",
            className: "flex size-4 items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__1["jsx"])("span", {
                className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground"
            })
        })
    });
}
;
var __TURBOPACK__imported__module__15288__ = __turbopack_context__.i(15288);
// MERGED MODULE: [project]/src/hooks/use-sfc-data.ts [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__51268__9 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__61238__ = __turbopack_context__.i(61238);
var __TURBOPACK__imported__module__8069__ = __turbopack_context__.i(8069);
"use client";
;
;
function useSfcData() {
    const [rowData, setRowData] = (0, __TURBOPACK__imported__module__51268__9["useState"])([]);
    const [totalCount, setTotalCount] = (0, __TURBOPACK__imported__module__51268__9["useState"])(0);
    const [isLoading, setIsLoading] = (0, __TURBOPACK__imported__module__51268__9["useState"])(false);
    const [error, setError] = (0, __TURBOPACK__imported__module__51268__9["useState"])(null);
    const cancelledRef = (0, __TURBOPACK__imported__module__51268__9["useRef"])(false);
    const search = (0, __TURBOPACK__imported__module__51268__9["useCallback"])((params)=>{
        cancelledRef.current = false;
        setIsLoading(true);
        setError(null);
        const query = new URLSearchParams({
            keyword: params.keyword,
            licstatus: params.licstatus,
            searchby: params.searchby
        });
        (0, __TURBOPACK__imported__module__61238__["apiGet"])(`${__TURBOPACK__imported__module__8069__["API"].sfcSearch}?${query.toString()}`).then((data)=>{
            if (cancelledRef.current) return;
            setRowData(data.items);
            setTotalCount(data.totalCount);
            setIsLoading(false);
        }).catch((err)=>{
            if (cancelledRef.current) return;
            console.error("Failed to fetch SFC data:", err);
            setRowData([]);
            setTotalCount(0);
            setError(err instanceof Error ? err : new Error(String(err)));
            setIsLoading(false);
        });
    }, []);
    return {
        rowData,
        totalCount,
        isLoading,
        error,
        search
    };
}
// MERGED MODULE: [project]/src/features/sfcpr/sfcpr-grid.tsx [app-client] (ecmascript)
;
var __TURBOPACK__imported__module__8063__5 = __TURBOPACK__imported__module__8063__;
var __TURBOPACK__imported__module__51268__10 = __TURBOPACK__imported__module__51268__;
var __TURBOPACK__imported__module__2776__ = __turbopack_context__.i(2776);
var __TURBOPACK__imported__module__9279__ = __turbopack_context__.i(9279);
var __TURBOPACK__imported__module__53102__ = __turbopack_context__.i(53102);
var __TURBOPACK__imported__module__78786__ = __turbopack_context__.i(78786);
var __TURBOPACK__imported__module__75636__ = __turbopack_context__.i(75636);
var __TURBOPACK__imported__module__25133__ = __turbopack_context__.i(25133);
"use client";
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
    __TURBOPACK__imported__module__53102__["ClipboardModule"],
    __TURBOPACK__imported__module__53102__["ContextMenuModule"],
    __TURBOPACK__imported__module__53102__["SideBarModule"],
    __TURBOPACK__imported__module__53102__["FiltersToolPanelModule"],
    __TURBOPACK__imported__module__53102__["ColumnsToolPanelModule"],
    __TURBOPACK__imported__module__53102__["StatusBarModule"]
];
function SfcprGrid({ rowData, isLoading }) {
    const defaultColDef = (0, __TURBOPACK__imported__module__51268__10["useMemo"])(()=>({
            sortable: true,
            resizable: true,
            floatingFilter: true
        }), []);
    const columnDefs = (0, __TURBOPACK__imported__module__51268__10["useMemo"])(()=>{
        const typeCol = (actType)=>({
                headerName: `T${actType}`,
                flex: 0.5,
                minWidth: 40,
                cellRenderer: (params)=>{
                    if (!params.data) return null;
                    const has = params.data.raDetails.some((ra)=>ra.actType === actType);
                    return has ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])("div", {
                        className: "flex items-center justify-center h-full text-emerald-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])(__TURBOPACK__imported__module__75636__["Check"], {
                            className: "size-3.5"
                        })
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])("div", {
                        className: "flex items-center justify-center h-full text-muted-foreground/25",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])(__TURBOPACK__imported__module__25133__["Minus"], {
                            className: "size-3.5"
                        })
                    });
                }
            });
        return [
            {
                field: "ceref",
                headerName: "CE Ref",
                filter: true,
                flex: 1,
                minWidth: 80
            },
            {
                field: "name",
                headerName: "Name (EN)",
                filter: true,
                flex: 2,
                minWidth: 120
            },
            {
                field: "nameChi",
                headerName: "Name (ZH)",
                filter: true,
                flex: 2,
                minWidth: 100
            },
            {
                headerName: "Type",
                filter: true,
                flex: 1,
                minWidth: 90,
                valueGetter: (params)=>{
                    if (!params.data) return "";
                    const d = params.data;
                    if (d.isIndi) return "Individual";
                    if (d.isCorp) return "Corporation";
                    return "";
                }
            },
            {
                field: "hasActiveLicence",
                headerName: "Active Licence",
                filter: true,
                flex: 1,
                minWidth: 100,
                cellRenderer: (params)=>{
                    return params.value === "Y" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])("div", {
                        className: "flex items-center h-full text-emerald-500",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])(__TURBOPACK__imported__module__75636__["Check"], {
                            className: "size-4"
                        })
                    }) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])("div", {
                        className: "flex items-center h-full text-muted-foreground/40",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])(__TURBOPACK__imported__module__25133__["Minus"], {
                            className: "size-4"
                        })
                    });
                }
            },
            {
                headerName: "Details",
                flex: 0.8,
                minWidth: 80,
                sortable: false,
                cellRenderer: (params)=>{
                    if (!params.data?.ceref) return null;
                    const type = params.data.isCorp ? "corp" : "indi";
                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])("a", {
                        href: `https://apps.sfc.hk/publicregWeb/${type}/${params.data.ceref}/details`,
                        target: "_blank",
                        rel: "noopener noreferrer",
                        className: "text-blue-600 underline hover:text-blue-800",
                        children: "Details"
                    });
                }
            },
            typeCol(1),
            typeCol(2),
            typeCol(3),
            typeCol(4),
            typeCol(5),
            typeCol(6),
            typeCol(7),
            typeCol(8),
            typeCol(9),
            typeCol(10)
        ];
    }, []);
    const onFirstDataRendered = (0, __TURBOPACK__imported__module__51268__10["useCallback"])((params)=>{
        params.api.autoSizeColumns([
            "ceref"
        ]);
    }, []);
    const statusBar = (0, __TURBOPACK__imported__module__51268__10["useMemo"])(()=>{
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])(__TURBOPACK__imported__module__2776__["AgGridProvider"], {
        modules: modules,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])("div", {
            className: "h-full min-h-0 dloomberg-terminal-grid",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__5["jsx"])(__TURBOPACK__imported__module__2776__["AgGridReact"], {
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
"use client";
;
;
;
;
;
;
;
;
function SfcprPage() {
    const { rowData, totalCount, isLoading, search } = useSfcData();
    const [keyword, setKeyword] = (0, __TURBOPACK__imported__module__51268__["useState"])("");
    const [licstatus, setLicstatus] = (0, __TURBOPACK__imported__module__51268__["useState"])("active");
    const [searchby, setSearchby] = (0, __TURBOPACK__imported__module__51268__["useState"])("individual");
    const handleSearch = (0, __TURBOPACK__imported__module__51268__["useCallback"])(()=>{
        const trimmed = keyword.trim();
        if (!trimmed) return;
        search({
            keyword: trimmed,
            licstatus,
            searchby
        });
    }, [
        keyword,
        licstatus,
        searchby,
        search
    ]);
    const handleKeyDown = (0, __TURBOPACK__imported__module__51268__["useCallback"])((e)=>{
        if (e.key === "Enter") handleSearch();
    }, [
        handleSearch
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
        className: "size-full flex justify-center overflow-auto",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
            className: "size-full max-w-350 p-4",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                className: "flex flex-col size-full gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(__TURBOPACK__imported__module__15288__["Card"], {
                        className: "shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__15288__["CardHeader"], {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__15288__["CardTitle"], {
                                    className: "text-lg",
                                    children: "HKSFC Public Register"
                                })
                            }),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(__TURBOPACK__imported__module__15288__["CardContent"], {
                                className: "space-y-5",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                        className: "grid grid-cols-1 sm:grid-cols-2 gap-5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                                className: "space-y-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("h3", {
                                                        className: "text-sm font-medium text-muted-foreground",
                                                        children: "Licence / Registration Status"
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(RadioGroup1, {
                                                        value: licstatus,
                                                        onValueChange: (v)=>setLicstatus(v),
                                                        className: "gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("label", {
                                                                htmlFor: "status-active",
                                                                className: "flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(RadioGroupItem, {
                                                                        value: "active",
                                                                        id: "status-active"
                                                                    }),
                                                                    "Active"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("label", {
                                                                htmlFor: "status-active-inactive",
                                                                className: "flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(RadioGroupItem, {
                                                                        value: "all",
                                                                        id: "status-active-inactive"
                                                                    }),
                                                                    "Active and inactive"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                                className: "space-y-2.5",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("h3", {
                                                        className: "text-sm font-medium text-muted-foreground",
                                                        children: "Search By"
                                                    }),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])(RadioGroup1, {
                                                        value: searchby,
                                                        onValueChange: (v)=>setSearchby(v),
                                                        className: "gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("label", {
                                                                htmlFor: "search-individual",
                                                                className: "flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(RadioGroupItem, {
                                                                        value: "individual",
                                                                        id: "search-individual"
                                                                    }),
                                                                    "Individual name"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("label", {
                                                                htmlFor: "search-corporation",
                                                                className: "flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(RadioGroupItem, {
                                                                        value: "corporation",
                                                                        id: "search-corporation"
                                                                    }),
                                                                    "Corporation name"
                                                                ]
                                                            }),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("label", {
                                                                htmlFor: "search-entity-number",
                                                                className: "flex items-center gap-2 text-xs cursor-pointer rounded-md border px-3 py-2 has-data-[state=checked]:border-primary/50 has-data-[state=checked]:bg-primary/5 transition-colors",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(RadioGroupItem, {
                                                                        value: "ceref",
                                                                        id: "search-entity-number"
                                                                    }),
                                                                    "Central entity number"
                                                                ]
                                                            })
                                                        ]
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
                                        className: "border-t"
                                    }),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsxs"])("div", {
                                        className: "flex flex-col sm:flex-row gap-2.5",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__93479__["Input"], {
                                                placeholder: "Enter search term...",
                                                className: "flex-1",
                                                value: keyword,
                                                onChange: (e)=>setKeyword(e.target.value),
                                                onKeyDown: handleKeyDown
                                            }),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(__TURBOPACK__imported__module__19455__["Button"], {
                                                onClick: handleSearch,
                                                disabled: isLoading,
                                                className: "sm:w-auto w-full",
                                                children: isLoading ? "Searching…" : "Search"
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])("div", {
                        className: "flex-1 min-h-150",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__8063__["jsx"])(SfcprGrid, {
                            rowData: rowData,
                            isLoading: isLoading
                        })
                    })
                ]
            })
        })
    });
}
__turbopack_context__.s([
    "SfcprPage",
    0,
    SfcprPage
], 4508);
}),
]);