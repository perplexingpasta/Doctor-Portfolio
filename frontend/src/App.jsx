import { BrowserRouter, Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import AboutUs from "./pages/AboutUs/AboutUs";
import PageNotFound from "./PageNotFound/PageNotFound";

const App = () => {
  return (
    <main className="relative flex flex-col min-h-screen">
      <BrowserRouter>
        <section className="w-full top-0">
          <Nav />
        </section>
        <section className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </section>
      </BrowserRouter>

      <section className="padding-x pt-8 pb-8 bg-black text-white w-full">
        <Footer />
      </section>
    </main>
  );
};

export default App;
