interface Cards{
    title: string;  
    description: string;
    image: string;
}

const Cards = ({ title, description, image }: Cards) => {
    return (
        <div className="container mx-auto py-3 justify-center">
            <img src={image} alt={title} className="w-full h-30 object-cover mb-4" />
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p>{description}</p>
        </div>
    );
}

export default Cards;
