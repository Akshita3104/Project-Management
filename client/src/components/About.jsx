import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

function About() {
  const aboutStyle = {
    container: {
      maxWidth: '650px',
      margin: 'auto',
      padding: '1rem',
      backgroundColor: '#fff',
      color: '#333',
      border: '1px solid black',
      borderRadius: '5px',
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
    list: {
      padding: '1rem',
      backgroundColor: '#f8f9fa',
      borderRadius: '5px'
      
    },
    listItem: {
      padding: '0.5rem 0'
    }
  };

  return (
    <div style={aboutStyle.container}>
      <h2 style={aboutStyle.heading}>About Project Management Tool</h2>
      <p style={aboutStyle.paragraph}>
        Our project management tool is designed to help teams collaborate efficiently, track project progress,
        and streamline workflows. With intuitive features, this tool enables users to manage tasks, assign responsibilities,
        and monitor deadlines in real-time.
      </p>
      <h3 style={aboutStyle.heading}>Key Features:</h3>
      <ul style={aboutStyle.list}>
        <li style={aboutStyle.listItem}>✔ Task Management & Assignments</li>
        <li style={aboutStyle.listItem}>✔ Progress Tracking</li>
        <li style={aboutStyle.listItem}>✔ Team Collaboration</li>
        <li style={aboutStyle.listItem}>✔ Deadline Monitoring</li>
      </ul>
      <p style={aboutStyle.paragraph}>
        This tool is built with modern technologies to ensure seamless user experience across different devices,
        making remote work and team management more efficient than ever.
      </p>
    </div>
  );
}

export default About;
