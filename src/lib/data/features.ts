import type { Feature } from "@/types/features.types";
import feature1 from "@/assets/images/feature-01.png";
import feature2 from "@/assets/images/feature-02.png";
import feature3 from "@/assets/images/feature-03.png";
import feature4 from  "@/assets/images/feature-04.png";



export const features: Feature[] = [
  {
    id: 'feature-1',
    title: 'Feature 1',
    description: 'Description of Feature 1',
    icon: feature1
  },
  {
    id: 'feature-2',
    title: 'Feature 2',
    description: 'Description of Feature 2',
    icon: feature2
  },
  {
    id: 'feature-3',
    title: 'Feature 3',
    description: 'Description of Feature 3',
    icon: feature3
  },
  {
    id: 'feature-4',
    title: 'Feature 4',
    description: 'Description of Feature 4',
    icon: feature4
  }
]

export const featuredFeatures: Feature[] = [
  {
    id: 'featured-feature-1',
    title: 'Featured Feature 1',
    description: 'Description of Featured Feature 1',
    icon: feature1
  },
  {
    id: 'featured-feature-2',
    title: 'Featured Feature 2',
    description: 'Description of Featured Feature 2',
    icon: feature2
  },
]
