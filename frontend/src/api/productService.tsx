
interface IProducts {
    name: string;
    description: string;
    price: number;
    stock?: number;
    image: File;
}

export default async function CreateProduct(data: IProducts): Promise<IProducts>{

    const baseUrl = process.env.BASE_URL;
    const response = await fetch(`${baseUrl}/api/products`, {
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