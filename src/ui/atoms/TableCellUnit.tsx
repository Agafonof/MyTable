import React from "react";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

import Button from "react-bootstrap/Button";
import OverlayTrigger from "react-bootstrap/OverlayTrigger";
import Tooltip from "react-bootstrap/Tooltip";

type TableCellUnit = {
  unit: any;
};

export const TableCellUnit = React.memo(
  ({ unit }: TableCellUnit): JSX.Element => {
    const isValidJSX = React.isValidElement(unit);

    return (
      <>
        {isValidJSX ? (
          unit
        ) : (
          <>
            {typeof unit != "boolean" && !unit && "No data"}
            {(typeof unit === "string" || typeof unit === "number") && unit}
            {typeof unit === "boolean" &&
              (unit ? (
                <CheckIcon className="text-green-600" />
              ) : (
                <CloseIcon className="text-red-600" />
              ))}
            {(typeof unit === "object" || typeof unit === "symbol") && (
              <OverlayTrigger
                overlay={
                  <Tooltip id="tooltip">Convert data to correct format</Tooltip>
                }
              >
                <span className="d-inline-block">Invalid data</span>
              </OverlayTrigger>
            )}
          </>
        )}
      </>
    );
  }
);
