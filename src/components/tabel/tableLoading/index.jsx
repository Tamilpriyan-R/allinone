import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Paper,
  Skeleton,
} from "@mui/material";

const TableLoading = () => {
  return (
    <TableContainer
      //   component={Paper}
      sx={{ width: "100%", height: "max-content", overflow: "auto" }}
    >
      <Table stickyHeader>
        <TableBody>
          {Array.from({ length: 11 }).map((_, rowIndex) => (
            <TableRow key={rowIndex} sx={{ height: "0px" }}>
              {Array.from({ length: 5 }).map((_, colIndex) => (
                <TableCell key={colIndex}>
                  <Skeleton variant="rectangular" height={15} width="100%" />
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableLoading;
