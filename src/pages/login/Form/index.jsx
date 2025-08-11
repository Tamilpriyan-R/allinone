import { useReducer, useState } from "react";
import { signInState, signInStateMange } from "./data";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

import Button from "@mui/material/Button";
import { useAuth } from "../../../context/authContext";
import { useSnackbar } from "../../../context/snackBarProvider";
import { userLoginServices } from "../../../services/loginServices";
import { CircularProgress } from "@mui/material";
import { encryptData } from "../../../functions/Encripted";
import CryptoJS from "crypto-js";
import axios from "axios";
import { LOGIN_API_URL } from "../../../utils/apiUtilis";

// import CircularProgress from "@mui/material/CircularProgress";

const LoginInputFileds = () => {
  const [signInData, dispatch] = useReducer(signInStateMange, signInState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setAuthenticated,  setCurrentUser } = useAuth();
  const { showSnackbar } = useSnackbar();

  // Dynamic border color styles
  const getBorderColor = (status) => {
    switch (status) {
      case "success":
        return "#4caf50"; // green
      case "error":
        return "#f44336"; // red
      default:
        return "#c4c4c4"; // normal grey
    }
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { success, message, data } = await userLoginServices(
      signInData?.email,
      signInData?.password
    );

    localStorage.setItem("rememberedEmail", encryptData(signInData?.email));
    localStorage.setItem(
      "rememberedPassword",
      encryptData(signInData?.password)
    );

    showSnackbar(message, "success");
    if (success) {
      try {
        const currentuser = await axios.get(
          `${LOGIN_API_URL}users/v1/users/${data?.data?.id}/`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${data?.token}`,
            },
          }
        );
        setCurrentUser(currentuser?.data?.data);
        localStorage.setItem("currentUser",JSON.stringify(currentuser?.data?.data))

        console.log(currentuser, "currentuser");
      } catch (error) {}

      showSnackbar(message, "success");
      localStorage.setItem("authenticated", JSON.stringify(true));
      setAuthenticated(true);
    } else {
      showSnackbar(message, "error");
      setAuthenticated(false);
      localStorage.setItem("authenticated", JSON.stringify(false));
    }
    setLoading(false);
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ display: "flex", flexDirection: "column", gap: "20px" }}
    >
      {/* Email Field */}
      <TextField
        label="Email"
        variant="outlined"
        value={signInData.email || ""}
        onChange={(e) => dispatch({ value: e?.target?.value, name: "email" })}
        fullWidth
        sx={{
          margin: "3px 0px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: getBorderColor(signInData.emailStatus),
            },
            "&:hover fieldset": {
              borderColor: getBorderColor(signInData.emailStatus),
            },
            "&.Mui-focused fieldset": {
              borderColor: getBorderColor(signInData.emailStatus),
            },
          },
        }}
      />

      {/* Password Field */}
      <TextField
        label="Password"
        type={showPassword ? "text" : "password"}
        variant="outlined"
        value={signInData.password || ""}
        onChange={(e) =>
          dispatch({ value: e?.target?.value, name: "password" })
        }
        fullWidth
        sx={{
          margin: "3px 0px",
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: getBorderColor(signInData.passwordStatus),
            },
            "&:hover fieldset": {
              borderColor: getBorderColor(signInData.passwordStatus),
            },
            "&.Mui-focused fieldset": {
              borderColor: getBorderColor(signInData.passwordStatus),
            },
          },
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={() => setShowPassword((prev) => !prev)}>
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      {/* Submit Button with Loading */}
      <Button
        type="submit"
        variant="contained"
        fullWidth
        disabled={loading}
        sx={{
          backgroundColor: "#1976d2",
          "&:hover": { backgroundColor: "#1565c0" },
          padding: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        {loading && <CircularProgress size={20} sx={{ color: "#fff" }} />}
        {loading ? "Logging in..." : "Login"}
      </Button>
    </form>
  );
};

export default LoginInputFileds;
