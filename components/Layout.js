import NavBar from "./NavBar"; 
import Footer from "./Footer";

const layoutStyle = {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%"
}

const contentStyle = {
    flex: 1,
    display: "flex",
    flexDirection: "column"
}

const Layout = props => (
    <div className="Layout" style={layoutStyle}>
        <NavBar /> 
            <div className="Content" style={contentStyle}>
                {props.children}
            </div>
        <Footer /> 
    </div>
)

export default Layout; 