// Utility to filter a tree structure based on a search string and label/children accessors
export function filterTree<T>(
  items: T[],
  search: string,
  getLabel: (item: T) => string,
  getChildren: (item: T) => T[] | undefined,
  setChildren: (item: T, children: T[]) => T
): T[] {
  return items
    .map((item) => {
      const children = getChildren(item) ? filterTree(getChildren(item)!, search, getLabel, getChildren, setChildren) : [];
      const match = getLabel(item).toLowerCase().includes(search.toLowerCase());
      if (match || children.length > 0) {
        return setChildren(item, children);
      }
      return null;
    })
    .filter(Boolean) as T[];
}
