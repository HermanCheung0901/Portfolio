"use client"

import { useEffect, useState } from "react";

export default function Footer() {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(()=>{
    setCurrentYear(new Date().getFullYear());
  }, [])

  return <footer id="footer">
     <p>© {currentYear} Herman Cheung</p>
  </footer>
 
}
