import { FunctionComponent } from "react";
import NavHeader from "./NavHeader";

const AppLayout: FunctionComponent = ({ children }) => {
  return (
    <div className="relative flex flex-col h-screen overflow-hidden bg-gray-600">
      <NavHeader />
      {children}
    </div>
  );
};

export default AppLayout;
