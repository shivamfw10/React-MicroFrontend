import React from 'react';

export function createAccordionRenderItem<T>({
  getId,
  getLabel,
  getChildren,
  isChecked,
  onCheckboxChange,
  onExpandToggle,
  search,
  getHighlightedLabel,
}: {
  getId: (item: T) => string;
  getLabel: (item: T) => string;
  getChildren: (item: T) => T[] | undefined;
  isChecked: (item: T) => boolean;
  onCheckboxChange: (item: T) => void;
  onExpandToggle: (id: string) => void;
  search: string;
  getHighlightedLabel: (label: string, search?: string) => React.ReactNode;
}) {
  return (item: T, isTopLevel: boolean) => {
    const id = getId(item);
    const checked = isChecked(item);
    const children = getChildren(item);
    const hasChildren = !!children?.length;
    const label = getLabel(item);
    const isMatch = search && label.toLowerCase().includes(search.toLowerCase());
    const labelNode = getHighlightedLabel(label, search);
    return hasChildren ? (
      <button
        className={`list-accordion-row${isMatch ? ' matched-row' : ''}`}
        onClick={e => {
          if ((e.target as HTMLElement).tagName !== 'INPUT') {
            onExpandToggle(id);
          }
        }}
        aria-expanded={children && children.some(child => getId(child) === id)}
        type="button"
      >
        <span className="accordion-icon" aria-hidden="true">
          {/* The expand/collapse icon will be handled by parent state */}
          {/* You may want to pass expandedIds to this utility if you want to show the correct icon */}
        </span>
        {!isTopLevel && (
          <input
            type="checkbox"
            className="list-accordion-checkbox"
            checked={checked}
            onChange={e => {
              e.stopPropagation();
              onCheckboxChange(item);
            }}
            onClick={e => e.stopPropagation()}
          />
        )}
        <span>{labelNode}</span>
      </button>
    ) : (
      <div className={`list-accordion-row no-children${isMatch ? ' matched-row' : ''}`}>
        {!isTopLevel && (
          <input
            type="checkbox"
            className="list-accordion-checkbox"
            checked={checked}
            onChange={() => onCheckboxChange(item)}
            onClick={e => e.stopPropagation()}
          />
        )}
        {labelNode}
      </div>
    );
  };
}
