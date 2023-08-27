// components/AttendanceMarker.js

import React from 'react';
import './AttendanceMarker.css';

function AttendanceMarker({ attendance }) {
  return (
    <div className="attendance-marker">
      <h2>Attendance Marker</h2>
      <p>Attendance for the selected date:</p>
      <ul>
        {attendance &&
          Object.entries(attendance).map(([studentId, present]) => (
            <li key={studentId}>{present ? 'Present' : 'Absent'}</li>
          ))}
      </ul>
    </div>
  );
}

export default AttendanceMarker;
