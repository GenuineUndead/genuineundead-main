import React, { useState } from "react";
import axios from "axios";
import SEO from "../components/SEO";
import { ClipLoader } from "react-spinners";
import { twitterContact } from "../public/data/TwitterContact";

const contact = () => {
  const [isFormErr, setIsFormErr] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);
    setIsFormErr(false);
    const formData = {};
    Array.from(e.currentTarget).forEach((field) => {
      if (!field.name) return;
      formData[field.name] = field.value;
    });
    if (!validateForm(formData)) {
      console.log("Form Not Valid");
      setIsFormErr(true);
      setIsSending(false);
      return;
    }
    try {
      let data = await axios.post("/api/mail", formData);
      setIsSending(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
      }, 2000);
    } catch (err) {
      setIsSending(false);
      console.log(err);
    }
  };

  const validateForm = (formData) => {
    let valid = true;
    for (const data in formData) {
      if (!formData[data] || formData[data] === "") {
        if (data === "name") {
          if (!formData[data]) {
            return valid;
          }
          valid = false;
        }
      }
    }
    return valid;
  };

  return (
    <>
      <SEO
        title="Contact | Genuine Undead"
        description="Contact page to send email to the admin of Genuine Undead or reach out via twitter."
      />
      <div className="w-full min-h-screen flex flex-col items-center gap-[2rem] mt-[60px] border-b border-black dark:border-white pl-[1.6rem] lg:pl-[3.2rem]">
        <h1 className="font-didot text-[10vw]">
          <i>CONTACT</i> <span className="font-teko text-[11.4vw]">US</span>
        </h1>
        <div className="w-full md:w-[60%] mx-auto">
          <form className="p-8" method="post" onSubmit={handleOnSubmit}>
            <div className="mb-4">
              <label className="block text-[1rem] mb-2" htmlFor="email">
                Email Address*
              </label>
              <input
                className="appearance-none bg-[#f8f8f4] dark:bg-black border border-black dark:border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email"
                autoComplete="email"
              />
            </div>
            {/* FOR BOTS */}
            <div className="mb-4 hidden">
              <label className="block text-[1rem] mb-2" htmlFor="name">
                Name
              </label>
              <input
                className="appearance-none bg-[#f8f8f4] dark:bg-black border border-black dark:border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                name="name"
                placeholder="Enter your name"
              />
            </div>
            {/* END FOR BOTS */}
            <div className="mb-4">
              <label className="block text-[1rem] mb-2" htmlFor="subject">
                Subject*
              </label>
              <input
                className="appearance-none bg-[#f8f8f4] dark:bg-black border border-black dark:border-white rounded w-full py-2 px-3  leading-tight focus:outline-none focus:shadow-outline"
                id="subject"
                type="text"
                name="subject"
                placeholder="Enter the subject"
              />
            </div>
            <div className="mb-4">
              <label className="block text-[1rem] mb-2" htmlFor="message">
                Message*
              </label>
              <textarea
                className="appearance-none bg-[#f8f8f4] dark:bg-black border border-black dark:border-white rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                rows="6"
                name="message"
                placeholder="Enter your message"
              ></textarea>
            </div>
            {isFormErr && (
              <p className="text-red-600 text-[1rem] text-center mb-[15px]">
                Error: Please ensure all fields are filled out
              </p>
            )}
            {isSuccess && (
              <p className="text-green-600 text-[1rem] text-center mb-[15px]">
                Successfully sent email! You should hear back within the next
                24-48 hours
              </p>
            )}
            <div className="flex justify-center items-center">
              <button
                className={`border border-black dark:border-white py-[12px] px-[20px] text-[.9rem] w-[180px] hover:border-[#ff5277] hover:dark:border-[#ff5277] transition-all duration-300`}
                type="submit"
              >
                {isSending ? <ClipLoader color="#FaFafa" size={20} /> : "Send"}
              </button>
            </div>
          </form>
        </div>
        <div className="flex flex-col items-center my-[20px]">
          <h3 className="font-didot text-[6vw]">REACH OUT ON TWITTER</h3>
          <div className="flex flex-col md:flex-row gap-[3.5rem] my-[50px]">
            {twitterContact.map((contact) => {
              return <TwitterContact key={contact.handle} info={contact} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default contact;

const TwitterContact = ({ info }) => {
  return (
    <div className="flex justify-center items-center gap-[1.5rem] max-h-[100px]">
      <a href={info.link} target="_blank" rel="noreferrer noopener">
        <img
          src={info.image}
          alt={info.name}
          className="h-[85px] aspect-square rounded-full"
        />
      </a>
      <div className="flex flex-col justify-center">
        <h6>Title: {info.title}</h6>
        <h6>Handle: {info.handle}</h6>
      </div>
    </div>
  );
};
