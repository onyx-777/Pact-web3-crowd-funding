import React from "react";

interface QuestionTipTypes {
  title: string;
  subtitle: string;
  guide: string | React.ReactNode;
  for: "global-campaign" | "my-campaign" | "empower-campaign";
  cta?: React.ReactNode;
}

export const question_tips_guide: QuestionTipTypes[] = [
  {
    title: "Campaign Page",
    subtitle: "Create and Support Campaigns",
    for: "global-campaign",
    guide: (
      <div className="p-4 bg-background rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">What This Page Does:</h3>
        <ul className="list-disc pl-5 flex flex-col gap-10">
          <li className="mb-2">
            <strong>Launch New Campaigns:</strong>
            <p>
              Use this page to create and launch your own fundraising campaigns.
              Share your cause and rally support from your community.
            </p>
          </li>
          <li className="mb-2">
            <strong>Switch to My Campaigns Tab:</strong>
            <p>
              Manage your created campaigns by switching to the "My Campaigns" tab.
            </p>
          </li>
          <li className="mb-2">
            <strong>Explore Existing Campaigns:</strong>
            <p>
              Discover campaigns created by others in the community. Find causes
              that resonate with you and consider supporting them.
            </p>
          </li>
          <li className="mb-2">
            <strong>Donate:</strong>
            <p>
              If you want to contribute, switch to the "Empower Community" tab to
              make a donation.
            </p>
          </li>
          <li className="mb-2">
            <strong>View Campaign Details:</strong>
            <p>
              Click on any campaign to see detailed information, including the
              campaign's story, funding goals, and progress.
            </p>
          </li>
          <li className="mb-2">
            <strong>Manage Your Campaigns:</strong>
            <p>
              Access and manage your created campaigns here. Update details,
              track donations, and communicate with your supporters.
            </p>
          </li>
          <li className="mb-2">
            <strong>Stay Updated:</strong>
            <p>
              Follow your campaigns to receive updates on their progress and engage
              with the community.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "My Campaigns",
    subtitle: "Manage Your Fundraising Campaigns",
    for: "my-campaign",
    guide: (
      <div className="p-4 bg-background rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">What This Page Does:</h3>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            <strong>Create New Campaigns:</strong>
            <p>
              Use this section to launch new fundraising campaigns. Fill in the
              necessary details, set your goals, and share your mission with
              supporters.
            </p>
          </li>
          <li className="mb-2">
            <strong>View Your Campaigns:</strong>
            <p>
              See a list of all the campaigns you’ve created. Each entry provides
              a quick overview of the campaign's status and progress.
            </p>
          </li>
          <li className="mb-2">
            <strong>Update Campaign Details:</strong>
            <p>
              Click on any campaign to edit its details. Make changes to the
              description, funding goals, and visuals to keep your campaign fresh
              and relevant.
            </p>
          </li>
          <li className="mb-2">
            <strong>Delete Campaigns:</strong>
            <p>
              If you need to remove a campaign, you can easily delete it from this
              page. Just click the delete option next to the campaign you wish to
              remove.
            </p>
          </li>
          <li className="mb-2">
            <strong>Track Donations:</strong>
            <p>
              Monitor how much funding each campaign has received. This helps you
              understand your campaign's impact and where to focus your efforts.
            </p>
          </li>
          <li className="mb-2">
            <strong>Stay Engaged:</strong>
            <p>
              Communicate with your supporters through updates and messages. Keeping
              your backers informed can encourage further support.
            </p>
          </li>
          <li className="mb-2">
            <strong>Switch to Empower Community Tab:</strong>
            <p>
              If you want to explore campaigns created by others or make
              donations, switch to the "Empower Community" tab.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
  {
    title: "Empower Community",
    subtitle: "Support Meaningful Campaigns",
    for: "empower-campaign",
    guide: (
      <div className="p-4 bg-background rounded-lg shadow-md">
        <h3 className="text-xl font-bold mb-2">What This Page Does:</h3>
        <ul className="list-disc pl-5">
          <li className="mb-2">
            <strong>Explore Campaigns:</strong>
            <p>
              Discover a variety of campaigns created by others in the community.
              Browse through different causes and find ones that resonate with you.
            </p>
          </li>
          <li className="mb-2">
            <strong>View Campaign Details:</strong>
            <p>
              Click on any campaign to see its story, funding goals, and progress.
              Understand the impact of the campaign and how your support can make
              a difference.
            </p>
          </li>
          <li className="mb-2">
            <strong>Acknowledge Campaigns:</strong>
            <p>
              Show your support by acknowledging campaigns that inspire you. Leave
              comments or messages to encourage the creators and connect with the
              community.
            </p>
          </li>
          <li className="mb-2">
            <strong>Donate:</strong>
            <p>
              If a campaign catches your interest, you can easily contribute by
              clicking the donate button. Choose the amount you wish to give and
              help the campaign reach its goals.
            </p>
          </li>
          <li className="mb-2">
            <strong>Stay Updated:</strong>
            <p>
              Follow the campaigns you support to receive updates on their
              progress. Engaging with the community keeps you informed and
              connected.
            </p>
          </li>
          <li className="mb-2">
            <strong>Switch to My Campaigns Tab:</strong>
            <p>
              If you want to create or manage your own campaigns, switch to the
              "My Campaigns" tab.
            </p>
          </li>
        </ul>
      </div>
    ),
  },
];
