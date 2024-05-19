import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import AboutUs from "./pages/AboutUs/AboutUs";


const App = () => {
  return (
    <main className="relative">
      <section className="w-full top-0">
        <Nav />
      </section>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" elemenjjjt={<Contact />} />
          <Route path="/faqs" element={<FAQs />} />
          <Route path="/about-us" element={<AboutUs />} />
        </Routes>
      </BrowserRouter>

      <section className="padding-x padding-t pb-8 bg-black text-white w-full absolute mt-96">
        <Footer />
      </section>
    </main>
  );
};

export default App;
