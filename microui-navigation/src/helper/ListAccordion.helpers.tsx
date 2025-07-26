import { isValidElement, useState } from "react";

import AccordionItem from "../components/Accordion/AccordionItem";

// Custom hook to manage accordion open state
export const useAccordionState = () => {
  const [openIndexes, setOpenIndexes] = useState<string[]>([]);
  const handleToggle = (id: string) => {
    setOpenIndexes(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };
  return { openIndexes, handleToggle };
};

// Recursive renderer
export const renderAccordionItems = <T,>(
  items: T[] | undefined,
  isTopLevel: boolean,
  openIndexes: string[],
  handleToggle: (id: string) => void,
  getId: (item: T) => string,
  getLabel: (item: T) => string,
  getChildren: (item: T) => T[] | undefined,
  renderItem?: (item: T, isTopLevel: boolean) => React.ReactNode,
  searchTerm?: string
) => {
  if (!items?.length) return null;

  return (
    <ul className={isTopLevel ? "list-accordion-list" : undefined}>
      {items.map(item => (
        <AccordionItem
          key={getId(item)}
          item={item}
          isTopLevel={isTopLevel}
          openIndexes={openIndexes}
          handleToggle={handleToggle}
          getId={getId}
          getLabel={getLabel}
          getChildren={getChildren}
          renderItem={renderItem}
          searchTerm={searchTerm}
        />
      ))}
    </ul>
  );
};

// Helper to extract search term from renderHeader if it's a SearchInput
export const getSearchTermFromHeader = (renderHeader: React.ReactNode): string | undefined => {
  if (
    isValidElement(renderHeader) &&
    renderHeader.props &&
    typeof (renderHeader.props as { value?: unknown }).value === 'string'
  ) {
    return (renderHeader.props as { value: string }).value;
  }
  return undefined;
};
