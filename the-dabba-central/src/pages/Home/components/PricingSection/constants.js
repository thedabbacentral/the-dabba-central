export const PRICING_PLANS = [
  {
    id: 1,
    name: "Mini Thali",
    subtitle: "Ideal for light meals & budget-friendly eating",
    vegPrice: "₹99",
    nonVegPrice: "₹109",
    features: [
      "1 Sabzi",
      "3 Roti or Rice",
      "Fresh Salad",
      "Rotating weekly menu",
      "On time delivery",
    ],
    isPopular: false,
  },
  {
    id: 2,
    name: "Standard Thali",
    subtitle: "Complete, balanced & tasty daily meal solution",
    vegPrice: "₹129",
    nonVegPrice: "₹159",
    features: [
      "1 Gravy Sabzi + 1 Dry Sabzi",
      "3 Roti + Rice",
      "Salad, Papad & Achar",
      "Rotating weekly menu",
      "On time delivery",
    ],
    isPopular: true,
    badgeText: "Most Popular",
  },
  {
    id: 3,
    name: "Jumbo Thali",
    subtitle: "For the big appetite. Extra portions of everything.",
    vegPrice: "₹199",
    nonVegPrice: "₹229",
    features: [
      "Dal + 2 Sabzi",
      "3 Roti + Rice",
      "Salad, Papad, Achar & Sweet",
      "Rotating weekly menu",
      "On time delivery",
    ],
    isPopular: false,
  },
];

export const MEAL_FEATURES = [
  {
    id: 1,
    icon: "leaf",
    heading: "Fresh Daily",
    description: "Prepared fresh every day with quality ingredients",
  },
  {
    id: 2,
    icon: "truck",
    heading: "On-Time Delivery",
    description: "Reliable delivery at your doorstep, every time",
  },
  {
    id: 3,
    icon: "shield",
    heading: "Hygienic Packaging",
    description: "Sealed disposable trays for maximum safety",
  },
  {
    id: 4,
    icon: "star",
    heading: "Variety Menu",
    description: "Rotating menu to keep your taste buds excited",
  },
];
