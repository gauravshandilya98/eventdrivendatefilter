
import React, { useState } from 'react';
import DatePicker from './DateRange';
import EventList from './Eventlist';

const ParentComponent: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>('');

  const handleDateChange = (date: string) => {
    setSelectedDate(date); // Update the state with the selected date
  };

  return (
    <div>
      <DatePicker onDateChange={handleDateChange} />
      <EventList selectedDate={selectedDate} /> {/* Pass the selected date to EventList */}
    </div>
  );
};

export default ParentComponent;