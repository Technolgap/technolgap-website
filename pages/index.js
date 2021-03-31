//import "../theme/theme";
import Layout from '../components/Layout/Layout';
import RSSFeed from '../components/RSSFeed/RSSFeed';
import Section from '../components/Section/Section';
import Header from '../components/Header/Header';
import DynamicCalendar from '../components/Calendar/DynamicCalendar';
import UpcomingEvents from '../components/UpcomingEvents/UpcomingEvents';

const Index = () => (
  <Layout>
    <Header />

    <Section title="what is technolgap?" body={[<strong>Technolgap </strong>, "started as a slack group for women technology - related post - secondary programs in Ottawa to share job postings, articles, and scholarships with each other.Since then, the group has grown to over 100 members and acts as a safe space for women in technology to connect."]} buttons={["about us", "sign up"]} color="#423B0B"/>

    <RSSFeed />
    <UpcomingEvents/>
    <DynamicCalendar />
    <Section title="have questions?" body="Email us! We’ll do our best to get back to you within four business days." buttons={["email us"]} color="#202030"/>
  </Layout>
);

export default Index;
