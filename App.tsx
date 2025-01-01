// src/App.tsx
import React from 'react';
// import DatePicker from './DateRange';
// import EventList from './Eventlist';
import ParentComponent from './ParentComponet';

const App: React.FC = () => {
  return (
    <>
      {/* <DatePicker />
      <EventList /> */}
      <ParentComponent />
    </>
  );
};

export default App;