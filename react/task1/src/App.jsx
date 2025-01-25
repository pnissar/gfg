import { BrowserRouter, Route, Routes } from "react-router-dom";
import Lp from "./screens/Lp.jsx";
import Home from "./screens/Home.jsx";
import Contact from "./screens/Contact.jsx";
import About from "./screens/About.jsx";
import View from "./screens/View.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lp />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="About" element={<About />} />

        <Route path="View" element={<View />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
