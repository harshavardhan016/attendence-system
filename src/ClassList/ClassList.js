// components/ClassList.js
import React from 'react';
import './ClassList.css';


function ClassList({ attendance, markAttendance }) {
  const students = ['Student A', 'Student B', 'Student C', 'Student D'];

  return (
    <div className="class-list">
      <h2>Class List</h2>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student}{' '}
            <button onClick={() => markAttendance(index)}>
              {attendance?.[index] ? 'Present' : 'Absent'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClassList;
