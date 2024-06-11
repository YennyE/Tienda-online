import { useContext } from 'react';
import { datacontext } from '../Context/Datacontext';
import Navbar from '../Nabvar/Navbar';

import Elemencar from './Elemencar';
import TotalCar from './TotalCar';

const Contencar = () => {
  const {carrito} =useContext(datacontext);

  return  (
    <>
      <Navbar/>
      {carrito.length >0 ?(
        <> 
          <Elemencar/>
          <TotalCar/>
        </>
      ) : (
        <h2 className='mensaje-carrito'>El carro está vacío</h2>

      )}

    </> 

  );
  
};

export default Contencar;