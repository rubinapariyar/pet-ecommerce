import { features } from "@/lib/data/features";

const Features = () => {
  return (
    <div>
      {features.map((feature) => (
        <div key={feature.id}>
          <img src={feature.icon} alt={feature.title} />
          <h3>{feature.title}</h3>
          <p>{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
