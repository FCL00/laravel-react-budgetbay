import MenuCard from "./MenuCard";

import { useFetchProducts } from "@/hooks/useFetchProducts";

export default function Menu() {

  const {products, isLoading} = useFetchProducts();

  if(isLoading){
    return <div className="mt-4 mb-4">Loading...</div>
  }

  return (
    <div className="mt-4 mb-4">
      <h1 className="text-3xl font-bold mb-4">Popular dish we have!</h1>
      <div className="card-grid">
        {products?.map((product) => {
          return (
            <MenuCard
              key={product.name}
              name={product.name}
              description={product.description}
              image={product.image_url}
            />
          );
        })}
      </div>
    </div>
  );
}
