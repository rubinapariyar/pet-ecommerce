interface Feature {
  title: string;
  description: string;
  icon: string;
}

const Features = ({ title, description, icon }: Feature) => {
  return (
    <div className="border rounded-md p-6">
      <img src={icon} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default Features;
