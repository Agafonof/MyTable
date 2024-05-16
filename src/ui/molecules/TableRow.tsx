import React from "react";
import { Button } from "react-bootstrap";

import { CenterModal } from "../atoms/CenterModal";
import { TableCellUnit } from "../atoms/TableCellUnit";
import { EditContent } from "../organisms/EditContent";

import { ContentUnit } from "../../types";

type TableHeaderProps = {
  content: ContentUnit;
  handleEdit?: (value: ContentUnit) => void;
};

export const TableRow = React.memo(
  ({ content, handleEdit }: TableHeaderProps): JSX.Element => {
    const rowContent = Object.values(content);
    const [editModalOpen, setEditModalOpen] = React.useState<boolean>(false);

    return (
      <>
        <tr className="odd:bg-sky-50">
          {rowContent?.map((unit, index) => (
            <td className="px-3 py-2" key={index + "key"}>
              <TableCellUnit unit={unit} />
            </td>
          ))}
          {handleEdit && (
            <td className="px-3 py-2">
              <Button
                variant="light"
                onClick={() => {
                  setEditModalOpen(true);
                }}
              >
                Edit
              </Button>
            </td>
          )}
        </tr>
        {handleEdit && editModalOpen && (
          <tr>
            <td>
              <CenterModal
                isOpen={editModalOpen}
                setOpen={setEditModalOpen}
                content={
                  <EditContent
                    row={content}
                    setOpen={setEditModalOpen}
                    handleEdit={handleEdit}
                  />
                }
              />
            </td>
          </tr>
        )}
      </>
    );
  }
);
