import TextSearch from "../Filters/TextSearch";
import TypeSearch from "../Filters/TypeSearch";
import YearSearch from "../Filters/YearSearch";

function FilterGroup() {
  return (
    <div>
      <TextSearch />
      <YearSearch />
      <TypeSearch />
    </div>
  );
}

export default FilterGroup;
