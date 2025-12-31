import React, { useState } from "react";
import styles from "./ContactForm.module.scss";
import { Button } from "@components";

const ContactForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    type: "Individual Plan",
    message: "",
  });
  const handle = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };
  const onSubmit = (e) => {
    e.preventDefault();
    // For now, just show a basic confirmation
    alert("Thanks! We have received your message.");
  };
  return (
    <form className={styles.card} onSubmit={onSubmit}>
      <div className={styles.row}>
        <label>
          <span>Full Name</span>
          <input
            name="name"
            value={form.name}
            onChange={handle}
            placeholder="John Doe"
            required
          />
        </label>
        <label>
          <span>Email Address</span>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handle}
            placeholder="john@example.com"
            required
          />
        </label>
      </div>
      <div className={styles.row}>
        <label>
          <span>Phone Number</span>
          <input
            name="phone"
            value={form.phone}
            onChange={handle}
            placeholder="+91 00000 00000"
            pattern="^[+0-9\s-]{8,}$"
            required
          />
        </label>
        <label>
          <span>Inquiry Type</span>
          <input
            name="type"
            value={form.type}
            onChange={handle}
            placeholder="Individual Plan"
            required
          />
        </label>
      </div>
      <label className={styles.block}>
        <span>Your Message</span>
        <textarea
          name="message"
          value={form.message}
          onChange={handle}
          placeholder="Tell us how we can help you..."
          rows={6}
          required
        />
      </label>
      <div className={styles.actions}>
        <Button size="lg" className={styles.submitBtn} type="submit">
          Send Message ✈
        </Button>
      </div>
    </form>
  );
};

export default ContactForm;


