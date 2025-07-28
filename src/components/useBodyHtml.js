import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export const useBodyHtml = () => {
  const location = useLocation();
  const className = "scroll-hidden-body";

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;
    console.log(html.style);
    

    if (location.pathname === "/") {
      html.classList.add(className);
      body.classList.add(className);
    } else {
      html.classList.remove(className);
      body.classList.remove(className);
    }

    return () => {
      html.classList.remove(className);
      body.classList.remove(className);
    };
  }, []);
};
