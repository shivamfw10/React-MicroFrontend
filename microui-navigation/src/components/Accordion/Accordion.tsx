import './Accordion.css';

import { AccordionProp } from '../../model/AccordionProp';
import { useState } from 'react';

const Accordion = ({ title, icon, children, collapsed, onToggle }:AccordionProp) => {
  const [open, setOpen] = useState(false);
  const handleToggle = () => {
    setOpen(prev => {
      const newOpen = !prev;
      if (onToggle) onToggle(newOpen);
      return newOpen;
    });
  };
  return (
    <div className="accordion">
      <button
        className="accordion-header"
        onClick={handleToggle}
        aria-expanded={open}
        type="button"
      >
        {icon && <span className="accordion-icon">{icon}</span>}
        {!collapsed && <span>{title}</span>}
        {!collapsed && <span className="accordion-arrow">{open ? '▲' : '▼'}</span>}
      </button>
      <div className={`accordion-body${open ? ' open' : ''}`}>{open && children}</div>
    </div>
  );
};

export default Accordion;
