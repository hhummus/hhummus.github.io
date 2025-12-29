import * as React from "react";
import { homepageNavigation } from "../../pages/landingPage/navigationArray";
import { Link } from "react-router-dom";
import { Cross as Hamburger } from "hamburger-react";
import { useState } from "react";

const navRoutes = homepageNavigation;

const MobileNav = () => {
    // determine if nav is open / close
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    // setting types to be expected 
    interface ItemObjects {
        title: string,
        id: number,
        link: string
    }

    return (
        <div className="row">
            <div className="col-8">
                <Link to="/" className="brandIcon">Hasla-Løkkeberg Agentur</Link>
            </div>
            <div className="col-4 burgerMenu"> 
                <button onClick={toggleMenu} className=""><Hamburger/></button>
            </div>
            {isOpen && 
            <div className= {`row dropDownNav ${isOpen ? 'open' : ''}`} >
                <div className="navDropdownDivider"></div>
                    <div className="col globalNav mobileNav">
                        {navRoutes.map((link:ItemObjects) => {
                        const links = "/" + link.link;
                            return (
                                <Link to={links} key={link.id}>
                                    {link.title}
                                </Link>
                            );
                        })}     
                    </div>
                </div>
            } 
        </div>
    );
};

export default MobileNav;