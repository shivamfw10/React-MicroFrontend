import { ListAccordionProp } from "./ListAccordionProp";
import type { CategoryItemProp } from "./CategoryItemProp";

export interface CategoryProps extends Omit<ListAccordionProp, "items" | "title" | "icon"> {
  collapsed: boolean;
  onAccordionExpand?: (isExpanded: boolean) => void;
  selected: CategoryItemProp[];
  setSelected: (items: CategoryItemProp[]) => void;
}
