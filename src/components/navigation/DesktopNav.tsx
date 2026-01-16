import { useState } from "react";
import { homepageNavigation } from "../../data/navigationArray";
import { Link } from "react-router-dom";

const primaryLinks = homepageNavigation.filter((item) => item.primary);
const secondaryLinks = homepageNavigation.filter((item) => !item.primary);

// setting types to be expected 
interface ItemObjects {
    title: string,
    id: number,
    link: string
  };

// desktop nav menu 
const DesktopNav = () => {
    const [isMoreOpen, setIsMoreOpen] = useState(false);
    const toggleMoreMenu = () => {
        setIsMoreOpen((prev) => !prev);
    };

    return (
        <>
        <div className="row">
        <div className="col-3">
        <Link to="/" className="brandIcon">Hasla-Løkkeberg Agentur </Link>
        </div>
        <div className="col-9 globalNav desktopNav">
          <div className="desktopNavPrimary">
            {primaryLinks.map((link:ItemObjects) => {
              const links = "/" + link.link;
              return (
                <Link to={links} key={link.id}>
                  {link.title}
                </Link>
              );
            })}
            {secondaryLinks.length > 0 && (
              <button
                type="button"
                className="navMoreButton"
                onClick={toggleMoreMenu}
                aria-expanded={isMoreOpen}
                aria-haspopup="true"
              >
                Mer
              </button>
            )}
          </div>
        </div>
      </div>
        {isMoreOpen && secondaryLinks.length > 0 && (
          <div className="row">
            <div className="col-12 globalNav desktopNavSecondary">
              {secondaryLinks.map((link: ItemObjects) => {
                const links = "/" + link.link;
                return (
                  <Link to={links} key={link.id}>
                    {link.title}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
        </>
    )               
};

export default DesktopNav;
