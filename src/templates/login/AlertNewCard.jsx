const AlertNewCard = () => {
  const styles = {
    display: "inline-block",
    padding: "4px 10px",
    borderRadius: "10px",
    backgroundColor: "red",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    height:"20px",
    textTransform: "uppercase",
    animation: "blink 1s infinite, heartbeat 2s infinite",
    
  };

  // Define keyframes in JS and inject them into the page
  const keyframes = `
    @keyframes blink {
      0%, 50%, 100% { opacity: 1; }
      25%, 75% { opacity: 0.8; }
    }
    @keyframes heartbeat {
      0%, 100% { transform: scale(1); }
      14% { transform: scale(1.2); }
      28% { transform: scale(1); }
      42% { transform: scale(1.2); }
      70% { transform: scale(1); }
    }
  `;

  // Inject styles into <head>
  if (typeof document !== "undefined" && !document.getElementById("alert-chip-animations")) {
    const styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.id = "alert-chip-animations";
    styleSheet.innerText = keyframes;
    document.head.appendChild(styleSheet);
  }

  return <div style={styles}>New</div>;
};

export default AlertNewCard;
