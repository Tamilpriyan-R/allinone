import { useAuth } from "../../context/authContext";
import LoginLayout from "../../templates/login/index";
import NavigateCard from "./CardPaths/NavigateCard";
import LoginInputFileds from "./Form";
import soucient from "../../assets/images/soucient.png";
import insurelogistImg from "../../assets/images/insurelogist.png";
import crmImg from "../../assets/images/productimage/crm.png";
import hrmsImg from "../../assets/images/productimage/hrms.png";

import { Box, Grid, IconButton, Tooltip, Chip } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import PersonIcon from "@mui/icons-material/Person"; // icon for name
import WorkIcon from "@mui/icons-material/Work"; // icon for role

const Login = () => {
  const { authenticated, logout, user } = useAuth();

  // Example fallback values
  const name = user?.name || "Priyan";
  const role = user?.role || "Employee";

  const data = [
    { logo: soucient, title: "Soucient" },
    {
      logo: insurelogistImg,
      title: "Insurelogist",
      url: `http://localhost:3001/authentication`,
    },
    { logo: crmImg, title: "CRM" },
    { logo: hrmsImg, title: "HRMS" },
  ];

  return (
    <LoginLayout>
      {authenticated && (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Top bar */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              background: "#f5f5f5",
              borderRadius: 2,
              padding: "6px 12px",
              boxShadow: 1,
              flexWrap: "wrap",
              gap: 1,
            }}
          >
            {/* Chips */}
            <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
              <Chip
                icon={<PersonIcon />}
                label={name}
                color="primary"
                variant="outlined"
              />
              <Chip
                icon={<WorkIcon />}
                label={role}
                color="secondary"
                variant="outlined"
              />
            </Box>

            {/* Logout */}
            <Tooltip title="Logout" arrow>
              <IconButton color="error" onClick={logout}>
                <LogoutIcon />
              </IconButton>
            </Tooltip>
          </Box>

          {/* Cards */}
          <Grid container spacing={2}>
            {data.map((v, i) => (
              <Grid item xs={12} sm={6} md={3} key={i}>
                <NavigateCard title={v.title} logo={v.logo} url={v?.url} />
              </Grid>
            ))}
          </Grid>
        </Box>
      )}

      {!authenticated && <LoginInputFileds />}
    </LoginLayout>
  );
};

export default Login;
