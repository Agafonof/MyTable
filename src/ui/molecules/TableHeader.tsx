import React from "react";

import { ContentUnit } from "../../types";

type TableHeaderProps = {
  headers: React.ReactNode[];
  handleEdit?: (value: ContentUnit) => void;
  isEmpty: boolean;
};

export const TableHeader = React.memo(
  ({ headers, handleEdit, isEmpty }: TableHeaderProps): JSX.Element => {
    return (
      <thead className="bg-sky-200 w-full">
        <tr>
          {headers?.map((header, index) => (
            <th className="py-4 px-3" key={index + "key"}>
              {header}
            </th>
          ))}
          {handleEdit && !isEmpty && <th className="py-4 px-3"></th>}
        </tr>
      </thead>
    );
  }
);
