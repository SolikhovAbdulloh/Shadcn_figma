import { Button } from "@/components/ui/button";
import hero from "../../../public/hero_image 1.png";
import { PiTimerBold } from "react-icons/pi";
import { RiArrowUpDownFill } from "react-icons/ri";
import { BsBoundingBox } from "react-icons/bs";

function Information() {
  return (
    <div className="flex items-center flex-col gap-5 my-5 mx-5">
      <div className="text-center">
        <p className="text-[48px] font-extrabold">
          Information you need during <br /> on-call emergencies
        </p>
        <p className="text-[18px] font-normal my-3">
          Quickly link new on-call tickets to similar past incidents and their
          solutions. All <br /> directly in Slack the moment an incident
          happens.
        </p>
        <Button variant="secondary" className="my-5">
          Get Started
        </Button>
        <img src={hero} alt="hero" />
      </div>
      <div>
        <p className="text-[48px] text-center font-extrabold">
          Quick solutions, less stress
        </p>
        <div className="flex justify-between items-center gap-5">
          <div className=" flex flex-col items-start gap-4 mt-4  p-3">
            <PiTimerBold className="w-[56px] h-[56px]" />
            <p className="font-semibold text-[24px]">Fix emergencies fast</p>
            <p className="font-normal text-[14px]">
              Save 20-30 minutes per on-call ticket - no <br /> more searching
              for relevant issues and <br /> runbooks
            </p>
          </div>
          <div className=" flex flex-col items-start gap-4 mt-4  p-3">
            <RiArrowUpDownFill className="w-[56px] h-[56px]" />
            <p className="font-semibold text-[24px]">Universally compatible</p>
            <p className="font-normal text-[14px]">
              Save 20-30 minutes per on-call ticket - no <br /> more searching
              for relevant issues and <br /> runbooks
            </p>
          </div>
          <div className=" flex flex-col items-start gap-4 mt-4  p-3">
            <BsBoundingBox className="w-[56px] h-[56px]" />
            <p className="font-semibold text-[24px]">Secure for your org</p>
            <p className="font-normal text-[14px]">
              Save 20-30 minutes per on-call ticket - no <br /> more searching
              for relevant issues and <br /> runbooks
            </p>
          </div>
        </div>
      </div>
      <div className="text-center m-auto justify-center flex items-center flex-col">
        <p className="text-[48px] font-extrabold">
          Instant setup, no custom <br /> code
        </p>
        <p className="text-[18px] font-normal my-3">
          Invite the bot, pick a channel, and you're set—no custom code needed,
          and no <br /> vendor lock-in.
        </p>
        <img className="w-[50%] h-[50%]" src={hero} alt="hero" />
      </div>
    </div>
  );
}

export default Information;
