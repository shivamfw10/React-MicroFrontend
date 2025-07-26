import type { CategoryItemProp } from "./CategoryItemProp";

export interface ListAccordionProp {
  title: string;
  icon?: React.ReactNode;
  items: CategoryItemProp[];
  collapsed: boolean;
}