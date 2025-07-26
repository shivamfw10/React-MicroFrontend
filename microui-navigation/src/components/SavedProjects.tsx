import React, { useState } from "react";

import ListAccordion from "./ListAccordion/ListAccordion";
import SearchInput from "./SearchInput/SearchInput";

interface SavedProjectsProps {
  collapsed: boolean;
}

const SavedProjects: React.FC<SavedProjectsProps> = ({ collapsed }) => {
  const [search, setSearch] = useState("");
  const items = ["Search 1", "Search 2"];
  const filteredItems = search
    ? items.filter((i) => i.toLowerCase().includes(search.toLowerCase()))
    : items;

  return (
    <ListAccordion
      title="Saved Projects & Filters"
      icon="💾"
      items={filteredItems}
      collapsed={collapsed}
      getId={(item: string) => item}
      getLabel={(item: string) => item}
      getChildren={() => undefined}
      renderItem={(item: string) => (
        <div className="list-accordion-row no-children">{item}</div>
      )}
      renderHeader={
        <SearchInput
          value={search}
          onChange={setSearch}
          placeholder="Search Saved Projects..."
          style={{ width: "100%" }}
        />
      }
    />
  );
};

export default SavedProjects;
