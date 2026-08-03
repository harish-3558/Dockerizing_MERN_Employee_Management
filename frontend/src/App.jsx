import React from 'react';
import AddEmployee from './components/addemployee';
import GetEmployee from './components/getemployee';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <header className="app-header">
        <p className="eyebrow">Team manager</p>
        <h1>Employee Dashboard</h1>
        <p className="intro">Add new team members and review the current employee list.</p>
      </header>

      <main className="dashboard-grid">
        <section className="dashboard-panel">
          <h2>Add Employee</h2>
          <AddEmployee />
        </section>

        <section className="dashboard-panel">
          <h2>Employee Records</h2>
          <GetEmployee />
        </section>
      </main>
    </div>
  );
};

export default App;
