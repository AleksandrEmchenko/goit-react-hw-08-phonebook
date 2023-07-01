import { useDispatch } from "react-redux";
import { ContentLab, FilterFild } from "./Filter.styled";
import { setFilter } from "redux/filterSlice";

function Filter() {
  const dispatch = useDispatch();

  return (
    <ContentLab>
      Find contacts by name
      <br />
      <FilterFild
        type="text"
        name="filter"
        onChange={(e) => {
          dispatch(setFilter(e.currentTarget.value));
        }}
      />
    </ContentLab>
  );
}
export default Filter;
