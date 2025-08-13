import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";
import axios from "axios";
import SEO from "../components/SEO";
import { ClipLoader } from "react-spinners";
import { twitterContact } from "../public/data/TwitterContact";
import { useTheme } from "next-themes";
import { IconContext } from "react-icons";

const seoDesc =
  "Genuine Undead contact us. If you need to contact Genuine Undead for a collaboration, further information or any other reason then do not hesitate to contact us through the inbuilt contact for, or via our social profiles. ";

const inputClass =
  "appearance-none placeholder-text-[1.5rem] md:placeholder-text-[2rem]  text-[1.5rem] md:text-[2rem] placeholder-[#191917] dark:placeholder-[#f8f8f4] bg-[#f8f8f4] dark:bg-[#191917] border-b border-black dark:border-white  w-full py-2 leading-tight focus:outline-none focus:shadow-outline";

const contact = () => {
  const router = useRouter();
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

  useEffect(() => {
    logPageView({ page: router.pathname, title: "Contact" });
  }, []);

  return (
    <>
      <SEO
        title="Contact | Genuine Undead"
        description={seoDesc}
        path="contact"
      />
      <div className="w-full min-h-full flex flex-col items-center gap-[2rem] mt-[60px] border-b border-black dark:border-white">
        <h1 className="font-didot text-[10vw]">
          <span className="font-teko text-[11.4vw]">CONT</span>
          <i>ACT</i>
        </h1>
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-col  mb-[50px] lg:mb-[100px]">
            <div className="w-[90%] md:w-[50%] md:mx-auto">
              <form
                className="p-8 w-full md:w-[80%] mx-auto flex flex-col gap-[1.25rem]"
                method="post"
                onSubmit={handleOnSubmit}
              >
                <div className="mb-4">
                  <input
                    className={inputClass}
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    autoComplete="email"
                  />
                </div>
                {/* FOR BOTS */}
                <div className="mb-4 hidden">
                  <label className="block text-[1rem] mb-2" htmlFor="name">
                    Name
                  </label>
                  <input
                    className={inputClass}
                    id="name"
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                  />
                </div>
                {/* END FOR BOTS */}
                <div className="mb-4">
                  <input
                    className={inputClass}
                    id="subject"
                    type="text"
                    name="subject"
                    placeholder="Subject"
                  />
                </div>
                <div className="mb-4">
                  <textarea
                    className={inputClass}
                    id="message"
                    rows="6"
                    name="message"
                    placeholder="Message"
                  ></textarea>
                </div>
                <div className="flex flex-col md:flex-row items-center md:justify-between gap-2 w-full">
                  <div className="flex flex-col justify-center items-start gap-[.5rem] h-full ">
                    <button
                      className={`border border-black dark:border-white py-[12px] px-[20px] text-[.9rem] w-[180px] hover:border-[#ff5277] hover:dark:border-[#ff5277] rounded-full transition-all duration-300`}
                      type="submit"
                    >
                      {isSending ? (
                        <ClipLoader color="#FaFafa" size={20} />
                      ) : (
                        "Send Message"
                      )}
                    </button>
                    {isFormErr && (
                      <p className="text-[#ff5277] text-[1rem] text-center mb-[15px]">
                        Error: Please ensure all fields are filled out
                      </p>
                    )}
                    {isSuccess && (
                      <p className="text-[1rem] text-center mb-[15px]">
                        THANKS - your message has been sent!
                      </p>
                    )}
                  </div>
                  <div>
                    <a
                      href="https://forms.gle/ARUiWrsgsYM4yUgE7"
                      target="_blank"
                      className="hover:text-[#ff5277] cursor-pointer"
                    >
                      Make a Proposal
                    </a>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="md:w-full h-[300px] bg-[url('/born-undead.jpeg')] bg-center bg-cover relative overflow-hidden flex justify-center "></div>
        </div>
      </div>
    </>
  );
};

export default contact;

const TwitterContact = ({ info }) => {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(null);

  useEffect(() => {
    setMounted(true);
    if (mounted) {
      setCurrentTheme(theme === "system" ? systemTheme : theme);
    }
  }, [mounted]);

  useEffect(() => {
    setCurrentTheme(theme);
  }, [theme]);
  return (
    <IconContext.Provider
      value={{
        color: theme === "dark" ? "#f8f8f4" : "#191917",
        size: "1.2rem",
        className: "icons",
      }}
    >
      <div className="flex justify-center items-center">
        <img
          src={info.image}
          alt={info.name}
          className="h-[132px] aspect-square rounded-full mr-[25px]"
        />
        <div className="flex flex-col justify-center w-full">
          <h6 className="text-[1.5rem] md:text-[2rem]">{info.handle}</h6>
          <h6 className="text-[.8rem] md:text-[1rem]">
            {info.title.toUpperCase()}
          </h6>
          <div className="flex flex-col gap-[.5rem]">
            <a
              href={info.twitter}
              target="_blank"
              rel="noreferrer noopener"
              className="hover:text-[#ff5277] hover:dark:text-[#ff5277] text-[.8rem] md:text-[1rem]"
            >
              {" "}
              Twitter
            </a>
          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
};
