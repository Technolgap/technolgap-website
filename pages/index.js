import Layout from "../components/Layout/Layout";
import RSSFeed from "../components/RSSFeed/RSSFeed";
import Calendar from "../components/Calendar/Calendar"
import AboutTechnolgapSection from "../components/AboutTechnolgapSection/AboutTechnolgapSection";
import ContactSection from "../components/ContactSection/ContactSection";

const Index = () => <Layout>
    This is the context for the home page.

    <AboutTechnolgapSection /> 
    
    <RSSFeed /> 
    <Calendar />

    <ContactSection /> 

    </Layout>;

export default Index;