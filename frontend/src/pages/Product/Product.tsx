import { ProductProvider } from "@/context/productContext";
import ProductForm from "./ProductForm";

export default function Product(){
    return (
        <ProductProvider>
           <ProductForm />
        </ProductProvider>
    );
}