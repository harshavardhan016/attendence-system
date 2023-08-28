// ClassList.js (new code)
import React from 'react';
import './ClassList.css';

function ClassList({ attendance, markAttendance, students, addStudent, removeStudent }) {
  return (
    <div className="class-list">
      <h2>Class List</h2>
      <ul>
        {students.map((student) => (
          <li key={student} className={attendance?.[student] ? 'present' : 'absent'}>
            <span>{student}</span>
            <div className="buttons">
              <button onClick={() => markAttendance(student)}>Present</button>
              <button onClick={() => removeStudent(student)}>Remove</button>
            </div>
          </li>
        ))}
      </ul>
      <div className="add-student">
        <input type="text" placeholder="New Student Name" id="newStudentName" />
        <button onClick={() => addStudent(document.getElementById('newStudentName').value)}>Add Student</button>
      </div>
    </div>
  );
}

export default ClassList;

