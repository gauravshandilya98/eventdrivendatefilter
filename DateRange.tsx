// src/DatePicker.tsx
import React, { ChangeEvent } from 'react';

interface DatePickerProps {
  onDateChange: (date: string) => void; // Callback prop to notify parent
}

const DatePicker: React.FC<DatePickerProps> = ({ onDateChange }) => {
  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const selectedDate = event.target.value;
    onDateChange(selectedDate); // Notify parent with the selected date
  };

  return (
    <div>
      <h3>Select a Date</h3>
      <input type="date" onChange={handleDateChange} />
    </div>
  );
};

export default DatePicker;