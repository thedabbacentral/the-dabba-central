import React, { useMemo, useState } from "react";
import styles from "./Menu.module.scss";
import { PageContainer } from "@components";
import {
  DAYS,
  THALI_BULLETS,
  MENU_DATA,
  getCurrentWeekRange,
} from "./constants";
import { THALI_TYPES } from "../Plans/constants";
import MenuHero from "./components/MenuHero/MenuHero";
import ThaliCards from "./components/ThaliCards/ThaliCards";
import MenuControls from "./components/MenuControls/MenuControls";
import DayDetails from "./components/DayDetails/DayDetails";
import WeeklyOverview from "./components/WeeklyOverview/WeeklyOverview";
import MenuBanner from "./components/MenuBanner/MenuBanner";

const Menu = () => {
  const [thali, setThali] = useState("standard");
  const [preference, setPreference] = useState("veg");
  const [meal, setMeal] = useState("lunch");
  const [activeDay, setActiveDay] = useState(0);
  const [weekOffset, setWeekOffset] = useState(0);

  const weekLabel = useMemo(
    () => getCurrentWeekRange(weekOffset),
    [weekOffset]
  );

  const thaliLabel =
    THALI_TYPES.find((t) => t.id === thali)?.name || "Standard Thali";
  const sabziDisplayCount = thali === "mini" ? 1 : thali === "jumbo" ? 3 : 2;

  const dayId = DAYS[activeDay].id;
  const todayMenu =
    MENU_DATA[preference]?.[meal]?.[dayId] || MENU_DATA.veg.lunch.mon;
  const sabzisToShow = (todayMenu.sabzi || []).slice(0, sabziDisplayCount);

  return (
    <PageContainer>
      <section className={styles.section}>
        <div className={styles.container}>
          <MenuHero />

          <ThaliCards thali={thali} onChange={setThali} />

          <div className={styles.viewing}>
            Viewing <span>{thaliLabel}</span> menu
          </div>

          <MenuControls
            preference={preference}
            onPreference={setPreference}
            meal={meal}
            onMeal={setMeal}
            weekLabel={weekLabel}
            onPrevWeek={() => setWeekOffset((v) => v - 1)}
            onNextWeek={() => setWeekOffset((v) => v + 1)}
            activeDay={activeDay}
            onDay={setActiveDay}
          />

          <DayDetails
            dayLabel={DAYS[activeDay].label}
            meal={meal}
            thaliLabel={thaliLabel}
            preference={preference}
            sabzis={sabzisToShow}
            staples={todayMenu.staples}
            accompaniments={todayMenu.accompaniments}
          />

          <WeeklyOverview
            preference={preference}
            meal={meal}
            menuData={MENU_DATA}
            thaliLabel={thaliLabel}
          />

          <MenuBanner />
        </div>
      </section>
    </PageContainer>
  );
};

export default Menu;
