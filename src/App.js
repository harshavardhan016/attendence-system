// App.js
import React, { useState } from 'react';
import './App.css';
import ClassList from './ClassList/ClassList';
import DatePicker from './DatePicker/DatePicker';
import AttendanceMarker from './AttendanceMarker/AttendanceMarker';

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendance, setAttendance] = useState({});

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const markAttendance = (studentId) => {
    setAttendance((prevAttendance) => ({
      ...prevAttendance,
      [selectedDate.toISOString()]: {
        ...prevAttendance[selectedDate.toISOString()],
        [studentId]: !prevAttendance[selectedDate.toISOString()]?.[studentId] || true,
      },
    }));
  };

  return (
    <div className="App">
      <h1>Attendance System</h1>
      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      <ClassList attendance={attendance[selectedDate.toISOString()]} markAttendance={markAttendance} />
      <AttendanceMarker attendance={attendance[selectedDate.toISOString()]} />
    </div>
  );
}

export default App;
