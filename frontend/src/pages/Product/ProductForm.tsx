import { useForm } from "react-hook-form";
import { useProductActions  } from "@/hooks/useProductActions";

interface IProducts {
    name: string;
    description: string;
    price: number;
    stock? : number;
    image: File;
}

export default function ProductForm() {

    const { addProduct } = useProductActions();

    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<IProducts>();


    async function onSubmit(data: IProducts) {
        try {
            await addProduct(data);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
                <label htmlFor="name" id="name">Product Name</label>
                <input type="text" {...register("name", { required: "Product Name is required" })}/>
                { errors.name && <p>{errors.name.message}</p> }
            </div>

            <div className="mb-4">
                <label htmlFor="description" id="description">Product Description</label>
                <input type="text" {...register("description", { required: "Product description is required"})}/>
                { errors.description && <p>{errors.description.message}</p> }
            </div>

            <div className="mb-4">
                <label htmlFor="price" id="price">Product Price</label>
                <input type="number" {...register("price", { required: "Product price is required"})}/>
                { errors.price && <p>{errors.price.message}</p> }
            </div>

            <div className="mb-4">
                <label htmlFor="stock" id="stock">Product Stock</label>
                <input type="number" {...register("stock", { required: "Product stock is required"})}/>
                { errors.stock && <p>{errors.stock.message}</p> }
            </div>

            <div className="mb-4">
                <label htmlFor="image" id="image">Product Image</label>
                <input type="file" {...register("image", {required: "Product image is required"})}/>
                { errors.image && <p>{errors.image.message}</p> }
            </div>

            <button type="submit" disabled={isSubmitting}>
                { isSubmitting ? "Loading..." : "Submit"}
            </button>
        </form>
    )
}
