import Sidebar from "./Sidebar";
import Topbar from "./Topbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-[#ffffff] h-[100vh]">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="p-6">{children}</main>
      </div>
    </div>
  );
};

export default Layout;