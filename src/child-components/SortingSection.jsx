import React from "react";
import Button from "../share-components/Button"
const SortingSection = ({ sortOrder, onChange, onClear }) => {
  return (
    <div className="flex gap-5 items-center">
      <div>
        <input
          type="radio"
          id="asc"
          name="sortOrder"
          value="asc"
          checked={sortOrder === "asc"}
          onChange={() => onChange("asc")}
        />
        <label htmlFor="asc">Ascending</label>
      </div>
      <div>
        <input
          type="radio"
          id="desc"
          name="sortOrder"
          value="desc"
          checked={sortOrder === "desc"}
          onChange={() => onChange("desc")}
        />
        <label htmlFor="desc">Descending</label>
      </div>
      <Button onClick={() => onClear()}>Clear</Button>
    </div>
  );
};

export default SortingSection;
