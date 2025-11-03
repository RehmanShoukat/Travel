import React from 'react'
import Routes from "./pages/Routes"
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
   AOS.init({
          duration: 1500, // 1.5 seconds
          easing: "ease-in-out", // smoother curve
          once: true, // sirf ek baar animation chalay
      });
  return (
    <>
      <Routes/>
    </>
  )
}

export default App
