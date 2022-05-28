import Header from './Components/header';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/home';
import Launch from './Components/launch';
import ProductDetails from './Components/productDetails';
import ProductMapping from './Components/productMapping';

function App() {
  return <>
  <div className="container-fluid">
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Launch' element={<Launch />}>
          <Route path='/Launch' element={<ProductMapping/>} />
          <Route path=":slug" element={<ProductDetails />}/>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  </>
}

export default App;
