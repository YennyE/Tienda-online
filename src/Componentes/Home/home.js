import Navbar from "../Nabvar/Navbar";
import Productos from "../Productos/Productos";

const Home = () => {
    return (
        <>
            <Navbar/>
            
            <div className="product-card-container">
                <Productos />
            </div> 
        </>
    );
    
    
};
export default Home;