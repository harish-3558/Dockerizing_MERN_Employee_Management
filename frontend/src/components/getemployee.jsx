import { useEffect, useState } from 'react';

const GetEmployee = ({ refreshToken }) => {
  const [emprecords, setEmpRecords] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      setIsLoading(true);
      setError('');

      try {
        const response = await fetch('http://localhost:5000/employees/get-employees');
        if (!response.ok) {
          throw new Error('We could not load the directory. Please try again.');
        }

        const data = await response.json();
        setEmpRecords(data);
      } catch (fetchError) {
        console.error('Error fetching employee records:', fetchError);
        setError(
          fetchError instanceof TypeError
            ? 'The directory is unavailable right now. Check your connection and try again.'
            : fetchError instanceof Error
              ? fetchError.message
              : 'Something went wrong while loading the directory.'
        );
      } finally {
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, [refreshToken]);

  return (
    <div className="directory-content">
      <div className="directory-summary">
        <span>TEAM MEMBERS</span>
        <span className="member-count">
          {isLoading ? '…' : error ? '—' : String(emprecords.length).padStart(2, '0')}
        </span>
      </div>

      {isLoading ? (
        <p className="directory-state">Gathering your team…</p>
      ) : error ? (
        <p className="directory-state error-state" role="alert">{error}</p>
      ) : emprecords.length === 0 ? (
        <div className="empty-state">
          <span className="empty-illustration" aria-hidden="true">✳</span>
          <h3>Your team starts here</h3>
          <p>Add your first teammate and they’ll appear here.</p>
        </div>
      ) : (
        <div className="employee-list">
          {emprecords.map((record) => {
            const initials = record.name
              .split(/\s+/)
              .filter(Boolean)
              .slice(0, 2)
              .map((part) => part[0])
              .join('')
              .toUpperCase();

            return (
              <article className="employee-card" key={record._id}>
                <span className="employee-avatar" aria-hidden="true">{initials}</span>
                <div className="employee-info">
                  <h3>{record.name}</h3>
                  <p>{record.department}</p>
                </div>
                <span className="employee-status">
                  <span className="status-dot" />
                  Team member
                </span>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default GetEmployee;
