import { Button } from "@/components/ui/button";
import Features from "@/components/features";
import { features } from "@/lib/data/features";
import SectionTitle from "@/components/shared/section-title";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Header from "@/components/header";

function Home() {
  return (
    <>
    <Header/>
      <Hero />
      <div className="container mx-auto py-10 space-y-10">
        <div>
          <h2 className="mb-2">Justify Between</h2>
          <div className="flex gap-2 justify-between border">
            <div className="h-16 w-16 border rounded-xl p-2">Box 1</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 2</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 3</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 4</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 5</div>
          </div>
        </div>

        <div>
          <h2 className="mb-2">Justify Evenly</h2>
          <div className="flex gap-2 justify-evenly border">
            <div className="h-16 w-16 border rounded-xl p-2">Box 1</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 2</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 3</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 4</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 5</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 5</div>
          </div>
        </div>

        <div>
          <h2 className="mb-2">Justify Around</h2>
          <div className="flex gap-2 justify-around border">
            <div className="h-16 w-16 border rounded-xl p-2">Box 1</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 2</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 3</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 4</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 5</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 5</div>
          </div>
        </div>
        <div>
          <h2 className="mb-2">Justify End</h2>
          <div className="flex gap-2 justify-end border">
            <div className="h-16 w-16 border rounded-xl p-2">Box 1</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 2</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 3</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 4</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 5</div>
          </div>
        </div>
        <div>
          <h2 className="mb-2">Justify Center</h2>
          <div className="flex gap-2 justify-center border">
            <div className="h-16 w-16 border rounded-xl p-2">Box 1</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 2</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 3</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 4</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 5</div>
          </div>
        </div>
        <div>
          <h2 className="mb-2">Justify Baseline</h2>
          <div className="flex gap-2 justify-baseline border">
            <div className="h-16 w-16 border rounded-xl p-2">Box 1</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 2</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 3</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 4</div>
            <div className="h-16 w-16 border rounded-xl p-2">Box 5</div>
          </div>
        </div>
      </div>

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
      <Footer/>
    </>
  );
}

export default Home;
