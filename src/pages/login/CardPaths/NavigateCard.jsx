import { useEffect, useState } from "react";
import { Card, Tooltip } from "@mui/material";
import { decryptData, encryptData } from "../../../functions/Encripted";
import CryptoJS from "crypto-js";

const NavigateCard = ({ logo, title, url }) => {
  const [fullUrl, setFullUrl] = useState("");

  const setCredentials = (email, password, key) => {
    const ciphertext = CryptoJS.AES.encrypt(
      JSON.stringify({ email, password }),
      "1234"
    ).toString();

    return ciphertext;
  };

  useEffect(() => {
    const email = localStorage.getItem("rememberedEmail") || "";
    const password = localStorage.getItem("rememberedPassword") || "";

    const decEMail = decryptData(email);
    const decPasswod = decryptData(password);

    const dec = setCredentials(decEMail, decPasswod);

    const encodedData = encodeURIComponent(dec);

    setFullUrl(`${url}?data=${encodedData}`);
  }, [url]);

  return (
    <Tooltip title={title}>
      <a href={fullUrl} target="_blank" rel="noopener noreferrer">
        <Card
          sx={{
            height: 50,
            width: 80,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 2,
            boxShadow: 2,
            cursor: "pointer",
            "&:hover": { boxShadow: 4 },
            flexShrink: 0,
          }}
        >
          <img
            src={logo}
            alt={title}
            style={{
              width: "70px",
              height: "30px",
              objectFit: "contain",
            }}
          />
        </Card>
      </a>
    </Tooltip>
  );
};

export default NavigateCard;
