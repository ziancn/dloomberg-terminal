import { themeQuartz, iconSetAlpine } from 'ag-grid-community';



export const dloombergTerminalTheme = themeQuartz
    .withPart(iconSetAlpine)
    .withParams({
        

        borderRadius: 0,
        inputBorderRadius: 0,
        wrapperBorderRadius: 0,

        spacing: 6,
        headerVerticalPaddingScale: 0.8,
        cellHorizontalPaddingScale: 0.7,
        rowVerticalPaddingScale: 0.8,

        widgetContainerHorizontalPadding: 10,
        widgetContainerVerticalPadding: 10,
        // widgetHorizontalSpacing: 16,
        widgetVerticalSpacing: 8,

        inputPaddingStart: 2,

        rowBorder: false,
        columnBorder: true,
        headerColumnBorder: true,

        // inputFocusBorderColor: 'transparent', // 屏蔽聚焦边框颜色改变
        focusShadow: "none",
        inputFocusBorder: { color: "var(--ring)", width: 2 },
        // focusShadow: "var(--ring) 0px 0px 0px 0px",
        browserColorScheme: "dark",
        backgroundColor: "var(--background)",
        oddRowBackgroundColor: "var(--background)",
        headerBackgroundColor: "var(--secondary)",
        headerTextColor: "var(--muted-foreground)",
        cellTextColor: "var(--bloomberg-primary)",
        foregroundColor: "var(--muted-foreground)",
        inputBackgroundColor: "var(--bloomberg-primary)",
        inputDisabledBackgroundColor: "var(--bloomberg-primary-muted)",
        inputTextColor: "var(--primary-foreground)",
        menuBackgroundColor: "var(--secondary)",

        accentColor: "oklch(50% 0.169 248.81)",
        rangeSelectionBorderStyle: "dashed",
        fontFamily: "inherit",
        fontSize: "var(--text-sm)",
        headerColumnResizeHandleHeight: "100%",
        headerColumnResizeHandleWidth: 0,
        headerRowBorder: false,
        iconSize: 16,

        inputHeight: 16,
    });


// export const dloombergTerminalTheme = themeQuartz
//     .withPart(iconSetAlpine)
//     .withParams({
//         // ====== //
//         // Layout //
//         // ====== //
//         borderRadius: 0, // 单元格内控件：checkbox、filter 输入框、弹出菜单等
//         wrapperBorderRadius: 0, // 整个 grid 最外层容器的圆角
//         headerVerticalPaddingScale: 0.3, // 表头行上下内边距系数
//         rowVerticalPaddingScale: 0.8, // 数据行上下内边距系数（未手动设 rowHeight 时生效）
//         // cellHorizontalPaddingScale: 0.8,
//         rowBorder: false,
//         // ====== //
//         // Colors //
//         // ====== //
//         // --- 全局 ---
//         accentColor: "#2196F3", // 强调色：选中、焦点、checkbox 等
//         backgroundColor: "var(--background)", // 半透明 UI 会叠在这层颜色上
//         foregroundColor: "var(--foreground)", // 默认文字/边框混色基准
//         borderColor: "var(--border)",
//         // chromeBackgroundColor: "var(--background)", // 表头、工具面板等非数据区背景

//         // --- 数据区 ---
//         dataBackgroundColor: "var(--background)",
//         cellTextColor: "var(--foreground)",
//         oddRowBackgroundColor: "var(--background)", // 斑马纹行背景；与 data 相同 = 关闭条纹感

//         // --- 表头 ---
//         headerBackgroundColor: "var(--primary-foreground)",
//         headerTextColor: "var(--foreground)",
//         // headerCellHoverBackgroundColor: "var(--accent)", // 鼠标悬停表头单元格；transparent = 不变色
//         // headerCellMovingBackgroundColor: "transparent", // 拖拽列时表头背景

//         // --- 行状态 ---
//         rowHoverColor: "var(--accent)",
//         selectedRowBackgroundColor: "color-mix(in oklch, var(--accent) 50%, transparent)",
//         columnHoverColor: "transparent", // 列悬停高亮；需在 gridOptions 开启 columnHoverHighlight

//         // --- 选区（Enterprise cellSelection）---
//         rangeSelectionBackgroundColor: "color-mix(in oklch, var(--primary) 10%, transparent)",
//         rangeSelectionBorderColor: "var(--ring)",
//         rangeSelectionBorderStyle: "dashed",

//         // --- 弹出层：列菜单 / 右键菜单 ---
//         menuBackgroundColor: "var(--popover)",
//         menuTextColor: "var(--popover-foreground)",
//         menuSeparatorColor: "var(--border)",
//         menuBorder: { color: "var(--border)", width: 1 },
//         // menuShadow: popoverShadow,
//         // cardShadow: popoverShadow,
//         // popupShadow: popoverShadow,
//         // dropdownShadow: popoverShadow,
//         listItemHeight: 28, // 下拉列表每一项高度

//         // --- 输入框（筛选、浮动筛选、侧栏）---
//         inputBackgroundColor: "var(--background)",
//         inputTextColor: "var(--foreground)",
//         inputBorder: { color: "var(--input)", width: 1 },
//         inputFocusBorder: { color: "var(--ring)", width: 1 },
//         focusShadow: "0 0 0 2px color-mix(in oklch, var(--ring) 50%, transparent)",

//         // --- Checkbox（行选、布尔列等）---
//         checkboxCheckedBackgroundColor: "var(--primary)",
//         checkboxCheckedBorderColor: "var(--primary)",
//         checkboxCheckedShapeColor: "var(--primary-foreground)",
//         // checkboxUncheckedBorderColor: "var(--border)",

//         // --- 按钮（侧栏、工具栏）---
//         buttonBackgroundColor: "var(--secondary)",
//         buttonTextColor: "var(--secondary-foreground)",
//         buttonBorder: { color: "var(--border)", width: 1 },
//         buttonHoverBackgroundColor: "var(--accent)",
//         buttonHoverTextColor: "var(--accent-foreground)",
//         iconButtonHoverBackgroundColor: "var(--accent)",
//     });







