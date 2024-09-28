import Image from "next/image";
import ring from "../Images/ring-pc.png";

const Body = () => {
  return (
    <div className="text-center bg-white flex items-center justify-center">
      <Image src={ring} alt="ring" className="w-1/2 p-4 mb-10" />

      <div className="absolute right-[8.5rem] top-[11.4rem] flex flex-col gap-2 items-start">
        <div className="flex items-center gap-2">
          <a
            className="px-2 py-1 rounded-md text-black font-extralight text-[10px] bg-black/10 uppercase link-cover"
            href="#"
          >
            Open Source
          </a>
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            className="text-black rotate-180"
          >
            <path
              d="M0 3L5 5.88675L5 0.113248L0 3ZM12 2.5L4.5 2.5L4.5 3.5L12 3.5L12 2.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <p className="text-black  text-justify">
          We build software, much of it open source,
          <br /> that aims to advance the frontier of crypto
          <br /> for everyone.
        </p>
      </div>

      <div className="absolute right-[7.5rem] bottom-[3.5rem] flex flex-col gap-2 items-start">
        <div className="flex items-center gap-2">
          <a
            className="px-2 py-1 rounded-md text-black font-extralight text-[10px] bg-black/10 uppercase link-cover"
            href="#"
          >
            Collaborate with us
          </a>
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            className="text-black rotate-180"
          >
            <path
              d="M0 3L5 5.88675L5 0.113248L0 3ZM12 2.5L4.5 2.5L4.5 3.5L12 3.5L12 2.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <p className="text-black  text-justify">
        We work with builders from day zero,<br/>whether you have an idea or want to work on<br/> one of ours.
        </p>
      </div>

      <div className="absolute left-[8.8rem] top-[21rem] flex flex-col gap-2 items-start">
        <div className="flex items-center gap-2">
          <a
            className="px-2 py-1 rounded-md text-black font-extralight text-[10px] bg-black/10 uppercase link-cover"
            href="#"
          >
            About
          </a>
          <svg
            width="12"
            height="6"
            viewBox="0 0 12 6"
            className="text-black rotate-180"
          >
            <path
              d="M0 3L5 5.88675L5 0.113248L0 3ZM12 2.5L4.5 2.5L4.5 3.5L12 3.5L12 2.5Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
        <p className="text-black  text-justify">
        Paradigm is a research-driven crypto<br/>investment firm that funds<br/> companies and protocols from their<br/> earliest stages.
        </p>
      </div>
    </div>
  );
};
export default Body;
