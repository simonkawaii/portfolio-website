import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
const links = [
  {
    label: "Home",
    url: "",
  },
  {
    label: "About",
    url: "#about",
  },
  {
    label: "Skills",
    url: "#skills",
  },
  {
    label: "Portfolio",
    url: "#portfolio",
  },
  {
    label: "Contact",
    url: "#contact",
  },
];

const MenuLinks = () => {
  const { hash } = useLocation();

  const renderLinks = links.map(({ label, url }, index) => {
    return (
      <Link
        className={`${hash === url ? "text-accent" : "text-white"} 
          duration-200 hover:text-accent  contrast-125
          `}
        key={`${label}-${index}`}
        to={url}
      >
        {label}
      </Link>
    );
  });

  return <>{renderLinks}</>;
};

export default MenuLinks;
