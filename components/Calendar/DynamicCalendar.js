import dynamic from 'next/dynamic';

const DynamicCalendar = dynamic(() => import('./Calendar'), { ssr: false });

export default DynamicCalendar;
