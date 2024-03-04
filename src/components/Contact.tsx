import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-form">
        <form action="https://formsubmit.co/09d2ab16e4fe1d265c34ca365488c2c9" method="POST">
            <div>
                <h2 className="contact-title">Get in touch</h2>
            </div>
            <input type="text" name="name" required placeholder="Name"></input>
            <input type="email" name="email" required placeholder="Email"></input>
            <textarea name="msg" required placeholder="Message"></textarea>
            <button type="submit">Submit</button>
        </form>  
    </div>
  )
}

export default Contact