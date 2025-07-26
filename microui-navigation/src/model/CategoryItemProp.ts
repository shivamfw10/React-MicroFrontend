export interface CategoryItemProp {
  pageId: number;
  pagePkId: string;
  parentId: number;
  industryId: string | null;
  label: string;
  menuGroup: string | null;
  menuCode: string | null;
  industries: CategoryItemProp[] | null;
  isPaid: boolean;
}
