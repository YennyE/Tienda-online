import { useContext } from "react"
import { datacontext } from "../Context/Datacontext"


const TotalItems = () => {

    const{carrito} =useContext(datacontext);

    const cantidaItems = carrito.reduce((acc, ele) => acc + ele.cantidad, 0);

    return <span className="carrito-items-total">{cantidaItems}</span> ; 
};

export default TotalItems;