import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import Home from "../pages/Home";

const Default = () => {
    return ( 
        <div>
            <Navigation />
            <div className="container">
                <Home/>
                <Footer/>
            </div>
        </div>
     );
}
 
export default Default;