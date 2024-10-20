import React from "react";
import MaxWidthWrapper from "../global/wrapper/MaxWidthWrapper";
import {
  BarChartIcon,
  CheckCircle,
  CheckIcon,
  DollarSignIcon,
  EditIcon,
  GiftIcon,
  GridIcon,
  HelpCircleIcon,
  LockIcon,
  PieChartIcon,
  ShieldIcon,
  UsersIcon,
} from "lucide-react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";

type Props = {};

const features = [
  {
    title: "Decentralized Funding",
    icon: "/icons/lock-dynamic-color.png",
    description:
      "Experience transparent and secure funding powered by blockchain technology, ensuring trust and accountability.",
  },
  {
    title: "Create Campaigns Easily",
    icon: "/icons/file-plus-dynamic-color.png",
    description:
      "Launch your project in just a few simple steps with our user-friendly interface, guiding you from goal-setting to storytelling.",
  },
  {
    title: "Community Engagement",
    icon: "/icons/boy-dynamic-color.png",
    description:
      "Connect with backers who share your vision and engage them through updates, comments, and rewards.",
  },
  {
    title: "Flexible Funding Options",
    icon: "/icons/eth-dynamic-color.png",
    description:
      "Choose between all-or-nothing or flexible funding models to suit your project's needs and encourage contributions.",
  },
  {
    title: "Secure Transactions",
    icon: "/icons/sheild-dynamic-color.png",
    description:
      "Benefit from enhanced security features, with all transactions encrypted and processed on the blockchain.",
  },
  {
    title: "Diverse Project Categories",
    icon: "/icons/folder-dynamic-color.png",
    description:
      "Explore a wide range of projects across various categories, finding campaigns that resonate with your interests.",
  },
  {
    title: "Transparent Tracking",
    icon: "/icons/location-dynamic-color.png",
    description:
      "Monitor your funding progress in real time through an intuitive dashboard that tracks contributions and milestones.",
  },
  {
    title: "Reward Systems",
    icon: "/icons/trophy-dynamic-color.png",
    description:
      "Create enticing rewards for backers with tiered structures that enhance engagement and incentivize contributions.",
  },
  {
    title: "Analytics and Insights",
    icon: "/icons/chart-dynamic-color.png",
    description:
      "Gain valuable insights into your campaign performance to better understand your audience and refine your strategies.",
  },
  {
    title: "Dedicated Support",
    icon: "/icons/tool-dynamic-color.png",
    description:
      "Receive guidance from our dedicated support team, ready to assist you whether you're creating or backing a campaign.",
  },
] as const;

const Features = (props: Props) => {
  return (
    <MaxWidthWrapper className="py-16 flex flex-col gap-10">
      <h2 className="md:text-6xl text-4xl font-bold w-full text-center">
        Features
      </h2>
      <Card>
        <CardContent className="w-fit pointer-events-none select-none flex flex-wrap mt-10 justify-center gap-10 items-center p-3 ">
          {features.map(({ icon, title, description }) => (
            <div key={title}>
              <div className="flex flex-col min-w-52 max-w-[26rem] hull ju-fstify-center items-center w-full gap-3 pb-0">
                {icon ? (
                  <Image src={icon} alt={title} height={100} width={100} />
                ) : (
                  <CheckIcon />
                )}
                <h3 className="font-bold tracking-wider text-lg">{title}</h3>
                <p className="text-muted-foreground font-medium">
                  {description}
                </p>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>
    </MaxWidthWrapper>
  );
};

export default Features;
