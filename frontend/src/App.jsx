import { useState } from 'react';
import AddEmployee from './components/addemployee';
import GetEmployee from './components/getemployee';
import './App.css';

const App = () => {
  const [refreshToken, setRefreshToken] = useState(0);

  return (
    <main className="app">
      <header className="app-header">
        <p className="eyebrow">TEAM DIRECTORY</p>
        <h1>Employee Dashboard</h1>
        <p className="intro">Add and view your team members in one place.</p>
      </header>

      <div className="dashboard-grid">
        <section className="dashboard-panel" aria-labelledby="add-heading">
          <h2 id="add-heading">Add an employee</h2>
          <AddEmployee onEmployeeAdded={() => setRefreshToken((token) => token + 1)} />
        </section>

        <section className="dashboard-panel" aria-labelledby="records-heading">
          <div className="records-heading">
            <h2 id="records-heading">Employees</h2>
            <span className="member-count">Team list</span>
          </div>
          <GetEmployee refreshToken={refreshToken} />
        </section>
      </div>
    </main>
  );
};

export default App;
