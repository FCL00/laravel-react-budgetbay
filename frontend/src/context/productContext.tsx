import { useReducer, createContext, useContext } from "react";

interface IProductContext{
    state: ProductState;
    dispatch: React.Dispatch<ProductAction>;
}

const ProductContext = createContext<IProductContext | undefined>(undefined);

type Product = {
    id?: number;
    name: string;
    price: number;
    description: string;
    stock?: number;
    image: File;
};

type ProductState = {
    products: Product[];
}

type ProductProviderProps = {
    children: React.ReactNode;
}

type ProductAction = 
    { type: "ADD_PRODUCT", payload: Product} 
    | {type: "UPDATE_PRODUCT", payload: {id: number, data: Partial<Product>}} 
    | { type: "DELETE_PRODUCT", payload: {id: number}} 


function productReducer(state: ProductState, action: ProductAction): ProductState {

    switch(action.type){
        case "ADD_PRODUCT":
            return { ...state, products: [...state.products, action.payload] };
        case "UPDATE_PRODUCT": 
            return {
                ...state,
                products: state.products.map((product) =>
                    product.id === action.payload.id
                      ? { ...product, ...action.payload.data }
                      : product
                ),
            };
        case "DELETE_PRODUCT": 
            return {
                ...state,
                products: state.products.filter((product) => product.id !== action.payload.id)
            }
        default: return state;
    }
}


export function ProductProvider({ children } : ProductProviderProps) {

    const [state, dispatch] = useReducer(productReducer, { products: []})


    return (
        <ProductContext.Provider value={{state, dispatch}}>
            {children}
        </ProductContext.Provider>
    )
}


// custom hook
export function useProduct(){
    const context = useContext(ProductContext);
    if(!context){
        throw new Error("useProduct must be used within a ProductProvider");
    }

    return context;
}