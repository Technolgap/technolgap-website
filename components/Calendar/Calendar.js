import Head from 'next/head';

import TuiCalendar from '@toast-ui/react-calendar';

import useCalendar from './calendarAPI';

const Calendar = () => {
  const { data, isLoading, isError } = useCalendar();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  console.log(data);

  return (
    <TuiCalendar
      calendars={[
        {
          id: '0',
          name: 'Primary',
          bgColor: '#EFD5D2',
        },
      ]}
      view="month"
      schedules={data.events}
      timezones={[
        {
          timezoneOffset: -240,
          displayLabel: 'GMT-04:00',
          tooltip: 'Toronto / EST',
        }
      ]}
    />
  );
};

export default Calendar;
