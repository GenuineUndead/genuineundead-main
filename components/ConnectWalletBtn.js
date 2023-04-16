import React, { useState, useEffect } from "react";
import { useConnectModal, useAccountModal } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";

const ConnectWalletBtn = () => {
  const { isConnected, address } = useAccount();
  const { openConnectModal } = useConnectModal();
  const { openAccountModal } = useAccountModal();

  return (
    <>
      {isConnected ? (
        <button
          className="dark:text-white text-black"
          onClick={openAccountModal}
        >
          {address}
        </button>
      ) : (
        <button
          aria-label="Mint Button"
          className={`border border-black dark:border-white py-[12px] px-[20px] text-[.9rem] w-[180px] hover:border-[#ff5277] hover:dark:border-[#ff5277] transition-all duration-300`}
          onClick={openConnectModal}
        >
          CONNECT WALLET
        </button>
      )}
    </>
  );
};

export default ConnectWalletBtn;
