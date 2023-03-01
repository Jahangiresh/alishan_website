import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import { Link } from "react-router-dom";
import { FiMenu } from "react-icons/fi";
import { RxCross2 } from "react-icons/rx";
import AnchorLink from "react-anchor-link-smooth-scroll";
export default function MenuDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      className="menudrawer"
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="menu__header">
        <RxCross2 className="menu__header__x" />
      </div>
      <ul className="menu__ul">
        <li className="menu__ul__li">
          <AnchorLink className="default-link" offset="100" href="#main">
            Ana səhifə
          </AnchorLink>
        </li>
        <li className="menu__ul__li">
          <AnchorLink className="default-link" offset="100" href="#about">
            Haqqımızda
          </AnchorLink>
        </li>
        <li className="menu__ul__li">
          <AnchorLink className="default-link" offset="100" href="#activity">
            Fəaliyyətimiz
          </AnchorLink>
        </li>
        <li className="menu__ul__li">
          <AnchorLink className="default-link" offset="100" href="#contact">
            Əlaqə
          </AnchorLink>
        </li>
      </ul>
      <hr />
      <ul className="menu__ul">
        <li className="menu__ul__li">Azərbaycan</li>
        <li className="menu__ul__li">English</li>
      </ul>
    </Box>
  );

  return (
    <div>
      {["top"].map((anchor) => (
        <React.Fragment key={anchor}>
          <FiMenu onClick={toggleDrawer(anchor, true)} />

          {/* <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button> */}
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
