import React, { useMemo, useState } from "react";
import styles from "./Plans.module.scss";
import { PageContainer, Button } from "@components";
import Icon from "../../icons/Icon";
import { ClockIcon, CheckCircle, Info } from "@icons";
import {
  ORDER_TYPES,
  THALI_TYPES,
  MEAL_FREQUENCIES,
  PLAN_DURATIONS,
  PREFERENCES,
  INCLUDED_POINTS,
  TRANSPARENCY_NOTES,
  calculatePrice,
} from "./constants";

const Plans = () => {
  const [orderType, setOrderType] = useState("subscription");
  const [thali, setThali] = useState("standard");
  const [frequency, setFrequency] = useState("one");
  const [duration, setDuration] = useState("weekly");
  const [preference, setPreference] = useState("veg");
  const [isMobileDetailsOpen, setIsMobileDetailsOpen] = useState(false);

  const totalPrice = useMemo(
    () =>
      calculatePrice({
        orderTypeId: orderType,
        thaliId: thali,
        frequencyId: frequency,
        durationId: duration,
        preferenceId: preference,
      }),
    [orderType, thali, frequency, duration, preference]
  );

  const thaliLabel = THALI_TYPES.find((t) => t.id === thali)?.name;
  const mealsPerDay =
    MEAL_FREQUENCIES.find((f) => f.id === frequency)?.mealsPerDay || 1;
  const durationLabel = PLAN_DURATIONS.find((d) => d.id === duration)?.label;
  const durationDays = PLAN_DURATIONS.find((d) => d.id === duration)?.days;
  const prefLabel = PREFERENCES.find((p) => p.id === preference)?.label;
  const prefLabelMobile = preference === "veg" ? "Veg" : "Non-Veg";

  return (
    <PageContainer>
      <section className={styles.section}>
        <div className={styles.container}>
          <div className={styles.hero}>
            <div className={styles.setupPill}>
              <ClockIcon size={18} color="#ff6a00" />
              <span>Set up your subscription in less than 2 minutes</span>
            </div>
            <h1 className={styles.title}>
              Choose a Plan That{" "}
              <span className={styles.accent}>Fits Your Appetite</span>
            </h1>
            <p className={styles.subtitle}>
              Flexible thali options • Lunch & Dinner • Weekly or Monthly
            </p>
          </div>

          <div className={styles.grid}>
            <div className={styles.leftCol}>
              <div className={styles.group} aria-label="Order type">
                <div className={styles.orderTitle}>
                  What would you like to order?
                </div>
                <div className={styles.orderGrid}>
                  {ORDER_TYPES.map((o) => (
                    <button
                      key={o.id}
                      type="button"
                      className={`${styles.orderCard} ${
                        orderType === o.id ? styles.active : ""
                      }`}
                      aria-pressed={orderType === o.id}
                      onClick={() => setOrderType(o.id)}
                    >
                      <span className={styles.orderTop}>
                        <span
                          className={`${styles.orderIcon} ${
                            orderType === o.id ? styles.orderIconActive : ""
                          }`}
                        >
                          <Icon
                            name={o.iconName}
                            size={20}
                            color={orderType === o.id ? "#ffffff" : "#6f7d8b"}
                          />
                        </span>
                        {orderType === o.id ? (
                          <CheckCircle
                            className={styles.checkCircle}
                            size={24}
                          />
                        ) : null}
                      </span>
                      <div className={styles.orderBody}>
                        <div className={styles.orderCardTitle}>{o.title}</div>
                        <div className={styles.orderCardDesc}>
                          {o.description}
                        </div>
                        <div
                          className={`${styles.orderTag} ${
                            o.tagVariant === "green"
                              ? styles.tagGreen
                              : styles.tagOrange
                          }`}
                        >
                          {o.tagText}
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className={styles.group} aria-label="Select Thali Type">
                <div className={styles.groupTitle}>
                  <span className={styles.badge}>1</span>
                  <span>Select Thali Type</span>
                </div>
                <div className={styles.thaliGrid}>
                  {THALI_TYPES.map((t) => (
                    <button
                      key={t.id}
                      className={`${styles.thaliCard} ${
                        thali === t.id ? styles.active : ""
                      }`}
                      onClick={() => setThali(t.id)}
                      aria-pressed={thali === t.id}
                    >
                      {t.popular ? (
                        <span className={styles.chip}>MOST POPULAR</span>
                      ) : null}
                      {thali === t.id ? (
                        <CheckCircle className={styles.checkCircle} size={24} />
                      ) : null}
                      <div className={styles.cardHeader}>
                        <span
                          className={`${styles.iconCircle} ${
                            thali === t.id ? styles.iconCircleActive : ""
                          }`}
                        >
                          {t.icon}
                        </span>
                      </div>
                      <div className={styles.thaliTitle}>{t.name}</div>
                      <p className={styles.thaliDesc}>{t.description}</p>
                      <div className={styles.divider} />
                      <div className={styles.metaLabel}>PORTIONS</div>
                      <div className={styles.metaValue}>{t.portions}</div>
                    </button>
                  ))}
                </div>
              </div>

              {orderType === "subscription" ? (
                <>
                  <div className={styles.group} aria-label="Meal Frequency">
                    <div className={styles.groupTitle}>
                      <span className={styles.badge}>2</span>
                      <span>Meal Frequency</span>
                    </div>
                    <div className={styles.radioList}>
                      {MEAL_FREQUENCIES.map((f) => (
                        <button
                          key={f.id}
                          className={`${styles.radioItem} ${
                            frequency === f.id ? styles.active : ""
                          }`}
                          onClick={() => setFrequency(f.id)}
                          aria-pressed={frequency === f.id}
                          type="button"
                        >
                          <span
                            className={`${styles.radioCircle} ${
                              frequency === f.id ? styles.checked : ""
                            }`}
                            aria-hidden
                          />
                          <div className={styles.radioLeft}>
                            <span className={styles.radioLabel}>{f.label}</span>
                            <span className={styles.radioCaption}>
                              {f.description}
                            </span>
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className={styles.dualRow}>
                    <div className={styles.group} aria-label="Plan Duration">
                      <div className={styles.groupTitle}>
                        <span className={styles.badge}>3</span>
                        <span>Plan Duration</span>
                      </div>
                      <div className={styles.durationTrack}>
                        {PLAN_DURATIONS.map((d) => (
                          <button
                            key={d.id}
                            className={`${styles.durationOption} ${
                              duration === d.id ? styles.active : ""
                            }`}
                            onClick={() => setDuration(d.id)}
                            aria-pressed={duration === d.id}
                            type="button"
                          >
                            <div className={styles.durationTitle}>
                              {d.label}
                            </div>
                            <div className={styles.durationCaption}>
                              {d.caption}
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className={styles.group} aria-label="Preference">
                      <div className={styles.groupTitle}>
                        <span className={styles.badge}>4</span>
                        <span>Preference</span>
                      </div>
                      <div className={styles.prefGrid}>
                        {PREFERENCES.map((p) => (
                          <button
                            key={p.id}
                            className={`${styles.prefCard} ${
                              preference === p.id
                                ? p.id === "veg"
                                  ? styles.prefGreen
                                  : styles.prefRed
                                : ""
                            }`}
                            onClick={() => setPreference(p.id)}
                            aria-pressed={preference === p.id}
                            type="button"
                          >
                            <span className={styles.prefIcon} aria-hidden>
                              {p.icon}
                            </span>
                            <span className={styles.prefLabel}>{p.label}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className={styles.group} aria-label="Preference">
                  <div className={styles.groupTitle}>
                    <span className={styles.badge}>2</span>
                    <span>Preference</span>
                  </div>
                  <div className={styles.prefGrid}>
                    {PREFERENCES.map((p) => (
                      <button
                        key={p.id}
                        className={`${styles.prefCard} ${
                          preference === p.id
                            ? p.id === "veg"
                              ? styles.prefGreen
                              : styles.prefRed
                            : ""
                        }`}
                        onClick={() => setPreference(p.id)}
                        aria-pressed={preference === p.id}
                        type="button"
                      >
                        <span className={styles.prefIcon} aria-hidden>
                          {p.icon}
                        </span>
                        <span className={styles.prefLabel}>{p.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className={styles.included}>
                <div className={styles.includedTitle}>
                  What's included in every plan?
                </div>
                <div className={styles.includedGrid}>
                  {INCLUDED_POINTS.map((pt, i) => (
                    <div key={i} className={styles.incRow}>
                      <div className={styles.tick}>
                        <CheckCircle size={16} color="#00a63d" />
                      </div>
                      <div>{pt}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className={styles.notes}>
                <div className={styles.notesTitle}>
                  <span className={styles.dot}>
                    <Info size={16} />
                  </span>{" "}
                  Transparency Notes
                </div>
                <ul className={styles.notesList}>
                  {TRANSPARENCY_NOTES.map((note, i) => (
                    <li key={i}>{note}</li>
                  ))}
                </ul>
              </div>
            </div>

            <aside className={styles.rightCol}>
              <div className={styles.card}>
                <div className={styles.cardHead}>
                  <div className={styles.summaryTitle}>
                    Your Selection Summary
                  </div>
                  <div className={styles.summarySubtitle}>
                    Review before checkout
                  </div>
                </div>
                <div className={styles.cardBody}>
                  <div className={styles.row}>
                    <span>Selected Thali</span>
                    <strong>{thaliLabel}</strong>
                  </div>
                  <div className={styles.row}>
                    <span>Meals / Day</span>
                    <strong>
                      {orderType === "single"
                        ? "1 Meal"
                        : `${mealsPerDay} Meal${mealsPerDay > 1 ? "s" : ""}`}
                    </strong>
                  </div>
                  <div className={styles.row}>
                    <span>Plan Duration</span>
                    <strong>
                      {orderType === "single"
                        ? "Today (1 Day)"
                        : `${durationLabel} (${durationDays} Days)`}
                    </strong>
                  </div>
                  <div className={styles.row}>
                    <span>Preference</span>
                    <strong
                      className={`${
                        preference === "veg" ? styles.prefGreen : styles.prefRed
                      }`}
                    >
                      {prefLabel}
                    </strong>
                  </div>
                  <div className={`${styles.row} ${styles.priceLine}`}>
                    <div className={styles.priceRow}>
                      <div className={styles.priceLabel}>Total Price</div>
                      <div className={styles.price}>
                        ₹{totalPrice.toLocaleString("en-IN")}
                      </div>
                    </div>

                    <div className={styles.muted}>
                      Exclusive of delivery fees
                    </div>
                  </div>
                  <div className={styles.cardActions}>
                    <Button className={styles.confirmBtn} size="lg">
                      Confirm Subscription
                    </Button>
                    <Button
                      className={styles.trialBtn}
                      size="md"
                      variant="outline"
                    >
                      Order a One-Time Trial
                    </Button>
                  </div>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Mobile Sticky Summary */}
      <div className={styles.mobileSummary} aria-live="polite">
        <div className={styles.mobileSummaryHeader}>
          <div className={styles.mobileSummaryLeft}>
            <div className={styles.mobileTotalLabel}>TOTAL PLAN COST</div>
            <div className={styles.mobileTotalPrice}>
              ₹{totalPrice.toLocaleString("en-IN")}
            </div>
          </div>
          <button
            type="button"
            className={styles.mobileDetailsToggle}
            aria-expanded={isMobileDetailsOpen}
            onClick={() => setIsMobileDetailsOpen((v) => !v)}
          >
            Details
            <span
              className={`${styles.chevron} ${
                isMobileDetailsOpen ? styles.chevronUp : ""
              }`}
              aria-hidden
            />
          </button>
        </div>

        {isMobileDetailsOpen ? (
          <div className={styles.mobileDetailsCard}>
            <div className={styles.mobileDetailRow}>
              <span>Plan</span>
              <strong>{thaliLabel}</strong>
            </div>
            <div className={styles.mobileDetailRow}>
              <span>Meals</span>
              <strong>
                {orderType === "single" ? "1 meal" : `${mealsPerDay}/day`}
              </strong>
            </div>
            <div className={styles.mobileDetailRow}>
              <span>Preference</span>
              <strong
                className={
                  preference === "veg" ? styles.prefGreen : styles.prefRed
                }
              >
                {prefLabelMobile}
              </strong>
            </div>
          </div>
        ) : null}

        <div className={styles.mobileCTA}>
          <Button size="lg" className={styles.mobileConfirmBtn}>
            Confirm Selection
          </Button>
        </div>
      </div>
    </PageContainer>
  );
};

export default Plans;
