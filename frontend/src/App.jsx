import Footer from "./components/Footer";
import Nav from "./components/Nav";
import Home from "./pages/Home/Home";

const App = () => {
  return (
    <main className="relative">
      <section className="w-full top-0">
        <Nav />
      </section>
      <section>
        <Home />
      </section>
      <section className="padding-x padding-t pb-8 bg-black text-white w-full absolute mt-96">
        <Footer />
      </section>
    </main>
  );
};

export default App;
