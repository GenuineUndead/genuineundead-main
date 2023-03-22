import ReactGA from "react-ga4";

const PUBLIC_NEXT_GA_TRACKING_ID = "G-46QBNCYNKH";

export const initGA = () => {
  ReactGA.initialize(PUBLIC_NEXT_GA_TRACKING_ID);
};

export const logPageView = ({ page, title }) => {
  ReactGA.send({ hitType: "page view", page, title });
};
