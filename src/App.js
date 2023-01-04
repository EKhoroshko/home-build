import { Routes, Route } from "react-router-dom";
import Home from './routers/Home';
import Layout from './component/Layout/Layout';
import Equipment from './routers/Equipment';
import Delivery from './routers/Delivery';
import Contact from './routers/Contact';
import OurWork from './routers/OurWork';
import ToCustomer from './routers/ToCustomer';
import './style/_App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="customer" element={<ToCustomer />} />
          <Route path="delivery" element={<Delivery />} />
          <Route path="ourwork" element={<OurWork />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
