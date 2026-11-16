import { useState } from "react";

function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setSent(true); // just a demo, no backend
    setName("");
    setEmail("");
    setMessage("");
  }

  return (
    <section>
      <h2>Contact Me</h2>
      <p>You can fill out this form. It doesn't actually send an email.</p>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input value={name} onChange={e => setName(e.target.value)} required />
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        <label>Message</label>
        <textarea value={message} onChange={e => setMessage(e.target.value)} required rows="5" />
        <button type="submit">Submit</button>
      </form>
      {sent && <p>Thanks! This is just a practice form.</p>}
    </section>
  );
}
export default ContactPage;
