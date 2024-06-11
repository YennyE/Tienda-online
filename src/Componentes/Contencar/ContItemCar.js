import { useContext } from "react";
import { datacontext  } from "../Context/Datacontext";

const ContItemCar = ({product}) => {
  const {carrito, setCarrito, buyProducts} = useContext(datacontext);

  const decrec = () =>{
    const productrepet = carrito.find((item) => item.id === product.id);

    productrepet.cantidad !== 1 &&
      setCarrito(carrito.map((item) => (item.id === product.id?{...product,cantidad:
      productrepet.cantidad - 1} : item)))

  };


  
  return (
    <>
        <p className='cont-button' onClick={decrec}>-</p>
        <p> {product.cantidad}</p>
        <p className='cont-button' onClick={() => buyProducts(product)}>+</p>
    </>

  );
};

export default ContItemCar;