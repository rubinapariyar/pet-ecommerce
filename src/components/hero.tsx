import hero from "@/assets/hero.png";

const Hero = () => {
  return (
    <div className="flex container mx-auto py-10 justify-between">
      <div>
        <h1 className="text-4xl font-bold mb-4">Put people first</h1>
        <p className="max-w-xl">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur,
          quae labore maiores, ipsam iusto vitae similique deleniti officiis at
          adipisci fuga nemo maxime quam est veniam quis excepturi saepe fugit.
        </p>
      </div>
      <div>
        <img src={hero} />
      </div>
    </div>
  );
};

export default Hero;
