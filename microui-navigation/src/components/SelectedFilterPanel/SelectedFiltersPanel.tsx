import './SelectedFiltersPanel.css';

import Accordion from "../Accordion/Accordion";
import SelectedFilterChips from "./SelectedFilterChips";
import { SelectedFilterPanelProp } from '../../model/SelectedFilterPanelProp';

const SelectedFiltersPanel = ({
  selectedCategories,
  selectedGeographies,
  onReset,
  onGo,
  onRemoveCategory,
  onRemoveGeography,
}:SelectedFilterPanelProp) => {
  const hasCat = selectedCategories.length > 0;
  const hasGeo = selectedGeographies.length > 0;
  if (!hasCat && !hasGeo) return null;

  // Helper functions
  // Utility functions for extracting keys and labels
  const getCategoryKey = (cat: { label: string }) => cat.label;
  const getCategoryLabel = (cat: { label: string }) => cat.label;
  const getGeographyKey = (geo: { name: string }) => geo.name;
  const getGeographyLabel = (geo: { name: string }) => geo.name;

  return (
    <>
      {(hasCat || hasGeo) && (
        <div className="selected-filters-panel-heading">
          Selected
        </div>
      )}
      {hasCat && (
        <Accordion
          title={`By category (${selectedCategories.length})`}
          icon={null}
          collapsed={false}
          onToggle={() => {}}
        >
          <SelectedFilterChips
            items={selectedCategories}
            getKey={getCategoryKey}
            getLabel={getCategoryLabel}
            onRemove={onRemoveCategory}
          />
        </Accordion>
      )}
      {hasGeo && (
        <Accordion
          title={`By geography (${selectedGeographies.length})`}
          icon={null}
          collapsed={false}
          onToggle={() => {}}
        >
          <SelectedFilterChips
            items={selectedGeographies}
            getKey={getGeographyKey}
            getLabel={getGeographyLabel}
            onRemove={onRemoveGeography}
          />
        </Accordion>
      )}
      {/* Button row: align Reset left, Go right */}
      <div className="selected-filters-panel-buttons">
        <button
          className="selected-filters-panel-reset"
          onClick={onReset}
        >
          Reset
        </button>
        <button
          className="selected-filters-panel-go"
          onClick={onGo}
        >
          Go
        </button>
      </div>
    </>
  );
};

export default SelectedFiltersPanel;
