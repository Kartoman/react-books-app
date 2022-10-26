import { Route, Routes } from "react-router";
import BookList from "./components/BookList";
import BookDetails from "./components/BookDetails";
import Favorites from "./components/Favorites";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <div className='app'>
      <Navbar />
      <Routes>
        <Route path='/' element={<BookList />} />
        <Route path='/books/:id' element={<BookDetails />} />
        <Route path='/favorites' element={<Favorites />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
