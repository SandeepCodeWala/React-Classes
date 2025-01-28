import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';
import { db } from './firebase'; // Import Firestore instance
function WhatYouWillLearnSection() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", mobile: "" });

  const topics = [
    "Basic Introduction",
    "Components React Native",
    "State and Props",
    "Social Login",
    "Validation",
    "Render Flatlist",
    "AsyncStorage",
    "Firebase Setup",
    "Context API (Theme Change)",
    "Push Notification",
    "FontFamily",
    "Language Change",
    "To-Do (Add/Edit/Delete/Search)",
    "Drawer Navigation",
    "HOC (Internet Connection)",
    "Responsive Styling",
    "Network API Call(GET, POST)",
    "Redux (State Management)",
  ];

  const handleRegisterClick = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };


  

  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Create a query to check if email or mobile already exists
      const registrationsRef = collection(db, 'registrations');
      const q = query(
        registrationsRef,
        where('email', '==', formData.email),
        where('mobile', '==', formData.mobile)
      );
  
      const querySnapshot = await getDocs(q);
  
      // If the query returns results, the user is already registered
      if (!querySnapshot.empty) {
        alert('User already registered with this email or mobile number!');
        return;
      }
  
      // Add the form data to Firestore
      await addDoc(collection(db, 'registrations'), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        timestamp: new Date(),
      });
  
      console.log('Form data saved successfully!');
      alert('Registration successful!');
      setShowPopup(false);
      setFormData({ name: '', email: '', mobile: '' }); // Clear the form
    } catch (error) {
      console.error('Error saving form data: ', error);
      alert('Failed to register. Please try again.');
    }
  };
  
  

  const sectionStyle = {
    padding: "50px",
    background: "rgba(0, 0, 0, 0.8)",
    textAlign: "center",
    maxWidth: "100%",
    margin: "0 auto",
    color: "#fff",
  };

  const headingStyle = {
    fontSize: "48px",
    fontWeight: "700",
    fontFamily: "'Poppins', sans-serif",
  };

  const listContainerStyle = {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(400px, 1fr))",
    gap: "100px",
    textAlign: "left",
    marginTop: "70px",
  };

  const listStyle = {
    listStyleType: "none",
    paddingLeft: "0",
    fontSize: "24px",
    lineHeight: "1.8",
  };

  const listItemStyle = {
    display: "flex",
    alignItems: "center",
    padding: "10px 0",
    borderBottom: "1px solid #fff",
    fontFamily: "'Roboto', sans-serif",
  };

  const iconStyle = {
    marginRight: "10px",
    color: "#00d9d9",
    fontSize: "40px",
  };

  const buttonStyle = {
    padding: "10px",
    fontSize: "2.5rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "20px",
    fontWeight: "600",
  };

  const buttonStyle1 = {
    padding: "20px",
    fontSize: "2.5rem",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    marginTop: "100px",
    fontWeight: "600",
    marginBottom:'100px'
  };

  const popupOverlayStyle = {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: "999",
  };

  const popupContentStyle = {
    background: "#fff",
    padding: "30px",
    borderRadius: "10px",
    width: "700px",
    textAlign: "center",
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
  };

  const closeButtonStyle = {
    background: "transparent",
    border: "none",
    fontSize: "80px",
    fontWeight: "bold",
    color: "red",
    cursor: "pointer",
    position: "absolute",
    top: "50px",
    right: "50px",
  };

  const inputStyle = {
    width: "100%",
    padding: "25px",
    margin: "10px 0",
    borderRadius: "5px",
    border: "2px solid #ccc",
    fontSize: "1.5rem",
  };

  return (
    <div style={sectionStyle}>
      <h2 style={headingStyle}>What You Will Learn in Free Class</h2>
      <div style={listContainerStyle}>
        {topics.map((topic, index) => (
          <div key={index} style={listStyle}>
            <li style={listItemStyle}>
              <FaCheckCircle style={iconStyle} />
              {topic}
            </li>
          </div>
        ))}
      </div>
      <motion.button
        style={buttonStyle1}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleRegisterClick}
      >
        Register Now
      </motion.button>

      {showPopup && (
        <div style={popupOverlayStyle}>
          <motion.div
            style={popupContentStyle}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button style={closeButtonStyle} onClick={handleClosePopup}>
              &times;
            </button>
            <h3>Register Now</h3>
            <form onSubmit={handleSubmit}>
              <label style={{ color: "black", fontSize: "30px" }}>
                Fill Details:-
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                style={inputStyle}
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                style={inputStyle}
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                style={inputStyle}
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <motion.button
                type="submit"
                style={buttonStyle}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                Submit
              </motion.button>
            </form>
          </motion.div>
        </div>
      )}
    </div>
  );
}

export default WhatYouWillLearnSection;
