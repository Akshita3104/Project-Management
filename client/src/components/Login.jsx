import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const loginStyle = {
    container: {
      maxWidth: '700px',
      margin: 'auto',
      padding: '6rem',
      backgroundColor: '#fff',
      color: '#333',
      borderRadius: '8px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)'
    },
    heading: {
      textAlign: 'center',
    },
    form: {
      display: 'flex',
      flexDirection: 'column',
      gap: '2rem'
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
    <div style={loginStyle.container}>
      <h2 style={loginStyle.heading}>Login</h2>
      <form style={loginStyle.form}>
        <input type="email" placeholder="Email" style={loginStyle.input} />
        <input type="password" placeholder="Password" style={loginStyle.input} />
        <button style={loginStyle.button} onMouseOver={(e) => e.target.style.backgroundColor = loginStyle.buttonHover.backgroundColor} onMouseOut={(e) => e.target.style.backgroundColor = loginStyle.button.backgroundColor}>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
