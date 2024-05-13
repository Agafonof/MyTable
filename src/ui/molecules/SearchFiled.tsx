import React from "react";
import { Button, Form } from "react-bootstrap";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";

type SearchFieldProps = {
  handleSearch: (value: string) => void;
  handleClear: () => void;
};

export const SearchField = ({
  handleSearch,
  handleClear,
}: SearchFieldProps): JSX.Element => {
  const [value, setValue] = React.useState<string>("");

  React.useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if ((e.key === "Backspace" || e.key === "Delete") && value.length > 0) {
        handleClear();
      }

      if (e.key === "Enter" && value.length > 0) {
        handleSearch(value);
      }

      return;
    };

    window.addEventListener("keydown", handleKey);

    return () => window.removeEventListener("keydown", handleKey);
  }, [value, handleSearch, handleClear]);

  return (
    <div className="flex mb-6 mr-3">
      <Form.Control
        placeholder="Search"
        aria-describedby="basic-addon1"
        onChange={(e) => setValue(e.target.value)}
        value={value}
        className="mr-1"
      />
      <Button
        variant="Danger"
        onClick={() => {
          setValue("");
          handleClear();
        }}
        disabled={value.length === 0}
        className="mr-1"
      >
        <CloseIcon />
      </Button>{" "}
      <Button
        variant="primary"
        disabled={value.length === 0}
        onClick={() => handleSearch(value)}
      >
        <SearchIcon />
      </Button>{" "}
    </div>
  );
};
