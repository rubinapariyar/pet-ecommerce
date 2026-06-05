 import { Card, CardContent, CardTitle } from "./ui/card";
import type { CatBreed } from "@/types/catBreeds.type";

const CatCard = ({ breed, country, origin, coat, pattern }: CatBreed) => {
  return (
    <Card>
      <CardTitle>{breed}</CardTitle>
      <CardContent>
        <p>
          <strong>Country:</strong> {country}
        </p>
        <p>
          <strong>Origin:</strong> {origin}
        </p>
        <p>
          <strong>Coat:</strong> {coat}
        </p>
        <p>
          <strong>Pattern:</strong> {pattern}
        </p>
      </CardContent>
    </Card>
  );
};

export default CatCard;
