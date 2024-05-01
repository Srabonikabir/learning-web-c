
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './Routes/Routes/Routes';
import UserContext from './Contexts/UserContext';





function App() {
  return (
    <div className="App">
   <UserContext> 
      <RouterProvider router={routers}></RouterProvider></UserContext>
    </div>
  );
}

export default App;
