import { React, useId, useState } from 'react';
import clsx from 'clsx';
import css from './SearchBox.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../../redux/filterSlice';

const SearchBox = () => {
  const users = useSelector(state => state.contacts.contacts);
  const filter = useSelector(state => state.filter.filter);
  const dispatch = useDispatch();

  // const [toFilter, setToFilter] = useState('');

  // const filteredContacts = users.filter(
  //   cont =>
  //     cont.name.toLowerCase().includes(filter.toLowerCase()) ||
  //     cont.number.toLowerCase().includes(filter.toLowerCase())
  // );

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
          onChange={event => dispatch(setFilter(event.target.value))}
        />
      </label>
    </div>
  );
};

export default SearchBox;
