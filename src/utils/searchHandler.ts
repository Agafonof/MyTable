import { ContentUnit } from "../ui/organisms/Table";

export const searchHandler = (data: ContentUnit[], value: string) =>
  data.filter((unit) =>
    Object.values(unit)?.some((property) => {
      return typeof property === "string"
        ? property.toLowerCase().includes(value.toLowerCase())
        : typeof property === "number"
        ? property.toString().toLowerCase().includes(value.toLowerCase())
        : false;
    })
  );
