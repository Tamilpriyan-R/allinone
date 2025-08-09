import { flexRender } from "@tanstack/react-table";
import { tabelStyles } from "../tableStyles/styles";

const TableBody = ({ table }) => {
  return (
    <tbody>
      {table?.getRowModel()?.rows?.map((row) => (
        <tr style={{ ...tabelStyles.tbody.tr, margin: "5px 0px" }} key={row.id}>
          {row.getVisibleCells().map((cell) => (
            <td
              key={cell.id}
              style={{
                ...tabelStyles.tbody.td,
                width: `${cell.column.getSize()}px`,
                left: cell.column.columnDef.meta?.left,
              }}
              className={
                cell.column.columnDef.meta?.sticky ? "tabelColumSticky" : ""
              }
            >
              {flexRender(cell.column.columnDef.cell, cell.getContext())}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
