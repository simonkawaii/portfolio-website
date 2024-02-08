import { Dispatch, useEffect } from "react";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";
const links = [
  {
    label: "home",
    url: "",
  },
  {
    label: "about",
    url: "#about",
  },
  {
    label: "skills",
    url: "#skills",
  },
  {
    label: "portfolio",
    url: "#portfolio",
  },
  {
    label: "contact",
    url: "#contact",
  },
];

const MenuLinks = ({
  activeLink,
  setActiveLink,
}: {
  activeLink: string;
  setActiveLink: Dispatch<string>;
}) => {
  // const { hash } = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const sections = links.map((e) => e.label);

      sections.forEach((sectionId) => {
        const sectionRef = document.getElementById(sectionId);
        if (sectionRef) {
          const { top, bottom } = sectionRef.getBoundingClientRect();
          const isInViewport = top >= 0 && bottom <= window.innerHeight;

          if (isInViewport) {
            if (sectionId === "home") {
              setActiveLink(``);
            } else {
              setActiveLink(`#${sectionId}`);
            }
          }
        }
      });
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderLinks = links.map(({ label, url }, index) => {
    return (
      <Link
        className={`${url === activeLink ? "text-accent" : "text-white"} 
          duration-200 hover:text-accent capitalize contrast-125
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
