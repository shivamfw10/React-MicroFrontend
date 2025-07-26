import './SearchInput.css';

import React from "react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}

const SearchInput = ({ value, onChange, placeholder, className = '', style }:SearchInputProps) => (
  <input
    type="text"
    className={`side-nav-section-search search-input-custom ${className}`}
    placeholder={placeholder}
    value={value}
    onChange={e => onChange(e.target.value)}
    style={style}
  />
);

export default SearchInput;
