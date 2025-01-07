
interface IProducts {
    name: string;
    description: string;
    price: number;
    stock?: number;
    image: File;
}

export default async function CreateProduct(data: IProducts): Promise<IProducts>{

    const response = await fetch("http://127.0.0.1:8000/api/products/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
    });

    if(!response.ok){
        console.error("Something went wrong!");
    }

    return await response.json();
}