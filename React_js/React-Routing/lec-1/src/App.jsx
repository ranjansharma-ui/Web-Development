import './App.css'
import { createBrowserRouter ,RouterProvider} from "react-router-dom";

import Home from './components/Home';
import About from './components/About';
import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import ParamComp from './components/ParamComp';
import Mocktest from './components/mocktest';
import Course from './components/course';
import Reports from './components/reports';
import NotFound from './components/NotFound';
const router = createBrowserRouter(
  [
    {
      path:"/",
      element:
      <div>
        <Navbar/>
        <Home/>
      </div>
      
    },
    {
      path:"/about",
      element: 
      <div>
        <Navbar/>
        <About/>
      </div>
      
    },
    {
      path:"/dashboard",
      element: 
      <div>
        <Navbar/>
        <Dashboard/>
      </div>,
      children:[
        {
          path: 'course',
          element: <Course/>
        },
        {
          path: 'mocktest',
          element:<Mocktest/>
        },
        {
          path: 'reports',
          element:<Reports/>
        }
      ]
      
    },
    {
      path:"/student/:id",
      element:
      <div>
        <Navbar/>
        <ParamComp/>
      </div>
      
    },
    {
      path: "*",
      element: <NotFound/>
      
    }

  ]
)

function App() {
 

  return (
   <div>
    <RouterProvider router={router} />
    {/* <Navbar/> */}
   </div>
  )
}

export default App
