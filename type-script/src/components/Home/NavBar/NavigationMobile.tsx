
import NavLinks from "./NavLinks";
import {useState} from "react";
import {RiMenuFill} from 'react-icons/ri';
import {GrFormClose} from 'react-icons/gr';
const Tshirt = require('../../../asets/IconTshirt.png');


const MobileNavigation = () => {
    const [open, setOpen] = useState<boolean>(false)

    // const handleCloseMenu = ():any => {
    //     setOpen(false)
    // }

    return (
        <>
            {open
                ?
                <>
                    <nav className='navigationMobile'>
                        <div className="navigationMobile__top">
                            <img src={Tshirt} className='navigationMobile__tshirt'
                                 alt='T-shirt logo'/>
                            <GrFormClose className='iconCross'
                                         onClick={() => setOpen(!open)}/>
                        </div>
                        <NavLinks setOpen = {setOpen}/>
                    </nav>


                </>


                :
                <nav className='navigationMobile'>
                    <div className="navigationMobile__top">
                        <img src={Tshirt} className='navigationMobile__tshirt'
                             alt='T-shirt logo'/>
                        <RiMenuFill className='iconHamburger'
                                    onClick={() => setOpen(!open)}/>
                    </div>
                </nav>
            }
        </>
    );
}

export default MobileNavigation;