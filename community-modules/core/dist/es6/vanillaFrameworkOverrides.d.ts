// Type definitions for @ag-grid-community/core v25.0.1
// Project: http://www.ag-grid.com/
// Definitions by: Niall Crosby <https://github.com/ag-grid/>
import { IFrameworkOverrides } from "./interfaces/iFrameworkOverrides";
/** The base frameworks, eg React & Angular 2, override this bean with implementations specific to their requirement. */
export declare class VanillaFrameworkOverrides implements IFrameworkOverrides {
    setTimeout(action: any, timeout?: any): void;
    isOutsideAngular: (eventType: string) => boolean;
    addEventListener(element: HTMLElement, type: string, listener: EventListenerOrEventListenerObject, useCapture?: boolean): void;
    dispatchEvent(eventType: string, listener: () => {}): void;
}
