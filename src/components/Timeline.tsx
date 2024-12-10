import React, { useState } from 'react';
import Modal from './Modal';

export interface TimelineEvent {
  year: string;
  title: string;
  company: string;
  description?: string | React.ReactNode;
}

interface TimelineProps {
  events: TimelineEvent[];
}

const Event: React.FC<{
  event: TimelineEvent; 
  index: number;
}> = ({ event, index }) => {
  const [isExperienceModalActive, setIsExperienceModalActive] = useState(false);

  return (
    <div 
      key={event.year} 
      className={`flex items-center w-full ${
        index % 2 === 0 ? 'flex-row-reverse' : ''
      }`}
    >
      {/* Timeline Dot */}
      <div className='absolute w-4 h-4 bg-black rounded-full left-1/2 transform -translate-x-1/2'></div>
      
      {/* Event Box */}
      <div 
        className={`w-[155px] sm:w-[240px] p-2 bg-white border-2 border-border shadow-light cursor-pointer
        ${index % 2 === 0 ? 'mr-auto' : 'ml-auto'}`}
        onClick={() => setIsExperienceModalActive(true)}
      >
        <h3 className='text-xs sm:text-sm font-bold text-gray-800'>{event.company} - {event.title}</h3>
        <p className='text-xs sm:text-sm text-gray-600'>{event.year}</p>
      </div>

      <Modal active={isExperienceModalActive} setActive={setIsExperienceModalActive}>
        <div className='w-full flex flex-col items-start pb-5 pl-2'>
          <h2 className='text-md font-bold mb-2'>{event.title} at {event.company} - {event.year}</h2>
          <p className='text-sm font-normal'>{event.description}</p>
        </div>
      </Modal>
    </div>
  );
};

const Timeline: React.FC<TimelineProps> = ({ events }) => {
  return (
    <div className='w-full max-w-[345px] sm:max-w-[520px] mx-auto relative py-5'>
      {/* Central Line */}
      <div className='absolute h-[285px] sm:h-64 w-1 bg-gray-800 left-1/2 transform -translate-x-1/2'></div>
      
      {/* Timeline Events */}
      <div className='space-y-1 relative'>
        {events.map((event, index) => (
          <Event key={event.year} event={event} index={index} />
        ))}
      </div>
    </div>
  );
};

export default Timeline;
