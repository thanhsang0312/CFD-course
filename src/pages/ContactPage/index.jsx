import React from "react";
import ContactTitle from "./ContactTitle";
import ContactSidebar from "./ContactSidebar";
import ContactForm from "./ContactForm.jsx";
import { message } from "antd";
import { subscribesService } from "../../services/subscribesService.js";

const ContactPage = () => {
  const handleFormSubmit = async (formData) => {
    console.log("formData", formData);
    message.success("Submit successfully!");
    try {
      const res = await subscribesService.subscribes({
        ...formData,
        description: "",
      });
    } catch (error) {
      message.error("Submit unsuccessfully!");
    }
  };

  return (
    <main className="mainwrapper contact --ptop">
      <div className="container">
        <ContactTitle />
      </div>
      <div className="contact__content">
        <div className="container">
          <div className="wrapper">
            <ContactSidebar />
            <ContactForm handleFormSubmit={handleFormSubmit} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default ContactPage;
