import ReactGA from "react-ga4";

const PUBLIC_NEXT_GA_TRACKING_ID = "G-CN080E9W9Z";

export const initGA = () => {
  ReactGA.initialize(PUBLIC_NEXT_GA_TRACKING_ID);
};

export const logPageView = ({ page, title }) => {
  ReactGA.send({ hitType: "page view", page, title });
};
