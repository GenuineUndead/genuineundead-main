import React from "react";
import { withTranslation } from "next-i18next";

const Footer = ({ t }) => {
  return (
    <div className="w-full flex lg:flex-row lg:justify-between pt-[1rem] pb-[5rem]">
      <div>@GenuineUndead 2023</div>
      <div>
        <ul>
          <li>{t("theArt")}</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
          <li>6</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div>
        <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      </div>
      <div>All Rights Reserved</div>
    </div>
  );
};

export default withTranslation("home")(Footer);
