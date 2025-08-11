import CryptoJS from "crypto-js";

// In Vite use import.meta.env, in CRA use process.env
const SECRET_KEY =
  import.meta?.env?.VITE_LOGIN_SECRET_KEY || "SOSHRCRINSPR2025"; // fallback

export const encryptData = (data) => {
  return CryptoJS.AES.encrypt(data, SECRET_KEY).toString();
};

export const decryptData = (cipherText) => {
  const bytes = CryptoJS.AES.decrypt(cipherText, SECRET_KEY);
  return bytes.toString(CryptoJS.enc.Utf8);
};
