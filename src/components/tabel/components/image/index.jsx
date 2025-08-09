import React from "react";

const TabelImage = ({ src, style, alt }) => {
  return <img src={src} alt={alt} style={{ ...style }} />;
};

export default TabelImage;
