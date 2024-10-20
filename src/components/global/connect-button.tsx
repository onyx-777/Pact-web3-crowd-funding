"use client";
import { client } from "@/app/client";
import { ConnectButton } from "thirdweb/react";
import { createWallet, inAppWallet } from "thirdweb/wallets";

const wallets = [
  inAppWallet(),
  createWallet("io.metamask"),
  createWallet("com.coinbase.wallet"),
  createWallet("me.rainbow"),
];

export default function ConnectBtn() {
  return (
    <div className="text-xl text-primary bg-white rounded-xl font-bold">
      {client && <ConnectButton client={client} wallets={wallets} />}
    </div>
  );
}
