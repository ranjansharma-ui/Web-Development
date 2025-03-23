import './App.css'
import { createBrowserRouter ,RouterProvider} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';

const router = createBrowserRouter(
  [
    {
      path:"/",
      element: <Home/>
    },
    {
      path:"/about",
      element: <About/>
    },
    {
      path:"/dashboard",
      element: <Dashboard/>
    }
  ]
)

function App() {
 

  return (
   <div>
    <RouterProvider router={router} />
    <Navbar/>
   </div>
  )
}

export default App
