import KeyboardDoubleArrowRightIcon from "@mui/icons-material/KeyboardDoubleArrowRight";
import KeyboardDoubleArrowLeftIcon from "@mui/icons-material/KeyboardDoubleArrowLeft";
import ArrowLeftIcon from "@mui/icons-material/ArrowLeft";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { tabelPaginationStyles, tabelStyles } from "../tableStyles/styles";
import { tableColors } from "../tableStyles/color";

const TablePagination = ({
  table,
  setPagination,
  pagination,
  pageCount,
  recordCount,
}) => {
  const getPaginationButtons = (currentPageIndex, totalPages) => {
    const currentPage = currentPageIndex + 1;
    const buttons = [];

    buttons.push(1);
    if (currentPage > 3) buttons.push("...");
    const start = Math.max(2, currentPage - 1);
    const end = Math.min(totalPages - 1, currentPage + 1);
    for (let i = start; i <= end; i++) buttons.push(i);
    if (currentPage < totalPages - 2) buttons.push("...");
    if (totalPages > 1) buttons.push(totalPages);

    return [...new Set(buttons)];
  };

  const handlePageChange = (number) => {
    setPagination({
      ...pagination,
      pageIndex: number - 1,
    });
  };

  return (
    <div style={tabelPaginationStyles.container}>
      <p style={tabelPaginationStyles.info}>
        Total Record Count:{" "}
        <span style={{ fontWeight: "bold", color: tableColors.primaryColor }}>
          {recordCount}
        </span>
      </p>

      <div style={tabelPaginationStyles.controls}>
        {/* First and Previous */}
        <KeyboardDoubleArrowLeftIcon
          onClick={() => table.firstPage()}
          style={{
            ...tabelPaginationStyles.arrowIcon,
            ...(table.getCanPreviousPage()
              ? {}
              : tabelPaginationStyles.arrowDisabled),
          }}
        />
        <ArrowLeftIcon
          onClick={() => table.previousPage()}
          style={{
            ...tabelPaginationStyles.arrowIcon,
            ...(table.getCanPreviousPage()
              ? {}
              : tabelPaginationStyles.arrowDisabled),
          }}
        />

        {/* Page numbers */}
        <div style={tabelPaginationStyles.pageButtonsContainer}>
          {getPaginationButtons(pagination.pageIndex, pageCount).map(
            (item, index) =>
              item === "..." ? (
                <span key={index} style={tabelPaginationStyles.dots}>
                  ...
                </span>
              ) : (
                <button
                  key={index}
                  onClick={() => handlePageChange(item)}
                  style={{
                    ...tabelPaginationStyles.pageButton,
                    ...(item === pagination.pageIndex + 1
                      ? tabelPaginationStyles.pageButtonActive
                      : {}),
                  }}
                >
                  {item}
                </button>
              )
          )}
        </div>

        {/* Next and Last */}
        <ArrowRightIcon
          onClick={() => table.nextPage()}
          style={{
            ...tabelPaginationStyles.arrowIcon,
            ...(table.getCanNextPage()
              ? {}
              : tabelPaginationStyles.arrowDisabled),
          }}
        />
        <KeyboardDoubleArrowRightIcon
          onClick={() => table.lastPage()}
          style={{
            ...tabelPaginationStyles.arrowIcon,
            ...(table.getCanNextPage()
              ? {}
              : tabelPaginationStyles.arrowDisabled),
          }}
        />
      </div>
    </div>
  );
};

export default TablePagination;
