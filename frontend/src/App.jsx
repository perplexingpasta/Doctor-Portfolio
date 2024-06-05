import { useMediaQuery } from "react-responsive";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "../src/components/ScrollToTop";
import Footer from "./components/Footer";
// import Nav from "./components/Nav";
import Nav2 from "./components/Nav2";
import Home from "./pages/Home/Home";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import FAQs from "./pages/FAQs/FAQs";
import AboutUs from "./pages/AboutUs/AboutUs";
import PageNotFound from "./PageNotFound/PageNotFound";
import ContactMobile from "./pages/Contact/ContactMobile";

const App = () => {
  const isMobile = useMediaQuery({ maxWidth: 767 });

  return (
    <main className="relative flex min-h-screen flex-col">
      <BrowserRouter>
        <ScrollToTop />
        <section className="fixed top-0 z-20 w-full">
          {/* <Nav /> */}
          <Nav2 />
        </section>
        <section className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={isMobile ? <ContactMobile /> : <Contact />} />
            <Route path="/faqs" element={<FAQs />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </section>
        <section className="padding-x w-full bg-gray-950 pb-8 pt-16 text-white">
          <Footer />
        </section>
      </BrowserRouter>
    </main>
  );
};

export default App;
