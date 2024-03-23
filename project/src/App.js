import { Route, Routes, useLocation, useNavigate } from "react-router";
import Log from "./log";
import SingUp from "./singUp";
import Links from "./links";
import Home from "./home";
import Nav from "./nav";
import { useEffect, useState } from "react";

import One from "./one";
import Footer from "./footer";
import Chats4a from "./chats4a";
import TestChat from "./testChat";

export default function App() {
  const [isShow, seIsTShow] = useState();
  const [isLink, setIsLink] = useState();
  const location = useLocation();
  // const nav = useNavigate();
  // useEffect(() => {
  //   if (!localStorage.getItem("token")) {
  //     nav("/");
  //   }
  // });
  useEffect(() => {
    if (location.pathname !== "/" && location.pathname !== "/singUp") {
      seIsTShow(true);
    } else {
      seIsTShow(false);
    }
    if (location.pathname === "/" || location.pathname === "/singUp") {
      setIsLink(true);
    } else {
      setIsLink(false);
    }
  }, [location]);

  return (
    <div>
      {isLink && <Links />}
      {isShow && <Nav />}

      <Routes>
       
        <Route path="testChat" element={<TestChat />} />
        <Route path="/" element={<Log />} />
        <Route path="singUp" element={<SingUp />} />
        <Route path="home" exact element={<Home />} />
        <Route path="one" element={<One />} />
        <Route path="Chat-S4A" element={<Chats4a />} />
      </Routes>
      {isShow && <Footer />}
    </div>
  );
}
