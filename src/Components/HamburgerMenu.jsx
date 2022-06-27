import{ React, useState } from 'react'
import { Spiral as Hamburger } from 'hamburger-react'
import "../Hamburger.css";
function HamburgerMenu() {
    const [isOpen, setOpen] = useState(false)

  return (
    <div className="hamburgerMenu" >
        <Hamburger toggled={isOpen} toggle={setOpen} size={27} distance="lg"    /> 
    </div>
  )
}
export default HamburgerMenu;
