import SearchIcon from "@mui/icons-material/Search";
import { tableToolStyles } from "../tableStyles/styles";
import { useState } from "react";

const TableSearch = ({ onChange }) => {
  const [search, setSearch] = useState("");

  const handleTableSearch = (event) => {
    setSearch(event?.target?.value);
    onChange(event?.target?.value);
  };

  return (
    <div style={{ ...tableToolStyles.search.box }}>
      <input
        value={search}
        onChange={(event) => handleTableSearch(event)}
        style={{
          ...tableToolStyles.search.input,
        }}
      />
      <SearchIcon
        sx={{
          ...tableToolStyles.search.icon,
        }}
      />
    </div>
  );
};

export default TableSearch;
