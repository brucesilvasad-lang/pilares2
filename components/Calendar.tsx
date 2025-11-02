// FIX: Implemented a simple date picker component for navigating between dates.
import React from 'react';

interface CalendarProps {
  currentDate: string;
  onChangeDate: (date: string) => void;
}

const Calendar: React.FC<CalendarProps> = ({ currentDate, onChangeDate }) => {
  return (
    <div className="flex items-center space-x-2 bg-brand-white p-2 rounded-lg shadow">
      <label htmlFor="schedule-date" className="font-medium text-brand-darkgray text-sm">
        Data:
      </label>
      <input
        id="schedule-date"
        type="date"
        value={currentDate}
        onChange={(e) => onChangeDate(e.target.value)}
        className="p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-primary-dark focus:border-transparent transition"
      />
    </div>
  );
};

export default Calendar;
