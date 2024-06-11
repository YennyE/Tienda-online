import { useContext } from "react"
import { datacontext } from "../Context/Datacontext"

const TotalCar =() => {
    const{carrito} =useContext(datacontext);

    const total = carrito.reduce((acc, ele)=> acc + ele.precio * ele.cantidad, 0);
  return (
    <div className="carTotal">
        <h3>Total a pagar: {total}$</h3>
    </div>
  );
  
};

export default TotalCar;