import Layout from "../components/Layout/Layout";
import Quote from "../components/Quote/Quote"
import Programs from "../components/Programs/Programs"
import ExecutiveTeam from "../components/ExecutiveTeam/ExecutiveTeam";
import Title from "../components/Title/Title";

const About = () => <Layout>
    <Quote space="none" boxHeight="600px" shadowColour="#C45653" borderColour="black" text={<p>Until recently, it wasn’t a big part of Carleton University’s culture to share information between students. Co-founders Alexa Liaskovski and Gina Bak noticed this gap between the information about opportunities and the women studying computer science and related disciplines at Carleton and wanted to close it. <br></br><br></br>In February 2020, <strong>Technolgap</strong> started as a slack group for women to share job postings, articles, and scholarships with each other. Since then, the group has grown to over 100 members and acts as a safe space for women in technology to connect.</p>}/>
    <Title text={<h1>who is technolgap?</h1>}/>
    <Quote space="0px 0px 250px 0px" boxHeight="0px" shadowColour="white" borderColour="white" text={<p>There is a significant underrepresentation of women in software development roles, with women holding only 26% of computing roles in 2014. (there will be more content here, I just don't have time to write it right now...)</p>}/>
    <Quote space="none" boxHeight="700px" shadowColour="#423B0B" borderColour="black" text={<p>There exists a huge information gap between opportunities in the tech industry and the women studying software development-related fields in Ottawa. Technolgap's purpose lies in closing this gap and nixing the scarcity mindset.<br></br><br></br>We create opportunities for underrepresented post-secondary students in technology to mentor each other, develop and design tools for our organization, teach and learn from each other through workshops, and hold leadership positions throughout our teams.<br></br><br></br>We highly value sharing resources and opportunities with each other and emphasize supporting other women in tech.</p>}/>
    <Programs /> 
    
    This is the context for the about page.

    <ExecutiveTeam />
    
    </Layout>;

export default About;