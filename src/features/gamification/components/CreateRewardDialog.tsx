import {
  Dialog,
  DialogContent,
} from "@/components/ui/dialog";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { X, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import CustomSelect from "./CustomSelect";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "sonner";
import { Check } from "lucide-react";

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export default function CreateRewardDialog({ open, onOpenChange }: Props) {
  const [event, setEvent] = useState<string | null>(null);
  const [reward, setReward] = useState<string | null>(null);
  const [isTimeBound, setIsTimeBound] = useState(false);
  const [date, setDate] = useState<Date>();

  useEffect(() => {
  if (!open) {
    setEvent(null);
    setReward(null);
    setIsTimeBound(false);
    setDate(undefined);
  }
}, [open]);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent showCloseButton={false} className="w-[400px] max-w-[400px] rounded-[12px] p-[24px] bg-[#FFFFFF]">

        {/* Header */}
        <div className="flex items-center justify-between">
          <h2 className="text-[20px] font-medium text-500 text-[#303030]">
            Create your reward system
          </h2>

          <button
            onClick={() => onOpenChange(false)}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="space-y-2">

          {/* Reward Event */}
          <div>
            <label className="text-sm font-regular text-text-secondary">
              Reward event <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              placeholder="Select an event"
              options={[
                "Cross $X in sales",
                "Posts X times every Y period",
                "Is Onboarded",
              ]}
              value={event}
              onChange={(val) => setEvent(val)}
            />
          </div>

          {/* Reward With */}
          <div className="gap-[8px]">
            <label className="text-sm font-regular text-text-secondary">
              Reward with <span className="text-red-500">*</span>
            </label>
            <CustomSelect
              placeholder="Select an reward"
              options={[
                "Flat $X bonus",
                "Upgrade Commission Tier",
              ]}
              disabledOptions={
                event === "Is Onboarded"
                  ? ["Upgrade Commission Tier"]
                  : []
              }
              value={reward}
              onChange={(val) => setReward(val)}
            />
          </div>

          {/* Toggle */}
          <div className="flex items-start justify-between pt-2">
            <div>
              <p className="text-[16px] font-medium text-[#303030]">
                Make the reward time bound
              </p>
              <p className="text-[12px] text-muted-foreground text-text-secondary">
                Choose an end date to stop this reward automatically.
              </p>
            </div>
            <Switch
              checked={isTimeBound}
              onCheckedChange={setIsTimeBound}
              className="data-[state=unchecked]:bg-[#D9D9D9]
                data-[state=checked]:text-text-primary
                [&_[data-slot=switch-thumb]]:transition-transform
                [&_[data-slot=switch-thumb]]:duration-200
                [&_[data-slot=switch-thumb]]:ease-in-out"
            />
          </div>
          {/* Date Input */}
          {isTimeBound && (
            <Popover>
              <PopoverTrigger asChild>
                <button
                  className="
                    w-full h-[40px]
                    border-2 border-border-primary
                    rounded-[8px]
                    px-4
                    flex items-center gap-3
                    bg-white
                    text-left
                  "
                >
                  <CalendarIcon className="h-5 w-5 text-text-secondary" />

                  <span className="text-[16px] text-[#303030]">
                    {date ? format(date, "dd MMM, yyyy") : "Select date"}
                  </span>
                </button>
              </PopoverTrigger>

              <PopoverContent
                side="bottom"
                align="start"
                sideOffset={8}
                className="w-[284px] h-[312px] p-0 rounded-[8px] bg-white shadow-xl"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={setDate}
                  disabled={(date) => date < new Date()}
                  initialFocus
                  className="w-full"
                  modifiersClassNames={{
                    selected:
                      "bg-background-purple text-white hover:bg-[#C530C5] hover:text-white",
                  }}
                  classNames={{
                    nav_button:
                      "border rounded-[8px]",
                    row:
                      "flex w-full mt-0 justify-between",
                    head_cell:
                      "text-text-secondary",
                    day:
                      "h-[36px] w-[36px] p-0 rounded-[8px] text-[#303030] hover:bg-[#FFF0FF]",
                  }}
                />
              </PopoverContent>
            </Popover>
          )}
        </div>

        {/* Footer */}
        <div className="flex justify-between gap-[16px]">
          <Button
            variant="outline"
            className="flex-1 h-[40px] w-[168px] rounded-[10px] border-gray-300 text-gray-700 text-[16px]"
            onClick={() => {
              onOpenChange(false)
            }}
          >
            Cancel
          </Button>

          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="flex-1">
                  <Button
                    disabled={(!event || !reward)}
                    onClick={() => {
                      toast((
                          <div className="flex items-center gap-4">
                            {/* Success Icon */}
                            <div className="w-[26px] h-[26px] rounded-full bg-[#2ED389] flex items-center justify-center">
                              <Check className="w-[12px] h-[12px] text-[#1F1F1F]" />
                            </div>
                            Reward Created!
                          </div>
                        )
                      );

                      onOpenChange(false); // close modal
                    }}
                    className={`w-[168px] h-[40px] rounded-[10px] text-white text-[16px]
                      ${(!event || !reward)
                        ? "bg-[#F68DF6] cursor-not-allowed"
                        : "bg-background-purple"
                      }
                    `}
                  >
                    Create Reward
                  </Button>
                </div>
              </TooltipTrigger>

              {(!event || !reward) && (
                <TooltipContent side="bottom">
                  Choose a reward trigger and a reward to continue
                </TooltipContent>
              )}
            </Tooltip>
          </TooltipProvider>
        </div>
      </DialogContent>
    </Dialog>
  );
}