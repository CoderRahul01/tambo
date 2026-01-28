import { Search } from "lucide-react";
import React from "react";
import { z } from "zod";
import "../styles/components.css";

export const SearchInputSchema = z.object({
  query: z
    .string()
    .describe("The natural language search query entered by the user"),
  placeholder: z
    .string()
    .optional()
    .describe("Hint text to display in the input"),
  autoFocus: z
    .boolean()
    .optional()
    .describe("Whether the input should be focused automatically"),
});

export type SearchInputProps = z.infer<typeof SearchInputSchema> & {
  onSearch?: (query: string) => void;
};

/**
 * SearchInput component - A sleek search input for semantic queries.
*/

export const SearchInput: React.FC<SearchInputProps> = ({
  query,
  placeholder = "Search for anything...",
  autoFocus = false,
  onSearch,
}) => {
  const [value, setValue] = React.useState(query || "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (onSearch && value.trim()) {
      onSearch(value);
    }
  };

  return (
    <div className="search-input-container">
      <form onSubmit={handleSubmit} className="search-input-form">
        <div className="search-input-icon">
          <Search size={20} />
        </div>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="search-input-field"
        />
        <button type="submit" className="search-input-button">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchInput;
