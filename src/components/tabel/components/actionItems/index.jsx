import VisibilityIcon from "@mui/icons-material/Visibility";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import { tableActionStyles } from "../../tableStyles/styles";
const TableActionItems = ({
  row,
  isEdit = true,
  isView = true,
  isDelete = true,
  onView,
  onEdit,
  onDelete,
}) => {
  return (
    <div style={{ ...tableActionStyles.container }}>
      {isView && (
        <VisibilityIcon
          sx={{ ...tableActionStyles.icon }}
          onClick={() => onView(row?.row?.original)}
        />
      )}
      {isEdit && (
        <CreateIcon
          sx={{ ...tableActionStyles.icon }}
          onClick={() => onEdit(row?.row?.original)}
        />
      )}
      {isDelete && (
        <DeleteIcon
          sx={{ ...tableActionStyles.icon }}
          onClick={() => onDelete(row?.row?.original)}
        />
      )}
    </div>
  );
};

export default TableActionItems;
