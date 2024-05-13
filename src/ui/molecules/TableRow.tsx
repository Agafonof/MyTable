import React from "react";
import { Button } from "react-bootstrap";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import { CenterModal } from "../atoms/CenterModal";
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
              {typeof unit === "boolean" ? (
                unit ? (
                  <CheckIcon className="text-green-600" />
                ) : (
                  <CloseIcon className="text-red-600" />
                )
              ) : (
                unit
              )}
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
