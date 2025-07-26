import { ListAccordionProp } from "./ListAccordionProp";
import type { GeographyItemProp } from "./GeographyItemProp";

export interface GeographyProps extends Omit<ListAccordionProp, "items" | "title" | "icon"> {
  collapsed: boolean;
  selected: GeographyItemProp[];
  setSelected: (items: GeographyItemProp[]) => void;
}
