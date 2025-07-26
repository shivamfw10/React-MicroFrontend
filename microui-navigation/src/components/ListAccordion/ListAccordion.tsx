import './ListAccordion.css';

import { getSearchTermFromHeader, renderAccordionItems, useAccordionState } from '../../helper/ListAccordion.helpers';
import { useEffect, useState } from 'react';

import Accordion from '../Accordion/Accordion';
import { GenericListAccordionProps } from '../../model/ListAccordion.types';

const ListAccordion = <T,>({
  title,
  icon,
  items,
  collapsed,
  getId,
  getLabel,
  getChildren,
  onAccordionChange,
  renderItem,
  renderHeader,
  forceOpenIndexes = [], // NEW
}: GenericListAccordionProps<T>) => {
  const { openIndexes, handleToggle } = useAccordionState();
  const [isOpen, setIsOpen] = useState(false);

  // Merge openIndexes (user toggles) with forceOpenIndexes (from search)
  const mergedOpenIndexes = Array.from(new Set([...openIndexes, ...forceOpenIndexes]));

  // Watch for accordion open/close and notify parent
  useEffect(() => {
    if (onAccordionChange) onAccordionChange(isOpen);
  }, [isOpen, onAccordionChange]);

  // Listen for Accordion open/close
  const handleAccordionToggle = (open: boolean) => {
    setIsOpen(open);
  };

  return (
    <Accordion title={title} icon={icon} collapsed={collapsed} onToggle={handleAccordionToggle}>
      {!collapsed && renderHeader}
      {!collapsed && renderAccordionItems(
        items,
        true,
        mergedOpenIndexes,
        handleToggle,
        getId,
        getLabel,
        getChildren,
        renderItem,
        getSearchTermFromHeader(renderHeader)
      )}
    </Accordion>
  );
};

export default ListAccordion;
