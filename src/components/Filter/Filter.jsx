import { useSelector, useDispatch } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { getFilter } from 'redux/selectors';

import { FilterLabel, FilterInput } from './Filter.styled';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = evt => {
    dispatch(setFilter(evt.currentTarget.value));
  };

  return (
    <FilterLabel htmlFor="filter">
      Find contacts by name
      <FilterInput
        type="text"
        name="filter"
        value={filter}
        onChange={changeFilter}
        placeholder="Put the name for search"
      />
    </FilterLabel>
  );
};
