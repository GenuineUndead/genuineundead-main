import React, { useEffect } from "react";
import { useRouter } from "next/router";
import { logPageView } from "../utils/analytics";
import BeGenuine from "../components/sections/Ethos/BeGenuine";
import Message from "../components/sections/Ethos/Message";
import IWantYou from "../components/sections/Ethos/IWantYou";
import Values from "../components/sections/Ethos/Values";
import SEO from "../components/SEO";
import MissionStatement from "../components/sections/Ethos/MissionStatement";

const seoDesc =
  "Genuine Undead (GU) was founded on the basis of becoming a sign of resistance, of rebirth, of challenging the impossible. GU strives to make the Web 3 ecosystem more legitimate, trustworth, beneficial and developing it to a global standard. Web 3 is full of technology with the potential to connect people all over the world in more ways than we could have ever imagined, not only socially, but collaboratively, financially, via education and discussion.";

const ethos = () => {
  const router = useRouter();

  useEffect(() => {
    logPageView({ page: router.pathname, title: "Ethos" });
  }, []);
  return (
    <>
      <SEO title="Ethos | Genuine Undead" description={seoDesc} path="ethos" />
      <BeGenuine />
      <Message />
      <IWantYou />
      <MissionStatement />
      <Values />
    </>
  );
};

export default ethos;
