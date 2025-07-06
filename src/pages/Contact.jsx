import React, { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevData => ({...prevData, [name]: value,}));
  }

  const handleSubmit = e => {
    e.preventDefault();
    // todo 
    console.log('Form submitted, Thank You!:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
      <main className="contact-page">
        <h1>Contact</h1>

        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.9374709203256!2d-73.98784928459383!3d40.748440779327996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259af18e7be37%3A0xa2e8b53d3cb6d30f!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1620157382040!5m2!1sen!2sus"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <h2>Please submit the form below</h2>
        <p>...though nobody will respond.</p>

        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label htmlFor="name">Name</label>
              </div>
              <div className="col-75">
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your full name..."
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="email">Email</label>
              </div>
              <div className="col-75">
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your email address..."
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="row">
              <div className="col-25">
                <label htmlFor="message">Message</label>
              </div>
              <div className="col-75">
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your message..."
                  style={{ height: '200px' }}
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>  

            <br />

            <div className="row">
              <input type="submit" value="Submit" />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}