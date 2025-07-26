// Utility to highlight the matched search term in label
const GetHighlightedLabel = (label: string, searchTerm?: string) => {
  if (!searchTerm) return label;
  const lowerLabel = label.toLowerCase();
  const lowerSearch = searchTerm.toLowerCase();
  const index = lowerLabel.indexOf(lowerSearch);
  if (index === -1) return label;
  return (
    <span style={{display: 'inline'}}>
      {label.slice(0, index)}
      <span className="search-highlight">{label.slice(index, index + searchTerm.length)}</span>
      {label.slice(index + searchTerm.length)}
    </span>
  );
};

export default GetHighlightedLabel;
