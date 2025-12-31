import { ForkAndKnife, LeafIcon, Wind, Meat } from "@icons";

export const THALI_TYPES = [
  {
    id: "mini",
    name: "Mini Thali",
    description: "Light & balanced meals, ideal for light eaters.",
    portions: "1 Sabzi, 3 Roti, Rice, Salad",
    pricePerMeal: 150,
    icon: <LeafIcon size={20} />,
  },
  {
    id: "standard",
    name: "Standard Thali",
    description: "The perfect daily meal for working professionals.",
    portions: "2 Sabzi, 4 Roti, Rice, Dal, Salad, Sweet",
    pricePerMeal: 180,
    popular: true,
    icon: <ForkAndKnife size={20} />,
  },
  {
    id: "jumbo",
    name: "Jumbo Thali",
    description: "For the big appetite. Extra portions of everything.",
    portions: "3 Sabzi, 5 Roti, Rice, Dal, Salad, Sweet, Raita",
    pricePerMeal: 250,
    icon: <Wind size={20} />,
  },
];

export const ORDER_TYPES = [
  {
    id: "subscription",
    title: "Subscription Plan",
    description: "Regular meals delivered weekly or monthly",
    tagText: "SAVE UP TO 20%",
    tagVariant: "orange",
    iconName: "refresh",
  },
  {
    id: "single",
    title: "Single Meal Today",
    description: "Order one meal for lunch or dinner today",
    tagText: "NO COMMITMENT",
    tagVariant: "green",
    iconName: "clock_icon",
  },
];

export const MEAL_FREQUENCIES = [
  {
    id: "one",
    label: "Lunch Only / Dinner Only",
    description: "1 meal per day",
    mealsPerDay: 1,
  },
  {
    id: "two",
    label: "Lunch + Dinner",
    description: "2 meals per day",
    mealsPerDay: 2,
  },
];

export const PLAN_DURATIONS = [
  {
    id: "weekly",
    label: "Weekly",
    caption: "6 Days availability",
    days: 6,
  },
  {
    id: "monthly",
    label: "Monthly",
    caption: "24 Days availability",
    days: 24,
  },
];

export const PREFERENCES = [
  {
    id: "veg",
    label: "PURE VEG",
    priceDeltaPerMeal: 0,
    icon: <LeafIcon size={20} />,
  },
  {
    id: "nonveg",
    label: "NON-VEG",
    priceDeltaPerMeal: 20,
    icon: <Meat size={20} />,
  },
];

export const INCLUDED_POINTS = [
  "Freshly prepared daily with home-grown spices",
  "Hygienic 5-compartment disposable trays",
  "Weekly rotating menu (No repetition for 14 days)",
  "Transparent pricing - No hidden platform fees",
  "Timely delivery to your doorstep",
  "Pause/Resume anytime (24h prior notice)",
];

export const TRANSPARENCY_NOTES = [
  "Lunch & Dinner available Monday–Saturday (Sundays are delivery holidays)",
  "Subscription plans are non-transferable but can be paused",
  "Delivery charges are calculated at checkout based on location",
  "Menu subject to slight variation based on seasonal market availability",
];

export function calculatePrice({
  orderTypeId,
  thaliId,
  frequencyId,
  durationId,
  preferenceId,
}) {
  const thali = THALI_TYPES.find((t) => t.id === thaliId);
  const freq = MEAL_FREQUENCIES.find((f) => f.id === frequencyId);
  const duration = PLAN_DURATIONS.find((d) => d.id === durationId);
  const pref = PREFERENCES.find((p) => p.id === preferenceId);

  if (!thali || !pref) return 0;
  const perMeal = thali.pricePerMeal + pref.priceDeltaPerMeal;

  if (orderTypeId === "single") {
    return perMeal; // 1 meal today
  }

  if (!freq || !duration) return 0;
  return perMeal * freq.mealsPerDay * duration.days;
}
