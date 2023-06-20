import "./style.css";

const CATEGORIES = ["구미", "여의도", "가전"];

export function ProductFilter({ onFilterChange }) {
  return (
    <div class="filter-wrapper">
      {CATEGORIES.map((category) => {
        return (
          <button
            class="filter-button"
            onClick={() => {
              onFilterChange(category);
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
}
