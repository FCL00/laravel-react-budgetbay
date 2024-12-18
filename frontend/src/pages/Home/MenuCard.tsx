import { FaPlus } from "react-icons/fa";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type MenuCardProps = {
  name: string;
  description: string;
  image: string;
};

export default function MenuCard({ name, description, image }: MenuCardProps) {

  return (
    <Card className="max-w-sm ">
      <CardHeader className="p-0 relative">
        <img
          className="rounded-t-sm w-full h-[300px] object-cover"
          src={image}
          alt={name}
        />
        <button className="card-favorite absolute top-3 right-3 p-4 bg-transparent/70 text-white hover:bg-white hover:text-black rounded-full">
          <FaPlus/>
        </button>
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-xl font-medium">{name}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  );
}
