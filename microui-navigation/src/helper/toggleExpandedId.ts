// Utility to toggle an ID in an array (expand/collapse logic)
export function toggleExpandedId<T extends string | number>(ids: T[], id: T): T[] {
  return ids.includes(id) ? ids.filter(i => i !== id) : [...ids, id];
}
