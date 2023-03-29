import React from "react";
import { withTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

const Footer = ({ t }) => {
  const router = useRouter();
  return (
    <div
      className={`w-full flex flex-col lg:flex-row lg:justify-between py-[2rem]  text-[.9rem] gap-[2rem] lg:gap-0 items-center text-center lg:text-left lg:items-start px-[3.2rem] bg-[#f8f8f4] dark:bg-[#191917] ${
        router.pathname === "/story" && "hidden"
      }`}
    >
      <div>&#169; GenuineUndead 2023</div>
      <div>
        <ul>
          <li>
            <a
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
              href="https://portal.genuineundead.io/collections/0x209e639a0EC166Ac7a1A4bA41968fa967dB30221"
              target="_blank"
              rel="noreferrer noopener"
            >
              Marketplace
            </a>
          </li>
          <li>
            <Link
              href="/art"
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
            >
              Art
            </Link>
          </li>
          <li>
            <Link
              href="/community"
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
            >
              Community
            </Link>
          </li>
          <li>
            <Link
              href="/ethos"
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
            >
              Ethos
            </Link>
          </li>
          <li>
            <Link
              href="/story"
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
            >
              Story
            </Link>
          </li>
          <li>
            <a
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
              href="https://app.theia.club/collective/GenuineUndead/feed"
              target="_blank"
              rel="noreferrer noopener"
            >
              Club
            </a>
          </li>
          <li>
            <Link
              href="/"
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
            >
              Home
            </Link>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <ul>
          <li>
            <a
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
              href="/files/GU_GUIDELINES.pdf"
              target="_blank"
              rel="noreferrer noopener"
            >
              Guidelines
            </a>
          </li>
          <li>
            <Link
              href="/contact"
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
            >
              Contact
            </Link>
          </li>
          <li>
            <a
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
              href="#"
            >
              IP (Coming Soon)
            </a>
          </li>
        </ul>
      </div>
      <div className="hidden lg:block">
        <ul>
          <li>
            <a
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
              href="https://discord.gg/Z5dqQ4NCk3"
              target="_blank"
              rel="noreferrer noopener"
            >
              Discord
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
              href="https://twitter.com/GenuineUndead"
              target="_blank"
              rel="noreferrer noopener"
            >
              Twitter
            </a>
          </li>
          <li>
            <a
              className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
              href="https://medium.com/@GenuineUndead"
              target="_blank"
              rel="noreferrer noopener"
            >
              Medium
            </a>
          </li>
        </ul>
      </div>
      <div className="flex w-full lg:hidden">
        <div className="w-[50%] flex flex-col justify-center items-center">
          <ul>
            <li>
              <a
                className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
                href="/files/GU_GUIDELINES.pdf"
                target="_blank"
                rel="noreferrer noopener"
              >
                Guidelines
              </a>
            </li>
            <li>
              <Link
                href="/contact"
                className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
              >
                Contact
              </Link>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
                href="#"
              >
                IP (Coming Soon)
              </a>
            </li>
          </ul>
        </div>
        <div className="w-[50%] flex flex-col justify-center items-center">
          <ul>
            <li>
              <a
                className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
                href="https://discord.gg/Z5dqQ4NCk3"
                target="_blank"
                rel="noreferrer noopener"
              >
                Discord
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
                href="https://twitter.com/GenuineUndead"
                target="_blank"
                rel="noreferrer noopener"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                className="cursor-pointer hover:text-[#ff5277] hover:dark:text-[#ff5277]"
                href="https://medium.com/@GenuineUndead/genuine-undead-f627c448f501"
                target="_blank"
                rel="noreferrer noopener"
              >
                Medium
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div>All Rights Reserved</div>
    </div>
  );
};

export default withTranslation("common")(Footer);
