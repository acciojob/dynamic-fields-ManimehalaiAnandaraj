
import React, { useState } from 'react';

const App = () => {
  const [fields, setFields] = useState([{ id: Date.now(), name: '', age: '' }]);

  const handleAddField = () => {
    setFields([...fields, { id: Date.now(), name: '', age: '' }]);
  };

  const handleRemoveField = (id) => {
    if (fields.length > 1) {
      setFields(fields.filter(field => field.id !== id));
    }
  };

  const handleInputChange = (id, event) => {
    const { name, value } = event.target;
    setFields(fields.map(field => 
      field.id === id ? { ...field, [name]: value } : field
    ));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = fields.map(({ id, ...rest }) => rest);
    console.log(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.id} style={{ marginBottom: '10px' }}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={field.name}
            onChange={(e) => handleInputChange(field.id, e)}
            style={{ marginRight: '5px' }}
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            value={field.age}
            onChange={(e) => handleInputChange(field.id, e)}
            style={{ marginRight: '5px' }}
          />
          <button
            type="button"
            onClick={() => handleRemoveField(field.id)}
            disabled={fields.length === 1}
          >
            Remove
          </button>
        </div>
      ))}
      <button type="button" onClick={handleAddField} style={{ marginRight: '5px' }}>
        Add More
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default App;
