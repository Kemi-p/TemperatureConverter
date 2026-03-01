import {Route,Routes} from "react-router-dom"
import Navabr from "./components/Navbar"
import TeamDirectoryPage from "./pages/TeamDirectoryPage"
import TempConverterPage from "./pages/TempConverterPage"


export default function App(){
  return (
  <div className="min-h-screen bg-purple-50">
    <Navabr />
    <Routes>
      <Route path="/" element={<TempConverterPage />} />
      <Route path="/team" element={<TeamDirectoryPage />} />
      
    </Routes>

  </div>
  );
}