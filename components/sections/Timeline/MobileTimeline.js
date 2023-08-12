const MobileTimeline = () => {
  return (
    <div
      className="mx-auto w-full h-full flex flex-col items-center mb-[100px] md:hidden"
      style={{ zIndex: 50 }}
    >
      <div className="text-center z-100 text-[1.5rem] leading-tight flex flex-col justify-center items-center w-full my-40">
        <h4 className="font-thin w-[80%]">
          Maybe one day all of this will cease to exist, but the message we send
          to the world will always live on.
        </h4>
        <h4 className="font-bold">Undead will never die.</h4>
      </div>
      <div className="relative wrap overflow-hidden p-10 h-full flex flex-col items-center justify-center max-w-5xl">
        <YearBlock year="2022" isStartEnd={true} />
        <ContentBlock
          month="AUG"
          content={`Genuine Undead ("GU") PFP project launches and the collection sells out. Volume reaches 2000 Eth, 10,000 followers on Twitter. Project announced as a CC0.`}
        />

        <ContentBlock
          month="SEP"
          content="The first ever transactional art on the blockchain; Love traded for War; War burned. Founder releases third and final Green Paper. GU Governance model established."
        />
        <ContentBlock
          month="OCT"
          content="Verified on OpenSea. Royalties increased by 2.5%, directed to GU community wallet. GU community website live.  Founder gifts his only GU NFT, the 1/1 Nature, to the community wallet. Volume reaches 6000 Ξ, Floor reaches .94Eth (ATH)"
        />
        <ContentBlock
          month="NOV"
          content="GU launches the Undead Portal for buying and selling GUs at reduced rates. News and analytics service launched via the @Genuinetimes. "
        />
        <ContentBlock
          month="DEC"
          content="GU Mural painted at Art Basel. GU Resident Artists (@Gimiks, @MarkusManson, @Unicode) produce GU inspired art that takes GU to the next level. GU celebrates its first Christmas. The Watchers launches."
        />
        <YearBlock year="2023" />

        <ContentBlock
          month="JAN"
          content="GU publishes Governance Guidelines. GU Leadership team doxes. GU compensation proposal approved. Undead Council meets for the 20th time. Lou Corp launches."
        />
        <ContentBlock
          month="FEB"
          content="New website and branding relaunch. The Paperboys launches. FractonX starts investing in GU; over 800 GU would eventually be purchased. 30,000 Followers on Twitter."
        />
        <ContentBlock
          month="APR"
          content="Undead Council proposes an ambitious roadmap of initiatives, which eventually through community engagement does not progress. GU community develops SVG images of the art to enable on-chain move. GU meets up for NFT NYC."
        />
        <ContentBlock
          month="MAY"
          content="GU launches Genuine Mixtapes. @Boom (former Council Chair) resigns and hands over discord, wallet and access to GU community. Volume reaches 15,000 ETH. Maison leads the community through the transition with his steady and empathetic leadership."
        />
        <ContentBlock
          month="JUN"
          content="Genuine Times produces first animated short. GU community refocuses efforts. Core GU team rebuilds discords, develops new proposal system and new initiatives start emerging (e.g., CBA, business directory, merch shop). Core GU members step up (e.g, 1hockey, Sandman, etc)"
        />

        <ContentBlock
          month="JUL"
          content=" Watcher comic produced. GUNIVERSE production / development progressing. Marketplace launches new features (buy GUs with $FRG). Punks 2023 launches and references GU as the inspiration for art."
        />
        <ContentBlock
          month="AUG"
          content="GU celebrates a year together.  A year in and, over 95% of the collection has been held for more than a month with one of the most active discord communities in Web 3. GU community widely recognized as the gold standard for welcoming members and being a vibrant Web3 home."
        />
      </div>
      <YearBlock year="To Be Continued" />
    </div>
  );
};

export default MobileTimeline;

const ContentBlock = ({ month, content }) => {
  return (
    <div className="mb-8 flex justify-between flex-col items-center w-full">
      <div className="w-[90%] py-4">
        <div className="w-full ">
          <h3 className="mb-3 font-bold text-[3rem] font-teko w-full leading-none text-center">
            {month}
          </h3>
        </div>
        <p className="text-sm font-medium leading-snug tracking-wide text-opacity-100 w-[95%] text-center md:ml-10">
          {content}
        </p>
      </div>
    </div>
  );
};

const YearBlock = ({ year }) => {
  return (
    <div className={`flex justify-center items-center w-full my-8`}>
      <div className="z-20 flex items-center min-w-fit dark:bg-white bg-black text-white dark:text-black">
        <h1 className="text-2xl  border border-black dark:border-white font-teko font-bold leading-none pt-2 pb-1 px-2">
          {year}
        </h1>
      </div>
    </div>
  );
};
