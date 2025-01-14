import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Laygout from "./components/Laygout";
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import AddUser from "./pages/AddUser";
import Wishlist from "./pages/Wishlist";
import UserDetails from "./pages/UserDetails";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Laygout/>}>
          <Route index element={<Home/>}/>
          <Route path="add-user" element={<AddUser/>}/>
          <Route path="details" element={<UserDetails/>}/>
          <Route path="wishlist" element={<Wishlist/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
