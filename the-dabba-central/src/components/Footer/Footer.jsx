import React from "react";
import styles from "./Footer.module.scss";
import { Button } from "@components";
import { Pin, Phone, Mail, Star, Users } from "@icons";

const Footer = () => {
  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <div className={styles.brandRow}>
              <img
                src="/Logo_Horizontal_Dark_Background.png"
                alt="The Dabba Central"
              />
            </div>
            <p className={styles.desc}>
              North Indian homemade meals, freshly prepared and delivered daily
              in Bangalore.
            </p>
            <div className={styles.pills}>
              <div className={styles.pill}>
                <span aria-hidden>⭐</span> 4.8 Google Rating
              </div>
              <div className={styles.pill}>
                <span aria-hidden>💗</span> 5000+ Happy Customers
              </div>
            </div>
          </div>

          <div className={styles.linksCol}>
            <div className={styles.heading}>Support</div>
            <ul className={styles.linkList}>
              <li>
                <a href="/#faqs">FAQs</a>
              </li>
              <li>
                <a href="/#refund">Refund Policy</a>
              </li>
              <li>
                <a href="/#privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/#terms">Terms & Conditions</a>
              </li>
            </ul>
            <div className={styles.supportCard}>
              <div className={styles.supportHead}>
                <span className={styles.whatsapp} aria-hidden>
                  💬
                </span>
                <div>
                  <div className={styles.supportTitle}>Instant Support</div>
                  <div className={styles.supportCaption}>
                    Chat with us on WhatsApp for orders & queries
                  </div>
                </div>
              </div>
              <Button
                className={styles.chatBtn}
                as="a"
                href="https://wa.me/917404388224?text=Hi%21%20When%20can%20I%20get%20my%20First%20Free%20Trial%20Meal%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Chat Now
              </Button>
            </div>
          </div>

          <div className={styles.contactCol}>
            <div className={styles.heading}>Get in Touch</div>
            <div className={styles.contactRow}>
              <span className={styles.icon} aria-hidden>
                📍
              </span>
              <div>Bangalore, Karnataka, India</div>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.icon} aria-hidden>
                📞
              </span>
              <div>+91 7088079474</div>
            </div>
            <div className={styles.contactRow}>
              <span className={styles.icon} aria-hidden>
                ✉️
              </span>
              <div>thedabbacentral@gmail.com</div>
            </div>
            <div className={styles.ctaStack}>
              <Button
                size="lg"
                as="a"
                href="https://wa.me/917404388224?text=Hi%21%20When%20can%20I%20get%20my%20First%20Free%20Trial%20Meal%3F"
                target="_blank"
                rel="noopener noreferrer"
              >
                Claim Free Trial Meal →
              </Button>
              <Button
                size="lg"
                variant="outline"
                as="a"
                href="/our-plans"
                target="_blank"
                rel="noopener noreferrer"
              >
                Order Now
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.bottomRow}>
          <div className={styles.copy}>
            © 2026 The Dabba Central. All rights reserved.
          </div>
          <div className={styles.socials}>
            <a href="#" aria-label="Instagram" className={styles.socialBtn}>
              <span />
            </a>
            <a href="#" aria-label="Facebook" className={styles.socialBtn}>
              <span />
            </a>
            <a href="#" aria-label="Twitter" className={styles.socialBtn}>
              <span />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
