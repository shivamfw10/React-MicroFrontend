export interface SelectedFilterPanelProp {
  selectedCategories: { label: string }[];
  selectedGeographies: { name: string }[];
  onReset: () => void;
  onGo: () => void;
  onRemoveCategory?: (cat: { label: string }) => void;
  onRemoveGeography?: (geo: { name: string }) => void;
}
