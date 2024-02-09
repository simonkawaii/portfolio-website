const Card = () => {
  return (
    <div className="flex w-full max-w-[350px] overflow-hidden flex-col   gap-4">
      <div className="w-full  border-b-[1px] rounded-xl border-neutral-800 h-[15rem] relative m-auto overflow-hidden">
        {/* <div className="absolute inset-0 mix-blend-overlay bg-black/30 content-[''] w-full h-full"></div> */}
        <img
          src="/icons/jobcloudss.webp"
          className="object-cover w-full h-full"
          alt="jobcloudss"
          rel="preload"
          decoding="async"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <p>Name</p>
        <p>desc</p>
        <p>Tech tags</p>
      </div>
    </div>
  );
};

export default Card;
