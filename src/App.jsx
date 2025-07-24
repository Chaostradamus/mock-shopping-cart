// import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Shop from "./pages/Shop";
// import Navbar from "./components/Navbar";
// import { ProductsProvider } from './providers/ProductsProvider';

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <main>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/shop" element={<Shop />} />
//         </Routes>
//       </main>
//     </Router>
//   );
// }

// export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Shop from './pages/Shop';

// Export as default
export default function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </main>
    </Router>
  );
}