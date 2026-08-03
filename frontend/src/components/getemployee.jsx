import React, { useState,useEffect } from 'react';


const getemployee = () => {
    const [emprecords, setEmpRecords] = useState([]);

    const recordhandler = async () => {
        try {
            const response = await fetch('http://localhost:5000/employees/get-employees');
            const data = await response.json();
            console.log("check data", data);
            setEmpRecords(data);
        }
        catch (error) {
            console.error('Error fetching employee records:', error);
        }
    }
        useEffect(() => {
            recordhandler();
        }, []);
  return (
    <div>
        {emprecords.map((record) => (
            <div className="recordsection">
                <h3>Employee name: {record.name}</h3>
                <h3>Department: {record.department}</h3>
            </div>
        ))}
        
    </div>
  )
}

export default getemployee