import Section from "../Wrappers/Section";

const Footer = () => {
  return (
    <footer className="overflow-hidden  bg-neutral-900">
      <Section>
        <div className="flex flex-col  w-full">
          <div className="flex w-full justify-between flex-wrap gap-24">
            <div className="flex flex-col gap-4 ">
              <h3 className="motion-h2">Social links</h3>
              <ul className="flex flex-row gap-4">
                <li className="flex gap-4 rounded-full items-center ">
                  <a
                    href="https://github.com/simonkawaii"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/icons/github-mark-white.svg"
                      className=" w-12 h-12 object-contain"
                      alt="Github-icon"
                    />
                  </a>
                </li>
                <li className="flex gap-4  rounded-full  items-center ">
                  <a
                    href="https://www.linkedin.com/in/szymonkaliczak/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/linkedin-circle.svg"
                      className="object-contain hover:fill-red-400 w-12 h-12"
                      alt="linkedin-icon"
                    />
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 ">
              <h3 className="motion-h2">Contact</h3>
              <ul className="flex flex-row gap-4">
                <li className="flex gap-4 rounded-full items-center ">
                  <a href="mailto:szymonkaliczak@gmail.com">
                    szymonkaliczak@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
