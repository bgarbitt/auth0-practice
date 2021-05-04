import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";

const LogoutButton: FunctionComponent = () => {
  const { logout } = useAuth0();

  return (
    <button
      className="inline-block px-4 py-3 rounded-lg leading-none text-sm font-medium text-gray-300 ml-2 hover:bg-gray-700"
      onClick={() => logout({ returnTo: window.location.origin })}
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
