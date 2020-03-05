import React, { useState } from 'react';


const GroupForm = () => {
  const [state, setState] = useState({
    name: '',
    description: '',
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;
    if (name === 'name') {
      setState({
        name: value,
        description: state.description,
      });
    }
    if (name === 'description') {
      setState({
        name: state.title,
        description: value,
      });
    }
  };

  return (
    <form className="add-group d-flex flex-column w-100">
      <div className="d-flex align-items-center">
        <input placeholder="Name" onChange={handleChange} value={state.name} name="name" className="group-input w-25" />
        <input placeholder="Add New Group..." onChange={handleChange} value={state.description} name="description" className="group-input w-75" />
      </div>
    </form>
  );
};

export default GroupForm;
