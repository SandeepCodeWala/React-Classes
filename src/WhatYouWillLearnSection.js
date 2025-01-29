import React, { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";
import { db } from "./firebase"; // Firestore instance
import "./WhatYouWillLearnSection.css"; // Import external CSS

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
      // Check if user is already registered
      const registrationsRef = collection(db, "registrations");
      const q = query(
        registrationsRef,
        where("email", "==", formData.email),
        where("mobile", "==", formData.mobile)
      );

      const querySnapshot = await getDocs(q);

      if (!querySnapshot.empty) {
        alert("User already registered with this email or mobile number!");
        return;
      }

      // Add new registration
      await addDoc(collection(db, "registrations"), {
        name: formData.name,
        email: formData.email,
        mobile: formData.mobile,
        timestamp: new Date(),
      });

      alert("Registration successful!");
      setShowPopup(false);
      setFormData({ name: "", email: "", mobile: "" });
    } catch (error) {
      console.error("Error saving form data: ", error);
      alert("Failed to register. Please try again.");
    }
  };

  return (
    <div className="learning-section">
      <h2 className="learning-heading">What You Will Learn in Free Class</h2>
      <div className="learning-list">
        {topics.map((topic, index) => (
          <div key={index} className="learning-item">
            <FaCheckCircle className="learning-icon" />
            {topic}
          </div>
        ))}
      </div>
      <motion.button
        className="register-btn"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleRegisterClick}
      >
        Register Now
      </motion.button>

      {showPopup && (
        <div className="popup-overlay">
          <motion.div
            className="popup-content"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <button className="popup-close" onClick={handleClosePopup}>
              &times;
            </button>
            <h3>Register Now</h3>
            <form onSubmit={handleSubmit}>
              <label className="form-label">Fill Details:</label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="form-input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="form-input"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="mobile"
                placeholder="Enter your mobile number"
                className="form-input"
                value={formData.mobile}
                onChange={handleChange}
                required
              />
              <motion.button
                type="submit"
                className="submit-btn"
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
