import React, { useState } from 'react';

const AddEmployee = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');

  const employeeSubmit = async (e) => {
    e.preventDefault();
    const employeeData = { name, department };
    try {
      const response = await fetch('http://localhost:5000/employees/add-employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(employeeData)
      });
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.error('Error adding employee:', error);
    }
  };

  return (
    <div>
      <form onSubmit={employeeSubmit}>
        <div className="forminput">
          <h3>Employee name</h3>
          <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="forminput">
          <h3>Department</h3>
          <input type="text" name="department" onChange={(e) => setDepartment(e.target.value)} />
        </div>
        <button type="submit">Add Employee</button>
      </form>
    </div>
  );
};

export default AddEmployee;