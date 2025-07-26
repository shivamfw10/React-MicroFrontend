import React from 'react';
import { SelectedFilterChipsProps } from '../../model/SelectedFilterChips.types';

const SelectedFilterChips = <T,>({
  items,
  getKey,
  getLabel,
  onRemove,
  chipClassName = 'selected-filters-panel-chip',
  chipRemoveClassName = 'selected-filters-panel-chip-remove',
}: SelectedFilterChipsProps<T>) => (
  <div className="selected-filters-panel-chips selected-filters-panel-chips-scrollable">
    {items.map((item) => (
      <span
        key={getKey(item)}
        className={chipClassName}
        title={getLabel(item)}
      >
        {getLabel(item)}
        {onRemove && (
          <button
            className={chipRemoveClassName}
            aria-label={`Remove ${getLabel(item)}`}
            onClick={() => onRemove(item)}
          >
            ×
          </button>
        )}
      </span>
    ))}
  </div>
);

export default SelectedFilterChips;
