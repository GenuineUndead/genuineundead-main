import React from "react";

export function getStaticProps({ locale }) {
  return {
    props: {
      locale,
    },
  };
}

const Landing = ({ props }) => {
  let page;
  return (
    <div className="flex justify-center items-center w-full min-h-screen border-b border-black dark:border-white">
      landing page
    </div>
  );
};

export default Landing;
