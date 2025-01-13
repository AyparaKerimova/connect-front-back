import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Laygout from "./components/Laygout";

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Laygout/>}>
          <Route index element={<Home/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
