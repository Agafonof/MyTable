import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { getContentForRow } from "../../utils/getContentForRow";

import { ContentUnit, TFilters } from "../../types";

type FilterContentProps = {
  content: ContentUnit[];
  setOpen: (value: boolean) => void;
  handleFilter: (values: TFilters) => void;
  handleClear: () => void;
};

export const FilterContent = ({
  content,
  setOpen,
  handleFilter,
  handleClear,
}: FilterContentProps): JSX.Element => {
  const [filters, setFilters] = React.useState<TFilters>({});

  const headers = Object.keys(content[0]).filter(
    (header) => getContentForRow(content, header).length > 0
  );

  return (
    <div className="flex flex-col w-full ">
      <div className="py-3 px-4 mb-6 text-2xl w-full flex items-start border-b-2 border-neutral-300 ">
        Filters
      </div>
      <div className="mx-4 flex flex-col w-full">
        {content.length > 0 && (
          <div className="flex flex-col">
            {headers.map((header) => (
              <Form.Group key={header} className="mb-3 w-3/4">
                <Form.Label>{header}</Form.Label>
                <Form.Select
                  onChange={(e) =>
                    setFilters({ ...filters, [`${header}`]: e.target.value })
                  }
                >
                  <option>Open this select menu</option>
                  {getContentForRow(content, header).map((value, i) => (
                    <option key={value.toString() + i} value={value}>
                      {value}
                    </option>
                  ))}
                </Form.Select>
              </Form.Group>
            ))}
          </div>
        )}
      </div>
      <div className="py-3 px-4 ">
        <Button
          className="mr-4 min-w-28"
          variant="warning"
          onClick={() => {
            handleClear();
            setOpen(false);
          }}
        >
          Cancel
        </Button>
        <Button
          className="min-w-28"
          onClick={() => {
            handleFilter(filters);
            setOpen(false);
          }}
          variant="light"
        >
          Apply
        </Button>
      </div>
    </div>
  );
};
