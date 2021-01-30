import useSWR from 'swr';


const CAL_ID = 'technolgap%40gmail.com';

// TODO: Replace this with the calendar API key that you've created
const CAL_API_KEY = 'AIzaSyBH72uBP7E9-ub75Ax-Mm6Dk6Zt5jdxWRM';
const CAL_URL = `https://www.googleapis.com/calendar/v3/calendars/${CAL_ID}/events?key=${CAL_API_KEY}&singleEvents=true`;

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const parseItem = (item) => {
  return {
    calendarId: '0',
    title: item.summary,
    category: 'time',
    start: item.start.dateTime,
    end: item.end.dateTime,
    dueDateClass: '',
    id: item.id,
    // Additional data parameters from https://nhn.github.io/tui.calendar/latest/Schedule
    // color:
    // isAllDay:
    // isPending:
    // body:
  };
};

const parseData = (data) => {
  return {
    ...data,
    events: data.items.map((item) => parseItem(item)),
  };
};

function useCalendar() {
  const { data, error } = CAL_ID ? 
    useSWR(CAL_URL, fetcher) :
    { data: { items: [] }, error: null };

  return {
    data: data ? parseData(data) : null,
    isLoading: !error && !data,
    isError: error,
  };
}

export default useCalendar;
