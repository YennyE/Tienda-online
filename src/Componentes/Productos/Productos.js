import { useContext } from "react";
import { datacontext  } from "../Context/Datacontext";

import "./Productos.css";

const Productos = () => {
    const {data, buyProducts} = useContext(datacontext);
    
    
  return data.map ((product)=>{
    return (
        <div className="carrito" key={product.id}>
            <img src={product.img} alt="img-product-car"/>
            <h3>{product.producto}</h3>
            <h4>{product.precio}$</h4>
            <button onClick={()=>buyProducts(product)}>Comprar</button>
        </div>
    );
  });
 
};
export default Productos; 
//<img src={product.img} alt="img-product-car"/>
//https://images.openfoodfacts.org/images/products/770/255/200/0097/front_es.4.full.jpg