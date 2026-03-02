import {Link} from "react-router-dom"

export default function Navabr(){
    return (
        <nav className="bg-purple-100 p-4 flex gap-6">
            <Link to="/" className="text-purple-600 font-bold hover:text-purple-400">
            Temperature Converter
            </Link>

             <Link to="/team" className="text-purple-600 font-bold hover:text-purple-400">
            Team Directory
            </Link>
        </nav>
    );
}