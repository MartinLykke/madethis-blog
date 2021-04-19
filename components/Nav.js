import Link from "next/link";
import navStyles from "../styles/Nav.module.css";
import Image from "next/image";
import { Navbar, Nav } from "react-bootstrap";
import { Mail, User } from "react-feather";
const Navb = () => {
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
          <a class="btn btn-sm btn-outline-primary " href="/signup">
            <User />
            Sign up
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navb;
