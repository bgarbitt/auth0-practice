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
      <div className="px-4 py-3">
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
