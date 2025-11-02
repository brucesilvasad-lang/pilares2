// FIX: Implemented the Schedule view to manage daily appointments.
import React from 'react';
import type { DailySchedule, Student, Service, TimeSlot } from '../types';
import TimeSlotCard from './TimeSlotCard';
import Calendar from './Calendar';

interface ScheduleProps {
  currentDate: string;
  onChangeDate: (date: string) => void;
  schedule: DailySchedule;
  services: Service[];
  studentTags: string[];
  onUpdateStudent: (time: string, studentId: string, updatedStudent: Partial<Student>) => void;
  onAddStudentSlot: (time: string) => void;
  onRemoveStudentSlot: (time: string, studentId: string) => void;
  onUpdateTimeSlot: (time: string, updatedTimeSlot: Partial<TimeSlot>) => void;
}

const Schedule: React.FC<ScheduleProps> = ({
  currentDate,
  onChangeDate,
  schedule,
  services,
  studentTags,
  onUpdateStudent,
  onAddStudentSlot,
  onRemoveStudentSlot,
  onUpdateTimeSlot
}) => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
            <h2 className="text-3xl font-bold text-brand-darkgray">Agenda do Dia</h2>
            <p className="text-brand-gray">Gerencie os horários e alunos.</p>
        </div>
        <Calendar currentDate={currentDate} onChangeDate={onChangeDate} />
      </div>

      {schedule.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {schedule.map(timeSlot => (
            <TimeSlotCard
              key={timeSlot.time}
              timeSlot={timeSlot}
              services={services}
              studentTags={studentTags}
              onUpdateStudent={onUpdateStudent}
              onAddStudentSlot={onAddStudentSlot}
              onRemoveStudentSlot={onRemoveStudentSlot}
              onUpdateTimeSlot={onUpdateTimeSlot}
            />
          ))}
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-brand-gray">Nenhum horário disponível para esta data.</p>
        </div>
      )}
    </div>
  );
};

export default Schedule;
