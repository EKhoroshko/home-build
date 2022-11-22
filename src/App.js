import { Routes, Route } from "react-router-dom";
import Base from './routers/Base';
import Home from './routers/Home';
import Equipment from './routers/Equipment';
import Contact from './routers/Contact';
import './style/_App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
