import { generateDate } from '../utils/calendar';
import cn from '../utils/cn';

type Props = {};

export default function main({}: Props) {
  const days = ['Sun', 'Mon', 'Tue', 'Wen', 'Thu', 'Fri', 'Sat'];
  return (
    <div id='main-container' className='grid place-content-center justify-center items-center'>
      <div id='header-container'>
        <h1></h1>
      </div>
      <div id='calendar-container' className="w-96 h-96">
        <div className="w-full grid grid-cols-7">
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
          {generateDate().map(({ date, currentMonth, today }, index) => {
            return (
              <div
                className={cn(
                  'h-14 border-t grid place-content-center text-sm'
                )}
              >
                <h1
                  className={cn(
                    currentMonth ? '' : 'text-gray-400',
                    today ? 'text-white bg-pink-500' : '',
                    'h-10 w-10 grid place-content-center rounded-full hover:bg-black hover:text-white transition-all cursor-pointer'
                  )}
                >
                  {date.date()}
                </h1>
              </div>
            );
          })}
        </div>
      </div>
      <div id='function-container'>

      </div>
    </div>
  );
}
