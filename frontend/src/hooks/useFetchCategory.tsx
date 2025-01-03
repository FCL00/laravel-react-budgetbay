import {useEffect, useState } from "react";
import { fetchCategory } from "./api/fetchCategory";

interface ICategory {
    id: number;
    name: string;
    description: string;
    image: string;
}


export function useFetchCategory(){
    const [categories, setCategories] = useState<ICategory[] | null>([]);
    const [isLoading, setLoading] = useState<boolean>(true);


    useEffect(()=>{
        fetchCategory().then((items) => {
            setCategories(items);
        }).finally(()=> setLoading(false));
    }, []);

    return { categories, isLoading };
}