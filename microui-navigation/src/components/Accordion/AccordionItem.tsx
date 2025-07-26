import '../Accordion/Accordion.css';

import { AccordionItemProps } from '../../model/AccordionItemProp';
import GetHighlightedLabel from '../../helper/GetHighlightedLabel';

const AccordionItem = <T,>({
  item,
  isTopLevel,
  openIndexes,
  handleToggle,
  getId,
  getLabel,
  getChildren,
  renderItem,
  searchTerm
}: Readonly<AccordionItemProps<T>>) => {
  const id = getId(item);
  const children = getChildren(item);
  const isOpen = openIndexes.includes(id);
  const hasChildren = !!children?.length;
  const label = getLabel(item);
  const labelNode = GetHighlightedLabel(label, searchTerm);
  // Check if this node matches the search term
  const isMatch = searchTerm && label.toLowerCase().includes(searchTerm.toLowerCase());

  const content = (
    <div
      className={`list-accordion-row${!hasChildren ? ' no-children' : ''}${isMatch ? ' matched-row' : ''}`}
      role={hasChildren ? undefined : 'listitem'}
    >
      <span className="accordion-icon" aria-hidden="true">
        {hasChildren ? (isOpen ? "▼" : "▶") : <span style={{ visibility: 'hidden' }}>▶</span>}
      </span>
      {!isTopLevel && <input type="checkbox" className="list-accordion-checkbox" />}
      <span>{labelNode}</span>
    </div>
  );

  return (
    <li key={id} className="list-accordion-item">
      {renderItem ? renderItem(item, isTopLevel) : content}
      {hasChildren && isOpen && (
        <ul>
          {children.map(child => (
            <AccordionItem
              key={getId(child)}
              item={child}
              isTopLevel={false}
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
      )}
    </li>
  );
};

export default AccordionItem;
