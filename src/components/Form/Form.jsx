import { useState } from 'react';

const Form = ({ onSubmit }) => {
  const [search, setSearch] = useState('');

  const handleChange = event => {
    const { value } = event.currentTarget;
    setSearch(value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (search === '') {
      alert(`enter movie for search`);
      return;
    }
    onSubmit(search);
    reset();
  };

  function reset() {
    setSearch('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input name="search" value={search} onChange={handleChange} type="text" />
      <button type="submit">Search</button>
    </form>
  );
};

export default Form;
