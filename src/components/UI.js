import React, { useState } from 'react';
import './UI.css';

export default function UI() {
  const [students, setStudents] = useState([
    { rollNumber: 1, name: 'Nitin Kumar', email: 'nk@gmail.com' },
    { rollNumber: 2, name: 'Nitin Kumar', email: 'nk@gmail.com' },
    { rollNumber: 3, name: 'Nitin Kumar', email: 'nk@gmail.com' },
    { rollNumber: 4, name: 'Nitin Kumar', email: 'nk@gmail.com' },
  ]);

  const handleMarkOut = (rollNumber) => {
    const updatedStudents = students.filter(
      (student) => student.rollNumber !== rollNumber
    );
    setStudents(updatedStudents);
  };

  return (
    <div className="Container">
      <div className="header">
        <h3 style={{ flex: 0.8 }}>Roll Number</h3>
        <h3>Name</h3>
        <h3>Email</h3>
        <h3>Action</h3>
      </div>
      {students.map((student) => (
        <div key={student.rollNumber} className="row">
          <p style={{ flex: 0.5, color: 'black' }}>{student.rollNumber}</p>
          <p>{student.name}</p>
          <p>{student.email}</p>
          <button
            onClick={() => handleMarkOut(student.rollNumber)}
            style={{
              backgroundColor: '#ff4d4d',
              color: 'white',
              padding: '6px 12px',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
            }}
          >
            Mark Out
          </button>
        </div>
      ))}
    </div>
  );
}
