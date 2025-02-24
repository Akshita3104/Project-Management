import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const signupStyle = {
    container: {
      maxWidth: '700px',
      margin: 'auto',
      padding: '5rem',
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: '8px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    },
    heading: {
      textAlign: 'center',
      marginBottom: '1.5rem'
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2.3rem'
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
    <div style={signupStyle.container}>
      <h2 style={signupStyle.heading}>Signup</h2>
      <form style={signupStyle.form}>
        <input type="text" placeholder="Full Name" style={signupStyle.input} />
        <input type="email" placeholder="Email" style={signupStyle.input} />
        <input type="password" placeholder="Password" style={signupStyle.input} />
        <input type="password" placeholder="Confirm Password" style={signupStyle.input} />
        <button style={signupStyle.button} onMouseOver={(e) => e.target.style.backgroundColor = signupStyle.buttonHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = signupStyle.button.backgroundColor}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
