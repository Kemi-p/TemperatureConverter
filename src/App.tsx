import {Route,Routes} from "react-router-dom"
import Navabr from "./components/Navbar"
import TeamDirectoryPage from "./pages/TeamDirectoryPage"
import TempConverterPage from "./pages/TempConverterPage"


export default function App(){
  <div className="min-h-screen bg-purple-50">
    <Routes>
      <Route path="/" element={<TempConverterPage />} />
      <Route path="/team" element={<TeamDirectoryPage />} />
      
    </Routes>

  </div>
}