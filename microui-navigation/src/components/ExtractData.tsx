import ListAccordion from "./ListAccordion/ListAccordion";
import React from "react";

interface ExtractDataProps {
  collapsed: boolean;
}

const ExtractData: React.FC<ExtractDataProps> = ({ collapsed }) => (
  <ListAccordion
    title="Extract Data"
    icon="📤"
    items={["Industries", "Ecommerce"]}
    collapsed={collapsed}
    getId={(item: string) => item}
    getLabel={(item: string) => item}
    getChildren={() => undefined}
    renderItem={(item: string) => (
      <div className="list-accordion-row no-children">{item}</div>
    )}
  />
);

export default ExtractData;
