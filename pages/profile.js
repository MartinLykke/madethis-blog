import Router from "next/router";
import { LogOut } from "react-feather";

const profile = () => {
  const logout = (e) => {
    e.preventDefault();
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    if (typeof window !== "undefined") {
      Router.push("/");
    }
  };

  const firstname =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;
  return (
    <div>
      {firstname && (
        <div className="container text-center container w-50">
          <h1 className="mt-5">Hi {localStorage.getItem("username")}</h1>
          <h4>Logged in as: {localStorage.getItem("email")}</h4>
          <button
            onClick={logout}
            className="btn btn-danger mt-4 rounded-pill w-50"
          >
            Log out <LogOut size={18} />
          </button>
        </div>
      )}
    </div>
  );
};

export default profile;
