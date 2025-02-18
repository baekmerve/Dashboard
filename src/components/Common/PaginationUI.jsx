import React, { useState } from "react";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const PaginationUI = ({
  rowsPerPage,
  data,
  startIndex,
  setStartIndex,
  endIndex,
}) => {
  return (
    <Pagination className=" mt-5">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            className={
              startIndex === 0
                ? "pointer-events-none opacity-50"
                : "cursor-pointer"
            }
            onClick={() => {
              setStartIndex(Math.max(startIndex - rowsPerPage, 0));
            }}
          />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext
            className={
              endIndex >= data?.length
                ? "pointer-events-none opacity-50"
                : "cursor-pointer "
            }
            onClick={() => {
              setStartIndex(
                Math.min(startIndex + rowsPerPage, data?.length - rowsPerPage)
              );
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationUI;
