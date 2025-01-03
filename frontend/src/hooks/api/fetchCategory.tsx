export function fetchCategory(){
    return fetch("http://127.0.0.1:8000/api/categories/")
    .then((response)=>{
        if(!response.ok){
            throw new Error("Error in fetching categories");
        }
        return response.json();
    }).catch(error => console.error(error));
}