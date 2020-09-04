import Layout from "../components/Layout/Layout";
import RSSFeed from "../components/RSSFeed/RSSFeed";
import AboutTechnolgapSection from "../components/AboutTechnolgapSection/AboutTechnolgapSection";
import ContactSection from "../components/ContactSection/ContactSection";
import Header from "../components/Header/Header";
import DynamicCalendar from '../components/Calendar/DynamicCalendar';

const Index = () => <Layout>
    This is the context for the home page.
    <Header /> 

    <AboutTechnolgapSection /> 
    
    <RSSFeed /> 
     <DynamicCalendar />

    <ContactSection /> 

    </Layout>;

export default Index;
