import { NavLink } from "react-router-dom";

function Navigation() {
    return (
        <nav className="w-2/3 m-auto">
            <ul className="flex justify-around mt-10">
                <NavLink
                    to="/"
                    className={({ isActive }) =>
                        isActive ? "text-amber-600" : ""
                    }
                    end
                >
                    <li>Home</li>
                </NavLink>

                <NavLink
                    to="/projects"
                    className={({ isActive }) =>
                        isActive ? "text-amber-600" : ""
                    }
                    end
                >
                    <li>Projects</li>
                </NavLink>

                <NavLink
                    to="/aboutme"
                    className={({ isActive }) =>
                        isActive ? "text-amber-600" : ""
                    }
                    end
                >
                    <li>About Me</li>
                </NavLink>
            </ul>
        </nav>
    );
}

export default Navigation;
