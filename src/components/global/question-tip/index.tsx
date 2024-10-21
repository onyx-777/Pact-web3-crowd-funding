"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { question_tips_guide } from "@/constants/question-tip";
import { useModal } from "@/providers/modal-provider";
import { FileQuestion } from "lucide-react";
import CustomModal from "../modal/custom-modal";
import { QuestionMarkCircledIcon, QuestionMarkIcon } from "@radix-ui/react-icons";

export type QuestionGuide = {
  title: string;
  subtitle: string;
  guide: string | React.ReactNode;
  for: "global-campaign" | "my-campaign" | "empower-campaign";
  cta?: React.ReactNode;
};

export const QuestionMarkCircledCard = (props: QuestionGuide) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{props.title}</CardTitle>
        <CardDescription>{props.subtitle}</CardDescription>
      </CardHeader>
      <CardContent>{props.guide}</CardContent>
      <CardFooter>{props.cta}</CardFooter>
    </Card>
  );
};

export const GuideButton = ({
  for: whatFor,
}: {
  for: "global-campaign" | "my-campaign" | "empower-campaign";
}) => {
  const { setOpen } = useModal();
  return (
    <QuestionMarkCircledIcon
      onClick={() =>
        setOpen(
          <CustomModal
            title="Quick Guide"
            subheading="A Comprehensive Overview to Help You Navigate Our Platform with Ease and Confidence"
          >
            {question_tips_guide.map((guide) => {
              if (whatFor === guide.for) {
                return (
                  <div key={guide.for}>
                    <QuestionMarkCircledCard
                      for={guide.for}
                      guide={guide.guide}
                      subtitle={guide.subtitle}
                      title={guide.title}
                      cta={guide.cta}
                    />
                  </div>
                );
              }
              return null;
            })}
          </CustomModal>
        )
      }
      className="cursor-pointer size-5"
    />
  );
};
