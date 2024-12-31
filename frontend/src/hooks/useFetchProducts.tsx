import { useEffect, useState } from "react";
import { fetchProducts } from "./api/fetchProducts";

interface IProduct {
    name: string;
    description: string;
    price: number;
    stock: number;
    image_url: string;
}


export default function useFetchProducts(){

    const [products, setProducts] = useState<IProduct[] | null>();
    const [isLoading, setLoading] = useState<boolean>(true);

    useEffect( ()=> {
        fetchProducts().then((items) => {
            setProducts(items);
        }).finally(() => setLoading(false));
    }, []);


    return { products, isLoading };
}