import React from "react";
import ContactTitle from "./ContactTitle";
import ContactSidebar from "./ContactSidebar";
<<<<<<< HEAD
import ContactForm from "./ContactForm";
=======
import ContactForm from "./ContactForm.jsx";
>>>>>>> 5597a8e (update)

const ContactPage = () => {
  const handleFormSubmit = (formData) => {
    console.log("formData", formData);
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
