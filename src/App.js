import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import Layout from "./components/layout";
import { About } from "./components/about";
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Header heading="Quiz App"/>
      <Routes>
          <Route path="/about" element={<About />} />
        <Route path="/" element={<Layout />}>
         
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    </div>
  );
}

export default App;
