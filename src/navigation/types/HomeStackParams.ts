import { Barcode } from "vision-camera-code-scanner";

export type HomeStackParams = {
    Home: { barcode?: Barcode | null; };
    ProductList: undefined;
    ScanCodeBar: undefined;
}