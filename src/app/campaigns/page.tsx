"use client";

import { GuideButton } from "@/components/global/question-tip";
import React from "react";
import { CampaignView } from "./_components/navigation";
import dynamic from "next/dynamic";

const ConnectBtn = dynamic(() => import("@/components/global/connect-button"));

type Props = {};

const Campaigns = (props: Props) => {
  return (
    <div className="w-full h-fit space-y-5">
      <div className="w-full md:ml-32 h-full flex flex-col md:flex-row mt-10 justify-start md:justify-between items-start gap-4">
        <div className="flex flex-col justify-center items-center md:items-start w-full gap-4">
          <h2 className="text-5xl md:text-4xl font-semibold w-fit">
            Campaigns
          </h2>
          <p className="text-muted-foreground md:text-lg font-medium flex md:justify-start justify-center items-center gap-3 w-fit p-6 md:px-0">
            <span className="w-full">
              Empower Change: Explore and Create Campaigns{" "}
            </span>
            <span>
              <GuideButton for="global-campaign" />
            </span>
          </p>
        </div>
        <div className="w-full md:w-fit flex md:justify-end justify-center items-center px-10 md:px-0 bg-background md:mr-44">
          <ConnectBtn />
        </div>
      </div>
      <div className="w-full flex justify-center items-center bg-background">
        <CampaignView />
      </div>
    </div>
  );
};

export default Campaigns;
