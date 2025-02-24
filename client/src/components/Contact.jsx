import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Contact() {
  const contactStyle = {
    container: {
      maxWidth: '650px',
      margin: 'auto',
      padding: '2rem',
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: '8px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    },
    heading: {
      textAlign: 'center',
      marginBottom: '1.5rem'
    },
    paragraph: {
      textAlign: 'justify',
      lineHeight: '1.6'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem'
    },
    input: {
      padding: '10px',
      border: '1px solid black',
      borderRadius: '5px',
      width: '100%',
      backgroundColor: 'white',
      color: 'black',
      boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.2)'
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: 'white',
      border: 'none',
      borderRadius: '5px',
      cursor: 'pointer'
    },
    buttonHover: {
      backgroundColor: '#0056b3'
    }
  };

  return (
    <div style={contactStyle.container}>
      <h2 style={contactStyle.heading}>Contact Us</h2>
      <p style={contactStyle.paragraph}>
        Have any questions or need assistance? Reach out to us through the form below, and we’ll get back to you as soon as possible.
      </p>
      <form style={contactStyle.form}>
        <input type="text" placeholder="Your Name" style={contactStyle.input} />
        <input type="email" placeholder="Your Email" style={contactStyle.input} />
        <textarea placeholder="Your Message" style={{...contactStyle.input, height: '100px'}}></textarea>
        <button style={contactStyle.button} onMouseOver={(e) => e.target.style.backgroundColor = contactStyle.buttonHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = contactStyle.button.backgroundColor}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
