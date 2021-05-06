import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Logo from "./Owl_Sector_logo.png";

const NavHeader: FunctionComponent = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  return (
    <header className="flex justify-between items-center bg-gray-800">
      <div>
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-16 h-16 hover:bg-gray-700" />
        </Link>
      </div>
      <div className="grid grid-cols-2 px-4 py-3">
        <Link
          to="/profile"
          className="inline-block px-4 py-3 rounded-lg leading-none text-sm font-medium text-gray-300 ml-2 hover:bg-gray-700"
        >
          Profile
        </Link>
        {isLoading ? null : isAuthenticated ? (
          <LogoutButton />
        ) : (
          <LoginButton />
        )}
      </div>
    </header>
  );
};

export default NavHeader;
