import React, { useState, useEffect } from "react";

const LoginHeader = ({ logo, title, para }) => {
  const styles = {
    headerContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",

      padding: "15px 30px",
      background: "#ffffffff",
      position: "sticky",
      top: 0,
      zIndex: 1000,
      boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
    },
    brandSection: {
      display: "flex",
      alignItems: "center",
      width: "70%",
    },
    logoImage: {
      objectFit: "contain",
    },
    textContent: {
      marginLeft: "20px",
    },
    titleText: {
      fontWeight: "600",
      fontSize: "18px",
      margin: "5px 0px",
    },
    subtitleText: {
      fontSize: "14px",
      fontWeight: "600",
      color: "#020202ff",
      margin: "5px 0px",
    },
    actionSection: {
      fontWeight: "500",
      fontSize: "18px",
    },
  };

  const [currentTime, setCurrentTime] = useState(() => formatDateTime());

  // Function to format date & time
  function formatDateTime() {
    const now = new Date();

    const date = now.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    });

    const time = now.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    return `${date}, ${time}`;
  }

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(formatDateTime());
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  return (
    <div style={styles.headerContainer}>
      <div style={styles.brandSection}>
        <img src={logo} style={styles.logoImage} alt="Logo" />
        <div style={styles.textContent}>
          <h2 style={styles.titleText}>{title}</h2>
          <p style={styles.subtitleText}>{para}</p>
        </div>
      </div>
      <div style={styles.actionSection}>{currentTime}</div>
    </div>
  );
};

export default LoginHeader;
