import { LeafIcon, Meat, UtensilsIcon, Droplet } from "@icons";

export const DAYS = [
  { id: "mon", label: "Monday", short: "MON" },
  { id: "tue", label: "Tuesday", short: "TUE" },
  { id: "wed", label: "Wednesday", short: "WED" },
  { id: "thu", label: "Thursday", short: "THU" },
  { id: "fri", label: "Friday", short: "FRI" },
  { id: "sat", label: "Saturday", short: "SAT" },
];

export const PREFERENCE_OPTS = [
  {
    label: (
      <>
        <LeafIcon size={16} /> Vegetarian
      </>
    ),
    value: "veg",
  },
  {
    label: (
      <>
        <Meat size={16} /> Non-Vegetarian
      </>
    ),
    value: "nonveg",
  },
];

export const MEAL_OPTS = [
  {
    label: (
      <>
        <UtensilsIcon size={16} /> Lunch
      </>
    ),
    value: "lunch",
  },
  {
    label: (
      <>
        <Droplet size={16} /> Dinner
      </>
    ),
    value: "dinner",
  },
];

export const THALI_BULLETS = {
  mini: ["1 Sabzi", "Roti or Rice", "Salad"],
  standard: [
    "2 Sabzi (1 Gravy + 1 Dry)",
    "Roti",
    "Rice",
    "Salad",
    "Papad",
    "Achar",
  ],
  jumbo: [
    "1 Dal",
    "2 Sabzi",
    "Roti",
    "Rice",
    "Salad",
    "Papad",
    "Achar",
    "Sweet Dish",
  ],
};

// Helpers for compact, image-ready menu data
const DEFAULT_IMG = "https://dummyimage.com/72x72/ebeef3/9aa3af&text=+";
const dish = (name, type) => ({ name, type, image: DEFAULT_IMG });
const day = (a, b, c) => ({
  sabzi: [
    dish(a[0], a[1]),
    dish(b[0], b[1]),
    c ? dish(c[0], c[1]) : dish("Mixed Veg Dry", "Dry"),
  ],
  staples: ["Soft Roti", "Steamed Rice"],
  accompaniments: ["Fresh Salad", "Crispy Papad", "Homemade Achar"],
});
const dayDinner = (a, b, c) => ({
  sabzi: [
    dish(a[0], a[1]),
    dish(b[0], b[1]),
    c ? dish(c[0], c[1]) : dish("Mixed Veg Dry", "Dry"),
  ],
  staples: ["Phulka Roti", "Jeera Rice"],
  accompaniments: ["Fresh Salad", "Papad", "Achar"],
});

// Weekly vegetarian/non-vegetarian menu map with images
export const MENU_DATA = {
  veg: {
    lunch: {
      mon: day(
        ["Paneer Butter Masala", "Gravy"],
        ["Aloo Gobi Dry", "Dry"],
        ["Bhindi Masala", "Dry"]
      ),
      tue: day(
        ["Matar Paneer", "Gravy"],
        ["Cabbage Poriyal", "Dry"],
        ["Jeera Aloo", "Dry"]
      ),
      wed: day(
        ["Kadai Paneer", "Gravy"],
        ["Mixed Veg Dry", "Dry"],
        ["Matar Mushroom", "Dry"]
      ),
      thu: day(
        ["Paneer Tikka Masala", "Gravy"],
        ["Lauki Sabzi", "Dry"],
        ["Kofta Curry", "Gravy"]
      ),
      fri: day(
        ["Paneer Lababdar", "Gravy"],
        ["Baingan Bharta", "Dry"],
        ["Chana Masala", "Dry"]
      ),
      sat: day(
        ["Dum Aloo", "Gravy"],
        ["Chana Masala", "Dry"],
        ["Paneer Do Pyaza", "Gravy"]
      ),
    },
    dinner: {
      mon: dayDinner(
        ["Palak Paneer", "Gravy"],
        ["Jeera Aloo", "Dry"],
        ["Tawa Paneer", "Dry"]
      ),
      tue: dayDinner(
        ["Shahi Paneer", "Gravy"],
        ["Bhindi Masala", "Dry"],
        ["Jeera Aloo", "Dry"]
      ),
      wed: dayDinner(
        ["Paneer Do Pyaza", "Gravy"],
        ["Gobi Matar", "Dry"],
        ["Mixed Veg Dry", "Dry"]
      ),
      thu: dayDinner(
        ["Malai Kofta", "Gravy"],
        ["Lauki Chana", "Dry"],
        ["Paneer Tikka", "Dry"]
      ),
      fri: dayDinner(
        ["Paneer Bhurji", "Dry"],
        ["Baingan Bharta", "Dry"],
        ["Gobi Matar", "Dry"]
      ),
      sat: dayDinner(
        ["Chole", "Gravy"],
        ["Aloo Methi", "Dry"],
        ["Paneer Butter Masala", "Gravy"]
      ),
    },
  },
  nonveg: {
    lunch: {
      mon: day(
        ["Butter Chicken", "Gravy"],
        ["Aloo Gobi Dry", "Dry"],
        ["Egg Curry", "Gravy"]
      ),
      tue: day(
        ["Chicken Masala", "Gravy"],
        ["Cabbage Poriyal", "Dry"],
        ["Keema Matar", "Gravy"]
      ),
      wed: day(
        ["Kadai Chicken", "Gravy"],
        ["Mixed Veg Dry", "Dry"],
        ["Egg Bhurji", "Dry"]
      ),
      thu: day(
        ["Chicken Tikka Masala", "Gravy"],
        ["Lauki Sabzi", "Dry"],
        ["Keema Fry", "Dry"]
      ),
      fri: day(
        ["Egg Curry", "Gravy"],
        ["Baingan Bharta", "Dry"],
        ["Chicken Curry", "Gravy"]
      ),
      sat: day(
        ["Chicken Curry", "Gravy"],
        ["Chana Masala", "Dry"],
        ["Tawa Chicken", "Dry"]
      ),
    },
    dinner: {
      mon: dayDinner(
        ["Chicken Saagwala", "Gravy"],
        ["Jeera Aloo", "Dry"],
        ["Butter Chicken", "Gravy"]
      ),
      tue: dayDinner(
        ["Mughlai Chicken", "Gravy"],
        ["Bhindi Masala", "Dry"],
        ["Chicken Tikka", "Dry"]
      ),
      wed: dayDinner(
        ["Keema Matar", "Gravy"],
        ["Gobi Matar", "Dry"],
        ["Mutton Curry", "Gravy"]
      ),
      thu: dayDinner(
        ["Chicken Korma", "Gravy"],
        ["Lauki Chana", "Dry"],
        ["Fish Fry", "Dry"]
      ),
      fri: dayDinner(
        ["Egg Bhurji", "Dry"],
        ["Baingan Bharta", "Dry"],
        ["Keema Matar", "Gravy"]
      ),
      sat: dayDinner(
        ["Fish Curry", "Gravy"],
        ["Aloo Methi", "Dry"],
        ["Egg Curry", "Gravy"]
      ),
    },
  },
};

export function getCurrentWeekRange(offset = 0) {
  const now = new Date();
  const day = now.getDay(); // 0=Sun..6=Sat
  // We want Monday as start. Compute diff to Monday.
  const diffToMonday = (day === 0 ? -6 : 1) - day;
  const monday = new Date(now);
  monday.setDate(now.getDate() + diffToMonday + offset * 7);
  const saturday = new Date(monday);
  saturday.setDate(monday.getDate() + 5);
  const fmt = (d) =>
    d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
  return `This Week (${fmt(monday)} - ${fmt(saturday)})`;
}
