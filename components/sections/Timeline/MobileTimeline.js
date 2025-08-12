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
      <div className="relative wrap overflow-hidden pt-10 h-full flex flex-col items-center justify-center max-w-5xl">
        <YearBlock year="2022" isStartEnd={true} />
        <Divider />
        <ContentBlock
          month="AUG"
          content={`Genuine Undead ("GU") PFP project launches and the collection sells out. Volume reaches 2000 ETH, 10,000 followers on Twitter. Project announced as a CC0.`}
        />
        <Divider />

        <ContentBlock
          month="SEP"
          content="The first ever transactional art on the blockchain; Love traded for War; War burned. Founder releases third and final Green Paper. GU Governance model established."
        />
        <Divider />

        <ContentBlock
          month="OCT"
          content="Verified on OpenSea. Royalties increased by 2.5%, directed to GU community wallet. GU community website live.  Founder gifts his only GU NFT, the 1/1 Nature, to the community wallet. Volume reaches 6000 ETH, Floor reaches .94 ETH (ATH)"
        />
        <Divider />

        <ContentBlock
          month="NOV"
          content="GU launches the Undead Portal for buying and selling GUs at reduced rates. News and analytics service launched via the @Genuinetimes. "
        />
        <Divider />

        <ContentBlock
          month="DEC"
          content="GU Mural painted at Art Basel. GU Resident Artists (@Gimiks, @MarkusManson, @Unicode) produce GU inspired art that takes GU to the next level. GU celebrates its first Christmas. The Watchers launches."
        />
        <Divider />

        <YearBlock year="2023" />
        <Divider />

        <ContentBlock
          month="JAN"
          content="GU publishes Governance Guidelines. GU Leadership team doxes. GU compensation proposal approved. Undead Council meets for the 20th time. Lou Corp launches."
        />
        <Divider />

        <ContentBlock
          month="FEB"
          content="New website and branding relaunch. The Paperboys launches. FractonX starts investing in GU; over 800 GU would eventually be purchased. 30,000 Followers on Twitter."
        />
        <Divider />

        <ContentBlock
          month="APR"
          content="Undead Council proposes an ambitious roadmap of initiatives, which eventually through community engagement does not progress. GU community develops SVG images of the art to enable on-chain move. GU meets up for NFT NYC."
        />
        <Divider />

        <ContentBlock
          month="MAY"
          content="GU launches Genuine Mixtapes. @Boom (former Council Chair) resigns and hands over discord, wallet and access to GU community. Volume reaches 15,000 ETH. Maison leads the community through the transition with his steady and empathetic leadership."
        />
        <Divider />

        <ContentBlock
          month="JUN"
          content="Genuine Times produces first animated short. GU community refocuses efforts. Core GU team rebuilds discords, develops new proposal system and new initiatives start emerging (e.g., CBA, business directory, merch shop). Core GU members step up (e.g, 1hockey, Sandman, etc)"
        />
        <Divider />

        <ContentBlock
          month="JUL"
          content=" Watcher comic produced. GUNIVERSE production / development progressing. Marketplace launches new features (buy GUs with $FRG). Punks 2023 launches and references GU as the inspiration for art."
        />
        <Divider />

        <ContentBlock
          month="AUG"
          content="GU celebrates a year together.  A year in and, over 95% of the collection has been held for more than a month with one of the most active discord communities in Web 3. GU community widely recognized as the gold standard for welcoming members and being a vibrant Web3 home."
        />
        <Divider />

        <ContentBlock
          month="DEC"
          content="1hockeynut announces that the CBA (Community Business Associates) have created a legal entity to protect and hold the Genuine Undead trademarks. Genuine Undead Holding Inc. registered in Delaware, USA. And the Genuine Art Foundation, Inc., a non-profit, registered in Florida, USA. The Genuine Marketplace is announced where community members can apply to become vendors."
        />
        <Divider />

        <YearBlock year="2024" />
        <Divider />

        <ContentBlock
          month="JAN"
          content="Undead 2043 officially launches and sells out 667 NFTs in 3 days."
        />
        <Divider />

        <ContentBlock
          month="MAR"
          content="Chris Partlow unveils the Undead Digital Museum, a virtual gallery crafted to pay a vibrant tribute to our extraordinary artists. It showcases over one hundred stunning pieces, promising an immersive experience for all digital art enthusiasts."
        />
        <Divider />

        <ContentBlock
          month="APR"
          content="First Townhall on Genuine Rising held (an initiative and a platform to migrate GU's to a new contract, including moving onchain); GU World GUp and NYC Meetup."
        />
        <Divider />

        <ContentBlock
          month="MAY"
          content="Contract for Genuine Rising signed."
        />
        <Divider />

        <ContentBlock
          month="JUL"
          content="Genuine Superlatives announced by Olga."
        />
        <Divider />

        <ContentBlock
          month="AUG"
          content="Genuine Undead announced as a licensed trademark. GU celebrates second year!"
        />
        <Divider />

        <ContentBlock
          month="SEP"
          content="Genuine Rising is launched. GU V2 (Genuine Rising) verified on OS and Magic Eden. Discord upgraded including $Bones system via Drip revamped."
        />
        <Divider />

        <ContentBlock month="OCT" content="Undead Comics goes live." />
        <Divider />

        <ContentBlock
          month="NOV"
          content="Next chapter of GU announced with new CBA members."
        />
        <Divider />

        <YearBlock year="2025" />
        <Divider />

        <ContentBlock
          month="APR"
          content="Forever Undead (on APE Chain) launches and mints out in a couple of hours."
        />
        <Divider />

        <ContentBlock
          month="JUN"
          content="Genuine Undead achieve 5,000 NFTs migrated from GU Origin through the Genuine Rising Initiative."
        />
        <Divider />

        <ContentBlock
          month="JUL"
          content="Genuine Undead receives its trademark."
        />
        <Divider />
      </div>
      <YearBlock year="To Be Continued" />
    </div>
  );
};

export default MobileTimeline;

const Divider = () => {
  return (
    <div
      className="border-2-2 border-black dark:border-white h-[45px] border"
      style={{ left: "50%" }}
    ></div>
  );
};

const ContentBlock = ({ month, content }) => {
  return (
    <div className="flex justify-between flex-col items-center w-full">
      <div className="w-[90%] py-2">
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
    <div className={`flex justify-center items-center w-full`}>
      <div className="z-20 flex items-center min-w-fit dark:bg-white bg-black text-white dark:text-black">
        <h1 className="text-2xl  border border-black dark:border-white font-teko font-bold leading-none pt-2 pb-1 px-2">
          {year}
        </h1>
      </div>
    </div>
  );
};
