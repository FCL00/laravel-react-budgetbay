// import { category } from "@/assets/index";
import CategoryCard from "./CategoryCard";
import { useFetchCategory } from "@/hooks/useFetchCategory";

const CategorySection = () => {

  const {categories, isLoading } = useFetchCategory();

  if(isLoading){
    return <div className="mt-4 mb-4">Loading...</div>
  }
  
  return (
    <div>
      <h1 className="text-3xl font-bold">Explore our menu</h1>
      <p className="line-clamp-2">
        Choose from our wide variety of delicious dishes, ranging from hearty
        breakfasts <br/> to satisfying dinners, snacks, and desserts. We have
        something for everyone!
      </p>

      <div className="mt-4 flex overflow-x-auto md:justify-between md:flex-nowrap space-x-4">
        {categories?.map((category) => {
          return <CategoryCard key={category.name} name={category.name} image={category.image} />;
        })}
      </div>
    </div>
  );
};

export default CategorySection;
