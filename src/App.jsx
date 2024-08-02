import React, { useEffect, useState } from 'react';

const App = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/v1/employees');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const { rows } = await response.json(); 
        setEmployees(rows);
      } catch (error) {
        console.error('Error fetching employees:', error);
      }
    };

    fetchEmployees();
  }, []);

  return (
    <>
      <h1>Employees</h1>
      <ul>
        {employees.map((employee) => (
          <li key={employee.employeeid}>
            {employee.employeename} - {employee.isadmin ? 'Admin' : 'Not Admin'}
          </li>
        ))}
      </ul>
    </>
  );
};

export default App;
