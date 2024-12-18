
type CardProps = {
    name: string;
    image: string;
}

export default function CategoryCard({name, image} : CardProps){

    return (
        <div className="card w-32 h-32 flex-shrink-0">
            <button className="space-y-2">
            <img className="w-24 h-24 rounded-full mx-auto" src={image} alt={name} />
            <p className="text-center">{name}</p>
            </button>
      </div>
    );
}