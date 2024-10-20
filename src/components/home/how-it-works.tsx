import { One, Three, Two } from "@/icons/numbers";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import MaxWidthWrapper from "../global/wrapper/MaxWidthWrapper";

type Props = {};

const askers = [
  {
    title: "Connect",
    subtitle:
      "Link your cryptocurrency wallet to securely manage funds and access the platform.",
    icon: <One />,
  },
  {
    title: "Create",
    subtitle:
      "Set up your campaign by detailing your project, funding goals, and rewards to attract backers.",
    icon: <Two />,
  },
  {
    title: "Deploy",
    subtitle:
      "Launch your campaign on the blockchain, allowing supporters to contribute directly and track your progress in real-time.",
    icon: <Three />,
  },
] as const;

const donators = [
  {
    title: "Choose",
    subtitle:
      "Select a project that inspires you from our curated list of meaningful campaigns.",
    icon: <One />,
  },
  {
    title: "Connect",
    subtitle:
      "Link your cryptocurrency wallet to securely manage funds and access the platform.",
    icon: <Two />,
  },
  {
    title: "Donate",
    subtitle:
      "Contribute to your chosen campaign easily. Your support helps bring the project to life and makes a real difference!",
    icon: <Three />,
  },
] as const;

const HowItWorks = (props: Props) => {
  return (
    <MaxWidthWrapper className="h-full w-full flex flex-col gap-16 py-10">
      <h2 className="md:text-6xl text-4xl font-bold w-full text-center">How it works?</h2>
      <Card>
        <CardHeader>
          <CardTitle>Create Your Campaign </CardTitle>
          <CardDescription className="font-medium">
            Simple Steps to Launch Your Campaign
          </CardDescription>
        </CardHeader>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="h-full w-full p-4">
            <div className="flex flex-wrap flex-col md:flex-row justify-center gap-4 items-center w-full">
              {askers.map(({ subtitle, title, icon }) => (
                <Card
                  key={title}
                  className="shadow-lg min-w-52 max-w-[26rem] hover:shadow-2xl transition-shadow duration-300 cursor-pointer ease-in-out "
                >
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center font-medium w-full h-full gap-6">
                    <div>{icon}</div>
                    <div>{subtitle}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Card>
      <Card>
        <CardHeader>
          <CardTitle>Support a Campaign </CardTitle>
          <CardDescription className="font-medium">Quick Steps to Make a Difference</CardDescription>
        </CardHeader>
        <div className="flex flex-col justify-center items-center w-full h-full">
          <div className="h-full w-full p-4">
            <div className="flex flex-wrap flex-col md:flex-row justify-center items-center gap-4 w-full">
              {donators.map(({ subtitle, title, icon }) => (
                <Card
                  key={title}
                  className="shadow-lg min-w-52 max-w-[26rem] hover:shadow-2xl transition-shadow duration-300 cursor-pointer ease-in-out "
                >
                  <CardHeader>
                    <CardTitle>{title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex justify-center items-center font-medium w-full h-full gap-6">
                    <div>{icon}</div>
                    <div>{subtitle}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </MaxWidthWrapper>
  );
};

export default HowItWorks;
