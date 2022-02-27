import TextSearch from "../Filters/TextSearch";
import TypeSearch from "../Filters/TypeSearch";
import YearSearch from "../Filters/YearSearch";
import "./filterGroup.scss";

function FilterGroup() {
  return (
    <div className="filterGroup">
      <TextSearch />
      <YearSearch />
      <TypeSearch />
    </div>
  );
}

export default FilterGroup;
