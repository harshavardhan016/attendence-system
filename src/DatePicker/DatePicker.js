import React from 'react';
import './DatePicker.css';

function DatePicker({ selectedDate, onDateChange }) {
  return (
    <div className="date-picker-container">
      <h2 className="date-picker-heading">Date Picker</h2> {/* Apply the class here */}
      <input
        type="date"
        className="date-picker-input"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={(e) => onDateChange(new Date(e.target.value))}
      />
      <button className="date-picker-button" onClick={() => alert('Date picked')}>
        Pick Date
      </button>
    </div>
  );
}

export default DatePicker;
