import { Routes, Route } from "react-router-dom";
import Sign_In from "./pages/Sign_In";
import Sign_up from "./pages/Sign_up";
import AddBook from "./pages/AddBook";
import BookTable from "./pages/BookTable";
import ContextProvider from "./context/ContextProvider";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Sign_In />} />
        <Route path="/Sign_in" element={<Sign_In />} />
        <Route path="/Sign_up" element={<Sign_up />} />
        <Route path="/AddBook" element={<AddBook />} />
        <Route path="/BookTable" element={<BookTable />} />
        {/* <Route path="/DeleteBook" element={<DeleteBook />} /> */}
      </Routes>
    </>
  );
}

export default App;
