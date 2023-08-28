// App.js
import React, { useState } from 'react';
import './App.css';
import ClassList from './ClassList/ClassList';
import DatePicker from './DatePicker/DatePicker';
import AttendanceMarker from './AttendanceMarker/AttendanceMarker';
function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [attendance, setAttendance] = useState({});
  const [students, setStudents] = useState([
    'Student A',
    'Student B',
    'Student C',
    'Student D',
  ]);

  const handleDateChange = (date) => {
    console.log('handleDateChange called with date:', date);
    setSelectedDate(date);
  };

  const markAttendance = (studentId) => {
    console.log('markAttendance called for studentId:', studentId);
    setAttendance((prevAttendance) => {
      const updatedAttendance = {
        ...prevAttendance,
        [selectedDate.toISOString()]: {
          ...prevAttendance[selectedDate.toISOString()],
          [studentId]:
            !prevAttendance[selectedDate.toISOString()]?.[studentId] || true,
        },
      };
      console.log('Updated attendance:', updatedAttendance);
      return updatedAttendance;
    });
  };
  

  const addStudent = (studentName) => {
    console.log('addStudent called with studentName:', studentName);
    setStudents([...students, studentName]);
  };

  const removeStudent = (studentIndex) => {
    console.log('removeStudent called for studentIndex:', studentIndex);
    const updatedStudents = students.filter((_, index) => index !== studentIndex);
    setStudents(updatedStudents);
  };

  console.log('App rendering...');
  return (
    <div className="App">
      <h1>Attendance System</h1>
      <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      <ClassList
        attendance={attendance[selectedDate.toISOString()]}
        markAttendance={markAttendance}
        students={students}
        addStudent={addStudent}
        removeStudent={removeStudent}
      />
      <AttendanceMarker
        attendance={attendance[selectedDate.toISOString()]}
        students={students}
      />
    </div>
  );
}

export default App;
