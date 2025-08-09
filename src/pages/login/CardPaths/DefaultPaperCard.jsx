import React from "react";

const DefaultPaperCard = ({ children }) => {
  const styles = {
    container: {
      position: "relative", // Needed for absolute positioning of logo
      display: "flex",
      gap: "20px",
      width: "300px",
      padding: "50px 20px",
      boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
      borderRadius: "10px",
      backgroundColor: "#fff",
      marginTop: "20px",
    },
    logoWrapper: {
      position: "absolute",
      top: "-35px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "70px",
      height: "70px",
      borderRadius: "50%",
      backgroundColor: "#fff",
      border: "2px solid #ccc",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      overflow: "hidden",
    },
     logo: {
      width: "65px",
      height: "65px",
      objectFit: "cover",
      borderRadius: "50%",
    }
  };
  return (
    <div style={{ ...styles.container }}>
      {/* Logo Image in Circle */}
      <div style={styles.logoWrapper}>
        <img
          src="https://via.placeholder.com/65" // Replace with your image URL
          alt="Logo"
          style={styles.logo}
        />
      </div>
      {children}
    </div>
  );
};

export default DefaultPaperCard;
