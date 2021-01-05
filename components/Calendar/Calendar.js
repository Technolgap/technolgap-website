const GoogleCalendar = () => {
  const isMobile = window.innerWidth < 480;

  // Not quite sure why we can't use different src... But this works as an alternative
  return isMobile ? (
      <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=dGVjaG5vbGdhcEBnbWFpbC5jb20&amp;color=%23AD1457&amp;color=%23A79B8E&amp;mode=AGENDA"
          style={{ borderWidth:0 }} height="600" frameBorder="0" scrolling="no" />
  ) : (
      <iframe
          src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;ctz=America%2FToronto&amp;src=dGVjaG5vbGdhcEBnbWFpbC5jb20&amp;color=%23AD1457"
          style={{ borderWidth:0 }} height="600" frameBorder="0" scrolling="no" />
  );
};

export default GoogleCalendar;
