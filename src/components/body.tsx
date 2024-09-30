import Image from "next/image";
import ring from "../Images/ring-pc.png";
import ringm from "../Images/ring-mobile.png";

const Body = () => {
  return (
    <div>
      <div className="text-center bg-white hidden md:flex items-center justify-center">
        <Image
          src={ring}
          alt="ring"
          className="w-2/3 md:w-1/2 p-4 mb-10 mt-10 md:mt-0"
        />

        <div className="absolute  right-[0.1rem] top-[10rem] md:right-[8.5rem] md:top-[11.4rem] flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2">
            <a
              className="px-2 py-1 rounded-md text-black font-extralight text-[5px] md:text-[10px] bg-black/10 uppercase link-cover"
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
          <p className="text-black md:text-[16px] text-[5px] text-justify">
            We build software, much of it open source,
            <br /> that aims to advance the frontier of AI
            <br /> for everyone.
          </p>
        </div>

        <div className="absolute right-[0.1rem] bottom-[33rem] md:right-[7.5rem] md:bottom-[3.5rem] flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2">
            <a
              className="px-2 py-1 rounded-md text-black font-extralight text-[5px] md:text-[10px] bg-black/10 uppercase link-cover"
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
          <p className="text-black md:text-[16px] text-[5px] text-justify">
            We work with builders from day zero,
            <br />
            whether you have an idea or want to work on
            <br /> one of ours.
          </p>
        </div>

        <div className="absolute left-[0.9rem] top-[13rem] md:left-[8.8rem] md:top-[21rem] flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2">
            <a
              className="px-2 py-1 rounded-md text-black font-extralight text-[5px] md:text-[10px] bg-black/10 uppercase link-cover"
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
          <p className="text-black md:text-[16px] text-[5px] text-justify">
            Aegean is a research-driven AI
            <br />
            investment firm that funds
            <br /> companies and protocols from their
            <br /> earliest stages.
          </p>
        </div>
      </div>






      <div className=" text-center mt-6 mb-20 bg-white md:hidden flex items-center justify-center">
        <Image
          src={ringm}
          alt="ring"
          className=" w-[100%] md:w-1/2 p-4 mb-10 mt-10 md:mt-0"
        />

        <div className="absolute  left-[4rem] top-[18.3rem] md:right-[8.5rem] md:top-[11.4rem] flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2">
            <a
              className="px-2 py-1 rounded-md text-black font-extralight text-[7px] md:text-[10px] bg-black/10 uppercase link-cover"
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
          
        </div>

        <div className="absolute left-[5.5rem] bottom-[2rem] md:right-[7.5rem] md:bottom-[3.5rem] flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2">
            <a
              className="px-2 py-1 rounded-md text-black font-extralight text-[7px] md:text-[10px] bg-black/10 uppercase link-cover"
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
          <p className="text-black md:text-[16px] text-[10px] text-justify">
            We work with builders from day zero,
            <br />
            whether you have an idea or want to work on
            <br /> one of ours.
          </p>
        </div>

        <div className="absolute right-[3rem] top-[11.2rem] md:left-[8.8rem] md:top-[21rem] flex flex-col gap-2 items-start">
          <div className="flex items-center gap-2">
            <a
              className="px-2 py-1 rounded-md text-black font-extralight text-[7px] md:text-[10px] bg-black/10 uppercase link-cover"
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
          <p className="text-black md:text-[16px] text-[10px] text-justify">
            Aegean is a research-driven AI
            <br />
            investment firm that funds
            <br /> companies and protocols from their
            <br /> earliest stages.
          </p>
        </div>
      </div>
    </div>
  );
};
export default Body;
