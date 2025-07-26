import { ListAccordionProp } from "./ListAccordionProp";

export type RenderItemFn<T> = (item: T, isTopLevel: boolean) => React.ReactNode;

export type GenericListAccordionProps<T> = Omit<ListAccordionProp, 'items'> & {
  items: T[];
  getId: (item: T) => string;
  getLabel: (item: T) => string;
  getChildren: (item: T) => T[] | undefined;
  onAccordionChange?: (open: boolean) => void;
  renderItem?: RenderItemFn<T>;
  renderHeader?: React.ReactNode;
  forceOpenIndexes?: string[];
  highlightIds?: string[]; 
};
