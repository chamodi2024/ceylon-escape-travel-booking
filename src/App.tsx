
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import DestinationDetails from "./pages/DestinationDetails";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<Explore />} />
        <Route
          path="/destination/:id"
          element={<DestinationDetails />}
        />
        <Route
          path="*"
          element={
            <main className="min-h-[60vh] px-6 py-24 text-center">
              <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
              <LinkBack />
            </main>
          }
        />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

function LinkBack() {
  return (
    <a href="/" className="mt-6 inline-block text-teal-700 underline">
      Back to Home
    </a>
  );
}
