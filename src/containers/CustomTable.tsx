import React from "react";

import { Table } from "../ui/organisms/Table";
import { SideModal } from "../ui/atoms/SideModal";
import { SearchField } from "../ui/molecules/SearchFiled";
import { FilterButton } from "../ui/molecules/FilterButton";
import { FilterContent } from "../ui/organisms/FilterContent";

import { searchHandler } from "../utils/searchHandler";
import { filterHandler } from "../utils/filterHandler";

import { ContentUnit, TFilters } from "../types";

type CustomTableProps = {
  content: ContentUnit[];
};

export const CustomTable = React.memo(
  ({ content }: CustomTableProps): JSX.Element => {
    const [tabData, setTabData] = React.useState<ContentUnit[]>(content);
    const [isFilter, setIsFilter] = React.useState<boolean>(false);

    const [filterModalOpen, setFilterModalOpen] =
      React.useState<boolean>(false);

    const handleSearchTab = React.useCallback((value: string) => {
      setIsFilter(false);
      setTabData(searchHandler(content, value));
    }, []);

    const handleClearTab = React.useCallback(() => {
      setIsFilter(false);
      setTabData(content);
    }, []);

    const handleFilterTab = React.useCallback((values: TFilters) => {
      setIsFilter(true);
      setTabData(filterHandler(content, values));
    }, []);

    const handleEditTab = React.useCallback((row: ContentUnit) => {
      console.log(row);
      setTabData([...content.filter((el) => el.id !== row.id), row]);
    }, []);

    return (
      <div className="flex flex-col justify-center my-6 mx-4">
        <div className="flex justify-end  items-center">
          <SearchField
            handleSearch={handleSearchTab}
            handleClear={handleClearTab}
          />
          <FilterButton
            onClick={() => setFilterModalOpen(!filterModalOpen)}
            disabled={tabData.length === 0}
            isFilter={isFilter}
            handleClear={handleClearTab}
          />
        </div>
        <Table content={tabData} handleEdit={handleEditTab} />
        {filterModalOpen && (
          <SideModal
            isOpen={filterModalOpen}
            setOpen={setFilterModalOpen}
            content={
              <FilterContent
                content={tabData}
                setOpen={setFilterModalOpen}
                handleFilter={handleFilterTab}
                handleClear={handleClearTab}
              />
            }
          />
        )}
      </div>
    );
  }
);
