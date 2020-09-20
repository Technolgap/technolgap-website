import Twitter from 'twitter';

import Layout from '../components/Layout/Layout';
import RSSFeed from '../components/RSSFeed/RSSFeed';
import AboutTechnolgapSection from '../components/AboutTechnolgapSection/AboutTechnolgapSection';
import ContactSection from '../components/ContactSection/ContactSection';
import Header from '../components/Header/Header';
import DynamicCalendar from '../components/Calendar/DynamicCalendar';

const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret,
});
const params = { screen_name: 'technolgap', exclude_replies: true };

export async function getServerSideProps() {
  const tweets = await client.get('statuses/user_timeline', params);

  return {
    props: {
      tweets,
    },
  };
}

const Index = (props) => (
  <Layout>
    This is the context for the home page.
    <Header />
    <AboutTechnolgapSection />
    <RSSFeed {...props} />
    <DynamicCalendar />
    <ContactSection />
  </Layout>
);

export default Index;
