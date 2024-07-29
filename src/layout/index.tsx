// Layout Here

import { Link, Outlet } from "react-router-dom";
import videoBG from "../assets/videoBG.mp4"

export default function Layout() {
    return <div className="w-full h-screen">
        <video autoPlay loop muted className="bg-vid"> <source src={videoBG} type="video/mp4" /> </video>
        <div className="pt-6 w-full">
            <div className="navbar bg-white mx-6 mb-6 p-2 rounded-xl flex items-center justify-center gap-4 md:gap-12 text-xl">
                <Link to="/">Home</Link>
                <Link to="/docs">How to use?</Link>
            </div>
        </div>
        <div className="w-full h-2/3 flex items-center justify-center">
            <div className="text-white font-bold w-full mx-4 md:w-2/3 rounded-xl self-center p-6 container">
                <Outlet />
            </div>
        </div>
    </div>
}