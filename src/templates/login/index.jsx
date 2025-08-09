import LoginHeader from "../../components/login/header";
import loginlogo from "../../assets/images/keelislogo.png";

const LoginLayout = ({ children }) => {
  const styles = {
    container: {},
    contentWrapper: {
      display: "flex",
      flex: 1,
      height: "600px",
      margin: "10px 0px",
    },
    leftSection: {
      flex: 3,
      background: "#f7f9fc",
      padding: "40px",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    },
    rightSection: {
      flex: 1,
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      background: "#ffffff",
      padding: "40px",
    },
    heading: {
      fontSize: "28px",
      fontWeight: "bold",
      marginBottom: "15px",
      color: "#333",
    },
    paragraph: {
      fontSize: "16px",
      lineHeight: "1.5",
      color: "#555",
      maxWidth: "400px",
    },
  };

  return (
    <div style={styles.container}>
      <LoginHeader
        logo={loginlogo}
        title="Keelis"
        para="Creating solutions that not only meet the needs of today but also anticipate the challenges of tomorrow"
      />

      <div style={styles.contentWrapper}>
        <div style={styles.leftSection}>
          <h1 style={styles.heading}>Welcome to Keelis</h1>
          <p style={styles.paragraph}>
            Keelis is committed to delivering innovative solutions for modern
            businesses. Our mission is to empower organizations with tools that
            enhance productivity, improve customer experiences, and anticipate
            future challenges.
          </p>
        </div>

        <div style={styles.rightSection}>{children}</div>
      </div>
      <div style={{ height: "300px" }}>Footer</div>
    </div>
  );
};

export default LoginLayout;
