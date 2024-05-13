import React from "react";
import { Button } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

type FilterButton = {
  onClick: () => void;
  disabled?: boolean;
  isFilter?: boolean;
  handleClear?: () => void;
};

export const FilterButton = React.memo(
  ({
    onClick,
    disabled = false,
    isFilter,
    handleClear,
  }: FilterButton): JSX.Element => {
    return (
      <div className="flex mb-6 mr-3">
        <Button
          disabled={disabled}
          variant="primary"
          onClick={onClick}
          className="min-w-36"
        >
          Filter <FilterAltIcon />
        </Button>
        {isFilter && handleClear && (
          <Button
            variant="Danger"
            onClick={() => handleClear()}
            className="mr-1"
          >
            <CloseIcon />
          </Button>
        )}
      </div>
    );
  }
);
