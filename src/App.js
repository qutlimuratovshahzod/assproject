import { Route, Routes } from 'react-router-dom';
import { MybRo } from './Components/MybRo';
import { Navbar } from './Components/Navbar';
import { AddProducts } from './Pages/AddProducts';
import { Components } from './Pages/Components';

function App() {
  return (
    <div className='p-6'>
    <MybRo/>
    <div  className="App h-screen flex justify-center items-center ">
     <Routes>
       <Route index element={<AddProducts/>}/>
       <Route path='/components' element={<Components/>}/>
     </Routes>
    </div>
    <Navbar/>
    </div>
  );
}

export default App;
