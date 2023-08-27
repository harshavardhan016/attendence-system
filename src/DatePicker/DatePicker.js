// components/DatePicker.js
import React from 'react';
import './DatePicker.css';

function DatePicker({ selectedDate, onDateChange }) {
  return (
    <div className="date-picker">
      <h2>Date Picker</h2>
      <input
        type="date"
        value={selectedDate.toISOString().split('T')[0]}
        onChange={(e) => onDateChange(new Date(e.target.value))}
      />
    </div>
  );
}

export default DatePicker;
