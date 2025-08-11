import axios from "axios";
import { LOGIN_API_URL } from "../utils/apiUtilis";
import { setItemWithExpiry } from "./tokenExpries";

export const userLoginServices = async (email, password) => {
  let success;
  let message;
  let data;
  try {
    const response = await axios.post(`${LOGIN_API_URL}users/v1/login/`, {
      email: email,
      password: password,
    });

    if (response?.data?.success) {
      success = true;
      const token = response.data.token;
      setItemWithExpiry("auth_token", token, 8);

      data = response?.data;
    } else {
      success = false;
    }

    message = response?.data?.message;
  } catch (error) {
    console.log(error,"error");
    
     message = error?.message
  }

  return { success, message, data };
};
