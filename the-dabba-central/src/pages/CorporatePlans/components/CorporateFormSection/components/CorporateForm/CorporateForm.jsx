import React, { useState } from "react";
import styles from "./CorporateForm.module.scss";
import Input from "../../../../../../components/Input/Input";
import Select from "../../../../../../components/Select/Select";
import Textarea from "../../../../../../components/Textarea/Textarea";
import { Button } from "@components";

const initialData = {
  companyName: "",
  contactPerson: "",
  phoneNumber: "",
  emailAddress: "",
  officeLocation: "",
  numberOfEmployees: "",
  mealType: "Lunch",
  preference: "Veg",
  planDuration: "Weekly",
  additionalNotes: "",
};

const CorporateForm = () => {
  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const validate = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\+?\d[\d\s]{8,}$/;
    if (!formData.companyName) newErrors.companyName = "Required";
    if (!formData.contactPerson) newErrors.contactPerson = "Required";
    if (!formData.phoneNumber || !phoneRegex.test(formData.phoneNumber))
      newErrors.phoneNumber = "Enter a valid phone number";
    if (!formData.emailAddress || !emailRegex.test(formData.emailAddress))
      newErrors.emailAddress = "Enter a valid email";
    if (!formData.officeLocation) newErrors.officeLocation = "Required";
    if (!formData.numberOfEmployees || Number(formData.numberOfEmployees) <= 0)
      newErrors.numberOfEmployees = "Enter a positive number";
    if (!formData.mealType) newErrors.mealType = "Required";
    if (!formData.preference) newErrors.preference = "Required";
    if (!formData.planDuration) newErrors.planDuration = "Required";
    return newErrors;
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const v = validate();
    setErrors(v);
    if (Object.keys(v).length) return;
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setTimeout(() => {
      // emulate API
      // eslint-disable-next-line no-console
      console.log("CorporateForm submit", formData);
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData(initialData);
      setTimeout(() => setSubmitStatus("idle"), 1800);
    }, 900);
  };

  return (
    <form className={styles.form} onSubmit={onSubmit}>
      <div className={styles.formRow}>
        <Input
          label="Company Name"
          required
          name="companyName"
          placeholder="e.g. Acme Corp"
          value={formData.companyName}
          onChange={handleChange}
          error={errors.companyName}
        />
        <Input
          label="Contact Person"
          required
          name="contactPerson"
          placeholder="Your Name"
          value={formData.contactPerson}
          onChange={handleChange}
          error={errors.contactPerson}
        />
      </div>

      <div className={styles.formRow}>
        <Input
          label="Phone Number"
          required
          name="phoneNumber"
          type="tel"
          placeholder="+91 00000 00000"
          value={formData.phoneNumber}
          onChange={handleChange}
          error={errors.phoneNumber}
        />
        <Input
          label="Email Address"
          required
          name="emailAddress"
          type="email"
          placeholder="office@company.com"
          value={formData.emailAddress}
          onChange={handleChange}
          error={errors.emailAddress}
        />
      </div>

      <div className={styles.formRow}>
        <Input
          label="Office Location"
          required
          name="officeLocation"
          placeholder="e.g. Indiranagar, Bangalore"
          value={formData.officeLocation}
          onChange={handleChange}
          error={errors.officeLocation}
        />
        <Input
          label="Approx. No. of Employees"
          required
          name="numberOfEmployees"
          type="number"
          placeholder="e.g. 50"
          value={formData.numberOfEmployees}
          onChange={handleChange}
          error={errors.numberOfEmployees}
        />
      </div>

      <div className={`${styles.formRow} ${styles.threeColumns}`}>
        <Select
          label="Meal Type"
          required
          name="mealType"
          value={formData.mealType}
          onChange={handleChange}
          options={[
            { value: "Lunch", label: "Lunch" },
            { value: "Dinner", label: "Dinner" },
            { value: "Lunch + Dinner", label: "Lunch + Dinner" },
          ]}
        />
        <Select
          label="Preference"
          required
          name="preference"
          value={formData.preference}
          onChange={handleChange}
          options={[
            { value: "Veg", label: "Veg" },
            { value: "Non-Veg", label: "Non-Veg" },
            { value: "Both", label: "Both" },
          ]}
        />
        <Select
          label="Plan Duration"
          required
          name="planDuration"
          value={formData.planDuration}
          onChange={handleChange}
          options={[
            { value: "Weekly", label: "Weekly" },
            { value: "Monthly", label: "Monthly" },
            { value: "Quarterly", label: "Quarterly" },
          ]}
        />
      </div>

      <Textarea
        label="Additional Notes (Optional)"
        name="additionalNotes"
        placeholder="Special dietary needs, preferred meal times, etc."
        value={formData.additionalNotes}
        onChange={handleChange}
        rows={5}
      />

      <Button
        id="corporate-form-submit"
        disabled={isSubmitting}
        className={styles.submitButton}
        size="md"
        type="submit"
      >
        {submitStatus === "success"
          ? "Submitted ✓"
          : isSubmitting
          ? "Submitting..."
          : "Submit Requirement"}
        <span className={styles.arrowIcon}>→</span>
      </Button>
    </form>
  );
};

export default CorporateForm;
