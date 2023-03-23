import React, { useEffect, useState } from "react";
import TekoHeading from "../../TekoHeading";
import MainButton from "../../MainButton";
import Image from "next/image";

const PFP = () => {
  const [ids, setIds] = useState([]);
  useEffect(() => {
    let randomIds = [];
    for (let i = 0; i < 21; i++) {
      randomIds.push(Math.floor(Math.random() * 10000) + 1);
    }
    setIds(randomIds);
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row border-b border-black dark:border-white px-[1.6rem] lg:px-0">
      <div className="min-h-[50%] w-full lg:max-h-screen flex justify-center items-center flex-1 overflow-y-hidden py-[50px] lg:py-0">
        <div className="grid grid-cols-3 gap-[2rem] w-[80%] lg:w-[60%]">
          {ids?.map((id) => {
            return <GUImage key={id} id={id} />;
          })}
        </div>
      </div>
      <div className="min-h-[50%] w-full lg:min-h-screen flex flex-col justify-center items-center flex-1 community-txt-container relative overflow-y-hidden">
        <div className="flex flex-col gap-[2.5rem] w-full lg:w-[60%] pb-[50px] lg:py-0">
          <h2
            className={`text-[2.3rem] md:text-[3rem] lg:text-[4.0rem] xl:text-[4.5rem] xxl:text-[5.5rem] leading-none font-didot flex flex-col `}
          >
            {" "}
            <span className="whitespace-nowrap z-10">
              THE BEST <TekoHeading>PFP</TekoHeading>
            </span>
          </h2>
          <p className="text-[1rem] leading-6 ">
            Surprisingly detailed when condensed, GU art is a testament to both
            the skill and efficiency of operating within the constraints of a
            24*24 pixel format. Where other PFPs lose their detail, GU gains
            detail when you zoom out. Because of this optical illusion, Genuine
            Undead PFPs are strikingly recognizable on social platforms such as
            Twitter, Instagram and Discord.
          </p>
          <MainButton page={true} styles=" mb-0">
            MARKETPLACE
          </MainButton>
        </div>
      </div>
    </section>
  );
};

export default PFP;

const GUImage = ({ id }) => {
  const [isOverlay, setIsOverlay] = useState(false);
  return (
    <div className="relative cursor-pointer flex justify-center items-center">
      <div
        className={`w-full aspect-square rounded-full bg-center bg-contain z-1 relative transition-all duration-300 overflow-hidden ${
          isOverlay ? "" : ""
        }`}
        style={
          {
            // backgroundImage: `url(https://fafz.mypinata.cloud/ipfs/QmVUgP9fnFh9R6HF3eMP3ro2fxvv76fQsrBud7yyPDAMdQ/${id}.png)`,
            // backgroundImage: `url(https://ipfs.io/ipfs/QmVUgP9fnFh9R6HF3eMP3ro2fxvv76fQsrBud7yyPDAMdQ/${id}.png)`,
          }
        }
        onMouseEnter={() => {
          setIsOverlay(!isOverlay);
        }}
      >
        <Image
          src={`https://ipfs.io/ipfs/QmVUgP9fnFh9R6HF3eMP3ro2fxvv76fQsrBud7yyPDAMdQ/${id}.png`}
          alt={`GU ${id}`}
          priority
          fill
        />
        {isOverlay && (
          <div
            onMouseLeave={() => setIsOverlay(!isOverlay)}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center transition-all duration-300 z-10 inset-0 bg-opacity-75 bg-[#191917] rounded-full"
            onClick={() => {
              window.open(
                `https://portal.genuineundead.io/collections/0x209e639a0ec166ac7a1a4ba41968fa967db30221/tokens/${id}`,
                "_blank"
              );
            }}
          >
            <img src="/plus.svg" alt="plus" className="h-[25%] aspect-square" />
          </div>
        )}
      </div>
    </div>
  );
};
