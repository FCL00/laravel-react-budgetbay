import { category } from "@/assets/index";
import CategoryCard from "./CategoryCard";

const CategorySection = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold">Explore our menu</h1>
      <p className="line-clamp-2">
        Choose from our wide variety of delicious dishes, ranging from hearty
        breakfasts <br/> to satisfying dinners, snacks, and desserts. We have
        something for everyone!
      </p>

      <div className="mt-4 flex overflow-x-auto md:justify-between md:flex-nowrap space-x-4">
        {category.map((food) => {
          return <CategoryCard key={food.name} name={food.name} image={food.image} />;
        })}
      </div>
    </div>
  );
};

export default CategorySection;
