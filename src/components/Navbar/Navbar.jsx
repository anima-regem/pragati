import { useElementSize } from "@mantine/hooks";
import { Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { X } from "lucide-react";

const links = [
  {
    label: "Home",
    url: "/",
  },
  {
    label: "Events",
    url: "/events",
  },
  {
    label: "Guest",
    url: "/",
  },
];

const mobileNavbarVariants = {
  open: {
    x: 0,
    transition: {
      type: "linear",
    },
  },
  closed: {
    x: "100%",
    transition: {
      type: "linear",
    },
  },
};

const Navbar = () => {
  const location = useLocation();
  const navbarSize = useElementSize();
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        ref={navbarSize.ref}
        className="fixed flex justify-between items-center bg-black/30 backdrop-blur-lg w-screen min-h-24 px-10 z-10 lg:rounded-[0_0_2.5rem_2.5rem] lg:px-20"
      >
        <Link to="/">
          <img className="h-14" src="/images/logo.png" alt="logo" />
        </Link>
        <div className="">
          <button
            onClick={() => setIsOpen((prev) => !prev)}
            className="lg:hidden"
          >
            {isOpen ? <X size={40} /> : <Menu size={40} />}
          </button>
          <div className="lg:flex gap-8 hidden">
            {links.map((link) => (
              <LinkItem
                key={link.label}
                label={link.label}
                url={link.url}
                active={location.pathname === link.url}
              />
            ))}

          </div>
        </div>
      </div>
      <motion.div
        variants={mobileNavbarVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="fixed lg:hidden h-screen overflow-y-auto w-screen bg-black/30 z-[9] backdrop-blur-xl"
        style={{
          paddingTop: navbarSize.height,
        }}
      >
        <div className="flex flex-col gap-12 items-center mt-8">
          {links.map((link) => (
            <LinkItem
              key={link.label}
              label={link.label}
              url={link.url}
              active={location.pathname === link.url}
            />
          ))}

          <Link to="/register" className="reg mt-5 ml-5">
            Register Now <i className="fas fa-arrow-right"></i>
          </Link>

        </div>

      </motion.div>
    </>
  );
};

function LinkItem({ label, url, active }) {
  return (
    <Link
      to={url}
      className="text-white font-semibold mx-4 relative text-md w-fit"
    >
      {label}
      {active && (
        <span className="absolute w-1/2 bg-white -bottom-2 h-1 left-1/2 -translate-x-1/2 rounded-[3.125rem]"></span>
      )}
    </Link>
  );
}

export default Navbar;
