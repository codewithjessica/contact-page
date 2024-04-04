import React, { useState } from "react";
import "./Form.css";
import LinkButtons from "./LinkButtons";

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
      <h2>Contact me</h2>
      <p>
        Send me a message via <b>codewithjessica@outlook.com</b>
      </p>
      <p>or fill in this form</p>
      <form className="contact-items" onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input
          type="text"
          value={name}
          placeholder="Your Name"
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="email"></label>
        <input
          type="email"
          value={email}
          placeholder="Your Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="message"></label>
        <textarea
          value={message}
          placeholder="Your Message (min. length: 10 characters)"
          onChange={(e) => setMessage(e.target.value)}
          required
        ></textarea>
        <button
          type="submit"
          disabled={message.length < 10}
          className="submit-button"
        >
          Submit
        </button>
      </form>
      <div className="buttons-container">
        <LinkButtons
          url="https://www.linkedin.com/in/jessicacheng0217"
          label="LinkedIn"
        />
        <LinkButtons url="https://github.com/codewithjessica" label="GitHub" />
        <LinkButtons url="/public/Jessica_Resume.pdf" label="Resume" />
      </div>
    </div>
  );
};

export default Form;
