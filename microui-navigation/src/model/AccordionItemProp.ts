export interface AccordionItemProps<T> {
  item: T;
  isTopLevel: boolean;
  openIndexes: string[];
  handleToggle: (id: string) => void;
  getId: (item: T) => string;
  getLabel: (item: T) => string;
  getChildren: (item: T) => T[] | undefined;
  renderItem?: (item: T, isTopLevel: boolean) => React.ReactNode;
  searchTerm?: string;
}