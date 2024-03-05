import React, {useState} from "react";
import "./Form.css";

const Form = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="contact-form">
        <form action="https://formsubmit.co/09d2ab16e4fe1d265c34ca365488c2c9" method="POST" className="contact-item">
            <div className="contact-title">
                <h2>Get in touch</h2>
                <hr></hr>
            </div>
            <input type="text" name="name" required placeholder="Your name" className="contact-inputs"></input>
            <input type="email" name="email" required placeholder="Your email" className="contact-inputs"></input>
            <textarea name="msg" required placeholder="Your message" className="contact-inputs"></textarea>
            <button type="submit">Submit</button>
        </form>  
    </div>
  )
}

export default Form