/** @format */

import Blog from "./Components/Blog";
import Features from "./Components/Features";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Pricing from "./Components/Pricing";
import Services from "./Components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Services />
      <Features />
      <Pricing />
      <Blog />
    </div>
  );
}

export default App;
