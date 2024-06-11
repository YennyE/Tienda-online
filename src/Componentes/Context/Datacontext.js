import { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const datacontext = createContext();

const DataProvider = ({children}) => {
    const[data, setData] = useState([]);
    const[carrito, setCarrito] = useState([]);

    useEffect(()=>{
        axios.get("data.json")
        .then((res) => setData(res.data))
        .catch((err) => console.error("Error fetching data: ", err));

    },[]);

    const buyProducts = (product) =>{
      //console.log(product);
      const productrepet = carrito.find((item)=> item.id === product.id);
      if (productrepet){
        setCarrito(carrito.map((item) => (item.id === product.id ? {...product, cantidad:
        productrepet.cantidad + 1}:item)));
      }else{
        setCarrito([...carrito, product])

      }
    };



  return <datacontext.Provider value={{ data, carrito, setCarrito, buyProducts }}>{children}</datacontext.Provider>;
  
};

export default DataProvider;
 