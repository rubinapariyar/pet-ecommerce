import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import { featuredFeatures, features } from "@/lib/data/features";
import SectionTitle from "@/components/shared/section-title";

function Home() {
  return (
    <>
      <div className="container mx-auto px-4">
        <section className="py-10 bg-gray-100 px-8">
          <SectionTitle
            title="Featured Features"
            description="Discover our most popular features designed to enhance your experience."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {featuredFeatures.map((feature) => (
              <Features
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
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
            {features.map((feature) => (
              <Features
                key={feature.id}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
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
