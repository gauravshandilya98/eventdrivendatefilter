// src/EventList.tsx
import React from 'react';

interface Event {
  id: number;
  date: string;
  text: string;
}

interface EventListProps {
  selectedDate: string; // Prop to receive the selected date
}

const events: Event[] = [
  { id: 1, date: '2024-12-31', text: 'New Year\'s Eve Party' },
  { id: 2, date: '2024-12-25', text: 'Christmas Celebration' },
  { id: 3, date: '2024-11-28', text: 'Thanksgiving Dinner' },
  { id: 4, date: '2024-11-01', text: 'Halloween Party' },
  { id: 5, date: '2024-10-31', text: 'Halloween Night' },
  // Add more events as needed
];

const EventList: React.FC<EventListProps> = ({ selectedDate }) => {
  // Filter events based on the selected date
  const filteredEvents = events.filter(event => event.date === selectedDate);

  return (
    <div>
      <h3>Filtered Events</h3>
      <ul>
        {filteredEvents.length === 0 ? (
          <li>No events found for this date</li>
        ) : (
          filteredEvents.map(event => (
            <li key={event.id}>{event.text} on {event.date}</li>
          ))
        )}
      </ul>
    </div>
  );
};

export default EventList;