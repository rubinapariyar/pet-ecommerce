import type { Card } from "@/types/cards.types";
import pet from "@/assets/images/pet.jpg";
import pet1 from "@/assets/images/pet1.jpg";
import pet2 from "@/assets/images/pet2.png";

export const cards: Card[] = [
  {
    title: "Card 1",
    description: "This is the description for Card 1.",
    image: pet1
  },
  {
    title: "Card 2",
    description: "This is the description for Card 2.",
    image: pet2
  },
  {
    title: "Card 3",
    description: "This is the description for Card 3.",
    image: pet
  }
]
