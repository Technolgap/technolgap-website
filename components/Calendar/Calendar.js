import TuiCalendar from '@toast-ui/react-calendar';

import useCalendar from './calendarAPI';

const Calendar = () => {
  const { data, isLoading, isError } = useCalendar();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error!</p>;

  console.log(data);

  return (
    <>
      {/* Hacky Solution for getting TUI Calendar to work with NextJS */}
      <link
        rel="stylesheet"
        type="text/css"
        href="https://uicdn.toast.com/tui-calendar/latest/tui-calendar.css"
      />

      <TuiCalendar
        calendars={[
          {
            id: '0',
            name: 'Primary',
            bgColor: '#EFD5D2',
          },
        ]}
        isReadOnly
        view="month"
        schedules={[
          ...data.events,
          {
            calendarId: 0,
            id: '1',
            category: 'time',
            isVisible: true,
            start: '1999-08-21T08:00',
            end: '1999-08-21T10:00',
            title: 'test event',
          },
        ]}
        timezones={[
          {
            timezoneOffset: -240,
            displayLabel: 'GMT-04:00',
            tooltip: 'Toronto / EST',
          },
        ]}
      />
    </>
  );
};

export default Calendar;
