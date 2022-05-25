import React from "react";
import messenger from "../img/messenger.png";
import email from "../img/email-white.png";

const Contact = () => {
  return (
    <div className="h-screen bg-grey bg-contact">
      <div className="pt-20 mx-4 xl:mx-32">
        <div className="relative mb-20">
          <h2 className="text-3xl xl:text-4xl font-bold">
            Contact
            <p className="inline-block text-lg italic">&nbsp;Got a question?</p>
          </h2>
          <div className="bg-red w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
        </div>
        <form className="flex flex-col gap-y-8 w-3/5">
          <div>
            <input
              type="text"
              className="appearance-none border-none rounded-md w-full text-black focus:outline-none"
              placeholder="Name"
            ></input>
          </div>
          <div>
            <input
              type="text"
              className="appearance-none border-none rounded-md w-full text-black focus:outline-none"
              placeholder="Email"
            ></input>
          </div>
          <textarea
            type="text"
            rows="8"
            className="w-full border-none rounded-md text-black focus:outline-none"
            placeholder="Message"
          ></textarea>
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-lightblue text-lg shadow-md w-1/3 h-1/2 my-auto p-2 rounded-md hover:border hover:border-darkblue"
            >
              Send Message
            </button>
            <div className="flex gap-x-6">
              <div>
                <p>Messenger</p>
                <a
                  href="https://m.me/russ.salonen"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={messenger}
                    alt="messenger"
                    className="h-20 transition-transform hover:scale-125"
                  ></img>
                </a>
              </div>
              <div>
                <p className="text-center mb-3">Email&nbsp;</p>
                <a href="mailto:russ.salonen@gmail.com">
                  <img
                    src={email}
                    alt="email"
                    className="h-12 transition-transform hover:scale-125"
                  ></img>
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
