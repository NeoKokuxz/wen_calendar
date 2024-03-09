import dayjs from 'dayjs';

export const generateDate = (
  month = dayjs().month(),
  year = dayjs().year()
) => {
  const firstDateofMonth = dayjs().year(year).month(month).startOf('month');
  const lastDateOfMonth = dayjs().year(year).month(month).endOf('month');

  const arrayOfDate = []

  // Generate Prefix days
  for(let i = 0; i < firstDateofMonth.day(); i++) {
    arrayOfDate.push({date: firstDateofMonth.day(i), currentMonth: false})
  }

  // Generate All days for current month
  for(let i = firstDateofMonth.date(); i  <= lastDateOfMonth.date(); i++) {
    arrayOfDate.push({date: firstDateofMonth.date(i), currentMonth: true, today: firstDateofMonth.date(i).toDate().toDateString() === dayjs().toDate().toDateString() })
  }

  // Generate reminding days
  let remaining = 42 - arrayOfDate.length
  for(let i = lastDateOfMonth.date() + 1; i <= lastDateOfMonth.date() + remaining; i++) {
    arrayOfDate.push({date:firstDateofMonth.date(i), currentMonth: false })
  }

  return arrayOfDate;
};
