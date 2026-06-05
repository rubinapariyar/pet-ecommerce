import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import { features } from "@/lib/data/features";
import SectionTitle from "@/components/shared/section-title";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Cards from "@/components/cards";
import { cards } from "@/lib/data/cards";
import { useEffect, useState } from "react";
import CatCard from "@/components/cat-card";
import type { CatBreedData } from "@/types/catBreeds.type";
import QuoteGenerator from "@/components/quoteGenerator";

function Home() {
  const [page, setPage] = useState(0);
  const [catBreeds, setCatBreeds] = useState<CatBreedData>();

  useEffect(() => {
    fetch("https://catfact.ninja/breeds")
      .then((response) => response.json())
      .then((data) => setCatBreeds(data));
  }, []);
  
  return (
    <>
      <Header />
      <Hero />
      <QuoteGenerator />
     
      <div className="container mx-auto py-10 space-y-10">
        {cards.map((card, index) => (
          <Cards
            key={index}
            title={card.title}
            description={card.description}
            image={card.image}
          />
        ))}
      </div>

      {catBreeds && catBreeds.data.length > 0 && (
        <div className="container mx-auto py-10 space-y-10">
          <h2 className="text-2xl font-bold mb-4">Cat Breeds</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {catBreeds.data.map((breed) => (
              <CatCard
                key={breed.breed}
                breed={breed.breed}
                country={breed.country}
                origin={breed.origin}
                coat={breed.coat}
                pattern={breed.pattern}
              />
            ))}
          </div>
          Current Page: {catBreeds.current_page}
        </div>
      )}

      <div className="container mx-auto px-4 m">
        <section className="py-10 bg-gray-100 px-8">
          <SectionTitle
            title="Featured Features"
            description="Discover our most popular features designed to enhance your experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features
              .filter((feature) => feature.isFeatured)
              .map((feature) => (
                <Features
                  key={feature.id}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  imgClass="w-20 h-20 border rounded-full p-2"
                />
              ))}
          </div>
        </section>

        <section className="py-10 bg-gray-100 px-8 m-3 mx-auto">
          <SectionTitle
            title="All Features"
            description="Explore all the features we have to offer."
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            blanditiis laudantium minus!
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.slice(0, 4).map((feature) => (
              <Features
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                imgClass="w-20 h-20 border md p-2"
              />
            ))}
          </div>
        </section>

        <Button>Button</Button>
      </div>
      <Footer />
    </>
  );
}

export default Home;
