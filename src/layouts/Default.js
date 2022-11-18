import Navigation from "../components/Navigation";
import Home from "../pages/Home";

const Default = () => {
    return ( 
        <div>
            <Navigation />
            <div className="container">
                <Home/>
            </div>
        </div>
     );
}
 
export default Default;