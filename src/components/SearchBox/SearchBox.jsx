import { React, useId } from 'react';
import clsx from 'clsx';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/filtersSlice';

const SearchBox = () => {
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  const selectNameFilter = value => {
    dispatch(changeFilter(value));
  };

  const searchName = useId();

  return (
    <div className={clsx(css.searchWrapper)}>
      <label htmlFor={searchName} className={clsx(css.label)}>
        Find contacts by name
        <input
          className={clsx(css.input)}
          type="text"
          id={searchName}
          value={filter}
          onChange={event => selectNameFilter(event.target.value)}
        />
      </label>
    </div>
  );
};

export default SearchBox;
