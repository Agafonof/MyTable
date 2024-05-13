import React from "react";

import { TableRow } from "../molecules/TableRow";
import { TableHeader } from "../molecules/TableHeader";

import { ContentUnit } from "../../types";

type TableProps = {
  content: ContentUnit[];
  handleEdit?: (row: ContentUnit) => void;
};

export const Table = React.memo(({ content = [], handleEdit }: TableProps) => {
  const headers = content.length > 0 ? Object.keys(content[0]) : ["Not found"];

  return (
    <>
      <table className="w-full rounded border border-separate border-tools-table-outline">
        <TableHeader
          headers={headers}
          handleEdit={handleEdit}
          isEmpty={content.length === 0}
        />
        <tbody>
          {content.map((unit, index) => (
            <TableRow
              key={index + "key"}
              content={unit}
              handleEdit={handleEdit}
            />
          ))}
        </tbody>
      </table>
    </>
  );
});
