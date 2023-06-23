
import { Route, Routes } from 'react-router-dom';
import Home from './routs/home/home.component';
import Navigation from './routs/navigation/navgation.component';


const Shop = () =>{
  return(
    <h1>I am the shop page</h1>
  )
}

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Navigation/>} >
      <Route index element={<Home />}/>
      <Route path='shop' element={<Shop />}/>
    </Route>
      
    </Routes>
  );
}

export default App;
