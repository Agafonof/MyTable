import { TFilters } from "../ui/organisms/FilterContent";
import { ContentUnit } from "../ui/organisms/Table";

export const filterHandler = (
  data: ContentUnit[],
  values: TFilters
): ContentUnit[] => {
  const headers = Object.keys(values);

  return data.filter((unit) =>
    headers.some(
      (header) =>
        unit.hasOwnProperty(header) &&
        unit[header as keyof typeof unit] == values[`${header}`]
    )
  );
};
