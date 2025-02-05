
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Homelayerout ,Aboutt, Experience, Resume, Home, Contactt} from './pages';
import '../src/assets/style/App.css'
import Githubuser from './pages/Githubuser';




const router = createBrowserRouter([
{
  path:'/',
  element: <Homelayerout />,
  children:[
    {
      index: true,
      element: <Home />,
    
    },
    {
      path: 'about',
      element: <Aboutt />,
    
    },
    {
      path: 'contact',
      element: <Contactt />, 
    
    },
    {
      path: 'experience',
      element: <Experience />,
    
    },
    {
      path: 'resume',
      element: <Resume />
    
    },
    {
      path: 'githubuser',
      element: <Githubuser />
    }

  ]
}
]);

function App() {
  
  return <RouterProvider router={router} />;
   
  
}

export default App
