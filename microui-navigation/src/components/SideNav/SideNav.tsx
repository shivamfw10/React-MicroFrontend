import './SideNav.css';

import Category from '../Category';
import type { CategoryItemProp } from '../../model/CategoryItemProp';
import Filter from '../Filter';
import Geography from '../Geography';
import type { GeographyItemProp } from '../../model/GeographyItemProp';
import SavedProjects from '../SavedProjects';
import SelectedFiltersPanel from '../SelectedFilterPanel/SelectedFiltersPanel';
import { useState } from 'react';
import ExtractData from '../ExtractData';

interface SideNavProps {
  collapsed?: boolean;
  onCollapsedChange?: (collapsed: boolean) => void;
}

const SideNav = ({ collapsed: externalCollapsed, onCollapsedChange }: SideNavProps) => {
  const [internalCollapsed, setInternalCollapsed] = useState(false);
  const collapsed = externalCollapsed ?? internalCollapsed;
  
  const handleToggleCollapsed = () => {
    if (onCollapsedChange) {
      onCollapsedChange(!collapsed);
    } else {
      setInternalCollapsed(!collapsed);
    }
  };
  const [selectedCategories, setSelectedCategories] = useState<CategoryItemProp[]>([]);
  const [selectedGeographies, setSelectedGeographies] = useState<GeographyItemProp[]>([]);

  const handleReset = () => {
    setSelectedCategories([]);
    setSelectedGeographies([]);
  };
  // Update handleGo to show labels/names
  const handleGo = () => {
    alert(
      `Go clicked!\nCategories: ${selectedCategories.map(c => c.label).join(', ')}\nGeographies: ${selectedGeographies.map(g => g.name).join(', ')}`
    );
  };

  return (
    <nav className={`side-nav${collapsed ? ' collapsed' : ''}`}>
      <div className="side-nav-header">
        <img src="/vite.svg" alt="Logo" className="side-nav-logo" />
        {!collapsed && <span className="side-nav-title">Passport Demo</span>}
      </div>
      <div className="side-nav-header-divider" />
      <div className="side-nav-scrollable-content">
        {/* Search Bar */}
        {!collapsed && (
          <div className="side-nav-search">
            <input type="text" placeholder="Search..." className="search-input-custom" />
          </div>
        )}
        {/* Selected Component */}
        <SelectedFiltersPanel
          selectedCategories={selectedCategories}
          selectedGeographies={selectedGeographies}
          onReset={handleReset}
          onGo={handleGo}
          onRemoveCategory={(cat) => setSelectedCategories(selectedCategories.filter(c => c.label !== cat.label))}
          onRemoveGeography={(geo) => setSelectedGeographies(selectedGeographies.filter(g => g.name !== geo.name))}
        />
        {/* Filter Component */}
        <Filter collapsed={collapsed} />
        {/* Category Component */}
        <Category
          collapsed={collapsed}
          selected={selectedCategories}
          setSelected={(items) => setSelectedCategories(items)}
        />
        {/* Geography Component */}
        <Geography
          collapsed={collapsed}
          selected={selectedGeographies}
          setSelected={(items) => setSelectedGeographies(items)}
        />
        {/* Saved Projects Component */}
        <SavedProjects collapsed={collapsed} />
         {/* Extract Data Component */}
        <ExtractData collapsed={collapsed} />  
      </div>
      {/* Footer */}
      <div className="side-nav-footer">
        {!collapsed ? (
          <div className="footer-left">
            <span className="footer-icon">🏢</span>
          </div>
        ) : null}
        <div className={collapsed ? "footer-vertical" : "footer-right"}>
          <span className="footer-icon">⚙️</span>
          <button
            className="footer-icon"
            type="button"
            aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
            onClick={handleToggleCollapsed}
          >
            ⏪
          </button>
        </div>
      </div>
    </nav>
  );
};

export default SideNav;
