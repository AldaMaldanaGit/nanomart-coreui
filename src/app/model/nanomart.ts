export class Products {
    id: number;
    barcode_id: string;
    name: string;
    description: string;
    //nanomart_id: string;
    price: number;
    image_base64: string;
 }

 export class ProductsEdit {
    id: number;
    barcode: string;
    name: string;
    description: string;
    price: number;
    status: string;
 }