import { Outlet } from "react-router-dom";
import Me from "../components/Me";
import Navigation from "../components/Navigation";

function Layout() {
    return (
        <>
            <header className="md:w-[50rem] md:m-auto">
                <Me />
                <Navigation />
            </header>

            <main className="md:w-[50rem] md:m-auto">
                <Outlet />
            </main>
        </>
    );
}

export default Layout;
