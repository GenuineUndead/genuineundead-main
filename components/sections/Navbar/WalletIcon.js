import React from "react";
import { useAccount } from "wagmi";
import { useAccountModal } from "@rainbow-me/rainbowkit";
import { IoWalletOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

const WalletIcon = ({ currentTheme }) => {
  const { isConnected } = useAccount();
  const { openAccountModal } = useAccountModal();

  return (
    <>
      {isConnected && (
        <div className="mr-[15px] cursor-pointer" onClick={openAccountModal}>
          <IconContext.Provider
            value={{
              style: {
                color: currentTheme === "dark" ? "white " : "black",
              },
            }}
          >
            <IoWalletOutline size={30} />
          </IconContext.Provider>
        </div>
      )}
    </>
  );
};

export default WalletIcon;
