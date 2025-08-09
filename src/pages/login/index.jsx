import { useAuth } from "../../context/authContext";
import LoginLayout from "../../templates/login/index";
import NavigateCard from "./CardPaths/NavigateCard";
import LoginInputFileds from "./Form";
import soucient from "../../assets/images/soucient.png";
import { Grid } from "@mui/material";

const Login = () => {
  const { authenticated } = useAuth();

  const data = [
    { logo: soucient, title: "soucient" },
    { logo: soucient, title: "soucient 2" },
    { logo: soucient, title: "soucient 3" },
    { logo: soucient, title: "soucient 4" },
    { logo: soucient, title: "soucient 5" },
  ];

  return (
    <LoginLayout>
      {authenticated && (
        <Grid container spacing={2}>
          {data?.map((v, i) => (
            <Grid item xs={12} sm={6} md={3} key={i}>
              <NavigateCard title={v?.title} logo={v?.logo} />
            </Grid>
          ))}
        </Grid>
      )}

      {!authenticated && <LoginInputFileds />}
    </LoginLayout>
  );
};

export default Login;
