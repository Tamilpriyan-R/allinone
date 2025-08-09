import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { MenuItem, Menu, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import IconBox from "../components/IconBox";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { tableToolStyles } from "../tableStyles/styles";

const TableMore = ({
  onExport,
  onUpload,
  isExport = true,
  isUpload = true,
}) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const handleExport = async () => {
    handleCloseMenu();
    await onExport();
  };

  const handleUpload = async () => {
    handleCloseMenu();
    await onUpload();
  };

  return (
    <>
      <IconBox onClick={handleOpenMenu} IconName={MoreHorizIcon} />
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        sx={{ mt: 1 }}
      >
        {isExport && (
          <MenuItem
            onClick={handleExport}
            sx={{ ...tableToolStyles.moreMenus.menus }}
          >
            <ListItemIcon>
              <FileDownloadIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Export" />
          </MenuItem>
        )}

        {isUpload && (
          <MenuItem onClick={handleUpload}>
            <ListItemIcon>
              <FileUploadIcon fontSize="small" />
            </ListItemIcon>
            <ListItemText primary="Upload" />
          </MenuItem>
        )}
      </Menu>
    </>
  );
};

export default TableMore;
