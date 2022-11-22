import { Routes, Route } from "react-router-dom";
import Base from './routers/Base';
import Home from './routers/Home';
import Equipment from './routers/Equipment';
import './style/_App.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Base />}>
          <Route index element={<Home />} />
          <Route path="equipment" element={<Equipment />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
