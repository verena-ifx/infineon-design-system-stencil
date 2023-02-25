/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface IfxAlert {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "icon": string;
        "overflowing": boolean;
    }
    interface IfxButton {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled": boolean;
        "href": string;
        "icon": string;
        "position": string;
        "setFocus": () => Promise<void>;
        "size": string;
        "target": string;
        "variant": 'solid' | 'outline' | 'outline-text';
    }
    interface IfxCard {
        "button": boolean;
        "headline": string;
        "list": boolean;
        "skyline": boolean;
        "subtitle": string;
        "text": string;
    }
    interface IfxDropdown {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxDropdownItem {
        "checkable": boolean;
        "disabled": boolean;
        "icon": string;
        "label": string;
        "size": 's' | 'm';
    }
    interface IfxDropdownMenu {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxFilterInput {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface IfxIcon {
        "icon": any;
        "ifxIcon": any;
    }
    interface IfxSearchInput {
        "disabled": boolean;
        "filter": boolean;
        "icon": boolean;
        "label": string;
        "search": boolean;
        "size": 's' | 'm';
    }
    interface TestButton {
        "color": 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled": boolean;
        "href": string;
        "icon": string;
        "position": string;
        "setFocus": () => Promise<void>;
        "size": string;
        "target": string;
        "variant": 'solid' | 'outline' | 'outline-text';
    }
}
declare global {
    interface HTMLIfxAlertElement extends Components.IfxAlert, HTMLStencilElement {
    }
    var HTMLIfxAlertElement: {
        prototype: HTMLIfxAlertElement;
        new (): HTMLIfxAlertElement;
    };
    interface HTMLIfxButtonElement extends Components.IfxButton, HTMLStencilElement {
    }
    var HTMLIfxButtonElement: {
        prototype: HTMLIfxButtonElement;
        new (): HTMLIfxButtonElement;
    };
    interface HTMLIfxCardElement extends Components.IfxCard, HTMLStencilElement {
    }
    var HTMLIfxCardElement: {
        prototype: HTMLIfxCardElement;
        new (): HTMLIfxCardElement;
    };
    interface HTMLIfxDropdownElement extends Components.IfxDropdown, HTMLStencilElement {
    }
    var HTMLIfxDropdownElement: {
        prototype: HTMLIfxDropdownElement;
        new (): HTMLIfxDropdownElement;
    };
    interface HTMLIfxDropdownItemElement extends Components.IfxDropdownItem, HTMLStencilElement {
    }
    var HTMLIfxDropdownItemElement: {
        prototype: HTMLIfxDropdownItemElement;
        new (): HTMLIfxDropdownItemElement;
    };
    interface HTMLIfxDropdownMenuElement extends Components.IfxDropdownMenu, HTMLStencilElement {
    }
    var HTMLIfxDropdownMenuElement: {
        prototype: HTMLIfxDropdownMenuElement;
        new (): HTMLIfxDropdownMenuElement;
    };
    interface HTMLIfxFilterInputElement extends Components.IfxFilterInput, HTMLStencilElement {
    }
    var HTMLIfxFilterInputElement: {
        prototype: HTMLIfxFilterInputElement;
        new (): HTMLIfxFilterInputElement;
    };
    interface HTMLIfxIconElement extends Components.IfxIcon, HTMLStencilElement {
    }
    var HTMLIfxIconElement: {
        prototype: HTMLIfxIconElement;
        new (): HTMLIfxIconElement;
    };
    interface HTMLIfxSearchInputElement extends Components.IfxSearchInput, HTMLStencilElement {
    }
    var HTMLIfxSearchInputElement: {
        prototype: HTMLIfxSearchInputElement;
        new (): HTMLIfxSearchInputElement;
    };
    interface HTMLTestButtonElement extends Components.TestButton, HTMLStencilElement {
    }
    var HTMLTestButtonElement: {
        prototype: HTMLTestButtonElement;
        new (): HTMLTestButtonElement;
    };
    interface HTMLElementTagNameMap {
        "ifx-alert": HTMLIfxAlertElement;
        "ifx-button": HTMLIfxButtonElement;
        "ifx-card": HTMLIfxCardElement;
        "ifx-dropdown": HTMLIfxDropdownElement;
        "ifx-dropdown-item": HTMLIfxDropdownItemElement;
        "ifx-dropdown-menu": HTMLIfxDropdownMenuElement;
        "ifx-filter-input": HTMLIfxFilterInputElement;
        "ifx-icon": HTMLIfxIconElement;
        "ifx-search-input": HTMLIfxSearchInputElement;
        "test-button": HTMLTestButtonElement;
    }
}
declare namespace LocalJSX {
    interface IfxAlert {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "icon"?: string;
        "overflowing"?: boolean;
    }
    interface IfxButton {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled"?: boolean;
        "href"?: string;
        "icon"?: string;
        "position"?: string;
        "size"?: string;
        "target"?: string;
        "variant"?: 'solid' | 'outline' | 'outline-text';
    }
    interface IfxCard {
        "button"?: boolean;
        "headline"?: string;
        "list"?: boolean;
        "skyline"?: boolean;
        "subtitle"?: string;
        "text"?: string;
    }
    interface IfxDropdown {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxDropdownItem {
        "checkable"?: boolean;
        "disabled"?: boolean;
        "icon"?: string;
        "label"?: string;
        "size"?: 's' | 'm';
    }
    interface IfxDropdownMenu {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxFilterInput {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface IfxIcon {
        "icon"?: any;
        "ifxIcon"?: any;
    }
    interface IfxSearchInput {
        "disabled"?: boolean;
        "filter"?: boolean;
        "icon"?: boolean;
        "label"?: string;
        "search"?: boolean;
        "size"?: 's' | 'm';
    }
    interface TestButton {
        "color"?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning';
        "disabled"?: boolean;
        "href"?: string;
        "icon"?: string;
        "position"?: string;
        "size"?: string;
        "target"?: string;
        "variant"?: 'solid' | 'outline' | 'outline-text';
    }
    interface IntrinsicElements {
        "ifx-alert": IfxAlert;
        "ifx-button": IfxButton;
        "ifx-card": IfxCard;
        "ifx-dropdown": IfxDropdown;
        "ifx-dropdown-item": IfxDropdownItem;
        "ifx-dropdown-menu": IfxDropdownMenu;
        "ifx-filter-input": IfxFilterInput;
        "ifx-icon": IfxIcon;
        "ifx-search-input": IfxSearchInput;
        "test-button": TestButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "ifx-alert": LocalJSX.IfxAlert & JSXBase.HTMLAttributes<HTMLIfxAlertElement>;
            "ifx-button": LocalJSX.IfxButton & JSXBase.HTMLAttributes<HTMLIfxButtonElement>;
            "ifx-card": LocalJSX.IfxCard & JSXBase.HTMLAttributes<HTMLIfxCardElement>;
            "ifx-dropdown": LocalJSX.IfxDropdown & JSXBase.HTMLAttributes<HTMLIfxDropdownElement>;
            "ifx-dropdown-item": LocalJSX.IfxDropdownItem & JSXBase.HTMLAttributes<HTMLIfxDropdownItemElement>;
            "ifx-dropdown-menu": LocalJSX.IfxDropdownMenu & JSXBase.HTMLAttributes<HTMLIfxDropdownMenuElement>;
            "ifx-filter-input": LocalJSX.IfxFilterInput & JSXBase.HTMLAttributes<HTMLIfxFilterInputElement>;
            "ifx-icon": LocalJSX.IfxIcon & JSXBase.HTMLAttributes<HTMLIfxIconElement>;
            "ifx-search-input": LocalJSX.IfxSearchInput & JSXBase.HTMLAttributes<HTMLIfxSearchInputElement>;
            "test-button": LocalJSX.TestButton & JSXBase.HTMLAttributes<HTMLTestButtonElement>;
        }
    }
}
