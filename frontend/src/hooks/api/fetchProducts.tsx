
export function fetchProducts() {
    
    return fetch("http://127.0.0.1:8000/api/products/")
    .then((response) => {
        if(!response.ok){
            console.log("Error in fetching products");
            return [];
        }
        return response.json();
    }).catch( error => console.error(error));

    
}
