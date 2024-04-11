import dayjs from 'dayjs';
import { generateDate, generateMonth, generateYear } from '../utils/calendar';
import cn from '../utils/cn';
import { useState } from 'react';
import { GrFormNext, GrFormPrevious } from 'react-icons/gr';
import { FaPenSquare } from 'react-icons/fa';
import LogModal from './logModal';

type Props = {};

export default function Main({}: Props) {
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const currentDate = dayjs();
  const [today, setToday] = useState(currentDate);
  const [selectedDate, setSelectedDate] = useState(currentDate);

  return (
    <div
      id="main-container"
      className="flex lg:divide-x justify-center lg:w-1/2 mx-auto h-screen items-center lg:flex-row flex-col gap-16 lg:gap-10"
    >
      <div id="calendar-container" className="h-96 w-96">
        <div id="header-container" className="pt-5 px-4 flex justify-between">
          <h1 className="font-semibold">
            {generateMonth(today.month())}, {today.year()}
          </h1>
          <div
            id="toggle-month-icons"
            className="flex items-center gap-5 hover:backdrop"
          >
            <GrFormPrevious
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() - 1));
              }}
            />
            <h1
              className="cursor-pointer"
              onClick={() => {
                setToday(currentDate);
              }}
            >
              Today
            </h1>
            <GrFormNext
              className="w-5 h-5 cursor-pointer"
              onClick={() => {
                setToday(today.month(today.month() + 1));
              }}
            />
          </div>
        </div>
        <div id="calendar-container" className="w-96 h-96 px-4">
          <div className="w-full grid grid-cols-7 text-gray-500">
            {days.map((day, index) => {
              return (
                <h1
                  className="h-14 grid place-content-center text-sm"
                  key={index}
                >
                  {day}
                </h1>
              );
            })}
          </div>
          <div className="w-full grid grid-cols-7">
            {generateDate(today.month(), today.year()).map(
              ({ date, currentMonth, today }, index) => {
                return (
                  <div
                    className={cn(
                      'h-14 border-t grid place-content-center text-sm'
                    )}
                  >
                    <h1
                      className={cn(
                        currentMonth ? '' : 'text-gray-400',
                        today ? 'text-white bg-black' : '',
                        'h-10 w-10 grid place-content-center rounded-full hover:bg-pink-300 hover:text-white transition-all cursor-pointer',
                        selectedDate.toDate().toDateString() ===
                          date.toDate().toDateString()
                          ? 'text-white bg-pink-500'
                          : ''
                      )}
                      onClick={() => {
                        setSelectedDate(date);
                      }}
                    >
                      {date.date()}
                    </h1>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </div>

      <div id="function-container" className="h-96 w-96 px-5 min-w-96">
        <div id="daily-title" className="font-semibold flex justify-between">
          <p className='w-full text-center'> Schedule for {selectedDate.toDate().toDateString()}</p>
          {/* <FaPenSquare
            className="h-6 w-6 cursor-pointer"
            onClick={() => {
              console.log('Edit');
            }}
          /> */}
        </div>
        <div
          id="daily-content-container"
          className="flex flex-col pt-12 justify-between  gap-8"
        >
          {/* <LogModal /> */}
          <button className="bg-pink-500 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">
            Off-work
          </button>
          <button className="bg-pink-500 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">
            Log Face Condition
          </button>
          <button className="bg-pink-500 hover:bg-pink-300 text-white font-bold py-2 px-4 rounded-full">
            Show Log
          </button>
        </div>
      </div>
    </div>
  );
}
