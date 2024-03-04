import React from "react";
import { NextSeo } from "next-seo";

const baseUrl = "https://www.genuineundead.com/";

const SEO = ({ title, description, imagePath, path }) => {
  return (
    <NextSeo
      title={title}
      description={description}
      canonical={path ? `${baseUrl}/${path}` : baseUrl}
      openGraph={{
        url: path ? `${baseUrl}${path}` : baseUrl,
        title,
        description: description,
        images: [
          {
            url: "/GU-BANNER.png",
            width: 1500,
            height: 500,
            alt: "Og Image Alt",
            type: "image/png",
          },
        ],
        site_name: "GenuineUndead",
      }}
      twitter={{
        handle: "@GenuineUndead",
        site: baseUrl,
        cardType: "summary_large_image",
      }}
      additionalLinkTags={[{ rel: "icon", href: "/images/GUicon.svg" }]}
      additionalMetaTags={[
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        {
          name: "keywords",
          content: `GenuineUndead, 
          GU, 
          UndeadArmy, 
          UndeadNeverDie, 
          StayGenuine, 
          StayG, 
          GenuineCollective, 
          PixelArt, 
          BestPixelArt, 
          FinePixelArt, 
          GUniverse, 
          TheGenuineTimes, 
          Pixel art NFTs, 
          Collectible NFTs,
          Digital art NFTs,
          Pixelated NFTs,
          NFT marketplace,
          Crypto art NFTs,
          Blockchain-based NFTs,
          Limited edition NFTs,
          Rare NFTs,
          Crypto collectible,
          Pixel art collectibles,
          Unique NFTs,
          Non-fungible tokens,
          Ethereum NFTs,
          ERC-721 tokens,
          ERC-1155 tokens,
          NFT auctions,
          NFT trading,
          NFT investments,
          NFT ownership`,
        },
      ]}
      robotsProps={{
        nosnippet: true,
        notranslate: true,
        noarchive: true,
        index: true,
        follow: true,
        twitter: true,
      }}
    />
  );
};

export default SEO;
