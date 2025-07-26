import { createAccordionRenderItem } from '../helper/createAccordionRenderItem';
import { useEffect, useState } from 'react';
import { getExpandedIdsForSearch } from '../helper/getExpandedIdsForSearch';
import { filterTree } from '../helper/filterTree';

import type { GeographyItemProp } from "../model/GeographyItemProp";
import type { GeographyProps } from "../model/GeographyProps";
import { GeographyMockData } from "../mock/GeographyMockData";
import GetHighlightedLabel from '../helper/GetHighlightedLabel';
import ListAccordion from "./ListAccordion/ListAccordion";
import SearchInput from "./SearchInput/SearchInput";
import { MultiLevelListUtils } from '../helper/multiLevelListUtils';


const Geography = ({ collapsed, selected, setSelected }: GeographyProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState("");
  const [expandedIds, setExpandedIds] = useState<string[]>([]);

  // Update expandedIds when search changes
  useEffect(() => {
    if (search) {
      setExpandedIds(
        getExpandedIdsForSearch(
          GeographyMockData,
          search,
          (item) => item.name,
          (item) => item.children ?? [],
          (item) => item.id
        )
      );
    }
  }, [search]);

  const handleAccordionChange = (open: boolean) => {
    setIsOpen(open);
  };

  // Handler for checkbox change using utility
  const handleCheckboxChange = (item: GeographyItemProp) => {
    setSelected(MultiLevelListUtils.toggleSelection(selected, item, (i) => i.id));
  };

  // Handler for expand/collapse
  const handleExpandToggle = (id: string) => {
    setExpandedIds(prev => prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]);
  };

  // Use utility for renderItem
  const renderItem = createAccordionRenderItem<GeographyItemProp>({
    getId: (item) => item.id,
    getLabel: (item) => item.name,
    getChildren: (item) => item.children ?? [],
    isChecked: (item) => selected.some((s) => s.id === item.id),
    onCheckboxChange: handleCheckboxChange,
    onExpandToggle: handleExpandToggle,
    search,
    getHighlightedLabel: GetHighlightedLabel,
  });

  // Use shared filterTree utility
  const filteredData = search
    ? filterTree(
        GeographyMockData,
        search,
        (item) => item.name,
        (item) => item.children ?? [],
        (item, children) => ({ ...item, children })
      )
    : GeographyMockData;

  return (
    <ListAccordion
      title="Geography"
      icon="🌎"
      items={filteredData}
      collapsed={collapsed}
      getId={(item: GeographyItemProp) => item.id}
      getLabel={(item: GeographyItemProp) => item.name}
      getChildren={(item: GeographyItemProp) => item.children}
      onAccordionChange={handleAccordionChange}
      forceOpenIndexes={expandedIds}
      renderHeader={
        isOpen && !collapsed ? (
          <SearchInput
            value={search}
            onChange={setSearch}
            placeholder="Search by geography"
            className="search-input-custom"
            style={{ width: '100%' }}
          />
        ) : null
      }
      renderItem={renderItem}
    />
  );
};

export default Geography;
