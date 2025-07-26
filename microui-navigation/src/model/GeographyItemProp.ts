export interface GeographyItemProp {
  id: string;
  name: string;
  parent: string | null;
  children: GeographyItemProp[];
}
