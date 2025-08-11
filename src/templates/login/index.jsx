import LoginHeader from "../../components/login/header";
import loginlogo from "../../assets/images/keelislogo.png";
import DefaultPaperCard from "../../pages/login/CardPaths/DefaultPaperCard";
import Groups3Icon from "@mui/icons-material/Groups3";
import AlertNewCard from "./AlertNewCard";

const LoginLayout = ({ children }) => {
  const styles = {
    container: {},
    contentWrapper: {
      display: "flex",
      flex: 1,
      // height: "600px",
      margin: "10px 0px",
    },
    leftSection: {
      flex: 3,
      padding: "10px 20px",
    },
    leftSectionHeader: {
      display: "flex",
      alignItems: "center",
      // border: "solid",
      padding: "5px 10px",
      background: "rgba(238, 238, 238, 0.84)",
      color: "#424242e0",
      borderRadius: "8px", // rounded corners
      boxShadow: "0 2px 6px rgba(114, 114, 114, 0.3)", // subtle shadow
    },
    leftSectionPoints: {
      padding: "20px 10px",
    },
    rightSection: {
      flex: 1,
      display: "flex",
      padding: "10px 20px",
     
    },
    heading: {
      fontSize: "20px",
      fontWeight: "bold",
      marginLeft: "20px",
      color: "#424242e0",
    },
    paragraph: {
      fontSize: "16px",
      fontWeight:"600",
      lineHeight: "1.5",
      color: "#555",
      maxWidth: "400px",
      marginLeft:"15px",
      
    },
  };

  const subtitle = [
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
    {
      icon: "👉",
      para: "Keelis is committed to delivering innovative solutions for modern  businesses. Our mission is to empower organizations with tools that",
    },
  ];

  return (
    <div style={styles.container}>
      <LoginHeader
        logo={loginlogo}
        title="Keelis"
        para="Creating solutions that not only meet the needs of today but also anticipate the challenges of tomorrow"
      />

      <div style={styles.contentWrapper}>
        <div style={styles.leftSection}>
          <div
            style={{
              ...styles.leftSectionHeader,
            }}
          >
            <Groups3Icon fontSize="large" />
            <h1 style={styles.heading}>Dear Keelis Members !!</h1>
          </div>
          <div style={{ ...styles.leftSectionPoints }}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <AlertNewCard />
              <p
                style={{
                  marginLeft: "10px",
                  fontWeight: "600",
                  color: "#352e2eff",
                }}
              >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Tempore molestias voluptate temporibus dicta tenetur atque,
                commodi ad iusto obcaecati pariatur aliquam corporis, architecto
                aut quam, ut necessitatibus cum nemo nihil?
              </p>
            </div>
          </div>
          <div style={{padding:"0px 10px"}}>
            {subtitle?.map((v) => (
              <p style={{margin:"10px 0px"}}>
                <span>{v?.icon}</span>
                <span style={styles.paragraph}>{v?.para}</span>
              </p>
            ))}
          </div>
        
        </div>

        <div style={{...styles.rightSection}}>
          <div >
            <DefaultPaperCard logo={loginlogo}>{children}</DefaultPaperCard>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginLayout;
