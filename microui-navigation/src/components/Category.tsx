
import { toggleExpandedId } from '../helper/toggleExpandedId';
import { filterTree } from '../helper/filterTree';
import type { CategoryItemProp } from "../model/CategoryItemProp";
import { CategoryMockData } from "../mock/CategoryMockData";
import GetHighlightedLabel from "../helper/GetHighlightedLabel";
import ListAccordion from "./ListAccordion/ListAccordion";
import SearchInput from "./SearchInput/SearchInput";
import { useEffect, useState } from "react";
import { getExpandedIdsForSearch } from '../helper/getExpandedIdsForSearch';
import { createAccordionRenderItem } from '../helper/createAccordionRenderItem';

import type { CategoryProps } from "../model/CategoryProps";
import { MultiLevelListUtils } from '../helper/multiLevelListUtils';

const Category = ({ collapsed, onAccordionExpand, selected, setSelected }: CategoryProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  // Update expandedIds when search changes
  useEffect(() => {
    if (search) {
      setExpandedIds(
        getExpandedIdsForSearch(
          CategoryMockData,
          search,
          (item) => item.label,
          (item) => item.industries ?? [],
          (item) => item.pagePkId
        )
      );
    }
  }, [search]);

  const handleAccordionChange = (open: boolean) => {
    setIsOpen(open);
    if (onAccordionExpand) onAccordionExpand(open);
  };

  // Handler for expand/collapse using utility
  const handleExpandToggle = (id: string) => {
    setExpandedIds(prev => toggleExpandedId(prev, id));
  };

  // Use utility for renderItem, directly using toggleSelection
  const renderItem = createAccordionRenderItem<CategoryItemProp>({
    getId: (item) => item.pagePkId,
    getLabel: (item) => item.label,
    getChildren: (item) => item.industries ?? [],
    isChecked: (item) => selected.some((s) => s.pagePkId === item.pagePkId),
    onCheckboxChange: (item) => setSelected(MultiLevelListUtils.toggleSelection(selected, item, (i) => i.pagePkId)),
    onExpandToggle: handleExpandToggle,
    search,
    getHighlightedLabel: GetHighlightedLabel,
  });

  // Use shared filterTree utility
  const filteredData = search
    ? filterTree(
        CategoryMockData,
        search,
        (item) => item.label,
        (item) => item.industries ?? [],
        (item, children) => ({ ...item, industries: children })
      )
    : CategoryMockData;

  return (
    <ListAccordion
      title="Category Selection"
      icon="📂"
      items={filteredData}
      collapsed={collapsed}
      getId={(item) => item.pagePkId}
      getLabel={(item) => item.label}
      getChildren={(item) => item.industries ?? undefined}
      onAccordionChange={handleAccordionChange}
      forceOpenIndexes={expandedIds}
      renderHeader={
        isOpen && !collapsed ? (
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search by category"
            style={{ width: '100%' }}
          />
        ) : null
      }
      renderItem={renderItem}
    />
  );
};

export default Category;
