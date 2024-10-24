// "use client";

// import { client } from "@/app/client";
// import { useMemo } from "react";
// import { ConnectButton } from "thirdweb/react";
// import { createWallet, inAppWallet } from "thirdweb/wallets";

// export default function ConnectBtn() {
//   const wallets = [
//     inAppWallet(),
//     createWallet("io.metamask"),
//     createWallet("com.coinbase.wallet"),
//     createWallet("me.rainbow"),
//   ];

//   return (
//     <div className="text-xl text-primary rounded-xl font-bold">
//       <ConnectButton client={client} wallets={wallets} />
//     </div>
//   );
// }


'use client'
import { createThirdwebClient } from "thirdweb";
import {client} from '@/app/client'
import { useConnect } from "thirdweb/react";
import { createWallet, injectedProvider } from "thirdweb/wallets";
import { Button } from "../ui/button";

export default function ConnectBtn() {
  const { connect, isConnecting, error } = useConnect();
  console.log({client});
  return (
    <Button
      onClick={() =>
        connect(async () => {
          console.log("create a wallet instance")
          const metamask = createWallet("io.metamask"); console.log("autocomplete the wallet id")
          console.log("trigger the connection")
          await metamask.connect({ client });
          console.log("return the wallet")
          return metamask;
        })
      }
    >
      Connect
    </Button>
  );
}
