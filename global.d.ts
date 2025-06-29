// src/types/global.d.ts
import type { IStaticMethods } from "preline/dist";
import type noUiSlider from "nouislider";
import type Dropzone from "dropzone";
import * as VanillaCalendarPro from "vanilla-calendar-pro";
import type { DataTables } from "datatables.net"; 

declare global {
  interface Window {
    _: typeof import("lodash");
    $: typeof import("jquery");
    jQuery: typeof import("jquery");
    DataTable: typeof DataTables;
    noUiSlider: typeof noUiSlider;
    Dropzone: typeof Dropzone;
    VanillaCalendarPro: typeof VanillaCalendarPro;
    HSStaticMethods: IStaticMethods;
  }
}

export {};
