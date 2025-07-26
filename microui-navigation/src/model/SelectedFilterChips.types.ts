export interface SelectedFilterChipsProps<T> {
  items: T[];
  getKey: (item: T) => string;
  getLabel: (item: T) => string;
  onRemove?: (item: T) => void;
  chipClassName?: string;
  chipRemoveClassName?: string;
}
