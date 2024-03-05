import React, { useState } from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("message", message);

    try {
      const response = await fetch(
        "https://formsubmit.co/09d2ab16e4fe1d265c34ca365488c2c9",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        alert("Your message has been sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        alert("Failed to send your message. Please try again later.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An unexpected error occurred. Please try again later.");
    }
  };

  return (
    <div className="contact-form">
      <form onSubmit={handleSubmit} className="contact-item">
        <div className="contact-title">
          <h2>Get in touch</h2>
          <hr></hr>
        </div>
        <div className="contact-inputs">
          <label htmlFor="name">Your name: </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="contact-inputs">
          <label htmlFor="email">Your email: </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="contact-inputs">
          <label htmlFor="message">Your message: </label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Form;