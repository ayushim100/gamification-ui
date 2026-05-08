import { useState } from "react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  placeholder: string;
  options: string[];
  value?: string;
  onChange: (val: string) => void;
  disabledOptions?: string[];
}

const durations = [
  "14 days",
  "1 month",
  "2 months",
  "3 months",
  "1 year",
];

export default function CustomSelect({
  placeholder,
  options,
  value,
  onChange,
  disabledOptions = [],
}: Props) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);
  const [crossAmount, setCrossAmount] = useState("");
  const [postTimes, setPostTimes] = useState("");
  const [period, setPeriod] = useState("");
  const [flatAmount, setFlatAmount] = useState("");

  const getDisplay = () => {
    if (selected === "Cross $X in sales" && crossAmount) {
      return `Cross $${crossAmount} in sales`;
    }
    if (selected === "Flat $X bonus" && flatAmount) {
      return `Flat $${flatAmount} bonus`;
    }
    if (selected === "Posts X times every Y period" && postTimes && period) {
      return `Posts ${postTimes} times every ${period} period`;
    }
    return selected || placeholder;
  };


  return (
    <Popover open={open} onOpenChange={setOpen}>
      {/* Trigger */}
      <PopoverTrigger asChild>
        <button
          className={cn(
            "w-full flex items-center justify-between rounded-[8px] p-[8px] bg-white",
            "transition-all",
            open
              ? "border-border-primary border-2"
              : "border-gray-200 border",
          )}
        >
          <span
            className={cn(
              selected ? "text-gray-800" : "text-gray-400"
            )}
          >
            {getDisplay()}
          </span>

          <ChevronDown
            className={cn(
              "w-5 h-5 transition-transform",
              open && "rotate-180"
            )}
          />
        </button>
      </PopoverTrigger>

      {/* Dropdown */}
      <PopoverContent
        align="start"
        className="w-[--radix-popover-trigger-width] 
             p-[4px]
             rounded-[8px]
             bg-white 
             border border-gray-200 
             shadow-xl 
             z-50"
      >
        <div className="">
          {options.map((option) => {
            const isDisabled = disabledOptions.includes(option);
            return (
              <div key={option}>
                <button
                  key={option}
                  disabled={isDisabled}
                  onClick={() => {
                    setSelected(option);
                    if (option !== "Cross $X in sales" && option !== "Flat $X bonus" && option !== "Posts X times every Y period") {
                      onChange(option);
                      setOpen(false);
                    }
                  }}
                  className={cn(
                    "w-full h-[40px] px-[12px] rounded-[8px]",
                    "flex items-center justify-between",
                    "text-left transition-colors",
                    isDisabled
                      ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                      : selected === option
                        ? "bg-[#FFF5FF] text-text-primary"
                        : "text-gray-800 hover:bg-gray-100"
                  )}
                >
                  <span>{option}</span>
                  {selected === option && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.704 5.29a1 1 0 010 1.42l-8 8a1 1 0 01-1.408 0l-4-4a1 1 0 111.408-1.42L8 12.59l7.296-7.3a1 1 0 011.408 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                {/* 🔥 Conditional Input */}
                {selected === option && option === "Cross $X in sales" && (
                  <div className="">
                    <div className="flex items-center border-border-primary border-2 rounded-[8px] overflow-hidden">
                      <span className="px-3 text-gray-500 border-r">$</span>
                      <input
                        type="number"
                        placeholder="e.g. 100"
                        value={crossAmount}
                        onChange={(e) => {
                          setCrossAmount(e.target.value);
                          onChange(`Cross $${e.target.value} in sales`);
                        }}
                        className="w-full bg-white px-3 py-2 outline-none"
                      />
                    </div>
                  </div>
                )}
                {/* 🔥 Conditional Input */}
                {selected === option && option === "Flat $X bonus" && (
                  <div className="">
                    <div className="flex items-center border-border-primary border-2 rounded-[8px] overflow-hidden">
                      <span className="px-3 text-gray-500 border-r">$</span>
                      <input
                        type="number"
                        placeholder="e.g. 100"
                        value={flatAmount}
                        onChange={(e) => {
                          setFlatAmount(e.target.value);
                          onChange(`Flat $${e.target.value} bonus`);
                        }}
                        className="w-full bg-white px-3 py-2 outline-none"
                      />
                    </div>
                  </div>
                )}

                {selected === option && option === "Posts X times every Y period" && (
                  <div className="flex gap-4 mt-4">

                    {/* Number Input */}
                    <input
                      type="number"
                      placeholder="eg: 4"
                      value={postTimes}
                      onChange={(e) => {
                        setPostTimes(e.target.value);
                        onChange(
                          `Posts ${e.target.value} times every ${period}`
                        );
                      }}
                      className="
                        w-full h-[40px]
                        border-2 border-[#C530C5]
                        rounded-[8px]
                        px-2
                        text-[16px]
                        text-[#303030]
                        placeholder:text-[#BDBDBD]
                        outline-none
                        bg-white
                      "
                    />

                    {/* Duration Select */}
                    <Select
                      value={period}
                      onValueChange={(value) => {
                        setPeriod(value);
                        onChange(
                          `Posts ${postTimes} times every ${value}`
                        );
                      }}
                    >
                      <SelectTrigger
                        className="
                          w-full h-[40px]
                          border-2 border-[#D9D9D9]
                          rounded-[8px]
                          px-5
                          text-[16px]
                          text-[#303030]
                          bg-white
                        "
                      >
                        <SelectValue placeholder="Select duration" />
                      </SelectTrigger>

                      <SelectContent className="rounded-[8px] bg-white">
                        {durations.map((item) => (
                          <SelectItem
                            key={item}
                            value={item}
                            className="text-[14px]"
                          >
                            {item}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  );
}