import React from "react";
import { Form } from "react-bootstrap";
import Button from "react-bootstrap/Button";

import { getContentForRow } from "../../utils/getContentForRow";

import { ContentUnit } from "../../types";

type EditContentProps = {
  row: ContentUnit;
  setOpen: (value: boolean) => void;
  handleEdit: (value: ContentUnit) => void;
};

export const EditContent = ({
  row,
  setOpen,
  handleEdit,
}: EditContentProps): JSX.Element => {
  const [editingRow, setEditingRow] = React.useState<ContentUnit>(row);

  const headers = Object.keys(editingRow).filter(
    (header) => getContentForRow([editingRow], header).length > 0
  );

  return (
    <div className="flex flex-col w-full items-center">
      <div className="py-3 px-4 mb-6 text-2xl w-full flex items-start border-b-2 border-neutral-300 ">
        Edit
      </div>
      <div className="lex flex-col w-full items-center">
        <div className="flex flex-col w-full px-4 ">
          {headers.map((header) => (
            <Form.Group key={header} className="mb-3 w-full">
              <Form.Label>{header}</Form.Label>
              <Form.Control
                type="text"
                placeholder="This field is empty"
                value={editingRow[`${header}`] as string | number}
                onChange={(e) =>
                  setEditingRow({
                    ...editingRow,
                    [`${header}`]: e.target.value,
                  })
                }
              />
            </Form.Group>
          ))}
        </div>
      </div>
      <div className="py-3 px-4 ">
        <Button
          className="mr-4 min-w-48"
          variant="warning"
          onClick={() => setOpen(false)}
        >
          Cancel
        </Button>
        <Button
          className="min-w-48"
          onClick={() => {
            handleEdit(editingRow);
            setOpen(false);
          }}
          variant="light"
          disabled={Object.keys({ ...editingRow, ...row }).every(
            (key) => editingRow[key] === row[key]
          )}
        >
          Save
        </Button>
      </div>
    </div>
  );
};
