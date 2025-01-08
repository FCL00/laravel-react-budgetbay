export function fetchCategory(){
    const baseUrl = process.env.BASE_URL;
    return fetch(`${baseUrl}/api/categories/`)
    .then((response)=>{
        if(!response.ok){
            throw new Error("Error in fetching categories");
        }
        return response.json();
    }).catch(error => console.error(error));
}