import Home from './Componentes/Home/home';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import DataProvider from './Componentes/Context/Datacontext';
import Contencar from './Componentes/Contencar/Contencar';

function App() {
  return (
    <DataProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element ={<Home/>}/>
          <Route path='/car' element ={<Contencar/>}/>
        </Routes>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
