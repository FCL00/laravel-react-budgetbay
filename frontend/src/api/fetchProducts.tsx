
export function fetchProducts() {
    const baseUrl = process.env.BASE_URL;
    return fetch(`${baseUrl}/api/products/`)
    .then((response) => {
        if(!response.ok){
            console.log("Error in fetching products");
            return [];
        }
        return response.json();
    }).catch( error => console.error(error));

}
