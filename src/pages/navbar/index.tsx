import { Button } from "@/components/ui/button";
import logo from "../../../public/logo.png";
import { Minus, Plus } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

import { Copy } from "lucide-react";
import React from "react";
import { DarkMode } from "@/components/darkMode";
function Navbar() {
  const [goal, setGoal] = React.useState(350);

  function onClick(adjustment: number) {
    setGoal(Math.max(200, Math.min(400, goal + adjustment)));
  }
  return (
    <div className="flex justify-between">
      <div className="flex items-center gap-5">
        <img className="cursor-pointer" src={logo} alt="logo" />
        <a href="#">Docs</a>
        <a href="#">Pricing</a>
        <a href="#">Status</a>
        <a href="#">FAQs </a>
        <a href="#">Contact Us</a>
      </div>
      <div className="flex items-center gap-4">
        <div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="link" className="text-white">
                Log in
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md bg-[#299c1e]">
              <DialogHeader className="bg-[#299c1e]">
                <DialogTitle className="bg-[#299c1e]">Share link</DialogTitle>
                <DialogDescription className="bg-[#299c1e] text-black">
                  Anyone who has this link will be able to view this.
                </DialogDescription>
              </DialogHeader>
              <div className="flex items-center bg-[green] text-white  space-x-2">
                <div className="grid flex-1 gap-2"></div>
                <Button type="submit" size="sm" className="px-3">
                  <span className="sr-only">Copy</span>
                  <Copy />
                </Button>
              </div>
              <DialogFooter className="sm:justify-start bg-[green]">
                <DialogClose asChild>
                  <Button type="button" variant="secondary">
                    Close
                  </Button>
                </DialogClose>
              </DialogFooter>
            </DialogContent>
          </Dialog>
          <Drawer>
            <DrawerTrigger asChild>
              <Button variant="secondary">Open Drawer</Button>
            </DrawerTrigger>
            <DrawerContent>
              <div className="mx-auto w-full max-w-sm">
                <DrawerHeader>
                  <DrawerTitle>Move Goal</DrawerTitle>
                  <DrawerDescription>
                    Set your daily activity goal.
                  </DrawerDescription>
                </DrawerHeader>
                <div className="p-4 pb-0">
                  <div className="flex items-center justify-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      className="h-8 w-8 shrink-0 rounded-full"
                      onClick={() => onClick(-10)}
                      disabled={goal <= 200}
                    >
                      <Minus />
                      <span className="sr-only">Decrease</span>
                    </Button>
                    <div className="flex-1 text-center">
                      <div className="text-7xl font-bold tracking-tighter">
                        {goal}
                      </div>
                      <div className="text-[0.70rem] uppercase text-muted-foreground">
                        Calories/day
                      </div>
                    </div>
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8  w-8 shrink-0 rounded-full"
                      onClick={() => onClick(10)}
                      disabled={goal >= 400}
                    >
                      <Plus />
                      <span className="sr-only">Increase</span>
                    </Button>
                  </div>
                  <div className="mt-3 h-[120px]"></div>
                </div>
                <DrawerFooter>
                  <Button>Submit</Button>
                  <DrawerClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DrawerClose>
                </DrawerFooter>
              </div>
            </DrawerContent>
          <DarkMode />
          </Drawer>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
