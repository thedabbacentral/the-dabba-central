export const PRICING_PLANS = [
  {
    id: 1,
    name: "Lunch Only",
    subtitle: "Ideal for working professionals",
    weeklyPrice: "₹999",
    monthlyPrice: "₹3,999",
    mealsCountWeekly: "5 meals",
    mealsCountMonthly: "22 meals",
    features: [
      "Veg or Non-Veg choice",
      "1 meal per day",
      "Variety menu rotation",
      "Delivery before 12:30 PM",
      "Disposable hygienic trays",
    ],
    isPopular: false,
  },
  {
    id: 2,
    name: "Lunch + Dinner",
    subtitle: "Complete daily meal solution",
    weeklyPrice: "₹1,799",
    monthlyPrice: "₹6,999",
    mealsCountWeekly: "10 meals",
    mealsCountMonthly: "44 meals",
    features: [
      "Veg or Non-Veg choice",
      "Lunch + Dinner",
      "Premium rotating menu",
      "Dinner delivery by 7:30 PM",
      "Priority customer support",
    ],
    isPopular: true,
    badgeText: "Most Popular",
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
