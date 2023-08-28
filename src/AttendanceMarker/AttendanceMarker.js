// AttendanceMarker.js

import './AttendanceMarker.css';
import ExtractedContent from './ExtractedContent';

function AttendanceMarker({ attendance, students, markAttendance, removeStudent }) {
  return (
    <div className="attendance-marker">
      <h2>Attendance Marker</h2>
      <p>Attendance for the selected date:</p>
      <ul>
        {students.map((student) => (
          <li key={student}>
            {student}: {attendance && attendance[student] ? 'Present' : 'Absent'}
            <ul>
              <li>
                <strong>Attendance Status:</strong>{' '}
                {attendance && attendance[student] ? 'Present' : 'Absent'}
              </li>
              <li>
                <strong>Class List:</strong>
                <ExtractedContent
                  student={student}
                  attendance={attendance}
                  markAttendance={markAttendance}
                  removeStudent={removeStudent}
                />
              </li>
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AttendanceMarker;
