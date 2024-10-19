import { Routes, Route } from "react-router-dom";
import Sign_In from "./pages/Sign_In";
import Sign_up from "./pages/Sign_up";
import AddBook from "./pages/AddBook";
import BookTable from "./pages/BookTable";
import ContextProvider from "./context/ContextProvider";
import EditRow from "./components/EditRow";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

function App() {
  return (
    <>
   
    {/* <ContextProvider> */}
   
      <Routes>
        <Route path="/" element={<Sign_In />} />
        <Route path="/Sign_in" element={<Sign_In />} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/BookTable" element={<BookTable />} />
        <Route path="/EditRow" element={<EditRow />} />
        <Route path="/Home" element={<Home />} />
      </Routes>
    {/* </ContextProvider> */}
    </>
  );
}

export default App;
