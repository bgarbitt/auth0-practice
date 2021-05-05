import { FunctionComponent } from "react";

const MainLayout: FunctionComponent = ({ children }) => {
  return (
    <main className="flex justify-center flex-1 px-4 py-8 pt-4 pb-6 overflow-auto text-sm bg-gray-600">
      <div className="w-full lg:w-5/6 xl:max-w-6xl">{children}</div>
    </main>
  );
};

export default MainLayout;
