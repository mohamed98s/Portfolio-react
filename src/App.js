import './App.css';
import Navbar from './componant/navbar/Navbar';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Layout from './Layout';
import Home from './componant/home/Home';
import About from './componant/about/About';
import Portfolio from './componant/portfolio/Portfolio'
import Contact from './componant/contact/Contact'
import Notfound from './Notfound'

function App() {

 const routes = createBrowserRouter([
  {path:'', element: <Layout></Layout>,children:[
    {index:true, element: <Home></Home>},
    {path:'about', element: <About></About>},
    {path:'portfolio', element: <Portfolio></Portfolio>},
    {path:'contact', element: <Contact></Contact>},
    {path:'*', element: <Notfound></Notfound>}
  ]}
 ])


  return (
    <div className="App">
      <RouterProvider router={routes}></RouterProvider>
    </div>
  );
}

export default App;
