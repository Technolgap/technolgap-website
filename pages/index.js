import Layout from '../components/Layout/Layout';
import RSSFeed from '../components/RSSFeed/RSSFeed';
import AboutTechnolgapSection from '../components/AboutTechnolgapSection/AboutTechnolgapSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Header from '../components/Header/Header';
import DynamicCalendar from '../components/Calendar/DynamicCalendar';
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents';

const Index = () => (
  <Layout>
    <Header />
    <AboutTechnolgapSection />
    <RSSFeed />
    <UpcomingEvents/>
    <DynamicCalendar />
    <ContactSection />
  </Layout>
);

export default Index;
