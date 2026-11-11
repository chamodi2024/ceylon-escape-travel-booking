
export type Destination = {
  id: number;
  name: string;
  location: string;
  category: string;
  price: number;
  rating: number;
  image: string;
  images: string[];
  description: string;
  activities: string[];
};

export const destinations: Destination[] = [
  {
    id: 1,
    name: "Ella Adventure",
    location: "Ella, Sri Lanka",
    category: "Nature",
    price: 120,
    rating: 4.9,
    image: "/images/ella.jpg",
    images: [
      "/images/ella.jpg",
      "/images/ella-2.jpg",
      "/images/ella-3.jpg"
    ],
    description:
      "Discover the breathtaking beauty of Ella, a charming hill country destination in Sri Lanka. Explore lush tea plantations, scenic mountain trails, beautiful waterfalls and unforgettable viewpoints.",
    activities: [
      "Little Adam's Peak Hiking",
      "Nine Arch Bridge Visit",
      "Ravana Falls",
      "Tea Plantation Tour"
    ]
  },
  {
    id: 2,
    name: "Sigiriya Rock Fortress",
    location: "Sigiriya, Sri Lanka",
    category: "Culture",
    price: 95,
    rating: 4.8,
    image: "/images/sigiriya.jpg",
    images: [
      "/images/sigiriya.jpg",
      "/images/sigiriya-2.jpg",
      "/images/sigiriya-3.jpg"
    ],
    description:
      "Explore the magnificent ancient rock fortress of Sigiriya. Discover historic ruins, impressive frescoes, beautiful gardens and panoramic views from the summit.",
    activities: [
      "Sigiriya Rock Climbing",
      "Ancient History Tour",
      "Photography",
      "Garden Exploration"
    ]
  },
  {
    id: 3,
    name: "Mirissa Beach Escape",
    location: "Mirissa, Sri Lanka",
    category: "Beach",
    price: 150,
    rating: 4.9,
    image: "/images/mirissa.jpg",
    images: [
      "/images/mirissa.jpg",
      "/images/mirissa-2.jpg",
      "/images/mirissa-3.jpg"
    ],
    description:
      "Experience the tropical paradise of Mirissa. Relax on golden sandy beaches, enjoy stunning sunsets and explore exciting ocean adventures along Sri Lanka's southern coast.",
    activities: [
      "Beach Relaxation",
      "Whale Watching",
      "Surfing",
      "Sunset Photography"
    ]
  },
  {
    id: 4,
    name: "Kandy Cultural Tour",
    location: "Kandy, Sri Lanka",
    category: "Culture",
    price: 110,
    rating: 4.7,
    image: "/images/kandy.jpg",
    images: [
      "/images/kandy.jpg",
      "/images/kandy-2.jpg",
      "/images/kandy-3.jpg"
    ],
    description:
      "Discover the cultural heart of Sri Lanka in Kandy. Explore beautiful temples, scenic landscapes, traditional performances and the city's rich heritage.",
    activities: [
      "Temple of the Tooth Visit",
      "Kandy Lake Walk",
      "Cultural Dance Show",
      "Botanical Garden Visit"
    ]
  }
];
