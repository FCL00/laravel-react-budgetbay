import MenuCard from "./MenuCard";
import { img, img2 } from "@/assets";
export default function Menu() {
  return (
    <div className="mt-4 mb-4">
      <h1 className="text-3xl font-bold mb-4">Popular dish we have!</h1>
      <div className="card-grid">
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img}
        />
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img2}
        />
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img2}
        />
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img}
        />
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img2}
        />
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img2}
        />
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img}
        />
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img2}
        />
        <MenuCard
          name="pizza"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, consectetur."
          image={img2}
        />
      </div>
    </div>
  );
}
