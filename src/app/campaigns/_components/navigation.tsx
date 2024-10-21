"use client";

import { Logo } from "@/components/global/logo";
import { ModeToggle } from "@/components/global/theme/mode-toggle";
import MaxWidthWrapper from "@/components/global/wrapper/MaxWidthWrapper";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  TooltipProvider,
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { Users, User } from "lucide-react";

export const CampaignView = () => {
  return (
    <div className="flex min-h-screen">
      <Tabs defaultValue="community" className="flex-1">
        <TabsList className="fixed gap-7 bottom-0 left-0 right-0 z-10 flex w-full justify-center bg-background p-2 md:top-0 md:left-0 md:bottom-auto md:right-auto md:h-[100vh] md:rounded-b-none md:w-20 md:py-8 md:flex-col md:items-start md:justify-start md:space-y-2 bg-slate-100 dark:bg-slate-900 py-10">
          {/* <div className="items-center pr-20 hidden md:flex justify-center rounded-full -mb-4 text-sm w-full md:justify-start md:rounded-lg md:px-3 md:py-2">
            <span className="w-10 mr-20">
              <Logo className="w-10 h-10 dark:fill-white" />
            </span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Separator className="hidden md:block w-[80%] bg-slate-300 dark:bg-slate-700" />
          </div>
 */}
          <TabsTrigger
            value="community"
            className="flex items-center justify-center gap-4 rounded-full md:p-3 text-sm w-full h-14 md:justify-start md:rounded-lg md:px-3 md:py-2"
          >
            <Users className="w-fit md:w-full md:mx-auto" size={25} />
            <span className="md:hidden inline">Community</span>
          </TabsTrigger>
          <TabsTrigger
            value="my_campaigns"
            className="flex items-center gap-4 justify-center rounded-full md:p-3 text-sm w-full h-14 md:justify-start md:rounded-lg md:px-3 md:py-2"
          >
            <User className="w-fit md:w-full md:mx-auto" size={25} />
            <span className="md:hidden inline">Community</span>
          </TabsTrigger>

          {/* <div className="items-center pr-20 hidden md:flex justify-center rounded-full -mb-4 text-sm w-full md:justify-start md:rounded-lg md:px-3 md:py-2">
            <span className="w-10 mr-20 justify-end">
              <ModeToggle />              
            </span>
          </div> */}
        </TabsList>
        <TabsList className="fixed hidden gap-7 bottom-0 left-0 right-0 z-10 md:flex w-full justify-center bg-background p-2 md:top-0 md:left-0 md:bottom-auto md:right-auto md:h-[100vh] md:rounded-b-none md:w-20 md:py-8 md:flex-col md:items-start md:justify-start md:space-y-2 bg-slate-100 dark:bg-slate-900 py-10">
          <div className="items-center pr-20 hidden md:flex justify-center rounded-full -mb-4 text-sm w-full md:justify-start md:rounded-lg md:px-3 md:py-2">
            <span className="w-10 mr-20">
              <Logo className="w-10 h-10 dark:fill-white" />
            </span>
          </div>
          <div className="w-full flex justify-center items-center">
            <Separator className="hidden md:block w-[80%] bg-slate-300 dark:bg-slate-700" />
          </div>

          <TabsTrigger
            value="community"
            className="flex items-center justify-center gap-4 rounded-full md:p-3 text-sm w-full h-14 md:justify-start md:rounded-lg md:px-3 md:py-2"
          >
            <Users className="w-fit md:w-full md:mx-auto" size={25} />
            <span className="md:hidden inline">Community</span>
          </TabsTrigger>
          <TabsTrigger
            value="my_campaigns"
            className="flex items-center gap-4 justify-center rounded-full md:p-3 text-sm w-full h-14 md:justify-start md:rounded-lg md:px-3 md:py-2"
          >
            <User className="w-fit md:w-full md:mx-auto" size={25} />
            <span className="md:hidden inline">Community</span>
          </TabsTrigger>

          <div className="items-center pr-20 hidden md:flex justify-center rounded-full -mb-4 text-sm w-full md:justify-start md:rounded-lg md:px-3 md:py-2">
            <span className="w-10 mr-20 justify-end">
              <ModeToggle />              
            </span>
          </div>
        </TabsList>

        <div className="md:ml-44 md:mt-20 md:mr-10 m-4">
          {/* <MaxWidthWrapper className="p-4"> */}
          <TabsContent value="community">
            <Card>
              <CardHeader>
                <CardTitle>Explore Campaigns</CardTitle>
                <CardDescription>
                  Discover and Support Meaningful Initiatives
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="my_campaigns">
            <Card>
              <CardHeader>
                <CardTitle>My Campaigns</CardTitle>
                <CardDescription>
                  Manage Your Campaigns and Track Donations Effortlessly
                </CardDescription>
              </CardHeader>
              <CardContent></CardContent>
            </Card>
          </TabsContent>
          {/* </MaxWidthWrapper> */}
        </div>
      </Tabs>
    </div>
  );
};
