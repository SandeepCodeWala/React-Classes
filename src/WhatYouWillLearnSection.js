import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';

function WhatYouWillLearnSection() {
  const topics = [
    'Basic Introduction',
    'Components React Native',
    'State and Props',
    'Social Login',
    'Validation',
    'Render Flatlist',
    'AsyncStorage',
    'Firebase Setup',
    'Context API (Theme Change)',
    'Push Notification',
    'FontFamily',
    'Language Change',
    'To-Do (Add/Edit/Delete/Search)',
    'Drawer Navigation',
    'HOC (Internet Connection)',
    'Responsive Styling',
    'Network API Call(GET, POST)',
    'Redux (State Management)'
  ];

  const sectionStyle = {
    padding: '50px',
    background: 'rgba(0, 0, 0, 0.8)',
    boxShadow: '0px 15px 25px rgba(0, 0, 0, 0.1)',
  
    marginBottom: '20px',
    textAlign: 'center',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    color: '#fff',
  };

  const headingStyle = {
    fontSize: '48px',
    fontWeight: '700',
    fontFamily: "'Poppins', sans-serif",
  };

  const listContainerStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', // 2 columns with responsiveness
    gap: '100px', // space between columns
    textAlign: 'left',
    marginTop: '70px',
  };

  const listStyle = {
    listStyleType: 'none',
    paddingLeft: '0',
    fontSize: '24px',
    lineHeight: '1.8',
    marginTop: '0',
  };

  const listItemStyle = {
    display: 'flex',
    alignItems: 'center',
    padding: '10px 0',
    borderBottom: '1px solid #fff',
    transition: 'transform 0.3s ease-in-out',
    fontFamily: "'Roboto', sans-serif",
  };

  const iconStyle = {
    marginRight: '10px',
    color: '#00d9d9',
    fontSize: '40px',
  };

  const handleHover = (e) => {
    e.target.style.transform = 'scale(1.05)';
  };

  const handleLeave = (e) => {
    e.target.style.transform = 'scale(1)';
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>What You Will Learn in Free Class</h2>
      <div style={listContainerStyle}>
        {topics.map((topic, index) => (
          <div key={index} style={listStyle}>
            <li
              style={listItemStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <FaCheckCircle style={iconStyle} />
              {topic}
            </li>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WhatYouWillLearnSection;
