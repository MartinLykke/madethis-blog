import navStyles from "../styles/Nav.module.css";
import { Mail, User } from "react-feather";
import { useContext, useEffect, useState } from "react";
import { LoginContext } from "../contexts/LoginContext";
import ProfileBtn from "./ProfileBtn";
const Navb = () => {
  const firstname =
    typeof window !== "undefined" ? localStorage.getItem("username") : null;
  const [loginInfo] = useContext(LoginContext);

  console.log("Navbar");
  console.log(loginInfo);
  return (
    <header className={navStyles.blogheader + "  py-3"} class="">
      <div class="row flex-nowrap justify-content-between align-items-center">
        <div class="col-3 pt-1">
          <a className="link-primary text-decoration-none" href="/subscribe">
            Subscribe <Mail size={18} />
          </a>
        </div>
        <div class="col-6 text-center">
          <a className={navStyles.blogheaderlogo + " text-dark"} href="/">
            Martin
            <img src="/logoLong.JPG" alt="Logo" className=" img-fluid"></img>
            Blog{" "}
          </a>
        </div>
        <div class="col-3 d-flex justify-content-end">
          {firstname && <ProfileBtn firstname={firstname} />}
          {!firstname && (
            <a class="btn btn-sm btn-outline-primary " href="/signup">
              <User /> Sign up
            </a>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navb;
