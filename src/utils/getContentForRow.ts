import { ContentUnit } from "../ui/organisms/Table";

export const getContentForRow = (content: ContentUnit[], row: string): (string | number)[] => {
    return content
      .map((unit) => unit[row])
      .filter(
        (state) => typeof state === "string" || typeof state === "number"
      ) as (string | number)[];
  };