import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Features from "./components/Features";
import Testimonials from "./components/Testimonials";
import Blog from "./components/Blog";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import data from "./data";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Testimonials />
      <Blog
        data={data}
        image={data.image}
        date={data.date}
        title={data.title}
        author={data.author}
        category={data.category}
        id={data.id}
      />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
