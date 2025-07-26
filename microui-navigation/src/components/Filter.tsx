import { FilterCategoryGroups, FilterDataTypes } from "../mock/FilterMockData";

import Accordion from "./Accordion/Accordion";
import Dropdown from "./Dropdown/Dropdown";

interface FilterProps {
  collapsed: boolean;
}

const Filter = ({ collapsed }:FilterProps) => {
  return (
    <Accordion title="Filter" icon="🔍" collapsed={collapsed}>
      {!collapsed && (
        <>
          <Dropdown label="" options={FilterCategoryGroups} />
          <Dropdown label="" options={FilterDataTypes} />
        </>
      )}
    </Accordion>
  );
};

export default Filter;
