import { useAuth0 } from "@auth0/auth0-react";
import { FunctionComponent } from "react";

const LoginButton: FunctionComponent = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      className="inline-block px-4 py-3 rounded-lg leading-none text-sm font-medium text-gray-300 ml-2 hover:bg-gray-700"
      onClick={() => loginWithRedirect()}
    >
      Log In
    </button>
  );
};

export default LoginButton;
