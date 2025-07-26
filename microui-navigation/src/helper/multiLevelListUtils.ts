import * as React from 'react';
// Centralized utility class for multi-level list operations
export class MultiLevelListUtils {
  /**
   * Toggle selection of an item in a list by id accessor
   */
  static toggleSelection<T, K>(selected: T[], item: T, getId: (item: T) => K): T[] {
    const id = getId(item);
    return selected.some((s) => getId(s) === id)
      ? selected.filter((s) => getId(s) !== id)
      : [...selected, item];
  }

  /**
   * Toggle expanded/collapsed state for an id in a list
   */
  static toggleExpandedId<T extends string | number>(ids: T[], id: T): T[] {
    return ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id];
  }

  /**
   * Filter a tree structure based on a search string and label/children accessors
   */
  static filterTree<T>(
    items: T[],
    search: string,
    getLabel: (item: T) => string,
    getChildren: (item: T) => T[] | undefined,
    setChildren: (item: T, children: T[]) => T
  ): T[] {
    return items
      .map((item) => {
        const children = getChildren(item) ? MultiLevelListUtils.filterTree(getChildren(item)!, search, getLabel, getChildren, setChildren) : [];
        const match = getLabel(item).toLowerCase().includes(search.toLowerCase());
        if (match || children.length > 0) {
          return setChildren(item, children);
        }
        return null;
      })
      .filter(Boolean) as T[];
  }

  /**
   * Get highlighted label for search matches (returns JSX.Element or string)
   * This is a direct move of GetHighlightedLabel utility
   */
//   static getHighlightedLabel(label: string, search: string): string | React.ReactNode {
//     if (!search) return label;
//     const regex = new RegExp(`(${search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")})`, 'gi');
//     const parts = label.split(regex);
//     if (parts.length === 1) return label;
//     return (
//       <React.Fragment>
//         {parts.map((part: string, i: number) =>
//           regex.test(part) ? <mark key={i}>{part}</mark> : part
//         )}
//       </React.Fragment>
//     );
//   }
}
