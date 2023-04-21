// import { useState } from 'react'

import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types";
import Home from "./scenes/home";
import Navbar from "./scenes/navbar";
import Benefit from "./scenes/benefits";
import OurClasses from '@/scenes/ourClasses'




function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home);
      }
      if ( window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll" , handleScroll);
    return () => window.removeEventListener("scroll" , handleScroll)
  }, []);

  return (
    <div className="App bg-gray-200">

      <Navbar 
      isTopOfPage ={isTopOfPage}
      selectedPage={selectedPage} 
      setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage}/>
      <Benefit setSelectedPage={setSelectedPage}/>
      <OurClasses setSelectedPage={setSelectedPage}/>


    </div>
  )
}

export default App
