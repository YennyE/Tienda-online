import { useContext } from 'react';
import { datacontext } from '../Context/Datacontext';

import ContItemCar from './ContItemCar';

import "./Contencar.css";
const Elemencar = () => {
    const{carrito, setCarrito} =useContext(datacontext);

    const eliminarProduct =(id) =>{
        const encontId = carrito.find((element)=>element.id === id);

        const newCarrito = carrito.filter ((element)=>{
            return element !== encontId;
        });
        setCarrito(newCarrito);
    };

    return carrito.map((product)=>{
        return (
            <div className='contencar' key={product.id}>
                <img src={product.img} alt = 'product-car'/>
                <h3 className='producto'>{product.producto}</h3>
                <ContItemCar product={product} />
                <h4 className='precio'>{product.precio * product.cantidad }</h4>
                <h3 className='eliminar-button' onClick={()=>eliminarProduct(product.id)}>❌</h3>
            </div>
        );
    });
  
};

export default Elemencar;