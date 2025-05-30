import React from "react";
import ContactInfo from "./ContactInfo";
import ContactForm from "./ContactForm";

const ContactUs: React.FC = () => {
  return (
    <div className="gap-16 grid grid-cols-1 md:grid-cols-2 mx-auto my-20 w-full max-w-4xl">
      {/* Left Section - Image & Address */}
      <ContactInfo />

      {/* Right Section - Contact Form */}
      <ContactForm />
    </div>
  );
};

export default ContactUs;
