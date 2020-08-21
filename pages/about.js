import Layout from "../components/Layout/Layout";
import Quote from "../components/Quote/Quote"
import Programs from "../components/Programs/Programs"
import ExecutiveTeam from "../components/ExecutiveTeam/ExecutiveTeam";

const About = () => <Layout>
    <Quote />
    <Quote />
    <Quote /> 
    <Programs /> 
    
    This is the context for the about page.

    <ExecutiveTeam />
    
    </Layout>;

export default About;