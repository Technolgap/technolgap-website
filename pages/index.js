import Layout from "../components/Layout/Layout";
import RSSFeed from "../components/RSSFeed/RSSFeed";
import AboutTechnolgapSection from "../components/AboutTechnolgapSection/AboutTechnolgapSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Header from "../components/Header/Header";
import DynamicCalendar from '../components/Calendar/DynamicCalendar';
const Twitter = require('twitter');
const client = new Twitter({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token_key: process.env.access_token_key,
  access_token_secret: process.env.access_token_secret
});
const params = {screen_name: 'technolgap', exclude_replies: true};

const Index = (props) => <Layout>
    {console.log(props)}
    This is the context for the home page.
    <Header /> 

    <AboutTechnolgapSection /> 
    
    <RSSFeed props={props}/> 
     <DynamicCalendar />

    <ContactSection /> 

    </Layout>;

export async function getStaticProps() {
    const res = await client.get('statuses/user_timeline', params)
      .then(function (tweet) {
        console.log(tweet);
      })
      .catch(function (error) {
        throw error;
      })
    const tweets = await res.json()
    console.log(tweets)
    return {
      props: {
        tweets,
      },
    }
  }
export default Index;
