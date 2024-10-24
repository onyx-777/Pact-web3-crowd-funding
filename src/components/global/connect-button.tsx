"use client";

import { client } from "@/app/client";
import { useTheme } from "next-themes";
import { useMemo } from "react";
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";

export default function ConnectBtn() {
  const {theme} = useTheme();
  const wallets = [
    inAppWallet(),
    createWallet("io.metamask"),
    createWallet("com.coinbase.wallet"),
    createWallet("me.rainbow"),
  ];

  return (
    <div className="text-xl text-primary rounded-xl font-bold">
      <ConnectButton client={client} wallets={wallets} />
    </div>
  );
}