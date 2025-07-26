export interface AccordionProp {
  title: string;
  icon?: React.ReactNode;
  collapsed?: boolean;
  children?: React.ReactNode;
  onToggle?: (open: boolean) => void;
}
