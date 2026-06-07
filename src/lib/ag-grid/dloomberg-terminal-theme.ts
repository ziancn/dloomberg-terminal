import { themeQuartz, iconSetAlpine } from 'ag-grid-community';
import './dloomberg-terminal-theme.css';

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

        focusShadow: "none",
        // focusShadow: "var(--ring) 0px 0px 0px 0px",
        inputFocusBorder: { color: "var(--ring)", width: 2 },

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