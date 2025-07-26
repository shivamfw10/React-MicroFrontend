import './Dropdown.css';

import { DropdownProp } from '../../model/DropdownProp';

const Dropdown = ({ label, options }:DropdownProp) => (
  <div className="dropdown" style={{ marginBottom: 0 }}>
    <label>{label}</label>
    <select style={{ marginBottom: 0 }}>
      {options.map(opt => (
        <option key={opt}>{opt}</option>
      ))}
    </select>
  </div>
);

export default Dropdown;
