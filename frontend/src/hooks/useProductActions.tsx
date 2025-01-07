import { useProduct } from "@/context/productContext";
import createProduct from "@/api/productService";

interface IProducts {
    id?: number;
    name: string;
    description: string;
    price: number;
    stock? : number;
    image: File;
}


export function useProductActions() {
    const { dispatch }  = useProduct();

    async function addProduct(data: IProducts){
        const product = await createProduct(data);
        dispatch({ type: "ADD_PRODUCT", payload: product });
    }

    return { addProduct };
}
