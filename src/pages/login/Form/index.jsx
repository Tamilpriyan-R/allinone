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
import axios from "axios";
import { LOGIN_API_URL } from "../../../utils/apiUtilis";

const LoginInputFileds = () => {
  const [signInData, dispatch] = useReducer(signInStateMange, signInState);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const { setAuthenticated, setCurrentUser } = useAuth();
  const { showSnackbar } = useSnackbar();

  const getBorderColor = (status) => {
    switch (status) {
      case "success":
        return "#4caf50";
      case "error":
        return "#f44336";
      default:
        return "#c4c4c4";
    }
  };

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

    showSnackbar(message, success ? "success" : "error");

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
        localStorage.setItem(
          "currentUser",
          JSON.stringify(currentuser?.data?.data)
        );
      } catch (error) {}

      localStorage.setItem("authenticated", JSON.stringify(true));
      setAuthenticated(true);
    } else {
      setAuthenticated(false);
      localStorage.setItem("authenticated", JSON.stringify(false));
    }
    setLoading(false);
  };

  // Common style for smaller fields
  const smallFieldStyle = (status) => ({
    margin: "3px 0px",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: getBorderColor(status),
      },
      "&:hover fieldset": {
        borderColor: getBorderColor(status),
      },
      "&.Mui-focused fieldset": {
        borderColor: getBorderColor(status),
      },
      height: "45px", // compact height
    },
    "& .MuiInputBase-input": {
      padding: "6px 10px", // reduced padding
      fontSize: "14px", // smaller text
    },
    "& .MuiInputLabel-root": {
      fontSize: "13px", // smaller label
    },
    "& .MuiInputLabel-shrink": {
      fontSize: "12px", // smaller floating label
    },
  });

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
        sx={smallFieldStyle(signInData.emailStatus)}
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
        sx={smallFieldStyle(signInData.passwordStatus)}
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
          padding: "6px",
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
