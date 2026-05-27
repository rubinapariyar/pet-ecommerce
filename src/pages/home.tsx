import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import { features } from "@/lib/data/features";
import SectionTitle from "@/components/shared/section-title";
import hero from "@/assets/hero.png";
import Navbar from "@/components/navbar";

function Home() {
  return (
    <>
      <Navbar />
      <section className="relative h-screen bg-cover bg-center">
        <img src={hero} alt="HeroImage" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            Welcome to Our App
          </h1>
          <p className="text-lg md:text-2xl mb-8">
            Discover the best features to enhance your experience.
          </p>
          <Button size="lg">Get Started</Button>
        </div>
      </section>
      <div className="container mx-auto px-4">
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

        <section className="py-10 bg-gray-100 px-8">
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
    </>
  );
}

export default Home;
