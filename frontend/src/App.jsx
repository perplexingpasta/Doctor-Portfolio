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
    <main className="relative flex min-h-screen flex-col">
      <BrowserRouter>
        <section className="fixed top-0 z-20 w-full">
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

      <section className="padding-x w-full bg-black pb-8 pt-16 text-white">
        <Footer />
      </section>
    </main>
  );
};

export default App;
