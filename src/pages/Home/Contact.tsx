import { Button } from "../../components/Button/Button";

const Contact = () => {
  return (
    <section
      id="contact"
      className="bg-black border-y-[1px]  border-neutral-800 rounded-none flex   items-center justify-center flex-wrap p-8 py-[7rem]  "
    >
      <div className="flex flex-col w-full gap-24 max-w-screen-xl h-full">
        <div>
          <h2>Contact</h2>
          <p className="text-secondary tracking-wider">
            Let's work together and create something extraordinary!
          </p>
        </div>
        <form
          action=""
          className="flex [&>div]:w-full h-full justify-center items-center flex-col gap-8"
        >
          <div className="flex flex-col">
            <label
              className="mb-4 font-code text-neutral-400 border-[1px] border-transparent"
              htmlFor="contact-email"
            >
              Email
            </label>
            <input
              className=" py-4  appearance-none font-code text-3xl border-b border-neutral-800 rounded w-full  bg-transparent leading-tight focus:outline-none  focus:border-accent-opposite"
              id="contact-email"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="mb-4 font-code text-neutral-400 border-[1px] border-transparent"
              htmlFor="contact-title"
            >
              Title
            </label>
            <input
              className=" py-4  appearance-none font-code text-3xl border-b border-neutral-800 rounded w-full  bg-transparent leading-tight focus:outline-none  focus:border-accent-opposite"
              id="contact-title"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="mb-4 font-code text-neutral-400 "
              htmlFor="contact-message"
            >
              Message
            </label>
            <textarea
              className=" py-4  appearance-none font-code text-3xl border-b border-neutral-800 rounded w-full  bg-transparent leading-tight  
              focus:outline-none  focus:border-accent-opposite"
              name="contact-message"
              id="contact-message"
              cols={30}
              rows={10}
              maxLength={1000}
            ></textarea>
          </div>
          <Button size={"bold"} variant={"secondary"} className="mt-24">
            Message Me!
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
