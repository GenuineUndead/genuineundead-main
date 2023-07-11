import React, { useState, useEffect } from "react";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const ConnectWalletBtn = ({ onMint }) => {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  return (
    <>
      {isConnected ? (
        <button
          aria-label="Mint Button"
          className={`border border-black dark:border-white py-[12px] px-[20px] text-[.9rem]  hover:border-[#ff5277] hover:dark:border-[#ff5277] transition-all duration-300 rounded-full w-full`}
          onClick={onMint}
        >
          MINT
        </button>
      ) : (
        <button
          aria-label="Connect Wallet Button"
          className={`border border-black dark:border-white py-[12px] px-[20px] text-[.9rem]  hover:border-[#ff5277] hover:dark:border-[#ff5277] transition-all duration-300 rounded-full w-full`}
          onClick={openConnectModal}
        >
          CONNECT WALLET
        </button>
      )}
    </>
  );
};

export default ConnectWalletBtn;
