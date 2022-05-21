import React from "react";
import messenger from "../img/messenger.svg";
import email from "../img/email.svg";

const Contact = () => {
  return (
    <div className="h-screen bg-grey">
      <div className="pt-20 mx-4 xl:mx-32">
        <div className="relative mb-20 w-44">
          <h2 className="text-3xl xl:text-4xl font-bold">Contact</h2>
          <div className="bg-red w-full opacity-30 h-8 absolute -bottom-5 right-0 blur-sm rounded-md"></div>
        </div>
        <div className="flex w-5/6 gap-x-44">
          <div className="flex flex-col justify-around">
            <div>
              <img src={messenger} alt="messenger" className="h-20"></img>
            </div>
            <div>
              <img src={email} alt="email" className="h-20"></img>
            </div>
          </div>
          <form className="flex flex-col gap-y-10">
            <div className="border-b border-red">
              <input
                type="text"
                className="appearance-none bg-transparent border-none w-full text-grey focus:outline-none"
                placeholder="Name"
              ></input>
            </div>
            <input type="text" className="w-max" placeholder="Email"></input>
            <textarea
              type="text"
              rows="10"
              className="w-36"
              placeholder="Message"
            ></textarea>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
