import React from "react";

const Timeline = () => {
  return (
    <div
      className="mx-auto w-full h-full hidden md:flex flex-col items-center mb-[100px]"
      style={{ zIndex: 50 }}
    >
      <div className="text-center z-100 lg:text-[3rem] leading-tight flex flex-col justify-center items-center w-full my-40">
        <h4 className="font-thin w-[60%]">
          Maybe one day all of this will cease to exist, but the message we send
          to the world will always live on.
        </h4>
        <h4 className="font-bold">Undead will never die.</h4>
      </div>
      <div className="relative wrap overflow-hidden p-10 h-full max-w-5xl">
        <YearBlock year="2022" isStartEnd={true} />
        <div
          className="border-2-2 absolute border-black dark:border-white h-full border"
          style={{ left: "50%" }}
        ></div>
        <RightTimelineBlock
          month="AUG"
          content={`Genuine Undead ("GU") PFP project launches and the collection sells out. Volume reaches 2000 ETH, 10,000 followers on Twitter. Project announced as a CC0.`}
        />

        <LeftTimelineBlock
          month="SEP"
          content="The first ever transactional art on the blockchain; Love traded for War; War burned. Founder releases third and final Green Paper. GU Governance model established."
        />
        <RightTimelineBlock
          month="OCT"
          content="Verified on OpenSea. Royalties increased by 2.5%, directed to GU community wallet. GU community website live.  Founder gifts his only GU NFT, the 1/1 Nature, to the community wallet. Volume reaches 6000 ETH, Floor reaches .94 ETH (ATH)"
        />
        <LeftTimelineBlock
          month="NOV"
          content="GU launches the Undead Portal for buying and selling GUs at reduced rates. News and analytics service launched via the @Genuinetimes. "
        />
        <RightTimelineBlock
          month="DEC"
          content="GU Mural painted at Art Basel. GU Resident Artists (@Gimiks, @MarkusManson, @Unicode) produce GU inspired art that takes GU to the next level. GU celebrates its first Christmas. The Watchers launches."
        />
        <YearBlock year="2023" />

        <LeftTimelineBlock
          month="JAN"
          content="GU publishes Governance Guidelines. GU Leadership team doxes. GU compensation proposal approved. Undead Council meets for the 20th time. Lou Corp launches."
        />
        <RightTimelineBlock
          month="FEB"
          content="New website and branding relaunch. The Paperboys launches. FractonX starts investing in GU; over 800 GU would eventually be purchased. 30,000 Followers on Twitter."
        />

        <LeftTimelineBlock
          month="APR"
          content="Undead Council proposes an ambitious roadmap of initiatives, which eventually through community engagement does not progress. GU community develops SVG images of the art to enable on-chain move. GU meets up for NFT NYC."
        />

        <RightTimelineBlock
          month="MAY"
          content="GU launches Genuine Mixtapes. @Boom (former Council Chair) resigns and hands over discord, wallet and access to GU community. Volume reaches 15,000 ETH. Maison leads the community through the transition with his steady and empathetic leadership."
        />

        <LeftTimelineBlock
          month="JUN"
          content="Genuine Times produces first animated short. GU community refocuses efforts. Core GU team rebuilds discords, develops new proposal system and new initiatives start emerging (e.g., CBA, business directory, merch shop). Core GU members step up (e.g, 1hockey, Sandman, etc)"
        />

        <RightTimelineBlock
          month="JUL"
          content="Watcher comic produced. GUNIVERSE production / development progressing. Marketplace launches new features (buy GUs with $FRG). Punks 2023 launches and references GU as the inspiration for art."
        />

        <LeftTimelineBlock
          month="AUG"
          content="GU celebrates a year together.  A year in and, over 95% of the collection has been held for more than a month with one of the most active discord communities in Web 3. GU community widely recognized as the gold standard for welcoming members and being a vibrant Web3 home."
        />
      </div>
      <YearBlock year="To Be Continued" isStartEnd={true} />
    </div>
  );
};

export default Timeline;

const RightTimelineBlock = ({ month, content }) => {
  return (
    <div className="mb-8 flex justify-between items-center w-full right-timeline">
      <div className="order-1 w-6/12"></div>

      <div className="order-1 w-6/12">
        <div className="w-full flex justify-start">
          <h3 className="mb-3 font-bold text-[3rem] font-teko w-full md:w-[40%] border-b-2 border-black dark:border-white mr-6 leading-none text-center">
            {month}
          </h3>
        </div>
        <p className="text-sm leading-snug tracking-wide text-opacity-100 w-[95%] md:w-[85%] text-left md:ml-10">
          {content}
        </p>
      </div>
    </div>
  );
};

const LeftTimelineBlock = ({ month, content }) => {
  return (
    <div className="mb-8 flex justify-between flex-row-reverse items-center w-full left-timeline">
      <div className="order-1 w-6/12"></div>
      <div className="order-1 w-6/12 py-4">
        <div className="w-full flex justify-end">
          <h3 className="mb-3 font-bold text-[3rem] font-teko w-full md:w-[40%] border-b-2 border-black dark:border-white ml-6 leading-none text-center">
            {month}
          </h3>
        </div>
        <p className="text-sm font-medium leading-snug tracking-wide text-opacity-100 w-[95%] md:w-[85%] text-right md:ml-10">
          {content}
        </p>
      </div>
    </div>
  );
};

const YearBlock = ({ year, isStartEnd }) => {
  return (
    <div
      className={`flex justify-between items-center w-full  ${
        !isStartEnd && "mb-8"
      }`}
    >
      <div className="order-1 w-6/12"></div>
      <div className="z-20 flex items-center order-1 min-w-fit dark:bg-white bg-black text-white dark:text-black">
        <h1 className="text-2xl  border border-black dark:border-white font-teko leading-none pt-2 pb-1 px-2">
          {year}
        </h1>
      </div>
      <div className="order-1 w-6/12"></div>
    </div>
  );
};
