import {
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import TableHead from "./tableHead";
import TableBody from "./tableBody";
import TablePagination from "./tablePagination";
import { tabelStyles, tableToolStyles } from "./tableStyles/styles";
import { useRef, useState } from "react";
import TableSearch from "./tableSearch";
import TableLoading from "./tableLoading";
import TableAdd from "./tableAdd";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import IconBox from "./components/IconBox";
import "./style/tanstackTable.css";
import TableMore from "./tableMore";
import DateFilter from "./dateFilter";
import { toggleFullScreen } from "./function/fullScreen";
import TableDataNotFound from "./dataNotFound";

const TanstackTableComponents = ({
  rows,
  columns,
  pagination,
  setPagination,
  pageCount,
  onChange,
  isSearch = true,
  recordCount,
  isLoading = false,
  isAdd = true,
  addTitle = "",
  addPath = "",
  heading,
  dateChange,
  isDateFilter = true,
  onExport,
  onUpload,
  isExport,
  isUpload,
  handleAdd,
  isMore = true,
}) => {
  const [sorting, setSorting] = useState([]);
  const table = useReactTable({
    data: rows,
    columns: columns,
    state: {
      sorting: sorting,
      pagination: pagination || {
        pageIndex: 0,
        pageSize: 10,
      },
    },
    pageCount: pageCount,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    manualPagination: true,
    onPaginationChange: setPagination,
    defaultColumn: {
      size: 200, //starting column size
      minSize: 50, //enforced during column resizing
      maxSize: 500, //enforced during column resizing
    },
  });

  const tabelRef = useRef(null);

  const handleToggleFullscreen = () => {
    if (tabelRef.current) {
      toggleFullScreen(tabelRef.current);
    }
  };

  return (
    <div style={{ padding: "0px 5px", marginTop: "-20px", overflow: "hidden" }}>
      <div ref={tabelRef} style={{ ...tabelStyles.container }}>
        <div
          style={{
            ...tableToolStyles.container,
          }}
        >
          <div>
            <h2 style={{ ...tabelStyles.heading }}>{heading}</h2>
          </div>

          <div style={{ display: "flex", alignItems: "center" }}>
            {isDateFilter && <DateFilter dateChange={dateChange} />}

            {isSearch && <TableSearch onChange={onChange} />}
            {isAdd && (
              <TableAdd title={addTitle} path={addPath} handleAdd={handleAdd} />
            )}
            <IconBox
              IconName={OpenInFullIcon}
              onClick={handleToggleFullscreen}
            />
            {isMore && (
              <TableMore
                onExport={onExport}
                onUpload={onUpload}
                isExport={isExport}
                isUpload={isUpload}
              />
            )}
          </div>
        </div>

        {isLoading && <TableLoading />}
        {!isLoading && (
          <>
            <div style={{ ...tabelStyles.box }} className="custom-scrollbar">
              {rows.length === 0 ? (
                <TableDataNotFound />
              ) : (
                <table style={{ ...tabelStyles.tabel }}>
                  <TableHead table={table} />

                  <TableBody table={table} />
                </table>
              )}
            </div>
          </>
        )}
        <TablePagination
          table={table}
          pagination={pagination}
          setPagination={setPagination}
          pageCount={table.getPageCount()}
          recordCount={recordCount}
        />
      </div>
    </div>
  );
};

export default TanstackTableComponents;
