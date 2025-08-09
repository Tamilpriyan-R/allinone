import { flexRender } from "@tanstack/react-table";
import { tabelStyles } from "../tableStyles/styles";
import SwapVertIcon from "@mui/icons-material/SwapVert";

const TableHead = ({ table }) => {
  return (
    <thead style={{ ...tabelStyles.thead.head }}>
      {table?.getHeaderGroups()?.map((headerGroups) => (
        <tr key={headerGroups?.id}>
          {headerGroups?.headers?.map((header) => {
            const isSticky = header.column.columnDef.meta?.sticky;
            const leftOffset = header.column.columnDef.meta?.left;
            return (
              <th
                key={header.id}
                colSpan={header.colSpan}
                style={{
                  ...tabelStyles.thead.th,
                  width: `${header.getSize()}px`,
                  left: isSticky ? leftOffset : "",
                }}
                className={isSticky ? "tabelColumSticky" : ""}
                onClick={header.column.getToggleSortingHandler()}
              >
                <div
                  style={{
                    ...tabelStyles.thead.sortingBox.box,
                  }}
                >
                  <span style={{ ...tabelStyles.thead.sortingBox.heading }}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
                  </span>
                  <span>
                    {{
                      asc: (
                        <SwapVertIcon
                          sx={{ ...tabelStyles.thead.sortingBox.icon }}
                        />
                      ),
                      desc: (
                        <SwapVertIcon
                          sx={{ ...tabelStyles.thead.sortingBox.icon }}
                        />
                      ),
                    }[header.column.getIsSorted()] ?? (
                      <SwapVertIcon
                        sx={{ ...tabelStyles.thead.sortingBox.icon }}
                      />
                    )}
                  </span>
                </div>
              </th>
            );
          })}
        </tr>
      ))}
    </thead>
  );
};

export default TableHead;
