// Generic utility to collect all parent IDs for matches in a tree
export function getExpandedIdsForSearch<T>(
  items: T[],
  search: string,
  getLabel: (item: T) => string,
  getChildren: (item: T) => T[] | undefined,
  getId: (item: T) => string,
  parents: string[] = []
): string[] {
  let ids: string[] = [];
  for (const item of items) {
    const match = getLabel(item).toLowerCase().includes(search.toLowerCase());
    const children = getChildren(item) ?? [];
    const childMatches = getExpandedIdsForSearch(children, search, getLabel, getChildren, getId, [...parents, getId(item)]);
    if (match && parents.length) {
      ids = ids.concat(parents);
    }
    ids = ids.concat(childMatches);
  }
  return Array.from(new Set(ids));
}
