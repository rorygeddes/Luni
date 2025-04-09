"use client";

import React from 'react';

// Mock data for events
const events = [
  { id: 1, title: 'Meeting with John', time: '09:00 AM', category: 'Work', color: 'bg-blue-500' },
  { id: 2, title: 'Dentist', time: '11:30 AM', category: 'Health', color: 'bg-indigo-500' },
  { id: 3, title: 'Lunch with Sarah', time: '01:00 PM', category: 'Personal', color: 'bg-green-500' },
  { id: 4, title: 'Project Deadline', time: '05:00 PM', category: 'Work', color: 'bg-blue-500' },
];

// Days of the week
const weekDays = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

// Generate dates for the calendar grid
const generateCalendarDays = () => {
  const today = new Date();
  const startDay = new Date(today.getFullYear(), today.getMonth(), 1);
  const daysInMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0).getDate();
  
  // Get day of the week for the first day (0 = Sunday, 6 = Saturday)
  const firstDayOfWeek = startDay.getDay();
  
  // Create array with empty slots for previous month days
  const days = Array(firstDayOfWeek).fill(null);
  
  // Add days of current month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }
  
  return days;
};

const calendarDays = generateCalendarDays();

export default function CalendarApp() {
  const currentDate = new Date();
  const currentDay = currentDate.getDate();
  const currentMonth = currentDate.toLocaleString('default', { month: 'long' });
  const currentYear = currentDate.getFullYear();
  
  return (
    <div className="bg-white text-gray-800 h-full overflow-auto pb-6 rounded-xl">
      {/* Calendar Header */}
      <div className="px-4 py-5 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-t-xl">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-bold">{currentMonth} {currentYear}</h2>
          <div className="flex space-x-2">
            <button 
              className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center"
              aria-label="Previous month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button 
              className="w-8 h-8 rounded-full bg-white bg-opacity-20 flex items-center justify-center"
              aria-label="Next month"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Calendar Grid */}
      <div className="px-4 py-4">
        {/* Days of week */}
        <div className="grid grid-cols-7 text-center mb-2">
          {weekDays.map((day, index) => (
            <div key={index} className="text-sm font-medium text-gray-500">
              {day}
            </div>
          ))}
        </div>
        
        {/* Calendar days */}
        <div className="grid grid-cols-7 gap-2">
          {calendarDays.map((day, index) => (
            <div 
              key={index}
              className={`aspect-square rounded-lg flex items-center justify-center text-sm font-medium ${
                day === currentDay 
                  ? 'bg-blue-500 text-white' 
                  : day 
                    ? 'hover:bg-gray-100 cursor-pointer text-gray-800' 
                    : 'text-gray-300'
              }`}
            >
              {day}
            </div>
          ))}
        </div>
      </div>
      
      {/* Today's Schedule */}
      <div className="px-4 py-4">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium text-gray-800">Today&apos;s Schedule</h3>
          <button className="text-xs text-blue-600" aria-label="View all events">View All</button>
        </div>
        
        <div className="space-y-3">
          {events.map((event) => (
            <div 
              key={event.id}
              className="p-3 rounded-lg bg-gray-50 border border-gray-100 shadow-sm"
            >
              <div className="flex items-center">
                <div className={`w-2 h-10 rounded-full ${event.color} mr-3`}></div>
                <div className="flex-grow">
                  <div className="text-sm font-medium text-gray-800">{event.title}</div>
                  <div className="text-xs text-gray-500">{event.time} • {event.category}</div>
                </div>
                <button 
                  className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500"
                  aria-label="Event options"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Quick Add Event Button */}
      <div className="fixed bottom-6 right-6">
        <button 
          className="w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg flex items-center justify-center"
          aria-label="Add new event"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
        </button>
      </div>
    </div>
  );
} 