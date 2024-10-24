import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ThirdwebProvider } from "thirdweb/react";

const inter = Montserrat({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pact",
  description: "A decentralized crowd funding platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className)}>
        <ThirdwebProvider>
          <ScrollArea className="h-screen">
            <div className="h-full select-none">{children}</div>
          </ScrollArea>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
