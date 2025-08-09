import { IconButton, Tooltip } from "@mui/material";
import { tableToolStyles } from "../tableStyles/styles";

const IconBox = ({ IconName, title, onClick }) => {
  return (
    <Tooltip
      title={title}
      arrow
      placement="top" // can be top, bottom, left, right
      componentsProps={{
        tooltip: {
          sx: {
            backgroundColor: "#333",
            color: "#fff",
            fontSize: "0.85rem",
            padding: "6px 10px",
            borderRadius: "4px",
          },
        },
      }}
    >
      <IconButton sx={{ ...tableToolStyles.icons.box }} onClick={onClick}>
        <IconName sx={{ ...tableToolStyles.icons.icon }} />
      </IconButton>
    </Tooltip>
  );
};

export default IconBox;
