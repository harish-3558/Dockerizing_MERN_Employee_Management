import { useState } from 'react';

const AddEmployee = ({ onEmployeeAdded }) => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState(null);

  const employeeSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setMessage(null);

    try {
      const response = await fetch('http://localhost:5000/employees/add-employee', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name.trim(), department: department.trim() })
      });

      if (!response.ok) {
        throw new Error('We could not add this teammate. Please try again.');
      }

      await response.json();
      setName('');
      setDepartment('');
      setMessage({ type: 'success', text: 'Teammate added to your directory.' });
      onEmployeeAdded();
    } catch (error) {
      console.error('Error adding employee:', error);
      setMessage({
        type: 'error',
        text: error instanceof TypeError
          ? 'We could not reach the server. Check your connection and try again.'
          : error instanceof Error
            ? error.message
            : 'Something went wrong. Please try again.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form className="employee-form" onSubmit={employeeSubmit}>
      <div className="forminput">
        <label htmlFor="employee-name">Full name</label>
        <input
          id="employee-name"
          type="text"
          name="name"
          placeholder="e.g. Alex Morgan"
          autoComplete="name"
          value={name}
          onChange={(event) => setName(event.target.value)}
          required
        />
      </div>
      <div className="forminput">
        <label htmlFor="employee-department">Department</label>
        <input
          id="employee-department"
          type="text"
          name="department"
          placeholder="e.g. Product design"
          value={department}
          onChange={(event) => setDepartment(event.target.value)}
          required
        />
      </div>
      <button className="submit-button" type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Adding employee…' : 'Add employee'}
      </button>
      {message && (
        <p className={`form-message ${message.type}`} role="status">
          {message.text}
        </p>
      )}
    </form>
  );
};

export default AddEmployee;
