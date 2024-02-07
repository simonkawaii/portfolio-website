import { Button } from "../../components/Button/Button";

const Contact = () => {
  return (
    <section className="bg-[#111] border-[1px] border-neutral-800 rounded-none flex   items-center justify-center flex-wrap  ">
      <div className="flex flex-col w-full gap-8 max-w-screen-xl p-8 h-full">
        <div>
          <h2>Contact</h2>
          <p className="text-accent tracking-wider">Let's get linked in!</p>
        </div>
        <form
          action=""
          className="flex [&>div]:w-full h-full justify-center items-center flex-col gap-8"
        >
          <div className="flex flex-col">
            <label
              className="mb-4 border-[1px] border-transparent"
              htmlFor="contact-email"
            >
              Email
            </label>
            <input
              className="px-4 py-8 shadow appearance-none border rounded w-full  bg-transparent leading-tight focus:outline-2 focus:ring-4 focus:ring-purple-500/80"
              id="contact-email"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label
              className="mb-4 border-[1px] border-transparent"
              htmlFor="contact-title"
            >
              Title
            </label>
            <input
              className="px-4 py-8 shadow appearance-none border rounded w-full  bg-transparent leading-tight focus:outline-2 focus:ring-4 focus:ring-purple-500/80"
              id="contact-title"
              type="text"
            />
          </div>
          <div className="flex flex-col">
            <label className="mb-4" htmlFor="contact-message">
              Message
            </label>
            <textarea
              className="px-4 py-8 shadow appearance-none border rounded w-full  bg-transparent leading-tight focus:outline-2  focus:ring-4 focus:ring-purple-500/80"
              name="contact-message"
              id="contact-message"
              cols={30}
              rows={10}
              maxLength={1000}
            ></textarea>
          </div>
          <Button className="my-24">Message Me!</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
