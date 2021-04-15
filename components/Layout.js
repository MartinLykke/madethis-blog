import Navb from "./Nav";
import Meta from "./Meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />

      <div className="container">
        <Navb />
        <div>{children}</div>
      </div>
    </>
  );
};

export default Layout;
