import { Route, Routes } from 'react-router-dom';
import { AddProducts } from './Pages/AddProducts';

function App() {
  return (
    <div  className="App h-screen flex justify-center items-center ">
     <Routes>
       <Route index element={<AddProducts/>}/>
     </Routes>
    </div>
  );
}

export default App;
